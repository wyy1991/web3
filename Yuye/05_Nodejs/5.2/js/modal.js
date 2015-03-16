! function(t) {
    var e = function(e, o) {
        this.options = o, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {
        constructor: e,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var e = this,
                o = t.Event("show");
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                var o = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), o && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), o ? e.$element.one(t.support.transition.end, function() {
                    e.$element.focus().trigger("shown")
                }) : e.$element.focus().trigger("shown")
            }))
        },
        hide: function(e) {
            e && e.preventDefault();
            e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var e = this;
            t(document).on("focusin.modal", function(t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
            })
        },
        escape: function() {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                27 == e.which && t.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var e = this,
                o = setTimeout(function() {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
            this.$element.one(t.support.transition.end, function() {
                clearTimeout(o), e.hideModal()
            })
        },
        hideModal: function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.removeBackdrop(), t.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(e) {
            var o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && o,
                    n = t(document).height(),
                    s = "100%";
                if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(document.body), this.$backdrop.css({
                        width: s,
                        height: n
                    }).click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                i ? this.$backdrop.one(t.support.transition.end, e) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
        }
    };
    var o = t.fn.modal;
    t.fn.modal = function(o) {
        return this.each(function() {
            var i = t(this),
                n = i.data("modal"),
                s = t.extend({}, t.fn.modal.defaults, i.data(), "object" == typeof o && o);
            n || i.data("modal", n = new e(this, s)), "string" == typeof o ? n[o]() : s.show && n.show()
        })
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
        var o = t(this),
            i = o.attr("href"),
            n = t(o.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            s = n.data("modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, n.data(), o.data());
        e.preventDefault(), n.modal(s).one("hide", function() {
            o.focus()
        })
    })
}(window.jQuery);