module.exports = {
  description: "Visual Basic Script",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "cscript",
  extension: ".vbs",
  executeCommandLine: "",
  InteractiveShell: "",
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install ahk <package>",
      darwin: "nexss install ahk <package>",
      linux: "nexss install ahk <package>"
    }
  },
  url: ""
};
