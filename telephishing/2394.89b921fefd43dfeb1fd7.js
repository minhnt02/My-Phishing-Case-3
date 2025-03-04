"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [2394], {
        83320: (e, t, a) => {
            a.r(t), a.d(t, {
                ActiveCallHeader: () => tt,
                GroupCall: () => et,
                PhoneCall: () => st,
                RatePhoneCallModal: () => ct
            });
            var n = a(12859),
                i = a(82393),
                o = a(31481);

            function s(e) {
                return 0 | e
            }

            function r(e) {
                return e >>> 0
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
                if (!e) return 0;
                const {
                    length: a
                } = e;
                let n = 0;
                for (let t = 0; t < a; t++) n += e[t] * e[t];
                const i = Math.sqrt(n / a) / 255;
                return Math.min(1, i * t)
            }

            function l(e) {
                return {
                    id: e.id,
                    name: e.name,
                    "rtcp-fbs": e.feedbackTypes,
                    clockrate: e.clockrate,
                    parameters: e.parameters,
                    channels: e.channels
                }
            }
            const d = .1,
                u = "getDisplayMedia" in (navigator?.mediaDevices || {}),
                p = navigator?.mediaDevices?.getSupportedConstraints().echoCancellation,
                m = navigator?.mediaDevices?.getSupportedConstraints().noiseSuppression,
                g = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e || !e.sdp) throw Error("Failed parsing SDP: session description is null");
                    const a = e.sdp.split("\r\nm=").map(((e, t) => 0 === t ? e : `m=${e}`)).reduce(((e, t) => {
                            const a = t.match(/^m=(.+?)\s/)?.[1] || "header";
                            return e[e.hasOwnProperty(a) && "video" === a ? "screencast" : a] = t.split("\r\n").filter(Boolean), e
                        }), {}),
                        n = (e, t) => t ? a[t]?.find((t => t.startsWith(e)))?.substr(e.length) : Object.values(a).map((t => t.find((t => t.startsWith(e)))?.substr(e.length))).filter(Boolean)[0],
                        i = e => a[e].filter((e => e.startsWith("a=extmap"))).map((e => {
                            const [, t, a] = e.match(/extmap:(\d+)(?:\/.+)?\s(.+)/);
                            return {
                                id: Number(t),
                                uri: a
                            }
                        })),
                        o = e => {
                            const t = a[e].filter((e => e.startsWith("a=rtpmap"))).map((e => {
                                    const [, t, a] = e.match(/:(\d+)\s(.+)/) || [], [n, i, o] = a.split("/");
                                    return {
                                        id: Number(t),
                                        name: n,
                                        clockrate: Number(i),
                                        ...o && {
                                            channels: Number(o)
                                        }
                                    }
                                })),
                                n = a[e].filter((e => e.startsWith("a=rtcp-fb"))).map((e => {
                                    const [, t, a] = e.match(/:(\d+)\s(.+)/) || [], [n, i] = a.split(" ");
                                    return {
                                        id: Number(t),
                                        type: n,
                                        subtype: i || ""
                                    }
                                })),
                                i = a[e].filter((e => e.startsWith("a=fmtp"))).map((e => {
                                    const [, t, a] = e.match(/:(\d+)\s(.+)/) || [], n = a.split(";").reduce(((e, t) => {
                                        const [a, n] = t.split("=");
                                        return e[a] = n, e
                                    }), {});
                                    if (!Object.values(n).some((e => !e))) return {
                                        id: Number(t),
                                        data: n
                                    }
                                })).filter(Boolean);
                            return t.map((e => {
                                const t = i.filter((t => t.id === e.id)).map((e => e.data)).reduce(((e, t) => Object.assign(e, t)), {}),
                                    a = n.filter((t => t.id === e.id)).map((e => ({
                                        type: e.type,
                                        subtype: e.subtype
                                    })));
                                return {
                                    ...e,
                                    ...Object.keys(t).length > 0 && {
                                        parameters: t
                                    },
                                    ...a.length > 0 && {
                                        feedbackTypes: a
                                    }
                                }
                            }))
                        },
                        r = n("a=ssrc:", "audio"),
                        c = r && Number(r.split(" ")[0]),
                        l = n("a=ssrc-group:", "video")?.split(" ") || void 0,
                        d = n("a=ssrc-group:", "screencast")?.split(" ") || void 0;
                    if (!l) throw Error("Failed parsing SDP: no video ssrc");
                    const [u, p] = n("a=fingerprint:")?.split(" ") || [], m = n("a=setup:");
                    if (!u || !p) throw Error("Failed parsing SDP: no fingerprint");
                    console.log(a);
                    const g = n("a=ice-ufrag:"),
                        f = n("a=ice-pwd:");
                    if (!g || !f) throw Error("Failed parsing SDP: no ICE ufrag or pwd");
                    return {
                        fingerprints: [{
                            fingerprint: p,
                            hash: u,
                            setup: t ? m : "active"
                        }],
                        pwd: f,
                        ufrag: g,
                        ...c && {
                            ssrc: s(c)
                        },
                        ...l && {
                            "ssrc-groups": [{
                                semantics: l[0],
                                sources: l.slice(1, l.length).map(Number).map(s)
                            }, t && d && {
                                semantics: d[0],
                                sources: d.slice(1, d.length).map(Number).map(s)
                            }].filter(Boolean)
                        },
                        ...t && {
                            audioExtmap: i("audio"),
                            videoExtmap: i("video"),
                            screencastExtmap: i("screencast"),
                            audioPayloadTypes: o("audio"),
                            videoPayloadTypes: o("video"),
                            screencastPayloadTypes: o("screencast")
                        }
                    }
                },
                f = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const i = [],
                        o = e => {
                            i.push(e)
                        },
                        {
                            sessionId: s,
                            ssrcs: c,
                            audioExtensions: l,
                            videoExtensions: d,
                            audioPayloadTypes: u,
                            videoPayloadTypes: p,
                            transport: {
                                ufrag: m,
                                pwd: g,
                                fingerprints: f,
                                candidates: h
                            }
                        } = e;
                    o("v=0"), o(`o=- ${s} 2 IN IP4 0.0.0.0`), o("s=-"), o("t=0 0"), o("a=ice-options:trickle"), o("a=msid-semantic:WMS *"), o(`a=group:BUNDLE ${c.map((e=>e.mid)).join(" ")}${a?"":" "+(n?"3":"2")}`), n || o("a=ice-lite");
                    const y = e => {
                            if (e.sdpString) o(`a=${e.sdpString}`);
                            else {
                                let t = "";
                                t += "a=candidate:", t += `${e.foundation} ${e.component} ${e.protocol} ${e.priority} ${e.ip} ${e.port} typ ${e.type}`, "rel-addr" in e && (t += ` raddr ${e["rel-addr"]} rport ${e["rel-port"]}`), t += ` generation ${e.generation}`, o(t)
                            }
                        },
                        v = () => {
                            o(`a=ice-ufrag:${m}`), o(`a=ice-pwd:${g}`), f.forEach((e => {
                                o(`a=fingerprint:${e.hash} ${e.fingerprint}`), o(`a=setup:${n?e.setup:"passive"}`)
                            })), h.forEach(y)
                        },
                        A = e => {
                            const {
                                channels: t,
                                id: a,
                                name: n,
                                clockrate: i,
                                parameters: s
                            } = e;
                            if (o(`a=rtpmap:${a} ${n}/${i}${t?`/${t}`:""}`), s) {
                                const e = Object.keys(s).map((e => `${e}=${s[e]};`)).join(" ");
                                o(`a=fmtp:${a} ${e}`)
                            }
                            e["rtcp-fbs"]?.forEach((e => {
                                o(`a=rtcp-fb:${a} ${e.type}${e.subtype?` ${e.subtype}`:""}`)
                            }))
                        },
                        C = e => {
                            const a = e.isVideo ? p : u,
                                i = e.isVideo ? "video" : "audio";
                            if (o(`m=${i} ${e.isMain?1:0} RTP/SAVPF ${a.map((e=>e.id)).join(" ")}`), o("c=IN IP4 0.0.0.0"), o("b=AS:1300"), o(`a=mid:${e.mid}`), o("a=rtcp-mux"), a.forEach(A), o("a=rtcp:1 IN IP4 0.0.0.0"), e.isVideo && o("a=rtcp-rsize"), (e.isVideo ? d : l).forEach((e => {
                                    let {
                                        id: t,
                                        uri: a
                                    } = e;
                                    o(`a=extmap:${t} ${a}`)
                                })), e.isRemoved) o("a=inactive");
                            else {
                                if (v(), n) o("a=sendrecv"), o("a=bundle-only");
                                else {
                                    if (t) return void o("a=recvonly");
                                    e.isMain ? o("a=sendrecv") : (o("a=sendonly"), o("a=bundle-only"))
                                }
                                e.sourceGroups.forEach((t => {
                                    t.semantics && o(`a=ssrc-group:${t.semantics} ${t.sources.map(r).join(" ")}`), t.sources.forEach((t => {
                                        const a = r(t);
                                        o(`a=ssrc:${a} cname:${e.endpoint}`), o(`a=ssrc:${a} msid:${e.endpoint} ${e.endpoint}`), o(`a=ssrc:${a} mslabel:${e.endpoint}`), o(`a=ssrc:${a} label:${e.endpoint}`)
                                    }))
                                }))
                            }
                        };
                    return n ? c.filter(C) : c.filter((e => "0" === e.mid || "1" === e.mid)).map(C), a || (o("m=application 1 UDP/DTLS/SCTP webrtc-datachannel"), o("c=IN IP4 0.0.0.0"), v(), o("a=ice-options:trickle"), o("a=mid:" + (n ? "3" : a ? "1" : "2")), o("a=sctp-port:5000"), o("a=max-message-size:262144")), n || c.filter((e => "0" !== e.mid && "1" !== e.mid)).map(C), `${i.join("\n")}\n`
                },
                h = e => {
                    const t = e.createOscillator(),
                        a = t.connect(e.createMediaStreamDestination());
                    return t.start(), new MediaStream([Object.assign(a.stream.getAudioTracks()[0], {
                        enabled: !1
                    })])
                },
                y = function() {
                    let {
                        width: e = 640,
                        height: t = 480
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const a = Object.assign(document.createElement("canvas"), {
                            width: e,
                            height: t
                        }),
                        n = a.getContext("2d");
                    if (!n) throw Error("Cannot create canvas ctx");
                    n.fillRect(0, 0, e, t);
                    const i = a.captureStream();
                    return new MediaStream([Object.assign(i.getVideoTracks()[0], {
                        enabled: !1
                    })])
                };
            var v = a(9705),
                A = a(41733);
            let C, b;

            function w(e) {
                C && (C.screenshareDataChannel?.close(), C.screenshareConnection?.close(), e || C.onUpdate?.({
                    "@type": "updateGroupCallLeavePresentation"
                }))
            }

            function E(e) {
                return C?.streams?.[e]
            }

            function S(e, t) {
                const a = C?.participantFunctions?.[e];
                a && a.setVolume?.(t)
            }

            function k(e, t) {
                const a = t || C?.myId,
                    n = a && E(a)?.[e];
                return !!n && n.getTracks()[0]?.enabled
            }

            function P(e) {
                C?.onUpdate?.({
                    "@type": "updateGroupCallStreams",
                    userId: e,
                    hasAudioStream: k("audio", e),
                    hasVideoStream: k("video", e),
                    hasPresentationStream: k("presentation", e),
                    amplitude: C.speaking?.[e]
                })
            }
            async function T(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "user";
                if ("audio" === e && C?.audioStream) return C.audioStream;
                if ("presentation" === e) return navigator.mediaDevices.getDisplayMedia({
                    audio: !1,
                    video: !0
                });
                const a = await navigator.mediaDevices.getUserMedia({
                    audio: "audio" === e && {
                        ...p && {
                            echoCancellation: !0
                        },
                        ...m && {
                            noiseSuppression: !0
                        }
                    },
                    video: "video" === e && {
                        facingMode: t
                    }
                });
                if (C && "audio" === e && (C.audioStream = a), "video" === e) {
                    const e = document.createElement("video");
                    e.srcObject = a;
                    const t = new v.A;
                    e.oncanplay = () => t.resolve(), await t.promise
                }
                return a
            }
            async function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if (!(C && C.myId && C.connection && C.streams)) return;
                const a = E(C.myId)?.[e];
                if (!a) return;
                const n = a.getTracks()[0];
                if (!n) return;
                const i = [...C.connection.getSenders(), ...C.screenshareConnection?.getSenders() || []].find((e => n.id === e.track?.id));
                if (i) {
                    t = void 0 === t ? !n.enabled : t;
                    try {
                        if (t && !n.enabled) {
                            const t = await T(e);
                            if (await i.replaceTrack(t.getTracks()[0]), C.streams[C.myId][e] = t, "video" === e) C.facingMode = "user";
                            else if ("audio" === e) {
                                const {
                                    audioContext: e
                                } = C;
                                if (!e) return;
                                const a = C.audioSource || e.createMediaStreamSource(t),
                                    n = C.audioAnalyser || e.createAnalyser();
                                n.minDecibels = -100, n.maxDecibels = -30, n.smoothingTimeConstant = .05, n.fftSize = 1024, a.connect(n), C = {
                                    ...C,
                                    audioSource: a,
                                    audioAnalyser: n,
                                    participantFunctions: {
                                        ...C.participantFunctions,
                                        [C.myId]: {
                                            ...C.participantFunctions?.[C.myId],
                                            getCurrentAmplitude: () => {
                                                const e = new Uint8Array(n.frequencyBinCount);
                                                return n.getByteFrequencyData(e), c(e, 1.5)
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (!t && n.enabled) {
                            const t = "audio" === e ? C.silence : C.black;
                            if (!t) return;
                            await i.replaceTrack(t.getTracks()[0]), C.streams[C.myId][e] = t, "video" === e && (C.facingMode = void 0), "audio" !== e ? n.stop() : (C.audioSource?.disconnect(), C.audioAnalyser?.disconnect())
                        }
                        P(C.myId), "presentation" !== e || t || w(!0)
                    } catch (e) {}
                }
            }

            function I(e) {
                C?.onUpdate?.({
                    "@type": "updateGroupCallConnectionState",
                    connectionState: e
                })
            }

            function M() {
                C && (C.myId && C.streams?.[C.myId] && Object.values(C.streams[C.myId] || {}).forEach((e => {
                    e?.getTracks().forEach((e => {
                        e.stop()
                    }))
                })), C.audioStream?.getTracks().forEach((e => {
                    e.stop()
                })), w(!0), C.dataChannel?.close(), C.connection?.close(), I("disconnected"), C.analyserInterval && clearInterval(C.analyserInterval), C = void 0)
            }

            function x() {
                C && C.participantFunctions && Object.keys(C.participantFunctions).forEach((e => {
                    const {
                        getCurrentAmplitude: t
                    } = C.participantFunctions[Number(e)];
                    if (t) {
                        const a = t(),
                            n = C.speaking[e] || 0;
                        C.speaking[e] = a, (a > d && n <= d || a <= d && n > d) && P(e)
                    }
                }))
            }
            async function V(e) {
                if (!C) return;
                const {
                    participants: t,
                    conference: a,
                    connection: n,
                    myId: i
                } = C;
                if (!(t && a && n && a.ssrcs && a.transport && i)) return;
                if (e.find((e => e.isSelf && e.source !== C?.conference?.ssrcs?.find((e => e.isMain && !e.isVideo))?.sourceGroups[0].sources[0]))) return void M();
                const o = [];
                if (e.forEach((e => {
                        if (e.isSelf) return void(e.isMuted && !e.canSelfUnmute && (N("audio", !1), N("video", !1), N("presentation", !1)));
                        const {
                            isLeft: t
                        } = e, n = e.isMuted || e.isMutedByMe, i = !e.isVideoJoined || !e.video || t, s = !e.presentation || t;
                        let r = !1,
                            c = !1,
                            l = !1;
                        a.ssrcs.filter((t => t.userId === e.id)).forEach((t => {
                            t.isVideo || (t.sourceGroups[0].sources[0] === e.source && (c = !0), t.isRemoved = n), t.isVideo && (t.isPresentation || (e.video && t.endpoint === e.video.endpoint && (r = !0), t.isRemoved = i), t.isPresentation && (e.presentation && t.endpoint === e.presentation.endpoint && (l = !0), t.isRemoved = s))
                        })), n || c || (C.lastMid = C.lastMid + 1, a.ssrcs.push({
                            userId: e.id,
                            isMain: !1,
                            endpoint: `audio${e.source}`,
                            isVideo: !1,
                            sourceGroups: [{
                                sources: [e.source]
                            }],
                            mid: C.lastMid.toString()
                        })), i || r || !e.video || (C.lastMid = C.lastMid + 1, o.push(e.video.endpoint), a.ssrcs.push({
                            userId: e.id,
                            isMain: !1,
                            endpoint: e.video.endpoint,
                            isVideo: !0,
                            sourceGroups: e.video.sourceGroups,
                            mid: C.lastMid.toString()
                        })), s || l || !e.presentation || (C.lastMid = C.lastMid + 1, a.ssrcs.push({
                            isPresentation: !0,
                            userId: e.id,
                            isMain: !1,
                            endpoint: e.presentation.endpoint,
                            isVideo: !0,
                            sourceGroups: e.presentation.sourceGroups,
                            mid: C.lastMid.toString()
                        }))
                    })), C.updatingParticipantsQueue) return void C.updatingParticipantsQueue.push(a);
                C.updatingParticipantsQueue = [];
                const s = f(a);
                await n.setRemoteDescription({
                    type: "offer",
                    sdp: s
                });
                try {
                    const e = await n.createAnswer();
                    if (await n.setLocalDescription(e), P(i), C.updatingParticipantsQueue.length > 0)
                        for (const e of C.updatingParticipantsQueue) {
                            await n.setRemoteDescription({
                                type: "offer",
                                sdp: f(e)
                            });
                            const t = await n.createAnswer();
                            await n.setLocalDescription(t), P(i)
                        }
                    C.updatingParticipantsQueue = void 0
                } catch (e) {
                    console.error(e)
                }
            }

            function G(e) {
                if (!(C && C.audioElement && C.audioContext && C.mediaStream)) return;
                const t = C.conference?.ssrcs?.find((t => t.endpoint === e.track.id));
                if (!t || !t.userId) return;
                const {
                    userId: a,
                    isPresentation: n
                } = t, i = C.participants?.find((e => e.id === a)), o = "video" === e.track.kind ? n ? "presentation" : "video" : "audio";
                e.track.onended = () => {
                    delete C?.streams?.[a][o], P(a)
                };
                const s = e.streams[0];
                if ("audio" === e.track.kind) {
                    const {
                        mediaStream: e
                    } = C, t = new window.AudioContext, n = t.createMediaStreamSource(s), o = t.createGain();
                    o.gain.value = (i?.volume || 1e4) / 1e4;
                    const r = t.createGain();
                    o.gain.value = 1;
                    const l = t.createAnalyser();
                    l.minDecibels = -100, l.maxDecibels = -30, l.smoothingTimeConstant = .05, l.fftSize = 1024, n.connect(l).connect(r).connect(o).connect(t.destination), e.addTrack(n.mediaStream.getAudioTracks()[0]);
                    const d = new Audio;
                    d.srcObject = s, d.muted = !0, d.remove(), C = {
                        ...C,
                        participantFunctions: {
                            ...C.participantFunctions,
                            [a]: {
                                ...C.participantFunctions?.[a],
                                setVolume: e => {
                                    o.gain.value = e > 1 ? 2 * e : e
                                },
                                toggleMute: e => {
                                    r.gain.value = e ? 0 : 1
                                },
                                getCurrentAmplitude: () => {
                                    const e = new Uint8Array(l.frequencyBinCount);
                                    return l.getByteFrequencyData(e), c(e, 1.5)
                                }
                            }
                        }
                    }
                }
                C = {
                    ...C,
                    streams: {
                        ...C.streams,
                        [a]: {
                            ...C.streams?.[a],
                            [o]: s
                        }
                    }
                }, P(a)
            }

            function B(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const n = new RTCPeerConnection,
                    i = a ? void 0 : function(e) {
                        const t = e.createDataChannel("data", {
                            id: 0
                        });
                        return t.onopen = () => {}, t.onmessage = e => {
                            JSON.parse(e.data).colibriClass
                        }, t.onerror = e => {
                            console.log("%conerror", "background: green; font-size: 5em"), console.error(e)
                        }, t
                    }(n);
                return e.forEach((e => e.getTracks().forEach((t => {
                    n.addTrack(t, e)
                })))), a || (n.oniceconnectionstatechange = () => {
                    const e = n.iceConnectionState;
                    console.log("iceconnectionstatechange", e), "connected" === e || "completed" === e ? I("connected") : "checking" === e || "new" === e ? I("connecting") : "disconnected" === n.iceConnectionState && I("reconnecting")
                }), n.onconnectionstatechange = () => {
                    console.log("connectionstatechange", n.connectionState)
                }, n.ontrack = G, n.onnegotiationneeded = async () => {
                    if (!C) return;
                    console.log("onnegotiationneeded");
                    const {
                        myId: i
                    } = C;
                    if (!i) return;
                    const o = await n.createOffer({
                        offerToReceiveVideo: !0,
                        offerToReceiveAudio: !a
                    });
                    if (console.log("offer created"), await n.setLocalDescription(o), console.log("local desc set"), !o.sdp) return;
                    const s = g(o),
                        r = a ? void 0 : {
                            userId: "",
                            sourceGroups: [{
                                sources: [s.ssrc || 0]
                            }],
                            isRemoved: a,
                            isMain: !0,
                            isVideo: !1,
                            isPresentation: a,
                            endpoint: a ? "1" : "0",
                            mid: a ? "1" : "0"
                        },
                        c = s["ssrc-groups"] && {
                            isPresentation: a,
                            userId: "",
                            sourceGroups: s["ssrc-groups"],
                            isMain: !0,
                            isVideo: !0,
                            endpoint: a ? "0" : "1",
                            mid: a ? "0" : "1"
                        },
                        l = a ? C.screenshareConference : C.conference,
                        d = [];
                    a ? (c && d.push(c), r && d.push(r)) : (r && d.push(r), c && d.push(c));
                    const u = e.find((e => "audio" === e.getTracks()[0].kind)),
                        p = e.find((e => "video" === e.getTracks()[0].kind));
                    C = {
                        ...C,
                        ...a ? {
                            screenshareConference: {
                                ...l,
                                ssrcs: d
                            }
                        } : {
                            conference: {
                                ...l,
                                ssrcs: d
                            }
                        },
                        streams: {
                            ...C.streams,
                            [i]: {
                                ...C.streams?.[i],
                                ...u && {
                                    audio: u
                                },
                                ...!a && p ? {
                                    video: p
                                } : {
                                    presentation: p
                                }
                            }
                        }
                    }, P(i), t(s)
                }, {
                    connection: n,
                    dataChannel: i
                }
            }

            function O() {
                b?.onUpdate({
                    ...b.mediaState,
                    "@type": "updatePhoneCallMediaState"
                })
            }

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "user";
                return "presentation" === e ? navigator.mediaDevices.getDisplayMedia({
                    audio: !1,
                    video: !0
                }) : navigator.mediaDevices.getUserMedia({
                    audio: "audio" === e && {
                        ...p && {
                            echoCancellation: !0
                        },
                        ...m && {
                            noiseSuppression: !0
                        }
                    },
                    video: "video" === e && {
                        facingMode: t
                    }
                })
            }
            async function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if (!b) return;
                const a = "audio" === e ? b.streams.ownAudio : "video" === e ? b.streams.ownVideo : b.streams.ownPresentation;
                if (!a) return;
                const n = a.getTracks()[0];
                if (!n) return;
                const i = b.connection.getSenders().find((e => n.id === e.track?.id));
                if (i) {
                    t = void 0 === t ? !n.enabled : t;
                    try {
                        if (t && !n.enabled) {
                            const t = await R(e);
                            t.getTracks()[0].onended = () => {
                                U(e, !1)
                            }, await i.replaceTrack(t.getTracks()[0]), "audio" === e ? b.streams.ownAudio = t : "video" === e ? (b.streams.ownVideo = t, b.facingMode = "user") : b.streams.ownPresentation = t, "video" !== e && "presentation" !== e || U("video" === e ? "presentation" : "video", !1)
                        } else if (!t && n.enabled) {
                            n.stop();
                            const t = "audio" === e ? b.silence : "video" === e ? b.blackVideo : b.blackPresentation;
                            if (!t) return;
                            await i.replaceTrack(t.getTracks()[0]), "audio" === e ? b.streams.ownAudio = t : "video" === e ? b.streams.ownVideo = t : b.streams.ownPresentation = t
                        }
                        O(), _()
                    } catch (e) {
                        console.error(e)
                    }
                }
            }

            function D() {
                b && (b.streams.ownVideo?.getTracks().forEach((e => e.stop())), b.streams.ownPresentation?.getTracks().forEach((e => e.stop())), b.streams.ownAudio?.getTracks().forEach((e => e.stop())), b.dataChannel.close(), b.connection.close(), b = void 0)
            }

            function _() {
                if (!b) return;
                const {
                    emitSignalingData: e,
                    streams: t
                } = b;
                e({
                    "@type": "MediaState",
                    videoRotation: 0,
                    isMuted: !t.ownAudio?.getTracks()[0].enabled,
                    isBatteryLow: !0,
                    videoState: t.ownVideo?.getTracks()[0].enabled ? "active" : "inactive",
                    screencastState: t.ownPresentation?.getTracks()[0].enabled ? "active" : "inactive"
                })
            }

            function L(e) {
                if (!b || b.isOutgoing) return e;
                const {
                    payloadTypes: t
                } = e, a = t.findIndex((e => "VP8" === e.name)), n = t[a], i = t.findIndex((e => Number(e.parameters?.apt) === n.id));
                return e.payloadTypes = [t[a], t[i]], e
            }

            function $(e) {
                if (!b) return;
                const {
                    emitSignalingData: t
                } = b;
                e.ssrc && e["ssrc-groups"] && e["ssrc-groups"][0] && e["ssrc-groups"][1] && t({
                    "@type": "InitialSetup",
                    fingerprints: e.fingerprints,
                    ufrag: e.ufrag,
                    pwd: e.pwd,
                    audio: {
                        ssrc: r(e.ssrc).toString(),
                        ssrcGroups: [],
                        payloadTypes: e.audioPayloadTypes,
                        rtpExtensions: e.audioExtmap
                    },
                    video: L({
                        ssrc: r(e["ssrc-groups"][0].sources[0]).toString(),
                        ssrcGroups: [{
                            semantics: e["ssrc-groups"][0].semantics,
                            ssrcs: e["ssrc-groups"][0].sources.map(r)
                        }],
                        payloadTypes: e.videoPayloadTypes,
                        rtpExtensions: e.videoExtmap
                    }),
                    screencast: L({
                        ssrc: r(e["ssrc-groups"][1].sources[0]).toString(),
                        ssrcGroups: [{
                            semantics: e["ssrc-groups"][1].semantics,
                            ssrcs: e["ssrc-groups"][1].sources.map(r)
                        }],
                        payloadTypes: e.screencastPayloadTypes,
                        rtpExtensions: e.screencastExtmap
                    })
                })
            }
            async function F(e) {
                if (b && b.connection) switch (e["@type"]) {
                    case "MediaState":
                        b.mediaState = e, O(), _();
                        break;
                    case "Candidates": {
                        const {
                            pendingCandidates: t,
                            gotInitialSetup: a
                        } = b;
                        e.candidates.forEach((e => {
                            t.push(e.sdpString)
                        })), a && await J();
                        break
                    }
                    case "InitialSetup": {
                        const {
                            connection: t,
                            isOutgoing: a
                        } = b;
                        if (!t) return;
                        const n = {
                            transport: {
                                candidates: [],
                                ufrag: e.ufrag,
                                pwd: e.pwd,
                                fingerprints: e.fingerprints,
                                "rtcp-mux": !1,
                                xmlns: ""
                            },
                            sessionId: Date.now(),
                            ssrcs: [e.audio && {
                                isVideo: !1,
                                isMain: !1,
                                userId: "123",
                                endpoint: "0",
                                mid: "0",
                                sourceGroups: [{
                                    sources: [e.audio.ssrc]
                                }]
                            }, e.video && {
                                isVideo: !0,
                                isPresentation: !1,
                                isMain: !1,
                                userId: "123",
                                endpoint: "1",
                                mid: "1",
                                sourceGroups: e.video.ssrcGroups.map((e => ({
                                    semantics: e.semantics,
                                    sources: e.ssrcs
                                })))
                            }, e.screencast && {
                                isVideo: !0,
                                isPresentation: !0,
                                isMain: !1,
                                userId: "123",
                                endpoint: "2",
                                mid: "2",
                                sourceGroups: e.screencast.ssrcGroups.map((e => ({
                                    semantics: e.semantics,
                                    sources: e.ssrcs
                                })))
                            }],
                            audioPayloadTypes: e.audio.payloadTypes?.map(l) || [],
                            audioExtensions: e.audio.rtpExtensions,
                            videoPayloadTypes: L(e.video).payloadTypes?.map(l) || [],
                            videoExtensions: e.video.rtpExtensions
                        };
                        if (await t.setRemoteDescription({
                                sdp: f(n, a, void 0, !0),
                                type: a ? "answer" : "offer"
                            }), b.conference = n, !a) {
                            const e = await t.createAnswer();
                            await t.setLocalDescription(e), $(g(t.localDescription, !0))
                        }
                        b.gotInitialSetup = !0, await J();
                        break
                    }
                }
            }
            async function J() {
                if (!b) return;
                const {
                    pendingCandidates: e,
                    connection: t
                } = b;
                e.length && (await Promise.all(e.map((e => async function(e, t) {
                    try {
                        await e.addIceCandidate({
                            candidate: t,
                            sdpMLineIndex: 0
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }(t, e)))), b.pendingCandidates = [])
            }
            async function j(e, t) {
                const a = await e.createOffer(t);
                await e.setLocalDescription(a), $(g(e.localDescription, !0))
            }
            var K = a(14487),
                H = a(87894),
                z = a(4875),
                q = a(13439),
                Y = a(46205),
                W = a(80840),
                X = a(32989),
                Z = a(29807),
                Q = a(71331),
                ee = a(42347);
            (0, q.aJ)("leaveGroupCall", (async (e, t, a) => {
                const {
                    isFromLibrary: i,
                    shouldDiscard: o,
                    shouldRemove: s,
                    rejoin: r,
                    isPageUnload: c,
                    tabId: l = (0, K.g0)()
                } = a || {}, d = (0, Q.iT)(e);
                d && (e = (0, W.R6)(e, {
                    connectionState: "disconnected"
                }, d.participantsCount - 1), e = {
                    ...e,
                    groupCalls: {
                        ...e.groupCalls,
                        activeGroupCallId: void 0
                    }
                }, (0, q.UF)(e), await (0, z.px)("leaveGroupCall", {
                    call: d,
                    isPageUnload: c
                }), await (0, z.px)("abortRequestGroup", "call"), o && await (0, z.px)("discardGroupCall", {
                    call: d
                }), e = (0, q.mS)(), s && (e = (0, W.um)(e, d.id)), (0, n.ow)(), (0, q.UF)(e), t.toggleGroupCallPanel({
                    force: void 0,
                    tabId: l
                }), i || M(), t.afterHangUp(), r && t.requestMasterAndJoinGroupCall({
                    ...r,
                    tabId: l
                }))
            })), (0, q.aJ)("toggleGroupCallVideo", (async e => {
                const t = (0, Q.iT)(e),
                    a = (0, Z.mBe)(e, e.currentUserId);
                a && t && (await N("video"), await (0, z.px)("editGroupCallParticipant", {
                    call: t,
                    videoStopped: !k("video"),
                    participant: a
                }))
            })), (0, q.aJ)("requestToSpeak", ((e, t, a) => {
                const {
                    value: n
                } = a || {
                    value: !0
                }, i = (0, Q.iT)(e), o = (0, Z.mBe)(e, e.currentUserId);
                o && i && (0, z.px)("editGroupCallParticipant", {
                    call: i,
                    raiseHand: n,
                    participant: o
                })
            })), (0, q.aJ)("setGroupCallParticipantVolume", ((e, t, a) => {
                const {
                    participantId: n,
                    volume: i
                } = a, s = (0, Q.iT)(e), r = (0, Z.mBe)(e, n);
                r && s && (S(n, Math.floor(i / o.CH0) / 100), (0, z.px)("editGroupCallParticipant", {
                    call: s,
                    volume: Number(i),
                    participant: r
                }))
            })), (0, q.aJ)("toggleGroupCallMute", (async (e, t, a) => {
                const {
                    participantId: n,
                    value: i
                } = a || {}, o = (0, Q.iT)(e), s = (0, Z.mBe)(e, n || e.currentUserId);
                if (!s || !o) return;
                const r = void 0 === i ? k("audio", s.id) : i;
                n ? S(n, r ? 0 : 1) : await N("audio"), await (0, z.px)("editGroupCallParticipant", {
                    call: o,
                    muted: r,
                    participant: s
                })
            })), (0, q.aJ)("toggleGroupCallPresentation", (async (e, t, a) => {
                const n = (0, Q.iT)(e),
                    i = (0, Z.mBe)(e, e.currentUserId);
                if (i && n) {
                    if (void 0 !== a?.value ? a?.value : !k("presentation")) {
                        const e = await async function() {
                            if (C) try {
                                const e = await T("presentation");
                                if (!e) return;
                                return e.getTracks()[0].onended = () => {
                                    C && C.myId && (delete C.streams?.[C.myId].presentation, P(C.myId), w())
                                }, await new Promise((t => {
                                    const {
                                        connection: a,
                                        dataChannel: n
                                    } = B([e], t, !0);
                                    C = {
                                        ...C,
                                        screenshareConnection: a,
                                        screenshareDataChannel: n
                                    }
                                }))
                            } catch (e) {
                                return
                            }
                        }();
                        if (!e) return;
                        await (0, z.px)("joinGroupCallPresentation", {
                            call: n,
                            params: e
                        })
                    } else await N("presentation", !1), await (0, z.px)("leaveGroupCallPresentation", {
                        call: n
                    });
                    await (0, z.px)("editGroupCallParticipant", {
                        call: n,
                        presentationPaused: !k("presentation"),
                        participant: i
                    })
                }
            })), (0, q.aJ)("connectToActiveGroupCall", (async (e, t, a) => {
                const {
                    tabId: i = (0, K.g0)()
                } = a || {}, o = (0, Q.iT)(e);
                if (!o) return;
                if ("discarded" === o.connectionState) return void t.showNotification({
                    message: "This voice chat is not active",
                    tabId: i
                });
                const s = (0, n.sN)(),
                    r = (0, n.Hc)();
                if (!s || !r) return;
                const {
                    currentUserId: c
                } = e;
                if (!c) return;
                const l = await

                function(e, t, a, n) {
                    if (C) throw Error("Already in call");
                    I("connecting");
                    const i = new MediaStream;
                    return a.srcObject = i, (0, A.A)(a), C = {
                        onUpdate: n,
                        participants: [],
                        myId: e,
                        speaking: {},
                        silence: h(t),
                        black: y({
                            width: 640,
                            height: 480
                        }),
                        analyserInterval: setInterval(x, 1e3),
                        audioElement: a,
                        audioContext: t,
                        mediaStream: i,
                        lastMid: 3
                    }, T("audio"), new Promise((e => {
                        C = {
                            ...C,
                            ...B([C.silence, C.black], e)
                        }
                    }))
                }(c, r, s, t.apiUpdate), d = await (0, z.px)("joinGroupCall", {
                    call: o,
                    params: l,
                    inviteHash: o.inviteHash
                });
                if (e = (0, q.mS)(), !d) return t.showNotification({
                    message: "Failed to join voice chat",
                    tabId: i
                }), void t.leaveGroupCall({
                    tabId: i
                });
                if (t.loadMoreGroupCallParticipants(), o.chatId) {
                    e = (0, q.mS)();
                    const a = (0, Z.hds)(e, o.chatId);
                    if (!a) return;
                    await (0, ee.ad)(e, t, a, i)
                }
            })), (0, q.aJ)("connectToActivePhoneCall", (async (e, t) => {
                const {
                    phoneCall: a
                } = e;
                if (!a) return;
                const n = (0, Q.uu)(e);
                if (!n) return;
                const i = await (0, z.px)("getDhConfig");
                if (!i) return;
                await (0, z.px)("createPhoneCallState", [!0]);
                const o = await (0, z.px)("requestPhoneCall", [i]),
                    s = await (0, z.px)("requestCall", {
                        user: n,
                        gAHash: o,
                        isVideo: a.isVideo
                    });
                s ? (e = (0, q.mS)(), e = (0, Y.g1)(e, (0, H.dU)(s.users, "id")), (0, q.UF)(e)) : "hangUp" in t && t.hangUp({
                    tabId: (0, K.g0)()
                })
            })), (0, q.aJ)("acceptCall", (async e => {
                const {
                    phoneCall: t
                } = e;
                if (!t) return;
                const a = await (0, z.px)("getDhConfig");
                if (!a) return;
                await (0, z.px)("createPhoneCallState", [!1]);
                const n = await (0, z.px)("acceptPhoneCall", [a]),
                    i = await (0, z.px)("acceptCall", {
                        call: t,
                        gB: n
                    });
                i && (e = (0, q.mS)(), e = (0, Y.g1)(e, (0, H.dU)(i.users, "id")), (0, q.UF)(e))
            })), (0, q.aJ)("sendSignalingData", ((e, t, a) => {
                const {
                    phoneCall: n
                } = e;
                if (!n) return;
                const i = JSON.stringify(a);
                (async () => {
                    const e = await (0, z.px)("encodePhoneCallData", [i]);
                    e && (0, z.px)("sendSignalingData", {
                        data: e,
                        call: n
                    })
                })()
            })), (0, q.aJ)("closeCallRatingModal", ((e, t, a) => {
                const {
                    tabId: n = (0, K.g0)()
                } = a || {};
                return (0, X.w)(e, {
                    ratingPhoneCall: void 0
                }, n)
            })), (0, q.aJ)("setCallRating", ((e, t, a) => {
                const {
                    rating: n,
                    comment: i,
                    tabId: o = (0, K.g0)()
                } = a, {
                    ratingPhoneCall: s
                } = (0, Z.nTw)(e, o);
                if (s) return (0, z.px)("setCallRating", {
                    call: s,
                    rating: n,
                    comment: i
                }), (0, X.w)(e, {
                    ratingPhoneCall: void 0
                }, o)
            })), (0, q.aJ)("hangUp", ((e, t, a) => {
                const {
                    isPageUnload: n,
                    tabId: i = (0, K.g0)()
                } = a || {}, {
                    phoneCall: o
                } = e;
                if (o) {
                    if ("discarded" === o.state) return (0, z.px)("destroyPhoneCallState"), D(), e = {
                        ...e,
                        phoneCall: void 0
                    }, (0, q.UF)(e), t.toggleGroupCallPanel({
                        force: void 0,
                        tabId: i
                    }), void t.afterHangUp();
                    if ((0, z.px)("destroyPhoneCallState"), D(), (0, z.px)("discardCall", {
                            call: o,
                            isPageUnload: n
                        }), "requesting" === o.state) return e = {
                        ...e,
                        phoneCall: void 0
                    }, (0, q.UF)(e), t.toggleGroupCallPanel({
                        force: void 0,
                        tabId: i
                    }), void t.afterHangUp();
                    setTimeout((() => {
                        e = (0, q.mS)(), e = {
                            ...e,
                            phoneCall: void 0
                        }, (0, q.UF)(e), t.toggleGroupCallPanel({
                            force: void 0,
                            tabId: i
                        }), t.afterHangUp()
                    }), 500)
                }
            }));
            var te = a(47985);
            const ae = new Uint16Array([55357, 56841, 55357, 56845, 55357, 56859, 55357, 56877, 55357, 56881, 55357, 56865, 55357, 56846, 55357, 56884, 55357, 56885, 55357, 56840, 55357, 56876, 55357, 56839, 55357, 56847, 55357, 56430, 55357, 56439, 55357, 56450, 55357, 56438, 55357, 56424, 55357, 56425, 55357, 56436, 55357, 56437, 55357, 56891, 55357, 56893, 55357, 56896, 55357, 56442, 55357, 56904, 55357, 56905, 55357, 56906, 55357, 56448, 55357, 56445, 55357, 56489, 55357, 56613, 55357, 56485, 55357, 56484, 55357, 56386, 55357, 56384, 55357, 56387, 55357, 56389, 55357, 56388, 55357, 56397, 55357, 56398, 55357, 56396, 55357, 56394, 9996, 9995, 55357, 56400, 55357, 56390, 55357, 56391, 55357, 56393, 55357, 56392, 55357, 56911, 55357, 56399, 55357, 56490, 55357, 57014, 55356, 57283, 55357, 56451, 55357, 56427, 55357, 56426, 55357, 56428, 55357, 56429, 55357, 56453, 55356, 57257, 55357, 56401, 55357, 56402, 55357, 56415, 55357, 56414, 55357, 56416, 55357, 56405, 55357, 56407, 55357, 56406, 55357, 56409, 55357, 56412, 55357, 56403, 55356, 57216, 55357, 56452, 55357, 56475, 55357, 56473, 55357, 56476, 55357, 56474, 55357, 56461, 55357, 56462, 55357, 56374, 55357, 56378, 55357, 56369, 55357, 56365, 55357, 56377, 55357, 56368, 55357, 56376, 55357, 56367, 55357, 56360, 55357, 56379, 55357, 56375, 55357, 56366, 55357, 56343, 55357, 56372, 55357, 56337, 55357, 56344, 55357, 56380, 55357, 56359, 55357, 56357, 55357, 56340, 55357, 56333, 55357, 56354, 55357, 56347, 55357, 56349, 55357, 56348, 55357, 56350, 55357, 56332, 55357, 56345, 55357, 56346, 55357, 56351, 55357, 56364, 55357, 56331, 55357, 56336, 55357, 56330, 55357, 56363, 55356, 57152, 55356, 57145, 55356, 57147, 55356, 57153, 55356, 57150, 55356, 57156, 55356, 57141, 55356, 57140, 55356, 57139, 55356, 57118, 55356, 57114, 55356, 57113, 55356, 57102, 55356, 57099, 9889, 9748, 10052, 9924, 55356, 57088, 55356, 57096, 55356, 57098, 55356, 57235, 55356, 57222, 55356, 57219, 55357, 56443, 55356, 57221, 55356, 57220, 55356, 57217, 55356, 57224, 55357, 56622, 55356, 57253, 55357, 56567, 55357, 56511, 55357, 56507, 9742, 55357, 56545, 55357, 56570, 55357, 56571, 55357, 56585, 55357, 56596, 9203, 9200, 8986, 55357, 56594, 55357, 56593, 55357, 56590, 55357, 56481, 55357, 56614, 55357, 56588, 55357, 56587, 55357, 57023, 55357, 57021, 55357, 56615, 55357, 56616, 55357, 57002, 55357, 57004, 55357, 56483, 55357, 56619, 55357, 56618, 55357, 56458, 55357, 56457, 55357, 56496, 55357, 56501, 55357, 56499, 9993, 55357, 56555, 55357, 56550, 55357, 56517, 55357, 56513, 9986, 55357, 56524, 55357, 56526, 10002, 9999, 55357, 56528, 55357, 56538, 55357, 56620, 55357, 56621, 55356, 57256, 55356, 57260, 55356, 57252, 55356, 57255, 55356, 57269, 55356, 57273, 55356, 57275, 55356, 57274, 55356, 57272, 55357, 56446, 55356, 57262, 55356, 56527, 55356, 57266, 55356, 57263, 55356, 57288, 55356, 57280, 9917, 9918, 55356, 57278, 55356, 57265, 55356, 57289, 55356, 57267, 55356, 57281, 55356, 57287, 55356, 57286, 55356, 57290, 55356, 57284, 9749, 55356, 57212, 55356, 57210, 55356, 57207, 55356, 57204, 55356, 57173, 55356, 57172, 55356, 57183, 55356, 57175, 55356, 57201, 55356, 57178, 55356, 57180, 55356, 57185, 55356, 57203, 55356, 57182, 55356, 57193, 55356, 57190, 55356, 57218, 55356, 57200, 55356, 57194, 55356, 57195, 55356, 57197, 55356, 57199, 55356, 57166, 55356, 57167, 55356, 57162, 55356, 57163, 55356, 57170, 55356, 57159, 55356, 57161, 55356, 57171, 55356, 57169, 55356, 57164, 55356, 57168, 55356, 57165, 55356, 57158, 55356, 57157, 55356, 57149, 55356, 57313, 55356, 57317, 55356, 57318, 9962, 55356, 57328, 9978, 55356, 57325, 55357, 56827, 55357, 56829, 55356, 57248, 55356, 57249, 9970, 55356, 57250, 55357, 56994, 55357, 56996, 9875, 55357, 56960, 9992, 55357, 56961, 55357, 56962, 55357, 56971, 55357, 56974, 55357, 56972, 55357, 56985, 55357, 56983, 55357, 56981, 55357, 56987, 55357, 57e3, 55357, 56980, 55357, 56978, 55357, 56977, 55357, 57010, 55357, 56992, 55357, 56988, 55357, 56998, 9888, 55357, 56999, 9981, 55356, 57264, 55357, 56831, 55356, 57258, 55356, 57261, 55356, 56815, 55356, 56821, 55356, 56816, 55356, 56823, 55356, 56809, 55356, 56810, 55356, 56808, 55356, 56819, 55356, 56826, 55356, 56824, 55356, 56811, 55356, 56823, 55356, 56810, 55356, 56824, 55356, 56814, 55356, 56825, 55356, 56823, 55356, 56826, 55356, 56812, 55356, 56807, 49, 8419, 50, 8419, 51, 8419, 52, 8419, 53, 8419, 54, 8419, 55, 8419, 56, 8419, 57, 8419, 48, 8419, 55357, 56607, 10071, 10067, 9829, 9830, 55357, 56495, 55357, 56599, 55357, 56625, 55357, 56628, 55357, 56629, 55357, 56630, 55357, 56631]),
                ne = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 87, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 259, 260, 261, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 295, 297, 299, 301, 303, 305, 306, 307, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350, 351, 353, 355, 357, 359, 360, 362, 364, 365, 366, 368, 370, 372, 374, 376, 378, 380, 382, 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404, 406, 407, 408, 410, 412, 414, 416, 418, 420, 422, 424, 426, 427, 429, 431, 433, 435, 437, 439, 441, 443, 445, 447, 449, 451, 453, 455, 457, 459, 461, 463, 465, 467, 469, 471, 473, 475, 477, 479, 481, 483, 485, 487, 489, 491, 493, 495, 497, 499, 501, 503, 505, 507, 508, 510, 511, 513, 515, 517, 519, 521, 522, 524, 526, 528, 529, 531, 532, 534, 536, 538, 540, 542, 544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 564, 566, 567, 569, 570, 572, 574, 576, 578, 582, 586, 590, 594, 598, 602, 606, 610, 614, 618, 620, 622, 624, 626, 628, 630, 632, 634, 636, 638, 640, 641, 642, 643, 644, 646, 648, 650, 652, 654, 656, 658];
            (0, q.aJ)("apiUpdate", ((e, t, a) => {
                const {
                    activeGroupCallId: n
                } = e.groupCalls;
                switch (a["@type"]) {
                    case "updateGroupCallLeavePresentation":
                        t.toggleGroupCallPresentation({
                            value: !1
                        });
                        break;
                    case "updateGroupCallStreams":
                        if (!a.userId || !n) break;
                        if (!(0, Q.n5)(e, n, a.userId)) break;
                        return (0, W.c5)(e, n, a.userId, (0, H.cJ)(a, ["@type", "userId"]));
                    case "updateGroupCallConnectionState":
                        if (!n) break;
                        if ("disconnected" === a.connectionState) {
                            "leaveGroupCall" in t && t.leaveGroupCall({
                                isFromLibrary: !0,
                                tabId: (0, K.g0)()
                            });
                            break
                        }
                        return (0, W.h9)(e, n, {
                            connectionState: a.connectionState,
                            isSpeakerDisabled: a.isSpeakerDisabled
                        });
                    case "updateGroupCallParticipants": {
                        const {
                            groupCallId: e,
                            participants: t
                        } = a;
                        n === e && V(t);
                        break
                    }
                    case "updateGroupCallConnection": {
                        if (a.data.stream) {
                            t.showNotification({
                                message: "Big live streams are not yet supported",
                                tabId: (0, K.g0)()
                            }), "leaveGroupCall" in t && t.leaveGroupCall({
                                tabId: (0, K.g0)()
                            });
                            break
                        }!async function(e, t) {
                            if (!C) return;
                            const a = t ? C.screenshareConference : C.conference,
                                n = t ? C.screenshareConnection : C.connection;
                            if (!a || !n || !a.ssrcs) return;
                            const i = Date.now(),
                                o = {
                                    ...a,
                                    transport: e.transport,
                                    sessionId: i,
                                    audioExtensions: e.audio?.["rtp-hdrexts"],
                                    audioPayloadTypes: e.audio?.["payload-types"],
                                    videoExtensions: e.video?.["rtp-hdrexts"],
                                    videoPayloadTypes: e.video?.["payload-types"]
                                };
                            C = {
                                ...C,
                                ...t ? {
                                    screenshareConference: o
                                } : {
                                    conference: o
                                }
                            };
                            try {
                                await n.setRemoteDescription({
                                    type: "answer",
                                    sdp: f(o, !0, t)
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }(a.data, a.presentation);
                        const n = (0, Q.iT)(e);
                        n?.participants && Object.keys(n.participants).length > 0 && V(Object.values(n.participants));
                        break
                    }
                    case "updatePhoneCallMediaState":
                        return {
                            ...e, phoneCall: {
                                ...e.phoneCall,
                                ...(0, H.cJ)(a, ["@type"])
                            }
                        };
                    case "updatePhoneCall": {
                        if (!i.OL) return;
                        const {
                            phoneCall: n,
                            currentUserId: s
                        } = e, r = {
                            ...n,
                            ...a.call
                        }, c = n?.adminId === s;
                        if (e = {
                                ...e,
                                phoneCall: r
                            }, (0, q.UF)(e), e = (0, q.mS)(), n && n.id && r.id !== n.id) return void("discarded" !== r.state && (0, z.px)("discardCall", {
                            call: r,
                            isBusy: !0
                        }));
                        const {
                            accessHash: l,
                            state: d,
                            connections: u,
                            gB: p
                        } = r;
                        if (("active" === d || "accepted" === d) && (o = r.protocol, !o?.libraryVersions.some((e => "4.0.0" === e || "4.0.1" === e)))) {
                            const a = (0, Q.uu)(e);
                            return "hangUp" in t && t.hangUp({
                                tabId: (0, K.g0)()
                            }), void t.showNotification({
                                message: te.yE("VoipPeerIncompatible", a?.firstName),
                                tabId: (0, K.g0)()
                            })
                        }
                        if ("discarded" === d) {
                            if (!n) return;
                            return (0, X.w)(e, {
                                ...r.needRating && {
                                    ratingPhoneCall: r
                                },
                                isCallPanelVisible: void 0
                            }, (0, K.g0)())
                        }
                        return "accepted" === d && l && p ? (async () => {
                            const {
                                gA: t,
                                keyFingerprint: a,
                                emojis: n
                            } = await (0, z.px)("confirmPhoneCall", [p, ae, ne]), i = {
                                ...(e = (0, q.mS)()).phoneCall,
                                emojis: n
                            };
                            e = {
                                ...e,
                                phoneCall: i
                            }, (0, q.UF)(e);
                            const o = await (0, z.px)("confirmCall", {
                                call: r,
                                gA: t,
                                keyFingerprint: a
                            });
                            o && (e = (0, q.mS)(), e = (0, Y.g1)(e, (0, H.dU)(o.users, "id")), (0, q.UF)(e))
                        })() : "active" === d && u && "active" !== n?.state && (c || ((0, z.px)("receivedCall", {
                            call: r
                        }), (async () => {
                            const {
                                emojis: t
                            } = await (0, z.px)("confirmPhoneCall", [r.gAOrB, ae, ne]), a = {
                                ...(e = (0, q.mS)()).phoneCall,
                                emojis: t
                            };
                            e = {
                                ...e,
                                phoneCall: a
                            }, (0, q.UF)(e)
                        })()), async function(e, t, a, n, i, o) {
                            const s = new RTCPeerConnection({
                                iceServers: e.map((e => ({
                                    urls: [e.isTurn && `turn:${e.ip}:${e.port}`, e.isStun && `stun:${e.ip}:${e.port}`].filter(Boolean),
                                    username: e.username,
                                    credentialType: "password",
                                    credential: e.password
                                }))),
                                iceTransportPolicy: i ? "all" : "relay",
                                bundlePolicy: "max-bundle",
                                iceCandidatePoolSize: 10
                            });
                            s.onicecandidate = e => {
                                e.candidate && t({
                                    "@type": "Candidates",
                                    candidates: [{
                                        sdpString: e.candidate.candidate
                                    }]
                                })
                            }, s.onconnectionstatechange = () => {
                                o({
                                    "@type": "updatePhoneCallConnectionState",
                                    connectionState: s.connectionState
                                })
                            }, s.ontrack = e => {
                                if (!b) return;
                                const t = e.streams[0];
                                "audio" === e.track.kind ? (b.audio.srcObject = t, b.audio.play().catch(), b.streams.audio = t) : "1" === e.transceiver.mid ? b.streams.video = t : b.streams.presentation = t, O()
                            }, s.oniceconnectionstatechange = async e => {
                                switch (s.iceConnectionState) {
                                    case "disconnected":
                                    case "failed":
                                        a && await j(s, {
                                            offerToReceiveAudio: !0,
                                            offerToReceiveVideo: !0,
                                            iceRestart: !0
                                        })
                                }
                            };
                            const r = h(new AudioContext),
                                c = y({
                                    width: 640,
                                    height: 480
                                }),
                                l = y({
                                    width: 640,
                                    height: 480
                                });
                            s.addTrack(r.getTracks()[0], r), s.addTrack(c.getTracks()[0], c), s.addTrack(l.getTracks()[0], l);
                            const d = s.createDataChannel("data", {
                                id: 0,
                                negotiated: !0
                            });
                            d.onmessage = e => {
                                F(JSON.parse(e.data))
                            };
                            const u = new Audio;
                            b = {
                                audio: u,
                                connection: s,
                                emitSignalingData: t,
                                isOutgoing: a,
                                pendingCandidates: [],
                                onUpdate: o,
                                streams: {
                                    ownVideo: c,
                                    ownAudio: r,
                                    ownPresentation: l
                                },
                                mediaState: {
                                    isBatteryLow: !1,
                                    screencastState: "inactive",
                                    videoState: "inactive",
                                    videoRotation: 0,
                                    isMuted: !0
                                },
                                blackVideo: c,
                                blackPresentation: l,
                                silence: r,
                                dataChannel: d
                            };
                            try {
                                U("audio", !0)
                            } catch (e) {
                                console.error(e)
                            }
                            a && await j(s, {
                                offerToReceiveAudio: !0,
                                offerToReceiveVideo: !0
                            })
                        }(u, t.sendSignalingData, c, Boolean(r?.isVideo), Boolean(r.isP2pAllowed), t.apiUpdate)), e
                    }
                    case "updatePhoneCallConnectionState": {
                        const {
                            connectionState: n
                        } = a;
                        return e.phoneCall ? "closed" === n || "disconnected" === n || "failed" === n ? void("hangUp" in t && t.hangUp({
                            tabId: (0, K.g0)()
                        })) : {
                            ...e,
                            phoneCall: {
                                ...e.phoneCall,
                                isConnected: "connected" === n
                            }
                        } : e
                    }
                    case "updatePhoneCallSignalingData": {
                        const {
                            phoneCall: t
                        } = e;
                        if (!t) break;
                        (0, z.px)("decodePhoneCallData", [a.data])?.then(F);
                        break
                    }
                }
                var o
            }));
            var ie = a(84051),
                oe = a(87357),
                se = a(43874),
                re = a(37661),
                ce = a(5912),
                le = a(17712),
                de = a(59030),
                ue = a(90423),
                pe = a(29886),
                me = a(93545),
                ge = a(64493),
                fe = a(19806),
                he = a(12933),
                ye = a(8410),
                ve = a(96374),
                Ae = a(46222),
                Ce = a(4961);

            function be(e) {
                return Math.floor((e.volume || o.iRY) / o.CH0).toString()
            }
            var we = a(10722),
                Ee = a(94803),
                Se = a(21849),
                ke = a(34431),
                Pe = a(22720),
                Te = a(42186),
                Ne = a(672),
                Ie = a(4438),
                Me = a(285),
                xe = a(9168),
                Ve = a(24433);
            const Ge = [0, 17],
                Be = [17, 34],
                Oe = (0, ie.ph)((0, q.EK)((e => ({
                    isAdmin: (0, Q.qI)(e)
                })))((e => {
                    let {
                        participant: t,
                        onCloseAnimationEnd: a,
                        onClose: n,
                        isDropdownOpen: i,
                        isAdmin: s,
                        positionY: r,
                        menuRef: c,
                        positionX: l,
                        style: d,
                        transformOriginY: u,
                        transformOriginX: p
                    } = e;
                    const {
                        toggleGroupCallMute: m,
                        setGroupCallParticipantVolume: g,
                        toggleGroupCallPanel: f,
                        openChat: h,
                        requestToSpeak: y
                    } = (0, q.ko)(), v = (0, de.A)(), [A, C, b] = (0, re.A)(), w = t?.id, {
                        isMutedByMe: E,
                        isMuted: S,
                        isSelf: k,
                        canSelfUnmute: P
                    } = t || {}, T = Boolean(t?.raiseHandRating), N = !P && S, [I, M] = (0, ie.J0)(E ? 0 : (t?.volume || o.iRY) / o.CH0), [x, V] = (0, ie.J0)(!1), G = 0 === I, B = G ? Ge : Be;
                    (0, ie.vJ)((() => {
                        i || V(!1)
                    }), [i]);
                    const O = (0, le.A)((e => {
                        M(e), V(0 === e !== G)
                    }));
                    (0, ie.vJ)((() => {
                        M(E ? 0 : (t?.volume || o.iRY) / o.CH0)
                    }), [w]);
                    const R = function(e, t) {
                            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return (0, Ne.A)((e => {
                                e()
                            }), a, e, t)
                        }(500),
                        U = (0, le.A)((e => {
                            e.stopPropagation(), C(), n()
                        })),
                        D = (0, le.A)((e => {
                            e.stopPropagation(), y({
                                value: !1
                            }), n()
                        })),
                        _ = (0, le.A)((e => {
                            e.stopPropagation(), n(), s ? N && O((t?.volume ?? o.iRY) / o.CH0) : O(E ? o.iRY / o.CH0 : 0), m({
                                participantId: w,
                                value: s ? !N : !E
                            })
                        })),
                        L = (0, le.A)((e => {
                            e.stopPropagation(), f(), h({
                                id: w
                            }), n()
                        }));
                    return ie.Ay.createElement("div", null, ie.Ay.createElement(xe.A, {
                        isOpen: i,
                        positionX: l,
                        positionY: r,
                        transformOriginX: p,
                        transformOriginY: u,
                        style: d,
                        ref: c,
                        withPortal: !0,
                        onClose: n,
                        onCloseAnimationEnd: a,
                        className: "participant-menu with-menu-transitions"
                    }, !k && !N && ie.Ay.createElement("div", {
                        className: "group"
                    }, ie.Ay.createElement("div", {
                        className: (0, oe.A)("volume-control", I < 50 && "low", I >= 50 && I < 100 && "medium", I >= 100 && I < 150 && "normal", I >= 150 && "high")
                    }, ie.Ay.createElement("input", {
                        type: "range",
                        min: "0",
                        max: "200",
                        value: I,
                        onChange: e => {
                            const t = Number(e.target.value);
                            O(t), R((() => {
                                0 === t ? m({
                                    participantId: w,
                                    value: !0
                                }) : g({
                                    participantId: w,
                                    volume: Math.floor(t * o.CH0)
                                })
                            }))
                        }
                    }), ie.Ay.createElement("div", {
                        className: "info"
                    }, ie.Ay.createElement(Ie.A, {
                        tgsUrl: Te.w.Speaker,
                        play: !!x && B.toString(),
                        playSegment: B,
                        size: 24
                    }), ie.Ay.createElement("span", null, I, "%")))), ie.Ay.createElement("div", {
                        className: "group"
                    }, T && k && ie.Ay.createElement(Ve.A, {
                        icon: "stop-raising-hand",
                        onClick: D
                    }, v("VoipGroupCancelRaiseHand")), !k && ie.Ay.createElement(Ve.A, {
                        icon: "user",
                        onClick: L
                    }, v("VoipGroupOpenProfile")), !k && ie.Ay.createElement(Ve.A, {
                        icon: S && s && N ? "allow-speak" : "microphone-alt",
                        onClick: _
                    }, v(s ? N ? "VoipGroupAllowToSpeak" : "VoipMute" : E ? "VoipGroupUnmuteForMe" : "VoipGroupMuteForMe")), !k && s && ie.Ay.createElement(Ve.A, {
                        icon: "delete-user",
                        destructive: !0,
                        onClick: U
                    }, v("VoipGroupUserRemove")))), !k && s && ie.Ay.createElement(Me.A, {
                        isOpen: A,
                        userId: w,
                        onClose: b
                    }))
                }))),
                Re = (0, ie.ph)((e => {
                    let {
                        participant: t,
                        noColor: a,
                        className: n
                    } = e;
                    const {
                        isMuted: i,
                        isMutedByMe: o
                    } = t, s = (t.amplitude || 0) > d, r = Boolean(t.raiseHandRating), c = (0, pe.A)(r), l = !Boolean(t?.canSelfUnmute) && i, u = (0, pe.A)(i), p = (0, ie.Kr)((() => i && !u ? [43, 64] : !i && u ? [22, 42] : r && !c ? [65, 84] : !l && c ? [0, 21] : i ? [22, 23] : [43, 44]), [i, l, r]), m = (0, ie.Kr)((() => a ? "#ffffff" : r ? "#4da6e0" : l || o ? "#ff706f" : s ? "#57bc6c" : "#aaaaaa"), [a, r, l, o, s]);
                    return ie.Ay.createElement(Ie.A, {
                        tgsUrl: Te.w.VoiceOutlined,
                        play: p.toString(),
                        playSegment: p,
                        size: 28,
                        color: m,
                        className: n,
                        forceAlways: !0,
                        nonInteractive: !0
                    })
                })),
                Ue = {
                    root: "Wk7JwPx3",
                    subtitle: "ShcCNemD",
                    subtitleText: "UZLgp2cx",
                    icon: "vRc6jhKf",
                    subtitleBlue: "yA7bxEWw",
                    subtitleRed: "DnuZwImI",
                    subtitleGreen: "BkgYQGFq",
                    avatar: "ouHUJ9ff"
                },
                De = (0, ie.ph)((0, q.EK)(((e, t) => {
                    let {
                        participant: a
                    } = t;
                    return {
                        peer: (0, Z.mBe)(e, a.id) || (0, Z.hds)(e, a.id)
                    }
                }))((e => {
                    let {
                        participant: t,
                        peer: a
                    } = e;
                    const n = (0, ie.li)(null),
                        i = (0, ie.li)(null),
                        s = (0, de.A)(),
                        {
                            isSelf: r,
                            isMutedByMe: c,
                            isMuted: l,
                            hasVideoStream: u,
                            hasPresentationStream: p
                        } = t,
                        m = (t.amplitude || 0) > d,
                        g = Boolean(t.raiseHandRating),
                        {
                            isContextMenuOpen: f,
                            contextMenuPosition: h,
                            handleContextMenu: y,
                            handleBeforeContextMenu: v,
                            handleContextMenuClose: A,
                            handleContextMenuHide: C
                        } = (0, we.A)(n, r),
                        b = (0, ie.hb)((() => n.current), []),
                        w = (0, ie.hb)((() => n.current.closest(".custom-scroll, .no-scrollbar")), []),
                        E = (0, ie.hb)((() => i.current), []),
                        S = (0, ie.hb)((() => ({
                            withPortal: !0
                        })), []),
                        {
                            positionX: k,
                            positionY: P,
                            transformOriginX: T,
                            transformOriginY: N,
                            style: I
                        } = (0, Ee.A)(h, b, w, E, S),
                        M = Boolean(!l && m && t.volume && t.volume !== o.iRY),
                        [x, V] = (0, ie.Kr)((() => c ? [s("VoipGroupMutedForMe"), Ue.subtitleRed] : g ? [s("WantsToSpeak"), Ue.subtitleBlue] : M ? [s("SpeakingWithVolume", be(t)).replace("%%", "%"), Ue.subtitleGreen] : !l && m ? [s("Speaking"), Ue.subtitleGreen] : r ? [s("ThisIsYou"), Ue.subtitleBlue] : t.about ? [t.about, ""] : [s("Listening"), Ue.subtitleBlue]), [c, g, M, l, m, r, t, s]);
                    if (a) return ie.Ay.createElement(Pe.A, {
                        leftElement: ie.Ay.createElement(Se.A, {
                            peer: a,
                            className: Ue.avatar
                        }),
                        rightElement: ie.Ay.createElement(Re, {
                            participant: t,
                            className: Ue.icon
                        }),
                        className: Ue.root,
                        onClick: y,
                        onMouseDown: v,
                        onContextMenu: y,
                        multiline: !0,
                        ripple: !0,
                        ref: n
                    }, ie.Ay.createElement(ke.A, {
                        peer: a,
                        withEmojiStatus: !0,
                        className: Ue.title
                    }), ie.Ay.createElement("span", {
                        className: (0, oe.A)(Ue.subtitle, "subtitle", V)
                    }, p && ie.Ay.createElement("i", {
                        className: "icon icon-share-screen",
                        "aria-hidden": !0
                    }), u && ie.Ay.createElement("i", {
                        className: "icon icon-video",
                        "aria-hidden": !0
                    }), M && ie.Ay.createElement("i", {
                        className: "icon icon-speaker",
                        "aria-hidden": !0
                    }), ie.Ay.createElement("span", {
                        className: Ue.subtitleText
                    }, (0, Ce.A)(x))), ie.Ay.createElement(Oe, {
                        participant: t,
                        isDropdownOpen: f,
                        positionX: k,
                        positionY: P,
                        transformOriginX: T,
                        transformOriginY: N,
                        style: I,
                        onClose: A,
                        onCloseAnimationEnd: C,
                        menuRef: i
                    }))
                })));

            function _e(e, t) {
                return (0, H.zV)(!e.isMuted, !t.isMuted) || (0, H.zV)(e.presentation, t.presentation) || (0, H.zV)(e.video, t.video) || (0, H.zV)(e.raiseHandRating, t.raiseHandRating)
            }
            const Le = (0, ie.ph)((0, q.EK)((e => {
                const {
                    participantsCount: t,
                    participants: a
                } = (0, Q.iT)(e) || {};
                return {
                    participants: a,
                    participantsCount: t || 0
                }
            }))((e => {
                let {
                    panelOffset: t,
                    participants: a,
                    participantsCount: n,
                    isLandscape: i
                } = e;
                const {
                    loadMoreGroupCallParticipants: o
                } = (0, q.ko)(), s = (0, ie.Kr)((() => Object.values(a || {}).sort(_e).map((e => e.id))), [a]), r = (0, le.A)((() => {
                    o()
                })), [c, l] = (0, ve.A)(r, s, s.length >= n);
                return ie.Ay.createElement(Ae.A, {
                    items: c,
                    onLoadMore: l,
                    style: `transform: translateY(${t}px);`,
                    className: (0, oe.A)("npTa6CmI", !i && "v7oB2HTv")
                }, a && c?.map((e => a[e] && ie.Ay.createElement(De, {
                    key: e,
                    teactOrderKey: s.indexOf(e),
                    participant: a[e]
                }))))
            })));
            var $e = a(32610),
                Fe = a(66644),
                Je = a(19822),
                je = a(37836),
                Ke = a(32625),
                He = a(55158);
            const ze = "eUXuK9Oz",
                qe = "O2bTiH2E",
                Ye = (0, ie.ph)((0, q.EK)(((e, t) => {
                    let {
                        participant: a
                    } = t;
                    return {
                        user: a.isUser ? (0, Z.mBe)(e, a.id) : void 0,
                        chat: a.isUser ? void 0 : (0, Z.hds)(e, a.id)
                    }
                }))((e => {
                    let {
                        layout: t,
                        pinnedVideo: a,
                        setPinned: n,
                        canPin: s,
                        className: r,
                        participant: c,
                        user: l,
                        chat: u
                    } = e;
                    const p = (0, de.A)(),
                        m = (0, ie.li)(null),
                        g = (0, ie.li)(null),
                        f = (0, ie.li)(null),
                        {
                            x: h,
                            y,
                            width: v,
                            height: A,
                            noAnimate: C,
                            isRemoved: b,
                            type: w
                        } = t,
                        {
                            isSelf: S,
                            isMutedByMe: k,
                            isMuted: P
                        } = c,
                        T = a?.id === c.id && a?.type === w,
                        N = (c.amplitude || 0) > d,
                        I = Boolean(c.raiseHandRating),
                        M = "video" === w && c.isSelf,
                        x = (0, ie.Kr)((() => S ? p("ThisIsYou") : k ? p("VoipGroupMutedForMe") : I ? p("WantsToSpeak") : P || !N ? p("Listening") : c.volume && c.volume !== o.iRY ? p("SpeakingWithVolume", be(c)).replace("%%", "%") : p("Speaking")), [S, k, I, P, N, c, p]),
                        V = (0, ie.li)();
                    b || (V.current = t);
                    const {
                        x: G,
                        y: B,
                        width: O,
                        height: R
                    } = V.current || {}, [U, D, _, L] = b ? [G, B, O, R] : [h, y, v, A], [$, F] = (0, ie.J0)(!C), J = E(l?.id || u.id), j = "video" === w ? J?.video : J?.presentation, K = (0, ie.li)(j);
                    j?.active && j?.getVideoTracks()[0].enabled && (K.current = j);
                    const H = K.current,
                        z = (0, le.A)((() => {
                            const e = g.current;
                            e && (e.srcObject = null)
                        }));
                    (0, ie.vJ)((() => (H?.addEventListener("inactive", z), () => {
                        H?.removeEventListener("inactive", z)
                    })), [z, H]), (0, ie.vJ)((() => {
                        F(!1)
                    }), []);
                    const [q, Y] = (0, ie.J0)(!0), W = (0, le.A)((() => {
                        Y(!1)
                    }));
                    (0, Ke.A)((() => {
                        if (!H?.active) return;
                        const e = g.current,
                            t = f.current;
                        (0, Fe.RK)((() => {
                            t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0, t.width, t.height)
                        }))
                    }), 1e3), (0, ie.vJ)((() => {
                        const e = g.current,
                            t = m.current;
                        if (!e || !t || !H) return;
                        const a = t.getContext("2d", {
                            alpha: !1
                        });
                        if (!a) return;
                        let n = !0;
                        return (0, Fe.RK)((() => {
                            n && (t.width = 16, t.height = 16, a.filter = "blur(2px)", (0, Je.i0)((() => !!n && !!H.active && (a.drawImage(e, 0, 0, e.videoWidth, e.videoHeight, 0, 0, t.width, t.height), i.QH || (0, $e.A)(a, 0, 0, t.width, t.height, 2, 2), !0)), je.IJ))
                        })), () => {
                            n = !1
                        }
                    }), [H]);
                    const X = (0, ie.li)(null),
                        Z = (0, ie.li)(null),
                        {
                            isContextMenuOpen: Q,
                            contextMenuPosition: ee,
                            handleContextMenu: te,
                            handleContextMenuClose: ae,
                            handleContextMenuHide: ne
                        } = (0, we.A)(X, S),
                        se = (0, ie.hb)((() => X.current), []),
                        re = (0, ie.hb)((() => X.current.closest(".custom-scroll, .no-scrollbar")), []),
                        ce = (0, ie.hb)((() => Z.current), []),
                        ue = (0, ie.hb)((() => ({
                            withPortal: !0
                        })), []),
                        {
                            positionX: pe,
                            positionY: me,
                            transformOriginX: fe,
                            transformOriginY: he,
                            style: ye
                        } = (0, Ee.A)(ee, se, re, ce, ue),
                        ve = (0, ie.hb)((() => {
                            n(T ? void 0 : {
                                id: l?.id || u.id,
                                type: w
                            })
                        }), [u, T, n, w, l?.id]);
                    return ie.Ay.createElement("div", {
                        className: (0, oe.A)("DKuzmnN7", ($ || b) && "T_wodAHA", C && "yPCkJzpi", r, T && "B4WZhF9P"),
                        style: `--x: ${U}px; --y: ${D}px; --width: ${_}px; --height: ${L}px;`,
                        ref: X,
                        onContextMenu: te,
                        onDoubleClick: s ? ve : void 0
                    }, ie.Ay.createElement("div", {
                        className: (0, oe.A)("eBq1NoLo", N && "h4NcT6OS")
                    }, q && ie.Ay.createElement(He.A, {
                        className: (0, oe.A)(ze, "XedVWQii")
                    }), H && ie.Ay.createElement("video", {
                        className: (0, oe.A)(ze, M && qe),
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        srcObject: H,
                        ref: g,
                        onCanPlay: W
                    }), ie.Ay.createElement("canvas", {
                        className: (0, oe.A)("eTpvBU_b eUXuK9Oz", M && qe),
                        ref: f
                    }), ie.Ay.createElement("div", {
                        className: "R5ULTrF9"
                    }, ie.Ay.createElement("canvas", {
                        className: (0, oe.A)("cjUWuViy", M && qe),
                        ref: m
                    })), s && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        ripple: !0,
                        color: "translucent",
                        className: "lPdblo0y",
                        ariaLabel: p(T ? "lng_group_call_context_unpin_camera" : "lng_group_call_context_pin_camera"),
                        onClick: ve
                    }, ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", T ? "icon-unpin" : "icon-pin")
                    })), ie.Ay.createElement("div", {
                        className: "T1deCDSn"
                    }, ie.Ay.createElement("div", {
                        className: "LzFFayK3"
                    }, ie.Ay.createElement(ke.A, {
                        peer: l || u,
                        className: "RBwMAuKp"
                    }), ie.Ay.createElement("div", {
                        className: "z1ZZTsjC"
                    }, x)), ie.Ay.createElement(Re, {
                        participant: c,
                        className: "j1aDzn1H",
                        noColor: !0
                    }))), ie.Ay.createElement(Oe, {
                        participant: c,
                        isDropdownOpen: Q,
                        positionX: pe,
                        positionY: me,
                        transformOriginX: fe,
                        transformOriginY: he,
                        style: ye,
                        onClose: ae,
                        onCloseAnimationEnd: ne,
                        menuRef: Z
                    }))
                }))),
                We = () => {
                    navigator.vibrate?.(50)
                };
            var Xe = a(57474);
            const Ze = (0, ie.ph)((0, q.EK)((e => {
                    const t = (0, Q.iT)(e),
                        {
                            connectionState: a
                        } = t || {},
                        n = t && (0, Q.n5)(e, t.id, e.currentUserId),
                        {
                            raiseHandRating: i,
                            hasAudioStream: o,
                            canSelfUnmute: s,
                            isMuted: r
                        } = n || {};
                    return {
                        connectionState: a || "discarded",
                        hasRequestedToSpeak: Boolean(i),
                        noAudioStream: !o,
                        canSelfUnmute: s,
                        isMuted: r
                    }
                }))((e => {
                    let {
                        className: t,
                        noAudioStream: a,
                        canSelfUnmute: n,
                        isMuted: i,
                        connectionState: o
                    } = e;
                    const {
                        toggleGroupCallMute: s,
                        requestToSpeak: r,
                        playGroupCallSound: c
                    } = (0, q.ko)(), l = (0, de.A)(), d = (0, ie.li)("up"), [u, p] = (0, ie.J0)(!1), m = "connected" !== o, g = !n && i, f = (0, pe.A)(g);
                    (0, ie.vJ)((() => {
                        f && !g && c({
                            sound: "allowTalk"
                        })
                    }), [c, f, g]);
                    const h = (0, ie.Kr)((() => {
                            if (u) {
                                const e = Math.floor(100 * Math.random());
                                return e < 32 ? [0, 120] : e < 64 ? [120, 240] : e < 97 ? [240, 420] : [420, 540]
                            }
                            return !f && g ? a ? [99, 135] : [136, 172] : f && !g ? [0, 36] : g ? [0, 0] : a ? [69, 99] : [36, 69]
                        }), [f, u, a, g]),
                        y = u ? "HandFilled" : "VoiceMini",
                        v = (0, ie.hb)((() => {
                            We(), s()
                        }), [s]),
                        A = (0, ie.hb)((() => {
                            if (g) {
                                if (u) return;
                                return We(), r(), p(!0), void setTimeout((() => {
                                    p(!1)
                                }), 3e3)
                            }
                            d.current = "down", a && setTimeout((() => {
                                "down" === d.current && (d.current = "hold", v())
                            }), 200)
                        }), [u, a, r, g, v]),
                        C = (0, ie.hb)((() => {
                            g || (v(), d.current = "up")
                        }), [g, v]);
                    return ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "default",
                        className: (0, oe.A)("lKdhQ5pw", !m && a && "bjKqp3SI", !m && g && "Ynow5UuE", t),
                        onMouseDown: A,
                        onMouseUp: C,
                        ariaLabel: l(i ? "VoipUnmute" : "VoipMute"),
                        disabled: m
                    }, ie.Ay.createElement(Ie.A, {
                        tgsUrl: Te.w[y],
                        size: 36,
                        play: h.toString(),
                        playSegment: h,
                        className: "Ea1XnQaX",
                        forceAlways: !0
                    }), ie.Ay.createElement(Xe.A, {
                        className: (0, oe.A)("tyQNJC6B", m && "LowChABq"),
                        color: "white"
                    }))
                }))),
                Qe = {
                    root: "OsO5GKfn",
                    panelWrapper: "cUVoePr_",
                    panel: "Thuz79M3",
                    panelScrollTrigger: "zoK6Y6IS",
                    panelHeader: "DMBtCL9Z",
                    scrolled: "GdEH1Agb",
                    fullscreen: "JJx0QI2w",
                    landscape: "wamCuzMB",
                    headerButton: "gmyieSid",
                    firstButton: "hVnn6KBp",
                    lastButton: "iy78A5rG",
                    panelHeaderText: "TwEEA77i",
                    title: "pNZ9skLf",
                    bigger: "NumT3v5i",
                    subtitle: "gmfUKabx",
                    participants: "iTeC_RxH",
                    participantVideos: "PZmKIdTl",
                    addParticipantButton: "clmu2oBt",
                    videos: "ATwoMlAV",
                    mainVideoContainer: "hqFon3dV",
                    videosHeader: "KPHc659W",
                    appFullscreen: "cl2sfoBF",
                    videosHeaderLastButton: "_t50HVNJ",
                    videosContent: "oEEQZilE",
                    actions: "uGzi9s97",
                    actionButton: "foXbVcnN",
                    destructive: "YIR9Z9CZ",
                    canRequestToSpeak: "ZoiZQu_O",
                    muted: "wpvv1V6m",
                    portrait: "R6HQcMwx",
                    noVideoParticipants: "aepCFyJQ",
                    noSidebar: "XjgP21E6"
                },
                et = (0, ie.ph)((0, q.EK)(((e, t) => {
                    let {
                        groupCallId: a
                    } = t;
                    const {
                        connectionState: n,
                        title: i,
                        participants: o,
                        participantsCount: s,
                        chatId: r
                    } = (0, Q.Ip)(e, a) || {}, c = r ? (0, Z.hds)(e, r) : void 0;
                    return {
                        connectionState: n,
                        title: i || c?.title,
                        participantsCount: s,
                        meParticipant: (0, Q.n5)(e, a, e.currentUserId),
                        isCallPanelVisible: Boolean((0, Z.nTw)(e).isCallPanelVisible),
                        isAdmin: (0, Q.qI)(e),
                        participants: o,
                        canInvite: (0, Q.O7)(e)
                    }
                }))((e => {
                    let {
                        groupCallId: t,
                        isCallPanelVisible: a,
                        connectionState: n,
                        participantsCount: i,
                        title: o,
                        meParticipant: s,
                        isAdmin: r,
                        participants: c,
                        canInvite: l
                    } = e;
                    const {
                        toggleGroupCallVideo: d,
                        toggleGroupCallPresentation: p,
                        leaveGroupCall: m,
                        toggleGroupCallPanel: g,
                        connectToActiveGroupCall: f,
                        playGroupCallSound: h,
                        createGroupCallInviteLink: y
                    } = (0, q.ko)(), v = (0, de.A)(), A = (0, ie.li)(null), C = (0, ie.li)(null), b = (0, ie.li)(null), w = (0, ie.li)(null), E = (0, ie.li)(null), [S, k] = (0, ie.J0)(!1), P = !a && !S, {
                        observe: T
                    } = (0, ce.BL)({
                        rootRef: E,
                        throttleMs: 200,
                        isDisabled: !P
                    }), N = !(0, ce.Vz)(w, P ? T : void 0), {
                        isMobile: I,
                        isLandscape: M
                    } = (0, se.Ay)(), [x, V, G] = (0, re.A)(), [B, O, R] = (0, re.A)(!0), U = Boolean(x && M), D = (0, ue.zk)(), _ = (0, ie.Kr)((() => Object.values(c).find((e => {
                        let {
                            presentation: t
                        } = e;
                        return t
                    }))), [c]), L = (0, ie.Kr)((() => Object.values(c).filter((e => {
                        let {
                            video: t,
                            presentation: a
                        } = e;
                        return t || a
                    })).flatMap((e => {
                        let {
                            id: t,
                            video: a,
                            presentation: n
                        } = e;
                        return (0, H.oE)([a ? {
                            id: t,
                            type: "video"
                        } : void 0, n ? {
                            id: t,
                            type: "screen"
                        } : void 0])
                    }))), [c]), $ = L.length > 0, F = o || v("VoipGroupVoiceChat"), J = v("Participants", i, "i"), [j, K, z] = (0, re.A)(), [Y, W] = (0, ie.J0)(!1), [X, Z] = (0, ie.J0)(!1), Q = s?.hasVideoStream, ee = s?.hasPresentationStream, te = s?.hasAudioStream, ae = "connected" !== n, ne = s?.canSelfUnmute, ve = !ne && !te;
                    (0, ie.vJ)((() => {
                        "connected" === n ? h({
                            sound: "join"
                        }) : "reconnecting" === n && h({
                            sound: "connecting"
                        })
                    }), [n]);
                    const Ae = (0, le.A)((() => {
                            z(), W(!1)
                        })),
                        Ce = (0, le.A)((() => {
                            A.current && !I && (x ? G() : V())
                        })),
                        be = (0, le.A)((() => {
                            B ? R() : O()
                        })),
                        we = (0, le.A)((() => {
                            g()
                        })),
                        Ee = (0, le.A)((() => {
                            y()
                        })),
                        Se = (0, le.A)((() => {
                            d()
                        }));
                    (0, ie.vJ)((() => {
                        f()
                    }), [f, t]);
                    const ke = (0, le.A)((() => {
                            !r || j ? (h({
                                sound: "leave"
                            }), k(!0), z()) : K()
                        })),
                        Pe = (0, le.A)((() => {
                            S && m({
                                shouldDiscard: X
                            })
                        })),
                        Te = (0, le.A)((() => {
                            p()
                        })),
                        Ne = L.length > 1 && !I,
                        Ie = U && $,
                        [Me, xe] = (0, ie.J0)(void 0),
                        {
                            videoLayout: Ve,
                            panelOffset: Ge
                        } = function(e) {
                            let {
                                primaryContainerRef: t,
                                secondaryContainerRef: a,
                                videoParticipants: n,
                                isLandscapeLayout: i,
                                pinnedVideo: o
                            } = e;
                            const [s, r] = (0, ie.J0)([]), [c, l] = (0, ie.J0)(0), d = n.length, u = (0, pe.A)(d), p = (0, pe.A)(n), m = (0, ie.Kr)((() => p?.filter((e => {
                                let {
                                    id: t,
                                    type: a
                                } = e;
                                return !n.some((e => e.id === t && e.type === a))
                            }))), [p, n]), g = (0, le.A)((() => {
                                const e = t.current,
                                    s = a.current;
                                if (!s) return;
                                const c = void 0 !== u && u > d ? u - d : 0,
                                    {
                                        x: p,
                                        y: g,
                                        width: f
                                    } = s.getBoundingClientRect(),
                                    h = [];
                                if (void 0 !== o || !e || !i) {
                                    const t = !0;
                                    let a, s = !1,
                                        u = 0,
                                        y = n;
                                    if (o && e && i && (u = y.findIndex((e => {
                                            let {
                                                id: t,
                                                type: a
                                            } = e;
                                            return t === o.id && a === o.type
                                        })), -1 !== u)) {
                                        const {
                                            x: t,
                                            y: n,
                                            width: i,
                                            height: r
                                        } = e.getBoundingClientRect(), {
                                            id: c,
                                            type: l
                                        } = o;
                                        a = {
                                            x: t,
                                            y: n,
                                            width: i,
                                            height: r,
                                            participantId: c,
                                            type: l,
                                            orderKey: u
                                        }, s = !0, y = y.filter((e => {
                                            let {
                                                id: t,
                                                type: a
                                            } = e;
                                            return t !== c || a !== o.type
                                        }))
                                    }
                                    const v = s ? d - 1 : d,
                                        A = v % 2 == 1,
                                        C = 2,
                                        b = Math.ceil(v / C),
                                        w = (f - 10 * (C - 1)) / C,
                                        E = Math.max(0, A ? 240 + (b - 1) * w + 8 * (b - 1) : b * w + 8 * (b - 1));
                                    for (let e = 0; e < v; e++) {
                                        const a = A && 0 === e,
                                            n = a ? f : w,
                                            i = a ? 240 : w,
                                            o = A && 0 !== e ? e + 1 : e,
                                            s = (t ? 0 : p) + o % C * (n + 10),
                                            r = (t ? 0 : g) + (A && 0 !== e ? 248 + (Math.floor(o / C) - 1) * (i + 8) : Math.floor(o / C) * (i + 8));
                                        h.push({
                                            x: s,
                                            y: r,
                                            width: n,
                                            height: i,
                                            shouldRemount: !t,
                                            isRemounted: t,
                                            noAnimate: !0,
                                            participantId: y[e].id,
                                            type: y[e].type,
                                            orderKey: e >= u ? e + 1 : e
                                        })
                                    }
                                    if (a && h.splice(u, 0, a), m)
                                        for (let e = 0; e < c; e++) h.push({
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0,
                                            isRemounted: t,
                                            isRemoved: !0,
                                            participantId: m[e].id,
                                            type: m[e].type,
                                            orderKey: e + d
                                        });
                                    return l(E), void r(h)
                                }
                                const {
                                    x: y,
                                    y: v,
                                    width: A,
                                    height: C
                                } = e.getBoundingClientRect(), b = function(e) {
                                    return e >= 25 ? 5 : e >= 13 ? 4 : e >= 7 ? 3 : e >= 3 ? 2 : 1
                                }(d), w = Math.ceil(d / b), E = w * b > d, S = (A - 10 * (b - 1)) / b, k = (C - 8 * (w - 1)) / w, P = S * (d % b);
                                for (let e = 0; e < d; e++) {
                                    const t = Math.floor(e / b),
                                        a = y + e % b * (S + 10) + (E && t === w - 1 ? (A - P) / 2 : 0),
                                        i = v + Math.floor(e / b) * (k + 8);
                                    h.push({
                                        x: a,
                                        y: i,
                                        width: S,
                                        height: k,
                                        participantId: n[e].id,
                                        type: n[e].type,
                                        orderKey: e
                                    })
                                }
                                if (m)
                                    for (let e = 0; e < c; e++) h.push({
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0,
                                        isRemoved: !0,
                                        participantId: m[e].id,
                                        type: m[e].type,
                                        orderKey: e + d
                                    });
                                l(0), r(h)
                            }));
                            return (0, ie.vJ)(g, [g, n, i, o]), (0, me.A)(t, g, !t.current), (0, me.A)(a, g, !a.current), {
                                videoLayout: s,
                                panelOffset: c
                            }
                        }({
                            primaryContainerRef: C,
                            secondaryContainerRef: b,
                            videoParticipants: L,
                            isLandscapeLayout: U,
                            pinnedVideo: Me
                        }),
                        Be = (0, le.A)((e => {
                            xe(e), e && !x && V()
                        })),
                        Oe = (0, le.A)((() => {
                            _ && xe({
                                id: _.id,
                                type: "screen"
                            })
                        }));
                    return (0, ie.vJ)(Oe, [Oe, Boolean(_)]), (0, ie.vJ)((() => {
                        Me && (L.some((e => e.type === Me.type && e.id === Me.id)) || xe(void 0))
                    }), [Me, Ve, L]), ie.Ay.createElement(ye.A, {
                        isOpen: P,
                        onClose: g,
                        className: (0, oe.A)(Qe.root, (x || I) && Qe.fullscreen, D && Qe.appFullscreen, U && Qe.landscape, !$ && Qe.noVideoParticipants, !U && Qe.portrait, !B && Ie && Qe.noSidebar),
                        dialogRef: A,
                        onCloseAnimationEnd: Pe
                    }, Ie && ie.Ay.createElement("div", {
                        className: Qe.videos
                    }, ie.Ay.createElement("div", {
                        className: Qe.videosHeader
                    }, !I && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        onClick: Ce,
                        className: (0, oe.A)(Qe.headerButton, Qe.firstButton),
                        ariaLabel: v(x ? "AccExitFullscreen" : "AccSwitchToFullscreen")
                    }, ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", x ? "icon-smallscreen" : "icon-fullscreen"),
                        "aria-hidden": !0
                    })), ie.Ay.createElement("h3", {
                        className: (0, oe.A)(Qe.title, Qe.bigger)
                    }, o || v("VoipGroupVoiceChat")), Ie && !B && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        className: (0, oe.A)(Qe.headerButton, Qe.videosHeaderLastButton),
                        onClick: be,
                        ariaLabel: v("AccDescrExpandPanel")
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-sidebar",
                        "aria-hidden": !0
                    }))), ie.Ay.createElement("div", {
                        className: Qe.videosContent,
                        ref: C
                    })), ie.Ay.createElement("div", {
                        className: Qe.panelWrapper,
                        ref: E
                    }, ie.Ay.createElement("div", {
                        className: (0, oe.A)(Qe.panel, "custom-scroll")
                    }, ie.Ay.createElement("div", {
                        className: Qe.panelScrollTrigger,
                        ref: w
                    }), ie.Ay.createElement("div", {
                        className: (0, oe.A)(Qe.panelHeader, N && Qe.scrolled)
                    }, !Ie && !I && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        ripple: !I,
                        className: (0, oe.A)(Qe.firstButton, Qe.headerButton),
                        onClick: Ce,
                        ariaLabel: v("AccSwitchToFullscreen")
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-fullscreen",
                        "aria-hidden": !0
                    })), I && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        onClick: we,
                        className: (0, oe.A)(Qe.headerButton, Qe.firstButton),
                        ariaLabel: v("Close")
                    }, ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", "icon-close"),
                        "aria-hidden": !0
                    })), Ie && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        ripple: !I,
                        className: (0, oe.A)(Qe.firstButton, Qe.headerButton),
                        color: "translucent",
                        onClick: be,
                        ariaLabel: v("AccDescrCollapsePanel")
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-sidebar",
                        "aria-hidden": !0
                    })), ie.Ay.createElement("div", {
                        className: Qe.panelHeaderText
                    }, ie.Ay.createElement("h3", {
                        className: (0, oe.A)(Qe.title, Ie && Qe.bigger)
                    }, Ie ? J : F), !Ie && ie.Ay.createElement("span", {
                        className: Qe.subtitle
                    }, J)), !Ie && l && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        ripple: !I,
                        className: (0, oe.A)(Qe.lastButton, Qe.headerButton),
                        color: "translucent",
                        onClick: Ee,
                        ariaLabel: v("VoipGroupInviteMember")
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-add-user",
                        "aria-hidden": !0
                    }))), ie.Ay.createElement("div", {
                        className: Qe.participants
                    }, ie.Ay.createElement("div", {
                        className: Qe.participantVideos,
                        ref: b,
                        style: `height: ${Ge}px;`
                    }, Ve.map((e => {
                        const t = c[e.participantId];
                        return e.isRemounted && t ? ie.Ay.createElement(Ye, {
                            teactOrderKey: e.orderKey,
                            key: `${e.participantId}_${e.type}`,
                            layout: e,
                            canPin: Ne,
                            setPinned: Be,
                            pinnedVideo: Me,
                            participant: t
                        }) : ie.Ay.createElement("div", {
                            teactOrderKey: e.orderKey,
                            key: `${e.participantId}_${e.type}`
                        })
                    }))), ie.Ay.createElement(Le, {
                        panelOffset: Ge,
                        isLandscape: Ie
                    }))), ie.Ay.createElement(he.A, {
                        key: "add-participant",
                        isShown: Ie && l,
                        onClick: Ee,
                        className: Qe.addParticipantButton,
                        ariaLabel: v("VoipGroupInviteMember")
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-add-user-filled",
                        "aria-hidden": !0
                    }))), ie.Ay.createElement("div", {
                        className: Qe.mainVideoContainer
                    }, Ve.map((e => {
                        const t = c[e.participantId];
                        return e.isRemounted || !t ? ie.Ay.createElement("div", {
                            teactOrderKey: e.orderKey,
                            key: `${e.participantId}_${e.type}`
                        }) : ie.Ay.createElement(Ye, {
                            teactOrderKey: e.orderKey,
                            key: `${e.participantId}_${e.type}`,
                            layout: e,
                            canPin: Ne,
                            setPinned: Be,
                            pinnedVideo: Me,
                            participant: t,
                            className: Qe.video
                        })
                    }))), ie.Ay.createElement("div", {
                        className: Qe.actions
                    }, ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "default",
                        ripple: !0,
                        className: (0, oe.A)(Qe.actionButton, !te && Qe.muted, ve && Qe.canRequestToSpeak),
                        onClick: Se,
                        ariaLabel: v(Q ? "VoipStopVideo" : "VoipStartVideo"),
                        disabled: ae
                    }, ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", Q ? "icon-video" : "icon-video-stop"),
                        "aria-hidden": !0
                    })), ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "default",
                        ripple: !0,
                        className: (0, oe.A)(Qe.actionButton, !te && Qe.muted, ve && Qe.canRequestToSpeak),
                        onClick: Te,
                        ariaLabel: v(ee ? "lng_group_call_screen_share_stop" : "lng_group_call_tooltip_screen"),
                        disabled: ae || !u
                    }, ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", ee ? "icon-share-screen" : "icon-share-screen-stop"),
                        "aria-hidden": !0
                    })), ie.Ay.createElement(Ze, {
                        className: Qe.actionButton
                    }), ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "default",
                        ripple: !0,
                        className: (0, oe.A)(Qe.actionButton, !te && Qe.muted, ve && Qe.canRequestToSpeak),
                        ariaLabel: v("lng_group_call_settings"),
                        disabled: !0
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-settings-filled",
                        "aria-hidden": !0
                    })), ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "default",
                        ripple: !0,
                        className: (0, oe.A)(Qe.actionButton, Qe.destructive),
                        onClick: ke,
                        ariaLabel: v("lng_group_call_leave")
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-close",
                        "aria-hidden": !0
                    }))), ie.Ay.createElement(ye.A, {
                        isOpen: j,
                        onClose: Ae,
                        className: "error",
                        title: v(Y ? "VoipGroupEndAlertTitle" : "VoipGroupLeaveAlertTitle")
                    }, ie.Ay.createElement("p", null, v(Y ? "VoipGroupEndAlertText" : "VoipGroupLeaveAlertText")), !Y && ie.Ay.createElement(fe.A, {
                        label: v("VoipGroupEndChat"),
                        checked: X,
                        onCheck: Z
                    }), ie.Ay.createElement("div", {
                        className: "dialog-buttons"
                    }, ie.Ay.createElement(ge.A, {
                        isText: !0,
                        className: "confirm-dialog-button",
                        onClick: ke
                    }, v(Y ? "VoipGroupEnd" : "VoipGroupLeave")), ie.Ay.createElement(ge.A, {
                        isText: !0,
                        className: "confirm-dialog-button",
                        onClick: Ae
                    }, v("Cancel")))))
                }))),
                tt = (0, ie.ph)((0, q.EK)((e => {
                    const t = (0, Z.nTw)(e);
                    return {
                        groupCall: t.isMasterTab ? (0, Q.iT)(e) : void 0,
                        isCallPanelVisible: t.isCallPanelVisible,
                        phoneCallUser: t.isMasterTab ? (0, Q.uu)(e) : void 0
                    }
                }))((e => {
                    let {
                        groupCall: t,
                        phoneCallUser: a,
                        isCallPanelVisible: n
                    } = e;
                    const {
                        toggleGroupCallPanel: i
                    } = (0, q.ko)(), o = (0, de.A)();
                    if ((0, ie.vJ)((() => (document.body.classList.toggle("has-call-header", Boolean(n)), window.electron?.setTrafficLightPosition(n ? "lowered" : "standard"), () => {
                            document.body.classList.toggle("has-call-header", !1), window.electron?.setTrafficLightPosition("standard")
                        })), [n]), t || a) return ie.Ay.createElement("div", {
                        className: (0, oe.A)("ActiveCallHeader", n && "open"),
                        onClick: function() {
                            i()
                        }
                    }, ie.Ay.createElement("span", {
                        className: "title"
                    }, a?.firstName || t?.title || o("VoipGroupVoiceChat")))
                })));
            var at = a(17663),
                nt = a(30857);
            const it = (0, ie.ph)((e => {
                    let {
                        onClick: t,
                        label: a,
                        customIcon: n,
                        icon: i,
                        iconClassName: o,
                        className: s,
                        isDisabled: r,
                        isActive: c
                    } = e;
                    return ie.Ay.createElement("div", {
                        className: "lBO3RZUM"
                    }, ie.Ay.createElement(ge.A, {
                        round: !0,
                        className: (0, oe.A)(s, "ch2sqAKW", c && "OQxlsRp7"),
                        onClick: t,
                        disabled: r
                    }, n || ie.Ay.createElement("i", {
                        className: (0, oe.A)(o, "icon", `icon-${i}`)
                    })), ie.Ay.createElement("div", {
                        className: "aHguvLcL"
                    }, a))
                })),
                ot = {
                    root: "GNYRVAUg",
                    blurred: "RBmbMiou",
                    "single-column": "O7cZE08z",
                    singleColumn: "O7cZE08z",
                    header: "GI6dY5aJ",
                    "close-button": "ULiJZuaP",
                    closeButton: "ULiJZuaP",
                    "emojis-backdrop": "RFBKZpjx",
                    emojisBackdrop: "RFBKZpjx",
                    open: "zi1NlOXX",
                    emojis: "DFco1VIN",
                    "emoji-tooltip": "MRIShZ3V",
                    emojiTooltip: "MRIShZ3V",
                    "user-info": "eaUe2A0c",
                    userInfo: "eaUe2A0c",
                    buttons: "qIeflO02",
                    leave: "hclywYYk",
                    accept: "ln_ZBUHy",
                    "accept-icon": "cVRd3twS",
                    acceptIcon: "cVRd3twS",
                    "main-video": "bGlBFSJq",
                    mainVideo: "bGlBFSJq",
                    "second-video": "TOFu1n5x",
                    secondVideo: "TOFu1n5x",
                    visible: "LOnSFN9w",
                    fullscreen: "Omg5T1o6"
                },
                st = (0, ie.ph)((0, q.EK)((e => {
                    const {
                        phoneCall: t,
                        currentUserId: a
                    } = e, {
                        isCallPanelVisible: n,
                        isMasterTab: i
                    } = (0, Z.nTw)(e), o = (0, Q.uu)(e);
                    return {
                        isCallPanelVisible: Boolean(n),
                        user: o,
                        isOutgoing: t?.adminId === a,
                        phoneCall: i ? t : void 0
                    }
                }))((e => {
                    let {
                        user: t,
                        isOutgoing: a,
                        phoneCall: n,
                        isCallPanelVisible: o
                    } = e;
                    const s = (0, de.A)(),
                        {
                            hangUp: r,
                            requestMasterAndAcceptCall: c,
                            playGroupCallSound: l,
                            toggleGroupCallPanel: d,
                            connectToActivePhoneCall: p
                        } = (0, q.ko)(),
                        m = (0, ie.li)(null),
                        [g, f, h] = (0, re.A)(),
                        {
                            isMobile: y
                        } = (0, se.Ay)(),
                        v = (0, ie.hb)((() => {
                            g ? h() : f()
                        }), [h, g, f]),
                        A = (0, ie.hb)((() => {
                            m.current && (g ? document.exitFullscreen().then(h) : m.current.requestFullscreen().then(f))
                        }), [h, g, f]);
                    (0, ie.vJ)((() => {
                        if (!i.SC) return;
                        const e = m.current;
                        return e ? (e.addEventListener("fullscreenchange", v), () => {
                            e.removeEventListener("fullscreenchange", v)
                        }) : void 0
                    }), [v]);
                    const C = (0, ie.hb)((() => {
                            d(), g && h()
                        }), [h, g, d]),
                        w = "discarded" === n?.state,
                        E = "busy" === n?.reason,
                        S = "requested" === n?.state && !a,
                        k = ("requested" === n?.state || "waiting" === n?.state) && a,
                        P = "active" === n?.state,
                        T = n?.isConnected,
                        [N, I, M] = (0, re.A)(),
                        x = (0, ie.hb)((() => {
                            I(), r()
                        }), [r, I]);
                    (0, ie.vJ)((() => {
                        N ? l({
                            sound: "end"
                        }) : S ? l({
                            sound: "incoming"
                        }) : E ? l({
                            sound: "busy"
                        }) : w ? l({
                            sound: "end"
                        }) : k ? l({
                            sound: "ringing"
                        }) : T && l({
                            sound: "connect"
                        })
                    }), [E, w, S, k, T, l, N]), (0, ie.vJ)((() => {
                        n?.id ? M() : p()
                    }), [p, n?.id, M]);
                    const V = (0, nt.A)();
                    (0, Ke.A)(V, T ? 1e3 : void 0);
                    const G = (0, ie.Kr)((() => {
                            const e = n?.state;
                            return N ? s("lng_call_status_hanging") : E ? "busy" : "requesting" === e ? s("lng_call_status_requesting") : "requested" === e ? s(a ? "lng_call_status_ringing" : "lng_call_status_incoming") : "waiting" === e ? s("lng_call_status_waiting") : "active" === e && T ? void 0 : s("lng_call_status_exchanging")
                        }), [E, T, N, a, s, n?.state]),
                        B = "active" === n?.videoState,
                        D = "active" === n?.screencastState,
                        _ = b?.streams,
                        L = _?.ownAudio?.getTracks()[0].enabled,
                        $ = _?.ownPresentation?.getTracks()[0].enabled,
                        F = _?.ownVideo?.getTracks()[0].enabled,
                        [J, j, K] = (0, re.A)(),
                        [H, z, Y] = (0, re.A)(),
                        W = (0, ie.hb)((() => {
                            $ && j(), F && z(), setTimeout((async () => {
                                await U("presentation"), K(), Y()
                            }), 250)
                        }), [$, F, j, z, K, Y]),
                        X = (0, ie.hb)((() => {
                            F && z(), $ && j(), setTimeout((async () => {
                                await U("video"), K(), Y()
                            }), 250)
                        }), [$, F, j, z, K, Y]),
                        Z = (0, ie.hb)((() => {
                            U("audio")
                        }), []),
                        [Q, ee, te] = (0, re.A)(),
                        [ae, ne, ce] = (0, re.A)(),
                        le = (0, ie.hb)((() => {
                            ne(), async function() {
                                if (!b || !b.facingMode) return;
                                const e = b.streams.ownVideo;
                                if (!e) return;
                                const t = e.getTracks()[0];
                                if (!t) return;
                                const a = b.connection.getSenders().find((e => t.id === e.track?.id));
                                if (a) {
                                    b.facingMode = "environment" === b.facingMode ? "user" : "environment";
                                    try {
                                        const e = await R("video", b.facingMode);
                                        await a.replaceTrack(e.getTracks()[0]), b.streams.ownVideo = e, O()
                                    } catch (e) {}
                                }
                            }(), setTimeout(ce, 250)
                        }), [ne, ce]),
                        ue = n?.startDate && Number(new Date) / 1e3 - n.startDate;
                    return (0, ie.vJ)((() => {
                        "discarded" === n?.state && setTimeout(r, 250)
                    }), [r, n?.reason, n?.state]), ie.Ay.createElement(ye.A, {
                        isOpen: n && "discarded" !== n?.state && !o,
                        onClose: C,
                        className: (0, oe.A)(ot.root, y && ot.singleColumn),
                        dialogRef: m
                    }, ie.Ay.createElement(Se.A, {
                        peer: t,
                        size: "jumbo",
                        className: B || D ? ot.blurred : ""
                    }), "active" === n?.screencastState && _?.presentation && ie.Ay.createElement("video", {
                        className: ot.mainVideo,
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        srcObject: _.presentation
                    }), "active" === n?.videoState && _?.video && ie.Ay.createElement("video", {
                        className: ot.mainVideo,
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        srcObject: _.video
                    }), ie.Ay.createElement("video", {
                        className: (0, oe.A)(ot.secondVideo, !J && $ && ot.visible, g && ot.fullscreen),
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        srcObject: _?.ownPresentation
                    }), ie.Ay.createElement("video", {
                        className: (0, oe.A)(ot.secondVideo, !H && F && ot.visible, g && ot.fullscreen),
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        srcObject: _?.ownVideo
                    }), ie.Ay.createElement("div", {
                        className: ot.header
                    }, i.SC && ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        onClick: A,
                        ariaLabel: s(g ? "AccExitFullscreen" : "AccSwitchToFullscreen")
                    }, ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", g ? "icon-smallscreen" : "icon-fullscreen")
                    })), ie.Ay.createElement(ge.A, {
                        round: !0,
                        size: "smaller",
                        color: "translucent",
                        onClick: C,
                        className: ot.closeButton
                    }, ie.Ay.createElement("i", {
                        className: "icon icon-close"
                    }))), ie.Ay.createElement("div", {
                        className: (0, oe.A)(ot.emojisBackdrop, Q && ot.open),
                        onClick: Q ? te : ee
                    }, ie.Ay.createElement("div", {
                        className: (0, oe.A)(ot.emojis, Q && ot.open)
                    }, n?.isConnected && n?.emojis && (0, Ce.A)(n.emojis, ["emoji"])), ie.Ay.createElement("div", {
                        className: (0, oe.A)(ot.emojiTooltip, Q && ot.open)
                    }, s("CallEmojiKeyTooltip", t?.firstName).replace("%%", "%"))), ie.Ay.createElement("div", {
                        className: ot.userInfo
                    }, ie.Ay.createElement("h1", null, t?.firstName), ie.Ay.createElement("span", {
                        className: ot.status
                    }, G || (0, at.QO)(ue || 0))), ie.Ay.createElement("div", {
                        className: ot.buttons
                    }, ie.Ay.createElement(it, {
                        onClick: Z,
                        icon: "microphone",
                        isDisabled: !P,
                        isActive: L,
                        label: s(L ? "lng_call_mute_audio" : "lng_call_unmute_audio")
                    }), ie.Ay.createElement(it, {
                        onClick: X,
                        icon: "video",
                        isDisabled: !P,
                        isActive: F,
                        label: s(F ? "lng_call_stop_video" : "lng_call_start_video")
                    }), F && (i.Ni || i.pz) && ie.Ay.createElement(it, {
                        onClick: le,
                        customIcon: ie.Ay.createElement(Ie.A, {
                            tgsUrl: Te.w.CameraFlip,
                            playSegment: ae ? [0, 10] : [0, 1],
                            size: 32
                        }),
                        isDisabled: !P,
                        label: s("VoipFlip")
                    }), u && ie.Ay.createElement(it, {
                        onClick: W,
                        icon: "share-screen",
                        isDisabled: !P,
                        isActive: $,
                        label: s("lng_call_screencast")
                    }), S && ie.Ay.createElement(it, {
                        onClick: c,
                        icon: "phone-discard",
                        isDisabled: w,
                        label: s("lng_call_accept"),
                        className: ot.accept,
                        iconClassName: ot.acceptIcon
                    }), ie.Ay.createElement(it, {
                        onClick: x,
                        icon: "phone-discard",
                        isDisabled: w,
                        label: s(S ? "lng_call_decline" : "lng_call_end_call"),
                        className: ot.leave
                    })))
                })));
            var rt = a(40664);
            const ct = (0, ie.ph)((e => {
                let {
                    isOpen: t
                } = e;
                const {
                    closeCallRatingModal: a,
                    setCallRating: n
                } = (0, q.ko)(), i = (0, ie.li)(null), o = (0, de.A)(), [s, r] = (0, ie.J0)(), c = (0, ie.hb)((() => {
                    s ? n({
                        rating: s + 1,
                        comment: i.current?.value || ""
                    }) : a()
                }), [a, s, n]), l = (0, ie.hb)((() => {
                    a()
                }), [a]);
                return ie.Ay.createElement(ye.A, {
                    title: o("lng_call_rate_label"),
                    className: "narrow",
                    onClose: a,
                    isOpen: t
                }, ie.Ay.createElement("div", {
                    className: "P7EfDKJN"
                }, new Array(5).fill(void 0).map(((e, t) => {
                    const a = void 0 !== s && s >= t;
                    return ie.Ay.createElement("i", {
                        className: (0, oe.A)("icon", a ? "icon-favorite-filled" : "icon-favorite", a && "_XX6q8YW", "t8LJLFSN"),
                        onClick: (n = t, () => r(s === n ? void 0 : n))
                    });
                    var n
                }))), ie.Ay.createElement(rt.A, {
                    ref: i,
                    placeholder: o("lng_call_rate_comment"),
                    className: (0, oe.A)("EvL0WaKD", 4 !== s && void 0 !== s && "v5hn1XvT")
                }), ie.Ay.createElement("div", {
                    className: "dialog-buttons mt-2"
                }, ie.Ay.createElement(ge.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: c
                }, o("Send")), ie.Ay.createElement(ge.A, {
                    className: "confirm-dialog-button",
                    isText: !0,
                    onClick: l
                }, o("Cancel"))))
            }));
            (i.Yw || i.pz) && document.addEventListener("click", n.cw, {
                once: !0
            })
        }
    }
]);