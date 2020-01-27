input_stdin = Wscript.StdIn.ReadAll
input_array = split(input_stdin, vbLf)

' Dim oIE
' Set oIE = CreateObject("InternetExplorer.Application.1")
' oIE.Visible = true
' oIE.Navigate "https://www.marcinpolak.eu"
Set objStdOut = WScript.StdOut
array_ubound = ubound (input_array) 
 
for i = 0 to array_ubound
    objStdOut.write input_array(i)
 
        ' on the last line don't append a line feed, \n, chr(10)
    if i <> array_ubound then objStdOut.write vbLf

next

Function ParseJson(strJson) 
  Set html = CreateObject("htmlfile") 
  Set window = html.parentWindow 
  window.execScript "var json = " & strJson, "JScript" 
  Set ParseJson = window.json 
End Function 



