# Screenshots every page of the site, desktop and mobile, for visual review.
#   npm run start   (in another terminal, PORT=4311)
#   powershell -ExecutionPolicy Bypass -File scripts\shots.ps1

$base = if ($env:SHOT_BASE) { $env:SHOT_BASE } else { "http://localhost:4311" }
$out = Join-Path (Split-Path -Parent $PSScriptRoot) "shots"
New-Item -ItemType Directory -Force -Path $out | Out-Null

$pages = @(
  @{ name = "home"; path = "/" },
  @{ name = "solutions"; path = "/solutions" },
  @{ name = "pos"; path = "/solutions/ai-point-of-sale" },
  @{ name = "chat"; path = "/solutions/ai-chat-assistants" },
  @{ name = "work"; path = "/work" },
  @{ name = "case-visum"; path = "/work/visum-park-hotel" },
  @{ name = "pricing"; path = "/pricing" },
  @{ name = "about"; path = "/about" },
  @{ name = "contact"; path = "/contact" }
)

$devices = @(
  @{ name = "desktop"; w = 1440; h = 950 },
  @{ name = "mobile"; w = 414; h = 896 }
)

foreach ($page in $pages) {
  foreach ($device in $devices) {
    $file = Join-Path $out ("{0}-{1}.png" -f $device.name, $page.name)
    $profile = Join-Path $env:TEMP ("mojak-edge-" + [guid]::NewGuid().ToString("N"))
    Start-Process -FilePath "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -Wait -NoNewWindow -ArgumentList @(
      # Reduced motion switches the scroll reveals off, so nothing is captured
      # mid-fade and every section shows up in the shot.
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
      "--force-prefers-reduced-motion",
      "--user-data-dir=$profile",
      ("--window-size={0},{1}" -f $device.w, $device.h),
      "--virtual-time-budget=7000",
      "--screenshot=$file",
      ($base + $page.path)
    )
    Remove-Item -Recurse -Force $profile -ErrorAction SilentlyContinue
    Write-Host ("{0} {1}" -f $device.name, $page.path)
  }
}
