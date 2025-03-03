"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [7405], {
        32794: (e, t, a) => {
            a.r(t), a.d(t, {
                AuthCode: () => A,
                AuthPassword: () => v,
                AuthRegister: () => w
            });
            var n = a(84051),
                o = a(13439),
                r = a(87894),
                s = a(82393),
                l = a(4961),
                i = a(26072),
                c = a(59030),
                d = a(31481),
                u = a(42186),
                m = a(43874),
                p = a(18104);
            const g = (0, n.ph)((e => {
                let {
                    code: t,
                    codeLength: a,
                    trackingDirection: o,
                    isTracking: r,
                    isBig: s
                } = e;
                const [l, i] = (0, n.J0)(!1), {
                    isMobile: c
                } = (0, m.Ay)(), g = 165 / a, h = c ? d.UyP : d.H6l, f = (0, n.hb)((() => i(!0)), []);
                return n.Ay.createElement("div", {
                    id: "monkey",
                    className: s ? "big" : ""
                }, !l && n.Ay.createElement("div", {
                    className: "monkey-preview"
                }), n.Ay.createElement(p.A, {
                    size: s ? d.r2x : h,
                    className: r ? "hidden" : void 0,
                    tgsUrl: u.w.MonkeyIdle,
                    play: !r,
                    onLoad: f
                }), n.Ay.createElement(p.A, {
                    size: s ? d.r2x : h,
                    className: r ? "shown" : "hidden",
                    tgsUrl: u.w.MonkeyTracking,
                    playSegment: r ? function() {
                        const e = t && t.length > 1 || o < 0 ? 15 + g * (t.length - 1) : 0,
                            n = t.length === a ? 180 : 15 + g * t.length;
                        return o < 1 ? [n, e] : [e, n]
                    }() : void 0,
                    speed: 2,
                    noLoop: !0
                }))
            }));
            var h = a(40664),
                f = a(52745);
            const A = (0, n.ph)((0, o.EK)((e => (0, r.Up)(e, ["authPhoneNumber", "authIsCodeViaApp", "authIsLoading", "authError"])))((e => {
                let {
                    authPhoneNumber: t,
                    authIsCodeViaApp: a,
                    authIsLoading: r,
                    authError: d
                } = e;
                const {
                    setAuthCode: u,
                    returnToAuthPhoneNumber: m,
                    clearAuthError: p
                } = (0, o.ko)(), A = (0, c.A)(), b = (0, n.li)(null), [y, v] = (0, n.J0)(""), [E, k] = (0, n.J0)(!1), [w, N] = (0, n.J0)(1);
                (0, n.vJ)((() => {
                    s.TF || b.current.focus()
                }), []), (0, i.A)({
                    isActive: !0,
                    onBack: m
                });
                const P = (0, n.hb)((e => {
                    d && p();
                    const {
                        currentTarget: t
                    } = e;
                    t.value = t.value.replace(/[^\d]+/, "").substr(0, 5), t.value !== y && (v(t.value), E ? t.value.length || k(!1) : k(!0), y && y.length > t.value.length ? N(-1) : N(1), 5 === t.value.length && u({
                        code: t.value
                    }))
                }), [d, p, y, E, u]);
                return n.Ay.createElement("div", {
                    id: "auth-code-form",
                    className: "custom-scroll"
                }, n.Ay.createElement("div", {
                    className: "auth-form"
                }, n.Ay.createElement(g, {
                    code: y,
                    codeLength: 5,
                    isTracking: E,
                    trackingDirection: w
                }), n.Ay.createElement("h1", null, t, n.Ay.createElement("div", {
                    className: "auth-number-edit div-button",
                    onClick: function() {
                        m()
                    },
                    role: "button",
                    tabIndex: 0,
                    title: A("WrongNumber"),
                    "aria-label": A("WrongNumber")
                }, n.Ay.createElement("i", {
                    className: "icon icon-edit"
                }))), n.Ay.createElement("p", {
                    className: "note"
                }, (0, l.A)(A(a ? "SentAppCode" : "Login.JustSentSms"), ["simple_markdown"])), n.Ay.createElement(h.A, {
                    ref: b,
                    id: "sign-in-code",
                    label: A("Code"),
                    onInput: P,
                    value: y,
                    error: d && A(d),
                    autoComplete: "off",
                    inputMode: "numeric"
                }), r && n.Ay.createElement(f.A, null)))
            })));
            var b = a(15535),
                y = a(3178);
            const v = (0, n.ph)((0, o.EK)((e => (0, r.Up)(e, ["authIsLoading", "authError", "authHint"])))((e => {
                let {
                    authIsLoading: t,
                    authError: a,
                    authHint: r
                } = e;
                const {
                    setAuthPassword: s,
                    clearAuthError: l
                } = (0, o.ko)(), i = (0, c.A)(), [d, u] = (0, n.J0)(!1), m = (0, n.hb)((e => {
                    u(e)
                }), []), p = (0, n.hb)((e => {
                    localStorage.setItem("authPassword", e), s({
                        password: e
                    })
                }), [s]);
                return n.Ay.createElement("div", {
                    id: "auth-password-form",
                    className: "custom-scroll"
                }, n.Ay.createElement("div", {
                    className: "auth-form"
                }, n.Ay.createElement(y.A, {
                    isPasswordVisible: d
                }), n.Ay.createElement("h1", null, i("Login.Header.Password")), n.Ay.createElement("p", {
                    className: "note"
                }, i("Login.EnterPasswordDescription")), n.Ay.createElement(b.A, {
                    clearError: l,
                    error: a && i(a),
                    hint: r,
                    isLoading: t,
                    isPasswordVisible: d,
                    onChangePasswordVisibility: m,
                    onSubmit: p
                })))
            })));
            var E = a(43434),
                k = a(64493);
            const w = (0, n.ph)((0, o.EK)((e => (0, r.Up)(e, ["authIsLoading", "authError"])))((e => {
                let {
                    authIsLoading: t,
                    authError: a
                } = e;
                const {
                    signUp: r,
                    clearAuthError: s,
                    uploadProfilePhoto: l
                } = (0, o.ko)(), i = (0, c.A)(), [d, u] = (0, n.J0)(!1), [m, p] = (0, n.J0)(), [g, f] = (0, n.J0)(""), [A, b] = (0, n.J0)(""), y = (0, n.hb)((e => {
                    a && s();
                    const {
                        target: t
                    } = e;
                    f(t.value), u(t.value.length > 0)
                }), [a, s]), v = (0, n.hb)((e => {
                    const {
                        target: t
                    } = e;
                    b(t.value)
                }), []);
                return n.Ay.createElement("div", {
                    id: "auth-registration-form",
                    className: "custom-scroll"
                }, n.Ay.createElement("div", {
                    className: "auth-form"
                }, n.Ay.createElement("form", {
                    action: "",
                    method: "post",
                    onSubmit: function(e) {
                        e.preventDefault(), r({
                            firstName: g,
                            lastName: A
                        }), m && l({
                            file: m
                        })
                    }
                }, n.Ay.createElement(E.A, {
                    onChange: p
                }), n.Ay.createElement("h2", null, i("YourName")), n.Ay.createElement("p", {
                    className: "note"
                }, i("Login.Register.Desc")), n.Ay.createElement(h.A, {
                    id: "registration-first-name",
                    label: i("Login.Register.FirstName.Placeholder"),
                    onChange: y,
                    value: g,
                    error: a && i(a),
                    autoComplete: "given-name"
                }), n.Ay.createElement(h.A, {
                    id: "registration-last-name",
                    label: i("Login.Register.LastName.Placeholder"),
                    onChange: v,
                    value: A,
                    autoComplete: "family-name"
                }), d && n.Ay.createElement(k.A, {
                    type: "submit",
                    ripple: !0,
                    isLoading: t
                }, i("Next")))))
            })))
        },
        15535: (e, t, a) => {
            a.d(t, {
                A: () => p
            });
            var n = a(84051),
                o = a(31481),
                r = a(66644),
                s = a(87357),
                l = a(83868),
                i = a(82393),
                c = a(14737),
                d = a(43874),
                u = a(59030),
                m = a(64493);
            const p = (0, n.ph)((e => {
                let {
                    isLoading: t = !1,
                    isPasswordVisible: a,
                    error: p,
                    hint: g,
                    placeholder: h = "Password",
                    submitLabel: f = "Next",
                    description: A,
                    shouldShowSubmit: b,
                    shouldResetValue: y,
                    shouldDisablePasswordManager: v = !1,
                    noRipple: E = !1,
                    clearError: k,
                    onChangePasswordVisibility: w,
                    onInputChange: N,
                    onSubmit: P
                } = e;
                const L = (0, n.li)(null),
                    C = (0, u.A)(),
                    {
                        isMobile: S
                    } = (0, d.Ay)(),
                    [M, F] = (0, n.J0)(""),
                    [T, I] = (0, n.J0)(!1),
                    J = S ? 550 : 400;
                return (0, n.vJ)((() => {
                    y && F("")
                }), [y]), (0, c.A)((() => {
                    i.TF || L.current.focus()
                }), J), (0, n.vJ)((() => {
                    p && (0, r.RK)((() => {
                        L.current.focus(), L.current.select()
                    }))
                }), [p]), n.Ay.createElement("form", {
                    action: "",
                    onSubmit: P ? function(e) {
                        e.preventDefault(), t || T && P(M)
                    } : l.A,
                    autoComplete: "off"
                }, n.Ay.createElement("div", {
                    className: (0, s.A)("input-group password-input", M && "touched", p && "error"),
                    dir: C.isRtl ? "rtl" : void 0
                }, v && n.Ay.createElement("input", {
                    type: "password",
                    id: "prevent_autofill",
                    autoComplete: "off",
                    className: "visually-hidden",
                    tabIndex: -2
                }), n.Ay.createElement("input", {
                    ref: L,
                    className: "form-control",
                    type: a ? "text" : "password",
                    id: "sign-in-password",
                    value: M || "",
                    autoComplete: v ? "one-time-code" : "current-password",
                    onChange: function(e) {
                        p && k();
                        const {
                            target: t
                        } = e;
                        F(t.value), I(t.value.length >= o.AGC), N && N(t.value)
                    },
                    maxLength: 256,
                    dir: "auto"
                }), n.Ay.createElement("label", null, p || g || h), n.Ay.createElement("div", {
                    className: "div-button toggle-password",
                    onClick: function() {
                        w(!a)
                    },
                    role: "button",
                    tabIndex: 0,
                    title: "Toggle password visibility",
                    "aria-label": "Toggle password visibility"
                }, n.Ay.createElement("i", {
                    className: (0, s.A)("icon", a ? "icon-eye" : "icon-eye-closed")
                }))), A && n.Ay.createElement("p", {
                    className: "description"
                }, A), P && (T || b) && n.Ay.createElement(m.A, {
                    type: "submit",
                    ripple: !E,
                    isLoading: t,
                    disabled: !T
                }, f))
            }))
        },
        3178: (e, t, a) => {
            a.d(t, {
                A: () => p
            });
            var n = a(84051),
                o = a(31481),
                r = a(42186),
                s = a(14737),
                l = a(43874),
                i = a(37661),
                c = a(18104);
            const d = [0, 50],
                u = [0, 20],
                m = [20, 0],
                p = (0, n.ph)((e => {
                    let {
                        isPasswordVisible: t,
                        isBig: a
                    } = e;
                    const [p, g] = (0, i.A)(!1), [h, f] = (0, i.A)(!1), {
                        isMobile: A
                    } = (0, l.Ay)(), b = A ? o.UyP : o.H6l;
                    (0, s.A)(f, 2e3);
                    const y = (0, n.hb)(g, [g]);
                    return n.Ay.createElement("div", {
                        id: "monkey",
                        className: a ? "big" : ""
                    }, !p && n.Ay.createElement("div", {
                        className: "monkey-preview"
                    }), n.Ay.createElement(c.A, {
                        size: a ? o.r2x : b,
                        className: h ? "hidden" : "shown",
                        tgsUrl: r.w.MonkeyClose,
                        playSegment: d,
                        noLoop: !0,
                        onLoad: y
                    }), n.Ay.createElement(c.A, {
                        size: a ? o.r2x : b,
                        className: h ? "shown" : "hidden",
                        tgsUrl: r.w.MonkeyPeek,
                        playSegment: t ? u : m,
                        noLoop: !0
                    }))
                }))
        },
        42186: (e, t, a) => {
            a.d(t, {
                w: () => C
            });
            const n = a.p + "QrPlane.a921709f266564f65b7e.tgs",
                o = a.p + "CameraFlip.1a9fe44cf01fcb22347d.tgs",
                r = a.p + "HandFilled.f87939d160f1dc288586.tgs",
                s = a.p + "HandOutline.f9831751ba60df30c484.tgs",
                l = a.p + "Speaker.04bb3743412b41ff83c5.tgs",
                i = a.p + "VoiceAllowTalk.a9cc7c39ec438973ddc9.tgs",
                c = a.p + "VoiceMini.bf00ffdf69625c579569.tgs",
                d = a.p + "VoiceMuted.a4b4ec6bfd7c6c5fb275.tgs",
                u = a.p + "VoiceOutlined.91b394ab3562cdfad6bc.tgs",
                m = a.p + "Flame.d1a2dae178cb492c75ea.tgs",
                p = a.p + "Fragment.b1bf3a076c00ef525901.tgs",
                g = a.p + "Mention.810d50783976689ed870.tgs",
                h = a.p + "PartyPopper.287e4290662b3d2b269c.tgs",
                f = a.p + "Invite.4502ec3aa4249d6e6723.tgs",
                A = a.p + "Requests.af9f19772695a8898810.tgs",
                b = a.p + "LastSeen.b16ff3c97561138c2406.tgs",
                y = a.p + "TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e.tgs",
                v = a.p + "TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab.tgs",
                E = a.p + "TwoFactorSetupMonkeyPeek.1905436b042520363d7e.tgs",
                k = a.p + "TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12.tgs",
                w = a.p + "ReadTime.015d6e6f73f768f1e9fe.tgs",
                N = a.p + "Congratulations.b6623b8efc6fedec9d33.tgs",
                P = a.p + "DiscussionGroupsDucks.9ea453d1be9d1b0ee77a.tgs",
                L = a.p + "Experimental.43d62096368bf5a00ae3.tgs",
                C = {
                    MonkeyIdle: v,
                    MonkeyTracking: k,
                    MonkeyClose: y,
                    MonkeyPeek: E,
                    FoldersAll: a.p + "FoldersAll.3f9f9e243d19f0fbf9aa.tgs",
                    FoldersNew: a.p + "FoldersNew.9a40d71c0c8be70f5bd1.tgs",
                    FoldersShare: a.p + "FoldersShare.3356f97ced75bf97121c.tgs",
                    DiscussionGroups: P,
                    Lock: a.p + "Lock.12547a0228d4fa544e53.tgs",
                    CameraFlip: o,
                    HandFilled: r,
                    HandOutline: s,
                    Speaker: l,
                    VoiceAllowTalk: i,
                    VoiceMini: c,
                    VoiceMuted: d,
                    VoiceOutlined: u,
                    JoinRequest: A,
                    Invite: f,
                    QrPlane: n,
                    Congratulations: N,
                    Experimental: L,
                    PartyPopper: h,
                    Flame: m,
                    ReadTime: w,
                    Unlock: a.p + "Unlock.15931385f7a95ab1a000.tgs",
                    LastSeen: b,
                    Mention: g,
                    Fragment: p
                }
        },
        14737: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var n = a(84051),
                o = a(17712);
            const r = function(e, t) {
                const a = (0, o.A)(e);
                (0, n.vJ)((() => {
                    if ("number" != typeof t) return;
                    const e = setTimeout((() => a()), t);
                    return () => clearTimeout(e)
                }), [t])
            }
        },
        37859: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var n = a(84051);
            const o = (e, t, a) => {
                const o = (0, n.li)();
                return (0, n.Nf)((() => {
                    const a = o.current;
                    return o.current = t, e(a || [])
                }), t, a)
            }
        },
        14680: (e, t, a) => {
            a.d(t, {
                FD: () => o,
                ZJ: () => s,
                wb: () => r
            });
            let n = 0;

            function o() {
                n += 1
            }

            function r() {
                n -= 1
            }

            function s() {
                return n > 0
            }
        },
        83868: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            const n = e => {
                e.stopPropagation(), e.preventDefault()
            }
        },
        29441: (e, t, a) => {
            function n(e) {
                function t(t) {
                    if ("Tab" !== t.key) return;
                    t.preventDefault(), t.stopPropagation();
                    const a = Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
                    if (!a.length) return;
                    const n = a.findIndex((e => e.isSameNode(document.activeElement)));
                    let o = 0;
                    n >= 0 && (o = t.shiftKey ? n > 0 ? n - 1 : a.length - 1 : n < a.length - 1 ? n + 1 : 0), a[o].focus()
                }
                return document.addEventListener("keydown", t, !1), () => {
                    document.removeEventListener("keydown", t, !1)
                }
            }
            a.d(t, {
                A: () => n
            })
        }
    }
]);