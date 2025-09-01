@echo off
echo ========================================
echo    ADDING ZERODHA CLONE TO SYSTEM PATH
echo ========================================
echo.

set "PROJECT_PATH=%~dp0"
set "PROJECT_PATH=%PROJECT_PATH:~0,-1%"

echo Project Path: %PROJECT_PATH%
echo.

:: Add to user PATH using setx
setx PATH "%PATH%;%PROJECT_PATH%" >nul 2>&1

if %errorlevel% equ 0 (
    echo ✅ Successfully added to PATH!
    echo.
    echo ⚠️  Please restart your terminal/command prompt for changes to take effect.
) else (
    echo ❌ Failed to add to PATH. Please run as administrator.
)

echo.
echo ========================================
echo    USAGE INSTRUCTIONS
echo ========================================
echo.
echo After restarting your terminal, you can use:
echo   • start-zerodha.bat    - Start all services
echo   • stop-zerodha.bat     - Stop all services
echo.
echo From ANY directory on your system!
echo.
echo Press any key to continue...
pause >nul
