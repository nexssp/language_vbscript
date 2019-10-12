Option Explicit

Sub Include(file)
	On Error Resume Next

	Dim FSO: Set FSO = CreateObject("Scripting.FileSystemObject")
	ExecuteGlobal FSO.OpenTextFile(file & ".vbs", 1).ReadAll()
	Set FSO = Nothing

	If Err.Number <> 0 Then
		If Err.Number = 1041 Then
			Err.Clear
		Else
			WScript.Quit 1
		End If
	End If
End Sub

If WScript.ScriptName = "main_template.vbs" Then
	Include "v_JSON"

	Dim json
	Set json = New v_JSON

	json.FromString "{""key1"": null, ""key2"": { ""key3"": ""val3"" }, " & _
			"""key4"": ""val4"", ""key5"": true, ""key6"": 7.8, " & _
			"""employees"":[ { ""firstName"":""John"", ""lastName""" & _
			":""Doe"" }, { ""firstName"":""Anna"", ""lastName"":" & _
			"""Smith"" }, { ""firstName"":""Peter"", ""lastName"":" & _
			"""Jones"" } ] }"

	WScript.Echo json.Item("employees")(1).Item("firstName")
End If