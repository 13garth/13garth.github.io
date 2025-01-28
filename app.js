(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
  "use strict";
  /*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
  !function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
      if (!e2.document) throw new Error("jQuery requires a window with a document");
      return t(e2);
    } : t(e);
  }("undefined" != typeof window ? window : void 0, function(C, e) {
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e2) {
      return t.flat.call(e2);
    } : function(e2) {
      return t.concat.apply([], e2);
    }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e2) {
      return "function" == typeof e2 && "number" != typeof e2.nodeType;
    }, x = function(e2) {
      return null != e2 && e2 === e2.window;
    }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
    function b(e2, t2, n2) {
      var r2, i2, o2 = (n2 = n2 || E).createElement("script");
      if (o2.text = e2, t2) for (r2 in c) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
      n2.head.appendChild(o2).parentNode.removeChild(o2);
    }
    function w(e2) {
      return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[o.call(e2)] || "object" : typeof e2;
    }
    var f = "3.5.1", S = function(e2, t2) {
      return new S.fn.init(e2, t2);
    };
    function p(e2) {
      var t2 = !!e2 && "length" in e2 && e2.length, n2 = w(e2);
      return !m(e2) && !x(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
    }
    S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
      return s.call(this);
    }, get: function(e2) {
      return null == e2 ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
    }, pushStack: function(e2) {
      var t2 = S.merge(this.constructor(), e2);
      return t2.prevObject = this, t2;
    }, each: function(e2) {
      return S.each(this, e2);
    }, map: function(n2) {
      return this.pushStack(S.map(this, function(e2, t2) {
        return n2.call(e2, t2, e2);
      }));
    }, slice: function() {
      return this.pushStack(s.apply(this, arguments));
    }, first: function() {
      return this.eq(0);
    }, last: function() {
      return this.eq(-1);
    }, even: function() {
      return this.pushStack(S.grep(this, function(e2, t2) {
        return (t2 + 1) % 2;
      }));
    }, odd: function() {
      return this.pushStack(S.grep(this, function(e2, t2) {
        return t2 % 2;
      }));
    }, eq: function(e2) {
      var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
      return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
    }, end: function() {
      return this.prevObject || this.constructor();
    }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() {
      var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
      for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || m(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (S.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || S.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = S.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
      return a2;
    }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
      throw new Error(e2);
    }, noop: function() {
    }, isPlainObject: function(e2) {
      var t2, n2;
      return !(!e2 || "[object Object]" !== o.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = v.call(t2, "constructor") && t2.constructor) && a.call(n2) === l);
    }, isEmptyObject: function(e2) {
      var t2;
      for (t2 in e2) return false;
      return true;
    }, globalEval: function(e2, t2, n2) {
      b(e2, { nonce: t2 && t2.nonce }, n2);
    }, each: function(e2, t2) {
      var n2, r2 = 0;
      if (p(e2)) {
        for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
      } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
      return e2;
    }, makeArray: function(e2, t2) {
      var n2 = t2 || [];
      return null != e2 && (p(Object(e2)) ? S.merge(n2, "string" == typeof e2 ? [e2] : e2) : u.call(n2, e2)), n2;
    }, inArray: function(e2, t2, n2) {
      return null == t2 ? -1 : i.call(t2, e2, n2);
    }, merge: function(e2, t2) {
      for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
      return e2.length = i2, e2;
    }, grep: function(e2, t2, n2) {
      for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
      return r2;
    }, map: function(e2, t2, n2) {
      var r2, i2, o2 = 0, a2 = [];
      if (p(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
      else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
      return g(a2);
    }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
      n["[object " + t2 + "]"] = t2.toLowerCase();
    });
    var d = function(n2) {
      var e2, d2, b2, o2, i2, h2, f2, g2, w2, u2, l2, T2, C2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), p2 = n2.document, k2 = 0, r2 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), D2 = function(e3, t3) {
        return e3 === t3 && (l2 = true), 0;
      }, j2 = {}.hasOwnProperty, t2 = [], q2 = t2.pop, L2 = t2.push, H2 = t2.push, O2 = t2.slice, P2 = function(e3, t3) {
        for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) if (e3[n3] === t3) return n3;
        return -1;
      }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", I2 = "(?:\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W2 = "\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + I2 + "))|)" + M2 + "*\\]", F2 = ":(" + I2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + W2 + ")*)|.*)\\)|)", B2 = new RegExp(M2 + "+", "g"), $3 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e3, t3) {
        var n3 = "0x" + e3.slice(1) - 65536;
        return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
      }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e3, t3) {
        return t3 ? "\0" === e3 ? "�" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
      }, oe2 = function() {
        T2();
      }, ae2 = be2(function(e3) {
        return true === e3.disabled && "fieldset" === e3.nodeName.toLowerCase();
      }, { dir: "parentNode", next: "legend" });
      try {
        H2.apply(t2 = O2.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
      } catch (e3) {
        H2 = { apply: t2.length ? function(e4, t3) {
          L2.apply(e4, O2.call(t3));
        } : function(e4, t3) {
          var n3 = e4.length, r3 = 0;
          while (e4[n3++] = t3[r3++]) ;
          e4.length = n3 - 1;
        } };
      }
      function se2(t3, e3, n3, r3) {
        var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
        if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
        if (!r3 && (T2(e3), e3 = e3 || C2, E2)) {
          if (11 !== p3 && (u3 = Z2.exec(t3))) if (i3 = u3[1]) {
            if (9 === p3) {
              if (!(a3 = e3.getElementById(i3))) return n3;
              if (a3.id === i3) return n3.push(a3), n3;
            } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3) return n3.push(a3), n3;
          } else {
            if (u3[2]) return H2.apply(n3, e3.getElementsByTagName(t3)), n3;
            if ((i3 = u3[3]) && d2.getElementsByClassName && e3.getElementsByClassName) return H2.apply(n3, e3.getElementsByClassName(i3)), n3;
          }
          if (d2.qsa && !N2[t3 + " "] && (!v2 || !v2.test(t3)) && (1 !== p3 || "object" !== e3.nodeName.toLowerCase())) {
            if (c3 = t3, f3 = e3, 1 === p3 && (U2.test(t3) || z2.test(t3))) {
              (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && d2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
              while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + xe2(l3[o3]);
              c3 = l3.join(",");
            }
            try {
              return H2.apply(n3, f3.querySelectorAll(c3)), n3;
            } catch (e4) {
              N2(t3, true);
            } finally {
              s3 === S2 && e3.removeAttribute("id");
            }
          }
        }
        return g2(t3.replace($3, "$1"), e3, n3, r3);
      }
      function ue2() {
        var r3 = [];
        return function e3(t3, n3) {
          return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
        };
      }
      function le2(e3) {
        return e3[S2] = true, e3;
      }
      function ce2(e3) {
        var t3 = C2.createElement("fieldset");
        try {
          return !!e3(t3);
        } catch (e4) {
          return false;
        } finally {
          t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
        }
      }
      function fe2(e3, t3) {
        var n3 = e3.split("|"), r3 = n3.length;
        while (r3--) b2.attrHandle[n3[r3]] = t3;
      }
      function pe2(e3, t3) {
        var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
        if (r3) return r3;
        if (n3) {
          while (n3 = n3.nextSibling) if (n3 === t3) return -1;
        }
        return e3 ? 1 : -1;
      }
      function de2(t3) {
        return function(e3) {
          return "input" === e3.nodeName.toLowerCase() && e3.type === t3;
        };
      }
      function he2(n3) {
        return function(e3) {
          var t3 = e3.nodeName.toLowerCase();
          return ("input" === t3 || "button" === t3) && e3.type === n3;
        };
      }
      function ge2(t3) {
        return function(e3) {
          return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
        };
      }
      function ve2(a3) {
        return le2(function(o3) {
          return o3 = +o3, le2(function(e3, t3) {
            var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
            while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
          });
        });
      }
      function ye2(e3) {
        return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
      }
      for (e2 in d2 = se2.support = {}, i2 = se2.isXML = function(e3) {
        var t3 = e3.namespaceURI, n3 = (e3.ownerDocument || e3).documentElement;
        return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
      }, T2 = se2.setDocument = function(e3) {
        var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : p2;
        return r3 != C2 && 9 === r3.nodeType && r3.documentElement && (a2 = (C2 = r3).documentElement, E2 = !i2(C2), p2 != C2 && (n3 = C2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), d2.scope = ce2(function(e4) {
          return a2.appendChild(e4).appendChild(C2.createElement("div")), "undefined" != typeof e4.querySelectorAll && !e4.querySelectorAll(":scope fieldset div").length;
        }), d2.attributes = ce2(function(e4) {
          return e4.className = "i", !e4.getAttribute("className");
        }), d2.getElementsByTagName = ce2(function(e4) {
          return e4.appendChild(C2.createComment("")), !e4.getElementsByTagName("*").length;
        }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e4) {
          return a2.appendChild(e4).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
        }), d2.getById ? (b2.filter.ID = function(e4) {
          var t4 = e4.replace(te2, ne2);
          return function(e5) {
            return e5.getAttribute("id") === t4;
          };
        }, b2.find.ID = function(e4, t4) {
          if ("undefined" != typeof t4.getElementById && E2) {
            var n4 = t4.getElementById(e4);
            return n4 ? [n4] : [];
          }
        }) : (b2.filter.ID = function(e4) {
          var n4 = e4.replace(te2, ne2);
          return function(e5) {
            var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
            return t4 && t4.value === n4;
          };
        }, b2.find.ID = function(e4, t4) {
          if ("undefined" != typeof t4.getElementById && E2) {
            var n4, r4, i3, o3 = t4.getElementById(e4);
            if (o3) {
              if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
              i3 = t4.getElementsByName(e4), r4 = 0;
              while (o3 = i3[r4++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            }
            return [];
          }
        }), b2.find.TAG = d2.getElementsByTagName ? function(e4, t4) {
          return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : d2.qsa ? t4.querySelectorAll(e4) : void 0;
        } : function(e4, t4) {
          var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
          if ("*" === e4) {
            while (n4 = o3[i3++]) 1 === n4.nodeType && r4.push(n4);
            return r4;
          }
          return o3;
        }, b2.find.CLASS = d2.getElementsByClassName && function(e4, t4) {
          if ("undefined" != typeof t4.getElementsByClassName && E2) return t4.getElementsByClassName(e4);
        }, s2 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e4) {
          var t4;
          a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || v2.push("\\[" + M2 + "*(?:value|" + R2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\[" + M2 + "*name" + M2 + "*=" + M2 + `*(?:''|"")`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
        }), ce2(function(e4) {
          e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t4 = C2.createElement("input");
          t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
        })), (d2.matchesSelector = K2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
          d2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", F2);
        }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K2.test(a2.compareDocumentPosition), y2 = t3 || K2.test(a2.contains) ? function(e4, t4) {
          var n4 = 9 === e4.nodeType ? e4.documentElement : e4, r4 = t4 && t4.parentNode;
          return e4 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
        } : function(e4, t4) {
          if (t4) {
            while (t4 = t4.parentNode) if (t4 === e4) return true;
          }
          return false;
        }, D2 = t3 ? function(e4, t4) {
          if (e4 === t4) return l2 = true, 0;
          var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
          return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !d2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == C2 || e4.ownerDocument == p2 && y2(p2, e4) ? -1 : t4 == C2 || t4.ownerDocument == p2 && y2(p2, t4) ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
        } : function(e4, t4) {
          if (e4 === t4) return l2 = true, 0;
          var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
          if (!i3 || !o3) return e4 == C2 ? -1 : t4 == C2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0;
          if (i3 === o3) return pe2(e4, t4);
          n4 = e4;
          while (n4 = n4.parentNode) a3.unshift(n4);
          n4 = t4;
          while (n4 = n4.parentNode) s3.unshift(n4);
          while (a3[r4] === s3[r4]) r4++;
          return r4 ? pe2(a3[r4], s3[r4]) : a3[r4] == p2 ? -1 : s3[r4] == p2 ? 1 : 0;
        }), C2;
      }, se2.matches = function(e3, t3) {
        return se2(e3, null, null, t3);
      }, se2.matchesSelector = function(e3, t3) {
        if (T2(e3), d2.matchesSelector && E2 && !N2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3))) try {
          var n3 = c2.call(e3, t3);
          if (n3 || d2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
        } catch (e4) {
          N2(t3, true);
        }
        return 0 < se2(t3, C2, null, [e3]).length;
      }, se2.contains = function(e3, t3) {
        return (e3.ownerDocument || e3) != C2 && T2(e3), y2(e3, t3);
      }, se2.attr = function(e3, t3) {
        (e3.ownerDocument || e3) != C2 && T2(e3);
        var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && j2.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
        return void 0 !== r3 ? r3 : d2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
      }, se2.escape = function(e3) {
        return (e3 + "").replace(re2, ie2);
      }, se2.error = function(e3) {
        throw new Error("Syntax error, unrecognized expression: " + e3);
      }, se2.uniqueSort = function(e3) {
        var t3, n3 = [], r3 = 0, i3 = 0;
        if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e3.slice(0), e3.sort(D2), l2) {
          while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
          while (r3--) e3.splice(n3[r3], 1);
        }
        return u2 = null, e3;
      }, o2 = se2.getText = function(e3) {
        var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
        if (i3) {
          if (1 === i3 || 9 === i3 || 11 === i3) {
            if ("string" == typeof e3.textContent) return e3.textContent;
            for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) n3 += o2(e3);
          } else if (3 === i3 || 4 === i3) return e3.nodeValue;
        } else while (t3 = e3[r3++]) n3 += o2(t3);
        return n3;
      }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
        return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
      }, CHILD: function(e3) {
        return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && se2.error(e3[0]), e3;
      }, PSEUDO: function(e3) {
        var t3, n3 = !e3[6] && e3[2];
        return G2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
      } }, filter: { TAG: function(e3) {
        var t3 = e3.replace(te2, ne2).toLowerCase();
        return "*" === e3 ? function() {
          return true;
        } : function(e4) {
          return e4.nodeName && e4.nodeName.toLowerCase() === t3;
        };
      }, CLASS: function(e3) {
        var t3 = m2[e3 + " "];
        return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && m2(e3, function(e4) {
          return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
        });
      }, ATTR: function(n3, r3, i3) {
        return function(e3) {
          var t3 = se2.attr(e3, n3);
          return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(B2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
        };
      }, CHILD: function(h3, e3, t3, g3, v3) {
        var y3 = "nth" !== h3.slice(0, 3), m3 = "last" !== h3.slice(-4), x3 = "of-type" === e3;
        return 1 === g3 && 0 === v3 ? function(e4) {
          return !!e4.parentNode;
        } : function(e4, t4, n3) {
          var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = x3 && e4.nodeName.toLowerCase(), p3 = !n3 && !x3, d3 = false;
          if (c3) {
            if (y3) {
              while (l3) {
                a3 = e4;
                while (a3 = a3[l3]) if (x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) return false;
                u3 = l3 = "only" === h3 && !u3 && "nextSibling";
              }
              return true;
            }
            if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
              d3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
              while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop()) if (1 === a3.nodeType && ++d3 && a3 === e4) {
                i3[h3] = [k2, s3, d3];
                break;
              }
            } else if (p3 && (d3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]), false === d3) {
              while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop()) if ((x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) && ++d3 && (p3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [k2, d3]), a3 === e4)) break;
            }
            return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
          }
        };
      }, PSEUDO: function(e3, o3) {
        var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
        return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
          var n3, r3 = a3(e4, o3), i3 = r3.length;
          while (i3--) e4[n3 = P2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
        }) : function(e4) {
          return a3(e4, 0, t3);
        }) : a3;
      } }, pseudos: { not: le2(function(e3) {
        var r3 = [], i3 = [], s3 = f2(e3.replace($3, "$1"));
        return s3[S2] ? le2(function(e4, t3, n3, r4) {
          var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
          while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
        }) : function(e4, t3, n3) {
          return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
        };
      }), has: le2(function(t3) {
        return function(e3) {
          return 0 < se2(t3, e3).length;
        };
      }), contains: le2(function(t3) {
        return t3 = t3.replace(te2, ne2), function(e3) {
          return -1 < (e3.textContent || o2(e3)).indexOf(t3);
        };
      }), lang: le2(function(n3) {
        return V2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
          var t3;
          do {
            if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
          } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
          return false;
        };
      }), target: function(e3) {
        var t3 = n2.location && n2.location.hash;
        return t3 && t3.slice(1) === e3.id;
      }, root: function(e3) {
        return e3 === a2;
      }, focus: function(e3) {
        return e3 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
      }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
        var t3 = e3.nodeName.toLowerCase();
        return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
      }, selected: function(e3) {
        return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
      }, empty: function(e3) {
        for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
        return true;
      }, parent: function(e3) {
        return !b2.pseudos.empty(e3);
      }, header: function(e3) {
        return J2.test(e3.nodeName);
      }, input: function(e3) {
        return Q2.test(e3.nodeName);
      }, button: function(e3) {
        var t3 = e3.nodeName.toLowerCase();
        return "input" === t3 && "button" === e3.type || "button" === t3;
      }, text: function(e3) {
        var t3;
        return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
      }, first: ve2(function() {
        return [0];
      }), last: ve2(function(e3, t3) {
        return [t3 - 1];
      }), eq: ve2(function(e3, t3, n3) {
        return [n3 < 0 ? n3 + t3 : n3];
      }), even: ve2(function(e3, t3) {
        for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
        return e3;
      }), odd: ve2(function(e3, t3) {
        for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
        return e3;
      }), lt: ve2(function(e3, t3, n3) {
        for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
        return e3;
      }), gt: ve2(function(e3, t3, n3) {
        for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
        return e3;
      }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = de2(e2);
      for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = he2(e2);
      function me2() {
      }
      function xe2(e3) {
        for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
        return r3;
      }
      function be2(s3, e3, t3) {
        var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && "parentNode" === c3, p3 = r2++;
        return e3.first ? function(e4, t4, n3) {
          while (e4 = e4[u3]) if (1 === e4.nodeType || f3) return s3(e4, t4, n3);
          return false;
        } : function(e4, t4, n3) {
          var r3, i3, o3, a3 = [k2, p3];
          if (n3) {
            while (e4 = e4[u3]) if ((1 === e4.nodeType || f3) && s3(e4, t4, n3)) return true;
          } else while (e4 = e4[u3]) if (1 === e4.nodeType || f3) if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase()) e4 = e4[u3] || e4;
          else {
            if ((r3 = i3[c3]) && r3[0] === k2 && r3[1] === p3) return a3[2] = r3[2];
            if ((i3[c3] = a3)[2] = s3(e4, t4, n3)) return true;
          }
          return false;
        };
      }
      function we2(i3) {
        return 1 < i3.length ? function(e3, t3, n3) {
          var r3 = i3.length;
          while (r3--) if (!i3[r3](e3, t3, n3)) return false;
          return true;
        } : i3[0];
      }
      function Te2(e3, t3, n3, r3, i3) {
        for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
        return a3;
      }
      function Ce2(d3, h3, g3, v3, y3, e3) {
        return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e3)), le2(function(e4, t3, n3, r3) {
          var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
            for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) se2(e5, t4[r4], n4);
            return n4;
          }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !d3 || !e4 && h3 ? c3 : Te2(c3, s3, d3, n3, r3), p3 = g3 ? y3 || (e4 ? d3 : l3 || v3) ? [] : t3 : f3;
          if (g3 && g3(f3, p3, n3, r3), v3) {
            i3 = Te2(p3, u3), v3(i3, [], n3, r3), o3 = i3.length;
            while (o3--) (a3 = i3[o3]) && (p3[u3[o3]] = !(f3[u3[o3]] = a3));
          }
          if (e4) {
            if (y3 || d3) {
              if (y3) {
                i3 = [], o3 = p3.length;
                while (o3--) (a3 = p3[o3]) && i3.push(f3[o3] = a3);
                y3(null, p3 = [], i3, r3);
              }
              o3 = p3.length;
              while (o3--) (a3 = p3[o3]) && -1 < (i3 = y3 ? P2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
            }
          } else p3 = Te2(p3 === t3 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t3, p3, r3) : H2.apply(t3, p3);
        });
      }
      function Ee2(e3) {
        for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = be2(function(e4) {
          return e4 === i3;
        }, a3, true), l3 = be2(function(e4) {
          return -1 < P2(i3, e4);
        }, a3, true), c3 = [function(e4, t4, n4) {
          var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
          return i3 = null, r4;
        }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [be2(we2(c3), t3)];
        else {
          if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
            for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
            return Ce2(1 < s3 && we2(c3), 1 < s3 && xe2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace($3, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && xe2(e3));
          }
          c3.push(t3);
        }
        return we2(c3);
      }
      return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
        var n3, r3, i3, o3, a3, s3, u3, l3 = x2[e3 + " "];
        if (l3) return t3 ? 0 : l3.slice(0);
        a3 = e3, s3 = [], u3 = b2.preFilter;
        while (a3) {
          for (o3 in n3 && !(r3 = _2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = z2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($3, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = G2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
          if (!n3) break;
        }
        return t3 ? a3.length : a3 ? se2.error(e3) : x2(e3, s3).slice(0);
      }, f2 = se2.compile = function(e3, t3) {
        var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = A2[e3 + " "];
        if (!a3) {
          t3 || (t3 = h2(e3)), n3 = t3.length;
          while (n3--) (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
          (a3 = A2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
            var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = k2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
            for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
              if (x3 && o4) {
                a4 = 0, t4 || o4.ownerDocument == C2 || (T2(o4), n4 = !E2);
                while (s3 = v3[a4++]) if (s3(o4, t4 || C2, n4)) {
                  r4.push(o4);
                  break;
                }
                i4 && (k2 = h3);
              }
              m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
            }
            if (u3 += l3, m3 && l3 !== u3) {
              a4 = 0;
              while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
              if (e4) {
                if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = q2.call(r4));
                f3 = Te2(f3);
              }
              H2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
            }
            return i4 && (k2 = h3, w2 = p3), c3;
          }, m3 ? le2(r3) : r3))).selector = e3;
        }
        return a3;
      }, g2 = se2.select = function(e3, t3, n3, r3) {
        var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
        if (n3 = n3 || [], 1 === c3.length) {
          if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && E2 && b2.relative[o3[1].type]) {
            if (!(t3 = (b2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0])) return n3;
            l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
          }
          i3 = G2.needsContext.test(e3) ? 0 : o3.length;
          while (i3--) {
            if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
            if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
              if (o3.splice(i3, 1), !(e3 = r3.length && xe2(o3))) return H2.apply(n3, r3), n3;
              break;
            }
          }
        }
        return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
      }, d2.sortStable = S2.split("").sort(D2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e3) {
        return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
      }), ce2(function(e3) {
        return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
      }) || fe2("type|href|height|width", function(e3, t3, n3) {
        if (!n3) return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
      }), d2.attributes && ce2(function(e3) {
        return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
      }) || fe2("value", function(e3, t3, n3) {
        if (!n3 && "input" === e3.nodeName.toLowerCase()) return e3.defaultValue;
      }), ce2(function(e3) {
        return null == e3.getAttribute("disabled");
      }) || fe2(R2, function(e3, t3, n3) {
        var r3;
        if (!n3) return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
      }), se2;
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e2, t2, n2) {
      var r2 = [], i2 = void 0 !== n2;
      while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
        if (i2 && S(e2).is(n2)) break;
        r2.push(e2);
      }
      return r2;
    }, T = function(e2, t2) {
      for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
      return n2;
    }, k = S.expr.match.needsContext;
    function A(e2, t2) {
      return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e2, n2, r2) {
      return m(n2) ? S.grep(e2, function(e3, t2) {
        return !!n2.call(e3, t2, e3) !== r2;
      }) : n2.nodeType ? S.grep(e2, function(e3) {
        return e3 === n2 !== r2;
      }) : "string" != typeof n2 ? S.grep(e2, function(e3) {
        return -1 < i.call(n2, e3) !== r2;
      }) : S.filter(n2, e2, r2);
    }
    S.filter = function(e2, t2, n2) {
      var r2 = t2[0];
      return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? S.find.matchesSelector(r2, e2) ? [r2] : [] : S.find.matches(e2, S.grep(t2, function(e3) {
        return 1 === e3.nodeType;
      }));
    }, S.fn.extend({ find: function(e2) {
      var t2, n2, r2 = this.length, i2 = this;
      if ("string" != typeof e2) return this.pushStack(S(e2).filter(function() {
        for (t2 = 0; t2 < r2; t2++) if (S.contains(i2[t2], this)) return true;
      }));
      for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) S.find(e2, i2[t2], n2);
      return 1 < r2 ? S.uniqueSort(n2) : n2;
    }, filter: function(e2) {
      return this.pushStack(D(this, e2 || [], false));
    }, not: function(e2) {
      return this.pushStack(D(this, e2 || [], true));
    }, is: function(e2) {
      return !!D(this, "string" == typeof e2 && k.test(e2) ? S(e2) : e2 || [], false).length;
    } });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e2, t2, n2) {
      var r2, i2;
      if (!e2) return this;
      if (n2 = n2 || j, "string" == typeof e2) {
        if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : q.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
        if (r2[1]) {
          if (t2 = t2 instanceof S ? t2[0] : t2, S.merge(this, S.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : E, true)), N.test(r2[1]) && S.isPlainObject(t2)) for (r2 in t2) m(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
          return this;
        }
        return (i2 = E.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
      }
      return e2.nodeType ? (this[0] = e2, this.length = 1, this) : m(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(S) : S.makeArray(e2, this);
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
    function O(e2, t2) {
      while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
      return e2;
    }
    S.fn.extend({ has: function(e2) {
      var t2 = S(e2, this), n2 = t2.length;
      return this.filter(function() {
        for (var e3 = 0; e3 < n2; e3++) if (S.contains(this, t2[e3])) return true;
      });
    }, closest: function(e2, t2) {
      var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && S(e2);
      if (!k.test(e2)) {
        for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && S.find.matchesSelector(n2, e2))) {
          o2.push(n2);
          break;
        }
      }
      return this.pushStack(1 < o2.length ? S.uniqueSort(o2) : o2);
    }, index: function(e2) {
      return e2 ? "string" == typeof e2 ? i.call(S(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function(e2, t2) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e2, t2))));
    }, addBack: function(e2) {
      return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
    } }), S.each({ parent: function(e2) {
      var t2 = e2.parentNode;
      return t2 && 11 !== t2.nodeType ? t2 : null;
    }, parents: function(e2) {
      return h(e2, "parentNode");
    }, parentsUntil: function(e2, t2, n2) {
      return h(e2, "parentNode", n2);
    }, next: function(e2) {
      return O(e2, "nextSibling");
    }, prev: function(e2) {
      return O(e2, "previousSibling");
    }, nextAll: function(e2) {
      return h(e2, "nextSibling");
    }, prevAll: function(e2) {
      return h(e2, "previousSibling");
    }, nextUntil: function(e2, t2, n2) {
      return h(e2, "nextSibling", n2);
    }, prevUntil: function(e2, t2, n2) {
      return h(e2, "previousSibling", n2);
    }, siblings: function(e2) {
      return T((e2.parentNode || {}).firstChild, e2);
    }, children: function(e2) {
      return T(e2.firstChild);
    }, contents: function(e2) {
      return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (A(e2, "template") && (e2 = e2.content || e2), S.merge([], e2.childNodes));
    } }, function(r2, i2) {
      S.fn[r2] = function(e2, t2) {
        var n2 = S.map(this, i2, e2);
        return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = S.filter(t2, n2)), 1 < this.length && (H[r2] || S.uniqueSort(n2), L.test(r2) && n2.reverse()), this.pushStack(n2);
      };
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e2) {
      return e2;
    }
    function M(e2) {
      throw e2;
    }
    function I(e2, t2, n2, r2) {
      var i2;
      try {
        e2 && m(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && m(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
      } catch (e3) {
        n2.apply(void 0, [e3]);
      }
    }
    S.Callbacks = function(r2) {
      var e2, n2;
      r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, S.each(e2.match(P) || [], function(e3, t3) {
        n2[t3] = true;
      }), n2) : S.extend({}, r2);
      var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
        for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
          t2 = u2.shift();
          while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
        }
        r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
      }, f2 = { add: function() {
        return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
          S.each(e3, function(e4, t3) {
            m(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== w(t3) && n3(t3);
          });
        }(arguments), t2 && !i2 && c2()), this;
      }, remove: function() {
        return S.each(arguments, function(e3, t3) {
          var n3;
          while (-1 < (n3 = S.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
        }), this;
      }, has: function(e3) {
        return e3 ? -1 < S.inArray(e3, s2) : 0 < s2.length;
      }, empty: function() {
        return s2 && (s2 = []), this;
      }, disable: function() {
        return a2 = u2 = [], s2 = t2 = "", this;
      }, disabled: function() {
        return !s2;
      }, lock: function() {
        return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
      }, locked: function() {
        return !!a2;
      }, fireWith: function(e3, t3) {
        return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
      }, fire: function() {
        return f2.fireWith(this, arguments), this;
      }, fired: function() {
        return !!o2;
      } };
      return f2;
    }, S.extend({ Deferred: function(e2) {
      var o2 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
        return i2;
      }, always: function() {
        return s2.done(arguments).fail(arguments), this;
      }, "catch": function(e3) {
        return a2.then(null, e3);
      }, pipe: function() {
        var i3 = arguments;
        return S.Deferred(function(r2) {
          S.each(o2, function(e3, t2) {
            var n2 = m(i3[t2[4]]) && i3[t2[4]];
            s2[t2[1]](function() {
              var e4 = n2 && n2.apply(this, arguments);
              e4 && m(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
            });
          }), i3 = null;
        }).promise();
      }, then: function(t2, n2, r2) {
        var u2 = 0;
        function l2(i3, o3, a3, s3) {
          return function() {
            var n3 = this, r3 = arguments, e3 = function() {
              var e4, t4;
              if (!(i3 < u2)) {
                if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
                t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, m(t4) ? s3 ? t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3)) : (u2++, t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3), l2(u2, o3, R, o3.notifyWith))) : (a3 !== R && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
              }
            }, t3 = s3 ? e3 : function() {
              try {
                e3();
              } catch (e4) {
                S.Deferred.exceptionHook && S.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== M && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
              }
            };
            i3 ? t3() : (S.Deferred.getStackHook && (t3.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t3));
          };
        }
        return S.Deferred(function(e3) {
          o2[0][3].add(l2(0, e3, m(r2) ? r2 : R, e3.notifyWith)), o2[1][3].add(l2(0, e3, m(t2) ? t2 : R)), o2[2][3].add(l2(0, e3, m(n2) ? n2 : M));
        }).promise();
      }, promise: function(e3) {
        return null != e3 ? S.extend(e3, a2) : a2;
      } }, s2 = {};
      return S.each(o2, function(e3, t2) {
        var n2 = t2[2], r2 = t2[5];
        a2[t2[1]] = n2.add, r2 && n2.add(function() {
          i2 = r2;
        }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
          return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
        }, s2[t2[0] + "With"] = n2.fireWith;
      }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
    }, when: function(e2) {
      var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = S.Deferred(), a2 = function(t3) {
        return function(e3) {
          r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
        };
      };
      if (n2 <= 1 && (I(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || m(i2[t2] && i2[t2].then))) return o2.then();
      while (t2--) I(i2[t2], a2(t2), o2.reject);
      return o2.promise();
    } });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e2, t2) {
      C.console && C.console.warn && e2 && W.test(e2.name) && C.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
    }, S.readyException = function(e2) {
      C.setTimeout(function() {
        throw e2;
      });
    };
    var F = S.Deferred();
    function B() {
      E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
    }
    S.fn.ready = function(e2) {
      return F.then(e2)["catch"](function(e3) {
        S.readyException(e3);
      }), this;
    }, S.extend({ isReady: false, readyWait: 1, ready: function(e2) {
      (true === e2 ? --S.readyWait : S.isReady) || (S.isReady = true) !== e2 && 0 < --S.readyWait || F.resolveWith(E, [S]);
    } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $2 = function(e2, t2, n2, r2, i2, o2, a2) {
      var s2 = 0, u2 = e2.length, l2 = null == n2;
      if ("object" === w(n2)) for (s2 in i2 = true, n2) $2(e2, t2, s2, n2[s2], true, o2, a2);
      else if (void 0 !== r2 && (i2 = true, m(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
        return l2.call(S(e3), n3);
      })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
      return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
    }, _ = /^-ms-/, z = /-([a-z])/g;
    function U(e2, t2) {
      return t2.toUpperCase();
    }
    function X(e2) {
      return e2.replace(_, "ms-").replace(z, U);
    }
    var V = function(e2) {
      return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
    };
    function G() {
      this.expando = S.expando + G.uid++;
    }
    G.uid = 1, G.prototype = { cache: function(e2) {
      var t2 = e2[this.expando];
      return t2 || (t2 = {}, V(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
    }, set: function(e2, t2, n2) {
      var r2, i2 = this.cache(e2);
      if ("string" == typeof t2) i2[X(t2)] = n2;
      else for (r2 in t2) i2[X(r2)] = t2[r2];
      return i2;
    }, get: function(e2, t2) {
      return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][X(t2)];
    }, access: function(e2, t2, n2) {
      return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
    }, remove: function(e2, t2) {
      var n2, r2 = e2[this.expando];
      if (void 0 !== r2) {
        if (void 0 !== t2) {
          n2 = (t2 = Array.isArray(t2) ? t2.map(X) : (t2 = X(t2)) in r2 ? [t2] : t2.match(P) || []).length;
          while (n2--) delete r2[t2[n2]];
        }
        (void 0 === t2 || S.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
      }
    }, hasData: function(e2) {
      var t2 = e2[this.expando];
      return void 0 !== t2 && !S.isEmptyObject(t2);
    } };
    var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
    function Z(e2, t2, n2) {
      var r2, i2;
      if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(K, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
        try {
          n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : J.test(i2) ? JSON.parse(i2) : i2);
        } catch (e3) {
        }
        Q.set(e2, t2, n2);
      } else n2 = void 0;
      return n2;
    }
    S.extend({ hasData: function(e2) {
      return Q.hasData(e2) || Y.hasData(e2);
    }, data: function(e2, t2, n2) {
      return Q.access(e2, t2, n2);
    }, removeData: function(e2, t2) {
      Q.remove(e2, t2);
    }, _data: function(e2, t2, n2) {
      return Y.access(e2, t2, n2);
    }, _removeData: function(e2, t2) {
      Y.remove(e2, t2);
    } }), S.fn.extend({ data: function(n2, e2) {
      var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
      if (void 0 === n2) {
        if (this.length && (i2 = Q.get(o2), 1 === o2.nodeType && !Y.get(o2, "hasDataAttrs"))) {
          t2 = a2.length;
          while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = X(r2.slice(5)), Z(o2, r2, i2[r2]));
          Y.set(o2, "hasDataAttrs", true);
        }
        return i2;
      }
      return "object" == typeof n2 ? this.each(function() {
        Q.set(this, n2);
      }) : $2(this, function(e3) {
        var t3;
        if (o2 && void 0 === e3) return void 0 !== (t3 = Q.get(o2, n2)) ? t3 : void 0 !== (t3 = Z(o2, n2)) ? t3 : void 0;
        this.each(function() {
          Q.set(this, n2, e3);
        });
      }, null, e2, 1 < arguments.length, null, true);
    }, removeData: function(e2) {
      return this.each(function() {
        Q.remove(this, e2);
      });
    } }), S.extend({ queue: function(e2, t2, n2) {
      var r2;
      if (e2) return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, S.makeArray(n2)) : r2.push(n2)), r2 || [];
    }, dequeue: function(e2, t2) {
      t2 = t2 || "fx";
      var n2 = S.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = S._queueHooks(e2, t2);
      "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
        S.dequeue(e2, t2);
      }, o2)), !r2 && o2 && o2.empty.fire();
    }, _queueHooks: function(e2, t2) {
      var n2 = t2 + "queueHooks";
      return Y.get(e2, n2) || Y.access(e2, n2, { empty: S.Callbacks("once memory").add(function() {
        Y.remove(e2, [t2 + "queue", n2]);
      }) });
    } }), S.fn.extend({ queue: function(t2, n2) {
      var e2 = 2;
      return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? S.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
        var e3 = S.queue(this, t2, n2);
        S._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && S.dequeue(this, t2);
      });
    }, dequeue: function(e2) {
      return this.each(function() {
        S.dequeue(this, e2);
      });
    }, clearQueue: function(e2) {
      return this.queue(e2 || "fx", []);
    }, promise: function(e2, t2) {
      var n2, r2 = 1, i2 = S.Deferred(), o2 = this, a2 = this.length, s2 = function() {
        --r2 || i2.resolveWith(o2, [o2]);
      };
      "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
      while (a2--) (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
      return s2(), i2.promise(t2);
    } });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e2) {
      return S.contains(e2.ownerDocument, e2);
    }, oe = { composed: true };
    re.getRootNode && (ie = function(e2) {
      return S.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
    });
    var ae = function(e2, t2) {
      return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && ie(e2) && "none" === S.css(e2, "display");
    };
    function se(e2, t2, n2, r2) {
      var i2, o2, a2 = 20, s2 = r2 ? function() {
        return r2.cur();
      } : function() {
        return S.css(e2, t2, "");
      }, u2 = s2(), l2 = n2 && n2[3] || (S.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (S.cssNumber[t2] || "px" !== l2 && +u2) && te.exec(S.css(e2, t2));
      if (c2 && c2[3] !== l2) {
        u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
        while (a2--) S.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
        c2 *= 2, S.style(e2, t2, c2 + l2), n2 = n2 || [];
      }
      return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
    }
    var ue = {};
    function le(e2, t2) {
      for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ue[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = S.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ue[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", Y.set(r2, "display", n2)));
      for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
      return e2;
    }
    S.fn.extend({ show: function() {
      return le(this, true);
    }, hide: function() {
      return le(this);
    }, toggle: function(e2) {
      return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
        ae(this) ? S(this).show() : S(this).hide();
      });
    } });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function ve(e2, t2) {
      var n2;
      return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && A(e2, t2) ? S.merge([e2], n2) : n2;
    }
    function ye(e2, t2) {
      for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e2, t2, n2, r2, i2) {
      for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === w(o2)) S.merge(p2, o2.nodeType ? [o2] : o2);
      else if (me.test(o2)) {
        a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + S.htmlPrefilter(o2) + u2[2], c2 = u2[0];
        while (c2--) a2 = a2.lastChild;
        S.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
      } else p2.push(t2.createTextNode(o2));
      f2.textContent = "", d2 = 0;
      while (o2 = p2[d2++]) if (r2 && -1 < S.inArray(o2, r2)) i2 && i2.push(o2);
      else if (l2 = ie(o2), a2 = ve(f2.appendChild(o2), "script"), l2 && ye(a2), n2) {
        c2 = 0;
        while (o2 = a2[c2++]) he.test(o2.type || "") && n2.push(o2);
      }
      return f2;
    }
    var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
      return true;
    }
    function Ee() {
      return false;
    }
    function Se(e2, t2) {
      return e2 === function() {
        try {
          return E.activeElement;
        } catch (e3) {
        }
      }() == ("focus" === t2);
    }
    function ke(e2, t2, n2, r2, i2, o2) {
      var a2, s2;
      if ("object" == typeof t2) {
        for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) ke(e2, s2, n2, r2, t2[s2], o2);
        return e2;
      }
      if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = Ee;
      else if (!i2) return e2;
      return 1 === o2 && (a2 = i2, (i2 = function(e3) {
        return S().off(e3), a2.apply(this, arguments);
      }).guid = a2.guid || (a2.guid = S.guid++)), e2.each(function() {
        S.event.add(this, t2, i2, r2, n2);
      });
    }
    function Ae(e2, i2, o2) {
      o2 ? (Y.set(e2, i2, false), S.event.add(e2, i2, { namespace: false, handler: function(e3) {
        var t2, n2, r2 = Y.get(this, i2);
        if (1 & e3.isTrigger && this[i2]) {
          if (r2.length) (S.event.special[i2] || {}).delegateType && e3.stopPropagation();
          else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2) return e3.stopImmediatePropagation(), e3.preventDefault(), n2.value;
        } else r2.length && (Y.set(this, i2, { value: S.event.trigger(S.extend(r2[0], S.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
      } })) : void 0 === Y.get(e2, i2) && S.event.add(e2, i2, Ce);
    }
    S.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
      var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t2);
      if (V(t2)) {
        n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && S.find.matchesSelector(re, i2), n2.guid || (n2.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
          return "undefined" != typeof S && S.event.triggered !== e3.type ? S.event.dispatch.apply(t2, arguments) : void 0;
        }), l2 = (e2 = (e2 || "").match(P) || [""]).length;
        while (l2--) d2 = g2 = (s2 = Te.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && S.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
      }
    }, remove: function(e2, t2, n2, r2, i2) {
      var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
      if (v2 && (u2 = v2.events)) {
        l2 = (t2 = (t2 || "").match(P) || [""]).length;
        while (l2--) if (d2 = g2 = (s2 = Te.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
          f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
          while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
          a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || S.removeEvent(e2, d2, v2.handle), delete u2[d2]);
        } else for (d2 in u2) S.event.remove(e2, d2 + t2[l2], n2, r2, true);
        S.isEmptyObject(u2) && Y.remove(e2, "handle events");
      }
    }, dispatch: function(e2) {
      var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = S.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
      for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
      if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
        a2 = S.event.handlers.call(this, u2, l2), t2 = 0;
        while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
          u2.currentTarget = i2.elem, n2 = 0;
          while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((S.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
        }
        return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
      }
    }, handlers: function(e2, t2) {
      var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
      if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
        for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
          for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < S(i2, this).index(l2) : S.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
          o2.length && s2.push({ elem: l2, handlers: o2 });
        }
      }
      return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
    }, addProp: function(t2, e2) {
      Object.defineProperty(S.Event.prototype, t2, { enumerable: true, configurable: true, get: m(e2) ? function() {
        if (this.originalEvent) return e2(this.originalEvent);
      } : function() {
        if (this.originalEvent) return this.originalEvent[t2];
      }, set: function(e3) {
        Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
      } });
    }, fix: function(e2) {
      return e2[S.expando] ? e2 : new S.Event(e2);
    }, special: { load: { noBubble: true }, click: { setup: function(e2) {
      var t2 = this || e2;
      return pe.test(t2.type) && t2.click && A(t2, "input") && Ae(t2, "click", Ce), false;
    }, trigger: function(e2) {
      var t2 = this || e2;
      return pe.test(t2.type) && t2.click && A(t2, "input") && Ae(t2, "click"), true;
    }, _default: function(e2) {
      var t2 = e2.target;
      return pe.test(t2.type) && t2.click && A(t2, "input") && Y.get(t2, "click") || A(t2, "a");
    } }, beforeunload: { postDispatch: function(e2) {
      void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
    } } } }, S.removeEvent = function(e2, t2, n2) {
      e2.removeEventListener && e2.removeEventListener(t2, n2);
    }, S.Event = function(e2, t2) {
      if (!(this instanceof S.Event)) return new S.Event(e2, t2);
      e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ce : Ee, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && S.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[S.expando] = true;
    }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: false, preventDefault: function() {
      var e2 = this.originalEvent;
      this.isDefaultPrevented = Ce, e2 && !this.isSimulated && e2.preventDefault();
    }, stopPropagation: function() {
      var e2 = this.originalEvent;
      this.isPropagationStopped = Ce, e2 && !this.isSimulated && e2.stopPropagation();
    }, stopImmediatePropagation: function() {
      var e2 = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
    } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function(e2) {
      var t2 = e2.button;
      return null == e2.which && be.test(e2.type) ? null != e2.charCode ? e2.charCode : e2.keyCode : !e2.which && void 0 !== t2 && we.test(e2.type) ? 1 & t2 ? 1 : 2 & t2 ? 3 : 4 & t2 ? 2 : 0 : e2.which;
    } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
      S.event.special[e2] = { setup: function() {
        return Ae(this, e2, Se), false;
      }, trigger: function() {
        return Ae(this, e2), true;
      }, delegateType: t2 };
    }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
      S.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
        var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
        return n2 && (n2 === this || S.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
      } };
    }), S.fn.extend({ on: function(e2, t2, n2, r2) {
      return ke(this, e2, t2, n2, r2);
    }, one: function(e2, t2, n2, r2) {
      return ke(this, e2, t2, n2, r2, 1);
    }, off: function(e2, t2, n2) {
      var r2, i2;
      if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, S(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
      if ("object" == typeof e2) {
        for (i2 in e2) this.off(i2, t2, e2[i2]);
        return this;
      }
      return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Ee), this.each(function() {
        S.event.remove(this, e2, n2, t2);
      });
    } });
    var Ne = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e2, t2) {
      return A(e2, "table") && A(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && S(e2).children("tbody")[0] || e2;
    }
    function Le(e2) {
      return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
    }
    function He(e2) {
      return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
    }
    function Oe(e2, t2) {
      var n2, r2, i2, o2, a2, s2;
      if (1 === t2.nodeType) {
        if (Y.hasData(e2) && (s2 = Y.get(e2).events)) for (i2 in Y.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) S.event.add(t2, i2, s2[i2][n2]);
        Q.hasData(e2) && (o2 = Q.access(e2), a2 = S.extend({}, o2), Q.set(t2, a2));
      }
    }
    function Pe(n2, r2, i2, o2) {
      r2 = g(r2);
      var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = m(d2);
      if (h2 || 1 < f2 && "string" == typeof d2 && !y.checkClone && De.test(d2)) return n2.each(function(e3) {
        var t3 = n2.eq(e3);
        h2 && (r2[0] = d2.call(this, e3, t3.html())), Pe(t3, r2, i2, o2);
      });
      if (f2 && (t2 = (e2 = xe(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
        for (s2 = (a2 = S.map(ve(e2, "script"), Le)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = S.clone(u2, true, true), s2 && S.merge(a2, ve(u2, "script"))), i2.call(n2[c2], u2, c2);
        if (s2) for (l2 = a2[a2.length - 1].ownerDocument, S.map(a2, He), c2 = 0; c2 < s2; c2++) u2 = a2[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(je, ""), u2, l2));
      }
      return n2;
    }
    function Re(e2, t2, n2) {
      for (var r2, i2 = t2 ? S.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || S.cleanData(ve(r2)), r2.parentNode && (n2 && ie(r2) && ye(ve(r2, "script")), r2.parentNode.removeChild(r2));
      return e2;
    }
    S.extend({ htmlPrefilter: function(e2) {
      return e2;
    }, clone: function(e2, t2, n2) {
      var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
      if (!(y.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || S.isXMLDoc(e2))) for (a2 = ve(c2), r2 = 0, i2 = (o2 = ve(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], "input" === (l2 = u2.nodeName.toLowerCase()) && pe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
      if (t2) if (n2) for (o2 = o2 || ve(e2), a2 = a2 || ve(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Oe(o2[r2], a2[r2]);
      else Oe(e2, c2);
      return 0 < (a2 = ve(c2, "script")).length && ye(a2, !f2 && ve(e2, "script")), c2;
    }, cleanData: function(e2) {
      for (var t2, n2, r2, i2 = S.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if (V(n2)) {
        if (t2 = n2[Y.expando]) {
          if (t2.events) for (r2 in t2.events) i2[r2] ? S.event.remove(n2, r2) : S.removeEvent(n2, r2, t2.handle);
          n2[Y.expando] = void 0;
        }
        n2[Q.expando] && (n2[Q.expando] = void 0);
      }
    } }), S.fn.extend({ detach: function(e2) {
      return Re(this, e2, true);
    }, remove: function(e2) {
      return Re(this, e2);
    }, text: function(e2) {
      return $2(this, function(e3) {
        return void 0 === e3 ? S.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
        });
      }, null, e2, arguments.length);
    }, append: function() {
      return Pe(this, arguments, function(e2) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e2).appendChild(e2);
      });
    }, prepend: function() {
      return Pe(this, arguments, function(e2) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t2 = qe(this, e2);
          t2.insertBefore(e2, t2.firstChild);
        }
      });
    }, before: function() {
      return Pe(this, arguments, function(e2) {
        this.parentNode && this.parentNode.insertBefore(e2, this);
      });
    }, after: function() {
      return Pe(this, arguments, function(e2) {
        this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
      });
    }, empty: function() {
      for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (S.cleanData(ve(e2, false)), e2.textContent = "");
      return this;
    }, clone: function(e2, t2) {
      return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
        return S.clone(this, e2, t2);
      });
    }, html: function(e2) {
      return $2(this, function(e3) {
        var t2 = this[0] || {}, n2 = 0, r2 = this.length;
        if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
        if ("string" == typeof e3 && !Ne.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
          e3 = S.htmlPrefilter(e3);
          try {
            for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (S.cleanData(ve(t2, false)), t2.innerHTML = e3);
            t2 = 0;
          } catch (e4) {
          }
        }
        t2 && this.empty().append(e3);
      }, null, e2, arguments.length);
    }, replaceWith: function() {
      var n2 = [];
      return Pe(this, arguments, function(e2) {
        var t2 = this.parentNode;
        S.inArray(this, n2) < 0 && (S.cleanData(ve(this)), t2 && t2.replaceChild(e2, this));
      }, n2);
    } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
      S.fn[e2] = function(e3) {
        for (var t2, n2 = [], r2 = S(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), S(r2[o2])[a2](t2), u.apply(n2, t2.get());
        return this.pushStack(n2);
      };
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Ie = function(e2) {
      var t2 = e2.ownerDocument.defaultView;
      return t2 && t2.opener || (t2 = C), t2.getComputedStyle(e2);
    }, We = function(e2, t2, n2) {
      var r2, i2, o2 = {};
      for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
      for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
      return r2;
    }, Fe = new RegExp(ne.join("|"), "i");
    function Be(e2, t2, n2) {
      var r2, i2, o2, a2, s2 = e2.style;
      return (n2 = n2 || Ie(e2)) && ("" !== (a2 = n2.getPropertyValue(t2) || n2[t2]) || ie(e2) || (a2 = S.style(e2, t2)), !y.pixelBoxStyles() && Me.test(a2) && Fe.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
    }
    function $e(e2, t2) {
      return { get: function() {
        if (!e2()) return (this.get = t2).apply(this, arguments);
        delete this.get;
      } };
    }
    !function() {
      function e2() {
        if (l2) {
          u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
          var e3 = C.getComputedStyle(l2);
          n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), re.removeChild(u2), l2 = null;
        }
      }
      function t2(e3) {
        return Math.round(parseFloat(e3));
      }
      var n2, r2, i2, o2, a2, s2, u2 = E.createElement("div"), l2 = E.createElement("div");
      l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l2.style.backgroundClip, S.extend(y, { boxSizingReliable: function() {
        return e2(), r2;
      }, pixelBoxStyles: function() {
        return e2(), o2;
      }, pixelPosition: function() {
        return e2(), n2;
      }, reliableMarginLeft: function() {
        return e2(), s2;
      }, scrollboxSize: function() {
        return e2(), i2;
      }, reliableTrDimensions: function() {
        var e3, t3, n3, r3;
        return null == a2 && (e3 = E.createElement("table"), t3 = E.createElement("tr"), n3 = E.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px", t3.style.height = "1px", n3.style.height = "9px", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = C.getComputedStyle(t3), a2 = 3 < parseInt(r3.height), re.removeChild(e3)), a2;
      } }));
    }();
    var _e = ["Webkit", "Moz", "ms"], ze = E.createElement("div").style, Ue = {};
    function Xe(e2) {
      var t2 = S.cssProps[e2] || Ue[e2];
      return t2 || (e2 in ze ? e2 : Ue[e2] = function(e3) {
        var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = _e.length;
        while (n2--) if ((e3 = _e[n2] + t3) in ze) return e3;
      }(e2) || e2);
    }
    var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/, Ye = { position: "absolute", visibility: "hidden", display: "block" }, Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e2, t2, n2) {
      var r2 = te.exec(t2);
      return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
    }
    function Ke(e2, t2, n2, r2, i2, o2) {
      var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
      if (n2 === (r2 ? "border" : "content")) return 0;
      for (; a2 < 4; a2 += 2) "margin" === n2 && (u2 += S.css(e2, n2 + ne[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= S.css(e2, "padding" + ne[a2], true, i2)), "margin" !== n2 && (u2 -= S.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += S.css(e2, "padding" + ne[a2], true, i2), "padding" !== n2 ? u2 += S.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += S.css(e2, "border" + ne[a2] + "Width", true, i2));
      return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
    }
    function Ze(e2, t2, n2) {
      var r2 = Ie(e2), i2 = (!y.boxSizingReliable() || n2) && "border-box" === S.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Be(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
      if (Me.test(a2)) {
        if (!n2) return a2;
        a2 = "auto";
      }
      return (!y.boxSizingReliable() && i2 || !y.reliableTrDimensions() && A(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === S.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === S.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Ke(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
    }
    function et(e2, t2, n2, r2, i2) {
      return new et.prototype.init(e2, t2, n2, r2, i2);
    }
    S.extend({ cssHooks: { opacity: { get: function(e2, t2) {
      if (t2) {
        var n2 = Be(e2, "opacity");
        return "" === n2 ? "1" : n2;
      }
    } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
      if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
        var i2, o2, a2, s2 = X(t2), u2 = Ge.test(t2), l2 = e2.style;
        if (u2 || (t2 = Xe(s2)), a2 = S.cssHooks[t2] || S.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
        "string" === (o2 = typeof n2) && (i2 = te.exec(n2)) && i2[1] && (n2 = se(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (S.cssNumber[s2] ? "" : "px")), y.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
      }
    }, css: function(e2, t2, n2, r2) {
      var i2, o2, a2, s2 = X(t2);
      return Ge.test(t2) || (t2 = Xe(s2)), (a2 = S.cssHooks[t2] || S.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Be(e2, t2, r2)), "normal" === i2 && t2 in Qe && (i2 = Qe[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
    } }), S.each(["height", "width"], function(e2, u2) {
      S.cssHooks[u2] = { get: function(e3, t2, n2) {
        if (t2) return !Ve.test(S.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? Ze(e3, u2, n2) : We(e3, Ye, function() {
          return Ze(e3, u2, n2);
        });
      }, set: function(e3, t2, n2) {
        var r2, i2 = Ie(e3), o2 = !y.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === S.css(e3, "boxSizing", false, i2), s2 = n2 ? Ke(e3, u2, n2, a2, i2) : 0;
        return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Ke(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = S.css(e3, u2)), Je(0, t2, s2);
      } };
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e2, t2) {
      if (t2) return (parseFloat(Be(e2, "marginLeft")) || e2.getBoundingClientRect().left - We(e2, { marginLeft: 0 }, function() {
        return e2.getBoundingClientRect().left;
      })) + "px";
    }), S.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
      S.cssHooks[i2 + o2] = { expand: function(e2) {
        for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
        return n2;
      } }, "margin" !== i2 && (S.cssHooks[i2 + o2].set = Je);
    }), S.fn.extend({ css: function(e2, t2) {
      return $2(this, function(e3, t3, n2) {
        var r2, i2, o2 = {}, a2 = 0;
        if (Array.isArray(t3)) {
          for (r2 = Ie(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = S.css(e3, t3[a2], false, r2);
          return o2;
        }
        return void 0 !== n2 ? S.style(e3, t3, n2) : S.css(e3, t3);
      }, e2, t2, 1 < arguments.length);
    } }), ((S.Tween = et).prototype = { constructor: et, init: function(e2, t2, n2, r2, i2, o2) {
      this.elem = e2, this.prop = n2, this.easing = i2 || S.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (S.cssNumber[n2] ? "" : "px");
    }, cur: function() {
      var e2 = et.propHooks[this.prop];
      return e2 && e2.get ? e2.get(this) : et.propHooks._default.get(this);
    }, run: function(e2) {
      var t2, n2 = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t2 = S.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : et.propHooks._default.set(this), this;
    } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e2) {
      var t2;
      return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = S.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
    }, set: function(e2) {
      S.fx.step[e2.prop] ? S.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !S.cssHooks[e2.prop] && null == e2.elem.style[Xe(e2.prop)] ? e2.elem[e2.prop] = e2.now : S.style(e2.elem, e2.prop, e2.now + e2.unit);
    } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e2) {
      e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
    } }, S.easing = { linear: function(e2) {
      return e2;
    }, swing: function(e2) {
      return 0.5 - Math.cos(e2 * Math.PI) / 2;
    }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
      nt && (false === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
    }
    function ut() {
      return C.setTimeout(function() {
        tt = void 0;
      }), tt = Date.now();
    }
    function lt(e2, t2) {
      var n2, r2 = 0, i2 = { height: e2 };
      for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = ne[r2])] = i2["padding" + n2] = e2;
      return t2 && (i2.opacity = i2.width = e2), i2;
    }
    function ct(e2, t2, n2) {
      for (var r2, i2 = (ft.tweeners[t2] || []).concat(ft.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
    }
    function ft(o2, e2, t2) {
      var n2, a2, r2 = 0, i2 = ft.prefilters.length, s2 = S.Deferred().always(function() {
        delete u2.elem;
      }), u2 = function() {
        if (a2) return false;
        for (var e3 = tt || ut(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
        return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
      }, l2 = s2.promise({ elem: o2, props: S.extend({}, e2), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: tt || ut(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
        var n3 = S.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
        return l2.tweens.push(n3), n3;
      }, stop: function(e3) {
        var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
        if (a2) return this;
        for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
        return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
      } }), c2 = l2.props;
      for (!function(e3, t3) {
        var n3, r3, i3, o3, a3;
        for (n3 in e3) if (i3 = t3[r3 = X(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = S.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
        else t3[r3] = i3;
      }(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = ft.prefilters[r2].call(l2, o2, c2, l2.opts)) return m(n2.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
      return S.map(c2, ct, l2), m(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
    }
    S.Animation = S.extend(ft, { tweeners: { "*": [function(e2, t2) {
      var n2 = this.createTween(e2, t2);
      return se(n2.elem, e2, te.exec(t2), n2), n2;
    }] }, tweener: function(e2, t2) {
      m(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(P);
      for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], ft.tweeners[n2] = ft.tweeners[n2] || [], ft.tweeners[n2].unshift(t2);
    }, prefilters: [function(e2, t2, n2) {
      var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ae(e2), v2 = Y.get(e2, "fxshow");
      for (r2 in n2.queue || (null == (a2 = S._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
        a2.unqueued || s2();
      }), a2.unqueued++, p2.always(function() {
        p2.always(function() {
          a2.unqueued--, S.queue(e2, "fx").length || a2.empty.fire();
        });
      })), t2) if (i2 = t2[r2], ot.test(i2)) {
        if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
          if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
          g2 = true;
        }
        d2[r2] = v2 && v2[r2] || S.style(e2, r2);
      }
      if ((u2 = !S.isEmptyObject(t2)) || !S.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = Y.get(e2, "display")), "none" === (c2 = S.css(e2, "display")) && (l2 ? c2 = l2 : (le([e2], true), l2 = e2.style.display || l2, c2 = S.css(e2, "display"), le([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === S.css(e2, "float") && (u2 || (p2.done(function() {
        h2.display = l2;
      }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
        h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
      })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && le([e2], true), p2.done(function() {
        for (r2 in g2 || le([e2]), Y.remove(e2, "fxshow"), d2) S.style(e2, r2, d2[r2]);
      })), u2 = ct(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
    }], prefilter: function(e2, t2) {
      t2 ? ft.prefilters.unshift(e2) : ft.prefilters.push(e2);
    } }), S.speed = function(e2, t2, n2) {
      var r2 = e2 && "object" == typeof e2 ? S.extend({}, e2) : { complete: n2 || !n2 && t2 || m(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !m(t2) && t2 };
      return S.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in S.fx.speeds ? r2.duration = S.fx.speeds[r2.duration] : r2.duration = S.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
        m(r2.old) && r2.old.call(this), r2.queue && S.dequeue(this, r2.queue);
      }, r2;
    }, S.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
    }, animate: function(t2, e2, n2, r2) {
      var i2 = S.isEmptyObject(t2), o2 = S.speed(e2, n2, r2), a2 = function() {
        var e3 = ft(this, S.extend({}, t2), o2);
        (i2 || Y.get(this, "finish")) && e3.stop(true);
      };
      return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
    }, stop: function(i2, e2, o2) {
      var a2 = function(e3) {
        var t2 = e3.stop;
        delete e3.stop, t2(o2);
      };
      return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
        var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = S.timers, r2 = Y.get(this);
        if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
        else for (t2 in r2) r2[t2] && r2[t2].stop && at.test(t2) && a2(r2[t2]);
        for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
        !e3 && o2 || S.dequeue(this, i2);
      });
    }, finish: function(a2) {
      return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
        var e2, t2 = Y.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = S.timers, o2 = n2 ? n2.length : 0;
        for (t2.finish = true, S.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
        for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
        delete t2.finish;
      });
    } }), S.each(["toggle", "show", "hide"], function(e2, r2) {
      var i2 = S.fn[r2];
      S.fn[r2] = function(e3, t2, n2) {
        return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(lt(r2, true), e3, t2, n2);
      };
    }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
      S.fn[e2] = function(e3, t2, n2) {
        return this.animate(r2, e3, t2, n2);
      };
    }), S.timers = [], S.fx.tick = function() {
      var e2, t2 = 0, n2 = S.timers;
      for (tt = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
      n2.length || S.fx.stop(), tt = void 0;
    }, S.fx.timer = function(e2) {
      S.timers.push(e2), S.fx.start();
    }, S.fx.interval = 13, S.fx.start = function() {
      nt || (nt = true, st());
    }, S.fx.stop = function() {
      nt = null;
    }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r2, e2) {
      return r2 = S.fx && S.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
        var n2 = C.setTimeout(e3, r2);
        t2.stop = function() {
          C.clearTimeout(n2);
        };
      });
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e2, t2) {
      return $2(this, S.attr, e2, t2, 1 < arguments.length);
    }, removeAttr: function(e2) {
      return this.each(function() {
        S.removeAttr(this, e2);
      });
    } }), S.extend({ attr: function(e2, t2, n2) {
      var r2, i2, o2 = e2.nodeType;
      if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? S.prop(e2, t2, n2) : (1 === o2 && S.isXMLDoc(e2) || (i2 = S.attrHooks[t2.toLowerCase()] || (S.expr.match.bool.test(t2) ? pt : void 0)), void 0 !== n2 ? null === n2 ? void S.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = S.find.attr(e2, t2)) ? void 0 : r2);
    }, attrHooks: { type: { set: function(e2, t2) {
      if (!y.radioValue && "radio" === t2 && A(e2, "input")) {
        var n2 = e2.value;
        return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
      }
    } } }, removeAttr: function(e2, t2) {
      var n2, r2 = 0, i2 = t2 && t2.match(P);
      if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
    } }), pt = { set: function(e2, t2, n2) {
      return false === t2 ? S.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
    } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
      var a2 = dt[t2] || S.find.attr;
      dt[t2] = function(e3, t3, n2) {
        var r2, i2, o2 = t3.toLowerCase();
        return n2 || (i2 = dt[o2], dt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, dt[o2] = i2), r2;
      };
    });
    var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;
    function vt(e2) {
      return (e2.match(P) || []).join(" ");
    }
    function yt(e2) {
      return e2.getAttribute && e2.getAttribute("class") || "";
    }
    function mt(e2) {
      return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(P) || [];
    }
    S.fn.extend({ prop: function(e2, t2) {
      return $2(this, S.prop, e2, t2, 1 < arguments.length);
    }, removeProp: function(e2) {
      return this.each(function() {
        delete this[S.propFix[e2] || e2];
      });
    } }), S.extend({ prop: function(e2, t2, n2) {
      var r2, i2, o2 = e2.nodeType;
      if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && S.isXMLDoc(e2) || (t2 = S.propFix[t2] || t2, i2 = S.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
    }, propHooks: { tabIndex: { get: function(e2) {
      var t2 = S.find.attr(e2, "tabindex");
      return t2 ? parseInt(t2, 10) : ht.test(e2.nodeName) || gt.test(e2.nodeName) && e2.href ? 0 : -1;
    } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e2) {
      var t2 = e2.parentNode;
      return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
    }, set: function(e2) {
      var t2 = e2.parentNode;
      t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
    } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      S.propFix[this.toLowerCase()] = this;
    }), S.fn.extend({ addClass: function(t2) {
      var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
      if (m(t2)) return this.each(function(e3) {
        S(this).addClass(t2.call(this, e3, yt(this)));
      });
      if ((e2 = mt(t2)).length) {
        while (n2 = this[u2++]) if (i2 = yt(n2), r2 = 1 === n2.nodeType && " " + vt(i2) + " ") {
          a2 = 0;
          while (o2 = e2[a2++]) r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
          i2 !== (s2 = vt(r2)) && n2.setAttribute("class", s2);
        }
      }
      return this;
    }, removeClass: function(t2) {
      var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
      if (m(t2)) return this.each(function(e3) {
        S(this).removeClass(t2.call(this, e3, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e2 = mt(t2)).length) {
        while (n2 = this[u2++]) if (i2 = yt(n2), r2 = 1 === n2.nodeType && " " + vt(i2) + " ") {
          a2 = 0;
          while (o2 = e2[a2++]) while (-1 < r2.indexOf(" " + o2 + " ")) r2 = r2.replace(" " + o2 + " ", " ");
          i2 !== (s2 = vt(r2)) && n2.setAttribute("class", s2);
        }
      }
      return this;
    }, toggleClass: function(i2, t2) {
      var o2 = typeof i2, a2 = "string" === o2 || Array.isArray(i2);
      return "boolean" == typeof t2 && a2 ? t2 ? this.addClass(i2) : this.removeClass(i2) : m(i2) ? this.each(function(e2) {
        S(this).toggleClass(i2.call(this, e2, yt(this), t2), t2);
      }) : this.each(function() {
        var e2, t3, n2, r2;
        if (a2) {
          t3 = 0, n2 = S(this), r2 = mt(i2);
          while (e2 = r2[t3++]) n2.hasClass(e2) ? n2.removeClass(e2) : n2.addClass(e2);
        } else void 0 !== i2 && "boolean" !== o2 || ((e2 = yt(this)) && Y.set(this, "__className__", e2), this.setAttribute && this.setAttribute("class", e2 || false === i2 ? "" : Y.get(this, "__className__") || ""));
      });
    }, hasClass: function(e2) {
      var t2, n2, r2 = 0;
      t2 = " " + e2 + " ";
      while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + vt(yt(n2)) + " ").indexOf(t2)) return true;
      return false;
    } });
    var xt = /\r/g;
    S.fn.extend({ val: function(n2) {
      var r2, e2, i2, t2 = this[0];
      return arguments.length ? (i2 = m(n2), this.each(function(e3) {
        var t3;
        1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, S(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = S.map(t3, function(e4) {
          return null == e4 ? "" : e4 + "";
        })), (r2 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
      })) : t2 ? (r2 = S.valHooks[t2.type] || S.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(xt, "") : null == e2 ? "" : e2 : void 0;
    } }), S.extend({ valHooks: { option: { get: function(e2) {
      var t2 = S.find.attr(e2, "value");
      return null != t2 ? t2 : vt(S.text(e2));
    } }, select: { get: function(e2) {
      var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
      for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !A(n2.parentNode, "optgroup"))) {
        if (t2 = S(n2).val(), a2) return t2;
        s2.push(t2);
      }
      return s2;
    }, set: function(e2, t2) {
      var n2, r2, i2 = e2.options, o2 = S.makeArray(t2), a2 = i2.length;
      while (a2--) ((r2 = i2[a2]).selected = -1 < S.inArray(S.valHooks.option.get(r2), o2)) && (n2 = true);
      return n2 || (e2.selectedIndex = -1), o2;
    } } } }), S.each(["radio", "checkbox"], function() {
      S.valHooks[this] = { set: function(e2, t2) {
        if (Array.isArray(t2)) return e2.checked = -1 < S.inArray(S(e2).val(), t2);
      } }, y.checkOn || (S.valHooks[this].get = function(e2) {
        return null === e2.getAttribute("value") ? "on" : e2.value;
      });
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function(e2) {
      e2.stopPropagation();
    };
    S.extend(S.event, { trigger: function(e2, t2, n2, r2) {
      var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || E], d2 = v.call(e2, "type") ? e2.type : e2, h2 = v.call(e2, "namespace") ? e2.namespace.split(".") : [];
      if (o2 = f2 = a2 = n2 = n2 || E, 3 !== n2.nodeType && 8 !== n2.nodeType && !bt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[S.expando] ? e2 : new S.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : S.makeArray(t2, [e2]), c2 = S.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
        if (!r2 && !c2.noBubble && !x(n2)) {
          for (s2 = c2.delegateType || d2, bt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
          a2 === (n2.ownerDocument || E) && p2.push(a2.defaultView || a2.parentWindow || C);
        }
        i2 = 0;
        while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && V(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
        return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !V(n2) || u2 && m(n2[d2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), S.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, wt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, wt), S.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
      }
    }, simulate: function(e2, t2, n2) {
      var r2 = S.extend(new S.Event(), n2, { type: e2, isSimulated: true });
      S.event.trigger(r2, null, t2);
    } }), S.fn.extend({ trigger: function(e2, t2) {
      return this.each(function() {
        S.event.trigger(e2, t2, this);
      });
    }, triggerHandler: function(e2, t2) {
      var n2 = this[0];
      if (n2) return S.event.trigger(e2, t2, n2, true);
    } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
      var i2 = function(e2) {
        S.event.simulate(r2, e2.target, S.event.fix(e2));
      };
      S.event.special[r2] = { setup: function() {
        var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
        t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
      }, teardown: function() {
        var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
        t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
      } };
    });
    var Tt = C.location, Ct = { guid: Date.now() }, Et = /\?/;
    S.parseXML = function(e2) {
      var t2;
      if (!e2 || "string" != typeof e2) return null;
      try {
        t2 = new C.DOMParser().parseFromString(e2, "text/xml");
      } catch (e3) {
        t2 = void 0;
      }
      return t2 && !t2.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e2), t2;
    };
    var St = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n2, e2, r2, i2) {
      var t2;
      if (Array.isArray(e2)) S.each(e2, function(e3, t3) {
        r2 || St.test(n2) ? i2(n2, t3) : Dt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
      });
      else if (r2 || "object" !== w(e2)) i2(n2, e2);
      else for (t2 in e2) Dt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
    }
    S.param = function(e2, t2) {
      var n2, r2 = [], i2 = function(e3, t3) {
        var n3 = m(t3) ? t3() : t3;
        r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
      };
      if (null == e2) return "";
      if (Array.isArray(e2) || e2.jquery && !S.isPlainObject(e2)) S.each(e2, function() {
        i2(this.name, this.value);
      });
      else for (n2 in e2) Dt(n2, e2[n2], t2, i2);
      return r2.join("&");
    }, S.fn.extend({ serialize: function() {
      return S.param(this.serializeArray());
    }, serializeArray: function() {
      return this.map(function() {
        var e2 = S.prop(this, "elements");
        return e2 ? S.makeArray(e2) : this;
      }).filter(function() {
        var e2 = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e2) && (this.checked || !pe.test(e2));
      }).map(function(e2, t2) {
        var n2 = S(this).val();
        return null == n2 ? null : Array.isArray(n2) ? S.map(n2, function(e3) {
          return { name: t2.name, value: e3.replace(kt, "\r\n") };
        }) : { name: t2.name, value: n2.replace(kt, "\r\n") };
      }).get();
    } });
    var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/, Pt = /^\/\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = E.createElement("a");
    function Ft(o2) {
      return function(e2, t2) {
        "string" != typeof e2 && (t2 = e2, e2 = "*");
        var n2, r2 = 0, i2 = e2.toLowerCase().match(P) || [];
        if (m(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
      };
    }
    function Bt(t2, i2, o2, a2) {
      var s2 = {}, u2 = t2 === Mt;
      function l2(e2) {
        var r2;
        return s2[e2] = true, S.each(t2[e2] || [], function(e3, t3) {
          var n2 = t3(i2, o2, a2);
          return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
        }), r2;
      }
      return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
    }
    function $t(e2, t2) {
      var n2, r2, i2 = S.ajaxSettings.flatOptions || {};
      for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
      return r2 && S.extend(true, e2, r2), e2;
    }
    Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
      return t2 ? $t($t(e2, S.ajaxSettings), t2) : $t(S.ajaxSettings, e2);
    }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e2, t2) {
      "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
      var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = S.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
        var t3;
        if (h2) {
          if (!n2) {
            n2 = {};
            while (t3 = Ht.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
          }
          t3 = n2[e3.toLowerCase() + " "];
        }
        return null == t3 ? null : t3.join(", ");
      }, getAllResponseHeaders: function() {
        return h2 ? p2 : null;
      }, setRequestHeader: function(e3, t3) {
        return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
      }, overrideMimeType: function(e3) {
        return null == h2 && (v2.mimeType = e3), this;
      }, statusCode: function(e3) {
        var t3;
        if (e3) if (h2) T2.always(e3[T2.status]);
        else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
        return this;
      }, abort: function(e3) {
        var t3 = e3 || u2;
        return c2 && c2.abort(t3), l2(0, t3), this;
      } };
      if (x2.promise(T2), v2.url = ((e2 || v2.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], null == v2.crossDomain) {
        r2 = E.createElement("a");
        try {
          r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Wt.protocol + "//" + Wt.host != r2.protocol + "//" + r2.host;
        } catch (e3) {
          v2.crossDomain = true;
        }
      }
      if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = S.param(v2.data, v2.traditional)), Bt(Rt, v2, t2, T2), h2) return T2;
      for (i2 in (g2 = S.event && v2.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ot.test(v2.type), f2 = v2.url.replace(qt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(jt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (Et.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(Lt, "$1"), o2 = (Et.test(f2) ? "&" : "?") + "_=" + Ct.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
      if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
      if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Bt(Mt, v2, t2, T2)) {
        if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
        v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
          T2.abort("timeout");
        }, v2.timeout));
        try {
          h2 = false, c2.send(a2, l2);
        } catch (e3) {
          if (h2) throw e3;
          l2(-1, e3);
        }
      } else l2(-1, "No Transport");
      function l2(e3, t3, n3, r3) {
        var i3, o3, a3, s3, u3, l3 = t3;
        h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
          var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
          while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
          if (r4) {
            for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
              u4.unshift(i4);
              break;
            }
          }
          if (u4[0] in n4) o4 = u4[0];
          else {
            for (i4 in n4) {
              if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                o4 = i4;
                break;
              }
              a4 || (a4 = i4);
            }
            o4 = o4 || a4;
          }
          if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
        }(v2, T2, n3)), !i3 && -1 < S.inArray("script", v2.dataTypes) && (v2.converters["text script"] = function() {
        }), s3 = function(e4, t4, n4, r4) {
          var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
          if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
          o4 = c3.shift();
          while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
            if ("*" === o4) o4 = u4;
            else if ("*" !== u4 && u4 !== o4) {
              if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                  true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                  break;
                }
              }
              if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
              else try {
                t4 = a4(t4);
              } catch (e5) {
                return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
              }
            }
          }
          return { state: "success", data: t4 };
        }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
      }
      return T2;
    }, getJSON: function(e2, t2, n2) {
      return S.get(e2, t2, n2, "json");
    }, getScript: function(e2, t2) {
      return S.get(e2, void 0, t2, "script");
    } }), S.each(["get", "post"], function(e2, i2) {
      S[i2] = function(e3, t2, n2, r2) {
        return m(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), S.ajax(S.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, S.isPlainObject(e3) && e3));
      };
    }), S.ajaxPrefilter(function(e2) {
      var t2;
      for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
    }), S._evalUrl = function(e2, t2, n2) {
      return S.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
      } }, dataFilter: function(e3) {
        S.globalEval(e3, t2, n2);
      } });
    }, S.fn.extend({ wrapAll: function(e2) {
      var t2;
      return this[0] && (m(e2) && (e2 = e2.call(this[0])), t2 = S(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
        var e3 = this;
        while (e3.firstElementChild) e3 = e3.firstElementChild;
        return e3;
      }).append(this)), this;
    }, wrapInner: function(n2) {
      return m(n2) ? this.each(function(e2) {
        S(this).wrapInner(n2.call(this, e2));
      }) : this.each(function() {
        var e2 = S(this), t2 = e2.contents();
        t2.length ? t2.wrapAll(n2) : e2.append(n2);
      });
    }, wrap: function(t2) {
      var n2 = m(t2);
      return this.each(function(e2) {
        S(this).wrapAll(n2 ? t2.call(this, e2) : t2);
      });
    }, unwrap: function(e2) {
      return this.parent(e2).not("body").each(function() {
        S(this).replaceWith(this.childNodes);
      }), this;
    } }), S.expr.pseudos.hidden = function(e2) {
      return !S.expr.pseudos.visible(e2);
    }, S.expr.pseudos.visible = function(e2) {
      return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
    }, S.ajaxSettings.xhr = function() {
      try {
        return new C.XMLHttpRequest();
      } catch (e2) {
      }
    };
    var _t = { 0: 200, 1223: 204 }, zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i2) {
      var o2, a2;
      if (y.cors || zt && !i2.crossDomain) return { send: function(e2, t2) {
        var n2, r2 = i2.xhr();
        if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
        for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
        o2 = function(e3) {
          return function() {
            o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(_t[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
          };
        }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
          4 === r2.readyState && C.setTimeout(function() {
            o2 && a2();
          });
        }, o2 = o2("abort");
        try {
          r2.send(i2.hasContent && i2.data || null);
        } catch (e3) {
          if (o2) throw e3;
        }
      }, abort: function() {
        o2 && o2();
      } };
    }), S.ajaxPrefilter(function(e2) {
      e2.crossDomain && (e2.contents.script = false);
    }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
      return S.globalEval(e2), e2;
    } } }), S.ajaxPrefilter("script", function(e2) {
      void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
    }), S.ajaxTransport("script", function(n2) {
      var r2, i2;
      if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
        r2 = S("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
          r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
        }), E.head.appendChild(r2[0]);
      }, abort: function() {
        i2 && i2();
      } };
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
      var e2 = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e2] = true, e2;
    } }), S.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
      var r2, i2, o2, a2 = false !== e2.jsonp && (Vt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e2.data) && "data");
      if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = m(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Vt, "$1" + r2) : false !== e2.jsonp && (e2.url += (Et.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
        return o2 || S.error(r2 + " was not called"), o2[0];
      }, e2.dataTypes[0] = "json", i2 = C[r2], C[r2] = function() {
        o2 = arguments;
      }, n2.always(function() {
        void 0 === i2 ? S(C).removeProp(r2) : C[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Xt.push(r2)), o2 && m(i2) && i2(o2[0]), o2 = i2 = void 0;
      }), "script";
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e2, t2, n2) {
      return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (y.createHTMLDocument ? ((r2 = (t2 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t2.head.appendChild(r2)) : t2 = E), o2 = !n2 && [], (i2 = N.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = xe([e2], t2, o2), o2 && o2.length && S(o2).remove(), S.merge([], i2.childNodes)));
      var r2, i2, o2;
    }, S.fn.load = function(e2, t2, n2) {
      var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
      return -1 < s2 && (r2 = vt(e2.slice(s2)), e2 = e2.slice(0, s2)), m(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && S.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
        o2 = arguments, a2.html(r2 ? S("<div>").append(S.parseHTML(e3)).find(r2) : e3);
      }).always(n2 && function(e3, t3) {
        a2.each(function() {
          n2.apply(this, o2 || [e3.responseText, t3, e3]);
        });
      }), this;
    }, S.expr.pseudos.animated = function(t2) {
      return S.grep(S.timers, function(e2) {
        return t2 === e2.elem;
      }).length;
    }, S.offset = { setOffset: function(e2, t2, n2) {
      var r2, i2, o2, a2, s2, u2, l2 = S.css(e2, "position"), c2 = S(e2), f2 = {};
      "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = S.css(e2, "top"), u2 = S.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), m(t2) && (t2 = t2.call(e2, n2, S.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : ("number" == typeof f2.top && (f2.top += "px"), "number" == typeof f2.left && (f2.left += "px"), c2.css(f2));
    } }, S.fn.extend({ offset: function(t2) {
      if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
        S.offset.setOffset(this, t2, e3);
      });
      var e2, n2, r2 = this[0];
      return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function() {
      if (this[0]) {
        var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
        if ("fixed" === S.css(r2, "position")) t2 = r2.getBoundingClientRect();
        else {
          t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
          while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === S.css(e2, "position")) e2 = e2.parentNode;
          e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = S(e2).offset()).top += S.css(e2, "borderTopWidth", true), i2.left += S.css(e2, "borderLeftWidth", true));
        }
        return { top: t2.top - i2.top - S.css(r2, "marginTop", true), left: t2.left - i2.left - S.css(r2, "marginLeft", true) };
      }
    }, offsetParent: function() {
      return this.map(function() {
        var e2 = this.offsetParent;
        while (e2 && "static" === S.css(e2, "position")) e2 = e2.offsetParent;
        return e2 || re;
      });
    } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
      var o2 = "pageYOffset" === i2;
      S.fn[t2] = function(e2) {
        return $2(this, function(e3, t3, n2) {
          var r2;
          if (x(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
          r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
        }, t2, e2, arguments.length);
      };
    }), S.each(["top", "left"], function(e2, n2) {
      S.cssHooks[n2] = $e(y.pixelPosition, function(e3, t2) {
        if (t2) return t2 = Be(e3, n2), Me.test(t2) ? S(e3).position()[n2] + "px" : t2;
      });
    }), S.each({ Height: "height", Width: "width" }, function(a2, s2) {
      S.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
        S.fn[o2] = function(e2, t2) {
          var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
          return $2(this, function(e3, t3, n3) {
            var r3;
            return x(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? S.css(e3, t3, i2) : S.style(e3, t3, n3, i2);
          }, s2, n2 ? e2 : void 0, n2);
        };
      });
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
      S.fn[t2] = function(e3) {
        return this.on(t2, e3);
      };
    }), S.fn.extend({ bind: function(e2, t2, n2) {
      return this.on(e2, null, t2, n2);
    }, unbind: function(e2, t2) {
      return this.off(e2, null, t2);
    }, delegate: function(e2, t2, n2, r2) {
      return this.on(t2, e2, n2, r2);
    }, undelegate: function(e2, t2, n2) {
      return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
    }, hover: function(e2, t2) {
      return this.mouseenter(e2).mouseleave(t2 || e2);
    } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
      S.fn[n2] = function(e3, t2) {
        return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
      };
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e2, t2) {
      var n2, r2, i2;
      if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), m(e2)) return r2 = s.call(arguments, 2), (i2 = function() {
        return e2.apply(t2 || this, r2.concat(s.call(arguments)));
      }).guid = e2.guid = e2.guid || S.guid++, i2;
    }, S.holdReady = function(e2) {
      e2 ? S.readyWait++ : S.ready(true);
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e2) {
      var t2 = S.type(e2);
      return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
    }, S.trim = function(e2) {
      return null == e2 ? "" : (e2 + "").replace(Gt, "");
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return S;
    });
    var Yt = C.jQuery, Qt = C.$;
    return S.noConflict = function(e2) {
      return C.$ === S && (C.$ = Qt), e2 && C.jQuery === S && (C.jQuery = Yt), S;
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
  });
  /*! jQuery UI - v1.13.3 - 2024-06-20
  * https://jqueryui.com
  * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
  * Copyright OpenJS Foundation and other contributors; Licensed MIT */
  !function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
  }(function(V) {
    V.ui = V.ui || {};
    V.ui.version = "1.13.3";
    var n, s, x, k, o, a, r, l, h, i, N = 0, E = Array.prototype.hasOwnProperty, c = Array.prototype.slice;
    V.cleanData = (n = V.cleanData, function(t2) {
      for (var e2, i2, s2 = 0; null != (i2 = t2[s2]); s2++) (e2 = V._data(i2, "events")) && e2.remove && V(i2).triggerHandler("remove");
      n(t2);
    }), V.widget = function(t2, i2, e2) {
      var s2, n2, o2, a2 = {}, r2 = t2.split(".")[0], l2 = r2 + "-" + (t2 = t2.split(".")[1]);
      return e2 || (e2 = i2, i2 = V.Widget), Array.isArray(e2) && (e2 = V.extend.apply(null, [{}].concat(e2))), V.expr.pseudos[l2.toLowerCase()] = function(t3) {
        return !!V.data(t3, l2);
      }, V[r2] = V[r2] || {}, s2 = V[r2][t2], n2 = V[r2][t2] = function(t3, e3) {
        if (!this || !this._createWidget) return new n2(t3, e3);
        arguments.length && this._createWidget(t3, e3);
      }, V.extend(n2, s2, { version: e2.version, _proto: V.extend({}, e2), _childConstructors: [] }), (o2 = new i2()).options = V.widget.extend({}, o2.options), V.each(e2, function(e3, s3) {
        function n3() {
          return i2.prototype[e3].apply(this, arguments);
        }
        function o3(t3) {
          return i2.prototype[e3].apply(this, t3);
        }
        a2[e3] = "function" != typeof s3 ? s3 : function() {
          var t3, e4 = this._super, i3 = this._superApply;
          return this._super = n3, this._superApply = o3, t3 = s3.apply(this, arguments), this._super = e4, this._superApply = i3, t3;
        };
      }), n2.prototype = V.widget.extend(o2, { widgetEventPrefix: s2 && o2.widgetEventPrefix || t2 }, a2, { constructor: n2, namespace: r2, widgetName: t2, widgetFullName: l2 }), s2 ? (V.each(s2._childConstructors, function(t3, e3) {
        var i3 = e3.prototype;
        V.widget(i3.namespace + "." + i3.widgetName, n2, e3._proto);
      }), delete s2._childConstructors) : i2._childConstructors.push(n2), V.widget.bridge(t2, n2), n2;
    }, V.widget.extend = function(t2) {
      for (var e2, i2, s2 = c.call(arguments, 1), n2 = 0, o2 = s2.length; n2 < o2; n2++) for (e2 in s2[n2]) i2 = s2[n2][e2], E.call(s2[n2], e2) && void 0 !== i2 && (V.isPlainObject(i2) ? t2[e2] = V.isPlainObject(t2[e2]) ? V.widget.extend({}, t2[e2], i2) : V.widget.extend({}, i2) : t2[e2] = i2);
      return t2;
    }, V.widget.bridge = function(o2, e2) {
      var a2 = e2.prototype.widgetFullName || o2;
      V.fn[o2] = function(i2) {
        var t2 = "string" == typeof i2, s2 = c.call(arguments, 1), n2 = this;
        return t2 ? this.length || "instance" !== i2 ? this.each(function() {
          var t3, e3 = V.data(this, a2);
          return "instance" === i2 ? (n2 = e3, false) : e3 ? "function" != typeof e3[i2] || "_" === i2.charAt(0) ? V.error("no such method '" + i2 + "' for " + o2 + " widget instance") : (t3 = e3[i2].apply(e3, s2)) !== e3 && void 0 !== t3 ? (n2 = t3 && t3.jquery ? n2.pushStack(t3.get()) : t3, false) : void 0 : V.error("cannot call methods on " + o2 + " prior to initialization; attempted to call method '" + i2 + "'");
        }) : n2 = void 0 : (s2.length && (i2 = V.widget.extend.apply(null, [i2].concat(s2))), this.each(function() {
          var t3 = V.data(this, a2);
          t3 ? (t3.option(i2 || {}), t3._init && t3._init()) : V.data(this, a2, new e2(i2, this));
        })), n2;
      };
    }, V.Widget = function() {
    }, V.Widget._childConstructors = [], V.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: false, create: null }, _createWidget: function(t2, e2) {
      e2 = V(e2 || this.defaultElement || this)[0], this.element = V(e2), this.uuid = N++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = V(), this.hoverable = V(), this.focusable = V(), this.classesElementLookup = {}, e2 !== this && (V.data(e2, this.widgetFullName, this), this._on(true, this.element, { remove: function(t3) {
        t3.target === e2 && this.destroy();
      } }), this.document = V(e2.style ? e2.ownerDocument : e2.document || e2), this.window = V(this.document[0].defaultView || this.document[0].parentWindow)), this.options = V.widget.extend({}, this.options, this._getCreateOptions(), t2), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: function() {
      return {};
    }, _getCreateEventData: V.noop, _create: V.noop, _init: V.noop, destroy: function() {
      var i2 = this;
      this._destroy(), V.each(this.classesElementLookup, function(t2, e2) {
        i2._removeClass(e2, t2);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    }, _destroy: V.noop, widget: function() {
      return this.element;
    }, option: function(t2, e2) {
      var i2, s2, n2, o2 = t2;
      if (0 === arguments.length) return V.widget.extend({}, this.options);
      if ("string" == typeof t2) if (o2 = {}, t2 = (i2 = t2.split(".")).shift(), i2.length) {
        for (s2 = o2[t2] = V.widget.extend({}, this.options[t2]), n2 = 0; n2 < i2.length - 1; n2++) s2[i2[n2]] = s2[i2[n2]] || {}, s2 = s2[i2[n2]];
        if (t2 = i2.pop(), 1 === arguments.length) return void 0 === s2[t2] ? null : s2[t2];
        s2[t2] = e2;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t2] ? null : this.options[t2];
        o2[t2] = e2;
      }
      return this._setOptions(o2), this;
    }, _setOptions: function(t2) {
      for (var e2 in t2) this._setOption(e2, t2[e2]);
      return this;
    }, _setOption: function(t2, e2) {
      return "classes" === t2 && this._setOptionClasses(e2), this.options[t2] = e2, "disabled" === t2 && this._setOptionDisabled(e2), this;
    }, _setOptionClasses: function(t2) {
      var e2, i2, s2;
      for (e2 in t2) s2 = this.classesElementLookup[e2], t2[e2] !== this.options.classes[e2] && s2 && s2.length && (i2 = V(s2.get()), this._removeClass(s2, e2), i2.addClass(this._classes({ element: i2, keys: e2, classes: t2, add: true })));
    }, _setOptionDisabled: function(t2) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t2), t2 && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    }, enable: function() {
      return this._setOptions({ disabled: false });
    }, disable: function() {
      return this._setOptions({ disabled: true });
    }, _classes: function(n2) {
      var o2 = [], a2 = this;
      function t2(t3, e2) {
        for (var i2, s2 = 0; s2 < t3.length; s2++) i2 = a2.classesElementLookup[t3[s2]] || V(), i2 = n2.add ? (function() {
          var i3 = [];
          n2.element.each(function(t4, e3) {
            V.map(a2.classesElementLookup, function(t5) {
              return t5;
            }).some(function(t5) {
              return t5.is(e3);
            }) || i3.push(e3);
          }), a2._on(V(i3), { remove: "_untrackClassesElement" });
        }(), V(V.uniqueSort(i2.get().concat(n2.element.get())))) : V(i2.not(n2.element).get()), a2.classesElementLookup[t3[s2]] = i2, o2.push(t3[s2]), e2 && n2.classes[t3[s2]] && o2.push(n2.classes[t3[s2]]);
      }
      return (n2 = V.extend({ element: this.element, classes: this.options.classes || {} }, n2)).keys && t2(n2.keys.match(/\S+/g) || [], true), n2.extra && t2(n2.extra.match(/\S+/g) || []), o2.join(" ");
    }, _untrackClassesElement: function(i2) {
      var s2 = this;
      V.each(s2.classesElementLookup, function(t2, e2) {
        -1 !== V.inArray(i2.target, e2) && (s2.classesElementLookup[t2] = V(e2.not(i2.target).get()));
      }), this._off(V(i2.target));
    }, _removeClass: function(t2, e2, i2) {
      return this._toggleClass(t2, e2, i2, false);
    }, _addClass: function(t2, e2, i2) {
      return this._toggleClass(t2, e2, i2, true);
    }, _toggleClass: function(t2, e2, i2, s2) {
      var n2 = "string" == typeof t2 || null === t2, e2 = { extra: n2 ? e2 : i2, keys: n2 ? t2 : e2, element: n2 ? this.element : t2, add: s2 = "boolean" == typeof s2 ? s2 : i2 };
      return e2.element.toggleClass(this._classes(e2), s2), this;
    }, _on: function(n2, o2, t2) {
      var a2, r2 = this;
      "boolean" != typeof n2 && (t2 = o2, o2 = n2, n2 = false), t2 ? (o2 = a2 = V(o2), this.bindings = this.bindings.add(o2)) : (t2 = o2, o2 = this.element, a2 = this.widget()), V.each(t2, function(t3, e2) {
        function i2() {
          if (n2 || true !== r2.options.disabled && !V(this).hasClass("ui-state-disabled")) return ("string" == typeof e2 ? r2[e2] : e2).apply(r2, arguments);
        }
        "string" != typeof e2 && (i2.guid = e2.guid = e2.guid || i2.guid || V.guid++);
        var t3 = t3.match(/^([\w:-]*)\s*(.*)$/), s2 = t3[1] + r2.eventNamespace, t3 = t3[2];
        t3 ? a2.on(s2, t3, i2) : o2.on(s2, i2);
      });
    }, _off: function(t2, e2) {
      e2 = (e2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t2.off(e2), this.bindings = V(this.bindings.not(t2).get()), this.focusable = V(this.focusable.not(t2).get()), this.hoverable = V(this.hoverable.not(t2).get());
    }, _delay: function(t2, e2) {
      var i2 = this;
      return setTimeout(function() {
        return ("string" == typeof t2 ? i2[t2] : t2).apply(i2, arguments);
      }, e2 || 0);
    }, _hoverable: function(t2) {
      this.hoverable = this.hoverable.add(t2), this._on(t2, { mouseenter: function(t3) {
        this._addClass(V(t3.currentTarget), null, "ui-state-hover");
      }, mouseleave: function(t3) {
        this._removeClass(V(t3.currentTarget), null, "ui-state-hover");
      } });
    }, _focusable: function(t2) {
      this.focusable = this.focusable.add(t2), this._on(t2, { focusin: function(t3) {
        this._addClass(V(t3.currentTarget), null, "ui-state-focus");
      }, focusout: function(t3) {
        this._removeClass(V(t3.currentTarget), null, "ui-state-focus");
      } });
    }, _trigger: function(t2, e2, i2) {
      var s2, n2, o2 = this.options[t2];
      if (i2 = i2 || {}, (e2 = V.Event(e2)).type = (t2 === this.widgetEventPrefix ? t2 : this.widgetEventPrefix + t2).toLowerCase(), e2.target = this.element[0], n2 = e2.originalEvent) for (s2 in n2) s2 in e2 || (e2[s2] = n2[s2]);
      return this.element.trigger(e2, i2), !("function" == typeof o2 && false === o2.apply(this.element[0], [e2].concat(i2)) || e2.isDefaultPrevented());
    } }, V.each({ show: "fadeIn", hide: "fadeOut" }, function(o2, a2) {
      V.Widget.prototype["_" + o2] = function(e2, t2, i2) {
        var s2, n2 = (t2 = "string" == typeof t2 ? { effect: t2 } : t2) ? true !== t2 && "number" != typeof t2 && t2.effect || a2 : o2;
        "number" == typeof (t2 = t2 || {}) ? t2 = { duration: t2 } : true === t2 && (t2 = {}), s2 = !V.isEmptyObject(t2), t2.complete = i2, t2.delay && e2.delay(t2.delay), s2 && V.effects && V.effects.effect[n2] ? e2[o2](t2) : n2 !== o2 && e2[n2] ? e2[n2](t2.duration, t2.easing, i2) : e2.queue(function(t3) {
          V(this)[o2](), i2 && i2.call(e2[0]), t3();
        });
      };
    }), V.widget;
    function C(t2, e2, i2) {
      return [parseFloat(t2[0]) * (h.test(t2[0]) ? e2 / 100 : 1), parseFloat(t2[1]) * (h.test(t2[1]) ? i2 / 100 : 1)];
    }
    function D(t2, e2) {
      return parseInt(V.css(t2, e2), 10) || 0;
    }
    function I(t2) {
      return null != t2 && t2 === t2.window;
    }
    x = Math.max, k = Math.abs, o = /left|center|right/, a = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, h = /%$/, i = V.fn.position, V.position = { scrollbarWidth: function() {
      var t2, e2, i2;
      return void 0 !== s ? s : (i2 = (e2 = V("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0], V("body").append(e2), t2 = i2.offsetWidth, e2.css("overflow", "scroll"), t2 === (i2 = i2.offsetWidth) && (i2 = e2[0].clientWidth), e2.remove(), s = t2 - i2);
    }, getScrollInfo: function(t2) {
      var e2 = t2.isWindow || t2.isDocument ? "" : t2.element.css("overflow-x"), i2 = t2.isWindow || t2.isDocument ? "" : t2.element.css("overflow-y"), e2 = "scroll" === e2 || "auto" === e2 && t2.width < t2.element[0].scrollWidth;
      return { width: "scroll" === i2 || "auto" === i2 && t2.height < t2.element[0].scrollHeight ? V.position.scrollbarWidth() : 0, height: e2 ? V.position.scrollbarWidth() : 0 };
    }, getWithinInfo: function(t2) {
      var e2 = V(t2 || window), i2 = I(e2[0]), s2 = !!e2[0] && 9 === e2[0].nodeType;
      return { element: e2, isWindow: i2, isDocument: s2, offset: !i2 && !s2 ? V(t2).offset() : { left: 0, top: 0 }, scrollLeft: e2.scrollLeft(), scrollTop: e2.scrollTop(), width: e2.outerWidth(), height: e2.outerHeight() };
    } }, V.fn.position = function(u2) {
      var d2, p2, f2, g2, m2, _2, v2, b2, y2, w2, t2, e2;
      return u2 && u2.of ? (_2 = "string" == typeof (u2 = V.extend({}, u2)).of ? V(document).find(u2.of) : V(u2.of), v2 = V.position.getWithinInfo(u2.within), b2 = V.position.getScrollInfo(v2), y2 = (u2.collision || "flip").split(" "), w2 = {}, e2 = 9 === (e2 = (t2 = _2)[0]).nodeType ? { width: t2.width(), height: t2.height(), offset: { top: 0, left: 0 } } : I(e2) ? { width: t2.width(), height: t2.height(), offset: { top: t2.scrollTop(), left: t2.scrollLeft() } } : e2.preventDefault ? { width: 0, height: 0, offset: { top: e2.pageY, left: e2.pageX } } : { width: t2.outerWidth(), height: t2.outerHeight(), offset: t2.offset() }, _2[0].preventDefault && (u2.at = "left top"), p2 = e2.width, f2 = e2.height, m2 = V.extend({}, g2 = e2.offset), V.each(["my", "at"], function() {
        var t3, e3, i2 = (u2[this] || "").split(" ");
        (i2 = 1 === i2.length ? o.test(i2[0]) ? i2.concat(["center"]) : a.test(i2[0]) ? ["center"].concat(i2) : ["center", "center"] : i2)[0] = o.test(i2[0]) ? i2[0] : "center", i2[1] = a.test(i2[1]) ? i2[1] : "center", t3 = r.exec(i2[0]), e3 = r.exec(i2[1]), w2[this] = [t3 ? t3[0] : 0, e3 ? e3[0] : 0], u2[this] = [l.exec(i2[0])[0], l.exec(i2[1])[0]];
      }), 1 === y2.length && (y2[1] = y2[0]), "right" === u2.at[0] ? m2.left += p2 : "center" === u2.at[0] && (m2.left += p2 / 2), "bottom" === u2.at[1] ? m2.top += f2 : "center" === u2.at[1] && (m2.top += f2 / 2), d2 = C(w2.at, p2, f2), m2.left += d2[0], m2.top += d2[1], this.each(function() {
        var i2, t3, a2 = V(this), r2 = a2.outerWidth(), l2 = a2.outerHeight(), e3 = D(this, "marginLeft"), s2 = D(this, "marginTop"), n2 = r2 + e3 + D(this, "marginRight") + b2.width, o2 = l2 + s2 + D(this, "marginBottom") + b2.height, h2 = V.extend({}, m2), c2 = C(w2.my, a2.outerWidth(), a2.outerHeight());
        "right" === u2.my[0] ? h2.left -= r2 : "center" === u2.my[0] && (h2.left -= r2 / 2), "bottom" === u2.my[1] ? h2.top -= l2 : "center" === u2.my[1] && (h2.top -= l2 / 2), h2.left += c2[0], h2.top += c2[1], i2 = { marginLeft: e3, marginTop: s2 }, V.each(["left", "top"], function(t4, e4) {
          V.ui.position[y2[t4]] && V.ui.position[y2[t4]][e4](h2, { targetWidth: p2, targetHeight: f2, elemWidth: r2, elemHeight: l2, collisionPosition: i2, collisionWidth: n2, collisionHeight: o2, offset: [d2[0] + c2[0], d2[1] + c2[1]], my: u2.my, at: u2.at, within: v2, elem: a2 });
        }), u2.using && (t3 = function(t4) {
          var e4 = g2.left - h2.left, i3 = e4 + p2 - r2, s3 = g2.top - h2.top, n3 = s3 + f2 - l2, o3 = { target: { element: _2, left: g2.left, top: g2.top, width: p2, height: f2 }, element: { element: a2, left: h2.left, top: h2.top, width: r2, height: l2 }, horizontal: i3 < 0 ? "left" : 0 < e4 ? "right" : "center", vertical: n3 < 0 ? "top" : 0 < s3 ? "bottom" : "middle" };
          p2 < r2 && k(e4 + i3) < p2 && (o3.horizontal = "center"), f2 < l2 && k(s3 + n3) < f2 && (o3.vertical = "middle"), x(k(e4), k(i3)) > x(k(s3), k(n3)) ? o3.important = "horizontal" : o3.important = "vertical", u2.using.call(this, t4, o3);
        }), a2.offset(V.extend(h2, { using: t3 }));
      })) : i.apply(this, arguments);
    }, V.ui.position = { fit: { left: function(t2, e2) {
      var i2, s2 = e2.within, n2 = s2.isWindow ? s2.scrollLeft : s2.offset.left, s2 = s2.width, o2 = t2.left - e2.collisionPosition.marginLeft, a2 = n2 - o2, r2 = o2 + e2.collisionWidth - s2 - n2;
      e2.collisionWidth > s2 ? 0 < a2 && r2 <= 0 ? (i2 = t2.left + a2 + e2.collisionWidth - s2 - n2, t2.left += a2 - i2) : t2.left = !(0 < r2 && a2 <= 0) && r2 < a2 ? n2 + s2 - e2.collisionWidth : n2 : 0 < a2 ? t2.left += a2 : 0 < r2 ? t2.left -= r2 : t2.left = x(t2.left - o2, t2.left);
    }, top: function(t2, e2) {
      var i2, s2 = e2.within, s2 = s2.isWindow ? s2.scrollTop : s2.offset.top, n2 = e2.within.height, o2 = t2.top - e2.collisionPosition.marginTop, a2 = s2 - o2, r2 = o2 + e2.collisionHeight - n2 - s2;
      e2.collisionHeight > n2 ? 0 < a2 && r2 <= 0 ? (i2 = t2.top + a2 + e2.collisionHeight - n2 - s2, t2.top += a2 - i2) : t2.top = !(0 < r2 && a2 <= 0) && r2 < a2 ? s2 + n2 - e2.collisionHeight : s2 : 0 < a2 ? t2.top += a2 : 0 < r2 ? t2.top -= r2 : t2.top = x(t2.top - o2, t2.top);
    } }, flip: { left: function(t2, e2) {
      var i2 = e2.within, s2 = i2.offset.left + i2.scrollLeft, n2 = i2.width, i2 = i2.isWindow ? i2.scrollLeft : i2.offset.left, o2 = t2.left - e2.collisionPosition.marginLeft, a2 = o2 - i2, o2 = o2 + e2.collisionWidth - n2 - i2, r2 = "left" === e2.my[0] ? -e2.elemWidth : "right" === e2.my[0] ? e2.elemWidth : 0, l2 = "left" === e2.at[0] ? e2.targetWidth : "right" === e2.at[0] ? -e2.targetWidth : 0, h2 = -2 * e2.offset[0];
      a2 < 0 ? ((n2 = t2.left + r2 + l2 + h2 + e2.collisionWidth - n2 - s2) < 0 || n2 < k(a2)) && (t2.left += r2 + l2 + h2) : 0 < o2 && (0 < (s2 = t2.left - e2.collisionPosition.marginLeft + r2 + l2 + h2 - i2) || k(s2) < o2) && (t2.left += r2 + l2 + h2);
    }, top: function(t2, e2) {
      var i2 = e2.within, s2 = i2.offset.top + i2.scrollTop, n2 = i2.height, i2 = i2.isWindow ? i2.scrollTop : i2.offset.top, o2 = t2.top - e2.collisionPosition.marginTop, a2 = o2 - i2, o2 = o2 + e2.collisionHeight - n2 - i2, r2 = "top" === e2.my[1] ? -e2.elemHeight : "bottom" === e2.my[1] ? e2.elemHeight : 0, l2 = "top" === e2.at[1] ? e2.targetHeight : "bottom" === e2.at[1] ? -e2.targetHeight : 0, h2 = -2 * e2.offset[1];
      a2 < 0 ? ((n2 = t2.top + r2 + l2 + h2 + e2.collisionHeight - n2 - s2) < 0 || n2 < k(a2)) && (t2.top += r2 + l2 + h2) : 0 < o2 && (0 < (s2 = t2.top - e2.collisionPosition.marginTop + r2 + l2 + h2 - i2) || k(s2) < o2) && (t2.top += r2 + l2 + h2);
    } }, flipfit: { left: function() {
      V.ui.position.flip.left.apply(this, arguments), V.ui.position.fit.left.apply(this, arguments);
    }, top: function() {
      V.ui.position.flip.top.apply(this, arguments), V.ui.position.fit.top.apply(this, arguments);
    } } };
    var W;
    V.ui.position, V.extend(V.expr.pseudos, { data: V.expr.createPseudo ? V.expr.createPseudo(function(e2) {
      return function(t2) {
        return !!V.data(t2, e2);
      };
    }) : function(t2, e2, i2) {
      return !!V.data(t2, i2[3]);
    } }), V.fn.extend({ disableSelection: (W = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
      return this.on(W + ".ui-disableSelection", function(t2) {
        t2.preventDefault();
      });
    }), enableSelection: function() {
      return this.off(".ui-disableSelection");
    } });
    V.ui.focusable = function(t2, e2) {
      var i2, s2, n2, o2 = t2.nodeName.toLowerCase();
      return "area" === o2 ? (n2 = (i2 = t2.parentNode).name, !(!t2.href || !n2 || "map" !== i2.nodeName.toLowerCase()) && 0 < (i2 = V("img[usemap='#" + n2 + "']")).length && i2.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(o2) ? (s2 = !t2.disabled) && (n2 = V(t2).closest("fieldset")[0]) && (s2 = !n2.disabled) : s2 = "a" === o2 && t2.href || e2, s2 && V(t2).is(":visible") && function(t3) {
        var e3 = t3.css("visibility");
        for (; "inherit" === e3; ) t3 = t3.parent(), e3 = t3.css("visibility");
        return "visible" === e3;
      }(V(t2)));
    }, V.extend(V.expr.pseudos, { focusable: function(t2) {
      return V.ui.focusable(t2, null != V.attr(t2, "tabindex"));
    } });
    V.ui.focusable, V.fn._form = function() {
      return "string" == typeof this[0].form ? this.closest("form") : V(this[0].form);
    }, V.ui.formResetMixin = { _formResetHandler: function() {
      var e2 = V(this);
      setTimeout(function() {
        var t2 = e2.data("ui-form-reset-instances");
        V.each(t2, function() {
          this.refresh();
        });
      });
    }, _bindFormResetHandler: function() {
      var t2;
      this.form = this.element._form(), this.form.length && ((t2 = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t2.push(this), this.form.data("ui-form-reset-instances", t2));
    }, _unbindFormResetHandler: function() {
      var t2;
      this.form.length && ((t2 = this.form.data("ui-form-reset-instances")).splice(V.inArray(this, t2), 1), t2.length ? this.form.data("ui-form-reset-instances", t2) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
    } }, V.expr.pseudos || (V.expr.pseudos = V.expr[":"]), V.uniqueSort || (V.uniqueSort = V.unique), V.escapeSelector || (F = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, L = function(t2, e2) {
      return e2 ? "\0" === t2 ? "�" : t2.slice(0, -1) + "\\" + t2.charCodeAt(t2.length - 1).toString(16) + " " : "\\" + t2;
    }, V.escapeSelector = function(t2) {
      return (t2 + "").replace(F, L);
    }), V.fn.even && V.fn.odd || V.fn.extend({ even: function() {
      return this.filter(function(t2) {
        return t2 % 2 == 0;
      });
    }, odd: function() {
      return this.filter(function(t2) {
        return t2 % 2 == 1;
      });
    } }), V.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, V.fn.labels = function() {
      var t2, e2, i2;
      return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e2 = this.eq(0).parents("label"), (t2 = this.attr("id")) && (i2 = (i2 = this.eq(0).parents().last()).add((i2.length ? i2 : this).siblings()), t2 = "label[for='" + V.escapeSelector(t2) + "']", e2 = e2.add(i2.find(t2).addBack(t2))), this.pushStack(e2)) : this.pushStack([]);
    }, V.fn.scrollParent = function(t2) {
      var e2 = this.css("position"), i2 = "absolute" === e2, s2 = t2 ? /(auto|scroll|hidden)/ : /(auto|scroll)/, t2 = this.parents().filter(function() {
        var t3 = V(this);
        return (!i2 || "static" !== t3.css("position")) && s2.test(t3.css("overflow") + t3.css("overflow-y") + t3.css("overflow-x"));
      }).eq(0);
      return "fixed" !== e2 && t2.length ? t2 : V(this[0].ownerDocument || document);
    }, V.extend(V.expr.pseudos, { tabbable: function(t2) {
      var e2 = V.attr(t2, "tabindex"), i2 = null != e2;
      return (!i2 || 0 <= e2) && V.ui.focusable(t2, i2);
    } }), V.fn.extend({ uniqueId: (R = 0, function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++R);
      });
    }), removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && V(this).removeAttr("id");
      });
    } }), V.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var F, L, R, u = false;
    V(document).on("mouseup", function() {
      u = false;
    }), V.widget("ui.mouse", { version: "1.13.3", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() {
      var e2 = this;
      this.element.on("mousedown." + this.widgetName, function(t2) {
        return e2._mouseDown(t2);
      }).on("click." + this.widgetName, function(t2) {
        if (true === V.data(t2.target, e2.widgetName + ".preventClickEvent")) return V.removeData(t2.target, e2.widgetName + ".preventClickEvent"), t2.stopImmediatePropagation(), false;
      }), this.started = false;
    }, _mouseDestroy: function() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function(t2) {
      var e2, i2, s2;
      if (!u) return this._mouseMoved = false, this._mouseStarted && this._mouseUp(t2), i2 = 1 === (this._mouseDownEvent = t2).which, s2 = !("string" != typeof (e2 = this).options.cancel || !t2.target.nodeName) && V(t2.target).closest(this.options.cancel).length, i2 && !s2 && this._mouseCapture(t2) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
        e2.mouseDelayMet = true;
      }, this.options.delay)), this._mouseDistanceMet(t2) && this._mouseDelayMet(t2) && (this._mouseStarted = false !== this._mouseStart(t2), !this._mouseStarted) ? t2.preventDefault() : (true === V.data(t2.target, this.widgetName + ".preventClickEvent") && V.removeData(t2.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t3) {
        return e2._mouseMove(t3);
      }, this._mouseUpDelegate = function(t3) {
        return e2._mouseUp(t3);
      }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t2.preventDefault(), u = true)), true;
    }, _mouseMove: function(t2) {
      if (this._mouseMoved) {
        if (V.ui.ie && (!document.documentMode || document.documentMode < 9) && !t2.button) return this._mouseUp(t2);
        if (!t2.which) {
          if (t2.originalEvent.altKey || t2.originalEvent.ctrlKey || t2.originalEvent.metaKey || t2.originalEvent.shiftKey) this.ignoreMissingWhich = true;
          else if (!this.ignoreMissingWhich) return this._mouseUp(t2);
        }
      }
      return (t2.which || t2.button) && (this._mouseMoved = true), this._mouseStarted ? (this._mouseDrag(t2), t2.preventDefault()) : (this._mouseDistanceMet(t2) && this._mouseDelayMet(t2) && (this._mouseStarted = false !== this._mouseStart(this._mouseDownEvent, t2), this._mouseStarted ? this._mouseDrag(t2) : this._mouseUp(t2)), !this._mouseStarted);
    }, _mouseUp: function(t2) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, t2.target === this._mouseDownEvent.target && V.data(t2.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(t2)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = false, u = false, t2.preventDefault();
    }, _mouseDistanceMet: function(t2) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t2.pageX), Math.abs(this._mouseDownEvent.pageY - t2.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function() {
      return this.mouseDelayMet;
    }, _mouseStart: function() {
    }, _mouseDrag: function() {
    }, _mouseStop: function() {
    }, _mouseCapture: function() {
      return true;
    } }), V.ui.plugin = { add: function(t2, e2, i2) {
      var s2, n2 = V.ui[t2].prototype;
      for (s2 in i2) n2.plugins[s2] = n2.plugins[s2] || [], n2.plugins[s2].push([e2, i2[s2]]);
    }, call: function(t2, e2, i2, s2) {
      var n2, o2 = t2.plugins[e2];
      if (o2 && (s2 || t2.element[0].parentNode && 11 !== t2.element[0].parentNode.nodeType)) for (n2 = 0; n2 < o2.length; n2++) t2.options[o2[n2][0]] && o2[n2][1].apply(t2.element, i2);
    } }, V.ui.safeActiveElement = function(e2) {
      var i2;
      try {
        i2 = e2.activeElement;
      } catch (t2) {
        i2 = e2.body;
      }
      return i2 = (i2 = i2 || e2.body).nodeName ? i2 : e2.body;
    }, V.ui.safeBlur = function(t2) {
      t2 && "body" !== t2.nodeName.toLowerCase() && V(t2).trigger("blur");
    }, V.widget("ui.draggable", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null }, _create: function() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    }, _setOption: function(t2, e2) {
      this._super(t2, e2), "handle" === t2 && (this._removeHandleClassName(), this._setHandleClassName());
    }, _destroy: function() {
      (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = true : (this._removeHandleClassName(), this._mouseDestroy());
    }, _mouseCapture: function(t2) {
      var e2 = this.options;
      return !(this.helper || e2.disabled || 0 < V(t2.target).closest(".ui-resizable-handle").length || (this.handle = this._getHandle(t2), !this.handle) || (this._blurActiveElement(t2), this._blockFrames(true === e2.iframeFix ? "iframe" : e2.iframeFix), 0));
    }, _blockFrames: function(t2) {
      this.iframeBlocks = this.document.find(t2).map(function() {
        var t3 = V(this);
        return V("<div>").css("position", "absolute").appendTo(t3.parent()).outerWidth(t3.outerWidth()).outerHeight(t3.outerHeight()).offset(t3.offset())[0];
      });
    }, _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _blurActiveElement: function(t2) {
      var e2 = V.ui.safeActiveElement(this.document[0]);
      V(t2.target).closest(e2).length || V.ui.safeBlur(e2);
    }, _mouseStart: function(t2) {
      var e2 = this.options;
      return this.helper = this._createHelper(t2), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), V.ui.ddmanager && (V.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(true), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
        return "fixed" === V(this).css("position");
      }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t2), this.originalPosition = this.position = this._generatePosition(t2, false), this.originalPageX = t2.pageX, this.originalPageY = t2.pageY, e2.cursorAt && this._adjustOffsetFromHelper(e2.cursorAt), this._setContainment(), false === this._trigger("start", t2) ? (this._clear(), false) : (this._cacheHelperProportions(), V.ui.ddmanager && !e2.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t2), this._mouseDrag(t2, true), V.ui.ddmanager && V.ui.ddmanager.dragStart(this, t2), true);
    }, _refreshOffsets: function(t2) {
      this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: false, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t2.pageX - this.offset.left, top: t2.pageY - this.offset.top };
    }, _mouseDrag: function(t2, e2) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t2, true), this.positionAbs = this._convertPositionTo("absolute"), !e2) {
        e2 = this._uiHash();
        if (false === this._trigger("drag", t2, e2)) return this._mouseUp(new V.Event("mouseup", t2)), false;
        this.position = e2.position;
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", V.ui.ddmanager && V.ui.ddmanager.drag(this, t2), false;
    }, _mouseStop: function(t2) {
      var e2 = this, i2 = false;
      return V.ui.ddmanager && !this.options.dropBehaviour && (i2 = V.ui.ddmanager.drop(this, t2)), this.dropped && (i2 = this.dropped, this.dropped = false), "invalid" === this.options.revert && !i2 || "valid" === this.options.revert && i2 || true === this.options.revert || "function" == typeof this.options.revert && this.options.revert.call(this.element, i2) ? V(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        false !== e2._trigger("stop", t2) && e2._clear();
      }) : false !== this._trigger("stop", t2) && this._clear(), false;
    }, _mouseUp: function(t2) {
      return this._unblockFrames(), V.ui.ddmanager && V.ui.ddmanager.dragStop(this, t2), this.handleElement.is(t2.target) && this.element.trigger("focus"), V.ui.mouse.prototype._mouseUp.call(this, t2);
    }, cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new V.Event("mouseup", { target: this.element[0] })) : this._clear(), this;
    }, _getHandle: function(t2) {
      return !this.options.handle || !!V(t2.target).closest(this.element.find(this.options.handle)).length;
    }, _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    }, _removeHandleClassName: function() {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    }, _createHelper: function(t2) {
      var e2 = this.options, i2 = "function" == typeof e2.helper, t2 = i2 ? V(e2.helper.apply(this.element[0], [t2])) : "clone" === e2.helper ? this.element.clone().removeAttr("id") : this.element;
      return t2.parents("body").length || t2.appendTo("parent" === e2.appendTo ? this.element[0].parentNode : e2.appendTo), i2 && t2[0] === this.element[0] && this._setPositionRelative(), t2[0] === this.element[0] || /(fixed|absolute)/.test(t2.css("position")) || t2.css("position", "absolute"), t2;
    }, _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    }, _adjustOffsetFromHelper: function(t2) {
      "string" == typeof t2 && (t2 = t2.split(" ")), "left" in (t2 = Array.isArray(t2) ? { left: +t2[0], top: +t2[1] || 0 } : t2) && (this.offset.click.left = t2.left + this.margins.left), "right" in t2 && (this.offset.click.left = this.helperProportions.width - t2.right + this.margins.left), "top" in t2 && (this.offset.click.top = t2.top + this.margins.top), "bottom" in t2 && (this.offset.click.top = this.helperProportions.height - t2.bottom + this.margins.top);
    }, _isRootNode: function(t2) {
      return /(html|body)/i.test(t2.tagName) || t2 === this.document[0];
    }, _getParentOffset: function() {
      var t2 = this.offsetParent.offset(), e2 = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== e2 && V.contains(this.scrollParent[0], this.offsetParent[0]) && (t2.left += this.scrollParent.scrollLeft(), t2.top += this.scrollParent.scrollTop()), { top: (t2 = this._isRootNode(this.offsetParent[0]) ? { top: 0, left: 0 } : t2).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t2.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function() {
      var t2, e2;
      return "relative" !== this.cssPosition ? { top: 0, left: 0 } : (t2 = this.element.position(), e2 = this._isRootNode(this.scrollParent[0]), { top: t2.top - (parseInt(this.helper.css("top"), 10) || 0) + (e2 ? 0 : this.scrollParent.scrollTop()), left: t2.left - (parseInt(this.helper.css("left"), 10) || 0) + (e2 ? 0 : this.scrollParent.scrollLeft()) });
    }, _cacheMargins: function() {
      this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
    }, _cacheHelperProportions: function() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function() {
      var t2, e2 = this.options, i2 = this.document[0];
      this.relativeContainer = null, e2.containment ? "window" === e2.containment ? this.containment = [V(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, V(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, V(window).scrollLeft() + V(window).width() - this.helperProportions.width - this.margins.left, V(window).scrollTop() + (V(window).height() || i2.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : "document" === e2.containment ? this.containment = [0, 0, V(i2).width() - this.helperProportions.width - this.margins.left, (V(i2).height() || i2.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : e2.containment.constructor === Array ? this.containment = e2.containment : ("parent" === e2.containment && (e2.containment = this.helper[0].parentNode), (e2 = (i2 = V(e2.containment))[0]) && (t2 = /(scroll|auto)/.test(i2.css("overflow")), this.containment = [(parseInt(i2.css("borderLeftWidth"), 10) || 0) + (parseInt(i2.css("paddingLeft"), 10) || 0), (parseInt(i2.css("borderTopWidth"), 10) || 0) + (parseInt(i2.css("paddingTop"), 10) || 0), (t2 ? Math.max(e2.scrollWidth, e2.offsetWidth) : e2.offsetWidth) - (parseInt(i2.css("borderRightWidth"), 10) || 0) - (parseInt(i2.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t2 ? Math.max(e2.scrollHeight, e2.offsetHeight) : e2.offsetHeight) - (parseInt(i2.css("borderBottomWidth"), 10) || 0) - (parseInt(i2.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i2)) : this.containment = null;
    }, _convertPositionTo: function(t2, e2) {
      e2 = e2 || this.position;
      var t2 = "absolute" === t2 ? 1 : -1, i2 = this._isRootNode(this.scrollParent[0]);
      return { top: e2.top + this.offset.relative.top * t2 + this.offset.parent.top * t2 - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i2 ? 0 : this.offset.scroll.top) * t2, left: e2.left + this.offset.relative.left * t2 + this.offset.parent.left * t2 - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i2 ? 0 : this.offset.scroll.left) * t2 };
    }, _generatePosition: function(t2, e2) {
      var i2, s2 = this.options, n2 = this._isRootNode(this.scrollParent[0]), o2 = t2.pageX, a2 = t2.pageY;
      return n2 && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), { top: (a2 = e2 && (this.containment && (i2 = this.relativeContainer ? (e2 = this.relativeContainer.offset(), [this.containment[0] + e2.left, this.containment[1] + e2.top, this.containment[2] + e2.left, this.containment[3] + e2.top]) : this.containment, t2.pageX - this.offset.click.left < i2[0] && (o2 = i2[0] + this.offset.click.left), t2.pageY - this.offset.click.top < i2[1] && (a2 = i2[1] + this.offset.click.top), t2.pageX - this.offset.click.left > i2[2] && (o2 = i2[2] + this.offset.click.left), t2.pageY - this.offset.click.top > i2[3]) && (a2 = i2[3] + this.offset.click.top), s2.grid && (e2 = s2.grid[1] ? this.originalPageY + Math.round((a2 - this.originalPageY) / s2.grid[1]) * s2.grid[1] : this.originalPageY, a2 = !i2 || e2 - this.offset.click.top >= i2[1] || e2 - this.offset.click.top > i2[3] ? e2 : e2 - this.offset.click.top >= i2[1] ? e2 - s2.grid[1] : e2 + s2.grid[1], t2 = s2.grid[0] ? this.originalPageX + Math.round((o2 - this.originalPageX) / s2.grid[0]) * s2.grid[0] : this.originalPageX, o2 = !i2 || t2 - this.offset.click.left >= i2[0] || t2 - this.offset.click.left > i2[2] ? t2 : t2 - this.offset.click.left >= i2[0] ? t2 - s2.grid[0] : t2 + s2.grid[0]), "y" === s2.axis && (o2 = this.originalPageX), "x" === s2.axis) ? this.originalPageY : a2) - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : n2 ? 0 : this.offset.scroll.top), left: o2 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : n2 ? 0 : this.offset.scroll.left) };
    }, _clear: function() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = false, this.destroyOnClear && this.destroy();
    }, _trigger: function(t2, e2, i2) {
      return i2 = i2 || this._uiHash(), V.ui.plugin.call(this, t2, [e2, i2, this], true), /^(drag|start|stop)/.test(t2) && (this.positionAbs = this._convertPositionTo("absolute"), i2.offset = this.positionAbs), V.Widget.prototype._trigger.call(this, t2, e2, i2);
    }, plugins: {}, _uiHash: function() {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    } }), V.ui.plugin.add("draggable", "connectToSortable", { start: function(e2, t2, i2) {
      var s2 = V.extend({}, t2, { item: i2.element });
      i2.sortables = [], V(i2.options.connectToSortable).each(function() {
        var t3 = V(this).sortable("instance");
        t3 && !t3.options.disabled && (i2.sortables.push(t3), t3.refreshPositions(), t3._trigger("activate", e2, s2));
      });
    }, stop: function(e2, t2, i2) {
      var s2 = V.extend({}, t2, { item: i2.element });
      i2.cancelHelperRemoval = false, V.each(i2.sortables, function() {
        var t3 = this;
        t3.isOver ? (t3.isOver = 0, i2.cancelHelperRemoval = true, t3.cancelHelperRemoval = false, t3._storedCSS = { position: t3.placeholder.css("position"), top: t3.placeholder.css("top"), left: t3.placeholder.css("left") }, t3._mouseStop(e2), t3.options.helper = t3.options._helper) : (t3.cancelHelperRemoval = true, t3._trigger("deactivate", e2, s2));
      });
    }, drag: function(i2, s2, n2) {
      V.each(n2.sortables, function() {
        var t2 = false, e2 = this;
        e2.positionAbs = n2.positionAbs, e2.helperProportions = n2.helperProportions, e2.offset.click = n2.offset.click, e2._intersectsWith(e2.containerCache) && (t2 = true, V.each(n2.sortables, function() {
          return this.positionAbs = n2.positionAbs, this.helperProportions = n2.helperProportions, this.offset.click = n2.offset.click, t2 = this !== e2 && this._intersectsWith(this.containerCache) && V.contains(e2.element[0], this.element[0]) ? false : t2;
        })), t2 ? (e2.isOver || (e2.isOver = 1, n2._parent = s2.helper.parent(), e2.currentItem = s2.helper.appendTo(e2.element).data("ui-sortable-item", true), e2.options._helper = e2.options.helper, e2.options.helper = function() {
          return s2.helper[0];
        }, i2.target = e2.currentItem[0], e2._mouseCapture(i2, true), e2._mouseStart(i2, true, true), e2.offset.click.top = n2.offset.click.top, e2.offset.click.left = n2.offset.click.left, e2.offset.parent.left -= n2.offset.parent.left - e2.offset.parent.left, e2.offset.parent.top -= n2.offset.parent.top - e2.offset.parent.top, n2._trigger("toSortable", i2), n2.dropped = e2.element, V.each(n2.sortables, function() {
          this.refreshPositions();
        }), n2.currentItem = n2.element, e2.fromOutside = n2), e2.currentItem && (e2._mouseDrag(i2), s2.position = e2.position)) : e2.isOver && (e2.isOver = 0, e2.cancelHelperRemoval = true, e2.options._revert = e2.options.revert, e2.options.revert = false, e2._trigger("out", i2, e2._uiHash(e2)), e2._mouseStop(i2, true), e2.options.revert = e2.options._revert, e2.options.helper = e2.options._helper, e2.placeholder && e2.placeholder.remove(), s2.helper.appendTo(n2._parent), n2._refreshOffsets(i2), s2.position = n2._generatePosition(i2, true), n2._trigger("fromSortable", i2), n2.dropped = false, V.each(n2.sortables, function() {
          this.refreshPositions();
        }));
      });
    } }), V.ui.plugin.add("draggable", "cursor", { start: function(t2, e2, i2) {
      var s2 = V("body"), i2 = i2.options;
      s2.css("cursor") && (i2._cursor = s2.css("cursor")), s2.css("cursor", i2.cursor);
    }, stop: function(t2, e2, i2) {
      i2 = i2.options;
      i2._cursor && V("body").css("cursor", i2._cursor);
    } }), V.ui.plugin.add("draggable", "opacity", { start: function(t2, e2, i2) {
      e2 = V(e2.helper), i2 = i2.options;
      e2.css("opacity") && (i2._opacity = e2.css("opacity")), e2.css("opacity", i2.opacity);
    }, stop: function(t2, e2, i2) {
      i2 = i2.options;
      i2._opacity && V(e2.helper).css("opacity", i2._opacity);
    } }), V.ui.plugin.add("draggable", "scroll", { start: function(t2, e2, i2) {
      i2.scrollParentNotHidden || (i2.scrollParentNotHidden = i2.helper.scrollParent(false)), i2.scrollParentNotHidden[0] !== i2.document[0] && "HTML" !== i2.scrollParentNotHidden[0].tagName && (i2.overflowOffset = i2.scrollParentNotHidden.offset());
    }, drag: function(t2, e2, i2) {
      var s2 = i2.options, n2 = false, o2 = i2.scrollParentNotHidden[0], a2 = i2.document[0];
      o2 !== a2 && "HTML" !== o2.tagName ? (s2.axis && "x" === s2.axis || (i2.overflowOffset.top + o2.offsetHeight - t2.pageY < s2.scrollSensitivity ? o2.scrollTop = n2 = o2.scrollTop + s2.scrollSpeed : t2.pageY - i2.overflowOffset.top < s2.scrollSensitivity && (o2.scrollTop = n2 = o2.scrollTop - s2.scrollSpeed)), s2.axis && "y" === s2.axis || (i2.overflowOffset.left + o2.offsetWidth - t2.pageX < s2.scrollSensitivity ? o2.scrollLeft = n2 = o2.scrollLeft + s2.scrollSpeed : t2.pageX - i2.overflowOffset.left < s2.scrollSensitivity && (o2.scrollLeft = n2 = o2.scrollLeft - s2.scrollSpeed))) : (s2.axis && "x" === s2.axis || (t2.pageY - V(a2).scrollTop() < s2.scrollSensitivity ? n2 = V(a2).scrollTop(V(a2).scrollTop() - s2.scrollSpeed) : V(window).height() - (t2.pageY - V(a2).scrollTop()) < s2.scrollSensitivity && (n2 = V(a2).scrollTop(V(a2).scrollTop() + s2.scrollSpeed))), s2.axis && "y" === s2.axis || (t2.pageX - V(a2).scrollLeft() < s2.scrollSensitivity ? n2 = V(a2).scrollLeft(V(a2).scrollLeft() - s2.scrollSpeed) : V(window).width() - (t2.pageX - V(a2).scrollLeft()) < s2.scrollSensitivity && (n2 = V(a2).scrollLeft(V(a2).scrollLeft() + s2.scrollSpeed)))), false !== n2 && V.ui.ddmanager && !s2.dropBehaviour && V.ui.ddmanager.prepareOffsets(i2, t2);
    } }), V.ui.plugin.add("draggable", "snap", { start: function(t2, e2, i2) {
      var s2 = i2.options;
      i2.snapElements = [], V(s2.snap.constructor !== String ? s2.snap.items || ":data(ui-draggable)" : s2.snap).each(function() {
        var t3 = V(this), e3 = t3.offset();
        this !== i2.element[0] && i2.snapElements.push({ item: this, width: t3.outerWidth(), height: t3.outerHeight(), top: e3.top, left: e3.left });
      });
    }, drag: function(t2, e2, i2) {
      for (var s2, n2, o2, a2, r2, l2, h2, c2, u2, d2 = i2.options, p2 = d2.snapTolerance, f2 = e2.offset.left, g2 = f2 + i2.helperProportions.width, m2 = e2.offset.top, _2 = m2 + i2.helperProportions.height, v2 = i2.snapElements.length - 1; 0 <= v2; v2--) l2 = (r2 = i2.snapElements[v2].left - i2.margins.left) + i2.snapElements[v2].width, c2 = (h2 = i2.snapElements[v2].top - i2.margins.top) + i2.snapElements[v2].height, g2 < r2 - p2 || l2 + p2 < f2 || _2 < h2 - p2 || c2 + p2 < m2 || !V.contains(i2.snapElements[v2].item.ownerDocument, i2.snapElements[v2].item) ? (i2.snapElements[v2].snapping && i2.options.snap.release && i2.options.snap.release.call(i2.element, t2, V.extend(i2._uiHash(), { snapItem: i2.snapElements[v2].item })), i2.snapElements[v2].snapping = false) : ("inner" !== d2.snapMode && (s2 = Math.abs(h2 - _2) <= p2, n2 = Math.abs(c2 - m2) <= p2, o2 = Math.abs(r2 - g2) <= p2, a2 = Math.abs(l2 - f2) <= p2, s2 && (e2.position.top = i2._convertPositionTo("relative", { top: h2 - i2.helperProportions.height, left: 0 }).top), n2 && (e2.position.top = i2._convertPositionTo("relative", { top: c2, left: 0 }).top), o2 && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: r2 - i2.helperProportions.width }).left), a2) && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: l2 }).left), u2 = s2 || n2 || o2 || a2, "outer" !== d2.snapMode && (s2 = Math.abs(h2 - m2) <= p2, n2 = Math.abs(c2 - _2) <= p2, o2 = Math.abs(r2 - f2) <= p2, a2 = Math.abs(l2 - g2) <= p2, s2 && (e2.position.top = i2._convertPositionTo("relative", { top: h2, left: 0 }).top), n2 && (e2.position.top = i2._convertPositionTo("relative", { top: c2 - i2.helperProportions.height, left: 0 }).top), o2 && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: r2 }).left), a2) && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: l2 - i2.helperProportions.width }).left), !i2.snapElements[v2].snapping && (s2 || n2 || o2 || a2 || u2) && i2.options.snap.snap && i2.options.snap.snap.call(i2.element, t2, V.extend(i2._uiHash(), { snapItem: i2.snapElements[v2].item })), i2.snapElements[v2].snapping = s2 || n2 || o2 || a2 || u2);
    } }), V.ui.plugin.add("draggable", "stack", { start: function(t2, e2, i2) {
      var s2, i2 = i2.options, i2 = V.makeArray(V(i2.stack)).sort(function(t3, e3) {
        return (parseInt(V(t3).css("zIndex"), 10) || 0) - (parseInt(V(e3).css("zIndex"), 10) || 0);
      });
      i2.length && (s2 = parseInt(V(i2[0]).css("zIndex"), 10) || 0, V(i2).each(function(t3) {
        V(this).css("zIndex", s2 + t3);
      }), this.css("zIndex", s2 + i2.length));
    } }), V.ui.plugin.add("draggable", "zIndex", { start: function(t2, e2, i2) {
      e2 = V(e2.helper), i2 = i2.options;
      e2.css("zIndex") && (i2._zIndex = e2.css("zIndex")), e2.css("zIndex", i2.zIndex);
    }, stop: function(t2, e2, i2) {
      i2 = i2.options;
      i2._zIndex && V(e2.helper).css("zIndex", i2._zIndex);
    } }), V.ui.draggable;
    function Y(t2, e2, i2) {
      return e2 <= t2 && t2 < e2 + i2;
    }
    V.widget("ui.droppable", { version: "1.13.3", widgetEventPrefix: "drop", options: { accept: "*", addClasses: true, greedy: false, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() {
      var t2, e2 = this.options, i2 = e2.accept;
      this.isover = false, this.isout = true, this.accept = "function" == typeof i2 ? i2 : function(t3) {
        return t3.is(i2);
      }, this.proportions = function() {
        if (!arguments.length) return t2 = t2 || { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };
        t2 = arguments[0];
      }, this._addToManager(e2.scope), e2.addClasses && this._addClass("ui-droppable");
    }, _addToManager: function(t2) {
      V.ui.ddmanager.droppables[t2] = V.ui.ddmanager.droppables[t2] || [], V.ui.ddmanager.droppables[t2].push(this);
    }, _splice: function(t2) {
      for (var e2 = 0; e2 < t2.length; e2++) t2[e2] === this && t2.splice(e2, 1);
    }, _destroy: function() {
      var t2 = V.ui.ddmanager.droppables[this.options.scope];
      this._splice(t2);
    }, _setOption: function(t2, e2) {
      var i2;
      "accept" === t2 ? this.accept = "function" == typeof e2 ? e2 : function(t3) {
        return t3.is(e2);
      } : "scope" === t2 && (i2 = V.ui.ddmanager.droppables[this.options.scope], this._splice(i2), this._addToManager(e2)), this._super(t2, e2);
    }, _activate: function(t2) {
      var e2 = V.ui.ddmanager.current;
      this._addActiveClass(), e2 && this._trigger("activate", t2, this.ui(e2));
    }, _deactivate: function(t2) {
      var e2 = V.ui.ddmanager.current;
      this._removeActiveClass(), e2 && this._trigger("deactivate", t2, this.ui(e2));
    }, _over: function(t2) {
      var e2 = V.ui.ddmanager.current;
      e2 && (e2.currentItem || e2.element)[0] !== this.element[0] && this.accept.call(this.element[0], e2.currentItem || e2.element) && (this._addHoverClass(), this._trigger("over", t2, this.ui(e2)));
    }, _out: function(t2) {
      var e2 = V.ui.ddmanager.current;
      e2 && (e2.currentItem || e2.element)[0] !== this.element[0] && this.accept.call(this.element[0], e2.currentItem || e2.element) && (this._removeHoverClass(), this._trigger("out", t2, this.ui(e2)));
    }, _drop: function(e2, t2) {
      var i2 = t2 || V.ui.ddmanager.current, s2 = false;
      return !(!i2 || (i2.currentItem || i2.element)[0] === this.element[0] || (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
        var t3 = V(this).droppable("instance");
        if (t3.options.greedy && !t3.options.disabled && t3.options.scope === i2.options.scope && t3.accept.call(t3.element[0], i2.currentItem || i2.element) && V.ui.intersect(i2, V.extend(t3, { offset: t3.element.offset() }), t3.options.tolerance, e2)) return !(s2 = true);
      }), s2) || !this.accept.call(this.element[0], i2.currentItem || i2.element)) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e2, this.ui(i2)), this.element);
    }, ui: function(t2) {
      return { draggable: t2.currentItem || t2.element, helper: t2.helper, position: t2.position, offset: t2.positionAbs };
    }, _addHoverClass: function() {
      this._addClass("ui-droppable-hover");
    }, _removeHoverClass: function() {
      this._removeClass("ui-droppable-hover");
    }, _addActiveClass: function() {
      this._addClass("ui-droppable-active");
    }, _removeActiveClass: function() {
      this._removeClass("ui-droppable-active");
    } }), V.ui.intersect = function(t2, e2, i2, s2) {
      if (!e2.offset) return false;
      var n2 = (t2.positionAbs || t2.position.absolute).left + t2.margins.left, o2 = (t2.positionAbs || t2.position.absolute).top + t2.margins.top, a2 = n2 + t2.helperProportions.width, r2 = o2 + t2.helperProportions.height, l2 = e2.offset.left, h2 = e2.offset.top, c2 = l2 + e2.proportions().width, u2 = h2 + e2.proportions().height;
      switch (i2) {
        case "fit":
          return l2 <= n2 && a2 <= c2 && h2 <= o2 && r2 <= u2;
        case "intersect":
          return l2 < n2 + t2.helperProportions.width / 2 && a2 - t2.helperProportions.width / 2 < c2 && h2 < o2 + t2.helperProportions.height / 2 && r2 - t2.helperProportions.height / 2 < u2;
        case "pointer":
          return Y(s2.pageY, h2, e2.proportions().height) && Y(s2.pageX, l2, e2.proportions().width);
        case "touch":
          return (h2 <= o2 && o2 <= u2 || h2 <= r2 && r2 <= u2 || o2 < h2 && u2 < r2) && (l2 <= n2 && n2 <= c2 || l2 <= a2 && a2 <= c2 || n2 < l2 && c2 < a2);
        default:
          return false;
      }
    }, !(V.ui.ddmanager = { current: null, droppables: { default: [] }, prepareOffsets: function(t2, e2) {
      var i2, s2, n2 = V.ui.ddmanager.droppables[t2.options.scope] || [], o2 = e2 ? e2.type : null, a2 = (t2.currentItem || t2.element).find(":data(ui-droppable)").addBack();
      t: for (i2 = 0; i2 < n2.length; i2++) if (!(n2[i2].options.disabled || t2 && !n2[i2].accept.call(n2[i2].element[0], t2.currentItem || t2.element))) {
        for (s2 = 0; s2 < a2.length; s2++) if (a2[s2] === n2[i2].element[0]) {
          n2[i2].proportions().height = 0;
          continue t;
        }
        n2[i2].visible = "none" !== n2[i2].element.css("display"), n2[i2].visible && ("mousedown" === o2 && n2[i2]._activate.call(n2[i2], e2), n2[i2].offset = n2[i2].element.offset(), n2[i2].proportions({ width: n2[i2].element[0].offsetWidth, height: n2[i2].element[0].offsetHeight }));
      }
    }, drop: function(t2, e2) {
      var i2 = false;
      return V.each((V.ui.ddmanager.droppables[t2.options.scope] || []).slice(), function() {
        this.options && (!this.options.disabled && this.visible && V.ui.intersect(t2, this, this.options.tolerance, e2) && (i2 = this._drop.call(this, e2) || i2), !this.options.disabled) && this.visible && this.accept.call(this.element[0], t2.currentItem || t2.element) && (this.isout = true, this.isover = false, this._deactivate.call(this, e2));
      }), i2;
    }, dragStart: function(t2, e2) {
      t2.element.parentsUntil("body").on("scroll.droppable", function() {
        t2.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t2, e2);
      });
    }, drag: function(n2, o2) {
      n2.options.refreshPositions && V.ui.ddmanager.prepareOffsets(n2, o2), V.each(V.ui.ddmanager.droppables[n2.options.scope] || [], function() {
        var t2, e2, i2, s2;
        this.options.disabled || this.greedyChild || !this.visible || (s2 = !(s2 = V.ui.intersect(n2, this, this.options.tolerance, o2)) && this.isover ? "isout" : s2 && !this.isover ? "isover" : null) && (this.options.greedy && (e2 = this.options.scope, (i2 = this.element.parents(":data(ui-droppable)").filter(function() {
          return V(this).droppable("instance").options.scope === e2;
        })).length) && ((t2 = V(i2[0]).droppable("instance")).greedyChild = "isover" === s2), t2 && "isover" === s2 && (t2.isover = false, t2.isout = true, t2._out.call(t2, o2)), this[s2] = true, this["isout" === s2 ? "isover" : "isout"] = false, this["isover" === s2 ? "_over" : "_out"].call(this, o2), t2) && "isout" === s2 && (t2.isout = false, t2.isover = true, t2._over.call(t2, o2));
      });
    }, dragStop: function(t2, e2) {
      t2.element.parentsUntil("body").off("scroll.droppable"), t2.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t2, e2);
    } }) !== V.uiBackCompat && V.widget("ui.droppable", V.ui.droppable, { options: { hoverClass: false, activeClass: false }, _addActiveClass: function() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
    }, _removeActiveClass: function() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
    }, _addHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
    }, _removeHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
    } });
    V.ui.droppable, V.widget("ui.resizable", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "resize", options: { alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(t2) {
      return parseFloat(t2) || 0;
    }, _isNumber: function(t2) {
      return !isNaN(parseFloat(t2));
    }, _hasScroll: function(t2, e2) {
      if ("hidden" === V(t2).css("overflow")) return false;
      var e2 = e2 && "left" === e2 ? "scrollLeft" : "scrollTop", i2 = false;
      if (0 < t2[e2]) return true;
      try {
        t2[e2] = 1, i2 = 0 < t2[e2], t2[e2] = 0;
      } catch (t3) {
      }
      return i2;
    }, _create: function() {
      var t2, e2 = this.options, i2 = this;
      this._addClass("ui-resizable"), V.extend(this, { _aspectRatio: !!e2.aspectRatio, aspectRatio: e2.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: e2.helper || e2.ghost || e2.animate ? e2.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(V("<div class='ui-wrapper'></div>").css({ overflow: "hidden", position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = true, t2 = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(t2), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(t2), this._proportionallyResize()), this._setupHandles(), e2.autoHide && V(this.element).on("mouseenter", function() {
        e2.disabled || (i2._removeClass("ui-resizable-autohide"), i2._handles.show());
      }).on("mouseleave", function() {
        e2.disabled || i2.resizing || (i2._addClass("ui-resizable-autohide"), i2._handles.hide());
      }), this._mouseInit();
    }, _destroy: function() {
      this._mouseDestroy(), this._addedHandles.remove();
      function t2(t3) {
        V(t3).removeData("resizable").removeData("ui-resizable").off(".resizable");
      }
      var e2;
      return this.elementIsWrapper && (t2(this.element), e2 = this.element, this.originalElement.css({ position: e2.css("position"), width: e2.outerWidth(), height: e2.outerHeight(), top: e2.css("top"), left: e2.css("left") }).insertAfter(e2), e2.remove()), this.originalElement.css("resize", this.originalResizeStyle), t2(this.originalElement), this;
    }, _setOption: function(t2, e2) {
      switch (this._super(t2, e2), t2) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;
        case "aspectRatio":
          this._aspectRatio = !!e2;
      }
    }, _setupHandles: function() {
      var t2, e2, i2, s2, n2, o2 = this.options, a2 = this;
      if (this.handles = o2.handles || (V(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = V(), this._addedHandles = V(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i2 = this.handles.split(","), this.handles = {}, e2 = 0; e2 < i2.length; e2++) s2 = "ui-resizable-" + (t2 = String.prototype.trim.call(i2[e2])), n2 = V("<div>"), this._addClass(n2, "ui-resizable-handle " + s2), n2.css({ zIndex: o2.zIndex }), this.handles[t2] = ".ui-resizable-" + t2, this.element.children(this.handles[t2]).length || (this.element.append(n2), this._addedHandles = this._addedHandles.add(n2));
      this._renderAxis = function(t3) {
        var e3, i3, s3;
        for (e3 in t3 = t3 || this.element, this.handles) this.handles[e3].constructor === String ? this.handles[e3] = this.element.children(this.handles[e3]).first().show() : (this.handles[e3].jquery || this.handles[e3].nodeType) && (this.handles[e3] = V(this.handles[e3]), this._on(this.handles[e3], { mousedown: a2._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s3 = V(this.handles[e3], this.element), s3 = /sw|ne|nw|se|n|s/.test(e3) ? s3.outerHeight() : s3.outerWidth(), i3 = ["padding", /ne|nw|n/.test(e3) ? "Top" : /se|sw|s/.test(e3) ? "Bottom" : /^e$/.test(e3) ? "Right" : "Left"].join(""), t3.css(i3, s3), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e3]);
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
        a2.resizing || (this.className && (n2 = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a2.axis = n2 && n2[1] ? n2[1] : "se");
      }), o2.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    }, _removeHandles: function() {
      this._addedHandles.remove();
    }, _mouseCapture: function(t2) {
      var e2, i2, s2 = false;
      for (e2 in this.handles) (i2 = V(this.handles[e2])[0]) !== t2.target && !V.contains(i2, t2.target) || (s2 = true);
      return !this.options.disabled && s2;
    }, _mouseStart: function(t2) {
      var e2, i2, s2 = this.options, n2 = this.element;
      return this.resizing = true, this._renderProxy(), e2 = this._num(this.helper.css("left")), i2 = this._num(this.helper.css("top")), s2.containment && (e2 += V(s2.containment).scrollLeft() || 0, i2 += V(s2.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: e2, top: i2 }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: n2.width(), height: n2.height() }, this.originalSize = this._helper ? { width: n2.outerWidth(), height: n2.outerHeight() } : { width: n2.width(), height: n2.height() }, this.sizeDiff = { width: n2.outerWidth() - n2.width(), height: n2.outerHeight() - n2.height() }, this.originalPosition = { left: e2, top: i2 }, this.originalMousePosition = { left: t2.pageX, top: t2.pageY }, this.aspectRatio = "number" == typeof s2.aspectRatio ? s2.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n2 = V(".ui-resizable-" + this.axis).css("cursor"), V("body").css("cursor", "auto" === n2 ? this.axis + "-resize" : n2), this._addClass("ui-resizable-resizing"), this._propagate("start", t2), true;
    }, _mouseDrag: function(t2) {
      var e2 = this.originalMousePosition, i2 = this.axis, s2 = t2.pageX - e2.left || 0, e2 = t2.pageY - e2.top || 0, i2 = this._change[i2];
      return this._updatePrevProperties(), i2 && (i2 = i2.apply(this, [t2, s2, e2]), this._updateVirtualBoundaries(t2.shiftKey), (this._aspectRatio || t2.shiftKey) && (i2 = this._updateRatio(i2, t2)), i2 = this._respectSize(i2, t2), this._updateCache(i2), this._propagate("resize", t2), s2 = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), V.isEmptyObject(s2) || (this._updatePrevProperties(), this._trigger("resize", t2, this.ui()), this._applyChanges())), false;
    }, _mouseStop: function(t2) {
      this.resizing = false;
      var e2, i2, s2, n2 = this.options, o2 = this;
      return this._helper && (i2 = (e2 = (i2 = this._proportionallyResizeElements).length && /textarea/i.test(i2[0].nodeName)) && this._hasScroll(i2[0], "left") ? 0 : o2.sizeDiff.height, e2 = e2 ? 0 : o2.sizeDiff.width, e2 = { width: o2.helper.width() - e2, height: o2.helper.height() - i2 }, i2 = parseFloat(o2.element.css("left")) + (o2.position.left - o2.originalPosition.left) || null, s2 = parseFloat(o2.element.css("top")) + (o2.position.top - o2.originalPosition.top) || null, n2.animate || this.element.css(V.extend(e2, { top: s2, left: i2 })), o2.helper.height(o2.size.height), o2.helper.width(o2.size.width), this._helper) && !n2.animate && this._proportionallyResize(), V("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t2), this._helper && this.helper.remove(), false;
    }, _updatePrevProperties: function() {
      this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height };
    }, _applyChanges: function() {
      var t2 = {};
      return this.position.top !== this.prevPosition.top && (t2.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t2.left = this.position.left + "px"), this.helper.css(t2), this.size.width !== this.prevSize.width && (t2.width = this.size.width + "px", this.helper.width(t2.width)), this.size.height !== this.prevSize.height && (t2.height = this.size.height + "px", this.helper.height(t2.height)), t2;
    }, _updateVirtualBoundaries: function(t2) {
      var e2, i2, s2, n2 = this.options, n2 = { minWidth: this._isNumber(n2.minWidth) ? n2.minWidth : 0, maxWidth: this._isNumber(n2.maxWidth) ? n2.maxWidth : 1 / 0, minHeight: this._isNumber(n2.minHeight) ? n2.minHeight : 0, maxHeight: this._isNumber(n2.maxHeight) ? n2.maxHeight : 1 / 0 };
      (this._aspectRatio || t2) && (t2 = n2.minHeight * this.aspectRatio, i2 = n2.minWidth / this.aspectRatio, e2 = n2.maxHeight * this.aspectRatio, s2 = n2.maxWidth / this.aspectRatio, n2.minWidth < t2 && (n2.minWidth = t2), n2.minHeight < i2 && (n2.minHeight = i2), e2 < n2.maxWidth && (n2.maxWidth = e2), s2 < n2.maxHeight) && (n2.maxHeight = s2), this._vBoundaries = n2;
    }, _updateCache: function(t2) {
      this.offset = this.helper.offset(), this._isNumber(t2.left) && (this.position.left = t2.left), this._isNumber(t2.top) && (this.position.top = t2.top), this._isNumber(t2.height) && (this.size.height = t2.height), this._isNumber(t2.width) && (this.size.width = t2.width);
    }, _updateRatio: function(t2) {
      var e2 = this.position, i2 = this.size, s2 = this.axis;
      return this._isNumber(t2.height) ? t2.width = t2.height * this.aspectRatio : this._isNumber(t2.width) && (t2.height = t2.width / this.aspectRatio), "sw" === s2 && (t2.left = e2.left + (i2.width - t2.width), t2.top = null), "nw" === s2 && (t2.top = e2.top + (i2.height - t2.height), t2.left = e2.left + (i2.width - t2.width)), t2;
    }, _respectSize: function(t2) {
      var e2 = this._vBoundaries, i2 = this.axis, s2 = this._isNumber(t2.width) && e2.maxWidth && e2.maxWidth < t2.width, n2 = this._isNumber(t2.height) && e2.maxHeight && e2.maxHeight < t2.height, o2 = this._isNumber(t2.width) && e2.minWidth && e2.minWidth > t2.width, a2 = this._isNumber(t2.height) && e2.minHeight && e2.minHeight > t2.height, r2 = this.originalPosition.left + this.originalSize.width, l2 = this.originalPosition.top + this.originalSize.height, h2 = /sw|nw|w/.test(i2), i2 = /nw|ne|n/.test(i2);
      return o2 && (t2.width = e2.minWidth), a2 && (t2.height = e2.minHeight), s2 && (t2.width = e2.maxWidth), n2 && (t2.height = e2.maxHeight), o2 && h2 && (t2.left = r2 - e2.minWidth), s2 && h2 && (t2.left = r2 - e2.maxWidth), a2 && i2 && (t2.top = l2 - e2.minHeight), n2 && i2 && (t2.top = l2 - e2.maxHeight), t2.width || t2.height || t2.left || !t2.top ? t2.width || t2.height || t2.top || !t2.left || (t2.left = null) : t2.top = null, t2;
    }, _getPaddingPlusBorderDimensions: function(t2) {
      for (var e2 = 0, i2 = [], s2 = [t2.css("borderTopWidth"), t2.css("borderRightWidth"), t2.css("borderBottomWidth"), t2.css("borderLeftWidth")], n2 = [t2.css("paddingTop"), t2.css("paddingRight"), t2.css("paddingBottom"), t2.css("paddingLeft")]; e2 < 4; e2++) i2[e2] = parseFloat(s2[e2]) || 0, i2[e2] += parseFloat(n2[e2]) || 0;
      return { height: i2[0] + i2[2], width: i2[1] + i2[3] };
    }, _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length) for (var t2, e2 = 0, i2 = this.helper || this.element; e2 < this._proportionallyResizeElements.length; e2++) t2 = this._proportionallyResizeElements[e2], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t2)), t2.css({ height: i2.height() - this.outerDimensions.height || 0, width: i2.width() - this.outerDimensions.width || 0 });
    }, _renderProxy: function() {
      var t2 = this.element, e2 = this.options;
      this.elementOffset = t2.offset(), this._helper ? (this.helper = this.helper || V("<div></div>").css({ overflow: "hidden" }), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++e2.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: { e: function(t2, e2) {
      return { width: this.originalSize.width + e2 };
    }, w: function(t2, e2) {
      var i2 = this.originalSize;
      return { left: this.originalPosition.left + e2, width: i2.width - e2 };
    }, n: function(t2, e2, i2) {
      var s2 = this.originalSize;
      return { top: this.originalPosition.top + i2, height: s2.height - i2 };
    }, s: function(t2, e2, i2) {
      return { height: this.originalSize.height + i2 };
    }, se: function(t2, e2, i2) {
      return V.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t2, e2, i2]));
    }, sw: function(t2, e2, i2) {
      return V.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t2, e2, i2]));
    }, ne: function(t2, e2, i2) {
      return V.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t2, e2, i2]));
    }, nw: function(t2, e2, i2) {
      return V.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t2, e2, i2]));
    } }, _propagate: function(t2, e2) {
      V.ui.plugin.call(this, t2, [e2, this.ui()]), "resize" !== t2 && this._trigger(t2, e2, this.ui());
    }, plugins: {}, ui: function() {
      return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
    } }), V.ui.plugin.add("resizable", "animate", { stop: function(e2) {
      var i2 = V(this).resizable("instance"), t2 = i2.options, s2 = i2._proportionallyResizeElements, n2 = s2.length && /textarea/i.test(s2[0].nodeName), o2 = n2 && i2._hasScroll(s2[0], "left") ? 0 : i2.sizeDiff.height, n2 = n2 ? 0 : i2.sizeDiff.width, n2 = { width: i2.size.width - n2, height: i2.size.height - o2 }, o2 = parseFloat(i2.element.css("left")) + (i2.position.left - i2.originalPosition.left) || null, a2 = parseFloat(i2.element.css("top")) + (i2.position.top - i2.originalPosition.top) || null;
      i2.element.animate(V.extend(n2, a2 && o2 ? { top: a2, left: o2 } : {}), { duration: t2.animateDuration, easing: t2.animateEasing, step: function() {
        var t3 = { width: parseFloat(i2.element.css("width")), height: parseFloat(i2.element.css("height")), top: parseFloat(i2.element.css("top")), left: parseFloat(i2.element.css("left")) };
        s2 && s2.length && V(s2[0]).css({ width: t3.width, height: t3.height }), i2._updateCache(t3), i2._propagate("resize", e2);
      } });
    } }), V.ui.plugin.add("resizable", "containment", { start: function() {
      var i2, s2, t2, e2, n2 = V(this).resizable("instance"), o2 = n2.options, a2 = n2.element, o2 = o2.containment, a2 = o2 instanceof V ? o2.get(0) : /parent/.test(o2) ? a2.parent().get(0) : o2;
      a2 && (n2.containerElement = V(a2), /document/.test(o2) || o2 === document ? (n2.containerOffset = { left: 0, top: 0 }, n2.containerPosition = { left: 0, top: 0 }, n2.parentData = { element: V(document), left: 0, top: 0, width: V(document).width(), height: V(document).height() || document.body.parentNode.scrollHeight }) : (i2 = V(a2), s2 = [], V(["Top", "Right", "Left", "Bottom"]).each(function(t3, e3) {
        s2[t3] = n2._num(i2.css("padding" + e3));
      }), n2.containerOffset = i2.offset(), n2.containerPosition = i2.position(), n2.containerSize = { height: i2.innerHeight() - s2[3], width: i2.innerWidth() - s2[1] }, o2 = n2.containerOffset, e2 = n2.containerSize.height, t2 = n2.containerSize.width, t2 = n2._hasScroll(a2, "left") ? a2.scrollWidth : t2, e2 = n2._hasScroll(a2) ? a2.scrollHeight : e2, n2.parentData = { element: a2, left: o2.left, top: o2.top, width: t2, height: e2 }));
    }, resize: function(t2) {
      var e2 = V(this).resizable("instance"), i2 = e2.options, s2 = e2.containerOffset, n2 = e2.position, t2 = e2._aspectRatio || t2.shiftKey, o2 = { top: 0, left: 0 }, a2 = e2.containerElement, r2 = true;
      a2[0] !== document && /static/.test(a2.css("position")) && (o2 = s2), n2.left < (e2._helper ? s2.left : 0) && (e2.size.width = e2.size.width + (e2._helper ? e2.position.left - s2.left : e2.position.left - o2.left), t2 && (e2.size.height = e2.size.width / e2.aspectRatio, r2 = false), e2.position.left = i2.helper ? s2.left : 0), n2.top < (e2._helper ? s2.top : 0) && (e2.size.height = e2.size.height + (e2._helper ? e2.position.top - s2.top : e2.position.top), t2 && (e2.size.width = e2.size.height * e2.aspectRatio, r2 = false), e2.position.top = e2._helper ? s2.top : 0), a2 = e2.containerElement.get(0) === e2.element.parent().get(0), i2 = /relative|absolute/.test(e2.containerElement.css("position")), a2 && i2 ? (e2.offset.left = e2.parentData.left + e2.position.left, e2.offset.top = e2.parentData.top + e2.position.top) : (e2.offset.left = e2.element.offset().left, e2.offset.top = e2.element.offset().top), n2 = Math.abs(e2.sizeDiff.width + (e2._helper ? e2.offset.left - o2.left : e2.offset.left - s2.left)), a2 = Math.abs(e2.sizeDiff.height + (e2._helper ? e2.offset.top - o2.top : e2.offset.top - s2.top)), n2 + e2.size.width >= e2.parentData.width && (e2.size.width = e2.parentData.width - n2, t2) && (e2.size.height = e2.size.width / e2.aspectRatio, r2 = false), a2 + e2.size.height >= e2.parentData.height && (e2.size.height = e2.parentData.height - a2, t2) && (e2.size.width = e2.size.height * e2.aspectRatio, r2 = false), r2 || (e2.position.left = e2.prevPosition.left, e2.position.top = e2.prevPosition.top, e2.size.width = e2.prevSize.width, e2.size.height = e2.prevSize.height);
    }, stop: function() {
      var t2 = V(this).resizable("instance"), e2 = t2.options, i2 = t2.containerOffset, s2 = t2.containerPosition, n2 = t2.containerElement, o2 = V(t2.helper), a2 = o2.offset(), r2 = o2.outerWidth() - t2.sizeDiff.width, o2 = o2.outerHeight() - t2.sizeDiff.height;
      t2._helper && !e2.animate && /relative/.test(n2.css("position")) && V(this).css({ left: a2.left - s2.left - i2.left, width: r2, height: o2 }), t2._helper && !e2.animate && /static/.test(n2.css("position")) && V(this).css({ left: a2.left - s2.left - i2.left, width: r2, height: o2 });
    } }), V.ui.plugin.add("resizable", "alsoResize", { start: function() {
      var t2 = V(this).resizable("instance").options;
      V(t2.alsoResize).each(function() {
        var t3 = V(this);
        t3.data("ui-resizable-alsoresize", { width: parseFloat(t3.css("width")), height: parseFloat(t3.css("height")), left: parseFloat(t3.css("left")), top: parseFloat(t3.css("top")) });
      });
    }, resize: function(t2, i2) {
      var e2 = V(this).resizable("instance"), s2 = e2.options, n2 = e2.originalSize, o2 = e2.originalPosition, a2 = { height: e2.size.height - n2.height || 0, width: e2.size.width - n2.width || 0, top: e2.position.top - o2.top || 0, left: e2.position.left - o2.left || 0 };
      V(s2.alsoResize).each(function() {
        var t3 = V(this), s3 = V(this).data("ui-resizable-alsoresize"), n3 = {}, e3 = t3.parents(i2.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        V.each(e3, function(t4, e4) {
          var i3 = (s3[e4] || 0) + (a2[e4] || 0);
          i3 && 0 <= i3 && (n3[e4] = i3 || null);
        }), t3.css(n3);
      });
    }, stop: function() {
      V(this).removeData("ui-resizable-alsoresize");
    } }), V.ui.plugin.add("resizable", "ghost", { start: function() {
      var t2 = V(this).resizable("instance"), e2 = t2.size;
      t2.ghost = t2.originalElement.clone(), t2.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: e2.height, width: e2.width, margin: 0, left: 0, top: 0 }), t2._addClass(t2.ghost, "ui-resizable-ghost"), false !== V.uiBackCompat && "string" == typeof t2.options.ghost && t2.ghost.addClass(this.options.ghost), t2.ghost.appendTo(t2.helper);
    }, resize: function() {
      var t2 = V(this).resizable("instance");
      t2.ghost && t2.ghost.css({ position: "relative", height: t2.size.height, width: t2.size.width });
    }, stop: function() {
      var t2 = V(this).resizable("instance");
      t2.ghost && t2.helper && t2.helper.get(0).removeChild(t2.ghost.get(0));
    } }), V.ui.plugin.add("resizable", "grid", { resize: function() {
      var t2, e2 = V(this).resizable("instance"), i2 = e2.options, s2 = e2.size, n2 = e2.originalSize, o2 = e2.originalPosition, a2 = e2.axis, r2 = "number" == typeof i2.grid ? [i2.grid, i2.grid] : i2.grid, l2 = r2[0] || 1, h2 = r2[1] || 1, c2 = Math.round((s2.width - n2.width) / l2) * l2, s2 = Math.round((s2.height - n2.height) / h2) * h2, u2 = n2.width + c2, d2 = n2.height + s2, p2 = i2.maxWidth && i2.maxWidth < u2, f2 = i2.maxHeight && i2.maxHeight < d2, g2 = i2.minWidth && i2.minWidth > u2, m2 = i2.minHeight && i2.minHeight > d2;
      i2.grid = r2, g2 && (u2 += l2), m2 && (d2 += h2), p2 && (u2 -= l2), f2 && (d2 -= h2), /^(se|s|e)$/.test(a2) ? (e2.size.width = u2, e2.size.height = d2) : /^(ne)$/.test(a2) ? (e2.size.width = u2, e2.size.height = d2, e2.position.top = o2.top - s2) : /^(sw)$/.test(a2) ? (e2.size.width = u2, e2.size.height = d2, e2.position.left = o2.left - c2) : ((d2 - h2 <= 0 || u2 - l2 <= 0) && (t2 = e2._getPaddingPlusBorderDimensions(this)), 0 < d2 - h2 ? (e2.size.height = d2, e2.position.top = o2.top - s2) : (d2 = h2 - t2.height, e2.size.height = d2, e2.position.top = o2.top + n2.height - d2), 0 < u2 - l2 ? (e2.size.width = u2, e2.position.left = o2.left - c2) : (u2 = l2 - t2.width, e2.size.width = u2, e2.position.left = o2.left + n2.width - u2));
    } }), V.ui.resizable, V.widget("ui.selectable", V.ui.mouse, { version: "1.13.3", options: { appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() {
      var i2 = this;
      this._addClass("ui-selectable"), this.dragged = false, this.refresh = function() {
        i2.elementPos = V(i2.element[0]).offset(), i2.selectees = V(i2.options.filter, i2.element[0]), i2._addClass(i2.selectees, "ui-selectee"), i2.selectees.each(function() {
          var t2 = V(this), e2 = t2.offset(), e2 = { left: e2.left - i2.elementPos.left, top: e2.top - i2.elementPos.top };
          V.data(this, "selectable-item", { element: this, $element: t2, left: e2.left, top: e2.top, right: e2.left + t2.outerWidth(), bottom: e2.top + t2.outerHeight(), startselected: false, selected: t2.hasClass("ui-selected"), selecting: t2.hasClass("ui-selecting"), unselecting: t2.hasClass("ui-unselecting") });
        });
      }, this.refresh(), this._mouseInit(), this.helper = V("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    }, _destroy: function() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    }, _mouseStart: function(i2) {
      var s2 = this, t2 = this.options;
      this.opos = [i2.pageX, i2.pageY], this.elementPos = V(this.element[0]).offset(), this.options.disabled || (this.selectees = V(t2.filter, this.element[0]), this._trigger("start", i2), V(t2.appendTo).append(this.helper), this.helper.css({ left: i2.pageX, top: i2.pageY, width: 0, height: 0 }), t2.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
        var t3 = V.data(this, "selectable-item");
        t3.startselected = true, i2.metaKey || i2.ctrlKey || (s2._removeClass(t3.$element, "ui-selected"), t3.selected = false, s2._addClass(t3.$element, "ui-unselecting"), t3.unselecting = true, s2._trigger("unselecting", i2, { unselecting: t3.element }));
      }), V(i2.target).parents().addBack().each(function() {
        var t3, e2 = V.data(this, "selectable-item");
        if (e2) return t3 = !i2.metaKey && !i2.ctrlKey || !e2.$element.hasClass("ui-selected"), s2._removeClass(e2.$element, t3 ? "ui-unselecting" : "ui-selected")._addClass(e2.$element, t3 ? "ui-selecting" : "ui-unselecting"), e2.unselecting = !t3, e2.selecting = t3, (e2.selected = t3) ? s2._trigger("selecting", i2, { selecting: e2.element }) : s2._trigger("unselecting", i2, { unselecting: e2.element }), false;
      }));
    }, _mouseDrag: function(s2) {
      var t2, n2, o2, a2, r2, l2, h2;
      if (this.dragged = true, !this.options.disabled) return o2 = (n2 = this).options, a2 = this.opos[0], r2 = this.opos[1], l2 = s2.pageX, h2 = s2.pageY, l2 < a2 && (t2 = l2, l2 = a2, a2 = t2), h2 < r2 && (t2 = h2, h2 = r2, r2 = t2), this.helper.css({ left: a2, top: r2, width: l2 - a2, height: h2 - r2 }), this.selectees.each(function() {
        var t3 = V.data(this, "selectable-item"), e2 = false, i2 = {};
        t3 && t3.element !== n2.element[0] && (i2.left = t3.left + n2.elementPos.left, i2.right = t3.right + n2.elementPos.left, i2.top = t3.top + n2.elementPos.top, i2.bottom = t3.bottom + n2.elementPos.top, "touch" === o2.tolerance ? e2 = !(l2 < i2.left || i2.right < a2 || h2 < i2.top || i2.bottom < r2) : "fit" === o2.tolerance && (e2 = a2 < i2.left && i2.right < l2 && r2 < i2.top && i2.bottom < h2), e2 ? (t3.selected && (n2._removeClass(t3.$element, "ui-selected"), t3.selected = false), t3.unselecting && (n2._removeClass(t3.$element, "ui-unselecting"), t3.unselecting = false), t3.selecting || (n2._addClass(t3.$element, "ui-selecting"), t3.selecting = true, n2._trigger("selecting", s2, { selecting: t3.element }))) : (t3.selecting && ((s2.metaKey || s2.ctrlKey) && t3.startselected ? (n2._removeClass(t3.$element, "ui-selecting"), t3.selecting = false, n2._addClass(t3.$element, "ui-selected"), t3.selected = true) : (n2._removeClass(t3.$element, "ui-selecting"), t3.selecting = false, t3.startselected && (n2._addClass(t3.$element, "ui-unselecting"), t3.unselecting = true), n2._trigger("unselecting", s2, { unselecting: t3.element }))), !t3.selected || s2.metaKey || s2.ctrlKey || t3.startselected || (n2._removeClass(t3.$element, "ui-selected"), t3.selected = false, n2._addClass(t3.$element, "ui-unselecting"), t3.unselecting = true, n2._trigger("unselecting", s2, { unselecting: t3.element }))));
      }), false;
    }, _mouseStop: function(e2) {
      var i2 = this;
      return this.dragged = false, V(".ui-unselecting", this.element[0]).each(function() {
        var t2 = V.data(this, "selectable-item");
        i2._removeClass(t2.$element, "ui-unselecting"), t2.unselecting = false, t2.startselected = false, i2._trigger("unselected", e2, { unselected: t2.element });
      }), V(".ui-selecting", this.element[0]).each(function() {
        var t2 = V.data(this, "selectable-item");
        i2._removeClass(t2.$element, "ui-selecting")._addClass(t2.$element, "ui-selected"), t2.selecting = false, t2.selected = true, t2.startselected = true, i2._trigger("selected", e2, { selected: t2.element });
      }), this._trigger("stop", e2), this.helper.remove(), false;
    } }), V.widget("ui.sortable", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "sort", ready: false, options: { appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(t2, e2, i2) {
      return e2 <= t2 && t2 < e2 + i2;
    }, _isFloating: function(t2) {
      return /left|right/.test(t2.css("float")) || /inline|table-cell/.test(t2.css("display"));
    }, _create: function() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = true;
    }, _setOption: function(t2, e2) {
      this._super(t2, e2), "handle" === t2 && this._setHandleClassName();
    }, _setHandleClassName: function() {
      var t2 = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), V.each(this.items, function() {
        t2._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    }, _destroy: function() {
      this._mouseDestroy();
      for (var t2 = this.items.length - 1; 0 <= t2; t2--) this.items[t2].item.removeData(this.widgetName + "-item");
      return this;
    }, _mouseCapture: function(t2, e2) {
      var i2 = null, s2 = false, n2 = this;
      return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(t2), V(t2.target).parents().each(function() {
        if (V.data(this, n2.widgetName + "-item") === n2) return i2 = V(this), false;
      }), !(i2 = V.data(t2.target, n2.widgetName + "-item") === n2 ? V(t2.target) : i2)) || (this.options.handle && !e2 && (V(this.options.handle, i2).find("*").addBack().each(function() {
        this === t2.target && (s2 = true);
      }), !s2) || (this.currentItem = i2, this._removeCurrentsFromItems(), 0)));
    }, _mouseStart: function(t2, e2, i2) {
      var s2, n2, o2 = this.options;
      if ((this.currentContainer = this).refreshPositions(), this.appendTo = V("parent" !== o2.appendTo ? o2.appendTo : this.currentItem.parent()), this.helper = this._createHelper(t2), this._cacheHelperProportions(), this._cacheMargins(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, V.extend(this.offset, { click: { left: t2.pageX - this.offset.left, top: t2.pageY - this.offset.top }, relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), o2.cursorAt && this._adjustOffsetFromHelper(o2.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), this.scrollParent = this.placeholder.scrollParent(), V.extend(this.offset, { parent: this._getParentOffset() }), o2.containment && this._setContainment(), o2.cursor && "auto" !== o2.cursor && (n2 = this.document.find("body"), this.storedCursor = n2.css("cursor"), n2.css("cursor", o2.cursor), this.storedStylesheet = V("<style>*{ cursor: " + o2.cursor + " !important; }</style>").appendTo(n2)), o2.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o2.zIndex)), o2.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o2.opacity)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t2, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i2) for (s2 = this.containers.length - 1; 0 <= s2; s2--) this.containers[s2]._trigger("activate", t2, this._uiHash(this));
      return V.ui.ddmanager && (V.ui.ddmanager.current = this), V.ui.ddmanager && !o2.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t2), this.dragging = true, this._addClass(this.helper, "ui-sortable-helper"), this.helper.parent().is(this.appendTo) || (this.helper.detach().appendTo(this.appendTo), this.offset.parent = this._getParentOffset()), this.position = this.originalPosition = this._generatePosition(t2), this.originalPageX = t2.pageX, this.originalPageY = t2.pageY, this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute"), this._mouseDrag(t2), true;
    }, _scroll: function(t2) {
      var e2 = this.options, i2 = false;
      return this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t2.pageY < e2.scrollSensitivity ? this.scrollParent[0].scrollTop = i2 = this.scrollParent[0].scrollTop + e2.scrollSpeed : t2.pageY - this.overflowOffset.top < e2.scrollSensitivity && (this.scrollParent[0].scrollTop = i2 = this.scrollParent[0].scrollTop - e2.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t2.pageX < e2.scrollSensitivity ? this.scrollParent[0].scrollLeft = i2 = this.scrollParent[0].scrollLeft + e2.scrollSpeed : t2.pageX - this.overflowOffset.left < e2.scrollSensitivity && (this.scrollParent[0].scrollLeft = i2 = this.scrollParent[0].scrollLeft - e2.scrollSpeed)) : (t2.pageY - this.document.scrollTop() < e2.scrollSensitivity ? i2 = this.document.scrollTop(this.document.scrollTop() - e2.scrollSpeed) : this.window.height() - (t2.pageY - this.document.scrollTop()) < e2.scrollSensitivity && (i2 = this.document.scrollTop(this.document.scrollTop() + e2.scrollSpeed)), t2.pageX - this.document.scrollLeft() < e2.scrollSensitivity ? i2 = this.document.scrollLeft(this.document.scrollLeft() - e2.scrollSpeed) : this.window.width() - (t2.pageX - this.document.scrollLeft()) < e2.scrollSensitivity && (i2 = this.document.scrollLeft(this.document.scrollLeft() + e2.scrollSpeed))), i2;
    }, _mouseDrag: function(t2) {
      var e2, i2, s2, n2, o2 = this.options;
      for (this.position = this._generatePosition(t2), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), o2.scroll && false !== this._scroll(t2) && (this._refreshItemPositions(true), V.ui.ddmanager) && !o2.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t2), this.dragDirection = { vertical: this._getDragVerticalDirection(), horizontal: this._getDragHorizontalDirection() }, e2 = this.items.length - 1; 0 <= e2; e2--) if (s2 = (i2 = this.items[e2]).item[0], (n2 = this._intersectsWithPointer(i2)) && i2.instance === this.currentContainer && !(s2 === this.currentItem[0] || this.placeholder[1 === n2 ? "next" : "prev"]()[0] === s2 || V.contains(this.placeholder[0], s2) || "semi-dynamic" === this.options.type && V.contains(this.element[0], s2))) {
        if (this.direction = 1 === n2 ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i2)) break;
        this._rearrange(t2, i2), this._trigger("change", t2, this._uiHash());
        break;
      }
      return this._contactContainers(t2), V.ui.ddmanager && V.ui.ddmanager.drag(this, t2), this._trigger("sort", t2, this._uiHash()), this.lastPositionAbs = this.positionAbs, false;
    }, _mouseStop: function(t2, e2) {
      var i2, s2, n2, o2;
      if (t2) return V.ui.ddmanager && !this.options.dropBehaviour && V.ui.ddmanager.drop(this, t2), this.options.revert ? (s2 = (i2 = this).placeholder.offset(), o2 = {}, (n2 = this.options.axis) && "x" !== n2 || (o2.left = s2.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n2 && "y" !== n2 || (o2.top = s2.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = true, V(this.helper).animate(o2, parseInt(this.options.revert, 10) || 500, function() {
        i2._clear(t2);
      })) : this._clear(t2, e2), false;
    }, cancel: function() {
      if (this.dragging) {
        this._mouseUp(new V.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
        for (var t2 = this.containers.length - 1; 0 <= t2; t2--) this.containers[t2]._trigger("deactivate", null, this._uiHash(this)), this.containers[t2].containerCache.over && (this.containers[t2]._trigger("out", null, this._uiHash(this)), this.containers[t2].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), V.extend(this, { helper: null, dragging: false, reverting: false, _noFinalSort: null }), this.domPosition.prev ? V(this.domPosition.prev).after(this.currentItem) : V(this.domPosition.parent).prepend(this.currentItem)), this;
    }, serialize: function(e2) {
      var t2 = this._getItemsAsjQuery(e2 && e2.connected), i2 = [];
      return e2 = e2 || {}, V(t2).each(function() {
        var t3 = (V(e2.item || this).attr(e2.attribute || "id") || "").match(e2.expression || /(.+)[\-=_](.+)/);
        t3 && i2.push((e2.key || t3[1] + "[]") + "=" + (e2.key && e2.expression ? t3[1] : t3[2]));
      }), !i2.length && e2.key && i2.push(e2.key + "="), i2.join("&");
    }, toArray: function(t2) {
      var e2 = this._getItemsAsjQuery(t2 && t2.connected), i2 = [];
      return t2 = t2 || {}, e2.each(function() {
        i2.push(V(t2.item || this).attr(t2.attribute || "id") || "");
      }), i2;
    }, _intersectsWith: function(t2) {
      var e2 = this.positionAbs.left, i2 = e2 + this.helperProportions.width, s2 = this.positionAbs.top, n2 = s2 + this.helperProportions.height, o2 = t2.left, a2 = o2 + t2.width, r2 = t2.top, l2 = r2 + t2.height, h2 = this.offset.click.top, c2 = this.offset.click.left, h2 = "x" === this.options.axis || r2 < s2 + h2 && s2 + h2 < l2, c2 = "y" === this.options.axis || o2 < e2 + c2 && e2 + c2 < a2;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t2[this.floating ? "width" : "height"] ? h2 && c2 : o2 < e2 + this.helperProportions.width / 2 && i2 - this.helperProportions.width / 2 < a2 && r2 < s2 + this.helperProportions.height / 2 && n2 - this.helperProportions.height / 2 < l2;
    }, _intersectsWithPointer: function(t2) {
      var e2 = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t2.top, t2.height), t2 = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t2.left, t2.width);
      return !(!e2 || !t2) && (e2 = this.dragDirection.vertical, t2 = this.dragDirection.horizontal, this.floating ? "right" === t2 || "down" === e2 ? 2 : 1 : e2 && ("down" === e2 ? 2 : 1));
    }, _intersectsWithSides: function(t2) {
      var e2 = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t2.top + t2.height / 2, t2.height), t2 = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t2.left + t2.width / 2, t2.width), i2 = this.dragDirection.vertical, s2 = this.dragDirection.horizontal;
      return this.floating && s2 ? "right" === s2 && t2 || "left" === s2 && !t2 : i2 && ("down" === i2 && e2 || "up" === i2 && !e2);
    }, _getDragVerticalDirection: function() {
      var t2 = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 != t2 && (0 < t2 ? "down" : "up");
    }, _getDragHorizontalDirection: function() {
      var t2 = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 != t2 && (0 < t2 ? "right" : "left");
    }, refresh: function(t2) {
      return this._refreshItems(t2), this._setHandleClassName(), this.refreshPositions(), this;
    }, _connectWith: function() {
      var t2 = this.options;
      return t2.connectWith.constructor === String ? [t2.connectWith] : t2.connectWith;
    }, _getItemsAsjQuery: function(t2) {
      var e2, i2, s2, n2, o2 = [], a2 = [], r2 = this._connectWith();
      if (r2 && t2) for (e2 = r2.length - 1; 0 <= e2; e2--) for (i2 = (s2 = V(r2[e2], this.document[0])).length - 1; 0 <= i2; i2--) (n2 = V.data(s2[i2], this.widgetFullName)) && n2 !== this && !n2.options.disabled && a2.push(["function" == typeof n2.options.items ? n2.options.items.call(n2.element) : V(n2.options.items, n2.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n2]);
      function l2() {
        o2.push(this);
      }
      for (a2.push(["function" == typeof this.options.items ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : V(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), e2 = a2.length - 1; 0 <= e2; e2--) a2[e2][0].each(l2);
      return V(o2);
    }, _removeCurrentsFromItems: function() {
      var i2 = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = V.grep(this.items, function(t2) {
        for (var e2 = 0; e2 < i2.length; e2++) if (i2[e2] === t2.item[0]) return false;
        return true;
      });
    }, _refreshItems: function(t2) {
      this.items = [], this.containers = [this];
      var e2, i2, s2, n2, o2, a2, r2, l2, h2 = this.items, c2 = [["function" == typeof this.options.items ? this.options.items.call(this.element[0], t2, { item: this.currentItem }) : V(this.options.items, this.element), this]], u2 = this._connectWith();
      if (u2 && this.ready) for (e2 = u2.length - 1; 0 <= e2; e2--) for (i2 = (s2 = V(u2[e2], this.document[0])).length - 1; 0 <= i2; i2--) (n2 = V.data(s2[i2], this.widgetFullName)) && n2 !== this && !n2.options.disabled && (c2.push(["function" == typeof n2.options.items ? n2.options.items.call(n2.element[0], t2, { item: this.currentItem }) : V(n2.options.items, n2.element), n2]), this.containers.push(n2));
      for (e2 = c2.length - 1; 0 <= e2; e2--) for (o2 = c2[e2][1], l2 = (a2 = c2[e2][i2 = 0]).length; i2 < l2; i2++) (r2 = V(a2[i2])).data(this.widgetName + "-item", o2), h2.push({ item: r2, instance: o2, width: 0, height: 0, left: 0, top: 0 });
    }, _refreshItemPositions: function(t2) {
      for (var e2, i2, s2 = this.items.length - 1; 0 <= s2; s2--) e2 = this.items[s2], this.currentContainer && e2.instance !== this.currentContainer && e2.item[0] !== this.currentItem[0] || (i2 = this.options.toleranceElement ? V(this.options.toleranceElement, e2.item) : e2.item, t2 || (e2.width = i2.outerWidth(), e2.height = i2.outerHeight()), i2 = i2.offset(), e2.left = i2.left, e2.top = i2.top);
    }, refreshPositions: function(t2) {
      var e2, i2;
      if (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), this._refreshItemPositions(t2), this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else for (e2 = this.containers.length - 1; 0 <= e2; e2--) i2 = this.containers[e2].element.offset(), this.containers[e2].containerCache.left = i2.left, this.containers[e2].containerCache.top = i2.top, this.containers[e2].containerCache.width = this.containers[e2].element.outerWidth(), this.containers[e2].containerCache.height = this.containers[e2].element.outerHeight();
      return this;
    }, _createPlaceholder: function(i2) {
      var s2, n2, o2 = (i2 = i2 || this).options;
      o2.placeholder && o2.placeholder.constructor !== String || (s2 = o2.placeholder, n2 = i2.currentItem[0].nodeName.toLowerCase(), o2.placeholder = { element: function() {
        var t2 = V("<" + n2 + ">", i2.document[0]);
        return i2._addClass(t2, "ui-sortable-placeholder", s2 || i2.currentItem[0].className)._removeClass(t2, "ui-sortable-helper"), "tbody" === n2 ? i2._createTrPlaceholder(i2.currentItem.find("tr").eq(0), V("<tr>", i2.document[0]).appendTo(t2)) : "tr" === n2 ? i2._createTrPlaceholder(i2.currentItem, t2) : "img" === n2 && t2.attr("src", i2.currentItem.attr("src")), s2 || t2.css("visibility", "hidden"), t2;
      }, update: function(t2, e2) {
        s2 && !o2.forcePlaceholderSize || (e2.height() && (!o2.forcePlaceholderSize || "tbody" !== n2 && "tr" !== n2) || e2.height(i2.currentItem.innerHeight() - parseInt(i2.currentItem.css("paddingTop") || 0, 10) - parseInt(i2.currentItem.css("paddingBottom") || 0, 10)), e2.width()) || e2.width(i2.currentItem.innerWidth() - parseInt(i2.currentItem.css("paddingLeft") || 0, 10) - parseInt(i2.currentItem.css("paddingRight") || 0, 10));
      } }), i2.placeholder = V(o2.placeholder.element.call(i2.element, i2.currentItem)), i2.currentItem.after(i2.placeholder), o2.placeholder.update(i2, i2.placeholder);
    }, _createTrPlaceholder: function(t2, e2) {
      var i2 = this;
      t2.children().each(function() {
        V("<td>&#160;</td>", i2.document[0]).attr("colspan", V(this).attr("colspan") || 1).appendTo(e2);
      });
    }, _contactContainers: function(t2) {
      for (var e2, i2, s2, n2, o2, a2, r2, l2, h2, c2 = null, u2 = null, d2 = this.containers.length - 1; 0 <= d2; d2--) V.contains(this.currentItem[0], this.containers[d2].element[0]) || (this._intersectsWith(this.containers[d2].containerCache) ? c2 && V.contains(this.containers[d2].element[0], c2.element[0]) || (c2 = this.containers[d2], u2 = d2) : this.containers[d2].containerCache.over && (this.containers[d2]._trigger("out", t2, this._uiHash(this)), this.containers[d2].containerCache.over = 0));
      if (c2) if (1 === this.containers.length) this.containers[u2].containerCache.over || (this.containers[u2]._trigger("over", t2, this._uiHash(this)), this.containers[u2].containerCache.over = 1);
      else {
        for (i2 = 1e4, s2 = null, n2 = (l2 = c2.floating || this._isFloating(this.currentItem)) ? "left" : "top", o2 = l2 ? "width" : "height", h2 = l2 ? "pageX" : "pageY", e2 = this.items.length - 1; 0 <= e2; e2--) V.contains(this.containers[u2].element[0], this.items[e2].item[0]) && this.items[e2].item[0] !== this.currentItem[0] && (a2 = this.items[e2].item.offset()[n2], r2 = false, t2[h2] - a2 > this.items[e2][o2] / 2 && (r2 = true), Math.abs(t2[h2] - a2) < i2) && (i2 = Math.abs(t2[h2] - a2), s2 = this.items[e2], this.direction = r2 ? "up" : "down");
        (s2 || this.options.dropOnEmpty) && (this.currentContainer === this.containers[u2] ? this.currentContainer.containerCache.over || (this.containers[u2]._trigger("over", t2, this._uiHash()), this.currentContainer.containerCache.over = 1) : (s2 ? this._rearrange(t2, s2, null, true) : this._rearrange(t2, null, this.containers[u2].element, true), this._trigger("change", t2, this._uiHash()), this.containers[u2]._trigger("change", t2, this._uiHash(this)), this.currentContainer = this.containers[u2], this.options.placeholder.update(this.currentContainer, this.placeholder), this.scrollParent = this.placeholder.scrollParent(), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this.containers[u2]._trigger("over", t2, this._uiHash(this)), this.containers[u2].containerCache.over = 1));
      }
    }, _createHelper: function(t2) {
      var e2 = this.options, t2 = "function" == typeof e2.helper ? V(e2.helper.apply(this.element[0], [t2, this.currentItem])) : "clone" === e2.helper ? this.currentItem.clone() : this.currentItem;
      return t2.parents("body").length || this.appendTo[0].appendChild(t2[0]), t2[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), t2[0].style.width && !e2.forceHelperSize || t2.width(this.currentItem.width()), t2[0].style.height && !e2.forceHelperSize || t2.height(this.currentItem.height()), t2;
    }, _adjustOffsetFromHelper: function(t2) {
      "string" == typeof t2 && (t2 = t2.split(" ")), "left" in (t2 = Array.isArray(t2) ? { left: +t2[0], top: +t2[1] || 0 } : t2) && (this.offset.click.left = t2.left + this.margins.left), "right" in t2 && (this.offset.click.left = this.helperProportions.width - t2.right + this.margins.left), "top" in t2 && (this.offset.click.top = t2.top + this.margins.top), "bottom" in t2 && (this.offset.click.top = this.helperProportions.height - t2.bottom + this.margins.top);
    }, _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t2 = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) && (t2.left += this.scrollParent.scrollLeft(), t2.top += this.scrollParent.scrollTop()), { top: (t2 = this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && V.ui.ie ? { top: 0, left: 0 } : t2).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t2.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function() {
      var t2;
      return "relative" === this.cssPosition ? { top: (t2 = this.currentItem.position()).top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t2.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } : { top: 0, left: 0 };
    }, _cacheMargins: function() {
      this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
    }, _cacheHelperProportions: function() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function() {
      var t2, e2, i2 = this.options;
      "parent" === i2.containment && (i2.containment = this.helper[0].parentNode), "document" !== i2.containment && "window" !== i2.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i2.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i2.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i2.containment) || (t2 = V(i2.containment)[0], i2 = V(i2.containment).offset(), e2 = "hidden" !== V(t2).css("overflow"), this.containment = [i2.left + (parseInt(V(t2).css("borderLeftWidth"), 10) || 0) + (parseInt(V(t2).css("paddingLeft"), 10) || 0) - this.margins.left, i2.top + (parseInt(V(t2).css("borderTopWidth"), 10) || 0) + (parseInt(V(t2).css("paddingTop"), 10) || 0) - this.margins.top, i2.left + (e2 ? Math.max(t2.scrollWidth, t2.offsetWidth) : t2.offsetWidth) - (parseInt(V(t2).css("borderLeftWidth"), 10) || 0) - (parseInt(V(t2).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i2.top + (e2 ? Math.max(t2.scrollHeight, t2.offsetHeight) : t2.offsetHeight) - (parseInt(V(t2).css("borderTopWidth"), 10) || 0) - (parseInt(V(t2).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    }, _convertPositionTo: function(t2, e2) {
      e2 = e2 || this.position;
      var t2 = "absolute" === t2 ? 1 : -1, i2 = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s2 = /(html|body)/i.test(i2[0].tagName);
      return { top: e2.top + this.offset.relative.top * t2 + this.offset.parent.top * t2 - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s2 ? 0 : i2.scrollTop()) * t2, left: e2.left + this.offset.relative.left * t2 + this.offset.parent.left * t2 - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s2 ? 0 : i2.scrollLeft()) * t2 };
    }, _generatePosition: function(t2) {
      var e2 = this.options, i2 = t2.pageX, s2 = t2.pageY, n2 = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o2 = /(html|body)/i.test(n2[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t2.pageX - this.offset.click.left < this.containment[0] && (i2 = this.containment[0] + this.offset.click.left), t2.pageY - this.offset.click.top < this.containment[1] && (s2 = this.containment[1] + this.offset.click.top), t2.pageX - this.offset.click.left > this.containment[2] && (i2 = this.containment[2] + this.offset.click.left), t2.pageY - this.offset.click.top > this.containment[3]) && (s2 = this.containment[3] + this.offset.click.top), e2.grid) && (t2 = this.originalPageY + Math.round((s2 - this.originalPageY) / e2.grid[1]) * e2.grid[1], s2 = !this.containment || t2 - this.offset.click.top >= this.containment[1] && t2 - this.offset.click.top <= this.containment[3] ? t2 : t2 - this.offset.click.top >= this.containment[1] ? t2 - e2.grid[1] : t2 + e2.grid[1], t2 = this.originalPageX + Math.round((i2 - this.originalPageX) / e2.grid[0]) * e2.grid[0], i2 = !this.containment || t2 - this.offset.click.left >= this.containment[0] && t2 - this.offset.click.left <= this.containment[2] ? t2 : t2 - this.offset.click.left >= this.containment[0] ? t2 - e2.grid[0] : t2 + e2.grid[0]), { top: s2 - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o2 ? 0 : n2.scrollTop()), left: i2 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o2 ? 0 : n2.scrollLeft()) };
    }, _rearrange: function(t2, e2, i2, s2) {
      i2 ? i2[0].appendChild(this.placeholder[0]) : e2.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e2.item[0] : e2.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n2 = this.counter;
      this._delay(function() {
        n2 === this.counter && this.refreshPositions(!s2);
      });
    }, _clear: function(t2, e2) {
      this.reverting = false;
      var i2, s2 = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (i2 in this._storedCSS) "auto" !== this._storedCSS[i2] && "static" !== this._storedCSS[i2] || (this._storedCSS[i2] = "");
        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();
      function n2(e3, i3, s3) {
        return function(t3) {
          s3._trigger(e3, t3, i3._uiHash(i3));
        };
      }
      for (this.fromOutside && !e2 && s2.push(function(t3) {
        this._trigger("receive", t3, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e2 || s2.push(function(t3) {
        this._trigger("update", t3, this._uiHash());
      }), this === this.currentContainer || e2 || (s2.push(function(t3) {
        this._trigger("remove", t3, this._uiHash());
      }), s2.push((function(e3) {
        return function(t3) {
          e3._trigger("receive", t3, this._uiHash(this));
        };
      }).call(this, this.currentContainer)), s2.push((function(e3) {
        return function(t3) {
          e3._trigger("update", t3, this._uiHash(this));
        };
      }).call(this, this.currentContainer))), i2 = this.containers.length - 1; 0 <= i2; i2--) e2 || s2.push(n2("deactivate", this, this.containers[i2])), this.containers[i2].containerCache.over && (s2.push(n2("out", this, this.containers[i2])), this.containers[i2].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = false, e2 || this._trigger("beforeStop", t2, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e2) {
        for (i2 = 0; i2 < s2.length; i2++) s2[i2].call(this, t2);
        this._trigger("stop", t2, this._uiHash());
      }
      return this.fromOutside = false, !this.cancelHelperRemoval;
    }, _trigger: function() {
      false === V.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
    }, _uiHash: function(t2) {
      var e2 = t2 || this;
      return { helper: e2.helper, placeholder: e2.placeholder || V([]), position: e2.position, originalPosition: e2.originalPosition, offset: e2.positionAbs, item: e2.currentItem, sender: t2 ? t2.element : null };
    } }), V.widget("ui.accordion", { version: "1.13.3", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: false, event: "click", header: function(t2) {
      return t2.find("> li > :first-child").add(t2.find("> :not(li)").even());
    }, heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() {
      var t2 = this.options;
      this.prevShow = this.prevHide = V(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t2.collapsible || false !== t2.active && null != t2.active || (t2.active = 0), this._processPanels(), t2.active < 0 && (t2.active += this.headers.length), this._refresh();
    }, _getCreateEventData: function() {
      return { header: this.active, panel: this.active.length ? this.active.next() : V() };
    }, _createIcons: function() {
      var t2, e2 = this.options.icons;
      e2 && (t2 = V("<span>"), this._addClass(t2, "ui-accordion-header-icon", "ui-icon " + e2.header), t2.prependTo(this.headers), t2 = this.active.children(".ui-accordion-header-icon"), this._removeClass(t2, e2.header)._addClass(t2, null, e2.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    }, _destroyIcons: function() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    }, _destroy: function() {
      var t2;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t2 = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t2.css("height", "");
    }, _setOption: function(t2, e2) {
      "active" === t2 ? this._activate(e2) : ("event" === t2 && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e2)), this._super(t2, e2), "collapsible" !== t2 || e2 || false !== this.options.active || this._activate(0), "icons" === t2 && (this._destroyIcons(), e2) && this._createIcons());
    }, _setOptionDisabled: function(t2) {
      this._super(t2), this.element.attr("aria-disabled", t2), this._toggleClass(null, "ui-state-disabled", !!t2), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t2);
    }, _keydown: function(t2) {
      if (!t2.altKey && !t2.ctrlKey) {
        var e2 = V.ui.keyCode, i2 = this.headers.length, s2 = this.headers.index(t2.target), n2 = false;
        switch (t2.keyCode) {
          case e2.RIGHT:
          case e2.DOWN:
            n2 = this.headers[(s2 + 1) % i2];
            break;
          case e2.LEFT:
          case e2.UP:
            n2 = this.headers[(s2 - 1 + i2) % i2];
            break;
          case e2.SPACE:
          case e2.ENTER:
            this._eventHandler(t2);
            break;
          case e2.HOME:
            n2 = this.headers[0];
            break;
          case e2.END:
            n2 = this.headers[i2 - 1];
        }
        n2 && (V(t2.target).attr("tabIndex", -1), V(n2).attr("tabIndex", 0), V(n2).trigger("focus"), t2.preventDefault());
      }
    }, _panelKeyDown: function(t2) {
      t2.keyCode === V.ui.keyCode.UP && t2.ctrlKey && V(t2.currentTarget).prev().trigger("focus");
    }, refresh: function() {
      var t2 = this.options;
      this._processPanels(), false === t2.active && true === t2.collapsible || !this.headers.length ? (t2.active = false, this.active = V()) : false === t2.active ? this._activate(0) : this.active.length && !V.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t2.active = false, this.active = V()) : this._activate(Math.max(0, t2.active - 1)) : t2.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    }, _processPanels: function() {
      var t2 = this.headers, e2 = this.panels;
      "function" == typeof this.options.header ? this.headers = this.options.header(this.element) : this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e2 && (this._off(t2.not(this.headers)), this._off(e2.not(this.panels)));
    }, _refresh: function() {
      var i2, t2 = this.options, e2 = t2.heightStyle, s2 = this.element.parent();
      this.active = this._findActive(t2.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
        var t3 = V(this), e3 = t3.uniqueId().attr("id"), i3 = t3.next(), s3 = i3.uniqueId().attr("id");
        t3.attr("aria-controls", s3), i3.attr("aria-labelledby", e3);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t2.event), "fill" === e2 ? (i2 = s2.height(), this.element.siblings(":visible").each(function() {
        var t3 = V(this), e3 = t3.css("position");
        "absolute" !== e3 && "fixed" !== e3 && (i2 -= t3.outerHeight(true));
      }), this.headers.each(function() {
        i2 -= V(this).outerHeight(true);
      }), this.headers.next().each(function() {
        V(this).height(Math.max(0, i2 - V(this).innerHeight() + V(this).height()));
      }).css("overflow", "auto")) : "auto" === e2 && (i2 = 0, this.headers.next().each(function() {
        var t3 = V(this).is(":visible");
        t3 || V(this).show(), i2 = Math.max(i2, V(this).css("height", "").height()), t3 || V(this).hide();
      }).height(i2));
    }, _activate: function(t2) {
      t2 = this._findActive(t2)[0];
      t2 !== this.active[0] && (t2 = t2 || this.active[0], this._eventHandler({ target: t2, currentTarget: t2, preventDefault: V.noop }));
    }, _findActive: function(t2) {
      return "number" == typeof t2 ? this.headers.eq(t2) : V();
    }, _setupEvents: function(t2) {
      var i2 = { keydown: "_keydown" };
      t2 && V.each(t2.split(" "), function(t3, e2) {
        i2[e2] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i2), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers);
    }, _eventHandler: function(t2) {
      var e2 = this.options, i2 = this.active, s2 = V(t2.currentTarget), n2 = s2[0] === i2[0], o2 = n2 && e2.collapsible, a2 = o2 ? V() : s2.next(), r2 = i2.next(), r2 = { oldHeader: i2, oldPanel: r2, newHeader: o2 ? V() : s2, newPanel: a2 };
      t2.preventDefault(), n2 && !e2.collapsible || false === this._trigger("beforeActivate", t2, r2) || (e2.active = !o2 && this.headers.index(s2), this.active = n2 ? V() : s2, this._toggle(r2), this._removeClass(i2, "ui-accordion-header-active", "ui-state-active"), e2.icons && (a2 = i2.children(".ui-accordion-header-icon"), this._removeClass(a2, null, e2.icons.activeHeader)._addClass(a2, null, e2.icons.header)), n2) || (this._removeClass(s2, "ui-accordion-header-collapsed")._addClass(s2, "ui-accordion-header-active", "ui-state-active"), e2.icons && (t2 = s2.children(".ui-accordion-header-icon"), this._removeClass(t2, null, e2.icons.header)._addClass(t2, null, e2.icons.activeHeader)), this._addClass(s2.next(), "ui-accordion-content-active"));
    }, _toggle: function(t2) {
      var e2 = t2.newPanel, i2 = this.prevShow.length ? this.prevShow : t2.oldPanel;
      this.prevShow.add(this.prevHide).stop(true, true), this.prevShow = e2, this.prevHide = i2, this.options.animate ? this._animate(e2, i2, t2) : (i2.hide(), e2.show(), this._toggleComplete(t2)), i2.attr({ "aria-hidden": "true" }), i2.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), e2.length && i2.length ? i2.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : e2.length && this.headers.filter(function() {
        return 0 === parseInt(V(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), e2.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _animate: function(t2, i2, e2) {
      function s2() {
        o2._toggleComplete(e2);
      }
      var n2, o2 = this, a2 = 0, r2 = t2.css("box-sizing"), l2 = t2.length && (!i2.length || t2.index() < i2.index()), h2 = this.options.animate || {}, l2 = l2 && h2.down || h2, c2 = (c2 = "string" == typeof l2 ? l2 : c2) || l2.easing || h2.easing, u2 = (u2 = "number" == typeof l2 ? l2 : u2) || l2.duration || h2.duration;
      return i2.length ? t2.length ? (n2 = t2.show().outerHeight(), i2.animate(this.hideProps, { duration: u2, easing: c2, step: function(t3, e3) {
        e3.now = Math.round(t3);
      } }), void t2.hide().animate(this.showProps, { duration: u2, easing: c2, complete: s2, step: function(t3, e3) {
        e3.now = Math.round(t3), "height" !== e3.prop ? "content-box" === r2 && (a2 += e3.now) : "content" !== o2.options.heightStyle && (e3.now = Math.round(n2 - i2.outerHeight() - a2), a2 = 0);
      } })) : i2.animate(this.hideProps, u2, c2, s2) : t2.animate(this.showProps, u2, c2, s2);
    }, _toggleComplete: function(t2) {
      var e2 = t2.oldPanel, i2 = e2.prev();
      this._removeClass(e2, "ui-accordion-content-active"), this._removeClass(i2, "ui-accordion-header-active")._addClass(i2, "ui-accordion-header-collapsed"), e2.length && (e2.parent()[0].className = e2.parent()[0].className), this._trigger("activate", null, t2);
    } }), V.widget("ui.menu", { version: "1.13.3", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function() {
      this.activeMenu = this.element, this.mouseHandled = false, this.lastMousePosition = { x: null, y: null }, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function(t2) {
        t2.preventDefault(), this._activateItem(t2);
      }, "click .ui-menu-item": function(t2) {
        var e2 = V(t2.target), i2 = V(V.ui.safeActiveElement(this.document[0]));
        !this.mouseHandled && e2.not(".ui-state-disabled").length && (this.select(t2), t2.isPropagationStopped() || (this.mouseHandled = true), e2.has(".ui-menu").length ? this.expand(t2) : !this.element.is(":focus") && i2.closest(".ui-menu").length && (this.element.trigger("focus", [true]), this.active) && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer));
      }, "mouseenter .ui-menu-item": "_activateItem", "mousemove .ui-menu-item": "_activateItem", mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(t2, e2) {
        var i2 = this.active || this._menuItems().first();
        e2 || this.focus(t2, i2);
      }, blur: function(t2) {
        this._delay(function() {
          V.contains(this.element[0], V.ui.safeActiveElement(this.document[0])) || this.collapseAll(t2);
        });
      }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function(t2) {
        this._closeOnDocumentClick(t2) && this.collapseAll(t2, true), this.mouseHandled = false;
      } });
    }, _activateItem: function(t2) {
      var e2, i2;
      this.previousFilter || t2.clientX === this.lastMousePosition.x && t2.clientY === this.lastMousePosition.y || (this.lastMousePosition = { x: t2.clientX, y: t2.clientY }, e2 = V(t2.target).closest(".ui-menu-item"), i2 = V(t2.currentTarget), e2[0] !== i2[0]) || i2.is(".ui-state-active") || (this._removeClass(i2.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t2, i2));
    }, _destroy: function() {
      var t2 = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t2.children().each(function() {
        var t3 = V(this);
        t3.data("ui-menu-submenu-caret") && t3.remove();
      });
    }, _keydown: function(t2) {
      var e2, i2, s2, n2 = true;
      switch (t2.keyCode) {
        case V.ui.keyCode.PAGE_UP:
          this.previousPage(t2);
          break;
        case V.ui.keyCode.PAGE_DOWN:
          this.nextPage(t2);
          break;
        case V.ui.keyCode.HOME:
          this._move("first", "first", t2);
          break;
        case V.ui.keyCode.END:
          this._move("last", "last", t2);
          break;
        case V.ui.keyCode.UP:
          this.previous(t2);
          break;
        case V.ui.keyCode.DOWN:
          this.next(t2);
          break;
        case V.ui.keyCode.LEFT:
          this.collapse(t2);
          break;
        case V.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t2);
          break;
        case V.ui.keyCode.ENTER:
        case V.ui.keyCode.SPACE:
          this._activate(t2);
          break;
        case V.ui.keyCode.ESCAPE:
          this.collapse(t2);
          break;
        default:
          e2 = this.previousFilter || "", s2 = n2 = false, i2 = 96 <= t2.keyCode && t2.keyCode <= 105 ? (t2.keyCode - 96).toString() : String.fromCharCode(t2.keyCode), clearTimeout(this.filterTimer), i2 === e2 ? s2 = true : i2 = e2 + i2, e2 = this._filterMenuItems(i2), (e2 = s2 && -1 !== e2.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e2).length || (i2 = String.fromCharCode(t2.keyCode), e2 = this._filterMenuItems(i2)), e2.length ? (this.focus(t2, e2), this.previousFilter = i2, this.filterTimer = this._delay(function() {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }
      n2 && t2.preventDefault();
    }, _activate: function(t2) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t2) : this.select(t2));
    }, refresh: function() {
      var t2, e2, s2 = this, n2 = this.options.icons.submenu, i2 = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), t2 = i2.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
        var t3 = V(this), e3 = t3.prev(), i3 = V("<span>").data("ui-menu-submenu-caret", true);
        s2._addClass(i3, "ui-menu-icon", "ui-icon " + n2), e3.attr("aria-haspopup", "true").prepend(i3), t3.attr("aria-labelledby", e3.attr("id"));
      }), this._addClass(t2, "ui-menu", "ui-widget ui-widget-content ui-front"), (t2 = i2.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
        var t3 = V(this);
        s2._isDivider(t3) && s2._addClass(t3, "ui-menu-divider", "ui-widget-content");
      }), e2 = (i2 = t2.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(i2, "ui-menu-item")._addClass(e2, "ui-menu-item-wrapper"), t2.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !V.contains(this.element[0], this.active[0]) && this.blur();
    }, _itemRole: function() {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    }, _setOption: function(t2, e2) {
      var i2;
      "icons" === t2 && (i2 = this.element.find(".ui-menu-icon"), this._removeClass(i2, null, this.options.icons.submenu)._addClass(i2, null, e2.submenu)), this._super(t2, e2);
    }, _setOptionDisabled: function(t2) {
      this._super(t2), this.element.attr("aria-disabled", String(t2)), this._toggleClass(null, "ui-state-disabled", !!t2);
    }, focus: function(t2, e2) {
      var i2;
      this.blur(t2, t2 && "focus" === t2.type), this._scrollIntoView(e2), this.active = e2.first(), i2 = this.active.children(".ui-menu-item-wrapper"), this._addClass(i2, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i2.attr("id")), i2 = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(i2, null, "ui-state-active"), t2 && "keydown" === t2.type ? this._close() : this.timer = this._delay(function() {
        this._close();
      }, this.delay), (i2 = e2.children(".ui-menu")).length && t2 && /^mouse/.test(t2.type) && this._startOpening(i2), this.activeMenu = e2.parent(), this._trigger("focus", t2, { item: e2 });
    }, _scrollIntoView: function(t2) {
      var e2, i2, s2;
      this._hasScroll() && (e2 = parseFloat(V.css(this.activeMenu[0], "borderTopWidth")) || 0, i2 = parseFloat(V.css(this.activeMenu[0], "paddingTop")) || 0, e2 = t2.offset().top - this.activeMenu.offset().top - e2 - i2, i2 = this.activeMenu.scrollTop(), s2 = this.activeMenu.height(), t2 = t2.outerHeight(), e2 < 0 ? this.activeMenu.scrollTop(i2 + e2) : s2 < e2 + t2 && this.activeMenu.scrollTop(i2 + e2 - s2 + t2));
    }, blur: function(t2, e2) {
      e2 || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t2, { item: this.active }), this.active = null);
    }, _startOpening: function(t2) {
      clearTimeout(this.timer), "true" === t2.attr("aria-hidden") && (this.timer = this._delay(function() {
        this._close(), this._open(t2);
      }, this.delay));
    }, _open: function(t2) {
      var e2 = V.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t2.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t2.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e2);
    }, collapseAll: function(e2, i2) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
        var t2 = i2 ? this.element : V(e2 && e2.target).closest(this.element.find(".ui-menu"));
        t2.length || (t2 = this.element), this._close(t2), this.blur(e2), this._removeClass(t2.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t2;
      }, i2 ? 0 : this.delay);
    }, _close: function(t2) {
      (t2 = t2 || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    }, _closeOnDocumentClick: function(t2) {
      return !V(t2.target).closest(".ui-menu").length;
    }, _isDivider: function(t2) {
      return !/[^\-\u2014\u2013\s]/.test(t2.text());
    }, collapse: function(t2) {
      var e2 = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e2 && e2.length && (this._close(), this.focus(t2, e2));
    }, expand: function(t2) {
      var e2 = this.active && this._menuItems(this.active.children(".ui-menu")).first();
      e2 && e2.length && (this._open(e2.parent()), this._delay(function() {
        this.focus(t2, e2);
      }));
    }, next: function(t2) {
      this._move("next", "first", t2);
    }, previous: function(t2) {
      this._move("prev", "last", t2);
    }, isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    }, isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    }, _menuItems: function(t2) {
      return (t2 || this.element).find(this.options.items).filter(".ui-menu-item");
    }, _move: function(t2, e2, i2) {
      var s2;
      (s2 = this.active ? "first" === t2 || "last" === t2 ? this.active["first" === t2 ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[t2 + "All"](".ui-menu-item").first() : s2) && s2.length && this.active || (s2 = this._menuItems(this.activeMenu)[e2]()), this.focus(i2, s2);
    }, nextPage: function(t2) {
      var e2, i2, s2;
      this.active ? this.isLastItem() || (this._hasScroll() ? (i2 = this.active.offset().top, s2 = this.element.innerHeight(), 0 === V.fn.jquery.indexOf("3.2.") && (s2 += this.element[0].offsetHeight - this.element.outerHeight()), this.active.nextAll(".ui-menu-item").each(function() {
        return (e2 = V(this)).offset().top - i2 - s2 < 0;
      }), this.focus(t2, e2)) : this.focus(t2, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(t2);
    }, previousPage: function(t2) {
      var e2, i2, s2;
      this.active ? this.isFirstItem() || (this._hasScroll() ? (i2 = this.active.offset().top, s2 = this.element.innerHeight(), 0 === V.fn.jquery.indexOf("3.2.") && (s2 += this.element[0].offsetHeight - this.element.outerHeight()), this.active.prevAll(".ui-menu-item").each(function() {
        return 0 < (e2 = V(this)).offset().top - i2 + s2;
      }), this.focus(t2, e2)) : this.focus(t2, this._menuItems(this.activeMenu).first())) : this.next(t2);
    }, _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    }, select: function(t2) {
      this.active = this.active || V(t2.target).closest(".ui-menu-item");
      var e2 = { item: this.active };
      this.active.has(".ui-menu").length || this.collapseAll(t2, true), this._trigger("select", t2, e2);
    }, _filterMenuItems: function(t2) {
      var t2 = t2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), e2 = new RegExp("^" + t2, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
        return e2.test(String.prototype.trim.call(V(this).children(".ui-menu-item-wrapper").text()));
      });
    } }), V.widget("ui.autocomplete", { version: "1.13.3", defaultElement: "<input>", options: { appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, liveRegionTimer: null, _create: function() {
      var i2, s2, n2, t2 = this.element[0].nodeName.toLowerCase(), e2 = "textarea" === t2, t2 = "input" === t2;
      this.isMultiLine = e2 || !t2 && this._isContentEditable(this.element), this.valueMethod = this.element[e2 || t2 ? "val" : "text"], this.isNewMenu = true, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function(t3) {
        if (this.element.prop("readOnly")) s2 = n2 = i2 = true;
        else {
          s2 = n2 = i2 = false;
          var e3 = V.ui.keyCode;
          switch (t3.keyCode) {
            case e3.PAGE_UP:
              i2 = true, this._move("previousPage", t3);
              break;
            case e3.PAGE_DOWN:
              i2 = true, this._move("nextPage", t3);
              break;
            case e3.UP:
              i2 = true, this._keyEvent("previous", t3);
              break;
            case e3.DOWN:
              i2 = true, this._keyEvent("next", t3);
              break;
            case e3.ENTER:
              this.menu.active && (i2 = true, t3.preventDefault(), this.menu.select(t3));
              break;
            case e3.TAB:
              this.menu.active && this.menu.select(t3);
              break;
            case e3.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t3), t3.preventDefault());
              break;
            default:
              s2 = true, this._searchTimeout(t3);
          }
        }
      }, keypress: function(t3) {
        if (i2) i2 = false, this.isMultiLine && !this.menu.element.is(":visible") || t3.preventDefault();
        else if (!s2) {
          var e3 = V.ui.keyCode;
          switch (t3.keyCode) {
            case e3.PAGE_UP:
              this._move("previousPage", t3);
              break;
            case e3.PAGE_DOWN:
              this._move("nextPage", t3);
              break;
            case e3.UP:
              this._keyEvent("previous", t3);
              break;
            case e3.DOWN:
              this._keyEvent("next", t3);
          }
        }
      }, input: function(t3) {
        n2 ? (n2 = false, t3.preventDefault()) : this._searchTimeout(t3);
      }, focus: function() {
        this.selectedItem = null, this.previous = this._value();
      }, blur: function(t3) {
        clearTimeout(this.searching), this.close(t3), this._change(t3);
      } }), this._initSource(), this.menu = V("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().attr({ unselectable: "on" }).menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function(t3) {
        t3.preventDefault();
      }, menufocus: function(t3, e3) {
        var i3, s3;
        this.isNewMenu && (this.isNewMenu = false, t3.originalEvent) && /^mouse/.test(t3.originalEvent.type) ? (this.menu.blur(), this.document.one("mousemove", function() {
          V(t3.target).trigger(t3.originalEvent);
        })) : (s3 = e3.item.data("ui-autocomplete-item"), false !== this._trigger("focus", t3, { item: s3 }) && t3.originalEvent && /^key/.test(t3.originalEvent.type) && this._value(s3.value), (i3 = e3.item.attr("aria-label") || s3.value) && String.prototype.trim.call(i3).length && (clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function() {
          this.liveRegion.html(V("<div>").text(i3));
        }, 100)));
      }, menuselect: function(t3, e3) {
        var i3 = e3.item.data("ui-autocomplete-item"), s3 = this.previous;
        this.element[0] !== V.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s3, this._delay(function() {
          this.previous = s3, this.selectedItem = i3;
        })), false !== this._trigger("select", t3, { item: i3 }) && this._value(i3.value), this.term = this._value(), this.close(t3), this.selectedItem = i3;
      } }), this.liveRegion = V("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() {
        this.element.removeAttr("autocomplete");
      } });
    }, _destroy: function() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    }, _setOption: function(t2, e2) {
      this._super(t2, e2), "source" === t2 && this._initSource(), "appendTo" === t2 && this.menu.element.appendTo(this._appendTo()), "disabled" === t2 && e2 && this.xhr && this.xhr.abort();
    }, _isEventTargetInWidget: function(t2) {
      var e2 = this.menu.element[0];
      return t2.target === this.element[0] || t2.target === e2 || V.contains(e2, t2.target);
    }, _closeOnClickOutside: function(t2) {
      this._isEventTargetInWidget(t2) || this.close();
    }, _appendTo: function() {
      var t2 = this.options.appendTo;
      return t2 = (t2 = (t2 = t2 && (t2.jquery || t2.nodeType ? V(t2) : this.document.find(t2).eq(0))) && t2[0] ? t2 : this.element.closest(".ui-front, dialog")).length ? t2 : this.document[0].body;
    }, _initSource: function() {
      var i2, s2, n2 = this;
      Array.isArray(this.options.source) ? (i2 = this.options.source, this.source = function(t2, e2) {
        e2(V.ui.autocomplete.filter(i2, t2.term));
      }) : "string" == typeof this.options.source ? (s2 = this.options.source, this.source = function(t2, e2) {
        n2.xhr && n2.xhr.abort(), n2.xhr = V.ajax({ url: s2, data: t2, dataType: "json", success: function(t3) {
          e2(t3);
        }, error: function() {
          e2([]);
        } });
      }) : this.source = this.options.source;
    }, _searchTimeout: function(s2) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        var t2 = this.term === this._value(), e2 = this.menu.element.is(":visible"), i2 = s2.altKey || s2.ctrlKey || s2.metaKey || s2.shiftKey;
        t2 && (e2 || i2) || (this.selectedItem = null, this.search(null, s2));
      }, this.options.delay);
    }, search: function(t2, e2) {
      return t2 = null != t2 ? t2 : this._value(), this.term = this._value(), t2.length < this.options.minLength ? this.close(e2) : false !== this._trigger("search", e2) ? this._search(t2) : void 0;
    }, _search: function(t2) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = false, this.source({ term: t2 }, this._response());
    }, _response: function() {
      var e2 = ++this.requestIndex;
      return (function(t2) {
        e2 === this.requestIndex && this.__response(t2), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }).bind(this);
    }, __response: function(t2) {
      t2 = t2 && this._normalize(t2), this._trigger("response", null, { content: t2 }), !this.options.disabled && t2 && t2.length && !this.cancelSearch ? (this._suggest(t2), this._trigger("open")) : this._close();
    }, close: function(t2) {
      this.cancelSearch = true, this._close(t2);
    }, _close: function(t2) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = true, this._trigger("close", t2));
    }, _change: function(t2) {
      this.previous !== this._value() && this._trigger("change", t2, { item: this.selectedItem });
    }, _normalize: function(t2) {
      return t2.length && t2[0].label && t2[0].value ? t2 : V.map(t2, function(t3) {
        return "string" == typeof t3 ? { label: t3, value: t3 } : V.extend({}, t3, { label: t3.label || t3.value, value: t3.value || t3.label });
      });
    }, _suggest: function(t2) {
      var e2 = this.menu.element.empty();
      this._renderMenu(e2, t2), this.isNewMenu = true, this.menu.refresh(), e2.show(), this._resizeMenu(), e2.position(V.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" });
    }, _resizeMenu: function() {
      var t2 = this.menu.element;
      t2.outerWidth(Math.max(t2.width("").outerWidth() + 1, this.element.outerWidth()));
    }, _renderMenu: function(i2, t2) {
      var s2 = this;
      V.each(t2, function(t3, e2) {
        s2._renderItemData(i2, e2);
      });
    }, _renderItemData: function(t2, e2) {
      return this._renderItem(t2, e2).data("ui-autocomplete-item", e2);
    }, _renderItem: function(t2, e2) {
      return V("<li>").append(V("<div>").text(e2.label)).appendTo(t2);
    }, _move: function(t2, e2) {
      this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t2) || this.menu.isLastItem() && /^next/.test(t2) ? (this.isMultiLine || this._value(this.term), this.menu.blur()) : this.menu[t2](e2) : this.search(null, e2);
    }, widget: function() {
      return this.menu.element;
    }, _value: function() {
      return this.valueMethod.apply(this.element, arguments);
    }, _keyEvent: function(t2, e2) {
      this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t2, e2), e2.preventDefault());
    }, _isContentEditable: function(t2) {
      var e2;
      return !!t2.length && ("inherit" === (e2 = t2.prop("contentEditable")) ? this._isContentEditable(t2.parent()) : "true" === e2);
    } }), V.extend(V.ui.autocomplete, { escapeRegex: function(t2) {
      return t2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }, filter: function(t2, e2) {
      var i2 = new RegExp(V.ui.autocomplete.escapeRegex(e2), "i");
      return V.grep(t2, function(t3) {
        return i2.test(t3.label || t3.value || t3);
      });
    } }), V.widget("ui.autocomplete", V.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function(t2) {
      return t2 + (1 < t2 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
    } } }, __response: function(t2) {
      var e2;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (e2 = t2 && t2.length ? this.options.messages.results(t2.length) : this.options.messages.noResults, clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function() {
        this.liveRegion.html(V("<div>").text(e2));
      }, 100));
    } }), V.ui.autocomplete;
    var B, d, j = /ui-corner-([a-z]){2,6}/g;
    V.widget("ui.controlgroup", { version: "1.13.3", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: true, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function() {
      this._enhance();
    }, _enhance: function() {
      this.element.attr("role", "toolbar"), this.refresh();
    }, _destroy: function() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    }, _initWidgets: function() {
      var o2 = this, a2 = [];
      V.each(this.options.items, function(s2, t2) {
        var e2, n2 = {};
        t2 && ("controlgroupLabel" === s2 ? ((e2 = o2.element.find(t2)).each(function() {
          var t3 = V(this);
          t3.children(".ui-controlgroup-label-contents").length || t3.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
        }), o2._addClass(e2, null, "ui-widget ui-widget-content ui-state-default"), a2 = a2.concat(e2.get())) : V.fn[s2] && (n2 = o2["_" + s2 + "Options"] ? o2["_" + s2 + "Options"]("middle") : { classes: {} }, o2.element.find(t2).each(function() {
          var t3 = V(this), e3 = t3[s2]("instance"), i2 = V.widget.extend({}, n2);
          "button" === s2 && t3.parent(".ui-spinner").length || ((e3 = e3 || t3[s2]()[s2]("instance")) && (i2.classes = o2._resolveClassesValues(i2.classes, e3)), t3[s2](i2), i2 = t3[s2]("widget"), V.data(i2[0], "ui-controlgroup-data", e3 || t3[s2]("instance")), a2.push(i2[0]));
        })));
      }), this.childWidgets = V(V.uniqueSort(a2)), this._addClass(this.childWidgets, "ui-controlgroup-item");
    }, _callChildMethod: function(e2) {
      this.childWidgets.each(function() {
        var t2 = V(this).data("ui-controlgroup-data");
        t2 && t2[e2] && t2[e2]();
      });
    }, _updateCornerClass: function(t2, e2) {
      e2 = this._buildSimpleOptions(e2, "label").classes.label;
      this._removeClass(t2, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t2, null, e2);
    }, _buildSimpleOptions: function(t2, e2) {
      var i2 = "vertical" === this.options.direction, s2 = { classes: {} };
      return s2.classes[e2] = { middle: "", first: "ui-corner-" + (i2 ? "top" : "left"), last: "ui-corner-" + (i2 ? "bottom" : "right"), only: "ui-corner-all" }[t2], s2;
    }, _spinnerOptions: function(t2) {
      t2 = this._buildSimpleOptions(t2, "ui-spinner");
      return t2.classes["ui-spinner-up"] = "", t2.classes["ui-spinner-down"] = "", t2;
    }, _buttonOptions: function(t2) {
      return this._buildSimpleOptions(t2, "ui-button");
    }, _checkboxradioOptions: function(t2) {
      return this._buildSimpleOptions(t2, "ui-checkboxradio-label");
    }, _selectmenuOptions: function(t2) {
      var e2 = "vertical" === this.options.direction;
      return { width: e2 && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e2 ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e2 ? "top" : "left") }, last: { "ui-selectmenu-button-open": e2 ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e2 ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t2] };
    }, _resolveClassesValues: function(i2, s2) {
      var n2 = {};
      return V.each(i2, function(t2) {
        var e2 = s2.options.classes[t2] || "", e2 = String.prototype.trim.call(e2.replace(j, ""));
        n2[t2] = (e2 + " " + i2[t2]).replace(/\s+/g, " ");
      }), n2;
    }, _setOption: function(t2, e2) {
      "direction" === t2 && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t2, e2), "disabled" === t2 ? this._callChildMethod(e2 ? "disable" : "enable") : this.refresh();
    }, refresh: function() {
      var n2, o2 = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), n2 = this.childWidgets, (n2 = this.options.onlyVisible ? n2.filter(":visible") : n2).length && (V.each(["first", "last"], function(t2, e2) {
        var i2, s2 = n2[e2]().data("ui-controlgroup-data");
        s2 && o2["_" + s2.widgetName + "Options"] ? ((i2 = o2["_" + s2.widgetName + "Options"](1 === n2.length ? "only" : e2)).classes = o2._resolveClassesValues(i2.classes, s2), s2.element[s2.widgetName](i2)) : o2._updateCornerClass(n2[e2](), e2);
      }), this._callChildMethod("refresh"));
    } }), V.widget("ui.checkboxradio", [V.ui.formResetMixin, { version: "1.13.3", options: { disabled: null, label: null, icon: true, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() {
      var t2, e2 = this._super() || {};
      return this._readType(), t2 = this.element.labels(), this.label = V(t2[t2.length - 1]), this.label.length || V.error("No label found for checkboxradio widget"), this.originalLabel = "", (t2 = this.label.contents().not(this.element[0])).length && (this.originalLabel += t2.clone().wrapAll("<div></div>").parent().html()), this.originalLabel && (e2.label = this.originalLabel), null != (t2 = this.element[0].disabled) && (e2.disabled = t2), e2;
    }, _create: function() {
      var t2 = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t2 && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this._on({ change: "_toggleClasses", focus: function() {
        this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
      }, blur: function() {
        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
      } });
    }, _readType: function() {
      var t2 = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === t2 && /radio|checkbox/.test(this.type) || V.error("Can't create checkboxradio on element.nodeName=" + t2 + " and element.type=" + this.type);
    }, _enhance: function() {
      this._updateIcon(this.element[0].checked);
    }, widget: function() {
      return this.label;
    }, _getRadioGroup: function() {
      var t2 = this.element[0].name, e2 = "input[name='" + V.escapeSelector(t2) + "']";
      return t2 ? (this.form.length ? V(this.form[0].elements).filter(e2) : V(e2).filter(function() {
        return 0 === V(this)._form().length;
      })).not(this.element) : V([]);
    }, _toggleClasses: function() {
      var t2 = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t2), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t2)._toggleClass(this.icon, null, "ui-icon-blank", !t2), "radio" === this.type && this._getRadioGroup().each(function() {
        var t3 = V(this).checkboxradio("instance");
        t3 && t3._removeClass(t3.label, "ui-checkboxradio-checked", "ui-state-active");
      });
    }, _destroy: function() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
    }, _setOption: function(t2, e2) {
      "label" === t2 && !e2 || (this._super(t2, e2), "disabled" === t2 ? (this._toggleClass(this.label, null, "ui-state-disabled", e2), this.element[0].disabled = e2) : this.refresh());
    }, _updateIcon: function(t2) {
      var e2 = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = V("<span>"), this.iconSpace = V("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e2 += t2 ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t2 ? "ui-icon-blank" : "ui-icon-check")) : e2 += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e2), t2 || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
    }, _updateLabel: function() {
      var t2 = this.label.contents().not(this.element[0]);
      this.icon && (t2 = t2.not(this.icon[0])), (t2 = this.iconSpace ? t2.not(this.iconSpace[0]) : t2).remove(), this.label.append(this.options.label);
    }, refresh: function() {
      var t2 = this.element[0].checked, e2 = this.element[0].disabled;
      this._updateIcon(t2), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t2), null !== this.options.label && this._updateLabel(), e2 !== this.options.disabled && this._setOptions({ disabled: e2 });
    } }]), V.ui.checkboxradio, V.widget("ui.button", { version: "1.13.3", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: true }, _getCreateOptions: function() {
      var t2, e2 = this._super() || {};
      return this.isInput = this.element.is("input"), null != (t2 = this.element[0].disabled) && (e2.disabled = t2), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e2.label = this.originalLabel), e2;
    }, _create: function() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = true), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || false), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(t2) {
        t2.keyCode === V.ui.keyCode.SPACE && (t2.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
      } });
    }, _enhance: function() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    }, _updateTooltip: function() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    }, _updateIcon: function(t2, e2) {
      var t2 = "iconPosition" !== t2, i2 = t2 ? this.options.iconPosition : e2, s2 = "top" === i2 || "bottom" === i2;
      this.icon ? t2 && this._removeClass(this.icon, null, this.options.icon) : (this.icon = V("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), t2 && this._addClass(this.icon, null, e2), this._attachIcon(i2), s2 ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = V("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(i2));
    }, _destroy: function() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
    }, _attachIconSpace: function(t2) {
      this.icon[/^(?:end|bottom)/.test(t2) ? "before" : "after"](this.iconSpace);
    }, _attachIcon: function(t2) {
      this.element[/^(?:end|bottom)/.test(t2) ? "append" : "prepend"](this.icon);
    }, _setOptions: function(t2) {
      var e2 = (void 0 === t2.showLabel ? this.options : t2).showLabel, i2 = (void 0 === t2.icon ? this.options : t2).icon;
      e2 || i2 || (t2.showLabel = true), this._super(t2);
    }, _setOption: function(t2, e2) {
      "icon" === t2 && (e2 ? this._updateIcon(t2, e2) : this.icon && (this.icon.remove(), this.iconSpace) && this.iconSpace.remove()), "iconPosition" === t2 && this._updateIcon(t2, e2), "showLabel" === t2 && (this._toggleClass("ui-button-icon-only", null, !e2), this._updateTooltip()), "label" === t2 && (this.isInput ? this.element.val(e2) : (this.element.html(e2), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t2, e2), "disabled" === t2 && (this._toggleClass(null, "ui-state-disabled", e2), this.element[0].disabled = e2) && this.element.trigger("blur");
    }, refresh: function() {
      var t2 = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t2 !== this.options.disabled && this._setOptions({ disabled: t2 }), this._updateTooltip();
    } }), false !== V.uiBackCompat && (V.widget("ui.button", V.ui.button, { options: { text: true, icons: { primary: null, secondary: null } }, _create: function() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
    }, _setOption: function(t2, e2) {
      "text" === t2 ? this._super("showLabel", e2) : ("showLabel" === t2 && (this.options.text = e2), "icon" === t2 && (this.options.icons.primary = e2), "icons" === t2 && (e2.primary ? (this._super("icon", e2.primary), this._super("iconPosition", "beginning")) : e2.secondary && (this._super("icon", e2.secondary), this._super("iconPosition", "end"))), this._superApply(arguments));
    } }), V.fn.button = (B = V.fn.button, function(i2) {
      var t2 = "string" == typeof i2, s2 = Array.prototype.slice.call(arguments, 1), n2 = this;
      return t2 ? this.length || "instance" !== i2 ? this.each(function() {
        var t3, e2 = V(this).attr("type"), e2 = V.data(this, "ui-" + ("checkbox" !== e2 && "radio" !== e2 ? "button" : "checkboxradio"));
        return "instance" === i2 ? (n2 = e2, false) : e2 ? "function" != typeof e2[i2] || "_" === i2.charAt(0) ? V.error("no such method '" + i2 + "' for button widget instance") : (t3 = e2[i2].apply(e2, s2)) !== e2 && void 0 !== t3 ? (n2 = t3 && t3.jquery ? n2.pushStack(t3.get()) : t3, false) : void 0 : V.error("cannot call methods on button prior to initialization; attempted to call method '" + i2 + "'");
      }) : n2 = void 0 : (s2.length && (i2 = V.widget.extend.apply(null, [i2].concat(s2))), this.each(function() {
        var t3 = V(this).attr("type"), t3 = "checkbox" !== t3 && "radio" !== t3 ? "button" : "checkboxradio", e2 = V.data(this, "ui-" + t3);
        e2 ? (e2.option(i2 || {}), e2._init && e2._init()) : "button" == t3 ? B.call(V(this), i2) : V(this).checkboxradio(V.extend({ icon: false }, i2));
      })), n2;
    }), V.fn.buttonset = function() {
      return V.ui.controlgroup || V.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments));
    }), V.ui.button;
    function q() {
      this._curInst = null, this._keyEvent = false, this._disabledInputs = [], this._datepickerShowing = false, this._inDialog = false, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: "", selectMonthLabel: "Select month", selectYearLabel: "Select year" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, onUpdateDatepicker: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false }, V.extend(this._defaults, this.regional[""]), this.regional.en = V.extend(true, {}, this.regional[""]), this.regional["en-US"] = V.extend(true, {}, this.regional.en), this.dpDiv = K(V("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function K(t2) {
      var e2 = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return t2.on("mouseout", e2, function() {
        V(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && V(this).removeClass("ui-datepicker-next-hover");
      }).on("mouseover", e2, U);
    }
    function U() {
      V.datepicker._isDisabledDatepicker((d.inline ? d.dpDiv.parent() : d.input)[0]) || (V(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), V(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && V(this).addClass("ui-datepicker-next-hover"));
    }
    function p(t2, e2) {
      for (var i2 in V.extend(t2, e2), e2) null == e2[i2] && (t2[i2] = e2[i2]);
    }
    V.extend(V.ui, { datepicker: { version: "1.13.3" } }), V.extend(q.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() {
      return this.dpDiv;
    }, setDefaults: function(t2) {
      return p(this._defaults, t2 || {}), this;
    }, _attachDatepicker: function(t2, e2) {
      var i2, s2 = t2.nodeName.toLowerCase(), n2 = "div" === s2 || "span" === s2;
      t2.id || (this.uuid += 1, t2.id = "dp" + this.uuid), (i2 = this._newInst(V(t2), n2)).settings = V.extend({}, e2 || {}), "input" === s2 ? this._connectDatepicker(t2, i2) : n2 && this._inlineDatepicker(t2, i2);
    }, _newInst: function(t2, e2) {
      return { id: t2[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: t2, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: e2, dpDiv: e2 ? K(V("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
    }, _connectDatepicker: function(t2, e2) {
      var i2 = V(t2);
      e2.append = V([]), e2.trigger = V([]), i2.hasClass(this.markerClassName) || (this._attachments(i2, e2), i2.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e2), V.data(t2, "datepicker", e2), e2.settings.disabled && this._disableDatepicker(t2));
    }, _attachments: function(t2, e2) {
      var i2, s2 = this._get(e2, "appendText"), n2 = this._get(e2, "isRTL");
      e2.append && e2.append.remove(), s2 && (e2.append = V("<span>").addClass(this._appendClass).text(s2), t2[n2 ? "before" : "after"](e2.append)), t2.off("focus", this._showDatepicker), e2.trigger && e2.trigger.remove(), "focus" !== (s2 = this._get(e2, "showOn")) && "both" !== s2 || t2.on("focus", this._showDatepicker), "button" !== s2 && "both" !== s2 || (s2 = this._get(e2, "buttonText"), i2 = this._get(e2, "buttonImage"), this._get(e2, "buttonImageOnly") ? e2.trigger = V("<img>").addClass(this._triggerClass).attr({ src: i2, alt: s2, title: s2 }) : (e2.trigger = V("<button type='button'>").addClass(this._triggerClass), i2 ? e2.trigger.html(V("<img>").attr({ src: i2, alt: s2, title: s2 })) : e2.trigger.text(s2)), t2[n2 ? "before" : "after"](e2.trigger), e2.trigger.on("click", function() {
        return V.datepicker._datepickerShowing && V.datepicker._lastInput === t2[0] ? V.datepicker._hideDatepicker() : (V.datepicker._datepickerShowing && V.datepicker._lastInput !== t2[0] && V.datepicker._hideDatepicker(), V.datepicker._showDatepicker(t2[0])), false;
      }));
    }, _autoSize: function(t2) {
      var e2, i2, s2, n2, o2, a2;
      this._get(t2, "autoSize") && !t2.inline && (o2 = new Date(2009, 11, 20), (a2 = this._get(t2, "dateFormat")).match(/[DM]/) && (o2.setMonth((e2 = function(t3) {
        for (n2 = s2 = i2 = 0; n2 < t3.length; n2++) t3[n2].length > i2 && (i2 = t3[n2].length, s2 = n2);
        return s2;
      })(this._get(t2, a2.match(/MM/) ? "monthNames" : "monthNamesShort"))), o2.setDate(e2(this._get(t2, a2.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o2.getDay())), t2.input.attr("size", this._formatDate(t2, o2).length));
    }, _inlineDatepicker: function(t2, e2) {
      var i2 = V(t2);
      i2.hasClass(this.markerClassName) || (i2.addClass(this.markerClassName).append(e2.dpDiv), V.data(t2, "datepicker", e2), this._setDate(e2, this._getDefaultDate(e2), true), this._updateDatepicker(e2), this._updateAlternate(e2), e2.settings.disabled && this._disableDatepicker(t2), e2.dpDiv.css("display", "block"));
    }, _dialogDatepicker: function(t2, e2, i2, s2, n2) {
      var o2, a2 = this._dialogInst;
      return a2 || (this.uuid += 1, o2 = "dp" + this.uuid, this._dialogInput = V("<input type='text' id='" + o2 + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), V("body").append(this._dialogInput), (a2 = this._dialogInst = this._newInst(this._dialogInput, false)).settings = {}, V.data(this._dialogInput[0], "datepicker", a2)), p(a2.settings, s2 || {}), e2 = e2 && e2.constructor === Date ? this._formatDate(a2, e2) : e2, this._dialogInput.val(e2), this._pos = n2 ? n2.length ? n2 : [n2.pageX, n2.pageY] : null, this._pos || (o2 = document.documentElement.clientWidth, s2 = document.documentElement.clientHeight, e2 = document.documentElement.scrollLeft || document.body.scrollLeft, n2 = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [o2 / 2 - 100 + e2, s2 / 2 - 150 + n2]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a2.settings.onSelect = i2, this._inDialog = true, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), V.blockUI && V.blockUI(this.dpDiv), V.data(this._dialogInput[0], "datepicker", a2), this;
    }, _destroyDatepicker: function(t2) {
      var e2, i2 = V(t2), s2 = V.data(t2, "datepicker");
      i2.hasClass(this.markerClassName) && (e2 = t2.nodeName.toLowerCase(), V.removeData(t2, "datepicker"), "input" === e2 ? (s2.append.remove(), s2.trigger.remove(), i2.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e2 && "span" !== e2 || i2.removeClass(this.markerClassName).empty(), d === s2) && (d = null, this._curInst = null);
    }, _enableDatepicker: function(e2) {
      var t2, i2 = V(e2), s2 = V.data(e2, "datepicker");
      i2.hasClass(this.markerClassName) && ("input" === (t2 = e2.nodeName.toLowerCase()) ? (e2.disabled = false, s2.trigger.filter("button").each(function() {
        this.disabled = false;
      }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : "div" !== t2 && "span" !== t2 || ((s2 = i2.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s2.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)), this._disabledInputs = V.map(this._disabledInputs, function(t3) {
        return t3 === e2 ? null : t3;
      }));
    }, _disableDatepicker: function(e2) {
      var t2, i2 = V(e2), s2 = V.data(e2, "datepicker");
      i2.hasClass(this.markerClassName) && ("input" === (t2 = e2.nodeName.toLowerCase()) ? (e2.disabled = true, s2.trigger.filter("button").each(function() {
        this.disabled = true;
      }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : "div" !== t2 && "span" !== t2 || ((s2 = i2.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s2.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)), this._disabledInputs = V.map(this._disabledInputs, function(t3) {
        return t3 === e2 ? null : t3;
      }), this._disabledInputs[this._disabledInputs.length] = e2);
    }, _isDisabledDatepicker: function(t2) {
      if (t2) {
        for (var e2 = 0; e2 < this._disabledInputs.length; e2++) if (this._disabledInputs[e2] === t2) return true;
      }
      return false;
    }, _getInst: function(t2) {
      try {
        return V.data(t2, "datepicker");
      } catch (t3) {
        throw "Missing instance data for this datepicker";
      }
    }, _optionDatepicker: function(t2, e2, i2) {
      var s2, n2, o2 = this._getInst(t2);
      if (2 === arguments.length && "string" == typeof e2) return "defaults" === e2 ? V.extend({}, V.datepicker._defaults) : o2 ? "all" === e2 ? V.extend({}, o2.settings) : this._get(o2, e2) : null;
      s2 = e2 || {}, "string" == typeof e2 && ((s2 = {})[e2] = i2), o2 && (this._curInst === o2 && this._hideDatepicker(), e2 = this._getDateDatepicker(t2, true), i2 = this._getMinMaxDate(o2, "min"), n2 = this._getMinMaxDate(o2, "max"), p(o2.settings, s2), null !== i2 && void 0 !== s2.dateFormat && void 0 === s2.minDate && (o2.settings.minDate = this._formatDate(o2, i2)), null !== n2 && void 0 !== s2.dateFormat && void 0 === s2.maxDate && (o2.settings.maxDate = this._formatDate(o2, n2)), "disabled" in s2 && (s2.disabled ? this._disableDatepicker(t2) : this._enableDatepicker(t2)), this._attachments(V(t2), o2), this._autoSize(o2), this._setDate(o2, e2), this._updateAlternate(o2), this._updateDatepicker(o2));
    }, _changeDatepicker: function(t2, e2, i2) {
      this._optionDatepicker(t2, e2, i2);
    }, _refreshDatepicker: function(t2) {
      t2 = this._getInst(t2);
      t2 && this._updateDatepicker(t2);
    }, _setDateDatepicker: function(t2, e2) {
      t2 = this._getInst(t2);
      t2 && (this._setDate(t2, e2), this._updateDatepicker(t2), this._updateAlternate(t2));
    }, _getDateDatepicker: function(t2, e2) {
      t2 = this._getInst(t2);
      return t2 && !t2.inline && this._setDateFromField(t2, e2), t2 ? this._getDate(t2) : null;
    }, _doKeyDown: function(t2) {
      var e2, i2, s2 = V.datepicker._getInst(t2.target), n2 = true, o2 = s2.dpDiv.is(".ui-datepicker-rtl");
      if (s2._keyEvent = true, V.datepicker._datepickerShowing) switch (t2.keyCode) {
        case 9:
          V.datepicker._hideDatepicker(), n2 = false;
          break;
        case 13:
          return (i2 = V("td." + V.datepicker._dayOverClass + ":not(." + V.datepicker._currentClass + ")", s2.dpDiv))[0] && V.datepicker._selectDay(t2.target, s2.selectedMonth, s2.selectedYear, i2[0]), (i2 = V.datepicker._get(s2, "onSelect")) ? (e2 = V.datepicker._formatDate(s2), i2.apply(s2.input ? s2.input[0] : null, [e2, s2])) : V.datepicker._hideDatepicker(), false;
        case 27:
          V.datepicker._hideDatepicker();
          break;
        case 33:
          V.datepicker._adjustDate(t2.target, t2.ctrlKey ? -V.datepicker._get(s2, "stepBigMonths") : -V.datepicker._get(s2, "stepMonths"), "M");
          break;
        case 34:
          V.datepicker._adjustDate(t2.target, t2.ctrlKey ? +V.datepicker._get(s2, "stepBigMonths") : +V.datepicker._get(s2, "stepMonths"), "M");
          break;
        case 35:
          (t2.ctrlKey || t2.metaKey) && V.datepicker._clearDate(t2.target), n2 = t2.ctrlKey || t2.metaKey;
          break;
        case 36:
          (t2.ctrlKey || t2.metaKey) && V.datepicker._gotoToday(t2.target), n2 = t2.ctrlKey || t2.metaKey;
          break;
        case 37:
          (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, o2 ? 1 : -1, "D"), n2 = t2.ctrlKey || t2.metaKey, t2.originalEvent.altKey && V.datepicker._adjustDate(t2.target, t2.ctrlKey ? -V.datepicker._get(s2, "stepBigMonths") : -V.datepicker._get(s2, "stepMonths"), "M");
          break;
        case 38:
          (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, -7, "D"), n2 = t2.ctrlKey || t2.metaKey;
          break;
        case 39:
          (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, o2 ? -1 : 1, "D"), n2 = t2.ctrlKey || t2.metaKey, t2.originalEvent.altKey && V.datepicker._adjustDate(t2.target, t2.ctrlKey ? +V.datepicker._get(s2, "stepBigMonths") : +V.datepicker._get(s2, "stepMonths"), "M");
          break;
        case 40:
          (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, 7, "D"), n2 = t2.ctrlKey || t2.metaKey;
          break;
        default:
          n2 = false;
      }
      else 36 === t2.keyCode && t2.ctrlKey ? V.datepicker._showDatepicker(this) : n2 = false;
      n2 && (t2.preventDefault(), t2.stopPropagation());
    }, _doKeyPress: function(t2) {
      var e2, i2 = V.datepicker._getInst(t2.target);
      if (V.datepicker._get(i2, "constrainInput")) return i2 = V.datepicker._possibleChars(V.datepicker._get(i2, "dateFormat")), e2 = String.fromCharCode(null == t2.charCode ? t2.keyCode : t2.charCode), t2.ctrlKey || t2.metaKey || e2 < " " || !i2 || -1 < i2.indexOf(e2);
    }, _doKeyUp: function(t2) {
      t2 = V.datepicker._getInst(t2.target);
      if (t2.input.val() !== t2.lastVal) try {
        V.datepicker.parseDate(V.datepicker._get(t2, "dateFormat"), t2.input ? t2.input.val() : null, V.datepicker._getFormatConfig(t2)) && (V.datepicker._setDateFromField(t2), V.datepicker._updateAlternate(t2), V.datepicker._updateDatepicker(t2));
      } catch (t3) {
      }
      return true;
    }, _showDatepicker: function(t2) {
      var e2, i2, s2, n2;
      "input" !== (t2 = t2.target || t2).nodeName.toLowerCase() && (t2 = V("input", t2.parentNode)[0]), V.datepicker._isDisabledDatepicker(t2) || V.datepicker._lastInput === t2 || (n2 = V.datepicker._getInst(t2), V.datepicker._curInst && V.datepicker._curInst !== n2 && (V.datepicker._curInst.dpDiv.stop(true, true), n2) && V.datepicker._datepickerShowing && V.datepicker._hideDatepicker(V.datepicker._curInst.input[0]), false === (i2 = (i2 = V.datepicker._get(n2, "beforeShow")) ? i2.apply(t2, [t2, n2]) : {})) || (p(n2.settings, i2), n2.lastVal = null, V.datepicker._lastInput = t2, V.datepicker._setDateFromField(n2), V.datepicker._inDialog && (t2.value = ""), V.datepicker._pos || (V.datepicker._pos = V.datepicker._findPos(t2), V.datepicker._pos[1] += t2.offsetHeight), e2 = false, V(t2).parents().each(function() {
        return !(e2 |= "fixed" === V(this).css("position"));
      }), i2 = { left: V.datepicker._pos[0], top: V.datepicker._pos[1] }, V.datepicker._pos = null, n2.dpDiv.empty(), n2.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), V.datepicker._updateDatepicker(n2), i2 = V.datepicker._checkOffset(n2, i2, e2), n2.dpDiv.css({ position: V.datepicker._inDialog && V.blockUI ? "static" : e2 ? "fixed" : "absolute", display: "none", left: i2.left + "px", top: i2.top + "px" }), n2.inline) || (i2 = V.datepicker._get(n2, "showAnim"), s2 = V.datepicker._get(n2, "duration"), n2.dpDiv.css("z-index", function(t3) {
        for (var e3; t3.length && t3[0] !== document; ) {
          if (("absolute" === (e3 = t3.css("position")) || "relative" === e3 || "fixed" === e3) && (e3 = parseInt(t3.css("zIndex"), 10), !isNaN(e3)) && 0 !== e3) return e3;
          t3 = t3.parent();
        }
        return 0;
      }(V(t2)) + 1), V.datepicker._datepickerShowing = true, V.effects && V.effects.effect[i2] ? n2.dpDiv.show(i2, V.datepicker._get(n2, "showOptions"), s2) : n2.dpDiv[i2 || "show"](i2 ? s2 : null), V.datepicker._shouldFocusInput(n2) && n2.input.trigger("focus"), V.datepicker._curInst = n2);
    }, _updateDatepicker: function(t2) {
      this.maxRows = 4, (d = t2).dpDiv.empty().append(this._generateHTML(t2)), this._attachHandlers(t2);
      var e2, i2 = this._getNumberOfMonths(t2), s2 = i2[1], n2 = t2.dpDiv.find("." + this._dayOverClass + " a"), o2 = V.datepicker._get(t2, "onUpdateDatepicker");
      0 < n2.length && U.apply(n2.get(0)), t2.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s2 && t2.dpDiv.addClass("ui-datepicker-multi-" + s2).css("width", 17 * s2 + "em"), t2.dpDiv[(1 !== i2[0] || 1 !== i2[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t2.dpDiv[(this._get(t2, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t2 === V.datepicker._curInst && V.datepicker._datepickerShowing && V.datepicker._shouldFocusInput(t2) && t2.input.trigger("focus"), t2.yearshtml && (e2 = t2.yearshtml, setTimeout(function() {
        e2 === t2.yearshtml && t2.yearshtml && t2.dpDiv.find("select.ui-datepicker-year").first().replaceWith(t2.yearshtml), e2 = t2.yearshtml = null;
      }, 0)), o2 && o2.apply(t2.input ? t2.input[0] : null, [t2]);
    }, _shouldFocusInput: function(t2) {
      return t2.input && t2.input.is(":visible") && !t2.input.is(":disabled") && !t2.input.is(":focus");
    }, _checkOffset: function(t2, e2, i2) {
      var s2 = t2.dpDiv.outerWidth(), n2 = t2.dpDiv.outerHeight(), o2 = t2.input ? t2.input.outerWidth() : 0, a2 = t2.input ? t2.input.outerHeight() : 0, r2 = document.documentElement.clientWidth + (i2 ? 0 : V(document).scrollLeft()), l2 = document.documentElement.clientHeight + (i2 ? 0 : V(document).scrollTop());
      return e2.left -= this._get(t2, "isRTL") ? s2 - o2 : 0, e2.left -= i2 && e2.left === t2.input.offset().left ? V(document).scrollLeft() : 0, e2.top -= i2 && e2.top === t2.input.offset().top + a2 ? V(document).scrollTop() : 0, e2.left -= Math.min(e2.left, e2.left + s2 > r2 && s2 < r2 ? Math.abs(e2.left + s2 - r2) : 0), e2.top -= Math.min(e2.top, e2.top + n2 > l2 && n2 < l2 ? Math.abs(n2 + a2) : 0), e2;
    }, _findPos: function(t2) {
      for (var e2 = this._getInst(t2), i2 = this._get(e2, "isRTL"); t2 && ("hidden" === t2.type || 1 !== t2.nodeType || V.expr.pseudos.hidden(t2)); ) t2 = t2[i2 ? "previousSibling" : "nextSibling"];
      return [(e2 = V(t2).offset()).left, e2.top];
    }, _hideDatepicker: function(t2) {
      var e2, i2, s2 = this._curInst;
      !s2 || t2 && s2 !== V.data(t2, "datepicker") || this._datepickerShowing && (t2 = this._get(s2, "showAnim"), i2 = this._get(s2, "duration"), e2 = function() {
        V.datepicker._tidyDialog(s2);
      }, V.effects && (V.effects.effect[t2] || V.effects[t2]) ? s2.dpDiv.hide(t2, V.datepicker._get(s2, "showOptions"), i2, e2) : s2.dpDiv["slideDown" === t2 ? "slideUp" : "fadeIn" === t2 ? "fadeOut" : "hide"](t2 ? i2 : null, e2), t2 || e2(), this._datepickerShowing = false, (i2 = this._get(s2, "onClose")) && i2.apply(s2.input ? s2.input[0] : null, [s2.input ? s2.input.val() : "", s2]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), V.blockUI) && (V.unblockUI(), V("body").append(this.dpDiv)), this._inDialog = false);
    }, _tidyDialog: function(t2) {
      t2.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    }, _checkExternalClick: function(t2) {
      var e2;
      V.datepicker._curInst && (t2 = V(t2.target), e2 = V.datepicker._getInst(t2[0]), !(t2[0].id === V.datepicker._mainDivId || 0 !== t2.parents("#" + V.datepicker._mainDivId).length || t2.hasClass(V.datepicker.markerClassName) || t2.closest("." + V.datepicker._triggerClass).length || !V.datepicker._datepickerShowing || V.datepicker._inDialog && V.blockUI) || t2.hasClass(V.datepicker.markerClassName) && V.datepicker._curInst !== e2) && V.datepicker._hideDatepicker();
    }, _adjustDate: function(t2, e2, i2) {
      var t2 = V(t2), s2 = this._getInst(t2[0]);
      this._isDisabledDatepicker(t2[0]) || (this._adjustInstDate(s2, e2, i2), this._updateDatepicker(s2));
    }, _gotoToday: function(t2) {
      var e2, t2 = V(t2), i2 = this._getInst(t2[0]);
      this._get(i2, "gotoCurrent") && i2.currentDay ? (i2.selectedDay = i2.currentDay, i2.drawMonth = i2.selectedMonth = i2.currentMonth, i2.drawYear = i2.selectedYear = i2.currentYear) : (e2 = /* @__PURE__ */ new Date(), i2.selectedDay = e2.getDate(), i2.drawMonth = i2.selectedMonth = e2.getMonth(), i2.drawYear = i2.selectedYear = e2.getFullYear()), this._notifyChange(i2), this._adjustDate(t2);
    }, _selectMonthYear: function(t2, e2, i2) {
      var t2 = V(t2), s2 = this._getInst(t2[0]);
      s2["selected" + ("M" === i2 ? "Month" : "Year")] = s2["draw" + ("M" === i2 ? "Month" : "Year")] = parseInt(e2.options[e2.selectedIndex].value, 10), this._notifyChange(s2), this._adjustDate(t2);
    }, _selectDay: function(t2, e2, i2, s2) {
      var n2 = V(t2);
      V(s2).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n2[0]) || ((n2 = this._getInst(n2[0])).selectedDay = n2.currentDay = parseInt(V("a", s2).attr("data-date")), n2.selectedMonth = n2.currentMonth = e2, n2.selectedYear = n2.currentYear = i2, this._selectDate(t2, this._formatDate(n2, n2.currentDay, n2.currentMonth, n2.currentYear)));
    }, _clearDate: function(t2) {
      t2 = V(t2);
      this._selectDate(t2, "");
    }, _selectDate: function(t2, e2) {
      var i2, t2 = V(t2), t2 = this._getInst(t2[0]);
      e2 = null != e2 ? e2 : this._formatDate(t2), t2.input && t2.input.val(e2), this._updateAlternate(t2), (i2 = this._get(t2, "onSelect")) ? i2.apply(t2.input ? t2.input[0] : null, [e2, t2]) : t2.input && t2.input.trigger("change"), t2.inline ? this._updateDatepicker(t2) : (this._hideDatepicker(), this._lastInput = t2.input[0], "object" != typeof t2.input[0] && t2.input.trigger("focus"), this._lastInput = null);
    }, _updateAlternate: function(t2) {
      var e2, i2, s2 = this._get(t2, "altField");
      s2 && (i2 = this._get(t2, "altFormat") || this._get(t2, "dateFormat"), e2 = this._getDate(t2), i2 = this.formatDate(i2, e2, this._getFormatConfig(t2)), V(document).find(s2).val(i2));
    }, noWeekends: function(t2) {
      t2 = t2.getDay();
      return [0 < t2 && t2 < 6, ""];
    }, iso8601Week: function(t2) {
      var e2, t2 = new Date(t2.getTime());
      return t2.setDate(t2.getDate() + 4 - (t2.getDay() || 7)), e2 = t2.getTime(), t2.setMonth(0), t2.setDate(1), Math.floor(Math.round((e2 - t2) / 864e5) / 7) + 1;
    }, parseDate: function(e2, n2, t2) {
      if (null == e2 || null == n2) throw "Invalid arguments";
      if ("" === (n2 = "object" == typeof n2 ? n2.toString() : n2 + "")) return null;
      for (var i2, s2, o2 = 0, a2 = (t2 ? t2.shortYearCutoff : null) || this._defaults.shortYearCutoff, a2 = "string" != typeof a2 ? a2 : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(a2, 10), r2 = (t2 ? t2.dayNamesShort : null) || this._defaults.dayNamesShort, l2 = (t2 ? t2.dayNames : null) || this._defaults.dayNames, h2 = (t2 ? t2.monthNamesShort : null) || this._defaults.monthNamesShort, c2 = (t2 ? t2.monthNames : null) || this._defaults.monthNames, u2 = -1, d2 = -1, p2 = -1, f2 = -1, g2 = false, m2 = function(t3) {
        t3 = y2 + 1 < e2.length && e2.charAt(y2 + 1) === t3;
        return t3 && y2++, t3;
      }, _2 = function(t3) {
        var e3 = m2(t3), e3 = "@" === t3 ? 14 : "!" === t3 ? 20 : "y" === t3 && e3 ? 4 : "o" === t3 ? 3 : 2, t3 = new RegExp("^\\d{" + ("y" === t3 ? e3 : 1) + "," + e3 + "}"), e3 = n2.substring(o2).match(t3);
        if (e3) return o2 += e3[0].length, parseInt(e3[0], 10);
        throw "Missing number at position " + o2;
      }, v2 = function(t3, e3, i3) {
        var s3 = -1, t3 = V.map(m2(t3) ? i3 : e3, function(t4, e4) {
          return [[e4, t4]];
        }).sort(function(t4, e4) {
          return -(t4[1].length - e4[1].length);
        });
        if (V.each(t3, function(t4, e4) {
          var i4 = e4[1];
          if (n2.substr(o2, i4.length).toLowerCase() === i4.toLowerCase()) return s3 = e4[0], o2 += i4.length, false;
        }), -1 !== s3) return s3 + 1;
        throw "Unknown name at position " + o2;
      }, b2 = function() {
        if (n2.charAt(o2) !== e2.charAt(y2)) throw "Unexpected literal at position " + o2;
        o2++;
      }, y2 = 0; y2 < e2.length; y2++) if (g2) "'" !== e2.charAt(y2) || m2("'") ? b2() : g2 = false;
      else switch (e2.charAt(y2)) {
        case "d":
          p2 = _2("d");
          break;
        case "D":
          v2("D", r2, l2);
          break;
        case "o":
          f2 = _2("o");
          break;
        case "m":
          d2 = _2("m");
          break;
        case "M":
          d2 = v2("M", h2, c2);
          break;
        case "y":
          u2 = _2("y");
          break;
        case "@":
          u2 = (s2 = new Date(_2("@"))).getFullYear(), d2 = s2.getMonth() + 1, p2 = s2.getDate();
          break;
        case "!":
          u2 = (s2 = new Date((_2("!") - this._ticksTo1970) / 1e4)).getFullYear(), d2 = s2.getMonth() + 1, p2 = s2.getDate();
          break;
        case "'":
          m2("'") ? b2() : g2 = true;
          break;
        default:
          b2();
      }
      if (o2 < n2.length && (t2 = n2.substr(o2), !/^\s+/.test(t2))) throw "Extra/unparsed characters found in date: " + t2;
      if (-1 === u2 ? u2 = (/* @__PURE__ */ new Date()).getFullYear() : u2 < 100 && (u2 += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (u2 <= a2 ? 0 : -100)), -1 < f2) for (d2 = 1, p2 = f2; ; ) {
        if (p2 <= (i2 = this._getDaysInMonth(u2, d2 - 1))) break;
        d2++, p2 -= i2;
      }
      if ((s2 = this._daylightSavingAdjust(new Date(u2, d2 - 1, p2))).getFullYear() !== u2 || s2.getMonth() + 1 !== d2 || s2.getDate() !== p2) throw "Invalid date";
      return s2;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7, formatDate: function(e2, t2, i2) {
      if (!t2) return "";
      function s2(t3, e3, i3) {
        var s3 = "" + e3;
        if (c2(t3)) for (; s3.length < i3; ) s3 = "0" + s3;
        return s3;
      }
      function n2(t3, e3, i3, s3) {
        return (c2(t3) ? s3 : i3)[e3];
      }
      var o2, a2 = (i2 ? i2.dayNamesShort : null) || this._defaults.dayNamesShort, r2 = (i2 ? i2.dayNames : null) || this._defaults.dayNames, l2 = (i2 ? i2.monthNamesShort : null) || this._defaults.monthNamesShort, h2 = (i2 ? i2.monthNames : null) || this._defaults.monthNames, c2 = function(t3) {
        t3 = o2 + 1 < e2.length && e2.charAt(o2 + 1) === t3;
        return t3 && o2++, t3;
      }, u2 = "", d2 = false;
      if (t2) for (o2 = 0; o2 < e2.length; o2++) if (d2) "'" !== e2.charAt(o2) || c2("'") ? u2 += e2.charAt(o2) : d2 = false;
      else switch (e2.charAt(o2)) {
        case "d":
          u2 += s2("d", t2.getDate(), 2);
          break;
        case "D":
          u2 += n2("D", t2.getDay(), a2, r2);
          break;
        case "o":
          u2 += s2("o", Math.round((new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime() - new Date(t2.getFullYear(), 0, 0).getTime()) / 864e5), 3);
          break;
        case "m":
          u2 += s2("m", t2.getMonth() + 1, 2);
          break;
        case "M":
          u2 += n2("M", t2.getMonth(), l2, h2);
          break;
        case "y":
          u2 += c2("y") ? t2.getFullYear() : (t2.getFullYear() % 100 < 10 ? "0" : "") + t2.getFullYear() % 100;
          break;
        case "@":
          u2 += t2.getTime();
          break;
        case "!":
          u2 += 1e4 * t2.getTime() + this._ticksTo1970;
          break;
        case "'":
          c2("'") ? u2 += "'" : d2 = true;
          break;
        default:
          u2 += e2.charAt(o2);
      }
      return u2;
    }, _possibleChars: function(e2) {
      for (var t2 = "", i2 = false, s2 = function(t3) {
        t3 = n2 + 1 < e2.length && e2.charAt(n2 + 1) === t3;
        return t3 && n2++, t3;
      }, n2 = 0; n2 < e2.length; n2++) if (i2) "'" !== e2.charAt(n2) || s2("'") ? t2 += e2.charAt(n2) : i2 = false;
      else switch (e2.charAt(n2)) {
        case "d":
        case "m":
        case "y":
        case "@":
          t2 += "0123456789";
          break;
        case "D":
        case "M":
          return null;
        case "'":
          s2("'") ? t2 += "'" : i2 = true;
          break;
        default:
          t2 += e2.charAt(n2);
      }
      return t2;
    }, _get: function(t2, e2) {
      return (void 0 !== t2.settings[e2] ? t2.settings : this._defaults)[e2];
    }, _setDateFromField: function(t2, e2) {
      if (t2.input.val() !== t2.lastVal) {
        var i2 = this._get(t2, "dateFormat"), s2 = t2.lastVal = t2.input ? t2.input.val() : null, n2 = this._getDefaultDate(t2), o2 = n2, a2 = this._getFormatConfig(t2);
        try {
          o2 = this.parseDate(i2, s2, a2) || n2;
        } catch (t3) {
          s2 = e2 ? "" : s2;
        }
        t2.selectedDay = o2.getDate(), t2.drawMonth = t2.selectedMonth = o2.getMonth(), t2.drawYear = t2.selectedYear = o2.getFullYear(), t2.currentDay = s2 ? o2.getDate() : 0, t2.currentMonth = s2 ? o2.getMonth() : 0, t2.currentYear = s2 ? o2.getFullYear() : 0, this._adjustInstDate(t2);
      }
    }, _getDefaultDate: function(t2) {
      return this._restrictMinMax(t2, this._determineDate(t2, this._get(t2, "defaultDate"), /* @__PURE__ */ new Date()));
    }, _determineDate: function(r2, t2, e2) {
      var i2, s2 = null == t2 || "" === t2 ? e2 : "string" == typeof t2 ? function(t3) {
        try {
          return V.datepicker.parseDate(V.datepicker._get(r2, "dateFormat"), t3, V.datepicker._getFormatConfig(r2));
        } catch (t4) {
        }
        for (var e3 = (t3.toLowerCase().match(/^c/) ? V.datepicker._getDate(r2) : null) || /* @__PURE__ */ new Date(), i3 = e3.getFullYear(), s3 = e3.getMonth(), n2 = e3.getDate(), o2 = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a2 = o2.exec(t3); a2; ) {
          switch (a2[2] || "d") {
            case "d":
            case "D":
              n2 += parseInt(a2[1], 10);
              break;
            case "w":
            case "W":
              n2 += 7 * parseInt(a2[1], 10);
              break;
            case "m":
            case "M":
              s3 += parseInt(a2[1], 10), n2 = Math.min(n2, V.datepicker._getDaysInMonth(i3, s3));
              break;
            case "y":
            case "Y":
              i3 += parseInt(a2[1], 10), n2 = Math.min(n2, V.datepicker._getDaysInMonth(i3, s3));
          }
          a2 = o2.exec(t3);
        }
        return new Date(i3, s3, n2);
      }(t2) : "number" == typeof t2 ? isNaN(t2) ? e2 : (s2 = t2, (i2 = /* @__PURE__ */ new Date()).setDate(i2.getDate() + s2), i2) : new Date(t2.getTime());
      return (s2 = s2 && "Invalid Date" === s2.toString() ? e2 : s2) && (s2.setHours(0), s2.setMinutes(0), s2.setSeconds(0), s2.setMilliseconds(0)), this._daylightSavingAdjust(s2);
    }, _daylightSavingAdjust: function(t2) {
      return t2 ? (t2.setHours(12 < t2.getHours() ? t2.getHours() + 2 : 0), t2) : null;
    }, _setDate: function(t2, e2, i2) {
      var s2 = !e2, n2 = t2.selectedMonth, o2 = t2.selectedYear, e2 = this._restrictMinMax(t2, this._determineDate(t2, e2, /* @__PURE__ */ new Date()));
      t2.selectedDay = t2.currentDay = e2.getDate(), t2.drawMonth = t2.selectedMonth = t2.currentMonth = e2.getMonth(), t2.drawYear = t2.selectedYear = t2.currentYear = e2.getFullYear(), n2 === t2.selectedMonth && o2 === t2.selectedYear || i2 || this._notifyChange(t2), this._adjustInstDate(t2), t2.input && t2.input.val(s2 ? "" : this._formatDate(t2));
    }, _getDate: function(t2) {
      return !t2.currentYear || t2.input && "" === t2.input.val() ? null : this._daylightSavingAdjust(new Date(t2.currentYear, t2.currentMonth, t2.currentDay));
    }, _attachHandlers: function(t2) {
      var e2 = this._get(t2, "stepMonths"), i2 = "#" + t2.id.replace(/\\\\/g, "\\");
      t2.dpDiv.find("[data-handler]").map(function() {
        var t3 = { prev: function() {
          V.datepicker._adjustDate(i2, -e2, "M");
        }, next: function() {
          V.datepicker._adjustDate(i2, +e2, "M");
        }, hide: function() {
          V.datepicker._hideDatepicker();
        }, today: function() {
          V.datepicker._gotoToday(i2);
        }, selectDay: function() {
          return V.datepicker._selectDay(i2, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), false;
        }, selectMonth: function() {
          return V.datepicker._selectMonthYear(i2, this, "M"), false;
        }, selectYear: function() {
          return V.datepicker._selectMonthYear(i2, this, "Y"), false;
        } };
        V(this).on(this.getAttribute("data-event"), t3[this.getAttribute("data-handler")]);
      });
    }, _generateHTML: function(t2) {
      var e2, i2, s2, n2, o2, E2, W2, F2, L2, a2, r2, R2, l2, h2, c2, u2, d2, p2, f2, g2, m2, _2, Y2, v2, b2, B2, y2, j2, q2, w2, x2, k2, C2 = /* @__PURE__ */ new Date(), K2 = this._daylightSavingAdjust(new Date(C2.getFullYear(), C2.getMonth(), C2.getDate())), D2 = this._get(t2, "isRTL"), C2 = this._get(t2, "showButtonPanel"), I2 = this._get(t2, "hideIfNoPrevNext"), T2 = this._get(t2, "navigationAsDateFormat"), P2 = this._getNumberOfMonths(t2), M2 = this._get(t2, "showCurrentAtPos"), S2 = this._get(t2, "stepMonths"), U2 = 1 !== P2[0] || 1 !== P2[1], H2 = this._daylightSavingAdjust(t2.currentDay ? new Date(t2.currentYear, t2.currentMonth, t2.currentDay) : new Date(9999, 9, 9)), z2 = this._getMinMaxDate(t2, "min"), A2 = this._getMinMaxDate(t2, "max"), O2 = t2.drawMonth - M2, N2 = t2.drawYear;
      if (O2 < 0 && (O2 += 12, N2--), A2) for (e2 = this._daylightSavingAdjust(new Date(A2.getFullYear(), A2.getMonth() - P2[0] * P2[1] + 1, A2.getDate())), e2 = z2 && e2 < z2 ? z2 : e2; this._daylightSavingAdjust(new Date(N2, O2, 1)) > e2; ) --O2 < 0 && (O2 = 11, N2--);
      for (t2.drawMonth = O2, t2.drawYear = N2, M2 = this._get(t2, "prevText"), M2 = T2 ? this.formatDate(M2, this._daylightSavingAdjust(new Date(N2, O2 - S2, 1)), this._getFormatConfig(t2)) : M2, i2 = this._canAdjustMonth(t2, -1, N2, O2) ? V("<a>").attr({ class: "ui-datepicker-prev ui-corner-all", "data-handler": "prev", "data-event": "click", title: M2 }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (D2 ? "e" : "w")).text(M2))[0].outerHTML : I2 ? "" : V("<a>").attr({ class: "ui-datepicker-prev ui-corner-all ui-state-disabled", title: M2 }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (D2 ? "e" : "w")).text(M2))[0].outerHTML, M2 = this._get(t2, "nextText"), M2 = T2 ? this.formatDate(M2, this._daylightSavingAdjust(new Date(N2, O2 + S2, 1)), this._getFormatConfig(t2)) : M2, s2 = this._canAdjustMonth(t2, 1, N2, O2) ? V("<a>").attr({ class: "ui-datepicker-next ui-corner-all", "data-handler": "next", "data-event": "click", title: M2 }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (D2 ? "w" : "e")).text(M2))[0].outerHTML : I2 ? "" : V("<a>").attr({ class: "ui-datepicker-next ui-corner-all ui-state-disabled", title: M2 }).append(V("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (D2 ? "w" : "e")).text(M2))[0].outerHTML, S2 = this._get(t2, "currentText"), I2 = this._get(t2, "gotoCurrent") && t2.currentDay ? H2 : K2, S2 = T2 ? this.formatDate(S2, I2, this._getFormatConfig(t2)) : S2, M2 = "", t2.inline || (M2 = V("<button>").attr({ type: "button", class: "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all", "data-handler": "hide", "data-event": "click" }).text(this._get(t2, "closeText"))[0].outerHTML), T2 = "", C2 && (T2 = V("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(D2 ? M2 : "").append(this._isInRange(t2, I2) ? V("<button>").attr({ type: "button", class: "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all", "data-handler": "today", "data-event": "click" }).text(S2) : "").append(D2 ? "" : M2)[0].outerHTML), n2 = parseInt(this._get(t2, "firstDay"), 10), n2 = isNaN(n2) ? 0 : n2, o2 = this._get(t2, "showWeek"), E2 = this._get(t2, "dayNames"), W2 = this._get(t2, "dayNamesMin"), F2 = this._get(t2, "monthNames"), L2 = this._get(t2, "monthNamesShort"), a2 = this._get(t2, "beforeShowDay"), r2 = this._get(t2, "showOtherMonths"), R2 = this._get(t2, "selectOtherMonths"), l2 = this._getDefaultDate(t2), h2 = "", u2 = 0; u2 < P2[0]; u2++) {
        for (d2 = "", this.maxRows = 4, p2 = 0; p2 < P2[1]; p2++) {
          if (f2 = this._daylightSavingAdjust(new Date(N2, O2, t2.selectedDay)), g2 = " ui-corner-all", m2 = "", U2) {
            if (m2 += "<div class='ui-datepicker-group", 1 < P2[1]) switch (p2) {
              case 0:
                m2 += " ui-datepicker-group-first", g2 = " ui-corner-" + (D2 ? "right" : "left");
                break;
              case P2[1] - 1:
                m2 += " ui-datepicker-group-last", g2 = " ui-corner-" + (D2 ? "left" : "right");
                break;
              default:
                m2 += " ui-datepicker-group-middle", g2 = "";
            }
            m2 += "'>";
          }
          for (m2 += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + g2 + "'>" + (/all|left/.test(g2) && 0 === u2 ? D2 ? s2 : i2 : "") + (/all|right/.test(g2) && 0 === u2 ? D2 ? i2 : s2 : "") + this._generateMonthYearHeader(t2, O2, N2, z2, A2, 0 < u2 || 0 < p2, F2, L2) + "</div><table class='ui-datepicker-calendar'><thead><tr>", _2 = o2 ? "<th class='ui-datepicker-week-col'>" + this._get(t2, "weekHeader") + "</th>" : "", c2 = 0; c2 < 7; c2++) _2 += "<th scope='col'" + (5 <= (c2 + n2 + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + E2[Y2 = (c2 + n2) % 7] + "'>" + W2[Y2] + "</span></th>";
          for (m2 += _2 + "</tr></thead><tbody>", b2 = this._getDaysInMonth(N2, O2), N2 === t2.selectedYear && O2 === t2.selectedMonth && (t2.selectedDay = Math.min(t2.selectedDay, b2)), v2 = (this._getFirstDayOfMonth(N2, O2) - n2 + 7) % 7, b2 = Math.ceil((v2 + b2) / 7), B2 = U2 && this.maxRows > b2 ? this.maxRows : b2, this.maxRows = B2, y2 = this._daylightSavingAdjust(new Date(N2, O2, 1 - v2)), j2 = 0; j2 < B2; j2++) {
            for (m2 += "<tr>", q2 = o2 ? "<td class='ui-datepicker-week-col'>" + this._get(t2, "calculateWeek")(y2) + "</td>" : "", c2 = 0; c2 < 7; c2++) w2 = a2 ? a2.apply(t2.input ? t2.input[0] : null, [y2]) : [true, ""], k2 = (x2 = y2.getMonth() !== O2) && !R2 || !w2[0] || z2 && y2 < z2 || A2 && A2 < y2, q2 += "<td class='" + (5 <= (c2 + n2 + 6) % 7 ? " ui-datepicker-week-end" : "") + (x2 ? " ui-datepicker-other-month" : "") + (y2.getTime() === f2.getTime() && O2 === t2.selectedMonth && t2._keyEvent || l2.getTime() === y2.getTime() && l2.getTime() === f2.getTime() ? " " + this._dayOverClass : "") + (k2 ? " " + this._unselectableClass + " ui-state-disabled" : "") + (x2 && !r2 ? "" : " " + w2[1] + (y2.getTime() === H2.getTime() ? " " + this._currentClass : "") + (y2.getTime() === K2.getTime() ? " ui-datepicker-today" : "")) + "'" + (x2 && !r2 || !w2[2] ? "" : " title='" + w2[2].replace(/'/g, "&#39;") + "'") + (k2 ? "" : " data-handler='selectDay' data-event='click' data-month='" + y2.getMonth() + "' data-year='" + y2.getFullYear() + "'") + ">" + (x2 && !r2 ? "&#xa0;" : k2 ? "<span class='ui-state-default'>" + y2.getDate() + "</span>" : "<a class='ui-state-default" + (y2.getTime() === K2.getTime() ? " ui-state-highlight" : "") + (y2.getTime() === H2.getTime() ? " ui-state-active" : "") + (x2 ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (y2.getTime() === H2.getTime() ? "true" : "false") + "' data-date='" + y2.getDate() + "'>" + y2.getDate() + "</a>") + "</td>", y2.setDate(y2.getDate() + 1), y2 = this._daylightSavingAdjust(y2);
            m2 += q2 + "</tr>";
          }
          11 < ++O2 && (O2 = 0, N2++), d2 += m2 += "</tbody></table>" + (U2 ? "</div>" + (0 < P2[0] && p2 === P2[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
        }
        h2 += d2;
      }
      return h2 += T2, t2._keyEvent = false, h2;
    }, _generateMonthYearHeader: function(t2, e2, i2, s2, n2, o2, a2, r2) {
      var l2, h2, c2, u2, d2, p2, f2 = this._get(t2, "changeMonth"), g2 = this._get(t2, "changeYear"), m2 = this._get(t2, "showMonthAfterYear"), _2 = this._get(t2, "selectMonthLabel"), v2 = this._get(t2, "selectYearLabel"), b2 = "<div class='ui-datepicker-title'>", y2 = "";
      if (o2 || !f2) y2 += "<span class='ui-datepicker-month'>" + a2[e2] + "</span>";
      else {
        for (l2 = s2 && s2.getFullYear() === i2, h2 = n2 && n2.getFullYear() === i2, y2 += "<select class='ui-datepicker-month' aria-label='" + _2 + "' data-handler='selectMonth' data-event='change'>", c2 = 0; c2 < 12; c2++) (!l2 || c2 >= s2.getMonth()) && (!h2 || c2 <= n2.getMonth()) && (y2 += "<option value='" + c2 + "'" + (c2 === e2 ? " selected='selected'" : "") + ">" + r2[c2] + "</option>");
        y2 += "</select>";
      }
      if (m2 || (b2 += y2 + (!o2 && f2 && g2 ? "" : "&#xa0;")), !t2.yearshtml) if (t2.yearshtml = "", o2 || !g2) b2 += "<span class='ui-datepicker-year'>" + i2 + "</span>";
      else {
        for (a2 = this._get(t2, "yearRange").split(":"), u2 = (/* @__PURE__ */ new Date()).getFullYear(), d2 = (_2 = function(t3) {
          t3 = t3.match(/c[+\-].*/) ? i2 + parseInt(t3.substring(1), 10) : t3.match(/[+\-].*/) ? u2 + parseInt(t3, 10) : parseInt(t3, 10);
          return isNaN(t3) ? u2 : t3;
        })(a2[0]), p2 = Math.max(d2, _2(a2[1] || "")), d2 = s2 ? Math.max(d2, s2.getFullYear()) : d2, p2 = n2 ? Math.min(p2, n2.getFullYear()) : p2, t2.yearshtml += "<select class='ui-datepicker-year' aria-label='" + v2 + "' data-handler='selectYear' data-event='change'>"; d2 <= p2; d2++) t2.yearshtml += "<option value='" + d2 + "'" + (d2 === i2 ? " selected='selected'" : "") + ">" + d2 + "</option>";
        t2.yearshtml += "</select>", b2 += t2.yearshtml, t2.yearshtml = null;
      }
      return b2 += this._get(t2, "yearSuffix"), m2 && (b2 += (!o2 && f2 && g2 ? "" : "&#xa0;") + y2), b2 += "</div>";
    }, _adjustInstDate: function(t2, e2, i2) {
      var s2 = t2.selectedYear + ("Y" === i2 ? e2 : 0), n2 = t2.selectedMonth + ("M" === i2 ? e2 : 0), e2 = Math.min(t2.selectedDay, this._getDaysInMonth(s2, n2)) + ("D" === i2 ? e2 : 0), s2 = this._restrictMinMax(t2, this._daylightSavingAdjust(new Date(s2, n2, e2)));
      t2.selectedDay = s2.getDate(), t2.drawMonth = t2.selectedMonth = s2.getMonth(), t2.drawYear = t2.selectedYear = s2.getFullYear(), "M" !== i2 && "Y" !== i2 || this._notifyChange(t2);
    }, _restrictMinMax: function(t2, e2) {
      var i2 = this._getMinMaxDate(t2, "min"), t2 = this._getMinMaxDate(t2, "max"), i2 = i2 && e2 < i2 ? i2 : e2;
      return t2 && t2 < i2 ? t2 : i2;
    }, _notifyChange: function(t2) {
      var e2 = this._get(t2, "onChangeMonthYear");
      e2 && e2.apply(t2.input ? t2.input[0] : null, [t2.selectedYear, t2.selectedMonth + 1, t2]);
    }, _getNumberOfMonths: function(t2) {
      t2 = this._get(t2, "numberOfMonths");
      return null == t2 ? [1, 1] : "number" == typeof t2 ? [1, t2] : t2;
    }, _getMinMaxDate: function(t2, e2) {
      return this._determineDate(t2, this._get(t2, e2 + "Date"), null);
    }, _getDaysInMonth: function(t2, e2) {
      return 32 - this._daylightSavingAdjust(new Date(t2, e2, 32)).getDate();
    }, _getFirstDayOfMonth: function(t2, e2) {
      return new Date(t2, e2, 1).getDay();
    }, _canAdjustMonth: function(t2, e2, i2, s2) {
      var n2 = this._getNumberOfMonths(t2), i2 = this._daylightSavingAdjust(new Date(i2, s2 + (e2 < 0 ? e2 : n2[0] * n2[1]), 1));
      return e2 < 0 && i2.setDate(this._getDaysInMonth(i2.getFullYear(), i2.getMonth())), this._isInRange(t2, i2);
    }, _isInRange: function(t2, e2) {
      var i2, s2 = this._getMinMaxDate(t2, "min"), n2 = this._getMinMaxDate(t2, "max"), o2 = null, a2 = null, t2 = this._get(t2, "yearRange");
      return t2 && (t2 = t2.split(":"), i2 = (/* @__PURE__ */ new Date()).getFullYear(), o2 = parseInt(t2[0], 10), a2 = parseInt(t2[1], 10), t2[0].match(/[+\-].*/) && (o2 += i2), t2[1].match(/[+\-].*/)) && (a2 += i2), (!s2 || e2.getTime() >= s2.getTime()) && (!n2 || e2.getTime() <= n2.getTime()) && (!o2 || e2.getFullYear() >= o2) && (!a2 || e2.getFullYear() <= a2);
    }, _getFormatConfig: function(t2) {
      var e2 = this._get(t2, "shortYearCutoff");
      return { shortYearCutoff: "string" != typeof e2 ? e2 : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(e2, 10), dayNamesShort: this._get(t2, "dayNamesShort"), dayNames: this._get(t2, "dayNames"), monthNamesShort: this._get(t2, "monthNamesShort"), monthNames: this._get(t2, "monthNames") };
    }, _formatDate: function(t2, e2, i2, s2) {
      e2 || (t2.currentDay = t2.selectedDay, t2.currentMonth = t2.selectedMonth, t2.currentYear = t2.selectedYear);
      s2 = e2 ? "object" == typeof e2 ? e2 : this._daylightSavingAdjust(new Date(s2, i2, e2)) : this._daylightSavingAdjust(new Date(t2.currentYear, t2.currentMonth, t2.currentDay));
      return this.formatDate(this._get(t2, "dateFormat"), s2, this._getFormatConfig(t2));
    } }), V.fn.datepicker = function(t2) {
      if (!this.length) return this;
      V.datepicker.initialized || (V(document).on("mousedown", V.datepicker._checkExternalClick), V.datepicker.initialized = true), 0 === V("#" + V.datepicker._mainDivId).length && V("body").append(V.datepicker.dpDiv);
      var e2 = Array.prototype.slice.call(arguments, 1);
      return "string" == typeof t2 && ("isDisabled" === t2 || "getDate" === t2 || "widget" === t2) || "option" === t2 && 2 === arguments.length && "string" == typeof arguments[1] ? V.datepicker["_" + t2 + "Datepicker"].apply(V.datepicker, [this[0]].concat(e2)) : this.each(function() {
        "string" == typeof t2 ? V.datepicker["_" + t2 + "Datepicker"].apply(V.datepicker, [this].concat(e2)) : V.datepicker._attachDatepicker(this, t2);
      });
    }, V.datepicker = new q(), V.datepicker.initialized = false, V.datepicker.uuid = (/* @__PURE__ */ new Date()).getTime(), V.datepicker.version = "1.13.3";
    V.datepicker, V.widget("ui.dialog", { version: "1.13.3", options: { appendTo: "body", autoOpen: true, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: true, closeText: "Close", draggable: true, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: false, position: { my: "center", at: "center", of: window, collision: "fit", using: function(t2) {
      var e2 = V(this).css(t2).offset().top;
      e2 < 0 && V(this).css("top", t2.top - e2);
    } }, resizable: true, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, resizableRelatedOptions: { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }, _create: function() {
      this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = false), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && V.fn.draggable && this._makeDraggable(), this.options.resizable && V.fn.resizable && this._makeResizable(), this._isOpen = false, this._trackFocus();
    }, _init: function() {
      this.options.autoOpen && this.open();
    }, _appendTo: function() {
      var t2 = this.options.appendTo;
      return t2 && (t2.jquery || t2.nodeType) ? V(t2) : this.document.find(t2 || "body").eq(0);
    }, _destroy: function() {
      var t2, e2 = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t2 = e2.parent.children().eq(e2.index)).length && t2[0] !== this.element[0] ? t2.before(this.element) : e2.parent.append(this.element);
    }, widget: function() {
      return this.uiDialog;
    }, disable: V.noop, enable: V.noop, close: function(t2) {
      var e2 = this;
      this._isOpen && false !== this._trigger("beforeClose", t2) && (this._isOpen = false, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || V.ui.safeBlur(V.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
        e2._trigger("close", t2);
      }));
    }, isOpen: function() {
      return this._isOpen;
    }, moveToTop: function() {
      this._moveToTop();
    }, _moveToTop: function(t2, e2) {
      var i2 = false, s2 = this.uiDialog.siblings(".ui-front:visible").map(function() {
        return +V(this).css("z-index");
      }).get(), s2 = Math.max.apply(null, s2);
      return s2 >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s2 + 1), i2 = true), i2 && !e2 && this._trigger("focus", t2), i2;
    }, open: function() {
      var t2 = this;
      this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = true, this.opener = V(V.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, true), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
        t2._focusTabbable(), t2._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"));
    }, _focusTabbable: function() {
      var t2 = this._focusedElement;
      (t2 = (t2 = (t2 = (t2 = (t2 = t2 || this.element.find("[autofocus]")).length ? t2 : this.element.find(":tabbable")).length ? t2 : this.uiDialogButtonPane.find(":tabbable")).length ? t2 : this.uiDialogTitlebarClose.filter(":tabbable")).length ? t2 : this.uiDialog).eq(0).trigger("focus");
    }, _restoreTabbableFocus: function() {
      var t2 = V.ui.safeActiveElement(this.document[0]);
      this.uiDialog[0] === t2 || V.contains(this.uiDialog[0], t2) || this._focusTabbable();
    }, _keepFocus: function(t2) {
      t2.preventDefault(), this._restoreTabbableFocus(), this._delay(this._restoreTabbableFocus);
    }, _createWrapper: function() {
      this.uiDialog = V("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, { keydown: function(t2) {
        var e2, i2, s2;
        this.options.closeOnEscape && !t2.isDefaultPrevented() && t2.keyCode && t2.keyCode === V.ui.keyCode.ESCAPE ? (t2.preventDefault(), this.close(t2)) : t2.keyCode !== V.ui.keyCode.TAB || t2.isDefaultPrevented() || (e2 = this.uiDialog.find(":tabbable"), i2 = e2.first(), s2 = e2.last(), t2.target !== s2[0] && t2.target !== this.uiDialog[0] || t2.shiftKey ? t2.target !== i2[0] && t2.target !== this.uiDialog[0] || !t2.shiftKey || (this._delay(function() {
          s2.trigger("focus");
        }), t2.preventDefault()) : (this._delay(function() {
          i2.trigger("focus");
        }), t2.preventDefault()));
      }, mousedown: function(t2) {
        this._moveToTop(t2) && this._focusTabbable();
      } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
    }, _createTitlebar: function() {
      var t2;
      this.uiDialogTitlebar = V("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(t3) {
        V(t3.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
      } }), this.uiDialogTitlebarClose = V("<button type='button'></button>").button({ label: V("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: false }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t3) {
        t3.preventDefault(), this.close(t3);
      } }), t2 = V("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t2, "ui-dialog-title"), this._title(t2), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": t2.attr("id") });
    }, _title: function(t2) {
      this.options.title ? t2.text(this.options.title) : t2.html("&#160;");
    }, _createButtonPane: function() {
      this.uiDialogButtonPane = V("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = V("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
    }, _createButtons: function() {
      var s2 = this, t2 = this.options.buttons;
      this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), V.isEmptyObject(t2) || Array.isArray(t2) && !t2.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (V.each(t2, function(t3, e2) {
        var i2;
        e2 = V.extend({ type: "button" }, e2 = "function" == typeof e2 ? { click: e2, text: t3 } : e2), i2 = e2.click, t3 = { icon: e2.icon, iconPosition: e2.iconPosition, showLabel: e2.showLabel, icons: e2.icons, text: e2.text }, delete e2.click, delete e2.icon, delete e2.iconPosition, delete e2.showLabel, delete e2.icons, "boolean" == typeof e2.text && delete e2.text, V("<button></button>", e2).button(t3).appendTo(s2.uiButtonSet).on("click", function() {
          i2.apply(s2.element[0], arguments);
        });
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog));
    }, _makeDraggable: function() {
      var n2 = this, o2 = this.options;
      function a2(t2) {
        return { position: t2.position, offset: t2.offset };
      }
      this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(t2, e2) {
        n2._addClass(V(this), "ui-dialog-dragging"), n2._blockFrames(), n2._trigger("dragStart", t2, a2(e2));
      }, drag: function(t2, e2) {
        n2._trigger("drag", t2, a2(e2));
      }, stop: function(t2, e2) {
        var i2 = e2.offset.left - n2.document.scrollLeft(), s2 = e2.offset.top - n2.document.scrollTop();
        o2.position = { my: "left top", at: "left" + (0 <= i2 ? "+" : "") + i2 + " top" + (0 <= s2 ? "+" : "") + s2, of: n2.window }, n2._removeClass(V(this), "ui-dialog-dragging"), n2._unblockFrames(), n2._trigger("dragStop", t2, a2(e2));
      } });
    }, _makeResizable: function() {
      var n2 = this, o2 = this.options, t2 = o2.resizable, e2 = this.uiDialog.css("position"), t2 = "string" == typeof t2 ? t2 : "n,e,s,w,se,sw,ne,nw";
      function a2(t3) {
        return { originalPosition: t3.originalPosition, originalSize: t3.originalSize, position: t3.position, size: t3.size };
      }
      this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: o2.maxWidth, maxHeight: o2.maxHeight, minWidth: o2.minWidth, minHeight: this._minHeight(), handles: t2, start: function(t3, e3) {
        n2._addClass(V(this), "ui-dialog-resizing"), n2._blockFrames(), n2._trigger("resizeStart", t3, a2(e3));
      }, resize: function(t3, e3) {
        n2._trigger("resize", t3, a2(e3));
      }, stop: function(t3, e3) {
        var i2 = n2.uiDialog.offset(), s2 = i2.left - n2.document.scrollLeft(), i2 = i2.top - n2.document.scrollTop();
        o2.height = n2.uiDialog.height(), o2.width = n2.uiDialog.width(), o2.position = { my: "left top", at: "left" + (0 <= s2 ? "+" : "") + s2 + " top" + (0 <= i2 ? "+" : "") + i2, of: n2.window }, n2._removeClass(V(this), "ui-dialog-resizing"), n2._unblockFrames(), n2._trigger("resizeStop", t3, a2(e3));
      } }).css("position", e2);
    }, _trackFocus: function() {
      this._on(this.widget(), { focusin: function(t2) {
        this._makeFocusTarget(), this._focusedElement = V(t2.target);
      } });
    }, _makeFocusTarget: function() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    }, _untrackInstance: function() {
      var t2 = this._trackingInstances(), e2 = V.inArray(this, t2);
      -1 !== e2 && t2.splice(e2, 1);
    }, _trackingInstances: function() {
      var t2 = this.document.data("ui-dialog-instances");
      return t2 || this.document.data("ui-dialog-instances", t2 = []), t2;
    }, _minHeight: function() {
      var t2 = this.options;
      return "auto" === t2.height ? t2.minHeight : Math.min(t2.minHeight, t2.height);
    }, _position: function() {
      var t2 = this.uiDialog.is(":visible");
      t2 || this.uiDialog.show(), this.uiDialog.position(this.options.position), t2 || this.uiDialog.hide();
    }, _setOptions: function(t2) {
      var i2 = this, s2 = false, n2 = {};
      V.each(t2, function(t3, e2) {
        i2._setOption(t3, e2), t3 in i2.sizeRelatedOptions && (s2 = true), t3 in i2.resizableRelatedOptions && (n2[t3] = e2);
      }), s2 && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n2);
    }, _setOption: function(t2, e2) {
      var i2, s2 = this.uiDialog;
      "disabled" !== t2 && (this._super(t2, e2), "appendTo" === t2 && this.uiDialog.appendTo(this._appendTo()), "buttons" === t2 && this._createButtons(), "closeText" === t2 && this.uiDialogTitlebarClose.button({ label: V("<a>").text("" + this.options.closeText).html() }), "draggable" === t2 && ((i2 = s2.is(":data(ui-draggable)")) && !e2 && s2.draggable("destroy"), !i2) && e2 && this._makeDraggable(), "position" === t2 && this._position(), "resizable" === t2 && ((i2 = s2.is(":data(ui-resizable)")) && !e2 && s2.resizable("destroy"), i2 && "string" == typeof e2 && s2.resizable("option", "handles", e2), i2 || false === e2 || this._makeResizable()), "title" === t2) && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
    }, _size: function() {
      var t2, e2, i2, s2 = this.options;
      this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s2.minWidth > s2.width && (s2.width = s2.minWidth), t2 = this.uiDialog.css({ height: "auto", width: s2.width }).outerHeight(), e2 = Math.max(0, s2.minHeight - t2), i2 = "number" == typeof s2.maxHeight ? Math.max(0, s2.maxHeight - t2) : "none", "auto" === s2.height ? this.element.css({ minHeight: e2, maxHeight: i2, height: "auto" }) : this.element.height(Math.max(0, s2.height - t2)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }, _blockFrames: function() {
      this.iframeBlocks = this.document.find("iframe").map(function() {
        var t2 = V(this);
        return V("<div>").css({ position: "absolute", width: t2.outerWidth(), height: t2.outerHeight() }).appendTo(t2.parent()).offset(t2.offset())[0];
      });
    }, _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _allowInteraction: function(t2) {
      return !!V(t2.target).closest(".ui-dialog").length || !!V(t2.target).closest(".ui-datepicker").length;
    }, _createOverlay: function() {
      var i2, s2;
      this.options.modal && (i2 = V.fn.jquery.substring(0, 4), s2 = true, this._delay(function() {
        s2 = false;
      }), this.document.data("ui-dialog-overlays") || this.document.on("focusin.ui-dialog", (function(t2) {
        var e2;
        s2 || (e2 = this._trackingInstances()[0])._allowInteraction(t2) || (t2.preventDefault(), e2._focusTabbable(), "3.4." !== i2 && "3.5." !== i2 && "3.6." !== i2) || e2._delay(e2._restoreTabbableFocus);
      }).bind(this)), this.overlay = V("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1));
    }, _destroyOverlay: function() {
      var t2;
      this.options.modal && this.overlay && ((t2 = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t2) : (this.document.off("focusin.ui-dialog"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null);
    } }), false !== V.uiBackCompat && V.widget("ui.dialog", V.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    }, _setOption: function(t2, e2) {
      "dialogClass" === t2 && this.uiDialog.removeClass(this.options.dialogClass).addClass(e2), this._superApply(arguments);
    } }), V.ui.dialog, V.widget("ui.progressbar", { version: "1.13.3", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = V("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
    }, _destroy: function() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
    }, value: function(t2) {
      if (void 0 === t2) return this.options.value;
      this.options.value = this._constrainedValue(t2), this._refreshValue();
    }, _constrainedValue: function(t2) {
      return void 0 === t2 && (t2 = this.options.value), this.indeterminate = false === t2, "number" != typeof t2 && (t2 = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t2));
    }, _setOptions: function(t2) {
      var e2 = t2.value;
      delete t2.value, this._super(t2), this.options.value = this._constrainedValue(e2), this._refreshValue();
    }, _setOption: function(t2, e2) {
      "max" === t2 && (e2 = Math.max(this.min, e2)), this._super(t2, e2);
    }, _setOptionDisabled: function(t2) {
      this._super(t2), this.element.attr("aria-disabled", t2), this._toggleClass(null, "ui-state-disabled", !!t2);
    }, _percentage: function() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, _refreshValue: function() {
      var t2 = this.options.value, e2 = this._percentage();
      this.valueDiv.toggle(this.indeterminate || t2 > this.min).width(e2.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t2 === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = V("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t2 }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t2 && (this.oldValue = t2, this._trigger("change")), t2 === this.options.max && this._trigger("complete");
    } }), V.widget("ui.selectmenu", [V.ui.formResetMixin, { version: "1.13.3", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: false, change: null, close: null, focus: null, open: null, select: null }, _create: function() {
      var t2 = this.element.uniqueId().attr("id");
      this.ids = { element: t2, button: t2 + "-button", menu: t2 + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = false, this.menuItems = V();
    }, _drawButton: function() {
      var t2, e2 = this, i2 = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t3) {
        this.button.trigger("focus"), t3.preventDefault();
      } }), this.element.hide(), this.button = V("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t2 = V("<span>").appendTo(this.button), this._addClass(t2, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i2).appendTo(this.button), false !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
        e2._rendered || e2._refreshMenu();
      });
    }, _drawMenu: function() {
      var i2 = this;
      this.menu = V("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = V("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(t2, e2) {
        t2.preventDefault(), i2._setSelection(), i2._select(e2.item.data("ui-selectmenu-item"), t2);
      }, focus: function(t2, e2) {
        e2 = e2.item.data("ui-selectmenu-item");
        null != i2.focusIndex && e2.index !== i2.focusIndex && (i2._trigger("focus", t2, { item: e2 }), i2.isOpen || i2._select(e2, t2)), i2.focusIndex = e2.index, i2.button.attr("aria-activedescendant", i2.menuItems.eq(e2.index).attr("id"));
      } }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
        return false;
      }, this.menuInstance._isDivider = function() {
        return false;
      };
    }, refresh: function() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    }, _refreshMenu: function() {
      var t2 = this.element.find("option");
      this.menu.empty(), this._parseOptions(t2), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = true, t2.length && (t2 = this._getSelectedItem(), this.menuInstance.focus(null, t2), this._setAria(t2.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    }, open: function(t2) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = true, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t2)));
    }, _position: function() {
      this.menuWrap.position(V.extend({ of: this.button }, this.options.position));
    }, close: function(t2) {
      this.isOpen && (this.isOpen = false, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t2));
    }, widget: function() {
      return this.button;
    }, menuWidget: function() {
      return this.menu;
    }, _renderButtonItem: function(t2) {
      var e2 = V("<span>");
      return this._setText(e2, t2.label), this._addClass(e2, "ui-selectmenu-text"), e2;
    }, _renderMenu: function(s2, t2) {
      var n2 = this, o2 = "";
      V.each(t2, function(t3, e2) {
        var i2;
        e2.optgroup !== o2 && (i2 = V("<li>", { text: e2.optgroup }), n2._addClass(i2, "ui-selectmenu-optgroup", "ui-menu-divider" + (e2.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i2.appendTo(s2), o2 = e2.optgroup), n2._renderItemData(s2, e2);
      });
    }, _renderItemData: function(t2, e2) {
      return this._renderItem(t2, e2).data("ui-selectmenu-item", e2);
    }, _renderItem: function(t2, e2) {
      var i2 = V("<li>"), s2 = V("<div>", { title: e2.element.attr("title") });
      return e2.disabled && this._addClass(i2, null, "ui-state-disabled"), e2.hidden ? i2.prop("hidden", true) : this._setText(s2, e2.label), i2.append(s2).appendTo(t2);
    }, _setText: function(t2, e2) {
      e2 ? t2.text(e2) : t2.html("&#160;");
    }, _move: function(t2, e2) {
      var i2, s2 = ".ui-menu-item";
      this.isOpen ? i2 = this.menuItems.eq(this.focusIndex).parent("li") : (i2 = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s2 += ":not(.ui-state-disabled)"), (i2 = "first" === t2 || "last" === t2 ? i2["first" === t2 ? "prevAll" : "nextAll"](s2).eq(-1) : i2[t2 + "All"](s2).eq(0)).length && this.menuInstance.focus(e2, i2);
    }, _getSelectedItem: function() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    }, _toggle: function(t2) {
      this[this.isOpen ? "close" : "open"](t2);
    }, _setSelection: function() {
      var t2;
      this.range && (window.getSelection ? ((t2 = window.getSelection()).removeAllRanges(), t2.addRange(this.range)) : this.range.select(), this.button.trigger("focus"));
    }, _documentClick: { mousedown: function(t2) {
      !this.isOpen || V(t2.target).closest(".ui-selectmenu-menu, #" + V.escapeSelector(this.ids.button)).length || this.close(t2);
    } }, _buttonEvents: { mousedown: function() {
      var t2;
      window.getSelection ? (t2 = window.getSelection()).rangeCount && (this.range = t2.getRangeAt(0)) : this.range = document.selection.createRange();
    }, click: function(t2) {
      this._setSelection(), this._toggle(t2);
    }, keydown: function(t2) {
      var e2 = true;
      switch (t2.keyCode) {
        case V.ui.keyCode.TAB:
        case V.ui.keyCode.ESCAPE:
          this.close(t2), e2 = false;
          break;
        case V.ui.keyCode.ENTER:
          this.isOpen && this._selectFocusedItem(t2);
          break;
        case V.ui.keyCode.UP:
          t2.altKey ? this._toggle(t2) : this._move("prev", t2);
          break;
        case V.ui.keyCode.DOWN:
          t2.altKey ? this._toggle(t2) : this._move("next", t2);
          break;
        case V.ui.keyCode.SPACE:
          this.isOpen ? this._selectFocusedItem(t2) : this._toggle(t2);
          break;
        case V.ui.keyCode.LEFT:
          this._move("prev", t2);
          break;
        case V.ui.keyCode.RIGHT:
          this._move("next", t2);
          break;
        case V.ui.keyCode.HOME:
        case V.ui.keyCode.PAGE_UP:
          this._move("first", t2);
          break;
        case V.ui.keyCode.END:
        case V.ui.keyCode.PAGE_DOWN:
          this._move("last", t2);
          break;
        default:
          this.menu.trigger(t2), e2 = false;
      }
      e2 && t2.preventDefault();
    } }, _selectFocusedItem: function(t2) {
      var e2 = this.menuItems.eq(this.focusIndex).parent("li");
      e2.hasClass("ui-state-disabled") || this._select(e2.data("ui-selectmenu-item"), t2);
    }, _select: function(t2, e2) {
      var i2 = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t2.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t2)), this._setAria(t2), this._trigger("select", e2, { item: t2 }), t2.index !== i2 && this._trigger("change", e2, { item: t2 }), this.close(e2);
    }, _setAria: function(t2) {
      t2 = this.menuItems.eq(t2.index).attr("id");
      this.button.attr({ "aria-labelledby": t2, "aria-activedescendant": t2 }), this.menu.attr("aria-activedescendant", t2);
    }, _setOption: function(t2, e2) {
      var i2;
      "icons" === t2 && (i2 = this.button.find("span.ui-icon"), this._removeClass(i2, null, this.options.icons.button)._addClass(i2, null, e2.button)), this._super(t2, e2), "appendTo" === t2 && this.menuWrap.appendTo(this._appendTo()), "width" === t2 && this._resizeButton();
    }, _setOptionDisabled: function(t2) {
      this._super(t2), this.menuInstance.option("disabled", t2), this.button.attr("aria-disabled", t2), this._toggleClass(this.button, null, "ui-state-disabled", t2), this.element.prop("disabled", t2), t2 ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    }, _appendTo: function() {
      var t2 = this.options.appendTo;
      return t2 = (t2 = (t2 = t2 && (t2.jquery || t2.nodeType ? V(t2) : this.document.find(t2).eq(0))) && t2[0] ? t2 : this.element.closest(".ui-front, dialog")).length ? t2 : this.document[0].body;
    }, _toggleAttr: function() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    }, _resizeButton: function() {
      var t2 = this.options.width;
      false === t2 ? this.button.css("width", "") : (null === t2 && (t2 = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t2));
    }, _resizeMenu: function() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    }, _getCreateOptions: function() {
      var t2 = this._super();
      return t2.disabled = this.element.prop("disabled"), t2;
    }, _parseOptions: function(t2) {
      var i2 = this, s2 = [];
      t2.each(function(t3, e2) {
        s2.push(i2._parseOption(V(e2), t3));
      }), this.items = s2;
    }, _parseOption: function(t2, e2) {
      var i2 = t2.parent("optgroup");
      return { element: t2, index: e2, value: t2.val(), label: t2.text(), hidden: i2.prop("hidden") || t2.prop("hidden"), optgroup: i2.attr("label") || "", disabled: i2.prop("disabled") || t2.prop("disabled") };
    }, _destroy: function() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    } }]), V.widget("ui.slider", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "slide", options: { animate: false, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() {
      this._keySliding = false, this._mouseSliding = false, this._animateOff = true, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = false;
    }, _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    }, _createHandles: function() {
      var t2, e2 = this.options, i2 = this.element.find(".ui-slider-handle"), s2 = [], n2 = e2.values && e2.values.length || 1;
      for (i2.length > n2 && (i2.slice(n2).remove(), i2 = i2.slice(0, n2)), t2 = i2.length; t2 < n2; t2++) s2.push("<span tabindex='0'></span>");
      this.handles = i2.add(V(s2.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t3) {
        V(this).data("ui-slider-handle-index", t3).attr("tabIndex", 0);
      });
    }, _createRange: function() {
      var t2 = this.options;
      t2.range ? (true === t2.range && (t2.values ? t2.values.length && 2 !== t2.values.length ? t2.values = [t2.values[0], t2.values[0]] : Array.isArray(t2.values) && (t2.values = t2.values.slice(0)) : t2.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = V("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t2.range && "max" !== t2.range || this._addClass(this.range, "ui-slider-range-" + t2.range)) : (this.range && this.range.remove(), this.range = null);
    }, _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    }, _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    }, _mouseCapture: function(t2) {
      var i2, s2, n2, o2, e2, a2, r2 = this, l2 = this.options;
      return !l2.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), e2 = { x: t2.pageX, y: t2.pageY }, i2 = this._normValueFromMouse(e2), s2 = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t3) {
        var e3 = Math.abs(i2 - r2.values(t3));
        (e3 < s2 || s2 === e3 && (t3 === r2._lastChangedValue || r2.values(t3) === l2.min)) && (s2 = e3, n2 = V(this), o2 = t3);
      }), false !== this._start(t2, o2)) && (this._mouseSliding = true, this._handleIndex = o2, this._addClass(n2, null, "ui-state-active"), n2.trigger("focus"), e2 = n2.offset(), a2 = !V(t2.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a2 ? { left: 0, top: 0 } : { left: t2.pageX - e2.left - n2.width() / 2, top: t2.pageY - e2.top - n2.height() / 2 - (parseInt(n2.css("borderTopWidth"), 10) || 0) - (parseInt(n2.css("borderBottomWidth"), 10) || 0) + (parseInt(n2.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t2, o2, i2), this._animateOff = true);
    }, _mouseStart: function() {
      return true;
    }, _mouseDrag: function(t2) {
      var e2 = { x: t2.pageX, y: t2.pageY }, e2 = this._normValueFromMouse(e2);
      return this._slide(t2, this._handleIndex, e2), false;
    }, _mouseStop: function(t2) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = false, this._stop(t2, this._handleIndex), this._change(t2, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false;
    }, _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    }, _normValueFromMouse: function(t2) {
      var e2, t2 = "horizontal" === this.orientation ? (e2 = this.elementSize.width, t2.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e2 = this.elementSize.height, t2.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t2 = t2 / e2;
      return (t2 = 1 < t2 ? 1 : t2) < 0 && (t2 = 0), "vertical" === this.orientation && (t2 = 1 - t2), e2 = this._valueMax() - this._valueMin(), t2 = this._valueMin() + t2 * e2, this._trimAlignValue(t2);
    }, _uiHash: function(t2, e2, i2) {
      var s2 = { handle: this.handles[t2], handleIndex: t2, value: void 0 !== e2 ? e2 : this.value() };
      return this._hasMultipleValues() && (s2.value = void 0 !== e2 ? e2 : this.values(t2), s2.values = i2 || this.values()), s2;
    }, _hasMultipleValues: function() {
      return this.options.values && this.options.values.length;
    }, _start: function(t2, e2) {
      return this._trigger("start", t2, this._uiHash(e2));
    }, _slide: function(t2, e2, i2) {
      var s2, n2 = this.value(), o2 = this.values();
      this._hasMultipleValues() && (s2 = this.values(e2 ? 0 : 1), n2 = this.values(e2), 2 === this.options.values.length && true === this.options.range && (i2 = 0 === e2 ? Math.min(s2, i2) : Math.max(s2, i2)), o2[e2] = i2), i2 !== n2 && false !== this._trigger("slide", t2, this._uiHash(e2, i2, o2)) && (this._hasMultipleValues() ? this.values(e2, i2) : this.value(i2));
    }, _stop: function(t2, e2) {
      this._trigger("stop", t2, this._uiHash(e2));
    }, _change: function(t2, e2) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e2, this._trigger("change", t2, this._uiHash(e2)));
    }, value: function(t2) {
      if (!arguments.length) return this._value();
      this.options.value = this._trimAlignValue(t2), this._refreshValue(), this._change(null, 0);
    }, values: function(t2, e2) {
      var i2, s2, n2;
      if (1 < arguments.length) this.options.values[t2] = this._trimAlignValue(e2), this._refreshValue(), this._change(null, t2);
      else {
        if (!arguments.length) return this._values();
        if (!Array.isArray(t2)) return this._hasMultipleValues() ? this._values(t2) : this.value();
        for (i2 = this.options.values, s2 = t2, n2 = 0; n2 < i2.length; n2 += 1) i2[n2] = this._trimAlignValue(s2[n2]), this._change(null, n2);
        this._refreshValue();
      }
    }, _setOption: function(t2, e2) {
      var i2, s2 = 0;
      switch ("range" === t2 && true === this.options.range && ("min" === e2 ? (this.options.value = this._values(0), this.options.values = null) : "max" === e2 && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), Array.isArray(this.options.values) && (s2 = this.options.values.length), this._super(t2, e2), t2) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e2), this.handles.css("horizontal" === e2 ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = true, this._refreshValue(), this._change(null, 0), this._animateOff = false;
          break;
        case "values":
          for (this._animateOff = true, this._refreshValue(), i2 = s2 - 1; 0 <= i2; i2--) this._change(null, i2);
          this._animateOff = false;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = true, this._calculateNewMax(), this._refreshValue(), this._animateOff = false;
          break;
        case "range":
          this._animateOff = true, this._refresh(), this._animateOff = false;
      }
    }, _setOptionDisabled: function(t2) {
      this._super(t2), this._toggleClass(null, "ui-state-disabled", !!t2);
    }, _value: function() {
      var t2 = this.options.value;
      return this._trimAlignValue(t2);
    }, _values: function(t2) {
      var e2, i2;
      if (arguments.length) return t2 = this.options.values[t2], this._trimAlignValue(t2);
      if (this._hasMultipleValues()) {
        for (e2 = this.options.values.slice(), i2 = 0; i2 < e2.length; i2 += 1) e2[i2] = this._trimAlignValue(e2[i2]);
        return e2;
      }
      return [];
    }, _trimAlignValue: function(t2) {
      var e2, i2;
      return t2 <= this._valueMin() ? this._valueMin() : t2 >= this._valueMax() ? this._valueMax() : (e2 = 0 < this.options.step ? this.options.step : 1, i2 = t2 - (t2 = (t2 - this._valueMin()) % e2), 2 * Math.abs(t2) >= e2 && (i2 += 0 < t2 ? e2 : -e2), parseFloat(i2.toFixed(5)));
    }, _calculateNewMax: function() {
      var t2 = this.options.max, e2 = this._valueMin(), i2 = this.options.step;
      (t2 = Math.round((t2 - e2) / i2) * i2 + e2) > this.options.max && (t2 -= i2), this.max = parseFloat(t2.toFixed(this._precision()));
    }, _precision: function() {
      var t2 = this._precisionOf(this.options.step);
      return t2 = null !== this.options.min ? Math.max(t2, this._precisionOf(this.options.min)) : t2;
    }, _precisionOf: function(t2) {
      var t2 = t2.toString(), e2 = t2.indexOf(".");
      return -1 === e2 ? 0 : t2.length - e2 - 1;
    }, _valueMin: function() {
      return this.options.min;
    }, _valueMax: function() {
      return this.max;
    }, _refreshRange: function(t2) {
      "vertical" === t2 && this.range.css({ width: "", left: "" }), "horizontal" === t2 && this.range.css({ height: "", bottom: "" });
    }, _refreshValue: function() {
      var e2, i2, t2, s2, n2, o2 = this.options.range, a2 = this.options, r2 = this, l2 = !this._animateOff && a2.animate, h2 = {};
      this._hasMultipleValues() ? this.handles.each(function(t3) {
        i2 = (r2.values(t3) - r2._valueMin()) / (r2._valueMax() - r2._valueMin()) * 100, h2["horizontal" === r2.orientation ? "left" : "bottom"] = i2 + "%", V(this).stop(1, 1)[l2 ? "animate" : "css"](h2, a2.animate), true === r2.options.range && ("horizontal" === r2.orientation ? (0 === t3 && r2.range.stop(1, 1)[l2 ? "animate" : "css"]({ left: i2 + "%" }, a2.animate), 1 === t3 && r2.range[l2 ? "animate" : "css"]({ width: i2 - e2 + "%" }, { queue: false, duration: a2.animate })) : (0 === t3 && r2.range.stop(1, 1)[l2 ? "animate" : "css"]({ bottom: i2 + "%" }, a2.animate), 1 === t3 && r2.range[l2 ? "animate" : "css"]({ height: i2 - e2 + "%" }, { queue: false, duration: a2.animate }))), e2 = i2;
      }) : (t2 = this.value(), s2 = this._valueMin(), n2 = this._valueMax(), i2 = n2 !== s2 ? (t2 - s2) / (n2 - s2) * 100 : 0, h2["horizontal" === this.orientation ? "left" : "bottom"] = i2 + "%", this.handle.stop(1, 1)[l2 ? "animate" : "css"](h2, a2.animate), "min" === o2 && "horizontal" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ width: i2 + "%" }, a2.animate), "max" === o2 && "horizontal" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ width: 100 - i2 + "%" }, a2.animate), "min" === o2 && "vertical" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ height: i2 + "%" }, a2.animate), "max" === o2 && "vertical" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ height: 100 - i2 + "%" }, a2.animate));
    }, _handleEvents: { keydown: function(t2) {
      var e2, i2, s2, n2 = V(t2.target).data("ui-slider-handle-index");
      switch (t2.keyCode) {
        case V.ui.keyCode.HOME:
        case V.ui.keyCode.END:
        case V.ui.keyCode.PAGE_UP:
        case V.ui.keyCode.PAGE_DOWN:
        case V.ui.keyCode.UP:
        case V.ui.keyCode.RIGHT:
        case V.ui.keyCode.DOWN:
        case V.ui.keyCode.LEFT:
          if (t2.preventDefault(), this._keySliding || (this._keySliding = true, this._addClass(V(t2.target), null, "ui-state-active"), false !== this._start(t2, n2))) break;
          return;
      }
      switch (s2 = this.options.step, e2 = i2 = this._hasMultipleValues() ? this.values(n2) : this.value(), t2.keyCode) {
        case V.ui.keyCode.HOME:
          i2 = this._valueMin();
          break;
        case V.ui.keyCode.END:
          i2 = this._valueMax();
          break;
        case V.ui.keyCode.PAGE_UP:
          i2 = this._trimAlignValue(e2 + (this._valueMax() - this._valueMin()) / this.numPages);
          break;
        case V.ui.keyCode.PAGE_DOWN:
          i2 = this._trimAlignValue(e2 - (this._valueMax() - this._valueMin()) / this.numPages);
          break;
        case V.ui.keyCode.UP:
        case V.ui.keyCode.RIGHT:
          if (e2 === this._valueMax()) return;
          i2 = this._trimAlignValue(e2 + s2);
          break;
        case V.ui.keyCode.DOWN:
        case V.ui.keyCode.LEFT:
          if (e2 === this._valueMin()) return;
          i2 = this._trimAlignValue(e2 - s2);
      }
      this._slide(t2, n2, i2);
    }, keyup: function(t2) {
      var e2 = V(t2.target).data("ui-slider-handle-index");
      this._keySliding && (this._keySliding = false, this._stop(t2, e2), this._change(t2, e2), this._removeClass(V(t2.target), null, "ui-state-active"));
    } } });
    function e(e2) {
      return function() {
        var t2 = this.element.val();
        e2.apply(this, arguments), this._refresh(), t2 !== this.element.val() && this._trigger("change");
      };
    }
    V.widget("ui.spinner", { version: "1.13.3", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: true, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), true), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() {
        this.element.removeAttr("autocomplete");
      } });
    }, _getCreateOptions: function() {
      var s2 = this._super(), n2 = this.element;
      return V.each(["min", "max", "step"], function(t2, e2) {
        var i2 = n2.attr(e2);
        null != i2 && i2.length && (s2[e2] = i2);
      }), s2;
    }, _events: { keydown: function(t2) {
      this._start(t2) && this._keydown(t2) && t2.preventDefault();
    }, keyup: "_stop", focus: function() {
      this.previous = this.element.val();
    }, blur: function(t2) {
      this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t2));
    }, mousewheel: function(t2, e2) {
      var i2 = V.ui.safeActiveElement(this.document[0]);
      if (this.element[0] === i2 && e2) {
        if (!this.spinning && !this._start(t2)) return false;
        this._spin((0 < e2 ? 1 : -1) * this.options.step, t2), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
          this.spinning && this._stop(t2);
        }, 100), t2.preventDefault();
      }
    }, "mousedown .ui-spinner-button": function(t2) {
      var e2;
      function i2() {
        this.element[0] !== V.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = e2, this._delay(function() {
          this.previous = e2;
        }));
      }
      e2 = this.element[0] === V.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t2.preventDefault(), i2.call(this), this.cancelBlur = true, this._delay(function() {
        delete this.cancelBlur, i2.call(this);
      }), false !== this._start(t2) && this._repeat(null, V(t2.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t2);
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(t2) {
      if (V(t2.currentTarget).hasClass("ui-state-active")) return false !== this._start(t2) && void this._repeat(null, V(t2.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t2);
    }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    }, _draw: function() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: false }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: false }), this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height());
    }, _keydown: function(t2) {
      var e2 = this.options, i2 = V.ui.keyCode;
      switch (t2.keyCode) {
        case i2.UP:
          return this._repeat(null, 1, t2), true;
        case i2.DOWN:
          return this._repeat(null, -1, t2), true;
        case i2.PAGE_UP:
          return this._repeat(null, e2.page, t2), true;
        case i2.PAGE_DOWN:
          return this._repeat(null, -e2.page, t2), true;
      }
      return false;
    }, _start: function(t2) {
      return !(!this.spinning && false === this._trigger("start", t2)) && (this.counter || (this.counter = 1), this.spinning = true);
    }, _repeat: function(t2, e2, i2) {
      t2 = t2 || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
        this._repeat(40, e2, i2);
      }, t2), this._spin(e2 * this.options.step, i2);
    }, _spin: function(t2, e2) {
      var i2 = this.value() || 0;
      this.counter || (this.counter = 1), i2 = this._adjustValue(i2 + t2 * this._increment(this.counter)), this.spinning && false === this._trigger("spin", e2, { value: i2 }) || (this._value(i2), this.counter++);
    }, _increment: function(t2) {
      var e2 = this.options.incremental;
      return e2 ? "function" == typeof e2 ? e2(t2) : Math.floor(t2 * t2 * t2 / 5e4 - t2 * t2 / 500 + 17 * t2 / 200 + 1) : 1;
    }, _precision: function() {
      var t2 = this._precisionOf(this.options.step);
      return t2 = null !== this.options.min ? Math.max(t2, this._precisionOf(this.options.min)) : t2;
    }, _precisionOf: function(t2) {
      var t2 = t2.toString(), e2 = t2.indexOf(".");
      return -1 === e2 ? 0 : t2.length - e2 - 1;
    }, _adjustValue: function(t2) {
      var e2 = this.options, i2 = null !== e2.min ? e2.min : 0, s2 = t2 - i2;
      return t2 = i2 + Math.round(s2 / e2.step) * e2.step, t2 = parseFloat(t2.toFixed(this._precision())), null !== e2.max && t2 > e2.max ? e2.max : null !== e2.min && t2 < e2.min ? e2.min : t2;
    }, _stop: function(t2) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = false, this._trigger("stop", t2));
    }, _setOption: function(t2, e2) {
      var i2;
      "culture" === t2 || "numberFormat" === t2 ? (i2 = this._parse(this.element.val()), this.options[t2] = e2, this.element.val(this._format(i2))) : ("max" !== t2 && "min" !== t2 && "step" !== t2 || "string" == typeof e2 && (e2 = this._parse(e2)), "icons" === t2 && (i2 = this.buttons.first().find(".ui-icon"), this._removeClass(i2, null, this.options.icons.up), this._addClass(i2, null, e2.up), i2 = this.buttons.last().find(".ui-icon"), this._removeClass(i2, null, this.options.icons.down), this._addClass(i2, null, e2.down)), this._super(t2, e2));
    }, _setOptionDisabled: function(t2) {
      this._super(t2), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t2), this.element.prop("disabled", !!t2), this.buttons.button(t2 ? "disable" : "enable");
    }, _setOptions: e(function(t2) {
      this._super(t2);
    }), _parse: function(t2) {
      return "" === (t2 = "string" == typeof t2 && "" !== t2 ? window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t2, 10, this.options.culture) : +t2 : t2) || isNaN(t2) ? null : t2;
    }, _format: function(t2) {
      return "" === t2 ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t2, this.options.numberFormat, this.options.culture) : t2;
    }, _refresh: function() {
      this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
    }, isValid: function() {
      var t2 = this.value();
      return null !== t2 && t2 === this._adjustValue(t2);
    }, _value: function(t2, e2) {
      var i2;
      "" !== t2 && null !== (i2 = this._parse(t2)) && (e2 || (i2 = this._adjustValue(i2)), t2 = this._format(i2)), this.element.val(t2), this._refresh();
    }, _destroy: function() {
      this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    }, stepUp: e(function(t2) {
      this._stepUp(t2);
    }), _stepUp: function(t2) {
      this._start() && (this._spin((t2 || 1) * this.options.step), this._stop());
    }, stepDown: e(function(t2) {
      this._stepDown(t2);
    }), _stepDown: function(t2) {
      this._start() && (this._spin((t2 || 1) * -this.options.step), this._stop());
    }, pageUp: e(function(t2) {
      this._stepUp((t2 || 1) * this.options.page);
    }), pageDown: e(function(t2) {
      this._stepDown((t2 || 1) * this.options.page);
    }), value: function(t2) {
      if (!arguments.length) return this._parse(this.element.val());
      e(this._value).call(this, t2);
    }, widget: function() {
      return this.uiSpinner;
    } }), false !== V.uiBackCompat && V.widget("ui.spinner", V.ui.spinner, { _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    }, _uiSpinnerHtml: function() {
      return "<span>";
    }, _buttonHtml: function() {
      return "<a></a><a></a>";
    } });
    V.ui.spinner, V.widget("ui.tabs", { version: "1.13.3", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: false, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: (f = /#.*$/, function(t2) {
      var e2 = t2.href.replace(f, ""), i2 = location.href.replace(f, "");
      try {
        e2 = decodeURIComponent(e2);
      } catch (t3) {
      }
      try {
        i2 = decodeURIComponent(i2);
      } catch (t3) {
      }
      return 1 < t2.hash.length && e2 === i2;
    }), _create: function() {
      var e2 = this, t2 = this.options;
      this.running = false, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t2.collapsible), this._processTabs(), t2.active = this._initialActive(), Array.isArray(t2.disabled) && (t2.disabled = V.uniqueSort(t2.disabled.concat(V.map(this.tabs.filter(".ui-state-disabled"), function(t3) {
        return e2.tabs.index(t3);
      }))).sort()), false !== this.options.active && this.anchors.length ? this.active = this._findActive(t2.active) : this.active = V(), this._refresh(), this.active.length && this.load(t2.active);
    }, _initialActive: function() {
      var i2 = this.options.active, t2 = this.options.collapsible, s2 = location.hash.substring(1);
      return null === i2 && (s2 && this.tabs.each(function(t3, e2) {
        if (V(e2).attr("aria-controls") === s2) return i2 = t3, false;
      }), null !== (i2 = null === i2 ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i2) && -1 !== i2 || (i2 = !!this.tabs.length && 0)), false !== i2 && -1 === (i2 = this.tabs.index(this.tabs.eq(i2))) && (i2 = !t2 && 0), i2 = !t2 && false === i2 && this.anchors.length ? 0 : i2;
    }, _getCreateEventData: function() {
      return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : V() };
    }, _tabKeydown: function(t2) {
      var e2 = V(V.ui.safeActiveElement(this.document[0])).closest("li"), i2 = this.tabs.index(e2), s2 = true;
      if (!this._handlePageNav(t2)) {
        switch (t2.keyCode) {
          case V.ui.keyCode.RIGHT:
          case V.ui.keyCode.DOWN:
            i2++;
            break;
          case V.ui.keyCode.UP:
          case V.ui.keyCode.LEFT:
            s2 = false, i2--;
            break;
          case V.ui.keyCode.END:
            i2 = this.anchors.length - 1;
            break;
          case V.ui.keyCode.HOME:
            i2 = 0;
            break;
          case V.ui.keyCode.SPACE:
            return t2.preventDefault(), clearTimeout(this.activating), void this._activate(i2);
          case V.ui.keyCode.ENTER:
            return t2.preventDefault(), clearTimeout(this.activating), void this._activate(i2 !== this.options.active && i2);
          default:
            return;
        }
        t2.preventDefault(), clearTimeout(this.activating), i2 = this._focusNextTab(i2, s2), t2.ctrlKey || t2.metaKey || (e2.attr("aria-selected", "false"), this.tabs.eq(i2).attr("aria-selected", "true"), this.activating = this._delay(function() {
          this.option("active", i2);
        }, this.delay));
      }
    }, _panelKeydown: function(t2) {
      this._handlePageNav(t2) || t2.ctrlKey && t2.keyCode === V.ui.keyCode.UP && (t2.preventDefault(), this.active.trigger("focus"));
    }, _handlePageNav: function(t2) {
      return t2.altKey && t2.keyCode === V.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, false)), true) : t2.altKey && t2.keyCode === V.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, true)), true) : void 0;
    }, _findNextTab: function(t2, e2) {
      var i2 = this.tabs.length - 1;
      for (; -1 !== V.inArray(t2 = (t2 = i2 < t2 ? 0 : t2) < 0 ? i2 : t2, this.options.disabled); ) t2 = e2 ? t2 + 1 : t2 - 1;
      return t2;
    }, _focusNextTab: function(t2, e2) {
      return t2 = this._findNextTab(t2, e2), this.tabs.eq(t2).trigger("focus"), t2;
    }, _setOption: function(t2, e2) {
      "active" === t2 ? this._activate(e2) : (this._super(t2, e2), "collapsible" === t2 && (this._toggleClass("ui-tabs-collapsible", null, e2), e2 || false !== this.options.active || this._activate(0)), "event" === t2 && this._setupEvents(e2), "heightStyle" === t2 && this._setupHeightStyle(e2));
    }, _sanitizeSelector: function(t2) {
      return t2 ? t2.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    }, refresh: function() {
      var t2 = this.options, e2 = this.tablist.children(":has(a[href])");
      t2.disabled = V.map(e2.filter(".ui-state-disabled"), function(t3) {
        return e2.index(t3);
      }), this._processTabs(), false !== t2.active && this.anchors.length ? this.active.length && !V.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t2.disabled.length ? (t2.active = false, this.active = V()) : this._activate(this._findNextTab(Math.max(0, t2.active - 1), false)) : t2.active = this.tabs.index(this.active) : (t2.active = false, this.active = V()), this._refresh();
    }, _refresh: function() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
    }, _processTabs: function() {
      var l2 = this, t2 = this.tabs, e2 = this.anchors, i2 = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t3) {
        V(this).is(".ui-state-disabled") && t3.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
        V(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
        return V("a", this)[0];
      }).attr({ tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = V(), this.anchors.each(function(t3, e3) {
        var i3, s2, n2, o2 = V(e3).uniqueId().attr("id"), a2 = V(e3).closest("li"), r2 = a2.attr("aria-controls");
        l2._isLocal(e3) ? (n2 = (i3 = e3.hash).substring(1), s2 = l2.element.find(l2._sanitizeSelector(i3))) : (n2 = a2.attr("aria-controls") || V({}).uniqueId()[0].id, (s2 = l2.element.find(i3 = "#" + n2)).length || (s2 = l2._createPanel(n2)).insertAfter(l2.panels[t3 - 1] || l2.tablist), s2.attr("aria-live", "polite")), s2.length && (l2.panels = l2.panels.add(s2)), r2 && a2.data("ui-tabs-aria-controls", r2), a2.attr({ "aria-controls": n2, "aria-labelledby": o2 }), s2.attr("aria-labelledby", o2);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t2 && (this._off(t2.not(this.tabs)), this._off(e2.not(this.anchors)), this._off(i2.not(this.panels)));
    }, _getList: function() {
      return this.tablist || this.element.find("ol, ul").eq(0);
    }, _createPanel: function(t2) {
      return V("<div>").attr("id", t2).data("ui-tabs-destroy", true);
    }, _setOptionDisabled: function(t2) {
      var e2, i2;
      for (Array.isArray(t2) && (t2.length ? t2.length === this.anchors.length && (t2 = true) : t2 = false), i2 = 0; e2 = this.tabs[i2]; i2++) e2 = V(e2), true === t2 || -1 !== V.inArray(i2, t2) ? (e2.attr("aria-disabled", "true"), this._addClass(e2, null, "ui-state-disabled")) : (e2.removeAttr("aria-disabled"), this._removeClass(e2, null, "ui-state-disabled"));
      this.options.disabled = t2, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, true === t2);
    }, _setupEvents: function(t2) {
      var i2 = {};
      t2 && V.each(t2.split(" "), function(t3, e2) {
        i2[e2] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(true, this.anchors, { click: function(t3) {
        t3.preventDefault();
      } }), this._on(this.anchors, i2), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs);
    }, _setupHeightStyle: function(t2) {
      var i2, e2 = this.element.parent();
      "fill" === t2 ? (i2 = e2.height(), i2 -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
        var t3 = V(this), e3 = t3.css("position");
        "absolute" !== e3 && "fixed" !== e3 && (i2 -= t3.outerHeight(true));
      }), this.element.children().not(this.panels).each(function() {
        i2 -= V(this).outerHeight(true);
      }), this.panels.each(function() {
        V(this).height(Math.max(0, i2 - V(this).innerHeight() + V(this).height()));
      }).css("overflow", "auto")) : "auto" === t2 && (i2 = 0, this.panels.each(function() {
        i2 = Math.max(i2, V(this).height("").height());
      }).height(i2));
    }, _eventHandler: function(t2) {
      var e2 = this.options, i2 = this.active, s2 = V(t2.currentTarget).closest("li"), n2 = s2[0] === i2[0], o2 = n2 && e2.collapsible, a2 = o2 ? V() : this._getPanelForTab(s2), r2 = i2.length ? this._getPanelForTab(i2) : V(), i2 = { oldTab: i2, oldPanel: r2, newTab: o2 ? V() : s2, newPanel: a2 };
      t2.preventDefault(), s2.hasClass("ui-state-disabled") || s2.hasClass("ui-tabs-loading") || this.running || n2 && !e2.collapsible || false === this._trigger("beforeActivate", t2, i2) || (e2.active = !o2 && this.tabs.index(s2), this.active = n2 ? V() : s2, this.xhr && this.xhr.abort(), r2.length || a2.length || V.error("jQuery UI Tabs: Mismatching fragment identifier."), a2.length && this.load(this.tabs.index(s2), t2), this._toggle(t2, i2));
    }, _toggle: function(t2, e2) {
      var i2 = this, s2 = e2.newPanel, n2 = e2.oldPanel;
      function o2() {
        i2.running = false, i2._trigger("activate", t2, e2);
      }
      function a2() {
        i2._addClass(e2.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), s2.length && i2.options.show ? i2._show(s2, i2.options.show, o2) : (s2.show(), o2());
      }
      this.running = true, n2.length && this.options.hide ? this._hide(n2, this.options.hide, function() {
        i2._removeClass(e2.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a2();
      }) : (this._removeClass(e2.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n2.hide(), a2()), n2.attr("aria-hidden", "true"), e2.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), s2.length && n2.length ? e2.oldTab.attr("tabIndex", -1) : s2.length && this.tabs.filter(function() {
        return 0 === V(this).attr("tabIndex");
      }).attr("tabIndex", -1), s2.attr("aria-hidden", "false"), e2.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _activate: function(t2) {
      var t2 = this._findActive(t2);
      t2[0] !== this.active[0] && (t2 = (t2 = t2.length ? t2 : this.active).find(".ui-tabs-anchor")[0], this._eventHandler({ target: t2, currentTarget: t2, preventDefault: V.noop }));
    }, _findActive: function(t2) {
      return false === t2 ? V() : this.tabs.eq(t2);
    }, _getIndex: function(t2) {
      return t2 = "string" == typeof t2 ? this.anchors.index(this.anchors.filter("[href$='" + V.escapeSelector(t2) + "']")) : t2;
    }, _destroy: function() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
        V.data(this, "ui-tabs-destroy") ? V(this).remove() : V(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function() {
        var t2 = V(this), e2 = t2.data("ui-tabs-aria-controls");
        e2 ? t2.attr("aria-controls", e2).removeData("ui-tabs-aria-controls") : t2.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    }, enable: function(i2) {
      var t2 = this.options.disabled;
      false !== t2 && (t2 = void 0 !== i2 && (i2 = this._getIndex(i2), Array.isArray(t2) ? V.map(t2, function(t3) {
        return t3 !== i2 ? t3 : null;
      }) : V.map(this.tabs, function(t3, e2) {
        return e2 !== i2 ? e2 : null;
      })), this._setOptionDisabled(t2));
    }, disable: function(t2) {
      var e2 = this.options.disabled;
      if (true !== e2) {
        if (void 0 === t2) e2 = true;
        else {
          if (t2 = this._getIndex(t2), -1 !== V.inArray(t2, e2)) return;
          e2 = Array.isArray(e2) ? V.merge([t2], e2).sort() : [t2];
        }
        this._setOptionDisabled(e2);
      }
    }, load: function(t2, s2) {
      t2 = this._getIndex(t2);
      function n2(t3, e2) {
        "abort" === e2 && o2.panels.stop(false, true), o2._removeClass(i2, "ui-tabs-loading"), a2.removeAttr("aria-busy"), t3 === o2.xhr && delete o2.xhr;
      }
      var o2 = this, i2 = this.tabs.eq(t2), t2 = i2.find(".ui-tabs-anchor"), a2 = this._getPanelForTab(i2), r2 = { tab: i2, panel: a2 };
      this._isLocal(t2[0]) || (this.xhr = V.ajax(this._ajaxSettings(t2, s2, r2)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i2, "ui-tabs-loading"), a2.attr("aria-busy", "true"), this.xhr.done(function(t3, e2, i3) {
        setTimeout(function() {
          a2.html(t3), o2._trigger("load", s2, r2), n2(i3, e2);
        }, 1);
      }).fail(function(t3, e2) {
        setTimeout(function() {
          n2(t3, e2);
        }, 1);
      })));
    }, _ajaxSettings: function(t2, i2, s2) {
      var n2 = this;
      return { url: t2.attr("href").replace(/#.*$/, ""), beforeSend: function(t3, e2) {
        return n2._trigger("beforeLoad", i2, V.extend({ jqXHR: t3, ajaxSettings: e2 }, s2));
      } };
    }, _getPanelForTab: function(t2) {
      t2 = V(t2).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + t2));
    } }), false !== V.uiBackCompat && V.widget("ui.tabs", V.ui.tabs, { _processTabs: function() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    } }), V.ui.tabs, V.widget("ui.tooltip", { version: "1.13.3", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() {
      var t2 = V(this).attr("title");
      return V("<a>").text(t2).html();
    }, hide: true, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: true, track: false, close: null, open: null }, _addDescribedBy: function(t2, e2) {
      var i2 = (t2.attr("aria-describedby") || "").split(/\s+/);
      i2.push(e2), t2.data("ui-tooltip-id", e2).attr("aria-describedby", String.prototype.trim.call(i2.join(" ")));
    }, _removeDescribedBy: function(t2) {
      var e2 = t2.data("ui-tooltip-id"), i2 = (t2.attr("aria-describedby") || "").split(/\s+/), e2 = V.inArray(e2, i2);
      -1 !== e2 && i2.splice(e2, 1), t2.removeData("ui-tooltip-id"), (i2 = String.prototype.trim.call(i2.join(" "))) ? t2.attr("aria-describedby", i2) : t2.removeAttr("aria-describedby");
    }, _create: function() {
      this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = V("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = V([]);
    }, _setOption: function(t2, e2) {
      var i2 = this;
      this._super(t2, e2), "content" === t2 && V.each(this.tooltips, function(t3, e3) {
        i2._updateContent(e3.element);
      });
    }, _setOptionDisabled: function(t2) {
      this[t2 ? "_disable" : "_enable"]();
    }, _disable: function() {
      var s2 = this;
      V.each(this.tooltips, function(t2, e2) {
        var i2 = V.Event("blur");
        i2.target = i2.currentTarget = e2.element[0], s2.close(i2, true);
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
        var t2 = V(this);
        if (t2.is("[title]")) return t2.data("ui-tooltip-title", t2.attr("title")).removeAttr("title");
      }));
    }, _enable: function() {
      this.disabledTitles.each(function() {
        var t2 = V(this);
        t2.data("ui-tooltip-title") && t2.attr("title", t2.data("ui-tooltip-title"));
      }), this.disabledTitles = V([]);
    }, open: function(t2) {
      var i2 = this, e2 = V(t2 ? t2.target : this.element).closest(this.options.items);
      e2.length && !e2.data("ui-tooltip-id") && (e2.attr("title") && e2.data("ui-tooltip-title", e2.attr("title")), e2.data("ui-tooltip-open", true), t2 && "mouseover" === t2.type && e2.parents().each(function() {
        var t3, e3 = V(this);
        e3.data("ui-tooltip-open") && ((t3 = V.Event("blur")).target = t3.currentTarget = this, i2.close(t3, true)), e3.attr("title") && (e3.uniqueId(), i2.parents[this.id] = { element: this, title: e3.attr("title") }, e3.attr("title", ""));
      }), this._registerCloseHandlers(t2, e2), this._updateContent(e2, t2));
    }, _updateContent: function(e2, i2) {
      var t2 = this.options.content, s2 = this, n2 = i2 ? i2.type : null;
      if ("string" == typeof t2 || t2.nodeType || t2.jquery) return this._open(i2, e2, t2);
      (t2 = t2.call(e2[0], function(t3) {
        s2._delay(function() {
          e2.data("ui-tooltip-open") && (i2 && (i2.type = n2), this._open(i2, e2, t3));
        });
      })) && this._open(i2, e2, t2);
    }, _open: function(t2, e2, i2) {
      var s2, n2, o2, a2 = V.extend({}, this.options.position);
      function r2(t3) {
        a2.of = t3, s2.is(":hidden") || s2.position(a2);
      }
      i2 && ((o2 = this._find(e2)) ? o2.tooltip.find(".ui-tooltip-content").html(i2) : (e2.is("[title]") && (t2 && "mouseover" === t2.type ? e2.attr("title", "") : e2.removeAttr("title")), o2 = this._tooltip(e2), s2 = o2.tooltip, this._addDescribedBy(e2, s2.attr("id")), s2.find(".ui-tooltip-content").html(i2), this.liveRegion.children().hide(), (o2 = V("<div>").html(s2.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), o2.removeAttr("id").find("[id]").removeAttr("id"), o2.appendTo(this.liveRegion), this.options.track && t2 && /^mouse/.test(t2.type) ? (this._on(this.document, { mousemove: r2 }), r2(t2)) : s2.position(V.extend({ of: e2 }, this.options.position)), s2.hide(), this._show(s2, this.options.show), this.options.track && this.options.show && this.options.show.delay && (n2 = this.delayedShow = setInterval(function() {
        s2.is(":visible") && (r2(a2.of), clearInterval(n2));
      }, 13)), this._trigger("open", t2, { tooltip: s2 })));
    }, _registerCloseHandlers: function(t2, e2) {
      var i2 = { keyup: function(t3) {
        t3.keyCode === V.ui.keyCode.ESCAPE && ((t3 = V.Event(t3)).currentTarget = e2[0], this.close(t3, true));
      } };
      e2[0] !== this.element[0] && (i2.remove = function() {
        var t3 = this._find(e2);
        t3 && this._removeTooltip(t3.tooltip);
      }), t2 && "mouseover" !== t2.type || (i2.mouseleave = "close"), t2 && "focusin" !== t2.type || (i2.focusout = "close"), this._on(true, e2, i2);
    }, close: function(t2) {
      var e2, i2 = this, s2 = V(t2 ? t2.currentTarget : this.element), n2 = this._find(s2);
      n2 ? (e2 = n2.tooltip, n2.closing || (clearInterval(this.delayedShow), s2.data("ui-tooltip-title") && !s2.attr("title") && s2.attr("title", s2.data("ui-tooltip-title")), this._removeDescribedBy(s2), n2.hiding = true, e2.stop(true), this._hide(e2, this.options.hide, function() {
        i2._removeTooltip(V(this));
      }), s2.removeData("ui-tooltip-open"), this._off(s2, "mouseleave focusout keyup"), s2[0] !== this.element[0] && this._off(s2, "remove"), this._off(this.document, "mousemove"), t2 && "mouseleave" === t2.type && V.each(this.parents, function(t3, e3) {
        V(e3.element).attr("title", e3.title), delete i2.parents[t3];
      }), n2.closing = true, this._trigger("close", t2, { tooltip: e2 }), n2.hiding) || (n2.closing = false)) : s2.removeData("ui-tooltip-open");
    }, _tooltip: function(t2) {
      var e2 = V("<div>").attr("role", "tooltip"), i2 = V("<div>").appendTo(e2), s2 = e2.uniqueId().attr("id");
      return this._addClass(i2, "ui-tooltip-content"), this._addClass(e2, "ui-tooltip", "ui-widget ui-widget-content"), e2.appendTo(this._appendTo(t2)), this.tooltips[s2] = { element: t2, tooltip: e2 };
    }, _find: function(t2) {
      t2 = t2.data("ui-tooltip-id");
      return t2 ? this.tooltips[t2] : null;
    }, _removeTooltip: function(t2) {
      clearInterval(this.delayedShow), t2.remove(), delete this.tooltips[t2.attr("id")];
    }, _appendTo: function(t2) {
      t2 = t2.closest(".ui-front, dialog");
      return t2 = t2.length ? t2 : this.document[0].body;
    }, _destroy: function() {
      var s2 = this;
      V.each(this.tooltips, function(t2, e2) {
        var i2 = V.Event("blur"), e2 = e2.element;
        i2.target = i2.currentTarget = e2[0], s2.close(i2, true), V("#" + t2).remove(), e2.data("ui-tooltip-title") && (e2.attr("title") || e2.attr("title", e2.data("ui-tooltip-title")), e2.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    } }), false !== V.uiBackCompat && V.widget("ui.tooltip", V.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() {
      var t2 = this._superApply(arguments);
      return this.options.tooltipClass && t2.tooltip.addClass(this.options.tooltipClass), t2;
    } }), V.ui.tooltip;
    var f, g = V, m = {}, X = m.toString, $2 = /^([\-+])=\s*(\d+\.?\d*)/, G = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t2) {
      return [t2[1], t2[2], t2[3], t2[4]];
    } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t2) {
      return [2.55 * t2[1], 2.55 * t2[2], 2.55 * t2[3], t2[4]];
    } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/, parse: function(t2) {
      return [parseInt(t2[1], 16), parseInt(t2[2], 16), parseInt(t2[3], 16), t2[4] ? (parseInt(t2[4], 16) / 255).toFixed(2) : 1];
    } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/, parse: function(t2) {
      return [parseInt(t2[1] + t2[1], 16), parseInt(t2[2] + t2[2], 16), parseInt(t2[3] + t2[3], 16), t2[4] ? (parseInt(t2[4] + t2[4], 16) / 255).toFixed(2) : 1];
    } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t2) {
      return [t2[1], t2[2] / 100, t2[3] / 100, t2[4]];
    } }], _ = g.Color = function(t2, e2, i2, s2) {
      return new g.Color.fn.parse(t2, e2, i2, s2);
    }, v = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, Q = { byte: { floor: true, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: true } }, J = _.support = {}, t = g("<p>")[0], b = g.each;
    function y(t2) {
      return null == t2 ? t2 + "" : "object" == typeof t2 ? m[X.call(t2)] || "object" : typeof t2;
    }
    function w(t2, e2, i2) {
      var s2 = Q[e2.type] || {};
      return null == t2 ? i2 || !e2.def ? null : e2.def : (t2 = s2.floor ? ~~t2 : parseFloat(t2), isNaN(t2) ? e2.def : s2.mod ? (t2 + s2.mod) % s2.mod : Math.min(s2.max, Math.max(0, t2)));
    }
    function Z(s2) {
      var n2 = _(), o2 = n2._rgba = [];
      return s2 = s2.toLowerCase(), b(G, function(t2, e2) {
        var i2 = e2.re.exec(s2), i2 = i2 && e2.parse(i2), e2 = e2.space || "rgba";
        if (i2) return i2 = n2[e2](i2), n2[v[e2].cache] = i2[v[e2].cache], o2 = n2._rgba = i2._rgba, false;
      }), o2.length ? ("0,0,0,0" === o2.join() && g.extend(o2, M.transparent), n2) : M[s2];
    }
    function T(t2, e2, i2) {
      return 6 * (i2 = (i2 + 1) % 1) < 1 ? t2 + (e2 - t2) * i2 * 6 : 2 * i2 < 1 ? e2 : 3 * i2 < 2 ? t2 + (e2 - t2) * (2 / 3 - i2) * 6 : t2;
    }
    t.style.cssText = "background-color:rgba(1,1,1,.5)", J.rgba = -1 < t.style.backgroundColor.indexOf("rgba"), b(v, function(t2, e2) {
      e2.cache = "_" + t2, e2.props.alpha = { idx: 3, type: "percent", def: 1 };
    }), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t2, e2) {
      m["[object " + e2 + "]"] = e2.toLowerCase();
    }), (_.fn = g.extend(_.prototype, { parse: function(n2, t2, e2, i2) {
      if (void 0 === n2) return this._rgba = [null, null, null, null], this;
      (n2.jquery || n2.nodeType) && (n2 = g(n2).css(t2), t2 = void 0);
      var o2 = this, s2 = y(n2), a2 = this._rgba = [];
      return void 0 !== t2 && (n2 = [n2, t2, e2, i2], s2 = "array"), "string" === s2 ? this.parse(Z(n2) || M._default) : "array" === s2 ? (b(v.rgba.props, function(t3, e3) {
        a2[e3.idx] = w(n2[e3.idx], e3);
      }), this) : "object" === s2 ? (n2 instanceof _ ? b(v, function(t3, e3) {
        n2[e3.cache] && (o2[e3.cache] = n2[e3.cache].slice());
      }) : b(v, function(t3, i3) {
        var s3 = i3.cache;
        b(i3.props, function(t4, e3) {
          if (!o2[s3] && i3.to) {
            if ("alpha" === t4 || null == n2[t4]) return;
            o2[s3] = i3.to(o2._rgba);
          }
          o2[s3][e3.idx] = w(n2[t4], e3, true);
        }), o2[s3] && g.inArray(null, o2[s3].slice(0, 3)) < 0 && (null == o2[s3][3] && (o2[s3][3] = 1), i3.from) && (o2._rgba = i3.from(o2[s3]));
      }), this) : void 0;
    }, is: function(t2) {
      var n2 = _(t2), o2 = true, a2 = this;
      return b(v, function(t3, e2) {
        var i2, s2 = n2[e2.cache];
        return s2 && (i2 = a2[e2.cache] || e2.to && e2.to(a2._rgba) || [], b(e2.props, function(t4, e3) {
          if (null != s2[e3.idx]) return o2 = s2[e3.idx] === i2[e3.idx];
        })), o2;
      }), o2;
    }, _space: function() {
      var i2 = [], s2 = this;
      return b(v, function(t2, e2) {
        s2[e2.cache] && i2.push(t2);
      }), i2.pop();
    }, transition: function(t2, a2) {
      var t2 = (h2 = _(t2))._space(), e2 = v[t2], i2 = 0 === this.alpha() ? _("transparent") : this, r2 = i2[e2.cache] || e2.to(i2._rgba), l2 = r2.slice(), h2 = h2[e2.cache];
      return b(e2.props, function(t3, e3) {
        var i3 = e3.idx, s2 = r2[i3], n2 = h2[i3], o2 = Q[e3.type] || {};
        null !== n2 && (null === s2 ? l2[i3] = n2 : (o2.mod && (n2 - s2 > o2.mod / 2 ? s2 += o2.mod : s2 - n2 > o2.mod / 2 && (s2 -= o2.mod)), l2[i3] = w((n2 - s2) * a2 + s2, e3)));
      }), this[t2](l2);
    }, blend: function(t2) {
      var e2, i2, s2;
      return 1 === this._rgba[3] ? this : (e2 = this._rgba.slice(), i2 = e2.pop(), s2 = _(t2)._rgba, _(g.map(e2, function(t3, e3) {
        return (1 - i2) * s2[e3] + i2 * t3;
      })));
    }, toRgbaString: function() {
      var t2 = "rgba(", e2 = g.map(this._rgba, function(t3, e3) {
        return null != t3 ? t3 : 2 < e3 ? 1 : 0;
      });
      return 1 === e2[3] && (e2.pop(), t2 = "rgb("), t2 + e2.join() + ")";
    }, toHslaString: function() {
      var t2 = "hsla(", e2 = g.map(this.hsla(), function(t3, e3) {
        return null == t3 && (t3 = 2 < e3 ? 1 : 0), t3 = e3 && e3 < 3 ? Math.round(100 * t3) + "%" : t3;
      });
      return 1 === e2[3] && (e2.pop(), t2 = "hsl("), t2 + e2.join() + ")";
    }, toHexString: function(t2) {
      var e2 = this._rgba.slice(), i2 = e2.pop();
      return t2 && e2.push(~~(255 * i2)), "#" + g.map(e2, function(t3) {
        return 1 === (t3 = (t3 || 0).toString(16)).length ? "0" + t3 : t3;
      }).join("");
    }, toString: function() {
      return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
    } })).parse.prototype = _.fn, v.hsla.to = function(t2) {
      var e2, i2, s2, n2, o2, a2, r2, l2;
      return null == t2[0] || null == t2[1] || null == t2[2] ? [null, null, null, t2[3]] : (e2 = t2[0] / 255, i2 = t2[1] / 255, s2 = t2[2] / 255, t2 = t2[3], n2 = (l2 = Math.max(e2, i2, s2)) - (r2 = Math.min(e2, i2, s2)), a2 = 0.5 * (o2 = l2 + r2), r2 = r2 === l2 ? 0 : e2 === l2 ? 60 * (i2 - s2) / n2 + 360 : i2 === l2 ? 60 * (s2 - e2) / n2 + 120 : 60 * (e2 - i2) / n2 + 240, l2 = 0 == n2 ? 0 : a2 <= 0.5 ? n2 / o2 : n2 / (2 - o2), [Math.round(r2) % 360, l2, a2, null == t2 ? 1 : t2]);
    }, v.hsla.from = function(t2) {
      var e2, i2, s2;
      return null == t2[0] || null == t2[1] || null == t2[2] ? [null, null, null, t2[3]] : (e2 = t2[0] / 360, s2 = t2[1], i2 = t2[2], t2 = t2[3], s2 = 2 * i2 - (i2 = i2 <= 0.5 ? i2 * (1 + s2) : i2 + s2 - i2 * s2), [Math.round(255 * T(s2, i2, e2 + 1 / 3)), Math.round(255 * T(s2, i2, e2)), Math.round(255 * T(s2, i2, e2 - 1 / 3)), t2]);
    }, b(v, function(r2, t2) {
      var e2 = t2.props, o2 = t2.cache, a2 = t2.to, l2 = t2.from;
      _.fn[r2] = function(t3) {
        var i2, s2, n2;
        return a2 && !this[o2] && (this[o2] = a2(this._rgba)), void 0 === t3 ? this[o2].slice() : (i2 = y(t3), s2 = "array" === i2 || "object" === i2 ? t3 : arguments, n2 = this[o2].slice(), b(e2, function(t4, e3) {
          t4 = s2["object" === i2 ? t4 : e3.idx];
          null == t4 && (t4 = n2[e3.idx]), n2[e3.idx] = w(t4, e3);
        }), l2 ? ((t3 = _(l2(n2)))[o2] = n2, t3) : _(n2));
      }, b(e2, function(o3, a3) {
        _.fn[o3] || (_.fn[o3] = function(t3) {
          var e3 = y(t3), i2 = "alpha" === o3 ? this._hsla ? "hsla" : "rgba" : r2, s2 = this[i2](), n2 = s2[a3.idx];
          return "undefined" === e3 ? n2 : ("function" === e3 && (e3 = y(t3 = t3.call(this, n2))), null == t3 && a3.empty ? this : ("string" === e3 && (e3 = $2.exec(t3)) && (t3 = n2 + parseFloat(e3[2]) * ("+" === e3[1] ? 1 : -1)), s2[a3.idx] = t3, this[i2](s2)));
        });
      });
    }), (_.hook = function(t2) {
      t2 = t2.split(" ");
      b(t2, function(t3, o2) {
        g.cssHooks[o2] = { set: function(t4, e2) {
          var i2, s2, n2 = "";
          if ("transparent" !== e2 && ("string" !== y(e2) || (i2 = Z(e2)))) {
            if (e2 = _(i2 || e2), !J.rgba && 1 !== e2._rgba[3]) {
              for (s2 = "backgroundColor" === o2 ? t4.parentNode : t4; ("" === n2 || "transparent" === n2) && s2 && s2.style; ) try {
                n2 = g.css(s2, "backgroundColor"), s2 = s2.parentNode;
              } catch (t5) {
              }
              e2 = e2.blend(n2 && "transparent" !== n2 ? n2 : "_default");
            }
            e2 = e2.toRgbaString();
          }
          try {
            t4.style[o2] = e2;
          } catch (t5) {
          }
        } }, g.fx.step[o2] = function(t4) {
          t4.colorInit || (t4.start = _(t4.elem, o2), t4.end = _(t4.end), t4.colorInit = true), g.cssHooks[o2].set(t4.elem, t4.start.transition(t4.end, t4.pos));
        };
      });
    })("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), g.cssHooks.borderColor = { expand: function(i2) {
      var s2 = {};
      return b(["Top", "Right", "Bottom", "Left"], function(t2, e2) {
        s2["border" + e2 + "Color"] = i2;
      }), s2;
    } };
    var tt, et, it, st, nt, ot, at, rt, lt, P, M = g.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }, S = "ui-effects-", H = "ui-effects-style", z = "ui-effects-animated";
    function ht(t2) {
      var e2, i2, s2 = t2.ownerDocument.defaultView ? t2.ownerDocument.defaultView.getComputedStyle(t2, null) : t2.currentStyle, n2 = {};
      if (s2 && s2.length && s2[0] && s2[s2[0]]) for (i2 = s2.length; i2--; ) "string" == typeof s2[e2 = s2[i2]] && (n2[e2.replace(/-([\da-z])/gi, function(t3, e3) {
        return e3.toUpperCase();
      })] = s2[e2]);
      else for (e2 in s2) "string" == typeof s2[e2] && (n2[e2] = s2[e2]);
      return n2;
    }
    function A(t2, e2, i2, s2) {
      return t2 = { effect: t2 = V.isPlainObject(t2) ? (e2 = t2).effect : t2 }, "function" == typeof (e2 = null == e2 ? {} : e2) && (s2 = e2, i2 = null, e2 = {}), "number" != typeof e2 && !V.fx.speeds[e2] || (s2 = i2, i2 = e2, e2 = {}), "function" == typeof i2 && (s2 = i2, i2 = null), e2 && V.extend(t2, e2), i2 = i2 || e2.duration, t2.duration = V.fx.off ? 0 : "number" == typeof i2 ? i2 : i2 in V.fx.speeds ? V.fx.speeds[i2] : V.fx.speeds._default, t2.complete = s2 || e2.complete, t2;
    }
    function O(t2) {
      return !t2 || "number" == typeof t2 || V.fx.speeds[t2] || "string" == typeof t2 && !V.effects.effect[t2] || "function" == typeof t2 || "object" == typeof t2 && !t2.effect;
    }
    function ct(t2, e2) {
      var i2 = e2.outerWidth(), e2 = e2.outerHeight(), t2 = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t2) || ["", 0, i2, e2, 0];
      return { top: parseFloat(t2[1]) || 0, right: "auto" === t2[2] ? i2 : parseFloat(t2[2]), bottom: "auto" === t2[3] ? e2 : parseFloat(t2[3]), left: parseFloat(t2[4]) || 0 };
    }
    V.effects = { effect: {} }, st = ["add", "remove", "toggle"], nt = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }, V.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t2, e2) {
      V.fx.step[e2] = function(t3) {
        ("none" !== t3.end && !t3.setAttr || 1 === t3.pos && !t3.setAttr) && (g.style(t3.elem, e2, t3.end), t3.setAttr = true);
      };
    }), V.fn.addBack || (V.fn.addBack = function(t2) {
      return this.add(null == t2 ? this.prevObject : this.prevObject.filter(t2));
    }), V.effects.animateClass = function(n2, t2, e2, i2) {
      var o2 = V.speed(t2, e2, i2);
      return this.queue(function() {
        var i3 = V(this), t3 = i3.attr("class") || "", e3 = (e3 = o2.children ? i3.find("*").addBack() : i3).map(function() {
          return { el: V(this), start: ht(this) };
        }), s2 = function() {
          V.each(st, function(t4, e4) {
            n2[e4] && i3[e4 + "Class"](n2[e4]);
          });
        };
        s2(), e3 = e3.map(function() {
          return this.end = ht(this.el[0]), this.diff = function(t4, e4) {
            var i4, s3, n3 = {};
            for (i4 in e4) s3 = e4[i4], t4[i4] === s3 || nt[i4] || !V.fx.step[i4] && isNaN(parseFloat(s3)) || (n3[i4] = s3);
            return n3;
          }(this.start, this.end), this;
        }), i3.attr("class", t3), e3 = e3.map(function() {
          var t4 = this, e4 = V.Deferred(), i4 = V.extend({}, o2, { queue: false, complete: function() {
            e4.resolve(t4);
          } });
          return this.el.animate(this.diff, i4), e4.promise();
        }), V.when.apply(V, e3.get()).done(function() {
          s2(), V.each(arguments, function() {
            var e4 = this.el;
            V.each(this.diff, function(t4) {
              e4.css(t4, "");
            });
          }), o2.complete.call(i3[0]);
        });
      });
    }, V.fn.extend({ addClass: (it = V.fn.addClass, function(t2, e2, i2, s2) {
      return e2 ? V.effects.animateClass.call(this, { add: t2 }, e2, i2, s2) : it.apply(this, arguments);
    }), removeClass: (et = V.fn.removeClass, function(t2, e2, i2, s2) {
      return 1 < arguments.length ? V.effects.animateClass.call(this, { remove: t2 }, e2, i2, s2) : et.apply(this, arguments);
    }), toggleClass: (tt = V.fn.toggleClass, function(t2, e2, i2, s2, n2) {
      return "boolean" == typeof e2 || void 0 === e2 ? i2 ? V.effects.animateClass.call(this, e2 ? { add: t2 } : { remove: t2 }, i2, s2, n2) : tt.apply(this, arguments) : V.effects.animateClass.call(this, { toggle: t2 }, e2, i2, s2);
    }), switchClass: function(t2, e2, i2, s2, n2) {
      return V.effects.animateClass.call(this, { add: e2, remove: t2 }, i2, s2, n2);
    } }), V.expr && V.expr.pseudos && V.expr.pseudos.animated && (V.expr.pseudos.animated = (ot = V.expr.pseudos.animated, function(t2) {
      return !!V(t2).data(z) || ot(t2);
    })), false !== V.uiBackCompat && V.extend(V.effects, { save: function(t2, e2) {
      for (var i2 = 0, s2 = e2.length; i2 < s2; i2++) null !== e2[i2] && t2.data(S + e2[i2], t2[0].style[e2[i2]]);
    }, restore: function(t2, e2) {
      for (var i2, s2 = 0, n2 = e2.length; s2 < n2; s2++) null !== e2[s2] && (i2 = t2.data(S + e2[s2]), t2.css(e2[s2], i2));
    }, setMode: function(t2, e2) {
      return e2 = "toggle" === e2 ? t2.is(":hidden") ? "show" : "hide" : e2;
    }, createWrapper: function(i2) {
      if (i2.parent().is(".ui-effects-wrapper")) return i2.parent();
      var s2 = { width: i2.outerWidth(true), height: i2.outerHeight(true), float: i2.css("float") }, t2 = V("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), e2 = { width: i2.width(), height: i2.height() }, n2 = document.activeElement;
      try {
        n2.id;
      } catch (t3) {
        n2 = document.body;
      }
      return i2.wrap(t2), i2[0] !== n2 && !V.contains(i2[0], n2) || V(n2).trigger("focus"), t2 = i2.parent(), "static" === i2.css("position") ? (t2.css({ position: "relative" }), i2.css({ position: "relative" })) : (V.extend(s2, { position: i2.css("position"), zIndex: i2.css("z-index") }), V.each(["top", "left", "bottom", "right"], function(t3, e3) {
        s2[e3] = i2.css(e3), isNaN(parseInt(s2[e3], 10)) && (s2[e3] = "auto");
      }), i2.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), i2.css(e2), t2.css(s2).show();
    }, removeWrapper: function(t2) {
      var e2 = document.activeElement;
      return t2.parent().is(".ui-effects-wrapper") && (t2.parent().replaceWith(t2), t2[0] !== e2 && !V.contains(t2[0], e2) || V(e2).trigger("focus")), t2;
    } }), V.extend(V.effects, { version: "1.13.3", define: function(t2, e2, i2) {
      return i2 || (i2 = e2, e2 = "effect"), V.effects.effect[t2] = i2, V.effects.effect[t2].mode = e2, i2;
    }, scaledDimensions: function(t2, e2, i2) {
      var s2;
      return 0 === e2 ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : (s2 = "horizontal" !== i2 ? (e2 || 100) / 100 : 1, i2 = "vertical" !== i2 ? (e2 || 100) / 100 : 1, { height: t2.height() * i2, width: t2.width() * s2, outerHeight: t2.outerHeight() * i2, outerWidth: t2.outerWidth() * s2 });
    }, clipToBox: function(t2) {
      return { width: t2.clip.right - t2.clip.left, height: t2.clip.bottom - t2.clip.top, left: t2.clip.left, top: t2.clip.top };
    }, unshift: function(t2, e2, i2) {
      var s2 = t2.queue();
      1 < e2 && s2.splice.apply(s2, [1, 0].concat(s2.splice(e2, i2))), t2.dequeue();
    }, saveStyle: function(t2) {
      t2.data(H, t2[0].style.cssText);
    }, restoreStyle: function(t2) {
      t2[0].style.cssText = t2.data(H) || "", t2.removeData(H);
    }, mode: function(t2, e2) {
      t2 = t2.is(":hidden");
      return "toggle" === e2 && (e2 = t2 ? "show" : "hide"), e2 = (t2 ? "hide" === e2 : "show" === e2) ? "none" : e2;
    }, getBaseline: function(t2, e2) {
      var i2, s2;
      switch (t2[0]) {
        case "top":
          i2 = 0;
          break;
        case "middle":
          i2 = 0.5;
          break;
        case "bottom":
          i2 = 1;
          break;
        default:
          i2 = t2[0] / e2.height;
      }
      switch (t2[1]) {
        case "left":
          s2 = 0;
          break;
        case "center":
          s2 = 0.5;
          break;
        case "right":
          s2 = 1;
          break;
        default:
          s2 = t2[1] / e2.width;
      }
      return { x: s2, y: i2 };
    }, createPlaceholder: function(t2) {
      var e2, i2 = t2.css("position"), s2 = t2.position();
      return t2.css({ marginTop: t2.css("marginTop"), marginBottom: t2.css("marginBottom"), marginLeft: t2.css("marginLeft"), marginRight: t2.css("marginRight") }).outerWidth(t2.outerWidth()).outerHeight(t2.outerHeight()), /^(static|relative)/.test(i2) && (i2 = "absolute", e2 = V("<" + t2[0].nodeName + ">").insertAfter(t2).css({ display: /^(inline|ruby)/.test(t2.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: t2.css("marginTop"), marginBottom: t2.css("marginBottom"), marginLeft: t2.css("marginLeft"), marginRight: t2.css("marginRight"), float: t2.css("float") }).outerWidth(t2.outerWidth()).outerHeight(t2.outerHeight()).addClass("ui-effects-placeholder"), t2.data(S + "placeholder", e2)), t2.css({ position: i2, left: s2.left, top: s2.top }), e2;
    }, removePlaceholder: function(t2) {
      var e2 = S + "placeholder", i2 = t2.data(e2);
      i2 && (i2.remove(), t2.removeData(e2));
    }, cleanUp: function(t2) {
      V.effects.restoreStyle(t2), V.effects.removePlaceholder(t2);
    }, setTransition: function(s2, t2, n2, o2) {
      return o2 = o2 || {}, V.each(t2, function(t3, e2) {
        var i2 = s2.cssUnit(e2);
        0 < i2[0] && (o2[e2] = i2[0] * n2 + i2[1]);
      }), o2;
    } }), V.fn.extend({ effect: function() {
      function t2(t3) {
        var e3 = V(this), i3 = V.effects.mode(e3, r2) || o2;
        e3.data(z, true), l2.push(i3), o2 && ("show" === i3 || i3 === o2 && "hide" === i3) && e3.show(), o2 && "none" === i3 || V.effects.saveStyle(e3), "function" == typeof t3 && t3();
      }
      var s2 = A.apply(this, arguments), n2 = V.effects.effect[s2.effect], o2 = n2.mode, e2 = s2.queue, i2 = e2 || "fx", a2 = s2.complete, r2 = s2.mode, l2 = [];
      return V.fx.off || !n2 ? r2 ? this[r2](s2.duration, a2) : this.each(function() {
        a2 && a2.call(this);
      }) : false === e2 ? this.each(t2).each(h2) : this.queue(i2, t2).queue(i2, h2);
      function h2(t3) {
        var e3 = V(this);
        function i3() {
          "function" == typeof a2 && a2.call(e3[0]), "function" == typeof t3 && t3();
        }
        s2.mode = l2.shift(), false === V.uiBackCompat || o2 ? "none" === s2.mode ? (e3[r2](), i3()) : n2.call(e3[0], s2, function() {
          e3.removeData(z), V.effects.cleanUp(e3), "hide" === s2.mode && e3.hide(), i3();
        }) : (e3.is(":hidden") ? "hide" === r2 : "show" === r2) ? (e3[r2](), i3()) : n2.call(e3[0], s2, i3);
      }
    }, show: (lt = V.fn.show, function(t2) {
      return O(t2) ? lt.apply(this, arguments) : ((t2 = A.apply(this, arguments)).mode = "show", this.effect.call(this, t2));
    }), hide: (rt = V.fn.hide, function(t2) {
      return O(t2) ? rt.apply(this, arguments) : ((t2 = A.apply(this, arguments)).mode = "hide", this.effect.call(this, t2));
    }), toggle: (at = V.fn.toggle, function(t2) {
      return O(t2) || "boolean" == typeof t2 ? at.apply(this, arguments) : ((t2 = A.apply(this, arguments)).mode = "toggle", this.effect.call(this, t2));
    }), cssUnit: function(t2) {
      var i2 = this.css(t2), s2 = [];
      return V.each(["em", "px", "%", "pt"], function(t3, e2) {
        0 < i2.indexOf(e2) && (s2 = [parseFloat(i2), e2]);
      }), s2;
    }, cssClip: function(t2) {
      return t2 ? this.css("clip", "rect(" + t2.top + "px " + t2.right + "px " + t2.bottom + "px " + t2.left + "px)") : ct(this.css("clip"), this);
    }, transfer: function(t2, e2) {
      var i2 = V(this), s2 = V(t2.to), n2 = "fixed" === s2.css("position"), o2 = V("body"), a2 = n2 ? o2.scrollTop() : 0, o2 = n2 ? o2.scrollLeft() : 0, r2 = s2.offset(), r2 = { top: r2.top - a2, left: r2.left - o2, height: s2.innerHeight(), width: s2.innerWidth() }, s2 = i2.offset(), l2 = V("<div class='ui-effects-transfer'></div>");
      l2.appendTo("body").addClass(t2.className).css({ top: s2.top - a2, left: s2.left - o2, height: i2.innerHeight(), width: i2.innerWidth(), position: n2 ? "fixed" : "absolute" }).animate(r2, t2.duration, t2.easing, function() {
        l2.remove(), "function" == typeof e2 && e2();
      });
    } }), V.fx.step.clip = function(t2) {
      t2.clipInit || (t2.start = V(t2.elem).cssClip(), "string" == typeof t2.end && (t2.end = ct(t2.end, t2.elem)), t2.clipInit = true), V(t2.elem).cssClip({ top: t2.pos * (t2.end.top - t2.start.top) + t2.start.top, right: t2.pos * (t2.end.right - t2.start.right) + t2.start.right, bottom: t2.pos * (t2.end.bottom - t2.start.bottom) + t2.start.bottom, left: t2.pos * (t2.end.left - t2.start.left) + t2.start.left });
    }, P = {}, V.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e2, t2) {
      P[t2] = function(t3) {
        return Math.pow(t3, e2 + 2);
      };
    }), V.extend(P, { Sine: function(t2) {
      return 1 - Math.cos(t2 * Math.PI / 2);
    }, Circ: function(t2) {
      return 1 - Math.sqrt(1 - t2 * t2);
    }, Elastic: function(t2) {
      return 0 === t2 || 1 === t2 ? t2 : -Math.pow(2, 8 * (t2 - 1)) * Math.sin((80 * (t2 - 1) - 7.5) * Math.PI / 15);
    }, Back: function(t2) {
      return t2 * t2 * (3 * t2 - 2);
    }, Bounce: function(t2) {
      for (var e2, i2 = 4; t2 < ((e2 = Math.pow(2, --i2)) - 1) / 11; ) ;
      return 1 / Math.pow(4, 3 - i2) - 7.5625 * Math.pow((3 * e2 - 2) / 22 - t2, 2);
    } }), V.each(P, function(t2, e2) {
      V.easing["easeIn" + t2] = e2, V.easing["easeOut" + t2] = function(t3) {
        return 1 - e2(1 - t3);
      }, V.easing["easeInOut" + t2] = function(t3) {
        return t3 < 0.5 ? e2(2 * t3) / 2 : 1 - e2(-2 * t3 + 2) / 2;
      };
    });
    t = V.effects;
    V.effects.define("blind", "hide", function(t2, e2) {
      var i2 = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] }, s2 = V(this), n2 = t2.direction || "up", o2 = s2.cssClip(), a2 = { clip: V.extend({}, o2) }, r2 = V.effects.createPlaceholder(s2);
      a2.clip[i2[n2][0]] = a2.clip[i2[n2][1]], "show" === t2.mode && (s2.cssClip(a2.clip), r2 && r2.css(V.effects.clipToBox(a2)), a2.clip = o2), r2 && r2.animate(V.effects.clipToBox(a2), t2.duration, t2.easing), s2.animate(a2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
    }), V.effects.define("bounce", function(t2, e2) {
      var i2, s2, n2 = V(this), o2 = t2.mode, a2 = "hide" === o2, o2 = "show" === o2, r2 = t2.direction || "up", l2 = t2.distance, h2 = t2.times || 5, c2 = 2 * h2 + (o2 || a2 ? 1 : 0), u2 = t2.duration / c2, d2 = t2.easing, p2 = "up" === r2 || "down" === r2 ? "top" : "left", f2 = "up" === r2 || "left" === r2, g2 = 0, t2 = n2.queue().length;
      for (V.effects.createPlaceholder(n2), r2 = n2.css(p2), l2 = l2 || n2["top" == p2 ? "outerHeight" : "outerWidth"]() / 3, o2 && ((s2 = { opacity: 1 })[p2] = r2, n2.css("opacity", 0).css(p2, f2 ? 2 * -l2 : 2 * l2).animate(s2, u2, d2)), a2 && (l2 /= Math.pow(2, h2 - 1)), (s2 = {})[p2] = r2; g2 < h2; g2++) (i2 = {})[p2] = (f2 ? "-=" : "+=") + l2, n2.animate(i2, u2, d2).animate(s2, u2, d2), l2 = a2 ? 2 * l2 : l2 / 2;
      a2 && ((i2 = { opacity: 0 })[p2] = (f2 ? "-=" : "+=") + l2, n2.animate(i2, u2, d2)), n2.queue(e2), V.effects.unshift(n2, t2, 1 + c2);
    }), V.effects.define("clip", "hide", function(t2, e2) {
      var i2 = {}, s2 = V(this), n2 = t2.direction || "vertical", o2 = "both" === n2, a2 = o2 || "horizontal" === n2, o2 = o2 || "vertical" === n2, n2 = s2.cssClip();
      i2.clip = { top: o2 ? (n2.bottom - n2.top) / 2 : n2.top, right: a2 ? (n2.right - n2.left) / 2 : n2.right, bottom: o2 ? (n2.bottom - n2.top) / 2 : n2.bottom, left: a2 ? (n2.right - n2.left) / 2 : n2.left }, V.effects.createPlaceholder(s2), "show" === t2.mode && (s2.cssClip(i2.clip), i2.clip = n2), s2.animate(i2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
    }), V.effects.define("drop", "hide", function(t2, e2) {
      var i2, s2 = V(this), n2 = "show" === t2.mode, o2 = t2.direction || "left", a2 = "up" === o2 || "down" === o2 ? "top" : "left", o2 = "up" === o2 || "left" === o2 ? "-=" : "+=", r2 = "+=" == o2 ? "-=" : "+=", l2 = { opacity: 0 };
      V.effects.createPlaceholder(s2), i2 = t2.distance || s2["top" == a2 ? "outerHeight" : "outerWidth"](true) / 2, l2[a2] = o2 + i2, n2 && (s2.css(l2), l2[a2] = r2 + i2, l2.opacity = 1), s2.animate(l2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
    }), V.effects.define("explode", "hide", function(t2, e2) {
      var i2, s2, n2, o2, a2, r2, l2 = t2.pieces ? Math.round(Math.sqrt(t2.pieces)) : 3, h2 = l2, c2 = V(this), u2 = "show" === t2.mode, d2 = c2.show().css("visibility", "hidden").offset(), p2 = Math.ceil(c2.outerWidth() / h2), f2 = Math.ceil(c2.outerHeight() / l2), g2 = [];
      function m2() {
        g2.push(this), g2.length === l2 * h2 && (c2.css({ visibility: "visible" }), V(g2).remove(), e2());
      }
      for (i2 = 0; i2 < l2; i2++) for (o2 = d2.top + i2 * f2, r2 = i2 - (l2 - 1) / 2, s2 = 0; s2 < h2; s2++) n2 = d2.left + s2 * p2, a2 = s2 - (h2 - 1) / 2, c2.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -s2 * p2, top: -i2 * f2 }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: p2, height: f2, left: n2 + (u2 ? a2 * p2 : 0), top: o2 + (u2 ? r2 * f2 : 0), opacity: u2 ? 0 : 1 }).animate({ left: n2 + (u2 ? 0 : a2 * p2), top: o2 + (u2 ? 0 : r2 * f2), opacity: u2 ? 1 : 0 }, t2.duration || 500, t2.easing, m2);
    }), V.effects.define("fade", "toggle", function(t2, e2) {
      var i2 = "show" === t2.mode;
      V(this).css("opacity", i2 ? 0 : 1).animate({ opacity: i2 ? 1 : 0 }, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
    }), V.effects.define("fold", "hide", function(e2, t2) {
      var i2 = V(this), s2 = e2.mode, n2 = "show" === s2, s2 = "hide" === s2, o2 = e2.size || 15, a2 = /([0-9]+)%/.exec(o2), r2 = !!e2.horizFirst ? ["right", "bottom"] : ["bottom", "right"], l2 = e2.duration / 2, h2 = V.effects.createPlaceholder(i2), c2 = i2.cssClip(), u2 = { clip: V.extend({}, c2) }, d2 = { clip: V.extend({}, c2) }, p2 = [c2[r2[0]], c2[r2[1]]], f2 = i2.queue().length;
      a2 && (o2 = parseInt(a2[1], 10) / 100 * p2[s2 ? 0 : 1]), u2.clip[r2[0]] = o2, d2.clip[r2[0]] = o2, d2.clip[r2[1]] = 0, n2 && (i2.cssClip(d2.clip), h2 && h2.css(V.effects.clipToBox(d2)), d2.clip = c2), i2.queue(function(t3) {
        h2 && h2.animate(V.effects.clipToBox(u2), l2, e2.easing).animate(V.effects.clipToBox(d2), l2, e2.easing), t3();
      }).animate(u2, l2, e2.easing).animate(d2, l2, e2.easing).queue(t2), V.effects.unshift(i2, f2, 4);
    }), V.effects.define("highlight", "show", function(t2, e2) {
      var i2 = V(this), s2 = { backgroundColor: i2.css("backgroundColor") };
      "hide" === t2.mode && (s2.opacity = 0), V.effects.saveStyle(i2), i2.css({ backgroundImage: "none", backgroundColor: t2.color || "#ffff99" }).animate(s2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
    }), V.effects.define("size", function(s2, e2) {
      var n2, i2 = V(this), t2 = ["fontSize"], o2 = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], a2 = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], r2 = s2.mode, l2 = "effect" !== r2, h2 = s2.scale || "both", c2 = s2.origin || ["middle", "center"], u2 = i2.css("position"), d2 = i2.position(), p2 = V.effects.scaledDimensions(i2), f2 = s2.from || p2, g2 = s2.to || V.effects.scaledDimensions(i2, 0);
      V.effects.createPlaceholder(i2), "show" === r2 && (r2 = f2, f2 = g2, g2 = r2), n2 = { from: { y: f2.height / p2.height, x: f2.width / p2.width }, to: { y: g2.height / p2.height, x: g2.width / p2.width } }, "box" !== h2 && "both" !== h2 || (n2.from.y !== n2.to.y && (f2 = V.effects.setTransition(i2, o2, n2.from.y, f2), g2 = V.effects.setTransition(i2, o2, n2.to.y, g2)), n2.from.x !== n2.to.x && (f2 = V.effects.setTransition(i2, a2, n2.from.x, f2), g2 = V.effects.setTransition(i2, a2, n2.to.x, g2))), "content" !== h2 && "both" !== h2 || n2.from.y !== n2.to.y && (f2 = V.effects.setTransition(i2, t2, n2.from.y, f2), g2 = V.effects.setTransition(i2, t2, n2.to.y, g2)), c2 && (r2 = V.effects.getBaseline(c2, p2), f2.top = (p2.outerHeight - f2.outerHeight) * r2.y + d2.top, f2.left = (p2.outerWidth - f2.outerWidth) * r2.x + d2.left, g2.top = (p2.outerHeight - g2.outerHeight) * r2.y + d2.top, g2.left = (p2.outerWidth - g2.outerWidth) * r2.x + d2.left), delete f2.outerHeight, delete f2.outerWidth, i2.css(f2), "content" !== h2 && "both" !== h2 || (o2 = o2.concat(["marginTop", "marginBottom"]).concat(t2), a2 = a2.concat(["marginLeft", "marginRight"]), i2.find("*[width]").each(function() {
        var t3 = V(this), e3 = V.effects.scaledDimensions(t3), i3 = { height: e3.height * n2.from.y, width: e3.width * n2.from.x, outerHeight: e3.outerHeight * n2.from.y, outerWidth: e3.outerWidth * n2.from.x }, e3 = { height: e3.height * n2.to.y, width: e3.width * n2.to.x, outerHeight: e3.height * n2.to.y, outerWidth: e3.width * n2.to.x };
        n2.from.y !== n2.to.y && (i3 = V.effects.setTransition(t3, o2, n2.from.y, i3), e3 = V.effects.setTransition(t3, o2, n2.to.y, e3)), n2.from.x !== n2.to.x && (i3 = V.effects.setTransition(t3, a2, n2.from.x, i3), e3 = V.effects.setTransition(t3, a2, n2.to.x, e3)), l2 && V.effects.saveStyle(t3), t3.css(i3), t3.animate(e3, s2.duration, s2.easing, function() {
          l2 && V.effects.restoreStyle(t3);
        });
      })), i2.animate(g2, { queue: false, duration: s2.duration, easing: s2.easing, complete: function() {
        var t3 = i2.offset();
        0 === g2.opacity && i2.css("opacity", f2.opacity), l2 || (i2.css("position", "static" === u2 ? "relative" : u2).offset(t3), V.effects.saveStyle(i2)), e2();
      } });
    }), V.effects.define("scale", function(t2, e2) {
      var i2 = V(this), s2 = t2.mode, s2 = parseInt(t2.percent, 10) || (0 === parseInt(t2.percent, 10) || "effect" !== s2 ? 0 : 100), i2 = V.extend(true, { from: V.effects.scaledDimensions(i2), to: V.effects.scaledDimensions(i2, s2, t2.direction || "both"), origin: t2.origin || ["middle", "center"] }, t2);
      t2.fade && (i2.from.opacity = 1, i2.to.opacity = 0), V.effects.effect.size.call(this, i2, e2);
    }), V.effects.define("puff", "hide", function(t2, e2) {
      t2 = V.extend(true, {}, t2, { fade: true, percent: parseInt(t2.percent, 10) || 150 });
      V.effects.effect.scale.call(this, t2, e2);
    }), V.effects.define("pulsate", "show", function(t2, e2) {
      var i2 = V(this), s2 = t2.mode, n2 = "show" === s2, o2 = 2 * (t2.times || 5) + (n2 || "hide" === s2 ? 1 : 0), a2 = t2.duration / o2, r2 = 0, l2 = 1, s2 = i2.queue().length;
      for (!n2 && i2.is(":visible") || (i2.css("opacity", 0).show(), r2 = 1); l2 < o2; l2++) i2.animate({ opacity: r2 }, a2, t2.easing), r2 = 1 - r2;
      i2.animate({ opacity: r2 }, a2, t2.easing), i2.queue(e2), V.effects.unshift(i2, s2, 1 + o2);
    }), V.effects.define("shake", function(t2, e2) {
      var i2 = 1, s2 = V(this), n2 = t2.direction || "left", o2 = t2.distance || 20, a2 = t2.times || 3, r2 = 2 * a2 + 1, l2 = Math.round(t2.duration / r2), h2 = "up" === n2 || "down" === n2 ? "top" : "left", n2 = "up" === n2 || "left" === n2, c2 = {}, u2 = {}, d2 = {}, p2 = s2.queue().length;
      for (V.effects.createPlaceholder(s2), c2[h2] = (n2 ? "-=" : "+=") + o2, u2[h2] = (n2 ? "+=" : "-=") + 2 * o2, d2[h2] = (n2 ? "-=" : "+=") + 2 * o2, s2.animate(c2, l2, t2.easing); i2 < a2; i2++) s2.animate(u2, l2, t2.easing).animate(d2, l2, t2.easing);
      s2.animate(u2, l2, t2.easing).animate(c2, l2 / 2, t2.easing).queue(e2), V.effects.unshift(s2, p2, 1 + r2);
    }), V.effects.define("slide", "show", function(t2, e2) {
      var i2, s2, n2 = V(this), o2 = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] }, a2 = t2.mode, r2 = t2.direction || "left", l2 = "up" === r2 || "down" === r2 ? "top" : "left", h2 = "up" === r2 || "left" === r2, c2 = t2.distance || n2["top" == l2 ? "outerHeight" : "outerWidth"](true), u2 = {};
      V.effects.createPlaceholder(n2), i2 = n2.cssClip(), s2 = n2.position()[l2], u2[l2] = (h2 ? -1 : 1) * c2 + s2, u2.clip = n2.cssClip(), u2.clip[o2[r2][1]] = u2.clip[o2[r2][0]], "show" === a2 && (n2.cssClip(u2.clip), n2.css(l2, u2[l2]), u2.clip = i2, u2[l2] = s2), n2.animate(u2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
    }), false !== V.uiBackCompat && V.effects.define("transfer", function(t2, e2) {
      V(this).transfer(t2, e2);
    });
  });
  /*!
   * Bootstrap v5.3.3 (https://getbootstrap.com/)
   * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
  !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
  }(void 0, function() {
    const t = /* @__PURE__ */ new Map(), e = {
      set(e2, i2, n2) {
        t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
        const s2 = t.get(e2);
        s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`
        );
      },
      get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null,
      remove(e2, i2) {
        if (!t.has(e2)) return;
        const n2 = t.get(e2);
        n2.delete(i2), 0 === n2.size && t.delete(e2);
      }
    }, i = "transitionend", n = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s = (t2) => {
      t2.dispatchEvent(new Event(i));
    }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, a = (t2) => {
      if (!o(t2) || 0 === t2.getClientRects().length) return false;
      const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
      if (!i2) return e2;
      if (i2 !== t2) {
        const e3 = t2.closest("summary");
        if (e3 && e3.parentNode !== i2) return false;
        if (null === e3) return false;
      }
      return e2;
    }, l = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), c = (t2) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t2.getRootNode) {
        const e2 = t2.getRootNode();
        return e2 instanceof ShadowRoot ? e2 : null;
      }
      return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
    }, h = () => {
    }, d = (t2) => {
      t2.offsetHeight;
    }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = () => "rtl" === document.documentElement.dir, m = (t2) => {
      var e2;
      e2 = () => {
        const e3 = u();
        if (e3) {
          const i2 = t2.NAME, n2 = e3.fn[i2];
          e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
        }
      }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
        for (const t3 of f) t3();
      }), f.push(e2)) : e2();
    }, g = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2(...e2) : i2, _ = (t2, e2, n2 = true) => {
      if (!n2) return void g(t2);
      const o2 = ((t3) => {
        if (!t3) return 0;
        let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
        const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i2);
        return n3 || s2 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
      })(e2) + 5;
      let r2 = false;
      const a2 = ({ target: n3 }) => {
        n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), g(t2));
      };
      e2.addEventListener(i, a2), setTimeout(() => {
        r2 || s(e2);
      }, o2);
    }, b = (t2, e2, i2, n2) => {
      const s2 = t2.length;
      let o2 = t2.indexOf(e2);
      return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
    }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
    let E = 1;
    const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll"
    ]);
    function O(t2, e2) {
      return e2 && `${e2}::${E++}` || t2.uidEvent || E++;
    }
    function x(t2) {
      const e2 = O(t2);
      return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
    }
    function k(t2, e2, i2 = null) {
      return Object.values(t2).find(
        (t3) => t3.callable === e2 && t3.delegationSelector === i2
      );
    }
    function L(t2, e2, i2) {
      const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
      let o2 = I(t2);
      return C.has(o2) || (o2 = t2), [n2, s2, o2];
    }
    function S(t2, e2, i2, n2, s2) {
      if ("string" != typeof e2 || !t2) return;
      let [o2, r2, a2] = L(e2, i2, n2);
      if (e2 in T) {
        const t3 = (t4) => function(e3) {
          if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
            return t4.call(this, e3);
        };
        r2 = t3(r2);
      }
      const l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = k(c2, r2, o2 ? i2 : null);
      if (h2) return void (h2.oneOff = h2.oneOff && s2);
      const d2 = O(r2, e2.replace(v, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
        return function n3(s3) {
          const o3 = t3.querySelectorAll(e3);
          for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode)
            for (const a3 of o3)
              if (a3 === r3)
                return P(s3, { delegateTarget: r3 }), n3.oneOff && N.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
        };
      }(t2, i2, r2) : /* @__PURE__ */ function(t3, e3) {
        return function i3(n3) {
          return P(n3, { delegateTarget: t3 }), i3.oneOff && N.off(t3, n3.type, e3), e3.apply(t3, [n3]);
        };
      }(t2, r2);
      u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
    }
    function D(t2, e2, i2, n2, s2) {
      const o2 = k(e2[i2], n2, s2);
      o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
    }
    function $2(t2, e2, i2, n2) {
      const s2 = e2[i2] || {};
      for (const [o2, r2] of Object.entries(s2))
        o2.includes(n2) && D(t2, e2, i2, r2.callable, r2.delegationSelector);
    }
    function I(t2) {
      return t2 = t2.replace(y, ""), T[t2] || t2;
    }
    const N = {
      on(t2, e2, i2, n2) {
        S(t2, e2, i2, n2, false);
      },
      one(t2, e2, i2, n2) {
        S(t2, e2, i2, n2, true);
      },
      off(t2, e2, i2, n2) {
        if ("string" != typeof e2 || !t2) return;
        const [s2, o2, r2] = L(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
        if (void 0 === o2) {
          if (h2) for (const i3 of Object.keys(l2)) $2(t2, l2, i3, e2.slice(1));
          for (const [i3, n3] of Object.entries(c2)) {
            const s3 = i3.replace(w, "");
            a2 && !e2.includes(s3) || D(t2, l2, r2, n3.callable, n3.delegationSelector);
          }
        } else {
          if (!Object.keys(c2).length) return;
          D(t2, l2, r2, o2, s2 ? i2 : null);
        }
      },
      trigger(t2, e2, i2) {
        if ("string" != typeof e2 || !t2) return null;
        const n2 = u();
        let s2 = null, o2 = true, r2 = true, a2 = false;
        e2 !== I(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
        const l2 = P(new Event(e2, { bubbles: o2, cancelable: true }), i2);
        return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
      }
    };
    function P(t2, e2 = {}) {
      for (const [i2, n2] of Object.entries(e2))
        try {
          t2[i2] = n2;
        } catch (e3) {
          Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
        }
      return t2;
    }
    function j(t2) {
      if ("true" === t2) return true;
      if ("false" === t2) return false;
      if (t2 === Number(t2).toString()) return Number(t2);
      if ("" === t2 || "null" === t2) return null;
      if ("string" != typeof t2) return t2;
      try {
        return JSON.parse(decodeURIComponent(t2));
      } catch (e2) {
        return t2;
      }
    }
    function M(t2) {
      return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
    }
    const F = {
      setDataAttribute(t2, e2, i2) {
        t2.setAttribute(`data-bs-${M(e2)}`, i2);
      },
      removeDataAttribute(t2, e2) {
        t2.removeAttribute(`data-bs-${M(e2)}`);
      },
      getDataAttributes(t2) {
        if (!t2) return {};
        const e2 = {}, i2 = Object.keys(t2.dataset).filter(
          (t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig")
        );
        for (const n2 of i2) {
          let i3 = n2.replace(/^bs/, "");
          i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = j(t2.dataset[n2]);
        }
        return e2;
      },
      getDataAttribute: (t2, e2) => j(t2.getAttribute(`data-bs-${M(e2)}`))
    };
    class H {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(t2) {
        return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
      }
      _configAfterMerge(t2) {
        return t2;
      }
      _mergeConfigObj(t2, e2) {
        const i2 = o(e2) ? F.getDataAttribute(e2, "config") : {};
        return {
          ...this.constructor.Default,
          ..."object" == typeof i2 ? i2 : {},
          ...o(e2) ? F.getDataAttributes(e2) : {},
          ..."object" == typeof t2 ? t2 : {}
        };
      }
      _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
        for (const [n2, s2] of Object.entries(e2)) {
          const e3 = t2[n2], r2 = o(e3) ? "element" : null == (i2 = e3) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(s2).test(r2))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${n2}" provided type "${r2}" but expected type "${s2}".`
            );
        }
        var i2;
      }
    }
    class W extends H {
      constructor(t2, i2) {
        super(), (t2 = r(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
        for (const t2 of Object.getOwnPropertyNames(this)) this[t2] = null;
      }
      _queueCallback(t2, e2, i2 = true) {
        _(t2, e2, i2);
      }
      _getConfig(t2) {
        return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
      }
      static getInstance(t2) {
        return e.get(r(t2), this.DATA_KEY);
      }
      static getOrCreateInstance(t2, e2 = {}) {
        return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(t2) {
        return `${t2}${this.EVENT_KEY}`;
      }
    }
    const B = (t2) => {
      let e2 = t2.getAttribute("data-bs-target");
      if (!e2 || "#" === e2) {
        let i2 = t2.getAttribute("href");
        if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
        i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
      }
      return e2 ? e2.split(",").map((t3) => n(t3)).join(",") : null;
    }, z = {
      find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)),
      findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2),
      children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)),
      parents(t2, e2) {
        const i2 = [];
        let n2 = t2.parentNode.closest(e2);
        for (; n2; ) i2.push(n2), n2 = n2.parentNode.closest(e2);
        return i2;
      },
      prev(t2, e2) {
        let i2 = t2.previousElementSibling;
        for (; i2; ) {
          if (i2.matches(e2)) return [i2];
          i2 = i2.previousElementSibling;
        }
        return [];
      },
      next(t2, e2) {
        let i2 = t2.nextElementSibling;
        for (; i2; ) {
          if (i2.matches(e2)) return [i2];
          i2 = i2.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t2) {
        const e2 = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]'
        ].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
        return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
      },
      getSelectorFromElement(t2) {
        const e2 = B(t2);
        return e2 && z.findOne(e2) ? e2 : null;
      },
      getElementFromSelector(t2) {
        const e2 = B(t2);
        return e2 ? z.findOne(e2) : null;
      },
      getMultipleElementsFromSelector(t2) {
        const e2 = B(t2);
        return e2 ? z.find(e2) : [];
      }
    }, R = (t2, e2 = "hide") => {
      const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
      N.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
        if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), l(this))
          return;
        const s2 = z.getElementFromSelector(this) || this.closest(`.${n2}`);
        t2.getOrCreateInstance(s2)[e2]();
      });
    }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
    class Q extends W {
      static get NAME() {
        return "alert";
      }
      close() {
        if (N.trigger(this._element, V).defaultPrevented) return;
        this._element.classList.remove("show");
        const t2 = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, t2);
      }
      _destroyElement() {
        this._element.remove(), N.trigger(this._element, K), this.dispose();
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = Q.getOrCreateInstance(this);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
              throw new TypeError(`No method named "${t2}"`);
            e2[t2](this);
          }
        });
      }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = Y.getOrCreateInstance(this);
          "toggle" === t2 && e2[t2]();
        });
      }
    }
    N.on(document, "click.bs.button.data-api", X, (t2) => {
      t2.preventDefault();
      const e2 = t2.target.closest(X);
      Y.getOrCreateInstance(e2).toggle();
    }), m(Y);
    const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = { endCallback: null, leftCallback: null, rightCallback: null }, nt = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
    class st extends H {
      constructor(t2, e2) {
        super(), this._element = t2, t2 && st.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
      }
      static get Default() {
        return it;
      }
      static get DefaultType() {
        return nt;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        N.off(this._element, U);
      }
      _start(t2) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
      }
      _end(t2) {
        this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
      }
      _move(t2) {
        this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const t2 = Math.abs(this._deltaX);
        if (t2 <= 40) return;
        const e2 = t2 / this._deltaX;
        this._deltaX = 0, e2 && g(
          e2 > 0 ? this._config.rightCallback : this._config.leftCallback
        );
      }
      _initEvents() {
        this._supportPointerEvents ? (N.on(this._element, tt, (t2) => this._start(t2)), N.on(this._element, et, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t2) => this._start(t2)), N.on(this._element, J, (t2) => this._move(t2)), N.on(this._element, Z, (t2) => this._end(t2)));
      }
      _eventIsPointerPenTouch(t2) {
        return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = { ArrowLeft: ht, ArrowRight: ct }, Ct = {
      interval: 5e3,
      keyboard: true,
      pause: "hover",
      ride: false,
      touch: true,
      wrap: true
    }, Ot = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
    class xt extends W {
      constructor(t2, e2) {
        super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(
          ".carousel-indicators",
          this._element
        ), this._addEventListeners(), this._config.ride === vt && this.cycle();
      }
      static get Default() {
        return Ct;
      }
      static get DefaultType() {
        return Ot;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(at);
      }
      nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
      prev() {
        this._slide(lt);
      }
      pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        );
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle());
      }
      to(t2) {
        const e2 = this._getItems();
        if (t2 > e2.length - 1 || t2 < 0) return;
        if (this._isSliding)
          return void N.one(this._element, ut, () => this.to(t2));
        const i2 = this._getItemIndex(this._getActive());
        if (i2 === t2) return;
        const n2 = t2 > i2 ? at : lt;
        this._slide(n2, e2[t2]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(t2) {
        return t2.defaultInterval = t2.interval, t2;
      }
      _addEventListeners() {
        this._config.keyboard && N.on(this._element, ft, (t2) => this._keydown(t2)), "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t3 of z.find(".carousel-item img", this._element))
          N.on(t3, gt, (t4) => t4.preventDefault());
        const t2 = {
          leftCallback: () => this._slide(this._directionToOrder(ct)),
          rightCallback: () => this._slide(this._directionToOrder(ht)),
          endCallback: () => {
            "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            ));
          }
        };
        this._swipeHelper = new st(this._element, t2);
      }
      _keydown(t2) {
        if (/input|textarea/i.test(t2.target.tagName)) return;
        const e2 = Tt[t2.key];
        e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
      }
      _getItemIndex(t2) {
        return this._getItems().indexOf(t2);
      }
      _setActiveIndicatorElement(t2) {
        if (!this._indicatorsElement) return;
        const e2 = z.findOne(wt, this._indicatorsElement);
        e2.classList.remove(yt), e2.removeAttribute("aria-current");
        const i2 = z.findOne(
          `[data-bs-slide-to="${t2}"]`,
          this._indicatorsElement
        );
        i2 && (i2.classList.add(yt), i2.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const t2 = this._activeElement || this._getActive();
        if (!t2) return;
        const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
        this._config.interval = e2 || this._config.defaultInterval;
      }
      _slide(t2, e2 = null) {
        if (this._isSliding) return;
        const i2 = this._getActive(), n2 = t2 === at, s2 = e2 || b(this._getItems(), i2, n2, this._config.wrap);
        if (s2 === i2) return;
        const o2 = this._getItemIndex(s2), r2 = (e3) => N.trigger(this._element, e3, {
          relatedTarget: s2,
          direction: this._orderToDirection(t2),
          from: this._getItemIndex(i2),
          to: o2
        });
        if (r2(dt).defaultPrevented) return;
        if (!i2 || !s2) return;
        const a2 = Boolean(this._interval);
        this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
        const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
        s2.classList.add(c2), d(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(
          () => {
            s2.classList.remove(l2, c2), s2.classList.add(yt), i2.classList.remove(yt, c2, l2), this._isSliding = false, r2(ut);
          },
          i2,
          this._isAnimated()
        ), a2 && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return z.findOne(Et, this._element);
      }
      _getItems() {
        return z.find(At, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(t2) {
        return p() ? t2 === ct ? lt : at : t2 === ct ? at : lt;
      }
      _orderToDirection(t2) {
        return p() ? t2 === lt ? ct : ht : t2 === lt ? ht : ct;
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = xt.getOrCreateInstance(this, t2);
          if ("number" != typeof t2) {
            if ("string" == typeof t2) {
              if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                throw new TypeError(`No method named "${t2}"`);
              e2[t2]();
            }
          } else e2.to(t2);
        });
      }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
      const e2 = z.getElementFromSelector(this);
      if (!e2 || !e2.classList.contains(vt)) return;
      t2.preventDefault();
      const i2 = xt.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
      return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
    }), N.on(window, _t, () => {
      const t2 = z.find('[data-bs-ride="carousel"]');
      for (const e2 of t2) xt.getOrCreateInstance(e2);
    }), m(xt);
    const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", jt = "collapsing", Mt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = { parent: null, toggle: true }, Wt = { parent: "(null|element)", toggle: "boolean" };
    class Bt extends W {
      constructor(t2, e2) {
        super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
        const i2 = z.find(Ft);
        for (const t3 of i2) {
          const e3 = z.getSelectorFromElement(t3), i3 = z.find(e3).filter((t4) => t4 === this._element);
          null !== e3 && i3.length && this._triggerArray.push(t3);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(
          this._triggerArray,
          this._isShown()
        ), this._config.toggle && this.toggle();
      }
      static get Default() {
        return Ht;
      }
      static get DefaultType() {
        return Wt;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let t2 = [];
        if (this._config.parent && (t2 = this._getFirstLevelChildren(
          ".collapse.show, .collapse.collapsing"
        ).filter((t3) => t3 !== this._element).map((t3) => Bt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
          return;
        if (N.trigger(this._element, Lt).defaultPrevented) return;
        for (const e3 of t2) e3.hide();
        const e2 = this._getDimension();
        this._element.classList.remove(Pt), this._element.classList.add(jt), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
        const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
        this._queueCallback(
          () => {
            this._isTransitioning = false, this._element.classList.remove(jt), this._element.classList.add(Pt, Nt), this._element.style[e2] = "", N.trigger(this._element, St);
          },
          this._element,
          true
        ), this._element.style[e2] = `${this._element[i2]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown()) return;
        if (N.trigger(this._element, Dt).defaultPrevented) return;
        const t2 = this._getDimension();
        this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, d(this._element), this._element.classList.add(jt), this._element.classList.remove(Pt, Nt);
        for (const t3 of this._triggerArray) {
          const e2 = z.getElementFromSelector(t3);
          e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
        }
        this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(
          () => {
            this._isTransitioning = false, this._element.classList.remove(jt), this._element.classList.add(Pt), N.trigger(this._element, $t);
          },
          this._element,
          true
        );
      }
      _isShown(t2 = this._element) {
        return t2.classList.contains(Nt);
      }
      _configAfterMerge(t2) {
        return t2.toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), t2;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const t2 = this._getFirstLevelChildren(Ft);
        for (const e2 of t2) {
          const t3 = z.getElementFromSelector(e2);
          t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
        }
      }
      _getFirstLevelChildren(t2) {
        const e2 = z.find(Mt, this._config.parent);
        return z.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
      }
      _addAriaAndCollapsedClass(t2, e2) {
        if (t2.length)
          for (const i2 of t2)
            i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
      }
      static jQueryInterface(t2) {
        const e2 = {};
        return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
          const i2 = Bt.getOrCreateInstance(this, e2);
          if ("string" == typeof t2) {
            if (void 0 === i2[t2])
              throw new TypeError(`No method named "${t2}"`);
            i2[t2]();
          }
        });
      }
    }
    N.on(document, It, Ft, function(t2) {
      ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
      for (const t3 of z.getMultipleElementsFromSelector(this))
        Bt.getOrCreateInstance(t3, { toggle: false }).toggle();
    }), m(Bt);
    var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [zt, Rt, qt, Vt], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t2, e2) {
      return t2.concat([e2 + "-" + Xt, e2 + "-" + Yt]);
    }, []), ee = [].concat(Qt, [Kt]).reduce(function(t2, e2) {
      return t2.concat([e2, e2 + "-" + Xt, e2 + "-" + Yt]);
    }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [ie, ne, se, oe, re, ae, le, ce, he];
    function ue(t2) {
      return t2 ? (t2.nodeName || "").toLowerCase() : null;
    }
    function fe(t2) {
      if (null == t2) return window;
      if ("[object Window]" !== t2.toString()) {
        var e2 = t2.ownerDocument;
        return e2 && e2.defaultView || window;
      }
      return t2;
    }
    function pe(t2) {
      return t2 instanceof fe(t2).Element || t2 instanceof Element;
    }
    function me(t2) {
      return t2 instanceof fe(t2).HTMLElement || t2 instanceof HTMLElement;
    }
    function ge(t2) {
      return "undefined" != typeof ShadowRoot && (t2 instanceof fe(t2).ShadowRoot || t2 instanceof ShadowRoot);
    }
    const _e = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: function(t2) {
        var e2 = t2.state;
        Object.keys(e2.elements).forEach(function(t3) {
          var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
          me(s2) && ue(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
            var e3 = n2[t4];
            false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
          }));
        });
      },
      effect: function(t2) {
        var e2 = t2.state, i2 = {
          popper: {
            position: e2.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: { position: "absolute" },
          reference: {}
        };
        return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
          Object.keys(e2.elements).forEach(function(t3) {
            var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(
              e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]
            ).reduce(function(t4, e3) {
              return t4[e3] = "", t4;
            }, {});
            me(n2) && ue(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
              n2.removeAttribute(t4);
            }));
          });
        };
      },
      requires: ["computeStyles"]
    };
    function be(t2) {
      return t2.split("-")[0];
    }
    var ve = Math.max, ye = Math.min, we = Math.round;
    function Ae() {
      var t2 = navigator.userAgentData;
      return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
        return t3.brand + "/" + t3.version;
      }).join(" ") : navigator.userAgent;
    }
    function Ee() {
      return !/^((?!chrome|android).)*safari/i.test(Ae());
    }
    function Te(t2, e2, i2) {
      void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
      var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
      e2 && me(t2) && (s2 = t2.offsetWidth > 0 && we(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && we(n2.height) / t2.offsetHeight || 1);
      var r2 = (pe(t2) ? fe(t2) : window).visualViewport, a2 = !Ee() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
      return {
        width: h2,
        height: d2,
        top: c2,
        right: l2 + h2,
        bottom: c2 + d2,
        left: l2,
        x: l2,
        y: c2
      };
    }
    function Ce(t2) {
      var e2 = Te(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
      return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
    }
    function Oe(t2, e2) {
      var i2 = e2.getRootNode && e2.getRootNode();
      if (t2.contains(e2)) return true;
      if (i2 && ge(i2)) {
        var n2 = e2;
        do {
          if (n2 && t2.isSameNode(n2)) return true;
          n2 = n2.parentNode || n2.host;
        } while (n2);
      }
      return false;
    }
    function xe(t2) {
      return fe(t2).getComputedStyle(t2);
    }
    function ke(t2) {
      return ["table", "td", "th"].indexOf(ue(t2)) >= 0;
    }
    function Le(t2) {
      return ((pe(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
    }
    function Se(t2) {
      return "html" === ue(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ge(t2) ? t2.host : null) || Le(t2);
    }
    function De(t2) {
      return me(t2) && "fixed" !== xe(t2).position ? t2.offsetParent : null;
    }
    function $e(t2) {
      for (var e2 = fe(t2), i2 = De(t2); i2 && ke(i2) && "static" === xe(i2).position; )
        i2 = De(i2);
      return i2 && ("html" === ue(i2) || "body" === ue(i2) && "static" === xe(i2).position) ? e2 : i2 || function(t3) {
        var e3 = /firefox/i.test(Ae());
        if (/Trident/i.test(Ae()) && me(t3) && "fixed" === xe(t3).position)
          return null;
        var i3 = Se(t3);
        for (ge(i3) && (i3 = i3.host); me(i3) && ["html", "body"].indexOf(ue(i3)) < 0; ) {
          var n2 = xe(i3);
          if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(
            n2.willChange
          ) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter)
            return i3;
          i3 = i3.parentNode;
        }
        return null;
      }(t2) || e2;
    }
    function Ie(t2) {
      return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
    }
    function Ne(t2, e2, i2) {
      return ve(t2, ye(e2, i2));
    }
    function Pe(t2) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
    }
    function je(t2, e2) {
      return e2.reduce(function(e3, i2) {
        return e3[i2] = t2, e3;
      }, {});
    }
    const Me = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: function(t2) {
        var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = be(i2.placement), l2 = Ie(a2), c2 = [Vt, qt].indexOf(a2) >= 0 ? "height" : "width";
        if (o2 && r2) {
          var h2 = function(t3, e3) {
            return Pe(
              "number" != typeof (t3 = "function" == typeof t3 ? t3(
                Object.assign({}, e3.rects, {
                  placement: e3.placement
                })
              ) : t3) ? t3 : je(t3, Qt)
            );
          }(s2.padding, i2), d2 = Ce(o2), u2 = "y" === l2 ? zt : Vt, f2 = "y" === l2 ? Rt : qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = $e(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Ne(v2, w2, y2), E2 = l2;
          i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
        }
      },
      effect: function(t2) {
        var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
        null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Oe(e2.elements.popper, n2) && (e2.elements.arrow = n2);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };
    function Fe(t2) {
      return t2.split("-")[1];
    }
    var He = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function We(t2) {
      var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
      f2 = g2.x, m2 = g2.y;
      var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Vt, y2 = zt, w2 = window;
      if (c2) {
        var A2 = $e(i2), E2 = "clientHeight", T2 = "clientWidth";
        A2 === fe(i2) && "static" !== xe(A2 = Le(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === zt || (s2 === Vt || s2 === qt) && o2 === Yt) && (y2 = Rt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Vt && (s2 !== zt && s2 !== Rt || o2 !== Yt) || (v2 = qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
      }
      var C2, O2 = Object.assign({ position: a2 }, c2 && He), x2 = true === h2 ? function(t3, e3) {
        var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
        return {
          x: we(i3 * s3) / s3 || 0,
          y: we(n3 * s3) / s3 || 0
        };
      }({ x: f2, y: m2 }, fe(i2)) : { x: f2, y: m2 };
      return f2 = x2.x, m2 = x2.y, l2 ? Object.assign(
        {},
        O2,
        ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)
      ) : Object.assign(
        {},
        O2,
        ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2)
      );
    }
    const Be = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: function(t2) {
        var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = {
          placement: be(e2.placement),
          variation: Fe(e2.placement),
          popper: e2.elements.popper,
          popperRect: e2.rects.popper,
          gpuAcceleration: s2,
          isFixed: "fixed" === e2.options.strategy
        };
        null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign(
          {},
          e2.styles.popper,
          We(
            Object.assign({}, c2, {
              offsets: e2.modifiersData.popperOffsets,
              position: e2.options.strategy,
              adaptive: r2,
              roundOffsets: l2
            })
          )
        )), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign(
          {},
          e2.styles.arrow,
          We(
            Object.assign({}, c2, {
              offsets: e2.modifiersData.arrow,
              position: "absolute",
              adaptive: false,
              roundOffsets: l2
            })
          )
        )), e2.attributes.popper = Object.assign({}, e2.attributes.popper, {
          "data-popper-placement": e2.placement
        });
      },
      data: {}
    };
    var ze = { passive: true };
    const Re = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function() {
      },
      effect: function(t2) {
        var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = fe(e2.elements.popper), c2 = [].concat(
          e2.scrollParents.reference,
          e2.scrollParents.popper
        );
        return o2 && c2.forEach(function(t3) {
          t3.addEventListener("scroll", i2.update, ze);
        }), a2 && l2.addEventListener("resize", i2.update, ze), function() {
          o2 && c2.forEach(function(t3) {
            t3.removeEventListener("scroll", i2.update, ze);
          }), a2 && l2.removeEventListener("resize", i2.update, ze);
        };
      },
      data: {}
    };
    var qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Ve(t2) {
      return t2.replace(/left|right|bottom|top/g, function(t3) {
        return qe[t3];
      });
    }
    var Ke = { start: "end", end: "start" };
    function Qe(t2) {
      return t2.replace(/start|end/g, function(t3) {
        return Ke[t3];
      });
    }
    function Xe(t2) {
      var e2 = fe(t2);
      return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
    }
    function Ye(t2) {
      return Te(Le(t2)).left + Xe(t2).scrollLeft;
    }
    function Ue(t2) {
      var e2 = xe(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
      return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
    }
    function Ge(t2) {
      return ["html", "body", "#document"].indexOf(ue(t2)) >= 0 ? t2.ownerDocument.body : me(t2) && Ue(t2) ? t2 : Ge(Se(t2));
    }
    function Je(t2, e2) {
      var i2;
      void 0 === e2 && (e2 = []);
      var n2 = Ge(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = fe(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Ue(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
      return s2 ? a2 : a2.concat(Je(Se(r2)));
    }
    function Ze(t2) {
      return Object.assign({}, t2, {
        left: t2.x,
        top: t2.y,
        right: t2.x + t2.width,
        bottom: t2.y + t2.height
      });
    }
    function ti(t2, e2, i2) {
      return e2 === Gt ? Ze(
        function(t3, e3) {
          var i3 = fe(t3), n2 = Le(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
          if (s2) {
            o2 = s2.width, r2 = s2.height;
            var c2 = Ee();
            (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
          }
          return { width: o2, height: r2, x: a2 + Ye(t3), y: l2 };
        }(t2, i2)
      ) : pe(e2) ? function(t3, e3) {
        var i3 = Te(t3, false, "fixed" === e3);
        return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
      }(e2, i2) : Ze(
        function(t3) {
          var e3, i3 = Le(t3), n2 = Xe(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = ve(
            i3.scrollWidth,
            i3.clientWidth,
            s2 ? s2.scrollWidth : 0,
            s2 ? s2.clientWidth : 0
          ), r2 = ve(
            i3.scrollHeight,
            i3.clientHeight,
            s2 ? s2.scrollHeight : 0,
            s2 ? s2.clientHeight : 0
          ), a2 = -n2.scrollLeft + Ye(t3), l2 = -n2.scrollTop;
          return "rtl" === xe(s2 || i3).direction && (a2 += ve(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
        }(Le(t2))
      );
    }
    function ei(t2) {
      var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? be(s2) : null, r2 = s2 ? Fe(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
      switch (o2) {
        case zt:
          e2 = { x: a2, y: i2.y - n2.height };
          break;
        case Rt:
          e2 = { x: a2, y: i2.y + i2.height };
          break;
        case qt:
          e2 = { x: i2.x + i2.width, y: l2 };
          break;
        case Vt:
          e2 = { x: i2.x - n2.width, y: l2 };
          break;
        default:
          e2 = { x: i2.x, y: i2.y };
      }
      var c2 = o2 ? Ie(o2) : null;
      if (null != c2) {
        var h2 = "y" === c2 ? "height" : "width";
        switch (r2) {
          case Xt:
            e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
            break;
          case Yt:
            e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
        }
      }
      return e2;
    }
    function ii(t2, e2) {
      void 0 === e2 && (e2 = {});
      var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Ut : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? Gt : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? Jt : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Pe("number" != typeof g2 ? g2 : je(g2, Qt)), b2 = u2 === Jt ? Zt : Jt, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = function(t3, e3, i3, n3) {
        var s3 = "clippingParents" === e3 ? function(t4) {
          var e4 = Je(Se(t4)), i4 = ["absolute", "fixed"].indexOf(
            xe(t4).position
          ) >= 0 && me(t4) ? $e(t4) : t4;
          return pe(i4) ? e4.filter(function(t5) {
            return pe(t5) && Oe(t5, i4) && "body" !== ue(t5);
          }) : [];
        }(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
          var s4 = ti(t3, i4, n3);
          return e4.top = ve(s4.top, e4.top), e4.right = ye(s4.right, e4.right), e4.bottom = ye(s4.bottom, e4.bottom), e4.left = ve(s4.left, e4.left), e4;
        }, ti(t3, r3, n3));
        return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
      }(pe(y2) ? y2 : y2.contextElement || Le(t2.elements.popper), l2, h2, r2), A2 = Te(t2.elements.reference), E2 = ei({
        reference: A2,
        element: v2,
        strategy: "absolute",
        placement: s2
      }), T2 = Ze(Object.assign({}, v2, E2)), C2 = u2 === Jt ? T2 : A2, O2 = {
        top: w2.top - C2.top + _2.top,
        bottom: C2.bottom - w2.bottom + _2.bottom,
        left: w2.left - C2.left + _2.left,
        right: C2.right - w2.right + _2.right
      }, x2 = t2.modifiersData.offset;
      if (u2 === Jt && x2) {
        var k2 = x2[s2];
        Object.keys(O2).forEach(function(t3) {
          var e3 = [qt, Rt].indexOf(t3) >= 0 ? 1 : -1, i3 = [zt, Rt].indexOf(t3) >= 0 ? "y" : "x";
          O2[t3] += k2[i3] * e3;
        });
      }
      return O2;
    }
    function ni(t2, e2) {
      void 0 === e2 && (e2 = {});
      var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? ee : l2, h2 = Fe(n2), d2 = h2 ? a2 ? te : te.filter(function(t3) {
        return Fe(t3) === h2;
      }) : Qt, u2 = d2.filter(function(t3) {
        return c2.indexOf(t3) >= 0;
      });
      0 === u2.length && (u2 = d2);
      var f2 = u2.reduce(function(e3, i3) {
        return e3[i3] = ii(t2, {
          placement: i3,
          boundary: s2,
          rootBoundary: o2,
          padding: r2
        })[be(i3)], e3;
      }, {});
      return Object.keys(f2).sort(function(t3, e3) {
        return f2[t3] - f2[e3];
      });
    }
    const si = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: function(t2) {
        var e2 = t2.state, i2 = t2.options, n2 = t2.name;
        if (!e2.modifiersData[n2]._skip) {
          for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = be(g2), b2 = l2 || (_2 !== g2 && p2 ? function(t3) {
            if (be(t3) === Kt) return [];
            var e3 = Ve(t3);
            return [Qe(t3), e3, Qe(e3)];
          }(g2) : [Ve(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
            return t3.concat(
              be(i3) === Kt ? ni(e2, {
                placement: i3,
                boundary: h2,
                rootBoundary: d2,
                padding: c2,
                flipVariations: p2,
                allowedAutoPlacements: m2
              }) : i3
            );
          }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
            var O2 = v2[C2], x2 = be(O2), k2 = Fe(O2) === Xt, L2 = [zt, Rt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = ii(e2, {
              placement: O2,
              boundary: h2,
              rootBoundary: d2,
              altBoundary: u2,
              padding: c2
            }), $3 = L2 ? k2 ? qt : Vt : k2 ? Rt : zt;
            y2[S2] > w2[S2] && ($3 = Ve($3));
            var I2 = Ve($3), N2 = [];
            if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$3] <= 0, D2[I2] <= 0), N2.every(function(t3) {
              return t3;
            })) {
              T2 = O2, E2 = false;
              break;
            }
            A2.set(O2, N2);
          }
          if (E2)
            for (var P2 = function(t3) {
              var e3 = v2.find(function(e4) {
                var i3 = A2.get(e4);
                if (i3)
                  return i3.slice(0, t3).every(function(t4) {
                    return t4;
                  });
              });
              if (e3) return T2 = e3, "break";
            }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== P2(j2); j2--) ;
          e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: false }
    };
    function oi(t2, e2, i2) {
      return void 0 === i2 && (i2 = { x: 0, y: 0 }), {
        top: t2.top - e2.height - i2.y,
        right: t2.right - e2.width + i2.x,
        bottom: t2.bottom - e2.height + i2.y,
        left: t2.left - e2.width - i2.x
      };
    }
    function ri(t2) {
      return [zt, qt, Rt, Vt].some(function(e2) {
        return t2[e2] >= 0;
      });
    }
    const ai = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function(t2) {
        var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = ii(e2, { elementContext: "reference" }), a2 = ii(e2, { altBoundary: true }), l2 = oi(r2, n2), c2 = oi(a2, s2, o2), h2 = ri(l2), d2 = ri(c2);
        e2.modifiersData[i2] = {
          referenceClippingOffsets: l2,
          popperEscapeOffsets: c2,
          isReferenceHidden: h2,
          hasPopperEscaped: d2
        }, e2.attributes.popper = Object.assign(
          {},
          e2.attributes.popper,
          {
            "data-popper-reference-hidden": h2,
            "data-popper-escaped": d2
          }
        );
      }
    }, li = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function(t2) {
        var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = ee.reduce(function(t3, i3) {
          return t3[i3] = function(t4, e3, i4) {
            var n3 = be(t4), s3 = [Vt, zt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(
              Object.assign({}, e3, {
                placement: t4
              })
            ) : i4, r3 = o3[0], a3 = o3[1];
            return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Vt, qt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
          }(i3, e2.rects, o2), t3;
        }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
        null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
      }
    }, ci = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: function(t2) {
        var e2 = t2.state, i2 = t2.name;
        e2.modifiersData[i2] = ei({
          reference: e2.rects.reference,
          element: e2.rects.popper,
          strategy: "absolute",
          placement: e2.placement
        });
      },
      data: {}
    }, hi = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: function(t2) {
        var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = ii(e2, {
          boundary: l2,
          rootBoundary: c2,
          padding: d2,
          altBoundary: h2
        }), _2 = be(e2.placement), b2 = Fe(e2.placement), v2 = !b2, y2 = Ie(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(
          Object.assign({}, e2.rects, {
            placement: e2.placement
          })
        ) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
        if (A2) {
          if (o2) {
            var L2, S2 = "y" === y2 ? zt : Vt, D2 = "y" === y2 ? Rt : qt, $3 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], j2 = f2 ? -T2[$3] / 2 : 0, M2 = b2 === Xt ? E2[$3] : T2[$3], F2 = b2 === Xt ? -T2[$3] : -E2[$3], H2 = e2.elements.arrow, W2 = f2 && H2 ? Ce(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Ne(0, E2[$3], W2[$3]), V2 = v2 ? E2[$3] / 2 - j2 - q2 - z2 - O2.mainAxis : M2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$3] / 2 + j2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && $e(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Ne(
              f2 ? ye(N2, I2 + V2 - Y2 - X2) : N2,
              I2,
              f2 ? ve(P2, U2) : P2
            );
            A2[y2] = G2, k2[y2] = G2 - I2;
          }
          if (a2) {
            var J2, Z2 = "x" === y2 ? zt : Vt, tt2 = "x" === y2 ? Rt : qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [zt, Vt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? function(t3, e3, i3) {
              var n3 = Ne(t3, e3, i3);
              return n3 > i3 ? i3 : n3;
            }(at2, et2, lt2) : Ne(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
            A2[w2] = ct2, k2[w2] = ct2 - et2;
          }
          e2.modifiersData[n2] = k2;
        }
      },
      requiresIfExists: ["offset"]
    };
    function di(t2, e2, i2) {
      void 0 === i2 && (i2 = false);
      var n2, s2, o2 = me(e2), r2 = me(e2) && function(t3) {
        var e3 = t3.getBoundingClientRect(), i3 = we(e3.width) / t3.offsetWidth || 1, n3 = we(e3.height) / t3.offsetHeight || 1;
        return 1 !== i3 || 1 !== n3;
      }(e2), a2 = Le(e2), l2 = Te(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
      return (o2 || !o2 && !i2) && (("body" !== ue(e2) || Ue(a2)) && (c2 = (n2 = e2) !== fe(n2) && me(n2) ? {
        scrollLeft: (s2 = n2).scrollLeft,
        scrollTop: s2.scrollTop
      } : Xe(n2)), me(e2) ? ((h2 = Te(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Ye(a2))), {
        x: l2.left + c2.scrollLeft - h2.x,
        y: l2.top + c2.scrollTop - h2.y,
        width: l2.width,
        height: l2.height
      };
    }
    function ui(t2) {
      var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
      function s2(t3) {
        i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
          if (!i2.has(t4)) {
            var n3 = e2.get(t4);
            n3 && s2(n3);
          }
        }), n2.push(t3);
      }
      return t2.forEach(function(t3) {
        e2.set(t3.name, t3);
      }), t2.forEach(function(t3) {
        i2.has(t3.name) || s2(t3);
      }), n2;
    }
    var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function pi() {
      for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
        e2[i2] = arguments[i2];
      return !e2.some(function(t3) {
        return !(t3 && "function" == typeof t3.getBoundingClientRect);
      });
    }
    function mi(t2) {
      void 0 === t2 && (t2 = {});
      var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? fi : s2;
      return function(t3, e3, i3) {
        void 0 === i3 && (i3 = o2);
        var s3, r2, a2 = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, fi, o2),
          modifiersData: {},
          elements: { reference: t3, popper: e3 },
          attributes: {},
          styles: {}
        }, l2 = [], c2 = false, h2 = {
          state: a2,
          setOptions: function(i4) {
            var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
            d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = {
              reference: pe(t3) ? Je(t3) : t3.contextElement ? Je(t3.contextElement) : [],
              popper: Je(e3)
            };
            var r3, c3, u2 = function(t4) {
              var e4 = ui(t4);
              return de.reduce(function(t5, i5) {
                return t5.concat(
                  e4.filter(function(t6) {
                    return t6.phase === i5;
                  })
                );
              }, []);
            }(
              (r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, {
                  options: Object.assign(
                    {},
                    i5.options,
                    e4.options
                  ),
                  data: Object.assign(
                    {},
                    i5.data,
                    e4.data
                  )
                }) : e4, t4;
              }, {}), Object.keys(c3).map(function(t4) {
                return c3[t4];
              }))
            );
            return a2.orderedModifiers = u2.filter(function(t4) {
              return t4.enabled;
            }), a2.orderedModifiers.forEach(function(t4) {
              var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
              if ("function" == typeof s5) {
                var o3 = s5({
                  state: a2,
                  name: e4,
                  instance: h2,
                  options: n3
                });
                l2.push(o3 || function() {
                });
              }
            }), h2.update();
          },
          forceUpdate: function() {
            if (!c2) {
              var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
              if (pi(e4, i4)) {
                a2.rects = {
                  reference: di(
                    e4,
                    $e(i4),
                    "fixed" === a2.options.strategy
                  ),
                  popper: Ce(i4)
                }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                  return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                });
                for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++)
                  if (true !== a2.reset) {
                    var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
                    "function" == typeof o3 && (a2 = o3({
                      state: a2,
                      options: l3,
                      name: d3,
                      instance: h2
                    }) || a2);
                  } else a2.reset = false, n3 = -1;
              }
            }
          },
          update: (s3 = function() {
            return new Promise(function(t4) {
              h2.forceUpdate(), t4(a2);
            });
          }, function() {
            return r2 || (r2 = new Promise(function(t4) {
              Promise.resolve().then(function() {
                r2 = void 0, t4(s3());
              });
            })), r2;
          }),
          destroy: function() {
            d2(), c2 = true;
          }
        };
        if (!pi(t3, e3)) return h2;
        function d2() {
          l2.forEach(function(t4) {
            return t4();
          }), l2 = [];
        }
        return h2.setOptions(i3).then(function(t4) {
          !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
        }), h2;
      };
    }
    var gi = mi(), _i = mi({ defaultModifiers: [Re, ci, Be, _e] }), bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai] });
    const vi = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: ae,
          afterRead: se,
          afterWrite: he,
          applyStyles: _e,
          arrow: Me,
          auto: Kt,
          basePlacements: Qt,
          beforeMain: oe,
          beforeRead: ie,
          beforeWrite: le,
          bottom: Rt,
          clippingParents: Ut,
          computeStyles: Be,
          createPopper: bi,
          createPopperBase: gi,
          createPopperLite: _i,
          detectOverflow: ii,
          end: Yt,
          eventListeners: Re,
          flip: si,
          hide: ai,
          left: Vt,
          main: re,
          modifierPhases: de,
          offset: li,
          placements: ee,
          popper: Jt,
          popperGenerator: mi,
          popperOffsets: ci,
          preventOverflow: hi,
          read: ne,
          reference: Zt,
          right: qt,
          start: Xt,
          top: zt,
          variationPlacements: te,
          viewport: Gt,
          write: ce
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", ji = p() ? "top-end" : "top-start", Mi = p() ? "top-start" : "top-end", Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end", Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = {
      autoClose: true,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, Ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
    class qi extends W {
      constructor(t2, e2) {
        super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
      }
      static get Default() {
        return zi;
      }
      static get DefaultType() {
        return Ri;
      }
      static get NAME() {
        return yi;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (l(this._element) || this._isShown()) return;
        const t2 = { relatedTarget: this._element };
        if (!N.trigger(this._element, xi, t2).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
            for (const t3 of [].concat(...document.body.children))
              N.on(t3, "mouseover", h);
          this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t2);
        }
      }
      hide() {
        if (l(this._element) || !this._isShown()) return;
        const t2 = { relatedTarget: this._element };
        this._completeHide(t2);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      _completeHide(t2) {
        if (!N.trigger(this._element, Ci, t2).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t3 of [].concat(...document.body.children))
              N.off(t3, "mouseover", h);
          this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t2);
        }
      }
      _getConfig(t2) {
        if ("object" == typeof (t2 = super._getConfig(t2)).reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
          throw new TypeError(
            `${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return t2;
      }
      _createPopper() {
        if (void 0 === vi)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let t2 = this._element;
        "parent" === this._config.reference ? t2 = this._parent : o(this._config.reference) ? t2 = r(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
        const e2 = this._getPopperConfig();
        this._popper = bi(t2, this._menu, e2);
      }
      _isShown() {
        return this._menu.classList.contains($i);
      }
      _getPlacement() {
        const t2 = this._parent;
        if (t2.classList.contains("dropend")) return Wi;
        if (t2.classList.contains("dropstart")) return Bi;
        if (t2.classList.contains("dropup-center")) return "top";
        if (t2.classList.contains("dropdown-center")) return "bottom";
        const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t2.classList.contains("dropup") ? e2 ? Mi : ji : e2 ? Hi : Fi;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: t2 } = this._config;
        return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
      }
      _getPopperConfig() {
        const t2 = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary }
            },
            { name: "offset", options: { offset: this._getOffset() } }
          ]
        };
        return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...g(this._config.popperConfig, [t2]) };
      }
      _selectMenuItem({ key: t2, target: e2 }) {
        const i2 = z.find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        ).filter((t3) => a(t3));
        i2.length && b(i2, e2, t2 === Ti, !i2.includes(e2)).focus();
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = qi.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2])
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        });
      }
      static clearMenus(t2) {
        if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
          return;
        const e2 = z.find(Ni);
        for (const i2 of e2) {
          const e3 = qi.getInstance(i2);
          if (!e3 || false === e3._config.autoClose) continue;
          const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
          if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2)
            continue;
          if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(
            t2.target.tagName
          )))
            continue;
          const o2 = { relatedTarget: e3._element };
          "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
        }
      }
      static dataApiKeydownHandler(t2) {
        const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Ei, Ti].includes(t2.key);
        if (!n2 && !i2) return;
        if (e2 && !i2) return;
        t2.preventDefault();
        const s2 = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t2.delegateTarget.parentNode), o2 = qi.getOrCreateInstance(s2);
        if (n2)
          return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
        o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
      }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t2) {
      t2.preventDefault(), qi.getOrCreateInstance(this).toggle();
    }), m(qi);
    const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: false,
      isVisible: true,
      rootElement: "body"
    }, Yi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
    class Ui extends H {
      constructor(t2) {
        super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
      }
      static get Default() {
        return Xi;
      }
      static get DefaultType() {
        return Yi;
      }
      static get NAME() {
        return Vi;
      }
      show(t2) {
        if (!this._config.isVisible) return void g(t2);
        this._append();
        const e2 = this._getElement();
        this._config.isAnimated && d(e2), e2.classList.add(Ki), this._emulateAnimation(() => {
          g(t2);
        });
      }
      hide(t2) {
        this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
          this.dispose(), g(t2);
        })) : g(t2);
      }
      dispose() {
        this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = false);
      }
      _getElement() {
        if (!this._element) {
          const t2 = document.createElement("div");
          t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
        }
        return this._element;
      }
      _configAfterMerge(t2) {
        return t2.rootElement = r(t2.rootElement), t2;
      }
      _append() {
        if (this._isAppended) return;
        const t2 = this._getElement();
        this._config.rootElement.append(t2), N.on(t2, Qi, () => {
          g(this._config.clickCallback);
        }), this._isAppended = true;
      }
      _emulateAnimation(t2) {
        _(t2, this._getElement(), this._config.isAnimated);
      }
    }
    const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward", en = { autofocus: true, trapElement: null }, nn = { autofocus: "boolean", trapElement: "element" };
    class sn extends H {
      constructor(t2) {
        super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
      }
      static get Default() {
        return en;
      }
      static get DefaultType() {
        return nn;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t2) => this._handleFocusin(t2)), N.on(document, Zi, (t2) => this._handleKeydown(t2)), this._isActive = true);
      }
      deactivate() {
        this._isActive && (this._isActive = false, N.off(document, Gi));
      }
      _handleFocusin(t2) {
        const { trapElement: e2 } = this._config;
        if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
          return;
        const i2 = z.focusableChildren(e2);
        0 === i2.length ? e2.focus() : this._lastTabNavDirection === tn ? i2[i2.length - 1].focus() : i2[0].focus();
      }
      _handleKeydown(t2) {
        "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? tn : "forward");
      }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right", ln = "margin-right";
    class cn {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const t2 = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t2);
      }
      hide() {
        const t2 = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, an, (e2) => e2 + t2), this._setElementAttributes(on, an, (e2) => e2 + t2), this._setElementAttributes(rn, ln, (e2) => e2 - t2);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(t2, e2, i2) {
        const n2 = this.getWidth();
        this._applyManipulationCallback(t2, (t3) => {
          if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2)
            return;
          this._saveInitialAttribute(t3, e2);
          const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
          t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
        });
      }
      _saveInitialAttribute(t2, e2) {
        const i2 = t2.style.getPropertyValue(e2);
        i2 && F.setDataAttribute(t2, e2, i2);
      }
      _resetElementAttributes(t2, e2) {
        this._applyManipulationCallback(t2, (t3) => {
          const i2 = F.getDataAttribute(t3, e2);
          null !== i2 ? (F.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
        });
      }
      _applyManipulationCallback(t2, e2) {
        if (o(t2)) e2(t2);
        else for (const i2 of z.find(t2, this._element)) e2(i2);
      }
    }
    const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = { backdrop: true, focus: true, keyboard: true }, Cn = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class On extends W {
      constructor(t2, e2) {
        super(t2, e2), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new cn(), this._addEventListeners();
      }
      static get Default() {
        return Tn;
      }
      static get DefaultType() {
        return Cn;
      }
      static get NAME() {
        return "modal";
      }
      toggle(t2) {
        return this._isShown ? this.hide() : this.show(t2);
      }
      show(t2) {
        this._isShown || this._isTransitioning || N.trigger(this._element, pn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
      }
      hide() {
        this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(
          () => this._hideModal(),
          this._element,
          this._isAnimated()
        )));
      }
      dispose() {
        N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Ui({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new sn({ trapElement: this._element });
      }
      _showElement(t2) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const e2 = z.findOne(".modal-body", this._dialog);
        e2 && (e2.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, mn, { relatedTarget: t2 });
          },
          this._dialog,
          this._isAnimated()
        );
      }
      _addEventListeners() {
        N.on(this._element, vn, (t2) => {
          "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
        }), N.on(window, gn, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), N.on(this._element, bn, (t2) => {
          N.one(this._element, _n, (e2) => {
            this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
          document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
        });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (N.trigger(this._element, un).defaultPrevented) return;
        const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
        "hidden" === e2 || this._element.classList.contains(En) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
          this._element.classList.remove(En), this._queueCallback(() => {
            this._element.style.overflowY = e2;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      _adjustDialog() {
        const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
        if (i2 && !t2) {
          const t3 = p() ? "paddingLeft" : "paddingRight";
          this._element.style[t3] = `${e2}px`;
        }
        if (!i2 && t2) {
          const t3 = p() ? "paddingRight" : "paddingLeft";
          this._element.style[t3] = `${e2}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      static jQueryInterface(t2, e2) {
        return this.each(function() {
          const i2 = On.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === i2[t2])
              throw new TypeError(`No method named "${t2}"`);
            i2[t2](e2);
          }
        });
      }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', function(t2) {
      const e2 = z.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), N.one(e2, pn, (t3) => {
        t3.defaultPrevented || N.one(e2, fn, () => {
          a(this) && this.focus();
        });
      });
      const i2 = z.findOne(".modal.show");
      i2 && On.getInstance(i2).hide(), On.getOrCreateInstance(e2).toggle(this);
    }), R(On), m(On);
    const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, jn = `hide${xn}`, Mn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = { backdrop: true, keyboard: true, scroll: false }, Rn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
    class qn extends W {
      constructor(t2, e2) {
        super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      static get Default() {
        return zn;
      }
      static get DefaultType() {
        return Rn;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(t2) {
        return this._isShown ? this.hide() : this.show(t2);
      }
      show(t2) {
        this._isShown || N.trigger(this._element, Nn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(
          () => {
            this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, { relatedTarget: t2 });
          },
          this._element,
          true
        ));
      }
      hide() {
        this._isShown && (N.trigger(this._element, jn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(
          () => {
            this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N.trigger(this._element, Fn);
          },
          this._element,
          true
        )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const t2 = Boolean(this._config.backdrop);
        return new Ui({
          className: "offcanvas-backdrop",
          isVisible: t2,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: t2 ? () => {
            "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Mn);
          } : null
        });
      }
      _initializeFocusTrap() {
        return new sn({ trapElement: this._element });
      }
      _addEventListeners() {
        N.on(this._element, Bn, (t2) => {
          "Escape" === t2.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Mn));
        });
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = qn.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
              throw new TypeError(`No method named "${t2}"`);
            e2[t2](this);
          }
        });
      }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t2) {
      const e2 = z.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this))
        return;
      N.one(e2, Fn, () => {
        a(this) && this.focus();
      });
      const i2 = z.findOne(In);
      i2 && i2 !== e2 && qn.getInstance(i2).hide(), qn.getOrCreateInstance(e2).toggle(this);
    }), N.on(window, Ln, () => {
      for (const t2 of z.find(In)) qn.getOrCreateInstance(t2).show();
    }), N.on(window, Hn, () => {
      for (const t2 of z.find(
        "[aria-modal][class*=show][class*=offcanvas-]"
      ))
        "fixed" !== getComputedStyle(t2).position && qn.getOrCreateInstance(t2).hide();
    }), R(qn), m(qn);
    const Vn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      dd: [],
      div: [],
      dl: [],
      dt: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }, Kn = /* @__PURE__ */ new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href"
    ]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t2, e2) => {
      const i2 = t2.nodeName.toLowerCase();
      return e2.includes(i2) ? !Kn.has(i2) || Boolean(Qn.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
    }, Yn = {
      allowList: Vn,
      content: {},
      extraClass: "",
      html: false,
      sanitize: true,
      sanitizeFn: null,
      template: "<div></div>"
    }, Un = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    }, Gn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
    class Jn extends H {
      constructor(t2) {
        super(), this._config = this._getConfig(t2);
      }
      static get Default() {
        return Yn;
      }
      static get DefaultType() {
        return Un;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(t2) {
        return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
      }
      toHtml() {
        const t2 = document.createElement("div");
        t2.innerHTML = this._maybeSanitize(this._config.template);
        for (const [e3, i3] of Object.entries(this._config.content))
          this._setContent(t2, i3, e3);
        const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
        return i2 && e2.classList.add(...i2.split(" ")), e2;
      }
      _typeCheckConfig(t2) {
        super._typeCheckConfig(t2), this._checkContent(t2.content);
      }
      _checkContent(t2) {
        for (const [e2, i2] of Object.entries(t2))
          super._typeCheckConfig({ selector: e2, entry: i2 }, Gn);
      }
      _setContent(t2, e2, i2) {
        const n2 = z.findOne(i2, t2);
        n2 && ((e2 = this._resolvePossibleFunction(e2)) ? o(e2) ? this._putElementInTemplate(r(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
      }
      _maybeSanitize(t2) {
        return this._config.sanitize ? function(t3, e2, i2) {
          if (!t3.length) return t3;
          if (i2 && "function" == typeof i2) return i2(t3);
          const n2 = new window.DOMParser().parseFromString(
            t3,
            "text/html"
          ), s2 = [].concat(...n2.body.querySelectorAll("*"));
          for (const t4 of s2) {
            const i3 = t4.nodeName.toLowerCase();
            if (!Object.keys(e2).includes(i3)) {
              t4.remove();
              continue;
            }
            const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
            for (const e3 of n3)
              Xn(e3, s3) || t4.removeAttribute(e3.nodeName);
          }
          return n2.body.innerHTML;
        }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
      }
      _resolvePossibleFunction(t2) {
        return g(t2, [this]);
      }
      _putElementInTemplate(t2, e2) {
        if (this._config.html) return e2.innerHTML = "", void e2.append(t2);
        e2.textContent = t2.textContent;
      }
    }
    const Zn = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left"
    }, as = {
      allowList: Vn,
      animation: true,
      boundary: "clippingParents",
      container: false,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: false,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: true,
      sanitizeFn: null,
      selector: false,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    }, ls = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
    class cs extends W {
      constructor(t2, e2) {
        if (void 0 === vi)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      static get Default() {
        return as;
      }
      static get DefaultType() {
        return ls;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = true;
      }
      disable() {
        this._isEnabled = false;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title")
        ), this._disposePopper(), super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const t2 = N.trigger(
          this._element,
          this.constructor.eventName("show")
        ), e2 = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t2.defaultPrevented || !e2) return;
        this._disposePopper();
        const i2 = this._getTipElement();
        this._element.setAttribute(
          "aria-describedby",
          i2.getAttribute("id")
        );
        const { container: n2 } = this._config;
        if (this._element.ownerDocument.documentElement.contains(
          this.tip
        ) || (n2.append(i2), N.trigger(
          this._element,
          this.constructor.eventName("inserted")
        )), this._popper = this._createPopper(i2), i2.classList.add(es), "ontouchstart" in document.documentElement)
          for (const t3 of [].concat(...document.body.children))
            N.on(t3, "mouseover", h);
        this._queueCallback(
          () => {
            N.trigger(
              this._element,
              this.constructor.eventName("shown")
            ), false === this._isHovered && this._leave(), this._isHovered = false;
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
            for (const t2 of [].concat(...document.body.children))
              N.off(t2, "mouseover", h);
          this._activeTrigger.click = false, this._activeTrigger[os] = false, this._activeTrigger[ss] = false, this._isHovered = null, this._queueCallback(
            () => {
              this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute(
                "aria-describedby"
              ), N.trigger(
                this._element,
                this.constructor.eventName("hidden")
              ));
            },
            this.tip,
            this._isAnimated()
          );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return Boolean(this._getTitle());
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate()
        )), this.tip;
      }
      _createTipElement(t2) {
        const e2 = this._getTemplateFactory(t2).toHtml();
        if (!e2) return null;
        e2.classList.remove(ts, es), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
        const i2 = ((t3) => {
          do {
            t3 += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t3));
          return t3;
        })(this.constructor.NAME).toString();
        return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ts), e2;
      }
      setContent(t2) {
        this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(t2) {
        return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Jn({
          ...this._config,
          content: t2,
          extraClass: this._resolvePossibleFunction(
            this._config.customClass
          )
        }), this._templateFactory;
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      _initializeOnDelegatedTarget(t2) {
        return this.constructor.getOrCreateInstance(
          t2.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(es);
      }
      _createPopper(t2) {
        const e2 = g(this._config.placement, [this, t2, this._element]), i2 = rs[e2.toUpperCase()];
        return bi(this._element, t2, this._getPopperConfig(i2));
      }
      _getOffset() {
        const { offset: t2 } = this._config;
        return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
      }
      _resolvePossibleFunction(t2) {
        return g(t2, [this._element]);
      }
      _getPopperConfig(t2) {
        const e2 = {
          placement: t2,
          modifiers: [
            {
              name: "flip",
              options: {
                fallbackPlacements: this._config.fallbackPlacements
              }
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary }
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` }
            },
            {
              name: "preSetPlacement",
              enabled: true,
              phase: "beforeMain",
              fn: (t3) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  t3.state.placement
                );
              }
            }
          ]
        };
        return { ...e2, ...g(this._config.popperConfig, [e2]) };
      }
      _setListeners() {
        const t2 = this._config.trigger.split(" ");
        for (const e2 of t2)
          if ("click" === e2)
            N.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (t3) => {
                this._initializeOnDelegatedTarget(t3).toggle();
              }
            );
          else if ("manual" !== e2) {
            const t3 = e2 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            N.on(this._element, t3, this._config.selector, (t4) => {
              const e3 = this._initializeOnDelegatedTarget(t4);
              e3._activeTrigger["focusin" === t4.type ? os : ss] = true, e3._enter();
            }), N.on(this._element, i2, this._config.selector, (t4) => {
              const e3 = this._initializeOnDelegatedTarget(t4);
              e3._activeTrigger["focusout" === t4.type ? os : ss] = e3._element.contains(t4.relatedTarget), e3._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, N.on(this._element.closest(is), ns, this._hideModalHandler);
      }
      _fixTitle() {
        const t2 = this._element.getAttribute("title");
        t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(t2, e2) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
      }
      _getConfig(t2) {
        const e2 = F.getDataAttributes(this._element);
        for (const t3 of Object.keys(e2)) Zn.has(t3) && delete e2[t3];
        return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
      }
      _configAfterMerge(t2) {
        return t2.container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
      }
      _getDelegateConfig() {
        const t2 = {};
        for (const [e2, i2] of Object.entries(this._config))
          this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
        return t2.selector = false, t2.trigger = "manual", t2;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = cs.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2])
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        });
      }
    }
    m(cs);
    const hs = {
      ...cs.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }, ds = { ...cs.DefaultType, content: "(null|string|element|function)" };
    class us extends cs {
      static get Default() {
        return hs;
      }
      static get DefaultType() {
        return ds;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = us.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2])
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        });
      }
    }
    m(us);
    const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: false,
      target: null,
      threshold: [0.1, 0.5, 1]
    }, As = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
    class Es extends W {
      constructor(t2, e2) {
        super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
          visibleEntryTop: 0,
          parentScrollTop: 0
        }, this.refresh();
      }
      static get Default() {
        return ws;
      }
      static get DefaultType() {
        return As;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const t2 of this._observableSections.values())
          this._observer.observe(t2);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(t2) {
        return t2.target = r(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t2) => {
          const e2 = this._observableSections.get(t2.target.hash);
          if (e2) {
            t2.preventDefault();
            const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
            if (i2.scrollTo)
              return void i2.scrollTo({
                top: n2,
                behavior: "smooth"
              });
            i2.scrollTop = n2;
          }
        }));
      }
      _getNewObserver() {
        const t2 = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(
          (t3) => this._observerCallback(t3),
          t2
        );
      }
      _observerCallback(t2) {
        const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
          this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
        }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n2;
        for (const o2 of t2) {
          if (!o2.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(e2(o2));
            continue;
          }
          const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (s2 && t3) {
            if (i2(o2), !n2) return;
          } else s2 || t3 || i2(o2);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const t2 = z.find(bs, this._config.target);
        for (const e2 of t2) {
          if (!e2.hash || l(e2)) continue;
          const t3 = z.findOne(decodeURI(e2.hash), this._element);
          a(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
        }
      }
      _process(t2) {
        this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(_s), this._activateParents(t2), N.trigger(this._element, ps, { relatedTarget: t2 }));
      }
      _activateParents(t2) {
        if (t2.classList.contains("dropdown-item"))
          z.findOne(
            ".dropdown-toggle",
            t2.closest(".dropdown")
          ).classList.add(_s);
        else
          for (const e2 of z.parents(t2, ".nav, .list-group"))
            for (const t3 of z.prev(e2, ys)) t3.classList.add(_s);
      }
      _clearActiveClass(t2) {
        t2.classList.remove(_s);
        const e2 = z.find(`${bs}.${_s}`, t2);
        for (const t3 of e2) t3.classList.remove(_s);
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = Es.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        });
      }
    }
    N.on(window, gs, () => {
      for (const t2 of z.find('[data-bs-spy="scroll"]'))
        Es.getOrCreateInstance(t2);
    }), m(Es);
    const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", js = "Home", Ms = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
      constructor(t2) {
        super(t2), this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        ), this._parent && (this._setInitialAttributes(
          this._parent,
          this._getChildren()
        ), N.on(this._element, Ss, (t3) => this._keydown(t3)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const t2 = this._element;
        if (this._elemIsActive(t2)) return;
        const e2 = this._getActiveElem(), i2 = e2 ? N.trigger(e2, Cs, { relatedTarget: t2 }) : null;
        N.trigger(t2, xs, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
      }
      _activate(t2, e2) {
        t2 && (t2.classList.add(Fs), this._activate(z.getElementFromSelector(t2)), this._queueCallback(
          () => {
            "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), N.trigger(t2, ks, { relatedTarget: e2 })) : t2.classList.add(Ws);
          },
          t2,
          t2.classList.contains(Hs)
        ));
      }
      _deactivate(t2, e2) {
        t2 && (t2.classList.remove(Fs), t2.blur(), this._deactivate(z.getElementFromSelector(t2)), this._queueCallback(
          () => {
            "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), N.trigger(t2, Os, { relatedTarget: e2 })) : t2.classList.remove(Ws);
          },
          t2,
          t2.classList.contains(Hs)
        ));
      }
      _keydown(t2) {
        if (![$s, Is, Ns, Ps, js, Ms].includes(t2.key)) return;
        t2.stopPropagation(), t2.preventDefault();
        const e2 = this._getChildren().filter((t3) => !l(t3));
        let i2;
        if ([js, Ms].includes(t2.key))
          i2 = e2[t2.key === js ? 0 : e2.length - 1];
        else {
          const n2 = [Is, Ps].includes(t2.key);
          i2 = b(e2, t2.target, n2, true);
        }
        i2 && (i2.focus({ preventScroll: true }), Ks.getOrCreateInstance(i2).show());
      }
      _getChildren() {
        return z.find(qs, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
      }
      _setInitialAttributes(t2, e2) {
        this._setAttributeIfNotExists(t2, "role", "tablist");
        for (const t3 of e2) this._setInitialAttributesOnChild(t3);
      }
      _setInitialAttributesOnChild(t2) {
        t2 = this._getInnerElement(t2);
        const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
        t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
      }
      _setInitialAttributesOnTargetPanel(t2) {
        const e2 = z.getElementFromSelector(t2);
        e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(
          e2,
          "aria-labelledby",
          `${t2.id}`
        ));
      }
      _toggleDropDown(t2, e2) {
        const i2 = this._getOuterElement(t2);
        if (!i2.classList.contains("dropdown")) return;
        const n2 = (t3, n3) => {
          const s2 = z.findOne(t3, i2);
          s2 && s2.classList.toggle(n3, e2);
        };
        n2(Bs, Fs), n2(".dropdown-menu", Ws), i2.setAttribute("aria-expanded", e2);
      }
      _setAttributeIfNotExists(t2, e2, i2) {
        t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
      }
      _elemIsActive(t2) {
        return t2.classList.contains(Fs);
      }
      _getInnerElement(t2) {
        return t2.matches(qs) ? t2 : z.findOne(qs, t2);
      }
      _getOuterElement(t2) {
        return t2.closest(".nav-item, .list-group-item") || t2;
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = Ks.getOrCreateInstance(this);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        });
      }
    }
    N.on(document, Ls, Rs, function(t2) {
      ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
    }), N.on(window, Ds, () => {
      for (const t2 of z.find(Vs)) Ks.getOrCreateInstance(t2);
    }), m(Ks);
    const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = { animation: "boolean", autohide: "boolean", delay: "number" }, ro = { animation: true, autohide: true, delay: 5e3 };
    class ao extends W {
      constructor(t2, e2) {
        super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
      }
      static get Default() {
        return ro;
      }
      static get DefaultType() {
        return oo;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(
          () => {
            this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
      }
      hide() {
        this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(
          () => {
            this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
          },
          this._element,
          this._config.animation
        )));
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(no);
      }
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(t2, e2) {
        switch (t2.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e2;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e2;
        }
        if (e2) return void this._clearTimeout();
        const i2 = t2.relatedTarget;
        this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
      }
      _setListeners() {
        N.on(this._element, Xs, (t2) => this._onInteraction(t2, true)), N.on(this._element, Ys, (t2) => this._onInteraction(t2, false)), N.on(this._element, Us, (t2) => this._onInteraction(t2, true)), N.on(this._element, Gs, (t2) => this._onInteraction(t2, false));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      static jQueryInterface(t2) {
        return this.each(function() {
          const e2 = ao.getOrCreateInstance(this, t2);
          if ("string" == typeof t2) {
            if (void 0 === e2[t2])
              throw new TypeError(`No method named "${t2}"`);
            e2[t2](this);
          }
        });
      }
    }
    return R(ao), m(ao), {
      Alert: Q,
      Button: Y,
      Carousel: xt,
      Collapse: Bt,
      Dropdown: qi,
      Modal: On,
      Offcanvas: qn,
      Popover: us,
      ScrollSpy: Es,
      Tab: Ks,
      Toast: ao,
      Tooltip: cs
    };
  });
  /*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
   * http://jqueryvalidation.org/
   * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
  !function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
  }(function(a) {
    a.extend(a.fn, { validate: function(b2) {
      if (!this.length) return void (b2 && b2.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c2 = a.data(this[0], "validator");
      return c2 ? c2 : (this.attr("novalidate", "novalidate"), c2 = new a.validator(b2, this[0]), a.data(this[0], "validator", c2), c2.settings.onsubmit && (this.on("click.validate", ":submit", function(b3) {
        c2.settings.submitHandler && (c2.submitButton = b3.target), a(this).hasClass("cancel") && (c2.cancelSubmit = true), void 0 !== a(this).attr("formnovalidate") && (c2.cancelSubmit = true);
      }), this.on("submit.validate", function(b3) {
        function d() {
          var d2, e;
          return !c2.settings.submitHandler || (c2.submitButton && (d2 = a("<input type='hidden'/>").attr("name", c2.submitButton.name).val(a(c2.submitButton).val()).appendTo(c2.currentForm)), e = c2.settings.submitHandler.call(c2, c2.currentForm, b3), c2.submitButton && d2.remove(), void 0 !== e && e);
        }
        return c2.settings.debug && b3.preventDefault(), c2.cancelSubmit ? (c2.cancelSubmit = false, d()) : c2.form() ? c2.pendingRequest ? (c2.formSubmitted = true, false) : d() : (c2.focusInvalid(), false);
      })), c2);
    }, valid: function() {
      var b2, c2, d;
      return a(this[0]).is("form") ? b2 = this.validate().form() : (d = [], b2 = true, c2 = a(this[0].form).validate(), this.each(function() {
        b2 = c2.element(this) && b2, b2 || (d = d.concat(c2.errorList));
      }), c2.errorList = d), b2;
    }, rules: function(b2, c2) {
      var d, e, f, g, h, i, j = this[0];
      if (null != j && null != j.form) {
        if (b2) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b2) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c2)), delete f.messages, e[j.name] = f, c2.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c2.messages));
            break;
          case "remove":
            return c2 ? (i = {}, a.each(c2.split(/\s/), function(b3, c3) {
              i[c3] = f[c3], delete f[c3], "required" === c3 && a(j).removeAttr("aria-required");
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g;
      }
    } }), a.extend(a.expr.pseudos || a.expr[":"], { blank: function(b2) {
      return !a.trim("" + a(b2).val());
    }, filled: function(b2) {
      var c2 = a(b2).val();
      return null !== c2 && !!a.trim("" + c2);
    }, unchecked: function(b2) {
      return !a(b2).prop("checked");
    } }), a.validator = function(b2, c2) {
      this.settings = a.extend(true, {}, a.validator.defaults, b2), this.currentForm = c2, this.init();
    }, a.validator.format = function(b2, c2) {
      return 1 === arguments.length ? function() {
        var c3 = a.makeArray(arguments);
        return c3.unshift(b2), a.validator.format.apply(this, c3);
      } : void 0 === c2 ? b2 : (arguments.length > 2 && c2.constructor !== Array && (c2 = a.makeArray(arguments).slice(1)), c2.constructor !== Array && (c2 = [c2]), a.each(c2, function(a2, c3) {
        b2 = b2.replace(new RegExp("\\{" + a2 + "\\}", "g"), function() {
          return c3;
        });
      }), b2);
    }, a.extend(a.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: false, focusInvalid: true, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: true, ignore: ":hidden", ignoreTitle: false, onfocusin: function(a2) {
      this.lastActive = a2, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a2, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a2)));
    }, onfocusout: function(a2) {
      this.checkable(a2) || !(a2.name in this.submitted) && this.optional(a2) || this.element(a2);
    }, onkeyup: function(b2, c2) {
      var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
      9 === c2.which && "" === this.elementValue(b2) || a.inArray(c2.keyCode, d) !== -1 || (b2.name in this.submitted || b2.name in this.invalid) && this.element(b2);
    }, onclick: function(a2) {
      a2.name in this.submitted ? this.element(a2) : a2.parentNode.name in this.submitted && this.element(a2.parentNode);
    }, highlight: function(b2, c2, d) {
      "radio" === b2.type ? this.findByName(b2.name).addClass(c2).removeClass(d) : a(b2).addClass(c2).removeClass(d);
    }, unhighlight: function(b2, c2, d) {
      "radio" === b2.type ? this.findByName(b2.name).removeClass(c2).addClass(d) : a(b2).removeClass(c2).addClass(d);
    } }, setDefaults: function(b2) {
      a.extend(a.validator.defaults, b2);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}."), step: a.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: false, prototype: { init: function() {
      function b2(b3) {
        !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
        var c3 = a.data(this.form, "validator"), d2 = "on" + b3.type.replace(/^validate/, ""), e = c3.settings;
        e[d2] && !a(this).is(e.ignore) && e[d2].call(c3, this, b3);
      }
      this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
      var c2, d = this.groups = {};
      a.each(this.settings.groups, function(b3, c3) {
        "string" == typeof c3 && (c3 = c3.split(/\s/)), a.each(c3, function(a2, c4) {
          d[c4] = b3;
        });
      }), c2 = this.settings.rules, a.each(c2, function(b3, d2) {
        c2[b3] = a.validator.normalizeRule(d2);
      }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b2).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b2), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
    }, form: function() {
      return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
    }, checkForm: function() {
      this.prepareForm();
      for (var a2 = 0, b2 = this.currentElements = this.elements(); b2[a2]; a2++) this.check(b2[a2]);
      return this.valid();
    }, element: function(b2) {
      var c2, d, e = this.clean(b2), f = this.validationTargetFor(e), g = this, h = true;
      return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a2, b3) {
        b3 === d && a2 !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a2))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
      }), c2 = this.check(f) !== false, h = h && c2, c2 ? this.invalid[f.name] = false : this.invalid[f.name] = true, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b2).attr("aria-invalid", !c2)), h;
    }, showErrors: function(b2) {
      if (b2) {
        var c2 = this;
        a.extend(this.errorMap, b2), this.errorList = a.map(this.errorMap, function(a2, b3) {
          return { message: a2, element: c2.findByName(b3)[0] };
        }), this.successList = a.grep(this.successList, function(a2) {
          return !(a2.name in b2);
        });
      }
      this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
    }, resetForm: function() {
      a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
      var b2 = this.elements().removeData("previousValue").removeAttr("aria-invalid");
      this.resetElements(b2);
    }, resetElements: function(a2) {
      var b2;
      if (this.settings.unhighlight) for (b2 = 0; a2[b2]; b2++) this.settings.unhighlight.call(this, a2[b2], this.settings.errorClass, ""), this.findByName(a2[b2].name).removeClass(this.settings.validClass);
      else a2.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
    }, numberOfInvalids: function() {
      return this.objectLength(this.invalid);
    }, objectLength: function(a2) {
      var b2, c2 = 0;
      for (b2 in a2) a2[b2] && c2++;
      return c2;
    }, hideErrors: function() {
      this.hideThese(this.toHide);
    }, hideThese: function(a2) {
      a2.not(this.containers).text(""), this.addWrapper(a2).hide();
    }, valid: function() {
      return 0 === this.size();
    }, size: function() {
      return this.errorList.length;
    }, focusInvalid: function() {
      if (this.settings.focusInvalid) try {
        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
      } catch (b2) {
      }
    }, findLastActive: function() {
      var b2 = this.lastActive;
      return b2 && 1 === a.grep(this.errorList, function(a2) {
        return a2.element.name === b2.name;
      }).length && b2;
    }, elements: function() {
      var b2 = this, c2 = {};
      return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
        var d = this.name || a(this).attr("name");
        return !d && b2.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), !(d in c2 || !b2.objectLength(a(this).rules())) && (c2[d] = true, true);
      });
    }, clean: function(b2) {
      return a(b2)[0];
    }, errors: function() {
      var b2 = this.settings.errorClass.split(" ").join(".");
      return a(this.settings.errorElement + "." + b2, this.errorContext);
    }, resetInternals: function() {
      this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
    }, reset: function() {
      this.resetInternals(), this.currentElements = a([]);
    }, prepareForm: function() {
      this.reset(), this.toHide = this.errors().add(this.containers);
    }, prepareElement: function(a2) {
      this.reset(), this.toHide = this.errorsFor(a2);
    }, elementValue: function(b2) {
      var c2, d, e = a(b2), f = b2.type;
      return "radio" === f || "checkbox" === f ? this.findByName(b2.name).filter(":checked").val() : "number" === f && "undefined" != typeof b2.validity ? b2.validity.badInput ? "NaN" : e.val() : (c2 = b2.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c2.substr(0, 12) ? c2.substr(12) : (d = c2.lastIndexOf("/"), d >= 0 ? c2.substr(d + 1) : (d = c2.lastIndexOf("\\"), d >= 0 ? c2.substr(d + 1) : c2)) : "string" == typeof c2 ? c2.replace(/\r/g, "") : c2);
    }, check: function(b2) {
      b2 = this.validationTargetFor(this.clean(b2));
      var c2, d, e, f = a(b2).rules(), g = a.map(f, function(a2, b3) {
        return b3;
      }).length, h = false, i = this.elementValue(b2);
      if ("function" == typeof f.normalizer) {
        if (i = f.normalizer.call(b2, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
        delete f.normalizer;
      }
      for (d in f) {
        e = { method: d, parameters: f[d] };
        try {
          if (c2 = a.validator.methods[d].call(this, i, b2, e.parameters), "dependency-mismatch" === c2 && 1 === g) {
            h = true;
            continue;
          }
          if (h = false, "pending" === c2) return void (this.toHide = this.toHide.not(this.errorsFor(b2)));
          if (!c2) return this.formatAndAdd(b2, e), false;
        } catch (j) {
          throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b2.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b2.id + ", check the '" + e.method + "' method."), j;
        }
      }
      if (!h) return this.objectLength(f) && this.successList.push(b2), true;
    }, customDataMessage: function(b2, c2) {
      return a(b2).data("msg" + c2.charAt(0).toUpperCase() + c2.substring(1).toLowerCase()) || a(b2).data("msg");
    }, customMessage: function(a2, b2) {
      var c2 = this.settings.messages[a2];
      return c2 && (c2.constructor === String ? c2 : c2[b2]);
    }, findDefined: function() {
      for (var a2 = 0; a2 < arguments.length; a2++) if (void 0 !== arguments[a2]) return arguments[a2];
    }, defaultMessage: function(b2, c2) {
      "string" == typeof c2 && (c2 = { method: c2 });
      var d = this.findDefined(this.customMessage(b2.name, c2.method), this.customDataMessage(b2, c2.method), !this.settings.ignoreTitle && b2.title || void 0, a.validator.messages[c2.method], "<strong>Warning: No message defined for " + b2.name + "</strong>"), e = /\$?\{(\d+)\}/g;
      return "function" == typeof d ? d = d.call(this, c2.parameters, b2) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c2.parameters)), d;
    }, formatAndAdd: function(a2, b2) {
      var c2 = this.defaultMessage(a2, b2);
      this.errorList.push({ message: c2, element: a2, method: b2.method }), this.errorMap[a2.name] = c2, this.submitted[a2.name] = c2;
    }, addWrapper: function(a2) {
      return this.settings.wrapper && (a2 = a2.add(a2.parent(this.settings.wrapper))), a2;
    }, defaultShowErrors: function() {
      var a2, b2, c2;
      for (a2 = 0; this.errorList[a2]; a2++) c2 = this.errorList[a2], this.settings.highlight && this.settings.highlight.call(this, c2.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c2.element, c2.message);
      if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a2 = 0; this.successList[a2]; a2++) this.showLabel(this.successList[a2]);
      if (this.settings.unhighlight) for (a2 = 0, b2 = this.validElements(); b2[a2]; a2++) this.settings.unhighlight.call(this, b2[a2], this.settings.errorClass, this.settings.validClass);
      this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
    }, validElements: function() {
      return this.currentElements.not(this.invalidElements());
    }, invalidElements: function() {
      return a(this.errorList).map(function() {
        return this.element;
      });
    }, showLabel: function(b2, c2) {
      var d, e, f, g, h = this.errorsFor(b2), i = this.idOrName(b2), j = a(b2).attr("aria-describedby");
      h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c2)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c2 || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b2)) : d.insertAfter(b2), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b2).attr("aria-describedby", j), e = this.groups[b2.name], e && (g = this, a.each(g.groups, function(b3, c3) {
        c3 === e && a("[name='" + g.escapeCssMeta(b3) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
      })))), !c2 && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b2)), this.toShow = this.toShow.add(h);
    }, errorsFor: function(b2) {
      var c2 = this.escapeCssMeta(this.idOrName(b2)), d = a(b2).attr("aria-describedby"), e = "label[for='" + c2 + "'], label[for='" + c2 + "'] *";
      return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
    }, escapeCssMeta: function(a2) {
      return a2.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
    }, idOrName: function(a2) {
      return this.groups[a2.name] || (this.checkable(a2) ? a2.name : a2.id || a2.name);
    }, validationTargetFor: function(b2) {
      return this.checkable(b2) && (b2 = this.findByName(b2.name)), a(b2).not(this.settings.ignore)[0];
    }, checkable: function(a2) {
      return /radio|checkbox/i.test(a2.type);
    }, findByName: function(b2) {
      return a(this.currentForm).find("[name='" + this.escapeCssMeta(b2) + "']");
    }, getLength: function(b2, c2) {
      switch (c2.nodeName.toLowerCase()) {
        case "select":
          return a("option:selected", c2).length;
        case "input":
          if (this.checkable(c2)) return this.findByName(c2.name).filter(":checked").length;
      }
      return b2.length;
    }, depend: function(a2, b2) {
      return !this.dependTypes[typeof a2] || this.dependTypes[typeof a2](a2, b2);
    }, dependTypes: { "boolean": function(a2) {
      return a2;
    }, string: function(b2, c2) {
      return !!a(b2, c2.form).length;
    }, "function": function(a2, b2) {
      return a2(b2);
    } }, optional: function(b2) {
      var c2 = this.elementValue(b2);
      return !a.validator.methods.required.call(this, c2, b2) && "dependency-mismatch";
    }, startRequest: function(b2) {
      this.pending[b2.name] || (this.pendingRequest++, a(b2).addClass(this.settings.pendingClass), this.pending[b2.name] = true);
    }, stopRequest: function(b2, c2) {
      this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b2.name], a(b2).removeClass(this.settings.pendingClass), c2 && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = false) : !c2 && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = false);
    }, previousValue: function(b2, c2) {
      return c2 = "string" == typeof c2 && c2 || "remote", a.data(b2, "previousValue") || a.data(b2, "previousValue", { old: null, valid: true, message: this.defaultMessage(b2, { method: c2 }) });
    }, destroy: function() {
      this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
    } }, classRuleSettings: { required: { required: true }, email: { email: true }, url: { url: true }, date: { date: true }, dateISO: { dateISO: true }, number: { number: true }, digits: { digits: true }, creditcard: { creditcard: true } }, addClassRules: function(b2, c2) {
      b2.constructor === String ? this.classRuleSettings[b2] = c2 : a.extend(this.classRuleSettings, b2);
    }, classRules: function(b2) {
      var c2 = {}, d = a(b2).attr("class");
      return d && a.each(d.split(" "), function() {
        this in a.validator.classRuleSettings && a.extend(c2, a.validator.classRuleSettings[this]);
      }), c2;
    }, normalizeAttributeRule: function(a2, b2, c2, d) {
      /min|max|step/.test(c2) && (null === b2 || /number|range|text/.test(b2)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a2[c2] = d : b2 === c2 && "range" !== b2 && (a2[c2] = true);
    }, attributeRules: function(b2) {
      var c2, d, e = {}, f = a(b2), g = b2.getAttribute("type");
      for (c2 in a.validator.methods) "required" === c2 ? (d = b2.getAttribute(c2), "" === d && (d = true), d = !!d) : d = f.attr(c2), this.normalizeAttributeRule(e, g, c2, d);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    }, dataRules: function(b2) {
      var c2, d, e = {}, f = a(b2), g = b2.getAttribute("type");
      for (c2 in a.validator.methods) d = f.data("rule" + c2.charAt(0).toUpperCase() + c2.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c2, d);
      return e;
    }, staticRules: function(b2) {
      var c2 = {}, d = a.data(b2.form, "validator");
      return d.settings.rules && (c2 = a.validator.normalizeRule(d.settings.rules[b2.name]) || {}), c2;
    }, normalizeRules: function(b2, c2) {
      return a.each(b2, function(d, e) {
        if (e === false) return void delete b2[d];
        if (e.param || e.depends) {
          var f = true;
          switch (typeof e.depends) {
            case "string":
              f = !!a(e.depends, c2.form).length;
              break;
            case "function":
              f = e.depends.call(c2, c2);
          }
          f ? b2[d] = void 0 === e.param || e.param : (a.data(c2.form, "validator").resetElements(a(c2)), delete b2[d]);
        }
      }), a.each(b2, function(d, e) {
        b2[d] = a.isFunction(e) && "normalizer" !== d ? e(c2) : e;
      }), a.each(["minlength", "maxlength"], function() {
        b2[this] && (b2[this] = Number(b2[this]));
      }), a.each(["rangelength", "range"], function() {
        var c3;
        b2[this] && (a.isArray(b2[this]) ? b2[this] = [Number(b2[this][0]), Number(b2[this][1])] : "string" == typeof b2[this] && (c3 = b2[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b2[this] = [Number(c3[0]), Number(c3[1])]));
      }), a.validator.autoCreateRanges && (null != b2.min && null != b2.max && (b2.range = [b2.min, b2.max], delete b2.min, delete b2.max), null != b2.minlength && null != b2.maxlength && (b2.rangelength = [b2.minlength, b2.maxlength], delete b2.minlength, delete b2.maxlength)), b2;
    }, normalizeRule: function(b2) {
      if ("string" == typeof b2) {
        var c2 = {};
        a.each(b2.split(/\s/), function() {
          c2[this] = true;
        }), b2 = c2;
      }
      return b2;
    }, addMethod: function(b2, c2, d) {
      a.validator.methods[b2] = c2, a.validator.messages[b2] = void 0 !== d ? d : a.validator.messages[b2], c2.length < 3 && a.validator.addClassRules(b2, a.validator.normalizeRule(b2));
    }, methods: { required: function(b2, c2, d) {
      if (!this.depend(d, c2)) return "dependency-mismatch";
      if ("select" === c2.nodeName.toLowerCase()) {
        var e = a(c2).val();
        return e && e.length > 0;
      }
      return this.checkable(c2) ? this.getLength(b2, c2) > 0 : b2.length > 0;
    }, email: function(a2, b2) {
      return this.optional(b2) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a2);
    }, url: function(a2, b2) {
      return this.optional(b2) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a2);
    }, date: function(a2, b2) {
      return this.optional(b2) || !/Invalid|NaN/.test(new Date(a2).toString());
    }, dateISO: function(a2, b2) {
      return this.optional(b2) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a2);
    }, number: function(a2, b2) {
      return this.optional(b2) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a2);
    }, digits: function(a2, b2) {
      return this.optional(b2) || /^\d+$/.test(a2);
    }, minlength: function(b2, c2, d) {
      var e = a.isArray(b2) ? b2.length : this.getLength(b2, c2);
      return this.optional(c2) || e >= d;
    }, maxlength: function(b2, c2, d) {
      var e = a.isArray(b2) ? b2.length : this.getLength(b2, c2);
      return this.optional(c2) || e <= d;
    }, rangelength: function(b2, c2, d) {
      var e = a.isArray(b2) ? b2.length : this.getLength(b2, c2);
      return this.optional(c2) || e >= d[0] && e <= d[1];
    }, min: function(a2, b2, c2) {
      return this.optional(b2) || a2 >= c2;
    }, max: function(a2, b2, c2) {
      return this.optional(b2) || a2 <= c2;
    }, range: function(a2, b2, c2) {
      return this.optional(b2) || a2 >= c2[0] && a2 <= c2[1];
    }, step: function(b2, c2, d) {
      var e, f = a(c2).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a2) {
        var b3 = ("" + a2).match(/(?:\.(\d+))?$/);
        return b3 && b3[1] ? b3[1].length : 0;
      }, l = function(a2) {
        return Math.round(a2 * Math.pow(10, e));
      }, m = true;
      if (j) throw new Error(g);
      return e = k(d), (k(b2) > e || l(b2) % l(d) !== 0) && (m = false), this.optional(c2) || m;
    }, equalTo: function(b2, c2, d) {
      var e = a(d);
      return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
        a(c2).valid();
      }), b2 === e.val();
    }, remote: function(b2, c2, d, e) {
      if (this.optional(c2)) return "dependency-mismatch";
      e = "string" == typeof e && e || "remote";
      var f, g, h, i = this.previousValue(c2, e);
      return this.settings.messages[c2.name] || (this.settings.messages[c2.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c2.name][e], this.settings.messages[c2.name][e] = i.message, d = "string" == typeof d && { url: d } || d, h = a.param(a.extend({ data: b2 }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c2), g = {}, g[c2.name] = b2, a.ajax(a.extend(true, { mode: "abort", port: "validate" + c2.name, dataType: "json", data: g, context: f.currentForm, success: function(a2) {
        var d2, g2, h2, j = a2 === true || "true" === a2;
        f.settings.messages[c2.name][e] = i.originalMessage, j ? (h2 = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c2), f.formSubmitted = h2, f.successList.push(c2), f.invalid[c2.name] = false, f.showErrors()) : (d2 = {}, g2 = a2 || f.defaultMessage(c2, { method: e, parameters: b2 }), d2[c2.name] = i.message = g2, f.invalid[c2.name] = true, f.showErrors(d2)), i.valid = j, f.stopRequest(c2, j);
      } }, d)), "pending");
    } } });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a2, b2, d) {
      var e = a2.port;
      "abort" === a2.mode && (c[e] && c[e].abort(), c[e] = d);
    }) : (b = a.ajax, a.ajax = function(d) {
      var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
      return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
    }), a;
  });
  /*! DataTables 1.13.6
   * ©2008-2023 SpryMedia Ltd - datatables.net/license
   */
  !function(n) {
    var a;
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
      return n(t, window, document);
    }) : "object" == typeof exports ? (a = require("jquery"), "undefined" == typeof window ? module.exports = function(t, e) {
      return t = t || window, e = e || a(t), n(e, t, t.document);
    } : n(a, window, window.document)) : window.DataTable = n(jQuery, window, document);
  }(function(P, j, v, H) {
    function d(t2) {
      var e2 = parseInt(t2, 10);
      return !isNaN(e2) && isFinite(t2) ? e2 : null;
    }
    function l(t2, e2, n2) {
      var a2 = typeof t2, r2 = "string" == a2;
      return "number" == a2 || "bigint" == a2 || !!h(t2) || (e2 && r2 && (t2 = $2(t2, e2)), n2 && r2 && (t2 = t2.replace(q, "")), !isNaN(parseFloat(t2)) && isFinite(t2));
    }
    function a(t2, e2, n2) {
      var a2;
      return !!h(t2) || (h(a2 = t2) || "string" == typeof a2) && !!l(t2.replace(V, "").replace(/<script/i, ""), e2, n2) || null;
    }
    function m(t2, e2, n2, a2) {
      var r2 = [], o2 = 0, i2 = e2.length;
      if (a2 !== H) for (; o2 < i2; o2++) t2[e2[o2]][n2] && r2.push(t2[e2[o2]][n2][a2]);
      else for (; o2 < i2; o2++) r2.push(t2[e2[o2]][n2]);
      return r2;
    }
    function f(t2, e2) {
      var n2, a2 = [];
      e2 === H ? (e2 = 0, n2 = t2) : (n2 = e2, e2 = t2);
      for (var r2 = e2; r2 < n2; r2++) a2.push(r2);
      return a2;
    }
    function _(t2) {
      for (var e2 = [], n2 = 0, a2 = t2.length; n2 < a2; n2++) t2[n2] && e2.push(t2[n2]);
      return e2;
    }
    function s(t2, e2) {
      return -1 !== this.indexOf(t2, e2 = e2 === H ? 0 : e2);
    }
    var p, e, t, w = function(t2, v2) {
      if (w.factory(t2, v2)) return w;
      if (this instanceof w) return P(t2).DataTable(v2);
      v2 = t2, this.$ = function(t3, e3) {
        return this.api(true).$(t3, e3);
      }, this._ = function(t3, e3) {
        return this.api(true).rows(t3, e3).data();
      }, this.api = function(t3) {
        return new B(t3 ? ge(this[p.iApiIndex]) : this);
      }, this.fnAddData = function(t3, e3) {
        var n2 = this.api(true), t3 = (Array.isArray(t3) && (Array.isArray(t3[0]) || P.isPlainObject(t3[0])) ? n2.rows : n2.row).add(t3);
        return e3 !== H && !e3 || n2.draw(), t3.flatten().toArray();
      }, this.fnAdjustColumnSizing = function(t3) {
        var e3 = this.api(true).columns.adjust(), n2 = e3.settings()[0], a2 = n2.oScroll;
        t3 === H || t3 ? e3.draw(false) : "" === a2.sX && "" === a2.sY || Qt(n2);
      }, this.fnClearTable = function(t3) {
        var e3 = this.api(true).clear();
        t3 !== H && !t3 || e3.draw();
      }, this.fnClose = function(t3) {
        this.api(true).row(t3).child.hide();
      }, this.fnDeleteRow = function(t3, e3, n2) {
        var a2 = this.api(true), t3 = a2.rows(t3), r2 = t3.settings()[0], o2 = r2.aoData[t3[0][0]];
        return t3.remove(), e3 && e3.call(this, r2, o2), n2 !== H && !n2 || a2.draw(), o2;
      }, this.fnDestroy = function(t3) {
        this.api(true).destroy(t3);
      }, this.fnDraw = function(t3) {
        this.api(true).draw(t3);
      }, this.fnFilter = function(t3, e3, n2, a2, r2, o2) {
        var i2 = this.api(true);
        (null === e3 || e3 === H ? i2 : i2.column(e3)).search(t3, n2, a2, o2), i2.draw();
      }, this.fnGetData = function(t3, e3) {
        var n2, a2 = this.api(true);
        return t3 !== H ? (n2 = t3.nodeName ? t3.nodeName.toLowerCase() : "", e3 !== H || "td" == n2 || "th" == n2 ? a2.cell(t3, e3).data() : a2.row(t3).data() || null) : a2.data().toArray();
      }, this.fnGetNodes = function(t3) {
        var e3 = this.api(true);
        return t3 !== H ? e3.row(t3).node() : e3.rows().nodes().flatten().toArray();
      }, this.fnGetPosition = function(t3) {
        var e3 = this.api(true), n2 = t3.nodeName.toUpperCase();
        return "TR" == n2 ? e3.row(t3).index() : "TD" == n2 || "TH" == n2 ? [(n2 = e3.cell(t3).index()).row, n2.columnVisible, n2.column] : null;
      }, this.fnIsOpen = function(t3) {
        return this.api(true).row(t3).child.isShown();
      }, this.fnOpen = function(t3, e3, n2) {
        return this.api(true).row(t3).child(e3, n2).show().child()[0];
      }, this.fnPageChange = function(t3, e3) {
        t3 = this.api(true).page(t3);
        e3 !== H && !e3 || t3.draw(false);
      }, this.fnSetColumnVis = function(t3, e3, n2) {
        t3 = this.api(true).column(t3).visible(e3);
        n2 !== H && !n2 || t3.columns.adjust().draw();
      }, this.fnSettings = function() {
        return ge(this[p.iApiIndex]);
      }, this.fnSort = function(t3) {
        this.api(true).order(t3).draw();
      }, this.fnSortListener = function(t3, e3, n2) {
        this.api(true).order.listener(t3, e3, n2);
      }, this.fnUpdate = function(t3, e3, n2, a2, r2) {
        var o2 = this.api(true);
        return (n2 === H || null === n2 ? o2.row(e3) : o2.cell(e3, n2)).data(t3), r2 !== H && !r2 || o2.columns.adjust(), a2 !== H && !a2 || o2.draw(), 0;
      }, this.fnVersionCheck = p.fnVersionCheck;
      var e2, y2 = this, D2 = v2 === H, _2 = this.length;
      for (e2 in D2 && (v2 = {}), this.oApi = this.internal = p.internal, w.ext.internal) e2 && (this[e2] = $e(e2));
      return this.each(function() {
        var r2 = 1 < _2 ? be({}, v2, true) : v2, o2 = 0, t3 = this.getAttribute("id"), i2 = false, e3 = w.defaults, l2 = P(this);
        if ("table" != this.nodeName.toLowerCase()) W(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
        else {
          K(e3), Q(e3.column), C(e3, e3, true), C(e3.column, e3.column, true), C(e3, P.extend(r2, l2.data()), true);
          for (var n2 = w.settings, o2 = 0, s2 = n2.length; o2 < s2; o2++) {
            var a2 = n2[o2];
            if (a2.nTable == this || a2.nTHead && a2.nTHead.parentNode == this || a2.nTFoot && a2.nTFoot.parentNode == this) {
              var u2 = (r2.bRetrieve !== H ? r2 : e3).bRetrieve, c2 = (r2.bDestroy !== H ? r2 : e3).bDestroy;
              if (D2 || u2) return a2.oInstance;
              if (c2) {
                a2.oInstance.fnDestroy();
                break;
              }
              return void W(a2, 0, "Cannot reinitialise DataTable", 3);
            }
            if (a2.sTableId == this.id) {
              n2.splice(o2, 1);
              break;
            }
          }
          null !== t3 && "" !== t3 || (t3 = "DataTables_Table_" + w.ext._unique++, this.id = t3);
          var f2, d2, h2 = P.extend(true, {}, w.models.oSettings, { sDestroyWidth: l2[0].style.width, sInstance: t3, sTableId: t3 }), p2 = (h2.nTable = this, h2.oApi = y2.internal, h2.oInit = r2, n2.push(h2), h2.oInstance = 1 === y2.length ? y2 : l2.dataTable(), K(r2), Z(r2.oLanguage), r2.aLengthMenu && !r2.iDisplayLength && (r2.iDisplayLength = (Array.isArray(r2.aLengthMenu[0]) ? r2.aLengthMenu[0] : r2.aLengthMenu)[0]), r2 = be(P.extend(true, {}, e3), r2), F(h2.oFeatures, r2, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), F(h2, r2, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]), F(h2.oScroll, r2, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]), F(h2.oLanguage, r2, "fnInfoCallback"), L(h2, "aoDrawCallback", r2.fnDrawCallback, "user"), L(h2, "aoServerParams", r2.fnServerParams, "user"), L(h2, "aoStateSaveParams", r2.fnStateSaveParams, "user"), L(h2, "aoStateLoadParams", r2.fnStateLoadParams, "user"), L(h2, "aoStateLoaded", r2.fnStateLoaded, "user"), L(h2, "aoRowCallback", r2.fnRowCallback, "user"), L(h2, "aoRowCreatedCallback", r2.fnCreatedRow, "user"), L(h2, "aoHeaderCallback", r2.fnHeaderCallback, "user"), L(h2, "aoFooterCallback", r2.fnFooterCallback, "user"), L(h2, "aoInitComplete", r2.fnInitComplete, "user"), L(h2, "aoPreDrawCallback", r2.fnPreDrawCallback, "user"), h2.rowIdFn = A(r2.rowId), tt(h2), h2.oClasses), g2 = (P.extend(p2, w.ext.classes, r2.oClasses), l2.addClass(p2.sTable), h2.iInitDisplayStart === H && (h2.iInitDisplayStart = r2.iDisplayStart, h2._iDisplayStart = r2.iDisplayStart), null !== r2.iDeferLoading && (h2.bDeferLoading = true, t3 = Array.isArray(r2.iDeferLoading), h2._iRecordsDisplay = t3 ? r2.iDeferLoading[0] : r2.iDeferLoading, h2._iRecordsTotal = t3 ? r2.iDeferLoading[1] : r2.iDeferLoading), h2.oLanguage), t3 = (P.extend(true, g2, r2.oLanguage), g2.sUrl ? (P.ajax({ dataType: "json", url: g2.sUrl, success: function(t4) {
            C(e3.oLanguage, t4), Z(t4), P.extend(true, g2, t4, h2.oInit.oLanguage), R(h2, null, "i18n", [h2]), Jt(h2);
          }, error: function() {
            Jt(h2);
          } }), i2 = true) : R(h2, null, "i18n", [h2]), null === r2.asStripeClasses && (h2.asStripeClasses = [p2.sStripeOdd, p2.sStripeEven]), h2.asStripeClasses), b2 = l2.children("tbody").find("tr").eq(0), m2 = (-1 !== P.inArray(true, P.map(t3, function(t4, e4) {
            return b2.hasClass(t4);
          })) && (P("tbody tr", this).removeClass(t3.join(" ")), h2.asDestroyStripes = t3.slice()), []), t3 = this.getElementsByTagName("thead");
          if (0 !== t3.length && (wt(h2.aoHeader, t3[0]), m2 = Ct(h2)), null === r2.aoColumns) for (f2 = [], o2 = 0, s2 = m2.length; o2 < s2; o2++) f2.push(null);
          else f2 = r2.aoColumns;
          for (o2 = 0, s2 = f2.length; o2 < s2; o2++) nt(h2, m2 ? m2[o2] : null);
          st(h2, r2.aoColumnDefs, f2, function(t4, e4) {
            at(h2, t4, e4);
          }), b2.length && (d2 = function(t4, e4) {
            return null !== t4.getAttribute("data-" + e4) ? e4 : null;
          }, P(b2[0]).children("th, td").each(function(t4, e4) {
            var n3, a3 = h2.aoColumns[t4];
            a3 || W(h2, 0, "Incorrect column count", 18), a3.mData === t4 && (n3 = d2(e4, "sort") || d2(e4, "order"), e4 = d2(e4, "filter") || d2(e4, "search"), null === n3 && null === e4 || (a3.mData = { _: t4 + ".display", sort: null !== n3 ? t4 + ".@data-" + n3 : H, type: null !== n3 ? t4 + ".@data-" + n3 : H, filter: null !== e4 ? t4 + ".@data-" + e4 : H }, a3._isArrayHost = true, at(h2, t4)));
          }));
          var S2 = h2.oFeatures, t3 = function() {
            if (r2.aaSorting === H) {
              var t4 = h2.aaSorting;
              for (o2 = 0, s2 = t4.length; o2 < s2; o2++) t4[o2][1] = h2.aoColumns[o2].asSorting[0];
            }
            ce(h2), S2.bSort && L(h2, "aoDrawCallback", function() {
              var t5, n4;
              h2.bSorted && (t5 = I(h2), n4 = {}, P.each(t5, function(t6, e5) {
                n4[e5.src] = e5.dir;
              }), R(h2, null, "order", [h2, t5, n4]), le(h2));
            }), L(h2, "aoDrawCallback", function() {
              (h2.bSorted || "ssp" === E(h2) || S2.bDeferRender) && ce(h2);
            }, "sc");
            var e4 = l2.children("caption").each(function() {
              this._captionSide = P(this).css("caption-side");
            }), n3 = l2.children("thead"), a3 = (0 === n3.length && (n3 = P("<thead/>").appendTo(l2)), h2.nTHead = n3[0], l2.children("tbody")), n3 = (0 === a3.length && (a3 = P("<tbody/>").insertAfter(n3)), h2.nTBody = a3[0], l2.children("tfoot"));
            if (0 === (n3 = 0 === n3.length && 0 < e4.length && ("" !== h2.oScroll.sX || "" !== h2.oScroll.sY) ? P("<tfoot/>").appendTo(l2) : n3).length || 0 === n3.children().length ? l2.addClass(p2.sNoFooter) : 0 < n3.length && (h2.nTFoot = n3[0], wt(h2.aoFooter, h2.nTFoot)), r2.aaData) for (o2 = 0; o2 < r2.aaData.length; o2++) x(h2, r2.aaData[o2]);
            else !h2.bDeferLoading && "dom" != E(h2) || ut(h2, P(h2.nTBody).children("tr"));
            h2.aiDisplay = h2.aiDisplayMaster.slice(), !(h2.bInitialised = true) === i2 && Jt(h2);
          };
          L(h2, "aoDrawCallback", de, "state_save"), r2.bStateSave ? (S2.bStateSave = true, he(h2, 0, t3)) : t3();
        }
      }), y2 = null, this;
    }, c = {}, U = /[\r\n\u2028]/g, V = /<.*?>/g, X = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, J = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"), q = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, h = function(t2) {
      return !t2 || true === t2 || "-" === t2;
    }, $2 = function(t2, e2) {
      return c[e2] || (c[e2] = new RegExp(Ot(e2), "g")), "string" == typeof t2 && "." !== e2 ? t2.replace(/\./g, "").replace(c[e2], ".") : t2;
    }, N = function(t2, e2, n2) {
      var a2 = [], r2 = 0, o2 = t2.length;
      if (n2 !== H) for (; r2 < o2; r2++) t2[r2] && t2[r2][e2] && a2.push(t2[r2][e2][n2]);
      else for (; r2 < o2; r2++) t2[r2] && a2.push(t2[r2][e2]);
      return a2;
    }, G = function(t2) {
      if (!(t2.length < 2)) for (var e2 = t2.slice().sort(), n2 = e2[0], a2 = 1, r2 = e2.length; a2 < r2; a2++) {
        if (e2[a2] === n2) return false;
        n2 = e2[a2];
      }
      return true;
    }, z = function(t2) {
      if (G(t2)) return t2.slice();
      var e2, n2, a2, r2 = [], o2 = t2.length, i2 = 0;
      t: for (n2 = 0; n2 < o2; n2++) {
        for (e2 = t2[n2], a2 = 0; a2 < i2; a2++) if (r2[a2] === e2) continue t;
        r2.push(e2), i2++;
      }
      return r2;
    }, Y = function(t2, e2) {
      if (Array.isArray(e2)) for (var n2 = 0; n2 < e2.length; n2++) Y(t2, e2[n2]);
      else t2.push(e2);
      return t2;
    };
    function i(n2) {
      var a2, r2, o2 = {};
      P.each(n2, function(t2, e2) {
        (a2 = t2.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(a2[1] + " ") && (r2 = t2.replace(a2[0], a2[2].toLowerCase()), o2[r2] = t2, "o" === a2[1]) && i(n2[t2]);
      }), n2._hungarianMap = o2;
    }
    function C(n2, a2, r2) {
      var o2;
      n2._hungarianMap || i(n2), P.each(a2, function(t2, e2) {
        (o2 = n2._hungarianMap[t2]) === H || !r2 && a2[o2] !== H || ("o" === o2.charAt(0) ? (a2[o2] || (a2[o2] = {}), P.extend(true, a2[o2], a2[t2]), C(n2[o2], a2[o2], r2)) : a2[o2] = a2[t2]);
      });
    }
    function Z(t2) {
      var e2, n2 = w.defaults.oLanguage, a2 = n2.sDecimal;
      a2 && Me(a2), t2 && (e2 = t2.sZeroRecords, !t2.sEmptyTable && e2 && "No data available in table" === n2.sEmptyTable && F(t2, t2, "sZeroRecords", "sEmptyTable"), !t2.sLoadingRecords && e2 && "Loading..." === n2.sLoadingRecords && F(t2, t2, "sZeroRecords", "sLoadingRecords"), t2.sInfoThousands && (t2.sThousands = t2.sInfoThousands), e2 = t2.sDecimal) && a2 !== e2 && Me(e2);
    }
    Array.isArray || (Array.isArray = function(t2) {
      return "[object Array]" === Object.prototype.toString.call(t2);
    }), Array.prototype.includes || (Array.prototype.includes = s), String.prototype.trim || (String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }), String.prototype.includes || (String.prototype.includes = s), w.util = { throttle: function(a2, t2) {
      var r2, o2, i2 = t2 !== H ? t2 : 200;
      return function() {
        var t3 = this, e2 = +/* @__PURE__ */ new Date(), n2 = arguments;
        r2 && e2 < r2 + i2 ? (clearTimeout(o2), o2 = setTimeout(function() {
          r2 = H, a2.apply(t3, n2);
        }, i2)) : (r2 = e2, a2.apply(t3, n2));
      };
    }, escapeRegex: function(t2) {
      return t2.replace(J, "\\$1");
    }, set: function(a2) {
      var d2;
      return P.isPlainObject(a2) ? w.util.set(a2._) : null === a2 ? function() {
      } : "function" == typeof a2 ? function(t2, e2, n2) {
        a2(t2, "set", e2, n2);
      } : "string" != typeof a2 || -1 === a2.indexOf(".") && -1 === a2.indexOf("[") && -1 === a2.indexOf("(") ? function(t2, e2) {
        t2[a2] = e2;
      } : (d2 = function(t2, e2, n2) {
        for (var a3, r2, o2, i2, l2 = dt(n2), n2 = l2[l2.length - 1], s2 = 0, u2 = l2.length - 1; s2 < u2; s2++) {
          if ("__proto__" === l2[s2] || "constructor" === l2[s2]) throw new Error("Cannot set prototype values");
          if (a3 = l2[s2].match(ft), r2 = l2[s2].match(g), a3) {
            if (l2[s2] = l2[s2].replace(ft, ""), t2[l2[s2]] = [], (a3 = l2.slice()).splice(0, s2 + 1), i2 = a3.join("."), Array.isArray(e2)) for (var c2 = 0, f2 = e2.length; c2 < f2; c2++) d2(o2 = {}, e2[c2], i2), t2[l2[s2]].push(o2);
            else t2[l2[s2]] = e2;
            return;
          }
          r2 && (l2[s2] = l2[s2].replace(g, ""), t2 = t2[l2[s2]](e2)), null !== t2[l2[s2]] && t2[l2[s2]] !== H || (t2[l2[s2]] = {}), t2 = t2[l2[s2]];
        }
        n2.match(g) ? t2[n2.replace(g, "")](e2) : t2[n2.replace(ft, "")] = e2;
      }, function(t2, e2) {
        return d2(t2, e2, a2);
      });
    }, get: function(r2) {
      var o2, d2;
      return P.isPlainObject(r2) ? (o2 = {}, P.each(r2, function(t2, e2) {
        e2 && (o2[t2] = w.util.get(e2));
      }), function(t2, e2, n2, a2) {
        var r3 = o2[e2] || o2._;
        return r3 !== H ? r3(t2, e2, n2, a2) : t2;
      }) : null === r2 ? function(t2) {
        return t2;
      } : "function" == typeof r2 ? function(t2, e2, n2, a2) {
        return r2(t2, e2, n2, a2);
      } : "string" != typeof r2 || -1 === r2.indexOf(".") && -1 === r2.indexOf("[") && -1 === r2.indexOf("(") ? function(t2, e2) {
        return t2[r2];
      } : (d2 = function(t2, e2, n2) {
        var a2, r3, o3;
        if ("" !== n2) for (var i2 = dt(n2), l2 = 0, s2 = i2.length; l2 < s2; l2++) {
          if (f2 = i2[l2].match(ft), a2 = i2[l2].match(g), f2) {
            if (i2[l2] = i2[l2].replace(ft, ""), "" !== i2[l2] && (t2 = t2[i2[l2]]), r3 = [], i2.splice(0, l2 + 1), o3 = i2.join("."), Array.isArray(t2)) for (var u2 = 0, c2 = t2.length; u2 < c2; u2++) r3.push(d2(t2[u2], e2, o3));
            var f2 = f2[0].substring(1, f2[0].length - 1);
            t2 = "" === f2 ? r3 : r3.join(f2);
            break;
          }
          if (a2) i2[l2] = i2[l2].replace(g, ""), t2 = t2[i2[l2]]();
          else {
            if (null === t2 || null === t2[i2[l2]]) return null;
            if (t2 === H || t2[i2[l2]] === H) return H;
            t2 = t2[i2[l2]];
          }
        }
        return t2;
      }, function(t2, e2) {
        return d2(t2, e2, r2);
      });
    } };
    var r = function(t2, e2, n2) {
      t2[e2] !== H && (t2[n2] = t2[e2]);
    };
    function K(t2) {
      r(t2, "ordering", "bSort"), r(t2, "orderMulti", "bSortMulti"), r(t2, "orderClasses", "bSortClasses"), r(t2, "orderCellsTop", "bSortCellsTop"), r(t2, "order", "aaSorting"), r(t2, "orderFixed", "aaSortingFixed"), r(t2, "paging", "bPaginate"), r(t2, "pagingType", "sPaginationType"), r(t2, "pageLength", "iDisplayLength"), r(t2, "searching", "bFilter"), "boolean" == typeof t2.sScrollX && (t2.sScrollX = t2.sScrollX ? "100%" : ""), "boolean" == typeof t2.scrollX && (t2.scrollX = t2.scrollX ? "100%" : "");
      var e2 = t2.aoSearchCols;
      if (e2) for (var n2 = 0, a2 = e2.length; n2 < a2; n2++) e2[n2] && C(w.models.oSearch, e2[n2]);
    }
    function Q(t2) {
      r(t2, "orderable", "bSortable"), r(t2, "orderData", "aDataSort"), r(t2, "orderSequence", "asSorting"), r(t2, "orderDataType", "sortDataType");
      var e2 = t2.aDataSort;
      "number" != typeof e2 || Array.isArray(e2) || (t2.aDataSort = [e2]);
    }
    function tt(t2) {
      var e2, n2, a2, r2;
      w.__browser || (w.__browser = e2 = {}, r2 = (a2 = (n2 = P("<div/>").css({ position: "fixed", top: 0, left: -1 * P(j).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append(P("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(P("<div/>").css({ width: "100%", height: 10 }))).appendTo("body")).children()).children(), e2.barWidth = a2[0].offsetWidth - a2[0].clientWidth, e2.bScrollOversize = 100 === r2[0].offsetWidth && 100 !== a2[0].clientWidth, e2.bScrollbarLeft = 1 !== Math.round(r2.offset().left), e2.bBounding = !!n2[0].getBoundingClientRect().width, n2.remove()), P.extend(t2.oBrowser, w.__browser), t2.oScroll.iBarWidth = w.__browser.barWidth;
    }
    function et(t2, e2, n2, a2, r2, o2) {
      var i2, l2 = a2, s2 = false;
      for (n2 !== H && (i2 = n2, s2 = true); l2 !== r2; ) t2.hasOwnProperty(l2) && (i2 = s2 ? e2(i2, t2[l2], l2, t2) : t2[l2], s2 = true, l2 += o2);
      return i2;
    }
    function nt(t2, e2) {
      var n2 = w.defaults.column, a2 = t2.aoColumns.length, n2 = P.extend({}, w.models.oColumn, n2, { nTh: e2 || v.createElement("th"), sTitle: n2.sTitle || (e2 ? e2.innerHTML : ""), aDataSort: n2.aDataSort || [a2], mData: n2.mData || a2, idx: a2 }), n2 = (t2.aoColumns.push(n2), t2.aoPreSearchCols);
      n2[a2] = P.extend({}, w.models.oSearch, n2[a2]), at(t2, a2, P(e2).data());
    }
    function at(t2, e2, n2) {
      function a2(t3) {
        return "string" == typeof t3 && -1 !== t3.indexOf("@");
      }
      var e2 = t2.aoColumns[e2], r2 = t2.oClasses, o2 = P(e2.nTh), i2 = (!e2.sWidthOrig && (e2.sWidthOrig = o2.attr("width") || null, u2 = (o2.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/)) && (e2.sWidthOrig = u2[1]), n2 !== H && null !== n2 && (Q(n2), C(w.defaults.column, n2, true), n2.mDataProp === H || n2.mData || (n2.mData = n2.mDataProp), n2.sType && (e2._sManualType = n2.sType), n2.className && !n2.sClass && (n2.sClass = n2.className), n2.sClass && o2.addClass(n2.sClass), u2 = e2.sClass, P.extend(e2, n2), F(e2, n2, "sWidth", "sWidthOrig"), u2 !== e2.sClass && (e2.sClass = u2 + " " + e2.sClass), n2.iDataSort !== H && (e2.aDataSort = [n2.iDataSort]), F(e2, n2, "aDataSort"), e2.ariaTitle || (e2.ariaTitle = o2.attr("aria-label"))), e2.mData), l2 = A(i2), s2 = e2.mRender ? A(e2.mRender) : null, u2 = (e2._bAttrSrc = P.isPlainObject(i2) && (a2(i2.sort) || a2(i2.type) || a2(i2.filter)), e2._setter = null, e2.fnGetData = function(t3, e3, n3) {
        var a3 = l2(t3, e3, H, n3);
        return s2 && e3 ? s2(a3, e3, t3, n3) : a3;
      }, e2.fnSetData = function(t3, e3, n3) {
        return b(i2)(t3, e3, n3);
      }, "number" == typeof i2 || e2._isArrayHost || (t2._rowReadObject = true), t2.oFeatures.bSort || (e2.bSortable = false, o2.addClass(r2.sSortableNone)), -1 !== P.inArray("asc", e2.asSorting)), n2 = -1 !== P.inArray("desc", e2.asSorting);
      e2.bSortable && (u2 || n2) ? u2 && !n2 ? (e2.sSortingClass = r2.sSortableAsc, e2.sSortingClassJUI = r2.sSortJUIAscAllowed) : !u2 && n2 ? (e2.sSortingClass = r2.sSortableDesc, e2.sSortingClassJUI = r2.sSortJUIDescAllowed) : (e2.sSortingClass = r2.sSortable, e2.sSortingClassJUI = r2.sSortJUI) : (e2.sSortingClass = r2.sSortableNone, e2.sSortingClassJUI = "");
    }
    function O(t2) {
      if (false !== t2.oFeatures.bAutoWidth) {
        var e2 = t2.aoColumns;
        ee(t2);
        for (var n2 = 0, a2 = e2.length; n2 < a2; n2++) e2[n2].nTh.style.width = e2[n2].sWidth;
      }
      var r2 = t2.oScroll;
      "" === r2.sY && "" === r2.sX || Qt(t2), R(t2, null, "column-sizing", [t2]);
    }
    function rt(t2, e2) {
      t2 = it(t2, "bVisible");
      return "number" == typeof t2[e2] ? t2[e2] : null;
    }
    function ot(t2, e2) {
      t2 = it(t2, "bVisible"), e2 = P.inArray(e2, t2);
      return -1 !== e2 ? e2 : null;
    }
    function T(t2) {
      var n2 = 0;
      return P.each(t2.aoColumns, function(t3, e2) {
        e2.bVisible && "none" !== P(e2.nTh).css("display") && n2++;
      }), n2;
    }
    function it(t2, n2) {
      var a2 = [];
      return P.map(t2.aoColumns, function(t3, e2) {
        t3[n2] && a2.push(e2);
      }), a2;
    }
    function lt(t2) {
      for (var e2, n2, a2, r2, o2, i2, l2, s2 = t2.aoColumns, u2 = t2.aoData, c2 = w.ext.type.detect, f2 = 0, d2 = s2.length; f2 < d2; f2++) if (l2 = [], !(o2 = s2[f2]).sType && o2._sManualType) o2.sType = o2._sManualType;
      else if (!o2.sType) {
        for (e2 = 0, n2 = c2.length; e2 < n2; e2++) {
          for (a2 = 0, r2 = u2.length; a2 < r2 && (l2[a2] === H && (l2[a2] = S(t2, a2, f2, "type")), (i2 = c2[e2](l2[a2], t2)) || e2 === c2.length - 1) && ("html" !== i2 || h(l2[a2])); a2++) ;
          if (i2) {
            o2.sType = i2;
            break;
          }
        }
        o2.sType || (o2.sType = "string");
      }
    }
    function st(t2, e2, n2, a2) {
      var r2, o2, i2, l2, s2 = t2.aoColumns;
      if (e2) {
        for (r2 = e2.length - 1; 0 <= r2; r2--) for (var u2, c2 = (u2 = e2[r2]).target !== H ? u2.target : u2.targets !== H ? u2.targets : u2.aTargets, f2 = 0, d2 = (c2 = Array.isArray(c2) ? c2 : [c2]).length; f2 < d2; f2++) if ("number" == typeof c2[f2] && 0 <= c2[f2]) {
          for (; s2.length <= c2[f2]; ) nt(t2);
          a2(c2[f2], u2);
        } else if ("number" == typeof c2[f2] && c2[f2] < 0) a2(s2.length + c2[f2], u2);
        else if ("string" == typeof c2[f2]) for (i2 = 0, l2 = s2.length; i2 < l2; i2++) "_all" != c2[f2] && !P(s2[i2].nTh).hasClass(c2[f2]) || a2(i2, u2);
      }
      if (n2) for (r2 = 0, o2 = n2.length; r2 < o2; r2++) a2(r2, n2[r2]);
    }
    function x(t2, e2, n2, a2) {
      for (var r2 = t2.aoData.length, o2 = P.extend(true, {}, w.models.oRow, { src: n2 ? "dom" : "data", idx: r2 }), i2 = (o2._aData = e2, t2.aoData.push(o2), t2.aoColumns), l2 = 0, s2 = i2.length; l2 < s2; l2++) i2[l2].sType = null;
      t2.aiDisplayMaster.push(r2);
      e2 = t2.rowIdFn(e2);
      return e2 !== H && (t2.aIds[e2] = o2), !n2 && t2.oFeatures.bDeferRender || St(t2, r2, n2, a2), r2;
    }
    function ut(n2, t2) {
      var a2;
      return (t2 = t2 instanceof P ? t2 : P(t2)).map(function(t3, e2) {
        return a2 = mt(n2, e2), x(n2, a2.data, e2, a2.cells);
      });
    }
    function S(t2, e2, n2, a2) {
      "search" === a2 ? a2 = "filter" : "order" === a2 && (a2 = "sort");
      var r2 = t2.iDraw, o2 = t2.aoColumns[n2], i2 = t2.aoData[e2]._aData, l2 = o2.sDefaultContent, s2 = o2.fnGetData(i2, a2, { settings: t2, row: e2, col: n2 });
      if (s2 === H) return t2.iDrawError != r2 && null === l2 && (W(t2, 0, "Requested unknown parameter " + ("function" == typeof o2.mData ? "{function}" : "'" + o2.mData + "'") + " for row " + e2 + ", column " + n2, 4), t2.iDrawError = r2), l2;
      if (s2 !== i2 && null !== s2 || null === l2 || a2 === H) {
        if ("function" == typeof s2) return s2.call(i2);
      } else s2 = l2;
      return null === s2 && "display" === a2 ? "" : "filter" === a2 && (e2 = w.ext.type.search)[o2.sType] ? e2[o2.sType](s2) : s2;
    }
    function ct(t2, e2, n2, a2) {
      var r2 = t2.aoColumns[n2], o2 = t2.aoData[e2]._aData;
      r2.fnSetData(o2, a2, { settings: t2, row: e2, col: n2 });
    }
    var ft = /\[.*?\]$/, g = /\(\)$/;
    function dt(t2) {
      return P.map(t2.match(/(\\.|[^\.])+/g) || [""], function(t3) {
        return t3.replace(/\\\./g, ".");
      });
    }
    var A = w.util.get, b = w.util.set;
    function ht(t2) {
      return N(t2.aoData, "_aData");
    }
    function pt(t2) {
      t2.aoData.length = 0, t2.aiDisplayMaster.length = 0, t2.aiDisplay.length = 0, t2.aIds = {};
    }
    function gt(t2, e2, n2) {
      for (var a2 = -1, r2 = 0, o2 = t2.length; r2 < o2; r2++) t2[r2] == e2 ? a2 = r2 : t2[r2] > e2 && t2[r2]--;
      -1 != a2 && n2 === H && t2.splice(a2, 1);
    }
    function bt(n2, a2, t2, e2) {
      function r2(t3, e3) {
        for (; t3.childNodes.length; ) t3.removeChild(t3.firstChild);
        t3.innerHTML = S(n2, a2, e3, "display");
      }
      var o2, i2, l2 = n2.aoData[a2];
      if ("dom" !== t2 && (t2 && "auto" !== t2 || "dom" !== l2.src)) {
        var s2 = l2.anCells;
        if (s2) if (e2 !== H) r2(s2[e2], e2);
        else for (o2 = 0, i2 = s2.length; o2 < i2; o2++) r2(s2[o2], o2);
      } else l2._aData = mt(n2, l2, e2, e2 === H ? H : l2._aData).data;
      l2._aSortData = null, l2._aFilterData = null;
      var u2 = n2.aoColumns;
      if (e2 !== H) u2[e2].sType = null;
      else {
        for (o2 = 0, i2 = u2.length; o2 < i2; o2++) u2[o2].sType = null;
        vt(n2, l2);
      }
    }
    function mt(t2, e2, n2, a2) {
      function r2(t3, e3) {
        var n3;
        "string" == typeof t3 && -1 !== (n3 = t3.indexOf("@")) && (n3 = t3.substring(n3 + 1), b(t3)(a2, e3.getAttribute(n3)));
      }
      function o2(t3) {
        n2 !== H && n2 !== f2 || (l2 = d2[f2], s2 = t3.innerHTML.trim(), l2 && l2._bAttrSrc ? (b(l2.mData._)(a2, s2), r2(l2.mData.sort, t3), r2(l2.mData.type, t3), r2(l2.mData.filter, t3)) : h2 ? (l2._setter || (l2._setter = b(l2.mData)), l2._setter(a2, s2)) : a2[f2] = s2), f2++;
      }
      var i2, l2, s2, u2 = [], c2 = e2.firstChild, f2 = 0, d2 = t2.aoColumns, h2 = t2._rowReadObject;
      a2 = a2 !== H ? a2 : h2 ? {} : [];
      if (c2) for (; c2; ) "TD" != (i2 = c2.nodeName.toUpperCase()) && "TH" != i2 || (o2(c2), u2.push(c2)), c2 = c2.nextSibling;
      else for (var p2 = 0, g2 = (u2 = e2.anCells).length; p2 < g2; p2++) o2(u2[p2]);
      var e2 = e2.firstChild ? e2 : e2.nTr;
      return e2 && (e2 = e2.getAttribute("id")) && b(t2.rowId)(a2, e2), { data: a2, cells: u2 };
    }
    function St(t2, e2, n2, a2) {
      var r2, o2, i2, l2, s2, u2, c2 = t2.aoData[e2], f2 = c2._aData, d2 = [];
      if (null === c2.nTr) {
        for (r2 = n2 || v.createElement("tr"), c2.nTr = r2, c2.anCells = d2, r2._DT_RowIndex = e2, vt(t2, c2), l2 = 0, s2 = t2.aoColumns.length; l2 < s2; l2++) i2 = t2.aoColumns[l2], (o2 = (u2 = !n2) ? v.createElement(i2.sCellType) : a2[l2]) || W(t2, 0, "Incorrect column count", 18), o2._DT_CellIndex = { row: e2, column: l2 }, d2.push(o2), !u2 && (!i2.mRender && i2.mData === l2 || P.isPlainObject(i2.mData) && i2.mData._ === l2 + ".display") || (o2.innerHTML = S(t2, e2, l2, "display")), i2.sClass && (o2.className += " " + i2.sClass), i2.bVisible && !n2 ? r2.appendChild(o2) : !i2.bVisible && n2 && o2.parentNode.removeChild(o2), i2.fnCreatedCell && i2.fnCreatedCell.call(t2.oInstance, o2, S(t2, e2, l2), f2, e2, l2);
        R(t2, "aoRowCreatedCallback", null, [r2, f2, e2, d2]);
      }
    }
    function vt(t2, e2) {
      var n2 = e2.nTr, a2 = e2._aData;
      n2 && ((t2 = t2.rowIdFn(a2)) && (n2.id = t2), a2.DT_RowClass && (t2 = a2.DT_RowClass.split(" "), e2.__rowc = e2.__rowc ? z(e2.__rowc.concat(t2)) : t2, P(n2).removeClass(e2.__rowc.join(" ")).addClass(a2.DT_RowClass)), a2.DT_RowAttr && P(n2).attr(a2.DT_RowAttr), a2.DT_RowData) && P(n2).data(a2.DT_RowData);
    }
    function yt(t2) {
      var e2, n2, a2, r2 = t2.nTHead, o2 = t2.nTFoot, i2 = 0 === P("th, td", r2).length, l2 = t2.oClasses, s2 = t2.aoColumns;
      for (i2 && (n2 = P("<tr/>").appendTo(r2)), c2 = 0, f2 = s2.length; c2 < f2; c2++) a2 = s2[c2], e2 = P(a2.nTh).addClass(a2.sClass), i2 && e2.appendTo(n2), t2.oFeatures.bSort && (e2.addClass(a2.sSortingClass), false !== a2.bSortable) && (e2.attr("tabindex", t2.iTabIndex).attr("aria-controls", t2.sTableId), ue(t2, a2.nTh, c2)), a2.sTitle != e2[0].innerHTML && e2.html(a2.sTitle), ve(t2, "header")(t2, e2, a2, l2);
      if (i2 && wt(t2.aoHeader, r2), P(r2).children("tr").children("th, td").addClass(l2.sHeaderTH), P(o2).children("tr").children("th, td").addClass(l2.sFooterTH), null !== o2) for (var u2 = t2.aoFooter[0], c2 = 0, f2 = u2.length; c2 < f2; c2++) (a2 = s2[c2]) ? (a2.nTf = u2[c2].cell, a2.sClass && P(a2.nTf).addClass(a2.sClass)) : W(t2, 0, "Incorrect column count", 18);
    }
    function Dt(t2, e2, n2) {
      var a2, r2, o2, i2, l2, s2, u2, c2, f2, d2 = [], h2 = [], p2 = t2.aoColumns.length;
      if (e2) {
        for (n2 === H && (n2 = false), a2 = 0, r2 = e2.length; a2 < r2; a2++) {
          for (d2[a2] = e2[a2].slice(), d2[a2].nTr = e2[a2].nTr, o2 = p2 - 1; 0 <= o2; o2--) t2.aoColumns[o2].bVisible || n2 || d2[a2].splice(o2, 1);
          h2.push([]);
        }
        for (a2 = 0, r2 = d2.length; a2 < r2; a2++) {
          if (u2 = d2[a2].nTr) for (; s2 = u2.firstChild; ) u2.removeChild(s2);
          for (o2 = 0, i2 = d2[a2].length; o2 < i2; o2++) if (f2 = c2 = 1, h2[a2][o2] === H) {
            for (u2.appendChild(d2[a2][o2].cell), h2[a2][o2] = 1; d2[a2 + c2] !== H && d2[a2][o2].cell == d2[a2 + c2][o2].cell; ) h2[a2 + c2][o2] = 1, c2++;
            for (; d2[a2][o2 + f2] !== H && d2[a2][o2].cell == d2[a2][o2 + f2].cell; ) {
              for (l2 = 0; l2 < c2; l2++) h2[a2 + l2][o2 + f2] = 1;
              f2++;
            }
            P(d2[a2][o2].cell).attr("rowspan", c2).attr("colspan", f2);
          }
        }
      }
    }
    function y(t2, e2) {
      n2 = "ssp" == E(s2 = t2), (l2 = s2.iInitDisplayStart) !== H && -1 !== l2 && (s2._iDisplayStart = !n2 && l2 >= s2.fnRecordsDisplay() ? 0 : l2, s2.iInitDisplayStart = -1);
      var n2 = R(t2, "aoPreDrawCallback", "preDraw", [t2]);
      if (-1 !== P.inArray(false, n2)) D(t2, false);
      else {
        var a2 = [], r2 = 0, o2 = t2.asStripeClasses, i2 = o2.length, l2 = t2.oLanguage, s2 = "ssp" == E(t2), u2 = t2.aiDisplay, n2 = t2._iDisplayStart, c2 = t2.fnDisplayEnd();
        if (t2.bDrawing = true, t2.bDeferLoading) t2.bDeferLoading = false, t2.iDraw++, D(t2, false);
        else if (s2) {
          if (!t2.bDestroying && !e2) return void xt(t2);
        } else t2.iDraw++;
        if (0 !== u2.length) for (var f2 = s2 ? t2.aoData.length : c2, d2 = s2 ? 0 : n2; d2 < f2; d2++) {
          var h2, p2 = u2[d2], g2 = t2.aoData[p2], b2 = (null === g2.nTr && St(t2, p2), g2.nTr);
          0 !== i2 && (h2 = o2[r2 % i2], g2._sRowStripe != h2) && (P(b2).removeClass(g2._sRowStripe).addClass(h2), g2._sRowStripe = h2), R(t2, "aoRowCallback", null, [b2, g2._aData, r2, d2, p2]), a2.push(b2), r2++;
        }
        else {
          e2 = l2.sZeroRecords;
          1 == t2.iDraw && "ajax" == E(t2) ? e2 = l2.sLoadingRecords : l2.sEmptyTable && 0 === t2.fnRecordsTotal() && (e2 = l2.sEmptyTable), a2[0] = P("<tr/>", { class: i2 ? o2[0] : "" }).append(P("<td />", { valign: "top", colSpan: T(t2), class: t2.oClasses.sRowEmpty }).html(e2))[0];
        }
        R(t2, "aoHeaderCallback", "header", [P(t2.nTHead).children("tr")[0], ht(t2), n2, c2, u2]), R(t2, "aoFooterCallback", "footer", [P(t2.nTFoot).children("tr")[0], ht(t2), n2, c2, u2]);
        s2 = P(t2.nTBody);
        s2.children().detach(), s2.append(P(a2)), R(t2, "aoDrawCallback", "draw", [t2]), t2.bSorted = false, t2.bFiltered = false, t2.bDrawing = false;
      }
    }
    function u(t2, e2) {
      var n2 = t2.oFeatures, a2 = n2.bSort, n2 = n2.bFilter;
      a2 && ie(t2), n2 ? Rt(t2, t2.oPreviousSearch) : t2.aiDisplay = t2.aiDisplayMaster.slice(), true !== e2 && (t2._iDisplayStart = 0), t2._drawHold = e2, y(t2), t2._drawHold = false;
    }
    function _t(t2) {
      for (var e2, n2, a2, r2, o2, i2, l2, s2 = t2.oClasses, u2 = P(t2.nTable), u2 = P("<div/>").insertBefore(u2), c2 = t2.oFeatures, f2 = P("<div/>", { id: t2.sTableId + "_wrapper", class: s2.sWrapper + (t2.nTFoot ? "" : " " + s2.sNoFooter) }), d2 = (t2.nHolding = u2[0], t2.nTableWrapper = f2[0], t2.nTableReinsertBefore = t2.nTable.nextSibling, t2.sDom.split("")), h2 = 0; h2 < d2.length; h2++) {
        if (e2 = null, "<" == (n2 = d2[h2])) {
          if (a2 = P("<div/>")[0], "'" == (r2 = d2[h2 + 1]) || '"' == r2) {
            for (o2 = "", i2 = 2; d2[h2 + i2] != r2; ) o2 += d2[h2 + i2], i2++;
            "H" == o2 ? o2 = s2.sJUIHeader : "F" == o2 && (o2 = s2.sJUIFooter), -1 != o2.indexOf(".") ? (l2 = o2.split("."), a2.id = l2[0].substr(1, l2[0].length - 1), a2.className = l2[1]) : "#" == o2.charAt(0) ? a2.id = o2.substr(1, o2.length - 1) : a2.className = o2, h2 += i2;
          }
          f2.append(a2), f2 = P(a2);
        } else if (">" == n2) f2 = f2.parent();
        else if ("l" == n2 && c2.bPaginate && c2.bLengthChange) e2 = Gt(t2);
        else if ("f" == n2 && c2.bFilter) e2 = Lt(t2);
        else if ("r" == n2 && c2.bProcessing) e2 = Zt(t2);
        else if ("t" == n2) e2 = Kt(t2);
        else if ("i" == n2 && c2.bInfo) e2 = Ut(t2);
        else if ("p" == n2 && c2.bPaginate) e2 = zt(t2);
        else if (0 !== w.ext.feature.length) {
          for (var p2 = w.ext.feature, g2 = 0, b2 = p2.length; g2 < b2; g2++) if (n2 == p2[g2].cFeature) {
            e2 = p2[g2].fnInit(t2);
            break;
          }
        }
        e2 && ((l2 = t2.aanFeatures)[n2] || (l2[n2] = []), l2[n2].push(e2), f2.append(e2));
      }
      u2.replaceWith(f2), t2.nHolding = null;
    }
    function wt(t2, e2) {
      var n2, a2, r2, o2, i2, l2, s2, u2, c2, f2, d2 = P(e2).children("tr");
      for (t2.splice(0, t2.length), r2 = 0, l2 = d2.length; r2 < l2; r2++) t2.push([]);
      for (r2 = 0, l2 = d2.length; r2 < l2; r2++) for (a2 = (n2 = d2[r2]).firstChild; a2; ) {
        if ("TD" == a2.nodeName.toUpperCase() || "TH" == a2.nodeName.toUpperCase()) for (u2 = (u2 = +a2.getAttribute("colspan")) && 0 != u2 && 1 != u2 ? u2 : 1, c2 = (c2 = +a2.getAttribute("rowspan")) && 0 != c2 && 1 != c2 ? c2 : 1, s2 = function(t3, e3, n3) {
          for (var a3 = t3[e3]; a3[n3]; ) n3++;
          return n3;
        }(t2, r2, 0), f2 = 1 == u2, i2 = 0; i2 < u2; i2++) for (o2 = 0; o2 < c2; o2++) t2[r2 + o2][s2 + i2] = { cell: a2, unique: f2 }, t2[r2 + o2].nTr = n2;
        a2 = a2.nextSibling;
      }
    }
    function Ct(t2, e2, n2) {
      var a2 = [];
      n2 || (n2 = t2.aoHeader, e2 && wt(n2 = [], e2));
      for (var r2 = 0, o2 = n2.length; r2 < o2; r2++) for (var i2 = 0, l2 = n2[r2].length; i2 < l2; i2++) !n2[r2][i2].unique || a2[i2] && t2.bSortCellsTop || (a2[i2] = n2[r2][i2].cell);
      return a2;
    }
    function Tt(r2, t2, n2) {
      function e2(t3) {
        var e3 = r2.jqXHR ? r2.jqXHR.status : null;
        (null === t3 || "number" == typeof e3 && 204 == e3) && Ft(r2, t3 = {}, []), (e3 = t3.error || t3.sError) && W(r2, 0, e3), r2.json = t3, R(r2, null, "xhr", [r2, t3, r2.jqXHR]), n2(t3);
      }
      R(r2, "aoServerParams", "serverParams", [t2]), t2 && Array.isArray(t2) && (a2 = {}, o2 = /(.*?)\[\]$/, P.each(t2, function(t3, e3) {
        var n3 = e3.name.match(o2);
        n3 ? (n3 = n3[0], a2[n3] || (a2[n3] = []), a2[n3].push(e3.value)) : a2[e3.name] = e3.value;
      }), t2 = a2);
      var a2, o2, i2, l2 = r2.ajax, s2 = r2.oInstance, u2 = (P.isPlainObject(l2) && l2.data && (u2 = "function" == typeof (i2 = l2.data) ? i2(t2, r2) : i2, t2 = "function" == typeof i2 && u2 ? u2 : P.extend(true, t2, u2), delete l2.data), { data: t2, success: e2, dataType: "json", cache: false, type: r2.sServerMethod, error: function(t3, e3, n3) {
        var a3 = R(r2, null, "xhr", [r2, null, r2.jqXHR]);
        -1 === P.inArray(true, a3) && ("parsererror" == e3 ? W(r2, 0, "Invalid JSON response", 1) : 4 === t3.readyState && W(r2, 0, "Ajax error", 7)), D(r2, false);
      } });
      r2.oAjaxData = t2, R(r2, null, "preXhr", [r2, t2]), r2.fnServerData ? r2.fnServerData.call(s2, r2.sAjaxSource, P.map(t2, function(t3, e3) {
        return { name: e3, value: t3 };
      }), e2, r2) : r2.sAjaxSource || "string" == typeof l2 ? r2.jqXHR = P.ajax(P.extend(u2, { url: l2 || r2.sAjaxSource })) : "function" == typeof l2 ? r2.jqXHR = l2.call(s2, t2, e2, r2) : (r2.jqXHR = P.ajax(P.extend(u2, l2)), l2.data = i2);
    }
    function xt(e2) {
      e2.iDraw++, D(e2, true);
      var n2 = e2._drawHold;
      Tt(e2, At(e2), function(t2) {
        e2._drawHold = n2, It(e2, t2), e2._drawHold = false;
      });
    }
    function At(t2) {
      for (var e2, n2, a2, r2 = t2.aoColumns, o2 = r2.length, i2 = t2.oFeatures, l2 = t2.oPreviousSearch, s2 = t2.aoPreSearchCols, u2 = [], c2 = I(t2), f2 = t2._iDisplayStart, d2 = false !== i2.bPaginate ? t2._iDisplayLength : -1, h2 = function(t3, e3) {
        u2.push({ name: t3, value: e3 });
      }, p2 = (h2("sEcho", t2.iDraw), h2("iColumns", o2), h2("sColumns", N(r2, "sName").join(",")), h2("iDisplayStart", f2), h2("iDisplayLength", d2), { draw: t2.iDraw, columns: [], order: [], start: f2, length: d2, search: { value: l2.sSearch, regex: l2.bRegex } }), g2 = 0; g2 < o2; g2++) n2 = r2[g2], a2 = s2[g2], e2 = "function" == typeof n2.mData ? "function" : n2.mData, p2.columns.push({ data: e2, name: n2.sName, searchable: n2.bSearchable, orderable: n2.bSortable, search: { value: a2.sSearch, regex: a2.bRegex } }), h2("mDataProp_" + g2, e2), i2.bFilter && (h2("sSearch_" + g2, a2.sSearch), h2("bRegex_" + g2, a2.bRegex), h2("bSearchable_" + g2, n2.bSearchable)), i2.bSort && h2("bSortable_" + g2, n2.bSortable);
      i2.bFilter && (h2("sSearch", l2.sSearch), h2("bRegex", l2.bRegex)), i2.bSort && (P.each(c2, function(t3, e3) {
        p2.order.push({ column: e3.col, dir: e3.dir }), h2("iSortCol_" + t3, e3.col), h2("sSortDir_" + t3, e3.dir);
      }), h2("iSortingCols", c2.length));
      f2 = w.ext.legacy.ajax;
      return null === f2 ? t2.sAjaxSource ? u2 : p2 : f2 ? u2 : p2;
    }
    function It(t2, n2) {
      function e2(t3, e3) {
        return n2[t3] !== H ? n2[t3] : n2[e3];
      }
      var a2 = Ft(t2, n2), r2 = e2("sEcho", "draw"), o2 = e2("iTotalRecords", "recordsTotal"), i2 = e2("iTotalDisplayRecords", "recordsFiltered");
      if (r2 !== H) {
        if (+r2 < t2.iDraw) return;
        t2.iDraw = +r2;
      }
      a2 = a2 || [], pt(t2), t2._iRecordsTotal = parseInt(o2, 10), t2._iRecordsDisplay = parseInt(i2, 10);
      for (var l2 = 0, s2 = a2.length; l2 < s2; l2++) x(t2, a2[l2]);
      t2.aiDisplay = t2.aiDisplayMaster.slice(), y(t2, true), t2._bInitComplete || qt(t2, n2), D(t2, false);
    }
    function Ft(t2, e2, n2) {
      t2 = P.isPlainObject(t2.ajax) && t2.ajax.dataSrc !== H ? t2.ajax.dataSrc : t2.sAjaxDataProp;
      if (!n2) return "data" === t2 ? e2.aaData || e2[t2] : "" !== t2 ? A(t2)(e2) : e2;
      b(t2)(e2, n2);
    }
    function Lt(n2) {
      function e2(t3) {
        i2.f;
        var e3 = this.value || "";
        o2.return && "Enter" !== t3.key || e3 != o2.sSearch && (Rt(n2, { sSearch: e3, bRegex: o2.bRegex, bSmart: o2.bSmart, bCaseInsensitive: o2.bCaseInsensitive, return: o2.return }), n2._iDisplayStart = 0, y(n2));
      }
      var t2 = n2.oClasses, a2 = n2.sTableId, r2 = n2.oLanguage, o2 = n2.oPreviousSearch, i2 = n2.aanFeatures, l2 = '<input type="search" class="' + t2.sFilterInput + '"/>', s2 = (s2 = r2.sSearch).match(/_INPUT_/) ? s2.replace("_INPUT_", l2) : s2 + l2, l2 = P("<div/>", { id: i2.f ? null : a2 + "_filter", class: t2.sFilter }).append(P("<label/>").append(s2)), t2 = null !== n2.searchDelay ? n2.searchDelay : "ssp" === E(n2) ? 400 : 0, u2 = P("input", l2).val(o2.sSearch).attr("placeholder", r2.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", t2 ? ne(e2, t2) : e2).on("mouseup.DT", function(t3) {
        setTimeout(function() {
          e2.call(u2[0], t3);
        }, 10);
      }).on("keypress.DT", function(t3) {
        if (13 == t3.keyCode) return false;
      }).attr("aria-controls", a2);
      return P(n2.nTable).on("search.dt.DT", function(t3, e3) {
        if (n2 === e3) try {
          u2[0] !== v.activeElement && u2.val(o2.sSearch);
        } catch (t4) {
        }
      }), l2[0];
    }
    function Rt(t2, e2, n2) {
      function a2(t3) {
        o2.sSearch = t3.sSearch, o2.bRegex = t3.bRegex, o2.bSmart = t3.bSmart, o2.bCaseInsensitive = t3.bCaseInsensitive, o2.return = t3.return;
      }
      function r2(t3) {
        return t3.bEscapeRegex !== H ? !t3.bEscapeRegex : t3.bRegex;
      }
      var o2 = t2.oPreviousSearch, i2 = t2.aoPreSearchCols;
      if (lt(t2), "ssp" != E(t2)) {
        Ht(t2, e2.sSearch, n2, r2(e2), e2.bSmart, e2.bCaseInsensitive), a2(e2);
        for (var l2 = 0; l2 < i2.length; l2++) jt(t2, i2[l2].sSearch, l2, r2(i2[l2]), i2[l2].bSmart, i2[l2].bCaseInsensitive);
        Pt(t2);
      } else a2(e2);
      t2.bFiltered = true, R(t2, null, "search", [t2]);
    }
    function Pt(t2) {
      for (var e2, n2, a2 = w.ext.search, r2 = t2.aiDisplay, o2 = 0, i2 = a2.length; o2 < i2; o2++) {
        for (var l2 = [], s2 = 0, u2 = r2.length; s2 < u2; s2++) n2 = r2[s2], e2 = t2.aoData[n2], a2[o2](t2, e2._aFilterData, n2, e2._aData, s2) && l2.push(n2);
        r2.length = 0, P.merge(r2, l2);
      }
    }
    function jt(t2, e2, n2, a2, r2, o2) {
      if ("" !== e2) {
        for (var i2, l2 = [], s2 = t2.aiDisplay, u2 = Nt(e2, a2, r2, o2), c2 = 0; c2 < s2.length; c2++) i2 = t2.aoData[s2[c2]]._aFilterData[n2], u2.test(i2) && l2.push(s2[c2]);
        t2.aiDisplay = l2;
      }
    }
    function Ht(t2, e2, n2, a2, r2, o2) {
      var i2, l2, s2, u2 = Nt(e2, a2, r2, o2), r2 = t2.oPreviousSearch.sSearch, o2 = t2.aiDisplayMaster, c2 = [];
      if (0 !== w.ext.search.length && (n2 = true), l2 = Wt(t2), e2.length <= 0) t2.aiDisplay = o2.slice();
      else {
        for ((l2 || n2 || a2 || r2.length > e2.length || 0 !== e2.indexOf(r2) || t2.bSorted) && (t2.aiDisplay = o2.slice()), i2 = t2.aiDisplay, s2 = 0; s2 < i2.length; s2++) u2.test(t2.aoData[i2[s2]]._sFilterRow) && c2.push(i2[s2]);
        t2.aiDisplay = c2;
      }
    }
    function Nt(t2, e2, n2, a2) {
      return t2 = e2 ? t2 : Ot(t2), n2 && (t2 = "^(?=.*?" + P.map(t2.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""], function(t3) {
        var e3;
        return '"' === t3.charAt(0) ? t3 = (e3 = t3.match(/^"(.*)"$/)) ? e3[1] : t3 : "“" === t3.charAt(0) && (t3 = (e3 = t3.match(/^\u201C(.*)\u201D$/)) ? e3[1] : t3), t3.replace('"', "");
      }).join(")(?=.*?") + ").*$"), new RegExp(t2, a2 ? "i" : "");
    }
    var Ot = w.util.escapeRegex, kt = P("<div>")[0], Mt = kt.textContent !== H;
    function Wt(t2) {
      for (var e2, n2, a2, r2, o2, i2 = t2.aoColumns, l2 = false, s2 = 0, u2 = t2.aoData.length; s2 < u2; s2++) if (!(o2 = t2.aoData[s2])._aFilterData) {
        for (a2 = [], e2 = 0, n2 = i2.length; e2 < n2; e2++) i2[e2].bSearchable ? "string" != typeof (r2 = null === (r2 = S(t2, s2, e2, "filter")) ? "" : r2) && r2.toString && (r2 = r2.toString()) : r2 = "", r2.indexOf && -1 !== r2.indexOf("&") && (kt.innerHTML = r2, r2 = Mt ? kt.textContent : kt.innerText), r2.replace && (r2 = r2.replace(/[\r\n\u2028]/g, "")), a2.push(r2);
        o2._aFilterData = a2, o2._sFilterRow = a2.join("  "), l2 = true;
      }
      return l2;
    }
    function Et(t2) {
      return { search: t2.sSearch, smart: t2.bSmart, regex: t2.bRegex, caseInsensitive: t2.bCaseInsensitive };
    }
    function Bt(t2) {
      return { sSearch: t2.search, bSmart: t2.smart, bRegex: t2.regex, bCaseInsensitive: t2.caseInsensitive };
    }
    function Ut(t2) {
      var e2 = t2.sTableId, n2 = t2.aanFeatures.i, a2 = P("<div/>", { class: t2.oClasses.sInfo, id: n2 ? null : e2 + "_info" });
      return n2 || (t2.aoDrawCallback.push({ fn: Vt, sName: "information" }), a2.attr("role", "status").attr("aria-live", "polite"), P(t2.nTable).attr("aria-describedby", e2 + "_info")), a2[0];
    }
    function Vt(t2) {
      var e2, n2, a2, r2, o2, i2, l2 = t2.aanFeatures.i;
      0 !== l2.length && (i2 = t2.oLanguage, e2 = t2._iDisplayStart + 1, n2 = t2.fnDisplayEnd(), a2 = t2.fnRecordsTotal(), o2 = (r2 = t2.fnRecordsDisplay()) ? i2.sInfo : i2.sInfoEmpty, r2 !== a2 && (o2 += " " + i2.sInfoFiltered), o2 = Xt(t2, o2 += i2.sInfoPostFix), null !== (i2 = i2.fnInfoCallback) && (o2 = i2.call(t2.oInstance, t2, e2, n2, a2, r2, o2)), P(l2).html(o2));
    }
    function Xt(t2, e2) {
      var n2 = t2.fnFormatNumber, a2 = t2._iDisplayStart + 1, r2 = t2._iDisplayLength, o2 = t2.fnRecordsDisplay(), i2 = -1 === r2;
      return e2.replace(/_START_/g, n2.call(t2, a2)).replace(/_END_/g, n2.call(t2, t2.fnDisplayEnd())).replace(/_MAX_/g, n2.call(t2, t2.fnRecordsTotal())).replace(/_TOTAL_/g, n2.call(t2, o2)).replace(/_PAGE_/g, n2.call(t2, i2 ? 1 : Math.ceil(a2 / r2))).replace(/_PAGES_/g, n2.call(t2, i2 ? 1 : Math.ceil(o2 / r2)));
    }
    function Jt(n2) {
      var a2, t2, e2, r2 = n2.iInitDisplayStart, o2 = n2.aoColumns, i2 = n2.oFeatures, l2 = n2.bDeferLoading;
      if (n2.bInitialised) {
        for (_t(n2), yt(n2), Dt(n2, n2.aoHeader), Dt(n2, n2.aoFooter), D(n2, true), i2.bAutoWidth && ee(n2), a2 = 0, t2 = o2.length; a2 < t2; a2++) (e2 = o2[a2]).sWidth && (e2.nTh.style.width = M(e2.sWidth));
        R(n2, null, "preInit", [n2]), u(n2);
        i2 = E(n2);
        "ssp" == i2 && !l2 || ("ajax" == i2 ? Tt(n2, [], function(t3) {
          var e3 = Ft(n2, t3);
          for (a2 = 0; a2 < e3.length; a2++) x(n2, e3[a2]);
          n2.iInitDisplayStart = r2, u(n2), D(n2, false), qt(n2, t3);
        }) : (D(n2, false), qt(n2)));
      } else setTimeout(function() {
        Jt(n2);
      }, 200);
    }
    function qt(t2, e2) {
      t2._bInitComplete = true, (e2 || t2.oInit.aaData) && O(t2), R(t2, null, "plugin-init", [t2, e2]), R(t2, "aoInitComplete", "init", [t2, e2]);
    }
    function $t(t2, e2) {
      e2 = parseInt(e2, 10);
      t2._iDisplayLength = e2, Se(t2), R(t2, null, "length", [t2, e2]);
    }
    function Gt(a2) {
      for (var t2 = a2.oClasses, e2 = a2.sTableId, n2 = a2.aLengthMenu, r2 = Array.isArray(n2[0]), o2 = r2 ? n2[0] : n2, i2 = r2 ? n2[1] : n2, l2 = P("<select/>", { name: e2 + "_length", "aria-controls": e2, class: t2.sLengthSelect }), s2 = 0, u2 = o2.length; s2 < u2; s2++) l2[0][s2] = new Option("number" == typeof i2[s2] ? a2.fnFormatNumber(i2[s2]) : i2[s2], o2[s2]);
      var c2 = P("<div><label/></div>").addClass(t2.sLength);
      return a2.aanFeatures.l || (c2[0].id = e2 + "_length"), c2.children().append(a2.oLanguage.sLengthMenu.replace("_MENU_", l2[0].outerHTML)), P("select", c2).val(a2._iDisplayLength).on("change.DT", function(t3) {
        $t(a2, P(this).val()), y(a2);
      }), P(a2.nTable).on("length.dt.DT", function(t3, e3, n3) {
        a2 === e3 && P("select", c2).val(n3);
      }), c2[0];
    }
    function zt(t2) {
      function c2(t3) {
        y(t3);
      }
      var e2 = t2.sPaginationType, f2 = w.ext.pager[e2], d2 = "function" == typeof f2, e2 = P("<div/>").addClass(t2.oClasses.sPaging + e2)[0], h2 = t2.aanFeatures;
      return d2 || f2.fnInit(t2, e2, c2), h2.p || (e2.id = t2.sTableId + "_paginate", t2.aoDrawCallback.push({ fn: function(t3) {
        if (d2) for (var e3 = t3._iDisplayStart, n2 = t3._iDisplayLength, a2 = t3.fnRecordsDisplay(), r2 = -1 === n2, o2 = r2 ? 0 : Math.ceil(e3 / n2), i2 = r2 ? 1 : Math.ceil(a2 / n2), l2 = f2(o2, i2), s2 = 0, u2 = h2.p.length; s2 < u2; s2++) ve(t3, "pageButton")(t3, h2.p[s2], s2, l2, o2, i2);
        else f2.fnUpdate(t3, c2);
      }, sName: "pagination" })), e2;
    }
    function Yt(t2, e2, n2) {
      var a2 = t2._iDisplayStart, r2 = t2._iDisplayLength, o2 = t2.fnRecordsDisplay(), o2 = (0 === o2 || -1 === r2 ? a2 = 0 : "number" == typeof e2 ? o2 < (a2 = e2 * r2) && (a2 = 0) : "first" == e2 ? a2 = 0 : "previous" == e2 ? (a2 = 0 <= r2 ? a2 - r2 : 0) < 0 && (a2 = 0) : "next" == e2 ? a2 + r2 < o2 && (a2 += r2) : "last" == e2 ? a2 = Math.floor((o2 - 1) / r2) * r2 : W(t2, 0, "Unknown paging action: " + e2, 5), t2._iDisplayStart !== a2);
      return t2._iDisplayStart = a2, o2 ? (R(t2, null, "page", [t2]), n2 && y(t2)) : R(t2, null, "page-nc", [t2]), o2;
    }
    function Zt(t2) {
      return P("<div/>", { id: t2.aanFeatures.r ? null : t2.sTableId + "_processing", class: t2.oClasses.sProcessing, role: "status" }).html(t2.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t2.nTable)[0];
    }
    function D(t2, e2) {
      t2.oFeatures.bProcessing && P(t2.aanFeatures.r).css("display", e2 ? "block" : "none"), R(t2, null, "processing", [t2, e2]);
    }
    function Kt(t2) {
      var e2, n2, a2, r2, o2, i2, l2, s2, u2, c2, f2, d2, h2 = P(t2.nTable), p2 = t2.oScroll;
      return "" === p2.sX && "" === p2.sY ? t2.nTable : (e2 = p2.sX, n2 = p2.sY, a2 = t2.oClasses, o2 = (r2 = h2.children("caption")).length ? r2[0]._captionSide : null, s2 = P(h2[0].cloneNode(false)), i2 = P(h2[0].cloneNode(false)), u2 = function(t3) {
        return t3 ? M(t3) : null;
      }, (l2 = h2.children("tfoot")).length || (l2 = null), s2 = P(f2 = "<div/>", { class: a2.sScrollWrapper }).append(P(f2, { class: a2.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: e2 ? u2(e2) : "100%" }).append(P(f2, { class: a2.sScrollHeadInner }).css({ "box-sizing": "content-box", width: p2.sXInner || "100%" }).append(s2.removeAttr("id").css("margin-left", 0).append("top" === o2 ? r2 : null).append(h2.children("thead"))))).append(P(f2, { class: a2.sScrollBody }).css({ position: "relative", overflow: "auto", width: u2(e2) }).append(h2)), l2 && s2.append(P(f2, { class: a2.sScrollFoot }).css({ overflow: "hidden", border: 0, width: e2 ? u2(e2) : "100%" }).append(P(f2, { class: a2.sScrollFootInner }).append(i2.removeAttr("id").css("margin-left", 0).append("bottom" === o2 ? r2 : null).append(h2.children("tfoot"))))), u2 = s2.children(), c2 = u2[0], f2 = u2[1], d2 = l2 ? u2[2] : null, e2 && P(f2).on("scroll.DT", function(t3) {
        var e3 = this.scrollLeft;
        c2.scrollLeft = e3, l2 && (d2.scrollLeft = e3);
      }), P(f2).css("max-height", n2), p2.bCollapse || P(f2).css("height", n2), t2.nScrollHead = c2, t2.nScrollBody = f2, t2.nScrollFoot = d2, t2.aoDrawCallback.push({ fn: Qt, sName: "scrolling" }), s2[0]);
    }
    function Qt(n2) {
      function t2(t3) {
        (t3 = t3.style).paddingTop = "0", t3.paddingBottom = "0", t3.borderTopWidth = "0", t3.borderBottomWidth = "0", t3.height = 0;
      }
      var e2, a2, r2, o2, i2, l2 = n2.oScroll, s2 = l2.sX, u2 = l2.sXInner, c2 = l2.sY, l2 = l2.iBarWidth, f2 = P(n2.nScrollHead), d2 = f2[0].style, h2 = f2.children("div"), p2 = h2[0].style, h2 = h2.children("table"), g2 = n2.nScrollBody, b2 = P(g2), m2 = g2.style, S2 = P(n2.nScrollFoot).children("div"), v2 = S2.children("table"), y2 = P(n2.nTHead), D2 = P(n2.nTable), _2 = D2[0], w2 = _2.style, C2 = n2.nTFoot ? P(n2.nTFoot) : null, T2 = n2.oBrowser, x2 = T2.bScrollOversize, A2 = (N(n2.aoColumns, "nTh"), []), I2 = [], F2 = [], L2 = [], R2 = g2.scrollHeight > g2.clientHeight;
      n2.scrollBarVis !== R2 && n2.scrollBarVis !== H ? (n2.scrollBarVis = R2, O(n2)) : (n2.scrollBarVis = R2, D2.children("thead, tfoot").remove(), C2 && (R2 = C2.clone().prependTo(D2), i2 = C2.find("tr"), a2 = R2.find("tr"), R2.find("[id]").removeAttr("id")), R2 = y2.clone().prependTo(D2), y2 = y2.find("tr"), e2 = R2.find("tr"), R2.find("th, td").removeAttr("tabindex"), R2.find("[id]").removeAttr("id"), s2 || (m2.width = "100%", f2[0].style.width = "100%"), P.each(Ct(n2, R2), function(t3, e3) {
        r2 = rt(n2, t3), e3.style.width = n2.aoColumns[r2].sWidth;
      }), C2 && k(function(t3) {
        t3.style.width = "";
      }, a2), f2 = D2.outerWidth(), "" === s2 ? (w2.width = "100%", x2 && (D2.find("tbody").height() > g2.offsetHeight || "scroll" == b2.css("overflow-y")) && (w2.width = M(D2.outerWidth() - l2)), f2 = D2.outerWidth()) : "" !== u2 && (w2.width = M(u2), f2 = D2.outerWidth()), k(t2, e2), k(function(t3) {
        var e3 = j.getComputedStyle ? j.getComputedStyle(t3).width : M(P(t3).width());
        F2.push(t3.innerHTML), A2.push(e3);
      }, e2), k(function(t3, e3) {
        t3.style.width = A2[e3];
      }, y2), P(e2).css("height", 0), C2 && (k(t2, a2), k(function(t3) {
        L2.push(t3.innerHTML), I2.push(M(P(t3).css("width")));
      }, a2), k(function(t3, e3) {
        t3.style.width = I2[e3];
      }, i2), P(a2).height(0)), k(function(t3, e3) {
        t3.innerHTML = '<div class="dataTables_sizing">' + F2[e3] + "</div>", t3.childNodes[0].style.height = "0", t3.childNodes[0].style.overflow = "hidden", t3.style.width = A2[e3];
      }, e2), C2 && k(function(t3, e3) {
        t3.innerHTML = '<div class="dataTables_sizing">' + L2[e3] + "</div>", t3.childNodes[0].style.height = "0", t3.childNodes[0].style.overflow = "hidden", t3.style.width = I2[e3];
      }, a2), Math.round(D2.outerWidth()) < Math.round(f2) ? (o2 = g2.scrollHeight > g2.offsetHeight || "scroll" == b2.css("overflow-y") ? f2 + l2 : f2, x2 && (g2.scrollHeight > g2.offsetHeight || "scroll" == b2.css("overflow-y")) && (w2.width = M(o2 - l2)), "" !== s2 && "" === u2 || W(n2, 1, "Possible column misalignment", 6)) : o2 = "100%", m2.width = M(o2), d2.width = M(o2), C2 && (n2.nScrollFoot.style.width = M(o2)), c2 || x2 && (m2.height = M(_2.offsetHeight + l2)), R2 = D2.outerWidth(), h2[0].style.width = M(R2), p2.width = M(R2), y2 = D2.height() > g2.clientHeight || "scroll" == b2.css("overflow-y"), p2[i2 = "padding" + (T2.bScrollbarLeft ? "Left" : "Right")] = y2 ? l2 + "px" : "0px", C2 && (v2[0].style.width = M(R2), S2[0].style.width = M(R2), S2[0].style[i2] = y2 ? l2 + "px" : "0px"), D2.children("colgroup").insertBefore(D2.children("thead")), b2.trigger("scroll"), !n2.bSorted && !n2.bFiltered || n2._drawHold || (g2.scrollTop = 0));
    }
    function k(t2, e2, n2) {
      for (var a2, r2, o2 = 0, i2 = 0, l2 = e2.length; i2 < l2; ) {
        for (a2 = e2[i2].firstChild, r2 = n2 ? n2[i2].firstChild : null; a2; ) 1 === a2.nodeType && (n2 ? t2(a2, r2, o2) : t2(a2, o2), o2++), a2 = a2.nextSibling, r2 = n2 ? r2.nextSibling : null;
        i2++;
      }
    }
    var te = /<.*?>/g;
    function ee(t2) {
      var e2, n2, a2 = t2.nTable, r2 = t2.aoColumns, o2 = t2.oScroll, i2 = o2.sY, l2 = o2.sX, o2 = o2.sXInner, s2 = r2.length, u2 = it(t2, "bVisible"), c2 = P("th", t2.nTHead), f2 = a2.getAttribute("width"), d2 = a2.parentNode, h2 = false, p2 = t2.oBrowser, g2 = p2.bScrollOversize, b2 = a2.style.width;
      for (b2 && -1 !== b2.indexOf("%") && (f2 = b2), D2 = 0; D2 < u2.length; D2++) null !== (e2 = r2[u2[D2]]).sWidth && (e2.sWidth = ae(e2.sWidthOrig, d2), h2 = true);
      if (g2 || !h2 && !l2 && !i2 && s2 == T(t2) && s2 == c2.length) for (D2 = 0; D2 < s2; D2++) {
        var m2 = rt(t2, D2);
        null !== m2 && (r2[m2].sWidth = M(c2.eq(D2).width()));
      }
      else {
        var b2 = P(a2).clone().css("visibility", "hidden").removeAttr("id"), S2 = (b2.find("tbody tr").remove(), P("<tr/>").appendTo(b2.find("tbody")));
        for (b2.find("thead, tfoot").remove(), b2.append(P(t2.nTHead).clone()).append(P(t2.nTFoot).clone()), b2.find("tfoot th, tfoot td").css("width", ""), c2 = Ct(t2, b2.find("thead")[0]), D2 = 0; D2 < u2.length; D2++) e2 = r2[u2[D2]], c2[D2].style.width = null !== e2.sWidthOrig && "" !== e2.sWidthOrig ? M(e2.sWidthOrig) : "", e2.sWidthOrig && l2 && P(c2[D2]).append(P("<div/>").css({ width: e2.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
        if (t2.aoData.length) for (D2 = 0; D2 < u2.length; D2++) e2 = r2[n2 = u2[D2]], P(re(t2, n2)).clone(false).append(e2.sContentPadding).appendTo(S2);
        P("[name]", b2).removeAttr("name");
        for (var v2 = P("<div/>").css(l2 || i2 ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(b2).appendTo(d2), y2 = (l2 && o2 ? b2.width(o2) : l2 ? (b2.css("width", "auto"), b2.removeAttr("width"), b2.width() < d2.clientWidth && f2 && b2.width(d2.clientWidth)) : i2 ? b2.width(d2.clientWidth) : f2 && b2.width(f2), 0), D2 = 0; D2 < u2.length; D2++) {
          var _2 = P(c2[D2]), w2 = _2.outerWidth() - _2.width(), _2 = p2.bBounding ? Math.ceil(c2[D2].getBoundingClientRect().width) : _2.outerWidth();
          y2 += _2, r2[u2[D2]].sWidth = M(_2 - w2);
        }
        a2.style.width = M(y2), v2.remove();
      }
      f2 && (a2.style.width = M(f2)), !f2 && !l2 || t2._reszEvt || (o2 = function() {
        P(j).on("resize.DT-" + t2.sInstance, ne(function() {
          O(t2);
        }));
      }, g2 ? setTimeout(o2, 1e3) : o2(), t2._reszEvt = true);
    }
    var ne = w.util.throttle;
    function ae(t2, e2) {
      return t2 ? (e2 = (t2 = P("<div/>").css("width", M(t2)).appendTo(e2 || v.body))[0].offsetWidth, t2.remove(), e2) : 0;
    }
    function re(t2, e2) {
      var n2, a2 = oe(t2, e2);
      return a2 < 0 ? null : (n2 = t2.aoData[a2]).nTr ? n2.anCells[e2] : P("<td/>").html(S(t2, a2, e2, "display"))[0];
    }
    function oe(t2, e2) {
      for (var n2, a2 = -1, r2 = -1, o2 = 0, i2 = t2.aoData.length; o2 < i2; o2++) (n2 = (n2 = (n2 = S(t2, o2, e2, "display") + "").replace(te, "")).replace(/&nbsp;/g, " ")).length > a2 && (a2 = n2.length, r2 = o2);
      return r2;
    }
    function M(t2) {
      return null === t2 ? "0px" : "number" == typeof t2 ? t2 < 0 ? "0px" : t2 + "px" : t2.match(/\d$/) ? t2 + "px" : t2;
    }
    function I(t2) {
      function e2(t3) {
        t3.length && !Array.isArray(t3[0]) ? h2.push(t3) : P.merge(h2, t3);
      }
      var n2, a2, r2, o2, i2, l2, s2, u2 = [], c2 = t2.aoColumns, f2 = t2.aaSortingFixed, d2 = P.isPlainObject(f2), h2 = [];
      for (Array.isArray(f2) && e2(f2), d2 && f2.pre && e2(f2.pre), e2(t2.aaSorting), d2 && f2.post && e2(f2.post), n2 = 0; n2 < h2.length; n2++) for (r2 = (o2 = c2[s2 = h2[n2][a2 = 0]].aDataSort).length; a2 < r2; a2++) l2 = c2[i2 = o2[a2]].sType || "string", h2[n2]._idx === H && (h2[n2]._idx = P.inArray(h2[n2][1], c2[i2].asSorting)), u2.push({ src: s2, col: i2, dir: h2[n2][1], index: h2[n2]._idx, type: l2, formatter: w.ext.type.order[l2 + "-pre"] });
      return u2;
    }
    function ie(t2) {
      var e2, n2, a2, r2, c2, f2 = [], u2 = w.ext.type.order, d2 = t2.aoData, o2 = (t2.aoColumns, 0), i2 = t2.aiDisplayMaster;
      for (lt(t2), e2 = 0, n2 = (c2 = I(t2)).length; e2 < n2; e2++) (r2 = c2[e2]).formatter && o2++, fe(t2, r2.col);
      if ("ssp" != E(t2) && 0 !== c2.length) {
        for (e2 = 0, a2 = i2.length; e2 < a2; e2++) f2[i2[e2]] = e2;
        o2 === c2.length ? i2.sort(function(t3, e3) {
          for (var n3, a3, r3, o3, i3 = c2.length, l2 = d2[t3]._aSortData, s2 = d2[e3]._aSortData, u3 = 0; u3 < i3; u3++) if (0 != (r3 = (n3 = l2[(o3 = c2[u3]).col]) < (a3 = s2[o3.col]) ? -1 : a3 < n3 ? 1 : 0)) return "asc" === o3.dir ? r3 : -r3;
          return (n3 = f2[t3]) < (a3 = f2[e3]) ? -1 : a3 < n3 ? 1 : 0;
        }) : i2.sort(function(t3, e3) {
          for (var n3, a3, r3, o3 = c2.length, i3 = d2[t3]._aSortData, l2 = d2[e3]._aSortData, s2 = 0; s2 < o3; s2++) if (n3 = i3[(r3 = c2[s2]).col], a3 = l2[r3.col], 0 !== (r3 = (u2[r3.type + "-" + r3.dir] || u2["string-" + r3.dir])(n3, a3))) return r3;
          return (n3 = f2[t3]) < (a3 = f2[e3]) ? -1 : a3 < n3 ? 1 : 0;
        });
      }
      t2.bSorted = true;
    }
    function le(t2) {
      for (var e2 = t2.aoColumns, n2 = I(t2), a2 = t2.oLanguage.oAria, r2 = 0, o2 = e2.length; r2 < o2; r2++) {
        var i2 = e2[r2], l2 = i2.asSorting, s2 = i2.ariaTitle || i2.sTitle.replace(/<.*?>/g, ""), u2 = i2.nTh;
        u2.removeAttribute("aria-sort"), i2 = i2.bSortable ? s2 + ("asc" === (0 < n2.length && n2[0].col == r2 && (u2.setAttribute("aria-sort", "asc" == n2[0].dir ? "ascending" : "descending"), l2[n2[0].index + 1]) || l2[0]) ? a2.sSortAscending : a2.sSortDescending) : s2, u2.setAttribute("aria-label", i2);
      }
    }
    function se(t2, e2, n2, a2) {
      function r2(t3, e3) {
        var n3 = t3._idx;
        return (n3 = n3 === H ? P.inArray(t3[1], s2) : n3) + 1 < s2.length ? n3 + 1 : e3 ? null : 0;
      }
      var o2, i2 = t2.aoColumns[e2], l2 = t2.aaSorting, s2 = i2.asSorting;
      "number" == typeof l2[0] && (l2 = t2.aaSorting = [l2]), n2 && t2.oFeatures.bSortMulti ? -1 !== (i2 = P.inArray(e2, N(l2, "0"))) ? null === (o2 = null === (o2 = r2(l2[i2], true)) && 1 === l2.length ? 0 : o2) ? l2.splice(i2, 1) : (l2[i2][1] = s2[o2], l2[i2]._idx = o2) : (l2.push([e2, s2[0], 0]), l2[l2.length - 1]._idx = 0) : l2.length && l2[0][0] == e2 ? (o2 = r2(l2[0]), l2.length = 1, l2[0][1] = s2[o2], l2[0]._idx = o2) : (l2.length = 0, l2.push([e2, s2[0]]), l2[0]._idx = 0), u(t2), "function" == typeof a2 && a2(t2);
    }
    function ue(e2, t2, n2, a2) {
      var r2 = e2.aoColumns[n2];
      me(t2, {}, function(t3) {
        false !== r2.bSortable && (e2.oFeatures.bProcessing ? (D(e2, true), setTimeout(function() {
          se(e2, n2, t3.shiftKey, a2), "ssp" !== E(e2) && D(e2, false);
        }, 0)) : se(e2, n2, t3.shiftKey, a2));
      });
    }
    function ce(t2) {
      var e2, n2, a2, r2 = t2.aLastSort, o2 = t2.oClasses.sSortColumn, i2 = I(t2), l2 = t2.oFeatures;
      if (l2.bSort && l2.bSortClasses) {
        for (e2 = 0, n2 = r2.length; e2 < n2; e2++) a2 = r2[e2].src, P(N(t2.aoData, "anCells", a2)).removeClass(o2 + (e2 < 2 ? e2 + 1 : 3));
        for (e2 = 0, n2 = i2.length; e2 < n2; e2++) a2 = i2[e2].src, P(N(t2.aoData, "anCells", a2)).addClass(o2 + (e2 < 2 ? e2 + 1 : 3));
      }
      t2.aLastSort = i2;
    }
    function fe(t2, e2) {
      for (var n2, a2, r2, o2 = t2.aoColumns[e2], i2 = w.ext.order[o2.sSortDataType], l2 = (i2 && (n2 = i2.call(t2.oInstance, t2, e2, ot(t2, e2))), w.ext.type.order[o2.sType + "-pre"]), s2 = 0, u2 = t2.aoData.length; s2 < u2; s2++) (a2 = t2.aoData[s2])._aSortData || (a2._aSortData = []), a2._aSortData[e2] && !i2 || (r2 = i2 ? n2[s2] : S(t2, s2, e2, "sort"), a2._aSortData[e2] = l2 ? l2(r2) : r2);
    }
    function de(n2) {
      var t2;
      n2._bLoadingState || (t2 = { time: +/* @__PURE__ */ new Date(), start: n2._iDisplayStart, length: n2._iDisplayLength, order: P.extend(true, [], n2.aaSorting), search: Et(n2.oPreviousSearch), columns: P.map(n2.aoColumns, function(t3, e2) {
        return { visible: t3.bVisible, search: Et(n2.aoPreSearchCols[e2]) };
      }) }, n2.oSavedState = t2, R(n2, "aoStateSaveParams", "stateSaveParams", [n2, t2]), n2.oFeatures.bStateSave && !n2.bDestroying && n2.fnStateSaveCallback.call(n2.oInstance, n2, t2));
    }
    function he(e2, t2, n2) {
      var a2;
      if (e2.oFeatures.bStateSave) return (a2 = e2.fnStateLoadCallback.call(e2.oInstance, e2, function(t3) {
        pe(e2, t3, n2);
      })) !== H && pe(e2, a2, n2), true;
      n2();
    }
    function pe(n2, t2, e2) {
      var a2, r2, o2 = n2.aoColumns, i2 = (n2._bLoadingState = true, n2._bInitComplete ? new w.Api(n2) : null);
      if (t2 && t2.time) {
        var l2 = R(n2, "aoStateLoadParams", "stateLoadParams", [n2, t2]);
        if (-1 !== P.inArray(false, l2)) n2._bLoadingState = false;
        else {
          l2 = n2.iStateDuration;
          if (0 < l2 && t2.time < +/* @__PURE__ */ new Date() - 1e3 * l2) n2._bLoadingState = false;
          else if (t2.columns && o2.length !== t2.columns.length) n2._bLoadingState = false;
          else {
            if (n2.oLoadedState = P.extend(true, {}, t2), t2.length !== H && (i2 ? i2.page.len(t2.length) : n2._iDisplayLength = t2.length), t2.start !== H && (null === i2 ? (n2._iDisplayStart = t2.start, n2.iInitDisplayStart = t2.start) : Yt(n2, t2.start / n2._iDisplayLength)), t2.order !== H && (n2.aaSorting = [], P.each(t2.order, function(t3, e3) {
              n2.aaSorting.push(e3[0] >= o2.length ? [0, e3[1]] : e3);
            })), t2.search !== H && P.extend(n2.oPreviousSearch, Bt(t2.search)), t2.columns) {
              for (a2 = 0, r2 = t2.columns.length; a2 < r2; a2++) {
                var s2 = t2.columns[a2];
                s2.visible !== H && (i2 ? i2.column(a2).visible(s2.visible, false) : o2[a2].bVisible = s2.visible), s2.search !== H && P.extend(n2.aoPreSearchCols[a2], Bt(s2.search));
              }
              i2 && i2.columns.adjust();
            }
            n2._bLoadingState = false, R(n2, "aoStateLoaded", "stateLoaded", [n2, t2]);
          }
        }
      } else n2._bLoadingState = false;
      e2();
    }
    function ge(t2) {
      var e2 = w.settings, t2 = P.inArray(t2, N(e2, "nTable"));
      return -1 !== t2 ? e2[t2] : null;
    }
    function W(t2, e2, n2, a2) {
      if (n2 = "DataTables warning: " + (t2 ? "table id=" + t2.sTableId + " - " : "") + n2, a2 && (n2 += ". For more information about this error, please see http://datatables.net/tn/" + a2), e2) j.console && console.log && console.log(n2);
      else {
        e2 = w.ext, e2 = e2.sErrMode || e2.errMode;
        if (t2 && R(t2, null, "error", [t2, a2, n2]), "alert" == e2) alert(n2);
        else {
          if ("throw" == e2) throw new Error(n2);
          "function" == typeof e2 && e2(t2, a2, n2);
        }
      }
    }
    function F(n2, a2, t2, e2) {
      Array.isArray(t2) ? P.each(t2, function(t3, e3) {
        Array.isArray(e3) ? F(n2, a2, e3[0], e3[1]) : F(n2, a2, e3);
      }) : (e2 === H && (e2 = t2), a2[t2] !== H && (n2[e2] = a2[t2]));
    }
    function be(t2, e2, n2) {
      var a2, r2;
      for (r2 in e2) e2.hasOwnProperty(r2) && (a2 = e2[r2], P.isPlainObject(a2) ? (P.isPlainObject(t2[r2]) || (t2[r2] = {}), P.extend(true, t2[r2], a2)) : n2 && "data" !== r2 && "aaData" !== r2 && Array.isArray(a2) ? t2[r2] = a2.slice() : t2[r2] = a2);
      return t2;
    }
    function me(e2, t2, n2) {
      P(e2).on("click.DT", t2, function(t3) {
        P(e2).trigger("blur"), n2(t3);
      }).on("keypress.DT", t2, function(t3) {
        13 === t3.which && (t3.preventDefault(), n2(t3));
      }).on("selectstart.DT", function() {
        return false;
      });
    }
    function L(t2, e2, n2, a2) {
      n2 && t2[e2].push({ fn: n2, sName: a2 });
    }
    function R(n2, t2, e2, a2) {
      var r2 = [];
      return t2 && (r2 = P.map(n2[t2].slice().reverse(), function(t3, e3) {
        return t3.fn.apply(n2.oInstance, a2);
      })), null !== e2 && (t2 = P.Event(e2 + ".dt"), (e2 = P(n2.nTable)).trigger(t2, a2), 0 === e2.parents("body").length && P("body").trigger(t2, a2), r2.push(t2.result)), r2;
    }
    function Se(t2) {
      var e2 = t2._iDisplayStart, n2 = t2.fnDisplayEnd(), a2 = t2._iDisplayLength;
      n2 <= e2 && (e2 = n2 - a2), e2 -= e2 % a2, t2._iDisplayStart = e2 = -1 === a2 || e2 < 0 ? 0 : e2;
    }
    function ve(t2, e2) {
      var t2 = t2.renderer, n2 = w.ext.renderer[e2];
      return P.isPlainObject(t2) && t2[e2] ? n2[t2[e2]] || n2._ : "string" == typeof t2 && n2[t2] || n2._;
    }
    function E(t2) {
      return t2.oFeatures.bServerSide ? "ssp" : t2.ajax || t2.sAjaxSource ? "ajax" : "dom";
    }
    function ye(t2, n2) {
      var a2;
      return Array.isArray(t2) ? P.map(t2, function(t3) {
        return ye(t3, n2);
      }) : "number" == typeof t2 ? [n2[t2]] : (a2 = P.map(n2, function(t3, e2) {
        return t3.nTable;
      }), P(a2).filter(t2).map(function(t3) {
        var e2 = P.inArray(this, a2);
        return n2[e2];
      }).toArray());
    }
    function De(r2, o2, t2) {
      var e2, n2;
      t2 && (e2 = new B(r2)).one("draw", function() {
        t2(e2.ajax.json());
      }), "ssp" == E(r2) ? u(r2, o2) : (D(r2, true), (n2 = r2.jqXHR) && 4 !== n2.readyState && n2.abort(), Tt(r2, [], function(t3) {
        pt(r2);
        for (var e3 = Ft(r2, t3), n3 = 0, a2 = e3.length; n3 < a2; n3++) x(r2, e3[n3]);
        u(r2, o2), D(r2, false);
      }));
    }
    function _e(t2, e2, n2, a2, r2) {
      for (var o2, i2, l2, s2, u2 = [], c2 = typeof e2, f2 = 0, d2 = (e2 = e2 && "string" != c2 && "function" != c2 && e2.length !== H ? e2 : [e2]).length; f2 < d2; f2++) for (l2 = 0, s2 = (i2 = e2[f2] && e2[f2].split && !e2[f2].match(/[\[\(:]/) ? e2[f2].split(",") : [e2[f2]]).length; l2 < s2; l2++) (o2 = n2("string" == typeof i2[l2] ? i2[l2].trim() : i2[l2])) && o2.length && (u2 = u2.concat(o2));
      var h2 = p.selector[t2];
      if (h2.length) for (f2 = 0, d2 = h2.length; f2 < d2; f2++) u2 = h2[f2](a2, r2, u2);
      return z(u2);
    }
    function we(t2) {
      return (t2 = t2 || {}).filter && t2.search === H && (t2.search = t2.filter), P.extend({ search: "none", order: "current", page: "all" }, t2);
    }
    function Ce(t2) {
      for (var e2 = 0, n2 = t2.length; e2 < n2; e2++) if (0 < t2[e2].length) return t2[0] = t2[e2], t2[0].length = 1, t2.length = 1, t2.context = [t2.context[e2]], t2;
      return t2.length = 0, t2;
    }
    function Te(o2, t2, e2, n2) {
      function i2(t3, e3) {
        var n3;
        if (Array.isArray(t3) || t3 instanceof P) for (var a2 = 0, r2 = t3.length; a2 < r2; a2++) i2(t3[a2], e3);
        else t3.nodeName && "tr" === t3.nodeName.toLowerCase() ? l2.push(t3) : (n3 = P("<tr><td></td></tr>").addClass(e3), P("td", n3).addClass(e3).html(t3)[0].colSpan = T(o2), l2.push(n3[0]));
      }
      var l2 = [];
      i2(e2, n2), t2._details && t2._details.detach(), t2._details = P(l2), t2._detailsShow && t2._details.insertAfter(t2.nTr);
    }
    function xe(t2, e2) {
      var n2 = t2.context;
      if (n2.length && t2.length) {
        var a2 = n2[0].aoData[t2[0]];
        if (a2._details) {
          (a2._detailsShow = e2) ? (a2._details.insertAfter(a2.nTr), P(a2.nTr).addClass("dt-hasChild")) : (a2._details.detach(), P(a2.nTr).removeClass("dt-hasChild")), R(n2[0], null, "childRow", [e2, t2.row(t2[0])]);
          var s2 = n2[0], r2 = new B(s2), a2 = ".dt.DT_details", e2 = "draw" + a2, t2 = "column-sizing" + a2, a2 = "destroy" + a2, u2 = s2.aoData;
          if (r2.off(e2 + " " + t2 + " " + a2), N(u2, "_details").length > 0) {
            r2.on(e2, function(t3, e3) {
              if (s2 !== e3) return;
              r2.rows({ page: "current" }).eq(0).each(function(t4) {
                var e4 = u2[t4];
                if (e4._detailsShow) e4._details.insertAfter(e4.nTr);
              });
            });
            r2.on(t2, function(t3, e3, n3, a3) {
              if (s2 !== e3) return;
              var r3, o2 = T(e3);
              for (var i2 = 0, l2 = u2.length; i2 < l2; i2++) {
                r3 = u2[i2];
                if (r3._details) r3._details.children("td[colspan]").attr("colspan", o2);
              }
            });
            r2.on(a2, function(t3, e3) {
              if (s2 !== e3) return;
              for (var n3 = 0, a3 = u2.length; n3 < a3; n3++) if (u2[n3]._details) Re(r2, n3);
            });
          }
          Le(n2);
        }
      }
    }
    function Ae(t2, e2, n2, a2, r2) {
      for (var o2 = [], i2 = 0, l2 = r2.length; i2 < l2; i2++) o2.push(S(t2, r2[i2], e2));
      return o2;
    }
    var Ie = [], o = Array.prototype, B = function(t2, e2) {
      if (!(this instanceof B)) return new B(t2, e2);
      function n2(t3) {
        var e3, n3, a3, r3;
        t3 = t3, a3 = w.settings, r3 = P.map(a3, function(t4, e4) {
          return t4.nTable;
        }), (t3 = t3 ? t3.nTable && t3.oApi ? [t3] : t3.nodeName && "table" === t3.nodeName.toLowerCase() ? -1 !== (e3 = P.inArray(t3, r3)) ? [a3[e3]] : null : t3 && "function" == typeof t3.settings ? t3.settings().toArray() : ("string" == typeof t3 ? n3 = P(t3) : t3 instanceof P && (n3 = t3), n3 ? n3.map(function(t4) {
          return -1 !== (e3 = P.inArray(this, r3)) ? a3[e3] : null;
        }).toArray() : void 0) : []) && o2.push.apply(o2, t3);
      }
      var o2 = [];
      if (Array.isArray(t2)) for (var a2 = 0, r2 = t2.length; a2 < r2; a2++) n2(t2[a2]);
      else n2(t2);
      this.context = z(o2), e2 && P.merge(this, e2), this.selector = { rows: null, cols: null, opts: null }, B.extend(this, this, Ie);
    }, Fe = (w.Api = B, P.extend(B.prototype, { any: function() {
      return 0 !== this.count();
    }, concat: o.concat, context: [], count: function() {
      return this.flatten().length;
    }, each: function(t2) {
      for (var e2 = 0, n2 = this.length; e2 < n2; e2++) t2.call(this, this[e2], e2, this);
      return this;
    }, eq: function(t2) {
      var e2 = this.context;
      return e2.length > t2 ? new B(e2[t2], this[t2]) : null;
    }, filter: function(t2) {
      var e2 = [];
      if (o.filter) e2 = o.filter.call(this, t2, this);
      else for (var n2 = 0, a2 = this.length; n2 < a2; n2++) t2.call(this, this[n2], n2, this) && e2.push(this[n2]);
      return new B(this.context, e2);
    }, flatten: function() {
      var t2 = [];
      return new B(this.context, t2.concat.apply(t2, this.toArray()));
    }, join: o.join, indexOf: o.indexOf || function(t2, e2) {
      for (var n2 = e2 || 0, a2 = this.length; n2 < a2; n2++) if (this[n2] === t2) return n2;
      return -1;
    }, iterator: function(t2, e2, n2, a2) {
      var r2, o2, i2, l2, s2, u2, c2, f2, d2 = [], h2 = this.context, p2 = this.selector;
      for ("string" == typeof t2 && (a2 = n2, n2 = e2, e2 = t2, t2 = false), o2 = 0, i2 = h2.length; o2 < i2; o2++) {
        var g2 = new B(h2[o2]);
        if ("table" === e2) (r2 = n2.call(g2, h2[o2], o2)) !== H && d2.push(r2);
        else if ("columns" === e2 || "rows" === e2) (r2 = n2.call(g2, h2[o2], this[o2], o2)) !== H && d2.push(r2);
        else if ("column" === e2 || "column-rows" === e2 || "row" === e2 || "cell" === e2) for (c2 = this[o2], "column-rows" === e2 && (u2 = Fe(h2[o2], p2.opts)), l2 = 0, s2 = c2.length; l2 < s2; l2++) f2 = c2[l2], (r2 = "cell" === e2 ? n2.call(g2, h2[o2], f2.row, f2.column, o2, l2) : n2.call(g2, h2[o2], f2, o2, l2, u2)) !== H && d2.push(r2);
      }
      return d2.length || a2 ? ((t2 = (a2 = new B(h2, t2 ? d2.concat.apply([], d2) : d2)).selector).rows = p2.rows, t2.cols = p2.cols, t2.opts = p2.opts, a2) : this;
    }, lastIndexOf: o.lastIndexOf || function(t2, e2) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    }, length: 0, map: function(t2) {
      var e2 = [];
      if (o.map) e2 = o.map.call(this, t2, this);
      else for (var n2 = 0, a2 = this.length; n2 < a2; n2++) e2.push(t2.call(this, this[n2], n2));
      return new B(this.context, e2);
    }, pluck: function(t2) {
      var e2 = w.util.get(t2);
      return this.map(function(t3) {
        return e2(t3);
      });
    }, pop: o.pop, push: o.push, reduce: o.reduce || function(t2, e2) {
      return et(this, t2, e2, 0, this.length, 1);
    }, reduceRight: o.reduceRight || function(t2, e2) {
      return et(this, t2, e2, this.length - 1, -1, -1);
    }, reverse: o.reverse, selector: null, shift: o.shift, slice: function() {
      return new B(this.context, this);
    }, sort: o.sort, splice: o.splice, toArray: function() {
      return o.slice.call(this);
    }, to$: function() {
      return P(this);
    }, toJQuery: function() {
      return P(this);
    }, unique: function() {
      return new B(this.context, z(this));
    }, unshift: o.unshift }), B.extend = function(t2, e2, n2) {
      if (n2.length && e2 && (e2 instanceof B || e2.__dt_wrapper)) for (var a2, r2 = 0, o2 = n2.length; r2 < o2; r2++) e2[(a2 = n2[r2]).name] = "function" === a2.type ? /* @__PURE__ */ function(e3, n3, a3) {
        return function() {
          var t3 = n3.apply(e3, arguments);
          return B.extend(t3, t3, a3.methodExt), t3;
        };
      }(t2, a2.val, a2) : "object" === a2.type ? {} : a2.val, e2[a2.name].__dt_wrapper = true, B.extend(t2, e2[a2.name], a2.propExt);
    }, B.register = e = function(t2, e2) {
      if (Array.isArray(t2)) for (var n2 = 0, a2 = t2.length; n2 < a2; n2++) B.register(t2[n2], e2);
      else for (var r2 = t2.split("."), o2 = Ie, i2 = 0, l2 = r2.length; i2 < l2; i2++) {
        var s2, u2, c2 = function(t3, e3) {
          for (var n3 = 0, a3 = t3.length; n3 < a3; n3++) if (t3[n3].name === e3) return t3[n3];
          return null;
        }(o2, u2 = (s2 = -1 !== r2[i2].indexOf("()")) ? r2[i2].replace("()", "") : r2[i2]);
        c2 || o2.push(c2 = { name: u2, val: {}, methodExt: [], propExt: [], type: "object" }), i2 === l2 - 1 ? (c2.val = e2, c2.type = "function" == typeof e2 ? "function" : P.isPlainObject(e2) ? "object" : "other") : o2 = s2 ? c2.methodExt : c2.propExt;
      }
    }, B.registerPlural = t = function(t2, e2, n2) {
      B.register(t2, n2), B.register(e2, function() {
        var t3 = n2.apply(this, arguments);
        return t3 === this ? this : t3 instanceof B ? t3.length ? Array.isArray(t3[0]) ? new B(t3.context, t3[0]) : t3[0] : H : t3;
      });
    }, e("tables()", function(t2) {
      return t2 !== H && null !== t2 ? new B(ye(t2, this.context)) : this;
    }), e("table()", function(t2) {
      var t2 = this.tables(t2), e2 = t2.context;
      return e2.length ? new B(e2[0]) : t2;
    }), t("tables().nodes()", "table().node()", function() {
      return this.iterator("table", function(t2) {
        return t2.nTable;
      }, 1);
    }), t("tables().body()", "table().body()", function() {
      return this.iterator("table", function(t2) {
        return t2.nTBody;
      }, 1);
    }), t("tables().header()", "table().header()", function() {
      return this.iterator("table", function(t2) {
        return t2.nTHead;
      }, 1);
    }), t("tables().footer()", "table().footer()", function() {
      return this.iterator("table", function(t2) {
        return t2.nTFoot;
      }, 1);
    }), t("tables().containers()", "table().container()", function() {
      return this.iterator("table", function(t2) {
        return t2.nTableWrapper;
      }, 1);
    }), e("draw()", function(e2) {
      return this.iterator("table", function(t2) {
        "page" === e2 ? y(t2) : u(t2, false === (e2 = "string" == typeof e2 ? "full-hold" !== e2 : e2));
      });
    }), e("page()", function(e2) {
      return e2 === H ? this.page.info().page : this.iterator("table", function(t2) {
        Yt(t2, e2);
      });
    }), e("page.info()", function(t2) {
      var e2, n2, a2, r2, o2;
      return 0 === this.context.length ? H : (n2 = (e2 = this.context[0])._iDisplayStart, a2 = e2.oFeatures.bPaginate ? e2._iDisplayLength : -1, r2 = e2.fnRecordsDisplay(), { page: (o2 = -1 === a2) ? 0 : Math.floor(n2 / a2), pages: o2 ? 1 : Math.ceil(r2 / a2), start: n2, end: e2.fnDisplayEnd(), length: a2, recordsTotal: e2.fnRecordsTotal(), recordsDisplay: r2, serverSide: "ssp" === E(e2) });
    }), e("page.len()", function(e2) {
      return e2 === H ? 0 !== this.context.length ? this.context[0]._iDisplayLength : H : this.iterator("table", function(t2) {
        $t(t2, e2);
      });
    }), e("ajax.json()", function() {
      var t2 = this.context;
      if (0 < t2.length) return t2[0].json;
    }), e("ajax.params()", function() {
      var t2 = this.context;
      if (0 < t2.length) return t2[0].oAjaxData;
    }), e("ajax.reload()", function(e2, n2) {
      return this.iterator("table", function(t2) {
        De(t2, false === n2, e2);
      });
    }), e("ajax.url()", function(e2) {
      var t2 = this.context;
      return e2 === H ? 0 === t2.length ? H : (t2 = t2[0]).ajax ? P.isPlainObject(t2.ajax) ? t2.ajax.url : t2.ajax : t2.sAjaxSource : this.iterator("table", function(t3) {
        P.isPlainObject(t3.ajax) ? t3.ajax.url = e2 : t3.ajax = e2;
      });
    }), e("ajax.url().load()", function(e2, n2) {
      return this.iterator("table", function(t2) {
        De(t2, false === n2, e2);
      });
    }), function(t2, e2) {
      var n2, a2 = [], r2 = t2.aiDisplay, o2 = t2.aiDisplayMaster, i2 = e2.search, l2 = e2.order, e2 = e2.page;
      if ("ssp" == E(t2)) return "removed" === i2 ? [] : f(0, o2.length);
      if ("current" == e2) for (u2 = t2._iDisplayStart, c2 = t2.fnDisplayEnd(); u2 < c2; u2++) a2.push(r2[u2]);
      else if ("current" == l2 || "applied" == l2) {
        if ("none" == i2) a2 = o2.slice();
        else if ("applied" == i2) a2 = r2.slice();
        else if ("removed" == i2) {
          for (var s2 = {}, u2 = 0, c2 = r2.length; u2 < c2; u2++) s2[r2[u2]] = null;
          a2 = P.map(o2, function(t3) {
            return s2.hasOwnProperty(t3) ? null : t3;
          });
        }
      } else if ("index" == l2 || "original" == l2) for (u2 = 0, c2 = t2.aoData.length; u2 < c2; u2++) ("none" == i2 || -1 === (n2 = P.inArray(u2, r2)) && "removed" == i2 || 0 <= n2 && "applied" == i2) && a2.push(u2);
      return a2;
    }), Le = (e("rows()", function(e2, n2) {
      e2 === H ? e2 = "" : P.isPlainObject(e2) && (n2 = e2, e2 = ""), n2 = we(n2);
      var t2 = this.iterator("table", function(t3) {
        return _e("row", e2, function(n3) {
          var t4 = d(n3), a2 = r2.aoData;
          if (null !== t4 && !o2) return [t4];
          if (i2 = i2 || Fe(r2, o2), null !== t4 && -1 !== P.inArray(t4, i2)) return [t4];
          if (null === n3 || n3 === H || "" === n3) return i2;
          if ("function" == typeof n3) return P.map(i2, function(t5) {
            var e4 = a2[t5];
            return n3(t5, e4._aData, e4.nTr) ? t5 : null;
          });
          if (n3.nodeName) return t4 = n3._DT_RowIndex, e3 = n3._DT_CellIndex, t4 !== H ? a2[t4] && a2[t4].nTr === n3 ? [t4] : [] : e3 ? a2[e3.row] && a2[e3.row].nTr === n3.parentNode ? [e3.row] : [] : (t4 = P(n3).closest("*[data-dt-row]")).length ? [t4.data("dt-row")] : [];
          if ("string" == typeof n3 && "#" === n3.charAt(0)) {
            var e3 = r2.aIds[n3.replace(/^#/, "")];
            if (e3 !== H) return [e3.idx];
          }
          t4 = _(m(r2.aoData, i2, "nTr"));
          return P(t4).filter(n3).map(function() {
            return this._DT_RowIndex;
          }).toArray();
        }, r2 = t3, o2 = n2);
        var r2, o2, i2;
      }, 1);
      return t2.selector.rows = e2, t2.selector.opts = n2, t2;
    }), e("rows().nodes()", function() {
      return this.iterator("row", function(t2, e2) {
        return t2.aoData[e2].nTr || H;
      }, 1);
    }), e("rows().data()", function() {
      return this.iterator(true, "rows", function(t2, e2) {
        return m(t2.aoData, e2, "_aData");
      }, 1);
    }), t("rows().cache()", "row().cache()", function(n2) {
      return this.iterator("row", function(t2, e2) {
        t2 = t2.aoData[e2];
        return "search" === n2 ? t2._aFilterData : t2._aSortData;
      }, 1);
    }), t("rows().invalidate()", "row().invalidate()", function(n2) {
      return this.iterator("row", function(t2, e2) {
        bt(t2, e2, n2);
      });
    }), t("rows().indexes()", "row().index()", function() {
      return this.iterator("row", function(t2, e2) {
        return e2;
      }, 1);
    }), t("rows().ids()", "row().id()", function(t2) {
      for (var e2 = [], n2 = this.context, a2 = 0, r2 = n2.length; a2 < r2; a2++) for (var o2 = 0, i2 = this[a2].length; o2 < i2; o2++) {
        var l2 = n2[a2].rowIdFn(n2[a2].aoData[this[a2][o2]]._aData);
        e2.push((true === t2 ? "#" : "") + l2);
      }
      return new B(n2, e2);
    }), t("rows().remove()", "row().remove()", function() {
      var f2 = this;
      return this.iterator("row", function(t2, e2, n2) {
        var a2, r2, o2, i2, l2, s2, u2 = t2.aoData, c2 = u2[e2];
        for (u2.splice(e2, 1), a2 = 0, r2 = u2.length; a2 < r2; a2++) if (s2 = (l2 = u2[a2]).anCells, null !== l2.nTr && (l2.nTr._DT_RowIndex = a2), null !== s2) for (o2 = 0, i2 = s2.length; o2 < i2; o2++) s2[o2]._DT_CellIndex.row = a2;
        gt(t2.aiDisplayMaster, e2), gt(t2.aiDisplay, e2), gt(f2[n2], e2, false), 0 < t2._iRecordsDisplay && t2._iRecordsDisplay--, Se(t2);
        n2 = t2.rowIdFn(c2._aData);
        n2 !== H && delete t2.aIds[n2];
      }), this.iterator("table", function(t2) {
        for (var e2 = 0, n2 = t2.aoData.length; e2 < n2; e2++) t2.aoData[e2].idx = e2;
      }), this;
    }), e("rows.add()", function(o2) {
      var t2 = this.iterator("table", function(t3) {
        for (var e3, n2 = [], a2 = 0, r2 = o2.length; a2 < r2; a2++) (e3 = o2[a2]).nodeName && "TR" === e3.nodeName.toUpperCase() ? n2.push(ut(t3, e3)[0]) : n2.push(x(t3, e3));
        return n2;
      }, 1), e2 = this.rows(-1);
      return e2.pop(), P.merge(e2, t2), e2;
    }), e("row()", function(t2, e2) {
      return Ce(this.rows(t2, e2));
    }), e("row().data()", function(t2) {
      var e2, n2 = this.context;
      return t2 === H ? n2.length && this.length ? n2[0].aoData[this[0]]._aData : H : ((e2 = n2[0].aoData[this[0]])._aData = t2, Array.isArray(t2) && e2.nTr && e2.nTr.id && b(n2[0].rowId)(t2, e2.nTr.id), bt(n2[0], this[0], "data"), this);
    }), e("row().node()", function() {
      var t2 = this.context;
      return t2.length && this.length && t2[0].aoData[this[0]].nTr || null;
    }), e("row.add()", function(e2) {
      e2 instanceof P && e2.length && (e2 = e2[0]);
      var t2 = this.iterator("table", function(t3) {
        return e2.nodeName && "TR" === e2.nodeName.toUpperCase() ? ut(t3, e2)[0] : x(t3, e2);
      });
      return this.row(t2[0]);
    }), P(v).on("plugin-init.dt", function(t2, e2) {
      var n2 = new B(e2), a2 = "on-plugin-init", r2 = "stateSaveParams." + a2, o2 = "destroy. " + a2, a2 = (n2.on(r2, function(t3, e3, n3) {
        for (var a3 = e3.rowIdFn, r3 = e3.aoData, o3 = [], i2 = 0; i2 < r3.length; i2++) r3[i2]._detailsShow && o3.push("#" + a3(r3[i2]._aData));
        n3.childRows = o3;
      }), n2.on(o2, function() {
        n2.off(r2 + " " + o2);
      }), n2.state.loaded());
      a2 && a2.childRows && n2.rows(P.map(a2.childRows, function(t3) {
        return t3.replace(/:/g, "\\:");
      })).every(function() {
        R(e2, null, "requestChild", [this]);
      });
    }), w.util.throttle(function(t2) {
      de(t2[0]);
    }, 500)), Re = function(t2, e2) {
      var n2 = t2.context;
      n2.length && (e2 = n2[0].aoData[e2 !== H ? e2 : t2[0]]) && e2._details && (e2._details.remove(), e2._detailsShow = H, e2._details = H, P(e2.nTr).removeClass("dt-hasChild"), Le(n2));
    }, Pe = "row().child", je = Pe + "()", He = (e(je, function(t2, e2) {
      var n2 = this.context;
      return t2 === H ? n2.length && this.length ? n2[0].aoData[this[0]]._details : H : (true === t2 ? this.child.show() : false === t2 ? Re(this) : n2.length && this.length && Te(n2[0], n2[0].aoData[this[0]], t2, e2), this);
    }), e([Pe + ".show()", je + ".show()"], function(t2) {
      return xe(this, true), this;
    }), e([Pe + ".hide()", je + ".hide()"], function() {
      return xe(this, false), this;
    }), e([Pe + ".remove()", je + ".remove()"], function() {
      return Re(this), this;
    }), e(Pe + ".isShown()", function() {
      var t2 = this.context;
      return t2.length && this.length && t2[0].aoData[this[0]]._detailsShow || false;
    }), /^([^:]+):(name|visIdx|visible)$/), Ne = (e("columns()", function(n2, a2) {
      n2 === H ? n2 = "" : P.isPlainObject(n2) && (a2 = n2, n2 = ""), a2 = we(a2);
      var t2 = this.iterator("table", function(t3) {
        return e2 = n2, l2 = a2, s2 = (i2 = t3).aoColumns, u2 = N(s2, "sName"), c2 = N(s2, "nTh"), _e("column", e2, function(n3) {
          var a3, t4 = d(n3);
          if ("" === n3) return f(s2.length);
          if (null !== t4) return [0 <= t4 ? t4 : s2.length + t4];
          if ("function" == typeof n3) return a3 = Fe(i2, l2), P.map(s2, function(t5, e4) {
            return n3(e4, Ae(i2, e4, 0, 0, a3), c2[e4]) ? e4 : null;
          });
          var r2 = "string" == typeof n3 ? n3.match(He) : "";
          if (r2) switch (r2[2]) {
            case "visIdx":
            case "visible":
              var e3, o2 = parseInt(r2[1], 10);
              return o2 < 0 ? [(e3 = P.map(s2, function(t5, e4) {
                return t5.bVisible ? e4 : null;
              }))[e3.length + o2]] : [rt(i2, o2)];
            case "name":
              return P.map(u2, function(t5, e4) {
                return t5 === r2[1] ? e4 : null;
              });
            default:
              return [];
          }
          return n3.nodeName && n3._DT_CellIndex ? [n3._DT_CellIndex.column] : (t4 = P(c2).filter(n3).map(function() {
            return P.inArray(this, c2);
          }).toArray()).length || !n3.nodeName ? t4 : (t4 = P(n3).closest("*[data-dt-column]")).length ? [t4.data("dt-column")] : [];
        }, i2, l2);
        var i2, e2, l2, s2, u2, c2;
      }, 1);
      return t2.selector.cols = n2, t2.selector.opts = a2, t2;
    }), t("columns().header()", "column().header()", function(t2, e2) {
      return this.iterator("column", function(t3, e3) {
        return t3.aoColumns[e3].nTh;
      }, 1);
    }), t("columns().footer()", "column().footer()", function(t2, e2) {
      return this.iterator("column", function(t3, e3) {
        return t3.aoColumns[e3].nTf;
      }, 1);
    }), t("columns().data()", "column().data()", function() {
      return this.iterator("column-rows", Ae, 1);
    }), t("columns().dataSrc()", "column().dataSrc()", function() {
      return this.iterator("column", function(t2, e2) {
        return t2.aoColumns[e2].mData;
      }, 1);
    }), t("columns().cache()", "column().cache()", function(o2) {
      return this.iterator("column-rows", function(t2, e2, n2, a2, r2) {
        return m(t2.aoData, r2, "search" === o2 ? "_aFilterData" : "_aSortData", e2);
      }, 1);
    }), t("columns().nodes()", "column().nodes()", function() {
      return this.iterator("column-rows", function(t2, e2, n2, a2, r2) {
        return m(t2.aoData, r2, "anCells", e2);
      }, 1);
    }), t("columns().visible()", "column().visible()", function(f2, n2) {
      var e2 = this, t2 = this.iterator("column", function(t3, e3) {
        if (f2 === H) return t3.aoColumns[e3].bVisible;
        var n3, a2, r2 = e3, e3 = f2, o2 = t3.aoColumns, i2 = o2[r2], l2 = t3.aoData;
        if (e3 === H) i2.bVisible;
        else if (i2.bVisible !== e3) {
          if (e3) for (var s2 = P.inArray(true, N(o2, "bVisible"), r2 + 1), u2 = 0, c2 = l2.length; u2 < c2; u2++) a2 = l2[u2].nTr, n3 = l2[u2].anCells, a2 && a2.insertBefore(n3[r2], n3[s2] || null);
          else P(N(t3.aoData, "anCells", r2)).detach();
          i2.bVisible = e3;
        }
      });
      return f2 !== H && this.iterator("table", function(t3) {
        Dt(t3, t3.aoHeader), Dt(t3, t3.aoFooter), t3.aiDisplay.length || P(t3.nTBody).find("td[colspan]").attr("colspan", T(t3)), de(t3), e2.iterator("column", function(t4, e3) {
          R(t4, null, "column-visibility", [t4, e3, f2, n2]);
        }), n2 !== H && !n2 || e2.columns.adjust();
      }), t2;
    }), t("columns().indexes()", "column().index()", function(n2) {
      return this.iterator("column", function(t2, e2) {
        return "visible" === n2 ? ot(t2, e2) : e2;
      }, 1);
    }), e("columns.adjust()", function() {
      return this.iterator("table", function(t2) {
        O(t2);
      }, 1);
    }), e("column.index()", function(t2, e2) {
      var n2;
      if (0 !== this.context.length) return n2 = this.context[0], "fromVisible" === t2 || "toData" === t2 ? rt(n2, e2) : "fromData" === t2 || "toVisible" === t2 ? ot(n2, e2) : void 0;
    }), e("column()", function(t2, e2) {
      return Ce(this.columns(t2, e2));
    }), e("cells()", function(g2, t2, b2) {
      var a2, r2, o2, i2, l2, s2, e2;
      return P.isPlainObject(g2) && (g2.row === H ? (b2 = g2, g2 = null) : (b2 = t2, t2 = null)), P.isPlainObject(t2) && (b2 = t2, t2 = null), null === t2 || t2 === H ? this.iterator("table", function(t3) {
        return a3 = t3, t3 = g2, e3 = we(b2), f2 = a3.aoData, d2 = Fe(a3, e3), n2 = _(m(f2, d2, "anCells")), h2 = P(Y([], n2)), p2 = a3.aoColumns.length, _e("cell", t3, function(t4) {
          var e4, n3 = "function" == typeof t4;
          if (null === t4 || t4 === H || n3) {
            for (o3 = [], i3 = 0, l3 = d2.length; i3 < l3; i3++) for (r3 = d2[i3], s3 = 0; s3 < p2; s3++) u2 = { row: r3, column: s3 }, (!n3 || (c2 = f2[r3], t4(u2, S(a3, r3, s3), c2.anCells ? c2.anCells[s3] : null))) && o3.push(u2);
            return o3;
          }
          return P.isPlainObject(t4) ? t4.column !== H && t4.row !== H && -1 !== P.inArray(t4.row, d2) ? [t4] : [] : (e4 = h2.filter(t4).map(function(t5, e5) {
            return { row: e5._DT_CellIndex.row, column: e5._DT_CellIndex.column };
          }).toArray()).length || !t4.nodeName ? e4 : (c2 = P(t4).closest("*[data-dt-row]")).length ? [{ row: c2.data("dt-row"), column: c2.data("dt-column") }] : [];
        }, a3, e3);
        var a3, e3, r3, o3, i3, l3, s3, u2, c2, f2, d2, n2, h2, p2;
      }) : (e2 = b2 ? { page: b2.page, order: b2.order, search: b2.search } : {}, a2 = this.columns(t2, e2), r2 = this.rows(g2, e2), e2 = this.iterator("table", function(t3, e3) {
        var n2 = [];
        for (o2 = 0, i2 = r2[e3].length; o2 < i2; o2++) for (l2 = 0, s2 = a2[e3].length; l2 < s2; l2++) n2.push({ row: r2[e3][o2], column: a2[e3][l2] });
        return n2;
      }, 1), e2 = b2 && b2.selected ? this.cells(e2, b2) : e2, P.extend(e2.selector, { cols: t2, rows: g2, opts: b2 }), e2);
    }), t("cells().nodes()", "cell().node()", function() {
      return this.iterator("cell", function(t2, e2, n2) {
        t2 = t2.aoData[e2];
        return t2 && t2.anCells ? t2.anCells[n2] : H;
      }, 1);
    }), e("cells().data()", function() {
      return this.iterator("cell", function(t2, e2, n2) {
        return S(t2, e2, n2);
      }, 1);
    }), t("cells().cache()", "cell().cache()", function(a2) {
      return a2 = "search" === a2 ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t2, e2, n2) {
        return t2.aoData[e2][a2][n2];
      }, 1);
    }), t("cells().render()", "cell().render()", function(a2) {
      return this.iterator("cell", function(t2, e2, n2) {
        return S(t2, e2, n2, a2);
      }, 1);
    }), t("cells().indexes()", "cell().index()", function() {
      return this.iterator("cell", function(t2, e2, n2) {
        return { row: e2, column: n2, columnVisible: ot(t2, n2) };
      }, 1);
    }), t("cells().invalidate()", "cell().invalidate()", function(a2) {
      return this.iterator("cell", function(t2, e2, n2) {
        bt(t2, e2, a2, n2);
      });
    }), e("cell()", function(t2, e2, n2) {
      return Ce(this.cells(t2, e2, n2));
    }), e("cell().data()", function(t2) {
      var e2 = this.context, n2 = this[0];
      return t2 === H ? e2.length && n2.length ? S(e2[0], n2[0].row, n2[0].column) : H : (ct(e2[0], n2[0].row, n2[0].column, t2), bt(e2[0], n2[0].row, "data", n2[0].column), this);
    }), e("order()", function(e2, t2) {
      var n2 = this.context;
      return e2 === H ? 0 !== n2.length ? n2[0].aaSorting : H : ("number" == typeof e2 ? e2 = [[e2, t2]] : e2.length && !Array.isArray(e2[0]) && (e2 = Array.prototype.slice.call(arguments)), this.iterator("table", function(t3) {
        t3.aaSorting = e2.slice();
      }));
    }), e("order.listener()", function(e2, n2, a2) {
      return this.iterator("table", function(t2) {
        ue(t2, e2, n2, a2);
      });
    }), e("order.fixed()", function(e2) {
      var t2;
      return e2 ? this.iterator("table", function(t3) {
        t3.aaSortingFixed = P.extend(true, {}, e2);
      }) : (t2 = (t2 = this.context).length ? t2[0].aaSortingFixed : H, Array.isArray(t2) ? { pre: t2 } : t2);
    }), e(["columns().order()", "column().order()"], function(a2) {
      var r2 = this;
      return this.iterator("table", function(t2, e2) {
        var n2 = [];
        P.each(r2[e2], function(t3, e3) {
          n2.push([e3, a2]);
        }), t2.aaSorting = n2;
      });
    }), e("search()", function(e2, n2, a2, r2) {
      var t2 = this.context;
      return e2 === H ? 0 !== t2.length ? t2[0].oPreviousSearch.sSearch : H : this.iterator("table", function(t3) {
        t3.oFeatures.bFilter && Rt(t3, P.extend({}, t3.oPreviousSearch, { sSearch: e2 + "", bRegex: null !== n2 && n2, bSmart: null === a2 || a2, bCaseInsensitive: null === r2 || r2 }), 1);
      });
    }), t("columns().search()", "column().search()", function(a2, r2, o2, i2) {
      return this.iterator("column", function(t2, e2) {
        var n2 = t2.aoPreSearchCols;
        if (a2 === H) return n2[e2].sSearch;
        t2.oFeatures.bFilter && (P.extend(n2[e2], { sSearch: a2 + "", bRegex: null !== r2 && r2, bSmart: null === o2 || o2, bCaseInsensitive: null === i2 || i2 }), Rt(t2, t2.oPreviousSearch, 1));
      });
    }), e("state()", function() {
      return this.context.length ? this.context[0].oSavedState : null;
    }), e("state.clear()", function() {
      return this.iterator("table", function(t2) {
        t2.fnStateSaveCallback.call(t2.oInstance, t2, {});
      });
    }), e("state.loaded()", function() {
      return this.context.length ? this.context[0].oLoadedState : null;
    }), e("state.save()", function() {
      return this.iterator("table", function(t2) {
        de(t2);
      });
    }), w.use = function(t2, e2) {
      "lib" === e2 || t2.fn ? P = t2 : "win" == e2 || t2.document ? v = (j = t2).document : "datetime" !== e2 && "DateTime" !== t2.type || (w.DateTime = t2);
    }, w.factory = function(t2, e2) {
      var n2 = false;
      return t2 && t2.document && (v = (j = t2).document), e2 && e2.fn && e2.fn.jquery && (P = e2, n2 = true), n2;
    }, w.versionCheck = w.fnVersionCheck = function(t2) {
      for (var e2, n2, a2 = w.version.split("."), r2 = t2.split("."), o2 = 0, i2 = r2.length; o2 < i2; o2++) if ((e2 = parseInt(a2[o2], 10) || 0) !== (n2 = parseInt(r2[o2], 10) || 0)) return n2 < e2;
      return true;
    }, w.isDataTable = w.fnIsDataTable = function(t2) {
      var r2 = P(t2).get(0), o2 = false;
      return t2 instanceof w.Api || (P.each(w.settings, function(t3, e2) {
        var n2 = e2.nScrollHead ? P("table", e2.nScrollHead)[0] : null, a2 = e2.nScrollFoot ? P("table", e2.nScrollFoot)[0] : null;
        e2.nTable !== r2 && n2 !== r2 && a2 !== r2 || (o2 = true);
      }), o2);
    }, w.tables = w.fnTables = function(e2) {
      var t2 = false, n2 = (P.isPlainObject(e2) && (t2 = e2.api, e2 = e2.visible), P.map(w.settings, function(t3) {
        if (!e2 || P(t3.nTable).is(":visible")) return t3.nTable;
      }));
      return t2 ? new B(n2) : n2;
    }, w.camelToHungarian = C, e("$()", function(t2, e2) {
      e2 = this.rows(e2).nodes(), e2 = P(e2);
      return P([].concat(e2.filter(t2).toArray(), e2.find(t2).toArray()));
    }), P.each(["on", "one", "off"], function(t2, n2) {
      e(n2 + "()", function() {
        var t3 = Array.prototype.slice.call(arguments), e2 = (t3[0] = P.map(t3[0].split(/\s/), function(t4) {
          return t4.match(/\.dt\b/) ? t4 : t4 + ".dt";
        }).join(" "), P(this.tables().nodes()));
        return e2[n2].apply(e2, t3), this;
      });
    }), e("clear()", function() {
      return this.iterator("table", function(t2) {
        pt(t2);
      });
    }), e("settings()", function() {
      return new B(this.context, this.context);
    }), e("init()", function() {
      var t2 = this.context;
      return t2.length ? t2[0].oInit : null;
    }), e("data()", function() {
      return this.iterator("table", function(t2) {
        return N(t2.aoData, "_aData");
      }).flatten();
    }), e("destroy()", function(c2) {
      return c2 = c2 || false, this.iterator("table", function(e2) {
        var n2, t2 = e2.oClasses, a2 = e2.nTable, r2 = e2.nTBody, o2 = e2.nTHead, i2 = e2.nTFoot, l2 = P(a2), r2 = P(r2), s2 = P(e2.nTableWrapper), u2 = P.map(e2.aoData, function(t3) {
          return t3.nTr;
        }), i2 = (e2.bDestroying = true, R(e2, "aoDestroyCallback", "destroy", [e2]), c2 || new B(e2).columns().visible(true), s2.off(".DT").find(":not(tbody *)").off(".DT"), P(j).off(".DT-" + e2.sInstance), a2 != o2.parentNode && (l2.children("thead").detach(), l2.append(o2)), i2 && a2 != i2.parentNode && (l2.children("tfoot").detach(), l2.append(i2)), e2.aaSorting = [], e2.aaSortingFixed = [], ce(e2), P(u2).removeClass(e2.asStripeClasses.join(" ")), P("th, td", o2).removeClass(t2.sSortable + " " + t2.sSortableAsc + " " + t2.sSortableDesc + " " + t2.sSortableNone), r2.children().detach(), r2.append(u2), e2.nTableWrapper.parentNode), o2 = c2 ? "remove" : "detach", u2 = (l2[o2](), s2[o2](), !c2 && i2 && (i2.insertBefore(a2, e2.nTableReinsertBefore), l2.css("width", e2.sDestroyWidth).removeClass(t2.sTable), n2 = e2.asDestroyStripes.length) && r2.children().each(function(t3) {
          P(this).addClass(e2.asDestroyStripes[t3 % n2]);
        }), P.inArray(e2, w.settings));
        -1 !== u2 && w.settings.splice(u2, 1);
      });
    }), P.each(["column", "row", "cell"], function(t2, s2) {
      e(s2 + "s().every()", function(o2) {
        var i2 = this.selector.opts, l2 = this;
        return this.iterator(s2, function(t3, e2, n2, a2, r2) {
          o2.call(l2[s2](e2, "cell" === s2 ? n2 : i2, "cell" === s2 ? i2 : H), e2, n2, a2, r2);
        });
      });
    }), e("i18n()", function(t2, e2, n2) {
      var a2 = this.context[0], t2 = A(t2)(a2.oLanguage);
      return t2 === H && (t2 = e2), "string" == typeof (t2 = n2 !== H && P.isPlainObject(t2) ? t2[n2] !== H ? t2[n2] : t2._ : t2) ? t2.replace("%d", n2) : t2;
    }), w.version = "1.13.6", w.settings = [], w.models = {}, w.models.oSearch = { bCaseInsensitive: true, sSearch: "", bRegex: false, bSmart: true, return: false }, w.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }, w.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: false, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null }, w.defaults = { aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: true, bDeferRender: false, bDestroy: false, bFilter: true, bInfo: true, bLengthChange: true, bPaginate: true, bProcessing: false, bRetrieve: false, bScrollCollapse: false, bServerSide: false, bSort: true, bSortMulti: true, bSortCellsTop: false, bSortClasses: true, bStateSave: false, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function(t2) {
      return t2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function(t2) {
      try {
        return JSON.parse((-1 === t2.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t2.sInstance + "_" + location.pathname));
      } catch (t3) {
        return {};
      }
    }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function(t2, e2) {
      try {
        (-1 === t2.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t2.sInstance + "_" + location.pathname, JSON.stringify(e2));
      } catch (t3) {
      }
    }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" }, oSearch: P.extend({}, w.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId" }, i(w.defaults), w.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: true, bSortable: true, bVisible: true, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }, i(w.defaults.column), w.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: false, bScrollbarLeft: false, bBounding: false, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: false, bInitialised: false, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, jqXHR: null, json: H, oAjaxData: H, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: false, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: false, bSorted: false, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function() {
      return "ssp" == E(this) ? +this._iRecordsTotal : this.aiDisplayMaster.length;
    }, fnRecordsDisplay: function() {
      return "ssp" == E(this) ? +this._iRecordsDisplay : this.aiDisplay.length;
    }, fnDisplayEnd: function() {
      var t2 = this._iDisplayLength, e2 = this._iDisplayStart, n2 = e2 + t2, a2 = this.aiDisplay.length, r2 = this.oFeatures, o2 = r2.bPaginate;
      return r2.bServerSide ? false === o2 || -1 === t2 ? e2 + a2 : Math.min(e2 + t2, this._iRecordsDisplay) : !o2 || a2 < n2 || -1 === t2 ? a2 : n2;
    }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null }, w.ext = p = { buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: w.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: w.version }, P.extend(p, { afnFiltering: p.search, aTypes: p.type.detect, ofnSearch: p.type.search, oSort: p.type.order, afnSortData: p.order, aoFeatures: p.feature, oApi: p.internal, oStdClasses: p.classes, oPagination: p.pager }), P.extend(w.ext.classes, { sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_desc_disabled", sSortableDesc: "sorting_asc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: "" }), w.ext.pager);
    function Oe(t2, e2) {
      var n2 = [], a2 = Ne.numbers_length, r2 = Math.floor(a2 / 2);
      return e2 <= a2 ? n2 = f(0, e2) : t2 <= r2 ? ((n2 = f(0, a2 - 2)).push("ellipsis"), n2.push(e2 - 1)) : ((e2 - 1 - r2 <= t2 ? n2 = f(e2 - (a2 - 2), e2) : ((n2 = f(t2 - r2 + 2, t2 + r2 - 1)).push("ellipsis"), n2.push(e2 - 1), n2)).splice(0, 0, "ellipsis"), n2.splice(0, 0, 0)), n2.DT_el = "span", n2;
    }
    P.extend(Ne, { simple: function(t2, e2) {
      return ["previous", "next"];
    }, full: function(t2, e2) {
      return ["first", "previous", "next", "last"];
    }, numbers: function(t2, e2) {
      return [Oe(t2, e2)];
    }, simple_numbers: function(t2, e2) {
      return ["previous", Oe(t2, e2), "next"];
    }, full_numbers: function(t2, e2) {
      return ["first", "previous", Oe(t2, e2), "next", "last"];
    }, first_last_numbers: function(t2, e2) {
      return ["first", Oe(t2, e2), "last"];
    }, _numbers: Oe, numbers_length: 7 }), P.extend(true, w.ext.renderer, { pageButton: { _: function(u2, t2, c2, e2, f2, d2) {
      function h2(t3, e3) {
        for (var n3, a2 = b2.sPageButtonDisabled, r2 = function(t4) {
          Yt(u2, t4.data.action, true);
        }, o2 = 0, i2 = e3.length; o2 < i2; o2++) if (n3 = e3[o2], Array.isArray(n3)) {
          var l2 = P("<" + (n3.DT_el || "div") + "/>").appendTo(t3);
          h2(l2, n3);
        } else {
          var s2 = false;
          switch (p2 = null, g2 = n3) {
            case "ellipsis":
              t3.append('<span class="ellipsis">&#x2026;</span>');
              break;
            case "first":
              p2 = m2.sFirst, 0 === f2 && (s2 = true);
              break;
            case "previous":
              p2 = m2.sPrevious, 0 === f2 && (s2 = true);
              break;
            case "next":
              p2 = m2.sNext, 0 !== d2 && f2 !== d2 - 1 || (s2 = true);
              break;
            case "last":
              p2 = m2.sLast, 0 !== d2 && f2 !== d2 - 1 || (s2 = true);
              break;
            default:
              p2 = u2.fnFormatNumber(n3 + 1), g2 = f2 === n3 ? b2.sPageButtonActive : "";
          }
          null !== p2 && (l2 = u2.oInit.pagingTag || "a", s2 && (g2 += " " + a2), me(P("<" + l2 + ">", { class: b2.sPageButton + " " + g2, "aria-controls": u2.sTableId, "aria-disabled": s2 ? "true" : null, "aria-label": S2[n3], role: "link", "aria-current": g2 === b2.sPageButtonActive ? "page" : null, "data-dt-idx": n3, tabindex: s2 ? -1 : u2.iTabIndex, id: 0 === c2 && "string" == typeof n3 ? u2.sTableId + "_" + n3 : null }).html(p2).appendTo(t3), { action: n3 }, r2));
        }
      }
      var p2, g2, n2, b2 = u2.oClasses, m2 = u2.oLanguage.oPaginate, S2 = u2.oLanguage.oAria.paginate || {};
      try {
        n2 = P(t2).find(v.activeElement).data("dt-idx");
      } catch (t3) {
      }
      h2(P(t2).empty(), e2), n2 !== H && P(t2).find("[data-dt-idx=" + n2 + "]").trigger("focus");
    } } }), P.extend(w.ext.type.detect, [function(t2, e2) {
      e2 = e2.oLanguage.sDecimal;
      return l(t2, e2) ? "num" + e2 : null;
    }, function(t2, e2) {
      var n2;
      return (!t2 || t2 instanceof Date || X.test(t2)) && (null !== (n2 = Date.parse(t2)) && !isNaN(n2) || h(t2)) ? "date" : null;
    }, function(t2, e2) {
      e2 = e2.oLanguage.sDecimal;
      return l(t2, e2, true) ? "num-fmt" + e2 : null;
    }, function(t2, e2) {
      e2 = e2.oLanguage.sDecimal;
      return a(t2, e2) ? "html-num" + e2 : null;
    }, function(t2, e2) {
      e2 = e2.oLanguage.sDecimal;
      return a(t2, e2, true) ? "html-num-fmt" + e2 : null;
    }, function(t2, e2) {
      return h(t2) || "string" == typeof t2 && -1 !== t2.indexOf("<") ? "html" : null;
    }]), P.extend(w.ext.type.search, { html: function(t2) {
      return h(t2) ? t2 : "string" == typeof t2 ? t2.replace(U, " ").replace(V, "") : "";
    }, string: function(t2) {
      return !h(t2) && "string" == typeof t2 ? t2.replace(U, " ") : t2;
    } });
    function ke(t2, e2, n2, a2) {
      var r2;
      return 0 === t2 || t2 && "-" !== t2 ? "number" == (r2 = typeof t2) || "bigint" == r2 ? t2 : +(t2 = (t2 = e2 ? $2(t2, e2) : t2).replace && (n2 && (t2 = t2.replace(n2, "")), a2) ? t2.replace(a2, "") : t2) : -1 / 0;
    }
    function Me(n2) {
      P.each({ num: function(t2) {
        return ke(t2, n2);
      }, "num-fmt": function(t2) {
        return ke(t2, n2, q);
      }, "html-num": function(t2) {
        return ke(t2, n2, V);
      }, "html-num-fmt": function(t2) {
        return ke(t2, n2, V, q);
      } }, function(t2, e2) {
        p.type.order[t2 + n2 + "-pre"] = e2, t2.match(/^html\-/) && (p.type.search[t2 + n2] = p.type.search.html);
      });
    }
    P.extend(p.type.order, { "date-pre": function(t2) {
      t2 = Date.parse(t2);
      return isNaN(t2) ? -1 / 0 : t2;
    }, "html-pre": function(t2) {
      return h(t2) ? "" : t2.replace ? t2.replace(/<.*?>/g, "").toLowerCase() : t2 + "";
    }, "string-pre": function(t2) {
      return h(t2) ? "" : "string" == typeof t2 ? t2.toLowerCase() : t2.toString ? t2.toString() : "";
    }, "string-asc": function(t2, e2) {
      return t2 < e2 ? -1 : e2 < t2 ? 1 : 0;
    }, "string-desc": function(t2, e2) {
      return t2 < e2 ? 1 : e2 < t2 ? -1 : 0;
    } }), Me(""), P.extend(true, w.ext.renderer, { header: { _: function(r2, o2, i2, l2) {
      P(r2.nTable).on("order.dt.DT", function(t2, e2, n2, a2) {
        r2 === e2 && (e2 = i2.idx, o2.removeClass(l2.sSortAsc + " " + l2.sSortDesc).addClass("asc" == a2[e2] ? l2.sSortAsc : "desc" == a2[e2] ? l2.sSortDesc : i2.sSortingClass));
      });
    }, jqueryui: function(r2, o2, i2, l2) {
      P("<div/>").addClass(l2.sSortJUIWrapper).append(o2.contents()).append(P("<span/>").addClass(l2.sSortIcon + " " + i2.sSortingClassJUI)).appendTo(o2), P(r2.nTable).on("order.dt.DT", function(t2, e2, n2, a2) {
        r2 === e2 && (e2 = i2.idx, o2.removeClass(l2.sSortAsc + " " + l2.sSortDesc).addClass("asc" == a2[e2] ? l2.sSortAsc : "desc" == a2[e2] ? l2.sSortDesc : i2.sSortingClass), o2.find("span." + l2.sSortIcon).removeClass(l2.sSortJUIAsc + " " + l2.sSortJUIDesc + " " + l2.sSortJUI + " " + l2.sSortJUIAscAllowed + " " + l2.sSortJUIDescAllowed).addClass("asc" == a2[e2] ? l2.sSortJUIAsc : "desc" == a2[e2] ? l2.sSortJUIDesc : i2.sSortingClassJUI));
      });
    } } });
    function We(t2) {
      return "string" == typeof (t2 = Array.isArray(t2) ? t2.join(",") : t2) ? t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t2;
    }
    function Ee(t2, e2, n2, a2, r2) {
      return j.moment ? t2[e2](r2) : j.luxon ? t2[n2](r2) : a2 ? t2[a2](r2) : t2;
    }
    var Be = false;
    function Ue(t2, e2, n2) {
      var a2;
      if (j.moment) {
        if (!(a2 = j.moment.utc(t2, e2, n2, true)).isValid()) return null;
      } else if (j.luxon) {
        if (!(a2 = e2 && "string" == typeof t2 ? j.luxon.DateTime.fromFormat(t2, e2) : j.luxon.DateTime.fromISO(t2)).isValid) return null;
        a2.setLocale(n2);
      } else e2 ? (Be || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), Be = true) : a2 = new Date(t2);
      return a2;
    }
    function Ve(s2) {
      return function(a2, r2, o2, i2) {
        0 === arguments.length ? (o2 = "en", a2 = r2 = null) : 1 === arguments.length ? (o2 = "en", r2 = a2, a2 = null) : 2 === arguments.length && (o2 = r2, r2 = a2, a2 = null);
        var l2 = "datetime-" + r2;
        return w.ext.type.order[l2] || (w.ext.type.detect.unshift(function(t2) {
          return t2 === l2 && l2;
        }), w.ext.type.order[l2 + "-asc"] = function(t2, e2) {
          t2 = t2.valueOf(), e2 = e2.valueOf();
          return t2 === e2 ? 0 : t2 < e2 ? -1 : 1;
        }, w.ext.type.order[l2 + "-desc"] = function(t2, e2) {
          t2 = t2.valueOf(), e2 = e2.valueOf();
          return t2 === e2 ? 0 : e2 < t2 ? -1 : 1;
        }), function(t2, e2) {
          var n2;
          return null !== t2 && t2 !== H || (t2 = "--now" === i2 ? (n2 = /* @__PURE__ */ new Date(), new Date(Date.UTC(n2.getFullYear(), n2.getMonth(), n2.getDate(), n2.getHours(), n2.getMinutes(), n2.getSeconds()))) : ""), "type" === e2 ? l2 : "" === t2 ? "sort" !== e2 ? "" : Ue("0000-01-01 00:00:00", null, o2) : !(null === r2 || a2 !== r2 || "sort" === e2 || "type" === e2 || t2 instanceof Date) || null === (n2 = Ue(t2, a2, o2)) ? t2 : "sort" === e2 ? n2 : (t2 = null === r2 ? Ee(n2, "toDate", "toJSDate", "")[s2]() : Ee(n2, "format", "toFormat", "toISOString", r2), "display" === e2 ? We(t2) : t2);
        };
      };
    }
    var Xe = ",", Je = ".";
    if (j.Intl !== H) try {
      for (var qe = new Intl.NumberFormat().formatToParts(100000.1), n = 0; n < qe.length; n++) "group" === qe[n].type ? Xe = qe[n].value : "decimal" === qe[n].type && (Je = qe[n].value);
    } catch (t2) {
    }
    function $e(e2) {
      return function() {
        var t2 = [ge(this[w.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
        return w.ext.internal[e2].apply(this, t2);
      };
    }
    return w.datetime = function(n2, a2) {
      var r2 = "datetime-detect-" + n2;
      a2 = a2 || "en", w.ext.type.order[r2] || (w.ext.type.detect.unshift(function(t2) {
        var e2 = Ue(t2, n2, a2);
        return !("" !== t2 && !e2) && r2;
      }), w.ext.type.order[r2 + "-pre"] = function(t2) {
        return Ue(t2, n2, a2) || 0;
      });
    }, w.render = { date: Ve("toLocaleDateString"), datetime: Ve("toLocaleString"), time: Ve("toLocaleTimeString"), number: function(a2, r2, o2, i2, l2) {
      return null !== a2 && a2 !== H || (a2 = Xe), null !== r2 && r2 !== H || (r2 = Je), { display: function(t2) {
        if ("number" != typeof t2 && "string" != typeof t2) return t2;
        if ("" === t2 || null === t2) return t2;
        var e2 = t2 < 0 ? "-" : "", n2 = parseFloat(t2);
        if (isNaN(n2)) return We(t2);
        n2 = n2.toFixed(o2), t2 = Math.abs(n2);
        n2 = parseInt(t2, 10), t2 = o2 ? r2 + (t2 - n2).toFixed(o2).substring(2) : "";
        return (e2 = 0 === n2 && 0 === parseFloat(t2) ? "" : e2) + (i2 || "") + n2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a2) + t2 + (l2 || "");
      } };
    }, text: function() {
      return { display: We, filter: We };
    } }, P.extend(w.ext.internal, { _fnExternApiFunc: $e, _fnBuildAjax: Tt, _fnAjaxUpdate: xt, _fnAjaxParameters: At, _fnAjaxUpdateDraw: It, _fnAjaxDataSrc: Ft, _fnAddColumn: nt, _fnColumnOptions: at, _fnAdjustColumnSizing: O, _fnVisibleToColumnIndex: rt, _fnColumnIndexToVisible: ot, _fnVisbleColumns: T, _fnGetColumns: it, _fnColumnTypes: lt, _fnApplyColumnDefs: st, _fnHungarianMap: i, _fnCamelToHungarian: C, _fnLanguageCompat: Z, _fnBrowserDetect: tt, _fnAddData: x, _fnAddTr: ut, _fnNodeToDataIndex: function(t2, e2) {
      return e2._DT_RowIndex !== H ? e2._DT_RowIndex : null;
    }, _fnNodeToColumnIndex: function(t2, e2, n2) {
      return P.inArray(n2, t2.aoData[e2].anCells);
    }, _fnGetCellData: S, _fnSetCellData: ct, _fnSplitObjNotation: dt, _fnGetObjectDataFn: A, _fnSetObjectDataFn: b, _fnGetDataMaster: ht, _fnClearTable: pt, _fnDeleteIndex: gt, _fnInvalidate: bt, _fnGetRowElements: mt, _fnCreateTr: St, _fnBuildHead: yt, _fnDrawHead: Dt, _fnDraw: y, _fnReDraw: u, _fnAddOptionsHtml: _t, _fnDetectHeader: wt, _fnGetUniqueThs: Ct, _fnFeatureHtmlFilter: Lt, _fnFilterComplete: Rt, _fnFilterCustom: Pt, _fnFilterColumn: jt, _fnFilter: Ht, _fnFilterCreateSearch: Nt, _fnEscapeRegex: Ot, _fnFilterData: Wt, _fnFeatureHtmlInfo: Ut, _fnUpdateInfo: Vt, _fnInfoMacros: Xt, _fnInitialise: Jt, _fnInitComplete: qt, _fnLengthChange: $t, _fnFeatureHtmlLength: Gt, _fnFeatureHtmlPaginate: zt, _fnPageChange: Yt, _fnFeatureHtmlProcessing: Zt, _fnProcessingDisplay: D, _fnFeatureHtmlTable: Kt, _fnScrollDraw: Qt, _fnApplyToChildren: k, _fnCalculateColumnWidths: ee, _fnThrottle: ne, _fnConvertToWidth: ae, _fnGetWidestNode: re, _fnGetMaxLenString: oe, _fnStringToCss: M, _fnSortFlatten: I, _fnSort: ie, _fnSortAria: le, _fnSortListener: se, _fnSortAttachListener: ue, _fnSortingClasses: ce, _fnSortData: fe, _fnSaveState: de, _fnLoadState: he, _fnImplementState: pe, _fnSettingsFromNode: ge, _fnLog: W, _fnMap: F, _fnBindAction: me, _fnCallbackReg: L, _fnCallbackFire: R, _fnLengthOverflow: Se, _fnRenderer: ve, _fnDataSource: E, _fnRowAttributes: vt, _fnExtend: be, _fnCalculateEnd: function() {
    } }), ((P.fn.dataTable = w).$ = P).fn.dataTableSettings = w.settings, P.fn.dataTableExt = w.ext, P.fn.DataTable = function(t2) {
      return P(this).dataTable(t2).api();
    }, P.each(w, function(t2, e2) {
      P.fn.DataTable[t2] = e2;
    }), w;
  });
  "function" != typeof Object.create && (Object.create = function(t) {
    function o() {
    }
    return o.prototype = t, new o();
  }), function(t, o, i, s) {
    var n = { _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"], _defaultIcons: ["success", "error", "info", "warning"], init: function(o2, i2) {
      this.prepareOptions(o2, t.toast.options), this.process();
    }, prepareOptions: function(o2, i2) {
      var s2 = {};
      "string" == typeof o2 || o2 instanceof Array ? s2.text = o2 : s2 = o2, this.options = t.extend({}, i2, s2);
    }, process: function() {
      this.setup(), this.addToDom(), this.position(), this.bindToast(), this.animate();
    }, setup: function() {
      var o2 = "";
      if (this._toastEl = this._toastEl || t("<div></div>", { class: "jq-toast-single" }), o2 += '<span class="jq-toast-loader"></span>', this.options.allowToastClose && (o2 += '<span class="close-jq-toast-single">&times;</span>'), this.options.text instanceof Array) {
        this.options.heading && (o2 += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), o2 += '<ul class="jq-toast-ul">';
        for (var i2 = 0; i2 < this.options.text.length; i2++) o2 += '<li class="jq-toast-li" id="jq-toast-item-' + i2 + '">' + this.options.text[i2] + "</li>";
        o2 += "</ul>";
      } else this.options.heading && (o2 += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), o2 += this.options.text;
      this._toastEl.html(o2), false !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor), false !== this.options.textColor && this._toastEl.css("color", this.options.textColor), this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign), false !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== t.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon)), false !== this.options.class && this._toastEl.addClass(this.options.class);
    }, position: function() {
      "string" == typeof this.options.position && -1 !== t.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({ left: t(o).outerWidth() / 2 - this._container.outerWidth() / 2, bottom: 20 }) : "top-center" === this.options.position ? this._container.css({ left: t(o).outerWidth() / 2 - this._container.outerWidth() / 2, top: 20 }) : "mid-center" === this.options.position ? this._container.css({ left: t(o).outerWidth() / 2 - this._container.outerWidth() / 2, top: t(o).outerHeight() / 2 - this._container.outerHeight() / 2 }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({ top: this.options.position.top ? this.options.position.top : "auto", bottom: this.options.position.bottom ? this.options.position.bottom : "auto", left: this.options.position.left ? this.options.position.left : "auto", right: this.options.position.right ? this.options.position.right : "auto" }) : this._container.addClass("bottom-left");
    }, bindToast: function() {
      var t2 = this;
      this._toastEl.on("afterShown", function() {
        t2.processLoader();
      }), this._toastEl.find(".close-jq-toast-single").on("click", function(o2) {
        o2.preventDefault(), "fade" === t2.options.showHideTransition ? (t2._toastEl.trigger("beforeHide"), t2._toastEl.fadeOut(function() {
          t2._toastEl.trigger("afterHidden");
        })) : "slide" === t2.options.showHideTransition ? (t2._toastEl.trigger("beforeHide"), t2._toastEl.slideUp(function() {
          t2._toastEl.trigger("afterHidden");
        })) : (t2._toastEl.trigger("beforeHide"), t2._toastEl.hide(function() {
          t2._toastEl.trigger("afterHidden");
        }));
      }), "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow", function() {
        t2.options.beforeShow(t2._toastEl);
      }), "function" == typeof this.options.afterShown && this._toastEl.on("afterShown", function() {
        t2.options.afterShown(t2._toastEl);
      }), "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide", function() {
        t2.options.beforeHide(t2._toastEl);
      }), "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden", function() {
        t2.options.afterHidden(t2._toastEl);
      }), "function" == typeof this.options.onClick && this._toastEl.on("click", function() {
        t2.options.onClick(t2._toastEl);
      });
    }, addToDom: function() {
      var o2 = t(".jq-toast-wrap");
      if (0 === o2.length ? (o2 = t("<div></div>", { class: "jq-toast-wrap", role: "alert", "aria-live": "polite" }), t("body").append(o2)) : this.options.stack && !isNaN(parseInt(this.options.stack, 10)) || o2.empty(), o2.find(".jq-toast-single:hidden").remove(), o2.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
        var i2 = o2.find(".jq-toast-single").length - this.options.stack;
        i2 > 0 && t(".jq-toast-wrap").find(".jq-toast-single").slice(0, i2).remove();
      }
      this._container = o2;
    }, canAutoHide: function() {
      return false !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10));
    }, processLoader: function() {
      if (!this.canAutoHide() || false === this.options.loader) return false;
      var t2 = this._toastEl.find(".jq-toast-loader"), o2 = (this.options.hideAfter - 400) / 1e3 + "s", i2 = this.options.loaderBg, s2 = t2.attr("style") || "";
      s2 = s2.substring(0, s2.indexOf("-webkit-transition")), s2 += "-webkit-transition: width " + o2 + " ease-in;                       -o-transition: width " + o2 + " ease-in;                       transition: width " + o2 + " ease-in;                       background-color: " + i2 + ";", t2.attr("style", s2).addClass("jq-toast-loaded");
    }, animate: function() {
      t2 = this;
      if (this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function() {
        t2._toastEl.trigger("afterShown");
      }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function() {
        t2._toastEl.trigger("afterShown");
      }) : this._toastEl.show(function() {
        t2._toastEl.trigger("afterShown");
      }), this.canAutoHide()) {
        var t2 = this;
        o.setTimeout(function() {
          "fade" === t2.options.showHideTransition.toLowerCase() ? (t2._toastEl.trigger("beforeHide"), t2._toastEl.fadeOut(function() {
            t2._toastEl.trigger("afterHidden");
          })) : "slide" === t2.options.showHideTransition.toLowerCase() ? (t2._toastEl.trigger("beforeHide"), t2._toastEl.slideUp(function() {
            t2._toastEl.trigger("afterHidden");
          })) : (t2._toastEl.trigger("beforeHide"), t2._toastEl.hide(function() {
            t2._toastEl.trigger("afterHidden");
          }));
        }, this.options.hideAfter);
      }
    }, reset: function(o2) {
      "all" === o2 ? t(".jq-toast-wrap").remove() : this._toastEl.remove();
    }, update: function(t2) {
      this.prepareOptions(t2, this.options), this.setup(), this.bindToast();
    }, close: function() {
      this._toastEl.find(".close-jq-toast-single").click();
    } };
    t.toast = function(t2) {
      var o2 = Object.create(n);
      return o2.init(t2, this), { reset: function(t3) {
        o2.reset(t3);
      }, update: function(t3) {
        o2.update(t3);
      }, close: function() {
        o2.close();
      } };
    }, t.toast.options = { text: "", heading: "", showHideTransition: "fade", allowToastClose: true, hideAfter: 3e3, loader: true, loaderBg: "#9EC600", stack: 5, position: "bottom-left", bgColor: false, textColor: false, textAlign: "left", icon: false, beforeShow: function() {
    }, afterShown: function() {
    }, beforeHide: function() {
    }, afterHidden: function() {
    }, onClick: function() {
    } };
  }(jQuery, window);
  /*! Select2 4.1.0-beta.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
  !function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
      return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t;
    } : n(jQuery);
  }(function(u) {
    var e = function() {
      if (u && u.fn && u.fn.select2 && u.fn.select2.amd) var e2 = u.fn.select2.amd;
      var t2, n, i, h, s, o, f, g, m, v, y, _, r, a, b;
      function w(e3, t3) {
        return r.call(e3, t3);
      }
      function l(e3, t3) {
        var n2, i2, r2, s2, o2, a2, l2, c2, u2, d, p, h2 = t3 && t3.split("/"), f2 = y.map, g2 = f2 && f2["*"] || {};
        if (e3) {
          for (o2 = (e3 = e3.split("/")).length - 1, y.nodeIdCompat && b.test(e3[o2]) && (e3[o2] = e3[o2].replace(b, "")), "." === e3[0].charAt(0) && h2 && (e3 = h2.slice(0, h2.length - 1).concat(e3)), u2 = 0; u2 < e3.length; u2++) if ("." === (p = e3[u2])) e3.splice(u2, 1), --u2;
          else if (".." === p) {
            if (0 === u2 || 1 === u2 && ".." === e3[2] || ".." === e3[u2 - 1]) continue;
            0 < u2 && (e3.splice(u2 - 1, 2), u2 -= 2);
          }
          e3 = e3.join("/");
        }
        if ((h2 || g2) && f2) {
          for (u2 = (n2 = e3.split("/")).length; 0 < u2; --u2) {
            if (i2 = n2.slice(0, u2).join("/"), h2) {
              for (d = h2.length; 0 < d; --d) if (r2 = (r2 = f2[h2.slice(0, d).join("/")]) && r2[i2]) {
                s2 = r2, a2 = u2;
                break;
              }
            }
            if (s2) break;
            !l2 && g2 && g2[i2] && (l2 = g2[i2], c2 = u2);
          }
          !s2 && l2 && (s2 = l2, a2 = c2), s2 && (n2.splice(0, a2, s2), e3 = n2.join("/"));
        }
        return e3;
      }
      function x(t3, n2) {
        return function() {
          var e3 = a.call(arguments, 0);
          return "string" != typeof e3[0] && 1 === e3.length && e3.push(null), o.apply(h, e3.concat([t3, n2]));
        };
      }
      function A(t3) {
        return function(e3) {
          m[t3] = e3;
        };
      }
      function D(e3) {
        if (w(v, e3)) {
          var t3 = v[e3];
          delete v[e3], _[e3] = true, s.apply(h, t3);
        }
        if (!w(m, e3) && !w(_, e3)) throw new Error("No " + e3);
        return m[e3];
      }
      function c(e3) {
        var t3, n2 = e3 ? e3.indexOf("!") : -1;
        return -1 < n2 && (t3 = e3.substring(0, n2), e3 = e3.substring(n2 + 1, e3.length)), [t3, e3];
      }
      function S(e3) {
        return e3 ? c(e3) : [];
      }
      return e2 && e2.requirejs || (e2 ? n = e2 : e2 = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, b = /\.js$/, f = function(e3, t3) {
        var n2, i2, r2 = c(e3), s2 = r2[0], o2 = t3[1];
        return e3 = r2[1], s2 && (n2 = D(s2 = l(s2, o2))), s2 ? e3 = n2 && n2.normalize ? n2.normalize(e3, (i2 = o2, function(e4) {
          return l(e4, i2);
        })) : l(e3, o2) : (s2 = (r2 = c(e3 = l(e3, o2)))[0], e3 = r2[1], s2 && (n2 = D(s2))), { f: s2 ? s2 + "!" + e3 : e3, n: e3, pr: s2, p: n2 };
      }, g = { require: function(e3) {
        return x(e3);
      }, exports: function(e3) {
        var t3 = m[e3];
        return void 0 !== t3 ? t3 : m[e3] = {};
      }, module: function(e3) {
        return { id: e3, uri: "", exports: m[e3], config: (t3 = e3, function() {
          return y && y.config && y.config[t3] || {};
        }) };
        var t3;
      } }, s = function(e3, t3, n2, i2) {
        var r2, s2, o2, a2, l2, c2, u2, d = [], p = typeof n2;
        if (c2 = S(i2 = i2 || e3), "undefined" == p || "function" == p) {
          for (t3 = !t3.length && n2.length ? ["require", "exports", "module"] : t3, l2 = 0; l2 < t3.length; l2 += 1) if ("require" === (s2 = (a2 = f(t3[l2], c2)).f)) d[l2] = g.require(e3);
          else if ("exports" === s2) d[l2] = g.exports(e3), u2 = true;
          else if ("module" === s2) r2 = d[l2] = g.module(e3);
          else if (w(m, s2) || w(v, s2) || w(_, s2)) d[l2] = D(s2);
          else {
            if (!a2.p) throw new Error(e3 + " missing " + s2);
            a2.p.load(a2.n, x(i2, true), A(s2), {}), d[l2] = m[s2];
          }
          o2 = n2 ? n2.apply(m[e3], d) : void 0, e3 && (r2 && r2.exports !== h && r2.exports !== m[e3] ? m[e3] = r2.exports : o2 === h && u2 || (m[e3] = o2));
        } else e3 && (m[e3] = n2);
      }, t2 = n = o = function(e3, t3, n2, i2, r2) {
        if ("string" == typeof e3) return g[e3] ? g[e3](t3) : D(f(e3, S(t3)).f);
        if (!e3.splice) {
          if ((y = e3).deps && o(y.deps, y.callback), !t3) return;
          t3.splice ? (e3 = t3, t3 = n2, n2 = null) : e3 = h;
        }
        return t3 = t3 || function() {
        }, "function" == typeof n2 && (n2 = i2, i2 = r2), i2 ? s(h, e3, t3, n2) : setTimeout(function() {
          s(h, e3, t3, n2);
        }, 4), o;
      }, o.config = function(e3) {
        return o(e3);
      }, t2._defined = m, (i = function(e3, t3, n2) {
        if ("string" != typeof e3) throw new Error("See almond README: incorrect module build, no module name");
        t3.splice || (n2 = t3, t3 = []), w(m, e3) || w(v, e3) || (v[e3] = [e3, t3, n2]);
      }).amd = { jQuery: true }, e2.requirejs = t2, e2.require = n, e2.define = i), e2.define("almond", function() {
      }), e2.define("jquery", [], function() {
        var e3 = u || $;
        return null == e3 && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e3;
      }), e2.define("select2/utils", ["jquery"], function(s2) {
        var r2 = {};
        function u2(e4) {
          var t3 = e4.prototype, n3 = [];
          for (var i2 in t3) {
            "function" == typeof t3[i2] && "constructor" !== i2 && n3.push(i2);
          }
          return n3;
        }
        r2.Extend = function(e4, t3) {
          var n3 = {}.hasOwnProperty;
          function i2() {
            this.constructor = e4;
          }
          for (var r3 in t3) n3.call(t3, r3) && (e4[r3] = t3[r3]);
          return i2.prototype = t3.prototype, e4.prototype = new i2(), e4.__super__ = t3.prototype, e4;
        }, r2.Decorate = function(i2, r3) {
          var e4 = u2(r3), t3 = u2(i2);
          function s3() {
            var e5 = Array.prototype.unshift, t4 = r3.prototype.constructor.length, n4 = i2.prototype.constructor;
            0 < t4 && (e5.call(arguments, i2.prototype.constructor), n4 = r3.prototype.constructor), n4.apply(this, arguments);
          }
          r3.displayName = i2.displayName, s3.prototype = new function() {
            this.constructor = s3;
          }();
          for (var n3 = 0; n3 < t3.length; n3++) {
            var o2 = t3[n3];
            s3.prototype[o2] = i2.prototype[o2];
          }
          function a2(e5) {
            var t4 = function() {
            };
            e5 in s3.prototype && (t4 = s3.prototype[e5]);
            var n4 = r3.prototype[e5];
            return function() {
              return Array.prototype.unshift.call(arguments, t4), n4.apply(this, arguments);
            };
          }
          for (var l2 = 0; l2 < e4.length; l2++) {
            var c2 = e4[l2];
            s3.prototype[c2] = a2(c2);
          }
          return s3;
        };
        function e3() {
          this.listeners = {};
        }
        e3.prototype.on = function(e4, t3) {
          this.listeners = this.listeners || {}, e4 in this.listeners ? this.listeners[e4].push(t3) : this.listeners[e4] = [t3];
        }, e3.prototype.trigger = function(e4) {
          var t3 = Array.prototype.slice, n3 = t3.call(arguments, 1);
          this.listeners = this.listeners || {}, null == n3 && (n3 = []), 0 === n3.length && n3.push({}), (n3[0]._type = e4) in this.listeners && this.invoke(this.listeners[e4], t3.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, e3.prototype.invoke = function(e4, t3) {
          for (var n3 = 0, i2 = e4.length; n3 < i2; n3++) e4[n3].apply(this, t3);
        }, r2.Observable = e3, r2.generateChars = function(e4) {
          for (var t3 = "", n3 = 0; n3 < e4; n3++) {
            t3 += Math.floor(36 * Math.random()).toString(36);
          }
          return t3;
        }, r2.bind = function(e4, t3) {
          return function() {
            e4.apply(t3, arguments);
          };
        }, r2._convertData = function(e4) {
          for (var t3 in e4) {
            var n3 = t3.split("-"), i2 = e4;
            if (1 !== n3.length) {
              for (var r3 = 0; r3 < n3.length; r3++) {
                var s3 = n3[r3];
                (s3 = s3.substring(0, 1).toLowerCase() + s3.substring(1)) in i2 || (i2[s3] = {}), r3 == n3.length - 1 && (i2[s3] = e4[t3]), i2 = i2[s3];
              }
              delete e4[t3];
            }
          }
          return e4;
        }, r2.hasScroll = function(e4, t3) {
          var n3 = s2(t3), i2 = t3.style.overflowX, r3 = t3.style.overflowY;
          return (i2 !== r3 || "hidden" !== r3 && "visible" !== r3) && ("scroll" === i2 || "scroll" === r3 || (n3.innerHeight() < t3.scrollHeight || n3.innerWidth() < t3.scrollWidth));
        }, r2.escapeMarkup = function(e4) {
          var t3 = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
          return "string" != typeof e4 ? e4 : String(e4).replace(/[&<>"'\/\\]/g, function(e5) {
            return t3[e5];
          });
        }, r2.__cache = {};
        var n2 = 0;
        return r2.GetUniqueElementId = function(e4) {
          var t3 = e4.getAttribute("data-select2-id");
          return null != t3 || (t3 = e4.id ? "select2-data-" + e4.id : "select2-data-" + (++n2).toString() + "-" + r2.generateChars(4), e4.setAttribute("data-select2-id", t3)), t3;
        }, r2.StoreData = function(e4, t3, n3) {
          var i2 = r2.GetUniqueElementId(e4);
          r2.__cache[i2] || (r2.__cache[i2] = {}), r2.__cache[i2][t3] = n3;
        }, r2.GetData = function(e4, t3) {
          var n3 = r2.GetUniqueElementId(e4);
          return t3 ? r2.__cache[n3] && null != r2.__cache[n3][t3] ? r2.__cache[n3][t3] : s2(e4).data(t3) : r2.__cache[n3];
        }, r2.RemoveData = function(e4) {
          var t3 = r2.GetUniqueElementId(e4);
          null != r2.__cache[t3] && delete r2.__cache[t3], e4.removeAttribute("data-select2-id");
        }, r2.copyNonInternalCssClasses = function(e4, t3) {
          var n3 = e4.getAttribute("class").trim().split(/\s+/);
          n3 = n3.filter(function(e5) {
            return 0 === e5.indexOf("select2-");
          });
          var i2 = t3.getAttribute("class").trim().split(/\s+/);
          i2 = i2.filter(function(e5) {
            return 0 !== e5.indexOf("select2-");
          });
          var r3 = n3.concat(i2);
          e4.setAttribute("class", r3.join(" "));
        }, r2;
      }), e2.define("select2/results", ["jquery", "./utils"], function(h2, f2) {
        function i2(e3, t3, n2) {
          this.$element = e3, this.data = n2, this.options = t3, i2.__super__.constructor.call(this);
        }
        return f2.Extend(i2, f2.Observable), i2.prototype.render = function() {
          var e3 = h2('<ul class="select2-results__options" role="listbox"></ul>');
          return this.options.get("multiple") && e3.attr("aria-multiselectable", "true"), this.$results = e3;
        }, i2.prototype.clear = function() {
          this.$results.empty();
        }, i2.prototype.displayMessage = function(e3) {
          var t3 = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var n2 = h2('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'), i3 = this.options.get("translations").get(e3.message);
          n2.append(t3(i3(e3.args))), n2[0].className += " select2-results__message", this.$results.append(n2);
        }, i2.prototype.hideMessages = function() {
          this.$results.find(".select2-results__message").remove();
        }, i2.prototype.append = function(e3) {
          this.hideLoading();
          var t3 = [];
          if (null != e3.results && 0 !== e3.results.length) {
            e3.results = this.sort(e3.results);
            for (var n2 = 0; n2 < e3.results.length; n2++) {
              var i3 = e3.results[n2], r2 = this.option(i3);
              t3.push(r2);
            }
            this.$results.append(t3);
          } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" });
        }, i2.prototype.position = function(e3, t3) {
          t3.find(".select2-results").append(e3);
        }, i2.prototype.sort = function(e3) {
          return this.options.get("sorter")(e3);
        }, i2.prototype.highlightFirstItem = function() {
          var e3 = this.$results.find(".select2-results__option--selectable"), t3 = e3.filter(".select2-results__option--selected");
          0 < t3.length ? t3.first().trigger("mouseenter") : e3.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, i2.prototype.setClasses = function() {
          var t3 = this;
          this.data.current(function(e3) {
            var i3 = e3.map(function(e4) {
              return e4.id.toString();
            });
            t3.$results.find(".select2-results__option--selectable").each(function() {
              var e4 = h2(this), t4 = f2.GetData(this, "data"), n2 = "" + t4.id;
              null != t4.element && t4.element.selected || null == t4.element && -1 < i3.indexOf(n2) ? (this.classList.add("select2-results__option--selected"), e4.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), e4.attr("aria-selected", "false"));
            });
          });
        }, i2.prototype.showLoading = function(e3) {
          this.hideLoading();
          var t3 = { disabled: true, loading: true, text: this.options.get("translations").get("searching")(e3) }, n2 = this.option(t3);
          n2.className += " loading-results", this.$results.prepend(n2);
        }, i2.prototype.hideLoading = function() {
          this.$results.find(".loading-results").remove();
        }, i2.prototype.option = function(e3) {
          var t3 = document.createElement("li");
          t3.classList.add("select2-results__option"), t3.classList.add("select2-results__option--selectable");
          var n2 = { role: "option" }, i3 = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
          for (var r2 in (null != e3.element && i3.call(e3.element, ":disabled") || null == e3.element && e3.disabled) && (n2["aria-disabled"] = "true", t3.classList.remove("select2-results__option--selectable"), t3.classList.add("select2-results__option--disabled")), null == e3.id && t3.classList.remove("select2-results__option--selectable"), null != e3._resultId && (t3.id = e3._resultId), e3.title && (t3.title = e3.title), e3.children && (n2.role = "group", n2["aria-label"] = e3.text, t3.classList.remove("select2-results__option--selectable"), t3.classList.add("select2-results__option--group")), n2) {
            var s2 = n2[r2];
            t3.setAttribute(r2, s2);
          }
          if (e3.children) {
            var o2 = h2(t3), a2 = document.createElement("strong");
            a2.className = "select2-results__group", this.template(e3, a2);
            for (var l2 = [], c2 = 0; c2 < e3.children.length; c2++) {
              var u2 = e3.children[c2], d = this.option(u2);
              l2.push(d);
            }
            var p = h2("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
            p.append(l2), o2.append(a2), o2.append(p);
          } else this.template(e3, t3);
          return f2.StoreData(t3, "data", e3), t3;
        }, i2.prototype.bind = function(t3, e3) {
          var l2 = this, n2 = t3.id + "-results";
          this.$results.attr("id", n2), t3.on("results:all", function(e4) {
            l2.clear(), l2.append(e4.data), t3.isOpen() && (l2.setClasses(), l2.highlightFirstItem());
          }), t3.on("results:append", function(e4) {
            l2.append(e4.data), t3.isOpen() && l2.setClasses();
          }), t3.on("query", function(e4) {
            l2.hideMessages(), l2.showLoading(e4);
          }), t3.on("select", function() {
            t3.isOpen() && (l2.setClasses(), l2.options.get("scrollAfterSelect") && l2.highlightFirstItem());
          }), t3.on("unselect", function() {
            t3.isOpen() && (l2.setClasses(), l2.options.get("scrollAfterSelect") && l2.highlightFirstItem());
          }), t3.on("open", function() {
            l2.$results.attr("aria-expanded", "true"), l2.$results.attr("aria-hidden", "false"), l2.setClasses(), l2.ensureHighlightVisible();
          }), t3.on("close", function() {
            l2.$results.attr("aria-expanded", "false"), l2.$results.attr("aria-hidden", "true"), l2.$results.removeAttr("aria-activedescendant");
          }), t3.on("results:toggle", function() {
            var e4 = l2.getHighlightedResults();
            0 !== e4.length && e4.trigger("mouseup");
          }), t3.on("results:select", function() {
            var e4 = l2.getHighlightedResults();
            if (0 !== e4.length) {
              var t4 = f2.GetData(e4[0], "data");
              e4.hasClass("select2-results__option--selected") ? l2.trigger("close", {}) : l2.trigger("select", { data: t4 });
            }
          }), t3.on("results:previous", function() {
            var e4 = l2.getHighlightedResults(), t4 = l2.$results.find(".select2-results__option--selectable"), n3 = t4.index(e4);
            if (!(n3 <= 0)) {
              var i3 = n3 - 1;
              0 === e4.length && (i3 = 0);
              var r2 = t4.eq(i3);
              r2.trigger("mouseenter");
              var s2 = l2.$results.offset().top, o2 = r2.offset().top, a2 = l2.$results.scrollTop() + (o2 - s2);
              0 === i3 ? l2.$results.scrollTop(0) : o2 - s2 < 0 && l2.$results.scrollTop(a2);
            }
          }), t3.on("results:next", function() {
            var e4 = l2.getHighlightedResults(), t4 = l2.$results.find(".select2-results__option--selectable"), n3 = t4.index(e4) + 1;
            if (!(n3 >= t4.length)) {
              var i3 = t4.eq(n3);
              i3.trigger("mouseenter");
              var r2 = l2.$results.offset().top + l2.$results.outerHeight(false), s2 = i3.offset().top + i3.outerHeight(false), o2 = l2.$results.scrollTop() + s2 - r2;
              0 === n3 ? l2.$results.scrollTop(0) : r2 < s2 && l2.$results.scrollTop(o2);
            }
          }), t3.on("results:focus", function(e4) {
            e4.element[0].classList.add("select2-results__option--highlighted"), e4.element[0].setAttribute("aria-selected", "true");
          }), t3.on("results:message", function(e4) {
            l2.displayMessage(e4);
          }), h2.fn.mousewheel && this.$results.on("mousewheel", function(e4) {
            var t4 = l2.$results.scrollTop(), n3 = l2.$results.get(0).scrollHeight - t4 + e4.deltaY, i3 = 0 < e4.deltaY && t4 - e4.deltaY <= 0, r2 = e4.deltaY < 0 && n3 <= l2.$results.height();
            i3 ? (l2.$results.scrollTop(0), e4.preventDefault(), e4.stopPropagation()) : r2 && (l2.$results.scrollTop(l2.$results.get(0).scrollHeight - l2.$results.height()), e4.preventDefault(), e4.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option--selectable", function(e4) {
            var t4 = h2(this), n3 = f2.GetData(this, "data");
            t4.hasClass("select2-results__option--selected") ? l2.options.get("multiple") ? l2.trigger("unselect", { originalEvent: e4, data: n3 }) : l2.trigger("close", {}) : l2.trigger("select", { originalEvent: e4, data: n3 });
          }), this.$results.on("mouseenter", ".select2-results__option--selectable", function(e4) {
            var t4 = f2.GetData(this, "data");
            l2.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), l2.trigger("results:focus", { data: t4, element: h2(this) });
          });
        }, i2.prototype.getHighlightedResults = function() {
          return this.$results.find(".select2-results__option--highlighted");
        }, i2.prototype.destroy = function() {
          this.$results.remove();
        }, i2.prototype.ensureHighlightVisible = function() {
          var e3 = this.getHighlightedResults();
          if (0 !== e3.length) {
            var t3 = this.$results.find(".select2-results__option--selectable").index(e3), n2 = this.$results.offset().top, i3 = e3.offset().top, r2 = this.$results.scrollTop() + (i3 - n2), s2 = i3 - n2;
            r2 -= 2 * e3.outerHeight(false), t3 <= 2 ? this.$results.scrollTop(0) : (s2 > this.$results.outerHeight() || s2 < 0) && this.$results.scrollTop(r2);
          }
        }, i2.prototype.template = function(e3, t3) {
          var n2 = this.options.get("templateResult"), i3 = this.options.get("escapeMarkup"), r2 = n2(e3, t3);
          null == r2 ? t3.style.display = "none" : "string" == typeof r2 ? t3.innerHTML = i3(r2) : h2(t3).append(r2);
        }, i2;
      }), e2.define("select2/keys", [], function() {
        return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
      }), e2.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n2, i2, r2) {
        function s2(e3, t3) {
          this.$element = e3, this.options = t3, s2.__super__.constructor.call(this);
        }
        return i2.Extend(s2, i2.Observable), s2.prototype.render = function() {
          var e3 = n2('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != i2.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i2.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e3.attr("title", this.$element.attr("title")), e3.attr("tabindex", this._tabindex), e3.attr("aria-disabled", "false"), this.$selection = e3;
        }, s2.prototype.bind = function(e3, t3) {
          var n3 = this, i3 = e3.id + "-results";
          this.container = e3, this.$selection.on("focus", function(e4) {
            n3.trigger("focus", e4);
          }), this.$selection.on("blur", function(e4) {
            n3._handleBlur(e4);
          }), this.$selection.on("keydown", function(e4) {
            n3.trigger("keypress", e4), e4.which === r2.SPACE && e4.preventDefault();
          }), e3.on("results:focus", function(e4) {
            n3.$selection.attr("aria-activedescendant", e4.data._resultId);
          }), e3.on("selection:update", function(e4) {
            n3.update(e4.data);
          }), e3.on("open", function() {
            n3.$selection.attr("aria-expanded", "true"), n3.$selection.attr("aria-owns", i3), n3._attachCloseHandler(e3);
          }), e3.on("close", function() {
            n3.$selection.attr("aria-expanded", "false"), n3.$selection.removeAttr("aria-activedescendant"), n3.$selection.removeAttr("aria-owns"), n3.$selection.trigger("focus"), n3._detachCloseHandler(e3);
          }), e3.on("enable", function() {
            n3.$selection.attr("tabindex", n3._tabindex), n3.$selection.attr("aria-disabled", "false");
          }), e3.on("disable", function() {
            n3.$selection.attr("tabindex", "-1"), n3.$selection.attr("aria-disabled", "true");
          });
        }, s2.prototype._handleBlur = function(e3) {
          var t3 = this;
          window.setTimeout(function() {
            document.activeElement == t3.$selection[0] || n2.contains(t3.$selection[0], document.activeElement) || t3.trigger("blur", e3);
          }, 1);
        }, s2.prototype._attachCloseHandler = function(e3) {
          n2(document.body).on("mousedown.select2." + e3.id, function(e4) {
            var t3 = n2(e4.target).closest(".select2");
            n2(".select2.select2-container--open").each(function() {
              this != t3[0] && i2.GetData(this, "element").select2("close");
            });
          });
        }, s2.prototype._detachCloseHandler = function(e3) {
          n2(document.body).off("mousedown.select2." + e3.id);
        }, s2.prototype.position = function(e3, t3) {
          t3.find(".selection").append(e3);
        }, s2.prototype.destroy = function() {
          this._detachCloseHandler(this.container);
        }, s2.prototype.update = function(e3) {
          throw new Error("The `update` method must be defined in child classes.");
        }, s2.prototype.isEnabled = function() {
          return !this.isDisabled();
        }, s2.prototype.isDisabled = function() {
          return this.options.get("disabled");
        }, s2;
      }), e2.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e3, t3, n2, i2) {
        function r2() {
          r2.__super__.constructor.apply(this, arguments);
        }
        return n2.Extend(r2, t3), r2.prototype.render = function() {
          var e4 = r2.__super__.render.call(this);
          return e4[0].classList.add("select2-selection--single"), e4.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e4;
        }, r2.prototype.bind = function(t4, e4) {
          var n3 = this;
          r2.__super__.bind.apply(this, arguments);
          var i3 = t4.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", i3).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i3), this.$selection.on("mousedown", function(e5) {
            1 === e5.which && n3.trigger("toggle", { originalEvent: e5 });
          }), this.$selection.on("focus", function(e5) {
          }), this.$selection.on("blur", function(e5) {
          }), t4.on("focus", function(e5) {
            t4.isOpen() || n3.$selection.trigger("focus");
          });
        }, r2.prototype.clear = function() {
          var e4 = this.$selection.find(".select2-selection__rendered");
          e4.empty(), e4.removeAttr("title");
        }, r2.prototype.display = function(e4, t4) {
          var n3 = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n3(e4, t4));
        }, r2.prototype.selectionContainer = function() {
          return e3("<span></span>");
        }, r2.prototype.update = function(e4) {
          if (0 !== e4.length) {
            var t4 = e4[0], n3 = this.$selection.find(".select2-selection__rendered"), i3 = this.display(t4, n3);
            n3.empty().append(i3);
            var r3 = t4.title || t4.text;
            r3 ? n3.attr("title", r3) : n3.removeAttr("title");
          } else this.clear();
        }, r2;
      }), e2.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(r2, e3, d) {
        function s2(e4, t3) {
          s2.__super__.constructor.apply(this, arguments);
        }
        return d.Extend(s2, e3), s2.prototype.render = function() {
          var e4 = s2.__super__.render.call(this);
          return e4[0].classList.add("select2-selection--multiple"), e4.html('<ul class="select2-selection__rendered"></ul>'), e4;
        }, s2.prototype.bind = function(e4, t3) {
          var i2 = this;
          s2.__super__.bind.apply(this, arguments);
          var n2 = e4.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", n2), this.$selection.on("click", function(e5) {
            i2.trigger("toggle", { originalEvent: e5 });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function(e5) {
            if (!i2.isDisabled()) {
              var t4 = r2(this).parent(), n3 = d.GetData(t4[0], "data");
              i2.trigger("unselect", { originalEvent: e5, data: n3 });
            }
          }), this.$selection.on("keydown", ".select2-selection__choice__remove", function(e5) {
            i2.isDisabled() || e5.stopPropagation();
          });
        }, s2.prototype.clear = function() {
          var e4 = this.$selection.find(".select2-selection__rendered");
          e4.empty(), e4.removeAttr("title");
        }, s2.prototype.display = function(e4, t3) {
          var n2 = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n2(e4, t3));
        }, s2.prototype.selectionContainer = function() {
          return r2('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
        }, s2.prototype.update = function(e4) {
          if (this.clear(), 0 !== e4.length) {
            for (var t3 = [], n2 = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", i2 = 0; i2 < e4.length; i2++) {
              var r3 = e4[i2], s3 = this.selectionContainer(), o2 = this.display(r3, s3), a2 = n2 + d.generateChars(4) + "-";
              r3.id ? a2 += r3.id : a2 += d.generateChars(4), s3.find(".select2-selection__choice__display").append(o2).attr("id", a2);
              var l2 = r3.title || r3.text;
              l2 && s3.attr("title", l2);
              var c2 = this.options.get("translations").get("removeItem"), u2 = s3.find(".select2-selection__choice__remove");
              u2.attr("title", c2()), u2.attr("aria-label", c2()), u2.attr("aria-describedby", a2), d.StoreData(s3[0], "data", r3), t3.push(s3);
            }
            this.$selection.find(".select2-selection__rendered").append(t3);
          }
        }, s2;
      }), e2.define("select2/selection/placeholder", [], function() {
        function e3(e4, t3, n2) {
          this.placeholder = this.normalizePlaceholder(n2.get("placeholder")), e4.call(this, t3, n2);
        }
        return e3.prototype.normalizePlaceholder = function(e4, t3) {
          return "string" == typeof t3 && (t3 = { id: "", text: t3 }), t3;
        }, e3.prototype.createPlaceholder = function(e4, t3) {
          var n2 = this.selectionContainer();
          return n2.html(this.display(t3)), n2[0].classList.add("select2-selection__placeholder"), n2[0].classList.remove("select2-selection__choice"), n2;
        }, e3.prototype.update = function(e4, t3) {
          var n2 = 1 == t3.length && t3[0].id != this.placeholder.id;
          if (1 < t3.length || n2) return e4.call(this, t3);
          this.clear();
          var i2 = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(i2);
        }, e3;
      }), e2.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(s2, i2, a2) {
        function e3() {
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          var i3 = this;
          e4.call(this, t3, n2), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e5) {
            i3._handleClear(e5);
          }), t3.on("keypress", function(e5) {
            i3._handleKeyboardClear(e5, t3);
          });
        }, e3.prototype._handleClear = function(e4, t3) {
          if (!this.isDisabled()) {
            var n2 = this.$selection.find(".select2-selection__clear");
            if (0 !== n2.length) {
              t3.stopPropagation();
              var i3 = a2.GetData(n2[0], "data"), r2 = this.$element.val();
              this.$element.val(this.placeholder.id);
              var s3 = { data: i3 };
              if (this.trigger("clear", s3), s3.prevented) this.$element.val(r2);
              else {
                for (var o2 = 0; o2 < i3.length; o2++) if (s3 = { data: i3[o2] }, this.trigger("unselect", s3), s3.prevented) return void this.$element.val(r2);
                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, e3.prototype._handleKeyboardClear = function(e4, t3, n2) {
          n2.isOpen() || t3.which != i2.DELETE && t3.which != i2.BACKSPACE || this._handleClear(t3);
        }, e3.prototype.update = function(e4, t3) {
          if (e4.call(this, t3), this.$selection.find(".select2-selection__clear").remove(), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t3.length)) {
            var n2 = this.$selection.find(".select2-selection__rendered").attr("id"), i3 = this.options.get("translations").get("removeAllItems"), r2 = s2('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
            r2.attr("title", i3()), r2.attr("aria-label", i3()), r2.attr("aria-describedby", n2), a2.StoreData(r2[0], "data", t3), this.$selection.prepend(r2);
          }
        }, e3;
      }), e2.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(i2, l2, c2) {
        function e3(e4, t3, n2) {
          e4.call(this, t3, n2);
        }
        return e3.prototype.render = function(e4) {
          var t3 = i2('<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          this.$searchContainer = t3, this.$search = t3.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete"));
          var n2 = e4.call(this);
          return this._transferTabIndex(), n2.append(this.$searchContainer), n2;
        }, e3.prototype.bind = function(e4, t3, n2) {
          var i3 = this, r2 = t3.id + "-results", s2 = t3.id + "-container";
          e4.call(this, t3, n2), i3.$search.attr("aria-describedby", s2), t3.on("open", function() {
            i3.$search.attr("aria-controls", r2), i3.$search.trigger("focus");
          }), t3.on("close", function() {
            i3.$search.val(""), i3.resizeSearch(), i3.$search.removeAttr("aria-controls"), i3.$search.removeAttr("aria-activedescendant"), i3.$search.trigger("focus");
          }), t3.on("enable", function() {
            i3.$search.prop("disabled", false), i3._transferTabIndex();
          }), t3.on("disable", function() {
            i3.$search.prop("disabled", true);
          }), t3.on("focus", function(e5) {
            i3.$search.trigger("focus");
          }), t3.on("results:focus", function(e5) {
            e5.data._resultId ? i3.$search.attr("aria-activedescendant", e5.data._resultId) : i3.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function(e5) {
            i3.trigger("focus", e5);
          }), this.$selection.on("focusout", ".select2-search--inline", function(e5) {
            i3._handleBlur(e5);
          }), this.$selection.on("keydown", ".select2-search--inline", function(e5) {
            if (e5.stopPropagation(), i3.trigger("keypress", e5), i3._keyUpPrevented = e5.isDefaultPrevented(), e5.which === c2.BACKSPACE && "" === i3.$search.val()) {
              var t4 = i3.$selection.find(".select2-selection__choice").last();
              if (0 < t4.length) {
                var n3 = l2.GetData(t4[0], "data");
                i3.searchRemoveChoice(n3), e5.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function(e5) {
            i3.$search.val() && e5.stopPropagation();
          });
          var o2 = document.documentMode, a2 = o2 && o2 <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function(e5) {
            a2 ? i3.$selection.off("input.search input.searchcheck") : i3.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e5) {
            if (a2 && "input" === e5.type) i3.$selection.off("input.search input.searchcheck");
            else {
              var t4 = e5.which;
              t4 != c2.SHIFT && t4 != c2.CTRL && t4 != c2.ALT && t4 != c2.TAB && i3.handleSearch(e5);
            }
          });
        }, e3.prototype._transferTabIndex = function(e4) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, e3.prototype.createPlaceholder = function(e4, t3) {
          this.$search.attr("placeholder", t3.text);
        }, e3.prototype.update = function(e4, t3) {
          var n2 = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", ""), e4.call(this, t3), this.resizeSearch(), n2 && this.$search.trigger("focus");
        }, e3.prototype.handleSearch = function() {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e4 = this.$search.val();
            this.trigger("query", { term: e4 });
          }
          this._keyUpPrevented = false;
        }, e3.prototype.searchRemoveChoice = function(e4, t3) {
          this.trigger("unselect", { data: t3 }), this.$search.val(t3.text), this.handleSearch();
        }, e3.prototype.resizeSearch = function() {
          this.$search.css("width", "25px");
          var e4 = "100%";
          "" === this.$search.attr("placeholder") && (e4 = 0.75 * (this.$search.val().length + 1) + "em");
          this.$search.css("width", e4);
        }, e3;
      }), e2.define("select2/selection/selectionCss", ["../utils"], function(i2) {
        function e3() {
        }
        return e3.prototype.render = function(e4) {
          var t3 = e4.call(this), n2 = this.options.get("selectionCssClass") || "";
          return -1 !== n2.indexOf(":all:") && (n2 = n2.replace(":all:", ""), i2.copyNonInternalCssClasses(t3[0], this.$element[0])), t3.addClass(n2), t3;
        }, e3;
      }), e2.define("select2/selection/eventRelay", ["jquery"], function(o2) {
        function e3() {
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          var i2 = this, r2 = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"], s2 = ["opening", "closing", "selecting", "unselecting", "clearing"];
          e4.call(this, t3, n2), t3.on("*", function(e5, t4) {
            if (-1 !== r2.indexOf(e5)) {
              t4 = t4 || {};
              var n3 = o2.Event("select2:" + e5, { params: t4 });
              i2.$element.trigger(n3), -1 !== s2.indexOf(e5) && (t4.prevented = n3.isDefaultPrevented());
            }
          });
        }, e3;
      }), e2.define("select2/translation", ["jquery", "require"], function(t3, n2) {
        function i2(e3) {
          this.dict = e3 || {};
        }
        return i2.prototype.all = function() {
          return this.dict;
        }, i2.prototype.get = function(e3) {
          return this.dict[e3];
        }, i2.prototype.extend = function(e3) {
          this.dict = t3.extend({}, e3.all(), this.dict);
        }, i2._cache = {}, i2.loadPath = function(e3) {
          if (!(e3 in i2._cache)) {
            var t4 = n2(e3);
            i2._cache[e3] = t4;
          }
          return new i2(i2._cache[e3]);
        }, i2;
      }), e2.define("select2/diacritics", [], function() {
        return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Œ": "OE", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "œ": "oe", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ώ": "ω", "ς": "σ", "’": "'" };
      }), e2.define("select2/data/base", ["../utils"], function(i2) {
        function n2(e3, t3) {
          n2.__super__.constructor.call(this);
        }
        return i2.Extend(n2, i2.Observable), n2.prototype.current = function(e3) {
          throw new Error("The `current` method must be defined in child classes.");
        }, n2.prototype.query = function(e3, t3) {
          throw new Error("The `query` method must be defined in child classes.");
        }, n2.prototype.bind = function(e3, t3) {
        }, n2.prototype.destroy = function() {
        }, n2.prototype.generateResultId = function(e3, t3) {
          var n3 = e3.id + "-result-";
          return n3 += i2.generateChars(4), null != t3.id ? n3 += "-" + t3.id.toString() : n3 += "-" + i2.generateChars(4), n3;
        }, n2;
      }), e2.define("select2/data/select", ["./base", "../utils", "jquery"], function(e3, l2, c2) {
        function n2(e4, t3) {
          this.$element = e4, this.options = t3, n2.__super__.constructor.call(this);
        }
        return l2.Extend(n2, e3), n2.prototype.current = function(e4) {
          var t3 = this;
          e4(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function(e5) {
            return t3.item(c2(e5));
          }));
        }, n2.prototype.select = function(r2) {
          var s2 = this;
          if (r2.selected = true, null != r2.element && "option" === r2.element.tagName.toLowerCase()) return r2.element.selected = true, void this.$element.trigger("input").trigger("change");
          if (this.$element.prop("multiple")) this.current(function(e5) {
            var t3 = [];
            (r2 = [r2]).push.apply(r2, e5);
            for (var n3 = 0; n3 < r2.length; n3++) {
              var i2 = r2[n3].id;
              -1 === t3.indexOf(i2) && t3.push(i2);
            }
            s2.$element.val(t3), s2.$element.trigger("input").trigger("change");
          });
          else {
            var e4 = r2.id;
            this.$element.val(e4), this.$element.trigger("input").trigger("change");
          }
        }, n2.prototype.unselect = function(r2) {
          var s2 = this;
          if (this.$element.prop("multiple")) {
            if (r2.selected = false, null != r2.element && "option" === r2.element.tagName.toLowerCase()) return r2.element.selected = false, void this.$element.trigger("input").trigger("change");
            this.current(function(e4) {
              for (var t3 = [], n3 = 0; n3 < e4.length; n3++) {
                var i2 = e4[n3].id;
                i2 !== r2.id && -1 === t3.indexOf(i2) && t3.push(i2);
              }
              s2.$element.val(t3), s2.$element.trigger("input").trigger("change");
            });
          }
        }, n2.prototype.bind = function(e4, t3) {
          var n3 = this;
          (this.container = e4).on("select", function(e5) {
            n3.select(e5.data);
          }), e4.on("unselect", function(e5) {
            n3.unselect(e5.data);
          });
        }, n2.prototype.destroy = function() {
          this.$element.find("*").each(function() {
            l2.RemoveData(this);
          });
        }, n2.prototype.query = function(i2, e4) {
          var r2 = [], s2 = this;
          this.$element.children().each(function() {
            if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
              var e5 = c2(this), t3 = s2.item(e5), n3 = s2.matches(i2, t3);
              null !== n3 && r2.push(n3);
            }
          }), e4({ results: r2 });
        }, n2.prototype.addOptions = function(e4) {
          this.$element.append(e4);
        }, n2.prototype.option = function(e4) {
          var t3;
          e4.children ? (t3 = document.createElement("optgroup")).label = e4.text : void 0 !== (t3 = document.createElement("option")).textContent ? t3.textContent = e4.text : t3.innerText = e4.text, void 0 !== e4.id && (t3.value = e4.id), e4.disabled && (t3.disabled = true), e4.selected && (t3.selected = true), e4.title && (t3.title = e4.title);
          var n3 = this._normalizeItem(e4);
          return n3.element = t3, l2.StoreData(t3, "data", n3), c2(t3);
        }, n2.prototype.item = function(e4) {
          var t3 = {};
          if (null != (t3 = l2.GetData(e4[0], "data"))) return t3;
          var n3 = e4[0];
          if ("option" === n3.tagName.toLowerCase()) t3 = { id: e4.val(), text: e4.text(), disabled: e4.prop("disabled"), selected: e4.prop("selected"), title: e4.prop("title") };
          else if ("optgroup" === n3.tagName.toLowerCase()) {
            t3 = { text: e4.prop("label"), children: [], title: e4.prop("title") };
            for (var i2 = e4.children("option"), r2 = [], s2 = 0; s2 < i2.length; s2++) {
              var o2 = c2(i2[s2]), a2 = this.item(o2);
              r2.push(a2);
            }
            t3.children = r2;
          }
          return (t3 = this._normalizeItem(t3)).element = e4[0], l2.StoreData(e4[0], "data", t3), t3;
        }, n2.prototype._normalizeItem = function(e4) {
          e4 !== Object(e4) && (e4 = { id: e4, text: e4 });
          return null != (e4 = c2.extend({}, { text: "" }, e4)).id && (e4.id = e4.id.toString()), null != e4.text && (e4.text = e4.text.toString()), null == e4._resultId && e4.id && null != this.container && (e4._resultId = this.generateResultId(this.container, e4)), c2.extend({}, { selected: false, disabled: false }, e4);
        }, n2.prototype.matches = function(e4, t3) {
          return this.options.get("matcher")(e4, t3);
        }, n2;
      }), e2.define("select2/data/array", ["./select", "../utils", "jquery"], function(e3, t3, f2) {
        function i2(e4, t4) {
          this._dataToConvert = t4.get("data") || [], i2.__super__.constructor.call(this, e4, t4);
        }
        return t3.Extend(i2, e3), i2.prototype.bind = function(e4, t4) {
          i2.__super__.bind.call(this, e4, t4), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, i2.prototype.select = function(n2) {
          var e4 = this.$element.find("option").filter(function(e5, t4) {
            return t4.value == n2.id.toString();
          });
          0 === e4.length && (e4 = this.option(n2), this.addOptions(e4)), i2.__super__.select.call(this, n2);
        }, i2.prototype.convertToOptions = function(e4) {
          var t4 = this, n2 = this.$element.find("option"), i3 = n2.map(function() {
            return t4.item(f2(this)).id;
          }).get(), r2 = [];
          function s2(e5) {
            return function() {
              return f2(this).val() == e5.id;
            };
          }
          for (var o2 = 0; o2 < e4.length; o2++) {
            var a2 = this._normalizeItem(e4[o2]);
            if (0 <= i3.indexOf(a2.id)) {
              var l2 = n2.filter(s2(a2)), c2 = this.item(l2), u2 = f2.extend(true, {}, a2, c2), d = this.option(u2);
              l2.replaceWith(d);
            } else {
              var p = this.option(a2);
              if (a2.children) {
                var h2 = this.convertToOptions(a2.children);
                p.append(h2);
              }
              r2.push(p);
            }
          }
          return r2;
        }, i2;
      }), e2.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e3, t3, s2) {
        function n2(e4, t4) {
          this.ajaxOptions = this._applyDefaults(t4.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n2.__super__.constructor.call(this, e4, t4);
        }
        return t3.Extend(n2, e3), n2.prototype._applyDefaults = function(e4) {
          var t4 = { data: function(e5) {
            return s2.extend({}, e5, { q: e5.term });
          }, transport: function(e5, t5, n3) {
            var i2 = s2.ajax(e5);
            return i2.then(t5), i2.fail(n3), i2;
          } };
          return s2.extend({}, t4, e4, true);
        }, n2.prototype.processResults = function(e4) {
          return e4;
        }, n2.prototype.query = function(n3, i2) {
          var r2 = this;
          null != this._request && (s2.isFunction(this._request.abort) && this._request.abort(), this._request = null);
          var t4 = s2.extend({ type: "GET" }, this.ajaxOptions);
          function e4() {
            var e5 = t4.transport(t4, function(e6) {
              var t5 = r2.processResults(e6, n3);
              r2.options.get("debug") && window.console && console.error && (t5 && t5.results && Array.isArray(t5.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i2(t5);
            }, function() {
              "status" in e5 && (0 === e5.status || "0" === e5.status) || r2.trigger("results:message", { message: "errorLoading" });
            });
            r2._request = e5;
          }
          "function" == typeof t4.url && (t4.url = t4.url.call(this.$element, n3)), "function" == typeof t4.data && (t4.data = t4.data.call(this.$element, n3)), this.ajaxOptions.delay && null != n3.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e4, this.ajaxOptions.delay)) : e4();
        }, n2;
      }), e2.define("select2/data/tags", ["jquery"], function(t3) {
        function e3(e4, t4, n2) {
          var i2 = n2.get("tags"), r2 = n2.get("createTag");
          void 0 !== r2 && (this.createTag = r2);
          var s2 = n2.get("insertTag");
          if (void 0 !== s2 && (this.insertTag = s2), e4.call(this, t4, n2), Array.isArray(i2)) for (var o2 = 0; o2 < i2.length; o2++) {
            var a2 = i2[o2], l2 = this._normalizeItem(a2), c2 = this.option(l2);
            this.$element.append(c2);
          }
        }
        return e3.prototype.query = function(e4, c2, u2) {
          var d = this;
          this._removeOldTags(), null != c2.term && null == c2.page ? e4.call(this, c2, function e5(t4, n2) {
            for (var i2 = t4.results, r2 = 0; r2 < i2.length; r2++) {
              var s2 = i2[r2], o2 = null != s2.children && !e5({ results: s2.children }, true);
              if ((s2.text || "").toUpperCase() === (c2.term || "").toUpperCase() || o2) return !n2 && (t4.data = i2, void u2(t4));
            }
            if (n2) return true;
            var a2 = d.createTag(c2);
            if (null != a2) {
              var l2 = d.option(a2);
              l2.attr("data-select2-tag", true), d.addOptions([l2]), d.insertTag(i2, a2);
            }
            t4.results = i2, u2(t4);
          }) : e4.call(this, c2, u2);
        }, e3.prototype.createTag = function(e4, t4) {
          if (null == t4.term) return null;
          var n2 = t4.term.trim();
          return "" === n2 ? null : { id: n2, text: n2 };
        }, e3.prototype.insertTag = function(e4, t4, n2) {
          t4.unshift(n2);
        }, e3.prototype._removeOldTags = function(e4) {
          this.$element.find("option[data-select2-tag]").each(function() {
            this.selected || t3(this).remove();
          });
        }, e3;
      }), e2.define("select2/data/tokenizer", ["jquery"], function(d) {
        function e3(e4, t3, n2) {
          var i2 = n2.get("tokenizer");
          void 0 !== i2 && (this.tokenizer = i2), e4.call(this, t3, n2);
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          e4.call(this, t3, n2), this.$search = t3.dropdown.$search || t3.selection.$search || n2.find(".select2-search__field");
        }, e3.prototype.query = function(e4, t3, n2) {
          var r2 = this;
          t3.term = t3.term || "";
          var i2 = this.tokenizer(t3, this.options, function(e5) {
            var t4, n3 = r2._normalizeItem(e5);
            if (!r2.$element.find("option").filter(function() {
              return d(this).val() === n3.id;
            }).length) {
              var i3 = r2.option(n3);
              i3.attr("data-select2-tag", true), r2._removeOldTags(), r2.addOptions([i3]);
            }
            t4 = n3, r2.trigger("select", { data: t4 });
          });
          i2.term !== t3.term && (this.$search.length && (this.$search.val(i2.term), this.$search.trigger("focus")), t3.term = i2.term), e4.call(this, t3, n2);
        }, e3.prototype.tokenizer = function(e4, t3, n2, i2) {
          for (var r2 = n2.get("tokenSeparators") || [], s2 = t3.term, o2 = 0, a2 = this.createTag || function(e5) {
            return { id: e5.term, text: e5.term };
          }; o2 < s2.length; ) {
            var l2 = s2[o2];
            if (-1 !== r2.indexOf(l2)) {
              var c2 = s2.substr(0, o2), u2 = a2(d.extend({}, t3, { term: c2 }));
              null != u2 ? (i2(u2), s2 = s2.substr(o2 + 1) || "", o2 = 0) : o2++;
            } else o2++;
          }
          return { term: s2 };
        }, e3;
      }), e2.define("select2/data/minimumInputLength", [], function() {
        function e3(e4, t3, n2) {
          this.minimumInputLength = n2.get("minimumInputLength"), e4.call(this, t3, n2);
        }
        return e3.prototype.query = function(e4, t3, n2) {
          t3.term = t3.term || "", t3.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t3.term, params: t3 } }) : e4.call(this, t3, n2);
        }, e3;
      }), e2.define("select2/data/maximumInputLength", [], function() {
        function e3(e4, t3, n2) {
          this.maximumInputLength = n2.get("maximumInputLength"), e4.call(this, t3, n2);
        }
        return e3.prototype.query = function(e4, t3, n2) {
          t3.term = t3.term || "", 0 < this.maximumInputLength && t3.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t3.term, params: t3 } }) : e4.call(this, t3, n2);
        }, e3;
      }), e2.define("select2/data/maximumSelectionLength", [], function() {
        function e3(e4, t3, n2) {
          this.maximumSelectionLength = n2.get("maximumSelectionLength"), e4.call(this, t3, n2);
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          var i2 = this;
          e4.call(this, t3, n2), t3.on("select", function() {
            i2._checkIfMaximumSelected();
          });
        }, e3.prototype.query = function(e4, t3, n2) {
          var i2 = this;
          this._checkIfMaximumSelected(function() {
            e4.call(i2, t3, n2);
          });
        }, e3.prototype._checkIfMaximumSelected = function(e4, n2) {
          var i2 = this;
          this.current(function(e5) {
            var t3 = null != e5 ? e5.length : 0;
            0 < i2.maximumSelectionLength && t3 >= i2.maximumSelectionLength ? i2.trigger("results:message", { message: "maximumSelected", args: { maximum: i2.maximumSelectionLength } }) : n2 && n2();
          });
        }, e3;
      }), e2.define("select2/dropdown", ["jquery", "./utils"], function(t3, e3) {
        function n2(e4, t4) {
          this.$element = e4, this.options = t4, n2.__super__.constructor.call(this);
        }
        return e3.Extend(n2, e3.Observable), n2.prototype.render = function() {
          var e4 = t3('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return e4.attr("dir", this.options.get("dir")), this.$dropdown = e4;
        }, n2.prototype.bind = function() {
        }, n2.prototype.position = function(e4, t4) {
        }, n2.prototype.destroy = function() {
          this.$dropdown.remove();
        }, n2;
      }), e2.define("select2/dropdown/search", ["jquery"], function(s2) {
        function e3() {
        }
        return e3.prototype.render = function(e4) {
          var t3 = e4.call(this), n2 = s2('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          return this.$searchContainer = n2, this.$search = n2.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), t3.prepend(n2), t3;
        }, e3.prototype.bind = function(e4, t3, n2) {
          var i2 = this, r2 = t3.id + "-results";
          e4.call(this, t3, n2), this.$search.on("keydown", function(e5) {
            i2.trigger("keypress", e5), i2._keyUpPrevented = e5.isDefaultPrevented();
          }), this.$search.on("input", function(e5) {
            s2(this).off("keyup");
          }), this.$search.on("keyup input", function(e5) {
            i2.handleSearch(e5);
          }), t3.on("open", function() {
            i2.$search.attr("tabindex", 0), i2.$search.attr("aria-controls", r2), i2.$search.trigger("focus"), window.setTimeout(function() {
              i2.$search.trigger("focus");
            }, 0);
          }), t3.on("close", function() {
            i2.$search.attr("tabindex", -1), i2.$search.removeAttr("aria-controls"), i2.$search.removeAttr("aria-activedescendant"), i2.$search.val(""), i2.$search.trigger("blur");
          }), t3.on("focus", function() {
            t3.isOpen() || i2.$search.trigger("focus");
          }), t3.on("results:all", function(e5) {
            null != e5.query.term && "" !== e5.query.term || (i2.showSearch(e5) ? i2.$searchContainer[0].classList.remove("select2-search--hide") : i2.$searchContainer[0].classList.add("select2-search--hide"));
          }), t3.on("results:focus", function(e5) {
            e5.data._resultId ? i2.$search.attr("aria-activedescendant", e5.data._resultId) : i2.$search.removeAttr("aria-activedescendant");
          });
        }, e3.prototype.handleSearch = function(e4) {
          if (!this._keyUpPrevented) {
            var t3 = this.$search.val();
            this.trigger("query", { term: t3 });
          }
          this._keyUpPrevented = false;
        }, e3.prototype.showSearch = function(e4, t3) {
          return true;
        }, e3;
      }), e2.define("select2/dropdown/hidePlaceholder", [], function() {
        function e3(e4, t3, n2, i2) {
          this.placeholder = this.normalizePlaceholder(n2.get("placeholder")), e4.call(this, t3, n2, i2);
        }
        return e3.prototype.append = function(e4, t3) {
          t3.results = this.removePlaceholder(t3.results), e4.call(this, t3);
        }, e3.prototype.normalizePlaceholder = function(e4, t3) {
          return "string" == typeof t3 && (t3 = { id: "", text: t3 }), t3;
        }, e3.prototype.removePlaceholder = function(e4, t3) {
          for (var n2 = t3.slice(0), i2 = t3.length - 1; 0 <= i2; i2--) {
            var r2 = t3[i2];
            this.placeholder.id === r2.id && n2.splice(i2, 1);
          }
          return n2;
        }, e3;
      }), e2.define("select2/dropdown/infiniteScroll", ["jquery"], function(n2) {
        function e3(e4, t3, n3, i2) {
          this.lastParams = {}, e4.call(this, t3, n3, i2), this.$loadingMore = this.createLoadingMore(), this.loading = false;
        }
        return e3.prototype.append = function(e4, t3) {
          this.$loadingMore.remove(), this.loading = false, e4.call(this, t3), this.showLoadingMore(t3) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, e3.prototype.bind = function(e4, t3, n3) {
          var i2 = this;
          e4.call(this, t3, n3), t3.on("query", function(e5) {
            i2.lastParams = e5, i2.loading = true;
          }), t3.on("query:append", function(e5) {
            i2.lastParams = e5, i2.loading = true;
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, e3.prototype.loadMoreIfNeeded = function() {
          var e4 = n2.contains(document.documentElement, this.$loadingMore[0]);
          if (!this.loading && e4) {
            var t3 = this.$results.offset().top + this.$results.outerHeight(false);
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(false) <= t3 + 50 && this.loadMore();
          }
        }, e3.prototype.loadMore = function() {
          this.loading = true;
          var e4 = n2.extend({}, { page: 1 }, this.lastParams);
          e4.page++, this.trigger("query:append", e4);
        }, e3.prototype.showLoadingMore = function(e4, t3) {
          return t3.pagination && t3.pagination.more;
        }, e3.prototype.createLoadingMore = function() {
          var e4 = n2('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'), t3 = this.options.get("translations").get("loadingMore");
          return e4.html(t3(this.lastParams)), e4;
        }, e3;
      }), e2.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f2, a2) {
        function e3(e4, t3, n2) {
          this.$dropdownParent = f2(n2.get("dropdownParent") || document.body), e4.call(this, t3, n2);
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          var i2 = this;
          e4.call(this, t3, n2), t3.on("open", function() {
            i2._showDropdown(), i2._attachPositioningHandler(t3), i2._bindContainerResultHandlers(t3);
          }), t3.on("close", function() {
            i2._hideDropdown(), i2._detachPositioningHandler(t3);
          }), this.$dropdownContainer.on("mousedown", function(e5) {
            e5.stopPropagation();
          });
        }, e3.prototype.destroy = function(e4) {
          e4.call(this), this.$dropdownContainer.remove();
        }, e3.prototype.position = function(e4, t3, n2) {
          t3.attr("class", n2.attr("class")), t3[0].classList.remove("select2"), t3[0].classList.add("select2-container--open"), t3.css({ position: "absolute", top: -999999 }), this.$container = n2;
        }, e3.prototype.render = function(e4) {
          var t3 = f2("<span></span>"), n2 = e4.call(this);
          return t3.append(n2), this.$dropdownContainer = t3;
        }, e3.prototype._hideDropdown = function(e4) {
          this.$dropdownContainer.detach();
        }, e3.prototype._bindContainerResultHandlers = function(e4, t3) {
          if (!this._containerResultsHandlersBound) {
            var n2 = this;
            t3.on("results:all", function() {
              n2._positionDropdown(), n2._resizeDropdown();
            }), t3.on("results:append", function() {
              n2._positionDropdown(), n2._resizeDropdown();
            }), t3.on("results:message", function() {
              n2._positionDropdown(), n2._resizeDropdown();
            }), t3.on("select", function() {
              n2._positionDropdown(), n2._resizeDropdown();
            }), t3.on("unselect", function() {
              n2._positionDropdown(), n2._resizeDropdown();
            }), this._containerResultsHandlersBound = true;
          }
        }, e3.prototype._attachPositioningHandler = function(e4, t3) {
          var n2 = this, i2 = "scroll.select2." + t3.id, r2 = "resize.select2." + t3.id, s2 = "orientationchange.select2." + t3.id, o2 = this.$container.parents().filter(a2.hasScroll);
          o2.each(function() {
            a2.StoreData(this, "select2-scroll-position", { x: f2(this).scrollLeft(), y: f2(this).scrollTop() });
          }), o2.on(i2, function(e5) {
            var t4 = a2.GetData(this, "select2-scroll-position");
            f2(this).scrollTop(t4.y);
          }), f2(window).on(i2 + " " + r2 + " " + s2, function(e5) {
            n2._positionDropdown(), n2._resizeDropdown();
          });
        }, e3.prototype._detachPositioningHandler = function(e4, t3) {
          var n2 = "scroll.select2." + t3.id, i2 = "resize.select2." + t3.id, r2 = "orientationchange.select2." + t3.id;
          this.$container.parents().filter(a2.hasScroll).off(n2), f2(window).off(n2 + " " + i2 + " " + r2);
        }, e3.prototype._positionDropdown = function() {
          var e4 = f2(window), t3 = this.$dropdown[0].classList.contains("select2-dropdown--above"), n2 = this.$dropdown[0].classList.contains("select2-dropdown--below"), i2 = null, r2 = this.$container.offset();
          r2.bottom = r2.top + this.$container.outerHeight(false);
          var s2 = { height: this.$container.outerHeight(false) };
          s2.top = r2.top, s2.bottom = r2.top + s2.height;
          var o2 = this.$dropdown.outerHeight(false), a3 = e4.scrollTop(), l2 = e4.scrollTop() + e4.height(), c2 = a3 < r2.top - o2, u2 = l2 > r2.bottom + o2, d = { left: r2.left, top: s2.bottom }, p = this.$dropdownParent;
          "static" === p.css("position") && (p = p.offsetParent());
          var h2 = { top: 0, left: 0 };
          (f2.contains(document.body, p[0]) || p[0].isConnected) && (h2 = p.offset()), d.top -= h2.top, d.left -= h2.left, t3 || n2 || (i2 = "below"), u2 || !c2 || t3 ? !c2 && u2 && t3 && (i2 = "below") : i2 = "above", ("above" == i2 || t3 && "below" !== i2) && (d.top = s2.top - h2.top - o2), null != i2 && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + i2), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + i2)), this.$dropdownContainer.css(d);
        }, e3.prototype._resizeDropdown = function() {
          var e4 = { width: this.$container.outerWidth(false) + "px" };
          this.options.get("dropdownAutoWidth") && (e4.minWidth = e4.width, e4.position = "relative", e4.width = "auto"), this.$dropdown.css(e4);
        }, e3.prototype._showDropdown = function(e4) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, e3;
      }), e2.define("select2/dropdown/minimumResultsForSearch", [], function() {
        function e3(e4, t3, n2, i2) {
          this.minimumResultsForSearch = n2.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e4.call(this, t3, n2, i2);
        }
        return e3.prototype.showSearch = function(e4, t3) {
          return !(function e5(t4) {
            for (var n2 = 0, i2 = 0; i2 < t4.length; i2++) {
              var r2 = t4[i2];
              r2.children ? n2 += e5(r2.children) : n2++;
            }
            return n2;
          }(t3.data.results) < this.minimumResultsForSearch) && e4.call(this, t3);
        }, e3;
      }), e2.define("select2/dropdown/selectOnClose", ["../utils"], function(s2) {
        function e3() {
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          var i2 = this;
          e4.call(this, t3, n2), t3.on("close", function(e5) {
            i2._handleSelectOnClose(e5);
          });
        }, e3.prototype._handleSelectOnClose = function(e4, t3) {
          if (t3 && null != t3.originalSelect2Event) {
            var n2 = t3.originalSelect2Event;
            if ("select" === n2._type || "unselect" === n2._type) return;
          }
          var i2 = this.getHighlightedResults();
          if (!(i2.length < 1)) {
            var r2 = s2.GetData(i2[0], "data");
            null != r2.element && r2.element.selected || null == r2.element && r2.selected || this.trigger("select", { data: r2 });
          }
        }, e3;
      }), e2.define("select2/dropdown/closeOnSelect", [], function() {
        function e3() {
        }
        return e3.prototype.bind = function(e4, t3, n2) {
          var i2 = this;
          e4.call(this, t3, n2), t3.on("select", function(e5) {
            i2._selectTriggered(e5);
          }), t3.on("unselect", function(e5) {
            i2._selectTriggered(e5);
          });
        }, e3.prototype._selectTriggered = function(e4, t3) {
          var n2 = t3.originalEvent;
          n2 && (n2.ctrlKey || n2.metaKey) || this.trigger("close", { originalEvent: n2, originalSelect2Event: t3 });
        }, e3;
      }), e2.define("select2/dropdown/dropdownCss", ["../utils"], function(i2) {
        function e3() {
        }
        return e3.prototype.render = function(e4) {
          var t3 = e4.call(this), n2 = this.options.get("dropdownCssClass") || "";
          return -1 !== n2.indexOf(":all:") && (n2 = n2.replace(":all:", ""), i2.copyNonInternalCssClasses(t3[0], this.$element[0])), t3.addClass(n2), t3;
        }, e3;
      }), e2.define("select2/i18n/en", [], function() {
        return { errorLoading: function() {
          return "The results could not be loaded.";
        }, inputTooLong: function(e3) {
          var t3 = e3.input.length - e3.maximum, n2 = "Please delete " + t3 + " character";
          return 1 != t3 && (n2 += "s"), n2;
        }, inputTooShort: function(e3) {
          return "Please enter " + (e3.minimum - e3.input.length) + " or more characters";
        }, loadingMore: function() {
          return "Loading more results…";
        }, maximumSelected: function(e3) {
          var t3 = "You can only select " + e3.maximum + " item";
          return 1 != e3.maximum && (t3 += "s"), t3;
        }, noResults: function() {
          return "No results found";
        }, searching: function() {
          return "Searching…";
        }, removeAllItems: function() {
          return "Remove all items";
        }, removeItem: function() {
          return "Remove item";
        } };
      }), e2.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./i18n/en"], function(l2, s2, o2, a2, c2, u2, d, p, h2, f2, g2, t3, m2, v2, y2, _2, b2, $2, w2, x2, A2, D2, S2, E, O, C, L, T, q, e3) {
        function n2() {
          this.reset();
        }
        return n2.prototype.apply = function(e4) {
          if (null == (e4 = l2.extend(true, {}, this.defaults, e4)).dataAdapter && (null != e4.ajax ? e4.dataAdapter = y2 : null != e4.data ? e4.dataAdapter = v2 : e4.dataAdapter = m2, 0 < e4.minimumInputLength && (e4.dataAdapter = f2.Decorate(e4.dataAdapter, $2)), 0 < e4.maximumInputLength && (e4.dataAdapter = f2.Decorate(e4.dataAdapter, w2)), 0 < e4.maximumSelectionLength && (e4.dataAdapter = f2.Decorate(e4.dataAdapter, x2)), e4.tags && (e4.dataAdapter = f2.Decorate(e4.dataAdapter, _2)), null == e4.tokenSeparators && null == e4.tokenizer || (e4.dataAdapter = f2.Decorate(e4.dataAdapter, b2))), null == e4.resultsAdapter && (e4.resultsAdapter = s2, null != e4.ajax && (e4.resultsAdapter = f2.Decorate(e4.resultsAdapter, E)), null != e4.placeholder && (e4.resultsAdapter = f2.Decorate(e4.resultsAdapter, S2)), e4.selectOnClose && (e4.resultsAdapter = f2.Decorate(e4.resultsAdapter, L))), null == e4.dropdownAdapter) {
            if (e4.multiple) e4.dropdownAdapter = A2;
            else {
              var t4 = f2.Decorate(A2, D2);
              e4.dropdownAdapter = t4;
            }
            0 !== e4.minimumResultsForSearch && (e4.dropdownAdapter = f2.Decorate(e4.dropdownAdapter, C)), e4.closeOnSelect && (e4.dropdownAdapter = f2.Decorate(e4.dropdownAdapter, T)), null != e4.dropdownCssClass && (e4.dropdownAdapter = f2.Decorate(e4.dropdownAdapter, q)), e4.dropdownAdapter = f2.Decorate(e4.dropdownAdapter, O);
          }
          null == e4.selectionAdapter && (e4.multiple ? e4.selectionAdapter = a2 : e4.selectionAdapter = o2, null != e4.placeholder && (e4.selectionAdapter = f2.Decorate(e4.selectionAdapter, c2)), e4.allowClear && (e4.selectionAdapter = f2.Decorate(e4.selectionAdapter, u2)), e4.multiple && (e4.selectionAdapter = f2.Decorate(e4.selectionAdapter, d)), null != e4.selectionCssClass && (e4.selectionAdapter = f2.Decorate(e4.selectionAdapter, p)), e4.selectionAdapter = f2.Decorate(e4.selectionAdapter, h2)), e4.language = this._resolveLanguage(e4.language), e4.language.push("en");
          for (var n3 = [], i2 = 0; i2 < e4.language.length; i2++) {
            var r2 = e4.language[i2];
            -1 === n3.indexOf(r2) && n3.push(r2);
          }
          return e4.language = n3, e4.translations = this._processTranslations(e4.language, e4.debug), e4;
        }, n2.prototype.reset = function() {
          function a3(e4) {
            return e4.replace(/[^\u0000-\u007E]/g, function(e5) {
              return t3[e5] || e5;
            });
          }
          this.defaults = { amdLanguageBase: "./i18n/", autocomplete: "off", closeOnSelect: true, debug: false, dropdownAutoWidth: false, escapeMarkup: f2.escapeMarkup, language: {}, matcher: function e4(t4, n3) {
            if (null == t4.term || "" === t4.term.trim()) return n3;
            if (n3.children && 0 < n3.children.length) {
              for (var i2 = l2.extend(true, {}, n3), r2 = n3.children.length - 1; 0 <= r2; r2--) null == e4(t4, n3.children[r2]) && i2.children.splice(r2, 1);
              return 0 < i2.children.length ? i2 : e4(t4, i2);
            }
            var s3 = a3(n3.text).toUpperCase(), o3 = a3(t4.term).toUpperCase();
            return -1 < s3.indexOf(o3) ? n3 : null;
          }, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: false, scrollAfterSelect: false, sorter: function(e4) {
            return e4;
          }, templateResult: function(e4) {
            return e4.text;
          }, templateSelection: function(e4) {
            return e4.text;
          }, theme: "default", width: "resolve" };
        }, n2.prototype.applyFromElement = function(e4, t4) {
          var n3 = e4.language, i2 = this.defaults.language, r2 = t4.prop("lang"), s3 = t4.closest("[lang]").prop("lang"), o3 = Array.prototype.concat.call(this._resolveLanguage(r2), this._resolveLanguage(n3), this._resolveLanguage(i2), this._resolveLanguage(s3));
          return e4.language = o3, e4;
        }, n2.prototype._resolveLanguage = function(e4) {
          if (!e4) return [];
          if (l2.isEmptyObject(e4)) return [];
          if (l2.isPlainObject(e4)) return [e4];
          var t4;
          t4 = Array.isArray(e4) ? e4 : [e4];
          for (var n3 = [], i2 = 0; i2 < t4.length; i2++) if (n3.push(t4[i2]), "string" == typeof t4[i2] && 0 < t4[i2].indexOf("-")) {
            var r2 = t4[i2].split("-")[0];
            n3.push(r2);
          }
          return n3;
        }, n2.prototype._processTranslations = function(e4, t4) {
          for (var n3 = new g2(), i2 = 0; i2 < e4.length; i2++) {
            var r2 = new g2(), s3 = e4[i2];
            if ("string" == typeof s3) try {
              r2 = g2.loadPath(s3);
            } catch (e5) {
              try {
                s3 = this.defaults.amdLanguageBase + s3, r2 = g2.loadPath(s3);
              } catch (e6) {
                t4 && window.console && console.warn && console.warn('Select2: The language file for "' + s3 + '" could not be automatically loaded. A fallback will be used instead.');
              }
            }
            else r2 = l2.isPlainObject(s3) ? new g2(s3) : s3;
            n3.extend(r2);
          }
          return n3;
        }, n2.prototype.set = function(e4, t4) {
          var n3 = {};
          n3[l2.camelCase(e4)] = t4;
          var i2 = f2._convertData(n3);
          l2.extend(true, this.defaults, i2);
        }, new n2();
      }), e2.define("select2/options", ["jquery", "./defaults", "./utils"], function(d, n2, p) {
        function e3(e4, t3) {
          this.options = e4, null != t3 && this.fromElement(t3), null != t3 && (this.options = n2.applyFromElement(this.options, t3)), this.options = n2.apply(this.options);
        }
        return e3.prototype.fromElement = function(e4) {
          var t3 = ["select2"];
          null == this.options.multiple && (this.options.multiple = e4.prop("multiple")), null == this.options.disabled && (this.options.disabled = e4.prop("disabled")), null == this.options.autocomplete && e4.prop("autocomplete") && (this.options.autocomplete = e4.prop("autocomplete")), null == this.options.dir && (e4.prop("dir") ? this.options.dir = e4.prop("dir") : e4.closest("[dir]").prop("dir") ? this.options.dir = e4.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e4.prop("disabled", this.options.disabled), e4.prop("multiple", this.options.multiple), p.GetData(e4[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e4[0], "data", p.GetData(e4[0], "select2Tags")), p.StoreData(e4[0], "tags", true)), p.GetData(e4[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e4.attr("ajax--url", p.GetData(e4[0], "ajaxUrl")), p.StoreData(e4[0], "ajax-Url", p.GetData(e4[0], "ajaxUrl")));
          var n3 = {};
          function i2(e5, t4) {
            return t4.toUpperCase();
          }
          for (var r2 = 0; r2 < e4[0].attributes.length; r2++) {
            var s2 = e4[0].attributes[r2].name, o2 = "data-";
            if (s2.substr(0, o2.length) == o2) {
              var a2 = s2.substring(o2.length), l2 = p.GetData(e4[0], a2);
              n3[a2.replace(/-([a-z])/g, i2)] = l2;
            }
          }
          d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e4[0].dataset && (n3 = d.extend(true, {}, e4[0].dataset, n3));
          var c2 = d.extend(true, {}, p.GetData(e4[0]), n3);
          for (var u2 in c2 = p._convertData(c2)) -1 < t3.indexOf(u2) || (d.isPlainObject(this.options[u2]) ? d.extend(this.options[u2], c2[u2]) : this.options[u2] = c2[u2]);
          return this;
        }, e3.prototype.get = function(e4) {
          return this.options[e4];
        }, e3.prototype.set = function(e4, t3) {
          this.options[e4] = t3;
        }, e3;
      }), e2.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t3, c2, u2, i2) {
        var d = function(e3, t4) {
          null != u2.GetData(e3[0], "select2") && u2.GetData(e3[0], "select2").destroy(), this.$element = e3, this.id = this._generateId(e3), t4 = t4 || {}, this.options = new c2(t4, e3), d.__super__.constructor.call(this);
          var n2 = e3.attr("tabindex") || 0;
          u2.StoreData(e3[0], "old-tabindex", n2), e3.attr("tabindex", "-1");
          var i3 = this.options.get("dataAdapter");
          this.dataAdapter = new i3(e3, this.options);
          var r2 = this.render();
          this._placeContainer(r2);
          var s2 = this.options.get("selectionAdapter");
          this.selection = new s2(e3, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r2);
          var o2 = this.options.get("dropdownAdapter");
          this.dropdown = new o2(e3, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r2);
          var a2 = this.options.get("resultsAdapter");
          this.results = new a2(e3, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var l2 = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e4) {
            l2.trigger("selection:update", { data: e4 });
          }), e3[0].classList.add("select2-hidden-accessible"), e3.attr("aria-hidden", "true"), this._syncAttributes(), u2.StoreData(e3[0], "select2", this), e3.data("select2", this);
        };
        return u2.Extend(d, u2.Observable), d.prototype._generateId = function(e3) {
          return "select2-" + (null != e3.attr("id") ? e3.attr("id") : null != e3.attr("name") ? e3.attr("name") + "-" + u2.generateChars(2) : u2.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, d.prototype._placeContainer = function(e3) {
          e3.insertAfter(this.$element);
          var t4 = this._resolveWidth(this.$element, this.options.get("width"));
          null != t4 && e3.css("width", t4);
        }, d.prototype._resolveWidth = function(e3, t4) {
          var n2 = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
          if ("resolve" == t4) {
            var i3 = this._resolveWidth(e3, "style");
            return null != i3 ? i3 : this._resolveWidth(e3, "element");
          }
          if ("element" == t4) {
            var r2 = e3.outerWidth(false);
            return r2 <= 0 ? "auto" : r2 + "px";
          }
          if ("style" != t4) return "computedstyle" != t4 ? t4 : window.getComputedStyle(e3[0]).width;
          var s2 = e3.attr("style");
          if ("string" != typeof s2) return null;
          for (var o2 = s2.split(";"), a2 = 0, l2 = o2.length; a2 < l2; a2 += 1) {
            var c3 = o2[a2].replace(/\s/g, "").match(n2);
            if (null !== c3 && 1 <= c3.length) return c3[1];
          }
          return null;
        }, d.prototype._bindAdapters = function() {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, d.prototype._registerDomEvents = function() {
          var t4 = this;
          this.$element.on("change.select2", function() {
            t4.dataAdapter.current(function(e3) {
              t4.trigger("selection:update", { data: e3 });
            });
          }), this.$element.on("focus.select2", function(e3) {
            t4.trigger("focus", e3);
          }), this._syncA = u2.bind(this._syncAttributes, this), this._syncS = u2.bind(this._syncSubtree, this), this._observer = new window.MutationObserver(function(e3) {
            t4._syncA(), t4._syncS(e3);
          }), this._observer.observe(this.$element[0], { attributes: true, childList: true, subtree: false });
        }, d.prototype._registerDataEvents = function() {
          var n2 = this;
          this.dataAdapter.on("*", function(e3, t4) {
            n2.trigger(e3, t4);
          });
        }, d.prototype._registerSelectionEvents = function() {
          var n2 = this, i3 = ["toggle", "focus"];
          this.selection.on("toggle", function() {
            n2.toggleDropdown();
          }), this.selection.on("focus", function(e3) {
            n2.focus(e3);
          }), this.selection.on("*", function(e3, t4) {
            -1 === i3.indexOf(e3) && n2.trigger(e3, t4);
          });
        }, d.prototype._registerDropdownEvents = function() {
          var n2 = this;
          this.dropdown.on("*", function(e3, t4) {
            n2.trigger(e3, t4);
          });
        }, d.prototype._registerResultsEvents = function() {
          var n2 = this;
          this.results.on("*", function(e3, t4) {
            n2.trigger(e3, t4);
          });
        }, d.prototype._registerEvents = function() {
          var n2 = this;
          this.on("open", function() {
            n2.$container[0].classList.add("select2-container--open");
          }), this.on("close", function() {
            n2.$container[0].classList.remove("select2-container--open");
          }), this.on("enable", function() {
            n2.$container[0].classList.remove("select2-container--disabled");
          }), this.on("disable", function() {
            n2.$container[0].classList.add("select2-container--disabled");
          }), this.on("blur", function() {
            n2.$container[0].classList.remove("select2-container--focus");
          }), this.on("query", function(t4) {
            n2.isOpen() || n2.trigger("open", {}), this.dataAdapter.query(t4, function(e3) {
              n2.trigger("results:all", { data: e3, query: t4 });
            });
          }), this.on("query:append", function(t4) {
            this.dataAdapter.query(t4, function(e3) {
              n2.trigger("results:append", { data: e3, query: t4 });
            });
          }), this.on("keypress", function(e3) {
            var t4 = e3.which;
            n2.isOpen() ? t4 === i2.ESC || t4 === i2.TAB || t4 === i2.UP && e3.altKey ? (n2.close(e3), e3.preventDefault()) : t4 === i2.ENTER ? (n2.trigger("results:select", {}), e3.preventDefault()) : t4 === i2.SPACE && e3.ctrlKey ? (n2.trigger("results:toggle", {}), e3.preventDefault()) : t4 === i2.UP ? (n2.trigger("results:previous", {}), e3.preventDefault()) : t4 === i2.DOWN && (n2.trigger("results:next", {}), e3.preventDefault()) : (t4 === i2.ENTER || t4 === i2.SPACE || t4 === i2.DOWN && e3.altKey) && (n2.open(), e3.preventDefault());
          });
        }, d.prototype._syncAttributes = function() {
          this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, d.prototype._isChangeMutation = function(e3) {
          var t4 = this;
          if (e3.addedNodes && 0 < e3.addedNodes.length) for (var n2 = 0; n2 < e3.addedNodes.length; n2++) {
            if (e3.addedNodes[n2].selected) return true;
          }
          else {
            if (e3.removedNodes && 0 < e3.removedNodes.length) return true;
            if (Array.isArray(e3)) return e3.some(function(e4) {
              return t4._isChangeMutation(e4);
            });
          }
          return false;
        }, d.prototype._syncSubtree = function(e3) {
          var t4 = this._isChangeMutation(e3), n2 = this;
          t4 && this.dataAdapter.current(function(e4) {
            n2.trigger("selection:update", { data: e4 });
          });
        }, d.prototype.trigger = function(e3, t4) {
          var n2 = d.__super__.trigger, i3 = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" };
          if (void 0 === t4 && (t4 = {}), e3 in i3) {
            var r2 = i3[e3], s2 = { prevented: false, name: e3, args: t4 };
            if (n2.call(this, r2, s2), s2.prevented) return void (t4.prevented = true);
          }
          n2.call(this, e3, t4);
        }, d.prototype.toggleDropdown = function() {
          this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, d.prototype.open = function() {
          this.isOpen() || this.isDisabled() || this.trigger("query", {});
        }, d.prototype.close = function(e3) {
          this.isOpen() && this.trigger("close", { originalEvent: e3 });
        }, d.prototype.isEnabled = function() {
          return !this.isDisabled();
        }, d.prototype.isDisabled = function() {
          return this.options.get("disabled");
        }, d.prototype.isOpen = function() {
          return this.$container[0].classList.contains("select2-container--open");
        }, d.prototype.hasFocus = function() {
          return this.$container[0].classList.contains("select2-container--focus");
        }, d.prototype.focus = function(e3) {
          this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}));
        }, d.prototype.enable = function(e3) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e3 && 0 !== e3.length || (e3 = [true]);
          var t4 = !e3[0];
          this.$element.prop("disabled", t4);
        }, d.prototype.data = function() {
          this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var t4 = [];
          return this.dataAdapter.current(function(e3) {
            t4 = e3;
          }), t4;
        }, d.prototype.val = function(e3) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e3 || 0 === e3.length) return this.$element.val();
          var t4 = e3[0];
          Array.isArray(t4) && (t4 = t4.map(function(e4) {
            return e4.toString();
          })), this.$element.val(t4).trigger("input").trigger("change");
        }, d.prototype.destroy = function() {
          this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u2.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u2.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, d.prototype.render = function() {
          var e3 = t3('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return e3.attr("dir", this.options.get("dir")), this.$container = e3, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), u2.StoreData(e3[0], "element", this.$element), e3;
        }, d;
      }), e2.define("jquery-mousewheel", ["jquery"], function(e3) {
        return e3;
      }), e2.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(r2, e3, s2, t3, o2) {
        if (null == r2.fn.select2) {
          var a2 = ["open", "close", "destroy"];
          r2.fn.select2 = function(t4) {
            if ("object" == typeof (t4 = t4 || {})) return this.each(function() {
              var e4 = r2.extend(true, {}, t4);
              new s2(r2(this), e4);
            }), this;
            if ("string" != typeof t4) throw new Error("Invalid arguments for Select2: " + t4);
            var n2, i2 = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
              var e4 = o2.GetData(this, "select2");
              null == e4 && window.console && console.error && console.error("The select2('" + t4 + "') method was called on an element that is not using Select2."), n2 = e4[t4].apply(e4, i2);
            }), -1 < a2.indexOf(t4) ? this : n2;
          };
        }
        return null == r2.fn.select2.defaults && (r2.fn.select2.defaults = t3), s2;
      }), { define: e2.define, require: e2.require };
    }(), t = e.require("jquery.select2");
    return u.fn.select2.amd = e, t;
  });
  $(document).ready(function() {
    $('input[type="date"]').datepicker({
      dateFormat: "yy-mm-dd"
      // ensures format is yyyy-MM-dd
    });
    $('input[type="date"]').each(function() {
      var dateValue = $(this).datepicker("getDate");
      if (dateValue) {
        var formattedDate = $.datepicker.formatDate("yy-mm-dd", dateValue);
        $(this).val(formattedDate);
      }
    });
  });
});
