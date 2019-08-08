"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeCheck=require("./type-check"),_getObjDeepProp=require("./utils/get-obj-deep-prop"),_getObjDeepProp2=_interopRequireDefault(_getObjDeepProp),_whereTool=require("./where-tool"),_whereTool2=_interopRequireDefault(_whereTool);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var where=function(a,b,c){if(!(0,_typeCheck.isArray)(a))return[];var d;if((0,_typeCheck.isObject)(b))d=[b];else if((0,_typeCheck.isArrayOfObject)(b))d=b;else if((0,_typeCheck.isFunction)(b))d=[b(_whereTool2.default)];else return a;var e=[],f=[];return d.forEach(function(b){Object.keys(b).forEach(function(d){e=a.filter(function(a){var e=a[d],f=b[d];if(c&&c.deep&&(e=(0,_getObjDeepProp2.default)(d)(a)),(0,_typeCheck.isObject)(f)&&f.type){var g=f.type,h=f.value;if(">"===g)return e>h;if(">="===g)return e>=h;if("<"===g)return e<h;if("<="===g)return e<=h;if("includes"===g)return e.includes(h);if("!includes"===g)return!e.includes(h);if("=="===g)return e==h;if("!="===g)return e!=h;if("between"===g){var i=h[0],j=h[1];return e>=i&&e<=j}return!1}return e===f})}),f=f.concat(e),e=[]}),f};exports.default=where;