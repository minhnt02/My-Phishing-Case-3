"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [5168], {
        63744: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(13439),
                i = n(29807),
                r = n(71331),
                s = n(87357),
                l = n(14),
                c = n(59030),
                d = n(34201),
                m = n(26875),
                u = n(64493);
            const A = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    chatId: n
                } = t;
                const a = (0, i.hds)(e, n),
                    o = (0, r.mD)(e, n);
                return {
                    groupCall: o,
                    isActive: ((0, i.nTw)(e).isMasterTab ? e.groupCalls.activeGroupCallId : void 0) !== o?.id && Boolean(o ? o.participantsCount > 0 && o.isLoaded : a && a.isCallNotEmpty && a.isCallActive)
                }
            }))((e => {
                let {
                    chatId: t,
                    isActive: n,
                    className: i,
                    groupCall: r,
                    hasPinnedOffset: A
                } = e;
                const {
                    requestMasterAndJoinGroupCall: h,
                    subscribeToGroupCallUpdates: p
                } = (0, o.ko)(), g = (0, c.A)(), y = (0, a.hb)((() => {
                    h({
                        chatId: t
                    })
                }), [h, t]), f = r?.participants, v = (0, a.Kr)((() => {
                    if (!f) return [];
                    const e = (0, o.mS)().users.byId,
                        t = (0, o.mS)().chats.byId;
                    return Object.values(f).slice(0, 3).map((n => {
                        let {
                            id: a
                        } = n;
                        return e[a] || t[a]
                    })).filter(Boolean)
                }), [f]);
                (0, a.vJ)((() => {
                    if (r?.id && (n || !r.isLoaded)) return p({
                        id: r.id,
                        subscribed: !0
                    }), () => {
                        p({
                            id: r.id,
                            subscribed: !1
                        })
                    }
                }), [r?.id, r?.isLoaded, n, p]);
                const {
                    shouldRender: E,
                    transitionClassNames: C
                } = (0, d.A)(Boolean(r && n)), b = (0, l.A)(r?.participantsCount, !0), w = (0, l.A)(v, !0);
                if (E) return a.Ay.createElement("div", {
                    className: (0, s.A)("GroupCallTopPane", A && "has-pinned-offset", i, C),
                    onClick: y
                }, a.Ay.createElement("div", {
                    className: "info"
                }, a.Ay.createElement("span", {
                    className: "title"
                }, g("VoipGroupVoiceChat")), a.Ay.createElement("span", {
                    className: "participants"
                }, g("Participants", b ?? 0, "i"))), Boolean(w?.length) && a.Ay.createElement(m.A, {
                    size: "small",
                    peers: w,
                    className: "avatars"
                }), a.Ay.createElement(u.A, {
                    round: !0,
                    className: "join"
                }, g("VoipChatJoin")))
            })))
        },
        68292: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(13439),
                i = n(29807),
                r = n(87357),
                s = n(37661),
                l = n(59030);
            const c = e => {
                let {
                    text: t,
                    className: n
                } = e;
                const c = (0, l.A)(),
                    d = (0, a.li)(),
                    [m, u, A] = (0, s.A)(!1),
                    h = (0, i.PKK)((0, o.mS)()),
                    p = (0, a.Kr)((() => {
                        if (!h) return t;
                        if (!m) return d.current || t;
                        const e = d.current,
                            n = [];
                        for (let o = 0; o < t.length; o++) e && t[o] !== e[o] ? n.push(a.Ay.createElement("div", {
                            className: "IYTzbS8o"
                        }, a.Ay.createElement("div", {
                            className: "Jw1oQFdk"
                        }, t[o]), a.Ay.createElement("div", {
                            className: "TZfEz3sc",
                            onAnimationEnd: A
                        }, e[o]), a.Ay.createElement("div", {
                            className: "Y9ied8_t",
                            onAnimationEnd: A
                        }, t[o]))) : n.push(a.Ay.createElement("span", null, t[o]));
                        return d.current = t, n
                    }), [h, m, t]);
                return (0, a.vJ)((() => {
                    u()
                }), [t]), a.Ay.createElement("span", {
                    className: (0, r.A)("tgKbsVmz", n),
                    dir: c.isRtl ? "rtl" : void 0
                }, p)
            }
        },
        79577: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(97335),
                i = n(59589),
                r = n(62587),
                s = n(64489);

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            const c = (0, a.ph)((function(e) {
                const {
                    sticker: t,
                    noLoad: n,
                    forcePreview: c,
                    ...d
                } = e, m = t?.thumbnail?.dataUri, u = t && `sticker${t.id}`, A = (0, r.A)(t ? (0, i.Mw)(t, "preview") : void 0, n && !c, o.qZ.BlobUrl), h = (0, r.A)(u, n);
                return a.Ay.createElement(s.A, l({
                    tgsUrl: h,
                    previewUrl: A,
                    thumbDataUri: m
                }, d))
            }))
        },
        64489: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(87357),
                i = n(95807),
                r = n(37661),
                s = n(17712),
                l = n(37960),
                c = n(4438);
            const d = "lM2usrZU";

            function m() {
                return m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, m.apply(this, arguments)
            }
            const u = new Set,
                A = (0, a.ph)((function(e) {
                    const {
                        previewUrl: t,
                        thumbDataUri: n,
                        className: A,
                        ...h
                    } = e, [p, , g] = (0, r.A)(Boolean(n)), y = (0, l.A)(p), [f, v, E] = (0, r.A)(u.has(t)), C = (0, l.A)(f), [b, w] = (0, r.A)(!1), S = (0, s.A)((() => {
                        v(), u.add(t)
                    })), I = (0, s.A)((() => {
                        g(), E(), setTimeout(w, 300)
                    })), {
                        size: N
                    } = e;
                    return a.Ay.createElement("div", {
                        className: (0, o.A)(A, "xCi2f0YH"),
                        style: (0, i.A)(void 0 !== N && `width: ${N}px; height: ${N}px;`)
                    }, n && !b && a.Ay.createElement("img", {
                        src: n,
                        className: (0, o.A)(d, y),
                        draggable: !1
                    }), t && !b && a.Ay.createElement("img", {
                        src: t,
                        className: (0, o.A)(d, C),
                        draggable: !1,
                        onLoad: S
                    }), a.Ay.createElement(c.A, m({}, h, {
                        onLoad: I
                    })))
                }))
        },
        62894: (e, t, n) => {
            n.d(t, {
                Ay: () => R
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(89925),
                s = n(59589),
                l = n(53827),
                c = n(87357),
                d = n(50442),
                m = n(17663),
                u = n(70497),
                A = n(42186),
                h = n(91525),
                p = n(4961);
            var g = n(43874),
                y = n(88792),
                f = n(71533),
                v = n(17712),
                E = n(62587),
                C = n(69419),
                b = n(59030),
                w = n(34201),
                S = n(64493),
                I = n(96530),
                N = n(35913),
                M = n(4438),
                k = n(18276);
            const P = window.matchMedia("(max-width: 375px)"),
                T = window.matchMedia("(max-width: 410px)");

            function x(e, t, n) {
                return a.Ay.createElement("div", {
                    className: "seekline",
                    ref: n
                }, t.map((e => {
                    let {
                        start: t,
                        end: n
                    } = e;
                    return a.Ay.createElement("div", {
                        className: "seekline-buffered-progress",
                        style: `left: ${100*t}%; right: ${100-100*n}%`
                    })
                })), a.Ay.createElement("span", {
                    className: "seekline-play-progress"
                }, a.Ay.createElement("i", {
                    className: "seekline-play-progress-inner",
                    style: `transform: translateX(${100*e}%)`
                })), a.Ay.createElement("span", {
                    className: "seekline-thumb"
                }, a.Ay.createElement("i", {
                    className: "seekline-thumb-inner",
                    style: `transform: translateX(${100*e}%)`
                })))
            }
            const R = (0, a.ph)((e => {
                let {
                    theme: t,
                    message: n,
                    senderTitle: R,
                    uploadProgress: L,
                    origin: B,
                    date: O,
                    noAvatars: F,
                    className: D,
                    isSelectable: U,
                    isSelected: K,
                    isDownloading: j,
                    isTranscribing: $,
                    isTranscriptionHidden: z,
                    isTranscribed: _,
                    isTranscriptionError: J,
                    canDownload: H,
                    canTranscribe: V,
                    autoPlay: q,
                    onHideTranscription: G,
                    onPlay: W,
                    onPause: Y,
                    onReadMedia: Q,
                    onCancelUpload: Z,
                    onDateClick: X
                } = e;
                const {
                    cancelMediaDownload: ee,
                    downloadMedia: te,
                    transcribeAudio: ne,
                    openOneTimeMediaModal: ae
                } = (0, o.ko)(), {
                    content: {
                        audio: oe,
                        voice: ie,
                        video: re
                    },
                    isMediaUnread: se
                } = n, le = oe || (0, s.Rp)(n), ce = ie || re || le, de = Boolean(ie || re), me = (0, a.li)(!1), ue = (0, a.li)(null), Ae = (0, b.A)(), {
                    isRtl: he
                } = Ae, {
                    isMobile: pe
                } = (0, g.Ay)(), [ge, ye] = (0, a.J0)(!1), fe = ge || !0, ve = (0, s.VO)(ce, "pictogram"), Ee = (0, E.A)(ve, !1, i.qZ.BlobUrl), Ce = (0, s.G5)(n), be = B === r.d9.OneTimeModal, we = de ? Ce ? "oneTimeVoice" : "voice" : "audio", Se = (0, E.A)((0, s.VO)(ce, "inline"), !fe, (0, s.Cz)(ce, "inline")), {
                    loadProgress: Ie
                } = (0, C.A)((0, s.VO)(ce, "download"), !j, (0, s.Cz)(ce, "download")), Ne = (0, v.A)((() => {
                    ye(!0), W?.(n.id, n.chatId)
                })), Me = (0, v.A)((() => {
                    ye(!1)
                })), {
                    isBuffered: ke,
                    bufferedRanges: Pe,
                    bufferingHandlers: Te,
                    checkBuffering: xe
                } = (0, f.A)(), Re = be, {
                    isPlaying: Le,
                    playProgress: Be,
                    playPause: Oe,
                    setCurrentTime: Fe,
                    duration: De
                } = (0, y.A)((0, l.dj)(n), (0, s.Fk)(n), we, Se, Te, void 0, xe, Boolean(ge || q), Ne, Me, (0, s.Nb)(n) || Ce, void 0, Y, Re, Ce && !be), Ue = 1 - Be, Ke = (0, s.Ie)(n), je = Ce && be, $e = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                    const l = (0, a.li)(null),
                        {
                            data: c,
                            peak: d
                        } = (0, a.Kr)((() => {
                            if (!t) return;
                            const {
                                waveform: e,
                                duration: n
                            } = t;
                            if (!e) return {
                                data: new Array(Math.min(n, 30)).fill(0),
                                peak: 0
                            };
                            const {
                                MIN_SPIKES: a,
                                MAX_SPIKES: o
                            } = function(e, t) {
                                return {
                                    MIN_SPIKES: e ? P.matches ? 16 : 20 : 25,
                                    MAX_SPIKES: e ? P.matches ? 35 : t && T.matches ? 40 : 45 : 75
                                }
                            }(r, i), s = Math.min(n / 10, 1), l = Math.round(a + (o - a) * s), c = (0, u.e)(new Uint8Array(e));
                            return (0, u.p)(c, l)
                        }), [r, t, i]) || {};
                    return (0, a.Nf)((() => {
                        const t = l.current;
                        t && c && void 0 !== d && function(e, t, n, a) {
                            let {
                                peak: o,
                                fillStyle: i,
                                progressFillStyle: r
                            } = a;
                            const s = 4 * t.length;
                            e.width = 2 * s, e.height = 46, e.style.width = `${s}px`, e.style.height = "23px";
                            const l = e.getContext("2d");
                            l.scale(2, 2), t.forEach(((e, a) => {
                                l.globalAlpha = a / t.length >= n ? .5 : 1, l.fillStyle = n > a / t.length ? r : i;
                                const s = Math.max(2, e / Math.max(1, o) * 23);
                                ! function(e, t, n, a, o, i) {
                                    2 < 2 * i && (i = 1), o < 2 * i && (i = o / 2), e.beginPath(), e.moveTo(t + i, n), e.arcTo(t + 2, n, t + 2, n - o, i), e.arcTo(t + 2, n - o, t, n - o, i), e.arcTo(t, n - o, t, n, i), e.arcTo(t, n, t + 2, n, i), e.closePath()
                                }(l, 4 * a, (23 + s) / 2, 0, s, 1), l.fill()
                            }))
                        }(t, c, s ? 1 - n : n, {
                            peak: d,
                            fillStyle: o ? "dark" === e ? "#B7ABED" : "#AEDFA4" : "dark" === e ? "#494A78" : "#ADD3F7",
                            progressFillStyle: o ? "dark" === e ? "#FFFFFF" : "#4FAE4E" : "dark" === e ? "#8774E1" : "#3390EC"
                        })
                    }), [o, d, n, c, e, s]), l
                }(t, ie, !se || Ke || je ? Be : 1, Ke, !F, pe, je), ze = Le || Be > 0 && Be < 1;
                (0, a.vJ)((() => {
                    ye(Le)
                }), [Le]);
                const _e = ge && !ke,
                    {
                        isUploading: Je,
                        isTransferring: He,
                        transferProgress: Ve
                    } = (0, s.LK)(L || Ie, _e || j, void 0 !== L),
                    {
                        shouldRender: qe,
                        transitionClassNames: Ge
                    } = (0, w.A)(He),
                    We = qe && (_e || Je),
                    Ye = (0, v.A)((() => {
                        if (Je) Z?.();
                        else {
                            if (Ce) return ae({
                                message: n
                            }), void Q?.();
                            Le || W?.(n.id, n.chatId), (0, o.ko)().setAudioPlayerOrigin({
                                origin: B
                            }), ye(!ge), Oe()
                        }
                    }));
                (0, a.vJ)((() => {
                    Q && se && (Le || j) && Q()
                }), [Le, se, Q, j]);
                const Qe = (0, v.A)((() => {
                        j ? ee({
                            media: ce
                        }) : te({
                            media: ce
                        })
                    })),
                    Ze = (0, v.A)((e => {
                        if (me.current && ue.current) {
                            const {
                                width: t,
                                left: n
                            } = ue.current.getBoundingClientRect(), a = e instanceof MouseEvent ? e.clientX : e.targetTouches[0].clientX;
                            e.stopPropagation(), Fe(Math.max(Math.min(De * ((a - n) / t), De - .1), .001))
                        }
                    })),
                    Xe = (0, v.A)((e => {
                        e instanceof MouseEvent && 2 === e.button || (me.current = !0, Ze(e))
                    })),
                    et = (0, v.A)((() => {
                        me.current = !1
                    })),
                    tt = (0, v.A)((() => {
                        X(n)
                    })),
                    nt = (0, v.A)((() => {
                        ne({
                            chatId: n.chatId,
                            messageId: n.id
                        })
                    }));

                function at() {
                    if (de) return R || "Voice";
                    const {
                        title: e,
                        fileName: t
                    } = le;
                    return e || t
                }(0, a.vJ)((() => {
                    if (ue.current && ze && !be) return (0, d.wJ)(ue.current, {
                        onCapture: Xe,
                        onRelease: et,
                        onClick: et,
                        onDrag: Ze
                    })
                }), [ze, Xe, Ze, et, be]);
                const ot = (0, c.A)("Audio", D, be && "non-interactive", B === r.d9.Inline && "inline", Ke && B === r.d9.Inline && "own", (B === r.d9.Search || B === r.d9.SharedMedia) && "bigger", K && "audio-is-selected"),
                    it = ["toogle-play-wrapper"];
                We ? it.push("loading") : it.push(Le ? "pause" : "play");
                const rt = (0, c.A)("content", ze && "with-seekline");

                function st() {
                    return a.Ay.createElement("div", {
                        className: rt
                    }, a.Ay.createElement("div", {
                        className: "content-row"
                    }, a.Ay.createElement("p", {
                        className: "title",
                        dir: "auto",
                        title: at()
                    }, (0, p.A)(at())), a.Ay.createElement("div", {
                        className: "message-date"
                    }, Boolean(O) && a.Ay.createElement(I.A, {
                        className: "date",
                        onClick: tt
                    }, (0, m.be)(Ae, 1e3 * O)))), ze && a.Ay.createElement("div", {
                        className: "meta search-result",
                        dir: he ? "rtl" : void 0
                    }, a.Ay.createElement("span", {
                        className: "duration with-seekline",
                        dir: "auto"
                    }, Be < 1 && `${(0,m.QO)(De*Be,De)}`), x(Be, Pe, ue)), !ze && function() {
                        if (de) return a.Ay.createElement("div", {
                            className: "meta",
                            dir: he ? "rtl" : void 0
                        }, (0, m.QO)((ie || re).duration));
                        const {
                            performer: e
                        } = le;
                        return a.Ay.createElement("div", {
                            className: "meta",
                            dir: he ? "rtl" : void 0
                        }, (0, m.QO)(De), a.Ay.createElement("span", {
                            className: "bullet"
                        }, "•"), e && a.Ay.createElement("span", {
                            className: "performer",
                            title: e
                        }, (0, p.A)(e)), e && R && a.Ay.createElement("span", {
                            className: "bullet"
                        }, "•"), R && a.Ay.createElement("span", {
                            title: R
                        }, (0, p.A)(R)))
                    }())
                }
                return a.Ay.createElement("div", {
                    className: ot,
                    dir: Ae.isRtl ? "rtl" : "ltr"
                }, U && a.Ay.createElement("div", {
                    className: "message-select-control"
                }, K && a.Ay.createElement("i", {
                    className: "icon icon-select"
                })), a.Ay.createElement("div", {
                    className: (0, c.A)(...it)
                }, a.Ay.createElement(S.A, {
                    round: !0,
                    ripple: !pe,
                    size: "smaller",
                    className: "toggle-play",
                    color: Ee ? "translucent-white" : "primary",
                    ariaLabel: Le ? "Pause audio" : "Play audio",
                    onClick: Ye,
                    isRtl: Ae.isRtl,
                    backgroundImage: Ee,
                    nonInteractive: be
                }, !be && a.Ay.createElement(k.A, {
                    name: "play"
                }), !be && a.Ay.createElement(k.A, {
                    name: "pause"
                }), be && a.Ay.createElement(M.A, {
                    className: "flame",
                    tgsUrl: A.w.Flame,
                    nonInteractive: !0,
                    noLoop: !1,
                    size: 40
                })), Ce && !be && a.Ay.createElement(k.A, {
                    name: "view-once"
                })), qe && a.Ay.createElement("div", {
                    className: (0, c.A)("media-loading", Ge, We && "interactive")
                }, a.Ay.createElement(N.A, {
                    progress: Ve,
                    transparent: !0,
                    withColor: !0,
                    size: "m",
                    onClick: We ? Ye : void 0,
                    noCross: !We
                })), be && !qe && a.Ay.createElement("div", {
                    className: (0, c.A)("media-loading")
                }, a.Ay.createElement(N.A, {
                    progress: Be,
                    transparent: !0,
                    size: "m",
                    noCross: !0,
                    rotationOffset: 3 / 4
                })), le && H && !Je && a.Ay.createElement(S.A, {
                    round: !0,
                    size: "tiny",
                    className: "download-button",
                    ariaLabel: j ? "Cancel download" : "Download",
                    onClick: Qe
                }, a.Ay.createElement("i", {
                    className: (0, c.A)("icon", j ? "icon-close" : "icon-arrow-down")
                })), B === r.d9.Search && st(), B !== r.d9.Search && le && function(e, t, n, o, i, r, s, l, c, d, u) {
                    const {
                        title: A,
                        performer: g,
                        fileName: y
                    } = t, f = o || i > 0 && i < 1, {
                        isRtl: v
                    } = e;
                    return a.Ay.createElement("div", {
                        className: "content"
                    }, a.Ay.createElement("p", {
                        className: "title",
                        dir: "auto",
                        title: A
                    }, (0, p.A)(A || y)), f && a.Ay.createElement("div", {
                        className: "meta",
                        dir: v ? "rtl" : void 0
                    }, a.Ay.createElement("span", {
                        className: "duration with-seekline",
                        dir: "auto"
                    }, (0, m.QO)(n * i, n)), x(i, r, s)), !f && l && a.Ay.createElement("div", {
                        className: "meta",
                        dir: v ? "rtl" : void 0
                    }, d ? `${(0,h.zV)(t.size*d)} / ` : void 0, (0, h.zV)(t.size)), !f && !l && a.Ay.createElement("div", {
                        className: "meta",
                        dir: v ? "rtl" : void 0
                    }, a.Ay.createElement("span", {
                        className: "duration",
                        dir: "auto"
                    }, (0, m.QO)(n)), g && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                        className: "bullet"
                    }, "•"), a.Ay.createElement("span", {
                        className: "performer",
                        dir: "auto",
                        title: g
                    }, (0, p.A)(g))), Boolean(c) && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                        className: "bullet"
                    }, "•"), a.Ay.createElement(I.A, {
                        className: "date",
                        onClick: u
                    }, (0, m.fS)(e, 1e3 * c, !0)))))
                }(Ae, le, De, Le, Be, Pe, ue, j || Je, O, Ve, X ? tt : void 0), B === r.d9.SharedMedia && (ie || re) && st(), (B === r.d9.Inline || be) && ie && function(e, t, n, o, i, s, l, d, u, A, h, p) {
                    return a.Ay.createElement("div", {
                        className: "content"
                    }, a.Ay.createElement("div", {
                        className: "waveform-wrapper"
                    }, a.Ay.createElement("div", {
                        className: "waveform",
                        draggable: !1,
                        ref: t
                    }, a.Ay.createElement("canvas", {
                        ref: n
                    })), A && a.Ay.createElement(S.A, {
                        onClick: () => {
                            (d || u) && h ? h(!l) : s || A()
                        }
                    }, a.Ay.createElement("i", {
                        className: (0, c.A)("transcribe-icon", "icon", d || u ? "icon-down" : "icon-transcribe", (d || u) && !l && "transcribe-shown")
                    }), s && a.Ay.createElement("svg", {
                        viewBox: "0 0 32 24",
                        className: "loading-svg"
                    }, a.Ay.createElement("rect", {
                        className: "loading-rect",
                        fill: "transparent",
                        width: "32",
                        height: "24",
                        "stroke-width": "3",
                        "stroke-linejoin": "round",
                        rx: "6",
                        ry: "6",
                        stroke: "var(--accent-color)",
                        "stroke-dashoffset": "1",
                        "stroke-dasharray": "32,68"
                    })))), a.Ay.createElement("p", {
                        className: (0, c.A)("voice-duration", p !== r.d9.OneTimeModal && i && "unread"),
                        dir: "auto"
                    }, 0 === o || 1 === o ? (0, m.QO)(e.duration) : (0, m.QO)(e.duration * o)))
                }(ie, ue, $e, Ce ? Ue : Be, se, $, z, _, J, V ? nt : void 0, G, B))
            }))
        },
        26875: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(87357),
                i = n(59030),
                r = n(21849);
            const s = {
                    root: "kXs18Nmi",
                    "size-micro": "bnYA0Wm9",
                    sizeMicro: "bnYA0Wm9",
                    "size-mini": "ZGpPX4Wb",
                    sizeMini: "ZGpPX4Wb",
                    "size-tiny": "ufyZRVf5",
                    sizeTiny: "ufyZRVf5",
                    "size-small": "UA2exR6e",
                    sizeSmall: "UA2exR6e",
                    "size-small-mobile": "PTbjjZjF",
                    sizeSmallMobile: "PTbjjZjF",
                    "size-medium": "jncPG8PA",
                    sizeMedium: "jncPG8PA",
                    "size-large": "pd70AQAO",
                    sizeLarge: "pd70AQAO",
                    "size-jumbo": "KpwfP5mr",
                    sizeJumbo: "KpwfP5mr",
                    avatar: "XND8fhC1",
                    badge: "SHyAyGFO"
                },
                l = 3,
                c = (0, a.ph)((e => {
                    let {
                        peers: t,
                        size: n,
                        className: c,
                        limit: d = l,
                        badgeText: m
                    } = e;
                    const u = (0, i.A)(),
                        A = (0, a.Kr)((() => m || (!t?.length || t.length <= d ? void 0 : "+" + (t.length - d))), [m, t, d]);
                    return a.Ay.createElement("div", {
                        className: (0, o.A)(c, s.root, s[`size-${n}`]),
                        dir: u.isRtl ? "rtl" : "ltr"
                    }, t?.slice(0, d).map((e => a.Ay.createElement(r.A, {
                        size: n,
                        peer: e,
                        className: s.avatar
                    }))), A && a.Ay.createElement("div", {
                        className: s.badge
                    }, A))
                }))
        },
        58674: (e, t, n) => {
            n.d(t, {
                A: () => Pt
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(31481),
                s = n(66644),
                l = n(59589),
                c = n(29807),
                d = n(64520),
                m = n(87357),
                u = n(17663),
                A = n(55148),
                h = n(46275),
                p = n(53307),
                g = n(36353),
                y = n(79824),
                f = n(80539),
                v = n(39074),
                E = n(80140),
                C = n(82393),
                b = n(43503);
            let w;

            function S(e) {
                w.focus(), e.focus()
            }
            C.pz && (w = document.createElement("input"), w.classList.add("for-ios-autocapitalization-fix"), document.body.appendChild(w));
            var I = n(55153),
                N = n(58734),
                M = n(11359),
                k = n(35049),
                P = n(4961),
                T = n(18501),
                x = n(32625),
                R = n(14737),
                L = n(10722),
                B = n(19129),
                O = n(82117),
                F = n(37661),
                D = n(41316),
                U = n(17712),
                K = n(59030),
                j = n(29886),
                $ = n(24531),
                z = n(73172),
                _ = n(34201),
                J = n(41257),
                H = n(35297),
                V = n(17778),
                q = n(63988),
                G = n(83414);
            const W = /^\/([\w@]{1,32})?$/i;
            var Y = n(78396);
            const Q = /id="docs-internal-guid/i,
                Z = {
                    BOLD: "700",
                    ITALIC: "italic",
                    UNDERLINE: "underline",
                    STRIKETHROUGH: "line-through",
                    SUPERSCRIPT: "super",
                    SUBSCRIPT: "sub"
                },
                X = {
                    ANCHOR: "a",
                    BOLD: "strong",
                    ITALIC: "em",
                    UNDERLINE: "u",
                    BLOCKQUOTE: "blockquote",
                    STRIKETHROUGH: "del",
                    SUPERSCRIPT: "sup",
                    SUBSCRIPT: "sub"
                },
                ee = ["H1", "H2", "H3", "H4", "H5", "H6"];

            function te(e) {
                return (new DOMParser).parseFromString(e, "text/html").body
            }

            function ne(e, t) {
                const n = document.createElement(X.ANCHOR);
                return n.href = t, n.appendChild(e.cloneNode(!0)), n
            }

            function ae(e, t) {
                const n = document.createElement(t);
                return n.appendChild(e.cloneNode(!0)), n
            }

            function oe(e, t) {
                let n = t.cloneNode(!0);
                return e ? (e.style && e.style.fontWeight === Z.BOLD && (n = ae(n, X.BOLD)), e.style && e.style.fontStyle === Z.ITALIC && (n = ae(n, X.ITALIC)), e.style && e.style.textDecoration === Z.UNDERLINE && (n = ae(n, X.UNDERLINE)), e.style && e.style.textDecoration === Z.STRIKETHROUGH && (n = ae(n, X.STRIKETHROUGH)), e.style && e.style.verticalAlign === Z.SUPERSCRIPT && (n = ae(n, X.SUPERSCRIPT)), e.style && e.style.verticalAlign === Z.SUBSCRIPT && (n = ae(n, X.SUBSCRIPT)), n) : n
            }

            function ie(e) {
                const t = e.cloneNode(!0);
                let n = document.createTextNode(t.textContent || ""),
                    a = t;
                return "A" === t.nodeName && (n = ne(n, t.href), "style" in t.childNodes[0] && Boolean(t.childNodes[0].style) && (a = t.childNodes[0])), n = oe(a, n), n
            }

            function re(e) {
                if (e.childNodes && (e.childNodes.length <= 1 || "OL" === e.nodeName || "UL" === e.nodeName)) {
                    let t, n = document.createTextNode(e.textContent || "");
                    if ("UL" === e.nodeName || "OL" === e.nodeName || "LI" === e.nodeName) {
                        t = document.createElement(e.nodeName), n = document.createDocumentFragment();
                        const a = [];
                        for (let t = 0; t < e.childNodes.length; t++) a.push(...re(e.childNodes[t]));
                        a.map((e => n.appendChild(e)))
                    } else - 1 !== ee.indexOf(e.nodeName) ? (t = document.createElement(e.nodeName), n = ie(e.childNodes[0])) : "P" === e.nodeName ? (t = document.createElement("p"), n = function(e) {
                        const t = e.cloneNode(!0);
                        let n = document.createTextNode(t.textContent || ""),
                            a = document.createTextNode("");
                        return "style" in t.childNodes[0] && Boolean(t.childNodes[0].style) && (a = t.childNodes[0]), t.childNodes[0] && "A" === t.childNodes[0].nodeName && (n = ne(n.cloneNode(!0), t.childNodes[0].href), a = t.childNodes[0].childNodes[0]), n = oe(a, n), n
                    }(e)) : "BR" === e.nodeName ? n = e : (t = document.createElement("span"), n = ie(e));
                    return t ? (t.appendChild(n), [t]) : [e.cloneNode(!0)]
                }
                if (e.childNodes) {
                    const t = [];
                    for (let n = 0; n < e.childNodes.length; n++) t.push(...re(e.childNodes[n]));
                    return t
                }
                return [e]
            }

            function se(e) {
                return 8 !== e.nodeType
            }
            const le = /<style>(.*?)<\/style>/gs;
            var ce = n(45761);
            const de = (e, t, n, s, c, d, m) => {
                const {
                    showNotification: u
                } = (0, o.ko)(), A = (0, K.A)();
                (0, a.vJ)((() => {
                    if (e) return document.addEventListener("paste", a, !1), () => {
                        document.removeEventListener("paste", a, !1)
                    };
                    async function a(e) {
                        if (!e.clipboardData) return;
                        const a = document.activeElement;
                        if (a && ![r.CfG, r.e0F, r.YVZ].includes(a.id)) return;
                        const o = e.clipboardData.getData("text").substring(0, 4096),
                            h = e.clipboardData.getData("text/html");
                        let p = h ? (0, f.Ay)(function(e) {
                            let t = document.createElement("div");
                            try {
                                e = (n = e).match(Q) ? function(e) {
                                    const t = document.createElement("body"),
                                        n = e.childNodes,
                                        a = Array.from(n).filter(se),
                                        o = [];
                                    for (const e of a) o.push(...re(e));
                                    for (let e = 0; e < o.length; e++) t.appendChild(o[e].cloneNode(!0));
                                    return t
                                }(te(n.replace(/(\r\n|\n|\r)/, ""))).innerHTML : te(n.replace(/(\r\n|\n|\r)/, "")).innerHTML
                            } catch (e) {
                                r.Oig && console.error(e)
                            }
                            var n;
                            t.innerHTML = e.replace(/\u00a0/g, " ").replace(le, "");
                            const a = t.querySelectorAll(".text-content");
                            return a.length && (t = a[a.length - 1]), Array.from(t.getElementsByTagName("*")).forEach((e => {
                                if (e instanceof HTMLElement) switch (e.removeAttribute("style"), "BR" === e.tagName && e.replaceWith("\n"), "P" === e.tagName && e.appendChild(document.createTextNode("\n")), "IMG" !== e.tagName || e.dataset.entityType || e.replaceWith(e.getAttribute("alt") || ""), e.dataset.ignoreOnPaste && e.remove(), f.qh[e.tagName] && e.setAttribute("data-entity-type", f.qh[e.tagName]), e.dataset.entityType || e.textContent !== e.innerText || e.replaceWith(e.textContent), e.dataset.alt && e.setAttribute("alt", e.dataset.alt), e.dataset.entityType) {
                                    case i.C7.MentionName:
                                        e.replaceWith(e.textContent || "");
                                        break;
                                    case i.C7.CustomEmoji:
                                        e.textContent = e.dataset.alt || ""
                                } else e.remove()
                            })), t.innerHTML.trimEnd()
                        }(h), void 0, !0) : void 0;
                        p && (0, Y.T8)(p) && d && (p = (0, Y.m4)(p), m?.());
                        const {
                            items: g
                        } = e.clipboardData;
                        let y = [];
                        if (e.preventDefault(), g.length > 0 && (y = await (0, ce.A)(g), c && (y = y?.slice(0, 1))), !y?.length && !o) return;
                        const v = p?.entities?.length ? p : {
                            text: o
                        };
                        let E = !1;
                        try {
                            E = "urn:schemas-microsoft-com:office:word" === (new DOMParser).parseFromString(h, "text/html").documentElement.getAttribute("xmlns:w")
                        } catch (e) {}
                        const C = v && v.text;
                        let b = y?.length && !E;
                        const w = y ? await Promise.all(y.map((e => (0, I.A)(e.name, e)))) : [],
                            S = c && w?.length && (0, l.eh)(c, w[0]) || Boolean(C),
                            N = (0, l.NK)(w[0]),
                            M = c && c?.groupedId;
                        c && N ? u({
                            message: A(M ? "lng_edit_media_album_error" : "lng_edit_media_invalid_file")
                        }) : !M || (b = S, b) ? (b && n(c ? w : e => e.concat(w)), C && (b ? s(v) : t(v, a?.id))) : u({
                            message: A("lng_edit_media_album_error")
                        })
                    }
                }), [t, c, n, e, d, m, s, A])
            };
            var me = n(3225),
                ue = n(37859),
                Ae = n(56133),
                he = n(61157),
                pe = n(60138);
            let ge = !1;
            const ye = new Set([i.C7.TextUrl, i.C7.Url]);
            var fe = n(25498),
                ve = n(37830);
            const Ee = /^@([a-z0-9_]{1,32})[\u00A0\u0020]+(.*)/is,
                Ce = /^@([a-z0-9_]{1,32})[\u00A0\u0020]+\n{2,}/i,
                be = {
                    username: "",
                    query: "",
                    canShowHelp: !1,
                    usernameLowered: ""
                },
                we = document.createElement("div");
            const Se = (0, ve.A)(((e, t, n) => ({
                username: e,
                query: t,
                canShowHelp: n,
                usernameLowered: e.toLowerCase()
            })));
            var Ie = n(9442),
                Ne = n(98221),
                Me = n(17237);
            const ke = new RegExp(`^${r.bpX.source}$`, "g");
            var Pe = n(11778);
            const Te = {
                    encoderPath: new URL(n(89755), n.b).href,
                    reuseWorker: !0
                },
                xe = {
                    type: "audio/ogg"
                };
            let Re, Le, Be;
            async function Oe() {
                return Re || (Re = n.e(4550).then(n.t.bind(n, 14550, 23)), Le = (await Re).default, Be = new Le(Te)), Re
            }
            async function Fe(e) {
                await async function() {
                    await Oe(), await Be.start()
                }();
                const t = Date.now();
                let n;
                const a = [],
                    o = [];
                Be.ondataavailable = e => {
                    a.push(e)
                };
                const i = function(t, n) {
                    const a = t.sourceNode,
                        i = a.context.createAnalyser();
                    i.fftSize = 64, a.connect(i);
                    const r = i.frequencyBinCount,
                        l = new Uint8Array(r);
                    let c = !1;
                    return function t() {
                        if (c) return;
                        i.getByteFrequencyData(l);
                        const n = l.reduce(((e, t) => e + t), 0) / r / 255;
                        (t => {
                            o.push(255 * t), e(t)
                        })(n < .1 ? 0 : n), (0, s.YS)(t)
                    }(), () => {
                        c = !0
                    }
                }(Be);
                return {
                    stop: () => new Promise(((e, r) => {
                        Be.onstop = () => {
                            e({
                                blob: new Blob(a, xe),
                                duration: Math.round(((n || Date.now()) - t) / 1e3),
                                waveform: o
                            })
                        }, Be.onerror = r;
                        const s = Math.max(0, t + 1e3 - Date.now());
                        setTimeout((() => {
                            Be.stop(), i()
                        }), s)
                    })),
                    pause: () => {
                        const e = Math.max(0, t + 1e3 - Date.now());
                        setTimeout((() => {
                            Be.pause(), n = Date.now(), i()
                        }), e)
                    }
                }
            }
            var De = n(80089),
                Ue = n(80464);
            const Ke = e => {
                const {
                    attachments: t
                } = e, n = (0, Ue.A)(De.ar.Extra, "AttachmentModal", !t.length);
                return n ? a.Ay.createElement(n, e) : void 0
            };
            var je = n(61182),
                $e = n(87679),
                ze = n(52844),
                _e = n(36680),
                Je = n(18276),
                He = n(9168),
                Ve = n(24433),
                qe = n(66469),
                Ge = n(54639);
            const We = (0, a.ph)((e => {
                    let {
                        chatId: t,
                        threadId: n,
                        isButtonVisible: o,
                        canAttachMedia: i,
                        canAttachPolls: s,
                        canSendPhotos: c,
                        canSendVideos: d,
                        canSendDocuments: m,
                        canSendAudios: u,
                        attachBots: A,
                        peerType: h,
                        isScheduled: p,
                        theme: g,
                        shouldCollectDebugLogs: y,
                        onFileSelect: f,
                        onMenuOpen: v,
                        onMenuClose: E,
                        onPollCreate: b,
                        hasReplaceableMedia: w,
                        editingMessage: S
                    } = e;
                    const [I, N, M] = (0, F.A)(), [k, P, T] = (0, _e.A)(I, M), x = c && d, R = c || d, [L, B, O] = (0, F.A)(), D = I || L, j = S && S?.groupedId && Boolean((0, l.yl)(S) || (0, l.dc)(S) || Boolean((0, l.zX)(S) || (0, l.QC)(S))), $ = S && S?.groupedId && Boolean((0, l.wp)(S) || (0, l.gB)(S) || (0, l.zC)(S));
                    (0, a.vJ)((() => {
                        I && T()
                    }), [I, T]), (0, a.vJ)((() => {
                        D ? v() : E()
                    }), [D, E, v]);
                    const z = (0, U.A)((() => {
                            I ? M() : N()
                        })),
                        _ = (0, U.A)(((e, t) => {
                            const {
                                files: n
                            } = e.target, a = (0, $e.kc)(n);
                            a?.length && f(a, t)
                        })),
                        J = (0, U.A)((() => {
                            (0, ze.p)(Array.from(x ? r.mxD : c ? r.gex : r.fNs).join(","), (e => _(e, !0)))
                        })),
                        H = (0, U.A)((() => {
                            (0, ze.p)(!m && u ? Array.from(r.IH3).join(",") : "*", (e => _(e, !1)))
                        })),
                        V = (0, U.A)((() => {
                            const e = new File([(0, je.F8)()], r.lFE, {
                                type: "text/plain"
                            });
                            f([e])
                        })),
                        q = (0, a.Kr)((() => A ? Object.values(A).filter((e => !(!h || !e.isForAttachMenu) && (!("bots" !== h || e.id !== t || !e.attachMenuPeerTypes.includes("self")) || e.attachMenuPeerTypes.includes(h)))) : void 0), [A, t, h]),
                        G = (0, K.A)();
                    if (o) return a.Ay.createElement("div", {
                        className: "AttachMenu"
                    }, S && w ? a.Ay.createElement(qe.A, {
                        id: "replace-menu-button",
                        className: I ? "AttachMenu--button activated" : "AttachMenu--button",
                        round: !0,
                        color: "translucent",
                        onActivate: z,
                        ariaLabel: "Replace an attachment",
                        ariaControls: "replace-menu-controls",
                        hasPopup: !0
                    }, a.Ay.createElement(Je.A, {
                        name: "replace"
                    })) : a.Ay.createElement(qe.A, {
                        id: "attach-menu-button",
                        disabled: Boolean(S),
                        className: I ? "AttachMenu--button activated" : "AttachMenu--button",
                        round: !0,
                        color: "translucent",
                        onActivate: z,
                        ariaLabel: "Add an attachment",
                        ariaControls: "attach-menu-controls",
                        hasPopup: !0
                    }, a.Ay.createElement(Je.A, {
                        name: "attach"
                    })), a.Ay.createElement(He.A, {
                        id: "attach-menu-controls",
                        isOpen: D,
                        autoClose: !0,
                        positionX: "right",
                        positionY: "bottom",
                        onClose: M,
                        className: "AttachMenu--menu fluid",
                        onCloseAnimationEnd: M,
                        onMouseEnter: C.TF ? void 0 : k,
                        onMouseLeave: C.TF ? void 0 : P,
                        noCloseOnBackdrop: !C.TF,
                        ariaLabelledBy: "attach-menu-button"
                    }, !i && a.Ay.createElement(Ve.A, {
                        className: "media-disabled",
                        disabled: !0
                    }, "Posting media content is not allowed in this group."), i && a.Ay.createElement(a.Ay.Fragment, null, R && !$ && a.Ay.createElement(Ve.A, {
                        icon: "photo",
                        onClick: J
                    }, G(x ? "AttachmentMenu.PhotoOrVideo" : c ? "InputAttach.Popover.Photo" : "InputAttach.Popover.Video")), (m || u) && !j && a.Ay.createElement(Ve.A, {
                        icon: "document",
                        onClick: H
                    }, G(!m && u ? "InputAttach.Popover.Music" : "AttachDocument")), m && y && a.Ay.createElement(Ve.A, {
                        icon: "bug",
                        onClick: V
                    }, G("DebugSendLogs"))), s && !S && a.Ay.createElement(Ve.A, {
                        icon: "poll",
                        onClick: b
                    }, G("Poll")), !S && !w && !p && q?.map((e => a.Ay.createElement(Ge.A, {
                        bot: e,
                        chatId: t,
                        threadId: n,
                        theme: g,
                        onMenuOpened: B,
                        onMenuClosed: O
                    })))))
                })),
                Ye = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "BotCommandMenu", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                };
            var Qe = n(85449),
                Ze = n(64493);
            const Xe = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        messageId: n
                    } = t;
                    const {
                        chatId: a
                    } = (0, c.Xf0)(e) || {};
                    return a ? {
                        message: (0, c.O5q)(e, a, n)
                    } : {}
                }))((e => {
                    let {
                        isOpen: t,
                        message: n,
                        onClose: i
                    } = e;
                    const {
                        clickBotInlineButton: r
                    } = (0, o.ko)(), s = (0, K.A)(), [l, c] = (0, _e.A)(t, i), {
                        isKeyboardSingleUse: d
                    } = n || {}, m = (0, a.Kr)((() => {
                        const e = [];
                        return n?.keyboardButtons.forEach((t => {
                            e.push(t.map((e => (0, Qe.A)(s, e))))
                        })), e
                    }), [s, n?.keyboardButtons]);
                    if (n && n.keyboardButtons) return a.Ay.createElement(He.A, {
                        isOpen: t,
                        autoClose: d,
                        positionX: "right",
                        positionY: "bottom",
                        onClose: i,
                        className: "BotKeyboardMenu",
                        onCloseAnimationEnd: i,
                        onMouseEnter: C.TF ? void 0 : l,
                        onMouseLeave: C.TF ? void 0 : c,
                        noCompact: !0
                    }, a.Ay.createElement("div", {
                        className: "content custom-scroll"
                    }, n.keyboardButtons.map(((e, t) => a.Ay.createElement("div", {
                        className: "row"
                    }, e.map(((e, o) => a.Ay.createElement(Ze.A, {
                        ripple: !0,
                        disabled: "unsupported" === e.type,
                        onClick: () => r({
                            messageId: n.id,
                            button: e
                        })
                    }, m?.[t][o]))))))))
                }))),
                et = (0, a.ph)((e => {
                    let {
                        isOpen: t,
                        onClick: n,
                        text: o,
                        isDisabled: i
                    } = e;
                    const r = (0, a.li)(null);
                    return (0, a.vJ)((() => {
                        const e = r.current;
                        if (!e) return;
                        const t = e.scrollWidth + 1;
                        e.closest(".Composer").style.setProperty("--bot-menu-text-width", `${t}px`)
                    }), [t, o]), (0, a.vJ)((() => {
                        const e = r.current;
                        if (!e) return;
                        const t = e.closest(".Composer");
                        return () => {
                            t.style.removeProperty("--bot-menu-text-width")
                        }
                    }), []), a.Ay.createElement(Ze.A, {
                        className: (0, m.A)("bot-menu", t && "open"),
                        round: !0,
                        color: "translucent",
                        disabled: i,
                        onClick: n,
                        ariaLabel: "Open bot command keyboard"
                    }, a.Ay.createElement("i", {
                        className: (0, m.A)("bot-menu-icon", "icon", "icon-webapp", t && "open")
                    }), a.Ay.createElement("span", {
                        ref: r,
                        className: "bot-menu-text"
                    }, o))
                })),
                tt = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "ChatCommandTooltip", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                };
            var nt = n(14),
                at = n(39351),
                ot = n(94803),
                it = n(91930),
                rt = n(60859);
            const st = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    shouldForceShowEditing: n,
                    chatId: a,
                    threadId: o,
                    messageListType: i
                } = t;
                const {
                    forwardMessages: {
                        fromChatId: r,
                        toChatId: s,
                        messageIds: d,
                        noAuthors: m,
                        noCaptions: u
                    },
                    isShareMessageModalShown: A,
                    shouldPreventComposerAnimation: h
                } = (0, c.nTw)(e), p = "scheduled" === i ? (0, c.VlN)(e, a) : (0, c.Ys6)(e, a, o), g = (0, c.PKK)(e) && !h, y = s === a, f = d?.map((t => (0, c.O5q)(e, r, t))), v = (0, c.GA4)(e, a, o), E = v?.replyInfo, C = E?.replyToPeerId, b = C ? (0, c.hds)(e, C) : void 0;
                let w, S;
                if (p ? w = (0, c.KLw)(e, a, o, i) : y && 1 === d.length ? w = f?.[0] : E && !n && (w = (0, c.O5q)(e, E.replyToPeerId || a, E.replyToMsgId)), p && w) S = (0, c.Y7C)(e, w);
                else if (y) w && (S = (0, c.Szq)(e, w), S || (S = (0, c.Y7C)(e, w))), S || (S = (0, c.PVB)(e, r));
                else if (E && w && !n) {
                    const {
                        forwardInfo: t
                    } = w, n = (0, c.nZ4)(e, a);
                    t && (t.isChannelPost || n) && (S = (0, c.Szq)(e, w)), S || t?.hiddenUserName && !Boolean(E.quoteText) || (S = (0, c.Y7C)(e, w))
                }
                const I = S && (0, c.hds)(e, S.id),
                    N = I && (0, l.WX)(I),
                    M = f?.some((e => e?.content.text && Object.keys(e.content).length > 1)),
                    k = y && 1 === d.length && Boolean(w?.content.storyData),
                    P = E?.replyToMsgId === o && !E.replyToPeerId;
                return {
                    replyInfo: E,
                    editingId: p,
                    message: w,
                    sender: S,
                    shouldAnimate: g,
                    forwardedMessagesCount: y ? d.length : void 0,
                    noAuthors: m,
                    noCaptions: u,
                    forwardsHaveCaptions: M,
                    isCurrentUserPremium: (0, c.g29)(e),
                    isContextMenuDisabled: k,
                    isReplyToDiscussion: P,
                    isInChangingRecipientMode: A,
                    shouldPreventComposerAnimation: h,
                    senderChat: b,
                    currentUserId: e.currentUserId,
                    isSenderChannel: N
                }
            }))((e => {
                let {
                    replyInfo: t,
                    editingId: n,
                    message: i,
                    sender: r,
                    shouldAnimate: s,
                    forwardedMessagesCount: c,
                    noAuthors: d,
                    noCaptions: u,
                    forwardsHaveCaptions: A,
                    shouldForceShowEditing: h,
                    isCurrentUserPremium: p,
                    isContextMenuDisabled: g,
                    isReplyToDiscussion: y,
                    onClear: f,
                    isInChangingRecipientMode: v,
                    shouldPreventComposerAnimation: E,
                    senderChat: C,
                    chatId: b,
                    currentUserId: w,
                    isSenderChannel: S
                } = e;
                const {
                    resetDraftReplyInfo: I,
                    updateDraftReplyInfo: N,
                    setEditingId: M,
                    focusMessage: P,
                    changeRecipient: T,
                    openChatOrTopicWithReplyInDraft: x,
                    setForwardNoAuthors: R,
                    setForwardNoCaptions: B,
                    exitForwardMode: O,
                    setShouldPreventComposerAnimation: F
                } = (0, o.ko)(), D = (0, a.li)(null), j = (0, K.A)(), $ = (0, at.A)(), z = "topicCreate" === i?.content.action?.type, J = t && !h, H = Boolean(t?.quoteText), V = Boolean(c), q = !(v || (!i || !t && !n) && (!r || !V)), {
                    shouldRender: G,
                    transitionClassNames: W
                } = (0, _.A)(q && !z && !y, void 0, !s, void 0, !s, 350, !s);
                (0, a.vJ)((() => {
                    E && F({
                        shouldPreventComposerAnimation: !1
                    })
                }));
                const Y = (0, U.A)((() => {
                    n ? M({
                        messageId: void 0
                    }) : c ? O() : t && !h && I(), f?.()
                }));
                (0, a.vJ)((() => q ? (0, Pe.A)(Y) : void 0), [q, Y]);
                const {
                    isContextMenuOpen: Q,
                    contextMenuPosition: Z,
                    handleContextMenu: X,
                    handleContextMenuClose: ee,
                    handleContextMenuHide: te
                } = (0, L.A)(D), ne = (0, U.A)((e => {
                    X(e)
                })), ae = (0, U.A)((e => {
                    e.stopPropagation(), Y(), te()
                })), oe = e => () => {
                    ee(), e()
                }, ie = (0, U.A)(oe(T)), re = (0, U.A)(oe((() => {
                    P({
                        chatId: i.chatId,
                        messageId: i.id,
                        noForumTopicPanel: !0
                    })
                }))), se = (0, U.A)(oe((() => N({
                    quoteText: void 0
                })))), le = (0, U.A)(oe(T)), ce = (0, U.A)((() => {
                    ee(), r && x({
                        chatId: r.id
                    })
                })), de = (0, U.A)(oe(Y)), me = (0, U.A)((() => D.current)), ue = (0, U.A)((() => D.current)), Ae = (0, U.A)((() => D.current.querySelector(".forward-context-menu .bubble"))), {
                    positionX: he,
                    positionY: pe,
                    transformOriginX: ge,
                    transformOriginY: ye,
                    style: fe
                } = (0, ot.A)(Z, me, ue, Ae);
                (0, a.vJ)((() => {
                    G || (ee(), te())
                }), [ee, te, G]);
                const ve = (0, m.A)("ComposerEmbeddedMessage", W),
                    Ee = (0, nt.A)(r, !0),
                    Ce = (0, m.A)("ComposerEmbeddedMessage_inner", (0, k.y)(Ee)),
                    be = (0, a.Kr)((() => n ? "edit" : V ? "forward" : J ? "reply" : void 0), [n, V, J]),
                    we = c && c > 1 ? j("ForwardedMessageCount", c) : void 0,
                    Se = (0, a.Kr)((() => {
                        if (!i || !V || !i.content.text || !d || p) return i;
                        const e = (0, l.m4)(i.content.text);
                        return {
                            ...i,
                            content: {
                                ...i.content,
                                text: e
                            }
                        }
                    }), [p, V, i, d]),
                    Ie = (0, nt.A)(be, !0);
                if (!G) return;
                const Ne = r && !S && b !== r.id && r.id !== w;
                return a.Ay.createElement("div", {
                    className: ve,
                    ref: D,
                    onContextMenu: X
                }, a.Ay.createElement("div", {
                    className: Ce
                }, a.Ay.createElement("div", {
                    className: "embedded-left-icon",
                    onClick: X
                }, Ie && a.Ay.createElement(Je.A, {
                    name: Ie
                }), Boolean(t?.quoteText) && a.Ay.createElement(Je.A, {
                    name: "quote",
                    className: "quote-reply"
                })), a.Ay.createElement(it.b, {
                    isOpen: q,
                    className: "inside-input",
                    replyInfo: t,
                    isInComposer: !0,
                    message: Se,
                    sender: d ? void 0 : r,
                    customText: we,
                    title: n && !J ? j("EditMessage") : d ? j("HiddenSendersNameDescription") : void 0,
                    onClick: ne,
                    senderChat: C
                }), a.Ay.createElement(Ze.A, {
                    className: "embedded-cancel",
                    round: !0,
                    faded: !0,
                    color: "translucent",
                    ariaLabel: j("Cancel"),
                    onClick: ae
                }, a.Ay.createElement("i", {
                    className: "icon icon-close"
                })), (J || V) && !g && a.Ay.createElement(He.A, {
                    isOpen: Q,
                    transformOriginX: ge,
                    transformOriginY: ye,
                    positionX: he,
                    positionY: pe,
                    style: fe,
                    className: "forward-context-menu",
                    onClose: ee,
                    onCloseAnimationEnd: te
                }, V && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(Ve.A, {
                    icon: d ? void 0 : "message-succeeded",
                    customIcon: d ? a.Ay.createElement("i", {
                        className: "icon icon-placeholder"
                    }) : void 0,
                    onClick: () => R({
                        noAuthors: !1
                    })
                }, j(c > 1 ? "ShowSenderNames" : "ShowSendersName")), a.Ay.createElement(Ve.A, {
                    icon: d ? "message-succeeded" : void 0,
                    customIcon: d ? void 0 : a.Ay.createElement("i", {
                        className: "icon icon-placeholder"
                    }),
                    onClick: () => R({
                        noAuthors: !0
                    })
                }, j(c > 1 ? "HideSenderNames" : "HideSendersName")), A && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(rt.A, null), a.Ay.createElement(Ve.A, {
                    icon: u ? void 0 : "message-succeeded",
                    customIcon: u ? a.Ay.createElement("i", {
                        className: "icon icon-placeholder"
                    }) : void 0,
                    onClick: () => B({
                        noCaptions: !1
                    })
                }, j(c > 1 ? "Conversation.ForwardOptions.ShowCaption" : "ShowCaption")), a.Ay.createElement(Ve.A, {
                    icon: u ? "message-succeeded" : void 0,
                    customIcon: u ? void 0 : a.Ay.createElement("i", {
                        className: "icon icon-placeholder"
                    }),
                    onClick: () => B({
                        noCaptions: !0
                    })
                }, j(c > 1 ? "Conversation.ForwardOptions.HideCaption" : "HideCaption"))), a.Ay.createElement(rt.A, null), a.Ay.createElement(Ve.A, {
                    icon: "replace",
                    onClick: ie
                }, j("ForwardAnotherChat"))), J && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(Ve.A, {
                    icon: "show-message",
                    onClick: re
                }, j("Message.Context.Goto")), H && a.Ay.createElement(Ve.A, {
                    icon: "remove-quote",
                    onClick: se
                }, j("RemoveQuote")), Ne && a.Ay.createElement(Ve.A, {
                    icon: "user",
                    onClick: ce
                }, $("ReplyInPrivateMessage")), a.Ay.createElement(Ve.A, {
                    icon: "replace",
                    onClick: le
                }, j("ReplyToAnotherChat")), a.Ay.createElement(Ve.A, {
                    icon: "delete",
                    onClick: de
                }, j("DoNotReply"))))))
            })));
            var lt = n(25897),
                ct = n(83689),
                dt = n(41510);
            const mt = e => {
                const {
                    isOpen: t
                } = e, n = (0, Ue.A)(De.ar.Extra, "DropArea", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            };
            var ut = n(49068);
            const At = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "InlineBotTooltip", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                ht = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "MentionTooltip", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                };
            var pt = n(78407);
            const gt = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "PollModal", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                yt = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "SendAsMenu", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                ft = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, Ue.A)(De.ar.Extra, "StickerTooltip", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                };
            var vt = n(26440),
                Et = n(70314);
            const Ct = new RegExp(r.kNZ, "i"),
                bt = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n,
                        threadId: a
                    } = t;
                    const o = (0, c.rQx)(e, n, a),
                        {
                            attachmentSettings: i
                        } = e;
                    return {
                        theme: (0, c.SJA)(e),
                        webPagePreview: (0, c.nTw)(e).webPagePreview,
                        noWebPage: o,
                        attachmentSettings: i
                    }
                }))((e => {
                    let {
                        chatId: t,
                        threadId: n,
                        getHtml: r,
                        isDisabled: s,
                        webPagePreview: l,
                        noWebPage: c,
                        theme: d,
                        attachmentSettings: u,
                        isEditing: A
                    } = e;
                    const {
                        loadWebPagePreview: h,
                        clearWebPagePreview: p,
                        toggleMessageWebPage: g,
                        updateAttachmentSettings: y
                    } = (0, o.ko)(), v = (0, K.A)(), E = (0, a.li)(), C = (0, a.li)(null), b = u.isInvertedMedia, w = (0, q.tF)((() => {
                        const e = (0, f.Ay)(r()),
                            t = e.entities?.find((e => e.type === i.C7.TextUrl));
                        return E.current = e, t?.url || e.text.match(Ct)?.[0]
                    }), [r], 300, !0), S = (0, G.A)(w, [w, r], !0);
                    (0, a.vJ)((() => {
                        const e = S(),
                            a = E.current;
                        e ? h({
                            text: a
                        }) : (p(), g({
                            chatId: t,
                            threadId: n
                        }))
                    }), [S, t, n]), (0, H.A)((() => {
                        p(), g({
                            chatId: t,
                            threadId: n
                        })
                    }), [t, p, n, g]);
                    const I = (0, B.A)((() => Boolean(l && r() && !c && !s)), [s, r, c, l]),
                        {
                            shouldRender: N,
                            transitionClassNames: M
                        } = (0, _.A)(I),
                        k = (0, nt.A)(l, !0),
                        P = (0, U.A)((() => {
                            g({
                                chatId: t,
                                threadId: n,
                                noWebPage: !0
                            })
                        })),
                        {
                            isContextMenuOpen: T,
                            contextMenuPosition: x,
                            handleContextMenu: R,
                            handleContextMenuClose: O,
                            handleContextMenuHide: F
                        } = (0, L.A)(C, A, !0),
                        D = (0, U.A)((() => C.current)),
                        j = (0, U.A)((() => C.current)),
                        $ = (0, U.A)((() => C.current.querySelector(".web-page-preview-context-menu .bubble"))),
                        {
                            positionX: z,
                            positionY: J,
                            transformOriginX: V,
                            transformOriginY: W,
                            style: Y
                        } = (0, ot.A)(x, D, j, $),
                        Q = (0, U.A)((e => {
                            R(e)
                        }));

                    function Z(e) {
                        y({
                            isInvertedMedia: e
                        })
                    }
                    if ((0, a.vJ)((() => {
                            N && k || (O(), F())
                        }), [O, F, N, k]), !N || !k) return;
                    const {
                        photo: X,
                        ...ee
                    } = k, te = {
                        content: {
                            webPage: ee
                        }
                    };
                    return a.Ay.createElement("div", {
                        className: (0, m.A)("WebPagePreview", M),
                        ref: C
                    }, a.Ay.createElement("div", {
                        className: "WebPagePreview_inner"
                    }, a.Ay.createElement("div", {
                        className: "WebPagePreview-left-icon",
                        onClick: Q
                    }, a.Ay.createElement("i", {
                        className: "icon icon-link"
                    })), a.Ay.createElement(Et.A, {
                        message: te,
                        inPreview: !0,
                        theme: d,
                        onContainerClick: Q,
                        isEditing: A
                    }), a.Ay.createElement(Ze.A, {
                        className: "WebPagePreview-clear",
                        round: !0,
                        faded: !0,
                        color: "translucent",
                        ariaLabel: "Clear Webpage Preview",
                        onClick: P
                    }, a.Ay.createElement("i", {
                        className: "icon icon-close"
                    })), !A && a.Ay.createElement(He.A, {
                        isOpen: T,
                        transformOriginX: V,
                        transformOriginY: W,
                        positionX: z,
                        positionY: J,
                        style: Y,
                        className: "web-page-preview-context-menu",
                        onClose: O,
                        onCloseAnimationEnd: F,
                        autoClose: !0
                    }, a.Ay.createElement(a.Ay.Fragment, null, b ? a.Ay.createElement(Ve.A, {
                        icon: "move-caption-up",
                        onClick: () => Z(void 0)
                    }, v("PreviewSender.MoveTextUp")) : a.Ay.createElement(Ve.A, {
                        icon: "move-caption-down",
                        onClick: () => Z(!0)
                    }, v("PreviewSender.MoveTextDown")), a.Ay.createElement(Ve.A, {
                        icon: "delete",
                        onClick: P
                    }, v("ChatInput.EditLink.RemovePreview"))))))
                })));
            var wt = n(97676),
                St = n(76283),
                It = n(57474),
                Nt = n(21849),
                Mt = n(23470),
                kt = function(e) {
                    return e.Send = "send", e.Record = "record", e.Edit = "edit", e.Schedule = "schedule", e.Forward = "forward", e.SendOneTime = "sendOneTime", e
                }(kt || {});
            const Pt = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    chatId: n,
                    threadId: a,
                    storyId: o,
                    messageListType: s,
                    isMobile: m,
                    type: u
                } = t;
                const A = (0, c.hds)(e, n),
                    h = n !== r.f51 ? (0, c.yps)(e, n) : void 0,
                    p = Boolean(h),
                    g = (0, c.nZ4)(e, n),
                    y = (0, l.L8)(n),
                    f = p ? (0, c.vGo)(e, h.id) : void 0,
                    v = y ? void 0 : (0, c.AWZ)(e, n),
                    E = (p || !y) && (0, c.tVS)(e, n, a),
                    C = (0, c.K3w)(e, n, a),
                    {
                        language: b,
                        shouldSuggestStickers: w,
                        shouldSuggestCustomEmoji: S,
                        shouldUpdateStickerSetOrder: I
                    } = e.settings.byKey,
                    N = e.emojiKeywords[r.cUY],
                    M = b !== r.cUY ? e.emojiKeywords[b] : void 0,
                    k = E ? E.id : void 0,
                    P = k ? (0, c.O5q)(e, n, k) : void 0,
                    {
                        currentUserId: T
                    } = e,
                    x = (0, c.mBe)(e, T),
                    R = v ? v?.sendAsId || T : void 0,
                    L = A?.sendAsPeerIds && R && (A.sendAsPeerIds.some((e => e.id === R)) ? R : A?.adminRights?.anonymous ? A?.id : void 0),
                    B = L ? (0, c.mBe)(e, L) : void 0,
                    O = !B && L ? (0, c.hds)(e, L) : void 0,
                    F = (0, c.sam)(e, n),
                    D = (0, c.p6T)(e, n),
                    U = (0, c.nTw)(e),
                    K = Boolean(U.storyViewer.storyId),
                    j = (0, c.Xf0)(e),
                    $ = n === j?.chatId && a === j?.threadId && s === j?.type && !K,
                    z = (0, c.mBe)(e, n),
                    _ = (z && !(0, c.vGo)(e, z.id)?.noVoiceMessages) ?? !0,
                    J = v?.slowMode,
                    H = (0, c.g29)(e),
                    V = "scheduled" === s ? (0, c.dkp)(e, n) : (0, c.U0A)(e, n, a),
                    q = o && (0, c.Msb)(e, n, o),
                    G = q && "sentReaction" in q ? q.sentReaction : void 0,
                    W = (0, c.GA4)(e, n, a),
                    Y = W?.replyInfo ? (0, c.O5q)(e, n, W.replyInfo.replyToMsgId) : void 0,
                    Q = A?.isForum && A.isForumAsMessages && a === i.l3 && Y ? (0, c.nkm)(e, Y) : void 0,
                    Z = "scheduled" === s,
                    X = y && !p && !Z && !g,
                    ee = (0, c.rQx)(e, n, a),
                    te = (0, c.vGo)(e, n)?.isContactRequirePremium,
                    ne = y && !p && !Z && !g && "story" !== u && n !== r.zv8,
                    ae = (0, c.xYJ)(e, "stickerEffects"),
                    oe = U.shouldPlayEffectInComposer,
                    ie = ne && W?.effectId,
                    re = ie ? e.availableEffectById[ie] : void 0,
                    se = e.reactions.effectReactions;
                return {
                    availableReactions: e.reactions.availableReactions,
                    topReactions: "story" === u ? e.reactions.topReactions : void 0,
                    isOnActiveTab: !U.isBlurred,
                    editingMessage: (0, c.KLw)(e, n, a, s),
                    draft: W,
                    chat: A,
                    isChatWithBot: p,
                    isChatWithSelf: g,
                    isForCurrentMessageList: $,
                    canScheduleUntilOnline: (0, c.RBq)(e, n),
                    isChannel: A ? (0, l.WX)(A) : void 0,
                    isRightColumnShown: (0, c.gjV)(e, m),
                    isSelectModeActive: (0, c.rTV)(e),
                    withScheduledButton: "thread" === s && Boolean(C?.length),
                    isInScheduledList: Z,
                    botKeyboardMessageId: k,
                    botKeyboardPlaceholder: P?.keyboardPlaceholder,
                    isForwarding: n === U.forwardMessages.toChatId,
                    pollModal: U.pollModal,
                    stickersForEmoji: e.stickers.forEmoji.stickers,
                    customEmojiForEmoji: e.customEmojis.forEmoji.stickers,
                    chatFullInfo: v,
                    topInlineBotIds: e.topInlineBots?.userIds,
                    currentUserId: T,
                    currentUser: x,
                    contentToBeScheduled: U.contentToBeScheduled,
                    shouldSuggestStickers: w,
                    shouldSuggestCustomEmoji: S,
                    shouldUpdateStickerSetOrder: I,
                    recentEmojis: e.recentEmojis,
                    baseEmojiKeywords: N?.keywords,
                    emojiKeywords: M?.keywords,
                    inlineBots: U.inlineBots.byUsername,
                    isInlineBotLoading: U.inlineBots.isLoading,
                    botCommands: f ? f.botInfo?.commands || !1 : void 0,
                    botMenuButton: f?.botInfo?.menuButton,
                    sendAsUser: B,
                    sendAsChat: O,
                    sendAsId: L,
                    editingDraft: V,
                    requestedDraft: F,
                    requestedDraftFiles: D,
                    attachBots: e.attachMenu.bots,
                    attachMenuPeerType: (0, c.dfQ)(e, n),
                    theme: (0, c.SJA)(e),
                    fileSizeLimit: (0, d.d)(e, "uploadMaxFileparts") * r.dK5,
                    captionLimit: (0, d.d)(e, "captionLength"),
                    isCurrentUserPremium: H,
                    canSendVoiceByPrivacy: _,
                    attachmentSettings: e.attachmentSettings,
                    slowMode: J,
                    currentMessageList: j,
                    isReactionPickerOpen: (0, c.Ani)(e),
                    canBuyPremium: !H && !(0, c.n_C)(e),
                    canPlayAnimatedEmojis: (0, c.BWX)(e),
                    canSendOneTimeMedia: !g && y && !p && !Z,
                    shouldCollectDebugLogs: e.settings.byKey.shouldCollectDebugLogs,
                    sentStoryReaction: G,
                    stealthMode: e.stories.stealthMode,
                    replyToTopic: Q,
                    quickReplyMessages: e.quickReplies.messagesById,
                    quickReplies: e.quickReplies.byId,
                    canSendQuickReplies: X,
                    noWebPage: ee,
                    webPagePreview: (0, c.nTw)(e).webPagePreview,
                    isContactRequirePremium: te,
                    effect: re,
                    effectReactions: se,
                    areEffectsSupported: ne,
                    canPlayEffect: ae,
                    shouldPlayEffect: oe
                }
            }))((e => {
                let {
                    type: t,
                    isOnActiveTab: n,
                    dropAreaState: c,
                    isInScheduledList: d,
                    canScheduleUntilOnline: w,
                    isReady: Y,
                    isMobile: Q,
                    onDropHide: Z,
                    onFocus: X,
                    onBlur: ee,
                    editingMessage: te,
                    chatId: ne,
                    threadId: ae,
                    storyId: oe,
                    currentMessageList: ie,
                    messageListType: re,
                    draft: se,
                    chat: le,
                    chatFullInfo: ce,
                    replyToTopic: ve,
                    isForCurrentMessageList: Te,
                    isCurrentUserPremium: xe,
                    canSendVoiceByPrivacy: Re,
                    isChatWithBot: Le,
                    isChatWithSelf: Be,
                    isChannel: De,
                    fileSizeLimit: Ue,
                    isRightColumnShown: je,
                    isSelectModeActive: $e,
                    isReactionPickerOpen: ze,
                    isForwarding: _e,
                    pollModal: He,
                    botKeyboardMessageId: Ve,
                    botKeyboardPlaceholder: Ge,
                    inputPlaceholder: Qe,
                    withScheduledButton: nt,
                    stickersForEmoji: at,
                    customEmojiForEmoji: ot,
                    topInlineBotIds: it,
                    currentUserId: rt,
                    currentUser: Et,
                    captionLimit: Ct,
                    contentToBeScheduled: Pt,
                    shouldSuggestStickers: Tt,
                    shouldSuggestCustomEmoji: xt,
                    baseEmojiKeywords: Rt,
                    emojiKeywords: Lt,
                    recentEmojis: Bt,
                    inlineBots: Ot,
                    isInlineBotLoading: Ft,
                    botCommands: Dt,
                    sendAsUser: Ut,
                    sendAsChat: Kt,
                    sendAsId: jt,
                    editingDraft: $t,
                    requestedDraft: zt,
                    requestedDraftFiles: _t,
                    botMenuButton: Jt,
                    attachBots: Ht,
                    attachMenuPeerType: Vt,
                    attachmentSettings: qt,
                    theme: Gt,
                    slowMode: Wt,
                    shouldUpdateStickerSetOrder: Yt,
                    editableInputCssSelector: Qt,
                    editableInputId: Zt,
                    inputId: Xt,
                    className: en,
                    availableReactions: tn,
                    topReactions: nn,
                    canBuyPremium: an,
                    canPlayAnimatedEmojis: on,
                    shouldCollectDebugLogs: rn,
                    sentStoryReaction: sn,
                    stealthMode: ln,
                    canSendOneTimeMedia: cn,
                    quickReplyMessages: dn,
                    quickReplies: mn,
                    canSendQuickReplies: un,
                    onForward: An,
                    webPagePreview: hn,
                    noWebPage: pn,
                    isContactRequirePremium: gn,
                    effect: yn,
                    effectReactions: fn,
                    areEffectsSupported: vn,
                    canPlayEffect: En,
                    shouldPlayEffect: Cn
                } = e;
                const {
                    sendMessage: bn,
                    clearDraft: wn,
                    showDialog: Sn,
                    forwardMessages: In,
                    openPollModal: Nn,
                    closePollModal: Mn,
                    loadScheduledHistory: kn,
                    openThread: Pn,
                    addRecentEmoji: Tn,
                    sendInlineBotResult: xn,
                    loadSendAs: Rn,
                    resetOpenChatWithDraft: Ln,
                    callAttachBot: Bn,
                    addRecentCustomEmoji: On,
                    showNotification: Fn,
                    showAllowedMessageTypesNotification: Dn,
                    openStoryReactionPicker: Un,
                    closeReactionPicker: Kn,
                    sendStoryReaction: jn,
                    editMessage: $n,
                    updateAttachmentSettings: zn,
                    saveEffectInDraft: _n,
                    setReactionEffect: Jn,
                    hideEffectInComposer: Hn
                } = (0, o.ko)(), Vn = (0, K.A)(), qn = (0, a.li)(null), Gn = (0, a.li)(null), [Wn, Yn] = (0, a.Ul)(""), [Qn, Zn] = (0, a.J0)(!1), Xn = (0, D.A)(Qt), ea = (0, a.li)(), ta = (0, j.A)(c), {
                    width: na
                } = b.A.get(), aa = "messageList" === t, oa = "story" === t, ia = aa ? le?.sendAsPeerIds : void 0, ra = ia && (ia.length > 1 || !ia.some((e => e.id === rt))), [sa, la, ca] = (0, F.A)(), da = (0, z.A)(ne, ae), [ma, ua, Aa] = (0, F.A)(), [ha, pa, ga] = (0, F.A)(), ya = te && (0, l.rO)(te), {
                    emojiSet: fa,
                    members: va,
                    botCommands: Ea
                } = ce || {}, Ca = fa?.id, ba = !(!sn || !("emoticon" in sn)) && sn.emoticon === r.tNZ.emoticon;
                (0, a.vJ)(p.VU, [Wn]);
                const wa = (0, a.li)(0),
                    [Sa, Ia] = (0, $.A)(aa && w, ca);
                (0, R.A)((() => {
                    Zn(!0)
                }), 430), (0, a.vJ)((() => {
                    aa || Kn()
                }), [aa, oe]), (0, a.vJ)((() => {
                    ea.current = void 0
                }), [ne]), (0, a.vJ)((() => {
                    ne && Y && !oa && kn({
                        chatId: ne
                    })
                }), [Y, ne, ae, oa]), (0, a.vJ)((() => {
                    ne && le && !ia && Y && (0, l.Vs)(le) && Rn({
                        chatId: ne
                    })
                }), [le, ne, Y, Rn, ia]);
                const Na = (0, a.li)(!1);
                (0, H.A)((e => {
                    let [t, n] = e;
                    Na.current = Boolean(ne === t && ia && !n)
                }), [ne, ia]);
                const [Ma, ka] = (0, a.J0)([]), Pa = Boolean(Ma.length), [Ta, xa] = (0, a.J0)(void 0), {
                    canSendStickers: Ra,
                    canSendGifs: La,
                    canAttachMedia: Ba,
                    canAttachPolls: Oa,
                    canAttachEmbedLinks: Fa,
                    canSendVoices: Da,
                    canSendPlainText: Ua,
                    canSendAudios: Ka,
                    canSendVideos: ja,
                    canSendPhotos: $a,
                    canSendDocuments: za
                } = (0, a.Kr)((() => (0, l.Q_)(le, ce, Le, oa)), [le, ce, Le, oa]), _a = gn && oa, Ja = _a || !Ua, Ha = !Pa && Fa && !pn && Boolean(hn), Va = Ja && !te;
                (0, a.vJ)((() => {
                    Ha || zn({
                        isInvertedMedia: void 0
                    })
                }), [Ha]);
                const qa = (0, U.A)((function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zt;
                        if (t === Zt && Va) return;
                        const n = window.getSelection();
                        let a;
                        if (a = t === Zt ? document.querySelector(Qt) : document.getElementById(t), n.rangeCount) {
                            const o = n.getRangeAt(0);
                            if ((0, M.L)(o, t)) return (0, v.oR)(e), void a.dispatchEvent(new Event("input", {
                                bubbles: !0
                            }))
                        }
                        Yn(`${Wn()}${e}`), (0, s.Uz)((() => {
                            (0, g.A)(a)
                        }))
                    })),
                    Ga = (0, U.A)((function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zt;
                        const n = (0, P.A)(e, ["escape_html", "emoji_html", "br_html"]).join("").replace(/\u200b+/g, "​");
                        qa(n, t)
                    })),
                    Wa = (0, U.A)((function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zt;
                        const n = (0, T.Q)(e);
                        qa(n, t)
                    })),
                    Ya = (0, U.A)((function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zt;
                        qa((0, N.hB)(e), t)
                    })),
                    Qa = (0, U.A)((() => {
                        Ta && (Wa(Ta, Zt), xa(void 0))
                    })),
                    {
                        shouldSuggestCompression: Za,
                        shouldForceCompression: Xa,
                        shouldForceAsFile: eo,
                        handleAppendFiles: to,
                        handleFileSelect: no,
                        onCaptionUpdate: ao,
                        handleClearAttachments: oo,
                        handleSetAttachments: io
                    } = function(e) {
                        let {
                            attachments: t,
                            fileSizeLimit: n,
                            setHtml: i,
                            setAttachments: r,
                            chatId: s,
                            canSendAudios: c,
                            canSendVideos: d,
                            canSendPhotos: m,
                            canSendDocuments: u,
                            insertNextText: A,
                            editedMessage: h
                        } = e;
                        const p = (0, K.A)(),
                            {
                                openLimitReachedModal: g,
                                showAllowedMessageTypesNotification: f,
                                showNotification: v
                            } = (0, o.ko)(),
                            [E, C] = (0, a.J0)(!1),
                            [b, w] = (0, a.J0)(!1),
                            [S, N] = (0, a.J0)(void 0),
                            M = (0, U.A)((() => {
                                r(y.p), A()
                            })),
                            k = (0, U.A)((e => {
                                const a = "function" == typeof e ? e(t) : e;
                                if (a.length)
                                    if (a.some((e => {
                                            const t = (0, l.ES)(e);
                                            return "audio" === t && !c && !u || "video" === t && !d && !u || "photo" === t && !m && !u || "file" === t && !u
                                        }))) f({
                                        chatId: s
                                    });
                                    else if (a.some((e => {
                                        let {
                                            size: t
                                        } = e;
                                        return t > n
                                    }))) g({
                                    limit: "uploadMaxFileparts"
                                });
                                else {
                                    r(a);
                                    const e = a.some((e => {
                                        const t = (0, l.ES)(e);
                                        return "audio" === t && !c || "video" === t && !d || "photo" === t && !m
                                    }));
                                    C(Boolean(e && u)), w(!u)
                                } else M()
                            }));
                        return {
                            shouldSuggestCompression: S,
                            handleAppendFiles: (0, U.A)((async (e, n) => {
                                if (h) {
                                    const t = await (0, I.A)(e[0].name, e[0]),
                                        n = h && (0, l.eh)(h, t);
                                    h?.groupedId ? n ? k([t]) : v({
                                        message: p("lng_edit_media_album_error")
                                    }) : k([t])
                                } else {
                                    const a = await Promise.all(e.map((e => (0, I.A)(e.name, e, {
                                        shouldSendAsSpoiler: n || void 0
                                    }))));
                                    k([...t, ...a])
                                }
                            })),
                            handleFileSelect: (0, U.A)((async (e, t) => {
                                if (h) {
                                    const t = await (0, I.A)(e[0].name, e[0]),
                                        n = h && (0, l.eh)(h, t);
                                    h?.groupedId ? n ? k([t]) : v({
                                        message: p("lng_edit_media_album_error")
                                    }) : k([t])
                                } else {
                                    const t = await Promise.all(e.map((e => (0, I.A)(e.name, e))));
                                    k(t)
                                }
                                N(t)
                            })),
                            onCaptionUpdate: i,
                            handleClearAttachments: M,
                            handleSetAttachments: k,
                            shouldForceCompression: b,
                            shouldForceAsFile: E
                        }
                    }({
                        attachments: Ma,
                        setHtml: Yn,
                        setAttachments: ka,
                        fileSizeLimit: Ue,
                        chatId: ne,
                        canSendAudios: Ka,
                        canSendVideos: ja,
                        canSendPhotos: $a,
                        canSendDocuments: za,
                        insertNextText: Qa,
                        editedMessage: te
                    }),
                    [ro, so, lo] = (0, F.A)(),
                    [co, mo, uo] = (0, F.A)(),
                    [Ao, ho, po] = (0, F.A)(),
                    [go, yo, fo] = (0, F.A)(),
                    [vo, Eo, Co] = (0, F.A)(),
                    {
                        startRecordingVoice: bo,
                        stopRecordingVoice: wo,
                        pauseRecordingVoice: So,
                        activeVoiceRecording: Io,
                        currentRecordTime: No,
                        recordButtonRef: Mo,
                        startRecordTimeRef: ko,
                        isViewOnceEnabled: Po,
                        setIsViewOnceEnabled: To,
                        toogleViewOnceEnabled: xo
                    } = (() => {
                        const e = (0, a.li)(null),
                            [t, n] = (0, a.J0)(),
                            o = (0, a.li)(),
                            [i, r] = (0, a.J0)(),
                            [l, c] = (0, a.J0)(!1);
                        (0, a.vJ)((() => {
                            C.Yw && C.pW && Oe()
                        }), []);
                        const d = (0, U.A)((async () => {
                                try {
                                    const {
                                        stop: t,
                                        pause: a
                                    } = await Fe((t => {
                                        e.current && (o.current && Date.now() % 4 == 0 && (0, s.RK)((() => {
                                            e.current && (e.current.style.boxShadow = `0 0 0 ${50*(t||0)}px rgba(0,0,0,.15)`)
                                        })), r(Date.now()))
                                    }));
                                    o.current = Date.now(), r(Date.now()), n({
                                        stop: t,
                                        pause: a
                                    })
                                } catch (e) {
                                    console.error(e)
                                }
                            })),
                            m = (0, U.A)((() => {
                                if (t) {
                                    (0, s.RK)((() => {
                                        e.current && (e.current.style.boxShadow = "none")
                                    }));
                                    try {
                                        return t.pause()
                                    } catch (e) {
                                        return void console.error(e)
                                    }
                                }
                            })),
                            u = (0, U.A)((() => {
                                if (t) {
                                    n(void 0), o.current = void 0, r(void 0), (0, s.RK)((() => {
                                        e.current && (e.current.style.boxShadow = "none")
                                    }));
                                    try {
                                        return t.stop()
                                    } catch (e) {
                                        return void console.error(e)
                                    }
                                }
                            }));
                        (0, a.vJ)((() => t ? (0, Pe.A)(u) : void 0), [t, u]);
                        const A = (0, U.A)((() => {
                            c(!l)
                        }));
                        return {
                            startRecordingVoice: d,
                            pauseRecordingVoice: m,
                            stopRecordingVoice: u,
                            activeVoiceRecording: t,
                            currentRecordTime: i,
                            recordButtonRef: e,
                            startRecordTimeRef: o,
                            isViewOnceEnabled: l,
                            setIsViewOnceEnabled: c,
                            toogleViewOnceEnabled: A
                        }
                    })(),
                    Ro = Te && !oa;
                (0, x.A)((() => {
                    da({
                        type: "recordAudio"
                    })
                }), Ro ? Io && r.cqp : void 0), (0, a.vJ)((() => {
                    Te && !oa && (Io || da({
                        type: "cancel"
                    }))
                }), [Io, Te, oa, da]);
                const Lo = (0, J.i)(Boolean(te));
                (0, a.vJ)((() => {
                    Te && !oa && Wn() && !Lo.current && da({
                        type: "typing"
                    })
                }), [Wn, Lo, Te, oa, da]);
                const Bo = le && (0, l.SJ)(le),
                    {
                        isEmojiTooltipOpen: Oo,
                        closeEmojiTooltip: Fo,
                        filteredEmojis: Do,
                        filteredCustomEmojis: Uo,
                        insertEmoji: Ko
                    } = (0, fe.A)(Boolean(Y && n && (oa || Te) && Tt && !Pa), Wn, Yn, void 0, Bt, Rt, Lt),
                    {
                        isCustomEmojiTooltipOpen: jo,
                        closeCustomEmojiTooltip: $o,
                        insertCustomEmoji: zo
                    } = (0, me.A)(Boolean(Y && n && (oa || Te) && xt && !Pa), Wn, Yn, Xn, qn, ot),
                    {
                        isStickerTooltipOpen: _o,
                        closeStickerTooltip: Jo
                    } = function(e, t, n) {
                        const {
                            loadStickersForEmoji: i,
                            clearStickersForEmoji: s
                        } = (0, o.ko)(), [l, c, d] = (0, F.A)(!1), m = (0, G.A)((() => {
                            const n = t();
                            if (!e || !n || C.TL && n.length > 8) return;
                            if (!n.match(C.TL ? Ne.A : r.bpX)) return;
                            const a = (0, V.S)(n);
                            return a && (C.TL && 1 === (0, Me.A)(a) || !C.TL && Boolean(n.match(ke))) ? C.TL ? a : a.match(/alt="(.+)"/)?.[1] : void 0
                        }), [t, e]), u = (0, B.A)((() => Boolean(m())), [m]), A = Boolean(n?.length);
                        return (0, a.vJ)((() => {
                            if (!e || !u) return;
                            const t = m();
                            t ? A || i({
                                emoji: t
                            }) : s()
                        }), [e, u, m, A, i, s]), (0, a.vJ)(d, [d, t]), {
                            isStickerTooltipOpen: Boolean(u && A && !l),
                            closeStickerTooltip: c
                        }
                    }(Boolean(Y && n && (oa || Te) && Tt && Ra && !Pa), Wn, at),
                    {
                        isMentionTooltipOpen: Ho,
                        closeMentionTooltip: Vo,
                        insertMention: qo,
                        mentionFilteredUsers: Go
                    } = (0, Ie.A)(Boolean(aa && Y && Te && !Pa), Wn, Yn, Xn, qn, va, it, rt),
                    {
                        isOpen: Wo,
                        botId: Yo,
                        isGallery: Qo,
                        switchPm: Zo,
                        switchWebview: Xo,
                        results: ei,
                        closeTooltip: ti,
                        help: ni,
                        loadMore: ai
                    } = function(e, t, n, i) {
                        const {
                            queryInlineBot: r,
                            resetInlineBot: s,
                            resetAllInlineBots: l
                        } = (0, o.ko)(), [c, d, m] = (0, F.A)(!1), u = (0, q.gs)((() => {
                            const t = n();
                            return e && t.startsWith("@") ? function(e) {
                                if (!e.startsWith("@")) return be;
                                const t = function(e) {
                                        return we.innerHTML = e.replace(/<br>/g, "\n"), we.querySelectorAll("[alt]").forEach((e => {
                                            e.innerText || (e.innerText = e.getAttribute("alt"))
                                        })), we.innerText
                                    }(e),
                                    n = t.match(Ee);
                                return n ? Se(n[1], n[2], "" === n[2] && !t.match(Ce)) : be
                            }(t) : be
                        }), [n, e], 300), {
                            username: A,
                            query: h,
                            canShowHelp: p,
                            usernameLowered: g
                        } = (0, B.A)(u, [u, n], !0);
                        (0, H.A)((e => {
                            let [t] = e;
                            t && s({
                                username: t
                            })
                        }), [A, s]), (0, a.vJ)((() => {
                            g && r({
                                chatId: t,
                                username: g,
                                query: h
                            })
                        }), [t, h, r, g]), (0, a.vJ)(m, [m, n]);
                        const {
                            id: y,
                            switchPm: f,
                            switchWebview: v,
                            offset: E,
                            results: C,
                            isGallery: b,
                            help: w
                        } = g && i?.[g] || {}, S = Boolean((C?.length || f) && !c);
                        (0, a.vJ)((() => {
                            S || A || l()
                        }), [S, l, A]);
                        const I = (0, U.A)((() => {
                            g && r({
                                chatId: t,
                                username: g,
                                query: h,
                                offset: E
                            })
                        }));
                        return {
                            isOpen: S,
                            botId: y,
                            isGallery: b,
                            switchPm: f,
                            switchWebview: v,
                            results: C,
                            closeTooltip: d,
                            help: p && w ? `@${A} ${w}` : void 0,
                            loadMore: I
                        }
                    }(Boolean(aa && Y && Te && !Pa), ne, Wn, Ot),
                    oi = Boolean(mn && Object.keys(mn).length),
                    {
                        isOpen: ii,
                        close: ri,
                        filteredBotCommands: si,
                        filteredQuickReplies: li
                    } = function(e, t, n, o, i) {
                        const [r, s] = (0, a.J0)(), [l, c] = (0, a.J0)(), [d, m, u] = (0, F.A)(!1), A = (0, q.gs)((() => {
                            const n = t();
                            return e && n.startsWith("/") ? (0, V.S)(n).match(W)?.[0].trim() : void 0
                        }), [t, e], 300), h = (0, G.A)(A, [A, t], !0);
                        return (0, a.vJ)((() => {
                            const e = h(),
                                t = n || o;
                            if (!e || !t && !i) return s(void 0), void c(void 0);
                            const a = e.substring(1),
                                r = t?.filter((e => !a || e.command.startsWith(a)));
                            s(r?.length ? r : void 0);
                            const l = Object.values(i || {}).filter((e => !a || e.shortcut.startsWith(a)));
                            c(l?.length ? l : void 0)
                        }), [h, n, o, i]), (0, a.vJ)(u, [u, t]), {
                            isOpen: Boolean((r?.length || l?.length) && !d),
                            close: m,
                            filteredBotCommands: r,
                            filteredQuickReplies: l
                        }
                    }(Boolean(aa && Y && Te && (Dt && Dt?.length || Ea?.length || oi && un)), Wn, Dt, Ea, un ? mn : void 0);
                (e => {
                    let {
                        draft: t,
                        chatId: n,
                        threadId: l,
                        getHtml: c,
                        setHtml: d,
                        editedMessage: m,
                        isDisabled: u
                    } = e;
                    const {
                        saveDraft: A,
                        clearDraft: h,
                        loadCustomEmojis: p
                    } = (0, o.ko)(), g = (0, a.li)(!1);
                    (0, a.vJ)((() => {
                        const e = c(),
                            n = void 0 !== t?.isLocal;
                        (0, T.Q)(t?.text) !== e || n ? g.current = !0 : g.current = !1
                    }), [t, c]), (0, a.vJ)((() => {
                        g.current = !1
                    }), [n, l]);
                    const y = Boolean(m),
                        v = (0, U.A)((function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (u || y || !g.current) return;
                            const t = c();
                            t ? (0, s.YS)((() => {
                                A({
                                    chatId: e.chatId ?? n,
                                    threadId: e.threadId ?? l,
                                    text: (0, f.Ay)(t)
                                })
                            })) : h({
                                chatId: e.chatId ?? n,
                                threadId: e.threadId ?? l,
                                shouldKeepReply: !0
                            })
                        })),
                        E = (0, Ae.A)(r.mPG, !0, void 0, [n, l]);
                    (0, ue.A)((e => {
                        let [a, o, r] = e;
                        if (u) return;
                        const s = g.current;
                        if (n === a && l === o) {
                            if (s && !t) return;
                            if (!t && r && d(""), s) return
                        }
                        if (m || !t) return;
                        d((0, T.Q)(t.text));
                        const c = t.text?.entities?.map((e => e.type === i.C7.CustomEmoji && e.documentId)).filter(Boolean) || [];
                        c.length && p({
                            ids: c
                        })
                    }), [n, l, t, c, d, m, u]), (0, a.Nf)((() => {
                        if (!u) return () => {
                            y || v({
                                chatId: n,
                                threadId: l
                            }), ge = !0, (0, s.YS)((() => {
                                ge = !1
                            }))
                        }
                    }), [n, l, y, v, u]);
                    const C = (0, J.i)(n),
                        b = (0, J.i)(l);
                    (0, a.vJ)((() => {
                        if (u || ge) return;
                        if (!c()) return void v();
                        const e = C.current,
                            t = b.current;
                        E((() => {
                            C.current === e && b.current === t && v()
                        }))
                    }), [C, c, u, E, b, v]), (0, he.A)(v), (0, pe.A)(v)
                })({
                    draft: se,
                    chatId: ne,
                    threadId: ae,
                    getHtml: Wn,
                    setHtml: Yn,
                    editedMessage: te,
                    isDisabled: oa || Boolean(zt)
                });
                const ci = (0, U.A)((function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || Yn(""), ka(y.p), xa(void 0), Fo(), $o(), Jo(), Vo(), Q ? setTimeout((() => po()), 350) : po()
                    })),
                    [di, mi, ui] = ((e, t, n, i, c, d, m, u, A) => {
                        const {
                            editMessage: h,
                            setEditingDraft: p,
                            toggleMessageWebPage: y,
                            openDeleteMessageModal: v
                        } = (0, o.ko)(), [E, C] = (0, a.J0)(!1), b = u?.replyInfo?.replyToMsgId;
                        (0, O.A)((e => {
                            let [a, o] = e;
                            if (!n) return;
                            if (b && o !== b) return t(""), void C(!1);
                            if (a?.id === n.id && b === o) return;
                            const i = !a && A?.text.length ? A : n.content.text,
                                l = (0, T.Q)(i);
                            t(l), C(!0), (0, s.Uz)((() => {
                                const e = document.querySelector(r.m$5);
                                e && (0, g.A)(e, !0)
                            }))
                        }), [n, b, A, t]), (0, a.vJ)((() => {
                            if (!n) return;
                            const e = !("webPage" in n.content) && n.content.text?.entities?.some((e => ye.has(e.type)));
                            y({
                                chatId: c,
                                threadId: d,
                                noWebPage: e
                            })
                        }), [c, d, n]), (0, a.vJ)((() => {
                            if (n) return () => {
                                const t = (0, f.Ay)(e()),
                                    n = t.text.length ? t : void 0;
                                p({
                                    chatId: c,
                                    threadId: d,
                                    type: m,
                                    text: n
                                })
                            }
                        }), [c, n, e, p, d, m]);
                        const w = (0, q.tF)((() => {
                                if (!n) return !1;
                                const t = (0, f.Ay)(e());
                                return !("webPage" in n.content) && n.content.text?.entities?.some((e => ye.has(e.type))) && !t.entities?.some((e => ye.has(e.type)))
                            }), [n, e], 300, !0),
                            S = (0, G.A)(w, [w, e], !0);
                        (0, O.A)((e => {
                            let [t] = e;
                            n && t?.id === n.id && S() && y({
                                chatId: c,
                                threadId: d,
                                noWebPage: !1
                            })
                        }), [n, c, e, d, S]);
                        const I = (0, U.A)((() => {
                                u && (0, s.YS)((() => {
                                    t((0, T.Q)(u.text)), (0, s.Uz)((() => {
                                        const e = document.querySelector(r.m$5);
                                        e && (0, g.A)(e, !0)
                                    }))
                                }))
                            })),
                            N = (0, U.A)((() => {
                                i(), I()
                            })),
                            M = (0, U.A)((() => {
                                const {
                                    text: t,
                                    entities: a
                                } = (0, f.Ay)(e());
                                n && (t || (0, l.mR)(n) ? (h({
                                    messageList: {
                                        chatId: c,
                                        threadId: d,
                                        type: m
                                    },
                                    text: t,
                                    entities: a
                                }), i(), I()) : v({
                                    isSchedule: "scheduled" === m,
                                    message: n
                                }))
                            })),
                            k = (0, U.A)((() => {
                                if (!n) return;
                                const t = (0, f.Ay)(e()),
                                    a = t.text.length ? t : void 0;
                                p({
                                    chatId: c,
                                    threadId: d,
                                    type: m,
                                    text: a
                                })
                            }));
                        return (0, he.A)(k), (0, pe.A)(k), [M, N, E]
                    })(Wn, Yn, te, ci, ne, ae, re, se, $t),
                    Ai = (0, J.i)(ci),
                    hi = (0, J.i)(wo);
                (0, a.vJ)((() => () => {
                    hi.current(), Ai.current()
                }), [ne, ae, Ai, hi]);
                const pi = (0, U.A)((() => {
                        const e = wa.current;
                        Fn(e ? {
                            message: Vn("UnlockPremiumEmojiHint2"),
                            action: {
                                action: "openChat",
                                payload: {
                                    id: rt,
                                    shouldReplaceHistory: !0
                                }
                            },
                            actionText: Vn("Open")
                        } : {
                            message: Vn("UnlockPremiumEmojiHint"),
                            action: {
                                action: "openPremiumModal",
                                payload: {
                                    initialSection: "animated_emoji"
                                }
                            },
                            actionText: Vn("PremiumMore")
                        }), wa.current = Number(!e)
                    })),
                    gi = (0, B.A)((() => ma || !An || Wn() && !Pa ? te && ui ? kt.Edit : !C.pW || Io || _e || Wn() && !Pa ? d ? kt.Schedule : kt.Send : kt.Record : kt.Forward), [Io, te, Wn, Pa, _e, ma, An, ui, d]),
                    yi = !d,
                    {
                        isContextMenuOpen: fi,
                        handleContextMenu: vi,
                        handleContextMenuClose: Ei,
                        handleContextMenuHide: Ci
                    } = (0, L.A)(Mo, !(gi === kt.Send && yi)),
                    {
                        contextMenuPosition: bi,
                        handleContextMenu: wi,
                        handleBeforeContextMenu: Si,
                        handleContextMenuHide: Ii
                    } = (0, L.A)(Gn, !oa);
                (0, a.vJ)((() => {
                    ze || bi && (Un({
                        peerId: ne,
                        storyId: oe,
                        position: bi
                    }), Ii())
                }), [ne, Ii, ze, oe, bi]), de(Te || oa, Wa, io, xa, te, !xe && !Be, pi);
                const Ni = (0, U.A)((() => {
                        te && mi()
                    })),
                    Mi = (0, U.A)(((e, t) => {
                        const n = t ? Ct : 4096;
                        if (e?.length > n) {
                            const t = e.length - n;
                            return Sn({
                                data: {
                                    message: "MESSAGE_TOO_LONG_PLEASE_REMOVE_CHARACTERS",
                                    textParams: {
                                        "{EXTRA_CHARS_COUNT}": t.toString(),
                                        "{PLURAL_S}": t > 1 ? "s" : ""
                                    },
                                    hasErrorKey: !0
                                }
                            }), !1
                        }
                        return !0
                    })),
                    ki = (0, U.A)((() => {
                        if (Wt && !Bo) {
                            const e = document.querySelector(Qt),
                                t = (0, E.Fm)(),
                                n = ea.current && Math.floor(t - ea.current),
                                a = Wt.nextSendDate && Wt.nextSendDate > t;
                            if (n && n < Wt.seconds || a) {
                                const o = a ? Wt.nextSendDate - t : Wt.seconds - n;
                                return Sn({
                                    data: {
                                        message: Vn("SlowModeHint", (0, u.QO)(o)),
                                        isSlowMode: !0,
                                        hasErrorKey: !1
                                    }
                                }), e?.blur(), !1
                            }
                        }
                        return !0
                    })),
                    Pi = (0, U.A)((e => {
                        let {
                            attachments: t,
                            sendCompressed: n = qt.shouldCompress,
                            sendGrouped: a = qt.shouldSendGrouped,
                            isSilent: o,
                            scheduledAt: i,
                            isInvertedMedia: r
                        } = e;
                        if (!ie && !oe) return;
                        const {
                            text: l,
                            entities: c
                        } = (0, f.Ay)(Wn());
                        (l || t.length) && Mi(l, !0) && ki() && (r = l && n && a ? r : void 0, te ? $n({
                            messageList: ie,
                            text: l,
                            entities: c,
                            attachments: (0, I.L)(t, n)
                        }) : bn({
                            messageList: ie,
                            text: l,
                            entities: c,
                            scheduledAt: i,
                            isSilent: o,
                            shouldUpdateStickerSetOrder: Yt,
                            attachments: (0, I.L)(t, n),
                            shouldGroupMessages: a,
                            isInvertedMedia: r
                        }), ea.current = (0, E.Fm)(), wn({
                            chatId: ne,
                            isLocalOnly: !0
                        }), (0, s.YS)((() => {
                            ci()
                        })))
                    })),
                    Ti = (0, U.A)(((e, t, n) => {
                        Pi({
                            attachments: Ma,
                            sendCompressed: e,
                            sendGrouped: t,
                            isInvertedMedia: n
                        })
                    })),
                    xi = (0, U.A)(((e, t, n, a, o) => {
                        Pi({
                            attachments: Ma,
                            sendCompressed: e,
                            sendGrouped: t,
                            isSilent: n,
                            scheduledAt: a,
                            isInvertedMedia: o
                        })
                    })),
                    Ri = (0, U.A)((async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (!ie && !oe) return;
                        let n = Ma;
                        if (Io) {
                            const e = await wo(),
                                t = Po ? r.dxe : void 0;
                            if (e) {
                                const {
                                    blob: a,
                                    duration: o,
                                    waveform: i
                                } = e;
                                n = [await (0, I.A)("wonderful-voice-message.ogg", a, {
                                    voice: {
                                        duration: o,
                                        waveform: i
                                    },
                                    ttlSeconds: t
                                })]
                            }
                        }
                        const {
                            text: a,
                            entities: o
                        } = (0, f.Ay)(Wn());
                        if (n.length) return void Pi({
                            attachments: n,
                            scheduledAt: t,
                            isSilent: e
                        });
                        if (!a && !_e) return;
                        if (!Mi(a)) return;
                        const i = document.querySelector(Qt),
                            l = yn?.id;
                        if (a) {
                            if (!ki()) return;
                            const n = Ha ? qt.isInvertedMedia : void 0;
                            vn && _n({
                                chatId: ne,
                                threadId: ae,
                                effectId: void 0
                            }), bn({
                                messageList: ie,
                                text: a,
                                entities: o,
                                scheduledAt: t,
                                isSilent: e,
                                shouldUpdateStickerSetOrder: Yt,
                                isInvertedMedia: n,
                                effectId: l
                            })
                        }
                        _e && In({
                            scheduledAt: t,
                            isSilent: e
                        }), ea.current = (0, E.Fm)(), wn({
                            chatId: ne,
                            threadId: ae,
                            isLocalOnly: !0,
                            shouldKeepReply: _e
                        }), C.pz && i && i === document.activeElement && S(i), (0, s.YS)((() => {
                            ci()
                        }))
                    })),
                    Li = (0, U.A)((() => {
                        if ("webApp" !== Jt?.type) return;
                        const e = (0, h.v)(Jt.url);
                        "publicUsernameOrBotLink" === e?.type && e.appName ? (0, A.__)(Jt.url) : Bn({
                            chatId: ne,
                            url: Jt.url,
                            threadId: ae
                        })
                    })),
                    Bi = (0, U.A)((() => {
                        po(), mo()
                    })),
                    Oi = (0, U.A)(((e, t, n, a) => {
                        if (e && "queryId" in e) {
                            const {
                                id: a,
                                queryId: o,
                                isSilent: i
                            } = e;
                            return void xn({
                                id: a,
                                queryId: o,
                                scheduledAt: t,
                                isSilent: i,
                                messageList: n
                            })
                        }
                        const {
                            isSilent: o,
                            ...i
                        } = e || {};
                        if (e && 0 !== Object.keys(i).length)
                            if (void 0 !== e.sendCompressed || void 0 !== e.sendGrouped) {
                                const {
                                    sendCompressed: n = !1,
                                    sendGrouped: a = !1,
                                    isInvertedMedia: i
                                } = e;
                                xi(n, a, o, t, i)
                            } else bn({
                                ...e,
                                messageList: n,
                                scheduledAt: t,
                                effectId: a
                            });
                        else Ri(Boolean(o), t)
                    }));
                (0, O.A)((e => {
                    let [t] = e;
                    ie && Pt && Pt !== t && Sa((e => {
                        Oi(Pt, e, ie)
                    }))
                }), [Pt, ie, Oi, Sa]), (0, a.vJ)((() => {
                    zt && (Wa(zt), Ln(), (0, s.Uz)((() => {
                        const e = document.getElementById(Zt);
                        (0, g.A)(e, !0)
                    })))
                }), [Zt, zt, Ln, Yn]), (0, a.vJ)((() => {
                    _t?.length && (no(_t), Ln())
                }), [no, _t, Ln]);
                const Fi = (0, U.A)(((e, t) => {
                        const n = "id" in e.stickerSetInfo && e.stickerSetInfo.id;
                        e.isFree || xe || Be || n === Ca ? Ya(e, t) : pi()
                    })),
                    Di = (0, U.A)((e => {
                        Fi(e, r.e0F)
                    })),
                    Ui = (0, U.A)(((e, t, n) => {
                        (ie || oe) && (d || n ? (la(), Sa((n => {
                            ca(), Oi({
                                gif: e,
                                isSilent: t
                            }, n, ie), (0, s.YS)((() => {
                                ci(!0)
                            }))
                        }))) : (bn({
                            messageList: ie,
                            gif: e,
                            isSilent: t
                        }), (0, s.YS)((() => {
                            ci(!0)
                        }))))
                    })),
                    Ki = (0, U.A)((function(e, t, n) {
                        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        (ie || oe) && (e = {
                            ...e,
                            isPreloadedGlobally: !0
                        }, d || n ? (la(), Sa((n => {
                            ca(), Oi({
                                sticker: e,
                                isSilent: t
                            }, n, ie), (0, s.YS)((() => {
                                ci(a)
                            }))
                        }))) : (bn({
                            messageList: ie,
                            sticker: e,
                            isSilent: t,
                            shouldUpdateStickerSetOrder: Yt && o
                        }), wn({
                            chatId: ne,
                            threadId: ae,
                            isLocalOnly: !0
                        }), (0, s.YS)((() => {
                            ci(a)
                        }))))
                    })),
                    ji = (0, U.A)(((e, t, n) => {
                        if (!ie && !oe) return;
                        d || n ? Sa((n => {
                            Oi({
                                id: e.id,
                                queryId: e.queryId,
                                isSilent: t
                            }, n, ie)
                        })) : xn({
                            id: e.id,
                            queryId: e.queryId,
                            isSilent: t,
                            messageList: ie
                        });
                        const a = document.querySelector(Qt);
                        C.pz && a && a === document.activeElement && S(a), wn({
                            chatId: ne,
                            isLocalOnly: !0
                        }), (0, s.YS)((() => {
                            ci()
                        }))
                    })),
                    $i = (0, U.A)((() => {
                        wn({
                            chatId: ne,
                            isLocalOnly: !0
                        }), (0, s.YS)((() => {
                            ci()
                        }))
                    })),
                    zi = (0, U.A)((e => {
                        ie && (d ? (Sa((t => {
                            Oi({
                                poll: e
                            }, t, ie)
                        })), Mn()) : (bn({
                            messageList: ie,
                            poll: e
                        }), Mn()))
                    })),
                    _i = (0, U.A)((e => {
                        if (d) Sa((t => {
                            Oi({
                                ...e,
                                isSilent: !0
                            }, t, ie)
                        }));
                        else if (e && ("sendCompressed" in e || "sendGrouped" in e)) {
                            const {
                                sendCompressed: t = !1,
                                sendGrouped: n = !1,
                                isInvertedMedia: a
                            } = e;
                            xi(t, n, !0, void 0, a)
                        } else Ri(!0)
                    })),
                    Ji = (0, U.A)((() => {
                        const e = document.querySelector(Qt);
                        if (!Q || e !== document.activeElement) return uo(), po(), void yo();
                        e?.blur(), setTimeout((() => {
                            uo(), po(), yo()
                        }), 100)
                    }));
                (0, a.vJ)((() => {
                    Va && Yn("")
                }), [Va, Yn, Ma]);
                const Hi = (0, U.A)((e => {
                        Ga(e, r.e0F)
                    })),
                    Vi = (0, U.A)((function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt;
                        const t = window.getSelection();
                        if (t.rangeCount) {
                            const n = t.getRangeAt(0);
                            if ((0, M.L)(n, e)) return void document.execCommand("delete", !1)
                        }
                        Yn(function(e) {
                            const t = document.createElement("div");
                            t.contentEditable = "true", t.style.position = "absolute", t.style.left = "-10000px", t.style.top = "-10000px", t.innerHTML = e, t.className = "allow-selection", document.body.appendChild(t);
                            let n = t.lastChild;
                            if (n.lastChild)
                                for (; n.lastChild;) n = n.lastChild;
                            const a = n.textContent.length,
                                o = document.createRange(),
                                i = window.getSelection();
                            o.setStart(n, a), o.setEnd(n, a), i.removeAllRanges(), i.addRange(o), document.execCommand("delete", !1);
                            const r = t.innerHTML;
                            return document.body.removeChild(t), r
                        }(Wn()))
                    })),
                    qi = (0, U.A)((() => {
                        Vi(r.e0F)
                    })),
                    Gi = (0, U.A)((() => {
                        Pn({
                            chatId: ne,
                            threadId: ae,
                            type: "scheduled",
                            noForumTopicPanel: !0
                        })
                    }));
                (0, a.vJ)((() => {
                    je && Q && po()
                }), [je, po, Q]), (0, a.vJ)((() => {
                    Y && ($e ? Eo() : setTimeout((() => {
                        Co()
                    }), 200))
                }), [$e, Co, Eo, Y]);
                const Wi = Le && "webApp" === Jt?.type && !te,
                    Yi = (0, B.A)((() => Wi && !Wn() && !Io), [Wi, Wn, Io]),
                    [Qi, Zi] = (0, a.Kr)((() => Wt?.nextSendDate ? ["SlowModeWait", Wt.nextSendDate] : ln?.activeUntil && oa ? ["StealthModeActiveHint", ln.activeUntil] : []), [oa, Wt?.nextSendDate, ln?.activeUntil]),
                    Xi = ro || Ao || Oo || go || Ho || Wo || co || ha || _o || ii || jo || Yi || fi || Boolean(Io) || Ma.length > 0 || ma,
                    er = Xi && !ze && oa && !ha && !Ao,
                    tr = le?.isForum && le?.isForumAsMessages && ae === i.l3 ? ve ? Vn("Chat.InputPlaceholderReplyInTopic", ve.title) : Vn("Message.Placeholder.MessageInGeneral") : void 0;
                (0, a.vJ)((() => {
                    Xi ? X?.() : ee?.()
                }), [Xi, ee, X]);
                const {
                    shouldRender: nr,
                    transitionClassNames: ar
                } = (0, _.A)(er), or = !(gi !== kt.Record || Ba && Re && Da), ir = (0, U.A)((() => {
                    switch (gi) {
                        case kt.Forward:
                            An?.();
                            break;
                        case kt.Send:
                            Ri();
                            break;
                        case kt.Record:
                            or ? Re ? Da || Dn({
                                chatId: ne
                            }) : Fn({
                                message: Vn("VoiceMessagesRestrictedByPrivacy", le?.title)
                            }) : (To(!1), bo());
                            break;
                        case kt.Edit:
                            di();
                            break;
                        case kt.Schedule:
                            if (Io && So(), !ie) return;
                            Sa((e => {
                                Oi({}, e, ie, yn?.id)
                            }))
                    }
                })), rr = new Date;
                rr.setSeconds(0), rr.setMilliseconds(0);
                const sr = new Date;
                sr.setFullYear(sr.getFullYear() + 1);
                let lr = "SendMessage";
                switch (gi) {
                    case kt.Forward:
                        lr = "Forward";
                        break;
                    case kt.Edit:
                        lr = "Save edited message";
                        break;
                    case kt.Record:
                        lr = Ba ? "AccDescrVoiceMessage" : "Conversation.DefaultRestrictedMedia"
                }
                const cr = (0, m.A)("Composer", !$e && "shown", vo && "hover-disabled", Qn && "mounted", en),
                    dr = (0, U.A)((e => {
                        let t, n;
                        if ("emoticon" in e) t = e.emoticon;
                        else {
                            const a = (0, o.mS)().customEmojis.byId[e.documentId];
                            if (!a) return;
                            if (!a.isFree && !xe && !Be) return void pi();
                            const i = (0, f.Ay)((0, N.hB)(a));
                            t = i.text, n = i.entities
                        }
                        bn({
                            text: t,
                            entities: n,
                            isReaction: !0
                        }), Kn()
                    })),
                    mr = (0, U.A)((e => {
                        Jn({
                            chatId: ne,
                            threadId: ae,
                            reaction: e
                        }), Kn()
                    })),
                    ur = (0, U.A)((e => {
                        Un({
                            peerId: ne,
                            storyId: oe,
                            position: e,
                            sendAsMessage: !0
                        })
                    })),
                    Ar = (0, U.A)((() => {
                        const e = sn ? void 0 : r.tNZ;
                        jn({
                            peerId: ne,
                            storyId: oe,
                            containerId: (0, l.$_)(ne, oe),
                            reaction: e
                        })
                    })),
                    hr = (0, U.A)((() => {
                        Sa((e => {
                            Oi({}, e, ie)
                        }))
                    })),
                    pr = (0, U.A)((() => {
                        _i()
                    })),
                    gr = (0, U.A)((() => {
                        Oi({}, r.NkL, ie, yn?.id)
                    })),
                    yr = (0, U.A)(((e, t, n) => {
                        Sa((a => {
                            Oi({
                                sendCompressed: e,
                                sendGrouped: t,
                                isInvertedMedia: n
                            }, a, ie)
                        }))
                    })),
                    fr = (0, U.A)(((e, t, n) => {
                        _i({
                            sendCompressed: e,
                            sendGrouped: t,
                            isInvertedMedia: n
                        })
                    })),
                    vr = (0, U.A)((() => {
                        _n({
                            chatId: ne,
                            threadId: ae,
                            effectId: void 0
                        })
                    })),
                    Er = (0, U.A)((() => {
                        Hn({})
                    })),
                    Cr = (0, a.Kr)((() => {
                        switch (gi) {
                            case kt.Edit:
                                return di;
                            case kt.Schedule:
                                return hr;
                            default:
                                return Ri
                        }
                    }), [gi, di]),
                    br = Le && "commands" === Jt?.type && !te && !1 !== Dt && !Io,
                    wr = vn && yn?.emoticon;
                return a.Ay.createElement("div", {
                    className: cr
                }, aa && Ba && Y && a.Ay.createElement(mt, {
                    isOpen: c !== dt.I.None,
                    withQuick: c === dt.I.QuickFile || ta === dt.I.QuickFile,
                    onHide: Z,
                    onFileSelect: no,
                    editingMessage: te
                }), nr && !_a && a.Ay.createElement(St.A, {
                    topReactions: nn,
                    allAvailableReactions: tn,
                    onToggleReaction: dr,
                    isPrivate: !0,
                    isReady: Y,
                    canBuyPremium: an,
                    isCurrentUserPremium: xe,
                    isInSavedMessages: Be,
                    isInStoryViewer: oa,
                    canPlayAnimatedEmojis: on,
                    onShowMore: ur,
                    className: ar
                }), a.Ay.createElement(Ke, {
                    chatId: ne,
                    threadId: ae,
                    canShowCustomSendMenu: yi,
                    attachments: Ma,
                    getHtml: Wn,
                    isReady: Y,
                    shouldSuggestCompression: Za,
                    shouldForceCompression: Xa,
                    shouldForceAsFile: eo,
                    isForCurrentMessageList: Te,
                    isForMessage: aa,
                    shouldSchedule: d,
                    forceDarkTheme: oa,
                    onCaptionUpdate: ao,
                    onSendSilent: fr,
                    onSend: Ti,
                    onSendScheduled: yr,
                    onFileAppend: to,
                    onClear: oo,
                    onAttachmentsUpdate: io,
                    onCustomEmojiSelect: Di,
                    onRemoveSymbol: qi,
                    onEmojiSelect: Hi,
                    editingMessage: te
                }), a.Ay.createElement(gt, {
                    isOpen: He.isOpen,
                    isQuiz: He.isQuiz,
                    shouldBeAnonymous: De,
                    onClear: Mn,
                    onSend: zi
                }), a.Ay.createElement(yt, {
                    isOpen: go,
                    onClose: fo,
                    chatId: ne,
                    selectedSendAsId: jt,
                    sendAsPeerIds: ia,
                    isCurrentUserPremium: xe
                }), a.Ay.createElement(ht, {
                    isOpen: Ho,
                    filteredUsers: Go,
                    onInsertUserName: qo,
                    onClose: Vo
                }), a.Ay.createElement(tt, {
                    isOpen: ii,
                    chatId: ne,
                    withUsername: Boolean(Ea),
                    botCommands: si,
                    quickReplies: li,
                    getHtml: Wn,
                    self: Et,
                    quickReplyMessages: dn,
                    onClick: $i,
                    onClose: ri
                }), a.Ay.createElement("div", {
                    className: (0, m.A)("composer-wrapper", oa && "with-story-tweaks", _a && "is-need-premium")
                }, !_a && a.Ay.createElement("svg", {
                    className: "svg-appendix",
                    width: "9",
                    height: "20"
                }, a.Ay.createElement("defs", null, a.Ay.createElement("filter", {
                    x: "-50%",
                    y: "-14.7%",
                    width: "200%",
                    height: "141.2%",
                    filterUnits: "objectBoundingBox",
                    id: "composerAppendix"
                }, a.Ay.createElement("feOffset", {
                    dy: "1",
                    in: "SourceAlpha",
                    result: "shadowOffsetOuter1"
                }), a.Ay.createElement("feGaussianBlur", {
                    stdDeviation: "1",
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1"
                }), a.Ay.createElement("feColorMatrix", {
                    values: "0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0",
                    in: "shadowBlurOuter1"
                }))), a.Ay.createElement("g", {
                    fill: "none",
                    "fill-rule": "evenodd"
                }, a.Ay.createElement("path", {
                    d: "M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z",
                    fill: "#000",
                    filter: "url(#composerAppendix)"
                }), a.Ay.createElement("path", {
                    d: "M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z",
                    fill: "#FFF",
                    className: "corner"
                }))), aa && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(At, {
                    isOpen: Wo,
                    botId: Yo,
                    isGallery: Qo,
                    inlineBotResults: ei,
                    switchPm: Zo,
                    switchWebview: Xo,
                    loadMore: ai,
                    isSavedMessages: Be,
                    canSendGifs: La,
                    isCurrentUserPremium: xe,
                    onSelectResult: ji,
                    onClose: ti
                }), a.Ay.createElement(st, {
                    onClear: Ni,
                    shouldForceShowEditing: Boolean(ui && te),
                    chatId: ne,
                    threadId: ae,
                    messageListType: re
                }), a.Ay.createElement(bt, {
                    chatId: ne,
                    threadId: ae,
                    getHtml: Wn,
                    isDisabled: !Fa || Pa,
                    isEditing: Boolean(te)
                })), a.Ay.createElement("div", {
                    className: (0, m.A)("message-input-wrapper", (0, k.y)(Et))
                }, aa && a.Ay.createElement(a.Ay.Fragment, null, Wi && a.Ay.createElement(et, {
                    isOpen: Yi,
                    text: Jt.text,
                    isDisabled: Boolean(Io),
                    onClick: Li
                }), br && a.Ay.createElement(qe.A, {
                    className: (0, m.A)("bot-commands", co && "activated"),
                    round: !0,
                    disabled: void 0 === Dt,
                    color: "translucent",
                    onActivate: Bi,
                    ariaLabel: "Open bot command keyboard"
                }, a.Ay.createElement("i", {
                    className: "icon icon-bot-commands-filled"
                })), ra && (Ut || Kt) && a.Ay.createElement(Ze.A, {
                    round: !0,
                    color: "translucent",
                    onClick: go ? fo : Ji,
                    ariaLabel: Vn("SendMessageAsTitle"),
                    className: (0, m.A)("send-as-button", Na.current && "appear-animation")
                }, a.Ay.createElement(Nt.A, {
                    peer: Ut || Kt,
                    size: "tiny"
                }))), (!Va || La || Ra) && !_a && a.Ay.createElement(vt.A, {
                    chatId: ne,
                    threadId: ae,
                    isMobile: Q,
                    isReady: Y,
                    isSymbolMenuOpen: Ao,
                    openSymbolMenu: ho,
                    closeSymbolMenu: po,
                    canSendStickers: Ra,
                    canSendGifs: La,
                    isMessageComposer: aa,
                    onGifSelect: Ui,
                    onStickerSelect: Ki,
                    onCustomEmojiSelect: Fi,
                    onRemoveSymbol: Vi,
                    onEmojiSelect: Ga,
                    closeBotCommandMenu: uo,
                    closeSendAsMenu: fo,
                    isSymbolMenuForced: sa,
                    canSendPlainText: !Va,
                    inputCssSelector: Qt,
                    idPrefix: t,
                    forceDarkTheme: oa
                }), a.Ay.createElement(pt.A, {
                    ref: qn,
                    id: Xt,
                    editableInputId: Zt,
                    customEmojiPrefix: t,
                    isStoryInput: oa,
                    chatId: ne,
                    canSendPlainText: !Va,
                    threadId: ae,
                    isReady: Y,
                    isActive: !Pa,
                    getHtml: Wn,
                    placeholder: Io && na <= 600 ? "" : Va ? Vn(oa ? "StoryRepliesLocked" : "Chat.PlaceholderTextNotAllowed") : Ge || Qe || Vn(tr || "Message"),
                    timedPlaceholderDate: Zi,
                    timedPlaceholderLangKey: Qi,
                    forcedPlaceholder: ni,
                    canAutoFocus: Y && Te && !Pa && aa,
                    noFocusInterception: Pa,
                    shouldSuppressFocus: Q && Ao,
                    shouldSuppressTextFormatter: Oo || Ho || Wo,
                    onUpdate: Yn,
                    onSend: Cr,
                    onSuppressedFocus: po,
                    onFocus: ua,
                    onBlur: Aa,
                    isNeedPremium: _a
                }), aa && a.Ay.createElement(a.Ay.Fragment, null, Ft && Boolean(Yo) && a.Ay.createElement(It.A, {
                    color: "gray"
                }), nt && a.Ay.createElement(Ze.A, {
                    round: !0,
                    faded: !0,
                    className: "scheduled-button",
                    color: "translucent",
                    onClick: Gi,
                    ariaLabel: "Open scheduled messages"
                }, a.Ay.createElement("i", {
                    className: "icon icon-schedule"
                })), Boolean(Ve) && !Io && !te && a.Ay.createElement(qe.A, {
                    className: ro ? "activated" : "",
                    round: !0,
                    color: "translucent",
                    onActivate: so,
                    ariaLabel: "Open bot command keyboard"
                }, a.Ay.createElement("i", {
                    className: "icon icon-bot-command"
                }))), Io && Boolean(No) && a.Ay.createElement("span", {
                    className: "recording-state"
                }, (0, u.JW)(No - ko.current)), !_a && a.Ay.createElement(We, {
                    chatId: ne,
                    threadId: ae,
                    editingMessage: te,
                    hasReplaceableMedia: ya,
                    isButtonVisible: !Io,
                    canAttachMedia: Ba,
                    canAttachPolls: Oa,
                    canSendPhotos: $a,
                    canSendVideos: ja,
                    canSendDocuments: za,
                    canSendAudios: Ka,
                    onFileSelect: no,
                    onPollCreate: Nn,
                    isScheduled: d,
                    attachBots: aa ? Ht : void 0,
                    peerType: Vt,
                    shouldCollectDebugLogs: rn,
                    theme: Gt,
                    onMenuOpen: pa,
                    onMenuClose: ga
                }), aa && Boolean(Ve) && a.Ay.createElement(Xe, {
                    messageId: Ve,
                    isOpen: ro,
                    onClose: lo
                }), aa && Dt && a.Ay.createElement(Ye, {
                    isOpen: co,
                    botCommands: Dt,
                    onClose: uo
                }), a.Ay.createElement(lt.A, {
                    key: `custom-emoji-tooltip-${Zt}`,
                    chatId: ne,
                    isOpen: jo,
                    onCustomEmojiSelect: zo,
                    addRecentCustomEmoji: On,
                    onClose: $o
                }), a.Ay.createElement(ft, {
                    key: `sticker-tooltip-${Zt}`,
                    chatId: ne,
                    threadId: ae,
                    isOpen: _o,
                    onStickerSelect: Ki,
                    onClose: Jo
                }), a.Ay.createElement(ut.A, {
                    key: `emoji-tooltip-${Zt}`,
                    isOpen: Oo,
                    emojis: Do,
                    customEmojis: Uo,
                    addRecentEmoji: Tn,
                    addRecentCustomEmoji: On,
                    onEmojiSelect: Ko,
                    onCustomEmojiSelect: Ko,
                    onClose: Fo
                }))), cn && Io && a.Ay.createElement(Ze.A, {
                    className: (0, m.A)("view-once", Po && "active"),
                    round: !0,
                    color: "secondary",
                    ariaLabel: Vn("Chat.PlayOnceVoiceMessageTooltip"),
                    onClick: xo
                }, a.Ay.createElement(Je.A, {
                    name: "view-once"
                }), a.Ay.createElement(Je.A, {
                    name: "one-filled"
                })), Io && a.Ay.createElement(Ze.A, {
                    round: !0,
                    color: "danger",
                    className: "cancel",
                    onClick: wo,
                    ariaLabel: "Cancel voice recording"
                }, a.Ay.createElement("i", {
                    className: "icon icon-delete"
                })), oa && !Io && a.Ay.createElement(Ze.A, {
                    round: !0,
                    className: "story-reaction-button",
                    color: "secondary",
                    onClick: Ar,
                    onContextMenu: wi,
                    onMouseDown: Si,
                    ariaLabel: Vn("AccDescrLike"),
                    ref: Gn
                }, sn && a.Ay.createElement(Mt.A, {
                    key: "documentId" in sn ? sn.documentId : sn.emoticon,
                    containerId: (0, l.$_)(ne, oe),
                    reaction: sn,
                    withEffectOnly: ba
                }), (!sn || ba) && a.Ay.createElement("i", {
                    className: (0, m.A)("icon", "icon-heart", ba && "story-reaction-heart"),
                    "aria-hidden": !0
                })), a.Ay.createElement(Ze.A, {
                    ref: Mo,
                    round: !0,
                    color: "secondary",
                    className: (0, m.A)(gi, "main-button", !Y && "not-ready", Io && "recording"),
                    disabled: or,
                    allowDisabledClick: !0,
                    noFastClick: !0,
                    ariaLabel: Vn(lr),
                    onClick: ir,
                    onContextMenu: gi === kt.Send && yi ? vi : void 0
                }, a.Ay.createElement("i", {
                    className: "icon icon-send"
                }), a.Ay.createElement("i", {
                    className: "icon icon-microphone-alt"
                }), An && a.Ay.createElement("i", {
                    className: "icon icon-forward"
                }), aa && a.Ay.createElement("i", {
                    className: "icon icon-schedule"
                }), aa && a.Ay.createElement("i", {
                    className: "icon icon-check"
                })), wr && a.Ay.createElement("span", {
                    className: "effect-icon",
                    onClick: vr
                }, (0, P.A)(wr)), yn && En && a.Ay.createElement(wt.A, {
                    shouldPlay: Cn,
                    effect: yn,
                    onStop: Er
                }), yi && a.Ay.createElement(ct.A, {
                    isOpen: fi,
                    canSchedule: aa && !Po,
                    canScheduleUntilOnline: w && !Po,
                    onSendSilent: Be ? void 0 : pr,
                    onSendSchedule: d ? void 0 : hr,
                    onSendWhenOnline: gr,
                    onRemoveEffect: vr,
                    onClose: Ei,
                    onCloseAnimationEnd: Ci,
                    isSavedMessages: Be,
                    chatId: ne,
                    withEffects: vn,
                    hasCurrentEffect: Boolean(yn),
                    effectReactions: fn,
                    allAvailableReactions: tn,
                    onToggleReaction: mr,
                    isCurrentUserPremium: xe,
                    isInSavedMessages: Be,
                    isInStoryViewer: oa,
                    canPlayAnimatedEmojis: on
                }), Ia)
            })))
        },
        54314: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(29807),
                s = n(4961),
                l = n(59030),
                c = n(64493),
                d = n(8410),
                m = n(21849);
            const u = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    chat: n,
                    isSavedDialog: a
                } = t;
                const o = (0, i.L8)(n.id),
                    s = (0, r.nZ4)(e, n.id),
                    l = o && (0, r.mBe)(e, (0, i.e7)(n)),
                    c = l && (0, i.tv)(l) && !n.isSupport,
                    d = o && !s && !c && !a,
                    m = o ? (0, i.u0)((0, r.mBe)(e, (0, i.e7)(n))) : void 0;
                return {
                    isPrivateChat: o,
                    isChatWithSelf: s,
                    isBot: c,
                    isChannel: (0, i.WX)(n),
                    isBasicGroup: (0, i.yn)(n),
                    isSuperGroup: (0, i.Vs)(n),
                    currentUserId: e.currentUserId,
                    canDeleteForAll: d,
                    contactName: m
                }
            }))((e => {
                let {
                    isOpen: t,
                    chat: n,
                    isSavedDialog: r,
                    isChannel: u,
                    isPrivateChat: A,
                    isChatWithSelf: h,
                    isBot: p,
                    isBasicGroup: g,
                    isSuperGroup: y,
                    currentUserId: f,
                    canDeleteForAll: v,
                    contactName: E,
                    onClose: C,
                    onCloseAnimationEnd: b
                } = e;
                const {
                    leaveChannel: w,
                    deleteHistory: S,
                    deleteSavedHistory: I,
                    deleteChannel: N,
                    deleteChatUser: M,
                    blockUser: k
                } = (0, o.ko)(), P = (0, l.A)(), T = (0, i.Js)(P, n), x = (0, a.hb)((() => {
                    S({
                        chatId: n.id,
                        shouldDeleteForAll: !0
                    }), C()
                }), [n.id, C]), R = (0, a.hb)((() => {
                    S({
                        chatId: n.id,
                        shouldDeleteForAll: !0
                    }), k({
                        userId: n.id
                    }), C()
                }), [n.id, C]), L = (0, a.hb)((() => {
                    r ? I({
                        chatId: n.id
                    }) : A ? S({
                        chatId: n.id,
                        shouldDeleteForAll: !1
                    }) : g ? (M({
                        chatId: n.id,
                        userId: f
                    }), S({
                        chatId: n.id,
                        shouldDeleteForAll: !1
                    })) : !u && !y || n.isCreator ? (u || y) && n.isCreator && N({
                        chatId: n.id
                    }) : w({
                        chatId: n.id
                    }), C()
                }), [A, g, u, y, f, n.isCreator, n.id, r, C]), B = (0, a.hb)((() => {
                    u || y ? (w({
                        chatId: n.id
                    }), C()) : L()
                }), [n.id, L, u, y, w, C]);
                return a.Ay.createElement(d.A, {
                    isOpen: t,
                    className: "DeleteChatModal",
                    header: a.Ay.createElement("div", {
                        className: "modal-header",
                        dir: P.isRtl ? "rtl" : void 0
                    }, a.Ay.createElement(m.A, {
                        size: "tiny",
                        peer: n,
                        isSavedMessages: h
                    }), a.Ay.createElement("h3", {
                        className: "modal-title"
                    }, P(r ? h ? "ClearHistoryMyNotesTitle" : "ClearHistoryTitleSingle2" : u && !n.isCreator ? "LeaveChannel" : u && n.isCreator ? "ChannelDelete" : g || y ? "Group.LeaveGroup" : "DeleteChatUser"))),
                    onClose: C,
                    onCloseAnimationEnd: b
                }, r ? a.Ay.createElement("p", null, (0, s.A)(h ? P("ClearHistoryMyNotesMessage") : P("ClearHistoryMessageSingle", T), ["simple_markdown", "emoji"])) : u && n.isCreator ? a.Ay.createElement("p", null, (0, s.A)(P("ChatList.DeleteAndLeaveGroupConfirmation", T), ["simple_markdown", "emoji"])) : u && !n.isCreator || g || y ? a.Ay.createElement("p", null, (0, s.A)(P("ChannelLeaveAlertWithName", T), ["simple_markdown", "emoji"])) : a.Ay.createElement("p", null, (0, s.A)(P("ChatList.DeleteChatConfirmation", E), ["simple_markdown", "emoji"])), a.Ay.createElement("div", {
                    className: "dialog-buttons-column"
                }, p && !r && a.Ay.createElement(c.A, {
                    color: "danger",
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: R
                }, P("DeleteAndStop")), v && a.Ay.createElement(c.A, {
                    color: "danger",
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: x
                }, E ? (0, s.A)(P("ChatList.DeleteForEveryone", E)) : P("DeleteForAll")), !A && n.isCreator && !r && a.Ay.createElement(c.A, {
                    color: "danger",
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: L
                }, P("DeleteForAll")), a.Ay.createElement(c.A, {
                    color: "danger",
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: A || r ? L : B
                }, P(r ? "Delete" : u && !n.isCreator ? "LeaveChannel" : u && n.isCreator ? "Chat.Input.Delete" : g || y ? "Group.LeaveGroup" : v ? "ChatList.DeleteForCurrentUser" : "Delete")), a.Ay.createElement(c.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: C
                }, P("Cancel"))))
            })))
        },
        44589: (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(91525),
                s = n(37661),
                l = n(5912),
                c = n(17712),
                d = n(62587),
                m = n(69419),
                u = n(59030),
                A = n(19806),
                h = n(94189),
                p = n(52988);
            const g = new Set(["svg", "svgz"]),
                y = (0, a.ph)((e => {
                    let {
                        document: t,
                        observeIntersection: n,
                        smaller: y,
                        canAutoLoad: f,
                        autoLoadFileMaxSizeMb: v,
                        uploadProgress: E,
                        withDate: C,
                        datetime: b,
                        className: w,
                        sender: S,
                        isSelected: I,
                        isSelectable: N,
                        shouldWarnAboutSvg: M,
                        isDownloading: k,
                        message: P,
                        onCancelUpload: T,
                        onMediaClick: x,
                        onDateClick: R
                    } = e;
                    const {
                        cancelMediaDownload: L,
                        downloadMedia: B,
                        setSettingOption: O
                    } = (0, o.ko)(), F = (0, a.li)(null), D = (0, u.A)(), [U, K, j] = (0, s.A)(), [$, z] = (0, a.J0)(!1), {
                        fileName: _,
                        size: J,
                        timestamp: H
                    } = t, V = (0, r.rK)(t) || "", q = (0, l.Vz)(F, n), [G, W] = (0, s.A)();
                    (0, a.vJ)((() => {
                        q && W()
                    }), [q, W]);
                    const [Y, Q] = (0, a.J0)(f && (!v || J <= 1048576 * v)), Z = Boolean(k || Y && G), X = (0, i.mr)(t, "download"), {
                        loadProgress: ee,
                        mediaData: te
                    } = (0, m.A)(X, !Z, (0, i.Cz)(t, "download"), void 0, !0), ne = Boolean(te), {
                        isUploading: ae,
                        isTransferring: oe,
                        transferProgress: ie
                    } = (0, i.LK)(E || ee, Z && !ne, void 0 !== E), re = (0, r.ON)(t), se = re ? (0, i.VD)(t) : void 0, le = re ? t.previewBlobUrl : void 0, ce = (0, d.A)((0, i.mr)(t, "pictogram"), !q), de = x && t.innerMediaType, me = (0, c.A)((() => {
                        B({
                            media: t
                        })
                    })), ue = (0, c.A)((() => {
                        ae ? T && T() : k ? L({
                            media: t
                        }) : oe ? Q(!1) : de ? x() : g.has(V) && M ? K() : me()
                    })), Ae = (0, c.A)((() => {
                        O({
                            shouldWarnAboutSvg: !$
                        }), j(), me()
                    })), he = (0, c.A)((() => {
                        R?.(P)
                    }));
                    return a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(p.A, {
                        ref: F,
                        name: _,
                        extension: V,
                        size: J,
                        timestamp: C ? b || H : void 0,
                        thumbnailDataUri: se,
                        previewData: le || ce,
                        smaller: y,
                        isTransferring: oe,
                        isUploading: ae,
                        transferProgress: ie,
                        className: w,
                        sender: S,
                        isSelectable: N,
                        isSelected: I,
                        actionIcon: de ? (0, i.hr)(t) ? "play" : "eye" : "download",
                        onClick: ue,
                        onDateClick: R ? he : void 0
                    }), a.Ay.createElement(h.A, {
                        isOpen: U,
                        onClose: j,
                        confirmHandler: Ae
                    }, D("lng_launch_svg_warning"), a.Ay.createElement(A.A, {
                        className: "dialog-checkbox",
                        checked: $,
                        label: D("lng_launch_exe_dont_ask"),
                        onCheck: z
                    })))
                }))
        },
        80999: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(87357),
                i = n(4961),
                r = n(59030);
            const s = e => {
                let {
                    content: t,
                    className: n
                } = e;
                const s = (0, r.A)();
                return a.Ay.createElement("span", {
                    className: (0, o.A)("DotAnimation", n),
                    dir: s.isRtl ? "rtl" : "auto"
                }, (0, i.A)(t), a.Ay.createElement("span", {
                    className: "ellipsis"
                }))
            }
        },
        52988: (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var a = n(84051),
                o = n(87357),
                i = n(17663),
                r = n(82393),
                s = n(91525),
                l = n(76023),
                c = n(4961),
                d = n(43874),
                m = n(45470),
                u = n(37960),
                A = n(59030),
                h = n(34201),
                p = n(96530),
                g = n(35913);
            const y = (0, a.ph)((e => {
                let {
                    ref: t,
                    name: n,
                    size: y,
                    extension: f = "",
                    timestamp: v,
                    sender: E,
                    thumbnailDataUri: C,
                    previewData: b,
                    className: w,
                    smaller: S,
                    isTransferring: I,
                    isUploading: N,
                    isSelectable: M,
                    isSelected: k,
                    transferProgress: P,
                    actionIcon: T,
                    onClick: x,
                    onDateClick: R
                } = e;
                const L = (0, A.A)();
                let B = (0, a.li)(null);
                t && (B = t);
                const {
                    isMobile: O
                } = (0, d.Ay)(), [F] = (0, a.J0)(!b), D = Boolean(b), U = (0, m.A)(C, D, O && !r.QH), K = (0, u.A)(!D), {
                    shouldRender: j,
                    transitionClassNames: $
                } = (0, h.A)(I, void 0, !0), z = (0, s.fE)(f), _ = (0, s.zV)(y), J = (0, a.Kr)((() => I && P ? `${(0,s.zV)(y*P)} / ${_}` : _), [I, y, _, P]), {
                    width: H,
                    height: V
                } = (0, l.tP)(S), q = (0, o.A)("File", w, S && "smaller", x && !N && "interactive", k && "file-is-selected");
                return a.Ay.createElement("div", {
                    ref: B,
                    className: q,
                    dir: L.isRtl ? "rtl" : void 0
                }, M && a.Ay.createElement("div", {
                    className: "message-select-control"
                }, k && a.Ay.createElement("i", {
                    className: "icon icon-select"
                })), a.Ay.createElement("div", {
                    className: "file-icon-container",
                    onClick: N ? void 0 : x
                }, C || b ? a.Ay.createElement("div", {
                    className: "file-preview media-inner"
                }, a.Ay.createElement("img", {
                    src: b,
                    className: "full-media",
                    width: H,
                    height: V,
                    draggable: !1,
                    alt: ""
                }), F && a.Ay.createElement("canvas", {
                    ref: U,
                    className: (0, o.A)("thumbnail", "canvas-blur-setup", K)
                })) : a.Ay.createElement("div", {
                    className: `file-icon ${z}`
                }, f.length <= 4 && a.Ay.createElement("span", {
                    className: "file-ext",
                    dir: "auto"
                }, f)), j && a.Ay.createElement("div", {
                    className: (0, o.A)("file-progress", z, $)
                }, a.Ay.createElement(g.A, {
                    progress: P,
                    size: S ? "s" : "m",
                    onClick: N ? x : void 0
                })), x && a.Ay.createElement("i", {
                    className: (0, o.A)("action-icon", "icon", T ? `icon-${T}` : "icon-download", j && "hidden")
                })), a.Ay.createElement("div", {
                    className: "file-info"
                }, a.Ay.createElement("div", {
                    className: "file-title",
                    dir: "auto",
                    title: n
                }, (0, c.A)(n)), a.Ay.createElement("div", {
                    className: "file-subtitle",
                    dir: "auto"
                }, a.Ay.createElement("span", null, J), E && a.Ay.createElement("span", {
                    className: "file-sender"
                }, (0, c.A)(E)), !E && Boolean(v) && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                    className: "bullet"
                }), a.Ay.createElement(p.A, {
                    onClick: R
                }, (0, i.fS)(L, 1e3 * v, !0))))), E && Boolean(v) && a.Ay.createElement(p.A, {
                    onClick: R
                }, (0, i.be)(L, 1e3 * v)))
            }))
        },
        51083: (e, t, n) => {
            n.d(t, {
                A: () => C
            });
            var a = n(84051),
                o = n(13439),
                i = n(89925),
                r = n(59589),
                s = n(29807),
                l = n(87357),
                c = n(76023),
                d = n(4961),
                m = n(17712),
                u = n(59030),
                A = n(41036),
                h = n(21849),
                p = n(80999),
                g = n(34431),
                y = n(18276),
                f = n(38102),
                v = n(80477);
            const E = 2.5 * c.$,
                C = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n,
                        threadId: a
                    } = t;
                    const o = (0, s.hds)(e, n),
                        i = a ? (0, s.Vw0)(e, n, a) : void 0,
                        r = o ? (0, s.ToO)(e, o) : void 0,
                        l = Boolean((0, s.zeq)(e, n)),
                        c = a ? o?.topics?.[a] : void 0;
                    return {
                        chat: o,
                        threadInfo: i,
                        onlineCount: r,
                        topic: c,
                        areMessagesLoaded: l,
                        messagesCount: c && (0, s.QbG)(e, n, a),
                        self: (0, s.mBe)(e, e.currentUserId)
                    }
                }))((e => {
                    let {
                        typingStatus: t,
                        className: n,
                        statusIcon: s,
                        avatarSize: c = "medium",
                        noAvatar: C,
                        status: b,
                        withDots: w,
                        withMediaViewer: S,
                        withUsername: I,
                        withFullInfo: N,
                        withUpdatingStatus: M,
                        withChatType: k,
                        threadInfo: P,
                        noRtl: T,
                        chat: x,
                        onlineCount: R,
                        areMessagesLoaded: L,
                        topic: B,
                        messagesCount: O,
                        noStatusOrTyping: F,
                        withStory: D,
                        storyViewerOrigin: U,
                        noEmojiStatus: K,
                        emojiStatusSize: j,
                        isSavedDialog: $,
                        self: z,
                        onClick: _,
                        onEmojiStatusClick: J
                    } = e;
                    const {
                        loadFullChat: H,
                        openMediaViewer: V,
                        loadMoreProfilePhotos: q
                    } = (0, o.ko)(), G = (0, u.A)(), W = x && (0, r.Vs)(x), Y = Boolean(x?.isForum && P && B), {
                        id: Q,
                        isMin: Z,
                        isRestricted: X
                    } = x || {};
                    (0, a.vJ)((() => {
                        Q && !Z && (N && H({
                            chatId: Q
                        }), S && q({
                            peerId: Q,
                            isPreload: !0
                        }))
                    }), [Q, Z, N, W, S]);
                    const ee = (0, m.A)(((e, t) => {
                            x && t && (e.stopPropagation(), V({
                                isAvatarView: !0,
                                chatId: x.id,
                                mediaIndex: 0,
                                origin: "jumbo" === c ? i.TQ.ProfileAvatar : i.TQ.MiddleHeaderAvatar
                            }))
                        })),
                        te = (0, a.Kr)((() => x && I && (0, r.Kl)(x)), [x, I]);
                    if (x) return a.Ay.createElement("div", {
                        className: (0, l.A)("ChatInfo", n),
                        dir: !T && G.isRtl ? "rtl" : void 0,
                        onClick: _
                    }, !C && !Y && a.Ay.createElement(a.Ay.Fragment, null, $ && z && a.Ay.createElement(h.A, {
                        key: "saved-messages",
                        size: c,
                        peer: z,
                        isSavedMessages: !0,
                        className: "saved-dialog-avatar"
                    }), a.Ay.createElement(h.A, {
                        key: x.id,
                        className: (0, l.A)($ && "overlay-avatar"),
                        size: c,
                        peer: x,
                        withStory: D,
                        storyViewerOrigin: U,
                        storyViewerMode: "single-peer",
                        isSavedDialog: $,
                        onClick: S ? ee : void 0
                    })), Y && a.Ay.createElement(f.A, {
                        topic: B,
                        className: "topic-header-icon",
                        size: E
                    }), a.Ay.createElement("div", {
                        className: "info"
                    }, B ? a.Ay.createElement("h3", {
                        dir: "auto",
                        className: "fullName"
                    }, (0, d.A)(B.title)) : a.Ay.createElement(g.A, {
                        peer: x,
                        emojiStatusSize: j,
                        withEmojiStatus: !K,
                        isSavedDialog: $,
                        onEmojiStatusClick: J
                    }), !F && function() {
                        if (b) return w ? a.Ay.createElement(p.A, {
                            className: "status",
                            content: b
                        }) : a.Ay.createElement("span", {
                            className: "status",
                            dir: "auto"
                        }, s && a.Ay.createElement(y.A, {
                            className: "status-icon",
                            name: s
                        }), (0, d.A)(b));
                        if (M && !L && !X) return a.Ay.createElement(p.A, {
                            className: "status",
                            content: G("Updating")
                        });
                        if (!x) return;
                        if (t) return a.Ay.createElement(v.A, {
                            typingStatus: t
                        });
                        if (Y) return a.Ay.createElement("span", {
                            className: "status",
                            dir: "auto"
                        }, a.Ay.createElement(A.Ay, {
                            name: "fade",
                            shouldRestoreHeight: !0,
                            activeKey: void 0 !== O ? 1 : 2,
                            className: "message-count-transition"
                        }, void 0 !== O && G("messages", O, "i")));
                        if (k) return a.Ay.createElement("span", {
                            className: "status",
                            dir: "auto"
                        }, G((0, r.Gg)(x)));
                        const e = function(e, t) {
                                const n = e((0, r.Gg)(t)),
                                    {
                                        membersCount: a
                                    } = t;
                                return t.isRestricted ? "Channel" === n ? "channel is inaccessible" : "group is inaccessible" : a ? e("Channel" === n ? "Subscribers" : "Members", a, "i") : n
                            }(G, x),
                            n = R ? `, ${G("OnlineCount",R,"i")}` : void 0;
                        return a.Ay.createElement("span", {
                            className: "status"
                        }, te && a.Ay.createElement("span", {
                            className: "handle withStatus"
                        }, te), a.Ay.createElement("span", {
                            className: "group-status"
                        }, e), n && a.Ay.createElement("span", {
                            className: "online-status"
                        }, n))
                    }()))
                })))
        },
        81642: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(17663),
                i = n(59030),
                r = n(45);
            const s = (0, a.ph)((e => {
                let {
                    message: t,
                    outgoingStatus: n,
                    draftDate: s
                } = e;
                const l = (0, i.A)(),
                    c = s && s > t.date;
                return a.Ay.createElement("div", {
                    className: "LastMessageMeta"
                }, n && !c && a.Ay.createElement(r.A, {
                    status: n
                }), a.Ay.createElement("span", {
                    className: "time"
                }, (0, o.be)(l, 1e3 * (c ? s : t.date))))
            }))
        },
        47058: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var a = n(84051),
                o = n(13439),
                i = n(87357),
                r = n(85982),
                s = n(43874),
                l = n(17712),
                c = n(59030),
                d = n(64493),
                m = n(22699),
                u = n(24433),
                A = n(18276);
            const h = (0, a.ph)((e => {
                let {
                    title: t,
                    link: n,
                    isDisabled: h,
                    className: p,
                    withShare: g,
                    onRevoke: y
                } = e;
                const f = (0, c.A)(),
                    {
                        showNotification: v,
                        openChatWithDraft: E
                    } = (0, o.ko)(),
                    {
                        isMobile: C
                    } = (0, s.Ay)(),
                    b = !y,
                    w = (0, l.A)((() => {
                        (0, r.eM)(n), v({
                            message: f("LinkCopied")
                        })
                    })),
                    S = (0, l.A)((() => {
                        h || w()
                    })),
                    I = (0, l.A)((() => {
                        E({
                            text: {
                                text: n
                            }
                        })
                    })),
                    N = (0, a.Kr)((() => e => {
                        let {
                            onTrigger: t,
                            isOpen: n
                        } = e;
                        return a.Ay.createElement(d.A, {
                            round: !0,
                            ripple: !C,
                            size: "smaller",
                            color: "translucent",
                            className: n ? "active" : "",
                            onClick: t,
                            ariaLabel: f("AccDescrOpenMenu2")
                        }, a.Ay.createElement("i", {
                            className: "icon icon-more"
                        }))
                    }), [C, f]);
                return a.Ay.createElement("div", {
                    className: p
                }, a.Ay.createElement("p", {
                    className: "vCMpiQTJ"
                }, f(t || "InviteLink.InviteLink")), a.Ay.createElement("div", {
                    className: "xNjJHI7j"
                }, a.Ay.createElement("input", {
                    className: (0, i.A)("form-control", "Ag6k_p7b"),
                    value: n,
                    readOnly: !0,
                    onClick: S
                }), b ? a.Ay.createElement(d.A, {
                    color: "translucent",
                    className: "obuPXobw",
                    size: "smaller",
                    round: !0,
                    disabled: h,
                    onClick: S
                }, a.Ay.createElement(A.A, {
                    name: "copy"
                })) : a.Ay.createElement(m.A, {
                    className: "p7t3macG",
                    trigger: N,
                    positionX: "right"
                }, a.Ay.createElement(u.A, {
                    icon: "copy",
                    onClick: S,
                    disabled: h
                }, f("Copy")), y && a.Ay.createElement(u.A, {
                    icon: "delete",
                    onClick: y,
                    destructive: !0
                }, f("RevokeButton")))), g && a.Ay.createElement(d.A, {
                    size: "smaller",
                    disabled: h,
                    onClick: I
                }, f("FolderLinkScreen.LinkActionShare")))
            }))
        },
        81524: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var a = n(84051),
                o = n(59589),
                i = n(87357),
                r = n(17663),
                s = n(83868),
                l = n(37661),
                c = n(5912),
                d = n(17712),
                m = n(62587),
                u = n(37960),
                A = n(27860);
            const h = (0, a.ph)((e => {
                let {
                    message: t,
                    idPrefix: n = "shared-media",
                    isProtected: h,
                    observeIntersection: p,
                    onClick: g
                } = e;
                const y = (0, a.li)(null),
                    f = (0, c.Vz)(y, p),
                    v = (0, o.CI)(t),
                    E = (0, m.A)((0, o.EO)(t, "pictogram"), !f),
                    C = (0, u.A)(E),
                    b = (0, o.zX)(t),
                    w = (0, o.y2)(t),
                    [S, , I] = (0, l.A)(w),
                    N = (0, d.A)((() => {
                        I(), g(t.id, t.chatId)
                    }));
                return a.Ay.createElement("div", {
                    ref: y,
                    id: `${n}${(0,o.GZ)(t.id)}`,
                    className: "Media scroll-item",
                    onClick: g ? N : void 0
                }, a.Ay.createElement("img", {
                    src: v,
                    className: "media-miniature",
                    alt: "",
                    draggable: !h,
                    decoding: "async",
                    onContextMenu: h ? s.A : void 0
                }), a.Ay.createElement("img", {
                    src: E,
                    className: (0, i.A)("full-media", "media-miniature", C),
                    alt: "",
                    draggable: !h,
                    decoding: "async",
                    onContextMenu: h ? s.A : void 0
                }), w && a.Ay.createElement(A.A, {
                    thumbDataUri: E || v,
                    isVisible: S,
                    className: "media-spoiler"
                }), b && a.Ay.createElement("span", {
                    className: "video-duration"
                }, b.isGif ? "GIF" : (0, r.QO)(b.duration)), h && a.Ay.createElement("span", {
                    className: "protector"
                }))
            }))
        },
        27860: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(66644),
                i = n(87357),
                r = n(45470),
                s = n(17712),
                l = n(34201);
            const c = (0, a.ph)((e => {
                let {
                    isVisible: t,
                    withAnimation: n,
                    thumbDataUri: c,
                    className: d,
                    width: m,
                    height: u
                } = e;
                const A = (0, a.li)(null),
                    {
                        shouldRender: h,
                        transitionClassNames: p
                    } = (0, l.A)(t, void 0, !0, !n && void 0, void 0, 500),
                    g = (0, r.A)(c, !h, void 0, 25, m, u),
                    y = (0, s.A)((e => {
                        if (!A.current) return;
                        const t = A.current,
                            n = e.currentTarget.getBoundingClientRect(),
                            a = e.clientX - n.left,
                            i = e.clientY - n.top,
                            r = a - n.width / 2,
                            s = i - n.height / 2;
                        (0, o.RK)((() => {
                            t.setAttribute("style", `--click-shift-x: ${r}px; --click-shift-y: ${s}px`)
                        }))
                    }));
                if (h) return a.Ay.createElement("div", {
                    className: (0, i.A)("qF2WgYVg", p, d, n && "pNM3cgkY"),
                    ref: A,
                    onClick: n ? y : void 0
                }, a.Ay.createElement("canvas", {
                    ref: g,
                    className: (0, i.A)("eULqS2yR", "canvas-blur-setup"),
                    width: m,
                    height: u
                }), a.Ay.createElement("div", {
                    className: "XBor45hE"
                }))
            }))
        },
        45: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(41036),
                i = n(18276),
                r = function(e) {
                    return e[e.failed = 0] = "failed", e[e.pending = 1] = "pending", e[e.succeeded = 2] = "succeeded", e[e.read = 3] = "read", e
                }(r || {});
            const s = (0, a.ph)((e => {
                let {
                    status: t
                } = e;
                return a.Ay.createElement("div", {
                    className: "MessageOutgoingStatus"
                }, a.Ay.createElement(o.Ay, {
                    name: "reveal",
                    activeKey: r[t]
                }, "failed" === t ? a.Ay.createElement("div", {
                    className: "MessageOutgoingStatus--failed"
                }, a.Ay.createElement(i.A, {
                    name: "message-failed"
                })) : a.Ay.createElement(i.A, {
                    name: `message-${t}`
                })))
            }))
        },
        42827: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(87357),
                i = n(4961),
                r = n(59030),
                s = n(34201);
            const l = "Nothing found.",
                c = (0, a.ph)((e => {
                    let {
                        text: t = l,
                        description: n
                    } = e;
                    const c = (0, r.A)(),
                        {
                            transitionClassNames: d
                        } = (0, s.A)(!0);
                    return a.Ay.createElement("div", {
                        className: (0, o.A)("NothingFound", d, n && "with-description")
                    }, t, n && a.Ay.createElement("p", {
                        className: "description"
                    }, (0, i.A)(c(n), ["br"])))
                }))
        },
        15535: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(31481),
                i = n(66644),
                r = n(87357),
                s = n(83868),
                l = n(82393),
                c = n(14737),
                d = n(43874),
                m = n(59030),
                u = n(64493);
            const A = (0, a.ph)((e => {
                let {
                    isLoading: t = !1,
                    isPasswordVisible: n,
                    error: A,
                    hint: h,
                    placeholder: p = "Password",
                    submitLabel: g = "Next",
                    description: y,
                    shouldShowSubmit: f,
                    shouldResetValue: v,
                    shouldDisablePasswordManager: E = !1,
                    noRipple: C = !1,
                    clearError: b,
                    onChangePasswordVisibility: w,
                    onInputChange: S,
                    onSubmit: I
                } = e;
                const N = (0, a.li)(null),
                    M = (0, m.A)(),
                    {
                        isMobile: k
                    } = (0, d.Ay)(),
                    [P, T] = (0, a.J0)(""),
                    [x, R] = (0, a.J0)(!1),
                    L = k ? 550 : 400;
                return (0, a.vJ)((() => {
                    v && T("")
                }), [v]), (0, c.A)((() => {
                    l.TF || N.current.focus()
                }), L), (0, a.vJ)((() => {
                    A && (0, i.RK)((() => {
                        N.current.focus(), N.current.select()
                    }))
                }), [A]), a.Ay.createElement("form", {
                    action: "",
                    onSubmit: I ? function(e) {
                        e.preventDefault(), t || x && I(P)
                    } : s.A,
                    autoComplete: "off"
                }, a.Ay.createElement("div", {
                    className: (0, r.A)("input-group password-input", P && "touched", A && "error"),
                    dir: M.isRtl ? "rtl" : void 0
                }, E && a.Ay.createElement("input", {
                    type: "password",
                    id: "prevent_autofill",
                    autoComplete: "off",
                    className: "visually-hidden",
                    tabIndex: -2
                }), a.Ay.createElement("input", {
                    ref: N,
                    className: "form-control",
                    type: n ? "text" : "password",
                    id: "sign-in-password",
                    value: P || "",
                    autoComplete: E ? "one-time-code" : "current-password",
                    onChange: function(e) {
                        A && b();
                        const {
                            target: t
                        } = e;
                        T(t.value), R(t.value.length >= o.AGC), S && S(t.value)
                    },
                    maxLength: 256,
                    dir: "auto"
                }), a.Ay.createElement("label", null, A || h || p), a.Ay.createElement("div", {
                    className: "div-button toggle-password",
                    onClick: function() {
                        w(!n)
                    },
                    role: "button",
                    tabIndex: 0,
                    title: "Toggle password visibility",
                    "aria-label": "Toggle password visibility"
                }, a.Ay.createElement("i", {
                    className: (0, r.A)("icon", n ? "icon-eye" : "icon-eye-closed")
                }))), y && a.Ay.createElement("p", {
                    className: "description"
                }, y), I && (x || f) && a.Ay.createElement(u.A, {
                    type: "submit",
                    ripple: !C,
                    isLoading: t,
                    disabled: !x
                }, g))
            }))
        },
        17416: (e, t, n) => {
            n.d(t, {
                A: () => v
            });
            var a = n(84051),
                o = n(66644),
                i = n(59589),
                r = n(87357),
                s = n(87894),
                l = n(96374),
                c = n(17712),
                d = n(59030),
                m = n(19806),
                u = n(46222),
                A = n(40664),
                h = n(22720),
                p = n(52745),
                g = n(51083),
                y = n(39970),
                f = n(17751);
            const v = (0, a.ph)((e => {
                let {
                    className: t,
                    categories: n,
                    itemIds: v,
                    selectedCategories: E,
                    categoryPlaceholderKey: C,
                    selectedIds: b,
                    filterValue: w,
                    filterPlaceholder: S,
                    notFoundText: I,
                    searchInputId: N,
                    isLoading: M,
                    noScrollRestore: k,
                    isSearchable: P,
                    isRoundCheckbox: T,
                    lockedSelectedIds: x,
                    lockedUnselectedIds: R,
                    lockedUnselectedSubtitle: L,
                    forceShowSelf: B,
                    isViewOnly: O,
                    onSelectedCategoriesChange: F,
                    onSelectedIdsChange: D,
                    onFilterChange: U,
                    onDisabledClick: K,
                    onLoadMore: j,
                    isCountryList: $,
                    countryList: z
                } = e;
                const _ = (0, a.li)(null),
                    J = b.length > 10;
                (0, a.vJ)((() => {
                    P && setTimeout((() => {
                        (0, o.YS)((() => {
                            _.current.focus()
                        }))
                    }), 500)
                }), [P]);
                const H = (0, a.Kr)((() => new Set(x)), [x]),
                    V = (0, a.Kr)((() => new Set(R)), [R]),
                    q = (0, a.Kr)((() => b.filter((e => !H.has(e)))), [H, b]),
                    G = (0, a.Kr)((() => n ? (0, s.dU)(n, "type") : {}), [n]),
                    W = (0, a.Kr)((() => {
                        if (w) return v;
                        const e = [],
                            t = [],
                            n = [];
                        return v.forEach((a => {
                            H.has(a) ? e.push(a) : V.has(a) ? n.push(a) : t.push(a)
                        })), e.concat(t, n)
                    }), [w, v, H, V]),
                    Y = (0, c.A)((e => {
                        if (H.has(e)) K?.(e, !0);
                        else if (V.has(e)) K?.(e, !1);
                        else {
                            if (G[e]) {
                                const t = G[e].type,
                                    n = E?.slice() || [];
                                n.includes(t) ? n.splice(n.indexOf(t), 1) : n.push(t), F?.(n)
                            } else {
                                const t = b.slice();
                                t.includes(e) ? t.splice(t.indexOf(e), 1) : t.push(e), D?.(t)
                            }
                            U?.("")
                        }
                    })),
                    Q = (0, c.A)((e => {
                        const {
                            value: t
                        } = e.currentTarget;
                        U?.(t)
                    })),
                    [Z, X] = (0, l.A)(j, W, Boolean(w)),
                    ee = (0, d.A)(),
                    te = (0, a.Kr)((() => {
                        if (z) return (0, s.dU)(z, "iso2")
                    }), [z]),
                    ne = (0, c.A)((e => a.Ay.createElement(f.A, {
                        customPeer: e
                    }))),
                    ae = (0, c.A)((e => {
                        const t = V.has(e);
                        if ($ && te) {
                            const t = te[e];
                            return a.Ay.createElement("div", null, t.defaultName)
                        }
                        return (0, i.L8)(e) ? a.Ay.createElement(f.A, {
                            forceShowSelf: B,
                            userId: e,
                            status: t ? L : void 0
                        }) : a.Ay.createElement(g.A, {
                            chatId: e,
                            status: t ? L : void 0
                        })
                    })),
                    oe = (0, a.hb)(((e, t) => {
                        const n = t ? G[e] : void 0,
                            o = V.has(e),
                            i = H.has(e) || o,
                            s = n ? E?.includes(n.type) : b.includes(e),
                            l = () => O || o ? void 0 : a.Ay.createElement(m.A, {
                                label: "",
                                disabled: i,
                                checked: s,
                                round: T
                            });
                        return a.Ay.createElement(h.A, {
                            key: e,
                            className: (0, r.A)("chat-item-clickable picker-list-item", T && "chat-item"),
                            disabled: i,
                            inactive: O,
                            allowDisabledClick: Boolean(K),
                            secondaryIcon: o ? "lock-badge" : void 0,
                            onClick: () => Y(e),
                            ripple: !0
                        }, T ? void 0 : l(), n ? ne(n) : ae(e), T ? l() : void 0)
                    }), [G, T, O, H, V, K, ae, E, b]),
                    ie = (0, a.Kr)((() => a.Ay.createElement("div", {
                        key: "categories"
                    }, Boolean(n?.length) && a.Ay.createElement(a.Ay.Fragment, null, C && a.Ay.createElement("div", {
                        className: "picker-category-title"
                    }, ee(C)), n?.map((e => oe(e.type, !0))), a.Ay.createElement("div", {
                        className: "picker-category-title"
                    }, ee("FilterChats"))))), [n, C, ee, oe]);
                return a.Ay.createElement("div", {
                    className: (0, r.A)("Picker", t)
                }, P && a.Ay.createElement("div", {
                    className: "picker-header custom-scroll",
                    dir: ee.isRtl ? "rtl" : void 0
                }, E?.map((e => a.Ay.createElement(y.A, {
                    customPeer: G[e],
                    onClick: Y,
                    clickArg: e,
                    canClose: !0
                }))), x?.map(((e, t) => a.Ay.createElement(y.A, {
                    peerId: e,
                    isMinimized: J && t < b.length - 5,
                    forceShowSelf: B,
                    onClick: Y,
                    clickArg: e
                }))), q.map(((e, t) => a.Ay.createElement(y.A, {
                    peerId: e,
                    isMinimized: J && t + (x?.length || 0) < b.length - 5,
                    canClose: !0,
                    onClick: Y,
                    clickArg: e
                }))), a.Ay.createElement(A.A, {
                    id: N,
                    ref: _,
                    value: w,
                    onChange: Q,
                    placeholder: S || ee("SelectChat")
                })), Z?.length ? a.Ay.createElement(u.A, {
                    className: (0, r.A)("picker-list", "custom-scroll", T && "withRoundedCheckbox"),
                    items: Z,
                    beforeChildren: ie,
                    onLoadMore: X,
                    noScrollRestore: k
                }, Z.map((e => oe(e)))) : M || !Z || Z.length ? a.Ay.createElement(p.A, null) : a.Ay.createElement("p", {
                    className: "no-results"
                }, I || "Sorry, nothing found."))
            }))
        },
        39970: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(29807),
                s = n(87357),
                l = n(35049),
                c = n(4961),
                d = n(59030),
                m = n(21849),
                u = n(18276);
            const A = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    peerId: n,
                    forceShowSelf: a
                } = t;
                if (!n) return {};
                const o = (0, r.hds)(e, n),
                    i = (0, r.mBe)(e, n);
                return {
                    chat: o,
                    user: i,
                    isSavedMessages: !a && i && i.isSelf
                }
            }))((e => {
                let {
                    icon: t,
                    title: n,
                    isMinimized: o,
                    canClose: r,
                    clickArg: A,
                    chat: h,
                    user: p,
                    customPeer: g,
                    className: y,
                    fluid: f,
                    isSavedMessages: v,
                    withPeerColors: E,
                    onClick: C
                } = e;
                const b = (0, d.A)();
                let w, S;
                if (t && n) w = a.Ay.createElement("div", {
                    className: "item-icon"
                }, a.Ay.createElement(u.A, {
                    name: t
                })), S = n;
                else if (g || p || h) {
                    w = a.Ay.createElement(m.A, {
                        peer: g || p || h,
                        size: "small",
                        isSavedMessages: v
                    });
                    const e = g && b(g.titleKey) || (!h || p && !v ? (0, i.u0)(p) : (0, i.Js)(b, h, v));
                    S = e ? (0, c.A)(e) : void 0
                }
                const I = (0, s.A)("PickerSelectedItem", y, (h?.isForum || g?.isAvatarSquare) && "square-avatar", o && "minimized", r && "closeable", f && "fluid", E && (0, l.y)(g || h || p));
                return a.Ay.createElement("div", {
                    className: I,
                    onClick: () => C(A),
                    title: o ? S : void 0,
                    dir: b.isRtl ? "rtl" : void 0
                }, w, !o && a.Ay.createElement("div", {
                    className: "item-name",
                    dir: "auto"
                }, S), r && a.Ay.createElement("div", {
                    className: "item-remove"
                }, a.Ay.createElement(u.A, {
                    name: "close"
                })))
            })))
        },
        20333: (e, t, n) => {
            n.d(t, {
                A: () => m
            });
            var a = n(84051),
                o = n(87357),
                i = n(95807),
                r = n(59030),
                s = n(93545),
                l = n(18276);
            const c = "_b5HgBXr",
                d = "P6mch4bB",
                m = (0, a.ph)((e => {
                    let {
                        leftText: t,
                        rightText: n,
                        floatingBadgeText: m,
                        floatingBadgeIcon: u,
                        progress: A,
                        className: h
                    } = e;
                    const p = (0, r.A)(),
                        g = (0, a.li)(null),
                        y = (0, a.li)(null),
                        [f, v] = (0, a.J0)(0),
                        [E, C] = (0, a.J0)(0),
                        b = () => {
                            if (g.current && y.current && void 0 !== A) {
                                const e = g.current.offsetWidth,
                                    t = y.current.offsetWidth,
                                    n = e / 2,
                                    a = t - e / 2,
                                    o = A * t,
                                    i = Math.max(n, Math.min(o, a));
                                let r;
                                v(i / t), r = o < n ? A * t / (2 * n) : o > a ? .5 + (A - a / t) / (1 - a / t) * .4 : .5, C(r)
                            }
                        };
                    (0, a.vJ)(b, [A]), (0, s.A)(y, b);
                    const w = Boolean(u || m),
                        S = Boolean(A) && A > .99;
                    return a.Ay.createElement("div", {
                        ref: y,
                        className: (0, o.A)("nY2ggBsF", w && "RYtVQAjM", h),
                        style: (0, i.A)(void 0 !== A && `--progress: ${A}`, void 0 !== E && `--tail-position: ${E}`, `--shift-x: ${f}`)
                    }, w && a.Ay.createElement("div", {
                        className: "dhigNjAq"
                    }, a.Ay.createElement("div", {
                        className: "cOpfCGPh"
                    }, a.Ay.createElement("div", {
                        className: "uNwBLNOy",
                        ref: g
                    }, u && a.Ay.createElement(l.A, {
                        name: u,
                        className: "MJ7MTmxi"
                    }), m && a.Ay.createElement("div", {
                        className: "MwzZt3Qo",
                        dir: p.isRtl ? "rtl" : void 0
                    }, m)), a.Ay.createElement("div", {
                        className: "qRwO7SZm"
                    }, a.Ay.createElement("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none"
                    }, a.Ay.createElement("path", {
                        d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
                        fill: "#7E85FF"
                    }))))), a.Ay.createElement("div", {
                        className: c
                    }, a.Ay.createElement("span", null, t)), a.Ay.createElement("div", {
                        className: d
                    }, a.Ay.createElement("span", null, n)), a.Ay.createElement("div", {
                        className: (0, o.A)("sZZV0yoe", S && "m8ie8IxL")
                    }, a.Ay.createElement("div", {
                        className: c
                    }, a.Ay.createElement("span", null, t)), a.Ay.createElement("div", {
                        className: d
                    }, a.Ay.createElement("span", null, n))))
                }))
        },
        17751: (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var a = n(84051),
                o = n(13439),
                i = n(89925),
                r = n(59589),
                s = n(29807),
                l = n(87357),
                c = n(4961),
                d = n(17712),
                m = n(59030),
                u = n(42452),
                A = n(21849),
                h = n(80999),
                p = n(34431),
                g = n(18276),
                y = n(80477);
            const f = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    userId: n,
                    forceShowSelf: a
                } = t;
                const {
                    isSynced: o
                } = e, i = n ? (0, s.mBe)(e, n) : void 0, r = n ? (0, s.K0y)(e, n) : void 0, l = !a && i && i.isSelf, c = l ? i : (0, s.mBe)(e, e.currentUserId);
                return {
                    user: i,
                    userStatus: r,
                    isSavedMessages: l,
                    areMessagesLoaded: Boolean(n && (0, s.zeq)(e, n)),
                    self: c,
                    isSynced: o
                }
            }))((e => {
                let {
                    customPeer: t,
                    typingStatus: n,
                    avatarSize: s = "medium",
                    status: f,
                    statusIcon: v,
                    withDots: E,
                    withMediaViewer: C,
                    withUsername: b,
                    withStory: w,
                    withFullInfo: S,
                    withUpdatingStatus: I,
                    emojiStatusSize: N,
                    noStatusOrTyping: M,
                    noEmojiStatus: k,
                    noFake: P,
                    noVerified: T,
                    noRtl: x,
                    user: R,
                    userStatus: L,
                    self: B,
                    isSavedMessages: O,
                    isSavedDialog: F,
                    areMessagesLoaded: D,
                    adminMember: U,
                    ripple: K,
                    className: j,
                    storyViewerOrigin: $,
                    isSynced: z,
                    onEmojiStatusClick: _,
                    iconElement: J,
                    rightElement: H
                } = e;
                const {
                    loadFullUser: V,
                    openMediaViewer: q,
                    loadMoreProfilePhotos: G
                } = (0, o.ko)(), W = (0, m.A)(), {
                    id: Y
                } = R || {};
                (0, a.vJ)((() => {
                    Y && (S && z && V({
                        userId: Y
                    }), C && G({
                        peerId: Y,
                        isPreload: !0
                    }))
                }), [Y, S, C, z]);
                const Q = (0, d.A)(((e, t) => {
                        R && t && (e.stopPropagation(), q({
                            isAvatarView: !0,
                            chatId: R.id,
                            mediaIndex: 0,
                            origin: "jumbo" === s ? i.TQ.ProfileAvatar : i.TQ.MiddleHeaderAvatar
                        }))
                    })),
                    Z = (0, a.Kr)((() => R && b && (0, r.Kl)(R)), [R, b]);
                if (!R && !t) return;
                const X = U ? U.customTitle || W(U.isOwner ? "GroupInfo.LabelOwner" : "GroupInfo.LabelAdmin") : void 0;
                return a.Ay.createElement("div", {
                    className: (0, l.A)("ChatInfo", j),
                    dir: !x && W.isRtl ? "rtl" : void 0
                }, F && B && a.Ay.createElement(A.A, {
                    key: "saved-messages",
                    size: s,
                    peer: B,
                    isSavedMessages: !0,
                    className: "saved-dialog-avatar"
                }), a.Ay.createElement(A.A, {
                    key: R?.id,
                    size: s,
                    peer: t || R,
                    className: (0, l.A)(F && "overlay-avatar"),
                    isSavedMessages: O,
                    isSavedDialog: F,
                    withStory: w,
                    storyViewerOrigin: $,
                    storyViewerMode: "single-peer",
                    onClick: C ? Q : void 0
                }), a.Ay.createElement("div", {
                    className: "info"
                }, X ? a.Ay.createElement("div", {
                    className: "info-name-title"
                }, a.Ay.createElement(p.A, {
                    peer: R,
                    withEmojiStatus: !k,
                    emojiStatusSize: N,
                    isSavedMessages: O,
                    isSavedDialog: F,
                    onEmojiStatusClick: _
                }), X && a.Ay.createElement("span", {
                    className: "custom-title"
                }, X)) : a.Ay.createElement(p.A, {
                    peer: t || R,
                    noFake: P,
                    noVerified: T,
                    withEmojiStatus: !k,
                    emojiStatusSize: N,
                    isSavedMessages: O,
                    isSavedDialog: F,
                    onEmojiStatusClick: _,
                    iconElement: J
                }), (f || !O && !M) && function() {
                    if (f) return E ? a.Ay.createElement(h.A, {
                        className: "status",
                        content: f
                    }) : a.Ay.createElement("span", {
                        className: "status",
                        dir: "auto"
                    }, v && a.Ay.createElement(g.A, {
                        className: "status-icon",
                        name: v
                    }), (0, c.A)(f));
                    if (I && !D) return a.Ay.createElement(h.A, {
                        className: "status",
                        content: W("Updating")
                    });
                    if (t?.subtitleKey) return a.Ay.createElement("span", {
                        className: "status",
                        dir: "auto"
                    }, a.Ay.createElement("span", {
                        className: "user-status",
                        dir: "auto"
                    }, W(t.subtitleKey)));
                    if (!R) return;
                    if (n) return a.Ay.createElement(y.A, {
                        typingStatus: n
                    });
                    const e = (0, r.CD)(W, R, L),
                        o = (0, l.A)("handle", e && "withStatus");
                    return a.Ay.createElement("span", {
                        className: (0, l.A)("status", (0, r.PF)(R, L, !0) && "online")
                    }, Z && a.Ay.createElement("span", {
                        className: o
                    }, Z), e && a.Ay.createElement("span", {
                        className: "user-status",
                        dir: "auto"
                    }, e))
                }()), K && a.Ay.createElement(u.A, null), H)
            })))
        },
        70195: (e, t, n) => {
            n.d(t, {
                A: () => K
            });
            var a = n(84051),
                o = n(13439),
                i = n(89925),
                r = n(59589),
                s = n(29807),
                l = n(87357),
                c = n(50442),
                d = n(79824),
                m = n(82393),
                u = n(4961),
                A = n(17712),
                h = n(59030),
                p = n(29886),
                g = n(97335),
                y = n(58554),
                f = n(41036),
                v = n(21849),
                E = n(34431),
                C = n(14242),
                b = n(35049),
                w = n(43874),
                S = n(45470),
                I = n(37661),
                N = n(62587),
                M = n(37960),
                k = n(65843),
                P = n(57474),
                T = n(18276);
            const x = (0, a.ph)((e => {
                let {
                    chat: t,
                    user: n,
                    photo: o,
                    isSavedMessages: i,
                    isSavedDialog: s,
                    canPlayVideo: c,
                    onClick: d
                } = e;
                const A = (0, a.li)(null),
                    p = (0, h.A)(),
                    {
                        isMobile: g
                    } = (0, w.Ay)(),
                    y = n && (0, r.PL)(n),
                    f = t && (0, r.kE)(t.id),
                    v = t && (0, r.Qe)(t.id),
                    E = n || t,
                    x = E && !i && !y && !f && !v,
                    {
                        isVideo: R
                    } = o || {},
                    L = (!o || o.id === E.avatarPhotoId) && (0, r.cP)(E, "normal"),
                    B = x && o && !L && (0, r.rI)(o, "pictogram"),
                    O = (0, N.A)(B || L),
                    F = x && o && !R && (0, r.mU)(o),
                    D = (0, N.A)(F),
                    U = x && o && R && (0, r.Pg)(o),
                    K = (0, N.A)(U) || D,
                    [j, $] = (0, I.A)(),
                    z = Boolean(K && (!R || j)),
                    _ = (0, M.A)(z),
                    J = x && !z && !O && o?.thumbnail?.dataUri,
                    H = (0, S.A)(o?.thumbnail?.dataUri, !J, g && !m.QH),
                    V = o || O || J;
                (0, a.vJ)((() => {
                    A.current && !c && (A.current.currentTime = 0)
                }), [c]);
                const q = (0, a.Kr)((() => i ? s ? "my-notes" : "avatar-saved-messages" : y ? "avatar-deleted-account" : f ? "reply-filled" : v ? "author-hidden" : void 0), [v, y, s, f, i]);
                let G;
                if (q) G = a.Ay.createElement(T.A, {
                    name: q,
                    role: "img"
                });
                else if (V) G = a.Ay.createElement(a.Ay.Fragment, null, J ? a.Ay.createElement("canvas", {
                    ref: H,
                    className: "thumb canvas-blur-setup"
                }) : a.Ay.createElement("img", {
                    src: O,
                    draggable: !1,
                    className: "thumb",
                    alt: ""
                }), o && (R ? a.Ay.createElement(k.A, {
                    canPlay: c,
                    ref: A,
                    src: K,
                    className: (0, l.A)("avatar-media", _),
                    muted: !0,
                    disablePictureInPicture: !0,
                    loop: !0,
                    playsInline: !0,
                    onReady: $
                }) : a.Ay.createElement("img", {
                    src: K,
                    className: (0, l.A)("avatar-media", _),
                    alt: ""
                })));
                else if (n) {
                    const e = (0, r.Yg)(n);
                    G = e ? (0, C.Qh)(e, 2) : void 0
                } else if (t) {
                    const e = (0, r.Js)(p, t);
                    G = e && (0, C.Qh)(e, (0, r.L8)(t.id) ? 2 : 1)
                } else G = a.Ay.createElement("div", {
                    className: "spinner-wrapper"
                }, a.Ay.createElement(P.A, {
                    color: "white"
                }));
                const W = (0, l.A)("ProfilePhoto", (0, b.y)(E), i && "saved-messages", v && "anonymous-forwards", y && "deleted-account", f && "replies-bot-account", !i && !V && "no-photo");
                return a.Ay.createElement("div", {
                    className: W,
                    onClick: V ? d : void 0
                }, "string" == typeof G ? (0, u.A)(G, ["hq_emoji"]) : G)
            }));
            var R = n(38102);
            const L = "cpyXyZDl",
                B = "Wm9Ygb23",
                O = "nflKKT3R",
                F = "tFkRrvxe",
                D = "GBGLnrA7",
                U = "ZZRcBh8v",
                K = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        peerId: n
                    } = t;
                    const a = (0, s.mBe)(e, n),
                        o = (0, s.K0y)(e, n),
                        i = (0, s.hds)(e, n),
                        {
                            mediaIndex: r,
                            chatId: l
                        } = (0, s.nTw)(e).mediaViewer,
                        c = i?.isForum,
                        {
                            threadId: d
                        } = (0, s.Xf0)(e) || {},
                        m = c && d ? i?.topics?.[d] : void 0,
                        u = (a || i)?.emojiStatus;
                    return {
                        user: a,
                        userStatus: o,
                        chat: i,
                        mediaIndex: r,
                        avatarOwnerId: l,
                        emojiStatusSticker: u ? e.customEmojis.byId[u.documentId] : void 0,
                        ...m && {
                            topic: m,
                            messagesCount: (0, s.QbG)(e, n, d)
                        }
                    }
                }))((e => {
                    let {
                        forceShowSelf: t,
                        canPlayVideo: n,
                        user: s,
                        userStatus: C,
                        chat: b,
                        mediaIndex: w,
                        avatarOwnerId: S,
                        topic: I,
                        messagesCount: N,
                        emojiStatusSticker: M,
                        peerId: k
                    } = e;
                    const {
                        openMediaViewer: P,
                        openPremiumModal: T,
                        openStickerSet: K,
                        openPrivacySettingsNoticeModal: j,
                        loadMoreProfilePhotos: $
                    } = (0, o.ko)(), z = (0, h.A)(), _ = s?.profilePhotos, J = b?.profilePhotos, H = _?.photos || J?.photos || d.p, V = (0, p.A)(w), q = (0, p.A)(S), [G, W] = (0, a.J0)(!0), Y = G ? z.isRtl ? "slideRtl" : "slide" : "none", [Q, Z] = (0, a.J0)(0), X = H.length <= 1 || 0 === Q, ee = H.length <= 1 || Q === H.length - 1;
                    (0, a.vJ)((() => {
                        H.length - Q <= 3 && $({
                            peerId: k
                        })
                    }), [Q, k, H.length]), (0, a.vJ)((() => {
                        q && void 0 !== V && void 0 === w && (W(!1), Z(V))
                    }), [w, V, q]), (0, a.vJ)((() => {
                        Q > H.length && (W(!1), Z(Math.max(0, H.length - 1)))
                    }), [Q, H.length]),
                    function(e, t) {
                        (0, a.vJ)((() => {
                            e.slice(t, t + 4).forEach((e => {
                                const t = (0, r.mU)(e);
                                y.Ih(t) || y.hd(t, g.qZ.BlobUrl)
                            }))
                        }), [t, e])
                    }(H, Q);
                    const te = (0, A.A)((() => {
                            P({
                                isAvatarView: !0,
                                chatId: k,
                                mediaIndex: Q,
                                origin: t ? i.TQ.SettingsAvatar : i.TQ.ProfileAvatar
                            })
                        })),
                        ne = (0, A.A)((() => {
                            k ? T({
                                fromUserId: k
                            }) : K({
                                stickerSetInfo: M.stickerSetInfo
                            })
                        })),
                        ae = (0, A.A)((() => {
                            X || (W(!0), Z(Q - 1))
                        })),
                        oe = (0, A.A)((() => {
                            ee || (W(!0), Z(Q + 1))
                        })),
                        ie = (0, A.A)((() => {
                            j({
                                chatId: b.id,
                                isReadDate: !1
                            })
                        }));
                    if ((0, a.vJ)((() => {
                            const e = document.querySelector(`.${D}`);
                            if (e) return (0, c.wJ)(e, {
                                selectorToPreventScroll: ".Profile, .settings-content",
                                onSwipe: m.TF ? (e, t) => t === c.ez.Right ? (ae(), !0) : t === c.ez.Left && (oe(), !0) : void 0
                            })
                        }), [oe, ae]), s || b) return I ? a.Ay.createElement("div", {
                        className: "yzg267rr"
                    }, a.Ay.createElement(R.A, {
                        topic: I,
                        size: 120,
                        className: "ZCxp0_t4",
                        letterClassName: "lkfZNWOm",
                        noLoopLimit: !0
                    }), a.Ay.createElement("h3", {
                        className: "umOuiu3K",
                        dir: z.isRtl ? "rtl" : void 0
                    }, (0, u.A)(I.title)), a.Ay.createElement("p", {
                        className: "tLTzQ2ks"
                    }, N ? z("Chat.Title.Topic", N, "i") : z("lng_forum_no_messages"))) : a.Ay.createElement("div", {
                        className: (0, l.A)("ProfileInfo", t && "DnvLcTfv"),
                        dir: z.isRtl ? "rtl" : void 0
                    }, a.Ay.createElement("div", {
                        className: D
                    }, function() {
                        const e = Math.max(H.length, _?.count || 0, J?.count || 0);
                        if (!H || e <= 1) return;
                        const t = Array.from({
                                length: Math.min(e, 30)
                            }),
                            n = Q >= 30 ? 29 : Q;
                        return a.Ay.createElement("div", {
                            className: "uyvKpR3B"
                        }, t.map(((e, t) => a.Ay.createElement("span", {
                            className: (0, l.A)("wB4yjvei", t === n && "aZmp9FLh")
                        }))))
                    }(), !t && _?.personalPhoto && a.Ay.createElement("div", {
                        className: (0, l.A)(B, X && F)
                    }, a.Ay.createElement("div", {
                        className: O
                    }, z(_.personalPhoto.isVideo ? "UserInfo.CustomVideo" : "UserInfo.CustomPhoto"))), t && _?.fallbackPhoto && a.Ay.createElement("div", {
                        className: (0, l.A)(B, (X || ee) && F)
                    }, a.Ay.createElement("div", {
                        className: O,
                        onClick: function() {
                            X && (W(!0), Z(H.length - 1))
                        }
                    }, !ee && a.Ay.createElement(v.A, {
                        photo: _.fallbackPhoto,
                        className: "R7w3H5eC",
                        size: "mini"
                    }), z(_.fallbackPhoto.isVideo ? "UserInfo.PublicVideo" : "UserInfo.PublicPhoto"))), a.Ay.createElement(f.Ay, {
                        activeKey: Q,
                        name: Y
                    }, re), !X && a.Ay.createElement("button", {
                        type: "button",
                        dir: z.isRtl ? "rtl" : void 0,
                        className: (0, l.A)(U, "RQITz4WQ"),
                        "aria-label": z("AccDescrPrevious"),
                        onClick: ae
                    }), !ee && a.Ay.createElement("button", {
                        type: "button",
                        dir: z.isRtl ? "rtl" : void 0,
                        className: (0, l.A)(U, "_0F1Txru"),
                        "aria-label": z("Next"),
                        onClick: oe
                    })), a.Ay.createElement("div", {
                        className: "UcyW7tVh",
                        dir: z.isRtl ? "rtl" : "auto"
                    }, (s || b) && a.Ay.createElement(E.A, {
                        peer: s || b,
                        withEmojiStatus: !0,
                        emojiStatusSize: 24,
                        onEmojiStatusClick: ne,
                        noLoopLimit: !0,
                        canCopyTitle: !0
                    }), function() {
                        if (!(0, r.Qe)(k)) return s ? a.Ay.createElement("div", {
                            className: (0, l.A)(L, "status", (0, r.PF)(s, C) && "online")
                        }, a.Ay.createElement("span", {
                            className: "_HDVUj4P",
                            dir: "auto"
                        }, (0, r.CD)(z, s, C)), C?.isReadDateRestrictedByMe && a.Ay.createElement("span", {
                            className: "Qga38M20",
                            onClick: ie
                        }, a.Ay.createElement("span", null, z("StatusHiddenShow")))) : a.Ay.createElement("span", {
                            className: (0, l.A)(L, "status"),
                            dir: "auto"
                        }, (0, r.WX)(b) ? z("Subscribers", b.membersCount ?? 0, "i") : z("Members", b.membersCount ?? 0, "i"))
                    }()));

                    function re(e) {
                        const t = H.length > 0 ? H[Q] : void 0;
                        return a.Ay.createElement(x, {
                            key: Q,
                            user: s,
                            chat: b,
                            photo: t,
                            canPlayVideo: Boolean(e && n),
                            onClick: te
                        })
                    }
                })))
        },
        45603: (e, t, n) => {
            n.d(t, {
                A: () => m
            });
            var a = n(84051),
                o = n(97335),
                i = n(59589),
                r = n(87357),
                s = n(62587),
                l = n(37960),
                c = n(87412),
                d = n(61911);
            const m = (0, a.ph)((e => {
                let {
                    reaction: t,
                    availableReactions: n,
                    className: m,
                    size: u,
                    withIconHeart: A,
                    observeIntersection: h
                } = e;
                const p = "documentId" in t,
                    g = (0, a.Kr)((() => n?.find((e => (0, i.a0)(e.reaction, t)))), [n, t]),
                    y = g?.staticIcon?.id,
                    f = (0, s.A)(`document${y}`, !y, o.qZ.BlobUrl),
                    v = (0, l.A)(f),
                    E = "emoticon" in t && "🦄" === t.emoticon,
                    C = A && "emoticon" in t && "❤" === t.emoticon;
                return p ? a.Ay.createElement(c.A, {
                    documentId: t.documentId,
                    className: (0, r.A)("ReactionStaticEmoji", m),
                    size: u,
                    observeIntersectionForPlaying: h
                }) : C ? a.Ay.createElement("i", {
                    className: "ReactionStaticEmoji icon icon-heart",
                    style: `font-size: ${u}px; width: ${u}px`
                }) : a.Ay.createElement("img", {
                    className: (0, r.A)("ReactionStaticEmoji", E && "with-unicorn-fix", v, m),
                    style: u ? `width: ${u}px; height: ${u}px` : void 0,
                    src: f || d,
                    alt: g?.title,
                    draggable: !1
                })
            }))
        },
        94285: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(84051),
                o = n(13439),
                i = n(87357),
                r = n(17712),
                s = n(59030),
                l = n(64493),
                c = n(40664),
                d = n(8410),
                m = n(98033);
            const u = (0, a.ph)((e => {
                let {
                    isOpen: t,
                    subject: n = "messages",
                    peerId: u,
                    photo: A,
                    messageIds: h,
                    storyId: p,
                    onClose: g,
                    onCloseAnimationEnd: y
                } = e;
                const {
                    reportMessages: f,
                    reportPeer: v,
                    reportProfilePhoto: E,
                    reportStory: C,
                    exitMessageSelectMode: b
                } = (0, o.ko)(), [w, S] = (0, a.J0)("spam"), [I, N] = (0, a.J0)(""), M = (0, r.A)((() => {
                    switch (n) {
                        case "messages":
                            f({
                                messageIds: h,
                                reason: w,
                                description: I
                            }), b();
                            break;
                        case "peer":
                            v({
                                chatId: u,
                                reason: w,
                                description: I
                            });
                            break;
                        case "media":
                            E({
                                chatId: u,
                                photo: A,
                                reason: w,
                                description: I
                            });
                            break;
                        case "story":
                            C({
                                peerId: u,
                                storyId: p,
                                reason: w,
                                description: I
                            })
                    }
                    g()
                })), k = (0, r.A)((e => {
                    S(e)
                })), P = (0, r.A)((e => {
                    N(e.target.value)
                })), T = (0, s.A)(), x = (0, a.Kr)((() => [{
                    value: "spam",
                    label: T("lng_report_reason_spam")
                }, {
                    value: "violence",
                    label: T("lng_report_reason_violence")
                }, {
                    value: "pornography",
                    label: T("lng_report_reason_pornography")
                }, {
                    value: "childAbuse",
                    label: T("lng_report_reason_child_abuse")
                }, {
                    value: "copyright",
                    label: T("ReportPeer.ReasonCopyright")
                }, {
                    value: "illegalDrugs",
                    label: "Illegal Drugs"
                }, {
                    value: "personalDetails",
                    label: "Personal Details"
                }, {
                    value: "other",
                    label: T("lng_report_reason_other")
                }]), [T]);
                if ("messages" === n && !h || "peer" === n && !u || "media" === n && (!u || !A) || "story" === n && (!p || !u)) return;
                const R = T("messages" === n ? "lng_report_message_title" : "ReportPeer.Report");
                return a.Ay.createElement(d.A, {
                    isOpen: t,
                    onClose: g,
                    onEnter: t ? M : void 0,
                    onCloseAnimationEnd: y,
                    className: (0, i.A)("narrow", "story" === n && "component-theme-dark"),
                    title: R
                }, a.Ay.createElement(m.A, {
                    name: "report-message",
                    options: x,
                    onChange: k,
                    selected: w
                }), a.Ay.createElement(c.A, {
                    label: T("lng_report_reason_description"),
                    value: I,
                    onChange: P
                }), a.Ay.createElement("div", {
                    className: "dialog-buttons"
                }, a.Ay.createElement(l.A, {
                    color: "danger",
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: M
                }, T("lng_report_button")), a.Ay.createElement(l.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: g
                }, T("Cancel"))))
            }))
        },
        38102: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(87412),
                i = n(76471);
            const r = (0, a.ph)((e => {
                let {
                    topic: t,
                    className: n,
                    letterClassName: r,
                    size: s,
                    noLoopLimit: l,
                    observeIntersection: c,
                    onClick: d
                } = e;
                return t.iconEmojiId && "0" !== t.iconEmojiId ? a.Ay.createElement(o.A, {
                    documentId: t.iconEmojiId,
                    className: n,
                    size: s,
                    observeIntersectionForPlaying: c,
                    loopLimit: l ? void 0 : 2,
                    onClick: d
                }) : a.Ay.createElement(i.A, {
                    iconColor: t.iconColor,
                    title: t.title,
                    topicId: t.id,
                    className: n,
                    letterClassName: r,
                    onClick: d
                })
            }))
        },
        80477: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(29807),
                s = n(4961),
                l = n(59030),
                c = n(80999);
            const d = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    typingStatus: n
                } = t;
                return n.userId ? {
                    typingUser: (0, r.mBe)(e, n.userId)
                } : {}
            }))((e => {
                let {
                    typingStatus: t,
                    typingUser: n
                } = e;
                const o = (0, l.A)(),
                    r = n && !n.isSelf && (0, i.u0)(n),
                    d = o(t.action).replace("{user}", "").replace("{emoji}", t.emoji || "").trim();
                return a.Ay.createElement("p", {
                    className: "typing-status",
                    dir: o.isRtl ? "rtl" : "auto"
                }, r && a.Ay.createElement("span", {
                    className: "sender-name",
                    dir: "auto"
                }, (0, s.A)(r)), a.Ay.createElement(c.A, {
                    content: d
                }))
            })))
        },
        37378: (e, t, n) => {
            n.d(t, {
                A: () => p
            });
            var a = n(84051),
                o = n(59589),
                i = n(87357),
                r = n(17663),
                s = n(58849),
                l = n(49086),
                c = n(4961),
                d = n(17712),
                m = n(59030),
                u = n(96530),
                A = n(81524),
                h = n(56440);
            const p = (0, a.ph)((e => {
                let {
                    message: t,
                    senderTitle: n,
                    isProtected: p,
                    observeIntersection: g,
                    onMessageClick: y
                } = e;
                const f = (0, m.A)();
                let v = (0, o.T_)(t);
                if (!v) {
                    const e = (0, o.ZD)(t);
                    if (e) {
                        const {
                            url: n,
                            domain: a
                        } = e;
                        v = {
                            siteName: a.replace(/^www./, ""),
                            url: n.includes("://") ? n : n.includes("@") ? `mailto:${n}` : `http://${n}`,
                            formattedDescription: (0, o.P5)(t) !== n ? (0, l.C)(f, t, void 0, void 0, 170) : void 0
                        }
                    }
                }
                const E = (0, d.A)((() => {
                    y(t)
                }));
                if (!v) return;
                const {
                    siteName: C,
                    url: b,
                    displayUrl: w,
                    title: S,
                    description: I,
                    formattedDescription: N,
                    photo: M,
                    video: k
                } = v, P = !n && I && (0, s.A)(I, 170), T = (0, i.A)("WebLink scroll-item", !M && !k && "without-media"), x = b.replace("mailto:", "") || w;
                return a.Ay.createElement("div", {
                    className: T,
                    "data-initial": (C || w)[0],
                    dir: f.isRtl ? "rtl" : void 0
                }, M && a.Ay.createElement(A.A, {
                    message: t,
                    isProtected: p,
                    observeIntersection: g
                }), a.Ay.createElement("div", {
                    className: "content"
                }, a.Ay.createElement(u.A, {
                    isRtl: f.isRtl,
                    className: "site-title",
                    onClick: E
                }, (0, c.A)(S || C || w)), (P || N) && a.Ay.createElement(u.A, {
                    isRtl: f.isRtl,
                    className: "site-description",
                    onClick: E
                }, N || P && (0, c.A)(P)), a.Ay.createElement(h.A, {
                    url: b,
                    className: "site-name",
                    text: x,
                    isRtl: f.isRtl
                }), n && a.Ay.createElement("div", {
                    className: "sender-name"
                }, (0, c.A)(n))), n && a.Ay.createElement("div", {
                    className: "message-date"
                }, a.Ay.createElement(u.A, {
                    className: "date",
                    onClick: E,
                    isRtl: f.isRtl
                }, (0, r.be)(f, 1e3 * t.date))))
            }))
        },
        91930: (e, t, n) => {
            n.d(t, {
                A: () => k,
                b: () => M
            });
            var a = n(84051),
                o = n(31481),
                i = n(59589),
                r = n(3544),
                s = n(87357),
                l = n(91034),
                c = n(76023),
                d = n(35049),
                m = n(4961),
                u = n(18501),
                A = n(11217),
                h = n(5912),
                p = n(62587),
                g = n(59030),
                y = n(22867),
                f = n(64154),
                v = n(95685),
                E = n(42452),
                C = n(18276),
                b = n(27860),
                w = n(18653),
                S = n(39877);
            const I = " ",
                N = e => {
                    let {
                        className: t,
                        message: n,
                        replyInfo: l,
                        sender: N,
                        senderChat: M,
                        forwardSender: k,
                        title: P,
                        customText: T,
                        isProtected: x,
                        isInComposer: R,
                        noUserColors: L,
                        chatTranslations: B,
                        requestedChatTranslationLanguage: O,
                        observeIntersectionForLoading: F,
                        observeIntersectionForPlaying: D,
                        onClick: U
                    } = e;
                    const K = (0, a.li)(null),
                        j = (0, h.Vz)(K, F),
                        $ = (0, a.Kr)((() => {
                            const e = "message" === l?.type && l.replyMedia || n?.content;
                            if (e) return {
                                content: e
                            }
                        }), [n, l]),
                        z = $ && (0, i.EO)($, "pictogram"),
                        _ = (0, p.A)(z, !j),
                        J = (0, y.A)($),
                        H = Boolean(n && (0, i.lk)(n)),
                        V = Boolean(n && (0, i.y2)(n)),
                        q = Boolean("message" === l?.type && l.isQuote),
                        G = "message" === l?.type ? l.replyFrom : void 0,
                        W = n && (0, i.ZR)(n),
                        {
                            translatedText: Y
                        } = (0, f.A)(B, n?.chatId, W ? n?.id : void 0, O),
                        Q = (0, g.A)(),
                        Z = N ? (0, i.qg)(Q, N) : G?.hiddenUserName || n?.forwardInfo?.hiddenUserName,
                        X = M ? (0, i.qg)(Q, M) : void 0,
                        ee = k ? (0, i.qg)(Q, k) : n?.forwardInfo?.hiddenUserName,
                        te = N && N.id === k?.id,
                        {
                            handleClick: ne,
                            handleMouseDown: ae
                        } = (0, A.Q)(U);
                    return a.Ay.createElement("div", {
                        ref: K,
                        className: (0, s.A)("EmbeddedMessage", t, (0, d.y)(N, L, !0), q && "is-quote", J && "with-thumb"),
                        dir: Q.isRtl ? "rtl" : void 0,
                        onClick: ne,
                        onMouseDown: ae
                    }, a.Ay.createElement("div", {
                        className: "hover-effect"
                    }), a.Ay.createElement(E.A, null), J && function(e, t, n, o, i) {
                        const {
                            width: r,
                            height: l
                        } = (0, c.mr)(), d = t || e;
                        return a.Ay.createElement("div", {
                            className: (0, s.A)("embedded-thumb", n && "round")
                        }, !i && a.Ay.createElement("img", {
                            src: d,
                            width: r,
                            height: l,
                            alt: "",
                            className: "pictogram",
                            draggable: !1
                        }), a.Ay.createElement(b.A, {
                            thumbDataUri: d,
                            isVisible: Boolean(i),
                            width: r,
                            height: l
                        }), o && a.Ay.createElement("span", {
                            className: "protector"
                        }))
                    }(J, _, H, x, V), N?.color?.backgroundEmojiId && a.Ay.createElement(S.A, {
                        emojiDocumentId: N.color.backgroundEmojiId,
                        className: "EmbeddedMessage--background-icons"
                    }), a.Ay.createElement("div", {
                        className: "message-text"
                    }, a.Ay.createElement("p", {
                        className: (0, s.A)("embedded-text-wrapper", q && "multiline")
                    }, "message" === l?.type && l.quoteText ? (0, u.f)({
                        text: l.quoteText.text,
                        entities: l.quoteText.entities,
                        noLineBreaks: R,
                        emojiSize: 17
                    }) : n ? (0, i._P)(n) ? a.Ay.createElement(v.A, {
                        message: n,
                        isEmbedded: !0,
                        observeIntersectionForLoading: F,
                        observeIntersectionForPlaying: D
                    }) : a.Ay.createElement(w.A, {
                        lang: Q,
                        message: n,
                        noEmoji: Boolean(J),
                        translatedText: Y,
                        observeIntersectionForLoading: F,
                        observeIntersectionForPlaying: D,
                        emojiSize: 17
                    }) : T || function(e) {
                        if (!e || e.content.text) return I;
                        const t = (0, r.GG)(Q, e.content);
                        return t && t !== o.bVP ? a.Ay.createElement("span", null, (0, m.A)(t)) : I
                    }($) || I), a.Ay.createElement("div", {
                        className: "message-title"
                    }, function() {
                        if (P) return (0, m.A)(P);
                        if (!Z) return I;
                        let e;
                        M && ((0, i.WX)(M) && (e = "channel-filled"), (0, i.YE)(M) && (e = "group-filled"));
                        const t = R && Boolean(l && "quoteText" in l && l?.quoteText);
                        return a.Ay.createElement(a.Ay.Fragment, null, (!M || !!(0, i.L8)(M?.id) || M.id !== N?.id) && a.Ay.createElement("span", {
                            className: "embedded-sender"
                        }, (0, m.A)(t ? Q("ReplyToQuote", Z) : Z)), e && a.Ay.createElement(C.A, {
                            name: e,
                            className: "embedded-chat-icon"
                        }), e && X && a.Ay.createElement("span", {
                            className: "embedded-sender-chat"
                        }, (0, m.A)(X)))
                    }(), ee && !te && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(C.A, {
                        name: k ? "share-filled" : "forward",
                        className: "embedded-origin-icon"
                    }), (0, m.A)(ee)))))
                },
                M = (0, l.A)(N),
                k = N
        },
        39877: (e, t, n) => {
            n.d(t, {
                A: () => v
            });
            var a = n(84051),
                o = n(66644),
                i = n(59589),
                r = n(87357),
                s = n(87679),
                l = n(76023),
                c = n(86974),
                d = n(32706),
                m = n(17712),
                u = n(62587),
                A = n(59030),
                h = n(93545),
                p = n(38691),
                g = n(47483);
            const y = [{
                    inline: 22,
                    block: 38,
                    opacity: .35,
                    scale: .75
                }, {
                    inline: 32,
                    block: 12,
                    opacity: .3,
                    scale: 1
                }, {
                    inline: 60,
                    block: 22,
                    opacity: .25,
                    scale: .75
                }, {
                    inline: 75,
                    block: 44,
                    opacity: .25,
                    scale: 1
                }, {
                    inline: 75,
                    block: 2,
                    opacity: .2,
                    scale: .625
                }, {
                    inline: 95,
                    block: 18,
                    opacity: .2,
                    scale: 1
                }, {
                    inline: 115,
                    block: 38,
                    opacity: .2,
                    scale: .625
                }, {
                    inline: 125,
                    block: 12,
                    opacity: .1,
                    scale: .75
                }],
                f = l.$,
                v = (0, a.ph)((e => {
                    let {
                        emojiDocumentId: t,
                        className: n
                    } = e;
                    const l = (0, a.li)(null),
                        v = (0, a.li)(null),
                        [E, C] = (0, a.J0)(),
                        b = (0, p.A)(),
                        w = (0, A.A)(),
                        {
                            customEmoji: S
                        } = (0, g.A)(t),
                        I = S ? (0, i.Mw)(S, "preview") : void 0,
                        N = (0, u.A)(I),
                        M = (0, c.A)(v),
                        k = (0, d.KE)((() => {
                            N && (0, s.NN)(N).then(C)
                        }), [N]);
                    (0, a.vJ)((() => {
                        k()
                    }), [k]);
                    const P = (0, m.A)((() => {
                            const e = l.current;
                            if (!e || !E || !M) return;
                            const t = e.getContext("2d"),
                                {
                                    width: n,
                                    height: a
                                } = e;
                            t.clearRect(0, 0, n, a), y.forEach((e => {
                                let {
                                    inline: a,
                                    block: o,
                                    opacity: i,
                                    scale: r
                                } = e;
                                const s = (w.isRtl ? a : n / b - a) * b,
                                    l = o * b,
                                    c = f * b;
                                t.save(), t.globalAlpha = i, t.translate(s, l), t.scale(r, r), t.drawImage(E, -c / 2, -c / 2, c, c), t.restore()
                            }));
                            const o = `${M}${S.isLottie?"ff":"bb"}`;
                            t.save(), t.fillStyle = o, t.globalCompositeOperation = "source-atop", t.fillRect(0, 0, n, a), t.restore()
                        })),
                        T = (0, d.KE)(P, [P]);
                    (0, a.vJ)((() => {
                        T()
                    }), [E, w.isRtl, M, T]);
                    const x = (0, d.KE)(((e, t) => {
                            (0, o.RK)((() => {
                                const n = l.current;
                                n && (n.width = e * b, n.height = t * b, n.style.width = `${e}px`, n.style.height = `${t}px`, P())
                            }))
                        }), [b]),
                        R = (0, d.KE)((e => {
                            const {
                                width: t,
                                height: n
                            } = e.contentRect;
                            x(t, n)
                        }), [x]);
                    return (0, h.A)(v, R), (0, a.vJ)((() => {
                        const e = v.current;
                        if (!e) return;
                        const {
                            width: t,
                            height: n
                        } = e.getBoundingClientRect();
                        x(t, n)
                    }), [x]), a.Ay.createElement("div", {
                        className: (0, r.A)("pTWe_CYU", n),
                        ref: v
                    }, a.Ay.createElement("canvas", {
                        ref: l
                    }))
                }))
        },
        55317: (e, t, n) => {
            function a(e, t) {
                const {
                    level: n,
                    boosts: a,
                    currentLevelBoosts: o,
                    nextLevelBoosts: i,
                    hasMyBoost: r,
                    prepaidGiveaways: s
                } = e, l = t && a === o && r;
                return {
                    currentLevel: l ? n - 1 : n,
                    hasNextLevel: Boolean(i),
                    boosts: a,
                    levelProgress: !i || l ? 1 : (a - o) / (i - o),
                    remainingBoosts: i ? i - a : 0,
                    isMaxLevel: void 0 === i,
                    prepaidGiveaways: s
                }
            }
            n.d(t, {
                z: () => a
            })
        },
        24899: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var a = n(31481);

            function o(e, t) {
                return t ? `${a.jsp}${e}` : `@${e}`
            }
        },
        49086: (e, t, n) => {
            n.d(t, {
                C: () => m,
                V: () => d
            });
            var a = n(97335),
                o = n(59589),
                i = n(3544),
                r = n(50140),
                s = n(58849),
                l = n(4961),
                c = n(18501);

            function d(e) {
                let {
                    message: t,
                    highlight: n,
                    emojiSize: a,
                    isSimple: i,
                    truncateLength: l,
                    isProtected: d,
                    forcePlayback: m,
                    shouldRenderAsHtml: u,
                    isForMediaViewer: A
                } = e;
                const {
                    text: h,
                    entities: p
                } = t.content.text || {};
                if (!h) {
                    const e = (0, o.P5)(t);
                    return e ? [(0, s.A)(e, l)] : void 0
                }
                const g = (0, r.bj)(t);
                return (0, c.f)({
                    text: (0, s.A)(h, l),
                    entities: p,
                    highlight: n,
                    emojiSize: a,
                    shouldRenderAsHtml: u,
                    containerId: `${A?"mv-":""}${g}`,
                    isSimple: i,
                    isProtected: d,
                    forcePlayback: m
                })
            }

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.vs;
                const {
                    entities: c
                } = t.content.text || {}, m = c?.some((e => e.type === a.C7.Spoiler)), u = c?.some((e => e.type === a.C7.CustomEmoji));
                if (!m && !u) {
                    const a = (0, s.A)((0, i.dS)(e, t, n), r);
                    return o ? (0, l.A)(a, ["emoji", "highlight"], {
                        highlight: o
                    }) : (0, l.A)(a)
                }
                const A = !n && (0, i.Su)(t),
                    h = A ? `${A} ` : "",
                    p = d({
                        message: t,
                        highlight: o,
                        isSimple: !0,
                        truncateLength: r
                    }),
                    g = (0, i.oL)(e, t, p);
                return [...(0, l.A)(h), ...Array.isArray(g) ? g : [g]].filter(Boolean)
            }
        },
        79582: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(13439),
                o = n(29807),
                i = n(87894);
            const r = 3e9,
                s = 3e8;

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                const l = (0, a.mS)();
                return (0, i.My)(e, (e => {
                    const a = (0, o.hds)(l, e);
                    if (!a) return 0;
                    let i = 0;
                    const c = (0, o.yHC)(l, e);
                    return c && (i += c.date), t && a.isVerified && (i += r), n && n.includes(e) && (i = Date.now() + s + (n.length - n.indexOf(e))), i
                }), "desc")
            }
        },
        44784: (e, t, n) => {
            n.d(t, {
                A: () => X
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(31481),
                s = n(59589),
                l = n(29807),
                c = n(85982),
                d = n(64713),
                m = n(37836),
                u = n(83868),
                A = n(79882),
                h = n(24899),
                p = n(4961),
                g = n(82117),
                y = n(17712),
                f = n(62587),
                v = n(59030),
                E = n(38691),
                C = n(32754),
                b = n(22720),
                w = n(55158),
                S = n(63152),
                I = n(66644),
                N = n(87357),
                M = n(17663);
            const k = 1440,
                P = 10080;

            function T() {
                const e = new Date;
                e.setHours(0, 0, 0, 0);
                const t = e.getDay(),
                    n = e.getDate() - t + (0 === t ? -6 : 1);
                return new Date(e.setDate(n)).getTime()
            }

            function x(e, t) {
                if (0 === t) return e;
                const n = [];
                for (const a of e) {
                    let e = (a.startMinute + t) % P,
                        o = (a.endMinute + t) % P;
                    e < 0 && (e += P), o <= 0 && (o += P), e > o ? (n.push({
                        startMinute: e,
                        endMinute: 10079
                    }), n.push({
                        startMinute: 0,
                        endMinute: o
                    })) : n.push({
                        startMinute: e,
                        endMinute: o
                    })
                }
                return n.sort(((e, t) => e.startMinute - t.startMinute)), n.reduce(((e, t) => {
                    const n = e[e.length - 1];
                    return n && n.endMinute >= t.startMinute ? n.endMinute = Math.max(n.endMinute, t.endMinute) : e.push(t), e
                }), [])
            }
            var R = n(82393),
                L = n(98255),
                B = n(32625),
                O = n(19129),
                F = n(37661),
                D = n(30857),
                U = n(41036),
                K = n(18276);
            const j = "MPBKHdZL",
                $ = Array.from({
                    length: 7
                }, ((e, t) => t)),
                z = (0, a.ph)((e => {
                    let {
                        businessHours: t
                    } = e;
                    const n = (0, a.li)(null),
                        [o, i, r] = (0, F.A)(!1),
                        [s, l, c] = (0, F.A)(!1),
                        d = (0, v.A)(),
                        m = (0, D.A)();
                    (0, B.A)(m, 6e4);
                    const u = (0, L.A)((e => e.timezones?.byId)),
                        A = (0, O.A)(u, [u]),
                        h = (0, a.Kr)((() => {
                            if (!A) return 0;
                            const e = A[t.timezoneId];
                            return (-60 * (new Date).getTimezoneOffset() - e.utcOffset) / 60
                        }), [t.timezoneId, A]),
                        p = (0, a.Kr)((() => {
                            const e = T(),
                                n = function(e) {
                                    const t = {};
                                    for (const n of e) {
                                        const e = n.startMinute,
                                            a = n.endMinute,
                                            o = Math.floor(e / k),
                                            i = Math.floor((a - 1) / k);
                                        for (let n = o; n <= i; n++) t[n] || (t[n] = []), t[n].push({
                                            startMinute: Math.max(0, e - n * k),
                                            endMinute: Math.min(k, a - n * k)
                                        })
                                    }
                                    return t
                                }(x(t.workHours, s ? h : 0)),
                                a = {};
                            return $.forEach((t => {
                                const o = n[t];
                                a[t] = o ? o.map((t => {
                                    let {
                                        startMinute: n,
                                        endMinute: a
                                    } = t;
                                    return a - n == 1440 ? d("BusinessHoursDayFullOpened") : `${(0,M.fU)(d,e+60*n*1e3)} – ${(0,M.fU)(d,e+60*a*1e3)}`
                                })) : [d("BusinessHoursDayClosed")]
                            })), a
                        }), [t.workHours, s, d, h]),
                        g = (0, a.Kr)((() => {
                            const e = x(t.workHours, h),
                                n = T(),
                                a = ((new Date).getTime() - n) / 1e3 / 60;
                            return e.some((e => {
                                let {
                                    startMinute: t,
                                    endMinute: n
                                } = e;
                                return t <= a && a <= n
                            }))
                        }), [t.workHours, h]),
                        f = (0, a.Kr)((() => (new Date(Date.now() - (s ? 0 : 60 * h * 1e3)).getDay() + 6) % 7), [s, h]),
                        E = (0, y.A)((() => {
                            o ? r() : i()
                        })),
                        C = (0, y.A)((e => {
                            e.stopPropagation(), s ? c() : l()
                        }));
                    (0, a.vJ)((() => {
                        if (!o) return;
                        const e = document.querySelector(`.${U.uo} > .${j}`);
                        if (!e) return;
                        const t = e.offsetHeight;
                        (0, I.RK)((() => {
                            n.current.style.height = `${t}px`
                        }))
                    }), [o]);
                    const w = (0, y.A)((() => {
                        const e = document.querySelector(`.${U.VY} > .${j}`);
                        (0, I.YS)((() => {
                            const t = e.offsetHeight;
                            (0, I.RK)((() => {
                                n.current.style.height = `${t}px`
                            }))
                        }))
                    }));
                    return a.Ay.createElement(b.A, {
                        icon: "clock",
                        iconClassName: "rlM4Mbnn",
                        multiline: !0,
                        className: "Ef_0p5Qm",
                        isStatic: o,
                        ripple: !0,
                        narrow: !0,
                        withColorTransition: !0,
                        onClick: E
                    }, a.Ay.createElement("div", {
                        className: "nHSmCUNs"
                    }, a.Ay.createElement("div", {
                        className: "JTZ8UnnP"
                    }, a.Ay.createElement("div", null, d("BusinessHoursProfile")), a.Ay.createElement("div", {
                        className: (0, N.A)("JVL7ZnnJ", g && "segAfYXs")
                    }, d(g ? "BusinessHoursProfileNowOpen" : "BusinessHoursProfileNowClosed"))), a.Ay.createElement(K.A, {
                        className: "dYxw2cFn",
                        name: o ? "up" : "down"
                    })), o && a.Ay.createElement("div", {
                        className: "lp9VIV1o"
                    }, Boolean(h) && a.Ay.createElement("div", {
                        className: "gVwflFhz",
                        role: "button",
                        tabIndex: 0,
                        onMouseDown: R.TF ? void 0 : C,
                        onClick: R.TF ? C : void 0
                    }, d(s ? "BusinessHoursProfileSwitchMy" : "BusinessHoursProfileSwitchLocal")), a.Ay.createElement(U.Ay, {
                        className: "WKgL_XiP",
                        ref: n,
                        name: "fade",
                        activeKey: Number(s),
                        onStart: w
                    }, a.Ay.createElement("dl", {
                        className: j
                    }, $.map((e => a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("dt", {
                        className: (0, N.A)("cmxPqAof", e === f && "YZVvP_56")
                    }, (0, M.wv)(d, 6 === e ? 0 : e + 1)), a.Ay.createElement("dd", {
                        className: "Rs0VPgpq"
                    }, p[e].map((e => a.Ay.createElement("div", null, e)))))))))))
                }));
            var _ = n(87894),
                J = n(58554),
                H = n(14737),
                V = n(6413);
            const q = ["🎉", "🎆", "🎈"],
                G = (0, a.ph)((0, o.EK)((e => {
                    const {
                        birthdayNumbers: t,
                        animatedEmojiEffects: n
                    } = e;
                    return {
                        birthdayNumbers: t,
                        animatedEmojiEffects: n,
                        isPremiumPurchaseBlocked: (0, l.n_C)(e)
                    }
                }))((e => {
                    let {
                        user: t,
                        birthday: n,
                        isPremiumPurchaseBlocked: r,
                        birthdayNumbers: l,
                        animatedEmojiEffects: c,
                        isInSettings: d
                    } = e;
                    const {
                        openGiftPremiumModal: m,
                        requestConfetti: u
                    } = (0, o.ko)(), A = (0, a.li)(null), h = (0, a.li)(!1), [g, f, E] = (0, F.A)(), C = (0, v.A)(), {
                        formattedDate: w,
                        isToday: S,
                        age: k
                    } = (0, a.Kr)((() => {
                        const e = new Date,
                            t = new Date;
                        return n.year && t.setFullYear(n.year), t.setMonth(n.month - 1), t.setDate(n.day), t.setHours(0, 0, 0, 0), {
                            formattedDate: (0, M.A)(t, C.code, !0, "long"),
                            isToday: t.getDate() === e.getDate() && t.getMonth() === e.getMonth(),
                            age: n.year && W(t)
                        }
                    }), [n, C]), P = (0, a.Kr)((() => {
                        if (!k || !S) return;
                        const e = l?.stickers?.filter((e => {
                            let {
                                emoji: t
                            } = e;
                            return t?.endsWith("️⃣")
                        }));
                        if (!e) return;
                        const t = (0, _.dU)(e, "emoji");
                        return k.toString().split("").map((e => t[e + "️⃣"]))
                    }), [k, l?.stickers, S]), T = (0, a.Kr)((() => {
                        if (!S) return;
                        const e = q[Math.floor(Math.random() * q.length)];
                        return c?.stickers?.find((t => {
                            let {
                                emoji: n
                            } = t;
                            return n === e
                        }))
                    }), [c?.stickers, S]);
                    (0, a.vJ)((() => {
                        if (S && P && (P.forEach((e => {
                                const t = (0, s.Mw)(e, "preview");
                                J.hd(t, i.qZ.BlobUrl)
                            })), T)) {
                            const e = (0, s.Mw)(T, "preview");
                            J.hd(e, i.qZ.BlobUrl)
                        }
                    }), [T, S, P]), (0, H.A)(E, g ? 3e3 : void 0), (0, a.vJ)((() => {
                        if (g) {
                            h.current = !0;
                            const e = document.getElementById(d ? "LeftColumn" : "RightColumn");
                            if (!e) return;
                            (0, I.YS)((() => {
                                const {
                                    top: t,
                                    left: n,
                                    width: a,
                                    height: o
                                } = e.getBoundingClientRect();
                                u({
                                    top: t,
                                    left: n,
                                    width: a,
                                    height: o,
                                    style: "top-down"
                                })
                            }))
                        }
                    }), [d, g]);
                    const x = `ProfileBirthday${S?"Today":""}Value${k?"Year":""}`,
                        L = S && !t.isPremium && !t.isSelf && !r,
                        B = (0, y.A)((() => {
                            m({
                                forUserIds: [t.id]
                            })
                        })),
                        O = (0, y.A)((() => {
                            S && (L && h.current ? B() : f())
                        })),
                        D = !S && !L;
                    return a.Ay.createElement("div", {
                        className: "wCp6TBYF"
                    }, a.Ay.createElement(b.A, {
                        icon: "calendar",
                        secondaryIcon: L ? "gift" : void 0,
                        secondaryIconClassName: "c4HDQNGJ",
                        multiline: !0,
                        narrow: !0,
                        ref: A,
                        ripple: !D,
                        onClick: O,
                        isStatic: D,
                        onSecondaryIconClick: B
                    }, a.Ay.createElement("div", {
                        className: "title"
                    }, (0, p.A)(C(x, [w, k], void 0, k))), a.Ay.createElement("span", {
                        className: "subtitle"
                    }, C(S ? "ProfileBirthdayToday" : "ProfileBirthday"))), g && R.ol && P?.map(((e, t) => a.Ay.createElement("div", {
                        className: (0, N.A)("lQeU96Fj", t > 0 && "e1ezfWJb"),
                        style: `--digit-offset: ${t}`
                    }, a.Ay.createElement(V.A, {
                        containerRef: A,
                        sticker: e,
                        size: 128,
                        forceAlways: !0
                    })))), g && T && a.Ay.createElement("div", {
                        className: "cFEXGUih"
                    }, a.Ay.createElement(V.A, {
                        containerRef: A,
                        sticker: T,
                        size: 288,
                        shouldLoop: !0,
                        forceAlways: !0
                    })))
                })));

            function W(e) {
                const t = new Date;
                let n = t.getFullYear() - e.getFullYear();
                const a = t.getMonth() - e.getMonth();
                return (a < 0 || 0 === a && t.getDate() < e.getDate()) && n--, n
            }
            const Y = "UZbkeFDB",
                Q = {
                    width: 64,
                    height: 64,
                    zoom: 15
                },
                Z = (0, m.sg)((e => e()), 500, !1),
                X = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatOrUserId: n,
                        isSavedDialog: a
                    } = t;
                    const {
                        countryList: {
                            phoneCodes: o
                        }
                    } = e, i = n ? (0, l.hds)(e, n) : void 0, r = n ? (0, l.mBe)(e, n) : void 0, c = i?.isForum, d = i && (0, s.W1)(i, (0, l.$5S)(e), (0, l.GrP)(e)), {
                        threadId: m
                    } = (0, l.Xf0)(e) || {}, u = c ? Number(m) : void 0, A = i && (0, l.AWZ)(e, i.id), h = r && (0, l.vGo)(e, r.id), p = A?.inviteLink, g = h?.bio || A?.about;
                    return {
                        phoneCodeList: o,
                        chat: i,
                        user: r,
                        userFullInfo: h,
                        canInviteUsers: i && !r && (!(0, s.WX)(i) && !(0, s.Sq)(i, "inviteUsers") || (0, s.ub)(i, "inviteUsers")),
                        isMuted: d,
                        topicId: u,
                        chatInviteLink: p,
                        description: g,
                        topicLink: u ? (0, l.sZk)(e, n, u) : void 0,
                        hasSavedMessages: !a && e.chats.listIds.saved?.includes(n),
                        personalChannel: h?.personalChannelId ? (0, l.hds)(e, h.personalChannelId) : void 0
                    }
                }))((e => {
                    let {
                        chatOrUserId: t,
                        user: n,
                        chat: l,
                        userFullInfo: m,
                        isInSettings: I,
                        canInviteUsers: N,
                        isMuted: M,
                        phoneCodeList: k,
                        topicId: P,
                        description: T,
                        chatInviteLink: x,
                        topicLink: R,
                        hasSavedMessages: L,
                        personalChannel: B
                    } = e;
                    const {
                        showNotification: O,
                        updateChatMutedState: F,
                        updateTopicMutedState: D,
                        loadPeerStories: U,
                        openSavedDialog: K,
                        openMapModal: j,
                        requestCollectibleInfo: $
                    } = (0, o.ko)(), {
                        id: _,
                        usernames: J,
                        phoneNumber: H,
                        isSelf: V
                    } = n || {}, {
                        id: q,
                        usernames: W
                    } = l || {}, X = _ || q, {
                        businessLocation: ee,
                        businessWorkHours: te,
                        personalChannelMessageId: ne,
                        birthday: ae
                    } = m || {}, oe = (0, v.A)(), [ie, re] = (0, a.J0)(!M);
                    (0, a.vJ)((() => {
                        re(!M)
                    }), [M]), (0, g.A)((e => {
                        let [t] = e;
                        X && t !== X && (n || l && (0, s.WX)(l)) && U({
                            peerId: X
                        })
                    }), [X, l, n]);
                    const {
                        width: se,
                        height: le,
                        zoom: ce
                    } = Q, de = (0, E.A)(), me = ee?.geo && (0, s.rt)(ee.geo, se, le, ce, de), ue = (0, f.A)(me), Ae = (0, a.Kr)((() => {
                        if (ee?.geo) return ue ? a.Ay.createElement("img", {
                            src: ue,
                            alt: "",
                            className: Y
                        }) : a.Ay.createElement(w.A, {
                            className: Y
                        })
                    }), [ee, ue]), he = Boolean(P && P !== i.l3), pe = l && (0, s.WX)(l) || n?.isPremium, ge = (0, a.Kr)((() => {
                        const e = J?.filter((e => e.isActive));
                        return e?.length ? e : void 0
                    }), [J]), ye = (0, a.Kr)((() => {
                        const e = n ? void 0 : W?.filter((e => e.isActive));
                        return e?.length ? e : void 0
                    }), [W, n]), fe = (0, a.Kr)((() => {
                        if (l) return he ? R : (0, s.L7)(l) || x
                    }), [l, he, R, x]), ve = (0, y.A)((() => {
                        const {
                            address: e,
                            geo: t
                        } = ee;
                        if (!t) return (0, c.eM)(e), void O({
                            message: oe("BusinessLocationCopied")
                        });
                        j({
                            geoPoint: t,
                            zoom: ce
                        })
                    })), Ee = (0, y.A)((() => {
                        re((e => {
                            const t = !e;
                            return Z((() => {
                                he ? D({
                                    chatId: q,
                                    topicId: P,
                                    isMuted: !t
                                }) : F({
                                    chatId: q,
                                    isMuted: !t
                                })
                            })), t
                        }))
                    })), Ce = (0, y.A)((() => {
                        K({
                            chatId: t
                        })
                    }));

                    function be(e, t) {
                        (0, c.eM)(e), O({
                            message: `${t} was copied`
                        })
                    }
                    const we = H && (0, d.Ox)(k, H),
                        Se = (0, y.A)((() => {
                            H?.length === r.PGI && H.startsWith(r._Bb) ? $({
                                collectible: H,
                                peerId: X,
                                type: "phone"
                            }) : be(we, oe("Phone"))
                        })),
                        Ie = (0, y.A)(((e, t) => {
                            e.isEditable ? be((0, h.A)(e.username, t), oe(t ? "Link" : "Username")) : $({
                                collectible: e.username,
                                peerId: X,
                                type: "username"
                            })
                        }));
                    if (l && !l.isRestricted && (!V || I)) return a.Ay.createElement("div", {
                        className: "ChatExtra"
                    }, B && a.Ay.createElement("div", {
                        className: "HP5EJx7s"
                    }, a.Ay.createElement("h3", {
                        className: "cHyTGri2"
                    }, oe("ProfileChannel")), a.Ay.createElement("span", {
                        className: "kYd2GrmU"
                    }, oe("Subscribers", B.membersCount, "i")), a.Ay.createElement(C.A, {
                        chatId: B.id,
                        orderDiff: 0,
                        animationType: A.I.None,
                        isPreview: !0,
                        previewMessageId: ne,
                        className: "qOJwhXMC"
                    })), Boolean(we?.length) && a.Ay.createElement(b.A, {
                        icon: "phone",
                        multiline: !0,
                        narrow: !0,
                        ripple: !0,
                        onClick: Se
                    }, a.Ay.createElement("span", {
                        className: "title",
                        dir: "auto"
                    }, we), a.Ay.createElement("span", {
                        className: "subtitle"
                    }, oe("Phone"))), ge && Ne(ge), T && Boolean(T.length) && a.Ay.createElement(b.A, {
                        icon: "info",
                        multiline: !0,
                        narrow: !0,
                        isStatic: !0,
                        allowSelection: !0
                    }, a.Ay.createElement("span", {
                        className: "title word-break allow-selection",
                        dir: "auto"
                    }, (0, p.A)(T, ["br", pe ? "links" : "tg_links", "emoji"])), a.Ay.createElement("span", {
                        className: "subtitle"
                    }, oe(_ ? "UserBio" : "Info"))), ye && !he && Ne(ye, !0), (!ye && N || he) && fe && a.Ay.createElement(b.A, {
                        icon: "link",
                        multiline: !0,
                        narrow: !0,
                        ripple: !0,
                        onClick: () => be(fe, oe("SetUrlPlaceholder"))
                    }, a.Ay.createElement("div", {
                        className: "title"
                    }, fe), a.Ay.createElement("span", {
                        className: "subtitle"
                    }, oe("SetUrlPlaceholder"))), ae && a.Ay.createElement(G, {
                        key: X,
                        birthday: ae,
                        user: n,
                        isInSettings: I
                    }), !I && a.Ay.createElement(b.A, {
                        icon: "unmute",
                        ripple: !0,
                        onClick: Ee
                    }, a.Ay.createElement("span", null, oe("Notifications")), a.Ay.createElement(S.A, {
                        id: "group-notifications",
                        label: _ ? "Toggle User Notifications" : "Toggle Chat Notifications",
                        checked: ie,
                        inactive: !0
                    })), te && a.Ay.createElement(z, {
                        businessHours: te
                    }), ee && a.Ay.createElement(b.A, {
                        icon: "location",
                        ripple: !0,
                        multiline: !0,
                        narrow: !0,
                        rightElement: Ae,
                        onClick: ve
                    }, a.Ay.createElement("div", {
                        className: "title"
                    }, ee.address), a.Ay.createElement("span", {
                        className: "subtitle"
                    }, oe("BusinessProfileLocation"))), L && !I && a.Ay.createElement(b.A, {
                        icon: "saved-messages",
                        ripple: !0,
                        onClick: Ce
                    }, a.Ay.createElement("span", null, oe("SavedMessagesTab"))));

                    function Ne(e, t) {
                        const [n, ...o] = e, i = o.length ? oe("UsernameAlso", "%USERNAMES%").split("%").map((e => "USERNAMES" === e ? a.Ay.createElement(a.Ay.Fragment, null, o.map(((e, n) => a.Ay.createElement(a.Ay.Fragment, null, n > 0 ? ", " : "", a.Ay.createElement("a", {
                            key: e.username,
                            href: (0, h.A)(e.username, !0),
                            onMouseDown: u.A,
                            onClick: n => {
                                (0, u.A)(n), Ie(e, t)
                            },
                            className: "text-entity-link username-link"
                        }, (0, h.A)(e.username)))))) : e)) : void 0;
                        return a.Ay.createElement(b.A, {
                            icon: t ? "link" : "mention",
                            multiline: !0,
                            narrow: !0,
                            ripple: !0,
                            onClick: () => {
                                Ie(n, t)
                            }
                        }, a.Ay.createElement("span", {
                            className: "title",
                            dir: "auto"
                        }, (0, h.A)(n.username, t)), a.Ay.createElement("span", {
                            className: "subtitle"
                        }, i && a.Ay.createElement("span", {
                            className: "other-usernames"
                        }, i), oe(t ? "Link" : "Username")))
                    }
                })))
        },
        83594: (e, t, n) => {
            n.d(t, {
                A: () => m
            });
            var a = n(84051),
                o = n(59589),
                i = n(87357),
                r = n(95807),
                s = n(82393),
                l = n(62587),
                c = n(87412);
            const d = "PZAuNVZH",
                m = (0, a.ph)((e => {
                    let {
                        reaction: t,
                        isLottie: n,
                        className: m,
                        particleSize: u,
                        onEnded: A
                    } = e;
                    const h = (0, o.aL)(t.documentId),
                        p = (0, l.A)(n ? void 0 : h),
                        g = (0, a.Kr)((() => s.ol ? Array.from({
                            length: 7
                        }).map((() => function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20;
                            const t = (e / 2 + Math.random() * e * 3) * (Math.random() > .5 ? 1 : -1),
                                n = e + Math.random() * e * 4;
                            return `M 0 0 C 0 0 ${t} ${-n-e} ${t} ${n}`
                        }(u))) : []), [u]);
                    if (p || n) return a.Ay.createElement("div", {
                        className: (0, i.A)("aInga6VW", m),
                        style: (0, r.A)(Boolean(u) && `--particle-size: ${u}px`)
                    }, g.map(((e, o) => {
                        const i = `--offset-path: path('${e}');`;
                        return n ? a.Ay.createElement(c.A, {
                            documentId: t.documentId,
                            className: d,
                            style: i,
                            withSharedAnimation: !0,
                            size: u,
                            onAnimationEnd: 0 === o ? A : void 0
                        }) : a.Ay.createElement("img", {
                            src: p,
                            alt: "",
                            className: d,
                            style: i,
                            draggable: !1,
                            onAnimationEnd: 0 === o ? A : void 0
                        })
                    })))
                }))
        },
        23470: (e, t, n) => {
            n.d(t, {
                A: () => S
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(29807),
                s = n(87357),
                l = n(43336),
                c = n(76023),
                d = n(37661),
                m = n(5912),
                u = n(17712),
                A = n(62587),
                h = n(34201),
                p = n(47483),
                g = n(18104),
                y = n(87412),
                f = n(45603),
                v = n(83594);
            const E = {
                    root: "O9uCTt5C",
                    "animated-icon": "HiI6SMxF",
                    animatedIcon: "HiI6SMxF",
                    effect: "NhFcTGja",
                    animating: "ikfZ6Igz",
                    withEffectOnly: "jjRJmHCg"
                },
                C = 1.5 * c.$,
                b = 6.5 * c.$,
                w = c.$,
                S = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        containerId: n
                    } = t;
                    const {
                        genericEmojiEffects: a,
                        reactions: o
                    } = e, {
                        activeReactions: i
                    } = (0, r.nTw)(e), s = (0, r.xYJ)(e, "reactionEffects");
                    return {
                        activeReactions: i?.[n],
                        availableReactions: o.availableReactions,
                        genericEffects: a,
                        withEffects: s
                    }
                }))((e => {
                    let {
                        containerId: t,
                        reaction: n,
                        className: r,
                        size: c = C,
                        effectSize: S = b,
                        activeReactions: I,
                        availableReactions: N,
                        genericEffects: M,
                        withEffects: k,
                        withEffectOnly: P,
                        shouldPause: T,
                        shouldLoop: x,
                        loopLimit: R,
                        shouldDelayInit: L,
                        observeIntersection: B
                    } = e;
                    const {
                        stopActiveReaction: O
                    } = (0, o.ko)(), F = (0, a.li)(null), D = "documentId" in n, U = (0, a.Kr)((() => N?.find((e => (0, i.a0)(e.reaction, n)))), [N, n]), K = U?.centerIcon?.id, {
                        customEmoji: j
                    } = (0, p.A)(D ? n.documentId : void 0), $ = (0, a.Kr)((() => {
                        if (!D) return U?.aroundAnimation?.id;
                        if (!j) return;
                        const e = N?.find((e => e.reaction.emoticon === j.emoji))?.aroundAnimation?.id;
                        return e
                    }), [U, N, j, D]), z = (0, a.Kr)((() => {
                        if ($) return $;
                        if (!M?.stickers) return;
                        const {
                            stickers: e
                        } = M;
                        return e[Math.floor(Math.random() * e.length)].id
                    }), [$, M]), _ = (0, m.Vz)(F, B), J = K && `sticker${K}`, H = z && `sticker${z}`, V = (0, A.A)(J, !K), q = (0, A.A)(H, !z), G = (0, a.Kr)((() => I?.find((e => (0, i.a0)(e, n)))), [I, n]), W = Boolean(k && G && (D || V) && q), Y = _ && (W && !P || x), {
                        shouldRender: Q,
                        transitionClassNames: Z
                    } = (0, h.A)(W, void 0, !0, "slow"), {
                        shouldRender: X,
                        transitionClassNames: ee
                    } = (0, h.A)(Y, void 0, !0, "slow"), te = (0, u.A)((() => {
                        O({
                            containerId: t,
                            reaction: n
                        })
                    })), [ne, ae, oe] = (0, d.A)(), ie = !(D || Y && ne), {
                        shouldRender: re,
                        transitionClassNames: se
                    } = (0, h.A)(ie, void 0, !0), le = (0, s.A)(E.root, Q && E.animating, P && E.withEffectOnly, r);
                    return a.Ay.createElement("div", {
                        className: le,
                        ref: F
                    }, !P && re && a.Ay.createElement(f.A, {
                        className: se,
                        reaction: n,
                        availableReactions: N,
                        size: c,
                        observeIntersection: B
                    }), !P && D && a.Ay.createElement(y.A, {
                        documentId: n.documentId,
                        className: E.customEmoji,
                        size: c,
                        noPlay: T,
                        loopLimit: R,
                        forceAlways: !L,
                        observeIntersectionForPlaying: B
                    }), X && !D && a.Ay.createElement(g.A, {
                        key: `${K}-${c}`,
                        className: (0, s.A)(E.animatedIcon, ee),
                        size: (0, l.Ki)(1.9 * c),
                        tgsUrl: V,
                        play: _ && !T,
                        noLoop: !x,
                        forceAlways: !L,
                        onLoad: ae,
                        onEnded: oe
                    }), Q && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(g.A, {
                        key: `${z}-${S}`,
                        className: (0, s.A)(E.effect, Z),
                        size: S,
                        tgsUrl: q,
                        play: _,
                        noLoop: !0,
                        forceAlways: !L,
                        onEnded: te
                    }), D && !$ && _ && a.Ay.createElement(v.A, {
                        reaction: n,
                        className: Z,
                        particleSize: Math.max(.5 * c, w),
                        onEnded: te
                    })))
                })))
        },
        97967: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(80089),
                i = n(80464);
            const r = e => {
                const {
                    isOpen: t
                } = e, n = (0, i.A)(o.ar.Extra, "ChatFolderModal", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            }
        },
        97046: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(80089),
                i = n(80464);
            const r = e => {
                const {
                    isOpen: t
                } = e, n = (0, i.A)(o.ar.Extra, "MuteChatModal", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            }
        },
        32754: (e, t, n) => {
            n.d(t, {
                A: () => L
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(89925),
                s = n(59589),
                l = n(26129),
                c = n(29807),
                d = n(87357),
                m = n(66414),
                u = n(82393),
                A = n(98255),
                h = n(43874),
                p = n(47067),
                g = n(49746),
                y = n(37661),
                f = n(5912),
                v = n(17712),
                E = n(34201),
                C = n(53188),
                b = n(21849),
                w = n(54314),
                S = n(34431),
                I = n(81642),
                N = n(94285),
                M = n(22720),
                k = n(97967),
                P = n(97046),
                T = n(24807);
            const x = "AA5s1Pu4",
                R = (0, a.ph)((e => {
                    let {
                        isSelected: t,
                        isActive: n,
                        isMobile: o
                    } = e;
                    return a.Ay.createElement("div", {
                        className: (0, d.A)("byPckqUT", n && "IsUWP16T", t && !o && "qy2i51dM")
                    }, a.Ay.createElement("div", {
                        className: "nl36F75B"
                    }, a.Ay.createElement("div", {
                        className: x
                    }), a.Ay.createElement("div", {
                        className: x
                    }), a.Ay.createElement("div", {
                        className: x
                    })))
                })),
                L = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n,
                        isSavedDialog: a,
                        isPreview: o,
                        previewMessageId: r
                    } = t;
                    const d = (0, c.hds)(e, n);
                    if (!d) return {
                        currentUserId: e.currentUserId
                    };
                    const m = r || (0, c.ZZX)(e, n, a ? "saved" : "all"),
                        u = r ? (0, c.O5q)(e, n, r) : (0, c.yHC)(e, n, a ? "saved" : "all"),
                        {
                            senderId: A,
                            isOutgoing: h,
                            forwardInfo: p
                        } = u || {},
                        g = a ? p?.fromId : A,
                        y = u && (0, l.Q)(u)?.replyToMsgId,
                        f = g ? (0, c.PVB)(e, g) : void 0,
                        v = u ? (0, s.mK)(u) : void 0,
                        E = v && y ? (0, c.O5q)(e, d.id, y) : void 0,
                        {
                            targetUserIds: C,
                            targetChatId: b
                        } = v || {},
                        w = (0, s.e7)(d),
                        {
                            chatId: S,
                            threadId: I,
                            type: N
                        } = (0, c.Xf0)(e) || {},
                        M = !o && n === S && (a ? n === I : I === i.l3),
                        k = d.isForum && n === S || n === (0, c.nTw)(e).forumPanelChatId,
                        P = w ? (0, c.mBe)(e, w) : void 0,
                        T = w ? (0, c.K0y)(e, w) : void 0,
                        x = u && (0, c.nkm)(e, u),
                        R = (0, c.C5H)(e, n, i.l3, "typingStatus");
                    return {
                        chat: d,
                        isMuted: (0, s.W1)(d, (0, c.$5S)(e), (0, c.GrP)(e)),
                        lastMessageSender: f,
                        actionTargetUserIds: C,
                        actionTargetChatId: b,
                        actionTargetMessage: E,
                        draft: (0, c.GA4)(e, n, i.l3),
                        isSelected: M,
                        isSelectedForum: k,
                        isForumPanelOpen: (0, c.clw)(e),
                        canScrollDown: M && "thread" === N,
                        canChangeFolder: (e.chatFolders.orderedIds?.length || 0) > 1,
                        ...h && u && {
                            lastMessageOutgoingStatus: (0, c.Tl2)(e, u)
                        },
                        user: P,
                        userStatus: T,
                        lastMessageTopic: x,
                        typingStatus: R,
                        withInterfaceAnimations: (0, c.PKK)(e),
                        lastMessage: u,
                        lastMessageId: m,
                        currentUserId: e.currentUserId
                    }
                }))((e => {
                    let {
                        chatId: t,
                        folderId: n,
                        orderDiff: l,
                        animationType: x,
                        isPinned: L,
                        observeIntersection: B,
                        chat: O,
                        isMuted: F,
                        user: D,
                        userStatus: U,
                        actionTargetUserIds: K,
                        lastMessageSender: j,
                        lastMessageOutgoingStatus: $,
                        actionTargetMessage: z,
                        actionTargetChatId: _,
                        offsetTop: J,
                        draft: H,
                        withInterfaceAnimations: V,
                        isSelected: q,
                        isSelectedForum: G,
                        isForumPanelOpen: W,
                        canScrollDown: Y,
                        canChangeFolder: Q,
                        lastMessageTopic: Z,
                        typingStatus: X,
                        lastMessageId: ee,
                        lastMessage: te,
                        isSavedDialog: ne,
                        currentUserId: ae,
                        isPreview: oe,
                        previewMessageId: ie,
                        className: re,
                        onDragEnter: se
                    } = e;
                    const {
                        openChat: le,
                        openSavedDialog: ce,
                        toggleChatInfo: de,
                        focusLastMessage: me,
                        focusMessage: ue,
                        loadTopics: Ae,
                        openForumPanel: he,
                        closeForumPanel: pe,
                        setShouldCloseRightColumn: ge
                    } = (0, o.ko)(), {
                        isMobile: ye
                    } = (0, h.Ay)(), [fe, ve, Ee] = (0, y.A)(), [Ce, be, we] = (0, y.A)(), [Se, Ie, Ne] = (0, y.A)(), [Me, ke, Pe] = (0, y.A)(), [Te, xe, Re] = (0, y.A)(), [Le, Be, Oe] = (0, y.A)(), [Fe, De, Ue] = (0, y.A)(), [Ke, je, $e] = (0, y.A)(), {
                        isForum: ze,
                        isForumAsMessages: _e
                    } = O || {};
                    (0, g.A)(ne ? ae : t, ee, te);
                    const {
                        renderSubtitle: Je,
                        ref: He
                    } = (0, C.A)({
                        chat: O,
                        chatId: t,
                        lastMessage: te,
                        typingStatus: X,
                        draft: H,
                        actionTargetMessage: z,
                        actionTargetUserIds: K,
                        actionTargetChatId: _,
                        lastMessageTopic: Z,
                        lastMessageSender: j,
                        observeIntersection: B,
                        animationType: x,
                        withInterfaceAnimations: V,
                        orderDiff: l,
                        isSavedDialog: ne,
                        isPreview: oe
                    }), Ve = (0, A.A)(c.sRo), qe = (0, v.A)((() => {
                        const e = ye && _e;
                        if (ye && ge({
                                value: !0
                            }), oe) ue({
                            chatId: t,
                            messageId: ie
                        });
                        else {
                            if (ne) return ce({
                                chatId: t,
                                noForumTopicPanel: !0
                            }, {
                                forceOnHeavyAnimation: !0
                            }), void(ye && de({
                                force: !1
                            }));
                            if (ze) {
                                if (W) return void pe(void 0, {
                                    forceOnHeavyAnimation: !0
                                });
                                if (e || he({
                                        chatId: t
                                    }, {
                                        forceOnHeavyAnimation: !0
                                    }), !_e) return
                            }
                            le({
                                id: t,
                                noForumTopicPanel: e,
                                shouldReplaceHistory: !0
                            }, {
                                forceOnHeavyAnimation: !0
                            }), q && Y && me()
                        }
                    })), Ge = (0, v.A)((e => {
                        e.preventDefault(), se?.(t)
                    })), We = (0, v.A)((() => {
                        xe(), ve()
                    })), Ye = (0, v.A)((() => {
                        Be(), be()
                    })), Qe = (0, v.A)((() => {
                        De(), Ie()
                    })), Ze = (0, v.A)((() => {
                        je(), ke()
                    })), Xe = (0, p.A)({
                        chat: O,
                        user: D,
                        handleDelete: We,
                        handleMute: Ye,
                        handleChatFolderChange: Qe,
                        handleReport: Ze,
                        folderId: n,
                        isPinned: L,
                        isMuted: F,
                        canChangeFolder: Q,
                        isSavedDialog: ne,
                        currentUserId: ae,
                        isPreview: oe
                    }), et = (0, f.Vz)(He, O ? B : void 0);
                    (0, a.vJ)((() => {
                        et && ze && O && void 0 === O.listedTopicIds && Ae({
                            chatId: t
                        })
                    }), [O, t, ze, et]);
                    const tt = D && U && (0, s.PF)(D, U),
                        {
                            hasShownClass: nt
                        } = (0, E.A)(tt),
                        at = (0, a.Kr)((() => {
                            if (u.OS) return ne ? `#${(0,m.az)(ae,"thread",t)}` : `#${(0,m.az)(t,"thread",i.l3)}`
                        }), [t, ae, ne]);
                    if (!O) return;
                    const ot = D || O,
                        it = (0, d.A)("Chat chat-item-clickable", (0, s.L8)(t) ? "private" : "group", ze && "forum", q && "selected", G && "selected-forum", oe && "standalone", re);
                    return a.Ay.createElement(M.A, {
                        ref: He,
                        className: it,
                        href: at,
                        style: `top: ${J}px`,
                        ripple: !ze && !ye,
                        contextActions: Xe,
                        onClick: qe,
                        onDragEnter: Ge,
                        withPortalForMenu: !0
                    }, a.Ay.createElement("div", {
                        className: (0, d.A)("status", "status-clickable")
                    }, a.Ay.createElement(b.A, {
                        peer: ot,
                        isSavedMessages: D?.isSelf,
                        isSavedDialog: ne,
                        withStory: !D?.isSelf,
                        withStoryGap: nt,
                        storyViewerOrigin: r.G9.ChatList,
                        storyViewerMode: "single-peer"
                    }), a.Ay.createElement("div", {
                        className: "avatar-badge-wrapper"
                    }, a.Ay.createElement("div", {
                        className: (0, d.A)("avatar-online", nt && "avatar-online-shown")
                    }), a.Ay.createElement(T.A, {
                        chat: O,
                        isMuted: F,
                        shouldShowOnlyMostImportant: !0,
                        forceHidden: Ve
                    })), O.isCallActive && O.isCallNotEmpty && a.Ay.createElement(R, {
                        isMobile: ye,
                        isSelected: q,
                        isActive: V
                    })), a.Ay.createElement("div", {
                        className: "info"
                    }, a.Ay.createElement("div", {
                        className: "info-row"
                    }, a.Ay.createElement(S.A, {
                        peer: ot,
                        withEmojiStatus: !0,
                        isSavedMessages: t === D?.id && D?.isSelf,
                        isSavedDialog: ne,
                        observeIntersection: B
                    }), F && !ne && a.Ay.createElement("i", {
                        className: "icon icon-muted"
                    }), a.Ay.createElement("div", {
                        className: "separator"
                    }), te && a.Ay.createElement(I.A, {
                        message: te,
                        outgoingStatus: ne ? void 0 : $,
                        draftDate: H?.date
                    })), a.Ay.createElement("div", {
                        className: "subtitle"
                    }, Je(), !oe && a.Ay.createElement(T.A, {
                        chat: O,
                        isPinned: L,
                        isMuted: F,
                        isSavedDialog: ne
                    }))), Te && a.Ay.createElement(w.A, {
                        isOpen: fe,
                        onClose: Ee,
                        onCloseAnimationEnd: Re,
                        chat: O,
                        isSavedDialog: ne
                    }), Le && a.Ay.createElement(P.A, {
                        isOpen: Ce,
                        onClose: we,
                        onCloseAnimationEnd: Oe,
                        chatId: t
                    }), Fe && a.Ay.createElement(k.A, {
                        isOpen: Se,
                        onClose: Ne,
                        onCloseAnimationEnd: Ue,
                        chatId: t
                    }), Ke && a.Ay.createElement(N.A, {
                        isOpen: Me,
                        onClose: Pe,
                        onCloseAnimationEnd: $e,
                        peerId: t,
                        subject: "peer"
                    }))
                })))
        },
        24807: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(84051),
                o = n(87357),
                i = n(22237),
                r = n(14242),
                s = n(19129),
                l = n(68292),
                c = n(26607);
            const d = (0, a.ph)((e => {
                let {
                    topic: t,
                    chat: n,
                    isPinned: d,
                    isMuted: m,
                    shouldShowOnlyMostImportant: u,
                    wasTopicOpened: A,
                    forceHidden: h,
                    isSavedDialog: p
                } = e;
                const {
                    unreadMentionsCount: g = 0,
                    unreadReactionsCount: y = 0
                } = n.isForum ? {} : n, f = !d && t && !A, v = n.isForum && !t, E = (0, a.Kr)((() => v && n?.topics ? Object.values(n.topics).filter((e => {
                    let {
                        unreadCount: t
                    } = e;
                    return t
                })) : void 0), [n, v]), C = (0, a.Kr)((() => v ? m && E?.filter((e => !1 === e.isMuted)).length || E?.length : (t || n).unreadCount), [n, t, E, v, m]), b = (0, a.Kr)((() => {
                    const e = n.topics && Object.values(n.topics).some((e => !e.isMuted && e.unreadCount));
                    return m || n.topics && !e
                }), [n, m]), w = !t && n.hasUnreadMark, S = !(0, s.A)((() => (0, i.Hp)(h) ? h() : h), [h]) && Boolean(C || g || w || d || y || f), I = Boolean((C || w) && !p), N = (0, o.A)("ChatBadge", b && "muted", !I && d && "pinned", I && "unread");
                return a.Ay.createElement(c.A, {
                    isCustom: !0,
                    className: "ChatBadge-transition",
                    isOpen: S
                }, function() {
                    const e = y && a.Ay.createElement("div", {
                            className: (0, o.A)("ChatBadge reaction", b && "muted")
                        }, a.Ay.createElement("i", {
                            className: "icon icon-heart"
                        })),
                        t = g && a.Ay.createElement("div", {
                            className: "ChatBadge mention"
                        }, a.Ay.createElement("i", {
                            className: "icon icon-mention"
                        })),
                        n = f && a.Ay.createElement("div", {
                            className: (0, o.A)("ChatBadge unopened", b && "muted")
                        }),
                        i = w || C ? a.Ay.createElement("div", {
                            className: N
                        }, !w && a.Ay.createElement(l.A, {
                            text: (0, r.Vw)(C)
                        })) : void 0,
                        s = d && a.Ay.createElement("div", {
                            className: N
                        }, a.Ay.createElement("i", {
                            className: "icon icon-pinned-chat"
                        })),
                        c = [n, e, t, i, !i && !t && !e && s].filter(Boolean);
                    return p ? s : 0 !== c.length ? 1 === c.length ? c[0] : u ? [t, i, e, s].filter(Boolean)[0] : a.Ay.createElement("div", {
                        className: "ChatBadge-wrapper"
                    }, c) : void 0
                }())
            }))
        },
        62830: (e, t, n) => {
            n.d(t, {
                A: () => z
            });
            var a = n(84051),
                o = n(13439),
                i = n(89925),
                r = n(31481),
                s = n(87357),
                l = n(49763),
                c = n(80140),
                d = n(82393),
                m = n(23459),
                u = n(66644),
                A = n(9718),
                h = n(16581),
                p = n(17712),
                g = n(74984),
                y = n(2178),
                f = n(96374),
                v = n(5912),
                E = n(9717),
                C = n(46222),
                b = n(52745),
                w = n(59589),
                S = n(87894),
                I = n(14242),
                N = n(4961),
                M = n(59030),
                k = n(24713),
                P = n(22720);
            const T = {
                    root: "sG8AAzvK",
                    minimized: "lTOui0dp",
                    button: "bNkLqJf1",
                    title: "rMTpNazX",
                    "unread-count": "O7esHjyC",
                    unreadCount: "O7esHjyC",
                    info: "OS2LWzdu",
                    name: "bkCtPuPQ",
                    icon: "f4LUPgr4",
                    avatarWrapper: "RMY__Znz",
                    avatar: "qeb0Aox1",
                    chatsPreview: "_1817Hwgd",
                    unread: "SS39xuL3"
                },
                x = (0, a.ph)((e => {
                    let {
                        archiveSettings: t,
                        onDragEnter: n,
                        onClick: i
                    } = e;
                    const {
                        updateArchiveSettings: l
                    } = (0, o.ko)(), c = (0, M.A)(), d = (0, g.Rh)(r._E9), m = (0, g.ic)(), u = m[r._E9]?.chatsCount, A = (0, a.Kr)((() => {
                        if (!d?.length) return c("Loading");
                        const e = (0, o.mS)().chats.byId;
                        return d.slice(0, 5).map(((t, n, o) => {
                            const i = n === o.length - 1,
                                r = e[t];
                            if (!r) return;
                            const l = (0, w.Js)(c, r);
                            return a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                                className: (0, s.A)(T.chat, u && r.unreadCount && T.unread)
                            }, (0, N.A)(l)), i ? "" : ", ")
                        }))
                    }), [d, c, u]), h = (0, a.Kr)((() => {
                        const e = !t.isMinimized && {
                                title: c("lng_context_archive_collapse"),
                                icon: "collapse",
                                handler: () => {
                                    l({
                                        isMinimized: !0
                                    })
                                }
                            },
                            n = t.isMinimized && {
                                title: c("lng_context_archive_expand"),
                                icon: "expand",
                                handler: () => {
                                    l({
                                        isMinimized: !1
                                    })
                                }
                            },
                            a = {
                                title: c("lng_context_archive_to_menu"),
                                icon: "archive-to-main",
                                handler: () => {
                                    l({
                                        isHidden: !0
                                    })
                                }
                            };
                        return (0, S.oE)([e, n, a])
                    }), [t.isMinimized, c, l]), p = (0, a.hb)((e => {
                        e.preventDefault(), n?.()
                    }), [n]);
                    return a.Ay.createElement(P.A, {
                        onClick: i,
                        onDragEnter: p,
                        className: (0, s.A)(T.root, t.isMinimized && T.minimized, "chat-item-clickable", "chat-item-archive"),
                        buttonClassName: T.button,
                        contextActions: h,
                        withPortalForMenu: !0
                    }, t.isMinimized ? a.Ay.createElement("div", {
                        className: (0, s.A)(T.info, "info")
                    }, a.Ay.createElement("div", {
                        className: "info-row"
                    }, a.Ay.createElement("div", {
                        className: (0, s.A)("title", T.title)
                    }, a.Ay.createElement("h3", {
                        dir: "auto",
                        className: (0, s.A)(T.name, "fullName")
                    }, a.Ay.createElement("i", {
                        className: (0, s.A)(T.icon, "icon", "icon-archive-filled")
                    }), c("ArchivedChats"))), a.Ay.createElement(k.A, {
                        className: T.unreadCount,
                        text: u ? (0, I.Vw)(u) : void 0
                    }))) : a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("div", {
                        className: (0, s.A)("status", T.avatarWrapper)
                    }, a.Ay.createElement("div", {
                        className: (0, s.A)("Avatar", T.avatar)
                    }, a.Ay.createElement("i", {
                        className: "icon icon-archive-filled"
                    }))), a.Ay.createElement("div", {
                        className: (0, s.A)(T.info, "info")
                    }, a.Ay.createElement("div", {
                        className: "info-row"
                    }, a.Ay.createElement("div", {
                        className: (0, s.A)("title", T.title)
                    }, a.Ay.createElement("h3", {
                        dir: "auto",
                        className: (0, s.A)(T.name, "fullName")
                    }, c("ArchivedChats")))), a.Ay.createElement("div", {
                        className: "subtitle"
                    }, a.Ay.createElement("div", {
                        className: (0, s.A)("status", T.chatsPreview)
                    }, A), a.Ay.createElement(k.A, {
                        className: T.unreadCount,
                        text: u ? (0, I.Vw)(u) : void 0
                    })))))
                }));
            var R = n(32754),
                L = n(29807),
                B = n(43874),
                O = n(79577),
                F = n(64493);
            const D = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    folderId: n,
                    folderType: a
                } = t;
                return {
                    chatFolder: n && "folder" === a ? (0, L.$aQ)(e, n) : void 0,
                    animatedEmoji: (0, L.oei)(e, "📂")
                }
            }))((e => {
                let {
                    chatFolder: t,
                    animatedEmoji: n,
                    foldersDispatch: o,
                    onSettingsScreenSelect: r
                } = e;
                const s = (0, M.A)(),
                    {
                        isMobile: l
                    } = (0, B.Ay)(),
                    c = (0, a.hb)((() => {
                        o({
                            type: "editFolder",
                            payload: t
                        }), r(i.VS.FoldersEditFolderFromChatList)
                    }), [t, o, r]);
                return a.Ay.createElement("div", {
                    className: "yftKUVDQ"
                }, a.Ay.createElement("div", {
                    className: "UCBfMOiz"
                }, n && a.Ay.createElement(O.A, {
                    sticker: n,
                    size: 96
                })), a.Ay.createElement("h3", {
                    className: "dB9cHelg",
                    dir: "auto"
                }, s("FilterNoChatsToDisplay")), a.Ay.createElement("p", {
                    className: "TJ_liZcJ",
                    dir: "auto"
                }, s(t ? "ChatList.EmptyChatListFilterText" : "Chat.EmptyChat")), t && a.Ay.createElement(F.A, {
                    ripple: !l,
                    fluid: !0,
                    pill: !0,
                    onClick: c,
                    size: "smaller",
                    isRtl: s.isRtl
                }, a.Ay.createElement("i", {
                    className: "icon icon-settings"
                }), a.Ay.createElement("div", {
                    className: "aL7e0w4t"
                }, s("ChatList.EmptyChatListEditFilter"))))
            })));
            var U = n(93545);
            const K = "pedMJD_v",
                j = (0, a.ph)((e => {
                    let {
                        sessions: t,
                        onHeightChange: n
                    } = e;
                    const {
                        changeSessionSettings: i,
                        terminateAuthorization: r,
                        showNotification: s
                    } = (0, o.ko)(), l = (0, a.li)(null), c = (0, M.A)();
                    (0, U.A)(l, (e => {
                        const t = e.borderBoxSize?.[0]?.blockSize || e.contentRect.height;
                        n(t)
                    }));
                    const d = (0, a.Kr)((() => Object.values(t).sort(((e, t) => t.dateCreated - e.dateCreated)).find((e => e.isUnconfirmed))), [t]),
                        m = (0, a.Kr)((() => [d.deviceModel, d.region, d.country].filter(Boolean).join(", ")), [d]),
                        u = (0, p.A)((() => {
                            i({
                                hash: d.hash,
                                isConfirmed: !0
                            })
                        })),
                        A = (0, p.A)((() => {
                            r({
                                hash: d.hash
                            }), s({
                                title: c("UnconfirmedAuthDeniedTitle", 1),
                                message: c("UnconfirmedAuthDeniedMessageSingle", m)
                            })
                        }));
                    return a.Ay.createElement("div", {
                        className: "yEkGgZVL",
                        ref: l
                    }, a.Ay.createElement("h2", {
                        className: "VhAJDrnz"
                    }, c("UnconfirmedAuthTitle")), a.Ay.createElement("p", {
                        className: "WmyL1NJ8"
                    }, c("UnconfirmedAuthSingle", m)), a.Ay.createElement("div", {
                        className: "_40UGD1Y"
                    }, a.Ay.createElement(F.A, {
                        fluid: !0,
                        isText: !0,
                        size: "smaller",
                        className: K,
                        onClick: u
                    }, c("UnconfirmedAuthConfirm")), a.Ay.createElement(F.A, {
                        fluid: !0,
                        isText: !0,
                        size: "smaller",
                        color: "danger",
                        onClick: A,
                        className: K
                    }, c("UnconfirmedAuthDeny"))))
                })),
                $ = new Set(["9", "0"]),
                z = (0, a.ph)((e => {
                    let {
                        className: t,
                        folderType: n,
                        folderId: w,
                        isActive: S,
                        isForumPanelOpen: I,
                        canDisplayArchive: N,
                        archiveSettings: M,
                        sessions: k,
                        foldersDispatch: P,
                        onSettingsScreenSelect: T,
                        onLeftColumnContentChange: L
                    } = e;
                    const {
                        openChat: B,
                        openNextChat: O,
                        closeForumPanel: F,
                        toggleStoryRibbon: U
                    } = (0, o.ko)(), K = (0, a.li)(null), z = (0, a.li)(!1), [_, J] = (0, a.J0)(0), H = "archived" === n, V = "all" === n, q = "saved" === n, G = V ? r.DSF : H ? r._E9 : q ? r.pX9 : w, W = V && N && M, Y = (0, g.Rh)(G);
                    (0, m.A)(Y);
                    const Q = (Y?.length || 0) * r.yq1,
                        Z = W ? M?.isMinimized ? r.eqO : r.yq1 : 0,
                        {
                            orderDiffById: X,
                            getAnimationType: ee
                        } = (0, E.A)(Y),
                        [te, ne] = (0, f.A)(void 0, Y, void 0, r.T7t),
                        ae = (0, a.Kr)((() => {
                            const e = Object.values(k || {}),
                                t = e.find((e => e.isCurrent));
                            return !(!t || (0, c.Fm)() - t.dateCreated < r.C7Y) && V && e.some((e => e.isUnconfirmed))
                        }), [V, k]);
                    (0, a.vJ)((() => {
                        ae || J(0)
                    }), [ae]), (0, y.v)(S && Y?.length ? {
                        "Alt+ArrowUp": e => {
                            e.preventDefault(), O({
                                targetIndexDelta: -1,
                                orderedIds: Y
                            })
                        },
                        "Alt+ArrowDown": e => {
                            e.preventDefault(), O({
                                targetIndexDelta: 1,
                                orderedIds: Y
                            })
                        }
                    } : void 0), (0, a.vJ)((() => {
                        if (S && !q && Y && d.lE) return document.addEventListener("keydown", e), () => {
                            document.removeEventListener("keydown", e)
                        };

                        function e(e) {
                            if ((d.MP && e.metaKey || !d.MP && e.ctrlKey) && e.code.startsWith("Digit")) {
                                const [, t] = e.code.match(/Digit(\d)/) || [];
                                if (!t || $.has(t)) return;
                                const n = W && M && !M.isMinimized,
                                    a = n ? -1 : 0,
                                    o = Number(t) + a - 1;
                                if (n && -1 === o) return void L?.(i.Bn.Archived);
                                if (o > Y.length - 1) return;
                                B({
                                    id: Y[o],
                                    shouldReplaceHistory: !0
                                })
                            }
                        }
                    }), [M, q, S, L, B, O, Y, W]);
                    const {
                        observe: oe
                    } = (0, v.BL)({
                        rootRef: K,
                        throttleMs: 200
                    }), ie = (0, p.A)((() => {
                        L(i.Bn.Archived), F()
                    })), re = (0, p.A)((() => {
                        z.current ? z.current = !1 : ie()
                    })), se = (0, h.A)((e => {
                        z.current ? z.current = !1 : B({
                            id: e,
                            shouldReplaceHistory: !0
                        })
                    }), [B], 500, !0), le = (0, p.A)((e => {
                        const t = e.currentTarget.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            a = e.clientY - t.top;
                        n < t.width || a < t.y || (z.current = !0)
                    })), ce = function(e, t, n, o) {
                        const i = (0, a.li)(null),
                            r = (0, a.li)(!1),
                            s = (0, a.li)(0),
                            l = (0, a.li)(!1),
                            c = (0, a.li)(!0),
                            m = (0, a.li)(0),
                            g = (0, a.li)(!1),
                            y = (0, p.A)((function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                l.current || i.current && e.current && (i.current.style.display = "block", e.current.scrollTop = 1, d.Yw || t || (0, A.E)(e.current), r.current = !0, s.current = 1, l.current = !0, c.current = !0)
                            })),
                            f = (0, p.A)((() => {
                                l.current && i.current && (i.current.style.display = "none", l.current = !1)
                            })),
                            v = (0, p.A)((() => {
                                if (!e.current) return;
                                if (r.current) return void(r.current = !1);
                                const a = e.current.scrollTop,
                                    o = a > s.current,
                                    d = a < s.current,
                                    A = 0 === a,
                                    h = Date.now() - m.current;
                                if (i.current) {
                                    if (A && !l.current) return void(0, u.dL)(y, [e.current, i.current]);
                                    (0, u.dL)(f, i.current)
                                }
                                d && (c.current && h > 100 || a < 0 && g.current) ? t?.() : o && a > 0 && n?.(), s.current = a, c.current = A, m.current = Date.now(), g.current = o && a < 0
                            })),
                            E = (0, h.A)((a => {
                                if (!e.current) return;
                                const o = e.current;
                                o.scrollHeight > o.offsetHeight || 0 === a.deltaY || (a.deltaY < 0 ? t?.() : n?.())
                            }), [e, t, n], 250);
                        return (0, a.vJ)((() => {
                            const t = e.current;
                            if (t) return 0 === t.scrollTop && (0, u.RK)((() => {
                                y(!0)
                            })), t.addEventListener("scroll", v, {
                                passive: !0
                            }), t.addEventListener("wheel", E, {
                                passive: !0
                            }), () => {
                                t.removeEventListener("scroll", v), t.removeEventListener("wheel", E)
                            }
                        }), [e, E]), d.pz || o ? void 0 : a.Ay.createElement("div", {
                            ref: i,
                            className: "overscroll-trigger",
                            key: "overscroll-trigger"
                        })
                    }(K, (0, p.A)((() => {
                        U({
                            isShown: !0,
                            isArchived: H
                        })
                    })), (0, p.A)((() => {
                        U({
                            isShown: !1,
                            isArchived: H
                        })
                    })), q);
                    return a.Ay.createElement(C.A, {
                        className: (0, s.A)("chat-list custom-scroll", I && "forum-panel-open", t),
                        ref: K,
                        items: te,
                        itemSelector: ".ListItem:not(.chat-item-archive)",
                        preloadBackwards: r.T7t,
                        withAbsolutePositioning: !0,
                        beforeChildren: ce,
                        maxHeight: Q + Z + _,
                        onLoadMore: ne,
                        onDragLeave: le
                    }, ae && a.Ay.createElement(j, {
                        key: "unconfirmed",
                        sessions: k,
                        onHeightChange: J
                    }), W && a.Ay.createElement(x, {
                        key: "archive",
                        archiveSettings: M,
                        onClick: ie,
                        onDragEnter: re
                    }), te?.length ? function() {
                        const e = Y.indexOf(te[0]),
                            t = (0, l.zm)(G) || 0;
                        return te.map(((n, o) => {
                            const i = e + o < t,
                                s = _ + Z + (e + o) * r.yq1;
                            return a.Ay.createElement(R.A, {
                                key: n,
                                teactOrderKey: i ? o : (0, l.uk)(n, q),
                                chatId: n,
                                isPinned: i,
                                folderId: w,
                                isSavedDialog: q,
                                animationType: ee(n),
                                orderDiff: X[n],
                                offsetTop: s,
                                observeIntersection: oe,
                                onDragEnter: se
                            })
                        }))
                    }() : !te || te.length || q ? a.Ay.createElement(b.A, {
                        key: "loading"
                    }) : a.Ay.createElement(D, {
                        folderId: w,
                        folderType: n,
                        foldersDispatch: P,
                        onSettingsScreenSelect: T
                    }))
                }))
        },
        90054: (e, t, n) => {
            n.d(t, {
                A: () => G
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(31481),
                s = n(66644),
                l = n(59589),
                c = n(29807),
                d = n(87357),
                m = n(11778),
                u = n(50442),
                A = n(25903),
                h = n(82393),
                p = n(43874),
                g = n(32706),
                y = n(26072),
                f = n(96374),
                v = n(5912),
                E = n(17712),
                C = n(59030),
                b = n(29886),
                w = n(9717),
                S = n(63744),
                I = n(51083),
                N = n(48553),
                M = n(64493),
                k = n(46222),
                P = n(52745),
                T = n(76023),
                x = n(79577);
            const R = {
                    root: "Ky16H_sV",
                    "button-text": "W01t9CIf",
                    buttonText: "W01t9CIf",
                    sticker: "c8lE3XW5",
                    title: "wlwD1B1Q",
                    description: "V8OCFHmp",
                    "is-ios": "IxW_z_r0",
                    isIos: "IxW_z_r0",
                    "is-macos": "OFxKGCEJ",
                    isMacos: "OFxKGCEJ"
                },
                L = 7 * T.$,
                B = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n
                    } = t;
                    const a = (0, c.hds)(e, n),
                        o = a && (a.isCreator || (0, l.ub)(a, "manageTopics"));
                    return {
                        animatedEmoji: (0, c.oei)(e, "🐣"),
                        canManageTopics: o
                    }
                }))((e => {
                    let {
                        chatId: t,
                        animatedEmoji: n,
                        canManageTopics: i
                    } = e;
                    const {
                        openCreateTopicPanel: r
                    } = (0, o.ko)(), s = (0, C.A)(), {
                        isMobile: l
                    } = (0, p.Ay)(), c = (0, a.hb)((() => {
                        r({
                            chatId: t
                        })
                    }), [t, r]);
                    return a.Ay.createElement("div", {
                        className: R.root
                    }, a.Ay.createElement("div", {
                        className: R.sticker
                    }, n && a.Ay.createElement(x.A, {
                        sticker: n,
                        size: L
                    })), a.Ay.createElement("h3", {
                        className: R.title,
                        dir: "auto"
                    }, s("ChatList.EmptyTopicsTitle")), a.Ay.createElement("p", {
                        className: (0, d.A)(R.description, R.centered),
                        dir: "auto"
                    }, s("ChatList.EmptyTopicsDescription")), i && a.Ay.createElement(M.A, {
                        ripple: !l,
                        fluid: !0,
                        onClick: c,
                        size: "smaller",
                        isRtl: s.isRtl
                    }, a.Ay.createElement("div", {
                        className: R.buttonText
                    }, s("ChatList.EmptyTopicsCreate"))))
                })));
            var O = n(26129),
                F = n(66414),
                D = n(4961),
                U = n(37661),
                K = n(53188),
                j = n(87894),
                $ = n(81642),
                z = n(38102),
                _ = n(94189),
                J = n(22720),
                H = n(97046),
                V = n(24807);
            const q = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n,
                        topic: a,
                        isSelected: o
                    } = t;
                    const i = (0, c.hds)(e, n),
                        r = (0, c.O5q)(e, n, a.lastMessageId),
                        {
                            senderId: s,
                            isOutgoing: d
                        } = r || {},
                        m = r && (0, O.Q)(r)?.replyToMsgId,
                        u = s ? (0, c.mBe)(e, s) || (0, c.hds)(e, s) : void 0,
                        A = r ? (0, l.mK)(r) : void 0,
                        h = A && m ? (0, c.O5q)(e, n, m) : void 0,
                        {
                            targetUserIds: p,
                            targetChatId: g
                        } = A || {},
                        y = (0, c.C5H)(e, n, a.id, "typingStatus"),
                        f = (0, c.GA4)(e, n, a.id),
                        v = (0, c.Vw0)(e, n, a.id),
                        E = Boolean(v?.lastReadInboxMessageId),
                        {
                            chatId: C,
                            threadId: b
                        } = (0, c.Xf0)(e) || {};
                    return {
                        chat: i,
                        lastMessage: r,
                        actionTargetUserIds: p,
                        actionTargetChatId: g,
                        actionTargetMessage: h,
                        lastMessageSender: u,
                        typingStatus: y,
                        canDelete: (0, c.DBV)(e, n, a.id),
                        withInterfaceAnimations: (0, c.PKK)(e),
                        draft: f,
                        ...d && r && {
                            lastMessageOutgoingStatus: (0, c.Tl2)(e, r)
                        },
                        canScrollDown: o && i?.id === C && b === a.id,
                        wasTopicOpened: E
                    }
                }))((e => {
                    let {
                        topic: t,
                        isSelected: n,
                        chatId: i,
                        chat: r,
                        style: s,
                        lastMessage: c,
                        canScrollDown: m,
                        lastMessageOutgoingStatus: u,
                        observeIntersection: A,
                        canDelete: p,
                        actionTargetMessage: g,
                        actionTargetUserIds: y,
                        actionTargetChatId: f,
                        lastMessageSender: v,
                        animationType: b,
                        withInterfaceAnimations: w,
                        orderDiff: S,
                        typingStatus: I,
                        draft: N,
                        wasTopicOpened: M
                    } = e;
                    const {
                        openThread: k,
                        deleteTopic: P,
                        focusLastMessage: T,
                        setViewForumAsMessages: x
                    } = (0, o.ko)(), R = (0, C.A)(), [L, B, O] = (0, U.A)(), [q, G, W] = (0, U.A)(), [Y, Q, Z] = (0, U.A)(), [X, ee, te] = (0, U.A)(), {
                        isPinned: ne,
                        isClosed: ae
                    } = t, oe = t.isMuted || void 0 === t.isMuted && r.isMuted, ie = (0, E.A)((() => {
                        Q(), B()
                    })), re = (0, E.A)((() => {
                        P({
                            chatId: r.id,
                            topicId: t.id
                        })
                    })), se = (0, E.A)((() => {
                        ee(), G()
                    })), {
                        renderSubtitle: le,
                        ref: ce
                    } = (0, K.A)({
                        chat: r,
                        chatId: i,
                        lastMessage: c,
                        draft: N,
                        actionTargetMessage: g,
                        actionTargetUserIds: y,
                        actionTargetChatId: f,
                        lastMessageSender: v,
                        lastMessageTopic: t,
                        observeIntersection: A,
                        isTopic: !0,
                        typingStatus: I,
                        animationType: b,
                        withInterfaceAnimations: w,
                        orderDiff: S
                    }), de = (0, E.A)((() => {
                        k({
                            chatId: i,
                            threadId: t.id,
                            shouldReplaceHistory: !0
                        }), x({
                            chatId: i,
                            isEnabled: !1
                        }), m && T()
                    })), me = function(e) {
                        let {
                            topic: t,
                            chat: n,
                            wasOpened: i,
                            canDelete: r,
                            handleDelete: s,
                            handleMute: c
                        } = e;
                        const d = (0, C.A)();
                        return (0, a.Kr)((() => {
                            const {
                                isPinned: e,
                                isMuted: a,
                                isClosed: m,
                                id: u
                            } = t, A = n.id, {
                                editTopic: p,
                                toggleTopicPinned: g,
                                markTopicRead: y,
                                updateTopicMutedState: f,
                                openChatInNewTab: v
                            } = (0, o.ko)(), E = (0, l.l1)(n, t), C = n.isCreator || (0, l.ub)(n, "manageTopics"), b = h.OS && {
                                title: "Open in new tab",
                                icon: "open-in-new-tab",
                                handler: () => {
                                    v({
                                        chatId: n.id,
                                        threadId: u
                                    })
                                }
                            }, w = t.unreadCount || !i ? {
                                title: d("MarkAsRead"),
                                icon: "readchats",
                                handler: () => {
                                    y({
                                        chatId: A,
                                        topicId: u
                                    })
                                }
                            } : void 0, S = C ? e ? {
                                title: d("UnpinFromTop"),
                                icon: "unpin",
                                handler: () => g({
                                    chatId: A,
                                    topicId: u,
                                    isPinned: !1
                                })
                            } : {
                                title: d("PinToTop"),
                                icon: "pin",
                                handler: () => g({
                                    chatId: A,
                                    topicId: u,
                                    isPinned: !0
                                })
                            } : void 0, I = n.isMuted && !1 !== a || !0 === a ? {
                                title: d("ChatList.Unmute"),
                                icon: "unmute",
                                handler: () => f({
                                    chatId: A,
                                    topicId: u,
                                    isMuted: !1
                                })
                            } : {
                                title: `${d("ChatList.Mute")}...`,
                                icon: "mute",
                                handler: c
                            }, N = E ? m ? {
                                title: d("lng_forum_topic_reopen"),
                                icon: "reopen-topic",
                                handler: () => p({
                                    chatId: A,
                                    topicId: u,
                                    isClosed: !1
                                })
                            } : {
                                title: d("lng_forum_topic_close"),
                                icon: "close-topic",
                                handler: () => p({
                                    chatId: A,
                                    topicId: u,
                                    isClosed: !0
                                })
                            } : void 0, M = r ? {
                                title: d("lng_forum_topic_delete"),
                                icon: "delete",
                                destructive: !0,
                                handler: s
                            } : void 0;
                            return (0, j.oE)([b, S, w, I, N, M])
                        }), [t, n, i, d, r, s, c])
                    }({
                        topic: t,
                        chat: r,
                        wasOpened: M,
                        canDelete: p,
                        handleDelete: ie,
                        handleMute: se
                    });
                    return a.Ay.createElement(J.A, {
                        className: (0, d.A)("Fn34Vu_9", "Chat", n && "selected", "chat-item-clickable"),
                        onClick: de,
                        style: s,
                        href: h.OS ? `#${(0,F.az)(i,"thread",t.id)}` : void 0,
                        contextActions: me,
                        withPortalForMenu: !0,
                        ref: ce
                    }, a.Ay.createElement("div", {
                        className: "info"
                    }, a.Ay.createElement("div", {
                        className: "info-row"
                    }, a.Ay.createElement("div", {
                        className: (0, d.A)("title")
                    }, a.Ay.createElement(z.A, {
                        topic: t,
                        className: "oXJl4tra",
                        observeIntersection: A
                    }), a.Ay.createElement("h3", {
                        dir: "auto",
                        className: "fullName"
                    }, (0, D.A)(t.title))), t.isMuted && a.Ay.createElement("i", {
                        className: "icon icon-muted"
                    }), a.Ay.createElement("div", {
                        className: "separator"
                    }), ae && a.Ay.createElement("i", {
                        className: (0, d.A)("icon", "icon-lock-badge", "MB7Gomjn")
                    }), c && a.Ay.createElement($.A, {
                        message: c,
                        outgoingStatus: u
                    })), a.Ay.createElement("div", {
                        className: "subtitle"
                    }, le(), a.Ay.createElement(V.A, {
                        chat: r,
                        isPinned: ne,
                        isMuted: oe,
                        topic: t,
                        wasTopicOpened: M
                    }))), Y && a.Ay.createElement(_.A, {
                        isOpen: L,
                        onClose: O,
                        onCloseAnimationEnd: Z,
                        confirmIsDestructive: !0,
                        confirmHandler: re,
                        text: R("lng_forum_topic_delete_sure"),
                        confirmLabel: R("Delete")
                    }), X && a.Ay.createElement(H.A, {
                        isOpen: q,
                        onClose: W,
                        onCloseAnimationEnd: te,
                        chatId: i,
                        topicId: t.id
                    }))
                }))),
                G = (0, a.ph)((0, o.EK)((e => {
                    const t = (0, c.nTw)(e).forumPanelChatId,
                        n = t ? (0, c.hds)(e, t) : void 0,
                        {
                            chatId: a,
                            threadId: o
                        } = (0, c.Xf0)(e) || {};
                    return {
                        chat: n,
                        currentTopicId: t === a ? Number(o) : void 0,
                        withInterfaceAnimations: (0, c.PKK)(e)
                    }
                }), (e => (0, c.clw)(e)))((e => {
                    let {
                        chat: t,
                        currentTopicId: n,
                        isOpen: c,
                        isHidden: T,
                        onTopicSearch: x,
                        onCloseAnimationEnd: R,
                        onOpenAnimationStart: L,
                        withInterfaceAnimations: O
                    } = e;
                    const {
                        closeForumPanel: F,
                        openChatWithInfo: D,
                        loadTopics: U
                    } = (0, o.ko)(), K = (0, a.li)(null), j = (0, a.li)(null), $ = (0, a.li)(null), {
                        isMobile: z
                    } = (0, p.Ay)();
                    (0, a.vJ)((() => {
                        t && !t.topics && U({
                            chatId: t.id
                        })
                    }), [t, U]);
                    const [_, J] = (0, a.J0)(!1), H = (0, C.A)(), V = (0, E.A)((() => {
                        F()
                    }));
                    (0, a.vJ)((() => {
                        O || c || R?.()
                    }), [O, c, R]);
                    const G = (0, E.A)((() => {
                            t && D({
                                id: t.id,
                                shouldReplaceHistory: !0
                            })
                        })),
                        {
                            observe: W
                        } = (0, v.BL)({
                            rootRef: j,
                            throttleMs: 200
                        });
                    (0, v.mv)($, W, (e => {
                        let {
                            isIntersecting: t
                        } = e;
                        J(!t)
                    }));
                    const Y = (0, a.Kr)((() => t?.topics ? (0, l.CO)(Object.values(t.topics), t.orderedPinnedTopicIds).map((e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })) : []), [t]),
                        {
                            orderDiffById: Q,
                            getAnimationType: Z
                        } = (0, w.A)(Y, t?.id),
                        [X, ee] = (0, f.A)((() => {
                            t && U({
                                chatId: t.id
                            })
                        }), Y, !t?.topicsCount || Y.length >= t.topicsCount, r.iIc),
                        te = (0, a.li)(!1),
                        ne = c && !T,
                        ae = (0, b.A)(ne);
                    ae !== ne && (te.current = !1), (0, y.A)({
                        isActive: ne,
                        onBack: V
                    }), (0, a.vJ)((() => ne ? (0, m.A)(V) : void 0), [V, ne]), (0, a.vJ)((() => {
                        ae !== ne && (0, s.Uz)((() => {
                            if (!K.current) return;
                            const e = (0, g.UH)();
                            (0, A.j)(K.current, e), L?.(), ne ? (te.current = !0, K.current.style.transform = "none") : (te.current = !1, K.current.style.transform = "")
                        }))
                    }), [ne, L, ae]), (0, a.vJ)((() => {
                        if (h.TF) return (0, u.wJ)(K.current, {
                            selectorToPreventScroll: ".chat-list",
                            onSwipe: (e, t) => t === (H.isRtl ? u.ez.Left : u.ez.Right) && (F(), !0)
                        })
                    }), [F, H.isRtl]);
                    const oe = void 0 === t?.topics;
                    return a.Ay.createElement("div", {
                        ref: K,
                        className: (0, d.A)("MlF2n1nb", _ && "SZ24u3cn", H.isRtl && "Xs2y1fCE", !O && "kmDMv6D8"),
                        onTransitionEnd: c ? void 0 : R
                    }, a.Ay.createElement("div", {
                        id: "TopicListHeader",
                        className: "left-header"
                    }, a.Ay.createElement(M.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        onClick: V,
                        ariaLabel: H("Close")
                    }, a.Ay.createElement("i", {
                        className: "icon icon-close"
                    })), t && a.Ay.createElement(I.A, {
                        noAvatar: !0,
                        className: "Sf633zAP",
                        chatId: t.id,
                        onClick: G
                    }), t && a.Ay.createElement(N.A, {
                        chatId: t.id,
                        threadId: i.l3,
                        messageListType: "thread",
                        canExpandActions: !1,
                        isForForum: !0,
                        isMobile: z,
                        onTopicSearch: x
                    })), t && a.Ay.createElement(S.A, {
                        chatId: t.id,
                        hasPinnedOffset: !1,
                        className: "wUpRjGJ2"
                    }), a.Ay.createElement("div", {
                        className: "hGeb3TQJ"
                    }), a.Ay.createElement(k.A, {
                        className: "chat-list custom-scroll",
                        ref: j,
                        items: X,
                        preloadBackwards: r.iIc,
                        withAbsolutePositioning: !0,
                        maxHeight: (Y?.length || 0) * r.HGU,
                        onLoadMore: ee,
                        sensitiveArea: r.C$_,
                        beforeChildren: a.Ay.createElement("div", {
                            ref: $,
                            className: "ERz3fcar"
                        })
                    }, Boolean(X?.length) && function() {
                        const e = Y.indexOf(X[0]);
                        return X?.map(((o, i) => a.Ay.createElement(q, {
                            key: o,
                            chatId: t.id,
                            topic: t.topics[o],
                            style: `top: ${(e+i)*r.HGU}px;`,
                            isSelected: n === o,
                            observeIntersection: W,
                            animationType: Z(o),
                            orderDiff: Q[o]
                        })))
                    }(), oe && !X?.length && a.Ay.createElement(P.A, {
                        key: "loading"
                    })), !oe && 1 === X?.length && X[0] === r.HxB && a.Ay.createElement(B, {
                        chatId: t.id
                    }))
                })))
        },
        79882: (e, t, n) => {
            n.d(t, {
                I: () => o,
                W: () => i
            });
            var a = n(84051);
            let o = function(e) {
                return e[e.Move = 0] = "Move", e[e.Opacity = 1] = "Opacity", e[e.None = 2] = "None", e
            }({});

            function i(e) {
                return (0, a.Kr)((() => {
                    const t = Object.values(e),
                        n = t.filter((e => e < 0)).length,
                        a = t.filter((e => e > 0)).length;
                    return t => {
                        const i = e[t];
                        return 0 === i ? o.None : i === 1 / 0 || i === -1 / 0 || n <= a && i < 0 || a < n && i > 0 ? o.Opacity : o.Move
                    }
                }), [e])
            }
        },
        53188: (e, t, n) => {
            n.d(t, {
                A: () => T
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(66644),
                s = n(59589),
                l = n(26129),
                c = n(87357),
                d = n(59776),
                m = n(4961),
                u = n(18501),
                A = n(79882),
                h = n(49746),
                p = n(62587),
                g = n(59030),
                y = n(76023),
                f = n(43874),
                v = n(11217),
                E = n(38102);
            const C = "CBda1UmC",
                b = "BhS75ocD",
                w = "uWo2dhui",
                S = "g3XnC73g",
                I = Number(y.$),
                N = (0, a.ph)((e => {
                    let {
                        chat: t,
                        renderLastMessage: n,
                        observeIntersection: i
                    } = e;
                    const {
                        openThread: r
                    } = (0, o.ko)(), l = (0, a.li)(null), d = (0, a.li)(null), u = (0, g.A)(), [A, ...h] = (0, a.Kr)((() => t.topics ? (0, s.CO)(Object.values(t.topics), void 0, !0).slice(0, 3) : []), [t.topics]), [p, y] = (0, a.J0)(!1), [N, M] = (0, a.J0)(void 0), {
                        handleClick: k,
                        handleMouseDown: P
                    } = (0, v.Q)((e => {
                        0 === A.unreadCount || t.isForumAsMessages || (e.stopPropagation(), e.preventDefault(), r({
                            chatId: t.id,
                            threadId: A.id,
                            shouldReplaceHistory: !0,
                            noForumTopicPanel: (0, f.Ny)()
                        }))
                    }));
                    return (0, a.vJ)((() => {
                        const e = l.current,
                            t = d.current;
                        if (!e || !t) return;
                        const n = e.offsetWidth,
                            a = t.offsetWidth;
                        Math.abs(n - a) < I ? M(Math.max(n, a)) : M(void 0), y(n > a)
                    }), [A, n]), a.Ay.createElement("div", {
                        className: (0, c.A)("Ow6Ij9O5", p && "U_yhhC0w", N && "HV0wCR4O"),
                        dir: u.isRtl ? "rtl" : void 0,
                        style: N ? `--overwritten-width: ${N}px` : void 0
                    }, A && a.Ay.createElement("div", {
                        className: C
                    }, a.Ay.createElement("div", {
                        className: (0, c.A)("lEbV6HrI", A.unreadCount && b),
                        ref: d,
                        onClick: k,
                        onMouseDown: P
                    }, a.Ay.createElement(E.A, {
                        topic: A,
                        observeIntersection: i
                    }), a.Ay.createElement("div", {
                        className: "k3Ch25ZQ"
                    }, (0, m.A)(A.title)), !N && p && a.Ay.createElement("div", {
                        className: w
                    }, a.Ay.createElement("div", {
                        className: S
                    }))), a.Ay.createElement("div", {
                        className: "IkuCBmvA"
                    }, h.map((e => a.Ay.createElement("div", {
                        className: (0, c.A)("d0hTIVJn", e.unreadCount && b),
                        key: e.id
                    }, a.Ay.createElement(E.A, {
                        topic: e,
                        className: "oknhG11L",
                        observeIntersection: i
                    }), a.Ay.createElement("span", {
                        className: "ZUj3xAjs"
                    }, (0, m.A)(e.title)))))), a.Ay.createElement("div", {
                        className: "_m_2xcPW"
                    })), !A && a.Ay.createElement("div", {
                        className: (0, c.A)(C, "L4Zk0yMN")
                    }, u("Loading")), a.Ay.createElement("div", {
                        className: (0, c.A)("KJ16dBus", A?.unreadCount && b),
                        ref: l,
                        onClick: k,
                        onMouseDown: P
                    }, n(), !N && !p && a.Ay.createElement("div", {
                        className: w
                    }, a.Ay.createElement("div", {
                        className: S
                    }))))
                }));
            var M = n(18653),
                k = n(80477);
            const P = 200;

            function T(e) {
                let {
                    chat: t,
                    lastMessage: n,
                    chatId: y,
                    typingStatus: f,
                    draft: v,
                    actionTargetMessage: E,
                    actionTargetUserIds: C,
                    lastMessageTopic: b,
                    lastMessageSender: w,
                    actionTargetChatId: S,
                    observeIntersection: I,
                    animationType: T,
                    orderDiff: x,
                    withInterfaceAnimations: R,
                    isTopic: L,
                    isSavedDialog: B,
                    isPreview: O
                } = e;
                const F = (0, g.A)(),
                    D = (0, a.li)(null),
                    U = n && (0, s._P)(n),
                    K = n && (0, l.Q)(n)?.replyToMsgId;
                (0, h.A)(y, U ? K : void 0, E);
                const j = n && !(0, s.fP)(n),
                    $ = j ? (0, s.CI)(n) : void 0,
                    z = (0, p.A)(j ? (0, s.EO)(n, "micro") : void 0),
                    _ = Boolean(n && (0, s.lk)(n)),
                    J = (0, a.Kr)((() => {
                        if (!C) return;
                        const e = (0, o.mS)().users.byId;
                        return C.map((t => e[t])).filter(Boolean)
                    }), [C]),
                    H = (0, a.hb)((() => {
                        if (!B && !O && f && n && f.timestamp > 1e3 * n.date) return a.Ay.createElement(k.A, {
                            typingStatus: f
                        });
                        const e = v && v.replyInfo?.replyToMsgId === b?.id,
                            o = v?.replyInfo && !v.text && v.isLocal;
                        if (!t?.isForum && !B && !O && v && !o && (!L || !e)) return a.Ay.createElement("p", {
                            className: "last-message",
                            dir: F.isRtl ? "auto" : "ltr"
                        }, a.Ay.createElement("span", {
                            className: "draft"
                        }, F("Draft")), (0, u.f)({
                            text: v.text?.text || "",
                            entities: v.text?.entities,
                            isSimple: !0,
                            withTranslucentThumbs: !0
                        }));
                        if (!n) return;
                        if ((0, s.r$)(n)) return a.Ay.createElement("p", {
                            className: "last-message shared-canvas-container",
                            dir: F.isRtl ? "auto" : "ltr"
                        }, (0, s.Po)(F, n));
                        if (U) {
                            const e = t && ((0, s.WX)(t) || n.senderId === n.chatId);
                            return a.Ay.createElement("p", {
                                className: "last-message shared-canvas-container",
                                dir: F.isRtl ? "auto" : "ltr"
                            }, (0, d.V)(F, n, e ? void 0 : w, e ? t : void 0, J, E, S, b, {
                                isEmbedded: !0
                            }, void 0, void 0))
                        }
                        const i = (0, s.Q5)(F, y, w);
                        return a.Ay.createElement("p", {
                            className: "last-message shared-canvas-container",
                            dir: F.isRtl ? "auto" : "ltr"
                        }, i && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                            className: "sender-name"
                        }, (0, m.A)(i)), a.Ay.createElement("span", {
                            className: "colon"
                        }, ":")), !B && n.forwardInfo && a.Ay.createElement("i", {
                            className: "icon icon-share-filled chat-prefix-icon"
                        }), "story" === n.replyInfo?.type && a.Ay.createElement("i", {
                            className: "icon icon-story-reply chat-prefix-icon"
                        }), function(e, t, n, o, i) {
                            const r = a.Ay.createElement(M.A, {
                                lang: e,
                                message: t,
                                noEmoji: Boolean(o),
                                observeIntersectionForLoading: n,
                                inChatList: !0
                            });
                            if (!o) return r;
                            const l = (0, s.y2)(t);
                            return a.Ay.createElement("span", {
                                className: "media-preview"
                            }, a.Ay.createElement("img", {
                                src: o,
                                alt: "",
                                className: (0, c.A)("media-preview--image", i && "round", l && "media-preview-spoiler"),
                                draggable: !1
                            }), (0, s.zX)(t) && a.Ay.createElement("i", {
                                className: "icon icon-play"
                            }), r)
                        }(F, n, I, z || $, _))
                    }), [S, E, J, t, y, v, U, _, L, F, n, w, b, z, $, I, f, B, O]);
                return (0, a.Nf)((() => {
                    const e = D.current;
                    if (R && e) {
                        if (T === A.I.Opacity) e.style.opacity = "0", (0, r.RK)((() => {
                            e.classList.add("animate-opacity"), e.style.opacity = "1"
                        }));
                        else {
                            if (T !== A.I.Move) return;
                            e.style.transform = `translate3d(0, ${-x*i.yq1}px, 0)`, (0, r.RK)((() => {
                                e.classList.add("animate-transform"), e.style.transform = ""
                            }))
                        }
                        setTimeout((() => {
                            (0, r.RK)((() => {
                                e.classList.remove("animate-opacity", "animate-transform"), e.style.opacity = "", e.style.transform = ""
                            }))
                        }), P + i.xB5)
                    }
                }), [R, x, T]), {
                    renderSubtitle: function() {
                        return t?.isForum && !L ? a.Ay.createElement(N, {
                            chat: t,
                            renderLastMessage: H,
                            observeIntersection: I
                        }) : H()
                    },
                    ref: D
                }
            }
        },
        24920: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(30857),
                i = n(29886);

            function r(e) {
                const t = (0, o.A)(),
                    n = (0, a.li)(e),
                    r = (0, i.A)(e);
                return !1 === e && r !== e && (n.current = !1), {
                    shouldDisableDropdownMenuTransitionRef: n,
                    handleDropdownMenuTransitionEnd: function() {
                        n.current = Boolean(e), t()
                    }
                }
            }
        },
        9717: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(87894),
                i = n(79882),
                r = n(29886);

            function s(e, t) {
                const n = (0, a.Kr)((() => {
                        if (e) return e.reduce(((e, t, n) => (e[t] = n, e)), {})
                    }), [e]),
                    s = (0, r.A)(n),
                    l = (0, r.A)(t),
                    c = (0, a.Kr)((() => n && s && t === l ? (0, o.LG)(n, ((e, t) => void 0 !== s[t] ? e - s[t] : -1 / 0)) : {}), [t, n, l, s]);
                return {
                    orderDiffById: c,
                    getAnimationType: (0, i.W)(c)
                }
            }
        },
        55429: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var a = n(59589);

            function o(e, t, n, o) {
                const {
                    senderId: i
                } = t;
                if (!i) return;
                const r = (0, a.L8)(i) ? o[i] : n[i];
                let s = (0, a.qg)(e, r);
                const l = n[t.chatId];
                return l && ("isSelf" in r && r.isSelf ? s = `${e("FromYou")} → ${(0,a.Js)(e,l)}` : (0, a.YE)(l) && (s += ` → ${(0,a.Js)(e,l)}`)), s
            }
        },
        95685: (e, t, n) => {
            n.d(t, {
                A: () => G
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(26129),
                s = n(29807),
                l = n(87357),
                c = n(59776),
                d = n(4961),
                m = n(54464),
                u = n(10722),
                A = n(49746),
                h = n(37661),
                p = n(5912),
                g = n(59030),
                y = n(34201),
                f = n(79519),
                v = n(79577),
                E = n(97335),
                C = n(89925),
                b = n(87679),
                w = n(17712),
                S = n(62587),
                I = n(21849),
                N = n(94189),
                M = n(68584);
            const k = (0, a.ph)((e => {
                let {
                    message: t,
                    renderContent: n
                } = e;
                const {
                    openMediaViewer: r,
                    uploadProfilePhoto: s,
                    showNotification: l
                } = (0, o.ko)(), {
                    isOutgoing: c
                } = t, d = (0, g.A)(), [m, u] = (0, a.J0)(), [A, p, y] = (0, h.A)(!1), f = t.content.action.photo, v = (0, S.A)((0, i.rI)(f, "full")), k = (0, S.A)((0, i.Pg)(f)), P = t.content.action.photo?.isVideo, T = (0, w.A)((() => {
                    l({
                        title: d("ApplyAvatarHintTitle"),
                        message: d("ApplyAvatarHint"),
                        action: {
                            action: "requestNextSettingsScreen",
                            payload: {
                                screen: C.VS.Main
                            }
                        },
                        actionText: d("Open")
                    })
                })), x = (0, w.A)((e => {
                    u(void 0), s({
                        file: e
                    }), T()
                })), R = (0, w.A)((() => {
                    u(void 0)
                })), L = (0, w.A)((async () => {
                    if (!k) return;
                    y(), T();
                    const e = await (0, b.sZ)(k);
                    s({
                        file: new File([e], "avatar.mp4"),
                        isVideo: !0,
                        videoTs: f.videoSizes?.find((e => void 0 !== e.videoStartTs))?.videoStartTs
                    })
                }));
                return a.Ay.createElement("span", {
                    className: "action-message-suggested-avatar",
                    tabIndex: 0,
                    role: "button",
                    onClick: async () => {
                        !c && v ? P ? p() : u(await (0, b.sZ)(v)) : r({
                            chatId: t.chatId,
                            messageId: t.id,
                            threadId: E.l3,
                            origin: C.TQ.SuggestedAvatar
                        })
                    }
                }, a.Ay.createElement(I.A, {
                    photo: t.content.action.photo,
                    loopIndefinitely: !0,
                    withVideo: P,
                    size: "jumbo"
                }), a.Ay.createElement("span", null, n()), a.Ay.createElement("span", {
                    className: "action-message-button"
                }, d(P ? "ViewVideoAction" : "ViewPhotoAction")), a.Ay.createElement(M.A, {
                    file: m,
                    onClose: R,
                    onChange: x
                }), a.Ay.createElement(N.A, {
                    isOpen: A,
                    title: d("SuggestedVideo"),
                    confirmHandler: L,
                    onClose: y,
                    textParts: n()
                }))
            }));
            var P = n(19381),
                T = n(14242),
                x = n(14737),
                R = n(48894);
            var L = n(36838),
                B = n(18276),
                O = n(64493),
                F = n(55158);
            const D = "d8axZxyN",
                U = "glDpC2av",
                K = "gqCs9fSo",
                j = "gnYhwnvf",
                $ = "HWgwnKui",
                z = "BTNQ4KBH",
                _ = "Xl9MVMTn",
                J = "Qizai7yv";

            function H(e) {
                let {
                    channel: t
                } = e;
                const {
                    openChat: n
                } = (0, o.ko)(), r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#00000000";
                    const [n, o] = (0, a.J0)(t), r = (0, S.A)((0, i.cP)(e), !1, E.qZ.BlobUrl);
                    return (0, a.vJ)((() => {
                        (async () => {
                            if (!r) return;
                            const e = await (0, R.rX)(r);
                            o(`#${(0,R.v2)(e)}`)
                        })()
                    }), [r]), n
                }(t, "#3C3C4399");
                return a.Ay.createElement("div", {
                    className: U,
                    onClick: () => n({
                        id: t.id
                    })
                }, a.Ay.createElement(I.A, {
                    className: K,
                    key: t.id,
                    size: "large",
                    peer: t
                }), a.Ay.createElement("div", {
                    style: `background: ${r}`,
                    className: j
                }, a.Ay.createElement("i", {
                    className: (0, l.A)(D, "icon icon-user-filled")
                }), a.Ay.createElement("span", {
                    className: $
                }, (0, T.Vw)(t?.membersCount || 0))), a.Ay.createElement("span", {
                    className: z
                }, t.title))
            }

            function V(e) {
                let {
                    channel: t,
                    chatId: n,
                    channelsCount: i,
                    isCurrentUserPremium: r
                } = e;
                const {
                    openPremiumModal: s,
                    openChatWithInfo: c
                } = (0, o.ko)(), d = (0, g.A)();
                return a.Ay.createElement("div", {
                    className: (0, l.A)(U, "MBChXyXk"),
                    onClick: () => {
                        r ? c({
                            id: n,
                            shouldReplaceHistory: !0,
                            profileTab: "similarChannels",
                            forceScrollProfileTab: !0
                        }) : s()
                    }
                }, a.Ay.createElement(I.A, {
                    className: K,
                    key: t.id,
                    size: "large",
                    peer: t
                }), a.Ay.createElement("div", {
                    className: _
                }, a.Ay.createElement("div", {
                    className: J
                })), a.Ay.createElement("div", {
                    className: (0, l.A)(_, "JxSmtOFi")
                }, a.Ay.createElement("div", {
                    className: J
                })), a.Ay.createElement("div", {
                    className: j
                }, a.Ay.createElement("span", {
                    className: $
                }, `+${i}`), !r && a.Ay.createElement(B.A, {
                    name: "lock-badge",
                    className: D
                })), a.Ay.createElement("span", {
                    className: z
                }, d("MoreSimilar")))
            }
            const q = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n
                    } = t;
                    const {
                        similarChannelIds: a,
                        shouldShowInChat: o,
                        count: i
                    } = (0, s.dg4)(e, n) || {};
                    return {
                        similarChannelIds: a,
                        shouldShowInChat: o,
                        count: i,
                        isCurrentUserPremium: (0, s.g29)(e)
                    }
                }))((e => {
                    let {
                        chatId: t,
                        similarChannelIds: n,
                        shouldShowInChat: i,
                        count: r,
                        isCurrentUserPremium: c
                    } = e;
                    const d = (0, g.A)(),
                        {
                            toggleChannelRecommendations: m
                        } = (0, o.ko)(),
                        [u, A, p] = (0, h.A)(!1),
                        [y, f, v] = (0, h.A)(!1),
                        E = (0, a.li)(null),
                        C = (0, a.Kr)((() => {
                            if (!n) return;
                            const e = (0, o.mS)();
                            return n.map((t => (0, s.hds)(e, t))).filter(Boolean)
                        }), [n]),
                        [b, S] = (0, a.J0)(!n),
                        I = (0, a.Kr)((() => C?.slice(0, 10)), [C]),
                        N = Boolean(I?.length);
                    (0, L.A)(E, !N || !i || b, !0);
                    const M = Boolean(!b && (i || y || u) && N);
                    (0, x.A)((() => S(!1)), 2e3), (0, a.vJ)((() => {
                        if (b && C && i) {
                            const e = setTimeout((() => {
                                S(!1)
                            }), 300);
                            return () => clearTimeout(e)
                        }
                    }), [C, i, b]);
                    const k = (0, w.A)((() => {
                        m({
                            chatId: t
                        }), i ? (p(), f()) : (A(), v())
                    }));
                    return a.Ay.createElement("div", {
                        className: (0, l.A)("V3RHiOJR")
                    }, a.Ay.createElement("div", {
                        className: "join-text"
                    }, a.Ay.createElement("span", {
                        className: (0, l.A)(N && "UHAMd4fI"),
                        onClick: N ? k : void 0
                    }, d("ChannelJoined"))), b && a.Ay.createElement(F.A, {
                        className: "xKVZv7KE"
                    }), M && a.Ay.createElement("div", {
                        className: (0, l.A)(u && "eb8rX09E", y && "XR6_qLCc")
                    }, a.Ay.createElement("div", {
                        className: "tfG_BSDt"
                    }, a.Ay.createElement("svg", {
                        width: "19",
                        height: "7",
                        viewBox: "0 0 19 7",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.Ay.createElement("path", {
                        className: "HVbeGv4t",
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M19 7C16.8992 7 13.59 3.88897 11.5003 1.67424C10.7648 0.894688 10.397 0.50491 10.0434 0.385149C9.70568 0.270811 9.4225 0.270474 9.08456 0.38401C8.73059 0.50293 8.36133 0.892443 7.62279 1.67147C5.52303 3.88637 2.18302 7 0 7L19 7Z",
                        fill: "white"
                    }))), a.Ay.createElement("div", {
                        className: "njAC8dR9"
                    }, a.Ay.createElement("div", {
                        className: "s7QOi22Q"
                    }, a.Ay.createElement("span", {
                        className: "JstcOhAN"
                    }, d("SimilarChannels")), a.Ay.createElement(O.A, {
                        className: "meewH7t_",
                        color: "translucent",
                        onClick: k
                    }, a.Ay.createElement(B.A, {
                        name: "close"
                    }))), a.Ay.createElement("div", {
                        ref: E,
                        className: (0, l.A)("h4gWlNen", "no-scrollbar")
                    }, I?.map(((e, n) => 9 === n ? a.Ay.createElement(V, {
                        channel: e,
                        chatId: t,
                        channelsCount: r - 10 + 1,
                        isCurrentUserPremium: c
                    }) : a.Ay.createElement(H, {
                        channel: e
                    })))))))
                }))),
                G = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        message: n,
                        threadId: a
                    } = t;
                    const {
                        chatId: o,
                        senderId: i,
                        content: l
                    } = n, {
                        targetUserIds: c,
                        targetChatId: d
                    } = l.action || {}, m = (0, r.Q)(n)?.replyToMsgId, u = m ? (0, s.O5q)(e, o, m) : void 0, A = !!a && (0, s.nJv)(e, n, a), {
                        direction: h,
                        noHighlight: p
                    } = A && (0, s.nTw)(e).focusedMessage || {}, g = (0, s.mBe)(e, i || o), y = (0, s.hds)(e, o), f = d ? (0, s.hds)(e, d) : void 0, v = l.action?.months;
                    return {
                        senderUser: g,
                        senderChat: y,
                        targetChat: f,
                        targetChatId: d,
                        targetUserIds: c,
                        targetMessage: u,
                        isFocused: A,
                        premiumGiftSticker: (0, s.t0O)(e, v),
                        topic: (0, s.nkm)(e, n),
                        canPlayAnimatedEmojis: (0, s.BWX)(e),
                        ...A && {
                            focusDirection: h,
                            noFocusHighlight: p
                        }
                    }
                }))((e => {
                    let {
                        message: t,
                        isEmbedded: n,
                        appearanceOrder: r = 0,
                        isJustAdded: s,
                        isLastInList: E,
                        senderUser: C,
                        senderChat: b,
                        targetUserIds: w,
                        targetMessage: S,
                        targetChatId: I,
                        targetChat: N,
                        isFocused: M,
                        focusDirection: T,
                        noFocusHighlight: x,
                        premiumGiftSticker: R,
                        isInsideTopic: L,
                        topic: B,
                        memoFirstUnreadIdRef: O,
                        canPlayAnimatedEmojis: F,
                        observeIntersectionForReading: D,
                        observeIntersectionForLoading: U,
                        observeIntersectionForPlaying: K,
                        onPinnedIntersectionChange: j
                    } = e;
                    const {
                        openPremiumModal: $,
                        requestConfetti: z,
                        checkGiftCode: _,
                        getReceipt: J
                    } = (0, o.ko)(), H = (0, g.A)(), V = (0, a.li)(null);
                    (0, p.mv)(V, D), (0, A.A)(t.chatId, "message" === t.replyInfo?.type ? t.replyInfo.replyToMsgId : void 0, S), (0, f.A)(V, t.chatId, M, T, x, s), (0, a.vJ)((() => {
                        if (t.isPinned) return () => {
                            j?.({
                                viewportPinnedIdsToRemove: [t.id],
                                isUnmount: !0
                            })
                        }
                    }), [j, t.isPinned, t.id]);
                    const G = r <= 0,
                        [W, Y] = (0, h.A)(G),
                        Q = Boolean(t.content.action?.text.startsWith("ActionGift")),
                        Z = Boolean(t.content.action?.text.startsWith("BoostingReceivedGift")),
                        X = "suggestProfilePhoto" === t.content.action?.type && t.content.action.photo,
                        ee = (0, i.CV)(t);
                    (0, a.vJ)((() => {
                        G || setTimeout(Y, 10 * r)
                    }), [r, Y, G]);
                    const te = (0, p.Vz)(V, K),
                        ne = (0, a.li)((() => {
                            const e = O?.current && t.id >= O.current;
                            return Q && !t.isOutgoing && e
                        })());
                    (0, a.vJ)((() => {
                        te && ne.current && (ne.current = !1, z({
                            withStars: !0
                        }))
                    }), [te, z]);
                    const {
                        transitionClassNames: ae
                    } = (0, y.A)(W, void 0, G, !1), oe = (0, o.mS)().users.byId, ie = (0, a.Kr)((() => w ? w.map((e => oe?.[e])).filter(Boolean) : void 0), [w, oe]), re = (0, a.hb)((() => (0, c.V)(H, t, C, b, ie, S, I, B, {
                        isEmbedded: n
                    }, U, K)), [n, H, t, U, K, b, C, I, S, ie, B]), {
                        isContextMenuOpen: se,
                        contextMenuPosition: le,
                        handleBeforeContextMenu: ce,
                        handleContextMenu: de,
                        handleContextMenuClose: me,
                        handleContextMenuHide: ue
                    } = (0, u.A)(V), Ae = void 0 !== le, he = () => {
                        const e = t.content.action?.slug;
                        e && _({
                            slug: e,
                            message: {
                                chatId: t.chatId,
                                messageId: t.id
                            }
                        })
                    };
                    if (L && "TopicWasCreatedAction" === t.content.action?.text) return a.Ay.createElement("span", {
                        ref: V
                    });
                    if (n) return a.Ay.createElement("span", {
                        ref: V,
                        className: "embedded-action-message"
                    }, re());
                    const pe = (0, l.A)("ActionMessage message-list-item", M && !x && "focused", (Q || X) && "centered-action", Ae && "has-menu-open", E && "last-in-list", ae);
                    return a.Ay.createElement("div", {
                        ref: V,
                        id: (0, i.GZ)(t.id),
                        className: pe,
                        "data-message-id": t.id,
                        "data-is-pinned": t.isPinned || void 0,
                        onMouseDown: e => {
                            (0, m.l)(e), ce(e)
                        },
                        onContextMenu: de
                    }, !X && !Z && !ee && a.Ay.createElement("span", {
                        className: "action-message-content",
                        onClick: () => {
                            "receipt" === t.content.action?.type && J({
                                chatId: t.chatId,
                                messageId: t.id
                            })
                        }
                    }, re()), Q && a.Ay.createElement("span", {
                        className: "action-message-gift",
                        tabIndex: 0,
                        role: "button",
                        onClick: () => {
                            $({
                                isGift: !0,
                                fromUserId: C?.id,
                                toUserId: w?.[0],
                                monthsAmount: t.content.action?.months || 0
                            })
                        }
                    }, a.Ay.createElement(v.A, {
                        key: t.id,
                        sticker: R,
                        play: F,
                        noLoop: !0,
                        nonInteractive: !0
                    }), a.Ay.createElement("strong", null, H("ActionGiftPremiumTitle")), a.Ay.createElement("span", null, H("ActionGiftPremiumSubtitle", H("Months", t.content.action?.months, "i"))), a.Ay.createElement("span", {
                        className: "action-message-button"
                    }, H("ActionGiftPremiumView"))), Z && function() {
                        const e = t.content.action?.isGiveaway,
                            n = t.content.action?.isUnclaimed;
                        return a.Ay.createElement("span", {
                            className: "action-message-gift action-message-gift-code",
                            tabIndex: 0,
                            role: "button",
                            onClick: he
                        }, a.Ay.createElement(v.A, {
                            key: t.id,
                            sticker: R,
                            play: F,
                            noLoop: !0,
                            nonInteractive: !0
                        }), a.Ay.createElement("strong", null, H(n ? "BoostingUnclaimedPrize" : "BoostingCongratulations")), a.Ay.createElement("span", {
                            className: "action-message-subtitle"
                        }, N && (0, d.A)(H(e ? "BoostingReceivedGiftFrom" : n ? "BoostingReceivedPrizeFrom" : "BoostingYouHaveUnclaimedPrize", (0, i.Js)(H, N)), ["simple_markdown"])), a.Ay.createElement("span", {
                            className: "action-message-subtitle"
                        }, (0, d.A)(H("BoostingUnclaimedPrizeDuration", H("Months", t.content.action?.months, "i")), ["simple_markdown"])), a.Ay.createElement("span", {
                            className: "action-message-button"
                        }, H("BoostingReceivedGiftOpenBtn")))
                    }(), X && a.Ay.createElement(k, {
                        message: t,
                        renderContent: re
                    }), ee && a.Ay.createElement(q, {
                        chatId: I
                    }), le && a.Ay.createElement(P.A, {
                        isOpen: se,
                        anchor: le,
                        message: t,
                        messageListType: "thread",
                        onClose: me,
                        onCloseAnimationEnd: ue
                    }))
                })))
        },
        48553: (e, t, n) => {
            n.d(t, {
                A: () => C
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(89925),
                s = n(66644),
                l = n(59589),
                c = n(29807),
                d = n(82393),
                m = n(2178),
                u = n(17712),
                A = n(59030),
                h = n(64493),
                p = n(22699),
                g = n(24433),
                y = n(60859),
                f = n(80089),
                v = n(80464);
            const E = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, v.A)(f.ar.Extra, "HeaderMenuContainer", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                C = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n,
                        threadId: a,
                        messageListType: o,
                        isMobile: r
                    } = t;
                    const s = (0, c.hds)(e, n),
                        m = Boolean(s && (0, l.WX)(s)),
                        u = Boolean(s && (0, l.Vs)(s)),
                        A = (0, c.wmb)(e),
                        h = (0, c.Qq_)(e),
                        p = (0, l.L8)(n),
                        {
                            doNotTranslate: g
                        } = e.settings.byKey;
                    if (!s || s.isRestricted || (0, c.rTV)(e)) return {
                        noMenu: !0,
                        language: A,
                        translationLanguage: h,
                        doNotTranslate: g
                    };
                    const y = (0, c.yps)(e, n),
                        f = p ? void 0 : (0, c.AWZ)(e, n),
                        v = p ? (0, c.vGo)(e, n) : void 0,
                        E = f || v,
                        C = (0, c.nZ4)(e, n),
                        b = "thread" === o && a === i.l3,
                        w = "thread" === o && a !== i.l3,
                        S = (0, c.gjV)(e, r),
                        I = (0, l.cG)(n, a, e.currentUserId),
                        N = !!p && (0, c.apd)(e, n),
                        M = Boolean(y && N),
                        k = !M && Boolean((0, c.I_m)(e, n)),
                        P = N && !y,
                        T = Boolean((b || s.isForum) && (m || u) && s.isNotJoined),
                        x = b || w,
                        R = d.OL && (0, l.L8)(s.id) && !C && !y && !s.isSupport && !(0, l.Qe)(s.id),
                        L = b && !C && !T,
                        B = I || b && !T,
                        O = d.OL && b && s.isCallActive,
                        F = d.OL && b && !s.isCallActive && (s.adminRights?.manageCall || s.isCreator && (0, l.yn)(s)),
                        D = b && f?.canViewStatistics,
                        U = b && (u || m) && (D || (0, l.ub)(s, "postStories")),
                        K = !U && (u || m),
                        j = b ? f?.requestsPending : void 0,
                        $ = Boolean(s?.isNotJoined && s.isJoinToSend),
                        z = Boolean(s?.isNotJoined && s.isJoinRequest),
                        _ = !(0, c.PKK)(e),
                        J = Boolean((0, c.qZq)(e, n));
                    return {
                        noMenu: !1,
                        isChannel: m,
                        isRightColumnShown: S,
                        canStartBot: k,
                        canRestartBot: M,
                        canSubscribe: T,
                        canSearch: x,
                        canCall: R,
                        canMute: L,
                        canViewStatistics: D,
                        canViewBoosts: U,
                        canShowBoostModal: K,
                        canLeave: B,
                        canEnterVoiceChat: O,
                        canCreateVoiceChat: F,
                        pendingJoinRequests: j,
                        shouldJoinToSend: $,
                        shouldSendJoinRequest: z,
                        noAnimation: _,
                        canTranslate: (0, c.jGY)(e, n) && !E?.isTranslationDisabled,
                        isTranslating: J,
                        translationLanguage: h,
                        language: A,
                        doNotTranslate: g,
                        detectedChatLanguage: s.detectedLanguage,
                        canUnblock: P
                    }
                }))((e => {
                    let {
                        chatId: t,
                        threadId: n,
                        noMenu: i,
                        isMobile: l,
                        isChannel: c,
                        canStartBot: f,
                        canRestartBot: v,
                        canUnblock: C,
                        canSubscribe: w,
                        canSearch: S,
                        canCall: I,
                        canMute: N,
                        canViewStatistics: M,
                        canViewBoosts: k,
                        canShowBoostModal: P,
                        canLeave: T,
                        canEnterVoiceChat: x,
                        canCreateVoiceChat: R,
                        pendingJoinRequests: L,
                        isRightColumnShown: B,
                        isForForum: O,
                        canExpandActions: F,
                        shouldJoinToSend: D,
                        shouldSendJoinRequest: U,
                        noAnimation: K,
                        canTranslate: j,
                        isTranslating: $,
                        translationLanguage: z,
                        language: _,
                        detectedChatLanguage: J,
                        doNotTranslate: H,
                        onTopicSearch: V
                    } = e;
                    const {
                        joinChannel: q,
                        sendBotCommand: G,
                        openLocalTextSearch: W,
                        restartBot: Y,
                        requestMasterAndRequestCall: Q,
                        requestNextManagementScreen: Z,
                        showNotification: X,
                        openChat: ee,
                        requestChatTranslation: te,
                        togglePeerTranslations: ne,
                        openChatLanguageModal: ae,
                        setSettingOption: oe,
                        unblockUser: ie,
                        setViewForumAsMessages: re
                    } = (0, o.ko)(), se = (0, a.li)(null), le = (0, A.A)(), [ce, de] = (0, a.J0)(!1), [me, ue] = (0, a.J0)(void 0), Ae = (0, u.A)((() => {
                        de(!0);
                        const e = se.current.getBoundingClientRect();
                        ue({
                            x: e.right,
                            y: e.bottom
                        })
                    })), he = (0, u.A)((() => {
                        de(!1)
                    })), pe = (0, u.A)((() => {
                        ue(void 0)
                    })), ge = (0, u.A)((() => {
                        q({
                            chatId: t
                        }), U && X({
                            message: le(c ? "RequestToJoinChannelSentDescription" : "RequestToJoinGroupSentDescription")
                        })
                    })), ye = (0, u.A)((() => {
                        G({
                            command: "/start"
                        })
                    })), fe = (0, u.A)((() => {
                        Y({
                            chatId: t
                        })
                    })), ve = (0, u.A)((() => {
                        ie({
                            userId: t
                        })
                    })), Ee = (0, u.A)((() => {
                        te($ ? {
                            chatId: t,
                            toLanguageCode: void 0
                        } : {
                            chatId: t,
                            toLanguageCode: z
                        })
                    })), Ce = (0, u.A)((() => {
                        Z({
                            screen: r.je.JoinRequests
                        })
                    })), be = (0, u.A)((() => {
                        O ? V?.() : (W(), l ? document.querySelector("#MobileSearch input").focus() : K ? (0, s.YS)((() => {
                            (0, s.Uz)(b)
                        })) : setTimeout(b, 320))
                    })), we = (0, u.A)((() => {
                        ee({
                            id: t
                        }), re({
                            chatId: t,
                            isEnabled: !0
                        })
                    })), Se = (0, u.A)((() => {
                        Q({
                            userId: t
                        })
                    })), Ie = (0, u.A)((e => {
                        S && d.lE && !e.shiftKey && (e.preventDefault(), be())
                    })), Ne = (0, u.A)(((e, t) => {
                        const n = `TranslateLanguage${t.split("-")[0].toUpperCase()}`,
                            a = le(n);
                        if (a !== n) return le(e, a);
                        const o = new Intl.DisplayNames([_], {
                            type: "language"
                        }).of(t);
                        return le(`${e}Other`, o)
                    })), Me = (0, a.Kr)((() => $ ? le("ShowOriginalButton") : Ne("TranslateToButton", z)), [z, Ne, $, le]), ke = (0, a.Kr)((() => {
                        if (J) return Ne("DoNotTranslateLanguage", J)
                    }), [Ne, J]), Pe = (0, u.A)((() => {
                        ne({
                            chatId: t,
                            isEnabled: !1
                        }), te({
                            chatId: t,
                            toLanguageCode: void 0
                        })
                    })), Te = (0, u.A)((() => {
                        ae({
                            chatId: t
                        })
                    })), xe = (0, u.A)((() => {
                        J && (oe({
                            doNotTranslate: [...H, J]
                        }), te({
                            chatId: t,
                            toLanguageCode: void 0
                        }), X({
                            message: Ne("AddedToDoNotTranslate", J)
                        }))
                    }));
                    (0, m.v)({
                        "Mod+F": Ie
                    });
                    const Re = (0, a.Kr)((() => e => {
                        let {
                            onTrigger: t,
                            isOpen: n
                        } = e;
                        return a.Ay.createElement(h.A, {
                            round: !0,
                            ripple: B,
                            color: "translucent",
                            size: "smaller",
                            className: n ? "active" : "",
                            onClick: t,
                            ariaLabel: le("TranslateMessage")
                        }, a.Ay.createElement("i", {
                            className: "icon icon-language",
                            "aria-hidden": !0
                        }))
                    }), [B, le]);
                    return a.Ay.createElement("div", {
                        className: "HeaderActions"
                    }, !O && j && a.Ay.createElement(p.A, {
                        className: "stickers-more-menu with-menu-transitions",
                        trigger: Re,
                        positionX: "right"
                    }, a.Ay.createElement(g.A, {
                        icon: "language",
                        onClick: Ee
                    }, Me), a.Ay.createElement(g.A, {
                        icon: "replace",
                        onClick: Te
                    }, le("Chat.Translate.Menu.To")), a.Ay.createElement(y.A, null), J && a.Ay.createElement(g.A, {
                        icon: "hand-stop",
                        onClick: xe
                    }, ke), a.Ay.createElement(g.A, {
                        icon: "close-circle",
                        onClick: Pe
                    }, le("Hide"))), !l && a.Ay.createElement(a.Ay.Fragment, null, F && !U && (w || D) && a.Ay.createElement(h.A, {
                        size: "tiny",
                        ripple: !0,
                        fluid: !0,
                        onClick: ge
                    }, le(c ? "ProfileJoinChannel" : "ProfileJoinGroup")), F && U && a.Ay.createElement(h.A, {
                        size: "tiny",
                        ripple: !0,
                        fluid: !0,
                        onClick: ge
                    }, le("ChannelJoinRequest")), F && f && a.Ay.createElement(h.A, {
                        size: "tiny",
                        ripple: !0,
                        fluid: !0,
                        onClick: ye
                    }, le("BotStart")), F && v && a.Ay.createElement(h.A, {
                        size: "tiny",
                        ripple: !0,
                        fluid: !0,
                        onClick: fe
                    }, le("BotRestart")), F && C && a.Ay.createElement(h.A, {
                        size: "tiny",
                        ripple: !0,
                        fluid: !0,
                        onClick: ve
                    }, le("Unblock")), S && a.Ay.createElement(h.A, {
                        round: !0,
                        ripple: B,
                        color: "translucent",
                        size: "smaller",
                        onClick: be,
                        ariaLabel: le("Conversation.SearchPlaceholder")
                    }, a.Ay.createElement("i", {
                        className: "icon icon-search",
                        "aria-hidden": !0
                    })), I && a.Ay.createElement(h.A, {
                        round: !0,
                        color: "translucent",
                        size: "smaller",
                        onClick: Se,
                        ariaLabel: "Call"
                    }, a.Ay.createElement("i", {
                        className: "icon icon-phone",
                        "aria-hidden": !0
                    }))), !O && Boolean(L) && a.Ay.createElement(h.A, {
                        round: !0,
                        className: "badge-button",
                        ripple: B,
                        color: "translucent",
                        size: "smaller",
                        onClick: Ce,
                        ariaLabel: le(c ? "SubscribeRequests" : "MemberRequests")
                    }, a.Ay.createElement("i", {
                        className: "icon icon-user",
                        "aria-hidden": !0
                    }), a.Ay.createElement("div", {
                        className: "badge"
                    }, L)), a.Ay.createElement(h.A, {
                        ref: se,
                        className: ce ? "active" : "",
                        round: !0,
                        ripple: !l,
                        size: "smaller",
                        color: "translucent",
                        disabled: i,
                        ariaLabel: "More actions",
                        onClick: Ae
                    }, a.Ay.createElement("i", {
                        className: "icon icon-more",
                        "aria-hidden": !0
                    })), me && a.Ay.createElement(E, {
                        chatId: t,
                        threadId: n,
                        isOpen: ce,
                        anchor: me,
                        withExtraActions: l || !F,
                        isChannel: c,
                        canStartBot: f,
                        canSubscribe: w,
                        canSearch: S,
                        canCall: I,
                        canMute: N,
                        canViewStatistics: M,
                        canViewBoosts: k,
                        canShowBoostModal: P,
                        canLeave: T,
                        canEnterVoiceChat: x,
                        canCreateVoiceChat: R,
                        pendingJoinRequests: L,
                        onJoinRequestsClick: Ce,
                        withForumActions: O,
                        onSubscribeChannel: ge,
                        onSearchClick: be,
                        onAsMessagesClick: we,
                        onClose: he,
                        onCloseAnimationEnd: pe
                    }))
                })));

            function b() {
                const e = document.querySelector(".RightHeader .SearchInput input");
                e?.focus()
            }
        },
        54639: (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var a = n(84051),
                o = n(13439),
                i = n(37661),
                r = n(17712),
                s = n(59030),
                l = n(9168),
                c = n(24433),
                d = n(97335),
                m = n(59589),
                u = n(87357),
                A = n(43874),
                h = n(62587);
            const p = "VGmPJoga",
                g = /#fff/gi,
                y = (0, a.ph)((e => {
                    let {
                        icon: t,
                        theme: n
                    } = e;
                    const {
                        isTouchScreen: o
                    } = (0, A.Ay)(), i = (0, h.A)((0, m.mr)(t, "full"), !1, d.qZ.Text), r = (0, a.Kr)((() => {
                        if (!i) return "";
                        const e = "dark" === n ? "rgb(170, 170, 170)" : "rgb(112, 117, 121)",
                            t = i.replace(g, e),
                            a = (new DOMParser).parseFromString(t, "image/svg+xml");
                        return a.querySelectorAll("path").forEach((t => {
                            t.style.stroke = e, t.style.strokeWidth = "0.5px"
                        })), `data:image/svg+xml;utf8,${a.documentElement.outerHTML}`
                    }), [i, n]);
                    return a.Ay.createElement("i", {
                        className: (0, u.A)("mklnEg0s", "icon", !o && p)
                    }, a.Ay.createElement("img", {
                        src: r,
                        alt: "",
                        className: (0, u.A)("tT8KQwg0", !o && p),
                        draggable: !1
                    }))
                })),
                f = (0, a.ph)((e => {
                    let {
                        bot: t,
                        theme: n,
                        chatId: d,
                        threadId: m,
                        isInSideMenu: u,
                        canShowNew: A,
                        onMenuOpened: h,
                        onMenuClosed: p
                    } = e;
                    const {
                        callAttachBot: g,
                        toggleAttachBot: f
                    } = (0, o.ko)(), v = (0, s.A)(), E = (0, a.Kr)((() => t.icons.find((e => {
                        let {
                            name: t
                        } = e;
                        return "default_static" === t
                    }))?.document), [t.icons]), [C, b, w] = (0, i.A)(), [S, I] = (0, a.J0)(void 0), N = (0, r.A)((e => {
                        e.preventDefault();
                        const t = e.currentTarget.getBoundingClientRect();
                        I({
                            x: t.right,
                            y: t.bottom
                        }), h(), b()
                    })), M = (0, r.A)((() => {
                        g(u ? {
                            bot: t,
                            isFromSideMenu: !0
                        } : {
                            bot: t,
                            chatId: d,
                            threadId: m
                        })
                    })), k = (0, r.A)((() => {
                        w(), p()
                    })), P = (0, r.A)((() => {
                        I(void 0)
                    })), T = (0, r.A)((() => {
                        f({
                            botId: t.id,
                            isEnabled: !1
                        })
                    }));
                    return a.Ay.createElement(c.A, {
                        key: t.id,
                        customIcon: E && a.Ay.createElement(y, {
                            icon: E,
                            theme: n
                        }),
                        icon: E ? void 0 : "bots",
                        onClick: M,
                        onContextMenu: N
                    }, t.shortName, A && t.isDisclaimerNeeded && a.Ay.createElement("span", {
                        className: "menu-item-badge"
                    }, v("New")), S && a.Ay.createElement(l.A, {
                        isOpen: C,
                        positionX: "right",
                        style: `left: ${S.x}px;top: ${S.y}px;`,
                        className: "bot-attach-context-menu",
                        autoClose: !0,
                        withPortal: !0,
                        onClose: k,
                        onCloseAnimationEnd: P
                    }, a.Ay.createElement(c.A, {
                        icon: "stop",
                        destructive: !0,
                        onClick: T
                    }, v("WebApp.RemoveBot"))))
                }))
        },
        25897: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(80089),
                i = n(80464);
            const r = e => {
                const {
                    isOpen: t
                } = e, n = (0, i.A)(o.ar.Extra, "CustomEmojiTooltip", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            }
        },
        83689: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(80089),
                i = n(80464);
            const r = e => {
                const {
                    isOpen: t
                } = e, n = (0, i.A)(o.ar.Extra, "CustomSendMenu", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            }
        },
        41510: (e, t, n) => {
            n.d(t, {
                I: () => y,
                A: () => f
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(87357),
                s = n(11778),
                l = n(55153),
                c = n(45761),
                d = n(17712),
                m = n(59030),
                u = n(29886),
                A = n(34201),
                h = n(3325),
                p = n(37661);
            const g = (0, a.ph)((e => {
                let {
                    isQuick: t,
                    isGeneric: n,
                    onFileSelect: o
                } = e;
                const [i, s, l] = (0, p.A)(), c = (0, r.A)("DropTarget", i && "hovered");
                return a.Ay.createElement("div", {
                    className: c,
                    onDrop: o,
                    onDragEnter: s,
                    onDragLeave: e => {
                        const {
                            relatedTarget: t
                        } = e;
                        t && e.stopPropagation(), l()
                    },
                    "data-dropzone": !0
                }, a.Ay.createElement("div", {
                    className: "target-content"
                }, a.Ay.createElement("div", {
                    className: "icon icon-" + (t ? "photo" : "document")
                }), a.Ay.createElement("div", {
                    className: "title"
                }, "Drop files here to send them"), !n && a.Ay.createElement("div", {
                    className: "description"
                }, t ? "in a quick way" : "without compression")))
            }));
            let y = function(e) {
                return e.None = "none", e.Document = "document", e.QuickFile = "quick_file", e
            }({});
            const f = (0, a.ph)((e => {
                let {
                    isOpen: t,
                    withQuick: n,
                    onHide: p,
                    onFileSelect: y,
                    editingMessage: f
                } = e;
                const v = (0, m.A)(),
                    {
                        showNotification: E
                    } = (0, o.ko)(),
                    C = (0, a.li)(null),
                    b = (0, u.A)(n),
                    {
                        shouldRender: w,
                        transitionClassNames: S
                    } = (0, A.A)(t),
                    I = f && f?.groupedId;
                (0, a.vJ)((() => t ? (0, s.A)(p) : void 0), [t, p]);
                const N = (0, d.A)((async e => {
                        const {
                            dataTransfer: t
                        } = e;
                        let a = [];
                        if (!(t.files && t.files.length > 0) || t.items && t.items.length) {
                            if (t.items && t.items.length > 0) {
                                const e = await (0, c.A)(t.items),
                                    n = e && await (0, l.A)(e[0].name, e[0]);
                                if (f && n && (0, i.eh)(f, n)) return void E({
                                    message: v(I ? "lng_edit_media_album_error" : "lng_edit_media_invalid_file")
                                });
                                e?.length && (a = a.concat(e))
                            }
                        } else a = a.concat(Array.from(t.files));
                        p(), y(a, !n && void 0)
                    })),
                    M = (0, d.A)((e => {
                        const {
                            dataTransfer: t
                        } = e;
                        t.files && t.files.length > 0 && (p(), y(Array.from(t.files), !0))
                    })),
                    k = (0, d.A)((e => {
                        e.stopPropagation();
                        const {
                            target: t,
                            relatedTarget: n
                        } = e;
                        !t.matches(".DropTarget, .DropArea") || n && n.matches(".DropTarget, .DropArea") || (C.current = window.setTimeout((() => {
                            p()
                        }), 150))
                    }));
                if (!w) return;
                const P = n || b,
                    T = (0, r.A)("DropArea", S);
                return a.Ay.createElement(h.A, {
                    containerId: "#middle-column-portals"
                }, a.Ay.createElement("div", {
                    className: T,
                    onDragLeave: k,
                    onDragOver: () => {
                        C.current && window.clearTimeout(C.current)
                    },
                    onDrop: p,
                    onClick: p
                }, a.Ay.createElement(g, {
                    onFileSelect: N,
                    isGeneric: !P
                }), P && a.Ay.createElement(g, {
                    onFileSelect: M,
                    isQuick: !0
                })))
            }))
        },
        49068: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(80089),
                i = n(80464);
            const r = e => {
                const {
                    isOpen: t
                } = e, n = (0, i.A)(o.ar.Extra, "EmojiTooltip", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            }
        },
        78407: (e, t, n) => {
            n.d(t, {
                A: () => q
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(66644),
                s = n(29807),
                l = n(87357),
                c = n(52674),
                d = n(14680),
                m = n(17237),
                u = n(36353),
                A = n(37836),
                h = n(82393),
                p = n(4961),
                g = n(11359),
                y = n(43874),
                f = n(19129),
                v = n(37661),
                E = n(32706),
                C = n(17712),
                b = n(59030),
                w = n(88458),
                S = n(41733);

            function I(e, t, n) {
                var a;
                return (t = "symbol" == typeof(a = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, "string");
                        if ("object" != typeof a) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t)) ? a : a + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class N {
                constructor(e, t, n) {
                    this.container = t, this.options = n, I(this, "video", void 0), I(this, "isPlaying", !1), this.video = document.createElement("video"), this.video.src = e, this.video.disablePictureInPicture = !0, this.video.muted = !0, n.style && this.video.setAttribute("style", n.style), this.video.style.position = "absolute", this.video.load(), this.options.noLoop || (this.video.loop = !0), (0, r.RK)((() => {
                        this.container.appendChild(this.video), this.recalculatePositionAndSize()
                    }))
                }
                play() {
                    !this.isPlaying && this.video && (this.recalculatePositionAndSize(), this.video.paused && (0, S.A)(this.video), this.isPlaying = !0)
                }
                pause() {
                    this.isPlaying && this.video && (this.video.paused || this.video.pause(), this.isPlaying = !1)
                }
                destroy() {
                    this.pause(), this.video?.remove(), this.video = void 0
                }
                updatePosition(e) {
                    this.options.position = e, this.recalculatePositionAndSize()
                }
                recalculatePositionAndSize() {
                    const {
                        size: e,
                        position: {
                            x: t,
                            y: n
                        }
                    } = this.options;
                    (0, r.YS)((() => {
                        if (!this.video) return;
                        const a = this.video,
                            {
                                width: o,
                                height: i
                            } = this.container.getBoundingClientRect();
                        (0, r.RK)((() => {
                            a.style.left = `${Math.round(t*o)}px`, a.style.top = `${Math.round(n*i)}px`, a.style.width = `${e}px`, a.style.height = `${e}px`
                        }))
                    }))
                }
            }
            var M = n(53307),
                k = n(43336),
                P = n(71322),
                T = n(76023),
                x = n(28021),
                R = n(86974),
                L = n(82117),
                B = n(93545),
                O = n(672),
                F = n(61157),
                D = n(38691);
            const U = 1.25 * T.$;
            var K = n(64493),
                j = n(61361),
                $ = n(80089),
                z = n(80464);
            const _ = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, z.A)($.ar.Extra, "TextFormatter", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                J = "input-scroller",
                H = 140,
                V = ["Esc", "Escape", "Enter", "PageUp", "PageDown", "Meta", "Alt", "Ctrl", "ArrowDown", "ArrowUp", "Control", "Shift"],
                q = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        chatId: n,
                        threadId: a
                    } = t;
                    const {
                        messageSendKeyCombo: o
                    } = e.settings.byKey;
                    return {
                        messageSendKeyCombo: o,
                        replyInfo: n && a ? (0, s.GA4)(e, n, a)?.replyInfo : void 0,
                        isSelectModeActive: (0, s.rTV)(e),
                        canPlayAnimatedEmojis: (0, s.BWX)(e)
                    }
                }))((e => {
                    let {
                        ref: t,
                        id: n,
                        chatId: S,
                        captionLimit: I,
                        isAttachmentModalInput: T,
                        isStoryInput: $,
                        customEmojiPrefix: z,
                        editableInputId: q,
                        isReady: G,
                        isActive: W,
                        getHtml: Y,
                        placeholder: Q,
                        timedPlaceholderLangKey: Z,
                        timedPlaceholderDate: X,
                        forcedPlaceholder: ee,
                        canSendPlainText: te,
                        canAutoFocus: ne,
                        noFocusInterception: ae,
                        shouldSuppressFocus: oe,
                        shouldSuppressTextFormatter: ie,
                        replyInfo: re,
                        isSelectModeActive: se,
                        canPlayAnimatedEmojis: le,
                        messageSendKeyCombo: ce,
                        onUpdate: de,
                        onSuppressedFocus: me,
                        onSend: ue,
                        onScroll: Ae,
                        onFocus: he,
                        onBlur: pe,
                        isNeedPremium: ge
                    } = e;
                    const {
                        editLastMessage: ye,
                        replyToNextMessage: fe,
                        showAllowedMessageTypesNotification: ve,
                        openPremiumModal: Ee
                    } = (0, o.ko)();
                    let Ce = (0, a.li)(null);
                    t && (Ce = t);
                    const be = (0, a.li)(null),
                        we = (0, a.li)(null),
                        Se = (0, a.li)(null),
                        Ie = (0, a.li)(null),
                        Ne = (0, a.li)(null),
                        Me = (0, a.li)(null),
                        ke = (0, b.A)(),
                        Pe = (0, a.li)(!1),
                        [Te, xe, Re] = (0, v.A)(),
                        [Le, Be] = (0, a.J0)(),
                        [Oe, Fe] = (0, a.J0)(),
                        [De, Ue] = (0, a.J0)(!1),
                        {
                            isMobile: Ke
                        } = (0, y.Ay)(),
                        je = Ke && (h.pz || h.Ni),
                        [$e, ze] = (0, a.J0)(!1);
                    (0, a.vJ)((() => {
                        ze(Boolean(Z && X))
                    }), [X, Z]);
                    const _e = (0, C.A)((() => {
                        ze(!1)
                    }));
                    ! function(e, t, n, i, l, c, d, m, u) {
                        const A = (0, R.A)(t, !m),
                            h = (0, x.A)(A, !0),
                            p = (0, D.A)(),
                            g = (0, a.li)(new Map),
                            y = (0, C.A)((e => {
                                e.forEach((e => {
                                    const t = g.current.get(e);
                                    t && (t.destroy(), g.current.delete(e))
                                }))
                            })),
                            f = (0, C.A)((() => {
                                if (!(m && t.current && n.current && i.current)) return;
                                const e = (0, o.mS)(),
                                    a = new Set(g.current.keys());
                                Array.from(t.current.querySelectorAll(".custom-emoji")).forEach((t => {
                                    if (!t.dataset.uniqueId) return;
                                    const o = `${c}${t.dataset.uniqueId}${A||""}`,
                                        r = t.dataset.documentId;
                                    a.delete(o);
                                    const m = (0, M.ZR)(r);
                                    if (!m) return;
                                    const u = n.current.getBoundingClientRect(),
                                        y = t.getBoundingClientRect(),
                                        f = (0, k.LI)((y.left - u.left) / u.width, 4),
                                        v = (0, k.LI)((y.top - u.top) / u.height, 4);
                                    if (g.current.has(o)) return void g.current.get(o).updatePosition(f, v);
                                    const E = e.customEmojis.byId[r];
                                    if (!E) return;
                                    const C = E?.stickerSetInfo && (0, s.CzR)(e, E.stickerSetInfo),
                                        b = [c, r, A, p].filter(Boolean).join("_");
                                    (async function(e) {
                                        let {
                                            customEmoji: t,
                                            sharedCanvasRef: n,
                                            sharedCanvasHqRef: a,
                                            absoluteContainerRef: o,
                                            renderId: i,
                                            viewId: r,
                                            mediaUrl: s,
                                            position: l,
                                            isHq: c,
                                            textColor: d,
                                            colorFilter: m
                                        } = e;
                                        if (t.isLottie) {
                                            const e = t.shouldUseTextColor && d ? (0, P.E2)(d) : void 0,
                                                o = (await (0, w.Y)()).init(s, c ? a.current : n.current, i, {
                                                    size: U,
                                                    coords: l,
                                                    isLowPriority: !c
                                                }, r, e ? [e.r, e.g, e.b] : void 0);
                                            return {
                                                play: () => o.play(),
                                                pause: () => o.pause(),
                                                destroy: () => o.removeView(r),
                                                updatePosition: (e, t) => o.setSharedCanvasCoords(r, {
                                                    x: e,
                                                    y: t
                                                })
                                            }
                                        }
                                        if (t.isVideo) {
                                            const e = t.shouldUseTextColor && m ? `filter: ${m};` : void 0,
                                                n = new N(s, o.current, {
                                                    size: U,
                                                    position: l,
                                                    style: e
                                                });
                                            return {
                                                play: () => n.play(),
                                                pause: () => n.pause(),
                                                destroy: () => n.destroy(),
                                                updatePosition: (e, t) => n.updatePosition({
                                                    x: e,
                                                    y: t
                                                })
                                            }
                                        }
                                        throw new Error("Unsupported custom emoji type")
                                    })({
                                        customEmoji: E,
                                        sharedCanvasRef: n,
                                        sharedCanvasHqRef: i,
                                        absoluteContainerRef: l,
                                        renderId: b,
                                        viewId: o,
                                        mediaUrl: m,
                                        isHq: C,
                                        position: {
                                            x: f,
                                            y: v
                                        },
                                        textColor: A,
                                        colorFilter: h
                                    }).then((e => {
                                        d && e.play(), g.current.set(o, e)
                                    }))
                                })), y(Array.from(a))
                            }));
                        (0, a.vJ)((() => (0, M.K3)(f)), [f]), (0, a.vJ)((() => {
                            const e = g.current;
                            return () => {
                                y(Array.from(e.keys()))
                            }
                        }), []), (0, a.vJ)((() => {
                            e() && t.current && n.current && u && m ? (0, r.YS)((() => {
                                f()
                            })) : y(Array.from(g.current.keys()))
                        }), [e, f, t, y, n, u, m]), (0, a.Nf)((() => {
                            document.documentElement.style.setProperty("--input-custom-emoji-filter", h || "none")
                        }), [h]), (0, L.A)((e => {
                            let [t] = e;
                            void 0 !== t && A !== t && f()
                        }), [A, f]);
                        const v = (0, O.A)(f, [f], 300, !1);
                        (0, B.A)(n, v), (0, L.A)((e => {
                            let [t] = e;
                            p !== t && (y(Array.from(g.current.keys())), f())
                        }), [p, f]);
                        const E = (0, C.A)((() => {
                                g.current.forEach((e => {
                                    e.pause()
                                }))
                            })),
                            b = (0, C.A)((() => {
                                d && g.current?.forEach((e => {
                                    e.play()
                                }))
                            })),
                            S = (0, C.A)((() => {
                                (0, r.YS)(b)
                            }));
                        (0, F.A)(E, S)
                    }(Y, Ce, Ie, Ne, Me, z, le, G, W);
                    const Je = T ? 160 : $ ? 128 : Ke ? 256 : 416,
                        He = (0, C.A)((function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            (0, r.gm)((() => {
                                const t = Ce.current.closest(`.${J}`),
                                    n = Number(t.style.height.replace("px", "")),
                                    a = Se.current,
                                    {
                                        scrollHeight: o
                                    } = a,
                                    i = Math.min(o, Je);
                                if (i === n) return;
                                const s = o > Je;

                                function l() {
                                    const e = Math.round(50 * Math.log(Math.abs(i - n)));
                                    t.style.height = `${i}px`, t.style.transitionDuration = `${e}ms`, t.classList.toggle("overflown", s)
                                }
                                return e ? void(0, r.RK)(l) : l
                            }))
                        }));
                    (0, a.Nf)((() => {
                        T && He(!1)
                    }), [T, He]);
                    const Ve = (0, a.li)(Y());
                    (0, a.Nf)((() => {
                        const e = W ? Y() : "";
                        e !== Ce.current.innerHTML && (Ce.current.innerHTML = e), e !== we.current.innerHTML && (we.current.innerHTML = e), e !== Ve.current && (Ve.current = e, He(!e))
                    }), [Y, W, He]), (0, a.li)(S).current = S;
                    const qe = (0, C.A)((() => {
                            Ce.current && !ge && ((0, E.G)() ? setTimeout(qe, 350) : (0, u.A)(Ce.current))
                        })),
                        Ge = (0, C.A)((() => {
                            Re(),
                                function() {
                                    const e = window.getSelection();
                                    e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty())
                                }()
                        }));

                    function We() {
                        if (h.pz) return !1;
                        const e = window.getSelection();
                        if (!e || !e.rangeCount || Pe.current) return Re(), h.Ni && Ue(!1), !1;
                        const t = e.getRangeAt(0),
                            n = t.toString().trim();
                        return !(ie || !(0, g.L)(t, q || i.CfG) || !n || (0, m.A)(n) || !t.START_TO_END) || (Re(), !1)
                    }

                    function Ye() {
                        if (!We()) return;
                        if (De) return;
                        const e = window.getSelection().getRangeAt(0),
                            t = e.getBoundingClientRect(),
                            n = Ce.current.closest(`.${J}`).getBoundingClientRect();
                        let a = t.left + t.width / 2 - n.left;
                        a < H ? a = H : a > n.width - H && (a = n.width - H), Be({
                            x: a,
                            y: t.top - n.top
                        }), Fe(e), xe()
                    }

                    function Qe() {
                        be.current && window.clearTimeout(be.current), be.current = window.setTimeout(Ye, 260)
                    }
                    const Ze = (0, C.A)((() => Ee()));
                    (0, a.vJ)((() => {
                        h.TF || ne && qe()
                    }), [S, qe, re, ne]), (0, a.vJ)((() => {
                        if (!S || q !== i.CfG || ae || je || se) return;
                        const e = e => {
                            if ((0, d.ZJ)()) return;
                            const {
                                key: t
                            } = e, n = e.target;
                            if (!n || V.includes(t)) return;
                            const a = Ce.current,
                                o = document.getSelection()?.isCollapsed;
                            if (!((t.startsWith("Arrow") || e.shiftKey && "Shift" === t) && !o || "KeyC" === e.code && (e.ctrlKey || e.metaKey) && "INPUT" !== n.tagName) && a && n !== a && "INPUT" !== n.tagName && "TEXTAREA" !== n.tagName && !n.isContentEditable) {
                                (0, u.A)(a, !0, !0);
                                const t = new KeyboardEvent(e.type, e);
                                a.dispatchEvent(t)
                            }
                        };
                        return document.addEventListener("keydown", e, !0), () => {
                            document.removeEventListener("keydown", e, !0)
                        }
                    }), [S, q, je, se, ae]), (0, a.vJ)((() => {
                        const e = (0, A.sg)((e => {
                            "Tab" !== e.key || (0, d.ZJ)() || (e.preventDefault(), (0, r.RK)(qe))
                        }), 2e3, !0, !1);
                        return (0, c.A)({
                            onTab: e
                        })
                    }), [qe]), (0, a.vJ)((() => {
                        const e = Ce.current;

                        function t() {
                            e.blur()
                        }
                        return oe && e.addEventListener("focus", t), () => {
                            e.removeEventListener("focus", t)
                        }
                    }), [oe]);
                    const Xe = (0, f.A)((() => Boolean(W && Y())), [W, Y]),
                        et = (0, l.A)("form-control allow-selection", Xe && "touched", oe && "focus-disabled"),
                        tt = (0, l.A)("input-scroller-content", ge && "is-need-premium");
                    return a.Ay.createElement("div", {
                        id: n,
                        onClick: oe ? me : void 0,
                        dir: ke.isRtl ? "rtl" : void 0
                    }, a.Ay.createElement("div", {
                        className: (0, l.A)("custom-scroll", J, ge && "is-need-premium"),
                        onScroll: Ae,
                        onClick: T || te ? void 0 : function() {
                            T || te || $ && ge || ve({
                                chatId: S
                            })
                        }
                    }, a.Ay.createElement("div", {
                        className: tt
                    }, a.Ay.createElement("div", {
                        ref: Ce,
                        id: q || i.CfG,
                        className: et,
                        contentEditable: T || te,
                        role: "textbox",
                        dir: "auto",
                        tabIndex: 0,
                        onClick: qe,
                        onChange: function(e) {
                            const {
                                innerHTML: t,
                                textContent: n
                            } = e.currentTarget;
                            if (de("<br>" === t ? "" : t), !h.TF && (!n || !n.length) && (h.TL || !t.includes("emoji-small")) && !t.includes("custom-emoji")) {
                                const e = window.getSelection();
                                e && (Ce.current.blur(), e.removeAllRanges(), (0, u.A)(Ce.current, !0))
                            }
                        },
                        onKeyDown: function(e) {
                            const {
                                isComposing: t
                            } = e, n = Y();
                            if (!t && !n && (e.metaKey || e.ctrlKey)) {
                                const t = "ArrowDown" === e.key ? 1 : "ArrowUp" === e.key ? -1 : void 0;
                                if (t) return e.preventDefault(), void fe({
                                    targetIndexDelta: t
                                })
                            }
                            t || "Enter" !== e.key || e.shiftKey ? t || "ArrowUp" !== e.key || n || e.metaKey || e.ctrlKey || e.altKey ? e.target.addEventListener("keyup", Qe, {
                                once: !0
                            }) : (e.preventDefault(), ye()) : !je && ("enter" === ce && !e.shiftKey || "ctrl-enter" === ce && (e.ctrlKey || e.metaKey)) && (e.preventDefault(), Re(), ue())
                        },
                        onMouseDown: function(e) {
                            function t(e) {
                                e instanceof KeyboardEvent && "Esc" !== e.key && "Escape" !== e.key || (setTimeout((() => {
                                    Pe.current = !1
                                }), 100), window.removeEventListener("keydown", t), window.removeEventListener("mousedown", t))
                            }
                            2 === e.button ? Pe.current || (Pe.current = !0, document.addEventListener("mousedown", t), document.addEventListener("keydown", t)) : (e.currentTarget.closest(".message-input-wrapper") || e.target).addEventListener("mouseup", Qe, {
                                once: !0
                            })
                        },
                        onContextMenu: h.Ni ? function(e) {
                            We() && (Ue(!De), De ? Re() : (e.preventDefault(), e.stopPropagation(), Ye()))
                        } : void 0,
                        onTouchCancel: h.Ni ? Qe : void 0,
                        "aria-label": Q,
                        onFocus: ge ? void 0 : he,
                        onBlur: ge ? void 0 : pe
                    }), !ee && a.Ay.createElement("span", {
                        className: (0, l.A)("placeholder-text", !T && !te && "with-icon", ge && "is-need-premium"),
                        dir: "auto"
                    }, !T && !te && a.Ay.createElement("i", {
                        className: "icon icon-lock-badge placeholder-icon"
                    }), $e ? a.Ay.createElement(j.A, {
                        langKey: Z,
                        endsAt: X,
                        onEnd: _e
                    }) : Q, $ && ge && a.Ay.createElement(K.A, {
                        className: "unlock-button",
                        size: "tiny",
                        color: "adaptive",
                        onClick: Ze
                    }, ke("StoryRepliesLockedButton"))), a.Ay.createElement("canvas", {
                        ref: Ie,
                        className: "shared-canvas"
                    }), a.Ay.createElement("canvas", {
                        ref: Ne,
                        className: "shared-canvas"
                    }), a.Ay.createElement("div", {
                        ref: Me,
                        className: "absolute-video-container"
                    }))), a.Ay.createElement("div", {
                        ref: Se,
                        className: (0, l.A)("custom-scroll", J, "clone", ge && "is-need-premium")
                    }, a.Ay.createElement("div", {
                        className: tt
                    }, a.Ay.createElement("div", {
                        ref: we,
                        className: (0, l.A)(et, "clone"),
                        dir: "auto"
                    }))), void 0 !== I && a.Ay.createElement("div", {
                        className: "max-length-indicator",
                        dir: "auto"
                    }, I), a.Ay.createElement(_, {
                        isOpen: Te,
                        anchorPosition: Le,
                        selectedRange: Oe,
                        setSelectedRange: Fe,
                        onClose: Ge
                    }), ee && a.Ay.createElement("span", {
                        className: "forced-placeholder"
                    }, (0, p.A)(ee)))
                })))
        },
        26440: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(87357),
                s = n(37661),
                l = n(17712),
                c = n(94803),
                d = n(64493),
                m = n(66469),
                u = n(57474),
                A = n(80089),
                h = n(80464);
            const p = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, h.A)(A.ar.Extra, "SymbolMenu", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                g = (0, a.ph)((e => {
                    let {
                        chatId: t,
                        threadId: n,
                        isMobile: A,
                        canSendGifs: h,
                        canSendStickers: g,
                        isMessageComposer: y,
                        isReady: f,
                        isSymbolMenuOpen: v,
                        idPrefix: E,
                        isAttachmentModal: C,
                        canSendPlainText: b,
                        isSymbolMenuForced: w,
                        className: S,
                        forceDarkTheme: I,
                        inputCssSelector: N = i.m$5,
                        openSymbolMenu: M,
                        closeSymbolMenu: k,
                        onCustomEmojiSelect: P,
                        onStickerSelect: T,
                        onGifSelect: x,
                        onRemoveSymbol: R,
                        onEmojiSelect: L,
                        closeBotCommandMenu: B,
                        closeSendAsMenu: O
                    } = e;
                    const {
                        setStickerSearchQuery: F,
                        setGifSearchQuery: D,
                        addRecentEmoji: U,
                        addRecentCustomEmoji: K
                    } = (0, o.ko)(), j = (0, a.li)(null), [$, z] = (0, s.A)(), [_, J] = (0, a.J0)(void 0), H = (0, r.A)("mobile-symbol-menu-button", !f && "not-ready", $ ? v && "menu-opened" : v && "is-loading"), V = (0, l.A)((() => {
                        B?.(), O?.(), M();
                        const e = j.current;
                        if (!e) return;
                        const {
                            x: t,
                            y: n
                        } = e.getBoundingClientRect();
                        J({
                            x: t,
                            y: n
                        })
                    })), q = (0, l.A)((e => {
                        "stickers" === e ? (F({
                            query: ""
                        }), D({
                            query: void 0
                        })) : (D({
                            query: ""
                        }), F({
                            query: void 0
                        }))
                    })), G = (0, l.A)((() => {
                        const e = document.querySelector(C ? i.wVm : N);
                        A && e === document.activeElement ? (e?.blur(), setTimeout((() => {
                            B?.(), M()
                        }), 100)) : M()
                    })), W = (0, l.A)((() => j.current)), Y = (0, l.A)((() => j.current?.closest(".custom-scroll, .no-scrollbar"))), Q = (0, l.A)((() => document.querySelector("#portals .SymbolMenu .bubble"))), Z = (0, l.A)((() => ({
                        withPortal: !0
                    }))), {
                        positionX: X,
                        positionY: ee,
                        transformOriginX: te,
                        transformOriginY: ne,
                        style: ae
                    } = (0, c.A)(_, W, Y, Q, Z);
                    return a.Ay.createElement(a.Ay.Fragment, null, A ? a.Ay.createElement(d.A, {
                        className: H,
                        round: !0,
                        color: "translucent",
                        onClick: v ? k : G,
                        ariaLabel: "Choose emoji, sticker or GIF"
                    }, a.Ay.createElement("i", {
                        className: "icon icon-smile"
                    }), a.Ay.createElement("i", {
                        className: "icon icon-keyboard"
                    }), v && !$ && a.Ay.createElement(u.A, {
                        color: "gray"
                    })) : a.Ay.createElement(m.A, {
                        className: (0, r.A)("symbol-menu-button", v && "activated"),
                        round: !0,
                        color: "translucent",
                        onActivate: V,
                        ariaLabel: "Choose emoji, sticker or GIF"
                    }, a.Ay.createElement("div", {
                        ref: j,
                        className: "symbol-menu-trigger"
                    }), a.Ay.createElement("i", {
                        className: "icon icon-smile"
                    })), a.Ay.createElement(p, {
                        chatId: t,
                        threadId: n,
                        isOpen: v || Boolean(w),
                        canSendGifs: h,
                        canSendStickers: g,
                        isMessageComposer: y,
                        idPrefix: E,
                        onLoad: z,
                        onClose: k,
                        onEmojiSelect: L,
                        onStickerSelect: T,
                        onCustomEmojiSelect: P,
                        onGifSelect: x,
                        onRemoveSymbol: R,
                        onSearchOpen: q,
                        addRecentEmoji: U,
                        addRecentCustomEmoji: K,
                        isAttachmentModal: C,
                        canSendPlainText: b,
                        className: (0, r.A)(S, I && "component-theme-dark"),
                        positionX: C ? X : void 0,
                        positionY: C ? ee : void 0,
                        transformOriginX: C ? te : void 0,
                        transformOriginY: C ? ne : void 0,
                        style: C ? ae : void 0
                    }))
                }))
        },
        55153: (e, t, n) => {
            n.d(t, {
                A: () => d,
                L: () => m
            });
            var a = n(31481),
                o = n(87679),
                i = n(24909);
            const r = 1280,
                s = 40,
                l = 20,
                c = /\.[^/.]+$/;
            async function d(e, t, l) {
                const m = URL.createObjectURL(t),
                    {
                        type: A,
                        size: h
                    } = t;
                let p, g, y, f;
                if (a.gex.has(A)) {
                    const n = await (0, o.NN)(m),
                        {
                            width: h,
                            height: g
                        } = n;
                    f = !u(h, g);
                    const v = Math.max(h, g) > r,
                        E = A === a.Vz3;
                    if (!f) {
                        if (!l?.compressedBlobUrl && !E && (v || "image/jpeg" !== A)) {
                            const n = await (0, i.s)(m, v ? r / Math.max(h, g) : 1, "image/jpeg");
                            return URL.revokeObjectURL(m), d(e, t, {
                                compressedBlobUrl: n
                            })
                        }
                        "image/jpeg" === A && (e = e.replace(c, ".jpg")), p = {
                            width: h,
                            height: g
                        }
                    }
                    y = Math.max(h, g) > s ? await (0, i.s)(m, s / Math.max(h, g), "image/jpeg") : m
                } else if (a.fNs.has(A)) {
                    try {
                        const {
                            videoWidth: e,
                            videoHeight: t,
                            duration: n
                        } = await (0, o.FW)(m);
                        f = !u(e, t), f || (p = {
                            width: e,
                            height: t,
                            duration: n
                        })
                    } catch (e) {
                        f = !0
                    }
                    y = await (0, o.eT)(m)
                } else if (a.IH3.has(A)) {
                    const {
                        duration: e,
                        title: t,
                        performer: a,
                        coverUrl: o
                    } = await async function(e) {
                        const {
                            fetchFromUrl: t,
                            selectCover: a
                        } = await n.e(244).then(n.t.bind(n, 30244, 23)), o = await t(e), {
                            common: {
                                title: i,
                                artist: r,
                                picture: s
                            },
                            format: {
                                duration: l
                            }
                        } = o, c = a(s), d = c ? new Blob([c.data], {
                            type: c.format
                        }) : void 0;
                        return {
                            title: i,
                            performer: r,
                            duration: l,
                            coverUrl: d ? URL.createObjectURL(d) : void 0
                        }
                    }(m);
                    g = {
                        duration: e || 0,
                        title: t,
                        performer: a
                    }, y = o
                }
                return {
                    blobUrl: m,
                    filename: e,
                    mimeType: A,
                    size: h,
                    quick: p,
                    audio: g,
                    previewBlobUrl: y,
                    shouldSendAsFile: f || void 0,
                    uniqueId: `${Date.now()}-${Math.random()}`,
                    ...l
                }
            }

            function m(e, t) {
                return e.map((e => t ? e.compressedBlobUrl ? {
                    ...e,
                    blobUrl: e.compressedBlobUrl
                } : e : {
                    ...e,
                    shouldSendAsFile: !(e.voice || e.audio) || void 0,
                    shouldSendAsSpoiler: void 0
                }))
            }

            function u(e, t) {
                return Math.max(e, t) / Math.min(e, t) <= l
            }
        },
        45761: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var a = n(87679);
            async function o(e) {
                const t = [];

                function n(e, a) {
                    return new Promise((o => {
                        if (e instanceof File) t.push(e), o(e);
                        else if (e.isFile) {
                            const n = a.getAsFile();
                            e.file((e => {
                                t.push(e), o(e)
                            }), (() => {
                                n && t.push(n), o(n)
                            }))
                        } else e.isDirectory && e.createReader().readEntries((e => {
                            const t = [];
                            for (let o = 0; o < e.length; o++) t.push(n(e[o], a));
                            o(Promise.all(t))
                        }))
                    }))
                }
                const o = [];
                for (let t = 0; t < e.length; t++) {
                    const a = e[t];
                    if ("file" === a.kind) {
                        const e = a.webkitGetAsEntry() || a.getAsFile();
                        e && o.push(n(e, a))
                    }
                }
                return await Promise.all(o), (0, a.kc)(t)
            }
        },
        17778: (e, t, n) => {
            n.d(t, {
                S: () => s
            });
            const a = /(<br>|<br\s?\/>)/g,
                o = /(&nbsp;|\u00A0)/g,
                i = /(<div>|<\/div>)/gi,
                r = /\n$/i;

            function s(e) {
                return e.replace(o, " ").replace(a, "\n").replace(i, "").replace(r, "")
            }
        },
        85449: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(31481),
                i = n(98607),
                r = n(4961),
                s = n(18276);

            function l(e, t) {
                return "receipt" === t.type ? e("PaymentReceipt") : "buy" === t.type ? (0, i.i)(t.text, o.Cyx, a.Ay.createElement(s.A, {
                    className: "star-currency-icon",
                    name: "star"
                })) : (0, r.A)(t.text)
            }
        },
        11359: (e, t, n) => {
            n.d(t, {
                L: () => o
            });
            const a = 5;

            function o(e, t) {
                const {
                    commonAncestorContainer: n
                } = e;
                let o = n,
                    i = 1;
                for (; o && o.id !== t && i < a;) o = o.parentElement, i++;
                return Boolean(o && o.id === t)
            }
        },
        3225: (e, t, n) => {
            n.d(t, {
                A: () => E
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(66644),
                s = n(98221),
                l = n(36353),
                c = n(39074),
                d = n(82393),
                m = n(58734),
                u = n(63988),
                A = n(83414),
                h = n(19129),
                p = n(37661),
                g = n(17712);
            const y = 300,
                f = new RegExp(`(${s.A.source})$`, "g"),
                v = new RegExp(`${i.bpX.source}$`, "g");

            function E(e, t, n, E, C, b) {
                const {
                    loadCustomEmojiForEmoji: w,
                    clearCustomEmojiForEmoji: S
                } = (0, o.ko)(), [I, N, M] = (0, p.A)(!1), k = (0, u.gs)((() => {
                    const n = t();
                    if (!e || !n || !E()?.collapsed) return;
                    if (!n.match(d.TL ? s.A : i.bpX)) return;
                    const a = (0, c.LV)(C.current);
                    return a.match(d.TL ? f : v)?.[0]
                }), [t, E, C, e], y), P = (0, A.A)(k, [k, t, E], !0), T = (0, h.A)((() => Boolean(P())), [P]), x = Boolean(b?.length);
                (0, a.vJ)((() => {
                    if (!e || !T) return;
                    const t = P();
                    t ? x || w({
                        emoji: d.TL ? t : t.match(/.+alt="(.+)"/)?.[1]
                    }) : S()
                }), [e, T, P, x, S, w]);
                const R = (0, g.A)((t => {
                    const a = P();
                    if (!e || !a) return;
                    const o = C.current,
                        i = (0, c.LV)(o),
                        s = d.TL ? a : a.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                        u = new RegExp(`(${s})\\1*$`, ""),
                        A = i.match(u)[0].length / a.length,
                        h = i.replace(u, (0, m.hB)(t).repeat(A)),
                        p = o.innerHTML.substring(i.length);
                    n(`${h}${p}`), (0, r.Uz)((() => {
                        (0, l.A)(o, !0, !0)
                    }))
                }));
                return (0, a.vJ)(M, [M, t]), {
                    isCustomEmojiTooltipOpen: Boolean(T && x && !I),
                    closeCustomEmojiTooltip: N,
                    insertCustomEmoji: R
                }
            }
        },
        25498: (e, t, n) => {
            n.d(t, {
                A: () => x
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(66644),
                s = n(29807),
                l = n(52491),
                c = n(36353),
                d = n(87894),
                m = n(79824),
                u = n(37830),
                A = n(4961),
                h = n(58734),
                p = n(17778),
                g = n(63988),
                y = n(83414),
                f = n(37661),
                v = n(17712);
            let E, C, b, w, S;
            const I = 36,
                N = 2,
                M = 300,
                k = (0, u.A)((function(e, t, n) {
                    return e && t.length ? Object.values((0, d._E)(e, t)).slice(0, n) : m.p
                })),
                P = (0, u.A)((function(e, t, n) {
                    const a = Object.values(e),
                        o = (0, d.dU)(a, "native"),
                        i = t ? (0, d.LG)(t, (e => Object.values((0, d._E)(o, e)))) : {},
                        r = n ? (0, d.LG)(n, (e => Object.values((0, d._E)(o, e)))) : {},
                        s = {
                            ...i,
                            ...r
                        },
                        l = [].concat(Object.keys(i), Object.keys(r)),
                        c = a.reduce(((e, t) => (t.names.forEach((n => {
                            e[n] || (e[n] = []), e[n].push(t)
                        })), e)), {}),
                        m = Object.keys(c),
                        u = l.reduce(((e, t) => Math.max(e, t.length)), 0);
                    return {
                        byKeyword: s,
                        keywords: l,
                        byName: c,
                        names: m,
                        maxKeyLength: u
                    }
                })),
                T = (0, u.A)((function(e, t, n) {
                    const {
                        byKeyword: a,
                        keywords: o,
                        byName: i,
                        names: r,
                        maxKeyLength: s
                    } = e;
                    let l = [];
                    if (t.length > s) return m.p;
                    const c = o.filter((e => e.startsWith(t))).sort();
                    l = l.concat(Object.values((0, d._E)(a, c)).flat());
                    const u = r.filter((e => e.startsWith(t)));
                    return l = l.concat(Object.values((0, d._E)(i, u)).flat()), l = (0, d.Am)(l), l.length ? l.slice(0, n) : m.p
                }));
            try {
                w = /(^|\s):(?!\s)[-+_:'\s\p{L}\p{N}]*$/giu, S = /\p{Ll}/u
            } catch (e) {
                w = /(^|\s):(?!\s)[-+_:'\s\d\wа-яёґєії]*$/gi, S = /[a-zяёґєії]/
            }

            function x(e, t, u) {
                let x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.CfG,
                    R = arguments.length > 4 ? arguments[4] : void 0,
                    L = arguments.length > 5 ? arguments[5] : void 0,
                    B = arguments.length > 6 ? arguments[6] : void 0;
                const [O, F, D] = (0, f.A)(!1), [U, K] = (0, a.J0)(), [j, $] = (0, a.J0)(m.p), [z, _] = (0, a.J0)(m.p);
                (0, a.vJ)((() => {
                    function t() {
                        K(b.emojis)
                    }
                    e && (b ? t() : async function() {
                        return E || (E = n.e(996).then(n.t.bind(n, 20996, 19)), C = (await E).default, b = (0, l.cp)(C)), E
                    }().then(t))
                }), [e]);
                const J = (0, g.gs)((() => {
                        const n = t();
                        return e && n.includes(":") ? (0, p.S)(n).match(w)?.[0].trim() : void 0
                    }), [t, e], M),
                    H = (0, y.A)(J, [J, t], !0),
                    V = (0, v.A)((e => {
                        if ($(e), e === m.p) return void _(m.p);
                        const t = e.map((e => e.native)),
                            n = (0, d.Xd)((0, s.oZ0)((0, o.mS)(), t), "id");
                        _(n)
                    })),
                    q = (0, v.A)((function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        const a = t();
                        if (!a) return;
                        const o = a.lastIndexOf(":", n ? a.lastIndexOf(":") - 1 : void 0);
                        if (-1 !== o) {
                            const t = "string" == typeof e ? (0, A.A)(e, ["emoji_html"]) : (0, h.hB)(e);
                            u(`${a.substring(0,o)}${t}`);
                            const n = x === i.CfG ? document.querySelector(i.m$5) : document.getElementById(x);
                            (0, r.Uz)((() => {
                                (0, c.A)(n, !0, !0)
                            }))
                        }
                        V(m.p)
                    }));
                return (0, a.vJ)((() => {
                    const e = H();
                    if (!e || !U) return void V(m.p);
                    const t = e.length > 2 && e.endsWith(":"),
                        n = e.substring(1, t ? 1 + e.length - 2 : void 0);
                    let a = m.p;
                    if (n) {
                        if (1 === n.length && S.test(n) || n.length >= N) {
                            const e = P(U, L, B);
                            a = T(e, n.toLowerCase(), I)
                        }
                    } else a = k(U, R, I);
                    a.length ? t ? q(a[0].native, !0) : V(a) : V(m.p)
                }), [L, U, H, B, q, R, V]), (0, a.vJ)(D, [D, t]), {
                    isEmojiTooltipOpen: Boolean(j.length || z.length) && !O,
                    closeEmojiTooltip: F,
                    filteredEmojis: j,
                    filteredCustomEmojis: z,
                    insertEmoji: q
                }
            }
        },
        9442: (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(66644),
                s = n(59589),
                l = n(36353),
                c = n(87894),
                d = n(39074),
                m = n(17778),
                u = n(63988),
                A = n(83414),
                h = n(37661),
                p = n(17712);
            const g = 300;
            let y;
            try {
                y = /(^|\s)@[-_\p{L}\p{M}\p{N}]*$/giu
            } catch (e) {
                y = /(^|\s)@[-_\d\wа-яёґєії]*$/gi
            }

            function f(e, t, n, f, E, C, b, w) {
                const [S, I] = (0, a.J0)(), [N, M, k] = (0, h.A)(!1), P = (0, u.gs)((() => {
                    const n = t();
                    if (!e || !f()?.collapsed || !n.includes("@")) return;
                    const a = (0, d.LV)(E.current);
                    return (0, m.S)(a).match(y)?.[0].trim()
                }), [e, t, f, E], g), T = (0, A.A)(P, [P, t, f], !0), x = (0, A.A)((() => e && t().startsWith("@")), [t, e]);
                (0, a.vJ)((() => {
                    const e = T();
                    if (!e || !C && !b) return void I(void 0);
                    const t = (0, o.mS)().users.byId;
                    if (!t) return void I(void 0);
                    const n = C?.reduce(((e, t) => (t.userId !== w && e.push(t.userId), e)), []),
                        a = e.substring(1),
                        i = (0, s.Z$)((0, c.Am)([...x() && b || [], ...n || []]), t, a);
                    I(Object.values((0, c._E)(t, i)))
                }), [w, C, b, T, x]);
                const R = (0, p.A)((function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e.usernames && !(0, s.u0)(e)) return;
                    const a = (0, s.Kl)(e),
                        o = (0, s.u0)(e) || "",
                        c = a ? `@${a}` : `<a\n          class="text-entity-link"\n          data-entity-type="${i.C7.MentionName}"\n          data-user-id="${e.id}"\n          contenteditable="false"\n          dir="auto"\n        >${o}</a>`,
                        m = E.current,
                        u = v((0, d.LV)(m)),
                        A = u.lastIndexOf("@"),
                        h = (a ? a.length + 1 : o.length) - (u.length - A);
                    if (-1 !== A) {
                        const e = `${u.substr(0,A)}${c}&nbsp;`,
                            a = v(m.innerHTML).substring(u.length),
                            o = (0, d.JC)(m);
                        n(`${e}${a}`), (0, r.Uz)((() => {
                            const e = o + h + 1;
                            (0, l.A)(m, t), e >= 0 && (0, d.vZ)(m, e)
                        }))
                    }
                    I(void 0)
                }));
                return (0, a.vJ)(k, [k, t]), {
                    isMentionTooltipOpen: Boolean(S?.length && !N),
                    closeMentionTooltip: M,
                    insertMention: R,
                    mentionFilteredUsers: S
                }
            }

            function v(e) {
                return e.replace(/<div>(<br>|<br\s?\/>)?<\/div>/gi, "<br>")
            }
        },
        70297: (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(87357),
                s = n(17663),
                l = n(82393),
                c = n(43874),
                d = n(45470),
                m = n(14),
                u = n(17712),
                A = n(62587),
                h = n(59030),
                p = n(34201),
                g = n(83429);
            const y = (0, a.ph)((function(e) {
                let {
                    story: t,
                    isPreview: n,
                    isProtected: y,
                    isConnected: f
                } = e;
                const {
                    openStoryViewer: v,
                    loadPeerStoriesByIds: E,
                    showNotification: C
                } = (0, o.ko)(), b = (0, h.A)(), {
                    isMobile: w
                } = (0, c.Ay)(), S = t && "isDeleted" in t, I = t && "content" in t, N = I ? t.content.video : void 0, M = I ? (0, i.EN)(t) : void 0, k = (0, A.A)(M), P = I ? N ? N.thumbnail?.dataUri : t.content.photo?.thumbnail?.dataUri : void 0, T = (0, m.A)(k, !0), {
                    shouldRender: x,
                    transitionClassNames: R
                } = (0, p.A)(Boolean(T)), L = (0, d.A)(P, S && !n, w && !l.QH), B = (0, r.A)("EVLTkrt1", "media-inner", (!f || S) && "AQWPv0bP", S && "tprkr7qf", n && "V3HabdKr");
                (0, a.vJ)((() => {
                    !t || I || S || E({
                        peerId: t.peerId,
                        storyIds: [t.id]
                    })
                }), [t, S, I]);
                const O = (0, u.A)((() => {
                    S ? C({
                        message: b("StoryNotFound")
                    }) : v({
                        peerId: t.peerId,
                        storyId: t.id,
                        isSinglePeer: !0,
                        isSingleStory: !0
                    })
                }));
                return a.Ay.createElement("div", {
                    className: B,
                    onClick: f ? O : void 0
                }, !S && n && a.Ay.createElement("canvas", {
                    ref: L,
                    className: "thumbnail canvas-blur-setup blurred-bg"
                }), x && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("img", {
                    src: T,
                    alt: "",
                    className: (0, r.A)("WAItYc5d", n && "ClGe8yij", R),
                    draggable: !1
                }), I && a.Ay.createElement(g.A, {
                    story: t,
                    className: R
                })), S && a.Ay.createElement("span", null, a.Ay.createElement("i", {
                    className: (0, r.A)("nLA7VEhv", "icon icon-story-expired"),
                    "aria-hidden": !0
                }), b("StoryExpiredSubtitle")), Boolean(N?.duration) && a.Ay.createElement("div", {
                    className: "message-media-duration"
                }, (0, s.QO)(N.duration)), y && a.Ay.createElement("span", {
                    className: "protector"
                }))
            }))
        },
        19381: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(80089),
                i = n(80464);
            const r = e => {
                const {
                    isOpen: t
                } = e, n = (0, i.A)(o.ar.Extra, "ContextMenuContainer", !t);
                return n ? a.Ay.createElement(n, e) : void 0
            }
        },
        97676: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(84051),
                o = n(87357),
                i = n(37661),
                r = n(5912),
                s = n(17712),
                l = n(62587),
                c = n(10221),
                d = n(18104),
                m = n(3325);
            const u = (0, a.ph)((e => {
                let {
                    messageId: t,
                    isMirrored: n,
                    effect: u,
                    shouldPlay: A,
                    observeIntersectionForLoading: h,
                    observeIntersectionForPlaying: p,
                    onStop: g
                } = e;
                const y = (0, a.li)(null),
                    f = (0, a.li)(null),
                    v = (0, r.Vz)(y, h),
                    E = (0, r.Vz)(y, p),
                    [C, b, w] = (0, i.A)(),
                    [S, I, N] = (0, i.A)(),
                    M = function(e) {
                        return e.effectAnimationId ? `sticker${e.effectAnimationId}` : `sticker${e.effectStickerId}?size=f`
                    }(u),
                    k = (0, l.A)(M, !v),
                    P = (0, s.A)((() => {
                        w(), g?.()
                    })),
                    T = (0, c.A)({
                        anchorRef: y,
                        overlayRef: f,
                        isMirrored: n,
                        isDisabled: !C,
                        isForMessageEffect: !0,
                        id: u.id
                    });
                (0, a.vJ)((() => {
                    S && T(), N()
                }), [T, N, S]), (0, a.vJ)((() => {
                    E && A && k && (b(), I())
                }), [E, k, A, T]);
                const x = (0, o.A)("McmbiWZE", n && "wNvU2uqi");
                return a.Ay.createElement("div", {
                    className: (0, o.A)("IYu2f7FM", n && "GsTZawTE"),
                    ref: y
                }, C && a.Ay.createElement(m.A, null, a.Ay.createElement(d.A, {
                    ref: f,
                    key: `effect-${t??u.id}`,
                    className: x,
                    tgsUrl: k,
                    size: 256,
                    play: !0,
                    isLowPriority: !0,
                    noLoop: !0,
                    forceAlways: !0,
                    onEnded: P
                })))
            }))
        },
        51644: (e, t, n) => {
            n.d(t, {
                A: () => b
            });
            var a = n(84051),
                o = n(31481),
                i = n(66644),
                r = n(59589),
                s = n(87357),
                l = n(40435),
                c = n(35127),
                d = n(43874),
                m = n(37661),
                u = n(5912),
                A = n(17712),
                h = n(37859),
                p = n(37960),
                g = n(69419),
                y = n(29886),
                f = n(34201),
                v = n(67749),
                E = n(27860),
                C = n(35913);
            const b = e => {
                let {
                    id: t,
                    photo: n,
                    messageText: b,
                    isOwn: w,
                    observeIntersection: S,
                    noAvatars: I,
                    canAutoLoad: N,
                    isInSelectMode: M,
                    isSelected: k,
                    uploadProgress: P,
                    forcedWidth: T,
                    size: x = "inline",
                    dimensions: R,
                    asForwarded: L,
                    nonInteractive: B,
                    shouldAffectAppendix: O,
                    isDownloading: F,
                    isProtected: D,
                    theme: U,
                    isInWebPage: K,
                    clickArg: j,
                    className: $,
                    onClick: z,
                    onCancelUpload: _
                } = e;
                const J = (0, a.li)(null),
                    H = "extendedMediaPreview" === n.mediaType,
                    V = H ? void 0 : n.blobUrl,
                    q = (0, u.Vz)(J, S),
                    {
                        isMobile: G
                    } = (0, d.Ay)(),
                    [W, Y] = (0, a.J0)(N),
                    Q = W && q && !H,
                    {
                        mediaData: Z,
                        loadProgress: X
                    } = (0, g.A)(H ? void 0 : (0, r.rI)(n, x), !Q),
                    ee = V || Z,
                    te = Boolean(T),
                    [ne] = (0, a.J0)(!ee),
                    ae = Boolean(ee),
                    oe = (0, v.A)(n, ae),
                    ie = (0, v.A)(n, !te),
                    re = (0, p.A)(!ae),
                    se = (0, r.VD)(n),
                    [le, ce, de] = (0, m.A)(H || n.isSpoiler);
                (0, a.vJ)((() => {
                    H || n.isSpoiler ? ce() : de()
                }), [H, n]);
                const {
                    loadProgress: me
                } = (0, g.A)(H ? void 0 : (0, r.rI)(n, "download"), !F, H ? void 0 : (0, r.Cz)(n, "download")), {
                    isUploading: ue,
                    isTransferring: Ae,
                    transferProgress: he
                } = (0, r.LK)(P || (F ? me : X), Q && !ee, void 0 !== P), pe = !1 === (0, y.A)(W), {
                    shouldRender: ge,
                    transitionClassNames: ye
                } = (0, f.A)(Ae, void 0, pe, "slow"), {
                    shouldRender: fe,
                    transitionClassNames: ve
                } = (0, f.A)(!ee && !W), Ee = (0, A.A)((e => {
                    ue ? _?.(j) : ee ? le ? de() : z?.(j, e) : Y((e => !e))
                }));
                (0, h.A)((e => {
                    let [t] = e;
                    if (!O) return void(t && J.current.closest(o.KFG).removeAttribute(o.D3G));
                    const n = J.current.closest(o.KFG);
                    ee ? (0, l.A)(ee, Boolean(w), k, U).then((e => {
                        (0, i.RK)((() => {
                            n.style.setProperty("--appendix-bg", e), n.setAttribute(o.D3G, "")
                        }))
                    })) : n.classList.add("has-appendix-thumb")
                }), [O, ee, w, M, k, U]);
                const {
                    width: Ce,
                    height: be,
                    isSmall: we
                } = R || (0, c.yA)({
                    media: n,
                    isOwn: w,
                    asForwarded: L,
                    noAvatars: I,
                    isMobile: G,
                    messageText: b,
                    isInWebPage: K
                }), Se = (0, s.A)("media-inner", !ue && !B && "interactive", we && "small-image", Ce === be && "square-image", be < c.ej && "fix-min-height", $), Ie = R ? ` width: ${Ce}px; left: ${R.x}px; top: ${R.y}px;` : "", Ne = "inline" === x ? `height: ${be}px;${Ie}` : void 0;
                return a.Ay.createElement("div", {
                    id: t,
                    ref: J,
                    className: Se,
                    style: Ne,
                    onClick: ue ? void 0 : Ee
                }, te && a.Ay.createElement("canvas", {
                    ref: ie,
                    className: "thumbnail canvas-blur-setup blurred-bg"
                }), a.Ay.createElement("img", {
                    src: ee,
                    className: (0, s.A)("full-media", te && "with-blurred-bg"),
                    alt: "",
                    style: T ? `width: ${T}px` : void 0,
                    draggable: !D
                }), ne && a.Ay.createElement("canvas", {
                    ref: oe,
                    className: (0, s.A)("thumbnail", !ae && "canvas-blur-setup", re)
                }), D && a.Ay.createElement("span", {
                    className: "protector"
                }), ge && !fe && a.Ay.createElement("div", {
                    className: `media-loading ${ye}`
                }, a.Ay.createElement(C.A, {
                    progress: he,
                    onClick: ue ? Ee : void 0
                })), fe && a.Ay.createElement("i", {
                    className: (0, s.A)("icon", "icon-download", ve)
                }), a.Ay.createElement(E.A, {
                    isVisible: le,
                    withAnimation: !0,
                    thumbDataUri: se,
                    width: Ce,
                    height: be,
                    className: "media-spoiler"
                }), Ae && a.Ay.createElement("span", {
                    className: "message-transfer-progress"
                }, Math.round(100 * he), "%"))
            }
        },
        84555: (e, t, n) => {
            n.d(t, {
                A: () => P
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(59589),
                s = n(53827),
                l = n(87357),
                c = n(17663),
                d = n(41733),
                m = n(76023),
                u = n(63988),
                A = n(37661),
                h = n(5912),
                p = n(17712),
                g = n(37960),
                y = n(69419),
                f = n(29886),
                v = n(34201),
                E = n(67749),
                C = n(18276),
                b = n(27860),
                w = n(64493),
                S = n(65843),
                I = n(35913);
            const N = m.Wd / 2,
                M = 2 * (N - 6) * Math.PI;
            let k;
            const P = e => {
                let {
                    message: t,
                    className: n,
                    canAutoLoad: P,
                    isDownloading: T,
                    origin: x,
                    observeIntersection: R,
                    onStop: L,
                    onReadMedia: B
                } = e;
                const O = (0, a.li)(null),
                    F = (0, a.li)(null),
                    D = (0, a.li)(null),
                    U = t.content.video,
                    {
                        cancelMediaDownload: K,
                        openOneTimeMediaModal: j
                    } = (0, o.ko)(),
                    $ = (0, h.Vz)(O, R),
                    [z, _] = (0, a.J0)(P),
                    J = Boolean(z && $),
                    {
                        mediaData: H,
                        loadProgress: V
                    } = (0, y.A)((0, r.sC)(U, "inline"), !J, (0, r.Cz)(U, "inline")),
                    {
                        loadProgress: q
                    } = (0, y.A)((0, r.sC)(U, "download"), !T, i.qZ.BlobUrl),
                    [G, W] = (0, A.A)(),
                    Y = (0, r.G5)(t),
                    Q = "oneTimeModal" === x,
                    Z = Y && !Q,
                    X = !Boolean((0, r.CI)(t)) || G || Z,
                    ee = (0, E.A)(U, X),
                    te = (0, g.A)(!X),
                    ne = (0, r.CI)(t),
                    ae = z && !G || T,
                    oe = !1 === (0, f.A)(z),
                    {
                        shouldRender: ie,
                        transitionClassNames: re
                    } = (0, v.A)(ae, void 0, oe),
                    [se, le] = (0, a.J0)(!1),
                    [ce, de] = (0, a.Ul)(0),
                    me = (0, u.aG)(ce, 16);
                (0, a.vJ)((() => {
                    if (!se) return;
                    const e = F.current;
                    de(e.currentTime / e.duration)
                }), [de, se, me]), (0, a.Nf)((() => {
                    if (!se || !D.current) return;
                    const e = M - me() * M;
                    D.current.setAttribute("stroke-dashoffset", e.toString())
                }), [se, me]);
                const ue = Boolean(H && $),
                    Ae = (0, p.A)((() => {
                        F.current && (le(!1), de(0), (0, d.A)(F.current))
                    })),
                    he = (0, p.A)((() => {
                        k?.(), k = Ae
                    })),
                    pe = (0, p.A)((() => {
                        const e = F.current;
                        se ? e.paused ? ((0, d.A)(e), (0, s._K)()) : e.pause() : (he(), e.pause(), e.currentTime = 0, (0, d.A)(e), (0, s._K)(), le(!0))
                    }));
                (0, a.vJ)((() => {
                    Q && pe()
                }), [Q]);
                const ge = (0, p.A)((() => {
                        if (H) {
                            if (!T) return Y && !Q ? (j({
                                message: t
                            }), void B?.()) : void pe();
                            K({
                                media: U
                            })
                        } else _((e => !e))
                    })),
                    ye = (0, p.A)((e => {
                        const t = e.currentTarget;
                        de(t.currentTime / t.duration)
                    }));
                return a.Ay.createElement("div", {
                    ref: O,
                    className: (0, l.A)("RoundVideo", "media-inner", Q && "non-interactive", n),
                    onClick: ge
                }, H && a.Ay.createElement("div", {
                    className: "video-wrapper"
                }, Z && a.Ay.createElement(b.A, {
                    isVisible: !0,
                    thumbDataUri: ne,
                    width: m.Wd,
                    height: m.Wd,
                    className: "media-spoiler"
                }), a.Ay.createElement(S.A, {
                    canPlay: ue,
                    ref: F,
                    src: H,
                    className: "full-media",
                    width: m.Wd,
                    height: m.Wd,
                    autoPlay: !Z,
                    disablePictureInPicture: !0,
                    muted: !se,
                    loop: !se,
                    playsInline: !0,
                    isPriority: !0,
                    onEnded: se ? L ?? Ae : void 0,
                    onTimeUpdate: se ? ye : void 0,
                    onReady: W
                })), !Z && a.Ay.createElement("canvas", {
                    ref: ee,
                    className: (0, l.A)("thumbnail", "canvas-blur-setup", te),
                    style: `width: ${m.Wd}px; height: ${m.Wd}px`
                }), a.Ay.createElement("div", {
                    className: "progress"
                }, se && a.Ay.createElement("svg", {
                    width: m.Wd,
                    height: m.Wd
                }, a.Ay.createElement("circle", {
                    ref: D,
                    cx: N,
                    cy: N,
                    r: N - 6,
                    className: "progress-circle",
                    transform: `rotate(-90, ${N}, ${N})`,
                    "stroke-dasharray": M,
                    "stroke-dashoffset": M
                }))), ie && a.Ay.createElement("div", {
                    className: `media-loading ${re}`
                }, a.Ay.createElement(I.A, {
                    progress: T ? q : V
                })), Z && !ie && a.Ay.createElement("div", {
                    className: "play-wrapper"
                }, a.Ay.createElement(w.A, {
                    color: "dark",
                    round: !0,
                    size: "smaller",
                    className: "play",
                    nonInteractive: !0
                }, a.Ay.createElement(C.A, {
                    name: "play"
                })), a.Ay.createElement(C.A, {
                    name: "view-once"
                })), !H && !z && a.Ay.createElement("i", {
                    className: "icon icon-download"
                }), !Q && a.Ay.createElement("div", {
                    className: "message-media-duration"
                }, se ? (0, c.QO)(F.current.currentTime) : (0, c.QO)(U.duration), (!se || F.current.paused) && a.Ay.createElement(C.A, {
                    name: "muted"
                })))
            }
        },
        25477: (e, t, n) => {
            n.d(t, {
                A: () => I
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(87357),
                s = n(17663),
                l = n(58554),
                c = n(76023),
                d = n(35127),
                m = n(84313),
                u = n(43874),
                A = n(37661),
                h = n(5912),
                p = n(17712),
                g = n(62587),
                y = n(37960),
                f = n(69419),
                v = n(29886),
                E = n(34201),
                C = n(67749),
                b = n(27860),
                w = n(65843),
                S = n(35913);
            const I = e => {
                let {
                    id: t,
                    video: n,
                    isOwn: I,
                    isInWebPage: N,
                    observeIntersectionForLoading: M,
                    observeIntersectionForPlaying: k,
                    noAvatars: P,
                    canAutoLoad: T,
                    canAutoPlay: x,
                    uploadProgress: R,
                    forcedWidth: L,
                    dimensions: B,
                    asForwarded: O,
                    isDownloading: F,
                    isProtected: D,
                    className: U,
                    clickArg: K,
                    onClick: j,
                    onCancelUpload: $
                } = e;
                const {
                    cancelMediaDownload: z
                } = (0, o.ko)(), _ = (0, a.li)(null), J = (0, a.li)(null), H = "extendedMediaPreview" === n.mediaType, V = H ? void 0 : n.blobUrl, [q, G, W] = (0, A.A)(H || n.isSpoiler);
                (0, a.vJ)((() => {
                    H || n.isSpoiler ? G() : W()
                }), [H, n]);
                const Y = (0, h.Vz)(_, M),
                    Q = (0, h.Vz)(_, k) && Y,
                    Z = (0, a.li)(Y);
                Q && !Z.current && (Z.current = !0);
                const {
                    isMobile: X
                } = (0, u.Ay)(), [ee, te] = (0, a.J0)(T), ne = Boolean(ee && Y && !H), [ae, oe] = (0, a.J0)(Boolean(x && !q)), ie = H ? void 0 : (0, i.sC)(n, "inline"), [re] = (0, a.J0)(Boolean(ie && l.Ih(ie))), {
                    mediaData: se,
                    loadProgress: le
                } = (0, f.A)(ie, !ne, H ? void 0 : (0, i.Cz)(n, "inline")), ce = V || se, [de, me] = (0, A.A)(), ue = (0, i.VD)(n), Ae = Boolean(ue), he = Boolean(L), pe = H ? void 0 : (0, i.sC)(n, "preview"), [ge] = (0, a.J0)(Boolean(pe && l.Ih(pe))), ye = Y, fe = (0, g.A)(pe, !ye), ve = (0, y.A)((Ae || fe) && !de), Ee = Boolean(!Ae || fe || de), Ce = (0, C.A)(n, Ee), be = (0, C.A)(n, !he), we = (0, y.A)(!Ee), Se = ce && Z.current, Ie = (0, m.A)(J, !0, !Se), {
                    loadProgress: Ne
                } = (0, f.A)(H ? void 0 : (0, i.sC)(n, "download"), !F, H ? void 0 : (0, i.Cz)(n, "download")), {
                    isUploading: Me,
                    isTransferring: ke,
                    transferProgress: Pe
                } = (0, i.LK)(R || (F ? Ne : le), ne && !de && !re || F, void 0 !== R), Te = !1 === (0, v.A)(ee), {
                    shouldRender: xe,
                    transitionClassNames: Re
                } = (0, E.A)(ke && !Ie, void 0, Te), {
                    transitionClassNames: Le
                } = (0, E.A)(Boolean((ee || ce) && !ae && !xe)), [Be, Oe] = (0, a.J0)(0), Fe = (0, p.A)((e => {
                    Oe(Math.max(0, e.currentTarget.currentTime - 1))
                })), De = (Number.isFinite(J.current?.duration) ? J.current?.duration : n.duration) || 0, {
                    width: Ue,
                    height: Ke
                } = B || (H ? (0, c.ri)(n, Boolean(I), O, N, P, X) : (0, c.rO)(n, Boolean(I), O, N, P, X)), je = (0, p.A)(((e, t) => {
                    if (Me) $?.(K);
                    else if (H || !F)
                        if (ce) {
                            if (ce && !ae && oe(!0), !q) return t && ne && !de && !re ? (te(!1), void e.stopPropagation()) : void j?.(K, e);
                            W()
                        } else te((e => !e));
                    else z({
                        media: n
                    })
                })), $e = (0, p.A)((e => {
                    je(e, !0)
                })), ze = (0, r.A)("media-inner dark", !Me && "interactive", Ke < d.ej && "fix-min-height", U), _e = `height: ${Ke}px;${B?` width: ${Ue}px; left: ${B.x}px; top: ${B.y}px;`:""}`;
                return a.Ay.createElement("div", {
                    ref: _,
                    id: t,
                    className: ze,
                    style: _e,
                    onClick: Me ? void 0 : e => je(e)
                }, he && a.Ay.createElement("canvas", {
                    ref: be,
                    className: "thumbnail canvas-blur-setup blurred-bg"
                }), Se && a.Ay.createElement(w.A, {
                    ref: J,
                    src: ce,
                    className: (0, r.A)("full-media", he && "with-blurred-bg"),
                    canPlay: ae && Q && !Ie,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    draggable: !D,
                    onTimeUpdate: Fe,
                    onReady: me,
                    style: L ? `width: ${L}px` : void 0
                }), a.Ay.createElement("img", {
                    src: fe,
                    className: (0, r.A)("thumbnail", ve, he && "with-blurred-bg"),
                    alt: "",
                    style: L ? `width: ${L}px;` : void 0,
                    draggable: !D
                }), Ae && !ge && a.Ay.createElement("canvas", {
                    ref: Ce,
                    className: (0, r.A)("thumbnail", !Ee && "canvas-blur-setup", we)
                }), D && a.Ay.createElement("span", {
                    className: "protector"
                }), a.Ay.createElement("i", {
                    className: (0, r.A)("icon", "icon-large-play", Le)
                }), a.Ay.createElement(b.A, {
                    isVisible: q,
                    withAnimation: !0,
                    thumbDataUri: ue,
                    width: Ue,
                    height: Ke,
                    className: "media-spoiler"
                }), xe && a.Ay.createElement("div", {
                    className: (0, r.A)("media-loading", Re)
                }, a.Ay.createElement(S.A, {
                    progress: Pe,
                    onClick: $e
                })), !ee && !ce && a.Ay.createElement("i", {
                    className: "icon icon-download"
                }), !ke || Ie && !F ? a.Ay.createElement("div", {
                    className: "message-media-duration"
                }, !H && n.isGif ? "GIF" : (0, s.QO)(Math.max(De - Be, 0)), Ie && a.Ay.createElement("i", {
                    className: "icon icon-message-failed playback-failed"
                })) : a.Ay.createElement("span", {
                    className: "message-transfer-progress"
                }, Me || F ? `${Math.round(100*Pe)}%` : "..."))
            }
        },
        70314: (e, t, n) => {
            n.d(t, {
                A: () => I
            });
            var a = n(84051),
                o = n(13439),
                i = n(89925),
                r = n(59589),
                s = n(87357),
                l = n(58849),
                c = n(4961),
                d = n(35127),
                m = n(86974),
                u = n(43874),
                A = n(21488),
                h = n(17712),
                p = n(59030),
                g = n(62894),
                y = n(44589),
                f = n(39877),
                v = n(56440),
                E = n(6413),
                C = n(64493),
                b = n(70297),
                w = n(51644),
                S = n(25477);
            const I = (0, a.ph)((e => {
                let {
                    message: t,
                    observeIntersectionForLoading: n,
                    observeIntersectionForPlaying: I,
                    noAvatars: N,
                    canAutoLoad: M,
                    canAutoPlay: k,
                    inPreview: P,
                    asForwarded: T,
                    isDownloading: x = !1,
                    isProtected: R,
                    isConnected: L,
                    story: B,
                    theme: O,
                    backgroundEmojiId: F,
                    shouldWarnAboutSvg: D,
                    autoLoadFileMaxSizeMb: U,
                    onMediaClick: K,
                    onContainerClick: j,
                    onAudioPlay: $,
                    onCancelMediaTransfer: z,
                    isEditing: _
                } = e;
                const {
                    openTelegramLink: J
                } = (0, o.ko)(), H = (0, r.T_)(t), {
                    isMobile: V
                } = (0, u.Ay)(), q = (0, a.li)(null), G = (0, a.li)(null), W = (0, p.A)(), Y = (0, h.A)((() => {
                    K()
                })), Q = (0, h.A)((e => {
                    j?.(e)
                })), Z = (0, h.A)((() => {
                    H && J({
                        url: H.url
                    })
                })), {
                    story: X,
                    stickers: ee
                } = H || {};
                (0, A.A)(X?.peerId, X?.id, B);
                const te = ee?.isWithTextColor || ee?.documents?.[0]?.shouldUseTextColor,
                    ne = (0, m.A)(G, !te);
                if (!H) return;
                const {
                    siteName: ae,
                    url: oe,
                    displayUrl: ie,
                    title: re,
                    description: se,
                    photo: le,
                    video: ce,
                    audio: de,
                    type: me,
                    document: ue
                } = H, Ae = "telegram_story" === me, he = P || B && "isDeleted" in B ? void 0 : function(e) {
                    switch (e) {
                        case "telegram_channel_request":
                        case "telegram_megagroup_request":
                        case "telegram_chat_request":
                            return "lng_view_button_request_join";
                        case "telegram_message":
                            return "lng_view_button_message";
                        case "telegram_bot":
                            return "lng_view_button_bot";
                        case "telegram_voicechat":
                            return "lng_view_button_voice_chat";
                        case "telegram_livestream":
                            return "lng_view_button_voice_chat_channel";
                        case "telegram_megagroup":
                        case "telegram_chat":
                            return "lng_view_button_group";
                        case "telegram_channel":
                            return "lng_view_button_channel";
                        case "telegram_user":
                            return "lng_view_button_user";
                        case "telegram_botapp":
                            return "lng_view_button_bot_app";
                        case "telegram_chatlist":
                            return "ViewChatList";
                        case "telegram_story":
                            return "lng_view_button_story";
                        case "telegram_channel_boost":
                        case "telegram_group_boost":
                            return "lng_view_button_boost";
                        case "telegram_stickerset":
                            return "lng_view_button_stickerset";
                        default:
                            return
                    }
                }(me), pe = (0, l.A)(se, 170), ge = Boolean(pe || re || ae);
                let ye = Boolean(ee);
                if (ge && H?.photo && !H.video) {
                    const {
                        width: e,
                        height: n
                    } = (0, d.yA)({
                        media: H.photo,
                        isOwn: t.isOutgoing,
                        isInWebPage: !0,
                        asForwarded: T,
                        noAvatars: N,
                        isMobile: V
                    });
                    ye = e === n
                }
                const fe = (le || ce) && K && !ye,
                    ve = (0, s.A)("WebPage", P && "in-preview", !_ && P && "interactive", ye && "with-square-photo", !le && !ce && !P && "without-media", ce && "with-video", !ge && "no-article", ue && "with-document", he && "with-quick-button");
                return a.Ay.createElement("div", {
                    ref: q,
                    className: ve,
                    "data-initial": (ae || ie)[0],
                    dir: W.isRtl ? "rtl" : "auto",
                    onClick: Q
                }, a.Ay.createElement("div", {
                    className: (0, s.A)("WebPage--content", Ae && "is-story")
                }, F && a.Ay.createElement(f.A, {
                    emojiDocumentId: F,
                    className: "WebPage--background-icons"
                }), Ae && a.Ay.createElement(b.A, {
                    story: B,
                    isProtected: R,
                    isConnected: L,
                    isPreview: !0
                }), le && !ce && a.Ay.createElement(w.A, {
                    photo: le,
                    isOwn: t.isOutgoing,
                    isInWebPage: !0,
                    observeIntersection: n,
                    noAvatars: N,
                    canAutoLoad: M,
                    size: ye ? "pictogram" : "inline",
                    asForwarded: T,
                    nonInteractive: !fe,
                    isDownloading: x,
                    isProtected: R,
                    theme: O,
                    onClick: fe ? Y : void 0,
                    onCancelUpload: z
                }), ge && a.Ay.createElement("div", {
                    className: "WebPage-text"
                }, a.Ay.createElement(v.A, {
                    className: "site-name",
                    url: oe,
                    text: ae || ie
                }), !P && re && a.Ay.createElement("p", {
                    className: "site-title"
                }, (0, c.A)(re)), pe && a.Ay.createElement("p", {
                    className: "site-description"
                }, (0, c.A)(pe, ["emoji", "br"]))), !P && ce && a.Ay.createElement(S.A, {
                    video: ce,
                    isOwn: t.isOutgoing,
                    isInWebPage: !0,
                    observeIntersectionForLoading: n,
                    noAvatars: N,
                    canAutoLoad: M,
                    canAutoPlay: k,
                    asForwarded: T,
                    isDownloading: x,
                    isProtected: R,
                    onClick: fe ? Y : void 0,
                    onCancelUpload: z
                }), !P && de && a.Ay.createElement(g.Ay, {
                    theme: O,
                    message: t,
                    origin: i.d9.Inline,
                    noAvatars: N,
                    isDownloading: x,
                    onPlay: $,
                    onCancelUpload: z
                }), !P && ue && a.Ay.createElement(y.A, {
                    document: ue,
                    observeIntersection: n,
                    autoLoadFileMaxSizeMb: U,
                    onMediaClick: Y,
                    onCancelUpload: z,
                    isDownloading: x,
                    shouldWarnAboutSvg: D
                }), !P && ee && a.Ay.createElement("div", {
                    ref: G,
                    className: (0, s.A)("media-inner", "square-image", ee.isEmoji && "WebPage--emoji-grid", "WebPage--stickers")
                }, ee.documents.map((e => a.Ay.createElement("div", {
                    key: e.id,
                    className: "WebPage--sticker"
                }, a.Ay.createElement(E.A, {
                    containerRef: G,
                    sticker: e,
                    shouldLoop: !0,
                    size: ee.isEmoji ? 38 : 80,
                    customColor: ne,
                    observeIntersectionForPlaying: I,
                    observeIntersectionForLoading: n
                }))))), P && ie && !ge && a.Ay.createElement("div", {
                    className: "WebPage-text"
                }, a.Ay.createElement("p", {
                    className: "site-name"
                }, ie), a.Ay.createElement("p", {
                    className: "site-description"
                }, W("Chat.Empty.LinkPreview")))), he && (Ee = he, a.Ay.createElement(C.A, {
                    className: "WebPage--quick-button",
                    size: "tiny",
                    color: "translucent",
                    isRectangular: !0,
                    onClick: Z
                }, W(Ee))));
                var Ee
            }))
        },
        40435: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            const a = {
                dark: {
                    outgoing: "rgb(135,116,225)",
                    incoming: "rgb(33,33,33)"
                },
                light: {
                    outgoing: "rgb(238,255,222)",
                    incoming: "rgb(255,255,255)"
                }
            };

            function o(e, t, n, o) {
                return n ? Promise.resolve(a[o || "light"][t ? "outgoing" : "incoming"]) : async function(e, t) {
                    const n = new Image;
                    n.src = e, n.crossOrigin = "anonymous", n.width || await new Promise((e => {
                        n.onload = e
                    }));
                    const a = document.createElement("canvas"),
                        o = a.getContext("2d");
                    a.width = n.width, a.height = n.height, o.drawImage(n, 0, 0, n.width, n.height);
                    const i = t ? n.width - 1 : 0,
                        r = n.height - 1;
                    return `rgba(${Array.from(o.getImageData(i,r,1,1).data).join(",")})`
                }(e, t)
            }
        },
        35127: (e, t, n) => {
            n.d(t, {
                MC: () => r,
                ej: () => l,
                nP: () => c,
                yA: () => d
            });
            var a = n(76023);
            const o = 12,
                i = 40,
                r = 20 * a.$,
                s = o * a.$,
                l = 5 * a.$;

            function c(e, t) {
                return (e?.length ?? 0) > i || t ? r : s
            }

            function d(e) {
                let {
                    media: t,
                    messageText: n,
                    isOwn: i,
                    isInWebPage: r,
                    asForwarded: s,
                    noAvatars: d,
                    isMobile: m
                } = e;
                const u = "photo" === t.mediaType,
                    A = "video" === t.mediaType,
                    h = u && r,
                    p = A && r,
                    {
                        width: g,
                        height: y
                    } = u ? (0, a.ck)(t, i, s, h, d, m) : A ? (0, a.rO)(t, i, s, p, d, m) : (0, a.ri)(t, i, s, r, d, m),
                    f = c(n);
                let v = 1;
                g < f && f - g < o && (v = f / g), y * v < l && l - y * v < o && (v = l / y);
                const E = Math.round(g * v),
                    C = Math.round(y * v);
                return {
                    width: E,
                    height: C,
                    isSmall: E < f || C < l
                }
            }
        },
        67749: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(59589),
                o = n(82393),
                i = n(43874),
                r = n(45470);

            function s(e, t) {
                const {
                    isMobile: n
                } = (0, i.Ay)(), s = e ? "string" == typeof e ? e : (0, a.VD)(e) : void 0;
                return (0, r.A)(s, t, n && !o.QH)
            }
        },
        79519: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(84051),
                o = n(51401),
                i = n(66644),
                r = n(81954);
            const s = 500,
                l = 750,
                c = 20;

            function d(e, t, n, d, m, u, A, h, p) {
                const g = (0, a.li)(!A);
                (0, a.Nf)((() => {
                    const t = g.current;
                    if (g.current = !1, n && e.current) {
                        const n = e.current.closest(".MessageList"),
                            a = m,
                            A = p || a ? "end" : "centerOrTop",
                            g = () => {
                                const t = (0, r.Ay)(n, e.current, A, c, void 0 !== d ? a ? s : l : void 0, d, void 0, u, !0);
                                if (h) {
                                    const t = e.current.querySelector(".is-quote");
                                    t && (0, i.RK)((() => {
                                        (0, o.YM)(t, "animate")
                                    }))
                                }
                                return t
                            };
                        t ? (0, i.gm)(g) : (0, i.YS)((() => {
                            (0, i.RK)(g())
                        }))
                    }
                }), [e, t, n, d, m, u, h, p])
            }
        },
        64154: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(13439),
                i = n(37836);
            const r = new Map;

            function s(e, t, n, i) {
                const s = i && n ? e?.byLangCode[i]?.[n] : void 0,
                    {
                        isPending: c,
                        text: d
                    } = s || {};
                return (0, a.vJ)((() => {
                    t && n && !d && void 0 === c && i && function(e, t, n) {
                        const a = r.get(n) || new Map,
                            i = a.get(e) || [];
                        i.includes(t) || (i.push(t), a.set(e, i), r.set(n, a), (0, o.ko)().markMessagesTranslationPending({
                            chatId: e,
                            messageIds: i,
                            toLanguageCode: n
                        })), l()
                    }(t, n, i)
                }), [t, d, c, n, i]), t && n ? {
                    isPending: c,
                    translatedText: d
                } : {
                    isPending: !1,
                    translatedText: void 0
                }
            }
            const l = (0, i.nF)((function() {
                const {
                    translateMessages: e
                } = (0, o.ko)();
                let t = !1;
                r.forEach(((n, a) => {
                    n.forEach(((n, o) => {
                        const i = n.slice(0, 20);
                        i.length < n.length && (t = !0), e({
                                chatId: o,
                                messageIds: i,
                                toLanguageCode: a
                            }),
                            function(e, t, n) {
                                const a = r.get(n);
                                if (!a?.size) return void r.delete(n);
                                const o = a.get(e);
                                if (!o?.length) return void a.delete(e);
                                const i = o.filter((e => !t.includes(e)));
                                if (!i?.length) return a.delete(e), void(a.size || r.delete(n));
                                a.set(e, i)
                            }(o, i, a)
                    }))
                })), t && l()
            }), 500)
        },
        10221: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(66644),
                i = n(76023),
                r = n(17712);
            const s = i.$;

            function l(e) {
                let {
                    anchorRef: t,
                    overlayRef: n,
                    isMirrored: i,
                    isForMessageEffect: l,
                    isDisabled: c,
                    id: d
                } = e;
                const m = (0, r.A)((() => {
                    const e = n.current,
                        a = t.current;
                    if (!e || !a) return;
                    const r = a.getBoundingClientRect(),
                        c = e.getBoundingClientRect(),
                        d = window.innerWidth;
                    (0, o.RK)((() => {
                        const t = r.top + r.height / 2,
                            n = r.bottom,
                            a = l ? n : t;
                        e.style.top = a - c.height / 2 + "px", i ? e.style.left = r.left - s + "px" : e.style.right = d - r.right - s + "px"
                    }))
                }));
                return (0, a.vJ)((() => {
                    c || m()
                }), [c, d]), (0, a.vJ)((() => {
                    if (c) return;
                    const e = t.current.closest(".MessageList");
                    return e ? (e.addEventListener("scroll", m, {
                        passive: !0
                    }), () => {
                        e.removeEventListener("scroll", m)
                    }) : void 0
                }), [c, t]), m
            }
        },
        76283: (e, t, n) => {
            n.d(t, {
                A: () => I
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(87357),
                s = n(17712),
                l = n(59030),
                c = n(64493),
                d = n(96530),
                m = n(76023),
                u = n(87412),
                A = n(18276);
            const h = "uGUjDZKl",
                p = "M62HGuIV",
                g = "WMpEr5XQ",
                y = 2 * m.$,
                f = (0, a.ph)((e => {
                    let {
                        reaction: t,
                        chosen: n,
                        isReady: o,
                        noAppearAnimation: i,
                        style: s,
                        isLocked: l,
                        onToggleReaction: c
                    } = e;
                    return a.Ay.createElement("div", {
                        className: (0, r.A)(h, "oc1hpMwv", n && p, !i && o && "sx6RTuAU", i && "kqcWe4tf"),
                        style: s,
                        onClick: function() {
                            c(t)
                        }
                    }, a.Ay.createElement(u.A, {
                        documentId: t.documentId,
                        size: y
                    }), l && a.Ay.createElement(A.A, {
                        className: g,
                        name: "lock-badge"
                    }))
                }));
            var v = n(37661),
                E = n(62587),
                C = n(18104);
            const b = 2 * m.$,
                w = (0, a.ph)((e => {
                    let {
                        reaction: t,
                        isReady: n,
                        noAppearAnimation: o,
                        chosen: i,
                        isLocked: s,
                        onToggleReaction: l
                    } = e;
                    const c = (0, E.A)(`sticker${t.appearAnimation?.id}`, !n || o),
                        d = (0, E.A)(`document${t.selectAnimation?.id}`, !n || o),
                        m = (0, E.A)(`document${t.staticIcon?.id}`, !o),
                        [u, y] = (0, v.A)(),
                        [f, , w] = (0, v.A)(!0),
                        [S, I, N] = (0, v.A)();
                    return a.Ay.createElement("div", {
                        className: (0, r.A)(h, i && p),
                        onClick: function() {
                            l(t.reaction)
                        },
                        onMouseEnter: n && !f ? I : void 0
                    }, o && a.Ay.createElement("img", {
                        className: "MZ2tH980",
                        src: m,
                        alt: t.reaction.emoticon,
                        draggable: !1
                    }), !u && !o && a.Ay.createElement(C.A, {
                        key: t.appearAnimation?.id,
                        tgsUrl: c,
                        play: f,
                        noLoop: !0,
                        size: b,
                        onEnded: w,
                        forceAlways: !0
                    }), !f && !o && a.Ay.createElement(C.A, {
                        key: t.selectAnimation?.id,
                        tgsUrl: d,
                        play: S,
                        noLoop: !0,
                        size: b,
                        onLoad: y,
                        onEnded: N,
                        forceAlways: !0
                    }), s && a.Ay.createElement(A.A, {
                        className: g,
                        name: "lock-badge"
                    }))
                })),
                S = (0, r.x)("ReactionSelector"),
                I = (0, a.ph)((e => {
                    let {
                        allAvailableReactions: t,
                        topReactions: n,
                        defaultTagReactions: m,
                        enabledReactions: u,
                        currentReactions: A,
                        reactionsLimit: h,
                        isPrivate: p,
                        isReady: g,
                        canPlayAnimatedEmojis: y,
                        className: v,
                        isCurrentUserPremium: E,
                        isInSavedMessages: C,
                        isInStoryViewer: b,
                        isForEffects: I,
                        effectReactions: N,
                        onClose: M,
                        onToggleReaction: k,
                        onShowMore: P
                    } = e;
                    const {
                        openPremiumModal: T
                    } = (0, o.ko)(), x = (0, a.li)(null), R = (0, l.A)(), L = C && !E && !b, B = Boolean(h && A && A.length >= h), O = (0, a.Kr)((() => {
                        const e = B ? A?.map((e => e.reaction)) : I ? N : C ? m : "some" === u?.type ? u.allowed : t?.map((e => e.reaction)),
                            a = e?.map((e => {
                                const n = "documentId" in e,
                                    a = t?.find((t => (0, i.a0)(t.reaction, e)));
                                return I ? a : (n || a) && !a?.isInactive && (p || B || u && (0, i.A3)(e, u)) ? n ? e : a : void 0
                            })).filter(Boolean) || [];
                        return (0, i.fu)(a, n)
                    }), [t, A, m, u, C, p, n, I, N, B]), F = (0, a.Kr)((() => 8 === O.length ? O : O.slice(0, 7)), [O]), D = F.length < O.length, U = (0, a.Kr)((() => {
                        const e = A?.filter((e => {
                            let {
                                chosenOrder: t
                            } = e;
                            return void 0 !== t
                        })) || [];
                        return new Set(e.map((e => {
                            let {
                                reaction: t
                            } = e;
                            return F.findIndex((e => e && (0, i.a0)("reaction" in e ? e.reaction : e, t)))
                        })))
                    }), [A, F]), K = (0, s.A)((() => {
                        const e = x.current?.getBoundingClientRect() || {
                            x: 0,
                            y: 0
                        };
                        P({
                            x: e.x,
                            y: e.y
                        })
                    })), j = (0, s.A)((() => {
                        M?.(), T({
                            initialSection: "saved_tags"
                        })
                    })), $ = (0, a.Kr)((() => {
                        if (C) {
                            if (!E) {
                                const e = R("lng_subscribe_tag_about").split("{link}");
                                return a.Ay.createElement("span", null, e[0], a.Ay.createElement(d.A, {
                                    isPrimary: !0,
                                    onClick: j
                                }, R("lng_subscribe_tag_link")), e[1])
                            }
                            return R("SavedTagReactionsHint2")
                        }
                        return b ? R("StoryReactionsHint") : I ? R("AddEffectMessageHint") : void 0
                    }), [E, C, b, R, I]);
                    if (F.length) return a.Ay.createElement("div", {
                        className: (0, r.A)(S("&"), v),
                        ref: x
                    }, a.Ay.createElement("div", {
                        className: S("bubble-small", R.isRtl && "isRtl")
                    }), a.Ay.createElement("div", {
                        className: S("items-wrapper")
                    }, a.Ay.createElement("div", {
                        className: S("bubble-big", R.isRtl && "isRtl")
                    }), a.Ay.createElement("div", {
                        className: S("items")
                    }, $ && a.Ay.createElement("div", {
                        className: S("hint")
                    }, $), a.Ay.createElement("div", {
                        className: S("reactions"),
                        dir: R.isRtl ? "rtl" : void 0
                    }, F.map(((e, t) => "reaction" in e ? a.Ay.createElement(w, {
                        key: (0, i.Jj)(e.reaction),
                        isReady: g,
                        onToggleReaction: k,
                        reaction: e,
                        noAppearAnimation: !y,
                        chosen: U.has(t),
                        isLocked: L
                    }) : a.Ay.createElement(f, {
                        key: (0, i.Jj)(e),
                        isReady: g,
                        onToggleReaction: k,
                        reaction: e,
                        noAppearAnimation: !y,
                        chosen: U.has(t),
                        isLocked: L,
                        style: `--_animation-delay: ${20*(7-t)}ms`
                    }))), D && a.Ay.createElement(c.A, {
                        color: "translucent",
                        className: S("show-more"),
                        onClick: K
                    }, a.Ay.createElement("i", {
                        className: "icon icon-down"
                    }))))))
                }))
        },
        92915: (e, t, n) => {
            n.d(t, {
                A: () => C
            });
            var a = n(84051),
                o = n(13439),
                i = n(87357),
                r = n(76023),
                s = n(10722),
                l = n(37661),
                c = n(17712),
                d = n(94803),
                m = n(59030),
                u = n(23470),
                A = n(64493),
                h = n(40664),
                p = n(8410);
            const g = (0, a.ph)((e => {
                let {
                    isOpen: t,
                    title: n,
                    subtitle: o,
                    placeholder: i,
                    submitText: r,
                    maxLength: s,
                    initialValue: l = "",
                    onClose: d,
                    onSubmit: u
                } = e;
                const g = (0, m.A)(),
                    [y, f] = (0, a.J0)(l),
                    v = (0, c.A)((e => {
                        f(e.target.value)
                    })),
                    E = (0, c.A)((() => {
                        u(y)
                    }));
                return a.Ay.createElement(p.A, {
                    className: "narrow",
                    title: n,
                    isOpen: t,
                    onClose: d,
                    isSlim: !0
                }, Boolean(o) && a.Ay.createElement("div", {
                    className: "cGrbcqD_"
                }, o), a.Ay.createElement(h.A, {
                    placeholder: i,
                    value: y,
                    onChange: v,
                    maxLength: s,
                    teactExperimentControlled: !0
                }), a.Ay.createElement("div", {
                    className: "dialog-buttons mt-2"
                }, a.Ay.createElement(A.A, {
                    className: "confirm-dialog-button",
                    onClick: E
                }, r || g("Save")), a.Ay.createElement(A.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: d
                }, g("Cancel"))))
            }));
            var y = n(9168),
                f = n(24433),
                v = n(69988);
            const E = 1.25 * r.$,
                C = (0, a.ph)((e => {
                    let {
                        reaction: t,
                        tag: n,
                        containerId: r,
                        isChosen: h,
                        isOwnMessage: p,
                        className: C,
                        chosenClassName: b,
                        withCount: w,
                        isDisabled: S,
                        withContextMenu: I,
                        shouldDelayInit: N,
                        observeIntersection: M,
                        onClick: k,
                        onRemove: P
                    } = e;
                    const {
                        editSavedReactionTag: T
                    } = (0, o.ko)(), x = (0, a.li)(null), R = (0, a.li)(null), L = (0, m.A)(), [B, O, F] = (0, l.A)(), {
                        title: D,
                        count: U
                    } = n || {}, K = Boolean(D || w && U), j = (0, c.A)((() => {
                        k?.(t)
                    })), $ = (0, c.A)((() => {
                        P?.(t)
                    })), z = (0, c.A)((e => {
                        T({
                            reaction: t,
                            title: e
                        }), F()
                    })), {
                        isContextMenuOpen: _,
                        contextMenuPosition: J,
                        handleBeforeContextMenu: H,
                        handleContextMenu: V,
                        handleContextMenuClose: q,
                        handleContextMenuHide: G
                    } = (0, s.A)(x, !I), W = (0, c.A)((() => x.current)), Y = (0, c.A)((() => document.body)), Q = (0, c.A)((() => R.current)), {
                        positionX: Z,
                        positionY: X,
                        transformOriginX: ee,
                        transformOriginY: te,
                        style: ne
                    } = (0, d.A)(J, W, Y, Q, (() => ({
                        withPortal: !0,
                        shouldAvoidNegativePosition: !0
                    })));
                    if (!w || 0 !== U) return a.Ay.createElement(A.A, {
                        className: (0, i.A)(v.A.root, v.A.tag, p && v.A.own, h && v.A.chosen, h && b, S && v.A.disabled, C),
                        size: "tiny",
                        onClick: j,
                        onMouseDown: H,
                        onContextMenu: V,
                        ref: x
                    }, a.Ay.createElement(u.A, {
                        className: v.A.animatedEmoji,
                        containerId: r,
                        reaction: t,
                        loopLimit: 1,
                        size: E,
                        observeIntersection: M,
                        shouldDelayInit: N
                    }), K && a.Ay.createElement("span", {
                        className: v.A.tagText
                    }, D && a.Ay.createElement("span", null, D), w && a.Ay.createElement("span", null, U)), a.Ay.createElement("svg", {
                        className: v.A.tail,
                        width: "15",
                        height: "30",
                        viewBox: "0 0 15 30"
                    }, a.Ay.createElement("path", {
                        className: v.A.tailFill,
                        d: "m 0,30 c 3.1855,0 6.1803,-1.5176 8.0641,-4.0864 l 5.835,-7.9568 c 1.2906,-1.7599 1.2906,-4.1537 0,-5.9136 L 8.0641,4.08636 C 6.1803,1.51761 3.1855,0 0,0"
                    })), I && a.Ay.createElement(g, {
                        isOpen: B,
                        maxLength: 15,
                        title: L(n?.title ? "SavedTagRenameTag" : "SavedTagLabelTag"),
                        subtitle: L("SavedTagLabelTagText"),
                        placeholder: L("SavedTagLabelPlaceholder"),
                        initialValue: n?.title,
                        onClose: F,
                        onSubmit: z
                    }), I && J && a.Ay.createElement(y.A, {
                        ref: R,
                        isOpen: _,
                        transformOriginX: ee,
                        transformOriginY: te,
                        positionX: Z,
                        positionY: X,
                        style: ne,
                        autoClose: !0,
                        withPortal: !0,
                        onClose: q,
                        onCloseAnimationEnd: G
                    }, a.Ay.createElement(f.A, {
                        icon: "tag-filter",
                        onClick: j
                    }, L("SavedTagFilterByTag")), a.Ay.createElement(f.A, {
                        icon: "tag-name",
                        onClick: O
                    }, L(n?.title ? "SavedTagRenameTag" : "SavedTagLabelTag")), a.Ay.createElement(f.A, {
                        icon: "tag-crossed",
                        destructive: !0,
                        onClick: $
                    }, L("SavedTagRemoveTag"))))
                }))
        },
        93809: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(30857),
                i = n(35297);

            function r(e, t) {
                const n = void 0 === t,
                    r = (0, a.li)(n),
                    s = (0, a.li)(),
                    l = (0, o.A)();
                return (0, i.A)((() => {
                    n || (r.current = !1, s.current && (clearTimeout(s.current), s.current = void 0))
                }), e), (0, a.vJ)((() => {
                    if (n || r.current) return;
                    const e = () => {
                        r.current = !0, l()
                    };
                    t > 0 ? s.current = window.setTimeout(e, t) : e()
                }), e), r.current
            }
        },
        71950: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var a = n(84051),
                o = n(87357),
                i = n(17663),
                r = n(14242),
                s = n(59030);
            const l = "gvrp3KoR",
                c = "IHb3ZATQ",
                d = "zAPFdKbZ",
                m = [
                    [{
                        name: "followers",
                        title: "ChannelStats.Overview.Followers"
                    }, {
                        name: "enabledNotifications",
                        title: "ChannelStats.Overview.EnabledNotifications",
                        isPercentage: !0
                    }],
                    [{
                        name: "viewsPerPost",
                        title: "ChannelStats.Overview.ViewsPerPost"
                    }, {
                        name: "viewsPerStory",
                        title: "ChannelStats.Overview.ViewsPerStory"
                    }],
                    [{
                        name: "sharesPerPost",
                        title: "ChannelStats.Overview.SharesPerPost"
                    }, {
                        name: "sharesPerStory",
                        title: "ChannelStats.Overview.SharesPerStory"
                    }],
                    [{
                        name: "reactionsPerPost",
                        title: "ChannelStats.Overview.ReactionsPerPost"
                    }, {
                        name: "reactionsPerStory",
                        title: "ChannelStats.Overview.ReactionsPerStory"
                    }]
                ],
                u = [
                    [{
                        name: "members",
                        title: "Stats.GroupMembers"
                    }, {
                        name: "messages",
                        title: "Stats.GroupMessages"
                    }],
                    [{
                        name: "viewers",
                        title: "Stats.GroupViewers"
                    }, {
                        name: "posters",
                        title: "Stats.GroupPosters"
                    }]
                ],
                A = [
                    [{
                        name: "viewsCount",
                        title: "Stats.Message.Views",
                        isPlain: !0
                    }, {
                        name: "publicForwards",
                        title: "Stats.Message.PublicShares",
                        isPlain: !0
                    }],
                    [{
                        name: "reactionsCount",
                        title: "Channel.Stats.Overview.Reactions",
                        isPlain: !0
                    }, {
                        name: "forwardsCount",
                        title: "Stats.Message.PrivateShares",
                        isPlain: !0,
                        isApproximate: !0
                    }]
                ],
                h = [
                    [{
                        name: "viewsCount",
                        title: "Channel.Stats.Overview.Views",
                        isPlain: !0
                    }, {
                        name: "publicForwards",
                        title: "PublicShares",
                        isPlain: !0
                    }],
                    [{
                        name: "reactionsCount",
                        title: "Channel.Stats.Overview.Reactions",
                        isPlain: !0
                    }, {
                        name: "forwardsCount",
                        title: "PrivateShares",
                        isPlain: !0
                    }]
                ],
                p = [
                    [{
                        name: "level",
                        title: "Stats.Boosts.Level",
                        isPlain: !0
                    }, {
                        name: "premiumSubscribers",
                        title: "Stats.Boosts.PremiumSubscribers",
                        isPercentage: !0,
                        isApproximate: !0,
                        withAbsoluteValue: !0
                    }],
                    [{
                        name: "boosts",
                        title: "Stats.Boosts.ExistingBoosts",
                        isPlain: !0
                    }, {
                        name: "remainingBoosts",
                        title: "Stats.Boosts.BoostsToLevelUp",
                        isPlain: !0
                    }]
                ],
                g = (0, a.ph)((e => {
                    let {
                        title: t,
                        type: n,
                        statistics: g,
                        className: y
                    } = e;
                    const f = (0, s.A)(),
                        {
                            period: v
                        } = g,
                        E = function(e) {
                            switch (e) {
                                case "group":
                                    return u;
                                case "message":
                                    return A;
                                case "boost":
                                    return p;
                                case "story":
                                    return h;
                                default:
                                    return m
                            }
                        }(n);
                    return a.Ay.createElement("div", {
                        className: (0, o.A)("Gi8Nokbl", y)
                    }, a.Ay.createElement("div", {
                        className: "H01lE7mv"
                    }, t && a.Ay.createElement("div", {
                        className: "VQbs04hT"
                    }, t), v && a.Ay.createElement("div", {
                        className: "X7bBlGdi"
                    }, (0, i.Lu)(f, 1e3 * v.minDate), " — ", (0, i.Lu)(f, 1e3 * v.maxDate))), a.Ay.createElement("table", {
                        className: "s5beXqqL"
                    }, E.map((e => a.Ay.createElement("tr", null, e.map((e => {
                        const t = g[e.name];
                        return e.isPlain ? a.Ay.createElement("td", {
                            className: l
                        }, a.Ay.createElement("b", {
                            className: d
                        }, `${e.isApproximate?"≈":""}${(0,r.Sm)(t)}`), a.Ay.createElement("h3", {
                            className: c
                        }, f(e.title))) : e.isPercentage ? a.Ay.createElement("td", {
                            className: l
                        }, e.withAbsoluteValue && a.Ay.createElement("span", {
                            className: d
                        }, `${e.isApproximate?"≈":""}${(0,r.Sm)(t.part)}`), a.Ay.createElement("span", {
                            className: e.withAbsoluteValue ? "_mYEmh_u" : d
                        }, t.percentage, "%"), a.Ay.createElement("h3", {
                            className: c
                        }, f(e.title))) : a.Ay.createElement("td", {
                            className: l
                        }, a.Ay.createElement("b", {
                            className: d
                        }, (0, r.Vw)(t.current)), " ", (e => {
                            let {
                                change: t,
                                percentage: n
                            } = e;
                            if (!t) return;
                            const i = Number(t) < 0;
                            return a.Ay.createElement("span", {
                                className: (0, o.A)("idLrmbhS", i && "SLfwGHQC")
                            }, i ? `-${(0,r.Vw)(Math.abs(t))}` : `+${(0,r.Vw)(t)}`, n && a.Ay.createElement(a.Ay.Fragment, null, " ", "(", n, "%)"))
                        })(t), a.Ay.createElement("h3", {
                            className: c
                        }, f(e.title)))
                    })))))))
                }))
        },
        75343: (e, t, n) => {
            n.d(t, {
                A: () => C
            });
            var a = n(84051),
                o = n(13439),
                i = n(87357),
                r = n(43874),
                s = n(36838),
                l = n(59030),
                c = n(89925),
                d = n(59589),
                m = n(54464),
                u = n(10722),
                A = n(17712),
                h = n(94803),
                p = n(92111),
                g = n(21849),
                y = n(9168),
                f = n(24433),
                v = n(2429);
            const E = (0, a.ph)((function(e) {
                    let {
                        peer: t,
                        isArchived: n
                    } = e;
                    const {
                        openChat: r,
                        openChatWithInfo: s,
                        openStoryViewer: E,
                        toggleStoriesHidden: C
                    } = (0, o.ko)(), b = (0, l.A)(), w = (0, a.li)(null), S = "isSelf" in t && t.isSelf, I = !(0, d.L8)(t.id);
                    (0, p.A)(t.id);
                    const {
                        isContextMenuOpen: N,
                        contextMenuPosition: M,
                        handleBeforeContextMenu: k,
                        handleContextMenu: P,
                        handleContextMenuClose: T,
                        handleContextMenuHide: x
                    } = (0, u.A)(w), R = (0, A.A)((() => w.current)), L = (0, A.A)((() => document.body)), B = (0, A.A)((() => w.current.querySelector(".story-peer-context-menu .bubble"))), O = (0, A.A)((() => ({
                        withPortal: !0,
                        isDense: !0
                    }))), {
                        positionX: F,
                        positionY: D,
                        transformOriginX: U,
                        transformOriginY: K,
                        style: j
                    } = (0, h.A)(M, R, L, B, O), $ = (0, A.A)((() => {
                        N || E({
                            peerId: t.id,
                            origin: c.G9.StoryRibbon
                        })
                    })), z = (0, A.A)((e => {
                        (0, m.u)(e), k(e)
                    })), _ = (0, A.A)((() => {
                        s({
                            id: t.id,
                            shouldReplaceHistory: !0,
                            profileTab: "stories"
                        })
                    })), J = (0, A.A)((() => {
                        s({
                            id: t.id,
                            shouldReplaceHistory: !0,
                            profileTab: "storiesArchive"
                        })
                    })), H = (0, A.A)((() => {
                        r({
                            id: t.id,
                            shouldReplaceHistory: !0
                        })
                    })), V = (0, A.A)((() => {
                        s({
                            id: t.id,
                            shouldReplaceHistory: !0
                        })
                    })), q = (0, A.A)((() => {
                        C({
                            peerId: t.id,
                            isHidden: !n
                        })
                    }));
                    return a.Ay.createElement("div", {
                        ref: w,
                        role: "button",
                        "data-peer-id": t.id,
                        tabIndex: 0,
                        className: v.A.peer,
                        onMouseDown: z,
                        onClick: $,
                        onContextMenu: P
                    }, a.Ay.createElement(g.A, {
                        peer: t,
                        withStory: !0,
                        storyViewerOrigin: c.G9.StoryRibbon,
                        storyViewerMode: "full"
                    }), a.Ay.createElement("div", {
                        className: (0, i.A)(v.A.name, t.hasUnreadStories && v.A.name_hasUnreadStory)
                    }, S ? b("MyStory") : (0, d.qg)(b, t)), void 0 !== M && a.Ay.createElement(y.A, {
                        isOpen: N,
                        transformOriginX: U,
                        transformOriginY: K,
                        positionX: F,
                        positionY: D,
                        style: j,
                        className: (0, i.A)("story-peer-context-menu", v.A.contextMenu),
                        autoClose: !0,
                        withPortal: !0,
                        onClose: T,
                        onCloseAnimationEnd: x
                    }, S ? a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(f.A, {
                        onClick: _,
                        icon: "play-story"
                    }, b("StoryList.Context.SavedStories")), a.Ay.createElement(f.A, {
                        onClick: J,
                        icon: "archive"
                    }, b("StoryList.Context.ArchivedStories"))) : a.Ay.createElement(a.Ay.Fragment, null, !I && a.Ay.createElement(f.A, {
                        onClick: H,
                        icon: "message"
                    }, b("SendMessageTitle")), I ? a.Ay.createElement(f.A, {
                        onClick: V,
                        icon: "channel"
                    }, b("ChatList.ContextOpenChannel")) : a.Ay.createElement(f.A, {
                        onClick: V,
                        icon: "user"
                    }, b("StoryList.Context.ViewProfile")), a.Ay.createElement(f.A, {
                        onClick: q,
                        icon: n ? "unarchive" : "archive"
                    }, b(n ? "StoryList.Context.Unarchive" : "StoryList.Context.Archive")))))
                })),
                C = (0, a.ph)((0, o.EK)(((e, t) => {
                    let {
                        isArchived: n
                    } = t;
                    const {
                        orderedPeerIds: {
                            active: a,
                            archived: o
                        }
                    } = e.stories;
                    return {
                        orderedPeerIds: n ? o : a,
                        usersById: e.users.byId,
                        chatsById: e.chats.byId
                    }
                }))((function(e) {
                    let {
                        isArchived: t,
                        className: n,
                        orderedPeerIds: o,
                        usersById: c,
                        chatsById: d,
                        isClosing: m
                    } = e;
                    const u = (0, l.A)(),
                        A = (0, i.A)(v.A.root, !o.length && v.A.hidden, m && v.A.closing, n, "no-scrollbar"),
                        h = (0, a.li)(null);
                    return (0, s.A)(h, (0, r.Ny)()), a.Ay.createElement("div", {
                        ref: h,
                        id: "StoryRibbon",
                        className: A,
                        dir: u.isRtl ? "rtl" : void 0
                    }, o.map((e => {
                        const n = c[e] || d[e];
                        if (n) return a.Ay.createElement(E, {
                            key: e,
                            peer: n,
                            isArchived: t
                        })
                    })))
                })))
        },
        40175: (e, t, n) => {
            n.d(t, {
                A: () => p
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(29807),
                s = n(87357),
                l = n(34458),
                c = n(32706),
                d = n(59030),
                m = n(34201),
                u = n(92111),
                A = n(21849),
                h = n(17169);
            const p = (0, a.ph)((0, o.EK)(((e, t) => {
                let {
                    isArchived: n
                } = t;
                const {
                    orderedPeerIds: {
                        archived: a,
                        active: o
                    },
                    byPeerId: i
                } = e.stories, {
                    storyViewer: {
                        isRibbonShown: s,
                        isArchivedRibbonShown: l
                    }
                } = (0, r.nTw)(e), c = (0, r.clw)(e), d = (0, r.xYJ)(e, "storyRibbonAnimations");
                return {
                    currentUserId: e.currentUserId,
                    orderedPeerIds: n ? a : o,
                    isShown: n ? !l : !s,
                    isForumPanelOpen: c,
                    withAnimation: d,
                    usersById: e.users.byId,
                    chatsById: e.chats.byId,
                    peerStories: i
                }
            }))((function(e) {
                let {
                    currentUserId: t,
                    orderedPeerIds: n,
                    usersById: r,
                    chatsById: p,
                    canShow: g,
                    isShown: y,
                    isForumPanelOpen: f,
                    isArchived: v,
                    withAnimation: E,
                    peerStories: C
                } = e;
                const {
                    toggleStoryRibbon: b
                } = (0, o.ko)(), w = (0, d.A)(), S = (0, a.Kr)((() => 1 === n.length ? [r[n[0]] || p[n[0]]] : n.map((e => r[e] || p[e])).filter((e => e && e.id !== t)).slice(0, i.dqH).reverse()), [t, n, r, p]), I = (0, a.Kr)((() => S?.length ? S.reduce(((e, t) => {
                    const n = C[t.id];
                    if (!n) return e;
                    const a = n.orderedIds.some((e => {
                        const t = n.byId[e];
                        if (!t || !("isForCloseFriends" in t)) return !1;
                        const a = n.lastReadId && t.id <= n.lastReadId;
                        return t.isForCloseFriends && !a
                    }));
                    return e[t.id] = a, e
                }), {}) : {}), [C, S]), N = (0, a.Kr)((() => n.slice(0, 5)), [n]);
                (0, u.A)(N);
                const M = g && y,
                    {
                        shouldRender: k,
                        transitionClassNames: P
                    } = (0, m.A)(M, void 0, void 0, "slow");
                if ((0, a.vJ)((() => {
                        E && !f && (M ? ((0, c.UH)(l.UG + i.xB5), (0, l.$)(v)) : ((0, c.UH)(l.UG + i.xB5), (0, l.wV)(v)))
                    }), [v, M, E, f]), k) return a.Ay.createElement("button", {
                    type: "button",
                    id: "StoryToggler",
                    className: (0, s.A)(h.A.root, P),
                    "aria-label": w("Chat.Context.Peer.OpenStory"),
                    onClick: () => b({
                        isShown: !0,
                        isArchived: v
                    }),
                    dir: w.isRtl ? "rtl" : void 0
                }, S.map((e => a.Ay.createElement(A.A, {
                    key: e.id,
                    peer: e,
                    size: "tiny",
                    className: h.A.avatar,
                    withStorySolid: !0,
                    forceFriendStorySolid: I[e.id]
                }))))
            })))
        },
        34458: (e, t, n) => {
            n.d(t, {
                $: () => y,
                UG: () => d,
                wV: () => g
            });
            var a = n(31481),
                o = n(66644),
                i = n(19822),
                r = n(83868),
                s = n(76023),
                l = n(2429),
                c = n(17169);
            const d = 250,
                m = .25 * s.$,
                u = 11,
                A = .1875 * s.$,
                h = .125 * s.$,
                p = new Set;

            function g(e) {
                w();
                const {
                    container: t,
                    toggler: n,
                    leftMainHeader: r,
                    ribbonPeers: s,
                    toggleAvatars: l
                } = f(e);
                if (!(n && l && s && t && r)) return;
                const {
                    bottom: h,
                    right: g
                } = r.getBoundingClientRect(), y = h + m, S = l[0], I = l[l.length - 1], N = E(S);
                Array.from(s).reverse().forEach(((e, r, s) => {
                    let {
                        length: l
                    } = s;
                    const m = E(e);
                    if (!m) return;
                    const h = m === N;
                    let f = C(n, m),
                        w = u + r + 1;
                    if (f || (f = r === l - 1 ? I : S, w = u), !f) return;
                    let {
                        top: M,
                        left: k,
                        width: P
                    } = f.getBoundingClientRect();
                    const {
                        left: T,
                        width: x
                    } = e.getBoundingClientRect();
                    if (T > g) return;
                    k -= A, P += 2 * A;
                    const R = k - T,
                        L = M - y,
                        B = P / x;
                    M -= A;
                    const O = T - k + 2 * A,
                        F = y - M + A,
                        D = x / (P + 2 * A);
                    (0, o.RK)((() => {
                        if (!f) return;
                        const n = v(e);
                        let r;
                        w > u ? (r = v(f), h && r.classList.add(c.A.ghostLast)) : n.classList.add(c.A.ghostAnimateName), (0, i.ZM)(n, {
                            top: `${y}px`,
                            left: `${T}px`,
                            zIndex: `${w}`,
                            opacity: r ? "0" : "",
                            transform: `translate3d(${R}px, ${L}px, 0) scale(${B})`
                        }), r && (0, i.ZM)(r, {
                            top: `${M}px`,
                            left: `${k}px`,
                            zIndex: `${w}`
                        }), t.appendChild(n), r && t.appendChild(r), f.classList.add("animating"), e.classList.add("animating"), (0, o.RK)((() => {
                            (0, i.ZM)(n, {
                                opacity: "",
                                transform: ""
                            }), r ? (0, i.ZM)(r, {
                                opacity: "0",
                                transform: `translate3d(${O}px, ${F}px, 0) scale(${D})`
                            }) : n.classList.add(c.A.ghostRevealName);
                            const s = b((() => {
                                (0, o.RK)((() => {
                                    t.contains(n) && t.removeChild(n), r && t.contains(r) && t.removeChild(r), f?.classList.remove("animating"), e.classList.remove("animating")
                                }))
                            }), d + a.xB5);
                            p.add(s)
                        }))
                    }))
                }))
            }

            function y(e) {
                w();
                const {
                    container: t,
                    toggler: n,
                    toggleAvatars: r,
                    ribbonPeers: s,
                    leftMainHeader: l
                } = f(e);
                if (!(n && r && s && t && l)) return;
                const {
                    right: m
                } = l.getBoundingClientRect(), g = r[0], y = r[r.length - 1], S = E(g);
                Array.from(s).reverse().forEach(((e, r, s) => {
                    let {
                        length: l
                    } = s;
                    const f = E(e);
                    if (!f) return;
                    const w = f === S;
                    let I = C(n, f),
                        N = u + r + 1;
                    if (I || (I = r === l - 1 ? y : g, N = u), !I) return;
                    const {
                        top: M,
                        left: k,
                        width: P
                    } = e.getBoundingClientRect();
                    let {
                        left: T,
                        width: x,
                        top: R
                    } = I.getBoundingClientRect();
                    if (k > m) return;
                    T -= A, x += 2 * A;
                    const L = T - k,
                        B = R - M - h,
                        O = x / P;
                    R -= A;
                    const F = k - T + 2 * A,
                        D = M - R + A,
                        U = P / (x + 2 * A);
                    (0, o.RK)((() => {
                        const n = v(e);
                        let r;
                        N > u ? (r = v(I), w && r.classList.add(c.A.ghostLast)) : n.classList.add(c.A.ghostAnimateName, c.A.ghostRevealName), (0, i.ZM)(n, {
                            top: `${M}px`,
                            left: `${k}px`,
                            width: `${P}px`,
                            zIndex: `${N}`
                        }), r && (0, i.ZM)(r, {
                            top: `${R}px`,
                            left: `${T}px`,
                            zIndex: `${N}`,
                            opacity: "0",
                            transform: `translate3d(${F}px, ${D}px, 0) scale(${U})`
                        }), e.classList.add("animating"), I.classList.add("animating"), t.appendChild(n), r && t.appendChild(r), (0, o.RK)((() => {
                            (0, i.ZM)(n, {
                                opacity: r ? "0" : "",
                                transform: `translate3d(${L}px, ${B}px, 0) scale(${O})`
                            }), r ? (0, i.ZM)(r, {
                                opacity: "",
                                transform: ""
                            }) : n.classList.remove(c.A.ghostRevealName);
                            const s = b((() => {
                                (0, o.RK)((() => {
                                    t.contains(n) && t.removeChild(n), r && t.contains(r) && t.removeChild(r), e.classList.remove("animating"), I.classList.remove("animating")
                                }))
                            }), d + a.xB5);
                            p.add(s)
                        }))
                    }))
                }))
            }

            function f(e) {
                let t = document.getElementById("LeftColumn");
                if (t && e && (t = t.querySelector(".ArchivedChats")), !t) return {};
                const n = t.querySelector("#StoryToggler"),
                    a = t.querySelector("#StoryRibbon"),
                    o = t.querySelector(".left-header"),
                    i = a?.querySelectorAll(`.${l.A.peer}`),
                    r = n?.querySelectorAll(".Avatar");
                return {
                    container: t,
                    toggler: n,
                    leftMainHeader: o,
                    ribbonPeers: i,
                    toggleAvatars: r
                }
            }

            function v(e) {
                const t = e.cloneNode(!0);
                t.classList.add(c.A.ghost), t.classList.remove("animating"), t.draggable = !1, t.oncontextmenu = r.A;
                const n = e.querySelector("canvas");
                if (n) {
                    const e = t.querySelector("canvas");
                    e?.getContext("2d")?.drawImage(n, 0, 0)
                }
                return t
            }

            function E(e) {
                return e?.getAttribute("data-peer-id")
            }

            function C(e, t) {
                return e?.querySelector(`[data-peer-id="${t}"]`)
            }

            function b(e, t) {
                const n = setTimeout(e, t);
                return () => {
                    clearTimeout(n), e()
                }
            }

            function w() {
                p.forEach((e => e())), p.clear()
            }
        },
        46051: (e, t, n) => {
            n.d(t, {
                G: () => a,
                w: () => o
            });
            const a = "video/mp4; codecs=hvc1.1.6.L63.00",
                o = "video/mp4; codecs=avc1.64001E"
        },
        92111: (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var a = n(84051),
                o = n(13439),
                i = n(97335),
                r = n(59589),
                s = n(29807),
                l = n(39761),
                c = n(87679),
                d = n(58554),
                m = n(20897),
                u = n(37836),
                A = n(46051),
                h = n(66991);
            const p = {},
                g = (0, u.v7)(1e3),
                y = function(e, t) {
                    (0, a.vJ)((() => {
                        if (void 0 === e) return;
                        (Array.isArray(e) ? e : [e]).forEach((e => {
                            const n = t || (0, o.mS)().stories.byPeerId[e]?.orderedIds?.[0];
                            n && (async e => {
                                await g, e.forEach((e => {
                                    let {
                                        hash: t,
                                        format: n,
                                        isStream: a
                                    } = e;
                                    a ? async function(e) {
                                        const t = (0, m.h)((0, d.RB)(e));
                                        let n = 0;
                                        for await (const e of t) if (n += e.byteLength, n >= 2097152) break
                                    }(t): d.hd(t, n).then((e => {
                                        e && (n === i.qZ.Progressive && function(e) {
                                            const t = document.head,
                                                n = document.createElement("video");
                                            n.preload = "auto", n.src = e, n.muted = !0, n.autoplay = !0, n.disableRemotePlayback = !0, n.style.display = "none", t.appendChild(n), n.load(), setTimeout((() => {
                                                (0, l.A)(n), t.removeChild(n)
                                            }), 1e3)
                                        }(e), n === i.qZ.BlobUrl && (0, c.NN)(e))
                                    }))
                                }))
                            })(function(e, t) {
                                const n = (0, s._bp)((0, o.mS)(), e);
                                if (!n || !n.orderedIds?.length) return [];
                                const a = function(e, t, n) {
                                        const a = e.indexOf(t),
                                            o = Math.max(a - 5, 0),
                                            i = Math.min(a + 5, e.length);
                                        return e.slice(o, i)
                                    }(n.orderedIds, t),
                                    l = [];
                                return a.forEach((t => {
                                    if (p[e]?.has(t)) return;
                                    const a = n.byId[t];
                                    if (!a || !("content" in a)) return;
                                    const o = Boolean(a.content.video);
                                    l.push({
                                        hash: (0, r.EN)(a, "full"),
                                        format: o ? i.qZ.Progressive : i.qZ.BlobUrl,
                                        isStream: o && (0, h.c)(A.G)
                                    }), l.push({
                                        hash: (0, r.EN)(a),
                                        format: i.qZ.BlobUrl
                                    }), a.content.altVideo && l.push({
                                        hash: (0, r.EN)(a, "full", !0),
                                        format: i.qZ.Progressive
                                    }), p[e] = (p[e] || new Set).add(t)
                                })), l
                            }(e, n))
                        }))
                    }), [t, e])
                }
        },
        83429: (e, t, n) => {
            n.d(t, {
                A: () => E
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(66644),
                s = n(87357),
                l = n(95807),
                c = n(39751),
                d = n(59589),
                m = n(76023),
                u = n(82117),
                A = n(17712),
                h = n(93545),
                p = n(23470);
            const g = "pruw1nLm",
                y = (0, a.ph)((e => {
                    let {
                        story: t,
                        mediaArea: n,
                        index: i,
                        className: r,
                        style: c,
                        isPreview: g
                    } = e;
                    const {
                        sendStoryReaction: y
                    } = (0, o.ko)(), f = (0, a.li)(null), [v, E] = (0, a.J0)(1.5 * m.$), {
                        peerId: C,
                        id: b,
                        views: w
                    } = t, {
                        reactions: S
                    } = w || {}, {
                        reaction: I,
                        isDark: N,
                        isFlipped: M
                    } = n, k = !(0, d.L8)(C), P = `${(0,d.$_)(C,b)}-${i}-${g?"preview":"viewer"}`, T = (0, a.Kr)((() => S?.find((e => (0, d.a0)(e.reaction, I)))?.count), [I, S]), x = !g && Boolean(T) && k, R = (0, A.A)((() => {
                        if (!f.current) return;
                        const e = f.current.clientHeight;
                        E(Math.round(.6 * e))
                    }));
                    (0, u.A)((e => {
                        let [t] = e;
                        Boolean(T) !== Boolean(t) && R()
                    }), [T]), (0, h.A)(f, R);
                    const L = (0, A.A)((() => {
                        y({
                            peerId: C,
                            storyId: b,
                            containerId: P,
                            reaction: I
                        })
                    }));
                    return a.Ay.createElement("div", {
                        ref: f,
                        className: (0, s.A)("WQ5DA3P_", N && "eic2vQ8c", r),
                        style: (0, l.A)(c, `--custom-emoji-size: ${v}px`),
                        onClick: L
                    }, a.Ay.createElement("div", {
                        className: (0, s.A)("j4MKFabm", M && "furSXGdL")
                    }), Boolean(v) && a.Ay.createElement(p.A, {
                        className: (0, s.A)("Et3MvYmN", x && "mFTLUHm2"),
                        reaction: I,
                        containerId: P,
                        size: v,
                        effectSize: 4 * v,
                        shouldPause: g,
                        shouldLoop: !g
                    }), x && a.Ay.createElement("span", {
                        className: "Tr8mYyDk"
                    }, T))
                })),
                f = 9 / 16;

            function v(e) {
                const {
                    x: t,
                    y: n,
                    width: a,
                    height: o,
                    rotation: i,
                    radius: r
                } = e.coordinates;
                return (0, l.A)(`left: ${t}%`, `top: ${n}%`, `width: ${a}%`, `height: ${o}%`, `transform: rotate(${i}deg) translate(-50%, -50%)`, Boolean(r) && `border-radius: ${r}%`)
            }
            const E = (0, a.ph)((e => {
                let {
                    story: t,
                    isActive: n,
                    className: l
                } = e;
                const {
                    openMapModal: d,
                    focusMessage: m,
                    closeStoryViewer: u,
                    openUrl: A
                } = (0, o.ko)(), h = (0, a.li)(null), p = (0, c.A)();
                (0, a.vJ)((() => {
                    if (!h.current || !n) return;
                    const e = h.current;
                    if (p.width > i.c2m) return void(0, r.RK)((() => {
                        e.style.removeProperty("--media-width"), e.style.removeProperty("--media-height")
                    }));
                    const t = p.width / p.height,
                        a = t < f ? e.clientHeight * f : e.clientWidth,
                        o = t < f ? e.clientHeight : e.clientWidth / f;
                    (0, r.RK)((() => {
                        e.style.setProperty("--media-width", `${a}px`), e.style.setProperty("--media-height", `${o}px`)
                    }))
                }), [n, p]);
                const E = t.mediaAreas;
                return a.Ay.createElement("div", {
                    className: (0, s.A)("RXAMu4VD", !n && "_5HkplWee", l),
                    ref: h
                }, E?.map(((e, o) => {
                    switch (e.type) {
                        case "geoPoint":
                        case "venue":
                        case "channelPost":
                        case "url": {
                            const t = n && "channelPost" !== e.type;
                            return a.Ay.createElement("div", {
                                className: (0, s.A)(g, t && "xFjJpeOA"),
                                style: v(e),
                                onClick: () => (e => {
                                    switch (e.type) {
                                        case "geoPoint":
                                        case "venue":
                                            d({
                                                geoPoint: e.geo
                                            });
                                            break;
                                        case "channelPost":
                                            m({
                                                chatId: e.channelId,
                                                messageId: e.messageId
                                            }), u();
                                            break;
                                        case "url":
                                            A({
                                                url: e.url
                                            })
                                    }
                                })(e)
                            })
                        }
                        case "suggestedReaction":
                            return a.Ay.createElement(y, {
                                key: `${e.type}-${o}`,
                                story: t,
                                mediaArea: e,
                                index: o,
                                isPreview: !n,
                                className: g,
                                style: v(e)
                            });
                        default:
                            return
                    }
                })))
            }))
        },
        86046: (e, t, n) => {
            n.d(t, {
                Pc: () => r,
                hk: () => s,
                jA: () => i
            });
            var a = n(14242),
                o = n(29807);

            function i(e, t) {
                if ("slug" === t.type || "stars" === t.type) return t;
                if ("message" === t.type) {
                    const n = (0, o.hds)(e, t.chatId);
                    if (!n) return;
                    return {
                        type: "message",
                        chat: n,
                        messageId: t.messageId
                    }
                }
                if ("giftcode" === t.type) {
                    const {
                        userIds: n,
                        boostChannelId: a,
                        amount: i,
                        currency: r,
                        option: s
                    } = t;
                    return {
                        type: "giveaway",
                        option: s,
                        purpose: {
                            type: "giftcode",
                            amount: i,
                            currency: r,
                            users: n.map((t => (0, o.mBe)(e, t))).filter(Boolean),
                            boostChannel: a ? (0, o.hds)(e, a) : void 0
                        }
                    }
                }
                if ("giveaway" === t.type) {
                    const {
                        chatId: n,
                        additionalChannelIds: a,
                        amount: i,
                        currency: r,
                        option: s,
                        untilDate: l,
                        areWinnersVisible: c,
                        countries: d,
                        isOnlyForNewSubscribers: m,
                        prizeDescription: u
                    } = t, A = (0, o.hds)(e, n);
                    if (!A) return;
                    const h = a?.map((t => (0, o.hds)(e, t))).filter(Boolean);
                    return {
                        type: "giveaway",
                        option: s,
                        purpose: {
                            type: "giveaway",
                            amount: i,
                            currency: r,
                            chat: A,
                            additionalChannels: h,
                            untilDate: l,
                            areWinnersVisible: c,
                            countries: d,
                            isOnlyForNewSubscribers: m,
                            prizeDescription: u
                        }
                    }
                }
            }

            function r(e) {
                return "appStore" === e.type ? {
                    avatarIcon: "star",
                    isCustomPeer: !0,
                    titleKey: "Stars.Intro.Transaction.AppleTopUp.Title",
                    subtitleKey: "Stars.Intro.Transaction.AppleTopUp.Subtitle",
                    peerColorId: 5
                } : "playMarket" === e.type ? {
                    avatarIcon: "star",
                    isCustomPeer: !0,
                    titleKey: "Stars.Intro.Transaction.GoogleTopUp.Title",
                    subtitleKey: "Stars.Intro.Transaction.GoogleTopUp.Subtitle",
                    peerColorId: 3
                } : "fragment" === e.type ? {
                    avatarIcon: "star",
                    isCustomPeer: !0,
                    titleKey: "Stars.Intro.Transaction.FragmentTopUp.Title",
                    subtitleKey: "Stars.Intro.Transaction.FragmentTopUp.Subtitle",
                    peerColorId: -1
                } : "premiumBot" === e.type ? {
                    avatarIcon: "star",
                    isCustomPeer: !0,
                    titleKey: "Stars.Intro.Transaction.PremiumBotTopUp.Title",
                    subtitleKey: "Stars.Intro.Transaction.PremiumBotTopUp.Subtitle",
                    peerColorId: 1,
                    withPremiumGradient: !0
                } : "ads" === e.type ? {
                    avatarIcon: "star",
                    isCustomPeer: !0,
                    titleKey: "Stars.Intro.Transaction.TelegramAds.Title",
                    subtitleKey: "Stars.Intro.Transaction.TelegramAds.Subtitle",
                    peerColorId: 2
                } : {
                    avatarIcon: "star",
                    isCustomPeer: !0,
                    titleKey: "Stars.Intro.Transaction.Unsupported.Title",
                    subtitleKey: "Stars.Intro.Transaction.Unsupported.Title",
                    peerColorId: 0
                }
            }

            function s(e) {
                return e < 0 ? `- ${(0,a.Sm)(Math.abs(e))}` : `+ ${(0,a.Sm)(e)}`
            }
        },
        84313: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(84051),
                o = n(13439),
                i = n(82393),
                r = n(17712),
                s = n(59030);
            const l = 8e3;

            function c(e, t, n) {
                const {
                    showNotification: c
                } = (0, o.ko)(), d = (0, s.A)(), [m, u] = (0, a.J0)(!1), A = (0, r.A)((() => {
                    u(!0), t || c({
                        message: i.yS ? d("Video.Unsupported.Mobile") : d("Video.Unsupported.Desktop"),
                        duration: l
                    })
                })), h = (0, r.A)((e => {
                    const t = e.currentTarget,
                        {
                            error: n
                        } = t;
                    n && (3 !== n.code && 4 !== n.code || A())
                })), p = (0, r.A)((e => {
                    const t = e.currentTarget;
                    t.videoHeight && t.videoWidth || A()
                }));
                return (0, a.vJ)((() => {
                    if (n) return;
                    const {
                        current: t
                    } = e;
                    return t ? (t.addEventListener("error", h), t.addEventListener("canplay", p), () => {
                        t.removeEventListener("error", h), t.removeEventListener("canplay", p)
                    }) : void 0
                }), [n, e]), m
            }
        },
        23459: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(84051),
                o = n(13439),
                i = n(59589),
                r = n(29807),
                s = n(37836);
            const l = 36e5,
                c = new Map;
            let d = new Set;
            const m = (0, s.nF)((() => {
                const e = Array.from(d),
                    t = e.slice(0, 100),
                    n = e.slice(101);
                (0, o.ko)().loadStoriesMaxIds({
                    peerIds: t
                }), t.forEach((e => c.set(e, Date.now()))), d = new Set(n), d.size && m()
            }), 500);

            function u(e) {
                const t = (0, a.Kr)((() => {
                        const t = (0, o.mS)();
                        return e?.map((e => (0, r.PVB)(t, e))).filter(Boolean)
                    }), [e]),
                    n = (0, a.Kr)((() => {
                        const e = (0, o.mS)();
                        return t?.filter((t => {
                            const n = c.get(t.id) || 0;
                            if (Date.now() - n < l) return !1;
                            if ((0, i.L8)(t.id)) {
                                const n = t,
                                    a = (0, r.K0y)(e, n.id),
                                    o = a && "userStatusEmpty" !== a.type;
                                return !n.isContact && !n.isSelf && !(0, i.tv)(n) && !t.isSupport && o
                            } {
                                const e = t;
                                return (0, i.WX)(e) && !e.isRestricted
                            }
                        })).map((e => e.id))
                    }), [t]);
                (0, a.vJ)((() => {
                    n?.length && (n.forEach((e => d.add(e))), m())
                }), [n])
            }
        },
        31880: (e, t, n) => {
            n.d(t, {
                Ay: () => p,
                _E: () => l,
                a9: () => m,
                ci: () => s
            });
            var a = n(13439),
                o = n(29807),
                i = n(87894),
                r = n(42215);
            const s = [{
                    icon: "user",
                    title: "FilterContacts",
                    key: "contacts"
                }, {
                    icon: "non-contacts",
                    title: "FilterNonContacts",
                    key: "nonContacts"
                }, {
                    icon: "group",
                    title: "FilterGroups",
                    key: "groups"
                }, {
                    icon: "channel",
                    title: "FilterChannels",
                    key: "channels"
                }, {
                    icon: "bots",
                    title: "FilterBots",
                    key: "bots"
                }],
                l = [{
                    icon: "mute",
                    title: "FilterMuted",
                    key: "excludeMuted"
                }, {
                    icon: "archive",
                    title: "FilterArchived",
                    key: "excludeArchived"
                }, {
                    icon: "readchats",
                    title: "FilterRead",
                    key: "excludeRead"
                }],
                c = ["includedChatIds", "bots", "channels", "groups", "contacts", "nonContacts"],
                d = ["excludedChatIds", "excludeArchived", "excludeMuted", "excludeRead"];

            function m(e, t, n) {
                let r = [],
                    s = [];
                if ("included" === t) {
                    const {
                        includedChatIds: t,
                        ...a
                    } = n ? e.includeFilters || {} : (0, i.Up)(e.folder, c);
                    r = t || [], s = Object.keys(a).filter((e => Boolean(a[e])))
                } else {
                    const {
                        excludedChatIds: t,
                        ...a
                    } = n ? e.excludeFilters || {} : (0, i.Up)(e.folder, d);
                    r = t || [], s = Object.keys(a).filter((e => Boolean(a[e])))
                }
                const l = (0, a.mS)();
                return {
                    selectedChatIds: r.filter((e => (0, o.hds)(l, e))),
                    selectedChatTypes: s
                }
            }

            function u(e) {
                if (e) {
                    const {
                        includedChatIds: t,
                        ...n
                    } = e;
                    if (Object.values(n).filter(Boolean).length > 1 || t?.length) return "";
                    if (n.bots) return "Bots";
                    if (n.groups) return "Groups";
                    if (n.channels) return "Channels";
                    if (n.contacts) return "Contacts";
                    if (n.nonContacts) return "Non-Contacts"
                }
                return ""
            }
            const A = {
                    mode: "create",
                    chatFilter: "",
                    folder: {
                        title: "",
                        includedChatIds: [],
                        excludedChatIds: []
                    }
                },
                h = (e, t) => {
                    switch (t.type) {
                        case "setTitle":
                            return {
                                ...e, folder: {
                                    ...e.folder,
                                    title: t.payload
                                }, isTouched: !0
                            };
                        case "setFolderId":
                            return {
                                ...e, folderId: t.payload, mode: "edit"
                            };
                        case "editIncludeFilters":
                            return {
                                ...e, includeFilters: (0, i.Up)(e.folder, c)
                            };
                        case "editExcludeFilters":
                            return {
                                ...e, excludeFilters: (0, i.Up)(e.folder, d)
                            };
                        case "setIncludeFilters":
                            return {
                                ...e, includeFilters: t.payload, chatFilter: ""
                            };
                        case "setExcludeFilters":
                            return {
                                ...e, excludeFilters: t.payload, chatFilter: ""
                            };
                        case "saveFilters":
                            return e.includeFilters ? {
                                ...e,
                                folder: {
                                    ...(0, i.cJ)(e.folder, c),
                                    title: e.folder.title ? e.folder.title : u(e.includeFilters),
                                    ...e.includeFilters
                                },
                                includeFilters: void 0,
                                chatFilter: "",
                                isTouched: !0
                            } : e.excludeFilters ? {
                                ...e,
                                folder: {
                                    ...(0, i.cJ)(e.folder, d),
                                    ...e.excludeFilters
                                },
                                excludeFilters: void 0,
                                chatFilter: "",
                                isTouched: !0
                            } : e;
                        case "editFolder": {
                            const {
                                id: e,
                                description: n,
                                ...a
                            } = t.payload;
                            return {
                                mode: "edit",
                                folderId: e,
                                folder: a,
                                chatFilter: ""
                            }
                        }
                        case "setChatFilter":
                            return {
                                ...e, chatFilter: t.payload
                            };
                        case "setIsTouched":
                            return {
                                ...e, isTouched: t.payload
                            };
                        case "setIsLoading":
                            return {
                                ...e, isLoading: t.payload
                            };
                        case "setError":
                            return {
                                ...e, isLoading: !1, error: t.payload
                            };
                        case "setIsChatlist":
                            return {
                                ...e, folder: {
                                    ...e.folder,
                                    isChatList: t.payload
                                }
                            };
                        case "reset":
                            return A;
                        default:
                            return e
                    }
                },
                p = () => (0, r.A)(h, A)
        },
        14737: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(84051),
                o = n(17712);
            const i = function(e, t) {
                const n = (0, o.A)(e);
                (0, a.vJ)((() => {
                    if ("number" != typeof t) return;
                    const e = setTimeout((() => n()), t);
                    return () => clearTimeout(e)
                }), [t])
            }
        },
        63988: (e, t, n) => {
            n.d(t, {
                D7: () => c,
                aG: () => s,
                gs: () => r,
                tF: () => l
            });
            var a = n(16581),
                o = n(83414),
                i = n(672);

            function r(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return (0, i.A)((t => {
                    t(e())
                }), t, n, a)
            }

            function s(e, t) {
                const n = r((() => e()), [e], t, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
                return (0, o.A)(n, [n, e], !0)
            }

            function l(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return (0, a.A)((t => {
                    t(e())
                }), t, n, o, i)
            }

            function c(e, t) {
                const n = l((() => e()), [e], t, arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3]);
                return (0, o.A)(n, [n, e], !0)
            }
        },
        88792: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(29807),
                s = n(53827),
                l = n(49642),
                c = n(80853),
                d = n(82117),
                m = n(17712),
                u = n(35297);
            const A = function(e, t, n, A, h, p, g) {
                let y = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                    f = arguments.length > 8 ? arguments[8] : void 0,
                    v = arguments.length > 9 ? arguments[9] : void 0,
                    E = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
                    C = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
                    b = arguments.length > 12 ? arguments[12] : void 0,
                    w = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
                    S = arguments.length > 14 && void 0 !== arguments[14] && arguments[14];
                const I = (0, a.li)(null),
                    [N, M] = (0, a.J0)(!1);
                let k = N;
                const [P, T] = (0, a.J0)(0), x = (0, m.A)((() => {
                    M(!1), v && v()
                }));
                (0, u.A)((() => {
                    if (!e) return;
                    I.current = (0, s.kz)(e, n, ((e, a) => {
                        if (!S) {
                            switch (e) {
                                case "onPlay": {
                                    const {
                                        setVolume: e,
                                        setPlaybackRate: a,
                                        toggleMuted: s,
                                        proxy: c
                                    } = I.current;
                                    M(!0), "oneTimeVoice" !== n && (0, l.MV)(p, function(e) {
                                        let t = {};
                                        if (e && e.current) {
                                            const {
                                                play: n,
                                                pause: a,
                                                setCurrentTime: i,
                                                proxy: r,
                                                requestNextTrack: s,
                                                requestPreviousTrack: l,
                                                isFirst: c,
                                                isLast: d
                                            } = e.current;
                                            t = {
                                                play: () => {
                                                    n(r.src)
                                                },
                                                pause: () => {
                                                    a()
                                                },
                                                stop: () => {
                                                    a(), i(0), (0, o.ko)().closeAudioPlayer()
                                                },
                                                seekbackward: e => {
                                                    const t = e.seekOffset || 10;
                                                    i(Math.max(r.currentTime - t, 0))
                                                },
                                                seekforward: e => {
                                                    const t = e.seekOffset || 10;
                                                    i(Math.min(r.currentTime + t, r.duration))
                                                },
                                                seekTo: e => {
                                                    e.seekTime && i(e.seekTime)
                                                }
                                            }, d() || (t.nexttrack = () => {
                                                s()
                                            }), c() || (t.previoustrack = () => {
                                                l()
                                            })
                                        }
                                        return t
                                    }(I)), (0, l.HW)("playing");
                                    const {
                                        audioPlayer: d
                                    } = (0, r.nTw)((0, o.mS)());
                                    e(d.volume), s(Boolean(d.isMuted));
                                    const m = c.duration && Number.isFinite(c.duration) ? c.duration : t;
                                    ("voice" === n || m > i.CVm) && a(d.playbackRate), (0, l.hm)({
                                        duration: c.duration || 0,
                                        playbackRate: c.playbackRate,
                                        position: c.currentTime
                                    });
                                    break
                                }
                                case "onRateChange": {
                                    const {
                                        proxy: e
                                    } = I.current;
                                    (0, l.hm)({
                                        duration: e.duration || 0,
                                        playbackRate: e.playbackRate,
                                        position: e.currentTime
                                    });
                                    break
                                }
                                case "onPause":
                                    M(!1), (0, l.HW)("paused"), b?.();
                                    break;
                                case "onTimeUpdate": {
                                    const {
                                        proxy: e
                                    } = I.current;
                                    if (w && 0 === e.currentTime) break;
                                    const n = e.duration && Number.isFinite(e.duration) ? e.duration : t;
                                    C || T(e.currentTime / n);
                                    break
                                }
                                case "onEnded":
                                    (0, l.HW)("paused")
                            }
                            h?.[e]?.(a)
                        }
                    }), f, x);
                    const {
                        proxy: a
                    } = I.current;
                    N || a.paused || (M(!0), k = !0), g && !S && g(a)
                }), [e]), (0, a.vJ)((() => {
                    N && p && (0, l.D5)(p)
                }), [p, N]);
                const {
                    play: R,
                    pause: L,
                    setCurrentTime: B,
                    proxy: O,
                    destroy: F,
                    setVolume: D,
                    stop: U,
                    isFirst: K,
                    isLast: j,
                    requestNextTrack: $,
                    requestPreviousTrack: z,
                    setPlaybackRate: _,
                    toggleMuted: J
                } = I.current ?? {}, H = (0, a.Kr)((() => O?.duration && Number.isFinite(O.duration) ? O.duration : t), [O?.duration, t]);
                (0, a.vJ)((() => {
                    O && (w && 0 === O.currentTime || !H || (0, c.f)(O) || C || T(O.currentTime / H))
                }), [H, P, O, C, w]), (0, a.vJ)((() => () => {
                    F?.(E)
                }), [F, E]), (0, d.A)((e => {
                    let [t, n] = e;
                    t === y && A === n || O?.src && O?.paused || y && A && !N && R?.(A)
                }), [y, A, N, R, O?.src, O?.paused, n]);
                const V = (0, m.A)((() => {
                        A && R?.(A)
                    })),
                    q = (0, m.A)((() => {
                        N ? L?.() : V()
                    })),
                    G = (0, m.A)((e => {
                        B?.(e), H && O && T(O.currentTime / H)
                    }));
                return {
                    isPlaying: k,
                    playProgress: P,
                    playPause: q,
                    pause: L,
                    play: V,
                    stop: U,
                    setCurrentTime: G,
                    setVolume: D,
                    audioProxy: O,
                    duration: H,
                    requestNextTrack: $,
                    requestPreviousTrack: z,
                    isFirst: K,
                    isLast: j,
                    setPlaybackRate: _,
                    toggleMuted: J
                }
            }
        },
        45470: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(84051),
                o = n(32610),
                i = n(66644),
                r = n(82393),
                s = n(35297);
            const l = 2,
                c = 2;

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l,
                    m = arguments.length > 4 ? arguments[4] : void 0,
                    u = arguments.length > 5 ? arguments[5] : void 0;
                const A = (0, a.li)(null),
                    h = (0, a.li)();
                return (0, s.A)((() => {
                    t || (h.current = !1)
                }), [e, t]), (0, a.vJ)((() => {
                    const a = A.current;
                    if (!e || !a || t || h.current) return;
                    h.current = !0;
                    const s = new Image,
                        l = () => {
                            const e = m || s.width,
                                t = u || s.height,
                                n = a.getContext("2d", {
                                    alpha: !1
                                });
                            (0, i.RK)((() => {
                                a.width = e, a.height = t, r.QH && (n.filter = `blur(${d}px)`), n.drawImage(s, 2 * -d, 2 * -d, e + 4 * d, t + 4 * d), a.classList.remove("canvas-blur-setup"), r.QH || (0, o.A)(n, 0, 0, e, t, d, c)
                            }))
                        };
                    s.onload = () => {
                        n ? (0, i.YS)(l) : l()
                    }, s.src = e
                }), [e, t, u, m, d, n]), A
            }
        },
        47067: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(59589),
                s = n(87894),
                l = n(82393),
                c = n(59030);
            const d = function(e) {
                let {
                    chat: t,
                    user: n,
                    folderId: d,
                    isPinned: m,
                    isMuted: u,
                    canChangeFolder: A,
                    isSavedDialog: h,
                    currentUserId: p,
                    isPreview: g,
                    handleDelete: y,
                    handleMute: f,
                    handleChatFolderChange: v,
                    handleReport: E
                } = e, C = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const b = (0, c.A)(),
                    {
                        isSelf: w
                    } = n || {},
                    S = n?.id === i.zv8,
                    I = (0, a.Kr)((() => {
                        if (t) return h ? b("Delete") : (0, r.L8)(t.id) ? b("DeleteChatUser") : (0, r.IC)(t) ? b("DeleteChat") : (0, r.WX)(t) ? b("LeaveChannel") : b("Group.LeaveGroup")
                    }), [t, h, b]);
                return (0, a.Kr)((() => {
                    if (!t || g) return;
                    const {
                        toggleChatPinned: e,
                        toggleSavedDialogPinned: a,
                        updateChatMutedState: i,
                        toggleChatArchived: c,
                        toggleChatUnread: N,
                        openChatInNewTab: M
                    } = (0, o.ko)(), k = l.OS && {
                        title: l.cp ? "Open in new window" : "Open in new tab",
                        icon: "open-in-new-tab",
                        handler: () => {
                            M(h ? {
                                chatId: p,
                                threadId: t.id
                            } : {
                                chatId: t.id
                            })
                        }
                    }, P = () => {
                        h ? a({
                            id: t.id
                        }) : e({
                            id: t.id,
                            folderId: d
                        })
                    }, T = m ? {
                        title: b("UnpinFromTop"),
                        icon: "unpin",
                        handler: P
                    } : {
                        title: b("PinToTop"),
                        icon: "pin",
                        handler: P
                    }, x = {
                        title: I,
                        icon: "delete",
                        destructive: !0,
                        handler: y
                    };
                    if (h) return (0, s.oE)([k, T, x]);
                    const R = A ? {
                            title: b("ChatList.Filter.AddToFolder"),
                            icon: "folder",
                            handler: v
                        } : void 0,
                        L = u ? {
                            title: b("ChatList.Unmute"),
                            icon: "unmute",
                            handler: () => i({
                                chatId: t.id,
                                isMuted: !1
                            })
                        } : {
                            title: `${b("ChatList.Mute")}...`,
                            icon: "mute",
                            handler: f
                        };
                    if (C) return (0, s.oE)([k, T, R, L]);
                    const B = t.unreadCount || t.hasUnreadMark ? {
                            title: b("MarkAsRead"),
                            icon: "readchats",
                            handler: () => N({
                                id: t.id
                            })
                        } : void 0,
                        O = t.unreadCount || t.hasUnreadMark || t.isForum ? void 0 : {
                            title: b("MarkAsUnread"),
                            icon: "unread",
                            handler: () => N({
                                id: t.id
                            })
                        },
                        F = (0, r.TJ)(t) ? {
                            title: b("Unarchive"),
                            icon: "unarchive",
                            handler: () => c({
                                id: t.id
                            })
                        } : {
                            title: b("Archive"),
                            icon: "archive",
                            handler: () => c({
                                id: t.id
                            })
                        },
                        D = E && ((0, r.WX)(t) || (0, r.YE)(t) || n && !n.isSelf) ? {
                            title: b("ReportPeer.Report"),
                            icon: "flag",
                            handler: E
                        } : void 0,
                        U = void 0 !== d;
                    return (0, s.oE)([k, R, B, O, T, !w && L, !w && !S && !U && F, D, x])
                }), [t, n, A, b, v, m, C, u, p, y, f, E, d, w, S, h, I, g])
            }
        },
        83414: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(5718),
                i = n(41257),
                r = n(35297);
            const s = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const s = t ? e : () => e;
                t ?? (t = [e]);
                const [l, c] = (0, a.Ul)(), d = (0, i.i)(s);

                function m() {
                    const e = d.current;
                    n ? e(c) : c(e())
                }
                return (0, r.A)(m, t), (0, o.R)(m, t), l
            }
        },
        49746: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(84051),
                o = n(13439);

            function i(e, t, n, i, r) {
                const {
                    loadMessage: s
                } = (0, o.ko)();
                (0, a.vJ)((() => {
                    r || t && !n && s({
                        chatId: e,
                        messageId: t,
                        replyOriginForId: i
                    })
                }), [r, e, n, t, i])
            }
        },
        21488: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(13439),
                i = n(37836);
            const r = function(e, t, n) {
                const {
                    loadPeerStoriesByIds: r
                } = (0, o.ko)(), s = (0, a.Kr)((() => {
                    const n = (0, i.nF)(r, 200, !0);
                    return () => {
                        n({
                            peerId: e,
                            storyIds: [t]
                        })
                    }
                }), [t, e]);
                (0, a.vJ)((() => {
                    e && t && (!n || !("content" in n) && !("isDeleted" in n)) && s()
                }), [s, n, t, e])
            }
        },
        74984: (e, t, n) => {
            n.d(t, {
                Rh: () => r,
                g5: () => l,
                ic: () => s
            });
            var a = n(84051),
                o = n(49763),
                i = n(30857);

            function r(e) {
                const t = (0, i.A)();
                return (0, a.vJ)((() => (0, o.Yw)(e, t)), [e, t]), (0, o.YA)(e)
            }

            function s() {
                const e = (0, i.A)();
                return (0, a.vJ)((() => (0, o.P1)(e)), [e]), (0, o.PZ)()
            }

            function l() {
                const e = (0, i.A)();
                return (0, a.vJ)((() => (0, o.BU)(e)), [e]), (0, o.jn)()
            }
        },
        11462: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(30857),
                i = n(17712),
                r = n(35297);

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const t = (0, a.li)(e),
                    n = (0, a.li)(!1),
                    s = (0, o.A)();
                (0, r.A)((() => {
                    e && (t.current = !0)
                }), [e]);
                const l = (0, i.A)((() => {
                        t.current = !1, n.current = !1, s()
                    })),
                    c = (0, i.A)((() => {
                        n.current = !0, s()
                    }));
                return {
                    shouldRenderForumPanel: t.current,
                    isAnimationStarted: n.current,
                    handleForumPanelAnimationEnd: l,
                    handleForumPanelAnimationStart: c
                }
            }
        },
        41316: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var a = n(84051);

            function o(e) {
                const [t, n] = (0, a.Ul)();
                return (0, a.vJ)((() => {
                    function t() {
                        const t = window.getSelection();
                        if (!t?.rangeCount) return;
                        const a = t.getRangeAt(0);
                        if (!a) return;
                        if (!document.querySelector(e)) return;
                        const {
                            commonAncestorContainer: o
                        } = a;
                        (o instanceof Element ? o : o.parentElement).closest(e) && n(a)
                    }
                    return document.addEventListener("selectionchange", t), () => document.removeEventListener("selectionchange", t)
                }), [e, n]), t
            }
        },
        36838: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var a = n(84051);
            const o = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                (0, a.vJ)((() => {
                    if (t) return;
                    const a = e.current;

                    function o(e) {
                        e.deltaX || (a.scrollLeft += e.deltaY / 4, n && e.preventDefault())
                    }
                    return a.addEventListener("wheel", o, {
                        passive: !n
                    }), () => {
                        a.removeEventListener("wheel", o)
                    }
                }), [e, t, n])
            }
        },
        2178: (e, t, n) => {
            n.d(t, {
                v: () => s
            });
            var a = n(84051),
                o = n(46536);
            const i = new Set(["INPUT", "TEXTAREA", "SELECT"]),
                r = (0, o.h)();

            function s(e) {
                (0, a.vJ)((() => {
                    if (!e) return;
                    const t = Object.entries(e);
                    return r.addCallback((function(e) {
                        (function(e) {
                            return !(e.target instanceof HTMLElement) || !i.has(e.target.tagName)
                        })(e) && t.forEach((t => {
                            let [n, a] = t;
                            (function(e) {
                                return t => function(e, t) {
                                    const {
                                        alt: n,
                                        ctrl: a,
                                        meta: o,
                                        mod: i,
                                        shift: r,
                                        key: s
                                    } = e, {
                                        altKey: l,
                                        ctrlKey: c,
                                        metaKey: d,
                                        shiftKey: m,
                                        key: u
                                    } = t;
                                    if (n !== l) return !1;
                                    if (i) {
                                        if (!c && !d) return !1
                                    } else {
                                        if (a !== c) return !1;
                                        if (o !== d) return !1
                                    }
                                    return r === m && Boolean(s && (u.toLowerCase() === s.toLowerCase() || t.code.replace("Key", "").toLowerCase() === s.toLowerCase()))
                                }(function(e) {
                                    const t = e.toLowerCase().split("+").map((e => e.trim())),
                                        n = {
                                            alt: t.includes("alt"),
                                            ctrl: t.includes("ctrl"),
                                            meta: t.includes("meta"),
                                            mod: t.includes("mod"),
                                            shift: t.includes("shift")
                                        },
                                        a = ["alt", "ctrl", "meta", "shift", "mod"];
                                    return {
                                        ...n,
                                        key: t.find((e => !a.includes(e)))
                                    }
                                }(e), t)
                            })(n)(e) && a(e)
                        }))
                    }))
                }), [e])
            }
            document.documentElement.addEventListener("keydown", r.runCallbacks)
        },
        79174: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(66644),
                i = n(43874);
            const r = 500,
                s = 300;

            function l(e, t, n) {
                const {
                    isMobile: l
                } = (0, i.Ay)();
                (0, a.vJ)((() => {
                    t ? l || setTimeout((() => {
                        (0, o.RK)((() => {
                            e.current?.isConnected && e.current.focus()
                        }))
                    }), r) : (e.current?.isConnected && e.current.blur(), n && setTimeout(n, s))
                }), [e, l, t, n])
            }
        },
        39351: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(13376),
                o = n(15283),
                i = n(30857);
            const r = () => {
                const e = (0, i.A)();
                return (0, o.A)((() => (0, a.iV)(e))), (0, a.Yw)()
            }
        },
        69419: (e, t, n) => {
            n.d(t, {
                A: () => p
            });
            var a = n(84051),
                o = n(97335),
                i = n(29807),
                r = n(58554),
                s = n(37836),
                l = n(82393),
                c = n(63527),
                d = n(30857),
                m = n(14745);
            const u = .75,
                A = 1500,
                h = 500;

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.qZ.BlobUrl,
                    p = arguments.length > 3 ? arguments[3] : void 0,
                    g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                const y = e ? r.Ih(e) : void 0,
                    f = l.Uz && n === o.qZ.Progressive,
                    v = (0, d.A)(),
                    E = (0, c.A)(i.nIz),
                    C = (0, m.A)(),
                    [b, w] = (0, a.J0)(y && !f ? 1 : 0),
                    S = (0, a.li)(),
                    I = (0, a.Kr)((() => (0, s.nF)((e => {
                        S.current && (!p || Date.now() - S.current > p) && w(e)
                    }), h, !0)), [p]);
                return (0, a.vJ)((() => {
                    !t && e && (y ? f && setTimeout((() => {
                        w(u)
                    }), A) : (w(0), S.current && r.ch(I), S.current = Date.now(), r.hd(e, n, g, I, C).then((() => {
                        const e = Date.now() - S.current;
                        S.current = void 0, !p || e >= p ? v() : setTimeout(v, p - e)
                    }))))
                }), [t, e, y, n, f, p, I, g, C, E]), (0, a.vJ)((() => {
                    t && S.current && (r.ch(I), w(0), S.current = void 0)
                }), [I, t]), (0, a.vJ)((() => () => {
                    e && r.Cn(e, C)
                }), [C, e]), {
                    mediaData: y,
                    loadProgress: b
                }
            }
        },
        36680: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(84051),
                o = n(82393),
                i = n(17712);
            const r = 250;
            let s;

            function l(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r,
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                const c = (0, a.li)(!1),
                    d = (0, i.A)((() => {
                        c.current = !0
                    }));
                return (0, a.vJ)((() => {
                    s && (clearTimeout(s), s = void 0), !e || o.TF || l || (s = window.setTimeout((() => {
                        c.current || t()
                    }), 2 * n))
                }), [l, e, n, t]), [(0, i.A)((() => {
                    c.current = !0
                })), (0, i.A)((() => {
                    c.current = !1, s && (clearTimeout(s), s = void 0), s = window.setTimeout((() => {
                        c.current || t()
                    }), n)
                })), d]
            }
        },
        23565: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(30857),
                i = n(29886),
                r = n(35297);

            function s(e, t) {
                const n = (0, i.A)(e, !0),
                    s = (0, a.li)(),
                    l = (0, o.A)(),
                    c = null != e,
                    d = null != n;
                return c && s.current && (clearTimeout(s.current), s.current = void 0), (0, r.A)((() => {
                    t && !c && d && !s.current && (s.current = window.setTimeout((() => {
                        s.current = void 0, l()
                    }), t))
                }), [t, l, c, d]), s.current && t && !c ? n : e
            }
        },
        42215: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(84051),
                o = n(30857);

            function i(e, t) {
                const n = (0, o.A)(),
                    i = (0, a.li)(e),
                    r = (0, a.li)(t),
                    s = (0, a.hb)((e => (r.current = i.current(r.current, e), n(), r.current)), []);
                return [r.current, s]
            }
        },
        56133: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var a = n(16581);

            function o(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                return (0, a.A)((e => {
                    e()
                }), o, e, t, n)
            }
        },
        24531: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(84051),
                o = n(31481),
                i = n(17663),
                r = n(80140),
                s = n(17712),
                l = n(59030),
                c = n(80089),
                d = n(80464);
            const m = e => {
                    const {
                        isOpen: t
                    } = e, n = (0, d.A)(c.ar.Extra, "CalendarModal", !t);
                    return n ? a.Ay.createElement(n, e) : void 0
                },
                u = (e, t, n) => {
                    const c = (0, l.A)(),
                        [d, u] = (0, a.J0)(),
                        A = (0, s.A)((function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            const n = Math.round(Math.max(e.getTime(), Date.now() + 6e4) / 1e3) + (t ? 0 : (0, r.SF)());
                            d?.(n), u(void 0)
                        })),
                        h = (0, s.A)((() => {
                            A(new Date(1e3 * o.NkL), !0)
                        })),
                        p = (0, s.A)((() => {
                            u(void 0), t?.()
                        })),
                        g = (0, s.A)((e => {
                            u((() => e))
                        })),
                        y = n ? new Date(1e3 * n) : new Date;
                    y.setSeconds(0), y.setMilliseconds(0);
                    const f = new Date;
                    return f.setFullYear(f.getFullYear() + 1), [g, a.Ay.createElement(m, {
                        isOpen: Boolean(d),
                        withTimePicker: !0,
                        selectedAt: y.getTime(),
                        maxAt: (0, i.CS)(f),
                        isFutureMode: !0,
                        secondButtonLabel: e ? c("Schedule.SendWhenOnline") : void 0,
                        onClose: p,
                        onSubmit: A,
                        onSecondButtonClick: e ? h : void 0
                    })]
                }
        },
        73172: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n(84051),
                o = n(13439),
                i = n(31481),
                r = n(37836);
            const s = (e, t) => (0, a.Kr)((() => (0, r.nF)((n => {
                e && t && (0, o.ko)().sendMessageAction({
                    chatId: e,
                    threadId: t,
                    action: n
                })
            }), i.cqp)), [e, t])
        },
        66991: (e, t, n) => {
            n.d(t, {
                Y: () => m,
                c: () => u
            });
            var a = n(84051),
                o = n(31481),
                i = n(66644),
                r = n(19822),
                s = n(39761),
                l = n(20897),
                c = n(82393);
            const d = 100;

            function m(e, t, n) {
                return (0, a.vJ)((() => {
                    if (!t || !e.current) return;
                    const a = p(),
                        o = e.current;
                    if (!c.Yw || !n || !a?.isTypeSupported(n)) return;
                    const m = new a;

                    function u() {
                        if (!t || !n) return;
                        const e = m.addSourceBuffer(n),
                            a = (0, l.h)(t);
                        e.addEventListener("updateend", (function() {
                            a.next().then((t => {
                                let {
                                    value: n,
                                    done: a
                                } = t;
                                "open" === m.readyState && (a ? h(m) : A(e, n))
                            }))
                        })), a.next().then((t => {
                            let {
                                value: n,
                                done: a
                            } = t;
                            a || "open" !== m.readyState || ((0, i.RK)((() => {
                                o.style.display = "block", setTimeout((() => {
                                    (0, i.RK)((() => {
                                        (0, r.ZM)(o, {
                                            opacity: "1"
                                        })
                                    }))
                                }), d)
                            })), A(e, n))
                        }))
                    }
                    return m.addEventListener("sourceopen", u, {
                        once: !0
                    }), (0, i.RK)((() => {
                        (0, r.ZM)(o, {
                            display: "none",
                            opacity: "0"
                        }), o.src = URL.createObjectURL(m)
                    })), () => {
                        (0, i.RK)((() => {
                            const e = o.src;
                            (0, s.A)(o), m.removeEventListener("sourceopen", u), "open" === m.readyState && h(m), URL.revokeObjectURL(e)
                        }))
                    }
                }), [n, t, e]), u(n)
            }

            function u(e) {
                return !(!c.Yw || !e) && Boolean(p()?.isTypeSupported(e))
            }

            function A(e, t) {
                try {
                    e.appendBuffer(t)
                } catch (e) {
                    o.Oig && console.warn("[Stream] failed to append buffer", e)
                }
            }

            function h(e) {
                try {
                    e.endOfStream()
                } catch (e) {
                    o.Oig && console.warn("[Stream] failed to end stream", e)
                }
            }

            function p() {
                return "ManagedMediaSource" in window ? ManagedMediaSource : "MediaSource" in window ? MediaSource : void 0
            }
        },
        60138: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(84051),
                o = n(37836),
                i = n(17712);

            function r(e) {
                const t = (0, i.A)(e);
                (0, a.vJ)((() => (0, o.yu)(t)), [t])
            }
        },
        5130: (e, t, n) => {
            n.d(t, {
                U: () => r
            });
            var a = n(14235);

            function o(e, t, n) {
                var a;
                return (t = "symbol" == typeof(a = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, "string");
                        if ("object" != typeof a) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t)) ? a : a + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class i {
                constructor(e, t, n) {
                    this.target = e, this.onUpdate = t, this.channel = n, o(this, "requestStates", new Map), o(this, "requestStatesByCallback", new Map)
                }
                destroy() {}
                init() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.postMessage({
                        type: "init",
                        args: t
                    })
                }
                request(e) {
                    const {
                        requestStates: t,
                        requestStatesByCallback: n
                    } = this, o = (0, a.A)(), i = {
                        type: "callMethod",
                        messageId: o,
                        ...e
                    }, r = {
                        messageId: o
                    }, s = new Promise(((e, t) => {
                        Object.assign(r, {
                            resolve: e,
                            reject: t
                        })
                    }));
                    if ("function" == typeof i.args[i.args.length - 1]) {
                        i.withCallback = !0;
                        const e = i.args.pop();
                        r.callback = e, n.set(e, r)
                    }
                    return t.set(o, r), s.catch((() => {})).finally((() => {
                        t.delete(o), r.callback && n.delete(r.callback)
                    })), this.postMessage(i), s
                }
                cancelCallback(e) {
                    e.isCanceled = !0;
                    const {
                        messageId: t
                    } = this.requestStatesByCallback.get(e) || {};
                    t && this.postMessage({
                        type: "cancelProgress",
                        messageId: t
                    })
                }
                onMessage(e) {
                    const {
                        requestStates: t,
                        channel: n
                    } = this;
                    if (e.channel === n)
                        if ("update" === e.type && this.onUpdate && this.onUpdate(e.update), "methodResponse" === e.type) {
                            const n = t.get(e.messageId);
                            n && (e.error ? n.reject(e.error) : n.resolve(e.response))
                        } else if ("methodCallback" === e.type) {
                        const n = t.get(e.messageId);
                        n?.callback?.(...e.callbackArgs)
                    } else if ("unhandledError" === e.type) throw new Error(e.error?.message)
                }
                postMessage(e) {
                    e.channel = this.channel, this.target.postMessage(e)
                }
            }

            function r(e, t, n) {
                const a = new i(e, t, n);

                function o(e) {
                    let {
                        data: t
                    } = e;
                    a.onMessage(t)
                }
                return e.addEventListener("message", o), a.destroy = () => {
                    e.removeEventListener("message", o)
                }, a
            }
        },
        57446: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var a = n(13439),
                o = n(66644),
                i = n(29807),
                r = n(19822);
            const s = 300,
                l = new Map;

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
                (0, i.PKK)((0, a.mS)()) || (n = 0);
                const c = "rtl" === e.getAttribute("dir"),
                    {
                        scrollLeft: d,
                        offsetWidth: m,
                        scrollWidth: u,
                        dataset: {
                            scrollId: A
                        }
                    } = e;
                let h = t - d;
                if (h < 0) {
                    const e = -d * (c ? -1 : 1);
                    h = Math.max(h, e)
                } else if (h > 0) {
                    const e = u - (d + m);
                    h = Math.min(h, e)
                }
                if (0 === h) return Promise.resolve();
                A && l.has(A) && l.get(A)();
                const p = d + h;
                return new Promise((t => {
                    (0, o.RK)((() => {
                        if (0 === n) return e.scrollLeft = p, void t();
                        let a = !1;
                        const i = Math.random().toString();
                        e.dataset.scrollId = i, l.set(i, (() => {
                            a = !0
                        })), e.style.scrollSnapType = "none";
                        const s = Date.now();
                        (0, r.i0)((() => {
                            if (a) return !1;
                            const o = Math.min((Date.now() - s) / n, 1),
                                r = h * (1 - function(e) {
                                    return 1 - (1 - e) ** 3.5
                                }(o));
                            return e.scrollLeft = Math.round(p - r), o >= 1 && (e.style.scrollSnapType = "", delete e.dataset.scrollId, l.delete(i), t()), o < 1
                        }), o.RK)
                    }))
                }))
            }
        },
        81954: (e, t, n) => {
            n.d(t, {
                Ay: () => A,
                _v: () => h,
                o8: () => g
            });
            var a = n(13439),
                o = n(89925),
                i = n(31481),
                r = n(66644),
                s = n(29807),
                l = n(19822),
                c = n(82393),
                d = n(32706);
            let m, u = !1;

            function A() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                m = t.slice(0, 8);
                const a = p(...m);
                if (t[8]) return a;
                (0, r.RK)(a)
            }

            function h() {
                u && ((0, l.vk)(), (0, r.YS)((() => {
                    (0, r.RK)(p(...m))
                })))
            }

            function p(e, t, n) {
                let A = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.Hor,
                    p = arguments.length > 5 ? arguments[5] : void 0,
                    g = arguments.length > 6 ? arguments[6] : void 0,
                    v = arguments.length > 7 ? arguments[7] : void 0;
                p !== o.CC.Static && (0, s.PKK)((0, a.mS)()) || (g = 0);
                const {
                    offsetTop: E,
                    offsetHeight: C
                } = t, {
                    scrollTop: b,
                    offsetHeight: w,
                    scrollHeight: S
                } = e, I = v && e.dataset.normalHeight ? Number(e.dataset.normalHeight) : w;
                let N;
                switch (n) {
                    case "start":
                        N = E - A + (c.Ni ? 1 : 0);
                        break;
                    case "end":
                        N = E + C + A - I;
                        break;
                    case "nearest":
                    case "center":
                    case "centerOrTop":
                        N = C < I ? E + C / 2 - I / 2 : E - A
                }
                const M = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Hor,
                        a = arguments.length > 3 ? arguments[3] : void 0;
                    const {
                        scrollTop: r
                    } = e;
                    if (void 0 === a) {
                        const e = t - r;
                        if (e < -n) return r + (e + n);
                        if (e > n) return r + (e - n)
                    } else {
                        if (a === o.CC.Up) return t + n;
                        if (a === o.CC.Down) return Math.max(0, t - n)
                    }
                    return r
                }(e, N, h, p);
                let k = N - M;
                if (k < 0) {
                    const e = -M;
                    k = Math.max(k, e)
                } else if (k > 0) {
                    const e = S - (M + I);
                    k = Math.min(k, e)
                }
                const P = Math.abs(k);
                return () => {
                    if (P < 1) return void(b !== M && (e.scrollTop = M));
                    const t = M + k;
                    if (0 === g) return void(e.scrollTop = t);
                    u = !0;
                    const n = P <= i.QNl ? y : f,
                        a = g || i.Qk7 + P / i.Hor * (i.qke - i.Qk7),
                        o = Date.now(),
                        s = (0, d.UH)();
                    (0, l.S0)((() => {
                        const i = Math.min((Date.now() - o) / a, 1),
                            r = k * (1 - n(i)),
                            l = Math.round(t - r);
                        return e.scrollTop = l, u = i < 1 && l !== t, u || (m = void 0, s()), u
                    }), r.RK)
                }
            }

            function g() {
                return u
            }

            function y(e) {
                return 1 - (1 - e) ** 3.5
            }

            function f(e) {
                return 1 - (1 - e) ** 6.5
            }
        },
        53827: (e, t, n) => {
            n.d(t, {
                _K: () => g,
                dj: () => v,
                kz: () => y
            });
            var a = n(13439),
                o = n(89925),
                i = n(66644),
                r = n(29807),
                s = n(50140),
                l = n(80853),
                c = n(41733),
                d = n(82393);
            const m = new Map;
            let u, A = [],
                h = [];

            function p(e, t) {
                const n = u && m.get(u);
                n && (n.audio.pause(), n.audio.currentTime = 0, n.onTrackChange && n.onTrackChange());
                const i = f(e, (0, r.nTw)((0, a.mS)()).audioPlayer.origin || o.d9.Inline, t);
                if (!i) return;
                if (!m.has(i)) return void(0, a.ko)().openAudioPlayer((0, s.ES)(E(i).messageKey));
                const l = m.get(i);
                l.onForcePlay && l.onForcePlay(), u = i, l.audio.src && (0, c.A)(l.audio)
            }

            function g() {
                const e = u && m.get(u);
                e && e.audio.pause()
            }

            function y(e, t, n, g, y) {
                if (!m.has(e)) {
                    const n = function(e, t, n, a) {
                        const o = new Audio;

                        function i(t) {
                            return n => {
                                m.has(e) && ((0, l.f)(o) || m.get(e).handlers.forEach((e => {
                                    e(t, n)
                                })))
                            }
                        }
                        return o.addEventListener("timeupdate", i("onTimeUpdate")), o.addEventListener("play", i("onPlay")), o.addEventListener("pause", i("onPause")), o.addEventListener("loadstart", i("onLoadStart")), o.addEventListener("loadeddata", i("onLoadedData")), o.addEventListener("playing", i("onPlaying")), o.addEventListener("ended", (() => {
                            m.has(e) && ((0, l.f)(o) || p(e))
                        })), {
                            audio: o,
                            type: t,
                            proxy: new Proxy(o, {
                                get: (e, t) => e[t]
                            }),
                            handlers: [],
                            onForcePlay: n,
                            onTrackChange: a
                        }
                    }(e, t, g, y);
                    m.set(e, n),
                        function(e, t) {
                            "audio" !== e.type || h.includes(t) || (h.push(t), h.sort(C)), "voice" !== e.type || A.includes(t) || (A.push(t), A.sort(C))
                        }(n, e)
                }
                const {
                    audio: v,
                    proxy: b,
                    handlers: w
                } = m.get(e);
                return w.push(n), {
                    play(n) {
                        if (!v.paused) return;
                        const i = u && m.get(u);
                        i && u !== e && (i.audio.pause(), i.audio.currentTime = 0, (0, l.f)(i.audio) && (i.audio.dataset.preventPlayAfterPatch = "true"), i.onTrackChange && i.onTrackChange()), u = e, v.src || (v.src = n, v.preload = "auto", n.includes("/progressive/") && d.Yw && (delete v.dataset.preventPlayAfterPatch, (0, l.C)(v))), (0, c.A)(v),
                            function(e, t) {
                                if ((0, r.nTw)((0, a.mS)()).globalSearch.currentContent === o.$C.Music) return;
                                const {
                                    chatId: n
                                } = (0, s.ES)(E(t).messageKey), i = (0, r.Xf0)((0, a.mS)())?.chatId, l = e => e.startsWith(`msg${n}`) || i && e.startsWith(`msg${i}`);
                                "audio" === e && (h = h.filter(l)), "voice" === e && (A = A.filter(l))
                            }(t, e)
                    },
                    pause() {
                        u === e && v.pause()
                    },
                    stop() {
                        if (u === e) {
                            const e = v.src;
                            v.pause(), (0, i.Uz)((() => {
                                v.src = "", v.src = e
                            }))
                        }
                    },
                    setCurrentTime(t) {
                        u === e && (v.fastSeek ? v.fastSeek(t) : v.currentTime = t)
                    },
                    setVolume(t) {
                        u === e && (v.volume = t, v.muted = !1)
                    },
                    setPlaybackRate(t) {
                        u === e && (v.playbackRate = t)
                    },
                    toggleMuted(e) {
                        v.muted = void 0 === e ? !v.muted : e
                    },
                    proxy: b,
                    requestNextTrack() {
                        p(e)
                    },
                    isLast: () => !f(e, (0, r.nTw)((0, a.mS)()).audioPlayer.origin),
                    isFirst: () => !f(e, (0, r.nTw)((0, a.mS)()).audioPlayer.origin, !0),
                    requestPreviousTrack() {
                        p(e, !0)
                    },
                    destroy() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        const a = m.get(e);
                        a && (a.handlers = a.handlers.filter((e => e !== n)), a.handlers.length || (a.audio.pause(), m.delete(e), t && function(e, t) {
                            const n = e => e !== t;
                            "audio" === e.type && (h = h.filter(n)), "voice" === e.type && (A = A.filter(n))
                        }(a, e), e === u && (u = void 0)))
                    }
                }
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.d9.Inline,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                const a = function(e) {
                    switch (e.type) {
                        case "audio":
                            return h;
                        case "voice":
                            return A;
                        default:
                            return
                    }
                }(m.get(e));
                if (!a) return;
                if (t === o.d9.Search) {
                    const t = a.indexOf(e);
                    if (t < 0) return;
                    return a[t + (n ? -1 : 1)]
                }
                const {
                    chatId: i
                } = (0, s.ES)(E(e).messageKey), r = a.filter((e => e.startsWith(`msg${i}`))), l = r.indexOf(e);
                if (l < 0) return;
                let c = t === o.d9.Inline ? -1 : 1;
                return n && (c *= -1), r[l + c]
            }

            function v(e) {
                const t = (0, s.AD)(e);
                if (t) return `${t}-${e.date}`
            }

            function E(e) {
                return {
                    messageKey: e.match(/^msg(-?\d+)-(\d+)/)[0],
                    date: Number(e.split("-").pop())
                }
            }

            function C(e, t) {
                if (!e || !t) return 0;
                const {
                    date: n,
                    messageKey: a
                } = E(e), {
                    date: o,
                    messageKey: i
                } = E(t), r = o - n;
                return 0 === r ? i.localeCompare(a) : r
            }
        },
        48894: (e, t, n) => {
            n.d(t, {
                LS: () => c,
                Yi: () => d,
                Zf: () => s,
                bM: () => r,
                rX: () => l,
                v2: () => i,
                xp: () => o
            });
            var a = n(87679);

            function o(e) {
                return [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)]
            }

            function i(e) {
                const t = e[0].toString(16),
                    n = e[1].toString(16),
                    a = e[2].toString(16);
                return (1 == t.length ? "0" + t : t) + (1 == n.length ? "0" + n : n) + (1 == a.length ? "0" + a : a)
            }

            function r(e) {
                let [t, n, a] = e;
                t /= 255, n /= 255, a /= 255;
                let o, i, r = Math.max(t, n, a),
                    s = Math.min(t, n, a),
                    l = r,
                    c = r - s;
                if (i = 0 == r ? 0 : c / r, r == s) o = 0;
                else {
                    switch (r) {
                        case t:
                            o = (n - a) / c + (n < a ? 6 : 0);
                            break;
                        case n:
                            o = (a - t) / c + 2;
                            break;
                        case a:
                            o = (t - n) / c + 4
                    }
                    o /= 6
                }
                return [o, i, l]
            }

            function s(e) {
                let t, n, a, [o, i, r] = e,
                    s = Math.floor(6 * o),
                    l = 6 * o - s,
                    c = r * (1 - i),
                    d = r * (1 - l * i),
                    m = r * (1 - (1 - l) * i);
                switch (s % 6) {
                    case 0:
                        t = r, n = m, a = c;
                        break;
                    case 1:
                        t = d, n = r, a = c;
                        break;
                    case 2:
                        t = c, n = r, a = m;
                        break;
                    case 3:
                        t = c, n = d, a = r;
                        break;
                    case 4:
                        t = m, n = c, a = r;
                        break;
                    case 5:
                        t = r, n = c, a = d
                }
                return [Math.round(255 * t), Math.round(255 * n), Math.round(255 * a)]
            }
            async function l(e) {
                const t = [0, 0, 0];
                let n, o, i, r, s = -4,
                    l = [0, 0, 0],
                    c = 0;
                const d = document.createElement("canvas"),
                    m = d.getContext && d.getContext("2d");
                if (!m) return t;
                const u = await (0, a.NN)(e);
                i = u.naturalHeight || u.offsetHeight || u.height, o = u.naturalWidth || u.offsetWidth || u.width, d.height = i, d.width = o, m.drawImage(u, 0, 0);
                try {
                    n = m.getImageData(0, 0, o, i)
                } catch (e) {
                    return t
                }
                for (r = n.data.length;
                    (s += 20) < r;) 0 !== n.data[s + 3] && (++c, l[0] += n.data[s], l[1] += n.data[s + 1], l[2] += n.data[s + 2]);
                return l[0] = Math.floor(l[0] / c), l[1] = Math.floor(l[1] / c), l[2] = Math.floor(l[2] / c), l
            }

            function c(e) {
                const [t, n, a] = e;
                return .2126 * t + .7152 * n + .0722 * a
            }

            function d(e) {
                let [t, n, a] = r(e);
                return n = Math.min(1, n + .05 + .1 * (1 - n)), a = a > .5 ? Math.max(0, .65 * a) : Math.max(0, Math.min(1, 1 - .65 * a)), `hsla(${360*t}, ${100*n}%, ${100*a}%, .4)`
            }
        },
        67054: (e, t, n) => {
            function a(e, t) {
                return t - Math.floor(t / e) * e
            }
            n.d(t, {
                A: () => a
            })
        },
        95362: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n(37836);
            const o = 10,
                i = 1e3;
            let r = [],
                s = !1;

            function l(e, t) {
                r.push({
                    url: e,
                    filename: t
                }), s || (s = !0, setTimeout((async () => {
                    await async function() {
                        let e = 0;
                        for (const t of r) c(t), e++, e === o && (await (0, a.v7)(i), e = 0);
                        r = []
                    }(), s = !1
                }), i))
            }

            function c(e) {
                let {
                    url: t,
                    filename: n
                } = e;
                const a = document.createElement("a");
                a.href = t, a.download = n;
                try {
                    a.click()
                } catch (e) {
                    console.error(e)
                }
            }
        },
        17237: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(98221),
                o = n(24282);
            const i = new RegExp(`^(?:${a.A.source})+$`, ""),
                r = e => {
                    const t = (0, o.A)(e).split("\n"),
                        n = t.join("");
                    if (n.length > 800) return !1;
                    if (!Boolean(n.match(i))) return !1;
                    const r = t.map((e => {
                        let t = 0;
                        for (; a.A.exec(e);)
                            if (t++, t > 100) return a.A.lastIndex = 0, -1;
                        return t
                    }));
                    let s = t.length;
                    for (let e = 0; e < r.length; e++) {
                        if (-1 === r[e]) return !1;
                        r[e] > s && (s = r[e])
                    }
                    return s
                }
        },
        36353: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var a = n(82393);

            function o(e, t, n) {
                if (!t && e === document.activeElement) return;
                const o = window.getSelection(),
                    i = document.createRange(),
                    r = e.lastChild || e;
                a.TF || n || r && r.nodeValue ? (i.selectNodeContents(n ? e : r), i.collapse(!1), o.removeAllRanges(), o.addRange(i)) : e.focus()
            }
        },
        81686: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(31481);
            const o = 1;

            function i() {
                const e = window.getSelection();
                let t = e?.rangeCount ? e.getRangeAt(0).cloneContents() : void 0;
                const n = e?.focusNode && e.focusOffset > 0 && r(e.focusNode, a.zPk);
                if (!t || 0 === t.childElementCount) return;
                const i = Array.from(t.children).reduce(((e, t) => t.nodeType === o && t.classList.contains("message-date-group") ? Array.from(t.querySelectorAll(".Message")).reduce(((e, t) => e.concat(Number(t.dataset.messageId))), e) : t.nodeType === o && t.classList.contains("Message") ? e.concat(Number(t.dataset.messageId)) : e), []);
                for (; t.firstChild;) t.removeChild(t.firstChild);
                return t = void 0, n || i.pop(), i
            }

            function r(e, t) {
                return !(e.nodeType !== o || !e.classList.contains(t)) || !!e.parentNode && r(e.parentNode, t)
            }
        },
        24909: (e, t, n) => {
            n.d(t, {
                s: () => i,
                y: () => r
            });
            var a = n(48894);
            const o = 240;

            function i(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png";
                const a = e instanceof Blob ? URL.createObjectURL(e) : e,
                    o = new Image;
                return new Promise((i => {
                    o.onload = () => {
                        s(o, o.width * t, o.height * t, n).then((e => {
                            if (!e) throw new Error("Image resize failed!");
                            return URL.createObjectURL(e)
                        })).then(i).finally((() => {
                            e instanceof Blob && URL.revokeObjectURL(a)
                        }))
                    }, o.src = a
                }))
            }

            function r(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png";
                const o = e instanceof Blob ? URL.createObjectURL(e) : e,
                    i = new Image;
                return new Promise((r => {
                    i.onload = () => {
                        s(i, t, n, a).then((e => {
                            if (!e) throw new Error("Image resize failed!");
                            return URL.createObjectURL(e)
                        })).then(r).finally((() => {
                            e instanceof Blob && URL.revokeObjectURL(o)
                        }))
                    }, i.src = o
                }))
            }
            async function s(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png";
                if (!("createImageBitmap" in window)) return l(e, t, n, void 0, i);
                try {
                    const r = await window.createImageBitmap(e, {
                        resizeWidth: t,
                        resizeHeight: n,
                        resizeQuality: "high"
                    });
                    if (r.height !== n || r.width !== t) throw new Error("Image bitmap resize not supported!");
                    const s = await (0, a.rX)(e.src),
                        l = (0, a.LS)(s) < o ? "#fff" : "#000";
                    return await new Promise((e => {
                        const t = document.createElement("canvas");
                        t.width = r.width, t.height = r.height;
                        const n = t.getContext("2d");
                        n.fillStyle = l, n.fillRect(0, 0, t.width, t.height);
                        const a = t.getContext("bitmaprenderer");
                        a ? a.transferFromImageBitmap(r) : n.drawImage(r, 0, 0), t.toBlob(e, i)
                    }))
                } catch (a) {
                    return l(e, t, n, void 0, i)
                }
            }
            async function l(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png";
                const s = document.createElement("canvas"),
                    l = s.getContext("2d"),
                    c = document.createElement("canvas"),
                    d = c.getContext("2d");
                if (s.width = t, s.height = n, e.width * i > t) {
                    const n = 1 / i;
                    let a = {
                        width: Math.floor(e.width * i),
                        height: Math.floor(e.height * i)
                    };
                    for (c.width = a.width, c.height = a.height, d.drawImage(e, 0, 0, a.width, a.height); a.width * i > t;) a = {
                        width: Math.floor(a.width * i),
                        height: Math.floor(a.height * i)
                    }, d.drawImage(c, 0, 0, a.width * n, a.height * n, 0, 0, a.width, a.height);
                    l.drawImage(c, 0, 0, a.width, a.height, 0, 0, s.width, s.height)
                } else l.drawImage(e, 0, 0, s.width, s.height);
                const m = await (0, a.rX)(e.src),
                    u = (0, a.LS)(m) < o ? "#fff" : "#000";
                return l.fillStyle = u, l.globalCompositeOperation = "destination-over", l.fillRect(0, 0, s.width, s.height), new Promise((e => {
                    s.toBlob(e, r)
                }))
            }
        },
        4457: (e, t, n) => {
            n.d(t, {
                Y: () => o
            });
            var a = n(43503);

            function o(e) {
                if ("none" === e.style.display) return !1;
                const t = e.getBoundingClientRect(),
                    {
                        height: n
                    } = a.A.get();
                return t.top <= n && t.top + t.height >= 0
            }
        },
        47526: (e, t, n) => {
            n.d(t, {
                KE: () => l,
                PP: () => c,
                _u: () => s,
                zS: () => r
            });
            const a = {
                    google: "https://maps.google.com/maps",
                    bing: "https://bing.com/maps/default.aspx",
                    osm: "https://www.openstreetmap.org",
                    apple: "https://maps.apple.com"
                },
                o = new Map(Object.entries({
                    "building/medical": "#43b3f4",
                    "building/gym": "#43b3f4",
                    "education/cafeteria": "#f7943f",
                    "travel/bedandbreakfast": "#9987ff",
                    "travel/hotel": "#9987ff",
                    "travel/hostel": "#9987ff",
                    "travel/resort": "#9987ff",
                    "travel/hotel_bar": "#e56dd6",
                    arts_entertainment: "#e56dd6",
                    building: "#6e81b2",
                    education: "#a57348",
                    event: "#959595",
                    food: "#f7943f",
                    home: "#00aeef",
                    nightlife: "#e56dd6",
                    parks_outdoors: "#6cc039",
                    shops: "#ffb300",
                    travel: "#1c9fff",
                    work: "#ad7854"
                })),
                i = ["#e56cd5", "#f89440", "#9986ff", "#44b3f5", "#6dc139", "#ff5d5a", "#f87aad", "#6e82b3", "#f5ba21"];

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
                const {
                    lat: o,
                    long: i
                } = t, r = a[e];
                switch (e) {
                    case "google":
                        return `${r}/place/${o}+${i}/@${o},${i},${n}z`;
                    case "bing":
                        return `${r}?cp=${o}~${i}&lvl=${n}&sp=point.${o}_${i}`;
                    case "apple":
                        return `${r}?q=${o},${i}`;
                    default:
                        return `${r}/?mlat=${o}&mlon=${i}&zoom=${n}`
                }
            }

            function s(e, t) {
                return 156543.03392 * Math.cos(e * (Math.PI / 180)) / 2 ** t
            }

            function l(e) {
                return e ? `https://ss3.4sqi.net/img/categories_v2/${e}_88.png` : ""
            }

            function c(e) {
                return e ? o.get(e) || o.get(e.split("/")[0]) || i[(t = e, t.split("").reduce(((e, t) => (e << 5) - e + t.charCodeAt(0) | 0), 0) % i.length)] : "#008df2";
                var t
            }
        },
        49642: (e, t, n) => {
            n.d(t, {
                D5: () => i,
                Eg: () => s,
                HW: () => l,
                MV: () => o,
                hm: () => c,
                wp: () => d
            });
            const a = {
                play: void 0,
                pause: void 0,
                seekbackward: void 0,
                seekforward: void 0,
                previoustrack: void 0,
                nexttrack: void 0,
                stop: void 0,
                seekTo: void 0
            };

            function o(e, t) {
                const {
                    mediaSession: n
                } = window.navigator;
                n ? (e && i(e), t && r(t)) : console.warn("MediaSession API not supported in this browser")
            }

            function i(e) {
                const {
                    mediaSession: t
                } = window.navigator;
                t && (t.metadata = e ?? null)
            }

            function r(e) {
                const {
                    mediaSession: t
                } = window.navigator;
                t && Object.entries({
                    ...a,
                    ...e
                }).forEach((e => {
                    let [n, a] = e;
                    try {
                        t.setActionHandler(n, a)
                    } catch (e) {}
                }))
            }

            function s() {
                const {
                    mediaSession: e
                } = window.navigator;
                e && (e.metadata = null, r(a), e.playbackState && (e.playbackState = "none"), e.setPositionState?.())
            }

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "none";
                const {
                    mediaSession: t
                } = window.navigator;
                t && t.playbackState && (t.playbackState = e)
            }

            function c(e) {
                if (!e || void 0 === e.position || void 0 === e.duration) return;
                e.position = Math.min(e.position, e.duration);
                const {
                    mediaSession: t
                } = window.navigator;
                t?.setPositionState?.(e)
            }

            function d(e) {
                let {
                    title: t,
                    artist: n,
                    album: a,
                    artwork: o
                } = e;
                if ("MediaMetadata" in window) return new window.MediaMetadata({
                    title: t,
                    artist: n,
                    album: a,
                    artwork: o
                })
            }
        },
        37830: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(87894);
            const o = new WeakMap;

            function i(e) {
                return function() {
                    const t = o.get(e);
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    if (t && (0, a.k)(t.lastArgs, i)) return t.lastResult;
                    const s = e(...i);
                    return o.set(e, {
                        lastArgs: i,
                        lastResult: s
                    }), s
                }
            }
        },
        58968: (e, t, n) => {
            n.d(t, {
                LS: () => r,
                V2: () => i,
                VI: () => o,
                lw: () => a
            });
            const a = {
                    isCustomPeer: !0,
                    type: "premium",
                    titleKey: "PrivacyPremium",
                    subtitleKey: "PrivacyPremiumText",
                    avatarIcon: "star",
                    isAvatarSquare: !0,
                    withPremiumGradient: !0
                },
                o = {
                    isCustomPeer: !0,
                    type: "toBeDistributed",
                    titleKey: "BoostingToBeDistributed",
                    avatarIcon: "user",
                    withPremiumGradient: !0
                },
                i = [{
                    isCustomPeer: !0,
                    type: "contacts",
                    titleKey: "FilterContacts",
                    avatarIcon: "user",
                    isAvatarSquare: !0,
                    peerColorId: 5
                }, {
                    isCustomPeer: !0,
                    type: "nonContacts",
                    titleKey: "FilterNonContacts",
                    avatarIcon: "non-contacts",
                    isAvatarSquare: !0,
                    peerColorId: 4
                }, {
                    isCustomPeer: !0,
                    type: "groups",
                    titleKey: "FilterGroups",
                    avatarIcon: "group",
                    isAvatarSquare: !0,
                    peerColorId: 3
                }, {
                    isCustomPeer: !0,
                    type: "channels",
                    titleKey: "FilterChannels",
                    avatarIcon: "channel",
                    isAvatarSquare: !0,
                    peerColorId: 1
                }, {
                    isCustomPeer: !0,
                    type: "bots",
                    titleKey: "FilterBots",
                    avatarIcon: "bots",
                    isAvatarSquare: !0,
                    peerColorId: 6
                }],
                r = [{
                    isCustomPeer: !0,
                    type: "excludeMuted",
                    titleKey: "FilterMuted",
                    avatarIcon: "mute",
                    isAvatarSquare: !0,
                    peerColorId: 6
                }, {
                    isCustomPeer: !0,
                    type: "excludeRead",
                    titleKey: "FilterRead",
                    avatarIcon: "readchats",
                    isAvatarSquare: !0,
                    peerColorId: 4
                }, {
                    isCustomPeer: !0,
                    type: "excludeArchived",
                    titleKey: "FilterArchived",
                    avatarIcon: "archive",
                    isAvatarSquare: !0,
                    peerColorId: 5
                }]
        },
        80539: (e, t, n) => {
            n.d(t, {
                Ay: () => l,
                g4: () => c,
                qh: () => r
            });
            var a = n(97335),
                o = n(31481),
                i = n(82393);
            const r = {
                    B: a.C7.Bold,
                    STRONG: a.C7.Bold,
                    I: a.C7.Italic,
                    EM: a.C7.Italic,
                    INS: a.C7.Underline,
                    U: a.C7.Underline,
                    S: a.C7.Strike,
                    STRIKE: a.C7.Strike,
                    DEL: a.C7.Strike,
                    CODE: a.C7.Code,
                    PRE: a.C7.Pre,
                    BLOCKQUOTE: a.C7.Blockquote
                },
                s = 3;

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const l = document.createElement("div");
                l.innerHTML = n ? e : function(e) {
                    let t = e.slice(0);
                    return t = t.replace(/&nbsp;/g, " "), t = t.replace(/<div><br([^>]*)?><\/div>/g, "\n"), t = t.replace(/<br([^>]*)?>/g, "\n"), t = t.replace(/<\/div>(\s*)<div>/g, "\n"), t = t.replace(/<div>/g, "\n"), t = t.replace(/<\/div>/g, ""), t = t.replace(/^`{3}(.*?)[\n\r](.*?[\n\r]?)`{3}/gms, '<pre data-language="$1">$2</pre>'), t = t.replace(/^`{3}[\n\r]?(.*?)[\n\r]?`{3}/gms, "<pre>$1</pre>"), t = t.replace(/[`]{3}([^`]+)[`]{3}/g, "<pre>$1</pre>"), t = t.replace(/(?!<(code|pre)[^<]*|<\/)[`]{1}([^`\n]+)[`]{1}(?![^<]*<\/(code|pre)>)/g, "<code>$2</code>"), i.TL || (t = t.replace(/\[<img[^>]+alt="([^"]+)"[^>]*>]/gm, "[$1]")), t = t.replace(/(?!<(?:code|pre)[^<]*|<\/)\[([^\]\n]+)\]\(customEmoji:(\d+)\)(?![^<]*<\/(?:code|pre)>)/g, '<img alt="$1" data-document-id="$2">'), t = t.replace(/(?!<(code|pre)[^<]*|<\/)[*]{2}([^*\n]+)[*]{2}(?![^<]*<\/(code|pre)>)/g, "<b>$2</b>"), t = t.replace(/(?!<(code|pre)[^<]*|<\/)[_]{2}([^_\n]+)[_]{2}(?![^<]*<\/(code|pre)>)/g, "<i>$2</i>"), t = t.replace(/(?!<(code|pre)[^<]*|<\/)[~]{2}([^~\n]+)[~]{2}(?![^<]*<\/(code|pre)>)/g, "<s>$2</s>"), t = t.replace(/(?!<(code|pre)[^<]*|<\/)[|]{2}([^|\n]+)[|]{2}(?![^<]*<\/(code|pre)>)/g, `<span data-entity-type="${a.C7.Spoiler}">$2</span>`), t
                }(t ? function(e) {
                    return e.replace(new RegExp(`\\[([^\\]]+?)]\\((${o.kNZ}+?)\\)`, "g"), ((e, t, n) => `<a href="${n.includes("://")?n:n.includes("@")?`mailto:${n}`:`https://${n}`}">${t}</a>`))
                }(e) : e), c(l);
                const d = l.innerText.trim().replace(/\u200b+/g, "");
                let m = -l.innerText.indexOf(d[0]),
                    u = 0;
                const A = [];

                function h(e) {
                    if (e.nodeType === Node.COMMENT_NODE) return;
                    const {
                        index: t,
                        entity: n
                    } = function(e, t, n) {
                        const o = function(e) {
                            if (e instanceof HTMLElement && e.dataset.entityType) return e.dataset.entityType;
                            if (r[e.nodeName]) return r[e.nodeName];
                            if ("A" === e.nodeName) {
                                const t = e;
                                return t.dataset.entityType === a.C7.MentionName ? a.C7.MentionName : t.dataset.entityType === a.C7.Url ? a.C7.Url : t.href.startsWith("mailto:") ? a.C7.Email : t.href.startsWith("tel:") ? a.C7.Phone : t.href !== t.textContent ? a.C7.TextUrl : a.C7.Url
                            }
                            return "SPAN" === e.nodeName ? e.dataset.entityType : "IMG" === e.nodeName && e.dataset.documentId ? a.C7.CustomEmoji : void 0
                        }(e);
                        if (!o || !e.textContent) return {
                            index: n,
                            entity: void 0
                        };
                        const i = t.indexOf(e.textContent, n),
                            s = i >= 0 ? i : n,
                            l = t.substring(0, s).length,
                            {
                                length: c
                            } = t.substring(s, s + e.textContent.length);
                        return o === a.C7.TextUrl ? {
                            index: s,
                            entity: {
                                type: o,
                                offset: l,
                                length: c,
                                url: e.href
                            }
                        } : o === a.C7.MentionName ? {
                            index: s,
                            entity: {
                                type: o,
                                offset: l,
                                length: c,
                                userId: e.dataset.userId
                            }
                        } : o === a.C7.Pre ? {
                            index: s,
                            entity: {
                                type: o,
                                offset: l,
                                length: c,
                                language: e.dataset.language
                            }
                        } : o === a.C7.CustomEmoji ? {
                            index: s,
                            entity: {
                                type: o,
                                offset: l,
                                length: c,
                                documentId: e.dataset.documentId
                            }
                        } : {
                            index: s,
                            entity: {
                                type: o,
                                offset: l,
                                length: c
                            }
                        }
                    }(e, d, m);
                    if (n) m = t, A.push(n);
                    else if (e.textContent) {
                        if (0 === t && "" === e.textContent.trim()) return;
                        m += e.textContent.length
                    }
                    e.hasChildNodes() && u <= s && (u += 1, Array.from(e.childNodes).forEach(h))
                }
                return Array.from(l.childNodes).forEach((e => {
                    u = 1, h(e)
                })), {
                    text: d,
                    entities: A.length ? A : void 0
                }
            }

            function c(e) {
                e.querySelectorAll("img").forEach((e => {
                    e.dataset.documentId ? e.textContent = e.alt || "" : e.replaceWith(e.alt || "")
                }))
            }
        },
        20897: (e, t, n) => {
            n.d(t, {
                h: () => d
            });
            var a = n(97335),
                o = n(4875);
            const i = 262144,
                r = 5242879,
                s = new Map,
                l = new Map,
                c = new Map;

            function d(e) {
                try {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
                    return async function*() {
                        const i = e.match(/fileSize=(\d+)/);
                        let d;
                        for (d = i ? i && Number(i[1]) : l.get(e);;) {
                            if (d && t >= d) return;
                            let i = t + n - 1;
                            d && i > d && (i = d - 1);
                            const m = `${e}:${t}-${i}`;
                            let u = s.get(m);
                            if (!u) {
                                let n = c.get(m);
                                n || (n = (0, o.px)("downloadMedia", {
                                    mediaFormat: a.qZ.Progressive,
                                    url: e,
                                    start: t,
                                    end: i
                                }), c.set(m, n));
                                const A = await n.finally((() => {
                                    c.delete(m)
                                }));
                                if (!A?.arrayBuffer) return;
                                A.fullSize && !d && (d = A.fullSize, l.set(e, A.fullSize)), u = A.arrayBuffer, i <= r && s.set(m, A.arrayBuffer)
                            }
                            yield u, t = i + 1
                        }
                    }()
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        39074: (e, t, n) => {
            n.d(t, {
                DY: () => l,
                JC: () => r,
                LV: () => i,
                oR: () => o,
                vZ: () => s
            });
            const a = document.createElement("div");

            function o(e) {
                const t = window.getSelection();
                if (t?.getRangeAt && t.rangeCount) {
                    const n = t.getRangeAt(0);
                    n.deleteContents();
                    const a = n.createContextualFragment(e),
                        o = a.lastChild;
                    n.insertNode(a), o ? (n.setStartAfter(o), n.setEndAfter(o)) : n.collapse(!1), t.removeAllRanges(), t.addRange(n)
                }
            }

            function i(e, t) {
                if (!e) return "";
                const n = window.getSelection();
                if (!n || !n.rangeCount) return e.innerHTML;
                const o = n.getRangeAt(0).cloneRange();
                return o.intersectsNode(e) ? t || e.contains(o.commonAncestorContainer) ? (o.collapse(!0), o.setStart(e, 0), a.innerHTML = "", a.appendChild(o.cloneContents()), a.innerHTML) : "" : e.innerHTML
            }

            function r(e) {
                let t = 0;
                const n = window.getSelection();
                if (!n || 0 === n.rangeCount) return t;
                const a = n.getRangeAt(0),
                    o = a.cloneRange();
                return o.selectNodeContents(e), o.setEnd(a.endContainer, a.endOffset), t = o.toString().length, t
            }

            function s(e, t) {
                for (const n of e.childNodes)
                    if (n.nodeType === Node.TEXT_NODE) {
                        if (n.length >= t) {
                            const e = document.createRange(),
                                a = window.getSelection();
                            return e.setStart(n, t), e.collapse(!0), a.removeAllRanges(), a.addRange(e), -1
                        }
                        t -= "length" in n ? n.length : 0
                    } else if (-1 === (t = s(n, t))) return -1;
                return t
            }

            function l() {
                const e = window.getSelection();
                e?.removeAllRanges()
            }
        },
        52844: (e, t, n) => {
            let a;

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "*",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                a || (a = document.createElement("input"), a.setAttribute("type", "file")), a.setAttribute("accept", e), n ? a.removeAttribute("multiple") : a.setAttribute("multiple", "multiple"), a.onchange = null, a.value = "", a.onchange = t, a.click()
            }
            n.d(t, {
                p: () => o
            })
        },
        70497: (e, t, n) => {
            function a(e) {
                const t = 8 * e.length,
                    n = Math.floor(t / 5);
                if (!n) return [];
                const a = Array(n),
                    o = e;
                for (let e = 0, t = n - 1; e !== t; ++e) {
                    const t = Math.floor(5 * e / 8),
                        n = Math.floor(5 * e % 8),
                        i = o[t] + (o[t + 1] << 8);
                    a[e] = i >> n & 31
                }
                const i = Math.floor(5 * (n - 1) / 8),
                    r = Math.floor(5 * (n - 1) % 8),
                    s = o[i] + (o[i + 1] << 8);
                return a[n - 1] = s >> r & 31, a
            }

            function o(e, t) {
                let n = 0;
                const a = new Array(t),
                    o = e.length / t,
                    i = e[0],
                    r = e[e.length - 1];
                for (let s = 0; s < t; s++) {
                    const t = Math.floor(s * o),
                        l = ((e[t - 1] ?? i) + (e[t] ?? i) + (e[t + 1] ?? r)) / 3;
                    a[s] = l, n < l && (n = l)
                }
                return {
                    data: a,
                    peak: n
                }
            }
            n.d(t, {
                e: () => a,
                p: () => o
            })
        },
        69988: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            const a = {
                root: "gXO57D98",
                chosen: "VXSJn0Sm",
                "animated-emoji": "lFjoRm_p",
                animatedEmoji: "lFjoRm_p",
                tag: "Dr889Kzc",
                tail: "cUfY1b26",
                "is-safari": "rxxUijuG",
                isSafari: "rxxUijuG",
                "tail-fill": "y591o4fN",
                tailFill: "y591o4fN",
                "tag-text": "ly7cruxF",
                tagText: "ly7cruxF",
                counter: "P2FqNJAi",
                disabled: "NRtGofbf"
            }
        },
        2429: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            const a = {
                root: "CdTfL4f7",
                fadeIn: "MyeHARy0",
                closing: "EZbKn_M3",
                peer: "kW0xpExG",
                name: "BDZrSTO_",
                name_hasUnreadStory: "OoUm5AUZ",
                nameHasUnreadStory: "OoUm5AUZ",
                hidden: "lnVtxMZI",
                contextMenu: "N1sagA0s"
            }
        },
        17169: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            const a = {
                name: "BDZrSTO_",
                root: "QOz6fQFU",
                avatar: "dXSy0i2c",
                avatarHidden: "n0vJEdNW",
                ghost: "E1IeDpeb",
                ghostAnimateName: "HMp3KTKQ",
                ghostRevealName: "unYkDic1",
                ghostLast: "dZJGfaXC"
            }
        },
        89755: (e, t, n) => {
            e.exports = n.p + "encoderWorker.min.40a69ba9ec4d2c4cf3a7.js"
        },
        72078: (e, t, n) => {
            e.exports = n.p + "GiftBlueRound.90e369f0f350cdfb20d4.svg"
        },
        68153: (e, t, n) => {
            e.exports = n.p + "GiftGreenRound.f66f0acd5d3dda1c7baf.svg"
        },
        65741: (e, t, n) => {
            e.exports = n.p + "GiftRedRound.a86b78b0b99e07f69a70.svg"
        }
    }
]);