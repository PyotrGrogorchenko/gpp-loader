"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleMessages = void 0;
var consoleMessages = function (props) {
    var _a = props.messages, errors = _a.errors, warnings = _a.warnings;
    if (!errors.length && !warnings.length)
        return;
    console.log("\n" + 'gpp-loader'.green + " in " + props.resourcePath);
    if (errors.length) {
        console.log("" + 'ERRORS'.red.bold);
        errors.forEach(function (error) {
            console.log(" " + error);
        });
    }
    if (warnings.length) {
        console.log("" + 'WARNINGS'.yellow.bold);
        warnings.forEach(function (warning) {
            console.log(" " + warning);
        });
    }
};
exports.consoleMessages = consoleMessages;
