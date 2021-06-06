"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponents = void 0;
var getComponents = function (props) {
    var tmpl = props.tmpl;
    var components = [];
    var regExp = new RegExp(/[<][A-Z0-9](.*?)[a-zA-Z0-9][\s>]/g);
    var matchAll = tmpl.matchAll(regExp);
    Array.from(matchAll).forEach(function (item) {
        var component = item[0].slice(1, item[0].length - 1);
        if (!components.includes(component))
            components.push(component);
    });
    props.components = components;
};
exports.getComponents = getComponents;
