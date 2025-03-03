"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [1799], {
        4438: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var o = n(84051),
                r = n(87357),
                i = n(37661),
                a = n(17712),
                s = n(37960),
                c = n(18104);

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            const d = 150,
                u = (0, o.ph)((function(e) {
                    const {
                        size: t = d,
                        play: n = !0,
                        noLoop: u = !0,
                        className: m,
                        noTransition: f,
                        nonInteractive: p,
                        onLoad: h,
                        onClick: g,
                        ...v
                    } = e, [A, w] = (0, i.A)(!1), y = (0, s.A)(f || A), b = (0, a.A)((() => {
                        w(), h?.()
                    })), [E, k] = (0, o.J0)(String(Math.random())), I = (0, a.A)((() => {
                        !0 === n && k(String(Math.random())), g?.()
                    }));
                    return o.Ay.createElement(c.A, l({
                        className: (0, r.A)(m, y),
                        size: t,
                        play: !0 === n ? E : n,
                        noLoop: u,
                        onClick: p ? void 0 : I,
                        onLoad: b
                    }, v))
                }))
        },
        21849: (e, t, n) => {
            n.d(t, {
                A: () => b
            });
            var o = n(84051),
                r = n(13439),
                i = n(97335),
                a = n(31481),
                s = n(59589),
                c = n(87357),
                l = n(14242),
                d = n(35049),
                u = n(4961),
                m = n(11217),
                f = n(17712),
                p = n(62587),
                h = n(37960),
                g = n(59030),
                v = n(65843),
                A = n(88554),
                w = n(18276);
            const y = (0, c.x)("Avatar");
            y.media = y("media"), y.icon = y("icon");
            const b = (0, o.ph)((e => {
                let {
                    className: t,
                    size: n = "large",
                    peer: b,
                    photo: E,
                    webPhoto: k,
                    text: I,
                    isSavedMessages: C,
                    isSavedDialog: S,
                    withVideo: F,
                    withStory: M,
                    forPremiumPromo: L,
                    withStoryGap: P,
                    withStorySolid: x,
                    forceFriendStorySolid: T,
                    forceUnreadStorySolid: N,
                    storyViewerOrigin: z,
                    storyViewerMode: R = "single-peer",
                    loopIndefinitely: $,
                    noPersonalPhoto: O,
                    onClick: J
                } = e;
                const {
                    openStoryViewer: B
                } = (0, r.ko)(), V = (0, o.li)(null), D = (0, o.li)(0), j = b && "isCustomPeer" in b, q = b && !j ? b : void 0, G = q && "title" in q, K = b && !G ? b : void 0, _ = b && G ? b : void 0, U = K && (0, s.PL)(K), H = q && (0, s.kE)(q.id), Q = q && (0, s.Qe)(q.id), Y = _?.isForum;
                let W, X;
                const Z = F && E?.isVideo,
                    ee = "jumbo" === n;
                C || U || (K && !O || _ ? W = (0, s.cP)(b, ee ? "big" : void 0) : E ? (W = `photo${E.id}?size=m`, E.isVideo && F && (X = (0, s.Pg)(E))) : k && (W = (0, s.cy)(k)));
                const te = (0, o.Kr)((() => j ? b.avatarIcon : C ? S ? "my-notes" : "avatar-saved-messages" : U ? "avatar-deleted-account" : H ? "reply-filled" : Q ? "author-hidden" : void 0), [j, C, U, H, Q, b, S]),
                    ne = (0, p.A)(W, !1, i.qZ.BlobUrl),
                    oe = (0, p.A)(X, !Z, i.qZ.BlobUrl),
                    re = Boolean(ne || oe),
                    ie = Boolean(oe && Z),
                    ae = (0, h.A)(re),
                    se = (0, f.A)((e => {
                        const t = e.currentTarget;
                        oe && ($ || (D.current += 1, D.current >= 3 && (t.style.display = "none")))
                    })),
                    ce = (0, g.A)();
                let le;
                const de = K ? (0, s.Yg)(K) : _ ? (0, s.Js)(ce, _) : I;
                if (te) le = o.Ay.createElement(w.A, {
                    name: te,
                    className: y.icon,
                    role: "img",
                    ariaLabel: de
                });
                else if (re) le = o.Ay.createElement(o.Ay.Fragment, null, o.Ay.createElement("img", {
                    src: ne,
                    className: (0, c.A)(y.media, "avatar-media", ae, oe && "poster"),
                    alt: de,
                    decoding: "async",
                    draggable: !1
                }), ie && o.Ay.createElement(v.A, {
                    canPlay: !0,
                    src: oe,
                    className: (0, c.A)(y.media, "avatar-media", "poster"),
                    muted: !0,
                    loop: $,
                    autoPlay: !0,
                    disablePictureInPicture: !0,
                    playsInline: !0,
                    draggable: !1,
                    onEnded: se
                }));
                else if (K) {
                    const e = (0, s.Yg)(K);
                    le = e ? (0, l.Qh)(e, 2) : void 0
                } else if (_) {
                    const e = (0, s.Js)(ce, _);
                    le = e && (0, l.Qh)(e, (0, s.L8)(_.id) ? 2 : 1)
                } else I && (le = (0, l.Qh)(I, 2));
                const ue = j && b.isAvatarSquare || Y && !((M || x) && q?.hasStories),
                    me = j && b.withPremiumGradient,
                    fe = (0, c.A)(`Avatar size-${n}`, t, (0, d.y)(b), !b && I && "hidden-user", C && "saved-messages", Q && "anonymous-forwards", U && "deleted-account", H && "replies-bot-account", me && "premium-gradient-bg", ue && "forum", (E || k) && "force-fit", (M && q?.hasStories || L) && "with-story-circle", x && q?.hasStories && "with-story-solid", x && T && "close-friend", x && (q?.hasUnreadStories || N) && "has-unread-story", J && "interactive", !C && !ne && "no-photo"),
                    pe = Boolean(C || ne),
                    {
                        handleClick: he,
                        handleMouseDown: ge
                    } = (0, m.Q)((e => {
                        if (M && "disabled" !== R && q?.hasStories) return e.stopPropagation(), void B({
                            peerId: q.id,
                            isSinglePeer: "single-peer" === R,
                            origin: z
                        });
                        J && J(e, pe)
                    }));
                return o.Ay.createElement("div", {
                    ref: V,
                    className: fe,
                    id: q?.id && M ? (0, s.kR)(q.id) : void 0,
                    "data-peer-id": q?.id,
                    "data-test-sender-id": a.W75 ? q?.id : void 0,
                    "aria-label": "string" == typeof le ? de : void 0,
                    onClick: he,
                    onMouseDown: ge
                }, o.Ay.createElement("div", {
                    className: "inner"
                }, "string" == typeof le ? (0, u.A)(le, ["jumbo" === n ? "hq_emoji" : "emoji"]) : le), M && q?.hasStories && o.Ay.createElement(A.A, {
                    peerId: q.id,
                    size: n,
                    withExtraGap: P
                }))
            }))
        },
        88554: (e, t, n) => {
            n.d(t, {
                $: () => E,
                A: () => b
            });
            var o = n(84051),
                r = n(13439),
                i = n(29807),
                a = n(87357),
                s = n(76023),
                c = n(38691);
            const l = {
                    micro: 1.125 * s.$,
                    tiny: 2.125 * s.$,
                    mini: 1.625 * s.$,
                    small: 2.25 * s.$,
                    "small-mobile": 2.625 * s.$,
                    medium: 2.875 * s.$,
                    large: 3.5 * s.$,
                    giant: 5.125 * s.$,
                    jumbo: 7.625 * s.$
                },
                d = ["#34C578", "#3CA3F3"],
                u = ["#C9EB38", "#09C167"],
                m = ["#A667FF", "#55A5FF"],
                f = .125 * s.$,
                p = .0625 * s.$,
                h = 2,
                g = 45,
                v = Math.PI / 4,
                A = 2 * Math.PI * .1,
                w = v - A / 2,
                y = v + A / 2,
                b = (0, o.ph)((0, r.EK)(((e, t) => {
                    let {
                        peerId: n
                    } = t;
                    const o = (0, i._bp)(e, n),
                        r = (0, i.SJA)(e);
                    return {
                        peerStories: o?.byId,
                        storyIds: o?.orderedIds,
                        lastReadId: o?.lastReadId,
                        appTheme: r
                    }
                }))((function(e) {
                    let {
                        size: t = "large",
                        className: n,
                        peerStories: r,
                        storyIds: i,
                        lastReadId: s,
                        withExtraGap: d,
                        appTheme: u
                    } = e;
                    const m = (0, o.li)(null),
                        f = (0, c.A)(),
                        p = (0, o.Kr)((() => (i || []).reduce(((e, t) => (e.total += 1, s && t <= s && (e.read += 1), e)), {
                            total: 0,
                            read: 0
                        })), [s, i]),
                        h = (0, o.Kr)((() => !(!r || !i?.length) && i.some((e => {
                            const t = r[e];
                            if (!t || !("isForCloseFriends" in t)) return !1;
                            const n = s && t.id <= s;
                            return t.isForCloseFriends && !n
                        }))), [s, r, i]);
                    if ((0, o.Nf)((() => {
                            m.current && E({
                                canvas: m.current,
                                size: l[t] * f,
                                segmentsCount: p.total,
                                color: h ? "green" : "blue",
                                readSegmentsCount: p.read,
                                withExtraGap: d,
                                readSegmentColor: "dark" === u ? "#737373" : "#C4C9CC",
                                dpr: f
                            })
                        }), [u, h, t, p.read, p.total, d, f]), !p.total) return;
                    const g = l[t];
                    return o.Ay.createElement("canvas", {
                        ref: m,
                        className: (0, a.A)("story-circle", t, n),
                        style: `max-width: ${g}px; max-height: ${g}px;`
                    })
                })));

            function E(e) {
                let {
                    canvas: t,
                    size: n,
                    color: o,
                    segmentsCount: r,
                    readSegmentsCount: i = 0,
                    withExtraGap: a = !1,
                    readSegmentColor: c,
                    dpr: v
                } = e;
                r > g && (i = Math.round(i * (g / r)), r = g);
                const A = Math.max(Math.max(n - l.large * v, 0) / v / s.$ / 1.5, 1) * v,
                    b = t.getContext("2d");
                if (!b) return;
                t.width = n, t.height = n;
                const E = n / 2,
                    k = (n - f * A) / 2,
                    I = 2 * Math.PI / r,
                    C = h / 100 * (2 * Math.PI),
                    S = b.createLinearGradient(0, 0, Math.ceil(n * Math.cos(Math.PI / 2)), Math.ceil(n * Math.sin(Math.PI / 2))),
                    F = "purple" === o ? m : "green" === o ? u : d;
                F.forEach(((e, t) => {
                    S.addColorStop(t / (F.length - 1), e)
                })), b.lineCap = "round", b.clearRect(0, 0, n, n), Array.from({
                    length: r
                }).forEach(((e, t) => {
                    const n = t < i;
                    let o = t * I - Math.PI / 2 + C / 2,
                        s = o + I - (r > 1 ? C : 0);
                    if (b.strokeStyle = n ? c : S, b.lineWidth = (n ? p : f) * A, a) {
                        if (o >= w && s <= y) return;
                        o < w && s > y ? (b.beginPath(), b.arc(E, E, k, y, s), b.stroke(), s = w) : o < w && s > w ? s = w : o < y && s > y && (o = y)
                    }
                    b.beginPath(), b.arc(E, E, k, o, s), b.stroke()
                }))
            }
        },
        2578: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var o = n(84051),
                r = n(59030);
            const i = (0, o.ph)((e => {
                let {
                    fakeType: t
                } = e;
                const n = (0, r.A)();
                return o.Ay.createElement("span", {
                    className: "FakeIcon"
                }, n("fake" === t ? "FakeMessage" : "ScamMessage"))
            }))
        },
        34431: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var o = n(84051),
                r = n(13439),
                i = n(31481),
                a = n(59589),
                s = n(87357),
                c = n(85982),
                l = n(83868),
                d = n(4961),
                u = n(17712),
                m = n(59030),
                f = n(87412),
                p = n(2578),
                h = n(9267);
            const g = () => o.Ay.createElement("svg", {
                    className: "VerifiedIcon",
                    viewBox: "0 0 24 24"
                }, o.Ay.createElement("path", {
                    d: "M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z",
                    style: "fill: var(--color-fill)"
                }), o.Ay.createElement("path", {
                    d: "M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z",
                    style: "fill: var(--color-checkmark)"
                })),
                v = "QljEeKI5",
                A = (0, o.ph)((e => {
                    let {
                        className: t,
                        peer: n,
                        noVerified: A,
                        noFake: w,
                        withEmojiStatus: y,
                        emojiStatusSize: b,
                        isSavedMessages: E,
                        isSavedDialog: k,
                        noLoopLimit: I,
                        canCopyTitle: C,
                        onEmojiStatusClick: S,
                        observeIntersection: F,
                        iconElement: M
                    } = e;
                    const L = (0, m.A)(),
                        {
                            showNotification: P
                        } = (0, r.ko)(),
                        x = "id" in n ? n : void 0,
                        T = "isCustomPeer" in n ? n : void 0,
                        N = x && (0, a.L8)(x.id),
                        z = x && (N ? (0, a.Yg)(x) : (0, a.Js)(L, x)),
                        R = N && n.isPremium,
                        $ = (0, u.A)((e => {
                            z && C && ((0, l.A)(e), (0, c.eM)(z), P({
                                message: (N ? "User" : "Chat") + " name was copied"
                            }))
                        })),
                        O = (0, o.Kr)((() => T ? L(T.titleKey) : E ? L(k ? "MyNotes" : "SavedMessages") : (0, a.Qe)(x.id) ? L("AnonymousForward") : (0, a.kE)(x.id) ? L("RepliesTitle") : void 0), [T, k, E, L, x]);
                    return O ? o.Ay.createElement("div", {
                        className: (0, s.A)("title", v, t)
                    }, o.Ay.createElement("h3", null, O)) : o.Ay.createElement("div", {
                        className: (0, s.A)("title", v, t)
                    }, o.Ay.createElement("h3", {
                        dir: "auto",
                        role: "button",
                        className: (0, s.A)("fullName", "AS54Cntu", C && "vr53L_9p"),
                        onClick: $
                    }, (0, d.A)(z || "")), !M && n && o.Ay.createElement(o.Ay.Fragment, null, !A && x?.isVerified && o.Ay.createElement(g, null), !w && x?.fakeType && o.Ay.createElement(p.A, {
                        fakeType: x.fakeType
                    }), y && x?.emojiStatus && o.Ay.createElement(f.A, {
                        documentId: x.emojiStatus.documentId,
                        size: b,
                        loopLimit: I ? void 0 : i.J$1,
                        observeIntersectionForLoading: F,
                        onClick: S
                    }), y && !x?.emojiStatus && R && o.Ay.createElement(h.A, null)), M)
                }))
        },
        42186: (e, t, n) => {
            n.d(t, {
                w: () => F
            });
            const o = n.p + "QrPlane.a921709f266564f65b7e.tgs",
                r = n.p + "CameraFlip.1a9fe44cf01fcb22347d.tgs",
                i = n.p + "HandFilled.f87939d160f1dc288586.tgs",
                a = n.p + "HandOutline.f9831751ba60df30c484.tgs",
                s = n.p + "Speaker.04bb3743412b41ff83c5.tgs",
                c = n.p + "VoiceAllowTalk.a9cc7c39ec438973ddc9.tgs",
                l = n.p + "VoiceMini.bf00ffdf69625c579569.tgs",
                d = n.p + "VoiceMuted.a4b4ec6bfd7c6c5fb275.tgs",
                u = n.p + "VoiceOutlined.91b394ab3562cdfad6bc.tgs",
                m = n.p + "Flame.d1a2dae178cb492c75ea.tgs",
                f = n.p + "Fragment.b1bf3a076c00ef525901.tgs",
                p = n.p + "Mention.810d50783976689ed870.tgs",
                h = n.p + "PartyPopper.287e4290662b3d2b269c.tgs",
                g = n.p + "Invite.4502ec3aa4249d6e6723.tgs",
                v = n.p + "Requests.af9f19772695a8898810.tgs",
                A = n.p + "LastSeen.b16ff3c97561138c2406.tgs",
                w = n.p + "TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e.tgs",
                y = n.p + "TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab.tgs",
                b = n.p + "TwoFactorSetupMonkeyPeek.1905436b042520363d7e.tgs",
                E = n.p + "TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12.tgs",
                k = n.p + "ReadTime.015d6e6f73f768f1e9fe.tgs",
                I = n.p + "Congratulations.b6623b8efc6fedec9d33.tgs",
                C = n.p + "DiscussionGroupsDucks.9ea453d1be9d1b0ee77a.tgs",
                S = n.p + "Experimental.43d62096368bf5a00ae3.tgs",
                F = {
                    MonkeyIdle: y,
                    MonkeyTracking: E,
                    MonkeyClose: w,
                    MonkeyPeek: b,
                    FoldersAll: n.p + "FoldersAll.3f9f9e243d19f0fbf9aa.tgs",
                    FoldersNew: n.p + "FoldersNew.9a40d71c0c8be70f5bd1.tgs",
                    FoldersShare: n.p + "FoldersShare.3356f97ced75bf97121c.tgs",
                    DiscussionGroups: C,
                    Lock: n.p + "Lock.12547a0228d4fa544e53.tgs",
                    CameraFlip: r,
                    HandFilled: i,
                    HandOutline: a,
                    Speaker: s,
                    VoiceAllowTalk: c,
                    VoiceMini: l,
                    VoiceMuted: d,
                    VoiceOutlined: u,
                    JoinRequest: v,
                    Invite: g,
                    QrPlane: o,
                    Congratulations: I,
                    Experimental: S,
                    PartyPopper: h,
                    Flame: m,
                    ReadTime: k,
                    Unlock: n.p + "Unlock.15931385f7a95ab1a000.tgs",
                    LastSeen: A,
                    Mention: p,
                    Fragment: f
                }
        },
        35049: (e, t, n) => {
            n.d(t, {
                a: () => i,
                y: () => r
            });
            var o = n(59589);

            function r(e, t, n) {
                if (!e) {
                    if (!n) return;
                    return t ? "peer-color-count-1" : "peer-color-0"
                }
                if ("isCustomPeer" in e) {
                    if (!e.peerColorId) return;
                    return `peer-color-${e.peerColorId}`
                }
                return t ? `peer-color-count-${(0,o.PX)(e)}` : `peer-color-${(0,o.Zg)(e)}`
            }

            function i(e) {
                return `peer-color-${e.color}`
            }
        },
        285: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var o = n(84051),
                r = n(13439),
                i = n(59589),
                a = n(29807),
                s = n(4961),
                c = n(59030),
                l = n(94189);
            const d = (0, o.ph)((0, r.EK)(((e, t) => {
                let {
                    userId: n
                } = t;
                const o = (0, a.meB)(e),
                    r = n && (0, a.mBe)(e, n);
                return {
                    chat: o,
                    contactName: r ? (0, i.u0)(r) : void 0
                }
            }))((e => {
                let {
                    isOpen: t,
                    chat: n,
                    userId: i,
                    contactName: a,
                    onClose: d
                } = e;
                const {
                    deleteChatMember: u
                } = (0, r.ko)(), m = (0, c.A)(), f = (0, o.hb)((() => {
                    u({
                        chatId: n.id,
                        userId: i
                    }), d()
                }), [n, u, d, i]);
                if (n && i) return o.Ay.createElement(l.A, {
                    isOpen: t,
                    onClose: d,
                    title: m("GroupRemoved.Remove"),
                    textParts: (0, s.A)(m("PeerInfo.Confirm.RemovePeer", a)),
                    confirmLabel: m("lng_box_remove"),
                    confirmHandler: f,
                    confirmIsDestructive: !0
                })
            })))
        },
        71331: (e, t, n) => {
            n.d(t, {
                Ip: () => s,
                O7: () => m,
                iT: () => d,
                mD: () => a,
                n5: () => c,
                qI: () => l,
                uu: () => u
            });
            var o = n(59589),
                r = n(21133),
                i = n(19926);

            function a(e, t) {
                const n = (0, r.AW)(e, t);
                if (n && n.groupCallId) return s(e, n.groupCallId)
            }

            function s(e, t) {
                return e.groupCalls.byId[t]
            }

            function c(e, t, n) {
                return s(e, t)?.participants[n]
            }

            function l(e) {
                const t = d(e)?.chatId;
                if (!t) return !1;
                const n = (0, r.hd)(e, t);
                return !!n && ((0, o.yn)(n) && n.isCreator || Boolean(n.adminRights?.manageCall))
            }

            function d(e) {
                const {
                    groupCalls: {
                        activeGroupCallId: t
                    }
                } = e;
                if (t) return s(e, t)
            }

            function u(e) {
                const {
                    phoneCall: t,
                    currentUserId: n
                } = e;
                if (!t || !t.participantId || !t.adminId) return;
                const o = t.adminId === n ? t.participantId : t.adminId;
                return (0, i.mB)(e, o)
            }

            function m(e) {
                const t = d(e);
                if (!t || !t.chatId) return !1;
                const n = (0, r.hd)(e, t.chatId);
                if (!n) return !1;
                if (Boolean((0, o.Kl)(n))) return !0;
                const i = (0, r.AW)(e, n.id)?.inviteLink;
                return Boolean(i)
            }
        },
        64520: (e, t, n) => {
            n.d(t, {
                B: () => a,
                d: () => i
            });
            var o = n(31481),
                r = n(19926);

            function i(e, t) {
                const {
                    appConfig: n
                } = e;
                if (!n) return o.dR$[t][0];
                const i = (0, r.g2)(e),
                    {
                        limits: a
                    } = n,
                    s = a[t]?.[i ? 1 : 0] ?? o.dR$[t][i ? 1 : 0];
                return "dialogFilters" === t ? s + 1 : s
            }

            function a(e, t) {
                const {
                    appConfig: n
                } = e;
                if (!n) return o.dR$[t][1];
                const {
                    limits: r
                } = n;
                return r[t][1]
            }
        },
        32625: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var o = n(84051),
                r = n(17712);
            const i = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const i = (0, r.A)(e);
                (0, o.vJ)((() => {
                    if (void 0 === t) return;
                    const e = setInterval((() => i()), t);
                    return n || i(), () => clearInterval(e)
                }), [t, n])
            }
        },
        10722: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var o = n(84051),
                r = n(51401),
                i = n(66644),
                a = n(82393),
                s = n(17712);

            function c(e) {
                e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation()
            }
            const l = (e, t, n, l, d) => {
                const [u, m] = (0, o.J0)(!1), [f, p] = (0, o.J0)(void 0), [h, g] = (0, o.J0)(void 0), v = (0, s.A)((e => {
                    t || 2 !== e.button || (0, i.RK)((() => {
                        (0, r.YM)(e.target, "no-selection")
                    }))
                })), A = (0, s.A)((e => {
                    (0, i.RK)((() => {
                        (0, r.HW)(e.target, "no-selection")
                    })), t || n && e.target.matches("a[href]") || (e.preventDefault(), e.stopPropagation(), f || (m(!0), p({
                        x: e.clientX,
                        y: e.clientY
                    }), g(e.target)))
                })), w = (0, s.A)((() => {
                    m(!1)
                })), y = (0, s.A)((() => {
                    p(void 0)
                }));
                return (0, o.vJ)((() => {
                    if (t || !a.TF || l || d && !d()) return;
                    const o = e.current;
                    if (!o) return;
                    let r;
                    const i = () => {
                            r && (clearTimeout(r), r = void 0)
                        },
                        s = e => {
                            t || (e.stopPropagation(), i(), r = window.setTimeout((() => (e => {
                                i();
                                const {
                                    clientX: t,
                                    clientY: o,
                                    target: r
                                } = e.touches[0];
                                f || n && r.matches("a[href]") || (document.addEventListener("touchend", (e => {
                                    a.pz && a._7 && setTimeout((() => {
                                        document.removeEventListener("mousedown", c, {
                                            capture: !0
                                        }), document.removeEventListener("click", c, {
                                            capture: !0
                                        })
                                    }), 100), c(e)
                                }), {
                                    once: !0,
                                    capture: !0
                                }), a._7 && a.pz && (document.addEventListener("mousedown", c, {
                                    once: !0,
                                    capture: !0
                                }), document.addEventListener("click", c, {
                                    once: !0,
                                    capture: !0
                                })), m(!0), p({
                                    x: t,
                                    y: o
                                }))
                            })(e)), 200))
                        };
                    return o.addEventListener("touchstart", s, {
                        passive: !0
                    }), o.addEventListener("touchcancel", i, !0), o.addEventListener("touchend", i, !0), o.addEventListener("touchmove", i, {
                        passive: !0
                    }), () => {
                        i(), o.removeEventListener("touchstart", s), o.removeEventListener("touchcancel", i, !0), o.removeEventListener("touchend", i, !0), o.removeEventListener("touchmove", i)
                    }
                }), [f, t, l, e, n, d]), {
                    isContextMenuOpen: u,
                    contextMenuPosition: f,
                    contextMenuTarget: h,
                    handleBeforeContextMenu: v,
                    handleContextMenu: A,
                    handleContextMenuClose: w,
                    handleContextMenuHide: y
                }
            }
        },
        11217: (e, t, n) => {
            n.d(t, {
                Q: () => i
            });
            var o = n(82393),
                r = n(17712);

            function i(e) {
                const t = (0, r.A)((t => {
                    "mousedown" === t.type && t.button !== o.w3.Main || e(t)
                }));
                return o.TF ? {
                    handleClick: e ? t : void 0
                } : {
                    handleMouseDown: e ? t : void 0
                }
            }
        },
        96374: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var o = n(84051),
                r = n(89925),
                i = n(87894),
                a = n(30857),
                s = n(17712),
                c = n(29886);

            function l(e, t, n, o) {
                const {
                    length: i
                } = e, a = o ? e.indexOf(o) : 0, s = t === r.TN.Forwards ? a : a + 1 || i, c = Math.max(0, s - n), l = s + n - 1, d = e.slice(Math.max(0, c), l + 1);
                let u, m;
                switch (t) {
                    case r.TN.Forwards:
                        u = s >= 0, m = c >= 0;
                        break;
                    case r.TN.Backwards:
                        u = s < i, m = l <= i - 1
                }
                return {
                    newViewportIds: d,
                    areSomeLocal: u,
                    areAllLocal: m,
                    newIsOnTop: d[0] === e[0]
                }
            }
            const d = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30;
                const u = (0, o.li)(),
                    m = (0, o.li)();
                if (!m.current && t && !n) {
                    const {
                        newViewportIds: e,
                        newIsOnTop: n
                    } = l(t, r.TN.Forwards, d, t[0]);
                    m.current = {
                        viewportIds: e,
                        isOnTop: n
                    }
                }
                const f = (0, a.A)();
                n && (u.current = {});
                const p = (0, c.A)(t),
                    h = (0, c.A)(n);
                if (!t || n || t === p && n === h) t || (m.current = void 0);
                else {
                    const {
                        viewportIds: e,
                        isOnTop: n
                    } = m.current || {}, o = e && !n ? e[Math.round(e.length / 2)] : void 0, a = o && t.includes(o) ? o : t[0], {
                        offsetId: s = a,
                        direction: c = r.TN.Forwards
                    } = u.current || {}, {
                        newViewportIds: f,
                        newIsOnTop: p
                    } = l(t, c, d, s);
                    u.current = {}, e && (0, i.k)(e, f) || (m.current = {
                        viewportIds: f,
                        isOnTop: p
                    })
                }
                const g = (0, s.A)((n => {
                    let {
                        direction: o,
                        noScroll: a
                    } = n;
                    const {
                        viewportIds: s
                    } = m.current || {}, c = s ? o === r.TN.Backwards ? s[s.length - 1] : s[0] : void 0;
                    if (!t) return void(e && e({
                        offsetId: c
                    }));
                    const {
                        newViewportIds: p,
                        areSomeLocal: h,
                        areAllLocal: g,
                        newIsOnTop: v
                    } = l(t, o, d, c);
                    !h || s && (0, i.k)(s, p) || (m.current = {
                        viewportIds: p,
                        isOnTop: v
                    }, f()), !g && e && (a || (u.current = {
                        ...u.current,
                        direction: o,
                        offsetId: c
                    }), e({
                        offsetId: c
                    }))
                }));
                return n ? [t] : [m.current?.viewportIds, g]
            }
        },
        37859: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = n(84051);
            const r = (e, t, n) => {
                const r = (0, o.li)();
                return (0, o.Nf)((() => {
                    const n = r.current;
                    return r.current = t, e(n || [])
                }), t, n)
            }
        },
        94803: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var o = n(84051);
            const r = 16,
                i = 12,
                a = {
                    width: 0,
                    left: 0,
                    height: 0,
                    top: 0
                };

            function s(e, t, n, s, c) {
                const [l, d] = (0, o.J0)("right"), [u, m] = (0, o.J0)("bottom"), [f, p] = (0, o.J0)(), [h, g] = (0, o.J0)(), [v, A] = (0, o.J0)(!1), [w, y] = (0, o.J0)(""), [b, E] = (0, o.J0)("opacity: 0;");
                return (0, o.vJ)((() => {
                    const o = t();
                    if (!e || !o) return;
                    let {
                        x: l,
                        y: u
                    } = e;
                    const f = l,
                        h = u,
                        v = s(),
                        w = n(),
                        {
                            extraPaddingX: b = 0,
                            extraTopPadding: k = 0,
                            extraMarginTop: I = 0,
                            topShiftY: C = 0,
                            menuElMinWidth: S = 0,
                            deltaX: F = 0,
                            shouldAvoidNegativePosition: M = !1,
                            withPortal: L = !1,
                            isDense: P = !1
                        } = c?.() || {},
                        x = v ? parseInt(getComputedStyle(v).marginTop, 10) + I : void 0,
                        {
                            offsetWidth: T,
                            offsetHeight: N
                        } = v || {
                            offsetWidth: 0,
                            offsetHeight: 0
                        },
                        z = v ? {
                            width: Math.max(T, S),
                            height: N + x
                        } : a,
                        R = w ? w.getBoundingClientRect() : a;
                    let $, O;
                    P || l + z.width + b < R.width + R.left ? (l += 3, $ = "left") : l - z.width - R.left > 0 ? ($ = "right", l -= 3) : ($ = "left", l = 16), d($), l += F;
                    const J = u + C;
                    P || J + z.height < R.height + R.top ? (O = "top", u = J) : (O = "bottom", u - z.height < R.top + k && (u = R.top + R.height)), m(O);
                    const B = o.getBoundingClientRect(),
                        V = L ? B.top : 0,
                        D = L ? B.left : 0,
                        j = Math.min(l - B.left, R.width - z.width - r);
                    let q = ("left" === $ ? L || M ? Math.max(r, j) : j : l - B.left) + D,
                        G = u - B.top + V;
                    P && (q = Math.min(q, R.width - z.width - r), G = Math.min(G, R.height - z.height - r));
                    const K = S ? Math.max(0, (S - T) / 2) : 0;
                    q - K < 0 && M && (q = K + r);
                    const _ = R.height - i - (x || 0);
                    A(_ < z.height), E(`max-height: ${_}px;`), y(`left: ${q}px; top: ${G}px`);
                    const U = f + D - B.left - q,
                        H = h + V - B.top - G - (x || 0);
                    p("left" === $ ? U : z.width + U), g("bottom" === O ? z.height + H : H)
                }), [e, s, n, t, c]), {
                    positionX: l,
                    positionY: u,
                    transformOriginX: f,
                    transformOriginY: h,
                    style: w,
                    menuStyle: b,
                    withScroll: v
                }
            }
        },
        90423: (e, t, n) => {
            n.d(t, {
                Ay: () => s,
                zk: () => c
            });
            var o = n(84051),
                r = n(31791),
                i = n(82393);
            const a = l();

            function s(e, t) {
                const [n, r] = (0, o.J0)(Boolean(a && document[a]));
                return (0, o.Nf)((() => {
                    const n = e.current,
                        o = () => {
                            const e = Boolean(a && document[a]);
                            r(e), n.controls = e
                        },
                        i = () => {
                            r(!0)
                        },
                        s = () => {
                            r(!1), t(!1)
                        };
                    return document.addEventListener("fullscreenchange", o, !1), document.addEventListener("webkitfullscreenchange", o, !1), document.addEventListener("mozfullscreenchange", o, !1), n && (n.addEventListener("webkitbeginfullscreen", i, !1), n.addEventListener("webkitendfullscreen", s, !1)), () => {
                        document.removeEventListener("fullscreenchange", o, !1), document.removeEventListener("webkitfullscreenchange", o, !1), document.removeEventListener("mozfullscreenchange", o, !1), n && (n.removeEventListener("webkitbeginfullscreen", i, !1), n.removeEventListener("webkitendfullscreen", s, !1))
                    }
                }), []), a || i.pz ? [n, () => {
                    var t;
                    e.current && (a || i.pz) && ((t = e.current).requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.webkitEnterFullscreen ? t.webkitEnterFullscreen() : t.mozRequestFullScreen && t.mozRequestFullScreen(), r(!0))
                }, () => {
                    e.current && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), r(!1))
                }] : [!1]
            }
            const c = () => {
                const [e, t] = (0, o.J0)(!1);
                return (0, o.vJ)((() => {
                    const e = () => {
                            t(function() {
                                const e = l();
                                return Boolean(e && document[e])
                            }())
                        },
                        n = window.electron?.on(r.v.FULLSCREEN_CHANGE, t);
                    return window.electron?.isFullscreen().then(t), document.addEventListener("fullscreenchange", e, !1), document.addEventListener("webkitfullscreenchange", e, !1), document.addEventListener("mozfullscreenchange", e, !1), () => {
                        n?.(), document.removeEventListener("fullscreenchange", e, !1), document.removeEventListener("webkitfullscreenchange", e, !1), document.removeEventListener("mozfullscreenchange", e, !1)
                    }
                }), []), e
            };

            function l() {
                return void 0 !== document.fullscreenElement ? "fullscreenElement" : void 0 !== document.mozFullScreenElement ? "mozFullScreenElement" : void 0 !== document.webkitFullscreenElement ? "webkitFullscreenElement" : ""
            }
        },
        32610: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            const o = [1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39, 71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169, 5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77, 149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175, 171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113, 221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155, 19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113, 111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87, 43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138, 137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225, 111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93, 185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157, 78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134, 133, 66, 131, 65, 129, 1],
                r = [0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17, 19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20, 20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21, 22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21, 22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21, 23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24, 22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20, 23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24, 23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25, 24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18];

            function i(e, t, n, i, a, s, c) {
                if (Number.isNaN(s) || s < 1) return;
                s |= 0, Number.isNaN(c) && (c = 1), (c |= 0) > 3 && (c = 3), c < 1 && (c = 1);
                const l = e.getImageData(t, n, i, a),
                    d = l.data;
                let u, m, f, p, h, g, v, A, w, y, b, E, k = i - 1,
                    I = a - 1,
                    C = s + 1,
                    S = [],
                    F = [],
                    M = [],
                    L = o[s],
                    P = r[s],
                    x = [],
                    T = [];
                for (; c-- > 0;) {
                    for (E = b = 0, h = 0; h < a; h++) {
                        for (u = d[E] * C, m = d[E + 1] * C, f = d[E + 2] * C, g = 1; g <= s; g++) v = E + ((g > k ? k : g) << 2), u += d[v++], m += d[v++], f += d[v++];
                        for (p = 0; p < i; p++) S[b] = u, F[b] = m, M[b] = f, 0 == h && (x[p] = ((v = p + C) < k ? v : k) << 2, T[p] = (v = p - s) > 0 ? v << 2 : 0), A = E + x[p], w = E + T[p], u += d[A++] - d[w++], m += d[A++] - d[w++], f += d[A++] - d[w++], b++;
                        E += i << 2
                    }
                    for (p = 0; p < i; p++) {
                        for (y = p, u = S[y] * C, m = F[y] * C, f = M[y] * C, g = 1; g <= s; g++) y += g > I ? 0 : i, u += S[y], m += F[y], f += M[y];
                        for (b = p << 2, h = 0; h < a; h++) d[b] = u * L >>> P, d[b + 1] = m * L >>> P, d[b + 2] = f * L >>> P, 0 == p && (x[h] = ((v = h + C) < I ? v : I) * i, T[h] = (v = h - s) > 0 ? v * i : 0), A = p + x[h], w = p + T[h], u += S[A] - S[w], m += F[A] - F[w], f += M[A] - M[w], b += i << 2
                    }
                }
                e.putImageData(l, t, n)
            }
        },
        31791: (e, t, n) => {
            n.d(t, {
                v: () => o
            });
            let o = function(e) {
                return e.FULLSCREEN_CHANGE = "fullscreen-change", e.UPDATE_ERROR = "update-error", e.UPDATE_AVAILABLE = "update-available", e.DEEPLINK = "deeplink", e
            }({})
        },
        14680: (e, t, n) => {
            n.d(t, {
                FD: () => r,
                ZJ: () => a,
                wb: () => i
            });
            let o = 0;

            function r() {
                o += 1
            }

            function i() {
                o -= 1
            }

            function a() {
                return o > 0
            }
        },
        9718: (e, t, n) => {
            n.d(t, {
                A: () => a,
                E: () => i
            });
            var o = n(41402),
                r = n(82393);

            function i(e) {
                e.style.display = "none", (0, o.A)(e), e.style.display = ""
            }
            const a = (e, t) => {
                r.pz && (e.style.overflow = "hidden"), void 0 !== t && (e.scrollTop = t), r.pz && (e.style.overflow = "")
            }
        },
        83868: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            const o = e => {
                e.stopPropagation(), e.preventDefault()
            }
        },
        29441: (e, t, n) => {
            function o(e) {
                function t(t) {
                    if ("Tab" !== t.key) return;
                    t.preventDefault(), t.stopPropagation();
                    const n = Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
                    if (!n.length) return;
                    const o = n.findIndex((e => e.isSameNode(document.activeElement)));
                    let r = 0;
                    o >= 0 && (r = t.shiftKey ? o > 0 ? o - 1 : n.length - 1 : o < n.length - 1 ? o + 1 : 0), n[r].focus()
                }
                return document.addEventListener("keydown", t, !1), () => {
                    document.removeEventListener("keydown", t, !1)
                }
            }
            n.d(t, {
                A: () => o
            })
        }
    }
]);