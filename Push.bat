@echo off
start cmd /c "mkdocs gh-deploy &&taskkill /f /t /im cmd.exe"
