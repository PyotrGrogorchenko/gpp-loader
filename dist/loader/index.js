"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schema_utils_1 = require("schema-utils");
var loader_utils_1 = require("loader-utils");
var getComponents_1 = require("./getComponents");
var getComponentsPath_1 = require("./getComponentsPath");
var getTemplate_1 = require("./getTemplate");
var modifySource_1 = require("./modifySource");
var schema_json_1 = __importDefault(require("./schema.json"));
var consoleMessages_1 = require("./consoleMessages");
exports.default = (function () {
    var componentsPath;
    function loader(source) {
        var options = loader_utils_1.getOptions(this);
        schema_utils_1.validate(schema_json_1.default, options, {
            name: 'ppg-loader'
        });
        var resourcePath = this.resourcePath;
        if (!resourcePath.endsWith('.gpp.ts'))
            return source;
        if (!componentsPath)
            componentsPath = getComponentsPath_1.getComponentsPath.apply(this, [typeof options.componentsDir === 'string' ? options.componentsDir : '']);
        if (componentsPath === {})
            return source;
        var props = {
            source: source,
            options: options,
            resourcePath: resourcePath,
            componentsPath: componentsPath,
            tmpl: '',
            components: [],
            messages: { errors: [], warnings: [] }
        };
        getTemplate_1.getTemplate(props);
        if (!props.tmpl)
            return source;
        getComponents_1.getComponents(props);
        if (!props.components.length)
            return source;
        modifySource_1.modifySource(props);
        consoleMessages_1.consoleMessages(props);
        return props.source;
    }
    return loader;
});
