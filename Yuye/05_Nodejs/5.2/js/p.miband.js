! function() {
    XIAOMI.namespace("app.buyWay"), XIAOMI.app.buyWay = function(e, t) {
        function i(e) {
            this.outOfStock = function() {
                e.disable(t.text.outOfStock)
            }, this.bespeak = function() {
                e.enable(t.bespeakUrl, t.text.bespeak)
            }, this.bespeakBuy = function() {
                e.enable(t.bespeakUrl, t.text.buy)
            }, this.addToCart = function(i) {
                e.enable(XIAOMI.GLOBAL_CONFIG.orderSite + "/cart/add/" + i, t.text.buy)
            }, this.selectPacket = function(i) {
                e.enable(XIAOMI.GLOBAL_CONFIG.orderSite + "/event/selectPacket/goodsId/" + i, t.text.buy)
            }, this.presale = function() {
                e.enable(XIAOMI.GLOBAL_CONFIG.wwwSite + "/presalechoose?type=" + t.productType, t.text.buy)
            }, this.colorChoose = function() {
                e.enable(XIAOMI.GLOBAL_CONFIG.wwwSite + "/presalechoose?type=" + t.productType, t.text.buy)
            }, this.damiao = function(i, n) {
                e.enable("#", t.text.buy).addClass("J_addCart").attr("data-gid", i).attr("data-disabled", "false").attr("data-package", "false"), XIAOMI.app.addShopCartEvent({
                    obj: ".J_addCart",
                    callback: function(e) {
                        1 === e.code ? window.location.href = n ? XIAOMI.GLOBAL_CONFIG.orderSite + "/event/selectPacketForPhone/goodsid/" + i : XIAOMI.GLOBAL_CONFIG.orderSite + "/cart" : alert(e.message)
                    }
                })
            }
        }
        $.fn.buyButton = function() {
            return this.disable = function(e) {
                return this.removeClass("btn-primary").addClass("disabled").removeAttr("href").text(e), this
            }, this.enable = function(e, t) {
                return this.removeClass("disabled").addClass("btn-primary").attr("href", e).text(t), this
            }, this
        };
        var n = new i(e.buyButton());
        $.ajax({
            type: "get",
            url: XIAOMI.GLOBAL_CONFIG.orderSite + "/misc/getStarStock/hdid/" + t.productType,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: function(e) {
                if (e && e.length > 0) {
                    for (var t = 0, i = !1; t < e.length; t++)
                        if (e[t].is_presale && !e[t].presale_cos) return void n.presale();
                    for (t = 0; t < e.length && (e[t].needSubscribe && (i = !0), e[t].is_cos); t++);
                    return t == e.length ? void(i ? n.bespeak() : n.outOfStock()) : e.length > 1 ? void n.colorChoose() : e[0].needSubscribe ? void n.bespeakBuy() : e[0].is_damiao ? (-1 == $.inArray(e[0].id, XIAOMI.GLOBAL_CONFIG.damiaoGoodsId) && XIAOMI.GLOBAL_CONFIG.damiaoGoodsId.push(e[0].id), void n.damiao(e[0].id, e[0].has_packet)) : void(e[0].has_packet ? n.selectPacket(e[0].id) : n.addToCart(e[0].id))
                }
                n.outOfStock()
            }
        })
    }
}(),
function() {
    function e(e, t, n) {
        if (n = $.extend({
                transContent: !1
            }, n), e.children(".tab").length === t.children().length) {
            var a = this;
            e.on("click", ".tab", function(t) {
                var i = e.find(".tab").index(this);
                a.swt(i, t.target);
                var n = t.target.getAttribute("href");
                return "A" !== t.target.tagName || !n || 1 !== n.length && 0 === n.indexOf("#") ? void 0 : !1
            }), this.swt = function(i) {
                e.children().removeClass("current").eq(i).addClass("current"), n.transContent ? t.children().removeClass("current").eq(i).addClass("current") : t.children().addClass("hide").eq(i).removeClass("hide")
            }, i.push(e)
        }
    }

    function t(e) {
        var t = 0;
        $('a[href="' + e.substring(0, e.indexOf("_") & Math.pow(2, e.length) - 1) + '"]').each(function() {
            for (t = 0; t < i.length; t++)
                if (i[t].has(this).length > 0) {
                    $(this).click();
                    break
                }
        })
    }
    var i = [];
    $("[data-switchy-tab]").each(function() {
        var t = $(this),
            i = $(this).data("switchy-trans");
        new e(t, $('[data-switchy-panel="' + t.data("switchy-tab") + '"]'), {
            transContent: i
        })
    }), $("[data-switchy-href]").each(function() {
        $(this).click(function() {
            var e = $(this).attr("href");
            0 == e.indexOf("#") && t(e)
        })
    });
    var n = location.hash;
    "" !== n && n.length > 1 && t(n)
}(), XIAOMI.xmsh = {
    init: function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        e.showFooterStep = 0, e.pageIndex = 1, e.loadPage(), e.fpEvent(), e.page10.init(), e.pagePhone(), $(".J_mouseDown").on("click", function() {
            $.fn.fullpage.moveTo(2)
        }), $("#J_page_03_Tab").on("click", ".item", function() {
            var e = parseInt($(this).index());
            $.fn.fullpage.moveTo(3, e), $(this).addClass("current").siblings().removeClass("current")
        }), $("#J_page_04_Bulb").on("click", function() {
            var e = $(this);
            $(this).find(".dot").animate({
                top: "173px",
                left: "173px",
                opacity: "0"
            }, 500, function() {
                e.fadeOut(500), $("#section04").find(".item-1").fadeOut(500), $("#section04").find(".item-2").fadeIn(500), t = 1
            })
        }), $("#section06").find(".ripple").on("click", function() {
            var e = $(this);
            e.hasClass("ripple-disabled") || (e.siblings(".hand").addClass("hand-active"), setTimeout(function() {
                e.siblings(".phone").addClass("phone-active-1").siblings(".hand").removeClass("hand-active").siblings(".tip").addClass("tip-active")
            }, 600))
        }), $("#section06").find(".tip").on("click", function() {
            $("#J_page_06_Tab").find(".item").eq(1).trigger("click")
        }), $("#J_page_06_Tab").on("click", ".item", function() {
            var e = $(this).index(),
                t = $(this).parent();
            $(this).addClass("current").siblings().removeClass("current"), 0 === e ? (t.siblings(".hand").removeClass("hand-2").siblings(".phone").removeClass("phone-active-2").removeClass("phone-active-1"), $("#J_unlock").removeClass("unlock-2").addClass("unlock-1")) : 1 === e && (t.siblings(".hand").addClass("hand-active").addClass("hand-2").siblings(".phone").addClass("phone-active-2"), setTimeout(function() {
                t.siblings(".hand").removeClass("hand-active")
            }, 600), $("#J_unlock").removeClass("unlock-1").addClass("unlock-2"))
        }), $(".J_page_08_tab").on("click", ".tab-nav > span", function() {
            var t, i, n = $(this).index();
            return $(this).addClass("current").siblings().removeClass("current"), $(this).parent().siblings(".txt-box").find(".txt").eq(n).addClass("txt-fadeIn").siblings(".txt").removeClass("txt-fadeIn").siblings(".defautl-txt").hide(), $(this).hasClass("disabled") ? !1 : (t = $(this).parent().siblings(".video-box").find(".video").eq(n), i = t.find("video").attr("id"), t.show().siblings().hide().find("video").hide(), void e.videoPlay(i))
        }), $("body").on("mousewheel", function(a, s) {
            if (a.preventDefault(), window.mousewheelStart === !0) return !1;
            window.mousewheelStart = !0, e.listenMousewheeEvent();
            var o = s > 0 ? !0 : !1,
                d = 0 > s ? !0 : !1;
            if (1 === e.pageIndex) {
                if (o && e.showHeader(), d && window.headerIsShow) return e.hideHeader(), !1
            } else if (3 === e.pageIndex) {
                if (d) return i += 1, i > 2 ? (i = 2, $.fn.fullpage.moveTo(4)) : $("#J_page_03_Tab").find(".item").eq(i).trigger("click"), !1;
                if (o) return i -= 1, 0 > i ? (i = 0, $.fn.fullpage.moveTo(2)) : $("#J_page_03_Tab").find(".item").eq(i).trigger("click"), !1
            } else if (4 === e.pageIndex) {
                if (d) return t += 1, t > 2 ? (t = 2, $.fn.fullpage.moveTo(5)) : $("#section04").find(".item").eq(t).fadeIn(500).siblings().fadeOut(500), !1;
                if (o) return t -= 1, 0 > t ? (t = 0, $.fn.fullpage.moveTo(3)) : $("#section04").find(".item").eq(t).fadeIn(500).siblings().fadeOut(500), 0 === t && $("#section04").find(".bulb").fadeIn().find(".dot").attr("style", ""), !1
            } else if (8 === e.pageIndex) {
                if (d) return n += 1, n > 1 ? (n = 1, $.fn.fullpage.moveTo(9)) : ($("#section08").find(".item").eq(n).fadeIn(500).siblings().fadeOut(500), 1 === n && ($("#section08").find(".item").eq(n).find(".video-box .video").show(), e.videoPlay("section08_v_3"))), !1;
                if (o) return n -= 1, 0 > n ? (n = 0, $.fn.fullpage.moveTo(7)) : $("#section08").find(".item").eq(n).fadeIn(500).siblings().fadeOut(500), !1
            } else if (10 === e.pageIndex) return o && (e.showFooterStep -= 1, 0 === e.showFooterStep ? $(".site-topbar").removeClass("showfooter-1") : ($.fn.fullpage.moveTo(9), e.showFooterStep = 0)), d && (e.showFooterStep += 1, 1 === e.showFooterStep ? $(".site-topbar").addClass("showfooter-1") : e.showFooterStep = 1), !1
        })
    },
    fpEvent: function() {
        $("#shPage").fullpage({
            sectionsColor: ["#fff", "#4285f4", "#fff", "#fff", "#fff", "#fff", "#25282c", "#fff", "#fff", "#a2b900"],
            anchors: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            navigationTooltips: nav_str,
            css3: !0,
            navigation: !0,
            verticalCentered: !1,
            navigationPosition: "right",
            afterRender: function() {
                XIAOMI.xmsh.page01()
            },
            afterLoad: function(e, t) {
                switch (XIAOMI.xmsh.pageIndex = t, XIAOMI.xmsh.showFooterStep = 0, XIAOMI.xmsh.hideHeader(), t) {
                    case 2:
                        XIAOMI.xmsh.page02();
                        break;
                    case 4:
                        XIAOMI.xmsh.page04();
                        break;
                    case 5:
                        XIAOMI.xmsh.page05();
                        break;
                    case 6:
                        XIAOMI.xmsh.page06();
                        break;
                    case 7:
                        XIAOMI.xmsh.page07();
                        break;
                    case 8:
                        XIAOMI.xmsh.page08();
                        break;
                    case 9:
                        XIAOMI.xmsh.page09()
                }
            },
            onSlideLeave: function() {},
            afterSlideLoad: function(e, t, i) {
                "slide1" === i ? XIAOMI.xmsh.page03(0, "2536") : "slide2" === i ? XIAOMI.xmsh.page03(1, "7123") : "slide3" === i && XIAOMI.xmsh.page03(2, "10396")
            }
        })
    },
    loadPage: function() {
        var e = function() {
            var e = $(window).height();
            $("#shBox").height(e)
        };
        e(), $(window).on("resize", function() {
            e()
        }), this.showHeadScript()
    },
    showHeadScript: function() {
        window.headerIsShow = !1;
        var e = document.getElementById("shVideo");
        e.addEventListener("timeupdate", function() {
            var e = this.currentTime;
            e > 2 && ($("#section01").addClass("text-show"), $("#shBar").addClass("shownow"))
        })
    },
    hideHeader: function() {
        window.headerIsShow = !1, $(".site-topbar").removeClass("showheader");
        var e = function() {
            $("#shBar").addClass("initpos")
        };
        setTimeout(e, 100)
    },
    showHeader: function() {
        $(".site-topbar").addClass("showheader"), $("#shBar").removeClass("initpos"), window.headerIsShow = !0
    },
    listenMousewheeEvent: function() {
        window.listenMousewheel && clearTimeout(window.listenMousewheel), window.listenMousewheel = setTimeout(function() {
            window.mousewheelStart = !1
        }, 800)
    },
    videoPlay: function(e) {
        var t, i, n = document.getElementById(e),
            a = document.createElement("video");
        a.canPlayType && (t = a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), i = a.canPlayType('video/ogg; codecs="theora, vorbis"')), (t || i) && (n.autoplay = !0, n.load(), $("#" + e).fadeIn(), n.oncanplay = function() {
            n.style.display = "block"
        })
    },
    videoInit: function(e) {
        var t = document.getElementById(e);
        t.ended && (t.currentTime = 0, t.pause())
    },
    page01: function() {
        this.videoPlay("shVideo")
    },
    pagePhone: function() {
        var e = navigator.userAgent;
        (e.indexOf("Android") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPod") > -1 || e.indexOf("Symbian") > -1) && this.showHeader()
    },
    page02: function() {
        var e = navigator.userAgent;
        (e.indexOf("Android") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPod") > -1 || e.indexOf("Symbian") > -1) && XIAOMI.xmsh.hideHeader()
    },
    page03: function(e, t) {
        var i, n, a;
        for (i = t.split(""), n = 0; n < i.length; n += 1) a = "num num-3 num-3-" + i[n], $("#section03").find(".app").eq(e).find(".num-box").find(".num").eq(n).attr("class", a), $("#section03").find(".txt").eq(e).addClass("animation-sh-txt");
        $("#J_page_03_Tab").find(".item").eq(e).addClass("current").siblings().removeClass("current")
    },
    page04: function() {
        $("#section04").find(".txt").addClass("animation-sh-txt")
    },
    page05: function() {
        $("#section05").find(".pic").each(function() {
            var e = $(this).index();
            $(this).addClass("pic-" + e + "-active")
        })
    },
    page06: function() {},
    page07: function() {},
    page08: function() {
        var e = $("#section08").find(".item-1   .video-box   .video").eq(0);
        e.show().siblings().hide(), e.find("video").show()
    },
    page09: function() {
        $("#section09").find(".info > li > span").addClass("active")
    },
    page10: {
        init: function() {
            var e = this;
            e.watchEvent()
        },
        autoPlay: function() {},
        watchEvent: function() {
            $(".J_scrollbar").find("li").hover(function() {
                $(this).addClass("showbig")
            }, function() {
                $(this).removeClass("showbig")
            }).on("click", function() {
                var e = $(this).attr("data-class");
                $("#J_img").removeAttr("class"), $("#J_img").addClass("img-box").addClass(e)
            })
        }
    }
}, $(document).ready(function() {
    XIAOMI.xmsh.init(), $(".J_cover_tab").find("li").on("click", function() {
        $(".J_cover_tab").find("li").removeClass("choose"), $(this).addClass("choose"), $(".cover-color-img").fadeOut(500).eq($(this).index()).fadeIn(500)
    }), $("#J_barMenu").on("click", ".tab", function() {
        var e = $(this).find("a").attr("data-target");
        "#shBox" === e ? "none" == $("#shBox").css("display") && (XIAOMI.xmsh.init(), XIAOMI.xmsh.hideHeader(), $("#shSpc").hide(), $(e).show()) : "#shSpc" === e && ($("#shBox").hide().fullpage.destroy("all"), XIAOMI.xmsh.showHeader(), $("body").off(), $(e).show())
    })
});