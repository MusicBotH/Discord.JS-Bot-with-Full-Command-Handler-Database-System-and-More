@ECHO OFF
color 04

:choice
set /P c=Are you sure you want to start the bot? [Y/N]
if /I "%c%" EQU "Y" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else
goto :choice


:somewhere

node bot.js
:somewhere_else

echo Goodbye!
pause 
exit