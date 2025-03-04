(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
    [4486], {
        7692: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                CTR: () => g,
                IGE: () => d,
                default: () => w
            });
            var n = new Uint8Array(256),
                o = new Uint8Array(256),
                i = new Uint32Array(256),
                u = new Uint32Array(256),
                a = new Uint32Array(256),
                s = new Uint32Array(256),
                p = new Uint32Array(256),
                c = new Uint32Array(256),
                l = new Uint32Array(256),
                f = new Uint32Array(256);

            function h(t) {
                if (t instanceof Uint32Array) return t;
                if ("string" == typeof t) {
                    if (t.length % 4 != 0)
                        for (var e = t.length % 4; e <= 4; e++) t += "\0x00";
                    var r = new Uint32Array(t.length / 4);
                    for (e = 0; e < t.length; e += 4) r[e / 4] = (o = e, (n = t).charCodeAt(o) << 24 ^ n.charCodeAt(o + 1) << 16 ^ n.charCodeAt(o + 2) << 8 ^ n.charCodeAt(o + 3));
                    return r
                }
                var n, o;
                if (t instanceof Uint8Array) {
                    for (r = new Uint32Array(t.length / 4), e = 0; e < t.length; e += 4) r[e / 4] = t[e] << 24 ^ t[e + 1] << 16 ^ t[e + 2] << 8 ^ t[e + 3];
                    return r
                }
                throw new Error("Unable to create 32-bit words")
            }

            function y(t, e, r) {
                void 0 === r && (r = t);
                for (var n = 0; n < t.length; n++) r[n] = t[n] ^ e[n]
            }! function() {
                for (var t, e, r, h, y, v = new Uint8Array(256), d = new Uint8Array(256), g = 0, w = 0, m = 0; m < 256; m++) v[m] = m << 1 ^ 283 * (m >> 7), d[v[m] ^ m] = m;
                for (; !n[g]; g ^= t || 1) r = (r = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4) >> 8 ^ 255 & r ^ 99, n[g] = r, o[r] = g, y = 16843009 * v[e = v[t = v[g]]] ^ 65537 * e ^ 257 * t ^ 16843008 * g, h = 257 * v[r] ^ 16843008 * r, i[g] = h = h << 24 ^ h >>> 8, u[g] = h = h << 24 ^ h >>> 8, a[g] = h = h << 24 ^ h >>> 8, s[g] = h = h << 24 ^ h >>> 8, p[r] = y = y << 24 ^ y >>> 8, c[r] = y = y << 24 ^ y >>> 8, l[r] = y = y << 24 ^ y >>> 8, f[r] = y = y << 24 ^ y >>> 8, w = d[w] || 1
            }();
            var v = function() {
                    function t(t) {
                        var e = h(t);
                        if (4 !== e.length && 6 !== e.length && 8 !== e.length) throw new Error("Invalid key size");
                        this.encKey = new Uint32Array(4 * e.length + 28), this.decKey = new Uint32Array(4 * e.length + 28), this.encKey.set(e);
                        for (var r, o = 1, i = e.length; i < 4 * e.length + 28; i++) r = this.encKey[i - 1], (i % e.length == 0 || 8 === e.length && i % e.length == 4) && (r = n[r >>> 24] << 24 ^ n[r >> 16 & 255] << 16 ^ n[r >> 8 & 255] << 8 ^ n[255 & r], i % e.length == 0 && (r = r << 8 ^ r >>> 24 ^ o << 24, o = o << 1 ^ 283 * (o >> 7))), this.encKey[i] = this.encKey[i - e.length] ^ r;
                        for (var u = 0; i; u++, i--) r = this.encKey[3 & u ? i : i - 4], this.decKey[u] = i <= 4 || u < 4 ? r : p[n[r >>> 24]] ^ c[n[r >> 16 & 255]] ^ l[n[r >> 8 & 255]] ^ f[n[255 & r]]
                    }
                    return t.prototype.encrypt = function(t) {
                        for (var e, r, o, p = h(t), c = new Uint32Array(4), l = p[0] ^ this.encKey[0], f = p[1] ^ this.encKey[1], y = p[2] ^ this.encKey[2], v = p[3] ^ this.encKey[3], d = this.encKey.length / 4 - 2, g = 4, w = 0; w < d; w++) e = i[l >>> 24] ^ u[f >> 16 & 255] ^ a[y >> 8 & 255] ^ s[255 & v] ^ this.encKey[g], r = i[f >>> 24] ^ u[y >> 16 & 255] ^ a[v >> 8 & 255] ^ s[255 & l] ^ this.encKey[g + 1], o = i[y >>> 24] ^ u[v >> 16 & 255] ^ a[l >> 8 & 255] ^ s[255 & f] ^ this.encKey[g + 2], v = i[v >>> 24] ^ u[l >> 16 & 255] ^ a[f >> 8 & 255] ^ s[255 & y] ^ this.encKey[g + 3], l = e, f = r, y = o, g += 4;
                        for (w = 0; w < 4; w++) c[w] = n[l >>> 24] << 24 ^ n[f >> 16 & 255] << 16 ^ n[y >> 8 & 255] << 8 ^ n[255 & v] ^ this.encKey[g++], e = l, l = f, f = y, y = v, v = e;
                        return c
                    }, t.prototype.decrypt = function(t) {
                        for (var e, r, n, i = h(t), u = new Uint32Array(4), a = i[0] ^ this.decKey[0], s = i[3] ^ this.decKey[1], y = i[2] ^ this.decKey[2], v = i[1] ^ this.decKey[3], d = this.decKey.length / 4 - 2, g = 4, w = 0; w < d; w++) e = p[a >>> 24] ^ c[s >> 16 & 255] ^ l[y >> 8 & 255] ^ f[255 & v] ^ this.decKey[g], r = p[s >>> 24] ^ c[y >> 16 & 255] ^ l[v >> 8 & 255] ^ f[255 & a] ^ this.decKey[g + 1], n = p[y >>> 24] ^ c[v >> 16 & 255] ^ l[a >> 8 & 255] ^ f[255 & s] ^ this.decKey[g + 2], v = p[v >>> 24] ^ c[a >> 16 & 255] ^ l[s >> 8 & 255] ^ f[255 & y] ^ this.decKey[g + 3], a = e, s = r, y = n, g += 4;
                        for (w = 0; w < 4; w++) u[3 & -w] = o[a >>> 24] << 24 ^ o[s >> 16 & 255] << 16 ^ o[y >> 8 & 255] << 8 ^ o[255 & v] ^ this.decKey[g++], e = a, a = s, s = y, y = v, v = e;
                        return u
                    }, t
                }(),
                d = function() {
                    function t(t, e, r) {
                        void 0 === r && (r = 16), this.key = h(t), this.iv = h(e), this.cipher = new v(t), this.blockSize = r / 4
                    }
                    return t.prototype.encrypt = function(t, e) {
                        for (var r = h(t), n = e || new Uint32Array(r.length), o = this.iv.subarray(this.blockSize, this.iv.length), i = this.iv.subarray(0, this.blockSize), u = new Uint32Array(this.blockSize), a = 0; a < r.length; a += this.blockSize) {
                            var s = r.subarray(a, a + this.blockSize);
                            y(s, i, u);
                            var p = this.cipher.encrypt(u);
                            y(p, o), o = s, i = p;
                            for (var c = a, l = 0; c < r.length && l < 4; c++, l++) n[c] = p[l]
                        }
                        return n
                    }, t.prototype.decrypt = function(t, e) {
                        for (var r = h(t), n = e || new Uint32Array(r.length), o = this.iv.subarray(this.blockSize, this.iv.length), i = this.iv.subarray(0, this.blockSize), u = new Uint32Array(this.blockSize), a = 0; a < n.length; a += this.blockSize) {
                            var s = r.subarray(a, a + this.blockSize);
                            y(s, o, u);
                            var p = this.cipher.decrypt(u);
                            y(p, i), i = s, o = p;
                            for (var c = a, l = 0; c < n.length && l < 4; c++, l++) n[c] = p[l]
                        }
                        return n
                    }, t
                }(),
                g = function() {
                    function t(t, e, r) {
                        if (void 0 === r && (r = 16), this.offset = 0, this.key = h(t), this.counter = h(e), this.cipher = new v(t), this.blockSize = r / 4, 4 !== this.counter.length) throw new Error("AES-CTR mode counter must be 16 bytes length")
                    }
                    return t.prototype.encrypt = function(t, e) {
                        for (var r = h(t), n = e || new Uint32Array(r.length), o = this.offset, i = 0; i < r.length; i += this.blockSize) {
                            for (var u = this.cipher.encrypt(this.counter), a = i, s = o; a < r.length && s < this.blockSize; a++, s++) n[a] = u[s] ^ r[a];
                            r.length - i >= this.blockSize && this.incrementCounter(), o && (i -= o, o = 0)
                        }
                        return this.offset = (this.offset + r.length % 4) % 4, n
                    }, t.prototype.decrypt = function(t, e) {
                        return this.encrypt(t, e)
                    }, t.prototype.incrementCounter = function() {
                        for (var t = this.counter.length - 1; t >= 0 && !(++this.counter[t] < 4294967295); t--);
                    }, t
                }();
            const w = v
        },
        47406: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(31635),
                o = r(42919),
                i = function() {
                    function t(t) {
                        this._semaphore = new o.default(1, t)
                    }
                    return t.prototype.acquire = function() {
                        return n.__awaiter(this, arguments, void 0, (function(t) {
                            return void 0 === t && (t = 0), n.__generator(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this._semaphore.acquire(1, t)];
                                    case 1:
                                        return [2, e.sent()[1]]
                                }
                            }))
                        }))
                    }, t.prototype.runExclusive = function(t, e) {
                        return void 0 === e && (e = 0), this._semaphore.runExclusive((function() {
                            return t()
                        }), 1, e)
                    }, t.prototype.isLocked = function() {
                        return this._semaphore.isLocked()
                    }, t.prototype.waitForUnlock = function(t) {
                        return void 0 === t && (t = 0), this._semaphore.waitForUnlock(1, t)
                    }, t.prototype.release = function() {
                        this._semaphore.isLocked() && this._semaphore.release()
                    }, t.prototype.cancel = function() {
                        return this._semaphore.cancel()
                    }, t
                }();
            e.default = i
        },
        42919: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(31635),
                o = r(94586),
                i = function() {
                    function t(t, e) {
                        void 0 === e && (e = o.E_CANCELED), this._value = t, this._cancelError = e, this._queue = [], this._weightedWaiters = []
                    }
                    return t.prototype.acquire = function(t, e) {
                        var r = this;
                        if (void 0 === t && (t = 1), void 0 === e && (e = 0), t <= 0) throw new Error("invalid weight ".concat(t, ": must be positive"));
                        return new Promise((function(n, o) {
                            var i = {
                                    resolve: n,
                                    reject: o,
                                    weight: t,
                                    priority: e
                                },
                                a = u(r._queue, (function(t) {
                                    return e <= t.priority
                                })); - 1 === a && t <= r._value ? r._dispatchItem(i) : r._queue.splice(a + 1, 0, i)
                        }))
                    }, t.prototype.runExclusive = function(t) {
                        return n.__awaiter(this, arguments, void 0, (function(t, e, r) {
                            var o, i, u;
                            return void 0 === e && (e = 1), void 0 === r && (r = 0), n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.acquire(e, r)];
                                    case 1:
                                        o = n.sent(), i = o[0], u = o[1], n.label = 2;
                                    case 2:
                                        return n.trys.push([2, , 4, 5]), [4, t(i)];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        return u(), [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.waitForUnlock = function(t, e) {
                        var r = this;
                        if (void 0 === t && (t = 1), void 0 === e && (e = 0), t <= 0) throw new Error("invalid weight ".concat(t, ": must be positive"));
                        return this._couldLockImmediately(t, e) ? Promise.resolve() : new Promise((function(n) {
                            var o, i, a;
                            r._weightedWaiters[t - 1] || (r._weightedWaiters[t - 1] = []), o = r._weightedWaiters[t - 1], i = {
                                resolve: n,
                                priority: e
                            }, a = u(o, (function(t) {
                                return i.priority <= t.priority
                            })), o.splice(a + 1, 0, i)
                        }))
                    }, t.prototype.isLocked = function() {
                        return this._value <= 0
                    }, t.prototype.getValue = function() {
                        return this._value
                    }, t.prototype.setValue = function(t) {
                        this._value = t, this._dispatchQueue()
                    }, t.prototype.release = function(t) {
                        if (void 0 === t && (t = 1), t <= 0) throw new Error("invalid weight ".concat(t, ": must be positive"));
                        this._value += t, this._dispatchQueue()
                    }, t.prototype.cancel = function() {
                        var t = this;
                        this._queue.forEach((function(e) {
                            return e.reject(t._cancelError)
                        })), this._queue = []
                    }, t.prototype._dispatchQueue = function() {
                        for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
                    }, t.prototype._dispatchItem = function(t) {
                        var e = this._value;
                        this._value -= t.weight, t.resolve([e, this._newReleaser(t.weight)])
                    }, t.prototype._newReleaser = function(t) {
                        var e = this,
                            r = !1;
                        return function() {
                            r || (r = !0, e.release(t))
                        }
                    }, t.prototype._drainUnlockWaiters = function() {
                        if (0 === this._queue.length)
                            for (var t = this._value; t > 0; t--)(r = this._weightedWaiters[t - 1]) && (r.forEach((function(t) {
                                return t.resolve()
                            })), this._weightedWaiters[t - 1] = []);
                        else {
                            var e = this._queue[0].priority;
                            for (t = this._value; t > 0; t--) {
                                var r;
                                if (r = this._weightedWaiters[t - 1]) {
                                    var n = r.findIndex((function(t) {
                                        return t.priority <= e
                                    }));
                                    (-1 === n ? r : r.splice(0, n)).forEach((function(t) {
                                        return t.resolve()
                                    }))
                                }
                            }
                        }
                    }, t.prototype._couldLockImmediately = function(t, e) {
                        return (0 === this._queue.length || this._queue[0].priority < e) && t <= this._value
                    }, t
                }();

            function u(t, e) {
                for (var r = t.length - 1; r >= 0; r--)
                    if (e(t[r])) return r;
                return -1
            }
            e.default = i
        },
        94586: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.E_CANCELED = e.E_ALREADY_LOCKED = e.E_TIMEOUT = void 0, e.E_TIMEOUT = new Error("timeout while waiting for mutex to become available"), e.E_ALREADY_LOCKED = new Error("mutex already locked"), e.E_CANCELED = new Error("request for lock canceled")
        },
        56693: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.tryAcquire = e.withTimeout = e.Semaphore = e.Mutex = void 0;
            var n = r(31635),
                o = r(47406);
            Object.defineProperty(e, "Mutex", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var i = r(42919);
            Object.defineProperty(e, "Semaphore", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var u = r(92646);
            Object.defineProperty(e, "withTimeout", {
                enumerable: !0,
                get: function() {
                    return u.withTimeout
                }
            });
            var a = r(28746);
            Object.defineProperty(e, "tryAcquire", {
                enumerable: !0,
                get: function() {
                    return a.tryAcquire
                }
            }), n.__exportStar(r(94586), e)
        },
        28746: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.tryAcquire = void 0;
            var n = r(94586),
                o = r(92646);
            e.tryAcquire = function(t, e) {
                return void 0 === e && (e = n.E_ALREADY_LOCKED), (0, o.withTimeout)(t, 0, e)
            }
        },
        92646: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.withTimeout = void 0;
            var n = r(31635),
                o = r(94586);

            function i(t) {
                return void 0 !== t.getValue
            }
            e.withTimeout = function(t, e, r) {
                var u = this;
                return void 0 === r && (r = o.E_TIMEOUT), {
                    acquire: function(o, a) {
                        var s;
                        if (i(t) ? s = o : (s = void 0, a = o), void 0 !== s && s <= 0) throw new Error("invalid weight ".concat(s, ": must be positive"));
                        return new Promise((function(o, p) {
                            return n.__awaiter(u, void 0, void 0, (function() {
                                var u, c, l, f;
                                return n.__generator(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            u = !1, c = setTimeout((function() {
                                                u = !0, p(r)
                                            }), e), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, i(t) ? t.acquire(s, a) : t.acquire(a)];
                                        case 2:
                                            return l = n.sent(), u ? (Array.isArray(l) ? l[1] : l)() : (clearTimeout(c), o(l)), [3, 4];
                                        case 3:
                                            return f = n.sent(), u || (clearTimeout(c), p(f)), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    },
                    runExclusive: function(t, e, r) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var o, i;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        o = function() {}, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, , 7, 8]), [4, this.acquire(e, r)];
                                    case 2:
                                        return i = n.sent(), Array.isArray(i) ? (o = i[1], [4, t(i[0])]) : [3, 4];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        return o = i, [4, t()];
                                    case 5:
                                        return [2, n.sent()];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return o(), [7];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    release: function(e) {
                        t.release(e)
                    },
                    cancel: function() {
                        return t.cancel()
                    },
                    waitForUnlock: function(n, o) {
                        var u;
                        if (i(t) ? u = n : (u = void 0, o = n), void 0 !== u && u <= 0) throw new Error("invalid weight ".concat(u, ": must be positive"));
                        return new Promise((function(n, a) {
                            var s = setTimeout((function() {
                                return a(r)
                            }), e);
                            (i(t) ? t.waitForUnlock(u, o) : t.waitForUnlock(o)).then((function() {
                                clearTimeout(s), n()
                            }))
                        }))
                    },
                    isLocked: function() {
                        return t.isLocked()
                    },
                    getValue: function() {
                        return t.getValue()
                    },
                    setValue: function(e) {
                        return t.setValue(e)
                    }
                }
            }
        },
        92096: (t, e, r) => {
            var n;
            t = r.nmd(t);
            var o = function(t) {
                "use strict";
                var e = 1e7,
                    r = 7,
                    n = 9007199254740992,
                    i = h(n),
                    u = "0123456789abcdefghijklmnopqrstuvwxyz",
                    a = "function" == typeof BigInt;

                function s(t, e, r, n) {
                    return void 0 === t ? s[0] : void 0 === e || 10 == +e && !r ? X(t) : V(t, e, r, n)
                }

                function p(t, e) {
                    this.value = t, this.sign = e, this.isSmall = !1
                }

                function c(t) {
                    this.value = t, this.sign = t < 0, this.isSmall = !0
                }

                function l(t) {
                    this.value = t
                }

                function f(t) {
                    return -n < t && t < n
                }

                function h(t) {
                    return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
                }

                function y(t) {
                    v(t);
                    var r = t.length;
                    if (r < 4 && I(t, i) < 0) switch (r) {
                        case 0:
                            return 0;
                        case 1:
                            return t[0];
                        case 2:
                            return t[0] + t[1] * e;
                        default:
                            return t[0] + (t[1] + t[2] * e) * e
                    }
                    return t
                }

                function v(t) {
                    for (var e = t.length; 0 === t[--e];);
                    t.length = e + 1
                }

                function d(t) {
                    for (var e = new Array(t), r = -1; ++r < t;) e[r] = 0;
                    return e
                }

                function g(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                }

                function w(t, r) {
                    var n, o, i = t.length,
                        u = r.length,
                        a = new Array(i),
                        s = 0,
                        p = e;
                    for (o = 0; o < u; o++) s = (n = t[o] + r[o] + s) >= p ? 1 : 0, a[o] = n - s * p;
                    for (; o < i;) s = (n = t[o] + s) === p ? 1 : 0, a[o++] = n - s * p;
                    return s > 0 && a.push(s), a
                }

                function m(t, e) {
                    return t.length >= e.length ? w(t, e) : w(e, t)
                }

                function b(t, r) {
                    var n, o, i = t.length,
                        u = new Array(i),
                        a = e;
                    for (o = 0; o < i; o++) n = t[o] - a + r, r = Math.floor(n / a), u[o] = n - r * a, r += 1;
                    for (; r > 0;) u[o++] = r % a, r = Math.floor(r / a);
                    return u
                }

                function _(t, r) {
                    var n, o, i = t.length,
                        u = r.length,
                        a = new Array(i),
                        s = 0,
                        p = e;
                    for (n = 0; n < u; n++)(o = t[n] - s - r[n]) < 0 ? (o += p, s = 1) : s = 0, a[n] = o;
                    for (n = u; n < i; n++) {
                        if (!((o = t[n] - s) < 0)) {
                            a[n++] = o;
                            break
                        }
                        o += p, a[n] = o
                    }
                    for (; n < i; n++) a[n] = t[n];
                    return v(a), a
                }

                function E(t, r, n) {
                    var o, i, u = t.length,
                        a = new Array(u),
                        s = -r,
                        l = e;
                    for (o = 0; o < u; o++) i = t[o] + s, s = Math.floor(i / l), i %= l, a[o] = i < 0 ? i + l : i;
                    return "number" == typeof(a = y(a)) ? (n && (a = -a), new c(a)) : new p(a, n)
                }

                function S(t, r) {
                    var n, o, i, u, a = t.length,
                        s = r.length,
                        p = d(a + s),
                        c = e;
                    for (i = 0; i < a; ++i) {
                        u = t[i];
                        for (var l = 0; l < s; ++l) n = u * r[l] + p[i + l], o = Math.floor(n / c), p[i + l] = n - o * c, p[i + l + 1] += o
                    }
                    return v(p), p
                }

                function O(t, r) {
                    var n, o, i = t.length,
                        u = new Array(i),
                        a = e,
                        s = 0;
                    for (o = 0; o < i; o++) n = t[o] * r + s, s = Math.floor(n / a), u[o] = n - s * a;
                    for (; s > 0;) u[o++] = s % a, s = Math.floor(s / a);
                    return u
                }

                function A(t, e) {
                    for (var r = []; e-- > 0;) r.push(0);
                    return r.concat(t)
                }

                function P(t, e) {
                    var r = Math.max(t.length, e.length);
                    if (r <= 30) return S(t, e);
                    r = Math.ceil(r / 2);
                    var n = t.slice(r),
                        o = t.slice(0, r),
                        i = e.slice(r),
                        u = e.slice(0, r),
                        a = P(o, u),
                        s = P(n, i),
                        p = P(m(o, n), m(u, i)),
                        c = m(m(a, A(_(_(p, a), s), r)), A(s, 2 * r));
                    return v(c), c
                }

                function q(t, r, n) {
                    return new p(t < e ? O(r, t) : S(r, h(t)), n)
                }

                function k(t) {
                    var r, n, o, i, u = t.length,
                        a = d(u + u),
                        s = e;
                    for (o = 0; o < u; o++) {
                        n = 0 - (i = t[o]) * i;
                        for (var p = o; p < u; p++) r = i * t[p] * 2 + a[o + p] + n, n = Math.floor(r / s), a[o + p] = r - n * s;
                        a[o + u] = n
                    }
                    return v(a), a
                }

                function j(t, r) {
                    var n, o, i, u, a = t.length,
                        s = d(a),
                        p = e;
                    for (i = 0, n = a - 1; n >= 0; --n) i = (u = i * p + t[n]) - (o = g(u / r)) * r, s[n] = 0 | o;
                    return [s, 0 | i]
                }

                function M(t, r) {
                    var n, o = X(r);
                    if (a) return [new l(t.value / o.value), new l(t.value % o.value)];
                    var i, u = t.value,
                        f = o.value;
                    if (0 === f) throw new Error("Cannot divide by zero");
                    if (t.isSmall) return o.isSmall ? [new c(g(u / f)), new c(u % f)] : [s[0], t];
                    if (o.isSmall) {
                        if (1 === f) return [t, s[0]];
                        if (-1 == f) return [t.negate(), s[0]];
                        var w = Math.abs(f);
                        if (w < e) {
                            i = y((n = j(u, w))[0]);
                            var m = n[1];
                            return t.sign && (m = -m), "number" == typeof i ? (t.sign !== o.sign && (i = -i), [new c(i), new c(m)]) : [new p(i, t.sign !== o.sign), new c(m)]
                        }
                        f = h(w)
                    }
                    var b = I(u, f);
                    if (-1 === b) return [s[0], t];
                    if (0 === b) return [s[t.sign === o.sign ? 1 : -1], s[0]];
                    n = u.length + f.length <= 200 ? function(t, r) {
                        var n, o, i, u, a, s, p, c = t.length,
                            l = r.length,
                            f = e,
                            h = d(r.length),
                            v = r[l - 1],
                            g = Math.ceil(f / (2 * v)),
                            w = O(t, g),
                            m = O(r, g);
                        for (w.length <= c && w.push(0), m.push(0), v = m[l - 1], o = c - l; o >= 0; o--) {
                            for (n = f - 1, w[o + l] !== v && (n = Math.floor((w[o + l] * f + w[o + l - 1]) / v)), i = 0, u = 0, s = m.length, a = 0; a < s; a++) i += n * m[a], p = Math.floor(i / f), u += w[o + a] - (i - p * f), i = p, u < 0 ? (w[o + a] = u + f, u = -1) : (w[o + a] = u, u = 0);
                            for (; 0 !== u;) {
                                for (n -= 1, i = 0, a = 0; a < s; a++)(i += w[o + a] - f + m[a]) < 0 ? (w[o + a] = i + f, i = 0) : (w[o + a] = i, i = 1);
                                u += i
                            }
                            h[o] = n
                        }
                        return w = j(w, g)[0], [y(h), y(w)]
                    }(u, f) : function(t, r) {
                        for (var n, o, i, u, a, s = t.length, p = r.length, c = [], l = [], f = e; s;)
                            if (l.unshift(t[--s]), v(l), I(l, r) < 0) c.push(0);
                            else {
                                i = l[(o = l.length) - 1] * f + l[o - 2], u = r[p - 1] * f + r[p - 2], o > p && (i = (i + 1) * f), n = Math.ceil(i / u);
                                do {
                                    if (I(a = O(r, n), l) <= 0) break;
                                    n--
                                } while (n);
                                c.push(n), l = _(l, a)
                            } return c.reverse(), [y(c), y(l)]
                    }(u, f), i = n[0];
                    var E = t.sign !== o.sign,
                        S = n[1],
                        A = t.sign;
                    return "number" == typeof i ? (E && (i = -i), i = new c(i)) : i = new p(i, E), "number" == typeof S ? (A && (S = -S), S = new c(S)) : S = new p(S, A), [i, S]
                }

                function I(t, e) {
                    if (t.length !== e.length) return t.length > e.length ? 1 : -1;
                    for (var r = t.length - 1; r >= 0; r--)
                        if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
                    return 0
                }

                function U(t) {
                    var e = t.abs();
                    return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0))
                }

                function x(t, e) {
                    for (var r, n, i, u = t.prev(), a = u, s = 0; a.isEven();) a = a.divide(2), s++;
                    t: for (n = 0; n < e.length; n++)
                        if (!t.lesser(e[n]) && !(i = o(e[n]).modPow(a, t)).isUnit() && !i.equals(u)) {
                            for (r = s - 1; 0 != r; r--) {
                                if ((i = i.square().mod(t)).isUnit()) return !1;
                                if (i.equals(u)) continue t
                            }
                            return !1
                        }
                    return !0
                }
                p.prototype = Object.create(s.prototype), c.prototype = Object.create(s.prototype), l.prototype = Object.create(s.prototype), p.prototype.add = function(t) {
                    var e = X(t);
                    if (this.sign !== e.sign) return this.subtract(e.negate());
                    var r = this.value,
                        n = e.value;
                    return e.isSmall ? new p(b(r, Math.abs(n)), this.sign) : new p(m(r, n), this.sign)
                }, p.prototype.plus = p.prototype.add, c.prototype.add = function(t) {
                    var e = X(t),
                        r = this.value;
                    if (r < 0 !== e.sign) return this.subtract(e.negate());
                    var n = e.value;
                    if (e.isSmall) {
                        if (f(r + n)) return new c(r + n);
                        n = h(Math.abs(n))
                    }
                    return new p(b(n, Math.abs(r)), r < 0)
                }, c.prototype.plus = c.prototype.add, l.prototype.add = function(t) {
                    return new l(this.value + X(t).value)
                }, l.prototype.plus = l.prototype.add, p.prototype.subtract = function(t) {
                    var e = X(t);
                    if (this.sign !== e.sign) return this.add(e.negate());
                    var r = this.value,
                        n = e.value;
                    return e.isSmall ? E(r, Math.abs(n), this.sign) : function(t, e, r) {
                        var n;
                        return I(t, e) >= 0 ? n = _(t, e) : (n = _(e, t), r = !r), "number" == typeof(n = y(n)) ? (r && (n = -n), new c(n)) : new p(n, r)
                    }(r, n, this.sign)
                }, p.prototype.minus = p.prototype.subtract, c.prototype.subtract = function(t) {
                    var e = X(t),
                        r = this.value;
                    if (r < 0 !== e.sign) return this.add(e.negate());
                    var n = e.value;
                    return e.isSmall ? new c(r - n) : E(n, Math.abs(r), r >= 0)
                }, c.prototype.minus = c.prototype.subtract, l.prototype.subtract = function(t) {
                    return new l(this.value - X(t).value)
                }, l.prototype.minus = l.prototype.subtract, p.prototype.negate = function() {
                    return new p(this.value, !this.sign)
                }, c.prototype.negate = function() {
                    var t = this.sign,
                        e = new c(-this.value);
                    return e.sign = !t, e
                }, l.prototype.negate = function() {
                    return new l(-this.value)
                }, p.prototype.abs = function() {
                    return new p(this.value, !1)
                }, c.prototype.abs = function() {
                    return new c(Math.abs(this.value))
                }, l.prototype.abs = function() {
                    return new l(this.value >= 0 ? this.value : -this.value)
                }, p.prototype.multiply = function(t) {
                    var r, n, o, i = X(t),
                        u = this.value,
                        a = i.value,
                        c = this.sign !== i.sign;
                    if (i.isSmall) {
                        if (0 === a) return s[0];
                        if (1 === a) return this;
                        if (-1 === a) return this.negate();
                        if ((r = Math.abs(a)) < e) return new p(O(u, r), c);
                        a = h(r)
                    }
                    return new p(-.012 * (n = u.length) - .012 * (o = a.length) + 15e-6 * n * o > 0 ? P(u, a) : S(u, a), c)
                }, p.prototype.times = p.prototype.multiply, c.prototype._multiplyBySmall = function(t) {
                    return f(t.value * this.value) ? new c(t.value * this.value) : q(Math.abs(t.value), h(Math.abs(this.value)), this.sign !== t.sign)
                }, p.prototype._multiplyBySmall = function(t) {
                    return 0 === t.value ? s[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : q(Math.abs(t.value), this.value, this.sign !== t.sign)
                }, c.prototype.multiply = function(t) {
                    return X(t)._multiplyBySmall(this)
                }, c.prototype.times = c.prototype.multiply, l.prototype.multiply = function(t) {
                    return new l(this.value * X(t).value)
                }, l.prototype.times = l.prototype.multiply, p.prototype.square = function() {
                    return new p(k(this.value), !1)
                }, c.prototype.square = function() {
                    var t = this.value * this.value;
                    return f(t) ? new c(t) : new p(k(h(Math.abs(this.value))), !1)
                }, l.prototype.square = function(t) {
                    return new l(this.value * this.value)
                }, p.prototype.divmod = function(t) {
                    var e = M(this, t);
                    return {
                        quotient: e[0],
                        remainder: e[1]
                    }
                }, l.prototype.divmod = c.prototype.divmod = p.prototype.divmod, p.prototype.divide = function(t) {
                    return M(this, t)[0]
                }, l.prototype.over = l.prototype.divide = function(t) {
                    return new l(this.value / X(t).value)
                }, c.prototype.over = c.prototype.divide = p.prototype.over = p.prototype.divide, p.prototype.mod = function(t) {
                    return M(this, t)[1]
                }, l.prototype.mod = l.prototype.remainder = function(t) {
                    return new l(this.value % X(t).value)
                }, c.prototype.remainder = c.prototype.mod = p.prototype.remainder = p.prototype.mod, p.prototype.pow = function(t) {
                    var e, r, n, o = X(t),
                        i = this.value,
                        u = o.value;
                    if (0 === u) return s[1];
                    if (0 === i) return s[0];
                    if (1 === i) return s[1];
                    if (-1 === i) return o.isEven() ? s[1] : s[-1];
                    if (o.sign) return s[0];
                    if (!o.isSmall) throw new Error("The exponent " + o.toString() + " is too large.");
                    if (this.isSmall && f(e = Math.pow(i, u))) return new c(g(e));
                    for (r = this, n = s[1]; !0 & u && (n = n.times(r), --u), 0 !== u;) u /= 2, r = r.square();
                    return n
                }, c.prototype.pow = p.prototype.pow, l.prototype.pow = function(t) {
                    var e = X(t),
                        r = this.value,
                        n = e.value,
                        o = BigInt(0),
                        i = BigInt(1),
                        u = BigInt(2);
                    if (n === o) return s[1];
                    if (r === o) return s[0];
                    if (r === i) return s[1];
                    if (r === BigInt(-1)) return e.isEven() ? s[1] : s[-1];
                    if (e.isNegative()) return new l(o);
                    for (var a = this, p = s[1];
                        (n & i) === i && (p = p.times(a), --n), n !== o;) n /= u, a = a.square();
                    return p
                }, p.prototype.modPow = function(t, e) {
                    if (t = X(t), (e = X(e)).isZero()) throw new Error("Cannot take modPow with modulus 0");
                    var r = s[1],
                        n = this.mod(e);
                    for (t.isNegative() && (t = t.multiply(s[-1]), n = n.modInv(e)); t.isPositive();) {
                        if (n.isZero()) return s[0];
                        t.isOdd() && (r = r.multiply(n).mod(e)), t = t.divide(2), n = n.square().mod(e)
                    }
                    return r
                }, l.prototype.modPow = c.prototype.modPow = p.prototype.modPow, p.prototype.compareAbs = function(t) {
                    var e = X(t),
                        r = this.value,
                        n = e.value;
                    return e.isSmall ? 1 : I(r, n)
                }, c.prototype.compareAbs = function(t) {
                    var e = X(t),
                        r = Math.abs(this.value),
                        n = e.value;
                    return e.isSmall ? r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1 : -1
                }, l.prototype.compareAbs = function(t) {
                    var e = this.value,
                        r = X(t).value;
                    return (e = e >= 0 ? e : -e) === (r = r >= 0 ? r : -r) ? 0 : e > r ? 1 : -1
                }, p.prototype.compare = function(t) {
                    if (t === 1 / 0) return -1;
                    if (t === -1 / 0) return 1;
                    var e = X(t),
                        r = this.value,
                        n = e.value;
                    return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : I(r, n) * (this.sign ? -1 : 1)
                }, p.prototype.compareTo = p.prototype.compare, c.prototype.compare = function(t) {
                    if (t === 1 / 0) return -1;
                    if (t === -1 / 0) return 1;
                    var e = X(t),
                        r = this.value,
                        n = e.value;
                    return e.isSmall ? r == n ? 0 : r > n ? 1 : -1 : r < 0 !== e.sign ? r < 0 ? -1 : 1 : r < 0 ? 1 : -1
                }, c.prototype.compareTo = c.prototype.compare, l.prototype.compare = function(t) {
                    if (t === 1 / 0) return -1;
                    if (t === -1 / 0) return 1;
                    var e = this.value,
                        r = X(t).value;
                    return e === r ? 0 : e > r ? 1 : -1
                }, l.prototype.compareTo = l.prototype.compare, p.prototype.equals = function(t) {
                    return 0 === this.compare(t)
                }, l.prototype.eq = l.prototype.equals = c.prototype.eq = c.prototype.equals = p.prototype.eq = p.prototype.equals, p.prototype.notEquals = function(t) {
                    return 0 !== this.compare(t)
                }, l.prototype.neq = l.prototype.notEquals = c.prototype.neq = c.prototype.notEquals = p.prototype.neq = p.prototype.notEquals, p.prototype.greater = function(t) {
                    return this.compare(t) > 0
                }, l.prototype.gt = l.prototype.greater = c.prototype.gt = c.prototype.greater = p.prototype.gt = p.prototype.greater, p.prototype.lesser = function(t) {
                    return this.compare(t) < 0
                }, l.prototype.lt = l.prototype.lesser = c.prototype.lt = c.prototype.lesser = p.prototype.lt = p.prototype.lesser, p.prototype.greaterOrEquals = function(t) {
                    return this.compare(t) >= 0
                }, l.prototype.geq = l.prototype.greaterOrEquals = c.prototype.geq = c.prototype.greaterOrEquals = p.prototype.geq = p.prototype.greaterOrEquals, p.prototype.lesserOrEquals = function(t) {
                    return this.compare(t) <= 0
                }, l.prototype.leq = l.prototype.lesserOrEquals = c.prototype.leq = c.prototype.lesserOrEquals = p.prototype.leq = p.prototype.lesserOrEquals, p.prototype.isEven = function() {
                    return !(1 & this.value[0])
                }, c.prototype.isEven = function() {
                    return !(1 & this.value)
                }, l.prototype.isEven = function() {
                    return (this.value & BigInt(1)) === BigInt(0)
                }, p.prototype.isOdd = function() {
                    return !(1 & ~this.value[0])
                }, c.prototype.isOdd = function() {
                    return !(1 & ~this.value)
                }, l.prototype.isOdd = function() {
                    return (this.value & BigInt(1)) === BigInt(1)
                }, p.prototype.isPositive = function() {
                    return !this.sign
                }, c.prototype.isPositive = function() {
                    return this.value > 0
                }, l.prototype.isPositive = c.prototype.isPositive, p.prototype.isNegative = function() {
                    return this.sign
                }, c.prototype.isNegative = function() {
                    return this.value < 0
                }, l.prototype.isNegative = c.prototype.isNegative, p.prototype.isUnit = function() {
                    return !1
                }, c.prototype.isUnit = function() {
                    return 1 === Math.abs(this.value)
                }, l.prototype.isUnit = function() {
                    return this.abs().value === BigInt(1)
                }, p.prototype.isZero = function() {
                    return !1
                }, c.prototype.isZero = function() {
                    return 0 === this.value
                }, l.prototype.isZero = function() {
                    return this.value === BigInt(0)
                }, p.prototype.isDivisibleBy = function(t) {
                    var e = X(t);
                    return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
                }, l.prototype.isDivisibleBy = c.prototype.isDivisibleBy = p.prototype.isDivisibleBy, p.prototype.isPrime = function(e) {
                    var r = U(this);
                    if (r !== t) return r;
                    var n = this.abs(),
                        i = n.bitLength();
                    if (i <= 64) return x(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                    for (var u = Math.log(2) * i.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(u, 2) : u), s = [], p = 0; p < a; p++) s.push(o(p + 2));
                    return x(n, s)
                }, l.prototype.isPrime = c.prototype.isPrime = p.prototype.isPrime, p.prototype.isProbablePrime = function(e, r) {
                    var n = U(this);
                    if (n !== t) return n;
                    for (var i = this.abs(), u = e === t ? 5 : e, a = [], s = 0; s < u; s++) a.push(o.randBetween(2, i.minus(2), r));
                    return x(i, a)
                }, l.prototype.isProbablePrime = c.prototype.isProbablePrime = p.prototype.isProbablePrime, p.prototype.modInv = function(t) {
                    for (var e, r, n, i = o.zero, u = o.one, a = X(t), s = this.abs(); !s.isZero();) e = a.divide(s), r = i, n = a, i = u, a = s, u = r.subtract(e.multiply(u)), s = n.subtract(e.multiply(s));
                    if (!a.isUnit()) throw new Error(this.toString() + " and " + t.toString() + " are not co-prime");
                    return -1 === i.compare(0) && (i = i.add(t)), this.isNegative() ? i.negate() : i
                }, l.prototype.modInv = c.prototype.modInv = p.prototype.modInv, p.prototype.next = function() {
                    var t = this.value;
                    return this.sign ? E(t, 1, this.sign) : new p(b(t, 1), this.sign)
                }, c.prototype.next = function() {
                    var t = this.value;
                    return t + 1 < n ? new c(t + 1) : new p(i, !1)
                }, l.prototype.next = function() {
                    return new l(this.value + BigInt(1))
                }, p.prototype.prev = function() {
                    var t = this.value;
                    return this.sign ? new p(b(t, 1), !0) : E(t, 1, this.sign)
                }, c.prototype.prev = function() {
                    var t = this.value;
                    return t - 1 > -n ? new c(t - 1) : new p(i, !0)
                }, l.prototype.prev = function() {
                    return new l(this.value - BigInt(1))
                };
                for (var N = [1]; 2 * N[N.length - 1] <= e;) N.push(2 * N[N.length - 1]);
                var T = N.length,
                    L = N[T - 1];

                function K(t) {
                    return Math.abs(t) <= e
                }

                function B(t, e, r) {
                    e = X(e);
                    for (var n = t.isNegative(), i = e.isNegative(), u = n ? t.not() : t, a = i ? e.not() : e, s = 0, p = 0, c = null, l = null, f = []; !u.isZero() || !a.isZero();) s = (c = M(u, L))[1].toJSNumber(), n && (s = L - 1 - s), p = (l = M(a, L))[1].toJSNumber(), i && (p = L - 1 - p), u = c[0], a = l[0], f.push(r(s, p));
                    for (var h = 0 !== r(n ? 1 : 0, i ? 1 : 0) ? o(-1) : o(0), y = f.length - 1; y >= 0; y -= 1) h = h.multiply(L).add(o(f[y]));
                    return h
                }
                p.prototype.shiftLeft = function(t) {
                    var e = X(t).toJSNumber();
                    if (!K(e)) throw new Error(String(e) + " is too large for shifting.");
                    if (e < 0) return this.shiftRight(-e);
                    var r = this;
                    if (r.isZero()) return r;
                    for (; e >= T;) r = r.multiply(L), e -= T - 1;
                    return r.multiply(N[e])
                }, l.prototype.shiftLeft = function(t) {
                    return t = X(t), new l(this.value << t.value)
                }, c.prototype.shiftLeft = p.prototype.shiftLeft, p.prototype.shiftRight = function(t) {
                    var e, r = X(t).toJSNumber();
                    if (!K(r)) throw new Error(String(r) + " is too large for shifting.");
                    if (r < 0) return this.shiftLeft(-r);
                    for (var n = this; r >= T;) {
                        if (n.isZero() || n.isNegative() && n.isUnit()) return n;
                        n = (e = M(n, L))[1].isNegative() ? e[0].prev() : e[0], r -= T - 1
                    }
                    return (e = M(n, N[r]))[1].isNegative() ? e[0].prev() : e[0]
                }, l.prototype.shiftRight = function(t) {
                    return t = X(t), new l(this.value >> t.value)
                }, c.prototype.shiftRight = p.prototype.shiftRight, p.prototype.not = function() {
                    return this.negate().prev()
                }, l.prototype.not = c.prototype.not = p.prototype.not, p.prototype.and = function(t) {
                    return B(this, t, (function(t, e) {
                        return t & e
                    }))
                }, l.prototype.and = c.prototype.and = p.prototype.and, p.prototype.or = function(t) {
                    return B(this, t, (function(t, e) {
                        return t | e
                    }))
                }, l.prototype.or = c.prototype.or = p.prototype.or, p.prototype.xor = function(t) {
                    return B(this, t, (function(t, e) {
                        return t ^ e
                    }))
                }, l.prototype.xor = c.prototype.xor = p.prototype.xor;
                var C = 1 << 30,
                    D = (e & -e) * (e & -e) | C;

                function z(t) {
                    var r = t.value,
                        n = "number" == typeof r ? r | C : "bigint" == typeof r ? r | BigInt(C) : r[0] + r[1] * e | D;
                    return n & -n
                }

                function R(t, e) {
                    if (e.compareTo(t) <= 0) {
                        var r = R(t, e.square(e)),
                            n = r.p,
                            i = r.e,
                            u = n.multiply(e);
                        return u.compareTo(t) <= 0 ? {
                            p: u,
                            e: 2 * i + 1
                        } : {
                            p: n,
                            e: 2 * i
                        }
                    }
                    return {
                        p: o(1),
                        e: 0
                    }
                }

                function Z(t, e) {
                    return t = X(t), e = X(e), t.greater(e) ? t : e
                }

                function J(t, e) {
                    return t = X(t), e = X(e), t.lesser(e) ? t : e
                }

                function F(t, e) {
                    if (t = X(t).abs(), e = X(e).abs(), t.equals(e)) return t;
                    if (t.isZero()) return e;
                    if (e.isZero()) return t;
                    for (var r, n, o = s[1]; t.isEven() && e.isEven();) r = J(z(t), z(e)), t = t.divide(r), e = e.divide(r), o = o.multiply(r);
                    for (; t.isEven();) t = t.divide(z(t));
                    do {
                        for (; e.isEven();) e = e.divide(z(e));
                        t.greater(e) && (n = e, e = t, t = n), e = e.subtract(t)
                    } while (!e.isZero());
                    return o.isUnit() ? t : t.multiply(o)
                }
                p.prototype.bitLength = function() {
                    var t = this;
                    return t.compareTo(o(0)) < 0 && (t = t.negate().subtract(o(1))), 0 === t.compareTo(o(0)) ? o(0) : o(R(t, o(2)).e).add(o(1))
                }, l.prototype.bitLength = c.prototype.bitLength = p.prototype.bitLength;
                var V = function(t, e, r, n) {
                    r = r || u, t = String(t), n || (t = t.toLowerCase(), r = r.toLowerCase());
                    var o, i = t.length,
                        a = Math.abs(e),
                        s = {};
                    for (o = 0; o < r.length; o++) s[r[o]] = o;
                    for (o = 0; o < i; o++)
                        if ("-" !== (l = t[o]) && l in s && s[l] >= a) {
                            if ("1" === l && 1 === a) continue;
                            throw new Error(l + " is not a valid digit in base " + e + ".")
                        } e = X(e);
                    var p = [],
                        c = "-" === t[0];
                    for (o = c ? 1 : 0; o < t.length; o++) {
                        var l;
                        if ((l = t[o]) in s) p.push(X(s[l]));
                        else {
                            if ("<" !== l) throw new Error(l + " is not a valid character");
                            var f = o;
                            do {
                                o++
                            } while (">" !== t[o] && o < t.length);
                            p.push(X(t.slice(f + 1, o)))
                        }
                    }
                    return W(p, e, c)
                };

                function W(t, e, r) {
                    var n, o = s[0],
                        i = s[1];
                    for (n = t.length - 1; n >= 0; n--) o = o.add(t[n].times(i)), i = i.times(e);
                    return r ? o.negate() : o
                }

                function G(t, e) {
                    if ((e = o(e)).isZero()) {
                        if (t.isZero()) return {
                            value: [0],
                            isNegative: !1
                        };
                        throw new Error("Cannot convert nonzero numbers to base 0.")
                    }
                    if (e.equals(-1)) {
                        if (t.isZero()) return {
                            value: [0],
                            isNegative: !1
                        };
                        if (t.isNegative()) return {
                            value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                            isNegative: !1
                        };
                        var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                        return r.unshift([1]), {
                            value: [].concat.apply([], r),
                            isNegative: !1
                        }
                    }
                    var n = !1;
                    if (t.isNegative() && e.isPositive() && (n = !0, t = t.abs()), e.isUnit()) return t.isZero() ? {
                        value: [0],
                        isNegative: !1
                    } : {
                        value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                        isNegative: n
                    };
                    for (var i, u = [], a = t; a.isNegative() || a.compareAbs(e) >= 0;) {
                        i = a.divmod(e), a = i.quotient;
                        var s = i.remainder;
                        s.isNegative() && (s = e.minus(s).abs(), a = a.next()), u.push(s.toJSNumber())
                    }
                    return u.push(a.toJSNumber()), {
                        value: u.reverse(),
                        isNegative: n
                    }
                }

                function Q(t, e, r) {
                    var n = G(t, e);
                    return (n.isNegative ? "-" : "") + n.value.map((function(t) {
                        return function(t, e) {
                            return t < (e = e || u).length ? e[t] : "<" + t + ">"
                        }(t, r)
                    })).join("")
                }

                function Y(t) {
                    if (f(+t)) {
                        var e = +t;
                        if (e === g(e)) return a ? new l(BigInt(e)) : new c(e);
                        throw new Error("Invalid integer: " + t)
                    }
                    var n = "-" === t[0];
                    n && (t = t.slice(1));
                    var o = t.split(/e/i);
                    if (o.length > 2) throw new Error("Invalid integer: " + o.join("e"));
                    if (2 === o.length) {
                        var i = o[1];
                        if ("+" === i[0] && (i = i.slice(1)), (i = +i) !== g(i) || !f(i)) throw new Error("Invalid integer: " + i + " is not a valid exponent.");
                        var u = o[0],
                            s = u.indexOf(".");
                        if (s >= 0 && (i -= u.length - s - 1, u = u.slice(0, s) + u.slice(s + 1)), i < 0) throw new Error("Cannot include negative exponent part for integers");
                        t = u += new Array(i + 1).join("0")
                    }
                    if (!/^([0-9][0-9]*)$/.test(t)) throw new Error("Invalid integer: " + t);
                    if (a) return new l(BigInt(n ? "-" + t : t));
                    for (var h = [], y = t.length, d = r, w = y - d; y > 0;) h.push(+t.slice(w, y)), (w -= d) < 0 && (w = 0), y -= d;
                    return v(h), new p(h, n)
                }

                function X(t) {
                    return "number" == typeof t ? function(t) {
                        if (a) return new l(BigInt(t));
                        if (f(t)) {
                            if (t !== g(t)) throw new Error(t + " is not an integer.");
                            return new c(t)
                        }
                        return Y(t.toString())
                    }(t) : "string" == typeof t ? Y(t) : "bigint" == typeof t ? new l(t) : t
                }
                p.prototype.toArray = function(t) {
                    return G(this, t)
                }, c.prototype.toArray = function(t) {
                    return G(this, t)
                }, l.prototype.toArray = function(t) {
                    return G(this, t)
                }, p.prototype.toString = function(e, r) {
                    if (e === t && (e = 10), 10 !== e) return Q(this, e, r);
                    for (var n, o = this.value, i = o.length, u = String(o[--i]); --i >= 0;) n = String(o[i]), u += "0000000".slice(n.length) + n;
                    return (this.sign ? "-" : "") + u
                }, c.prototype.toString = function(e, r) {
                    return e === t && (e = 10), 10 != e ? Q(this, e, r) : String(this.value)
                }, l.prototype.toString = c.prototype.toString, l.prototype.toJSON = p.prototype.toJSON = c.prototype.toJSON = function() {
                    return this.toString()
                }, p.prototype.valueOf = function() {
                    return parseInt(this.toString(), 10)
                }, p.prototype.toJSNumber = p.prototype.valueOf, c.prototype.valueOf = function() {
                    return this.value
                }, c.prototype.toJSNumber = c.prototype.valueOf, l.prototype.valueOf = l.prototype.toJSNumber = function() {
                    return parseInt(this.toString(), 10)
                };
                for (var $ = 0; $ < 1e3; $++) s[$] = X($), $ > 0 && (s[-$] = X(-$));
                return s.one = s[1], s.zero = s[0], s.minusOne = s[-1], s.max = Z, s.min = J, s.gcd = F, s.lcm = function(t, e) {
                    return t = X(t).abs(), e = X(e).abs(), t.divide(F(t, e)).multiply(e)
                }, s.isInstance = function(t) {
                    return t instanceof p || t instanceof c || t instanceof l
                }, s.randBetween = function(t, r, n) {
                    t = X(t), r = X(r);
                    var o = n || Math.random,
                        i = J(t, r),
                        u = Z(t, r).subtract(i).add(1);
                    if (u.isSmall) return i.add(Math.floor(o() * u));
                    for (var a = G(u, e).value, p = [], c = !0, l = 0; l < a.length; l++) {
                        var f = c ? a[l] : e,
                            h = g(o() * f);
                        p.push(h), h < f && (c = !1)
                    }
                    return i.add(s.fromArray(p, e, !1))
                }, s.fromArray = function(t, e, r) {
                    return W(t.map(X), X(e || 10), r)
                }, s
            }();
            t.hasOwnProperty("exports") && (t.exports = o), void 0 === (n = function() {
                return o
            }.call(e, r, e, t)) || (t.exports = n)
        },
        51072: (t, e) => {
            e.endianness = function() {
                return "LE"
            }, e.hostname = function() {
                return "undefined" != typeof location ? location.hostname : ""
            }, e.loadavg = function() {
                return []
            }, e.uptime = function() {
                return 0
            }, e.freemem = function() {
                return Number.MAX_VALUE
            }, e.totalmem = function() {
                return Number.MAX_VALUE
            }, e.cpus = function() {
                return []
            }, e.type = function() {
                return "Browser"
            }, e.release = function() {
                return "undefined" != typeof navigator ? navigator.appVersion : ""
            }, e.networkInterfaces = e.getNetworkInterfaces = function() {
                return {}
            }, e.arch = function() {
                return "javascript"
            }, e.platform = function() {
                return "browser"
            }, e.tmpdir = e.tmpDir = function() {
                return "/tmp"
            }, e.EOL = "\n", e.homedir = function() {
                return "/"
            }
        },
        31635: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                __addDisposableResource: () => N,
                __assign: () => i,
                __asyncDelegator: () => A,
                __asyncGenerator: () => O,
                __asyncValues: () => P,
                __await: () => S,
                __awaiter: () => y,
                __classPrivateFieldGet: () => I,
                __classPrivateFieldIn: () => x,
                __classPrivateFieldSet: () => U,
                __createBinding: () => d,
                __decorate: () => a,
                __disposeResources: () => L,
                __esDecorate: () => p,
                __exportStar: () => g,
                __extends: () => o,
                __generator: () => v,
                __importDefault: () => M,
                __importStar: () => j,
                __makeTemplateObject: () => q,
                __metadata: () => h,
                __param: () => s,
                __propKey: () => l,
                __read: () => m,
                __rest: () => u,
                __runInitializers: () => c,
                __setFunctionName: () => f,
                __spread: () => b,
                __spreadArray: () => E,
                __spreadArrays: () => _,
                __values: () => w,
                default: () => K
            });
            var n = function(t, e) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }, n(t, e)
            };

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var i = function() {
                return i = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, i.apply(this, arguments)
            };

            function u(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
                }
                return r
            }

            function a(t, e, r, n) {
                var o, i = arguments.length,
                    u = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, r, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (u = (i < 3 ? o(u) : i > 3 ? o(e, r, u) : o(e, r)) || u);
                return i > 3 && u && Object.defineProperty(e, r, u), u
            }

            function s(t, e) {
                return function(r, n) {
                    e(r, n, t)
                }
            }

            function p(t, e, r, n, o, i) {
                function u(t) {
                    if (void 0 !== t && "function" != typeof t) throw new TypeError("Function expected");
                    return t
                }
                for (var a, s = n.kind, p = "getter" === s ? "get" : "setter" === s ? "set" : "value", c = !e && t ? n.static ? t : t.prototype : null, l = e || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), f = !1, h = r.length - 1; h >= 0; h--) {
                    var y = {};
                    for (var v in n) y[v] = "access" === v ? {} : n[v];
                    for (var v in n.access) y.access[v] = n.access[v];
                    y.addInitializer = function(t) {
                        if (f) throw new TypeError("Cannot add initializers after decoration has completed");
                        i.push(u(t || null))
                    };
                    var d = (0, r[h])("accessor" === s ? {
                        get: l.get,
                        set: l.set
                    } : l[p], y);
                    if ("accessor" === s) {
                        if (void 0 === d) continue;
                        if (null === d || "object" != typeof d) throw new TypeError("Object expected");
                        (a = u(d.get)) && (l.get = a), (a = u(d.set)) && (l.set = a), (a = u(d.init)) && o.unshift(a)
                    } else(a = u(d)) && ("field" === s ? o.unshift(a) : l[p] = a)
                }
                c && Object.defineProperty(c, n.name, l), f = !0
            }

            function c(t, e, r) {
                for (var n = arguments.length > 2, o = 0; o < e.length; o++) r = n ? e[o].call(t, r) : e[o].call(t);
                return n ? r : void 0
            }

            function l(t) {
                return "symbol" == typeof t ? t : "".concat(t)
            }

            function f(t, e, r) {
                return "symbol" == typeof e && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", e) : e
                })
            }

            function h(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function y(t, e, r, n) {
                return new(r || (r = Promise))((function(o, i) {
                    function u(t) {
                        try {
                            s(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        try {
                            s(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(u, a)
                    }
                    s((n = n.apply(t, e || [])).next())
                }))
            }

            function v(t, e) {
                var r, n, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(a) {
                    return function(s) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, a[0] && (u = 0)), u;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = u.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < o[1]) {
                                            u.label = o[1], o = a;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2], u.ops.push(a);
                                            break
                                        }
                                        o[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                a = e.call(t, u)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            }
            var d = Object.create ? function(t, e, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(e, r);
                o && !("get" in o ? !e.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return e[r]
                    }
                }), Object.defineProperty(t, n, o)
            } : function(t, e, r, n) {
                void 0 === n && (n = r), t[n] = e[r]
            };

            function g(t, e) {
                for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || d(e, t, r)
            }

            function w(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, o, i = r.call(t),
                    u = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = i.next()).done;) u.push(n.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return u
            }

            function b() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
                return t
            }

            function _() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var n = Array(t),
                    o = 0;
                for (e = 0; e < r; e++)
                    for (var i = arguments[e], u = 0, a = i.length; u < a; u++, o++) n[o] = i[u];
                return n
            }

            function E(t, e, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                return t.concat(n || Array.prototype.slice.call(e))
            }

            function S(t) {
                return this instanceof S ? (this.v = t, this) : new S(t)
            }

            function O(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(t, e || []),
                    i = [];
                return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function u(t) {
                    o[t] && (n[t] = function(e) {
                        return new Promise((function(r, n) {
                            i.push([t, e, r, n]) > 1 || a(t, e)
                        }))
                    })
                }

                function a(t, e) {
                    try {
                        (r = o[t](e)).value instanceof S ? Promise.resolve(r.value.v).then(s, p) : c(i[0][2], r)
                    } catch (t) {
                        c(i[0][3], t)
                    }
                    var r
                }

                function s(t) {
                    a("next", t)
                }

                function p(t) {
                    a("throw", t)
                }

                function c(t, e) {
                    t(e), i.shift(), i.length && a(i[0][0], i[0][1])
                }
            }

            function A(t) {
                var e, r;
                return e = {}, n("next"), n("throw", (function(t) {
                    throw t
                })), n("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function n(n, o) {
                    e[n] = t[n] ? function(e) {
                        return (r = !r) ? {
                            value: S(t[n](e)),
                            done: !1
                        } : o ? o(e) : e
                    } : o
                }
            }

            function P(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = w(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise((function(n, o) {
                            ! function(t, e, r, n) {
                                Promise.resolve(n).then((function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }), e)
                            }(n, o, (e = t[r](e)).done, e.value)
                        }))
                    }
                }
            }

            function q(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var k = Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function(t, e) {
                t.default = e
            };

            function j(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && d(e, t, r);
                return k(e, t), e
            }

            function M(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function I(t, e, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
            }

            function U(t, e, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
            }

            function x(t, e) {
                if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof t ? e === t : t.has(e)
            }

            function N(t, e, r) {
                if (null != e) {
                    if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object expected.");
                    var n;
                    if (r) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = e[Symbol.asyncDispose]
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = e[Symbol.dispose]
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    t.stack.push({
                        value: e,
                        dispose: n,
                        async: r
                    })
                } else r && t.stack.push({
                    async: !0
                });
                return e
            }
            var T = "function" == typeof SuppressedError ? SuppressedError : function(t, e, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = t, n.suppressed = e, n
            };

            function L(t) {
                function e(e) {
                    t.error = t.hasError ? new T(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0
                }
                return function r() {
                    for (; t.stack.length;) {
                        var n = t.stack.pop();
                        try {
                            var o = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(o).then(r, (function(t) {
                                return e(t), r()
                            }))
                        } catch (t) {
                            e(t)
                        }
                    }
                    if (t.hasError) throw t.error
                }()
            }
            const K = {
                __extends: o,
                __assign: i,
                __rest: u,
                __decorate: a,
                __param: s,
                __metadata: h,
                __awaiter: y,
                __generator: v,
                __createBinding: d,
                __exportStar: g,
                __values: w,
                __read: m,
                __spread: b,
                __spreadArrays: _,
                __spreadArray: E,
                __await: S,
                __asyncGenerator: O,
                __asyncDelegator: A,
                __asyncValues: P,
                __makeTemplateObject: q,
                __importStar: j,
                __importDefault: M,
                __classPrivateFieldGet: I,
                __classPrivateFieldSet: U,
                __classPrivateFieldIn: x,
                __addDisposableResource: N,
                __disposeResources: L
            }
        }
    }
]);