# Captures the Zelt demo build and converts the Visum screenshots into
# web-sized JPEGs for the case study pages. Run from the project root:
#   powershell -ExecutionPolicy Bypass -File scripts\build-assets.ps1

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$work = Join-Path $root "public\work"
$raw = Join-Path $env:TEMP "mojak-shots"
New-Item -ItemType Directory -Force -Path $work, $raw | Out-Null

$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$zelt = Join-Path $root "public\demos\zelt\index.html"
$zeltUrl = "file:///" + ($zelt -replace "\\", "/")

function Capture($url, $width, $height, $out) {
  $profile = Join-Path $env:TEMP ("mojak-edge-" + [guid]::NewGuid().ToString("N"))
  $args = @(
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--user-data-dir=$profile",
    "--window-size=$width,$height",
    "--virtual-time-budget=6000",
    "--screenshot=$out",
    $url
  )
  Start-Process -FilePath $edge -ArgumentList $args -Wait -NoNewWindow
  Remove-Item -Recurse -Force $profile -ErrorAction SilentlyContinue
}

function ToJpeg($source, $target, $maxWidth) {
  if (-not (Test-Path $source)) {
    Write-Host "  missing: $source"
    return
  }

  $image = [System.Drawing.Image]::FromFile($source)
  try {
    $scale = [Math]::Min(1.0, $maxWidth / $image.Width)
    $w = [int]($image.Width * $scale)
    $h = [int]($image.Height * $scale)

    $bitmap = New-Object System.Drawing.Bitmap $w, $h
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($image, 0, 0, $w, $h)

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $params = New-Object System.Drawing.Imaging.EncoderParameters 1
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, 82)

    $bitmap.Save($target, $codec, $params)
    Write-Host ("  {0}  {1}x{2}  {3} KB" -f (Split-Path $target -Leaf), $w, $h, [int]((Get-Item $target).Length / 1KB))
  }
  finally {
    if ($graphics) { $graphics.Dispose() }
    if ($bitmap) { $bitmap.Dispose() }
    $image.Dispose()
  }
}

Write-Host "Capturing the Zelt demo build"
Capture $zeltUrl 1440 900 (Join-Path $raw "zelt-desktop.png")
Capture $zeltUrl 414 896 (Join-Path $raw "zelt-mobile.png")
Capture ($zeltUrl + "#ai-section") 1440 900 (Join-Path $raw "zelt-advisor.png")

Write-Host "Writing web-sized images into public/work"
$visum = "C:\Users\mchna\Desktop\MOJAK\Files\visum\visum-park\shots"
ToJpeg (Join-Path $visum "desktop-home-01.png") (Join-Path $work "visum-desktop.jpg") 1400
ToJpeg (Join-Path $visum "mobile-home-01.png") (Join-Path $work "visum-mobile.jpg") 560
ToJpeg (Join-Path $visum "flow-mobile-concierge.png") (Join-Path $work "visum-concierge.jpg") 560
ToJpeg (Join-Path $raw "zelt-desktop.png") (Join-Path $work "zelt-desktop.jpg") 1400
ToJpeg (Join-Path $raw "zelt-mobile.png") (Join-Path $work "zelt-mobile.jpg") 560
ToJpeg (Join-Path $raw "zelt-advisor.png") (Join-Path $work "zelt-advisor.jpg") 1400

Write-Host "Done"
