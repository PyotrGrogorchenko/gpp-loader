"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifySource = void 0;
require("colors");
var modifySource = function (props) {
    var components = props.components, componentsPath = props.componentsPath, source = props.source;
    var componentsImport = '//#gpp-loader #importComponents\\\\';
    var componentsfunc = '';
    var undefinedComponents = [];
    components.forEach(function (component) {
        if (!componentsPath[component]) {
            undefinedComponents.push(component);
        }
        else {
            componentsImport += "\nimport {" + component + "} from '" + componentsPath[component] + "'";
            componentsfunc += (componentsfunc === '' ? '' : ',') + component;
        }
    });
    componentsImport += '\n//#gpp-loader #importComponents//\n';
    componentsfunc = "//#gpp-loader #componentsfunc\\\\\ncomponents() {return {" + componentsfunc + "}}\n//#gpp-loader #componentsfunc//";
    var res = source;
    res = componentsImport.concat(res);
    res = res.replace('template()', componentsfunc + "\ntemplate()");
    if (undefinedComponents.length) {
        var list = undefinedComponents.reduce(function (prev, current) { return "" + prev + (prev ? ', ' : '') + current; });
        props.messages.errors.push('Undefined components'.red + ": " + list);
    }
    props.source = res;
};
exports.modifySource = modifySource;
