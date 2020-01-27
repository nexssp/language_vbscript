let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "VBScript";
languageConfig.description = "Microsoft's Visual Basic Scripting Edition";
languageConfig.url = "";
languageConfig.extensions = [".vbs"];
languageConfig.builders = {};
languageConfig.compilers = {
  vbs: {
    install: "installed",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "cscript //Nologo",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.vbscript.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
