"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [2859], {
        42347: (t, e, a) => {
            a.d(e, {
                A$: () => B,
                Jm: () => H,
                ad: () => J
            });
            var s = a(97335),
                d = a(89925),
                i = a(31481),
                o = a(85982),
                n = a(55148),
                r = a(46275),
                c = a(14487),
                l = a(49763),
                h = a(87894),
                u = a(50140),
                I = a(47985),
                p = a(37836),
                g = a(59852),
                m = a(4875),
                f = a(59589),
                b = a(13439),
                V = a(46205),
                C = a(80840),
                y = a(32989),
                w = a(29807),
                v = a(71331),
                F = a(64520);
            const A = {
                    id: i.zv8,
                    accessHash: "0",
                    type: "userTypeRegular",
                    isMin: !0,
                    phoneNumber: ""
                },
                S = new Set(["FILTERS_TOO_MUCH", "CHATLISTS_TOO_MUCH", "INVITES_TOO_MUCH"]),
                U = (0, p.nF)((t => t()), 3e3, !0),
                T = (0, p.sg)((t => t()), 500, !1, !0);

            function M(t, e) {
                (0, m.px)("abortChatRequests", {
                    chatId: t,
                    threadId: e
                })
            }

            function x(t, e, a) {
                for (var s = arguments.length, d = new Array(s > 3 ? s - 3 : 0), i = 3; i < s; i++) d[i - 3] = arguments[i];
                let [o = (0, c.g0)()] = d;
                const n = (0, w.Xf0)(t, o),
                    r = n?.chatId,
                    l = n?.threadId;
                if (r && (r !== e || l !== a)) {
                    const [a, s] = Object.values(t.byTabId).reduce(((e, a) => {
                        let [s, d] = e, {
                            id: i
                        } = a;
                        if (i === o || s && d) return [s, d];
                        const n = (0, w.Xf0)(t, i),
                            c = n?.chatId === r;
                        return [s || c, d || c && n?.threadId === l]
                    }), [r === e, !1]);
                    (!a || !s) && M(r, a ? l : void 0)
                }
            }
            async function P(t, e, a) {
                let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = arguments.length > 4 ? arguments[4] : void 0,
                    n = (0, b.mS)(),
                    r = (0, w.xzS)(n)?.id;
                const c = "saved" === t ? await (0, m.px)("fetchSavedChats", {
                    limit: i.uCr,
                    offsetDate: a,
                    withPinned: d
                }) : await (0, m.px)("fetchChats", {
                    limit: i.uCr,
                    offsetDate: a,
                    archived: "archived" === t,
                    withPinned: d,
                    lastLocalServiceMessageId: r
                });
                if (!c) return;
                const {
                    chatIds: u
                } = c;
                if (u.length > 0 && u[0] === e && u.shift(), n = (0, b.mS)(), r = (0, w.xzS)(n)?.id, d)
                    if ("active" === t) {
                        if (!u.includes(i.zv8)) {
                            const t = await (0, m.px)("fetchChat", {
                                type: "user",
                                user: A
                            });
                            n = (0, b.mS)();
                            const e = t && (0, w.hds)(n, t.chatId);
                            e && (u.unshift(e.id), c.chats.unshift(e), r && (c.lastMessageByChatId[e.id] = r))
                        }
                        const e = Object.values(n.byTabId),
                            a = (0, l.YA)(i._E9)?.slice(0, i.Q$7).map((t => (0, w.hds)(n, t))).filter(Boolean),
                            s = e.flatMap((t => {
                                let {
                                    id: e
                                } = t;
                                const a = (0, w.meB)(n, e);
                                return a ? [a] : []
                            })).concat(a || []),
                            d = e.flatMap((t => {
                                let {
                                    id: e
                                } = t;
                                return (0, w.NHc)(n, e) || []
                            }));
                        n.currentUserId && n.users.byId[n.currentUserId] && d.push(n.users.byId[n.currentUserId]), n = (0, V.de)(n, (0, h.dU)(d.concat(c.users), "id")), n = (0, V.wW)(n, c.userStatusesById), n = (0, V.W9)(n, (0, h.dU)(s.concat(c.chats), "id")), n = (0, V.hO)(n, t, u)
                    } else n = (0, V.g1)(n, (0, h.dU)(c.users, "id")), n = (0, V.d2)(n, c.userStatusesById), n = (0, V.h7)(n, (0, h.dU)(c.chats, "id")), n = (0, V.hO)(n, t, u);
                else {
                    const e = (0, h.dU)(c.chats, "id");
                    n = (0, V.g1)(n, (0, h.dU)(c.users, "id")), n = (0, V.d2)(n, c.userStatusesById), n = (0, V.h7)(n, e), n = (0, V.wx)(n, t, u)
                }
                n = (0, V.qw)(n, t, c), n = (0, V.Kc)(n, c.messages), n = (0, V.XU)(n, c.lastMessageByChatId, t), (o ? c.chatIds : Object.keys(c.draftsById)).forEach((t => {
                    const e = c.draftsById[t],
                        a = (0, w.$jd)(n, t, s.l3);
                    (e || a) && ((0, w.GA4)(n, t, s.l3)?.isLocal || (n = (0, V.ew)(n, t, s.l3, "draft", e)))
                })), 0 !== u.length && u.length !== c.totalChatCount || n.chats.isFullyLoaded[t] || (n = {
                    ...n,
                    chats: {
                        ...n.chats,
                        isFullyLoaded: {
                            ...n.chats.isFullyLoaded,
                            [t]: !0
                        }
                    }
                }), (0, b.UF)(n)
            }
            async function J(t, e, a) {
                for (var s = arguments.length, d = new Array(s > 3 ? s - 3 : 0), i = 3; i < s; i++) d[i - 3] = arguments[i];
                let [o = (0, c.g0)()] = d;
                const n = await (0, m.px)("fetchFullChat", a);
                if (!n) return;
                const {
                    chats: r,
                    users: l,
                    userStatusesById: u,
                    fullInfo: I,
                    groupCall: p,
                    membersCount: g,
                    isForumAsMessages: f
                } = n;
                if (t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(l, "id")), t = (0, V.h7)(t, (0, h.dU)(r, "id")), u && (t = (0, V.d2)(t, u)), p) {
                    const e = (0, v.Ip)(t, p.id);
                    t = (0, C.h9)(t, p.id, (0, h.cJ)(p, ["connectionState", "isLoaded"]), void 0, e ? void 0 : p.participantsCount)
                }
                void 0 !== g && (t = (0, V.wi)(t, a.id, {
                    membersCount: g
                })), a.isForum && (t = (0, V.wi)(t, a.id, {
                    isForumAsMessages: f
                })), t = (0, V.iW)(t, a.id, I), (0, b.UF)(t);
                const y = I.stickerSet,
                    F = y && (0, w.ycM)(t, y);
                y && !F && e.loadStickers({
                    stickerSetInfo: {
                        id: y.id,
                        accessHash: y.accessHash
                    },
                    tabId: o
                });
                const A = I.emojiSet,
                    S = A && (0, w.ycM)(t, A);
                return A && !S && e.loadStickers({
                    stickerSetInfo: {
                        id: A.id,
                        accessHash: A.accessHash
                    },
                    tabId: o
                }), n
            }
            async function B(t, e) {
                t = (0, b.mS)();
                const a = (0, w.qn$)(t, e);
                if (a && !a.isMin) return a;
                const {
                    chat: s,
                    user: d
                } = await (0, m.px)("getChatByUsername", e) || {};
                return s ? (t = (0, b.mS)(), t = (0, V.wi)(t, s.id, s), d && (t = (0, V.TK)(t, d.id, d)), (0, b.UF)(t), s) : void 0
            }
            async function E(t, e, a) {
                for (var s = arguments.length, d = new Array(s > 3 ? s - 3 : 0), i = 3; i < s; i++) d[i - 3] = arguments[i];
                let [o = (0, c.g0)()] = d;
                const n = await B(t, a);
                if (!n) return;
                t = (0, b.mS)();
                const r = (0, w.mBe)(t, n.id);
                if (!r) return;
                if (!(0, f.tv)(r)) return;
                const l = await (0, m.px)("loadAttachBot", {
                    bot: r
                });
                if (t = (0, b.mS)(), l) return t = (0, V.g1)(t, (0, h.dU)(l.users, "id")), (0, b.UF)(t), l.bot;
                e.showNotification({
                    message: I.yE("WebApp.AddToAttachmentUnavailableError"),
                    tabId: o
                })
            }
            async function R(t, e, a, s, d) {
                for (var i = arguments.length, o = new Array(i > 5 ? i - 5 : 0), n = 5; n < i; n++) o[n - 5] = arguments[n];
                let [r = (0, c.g0)()] = o;
                t = (0, b.mS)();
                const l = await E(t, e, s, r);
                l && e.callAttachBot({
                    bot: l,
                    chatId: a,
                    ..."string" == typeof d && {
                        startParam: d
                    },
                    tabId: r
                })
            }
            async function H(t, e, a) {
                for (var s = arguments.length, d = new Array(s > 3 ? s - 3 : 0), i = 3; i < s; i++) d[i - 3] = arguments[i];
                let [o = (0, c.g0)()] = d;
                const n = (0, w.hds)(t, a);
                if (!n || !(0, f.yn)(n)) return n;
                const r = await async function(t, e, a) {
                    for (var s = arguments.length, d = new Array(s > 3 ? s - 3 : 0), i = 3; i < s; i++) d[i - 3] = arguments[i];
                    let [o = (0, c.g0)()] = d;
                    try {
                        return await (0, m.px)("migrateChat", a)
                    } catch (t) {
                        return void("CHANNELS_TOO_MUCH" === t.message ? e.openLimitReachedModal({
                            limit: "channels",
                            tabId: o
                        }) : e.showDialog({
                            data: {
                                ...t,
                                hasErrorKey: !0
                            },
                            tabId: o
                        }))
                    }
                }(t, e, n, o);
                return r ? (e.loadFullChat({
                    chatId: r.id,
                    tabId: o
                }), e.openChat({
                    id: r.id,
                    tabId: o
                }), r) : void 0
            }(0, b.aJ)("preloadTopChatMessages", (async (t, e) => {
                const a = new Set;
                for (let d = 0; d < i.irO; d++) {
                    await (0, p.v7)(100), t = (0, b.mS)();
                    const d = Object.values(t.byTabId).map((e => {
                            let {
                                id: a
                            } = e;
                            return (0, w.Xf0)(t, a)?.chatId
                        })).filter(Boolean),
                        o = (0, l.YA)(i.DSF),
                        n = o?.find((t => !d.includes(t) && !a.has(t)));
                    if (!n) return;
                    a.add(n), e.loadViewportMessages({
                        chatId: n,
                        threadId: s.l3,
                        tabId: (0, c.g0)()
                    })
                }
            })), (0, b.aJ)("openChat", ((t, e, a) => {
                const {
                    id: d,
                    type: o,
                    noForumTopicPanel: n,
                    shouldReplaceHistory: r,
                    shouldReplaceLast: l,
                    tabId: h = (0, c.g0)()
                } = a;
                if (e.processOpenChatOrThread({
                        chatId: d,
                        type: o,
                        threadId: s.l3,
                        noForumTopicPanel: n,
                        shouldReplaceHistory: r,
                        shouldReplaceLast: l,
                        tabId: h
                    }), x(t, d, s.l3, h), !d || d === i.Xab) return;
                const u = (0, w.hds)(t, d);
                u?.hasUnreadMark && e.toggleChatUnread({
                    id: d
                });
                const I = !(0, w.ZZX)(t, d);
                if (u) I && !u.isMin && e.requestChatUpdate({
                    chatId: d
                });
                else if ((0, w.nZ4)(t, d))(0, m.px)("fetchChat", {
                    type: "self"
                });
                else {
                    const e = (0, w.mBe)(t, d);
                    e && (0, m.px)("fetchChat", {
                        type: "user",
                        user: e
                    })
                }
                e.closeStoryViewer({
                    tabId: h
                }), e.closeStarsBalanceModal({
                    tabId: h
                })
            })), (0, b.aJ)("openSavedDialog", ((t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, c.g0)(),
                    ...i
                } = a;
                e.openThread({
                    chatId: t.currentUserId,
                    threadId: s,
                    tabId: d,
                    ...i
                })
            })), (0, b.aJ)("openThread", (async (t, e, a) => {
                const {
                    type: d,
                    isComments: i,
                    noForumTopicPanel: o,
                    shouldReplaceHistory: n,
                    shouldReplaceLast: r,
                    focusMessageId: l,
                    tabId: u = (0, c.g0)()
                } = a;
                let p, g, C, {
                    chatId: v
                } = a;
                if (i) {
                    const {
                        originChannelId: t,
                        originMessageId: e
                    } = a;
                    g = t, C = e
                } else {
                    g = a.chatId, p = a.threadId, C = p;
                    const c = (0, w.hds)(t, g);
                    if (p === s.l3) return void e.openChat({
                        id: v,
                        type: d,
                        noForumTopicPanel: o,
                        shouldReplaceHistory: n,
                        shouldReplaceLast: r,
                        tabId: u
                    });
                    if (c?.isForum || v && (0, f.cG)(v, p, t.currentUserId)) return void e.processOpenChatOrThread({
                        chatId: v,
                        type: d,
                        threadId: p,
                        isComments: i,
                        noForumTopicPanel: o,
                        shouldReplaceHistory: n,
                        shouldReplaceLast: r,
                        tabId: u
                    })
                }
                const F = (0, w.hds)(t, g),
                    A = (0, w.Vw0)(t, g, C),
                    S = (0, w.$jd)(t, g, C);
                if (!F) return;
                if (x(t, g, C, u), v && A?.threadId && (i || S?.listedIds?.length && S.listedIds.includes(Number(A.threadId)))) return t = (0, y.w)(t, {
                    loadingThread: void 0
                }, u), (0, b.UF)(t), void e.processOpenChatOrThread({
                    chatId: v,
                    type: d,
                    threadId: A.threadId,
                    isComments: i,
                    noForumTopicPanel: o,
                    shouldReplaceHistory: n,
                    shouldReplaceLast: r,
                    tabId: u
                });
                let {
                    loadingThread: U
                } = (0, w.nTw)(t, u);
                U && M(U.loadingChatId, U.loadingMessageId), t = (0, y.w)(t, {
                    loadingThread: {
                        loadingChatId: g,
                        loadingMessageId: Number(C)
                    }
                }, u), (0, b.UF)(t);
                const T = () => {
                    const t = (0, b.mS)();
                    i || (0, w.Xf0)(t, u)?.chatId !== g || (0, w.Xf0)(t, u)?.threadId !== C || e.openPreviousChat({
                        tabId: u
                    })
                };
                i || e.processOpenChatOrThread({
                    chatId: v,
                    type: d,
                    threadId: p,
                    tabId: u,
                    isComments: i,
                    noForumTopicPanel: o,
                    shouldReplaceHistory: n,
                    shouldReplaceLast: r
                });
                const P = await (0, m.px)("fetchDiscussionMessage", {
                    chat: (0, w.hds)(t, g),
                    messageId: Number(C)
                });
                if (t = (0, b.mS)(), U = (0, w.nTw)(t, u).loadingThread, U?.loadingChatId === g && U?.loadingMessageId === C) {
                    if (!P) return t = (0, y.w)(t, {
                        loadingThread: void 0
                    }, u), (0, b.UF)(t), e.showNotification({
                        message: I.yE(i ? "ChannelPostDeleted" : "lng_message_not_found"),
                        tabId: u
                    }), void T();
                    p ?? (p = P.threadId), v ?? (v = P.chatId), v ? (t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(P.users, "id")), t = (0, V.Nl)(t, (0, h.dU)(P.chats, "id")), t = (0, V.Kc)(t, P.messages), i && (t = (0, V.eA)(t, g, C, {
                        threadId: p
                    }), t = (0, V.eA)(t, v, p, {
                        isCommentsInfo: !1,
                        threadId: p,
                        chatId: v,
                        fromChannelId: g,
                        fromMessageId: C,
                        ...A && (0, h.Up)(A, ["messagesCount", "lastMessageId", "lastReadInboxMessageId", "recentReplierIds"])
                    })), t = (0, V.e4)(t, v, p, {
                        firstMessageId: P.firstMessageId
                    }), (0, b.UF)(t), l && e.focusMessage({
                        chatId: v,
                        threadId: p,
                        messageId: l,
                        tabId: u
                    }), e.loadViewportMessages({
                        chatId: v,
                        threadId: p,
                        tabId: u,
                        onError: () => {
                            t = (0, b.mS)(), t = (0, y.w)(t, {
                                loadingThread: void 0
                            }, u), (0, b.UF)(t), e.showNotification({
                                message: I.yE("Group.ErrorAccessDenied"),
                                tabId: u
                            })
                        },
                        onLoaded: () => {
                            t = (0, b.mS)(), U = (0, w.nTw)(t, u).loadingThread, U?.loadingChatId === g && U?.loadingMessageId === C && (t = (0, y.w)(t, {
                                loadingThread: void 0
                            }, u), (0, b.UF)(t), e.processOpenChatOrThread({
                                chatId: v,
                                type: d,
                                threadId: p,
                                tabId: u,
                                isComments: i,
                                noForumTopicPanel: o,
                                shouldReplaceHistory: n,
                                shouldReplaceLast: r
                            }))
                        }
                    })) : T()
                } else T()
            })), (0, b.aJ)("openLinkedChat", (async (t, e, a) => {
                const {
                    id: s,
                    tabId: d = (0, c.g0)()
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const o = await (0, m.px)("fetchFullChat", i);
                o?.fullInfo?.linkedChatId && e.openChat({
                    id: o.fullInfo.linkedChatId,
                    tabId: d
                })
            })), (0, b.aJ)("openSupportChat", (async (t, e, a) => {
                const {
                    tabId: s = (0, c.g0)()
                } = a || {}, d = (0, w.ke9)(t);
                if (d) return void e.openChat({
                    id: d.id,
                    shouldReplaceHistory: !0,
                    tabId: s
                });
                e.openChat({
                    id: i.Xab,
                    shouldReplaceHistory: !0,
                    tabId: s
                });
                const o = await (0, m.px)("fetchChat", {
                    type: "support"
                });
                o && e.openChat({
                    id: o.chatId,
                    shouldReplaceHistory: !0,
                    tabId: s
                })
            })), (0, b.aJ)("loadAllChats", (async (t, e, a) => {
                const s = a.listType,
                    {
                        onReplace: d
                    } = a;
                let {
                    shouldReplace: o
                } = a, n = 0;
                const r = e => (0, w.yHC)(t, e.id, "saved" === s ? "saved" : "all")?.date || e.creationDate;
                for (; o || !t.chats.isFullyLoaded[s];) {
                    if (n++ >= 100) return void(i.Oig && console.error("`actions/loadAllChats`: Infinite loop detected"));
                    if ("connectionStateReady" !== (t = (0, b.mS)()).connectionState || "authorizationStateReady" !== t.authState) return;
                    const e = !o && t.chats.listIds[s],
                        a = e ? e.map((e => t.chats.byId[e])).filter((e => Boolean(e && r(e)) && e.id !== i.zv8 && !(0, w.D3D)(t, e.id))).sort(((t, e) => r(t) - r(e)))[0] : void 0;
                    await P(s, a?.id, a ? r(a) : void 0, o, !0), o && (d?.(), o = !1), t = (0, b.mS)()
                }
            })), (0, b.aJ)("loadFullChat", ((t, e, a) => {
                const {
                    chatId: s,
                    force: d,
                    tabId: i = (0, c.g0)(),
                    withPhotos: o
                } = a, n = (0, w.hds)(t, s);
                if (!n) return;
                const r = async () => {
                    await J(t, e, n, i), o && e.loadMoreProfilePhotos({
                        peerId: s,
                        shouldInvalidateCache: !0
                    })
                };
                d ? r() : T(r)
            })), (0, b.aJ)("loadTopChats", (() => {
                U((() => {
                    P("active"), P("archived")
                }))
            })), (0, b.aJ)("requestChatUpdate", ((t, e, a) => {
                const {
                    chatId: s
                } = a, d = (0, w.hds)(t, s);
                d && (0, m.px)("requestChatUpdate", {
                    chat: d,
                    ...s === i.zv8 && {
                        lastLocalMessage: (0, w.xzS)(t)?.message
                    }
                })
            })), (0, b.aJ)("requestSavedDialogUpdate", (async (t, e, a) => {
                const {
                    chatId: s
                } = a, d = (0, w.hds)(t, s);
                if (!d) return;
                const i = await (0, m.px)("fetchMessages", {
                    chat: d,
                    isSavedDialog: !0,
                    limit: 1
                });
                i && (t = (0, b.mS)(), t = (0, V.Kc)(t, i.messages), t = (0, V.g1)(t, (0, h.dU)(i.users, "id")), t = (0, V.Nl)(t, (0, h.dU)(i.chats, "id")), i.messages.length ? (t = (0, V.yK)(t, s, i.messages[0].id, "saved"), t = (0, V.wx)(t, "saved", [s]), (0, b.UF)(t)) : (t = (0, V.SJ)(t, s, "saved"), (0, b.UF)(t), Object.values(t.byTabId).forEach((a => {
                    let {
                        id: d
                    } = a;
                    const i = (0, w.Xf0)(t, d);
                    if (!i) return;
                    const {
                        chatId: o,
                        threadId: n
                    } = i;
                    (0, w.nZ4)(t, o) && n === s && e.openChat({
                        id: void 0,
                        tabId: d
                    })
                }))))
            })), (0, b.aJ)("updateChatMutedState", ((t, e, a) => {
                const {
                    chatId: s,
                    muteUntil: d = 0
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const o = a.isMuted ?? d > 0;
                t = (0, V.wi)(t, s, {
                    isMuted: o
                }), (0, b.UF)(t), (0, m.px)("updateChatMutedState", {
                    chat: i,
                    isMuted: o,
                    muteUntil: d
                })
            })), (0, b.aJ)("updateTopicMutedState", ((t, e, a) => {
                const {
                    chatId: s,
                    topicId: d,
                    muteUntil: i = 0
                } = a, o = (0, w.hds)(t, s);
                if (!o) return;
                const n = a.isMuted ?? i > 0;
                t = (0, V.Tw)(t, s, d, {
                    isMuted: n
                }), (0, b.UF)(t), (0, m.px)("updateTopicMutedState", {
                    chat: o,
                    topicId: d,
                    isMuted: n,
                    muteUntil: i
                })
            })), (0, b.aJ)("createChannel", (async (t, e, a) => {
                const {
                    title: s,
                    about: i,
                    photo: o,
                    memberIds: n,
                    tabId: r = (0, c.g0)()
                } = a, l = n.map((e => (0, w.mBe)(t, e))).filter(Boolean);
                let h, u;
                t = (0, y.w)(t, {
                    chatCreation: {
                        progress: d.n7.InProgress
                    }
                }, r), (0, b.UF)(t);
                try {
                    const t = await (0, m.px)("createChannel", {
                        title: s,
                        about: i,
                        users: l
                    });
                    h = t?.channel, u = t?.missingUsers
                } catch (a) {
                    t = (0, b.mS)(), t = (0, y.w)(t, {
                        chatCreation: {
                            progress: d.n7.Error
                        }
                    }, r), (0, b.UF)(t), "CHANNELS_TOO_MUCH" === a.message ? e.openLimitReachedModal({
                        limit: "channels",
                        tabId: r
                    }) : e.showDialog({
                        data: {
                            ...a,
                            hasErrorKey: !0
                        },
                        tabId: r
                    })
                }
                if (!h) return;
                const {
                    id: I,
                    accessHash: p
                } = h;
                t = (0, b.mS)(), t = (0, V.wi)(t, I, h), t = (0, y.w)(t, {
                    chatCreation: {
                        ...(0, w.nTw)(t, r).chatCreation,
                        progress: h ? d.n7.Complete : d.n7.Error
                    }
                }, r), (0, b.UF)(t), e.openChat({
                    id: I,
                    shouldReplaceHistory: !0,
                    tabId: r
                }), u && (t = (0, b.mS)(), t = (0, V.hQ)(t, I, u, r), (0, b.UF)(t)), I && p && o && await (0, m.px)("editChatPhoto", {
                    chatId: I,
                    accessHash: p,
                    photo: o
                })
            })), (0, b.aJ)("joinChannel", (async (t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, c.g0)()
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const {
                    id: o,
                    accessHash: n
                } = i;
                if (o && n) try {
                    await (0, m.px)("joinChannel", {
                        channelId: o,
                        accessHash: n
                    })
                } catch (t) {
                    "CHANNELS_TOO_MUCH" === t.message ? e.openLimitReachedModal({
                        limit: "channels",
                        tabId: d
                    }) : e.showDialog({
                        data: {
                            ...t,
                            hasErrorKey: !0
                        },
                        tabId: d
                    })
                }
            })), (0, b.aJ)("deleteChatUser", ((t, e, a) => {
                const {
                    chatId: s,
                    userId: d,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.hds)(t, s), n = (0, w.mBe)(t, d);
                o && n && (t = (0, V.CX)(t, s), (0, b.UF)(t), (0, w.Xf0)(t, i)?.chatId === s && e.openChat({
                    id: void 0,
                    tabId: i
                }), (0, m.px)("deleteChatUser", {
                    chat: o,
                    user: n
                }))
            })), (0, b.aJ)("deleteChat", ((t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, c.g0)()
                } = a, i = (0, w.hds)(t, s);
                i && (t = (0, V.CX)(t, s), (0, b.UF)(t), (0, w.Xf0)(t, d)?.chatId === s && e.openChat({
                    id: void 0,
                    tabId: d
                }), (0, m.px)("deleteChat", {
                    chatId: i.id
                }))
            })), (0, b.aJ)("leaveChannel", (async (t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, c.g0)()
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                t = (0, V.CX)(t, s), (0, b.UF)(t), (0, w.Xf0)(t, d)?.chatId === s && e.openChat({
                    id: void 0,
                    tabId: d
                });
                const {
                    id: o,
                    accessHash: n
                } = i;
                if (o && n) {
                    await (0, m.px)("leaveChannel", {
                        channelId: o,
                        accessHash: n
                    }), t = (0, b.mS)();
                    const e = (0, w.zeq)(t, s),
                        a = Object.keys(e).map(Number).filter(u.iL);
                    t = (0, V.AH)(t, s, a), (0, b.UF)(t)
                }
            })), (0, b.aJ)("deleteChannel", ((t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, c.g0)()
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                t = (0, V.CX)(t, s), (0, b.UF)(t), (0, w.Xf0)(t, d)?.chatId === s && e.openChat({
                    id: void 0,
                    tabId: d
                });
                const {
                    id: o,
                    accessHash: n
                } = i;
                o && n && (0, m.px)("deleteChannel", {
                    channelId: o,
                    accessHash: n
                })
            })), (0, b.aJ)("createGroupChat", (async (t, e, a) => {
                const {
                    title: s,
                    memberIds: i,
                    photo: o,
                    tabId: n = (0, c.g0)()
                } = a, r = i.map((e => (0, w.mBe)(t, e))).filter(Boolean);
                t = (0, y.w)(t, {
                    chatCreation: {
                        progress: d.n7.InProgress
                    }
                }, n), (0, b.UF)(t);
                try {
                    const {
                        chat: a,
                        missingUsers: i
                    } = await (0, m.px)("createGroupChat", {
                        title: s,
                        users: r
                    }) ?? {};
                    if (!a) return;
                    const {
                        id: c
                    } = a;
                    t = (0, b.mS)(), t = (0, V.wi)(t, c, a), t = (0, y.w)(t, {
                        chatCreation: {
                            ...(0, w.nTw)(t, n).chatCreation,
                            progress: a ? d.n7.Complete : d.n7.Error
                        }
                    }, n), (0, b.UF)(t), e.openChat({
                        id: c,
                        shouldReplaceHistory: !0,
                        tabId: n
                    }), i && (t = (0, b.mS)(), t = (0, V.hQ)(t, c, i, n), (0, b.UF)(t)), c && o && await (0, m.px)("editChatPhoto", {
                        chatId: c,
                        photo: o
                    })
                } catch (e) {
                    "USERS_TOO_FEW" === e.message && (t = (0, b.mS)(), t = (0, y.w)(t, {
                        chatCreation: {
                            ...(0, w.nTw)(t, n).chatCreation,
                            progress: d.n7.Error,
                            error: "CreateGroupError"
                        }
                    }, n), (0, b.UF)(t))
                }
            })), (0, b.aJ)("toggleChatPinned", ((t, e, a) => {
                const {
                    id: s,
                    folderId: d,
                    tabId: o = (0, c.g0)()
                } = a, n = (0, w.hds)(t, s);
                if (!n) return;
                const r = (0, F.d)(t, "dialogFolderPinned");
                if (d) {
                    const e = (0, w.$aQ)(t, d);
                    if (e) {
                        const a = !(0, w.D3D)(t, s, d),
                            {
                                pinnedChatIds: i,
                                includedChatIds: o
                            } = e,
                            n = a ? [s, ...i || []] : (i || []).filter((t => t !== s)),
                            r = [s, ...o];
                        (0, m.px)("editChatFolder", {
                            id: d,
                            folderUpdate: {
                                ...e,
                                pinnedChatIds: n,
                                includedChatIds: r
                            }
                        })
                    }
                } else {
                    const a = (0, w.P4G)(t, s),
                        d = (0, w.D3D)(t, s, "archived" === a ? i._E9 : void 0),
                        c = t.chats.orderedPinnedIds["archived" === a ? "archived" : "active"];
                    if ((c?.length || 0) >= r && !d) return void e.openLimitReachedModal({
                        limit: "dialogFolderPinned",
                        tabId: o
                    });
                    (0, m.px)("toggleChatPinned", {
                        chat: n,
                        shouldBePinned: !d
                    })
                }
            })), (0, b.aJ)("toggleChatArchived", ((t, e, a) => {
                const {
                    id: s
                } = a, d = (0, w.hds)(t, s);
                d && (0, m.px)("toggleChatArchived", {
                    chat: d,
                    folderId: (0, f.TJ)(d) ? 0 : i._E9
                })
            })), (0, b.aJ)("toggleSavedDialogPinned", ((t, e, a) => {
                const {
                    id: s,
                    tabId: d = (0, c.g0)()
                } = a, o = (0, w.hds)(t, s);
                if (!o) return;
                const n = (0, F.d)(t, "savedDialogsPinned"),
                    r = (0, w.D3D)(t, s, i.pX9),
                    l = t.chats.orderedPinnedIds.saved;
                (l?.length || 0) >= n && !r ? e.openLimitReachedModal({
                    limit: "savedDialogsPinned",
                    tabId: d
                }) : (0, m.px)("toggleSavedDialogPinned", {
                    chat: o,
                    shouldBePinned: !r
                })
            })), (0, b.aJ)("loadChatFolders", (async t => {
                const e = await (0, m.px)("fetchChatFolders");
                e && (t = (0, b.mS)(), t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        ...e
                    }
                }, (0, b.UF)(t))
            })), (0, b.aJ)("loadRecommendedChatFolders", (async t => {
                const e = await (0, m.px)("fetchRecommendedChatFolders");
                e && (t = (0, b.mS)(), t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        recommended: e
                    }
                }, (0, b.UF)(t))
            })), (0, b.aJ)("editChatFolders", ((t, e, a) => {
                const {
                    chatId: s,
                    idsToRemove: d,
                    idsToAdd: i,
                    tabId: o = (0, c.g0)()
                } = a, n = (0, F.d)(t, "dialogFiltersChats");
                i.some((e => (0, w.$aQ)(t, e).includedChatIds.length >= n)) ? e.openLimitReachedModal({
                    limit: "dialogFiltersChats",
                    tabId: o
                }) : (d.forEach((async e => {
                    const a = (0, w.$aQ)(t, e);
                    a && await (0, m.px)("editChatFolder", {
                        id: e,
                        folderUpdate: {
                            ...a,
                            pinnedChatIds: a.pinnedChatIds?.filter((t => t !== s)),
                            includedChatIds: a.includedChatIds.filter((t => t !== s))
                        }
                    })
                })), i.forEach((async e => {
                    const a = (0, w.$aQ)(t, e);
                    a && await (0, m.px)("editChatFolder", {
                        id: e,
                        folderUpdate: {
                            ...a,
                            includedChatIds: a.includedChatIds.concat(s)
                        }
                    })
                })))
            })), (0, b.aJ)("editChatFolder", ((t, e, a) => {
                const {
                    id: s,
                    folderUpdate: d
                } = a, i = (0, w.$aQ)(t, s);
                i && (0, m.px)("editChatFolder", {
                    id: s,
                    folderUpdate: {
                        id: s,
                        emoticon: i.emoticon,
                        pinnedChatIds: i.pinnedChatIds,
                        ...d
                    }
                })
            })), (0, b.aJ)("addChatFolder", (async (t, e, a) => {
                const {
                    folder: s,
                    tabId: d = (0, c.g0)()
                } = a, {
                    orderedIds: o,
                    byId: n
                } = t.chatFolders, r = (0, F.d)(t, "dialogFilters");
                if (Object.keys(n).length >= r) return void e.openLimitReachedModal({
                    limit: "dialogFilters",
                    tabId: d
                });
                const l = Math.max(...o || [], i._E9),
                    {
                        id: h,
                        description: u,
                        ...I
                    } = s,
                    p = l + 1,
                    g = {
                        id: p,
                        ...I
                    };
                if (await (0, m.px)("editChatFolder", {
                        id: p,
                        folderUpdate: g
                    }), e.apiUpdate({
                        "@type": "updateChatFolder",
                        id: p,
                        folder: g
                    }), e.requestNextSettingsScreen({
                        foldersAction: {
                            type: "setFolderId",
                            payload: l + 1
                        },
                        tabId: d
                    }), !u) return;
                t = (0, b.mS)();
                const {
                    recommended: f
                } = t.chatFolders;
                f && (t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        recommended: f.filter((t => {
                            let {
                                id: e
                            } = t;
                            return e !== h
                        }))
                    }
                }, (0, b.UF)(t))
            })), (0, b.aJ)("sortChatFolders", (async (t, e, a) => {
                const {
                    folderIds: s
                } = a;
                await (0, m.px)("sortChatFolders", s) && (t = (0, b.mS)(), t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        orderedIds: s
                    }
                }, (0, b.UF)(t))
            })), (0, b.aJ)("deleteChatFolder", (async (t, e, a) => {
                const {
                    id: s
                } = a;
                (0, w.$aQ)(t, s) && await (0, m.px)("deleteChatFolder", s)
            })), (0, b.aJ)("toggleChatUnread", ((t, e, a) => {
                const {
                    id: d
                } = a, i = (0, w.hds)(t, d);
                i && (i.unreadCount ? (0, m.px)("markMessageListRead", {
                    chat: i,
                    threadId: s.l3
                }) : (0, m.px)("toggleDialogUnread", {
                    chat: i,
                    hasUnreadMark: !i.hasUnreadMark
                }))
            })), (0, b.aJ)("markTopicRead", ((t, e, a) => {
                const {
                    chatId: s,
                    topicId: d
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const o = i.topics?.[d]?.lastMessageId;
                o && ((0, m.px)("markMessageListRead", {
                    chat: i,
                    threadId: d,
                    maxId: o
                }), t = (0, b.mS)(), t = (0, V.Tw)(t, s, d, {
                    unreadCount: 0
                }), t = (0, V.eA)(t, s, d, {
                    lastReadInboxMessageId: o
                }), (0, b.UF)(t))
            })), (0, b.aJ)("openChatByInvite", (async (t, e, a) => {
                const {
                    hash: s,
                    tabId: d = (0, c.g0)()
                } = a, i = await (0, m.px)("openChatByInvite", s);
                i && e.openChat({
                    id: i.chatId,
                    tabId: d
                })
            })), (0, b.aJ)("openChatByPhoneNumber", (async (t, e, a) => {
                const {
                    phoneNumber: s,
                    startAttach: d,
                    attach: o,
                    text: n,
                    tabId: r = (0, c.g0)()
                } = a;
                e.openChat({
                    id: i.Xab,
                    tabId: r
                });
                const l = await async function(t, e) {
                    t = (0, b.mS)();
                    const a = (0, w.gTO)(t, e);
                    if (a && !a.isMin) return (0, w.hds)(t, a.id);
                    const {
                        chat: s,
                        user: d
                    } = await (0, m.px)("getChatByPhoneNumber", e) || {};
                    return s ? (t = (0, b.mS)(), t = (0, V.wi)(t, s.id, s), d && (t = (0, V.TK)(t, d.id, d)), (0, b.UF)(t), s) : void 0
                }(t, s);
                if (!l) return e.openPreviousChat({
                    tabId: r
                }), void e.showNotification({
                    message: I.yE("lng_username_by_phone_not_found").replace("{phone}", s),
                    tabId: r
                });
                n ? e.openChatWithDraft({
                    chatId: l.id,
                    text: {
                        text: n
                    },
                    tabId: r
                }) : e.openChat({
                    id: l.id,
                    tabId: r
                }), o && R(t = (0, b.mS)(), e, l.id, o, d, r)
            })), (0, b.aJ)("openTelegramLink", ((t, e, a) => {
                const {
                    url: s,
                    tabId: d = (0, c.g0)()
                } = a, {
                    openChatByPhoneNumber: o,
                    openChatByInvite: l,
                    openStickerSet: h,
                    openChatWithDraft: u,
                    joinVoiceChatByLink: I,
                    focusMessage: p,
                    openInvoice: g,
                    processAttachBotParameters: m,
                    checkChatlistInvite: b,
                    openChatByUsername: V,
                    openStoryViewerByUsername: C,
                    processBoostParameters: y,
                    checkGiftCode: w
                } = e;
                if ((0, r.z)(s) && ((0, n.__)(s) || s.match(i.bnE))) return;
                const v = new URL(s.toLowerCase().startsWith("http") ? s : `https://${s}`);
                if (i.G38.has(v.hostname) && "/" === v.pathname) return void window.open(v.toString(), "_blank", "noopener");
                const F = (i.G38.has(v.hostname) ? "t.me" : v.hostname).split(".");
                if (F.length > 3) return;
                const A = v.pathname.replace(/^\/?s\//, ""),
                    S = 3 === F.length ? `${F[0]}/${A}` : A,
                    [U, T, M] = S.split("/").filter(Boolean).map((t => decodeURI(t))),
                    x = Object.fromEntries(v.searchParams);
                let P;
                "joinchat" === U && (P = T);
                const J = x.hasOwnProperty("startattach"),
                    B = x.hasOwnProperty("startapp"),
                    E = (0, n._o)(x.choose),
                    R = "s" === T && (Number(M) || void 0),
                    H = x.hasOwnProperty("boost");
                if (U.match(/^\+([0-9]+)(\?|$)/)) return void o({
                    phoneNumber: U.substr(1, U.length - 1),
                    startAttach: x.startattach,
                    attach: x.attach,
                    text: x.text,
                    tabId: d
                });
                if (R) return void C({
                    username: U,
                    storyId: R,
                    tabId: d
                });
                if ((U.startsWith(" ") || U.startsWith("+")) && (P = U.substr(1, U.length - 1)), P) return void l({
                    hash: P,
                    tabId: d
                });
                if ("addstickers" === U || "addemoji" === U) return void h({
                    stickerSetInfo: {
                        shortName: T
                    },
                    tabId: d
                });
                if ("share" === U) return void u({
                    text: (0, n.Ey)(x.url, x.text),
                    tabId: d
                });
                if ("addlist" === U) return void b({
                    slug: T,
                    tabId: d
                });
                if ("giftcode" === U) return void w({
                    slug: T,
                    tabId: d
                });
                const L = T || void 0,
                    N = M ? Number(M) : void 0,
                    D = x.comment ? Number(x.comment) : void 0;
                if (x.hasOwnProperty("voicechat") || x.hasOwnProperty("livestream")) I({
                    username: U,
                    inviteHash: x.voicechat || x.livestream,
                    tabId: d
                });
                else if ("boost" === U) {
                    const t = T,
                        e = x.c;
                    y({
                        usernameOrId: t || e,
                        isPrivate: !t && Boolean(e),
                        tabId: d
                    })
                } else H ? y({
                    usernameOrId: L || U,
                    isPrivate: "c" === U && Boolean(L),
                    tabId: d
                }) : "c" === U && L && N ? p({
                    chatId: (0, f.QE)(L),
                    messageId: N,
                    tabId: d
                }) : U.startsWith("$") ? g({
                    type: "slug",
                    slug: U.substring(1),
                    tabId: d
                }) : "invoice" === U ? g({
                    type: "slug",
                    slug: T,
                    tabId: d
                }) : J && E || !T && B ? m({
                    username: U,
                    filter: E,
                    startParam: x.startattach || x.startapp,
                    tabId: d
                }) : V({
                    username: U,
                    messageId: N || Number(L),
                    threadId: N ? Number(L) : void 0,
                    commentId: D,
                    startParam: x.start,
                    startAttach: x.startattach,
                    attach: x.attach,
                    startApp: x.startapp,
                    originalParts: [U, T, M],
                    tabId: d
                })
            })), (0, b.aJ)("processBoostParameters", (async (t, e, a) => {
                const {
                    usernameOrId: s,
                    isPrivate: d,
                    tabId: i = (0, c.g0)()
                } = a;
                let o;
                if (d) {
                    const a = (0, f.QE)(s);
                    if (o = (0, w.hds)(t, a), !o) return void e.showNotification({
                        message: "Chat does not exist",
                        tabId: i
                    })
                } else if (o = await B(t, s), !o) return void e.showNotification({
                    message: "User does not exist",
                    tabId: i
                });
                (0, f.WX)(o) || (0, f.Vs)(o) ? e.openBoostModal({
                    chatId: o.id,
                    tabId: i
                }): e.openChat({
                    id: o.id,
                    tabId: i
                })
            })), (0, b.aJ)("acceptInviteConfirmation", (async (t, e, a) => {
                const {
                    hash: s,
                    tabId: d = (0, c.g0)()
                } = a, i = await (0, m.px)("importChatInvite", {
                    hash: s
                });
                i && e.openChat({
                    id: i.id,
                    tabId: d
                })
            })), (0, b.aJ)("openChatByUsername", (async (t, e, a) => {
                const {
                    username: d,
                    messageId: o,
                    commentId: n,
                    startParam: r,
                    startAttach: l,
                    attach: h,
                    threadId: u,
                    originalParts: I,
                    startApp: p,
                    text: m,
                    tabId: f = (0, c.g0)()
                } = a, V = (0, w.meB)(t, f), C = I?.[1], y = C && !Number(C) && !I?.[2];
                if (!n) {
                    if (void 0 === l && o && !r && V?.usernames?.some((t => t.username === d))) return void e.focusMessage({
                        chatId: V.id,
                        threadId: u,
                        messageId: o,
                        tabId: f
                    });
                    if (!y) return void await async function(t, e, a) {
                        for (var d = arguments.length, o = new Array(d > 3 ? d - 3 : 0), n = 3; n < d; n++) o[n - 3] = arguments[n];
                        let [r = (0, c.g0)()] = o;
                        const {
                            username: l,
                            threadId: h,
                            channelPostId: u,
                            startParam: I,
                            startAttach: p,
                            attach: g,
                            text: m
                        } = a;
                        t = (0, b.mS)();
                        const f = (0, w.meB)(t, r);
                        if (void 0 !== p && !g) {
                            const a = await E(t, e, l, r);
                            if (!a) return;
                            return void e.callAttachBot({
                                bot: a,
                                chatId: f?.id || a.id,
                                startParam: p,
                                tabId: r
                            })
                        }
                        const V = f?.usernames?.some((t => t.username === l));
                        V || e.openChat({
                            id: i.Xab,
                            tabId: r
                        });
                        const C = await B(t, l);
                        C ? (u ? e.focusMessage({
                            chatId: C.id,
                            threadId: h,
                            messageId: u,
                            tabId: r
                        }) : V || e.openThread({
                            chatId: C.id,
                            threadId: h ?? s.l3,
                            tabId: r
                        }), I && e.startBot({
                            botId: C.id,
                            param: I
                        }), g && R(t = (0, b.mS)(), e, C.id, g, p, r), m && e.openChatWithDraft({
                            chatId: C.id,
                            text: {
                                text: m
                            },
                            tabId: r
                        })) : V || (e.openPreviousChat({
                            tabId: r
                        }), e.showNotification({
                            message: "User does not exist",
                            tabId: r
                        }))
                    }(t, e, {
                        username: d,
                        threadId: u,
                        channelPostId: o,
                        startParam: r,
                        startAttach: l,
                        attach: h,
                        text: m
                    }, f)
                }
                const v = (0, w.qn$)(t, d);
                if (n && o && v) return void e.openThread({
                    isComments: !0,
                    originChannelId: v.id,
                    originMessageId: o,
                    tabId: f,
                    focusMessageId: n
                });
                y || e.openChat({
                    id: i.Xab,
                    tabId: f
                });
                const F = await B(t, d);
                if (F)
                    if (y && F) {
                        const t = (0, g.A)();
                        e.requestAppWebView({
                            appName: C,
                            botId: F.id,
                            tabId: f,
                            startApp: p,
                            theme: t
                        })
                    } else o && e.openThread({
                        isComments: !0,
                        originChannelId: F.id,
                        originMessageId: o,
                        tabId: f,
                        focusMessageId: n
                    })
            })), (0, b.aJ)("togglePreHistoryHidden", (async (t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d,
                    tabId: i = (0, c.g0)()
                } = a, o = await H(t, e, s, i);
                o && (t = (0, b.mS)(), t = (0, V.lt)(t, o.id, {
                    isPreHistoryHidden: d
                }), (0, b.UF)(t), (0, m.px)("togglePreHistoryHidden", {
                    chat: o,
                    isEnabled: d
                }))
            })), (0, b.aJ)("updateChatDefaultBannedRights", ((t, e, a) => {
                const {
                    chatId: s,
                    bannedRights: d
                } = a, i = (0, w.hds)(t, s);
                i && (0, m.px)("updateChatDefaultBannedRights", {
                    chat: i,
                    bannedRights: d
                })
            })), (0, b.aJ)("updateChatMemberBannedRights", (async (t, e, a) => {
                const {
                    chatId: s,
                    userId: d,
                    bannedRights: i,
                    tabId: o = (0, c.g0)()
                } = a, n = (0, w.mBe)(t, d);
                if (!n) return;
                const r = await H(t, e, s, o);
                if (!r) return;
                await (0, m.px)("updateChatMemberBannedRights", {
                    chat: r,
                    user: n,
                    bannedRights: i
                }), t = (0, b.mS)();
                const l = (0, w.AWZ)(t, r.id);
                if (!l) return;
                const {
                    members: h,
                    kickedMembers: u
                } = l, I = Boolean(i.viewMessages), p = !Object.keys(i).length;
                t = (0, V.lt)(t, r.id, {
                    ...h && I && {
                        members: h.filter((t => t.userId !== d))
                    },
                    ...h && !I && {
                        members: h.map((t => t.userId === d ? {
                            ...t,
                            bannedRights: i
                        } : t))
                    },
                    ...p && u && {
                        kickedMembers: u.filter((t => t.userId !== d))
                    }
                }), (0, b.UF)(t)
            })), (0, b.aJ)("updateChatAdmin", (async (t, e, a) => {
                const {
                    chatId: s,
                    userId: d,
                    adminRights: i,
                    customTitle: o,
                    tabId: n = (0, c.g0)()
                } = a, r = (0, w.mBe)(t, d);
                if (!r) return;
                const l = await H(t, e, s, n);
                if (!l) return;
                await (0, m.px)("updateChatAdmin", {
                    chat: l,
                    user: r,
                    adminRights: i,
                    customTitle: o
                });
                const h = await (0, m.px)("fetchFullChat", l);
                if (!h?.fullInfo) return;
                const {
                    adminMembersById: u
                } = h.fullInfo, I = !Object.keys(i).length;
                let p;
                if (u)
                    if (I) {
                        const {
                            [d]: t, ...e
                        } = u;
                        p = e
                    } else p = {
                        ...u,
                        [d]: {
                            ...u[d],
                            adminRights: i,
                            customTitle: o
                        }
                    };
                p && (t = (0, b.mS)(), t = (0, V.lt)(t, l.id, {
                    adminMembersById: p
                }), (0, b.UF)(t))
            })), (0, b.aJ)("updateChat", (async (t, e, a) => {
                const {
                    chatId: s,
                    title: i,
                    about: o,
                    photo: n,
                    tabId: r = (0, c.g0)()
                } = a, l = (0, w.hds)(t, s), h = (0, w.AWZ)(t, s);
                l && (t = (0, b.mS)(), t = (0, V.nH)(t, d.TD.InProgress, r), (0, b.UF)(t), await Promise.all([l.title !== i ? (0, m.px)("updateChatTitle", l, i) : void 0, h?.about !== o ? (0, m.px)("updateChatAbout", l, o) : void 0, n ? (0, m.px)("editChatPhoto", {
                    chatId: s,
                    accessHash: l.accessHash,
                    photo: n
                }) : void 0]), t = (0, b.mS)(), t = (0, V.nH)(t, d.TD.Complete, r), (0, b.UF)(t), n && e.loadFullChat({
                    chatId: s,
                    tabId: r,
                    withPhotos: !0
                }))
            })), (0, b.aJ)("updateChatPhoto", (async (t, e, a) => {
                const {
                    photo: s,
                    chatId: d,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.hds)(t, d);
                o && (await (0, m.px)("editChatPhoto", {
                    chatId: d,
                    accessHash: o.accessHash,
                    photo: s
                }), e.loadFullChat({
                    chatId: d,
                    tabId: i,
                    withPhotos: !0
                }))
            })), (0, b.aJ)("deleteChatPhoto", (async (t, e, a) => {
                const {
                    photo: s,
                    chatId: d,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.hds)(t, d);
                if (!o) return;
                let n;
                n = s.id === o.avatarPhotoId ? await (0, m.px)("editChatPhoto", {
                    chatId: d,
                    accessHash: o.accessHash
                }) : await (0, m.px)("deleteProfilePhotos", [s]), n && (t = (0, b.mS)(), t = (0, V.so)(t, d, s.id), (0, b.UF)(t), e.loadFullChat({
                    chatId: d,
                    tabId: i,
                    withPhotos: !0
                }))
            })), (0, b.aJ)("toggleSignatures", ((t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d
                } = a, i = (0, w.hds)(t, s);
                i && (0, m.px)("toggleSignatures", {
                    chat: i,
                    isEnabled: d
                })
            })), (0, b.aJ)("loadGroupsForDiscussion", (async t => {
                const e = await (0, m.px)("fetchGroupsForDiscussion");
                if (!e) return;
                const a = e.reduce(((t, e) => (e && !e.isForum && (t[e.id] = e), t)), {});
                t = (0, b.mS)(), t = (0, V.Nl)(t, a), t = {
                    ...t,
                    chats: {
                        ...t.chats,
                        forDiscussionIds: Object.keys(a)
                    }
                }, (0, b.UF)(t)
            })), (0, b.aJ)("linkDiscussionGroup", (async (t, e, a) => {
                const {
                    channelId: s,
                    chatId: d,
                    tabId: i = (0, c.g0)()
                } = a || {}, o = (0, w.hds)(t, s);
                if (!o) return;
                const n = await H(t, e, d, i);
                if (!n) return;
                let r = (0, w.AWZ)(t, n.id);
                if (!r) {
                    const t = await (0, m.px)("fetchFullChat", n);
                    if (!t) return;
                    r = t.fullInfo
                }
                r.isPreHistoryHidden && (t = (0, b.mS)(), t = (0, V.lt)(t, n.id, {
                    isPreHistoryHidden: !1
                }), (0, b.UF)(t), await (0, m.px)("togglePreHistoryHidden", {
                    chat: n,
                    isEnabled: !1
                })), (0, m.px)("setDiscussionGroup", {
                    channel: o,
                    chat: n
                })
            })), (0, b.aJ)("unlinkDiscussionGroup", (async (t, e, a) => {
                const {
                    channelId: s,
                    tabId: d = (0, c.g0)()
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const o = (0, w.AWZ)(t, s);
                let n;
                o?.linkedChatId && (n = (0, w.hds)(t, o.linkedChatId)), await (0, m.px)("setDiscussionGroup", {
                    channel: i
                }), n && J(t = (0, b.mS)(), e, n, d)
            })), (0, b.aJ)("setActiveChatFolder", ((t, e, a) => {
                const {
                    activeChatFolder: s,
                    tabId: d = (0, c.g0)()
                } = a;
                if (!(s + 1 > (0, F.d)(t, "dialogFilters"))) return (0, y.w)(t, {
                    activeChatFolder: s
                }, d);
                e.openLimitReachedModal({
                    limit: "dialogFilters",
                    tabId: d
                })
            })), (0, b.aJ)("resetOpenChatWithDraft", ((t, e, a) => {
                const {
                    tabId: s = (0, c.g0)()
                } = a || {};
                return (0, y.w)(t, {
                    requestedDraft: void 0
                }, s)
            })), (0, b.aJ)("loadMoreMembers", (async (t, e, a) => {
                const {
                    tabId: s = (0, c.g0)()
                } = a || {}, {
                    chatId: d
                } = (0, w.Xf0)(t, s) || {}, i = d ? (0, w.hds)(t, d) : void 0;
                if (!i || (0, f.yn)(i)) return;
                const o = (0, w.AWZ)(t, i.id)?.members?.length;
                if (void 0 !== o && void 0 !== i.membersCount && o >= i.membersCount) return;
                const n = await (0, m.px)("fetchMembers", i.id, i.accessHash, "recent", o);
                if (!n) return;
                const {
                    members: r,
                    users: l,
                    userStatusesById: u
                } = n;
                r && r.length && (t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(l, "id")), t = (0, V.d2)(t, u), t = (0, V.t_)(t, i, r), (0, b.UF)(t))
            })), (0, b.aJ)("addChatMembers", (async (t, e, a) => {
                const {
                    chatId: s,
                    memberIds: i,
                    tabId: o = (0, c.g0)()
                } = a, n = (0, w.hds)(t, s), r = i.map((e => (0, w.mBe)(t, e))).filter(Boolean);
                if (!n || !r.length) return;
                e.setNewChatMembersDialogState({
                    newChatMembersProgress: d.D7.Loading,
                    tabId: o
                });
                const l = await (0, m.px)("addChatMembers", n, r);
                l && (t = (0, b.mS)(), t = (0, V.hQ)(t, s, l, o), (0, b.UF)(t)), e.setNewChatMembersDialogState({
                    newChatMembersProgress: d.D7.Closed,
                    tabId: o
                }), J(t = (0, b.mS)(), e, n, o)
            })), (0, b.aJ)("deleteChatMember", (async (t, e, a) => {
                const {
                    chatId: s,
                    userId: d,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.hds)(t, s), n = (0, w.mBe)(t, d);
                o && n && (await (0, m.px)("deleteChatMember", o, n), J(t = (0, b.mS)(), e, o, i))
            })), (0, b.aJ)("toggleIsProtected", ((t, e, a) => {
                const {
                    chatId: s,
                    isProtected: d
                } = a, i = (0, w.hds)(t, s);
                i && (0, m.px)("toggleIsProtected", {
                    chat: i,
                    isProtected: d
                })
            })), (0, b.aJ)("setChatEnabledReactions", (async (t, e, a) => {
                const {
                    chatId: s,
                    enabledReactions: d,
                    reactionsLimit: i,
                    tabId: o = (0, c.g0)()
                } = a, n = (0, w.hds)(t, s);
                n && (await (0, m.px)("setChatEnabledReactions", {
                    chat: n,
                    enabledReactions: d,
                    reactionsLimit: i
                }), J(t = (0, b.mS)(), e, n, o))
            })), (0, b.aJ)("fetchChat", ((t, e, a) => {
                const {
                    chatId: s
                } = a;
                if (!(0, w.hds)(t, s))
                    if ((0, w.nZ4)(t, s))(0, m.px)("fetchChat", {
                        type: "self"
                    });
                    else {
                        const e = (0, w.mBe)(t, s);
                        e && (0, m.px)("fetchChat", {
                            type: "user",
                            user: e
                        })
                    }
            })), (0, b.aJ)("loadChatSettings", (async (t, e, a) => {
                const {
                    chatId: s
                } = a, d = (0, w.hds)(t, s);
                if (!d) return;
                const i = await (0, m.px)("fetchChatSettings", d);
                if (!i) return;
                const {
                    settings: o,
                    users: n
                } = i;
                t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(n, "id")), t = (0, V.wi)(t, d.id, {
                    settings: o
                }), (0, b.UF)(t)
            })), (0, b.aJ)("toggleJoinToSend", (async (t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d
                } = a, i = (0, w.hds)(t, s);
                i && ((0, f.Vs)(i) || (0, f.WX)(i)) && await (0, m.px)("toggleJoinToSend", i, d)
            })), (0, b.aJ)("toggleJoinRequest", (async (t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d
                } = a, i = (0, w.hds)(t, s);
                i && ((0, f.Vs)(i) || (0, f.WX)(i)) && await (0, m.px)("toggleJoinRequest", i, d)
            })), (0, b.aJ)("openForumPanel", ((t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, c.g0)()
                } = a;
                return e.toggleStoryRibbon({
                    isShown: !1,
                    tabId: d
                }), e.toggleStoryRibbon({
                    isShown: !1,
                    isArchived: !0,
                    tabId: d
                }), (0, y.w)(t, {
                    forumPanelChatId: s
                }, d)
            })), (0, b.aJ)("closeForumPanel", ((t, e, a) => {
                const {
                    tabId: s = (0, c.g0)()
                } = a || {};
                return (0, y.w)(t, {
                    forumPanelChatId: void 0
                }, s)
            })), (0, b.aJ)("processAttachBotParameters", (async (t, e, a) => {
                const {
                    username: s,
                    filter: d,
                    startParam: i,
                    tabId: o = (0, c.g0)()
                } = a, n = await E(t, e, s, o);
                if (!n) return;
                if (!Boolean(d)) return void e.callAttachBot({
                    isFromSideMenu: !0,
                    bot: n,
                    startParam: i,
                    tabId: o
                });
                t = (0, b.mS)();
                const {
                    attachMenu: {
                        bots: r
                    }
                } = t;
                if (!r[n.id]) return t = (0, y.w)(t, {
                    requestedAttachBotInstall: {
                        bot: n,
                        onConfirm: {
                            action: "requestAttachBotInChat",
                            payload: {
                                bot: n,
                                filter: d,
                                startParam: i
                            }
                        }
                    }
                }, o), void(0, b.UF)(t);
                e.requestAttachBotInChat({
                    bot: n,
                    filter: d,
                    startParam: i,
                    tabId: o
                })
            })), (0, b.aJ)("loadTopics", (async (t, e, a) => {
                const {
                    chatId: s,
                    force: d
                } = a, o = (0, w.hds)(t, s);
                if (!o) return;
                if (!d && o.listedTopicIds && o.listedTopicIds.length === o.topicsCount) return;
                const n = !d && o.listedTopicIds ? o.listedTopicIds.reduce(((t, e) => {
                        const a = o.topics?.[e],
                            s = o.topics?.[t];
                        return a && (!s || a.lastMessageId < s.lastMessageId) ? e : t
                    })) : void 0,
                    {
                        id: r,
                        date: c,
                        lastMessageId: l
                    } = n && o.topics?.[n] || {},
                    u = await (0, m.px)("fetchTopics", {
                        chat: o,
                        offsetTopicId: r,
                        offsetId: l,
                        offsetDate: c,
                        limit: r ? i.iIc : i.qj6
                    });
                u && (t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(u.users, "id")), t = (0, V.Nl)(t, (0, h.dU)(u.chats, "id")), t = (0, V.Kc)(t, u.messages), t = (0, V.mI)(t, s, u.count, u.topics), t = (0, V.Y4)(t, s, u.topics.map((t => t.id))), Object.entries(u.draftsById || {}).forEach((e => {
                    let [a, d] = e;
                    t = (0, V.ew)(t, s, Number(a), "draft", d)
                })), Object.entries(u.readInboxMessageIdByTopicId || {}).forEach((e => {
                    let [a, d] = e;
                    t = (0, V.eA)(t, s, Number(a), {
                        lastReadInboxMessageId: d
                    })
                })), (0, b.UF)(t))
            })), (0, b.aJ)("loadTopicById", (async (t, e, a) => {
                const {
                    chatId: s,
                    topicId: d
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const o = await (0, m.px)("fetchTopicById", {
                    chat: i,
                    topicId: d
                });
                if (o) t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(o.users, "id")), t = (0, V.Nl)(t, (0, h.dU)(o.chats, "id")), t = (0, V.Kc)(t, o.messages), t = (0, V.Tw)(t, s, d, o.topic), (0, b.UF)(t);
                else if ("tabId" in a && a.shouldCloseChatOnError) {
                    const {
                        tabId: t = (0, c.g0)()
                    } = a;
                    e.openChat({
                        id: void 0,
                        tabId: t
                    })
                }
            })), (0, b.aJ)("toggleForum", (async (t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d,
                    tabId: i = (0, c.g0)()
                } = a, o = await H(t, e, s, i);
                if (!o) return;
                let n;
                try {
                    n = await (0, m.px)("toggleForum", {
                        chat: o,
                        isEnabled: d
                    })
                } catch (t) {
                    t.message.startsWith("A wait of") ? e.showNotification({
                        message: I.yE("FloodWait"),
                        tabId: i
                    }) : e.showDialog({
                        data: {
                            ...t,
                            hasErrorKey: !0
                        },
                        tabId: i
                    })
                }
                n && (t = (0, b.mS)(), t = (0, V.wi)(t, o.id, {
                    isForum: d
                }), (0, b.UF)(t), d ? e.openForumPanel({
                    chatId: o.id,
                    tabId: i
                }) : e.closeForumPanel({
                    tabId: i
                }))
            })), (0, b.aJ)("toggleParticipantsHidden", (async (t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d
                } = a, i = (0, w.hds)(t, s);
                if (!i) return;
                const o = (0, w.AWZ)(t, i.id)?.areParticipantsHidden;
                t = (0, V.lt)(t, s, {
                    areParticipantsHidden: d
                }), (0, b.UF)(t), await (0, m.px)("toggleParticipantsHidden", {
                    chat: i,
                    isEnabled: d
                }) || void 0 === o || (t = (0, b.mS)(), t = (0, V.lt)(t, s, {
                    areParticipantsHidden: o
                }), (0, b.UF)(t))
            })), (0, b.aJ)("createTopic", (async (t, e, a) => {
                const {
                    chatId: s,
                    title: d,
                    iconColor: i,
                    iconEmojiId: o,
                    tabId: n = (0, c.g0)()
                } = a, r = (0, w.hds)(t, s);
                if (!r) return;
                (0, w.nTw)(t, n).createTopicPanel && (t = (0, y.w)(t, {
                    createTopicPanel: {
                        chatId: s,
                        isLoading: !0
                    }
                }, n), (0, b.UF)(t));
                const l = await (0, m.px)("createTopic", {
                    chat: r,
                    title: d,
                    iconColor: i,
                    iconEmojiId: o
                });
                l && e.openThread({
                    chatId: s,
                    threadId: l,
                    shouldReplaceHistory: !0,
                    tabId: n
                }), e.closeCreateTopicPanel({
                    tabId: n
                })
            })), (0, b.aJ)("deleteTopic", (async (t, e, a) => {
                const {
                    chatId: s,
                    topicId: d
                } = a, i = (0, w.hds)(t, s);
                i && (await (0, m.px)("deleteTopic", {
                    chat: i,
                    topicId: d
                }), t = (0, b.mS)(), t = (0, V.do)(t, s, d), (0, b.UF)(t))
            })), (0, b.aJ)("editTopic", (async (t, e, a) => {
                const {
                    chatId: s,
                    topicId: d,
                    tabId: i = (0, c.g0)(),
                    ...o
                } = a, n = (0, w.hds)(t, s), r = n?.topics?.[d];
                n && r && ((0, w.nTw)(t, i).editTopicPanel && (t = (0, y.w)(t, {
                    editTopicPanel: {
                        chatId: s,
                        topicId: d,
                        isLoading: !0
                    }
                }, i), (0, b.UF)(t)), await (0, m.px)("editTopic", {
                    chat: n,
                    topicId: d,
                    ...o
                }) && (t = (0, b.mS)(), t = (0, V.Tw)(t, s, d, o), (0, b.UF)(t), e.closeEditTopicPanel({
                    tabId: i
                })))
            })), (0, b.aJ)("toggleTopicPinned", ((t, e, a) => {
                const {
                    chatId: s,
                    topicId: d,
                    isPinned: i,
                    tabId: o = (0, c.g0)()
                } = a, {
                    topicsPinnedLimit: n
                } = t.appConfig || {}, r = (0, w.hds)(t, s);
                r && r.topics && n && (i && Object.values(r.topics).filter((t => t.isPinned)).length >= n ? e.showNotification({
                    message: I.yE("LimitReachedPinnedTopics", n, "i"),
                    tabId: o
                }) : (0, m.px)("togglePinnedTopic", {
                    chat: r,
                    topicId: d,
                    isPinned: i
                }))
            })), (0, b.aJ)("checkChatlistInvite", (async (t, e, a) => {
                const {
                    slug: s,
                    tabId: d = (0, c.g0)()
                } = a, i = await (0, m.px)("checkChatlistInvite", {
                    slug: s
                });
                i ? (t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(i.users, "id")), t = (0, V.Nl)(t, (0, h.dU)(i.chats, "id")), t = (0, y.w)(t, {
                    chatlistModal: {
                        invite: i.invite
                    }
                }, d), (0, b.UF)(t)) : e.showNotification({
                    message: I.yE("lng_group_invite_bad_link"),
                    tabId: d
                })
            })), (0, b.aJ)("joinChatlistInvite", (async (t, e, a) => {
                const {
                    invite: s,
                    peerIds: d,
                    tabId: i = (0, c.g0)()
                } = a, o = d.map((e => (0, w.hds)(t, e))).filter(Boolean), n = o.filter((t => t.isNotJoined)).length, r = "folderId" in s ? (0, w.$aQ)(t, s.folderId) : void 0, l = "title" in s ? s.title : r?.title;
                try {
                    if (!await (0, m.px)("joinChatlistInvite", {
                            slug: s.slug,
                            peers: o
                        })) return;
                    e.showNotification({
                        title: I.yE(r ? "FolderLinkUpdatedTitle" : "FolderLinkAddedTitle", l),
                        message: I.yE("FolderLinkAddedSubtitle", n, "i"),
                        tabId: i
                    })
                } catch (t) {
                    "CHATLISTS_TOO_MUCH" === t.message ? e.openLimitReachedModal({
                        limit: "chatlistJoined",
                        tabId: i
                    }) : e.showDialog({
                        data: {
                            ...t,
                            hasErrorKey: !0
                        },
                        tabId: i
                    })
                }
            })), (0, b.aJ)("leaveChatlist", (async (t, e, a) => {
                const {
                    folderId: s,
                    peerIds: d,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.$aQ)(t, s), n = d?.map((e => (0, w.hds)(t, e))).filter(Boolean) || [];
                await (0, m.px)("leaveChatlist", {
                    folderId: s,
                    peers: n
                }) && e.showNotification({
                    title: I.yE("FolderLinkDeletedTitle", o.title),
                    message: I.yE("FolderLinkDeletedSubtitle", n.length, "i"),
                    tabId: i
                })
            })), (0, b.aJ)("loadChatlistInvites", (async (t, e, a) => {
                const {
                    folderId: s
                } = a, d = await (0, m.px)("fetchChatlistInvites", {
                    folderId: s
                });
                d && (t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(d.users, "id")), t = (0, V.Nl)(t, (0, h.dU)(d.chats, "id")), t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        invites: {
                            ...t.chatFolders.invites,
                            [s]: d.invites
                        }
                    }
                }, (0, b.UF)(t))
            })), (0, b.aJ)("createChatlistInvite", (async (t, e, a) => {
                const {
                    folderId: s,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.$aQ)(t, s);
                if (!o) return;
                let n;
                t = (0, y.w)(t, {
                    shareFolderScreen: {
                        ...(0, w.nTw)(t, i).shareFolderScreen,
                        isLoading: !0
                    }
                }, i), (0, b.UF)(t);
                try {
                    n = await (0, m.px)("createChalistInvite", {
                        folderId: s,
                        peers: o.includedChatIds.concat(o.pinnedChatIds || []).map((e => (0, w.hds)(t, e) || (0, w.mBe)(t, e))).filter(Boolean)
                    })
                } catch (t) {
                    S.has(t.message) ? (e.openLimitReachedModal({
                        limit: "chatlistInvites",
                        tabId: i
                    }), e.requestNextSettingsScreen({
                        screen: d.VS.Folders,
                        tabId: i
                    })) : e.showDialog({
                        data: {
                            ...t,
                            hasErrorKey: !0
                        },
                        tabId: i
                    })
                }
                if (!n || !n.invite) return;
                const {
                    shareFolderScreen: r
                } = (0, w.nTw)(t, i);
                r && (t = (0, b.mS)(), t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        byId: {
                            ...t.chatFolders.byId,
                            [s]: {
                                ...t.chatFolders.byId[s],
                                ...n.filter
                            }
                        },
                        invites: {
                            ...t.chatFolders.invites,
                            [s]: [...t.chatFolders.invites[s] || [], n.invite]
                        }
                    }
                }, t = (0, y.w)(t, {
                    shareFolderScreen: {
                        ...r,
                        url: n.invite.url,
                        isLoading: !1
                    }
                }, i), (0, b.UF)(t))
            })), (0, b.aJ)("editChatlistInvite", (async (t, e, a) => {
                const {
                    folderId: s,
                    peerIds: d,
                    url: i,
                    tabId: o = (0, c.g0)()
                } = a, n = i.split("/").pop();
                if (!n) return;
                const r = d.map((e => (0, w.hds)(t, e) || (0, w.mBe)(t, e))).filter(Boolean);
                t = (0, y.w)(t, {
                    shareFolderScreen: {
                        ...(0, w.nTw)(t, o).shareFolderScreen,
                        isLoading: !0
                    }
                }, o), (0, b.UF)(t);
                try {
                    const e = await (0, m.px)("editChatlistInvite", {
                        folderId: s,
                        slug: n,
                        peers: r
                    });
                    if (!e) return;
                    t = (0, b.mS)(), t = {
                        ...t,
                        chatFolders: {
                            ...t.chatFolders,
                            invites: {
                                ...t.chatFolders.invites,
                                [s]: t.chatFolders.invites[s]?.map((t => t.url === i ? e : t))
                            }
                        }
                    }, (0, b.UF)(t)
                } catch (t) {
                    e.showDialog({
                        data: {
                            ...t,
                            hasErrorKey: !0
                        },
                        tabId: o
                    })
                } finally {
                    t = (0, b.mS)(), t = (0, y.w)(t, {
                        shareFolderScreen: {
                            ...(0, w.nTw)(t, o).shareFolderScreen,
                            isLoading: !1
                        }
                    }, o), (0, b.UF)(t)
                }
            })), (0, b.aJ)("deleteChatlistInvite", (async (t, e, a) => {
                const {
                    folderId: s,
                    url: d
                } = a, i = d.split("/").pop();
                i && await (0, m.px)("deleteChatlistInvite", {
                    folderId: s,
                    slug: i
                }) && (t = (0, b.mS)(), t = {
                    ...t,
                    chatFolders: {
                        ...t.chatFolders,
                        invites: {
                            ...t.chatFolders.invites,
                            [s]: t.chatFolders.invites[s]?.filter((t => t.url !== d))
                        }
                    }
                }, (0, b.UF)(t))
            })), (0, b.aJ)("openDeleteChatFolderModal", (async (t, e, a) => {
                const {
                    folderId: s,
                    isConfirmedForChatlist: d,
                    tabId: i = (0, c.g0)()
                } = a, o = (0, w.$aQ)(t, s);
                if (o) {
                    if (o.isChatList && (!o.hasMyInvites || d)) {
                        const e = await (0, m.px)("fetchLeaveChatlistSuggestions", {
                            folderId: s
                        });
                        return t = (0, b.mS)(), t = (0, y.w)(t, {
                            chatlistModal: {
                                removal: {
                                    folderId: s,
                                    suggestedPeerIds: e
                                }
                            }
                        }, i), void(0, b.UF)(t)
                    }
                    t = (0, y.w)(t, {
                        deleteFolderDialogModal: s
                    }, i), (0, b.UF)(t)
                }
            })), (0, b.aJ)("updateChatDetectedLanguage", ((t, e, a) => {
                const {
                    chatId: s,
                    detectedLanguage: d
                } = a;
                return t = (0, b.mS)(), (0, V.wi)(t, s, {
                    detectedLanguage: d
                })
            })), (0, b.aJ)("togglePeerTranslations", (async (t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d
                } = a, i = (0, w.hds)(t, s);
                i && void 0 !== await (0, m.px)("togglePeerTranslations", {
                    chat: i,
                    isEnabled: d
                }) && (t = (0, b.mS)(), t = (0, V.zT)(t, s, {
                    isTranslationDisabled: !d || void 0
                }), (0, b.UF)(t))
            })), (0, b.aJ)("setViewForumAsMessages", ((t, e, a) => {
                const {
                    chatId: s,
                    isEnabled: d
                } = a, i = (0, w.hds)(t, s);
                i?.isForum && i.isForumAsMessages !== d && (t = (0, V.wi)(t, s, {
                    isForumAsMessages: d || void 0
                }), (0, b.UF)(t), (0, m.px)("setViewForumAsMessages", {
                    chat: i,
                    isEnabled: d
                }))
            })), (0, b.aJ)("loadChannelRecommendations", (async (t, e, a) => {
                const {
                    chatId: s
                } = a, d = s ? (0, w.hds)(t, s) : void 0;
                if (s && !d) return;
                if (!s && (0, w.dg4)(t, i.rBM)) return;
                const o = await (0, m.px)("fetchChannelRecommendations", {
                    chat: d
                });
                if (!o) return;
                const {
                    similarChannels: n,
                    count: r
                } = o, c = (0, h.dU)(n, "id");
                t = (0, b.mS)(), t = (0, V.Nl)(t, c), t = (0, V.NO)(t, s || i.rBM, Object.keys(c), r), (0, b.UF)(t)
            })), (0, b.aJ)("toggleChannelRecommendations", ((t, e, a) => {
                const {
                    chatId: s
                } = a;
                (0, w.hds)(t, s) && (t = (0, V.Cb)(t, s), (0, b.UF)(t))
            })), (0, b.aJ)("resolveBusinessChatLink", (async (t, e, a) => {
                const {
                    slug: s,
                    tabId: d = (0, c.g0)()
                } = a, i = await (0, m.px)("resolveBusinessChatLink", {
                    slug: s
                });
                if (!i) return void e.showNotification({
                    message: I.yE("BusinessLink.ErrorExpired"),
                    tabId: d
                });
                const {
                    users: o,
                    chats: n,
                    chatLink: r
                } = i;
                t = (0, b.mS)(), t = (0, V.g1)(t, (0, h.dU)(o, "id")), t = (0, V.Nl)(t, (0, h.dU)(n, "id")), (0, b.UF)(t), e.openChatWithDraft({
                    chatId: r.chatId,
                    text: r.text,
                    tabId: d
                })
            })), (0, b.aJ)("requestCollectibleInfo", (async (t, e, a) => {
                const {
                    type: s,
                    collectible: d,
                    peerId: i,
                    tabId: n = (0, c.g0)()
                } = a;
                let r;
                if ("phone" === s && (r = {
                        phone: d
                    }), "username" === s && (r = {
                        username: d
                    }), !r) return;
                const l = await (0, m.px)("fetchCollectionInfo", r);
                l ? (t = (0, b.mS)(), t = (0, y.w)(t, {
                    collectibleInfoModal: {
                        ...l,
                        type: s,
                        collectible: d,
                        peerId: i
                    }
                }, n), (0, b.UF)(t)) : (0, o.eM)(d)
            }))
        },
        12859: (t, e, a) => {
            a.d(e, {
                Hc: () => M,
                JD: () => F,
                cw: () => v,
                ow: () => x,
                re: () => P,
                sN: () => T
            });
            var s = a(66644),
                d = a(85982),
                i = a(14487),
                o = a(87894),
                n = a(47985),
                r = a(41733),
                c = a(82393),
                l = a(4875),
                h = a(59589),
                u = a(13439),
                I = a(46205),
                p = a(80840),
                g = a(32989),
                m = a(29807),
                f = a(71331),
                b = a(42347);
            const V = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
            let C, y, w;

            function v() {
                return F(), Promise.all(Object.values(w).map((t => {
                    const e = t.src;
                    return t.src = V, t.muted = !0, t.volume = 1e-4, t.play().then((() => {
                        t.pause(), t.volume = 1, t.currentTime = 0, t.muted = !1, (0, s.Uz)((() => {
                            t.src = e
                        }))
                    }))
                })))
            }

            function F() {
                if (w) return;
                const t = new Audio("./voicechat_join.mp3"),
                    e = new Audio("./voicechat_connecting.mp3");
                e.loop = !0;
                const a = new Audio("./voicechat_leave.mp3"),
                    s = new Audio("./voicechat_onallowtalk.mp3"),
                    d = new Audio("./call_busy.mp3"),
                    i = new Audio("./call_connect.mp3"),
                    o = new Audio("./call_end.mp3"),
                    n = new Audio("./call_incoming.mp3");
                n.loop = !0;
                const r = new Audio("./call_ringing.mp3");
                r.loop = !0, w = {
                    join: t,
                    allowTalk: s,
                    leave: a,
                    connecting: e,
                    incoming: n,
                    end: o,
                    connect: i,
                    busy: d,
                    ringing: r
                }
            }
            async function A(t, e) {
                const a = await (0, l.px)("getGroupCall", {
                    call: e
                });
                if (!a) return;
                t = (0, u.mS)();
                const s = (0, f.Ip)(t, e.id);
                return t = (0, p.h9)(t, e.id, (0, o.cJ)(a.groupCall, ["connectionState"]), void 0, s?.isLoaded ? void 0 : a.groupCall.participantsCount), t = (0, I.g1)(t, (0, o.dU)(a.users, "id")), t = (0, I.Nl)(t, (0, o.dU)(a.chats, "id")), (0, u.UF)(t), a.groupCall
            }
            async function S(t, e, a) {
                const s = await (0, l.px)("fetchGroupCallParticipants", {
                    call: e,
                    offset: a
                });
                s && (t = (0, u.mS)(), t = (0, I.g1)(t, (0, o.dU)(s.users, "id")), t = (0, I.Nl)(t, (0, o.dU)(s.chats, "id")), (0, u.UF)(t))
            }(0, u.aJ)("toggleGroupCallPanel", ((t, e, a) => {
                const {
                    force: s,
                    tabId: d = (0, i.g0)()
                } = a || {};
                return (0, g.w)(t, {
                    isCallPanelVisible: "force" in (a || {}) ? s : !(0, m.nTw)(t, d).isCallPanelVisible
                }, d)
            })), (0, u.aJ)("subscribeToGroupCallUpdates", (async (t, e, a) => {
                const {
                    subscribed: s,
                    id: d
                } = a, i = (0, f.Ip)(t, d);
                i && (s && (await A(t, i), t = (0, u.mS)(), await S(t, i)), await (0, l.px)("toggleGroupCallStartSubscription", {
                    subscribed: s,
                    call: i
                }))
            })), (0, u.aJ)("createGroupCall", (async (t, e, a) => {
                const {
                    chatId: s,
                    tabId: d = (0, i.g0)()
                } = a, o = (0, m.hds)(t, s);
                if (!o) return;
                const n = await (0, l.px)("createGroupCall", {
                    peer: o
                });
                n && (t = (0, u.mS)(), t = (0, p.h9)(t, n.id, {
                    ...n,
                    chatId: s
                }), (0, u.UF)(t), e.requestMasterAndJoinGroupCall({
                    id: n.id,
                    accessHash: n.accessHash,
                    tabId: d
                }))
            })), (0, u.aJ)("createGroupCallInviteLink", (async (t, e, a) => {
                const {
                    tabId: s = (0, i.g0)()
                } = a || {}, o = (0, f.iT)(t);
                if (!o || !o.chatId) return;
                const n = (0, m.hds)(t, o.chatId);
                if (!n) return;
                const r = Boolean((0, h.Kl)(n));
                let c = (0, m.AWZ)(t, n.id)?.inviteLink;
                r && (c = await (0, l.px)("exportGroupCallInvite", {
                    call: o,
                    canSelfUnmute: !1
                })), c && ((0, d.eM)(c), e.showNotification({
                    message: "Link copied to clipboard",
                    tabId: s
                }))
            })), (0, u.aJ)("joinVoiceChatByLink", (async (t, e, a) => {
                const {
                    username: s,
                    inviteHash: d,
                    tabId: o = (0, i.g0)()
                } = a, r = await (0, b.A$)(t, s);
                if (!r) return void e.showNotification({
                    message: n.yE("NoUsernameFound"),
                    tabId: o
                });
                t = (0, u.mS)();
                const c = await (0, b.ad)(t, e, r, o);
                c?.groupCall && e.requestMasterAndJoinGroupCall({
                    id: c.groupCall.id,
                    accessHash: c.groupCall.accessHash,
                    inviteHash: d,
                    tabId: o
                })
            })), (0, u.aJ)("requestMasterAndJoinGroupCall", ((t, e, a) => {
                e.requestMasterAndCallAction({
                    action: "joinGroupCall",
                    payload: a,
                    tabId: a.tabId || (0, i.g0)()
                })
            })), (0, u.aJ)("requestMasterAndAcceptCall", ((t, e, a) => {
                e.requestMasterAndCallAction({
                    action: "acceptCall",
                    payload: void 0,
                    tabId: a?.tabId || (0, i.g0)()
                })
            })), (0, u.aJ)("joinGroupCall", (async (t, e, a) => {
                const {
                    chatId: s,
                    id: d,
                    accessHash: o,
                    inviteHash: n,
                    tabId: l = (0, i.g0)()
                } = a;
                if (!c.OL) return void e.showNotification({
                    message: "Sorry, your browser doesn't support group calls",
                    tabId: l
                });
                if (t.phoneCall) return void e.toggleGroupCallPanel({
                    tabId: l
                });
                ! function() {
                    const t = new(window.AudioContext || window.webkitAudioContext);
                    C = new Audio, y = t, C.srcObject = U(t), (0, r.A)(C)
                }(), F(), P(t = (0, u.mS)(), e, !0, l);
                const {
                    groupCalls: {
                        activeGroupCallId: h
                    }
                } = t;
                let I = d ? (0, f.Ip)(t, d) : (0, f.mD)(t, s);
                if (I && I.id === h) e.toggleGroupCallPanel({
                    tabId: l
                });
                else if (h) "leaveGroupCall" in e && e.leaveGroupCall({
                    rejoin: a,
                    tabId: l
                });
                else if (I && h === I.id) e.toggleGroupCallPanel({
                    tabId: l
                });
                else {
                    if (I || d && o || !s) !I && d && o && (I = await A(t, {
                        id: d,
                        accessHash: o
                    }));
                    else {
                        const a = (0, m.hds)(t, s);
                        if (!a) return;
                        await (0, b.ad)(t, e, a, l), t = (0, u.mS)(), I = (0, f.mD)(t, s)
                    }
                    I && (t = (0, u.mS)(), t = (0, p.h9)(t, I.id, {
                        ...I,
                        inviteHash: n
                    }, void 0, I.participantsCount + 1), t = {
                        ...t,
                        groupCalls: {
                            ...t.groupCalls,
                            activeGroupCallId: I.id
                        }
                    }, (0, u.UF)(t), e.toggleGroupCallPanel({
                        force: !1,
                        tabId: l
                    }))
                }
            })), (0, u.aJ)("playGroupCallSound", ((t, e, a) => {
                const {
                    sound: s
                } = a;
                w[s] && ("connecting" !== s && w.connecting.pause(), "incoming" !== s && w.incoming.pause(), "ringing" !== s && w.ringing.pause(), (0, r.A)(w[s]))
            })), (0, u.aJ)("loadMoreGroupCallParticipants", (t => {
                const e = (0, f.iT)(t);
                e && S(t, e, e.nextOffset)
            })), (0, u.aJ)("requestMasterAndRequestCall", ((t, e, a) => {
                e.requestMasterAndCallAction({
                    action: "requestCall",
                    payload: a,
                    tabId: a.tabId || (0, i.g0)()
                })
            })), (0, u.aJ)("requestCall", ((t, e, a) => {
                const {
                    userId: s,
                    isVideo: d,
                    tabId: o = (0, i.g0)()
                } = a;
                t.phoneCall ? e.toggleGroupCallPanel({
                    tabId: o
                }) : (0, m.mBe)(t, s) && (F(), P(t = (0, u.mS)(), e, d, o), t = (0, u.mS)(), t = {
                    ...t,
                    phoneCall: {
                        id: "",
                        state: "requesting",
                        participantId: s,
                        isVideo: d,
                        adminId: t.currentUserId
                    }
                }, (0, u.UF)(t), e.toggleGroupCallPanel({
                    force: !1,
                    tabId: o
                }))
            }));
            const U = t => {
                const e = t.createOscillator(),
                    a = e.connect(t.createMediaStreamDestination());
                return e.start(), new MediaStream([Object.assign(a.stream.getAudioTracks()[0], {
                    enabled: !1
                })])
            };

            function T() {
                return C
            }

            function M() {
                return y
            }

            function x() {
                C?.pause(), y = void 0, C = void 0
            }

            function P(t, e, a) {
                for (var s = arguments.length, d = new Array(s > 3 ? s - 3 : 0), o = 3; o < s; o++) d[o - 3] = arguments[o];
                let [r = (0, i.g0)()] = d;
                a ? navigator.mediaDevices.getUserMedia({
                    video: !0
                }).then((a => {
                    0 === a.getVideoTracks().length ? e.showNotification({
                        message: n.yE("Call.Camera.Error"),
                        tabId: r
                    }) : (a.getTracks().forEach((t => t.stop())), J(t, e, r))
                })).catch((() => {
                    e.showNotification({
                        message: n.yE("Call.Camera.Error"),
                        tabId: r
                    })
                })) : J(t, e, r)
            }

            function J(t, e) {
                for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), d = 2; d < a; d++) s[d - 2] = arguments[d];
                let [o = (0, i.g0)()] = s;
                navigator.mediaDevices.getUserMedia({
                    audio: !0
                }).then((t => {
                    0 === t.getAudioTracks().length ? e.showNotification({
                        message: n.yE("RequestAcces.Error.HaveNotAccess.Call"),
                        tabId: o
                    }) : t.getTracks().forEach((t => t.stop()))
                })).catch((() => {
                    e.showNotification({
                        message: n.yE("RequestAcces.Error.HaveNotAccess.Call"),
                        tabId: o
                    })
                }))
            }
        },
        80840: (t, e, a) => {
            a.d(e, {
                R6: () => c,
                c5: () => l,
                h9: () => n,
                um: () => r
            });
            var s = a(87894),
                d = a(29807),
                i = a(71331),
                o = a(16350);

            function n(t, e, a, d, i) {
                const o = Object.values({
                    ...t.groupCalls.byId[e]?.participants,
                    ...a.participants
                }).filter((t => {
                    let {
                        isLeft: e
                    } = t;
                    return !e
                })).reduce(((t, e) => (t[e.id] = e, t)), {});
                return {
                    ...t,
                    groupCalls: {
                        ...t.groupCalls,
                        byId: {
                            ...t.groupCalls.byId,
                            [e]: {
                                ...t.groupCalls.byId[e],
                                ...(0, s.cJ)(a, ["participantsCount"]),
                                ...d && {
                                    participantsCount: t.groupCalls.byId[e].participantsCount + d
                                },
                                ...void 0 !== i && {
                                    participantsCount: i
                                },
                                participants: o
                            }
                        }
                    }
                }
            }

            function r(t, e) {
                const a = (0, i.Ip)(t, e);
                return a && a.chatId && (0, d.hds)(t, a.chatId) && (t = (0, o.lt)(t, a.chatId, {
                    groupCallId: void 0
                })), {
                    ...t,
                    groupCalls: {
                        ...t.groupCalls,
                        byId: {
                            ...(0, s.cJ)(t.groupCalls.byId, [e.toString()])
                        }
                    }
                }
            }

            function c(t, e, a) {
                return t.groupCalls.activeGroupCallId ? n(t, t.groupCalls.activeGroupCallId, e, void 0, a) : t
            }

            function l(t, e, a, s) {
                let d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                const o = (0, i.Ip)(t, e);
                return o ? n(t, e, {
                    participants: {
                        ...o.participants,
                        [a]: {
                            ...o.participants[a],
                            ...s
                        }
                    }
                }, s.isLeft ? d ? 0 : -1 : o.participants[a] || d ? 0 : 1) : t
            }
        }
    }
]);