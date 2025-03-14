(() => {
    var e, t, n = {
            28480: (e, t, n) => {
                "use strict";
                var s = {};
                n.r(s), n.d(s, {
                    Type: () => Ia,
                    clear: () => Ca,
                    fetch: () => ba,
                    isCacheApiSupported: () => wa,
                    remove: () => va,
                    save: () => Sa
                });
                var i = {};
                n.r(i), n.d(i, {
                    abortChatRequests: () => Qa,
                    abortRequestGroup: () => Za,
                    acceptBotUrlAuth: () => So,
                    acceptCall: () => $o,
                    acceptLinkUrlAuth: () => Co,
                    acceptPhoneCall: () => Rp,
                    activateStealthMode: () => Qp,
                    addChatMembers: () => qr,
                    allowBotSendMessages: () => Mo,
                    answerCallbackButton: () => ao,
                    applyBoost: () => wf,
                    applyGiftCode: () => Cf,
                    blockUser: () => Lu,
                    broadcastLocalDbUpdateFull: () => ke,
                    changeSessionSettings: () => Ad,
                    changeSessionTtl: () => yd,
                    checkChatUsername: () => gu,
                    checkChatlistInvite: () => sd,
                    checkGiftCode: () => vf,
                    checkPassword: () => Rl,
                    checkUsername: () => xu,
                    clearPassword: () => Ul,
                    clearRecentReactions: () => zl,
                    clearRecentStickers: () => Qc,
                    clickSponsoredMessage: () => lc,
                    closePoll: () => Zd,
                    confirmCall: () => Qo,
                    confirmPhoneCall: () => Bp,
                    createChalistInvite: () => rd,
                    createChannel: () => dr,
                    createGroupCall: () => qo,
                    createGroupChat: () => hr,
                    createPhoneCallState: () => Cp,
                    createTopic: () => Zr,
                    deactivateAllUsernames: () => yu,
                    decodePhoneCallData: () => Tp,
                    deleteChannel: () => fr,
                    deleteChat: () => lr,
                    deleteChatFolder: () => Sr,
                    deleteChatMember: () => Or,
                    deleteChatUser: () => ur,
                    deleteChatlistInvite: () => dd,
                    deleteContact: () => Hc,
                    deleteExportedChatInvite: () => vu,
                    deleteHistory: () => Fd,
                    deleteMessages: () => Hd,
                    deleteProfilePhotos: () => _u,
                    deleteRevokedExportedChatInvites: () => Cu,
                    deleteSavedHistory: () => _d,
                    deleteScheduledMessages: () => Gd,
                    deleteStory: () => Fp,
                    deleteTopic: () => ed,
                    destroy: () => Oa,
                    destroyPhoneCallState: () => Pp,
                    discardCall: () => zo,
                    discardGroupCall: () => Eo,
                    disconnect: () => ja,
                    downloadMedia: () => Ja,
                    editChatFolder: () => br,
                    editChatPhoto: () => mr,
                    editChatlistInvite: () => cd,
                    editExportedChatInvite: () => bu,
                    editGroupCallParticipant: () => xo,
                    editGroupCallTitle: () => No,
                    editMessage: () => kd,
                    editStoryPrivacy: () => zp,
                    editTopic: () => nd,
                    encodePhoneCallData: () => Mp,
                    exportChatInvite: () => Su,
                    exportGroupCallInvite: () => Ho,
                    exportMessageLink: () => vc,
                    faveSticker: () => Kc,
                    fetchAllStories: () => kp,
                    fetchAnimatedEmojiEffects: () => eu,
                    fetchAnimatedEmojis: () => Xc,
                    fetchAppConfig: () => hl,
                    fetchAuthorizations: () => zu,
                    fetchAvailableEffects: () => Fl,
                    fetchAvailableReactions: () => Gl,
                    fetchBlockedUsers: () => ju,
                    fetchBoostList: () => bf,
                    fetchBoostStatus: () => If,
                    fetchBotApp: () => ho,
                    fetchBotCanSendMessage: () => Po,
                    fetchChannelRecommendations: () => fd,
                    fetchChannelStatistics: () => ap,
                    fetchChat: () => sr,
                    fetchChatFolders: () => wr,
                    fetchChatInviteImporters: () => Pu,
                    fetchChatSettings: () => tr,
                    fetchChatlistInvites: () => ud,
                    fetchChats: () => Yo,
                    fetchCollectionInfo: () => Uf,
                    fetchCommonChats: () => Rc,
                    fetchConfig: () => ml,
                    fetchContactList: () => Dc,
                    fetchContentSettings: () => pl,
                    fetchCountryList: () => wl,
                    fetchCurrentUser: () => Ya,
                    fetchCustomEmoji: () => Yc,
                    fetchCustomEmojiSets: () => jc,
                    fetchDefaultStatusEmojis: () => iu,
                    fetchDefaultTagReactions: () => Wl,
                    fetchDefaultTopicIcons: () => su,
                    fetchDiscussionMessage: () => Wd,
                    fetchEmojiKeywords: () => pu,
                    fetchExportedChatInvites: () => Iu,
                    fetchExtendedMedia: () => Xd,
                    fetchFactChecks: () => zd,
                    fetchFavoriteStickers: () => zc,
                    fetchFeaturedEmojiStickers: () => Jc,
                    fetchFeaturedStickers: () => Wc,
                    fetchFullChat: () => er,
                    fetchFullUser: () => Bc,
                    fetchGenericEmojiEffects: () => tu,
                    fetchGiveawayInfo: () => Sf,
                    fetchGlobalPrivacySettings: () => Il,
                    fetchGroupCallParticipants: () => Go,
                    fetchGroupStatistics: () => op,
                    fetchGroupsForDiscussion: () => Hr,
                    fetchInlineBot: () => ro,
                    fetchInlineBotResults: () => co,
                    fetchLangDifference: () => nl,
                    fetchLangPack: () => tl,
                    fetchLanguage: () => il,
                    fetchLanguages: () => sl,
                    fetchLeaveChatlistSuggestions: () => ad,
                    fetchMembers: () => Nr,
                    fetchMessage: () => Td,
                    fetchMessagePublicForwards: () => dp,
                    fetchMessageReactions: () => ql,
                    fetchMessageReactionsList: () => Ol,
                    fetchMessageStatistics: () => rp,
                    fetchMessageViews: () => Vd,
                    fetchMessages: () => Md,
                    fetchMyBoosts: () => yf,
                    fetchNearestCountry: () => Uc,
                    fetchNotificationExceptions: () => Zu,
                    fetchNotificationSettings: () => Yu,
                    fetchOutboxReadDate: () => Ic,
                    fetchPeerColors: () => gl,
                    fetchPeerProfileStories: () => Ep,
                    fetchPeerStories: () => Dp,
                    fetchPeerStoriesByIds: () => Np,
                    fetchPinnedMessages: () => ac,
                    fetchPremiumGifts: () => nu,
                    fetchPremiumPromo: () => gf,
                    fetchPrivacySettings: () => rl,
                    fetchProfilePhotos: () => Gc,
                    fetchQuickReplies: () => bc,
                    fetchRecentEmojiStatuses: () => fu,
                    fetchRecentReactions: () => Vl,
                    fetchRecentStickers: () => Vc,
                    fetchRecommendedChatFolders: () => Ir,
                    fetchSavedChats: () => Xo,
                    fetchSavedGifs: () => ou,
                    fetchSavedReactionTags: () => Jl,
                    fetchScheduledHistory: () => nc,
                    fetchSeenBy: () => oc,
                    fetchSendAs: () => rc,
                    fetchSponsoredMessages: () => cc,
                    fetchStarsStatus: () => Tf,
                    fetchStarsTopupOptions: () => Rf,
                    fetchStarsTransactions: () => Bf,
                    fetchStatisticsAsyncGraph: () => cp,
                    fetchStickerSets: () => Lc,
                    fetchStickers: () => Zc,
                    fetchStickersForEmoji: () => lu,
                    fetchStoriesArchive: () => xp,
                    fetchStoriesMaxIds: () => Jp,
                    fetchStoriesViews: () => jp,
                    fetchStoryLink: () => Lp,
                    fetchStoryPublicForwards: () => lp,
                    fetchStoryStatistics: () => up,
                    fetchStoryViewList: () => Op,
                    fetchTemporaryPaymentPassword: () => Af,
                    fetchTimezones: () => Al,
                    fetchTopInlineBots: () => oo,
                    fetchTopReactions: () => Ll,
                    fetchTopUsers: () => kc,
                    fetchTopicById: () => Xr,
                    fetchTopics: () => Yr,
                    fetchUnreadMentions: () => hc,
                    fetchUnreadReactions: () => mc,
                    fetchUsers: () => Ec,
                    fetchWallpapers: () => qu,
                    fetchWebAuthorizations: () => Ku,
                    fetchWebPagePreview: () => $d,
                    findFirstMessageIdAfterDate: () => tc,
                    forwardMessages: () => ec,
                    getChatByPhoneNumber: () => Pr,
                    getChatByUsername: () => Mr,
                    getDhConfig: () => Vo,
                    getGroupCall: () => Do,
                    getPasswordInfo: () => Tl,
                    getPaymentForm: () => hf,
                    getPremiumGiftCodeOptions: () => Pf,
                    getReceipt: () => mf,
                    hideAllChatJoinRequests: () => Tu,
                    hideChatJoinRequest: () => Mu,
                    hideChatReportPanel: () => Bu,
                    importChatInvite: () => Wr,
                    importContact: () => xc,
                    installStickerSet: () => du,
                    invokeWebViewCustomMethod: () => To,
                    joinChannel: () => cr,
                    joinChatlistInvite: () => id,
                    joinGroupCall: () => _o,
                    joinGroupCallPresentation: () => Oo,
                    launchPrepaidGiveaway: () => Mf,
                    leaveChannel: () => pr,
                    leaveChatlist: () => od,
                    leaveGroupCall: () => Fo,
                    leaveGroupCallPresentation: () => Lo,
                    loadAttachBot: () => wo,
                    loadAttachBots: () => yo,
                    loadPollOptionResults: () => Yd,
                    markMessageListRead: () => jd,
                    markMessagesRead: () => Ld,
                    markStoryRead: () => Gp,
                    migrateChat: () => Fr,
                    oldFetchLangPack: () => al,
                    oldFetchLangStrings: () => ol,
                    openChatByInvite: () => _r,
                    pinMessage: () => xd,
                    prolongWebView: () => go,
                    provideAuthCode: () => xi,
                    provideAuthPassword: () => Ni,
                    provideAuthPhoneNumber: () => Ei,
                    provideAuthRegistration: () => Hi,
                    provideRecoveryEmailCode: () => El,
                    readAllMentions: () => pc,
                    readAllReactions: () => fc,
                    receivedCall: () => Ko,
                    registerDevice: () => dl,
                    removeRecentSticker: () => $c,
                    reorderUsernames: () => vl,
                    repairFileReference: () => Xa,
                    reportMessages: () => qd,
                    reportPeer: () => md,
                    reportProfilePhoto: () => gd,
                    reportSpam: () => Fc,
                    reportSponsoredMessage: () => hd,
                    reportStory: () => Vp,
                    requestAppWebView: () => mo,
                    requestBotUrlAuth: () => bo,
                    requestCall: () => Wo,
                    requestChannelDifference: () => so,
                    requestChatUpdate: () => ir,
                    requestLinkUrlAuth: () => vo,
                    requestPhoneCall: () => Up,
                    requestSimpleWebView: () => fo,
                    requestWebView: () => po,
                    rescheduleMessage: () => Dd,
                    resolveBusinessChatLink: () => wd,
                    restartAuth: () => Gi,
                    restartAuthWithQr: () => Fi,
                    saveCloseFriends: () => qc,
                    saveDefaultSendAs: () => dc,
                    saveDraft: () => ar,
                    saveGif: () => ru,
                    searchChats: () => nr,
                    searchGifs: () => uu,
                    searchMessagesGlobal: () => Kd,
                    searchMessagesLocal: () => Jd,
                    searchStickers: () => au,
                    sendEmojiInteraction: () => Hl,
                    sendInlineBotResult: () => uo,
                    sendMessage: () => Rd,
                    sendMessageAction: () => Od,
                    sendPaymentForm: () => pf,
                    sendPollVote: () => Qd,
                    sendQuickReply: () => Sc,
                    sendReaction: () => _l,
                    sendScheduledMessages: () => sc,
                    sendSignalingData: () => Zo,
                    sendStarPaymentForm: () => ff,
                    sendStoryReaction: () => $p,
                    sendWatchingEmojiInteraction: () => Nl,
                    sendWebViewData: () => Ao,
                    setAllowHttpTransport: () => to,
                    setBotInfo: () => Bo,
                    setCallRating: () => Jo,
                    setChatEnabledReactions: () => Jr,
                    setChatUsername: () => Au,
                    setDefaultReaction: () => jl,
                    setDiscussionGroup: () => Gr,
                    setForceHttpTransport: () => eo,
                    setPrivacySettings: () => ul,
                    setShouldDebugExportedSenders: () => no,
                    setViewForumAsMessages: () => pd,
                    sortChatFolders: () => vr,
                    startBot: () => lo,
                    terminateAllAuthorizations: () => Ju,
                    terminateAllWebAuthorizations: () => Qu,
                    terminateAuthorization: () => Wu,
                    terminateWebAuthorization: () => $u,
                    toggleAttachBot: () => Io,
                    toggleChatArchived: () => yr,
                    toggleChatPinned: () => gr,
                    toggleDialogUnread: () => Cr,
                    toggleForum: () => Qr,
                    toggleGroupCallStartSubscription: () => jo,
                    toggleIsProtected: () => Kr,
                    toggleJoinRequest: () => Lr,
                    toggleJoinToSend: () => jr,
                    toggleParticipantsHidden: () => $r,
                    togglePeerTranslations: () => ld,
                    togglePinnedTopic: () => td,
                    togglePreHistoryHidden: () => Br,
                    toggleSavedDialogPinned: () => Ar,
                    toggleSignatures: () => xr,
                    toggleSponsoredMessages: () => Id,
                    toggleStoriesHidden: () => Wp,
                    toggleStoryInProfile: () => _p,
                    toggleStoryPinnedToTop: () => qp,
                    toggleUsername: () => Sl,
                    transcribeAudio: () => gc,
                    translateText: () => Ac,
                    unblockUser: () => Vu,
                    uninstallStickerSet: () => cu,
                    unpinAllMessages: () => Nd,
                    unregisterDevice: () => cl,
                    updateChatAbout: () => Er,
                    updateChatAdmin: () => kr,
                    updateChatDefaultBannedRights: () => Rr,
                    updateChatMemberBannedRights: () => Ur,
                    updateChatMutedState: () => or,
                    updateChatTitle: () => Dr,
                    updateContact: () => Nc,
                    updateContactSignUpNotification: () => Xu,
                    updateContentSettings: () => fl,
                    updateEmojiStatus: () => _c,
                    updateGlobalPrivacySettings: () => bl,
                    updateIsOnline: () => ll,
                    updateNotificationSettings: () => el,
                    updatePassword: () => kl,
                    updatePrivateLink: () => wu,
                    updateProfile: () => Eu,
                    updateProfilePhoto: () => Hu,
                    updateRecoveryEmail: () => Dl,
                    updateSavedReactionTag: () => Kl,
                    updateTopicMutedState: () => rr,
                    updateUsername: () => Nu,
                    uploadContactProfilePhoto: () => Fu,
                    uploadProfilePhoto: () => Gu,
                    uploadWallpaper: () => Ou,
                    validateRequestedInfo: () => lf,
                    viewSponsoredMessage: () => uc,
                    viewStory: () => Hp
                });
                const a = "A",
                    o = !1,
                    r = !1,
                    d = !1,
                    c = "https://telegram-a-host",
                    u = !1,
                    l = "tt-media",
                    p = "tt-media-avatars",
                    f = 524288,
                    h = 16,
                    m = 16,
                    g = ("undefined" != typeof window && window.innerHeight, 20),
                    A = 200,
                    y = 50,
                    w = 100,
                    I = 100,
                    b = 100,
                    S = 100,
                    v = 100,
                    C = 50,
                    P = 100,
                    M = 50,
                    T = 100,
                    B = 100,
                    R = 100,
                    U = 20,
                    k = 3e5,
                    D = 2 ** 31 - 1,
                    E = Math.round(450),
                    x = new Set(["newMessage", "newScheduledMessage", "deleteMessages", "deleteScheduledMessages", "deleteHistory", "updateThreadInfos"]),
                    N = 20,
                    H = 20,
                    G = "status-default-icon",
                    F = "video/webm",
                    _ = "image/gif",
                    q = "application/x-tgsticker",
                    O = F,
                    j = new Set(["image/png", "image/jpeg", _]),
                    L = new Set(["video/mp4", "video/quicktime"]),
                    V = new Set(["audio/mp3", "audio/ogg", "audio/wav", "audio/mpeg", "audio/flac", "audio/aac", "audio/m4a", "audio/mp4", "audio/x-m4a"]),
                    z = (new Set([...j, ...L]), new Set(["t.me", "web.t.me", "a.t.me", "k.t.me", "z.t.me"]), "weba"),
                    W = (new Set(["AU", "BD", "CA", "CO", "EG", "HN", "IE", "IN", "JO", "MX", "MY", "NI", "NZ", "PH", "PK", "SA", "SV", "US"]), "777000"),
                    J = 14,
                    K = "gif",
                    $ = 0,
                    Q = 1,
                    Z = "-1000000000777",
                    Y = "android",
                    X = 1,
                    ee = 86400,
                    te = 86400,
                    ne = 11,
                    se = {
                        uploadMaxFileparts: [4e3, 8e3],
                        stickersFaved: [5, 10],
                        savedGifs: [200, 400],
                        dialogFiltersChats: [100, 200],
                        dialogFilters: [10, 20],
                        dialogFolderPinned: [5, 10],
                        captionLength: [1024, 2048],
                        channels: [500, 1e3],
                        channelsPublic: [10, 20],
                        aboutLength: [70, 140],
                        chatlistInvites: [3, 100],
                        chatlistJoined: [2, 20],
                        recommendedChannels: [10, 100],
                        savedDialogsPinned: [5, 100]
                    },
                    ie = ["log", "error", "warn", "info", "debug"];

                function ae(e, t) {
                    let n, s, i, a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return function() {
                        s = !0;
                        for (var o = arguments.length, r = new Array(o), d = 0; d < o; d++) r[d] = arguments[d];
                        i = r, n || (a && (s = !1, e(...i)), n = self.setInterval((() => {
                            if (!s) return self.clearInterval(n), void(n = void 0);
                            s = !1, e(...i)
                        }), t))
                    }
                }

                function oe(e) {
                    return function(e, t) {
                        let n, s = !1;
                        return function() {
                            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                            n = a, s || (s = !0, e((() => {
                                s = !1, t(...n)
                            })))
                        }
                    }(ce, e)
                }
                ie.reduce(((e, t) => (e[t] = console[t], e)), {});
                const re = e => new Promise((t => {
                    setTimeout((() => t()), e)
                }));
                let de;

                function ce(e) {
                    de ? de.push(e) : (de = [e], Promise.resolve().then((() => {
                        const e = de;
                        de = void 0, e.forEach((e => e()))
                    })))
                }
                var ue = n(45174);

                function le(e) {
                    return e.hasOwnProperty("userId")
                }

                function pe(e) {
                    return e.hasOwnProperty("chatId")
                }

                function fe(e, t) {
                    return "user" === t ? e.toString() : "channel" === t ? `-1${e.toString().padStart(J-2,"0")}` : `-${e}`
                }

                function he(e) {
                    return le(e) ? fe(e.userId, "user") : pe(e) ? fe(e.chatId, "chat") : fe(e.channelId, "channel")
                }

                function me(e) {
                    const {
                        color: t,
                        backgroundEmojiId: n
                    } = e;
                    return {
                        color: t,
                        backgroundEmojiId: n?.toString()
                    }
                }

                function ge(e) {
                    return e instanceof ue.Api.EmojiStatus ? {
                        documentId: e.documentId.toString()
                    } : e instanceof ue.Api.EmojiStatusUntil ? {
                        documentId: e.documentId.toString(),
                        until: e.until
                    } : void 0
                }
                var Ae = n(92096),
                    ye = n.n(Ae),
                    we = n(43355);

                function Ie(e) {
                    return `${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"":`data:${arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/jpeg"};base64,`}${btoa(String.fromCharCode(...e))}`
                }

                function be(e) {
                    const {
                        flags: t,
                        CONSTRUCTOR_ID: n,
                        SUBCLASS_OF_ID: s,
                        className: i,
                        classType: a,
                        getBytes: o,
                        ...r
                    } = e;
                    return r
                }
                var Se = n(48287).hp;
                const ve = "BroadcastChannel" in self,
                    Ce = ve ? new BroadcastChannel("tt-global") : void 0;
                let Pe = [];
                const Me = ae((() => {
                    Ce.postMessage({
                        type: "localDbUpdate",
                        batchedUpdates: Pe
                    }), Pe = []
                }), 100);

                function Te(e) {
                    if (e instanceof Uint8Array) return Se.from(e);
                    if ("object" == typeof e && 1 === Object.keys(e).length && "value" === Object.keys(e)[0]) return ye()(e.value);
                    if (Array.isArray(e)) return e.map(Te);
                    if ("object" != typeof e || !("CONSTRUCTOR_ID" in e)) return e;
                    const t = e.className.split(".").reduce(((e, t) => e[t]), we.constructors),
                        n = be(e);
                    return new t(Object.keys(n).reduce(((e, t) => (e[t] = Te(n[t]), e)), {}))
                }

                function Be(e) {
                    return ["localMessages", "chats", "users", "messages", "documents", "stickerSets", "photos", "webDocuments", "stories", "commonBoxState", "channelPtsById"].reduce(((t, n) => {
                        const s = e?.[n] ?? {},
                            i = Object.keys(s).reduce(((e, t) => {
                                if ("commonBoxState" === n || "channelPtsById" === n) {
                                    const n = s;
                                    return e[t] = n[t], e
                                }
                                return e[t] = Te(s[t]), e
                            }), {});
                        var a;
                        return t[n] = ve ? (a = n, new Proxy(i, {
                            get: (e, t, n) => Reflect.get(e, t, n),
                            set: (e, t, n) => (Pe.push({
                                name: a,
                                prop: t,
                                value: n
                            }), Me(), Reflect.set(e, t, n))
                        })) : i, t
                    }), {})
                }
                const Re = Be(),
                    Ue = Re;

                function ke() {
                    Ce && Ce.postMessage({
                        type: "localDbUpdateFull",
                        localDb: Object.keys(Re).reduce(((e, t) => (e[t] = {
                            ...Re[t]
                        }, e)), {})
                    })
                }
                d && (globalThis.getLocalDb = () => Re);
                var De = n(48287).hp;
                const Ee = "#111111DD",
                    xe = "#E4D00A",
                    Ne = {
                        INVOKE: "#49DBF5",
                        BEACON: "#F549DB",
                        RESPONSE: "#6887F7",
                        CONNECTING: "#E4D00A",
                        CONNECTED: "#26D907",
                        "CONNECTING ERROR": "#D1191C",
                        "INVOKE ERROR": "#D1191C",
                        UPDATE: "#0DD151",
                        "UNEXPECTED UPDATE": "#9C9C9C",
                        "UNEXPECTED RESPONSE": "#D1191C"
                    };

                function He(e) {
                    if (e instanceof ue.Api.Message || e instanceof ue.Api.MessageService) return he(e.peerId)
                }

                function Ge(e) {
                    return e instanceof ue.Api.DialogFilter || e instanceof ue.Api.DialogFilterChatlist
                }

                function Fe(e) {
                    e instanceof ue.Api.Message && (e.media && _e(e.media, e), e.replyTo instanceof ue.Api.MessageReplyHeader && e.replyTo.replyMedia && _e(e.replyTo.replyMedia, e)), e instanceof ue.Api.MessageService && "photo" in e.action && Oe(Ve(e.action.photo, e)), e instanceof ue.Api.SponsoredMessage && e.photo && Oe(e.photo)
                }

                function _e(e, t) {
                    e instanceof ue.Api.MessageMediaDocument && e.document && je(Ve(e.document, t)), e instanceof ue.Api.MessageMediaWebPage && e.webpage instanceof ue.Api.WebPage && (e.webpage.document && je(Ve(e.webpage.document, t)), e.webpage.photo && Oe(Ve(e.webpage.photo, t))), e instanceof ue.Api.MessageMediaGame && (e.game.document && je(Ve(e.game.document, t)), Oe(Ve(e.game.photo, t))), e instanceof ue.Api.MessageMediaPhoto && e.photo && Oe(Ve(e.photo, t)), e instanceof ue.Api.MessageMediaInvoice && (e.photo && Je(Ve(e.photo, t)), e.extendedMedia instanceof ue.Api.MessageExtendedMedia && _e(e.extendedMedia.media, t)), e instanceof ue.Api.MessageMediaPaidMedia && e.extendedMedia.forEach((e => {
                        e instanceof ue.Api.MessageExtendedMedia && _e(e.media, t)
                    }))
                }

                function qe(e, t) {
                    e instanceof ue.Api.StoryItem && (e.media instanceof ue.Api.MessageMediaPhoto && e.media.photo && Oe(Le(e.media.photo, t, e)), e.media instanceof ue.Api.MessageMediaDocument && (e.media.document instanceof ue.Api.Document && je(Le(e.media.document, t, e)), e.media.altDocument instanceof ue.Api.Document && je(Le(e.media.altDocument, t, e))))
                }

                function Oe(e) {
                    e instanceof ue.Api.Photo && (Ue.photos[String(e.id)] = e)
                }

                function je(e) {
                    e instanceof ue.Api.Document && (Ue.documents[String(e.id)] = e)
                }

                function Le(e, t, n) {
                    if (!(e instanceof ue.Api.Document && e instanceof ue.Api.Photo)) return e;
                    const s = e;
                    return s.localRepairInfo = {
                        type: "story",
                        peerId: t,
                        id: n.id
                    }, s
                }

                function Ve(e, t) {
                    if (!t?.peerId) return e;
                    if (!(e instanceof ue.Api.Document || e instanceof ue.Api.Photo || e instanceof ue.Api.WebDocument)) return e;
                    const n = e;
                    return n.localRepairInfo = {
                        type: "message",
                        peerId: he(t.peerId),
                        id: t.id
                    }, n
                }

                function ze(e) {
                    const t = fe(e.id, "user"),
                        n = Ue.users[t];
                    e.photo instanceof ue.Api.Photo && Oe(e.photo), n && !n.min && e.min || (Ue.users[t] = e)
                }

                function We(e) {
                    e.forEach((e => {
                        e instanceof ue.Api.User ? ze(e) : (e instanceof ue.Api.Chat || e instanceof ue.Api.Channel) && function(e) {
                            const t = fe(e.id, e instanceof ue.Api.Chat ? "chat" : "channel"),
                                n = Ue.chats[t],
                                s = n && "min" in n && n.min,
                                i = "min" in e && e.min;
                            n && !s && i || (Ue.chats[t] = e)
                        }(e)
                    }))
                }

                function Je(e) {
                    Ue.webDocuments[e.url] = e
                }

                function Ke(e) {
                    return String.fromCharCode(...e)
                }

                function $e(e) {
                    return De.from(e, "binary")
                }

                function Qe(e) {
                    const t = "UNEXPECTED RESPONSE" === e ? console.error : "INVOKE ERROR" === e || "UNEXPECTED UPDATE" === e ? console.warn : console.log;
                    for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) s[i - 1] = arguments[i];
                    t(`%cGramJS%c${e}`, `color: ${xe}; background: ${Ee}; padding: 0.25rem; border-radius: 0.25rem;`, `color: ${Ne[e]}; background: ${Ee}; padding: 0.25rem; border-radius: 0.25rem; margin-left: 0.25rem;`, ...s)
                }

                function Ze(e, t) {
                    return e.reduce(((e, n) => (e[n[t]] = n, e)), {})
                }

                function Ye(e, t) {
                    return e.reduce(((e, n) => {
                        const [s, i] = t(n);
                        return e[s] = i, e
                    }), {})
                }

                function Xe(e, t) {
                    return t.reduce(((t, n) => (t[n] = e[n], t)), {})
                }

                function et(e, t) {
                    return t.reduce(((t, n) => (e[n] && (t[n] = e[n]), t)), {})
                }

                function tt(e, t) {
                    const n = new Set(t.map(String));
                    return Xe(e, Object.keys(e).filter((e => !n.has(e))))
                }

                function nt(e) {
                    return Object.keys(e).reduce(((t, n) => {
                        const s = n;
                        return void 0 !== e[s] && (t[s] = e[s]), t
                    }), {})
                }

                function st(e) {
                    return e.filter(Boolean)
                }

                function it(e, t) {
                    const n = [];
                    for (let s = 0; s < e.length; s += t) n.push(e.slice(s, s + t));
                    return n
                }
                let at = 0;

                function ot() {
                    return at
                }

                function rt() {
                    return Math.floor(Date.now() / 1e3) + at
                }
                var dt = n(56215),
                    ct = n(97335);
                const ut = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {{width}} {{height}}" xml:space="preserve"><path fill-opacity="0.1" d="{{path}}" /></svg>',
                    lt = "AACAAAAHAAALMAAAQASTAVAAAZaacaaaahaaalmaaaqastava.az0123456789-,";
                const pt = {
                    w: 100,
                    h: 100
                };

                function ft(e, t) {
                    if (!e || !e.length) return;
                    const n = e.find((e => e instanceof ue.Api.PhotoStrippedSize));
                    if (!n) return;
                    const s = e.filter((e => e instanceof ue.Api.PhotoSize)),
                        {
                            w: i,
                            h: a
                        } = s.length ? s[s.length - 1] : pt,
                        {
                            bytes: o
                        } = n;
                    return {
                        dataUri: Ie(t && "image/jpeg" !== t ? o : (0, dt.strippedPhotoToJpg)(o), void 0, t),
                        width: i,
                        height: a
                    }
                }

                function ht(e, t) {
                    const {
                        w: n,
                        h: s
                    } = t;
                    return {
                        dataUri: `data:image/svg+xml;utf8,${i=e.bytes,a=n,o=s,ut.replace("{{path}}",function(e){let t="M";const n=e.length;for(let s=0;s<n;s++){const n=e[s];n>=192?t+=lt[n-128-64]:(n>=128?t+=",":n>=64&&(t+="-"),t+=String(63&n))}return t+="z",t}(i)).replace("{{width}}",String(a)).replace("{{height}}",String(o))}`,
                        width: n,
                        height: s
                    };
                    var i, a, o
                }

                function mt(e, t) {
                    const n = e.sizes.filter((e => e instanceof ue.Api.PhotoSize || e instanceof ue.Api.PhotoSizeProgressive)).map(At);
                    return {
                        mediaType: "photo",
                        id: String(e.id),
                        thumbnail: ft(e.sizes),
                        sizes: n,
                        isSpoiler: t,
                        date: e.date,
                        ...e.videoSizes && {
                            videoSizes: st(e.videoSizes.map(gt)),
                            isVideo: !0
                        }
                    }
                }

                function gt(e) {
                    if (!(e instanceof ue.Api.VideoSize)) return;
                    const {
                        videoStartTs: t,
                        size: n,
                        h: s,
                        w: i,
                        type: a
                    } = e;
                    return {
                        videoStartTs: t,
                        size: n,
                        height: s,
                        width: i,
                        type: a
                    }
                }

                function At(e) {
                    const {
                        w: t,
                        h: n,
                        type: s
                    } = e;
                    return {
                        width: t,
                        height: n,
                        type: s
                    }
                }

                function yt(e) {
                    if (!(e.usernames || "username" in e && e.username)) return;
                    const t = [];
                    return "username" in e && e.username && t.push({
                        username: e.username,
                        isActive: !0,
                        isEditable: !0
                    }), e.usernames && e.usernames.forEach((e => {
                        let {
                            username: n,
                            active: s,
                            editable: i
                        } = e;
                        t.push({
                            username: n,
                            ...s && {
                                isActive: !0
                            },
                            ...i && {
                                isEditable: !0
                            }
                        })
                    })), t
                }

                function wt(e) {
                    let t, n, s, i, a, o, r;
                    const d = Ue.chats;
                    return e.forEach((e => {
                        e instanceof ue.Api.PrivacyValueAllowAll ? t || (t = "everybody") : e instanceof ue.Api.PrivacyValueAllowContacts ? t || (t = "contacts") : e instanceof ue.Api.PrivacyValueAllowCloseFriends ? t || (t = "closeFriends") : e instanceof ue.Api.PrivacyValueDisallowContacts ? t || (t = "nonContacts") : e instanceof ue.Api.PrivacyValueDisallowAll ? t || (t = "nobody") : e instanceof ue.Api.PrivacyValueAllowUsers ? s = e.users.map((e => fe(e, "user"))) : e instanceof ue.Api.PrivacyValueDisallowUsers ? a = e.users.map((e => fe(e, "user"))) : e instanceof ue.Api.PrivacyValueAllowChatParticipants ? i = e.chats.map((e => {
                            const t = fe(e, "chat"),
                                n = fe(e, "channel");
                            return d[t] ? t : n
                        })) : e instanceof ue.Api.PrivacyValueDisallowChatParticipants ? o = e.chats.map((e => {
                            const t = fe(e, "chat"),
                                n = fe(e, "channel");
                            return d[t] ? t : n
                        })) : e instanceof ue.Api.PrivacyValueAllowPremium && (r = !0)
                    })), t || (t = "nobody", n = !0), {
                        visibility: t,
                        isUnspecified: n,
                        allowUserIds: s || [],
                        allowChatIds: i || [],
                        blockUserIds: a || [],
                        blockChatIds: o || [],
                        shouldAllowPremium: r
                    }
                }

                function It(e) {
                    const {
                        text: t,
                        entities: n
                    } = e;
                    return {
                        text: t,
                        entities: n.map(bt)
                    }
                }

                function bt(e) {
                    const {
                        className: t,
                        offset: n,
                        length: s
                    } = e;
                    return e instanceof ue.Api.MessageEntityMentionName ? {
                        type: ct.C7.MentionName,
                        offset: n,
                        length: s,
                        userId: fe(e.userId, "user")
                    } : e instanceof ue.Api.MessageEntityTextUrl ? {
                        type: ct.C7.TextUrl,
                        offset: n,
                        length: s,
                        url: e.url
                    } : e instanceof ue.Api.MessageEntityPre ? {
                        type: ct.C7.Pre,
                        offset: n,
                        length: s,
                        language: e.language
                    } : e instanceof ue.Api.MessageEntityCustomEmoji ? {
                        type: ct.C7.CustomEmoji,
                        offset: n,
                        length: s,
                        documentId: e.documentId.toString()
                    } : e instanceof ue.Api.MessageEntityBlockquote ? {
                        type: ct.C7.Blockquote,
                        canCollapse: e.collapsed,
                        offset: n,
                        length: s
                    } : {
                        type: t,
                        offset: n,
                        length: s
                    }
                }

                function St(e) {
                    if ("photoId" in e) return e.photoId.toString()
                }

                function vt(e, t, n) {
                    if (e instanceof ue.Api.DocumentEmpty) return;
                    const {
                        mimeType: s,
                        videoThumbs: i
                    } = e, a = e.attributes.find((e => e instanceof ue.Api.DocumentAttributeSticker)), o = e.attributes.find((e => e instanceof ue.Api.DocumentAttributeCustomEmoji));
                    if (!a && !o) return;
                    const r = s === q,
                        d = s === O,
                        c = Boolean(o),
                        u = c && o.textColor,
                        l = e.attributes.find((e => e instanceof ue.Api.DocumentAttributeImageSize)),
                        p = e.attributes.find((e => e instanceof ue.Api.DocumentAttributeVideo)),
                        f = l || p,
                        h = a || o,
                        m = (w = h?.stickerset, w instanceof ue.Api.InputStickerSetID ? {
                            id: String(w.id),
                            accessHash: String(w.accessHash)
                        } : w instanceof ue.Api.InputStickerSetShortName ? {
                            shortName: w.shortName
                        } : {
                            isMissing: !0
                        }),
                        g = h?.alt,
                        A = Boolean(o?.free ?? !0) && !n,
                        y = e.thumbs && e.thumbs.find((e => e instanceof ue.Api.PhotoCachedSize));
                    var w;
                    if (!(s !== O || self.isWebmSupported || y || e.thumbs && e.thumbs.find((e => e instanceof ue.Api.PhotoSize)))) return;
                    const I = e.thumbs && e.thumbs.find((e => e instanceof ue.Api.PhotoPathSize)),
                        b = y ? function(e) {
                            const {
                                w: t,
                                h: n,
                                bytes: s
                            } = e;
                            return {
                                dataUri: Ie(s, void 0, "image/webp"),
                                width: t,
                                height: n
                            }
                        }(y) : I && f ? ht(I, f) : void 0,
                        {
                            w: S,
                            h: v
                        } = y || f || {},
                        C = !t && i && st(i?.filter((e => e instanceof ue.Api.VideoSize))).some((e => {
                            let {
                                type: t
                            } = e;
                            return "f" === t
                        }));
                    return {
                        mediaType: "sticker",
                        id: String(e.id),
                        stickerSetInfo: m,
                        emoji: g,
                        isCustomEmoji: c,
                        isLottie: r,
                        isVideo: d,
                        width: S,
                        height: v,
                        thumbnail: b,
                        hasEffect: C,
                        isFree: A,
                        shouldUseTextColor: u
                    }
                }

                function Ct(e) {
                    const {
                        archived: t,
                        installedDate: n,
                        id: s,
                        accessHash: i,
                        title: a,
                        thumbs: o,
                        count: r,
                        shortName: d,
                        emojis: c,
                        thumbDocumentId: u
                    } = e, l = o?.some((e => "s" === e.type)), p = o?.some((e => "a" === e.type)), f = o?.some((e => "v" === e.type)), h = u && String(u), m = l || p || f || Boolean(h);
                    return {
                        isArchived: t,
                        isEmoji: c,
                        installedDate: n,
                        id: String(s),
                        accessHash: String(i),
                        title: a,
                        hasStaticThumb: l,
                        hasAnimatedThumb: p,
                        hasVideoThumb: f,
                        hasThumbnail: m,
                        thumbCustomEmojiId: h,
                        count: r,
                        shortName: d
                    }
                }

                function Pt(e) {
                    const t = Ct(e.set);
                    if (e instanceof ue.Api.StickerSetNoCovered) return t;
                    const n = Tt(e instanceof ue.Api.StickerSetCovered ? [e.cover] : e instanceof ue.Api.StickerSetMultiCovered ? e.covers : e.documents);
                    return e instanceof ue.Api.StickerSetFullCovered ? {
                        ...t,
                        stickers: n,
                        packs: Mt(e.packs)
                    } : {
                        ...t,
                        covers: n
                    }
                }

                function Mt(e) {
                    return e.reduce(((e, t) => {
                        let {
                            emoticon: n,
                            documents: s
                        } = t;
                        return e[n] = s.map((e => {
                            const t = Ue.documents[String(e)];
                            if (t) return vt(t)
                        })).filter(Boolean), e
                    }), {})
                }

                function Tt(e) {
                    return e.map((e => {
                        if (e instanceof ue.Api.Document) {
                            const t = vt(e);
                            if (t) return Ue.documents[String(e.id)] = e, t
                        }
                    })).filter(Boolean)
                }

                function Bt(e) {
                    let t = {};
                    if (e.media) {
                        const n = "peerId" in e ? e : void 0;
                        t = {
                            ...Ut(e.media, n)
                        }
                    }
                    const n = e.media instanceof ue.Api.MessageMediaUnsupported;
                    return !e.message || n || t.sticker || t.poll || t.contact || t.video?.isRound || (t = {
                        ...t,
                        text: Rt(e.message, e.entities)
                    }), t
                }

                function Rt(e, t) {
                    return {
                        text: e,
                        ...t && {
                            entities: t.map(bt)
                        }
                    }
                }

                function Ut(e, t) {
                    _e(e, t);
                    const n = "ttlSeconds" in e ? e.ttlSeconds : void 0,
                        s = function(e) {
                            return e instanceof ue.Api.MessageMediaDocument && (!e.document && e.voice)
                        }(e);
                    if (s) return {
                        isExpiredVoice: s
                    };
                    const i = function(e) {
                        return e instanceof ue.Api.MessageMediaDocument && (!e.document && e.round)
                    }(e);
                    if (i) return {
                        isExpiredRoundVideo: i
                    };
                    const a = function(e) {
                        if (!(e instanceof ue.Api.MessageMediaDocument && e.document && e.document instanceof ue.Api.Document)) return;
                        const t = e.document.attributes.find((e => e instanceof ue.Api.DocumentAttributeAudio));
                        if (!t || !t.voice) return;
                        const {
                            duration: n,
                            waveform: s
                        } = t;
                        return {
                            mediaType: "voice",
                            id: String(e.document.id),
                            size: e.document.size.toJSNumber(),
                            duration: n,
                            waveform: s ? Array.from(s) : void 0
                        }
                    }(e);
                    if (a) return {
                        voice: a,
                        ttlSeconds: n
                    };
                    if ("round" in e && e.round) {
                        const t = Dt(e);
                        if (t) return {
                            video: t,
                            ttlSeconds: n
                        }
                    }
                    if (void 0 !== n) return;
                    if (e instanceof ue.Api.MessageMediaInvoice && e.extendedMedia instanceof ue.Api.MessageExtendedMedia) return Ut(e.extendedMedia.media, t);
                    const o = function(e) {
                        if (e instanceof ue.Api.MessageMediaDocument && e.document && e.document instanceof ue.Api.Document) return vt(e.document, e.nopremium)
                    }(e);
                    if (o) return {
                        sticker: o
                    };
                    const r = function(e) {
                        if (e instanceof ue.Api.MessageMediaPhoto && e.photo && e.photo instanceof ue.Api.Photo) return mt(e.photo, e.spoiler)
                    }(e);
                    if (r) return {
                        photo: r
                    };
                    const d = Dt(e),
                        c = function(e) {
                            if (e instanceof ue.Api.MessageMediaDocument && e.altDocument instanceof ue.Api.Document && e.altDocument.mimeType.startsWith("video")) return kt(e.altDocument, e.spoiler)
                        }(e);
                    if (d) return {
                        video: d,
                        altVideo: c
                    };
                    const u = function(e) {
                        if (!(e instanceof ue.Api.MessageMediaDocument && e.document && e.document instanceof ue.Api.Document)) return;
                        const t = e.document.attributes.find((e => e instanceof ue.Api.DocumentAttributeAudio));
                        if (!t || t.voice) return;
                        const n = e.document.thumbs && e.document.thumbs.filter((e => e instanceof ue.Api.PhotoSize)).map((e => At(e)));
                        return {
                            mediaType: "audio",
                            id: String(e.document.id),
                            fileName: Ft(e.document, "audio"),
                            thumbnailSizes: n,
                            size: e.document.size.toJSNumber(),
                            ...Xe(e.document, ["mimeType"]),
                            ...Xe(t, ["duration", "performer", "title"])
                        }
                    }(e);
                    if (u) return {
                        audio: u
                    };
                    const l = function(e) {
                        if (e instanceof ue.Api.MessageMediaDocument && e.document) return Et(e.document)
                    }(e);
                    if (l) return {
                        document: l
                    };
                    const p = function(e) {
                        if (!(e instanceof ue.Api.MessageMediaContact)) return;
                        const {
                            firstName: t,
                            lastName: n,
                            phoneNumber: s,
                            userId: i
                        } = e;
                        return {
                            mediaType: "contact",
                            firstName: t,
                            lastName: n,
                            phoneNumber: s,
                            userId: fe(i, "user")
                        }
                    }(e);
                    if (p) return {
                        contact: p
                    };
                    const f = function(e) {
                        if (e instanceof ue.Api.MessageMediaPoll) return Nt(e.poll, e.results)
                    }(e);
                    if (f) return {
                        poll: f
                    };
                    const h = Gt(e);
                    if (h) return {
                        webPage: h
                    };
                    const m = function(e) {
                        if (e instanceof ue.Api.MessageMediaInvoice) return function(e) {
                            const {
                                description: t,
                                title: n,
                                photo: s,
                                test: i,
                                totalAmount: a,
                                currency: o,
                                receiptMsgId: r,
                                extendedMedia: d
                            } = e, c = d instanceof ue.Api.MessageExtendedMediaPreview ? _t(d) : void 0;
                            return {
                                mediaType: "invoice",
                                title: n,
                                text: t,
                                photo: qt(s),
                                receiptMsgId: r,
                                amount: Number(a),
                                currency: o,
                                isTest: i,
                                extendedMedia: c
                            }
                        }(e)
                    }(e);
                    if (m) return {
                        invoice: m
                    };
                    const g = function(e) {
                        return e instanceof ue.Api.MessageMediaGeo ? function(e) {
                            const t = xt(e.geo);
                            return t && {
                                mediaType: "geo",
                                geo: t
                            }
                        }(e) : e instanceof ue.Api.MessageMediaVenue ? function(e) {
                            const {
                                geo: t,
                                title: n,
                                provider: s,
                                address: i,
                                venueId: a,
                                venueType: o
                            } = e, r = xt(t);
                            return r && {
                                mediaType: "venue",
                                geo: r,
                                title: n,
                                provider: s,
                                address: i,
                                venueId: a,
                                venueType: o
                            }
                        }(e) : e instanceof ue.Api.MessageMediaGeoLive ? function(e) {
                            const {
                                geo: t,
                                period: n,
                                heading: s
                            } = e, i = xt(t);
                            return i && {
                                mediaType: "geoLive",
                                geo: i,
                                period: n,
                                heading: s
                            }
                        }(e) : void 0
                    }(e);
                    if (g) return {
                        location: g
                    };
                    const A = function(e) {
                        if (e instanceof ue.Api.MessageMediaGame) return function(e) {
                            const {
                                id: t,
                                accessHash: n,
                                shortName: s,
                                title: i,
                                description: a,
                                photo: o,
                                document: r
                            } = e.game, d = o instanceof ue.Api.Photo ? mt(o) : void 0, c = r instanceof ue.Api.Document ? Et(r) : void 0;
                            return {
                                mediaType: "game",
                                id: t.toString(),
                                accessHash: n.toString(),
                                shortName: s,
                                title: i,
                                description: a,
                                photo: d,
                                document: c
                            }
                        }(e)
                    }(e);
                    if (A) return {
                        game: A
                    };
                    const y = function(e) {
                        if (!(e instanceof ue.Api.MessageMediaStory)) return;
                        const t = he(e.peer);
                        return {
                            mediaType: "storyData",
                            id: e.id,
                            peerId: t,
                            ...e.viaMention && {
                                isMention: !0
                            }
                        }
                    }(e);
                    if (y) return {
                        storyData: y
                    };
                    const w = function(e) {
                        if (e instanceof ue.Api.MessageMediaGiveaway) return function(e) {
                            const {
                                channels: t,
                                months: n,
                                quantity: s,
                                untilDate: i,
                                countriesIso2: a,
                                onlyNewSubscribers: o,
                                prizeDescription: r
                            } = e, d = t.map((e => fe(e, "channel")));
                            return {
                                mediaType: "giveaway",
                                channelIds: d,
                                months: n,
                                quantity: s,
                                untilDate: i,
                                countries: a,
                                isOnlyForNewSubscribers: o,
                                prizeDescription: r
                            }
                        }(e)
                    }(e);
                    if (w) return {
                        giveaway: w
                    };
                    const I = function(e) {
                        if (e instanceof ue.Api.MessageMediaGiveawayResults) return function(e) {
                            const {
                                months: t,
                                untilDate: n,
                                onlyNewSubscribers: s,
                                launchMsgId: i,
                                unclaimedCount: a,
                                winners: o,
                                winnersCount: r,
                                additionalPeersCount: d,
                                prizeDescription: c,
                                refunded: u,
                                channelId: l
                            } = e, p = o.map((e => fe(e, "user")));
                            return {
                                mediaType: "giveawayResults",
                                months: t,
                                untilDate: n,
                                isOnlyForNewSubscribers: s,
                                launchMessageId: i,
                                channelId: fe(l, "channel"),
                                unclaimedCount: a,
                                additionalPeersCount: d,
                                isRefunded: u,
                                prizeDescription: c,
                                winnerIds: p,
                                winnersCount: r
                            }
                        }(e)
                    }(e);
                    if (I) return {
                        giveawayResults: I
                    };
                    const b = function(e) {
                        if (!(e instanceof ue.Api.MessageMediaPaidMedia)) return;
                        const {
                            starsAmount: t,
                            extendedMedia: n
                        } = e, s = n[0] instanceof ue.Api.MessageExtendedMedia;
                        return s ? {
                            mediaType: "paidMedia",
                            starsAmount: t.toJSNumber(),
                            isBought: s,
                            extendedMedia: Ot(n)
                        } : {
                            mediaType: "paidMedia",
                            starsAmount: t.toJSNumber(),
                            extendedMedia: n.filter((e => e instanceof ue.Api.MessageExtendedMediaPreview)).map((e => _t(e)))
                        }
                    }(e);
                    return b ? {
                        paidMedia: b
                    } : void 0
                }

                function kt(e, t) {
                    if (e instanceof ue.Api.DocumentEmpty) return;
                    const {
                        id: n,
                        mimeType: s,
                        thumbs: i,
                        size: a,
                        videoThumbs: o,
                        attributes: r
                    } = e;
                    if (s === F && !self.isWebmSupported) return;
                    const d = r.find((e => e instanceof ue.Api.DocumentAttributeVideo));
                    if (!d) return;
                    const c = r.find((e => e instanceof ue.Api.DocumentAttributeAnimated)),
                        u = o?.some((e => e instanceof ue.Api.VideoSize && "v" === e.type)),
                        {
                            duration: l,
                            w: p,
                            h: f,
                            supportsStreaming: h = !1,
                            roundMessage: m = !1,
                            nosound: g
                        } = d;
                    return {
                        mediaType: "video",
                        id: String(n),
                        mimeType: s,
                        duration: l,
                        fileName: Ft(e, "video"),
                        width: p,
                        height: f,
                        supportsStreaming: h,
                        isRound: m,
                        isGif: Boolean(c),
                        thumbnail: ft(i),
                        size: a.toJSNumber(),
                        isSpoiler: t,
                        hasVideoPreview: u,
                        ...g && {
                            noSound: !0
                        }
                    }
                }

                function Dt(e) {
                    if (e instanceof ue.Api.MessageMediaDocument && e.document instanceof ue.Api.Document && e.document.mimeType.startsWith("video")) return kt(e.document, e.spoiler)
                }

                function Et(e) {
                    if (!(e instanceof ue.Api.Document)) return;
                    const {
                        id: t,
                        size: n,
                        mimeType: s,
                        date: i,
                        thumbs: a,
                        attributes: o
                    } = e, r = a && a.find((e => e instanceof ue.Api.PhotoSize));
                    let d, c, u = a && ft(a);
                    if (!u && a && r) {
                        const e = a.find((e => e instanceof ue.Api.PhotoPathSize));
                        e && (u = ht(e, r))
                    }
                    if (r)
                        if (c = {
                                width: r.w,
                                height: r.h
                            }, j.has(s)) {
                            d = "photo";
                            const e = o.find((e => e instanceof ue.Api.DocumentAttributeImageSize));
                            if (e) {
                                const {
                                    w: t,
                                    h: n
                                } = e;
                                c = {
                                    width: t,
                                    height: n
                                }
                            }
                        } else if (L.has(s)) {
                        d = "video";
                        const e = o.find((e => e instanceof ue.Api.DocumentAttributeVideo));
                        if (e) {
                            const {
                                w: t,
                                h: n
                            } = e;
                            c = {
                                width: t,
                                height: n
                            }
                        }
                    }
                    return {
                        mediaType: "document",
                        id: String(t),
                        size: n.toJSNumber(),
                        mimeType: s,
                        timestamp: i,
                        fileName: Ft(e),
                        thumbnail: u,
                        innerMediaType: d,
                        mediaSize: c
                    }
                }

                function xt(e) {
                    if (e instanceof ue.Api.GeoPointEmpty) return;
                    const {
                        long: t,
                        lat: n,
                        accuracyRadius: s,
                        accessHash: i
                    } = e;
                    return {
                        long: t,
                        lat: n,
                        accessHash: i.toString(),
                        accuracyRadius: s
                    }
                }

                function Nt(e, t) {
                    const {
                        id: n,
                        answers: s
                    } = e, i = s.map((e => ({
                        text: It(e.text),
                        option: Ke(e.option)
                    })));
                    return {
                        mediaType: "poll",
                        id: String(n),
                        summary: {
                            isPublic: e.publicVoters,
                            question: It(e.question),
                            ...Xe(e, ["closed", "multipleChoice", "quiz", "closePeriod", "closeDate"]),
                            answers: i
                        },
                        results: Ht(t)
                    }
                }

                function Ht(e) {
                    const {
                        results: t,
                        totalVoters: n,
                        recentVoters: s,
                        solution: i,
                        solutionEntities: a,
                        min: o
                    } = e, r = t?.map((e => {
                        let {
                            option: t,
                            chosen: n,
                            correct: s,
                            voters: i
                        } = e;
                        return {
                            isChosen: n,
                            isCorrect: s,
                            option: Ke(t),
                            votersCount: i
                        }
                    }));
                    return {
                        isMin: o,
                        totalVoters: n,
                        recentVoterIds: s?.map((e => he(e))),
                        results: r,
                        solution: i,
                        ...a && {
                            solutionEntities: a.map(bt)
                        }
                    }
                }

                function Gt(e) {
                    if (!(e instanceof ue.Api.MessageMediaWebPage && e.webpage instanceof ue.Api.WebPage)) return;
                    const {
                        id: t,
                        photo: n,
                        document: s,
                        attributes: i
                    } = e.webpage;
                    let a, o, r, d;
                    s instanceof ue.Api.Document && s.mimeType.startsWith("video/") && (a = kt(s)), s instanceof ue.Api.Document && s.mimeType.startsWith("audio/") && (o = function(e) {
                        if (e instanceof ue.Api.DocumentEmpty) return;
                        const {
                            id: t,
                            mimeType: n,
                            size: s,
                            attributes: i
                        } = e, a = i.find((e => e instanceof ue.Api.DocumentAttributeAudio));
                        if (!a) return;
                        const {
                            duration: o,
                            title: r,
                            performer: d
                        } = a;
                        return {
                            mediaType: "audio",
                            id: String(t),
                            mimeType: n,
                            duration: o,
                            fileName: Ft(e, "audio"),
                            title: r,
                            performer: d,
                            size: s.toJSNumber()
                        }
                    }(s));
                    const c = i?.find((e => e instanceof ue.Api.WebPageAttributeStory));
                    if (c) {
                        const e = he(c.peer);
                        r = {
                            id: c.id,
                            peerId: e
                        }, c.story instanceof ue.Api.StoryItem && qe(c.story, e)
                    }
                    const u = i?.find((e => e instanceof ue.Api.WebPageAttributeStickerSet));
                    return u && (d = {
                        documents: Tt(u.stickers),
                        isEmoji: u.emojis,
                        isWithTextColor: u.textColor
                    }), {
                        mediaType: "webpage",
                        id: Number(t),
                        ...Xe(e.webpage, ["url", "displayUrl", "type", "siteName", "title", "description", "duration"]),
                        photo: n instanceof ue.Api.Photo ? mt(n) : void 0,
                        document: a || o || !s ? void 0 : Et(s),
                        video: a,
                        audio: o,
                        story: r,
                        stickers: d
                    }
                }

                function Ft(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "file";
                    const {
                        mimeType: n,
                        attributes: s
                    } = e, i = s.find((e => e instanceof ue.Api.DocumentAttributeFilename));
                    if (i) return i.fileName;
                    const a = n.split("/")[1];
                    return `${t}${String(e.id)}.${a}`
                }

                function _t(e) {
                    const {
                        w: t,
                        h: n,
                        thumb: s,
                        videoDuration: i
                    } = e;
                    return {
                        mediaType: "extendedMediaPreview",
                        width: t,
                        height: n,
                        duration: i,
                        thumbnail: s ? ft([s]) : void 0
                    }
                }

                function qt(e) {
                    if (!e) return;
                    const {
                        url: t,
                        size: n,
                        mimeType: s
                    } = e, i = e instanceof ue.Api.WebDocument ? e.accessHash.toString() : void 0, a = e.attributes.find((e => e instanceof ue.Api.DocumentAttributeImageSize));
                    return {
                        mediaType: "webDocument",
                        url: t,
                        accessHash: i,
                        size: n,
                        mimeType: s,
                        dimensions: a && {
                            width: a.w,
                            height: a.h
                        }
                    }
                }

                function Ot(e) {
                    const t = e.filter((e => e instanceof ue.Api.MessageExtendedMedia)).map((e => Ut(e.media))).filter(Boolean);
                    if (t.length) return t
                }

                function jt(e) {
                    return {
                        id: e.botId.toString(),
                        shouldRequestWriteAccess: e.requestWriteAccess,
                        shortName: e.shortName,
                        isForAttachMenu: e.showInAttachMenu,
                        isForSideMenu: e.showInSideMenu,
                        attachMenuPeerTypes: e.peerTypes?.map(Lt),
                        icons: e.icons.map(Vt).filter(Boolean),
                        isInactive: e.inactive,
                        isDisclaimerNeeded: e.sideMenuDisclaimerNeeded
                    }
                }

                function Lt(e) {
                    return e instanceof ue.Api.AttachMenuPeerTypeBotPM ? "bots" : e instanceof ue.Api.AttachMenuPeerTypePM ? "users" : e instanceof ue.Api.AttachMenuPeerTypeChat ? "chats" : e instanceof ue.Api.AttachMenuPeerTypeBroadcast ? "channels" : e instanceof ue.Api.AttachMenuPeerTypeSameBotPM ? "self" : void 0
                }

                function Vt(e) {
                    if (!(e.icon instanceof ue.Api.Document)) return;
                    const t = Et(e.icon);
                    return t ? (je(e.icon), {
                        name: e.name,
                        document: t
                    }) : void 0
                }

                function zt(e, t) {
                    const {
                        description: n,
                        descriptionPhoto: s,
                        descriptionDocument: i,
                        userId: a,
                        commands: o,
                        menuButton: r
                    } = e, d = a && fe(a, "user"), c = s instanceof ue.Api.Photo ? mt(s) : void 0, u = i instanceof ue.Api.Document ? kt(i) : void 0, l = o?.map((e => function(e, t) {
                        return {
                            botId: e,
                            ...be(t)
                        }
                    }(d || t, e)));
                    return {
                        botId: d || t,
                        description: n,
                        gif: u,
                        photo: c,
                        menuButton: Wt(r),
                        commands: l?.length ? l : void 0
                    }
                }

                function Wt(e) {
                    return e instanceof ue.Api.BotMenuButton ? {
                        type: "webApp",
                        text: e.text,
                        url: e.url
                    } : {
                        type: "commands"
                    }
                }

                function Jt(e) {
                    const {
                        self: t,
                        min: n,
                        about: s,
                        date: i,
                        versioned: a,
                        canSelfUnmute: o,
                        justJoined: r,
                        left: d,
                        muted: c,
                        mutedByYou: u,
                        source: l,
                        volume: p,
                        volumeByAdmin: f,
                        videoJoined: h,
                        peer: m,
                        video: g,
                        presentation: A,
                        raiseHandRating: y
                    } = e;
                    return {
                        isSelf: t,
                        isMin: n,
                        canSelfUnmute: o,
                        isLeft: d,
                        isMuted: c,
                        isMutedByMe: u,
                        hasJustJoined: r,
                        isVolumeByAdmin: f,
                        isVersioned: a,
                        isVideoJoined: h,
                        about: s,
                        source: l,
                        raiseHandRating: y?.toString(),
                        volume: p,
                        date: new Date(i),
                        isUser: le(m),
                        id: he(m),
                        video: g ? Kt(g) : void 0,
                        presentation: A ? Kt(A) : void 0
                    }
                }

                function Kt(e) {
                    const {
                        audioSource: t,
                        endpoint: n,
                        paused: s,
                        sourceGroups: i
                    } = e;
                    return {
                        audioSource: t,
                        endpoint: n,
                        isPaused: s,
                        sourceGroups: i.map($t)
                    }
                }

                function $t(e) {
                    return {
                        semantics: e.semantics,
                        sources: e.sources
                    }
                }

                function Qt(e) {
                    const {
                        id: t,
                        accessHash: n
                    } = e;
                    if (e instanceof ue.Api.GroupCallDiscarded) return {
                        connectionState: "discarded",
                        id: t.toString(),
                        accessHash: n.toString(),
                        participantsCount: 0,
                        version: 0,
                        participants: {}
                    };
                    const {
                        version: s,
                        participantsCount: i,
                        streamDcId: a,
                        scheduleDate: o,
                        canChangeJoinMuted: r,
                        joinMuted: d,
                        canStartVideo: c,
                        scheduleStartSubscribed: u
                    } = e;
                    return {
                        connectionState: "disconnected",
                        isLoaded: !0,
                        id: t.toString(),
                        accessHash: n.toString(),
                        version: s,
                        participantsCount: i,
                        streamDcId: a,
                        scheduleDate: o,
                        canChangeJoinMuted: r,
                        joinMuted: d,
                        canStartVideo: c,
                        scheduleStartSubscribed: u,
                        participants: {}
                    }
                }

                function Zt(e) {
                    const {
                        id: t
                    } = e;
                    let n = {
                        id: t.toString()
                    };
                    if (e instanceof ue.Api.PhoneCallAccepted || e instanceof ue.Api.PhoneCallWaiting || e instanceof ue.Api.PhoneCall || e instanceof ue.Api.PhoneCallRequested) {
                        const {
                            accessHash: t,
                            adminId: s,
                            date: i,
                            video: a,
                            participantId: o,
                            protocol: r
                        } = e;
                        n = {
                            ...n,
                            accessHash: t.toString(),
                            adminId: s.toString(),
                            participantId: o.toString(),
                            date: i,
                            isVideo: a,
                            protocol: en(r)
                        }
                    }
                    if (e instanceof ue.Api.PhoneCall) {
                        const {
                            p2pAllowed: t,
                            gAOrB: s,
                            keyFingerprint: i,
                            connections: a,
                            startDate: o
                        } = e;
                        n = {
                            ...n,
                            state: "active",
                            gAOrB: Array.from(s),
                            keyFingerprint: i.toString(),
                            startDate: o,
                            isP2pAllowed: Boolean(t),
                            connections: a.map(Xt).filter(Boolean)
                        }
                    }
                    return e instanceof ue.Api.PhoneCallDiscarded && (n = {
                        ...n,
                        state: "discarded",
                        duration: e.duration,
                        reason: Yt(e.reason),
                        needRating: e.needRating,
                        needDebug: e.needDebug
                    }), e instanceof ue.Api.PhoneCallWaiting && (n = {
                        ...n,
                        state: "waiting",
                        receiveDate: e.receiveDate
                    }), e instanceof ue.Api.PhoneCallAccepted && (n = {
                        ...n,
                        state: "accepted",
                        gB: Array.from(e.gB)
                    }), e instanceof ue.Api.PhoneCallRequested && (n = {
                        ...n,
                        state: "requested",
                        gAHash: Array.from(e.gAHash)
                    }), n
                }

                function Yt(e) {
                    return e instanceof ue.Api.PhoneCallDiscardReasonMissed ? "missed" : e instanceof ue.Api.PhoneCallDiscardReasonBusy ? "busy" : e instanceof ue.Api.PhoneCallDiscardReasonHangup ? "hangup" : "disconnect"
                }

                function Xt(e) {
                    if (e instanceof ue.Api.PhoneConnectionWebrtc) {
                        const {
                            username: t,
                            password: n,
                            turn: s,
                            stun: i,
                            ip: a,
                            ipv6: o,
                            port: r
                        } = e;
                        return {
                            username: t,
                            password: n,
                            isTurn: s,
                            isStun: i,
                            ip: a,
                            ipv6: o,
                            port: r
                        }
                    }
                }

                function en(e) {
                    const {
                        libraryVersions: t,
                        minLayer: n,
                        maxLayer: s,
                        udpP2p: i,
                        udpReflector: a
                    } = e;
                    return {
                        libraryVersions: t,
                        minLayer: n,
                        maxLayer: s,
                        isUdpP2p: i,
                        isUdpReflector: a
                    }
                }

                function tn() {
                    return new ue.Api.PhoneCallProtocol({
                        libraryVersions: ["4.0.0"],
                        minLayer: 92,
                        maxLayer: 92,
                        udpReflector: !0,
                        udpP2p: !0
                    })
                }

                function nn(e) {
                    const {
                        recentReactions: t,
                        results: n,
                        canSeeList: s,
                        reactionsAsTags: i
                    } = e;
                    return {
                        areTags: i,
                        canSeeList: s,
                        results: n.map(an).filter(Boolean).sort(sn),
                        recentReactions: t?.map(on).filter(Boolean)
                    }
                }

                function sn(e, t) {
                    return t.count - e.count || (void 0 !== e.chosenOrder && void 0 !== t.chosenOrder ? e.chosenOrder - t.chosenOrder : void 0 !== e.chosenOrder ? 1 : void 0 !== t.chosenOrder ? -1 : 0)
                }

                function an(e) {
                    const {
                        chosenOrder: t,
                        count: n,
                        reaction: s
                    } = e, i = rn(s);
                    if (i) return {
                        chosenOrder: t,
                        count: n,
                        reaction: i
                    }
                }

                function on(e) {
                    const {
                        peerId: t,
                        reaction: n,
                        big: s,
                        unread: i,
                        date: a,
                        my: o
                    } = e, r = rn(n);
                    if (r) return {
                        peerId: he(t),
                        reaction: r,
                        addedDate: a,
                        isUnread: i,
                        isBig: s,
                        isOwn: o
                    }
                }

                function rn(e) {
                    return e instanceof ue.Api.ReactionEmoji ? {
                        emoticon: e.emoticon
                    } : e instanceof ue.Api.ReactionCustomEmoji ? {
                        documentId: e.documentId.toString()
                    } : void 0
                }

                function dn(e) {
                    const {
                        reaction: t,
                        title: n,
                        count: s
                    } = e, i = rn(t);
                    if (i) return {
                        reaction: i,
                        title: n,
                        count: s
                    }
                }

                function cn(e) {
                    const {
                        selectAnimation: t,
                        staticIcon: n,
                        reaction: s,
                        title: i,
                        appearAnimation: a,
                        inactive: o,
                        aroundAnimation: r,
                        centerIcon: d,
                        effectAnimation: c,
                        activateAnimation: u,
                        premium: l
                    } = e;
                    return {
                        selectAnimation: Et(t),
                        appearAnimation: Et(a),
                        activateAnimation: Et(u),
                        effectAnimation: Et(c),
                        staticIcon: Et(n),
                        aroundAnimation: r ? Et(r) : void 0,
                        centerIcon: d ? Et(d) : void 0,
                        reaction: {
                            emoticon: s
                        },
                        title: i,
                        isInactive: o,
                        isPremium: l
                    }
                }

                function un(e) {
                    const {
                        id: t,
                        emoticon: n,
                        premiumRequired: s,
                        staticIconId: i,
                        effectStickerId: a,
                        effectAnimationId: o
                    } = e;
                    return {
                        id: t.toString(),
                        emoticon: n,
                        isPremium: s,
                        staticIconId: i?.toString(),
                        effectStickerId: a.toString(),
                        effectAnimationId: o?.toString()
                    }
                }

                function ln(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const n = Boolean("min" in e && e.min),
                        s = "accessHash" in e ? String(e.accessHash) : void 0,
                        i = "photo" in e && e.photo && "hasVideo" in e.photo && e.photo.hasVideo,
                        a = "photo" in e && e.photo ? St(e.photo) : void 0,
                        o = Boolean("signatures" in e && e.signatures),
                        r = Boolean("hasLink" in e && e.hasLink),
                        d = Boolean("scam" in e && e.scam),
                        c = Boolean("fake" in e && e.fake),
                        u = Boolean("joinToSend" in e && e.joinToSend),
                        l = Boolean("joinRequest" in e && e.joinRequest),
                        p = yt(e),
                        f = Boolean("forum" in e && e.forum),
                        h = Boolean("storiesHidden" in e && e.storiesHidden),
                        m = "storiesMaxId" in e ? e.storiesMaxId : void 0,
                        g = Boolean("storiesUnavailable" in e && e.storiesUnavailable),
                        A = "color" in e && e.color ? me(e.color) : void 0,
                        y = "emojiStatus" in e && e.emojiStatus ? ge(e.emojiStatus) : void 0,
                        w = "level" in e ? e.level : void 0;
                    return nt({
                        isMin: n,
                        hasPrivateLink: r,
                        isSignaturesShown: o,
                        usernames: p,
                        accessHash: s,
                        hasVideoAvatar: i,
                        avatarPhotoId: a,
                        ..."verified" in e && {
                            isVerified: e.verified
                        },
                        ..."callActive" in e && {
                            isCallActive: e.callActive
                        },
                        ..."callNotEmpty" in e && {
                            isCallNotEmpty: e.callNotEmpty
                        },
                        ..."date" in e && {
                            creationDate: e.date
                        },
                        ..."participantsCount" in e && void 0 !== e.participantsCount && {
                            membersCount: e.participantsCount
                        },
                        ..."noforwards" in e && {
                            isProtected: Boolean(e.noforwards)
                        },
                        isSupport: t || void 0,
                        ...fn(e),
                        ..."creator" in e && {
                            isCreator: e.creator
                        },
                        ...hn(e),
                        ...mn(e),
                        fakeType: d ? "scam" : c ? "fake" : void 0,
                        color: A,
                        isJoinToSend: u,
                        isJoinRequest: l,
                        isForum: f,
                        areStoriesHidden: h,
                        maxStoryId: m,
                        hasStories: Boolean(m) && !g,
                        emojiStatus: y,
                        boostLevel: w
                    })
                }

                function pn(e, t) {
                    const {
                        peer: n,
                        folderId: s,
                        unreadMark: i,
                        unreadCount: a,
                        unreadMentionsCount: o,
                        unreadReactionsCount: r,
                        notifySettings: {
                            silent: d,
                            muteUntil: c
                        },
                        readOutboxMaxId: u,
                        readInboxMaxId: l,
                        draft: p,
                        viewForumAsMessages: f
                    } = e, h = d || "number" == typeof c && rt() < c;
                    return {
                        id: he(n),
                        ...s && {
                            folderId: s
                        },
                        type: An(t),
                        title: wn(n, t),
                        lastReadOutboxMessageId: u,
                        lastReadInboxMessageId: l,
                        unreadCount: a,
                        unreadMentionsCount: o,
                        unreadReactionsCount: r,
                        isMuted: h,
                        muteUntil: c,
                        ...i && {
                            hasUnreadMark: !0
                        },
                        ...p instanceof ue.Api.DraftMessage && {
                            draftDate: p.date
                        },
                        ...f && {
                            isForumAsMessages: !0
                        },
                        ...ln(t)
                    }
                }

                function fn(e) {
                    return e instanceof ue.Api.Chat || e instanceof ue.Api.Channel ? {
                        adminRights: e.adminRights ? be(e.adminRights) : void 0,
                        currentUserBannedRights: "bannedRights" in e && e.bannedRights ? be(e.bannedRights) : void 0,
                        defaultBannedRights: e.defaultBannedRights ? be(e.defaultBannedRights) : void 0
                    } : {}
                }

                function hn(e) {
                    if (e instanceof ue.Api.ChatForbidden) return {
                        isForbidden: !0
                    };
                    if (e instanceof ue.Api.ChannelForbidden) return {
                        isRestricted: !0
                    };
                    const t = {};
                    if ("restricted" in e) {
                        const n = e.restricted ? function(e) {
                            if (!e) return;
                            const t = e.find((e => {
                                let {
                                    platform: t
                                } = e;
                                return "all" === t
                            }));
                            return t ? Xe(t, ["reason", "text"]) : void 0
                        }(e.restrictionReason) : void 0;
                        n && Object.assign(t, {
                            isRestricted: !0,
                            restrictionReason: n
                        })
                    }
                    return e instanceof ue.Api.Chat && Object.assign(t, {
                        isNotJoined: e.left
                    }), e instanceof ue.Api.Channel && Object.assign(t, {
                        isNotJoined: e.left
                    }), t
                }

                function mn(e) {
                    return !("migratedTo" in e) || !e.migratedTo || e.migratedTo instanceof ue.Api.InputChannelEmpty ? {} : {
                        migratedTo: {
                            chatId: he(e.migratedTo),
                            ...e.migratedTo instanceof ue.Api.InputChannel && {
                                accessHash: String(e.migratedTo.accessHash)
                            }
                        }
                    }
                }

                function gn(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!(e instanceof ue.Api.ChatEmpty || e instanceof ue.Api.UserEmpty)) return {
                        id: fe(e.id, e instanceof ue.Api.User ? "user" : e instanceof ue.Api.Chat || e instanceof ue.Api.ChatForbidden ? "chat" : "channel"),
                        type: An(e),
                        title: e instanceof ue.Api.User ? In(e) : e.title,
                        ...ln(e, t)
                    }
                }

                function An(e) {
                    return e instanceof ue.Api.User || e instanceof ue.Api.UserEmpty ? "chatTypePrivate" : e instanceof ue.Api.Chat || e instanceof ue.Api.ChatForbidden || e instanceof ue.Api.ChatEmpty ? "chatTypeBasicGroup" : e.megagroup ? "chatTypeSuperGroup" : "chatTypeChannel"
                }

                function yn(e) {
                    return le(e) ? `user${e.userId}` : pe(e) ? `chat${e.chatId}` : `chat${e.channelId}`
                }

                function wn(e, t) {
                    return le(e) ? In(t) : t.title
                }

                function In(e) {
                    return e.firstName ? `${e.firstName}${e.lastName?` ${e.lastName}`:""}` : e.lastName || ""
                }

                function bn(e) {
                    return {
                        userId: e instanceof ue.Api.ChannelParticipantBanned || e instanceof ue.Api.ChannelParticipantLeft ? he(e.peer) : fe(e.userId, "user"),
                        inviterId: "inviterId" in e && e.inviterId ? fe(e.inviterId, "user") : void 0,
                        joinedDate: "date" in e ? e.date : void 0,
                        kickedByUserId: "kickedBy" in e && e.kickedBy ? fe(e.kickedBy, "user") : void 0,
                        promotedByUserId: "promotedBy" in e && e.promotedBy ? fe(e.promotedBy, "user") : void 0,
                        bannedRights: "bannedRights" in e ? be(e.bannedRights) : void 0,
                        adminRights: "adminRights" in e ? be(e.adminRights) : void 0,
                        customTitle: "rank" in e ? e.rank : void 0,
                        ...(e instanceof ue.Api.ChannelParticipantAdmin || e instanceof ue.Api.ChatParticipantAdmin) && {
                            isAdmin: !0
                        },
                        ...(e instanceof ue.Api.ChannelParticipantCreator || e instanceof ue.Api.ChatParticipantCreator) && {
                            isOwner: !0
                        }
                    }
                }

                function Sn(e) {
                    return e instanceof ue.Api.ChatParticipants || e instanceof ue.Api.channels.ChannelParticipants ? e.participants.map(bn).filter(Boolean) : void 0
                }

                function vn(e) {
                    let t, n = "";
                    if (!(e.action instanceof ue.Api.SendMessageCancelAction)) {
                        if (e.action instanceof ue.Api.SendMessageTypingAction) n = "lng_user_typing";
                        else if (e.action instanceof ue.Api.SendMessageRecordVideoAction) n = "lng_send_action_record_video";
                        else if (e.action instanceof ue.Api.SendMessageUploadVideoAction) n = "lng_send_action_upload_video";
                        else if (e.action instanceof ue.Api.SendMessageRecordAudioAction) n = "lng_send_action_record_audio";
                        else if (e.action instanceof ue.Api.SendMessageUploadAudioAction) n = "lng_send_action_upload_audio";
                        else if (e.action instanceof ue.Api.SendMessageUploadPhotoAction) n = "lng_send_action_upload_photo";
                        else if (e.action instanceof ue.Api.SendMessageUploadDocumentAction) n = "lng_send_action_upload_file";
                        else if (e.action instanceof ue.Api.SendMessageGeoLocationAction) n = "selecting a location to share";
                        else if (e.action instanceof ue.Api.SendMessageChooseContactAction) n = "selecting a contact to share";
                        else if (e.action instanceof ue.Api.SendMessageGamePlayAction) n = "lng_playing_game";
                        else if (e.action instanceof ue.Api.SendMessageRecordRoundAction) n = "lng_send_action_record_round";
                        else if (e.action instanceof ue.Api.SendMessageUploadRoundAction) n = "lng_send_action_upload_round";
                        else if (e.action instanceof ue.Api.SendMessageChooseStickerAction) n = "lng_send_action_choose_sticker";
                        else {
                            if (e.action instanceof ue.Api.SpeakingInGroupCallAction) return;
                            if (e.action instanceof ue.Api.SendMessageEmojiInteractionSeen) n = "lng_user_action_watching_animations", t = e.action.emoticon;
                            else if (e.action instanceof ue.Api.SendMessageEmojiInteraction) return
                        }
                        return {
                            action: n,
                            ...t && {
                                emoji: t
                            },
                            ...!(e instanceof ue.Api.UpdateUserTyping) && {
                                userId: he(e.fromId)
                            },
                            timestamp: Date.now() + 1e3 * ot()
                        }
                    }
                }

                function Cn(e) {
                    return e instanceof ue.Api.DialogFilterChatlist ? {
                        ...et(e, ["id", "title", "emoticon"]),
                        excludedChatIds: [],
                        includedChatIds: e.includePeers.map(he).filter(Boolean),
                        pinnedChatIds: e.pinnedPeers.map(he).filter(Boolean),
                        hasMyInvites: e.hasMyInvites,
                        isChatList: !0
                    } : {
                        ...et(e, ["id", "title", "emoticon", "contacts", "nonContacts", "groups", "bots", "excludeMuted", "excludeRead", "excludeArchived"]),
                        channels: e.broadcasts,
                        pinnedChatIds: e.pinnedPeers.map(he).filter(Boolean),
                        includedChatIds: e.includePeers.map(he).filter(Boolean),
                        excludedChatIds: e.excludePeers.map(he).filter(Boolean)
                    }
                }

                function Pn(e) {
                    let {
                        filter: t,
                        description: n
                    } = e;
                    if (t instanceof ue.Api.DialogFilter || t instanceof ue.Api.DialogFilterChatlist) return {
                        ...Cn(t),
                        description: n
                    }
                }

                function Mn(e) {
                    return e.reduce(((e, t) => {
                        const n = fe(t.userId, "user");
                        return t.commands && (e = e.concat(t.commands.map((e => ({
                            botId: n,
                            ...be(e)
                        }))))), e
                    }), [])
                }

                function Tn(e) {
                    const {
                        revoked: t,
                        date: n,
                        expireDate: s,
                        link: i,
                        permanent: a,
                        startDate: o,
                        usage: r,
                        usageLimit: d,
                        requested: c,
                        requestNeeded: u,
                        title: l,
                        adminId: p
                    } = e;
                    return {
                        isRevoked: t,
                        date: n,
                        expireDate: s,
                        link: i,
                        isPermanent: a,
                        startDate: o,
                        usage: r,
                        usageLimit: d,
                        isRequestNeeded: u,
                        requested: c,
                        title: l,
                        adminId: fe(p, "user")
                    }
                }

                function Bn(e) {
                    let {
                        autoarchived: t,
                        reportSpam: n,
                        addContact: s,
                        blockContact: i
                    } = e;
                    return {
                        isAutoArchived: Boolean(t),
                        canReportSpam: Boolean(n),
                        canAddContact: Boolean(s),
                        canBlockContact: Boolean(i)
                    }
                }

                function Rn(e) {
                    return e instanceof ue.Api.ChatReactionsAll ? {
                        type: "all",
                        areCustomAllowed: e.allowCustom
                    } : e instanceof ue.Api.ChatReactionsSome ? {
                        type: "some",
                        allowed: e.reactions.map(rn).filter(Boolean)
                    } : void 0
                }

                function Un(e) {
                    return {
                        id: he(e.peer),
                        isPremium: e.premiumRequired
                    }
                }

                function kn(e) {
                    if (e instanceof ue.Api.ForumTopicDeleted) return;
                    const {
                        id: t,
                        my: n,
                        closed: s,
                        pinned: i,
                        hidden: a,
                        short: o,
                        date: r,
                        title: d,
                        iconColor: c,
                        iconEmojiId: u,
                        topMessage: l,
                        unreadCount: p,
                        unreadMentionsCount: f,
                        unreadReactionsCount: h,
                        fromId: m,
                        notifySettings: {
                            silent: g,
                            muteUntil: A
                        }
                    } = e;
                    return {
                        id: t,
                        isClosed: s,
                        isPinned: i,
                        isHidden: a,
                        isOwner: n,
                        isMin: o,
                        date: r,
                        title: d,
                        iconColor: c,
                        iconEmojiId: u?.toString(),
                        lastMessageId: l,
                        unreadCount: p,
                        unreadMentionsCount: f,
                        unreadReactionsCount: h,
                        fromId: he(m),
                        isMuted: g || ("number" == typeof A ? rt() < A : void 0),
                        muteUntil: A
                    }
                }

                function Dn(e) {
                    if (!(e instanceof ue.Api.ExportedChatlistInvite)) return;
                    const {
                        title: t,
                        url: n,
                        peers: s
                    } = e;
                    return {
                        title: t,
                        url: n,
                        peerIds: s.map(he).filter(Boolean)
                    }
                }

                function En(e) {
                    return {
                        id: e.userId.toString(),
                        isRequiringPremiumToMessage: e.premiumRequiredForPm,
                        isRequiringPremiumToInvite: e.premiumWouldAllowInvite
                    }
                }
                var xn = n(8172);

                function Nn(e, t) {
                    let n = 0;
                    const s = new Array(t),
                        i = e.length / t,
                        a = e[0],
                        o = e[e.length - 1];
                    for (let r = 0; r < t; r++) {
                        const t = Math.floor(r * i),
                            d = ((e[t - 1] ?? a) + (e[t] ?? a) + (e[t + 1] ?? o)) / 3;
                        s[r] = d, n < d && (n = d)
                    }
                    return {
                        data: s,
                        peak: n
                    }
                }
                var Hn = n(80071),
                    Gn = n.n(Hn);

                function Fn(e) {
                    return e.startsWith("-") ? (t = e).length === J && t.startsWith("-1") ? "channel" : "chat" : "user";
                    var t
                }

                function _n(e) {
                    const t = Fn(e);
                    return "user" === t ? new ue.Api.PeerUser({
                        userId: as(e, "user")
                    }) : "channel" === t ? new ue.Api.PeerChannel({
                        channelId: as(e, "channel")
                    }) : new ue.Api.PeerChat({
                        chatId: as(e, "chat")
                    })
                }

                function qn(e, t) {
                    const n = Fn(e);
                    return "user" === n ? new ue.Api.InputPeerUser({
                        userId: as(e, "user"),
                        accessHash: ye()(t)
                    }) : "channel" === n ? new ue.Api.InputPeerChannel({
                        channelId: as(e, "channel"),
                        accessHash: ye()(t)
                    }) : new ue.Api.InputPeerChat({
                        chatId: as(e, "chat")
                    })
                }

                function On(e) {
                    const t = Fn(e);
                    let n;
                    if ("user" === t) {
                        if (n = Ue.users[e]?.accessHash, !n) return
                    } else if ("channel" === t && (n = Ue.chats[e]?.accessHash, !n)) return;
                    return qn(e, String(n))
                }

                function jn(e, t) {
                    const n = Fn(e);
                    return "user" === n ? new ue.Api.InputUser({
                        userId: as(e, "user"),
                        accessHash: ye()(t)
                    }) : "channel" === n ? new ue.Api.InputChannel({
                        channelId: as(e, "channel"),
                        accessHash: ye()(t)
                    }) : as(e, "chat")
                }

                function Ln(e, t) {
                    return new ue.Api.InputStickerSetID({
                        id: ye()(e),
                        accessHash: ye()(t)
                    })
                }

                function Vn(e) {
                    const t = Ue.documents[e.id];
                    if (t) return new ue.Api.InputDocument(Xe(t, ["id", "accessHash", "fileReference"]))
                }

                function zn(e) {
                    const t = Vn(e);
                    if (t) return new ue.Api.InputMediaDocument({
                        id: t
                    })
                }

                function Wn(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new ue.Api.InputMediaPoll({
                        poll: new ue.Api.Poll({
                            id: ye()(e.id),
                            publicVoters: e.summary.isPublic,
                            question: ps(e.summary.question),
                            answers: e.summary.answers.map((e => {
                                let {
                                    text: t,
                                    option: n
                                } = e;
                                return new ue.Api.PollAnswer({
                                    text: ps(t),
                                    option: $e(n)
                                })
                            })),
                            quiz: e.summary.quiz,
                            multipleChoice: e.summary.multipleChoice,
                            closeDate: e.summary.closeDate,
                            closePeriod: e.summary.closePeriod,
                            closed: !!t || e.summary.closed
                        }),
                        correctAnswers: e.results.results?.filter((e => e.isCorrect)).map((e => $e(e.option))),
                        solution: e.results.solution,
                        solutionEntities: e.results.solutionEntities?.map(Qn)
                    })
                }

                function Jn() {
                    return (0, Hn.readBigIntFromBuffer)((0, Hn.generateRandomBytes)(8), !0, !0)
                }

                function Kn() {
                    return (0, Hn.readBigIntFromBuffer)((0, Hn.generateRandomBytes)(4), !0, !0).toJSNumber()
                }

                function $n(e, t, n) {
                    return new ue.Api.Message({
                        id: e,
                        peerId: _n(t),
                        fromId: _n(t),
                        media: n.media
                    })
                }

                function Qn(e) {
                    const {
                        type: t,
                        offset: n,
                        length: s
                    } = e, i = "userId" in e ? Ue.users[e.userId] : void 0;
                    switch (t) {
                        case ct.C7.Bold:
                            return new ue.Api.MessageEntityBold({
                                offset: n,
                                length: s
                            });
                        case ct.C7.Italic:
                            return new ue.Api.MessageEntityItalic({
                                offset: n,
                                length: s
                            });
                        case ct.C7.Underline:
                            return new ue.Api.MessageEntityUnderline({
                                offset: n,
                                length: s
                            });
                        case ct.C7.Strike:
                            return new ue.Api.MessageEntityStrike({
                                offset: n,
                                length: s
                            });
                        case ct.C7.Code:
                            return new ue.Api.MessageEntityCode({
                                offset: n,
                                length: s
                            });
                        case ct.C7.Pre:
                            return new ue.Api.MessageEntityPre({
                                offset: n,
                                length: s,
                                language: e.language || ""
                            });
                        case ct.C7.Blockquote:
                            return new ue.Api.MessageEntityBlockquote({
                                offset: n,
                                length: s
                            });
                        case ct.C7.TextUrl:
                            return new ue.Api.MessageEntityTextUrl({
                                offset: n,
                                length: s,
                                url: e.url
                            });
                        case ct.C7.Url:
                            return new ue.Api.MessageEntityUrl({
                                offset: n,
                                length: s
                            });
                        case ct.C7.Hashtag:
                            return new ue.Api.MessageEntityHashtag({
                                offset: n,
                                length: s
                            });
                        case ct.C7.MentionName:
                            return new ue.Api.InputMessageEntityMentionName({
                                offset: n,
                                length: s,
                                userId: new ue.Api.InputUser({
                                    userId: ye()(i.id),
                                    accessHash: i.accessHash
                                })
                            });
                        case ct.C7.Spoiler:
                            return new ue.Api.MessageEntitySpoiler({
                                offset: n,
                                length: s
                            });
                        case ct.C7.CustomEmoji:
                            return new ue.Api.MessageEntityCustomEmoji({
                                offset: n,
                                length: s,
                                documentId: ye()(e.documentId)
                            });
                        default:
                            return new ue.Api.MessageEntityUnknown({
                                offset: n,
                                length: s
                            })
                    }
                }

                function Zn(e) {
                    const t = Ue.photos[e?.id];
                    if (t) return new ue.Api.InputPhoto(Xe(t, ["id", "accessHash", "fileReference"]))
                }

                function Yn(e) {
                    let {
                        phone: t,
                        firstName: n,
                        lastName: s
                    } = e;
                    return new ue.Api.InputPhoneContact({
                        clientId: ye()(1),
                        phone: t,
                        firstName: n,
                        lastName: s
                    })
                }

                function Xn(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return new ue.Api.ChatBannedRights({
                        ...e,
                        untilDate: t
                    })
                }

                function es(e) {
                    return new ue.Api.ChatAdminRights(e)
                }

                function ts(e) {
                    const {
                        shippingAddress: t
                    } = e;
                    return new ue.Api.PaymentRequestedInfo({
                        ...e,
                        shippingAddress: t ? new ue.Api.PostAddress(t) : void 0
                    })
                }

                function ns(e) {
                    switch (e) {
                        case "phoneNumber":
                            return new ue.Api.InputPrivacyKeyPhoneNumber;
                        case "addByPhone":
                            return new ue.Api.InputPrivacyKeyAddedByPhone;
                        case "lastSeen":
                            return new ue.Api.InputPrivacyKeyStatusTimestamp;
                        case "profilePhoto":
                            return new ue.Api.InputPrivacyKeyProfilePhoto;
                        case "forwards":
                            return new ue.Api.InputPrivacyKeyForwards;
                        case "chatInvite":
                            return new ue.Api.InputPrivacyKeyChatInvite;
                        case "phoneCall":
                            return new ue.Api.InputPrivacyKeyPhoneCall;
                        case "phoneP2P":
                            return new ue.Api.InputPrivacyKeyPhoneP2P;
                        case "voiceMessages":
                            return new ue.Api.InputPrivacyKeyVoiceMessages;
                        case "bio":
                            return new ue.Api.InputPrivacyKeyAbout;
                        case "birthday":
                            return new ue.Api.InputPrivacyKeyBirthday
                    }
                }

                function ss(e) {
                    switch (e) {
                        case "spam":
                            return new ue.Api.InputReportReasonSpam;
                        case "violence":
                            return new ue.Api.InputReportReasonViolence;
                        case "childAbuse":
                            return new ue.Api.InputReportReasonChildAbuse;
                        case "pornography":
                            return new ue.Api.InputReportReasonPornography;
                        case "copyright":
                            return new ue.Api.InputReportReasonCopyright;
                        case "fake":
                            return new ue.Api.InputReportReasonFake;
                        case "geoIrrelevant":
                            return new ue.Api.InputReportReasonGeoIrrelevant;
                        case "illegalDrugs":
                            return new ue.Api.InputReportReasonIllegalDrugs;
                        case "personalDetails":
                            return new ue.Api.InputReportReasonPersonalDetails;
                        case "other":
                            return new ue.Api.InputReportReasonOther
                    }
                }

                function is(e) {
                    return new ue.Api.DataJSON({
                        data: JSON.stringify(e)
                    })
                }

                function as(e, t) {
                    return "user" === t ? ye()(e) : "channel" === t ? ye()(e.slice(2)) : ye()(e.slice(1))
                }

                function os(e) {
                    return new ue.Api.InputGroupCall({
                        id: ye()(e.id),
                        accessHash: ye()(e.accessHash)
                    })
                }

                function rs(e) {
                    let {
                        id: t,
                        accessHash: n
                    } = e;
                    return new ue.Api.InputPhoneCall({
                        id: ye()(t),
                        accessHash: ye()(n)
                    })
                }

                function ds(e) {
                    if ("giftcode" === e.type) return new ue.Api.InputStorePaymentPremiumGiftCode({
                        users: e.users.map((e => jn(e.id, e.accessHash))),
                        boostPeer: e.boostChannel ? qn(e.boostChannel.id, e.boostChannel.accessHash) : void 0,
                        currency: e.currency,
                        amount: ye()(e.amount)
                    });
                    const t = Jn();
                    return new ue.Api.InputStorePaymentPremiumGiveaway({
                        boostPeer: qn(e.chat.id, e.chat.accessHash),
                        additionalPeers: e.additionalChannels?.map((e => qn(e.id, e.accessHash))),
                        countriesIso2: e.countries,
                        prizeDescription: e.prizeDescription,
                        onlyNewSubscribers: e.isOnlyForNewSubscribers || void 0,
                        winnersAreVisible: e.areWinnersVisible || void 0,
                        untilDate: e.untilDate,
                        currency: e.currency,
                        amount: ye()(e.amount),
                        randomId: t
                    })
                }

                function cs(e) {
                    switch (e.type) {
                        case "message":
                            return new ue.Api.InputInvoiceMessage({
                                peer: qn(e.chat.id, e.chat.accessHash),
                                msgId: e.messageId
                            });
                        case "slug":
                            return new ue.Api.InputInvoiceSlug({
                                slug: e.slug
                            });
                        case "stars":
                            return new ue.Api.InputInvoiceStars({
                                option: (n = e.option, new ue.Api.StarsTopupOption({
                                    stars: ye()(n.stars),
                                    amount: ye()(n.amount),
                                    currency: n.currency,
                                    extended: n.isExtended
                                }))
                            });
                        default: {
                            const n = ds(e.purpose),
                                s = (t = e.option, new ue.Api.PremiumGiftCodeOption({
                                    users: t.users,
                                    months: t.months,
                                    currency: t.currency,
                                    amount: ye()(t.amount)
                                }));
                            return new ue.Api.InputInvoicePremiumGiftCode({
                                purpose: n,
                                option: s
                            })
                        }
                    }
                    var t, n
                }

                function us(e) {
                    return e && "emoticon" in e ? new ue.Api.ReactionEmoji({
                        emoticon: e.emoticon
                    }) : e && "documentId" in e ? new ue.Api.ReactionCustomEmoji({
                        documentId: ye()(e.documentId)
                    }) : new ue.Api.ReactionEmpty
                }

                function ls(e, t) {
                    return e.id === G ? new ue.Api.EmojiStatusEmpty : t ? new ue.Api.EmojiStatusUntil({
                        documentId: ye()(e.id),
                        until: t
                    }) : new ue.Api.EmojiStatus({
                        documentId: ye()(e.id)
                    })
                }

                function ps(e) {
                    return new ue.Api.TextWithEntities({
                        text: e.text,
                        entities: e.entities?.map(Qn) || []
                    })
                }

                function fs(e) {
                    return new ue.Api.InputBotAppID({
                        id: ye()(e.id),
                        accessHash: ye()(e.accessHash)
                    })
                }

                function hs(e) {
                    if ("story" === e.type) return new ue.Api.InputReplyToStory({
                        peer: On(e.peerId),
                        storyId: e.storyId
                    });
                    if ("message" === e.type) {
                        const {
                            replyToMsgId: t,
                            replyToTopId: n,
                            replyToPeerId: s,
                            quoteText: i
                        } = e;
                        return new ue.Api.InputReplyToMessage({
                            replyToMsgId: t,
                            topMsgId: n,
                            replyToPeerId: s ? On(s) : void 0,
                            quoteText: i?.text,
                            quoteEntities: i?.entities?.map(Qn)
                        })
                    }
                }

                function ms(e) {
                    const t = [];
                    if (e.allowedUsers?.length && t.push(new ue.Api.InputPrivacyValueAllowUsers({
                            users: e.allowedUsers.map((e => {
                                let {
                                    id: t,
                                    accessHash: n
                                } = e;
                                return jn(t, n)
                            }))
                        })), e.allowedChats?.length && t.push(new ue.Api.InputPrivacyValueAllowChatParticipants({
                            chats: e.allowedChats.map((e => {
                                let {
                                    id: t,
                                    type: n
                                } = e;
                                return as(t, "chatTypeBasicGroup" === n ? "chat" : "channel")
                            }))
                        })), e.blockedUsers?.length && t.push(new ue.Api.InputPrivacyValueDisallowUsers({
                            users: e.blockedUsers.map((e => {
                                let {
                                    id: t,
                                    accessHash: n
                                } = e;
                                return jn(t, n)
                            }))
                        })), e.blockedChats?.length && t.push(new ue.Api.InputPrivacyValueDisallowChatParticipants({
                            chats: e.blockedChats.map((e => {
                                let {
                                    id: t,
                                    type: n
                                } = e;
                                return as(t, "chatTypeBasicGroup" === n ? "chat" : "channel")
                            }))
                        })), e.shouldAllowPremium && t.push(new ue.Api.InputPrivacyValueAllowPremium), !e.isUnspecified) switch (e.visibility) {
                        case "everybody":
                            t.push(new ue.Api.InputPrivacyValueAllowAll);
                            break;
                        case "contacts":
                            t.push(new ue.Api.InputPrivacyValueAllowContacts);
                            break;
                        case "nonContacts":
                            t.push(new ue.Api.InputPrivacyValueDisallowContacts);
                            break;
                        case "nobody":
                            t.push(new ue.Api.InputPrivacyValueDisallowAll)
                    }
                    return t
                }
                const gs = 1e6,
                    As = "temp",
                    ys = 63,
                    ws = 10;
                let Is, bs = 0;

                function Ss() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) + ++bs / gs
                }

                function vs(e) {
                    const {
                        message: t,
                        entities: n,
                        randomId: s,
                        recommended: i,
                        sponsorInfo: a,
                        additionalInfo: o,
                        buttonText: r,
                        canReport: d,
                        title: c,
                        url: u,
                        color: l
                    } = e;
                    let p;
                    return e.photo instanceof ue.Api.Photo && (Oe(e.photo), p = mt(e.photo)), {
                        randomId: Ke(s),
                        text: Rt(t, n),
                        expiresAt: Math.round(Date.now() / 1e3) + k,
                        isRecommended: i,
                        sponsorInfo: a,
                        additionalInfo: o,
                        buttonText: r,
                        canReport: d,
                        title: c,
                        url: u,
                        peerColor: l && me(l),
                        photo: p
                    }
                }

                function Cs(e) {
                    const t = He(e);
                    if (t && (e instanceof ue.Api.Message || e instanceof ue.Api.MessageService)) return Ps(t, e)
                }

                function Ps(e, t) {
                    const n = t.fromId ? he(t.fromId) : void 0,
                        s = t.peerId ? he(t.peerId) : void 0,
                        i = !n && e === Is,
                        a = t.out && !t.post || i && !t.fwdFrom,
                        o = Bt(t),
                        r = t.action && function(e, t, n, s, i) {
                            if (e instanceof ue.Api.MessageActionEmpty) return;
                            let a, o, r, d, c, u;
                            const l = [];
                            let p, f, h, m, g, A, y, w, I, b = "other";
                            const S = "users" in e ? e.users && e.users.map((e => fe(e, "user"))) : "userId" in e && [fe(e.userId, "user")] || [];
                            let v;
                            if (e instanceof ue.Api.MessageActionChatCreate) u = "Notification.CreatedChatWithTitle", l.push("%action_origin%", e.title), b = "chatCreate";
                            else if (e instanceof ue.Api.MessageActionChatEditTitle) s ? (u = "Channel.MessageTitleUpdated", l.push(e.title)) : (u = "Notification.ChangedGroupName", l.push("%action_origin%", e.title));
                            else if (e instanceof ue.Api.MessageActionChatEditPhoto) s ? u = "Channel.MessagePhotoUpdated" : (u = "Notification.ChangedGroupPhoto", l.push("%action_origin%"));
                            else if (e instanceof ue.Api.MessageActionChatDeletePhoto) u = s ? "Channel.MessagePhotoRemoved" : "Group.MessagePhotoRemoved";
                            else if (e instanceof ue.Api.MessageActionChatAddUser) !t || S.includes(t) ? (u = "Notification.JoinedChat", l.push("%target_user%")) : (u = "Notification.Invited", l.push("%action_origin%", "%target_user%"));
                            else if (e instanceof ue.Api.MessageActionChatDeleteUser) !t || S.includes(t) ? (u = "Notification.LeftChat", l.push("%target_user%")) : (u = "Notification.Kicked", l.push("%action_origin%", "%target_user%"));
                            else if (e instanceof ue.Api.MessageActionChatJoinedByLink) u = "Notification.JoinedGroupByLink", l.push("%action_origin%");
                            else if (e instanceof ue.Api.MessageActionChannelCreate) u = "Notification.CreatedChannel";
                            else if (e instanceof ue.Api.MessageActionChatMigrateTo) v = he(e), u = "Migrated to %target_chat%", l.push("%target_chat%");
                            else if (e instanceof ue.Api.MessageActionChannelMigrateFrom) v = he(e), u = "Migrated from %target_chat%", l.push("%target_chat%");
                            else if (e instanceof ue.Api.MessageActionPinMessage) u = "Chat.Service.Group.UpdatedPinnedMessage1", l.push("%action_origin%", "%message%");
                            else if (e instanceof ue.Api.MessageActionHistoryClear) u = "HistoryCleared", b = "historyClear";
                            else if (e instanceof ue.Api.MessageActionPhoneCall) {
                                const t = Boolean(e.duration);
                                if (u = [t ? "ChatList.Service" : "Chat", e.video ? "VideoCall" : "Call", i ? t ? "outgoing" : "Outgoing" : t ? "incoming" : "Incoming"].join("."), t) {
                                    const t = Math.max(Math.round(e.duration / 60), 1);
                                    l.push(`${t} min${t>1?"s":""}`)
                                }
                                a = {
                                    isOutgoing: i,
                                    isVideo: e.video,
                                    duration: e.duration,
                                    reason: Yt(e.reason)
                                }
                            } else if (e instanceof ue.Api.MessageActionInviteToGroupCall) u = "Notification.VoiceChatInvitation", o = {
                                id: e.call.id.toString(),
                                accessHash: e.call.accessHash.toString()
                            }, l.push("%action_origin%", "%target_user%");
                            else if (e instanceof ue.Api.MessageActionContactSignUp) u = "Notification.Joined", l.push("%action_origin%"), b = "contactSignUp";
                            else if (e instanceof ue.Api.MessageActionPaymentSent) r = Number(e.totalAmount), d = e.currency, u = "PaymentSuccessfullyPaid", b = "receipt", n && S.push(n), l.push("%payment_amount%", "%target_user%", "%product%");
                            else if (e instanceof ue.Api.MessageActionGroupCall)
                                if (e.duration) {
                                    const t = Math.max(Math.round(e.duration / 60), 1);
                                    u = "Notification.VoiceChatEnded", l.push(`${t} min${t>1?"s":""}`)
                                } else u = "Notification.VoiceChatStartedChannel", o = {
                                    id: e.call.id.toString(),
                                    accessHash: e.call.accessHash.toString()
                                };
                            else if (e instanceof ue.Api.MessageActionBotAllowed) e.domain ? (u = "ActionBotAllowed", l.push(e.domain)) : u = e.fromRequest ? "lng_action_webapp_bot_allowed" : "ActionAttachMenuBotAllowed";
                            else if (e instanceof ue.Api.MessageActionCustomAction) u = e.message;
                            else if (e instanceof ue.Api.MessageActionChatJoinedByRequest) u = "ChatService.UserJoinedGroupByRequest", l.push("%action_origin%");
                            else if (e instanceof ue.Api.MessageActionGameScore) u = t === Is ? "ActionYouScoredInGame" : "ActionUserScoredInGame", l.push("%score%"), f = e.score;
                            else if (e instanceof ue.Api.MessageActionWebViewDataSent) u = "Notification.WebAppSentData", l.push(e.text);
                            else if (e instanceof ue.Api.MessageActionGiftPremium) u = i ? "ActionGiftOutbound" : "ActionGiftInbound", i ? l.push("%gift_payment_amount%") : l.push("%action_origin%", "%gift_payment_amount%"), n && S.push(n), d = e.currency, e.cryptoCurrency && (c = {
                                currency: e.cryptoCurrency,
                                amount: e.cryptoAmount.toJSNumber()
                            }), r = e.amount.toJSNumber(), h = e.months;
                            else if (e instanceof ue.Api.MessageActionTopicCreate) u = "TopicWasCreatedAction", b = "topicCreate", l.push(e.title);
                            else if (e instanceof ue.Api.MessageActionTopicEdit) void 0 !== e.closed ? (u = e.closed ? "TopicWasClosedAction" : "TopicWasReopenedAction", l.push("%action_origin%", "%action_topic%")) : void 0 !== e.hidden ? u = e.hidden ? "TopicHidden2" : "TopicShown" : e.title ? (u = "TopicRenamedTo", l.push("%action_origin%", e.title)) : e.iconEmojiId ? (u = "TopicWasIconChangedToAction", l.push("%action_origin%", "%action_topic_icon%"), m = e.iconEmojiId.toString()) : u = "ChatList.UnsupportedMessage", g = !0;
                            else if (e instanceof ue.Api.MessageActionSuggestProfilePhoto) {
                                const s = e.photo instanceof ue.Api.Photo && e.photo.videoSizes?.length;
                                u = t === Is ? s ? "ActionSuggestVideoFromYouDescription" : "ActionSuggestPhotoFromYouDescription" : s ? "ActionSuggestVideoToYouDescription" : "ActionSuggestPhotoToYouDescription", b = "suggestProfilePhoto", l.push("%target_user%"), n && S.push(n)
                            } else e instanceof ue.Api.MessageActionGiveawayLaunch ? (u = "BoostingGiveawayJustStarted", l.push("%action_origin%")) : e instanceof ue.Api.MessageActionGiftCode ? (u = i ? "ActionGiftOutbound" : "BoostingReceivedGiftNoName", A = e.slug, h = e.months, r = e.amount?.toJSNumber(), y = Boolean(e.viaGiveaway), w = Boolean(e.unclaimed), i && l.push("%gift_payment_amount%"), d = e.currency, e.cryptoCurrency && (c = {
                                currency: e.cryptoCurrency,
                                amount: e.cryptoAmount.toJSNumber()
                            }), e.boostPeer && (v = he(e.boostPeer)), n && S.push(n)) : e instanceof ue.Api.MessageActionGiveawayResults ? e.winnersCount ? e.unclaimedCount ? u = "lng_action_giveaway_results_some" : (u = "BoostingGiveawayServiceWinnersSelected", l.push("%amount%"), r = e.winnersCount, I = e.winnersCount) : u = "lng_action_giveaway_results_none" : e instanceof ue.Api.MessageActionBoostApply ? (b = "chatBoost", 1 === e.boosts ? (u = t === Is ? "BoostingBoostsGroupByYouServiceMsg" : "BoostingBoostsGroupByUserServiceMsg", l.push("%action_origin%")) : (u = t === Is ? "BoostingBoostsGroupByYouServiceMsgCount" : "BoostingBoostsGroupByUserServiceMsgCount", l.push(e.boosts.toString()), t !== Is && l.unshift("%action_origin%"), I = e.boosts)) : u = "ChatList.UnsupportedMessage";
                            return "photo" in e && e.photo instanceof ue.Api.Photo && (Oe(e.photo), p = mt(e.photo)), {
                                mediaType: "action",
                                text: u,
                                type: b,
                                targetUserIds: S,
                                targetChatId: v,
                                photo: p,
                                amount: r,
                                currency: d,
                                giftCryptoInfo: c,
                                isGiveaway: y,
                                slug: A,
                                translationValues: l,
                                call: o,
                                phoneCall: a,
                                score: f,
                                months: h,
                                topicEmojiIconId: m,
                                isTopicAction: g,
                                isUnclaimed: w,
                                pluralValue: I
                            }
                        }(t.action, n, s, Boolean(t.post), a);
                    r && (o.action = r);
                    const d = t.date > rt() + ws,
                        c = t.media instanceof ue.Api.MessageMediaInvoice && Boolean(t.media.extendedMedia),
                        u = Boolean(t.editDate) && !t.editHide,
                        {
                            inlineButtons: l,
                            keyboardButtons: p,
                            keyboardPlaceholder: f,
                            isKeyboardSingleUse: h,
                            isKeyboardSelective: m
                        } = function(e, t) {
                            const {
                                replyMarkup: n,
                                media: s
                            } = e;
                            if (!(n instanceof ue.Api.ReplyKeyboardMarkup || n instanceof ue.Api.ReplyInlineMarkup)) return;
                            const i = n.rows.map((e => {
                                let {
                                    buttons: n
                                } = e;
                                return n.map((e => {
                                    const {
                                        text: n
                                    } = e;
                                    if (e instanceof ue.Api.KeyboardButton) return {
                                        type: "command",
                                        text: n
                                    };
                                    if (e instanceof ue.Api.KeyboardButtonUrl) return e.url.includes("?startgroup=") ? {
                                        type: "unsupported",
                                        text: n
                                    } : {
                                        type: "url",
                                        text: n,
                                        url: e.url
                                    };
                                    if (e instanceof ue.Api.KeyboardButtonCallback) return e.requiresPassword ? {
                                        type: "unsupported",
                                        text: n
                                    } : {
                                        type: "callback",
                                        text: n,
                                        data: Ke(e.data)
                                    };
                                    if (e instanceof ue.Api.KeyboardButtonRequestPoll) return {
                                        type: "requestPoll",
                                        text: n,
                                        isQuiz: e.quiz
                                    };
                                    if (e instanceof ue.Api.KeyboardButtonRequestPhone) return {
                                        type: "requestPhone",
                                        text: n
                                    };
                                    if (e instanceof ue.Api.KeyboardButtonBuy) {
                                        if (s instanceof ue.Api.MessageMediaInvoice && s.receiptMsgId) return {
                                            type: "receipt",
                                            receiptMessageId: s.receiptMsgId
                                        };
                                        if (t) return;
                                        return {
                                            type: "buy",
                                            text: n
                                        }
                                    }
                                    return e instanceof ue.Api.KeyboardButtonGame ? {
                                        type: "game",
                                        text: n
                                    } : e instanceof ue.Api.KeyboardButtonSwitchInline ? {
                                        type: "switchBotInline",
                                        text: n,
                                        query: e.query,
                                        isSamePeer: e.samePeer
                                    } : e instanceof ue.Api.KeyboardButtonUserProfile ? {
                                        type: "userProfile",
                                        text: n,
                                        userId: e.userId.toString()
                                    } : e instanceof ue.Api.KeyboardButtonSimpleWebView ? {
                                        type: "simpleWebView",
                                        text: n,
                                        url: e.url
                                    } : e instanceof ue.Api.KeyboardButtonWebView ? {
                                        type: "webView",
                                        text: n,
                                        url: e.url
                                    } : e instanceof ue.Api.KeyboardButtonUrlAuth ? {
                                        type: "urlAuth",
                                        text: n,
                                        url: e.url,
                                        buttonId: e.buttonId
                                    } : {
                                        type: "unsupported",
                                        text: n
                                    }
                                })).filter(Boolean)
                            }));
                            return i.every((e => !e.length)) ? void 0 : {
                                [n instanceof ue.Api.ReplyKeyboardMarkup ? "keyboardButtons" : "inlineButtons"]: i,
                                ...n instanceof ue.Api.ReplyKeyboardMarkup && {
                                    keyboardPlaceholder: n.placeholder,
                                    isKeyboardSingleUse: n.singleUse,
                                    isKeyboardSelective: n.selective
                                }
                            }
                        }(t, c) || {},
                        g = t.fwdFrom && Ts(t.fwdFrom, i),
                        {
                            mediaUnread: A,
                            postAuthor: y
                        } = t,
                        w = t.groupedId && String(t.groupedId),
                        I = Boolean(w) && !(o.document || o.audio || o.sticker),
                        b = t.replyMarkup instanceof ue.Api.ReplyKeyboardHide,
                        S = t.replyMarkup instanceof ue.Api.ReplyKeyboardHide && t.replyMarkup.selective,
                        v = t.noforwards || c,
                        C = !t.noforwards,
                        P = (0, xn.e)(o, w),
                        M = t.replies?.comments,
                        T = t.fromBoostsApplied,
                        B = t.factcheck && Rs(t.factcheck),
                        R = t.invertMedia,
                        U = t.savedPeerId && he(t.savedPeerId);
                    return nt({
                        id: t.id,
                        chatId: e,
                        isOutgoing: a,
                        content: o,
                        date: t.date,
                        senderId: n || t.out && t.post && Is || e,
                        viewsCount: t.views,
                        forwardsCount: t.forwards,
                        isScheduled: d,
                        isFromScheduled: t.fromScheduled,
                        isSilent: t.silent,
                        isPinned: t.pinned,
                        reactions: t.reactions && nn(t.reactions),
                        emojiOnlyCount: P,
                        ...t.replyTo && {
                            replyInfo: Bs(t.replyTo, t)
                        },
                        forwardInfo: g,
                        isEdited: u,
                        editDate: t.editDate,
                        isMediaUnread: A,
                        hasUnreadMention: t.mentioned && A,
                        isMentioned: t.mentioned,
                        ...w && {
                            groupedId: w,
                            isInAlbum: I
                        },
                        inlineButtons: l,
                        ...p && {
                            keyboardButtons: p,
                            keyboardPlaceholder: f,
                            isKeyboardSingleUse: h,
                            isKeyboardSelective: m
                        },
                        ...b && {
                            shouldHideKeyboardButtons: b,
                            isHideKeyboardSelective: S
                        },
                        ...t.viaBotId && {
                            viaBotId: fe(t.viaBotId, "user")
                        },
                        postAuthorTitle: y,
                        isProtected: v,
                        isForwardingAllowed: C,
                        hasComments: M,
                        savedPeerId: U,
                        senderBoosts: T,
                        viaBusinessBotId: t.viaBusinessBotId?.toString(),
                        factCheck: B,
                        effectId: t.effect?.toString(),
                        isInvertedMedia: R
                    })
                }

                function Ms(e) {
                    if (e instanceof ue.Api.DraftMessageEmpty) return;
                    const {
                        message: t,
                        entities: n,
                        replyTo: s,
                        date: i,
                        effect: a
                    } = e, o = s instanceof ue.Api.InputReplyToMessage ? {
                        type: "message",
                        replyToMsgId: s.replyToMsgId,
                        replyToTopId: s.topMsgId,
                        replyToPeerId: s.replyToPeerId && he(s.replyToPeerId),
                        quoteText: s.quoteText ? Rt(s.quoteText, s.quoteEntities) : void 0
                    } : void 0;
                    return {
                        text: t ? Rt(t, n) : void 0,
                        replyInfo: o,
                        date: i,
                        effectId: a?.toString()
                    }
                }

                function Ts(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const n = e.savedFromPeer && he(e.savedFromPeer),
                        s = e.fromId && he(e.fromId);
                    return {
                        date: e.date,
                        savedDate: e.savedDate,
                        isImported: e.imported,
                        isChannelPost: Boolean(e.channelPost),
                        channelPostId: e.channelPost,
                        isLinkedChannelPost: Boolean(e.channelPost && n && !t),
                        savedFromPeerId: n,
                        fromId: s,
                        fromChatId: s || n,
                        fromMessageId: e.savedFromMsgId || e.channelPost,
                        hiddenUserName: e.fromName,
                        postAuthorTitle: e.postAuthor
                    }
                }

                function Bs(e, t) {
                    if (e instanceof ue.Api.MessageReplyStoryHeader) return {
                        type: "story",
                        peerId: he(e.peer),
                        storyId: e.storyId
                    };
                    if (e instanceof ue.Api.MessageReplyHeader) {
                        const {
                            replyFrom: n,
                            replyToMsgId: s,
                            replyToTopId: i,
                            replyMedia: a,
                            replyToPeerId: o,
                            forumTopic: r,
                            quote: d,
                            quoteText: c,
                            quoteEntities: u
                        } = e;
                        return {
                            type: "message",
                            replyToMsgId: s,
                            replyToTopId: i,
                            isForumTopic: r,
                            replyFrom: n && Ts(n),
                            replyToPeerId: o && he(o),
                            replyMedia: a && Ut(a, t),
                            isQuote: d,
                            quoteText: c ? Rt(c, u) : void 0
                        }
                    }
                }

                function Rs(e) {
                    return {
                        shouldFetch: e.needCheck,
                        hash: e.hash.toString(),
                        text: e.text && It(e.text),
                        countryCode: e.country
                    }
                }

                function Us(e, t) {
                    return {
                        mediaType: "poll",
                        id: String(t),
                        summary: Xe(e.summary, ["question", "answers"]),
                        results: {}
                    }
                }

                function ks(e) {
                    const {
                        filename: t,
                        blobUrl: n,
                        previewBlobUrl: s,
                        mimeType: i,
                        size: a,
                        audio: o,
                        shouldSendAsFile: r,
                        shouldSendAsSpoiler: d,
                        ttlSeconds: c
                    } = e;
                    if (!r) {
                        if (e.quick) {
                            if (j.has(i)) {
                                const {
                                    width: t,
                                    height: i
                                } = e.quick;
                                return {
                                    photo: {
                                        mediaType: "photo",
                                        id: As,
                                        sizes: [],
                                        thumbnail: {
                                            width: t,
                                            height: i,
                                            dataUri: s || n
                                        },
                                        blobUrl: n,
                                        date: Math.round(Date.now() / 1e3),
                                        isSpoiler: d
                                    }
                                }
                            }
                            if (L.has(i)) {
                                const {
                                    width: o,
                                    height: r,
                                    duration: c
                                } = e.quick;
                                return {
                                    video: {
                                        mediaType: "video",
                                        id: As,
                                        mimeType: i,
                                        duration: c || 0,
                                        fileName: t,
                                        width: o,
                                        height: r,
                                        blobUrl: n,
                                        ...s && {
                                            thumbnail: {
                                                width: o,
                                                height: r,
                                                dataUri: s
                                            }
                                        },
                                        size: a,
                                        isSpoiler: d
                                    }
                                }
                            }
                        }
                        if (e.voice) {
                            const {
                                duration: t,
                                waveform: n
                            } = e.voice, {
                                data: s
                            } = Nn(n, ys);
                            return {
                                voice: {
                                    mediaType: "voice",
                                    id: As,
                                    duration: t,
                                    waveform: s,
                                    size: a
                                },
                                ttlSeconds: c
                            }
                        }
                        if (V.has(i)) {
                            const {
                                duration: e,
                                performer: n,
                                title: s
                            } = o || {};
                            return {
                                audio: {
                                    mediaType: "audio",
                                    id: As,
                                    mimeType: i,
                                    fileName: t,
                                    size: a,
                                    duration: e || 0,
                                    title: s,
                                    performer: n
                                }
                            }
                        }
                    }
                    return {
                        document: {
                            mediaType: "document",
                            mimeType: i,
                            fileName: t,
                            size: a,
                            ...s && {
                                previewBlobUrl: s
                            }
                        }
                    }
                }

                function Ds(e) {
                    const t = He(e);
                    if (t && e instanceof ue.Api.Message && e.replies) return Es(e.replies, e.id, t)
                }

                function Es(e, t, n) {
                    const {
                        channelId: s,
                        replies: i,
                        maxId: a,
                        readMaxId: o,
                        recentRepliers: r,
                        comments: d
                    } = e, c = s ? fe(s, "channel") : void 0;
                    if (c === Z) return;
                    const u = {
                        messagesCount: i,
                        ...a && {
                            lastMessageId: a
                        },
                        ...o && {
                            lastReadMessageId: o
                        },
                        ...r && {
                            recentReplierIds: r.map(he)
                        }
                    };
                    return d ? {
                        ...u,
                        isCommentsInfo: !0,
                        chatId: c,
                        originChannelId: n,
                        originMessageId: t
                    } : {
                        ...u,
                        isCommentsInfo: !1,
                        chatId: n,
                        threadId: t
                    }
                }

                function xs(e) {
                    const {
                        shortcutId: t,
                        shortcut: n,
                        topMessage: s
                    } = e;
                    return {
                        id: t,
                        shortcut: n,
                        topMessageId: s
                    }
                }

                function Ns(e) {
                    const {
                        address: t,
                        geoPoint: n
                    } = e;
                    return {
                        address: t,
                        geo: n && xt(n)
                    }
                }

                function Hs(e) {
                    const {
                        timezoneId: t,
                        weeklyOpen: n
                    } = e;
                    return {
                        timezoneId: t,
                        workHours: n.map((e => {
                            let {
                                startMinute: t,
                                endMinute: n
                            } = e;
                            return {
                                startMinute: t,
                                endMinute: n
                            }
                        }))
                    }
                }

                function Gs(e) {
                    const {
                        title: t,
                        description: n,
                        sticker: s
                    } = e;
                    return {
                        title: t,
                        description: n,
                        sticker: s && vt(s)
                    }
                }

                function Fs(e) {
                    const {
                        fullUser: {
                            about: t,
                            commonChatsCount: n,
                            pinnedMsgId: s,
                            botInfo: i,
                            blocked: a,
                            profilePhoto: o,
                            voiceMessagesForbidden: r,
                            premiumGifts: d,
                            fallbackPhoto: c,
                            personalPhoto: u,
                            translationsDisabled: l,
                            storiesPinnedAvailable: p,
                            contactRequirePremium: f,
                            businessWorkHours: h,
                            businessLocation: m,
                            businessIntro: g,
                            birthday: A,
                            personalChannelId: y,
                            personalChannelMessage: w,
                            sponsoredEnabled: I
                        },
                        users: b
                    } = e, S = fe(b[0].id, "user");
                    return {
                        bio: t,
                        commonChatsCount: n,
                        pinnedMessageId: s,
                        isBlocked: Boolean(a),
                        noVoiceMessages: r,
                        hasPinnedStories: Boolean(p),
                        isTranslationDisabled: l,
                        profilePhoto: o instanceof ue.Api.Photo ? mt(o) : void 0,
                        fallbackPhoto: c instanceof ue.Api.Photo ? mt(c) : void 0,
                        personalPhoto: u instanceof ue.Api.Photo ? mt(u) : void 0,
                        premiumGifts: d?.map((e => function(e) {
                            const {
                                months: t,
                                currency: n,
                                amount: s,
                                botUrl: i
                            } = e;
                            return {
                                months: t,
                                currency: n,
                                amount: s.toJSNumber(),
                                botUrl: i
                            }
                        }(e))),
                        botInfo: i && zt(i, S),
                        isContactRequirePremium: f,
                        birthday: A && js(A),
                        businessLocation: m && Ns(m),
                        businessWorkHours: h && Hs(h),
                        businessIntro: g && Gs(g),
                        personalChannelId: y && fe(y, "channel"),
                        personalChannelMessageId: w,
                        areAdsEnabled: I
                    }
                }

                function _s(e) {
                    if (!(e instanceof ue.Api.User)) return;
                    const {
                        id: t,
                        firstName: n,
                        lastName: s,
                        fake: i,
                        scam: a,
                        support: o,
                        closeFriend: r,
                        storiesUnavailable: d,
                        storiesMaxId: c
                    } = e, u = e.photo instanceof ue.Api.UserProfilePhoto ? Boolean(e.photo.hasVideo) : void 0, l = e.photo && St(e.photo), p = (m = e).bot ? "userTypeBot" : m.deleted ? "userTypeDeleted" : "userTypeRegular", f = yt(e), h = e.emojiStatus ? ge(e.emojiStatus) : void 0;
                    var m;
                    return {
                        id: fe(t, "user"),
                        isMin: Boolean(e.min),
                        fakeType: a ? "scam" : i ? "fake" : void 0,
                        ...e.self && {
                            isSelf: !0
                        },
                        isPremium: Boolean(e.premium),
                        ...e.verified && {
                            isVerified: !0
                        },
                        ...r && {
                            isCloseFriend: !0
                        },
                        ...o && {
                            isSupport: !0
                        },
                        ...(e.contact || e.mutualContact) && {
                            isContact: !0
                        },
                        type: p,
                        firstName: n,
                        lastName: s,
                        canEditBot: Boolean(e.botCanEdit),
                        ..."userTypeBot" === p && {
                            canBeInvitedToGroup: !e.botNochats
                        },
                        ...f && {
                            usernames: f
                        },
                        phoneNumber: e.phone || "",
                        noStatus: !e.status,
                        ...e.accessHash && {
                            accessHash: String(e.accessHash)
                        },
                        avatarPhotoId: l,
                        emojiStatus: h,
                        hasVideoAvatar: u,
                        areStoriesHidden: Boolean(e.storiesHidden),
                        maxStoryId: c,
                        hasStories: Boolean(c) && !d,
                        ...e.bot && e.botInlinePlaceholder && {
                            botPlaceholder: e.botInlinePlaceholder
                        },
                        ...e.bot && e.botAttachMenu && {
                            isAttachBot: e.botAttachMenu
                        },
                        color: e.color && me(e.color)
                    }
                }

                function qs(e) {
                    return !e || e instanceof ue.Api.UserStatusEmpty ? {
                        type: "userStatusEmpty"
                    } : e instanceof ue.Api.UserStatusOnline ? {
                        type: "userStatusOnline",
                        expires: e.expires
                    } : e instanceof ue.Api.UserStatusOffline ? {
                        type: "userStatusOffline",
                        wasOnline: e.wasOnline
                    } : e instanceof ue.Api.UserStatusRecently ? {
                        type: "userStatusRecently",
                        isReadDateRestrictedByMe: e.byMe
                    } : e instanceof ue.Api.UserStatusLastWeek ? {
                        type: "userStatusLastWeek",
                        isReadDateRestrictedByMe: e.byMe
                    } : {
                        type: "userStatusLastMonth",
                        isReadDateRestrictedByMe: e.byMe
                    }
                }

                function Os(e) {
                    const t = {},
                        n = {};
                    return e.forEach((e => {
                        const s = _s(e);
                        if (!s) return;
                        const i = n[s.id];
                        i && !i.isMin || (n[s.id] = s), "status" in e && (t[s.id] = qs(e.status))
                    })), {
                        users: Object.values(n),
                        userStatusesById: t
                    }
                }

                function js(e) {
                    return be(e)
                }

                function Ls(e) {
                    if (e instanceof ue.Api.WallPaperNoFile) return;
                    const {
                        slug: t
                    } = e, n = Et(e.document);
                    return n ? {
                        slug: t,
                        document: n
                    } : void 0
                }

                function Vs(e) {
                    return {
                        isCurrent: Boolean(e.current),
                        isOfficialApp: Boolean(e.officialApp),
                        isPasswordPending: Boolean(e.passwordPending),
                        hash: String(e.hash),
                        areCallsEnabled: !e.callRequestsDisabled,
                        areSecretChatsEnabled: !e.encryptedRequestsDisabled,
                        isUnconfirmed: e.unconfirmed,
                        ...Xe(e, ["deviceModel", "platform", "systemVersion", "appName", "appVersion", "dateCreated", "dateActive", "ip", "country", "region"])
                    }
                }

                function zs(e) {
                    return {
                        hash: String(e.hash),
                        botId: fe(e.botId, "user"),
                        ...Xe(e, ["platform", "browser", "dateCreated", "dateActive", "ip", "region", "domain"])
                    }
                }

                function Ws(e, t) {
                    const {
                        silent: n,
                        muteUntil: s,
                        showPreviews: i,
                        otherSound: a
                    } = e, o = Boolean(a && !(a instanceof ue.Api.NotificationSoundNone));
                    return {
                        chatId: he(t),
                        isMuted: n || "number" == typeof s && rt() < s,
                        ...!o && {
                            isSilent: !0
                        },
                        ...void 0 !== i && {
                            shouldShowPreviews: Boolean(i)
                        },
                        muteUntil: s
                    }
                }

                function Js(e, t) {
                    const {
                        hidden: n,
                        iso2: s,
                        defaultName: i,
                        name: a
                    } = e, {
                        countryCode: o,
                        prefixes: r,
                        patterns: d
                    } = t || {};
                    return {
                        isHidden: n,
                        iso2: s,
                        defaultName: i,
                        name: a,
                        countryCode: o,
                        prefixes: r,
                        patterns: d
                    }
                }

                function Ks(e) {
                    if (!(e instanceof ue.Api.JsonNull)) return e instanceof ue.Api.JsonString || e instanceof ue.Api.JsonBool || e instanceof ue.Api.JsonNumber ? e.value : e instanceof ue.Api.JsonArray ? e.value.map(Ks) : e.value.reduce(((e, t) => (e[t.key] = Ks(t.value), e)), {})
                }

                function $s(e) {
                    if (e instanceof ue.Api.UrlAuthResultRequest) {
                        const {
                            bot: t,
                            domain: n,
                            requestWriteAccess: s
                        } = e, i = _s(t);
                        if (!i) return;
                        return ze(t), {
                            type: "request",
                            domain: n,
                            shouldRequestWriteAccess: s,
                            bot: i
                        }
                    }
                    return e instanceof ue.Api.UrlAuthResultAccepted ? {
                        type: "accepted",
                        url: e.url
                    } : e instanceof ue.Api.UrlAuthResultDefault ? {
                        type: "default"
                    } : void 0
                }

                function Qs(e) {
                    return e.strings.reduce(((e, t) => (e[t.key] = Zs(t), e)), {})
                }

                function Zs(e) {
                    return e instanceof ue.Api.LangPackString ? e.value : e instanceof ue.Api.LangPackStringPluralized ? tt(be(e), ["key"]) : void 0
                }

                function Ys(e) {
                    const t = [],
                        n = e.reduce(((e, n) => (n instanceof ue.Api.LangPackStringDeleted && t.push(n.key), n instanceof ue.Api.LangPackString && (e[n.key] = n.value), n instanceof ue.Api.LangPackStringPluralized && (e[n.key] = nt({
                            zero: n.zeroValue,
                            one: n.oneValue,
                            two: n.twoValue,
                            few: n.fewValue,
                            many: n.manyValue,
                            other: n.otherValue
                        })), e)), {});
                    return {
                        keysToRemove: t,
                        strings: n
                    }
                }

                function Xs(e) {
                    const {
                        name: t,
                        nativeName: n,
                        langCode: s,
                        pluralCode: i,
                        rtl: a,
                        stringsCount: o,
                        translatedCount: r,
                        translationsUrl: d,
                        beta: c,
                        official: u
                    } = e;
                    return {
                        name: t,
                        nativeName: n,
                        langCode: s,
                        pluralCode: i,
                        isRtl: a,
                        isBeta: c,
                        isOfficial: u,
                        stringsCount: o,
                        translatedCount: r,
                        translationsUrl: d
                    }
                }

                function ei(e) {
                    if (e instanceof ue.Api.help.PeerColorSet) return e.colors.map((e => `#${e.toString(16).padStart(6,"0")}`))
                }

                function ti(e) {
                    const {
                        id: t,
                        name: n,
                        utcOffset: s
                    } = e;
                    return {
                        id: t,
                        name: n,
                        utcOffset: s
                    }
                }

                function ni(e, t) {
                    if (t instanceof ue.Api.StoryItemDeleted) return {
                        id: t.id,
                        peerId: e,
                        isDeleted: !0
                    };
                    if (t instanceof ue.Api.StoryItemSkipped) {
                        const {
                            id: n,
                            date: s,
                            expireDate: i,
                            closeFriends: a
                        } = t;
                        return {
                            id: n,
                            peerId: e,
                            ...a && {
                                isForCloseFriends: !0
                            },
                            date: s,
                            expireDate: i
                        }
                    }
                    const {
                        edited: n,
                        pinned: s,
                        expireDate: i,
                        id: a,
                        date: o,
                        caption: r,
                        entities: d,
                        media: c,
                        privacy: u,
                        views: l,
                        public: p,
                        noforwards: f,
                        closeFriends: h,
                        contacts: m,
                        selectedContacts: g,
                        mediaAreas: A,
                        sentReaction: y,
                        out: w,
                        fwdFrom: I,
                        fromId: b
                    } = t, S = {
                        ...Ut(c)
                    };
                    return r && (S.text = Rt(r, d)), nt({
                        id: a,
                        peerId: e,
                        date: o,
                        expireDate: i,
                        content: S,
                        isPublic: p,
                        isEdited: n,
                        isInProfile: s,
                        isForContacts: m,
                        isForSelectedContacts: g,
                        isForCloseFriends: h,
                        noForwards: f,
                        views: l && si(l),
                        isOut: w,
                        visibility: u && wt(u),
                        mediaAreas: A?.map(ri).filter(Boolean),
                        sentReaction: y && rn(y),
                        forwardInfo: I && di(I),
                        fromId: b && he(b)
                    })
                }

                function si(e) {
                    return nt({
                        hasViewers: e.hasViewers,
                        viewsCount: e.viewsCount,
                        forwardsCount: e.forwardsCount,
                        reactionsCount: e.reactionsCount,
                        reactions: e.reactions?.map(an).filter(Boolean),
                        recentViewerIds: e.recentViewers?.map((e => fe(e, "user")))
                    })
                }

                function ii(e) {
                    const {
                        blockedMyStoriesFrom: t,
                        blocked: n
                    } = e;
                    if (e instanceof ue.Api.StoryView) return nt({
                        type: "user",
                        peerId: fe(e.userId, "user"),
                        date: e.date,
                        reaction: e.reaction && rn(e.reaction),
                        areStoriesBlocked: n || t,
                        isUserBlocked: n
                    });
                    if (e instanceof ue.Api.StoryViewPublicForward) {
                        const s = Cs(e.message);
                        if (!s) return;
                        return {
                            type: "forward",
                            peerId: s.chatId,
                            messageId: s.id,
                            message: s,
                            date: s.date,
                            areStoriesBlocked: n || t,
                            isUserBlocked: n
                        }
                    }
                    if (e instanceof ue.Api.StoryViewPublicRepost) {
                        const s = he(e.peerId),
                            i = ni(s, e.story);
                        if (!("content" in i)) return;
                        return {
                            type: "repost",
                            peerId: s,
                            storyId: e.story.id,
                            date: i.date,
                            story: i,
                            areStoriesBlocked: n || t,
                            isUserBlocked: n
                        }
                    }
                }

                function ai(e) {
                    return {
                        activeUntil: e.activeUntilDate,
                        cooldownUntil: e.cooldownUntilDate
                    }
                }

                function oi(e) {
                    const {
                        x: t,
                        y: n,
                        w: s,
                        h: i,
                        rotation: a,
                        radius: o
                    } = e;
                    return {
                        x: t,
                        y: n,
                        width: s,
                        height: i,
                        rotation: a,
                        radius: o
                    }
                }

                function ri(e) {
                    if (e instanceof ue.Api.MediaAreaVenue) {
                        const {
                            geo: t,
                            title: n,
                            coordinates: s
                        } = e, i = xt(t);
                        if (!i) return;
                        return {
                            type: "venue",
                            coordinates: oi(s),
                            geo: i,
                            title: n
                        }
                    }
                    if (e instanceof ue.Api.MediaAreaGeoPoint) {
                        const {
                            geo: t,
                            coordinates: n
                        } = e, s = xt(t);
                        if (!s) return;
                        return {
                            type: "geoPoint",
                            coordinates: oi(n),
                            geo: s
                        }
                    }
                    if (e instanceof ue.Api.MediaAreaSuggestedReaction) {
                        const {
                            coordinates: t,
                            reaction: n,
                            dark: s,
                            flipped: i
                        } = e, a = rn(n);
                        if (!a) return;
                        return {
                            type: "suggestedReaction",
                            coordinates: oi(t),
                            reaction: a,
                            ...s && {
                                isDark: !0
                            },
                            ...i && {
                                isFlipped: !0
                            }
                        }
                    }
                    if (e instanceof ue.Api.MediaAreaChannelPost) {
                        const {
                            coordinates: t,
                            channelId: n,
                            msgId: s
                        } = e;
                        return {
                            type: "channelPost",
                            coordinates: oi(t),
                            channelId: fe(n, "channel"),
                            messageId: s
                        }
                    }
                    if (e instanceof ue.Api.MediaAreaUrl) {
                        const {
                            coordinates: t,
                            url: n
                        } = e;
                        return {
                            type: "url",
                            coordinates: oi(t),
                            url: n
                        }
                    }
                }

                function di(e) {
                    const {
                        from: t,
                        fromName: n,
                        storyId: s,
                        modified: i
                    } = e;
                    return {
                        storyId: s,
                        fromPeerId: t && he(t),
                        fromName: n,
                        isModified: i
                    }
                }
                const ci = new Map,
                    ui = [],
                    li = (e, t) => {
                        const n = e.topicId ? `${e.chatId}-${e.topicId}` : e.chatId;
                        if (ci.has(n) && (clearTimeout(ci.get(n)), ci.delete(n)), e.muteUntil === D || e.muteUntil <= rt()) return;
                        if (ui.push(e), ui.sort(((e, t) => t.muteUntil - e.muteUntil)), !ui.pop()) return;
                        const s = setTimeout((() => {
                            if (t(), ui.length) {
                                const e = ui.pop();
                                e && li(e, t)
                            }
                        }), 1e3 * (e.muteUntil - rt()));
                        ci.set(n, s)
                    };

                function pi(e) {
                    let t = arguments.length > 2 ? arguments[2] : void 0;
                    li({
                        chatId: e,
                        muteUntil: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                    }, (() => t({
                        "@type": "updateNotifyExceptions",
                        chatId: e,
                        isMuted: !1
                    })))
                }
                var fi = n(86453);
                class hi {
                    constructor(e, t) {
                        this.pts = e, this.ptsCount = t
                    }
                }
                class mi {
                    constructor(e, t, n) {
                        this.channelId = e, this.pts = t, this.ptsCount = n
                    }
                }
                let gi;
                const Ai = new Set;

                function yi(e) {
                    e.filter((e => e instanceof ue.Api.User)).map(_s).forEach((e => {
                        e && gi({
                            "@type": "updateUser",
                            id: e.id,
                            user: e
                        })
                    })), e.filter((e => e instanceof ue.Api.Chat || e instanceof ue.Api.ChatForbidden || e instanceof ue.Api.Channel || e instanceof ue.Api.ChannelForbidden)).map((e => gn(e))).forEach((e => {
                        e && gi({
                            "@type": "updateChat",
                            id: e.id,
                            chat: e
                        })
                    }))
                }

                function wi(e) {
                    const t = st(e).map(Ds).filter(Boolean);
                    t.length && gi({
                        "@type": "updateThreadInfos",
                        threadInfoUpdates: t
                    })
                }

                function Ii(e) {
                    gi(e)
                }

                function bi(e) {
                    if (e instanceof ue.connection.UpdateServerTimeOffset) i = e.timeOffset, at = i, gi({
                        "@type": "updateServerTimeOffset",
                        serverTimeOffset: e.timeOffset
                    });
                    else if (e instanceof ue.connection.UpdateConnectionState) {
                        let t;
                        switch (e.state) {
                            case ue.connection.UpdateConnectionState.disconnected:
                                t = "connectionStateConnecting";
                                break;
                            case ue.connection.UpdateConnectionState.broken:
                                t = "connectionStateBroken";
                                break;
                            case ue.connection.UpdateConnectionState.connected:
                            default:
                                t = "connectionStateReady"
                        }
                        gi({
                            "@type": "updateConnectionState",
                            connectionState: t
                        })
                    } else if (e instanceof ue.Api.UpdateNewMessage || e instanceof ue.Api.UpdateNewScheduledMessage || e instanceof ue.Api.UpdateNewChannelMessage || e instanceof ue.Api.UpdateShortChatMessage || e instanceof ue.Api.UpdateShortMessage) {
                        let t, n;
                        const i = e._entities;
                        if (i && (We(i), yi(i)), e instanceof ue.Api.UpdateShortChatMessage) t = Ps(fe((s = e).chatId, "chat"), {
                            ...s,
                            fromId: _n(fe(s.fromId, "user")),
                            peerId: _n(fe(s.chatId, "chat"))
                        });
                        else if (e instanceof ue.Api.UpdateShortMessage) t = function(e) {
                            return Ps(fe(e.userId, "user"), {
                                ...e,
                                fromId: _n(e.out ? Is : fe(e.userId, "user")),
                                peerId: _n(e.out ? fe(e.userId, "user") : Is)
                            })
                        }(e);
                        else {
                            if (e.message instanceof ue.Api.MessageEmpty) return void(d && console.error("Unexpected update:", e.className, e));
                            Fe(e.message), t = Cs(e.message), wi([e.message]), n = "replyMarkup" in e.message && e.message?.replyMarkup instanceof ue.Api.ReplyKeyboardForceReply && (!e.message.replyMarkup.selective || t.isMentioned)
                        }
                        if (e instanceof ue.Api.UpdateNewScheduledMessage) gi({
                            "@type": Ai.has(t.id) ? "updateScheduledMessage" : "newScheduledMessage",
                            id: t.id,
                            chatId: t.chatId,
                            message: t
                        });
                        else {
                            const e = Ai.has(t.id) && !t.viaBotId && !t.content.action;
                            gi({
                                "@type": e ? "updateMessage" : "newMessage",
                                id: t.id,
                                chatId: t.chatId,
                                message: t,
                                shouldForceReply: n
                            })
                        }
                        if (e.message instanceof ue.Api.MessageService) {
                            const {
                                action: n
                            } = e.message;
                            if (n instanceof ue.Api.MessageActionChatEditTitle) gi({
                                "@type": "updateChat",
                                id: t.chatId,
                                chat: {
                                    title: n.title
                                }
                            });
                            else if (n instanceof ue.Api.MessageActionChatEditPhoto) {
                                const s = n.photo instanceof ue.Api.Photo && mt(n.photo);
                                if (!s) return;
                                const i = function(e) {
                                        if (e instanceof ue.Api.PhotoEmpty) return new ue.Api.ChatPhotoEmpty;
                                        const {
                                            dcId: t,
                                            id: n
                                        } = e;
                                        return new ue.Api.ChatPhoto({
                                            dcId: t,
                                            photoId: n
                                        })
                                    }(n.photo),
                                    a = He(e.message);
                                Ue.chats[a] && (Ue.chats[a].photo = i), Oe(n.photo), gi({
                                    "@type": "updateNewProfilePhoto",
                                    peerId: t.chatId,
                                    photo: s
                                })
                            } else if (n instanceof ue.Api.MessageActionChatDeletePhoto) {
                                const n = He(e.message);
                                Ue.chats[n] && (Ue.chats[n].photo = new ue.Api.ChatPhotoEmpty), gi({
                                    "@type": "updateDeleteProfilePhoto",
                                    peerId: t.chatId
                                })
                            } else if (n instanceof ue.Api.MessageActionChatDeleteUser) e._entities && e._entities.some((e => e instanceof ue.Api.User && Boolean(e.self) && e.id === n.userId)) && gi({
                                "@type": "updateChat",
                                id: t.chatId,
                                chat: {
                                    isForbidden: !0,
                                    isNotJoined: !0
                                }
                            });
                            else if (n instanceof ue.Api.MessageActionChatAddUser) e._entities && e._entities.some((e => e instanceof ue.Api.User && Boolean(e.self) && n.users.includes(e.id))) && gi({
                                "@type": "updateChatJoin",
                                id: t.chatId
                            });
                            else if (n instanceof ue.Api.MessageActionGroupCall) !n.duration && n.call && gi({
                                "@type": "updateGroupCallChatId",
                                chatId: t.chatId,
                                call: {
                                    id: n.call.id.toString(),
                                    accessHash: n.call.accessHash.toString()
                                }
                            });
                            else if (n instanceof ue.Api.MessageActionTopicEdit) {
                                const t = e.message.replyTo instanceof ue.Api.MessageReplyHeader ? e.message.replyTo : void 0,
                                    {
                                        replyToMsgId: n,
                                        replyToTopId: s,
                                        forumTopic: i
                                    } = t || {},
                                    a = i && (s || n) || X;
                                gi({
                                    "@type": "updateTopic",
                                    chatId: he(e.message.peerId),
                                    topicId: a
                                })
                            } else n instanceof ue.Api.MessageActionTopicCreate && gi({
                                "@type": "updateTopics",
                                chatId: he(e.message.peerId)
                            })
                        }
                    } else if (e instanceof ue.Api.UpdateQuickReplyMessage) {
                        const t = Cs(e.message);
                        if (!t) return;
                        gi({
                            "@type": "updateQuickReplyMessage",
                            id: t.id,
                            message: t
                        })
                    } else if (e instanceof ue.Api.UpdateDeleteQuickReplyMessages) gi({
                        "@type": "deleteQuickReplyMessages",
                        quickReplyId: e.shortcutId,
                        messageIds: e.messages
                    });
                    else if (e instanceof ue.Api.UpdateQuickReplies) {
                        const t = e.quickReplies.map(xs);
                        gi({
                            "@type": "updateQuickReplies",
                            quickReplies: t
                        })
                    } else if (e instanceof ue.Api.UpdateNewQuickReply) {
                        const t = xs(e.quickReply);
                        gi({
                            "@type": "updateQuickReplies",
                            quickReplies: [t]
                        })
                    } else if (e instanceof ue.Api.UpdateDeleteQuickReply) gi({
                        "@type": "deleteQuickReply",
                        quickReplyId: e.shortcutId
                    });
                    else if (e instanceof ue.Api.UpdateEditMessage || e instanceof ue.Api.UpdateEditChannelMessage) {
                        if (e.message instanceof ue.Api.MessageEmpty) return void(d && console.error("Unexpected update:", e.className, e));
                        Fe(e.message);
                        const t = tt(Cs(e.message), ["isOutgoing"]);
                        wi([e.message]), gi({
                            "@type": "updateMessage",
                            id: t.id,
                            chatId: t.chatId,
                            message: t
                        })
                    } else if (e instanceof ue.Api.UpdateMessageReactions) gi({
                        "@type": "updateMessageReactions",
                        id: e.msgId,
                        chatId: he(e.peer),
                        reactions: nn(e.reactions)
                    });
                    else if (e instanceof ue.Api.UpdateMessageExtendedMedia) {
                        const t = he(e.peer),
                            n = e.extendedMedia[0] instanceof ue.Api.MessageExtendedMedia;
                        if (n) {
                            const s = Ot(e.extendedMedia);
                            if (!s?.length) return;
                            return void gi({
                                "@type": "updateMessageExtendedMedia",
                                id: e.msgId,
                                chatId: t,
                                isBought: n,
                                extendedMedia: s
                            })
                        }
                        const s = n ? void 0 : e.extendedMedia.filter((e => e instanceof ue.Api.MessageExtendedMediaPreview)).map((e => _t(e))).filter(Boolean);
                        if (!s?.length) return;
                        gi({
                            "@type": "updateMessageExtendedMedia",
                            id: e.msgId,
                            chatId: t,
                            extendedMedia: s
                        })
                    } else if (e instanceof ue.Api.UpdateDeleteMessages) gi({
                        "@type": "deleteMessages",
                        ids: e.messages
                    });
                    else if (e instanceof ue.Api.UpdateDeleteScheduledMessages) gi({
                        "@type": "deleteScheduledMessages",
                        ids: e.messages,
                        chatId: he(e.peer)
                    });
                    else if (e instanceof ue.Api.UpdateDeleteChannelMessages) {
                        const t = fe(e.channelId, "channel");
                        gi({
                            "@type": "deleteMessages",
                            ids: e.messages,
                            chatId: t
                        })
                    } else if (e instanceof ue.Api.UpdateServiceNotification)
                        if (e.popup) gi({
                            "@type": "error",
                            error: {
                                message: e.message
                            }
                        });
                        else {
                            const t = function(e, t) {
                                const n = Ss(t),
                                    s = Bt(e);
                                return {
                                    id: n,
                                    chatId: W,
                                    date: e.inboxDate || t,
                                    content: s,
                                    isOutgoing: !1
                                }
                            }(e, Date.now() / 1e3 + ot());
                            Fe($n(t.id, t.chatId, e)), gi({
                                "@type": "updateServiceNotification",
                                message: t
                            })
                        }
                    else if (e instanceof ue.Api.UpdateMessageID || e instanceof ue.Api.UpdateShortSentMessage) Ai.add(e.id);
                    else if (e instanceof ue.Api.UpdateReadMessagesContents) gi({
                        "@type": "updateCommonBoxMessages",
                        ids: e.messages,
                        messageUpdate: {
                            hasUnreadMention: !1,
                            isMediaUnread: !1
                        }
                    });
                    else if (e instanceof ue.Api.UpdateChannelReadMessagesContents) gi({
                        "@type": "updateChannelMessages",
                        channelId: fe(e.channelId, "channel"),
                        ids: e.messages,
                        messageUpdate: {
                            hasUnreadMention: !1,
                            isMediaUnread: !1
                        }
                    });
                    else if (e instanceof ue.Api.UpdateMessagePoll) {
                        const {
                            pollId: t,
                            poll: n,
                            results: s
                        } = e;
                        if (n) {
                            const e = Nt(n, s);
                            gi({
                                "@type": "updateMessagePoll",
                                pollId: String(t),
                                pollUpdate: e
                            })
                        } else {
                            const e = Ht(s);
                            gi({
                                "@type": "updateMessagePoll",
                                pollId: String(t),
                                pollUpdate: {
                                    results: e
                                }
                            })
                        }
                    } else if (e instanceof ue.Api.UpdateMessagePollVote) gi({
                        "@type": "updateMessagePollVote",
                        pollId: String(e.pollId),
                        peerId: he(e.peer),
                        options: e.options.map(Ke)
                    });
                    else if (e instanceof ue.Api.UpdateChannelMessageViews) gi({
                        "@type": "updateMessage",
                        chatId: fe(e.channelId, "channel"),
                        id: e.id,
                        message: {
                            viewsCount: e.views
                        }
                    });
                    else if (e instanceof ue.Api.UpdateReadHistoryInbox) gi({
                        "@type": "updateChatInbox",
                        id: he(e.peer),
                        chat: {
                            lastReadInboxMessageId: e.maxId,
                            unreadCount: e.stillUnreadCount
                        }
                    });
                    else if (e instanceof ue.Api.UpdateReadHistoryOutbox) gi({
                        "@type": "updateChat",
                        id: he(e.peer),
                        chat: {
                            lastReadOutboxMessageId: e.maxId
                        }
                    });
                    else if (e instanceof ue.Api.UpdateReadChannelInbox) gi({
                        "@type": "updateChat",
                        id: fe(e.channelId, "channel"),
                        chat: {
                            lastReadInboxMessageId: e.maxId,
                            unreadCount: e.stillUnreadCount
                        }
                    });
                    else if (e instanceof ue.Api.UpdateReadChannelOutbox) gi({
                        "@type": "updateChat",
                        id: fe(e.channelId, "channel"),
                        chat: {
                            lastReadOutboxMessageId: e.maxId
                        }
                    });
                    else if (e instanceof ue.Api.UpdateReadChannelDiscussionInbox) gi({
                        "@type": "updateThreadInfos",
                        threadInfoUpdates: [{
                            chatId: fe(e.channelId, "channel"),
                            threadId: e.topMsgId,
                            lastReadInboxMessageId: e.readMaxId
                        }]
                    });
                    else if (e instanceof ue.Api.UpdateReadChannelDiscussionOutbox) gi({
                        "@type": "updateChat",
                        id: fe(e.channelId, "channel"),
                        chat: {
                            lastReadOutboxMessageId: e.readMaxId
                        }
                    });
                    else if (e instanceof ue.Api.UpdateDialogPinned && e.peer instanceof ue.Api.DialogPeer) gi({
                        "@type": "updateChatPinned",
                        id: he(e.peer.peer),
                        isPinned: e.pinned || !1
                    });
                    else if (e instanceof ue.Api.UpdatePinnedDialogs) {
                        const t = e.order ? e.order.filter((e => e instanceof ue.Api.DialogPeer)).map((e => he(e.peer))) : [];
                        gi({
                            "@type": "updatePinnedChatIds",
                            ids: t,
                            folderId: e.folderId || void 0
                        })
                    } else if (e instanceof ue.Api.UpdateSavedDialogPinned && e.peer instanceof ue.Api.DialogPeer) gi({
                        "@type": "updateSavedDialogPinned",
                        id: he(e.peer.peer),
                        isPinned: e.pinned || !1
                    });
                    else if (e instanceof ue.Api.UpdatePinnedSavedDialogs) {
                        const t = e.order ? e.order.filter((e => e instanceof ue.Api.DialogPeer)).map((e => he(e.peer))) : [];
                        gi({
                            "@type": "updatePinnedSavedDialogIds",
                            ids: t
                        })
                    } else if (e instanceof ue.Api.UpdateFolderPeers) e.folderPeers.forEach((e => {
                        const {
                            folderId: t,
                            peer: n
                        } = e;
                        gi({
                            "@type": "updateChatListType",
                            id: he(n),
                            folderId: t
                        })
                    }));
                    else if (e instanceof ue.Api.UpdateDialogFilter) {
                        const {
                            id: t,
                            filter: n
                        } = e, s = Ge(n) ? Cn(n) : void 0;
                        gi({
                            "@type": "updateChatFolder",
                            id: t,
                            folder: s
                        })
                    } else if (e instanceof ue.Api.UpdateDialogFilterOrder) gi({
                        "@type": "updateChatFoldersOrder",
                        orderedIds: e.order
                    });
                    else if (e instanceof ue.Api.UpdateChatParticipants) {
                        const t = Sn(e.participants);
                        gi({
                            "@type": "updateChatMembers",
                            id: fe(e.participants.chatId, "chat"),
                            replacedMembers: t
                        })
                    } else if (e instanceof ue.Api.UpdateChatParticipantAdd) {
                        const t = bn(Xe(e, ["userId", "inviterId", "date"]));
                        gi({
                            "@type": "updateChatMembers",
                            id: fe(e.chatId, "chat"),
                            addedMember: t
                        })
                    } else if (e instanceof ue.Api.UpdateChatParticipantDelete) gi({
                        "@type": "updateChatMembers",
                        id: fe(e.chatId, "chat"),
                        deletedMemberId: fe(e.userId, "user")
                    });
                    else if (e instanceof ue.Api.UpdatePinnedMessages || e instanceof ue.Api.UpdatePinnedChannelMessages) {
                        const t = e instanceof ue.Api.UpdatePinnedMessages ? he(e.peer) : fe(e.channelId, "channel");
                        gi({
                            "@type": "updatePinnedIds",
                            chatId: t,
                            messageIds: e.messages,
                            isPinned: e.pinned
                        })
                    } else if (e instanceof ue.Api.UpdateNotifySettings && e.peer instanceof ue.Api.NotifyPeer) {
                        const t = Ws(e.notifySettings, e.peer.peer);
                        pi(t.chatId, t.muteUntil, gi), gi({
                            "@type": "updateNotifyExceptions",
                            ...t
                        })
                    } else if (e instanceof ue.Api.UpdateNotifySettings && e.peer instanceof ue.Api.NotifyForumTopic) {
                        const t = function(e, t, n) {
                            const {
                                silent: s,
                                muteUntil: i,
                                showPreviews: a,
                                otherSound: o
                            } = e, r = Boolean(o && !(o instanceof ue.Api.NotificationSoundNone));
                            return {
                                chatId: he(t),
                                topicId: n,
                                isMuted: s || "number" == typeof i && rt() < i,
                                ...!r && {
                                    isSilent: !0
                                },
                                ...void 0 !== a && {
                                    shouldShowPreviews: Boolean(a)
                                },
                                muteUntil: i
                            }
                        }(e.notifySettings, e.peer.peer, e.peer.topMsgId);
                        ! function(e, t) {
                            let n = arguments.length > 3 ? arguments[3] : void 0;
                            li({
                                chatId: e,
                                topicId: t,
                                muteUntil: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                            }, (() => n({
                                "@type": "updateTopicNotifyExceptions",
                                chatId: e,
                                topicId: t,
                                isMuted: !1
                            })))
                        }(t.chatId, t.topicId, t.muteUntil, gi), gi({
                            "@type": "updateTopicNotifyExceptions",
                            ...t
                        })
                    } else if (e instanceof ue.Api.UpdateUserTyping || e instanceof ue.Api.UpdateChatUserTyping) {
                        const t = e instanceof ue.Api.UpdateUserTyping ? fe(e.userId, "user") : fe(e.chatId, "chat");
                        e.action instanceof ue.Api.SendMessageEmojiInteraction ? gi({
                            "@type": "updateStartEmojiInteraction",
                            id: t,
                            emoji: e.action.emoticon,
                            messageId: e.action.msgId,
                            interaction: (n = JSON.parse(e.action.interaction.data), {
                                timestamps: n.a.map((e => {
                                    let {
                                        t
                                    } = e;
                                    return t
                                }))
                            })
                        }) : gi({
                            "@type": "updateChatTypingStatus",
                            id: t,
                            typingStatus: vn(e)
                        })
                    } else if (e instanceof ue.Api.UpdateChannelUserTyping) {
                        const t = fe(e.channelId, "channel");
                        gi({
                            "@type": "updateChatTypingStatus",
                            id: t,
                            threadId: e.topMsgId,
                            typingStatus: vn(e)
                        })
                    } else if (e instanceof ue.Api.UpdateChannel) {
                        const {
                            _entities: t
                        } = e;
                        if (!t) return;
                        const n = t.find((e => e instanceof ue.Api.Channel || e instanceof ue.Api.ChannelForbidden));
                        if (n instanceof ue.Api.Channel) {
                            const t = gn(n);
                            t && (gi({
                                "@type": "updateChat",
                                id: t.id,
                                chat: t
                            }), gi({
                                "@type": t.isNotJoined ? "updateChatLeave" : "updateChatJoin",
                                id: fe(e.channelId, "channel")
                            }))
                        } else if (n instanceof ue.Api.ChannelForbidden) {
                            const t = fe(e.channelId, "channel");
                            gi({
                                "@type": "updateChat",
                                id: t,
                                chat: {
                                    isRestricted: !0
                                }
                            }), gi({
                                "@type": "updateChatLeave",
                                id: t
                            })
                        } else 0 === t.length && gi({
                            "@type": "resetMessages",
                            id: fe(e.channelId, "channel")
                        })
                    } else if (e instanceof ue.Api.UpdateDialogUnreadMark && e.peer instanceof ue.Api.DialogPeer) gi({
                        "@type": "updateChat",
                        id: he(e.peer.peer),
                        chat: {
                            hasUnreadMark: e.unread
                        }
                    });
                    else if (e instanceof ue.Api.UpdateChatDefaultBannedRights) gi({
                        "@type": "updateChat",
                        id: he(e.peer),
                        chat: {
                            defaultBannedRights: be(e.defaultBannedRights)
                        }
                    });
                    else if (e instanceof ue.Api.UpdateUserStatus) gi({
                        "@type": "updateUserStatus",
                        userId: fe(e.userId, "user"),
                        status: qs(e.status)
                    });
                    else if (e instanceof ue.Api.UpdateUser) gi({
                        "@type": "updateRequestUserUpdate",
                        id: fe(e.userId, "user")
                    });
                    else if (e instanceof ue.Api.UpdateUserEmojiStatus) {
                        const t = ge(e.emojiStatus);
                        gi({
                            "@type": "updateUserEmojiStatus",
                            userId: fe(e.userId, "user"),
                            emojiStatus: t
                        })
                    } else if (e instanceof ue.Api.UpdateUserName) {
                        const t = fe(e.userId, "user"),
                            n = Ue.users[t],
                            s = n?.mutualContact && !n.self ? Xe(e, []) : Xe(e, ["firstName", "lastName"]),
                            i = yt(e);
                        gi({
                            "@type": "updateUser",
                            id: t,
                            user: {
                                ...s,
                                usernames: i
                            }
                        })
                    } else if (e instanceof ue.Api.UpdateUserPhone) {
                        const {
                            userId: t,
                            phone: n
                        } = e;
                        gi({
                            "@type": "updateUser",
                            id: fe(t, "user"),
                            user: {
                                phoneNumber: n
                            }
                        })
                    } else if (e instanceof ue.Api.UpdatePeerSettings) {
                        const {
                            _entities: t,
                            settings: n
                        } = e;
                        if (!t) return;
                        t?.length && (t.filter((e => e instanceof ue.Api.User && !e.contact)).forEach((e => {
                            gi({
                                "@type": "deleteContact",
                                id: fe(e.id, "user")
                            })
                        })), t.filter((e => e instanceof ue.Api.User && e.contact)).map(_s).forEach((e => {
                            e && gi({
                                "@type": "updateUser",
                                id: e.id,
                                user: {
                                    ...e,
                                    ...n && {
                                        settings: Bn(n)
                                    }
                                }
                            })
                        })))
                    } else if (e instanceof ue.Api.UpdateNotifySettings) {
                        const {
                            notifySettings: {
                                showPreviews: t,
                                silent: n,
                                muteUntil: s
                            },
                            peer: {
                                className: i
                            }
                        } = e, a = "NotifyUsers" === i ? "contact" : "NotifyChats" === i ? "group" : "NotifyBroadcasts" === i ? "broadcast" : void 0;
                        if (!a) return;
                        gi({
                            "@type": "updateNotifySettings",
                            peerType: a,
                            isSilent: Boolean(n || "number" == typeof s && Date.now() + 1e3 * ot() < 1e3 * s),
                            shouldShowPreviews: Boolean(t)
                        })
                    } else if (e instanceof ue.Api.UpdatePeerBlocked) gi({
                        "@type": "updatePeerBlocked",
                        id: he(e.peerId),
                        isBlocked: e.blocked,
                        isBlockedFromStories: e.blockedMyStoriesFrom
                    });
                    else if (e instanceof ue.Api.UpdatePrivacy) {
                        const t = function(e) {
                            switch (e.className) {
                                case "PrivacyKeyPhoneNumber":
                                    return "phoneNumber";
                                case "PrivacyKeyAddedByPhone":
                                    return "addByPhone";
                                case "PrivacyKeyStatusTimestamp":
                                    return "lastSeen";
                                case "PrivacyKeyProfilePhoto":
                                    return "profilePhoto";
                                case "PrivacyKeyPhoneCall":
                                    return "phoneCall";
                                case "PrivacyKeyPhoneP2P":
                                    return "phoneP2P";
                                case "PrivacyKeyForwards":
                                    return "forwards";
                                case "PrivacyKeyVoiceMessages":
                                    return "voiceMessages";
                                case "PrivacyKeyChatInvite":
                                    return "chatInvite";
                                case "PrivacyKeyAbout":
                                    return "bio";
                                case "PrivacyKeyBirthday":
                                    return "birthday"
                            }
                        }(e.key);
                        t && gi({
                            "@type": "updatePrivacy",
                            key: t,
                            rules: wt(e.rules)
                        })
                    } else if (e instanceof ue.Api.UpdateDraftMessage) gi({
                        "@type": "draftMessage",
                        chatId: he(e.peer),
                        threadId: e.topMsgId,
                        draft: Ms(e.draft)
                    });
                    else if (e instanceof ue.Api.UpdateContactsReset) gi({
                        "@type": "updateResetContactList"
                    });
                    else if (e instanceof ue.Api.UpdateFavedStickers) gi({
                        "@type": "updateFavoriteStickers"
                    });
                    else if (e instanceof ue.Api.UpdateRecentStickers) gi({
                        "@type": "updateRecentStickers"
                    });
                    else if (e instanceof ue.Api.UpdateRecentReactions) gi({
                        "@type": "updateRecentReactions"
                    });
                    else if (e instanceof ue.Api.UpdateSavedReactionTags) gi({
                        "@type": "updateSavedReactionTags"
                    });
                    else if (e instanceof ue.Api.UpdateMoveStickerSetToTop) e.masks || gi({
                        "@type": "updateMoveStickerSetToTop",
                        isCustomEmoji: e.emojis,
                        id: e.stickerset.toString()
                    });
                    else if (e instanceof ue.Api.UpdateStickerSets) gi({
                        "@type": "updateStickerSets"
                    });
                    else if (e instanceof ue.Api.UpdateStickerSetsOrder) e.masks || gi({
                        "@type": "updateStickerSetsOrder",
                        order: e.order.map((e => e.toString())),
                        isCustomEmoji: e.emojis
                    });
                    else if (e instanceof ue.Api.UpdateNewStickerSet) {
                        if (e.stickerset instanceof ue.Api.messages.StickerSet) {
                            const t = Ct(e.stickerset.set);
                            gi({
                                "@type": "updateStickerSet",
                                id: t.id,
                                stickerSet: t
                            })
                        }
                    } else if (e instanceof ue.Api.UpdateSavedGifs) gi({
                        "@type": "updateSavedGifs"
                    });
                    else if (e instanceof ue.Api.UpdateGroupCall) {
                        const t = e._entities;
                        t && (We(t), yi(t)), gi({
                            "@type": "updateGroupCall",
                            call: Qt(e.call)
                        })
                    } else if (e instanceof ue.Api.UpdateGroupCallConnection) gi({
                        "@type": "updateGroupCallConnection",
                        data: JSON.parse(e.params.data),
                        presentation: Boolean(e.presentation)
                    });
                    else if (e instanceof ue.Api.UpdateGroupCallParticipants) {
                        const n = e._entities;
                        n && (We(n), yi(n)), gi({
                            "@type": "updateGroupCallParticipants",
                            groupCallId: (t = e.call, t.id.toString()),
                            participants: e.participants.map(Jt)
                        })
                    } else if (e instanceof ue.Api.UpdatePendingJoinRequests) {
                        const t = e._entities;
                        t && (We(t), yi(t)), gi({
                            "@type": "updatePendingJoinRequests",
                            chatId: he(e.peer),
                            recentRequesterIds: e.recentRequesters.map((e => fe(e, "user"))),
                            requestsPending: e.requestsPending
                        })
                    } else if (e instanceof ue.Api.UpdatePhoneCall) {
                        const t = e._entities;
                        t && (We(t), yi(t)), gi({
                            "@type": "updatePhoneCall",
                            call: Zt(e.phoneCall)
                        })
                    } else if (e instanceof ue.Api.UpdatePhoneCallSignalingData) gi({
                        "@type": "updatePhoneCallSignalingData",
                        callId: e.phoneCallId.toString(),
                        data: Array.from(e.data)
                    });
                    else if (e instanceof ue.Api.UpdateWebViewResultSent) {
                        const {
                            queryId: t
                        } = e;
                        gi({
                            "@type": "updateWebViewResultSent",
                            queryId: t.toString()
                        })
                    } else if (e instanceof ue.Api.UpdateBotMenuButton) {
                        const {
                            botId: t,
                            button: n
                        } = e, s = fe(t, "user");
                        gi({
                            "@type": "updateBotMenuButton",
                            botId: s,
                            button: Wt(n)
                        })
                    } else if (e instanceof ue.Api.UpdateTranscribedAudio) {
                        const t = e._entities;
                        t && (We(t), yi(t)), gi({
                            "@type": "updateTranscribedAudio",
                            transcriptionId: e.transcriptionId.toString(),
                            text: e.text,
                            isPending: e.pending
                        })
                    } else if (e instanceof ue.Api.UpdateConfig) {
                        const t = e._entities;
                        t && (We(t), yi(t)), gi({
                            "@type": "updateConfig"
                        })
                    } else if (e instanceof ue.Api.UpdateChannelPinnedTopic) gi({
                        "@type": "updatePinnedTopic",
                        chatId: fe(e.channelId, "channel"),
                        topicId: e.topicId,
                        isPinned: Boolean(e.pinned)
                    });
                    else if (e instanceof ue.Api.UpdateChannelPinnedTopics) gi({
                        "@type": "updatePinnedTopicsOrder",
                        chatId: fe(e.channelId, "channel"),
                        order: e.order || []
                    });
                    else if (e instanceof ue.Api.UpdateRecentEmojiStatuses) gi({
                        "@type": "updateRecentEmojiStatuses"
                    });
                    else if (e instanceof ue.Api.UpdateStory) {
                        const t = e._entities;
                        t && (We(t), yi(t));
                        const {
                            story: n
                        } = e, s = he(e.peer), i = ni(s, n);
                        qe(n, s), n instanceof ue.Api.StoryItemDeleted ? gi({
                            "@type": "deleteStory",
                            peerId: s,
                            storyId: n.id
                        }) : gi({
                            "@type": "updateStory",
                            peerId: s,
                            story: i
                        })
                    } else e instanceof ue.Api.UpdateReadStories ? gi({
                        "@type": "updateReadStories",
                        peerId: he(e.peer),
                        lastReadId: e.maxId
                    }) : e instanceof ue.Api.UpdateSentStoryReaction ? gi({
                        "@type": "updateSentStoryReaction",
                        peerId: he(e.peer),
                        storyId: e.storyId,
                        reaction: rn(e.reaction)
                    }) : e instanceof ue.Api.UpdateStoriesStealthMode ? gi({
                        "@type": "updateStealthMode",
                        stealthMode: ai(e.stealthMode)
                    }) : e instanceof ue.Api.UpdateAttachMenuBots ? gi({
                        "@type": "updateAttachMenuBots"
                    }) : e instanceof ue.Api.UpdateNewAuthorization ? gi({
                        "@type": "updateNewAuthorization",
                        hash: e.hash.toString(),
                        date: e.date,
                        device: e.device,
                        location: e.location,
                        isUnconfirmed: e.unconfirmed
                    }) : e instanceof ue.Api.UpdateChannelViewForumAsMessages ? gi({
                        "@type": "updateViewForumAsMessages",
                        chatId: fe(e.channelId, "channel"),
                        isEnabled: !!e.enabled || void 0
                    }) : e instanceof ue.Api.UpdateStarsBalance ? gi({
                        "@type": "updateStarsBalance",
                        balance: e.balance.toJSNumber()
                    }) : e instanceof fi.A ? gi({
                        "@type": "updatePremiumFloodWait",
                        isUpload: e.isUpload
                    }) : e instanceof hi || e instanceof mi || d && Qe("UNEXPECTED UPDATE", "object" == typeof e && "className" in e ? e.className : e);
                    var t, n, s, i
                }
                const Si = {
                        PHONE_NUMBER_INVALID: "Invalid phone number.",
                        PHONE_CODE_INVALID: "Invalid code.",
                        PASSWORD_HASH_INVALID: "Incorrect password.",
                        PHONE_PASSWORD_FLOOD: "Limit exceeded. Please try again later.",
                        PHONE_NUMBER_BANNED: "This phone number is banned."
                    },
                    vi = {};
                let Ci;

                function Pi() {
                    Ci({
                        "@type": "updateWebAuthTokenFailed"
                    })
                }

                function Mi() {
                    return Ci(Di("authorizationStateWaitPhoneNumber")), new Promise(((e, t) => {
                        vi.resolve = e, vi.reject = t
                    }))
                }

                function Ti() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return Ci({
                        ...Di("authorizationStateWaitCode"),
                        isCodeViaApp: e
                    }), new Promise(((e, t) => {
                        vi.resolve = e, vi.reject = t
                    }))
                }

                function Bi(e, t) {
                    return Ci({
                        ...Di("authorizationStateWaitPassword"),
                        hint: e,
                        noReset: t
                    }), new Promise((e => {
                        vi.resolve = e
                    }))
                }

                function Ri() {
                    return Ci(Di("authorizationStateWaitRegistration")), new Promise((e => {
                        vi.resolve = e
                    }))
                }

                function Ui(e) {
                    return Ci({
                        ...Di("authorizationStateWaitQrCode"),
                        qrCode: {
                            token: btoa(String.fromCharCode(...e.token)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
                            expires: e.expires
                        }
                    }), new Promise(((e, t) => {
                        vi.reject = t
                    }))
                }

                function ki(e) {
                    let t;
                    if (e instanceof ue.errors.FloodWaitError) {
                        const n = Math.ceil(Number(e.seconds) / 60 / 60);
                        t = "Too many attempts. Try again in " + (n > 1 ? `${n} hours` : "an hour")
                    } else t = Si[e.message];
                    t || (t = "Unexpected Error", d && console.error(e)), Ci({
                        "@type": "updateAuthorizationError",
                        message: t
                    })
                }

                function Di(e) {
                    return {
                        "@type": "updateAuthorizationState",
                        authorizationState: e
                    }
                }

                function Ei(e) {
                    vi.resolve && vi.resolve(e)
                }

                function xi(e) {
                    vi.resolve && vi.resolve(e)
                }

                function Ni(e) {
                    vi.resolve && vi.resolve(e)
                }

                function Hi(e) {
                    const {
                        firstName: t,
                        lastName: n
                    } = e;
                    vi.resolve && vi.resolve([t, n])
                }

                function Gi() {
                    vi.reject && vi.reject(new Error("RESTART_AUTH"))
                }

                function Fi() {
                    vi.reject && vi.reject(new Error("RESTART_AUTH_WITH_QR"))
                }
                var _i = n(26462),
                    qi = n.n(_i),
                    Oi = n(4681),
                    ji = n(51227);
                class Li {
                    constructor(e) {
                        var t, n, s, i;
                        this.comparator = e, t = this, s = void 0, (n = "symbol" == typeof(i = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var s = n.call(e, "string");
                                if ("object" != typeof s) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(n = "queue")) ? i : i + "") in t ? Object.defineProperty(t, n, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = s, this.queue = []
                    }
                    add(e) {
                        const t = this.binarySearch(e);
                        this.queue.splice(t, 0, e)
                    }
                    pop() {
                        return this.queue.shift()
                    }
                    get size() {
                        return this.queue.length
                    }
                    clear() {
                        this.queue = []
                    }
                    binarySearch(e) {
                        let t = 0,
                            n = this.queue.length;
                        for (; t < n;) {
                            const s = Math.floor((t + n) / 2),
                                i = this.comparator(e, this.queue[s]);
                            if (0 === i) return s;
                            i > 0 ? t = s + 1 : n = s
                        }
                        return t
                    }
                }
                const Vi = "0",
                    zi = 1e3,
                    Wi = 500;
                let Ji, Ki, $i = !1;
                const Qi = new Map,
                    Zi = new Li((function(e, t) {
                        return ("seqStart" in e ? e.seqStart : e.seq) - ("seqStart" in t ? t.seqStart : t.seq)
                    })),
                    Yi = new Map;

                function Xi(e) {
                    Ue.commonBoxState.seq = e.seq, Ue.commonBoxState.date = e.date, Ue.commonBoxState.pts = e.pts, Ue.commonBoxState.qts = e.qts
                }

                function ea(e, t, n) {
                    if (e instanceof ji.UpdateConnectionState) return e.state === ji.UpdateConnectionState.connected && $i && oa(), void bi(e);
                    if (e instanceof ji.UpdateServerTimeOffset) bi(e);
                    else if (void 0 !== Ue.commonBoxState.seq) return e instanceof ue.Api.Updates || e instanceof ue.Api.UpdatesCombined ? (t && (e._isFromDifference = !0), void
                        function(e, t) {
                            Zi.add(e), t || sa()
                        }(e, n)) : "pts" in e ? e instanceof ue.Api.UpdateChannelTooLong ? void ca(ra(e)) : (t && (e._isFromDifference = !0), void
                        function(e, t) {
                            const n = ra(e),
                                s = Yi.get(n) || new Li(ga);
                            s.add(e), Yi.set(n, s), t || ia(n)
                        }(e, n)) : void bi(e)
                }

                function ta(e, t) {
                    if (!(Ue.chats[e] instanceof ue.Api.Channel)) return void(d && console.error(`[UpdateManager] Channel ${e} not found in localDb`));
                    const n = Ue.channelPtsById[e];
                    n && n < t ? aa(e) : Ue.channelPtsById[e] = t
                }

                function na(e) {
                    if ("seq" in e && e.seq && (Ue.commonBoxState.seq = e.seq, Ue.commonBoxState.date = e.date), "qts" in e && (Ue.commonBoxState.qts = e.qts), "pts" in e) {
                        const t = ra(e);
                        t !== Vi ? Ue.channelPtsById[t] = e.pts : Ue.commonBoxState.pts = e.pts
                    }
                    if (e instanceof ue.Api.UpdatesCombined || e instanceof ue.Api.Updates) {
                        const t = e.users.concat(e.chats);
                        e.updates.forEach((e => {
                            t && (e._entities = t), ea(e)
                        }))
                    } else bi(e)
                }

                function sa() {
                    if (!Zi.size) return;
                    const e = Zi.pop(),
                        t = Ue.commonBoxState.seq,
                        n = "seqStart" in e ? e.seqStart : e.seq;
                    if (0 === n || e._isFromDifference && n >= t + 1) na(e);
                    else if (n === t + 1) clearTimeout(Ki), Ki = void 0, na(e);
                    else if (n > t + 1) return Zi.add(e), void oa();
                    sa()
                }

                function ia(e) {
                    const t = Yi.get(e);
                    if (!t?.size) return;
                    const n = t.pop(),
                        s = e === Vi ? Ue.commonBoxState.pts : Ue.channelPtsById[e],
                        i = n.pts,
                        a = ma(n);
                    if (void 0 !== s) {
                        if (n._isFromDifference && i >= s + a) na(n);
                        else if (i === s + a) clearTimeout(Qi.get(e)), Qi.delete(e), na(n);
                        else if (i > s + a) return t.add(n), void(e === Vi ? oa() : aa(e));
                        ia(e)
                    }
                }

                function aa(e) {
                    if (Qi.has(e)) return;
                    const t = setTimeout((async () => {
                        await ca(e), Qi.delete(e)
                    }), Wi);
                    Qi.set(e, t)
                }

                function oa() {
                    Ki || (Ki = setTimeout((async () => {
                        await da(), Ki = void 0
                    }), Wi))
                }

                function ra(e) {
                    return "channelId" in e && "pts" in e ? fe(e.channelId, "channel") : e instanceof ue.Api.UpdateNewChannelMessage || e instanceof ue.Api.UpdateEditChannelMessage ? fe(e.message.peerId.channelId, "channel") : Vi
                }
                async function da() {
                    if (!$i) throw new Error("UpdatesManager not initialized");
                    if (!Ue.commonBoxState?.date) return void ua();
                    Ii({
                        "@type": "updateFetchingDifference",
                        isFetching: !0
                    });
                    const e = await Ji(new ue.Api.updates.GetDifference({
                        pts: Ue.commonBoxState.pts,
                        date: Ue.commonBoxState.date,
                        qts: Ue.commonBoxState.qts
                    }));
                    if (!e || e instanceof ue.Api.updates.DifferenceTooLong) ua();
                    else {
                        if (e instanceof ue.Api.updates.DifferenceEmpty) return Ue.commonBoxState.seq = e.seq, Ue.commonBoxState.date = e.date, void Ii({
                            "@type": "updateFetchingDifference",
                            isFetching: !1
                        });
                        ha(e), Xi(e instanceof ue.Api.updates.DifferenceSlice ? e.intermediateState : e.state), e instanceof ue.Api.updates.DifferenceSlice ? da() : Ii({
                            "@type": "updateFetchingDifference",
                            isFetching: !1
                        })
                    }
                }
                async function ca(e) {
                    const t = Ue.chats[e];
                    if (!(t && t instanceof ue.Api.Channel && t.accessHash && Ue.channelPtsById[e])) return void(d && console.error("[UpdateManager] Channel for difference not found", e, t));
                    const n = await Ji(new ue.Api.updates.GetChannelDifference({
                        channel: jn(e, t.accessHash.toString()),
                        pts: Ue.channelPtsById[e],
                        filter: new ue.Api.ChannelMessagesFilterEmpty,
                        limit: zi
                    }));
                    n ? n instanceof ue.Api.updates.ChannelDifferenceTooLong ? ua() : (Ue.channelPtsById[e] = n.pts, n instanceof ue.Api.updates.ChannelDifferenceEmpty ? ia(e) : (ha(n, e), n.final || ca(e))) : d && console.warn("[UpdatesManager] Failed to get ChannelDifference", e, t)
                }

                function ua() {
                    la(), Ii({
                        "@type": "requestSync"
                    }), fa()
                }

                function la() {
                    Yi.clear(), Zi.clear(), clearTimeout(Ki), Ki = void 0, Qi.forEach((e => {
                        clearTimeout(e)
                    })), Qi.clear(), Ue.commonBoxState = {}, Object.keys(Ue.channelPtsById).forEach((e => {
                        Ue.channelPtsById[e] = 0
                    })), $i = !1
                }

                function pa(e, t) {
                    const n = "chatTypeChannel" === e.type || "chatTypeSuperGroup" === e.type ? as(e.id, "channel") : void 0;
                    var s, i, a;
                    ea((s = t.pts, i = t.ptsCount, (a = n) ? new mi(a, s, i) : new hi(s, i)))
                }
                async function fa() {
                    const e = await Ji(new ue.Api.updates.GetState);
                    e && (Xi(e), $i = !0)
                }

                function ha(e, t) {
                    e.newMessages.forEach((e => {
                        bi(new ue.Api.UpdateNewMessage({
                            message: e,
                            pts: 0,
                            ptsCount: 0
                        }))
                    })), We(e.users), We(e.chats), yi(e.users), yi(e.chats);
                    const n = new Set;
                    e.otherUpdates.forEach((e => {
                        const t = ra(e);
                        e instanceof ue.Api.UpdateChannelTooLong && n.add(ra(e));
                        const s = !n.has(t);
                        ea(e, s, !s)
                    })), t ? ia(t) : sa()
                }

                function ma(e) {
                    return "ptsCount" in e ? e.ptsCount : 0
                }

                function ga(e, t) {
                    const n = e.pts - t.pts;
                    return 0 !== n ? n : ma(t) - ma(e)
                }
                const Aa = self.caches;
                let ya;
                async function wa() {
                    return !!Aa && (ya = ya ?? await Aa.has("test").then((() => !0)).catch((() => !1)), ya)
                }
                let Ia = function(e) {
                    return e[e.Text = 0] = "Text", e[e.Blob = 1] = "Blob", e[e.Json = 2] = "Json", e[e.ArrayBuffer = 3] = "ArrayBuffer", e
                }({});
                async function ba(e, t, n) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (Aa) try {
                        const i = r ? `${c}/${t.replace(/:/g,"_")}` : new Request(t.replace(/:/g, "_")),
                            a = await Aa.open(e),
                            o = await a.match(i);
                        if (!o) return;
                        const d = o.headers.get("Content-Type");
                        switch (n) {
                            case Ia.Text:
                                return await o.text();
                            case Ia.Blob: {
                                if (t.startsWith("avatar") && d && d.startsWith("text")) return;
                                const e = await o.blob(),
                                    n = !e.type || !s && e.type.includes("html");
                                let i = e.type || d;
                                return n && i ? (s || (i = i.replace(/html/gi, "")), new Blob([e], {
                                    type: i
                                })) : e
                            }
                            case Ia.Json:
                                return await o.json();
                            case Ia.ArrayBuffer:
                                return await o.arrayBuffer();
                            default:
                                return
                        }
                    } catch (e) {
                        return void console.warn(e)
                    }
                }
                async function Sa(e, t, n) {
                    if (!Aa) return !1;
                    try {
                        const s = "string" == typeof n || n instanceof Blob || n instanceof ArrayBuffer ? n : JSON.stringify(n),
                            i = r ? `${c}/${t.replace(/:/g,"_")}` : new Request(t.replace(/:/g, "_")),
                            a = new Response(s),
                            o = await Aa.open(e);
                        return await o.put(i, a), !0
                    } catch (e) {
                        return console.warn(e), !1
                    }
                }
                async function va(e, t) {
                    try {
                        if (!Aa) return;
                        const n = await Aa.open(e);
                        return await n.delete(t)
                    } catch (e) {
                        return void console.warn(e)
                    }
                }
                async function Ca(e) {
                    try {
                        if (!Aa) return;
                        return await Aa.delete(e)
                    } catch (e) {
                        return void console.warn(e)
                    }
                }
                const Pa = new Set(["sticker", "wallpaper", "photo", "webDocument", "document"]),
                    Ma = new Set(["s", "m", "x", "y", "w", "a", "b", "c", "d"]),
                    Ta = new Set(["u", "v"]);
                async function Ba(e, t, n) {
                    let {
                        url: i,
                        mediaFormat: a,
                        start: o,
                        end: r,
                        isHtmlAllowed: d
                    } = e;
                    const {
                        data: c,
                        mimeType: m,
                        fullSize: g
                    } = await async function(e, t, n, s, i, a) {
                        const o = Ua(e);
                        if (!o) return;
                        const {
                            entityType: r,
                            entityId: d,
                            sizeType: c,
                            params: u,
                            mediaMatchType: l
                        } = o;
                        if ("staticMap" === r) {
                            const e = d,
                                n = new URLSearchParams(u),
                                s = n.get("long"),
                                i = n.get("lat"),
                                a = n.get("w"),
                                o = n.get("h"),
                                r = n.get("zoom"),
                                c = n.get("scale"),
                                l = n.get("accuracy_radius");
                            return {
                                mimeType: "image/png",
                                data: await t.downloadStaticMap(e, s, i, a, o, r, c, l)
                            }
                        }
                        let p;
                        switch (r) {
                            case "channel":
                            case "chat":
                                p = Ue.chats[d];
                                break;
                            case "user":
                                p = Ue.users[d];
                                break;
                            case "sticker":
                            case "wallpaper":
                            case "document":
                                p = Ue.documents[d];
                                break;
                            case "photo":
                                p = Ue.photos[d];
                                break;
                            case "stickerSet":
                                p = Ue.stickerSets[d];
                                break;
                            case "webDocument":
                                p = Ue.webDocuments[d]
                        }
                        if (p) {
                            if (Pa.has(r)) {
                                const e = await t.downloadMedia(p, {
                                    sizeType: c,
                                    start: s,
                                    end: i,
                                    progressCallback: n,
                                    workers: h
                                });
                                let o, r;
                                return c && Ma.has(c) ? o = "image/jpeg" : c && Ta.has(c) ? o = "video/mp4" : p instanceof ue.Api.Photo ? o = "image/jpeg" : p instanceof ue.Api.WebDocument ? (o = p.mimeType, r = p.size) : p instanceof ue.Api.Document && (o = p.mimeType, r = p.size.toJSNumber()), !a && o && (o = o.replace(/html/gi, "")), {
                                    mimeType: o,
                                    data: e,
                                    fullSize: r
                                }
                            }
                            if ("stickerSet" === r) {
                                const e = await t.downloadStickerSetThumb(p);
                                return {
                                    mimeType: Ra(e),
                                    data: e
                                }
                            } {
                                const e = await t.downloadProfilePhoto(p, "profile" === l);
                                return {
                                    mimeType: Ra(e),
                                    data: e
                                }
                            }
                        }
                    }(i, t, n, o, r, d) || {};
                    if (!c) return;
                    const A = await async function(e, t, n) {
                        switch (t) {
                            case ct.qZ.BlobUrl:
                                return new Blob([e], {
                                    type: n
                                });
                            case ct.qZ.Text:
                                return e.toString();
                            case ct.qZ.Progressive:
                            case ct.qZ.DownloadUrl:
                                return e.buffer
                        }
                    }(c, a, m);
                    if (!A) return;
                    const y = a !== ct.qZ.Progressive && (a !== ct.qZ.BlobUrl || A.size <= f);
                    return !u && s && y && Sa(i.startsWith("avatar") ? p : l, i, A), {
                        dataBlob: a === ct.qZ.Progressive ? "" : A,
                        arrayBuffer: a === ct.qZ.Progressive ? A : void 0,
                        mimeType: m,
                        fullSize: g
                    }
                }

                function Ra(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image/jpeg";
                    if (e.length < 4) return t;
                    let n = t;
                    switch (e.subarray(0, 4).reduce(((e, t) => e + t.toString(16)), "")) {
                        case "89504e47":
                            n = "image/png";
                            break;
                        case "47494638":
                            n = "image/gif";
                            break;
                        case "ffd8ffe0":
                        case "ffd8ffe1":
                        case "ffd8ffe2":
                        case "ffd8ffe3":
                        case "ffd8ffe8":
                            n = "image/jpeg";
                            break;
                        case "52494646":
                            n = "image/webp"
                    }
                    return n
                }

                function Ua(e) {
                    const t = e.startsWith("staticMap") ? e.match(/(staticMap):([0-9-]+)(\?.+)/) : e.startsWith("webDocument") ? e.match(/(webDocument):(.+)/) : e.match(/(avatar|profile|photo|stickerSet|sticker|wallpaper|document)([-\d\w./]+)(?::\d+)?(\?size=\w+)?/);
                    if (!t) return;
                    const n = t[1],
                        s = t[2];
                    let i;
                    const a = t[3],
                        o = a?.replace("?size=", "") || void 0;
                    return i = "avatar" === t[1] || "profile" === t[1] ? Fn(s) : t[1], {
                        mediaMatchType: n,
                        entityType: i,
                        entityId: s,
                        sizeType: o,
                        params: a
                    }
                }
                class ka extends AbortController {
                    constructor() {
                        var e, t, n, s;
                        super(...arguments), e = this, t = "threads", n = new Map, (t = "symbol" == typeof(s = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var s = n.call(e, "string");
                                if ("object" != typeof s) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(t)) ? s : s + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }
                    getThreadSignal(e) {
                        let t = this.threads.get(e);
                        return t || (t = new AbortController, this.threads.set(e, t)), t.signal
                    }
                    abortThread(e, t) {
                        this.threads.get(e)?.abort(t), this.threads.delete(e)
                    }
                    abort(e) {
                        super.abort(e), this.threads.forEach((t => t.abort(e))), this.threads.clear()
                    }
                }
                const Da = "Unknown platform";
                Oi.Logger.setLevel("warn");
                const Ea = {
                        build: e => e
                    },
                    xa = new Map,
                    Na = new Map;
                let Ha, Ga, Fa;

                function _a(e) {
                    let {
                        isPremium: t
                    } = e;
                    Ga.setIsPremium(t)
                }
                const qa = 2500;
                async function Oa() {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && Ga.isConnected() && await Promise.race([za(new ue.Api.auth.LogOut), re(qa)]), e || (Object.assign(Re, Be()), la()), await Ga.destroy()
                }
                async function ja() {
                    await Ga.disconnect()
                }

                function La(e) {
                    Ha({
                        "@type": "updateSession",
                        sessionData: e
                    })
                }

                function Va(e) {
                    ea(e), e instanceof ue.Api.UpdatesTooLong ? async function() {
                        try {
                            await za(new ue.Api.users.GetFullUser({
                                id: new ue.Api.InputUserSelf
                            }), {
                                shouldThrow: !0
                            })
                        } catch (e) {
                            "AUTH_KEY_UNREGISTERED" !== e.message && "SESSION_REVOKED" !== e.message || Ha({
                                "@type": "updateConnectionState",
                                connectionState: "connectionStateBroken"
                            })
                        }
                    }(): ("updates" in e ? e.updates : [e]).forEach((e => {
                        if (!(e instanceof ue.Api.UpdateConfig)) return;
                        const t = e._entities?.find((e => e instanceof ue.Api.User && fe(e.id, "user") === Fa));
                        t instanceof ue.Api.User && _a({
                            isPremium: Boolean(t.premium)
                        })
                    }))
                }
                async function za(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const {
                        shouldThrow: n,
                        shouldIgnoreUpdates: s,
                        dcId: i,
                        shouldIgnoreErrors: a,
                        abortControllerChatId: o,
                        abortControllerThreadId: r,
                        shouldRetryOnTimeout: c,
                        abortControllerGroup: u
                    } = t, l = Boolean(t.shouldReturnTrue);
                    let p;
                    if (o) {
                        let e = xa.get(o);
                        e || (e = new ka, xa.set(o, e)), p = r ? e.getThreadSignal(r) : e.signal
                    }
                    if (u) {
                        let e = Na.get(u);
                        e || (e = new AbortController, Na.set(u, e)), p = e.signal
                    }
                    try {
                        d && Qe("INVOKE", e.className);
                        const t = await Ga.invoke(e, i, p, c);
                        return d && Qe("RESPONSE", e.className, t), !s && function(e) {
                            return e instanceof ue.Api.UpdatesTooLong || e instanceof ue.Api.UpdateShortMessage || e instanceof ue.Api.UpdateShortChatMessage || e instanceof ue.Api.UpdateShort || e instanceof ue.Api.UpdatesCombined || e instanceof ue.Api.Updates || e instanceof ue.Api.UpdateShortSentMessage
                        }(t) && ea(t), l ? t && !0 : t
                    } catch (t) {
                        if (a) return;
                        if (d && (Qe("INVOKE ERROR", e.className), console.debug("invokeRequest failed with payload", e), console.error(t)), n) throw t;
                        return void
                        function(e, t) {
                            const n = e.message.startsWith("A wait of") && (t instanceof ue.Api.messages.SendMessage || t instanceof ue.Api.messages.SendMedia || t instanceof ue.Api.messages.SendMultiMedia),
                                {
                                    message: s
                                } = e;
                            Ha({
                                "@type": "error",
                                error: {
                                    message: s,
                                    isSlowMode: n,
                                    hasErrorKey: !0
                                }
                            })
                        }(t, e)
                    }
                }

                function Wa(e, t) {
                    d && Qe("BEACON", e.className), Ga.invokeBeacon(e, t)
                }
                async function Ja(e, t) {
                    try {
                        return await Ba(e, Ga, t)
                    } catch (n) {
                        if (n.message.startsWith("FILE_REFERENCE")) {
                            if (await Xa({
                                    url: e.url
                                })) return Ba(e, Ga, t);
                            d && console.error("Failed to repair file reference", e.url)
                        }
                        throw n
                    }
                }

                function Ka(e, t) {
                    return Ga.uploadFile({
                        file: e,
                        onProgress: t,
                        workers: m
                    })
                }

                function $a(e) {
                    return Ga.updateTwoFaSettings(e)
                }

                function Qa(e) {
                    const {
                        chatId: t,
                        threadId: n
                    } = e, s = xa.get(t);
                    if (!n) return s?.abort("Chat change"), void xa.delete(t);
                    s?.abortThread(n, "Thread change")
                }

                function Za(e) {
                    Na.get(e)?.abort(), Na.delete(e)
                }
                async function Ya() {
                    const e = await za(new ue.Api.users.GetFullUser({
                        id: new ue.Api.InputUserSelf
                    }));
                    if (!(e && e.users[0] instanceof ue.Api.User)) return;
                    const t = e.users[0];
                    ze(t);
                    const n = Fs(e),
                        s = _s(t);
                    var i;
                    return i = s.id, Is = i,
                        function(e, t) {
                            Ci({
                                "@type": "updateCurrentUser",
                                currentUser: e,
                                currentUserFullInfo: t
                            })
                        }(s, n), Fa = s.id, _a({
                            isPremium: Boolean(s.isPremium)
                        }), s
                }
                async function Xa(e) {
                    let {
                        url: t
                    } = e;
                    const n = Ua(t);
                    if (!n) return;
                    const {
                        entityId: s,
                        mediaMatchType: i
                    } = n;
                    if ("document" === i || "photo" === i || "webDocument" === i) {
                        const e = "document" === i ? Ue.documents[s] : "webDocument" === i ? Ue.webDocuments[s] : Ue.photos[s];
                        if (!e) return !1;
                        const t = e;
                        if (!t.localRepairInfo) return !1;
                        const {
                            localRepairInfo: n
                        } = t;
                        if ("story" === n.type) return await async function(e, t) {
                            const n = On(e);
                            if (!n) return !1;
                            const s = await za(new ue.Api.stories.GetStoriesByID({
                                peer: n,
                                id: [t]
                            }), {
                                shouldIgnoreErrors: !0
                            });
                            return !!s && (We(s.users), s.stories.forEach((t => {
                                const n = ni(e, t);
                                n && !("isDeleted" in n) && (qe(t, e), Ha({
                                    "@type": "updateStory",
                                    peerId: e,
                                    story: n
                                }))
                            })), !0)
                        }(n.peerId, n.id);
                        if ("message" === n.type) return await async function(e, t) {
                            const n = Fn(e),
                                s = On(e);
                            if (!s) return !1;
                            const i = await za("channel" === n ? new ue.Api.channels.GetMessages({
                                channel: s,
                                id: [new ue.Api.InputMessageID({
                                    id: t
                                })]
                            }) : new ue.Api.messages.GetMessages({
                                id: [new ue.Api.InputMessageID({
                                    id: t
                                })]
                            }), {
                                shouldIgnoreErrors: !0
                            });
                            if (!i || i instanceof ue.Api.messages.MessagesNotModified) return !1;
                            s && "pts" in i && ta(e, i.pts);
                            const a = i.messages[0];
                            if (a instanceof ue.Api.MessageEmpty) return !1;
                            We(i.users), We(i.chats), Fe(a);
                            const o = Cs(a);
                            return o && Ha({
                                "@type": "updateMessage",
                                chatId: o.chatId,
                                id: o.id,
                                message: o
                            }), !0
                        }(n.peerId, n.id)
                    }
                    return !1
                }

                function eo(e) {
                    Ga.setForceHttpTransport(e)
                }

                function to(e) {
                    Ga.setAllowHttpTransport(e)
                }

                function no(e) {
                    Ga.setShouldDebugExportedSenders(e)
                }

                function so(e) {
                    aa(e)
                }
                let io;
                async function ao(e) {
                    let {
                        chatId: t,
                        accessHash: n,
                        messageId: s,
                        data: i,
                        isGame: a
                    } = e;
                    const o = await za(new ue.Api.messages.GetBotCallbackAnswer({
                        peer: qn(t, n),
                        msgId: s,
                        data: i ? $e(i) : void 0,
                        game: a || void 0
                    }));
                    return o ? be(o) : void 0
                }
                async function oo() {
                    const e = await za(new ue.Api.contacts.GetTopPeers({
                        botsInline: !0
                    }));
                    if (!(e instanceof ue.Api.contacts.TopPeers)) return;
                    const t = e.users.map(_s).filter(Boolean);
                    return {
                        ids: t.map((e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })),
                        users: t
                    }
                }
                async function ro(e) {
                    let {
                        username: t
                    } = e;
                    const n = await za(new ue.Api.contacts.ResolveUsername({
                        username: t
                    }));
                    if (n && n.users[0] instanceof ue.Api.User && n.users[0].bot && n.users[0].botInlinePlaceholder) return ze(n.users[0]), {
                        user: _s(n.users[0]),
                        chat: gn(n.users[0])
                    }
                }
                async function co(e) {
                    let {
                        bot: t,
                        chat: n,
                        query: s,
                        offset: i = ""
                    } = e;
                    const a = await za(new ue.Api.messages.GetInlineBotResults({
                        bot: qn(t.id, t.accessHash),
                        peer: qn(n.id, n.accessHash),
                        query: s,
                        offset: i
                    }));
                    var o, r, d, c, u, l;
                    if (a) return We(a.users), {
                        isGallery: Boolean(a.gallery),
                        help: t.botPlaceholder,
                        nextOffset: (u = t.usernames[0].username, l = a.nextOffset, "gif" === u && "0" === l ? "" : l),
                        switchPm: (c = a.switchPm, c ? Xe(c, ["text", "startParam"]) : void 0),
                        switchWebview: (d = a.switchWebview, d ? Xe(d, ["text", "url"]) : void 0),
                        users: a.users.map(_s).filter(Boolean),
                        results: (o = String(a.queryId), r = a.results, r.map((e => e instanceof ue.Api.BotInlineMediaResult ? (e.document instanceof ue.Api.Document && je(e.document), e.photo instanceof ue.Api.Photo && Oe(e.photo), function(e, t) {
                            const {
                                id: n,
                                type: s,
                                title: i,
                                description: a,
                                photo: o,
                                document: r
                            } = e;
                            return {
                                id: n,
                                queryId: t,
                                type: s,
                                title: i,
                                description: a,
                                ..."sticker" === s && r instanceof ue.Api.Document && {
                                    sticker: vt(r)
                                },
                                ...o instanceof ue.Api.Photo && {
                                    photo: mt(o)
                                },
                                ..."gif" === s && r instanceof ue.Api.Document && {
                                    gif: kt(r)
                                },
                                ..."video" === s && r instanceof ue.Api.Document && {
                                    thumbnail: ft(r.thumbs)
                                }
                            }
                        }(e, o)) : (e.thumb && Je(e.thumb), function(e, t) {
                            const {
                                id: n,
                                type: s,
                                title: i,
                                description: a,
                                url: o,
                                thumb: r
                            } = e;
                            return {
                                id: n,
                                queryId: t,
                                type: s,
                                title: i,
                                description: a,
                                url: o,
                                webThumbnail: qt(r)
                            }
                        }(e, o))))),
                        cacheTime: a.cacheTime
                    }
                }
                async function uo(e) {
                    let {
                        chat: t,
                        replyInfo: n,
                        resultId: s,
                        queryId: i,
                        sendAs: a,
                        isSilent: o,
                        scheduleDate: r
                    } = e;
                    const d = Jn();
                    await za(new ue.Api.messages.SendInlineBotResult({
                        clearDraft: !0,
                        randomId: d,
                        queryId: ye()(i),
                        peer: qn(t.id, t.accessHash),
                        id: s,
                        scheduleDate: r,
                        replyTo: n && hs(n),
                        ...o && {
                            silent: !0
                        },
                        ...a && {
                            sendAs: qn(a.id, a.accessHash)
                        }
                    }))
                }
                async function lo(e) {
                    let {
                        bot: t,
                        startParam: n
                    } = e;
                    const s = Jn();
                    await za(new ue.Api.messages.StartBot({
                        bot: qn(t.id, t.accessHash),
                        peer: qn(t.id, t.accessHash),
                        randomId: s,
                        startParam: n
                    }))
                }
                async function po(e) {
                    let {
                        isSilent: t,
                        peer: n,
                        bot: s,
                        url: i,
                        startParam: a,
                        replyInfo: o,
                        theme: r,
                        sendAs: d,
                        isFromBotMenu: c
                    } = e;
                    const u = await za(new ue.Api.messages.RequestWebView({
                        silent: t || void 0,
                        peer: qn(n.id, n.accessHash),
                        bot: qn(s.id, s.accessHash),
                        url: i,
                        startParam: a,
                        themeParams: r ? is(r) : void 0,
                        fromBotMenu: c || void 0,
                        platform: z,
                        replyTo: o && hs(o),
                        ...d && {
                            sendAs: qn(d.id, d.accessHash)
                        }
                    }));
                    if (u instanceof ue.Api.WebViewResultUrl) return {
                        url: u.url,
                        queryId: u.queryId?.toString()
                    }
                }
                async function fo(e) {
                    let {
                        bot: t,
                        url: n,
                        theme: s,
                        startParam: i,
                        isFromSwitchWebView: a,
                        isFromSideMenu: o
                    } = e;
                    const r = await za(new ue.Api.messages.RequestSimpleWebView({
                        url: n,
                        bot: qn(t.id, t.accessHash),
                        themeParams: s ? is(s) : void 0,
                        platform: z,
                        startParam: i,
                        fromSwitchWebview: a || void 0,
                        fromSideMenu: o || void 0
                    }));
                    return r?.url
                }
                async function ho(e) {
                    let {
                        bot: t,
                        appName: n
                    } = e;
                    const s = await za(new ue.Api.messages.GetBotApp({
                        app: new ue.Api.InputBotAppShortName({
                            botId: jn(t.id, t.accessHash),
                            shortName: n
                        })
                    }));
                    if (s && !(s instanceof ue.Api.BotAppNotModified)) return function(e) {
                        const {
                            app: t,
                            inactive: n,
                            requestWriteAccess: s
                        } = e, i = function(e) {
                            if (e instanceof ue.Api.BotAppNotModified) return;
                            const {
                                id: t,
                                accessHash: n,
                                title: s,
                                description: i,
                                shortName: a,
                                photo: o,
                                document: r
                            } = e, d = o instanceof ue.Api.Photo ? mt(o) : void 0, c = r instanceof ue.Api.Document ? Et(r) : void 0;
                            return {
                                id: t.toString(),
                                accessHash: n.toString(),
                                title: s,
                                description: i,
                                shortName: a,
                                photo: d,
                                document: c
                            }
                        }(t);
                        if (i) return {
                            ...i,
                            isInactive: n,
                            shouldRequestWriteAccess: s
                        }
                    }(s)
                }
                async function mo(e) {
                    let {
                        peer: t,
                        app: n,
                        startParam: s,
                        theme: i,
                        isWriteAllowed: a
                    } = e;
                    const o = await za(new ue.Api.messages.RequestAppWebView({
                        peer: qn(t.id, t.accessHash),
                        app: fs(n),
                        startParam: s,
                        themeParams: i ? is(i) : void 0,
                        platform: z,
                        writeAllowed: a || void 0
                    }));
                    return o?.url
                }

                function go(e) {
                    let {
                        isSilent: t,
                        peer: n,
                        bot: s,
                        queryId: i,
                        replyInfo: a,
                        sendAs: o
                    } = e;
                    return za(new ue.Api.messages.ProlongWebView({
                        silent: t || void 0,
                        peer: qn(n.id, n.accessHash),
                        bot: qn(s.id, s.accessHash),
                        queryId: ye()(i),
                        replyTo: a && hs(a),
                        ...o && {
                            sendAs: qn(o.id, o.accessHash)
                        }
                    }))
                }
                async function Ao(e) {
                    let {
                        bot: t,
                        buttonText: n,
                        data: s
                    } = e;
                    const i = Jn();
                    await za(new ue.Api.messages.SendWebViewData({
                        bot: qn(t.id, t.accessHash),
                        buttonText: n,
                        data: s,
                        randomId: i
                    }))
                }
                async function yo(e) {
                    let {
                        hash: t
                    } = e;
                    const n = await za(new ue.Api.messages.GetAttachMenuBots({
                        hash: t ? ye()(t) : void 0
                    }));
                    if (n instanceof ue.Api.AttachMenuBots) return We(n.users), {
                        hash: n.hash.toString(),
                        bots: Ze(n.bots.map(jt), "id"),
                        users: n.users.map(_s).filter(Boolean)
                    }
                }
                async function wo(e) {
                    let {
                        bot: t
                    } = e;
                    const n = await za(new ue.Api.messages.GetAttachMenuBot({
                        bot: qn(t.id, t.accessHash)
                    }));
                    if (n instanceof ue.Api.AttachMenuBotsBot) return We(n.users), {
                        bot: jt(n.bot),
                        users: n.users.map(_s).filter(Boolean)
                    }
                }

                function Io(e) {
                    let {
                        bot: t,
                        isWriteAllowed: n,
                        isEnabled: s
                    } = e;
                    return za(new ue.Api.messages.ToggleBotInAttachMenu({
                        bot: qn(t.id, t.accessHash),
                        writeAllowed: n || void 0,
                        enabled: s
                    }))
                }
                async function bo(e) {
                    let {
                        chat: t,
                        buttonId: n,
                        messageId: s
                    } = e;
                    const i = await za(new ue.Api.messages.RequestUrlAuth({
                        peer: qn(t.id, t.accessHash),
                        buttonId: n,
                        msgId: s
                    }));
                    if (!i) return;
                    const a = $s(i);
                    return "request" === a?.type && io({
                        "@type": "updateUser",
                        id: a.bot.id,
                        user: a.bot
                    }), a
                }
                async function So(e) {
                    let {
                        chat: t,
                        messageId: n,
                        buttonId: s,
                        isWriteAllowed: i
                    } = e;
                    const a = await za(new ue.Api.messages.AcceptUrlAuth({
                        peer: qn(t.id, t.accessHash),
                        msgId: n,
                        buttonId: s,
                        writeAllowed: i || void 0
                    }));
                    if (!a) return;
                    const o = $s(a);
                    return "request" === o?.type && io({
                        "@type": "updateUser",
                        id: o.bot.id,
                        user: o.bot
                    }), o
                }
                async function vo(e) {
                    let {
                        url: t
                    } = e;
                    const n = await za(new ue.Api.messages.RequestUrlAuth({
                        url: t
                    }));
                    if (!n) return;
                    const s = $s(n);
                    return "request" === s?.type && io({
                        "@type": "updateUser",
                        id: s.bot.id,
                        user: s.bot
                    }), s
                }
                async function Co(e) {
                    let {
                        url: t,
                        isWriteAllowed: n
                    } = e;
                    const s = await za(new ue.Api.messages.AcceptUrlAuth({
                        url: t,
                        writeAllowed: n || void 0
                    }));
                    if (!s) return;
                    const i = $s(s);
                    return "request" === i?.type && io({
                        "@type": "updateUser",
                        id: i.bot.id,
                        user: i.bot
                    }), i
                }

                function Po(e) {
                    let {
                        bot: t
                    } = e;
                    return za(new ue.Api.bots.CanSendMessage({
                        bot: jn(t.id, t.accessHash)
                    }))
                }

                function Mo(e) {
                    let {
                        bot: t
                    } = e;
                    return za(new ue.Api.bots.AllowSendMessage({
                        bot: jn(t.id, t.accessHash)
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function To(e) {
                    let {
                        bot: t,
                        customMethod: n,
                        parameters: s
                    } = e;
                    try {
                        const e = await za(new ue.Api.bots.InvokeWebViewCustomMethod({
                            bot: qn(t.id, t.accessHash),
                            params: new ue.Api.DataJSON({
                                data: s
                            }),
                            customMethod: n
                        }), {
                            shouldThrow: !0
                        });
                        return {
                            result: JSON.parse(e.data)
                        }
                    } catch (e) {
                        return {
                            error: e.message
                        }
                    }
                }

                function Bo(e) {
                    let {
                        bot: t,
                        langCode: n,
                        name: s,
                        about: i,
                        description: a
                    } = e;
                    return za(new ue.Api.bots.SetBotInfo({
                        bot: qn(t.id, t.accessHash),
                        langCode: n,
                        name: s || "",
                        about: i || "",
                        description: a || ""
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                var Ro = n(48287).hp;
                let Uo, ko;
                async function Do(e) {
                    let {
                        call: t
                    } = e;
                    const n = await za(new ue.Api.phone.GetGroupCall({
                        call: os(t)
                    }));
                    if (!n) return;
                    We(n.users), We(n.chats);
                    const s = n.users.map(_s).filter(Boolean),
                        i = n.chats.map((e => gn(e))).filter(Boolean);
                    return {
                        groupCall: Qt(n.call),
                        users: s,
                        chats: i
                    }
                }

                function Eo(e) {
                    let {
                        call: t
                    } = e;
                    return za(new ue.Api.phone.DiscardGroupCall({
                        call: os(t)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function xo(e) {
                    let {
                        call: t,
                        participant: n,
                        muted: s,
                        presentationPaused: i,
                        videoStopped: a,
                        videoPaused: o,
                        volume: r,
                        raiseHand: d
                    } = e;
                    return za(new ue.Api.phone.EditGroupCallParticipant({
                        call: os(t),
                        participant: qn(n.id, n.accessHash),
                        ...void 0 !== a && {
                            videoStopped: a
                        },
                        ...void 0 !== o && {
                            videoPaused: o
                        },
                        ...void 0 !== s && {
                            muted: s
                        },
                        ...void 0 !== i && {
                            presentationPaused: i
                        },
                        ...void 0 !== d && {
                            raiseHand: d
                        },
                        ...void 0 !== r && {
                            volume: r
                        }
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function No(e) {
                    let {
                        groupCall: t,
                        title: n
                    } = e;
                    return za(new ue.Api.phone.EditGroupCallTitle({
                        title: n,
                        call: os(t)
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Ho(e) {
                    let {
                        call: t,
                        canSelfUnmute: n
                    } = e;
                    const s = await za(new ue.Api.phone.ExportGroupCallInvite({
                        canSelfUnmute: n || void 0,
                        call: os(t)
                    }));
                    if (s) return s.link
                }
                async function Go(e) {
                    let {
                        call: t,
                        offset: n
                    } = e;
                    const s = await za(new ue.Api.phone.GetGroupParticipants({
                        call: os(t),
                        ids: [],
                        sources: [],
                        offset: n || "",
                        limit: b
                    }));
                    if (!s) return;
                    We(s.users), We(s.chats);
                    const i = s.users.map(_s).filter(Boolean),
                        a = s.chats.map((e => gn(e))).filter(Boolean);
                    return Uo({
                        "@type": "updateGroupCallParticipants",
                        groupCallId: t.id,
                        participants: s.participants.map(Jt),
                        nextOffset: s.nextOffset
                    }), {
                        users: i,
                        chats: a
                    }
                }

                function Fo(e) {
                    let {
                        call: t,
                        isPageUnload: n
                    } = e;
                    const s = new ue.Api.phone.LeaveGroupCall({
                        call: os(t)
                    });
                    n ? Wa(s) : za(s, {
                        shouldReturnTrue: !0
                    })
                }
                async function _o(e) {
                    let {
                        call: t,
                        inviteHash: n,
                        params: s
                    } = e;
                    const i = await za(new ue.Api.phone.JoinGroupCall({
                        call: os(t),
                        joinAs: new ue.Api.InputPeerSelf,
                        muted: !0,
                        videoStopped: !0,
                        params: new ue.Api.DataJSON({
                            data: JSON.stringify(s)
                        }),
                        inviteHash: n
                    }), {
                        shouldRetryOnTimeout: !0,
                        abortControllerGroup: "call"
                    });
                    if (i && i instanceof ue.Api.Updates) {
                        const e = i.updates.find((e => e instanceof ue.Api.UpdateGroupCall));
                        if (!(e instanceof ue.Api.UpdateGroupCall)) return;
                        return Qt(e.call)
                    }
                }
                async function qo(e) {
                    let {
                        peer: t
                    } = e;
                    const n = Kn(),
                        s = await za(new ue.Api.phone.CreateGroupCall({
                            peer: qn(t.id, t.accessHash),
                            randomId: n
                        }));
                    if (s && s instanceof ue.Api.Updates) {
                        const e = s.updates[0];
                        if (e instanceof ue.Api.UpdateGroupCall) return Qt(e.call)
                    }
                }

                function Oo(e) {
                    let {
                        call: t,
                        params: n
                    } = e;
                    return za(new ue.Api.phone.JoinGroupCallPresentation({
                        call: os(t),
                        params: new ue.Api.DataJSON({
                            data: JSON.stringify(n)
                        })
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function jo(e) {
                    let {
                        call: t,
                        subscribed: n
                    } = e;
                    return za(new ue.Api.phone.ToggleGroupCallStartSubscription({
                        call: os(t),
                        subscribed: n
                    }), {
                        shouldReturnTrue: !0,
                        shouldIgnoreErrors: !0
                    })
                }

                function Lo(e) {
                    let {
                        call: t
                    } = e;
                    return za(new ue.Api.phone.LeaveGroupCallPresentation({
                        call: os(t)
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Vo() {
                    const e = await za(new ue.Api.messages.GetDhConfig({}));
                    if (e && !(e instanceof ue.Api.messages.DhConfigNotModified)) return {
                        g: e.g,
                        p: Array.from(e.p),
                        random: Array.from(e.random)
                    }
                }

                function zo(e) {
                    let {
                        call: t,
                        isBusy: n,
                        isPageUnload: s
                    } = e;
                    const i = new ue.Api.phone.DiscardCall({
                        peer: rs(t),
                        reason: n ? new ue.Api.PhoneCallDiscardReasonBusy : new ue.Api.PhoneCallDiscardReasonHangup
                    });
                    s ? Wa(i) : za(i, {
                        shouldReturnTrue: !0
                    })
                }
                async function Wo(e) {
                    let {
                        user: t,
                        gAHash: n,
                        isVideo: s
                    } = e;
                    const i = await za(new ue.Api.phone.RequestCall({
                        randomId: Kn(),
                        userId: qn(t.id, t.accessHash),
                        gAHash: Ro.from(n),
                        ...s && {
                            video: !0
                        },
                        protocol: tn()
                    }));
                    if (!i) return;
                    const a = Zt(i.phoneCall);
                    return Uo({
                        "@type": "updatePhoneCall",
                        call: a
                    }), We(i.users), {
                        users: i.users.map(_s).filter(Boolean)
                    }
                }

                function Jo(e) {
                    let {
                        call: t,
                        rating: n,
                        comment: s
                    } = e;
                    return za(new ue.Api.phone.SetCallRating({
                        rating: n,
                        peer: rs(t),
                        comment: s
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Ko(e) {
                    let {
                        call: t
                    } = e;
                    return za(new ue.Api.phone.ReceivedCall({
                        peer: rs(t)
                    }))
                }
                async function $o(e) {
                    let {
                        call: t,
                        gB: n
                    } = e;
                    const s = await za(new ue.Api.phone.AcceptCall({
                        peer: rs(t),
                        gB: Ro.from(n),
                        protocol: tn()
                    }));
                    if (s) return t = Zt(s.phoneCall), Uo({
                        "@type": "updatePhoneCall",
                        call: t
                    }), We(s.users), {
                        users: s.users.map(_s).filter(Boolean)
                    }
                }
                async function Qo(e) {
                    let {
                        call: t,
                        gA: n,
                        keyFingerprint: s
                    } = e;
                    const i = await za(new ue.Api.phone.ConfirmCall({
                        peer: rs(t),
                        gA: Ro.from(n),
                        keyFingerprint: ye()(s),
                        protocol: tn()
                    }));
                    if (i) return t = Zt(i.phoneCall), Uo({
                        "@type": "updatePhoneCall",
                        call: t
                    }), We(i.users), {
                        users: i.users.map(_s).filter(Boolean)
                    }
                }

                function Zo(e) {
                    let {
                        data: t,
                        call: n
                    } = e;
                    return za(new ue.Api.phone.SendSignalingData({
                        data: Ro.from(t),
                        peer: rs(n)
                    }))
                }
                async function Yo(e) {
                    let {
                        limit: t,
                        offsetDate: n,
                        archived: s,
                        withPinned: i,
                        lastLocalServiceMessageId: a
                    } = e;
                    const o = await za(new ue.Api.messages.GetDialogs({
                            offsetPeer: new ue.Api.InputPeerEmpty,
                            limit: t,
                            offsetDate: n,
                            ...i && {
                                excludePinned: !0
                            }
                        })),
                        r = i ? await za(new ue.Api.messages.GetPinnedDialogs({
                            folderId: s ? Q : void 0
                        })) : void 0;
                    if (!o || o instanceof ue.Api.messages.DialogsNotModified) return;
                    r && (wi(r.messages), zr(r)), wi(o.messages), zr(o);
                    const d = (r ? r.messages : []).concat(o.messages).map(Cs).filter(Boolean),
                        c = Vr(o);
                    r && Object.assign(c, Vr(r, c));
                    const u = [],
                        l = {},
                        p = (r ? r.dialogs : []).concat(o.dialogs),
                        f = [],
                        h = {};
                    p.forEach((e => {
                        if (!(e instanceof ue.Api.Dialog) || !s && e.folderId === Q || s && e.folderId !== Q) return;
                        const t = pn(e, c[yn(e.peer)]);
                        if (h[t.id] = e.topMessage, e.pts && ta(t.id, e.pts), t.id === W && a && a > e.topMessage && (h[t.id] = a), t.isListed = !0, u.push(t), pi(t.id, t.muteUntil, ko), i && e.pinned && f.push(t.id), e.draft) {
                            const n = Ms(e.draft);
                            n && (l[t.id] = n)
                        }
                    }));
                    const m = u.map((e => e.id)),
                        {
                            users: g,
                            userStatusesById: A
                        } = Os((r?.users || []).concat(o.users));
                    let y;
                    return y = o instanceof ue.Api.messages.DialogsSlice ? o.count : m.length, {
                        chatIds: m,
                        chats: u,
                        users: g,
                        userStatusesById: A,
                        draftsById: l,
                        orderedPinnedIds: i ? f : void 0,
                        totalChatCount: y,
                        lastMessageByChatId: h,
                        messages: d
                    }
                }
                async function Xo(e) {
                    let {
                        limit: t,
                        offsetDate: n,
                        withPinned: s
                    } = e;
                    const i = await za(new ue.Api.messages.GetSavedDialogs({
                            offsetPeer: new ue.Api.InputPeerEmpty,
                            limit: t,
                            offsetDate: n,
                            ...s && {
                                excludePinned: !0
                            }
                        })),
                        a = s ? await za(new ue.Api.messages.GetPinnedSavedDialogs) : void 0;
                    if (!i || i instanceof ue.Api.messages.SavedDialogsNotModified) return;
                    const o = a && !(a instanceof ue.Api.messages.SavedDialogsNotModified);
                    o && zr(a), zr(i), wi(i.messages);
                    const r = (o ? a.messages : []).concat(i.messages).map(Cs).filter(Boolean),
                        d = Vr(i);
                    o && Object.assign(d, Vr(a, d));
                    const c = (o ? a.dialogs : []).concat(i.dialogs),
                        u = [],
                        l = [],
                        p = {},
                        f = [];
                    c.forEach((e => {
                        const t = function(e, t) {
                                const {
                                    peer: n
                                } = e;
                                return {
                                    id: he(n),
                                    type: An(t),
                                    title: wn(n, t),
                                    ...ln(t)
                                }
                            }(e, d[yn(e.peer)]),
                            n = he(e.peer);
                        u.push(n), s && e.pinned && l.push(n), p[n] = e.topMessage, f.push(t)
                    }));
                    const {
                        users: h,
                        userStatusesById: m
                    } = Os((o ? a.users : []).concat(i.users));
                    let g;
                    return g = i instanceof ue.Api.messages.SavedDialogsSlice ? i.count : u.length, {
                        chatIds: u,
                        chats: f,
                        users: h,
                        userStatusesById: m,
                        orderedPinnedIds: s ? l : void 0,
                        totalChatCount: g,
                        lastMessageByChatId: p,
                        messages: r,
                        draftsById: {}
                    }
                }

                function er(e) {
                    const {
                        id: t,
                        accessHash: n,
                        adminRights: s
                    } = e;
                    return jn(t, n) instanceof ue.Api.InputChannel ? async function(e, t, n) {
                        const s = await za(new ue.Api.channels.GetFullChannel({
                            channel: jn(e, t)
                        }));
                        if (!(s && s.fullChat instanceof ue.Api.ChannelFull)) return;
                        const {
                            about: i,
                            onlineCount: a,
                            exportedInvite: o,
                            slowmodeSeconds: r,
                            slowmodeNextSendDate: d,
                            migratedFromChatId: c,
                            migratedFromMaxId: u,
                            canViewParticipants: l,
                            canViewStats: p,
                            linkedChatId: f,
                            hiddenPrehistory: h,
                            call: m,
                            botInfo: g,
                            availableReactions: A,
                            reactionsLimit: y,
                            defaultSendAs: w,
                            requestsPending: I,
                            recentRequesters: b,
                            statsDc: S,
                            participantsCount: v,
                            stickerset: C,
                            chatPhoto: P,
                            participantsHidden: M,
                            translationsDisabled: T,
                            storiesPinnedAvailable: B,
                            viewForumAsMessages: R,
                            emojiset: U,
                            boostsApplied: k,
                            boostsUnrestrict: D
                        } = s.fullChat;
                        P && Oe(P);
                        const E = o instanceof ue.Api.ChatInviteExported ? o.link : void 0,
                            {
                                members: x,
                                users: N,
                                userStatusesById: H
                            } = l && await Nr(e, t) || {},
                            {
                                members: G,
                                users: F,
                                userStatusesById: _
                            } = l && n && await Nr(e, t, "kicked") || {},
                            {
                                members: q,
                                users: O,
                                userStatusesById: j
                            } = l && await Nr(e, t, "admin") || {},
                            L = g ? Mn(g) : void 0,
                            V = s.chats.map((e => gn(e))).filter(Boolean);
                        if (s?.chats?.length > 1) {
                            zr(s);
                            const [, e] = s.chats, t = gn(e);
                            t && ko({
                                "@type": "updateChat",
                                id: t.id,
                                chat: t
                            })
                        }
                        s.fullChat.pts && ta(e, s.fullChat.pts);
                        const z = {
                            ...H,
                            ..._,
                            ...j
                        };
                        return {
                            fullInfo: {
                                ...P instanceof ue.Api.Photo && {
                                    profilePhoto: mt(P)
                                },
                                about: i,
                                onlineCount: a,
                                inviteLink: E,
                                slowMode: r ? {
                                    seconds: r,
                                    nextSendDate: d
                                } : void 0,
                                migratedFrom: c ? {
                                    chatId: fe(c, "chat"),
                                    maxMessageId: u
                                } : void 0,
                                canViewMembers: l,
                                canViewStatistics: p,
                                isPreHistoryHidden: h,
                                members: x,
                                kickedMembers: G,
                                adminMembersById: q ? Ze(q, "userId") : void 0,
                                groupCallId: m ? String(m.id) : void 0,
                                linkedChatId: f ? fe(f, "channel") : void 0,
                                botCommands: L,
                                enabledReactions: Rn(A),
                                reactionsLimit: y,
                                sendAsId: w ? he(w) : void 0,
                                requestsPending: I,
                                recentRequesterIds: b?.map((e => fe(e, "user"))),
                                statisticsDcId: S,
                                stickerSet: C ? Ct(C) : void 0,
                                emojiSet: U ? Ct(U) : void 0,
                                areParticipantsHidden: M,
                                isTranslationDisabled: T,
                                hasPinnedStories: Boolean(B),
                                boostsApplied: k,
                                boostsToUnrestrict: D
                            },
                            users: [...N || [], ...F || [], ...O || []],
                            chats: V,
                            userStatusesById: z,
                            groupCall: m ? {
                                chatId: e,
                                isLoaded: !1,
                                id: m.id.toString(),
                                accessHash: m?.accessHash.toString(),
                                participants: {},
                                version: 0,
                                participantsCount: 0,
                                connectionState: "disconnected"
                            } : void 0,
                            membersCount: v,
                            ...R && {
                                isForumAsMessages: !0
                            }
                        }
                    }(t, n, s): async function(e) {
                        const t = await za(new ue.Api.messages.GetFullChat({
                            chatId: jn(e)
                        }));
                        if (!(t && t.fullChat instanceof ue.Api.ChatFull)) return;
                        zr(t);
                        const {
                            about: n,
                            participants: s,
                            exportedInvite: i,
                            botInfo: a,
                            call: o,
                            availableReactions: r,
                            recentRequesters: d,
                            requestsPending: c,
                            chatPhoto: u,
                            translationsDisabled: l,
                            reactionsLimit: p
                        } = t.fullChat;
                        u && Oe(u);
                        const f = Sn(s),
                            h = f ? f.filter((e => {
                                let {
                                    isAdmin: t,
                                    isOwner: n
                                } = e;
                                return t || n
                            })) : void 0,
                            m = a ? Mn(a) : void 0,
                            g = i instanceof ue.Api.ChatInviteExported ? i.link : void 0,
                            {
                                users: A,
                                userStatusesById: y
                            } = Os(t.users),
                            w = t.chats.map((e => gn(e))).filter(Boolean);
                        return {
                            fullInfo: {
                                ...u instanceof ue.Api.Photo && {
                                    profilePhoto: mt(u)
                                },
                                about: n,
                                members: f,
                                adminMembersById: h ? Ze(h, "userId") : void 0,
                                canViewMembers: !0,
                                botCommands: m,
                                inviteLink: g,
                                groupCallId: o?.id.toString(),
                                enabledReactions: Rn(r),
                                reactionsLimit: p,
                                requestsPending: c,
                                recentRequesterIds: d?.map((e => fe(e, "user"))),
                                isTranslationDisabled: l,
                                isPreHistoryHidden: !0
                            },
                            users: A,
                            chats: w,
                            userStatusesById: y,
                            groupCall: o ? {
                                chatId: e,
                                isLoaded: !1,
                                id: o.id.toString(),
                                accessHash: o.accessHash.toString(),
                                connectionState: "disconnected",
                                participantsCount: 0,
                                version: 0,
                                participants: {}
                            } : void 0,
                            membersCount: f?.length
                        }
                    }(t)
                }
                async function tr(e) {
                    const {
                        id: t,
                        accessHash: n
                    } = e, s = await za(new ue.Api.messages.GetPeerSettings({
                        peer: qn(t, n)
                    }), {
                        abortControllerChatId: t
                    });
                    if (s) return We(s.users), {
                        users: s.users.map(_s).filter(Boolean),
                        settings: Bn(s.settings)
                    }
                }
                async function nr(e) {
                    let {
                        query: t
                    } = e;
                    const n = await za(new ue.Api.contacts.Search({
                        q: t,
                        limit: g
                    }));
                    if (!n) return;
                    zr(n);
                    const s = n.myResults.map(he),
                        i = n.results.map(he).filter((e => !s.includes(e))),
                        a = n.chats.concat(n.users).map((e => gn(e))).filter(Boolean),
                        o = n.users.map(_s).filter(Boolean);
                    return {
                        accountResultIds: s,
                        globalResultIds: i,
                        chats: a,
                        users: o
                    }
                }
                async function sr(e) {
                    let t, {
                        type: n,
                        user: s
                    } = e;
                    if ("self" === n || "user" === n) {
                        const e = await za(new ue.Api.users.GetUsers({
                            id: ["user" === n && s ? jn(s.id, s.accessHash) : new ue.Api.InputUserSelf]
                        }));
                        if (!e || !e.length) return;
                        [t] = e
                    } else if ("support" === n) {
                        const e = await za(new ue.Api.help.GetSupport);
                        if (!e || !e.user) return;
                        t = e.user
                    }
                    const i = gn(t, "support" === n);
                    if (i) return ko({
                        "@type": "updateChat",
                        id: i.id,
                        chat: i
                    }), {
                        chatId: i.id
                    }
                }
                async function ir(e) {
                    let {
                        chat: t,
                        lastLocalMessage: n,
                        noLastMessage: s
                    } = e;
                    const {
                        id: i,
                        accessHash: a
                    } = t, o = await za(new ue.Api.messages.GetPeerDialogs({
                        peers: [new ue.Api.InputDialogPeer({
                            peer: qn(i, a)
                        })]
                    }));
                    if (!o) return;
                    const r = o.dialogs[0];
                    if (!(r && r instanceof ue.Api.Dialog)) return;
                    const d = Vr(o)[yn(r.peer)];
                    if (!d) return;
                    zr(o);
                    const c = Cs(o.messages[0]);
                    wi(o.messages);
                    const u = n && (!c || n.date > c.date) ? n : c,
                        l = pn(r, d);
                    ko({
                        "@type": "updateChat",
                        id: i,
                        chat: l
                    }), !s && u && ko({
                        "@type": "updateChatLastMessage",
                        id: i,
                        lastMessage: u
                    }), Xi(o.state), pi(l.id, l.muteUntil, ko)
                }

                function ar(e) {
                    let {
                        chat: t,
                        draft: n
                    } = e;
                    return za(new ue.Api.messages.SaveDraft({
                        peer: qn(t.id, t.accessHash),
                        message: n?.text?.text || "",
                        entities: n?.text?.entities?.map(Qn),
                        replyTo: n?.replyInfo && hs(n.replyInfo)
                    }))
                }
                async function or(e) {
                    let {
                        chat: t,
                        isMuted: n,
                        muteUntil: s = 0
                    } = e;
                    n && !s && (s = D), await za(new ue.Api.account.UpdateNotifySettings({
                        peer: new ue.Api.InputNotifyPeer({
                            peer: qn(t.id, t.accessHash)
                        }),
                        settings: new ue.Api.InputPeerNotifySettings({
                            muteUntil: s
                        })
                    })), ko({
                        "@type": "updateNotifyExceptions",
                        chatId: t.id,
                        isMuted: n
                    }), ir({
                        chat: t,
                        noLastMessage: !0
                    })
                }
                async function rr(e) {
                    let {
                        chat: t,
                        topicId: n,
                        isMuted: s,
                        muteUntil: i = 0
                    } = e;
                    s && !i && (i = D), await za(new ue.Api.account.UpdateNotifySettings({
                        peer: new ue.Api.InputNotifyForumTopic({
                            peer: qn(t.id, t.accessHash),
                            topMsgId: n
                        }),
                        settings: new ue.Api.InputPeerNotifySettings({
                            muteUntil: i
                        })
                    })), ko({
                        "@type": "updateTopicNotifyExceptions",
                        chatId: t.id,
                        topicId: n,
                        isMuted: s
                    })
                }
                async function dr(e) {
                    let {
                        title: t,
                        about: n = "",
                        users: s
                    } = e;
                    const i = await za(new ue.Api.channels.CreateChannel({
                        broadcast: !0,
                        title: t,
                        about: n
                    }), {
                        shouldThrow: !0
                    });
                    if (!(i instanceof ue.Api.Updates)) return void(d && console.error("Unexpected channel creation update", i));
                    const a = i.chats[0];
                    if (!(a && a instanceof ue.Api.Channel)) return void(d && console.error("Created channel not found", i));
                    const o = gn(a);
                    let r;
                    if (s?.length) {
                        const e = await za(new ue.Api.channels.InviteToChannel({
                            channel: jn(o.id, o.accessHash),
                            users: s.map((e => {
                                let {
                                    id: t,
                                    accessHash: n
                                } = e;
                                return jn(t, n)
                            }))
                        }));
                        if (!e) return;
                        Va(e.updates), r = e.missingInvitees.map(En)
                    }
                    return {
                        channel: o,
                        missingUsers: r
                    }
                }

                function cr(e) {
                    let {
                        channelId: t,
                        accessHash: n
                    } = e;
                    return za(new ue.Api.channels.JoinChannel({
                        channel: jn(t, n)
                    }), {
                        shouldReturnTrue: !0,
                        shouldThrow: !0
                    })
                }

                function ur(e) {
                    let {
                        chat: t,
                        user: n
                    } = e;
                    if ("chatTypeBasicGroup" === t.type) return za(new ue.Api.messages.DeleteChatUser({
                        chatId: jn(t.id, t.accessHash),
                        userId: jn(n.id, n.accessHash)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function lr(e) {
                    let {
                        chatId: t
                    } = e;
                    return za(new ue.Api.messages.DeleteChat({
                        chatId: jn(t)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function pr(e) {
                    let {
                        channelId: t,
                        accessHash: n
                    } = e;
                    return za(new ue.Api.channels.LeaveChannel({
                        channel: jn(t, n)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function fr(e) {
                    let {
                        channelId: t,
                        accessHash: n
                    } = e;
                    return za(new ue.Api.channels.DeleteChannel({
                        channel: jn(t, n)
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function hr(e) {
                    let {
                        title: t,
                        users: n
                    } = e;
                    const s = await za(new ue.Api.messages.CreateChat({
                        title: t,
                        users: n.map((e => {
                            let {
                                id: t,
                                accessHash: n
                            } = e;
                            return jn(t, n)
                        }))
                    }));
                    if (!s) return;
                    Va(s.updates);
                    const i = s.missingInvitees.map(En),
                        a = s.updates.chats[0];
                    if (a && a instanceof ue.Api.Chat) return {
                        chat: gn(a),
                        missingUsers: i
                    };
                    d && console.error("Created chat not found", s.updates)
                }
                async function mr(e) {
                    let {
                        chatId: t,
                        accessHash: n,
                        photo: s
                    } = e;
                    const i = jn(t, n);
                    let a;
                    if (s instanceof File) {
                        const e = await Ka(s);
                        a = new ue.Api.InputChatUploadedPhoto({
                            file: e
                        })
                    } else if (s) {
                        const e = Zn(s);
                        if (!e) return !1;
                        a = new ue.Api.InputChatPhoto({
                            id: e
                        })
                    } else a = new ue.Api.InputChatPhotoEmpty;
                    return za(i instanceof ue.Api.InputChannel ? new ue.Api.channels.EditPhoto({
                        channel: i,
                        photo: a
                    }) : new ue.Api.messages.EditChatPhoto({
                        chatId: i,
                        photo: a
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function gr(e) {
                    let {
                        chat: t,
                        shouldBePinned: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    await za(new ue.Api.messages.ToggleDialogPin({
                        peer: new ue.Api.InputDialogPeer({
                            peer: qn(s, i)
                        }),
                        pinned: n || void 0
                    })) && ko({
                        "@type": "updateChatPinned",
                        id: t.id,
                        isPinned: n
                    })
                }
                async function Ar(e) {
                    let {
                        chat: t,
                        shouldBePinned: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    await za(new ue.Api.messages.ToggleSavedDialogPin({
                        peer: new ue.Api.InputDialogPeer({
                            peer: qn(s, i)
                        }),
                        pinned: n || void 0
                    })) && ko({
                        "@type": "updateSavedDialogPinned",
                        id: t.id,
                        isPinned: n
                    })
                }

                function yr(e) {
                    let {
                        chat: t,
                        folderId: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    return za(new ue.Api.folders.EditPeerFolders({
                        folderPeers: [new ue.Api.InputFolderPeer({
                            peer: qn(s, i),
                            folderId: n
                        })]
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function wr() {
                    const e = await za(new ue.Api.messages.GetDialogFilters);
                    if (!e) return;
                    const {
                        filters: t
                    } = e, n = t.findIndex((e => e instanceof ue.Api.DialogFilterDefault)), s = t.filter(Ge), i = s.map((e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }));
                    return -1 !== n && i.splice(n, 0, $), {
                        byId: Ze(s.map(Cn), "id"),
                        orderedIds: i
                    }
                }
                async function Ir() {
                    const e = await za(new ue.Api.messages.GetSuggestedDialogFilters);
                    if (e) return e.map(Pn).filter(Boolean)
                }
                async function br(e) {
                    let {
                        id: t,
                        folderUpdate: n
                    } = e;
                    n.excludedChatIds = n.excludedChatIds.filter((e => !n.includedChatIds.includes(e)));
                    const s = function(e) {
                        const {
                            emoticon: t,
                            contacts: n,
                            nonContacts: s,
                            groups: i,
                            channels: a,
                            bots: o,
                            excludeArchived: r,
                            excludeMuted: d,
                            excludeRead: c,
                            pinnedChatIds: u,
                            includedChatIds: l,
                            excludedChatIds: p
                        } = e, f = u ? u.map(On).filter(Boolean) : [], h = l ? l.map(On).filter(Boolean) : [], m = p ? p.map(On).filter(Boolean) : [];
                        return e.isChatList ? new ue.Api.DialogFilterChatlist({
                            id: e.id,
                            title: e.title,
                            emoticon: t || void 0,
                            pinnedPeers: f,
                            includePeers: h,
                            hasMyInvites: e.hasMyInvites
                        }) : new ue.Api.DialogFilter({
                            id: e.id,
                            title: e.title,
                            emoticon: t || void 0,
                            contacts: n || void 0,
                            nonContacts: s || void 0,
                            groups: i || void 0,
                            bots: o || void 0,
                            excludeArchived: r || void 0,
                            excludeMuted: d || void 0,
                            excludeRead: c || void 0,
                            broadcasts: a || void 0,
                            pinnedPeers: f,
                            includePeers: h,
                            excludePeers: m
                        })
                    }(n);
                    await za(new ue.Api.messages.UpdateDialogFilter({
                        id: t,
                        filter: s
                    })) && ko({
                        "@type": "updateChatFolder",
                        id: t,
                        folder: n
                    })
                }
                async function Sr(e) {
                    const t = await za(new ue.Api.messages.UpdateDialogFilter({
                            id: e,
                            filter: void 0
                        })),
                        n = await Ir();
                    t && ko({
                        "@type": "updateChatFolder",
                        id: e,
                        folder: void 0
                    }), n && ko({
                        "@type": "updateRecommendedChatFolders",
                        folders: n
                    })
                }

                function vr(e) {
                    return za(new ue.Api.messages.UpdateDialogFiltersOrder({
                        order: e
                    }))
                }
                async function Cr(e) {
                    let {
                        chat: t,
                        hasUnreadMark: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    await za(new ue.Api.messages.MarkDialogUnread({
                        peer: new ue.Api.InputDialogPeer({
                            peer: qn(s, i)
                        }),
                        unread: n || void 0
                    })) && ko({
                        "@type": "updateChat",
                        id: t.id,
                        chat: {
                            hasUnreadMark: n
                        }
                    })
                }
                async function Pr(e) {
                    return Tr(await za(new ue.Api.contacts.ResolvePhone({
                        phone: e
                    })))
                }
                async function Mr(e) {
                    return Tr(await za(new ue.Api.contacts.ResolveUsername({
                        username: e
                    })))
                }

                function Tr(e) {
                    if (!e) return;
                    const {
                        users: t,
                        chats: n
                    } = e, s = n.length ? gn(n[0]) : gn(t[0]);
                    return s ? (zr(e), {
                        chat: s,
                        user: _s(t[0])
                    }) : void 0
                }

                function Br(e) {
                    let {
                        chat: t,
                        isEnabled: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = jn(s, i);
                    return za(new ue.Api.channels.TogglePreHistoryHidden({
                        channel: a,
                        enabled: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Rr(e) {
                    let {
                        chat: t,
                        bannedRights: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = qn(s, i);
                    return za(new ue.Api.messages.EditChatDefaultBannedRights({
                        peer: a,
                        bannedRights: Xn(n)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Ur(e) {
                    let {
                        chat: t,
                        user: n,
                        bannedRights: s,
                        untilDate: i
                    } = e;
                    const a = jn(t.id, t.accessHash),
                        o = qn(n.id, n.accessHash);
                    return za(new ue.Api.channels.EditBanned({
                        channel: a,
                        participant: o,
                        bannedRights: Xn(s, i)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function kr(e) {
                    let {
                        chat: t,
                        user: n,
                        adminRights: s,
                        customTitle: i = ""
                    } = e;
                    const a = jn(t.id, t.accessHash),
                        o = jn(n.id, n.accessHash);
                    return za(new ue.Api.channels.EditAdmin({
                        channel: a,
                        userId: o,
                        adminRights: es(s),
                        rank: i
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Dr(e, t) {
                    const n = jn(e.id, e.accessHash);
                    await za(n instanceof ue.Api.InputChannel ? new ue.Api.channels.EditTitle({
                        channel: n,
                        title: t
                    }) : new ue.Api.messages.EditChatTitle({
                        chatId: n,
                        title: t
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Er(e, t) {
                    await za(new ue.Api.messages.EditChatAbout({
                        peer: qn(e.id, e.accessHash),
                        about: t
                    })) && ko({
                        "@type": "updateChatFullInfo",
                        id: e.id,
                        fullInfo: {
                            about: t
                        }
                    })
                }

                function xr(e) {
                    let {
                        chat: t,
                        isEnabled: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = jn(s, i);
                    return za(new ue.Api.channels.ToggleSignatures({
                        channel: a,
                        enabled: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Nr(e, t) {
                    let n, s = arguments.length > 3 ? arguments[3] : void 0;
                    switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "recent") {
                        case "kicked":
                            n = new ue.Api.ChannelParticipantsKicked({
                                q: ""
                            });
                            break;
                        case "admin":
                            n = new ue.Api.ChannelParticipantsAdmins;
                            break;
                        default:
                            n = new ue.Api.ChannelParticipantsRecent
                    }
                    const i = await za(new ue.Api.channels.GetParticipants({
                        channel: jn(e, t),
                        filter: n,
                        offset: s,
                        limit: A
                    }), {
                        abortControllerChatId: e
                    });
                    if (!i || i instanceof ue.Api.channels.ChannelParticipantsNotModified) return;
                    zr(i);
                    const {
                        users: a,
                        userStatusesById: o
                    } = Os(i.users);
                    return {
                        members: Sn(i),
                        users: a,
                        userStatusesById: o
                    }
                }
                async function Hr() {
                    const e = await za(new ue.Api.channels.GetGroupsForDiscussion);
                    if (e) return zr(e), e.chats.map((e => gn(e)))
                }

                function Gr(e) {
                    let {
                        channel: t,
                        chat: n
                    } = e;
                    return za(new ue.Api.channels.SetDiscussionGroup({
                        broadcast: qn(t.id, t.accessHash),
                        group: n ? qn(n.id, n.accessHash) : new ue.Api.InputChannelEmpty
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Fr(e) {
                    const t = await za(new ue.Api.messages.MigrateChat({
                        chatId: jn(e.id)
                    }), {
                        shouldThrow: !0
                    });
                    if (!(t && t instanceof ue.Api.Updates)) return void(d && console.error("Unexpected channel creation update", t));
                    zr(t);
                    const n = t.updates.find((e => e instanceof ue.Api.UpdateChannel)).channelId;
                    return gn(t.chats.find((e => e instanceof ue.Api.Channel && e.id.toString() === n.toString())))
                }
                async function _r(e) {
                    const t = await za(new ue.Api.messages.CheckChatInvite({
                        hash: e
                    }));
                    if (!t) return;
                    let n;
                    if (t instanceof ue.Api.ChatInvite) {
                        const {
                            photo: n,
                            participantsCount: s,
                            title: i,
                            channel: a,
                            requestNeeded: o,
                            about: r,
                            megagroup: d
                        } = t;
                        n instanceof ue.Api.Photo && Oe(t.photo), ko({
                            "@type": "showInvite",
                            data: {
                                title: i,
                                about: r,
                                hash: e,
                                participantsCount: s,
                                isChannel: a && !d,
                                isRequestNeeded: o,
                                ...n instanceof ue.Api.Photo && {
                                    photo: mt(n)
                                }
                            }
                        })
                    } else n = gn(t.chat), n && ko({
                        "@type": "updateChat",
                        id: n.id,
                        chat: n
                    });
                    return n ? {
                        chatId: n.id
                    } : void 0
                }
                async function qr(e, t) {
                    try {
                        if ("chatTypeChannel" === e.type || "chatTypeSuperGroup" === e.type) {
                            const n = await za(new ue.Api.channels.InviteToChannel({
                                channel: jn(e.id, e.accessHash),
                                users: t.map((e => jn(e.id, e.accessHash)))
                            }));
                            if (!n) return;
                            return Va(n.updates), n.missingInvitees.map(En)
                        }
                        const n = await Promise.all(t.map((async t => {
                            const n = await za(new ue.Api.messages.AddChatUser({
                                chatId: jn(e.id),
                                userId: jn(t.id, t.accessHash)
                            }));
                            if (n) return Va(n.updates), n.missingInvitees.map(En)
                        })));
                        if (n) return n.flat().filter(Boolean)
                    } catch (e) {
                        ko({
                            "@type": "error",
                            error: {
                                message: e.message
                            }
                        })
                    }
                }

                function Or(e, t) {
                    return "chatTypeChannel" === e.type || "chatTypeSuperGroup" === e.type ? Ur({
                        chat: e,
                        user: t,
                        bannedRights: {
                            viewMessages: !0,
                            sendMessages: !0,
                            sendMedia: !0,
                            sendStickers: !0,
                            sendGifs: !0,
                            sendGames: !0,
                            sendInline: !0,
                            embedLinks: !0,
                            sendPolls: !0,
                            changeInfo: !0,
                            inviteUsers: !0,
                            pinMessages: !0,
                            manageTopics: !0,
                            sendPhotos: !0,
                            sendVideos: !0,
                            sendRoundvideos: !0,
                            sendAudios: !0,
                            sendVoices: !0,
                            sendDocs: !0,
                            sendPlain: !0
                        },
                        untilDate: D
                    }) : za(new ue.Api.messages.DeleteChatUser({
                        chatId: jn(e.id),
                        userId: jn(t.id, t.accessHash)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function jr(e, t) {
                    return za(new ue.Api.channels.ToggleJoinToSend({
                        channel: jn(e.id, e.accessHash),
                        enabled: t
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Lr(e, t) {
                    return za(new ue.Api.channels.ToggleJoinRequest({
                        channel: jn(e.id, e.accessHash),
                        enabled: t
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Vr(e, t) {
                    const n = {};
                    return e.chats?.forEach((e => {
                        const s = `chat${e.id}`;
                        t?.[s] && "min" in e && e.min || (n[s] = e)
                    })), e.users?.forEach((e => {
                        const s = `user${e.id}`;
                        t?.[s] && "min" in e && e.min || (n[s] = e)
                    })), n
                }

                function zr(e) {
                    "users" in e && We(e.users), "chats" in e && We(e.chats), "messages" in e && e.messages.forEach((e => {
                        Fe(e)
                    }))
                }
                async function Wr(e) {
                    let {
                        hash: t
                    } = e;
                    const n = await za(new ue.Api.messages.ImportChatInvite({
                        hash: t
                    }));
                    if (n instanceof ue.Api.Updates && n.chats.length) return gn(n.chats[0])
                }

                function Jr(e) {
                    let {
                        chat: t,
                        enabledReactions: n,
                        reactionsLimit: s
                    } = e;
                    return za(new ue.Api.messages.SetChatAvailableReactions({
                        peer: qn(t.id, t.accessHash),
                        availableReactions: (i = n, "all" === i?.type ? new ue.Api.ChatReactionsAll({
                            allowCustom: i.areCustomAllowed
                        }) : "some" === i?.type ? new ue.Api.ChatReactionsSome({
                            reactions: i.allowed.map(us)
                        }) : new ue.Api.ChatReactionsNone),
                        reactionsLimit: s
                    }), {
                        shouldReturnTrue: !0
                    });
                    var i
                }

                function Kr(e) {
                    let {
                        chat: t,
                        isProtected: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    return za(new ue.Api.messages.ToggleNoForwards({
                        peer: qn(s, i),
                        enabled: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function $r(e) {
                    let {
                        chat: t,
                        isEnabled: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    return za(new ue.Api.channels.ToggleParticipantsHidden({
                        channel: qn(s, i),
                        enabled: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Qr(e) {
                    let {
                        chat: t,
                        isEnabled: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    return za(new ue.Api.channels.ToggleForum({
                        channel: qn(s, i),
                        enabled: n
                    }), {
                        shouldReturnTrue: !0,
                        shouldThrow: !0
                    })
                }
                async function Zr(e) {
                    let {
                        chat: t,
                        title: n,
                        iconColor: s,
                        iconEmojiId: i,
                        sendAs: a
                    } = e;
                    const {
                        id: o,
                        accessHash: r
                    } = t, d = await za(new ue.Api.channels.CreateForumTopic({
                        channel: qn(o, r),
                        title: n,
                        iconColor: s,
                        iconEmojiId: i ? ye()(i) : void 0,
                        sendAs: a ? qn(a.id, a.accessHash) : void 0,
                        randomId: Jn()
                    }));
                    if (d instanceof ue.Api.Updates && d.updates.length) return d.updates?.find((e => e instanceof ue.Api.UpdateMessageID))?.id
                }
                async function Yr(e) {
                    let {
                        chat: t,
                        query: n,
                        offsetTopicId: s,
                        offsetId: i,
                        offsetDate: a,
                        limit: o = U
                    } = e;
                    const {
                        id: r,
                        accessHash: d
                    } = t, c = await za(new ue.Api.channels.GetForumTopics({
                        channel: qn(r, d),
                        limit: o,
                        q: n,
                        offsetTopic: s,
                        offsetId: i,
                        offsetDate: a
                    }));
                    if (!c) return;
                    zr(c);
                    const {
                        count: u,
                        orderByCreateDate: l
                    } = c, p = c.topics.map(kn).filter(Boolean), f = c.messages.map(Cs).filter(Boolean);
                    return wi(c.messages), {
                        topics: p,
                        messages: f,
                        users: c.users.map(_s).filter(Boolean),
                        chats: c.chats.map((e => gn(e))).filter(Boolean),
                        count: u + 1,
                        shouldOrderByCreateDate: l,
                        draftsById: c.topics.reduce(((e, t) => (t instanceof ue.Api.ForumTopic && t.draft && (e[t.id] = Ms(t.draft)), e)), {}),
                        readInboxMessageIdByTopicId: c.topics.reduce(((e, t) => (t instanceof ue.Api.ForumTopic && t.readInboxMaxId && (e[t.id] = t.readInboxMaxId), e)), {})
                    }
                }
                async function Xr(e) {
                    let {
                        chat: t,
                        topicId: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = await za(new ue.Api.channels.GetForumTopicsByID({
                        channel: qn(s, i),
                        topics: [n]
                    }));
                    if (!(a?.topics.length && a.topics[0] instanceof ue.Api.ForumTopic)) return;
                    zr(a);
                    const o = a.messages.map(Cs).filter(Boolean);
                    wi(a.messages);
                    const r = a.users.map(_s).filter(Boolean),
                        d = a.chats.map((e => gn(e))).filter(Boolean);
                    return {
                        topic: kn(a.topics[0]),
                        messages: o,
                        users: r,
                        chats: d
                    }
                }
                async function ed(e) {
                    let {
                        chat: t,
                        topicId: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = await za(new ue.Api.channels.DeleteTopicHistory({
                        channel: qn(s, i),
                        topMsgId: n
                    }));
                    a && (pa(t, a), a.offset && await ed({
                        chat: t,
                        topicId: n
                    }))
                }

                function td(e) {
                    let {
                        chat: t,
                        topicId: n,
                        isPinned: s
                    } = e;
                    const {
                        id: i,
                        accessHash: a
                    } = t;
                    return za(new ue.Api.channels.UpdatePinnedForumTopic({
                        channel: qn(i, a),
                        topicId: n,
                        pinned: s
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function nd(e) {
                    let {
                        chat: t,
                        topicId: n,
                        title: s,
                        iconEmojiId: i,
                        isClosed: a,
                        isHidden: o
                    } = e;
                    const {
                        id: r,
                        accessHash: d
                    } = t;
                    return za(new ue.Api.channels.EditForumTopic({
                        channel: qn(r, d),
                        topicId: n,
                        title: s,
                        iconEmojiId: n !== X && i ? ye()(i) : void 0,
                        closed: a,
                        hidden: o
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function sd(e) {
                    let {
                        slug: t
                    } = e;
                    const n = await za(new ue.Api.chatlists.CheckChatlistInvite({
                            slug: t
                        })),
                        s = function(e, t) {
                            return e instanceof ue.Api.chatlists.ChatlistInvite ? {
                                slug: t,
                                title: e.title,
                                emoticon: e.emoticon,
                                peerIds: e.peers.map(he).filter(Boolean)
                            } : e instanceof ue.Api.chatlists.ChatlistInviteAlready ? {
                                slug: t,
                                folderId: e.filterId,
                                missingPeerIds: e.missingPeers.map(he).filter(Boolean),
                                alreadyPeerIds: e.alreadyPeers.map(he).filter(Boolean)
                            } : void 0
                        }(n, t);
                    if (n && s) return zr(n), {
                        invite: s,
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean)
                    }
                }

                function id(e) {
                    let {
                        slug: t,
                        peers: n
                    } = e;
                    return za(new ue.Api.chatlists.JoinChatlistInvite({
                        slug: t,
                        peers: n.map((e => qn(e.id, e.accessHash)))
                    }), {
                        shouldReturnTrue: !0,
                        shouldThrow: !0
                    })
                }
                async function ad(e) {
                    let {
                        folderId: t
                    } = e;
                    const n = await za(new ue.Api.chatlists.GetLeaveChatlistSuggestions({
                        chatlist: new ue.Api.InputChatlistDialogFilter({
                            filterId: t
                        })
                    }));
                    if (n) return n.map(he)
                }

                function od(e) {
                    let {
                        folderId: t,
                        peers: n
                    } = e;
                    return za(new ue.Api.chatlists.LeaveChatlist({
                        chatlist: new ue.Api.InputChatlistDialogFilter({
                            filterId: t
                        }),
                        peers: n.map((e => qn(e.id, e.accessHash)))
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function rd(e) {
                    let {
                        folderId: t,
                        title: n,
                        peers: s
                    } = e;
                    const i = await za(new ue.Api.chatlists.ExportChatlistInvite({
                        chatlist: new ue.Api.InputChatlistDialogFilter({
                            filterId: t
                        }),
                        title: n || "",
                        peers: s.map((e => qn(e.id, e.accessHash)))
                    }), {
                        shouldThrow: !0
                    });
                    if (i && !(i.filter instanceof ue.Api.DialogFilterDefault)) return {
                        filter: Cn(i.filter),
                        invite: Dn(i.invite)
                    }
                }

                function dd(e) {
                    let {
                        folderId: t,
                        slug: n
                    } = e;
                    return za(new ue.Api.chatlists.DeleteExportedInvite({
                        chatlist: new ue.Api.InputChatlistDialogFilter({
                            filterId: t
                        }),
                        slug: n
                    }))
                }
                async function cd(e) {
                    let {
                        folderId: t,
                        slug: n,
                        title: s,
                        peers: i
                    } = e;
                    const a = await za(new ue.Api.chatlists.EditExportedInvite({
                        chatlist: new ue.Api.InputChatlistDialogFilter({
                            filterId: t
                        }),
                        slug: n,
                        title: s,
                        peers: i.map((e => qn(e.id, e.accessHash)))
                    }), {
                        shouldThrow: !0
                    });
                    if (a) return Dn(a)
                }
                async function ud(e) {
                    let {
                        folderId: t
                    } = e;
                    const n = await za(new ue.Api.chatlists.GetExportedInvites({
                        chatlist: new ue.Api.InputChatlistDialogFilter({
                            filterId: t
                        })
                    }));
                    if (n) return zr(n), {
                        invites: n.invites.map(Dn).filter(Boolean),
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean)
                    }
                }

                function ld(e) {
                    let {
                        chat: t,
                        isEnabled: n
                    } = e;
                    return za(new ue.Api.messages.TogglePeerTranslations({
                        disabled: !n || void 0,
                        peer: qn(t.id, t.accessHash)
                    }))
                }

                function pd(e) {
                    let {
                        chat: t,
                        isEnabled: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = jn(s, i);
                    return za(new ue.Api.channels.ToggleViewForumAsMessages({
                        channel: a,
                        enabled: Boolean(n)
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function fd(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.channels.GetChannelRecommendations({
                        channel: t && jn(t.id, t.accessHash)
                    }));
                    if (!n) return;
                    zr(n);
                    const s = n?.chats.map((e => gn(e))).filter(Boolean);
                    return {
                        similarChannels: s,
                        count: n instanceof ue.Api.messages.ChatsSlice ? n.count : s.length
                    }
                }
                async function hd(e) {
                    let {
                        chat: t,
                        randomId: n,
                        option: s
                    } = e;
                    const {
                        id: i,
                        accessHash: a
                    } = t, o = jn(i, a);
                    try {
                        const e = await za(new ue.Api.channels.ReportSponsoredMessage({
                            channel: o,
                            randomId: $e(n),
                            option: $e(s)
                        }), {
                            shouldThrow: !0
                        });
                        if (!e) return;
                        return function(e) {
                            return e instanceof ue.Api.channels.SponsoredMessageReportResultReported ? {
                                type: "reported"
                            } : e instanceof ue.Api.channels.SponsoredMessageReportResultAdsHidden ? {
                                type: "hidden"
                            } : {
                                type: "selectOption",
                                title: e.title,
                                options: e.options.map((e => ({
                                    text: e.text,
                                    option: Ke(e.option)
                                })))
                            }
                        }(e)
                    } catch (e) {
                        return e instanceof Error && "PREMIUM_ACCOUNT_REQUIRED" === e.message ? {
                            type: "premiumRequired"
                        } : void 0
                    }
                }
                async function md(e) {
                    let {
                        peer: t,
                        reason: n,
                        description: s
                    } = e;
                    return await za(new ue.Api.account.ReportPeer({
                        peer: qn(t.id, t.accessHash),
                        reason: ss(n),
                        message: s
                    }))
                }
                async function gd(e) {
                    let {
                        peer: t,
                        photo: n,
                        reason: s,
                        description: i
                    } = e;
                    const a = Zn(n);
                    if (a) return await za(new ue.Api.account.ReportProfilePhoto({
                        peer: qn(t.id, t.accessHash),
                        photoId: a,
                        reason: ss(s),
                        message: i
                    }))
                }
                async function Ad(e) {
                    let {
                        hash: t,
                        areCallsEnabled: n,
                        areSecretChatsEnabled: s,
                        isConfirmed: i
                    } = e;
                    return await za(new ue.Api.account.ChangeAuthorizationSettings({
                        hash: ye()(t),
                        ...void 0 !== n ? {
                            callRequestsDisabled: !n
                        } : void 0,
                        ...void 0 !== s ? {
                            encryptedRequestsDisabled: !s
                        } : void 0,
                        ...i && {
                            confirmed: i
                        }
                    }))
                }
                async function yd(e) {
                    let {
                        days: t
                    } = e;
                    return await za(new ue.Api.account.SetAuthorizationTTL({
                        authorizationTtlDays: t
                    }))
                }
                async function wd(e) {
                    let {
                        slug: t
                    } = e;
                    const n = await za(new ue.Api.account.ResolveBusinessChatLink({
                        slug: t
                    }), {
                        shouldIgnoreErrors: !0
                    });
                    var s;
                    if (n) return {
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean),
                        chatLink: {
                            chatId: he((s = n).peer),
                            text: Rt(s.message, s.entities)
                        }
                    }
                }

                function Id(e) {
                    let {
                        enabled: t
                    } = e;
                    return za(new ue.Api.account.ToggleSponsoredMessages({
                        enabled: t
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function bd(e, t, n) {
                    var s;
                    return (t = "symbol" == typeof(s = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var s = n.call(e, "string");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t)) ? s : s + "") in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                "undefined" == typeof File && (self.File = class extends Blob {
                    constructor(e, t, n) {
                        if (n) {
                            const {
                                type: t,
                                ...s
                            } = n;
                            super(e, {
                                type: t
                            }), bd(this, "name", void 0), Object.assign(this, s)
                        } else super(e), bd(this, "name", void 0);
                        this.name = t
                    }
                });
                var Sd = n(48287).hp;
                const vd = 1e3,
                    Cd = 63;
                let Pd;
                async function Md(e) {
                    let {
                        chat: t,
                        threadId: n,
                        offsetId: s,
                        isSavedDialog: i,
                        ...a
                    } = e;
                    const o = n === ct.l3 ? ue.Api.messages.GetHistory : i ? ue.Api.messages.GetSavedHistory : ue.Api.messages.GetReplies;
                    let r;
                    try {
                        r = await za(new o({
                            peer: qn(t.id, t.accessHash),
                            ...n !== ct.l3 && !i && {
                                msgId: Number(n)
                            },
                            ...s && {
                                offsetId: Math.min(s, D)
                            },
                            ...a
                        }), {
                            shouldThrow: !0,
                            abortControllerChatId: t.id,
                            abortControllerThreadId: n
                        })
                    } catch (e) {
                        "CHANNEL_PRIVATE" === e.message && Pd({
                            "@type": "updateChat",
                            id: t.id,
                            chat: {
                                isRestricted: !0
                            }
                        })
                    }
                    if (!r || r instanceof ue.Api.messages.MessagesNotModified || !r.messages) return;
                    ic(r);
                    const d = r.messages.map(Cs).filter(Boolean),
                        c = r.users.map(_s).filter(Boolean),
                        u = r.chats.map((e => gn(e))).filter(Boolean),
                        l = !(r instanceof ue.Api.messages.Messages) && r.count;
                    return wi(r.messages), {
                        messages: d,
                        users: c,
                        chats: u,
                        count: l
                    }
                }
                async function Td(e) {
                    let {
                        chat: t,
                        messageId: n
                    } = e;
                    const s = "channel" === Fn(t.id);
                    let i;
                    try {
                        i = await za(s ? new ue.Api.channels.GetMessages({
                            channel: jn(t.id, t.accessHash),
                            id: [new ue.Api.InputMessageID({
                                id: n
                            })]
                        }) : new ue.Api.messages.GetMessages({
                            id: [new ue.Api.InputMessageID({
                                id: n
                            })]
                        }), {
                            shouldThrow: !0,
                            abortControllerChatId: t.id
                        })
                    } catch (e) {
                        const {
                            message: t
                        } = e;
                        "CHANNEL_PRIVATE" !== t && Pd({
                            "@type": "error",
                            error: {
                                message: t,
                                isSlowMode: !1,
                                hasErrorKey: !0
                            }
                        })
                    }
                    if (!i || i instanceof ue.Api.messages.MessagesNotModified) return;
                    "pts" in i && ta(t.id, i.pts);
                    const a = i.messages[0];
                    if (!a) return;
                    if (a instanceof ue.Api.MessageEmpty) return ct.K1;
                    const o = a && Cs(a);
                    return wi([a]), o ? (Fe(a), {
                        message: o,
                        users: i.users.map(_s).filter(Boolean)
                    }) : void 0
                }
                let Bd = Promise.resolve();

                function Rd(e, t) {
                    let {
                        chat: n,
                        lastMessageId: s,
                        text: i,
                        entities: a,
                        replyInfo: o,
                        attachment: r,
                        sticker: c,
                        story: u,
                        gif: l,
                        poll: p,
                        contact: f,
                        isSilent: h,
                        scheduledAt: m,
                        groupedId: g,
                        noWebPage: A,
                        sendAs: y,
                        shouldUpdateStickerSetOrder: w,
                        wasDrafted: I,
                        isInvertedMedia: b,
                        effectId: S
                    } = e;
                    const v = function(e, t, n, s, i, a, o, r, d, c, u, l, p, f, h, m) {
                        const g = Ss(t),
                            A = a && ks(a),
                            y = "chatTypeChannel" === e.type,
                            w = i && (S = i, v = e.isForum, "story" === S.type ? {
                                type: "story",
                                peerId: S.peerId,
                                storyId: S.storyId
                            } : {
                                type: "message",
                                replyToMsgId: S.replyToMsgId,
                                replyToTopId: S.replyToTopId,
                                replyToPeerId: S.replyToPeerId,
                                quoteText: S.quoteText,
                                isForumTopic: !(!v || !S.replyToTopId) || void 0,
                                ...Boolean(S.quoteText) && {
                                    isQuote: !0
                                }
                            }),
                            I = {
                                id: g,
                                chatId: e.id,
                                content: {
                                    ...n && {
                                        text: {
                                            text: n,
                                            entities: s
                                        }
                                    },
                                    ...A,
                                    ...o && {
                                        sticker: o
                                    },
                                    ...r && {
                                        video: r
                                    },
                                    poll: d && Us(d, g),
                                    contact: c,
                                    storyData: f && {
                                        mediaType: "storyData",
                                        ...f
                                    }
                                },
                                date: l || Math.round(Date.now() / 1e3) + ot(),
                                isOutgoing: !y,
                                senderId: p?.id || Is,
                                replyInfo: w,
                                ...u && {
                                    groupedId: u,
                                    ...A && (A.photo || A.video) && {
                                        isInAlbum: !0
                                    }
                                },
                                ...l && {
                                    isScheduled: !0
                                },
                                isForwardingAllowed: !0,
                                isInvertedMedia: h,
                                effectId: m
                            },
                            b = (0, xn.e)(I.content, I.groupedId);
                        var S, v;
                        return {
                            ...I,
                            ...b && {
                                emojiOnlyCount: b
                            }
                        }
                    }(n, s, i, a, o, r, c, l, p, f, g, m, y, u, b, S);
                    Pd({
                        "@type": v.isScheduled ? "newScheduledMessage" : "newMessage",
                        id: v.id,
                        chatId: n.id,
                        message: v,
                        wasDrafted: I
                    });
                    const C = setTimeout((() => {
                            Pd({
                                "@type": v.isScheduled ? "updateScheduledMessage" : "updateMessage",
                                id: v.id,
                                chatId: n.id,
                                message: {
                                    sendingState: "messageSendingStatePending"
                                }
                            })
                        }), vd),
                        P = Jn();
                    if (g) return function(e, t, n, s) {
                        let {
                            chat: i,
                            text: a,
                            entities: o,
                            replyInfo: r,
                            attachment: c,
                            groupedId: u,
                            isSilent: l,
                            scheduledAt: p,
                            sendAs: f
                        } = e, h = -1;
                        Ud[u] || (Ud[u] = {
                            counter: 0,
                            singleMediaByIndex: {},
                            localMessages: {}
                        }), h = Ud[u].counter++;
                        const m = Bd;
                        return Bd = (async () => {
                            let e;
                            try {
                                e = await Ed(n, c, s)
                            } catch (e) {
                                return d && console.warn(e), Ud[u].counter--, void await m
                            }
                            const g = await async function(e, t) {
                                const n = await za(new ue.Api.messages.UploadMedia({
                                        peer: e,
                                        media: t
                                    })),
                                    s = t.spoiler;
                                if (n instanceof ue.Api.MessageMediaPhoto && n.photo && n.photo instanceof ue.Api.Photo) {
                                    const {
                                        photo: {
                                            id: e,
                                            accessHash: t,
                                            fileReference: i
                                        }
                                    } = n;
                                    return new ue.Api.InputMediaPhoto({
                                        id: new ue.Api.InputPhoto({
                                            id: e,
                                            accessHash: t,
                                            fileReference: i
                                        }),
                                        spoiler: s
                                    })
                                }
                                if (n instanceof ue.Api.MessageMediaDocument && n.document && n.document instanceof ue.Api.Document) {
                                    const {
                                        document: {
                                            id: e,
                                            accessHash: t,
                                            fileReference: i
                                        }
                                    } = n;
                                    return new ue.Api.InputMediaDocument({
                                        id: new ue.Api.InputDocument({
                                            id: e,
                                            accessHash: t,
                                            fileReference: i
                                        }),
                                        spoiler: s
                                    })
                                }
                            }(qn(i.id, i.accessHash), e);
                            if (await m, !g) return Ud[u].counter--, void(d && console.warn("Failed to upload grouped media"));
                            if (Ud[u].singleMediaByIndex[h] = new ue.Api.InputSingleMedia({
                                    media: g,
                                    randomId: t,
                                    message: a || "",
                                    entities: o ? o.map(Qn) : void 0
                                }), Ud[u].localMessages[t.toString()] = n, Object.keys(Ud[u].singleMediaByIndex).length < Ud[u].counter) return;
                            const {
                                singleMediaByIndex: A,
                                localMessages: y
                            } = Ud[u];
                            delete Ud[u];
                            const w = await za(new ue.Api.messages.SendMultiMedia({
                                clearDraft: !0,
                                peer: qn(i.id, i.accessHash),
                                multiMedia: Object.values(A),
                                replyTo: r && hs(r),
                                ...l && {
                                    silent: l
                                },
                                ...p && {
                                    scheduleDate: p
                                },
                                ...f && {
                                    sendAs: qn(f.id, f.accessHash)
                                }
                            }), {
                                shouldIgnoreUpdates: !0
                            });
                            w && yc(y, w)
                        })(), Bd
                    }({
                        chat: n,
                        text: i,
                        entities: a,
                        replyInfo: o,
                        attachment: r,
                        groupedId: g,
                        isSilent: h,
                        scheduledAt: m
                    }, P, v, t);
                    const M = (async () => {
                        let e;
                        if (r) try {
                            e = await Ed(v, r, t)
                        } catch (e) {
                            return d && console.warn(e), void await Bd
                        } else c ? e = zn(c) : l ? e = zn(l) : p ? e = function(e, t) {
                            const {
                                summary: n,
                                quiz: s
                            } = e, i = new ue.Api.Poll({
                                id: t,
                                publicVoters: n.isPublic,
                                question: ps(n.question),
                                answers: n.answers.map((e => {
                                    let {
                                        text: t,
                                        option: n
                                    } = e;
                                    return new ue.Api.PollAnswer({
                                        text: ps(t),
                                        option: $e(n)
                                    })
                                })),
                                quiz: n.quiz,
                                multipleChoice: n.multipleChoice
                            });
                            if (!s) return new ue.Api.InputMediaPoll({
                                poll: i
                            });
                            const a = s.correctAnswers.map($e),
                                {
                                    solution: o
                                } = s,
                                r = s.solutionEntities ? s.solutionEntities.map(Qn) : [];
                            return new ue.Api.InputMediaPoll({
                                poll: i,
                                correctAnswers: a,
                                ...o && {
                                    solution: o,
                                    solutionEntities: r
                                }
                            })
                        }(p, P) : u ? e = function(e) {
                            const t = On(e.peerId);
                            return new ue.Api.InputMediaStory({
                                peer: t,
                                id: e.id
                            })
                        }(u) : f && (e = new ue.Api.InputMediaContact({
                            phoneNumber: f.phoneNumber,
                            firstName: f.firstName,
                            lastName: f.lastName,
                            vcard: ""
                        }));
                        const s = e ? ue.Api.messages.SendMedia : ue.Api.messages.SendMessage;
                        try {
                            const t = await za(new s({
                                clearDraft: !0,
                                message: i || "",
                                entities: a ? a.map(Qn) : void 0,
                                peer: qn(n.id, n.accessHash),
                                randomId: P,
                                replyTo: o && hs(o),
                                ...h && {
                                    silent: h
                                },
                                ...m && {
                                    scheduleDate: m
                                },
                                ...e && {
                                    media: e
                                },
                                ...A && {
                                    noWebpage: A
                                },
                                ...y && {
                                    sendAs: qn(y.id, y.accessHash)
                                },
                                ...w && {
                                    updateStickersetsOrder: w
                                },
                                ...b && {
                                    invertMedia: b
                                },
                                ...S && {
                                    effect: ye()(S)
                                }
                            }), {
                                shouldThrow: !0,
                                shouldIgnoreUpdates: !0
                            });
                            t && wc(v, t)
                        } catch (e) {
                            "PRIVACY_PREMIUM_REQUIRED" === e.message && Pd({
                                "@type": "updateRequestUserUpdate",
                                id: n.id
                            }), Pd({
                                "@type": "updateMessageSendFailed",
                                chatId: n.id,
                                localId: v.id,
                                error: e.message
                            }), clearTimeout(C)
                        }
                    })();
                    return M
                }
                const Ud = {};
                async function kd(e, t) {
                    let {
                        chat: n,
                        message: s,
                        text: i,
                        entities: a,
                        attachment: o,
                        noWebPage: r
                    } = e;
                    const c = 1e3 * s.date > Date.now() + 1e3 * ot(),
                        u = o && ks(o),
                        l = i && !o?.shouldSendAsFile ? s.isInvertedMedia : void 0,
                        p = {
                            ...u || s.content,
                            ...i && {
                                text: {
                                    text: i,
                                    entities: a
                                }
                            }
                        },
                        f = {
                            ...s,
                            content: p,
                            emojiOnlyCount: (0, xn.e)(p, s.groupedId),
                            isInvertedMedia: l
                        };
                    Pd({
                        "@type": c ? "updateScheduledMessage" : "updateMessage",
                        id: s.id,
                        chatId: n.id,
                        message: f
                    });
                    try {
                        let e;
                        o && (e = await Ed(s, o, t));
                        const d = a && a.map(Qn);
                        await za(new ue.Api.messages.EditMessage({
                            message: i || "",
                            entities: d,
                            media: e,
                            peer: qn(n.id, n.accessHash),
                            id: s.id,
                            ...c && {
                                scheduleDate: s.date
                            },
                            ...r && {
                                noWebpage: r
                            },
                            ...l && {
                                invertMedia: l
                            }
                        }), {
                            shouldThrow: !0
                        })
                    } catch (e) {
                        d && console.warn(e);
                        const {
                            message: t
                        } = e;
                        Pd({
                            "@type": "error",
                            error: {
                                message: t,
                                hasErrorKey: !0
                            }
                        }), Pd({
                            "@type": c ? "updateScheduledMessage" : "updateMessage",
                            id: s.id,
                            chatId: n.id,
                            message: s
                        })
                    }
                }
                async function Dd(e) {
                    let {
                        chat: t,
                        message: n,
                        scheduledAt: s
                    } = e;
                    await za(new ue.Api.messages.EditMessage({
                        peer: qn(t.id, t.accessHash),
                        id: n.id,
                        scheduleDate: s
                    }))
                }
                async function Ed(e, t, n) {
                    const {
                        filename: s,
                        blobUrl: i,
                        mimeType: a,
                        quick: o,
                        voice: r,
                        audio: d,
                        previewBlobUrl: c,
                        shouldSendAsFile: u,
                        shouldSendAsSpoiler: l,
                        ttlSeconds: p
                    } = t, f = t => {
                        n.isCanceled ? f.isCanceled = !0 : n(t, function(e) {
                            const {
                                chatId: t,
                                id: n,
                                previousLocalId: s
                            } = e;
                            return function(e, t) {
                                return `msg${e}-${t}`
                            }(t, s || n)
                        }(e))
                    }, h = async (e, t) => Ka(await async function(e, t) {
                        const n = await async function(e) {
                            return (await fetch(e)).blob()
                        }(e);
                        return function(e, t) {
                            return new File([e], t, {
                                lastModified: Date.now(),
                                type: e.type
                            })
                        }(n, t)
                    }(e, s), t), m = L.has(a), g = d || m || u, [A, y] = await Promise.all(st([h(i, f), g && c && h(c)])), w = [new ue.Api.DocumentAttributeFilename({
                        fileName: s
                    })];
                    if (!u) {
                        if (o) {
                            if (j.has(a) && a !== _) return new ue.Api.InputMediaUploadedPhoto({
                                file: A,
                                spoiler: l
                            });
                            if (m) {
                                const {
                                    width: e,
                                    height: t,
                                    duration: n
                                } = o;
                                void 0 !== n && w.push(new ue.Api.DocumentAttributeVideo({
                                    duration: n,
                                    w: e,
                                    h: t,
                                    supportsStreaming: !0
                                }))
                            }
                        }
                        if (d) {
                            const {
                                duration: e,
                                title: t,
                                performer: n
                            } = d;
                            w.push(new ue.Api.DocumentAttributeAudio({
                                duration: e,
                                title: t,
                                performer: n
                            }))
                        }
                        if (r) {
                            const {
                                duration: e,
                                waveform: t
                            } = r, {
                                data: n
                            } = Nn(t, Cd);
                            w.push(new ue.Api.DocumentAttributeAudio({
                                voice: !0,
                                duration: e,
                                waveform: Sd.from(n)
                            }))
                        }
                    }
                    return new ue.Api.InputMediaUploadedDocument({
                        file: A,
                        mimeType: a,
                        attributes: w,
                        thumb: y,
                        forceFile: u,
                        spoiler: l,
                        ttlSeconds: p
                    })
                }
                async function xd(e) {
                    let {
                        chat: t,
                        messageId: n,
                        isUnpin: s,
                        isOneSide: i,
                        isSilent: a
                    } = e;
                    await za(new ue.Api.messages.UpdatePinnedMessage({
                        peer: qn(t.id, t.accessHash),
                        id: n,
                        ...s && {
                            unpin: !0
                        },
                        ...i && {
                            pmOneside: !0
                        },
                        ...a && {
                            silent: !0
                        }
                    }))
                }
                async function Nd(e) {
                    let {
                        chat: t,
                        threadId: n
                    } = e;
                    const s = await za(new ue.Api.messages.UnpinAllMessages({
                        peer: qn(t.id, t.accessHash),
                        ...n && {
                            topMsgId: Number(n)
                        }
                    }));
                    s && (pa(t, s), s.offset && await Nd({
                        chat: t,
                        threadId: n
                    }))
                }
                async function Hd(e) {
                    let {
                        chat: t,
                        messageIds: n,
                        shouldDeleteForAll: s
                    } = e;
                    const i = "channel" === Fn(t.id),
                        a = await za(i ? new ue.Api.channels.DeleteMessages({
                            channel: jn(t.id, t.accessHash),
                            id: n
                        }) : new ue.Api.messages.DeleteMessages({
                            id: n,
                            ...s && {
                                revoke: !0
                            }
                        }));
                    a && (pa(t, a), Pd({
                        "@type": "deleteMessages",
                        ids: n,
                        ...i && {
                            chatId: t.id
                        }
                    }))
                }

                function Gd(e) {
                    let {
                        chat: t,
                        messageIds: n
                    } = e;
                    za(new ue.Api.messages.DeleteScheduledMessages({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }))
                }
                async function Fd(e) {
                    let {
                        chat: t,
                        shouldDeleteForAll: n
                    } = e;
                    const s = "channel" === Fn(t.id),
                        i = await za(s ? new ue.Api.channels.DeleteHistory({
                            channel: jn(t.id, t.accessHash)
                        }) : new ue.Api.messages.DeleteHistory({
                            peer: qn(t.id, t.accessHash),
                            ...n && {
                                revoke: !0
                            },
                            ...!n && {
                                just_clear: !0
                            }
                        }));
                    i && ("offset" in i && (pa(t, i), i.offset) ? await Fd({
                        chat: t,
                        shouldDeleteForAll: n
                    }) : Pd({
                        "@type": "deleteHistory",
                        chatId: t.id
                    }))
                }
                async function _d(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.messages.DeleteSavedHistory({
                        peer: qn(t.id, t.accessHash)
                    }));
                    n && (pa(t, n), n.offset ? await _d({
                        chat: t
                    }) : Pd({
                        "@type": "deleteSavedHistory",
                        chatId: t.id
                    }))
                }
                async function qd(e) {
                    let {
                        peer: t,
                        messageIds: n,
                        reason: s,
                        description: i
                    } = e;
                    return await za(new ue.Api.messages.Report({
                        peer: qn(t.id, t.accessHash),
                        id: n,
                        reason: ss(s),
                        message: i
                    }))
                }
                async function Od(e) {
                    let {
                        peer: t,
                        threadId: n,
                        action: s
                    } = e;
                    const i = function(e) {
                        switch (e.type) {
                            case "cancel":
                                return new ue.Api.SendMessageCancelAction;
                            case "typing":
                                return new ue.Api.SendMessageTypingAction;
                            case "recordAudio":
                                return new ue.Api.SendMessageRecordAudioAction;
                            case "chooseSticker":
                                return new ue.Api.SendMessageChooseStickerAction;
                            case "playingGame":
                                return new ue.Api.SendMessageGamePlayAction
                        }
                    }(s);
                    if (i) try {
                        return await za(new ue.Api.messages.SetTyping({
                            peer: qn(t.id, t.accessHash),
                            topMsgId: Number(n),
                            action: i
                        }), {
                            shouldThrow: !0,
                            abortControllerChatId: t.id,
                            abortControllerThreadId: n
                        })
                    } catch (e) {} else d && console.warn("Unsupported message action", s)
                }
                async function jd(e) {
                    let {
                        chat: t,
                        threadId: n,
                        maxId: s = 0
                    } = e;
                    const i = "channel" === Fn(t.id),
                        a = Math.min(s, D);
                    if (i && n === ct.l3) await za(new ue.Api.channels.ReadHistory({
                        channel: jn(t.id, t.accessHash),
                        maxId: a
                    }));
                    else if (i) await za(new ue.Api.messages.ReadDiscussion({
                        peer: qn(t.id, t.accessHash),
                        msgId: Number(n),
                        readMaxId: a
                    }));
                    else {
                        const e = await za(new ue.Api.messages.ReadHistory({
                            peer: qn(t.id, t.accessHash),
                            maxId: a
                        }));
                        e && pa(t, e)
                    }
                    n === ct.l3 ? ir({
                        chat: t,
                        noLastMessage: !0
                    }) : t.isForum && Pd({
                        "@type": "updateTopic",
                        chatId: t.id,
                        topicId: Number(n)
                    })
                }
                async function Ld(e) {
                    let {
                        chat: t,
                        messageIds: n
                    } = e;
                    const s = "channel" === Fn(t.id),
                        i = await za(s ? new ue.Api.channels.ReadMessageContents({
                            channel: jn(t.id, t.accessHash),
                            id: n
                        }) : new ue.Api.messages.ReadMessageContents({
                            id: n
                        }));
                    i && (!0 !== i && pa(t, i), Pd({
                        ...s ? {
                            "@type": "updateChannelMessages",
                            channelId: t.id
                        } : {
                            "@type": "updateCommonBoxMessages"
                        },
                        ids: n,
                        messageUpdate: {
                            hasUnreadMention: !1,
                            isMediaUnread: !1
                        }
                    }))
                }
                async function Vd(e) {
                    let {
                        chat: t,
                        ids: n,
                        shouldIncrement: s
                    } = e;
                    const i = it(n, v),
                        a = await Promise.all(i.map((e => za(new ue.Api.messages.GetMessagesViews({
                            peer: qn(t.id, t.accessHash),
                            id: e,
                            increment: s
                        })))));
                    if (!a || a.some((e => !e))) return;
                    const o = a.flatMap((e => e.views)),
                        r = a.flatMap((e => e.users)),
                        d = a.flatMap((e => e.chats));
                    return {
                        viewsInfo: n.map(((e, n) => {
                            const {
                                views: s,
                                forwards: i,
                                replies: a
                            } = o[n];
                            return {
                                id: e,
                                views: s,
                                forwards: i,
                                threadInfo: a ? Es(a, e, t.id) : void 0
                            }
                        })),
                        users: r.map(_s).filter(Boolean),
                        chats: d.map((e => gn(e))).filter(Boolean)
                    }
                }
                async function zd(e) {
                    let {
                        chat: t,
                        ids: n
                    } = e;
                    const s = it(n, v),
                        i = await Promise.all(s.map((e => za(new ue.Api.messages.GetFactCheck({
                            peer: qn(t.id, t.accessHash),
                            msgId: e
                        })))));
                    if (i && !i.some((e => !e))) return i.flatMap((e => e)).map(Rs)
                }
                async function Wd(e) {
                    let {
                        chat: t,
                        messageId: n
                    } = e;
                    const [s, i] = await Promise.all([za(new ue.Api.messages.GetDiscussionMessage({
                        peer: qn(t.id, t.accessHash),
                        msgId: n
                    }), {
                        abortControllerChatId: t.id,
                        abortControllerThreadId: n
                    }), Md({
                        chat: t,
                        threadId: n,
                        offsetId: 1,
                        addOffset: -1,
                        limit: 1
                    })]);
                    if (!s || !i) return;
                    ic(s);
                    const a = s.chats.map((e => gn(e))).filter(Boolean).concat(i.chats),
                        o = s.users.map(_s).filter(Boolean).concat(i.users),
                        r = s.messages.map(Cs).filter(Boolean),
                        d = r.concat(i.messages),
                        c = s.messages[s.messages.length - 1]?.id;
                    if (!c) return;
                    wi(s.messages);
                    const {
                        unreadCount: u,
                        maxId: l,
                        readInboxMaxId: p,
                        readOutboxMaxId: f
                    } = s;
                    return {
                        chats: a,
                        users: o,
                        messages: d,
                        topMessages: r,
                        unreadCount: u,
                        threadId: c,
                        lastReadInboxMessageId: p,
                        lastReadOutboxMessageId: f,
                        lastMessageId: l,
                        chatId: r[0]?.chatId,
                        firstMessageId: i.messages[0]?.id
                    }
                }
                async function Jd(e) {
                    let t, {
                        chat: n,
                        isSavedDialog: s,
                        savedTag: i,
                        type: a,
                        query: o,
                        threadId: r,
                        minDate: d,
                        maxDate: c,
                        ...u
                    } = e;
                    switch (a) {
                        case "media":
                            t = new ue.Api.InputMessagesFilterPhotoVideo;
                            break;
                        case "documents":
                            t = new ue.Api.InputMessagesFilterDocument;
                            break;
                        case "links":
                            t = new ue.Api.InputMessagesFilterUrl;
                            break;
                        case "audio":
                            t = new ue.Api.InputMessagesFilterMusic;
                            break;
                        case "voice":
                            t = new ue.Api.InputMessagesFilterRoundVoice;
                            break;
                        case "profilePhoto":
                            t = new ue.Api.InputMessagesFilterChatPhotos;
                            break;
                        default:
                            t = new ue.Api.InputMessagesFilterEmpty
                    }
                    const l = qn(n.id, n.accessHash),
                        p = await za(new ue.Api.messages.Search({
                            peer: s ? new ue.Api.InputPeerSelf : l,
                            savedPeerId: s ? l : void 0,
                            savedReaction: i && [us(i)],
                            topMsgId: r === ct.l3 || s ? void 0 : Number(r),
                            filter: t,
                            q: o || "",
                            minDate: d,
                            maxDate: c,
                            ...u
                        }), {
                            abortControllerChatId: n.id,
                            abortControllerThreadId: r
                        });
                    if (!p || p instanceof ue.Api.messages.MessagesNotModified || !p.messages) return;
                    ic(p);
                    const f = p.chats.map((e => gn(e))).filter(Boolean),
                        h = p.users.map(_s).filter(Boolean),
                        m = p.messages.map(Cs).filter(Boolean);
                    wi(p.messages);
                    let g, A = m.length;
                    return (p instanceof ue.Api.messages.MessagesSlice || p instanceof ue.Api.messages.ChannelMessages) && (A = p.count, m.length && (g = m[m.length - 1].id)), {
                        chats: f,
                        users: h,
                        messages: m,
                        totalCount: A,
                        nextOffsetId: g
                    }
                }
                async function Kd(e) {
                    let t, {
                        query: n,
                        offsetRate: s = 0,
                        limit: i,
                        type: a = "text",
                        minDate: o,
                        maxDate: r
                    } = e;
                    switch (a) {
                        case "media":
                            t = new ue.Api.InputMessagesFilterPhotoVideo;
                            break;
                        case "documents":
                            t = new ue.Api.InputMessagesFilterDocument;
                            break;
                        case "links":
                            t = new ue.Api.InputMessagesFilterUrl;
                            break;
                        case "audio":
                            t = new ue.Api.InputMessagesFilterMusic;
                            break;
                        case "voice":
                            t = new ue.Api.InputMessagesFilterRoundVoice;
                            break;
                        default:
                            if (!(n || r && o)) return;
                            t = new ue.Api.InputMessagesFilterEmpty
                    }
                    const d = await za(new ue.Api.messages.SearchGlobal({
                        q: n,
                        offsetRate: s,
                        offsetPeer: new ue.Api.InputPeerEmpty,
                        broadcastsOnly: "channels" === a || void 0,
                        limit: i,
                        filter: t,
                        folderId: $,
                        minDate: o,
                        maxDate: r
                    }));
                    if (!d || d instanceof ue.Api.messages.MessagesNotModified || !d.messages) return;
                    ic({
                        chats: d.chats,
                        users: d.users,
                        messages: d.messages
                    });
                    const c = d.chats.map((e => gn(e))).filter(Boolean),
                        u = d.users.map(_s).filter(Boolean),
                        l = d.messages.map(Cs).filter(Boolean);
                    wi(d.messages);
                    let p, f = l.length;
                    return (d instanceof ue.Api.messages.MessagesSlice || d instanceof ue.Api.messages.ChannelMessages) && (f = d.count, l.length && (p = l[l.length - 1].id)), {
                        messages: l,
                        users: u,
                        chats: c,
                        totalCount: f,
                        nextRate: "nextRate" in d && d.nextRate ? d.nextRate : p
                    }
                }
                async function $d(e) {
                    let {
                        text: t
                    } = e;
                    const n = ps(t),
                        s = await za(new ue.Api.messages.GetWebPagePreview({
                            message: n.text,
                            entities: n.entities
                        }));
                    return s && Gt(s)
                }
                async function Qd(e) {
                    let {
                        chat: t,
                        messageId: n,
                        options: s
                    } = e;
                    const {
                        id: i,
                        accessHash: a
                    } = t;
                    await za(new ue.Api.messages.SendVote({
                        peer: qn(i, a),
                        msgId: n,
                        options: s.map($e)
                    }))
                }
                async function Zd(e) {
                    let {
                        chat: t,
                        messageId: n,
                        poll: s
                    } = e;
                    const {
                        id: i,
                        accessHash: a
                    } = t;
                    await za(new ue.Api.messages.EditMessage({
                        peer: qn(i, a),
                        id: n,
                        media: Wn(s, !0)
                    }))
                }
                async function Yd(e) {
                    let {
                        chat: t,
                        messageId: n,
                        option: s,
                        offset: i,
                        limit: a,
                        shouldResetVoters: o
                    } = e;
                    const {
                        id: r,
                        accessHash: d
                    } = t, c = await za(new ue.Api.messages.GetPollVotes({
                        peer: qn(r, d),
                        id: n,
                        ...s && {
                            option: $e(s)
                        },
                        ...i && {
                            offset: i
                        },
                        ...a && {
                            limit: a
                        }
                    }));
                    if (!c) return;
                    ic({
                        chats: c.chats,
                        users: c.users,
                        messages: []
                    });
                    const u = c.users.map(_s).filter(Boolean),
                        l = c.chats.map((e => gn(e))).filter(Boolean),
                        p = c.votes.map((e => ({
                            peerId: he(e.peer),
                            date: e.date
                        })));
                    return {
                        count: c.count,
                        votes: p,
                        chats: l,
                        users: u,
                        nextOffset: c.nextOffset,
                        shouldResetVoters: o
                    }
                }
                async function Xd(e) {
                    let {
                        chat: t,
                        ids: n
                    } = e;
                    await za(new ue.Api.messages.GetExtendedMedia({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }))
                }
                async function ec(e) {
                    let {
                        fromChat: t,
                        toChat: n,
                        toThreadId: s,
                        messages: i,
                        isSilent: a,
                        scheduledAt: o,
                        sendAs: r,
                        withMyScore: d,
                        noAuthors: c,
                        noCaptions: u,
                        isCurrentUserPremium: l,
                        wasDrafted: p,
                        lastMessageId: f
                    } = e;
                    const h = i.map((e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })),
                        m = i.map(Jn),
                        g = {};
                    i.forEach(((e, t) => {
                        const i = function(e) {
                            let {
                                toChat: t,
                                toThreadId: n,
                                message: s,
                                scheduledAt: i,
                                noAuthors: a,
                                noCaptions: o,
                                isCurrentUserPremium: r,
                                lastMessageId: d
                            } = e;
                            const c = Ss(d),
                                {
                                    content: u,
                                    chatId: l,
                                    id: p,
                                    senderId: f,
                                    groupedId: h,
                                    isInAlbum: m,
                                    isInvertedMedia: g
                                } = s,
                                A = u.audio,
                                y = t.id === Is && (l !== t.id || s.forwardInfo) && !A,
                                w = Object.keys(u).length > 1 && u.text && o,
                                I = !r,
                                b = u.text?.entities && I ? {
                                    text: u.text.text,
                                    entities: u.text.entities.filter((e => e.type !== ct.C7.CustomEmoji))
                                } : u.text,
                                S = (0, xn.e)(u, h),
                                v = {
                                    ...u,
                                    text: w ? void 0 : b
                                },
                                C = n === ct.l3,
                                P = n && !C ? {
                                    type: "message",
                                    replyToMsgId: n,
                                    replyToTopId: n,
                                    isForumTopic: t.isForum || void 0
                                } : void 0;
                            return {
                                id: c,
                                chatId: t.id,
                                content: v,
                                date: i || Math.round(Date.now() / 1e3) + ot(),
                                isOutgoing: !y && "chatTypeChannel" !== t.type,
                                senderId: Is,
                                sendingState: "messageSendingStatePending",
                                groupedId: h,
                                isInAlbum: m,
                                isForwardingAllowed: !0,
                                replyInfo: P,
                                isInvertedMedia: g,
                                ...n && t?.isForum && {
                                    isTopicReply: !0
                                },
                                ...S && {
                                    emojiOnlyCount: S
                                },
                                ...s.chatId !== Is && !A && !a && {
                                    forwardInfo: {
                                        date: s.forwardInfo?.date || s.date,
                                        savedDate: s.date,
                                        isChannelPost: !1,
                                        fromChatId: l,
                                        fromMessageId: p,
                                        fromId: f,
                                        savedFromPeerId: s.chatId
                                    }
                                },
                                ...s.chatId === Is && !a && {
                                    forwardInfo: s.forwardInfo
                                },
                                ...i && {
                                    isScheduled: !0
                                }
                            }
                        }({
                            toChat: n,
                            toThreadId: Number(s),
                            message: e,
                            scheduledAt: o,
                            noAuthors: c,
                            noCaptions: u,
                            isCurrentUserPremium: l,
                            lastMessageId: f
                        });
                        g[m[t].toString()] = i, Pd({
                            "@type": i.isScheduled ? "newScheduledMessage" : "newMessage",
                            id: i.id,
                            chatId: n.id,
                            message: i,
                            wasDrafted: p
                        })
                    }));
                    try {
                        const e = await za(new ue.Api.messages.ForwardMessages({
                            fromPeer: qn(t.id, t.accessHash),
                            toPeer: qn(n.id, n.accessHash),
                            randomId: m,
                            id: h,
                            withMyScore: d || void 0,
                            silent: a || void 0,
                            dropAuthor: c || void 0,
                            dropMediaCaptions: u || void 0,
                            ...s && {
                                topMsgId: Number(s)
                            },
                            ...o && {
                                scheduleDate: o
                            },
                            ...r && {
                                sendAs: qn(r.id, r.accessHash)
                            }
                        }), {
                            shouldThrow: !0,
                            shouldIgnoreUpdates: !0
                        });
                        e && yc(g, e)
                    } catch (e) {
                        Object.values(g).forEach((t => {
                            Pd({
                                "@type": "updateMessageSendFailed",
                                chatId: n.id,
                                localId: t.id,
                                error: e.message
                            })
                        }))
                    }
                }
                async function tc(e) {
                    let {
                        chat: t,
                        timestamp: n
                    } = e;
                    const s = await za(new ue.Api.messages.GetHistory({
                        peer: qn(t.id, t.accessHash),
                        offsetDate: n,
                        addOffset: -1,
                        limit: 1
                    }));
                    if (s && !(s instanceof ue.Api.messages.MessagesNotModified) && s.messages && s.messages.length) return s.messages[0].id
                }
                async function nc(e) {
                    let {
                        chat: t
                    } = e;
                    const {
                        id: n,
                        accessHash: s
                    } = t, i = await za(new ue.Api.messages.GetScheduledHistory({
                        peer: qn(n, s)
                    }), {
                        abortControllerChatId: n
                    });
                    if (!i || i instanceof ue.Api.messages.MessagesNotModified || !i.messages) return;
                    ic(i);
                    const a = i.messages.map(Cs).filter(Boolean);
                    return wi(i.messages), {
                        messages: a
                    }
                }
                async function sc(e) {
                    let {
                        chat: t,
                        ids: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t;
                    await za(new ue.Api.messages.SendScheduledMessages({
                        peer: qn(s, i),
                        id: n
                    }))
                }

                function ic(e) {
                    We(e.users), We(e.chats), e.messages.forEach((e => {
                        Fe(e)
                    }))
                }
                async function ac(e) {
                    let {
                        chat: t,
                        threadId: n
                    } = e;
                    const s = await za(new ue.Api.messages.Search({
                        peer: qn(t.id, t.accessHash),
                        filter: new ue.Api.InputMessagesFilterPinned,
                        q: "",
                        limit: y,
                        topMsgId: Number(n)
                    }), {
                        abortControllerChatId: t.id,
                        abortControllerThreadId: n
                    });
                    if (!s || s instanceof ue.Api.messages.MessagesNotModified || !s.messages) return;
                    ic(s);
                    const i = s.chats.map((e => gn(e))).filter(Boolean),
                        a = s.users.map(_s).filter(Boolean),
                        o = s.messages.map(Cs).filter(Boolean);
                    return wi(s.messages), {
                        messages: o,
                        users: a,
                        chats: i
                    }
                }
                async function oc(e) {
                    let {
                        chat: t,
                        messageId: n
                    } = e;
                    const s = await za(new ue.Api.messages.GetMessageReadParticipants({
                        peer: qn(t.id, t.accessHash),
                        msgId: n
                    }));
                    return s ? s.reduce(((e, t) => (e[t.userId.toString()] = t.date, e)), {}) : void 0
                }
                async function rc(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.channels.GetSendAs({
                        peer: qn(t.id, t.accessHash)
                    }), {
                        shouldIgnoreErrors: !0,
                        abortControllerChatId: t.id
                    });
                    if (n) return We(n.users), We(n.chats), {
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean),
                        sendAs: n.peers.map(Un)
                    }
                }

                function dc(e) {
                    let {
                        sendAs: t,
                        chat: n
                    } = e;
                    return za(new ue.Api.messages.SaveDefaultSendAs({
                        peer: qn(n.id, n.accessHash),
                        sendAs: qn(t.id, t.accessHash)
                    }))
                }
                async function cc(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.channels.GetSponsoredMessages({
                        channel: qn(t.id, t.accessHash)
                    }));
                    if (n && !(n instanceof ue.Api.messages.SponsoredMessagesEmpty) && n.messages.length) return ic(n), {
                        messages: n.messages.map(vs).filter(Boolean),
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean)
                    }
                }
                async function uc(e) {
                    let {
                        chat: t,
                        random: n
                    } = e;
                    await za(new ue.Api.channels.ViewSponsoredMessage({
                        channel: qn(t.id, t.accessHash),
                        randomId: $e(n)
                    }))
                }

                function lc(e) {
                    let {
                        chat: t,
                        random: n
                    } = e;
                    return za(new ue.Api.channels.ClickSponsoredMessage({
                        channel: qn(t.id, t.accessHash),
                        randomId: $e(n)
                    }))
                }
                async function pc(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.messages.ReadMentions({
                        peer: qn(t.id, t.accessHash)
                    }));
                    n && (pa(t, n), n.offset && await pc({
                        chat: t
                    }))
                }
                async function fc(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.messages.ReadReactions({
                        peer: qn(t.id, t.accessHash)
                    }));
                    n && (pa(t, n), n.offset && await fc({
                        chat: t
                    }))
                }
                async function hc(e) {
                    let {
                        chat: t,
                        ...n
                    } = e;
                    const s = await za(new ue.Api.messages.GetUnreadMentions({
                        peer: qn(t.id, t.accessHash),
                        limit: R,
                        ...n
                    }));
                    if (!s || s instanceof ue.Api.messages.MessagesNotModified || !s.messages) return;
                    ic(s);
                    const i = s.messages.map(Cs).filter(Boolean);
                    return wi(s.messages), {
                        messages: i,
                        users: s.users.map(_s).filter(Boolean),
                        chats: s.chats.map((e => gn(e))).filter(Boolean)
                    }
                }
                async function mc(e) {
                    let {
                        chat: t,
                        ...n
                    } = e;
                    const s = await za(new ue.Api.messages.GetUnreadReactions({
                        peer: qn(t.id, t.accessHash),
                        limit: B,
                        ...n
                    }));
                    if (!s || s instanceof ue.Api.messages.MessagesNotModified || !s.messages) return;
                    ic(s);
                    const i = s.messages.map(Cs).filter(Boolean);
                    return wi(s.messages), {
                        messages: i,
                        users: s.users.map(_s).filter(Boolean),
                        chats: s.chats.map((e => gn(e))).filter(Boolean)
                    }
                }
                async function gc(e) {
                    let {
                        chat: t,
                        messageId: n
                    } = e;
                    const s = await za(new ue.Api.messages.TranscribeAudio({
                        msgId: n,
                        peer: qn(t.id, t.accessHash)
                    }));
                    if (s) return Pd({
                        "@type": "updateTranscribedAudio",
                        isPending: s.pending,
                        transcriptionId: s.transcriptionId.toString(),
                        text: s.text
                    }), s.transcriptionId.toString()
                }
                async function Ac(e) {
                    let t;
                    const n = "chat" in e;
                    if (n) {
                        const {
                            chat: n,
                            messageIds: s,
                            toLanguageCode: i
                        } = e;
                        t = await za(new ue.Api.messages.TranslateText({
                            peer: qn(n.id, n.accessHash),
                            id: s,
                            toLang: i
                        }))
                    } else {
                        const {
                            text: n,
                            toLanguageCode: s
                        } = e;
                        t = await za(new ue.Api.messages.TranslateText({
                            text: n.map((e => ps(e))),
                            toLang: s
                        }))
                    }
                    if (!t) return;
                    const s = t.result.map((e => It(e)));
                    return n && Pd({
                        "@type": "updateMessageTranslations",
                        chatId: e.chat.id,
                        messageIds: e.messageIds,
                        translations: s,
                        toLanguageCode: e.toLanguageCode
                    }), s
                }

                function yc(e, t) {
                    "updates" in t ? t.updates.forEach((t => {
                        t instanceof ue.Api.UpdateMessageID ? wc(e[t.randomId.toString()], t) : Va(t)
                    })) : Va(t)
                }

                function wc(e, t) {
                    let n, s;
                    if (t instanceof ue.Api.UpdateShortSentMessage || t instanceof ue.Api.UpdateMessageID ? n = t : "updates" in t && (n = t.updates.find((e => e instanceof ue.Api.UpdateMessageID))), !n) return void Va(t);
                    n instanceof ue.Api.UpdateShortSentMessage && (e.content.text && n.entities && (s = {
                        text: Rt(e.content.text.text, n.entities)
                    }), n.media && (s = {
                        ...s,
                        ...Ut(n.media, {
                            peerId: _n(e.chatId),
                            id: n.id
                        })
                    }), Fe($n(n.id, e.chatId, n)));
                    const i = "date" in n && 1e3 * n.date < Date.now() + 1e3 * ot();
                    Pd({
                        "@type": e.isScheduled && !i ? "updateScheduledMessageSendSucceeded" : "updateMessageSendSucceeded",
                        chatId: e.chatId,
                        localId: e.id,
                        message: {
                            ...e,
                            ...s && {
                                content: {
                                    ...e.content,
                                    ...s
                                }
                            },
                            id: n.id,
                            sendingState: void 0,
                            ..."date" in n && {
                                date: n.date
                            }
                        }
                    }), Va(t)
                }
                async function Ic(e) {
                    let {
                        chat: t,
                        messageId: n
                    } = e;
                    const {
                        id: s,
                        accessHash: i
                    } = t, a = qn(s, i), o = await za(new ue.Api.messages.GetOutboxReadDate({
                        peer: a,
                        msgId: n
                    }), {
                        shouldThrow: !0
                    });
                    if (o) return {
                        date: o.date
                    }
                }
                async function bc() {
                    const e = await za(new ue.Api.messages.GetQuickReplies({}));
                    if (!e || e instanceof ue.Api.messages.QuickRepliesNotModified) return;
                    ic(e);
                    const t = e.messages.map(Cs).filter(Boolean);
                    return wi(e.messages), {
                        messages: t,
                        chats: e.chats.map((e => gn(e))).filter(Boolean),
                        users: e.users.map(_s).filter(Boolean),
                        quickReplies: e.quickReplies.map(xs)
                    }
                }
                async function Sc(e) {
                    let {
                        chat: t,
                        shortcutId: n
                    } = e;
                    const s = await za(new ue.Api.messages.GetQuickReplyMessages({
                        shortcutId: n
                    }));
                    if (!s || s instanceof ue.Api.messages.MessagesNotModified) return;
                    const i = s.messages.map((e => e.id)),
                        a = i.map(Jn),
                        o = await za(new ue.Api.messages.SendQuickReplyMessages({
                            peer: qn(t.id, t.accessHash),
                            shortcutId: n,
                            id: i,
                            randomId: a
                        }), {
                            shouldIgnoreUpdates: !0
                        });
                    if (o) {
                        if ("updates" in o) {
                            const e = o.updates.filter((e => !(e instanceof ue.Api.UpdateMessageID)));
                            o.updates = e
                        }
                        Va(o)
                    }
                }
                async function vc(e) {
                    let {
                        id: t,
                        chat: n,
                        shouldIncludeThread: s,
                        shouldIncludeGrouped: i
                    } = e;
                    const a = await za(new ue.Api.channels.ExportMessageLink({
                        channel: jn(n.id, n.accessHash),
                        id: t,
                        thread: s || void 0,
                        grouped: i || void 0
                    }));
                    return a?.link
                }
                let Cc, Pc, Mc, Tc;
                async function Bc(e) {
                    let {
                        id: t,
                        accessHash: n
                    } = e;
                    const s = jn(t, n);
                    if (!(s instanceof ue.Api.InputUser)) return;
                    const i = await za(new ue.Api.users.GetFullUser({
                        id: s
                    }));
                    if (!i) return;
                    Oc(i), We(i.users), We(i.chats), i.fullUser.profilePhoto && Oe(i.fullUser.profilePhoto), i.fullUser.personalPhoto && Oe(i.fullUser.personalPhoto), i.fullUser.fallbackPhoto && Oe(i.fullUser.fallbackPhoto);
                    const a = i.fullUser.botInfo;
                    a?.descriptionPhoto && Oe(a.descriptionPhoto), a?.descriptionDocument instanceof ue.Api.Document && (Ue.documents[a.descriptionDocument.id.toString()] = a.descriptionDocument), i.fullUser.businessIntro?.sticker instanceof ue.Api.Document && (Ue.documents[i.fullUser.businessIntro.sticker.id.toString()] = i.fullUser.businessIntro.sticker);
                    const o = Fs(i),
                        r = i.users.map(_s).filter(Boolean),
                        d = i.chats.map((e => gn(e))).filter(Boolean),
                        c = r.find((e => {
                            let {
                                id: n
                            } = e;
                            return n === t
                        }));
                    return Cc({
                        "@type": "updateUser",
                        id: t,
                        user: c,
                        fullInfo: o
                    }), {
                        user: c,
                        fullInfo: o,
                        users: r,
                        chats: d
                    }
                }
                async function Rc(e, t, n) {
                    const s = await za(new ue.Api.messages.GetCommonChats({
                        userId: jn(e, t),
                        maxId: n ? as(n, Fn(n)) : void 0,
                        limit: I
                    }));
                    if (!s) return;
                    Oc(s);
                    const i = [],
                        a = [];
                    return s.chats.forEach((e => {
                        const t = gn(e);
                        t && (a.push(t), i.push(t.id))
                    })), {
                        chats: a,
                        chatIds: i,
                        isFullyLoaded: i.length < I
                    }
                }
                async function Uc() {
                    const e = await za(new ue.Api.help.GetNearestDc);
                    return e?.country
                }
                async function kc() {
                    const e = await za(new ue.Api.contacts.GetTopPeers({
                        correspondents: !0
                    }));
                    if (!(e instanceof ue.Api.contacts.TopPeers)) return;
                    const t = e.users.map(_s).filter((e => Boolean(e) && !e.isSelf));
                    return {
                        ids: t.map((e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })),
                        users: t
                    }
                }
                async function Dc() {
                    const e = await za(new ue.Api.contacts.GetContacts({
                        hash: ye()("0")
                    }));
                    if (!e || e instanceof ue.Api.contacts.ContactsNotModified) return;
                    We(e.users);
                    const {
                        users: t,
                        userStatusesById: n
                    } = Os(e.users);
                    return {
                        users: t,
                        userStatusesById: n,
                        chats: e.users.map((e => gn(e))).filter(Boolean)
                    }
                }
                async function Ec(e) {
                    let {
                        users: t
                    } = e;
                    const n = await za(new ue.Api.users.GetUsers({
                        id: t.map((e => {
                            let {
                                id: t,
                                accessHash: n
                            } = e;
                            return qn(t, n)
                        }))
                    }));
                    if (n && n.length) return We(n), Os(n)
                }
                async function xc(e) {
                    let {
                        phone: t,
                        firstName: n,
                        lastName: s
                    } = e;
                    const i = await za(new ue.Api.contacts.ImportContacts({
                        contacts: [Yn({
                            phone: t || "",
                            firstName: n || "",
                            lastName: s || ""
                        })]
                    }));
                    return i instanceof ue.Api.contacts.ImportedContacts && i.users.length && ze(i.users[0]), i?.imported.length ? fe(i.imported[0].userId, "user") : void 0
                }

                function Nc(e) {
                    let {
                        id: t,
                        accessHash: n,
                        phoneNumber: s = "",
                        firstName: i = "",
                        lastName: a = "",
                        shouldSharePhoneNumber: o = !1
                    } = e;
                    return za(new ue.Api.contacts.AddContact({
                        id: jn(t, n),
                        firstName: i,
                        lastName: a,
                        phone: s,
                        ...o && {
                            addPhonePrivacyException: o
                        }
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Hc(e) {
                    let {
                        id: t,
                        accessHash: n
                    } = e;
                    const s = jn(t, n);
                    s instanceof ue.Api.InputUser && await za(new ue.Api.contacts.DeleteContacts({
                        id: [s]
                    })) && Cc({
                        "@type": "deleteContact",
                        id: t
                    })
                }
                async function Gc(e) {
                    let {
                        peer: t,
                        offset: n = 0,
                        limit: s = 0
                    } = e;
                    const i = "title" in t ? t : void 0,
                        a = i ? void 0 : t;
                    if (a) {
                        const {
                            id: e,
                            accessHash: t
                        } = a, i = await za(new ue.Api.photos.GetUserPhotos({
                            userId: jn(e, t),
                            limit: s,
                            offset: n,
                            maxId: ye()("0")
                        }));
                        if (!i) return;
                        Oc(i);
                        const o = i instanceof ue.Api.photos.PhotosSlice ? i.count : i.photos.length,
                            r = n + i.photos.length,
                            d = r < o ? r : void 0;
                        return {
                            count: o,
                            photos: i.photos.filter((e => e instanceof ue.Api.Photo)).map((e => mt(e))),
                            users: i.users.map(_s).filter(Boolean),
                            nextOffsetId: d
                        }
                    }
                    if (i?.isRestricted) return;
                    const o = await Jd({
                        chat: i,
                        type: "profilePhoto",
                        limit: s
                    });
                    if (!o) return;
                    const {
                        messages: r,
                        users: d,
                        totalCount: c,
                        nextOffsetId: u
                    } = o;
                    return {
                        count: c,
                        photos: r.map((e => e.content.action.photo)).filter(Boolean),
                        users: d,
                        nextOffsetId: u
                    }
                }

                function Fc(e) {
                    const {
                        id: t,
                        accessHash: n
                    } = e;
                    return za(new ue.Api.messages.ReportSpam({
                        peer: qn(t, n)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function _c(e, t) {
                    return za(new ue.Api.account.UpdateEmojiStatus({
                        emojiStatus: ls(e, t)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function qc(e) {
                    const t = e.map((e => as(e, "user")));
                    return za(new ue.Api.contacts.EditCloseFriends({
                        id: t
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Oc(e) {
                    "chats" in e && We(e.chats), "photos" in e && e.photos.forEach(Oe), "users" in e && We(e.users)
                }
                async function jc(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetEmojiStickers({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.AllStickersNotModified)) return n.sets.forEach((e => {
                        (e.thumbs?.length || e.thumbDocumentId) && (Ue.stickerSets[String(e.id)] = e)
                    })), {
                        hash: String(n.hash),
                        sets: n.sets.map(Ct)
                    }
                }
                async function Lc(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetAllStickers({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.AllStickersNotModified)) return n.sets.forEach((e => {
                        e.thumbs?.length && (Ue.stickerSets[String(e.id)] = e)
                    })), {
                        hash: String(n.hash),
                        sets: n.sets.map(Ct)
                    }
                }
                async function Vc(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetRecentStickers({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.RecentStickersNotModified)) return {
                        hash: String(n.hash),
                        stickers: Tt(n.stickers.slice(0, N))
                    }
                }
                async function zc(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetFavedStickers({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.FavedStickersNotModified)) return {
                        hash: String(n.hash),
                        stickers: Tt(n.stickers)
                    }
                }
                async function Wc(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetFeaturedStickers({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.FeaturedStickersNotModified)) return {
                        hash: String(n.hash),
                        isPremium: Boolean(n.premium),
                        sets: n.sets.map(Pt)
                    }
                }
                async function Jc() {
                    const e = await za(new ue.Api.messages.GetFeaturedEmojiStickers({
                        hash: ye()(0)
                    }));
                    if (e && !(e instanceof ue.Api.messages.FeaturedStickersNotModified)) return e.sets.forEach((e => {
                        let {
                            set: t
                        } = e;
                        t.thumbDocumentId && (Ue.stickerSets[String(t.id)] = t)
                    })), {
                        isPremium: Boolean(e.premium),
                        sets: e.sets.map(Pt)
                    }
                }
                async function Kc(e) {
                    let {
                        sticker: t,
                        unfave: n
                    } = e;
                    const s = new ue.Api.messages.FaveSticker({
                        id: Vn(t),
                        unfave: n
                    });
                    await za(s) && Pc({
                        "@type": "updateFavoriteStickers"
                    })
                }

                function $c(e) {
                    let {
                        sticker: t
                    } = e;
                    return za(new ue.Api.messages.SaveRecentSticker({
                        id: Vn(t),
                        unsave: !0
                    }))
                }

                function Qc() {
                    return za(new ue.Api.messages.ClearRecentStickers)
                }
                async function Zc(e) {
                    let {
                        stickerSetInfo: t
                    } = e;
                    if ("isMissing" in t) return;
                    const n = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: "id" in t ? Ln(t.id, t.accessHash) : (s = t.shortName, new ue.Api.InputStickerSetShortName({
                            shortName: s
                        }))
                    }), {
                        shouldThrow: !0
                    });
                    var s;
                    return n instanceof ue.Api.messages.StickerSet ? (Ue.stickerSets[String(n.set.id)] = n.set, {
                        set: Ct(n.set),
                        stickers: Tt(n.documents),
                        packs: Mt(n.packs)
                    }) : void 0
                }
                async function Yc(e) {
                    let {
                        documentId: t
                    } = e;
                    if (!t.length) return;
                    const n = await za(new ue.Api.messages.GetCustomEmojiDocuments({
                        documentId: t.map((e => ye()(e)))
                    }));
                    return n ? Tt(n) : void 0
                }
                async function Xc() {
                    const e = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: new ue.Api.InputStickerSetAnimatedEmoji
                    }));
                    if (e instanceof ue.Api.messages.StickerSet) return {
                        set: Ct(e.set),
                        stickers: Tt(e.documents)
                    }
                }
                async function eu() {
                    const e = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: new ue.Api.InputStickerSetAnimatedEmojiAnimations
                    }));
                    if (e instanceof ue.Api.messages.StickerSet) return {
                        set: Ct(e.set),
                        stickers: Tt(e.documents)
                    }
                }
                async function tu() {
                    const e = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: new ue.Api.InputStickerSetEmojiGenericAnimations
                    }));
                    if (e instanceof ue.Api.messages.StickerSet) return {
                        set: Ct(e.set),
                        stickers: Tt(e.documents)
                    }
                }
                async function nu() {
                    const e = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: new ue.Api.InputStickerSetPremiumGifts
                    }));
                    if (e instanceof ue.Api.messages.StickerSet) return {
                        set: Ct(e.set),
                        stickers: Tt(e.documents)
                    }
                }
                async function su() {
                    const e = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: new ue.Api.InputStickerSetEmojiDefaultTopicIcons
                    }));
                    if (e instanceof ue.Api.messages.StickerSet) return {
                        set: Ct(e.set),
                        stickers: Tt(e.documents)
                    }
                }
                async function iu() {
                    const e = await za(new ue.Api.messages.GetStickerSet({
                        stickerset: new ue.Api.InputStickerSetEmojiDefaultStatuses
                    }));
                    if (e instanceof ue.Api.messages.StickerSet) return {
                        set: Ct(e.set),
                        stickers: Tt(e.documents)
                    }
                }
                async function au(e) {
                    let {
                        query: t,
                        hash: n = "0"
                    } = e;
                    const s = await za(new ue.Api.messages.SearchStickerSets({
                        q: t,
                        hash: ye()(n)
                    }));
                    if (s && !(s instanceof ue.Api.messages.FoundStickerSetsNotModified)) return {
                        hash: String(s.hash),
                        sets: s.sets.map(Pt)
                    }
                }
                async function ou(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetSavedGifs({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.SavedGifsNotModified)) return {
                        hash: String(n.hash),
                        gifs: hu(n.gifs)
                    }
                }

                function ru(e) {
                    let {
                        gif: t,
                        shouldUnsave: n
                    } = e;
                    return za(new ue.Api.messages.SaveGif({
                        id: Vn(t),
                        unsave: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function du(e) {
                    let {
                        stickerSetId: t,
                        accessHash: n
                    } = e;
                    await za(new ue.Api.messages.InstallStickerSet({
                        stickerset: Ln(t, n)
                    })) && Pc({
                        "@type": "updateStickerSet",
                        id: t,
                        stickerSet: {
                            installedDate: Date.now()
                        }
                    })
                }
                async function cu(e) {
                    let {
                        stickerSetId: t,
                        accessHash: n
                    } = e;
                    await za(new ue.Api.messages.UninstallStickerSet({
                        stickerset: Ln(t, n)
                    })) && Pc({
                        "@type": "updateStickerSet",
                        id: t,
                        stickerSet: {
                            installedDate: void 0
                        }
                    })
                }
                async function uu(e) {
                    let {
                        query: t,
                        offset: n = "",
                        username: s = K
                    } = e;
                    if (!Mc) {
                        const e = await za(new ue.Api.contacts.ResolveUsername({
                            username: s
                        }));
                        if (!(e && e.users[0] instanceof ue.Api.User)) return;
                        Mc = new ue.Api.InputUser({
                            userId: e.peer.userId,
                            accessHash: e.users[0].accessHash
                        })
                    }
                    const i = await za(new ue.Api.messages.GetInlineBotResults({
                        bot: Mc,
                        peer: new ue.Api.InputPeerEmpty,
                        query: t,
                        offset: n
                    }));
                    if (!i) return;
                    const a = i.results.map((e => {
                        if (e instanceof ue.Api.BotInlineMediaResult) return e.document
                    })).filter(Boolean);
                    return {
                        nextOffset: i.nextOffset,
                        gifs: hu(a)
                    }
                }
                async function lu(e) {
                    let {
                        emoji: t,
                        hash: n = "0"
                    } = e;
                    const s = await za(new ue.Api.messages.GetStickers({
                        emoticon: t,
                        hash: ye()(n)
                    }));
                    if (s && !(s instanceof ue.Api.messages.StickersNotModified)) return {
                        stickers: Tt(s.stickers),
                        hash: String(s.hash)
                    }
                }
                async function pu(e) {
                    let {
                        language: t,
                        fromVersion: n
                    } = e;
                    const s = await za(new ue.Api.messages.GetEmojiKeywordsDifference({
                        langCode: t,
                        fromVersion: n
                    }));
                    if (s) return {
                        language: s.langCode,
                        version: s.version,
                        keywords: s.keywords.reduce(((e, t) => (e[t.keyword] = t.emoticons, e)), {})
                    }
                }
                async function fu() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0";
                    const t = await za(new ue.Api.account.GetRecentEmojiStatuses({
                        hash: ye()(e)
                    }));
                    if (!t || t instanceof ue.Api.account.EmojiStatusesNotModified) return;
                    const n = t.statuses.slice(0, H).map(ge).filter(Boolean).map((e => {
                            let {
                                documentId: t
                            } = e;
                            return t
                        })),
                        s = await Yc({
                            documentId: n
                        });
                    return {
                        hash: String(t.hash),
                        emojiStatuses: s
                    }
                }

                function hu(e) {
                    return e.map((e => {
                        if (e instanceof ue.Api.Document) {
                            const t = kt(e);
                            if (t) return Ue.documents[String(e.id)] = e, t
                        }
                    })).filter(Boolean)
                }
                const mu = new Set(["USERNAME_PURCHASE_AVAILABLE", "USERNAME_INVALID"]);
                async function gu(e) {
                    let {
                        username: t
                    } = e;
                    try {
                        return {
                            result: await za(new ue.Api.channels.CheckUsername({
                                channel: new ue.Api.InputChannelEmpty,
                                username: t
                            }), {
                                shouldThrow: !0
                            }),
                            error: void 0
                        }
                    } catch (e) {
                        const t = e.message;
                        if (mu.has(t)) return {
                            result: !1,
                            error: t
                        };
                        throw e
                    }
                }
                async function Au(e) {
                    let {
                        chat: t,
                        username: n
                    } = e;
                    const s = await za(new ue.Api.channels.UpdateUsername({
                        channel: jn(t.id, t.accessHash),
                        username: n
                    }));
                    let i = n ? [{
                        username: n,
                        isEditable: !0,
                        isActive: !0
                    }] : [];
                    return t.usernames && (i = i.concat(t.usernames.filter((e => e.username && !e.isEditable)))), s && Tc({
                        "@type": "updateChat",
                        id: t.id,
                        chat: {
                            usernames: i.length ? i : void 0
                        }
                    }), s
                }
                async function yu(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.channels.DeactivateAllUsernames({
                        channel: jn(t.id, t.accessHash)
                    }));
                    if (n) {
                        const e = t.usernames ? t.usernames.map((e => ({
                            ...e,
                            isActive: !1
                        }))).filter((e => e.username)) : void 0;
                        Tc({
                            "@type": "updateChat",
                            id: t.id,
                            chat: {
                                usernames: e
                            }
                        })
                    }
                    return n
                }
                async function wu(e) {
                    let {
                        chat: t,
                        usageLimit: n,
                        expireDate: s
                    } = e;
                    const i = await za(new ue.Api.messages.ExportChatInvite({
                        peer: qn(t.id, t.accessHash),
                        usageLimit: n,
                        expireDate: s
                    }));
                    if (i instanceof ue.Api.ChatInviteExported) return Tc({
                        "@type": "updateChatFullInfo",
                        id: t.id,
                        fullInfo: {
                            inviteLink: i.link
                        }
                    }), i.link
                }
                async function Iu(e) {
                    let {
                        peer: t,
                        admin: n,
                        limit: s = 0,
                        isRevoked: i
                    } = e;
                    const a = await za(new ue.Api.messages.GetExportedChatInvites({
                        peer: qn(t.id, t.accessHash),
                        adminId: jn(n.id, n.accessHash),
                        limit: s,
                        revoked: i || void 0
                    }), {
                        abortControllerChatId: t.id
                    });
                    if (a) return We(a.users), {
                        invites: a.invites.filter((e => e instanceof ue.Api.ChatInviteExported)).map(Tn),
                        users: a.users.map(_s).filter(Boolean)
                    }
                }
                async function bu(e) {
                    let {
                        peer: t,
                        isRevoked: n,
                        link: s,
                        expireDate: i,
                        usageLimit: a,
                        isRequestNeeded: o,
                        title: r
                    } = e;
                    const d = await za(new ue.Api.messages.EditExportedChatInvite({
                        link: s,
                        peer: qn(t.id, t.accessHash),
                        expireDate: i,
                        usageLimit: o ? void 0 : a,
                        requestNeeded: o,
                        title: r,
                        revoked: n || void 0
                    }));
                    if (d) {
                        if (We(d.users), d instanceof ue.Api.messages.ExportedChatInvite && d.invite instanceof ue.Api.ChatInviteExported) {
                            const e = Tn(d.invite);
                            return {
                                oldInvite: e,
                                newInvite: e,
                                users: d.users.map(_s).filter(Boolean)
                            }
                        }
                        if (d instanceof ue.Api.messages.ExportedChatInviteReplaced && d.invite instanceof ue.Api.ChatInviteExported && d.newInvite instanceof ue.Api.ChatInviteExported) return {
                            oldInvite: Tn(d.invite),
                            newInvite: Tn(d.newInvite),
                            users: d.users.map(_s).filter(Boolean)
                        }
                    }
                }
                async function Su(e) {
                    let {
                        peer: t,
                        expireDate: n,
                        usageLimit: s,
                        isRequestNeeded: i,
                        title: a
                    } = e;
                    const o = await za(new ue.Api.messages.ExportChatInvite({
                        peer: qn(t.id, t.accessHash),
                        expireDate: n,
                        usageLimit: i ? void 0 : s,
                        requestNeeded: i || void 0,
                        title: a
                    }));
                    if (o instanceof ue.Api.ChatInviteExported) return Tn(o)
                }
                async function vu(e) {
                    let {
                        peer: t,
                        link: n
                    } = e;
                    return await za(new ue.Api.messages.DeleteExportedChatInvite({
                        peer: qn(t.id, t.accessHash),
                        link: n
                    }))
                }
                async function Cu(e) {
                    let {
                        peer: t,
                        admin: n
                    } = e;
                    return await za(new ue.Api.messages.DeleteRevokedExportedChatInvites({
                        peer: qn(t.id, t.accessHash),
                        adminId: jn(n.id, n.accessHash)
                    }))
                }
                async function Pu(e) {
                    let {
                        peer: t,
                        link: n,
                        offsetDate: s = 0,
                        offsetUser: i,
                        limit: a = 0,
                        isRequested: o
                    } = e;
                    const r = await za(new ue.Api.messages.GetChatInviteImporters({
                        peer: qn(t.id, t.accessHash),
                        link: n,
                        offsetDate: s,
                        offsetUser: i ? jn(i.id, i.accessHash) : new ue.Api.InputUserEmpty,
                        limit: a,
                        requested: o || void 0
                    }), {
                        abortControllerChatId: t.id
                    });
                    if (!r) return;
                    const d = r.users.map((e => _s(e))).filter(Boolean);
                    return We(r.users), {
                        importers: r.importers.map((e => function(e) {
                            const {
                                userId: t,
                                date: n,
                                about: s,
                                requested: i,
                                viaChatlist: a
                            } = e;
                            return {
                                userId: fe(t, "user"),
                                date: n,
                                about: s,
                                isRequested: i,
                                isFromChatList: a
                            }
                        }(e))),
                        users: Ze(d, "id")
                    }
                }

                function Mu(e) {
                    let {
                        peer: t,
                        user: n,
                        isApproved: s
                    } = e;
                    return za(new ue.Api.messages.HideChatJoinRequest({
                        peer: qn(t.id, t.accessHash),
                        userId: jn(n.id, n.accessHash),
                        approved: s || void 0
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Tu(e) {
                    let {
                        peer: t,
                        isApproved: n,
                        link: s
                    } = e;
                    return za(new ue.Api.messages.HideAllChatJoinRequests({
                        peer: qn(t.id, t.accessHash),
                        approved: n || void 0,
                        link: s
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Bu(e) {
                    const {
                        id: t,
                        accessHash: n
                    } = e;
                    return za(new ue.Api.messages.HidePeerSettingsBar({
                        peer: qn(t, n)
                    }))
                }
                var Ru = n(48287).hp;

                function Uu(e) {
                    const {
                        emojies_sounds: t
                    } = e;
                    return t ? Object.keys(t).reduce(((e, n) => {
                        const s = t[n];
                        return Ue.documents[s.id] = new ue.Api.Document({
                            id: ye()(s.id),
                            accessHash: ye()(s.access_hash),
                            dcId: 1,
                            mimeType: "audio/ogg",
                            fileReference: Ru.alloc(0),
                            size: ye()(0)
                        }), e[n] = s.id, e
                    }), {}) : {}
                }

                function ku(e, t, n) {
                    return [e[`${t}_default`] || se[n][0], e[`${t}_premium`] || se[n][1]]
                }
                const Du = ["ar", "fa", "id", "ko", "uz", "en"];

                function Eu(e) {
                    let {
                        firstName: t,
                        lastName: n,
                        about: s
                    } = e;
                    return za(new ue.Api.account.UpdateProfile({
                        firstName: t || "",
                        lastName: n || "",
                        about: s || ""
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function xu(e) {
                    try {
                        return {
                            result: await za(new ue.Api.account.CheckUsername({
                                username: e
                            }), {
                                shouldThrow: !0
                            }),
                            error: void 0
                        }
                    } catch (e) {
                        const t = e.message;
                        if (mu.has(t)) return {
                            result: !1,
                            error: t
                        };
                        throw e
                    }
                }

                function Nu(e) {
                    return za(new ue.Api.account.UpdateUsername({
                        username: e
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Hu(e, t) {
                    const n = e ? Zn(e) : new ue.Api.InputPhotoEmpty,
                        s = await za(new ue.Api.photos.UpdateProfilePhoto({
                            id: n,
                            ...t ? {
                                fallback: !0
                            } : void 0
                        }));
                    if (s) return We(s.users), s.photo instanceof ue.Api.Photo ? (Oe(s.photo), {
                        users: s.users.map(_s).filter(Boolean),
                        photo: mt(s.photo)
                    }) : void 0
                }
                async function Gu(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    const a = await Ka(e),
                        o = await za(new ue.Api.photos.UploadProfilePhoto({
                            ...i ? {
                                bot: qn(i.id, i.accessHash)
                            } : void 0,
                            ...n ? {
                                video: a,
                                videoStartTs: s
                            } : {
                                file: a
                            },
                            ...t ? {
                                fallback: !0
                            } : void 0
                        }));
                    if (o) return We(o.users), o.photo instanceof ue.Api.Photo ? (Oe(o.photo), {
                        users: o.users.map(_s).filter(Boolean),
                        photo: mt(o.photo)
                    }) : void 0
                }
                async function Fu(e) {
                    let {
                        file: t,
                        isSuggest: n,
                        user: s
                    } = e;
                    const i = t ? await Ka(t) : void 0,
                        a = await za(new ue.Api.photos.UploadContactProfilePhoto({
                            userId: jn(s.id, s.accessHash),
                            file: i,
                            ...n ? {
                                suggest: !0
                            } : {
                                save: !0
                            }
                        }));
                    if (!a) return;
                    We(a.users);
                    const o = a.users.map(_s).filter(Boolean);
                    return a.photo instanceof ue.Api.Photo ? (Oe(a.photo), {
                        users: o,
                        photo: mt(a.photo)
                    }) : {
                        users: o,
                        photo: void 0
                    }
                }
                async function _u(e) {
                    const t = e.map(Zn).filter(Boolean),
                        n = await za(new ue.Api.photos.DeletePhotos({
                            id: t
                        }), {
                            shouldReturnTrue: !0
                        });
                    return n && e.forEach((e => {
                        delete Ue.photos[e.id]
                    })), n
                }
                async function qu() {
                    const e = await za(new ue.Api.account.GetWallPapers({
                        hash: ye()("0")
                    }));
                    if (!e || e instanceof ue.Api.account.WallPapersNotModified) return;
                    const t = e.wallpapers.filter((e => e instanceof ue.Api.WallPaper && e.document instanceof ue.Api.Document && !e.pattern && "application/x-tgwallpattern" !== e.document.mimeType));
                    return t.forEach((e => {
                        Ue.documents[String(e.document.id)] = e.document
                    })), {
                        wallpapers: t.map(Ls).filter(Boolean)
                    }
                }
                async function Ou(e) {
                    const t = await Ka(e),
                        n = await za(new ue.Api.account.UploadWallPaper({
                            file: t,
                            mimeType: e.type,
                            settings: new ue.Api.WallPaperSettings
                        }));
                    if (!(n && n instanceof ue.Api.WallPaper)) return;
                    const s = Ls(n);
                    return s ? (Ue.documents[String(n.document.id)] = n.document, {
                        wallpaper: s
                    }) : void 0
                }
                async function ju(e) {
                    let {
                        isOnlyStories: t
                    } = e;
                    const n = await za(new ue.Api.contacts.GetBlocked({
                        myStoriesFrom: t,
                        limit: w
                    }));
                    if (n) return yl(n), {
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean),
                        blockedIds: n.blocked.map((e => he(e.peerId))),
                        totalCount: n instanceof ue.Api.contacts.BlockedSlice ? n.count : n.blocked.length
                    }
                }

                function Lu(e) {
                    let {
                        user: t,
                        isOnlyStories: n
                    } = e;
                    return za(new ue.Api.contacts.Block({
                        id: qn(t.id, t.accessHash),
                        myStoriesFrom: n
                    }))
                }

                function Vu(e) {
                    let {
                        user: t,
                        isOnlyStories: n
                    } = e;
                    return za(new ue.Api.contacts.Unblock({
                        id: qn(t.id, t.accessHash),
                        myStoriesFrom: n
                    }))
                }
                async function zu() {
                    const e = await za(new ue.Api.account.GetAuthorizations);
                    if (e) return {
                        authorizations: Ze(e.authorizations.map(Vs), "hash"),
                        ttlDays: e.authorizationTtlDays
                    }
                }

                function Wu(e) {
                    return za(new ue.Api.account.ResetAuthorization({
                        hash: ye()(e)
                    }))
                }

                function Ju() {
                    return za(new ue.Api.auth.ResetAuthorizations)
                }
                async function Ku() {
                    const e = await za(new ue.Api.account.GetWebAuthorizations);
                    if (e) return We(e.users), {
                        users: e.users.map(_s).filter(Boolean),
                        webAuthorizations: Ze(e.authorizations.map(zs), "hash")
                    }
                }

                function $u(e) {
                    return za(new ue.Api.account.ResetWebAuthorization({
                        hash: ye()(e)
                    }))
                }

                function Qu() {
                    return za(new ue.Api.account.ResetWebAuthorizations)
                }
                async function Zu() {
                    const e = await za(new ue.Api.account.GetNotifyExceptions({
                        compareSound: !0
                    }), {
                        shouldIgnoreUpdates: !0
                    });
                    if (e instanceof ue.Api.Updates || e instanceof ue.Api.UpdatesCombined) return yl(e), e.updates.reduce(((e, t) => t instanceof ue.Api.UpdateNotifySettings && t.peer instanceof ue.Api.NotifyPeer ? (e.push(Ws(t.notifySettings, t.peer.peer)), e) : e), [])
                }
                async function Yu() {
                    const [e, t, n, s] = await Promise.all([za(new ue.Api.account.GetContactSignUpNotification), za(new ue.Api.account.GetNotifySettings({
                        peer: new ue.Api.InputNotifyUsers
                    })), za(new ue.Api.account.GetNotifySettings({
                        peer: new ue.Api.InputNotifyChats
                    })), za(new ue.Api.account.GetNotifySettings({
                        peer: new ue.Api.InputNotifyBroadcasts
                    }))]);
                    if (!t || !n || !s) return !1;
                    const {
                        silent: i,
                        muteUntil: a,
                        showPreviews: o
                    } = t, {
                        silent: r,
                        muteUntil: d,
                        showPreviews: c
                    } = n, {
                        silent: u,
                        muteUntil: l,
                        showPreviews: p
                    } = s;
                    return {
                        hasContactJoinedNotifications: !e,
                        hasPrivateChatsNotifications: !(i || "number" == typeof a && rt() < a),
                        hasPrivateChatsMessagePreview: o,
                        hasGroupNotifications: !(r || "number" == typeof d && rt() < d),
                        hasGroupMessagePreview: c,
                        hasBroadcastNotifications: !(u || "number" == typeof l && rt() < l),
                        hasBroadcastMessagePreview: p
                    }
                }

                function Xu(e) {
                    return za(new ue.Api.account.SetContactSignUpNotification({
                        silent: e
                    }))
                }

                function el(e, t) {
                    let n, {
                        isSilent: s,
                        shouldShowPreviews: i
                    } = t;
                    n = "contact" === e ? new ue.Api.InputNotifyUsers : "group" === e ? new ue.Api.InputNotifyChats : new ue.Api.InputNotifyBroadcasts;
                    const a = {
                        showPreviews: i,
                        silent: s,
                        muteUntil: s ? D : 0
                    };
                    return za(new ue.Api.account.UpdateNotifySettings({
                        peer: n,
                        settings: new ue.Api.InputPeerNotifySettings(a)
                    }))
                }
                async function tl(e) {
                    let {
                        langPack: t,
                        langCode: n
                    } = e;
                    const s = await za(new ue.Api.langpack.GetLangPack({
                        langPack: t,
                        langCode: n
                    }));
                    if (!s) return;
                    const {
                        strings: i,
                        keysToRemove: a
                    } = Ys(s.strings);
                    return {
                        version: s.version,
                        strings: i,
                        keysToRemove: a
                    }
                }
                async function nl(e) {
                    let {
                        langPack: t,
                        langCode: n,
                        fromVersion: s
                    } = e;
                    const i = await za(new ue.Api.langpack.GetDifference({
                        langPack: t,
                        langCode: n,
                        fromVersion: s
                    }));
                    if (!i) return;
                    const {
                        strings: a,
                        keysToRemove: o
                    } = Ys(i.strings);
                    return {
                        version: i.version,
                        strings: a,
                        keysToRemove: o
                    }
                }
                async function sl() {
                    const e = await za(new ue.Api.langpack.GetLanguages({
                        langPack: Y
                    }));
                    if (e) return e.map(Xs)
                }
                async function il(e) {
                    let {
                        langPack: t,
                        langCode: n
                    } = e;
                    const s = await za(new ue.Api.langpack.GetLanguage({
                        langPack: t,
                        langCode: n
                    }));
                    if (s) return Xs(s)
                }
                async function al(e) {
                    let {
                        sourceLangPacks: t,
                        langCode: n
                    } = e;
                    const s = (await Promise.all(t.map((e => za(new ue.Api.langpack.GetLangPack({
                        langPack: e,
                        langCode: Du.includes(n) ? `${n}-raw` : n
                    })))))).filter(Boolean).map(Qs);
                    if (s.length) return {
                        langPack: Object.assign({}, ...s.reverse())
                    }
                }
                async function ol(e) {
                    let {
                        langPack: t,
                        langCode: n,
                        keys: s
                    } = e;
                    const i = await za(new ue.Api.langpack.GetStrings({
                        langPack: t,
                        langCode: Du.includes(n) ? `${n}-raw` : n,
                        keys: s
                    }));
                    if (i) return i.map(Zs)
                }
                async function rl(e) {
                    const t = ns(e),
                        n = await za(new ue.Api.account.GetPrivacy({
                            key: t
                        }));
                    if (n) return yl(n), {
                        users: n.users.map(_s).filter(Boolean),
                        rules: wt(n.rules)
                    }
                }

                function dl(e) {
                    const t = Ga.session.getAuthKey().getKey();
                    return za(new ue.Api.account.RegisterDevice({
                        tokenType: 10,
                        secret: t,
                        appSandbox: !1,
                        otherUids: [],
                        token: e
                    }))
                }

                function cl(e) {
                    return za(new ue.Api.account.UnregisterDevice({
                        tokenType: 10,
                        otherUids: [],
                        token: e
                    }))
                }
                async function ul(e, t) {
                    const n = ns(e),
                        s = ms(t),
                        i = await za(new ue.Api.account.SetPrivacy({
                            key: n,
                            rules: s
                        }));
                    if (i) return yl(i), {
                        users: i.users.map(_s).filter(Boolean),
                        rules: wt(i.rules)
                    }
                }
                async function ll(e) {
                    await za(new ue.Api.account.UpdateStatus({
                        offline: !e
                    }))
                }
                async function pl() {
                    const e = await za(new ue.Api.account.GetContentSettings);
                    if (e) return {
                        isSensitiveEnabled: Boolean(e.sensitiveEnabled),
                        canChangeSensitive: Boolean(e.sensitiveCanChange)
                    }
                }

                function fl(e) {
                    return za(new ue.Api.account.SetContentSettings({
                        sensitiveEnabled: e || void 0
                    }))
                }
                async function hl(e) {
                    const t = await za(new ue.Api.help.GetAppConfig({
                        hash: e
                    }));
                    if (!t || t instanceof ue.Api.help.AppConfigNotModified) return;
                    const {
                        config: n,
                        hash: s
                    } = t;
                    return function(e, t) {
                        const n = Ks(e);
                        return {
                            emojiSounds: Uu(n),
                            seenByMaxChatMembers: n.chat_read_mark_size_threshold,
                            seenByExpiresAt: n.chat_read_mark_expire_period,
                            readDateExpiresAt: n.pm_read_date_expire_period,
                            autologinDomains: n.autologin_domains || [],
                            urlAuthDomains: n.url_auth_domains || [],
                            maxUniqueReactions: n.reactions_uniq_max ?? ne,
                            premiumBotUsername: n.premium_bot_username,
                            premiumInvoiceSlug: n.premium_invoice_slug,
                            premiumPromoOrder: n.premium_promo_order,
                            isPremiumPurchaseBlocked: n.premium_purchase_blocked,
                            isGiveawayGiftsPurchaseAvailable: n.giveaway_gifts_purchase_available,
                            defaultEmojiStatusesStickerSetId: n.default_emoji_statuses_stickerset_id,
                            topicsPinnedLimit: n.topics_pinned_limit,
                            maxUserReactionsDefault: n.reactions_user_max_default,
                            maxUserReactionsPremium: n.reactions_user_max_premium,
                            hiddenMembersMinCount: n.hidden_members_group_size_min,
                            giveawayAddPeersMax: n.giveaway_add_peers_max,
                            giveawayBoostsPerPremium: n.giveaway_boosts_per_premium,
                            giveawayCountriesMax: n.giveaway_countries_max,
                            boostsPerSentGift: n.boosts_per_sent_gift,
                            canDisplayAutoarchiveSetting: n.autoarchive_setting_available,
                            limits: {
                                uploadMaxFileparts: ku(n, "upload_max_fileparts", "uploadMaxFileparts"),
                                stickersFaved: ku(n, "stickers_faved_limit", "stickersFaved"),
                                savedGifs: ku(n, "saved_gifs_limit", "savedGifs"),
                                dialogFiltersChats: ku(n, "dialog_filters_chats_limit", "dialogFiltersChats"),
                                dialogFilters: ku(n, "dialog_filters_limit", "dialogFilters"),
                                dialogFolderPinned: ku(n, "dialogs_pinned_limit", "dialogFolderPinned"),
                                captionLength: ku(n, "caption_length_limit", "captionLength"),
                                channels: ku(n, "channels_limit", "channels"),
                                channelsPublic: ku(n, "channels_public_limit", "channelsPublic"),
                                aboutLength: ku(n, "about_length_limit", "aboutLength"),
                                chatlistInvites: ku(n, "chatlist_invites_limit", "chatlistInvites"),
                                chatlistJoined: ku(n, "chatlist_joined_limit", "chatlistJoined"),
                                recommendedChannels: ku(n, "recommended_channels_limit", "recommendedChannels"),
                                savedDialogsPinned: ku(n, "saved_dialogs_pinned_limit", "savedDialogsPinned")
                            },
                            hash: t,
                            areStoriesHidden: n.stories_all_hidden,
                            storyExpirePeriod: n.story_expire_period ?? ee,
                            storyViewersExpirePeriod: n.story_viewers_expire_period ?? te,
                            storyChangelogUserId: n.stories_changelog_user_id?.toString() ?? W,
                            maxPinnedStoriesCount: n.stories_pinned_to_top_count_max,
                            groupTranscribeLevelMin: n.group_transcribe_level_min,
                            canLimitNewMessagesWithoutPremium: n.new_noncontact_peers_require_premium_without_ownpremium,
                            bandwidthPremiumNotifyPeriod: n.upload_premium_speedup_notify_period,
                            bandwidthPremiumUploadSpeedup: n.upload_premium_speedup_upload,
                            bandwidthPremiumDownloadSpeedup: n.upload_premium_speedup_download,
                            channelRestrictAdsLevelMin: n.channel_restrict_sponsored_level_min
                        }
                    }(n, s)
                }
                async function ml() {
                    const e = await za(new ue.Api.help.GetConfig);
                    if (e) return function(e) {
                        const t = e.reactionsDefault && rn(e.reactionsDefault);
                        return {
                            expiresAt: e.expires,
                            gifSearchUsername: e.gifSearchUsername,
                            defaultReaction: t,
                            maxGroupSize: e.chatSizeMax,
                            autologinToken: e.autologinToken
                        }
                    }(e)
                }
                async function gl(e) {
                    const t = await za(new ue.Api.help.GetPeerColors({
                        hash: e
                    }));
                    if (!t) return;
                    const n = function(e) {
                        if (e instanceof ue.Api.help.PeerColors) return Ye(e.colors, (e => [e.colorId, {
                            isHidden: e.hidden,
                            colors: e.colors && ei(e.colors),
                            darkColors: e.darkColors && ei(e.darkColors)
                        }]))
                    }(t);
                    return n ? {
                        colors: n,
                        hash: t instanceof ue.Api.help.PeerColors ? t.hash : void 0
                    } : void 0
                }
                async function Al(e) {
                    const t = await za(new ue.Api.help.GetTimezonesList({
                        hash: e
                    }));
                    if (t && !(t instanceof ue.Api.help.TimezonesListNotModified)) return {
                        timezones: t.timezones.map(ti),
                        hash: t.hash
                    }
                }

                function yl(e) {
                    We(e.users), We(e.chats)
                }
                async function wl(e) {
                    let {
                        langCode: t = "en"
                    } = e;
                    const n = await za(new ue.Api.help.GetCountriesList({
                        langCode: t
                    }));
                    if (n instanceof ue.Api.help.CountriesList) return function(e) {
                        const t = e.filter((e => {
                            let {
                                hidden: t
                            } = e;
                            return !t
                        }));
                        return {
                            phoneCodes: t.map((e => e.countryCodes.map((t => Js(e, t))))).flat().sort(((e, t) => e.name ? e.name.localeCompare(t.name) : e.defaultName.localeCompare(t.defaultName))),
                            general: t.map((e => Js(e, e.countryCodes[0]))).sort(((e, t) => e.name ? e.name.localeCompare(t.name) : e.defaultName.localeCompare(t.defaultName)))
                        }
                    }(n.countries)
                }
                async function Il() {
                    const e = await za(new ue.Api.account.GetGlobalPrivacySettings);
                    if (e) return {
                        shouldArchiveAndMuteNewNonContact: Boolean(e.archiveAndMuteNewNoncontactPeers),
                        shouldHideReadMarks: Boolean(e.hideReadMarks),
                        shouldNewNonContactPeersRequirePremium: Boolean(e.newNoncontactPeersRequirePremium)
                    }
                }
                async function bl(e) {
                    let {
                        shouldArchiveAndMuteNewNonContact: t,
                        shouldHideReadMarks: n,
                        shouldNewNonContactPeersRequirePremium: s
                    } = e;
                    const i = await za(new ue.Api.account.SetGlobalPrivacySettings({
                        settings: new ue.Api.GlobalPrivacySettings({
                            ...t && {
                                archiveAndMuteNewNoncontactPeers: !0
                            },
                            ...n && {
                                hideReadMarks: !0
                            },
                            ...s && {
                                newNoncontactPeersRequirePremium: !0
                            }
                        })
                    }));
                    if (i) return {
                        shouldArchiveAndMuteNewNonContact: Boolean(i.archiveAndMuteNewNoncontactPeers),
                        shouldHideReadMarks: Boolean(i.hideReadMarks),
                        shouldNewNonContactPeersRequirePremium: Boolean(i.newNoncontactPeersRequirePremium)
                    }
                }

                function Sl(e) {
                    let {
                        chatId: t,
                        accessHash: n,
                        username: s,
                        isActive: i
                    } = e;
                    return za(t ? new ue.Api.channels.ToggleUsername({
                        channel: jn(t, n),
                        username: s,
                        active: i
                    }) : new ue.Api.account.ToggleUsername({
                        username: s,
                        active: i
                    }))
                }

                function vl(e) {
                    let {
                        chatId: t,
                        accessHash: n,
                        usernames: s
                    } = e;
                    return za(t ? new ue.Api.channels.ReorderUsernames({
                        channel: jn(t, n),
                        order: s
                    }) : new ue.Api.account.ReorderUsernames({
                        order: s
                    }))
                }
                const Cl = {
                        EMAIL_UNCONFIRMED: "Email unconfirmed",
                        EMAIL_HASH_EXPIRED: "Email hash expired",
                        NEW_SALT_INVALID: "The new salt is invalid",
                        NEW_SETTINGS_INVALID: "The new password settings are invalid",
                        CODE_INVALID: "Invalid Code",
                        PASSWORD_HASH_INVALID: "Invalid Password"
                    },
                    Pl = {};
                let Ml;
                async function Tl() {
                    const e = await za(new ue.Api.account.GetPassword);
                    if (!e) return;
                    const {
                        hint: t,
                        hasPassword: n
                    } = e;
                    return {
                        hint: t,
                        hasPassword: n
                    }
                }

                function Bl(e) {
                    return Ml({
                        "@type": "updateTwoFaStateWaitCode",
                        length: e
                    }), new Promise(((e, t) => {
                        Pl.resolve = e, Pl.reject = t
                    }))
                }
                async function Rl(e) {
                    try {
                        return await $a({
                            isCheckPassword: !0,
                            currentPassword: e
                        }), !0
                    } catch (e) {
                        return xl(e), !1
                    }
                }
                async function Ul(e) {
                    try {
                        return await $a({
                            currentPassword: e
                        }), !0
                    } catch (e) {
                        return xl(e), !1
                    }
                }
                async function kl(e, t, n, s) {
                    try {
                        return await $a({
                            currentPassword: e,
                            newPassword: t,
                            hint: n,
                            email: s,
                            emailCodeCallback: Bl,
                            onEmailCodeError: xl
                        }), !0
                    } catch (e) {
                        return xl(e), !1
                    }
                }
                async function Dl(e, t) {
                    try {
                        return await $a({
                            currentPassword: e,
                            newPassword: e,
                            email: t,
                            emailCodeCallback: Bl,
                            onEmailCodeError: xl
                        }), !0
                    } catch (e) {
                        return xl(e), !1
                    }
                }

                function El(e) {
                    Pl.resolve(e)
                }

                function xl(e) {
                    let t;
                    if (e instanceof ue.errors.FloodWaitError) {
                        const n = Math.ceil(Number(e.seconds) / 60 / 60);
                        t = "Too many attempts. Try again in " + (n > 1 ? `${n} hours` : "an hour")
                    } else t = Cl[e.message];
                    t || (t = "Unexpected Error", d && console.error(e)), Ml({
                        "@type": "updateTwoFaError",
                        message: t
                    })
                }

                function Nl(e) {
                    let {
                        chat: t,
                        emoticon: n
                    } = e;
                    return za(new ue.Api.messages.SetTyping({
                        peer: qn(t.id, t.accessHash),
                        action: new ue.Api.SendMessageEmojiInteractionSeen({
                            emoticon: n
                        })
                    }), {
                        abortControllerChatId: t.id
                    })
                }

                function Hl(e) {
                    let {
                        chat: t,
                        emoticon: n,
                        messageId: s,
                        timestamps: i
                    } = e;
                    return za(new ue.Api.messages.SetTyping({
                        peer: qn(t.id, t.accessHash),
                        action: new ue.Api.SendMessageEmojiInteraction({
                            emoticon: n,
                            msgId: s,
                            interaction: new ue.Api.DataJSON({
                                data: JSON.stringify({
                                    v: 1,
                                    a: i.map((e => ({
                                        t: e,
                                        i: 1
                                    })))
                                })
                            })
                        })
                    }), {
                        abortControllerChatId: t.id
                    })
                }
                async function Gl() {
                    const e = await za(new ue.Api.messages.GetAvailableReactions({}));
                    if (e && !(e instanceof ue.Api.messages.AvailableReactionsNotModified)) return e.reactions.forEach((e => {
                        e.staticIcon instanceof ue.Api.Document && (Ue.documents[String(e.staticIcon.id)] = e.staticIcon), e.selectAnimation instanceof ue.Api.Document && (Ue.documents[String(e.selectAnimation.id)] = e.selectAnimation), e.aroundAnimation instanceof ue.Api.Document && (Ue.documents[String(e.aroundAnimation.id)] = e.aroundAnimation), e.appearAnimation instanceof ue.Api.Document && (Ue.documents[String(e.appearAnimation.id)] = e.appearAnimation), e.centerIcon instanceof ue.Api.Document && (Ue.documents[String(e.centerIcon.id)] = e.centerIcon)
                    })), e.reactions.map(cn)
                }
                async function Fl() {
                    const e = await za(new ue.Api.messages.GetAvailableEffects({}));
                    if (!e || e instanceof ue.Api.messages.AvailableEffectsNotModified) return;
                    const t = new Map(e.documents.map((e => [String(e.id), e])));
                    e.documents.forEach((e => {
                        e instanceof ue.Api.Document && (Ue.documents[String(e.id)] = e)
                    }));
                    const n = e.effects.map(un),
                        s = [],
                        i = [];
                    for (const e of n)
                        if (e.effectAnimationId) {
                            const n = t.get(e.effectStickerId),
                                s = n && vt(n, !1, e.isPremium);
                            s && i.push(s)
                        } else {
                            const t = vt(Ue.documents[e.effectStickerId]);
                            t && s.push(t)
                        } return {
                        effects: n,
                        emojis: i,
                        stickers: s
                    }
                }

                function _l(e) {
                    let {
                        chat: t,
                        messageId: n,
                        reactions: s,
                        shouldAddToRecent: i
                    } = e;
                    return za(new ue.Api.messages.SendReaction({
                        reaction: s?.map((e => us(e))),
                        peer: qn(t.id, t.accessHash),
                        msgId: n,
                        ...i && {
                            addToRecent: !0
                        }
                    }), {
                        shouldReturnTrue: !0,
                        shouldThrow: !0
                    })
                }

                function ql(e) {
                    let {
                        ids: t,
                        chat: n
                    } = e;
                    it(t, v).forEach((e => {
                        za(new ue.Api.messages.GetMessagesReactions({
                            id: e,
                            peer: qn(n.id, n.accessHash)
                        }), {
                            shouldReturnTrue: !0,
                            abortControllerChatId: n.id
                        })
                    }))
                }
                async function Ol(e) {
                    let {
                        chat: t,
                        messageId: n,
                        reaction: s,
                        offset: i
                    } = e;
                    const a = await za(new ue.Api.messages.GetMessageReactionsList({
                        peer: qn(t.id, t.accessHash),
                        id: n,
                        ...s && {
                            reaction: us(s)
                        },
                        limit: T,
                        ...i && {
                            offset: i
                        }
                    }));
                    if (!a) return;
                    We(a.users), We(a.chats);
                    const {
                        nextOffset: o,
                        reactions: r,
                        count: d
                    } = a;
                    return {
                        users: a.users.map(_s).filter(Boolean),
                        chats: a.chats.map((e => gn(e))).filter(Boolean),
                        nextOffset: o,
                        reactions: r.map(on).filter(Boolean),
                        count: d
                    }
                }

                function jl(e) {
                    let {
                        reaction: t
                    } = e;
                    return za(new ue.Api.messages.SetDefaultReaction({
                        reaction: us(t)
                    }))
                }
                async function Ll(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetTopReactions({
                        limit: P,
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.ReactionsNotModified)) return {
                        hash: String(n.hash),
                        reactions: n.reactions.map(rn).filter(Boolean)
                    }
                }
                async function Vl(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetRecentReactions({
                        limit: M,
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.ReactionsNotModified)) return {
                        hash: String(n.hash),
                        reactions: n.reactions.map(rn).filter(Boolean)
                    }
                }

                function zl() {
                    return za(new ue.Api.messages.ClearRecentReactions)
                }
                async function Wl(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetDefaultTagReactions({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.ReactionsNotModified)) return {
                        hash: String(n.hash),
                        reactions: n.reactions.map(rn).filter(Boolean)
                    }
                }
                async function Jl(e) {
                    let {
                        hash: t = "0"
                    } = e;
                    const n = await za(new ue.Api.messages.GetSavedReactionTags({
                        hash: ye()(t)
                    }));
                    if (n && !(n instanceof ue.Api.messages.SavedReactionTagsNotModified)) return {
                        hash: String(n.hash),
                        tags: n.tags.map(dn).filter(Boolean)
                    }
                }

                function Kl(e) {
                    let {
                        reaction: t,
                        title: n
                    } = e;
                    return za(new ue.Api.messages.UpdateSavedReactionTag({
                        reaction: us(t),
                        title: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function $l(e) {
                    return e instanceof ue.Api.PostInteractionCountersMessage ? {
                        msgId: e.msgId,
                        forwardsCount: e.forwards,
                        viewsCount: e.views,
                        reactionsCount: e.reactions
                    } : e instanceof ue.Api.PostInteractionCountersStory ? {
                        storyId: e.storyId,
                        reactionsCount: e.reactions,
                        viewsCount: e.views,
                        forwardsCount: e.forwards
                    } : void 0
                }

                function Ql(e) {
                    return {
                        viewsGraph: Xl(e.viewsGraph),
                        reactionsGraph: Xl(e.reactionsByEmotionGraph)
                    }
                }

                function Zl(e) {
                    if (e && "messages" in e) return e.messages.map((t => ip(t, e.chats)))
                }

                function Yl(e) {
                    if (e && "forwards" in e) return e.forwards.map((t => {
                        if (t instanceof ue.Api.PublicForwardMessage) return ip(t.message, e.chats);
                        const {
                            peer: n,
                            story: s
                        } = t;
                        return {
                            peerId: he(n),
                            storyId: s.id,
                            viewsCount: s.views?.viewsCount || 0,
                            reactionsCount: s.views?.reactionsCount || 0
                        }
                    }))
                }

                function Xl(e, t) {
                    if (e.error) return;
                    const n = JSON.parse(e.json.data),
                        [s, ...i] = n.columns,
                        a = n.y_scaled;
                    return {
                        type: t ? "area" : n.types.y0,
                        zoomToken: e.zoomToken,
                        labelFormatter: n.xTickFormatter,
                        tooltipFormatter: n.xTooltipFormatter,
                        labels: s.slice(1),
                        hideCaption: !n.subchart.show,
                        hasSecondYAxis: a,
                        isStacked: n.stacked && !a,
                        isPercentage: t,
                        datasets: i.map((e => {
                            const t = e[0];
                            return {
                                name: n.names[t],
                                color: (s = n.colors[t], s.substring(s.indexOf("#"))),
                                values: e.slice(1)
                            };
                            var s
                        })),
                        ...ep(n.subchart.defaultZoom, s.slice(1))
                    }
                }

                function ep(e, t) {
                    const [n, s] = e;
                    let i = 0,
                        a = t.length - 1;
                    return t.forEach(((e, t) => {
                        !i && e >= n && (i = t), !a && e >= s && (a = t)
                    })), {
                        minimapRange: {
                            begin: Math.max(0, i / (t.length - 1)),
                            end: Math.min(1, a / (t.length - 1))
                        },
                        labelFromIndex: i,
                        labelToIndex: a
                    }
                }

                function tp(e) {
                    let {
                        current: t,
                        previous: n
                    } = e;
                    const s = t - n;
                    return {
                        current: t,
                        change: s,
                        ...n && {
                            percentage: (s ? Math.abs(s) / n * 100 : 0).toFixed(2)
                        }
                    }
                }

                function np(e) {
                    return {
                        part: e.part,
                        total: e.total,
                        percentage: (e.part / e.total * 100).toFixed(2)
                    }
                }

                function sp(e) {
                    return {
                        id: e.id.toString(),
                        date: e.date,
                        months: e.months,
                        quantity: e.quantity
                    }
                }

                function ip(e, t) {
                    const n = he(e.peerId),
                        s = t.find((e => fe(e.id, "channel") === n)),
                        i = s && "photo" in s && s.photo instanceof ue.Api.Photo ? s.photo : void 0;
                    return {
                        messageId: e.id,
                        views: e.views,
                        title: s.title,
                        chat: {
                            id: n,
                            type: "chatTypeChannel",
                            title: s.title,
                            usernames: yt(s),
                            avatarPhotoId: i && St(i),
                            hasVideoAvatar: Boolean(i?.videoSizes)
                        }
                    }
                }
                async function ap(e) {
                    let {
                        chat: t,
                        dcId: n
                    } = e;
                    const s = await za(new ue.Api.stats.GetBroadcastStats({
                        channel: jn(t.id, t.accessHash)
                    }), {
                        dcId: n
                    });
                    var i;
                    if (s) return {
                        stats: (i = s, {
                            growthGraph: Xl(i.growthGraph),
                            followersGraph: Xl(i.followersGraph),
                            muteGraph: Xl(i.muteGraph),
                            topHoursGraph: Xl(i.topHoursGraph),
                            languagesGraph: i.languagesGraph.token,
                            viewsBySourceGraph: i.viewsBySourceGraph.token,
                            newFollowersBySourceGraph: i.newFollowersBySourceGraph.token,
                            interactionsGraph: i.interactionsGraph.token,
                            reactionsByEmotionGraph: i.reactionsByEmotionGraph.token,
                            storyInteractionsGraph: i.storyInteractionsGraph.token,
                            storyReactionsByEmotionGraph: i.storyReactionsByEmotionGraph.token,
                            followers: tp(i.followers),
                            viewsPerPost: tp(i.viewsPerPost),
                            sharesPerPost: tp(i.sharesPerPost),
                            enabledNotifications: np(i.enabledNotifications),
                            reactionsPerPost: tp(i.reactionsPerPost),
                            viewsPerStory: tp(i.viewsPerStory),
                            sharesPerStory: tp(i.sharesPerStory),
                            reactionsPerStory: tp(i.reactionsPerStory),
                            recentPosts: i.recentPostsInteractions.map($l).filter(Boolean)
                        }),
                        users: []
                    }
                }
                async function op(e) {
                    let {
                        chat: t,
                        dcId: n
                    } = e;
                    const s = await za(new ue.Api.stats.GetMegagroupStats({
                        channel: jn(t.id, t.accessHash)
                    }), {
                        dcId: n
                    });
                    var i, a;
                    if (s) return We(s.users), {
                        users: s.users.map(_s).filter(Boolean),
                        stats: (i = s, {
                            growthGraph: Xl(i.growthGraph),
                            membersGraph: Xl(i.membersGraph),
                            topHoursGraph: Xl(i.topHoursGraph),
                            languagesGraph: i.languagesGraph.token,
                            messagesGraph: i.messagesGraph.token,
                            actionsGraph: i.actionsGraph.token,
                            period: (a = i.period, {
                                maxDate: a.maxDate,
                                minDate: a.minDate
                            }),
                            members: tp(i.members),
                            viewers: tp(i.viewers),
                            messages: tp(i.messages),
                            posters: tp(i.posters)
                        })
                    }
                }
                async function rp(e) {
                    let {
                        chat: t,
                        messageId: n,
                        dcId: s
                    } = e;
                    const i = await za(new ue.Api.stats.GetMessageStats({
                        channel: jn(t.id, t.accessHash),
                        msgId: n
                    }), {
                        dcId: s
                    });
                    if (i) return Ql(i)
                }
                async function dp(e) {
                    let {
                        chat: t,
                        messageId: n,
                        dcId: s,
                        offset: i
                    } = e;
                    const a = await za(new ue.Api.stats.GetMessagePublicForwards({
                        channel: jn(t.id, t.accessHash),
                        msgId: n,
                        offset: i,
                        limit: C
                    }), {
                        dcId: s
                    });
                    if (a) return We(a.chats), We(a.users), {
                        forwards: Zl(a),
                        count: a.count,
                        nextOffset: a.nextOffset,
                        chats: a.chats.map((e => gn(e))).filter(Boolean),
                        users: a.users.map(_s).filter(Boolean)
                    }
                }
                async function cp(e) {
                    let {
                        token: t,
                        x: n,
                        isPercentage: s,
                        dcId: i
                    } = e;
                    const a = await za(new ue.Api.stats.LoadAsyncGraph({
                        token: t,
                        ...n && {
                            x: ye()(n)
                        }
                    }), {
                        dcId: i
                    });
                    if (a) return Xl(a, s)
                }
                async function up(e) {
                    let {
                        chat: t,
                        storyId: n,
                        dcId: s
                    } = e;
                    const i = await za(new ue.Api.stats.GetStoryStats({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }), {
                        dcId: s
                    });
                    if (i) return Ql(i)
                }
                async function lp(e) {
                    let {
                        chat: t,
                        storyId: n,
                        dcId: s,
                        offset: i
                    } = e;
                    const a = await za(new ue.Api.stats.GetStoryPublicForwards({
                        peer: qn(t.id, t.accessHash),
                        id: n,
                        offset: i,
                        limit: C
                    }), {
                        dcId: s
                    });
                    if (a) return We(a.chats), We(a.users), {
                        publicForwards: Yl(a),
                        users: a.users.map(_s).filter(Boolean),
                        chats: a.chats.map((e => gn(e))).filter(Boolean),
                        count: a.count,
                        nextOffset: a.nextOffset
                    }
                }
                var pp = n(21051),
                    fp = n.n(pp),
                    hp = n(51369),
                    mp = n.n(hp),
                    gp = n(35897),
                    Ap = n.n(gp),
                    yp = n(48287).hp;

                function wp(e, t, n) {
                    var s;
                    return (t = "symbol" == typeof(s = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var s = n.call(e, "string");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t)) ? s : s + "") in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                let Ip, bp, Sp;
                class vp {
                    constructor(e) {
                        this.isOutgoing = e, wp(this, "state", void 0), wp(this, "seq", 0), wp(this, "gA", void 0), wp(this, "gB", void 0), wp(this, "p", void 0), wp(this, "random", void 0), wp(this, "waitForState", void 0), wp(this, "resolveState", void 0), this.waitForState = new Promise((e => {
                            this.resolveState = e
                        }))
                    }
                    async requestCall(e) {
                        let {
                            p: t,
                            g: n,
                            random: s
                        } = e;
                        const i = Gn().readBigIntFromBuffer(yp.from(t), !1),
                            a = Gn().readBigIntFromBuffer(yp.from(s), !1),
                            o = Gn().modExp(ye()(n), a, i);
                        this.gA = o, this.p = i, this.random = a;
                        const r = await Gn().sha256(Gn().getByteArray(o));
                        return Array.from(r)
                    }
                    acceptCall(e) {
                        let {
                            p: t,
                            g: n,
                            random: s
                        } = e;
                        const i = Gn().readBigIntFromBuffer(t, !1),
                            a = Gn().readBigIntFromBuffer(s, !1),
                            o = Gn().modExp(ye()(n), a, i);
                        return this.gB = o, this.p = i, this.random = a, Array.from(Gn().getByteArray(o))
                    }
                    async confirmCall(e, t, n) {
                        this.isOutgoing ? this.gB = Gn().readBigIntFromBuffer(yp.from(e), !1) : this.gA = Gn().readBigIntFromBuffer(yp.from(e), !1);
                        const s = Gn().modExp(this.isOutgoing ? this.gB : this.gA, this.random, this.p),
                            i = await Gn().sha1(Gn().getByteArray(s)),
                            a = Gn().readBigIntFromBuffer(i.slice(-8).reverse(), !1),
                            o = await async function(e, t, n, s) {
                                const i = await Gn().sha256(yp.concat([new Uint8Array(e), new Uint8Array(t)])),
                                    a = [],
                                    o = s.length - 1;
                                for (let e = 0; e !== i.byteLength; e += 8) {
                                    const t = (r = i.subarray(e, e + 8), ye()(r[0]).and(127).shiftLeft(56).or(ye()(r[1]).shiftLeft(48)).or(ye()(r[2]).shiftLeft(40)).or(ye()(r[3]).shiftLeft(32)).or(ye()(r[4]).shiftLeft(24)).or(ye()(r[5]).shiftLeft(16)).or(ye()(r[6]).shiftLeft(8)).or(ye()(r[7]))).modPow(1, o).toJSNumber(),
                                        d = s[t],
                                        c = s[t + 1] - d;
                                    a.push(String.fromCharCode(...n.subarray(d, d + c)))
                                }
                                var r;
                                return a.join("")
                            }(Gn().getByteArray(s), Gn().getByteArray(this.gA), t, n), r = new(fp());
                        return await r.setKey(Gn().getByteArray(s)), this.state = new(Ap())(r, new(mp()), !0, this.isOutgoing), this.resolveState(), {
                            gA: Array.from(Gn().getByteArray(this.gA)),
                            keyFingerprint: a.toString(),
                            emojis: o
                        }
                    }
                    async encode(e) {
                        if (!this.state) return;
                        const t = new Uint32Array(1);
                        t[0] = this.seq++;
                        const n = await this.state.encryptMessageData(yp.concat([Gn().convertToLittle(t), yp.from(e)]));
                        return Array.from(n)
                    }
                    async decode(e) {
                        if (!this.state) return this.waitForState.then((() => this.decode(e)));
                        const t = await this.state.decryptMessageData(yp.from(e));
                        return JSON.parse(t.toString())
                    }
                }

                function Cp(e) {
                    Ip = new vp(...e)
                }

                function Pp() {
                    Ip = void 0
                }

                function Mp(e) {
                    return Ip.encode(...e)
                }
                async function Tp(e) {
                    if (Ip) return await Ip.decode(...e)
                }

                function Bp(e) {
                    return Ip.confirmCall(...e)
                }

                function Rp(e) {
                    return Ip.acceptCall(...e)
                }

                function Up(e) {
                    return Ip.requestCall(...e)
                }
                async function kp(e) {
                    let {
                        stateHash: t,
                        isFirstRequest: n = !1,
                        isHidden: s = !1
                    } = e;
                    const i = n ? s ? {
                            hidden: !0
                        } : {} : {
                            state: t,
                            next: !0,
                            ...s && {
                                hidden: !0
                            }
                        },
                        a = await za(new ue.Api.stories.GetAllStories(i));
                    if (!a) return;
                    if (a instanceof ue.Api.stories.AllStoriesNotModified) return {
                        state: a.state,
                        stealthMode: ai(a.stealthMode)
                    };
                    We(a.users), We(a.chats);
                    const o = a.peerStories.reduce(((e, t) => {
                        const n = he(t.peer),
                            s = function(e) {
                                const t = he(e.peer);
                                return Ye(e.stories, (e => [e.id, ni(t, e)]))
                            }(t),
                            {
                                profileIds: i,
                                orderedIds: a,
                                lastUpdatedAt: o
                            } = Object.values(s).reduce(((e, t) => ("isInProfile" in t && t.isInProfile && e.profileIds.push(t.id), "isDeleted" in t || (e.orderedIds.push(t.id), e.lastUpdatedAt = Math.max(t.date, e.lastUpdatedAt || 0)), e)), {
                                profileIds: [],
                                orderedIds: [],
                                lastUpdatedAt: void 0
                            });
                        return 0 === a.length || (e[n] = {
                            byId: s,
                            orderedIds: a,
                            profileIds: i,
                            lastUpdatedAt: o,
                            lastReadId: t.maxReadId
                        }), e
                    }), {});
                    return a.peerStories.forEach((e => e.stories.forEach((t => qe(t, he(e.peer)))))), {
                        users: a.users.map(_s).filter(Boolean),
                        chats: a.chats.map((e => gn(e))).filter(Boolean),
                        peerStories: o,
                        hasMore: a.hasMore,
                        state: a.state,
                        stealthMode: ai(a.stealthMode)
                    }
                }
                async function Dp(e) {
                    let {
                        peer: t
                    } = e;
                    const n = await za(new ue.Api.stories.GetPeerStories({
                        peer: qn(t.id, t.accessHash)
                    }));
                    if (!n) return;
                    We(n.users);
                    const s = n.users.map(_s).filter(Boolean),
                        i = n.chats.map((e => gn(e))).filter(Boolean),
                        a = Ye(n.stories.stories, (e => [e.id, ni(t.id, e)]));
                    return n.stories.stories.forEach((e => qe(e, t.id))), {
                        chats: i,
                        users: s,
                        stories: a,
                        lastReadStoryId: n.stories.maxReadId
                    }
                }

                function Ep(e) {
                    let {
                        peer: t,
                        offsetId: n
                    } = e;
                    return Kp({
                        method: new ue.Api.stories.GetPinnedStories({
                            peer: qn(t.id, t.accessHash),
                            offsetId: n,
                            limit: S
                        }),
                        peerId: t.id
                    })
                }

                function xp(e) {
                    let {
                        peer: t,
                        offsetId: n
                    } = e;
                    return Kp({
                        method: new ue.Api.stories.GetStoriesArchive({
                            peer: t && qn(t.id, t.accessHash),
                            offsetId: n,
                            limit: S
                        }),
                        peerId: t.id
                    })
                }
                async function Np(e) {
                    let {
                        peer: t,
                        ids: n
                    } = e;
                    const s = await za(new ue.Api.stories.GetStoriesByID({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }));
                    if (!s) return;
                    We(s.users), We(s.chats);
                    const i = s.users.map(_s).filter(Boolean),
                        a = s.chats.map((e => gn(e))).filter(Boolean),
                        o = n.reduce(((e, n) => {
                            const i = s.stories.find((e => {
                                let {
                                    id: t
                                } = e;
                                return t === n
                            }));
                            return e[n] = i ? ni(t.id, i) : {
                                id: n,
                                peerId: t.id,
                                isDeleted: !0
                            }, e
                        }), {});
                    return s.stories.forEach((e => qe(e, t.id))), {
                        chats: a,
                        users: i,
                        pinnedIds: s.pinnedToTop,
                        stories: o
                    }
                }

                function Hp(e) {
                    let {
                        peer: t,
                        storyId: n
                    } = e;
                    return za(new ue.Api.stories.IncrementStoryViews({
                        peer: qn(t.id, t.accessHash),
                        id: [n]
                    }))
                }

                function Gp(e) {
                    let {
                        peer: t,
                        storyId: n
                    } = e;
                    return za(new ue.Api.stories.ReadStories({
                        peer: qn(t.id, t.accessHash),
                        maxId: n
                    }))
                }

                function Fp(e) {
                    let {
                        peer: t,
                        storyId: n
                    } = e;
                    return za(new ue.Api.stories.DeleteStories({
                        peer: qn(t.id, t.accessHash),
                        id: [n]
                    }))
                }

                function _p(e) {
                    let {
                        peer: t,
                        storyId: n,
                        isInProfile: s
                    } = e;
                    return za(new ue.Api.stories.TogglePinned({
                        peer: qn(t.id, t.accessHash),
                        id: [n],
                        pinned: s
                    }))
                }

                function qp(e) {
                    let {
                        peer: t,
                        storyIds: n
                    } = e;
                    return za(new ue.Api.stories.TogglePinnedToTop({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }))
                }
                async function Op(e) {
                    let {
                        peer: t,
                        storyId: n,
                        areJustContacts: s,
                        query: i,
                        areReactionsFirst: a,
                        limit: o = S,
                        offset: r = ""
                    } = e;
                    const d = await za(new ue.Api.stories.GetStoryViewsList({
                        peer: qn(t.id, t.accessHash),
                        id: n,
                        justContacts: s,
                        q: i,
                        reactionsFirst: a,
                        limit: o,
                        offset: r
                    }));
                    if (d) return We(d.users), We(d.chats), {
                        users: d.users.map(_s).filter(Boolean),
                        chats: d.chats.map((e => gn(e))).filter(Boolean),
                        views: d.views.map(ii).filter(Boolean),
                        nextOffset: d.nextOffset,
                        reactionsCount: d.reactionsCount,
                        viewsCount: d.count
                    }
                }
                async function jp(e) {
                    let {
                        peer: t,
                        storyIds: n
                    } = e;
                    const s = await za(new ue.Api.stories.GetStoriesViews({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }));
                    if (s?.views[0]) return We(s.users), {
                        views: si(s.views[0]),
                        users: s.users.map(_s).filter(Boolean)
                    }
                }
                async function Lp(e) {
                    let {
                        peer: t,
                        storyId: n
                    } = e;
                    const s = await za(new ue.Api.stories.ExportStoryLink({
                        peer: qn(t.id, t.accessHash),
                        id: n
                    }));
                    if (s) return s.link
                }

                function Vp(e) {
                    let {
                        peer: t,
                        storyId: n,
                        reason: s,
                        description: i
                    } = e;
                    return za(new ue.Api.stories.Report({
                        peer: qn(t.id, t.accessHash),
                        id: [n],
                        reason: ss(s),
                        message: i
                    }))
                }

                function zp(e) {
                    let {
                        peer: t,
                        id: n,
                        privacy: s
                    } = e;
                    return za(new ue.Api.stories.EditStory({
                        peer: qn(t.id, t.accessHash),
                        id: n,
                        privacyRules: ms(s)
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Wp(e) {
                    let {
                        peer: t,
                        isHidden: n
                    } = e;
                    return za(new ue.Api.stories.TogglePeerStoriesHidden({
                        peer: qn(t.id, t.accessHash),
                        hidden: n
                    }))
                }

                function Jp(e) {
                    let {
                        peers: t
                    } = e;
                    return za(new ue.Api.stories.GetPeerMaxIDs({
                        id: t.map((e => qn(e.id, e.accessHash)))
                    }), {
                        shouldIgnoreErrors: !0
                    })
                }
                async function Kp(e) {
                    let {
                        method: t,
                        peerId: n
                    } = e;
                    const s = await za(t);
                    if (!s) return;
                    We(s.users), We(s.chats);
                    const i = s.users.map(_s).filter(Boolean),
                        a = s.chats.map((e => gn(e))).filter(Boolean),
                        o = Ye(s.stories, (e => [e.id, ni(n, e)]));
                    return s.stories.forEach((e => qe(e, n))), {
                        users: i,
                        chats: a,
                        stories: o,
                        pinnedIds: s.pinnedToTop
                    }
                }

                function $p(e) {
                    let {
                        peer: t,
                        storyId: n,
                        reaction: s,
                        shouldAddToRecent: i
                    } = e;
                    return za(new ue.Api.stories.SendReaction({
                        reaction: s ? us(s) : new ue.Api.ReactionEmpty,
                        peer: qn(t.id, t.accessHash),
                        storyId: n,
                        ...i && {
                            addToRecent: !0
                        }
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Qp(e) {
                    let {
                        isForPast: t,
                        isForFuture: n
                    } = e;
                    return za(new ue.Api.stories.ActivateStealthMode({
                        past: t,
                        future: n
                    }), {
                        shouldReturnTrue: !0
                    })
                }

                function Zp(e) {
                    if (e) return Object.values(e).map((e => ({
                        id: e.id,
                        title: e.title,
                        amount: e.prices.reduce(((e, t) => e + t.amount.toJSNumber()), 0),
                        prices: e.prices.map((e => {
                            let {
                                label: t,
                                amount: n
                            } = e;
                            return {
                                label: t,
                                amount: n.toJSNumber()
                            }
                        }))
                    })))
                }

                function Yp(e) {
                    const {
                        photo: t
                    } = e;
                    if (t && Je(t), e instanceof ue.Api.payments.PaymentReceiptStars) {
                        const {
                            botId: n,
                            currency: s,
                            date: i,
                            description: a,
                            title: o,
                            totalAmount: r,
                            transactionId: d
                        } = e;
                        return t && Je(t), {
                            type: "stars",
                            currency: s,
                            botId: fe(n, "user"),
                            date: i,
                            text: a,
                            title: o,
                            totalAmount: -r.toJSNumber(),
                            transactionId: d,
                            photo: t && qt(t)
                        }
                    }
                    const {
                        invoice: n,
                        info: s,
                        shipping: i,
                        currency: a,
                        totalAmount: o,
                        credentialsTitle: r,
                        tipAmount: d,
                        title: c,
                        description: u
                    } = e, {
                        shippingAddress: l,
                        phone: p,
                        name: f
                    } = s || {}, {
                        prices: h
                    } = n, m = h.map((e => {
                        let {
                            label: t,
                            amount: n
                        } = e;
                        return {
                            label: t,
                            amount: n.toJSNumber()
                        }
                    }));
                    let g, A;
                    return i && (g = i.prices.map((e => {
                        let {
                            label: t,
                            amount: n
                        } = e;
                        return {
                            label: t,
                            amount: n.toJSNumber()
                        }
                    })), A = i.title), {
                        type: "regular",
                        currency: a,
                        prices: m,
                        info: {
                            shippingAddress: l,
                            phone: p,
                            name: f
                        },
                        totalAmount: o.toJSNumber(),
                        credentialsTitle: r,
                        shippingPrices: g,
                        shippingMethod: A,
                        tipAmount: d ? d.toJSNumber() : 0,
                        title: c,
                        text: u,
                        photo: t && qt(t)
                    }
                }

                function Xp(e) {
                    if (e instanceof ue.Api.payments.PaymentFormStars) {
                        const {
                            botId: t,
                            formId: n
                        } = e;
                        return {
                            type: "stars",
                            botId: fe(t, "user"),
                            formId: String(n)
                        }
                    }
                    const {
                        formId: t,
                        canSaveCredentials: n,
                        passwordMissing: s,
                        providerId: i,
                        nativeProvider: a,
                        nativeParams: o,
                        savedInfo: r,
                        invoice: d,
                        savedCredentials: c,
                        url: u,
                        botId: l
                    } = e, {
                        test: p,
                        nameRequested: f,
                        phoneRequested: h,
                        emailRequested: m,
                        shippingAddressRequested: g,
                        flexible: A,
                        phoneToProvider: y,
                        emailToProvider: w,
                        currency: I,
                        prices: b
                    } = d, S = b.map((e => {
                        let {
                            label: t,
                            amount: n
                        } = e;
                        return {
                            label: t,
                            amount: n.toJSNumber()
                        }
                    })), {
                        shippingAddress: v
                    } = r || {}, C = r ? be(r) : void 0;
                    C && v && (C.shippingAddress = be(v));
                    const P = o ? JSON.parse(o.data) : {};
                    return {
                        type: "regular",
                        url: u,
                        botId: fe(l, "user"),
                        canSaveCredentials: n,
                        isPasswordMissing: s,
                        formId: String(t),
                        providerId: String(i),
                        nativeProvider: a,
                        savedInfo: C,
                        invoiceContainer: {
                            isTest: p,
                            isNameRequested: f,
                            isPhoneRequested: h,
                            isEmailRequested: m,
                            isShippingAddressRequested: g,
                            isFlexible: A,
                            shouldSendPhoneToProvider: y,
                            shouldSendEmailToProvider: w,
                            currency: I,
                            prices: S
                        },
                        nativeParams: {
                            needCardholderName: Boolean(P?.need_cardholder_name),
                            needCountry: Boolean(P?.need_country),
                            needZip: Boolean(P?.need_zip),
                            publishableKey: P?.publishable_key,
                            publicToken: P?.public_token,
                            tokenizeUrl: P?.tokenize_url
                        },
                        savedCredentials: c && (M = c, M.map((e => {
                            let {
                                id: t,
                                title: n
                            } = e;
                            return {
                                id: t,
                                title: n
                            }
                        })))
                    };
                    var M
                }

                function ef(e) {
                    const {
                        invoice: t,
                        description: n,
                        title: s,
                        photo: i
                    } = e, {
                        test: a,
                        currency: o,
                        prices: r,
                        recurring: d,
                        termsUrl: c,
                        maxTipAmount: u,
                        suggestedTipAmounts: l
                    } = t, p = r.reduce(((e, t) => e + t.amount.toJSNumber()), 0);
                    return {
                        mediaType: "invoice",
                        text: n,
                        title: s,
                        photo: qt(i),
                        amount: p,
                        currency: o,
                        isTest: a,
                        isRecurring: d,
                        termsUrl: c,
                        maxTipAmount: u?.toJSNumber(),
                        ...l && {
                            suggestedTipAmounts: l.map((e => e.toJSNumber()))
                        }
                    }
                }

                function tf(e) {
                    const {
                        statusText: t,
                        statusEntities: n,
                        videos: s,
                        videoSections: i,
                        periodOptions: a
                    } = e;
                    return {
                        statusText: t,
                        statusEntities: n.map(bt),
                        videoSections: i,
                        videos: s.map(Et).filter(Boolean),
                        options: a.map(nf)
                    }
                }

                function nf(e) {
                    const {
                        current: t,
                        canPurchaseUpgrade: n,
                        currency: s,
                        amount: i,
                        botUrl: a,
                        months: o
                    } = e;
                    return {
                        isCurrent: t,
                        canPurchaseUpgrade: n,
                        currency: s,
                        amount: i.toJSNumber(),
                        botUrl: a,
                        months: o
                    }
                }

                function sf(e) {
                    const {
                        userId: t,
                        multiplier: n,
                        expires: s,
                        giveaway: i,
                        gift: a
                    } = e;
                    return {
                        userId: t && fe(t, "user"),
                        multiplier: n,
                        expires: s,
                        isFromGiveaway: i,
                        isGift: a
                    }
                }

                function af(e) {
                    const {
                        date: t,
                        expires: n,
                        slot: s,
                        cooldownUntilDate: i,
                        peer: a
                    } = e;
                    return {
                        date: t,
                        expires: n,
                        slot: s,
                        cooldownUntil: i,
                        chatId: a && he(a)
                    }
                }

                function of(e) {
                    const {
                        date: t,
                        fromId: n,
                        months: s,
                        giveawayMsgId: i,
                        toId: a,
                        usedDate: o,
                        viaGiveaway: r
                    } = e;
                    return {
                        date: t,
                        months: s,
                        toId: a && fe(a, "user"),
                        fromId: n && he(n),
                        usedAt: o,
                        isFromGiveaway: r,
                        giveawayMessageId: i
                    }
                }

                function rf(e) {
                    const {
                        amount: t,
                        currency: n,
                        months: s,
                        users: i
                    } = e;
                    return {
                        amount: t.toJSNumber(),
                        currency: n,
                        months: s,
                        users: i
                    }
                }

                function df(e) {
                    return e instanceof ue.Api.StarsTransactionPeerAppStore ? {
                        type: "appStore"
                    } : e instanceof ue.Api.StarsTransactionPeerPlayMarket ? {
                        type: "playMarket"
                    } : e instanceof ue.Api.StarsTransactionPeerPremiumBot ? {
                        type: "premiumBot"
                    } : e instanceof ue.Api.StarsTransactionPeerFragment ? {
                        type: "fragment"
                    } : e instanceof ue.Api.StarsTransactionPeerAds ? {
                        type: "ads"
                    } : e instanceof ue.Api.StarsTransactionPeer ? {
                        type: "peer",
                        id: he(e.peer)
                    } : {
                        type: "unsupported"
                    }
                }

                function cf(e) {
                    const {
                        date: t,
                        id: n,
                        peer: s,
                        stars: i,
                        description: a,
                        photo: o,
                        title: r,
                        refund: d,
                        extendedMedia: c,
                        failed: u,
                        msgId: l,
                        pending: p
                    } = e;
                    o && Je(o);
                    const f = c?.map((e => Ut(e))).filter(Boolean);
                    return {
                        id: n,
                        date: t,
                        peer: df(s),
                        stars: i.toJSNumber(),
                        title: r,
                        description: a,
                        photo: o && qt(o),
                        isRefund: d,
                        hasFailed: u,
                        isPending: p,
                        messageId: l,
                        extendedMedia: f
                    }
                }

                function uf(e) {
                    const {
                        amount: t,
                        currency: n,
                        stars: s,
                        extended: i
                    } = e;
                    return {
                        amount: t.toJSNumber(),
                        currency: n,
                        stars: s.toJSNumber(),
                        isExtended: i
                    }
                }
                async function lf(e) {
                    let {
                        inputInvoice: t,
                        requestInfo: n,
                        shouldSave: s
                    } = e;
                    const i = await za(new ue.Api.payments.ValidateRequestedInfo({
                        invoice: cs(t),
                        save: s || void 0,
                        info: ts(n)
                    }));
                    if (!i) return;
                    const {
                        id: a,
                        shippingOptions: o
                    } = i;
                    return a ? {
                        id: a,
                        shippingOptions: Zp(o)
                    } : void 0
                }
                async function pf(e) {
                    let {
                        inputInvoice: t,
                        formId: n,
                        requestedInfoId: s,
                        shippingOptionId: i,
                        credentials: a,
                        savedCredentialId: o,
                        temporaryPassword: r,
                        tipAmount: d
                    } = e;
                    const c = r && o ? new ue.Api.InputPaymentCredentialsSaved({
                            id: o,
                            tmpPassword: $e(r)
                        }) : new ue.Api.InputPaymentCredentials({
                            save: a.save,
                            data: new ue.Api.DataJSON({
                                data: JSON.stringify(a.data)
                            })
                        }),
                        u = await za(new ue.Api.payments.SendPaymentForm({
                            formId: ye()(n),
                            invoice: cs(t),
                            requestedInfoId: s,
                            shippingOptionId: i,
                            credentials: c,
                            ...d && {
                                tipAmount: ye()(d)
                            }
                        }));
                    return !!u && (u instanceof ue.Api.payments.PaymentVerificationNeeded ? void bp({
                        "@type": "updatePaymentVerificationNeeded",
                        url: u.url
                    }) : (Va(u.updates), Boolean(u)))
                }
                async function ff(e) {
                    let {
                        formId: t,
                        inputInvoice: n
                    } = e;
                    const s = await za(new ue.Api.payments.SendStarsForm({
                        formId: ye()(t),
                        invoice: cs(n)
                    }));
                    return !!s && (s instanceof ue.Api.payments.PaymentVerificationNeeded ? void(d && console.warn("Unexpected PaymentVerificationNeeded in sendStarsForm")) : (Va(s.updates), Boolean(s)))
                }
                async function hf(e, t) {
                    const n = await za(new ue.Api.payments.GetPaymentForm({
                        invoice: cs(e),
                        themeParams: t ? is(t) : void 0
                    }));
                    if (n) return n.photo && Je(n.photo), We(n.users), {
                        form: Xp(n),
                        invoice: ef(n),
                        users: n.users.map(_s).filter(Boolean)
                    }
                }
                async function mf(e, t) {
                    const n = await za(new ue.Api.payments.GetPaymentReceipt({
                        peer: qn(e.id, e.accessHash),
                        msgId: t
                    }));
                    if (n) return We(n.users), {
                        receipt: Yp(n),
                        users: n.users.map(_s).filter(Boolean)
                    }
                }
                async function gf() {
                    const e = await za(new ue.Api.help.GetPremiumPromo);
                    if (!e) return;
                    We(e.users);
                    const t = e.users.map(_s).filter(Boolean);
                    return e.videos.forEach((e => {
                        e instanceof ue.Api.Document && (Ue.documents[e.id.toString()] = e)
                    })), {
                        promo: tf(e),
                        users: t
                    }
                }
                async function Af(e) {
                    const t = await
                    function(e, t) {
                        return function(e, t) {
                            return Ga.getTmpPassword(e, t)
                        }(e, t)
                    }(e);
                    if (t) return "error" in t ? t : {
                        value: Ke(t.tmpPassword),
                        validUntil: t.validUntil
                    }
                }
                async function yf() {
                    const e = await za(new ue.Api.premium.GetMyBoosts);
                    if (e) return We(e.users), We(e.chats), {
                        users: e.users.map(_s).filter(Boolean),
                        chats: e.chats.map((e => gn(e))).filter(Boolean),
                        boosts: e.myBoosts.map(af)
                    }
                }
                async function wf(e) {
                    let {
                        chat: t,
                        slots: n
                    } = e;
                    const s = await za(new ue.Api.premium.ApplyBoost({
                        peer: qn(t.id, t.accessHash),
                        slots: n
                    }));
                    if (s) return We(s.users), We(s.chats), {
                        users: s.users.map(_s).filter(Boolean),
                        chats: s.chats.map((e => gn(e))).filter(Boolean),
                        boosts: s.myBoosts.map(af)
                    }
                }
                async function If(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.premium.GetBoostsStatus({
                        peer: qn(t.id, t.accessHash)
                    }));
                    if (n) return function(e) {
                        const {
                            level: t,
                            boostUrl: n,
                            boosts: s,
                            myBoost: i,
                            currentLevelBoosts: a,
                            nextLevelBoosts: o,
                            premiumAudience: r,
                            prepaidGiveaways: d
                        } = e;
                        return {
                            level: t,
                            currentLevelBoosts: a,
                            boosts: s,
                            hasMyBoost: Boolean(i),
                            boostUrl: n,
                            nextLevelBoosts: o,
                            ...r && {
                                premiumSubscribers: np(r)
                            },
                            ...d && {
                                prepaidGiveaways: d.map(sp)
                            }
                        }
                    }(n)
                }
                async function bf(e) {
                    let {
                        chat: t,
                        isGifts: n,
                        offset: s = "",
                        limit: i
                    } = e;
                    const a = await za(new ue.Api.premium.GetBoostsList({
                        peer: qn(t.id, t.accessHash),
                        gifts: n || void 0,
                        offset: s,
                        limit: i
                    }));
                    if (!a) return;
                    We(a.users);
                    const o = a.users.map(_s).filter(Boolean),
                        r = a.boosts.map(sf);
                    return {
                        count: a.count,
                        boostList: r,
                        users: o,
                        nextOffset: a.nextOffset
                    }
                }
                async function Sf(e) {
                    let {
                        peer: t,
                        messageId: n
                    } = e;
                    const s = await za(new ue.Api.payments.GetGiveawayInfo({
                        peer: qn(t.id, t.accessHash),
                        msgId: n
                    }));
                    if (s) return function(e) {
                        if (e instanceof ue.Api.payments.GiveawayInfo) {
                            const {
                                startDate: t,
                                adminDisallowedChatId: n,
                                disallowedCountry: s,
                                joinedTooEarlyDate: i,
                                participating: a,
                                preparingResults: o
                            } = e;
                            return {
                                type: "active",
                                startDate: t,
                                isParticipating: a,
                                adminDisallowedChatId: n && fe(n, "channel"),
                                disallowedCountry: s,
                                joinedTooEarlyDate: i,
                                isPreparingResults: o
                            }
                        } {
                            const {
                                activatedCount: t,
                                finishDate: n,
                                giftCodeSlug: s,
                                winner: i,
                                refunded: a,
                                startDate: o,
                                winnersCount: r
                            } = e;
                            return {
                                type: "results",
                                startDate: o,
                                activatedCount: t,
                                finishDate: n,
                                winnersCount: r,
                                giftCodeSlug: s,
                                isRefunded: a,
                                isWinner: i
                            }
                        }
                    }(s)
                }
                async function vf(e) {
                    let {
                        slug: t
                    } = e;
                    const n = await za(new ue.Api.payments.CheckGiftCode({
                        slug: t
                    }));
                    if (n) return We(n.users), We(n.chats), {
                        code: of(n),
                        users: n.users.map(_s).filter(Boolean),
                        chats: n.chats.map((e => gn(e))).filter(Boolean)
                    }
                }

                function Cf(e) {
                    let {
                        slug: t
                    } = e;
                    return za(new ue.Api.payments.ApplyGiftCode({
                        slug: t
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Pf(e) {
                    let {
                        chat: t
                    } = e;
                    const n = await za(new ue.Api.payments.GetPremiumGiftCodeOptions({
                        boostPeer: t && qn(t.id, t.accessHash)
                    }));
                    if (n) return n.map(rf)
                }

                function Mf(e) {
                    let {
                        chat: t,
                        giveawayId: n,
                        paymentPurpose: s
                    } = e;
                    return za(new ue.Api.payments.LaunchPrepaidGiveaway({
                        peer: qn(t.id, t.accessHash),
                        giveawayId: ye()(n),
                        purpose: ds(s)
                    }), {
                        shouldReturnTrue: !0
                    })
                }
                async function Tf() {
                    const e = await za(new ue.Api.payments.GetStarsStatus({
                        peer: new ue.Api.InputPeerSelf
                    }));
                    if (e) return {
                        users: e.users.map(_s).filter(Boolean),
                        chats: e.chats.map((e => gn(e))).filter(Boolean),
                        nextOffset: e.nextOffset,
                        history: e.history.map(cf),
                        balance: e.balance.toJSNumber()
                    }
                }
                async function Bf(e) {
                    let {
                        offset: t,
                        isInbound: n,
                        isOutbound: s
                    } = e;
                    const i = await za(new ue.Api.payments.GetStarsTransactions({
                        peer: new ue.Api.InputPeerSelf,
                        offset: t,
                        inbound: n,
                        outbound: s
                    }));
                    if (i) return {
                        users: i.users.map(_s).filter(Boolean),
                        chats: i.chats.map((e => gn(e))).filter(Boolean),
                        nextOffset: i.nextOffset,
                        history: i.history.map(cf),
                        balance: i.balance.toJSNumber()
                    }
                }
                async function Rf() {
                    const e = await za(new ue.Api.payments.GetStarsTopupOptions);
                    if (e) return e.map(uf)
                }
                async function Uf(e) {
                    const t = "username" in e ? new ue.Api.InputCollectibleUsername({
                            username: e.username
                        }) : new ue.Api.InputCollectiblePhone({
                            phone: e.phone
                        }),
                        n = await za(new ue.Api.fragment.GetCollectibleInfo({
                            collectible: t
                        }));
                    if (n) return function(e) {
                        const {
                            amount: t,
                            currency: n,
                            cryptoAmount: s,
                            cryptoCurrency: i,
                            purchaseDate: a,
                            url: o
                        } = e;
                        return {
                            amount: t.toJSNumber(),
                            currency: n,
                            cryptoAmount: s.toJSNumber(),
                            cryptoCurrency: i,
                            purchaseDate: a,
                            url: o
                        }
                    }(n)
                }

                function kf(e, t, n) {
                    var s;
                    Sp = e,
                        function(e) {
                            gi = e
                        }(Hf),
                        function(e) {
                            Ci = e
                        }(Hf),
                        function(e) {
                            ko = e
                        }(Hf),
                        function(e) {
                            Pd = e
                        }(Hf),
                        function(e) {
                            Cc = e
                        }(Hf),
                        function(e) {
                            Pc = e
                        }(Hf),
                        function(e) {
                            Tc = e
                        }(Hf),
                        function(e) {
                            Ml = e
                        }(Hf),
                        function(e) {
                            io = e
                        }(Hf),
                        function(e) {
                            Uo = e
                        }(Hf),
                        function(e) {
                            bp = e
                        }(Hf), n && (s = n, Object.assign(Re, Be(s))), async function(e, t) {
                            d && console.log(">>> START INIT API"), Ha = e;
                            const {
                                userAgent: n,
                                platform: s,
                                sessionData: i,
                                isTest: r,
                                isWebmSupported: c,
                                maxBufferSize: u,
                                webAuthToken: l,
                                dcId: p,
                                mockScenario: f,
                                shouldForceHttpTransport: h,
                                shouldAllowHttpTransport: m,
                                shouldDebugExportedSenders: g,
                                langCode: A
                            } = t, y = new ue.sessions.CallbackSession(i, La);
                            self.isWebmSupported = c, self.maxBufferSize = u, Ga = new(qi())(y, "1025907", "452b0359b988148995f22ff0f4229750", {
                                deviceModel: "Telegram",
                                systemVersion: s || Da,
                                appVersion: `10.9.9 ${a}`,
                                useWSS: !0,
                                additionalDcsDisabled: o,
                                shouldDebugExportedSenders: g,
                                shouldForceHttpTransport: h,
                                shouldAllowHttpTransport: m,
                                testServers: r,
                                dcId: p,
                                langCode: A
                            }), Ga.addEventHandler(Va, Ea);
                            try {
                                d && (Qe("CONNECTING"), self.invoke = za, self.GramJs = ue.Api);
                                try {
                                    Ga.setPingCallback(da), await Ga.start({
                                        phoneNumber: Mi,
                                        phoneCode: Ti,
                                        password: Bi,
                                        firstAndLastNames: Ri,
                                        qrCode: Ui,
                                        onError: ki,
                                        initialMethod: "iOS" === s || "Android" === s ? "phoneNumber" : "qrCode",
                                        shouldThrowIfUnauthorized: Boolean(i),
                                        webAuthToken: l,
                                        webAuthTokenFailed: Pi,
                                        mockScenario: f
                                    })
                                } catch (e) {
                                    if (console.error(e), "Disconnect" !== e.message && "Cannot send requests while disconnected" !== e.message) return void Ha({
                                        "@type": "updateConnectionState",
                                        connectionState: "connectionStateBroken"
                                    })
                                }
                                d && (console.log(">>> FINISH INIT API"), Qe("CONNECTED")), Ci(Di("authorizationStateReady")), La(y.getSessionData()), Ha({
                                    "@type": "updateApiReady"
                                }), async function(e) {
                                    Ji = e, await fa(), $i = !0, oa()
                                }(za), Ya()
                            } catch (e) {
                                throw d && Qe("CONNECTING ERROR", e), e
                            }
                        }(Hf, t)
                }
                const Df = oe((function(e) {
                    if (!Nf || e !== xf) return;
                    const t = Nf;
                    Nf = void 0, t.forEach(Sp)
                }));
                let Ef, xf, Nf;

                function Hf(e) {
                    Nf ? Nf.push(e) : Nf = [e], Ef && !x.has(e["@type"]) || (Ef = ae(Df, E, !0), xf = Math.random()), Ef(xf)
                }
                const Gf = ie.reduce(((e, t) => (e[t] = console[t], e)), {});
                self.onerror = e => {
                    console.error(e), jf({
                        type: "unhandledError",
                        error: {
                            message: e.error.message || "Uncaught exception in worker"
                        }
                    })
                }, self.addEventListener("unhandledrejection", (e => {
                    console.error(e), jf({
                        type: "unhandledError",
                        error: {
                            message: e.reason.message || "Uncaught rejection in worker"
                        }
                    })
                }));
                const Ff = new Map;
                d && console.log(">>> FINISH LOAD WORKER"), onmessage = async e => {
                    const {
                        data: t
                    } = e;
                    switch (t.type) {
                        case "initApi": {
                            const {
                                messageId: e,
                                args: n
                            } = t;
                            await kf(Of, n[0], n[1]), e && jf({
                                type: "methodResponse",
                                messageId: e,
                                response: !0
                            });
                            break
                        }
                        case "callMethod": {
                            const {
                                messageId: e,
                                name: n,
                                args: s,
                                withCallback: a
                            } = t;
                            try {
                                if (e && a) {
                                    const t = function() {
                                        for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                                        const i = n[n.length - 1];
                                        jf({
                                            type: "methodCallback",
                                            messageId: e,
                                            callbackArgs: n
                                        }, i instanceof ArrayBuffer ? i : void 0)
                                    };
                                    Ff.set(e, t), s.push(t)
                                }
                                const t = await
                                function(e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
                                    return i[e](...n)
                                }(n, ...s);
                                d && "object" == typeof t && "CONSTRUCTOR_ID" in t && Qe("UNEXPECTED RESPONSE", `${n}: ${t.className}`);
                                const {
                                    arrayBuffer: o
                                } = "object" == typeof t && "arrayBuffer" in t && t || {};
                                e && jf({
                                    type: "methodResponse",
                                    messageId: e,
                                    response: t
                                }, o)
                            } catch (t) {
                                d && console.error(t), e && jf({
                                    type: "methodResponse",
                                    messageId: e,
                                    error: {
                                        message: t.message
                                    }
                                })
                            }
                            e && Ff.delete(e);
                            break
                        }
                        case "cancelProgress": {
                            const e = Ff.get(t.messageId);
                            e && (e.isCanceled = !0);
                            break
                        }
                        case "ping":
                            jf({
                                type: "methodResponse",
                                messageId: t.messageId
                            });
                            break;
                        case "toggleDebugMode":
                            t.isEnabled ? ie.forEach((e => {
                                console[e] = function() {
                                    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                                    postMessage({
                                        type: "debugLog",
                                        level: e,
                                        args: JSON.parse(JSON.stringify(n, ((e, t) => "bigint" == typeof t ? t.toString() : t)))
                                    })
                                }
                            })) : ie.forEach((e => {
                                console[e] = Gf[e]
                            }))
                    }
                };
                let _f = [];
                const qf = oe((() => {
                    const e = _f;
                    _f = [], jf({
                        type: "updates",
                        updates: e
                    })
                }));

                function Of(e) {
                    d && "updateUserStatus" !== e["@type"] && "updateServerTimeOffset" !== e["@type"] && Qe("UPDATE", e["@type"], e), _f.push(e), qf()
                }

                function jf(e, t) {
                    t ? postMessage(e, [t]) : postMessage(e)
                }
            },
            97335: (e, t, n) => {
                "use strict";
                n.d(t, {
                    qZ: () => o,
                    C7: () => s,
                    l3: () => i,
                    K1: () => a
                });
                let s = function(e) {
                    return e.Bold = "MessageEntityBold", e.Blockquote = "MessageEntityBlockquote", e.BotCommand = "MessageEntityBotCommand", e.Cashtag = "MessageEntityCashtag", e.Code = "MessageEntityCode", e.Email = "MessageEntityEmail", e.Hashtag = "MessageEntityHashtag", e.Italic = "MessageEntityItalic", e.MentionName = "MessageEntityMentionName", e.Mention = "MessageEntityMention", e.Phone = "MessageEntityPhone", e.Pre = "MessageEntityPre", e.Strike = "MessageEntityStrike", e.TextUrl = "MessageEntityTextUrl", e.Url = "MessageEntityUrl", e.Underline = "MessageEntityUnderline", e.Spoiler = "MessageEntitySpoiler", e.CustomEmoji = "MessageEntityCustomEmoji", e.Unknown = "MessageEntityUnknown", e
                }({});
                const i = -1,
                    a = "MESSAGE_DELETED";
                let o = function(e) {
                    return e[e.BlobUrl = 0] = "BlobUrl", e[e.Progressive = 1] = "Progressive", e[e.DownloadUrl = 2] = "DownloadUrl", e[e.Text = 3] = "Text", e
                }({})
            },
            56215: (e, t, n) => {
                var s = n(48287).hp;
                const {
                    constructors: i
                } = n(43355), a = s.from("ffd8ffe000104a46494600010100000100010000ffdb004300281c1e231e19282321232d2b28303c64413c37373c7b585d4964918099968f808c8aa0b4e6c3a0aadaad8a8cc8ffcbdaeef5ffffff9bc1fffffffaffe6fdfff8ffdb0043012b2d2d3c353c76414176f8a58ca5f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8ffc00011080000000003012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00", "hex"), o = s.from("ffd9", "hex");

                function r(e, t) {
                    throw new Error(`Cannot cast ${e.className} to any kind of ${t}`)
                }
                e.exports = {
                    getMessageId: function(e) {
                        if (void 0 !== e) {
                            if ("number" == typeof e) return e;
                            if (2030045667 === e.SUBCLASS_OF_ID) return e.id;
                            throw new Error(`Invalid message type: ${e.constructor.name}`)
                        }
                    },
                    getInputPeer: function e(t) {
                        let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (void 0 === t.SUBCLASS_OF_ID) {
                            if (n && "inputEntity" in t) return t.inputEntity;
                            if ("entity" in t) return e(t.entity);
                            r(t, "InputPeer")
                        }
                        if (3374092470 === t.SUBCLASS_OF_ID) return t;
                        if (t instanceof i.User) {
                            if (t.isSelf && n) return new i.InputPeerSelf;
                            if (void 0 === t.accessHash && s) throw new Error("User without accessHash or min info cannot be input");
                            return new i.InputPeerUser({
                                userId: t.id,
                                accessHash: t.accessHash
                            })
                        }
                        if (t instanceof i.Chat || t instanceof i.ChatEmpty || t instanceof i.ChatForbidden) return new i.InputPeerChat({
                            chatId: t.id
                        });
                        if (t instanceof i.Channel) {
                            if (void 0 === t.accessHash && s) throw new TypeError("Channel without accessHash or min info cannot be input");
                            return new i.InputPeerChannel({
                                channelId: t.id,
                                accessHash: t.accessHash
                            })
                        }
                        return t instanceof i.ChannelForbidden ? new i.InputPeerChannel({
                            channelId: t.id,
                            accessHash: t.accessHash
                        }) : t instanceof i.InputUser ? new i.InputPeerUser({
                            userId: t.userId,
                            accessHash: t.accessHash
                        }) : t instanceof i.InputChannel ? new i.InputPeerChannel({
                            channelId: t.channelId,
                            accessHash: t.accessHash
                        }) : t instanceof i.UserEmpty ? new i.InputPeerEmpty : t instanceof i.UserFull ? e(t.user) : t instanceof i.ChatFull ? new i.InputPeerChat({
                            chatId: t.id
                        }) : t instanceof i.PeerChat ? new i.InputPeerChat(t.chatId) : void r(t, "InputPeer")
                    },
                    getDisplayName: function(e) {
                        return e instanceof i.User ? e.lastName && e.firstName ? `${e.firstName} ${e.lastName}` : e.firstName ? e.firstName : e.lastName ? e.lastName : "" : e instanceof i.Chat || e instanceof i.Channel ? e.title : ""
                    },
                    getDownloadPartSize: function(e) {
                        if (e <= 65536) return 64;
                        if (e <= 104857600) return 128;
                        if (e <= 786432e3) return 256;
                        if (e <= 2097152e3) return 512;
                        if (e <= 4194304e3) return 1024;
                        throw new Error("File size too large")
                    },
                    getUploadPartSize: function(e) {
                        if (e <= 104857600) return 128;
                        if (e <= 786432e3) return 256;
                        if (e <= 2097152e3) return 512;
                        if (e <= 4194304e3) return 512;
                        throw new Error("File size too large")
                    },
                    strippedPhotoToJpg: function(e) {
                        if (e.length < 3 || 1 !== e[0]) return e;
                        const t = s.from(a);
                        return t[164] = e[1], t[166] = e[2], s.concat([t, e.slice(3), o])
                    },
                    getDC: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        switch (e) {
                            case 1:
                                return {
                                    id: 1, ipAddress: `zws1${t?"-1":""}.web.telegram.org`, port: 443
                                };
                            case 2:
                                return {
                                    id: 2, ipAddress: `zws2${t?"-1":""}.web.telegram.org`, port: 443
                                };
                            case 3:
                                return {
                                    id: 3, ipAddress: `zws3${t?"-1":""}.web.telegram.org`, port: 443
                                };
                            case 4:
                                return {
                                    id: 4, ipAddress: `zws4${t?"-1":""}.web.telegram.org`, port: 443
                                };
                            case 5:
                                return {
                                    id: 5, ipAddress: `zws5${t?"-1":""}.web.telegram.org`, port: 443
                                };
                            default:
                                throw new Error(`Cannot find the DC with the ID of ${e}`)
                        }
                    }
                }
            },
            98221: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => s
                }), String.fromCharCode(8205);
                const s = /(?:\ud83c[\udd70\udd71\udd7e\udd7f]\ufe0f)|(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83c\udfc3|\ud83d\udeb6|\ud83e\uddce)(?:\ud83c[\udffb-\udfff])?(?:\u200d[\u2640\u2642]\ufe0f)?(?:\u200d\u27a1\ufe0f)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\ud83e[\uddaf\uddbc\uddbd])(?:\u200d\u27a1\ufe0f)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf\uddaf-\uddb3\uddbc\uddbc\uddbd\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd\uddce\uddce\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83e\uddd1\u200d\ud83e\uddd1\u200d\ud83e\uddd2\u200d\ud83e\uddd2|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83e\uddd1\u200d\ud83e\uddd1\u200d\ud83e\uddd2|\ud83e\uddd1\u200d\ud83e\uddd2\u200d\ud83e\uddd2|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u26d3\ufe0f\u200d\ud83d\udca5|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udf44\u200d\ud83d\udfeb|\ud83c\udf4b\u200d\ud83d\udfe9|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc26\u200d\ud83d\udd25|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83d\ude42\u200d\u2194\ufe0f|\ud83d\ude42\u200d\u2195\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddd1\u200d\ud83e\uddd2|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|\ud83e\udef0|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef1-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g
            },
            9705: (e, t, n) => {
                "use strict";

                function s(e, t, n) {
                    var s;
                    return (t = "symbol" == typeof(s = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var s = n.call(e, "string");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t)) ? s : s + "") in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                n.d(t, {
                    A: () => i
                });
                class i {
                    constructor() {
                        s(this, "promise", void 0), s(this, "reject", void 0), s(this, "resolve", void 0), this.promise = new Promise(((e, t) => {
                            this.reject = t, this.resolve = e
                        }))
                    }
                    static resolved(e) {
                        const t = new i;
                        return t.resolve(e), t
                    }
                }
            },
            24282: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var s = n(98221);
                const i = [
                    [/\u{1f3f3}\u200d\u{1f308}/gu, "🏳️‍🌈"],
                    [/\u{1f3f3}\u200d\u26a7\ufe0f?/gu, "🏳️‍⚧️"],
                    [/\u26d3\u200d\u{1f4a5}/gu, "⛓️‍💥"],
                    [/\u200d([\u2640\u2642])(?!\ufe0f)/gu, "‍$1️"]
                ];

                function a(e) {
                    if (!e.match(s.A)) return e;
                    for (const [t, n] of i) e = e.replace(t, n);
                    return e
                }
            },
            17237: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => o
                });
                var s = n(98221),
                    i = n(24282);
                const a = new RegExp(`^(?:${s.A.source})+$`, ""),
                    o = e => {
                        const t = (0, i.A)(e).split("\n"),
                            n = t.join("");
                        if (n.length > 800) return !1;
                        if (!Boolean(n.match(a))) return !1;
                        const o = t.map((e => {
                            let t = 0;
                            for (; s.A.exec(e);)
                                if (t++, t > 100) return s.A.lastIndex = 0, -1;
                            return t
                        }));
                        let r = t.length;
                        for (let e = 0; e < o.length; e++) {
                            if (-1 === o[e]) return !1;
                            o[e] > r && (r = o[e])
                        }
                        return r
                    }
            },
            77783: (e, t, n) => {
                "use strict";

                function s(e) {
                    return new Promise(((t, n) => {
                        e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
                    }))
                }

                function i(e, t) {
                    const n = indexedDB.open(e);
                    n.onupgradeneeded = () => n.result.createObjectStore(t);
                    const i = s(n);
                    return (e, n) => i.then((s => n(s.transaction(t, e).objectStore(t))))
                }
                let a;

                function o() {
                    return a || (a = i("keyval-store", "keyval")), a
                }

                function r(e, t = o()) {
                    return t("readonly", (t => s(t.get(e))))
                }

                function d(e, t, n = o()) {
                    return n("readwrite", (n => (n.put(t, e), s(n.transaction))))
                }

                function c(e, t = o()) {
                    return t("readwrite", (t => (e.forEach((e => t.put(e[1], e[0]))), s(t.transaction))))
                }

                function u(e, t = o()) {
                    return t("readonly", (t => Promise.all(e.map((e => s(t.get(e)))))))
                }

                function l(e, t, n = o()) {
                    return n("readwrite", (n => new Promise(((i, a) => {
                        n.get(e).onsuccess = function() {
                            try {
                                n.put(t(this.result), e), i(s(n.transaction))
                            } catch (e) {
                                a(e)
                            }
                        }
                    }))))
                }

                function p(e, t = o()) {
                    return t("readwrite", (t => (t.delete(e), s(t.transaction))))
                }

                function f(e, t = o()) {
                    return t("readwrite", (t => (e.forEach((e => t.delete(e))), s(t.transaction))))
                }

                function h(e = o()) {
                    return e("readwrite", (e => (e.clear(), s(e.transaction))))
                }

                function m(e, t) {
                    return e.openCursor().onsuccess = function() {
                        this.result && (t(this.result), this.result.continue())
                    }, s(e.transaction)
                }

                function g(e = o()) {
                    return e("readonly", (e => {
                        if (e.getAllKeys) return s(e.getAllKeys());
                        const t = [];
                        return m(e, (e => t.push(e.key))).then((() => t))
                    }))
                }

                function A(e = o()) {
                    return e("readonly", (e => {
                        if (e.getAll) return s(e.getAll());
                        const t = [];
                        return m(e, (e => t.push(e.value))).then((() => t))
                    }))
                }

                function y(e = o()) {
                    return e("readonly", (t => {
                        if (t.getAll && t.getAllKeys) return Promise.all([s(t.getAllKeys()), s(t.getAll())]).then((([e, t]) => e.map(((e, n) => [e, t[n]]))));
                        const n = [];
                        return e("readonly", (e => m(e, (e => n.push([e.key, e.value]))).then((() => n))))
                    }))
                }
                n.r(t), n.d(t, {
                    clear: () => h,
                    createStore: () => i,
                    del: () => p,
                    delMany: () => f,
                    entries: () => y,
                    get: () => r,
                    getMany: () => u,
                    keys: () => g,
                    promisifyRequest: () => s,
                    set: () => d,
                    setMany: () => c,
                    update: () => l,
                    values: () => A
                })
            }
        },
        s = {};

    function i(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var a = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports
    }
    i.m = n, i.x = () => {
        var e = i.O(void 0, [7784, 8287, 4486, 5985], (() => i(28480)));
        return i.O(e)
    }, e = [], i.O = (t, n, s, a) => {
        if (!n) {
            var o = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [n, s, a] = e[u], r = !0, d = 0; d < n.length; d++)(!1 & a || o >= a) && Object.keys(i.O).every((e => i.O[e](n[d]))) ? n.splice(d--, 1) : (r = !1, a < o && (o = a));
                if (r) {
                    e.splice(u--, 1);
                    var c = s();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [n, s, a]
    }, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((t, n) => (i.f[n](e, t), t)), [])), i.u = e => e + "." + {
        4486: "9e0ff3ce0a0c5de4a575",
        5985: "e8d9d0762c377bb07b03",
        7784: "ec5164938531ffe545a2",
        8287: "cbb61367338b7a7d4a32"
    } [e] + ".js", i.miniCssF = e => {}, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        i.g.importScripts && (e = i.g.location + "");
        var t = i.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var s = n.length - 1; s > -1 && (!e || !/^http(s?):/.test(e));) e = n[s--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
    })(), (() => {
        var e = {
            1112: 1
        };
        i.f.i = (t, n) => {
            e[t] || importScripts(i.p + i.u(t))
        };
        var t = self.webpackChunktelegram_t = self.webpackChunktelegram_t || [],
            n = t.push.bind(t);
        t.push = t => {
            var [s, a, o] = t;
            for (var r in a) i.o(a, r) && (i.m[r] = a[r]);
            for (o && o(i); s.length;) e[s.pop()] = 1;
            n(t)
        }
    })(), t = i.x, i.x = () => Promise.all([7784, 8287, 4486, 5985].map(i.e, i)).then(t), i.x()
})();