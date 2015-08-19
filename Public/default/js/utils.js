function rowindex(a) {
    if (Browser.isIE) return a.rowIndex;
    for (table = a.parentNode.parentNode, i = 0; i < table.rows.length; i++) if (table.rows[i] == a) return i
}
function getPosition(a) {
    for (var d, b = a.offsetTop,
    c = a.offsetLeft; a = a.offsetParent;) b += a.offsetTop,
    c += a.offsetLeft;
    return d = {
        top: b,
        left: c
    }
}
function cleanWhitespace(a) {
    var b, c;
    for (a = a, b = 0; b < a.childNodes.length; b++) c = a.childNodes[b],
    3 != c.nodeType || /\S/.test(c.nodeValue) || a.removeChild(c)
}
var Utils, Browser = new Object;
Browser.isMozilla = "undefined" != typeof document.implementation && "undefined" != typeof document.implementation.createDocument && "undefined" != typeof HTMLDocument,
Browser.isIE = window.ActiveXObject ? !0 : !1,
Browser.isFirefox = -1 != navigator.userAgent.toLowerCase().indexOf("firefox"),
Browser.isSafari = -1 != navigator.userAgent.toLowerCase().indexOf("safari"),
Browser.isOpera = -1 != navigator.userAgent.toLowerCase().indexOf("opera"),
Utils = new Object,
Utils.htmlEncode = function(a) {
    return a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
},
Utils.trim = function(a) {
    return "string" == typeof a ? a.replace(/^\s*|\s*$/g, "") : a
},
Utils.isEmpty = function(a) {
    switch (typeof a) {
    case "string":
        return 0 == Utils.trim(a).length ? !0 : !1;
    case "number":
        return 0 == a;
    case "object":
        return null == a;
    case "array":
        return 0 == a.length;
    default:
        return ! 0
    }
},
Utils.isNumber = function(a) {
    var b = /^[\d|\.|,]+$/;
    return b.test(a)
},
Utils.isInt = function(a) {
    if ("" == a) return ! 1;
    var b = /\D+/;
    return ! b.test(a)
},
Utils.isEmail = function(a) {
    var b = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    return b.test(a)
},
Utils.isTel = function(a) {
    var b = /^[\d|\-|\s|\_]+$/;
    return b.test(a)
},
Utils.fixEvent = function(a) {
    var b = "undefined" == typeof a ? window.event: a;
    return b
},
Utils.srcElement = function(a) {
    "undefined" == typeof a && (a = window.event);
    var b = document.all ? a.srcElement: a.target;
    return b
},
Utils.isTime = function(a) {
    var b = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/;
    return b.test(a)
},
Utils.x = function(a) {
    return Browser.isIE ? event.x + document.documentElement.scrollLeft - 2 : a.pageX
},
Utils.y = function(a) {
    return Browser.isIE ? event.y + document.documentElement.scrollTop - 2 : a.pageY
},
Utils.request = function(a, b) {
    var c = a.match(new RegExp("[?&]" + b + "=([^&]*)(&?)", "i"));
    return c ? c[1] : c
},
Utils.$ = function(a) {
    return document.getElementById(a)
},
document.getCookie = function(a) {
    var c, d, b = document.cookie.split("; ");
    for (c = 0; c < b.length; c++) if (d = b[c].split("="), a == d[0]) return decodeURIComponent(d[1]);
    return null
},
document.setCookie = function(a, b, c) {
    var d = a + "=" + encodeURIComponent(b);
    null != c && (d += "; expires=" + c),
    document.cookie = d
},
document.removeCookie = function(a) {
    document.cookie = a + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;"
};