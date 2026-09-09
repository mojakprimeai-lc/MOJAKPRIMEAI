# Headless Edge cannot be told to scroll, and the Zelt AI advisor sits far below
# the fold. So the advisor section is lifted out of the page into a temporary
# standalone document that uses the same stylesheet, captured, then deleted.

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$demo = Join-Path $root "public\demos\zelt"
$source = Join-Path $demo "index.html"
$temp = Join-Path $demo "_advisor-shot.html"
$rawDir = Join-Path $env:TEMP "mojak-shots"
$raw = Join-Path $rawDir "zelt-advisor.png"
$out = Join-Path $root "public\work\zelt-advisor.jpg"
New-Item -ItemType Directory -Force -Path $rawDir | Out-Null

$html = Get-Content $source -Raw
$match = [regex]::Match($html, "<!-- AI Section -->(.*?)<!-- Why Choose Zelt -->", "Singleline")
if (-not $match.Success) { throw "Could not find the AI advisor section in index.html" }

$page = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Zelt AI Advisor</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="styles.css" />
<style>
  body { overflow: visible; }
  [data-aos] { opacity: 1 !important; transform: none !important; }
  .ai-section { padding-top: 3rem; padding-bottom: 3rem; }
</style>
</head>
<body>
$($match.Groups[1].Value)
</body>
</html>
"@

Set-Content -Path $temp -Value $page -Encoding UTF8

$url = "file:///" + (($temp -replace "\\", "/"))
$profile = Join-Path $env:TEMP ("mojak-edge-" + [guid]::NewGuid().ToString("N"))

Start-Process -FilePath "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -Wait -NoNewWindow -ArgumentList @(
  "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
  "--user-data-dir=$profile", "--window-size=1440,900", "--virtual-time-budget=8000",
  "--screenshot=$raw", $url
)

Remove-Item -Recurse -Force $profile -ErrorAction SilentlyContinue
Remove-Item -Force $temp -ErrorAction SilentlyContinue

$image = [System.Drawing.Image]::FromFile($raw)
try {
  $w = 1400
  $h = [int]($image.Height * ($w / $image.Width))
  $scaled = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($scaled)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($image, 0, 0, $w, $h)

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $params = New-Object System.Drawing.Imaging.EncoderParameters 1
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, 82)
  $scaled.Save($out, $codec, $params)

  $size = [int]((Get-Item $out).Length / 1KB)
  Write-Host ("zelt-advisor.jpg {0}x{1} {2} KB" -f $w, $h, $size)
}
finally {
  if ($g) { $g.Dispose() }
  if ($scaled) { $scaled.Dispose() }
  $image.Dispose()
}
