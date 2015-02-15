if ("undefined" == typeof XIAOMI || !XIAOMI) var XIAOMI = {};
XIAOMI.namespace = function() {
        var t, e, n, i = arguments,
            o = null;
        for (t = 0; t < i.length; t += 1)
            for (n = ("" + i[t]).split("."), o = XIAOMI, e = "XIAOMI" == n[0] ? 1 : 0; e < n.length; e += 1) o[n[e]] = o[n[e]] || {}, o = o[n[e]];
        return o
    }, XIAOMI.lang = XIAOMI.lang || {},
    function() {
        var t = XIAOMI.lang,
            e = Object.prototype,
            n = "[object Array]",
            i = "[object Function]",
            o = "[object Object]",
            a = [],
            r = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;",
                "`": "&#x60;"
            },
            s = ["toString", "valueOf"],
            c = {
                isArray: function(t) {
                    return e.toString.apply(t) === n
                },
                isBoolean: function(t) {
                    return "boolean" == typeof t
                },
                isFunction: function(t) {
                    return "function" == typeof t || e.toString.apply(t) === i
                },
                isNull: function(t) {
                    return null === t
                },
                isNumber: function(t) {
                    return "number" == typeof t && isFinite(t)
                },
                isObject: function(e) {
                    return e && ("object" == typeof e || t.isFunction(e)) || !1
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isUndefined: function(t) {
                    return "undefined" == typeof t
                },
                _IEEnumFix: -[1] ? function() {} : function(n, i) {
                    var o, a, r;
                    for (o = 0; o < s.length; o += 1) a = s[o], r = i[a], t.isFunction(r) && r != e[a] && (n[a] = r)
                },
                escapeHTML: function(t) {
                    return t.replace(/[&<>"'\/`]/g, function(t) {
                        return r[t]
                    })
                },
                extend: function(n, i, o) {
                    if (!i || !n) throw new Error("extend failed, please check that all dependencies are included.");
                    var a, r = function() {};
                    if (r.prototype = i.prototype, n.prototype = new r, n.prototype.constructor = n, n.superclass = i.prototype, i.prototype.constructor == e.constructor && (i.prototype.constructor = i), o) {
                        for (a in o) t.hasOwnProperty(o, a) && (n.prototype[a] = o[a]);
                        t._IEEnumFix(n.prototype, o)
                    }
                },
                augmentObject: function(e, n) {
                    if (!n || !e) throw new Error("Absorb failed, verify dependencies.");
                    var i, o, a = arguments,
                        r = a[2];
                    if (r && r !== !0)
                        for (i = 2; i < a.length; i += 1) e[a[i]] = n[a[i]];
                    else {
                        for (o in n) !r && o in e || (e[o] = n[o]);
                        t._IEEnumFix(e, n)
                    }
                    return e
                },
                augmentProto: function(e, n) {
                    if (!n || !e) throw new Error("Augment failed, verify dependencies.");
                    var i, o = [e.prototype, n.prototype];
                    for (i = 2; i < arguments.length; i += 1) o.push(arguments[i]);
                    return t.augmentObject.apply(this, o), e
                },
                dump: function(e, n) {
                    var i, o, a = [],
                        r = "{...}",
                        s = "f(){...}",
                        c = ", ",
                        u = " => ";
                    if (!t.isObject(e)) return e + "";
                    if (e instanceof Date || "nodeType" in e && "tagName" in e) return e;
                    if (t.isFunction(e)) return s;
                    if (n = t.isNumber(n) ? n : 3, t.isArray(e)) {
                        for (a.push("["), i = 0, o = e.length; o > i; i += 1) a.push(t.isObject(e[i]) ? n > 0 ? t.dump(e[i], n - 1) : r : e[i]), a.push(c);
                        a.length > 1 && a.pop(), a.push("]")
                    } else {
                        a.push("{");
                        for (i in e) t.hasOwnProperty(e, i) && (a.push(i + u), a.push(t.isObject(e[i]) ? n > 0 ? t.dump(e[i], n - 1) : r : e[i]), a.push(c));
                        a.length > 1 && a.pop(), a.push("}")
                    }
                    return a.join("")
                },
                substitute: function(e, n, i, a) {
                    for (var r, s, c, u, p, l, d, m, f, h = [], I = e.length, g = "dump", O = " ", v = "{", A = "}";
                        (r = e.lastIndexOf(v, I), !(0 > r)) && (s = e.indexOf(A, r), !(r + 1 > s));) d = e.substring(r + 1, s), u = d, l = null, c = u.indexOf(O), c > -1 && (l = u.substring(c + 1), u = u.substring(0, c)), p = n[u], i && (p = i(u, p, l)), t.isObject(p) ? t.isArray(p) ? p = t.dump(p, parseInt(l, 10)) : (l = l || "", m = l.indexOf(g), m > -1 && (l = l.substring(4)), f = p.toString(), p = f === o || m > -1 ? t.dump(p, parseInt(l, 10)) : f) : t.isString(p) || t.isNumber(p) || (p = "~-" + h.length + "-~", h[h.length] = d), e = e.substring(0, r) + p + e.substring(s + 1), a === !1 && (I = r - 1);
                    for (r = h.length - 1; r >= 0; r -= 1) e = e.replace(new RegExp("~-" + r + "-~"), "{" + h[r] + "}", "g");
                    return e
                },
                trim: function(t) {
                    try {
                        return t.replace(/^\s+|\s+$/g, "")
                    } catch (e) {
                        return t
                    }
                },
                merge: function() {
                    var e, n = {},
                        i = arguments,
                        o = i.length;
                    for (e = 0; o > e; e += 1) t.augmentObject(n, i[e], !0);
                    return n
                },
                later: function(e, n, i, o, r) {
                    e = e || 0, n = n || {};
                    var s, c, u = i,
                        p = o;
                    if (t.isString(i) && (u = n[i]), !u) throw new TypeError("method undefined");
                    return t.isUndefined(o) || t.isArray(p) || (p = [o]), s = function() {
                        u.apply(n, p || a)
                    }, c = r ? setInterval(s, e) : setTimeout(s, e), {
                        interval: r,
                        cancel: function() {
                            this.interval ? clearInterval(c) : clearTimeout(c)
                        }
                    }
                },
                isValue: function(e) {
                    return t.isObject(e) || t.isString(e) || t.isNumber(e) || t.isBoolean(e)
                }
            };
        t.hasOwnProperty = e.hasOwnProperty ? function(t, e) {
            return t && t.hasOwnProperty && t.hasOwnProperty(e)
        } : function(e, n) {
            return !t.isUndefined(e[n]) && e.constructor.prototype[n] !== e[n]
        }, c.augmentObject(t, c, !0), t.augment = t.augmentProto, XIAOMI.augment = t.augmentProto, XIAOMI.extend = t.extend
    }(),
    function() {
        function t(t, e, n) {
            var i = e && n || 0,
                o = 0;
            for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function(t) {
                    16 > o && (e[i + o++] = d[t])
                }); 16 > o;) e[i + o++] = 0;
            return e
        }

        function e(t, e) {
            var n = e || 0,
                i = l;
            return i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]]
        }

        function n(t, n, i) {
            var o = n && i || 0,
                a = n || [];
            t = t || {};
            var r = null != t.clockseq ? t.clockseq : I,
                s = null != t.msecs ? t.msecs : (new Date).getTime(),
                c = null != t.nsecs ? t.nsecs : O + 1,
                u = s - g + (c - O) / 1e4;
            if (0 > u && null == t.clockseq && (r = r + 1 & 16383), (0 > u || s > g) && null == t.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            g = s, O = c, I = r, s += 122192928e5;
            var p = (1e4 * (268435455 & s) + c) % 4294967296;
            a[o++] = p >>> 24 & 255, a[o++] = p >>> 16 & 255, a[o++] = p >>> 8 & 255, a[o++] = 255 & p;
            var l = s / 4294967296 * 1e4 & 268435455;
            a[o++] = l >>> 8 & 255, a[o++] = 255 & l, a[o++] = l >>> 24 & 15 | 16, a[o++] = l >>> 16 & 255, a[o++] = r >>> 8 | 128, a[o++] = 255 & r;
            for (var d = t.node || h, m = 0; 6 > m; m++) a[o + m] = d[m];
            return n ? n : e(a)
        }

        function i(t, n, i) {
            var a = n && i || 0;
            "string" == typeof t && (n = "binary" == t ? new p(16) : null, t = null), t = t || {};
            var r = t.random || (t.rng || o)();
            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, n)
                for (var s = 0; 16 > s; s++) n[a + s] = r[s];
            return n || e(r)
        }
        var o, a = this;
        if ("function" == typeof require) try {
            var r = require("crypto").randomBytes;
            o = r && function() {
                return r(16)
            }
        } catch (s) {}
        if (!o && a.crypto && crypto.getRandomValues) {
            var c = new Uint8Array(16);
            o = function() {
                return crypto.getRandomValues(c), c
            }
        }
        if (!o) {
            var u = new Array(16);
            o = function() {
                for (var t, e = 0; 16 > e; e++) 0 === (3 & e) && (t = 4294967296 * Math.random()), u[e] = t >>> ((3 & e) << 3) & 255;
                return u
            }
        }
        for (var p = "function" == typeof Buffer ? Buffer : Array, l = [], d = {}, m = 0; 256 > m; m++) l[m] = (m + 256).toString(16).substr(1), d[l[m]] = m;
        var f = o(),
            h = [1 | f[0], f[1], f[2], f[3], f[4], f[5]],
            I = 16383 & (f[6] << 8 | f[7]),
            g = 0,
            O = 0,
            v = i;
        if (v.v1 = n, v.v4 = i, v.parse = t, v.unparse = e, v.BufferClass = p, a.define && define.amd) define("source/js/libs/uuid", [], function() {
            return v
        });
        else if ("undefined" != typeof module && module.exports) module.exports = v;
        else {
            var A = a.uuid;
            v.noConflict = function() {
                return a.uuid = A, v
            }, a.uuid = v
        }
    }.call(this),
    function() {
        for (var t, e = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console || {}; i--;) t = n[i], o[t] || (o[t] = e)
    }(), XIAOMI.namespace("app.miniLogin, app.cookie, app.lazyLoad, app.setLoginInfo, app.updateMiniCart, app.Recommend, app.History, app.addShopCart, app.addShopCartEvent, app.search, app.miniCart, app.getRegions, app.selector, app.placeholder, app.navigation, app.footer, app.countdown, app.googleAnalytics, app.analytics"), XIAOMI.lang.preventDefault = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }, XIAOMI.app.miniLogin = function() {
        this.protocol = XIAOMI.GLOBAL_CONFIG.protocol, this.orderSite = XIAOMI.GLOBAL_CONFIG.orderSite, this.httpsOrderSite = XIAOMI.GLOBAL_CONFIG.httpsOrderSite, this.quickLoginUrl = XIAOMI.GLOBAL_CONFIG.quickLoginUrl
    }, XIAOMI.app.miniLogin.prototype = {
        constructor: XIAOMI.app.miniLogin,
        _proxyiframe: function() {
            var t = ("https" == this.protocol ? this.httpsOrderSite : this.orderSite) + "/login/proxy",
                e = "<iframe src='" + t + "' width='0' height='0' name='proxy' id='proxy' frameborder='0' scrolling='no'></iframe>";
            $(document.body).append(e), $("iframe[name='proxy']").load(function() {
                $("iframe[name='proxy']").remove()
            })
        },
        _toLogin: function(t) {
            function e(t) {
                var e = t ? t : o.quickLoginUrl,
                    n = "<iframe src='" + e + "' width='100%' height='100%' name='miniLoginFrame' id='miniLoginFrame' frameborder='0' scrolling='no'></iframe>",
                    i = $("#loginBox").attr(XIAOMI.app.cookie("sns_type") ? "data-width-sns" : "data-width"),
                    a = $("#loginBox").attr("data-Height");
                $("#loginBox-con").css({
                    height: a
                }).html(n), XIAOMI.app.cookie("sns_type") && $("#loginBox-con").css({
                    "padding-left": "100px"
                }), $("#loginBox").css({
                    width: i
                }).modal({
                    backdrop: !0,
                    keyboard: !0,
                    show: !0
                })
            }

            function n() {
                clearInterval(r), t ? window.location.href = t : window.location.reload(!0)
            }

            function i() {
                -1 !== window.location.href.indexOf("order") ? XIAOMI.app.cookie("serviceToken") && n() : XIAOMI.app.cookie("userId") && n()
            }
            var o = this,
                a = encodeURIComponent(window.location.href);
            $.ajax({
                url: o.orderSite + "/site/loginurl?followup=" + a,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(t) {
                    e(t.url)
                },
                Complete: function() {},
                error: function() {
                    e()
                }
            });
            var r = window.setInterval(i, 1e3)
        },
        init: function() {
            var t = this; - 1 !== window.location.pathname.indexOf("cart") && XIAOMI.app.cookie("userId") && !XIAOMI.app.cookie("serviceToken") && t._proxyiframe(), $("[data-needLogin='true']").live("click", function(e) {
                var n = $(this).attr("data-rel");
                t._isLogined(n, e)
            })
        },
        _isLogined: function(t, e) {
            XIAOMI.app.cookie("serviceToken") || (XIAOMI.app.cookie("userId") ? this._proxyiframe() : (e && XIAOMI.lang.preventDefault(e), this._toLogin(t)))
        },
        autoExec: function(t) {
            this._isLogined(t)
        }
    }, XIAOMI.app.cookie = function(t, e, n) {
        if (arguments.length > 1 && "[object Object]" !== String(e)) {
            if (n = jQuery.extend({}, n), (null === e || void 0 === e) && (n.expires = -1), "number" == typeof n.expires) {
                var i = n.expires,
                    o = n.expires = new Date;
                o.setDate(o.getDate() + i)
            }
            return e = String(e), document.cookie = [encodeURIComponent(t), "=", n.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        n = e || {};
        var a, r = n.raw ? function(t) {
            return t
        } : decodeURIComponent;
        return (a = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(document.cookie)) ? r(a[1]) : null
    }, XIAOMI.app.analytics = function(t, e) {
        this.options = {
            page: "首页",
            position: ["A1"],
            url: !0,
            mstSite: "CN-WW",
            mstPage: "PC",
            mstArea: "RM",
            mstPosition: ["A"],
            mstHostParams: "",
            isMst: !1,
            JQelement: !1
        };
        for (var n in e) this.options[n] = e[n];
        for (var i = this, o = i.options.url ? !0 : !1, a = function(t) {
                $.each(t, function(t, e) {
                    var n = o ? $(e).attr("href") : XIAOMI.lang.trim($(e).text()),
                        a = t,
                        s = ("'" + i.options.page + "', '" + i.options.position[r] + "_" + a + "','" + n + "'", "'" + i.options.mstSite + "-" + i.options.mstPage + "-" + i.options.mstArea + "-" + i.options.mstPosition[r] + a + "', '" + n);
                    s = s += "" === i.options.mstHostParams ? "', '" + a + "'" : "', '" + i.options.mstHostParams + "'", i.options.isMst && $(e).attr("onclick", "_msq.push(['trackEvent'," + s + "])")
                })
            }, r = 0; r < t.length; r++) {
            var s = i.options.JQelement ? t : $(t[r]).find("a");
            a(s)
        }
    }, XIAOMI.app.googleAnalytics = function(t, e) {
        this.options = {
            page: "首页",
            mstPage: "H",
            mstFunction: "A",
            mstPosition: ["A1"],
            position: ["A1"],
            url: !0,
            isMst: !1,
            JQelement: !1
        };
        for (var n in e) this.options[n] = e[n];
        for (var i = this, o = i.options.url ? !0 : !1, a = function(t) {
                $.each(t, function(t, e) {
                    var n = o ? $(e).attr("href") : XIAOMI.lang.trim($(e).text()),
                        a = t,
                        s = ("'" + i.options.page + "', '" + i.options.position[r] + "_" + a + "','" + n + "'", "'" + i.options.mstPage + "', '" + i.options.mstPage + "-" + i.options.mstFunction + "-" + i.options.position[r] + "_" + a + "','" + n + "'");
                    i.options.isMst && $(e).attr("onclick", "_msq.push(['trackEvent',event," + s + "])")
                })
            }, r = 0; r < t.length; r++) {
            var s = i.options.JQelement ? t : $(t[r]).find("a");
            a(s)
        }
    }, XIAOMI.app.lazyLoad = function(t) {
        var e = {
            defObj: "#lazyLoad-box",
            defHeight: 50
        };
        e = $.extend(e, t || {});
        var n = (e.defHeight, "object" == typeof e.defObj ? e.defObj.find("img") : $(e.defObj).find("img")),
            i = "ipad" === navigator.userAgent.toLowerCase().match(/iPad/i) ? !0 : !1,
            o = function() {
                var t = document,
                    n = i ? window.pageYOffset : Math.max(t.documentElement.scrollTop, t.body.scrollTop);
                return i && (e.defHeight = 0), t.documentElement.clientHeight + n + e.defHeight
            },
            a = function(t) {
                var e = t.attr("src2");
                e && t.css({
                    opacity: "0.3"
                }).attr("src", e).removeAttr("src2").animate({
                    opacity: "1"
                })
            },
            r = function() {
                n.each(function() {
                    i ? a($(this)) : $(this).offset().top <= o() && a($(this))
                })
            };
        r(), $(window).bind("scroll", function() {
            r()
        }), $(window).bind("resize", function() {
            r()
        })
    }, XIAOMI.app.setLoginInfo = {
        data: {
            userId: 0,
            userName: "",
            goodsNum: 0
        },
        miid: XIAOMI.app.cookie("userId"),
        init: function() {
            if (this.data.userId = this.miid, this.uuidCookie(), this.data.userId) {
                var t = XIAOMI.app.cookie("XM_" + this.miid + "_UN");
                if (this.data.userName = this.miid ? t ? t.replace(/[<>]/g, "") : t : "", this.data.goodsNum = XIAOMI.app.cookie("xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num"), this.data.goodsNum = null == this.data.goodsNum ? 0 : this.data.goodsNum, null == this.data.userName || "" === this.data.userName) {
                    var e = document.createElement("script");
                    e.src = "https://account.xiaomi.com/pass/userInfoJsonP?userId=" + this.miid + "&callback=setLoginInfo_getAccountInfo", e.type = "text/javascript", e.async = !0, document.getElementsByTagName("head")[0].appendChild(e)
                } else this.updateDom()
            }
        },
        updateDom: function() {
            var t = "";
            t = this.data.userName.length > 7 ? this.data.userName.substr(0, 7) + "..." : this.data.userName;
            var e = '<strong class="name">' + t + '</strong></span><a class="out" href="' + this.orderUrl + '">[' + "Sign Out" + "]</a>";
            $(".J_head_1").html(e), $(".J_head_2").show()
        },
        uuidCookie: function() {
            var t = ("xmguest-" + uuid.v1()).toUpperCase(),
                e = XIAOMI.app.cookie("xmuuid");
            if (!e) {
                var n = {
                    path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name,
                    domain: ".mi.com",
                    expires: 18250
                };
                XIAOMI.app.cookie("xmuuid", t, n)
            }
        }
    };
var setLoginInfo_getAccountInfo = function(t) {
    var e = XIAOMI.app.setLoginInfo;
    if (t.userId) {
        e.data.userName = t.uniqName ? t.uniqName : t.userId;
        var n = {
            path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name,
            domain: ".mi.com"
        };
        XIAOMI.app.cookie("XM_" + e.miid + "_UN", e.data.userName, n), e.updateDom()
    }
};
XIAOMI.app.updateMiniCart = function() {
    var t = XIAOMI.app.cookie("xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num");
    if (t && parseFloat(t) > 0) {
        var e = "(" + t + ")";
        return $("#miniCartNum").html(e).show(), t
    }
    return $("#miniCartNum").html("(0)").hide(), 0
}, XIAOMI.app.History = function(t) {
    var e = XIAOMI.app.cookie("xm_store_goods_history"),
        n = null,
        i = null,
        o = "<ul class='xm-goods-sublist xm-goods-sublist-l'>";
    if (!e) return !1;
    e = e.split(";");
    for (var a = e.length - 1, r = 0; a > r; r += 1) n = e[r].split(","), i = XIAOMI.GLOBAL_CONFIG.orderSite + "/item/" + n[3], o += '<li><div class="item-name"><a href="' + i + '">' + n[1] + "</a></div>", o += '<div class="item-price">' + "S$ " + n[2] + "</div>", o += '<div class="item-thumb"><a href="' + i + '"><img src="' + n[0] + '" alt="' + n[1] + '"></a></div></li>';
    return o += "</ul>", t ? void t.html(o) : o
}, XIAOMI.app.jsonP = function(t, e, n) {
    t.show();
    var i = document.createElement("script");
    itemrecommend = function(e) {
        var i = doT.template($("#" + n).html()),
            o = e.result,
            a = [];
        "error" == o && t.hide();
        for (var r in o) 5 > r && a.push(o[r]);
        0 !== a.length ? t.html(i(a)) : t.hide()
    }, requestTimer = setTimeout(function() {
        t.hide(), console.log("抱歉，无法连接至服务器。可能是您的网络出现问题，请检查一下您的网络设置，并进行重试!")
    }, 4e3), i.onload = i.onreadystatechange = function() {
        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (window.clearTimeout(requestTimer), i.onload = i.onreadystatechange = null)
    }, i.onerror = function() {
        window.clearTimeout(requestTimer)
    }, $("#getItemRecommend").remove(), i.src = e, i.type = "text/javascript", i.id = "getItemRecommend", i.async = !0, document.getElementsByTagName("head")[0].appendChild(i)
}, XIAOMI.app.addShopCart = function(t, e, n) {
    if (t && "function" == typeof e) {
        var i = XIAOMI.GLOBAL_CONFIG.orderSite + "/cart/add/" + t;
        $.ajax({
            url: i,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: function(t) {
                e(t, n);
                var i = "xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num",
                    o = XIAOMI.app.cookie(i);
                XIAOMI.app.cookie(i, Number(o) + 1, {
                    domain: ".mi.com",
                    path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name
                }), XIAOMI.app.updateMiniCart()
            }
        })
    }
}, XIAOMI.app.addShopCartEvent = function(t) {
    var e = {
        obj: ".xmAddShopCart",
        callback: null
    };
    $.extend(e, t || {}), $(document).on("click", e.obj, function() {
        var t = $(this).attr("data-gid"),
            n = $(this).attr("data-disabled"),
            i = $(this).attr("data-package");
        if ("false" === n) {
            if ($(this).attr("data-disabled", "true"), !t || "true" === i || null === e.callback) return !0;
            var o = XIAOMI.GLOBAL_CONFIG.damiaoGoodsId ? XIAOMI.GLOBAL_CONFIG.damiaoGoodsId : !1,
                a = !1;
            if (o !== !1 && "object" == typeof o && $.inArray(t, o) > -1 && (a = !0), a === !0) {
                var r = new XIAOMI.app.miniLogin;
                XIAOMI.app.cookie("serviceToken") ? XIAOMI.app.dmFun.init({
                    sku: t,
                    callback: e.callback,
                    obj: $(this)
                }) : XIAOMI.app.cookie("userId") ? (r._proxyiframe(), XIAOMI.app.dmFun.init({
                    sku: t,
                    callback: e.callback,
                    obj: $(this)
                })) : window.location.href = XIAOMI.GLOBAL_CONFIG.orderSite + "/site/login?ac=1"
            } else XIAOMI.app.addShopCart(t, e.callback, $(this))
        }
        return !1
    })
}, XIAOMI.app.miniCart = {
    loadingStr: "<div class='loading'>loading...</div>",
    speed: 500,
    init: function() {
        var t = this,
            e = null,
            n = null;
        return "undefined" != typeof miniCartDisable && miniCartDisable ? !1 : ($("#miniCart").hover(function() {
            try {
                if (cartUnFoldFlag) return !1
            } catch (i) {}
            clearTimeout(e), n = $(this).hasClass("mini-cart-on") ? !0 : !1, n || ($(this).addClass("mini-cart-on"), t.show(), t.getData())
        }, function() {
            e = setTimeout(function() {
                t.close()
            }, t.speed)
        }), $("#miniCartList").hover(function() {
            clearTimeout(e)
        }, function() {
            e = setTimeout(function() {
                t.close()
            }, t.speed)
        }), void $("#miniCartList").find("li").find(".delItem").live("click", function() {
            var e = ($(this).parent(), $(this).attr("gid"));
            return t.delGoods(e), !1
        }))
    },
    show: function() {
        $("#miniCartList").show(100)
    },
    close: function() {
        $("#miniCart").removeClass("mini-cart-on"), $("#miniCartList").html(this.loadingStr).hide()
    },
    delGoods: function(t) {
        var e = this,
            n = ("https" == XIAOMI.GLOBAL_CONFIG.protocol ? XIAOMI.GLOBAL_CONFIG.httpsOrderSite : XIAOMI.GLOBAL_CONFIG.orderSite) + "/cart/delete/" + t;
        $.getJSON(n + "?jsonpcallback=?", function() {
            e.getData(), XIAOMI.app.updateMiniCart()
        })
    },
    getData: function() {
        var t = this;
        $.ajax({
            type: "POST",
            url: ("https" == XIAOMI.GLOBAL_CONFIG.protocol ? XIAOMI.GLOBAL_CONFIG.httpsOrderSite : XIAOMI.GLOBAL_CONFIG.orderSite) + "/cart/miniNew",
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            cache: !1,
            success: function(e) {
                t.formatData(e), XIAOMI.app.updateMiniCart()
            }
        })
    },
    formatData: function(t) {
        if (0 === t.errorno && t.totalItem > 0) {
            var e, n = t.items.length,
                i = null,
                o = "<ul>",
                a = t.total > 1 ? "items" : "item";
            if (countHtml = '<div class="count"><p>Subtotal (<em>' + t.total + "</em> " + a + ")<strong><em>" + "S$ " + t.totalPrice + '</em></strong></p><a href="' + XIAOMI.GLOBAL_CONFIG.orderSite + '/cart"  class="btn btn-primary" >Checkout</a></div>', t.totalItem > 5) {
                var r = 405;
                o = "<ul style='height:" + r + "px;overflow-x:hidden;overflow-y:scroll'>"
            }
            for (var s = 0; n > s; s += 1) 0 === t.items[s].noLink ? (e = XIAOMI.CONST.ShowType[t.items[s].show_type], e = e ? '<em style="color:#e05e40;">' + e + "</em> " : "", i = XIAOMI.GLOBAL_CONFIG.orderSite + "/item/" + t.items[s].product_id, o += '<li class="clearfix"><a href="' + i + '" class="pic"><img alt="" src="' + t.items[s].image_url + '?width=60&height=60"></a><a href="' + i + '" class="name">' + e + t.items[s].product_name + '</a><span class="price">' + "S$ " + t.items[s].salePrice + " x " + t.items[s].num + '</span><a href="#" class="icon-common icon-common-close  delItem" gid="' + t.items[s].itemId + '"></a></li>') : o += '<li class="clearfix"><span class="pic"><img alt="" src="' + t.items[s].image_url + '"></span><span   class="name">' + e + t.items[s].product_name + '</span><span class="price">' + "S$ " + t.items[s].salePrice + " x " + t.items[s].num + '</span><span class="icon-common icon-common-close  delItem" gid="' + t.items[s].itemId + '"></span></li>';
            o += "</ul>", $("#miniCartList").html(o + countHtml)
        } else $("#miniCartList").html("<p class='tip'>Your cart is empty！</p>")
    }
}, XIAOMI.app.getRegions = {
    getData: function(t, e, n) {
        var i = this;
        $.ajax({
            type: "GET",
            url: XIAOMI.GLOBAL_CONFIG.httpsOrderSite + "/region/index",
            data: "parent=" + t,
            dataType: "json",
            success: function(t) {
                t && i.formatData(t, e, n)
            }
        })
    },
    formatData: function(t, e, n) {
        for (var i = t.regions, o = i.length, a = $("#" + e), r = "<option value='0'>" + a.children("option").eq(0).html() + "</option>", s = 0; o > s; s += 1) {
            var c = i[s].region_id === n ? "selected" : "";
            r += "<option zipcode='" + i[s].zipcode + "' value='" + i[s].region_id + "'" + c + ">" + i[s].region_name + "</option>"
        }
        $("#" + e).html(r).attr("disabled", !1)
    }
}, XIAOMI.countdown = {
    countdown: function(t, e) {
        var n = this,
            i = e,
            o = i - t,
            a = parseInt(o % 60, 10),
            r = parseInt(o / 60 % 60, 10),
            s = parseInt(o / 3600 % 24, 10),
            c = parseInt(o / 3600 / 24, 10),
            u = [a.toString(), r.toString(), s.toString()];
        return 1 >= o ? ["", !0] : [parseInt(u[2], 10) + parseInt(24 * c, 10) + " : " + n.formatNum(u[1]) + " : " + n.formatNum(u[0]), !1]
    },
    formatNum: function(t) {
        return 10 > t ? "0" + t : t
    },
    init: function(t, e) {
        var n = this,
            i = t || (new Date).getTime() / 1e3,
            o = e;
        if ($(".xmcounttime")) var a = n.countdown(i, o),
            r = setInterval(function() {
                a = n.countdown(i, o), a[1] ? (clearInterval(r), $(".xmcounttime").html('<label class="timebtn" >秒杀正在进行中...</label>')) : (i++, $(".xmcounttime").html('<label id="xmtime" class="time"><span>剩余时间</span>' + a[0] + "</label>"))
            }, 1e3)
    }
}, XIAOMI.app.selector = {
    defaultOption: {
        reorder: !1,
        buildLI: function(t, e, n) {
            var i = $('<li data-index="' + t + '"><span>' + e.text + "</span></li>");
            e.selected && i.addClass("selected"), n.append(i)
        },
        afterChange: function() {}
    },
    init: function(t, e) {
        function n(t) {
            t.insertBefore(t.closest("ul").children("li")[0]), r.text(t.text())
        }
        var i, o, a, r, s, c, u = this,
            p = [];
        return 0 === t.length ? t : t.length > 1 ? (t.each(function() {
            u.init($(this), e)
        }), this) : (i = $.extend({}, u.defaultOption, e), o = t, a = $('<div class="xm-select"></div>').insertAfter(o), r = $('<div class="dropdown-text"></div>'), s = $('<ul class="dropdown-menu"></ul>'), c = $('<span class="arrow-down"></span>'), o.children("option").each(function() {
            p.push({
                text: $(this).text(),
                value: $(this).attr("value"),
                selected: $(this).attr("selected")
            })
        }), $(p).each(function(t, e) {
            i.buildLI(t, e, s)
        }), a.append(r, s, c, o), o.hide(), i.reorder === !0 && 0 !== s.children("li").index(s.children(".selected")) ? n(s.children(".selected")) : r.text(p[0].text), s.on("click", "li", function() {
            var t = o.children("option").eq($(this).attr("data-index")).val();
            o.val(t).change(), $(this).addClass("selected").siblings("li").removeClass("selected"), i.reorder === !0 ? 0 !== s.children("li").index(this) && (n($(this)), s.hide()) : (r.text($(this).text()), s.hide()), i.afterChange(t)
        }), void a.on({
            mouseover: function() {
                a.addClass("toggled"), s.show()
            },
            mouseout: function() {
                a.removeClass("toggled"), s.hide()
            }
        }))
    }
}, XIAOMI.app.placeholder = function(t, e) {
    var n, i, o, a = $(t),
        r = "placeholder" in document.createElement("input");
    return 0 === a.length ? a : a.length > 1 ? (a.each(function() {
        XIAOMI.app.placeholder($(this), e)
    }), this) : (n = {
        blurClass: "xm-ph-blur"
    }, i = $.extend({}, n, e), o = a.attr("placeholder"), void(!r && o && (a.is("textarea") ? "" === a.html() && a.addClass(i.blurClass).html(o) : "" === a.val() && a.addClass(i.blurClass).val(o), a.on({
        focus: function() {
            $(this).is("textarea") ? $(this).html() === o && $(this).removeClass(i.blurClass).html("") : $(this).val() === o && $(this).removeClass(i.blurClass).val("")
        },
        blur: function() {
            $(this).is("textarea") ? "" === $(this).html() && $(this).addClass(i.blurClass).html(o) : "" === $(this).val() && $(this).addClass(i.blurClass).val(o)
        }
    }))))
}, XIAOMI.namespace("app.dmFun"), XIAOMI.app.dmFun = {
    init: function(t) {
        this.config = {
            sku: null,
            callback: null,
            obj: null,
            source: "bigtap"
        }, this.inTheQueue = !1, $.extend(this.config, t), this.startQueue(), this.getDmSys();
        var e = this;
        $("#xmDmReload").on("click", function() {
            e.config.obj.trigger("click")
        })
    },
    getDmSys: function() {
        var t = this,
            e = XIAOMI.GLOBAL_CONFIG.damiaoSite + "hdget/" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "?source=" + t.config.source + "&product=" + t.config.sku + "&addcart=1&m=1&_=" + (new Date).getTime();
        $.ajax({
            type: "GET",
            url: e,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            jsonpCallback: "hdcontrol",
            timeout: 6e4,
            error: function() {
                return t.inTheQueue ? (t.stopQueue(), void $("#xmDmError").modal({
                    show: !0,
                    backdrop: "static"
                })) : !1
            },
            success: function(e) {
                var n = e.status,
                    i = n[t.config.sku].hdurl,
                    o = n[t.config.sku].hdstart === !1 && n[t.config.sku].hdstop === !0 ? !0 : !1,
                    a = e.d22a51 ? 1e3 * e.d22a51 : 5e3;
                return t.inTheQueue ? o === !0 ? (t.stopQueue(), alert("We are sorry to tell you this item is sold out."), window.location.reload(), !1) : (t.getDmTimer && clearTimeout(t.getDmTimer), void(i ? t.getShopCart(i) : (t.inTheQueue || t.startQueue(), t.getDmTimer = setTimeout(function() {
                    t.getDmSys()
                }, a)))) : !1
            }
        })
    },
    getShopCart: function(t) {
        if (!t) return !1;
        var e = this,
            n = XIAOMI.GLOBAL_CONFIG.orderSite + "/cart/add/" + this.config.sku + "?token=" + t + "&source=" + e.config.source;
        $.ajax({
            type: "GET",
            url: n,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: function(t) {
                e.stopQueue(), e.config.callback(t, e.config.obj);
                var n = "xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num",
                    i = XIAOMI.app.cookie(n);
                XIAOMI.app.cookie(n, Number(i) + 1, {
                    domain: ".mi.com",
                    path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name
                }), XIAOMI.app.updateMiniCart()
            }
        })
    },
    startQueue: function() {
        var t = this;
        $("#xmDmError").modal("hide"), $("#xmDmQueue").modal({
            show: !0,
            backdrop: "static"
        }), t.queueAnimate(), t.inTheQueue = !0, $("#xmDmQueue").on("hidden.bs.modal", function() {
            t.stopQueue(), t.config.obj.attr("data-disabled", "false")
        })
    },
    stopQueue: function() {
        $("#xmDmQueue").modal("hide"), this.inTheQueue = !1, this.getDmTimer && clearTimeout(this.getDmTimer), window.queueAnimateTimer && clearInterval(queueAnimateTimer)
    },
    queueAnimate: function() {
        var t = 0,
            e = 200,
            n = function() {
                t -= 90, -900 >= t && (t = 0), $("#mituWalking").css({
                    "background-position": t + "px 0"
                })
            };
        window.queueAnimateTimer = setInterval(n, e)
    }
}, XIAOMI.app.footer = {
    init: function() {
        var t = this;
        t.events()
    },
    events: function() {
        var t = this;
        t.phoneAction()
    },
    phoneAction: function() {
        $(".J_footer_1").hover(function() {
            $(".J_footer_4").show(), $(".J_footer_2").show(), $(".J_footer_3").show()
        }, function() {
            $(".J_footer_4").hide(), $(".J_footer_2").hide(), $(".J_footer_3").hide()
        })
    }
}, XIAOMI.app.headPrompt = function(t) {
    if (!XIAOMI.app.cookie("headPrompt") && t) {
        var e = $('<span class="hdclose"></span>'),
            n = $('<div class="head-prompt show"><p>' + t + "</p></div>");
        e.on("click", function() {
            n.removeClass("show"), XIAOMI.app.cookie("headPrompt", "1", {
                path: "/",
                domain: ".mi.com"
            })
        }), n.append(e), $(".header:first").prepend(n)
    }
}, $(function() {
    XIAOMI.app.miniCart.init(), XIAOMI.app.updateMiniCart(), XIAOMI.app.footer.init(), XIAOMI.app.analytics([".nav .lnks-li"], {
        page: "导航",
        position: ["A1"],
        mstPage: "HP",
        mstArea: "NV",
        mstPosition: ["A"],
        isMst: !0
    }), XIAOMI.app.googleAnalytics([".hot"], {
        page: "搜索热词",
        position: ["搜索热词"],
        url: !1
    })
}), window.XIAOMI = $.extend(window.XIAOMI, {
    CONST: {
        ShowType: {
            buy: "",
            bargain: "[Sale]",
            gift: "[Gift]",
            seckill: "[Seckill]",
            special: "[Special]",
            ernie: "[Shake]",
            presales: "[Pre-sale]"
        }
    }
});