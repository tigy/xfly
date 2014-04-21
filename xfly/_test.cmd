@IF EXIST "%~dp0\node\node.exe" (
  "%~dp0\node\node.exe"  "%~dp0\server\_test.js" %*
) ELSE (
  node  "%~dp0\server\_test.js" %*
)