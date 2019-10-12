Function JsonEncodeQuotes(input)
  JsonEncodeQuotes = Replace(input & "", """", "\""")
End Function
' Example:
' strJSONToSend = "{""myprop1"": """ & JsonEncodeQuotes(var1) & """, ""myprop2"": """ & JsonEncodeQuotes(val2) & """, ""myprop3"": """ & JsonEncodeQuotes(val3) & """}"

Function ParseJson(strJson) 
  Set html = CreateObject("htmlfile") 
  Set window = html.parentWindow 
  window.execScript "var json = " & strJson, "JScript" 
  Set ParseJson = window.json 
End Function 

Set scriptControl = CreateObject("MSScriptControl.ScriptControl") 
scriptControl.Language = "JScript"    
Set searchResultObject = scriptControl.Eval("(" + json + ")")