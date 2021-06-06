"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplate = void 0;
var getTemplate = function (props) {
    var source = props.source;
    var tmplIndex = source.indexOf('template()');
    if (tmplIndex < 0)
        return;
    var tmplFunc = source.slice(tmplIndex).replace(/\n/g, '');
    var tmplRG = new RegExp(/[`](.*?)[`]/g).exec(tmplFunc);
    if (!tmplRG)
        return;
    props.tmpl = tmplRG[1];
};
exports.getTemplate = getTemplate;
