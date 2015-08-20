!
function(a, b) {
    function bb(a, b, c, d) {
        c = c || [],
        b = b || q;
        var e, f, i, j, k = b.nodeType;
        if (!a || "string" != typeof a) return c;
        if (1 !== k && 9 !== k) return [];
        if (i = g(b), !i && !d && (e = O.exec(a))) if (j = e[1]) {
            if (9 === k) {
                if (f = b.getElementById(j), !f || !f.parentNode) return c;
                if (f.id === j) return c.push(f),
                c
            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) return c.push(f),
            c
        } else {
            if (e[2]) return v.apply(c, w.call(b.getElementsByTagName(a), 0)),
            c;
            if ((j = e[3]) && $ && b.getElementsByClassName) return v.apply(c, w.call(b.getElementsByClassName(j), 0)),
            c
        }
        return ob(a.replace(K, "$1"), b, c, d, i)
    }
    function cb(a) {
        return function(b) {
            var c = b.nodeName.toLowerCase();
            return "input" === c && b.type === a
        }
    }
    function db(a) {
        return function(b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a
        }
    }
    function eb(a) {
        return y(function(b) {
            return b = +b,
            y(function(c, d) {
                for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
            })
        })
    }
    function fb(a, b, c) {
        if (a === b) return c;
        for (var d = a.nextSibling; d;) {
            if (d === b) return - 1;
            d = d.nextSibling
        }
        return 1
    }
    function gb(a, b) {
        var c, d, f, g, h, i, j, k = B[o][a];
        if (k) return b ? 0 : k.slice(0);
        for (h = a, i = [], j = e.preFilter; h;) { (!c || (d = L.exec(h))) && (d && (h = h.slice(d[0].length)), i.push(f = [])),
            c = !1,
            (d = M.exec(h)) && (f.push(c = new p(d.shift())), h = h.slice(c.length), c.type = d[0].replace(K, " "));
            for (g in e.filter)"toJSONString" != g && (!(d = V[g].exec(h)) || j[g] && !(d = j[g](d)) || (f.push(c = new p(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d));
            if (!c) break
        }
        return b ? h.length: h ? bb.error(a) : B(a, i).slice(0)
    }
    function hb(a, b, d) {
        var e = b.dir,
        f = d && "parentNode" === b.dir,
        g = t++;
        return b.first ?
        function(b, c, d) {
            for (; b = b[e];) if (f || 1 === b.nodeType) return a(b, c, d)
        }: function(b, d, h) {
            if (h) {
                for (; b = b[e];) if ((f || 1 === b.nodeType) && a(b, d, h)) return b
            } else for (var i, j = s + " " + g + " ",
            k = j + c; b = b[e];) if (f || 1 === b.nodeType) {
                if ((i = b[o]) === k) return b.sizset;
                if ("string" == typeof i && 0 === i.indexOf(j)) {
                    if (b.sizset) return b
                } else {
                    if (b[o] = k, a(b, d, h)) return b.sizset = !0,
                    b;
                    b.sizset = !1
                }
            }
        }
    }
    function ib(a) {
        return a.length > 1 ?
        function(b, c, d) {
            for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
            return ! 0
        }: a[0]
    }
    function jb(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
    }
    function kb(a, b, c, d, e, f) {
        return d && !d[o] && (d = kb(d)),
        e && !e[o] && (e = kb(e, f)),
        y(function(f, g, h, i) {
            if (!f || !e) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                p = f || nb(b || "*", h.nodeType ? [h] : h, [], f),
                q = !a || !f && b ? p: jb(p, m, a, h, i),
                r = c ? e || (f ? a: o || d) ? [] : g: q;
                if (c && c(q, r, h, i), d) for (l = jb(r, n), d(l, [], h, i), j = l.length; j--;)(k = l[j]) && (r[n[j]] = !(q[n[j]] = k));
                if (f) for (j = a && r.length; j--;)(k = r[j]) && (f[m[j]] = !(g[m[j]] = k));
                else r = jb(r === g ? r.splice(o, r.length) : r),
                e ? e(null, g, r, i) : v.apply(g, r)
            }
        })
    }
    function lb(a) {
        for (var b, c, d, f = a.length,
        g = e.relative[a[0].type], h = g || e.relative[" "], i = g ? 1 : 0, j = hb(function(a) {
            return a === b
        },
        h, !0), k = hb(function(a) {
            return x.call(b, a) > -1
        },
        h, !0), m = [function(a, c, d) {
            return ! g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
        }]; f > i; i++) if (c = e.relative[a[i].type]) m = [hb(ib(m), c)];
        else {
            if (c = e.filter[a[i].type].apply(null, a[i].matches), c[o]) {
                for (d = ++i; f > d && !e.relative[a[d].type]; d++);
                return kb(i > 1 && ib(m), i > 1 && a.slice(0, i - 1).join("").replace(K, "$1"), c, d > i && lb(a.slice(i, d)), f > d && lb(a = a.slice(d)), f > d && a.join(""))
            }
            m.push(c)
        }
        return ib(m)
    }
    function mb(a, b) {
        var d = b.length > 0,
        f = a.length > 0,
        g = function(h, i, j, k, m) {
            var n, o, p, r = [],
            t = 0,
            w = "0",
            x = h && [],
            y = null != m,
            z = l,
            A = h || f && e.find.TAG("*", m && i.parentNode || i),
            B = s += null == z ? 1 : Math.E;
            for (y && (l = i !== q && i, c = g.el); null != (n = A[w]); w++) {
                if (f && n) {
                    for (o = 0; p = a[o]; o++) if (p(n, i, j)) {
                        k.push(n);
                        break
                    }
                    y && (s = B, c = ++g.el)
                }
                d && ((n = !p && n) && t--, h && x.push(n))
            }
            if (t += w, d && w !== t) {
                for (o = 0; p = b[o]; o++) p(x, r, i, j);
                if (h) {
                    if (t > 0) for (; w--;) x[w] || r[w] || (r[w] = u.call(k));
                    r = jb(r)
                }
                v.apply(k, r),
                y && !h && r.length > 0 && t + b.length > 1 && bb.uniqueSort(k)
            }
            return y && (s = B, l = z),
            x
        };
        return g.el = 0,
        d ? y(g) : g
    }
    function nb(a, b, c, d) {
        for (var e = 0,
        f = b.length; f > e; e++) bb(a, b[e], c, d);
        return c
    }
    function ob(a, b, c, d, f) {
        var g, h, j, k, l, m = gb(a);
        if (m.length, !d && 1 === m.length) {
            if (h = m[0] = m[0].slice(0), h.length > 2 && "ID" === (j = h[0]).type && 9 === b.nodeType && !f && e.relative[h[1].type]) {
                if (b = e.find.ID(j.matches[0].replace(U, ""), b, f)[0], !b) return c;
                a = a.slice(h.shift().length)
            }
            for (g = V.POS.test(a) ? -1 : h.length - 1; g >= 0 && (j = h[g], !e.relative[k = j.type]); g--) if ((l = e.find[k]) && (d = l(j.matches[0].replace(U, ""), Q.test(h[0].type) && b.parentNode || b, f))) {
                if (h.splice(g, 1), a = d.length && h.join(""), !a) return v.apply(c, w.call(d, 0)),
                c;
                break
            }
        }
        return i(a, m)(d, b, f, c, Q.test(a)),
        c
    }
    function pb() {}
    var c, d, e, f, g, h, i, j, k, l, m = !0,
    n = "undefined",
    o = ("sizcache" + Math.random()).replace(".", ""),
    p = String,
    q = a.document,
    r = q.documentElement,
    s = 0,
    t = 0,
    u = [].pop,
    v = [].push,
    w = [].slice,
    x = [].indexOf ||
    function(a) {
        for (var b = 0,
        c = this.length; c > b; b++) if (this[b] === a) return b;
        return - 1
    },
    y = function(a, b) {
        return a[o] = null == b || b,
        a
    },
    z = function() {
        var a = {},
        b = [];
        return y(function(c, d) {
            return b.push(c) > e.cacheLength && delete a[b.shift()],
            a[c] = d
        },
        a)
    },
    A = z(),
    B = z(),
    C = z(),
    D = "[\\x20\\t\\r\\n\\f]",
    E = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
    F = E.replace("w", "w#"),
    G = "([*^$|!~]?=)",
    H = "\\[" + D + "*(" + E + ")" + D + "*(?:" + G + D + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + D + "*\\]",
    I = ":(" + E + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + H + ")|[^:]|\\\\.)*|.*))\\)|)",
    J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)",
    K = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"),
    L = new RegExp("^" + D + "*," + D + "*"),
    M = new RegExp("^" + D + "*([\\x20\\t\\r\\n\\f>+~])" + D + "*"),
    N = new RegExp(I),
    O = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
    Q = /[\x20\t\r\n\f]*[+~]/,
    S = /h\d/i,
    T = /input|select|textarea|button/i,
    U = /\\(?!\\)/g,
    V = {
        ID: new RegExp("^#(" + E + ")"),
        CLASS: new RegExp("^\\.(" + E + ")"),
        NAME: new RegExp("^\\[name=['\"]?(" + E + ")['\"]?\\]"),
        TAG: new RegExp("^(" + E.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + I),
        POS: new RegExp(J, "i"),
        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
        needsContext: new RegExp("^" + D + "*[>+~]|" + J, "i")
    },
    W = function(a) {
        var b = q.createElement("div");
        try {
            return a(b)
        } catch(c) {
            return ! 1
        } finally {
            b = null
        }
    },
    X = W(function(a) {
        return a.appendChild(q.createComment("")),
        !a.getElementsByTagName("*").length
    }),
    Y = W(function(a) {
        return a.innerHTML = "<a href='#'></a>",
        a.firstChild && typeof a.firstChild.getAttribute !== n && "#" === a.firstChild.getAttribute("href")
    }),
    Z = W(function(a) {
        a.innerHTML = "<select></select>";
        var b = typeof a.lastChild.getAttribute("multiple");
        return "boolean" !== b && "string" !== b
    }),
    $ = W(function(a) {
        return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
        a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
    }),
    _ = W(function(a) {
        a.id = o + 0,
        a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>",
        r.insertBefore(a, r.firstChild);
        var b = q.getElementsByName && q.getElementsByName(o).length === 2 + q.getElementsByName(o + 0).length;
        return d = !q.getElementById(o),
        r.removeChild(a),
        b
    });
    try {
        w.call(r.childNodes, 0)[0].nodeType
    } catch(ab) {
        w = function(a) {
            for (var b, c = []; b = this[a]; a++) c.push(b);
            return c
        }
    }
    bb.matches = function(a, b) {
        return bb(a, null, null, b)
    },
    bb.matchesSelector = function(a, b) {
        return bb(b, null, null, [a]).length > 0
    },
    f = bb.getText = function(a) {
        var b, c = "",
        d = 0,
        e = a.nodeType;
        if (e) {
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += f(a)
            } else if (3 === e || 4 === e) return a.nodeValue
        } else for (; b = a[d]; d++) c += f(b);
        return c
    },
    g = bb.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName: !1
    },
    h = bb.contains = r.contains ?
    function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement: a,
        d = b && b.parentNode;
        return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
    }: r.compareDocumentPosition ?
    function(a, b) {
        return b && !!(16 & a.compareDocumentPosition(b))
    }: function(a, b) {
        for (; b = b.parentNode;) if (b === a) return ! 0;
        return ! 1
    },
    bb.attr = function(a, b) {
        var c, d = g(a);
        return d || (b = b.toLowerCase()),
        (c = e.attrHandle[b]) ? c(a) : d || Z ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b: null: c.specified ? c.value: null: null)
    },
    e = bb.selectors = {
        cacheLength: 50,
        createPseudo: y,
        match: V,
        attrHandle: Y ? {}: {
            href: function(a) {
                return a.getAttribute("href", 2)
            },
            type: function(a) {
                return a.getAttribute("type")
            }
        },
        find: {
            ID: d ?
            function(a, b, c) {
                if (typeof b.getElementById !== n && !c) {
                    var d = b.getElementById(a);
                    return d && d.parentNode ? [d] : []
                }
            }: function(a, c, d) {
                if (typeof c.getElementById !== n && !d) {
                    var e = c.getElementById(a);
                    return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b: []
                }
            },
            TAG: X ?
            function(a, b) {
                return typeof b.getElementsByTagName !== n ? b.getElementsByTagName(a) : void 0
            }: function(a, b) {
                var d, e, f, c = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (e = [], f = 0; d = c[f]; f++) 1 === d.nodeType && e.push(d);
                    return e
                }
                return c
            },
            NAME: _ &&
            function(a, b) {
                return typeof b.getElementsByName !== n ? b.getElementsByName(name) : void 0
            },
            CLASS: $ &&
            function(a, b, c) {
                return typeof b.getElementsByClassName === n || c ? void 0 : b.getElementsByClassName(a)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(a) {
                return a[1] = a[1].replace(U, ""),
                a[3] = (a[4] || a[5] || "").replace(U, ""),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
            },
            CHILD: function(a) {
                return a[1] = a[1].toLowerCase(),
                "nth" === a[1] ? (a[2] || bb.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && bb.error(a[0]),
                a
            },
            PSEUDO: function(a) {
                var b, c;
                return V.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[3] : (b = a[4]) && (N.test(b) && (c = gb(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
            }
        },
        filter: {
            ID: d ?
            function(a) {
                return a = a.replace(U, ""),
                function(b) {
                    return b.getAttribute("id") === a
                }
            }: function(a) {
                return a = a.replace(U, ""),
                function(b) {
                    var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                    return c && c.value === a
                }
            },
            TAG: function(a) {
                return "*" === a ?
                function() {
                    return ! 0
                }: (a = a.replace(U, "").toLowerCase(),
                function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a
                })
            },
            CLASS: function(a) {
                var b = A[o][a];
                return b || (b = A(a, new RegExp("(^|" + D + ")" + a + "(" + D + "|$)"))),
                function(a) {
                    return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                }
            },
            ATTR: function(a, b, c) {
                return function(d) {
                    var f = bb.attr(d, a);
                    return null == f ? "!=" === b: b ? (f += "", "=" === b ? f === c: "!=" === b ? f !== c: "^=" === b ? c && 0 === f.indexOf(c) : "*=" === b ? c && f.indexOf(c) > -1 : "$=" === b ? c && f.substr(f.length - c.length) === c: "~=" === b ? (" " + f + " ").indexOf(c) > -1 : "|=" === b ? f === c || f.substr(0, c.length + 1) === c + "-": !1) : !0
                }
            },
            CHILD: function(a, b, c, d) {
                return "nth" === a ?
                function(a) {
                    var b, e, f = a.parentNode;
                    if (1 === c && 0 === d) return ! 0;
                    if (f) for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                    return e -= d,
                    e === c || 0 === e % c && e / c >= 0
                }: function(b) {
                    var c = b;
                    switch (a) {
                    case "only":
                    case "first":
                        for (; c = c.previousSibling;) if (1 === c.nodeType) return ! 1;
                        if ("first" === a) return ! 0;
                        c = b;
                    case "last":
                        for (; c = c.nextSibling;) if (1 === c.nodeType) return ! 1;
                        return ! 0
                    }
                }
            },
            PSEUDO: function(a, b) {
                var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bb.error("unsupported pseudo: " + a);
                return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? y(function(a, c) {
                    for (var e, f = d(a, b), g = f.length; g--;) e = x.call(a, f[g]),
                    a[e] = !(c[e] = f[g])
                }) : function(a) {
                    return d(a, 0, c)
                }) : d
            }
        },
        pseudos: {
            not: y(function(a) {
                var b = [],
                c = [],
                d = i(a.replace(K, "$1"));
                return d[o] ? y(function(a, b, c, e) {
                    for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                }) : function(a, e, f) {
                    return b[0] = a,
                    d(b, null, f, c),
                    !c.pop()
                }
            }),
            has: y(function(a) {
                return function(b) {
                    return bb(a, b).length > 0
                }
            }),
            contains: y(function(a) {
                return function(b) {
                    return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                }
            }),
            enabled: function(a) {
                return a.disabled === !1
            },
            disabled: function(a) {
                return a.disabled === !0
            },
            checked: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && !!a.checked || "option" === b && !!a.selected
            },
            selected: function(a) {
                return a.parentNode && a.parentNode.selectedIndex,
                a.selected === !0
            },
            parent: function(a) {
                return ! e.pseudos.empty(a)
            },
            empty: function(a) {
                var b;
                for (a = a.firstChild; a;) {
                    if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b) return ! 1;
                    a = a.nextSibling
                }
                return ! 0
            },
            header: function(a) {
                return S.test(a.nodeName)
            },
            text: function(a) {
                var b, c;
                return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
            },
            radio: cb("radio"),
            checkbox: cb("checkbox"),
            file: cb("file"),
            password: cb("password"),
            image: cb("image"),
            submit: db("submit"),
            reset: db("reset"),
            button: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            input: function(a) {
                return T.test(a.nodeName)
            },
            focus: function(a) {
                var b = a.ownerDocument;
                return ! (a !== b.activeElement || b.hasFocus && !b.hasFocus() || !a.type && !a.href)
            },
            active: function(a) {
                return a === a.ownerDocument.activeElement
            },
            first: eb(function() {
                return [0]
            }),
            last: eb(function(a, b) {
                return [b - 1]
            }),
            eq: eb(function(a, b, c) {
                return [0 > c ? c + b: c]
            }),
            even: eb(function(a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a
            }),
            odd: eb(function(a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a
            }),
            lt: eb(function(a, b, c) {
                for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                return a
            }),
            gt: eb(function(a, b, c) {
                for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
                return a
            })
        }
    },
    j = r.compareDocumentPosition ?
    function(a, b) {
        return a === b ? (k = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
    }: function(a, b) {
        var c, d, e, f, g, h, i, j;
        if (a === b) return k = !0,
        0;
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        if (e = [], f = [], g = a.parentNode, h = b.parentNode, i = g, g === h) return fb(a, b);
        if (!g) return - 1;
        if (!h) return 1;
        for (; i;) e.unshift(i),
        i = i.parentNode;
        for (i = h; i;) f.unshift(i),
        i = i.parentNode;
        for (c = e.length, d = f.length, j = 0; c > j && d > j; j++) if (e[j] !== f[j]) return fb(e[j], f[j]);
        return j === c ? fb(a, f[j], -1) : fb(e[j], b, 1)
    },
    [0, 0].sort(j),
    m = !k,
    bb.uniqueSort = function(a) {
        var b, c = 1;
        if (k = m, a.sort(j), k) for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
        return a
    },
    bb.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
    },
    i = bb.compile = function(a, b) {
        var c, d = [],
        e = [],
        f = C[o][a];
        if (!f) {
            for (b || (b = gb(a)), c = b.length; c--;) f = lb(b[c]),
            f[o] ? d.push(f) : e.push(f);
            f = C(a, mb(e, d))
        }
        return f
    },
    q.querySelectorAll &&
    function() {
        var a, b = ob,
        c = /'|\\/g,
        d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        e = [":focus"],
        f = [":active", ":focus"],
        h = r.matchesSelector || r.mozMatchesSelector || r.webkitMatchesSelector || r.oMatchesSelector || r.msMatchesSelector;
        W(function(a) {
            a.innerHTML = "<select><option selected=''></option></select>",
            a.querySelectorAll("[selected]").length || e.push("\\[" + D + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
            a.querySelectorAll(":checked").length || e.push(":checked")
        }),
        W(function(a) {
            a.innerHTML = "<p test=''></p>",
            a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + D + "*(?:\"\"|'')"),
            a.innerHTML = "<input type='hidden'/>",
            a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
        }),
        e = new RegExp(e.join("|")),
        ob = function(a, d, f, g, h) {
            if (! (g || h || e && e.test(a))) {
                var i, j, k = !0,
                l = o,
                m = d,
                n = 9 === d.nodeType && a;
                if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                    for (i = gb(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length; j--;) i[j] = l + i[j].join("");
                    m = Q.test(a) && d.parentNode || d,
                    n = i.join(",")
                }
                if (n) try {
                    return v.apply(f, w.call(m.querySelectorAll(n), 0)),
                    f
                } catch(p) {} finally {
                    k || d.removeAttribute("id")
                }
            }
            return b(a, d, f, g, h)
        },
        h && (W(function(b) {
            a = h.call(b, "div");
            try {
                h.call(b, "[test!='']:sizzle"),
                f.push("!=", I)
            } catch(c) {}
        }), f = new RegExp(f.join("|")), bb.matchesSelector = function(b, c) {
            if (c = c.replace(d, "='$1']"), !(g(b) || f.test(c) || e && e.test(c))) try {
                var i = h.call(b, c);
                if (i || a || b.document && 11 !== b.document.nodeType) return i
            } catch(j) {}
            return bb(c, null, null, [b]).length > 0
        })
    } (),
    e.pseudos.nth = e.pseudos.eq,
    e.filters = pb.prototype = e.pseudos,
    e.setFilters = new pb,
    "function" == typeof define && define.amd ? define(function() {
        return bb
    }) : a.Sizzle = bb
} (window);