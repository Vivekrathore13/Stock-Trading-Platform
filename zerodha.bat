@echo off
setlocal

if "%1"=="start" goto start
if "%1"=="stop" goto stop
if "%1"=="status" goto status
if "%1"=="open" goto open
goto help

:start
echo ========================================
echo    STARTING ZERODHA CLONE
echo ========================================
echo.
call "%~dp0start-zerodha.bat"
goto end

:stop
echo ========================================
echo    STOPPING ZERODHA CLONE
echo ========================================
echo.
call "%~dp0stop-zerodha.bat"
goto end

:status
echo ========================================
echo    ZERODHA CLONE STATUS
echo ========================================
echo.
echo Checking services...
netstat -an | findstr ":3002" >nul && echo ✅ Backend (Port 3002) - RUNNING || echo ❌ Backend (Port 3002) - STOPPED
netstat -an | findstr ":3003" >nul && echo ✅ Frontend (Port 3003) - RUNNING || echo ❌ Frontend (Port 3003) - STOPPED  
netstat -an | findstr ":3004" >nul && echo ✅ Dashboard (Port 3004) - RUNNING || echo ❌ Dashboard (Port 3004) - STOPPED
echo.
goto end

:open
echo ========================================
echo    OPENING ZERODHA CLONE
echo ========================================
echo.
echo Opening applications in browser...
start http://localhost:3002
start http://localhost:3003
start http://localhost:3004
echo.
echo ✅ All applications opened in browser!
goto end

:help
echo ========================================
echo    ZERODHA CLONE - GLOBAL COMMANDS
echo ========================================
echo.
echo Usage: zerodha [command]
echo.
echo Commands:
echo   start    - Start all services
echo   stop     - Stop all services  
echo   status   - Check service status
echo   open     - Open all apps in browser
echo   help     - Show this help
echo.
echo Examples:
echo   zerodha start
echo   zerodha stop
echo   zerodha status
echo   zerodha open
echo.

:end
