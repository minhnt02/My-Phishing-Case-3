"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [9357], {
        31481: (e, a, n) => {
            n.d(a, {
                Oig: () => t
            });
            const t = !1,
                o = ("undefined" != typeof window && window.innerHeight, Math.round(450), new Set(["newMessage", "newScheduledMessage", "deleteMessages", "deleteScheduledMessages", "deleteHistory", "updateThreadInfos"]), new Set(["image/png", "image/jpeg", "image/gif"])),
                s = new Set(["video/mp4", "video/quicktime"]);
            new Set(["audio/mp3", "audio/ogg", "audio/wav", "audio/mpeg", "audio/flac", "audio/aac", "audio/m4a", "audio/mp4", "audio/x-m4a"]), new Set([...o, ...s]), new Set(["t.me", "web.t.me", "a.t.me", "k.t.me", "z.t.me"]), new Set(["AU", "BD", "CA", "CO", "EG", "HN", "IE", "IN", "JO", "MX", "MY", "NI", "NZ", "PH", "PK", "SA", "SV", "US"])
        },
        49357: (e, a, n) => {
            n.d(a, {
                C: () => r
            });
            var t = n(31481);
            const o = new Map,
                s = function() {
                    const e = new Set;

                    function a(a) {
                        e.delete(a)
                    }
                    return {
                        runCallbacks: function() {
                            for (var a = arguments.length, n = new Array(a), t = 0; t < a; t++) n[t] = arguments[t];
                            e.forEach((e => {
                                e(...n)
                            }))
                        },
                        addCallback: function(n) {
                            return e.add(n), () => {
                                a(n)
                            }
                        },
                        removeCallback: a,
                        hasCallbacks: function() {
                            return Boolean(e.size)
                        }
                    }
                }();

            function r(e, a) {
                function n(e, n) {
                    e.channel = a, n ? postMessage(e, n) : postMessage(e)
                }! function(e) {
                    self.onerror = a => {
                        console.error(a), e({
                            type: "unhandledError",
                            error: {
                                message: a.error.message || "Uncaught exception in worker"
                            }
                        })
                    }, self.addEventListener("unhandledrejection", (a => {
                        console.error(a), e({
                            type: "unhandledError",
                            error: {
                                message: a.reason.message || "Uncaught rejection in worker"
                            }
                        })
                    }))
                }(n), s.addCallback((s => {
                    s.data?.channel === a && async function(e, a, n, s) {
                        switch (s || (s = e => {
                                n({
                                    type: "update",
                                    update: e
                                })
                            }), a.type) {
                            case "init": {
                                const {
                                    args: n
                                } = a, t = "function" == typeof e ? e("init", s, ...n) : e.init?.(s, ...n);
                                await t;
                                break
                            }
                            case "callMethod": {
                                const {
                                    messageId: s,
                                    name: r,
                                    args: i,
                                    withCallback: c
                                } = a;
                                try {
                                    if ("function" != typeof e && !e[r]) return;
                                    if (s && c) {
                                        const e = function() {
                                            for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                                            const o = a[a.length - 1];
                                            var r;
                                            n({
                                                type: "methodCallback",
                                                messageId: s,
                                                callbackArgs: a
                                            }, (r = o) instanceof ArrayBuffer || r instanceof ImageBitmap ? [o] : void 0)
                                        };
                                        o.set(s, e), i.push(e)
                                    }
                                    const a = "function" == typeof e ? await e(r, ...i) : await e[r](...i),
                                        {
                                            arrayBuffer: t
                                        } = "object" == typeof a && "arrayBuffer" in a && a || {};
                                    s && n({
                                        type: "methodResponse",
                                        messageId: s,
                                        response: a
                                    }, t ? [t] : void 0)
                                } catch (e) {
                                    t.Oig && console.error(e), s && n({
                                        type: "methodResponse",
                                        messageId: s,
                                        error: {
                                            message: e.message
                                        }
                                    })
                                }
                                s && o.delete(s);
                                break
                            }
                            case "cancelProgress": {
                                const e = o.get(a.messageId);
                                e && (e.isCanceled = !0);
                                break
                            }
                        }
                    }(e, s.data, n)
                }))
            }
            onmessage = s.runCallbacks
        }
    }
]);