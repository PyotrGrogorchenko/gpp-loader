"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentsPath = void 0;
var fs_1 = __importDefault(require("fs"));
var getComponentsPath = function (componentsDir) {
    var componentsPath = {};
    var compilerOptions = this._compiler.options;
    var context = "" + compilerOptions.context + (componentsDir === '' ? '' : "/" + componentsDir);
    var readDir = function (root, dir) {
        var rootDir = "" + root + (dir === '' ? '' : "/" + dir);
        var files = fs_1.default.readdirSync(rootDir, { withFileTypes: true });
        var entry = '';
        var isComponent = false;
        files.forEach(function (item) {
            if (item.isFile()) {
                if (item.name === 'index.ts') {
                    entry = 'index.ts';
                }
                else if (item.name.endsWith('.gpp.ts')) {
                    isComponent = true;
                    if (entry === '') {
                        entry = item.name;
                    }
                }
            }
            else {
                readDir(rootDir, item.name);
            }
        });
        if (isComponent) {
            componentsPath[dir] = rootDir + "/" + entry;
        }
    };
    readDir(context, '');
    return componentsPath;
};
exports.getComponentsPath = getComponentsPath;
