#!/usr/bin/env node
<<<<<<< HEAD
<<<<<<< HEAD
"use strict";module.exports=function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=144)}({144:function(n,e,o){var t=o(145),r=o(146)(process.argv.slice(2));r.console=!0,r.help||r._.indexOf("help")>-1?(console.log("\n  ,,',                                  ,,             ,,,,,,           ,',,\n ,,,                                                  ,,,                  ,,,\n ,,       ,,,,,    ,,,,,,   ,,,     ,,  ,,  .,,,,,,   ,,,,,,,   ,,,,,       ,,\n ,,     ,,    ,,  ,,,   ,,,  ,,    ,,,  ,,  ,,,   ,,, ,,      ,,,   ,,,     ,,\n ,,,   ,,     .,, ,,,    ,,  ,,,   ,,   ,,  ,,,    ,, ,,     ,,      ,,     ,,,\n ,,    ,,,,,,,,,, ,,,    ,,   ,,  ,,    ,,  ,,,    ,, ,,     ,,      ,,     ,,\n ,,    ,,,        ,,,    ,,    ,,,,,    ,,  ,,,    ,, ,,     ,,,    ,,,     ,,\n ,,      ,,,,,,,  ,,,    ,,     ,,,     ,,  ,,,    ,, ,,       ,,,,,,,      ,,\n ,,,                                                                       ,,,\n  ,,,'                                                                  ',,,\n\n  VERSION: 7.2.0\n\n  USAGE:\n\n    `envinfo` || `npx envinfo`\n\n  OPTIONS:\n\n    --system               Print general system info such as OS, CPU, Memory and Shell\n    --browsers             Get version numbers of installed web browsers\n    --SDKs                 Get platforms, build tools and SDKs of iOS and Android\n    --IDEs                 Get version numbers of installed IDEs\n    --languages            Get version numbers of installed languages such as Java, Python, PHP, etc\n    --binaries             Get version numbers of node, npm, watchman, etc\n    --npmPackages          Get version numbers of locally installed npm packages - glob, string, or comma delimited list\n    --npmGlobalPackages    Get version numbers of globally installed npm packages\n\n    --duplicates           Mark duplicate npm packages inside parentheses eg. (2.1.4)\n    --fullTree             Traverse entire node_modules dependency tree, not just top level\n\n    --markdown             Print output in markdown format\n    --json                 Print output in JSON format\n    --console              Print to console (defaults to on for CLI usage, off for programmatic usage)\n    --showNotFound         Don't filter out values marked 'Not Found'\n    --title                Give your report a top level title ie 'Environment Report'\n\n    --clipboard            *Removed - use clipboardy or clipboard-cli directly*\n  "),process.exit(0)):(r.version||r.v||r._.indexOf("version")>-1)&&(console.log("7.2.0"),process.exit(0)),(0,t.cli)(r)},145:function(n,e){n.exports=require("./envinfo")},146:function(n,e){function o(n){return"number"==typeof n||(!!/^0x[0-9a-f]+$/i.test(n)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n))}n.exports=function(n,e){e||(e={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof e.unknown&&(t.unknownFn=e.unknown),"boolean"==typeof e.boolean&&e.boolean?t.allBools=!0:[].concat(e.boolean).filter(Boolean).forEach(function(n){t.bools[n]=!0});var r={};Object.keys(e.alias||{}).forEach(function(n){r[n]=[].concat(e.alias[n]),r[n].forEach(function(e){r[e]=[n].concat(r[n].filter(function(n){return e!==n}))})}),[].concat(e.string).filter(Boolean).forEach(function(n){t.strings[n]=!0,r[n]&&(t.strings[r[n]]=!0)});var s=e.default||{},i={_:[]};Object.keys(t.bools).forEach(function(n){a(n,void 0!==s[n]&&s[n])});var l=[];function a(n,e,s){if(!s||!t.unknownFn||function(n,e){return t.allBools&&/^--[^=]+$/.test(e)||t.strings[n]||t.bools[n]||r[n]}(n,s)||!1!==t.unknownFn(s)){var l=!t.strings[n]&&o(e)?Number(e):e;u(i,n.split("."),l),(r[n]||[]).forEach(function(n){u(i,n.split("."),l)})}}function u(n,e,o){var r=n;e.slice(0,-1).forEach(function(n){void 0===r[n]&&(r[n]={}),r=r[n]});var s=e[e.length-1];void 0===r[s]||t.bools[s]||"boolean"==typeof r[s]?r[s]=o:Array.isArray(r[s])?r[s].push(o):r[s]=[r[s],o]}function c(n){return r[n].some(function(n){return t.bools[n]})}-1!==n.indexOf("--")&&(l=n.slice(n.indexOf("--")+1),n=n.slice(0,n.indexOf("--")));for(var f=0;f<n.length;f++){var p=n[f];if(/^--.+=/.test(p)){var d=p.match(/^--([^=]+)=([\s\S]*)$/),b=d[1],v=d[2];t.bools[b]&&(v="false"!==v),a(b,v,p)}else if(/^--no-.+/.test(p)){a(b=p.match(/^--no-(.+)/)[1],!1,p)}else if(/^--.+/.test(p)){b=p.match(/^--(.+)/)[1];void 0===(y=n[f+1])||/^-/.test(y)||t.bools[b]||t.allBools||r[b]&&c(b)?/^(true|false)$/.test(y)?(a(b,"true"===y,p),f++):a(b,!t.strings[b]||"",p):(a(b,y,p),f++)}else if(/^-[^-]+/.test(p)){for(var m=p.slice(1,-1).split(""),g=!1,h=0;h<m.length;h++){var y;if("-"!==(y=p.slice(h+2))){if(/[A-Za-z]/.test(m[h])&&/=/.test(y)){a(m[h],y.split("=")[1],p),g=!0;break}if(/[A-Za-z]/.test(m[h])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(y)){a(m[h],y,p),g=!0;break}if(m[h+1]&&m[h+1].match(/\W/)){a(m[h],p.slice(h+2),p),g=!0;break}a(m[h],!t.strings[m[h]]||"",p)}else a(m[h],y,p)}b=p.slice(-1)[0];g||"-"===b||(!n[f+1]||/^(-|--)[^-]/.test(n[f+1])||t.bools[b]||r[b]&&c(b)?n[f+1]&&/true|false/.test(n[f+1])?(a(b,"true"===n[f+1],p),f++):a(b,!t.strings[b]||"",p):(a(b,n[f+1],p),f++))}else if(t.unknownFn&&!1===t.unknownFn(p)||i._.push(t.strings._||!o(p)?p:Number(p)),e.stopEarly){i._.push.apply(i._,n.slice(f+1));break}}return Object.keys(s).forEach(function(n){var e,o,t;e=i,o=n.split("."),t=e,o.slice(0,-1).forEach(function(n){t=t[n]||{}}),o[o.length-1]in t||(u(i,n.split("."),s[n]),(r[n]||[]).forEach(function(e){u(i,e.split("."),s[n])}))}),e["--"]?(i["--"]=new Array,l.forEach(function(n){i["--"].push(n)})):l.forEach(function(n){i._.push(n)}),i}}});
=======
"use strict";module.exports=function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=159)}({159:function(n,e,o){var t=o(160),r=o(161)(process.argv.slice(2));r.console=!0,r.help||r._.indexOf("help")>-1?(console.log("\n  ,,',                                  ,,             ,,,,,,           ,',,\n ,,,                                                  ,,,                  ,,,\n ,,       ,,,,,    ,,,,,,   ,,,     ,,  ,,  .,,,,,,   ,,,,,,,   ,,,,,       ,,\n ,,     ,,    ,,  ,,,   ,,,  ,,    ,,,  ,,  ,,,   ,,, ,,      ,,,   ,,,     ,,\n ,,,   ,,     .,, ,,,    ,,  ,,,   ,,   ,,  ,,,    ,, ,,     ,,      ,,     ,,,\n ,,    ,,,,,,,,,, ,,,    ,,   ,,  ,,    ,,  ,,,    ,, ,,     ,,      ,,     ,,\n ,,    ,,,        ,,,    ,,    ,,,,,    ,,  ,,,    ,, ,,     ,,,    ,,,     ,,\n ,,      ,,,,,,,  ,,,    ,,     ,,,     ,,  ,,,    ,, ,,       ,,,,,,,      ,,\n ,,,                                                                       ,,,\n  ,,,'                                                                  ',,,\n\n  VERSION: 7.1.0\n\n  USAGE:\n\n    `envinfo` || `npx envinfo`\n\n  OPTIONS:\n\n    --system               Print general system info such as OS, CPU, Memory and Shell\n    --browsers             Get version numbers of installed web browsers\n    --SDKs                 Get platforms, build tools and SDKs of iOS and Android\n    --IDEs                 Get version numbers of installed IDEs\n    --languages            Get version numbers of installed languages such as Java, Python, PHP, etc\n    --binaries             Get version numbers of node, npm, watchman, etc\n    --npmPackages          Get version numbers of locally installed npm packages - glob, string, or comma delimited list\n    --npmGlobalPackages    Get version numbers of globally installed npm packages\n\n    --duplicates           Mark duplicate npm packages inside parentheses eg. (2.1.4)\n    --fullTree             Traverse entire node_modules dependency tree, not just top level\n\n    --markdown             Print output in markdown format\n    --json                 Print output in JSON format\n    --console              Print to console (defaults to on for CLI usage, off for programmatic usage)\n    --showNotFound         Don't filter out values marked 'Not Found'\n    --title                Give your report a top level title ie 'Environment Report'\n\n    --clipboard            *Removed - use clipboardy or clipboard-cli directly*\n  "),process.exit(0)):(r.version||r.v||r._.indexOf("version")>-1)&&(console.log("7.1.0"),process.exit(0)),(0,t.cli)(r)},160:function(n,e){n.exports=require("./envinfo")},161:function(n,e){function o(n){return"number"==typeof n||(!!/^0x[0-9a-f]+$/i.test(n)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n))}n.exports=function(n,e){e||(e={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof e.unknown&&(t.unknownFn=e.unknown),"boolean"==typeof e.boolean&&e.boolean?t.allBools=!0:[].concat(e.boolean).filter(Boolean).forEach(function(n){t.bools[n]=!0});var r={};Object.keys(e.alias||{}).forEach(function(n){r[n]=[].concat(e.alias[n]),r[n].forEach(function(e){r[e]=[n].concat(r[n].filter(function(n){return e!==n}))})}),[].concat(e.string).filter(Boolean).forEach(function(n){t.strings[n]=!0,r[n]&&(t.strings[r[n]]=!0)});var s=e.default||{},i={_:[]};Object.keys(t.bools).forEach(function(n){a(n,void 0!==s[n]&&s[n])});var l=[];function a(n,e,s){if(!s||!t.unknownFn||function(n,e){return t.allBools&&/^--[^=]+$/.test(e)||t.strings[n]||t.bools[n]||r[n]}(n,s)||!1!==t.unknownFn(s)){var l=!t.strings[n]&&o(e)?Number(e):e;u(i,n.split("."),l),(r[n]||[]).forEach(function(n){u(i,n.split("."),l)})}}function u(n,e,o){var r=n;e.slice(0,-1).forEach(function(n){void 0===r[n]&&(r[n]={}),r=r[n]});var s=e[e.length-1];void 0===r[s]||t.bools[s]||"boolean"==typeof r[s]?r[s]=o:Array.isArray(r[s])?r[s].push(o):r[s]=[r[s],o]}function c(n){return r[n].some(function(n){return t.bools[n]})}-1!==n.indexOf("--")&&(l=n.slice(n.indexOf("--")+1),n=n.slice(0,n.indexOf("--")));for(var f=0;f<n.length;f++){var p=n[f];if(/^--.+=/.test(p)){var d=p.match(/^--([^=]+)=([\s\S]*)$/),b=d[1],v=d[2];t.bools[b]&&(v="false"!==v),a(b,v,p)}else if(/^--no-.+/.test(p)){a(b=p.match(/^--no-(.+)/)[1],!1,p)}else if(/^--.+/.test(p)){b=p.match(/^--(.+)/)[1];void 0===(y=n[f+1])||/^-/.test(y)||t.bools[b]||t.allBools||r[b]&&c(b)?/^(true|false)$/.test(y)?(a(b,"true"===y,p),f++):a(b,!t.strings[b]||"",p):(a(b,y,p),f++)}else if(/^-[^-]+/.test(p)){for(var m=p.slice(1,-1).split(""),g=!1,h=0;h<m.length;h++){var y;if("-"!==(y=p.slice(h+2))){if(/[A-Za-z]/.test(m[h])&&/=/.test(y)){a(m[h],y.split("=")[1],p),g=!0;break}if(/[A-Za-z]/.test(m[h])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(y)){a(m[h],y,p),g=!0;break}if(m[h+1]&&m[h+1].match(/\W/)){a(m[h],p.slice(h+2),p),g=!0;break}a(m[h],!t.strings[m[h]]||"",p)}else a(m[h],y,p)}b=p.slice(-1)[0];g||"-"===b||(!n[f+1]||/^(-|--)[^-]/.test(n[f+1])||t.bools[b]||r[b]&&c(b)?n[f+1]&&/true|false/.test(n[f+1])?(a(b,"true"===n[f+1],p),f++):a(b,!t.strings[b]||"",p):(a(b,n[f+1],p),f++))}else if(t.unknownFn&&!1===t.unknownFn(p)||i._.push(t.strings._||!o(p)?p:Number(p)),e.stopEarly){i._.push.apply(i._,n.slice(f+1));break}}return Object.keys(s).forEach(function(n){var e,o,t;e=i,o=n.split("."),t=e,o.slice(0,-1).forEach(function(n){t=t[n]||{}}),o[o.length-1]in t||(u(i,n.split("."),s[n]),(r[n]||[]).forEach(function(e){u(i,e.split("."),s[n])}))}),e["--"]?(i["--"]=new Array,l.forEach(function(n){i["--"].push(n)})):l.forEach(function(n){i._.push(n)}),i}}});
>>>>>>> fix: nope, semver can’t be external :facepalm:
=======
"use strict";module.exports=function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=135)}({135:function(n,e,o){var t=o(136),r=o(137)(process.argv.slice(2));r.console=!0,r.help||r._.indexOf("help")>-1?(console.log("\n  ,,',                                  ,,             ,,,,,,           ,',,\n ,,,                                                  ,,,                  ,,,\n ,,       ,,,,,    ,,,,,,   ,,,     ,,  ,,  .,,,,,,   ,,,,,,,   ,,,,,       ,,\n ,,     ,,    ,,  ,,,   ,,,  ,,    ,,,  ,,  ,,,   ,,, ,,      ,,,   ,,,     ,,\n ,,,   ,,     .,, ,,,    ,,  ,,,   ,,   ,,  ,,,    ,, ,,     ,,      ,,     ,,,\n ,,    ,,,,,,,,,, ,,,    ,,   ,,  ,,    ,,  ,,,    ,, ,,     ,,      ,,     ,,\n ,,    ,,,        ,,,    ,,    ,,,,,    ,,  ,,,    ,, ,,     ,,,    ,,,     ,,\n ,,      ,,,,,,,  ,,,    ,,     ,,,     ,,  ,,,    ,, ,,       ,,,,,,,      ,,\n ,,,                                                                       ,,,\n  ,,,'                                                                  ',,,\n\n  VERSION: 7.1.0\n\n  USAGE:\n\n    `envinfo` || `npx envinfo`\n\n  OPTIONS:\n\n    --system               Print general system info such as OS, CPU, Memory and Shell\n    --browsers             Get version numbers of installed web browsers\n    --SDKs                 Get platforms, build tools and SDKs of iOS and Android\n    --IDEs                 Get version numbers of installed IDEs\n    --languages            Get version numbers of installed languages such as Java, Python, PHP, etc\n    --binaries             Get version numbers of node, npm, watchman, etc\n    --npmPackages          Get version numbers of locally installed npm packages - glob, string, or comma delimited list\n    --npmGlobalPackages    Get version numbers of globally installed npm packages\n\n    --duplicates           Mark duplicate npm packages inside parentheses eg. (2.1.4)\n    --fullTree             Traverse entire node_modules dependency tree, not just top level\n\n    --markdown             Print output in markdown format\n    --json                 Print output in JSON format\n    --console              Print to console (defaults to on for CLI usage, off for programmatic usage)\n    --showNotFound         Don't filter out values marked 'Not Found'\n    --title                Give your report a top level title ie 'Environment Report'\n\n    --clipboard            *Removed - use clipboardy or clipboard-cli directly*\n  "),process.exit(0)):(r.version||r.v||r._.indexOf("version")>-1)&&(console.log("7.1.0"),process.exit(0)),t.cli(r)},136:function(n,e){n.exports=require("envinfo")},137:function(n,e){function o(n){return"number"==typeof n||(!!/^0x[0-9a-f]+$/i.test(n)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n))}n.exports=function(n,e){e||(e={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof e.unknown&&(t.unknownFn=e.unknown),"boolean"==typeof e.boolean&&e.boolean?t.allBools=!0:[].concat(e.boolean).filter(Boolean).forEach(function(n){t.bools[n]=!0});var r={};Object.keys(e.alias||{}).forEach(function(n){r[n]=[].concat(e.alias[n]),r[n].forEach(function(e){r[e]=[n].concat(r[n].filter(function(n){return e!==n}))})}),[].concat(e.string).filter(Boolean).forEach(function(n){t.strings[n]=!0,r[n]&&(t.strings[r[n]]=!0)});var s=e.default||{},i={_:[]};Object.keys(t.bools).forEach(function(n){a(n,void 0!==s[n]&&s[n])});var l=[];function a(n,e,s){if(!s||!t.unknownFn||function(n,e){return t.allBools&&/^--[^=]+$/.test(e)||t.strings[n]||t.bools[n]||r[n]}(n,s)||!1!==t.unknownFn(s)){var l=!t.strings[n]&&o(e)?Number(e):e;u(i,n.split("."),l),(r[n]||[]).forEach(function(n){u(i,n.split("."),l)})}}function u(n,e,o){var r=n;e.slice(0,-1).forEach(function(n){void 0===r[n]&&(r[n]={}),r=r[n]});var s=e[e.length-1];void 0===r[s]||t.bools[s]||"boolean"==typeof r[s]?r[s]=o:Array.isArray(r[s])?r[s].push(o):r[s]=[r[s],o]}function c(n){return r[n].some(function(n){return t.bools[n]})}-1!==n.indexOf("--")&&(l=n.slice(n.indexOf("--")+1),n=n.slice(0,n.indexOf("--")));for(var f=0;f<n.length;f++){var p=n[f];if(/^--.+=/.test(p)){var d=p.match(/^--([^=]+)=([\s\S]*)$/),b=d[1],v=d[2];t.bools[b]&&(v="false"!==v),a(b,v,p)}else if(/^--no-.+/.test(p)){a(b=p.match(/^--no-(.+)/)[1],!1,p)}else if(/^--.+/.test(p)){b=p.match(/^--(.+)/)[1];void 0===(y=n[f+1])||/^-/.test(y)||t.bools[b]||t.allBools||r[b]&&c(b)?/^(true|false)$/.test(y)?(a(b,"true"===y,p),f++):a(b,!t.strings[b]||"",p):(a(b,y,p),f++)}else if(/^-[^-]+/.test(p)){for(var m=p.slice(1,-1).split(""),g=!1,h=0;h<m.length;h++){var y;if("-"!==(y=p.slice(h+2))){if(/[A-Za-z]/.test(m[h])&&/=/.test(y)){a(m[h],y.split("=")[1],p),g=!0;break}if(/[A-Za-z]/.test(m[h])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(y)){a(m[h],y,p),g=!0;break}if(m[h+1]&&m[h+1].match(/\W/)){a(m[h],p.slice(h+2),p),g=!0;break}a(m[h],!t.strings[m[h]]||"",p)}else a(m[h],y,p)}b=p.slice(-1)[0];g||"-"===b||(!n[f+1]||/^(-|--)[^-]/.test(n[f+1])||t.bools[b]||r[b]&&c(b)?n[f+1]&&/true|false/.test(n[f+1])?(a(b,"true"===n[f+1],p),f++):a(b,!t.strings[b]||"",p):(a(b,n[f+1],p),f++))}else if(t.unknownFn&&!1===t.unknownFn(p)||i._.push(t.strings._||!o(p)?p:Number(p)),e.stopEarly){i._.push.apply(i._,n.slice(f+1));break}}return Object.keys(s).forEach(function(n){var e,o,t;e=i,o=n.split("."),t=e,o.slice(0,-1).forEach(function(n){t=t[n]||{}}),o[o.length-1]in t||(u(i,n.split("."),s[n]),(r[n]||[]).forEach(function(e){u(i,e.split("."),s[n])}))}),e["--"]?(i["--"]=new Array,l.forEach(function(n){i["--"].push(n)})):l.forEach(function(n){i._.push(n)}),i}}});
>>>>>>> fix: use require for envinfo, thanks sammy
