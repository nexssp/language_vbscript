let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "VBScript";
languageConfig.description = "Microsoft's Visual Basic Scripting Edition";
languageConfig.url = "";
languageConfig.extensions = [".vbs"];
languageConfig.builders = {
  tofill: {
    install: "scoop install llvm",
    //build: "pkg --output <destinationFile> --out-path <destinationPath> <file>",
    command: "clang++",
    build: function() {
      const path = require("path");
      //take command from current folder
      return path.join(__dirname, "customCompiler.vbscript.php.cmd");
    },
    args: "<file> <destinationFile>",
    // C++ needs to be build to exe, so no compile option
    help: ``
  }
};
languageConfig.compilers = {
  vbs: {
    install: "installed",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "cscript",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.vbscript.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed <args>",
    search: "composer search <args>",
    install: "composer require <args>",
    uninstall: "composer remove <args>",
    help: "composer <args>",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
