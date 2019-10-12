' install WSL
' sudo apt install redis-server

' sudo visudo
' your_username ALL=NOPASSWD:/usr/sbin/service redis-server
' or to disable sudo passwords
' your_username ALL=(ALL:ALL) NOPASSWD:ALL
Set oShell = CreateObject("WScript.Shell")
oShell.Run "wsl", 0
oShell.Run "bash -c ""sudo service redis-server start --daemonize yes"""
