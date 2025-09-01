@echo off
echo ========================================
echo    ZERODHA CLONE - STOP SCRIPT
echo ========================================
echo.
echo Stopping all Node.js processes...
echo.

echo Killing all Node.js processes...
taskkill /f /im node.exe >nul 2>&1
taskkill /f /im npm.cmd >nul 2>&1

echo.
echo ========================================
echo    ALL SERVICES STOPPED
echo ========================================
echo.
echo All Zerodha Clone services have been stopped.
echo.
echo Press any key to exit...
pause >nul
