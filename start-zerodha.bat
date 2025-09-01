@echo off
echo ========================================
echo    ZERODHA CLONE - STARTUP SCRIPT
echo ========================================
echo.
echo Starting all services...
echo.

echo [1/3] Starting Backend Server (Port 3002)...
start "Zerodha Backend" cmd /k "cd /d "%~dp0backend" && npm start"

timeout /t 3 /nobreak >nul

echo [2/3] Starting Frontend Application (Port 3000)...
start "Zerodha Frontend" cmd /k "cd /d "%~dp0frontend" && npm start"

timeout /t 3 /nobreak >nul

echo [3/3] Starting Dashboard Application (Port 3004)...
start "Zerodha Dashboard" cmd /k "cd /d "%~dp0dashboard" && set PORT=3004 && npm start"

echo.
echo ========================================
echo    ALL SERVICES STARTING...
echo ========================================
echo.
echo Backend:    http://localhost:3002
echo Frontend:   http://localhost:3003
echo Dashboard:  http://localhost:3004
echo.
echo Press any key to exit this window...
pause >nul
