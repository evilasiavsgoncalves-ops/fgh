@echo off
title Servidor Local - A RECEBER
echo ==============================================
echo   Iniciando Servidor Web Local (Porta 8080)
echo ==============================================
echo.
echo Abrindo o site no seu navegador...
start http://localhost:8080/consulte.html

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"$listener = New-Object System.Net.HttpListener; ^
$listener.Prefixes.Add('http://localhost:8080/'); ^
$listener.Start(); ^
Write-Host 'Servidor rodando em http://localhost:8080/ (Pressione Ctrl+C para encerrar)'; ^
$basePath = (Get-Item .).FullName; ^
while ($listener.IsListening) { ^
    try { ^
        $context = $listener.GetContext(); ^
        $req = $context.Request; ^
        $res = $context.Response; ^
        $urlPath = $req.Url.AbsolutePath.TrimStart('/'); ^
        if ([string]::IsNullOrWhiteSpace($urlPath)) { $urlPath = 'index.html' } ^
        $filePath = Join-Path $basePath $urlPath; ^
        if (!(Test-Path $filePath -PathType Leaf)) { ^
            $filePath = Join-Path $basePath ($urlPath + '.html'); ^
        } ^
        if (Test-Path $filePath -PathType Leaf) { ^
            $bytes = [System.IO.File]::ReadAllBytes($filePath); ^
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower(); ^
            $mime = 'application/octet-stream'; ^
            if ($ext -eq '.html') { $mime = 'text/html; charset=utf-8' } ^
            elseif ($ext -eq '.js') { $mime = 'application/javascript; charset=utf-8' } ^
            elseif ($ext -eq '.css') { $mime = 'text/css; charset=utf-8' } ^
            elseif ($ext -eq '.png') { $mime = 'image/png' } ^
            elseif ($ext -eq '.jpg' -or $ext -eq '.jpeg') { $mime = 'image/jpeg' } ^
            elseif ($ext -eq '.mp4') { $mime = 'video/mp4' } ^
            elseif ($ext -eq '.mp3') { $mime = 'audio/mpeg' } ^
            elseif ($ext -eq '.gif') { $mime = 'image/gif' } ^
            $res.ContentType = $mime; ^
            $res.ContentLength64 = $bytes.Length; ^
            $res.OutputStream.Write($bytes, 0, $bytes.Length); ^
        } else { ^
            $res.StatusCode = 404; ^
        } ^
        $res.OutputStream.Close(); ^
    } catch {} ^
}"
pause
