@IF EXIST "%~dp0\node\node.exe" (
  "%~dp0\node\node.exe"  "%~dp0\start.js" %*
) ELSE (
  node  "%~dp0\start.js" %*
)