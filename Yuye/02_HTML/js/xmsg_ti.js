! function() {
    function e(e, n, t) {
        if (e.addEventListener) return e.addEventListener(n, t, !1), !0;
        if (e.attachEvent) {
            var o = e.attachEvent("on" + n, t);
            return o
        }
        e["on" + n] = t
    }

    function n() {
        e(window, "load", function() {
            t(), a()
        });
        var n = window.onerror;
        window.onerror = function(e, o) {
            "function" == typeof n && n.apply(window, arguments);
            var i = o.split("/").pop();
            ++d.ec, d.us = d.us ? d.us + "," + i : i, t()
        }, w.Ready(r)
    }

    function t() {
        0 != d.ec && "undefined" != typeof _msq && "undefined" != typeof _msq.push && (_msq.push(["trackJSError", {
            ec: d.ec,
            us: d.us
        }]), d.ec = 0, d.us = "")
    }

    function o(e) {
        var n = {
            t: 0,
            l: 0
        };
        if (e.offsetParent)
            for (; e.offsetParent;) n.t += e.offsetTop, n.l += e.offsetLeft, e = e.offsetParent;
        else e.x ? n.l += e.x : e.x && (n.t += e.y);
        return {
            x: n.l,
            y: n.t
        }
    }

    function i() {
        return {
            w: window.screen.width,
            h: window.screen.height
        }
    }

    function r() {
        y = (new Date).getTime();
        var n = document.getElementsByTagName("img");
        0 === n.length && (f = u);
        for (var t = 0, r = 0, a = function() {
                ++t, t === r && (f = (new Date).getTime())
            }, d = i(), c = n.length, s = 0; c > s; ++s) {
            var l = o(n[s]);
            (0 != l.x || 0 != l.y) && l.x < d.w && l.y < d.h && (++r, e(n[s], "load", function() {
                a()
            }), e(n[s], "error", function() {
                a()
            }))
        }
        0 == r && (f = u)
    }

    function a() {
        var e = window.performance || window.webkitPerformance,
            e = e && e.timing;
        if (e) {
            var n = e.navigationStart;
            s = new Date - n, s = s > 0 ? s : 0, c = f - n, c = c > 0 ? c : s, c = c > 0 ? c : 0, l = u - n, m = y - n;
            var t = {
                fs: c,
                ua: m,
                ws: l,
                td: s
            };
            "undefined" != typeof _msq && "undefined" != typeof _msq.push && _msq.push(["trackPerformance", t])
        }
    }
    if ("undefined" == typeof _mi_ti && (_mi_ti = {}), "undefined" == typeof d) var d = {
        ec: 0,
        us: ""
    };
    var u = (new Date).getTime(),
        f = null,
        c = null,
        s = null,
        l = null,
        m = null,
        y = null,
        w = new function() {
            var e = [];
            return e.isReady = !1, e.isFunction = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, e.Ready = function(n) {
                e.initReady(), e.isFunction(n) && (e.isReady ? n() : e.push(n))
            }, e.fireReady = function() {
                if (!e.isReady) {
                    e.isReady = !0;
                    for (var n = 0, t = e.length; t > n; n++) {
                        var o = e[n];
                        o()
                    }
                    e.length = 0
                }
            }, e.initReady = function() {
                document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                    document.removeEventListener("DOMContentLoaded", arguments.callee, !1), e.fireReady()
                }, !1) : document.getElementById && (document.write('<script id="ie-domReady" defer=\'defer\'src="//:"></script>'), document.getElementById("ie-domReady").onreadystatechange = function() {
                    "complete" === this.readyState && (e.fireReady(), this.onreadystatechange = null, this.parentNode.removeChild(this))
                })
            }, e
        };
    n()
}(),
function() {
    function e(e) {
        var o = t.match(e);
        "[object Array]" == Object.prototype.toString.call(o) && "undefined" != typeof o[0] && (_STAT_HASHNAME = n + o[0])
    }
    var n = window.location.host;
    if ("buy.mi.com" == n || "store.mi.com" == n) {
        var t = window.location.pathname,
            o = /^\/([^\/]*)\/search_/,
            i = /^\/([^\/]*)\/([^\/]*)\/\d/,
            r = /^\/([^\/]*)\/([^\/]*)\//,
            a = /^\/([^\/]*)\/([^\/]*)\/([^\/]*)/;
        o.test(t) ? e(o) : i.test(t) ? e(r) : a.test(t) && e(a)
    }
}();