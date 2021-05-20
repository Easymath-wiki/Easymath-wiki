@echo off
start cmd /c "mkdocs gh-deploy && timeout 5 &&taskkill /f /t /im cmd.exe"