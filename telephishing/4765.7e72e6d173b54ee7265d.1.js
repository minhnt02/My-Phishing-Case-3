"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [4765], {
        43434: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357),
                l = n(68584);
            const r = (0, a.ph)((e => {
                let {
                    title: t = "Change your profile picture",
                    disabled: n,
                    isForForum: r,
                    currentAvatarBlobUrl: i,
                    onChange: s
                } = e;
                const [c, d] = (0, a.J0)(), [m, u] = (0, a.J0)(i);
                (0, a.vJ)((() => {
                    u(i)
                }), [i]);
                const A = (0, a.hb)((e => {
                        d(void 0), s(e), m && m !== i && URL.revokeObjectURL(m), u(URL.createObjectURL(e))
                    }), [m, i, s]),
                    h = (0, a.hb)((() => {
                        d(void 0)
                    }), []),
                    v = (0, o.A)(m && "filled", n && "disabled", r && "rounded-square");
                return a.Ay.createElement("div", {
                    className: "AvatarEditable"
                }, a.Ay.createElement("label", {
                    className: v,
                    role: "button",
                    tabIndex: 0,
                    title: t
                }, a.Ay.createElement("input", {
                    type: "file",
                    onChange: function(e) {
                        const t = e.target;
                        t?.files?.[0] && (d(t.files[0]), t.value = "")
                    },
                    accept: "image/png, image/jpeg"
                }), a.Ay.createElement("i", {
                    className: "icon icon-camera-add"
                }), m && a.Ay.createElement("img", {
                    src: m,
                    draggable: !1,
                    alt: "Avatar"
                })), a.Ay.createElement(l.A, {
                    file: c,
                    onClose: h,
                    onChange: A
                }))
            }))
        },
        24713: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(84051),
                o = n(87357),
                l = n(68292),
                r = n(26607);
            const i = (0, a.ph)((e => {
                let {
                    text: t,
                    className: n,
                    isAlternateColor: i
                } = e;
                return a.Ay.createElement(r.A, {
                    className: (0, o.A)("Y3ZoW17O", i ? "Lq67O2D2" : "DWjOG2Ze", n),
                    isOpen: Boolean(t)
                }, t && a.Ay.createElement(l.A, {
                    text: t
                }))
            }))
        },
        19806: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(87357),
                l = n(4961),
                r = n(17712),
                i = n(59030),
                s = n(18276),
                c = n(64493),
                d = n(57474);

            function m() {
                return m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, m.apply(this, arguments)
            }
            const u = e => {
                    let {
                        id: t,
                        name: n,
                        value: A,
                        label: h,
                        labelText: v,
                        subLabel: p,
                        checked: g,
                        tabIndex: y,
                        disabled: b,
                        round: f,
                        blocking: E,
                        permissionGroup: C,
                        isLoading: N,
                        className: w,
                        rightIcon: k,
                        onChange: x,
                        onCheck: L,
                        onClickLabel: T,
                        nestedCheckbox: O,
                        nestedCheckboxCount: D,
                        nestedOptionList: S,
                        leftElement: R,
                        values: M = []
                    } = e;
                    const B = (0, i.A)(),
                        I = (0, a.li)(null),
                        [F, P] = (0, a.J0)(!1),
                        J = (0, r.A)((e => {
                            b || (x && x(e, S), L && L(e.currentTarget.checked))
                        })),
                        K = (0, r.A)((() => {
                            P(!F)
                        })),
                        $ = (0, o.A)("Checkbox", b && "disabled", f && "round", N && "loading", E && "blocking", O && "nested", C && "permission-group", Boolean(R) && "avatar", w);
                    return a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("label", {
                        className: $,
                        dir: B.isRtl ? "rtl" : void 0,
                        onClick: T ? function(e) {
                            e.target !== I.current && T?.(e, A)
                        } : void 0,
                        ref: I
                    }, a.Ay.createElement("input", {
                        type: "checkbox",
                        id: t,
                        name: n,
                        value: A,
                        checked: g,
                        disabled: b,
                        tabIndex: y,
                        onChange: J,
                        onClick: T ? function(e) {
                            e.stopPropagation()
                        } : void 0
                    }), a.Ay.createElement("div", {
                        className: (0, o.A)("Checkbox-main", Boolean(R) && "Nested-avatar-list")
                    }, a.Ay.createElement("span", {
                        className: "label",
                        dir: "auto"
                    }, R, "string" == typeof h ? (0, l.A)(h) : h, v && a.Ay.createElement("span", {
                        className: "ml-1"
                    }, (0, l.A)(v)), k && a.Ay.createElement("i", {
                        className: `icon icon-${k} right-icon`
                    })), p && a.Ay.createElement("span", {
                        className: "subLabel",
                        dir: "auto"
                    }, (0, l.A)(p))), O && a.Ay.createElement("span", {
                        className: "nestedButton",
                        dir: "auto"
                    }, a.Ay.createElement(c.A, {
                        className: "button",
                        color: "translucent",
                        size: "smaller",
                        onClick: K
                    }, a.Ay.createElement(s.A, {
                        name: "group-filled",
                        className: "group-icon"
                    }), D, a.Ay.createElement(s.A, {
                        name: F ? "up" : "down"
                    }))), N && a.Ay.createElement(d.A, null)), O && a.Ay.createElement("div", {
                        className: (0, o.A)("nested-checkbox-group", F && "nested-checkbox-group-open")
                    }, S?.nestedOptions?.map((e => a.Ay.createElement(u, m({
                        key: e.value,
                        leftElement: R,
                        onChange: J,
                        checked: -1 !== M.indexOf(e.value),
                        values: M
                    }, e))))))
                },
                A = (0, a.ph)(u)
        },
        77561: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(17712),
                l = n(19806);
            const r = (0, a.ph)((e => {
                let {
                    id: t,
                    options: n,
                    selected: r = [],
                    disabled: i,
                    round: s,
                    nestedCheckbox: c,
                    loadingOptions: d,
                    onChange: m
                } = e;
                const [u, A] = (0, a.J0)(r || []), h = (0, o.A)(((e, t) => {
                    const {
                        value: n,
                        checked: a
                    } = e.currentTarget;
                    let o;
                    a ? (o = [...u, n], t && n && o.push(t.value), t && n === t.value && t.nestedOptions?.forEach((e => {
                        o.includes(e.value) || o.push(e.value)
                    }))) : (o = u.filter((e => e !== n)), t && n === t.value ? t.nestedOptions?.forEach((e => {
                        o = o.filter((t => t !== e.value))
                    })) : t && ((t.nestedOptions?.map((e => e.value)) || []).some((e => o.includes(e))) || (o = o.filter((e => e !== t.value))))), A(o), m(o)
                })), v = (0, o.A)((e => {
                    const t = e?.filter((e => u.includes(e.value))).length;
                    return t > 0 ? t : void 0
                }));
                return a.Ay.createElement("div", {
                    id: t,
                    className: "radio-group"
                }, n.map((e => a.Ay.createElement(l.A, {
                    label: e.label,
                    subLabel: e.subLabel,
                    value: e.value,
                    checked: -1 !== r.indexOf(e.value),
                    disabled: e.disabled || i,
                    round: s,
                    isLoading: d ? -1 !== d.indexOf(e.value) : void 0,
                    onChange: h,
                    nestedCheckbox: c,
                    nestedCheckboxCount: v(e.nestedOptions ?? []),
                    nestedOptionList: e,
                    values: u
                }))))
            }))
        },
        94189: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(87357),
                l = n(10328),
                r = n(59030),
                i = n(64493),
                s = n(8410);
            const c = (0, a.ph)((e => {
                let {
                    isOpen: t,
                    title: n,
                    header: c,
                    text: d,
                    textParts: m,
                    confirmLabel: u = "Confirm",
                    confirmIsDestructive: A,
                    isConfirmDisabled: h,
                    isOnlyConfirm: v,
                    areButtonsInColumn: p,
                    className: g,
                    children: y,
                    confirmHandler: b,
                    onClose: f,
                    onCloseAnimationEnd: E
                } = e;
                const C = (0, r.A)(),
                    N = (0, a.li)(null),
                    w = (0, a.hb)((e => {
                        -1 === e && b()
                    }), [b]),
                    k = (0, l.A)(N, t, w, ".Button");
                return a.Ay.createElement(s.A, {
                    className: (0, o.A)("confirm", g),
                    title: n || C("Telegram"),
                    header: c,
                    isOpen: t,
                    onClose: f,
                    onCloseAnimationEnd: E
                }, d && d.split("\\n").map((e => a.Ay.createElement("p", null, e))), m || y, a.Ay.createElement("div", {
                    className: p ? "dialog-buttons-column" : "dialog-buttons mt-2",
                    ref: N,
                    onKeyDown: k
                }, a.Ay.createElement(i.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: b,
                    color: A ? "danger" : "primary",
                    disabled: h
                }, u), !v && a.Ay.createElement(i.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: f
                }, C("Cancel"))))
            }))
        },
        68584: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var a = n(84051),
                o = n(31481),
                l = n(87679),
                r = n(59030),
                i = n(64493),
                s = n(52745),
                c = n(8410);
            const d = {
                type: "blob",
                quality: 1,
                format: "jpeg",
                circle: !1,
                size: {
                    width: 1024,
                    height: 1024
                }
            };
            let m, u, A;
            const h = (0, a.ph)((e => {
                let {
                    file: t,
                    onChange: h,
                    onClose: v
                } = e;
                const [p, g] = (0, a.J0)(!1);
                (0, a.vJ)((() => {
                    t && (p ? async function(e) {
                        try {
                            const t = document.getElementById("avatar-crop");
                            if (!t) return;
                            const {
                                offsetWidth: n,
                                offsetHeight: a
                            } = t;
                            A = new m(t, {
                                enableZoom: !0,
                                boundary: {
                                    width: n,
                                    height: a
                                },
                                viewport: {
                                    width: n - 16,
                                    height: a - 16,
                                    type: "circle"
                                }
                            });
                            const o = await (0, l.zE)(e);
                            await A.bind({
                                url: o
                            })
                        } catch (e) {
                            o.Oig && console.error(e)
                        }
                    }(t): async function() {
                        return u || (u = Promise.all([n.e(4903), n.e(7643)]).then(n.bind(n, 27643)), m = (await u).default), u
                    }().then((() => g(!0))))
                }), [t, p]);
                const y = (0, r.A)(),
                    b = (0, a.hb)((async () => {
                        if (!A) return;
                        const e = await A.result(d),
                            t = "string" == typeof e ? e : (0, l.ti)(e, "avatar.jpg");
                        h(t)
                    }), [h]);
                return a.Ay.createElement(c.A, {
                    isOpen: Boolean(t),
                    onClose: v,
                    title: "Drag to reposition",
                    className: "CropModal",
                    hasCloseButton: !0
                }, p ? a.Ay.createElement("div", {
                    id: "avatar-crop"
                }) : a.Ay.createElement(s.A, null), a.Ay.createElement(i.A, {
                    className: "confirm-button",
                    round: !0,
                    color: "primary",
                    onClick: b,
                    ariaLabel: y("CropImage")
                }, a.Ay.createElement("i", {
                    className: "icon icon-check"
                })))
            }))
        },
        80401: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(87357),
                l = n(95807),
                r = n(59030);
            const i = {
                    x: 0,
                    y: 0
                },
                s = (0, a.ph)((e => {
                    let {
                        children: t,
                        id: n,
                        onDrag: s,
                        onDragEnd: d,
                        style: m,
                        knobStyle: u,
                        isDisabled: A
                    } = e;
                    const h = (0, r.A)(),
                        v = (0, a.li)(null),
                        [p, g] = (0, a.J0)({
                            isDragging: !1,
                            origin: i,
                            translation: i
                        }),
                        y = e => {
                            e.stopPropagation(), e.preventDefault();
                            const {
                                x: t,
                                y: n
                            } = c(e);
                            g({
                                ...p,
                                isDragging: !0,
                                origin: {
                                    x: t,
                                    y: n
                                },
                                width: v.current?.offsetWidth,
                                height: v.current?.offsetHeight
                            })
                        },
                        b = (0, a.hb)((e => {
                            const {
                                x: t,
                                y: a
                            } = c(e), o = {
                                x: t - p.origin.x,
                                y: a - p.origin.y
                            };
                            g((e => ({
                                ...e,
                                translation: o
                            }))), s(o, n)
                        }), [n, s, p.origin.x, p.origin.y]),
                        f = (0, a.hb)((() => {
                            g((e => ({
                                ...e,
                                isDragging: !1,
                                width: void 0,
                                height: void 0
                            }))), d()
                        }), [d]);
                    (0, a.vJ)((() => {
                        p.isDragging && A && g((e => ({
                            ...e,
                            isDragging: !1,
                            width: void 0,
                            height: void 0
                        })))
                    }), [A, p.isDragging]), (0, a.vJ)((() => (p.isDragging ? (window.addEventListener("touchmove", b), window.addEventListener("mousemove", b), window.addEventListener("touchend", f), window.addEventListener("touchcancel", f), window.addEventListener("mouseup", f)) : (window.removeEventListener("touchmove", b), window.removeEventListener("mousemove", b), window.removeEventListener("touchend", f), window.removeEventListener("touchcancel", f), window.removeEventListener("mouseup", f), g((e => ({
                        ...e,
                        translation: i
                    })))), () => {
                        p.isDragging && (window.removeEventListener("touchmove", b), window.removeEventListener("mousemove", b), window.removeEventListener("touchend", f), window.removeEventListener("touchcancel", f), window.removeEventListener("mouseup", f))
                    })), [b, f, p.isDragging]);
                    const E = (0, o.A)("kWQHzIMD", p.isDragging && "k0c5WDAy"),
                        C = (0, a.Kr)((() => (0, l.A)(p.isDragging && `transform: translate(${p.translation.x}px, ${p.translation.y}px)`, p.width ? `width: ${p.width}px` : void 0, p.height ? `height: ${p.height}px` : void 0, m)), [m, p.height, p.isDragging, p.translation.x, p.translation.y, p.width]);
                    return a.Ay.createElement("div", {
                        style: C,
                        className: E,
                        ref: v
                    }, t, !A && a.Ay.createElement("div", {
                        "aria-label": h("i18n_dragToSort"),
                        tabIndex: 0,
                        role: "button",
                        className: (0, o.A)("UpzQzcvs", "div-button", "draggable-knob"),
                        onMouseDown: y,
                        onTouchStart: y,
                        style: u
                    }, a.Ay.createElement("i", {
                        className: "icon icon-sort",
                        "aria-hidden": !0
                    })))
                }));

            function c(e) {
                let t, n;
                return "touches" in e ? (t = e.touches[0].clientX, n = e.touches[0].clientY) : (t = e.clientX, n = e.clientY), {
                    x: t,
                    y: n
                }
            }
        },
        12933: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(84051),
                o = n(87357),
                l = n(59030),
                r = n(64493);
            const i = e => {
                let {
                    isShown: t,
                    className: n,
                    color: i = "primary",
                    ariaLabel: s,
                    disabled: c,
                    onClick: d,
                    children: m
                } = e;
                const u = (0, l.A)(),
                    A = (0, o.A)("FloatingActionButton", t && "revealed", n);
                return a.Ay.createElement(r.A, {
                    className: A,
                    color: i,
                    round: !0,
                    disabled: c,
                    onClick: t && !c ? d : void 0,
                    ariaLabel: s,
                    tabIndex: -1,
                    isRtl: u.isRtl
                }, m)
            }
        },
        46222: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var a = n(84051),
                o = n(89925),
                l = n(66644),
                r = n(95807),
                i = n(9718),
                s = n(37836),
                c = n(82393),
                d = n(17712);
            const m = ".ListItem",
                u = 20,
                A = 800,
                h = e => {
                    let {
                        ref: t,
                        style: n,
                        className: h,
                        items: v,
                        itemSelector: p = m,
                        preloadBackwards: g = u,
                        sensitiveArea: y = A,
                        withAbsolutePositioning: b,
                        maxHeight: f,
                        noScrollRestore: E = !1,
                        noScrollRestoreOnTop: C = !1,
                        noFastList: N,
                        cacheBuster: w,
                        beforeChildren: k,
                        children: x,
                        onLoadMore: L,
                        onScroll: T,
                        onWheel: O,
                        onClick: D,
                        onKeyDown: S,
                        onDragOver: R,
                        onDragLeave: M
                    } = e, B = (0, a.li)(null);
                    t && (B = t);
                    const I = (0, a.li)({}),
                        [F, P] = (0, a.Kr)((() => L ? [(0, s.sg)((function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            L({
                                direction: o.TN.Backwards,
                                noScroll: e
                            })
                        }), 1e3, !0, !1), (0, s.sg)((() => {
                            L({
                                direction: o.TN.Forwards
                            })
                        }), 1e3, !0, !1)] : []), [L, v]);
                    (0, a.vJ)((() => {
                        if (!F) return;
                        if (g > 0 && (!v || v.length < g)) return void F(!0);
                        const {
                            scrollHeight: e,
                            clientHeight: t
                        } = B.current;
                        t && e < t && F()
                    }), [v, F, g]), (0, a.Nf)((() => {
                        (0, l.gm)((() => {
                            const e = B.current,
                                t = I.current;
                            let n;
                            if (t.listItemElements = e.querySelectorAll(p), t.currentAnchor && Array.from(t.listItemElements).includes(t.currentAnchor)) {
                                const {
                                    scrollTop: a
                                } = e, o = t.currentAnchor.getBoundingClientRect().top;
                                n = a + (o - t.currentAnchorTop)
                            } else {
                                const e = t.listItemElements[0];
                                e && (t.currentAnchor = e, t.currentAnchorTop = e.getBoundingClientRect().top)
                            }
                            if (b || E) return;
                            const {
                                scrollTop: a
                            } = e;
                            return C && 0 === a ? void 0 : () => {
                                (0, i.A)(e, n), t.isScrollTopJustUpdated = !0
                            }
                        }))
                    }), [v, p, E, C, w, b]);
                    const J = (0, d.A)((e => {
                        if (P && F) {
                            const {
                                isScrollTopJustUpdated: e,
                                currentAnchor: t,
                                currentAnchorTop: n
                            } = I.current, a = I.current.listItemElements;
                            if (e) return void(I.current.isScrollTopJustUpdated = !1);
                            const o = a.length,
                                l = B.current,
                                {
                                    scrollTop: r,
                                    scrollHeight: i,
                                    offsetHeight: s
                                } = l,
                                c = r <= (o ? a[0].offsetTop : 0) + y,
                                d = (o ? a[o - 1].offsetTop + a[o - 1].offsetHeight : i) - (r + s) <= y;
                            let m = !1;
                            if (c) {
                                const e = a[0];
                                if (e) {
                                    const a = e.getBoundingClientRect().top,
                                        o = t?.offsetParent && t !== e ? t.getBoundingClientRect().top : a;
                                    t && void 0 !== n && o > n && (I.current.currentAnchor = e, I.current.currentAnchorTop = a, m = !0, P())
                                }
                            }
                            if (d) {
                                const e = a[o - 1];
                                if (e) {
                                    const a = e.getBoundingClientRect().top,
                                        o = t?.offsetParent && t !== e ? t.getBoundingClientRect().top : a;
                                    t && void 0 !== n && o < n && (I.current.currentAnchor = e, I.current.currentAnchorTop = a, m = !0, F())
                                }
                            }
                            if (!m)
                                if (t?.offsetParent) I.current.currentAnchorTop = t.getBoundingClientRect().top;
                                else {
                                    const e = a[0];
                                    e && (I.current.currentAnchor = e, I.current.currentAnchorTop = e.getBoundingClientRect().top)
                                }
                        }
                        T && T(e)
                    }));
                    return a.Ay.createElement("div", {
                        ref: B,
                        className: h,
                        onScroll: J,
                        onWheel: O,
                        teactFastList: !N && !b,
                        onKeyDown: S,
                        onDragOver: R,
                        onDragLeave: M,
                        onClick: D,
                        style: n
                    }, k, b && v?.length ? a.Ay.createElement("div", {
                        teactFastList: !N,
                        style: (0, r.A)("position: relative", c.Ni && `height: ${f}px`)
                    }, x) : x)
                }
        },
        22720: (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var a = n(84051),
                o = n(66644),
                l = n(87357),
                r = n(82393),
                i = n(4961),
                s = n(10722),
                c = n(11217),
                d = n(37661),
                m = n(17712),
                u = n(94803),
                A = n(59030),
                h = n(18276),
                v = n(64493),
                p = n(9168),
                g = n(24433),
                y = n(60859),
                b = n(42452);
            const f = e => {
                let {
                    ref: t,
                    buttonRef: n,
                    icon: f,
                    iconClassName: E,
                    leftElement: C,
                    buttonClassName: N,
                    menuBubbleClassName: w,
                    secondaryIcon: k,
                    secondaryIconClassName: x,
                    rightElement: L,
                    className: T,
                    style: O,
                    children: D,
                    disabled: S,
                    allowDisabledClick: R,
                    ripple: M,
                    narrow: B,
                    inactive: I,
                    focus: F,
                    destructive: P,
                    multiline: J,
                    isStatic: K,
                    allowSelection: $,
                    withColorTransition: q,
                    contextActions: z,
                    withPortalForMenu: H,
                    href: W,
                    onMouseDown: j,
                    onClick: Y,
                    onContextMenu: _,
                    clickArg: X,
                    onSecondaryIconClick: U,
                    onDragEnter: Q
                } = e, G = (0, a.li)(null);
                t && (G = t);
                const [Z, V, ee] = (0, d.A)(), {
                    isContextMenuOpen: te,
                    contextMenuPosition: ne,
                    handleBeforeContextMenu: ae,
                    handleContextMenu: oe,
                    handleContextMenuClose: le,
                    handleContextMenuHide: re
                } = (0, s.A)(G, !z), ie = (0, m.A)((() => G.current)), se = (0, m.A)((() => G.current.closest(".custom-scroll"))), ce = (0, m.A)((() => (H ? document.querySelector("#portals") : G.current).querySelector(".ListItem-context-menu .bubble"))), de = (0, m.A)((() => ({
                    withPortal: H
                }))), {
                    positionX: me,
                    positionY: ue,
                    transformOriginX: Ae,
                    transformOriginY: he,
                    style: ve
                } = (0, u.A)(ne, ie, se, ce, de), pe = (0, m.A)((e => {
                    e.ctrlKey || e.metaKey || e.shiftKey || e.button !== r.w3.Main || e.preventDefault()
                })), ge = (0, m.A)((e => {
                    if ((!S || R) && Y) {
                        if (W) {
                            if ((e.ctrlKey || e.metaKey || e.shiftKey) && e.button === r.w3.Main || e.button === r.w3.Auxiliary) return;
                            e.preventDefault()
                        }
                        Y(e, X), r.TF && !M && (V(), (0, o.YS)(ee))
                    }
                })), {
                    handleClick: ye,
                    handleMouseDown: be
                } = (0, c.Q)((e => {
                    S && !R || 0 !== e.button || !U && !z || (e.stopPropagation(), U ? U(e) : oe(e))
                })), fe = (0, m.A)((e => {
                    I || r.TF || (!z || e.button !== r.w3.Secondary && Y || ae(e), e.button === r.w3.Main && (Y ? ge(e) : oe(e)))
                })), Ee = (0, A.A)(), Ce = (0, l.A)("ListItem", T, $ && "allow-selection", M && "has-ripple", B && "narrow", S && "disabled", R && "click-allowed", I && "inactive", ne && "has-menu-open", F && "focus", P && "destructive", J && "multiline", K && "is-static", q && "with-color-transition"), Ne = W ? "a" : "div";
                return a.Ay.createElement("div", {
                    ref: G,
                    className: Ce,
                    dir: Ee.isRtl ? "rtl" : void 0,
                    style: O,
                    onMouseDown: j,
                    onDragEnter: Q
                }, a.Ay.createElement(Ne, {
                    className: (0, l.A)("ListItem-button", Z && "active", N),
                    role: K ? void 0 : "button",
                    href: W,
                    ref: n,
                    tabIndex: K ? void 0 : 0,
                    onClick: !I && r.TF ? ge : pe,
                    onMouseDown: fe,
                    onContextMenu: _ || (!I && z ? oe : void 0)
                }, !S && !I && M && a.Ay.createElement(b.A, null), C, f && a.Ay.createElement(h.A, {
                    name: f,
                    className: (0, l.A)("ListItem-main-icon", E)
                }), J && a.Ay.createElement("div", {
                    className: "multiline-item"
                }, D), !J && D, k && a.Ay.createElement(v.A, {
                    className: (0, l.A)("secondary-icon", x),
                    round: !0,
                    color: "translucent",
                    size: "smaller",
                    onClick: ye,
                    onMouseDown: be
                }, a.Ay.createElement(h.A, {
                    name: k
                })), L), z && void 0 !== ne && a.Ay.createElement(p.A, {
                    isOpen: te,
                    transformOriginX: Ae,
                    transformOriginY: he,
                    positionX: me,
                    positionY: ue,
                    style: ve,
                    className: "ListItem-context-menu with-menu-transitions",
                    autoClose: !0,
                    onClose: le,
                    onCloseAnimationEnd: re,
                    withPortal: H,
                    bubbleClassName: w
                }, z.map((e => "isSeparator" in e ? a.Ay.createElement(y.A, {
                    key: e.key || "separator"
                }) : a.Ay.createElement(g.A, {
                    key: e.title,
                    icon: e.icon,
                    destructive: e.destructive,
                    disabled: !e.handler,
                    onClick: e.handler
                }, a.Ay.createElement("span", {
                    className: "list-item-ellipsis"
                }, (0, i.A)(e.title)))))))
            }
        },
        60859: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357);
            const l = {
                    root: "h039vb1K",
                    thin: "NGKaFgra",
                    thick: "_BdnjPEa"
                },
                r = e => {
                    let {
                        className: t,
                        size: n = "thin"
                    } = e;
                    return a.Ay.createElement("div", {
                        className: (0, o.A)(l.root, l[n], t)
                    })
                }
        },
        8410: (e, t, n) => {
            n.d(t, {
                A: () => b,
                U: () => y
            });
            var a = n(84051),
                o = n(87357),
                l = n(52674),
                r = n(14680),
                i = n(91034),
                s = n(29441),
                c = n(32706),
                d = n(26072),
                m = n(17712),
                u = n(37859),
                A = n(59030),
                h = n(34201),
                v = n(18276),
                p = n(64493),
                g = n(3325);
            const y = 200,
                b = (0, i.A)((e => {
                    let {
                        dialogRef: t,
                        title: n,
                        className: i,
                        contentClassName: b,
                        isOpen: f,
                        isSlim: E,
                        header: C,
                        hasCloseButton: N,
                        hasAbsoluteCloseButton: w,
                        noBackdrop: k,
                        noBackdropClose: x,
                        children: L,
                        style: T,
                        onClose: O,
                        onCloseAnimationEnd: D,
                        onEnter: S,
                        shouldSkipHistoryAnimations: R
                    } = e;
                    const {
                        shouldRender: M,
                        transitionClassNames: B
                    } = (0, h.A)(f, D, R, void 0, R), I = (0, a.li)(null), F = N || w;
                    (0, a.vJ)((() => {
                        if (f) return (0, r.FD)(), r.wb
                    }), [f]);
                    const P = (0, m.A)((e => !!S && (e.preventDefault(), S(), !0)));
                    (0, a.vJ)((() => f ? (0, l.A)({
                        onEsc: O,
                        onEnter: P
                    }) : void 0), [f, O, P]), (0, a.vJ)((() => f && I.current ? (0, s.A)(I.current) : void 0), [f]), (0, d.A)({
                        isActive: f,
                        onBack: O
                    }), (0, u.A)((e => {
                        let [t] = e;
                        return document.body.classList.toggle("has-open-dialog", Boolean(f)), (f || !f && void 0 !== t) && (0, c.UH)(y), () => {
                            document.body.classList.remove("has-open-dialog")
                        }
                    }), [f]);
                    const J = (0, A.A)();
                    if (!M) return;
                    const K = (0, o.A)("Modal", i, B, k && "transparent-backdrop", E && "slim");
                    return a.Ay.createElement(g.A, null, a.Ay.createElement("div", {
                        ref: I,
                        className: K,
                        tabIndex: -1,
                        role: "dialog"
                    }, a.Ay.createElement("div", {
                        className: "modal-container"
                    }, a.Ay.createElement("div", {
                        className: "modal-backdrop",
                        onClick: x ? void 0 : O
                    }), a.Ay.createElement("div", {
                        className: "modal-dialog",
                        ref: t
                    }, C || (n || F ? a.Ay.createElement("div", {
                        className: "modal-header"
                    }, F && a.Ay.createElement(p.A, {
                        className: (0, o.A)(w && "modal-absolute-close-button"),
                        round: !0,
                        color: "translucent",
                        size: "smaller",
                        ariaLabel: J("Close"),
                        onClick: O
                    }, a.Ay.createElement(v.A, {
                        name: "close"
                    })), a.Ay.createElement("div", {
                        className: "modal-title"
                    }, n)) : void 0), a.Ay.createElement("div", {
                        className: (0, o.A)("modal-content custom-scroll", b),
                        style: T
                    }, L)))))
                }))
        },
        21052: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(84051),
                o = n(13439),
                l = n(31481),
                r = n(87357),
                i = n(11778),
                s = n(34201),
                c = n(64493),
                d = n(3325);
            const m = 3e3,
                u = e => {
                    let {
                        title: t,
                        className: n,
                        message: u,
                        duration: A = m,
                        containerId: h,
                        onDismiss: v,
                        action: p,
                        actionText: g
                    } = e;
                    const y = (0, o.ko)(),
                        [b, f] = (0, a.J0)(!0),
                        E = (0, a.li)(null),
                        {
                            transitionClassNames: C
                        } = (0, s.A)(b),
                        N = (0, a.hb)((() => {
                            f(!1), setTimeout(v, 150 + l.xB5)
                        }), [v]),
                        w = (0, a.hb)((() => {
                            p && (Array.isArray(p) ? p.forEach((e => y[e.action](e.payload))) : y[p.action](p.payload)), N()
                        }), [p, y, N]);
                    (0, a.vJ)((() => b ? (0, i.A)(N) : void 0), [b, N]), (0, a.vJ)((() => (E.current = window.setTimeout(N, A), () => {
                        E.current && (clearTimeout(E.current), E.current = void 0)
                    })), [A, N]);
                    const k = (0, a.hb)((() => {
                            E.current && (clearTimeout(E.current), E.current = void 0)
                        }), []),
                        x = (0, a.hb)((() => {
                            E.current = window.setTimeout(N, A)
                        }), [A, N]);
                    return a.Ay.createElement(d.A, {
                        className: "Notification-container",
                        containerId: h
                    }, a.Ay.createElement("div", {
                        className: (0, r.A)("Notification", C, n),
                        onClick: w,
                        onMouseEnter: k,
                        onMouseLeave: x
                    }, a.Ay.createElement("div", {
                        className: "content"
                    }, t && a.Ay.createElement("div", {
                        className: "notification-title"
                    }, t), u), p && g && a.Ay.createElement(c.A, {
                        color: "translucent-white",
                        onClick: w,
                        className: "Notification-button"
                    }, g)))
                }
        },
        35913: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(66644),
                l = n(19822),
                r = n(87357),
                i = n(86974),
                s = n(41257),
                c = n(38691),
                d = n(18276);
            const m = {
                    s: 42,
                    m: 48,
                    l: 54,
                    xl: 52
                },
                u = .05,
                A = (0, a.ph)((e => {
                    let {
                        progress: t = 0,
                        size: n = "l",
                        square: A,
                        transparent: h,
                        noCross: v,
                        rotationOffset: p,
                        withColor: g,
                        onClick: y
                    } = e;
                    const b = (0, a.li)(null),
                        f = m[n],
                        E = (0, s.i)(t),
                        C = (0, c.A)(),
                        N = (0, i.A)(b, !g);
                    (0, a.vJ)((() => {
                        let e, t, a = !0,
                            r = u;
                        (0, l.i0)((() => {
                            if (!b.current) return !1;
                            E.current !== t && (r = Math.min(Math.max(u, t || 0), 1), e = Date.now(), t = E.current);
                            const o = Math.min(Math.max(u, E.current), 1),
                                i = Math.min(1, (Date.now() - e) / 600),
                                s = l.qM.easeOutQuad(i),
                                c = r + (o - r) * s;
                            return function(e, t, n, a, o, l) {
                                let r = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                                const i = t / 2,
                                    s = (t - n) / 2 - 2 * l,
                                    c = (arguments.length > 7 ? arguments[7] : void 0) ?? Date.now() % 2e3 / 2e3,
                                    d = 2 * Math.PI * c,
                                    m = d + 2 * Math.PI * o,
                                    u = e.getContext("2d");
                                r && (e.width = t, e.height = t, u.lineCap = "round", u.strokeStyle = a, u.lineWidth = n), u.clearRect(0, 0, t, t), u.beginPath(), u.arc(i, i, s, d, m), u.stroke()
                            }(b.current, f * C, ("xl" === n ? 3 : 2) * C, N ?? "white", c, C, a, p), a = !1, c < 1
                        }), o.RK)
                    }), [E, n, f, C, p, N]);
                    const w = (0, r.A)(`ProgressSpinner size-${n}`, h && "transparent", A && "square", v && "no-cross");
                    return a.Ay.createElement("div", {
                        className: w,
                        onClick: y
                    }, !v && a.Ay.createElement(d.A, {
                        name: "close"
                    }), a.Ay.createElement("canvas", {
                        ref: b,
                        className: "ProgressSpinner_canvas",
                        style: `width: ${f}; height: ${f}px;`
                    }))
                }))
        },
        98033: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(17712),
                l = n(87357),
                r = n(59030),
                i = n(57474);
            const s = (0, a.ph)((e => {
                    let {
                        id: t,
                        label: n,
                        subLabel: o,
                        subLabelClassName: s,
                        value: c,
                        name: d,
                        checked: m,
                        disabled: u,
                        hidden: A,
                        isLoading: h,
                        className: v,
                        onChange: p,
                        isLink: g,
                        onSubLabelClick: y
                    } = e;
                    const b = (0, r.A)(),
                        f = (0, l.A)("Radio", v, u && "disabled", A && "hidden-widget", h && "loading");
                    return a.Ay.createElement("label", {
                        className: f,
                        dir: b.isRtl ? "rtl" : void 0
                    }, a.Ay.createElement("input", {
                        type: "radio",
                        name: d,
                        value: c,
                        id: t,
                        checked: m,
                        onChange: p,
                        disabled: u || A
                    }), a.Ay.createElement("div", {
                        className: "Radio-main"
                    }, a.Ay.createElement("span", {
                        className: "label",
                        dir: b.isRtl ? "auto" : void 0
                    }, n), o && a.Ay.createElement("span", {
                        className: (0, l.A)(s, "subLabel", g ? "subLabelLink" : void 0),
                        dir: b.isRtl ? "auto" : void 0,
                        onClick: g ? y : void 0
                    }, o)), h && a.Ay.createElement(i.A, null))
                })),
                c = (0, a.ph)((e => {
                    let {
                        id: t,
                        name: n,
                        options: l,
                        selected: r,
                        disabled: i,
                        loadingOption: c,
                        onChange: d,
                        onClickAction: m,
                        subLabelClassName: u,
                        isLink: A,
                        subLabel: h
                    } = e;
                    const v = (0, a.hb)((e => {
                            const {
                                value: t
                            } = e.currentTarget;
                            d(t, e)
                        }), [d]),
                        p = (0, o.A)((e => () => {
                            m?.(e)
                        }));
                    return a.Ay.createElement("div", {
                        id: t,
                        className: "radio-group"
                    }, l.map((e => a.Ay.createElement(s, {
                        name: n,
                        label: e.label,
                        subLabel: h || e.subLabel,
                        subLabelClassName: u,
                        value: e.value,
                        checked: e.value === r,
                        hidden: e.hidden,
                        disabled: i,
                        isLoading: c ? c === e.value : void 0,
                        className: e.className,
                        onChange: v,
                        onSubLabelClick: p(e.value),
                        isLink: A
                    }))))
                }))
        },
        82497: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357),
                l = n(59030);
            const r = (0, a.ph)((e => {
                let {
                    options: t,
                    min: n = 0,
                    max: r = (t ? t.length - 1 : 100),
                    step: i = 1,
                    label: s,
                    value: c,
                    disabled: d,
                    bold: m,
                    className: u,
                    renderValue: A,
                    onChange: h,
                    isCenteredLayout: v
                } = e;
                const p = (0, l.A)(),
                    g = (0, a.hb)((e => {
                        h(Number(e.currentTarget.value))
                    }), [h]),
                    y = (0, o.A)(u, "RangeSlider", d && "disabled", m && "bold"),
                    b = (0, a.Kr)((() => t ? c / (t.length - 1) * 100 : (c - n) / ((r - n) / i) * 100), [t, c, r, n, i]);
                return a.Ay.createElement("div", {
                    className: y
                }, v ? a.Ay.createElement("div", {
                    className: "slider-top-row",
                    dir: p.isRtl ? "rtl" : void 0
                }, !t && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                    className: "value-min",
                    dir: "auto"
                }, n), a.Ay.createElement("span", {
                    className: "label",
                    dir: "auto"
                }, A ? A(c) : c), a.Ay.createElement("span", {
                    className: "value-max",
                    dir: "auto"
                }, r))) : s ? a.Ay.createElement("div", {
                    className: "slider-top-row",
                    dir: p.isRtl ? "rtl" : void 0
                }, a.Ay.createElement("span", {
                    className: "label",
                    dir: "auto"
                }, s), !t && a.Ay.createElement("span", {
                    className: "value",
                    dir: "auto"
                }, A ? A(c) : c)) : void 0, a.Ay.createElement("div", {
                    className: "slider-main"
                }, a.Ay.createElement("div", {
                    className: "slider-fill-track",
                    style: `width: ${b}%`
                }), a.Ay.createElement("input", {
                    min: n,
                    max: r,
                    value: c,
                    step: i,
                    type: "range",
                    className: "RangeSlider__input",
                    onChange: g
                }), t && a.Ay.createElement("div", {
                    className: "slider-options"
                }, t.map(((e, t) => a.Ay.createElement("div", {
                    className: (0, o.A)("slider-option", t === c && "active"),
                    onClick: () => h(t)
                }, e))))))
            }))
        },
        11124: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(87357);
            const l = (0, a.ph)((e => {
                let {
                    marks: t,
                    onChange: n,
                    rangeCount: l
                } = e;
                const r = (0, a.li)(null),
                    i = (0, a.Kr)((() => (t.indexOf(l) / (t.length - 1) * 100).toFixed(2)), [t, l]),
                    s = (0, a.Kr)((() => t.indexOf(l)), [t, l]),
                    c = (0, a.Kr)((() => t.indexOf(l).toString()), [t, l]);
                return (0, a.Nf)((() => {
                    r.current.style.setProperty("--fill-percentage", `${i}%`)
                }), [i]), a.Ay.createElement("div", {
                    className: "s8NMMSES"
                }, a.Ay.createElement("form", null, a.Ay.createElement("div", {
                    className: "i_wrxmyh"
                }, a.Ay.createElement("div", {
                    className: "O7SI4r_Y"
                }, t.map(((e, t) => {
                    const n = t <= s;
                    return a.Ay.createElement("div", {
                        key: e,
                        className: (0, o.A)("b6UDc3zh", n ? "VELPJsJ0" : "K8NtimIi")
                    })
                }))), a.Ay.createElement("div", {
                    className: "bVlnaLCI"
                }, t.map((e => a.Ay.createElement("div", {
                    key: e,
                    className: (0, o.A)("AFFaq4eZ", l === e && "cuogxYPG")
                }, e)))), a.Ay.createElement("input", {
                    ref: r,
                    type: "range",
                    className: "H_rMZrqn",
                    min: "0",
                    max: t.length - 1,
                    value: c,
                    onChange: e => {
                        const a = parseInt(e.target.value, 10),
                            o = t[a];
                        n(o)
                    },
                    step: "1"
                }))))
            }))
        },
        66469: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(84051),
                o = n(82393),
                l = n(17712),
                r = n(64493);

            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            let s, c = !0;
            const d = e => {
                let {
                    onActivate: t,
                    ...n
                } = e;
                const d = (0, a.li)(!1),
                    m = (0, l.A)((e => {
                        if (d.current = !0, c) return c = !1, void t(e);
                        s && (clearTimeout(s), s = void 0), s = window.setTimeout((() => {
                            d.current && t(e)
                        }), 200)
                    })),
                    u = (0, l.A)((() => {
                        d.current = !1
                    })),
                    A = (0, l.A)((e => {
                        d.current = !0, t(e)
                    }));
                return a.Ay.createElement(r.A, i({}, n, {
                    onMouseEnter: o.TF ? void 0 : m,
                    onMouseLeave: o.TF ? void 0 : u,
                    onClick: o.TF ? A : t
                }))
            }
        },
        36393: (e, t, n) => {
            n.d(t, {
                A: () => m
            });
            var a = n(84051),
                o = n(87357),
                l = n(37661),
                r = n(79174),
                i = n(59030),
                s = n(64493),
                c = n(52745),
                d = n(41036);
            const m = (0, a.ph)((e => {
                let {
                    ref: t,
                    children: n,
                    parentContainerClassName: m,
                    value: u,
                    inputId: A,
                    className: h,
                    focused: v,
                    isLoading: p = !1,
                    spinnerColor: g,
                    spinnerBackgroundColor: y,
                    placeholder: b,
                    disabled: f,
                    autoComplete: E,
                    canClose: C,
                    autoFocusSearch: N,
                    onChange: w,
                    onReset: k,
                    onFocus: x,
                    onBlur: L,
                    onSpinnerClick: T
                } = e, O = (0, a.li)(null);
                t && (O = t);
                const [D, S, R] = (0, l.A)(v);
                (0, r.A)(O, N, R), (0, a.vJ)((() => {
                    O.current && (v ? O.current.focus() : O.current.blur())
                }), [v, b]);
                const M = (0, i.A)(),
                    B = (0, a.hb)((e => {
                        if ("ArrowDown" === e.key || "Enter" === e.key) {
                            const e = document.querySelector(`.${m} .ListItem-button`);
                            e && e.focus()
                        }
                    }), [m]);
                return a.Ay.createElement("div", {
                    className: (0, o.A)("SearchInput", h, D && "has-focus"),
                    dir: M.isRtl ? "rtl" : void 0
                }, n, a.Ay.createElement("input", {
                    ref: O,
                    id: A,
                    type: "text",
                    dir: "auto",
                    placeholder: b || M("Search"),
                    className: "form-control",
                    value: u,
                    disabled: f,
                    autoComplete: E,
                    onChange: function(e) {
                        const {
                            currentTarget: t
                        } = e;
                        w(t.value)
                    },
                    onFocus: function() {
                        S(), x && x()
                    },
                    onBlur: function() {
                        R(), L && L()
                    },
                    onKeyDown: B
                }), a.Ay.createElement(d.Ay, {
                    name: "fade",
                    shouldCleanup: !0,
                    activeKey: Number(p),
                    className: "icon-container"
                }, p ? a.Ay.createElement(c.A, {
                    color: g,
                    backgroundColor: y,
                    onClick: T
                }) : a.Ay.createElement("i", {
                    className: "icon icon-search search-icon"
                })), !p && (u || C) && k && a.Ay.createElement(s.A, {
                    round: !0,
                    size: "tiny",
                    color: "translucent",
                    onClick: k
                }, a.Ay.createElement("span", {
                    className: "icon icon-close"
                })))
            }))
        },
        63173: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(87357);
            const l = (0, a.ph)((e => {
                const {
                    id: t,
                    value: n,
                    label: l,
                    hasArrow: r,
                    error: i,
                    ref: s,
                    tabIndex: c,
                    onChange: d,
                    children: m
                } = e, u = i || l, A = (0, o.A)("input-group", n && "touched", i && "error", u && "with-label", r && "with-arrow", "input-group");
                return a.Ay.createElement("div", {
                    className: A
                }, a.Ay.createElement("select", {
                    className: "form-control",
                    id: t,
                    value: n || "",
                    onChange: d,
                    tabIndex: c,
                    ref: s
                }, m), u && t && a.Ay.createElement("label", {
                    htmlFor: t
                }, u))
            }))
        },
        91356: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(52844),
                l = n(68584);
            const r = (0, a.ph)((e => {
                let {
                    onChange: t,
                    inputRef: n
                } = e;
                const [r, i] = (0, a.J0)(), s = (0, a.hb)((e => {
                    i(void 0), t(e)
                }), [t]), c = (0, a.hb)((() => {
                    i(void 0)
                }), []), d = (0, a.hb)((() => {
                    (0, o.p)("image/png, image/jpeg", (e => {
                        const t = e.target;
                        t?.files?.[0] && i(t.files[0])
                    }), !0)
                }), []);
                return a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("input", {
                    ref: n,
                    className: "axfkbhWJ",
                    onClick: d
                }), a.Ay.createElement(l.A, {
                    file: r,
                    onClose: c,
                    onChange: s
                }))
            }))
        },
        32581: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357),
                l = n(59030);
            const r = function(e) {
                let {
                    children: t,
                    className: n
                } = e;
                const r = (0, l.A)();
                return a.Ay.createElement("div", {
                    dir: r.isRtl ? "rtl" : void 0,
                    className: (0, o.A)("LxlpQKLr", n)
                }, t)
            }
        },
        55573: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(59030),
                l = n(64493);
            const r = e => {
                let {
                    count: t,
                    itemName: n,
                    itemPluralName: r,
                    isLoading: i,
                    onClick: s
                } = e;
                const c = (0, o.A)();
                return a.Ay.createElement(l.A, {
                    className: "ShowMoreButton",
                    color: "translucent",
                    size: "smaller",
                    isText: !0,
                    isLoading: i,
                    isRtl: c.isRtl,
                    onClick: s
                }, a.Ay.createElement("i", {
                    className: "icon icon-down"
                }), "Show ", t, " more ", t > 1 ? r || `${n}s` : n)
            }
        },
        26607: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(84051),
                o = n(87357),
                l = n(29886),
                r = n(34201);
            const i = e => {
                let {
                    isOpen: t,
                    isHidden: n,
                    isCustom: i,
                    id: s,
                    className: c,
                    onClick: d,
                    children: m,
                    noCloseTransition: u,
                    shouldAnimateFirstRender: A,
                    style: h,
                    ref: v
                } = e;
                const p = (0, l.A)(t),
                    g = (0, l.A)(m),
                    y = (0, a.li)(),
                    b = void 0 === p,
                    {
                        shouldRender: f,
                        transitionClassNames: E
                    } = (0, r.A)(t && !n, void 0, b && !A, !i && void 0, u);
                return p && !t && (y.current = g), (f || n) && a.Ay.createElement("div", {
                    id: s,
                    ref: v,
                    className: (0, o.A)(c, E),
                    onClick: d,
                    style: h
                }, t ? m : y.current)
            }
        },
        63152: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(87357);
            const l = (0, a.ph)((e => {
                let {
                    id: t,
                    name: n,
                    value: l,
                    label: r,
                    checked: i = !1,
                    disabled: s,
                    inactive: c,
                    noAnimation: d,
                    onChange: m,
                    onCheck: u
                } = e;
                const A = (0, a.hb)((e => {
                        m && m(e), u && u(e.currentTarget.checked)
                    }), [m, u]),
                    h = (0, o.A)("Switcher", s && "disabled", c && "inactive", d && "no-animation");
                return a.Ay.createElement("label", {
                    className: h,
                    title: r
                }, a.Ay.createElement("input", {
                    type: "checkbox",
                    id: t,
                    name: n,
                    value: l,
                    checked: i,
                    disabled: s,
                    onChange: A
                }), a.Ay.createElement("span", {
                    className: "widget"
                }))
            }))
        },
        34132: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var a = n(84051),
                o = n(66644),
                l = n(87357),
                r = n(41402),
                i = n(82393),
                s = n(4961),
                c = n(10722),
                d = n(11217),
                m = n(17712),
                u = n(94803),
                A = n(9168),
                h = n(24433),
                v = n(60859);
            const p = "Tab--active",
                g = e => {
                    let {
                        className: t,
                        title: n,
                        isActive: g,
                        isBlocked: y,
                        badgeCount: b,
                        isBadgeActive: f,
                        previousActiveTab: E,
                        onClick: C,
                        clickArg: N,
                        contextActions: w,
                        contextRootElementSelector: k
                    } = e;
                    const x = (0, a.li)(null);
                    (0, a.Nf)((() => {
                        g && void 0 === E && x.current && x.current.classList.add(p)
                    }), [g, E]), (0, a.vJ)((() => {
                        if (!g || void 0 === E) return;
                        const e = x.current,
                            t = e.parentElement.children[E];
                        if (!t) return void(g && !e.classList.contains(p) && (0, o.RK)((() => {
                            e.classList.add(p)
                        })));
                        const n = e.querySelector(".platform"),
                            a = t.querySelector(".platform"),
                            l = a.parentElement.offsetLeft - n.parentElement.offsetLeft,
                            i = a.clientWidth / n.clientWidth;
                        (0, o.RK)((() => {
                            a.classList.remove("animate"), n.classList.remove("animate"), n.style.transform = `translate3d(${l}px, 0, 0) scale3d(${i}, 1, 1)`, (0, o.gm)((() => ((0, r.A)(n), () => {
                                n.classList.add("animate"), n.style.transform = "none", t.classList.remove(p), e.classList.add(p)
                            })))
                        }))
                    }), [g, E]);
                    const {
                        contextMenuPosition: L,
                        handleContextMenu: T,
                        handleBeforeContextMenu: O,
                        handleContextMenuClose: D,
                        handleContextMenuHide: S,
                        isContextMenuOpen: R
                    } = (0, c.A)(x, !w), {
                        handleClick: M,
                        handleMouseDown: B
                    } = (0, d.Q)((e => {
                        !w || e.button !== i.w3.Secondary && C || O(e), "mousedown" === e.type && e.button !== i.w3.Main || C?.(N)
                    })), I = (0, m.A)((() => x.current)), F = (0, m.A)((() => k ? x.current.closest(k) : document.body)), P = (0, m.A)((() => document.querySelector("#portals").querySelector(".Tab-context-menu .bubble"))), J = (0, m.A)((() => ({
                        withPortal: !0
                    }))), {
                        positionX: K,
                        positionY: $,
                        transformOriginX: q,
                        transformOriginY: z,
                        style: H
                    } = (0, u.A)(L, I, F, P, J);
                    return a.Ay.createElement("div", {
                        className: (0, l.A)("Tab", C && "Tab--interactive", t),
                        onClick: M,
                        onMouseDown: B,
                        onContextMenu: T,
                        ref: x
                    }, a.Ay.createElement("span", {
                        className: "Tab_inner"
                    }, (0, s.A)(n), Boolean(b) && a.Ay.createElement("span", {
                        className: (0, l.A)("badge", f && "Tab__badge--active")
                    }, b), y && a.Ay.createElement("i", {
                        className: "icon icon-lock-badge blocked"
                    }), a.Ay.createElement("i", {
                        className: "platform"
                    })), w && void 0 !== L && a.Ay.createElement(A.A, {
                        isOpen: R,
                        transformOriginX: q,
                        transformOriginY: z,
                        positionX: K,
                        positionY: $,
                        style: H,
                        className: "Tab-context-menu",
                        autoClose: !0,
                        onClose: D,
                        onCloseAnimationEnd: S,
                        withPortal: !0
                    }, w.map((e => "isSeparator" in e ? a.Ay.createElement(v.A, {
                        key: e.key || "separator"
                    }) : a.Ay.createElement(h.A, {
                        key: e.title,
                        icon: e.icon,
                        destructive: e.destructive,
                        disabled: !e.handler,
                        onClick: e.handler
                    }, e.title)))))
                }
        },
        24680: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(31481),
                l = n(57446),
                r = n(87357),
                i = n(82393),
                s = n(36838),
                c = n(59030),
                d = n(29886),
                m = n(34132);
            const u = i.pz ? 450 : i.Ni ? 400 : 300,
                A = (0, a.ph)((e => {
                    let {
                        tabs: t,
                        areFolders: n,
                        activeTab: i,
                        big: A,
                        onSwitchTab: h,
                        contextRootElementSelector: v,
                        className: p
                    } = e;
                    const g = (0, a.li)(null),
                        y = (0, d.A)(i);
                    (0, s.A)(g, void 0, !0), (0, a.vJ)((() => {
                        const e = g.current,
                            {
                                scrollWidth: t,
                                offsetWidth: n,
                                scrollLeft: a
                            } = e;
                        if (t <= n) return;
                        const o = e.childNodes[i];
                        if (!o) return;
                        const {
                            offsetLeft: r,
                            offsetWidth: s
                        } = o, c = r - n / 2 + s / 2;
                        Math.abs(c - a) < 16 || (0, l.A)(e, c, u)
                    }), [i]);
                    const b = (0, c.A)();
                    return a.Ay.createElement("div", {
                        className: (0, r.A)("TabList", "no-scrollbar", A && "big", p),
                        ref: g,
                        dir: b.isRtl ? "rtl" : void 0
                    }, t.map(((e, t) => a.Ay.createElement(m.A, {
                        key: e.id ?? e.title,
                        title: n && e.id !== o.DSF ? e.title : b(e.title),
                        isActive: t === i,
                        isBlocked: e.isBlocked,
                        badgeCount: e.badgeCount,
                        isBadgeActive: e.isBadgeActive,
                        previousActiveTab: y,
                        onClick: h,
                        clickArg: t,
                        contextActions: e.contextActions,
                        contextRootElementSelector: v
                    }))))
                }))
        },
        94079: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(66644),
                l = n(87357),
                r = n(17712),
                i = n(59030);
            const s = (0, a.ph)((e => {
                let {
                    ref: t,
                    id: n,
                    className: s,
                    value: c,
                    label: d,
                    error: m,
                    success: u,
                    disabled: A,
                    readOnly: h,
                    placeholder: v,
                    autoComplete: p,
                    inputMode: g,
                    maxLength: y,
                    maxLengthIndicator: b,
                    tabIndex: f,
                    onChange: E,
                    onInput: C,
                    onKeyPress: N,
                    onKeyDown: w,
                    onBlur: k,
                    onPaste: x,
                    noReplaceNewlines: L
                } = e, T = (0, a.li)(null);
                t && (T = t);
                const O = (0, i.A)(),
                    D = m || u || d,
                    S = (0, l.A)("input-group", c && "touched", m ? "error" : u && "success", A && "disabled", h && "disabled", D && "with-label", s),
                    R = (0, r.A)((e => {
                        (0, o.RK)((() => {
                            e.style.height = "0", (0, o.gm)((() => {
                                const t = e.scrollHeight;
                                return () => {
                                    e.style.height = `${t}px`
                                }
                            }))
                        }))
                    }));
                (0, a.Nf)((() => {
                    const e = T.current;
                    e && R(e)
                }), []);
                const M = (0, a.hb)((e => {
                    const t = e.currentTarget;
                    if (!L) {
                        const e = t.selectionEnd;
                        t.value = t.value.replace(/\n/g, " "), t.selectionEnd = e
                    }
                    R(t), E?.(e)
                }), [L, E]);
                return a.Ay.createElement("div", {
                    className: S,
                    dir: O.isRtl ? "rtl" : void 0
                }, a.Ay.createElement("textarea", {
                    ref: T,
                    className: "form-control",
                    id: n,
                    dir: "auto",
                    value: c || "",
                    tabIndex: f,
                    placeholder: v,
                    maxLength: y,
                    autoComplete: p,
                    inputMode: g,
                    disabled: A,
                    readOnly: h,
                    onChange: M,
                    onInput: C,
                    onKeyPress: N,
                    onKeyDown: w,
                    onBlur: k,
                    onPaste: x,
                    "aria-label": D
                }), D && a.Ay.createElement("label", {
                    htmlFor: n
                }, D), b && a.Ay.createElement("div", {
                    className: "max-length-indicator"
                }, b))
            }))
        },
        61361: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(17663),
                l = n(80140),
                r = n(32625),
                i = n(30857),
                s = n(59030);
            const c = (0, a.ph)((e => {
                let {
                    langKey: t,
                    endsAt: n,
                    onEnd: c
                } = e;
                const d = (0, s.A)(),
                    m = (0, i.A)(),
                    u = (0, l.Fm)(),
                    A = u < n;
                if ((0, r.A)(m, A ? 500 : void 0), (0, a.vJ)((() => {
                        A || c?.()
                    }), [A, c]), !A) return;
                const h = n - u,
                    v = (0, o.QO)(h);
                return a.Ay.createElement("span", null, d(t, v))
            }))
        },
        629: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357);
            const l = {
                    root: "eGD1rubd",
                    widget: "EXXsQxeq",
                    min: "C4vXj96y",
                    mid: "nRNm3LRD",
                    max: "LdztzMx0",
                    filler: "kudEBJOk"
                },
                r = (0, a.ph)((function(e) {
                    let {
                        value: t
                    } = e;
                    return a.Ay.createElement("div", {
                        className: (0, o.A)(l.root, "Toggle"),
                        "aria-hidden": !0
                    }, a.Ay.createElement("i", {
                        className: (0, o.A)(l.filler, l[t])
                    }), a.Ay.createElement("i", {
                        className: (0, o.A)(l.widget, l[t])
                    }))
                }))
        },
        283: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357);
            const l = "AtWkrIxV",
                r = (0, a.ph)((() => a.Ay.createElement("div", {
                    className: "Oob7moh7"
                }, a.Ay.createElement("div", {
                    className: (0, o.A)("ao0o6F_1", l)
                }), a.Ay.createElement("div", {
                    className: "e94nYlC4"
                }, a.Ay.createElement("div", {
                    className: (0, o.A)("ANs9RCJu", l)
                }), a.Ay.createElement("div", {
                    className: (0, o.A)("RSn3O5Rx", l)
                })))))
        },
        55158: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87357),
                l = n(95807);
            const r = e => {
                let {
                    variant: t = "rectangular",
                    animation: n = "wave",
                    width: r,
                    height: i,
                    forceAspectRatio: s,
                    inline: c,
                    className: d
                } = e;
                const m = (0, o.A)("Skeleton", t, n, d, c && "inline"),
                    u = r && i ? `aspect-ratio: ${r}/${i}` : void 0,
                    A = (0, l.A)(s && u, Boolean(r) && `width: ${r}px`, !s && Boolean(i) && `height: ${i}px`);
                return a.Ay.createElement("div", {
                    className: m,
                    style: A
                }, c && " ")
            }
        }
    }
]);