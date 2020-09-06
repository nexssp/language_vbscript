let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "VBScript";
languageConfig.description = "Microsoft's Visual Basic Scripting Edition";
languageConfig.url = "";
languageConfig.founders = ["Microsoft"];
languageConfig.developers = ["Microsoft"];
languageConfig.years = ["1996"];
languageConfig.extensions = [".vbs"];
languageConfig.builders = {};
languageConfig.compilers = {
  vbs: {
    install: "installed",
    command: "cscript",
    args: "//Nologo <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.vbscript.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
