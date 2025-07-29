//Tue Jul 29 2025 14:17:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x3b866a = Object.create;
var _0xc5dcef = Object.defineProperty;
var _0x4ab18b = Object.getOwnPropertyDescriptor;
var _0x26e042 = Object.getOwnPropertyNames;
var _0x5849e2 = Object.getPrototypeOf;
var _0x2dcf68 = Object.prototype.hasOwnProperty;
var _0x4737b0 = (_0x4a4fd8, _0x856b30) => function _0x5501cf() {
  _0x4a4fd8 && (_0x856b30 = (0, _0x4a4fd8[_0x26e042(_0x4a4fd8)[0]])(_0x4a4fd8 = 0));
  return _0x856b30;
};
var _0x19f6de = (_0x148a57, _0x365383) => {
  for (var _0x2cc6d7 in _0x365383) _0xc5dcef(_0x148a57, _0x2cc6d7, {
    get: _0x365383[_0x2cc6d7],
    enumerable: true
  });
};
var _0x2c3a04 = (_0x3ff2d7, _0x280843, _0x3f93fa, _0x1e1597) => {
  if (_0x280843 && typeof _0x280843 === "object" || typeof _0x280843 === "function") {
    for (let _0x58a28b of _0x26e042(_0x280843)) if (!_0x2dcf68.call(_0x3ff2d7, _0x58a28b) && _0x58a28b !== _0x3f93fa) {
      _0xc5dcef(_0x3ff2d7, _0x58a28b, {
        get: () => _0x280843[_0x58a28b],
        enumerable: !(_0x1e1597 = _0x4ab18b(_0x280843, _0x58a28b)) || _0x1e1597.enumerable
      });
    }
  }
  return _0x3ff2d7;
};
var _0x182bf0 = (_0x38fe1c, _0xe44373, _0x15e302) => (_0x15e302 = _0x38fe1c != null ? _0x3b866a(_0x5849e2(_0x38fe1c)) : {}, _0x2c3a04(_0xe44373 || !_0x38fe1c || !_0x38fe1c.__esModule ? _0xc5dcef(_0x15e302, "default", {
  value: _0x38fe1c,
  enumerable: true
}) : _0x15e302, _0x38fe1c));
var _0x51198a = _0x1997cb => _0x2c3a04(_0xc5dcef({}, "__esModule", {
  value: true
}), _0x1997cb);
var _0x11b19e = {};
_0x19f6de(_0x11b19e, {
  RequestError: () => _0x249e10,
  createAdaptorServer: () => _0x4924f,
  getRequestListener: () => _0x57be54,
  serve: () => _0x3935a7
});
function _0x5bdb01(_0x227387, _0x59c423) {
  if (_0x227387.locked) {
    throw new TypeError("ReadableStream is locked.");
  } else {
    if (_0x59c423.destroyed) {
      {
        _0x227387.cancel();
        return;
      }
    }
  }
  const _0x400993 = _0x227387.getReader();
  _0x59c423.on("close", _0x5cf4e1);
  _0x59c423.on("error", _0x5cf4e1);
  _0x400993.read().then(_0x336522, _0x5cf4e1);
  return _0x400993.closed.finally(() => {
    _0x59c423.off("close", _0x5cf4e1);
    _0x59c423.off("error", _0x5cf4e1);
  });
  function _0x5cf4e1(_0xb9ba59) {
    _0x400993.cancel(_0xb9ba59).catch(() => {});
    _0xb9ba59 && _0x59c423.destroy(_0xb9ba59);
  }
  function _0x54f6a3() {
    _0x400993.read().then(_0x336522, _0x5cf4e1);
  }
  function _0x336522({
    done: _0x2a2016,
    value: _0x19c473
  }) {
    {
      try {
        {
          if (_0x2a2016) {
            {
              _0x59c423.end();
            }
          } else {
            if (!_0x59c423.write(_0x19c473)) {
              _0x59c423.once("drain", _0x54f6a3);
            } else {
              {
                return _0x400993.read().then(_0x336522, _0x5cf4e1);
              }
            }
          }
        }
      } catch (_0x21e600) {
        {
          _0x5cf4e1(_0x21e600);
        }
      }
    }
  }
}
var _0x288bb9;
var _0x2792f0;
var _0x268f35;
var _0x5cc8d6;
var _0x249e10;
var _0x53c8fe;
var _0x4bd995;
var _0x5e8fb1;
var _0x2540ee;
var _0x14e71d;
var _0x95eb52;
var _0x4323c6;
var _0x5f5368;
var _0x4e9b3e;
var _0x513ca8;
var _0xe0a41b;
var _0x5d1417;
var _0x5438e9;
var _0x1c3d3d;
var _0x1e1854;
var _0x5deb67;
var _0x5f3446;
var _0x5e6f73;
var _0x49b719;
var _0x2a7e2f;
var _0xfcf217;
var _0x542b87;
var _0x15d310;
var _0x8bdcc5;
var _0x3470eb;
var _0x4f6b04;
var _0x791932;
var _0x3341ef;
var _0x57be54;
var _0x4924f;
var _0x3935a7;
var _0x5b0f9a = _0x4737b0({
  "node_modules/@hono/node-server/dist/index.mjs"() {
    _0x288bb9 = require("http");
    _0x2792f0 = require("http2");
    _0x268f35 = require("stream");
    _0x5cc8d6 = _0x182bf0(require("crypto"), 1);
    _0x249e10 = class extends Error {
      constructor(_0x36f947, _0x2756bc) {
        super(_0x36f947, _0x2756bc);
        this.name = "RequestError";
      }
    };
    _0x53c8fe = _0x5e8084 => {
      if (_0x5e8084 instanceof _0x249e10) {
        return _0x5e8084;
      }
      return new _0x249e10(_0x5e8084.message, {
        cause: _0x5e8084
      });
    };
    _0x4bd995 = global.Request;
    _0x5e8fb1 = class extends _0x4bd995 {
      constructor(_0x4038a1, _0x3f3959) {
        {
          typeof _0x4038a1 === "object" && _0x14e71d in _0x4038a1 && (_0x4038a1 = _0x4038a1[_0x14e71d]());
          if (typeof _0x3f3959?.["body"]?.["getReader"] !== "undefined") {
            {
              _0x3f3959.duplex ??= "half";
            }
          }
          super(_0x4038a1, _0x3f3959);
        }
      }
    };
    _0x2540ee = (_0x343da0, _0x5246df, _0x42599d, _0x1cd865) => {
      {
        const _0xebb30e = [];
        const _0x3020f3 = _0x42599d.rawHeaders;
        for (let _0x4d58d3 = 0; _0x4d58d3 < _0x3020f3.length; _0x4d58d3 += 2) {
          {
            const {
              [_0x4d58d3]: _0x1b207c,
              [_0x4d58d3 + 1]: _0x1d4817
            } = _0x3020f3;
            if (_0x1b207c.charCodeAt(0) !== 58) {
              {
                _0xebb30e.push([_0x1b207c, _0x1d4817]);
              }
            }
          }
        }
        const _0x1b1dbf = {
          method: _0x343da0,
          headers: _0xebb30e,
          signal: _0x1cd865.signal
        };
        if (_0x343da0 === "TRACE") {
          _0x1b1dbf.method = "GET";
          const _0x2d8217 = new _0x5e8fb1(_0x5246df, _0x1b1dbf);
          Object.defineProperty(_0x2d8217, "method", {
            get() {
              {
                return "TRACE";
              }
            }
          });
          return _0x2d8217;
        }
        if (!(_0x343da0 === "GET" || _0x343da0 === "HEAD")) {
          {
            "rawBody" in _0x42599d && _0x42599d.rawBody instanceof Buffer ? _0x1b1dbf.body = new ReadableStream({
              start(_0x22cdd6) {
                _0x22cdd6.enqueue(_0x42599d.rawBody);
                _0x22cdd6.close();
              }
            }) : _0x1b1dbf.body = _0x268f35.Readable.toWeb(_0x42599d);
          }
        }
        return new _0x5e8fb1(_0x5246df, _0x1b1dbf);
      }
    };
    _0x14e71d = Symbol("getRequestCache");
    _0x95eb52 = Symbol("requestCache");
    _0x4323c6 = Symbol("incomingKey");
    _0x5f5368 = Symbol("urlKey");
    _0x4e9b3e = Symbol("abortControllerKey");
    _0x513ca8 = Symbol("getAbortController");
    _0xe0a41b = {
      get method() {
        return this[_0x4323c6].method || "GET";
      },
      get url() {
        return this[_0x5f5368];
      },
      [_0x513ca8]() {
        this[_0x14e71d]();
        return this[_0x4e9b3e];
      },
      [_0x14e71d]() {
        this[_0x4e9b3e] ||= new AbortController();
        return this[_0x95eb52] ||= _0x2540ee(this.method, this[_0x5f5368], this[_0x4323c6], this[_0x4e9b3e]);
      }
    };
    ["body", "bodyUsed", "cache", "credentials", "destination", "headers", "integrity", "mode", "redirect", "referrer", "referrerPolicy", "signal", "keepalive"].forEach(_0x4b6060 => {
      {
        Object.defineProperty(_0xe0a41b, _0x4b6060, {
          get() {
            {
              return this[_0x14e71d]()[_0x4b6060];
            }
          }
        });
      }
    });
    ["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach(_0x2c5be0 => {
      Object.defineProperty(_0xe0a41b, _0x2c5be0, {
        value: function () {
          return this[_0x14e71d]()[_0x2c5be0]();
        }
      });
    });
    Object.setPrototypeOf(_0xe0a41b, _0x5e8fb1.prototype);
    _0x5d1417 = (_0x19ef58, _0x429f86) => {
      const _0x56e374 = Object.create(_0xe0a41b);
      _0x56e374[_0x4323c6] = _0x19ef58;
      const _0x314174 = _0x19ef58.url || "";
      if (_0x314174[0] !== "/" && (_0x314174.startsWith("http://") || _0x314174.startsWith("https://"))) {
        if (_0x19ef58 instanceof _0x2792f0.Http2ServerRequest) {
          throw new _0x249e10("Absolute URL for :path is not allowed in HTTP/2");
        }
        try {
          const _0x4c940b = new URL(_0x314174);
          _0x56e374[_0x5f5368] = _0x4c940b.href;
        } catch (_0x939fba) {
          throw new _0x249e10("Invalid absolute URL", {
            cause: _0x939fba
          });
        }
        return _0x56e374;
      }
      const _0x4c128f = (_0x19ef58 instanceof _0x2792f0.Http2ServerRequest ? _0x19ef58.authority : _0x19ef58.headers.host) || _0x429f86;
      if (!_0x4c128f) {
        {
          throw new _0x249e10("Missing host header");
        }
      }
      let _0x3f54d0;
      if (_0x19ef58 instanceof _0x2792f0.Http2ServerRequest) {
        _0x3f54d0 = _0x19ef58.scheme;
        if (!(_0x3f54d0 === "http" || _0x3f54d0 === "https")) {
          throw new _0x249e10("Unsupported scheme");
        }
      } else {
        _0x3f54d0 = _0x19ef58.socket && _0x19ef58.socket.encrypted ? "https" : "http";
      }
      const _0x51f4b4 = new URL(_0x3f54d0 + "://" + _0x4c128f + _0x314174);
      if (_0x51f4b4.hostname.length !== _0x4c128f.length && _0x51f4b4.hostname !== _0x4c128f.replace(/:\d+$/, "")) {
        {
          throw new _0x249e10("Invalid host header");
        }
      }
      _0x56e374[_0x5f5368] = _0x51f4b4.href;
      return _0x56e374;
    };
    _0x5438e9 = Symbol("responseCache");
    _0x1c3d3d = Symbol("getResponseCache");
    _0x1e1854 = Symbol("cache");
    _0x5deb67 = global.Response;
    _0x5f3446 = class _0x51e8cd {
      #body;
      #init;
      [_0x1c3d3d]() {
        delete this[_0x1e1854];
        return this[_0x5438e9] ||= new _0x5deb67(this.#body, this.#init);
      }
      constructor(_0x4441f1, _0x34550d) {
        let _0x10462e;
        this.#body = _0x4441f1;
        if (_0x34550d instanceof _0x51e8cd) {
          const _0x3bdea4 = _0x34550d[_0x5438e9];
          if (_0x3bdea4) {
            {
              this.#init = _0x3bdea4;
              this[_0x1c3d3d]();
              return;
            }
          } else {
            this.#init = _0x34550d.#init;
            _0x10462e = new Headers(_0x34550d.#init.headers);
          }
        } else {
          this.#init = _0x34550d;
        }
        (typeof _0x4441f1 === "string" || typeof _0x4441f1?.["getReader"] !== "undefined" || _0x4441f1 instanceof Blob || _0x4441f1 instanceof Uint8Array) && (_0x10462e ||= _0x34550d?.["headers"] || {
          "content-type": "text/plain; charset=UTF-8"
        }, this[_0x1e1854] = [_0x34550d?.["status"] || 200, _0x4441f1, _0x10462e]);
      }
      get headers() {
        {
          const _0x6eebf8 = this[_0x1e1854];
          if (_0x6eebf8) {
            !(_0x6eebf8[2] instanceof Headers) && (_0x6eebf8[2] = new Headers(_0x6eebf8[2]));
            return _0x6eebf8[2];
          }
          return this[_0x1c3d3d]().headers;
        }
      }
      get status() {
        return this[_0x1e1854]?.[0] ?? this[_0x1c3d3d]().status;
      }
      get ok() {
        const _0x375a4a = this.status;
        return _0x375a4a >= 200 && _0x375a4a < 300;
      }
    };
    ["body", "bodyUsed", "redirected", "statusText", "trailers", "type", "url"].forEach(_0x2e9f8e => {
      Object.defineProperty(_0x5f3446.prototype, _0x2e9f8e, {
        get() {
          return this[_0x1c3d3d]()[_0x2e9f8e];
        }
      });
    });
    ["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach(_0x285df9 => {
      Object.defineProperty(_0x5f3446.prototype, _0x285df9, {
        value: function () {
          return this[_0x1c3d3d]()[_0x285df9]();
        }
      });
    });
    Object.setPrototypeOf(_0x5f3446, _0x5deb67);
    Object.setPrototypeOf(_0x5f3446.prototype, _0x5deb67.prototype);
    _0x5e6f73 = _0x1f8b33 => {
      {
        const _0x5e4bde = {};
        !(_0x1f8b33 instanceof Headers) && (_0x1f8b33 = new Headers(_0x1f8b33 ?? undefined));
        const _0x28f73e = [];
        for (const [_0x22d09d, _0x50ab66] of _0x1f8b33) {
          if (_0x22d09d === "set-cookie") {
            {
              _0x28f73e.push(_0x50ab66);
            }
          } else {
            _0x5e4bde[_0x22d09d] = _0x50ab66;
          }
        }
        if (_0x28f73e.length > 0) {
          {
            _0x5e4bde["set-cookie"] = _0x28f73e;
          }
        }
        _0x5e4bde["content-type"] ??= "text/plain; charset=UTF-8";
        return _0x5e4bde;
      }
    };
    _0x49b719 = "x-hono-already-sent";
    _0x2a7e2f = global.fetch;
    typeof global.crypto === "undefined" && (global.crypto = _0x5cc8d6.default);
    global.fetch = (_0x2a4ef2, _0x26b14e) => {
      {
        _0x26b14e = {
          compress: false,
          ..._0x26b14e
        };
        return _0x2a7e2f(_0x2a4ef2, _0x26b14e);
      }
    };
    _0xfcf217 = /^no$/i;
    _0x542b87 = /^(application\/json\b|text\/(?!event-stream\b))/i;
    _0x15d310 = () => new Response(null, {
      status: 400
    });
    _0x8bdcc5 = _0x55199e => new Response(null, {
      status: _0x55199e instanceof Error && (_0x55199e.name === "TimeoutError" || _0x55199e.constructor.name === "TimeoutError") ? 504 : 500
    });
    _0x3470eb = (_0x51c252, _0x50c67e) => {
      {
        const _0x1beb36 = _0x51c252 instanceof Error ? _0x51c252 : new Error("unknown error", {
          cause: _0x51c252
        });
        if (_0x1beb36.code === "ERR_STREAM_PREMATURE_CLOSE") {
          console.info("The user aborted a request.");
        } else {
          console.error(_0x51c252);
          if (!_0x50c67e.headersSent) {
            {
              _0x50c67e.writeHead(500, {
                "Content-Type": "text/plain"
              });
            }
          }
          _0x50c67e.end("Error: " + _0x1beb36.message);
          _0x50c67e.destroy(_0x1beb36);
        }
      }
    };
    _0x4f6b04 = _0x519ec6 => {
      "flushHeaders" in _0x519ec6 && _0x519ec6.writable && _0x519ec6.flushHeaders();
    };
    _0x791932 = async (_0x23a0f1, _0x50325c) => {
      let [_0x5dbd53, _0x14cce4, _0x519126] = _0x23a0f1[_0x1e1854];
      _0x519126 instanceof Headers && (_0x519126 = _0x5e6f73(_0x519126));
      if (typeof _0x14cce4 === "string") {
        _0x519126["Content-Length"] = Buffer.byteLength(_0x14cce4);
      } else {
        if (_0x14cce4 instanceof Uint8Array) {
          _0x519126["Content-Length"] = _0x14cce4.byteLength;
        } else {
          if (_0x14cce4 instanceof Blob) {
            {
              _0x519126["Content-Length"] = _0x14cce4.size;
            }
          }
        }
      }
      _0x50325c.writeHead(_0x5dbd53, _0x519126);
      if (typeof _0x14cce4 === "string" || _0x14cce4 instanceof Uint8Array) {
        _0x50325c.end(_0x14cce4);
      } else {
        if (_0x14cce4 instanceof Blob) {
          _0x50325c.end(new Uint8Array(await _0x14cce4.arrayBuffer()));
        } else {
          _0x4f6b04(_0x50325c);
          return _0x5bdb01(_0x14cce4, _0x50325c)?.["catch"](_0x31b2da => _0x3470eb(_0x31b2da, _0x50325c));
        }
      }
    };
    _0x3341ef = async (_0x304140, _0x5736b7, _0x234513 = {}) => {
      if (_0x304140 instanceof Promise) {
        if (_0x234513.errorHandler) {
          {
            try {
              {
                _0x304140 = await _0x304140;
              }
            } catch (_0x474cfd) {
              const _0x5ae9b6 = await _0x234513.errorHandler(_0x474cfd);
              if (!_0x5ae9b6) {
                {
                  return;
                }
              }
              _0x304140 = _0x5ae9b6;
            }
          }
        } else {
          _0x304140 = await _0x304140.catch(_0x8bdcc5);
        }
      }
      if (_0x1e1854 in _0x304140) {
        return _0x791932(_0x304140, _0x5736b7);
      }
      const _0x483e91 = _0x5e6f73(_0x304140.headers);
      if (_0x304140.body) {
        const {
          "transfer-encoding": _0x3394ca,
          "content-encoding": _0x59cc69,
          "content-length": _0x36e411,
          "x-accel-buffering": _0x4341f1,
          "content-type": _0x9c11d8
        } = _0x483e91;
        if (_0x3394ca || _0x59cc69 || _0x36e411 || _0x4341f1 && _0xfcf217.test(_0x4341f1) || !_0x542b87.test(_0x9c11d8)) {
          _0x5736b7.writeHead(_0x304140.status, _0x483e91);
          _0x4f6b04(_0x5736b7);
          await _0x5bdb01(_0x304140.body, _0x5736b7);
        } else {
          const _0x41ffde = await _0x304140.arrayBuffer();
          _0x483e91["content-length"] = _0x41ffde.byteLength;
          _0x5736b7.writeHead(_0x304140.status, _0x483e91);
          _0x5736b7.end(new Uint8Array(_0x41ffde));
        }
      } else {
        if (!_0x483e91[_0x49b719]) {
          {
            _0x5736b7.writeHead(_0x304140.status, _0x483e91);
            _0x5736b7.end();
          }
        }
      }
    };
    _0x57be54 = (_0x4443e9, _0x3c2e39 = {}) => {
      if (_0x3c2e39.overrideGlobalObjects !== false && global.Request !== _0x5e8fb1) {
        {
          Object.defineProperty(global, "Request", {
            value: _0x5e8fb1
          });
          Object.defineProperty(global, "Response", {
            value: _0x5f3446
          });
        }
      }
      return async (_0x2dbcbd, _0x478e78) => {
        {
          let _0x165423;
          let _0x3778f2;
          try {
            {
              _0x3778f2 = _0x5d1417(_0x2dbcbd, _0x3c2e39.hostname);
              _0x478e78.on("close", () => {
                const _0x1b6665 = _0x3778f2[_0x4e9b3e];
                if (!_0x1b6665) {
                  return;
                }
                if (_0x2dbcbd.errored) {
                  _0x3778f2[_0x4e9b3e].abort(_0x2dbcbd.errored.toString());
                } else {
                  if (!_0x478e78.writableFinished) {
                    {
                      _0x3778f2[_0x4e9b3e].abort("Client connection prematurely closed.");
                    }
                  }
                }
              });
              _0x165423 = _0x4443e9(_0x3778f2, {
                incoming: _0x2dbcbd,
                outgoing: _0x478e78
              });
              if (_0x1e1854 in _0x165423) {
                {
                  return _0x791932(_0x165423, _0x478e78);
                }
              }
            }
          } catch (_0x36c1be) {
            if (!_0x165423) {
              if (_0x3c2e39.errorHandler) {
                {
                  _0x165423 = await _0x3c2e39.errorHandler(_0x3778f2 ? _0x36c1be : _0x53c8fe(_0x36c1be));
                  if (!_0x165423) {
                    return;
                  }
                }
              } else {
                if (!_0x3778f2) {
                  _0x165423 = _0x15d310();
                } else {
                  {
                    _0x165423 = _0x8bdcc5(_0x36c1be);
                  }
                }
              }
            } else {
              return _0x3470eb(_0x36c1be, _0x478e78);
            }
          }
          try {
            {
              return await _0x3341ef(_0x165423, _0x478e78, _0x3c2e39);
            }
          } catch (_0x176312) {
            {
              return _0x3470eb(_0x176312, _0x478e78);
            }
          }
        }
      };
    };
    _0x4924f = _0x3a859e => {
      const _0xe04bee = _0x3a859e.fetch;
      const _0xe8dd16 = _0x57be54(_0xe04bee, {
        hostname: _0x3a859e.hostname,
        overrideGlobalObjects: _0x3a859e.overrideGlobalObjects
      });
      const _0x545ea3 = _0x3a859e.createServer || _0x288bb9.createServer;
      const _0x407e49 = _0x545ea3(_0x3a859e.serverOptions || {}, _0xe8dd16);
      return _0x407e49;
    };
    _0x3935a7 = (_0x50e7d1, _0x24eb42) => {
      const _0xabb97e = _0x4924f(_0x50e7d1);
      _0xabb97e.listen(_0x50e7d1?.["port"] ?? 3000, _0x50e7d1.hostname, () => {
        const _0x4e4dd3 = _0xabb97e.address();
        _0x24eb42 && _0x24eb42(_0x4e4dd3);
      });
      return _0xabb97e;
    };
  }
});
var _0x3a3c32 = {};
_0x19f6de(_0x3a3c32, {
  default: () => _0x1e9adf
});
module.exports = _0x51198a(_0x3a3c32);
var _0x267995 = (_0x55ae00, _0x4a34aa, _0x429e47) => {
  return (_0x1c143c, _0x2dccb4) => {
    let _0x5a5e89 = -1;
    return _0x5ea67c(0);
    async function _0x5ea67c(_0x53738a) {
      {
        if (_0x53738a <= _0x5a5e89) {
          {
            throw new Error("next() called multiple times");
          }
        }
        _0x5a5e89 = _0x53738a;
        let _0x27de05;
        let _0xe1f186 = false;
        let _0xaed8e2;
        _0x55ae00[_0x53738a] ? (_0xaed8e2 = _0x55ae00[_0x53738a][0][0], _0x1c143c.req.routeIndex = _0x53738a) : _0xaed8e2 = _0x53738a === _0x55ae00.length && _0x2dccb4 || undefined;
        if (_0xaed8e2) {
          try {
            _0x27de05 = await _0xaed8e2(_0x1c143c, () => _0x5ea67c(_0x53738a + 1));
          } catch (_0x28108c) {
            if (_0x28108c instanceof Error && _0x4a34aa) {
              _0x1c143c.error = _0x28108c;
              _0x27de05 = await _0x4a34aa(_0x28108c, _0x1c143c);
              _0xe1f186 = true;
            } else {
              throw _0x28108c;
            }
          }
        } else {
          {
            if (_0x1c143c.finalized === false && _0x429e47) {
              {
                _0x27de05 = await _0x429e47(_0x1c143c);
              }
            }
          }
        }
        if (_0x27de05 && (_0x1c143c.finalized === false || _0xe1f186)) {
          {
            _0x1c143c.res = _0x27de05;
          }
        }
        return _0x1c143c;
      }
    }
  };
};
var _0x22e5e2 = Symbol();
var _0x59facf = async (_0x30c194, _0x44efb5 = Object.create(null)) => {
  const {
    all = false,
    dot = false
  } = _0x44efb5;
  const _0x3fb56a = _0x30c194 instanceof _0x1585be ? _0x30c194.raw.headers : _0x30c194.headers;
  const _0x454561 = _0x3fb56a.get("Content-Type");
  if (_0x454561?.["startsWith"]("multipart/form-data") || _0x454561?.["startsWith"]("application/x-www-form-urlencoded")) {
    return _0x5518ca(_0x30c194, {
      all: all,
      dot: dot
    });
  }
  return {};
};
async function _0x5518ca(_0x5d1a99, _0xbe24ac) {
  const _0x2a2996 = await _0x5d1a99.formData();
  if (_0x2a2996) {
    return _0x50a02b(_0x2a2996, _0xbe24ac);
  }
  return {};
}
function _0x50a02b(_0x2f9734, _0x1c34e5) {
  const _0x292783 = Object.create(null);
  _0x2f9734.forEach((_0x25c84a, _0x37e8ff) => {
    {
      const _0x4c90c4 = _0x1c34e5.all || _0x37e8ff.endsWith("[]");
      if (!_0x4c90c4) {
        _0x292783[_0x37e8ff] = _0x25c84a;
      } else {
        {
          _0x4c3b8c(_0x292783, _0x37e8ff, _0x25c84a);
        }
      }
    }
  });
  if (_0x1c34e5.dot) {
    {
      Object.entries(_0x292783).forEach(([_0x11bbab, _0x3c193e]) => {
        {
          const _0x45c3f2 = _0x11bbab.includes(".");
          _0x45c3f2 && (_0x55f8e3(_0x292783, _0x11bbab, _0x3c193e), delete _0x292783[_0x11bbab]);
        }
      });
    }
  }
  return _0x292783;
}
var _0x4c3b8c = (_0x8b2a7d, _0x111b90, _0x1dbb9e) => {
  if (_0x8b2a7d[_0x111b90] !== undefined) {
    if (Array.isArray(_0x8b2a7d[_0x111b90])) {
      _0x8b2a7d[_0x111b90].push(_0x1dbb9e);
    } else {
      _0x8b2a7d[_0x111b90] = [_0x8b2a7d[_0x111b90], _0x1dbb9e];
    }
  } else {
    !_0x111b90.endsWith("[]") ? _0x8b2a7d[_0x111b90] = _0x1dbb9e : _0x8b2a7d[_0x111b90] = [_0x1dbb9e];
  }
};
var _0x55f8e3 = (_0x1b1b29, _0x1b8359, _0x4b173c) => {
  let _0xafa3ba = _0x1b1b29;
  const _0x5c69ac = _0x1b8359.split(".");
  _0x5c69ac.forEach((_0x496edc, _0x226ab6) => {
    _0x226ab6 === _0x5c69ac.length - 1 ? _0xafa3ba[_0x496edc] = _0x4b173c : ((!_0xafa3ba[_0x496edc] || typeof _0xafa3ba[_0x496edc] !== "object" || Array.isArray(_0xafa3ba[_0x496edc]) || _0xafa3ba[_0x496edc] instanceof File) && (_0xafa3ba[_0x496edc] = Object.create(null)), _0xafa3ba = _0xafa3ba[_0x496edc]);
  });
};
var _0x17708f = _0x35ac50 => {
  const _0x12965c = _0x35ac50.split("/");
  if (_0x12965c[0] === "") {
    {
      _0x12965c.shift();
    }
  }
  return _0x12965c;
};
var _0x3cf2f5 = _0x46c7d8 => {
  const {
    groups: _0x4d9021,
    path: _0x12b1ac
  } = _0x43fee7(_0x46c7d8);
  const _0x111562 = _0x17708f(_0x12b1ac);
  return _0x11c703(_0x111562, _0x4d9021);
};
var _0x43fee7 = _0x1d22f8 => {
  const _0x52be50 = [];
  _0x1d22f8 = _0x1d22f8.replace(/\{[^}]+\}/g, (_0x168342, _0x380d43) => {
    const _0x5c55f2 = "@" + _0x380d43;
    _0x52be50.push([_0x5c55f2, _0x168342]);
    return _0x5c55f2;
  });
  return {
    groups: _0x52be50,
    path: _0x1d22f8
  };
};
var _0x11c703 = (_0x56e1d2, _0x588cd2) => {
  for (let _0x5ecd97 = _0x588cd2.length - 1; _0x5ecd97 >= 0; _0x5ecd97--) {
    const [_0x32e789] = _0x588cd2[_0x5ecd97];
    for (let _0x3565a0 = _0x56e1d2.length - 1; _0x3565a0 >= 0; _0x3565a0--) {
      if (_0x56e1d2[_0x3565a0].includes(_0x32e789)) {
        _0x56e1d2[_0x3565a0] = _0x56e1d2[_0x3565a0].replace(_0x32e789, _0x588cd2[_0x5ecd97][1]);
        break;
      }
    }
  }
  return _0x56e1d2;
};
var _0x41b786 = {};
var _0x5c2fd0 = (_0x1616a9, _0x1ed764) => {
  if (_0x1616a9 === "*") {
    return "*";
  }
  const _0x4ba49c = _0x1616a9.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (_0x4ba49c) {
    const _0x2dc564 = _0x1616a9 + "#" + _0x1ed764;
    !_0x41b786[_0x2dc564] && (_0x4ba49c[2] ? _0x41b786[_0x2dc564] = _0x1ed764 && _0x1ed764[0] !== ":" && _0x1ed764[0] !== "*" ? [_0x2dc564, _0x4ba49c[1], new RegExp("^" + _0x4ba49c[2] + "(?=/" + _0x1ed764 + ")")] : [_0x1616a9, _0x4ba49c[1], new RegExp("^" + _0x4ba49c[2] + "$")] : _0x41b786[_0x2dc564] = [_0x1616a9, _0x4ba49c[1], true]);
    return _0x41b786[_0x2dc564];
  }
  return null;
};
var _0x26b85f = (_0x408b15, _0x1a9ee5) => {
  try {
    {
      return _0x1a9ee5(_0x408b15);
    }
  } catch {
    return _0x408b15.replace(/(?:%[0-9A-Fa-f]{2})+/g, _0x16cb67 => {
      try {
        {
          return _0x1a9ee5(_0x16cb67);
        }
      } catch {
        return _0x16cb67;
      }
    });
  }
};
var _0xe8e788 = _0x2449f3 => _0x26b85f(_0x2449f3, decodeURI);
var _0x5d18a = _0x1bedc3 => {
  const _0x242d59 = _0x1bedc3.url;
  const _0x3159d4 = _0x242d59.indexOf("/", _0x242d59.charCodeAt(9) === 58 ? 13 : 8);
  let _0x98b8c3 = _0x3159d4;
  for (; _0x98b8c3 < _0x242d59.length; _0x98b8c3++) {
    const _0x5ac8d0 = _0x242d59.charCodeAt(_0x98b8c3);
    if (_0x5ac8d0 === 37) {
      const _0xa868b4 = _0x242d59.indexOf("?", _0x98b8c3);
      const _0x1a0fc1 = _0x242d59.slice(_0x3159d4, _0xa868b4 === -1 ? undefined : _0xa868b4);
      return _0xe8e788(_0x1a0fc1.includes("%25") ? _0x1a0fc1.replace(/%25/g, "%2525") : _0x1a0fc1);
    } else {
      if (_0x5ac8d0 === 63) {
        break;
      }
    }
  }
  return _0x242d59.slice(_0x3159d4, _0x98b8c3);
};
var _0x26b6d1 = _0x51bc66 => {
  const _0x5a0c85 = _0x5d18a(_0x51bc66);
  return _0x5a0c85.length > 1 && _0x5a0c85.at(-1) === "/" ? _0x5a0c85.slice(0, -1) : _0x5a0c85;
};
var _0x5dede2 = (_0x1f1aeb, _0x2f4efd, ..._0x3058e2) => {
  _0x3058e2.length && (_0x2f4efd = _0x5dede2(_0x2f4efd, ..._0x3058e2));
  return "" + (_0x1f1aeb?.[0] === "/" ? "" : "/") + _0x1f1aeb + (_0x2f4efd === "/" ? "" : "" + (_0x1f1aeb?.["at"](-1) === "/" ? "" : "/") + (_0x2f4efd?.[0] === "/" ? _0x2f4efd.slice(1) : _0x2f4efd));
};
var _0x3b1211 = _0x1035ca => {
  if (_0x1035ca.charCodeAt(_0x1035ca.length - 1) !== 63 || !_0x1035ca.includes(":")) {
    {
      return null;
    }
  }
  const _0x65bb88 = _0x1035ca.split("/");
  const _0x7e4c09 = [];
  let _0xaf0509 = "";
  _0x65bb88.forEach(_0x459482 => {
    if (_0x459482 !== "" && !/\:/.test(_0x459482)) {
      _0xaf0509 += "/" + _0x459482;
    } else {
      if (/\:/.test(_0x459482)) {
        if (/\?/.test(_0x459482)) {
          _0x7e4c09.length === 0 && _0xaf0509 === "" ? _0x7e4c09.push("/") : _0x7e4c09.push(_0xaf0509);
          const _0x4531b0 = _0x459482.replace("?", "");
          _0xaf0509 += "/" + _0x4531b0;
          _0x7e4c09.push(_0xaf0509);
        } else {
          _0xaf0509 += "/" + _0x459482;
        }
      }
    }
  });
  return _0x7e4c09.filter((_0x4c56fd, _0x585194, _0x18993c) => _0x18993c.indexOf(_0x4c56fd) === _0x585194);
};
var _0x1fada2 = _0x7e0462 => {
  if (!/[%+]/.test(_0x7e0462)) {
    {
      return _0x7e0462;
    }
  }
  if (_0x7e0462.indexOf("+") !== -1) {
    {
      _0x7e0462 = _0x7e0462.replace(/\+/g, " ");
    }
  }
  return _0x7e0462.indexOf("%") !== -1 ? _0x26b85f(_0x7e0462, _0x578cb1) : _0x7e0462;
};
var _0x1095bb = (_0x250d75, _0x242950, _0x2d8220) => {
  let _0x4f1069;
  if (!_0x2d8220 && _0x242950 && !/[%+]/.test(_0x242950)) {
    {
      let _0x7b1cc9 = _0x250d75.indexOf("?" + _0x242950, 8);
      if (_0x7b1cc9 === -1) {
        {
          _0x7b1cc9 = _0x250d75.indexOf("&" + _0x242950, 8);
        }
      }
      while (_0x7b1cc9 !== -1) {
        {
          const _0x3b2458 = _0x250d75.charCodeAt(_0x7b1cc9 + _0x242950.length + 1);
          if (_0x3b2458 === 61) {
            const _0x4493d8 = _0x7b1cc9 + _0x242950.length + 2;
            const _0x1432b6 = _0x250d75.indexOf("&", _0x4493d8);
            return _0x1fada2(_0x250d75.slice(_0x4493d8, _0x1432b6 === -1 ? undefined : _0x1432b6));
          } else {
            if (_0x3b2458 == 38 || isNaN(_0x3b2458)) {
              {
                return "";
              }
            }
          }
          _0x7b1cc9 = _0x250d75.indexOf("&" + _0x242950, _0x7b1cc9 + 1);
        }
      }
      _0x4f1069 = /[%+]/.test(_0x250d75);
      if (!_0x4f1069) {
        {
          return undefined;
        }
      }
    }
  }
  const _0x17001b = {};
  _0x4f1069 ??= /[%+]/.test(_0x250d75);
  let _0x3624d1 = _0x250d75.indexOf("?", 8);
  while (_0x3624d1 !== -1) {
    const _0x246ec0 = _0x250d75.indexOf("&", _0x3624d1 + 1);
    let _0x364381 = _0x250d75.indexOf("=", _0x3624d1);
    _0x364381 > _0x246ec0 && _0x246ec0 !== -1 && (_0x364381 = -1);
    let _0x5cfbca = _0x250d75.slice(_0x3624d1 + 1, _0x364381 === -1 ? _0x246ec0 === -1 ? undefined : _0x246ec0 : _0x364381);
    _0x4f1069 && (_0x5cfbca = _0x1fada2(_0x5cfbca));
    _0x3624d1 = _0x246ec0;
    if (_0x5cfbca === "") {
      continue;
    }
    let _0x43eec0;
    _0x364381 === -1 ? _0x43eec0 = "" : (_0x43eec0 = _0x250d75.slice(_0x364381 + 1, _0x246ec0 === -1 ? undefined : _0x246ec0), _0x4f1069 && (_0x43eec0 = _0x1fada2(_0x43eec0)));
    if (_0x2d8220) {
      {
        !(_0x17001b[_0x5cfbca] && Array.isArray(_0x17001b[_0x5cfbca])) && (_0x17001b[_0x5cfbca] = []);
        _0x17001b[_0x5cfbca].push(_0x43eec0);
      }
    } else {
      {
        _0x17001b[_0x5cfbca] ??= _0x43eec0;
      }
    }
  }
  return _0x242950 ? _0x17001b[_0x242950] : _0x17001b;
};
var _0x52dfdf = _0x1095bb;
var _0x1e5259 = (_0x570012, _0x5cf13b) => {
  return _0x1095bb(_0x570012, _0x5cf13b, true);
};
var _0x578cb1 = decodeURIComponent;
var _0x5024e2 = _0x2f95aa => _0x26b85f(_0x2f95aa, _0x578cb1);
var _0x1585be = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(_0x5d90f3, _0x3552fc = "/", _0x483b1d = [[]]) {
    this.raw = _0x5d90f3;
    this.path = _0x3552fc;
    this.#matchResult = _0x483b1d;
    this.#validatedData = {};
  }
  param(_0x443785) {
    return _0x443785 ? this.#getDecodedParam(_0x443785) : this.#getAllDecodedParams();
  }
  #getDecodedParam(_0x5c8bb3) {
    const _0x101893 = this.#matchResult[0][this.routeIndex][1][_0x5c8bb3];
    const _0x27142d = this.#getParamValue(_0x101893);
    return _0x27142d ? /\%/.test(_0x27142d) ? _0x5024e2(_0x27142d) : _0x27142d : undefined;
  }
  #getAllDecodedParams() {
    const _0x5d9e63 = {};
    const _0x1b78bc = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const _0x2c6305 of _0x1b78bc) {
      const _0x1c3190 = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][_0x2c6305]);
      _0x1c3190 && typeof _0x1c3190 === "string" && (_0x5d9e63[_0x2c6305] = /\%/.test(_0x1c3190) ? _0x5024e2(_0x1c3190) : _0x1c3190);
    }
    return _0x5d9e63;
  }
  #getParamValue(_0x499ecc) {
    return this.#matchResult[1] ? this.#matchResult[1][_0x499ecc] : _0x499ecc;
  }
  query(_0x4afde5) {
    return _0x52dfdf(this.url, _0x4afde5);
  }
  queries(_0x132f3f) {
    return _0x1e5259(this.url, _0x132f3f);
  }
  header(_0x26a334) {
    if (_0x26a334) {
      {
        return this.raw.headers.get(_0x26a334) ?? undefined;
      }
    }
    const _0xd80ff6 = {};
    this.raw.headers.forEach((_0x37af9a, _0xa9d2c4) => {
      {
        _0xd80ff6[_0xa9d2c4] = _0x37af9a;
      }
    });
    return _0xd80ff6;
  }
  async parseBody(_0x13be8b) {
    return this.bodyCache.parsedBody ??= await _0x59facf(this, _0x13be8b);
  }
  #cachedBody = _0x33b84b => {
    const {
      bodyCache: _0x558b92,
      raw: _0x3d5283
    } = this;
    const _0x11e106 = _0x558b92[_0x33b84b];
    if (_0x11e106) {
      return _0x11e106;
    }
    const _0x39ad51 = Object.keys(_0x558b92)[0];
    if (_0x39ad51) {
      return _0x558b92[_0x39ad51].then(_0x305992 => {
        if (_0x39ad51 === "json") {
          {
            _0x305992 = JSON.stringify(_0x305992);
          }
        }
        return new Response(_0x305992)[_0x33b84b]();
      });
    }
    return _0x558b92[_0x33b84b] = _0x3d5283[_0x33b84b]();
  };
  json() {
    return this.#cachedBody("text").then(_0x2dac0f => JSON.parse(_0x2dac0f));
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(_0x512afb, _0x139dc5) {
    this.#validatedData[_0x512afb] = _0x139dc5;
  }
  valid(_0x1b5332) {
    return this.#validatedData[_0x1b5332];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [_0x22e5e2]() {
    return this.#matchResult;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, _0x55c3b0]]) => _0x55c3b0);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, _0x4dae83]]) => _0x4dae83)[this.routeIndex].path;
  }
};
var _0x11d041 = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var _0x7524bf = (_0x38ad95, _0xc2a870) => {
  const _0x566394 = new String(_0x38ad95);
  _0x566394.isEscaped = true;
  _0x566394.callbacks = _0xc2a870;
  return _0x566394;
};
var _0x51b183 = async (_0x1c819c, _0xc9256f, _0x7b19f1, _0x5cfa88, _0x39755e) => {
  if (typeof _0x1c819c === "object" && !(_0x1c819c instanceof String)) {
    if (!(_0x1c819c instanceof Promise)) {
      {
        _0x1c819c = _0x1c819c.toString();
      }
    }
    _0x1c819c instanceof Promise && (_0x1c819c = await _0x1c819c);
  }
  const _0x17df43 = _0x1c819c.callbacks;
  if (!_0x17df43?.["length"]) {
    return Promise.resolve(_0x1c819c);
  }
  _0x39755e ? _0x39755e[0] += _0x1c819c : _0x39755e = [_0x1c819c];
  const _0x24f4ea = Promise.all(_0x17df43.map(_0x544bec => _0x544bec({
    phase: _0xc9256f,
    buffer: _0x39755e,
    context: _0x5cfa88
  }))).then(_0x470357 => Promise.all(_0x470357.filter(Boolean).map(_0x19ae3b => _0x51b183(_0x19ae3b, _0xc9256f, false, _0x5cfa88, _0x39755e))).then(() => _0x39755e[0]));
  return _0x7b19f1 ? _0x7524bf(await _0x24f4ea, _0x17df43) : _0x24f4ea;
};
var _0x295d2d = "text/plain; charset=UTF-8";
var _0x30b82a = (_0xb17a1b, _0x8562db) => {
  return {
    "Content-Type": _0xb17a1b,
    ..._0x8562db
  };
};
var _0x31fb2f = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  constructor(_0x3f7bcc, _0x2e9978) {
    this.#rawRequest = _0x3f7bcc;
    _0x2e9978 && (this.#executionCtx = _0x2e9978.executionCtx, this.env = _0x2e9978.env, this.#notFoundHandler = _0x2e9978.notFoundHandler, this.#path = _0x2e9978.path, this.#matchResult = _0x2e9978.matchResult);
  }
  get req() {
    this.#req ??= new _0x1585be(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      {
        return this.#executionCtx;
      }
    } else {
      {
        throw Error("This context has no ExecutionContext");
      }
    }
  }
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  set res(_0x417a50) {
    if (this.#res && _0x417a50) {
      _0x417a50 = new Response(_0x417a50.body, _0x417a50);
      for (const [_0x3a7c3a, _0x2ffcc8] of this.#res.headers.entries()) {
        if (_0x3a7c3a === "content-type") {
          continue;
        }
        if (_0x3a7c3a === "set-cookie") {
          {
            const _0x37efd3 = this.#res.headers.getSetCookie();
            _0x417a50.headers.delete("set-cookie");
            for (const _0xdf6088 of _0x37efd3) {
              _0x417a50.headers.append("set-cookie", _0xdf6088);
            }
          }
        } else {
          _0x417a50.headers.set(_0x3a7c3a, _0x2ffcc8);
        }
      }
    }
    this.#res = _0x417a50;
    this.finalized = true;
  }
  render = (..._0x171494) => {
    this.#renderer ??= _0x361d6e => this.html(_0x361d6e);
    return this.#renderer(..._0x171494);
  };
  setLayout = _0xdb8546 => this.#layout = _0xdb8546;
  getLayout = () => this.#layout;
  setRenderer = _0x90fc95 => {
    this.#renderer = _0x90fc95;
  };
  header = (_0x1d7be1, _0x3203ba, _0x2cd649) => {
    this.finalized && (this.#res = new Response(this.#res.body, this.#res));
    const _0x355ab1 = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (_0x3203ba === undefined) {
      _0x355ab1.delete(_0x1d7be1);
    } else {
      _0x2cd649?.["append"] ? _0x355ab1.append(_0x1d7be1, _0x3203ba) : _0x355ab1.set(_0x1d7be1, _0x3203ba);
    }
  };
  status = _0x13cabc => {
    this.#status = _0x13cabc;
  };
  set = (_0x64ec82, _0xc941bf) => {
    this.#var ??= new Map();
    this.#var.set(_0x64ec82, _0xc941bf);
  };
  get = _0x1333ae => {
    return this.#var ? this.#var.get(_0x1333ae) : undefined;
  };
  get var() {
    if (!this.#var) {
      {
        return {};
      }
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(_0x5d4ba9, _0x1595fe, _0x3566ce) {
    const _0xa684bd = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof _0x1595fe === "object" && "headers" in _0x1595fe) {
      const _0x485a87 = _0x1595fe.headers instanceof Headers ? _0x1595fe.headers : new Headers(_0x1595fe.headers);
      for (const [_0x24369d, _0x45d381] of _0x485a87) {
        _0x24369d.toLowerCase() === "set-cookie" ? _0xa684bd.append(_0x24369d, _0x45d381) : _0xa684bd.set(_0x24369d, _0x45d381);
      }
    }
    if (_0x3566ce) {
      {
        for (const [_0x33ef5c, _0x2710b] of Object.entries(_0x3566ce)) {
          if (typeof _0x2710b === "string") {
            {
              _0xa684bd.set(_0x33ef5c, _0x2710b);
            }
          } else {
            _0xa684bd.delete(_0x33ef5c);
            for (const _0x54f9b6 of _0x2710b) {
              _0xa684bd.append(_0x33ef5c, _0x54f9b6);
            }
          }
        }
      }
    }
    const _0x1c6dd0 = typeof _0x1595fe === "number" ? _0x1595fe : _0x1595fe?.["status"] ?? this.#status;
    return new Response(_0x5d4ba9, {
      status: _0x1c6dd0,
      headers: _0xa684bd
    });
  }
  newResponse = (..._0x51c3af) => this.#newResponse(..._0x51c3af);
  body = (_0x14c9dd, _0x2c9d29, _0xf2e950) => this.#newResponse(_0x14c9dd, _0x2c9d29, _0xf2e950);
  text = (_0x20ebd3, _0x24e403, _0x563331) => {
    return !this.#preparedHeaders && !this.#status && !_0x24e403 && !_0x563331 && !this.finalized ? new Response(_0x20ebd3) : this.#newResponse(_0x20ebd3, _0x24e403, _0x30b82a(_0x295d2d, _0x563331));
  };
  json = (_0x25be64, _0x1ae155, _0x5df2cd) => {
    return this.#newResponse(JSON.stringify(_0x25be64), _0x1ae155, _0x30b82a("application/json", _0x5df2cd));
  };
  html = (_0x310d3a, _0xeccebf, _0x87dc62) => {
    const _0x400d59 = _0x9533b9 => this.#newResponse(_0x9533b9, _0xeccebf, _0x30b82a("text/html; charset=UTF-8", _0x87dc62));
    return typeof _0x310d3a === "object" ? _0x51b183(_0x310d3a, _0x11d041.Stringify, false, {}).then(_0x400d59) : _0x400d59(_0x310d3a);
  };
  redirect = (_0x398f09, _0x33868a) => {
    this.header("Location", String(_0x398f09));
    return this.newResponse(null, _0x33868a ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
};
var _0x1cc215 = "ALL";
var _0x5a205a = "all";
var _0x33bb88 = ["get", "post", "put", "delete", "options", "patch"];
var _0x21cdde = "Can not add a route since the matcher is already built.";
var _0x4d3778 = class extends Error {};
var _0xeffb4 = "__COMPOSED_HANDLER";
var _0x382452 = _0x4eba69 => {
  return _0x4eba69.text("404 Not Found", 404);
};
var _0xc6ac8a = (_0x4e19a5, _0x410446) => {
  if ("getResponse" in _0x4e19a5) {
    const _0x4bc281 = _0x4e19a5.getResponse();
    return _0x410446.newResponse(_0x4bc281.body, _0x4bc281);
  }
  console.error(_0x4e19a5);
  return _0x410446.text("Internal Server Error", 500);
};
var _0x12a1f7 = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(_0x113a32 = {}) {
    const _0x19b018 = [..._0x33bb88, _0x5a205a];
    _0x19b018.forEach(_0x47b314 => {
      this[_0x47b314] = (_0x92a302, ..._0x32bca7) => {
        typeof _0x92a302 === "string" ? this.#path = _0x92a302 : this.#addRoute(_0x47b314, this.#path, _0x92a302);
        _0x32bca7.forEach(_0x562b41 => {
          this.#addRoute(_0x47b314, this.#path, _0x562b41);
        });
        return this;
      };
    });
    this.on = (_0x4c2c4a, _0x380632, ..._0x92030f) => {
      for (const _0x5ee61c of [_0x380632].flat()) {
        this.#path = _0x5ee61c;
        for (const _0x4bcfac of [_0x4c2c4a].flat()) {
          _0x92030f.map(_0x1148c1 => {
            {
              this.#addRoute(_0x4bcfac.toUpperCase(), this.#path, _0x1148c1);
            }
          });
        }
      }
      return this;
    };
    this.use = (_0x57ba38, ..._0x498877) => {
      if (typeof _0x57ba38 === "string") {
        {
          this.#path = _0x57ba38;
        }
      } else {
        this.#path = "*";
        _0x498877.unshift(_0x57ba38);
      }
      _0x498877.forEach(_0x1df078 => {
        this.#addRoute(_0x1cc215, this.#path, _0x1df078);
      });
      return this;
    };
    const {
      strict: _0x4c332e,
      ..._0x54fd3c
    } = _0x113a32;
    Object.assign(this, _0x54fd3c);
    this.getPath = _0x4c332e ?? true ? _0x113a32.getPath ?? _0x5d18a : _0x26b6d1;
  }
  #clone() {
    const _0x1cf561 = new _0x12a1f7({
      router: this.router,
      getPath: this.getPath
    });
    _0x1cf561.errorHandler = this.errorHandler;
    _0x1cf561.#notFoundHandler = this.#notFoundHandler;
    _0x1cf561.routes = this.routes;
    return _0x1cf561;
  }
  #notFoundHandler = _0x382452;
  errorHandler = _0xc6ac8a;
  route(_0x307827, _0x471dc0) {
    const _0xd9a80d = this.basePath(_0x307827);
    _0x471dc0.routes.map(_0x31f8e4 => {
      {
        let _0x4a30fe;
        _0x471dc0.errorHandler === _0xc6ac8a ? _0x4a30fe = _0x31f8e4.handler : (_0x4a30fe = async (_0x1d0b71, _0x1ca02f) => (await _0x267995([], _0x471dc0.errorHandler)(_0x1d0b71, () => _0x31f8e4.handler(_0x1d0b71, _0x1ca02f))).res, _0x4a30fe[_0xeffb4] = _0x31f8e4.handler);
        _0xd9a80d.#addRoute(_0x31f8e4.method, _0x31f8e4.path, _0x4a30fe);
      }
    });
    return this;
  }
  basePath(_0x2ee629) {
    const _0x4ea6bf = this.#clone();
    _0x4ea6bf._basePath = _0x5dede2(this._basePath, _0x2ee629);
    return _0x4ea6bf;
  }
  onError = _0x1a971f => {
    this.errorHandler = _0x1a971f;
    return this;
  };
  notFound = _0x505f38 => {
    this.#notFoundHandler = _0x505f38;
    return this;
  };
  mount(_0x27629b, _0x5f4cba, _0x13d52e) {
    let _0x5decd8;
    let _0xbc4c17;
    if (_0x13d52e) {
      if (typeof _0x13d52e === "function") {
        _0xbc4c17 = _0x13d52e;
      } else {
        {
          _0xbc4c17 = _0x13d52e.optionHandler;
          if (_0x13d52e.replaceRequest === false) {
            _0x5decd8 = _0xbba0f8 => _0xbba0f8;
          } else {
            {
              _0x5decd8 = _0x13d52e.replaceRequest;
            }
          }
        }
      }
    }
    const _0x1d9ef1 = _0xbc4c17 ? _0x277b51 => {
      {
        const _0x5d50df = _0xbc4c17(_0x277b51);
        return Array.isArray(_0x5d50df) ? _0x5d50df : [_0x5d50df];
      }
    } : _0x540639 => {
      let _0x831269 = undefined;
      try {
        {
          _0x831269 = _0x540639.executionCtx;
        }
      } catch {}
      return [_0x540639.env, _0x831269];
    };
    _0x5decd8 ||= (() => {
      {
        const _0x11cd06 = _0x5dede2(this._basePath, _0x27629b);
        const _0x2ebd57 = _0x11cd06 === "/" ? 0 : _0x11cd06.length;
        return _0x329b13 => {
          const _0x2e2f13 = new URL(_0x329b13.url);
          _0x2e2f13.pathname = _0x2e2f13.pathname.slice(_0x2ebd57) || "/";
          return new Request(_0x2e2f13, _0x329b13);
        };
      }
    })();
    const _0xcb2bef = async (_0x36adc5, _0x3da47c) => {
      {
        const _0x17cda5 = await _0x5f4cba(_0x5decd8(_0x36adc5.req.raw), ..._0x1d9ef1(_0x36adc5));
        if (_0x17cda5) {
          {
            return _0x17cda5;
          }
        }
        await _0x3da47c();
      }
    };
    this.#addRoute(_0x1cc215, _0x5dede2(_0x27629b, "*"), _0xcb2bef);
    return this;
  }
  #addRoute(_0x65110, _0x483950, _0x1e7f0b) {
    _0x65110 = _0x65110.toUpperCase();
    _0x483950 = _0x5dede2(this._basePath, _0x483950);
    const _0x1cda35 = {
      basePath: this._basePath,
      path: _0x483950,
      method: _0x65110,
      handler: _0x1e7f0b
    };
    this.router.add(_0x65110, _0x483950, [_0x1e7f0b, _0x1cda35]);
    this.routes.push(_0x1cda35);
  }
  #handleError(_0x3e7bf8, _0x2694cd) {
    if (_0x3e7bf8 instanceof Error) {
      {
        return this.errorHandler(_0x3e7bf8, _0x2694cd);
      }
    }
    throw _0x3e7bf8;
  }
  #dispatch(_0x86e6f6, _0x1871c2, _0x4ad67f, _0x12dccd) {
    if (_0x12dccd === "HEAD") {
      {
        return (async () => new Response(null, await this.#dispatch(_0x86e6f6, _0x1871c2, _0x4ad67f, "GET")))();
      }
    }
    const _0x4bade3 = this.getPath(_0x86e6f6, {
      env: _0x4ad67f
    });
    const _0x261bab = this.router.match(_0x12dccd, _0x4bade3);
    const _0x30a1d5 = new _0x31fb2f(_0x86e6f6, {
      path: _0x4bade3,
      matchResult: _0x261bab,
      env: _0x4ad67f,
      executionCtx: _0x1871c2,
      notFoundHandler: this.#notFoundHandler
    });
    if (_0x261bab[0].length === 1) {
      {
        let _0x306da4;
        try {
          _0x306da4 = _0x261bab[0][0][0][0](_0x30a1d5, async () => {
            {
              _0x30a1d5.res = await this.#notFoundHandler(_0x30a1d5);
            }
          });
        } catch (_0x165d9e) {
          return this.#handleError(_0x165d9e, _0x30a1d5);
        }
        return _0x306da4 instanceof Promise ? _0x306da4.then(_0x30e310 => _0x30e310 || (_0x30a1d5.finalized ? _0x30a1d5.res : this.#notFoundHandler(_0x30a1d5))).catch(_0x2534a4 => this.#handleError(_0x2534a4, _0x30a1d5)) : _0x306da4 ?? this.#notFoundHandler(_0x30a1d5);
      }
    }
    const _0x1779b7 = _0x267995(_0x261bab[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const _0x3fa644 = await _0x1779b7(_0x30a1d5);
        if (!_0x3fa644.finalized) {
          throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        }
        return _0x3fa644.res;
      } catch (_0x4766a5) {
        {
          return this.#handleError(_0x4766a5, _0x30a1d5);
        }
      }
    })();
  }
  fetch = (_0x37e94e, ..._0x4830df) => {
    return this.#dispatch(_0x37e94e, _0x4830df[1], _0x4830df[0], _0x37e94e.method);
  };
  request = (_0x2376e8, _0x586230, _0x273003, _0x34c7ee) => {
    if (_0x2376e8 instanceof Request) {
      return this.fetch(_0x586230 ? new Request(_0x2376e8, _0x586230) : _0x2376e8, _0x273003, _0x34c7ee);
    }
    _0x2376e8 = _0x2376e8.toString();
    return this.fetch(new Request(/^https?:\/\//.test(_0x2376e8) ? _0x2376e8 : "http://localhost" + _0x5dede2("/", _0x2376e8), _0x586230), _0x273003, _0x34c7ee);
  };
  fire = () => {
    addEventListener("fetch", _0x44c474 => {
      {
        _0x44c474.respondWith(this.#dispatch(_0x44c474.request, _0x44c474, undefined, _0x44c474.request.method));
      }
    });
  };
};
var _0x3c8a3b = "[^/]+";
var _0x853559 = ".*";
var _0xf1ebd1 = "(?:|/.*)";
var _0x381ca5 = Symbol();
var _0x14fed1 = new Set(".\\+*[^]$()");
function _0x51ba94(_0x51c5a4, _0x337273) {
  if (_0x51c5a4.length === 1) {
    return _0x337273.length === 1 ? _0x51c5a4 < _0x337273 ? -1 : 1 : -1;
  }
  if (_0x337273.length === 1) {
    {
      return 1;
    }
  }
  if (_0x51c5a4 === _0x853559 || _0x51c5a4 === _0xf1ebd1) {
    {
      return 1;
    }
  } else {
    if (_0x337273 === _0x853559 || _0x337273 === _0xf1ebd1) {
      {
        return -1;
      }
    }
  }
  if (_0x51c5a4 === _0x3c8a3b) {
    {
      return 1;
    }
  } else {
    if (_0x337273 === _0x3c8a3b) {
      return -1;
    }
  }
  return _0x51c5a4.length === _0x337273.length ? _0x51c5a4 < _0x337273 ? -1 : 1 : _0x337273.length - _0x51c5a4.length;
}
var _0x504ae4 = class {
  #index;
  #varIndex;
  #children = Object.create(null);
  insert(_0x104146, _0x475a83, _0x1cf4cc, _0x1cdda9, _0x3200f3) {
    if (_0x104146.length === 0) {
      if (this.#index !== undefined) {
        {
          throw _0x381ca5;
        }
      }
      if (_0x3200f3) {
        return;
      }
      this.#index = _0x475a83;
      return;
    }
    const [_0x1d29dd, ..._0x233e77] = _0x104146;
    const _0xde03c0 = _0x1d29dd === "*" ? _0x233e77.length === 0 ? ["", "", _0x853559] : ["", "", _0x3c8a3b] : _0x1d29dd === "/*" ? ["", "", _0xf1ebd1] : _0x1d29dd.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let _0x24b4d5;
    if (_0xde03c0) {
      const _0xcbf94d = _0xde03c0[1];
      let _0xf77ee7 = _0xde03c0[2] || _0x3c8a3b;
      if (_0xcbf94d && _0xde03c0[2]) {
        _0xf77ee7 = _0xf77ee7.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(_0xf77ee7)) {
          throw _0x381ca5;
        }
      }
      _0x24b4d5 = this.#children[_0xf77ee7];
      if (!_0x24b4d5) {
        {
          if (Object.keys(this.#children).some(_0x118c5d => _0x118c5d !== _0x853559 && _0x118c5d !== _0xf1ebd1)) {
            {
              throw _0x381ca5;
            }
          }
          if (_0x3200f3) {
            {
              return;
            }
          }
          _0x24b4d5 = this.#children[_0xf77ee7] = new _0x504ae4();
          if (_0xcbf94d !== "") {
            {
              _0x24b4d5.#varIndex = _0x1cdda9.varIndex++;
            }
          }
        }
      }
      !_0x3200f3 && _0xcbf94d !== "" && _0x1cf4cc.push([_0xcbf94d, _0x24b4d5.#varIndex]);
    } else {
      _0x24b4d5 = this.#children[_0x1d29dd];
      if (!_0x24b4d5) {
        if (Object.keys(this.#children).some(_0x43fab5 => _0x43fab5.length > 1 && _0x43fab5 !== _0x853559 && _0x43fab5 !== _0xf1ebd1)) {
          {
            throw _0x381ca5;
          }
        }
        if (_0x3200f3) {
          return;
        }
        _0x24b4d5 = this.#children[_0x1d29dd] = new _0x504ae4();
      }
    }
    _0x24b4d5.insert(_0x233e77, _0x475a83, _0x1cf4cc, _0x1cdda9, _0x3200f3);
  }
  buildRegExpStr() {
    const _0x4fe9d5 = Object.keys(this.#children).sort(_0x51ba94);
    const _0x250056 = _0x4fe9d5.map(_0x31cc36 => {
      const _0x3408d7 = this.#children[_0x31cc36];
      return (typeof _0x3408d7.#varIndex === "number" ? "(" + _0x31cc36 + ")@" + _0x3408d7.#varIndex : _0x14fed1.has(_0x31cc36) ? "\\" + _0x31cc36 : _0x31cc36) + _0x3408d7.buildRegExpStr();
    });
    typeof this.#index === "number" && _0x250056.unshift("#" + this.#index);
    if (_0x250056.length === 0) {
      return "";
    }
    if (_0x250056.length === 1) {
      return _0x250056[0];
    }
    return "(?:" + _0x250056.join("|") + ")";
  }
};
var _0x2b9671 = class {
  #context = {
    varIndex: 0
  };
  #root = new _0x504ae4();
  insert(_0x2de790, _0x2c179f, _0x304541) {
    const _0x2fb068 = [];
    const _0x5f2173 = [];
    for (let _0x5cd31f = 0;;) {
      {
        let _0x1702f3 = false;
        _0x2de790 = _0x2de790.replace(/\{[^}]+\}/g, _0x186c90 => {
          const _0x5d0825 = "@\\" + _0x5cd31f;
          _0x5f2173[_0x5cd31f] = [_0x5d0825, _0x186c90];
          _0x5cd31f++;
          _0x1702f3 = true;
          return _0x5d0825;
        });
        if (!_0x1702f3) {
          {
            break;
          }
        }
      }
    }
    const _0x3520d6 = _0x2de790.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let _0x262c57 = _0x5f2173.length - 1; _0x262c57 >= 0; _0x262c57--) {
      const [_0x900239] = _0x5f2173[_0x262c57];
      for (let _0x283874 = _0x3520d6.length - 1; _0x283874 >= 0; _0x283874--) {
        if (_0x3520d6[_0x283874].indexOf(_0x900239) !== -1) {
          _0x3520d6[_0x283874] = _0x3520d6[_0x283874].replace(_0x900239, _0x5f2173[_0x262c57][1]);
          break;
        }
      }
    }
    this.#root.insert(_0x3520d6, _0x2c179f, _0x2fb068, this.#context, _0x304541);
    return _0x2fb068;
  }
  buildRegExp() {
    let _0x1eb4da = this.#root.buildRegExpStr();
    if (_0x1eb4da === "") {
      {
        return [/^$/, [], []];
      }
    }
    let _0x5d639b = 0;
    const _0x60b572 = [];
    const _0x3c2a71 = [];
    _0x1eb4da = _0x1eb4da.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_0x1f5ac9, _0x459b88, _0x4f20cd) => {
      if (_0x459b88 !== undefined) {
        {
          _0x60b572[++_0x5d639b] = Number(_0x459b88);
          return "$()";
        }
      }
      if (_0x4f20cd !== undefined) {
        _0x3c2a71[Number(_0x4f20cd)] = ++_0x5d639b;
        return "";
      }
      return "";
    });
    return [new RegExp("^" + _0x1eb4da), _0x60b572, _0x3c2a71];
  }
};
var _0x50d31c = [];
var _0x4f4edd = [/^$/, [], Object.create(null)];
var _0x1ada54 = Object.create(null);
function _0x395ece(_0x36063e) {
  return _0x1ada54[_0x36063e] ??= new RegExp(_0x36063e === "*" ? "" : "^" + _0x36063e.replace(/\/\*$|([.\\+*[^\]$()])/g, (_0x4964a5, _0x5e0190) => _0x5e0190 ? "\\" + _0x5e0190 : "(?:|/.*)") + "$");
}
function _0x2b5698() {
  _0x1ada54 = Object.create(null);
}
function _0x44895e(_0x452c9e) {
  const _0x4aff84 = new _0x2b9671();
  const _0x171d8d = [];
  if (_0x452c9e.length === 0) {
    return _0x4f4edd;
  }
  const _0x73ecf9 = _0x452c9e.map(_0x3cd15 => [!/\*|\/:/.test(_0x3cd15[0]), ..._0x3cd15]).sort(([_0x2175ae, _0x2f2ff0], [_0x59abaf, _0x3b983f]) => _0x2175ae ? 1 : _0x59abaf ? -1 : _0x2f2ff0.length - _0x3b983f.length);
  const _0x425990 = Object.create(null);
  for (let _0x44091c = 0, _0x824224 = -1, _0x223199 = _0x73ecf9.length; _0x44091c < _0x223199; _0x44091c++) {
    {
      const [_0x1f761f, _0x409451, _0x26f6ef] = _0x73ecf9[_0x44091c];
      if (_0x1f761f) {
        _0x425990[_0x409451] = [_0x26f6ef.map(([_0x329550]) => [_0x329550, Object.create(null)]), _0x50d31c];
      } else {
        {
          _0x824224++;
        }
      }
      let _0x5a255e;
      try {
        _0x5a255e = _0x4aff84.insert(_0x409451, _0x824224, _0x1f761f);
      } catch (_0x2a286b) {
        throw _0x2a286b === _0x381ca5 ? new _0x4d3778(_0x409451) : _0x2a286b;
      }
      if (_0x1f761f) {
        continue;
      }
      _0x171d8d[_0x824224] = _0x26f6ef.map(([_0x553e3a, _0x606673]) => {
        const _0x4702b7 = Object.create(null);
        _0x606673 -= 1;
        for (; _0x606673 >= 0; _0x606673--) {
          const [_0x42249d, _0x464bd6] = _0x5a255e[_0x606673];
          _0x4702b7[_0x42249d] = _0x464bd6;
        }
        return [_0x553e3a, _0x4702b7];
      });
    }
  }
  const [_0x219bbd, _0x598e68, _0x5d9582] = _0x4aff84.buildRegExp();
  for (let _0x281506 = 0, _0x53fc05 = _0x171d8d.length; _0x281506 < _0x53fc05; _0x281506++) {
    for (let _0x259277 = 0, _0x52b274 = _0x171d8d[_0x281506].length; _0x259277 < _0x52b274; _0x259277++) {
      const _0x19577e = _0x171d8d[_0x281506][_0x259277]?.[1];
      if (!_0x19577e) {
        continue;
      }
      const _0x4d0648 = Object.keys(_0x19577e);
      for (let _0x4a8ddb = 0, _0x489e42 = _0x4d0648.length; _0x4a8ddb < _0x489e42; _0x4a8ddb++) {
        _0x19577e[_0x4d0648[_0x4a8ddb]] = _0x5d9582[_0x19577e[_0x4d0648[_0x4a8ddb]]];
      }
    }
  }
  const _0x3603dc = [];
  for (const _0x450dae in _0x598e68) {
    _0x3603dc[_0x450dae] = _0x171d8d[_0x598e68[_0x450dae]];
  }
  return [_0x219bbd, _0x3603dc, _0x425990];
}
function _0x306efd(_0x261a8d, _0x29a0d7) {
  if (!_0x261a8d) {
    return undefined;
  }
  for (const _0xbb9483 of Object.keys(_0x261a8d).sort((_0x3fc4d8, _0x2a238c) => _0x2a238c.length - _0x3fc4d8.length)) {
    if (_0x395ece(_0xbb9483).test(_0x29a0d7)) {
      {
        return [..._0x261a8d[_0xbb9483]];
      }
    }
  }
  return undefined;
}
var _0x2c9378 = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = {
      [_0x1cc215]: Object.create(null)
    };
    this.#routes = {
      [_0x1cc215]: Object.create(null)
    };
  }
  add(_0x1617db, _0x522cd4, _0x30dccf) {
    const _0x1742c9 = this.#middleware;
    const _0x40b4f7 = this.#routes;
    if (!_0x1742c9 || !_0x40b4f7) {
      throw new Error(_0x21cdde);
    }
    if (!_0x1742c9[_0x1617db]) {
      {
        [_0x1742c9, _0x40b4f7].forEach(_0x1b992d => {
          {
            _0x1b992d[_0x1617db] = Object.create(null);
            Object.keys(_0x1b992d[_0x1cc215]).forEach(_0x467f10 => {
              _0x1b992d[_0x1617db][_0x467f10] = [..._0x1b992d[_0x1cc215][_0x467f10]];
            });
          }
        });
      }
    }
    _0x522cd4 === "/*" && (_0x522cd4 = "*");
    const _0x292202 = (_0x522cd4.match(/\/:/g) || []).length;
    if (/\*$/.test(_0x522cd4)) {
      const _0x2c31d2 = _0x395ece(_0x522cd4);
      _0x1617db === _0x1cc215 ? Object.keys(_0x1742c9).forEach(_0x763300 => {
        _0x1742c9[_0x763300][_0x522cd4] ||= _0x306efd(_0x1742c9[_0x763300], _0x522cd4) || _0x306efd(_0x1742c9[_0x1cc215], _0x522cd4) || [];
      }) : _0x1742c9[_0x1617db][_0x522cd4] ||= _0x306efd(_0x1742c9[_0x1617db], _0x522cd4) || _0x306efd(_0x1742c9[_0x1cc215], _0x522cd4) || [];
      Object.keys(_0x1742c9).forEach(_0x3acddd => {
        if (_0x1617db === _0x1cc215 || _0x1617db === _0x3acddd) {
          {
            Object.keys(_0x1742c9[_0x3acddd]).forEach(_0xfe0328 => {
              _0x2c31d2.test(_0xfe0328) && _0x1742c9[_0x3acddd][_0xfe0328].push([_0x30dccf, _0x292202]);
            });
          }
        }
      });
      Object.keys(_0x40b4f7).forEach(_0xee65fb => {
        {
          (_0x1617db === _0x1cc215 || _0x1617db === _0xee65fb) && Object.keys(_0x40b4f7[_0xee65fb]).forEach(_0xa3c840 => _0x2c31d2.test(_0xa3c840) && _0x40b4f7[_0xee65fb][_0xa3c840].push([_0x30dccf, _0x292202]));
        }
      });
      return;
    }
    const _0x29c05b = _0x3b1211(_0x522cd4) || [_0x522cd4];
    for (let _0x4ed6d1 = 0, _0x21abac = _0x29c05b.length; _0x4ed6d1 < _0x21abac; _0x4ed6d1++) {
      {
        const _0x373774 = _0x29c05b[_0x4ed6d1];
        Object.keys(_0x40b4f7).forEach(_0x15f90d => {
          {
            (_0x1617db === _0x1cc215 || _0x1617db === _0x15f90d) && (_0x40b4f7[_0x15f90d][_0x373774] ||= [...(_0x306efd(_0x1742c9[_0x15f90d], _0x373774) || _0x306efd(_0x1742c9[_0x1cc215], _0x373774) || [])], _0x40b4f7[_0x15f90d][_0x373774].push([_0x30dccf, _0x292202 - _0x21abac + _0x4ed6d1 + 1]));
          }
        });
      }
    }
  }
  match(_0x2752ad, _0x4c0e7b) {
    _0x2b5698();
    const _0x3a0ab8 = this.#buildAllMatchers();
    this.match = (_0x2390c6, _0x43a0cc) => {
      {
        const _0x2c9985 = _0x3a0ab8[_0x2390c6] || _0x3a0ab8[_0x1cc215];
        const _0x3c4de8 = _0x2c9985[2][_0x43a0cc];
        if (_0x3c4de8) {
          return _0x3c4de8;
        }
        const _0x296e5c = _0x43a0cc.match(_0x2c9985[0]);
        if (!_0x296e5c) {
          {
            return [[], _0x50d31c];
          }
        }
        const _0x10a8cf = _0x296e5c.indexOf("", 1);
        return [_0x2c9985[1][_0x10a8cf], _0x296e5c];
      }
    };
    return this.match(_0x2752ad, _0x4c0e7b);
  }
  #buildAllMatchers() {
    const _0xbea149 = Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach(_0x1446f5 => {
      {
        _0xbea149[_0x1446f5] ||= this.#buildMatcher(_0x1446f5);
      }
    });
    this.#middleware = this.#routes = undefined;
    return _0xbea149;
  }
  #buildMatcher(_0x28a1c7) {
    const _0x5ba359 = [];
    let _0x4103b7 = _0x28a1c7 === _0x1cc215;
    [this.#middleware, this.#routes].forEach(_0x1178de => {
      {
        const _0x433e01 = _0x1178de[_0x28a1c7] ? Object.keys(_0x1178de[_0x28a1c7]).map(_0x26f7f0 => [_0x26f7f0, _0x1178de[_0x28a1c7][_0x26f7f0]]) : [];
        if (_0x433e01.length !== 0) {
          _0x4103b7 ||= true;
          _0x5ba359.push(..._0x433e01);
        } else {
          _0x28a1c7 !== _0x1cc215 && _0x5ba359.push(...Object.keys(_0x1178de[_0x1cc215]).map(_0x1e125c => [_0x1e125c, _0x1178de[_0x1cc215][_0x1e125c]]));
        }
      }
    });
    return !_0x4103b7 ? null : _0x44895e(_0x5ba359);
  }
};
var _0x5c89d4 = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(_0x532df8) {
    this.#routers = _0x532df8.routers;
  }
  add(_0x2f1a2e, _0x1bc237, _0x4bbf3f) {
    if (!this.#routes) {
      throw new Error(_0x21cdde);
    }
    this.#routes.push([_0x2f1a2e, _0x1bc237, _0x4bbf3f]);
  }
  match(_0x2008d9, _0x435630) {
    if (!this.#routes) {
      {
        throw new Error("Fatal error");
      }
    }
    const _0x273c3f = this.#routers;
    const _0x472d27 = this.#routes;
    const _0x4f42f1 = _0x273c3f.length;
    let _0x575822 = 0;
    let _0x3addbc;
    for (; _0x575822 < _0x4f42f1; _0x575822++) {
      {
        const _0x31f868 = _0x273c3f[_0x575822];
        try {
          {
            for (let _0x1e1505 = 0, _0x4c4156 = _0x472d27.length; _0x1e1505 < _0x4c4156; _0x1e1505++) {
              _0x31f868.add(..._0x472d27[_0x1e1505]);
            }
            _0x3addbc = _0x31f868.match(_0x2008d9, _0x435630);
          }
        } catch (_0x159212) {
          if (_0x159212 instanceof _0x4d3778) {
            {
              continue;
            }
          }
          throw _0x159212;
        }
        this.match = _0x31f868.match.bind(_0x31f868);
        this.#routers = [_0x31f868];
        this.#routes = undefined;
        break;
      }
    }
    if (_0x575822 === _0x4f42f1) {
      {
        throw new Error("Fatal error");
      }
    }
    this.name = "SmartRouter + " + this.activeRouter.name;
    return _0x3addbc;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};
var _0x10a74b = Object.create(null);
var _0x4f4ecc = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = _0x10a74b;
  constructor(_0x274549, _0x470bf1, _0x1e3d15) {
    this.#children = _0x1e3d15 || Object.create(null);
    this.#methods = [];
    if (_0x274549 && _0x470bf1) {
      const _0x34a1af = Object.create(null);
      _0x34a1af[_0x274549] = {
        handler: _0x470bf1,
        possibleKeys: [],
        score: 0
      };
      this.#methods = [_0x34a1af];
    }
    this.#patterns = [];
  }
  insert(_0x533128, _0x231e08, _0x203e47) {
    this.#order = ++this.#order;
    let _0x55db17 = this;
    const _0xc4a9a6 = _0x3cf2f5(_0x231e08);
    const _0x33daf1 = [];
    for (let _0x2f0223 = 0, _0x263ade = _0xc4a9a6.length; _0x2f0223 < _0x263ade; _0x2f0223++) {
      {
        const _0x24e2e5 = _0xc4a9a6[_0x2f0223];
        const _0x479ceb = _0xc4a9a6[_0x2f0223 + 1];
        const _0x598a30 = _0x5c2fd0(_0x24e2e5, _0x479ceb);
        const _0x5012fc = Array.isArray(_0x598a30) ? _0x598a30[0] : _0x24e2e5;
        if (_0x5012fc in _0x55db17.#children) {
          {
            _0x55db17 = _0x55db17.#children[_0x5012fc];
            _0x598a30 && _0x33daf1.push(_0x598a30[1]);
            continue;
          }
        }
        _0x55db17.#children[_0x5012fc] = new _0x4f4ecc();
        _0x598a30 && (_0x55db17.#patterns.push(_0x598a30), _0x33daf1.push(_0x598a30[1]));
        _0x55db17 = _0x55db17.#children[_0x5012fc];
      }
    }
    _0x55db17.#methods.push({
      [_0x533128]: {
        handler: _0x203e47,
        possibleKeys: _0x33daf1.filter((_0x2ba013, _0x3ce6c6, _0x145eb0) => _0x145eb0.indexOf(_0x2ba013) === _0x3ce6c6),
        score: this.#order
      }
    });
    return _0x55db17;
  }
  #getHandlerSets(_0x1afcb2, _0x2078d3, _0x3b04df, _0x580f50) {
    const _0xdf3629 = [];
    for (let _0x3bc87a = 0, _0x2a892a = _0x1afcb2.#methods.length; _0x3bc87a < _0x2a892a; _0x3bc87a++) {
      const _0x4de7e6 = _0x1afcb2.#methods[_0x3bc87a];
      const _0x4d517a = _0x4de7e6[_0x2078d3] || _0x4de7e6[_0x1cc215];
      const _0x5cad5a = {};
      if (_0x4d517a !== undefined) {
        _0x4d517a.params = Object.create(null);
        _0xdf3629.push(_0x4d517a);
        if (_0x3b04df !== _0x10a74b || _0x580f50 && _0x580f50 !== _0x10a74b) {
          {
            for (let _0x2f37ee = 0, _0x2adcba = _0x4d517a.possibleKeys.length; _0x2f37ee < _0x2adcba; _0x2f37ee++) {
              const _0x13f55d = _0x4d517a.possibleKeys[_0x2f37ee];
              const _0x496b80 = _0x5cad5a[_0x4d517a.score];
              _0x4d517a.params[_0x13f55d] = _0x580f50?.[_0x13f55d] && !_0x496b80 ? _0x580f50[_0x13f55d] : _0x3b04df[_0x13f55d] ?? _0x580f50?.[_0x13f55d];
              _0x5cad5a[_0x4d517a.score] = true;
            }
          }
        }
      }
    }
    return _0xdf3629;
  }
  search(_0x3232a7, _0x5806ce) {
    const _0x533390 = [];
    this.#params = _0x10a74b;
    const _0x34eafe = this;
    let _0x4af5b1 = [_0x34eafe];
    const _0x14e89e = _0x17708f(_0x5806ce);
    const _0x34bdcc = [];
    for (let _0x22e68c = 0, _0x56b170 = _0x14e89e.length; _0x22e68c < _0x56b170; _0x22e68c++) {
      {
        const _0x306231 = _0x14e89e[_0x22e68c];
        const _0x22ebf1 = _0x22e68c === _0x56b170 - 1;
        const _0xf6ec88 = [];
        for (let _0x4f5eb2 = 0, _0x18d321 = _0x4af5b1.length; _0x4f5eb2 < _0x18d321; _0x4f5eb2++) {
          const _0x2e6fb4 = _0x4af5b1[_0x4f5eb2];
          const _0x347ab1 = _0x2e6fb4.#children[_0x306231];
          _0x347ab1 && (_0x347ab1.#params = _0x2e6fb4.#params, _0x22ebf1 ? (_0x347ab1.#children["*"] && _0x533390.push(...this.#getHandlerSets(_0x347ab1.#children["*"], _0x3232a7, _0x2e6fb4.#params)), _0x533390.push(...this.#getHandlerSets(_0x347ab1, _0x3232a7, _0x2e6fb4.#params))) : _0xf6ec88.push(_0x347ab1));
          for (let _0x5262c7 = 0, _0x3750b5 = _0x2e6fb4.#patterns.length; _0x5262c7 < _0x3750b5; _0x5262c7++) {
            {
              const _0x2b1f70 = _0x2e6fb4.#patterns[_0x5262c7];
              const _0x454b4e = _0x2e6fb4.#params === _0x10a74b ? {} : {
                ..._0x2e6fb4.#params
              };
              if (_0x2b1f70 === "*") {
                const _0x5970b2 = _0x2e6fb4.#children["*"];
                _0x5970b2 && (_0x533390.push(...this.#getHandlerSets(_0x5970b2, _0x3232a7, _0x2e6fb4.#params)), _0x5970b2.#params = _0x454b4e, _0xf6ec88.push(_0x5970b2));
                continue;
              }
              if (!_0x306231) {
                continue;
              }
              const [_0x5510ef, _0x2f977b, _0x4daaaa] = _0x2b1f70;
              const _0x1c997f = _0x2e6fb4.#children[_0x5510ef];
              const _0x24eac6 = _0x14e89e.slice(_0x22e68c).join("/");
              if (_0x4daaaa instanceof RegExp) {
                const _0x1cb42b = _0x4daaaa.exec(_0x24eac6);
                if (_0x1cb42b) {
                  _0x454b4e[_0x2f977b] = _0x1cb42b[0];
                  _0x533390.push(...this.#getHandlerSets(_0x1c997f, _0x3232a7, _0x2e6fb4.#params, _0x454b4e));
                  if (Object.keys(_0x1c997f.#children).length) {
                    {
                      _0x1c997f.#params = _0x454b4e;
                      const _0x182099 = _0x1cb42b[0].match(/\//)?.["length"] ?? 0;
                      _0x34bdcc[_0x182099] ||= [];
                      const _0x34fd6f = _0x34bdcc[_0x182099];
                      _0x34fd6f.push(_0x1c997f);
                    }
                  }
                  continue;
                }
              }
              (_0x4daaaa === true || _0x4daaaa.test(_0x306231)) && (_0x454b4e[_0x2f977b] = _0x306231, _0x22ebf1 ? (_0x533390.push(...this.#getHandlerSets(_0x1c997f, _0x3232a7, _0x454b4e, _0x2e6fb4.#params)), _0x1c997f.#children["*"] && _0x533390.push(...this.#getHandlerSets(_0x1c997f.#children["*"], _0x3232a7, _0x454b4e, _0x2e6fb4.#params))) : (_0x1c997f.#params = _0x454b4e, _0xf6ec88.push(_0x1c997f)));
            }
          }
        }
        _0x4af5b1 = _0xf6ec88.concat(_0x34bdcc.shift() ?? []);
      }
    }
    _0x533390.length > 1 && _0x533390.sort((_0x322a83, _0x15d56c) => {
      {
        return _0x322a83.score - _0x15d56c.score;
      }
    });
    return [_0x533390.map(({
      handler: _0x6781bc,
      params: _0x531f27
    }) => [_0x6781bc, _0x531f27])];
  }
};
var _0x26d2fb = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new _0x4f4ecc();
  }
  add(_0x2bfd99, _0x3577b7, _0x24ab6c) {
    const _0x157e3c = _0x3b1211(_0x3577b7);
    if (_0x157e3c) {
      {
        for (let _0x15e746 = 0, _0x2b9cc3 = _0x157e3c.length; _0x15e746 < _0x2b9cc3; _0x15e746++) {
          this.#node.insert(_0x2bfd99, _0x157e3c[_0x15e746], _0x24ab6c);
        }
        return;
      }
    }
    this.#node.insert(_0x2bfd99, _0x3577b7, _0x24ab6c);
  }
  match(_0x1f31ae, _0x29a3e3) {
    return this.#node.search(_0x1f31ae, _0x29a3e3);
  }
};
var _0x59ceec = class extends _0x12a1f7 {
  constructor(_0x44616b = {}) {
    super(_0x44616b);
    this.router = _0x44616b.router ?? new _0x5c89d4({
      routers: [new _0x2c9378(), new _0x26d2fb()]
    });
  }
};
var _0x12faaf;
function _0x1790c1() {
  return typeof globalThis.addEventListener === "undefined";
}
function _0x322dc8(_0x406b29) {
  (_0x406b29.token_prefix === "/" || _0x406b29.token_prefix === "//" || _0x406b29.token_prefix === "") && (_0x406b29.token_prefix = "/default/", _0x406b29.default_password = true);
  return _0x406b29;
}
function _0xa94ea8(_0x356025) {
  !_0x1790c1() ? (console.log("cloudflare environment!"), _0x12faaf = {
    proxy_url: "http://localhost:5006",
    token_prefix: "/user22334455/",
    local_listen_port: 5006
  }, console.log("Configuration loaded:", _0x12faaf), _0x12faaf = _0x322dc8(_0x12faaf), _0x356025(_0x12faaf)) : (console.log("node environment!"), import("fs/promises").then(_0x1d05ec => {
    _0x1d05ec.readFile("./config.json", "utf8").then(_0x5f0fae => {
      _0x12faaf = JSON.parse(_0x5f0fae);
      console.log("Configuration loaded:", _0x12faaf);
      _0x12faaf = _0x322dc8(_0x12faaf);
      _0x356025(_0x12faaf);
    }).catch(_0x596a28 => {
      {
        console.error("Error loading the configuration file:", _0x596a28);
      }
    });
  }));
}
function _0x5bf65c() {
  if (_0x1790c1()) {
    {
      return _0x12faaf;
    }
  } else {
    _0x12faaf = {
      proxy_url: globalThis.proxy_url,
      token_prefix: globalThis.token_prefix,
      local_listen_port: 443
    };
    _0x12faaf = _0x322dc8(_0x12faaf);
    return _0x12faaf;
  }
}
var _0x1c925d = ["telegram.org", "nga.178.com"];
function _0x3f14ff(_0x5998ab) {
  let _0x1e5c5e = false;
  _0x1c925d.forEach(_0x8e62d9 => {
    {
      _0x5998ab.includes(_0x8e62d9) && (_0x1e5c5e = true);
    }
  });
  return _0x1e5c5e;
}
var _0x14e963 = ["telegram.org/service_worker.js", "elcomercio.pe", "exchangebank.com"];
function _0x3cfc6d(_0x4cd4fe) {
  let _0x38f732 = false;
  _0x14e963.map(_0x5e7cf8 => {
    {
      if (_0x4cd4fe.includes(_0x5e7cf8)) {
        _0x38f732 = true;
      }
    }
  });
  return _0x38f732;
}
var _0x2cedd9 = [{
  domain: "google.com",
  replacements: [{
    regex: /;\w+?\.integrity='sha.+?';/,
    replacement: ";"
  }]
}];
var _0x470008 = [{
  regex: /\.URL\b/,
  replacement: ".___URL"
}, {
  regex: /\bdomain\b/,
  replacement: "___domain"
}, {
  regex: /\blocation\b/,
  replacement: "___location"
}, {
  regex: /\bpushState\b/,
  replacement: "___pushState"
}, {
  regex: /\breplaceState\b/,
  replacement: "___replaceState"
}, {
  regex: /\bnavigator.serviceWorker\b/,
  replacement: "navigator.___serviceWorker"
}, {
  regex: /\bdocument.requestStorageAccessFor\b/,
  replacement: "document.___requestStorageAccessFor"
}];
function _0x24d7e7({
  body: _0x1c9e6a,
  proxy_real_host: _0x1f2dd1,
  proxy_url_prefix: _0x5a03eb
}) {
  let _0x356abc = String(_0x1c9e6a);
  typeof _0x1c9e6a === "string" && _0x1c9e6a.indexOf("document.URL") !== -1;
  const _0x3c79fd = _0x2cedd9.forEach(_0x48c404 => {
    _0x1f2dd1.includes(_0x48c404.domain) && _0x48c404.replacements.forEach(_0x1a6f71 => {
      _0x356abc = _0x356abc.replace(new RegExp(_0x1a6f71.regex, "g"), _0x1a6f71.replacement);
    });
  });
  !_0x3f14ff(_0x1f2dd1) && _0x470008.forEach(({
    regex: _0x2ce402,
    replacement: _0x720f26
  }) => {
    _0x356abc = _0x356abc.replace(new RegExp(_0x2ce402, "g"), _0x720f26);
  });
  return _0x356abc;
}
var _0x3e9433;
function _0x2c3142(_0x4841fc) {
  _0x4841fc = _0x4841fc.replace(/\bwindow\.location\s*=(.*?)/g, "window.hookLocation=$1");
  _0x4841fc = _0x4841fc.replace(/\bwindow\.location\.href\s*=(.*?)/g, "window.hookLocation=$1");
  _0x4841fc = _0x4841fc.replace(/\bwindow\.location\.assign\s*\((.*?)/g, "window.hookLocation.assign($1");
  return _0x4841fc;
}
var _0x70aad8 = ({
  location_value: _0x5e7882,
  proxy_url_prefix: _0x5b9a7c,
  proxy_real_protocol: _0x52d04c,
  proxy_real_host: _0x38eb5d
}) => {
  const _0x3fad01 = {
    "^(http[s]?)://([-a-zA-Z0-9.]+)": _0x5b9a7c + "$1/$2"
  };
  for (let _0x451fe1 in _0x3fad01) {
    {
      let _0x286407 = new RegExp(_0x451fe1, "g");
      _0x5e7882 = _0x5e7882.replace(_0x286407, _0x3fad01[_0x451fe1]);
    }
  }
  return _0x5e7882;
};
function _0x23c2df({
  location_value: _0x288246,
  proxy_url_prefix: _0x2702ba,
  proxy_real_protocol: _0x457678,
  proxy_real_host: _0x5b6efb
}) {
  let _0x48c568 = _0x70aad8({
    location_value: _0x288246,
    proxy_url_prefix: _0x2702ba,
    proxy_real_protocol: _0x457678,
    proxy_real_host: _0x5b6efb
  });
  _0x48c568.startsWith("/") && (_0x48c568 = _0x2702ba + _0x457678 + "/" + _0x5b6efb + _0x48c568);
  return _0x48c568;
}
function _0x32391b() {
  return typeof globalThis.addEventListener === "undefined";
}
async function _0x5aaf75(_0x4711ed, _0x6bcf31) {
  if (_0x32391b()) {
    {
      return await _0x58534f(_0x4711ed, _0x6bcf31);
    }
  } else {
    return await _0x13a157(_0x4711ed, _0x6bcf31);
  }
}
async function _0x5219cb(_0x90d90, _0x517d91) {
  return _0x32391b() ? await _0x237a71(_0x90d90, _0x517d91) : await _0x41fcd6(_0x90d90, _0x517d91);
}
async function _0x58534f(_0x2791c5, _0x3c078c) {
  !_0x3e9433 && (_0x3e9433 = await import("zlib"));
  console.log("Debug: Decompressing response with encoding:", _0x3c078c, "body type:", typeof _0x2791c5, _0x2791c5 ? _0x2791c5.constructor.name : "null", "body length:", _0x2791c5 ? _0x2791c5.length || _0x2791c5.byteLength : "N/A");
  if (!_0x2791c5 || _0x2791c5.byteLength === 0 || _0x2791c5.length === 0) {
    return Buffer.alloc(0);
  }
  try {
    if (_0x3c078c === "br") {
      return _0x3e9433.brotliDecompressSync(_0x2791c5);
    } else {
      return _0x3c078c === "gzip" ? _0x3e9433.gunzipSync(_0x2791c5) : _0x2791c5;
    }
  } catch (_0x57515a) {
    console.error("Decompression error:", _0x57515a);
    return _0x2791c5;
  }
}
async function _0x237a71(_0x3bfde0, _0x2ae81c) {
  !_0x3e9433 && (_0x3e9433 = await import("zlib"));
  if (!_0x3bfde0 || _0x3bfde0.byteLength === 0 || _0x3bfde0.length === 0) {
    return Buffer.alloc(0);
  }
  try {
    {
      if (_0x2ae81c === "br") {
        return _0x3e9433.brotliCompressSync(_0x3bfde0);
      } else {
        return _0x2ae81c === "gzip" ? _0x3e9433.gzipSync(_0x3bfde0) : _0x3bfde0;
      }
    }
  } catch (_0x47cce2) {
    console.error("Compression error:", _0x47cce2);
    return _0x3bfde0;
  }
}
async function _0x41fcd6(_0x310900, _0x5d9698) {
  console.log("Debug: Attempting compression with encoding:", _0x5d9698, "CompressionStream defined:", typeof CompressionStream !== "undefined");
  if (!_0x310900 || _0x310900.byteLength === 0) {
    {
      return new Uint8Array();
    }
  }
  if (typeof CompressionStream !== "undefined") {
    try {
      let _0x19fc58;
      if (_0x5d9698 === "gzip" || _0x5d9698 === "br") {
        {
          _0x19fc58 = _0x310900.pipeThrough(new CompressionStream(_0x5d9698));
        }
      } else {
        return _0x310900;
      }
      const _0x1c277a = _0x19fc58.getReader();
      let _0x3852ee = [];
      let _0x304b67;
      while (!(_0x304b67 = await _0x1c277a.read()).done) {
        _0x3852ee.push(_0x304b67.value);
      }
      const _0x5f15a1 = new Uint8Array(_0x3852ee.reduce((_0x39000d, _0x15f0e4) => _0x39000d.concat(Array.from(_0x15f0e4)), []));
      return _0x5f15a1;
    } catch (_0x5d1771) {
      console.error("Compression error:", _0x5d1771);
      return _0x310900;
    }
  } else {
    {
      console.error("Compression not supported in this environment or for the specified format.");
      return _0x310900;
    }
  }
}
async function _0x13a157(_0x169393, _0x140cb9) {
  console.log("Debug: Attempting decompression with encoding:", _0x140cb9, "DecompressionStream defined:", typeof DecompressionStream !== "undefined");
  if (!_0x169393 || _0x169393.byteLength === 0) {
    return new Uint8Array();
  }
  if (typeof DecompressionStream !== "undefined") {
    {
      try {
        let _0xe070e5;
        if (_0x140cb9 === "gzip" || _0x140cb9 === "br") {
          {
            _0xe070e5 = _0x169393.pipeThrough(new DecompressionStream(_0x140cb9));
          }
        } else {
          return _0x169393;
        }
        const _0x301061 = _0xe070e5.getReader();
        let _0x111b91 = [];
        let _0x37c702;
        while (!(_0x37c702 = await _0x301061.read()).done) {
          _0x111b91.push(_0x37c702.value);
        }
        const _0x1f69b9 = new Uint8Array(_0x111b91.reduce((_0x29492b, _0x27fa42) => _0x29492b.concat(Array.from(_0x27fa42)), []));
        return _0x1f69b9;
      } catch (_0x477dd2) {
        console.error("Decompression error:", _0x477dd2);
        return _0x169393;
      }
    }
  } else {
    console.error("Decompression not supported in this environment or for the specified format.");
    return _0x169393;
  }
}
function _0x3df797(_0x303bd3, _0x25f98d) {
  const _0x3fca46 = new RegExp(_0x25f98d, "i");
  const _0xefaa1f = _0x3fca46.exec(_0x303bd3);
  return _0xefaa1f ? _0xefaa1f.index + _0xefaa1f[0].length : -1;
}
async function _0x27b755({
  proxyResponse: _0x4d3ff2,
  newResHeaders: _0x4e5359,
  req: _0xce878b
}, _0x195ae8, _0x41af0a = _0x3f14ff, _0x138c87 = _0x5aaf75, _0x50005e = _0x5219cb) {
  const _0xa94008 = _0x195ae8 || _0x5bf65c();
  const _0x440326 = _0xa94008.proxy_url + _0xa94008.token_prefix;
  const _0x310839 = _0xce878b.proxy_real_protocol;
  const _0x2d5b88 = _0xce878b.proxy_real_host;
  const _0x2a8b93 = "<script>\n  if (!window.siteproxy_injected_flag) { // only load once\n    var proxy_url_prefix = '" + _0x440326 + "';\n    var proxy_real_protocol = '" + _0x310839 + "';\n    var proxy_real_host = '" + _0x2d5b88 + "';\n    var config_proxy_url = '" + _0xa94008.proxy_url + "';\n    var config_token_prefix = '" + _0xa94008.token_prefix + "';\n  } </script>";
  const _0x1304d1 = _0x2a8b93 + "<script src=\"/siteproxy-response-injected.js\"></script>";
  _0x10dd8b(_0x4d3ff2, _0x4e5359, _0x440326, _0x310839, _0x2d5b88);
  let _0x364ed6 = await _0x304b9a(_0x4d3ff2, _0x4e5359, _0x1304d1, _0xce878b, _0xa94008, _0x41af0a, _0x138c87, _0x50005e);
  (_0x4d3ff2.status === 204 || [301, 302, 303, 304, 307, 308].includes(_0x4d3ff2.status)) && (_0x364ed6 = undefined, _0x4e5359.delete("content-length"), _0x4e5359.delete("content-encoding"), _0x4e5359.delete("transfer-encoding"));
  let _0x28f52a = new Response(_0x364ed6, {
    status: _0x4d3ff2.status,
    headers: _0x4e5359
  });
  return _0x28f52a;
}
function _0x10dd8b(_0x410660, _0x44ce90, _0x55b877, _0x1e27d5, _0x45f50b) {
  if ([301, 302, 303, 307, 308].includes(_0x410660.status)) {
    {
      let _0x426b9e = _0x410660.headers.get("location");
      _0x426b9e && _0x44ce90.set("Location", _0x23c2df({
        location_value: _0x426b9e,
        proxy_url_prefix: _0x55b877,
        proxy_real_protocol: _0x1e27d5,
        proxy_real_host: _0x45f50b
      }));
    }
  }
}
async function _0x304b9a(_0x2243eb, _0x1a2440, _0x367aca, _0x15422f, _0x298a6d, _0x53f959, _0x5b8bbd, _0x32ca1f) {
  const _0x20a5d3 = _0x298a6d || _0x5bf65c();
  const _0x478d63 = _0x20a5d3.proxy_url + _0x20a5d3.token_prefix;
  const _0x13b6d3 = _0x15422f.proxy_real_protocol;
  const _0x52a31e = _0x15422f.proxy_real_host;
  let _0x21c094;
  const _0x37d778 = _0x2243eb.headers.get("content-encoding");
  const _0x2ae1bc = _0x2243eb.headers.get("content-type") || "";
  const _0x324075 = _0x2ae1bc.includes("text/html");
  let _0x526c87 = _0x2ae1bc.includes("javascript");
  let _0x30de4e = _0x2243eb.body;
  let _0x12c5ed = "utf-8";
  let _0x96c16b;
  _0x37d778 && (_0x21c094 = await _0x2243eb.arrayBuffer(), _0x96c16b = _0x21c094.byteLength);
  if ((_0x324075 || _0x526c87) && _0x2243eb.status < 500) {
    {
      !_0x37d778 && (_0x21c094 = await _0x2243eb.arrayBuffer(), _0x96c16b = _0x21c094.byteLength);
      if (!_0x96c16b || _0x96c16b < 10) {
        if (!_0x96c16b || _0x2243eb.status === 204) {
          _0x21c094 = undefined;
          return _0x21c094;
        }
      }
      const _0x3ea634 = new TextDecoder("iso-8859-1");
      const _0x2e04c7 = _0x3ea634.decode(_0x21c094);
      let _0x359915 = _0x2e04c7.match(/<meta\s+[^>]*charset\s*=\s*["']?([0-9a-zA-Z\-]+)["']?[^>]*>/i);
      if (_0x324075 && _0x359915 && _0x359915[1]) {
        {
          _0x12c5ed = _0x359915[1].toLowerCase();
        }
      } else {
        {
          const _0x1a7075 = _0x2ae1bc.match(/charset=([^;]+)/i);
          _0x1a7075 && (_0x12c5ed = _0x1a7075[1].toLowerCase());
        }
      }
      const _0x166e89 = _0x2ae1bc.toLowerCase().indexOf("gbk") !== -1;
      let _0xafe54c;
      try {
        {
          _0xafe54c = new TextDecoder(_0x12c5ed);
        }
      } catch (_0x190d6b) {
        {
          console.error("Unsupported charset, falling back to utf-8", _0x190d6b);
          _0xafe54c = new TextDecoder("utf-8");
        }
      }
      let _0x3e073e;
      try {
        _0x3e073e = _0xafe54c.decode(_0x21c094);
      } catch (_0x3cb1d2) {
        {
          console.error("Decoding error occurred: ", _0x3cb1d2);
          return _0x21c094;
        }
      }
      let _0x461620 = -1;
      if (_0x324075 && _0x12c5ed === "gbk") {
        const _0x288066 = "<head.*?>";
        _0x461620 = _0x3df797(_0x3e073e, _0x288066);
        _0x461620 !== -1 && (_0x461620 += 1);
      }
      console.log("Debug: modifyContent - charset detected:", _0x12c5ed, "pos for head tag:", _0x461620, "isHtml:", _0x324075, "contentType:", _0x2ae1bc);
      if (_0x324075 && _0x12c5ed === "gbk" && _0x461620 !== -1) {
        const _0x11febb = new TextEncoder();
        let _0x550282 = _0x11febb.encode(_0x367aca);
        let _0x1e7771 = _0x21c094.byteLength + _0x550282.byteLength;
        let _0x1c9b10 = new ArrayBuffer(_0x1e7771);
        let _0x521c1d = new Uint8Array(_0x1c9b10);
        let _0x1b7a49 = new Uint8Array(_0x21c094);
        let _0x30d669 = new Uint8Array(_0x550282);
        _0x521c1d.set(_0x1b7a49.subarray(0, _0x461620), 0);
        _0x521c1d.set(_0x30d669, _0x461620);
        _0x521c1d.set(_0x1b7a49.subarray(_0x461620), _0x461620 + _0x30d669.length);
        _0x21c094 = _0x1c9b10;
      } else {
        if (!_0x53f959(_0x52a31e)) {
          {
            if (_0x324075 || _0x526c87) {
              _0x21c094 = _0x3e073e;
              _0x526c87 && (_0x21c094 = _0x2c3142(_0x21c094));
              _0x21c094 = _0x24d7e7({
                body: _0x21c094,
                proxy_real_host: _0x52a31e,
                proxy_url_prefix: _0x478d63
              });
              if (_0x324075) {
                console.log("contentEncoding: " + _0x37d778);
                console.log("Debug: Attempting HTML injection - checking for <head>, <body>, <html> tags");
                if (_0x21c094.indexOf("<head") !== -1) {
                  console.log("Debug: Injecting into <head>");
                  _0x21c094 = _0x21c094.replace(/<head(.*?)>/, "<head$1>" + _0x367aca);
                } else {
                  if (_0x21c094.indexOf("<body") !== -1) {
                    console.log("Debug: Injecting into <body>");
                    _0x21c094 = _0x21c094.replace(/<body(.*?)>/, "<body$1>" + _0x367aca);
                  } else {
                    _0x21c094.indexOf("<html") !== -1 ? (console.log("Debug: Injecting into <html>"), _0x21c094 = _0x21c094.replace(/<html(.*?)>/, "<html$1>" + _0x367aca)) : (console.log("Debug: Falling back to replacing any closing tag"), _0x21c094 = _0x21c094.replace(/(<\/[a-zA-Z0-9]+>)/, "$1" + _0x367aca));
                  }
                }
              }
              const _0x4659bd = new TextEncoder("utf-8");
              _0x21c094 = _0x4659bd.encode(_0x21c094);
            }
          }
        } else {
          console.log("Debug: Excluded from body modification");
        }
      }
      if (_0x15422f.proxy_real_protocol) {
        {
          const _0x4c15ad = "proxy_real_protocol=" + _0x15422f.proxy_real_protocol + "; Path=/; HttpOnly";
          const _0x3ec1c2 = "proxy_real_host=" + _0x15422f.proxy_real_host + "; Path=/; HttpOnly";
          _0x1a2440.append("set-cookie", _0x4c15ad);
          _0x1a2440.append("set-cookie", _0x3ec1c2);
          _0x1a2440.delete("x-frame-options");
        }
      }
      _0x30de4e = _0x21c094;
    }
  }
  _0x37d778 && (_0x32391b() && (_0x21c094 = await _0x32ca1f(_0x21c094, "gzip"), _0x1a2440.set("content-length", String(_0x21c094.length)), _0x1a2440.set("content-encoding", "gzip")), _0x30de4e = _0x21c094, _0x1a2440.delete("transfer-encoding"));
  if (_0x30de4e !== undefined && _0x30de4e !== null) {
    {
      _0x30de4e.length !== undefined && _0x1a2440.set("content-length", String(_0x30de4e.length));
    }
  }
  _0x30de4e instanceof ArrayBuffer && (_0x30de4e = new Uint8Array(_0x30de4e));
  return _0x30de4e;
}
var _0x341d80 = _0x65b661;
(function (_0x425b69, _0xbc3fe5) {
  const _0x519d66 = _0x65b661;
  const _0x16f022 = _0x425b69();
  while (true) {
    try {
      const _0x2c0479 = parseInt(_0x519d66(445)) / 1 * (parseInt(_0x519d66(425)) / 2) + -parseInt(_0x519d66(380)) / 3 * (-parseInt(_0x519d66(318)) / 4) + parseInt(_0x519d66(402)) / 5 * (-parseInt(_0x519d66(463)) / 6) + parseInt(_0x519d66(441)) / 7 + -parseInt(_0x519d66(349)) / 8 * (parseInt(_0x519d66(398)) / 9) + parseInt(_0x519d66(324)) / 10 + -parseInt(_0x519d66(352)) / 11;
      if (_0x2c0479 === _0xbc3fe5) {
        break;
      } else {
        _0x16f022.push(_0x16f022.shift());
      }
    } catch (_0xd0630e) {
      _0x16f022.push(_0x16f022.shift());
    }
  }
})(_0x6249be, 436151);
function _0x595ae4(_0x2c0362) {
  const _0x4cd83b = _0x65b661;
  const _0x4b62e3 = /^([^:/?#]+)\/([-a-z0-9A-Z.]+)/;
  const _0x42304b = _0x2c0362[_0x4cd83b(313)](_0x4b62e3);
  let _0x5e2de6;
  let _0x3efd14;
  _0x42304b && (_0x5e2de6 = _0x42304b[1], _0x3efd14 = _0x42304b[2]);
  return {
    protocol: _0x5e2de6,
    host: _0x3efd14
  };
}
function _0x2622ef() {
  const _0x157f53 = _0x65b661;
  const _0x57d651 = {
    LnaOl: _0x157f53(364),
    QSEBe: _0x157f53(337),
    cuxNK: _0x157f53(456),
    rLEzM: _0x157f53(357),
    FTjOM: _0x157f53(376),
    xKerh: _0x157f53(375),
    hnxJY: function (_0x15be36, _0x51c440) {
      {
        return _0x15be36 !== _0x51c440;
      }
    },
    uEDLp: _0x157f53(408),
    sRgbD: _0x157f53(336),
    Oqkbc: _0x157f53(414),
    KRepg: function (_0x481cf9, _0x41b3a3) {
      return _0x481cf9(_0x41b3a3);
    },
    KnugR: function (_0x2c51de, _0x9ce7e5) {
      {
        return _0x2c51de + _0x9ce7e5;
      }
    },
    qCSdJ: _0x157f53(455),
    zXiTY: function (_0x4b2bce, _0x538149) {
      return _0x4b2bce + _0x538149;
    },
    TYWOg: _0x157f53(387),
    uVoVS: function (_0x3f1605, _0x68e05d) {
      return _0x3f1605(_0x68e05d);
    },
    ScWag: function (_0x264028) {
      return _0x264028();
    },
    qYCAq: function (_0x3cbe0e, _0x11b0bf) {
      return _0x3cbe0e === _0x11b0bf;
    },
    QdjpH: "undefined"
  };
  const _0x5bbb81 = function () {
    {
      const _0x5cd5c3 = _0x157f53;
      const _0x141ec9 = {
        DDvNM: _0x57d651.QSEBe,
        NRdLF: _0x57d651[_0x5cd5c3(452)],
        FBvmv: _0x57d651.rLEzM,
        KYgiI: _0x5cd5c3(430),
        pYrkn: _0x57d651[_0x5cd5c3(373)],
        qmfDd: _0x57d651.xKerh
      };
      if (_0x57d651.hnxJY(_0x57d651[_0x5cd5c3(422)], _0x5cd5c3(433))) {
        let _0x114cba = true;
        return function (_0xf99524, _0x464e09) {
          const _0x534493 = _0x5cd5c3;
          if (_0x57d651[_0x534493(319)] !== _0x534493(364)) {
            const _0x3d5ed6 = "-----BEGIN PUBLIC KEY-----";
            const _0x3bff46 = _0x534493(350);
            let _0x38c44b = _0x3b3359[_0x534493(406)](_0x3d5ed6, "")[_0x534493(406)](_0x3bff46, "");
            _0x38c44b = _0x38c44b[_0x534493(406)](/\s+/g, "");
            const _0x16a691 = _0xa18290(_0x38c44b);
            const _0x5d2410 = new _0x52ab56(_0x16a691[_0x534493(367)]);
            for (let _0x4d2bcd = 0; _0x4d2bcd < _0x16a691.length; _0x4d2bcd++) {
              {
                _0x5d2410[_0x4d2bcd] = _0x16a691[_0x534493(423)](_0x4d2bcd);
              }
            }
            return _0x4fb383[_0x534493(369)][_0x534493(342)].importKey(_0x141ec9[_0x534493(316)], _0x5d2410[_0x534493(330)], {
              name: _0x141ec9[_0x534493(372)],
              hash: _0x141ec9[_0x534493(360)]
            }, true, ["encrypt"]);
          } else {
            const _0x452c03 = _0x114cba ? function () {
              const _0x44c608 = _0x534493;
              if (_0x464e09) {
                const _0x4fa9e6 = _0x464e09[_0x44c608(379)](_0xf99524, arguments);
                _0x464e09 = null;
                return _0x4fa9e6;
              }
            } : function () {};
            _0x114cba = false;
            return _0x452c03;
          }
        };
      } else {
        const _0x48f67e = _0x50937a[_0x5cd5c3(309)](_0x1aab1d, _0x141ec9[_0x5cd5c3(459)]);
        const _0x45956a = _0x495b6a[_0x5cd5c3(388)]({
          key: _0xbc7a7c,
          padding: _0x3413d8[_0x5cd5c3(396)][_0x5cd5c3(436)],
          oaepHash: _0x141ec9.pYrkn
        }, _0x48f67e);
        return _0x45956a.toString(_0x141ec9[_0x5cd5c3(303)]);
      }
    }
  }();
  (function () {
    _0x5bbb81(this, function () {
      const _0x2e644b = _0x65b661;
      const _0x4555c4 = new RegExp(_0x57d651[_0x2e644b(378)]);
      const _0x50c6cb = new RegExp(_0x57d651[_0x2e644b(358)], "i");
      const _0x5798e7 = _0x57d651[_0x2e644b(465)](_0x548406, _0x2e644b(356));
      !_0x4555c4[_0x2e644b(332)](_0x57d651[_0x2e644b(327)](_0x5798e7, _0x57d651[_0x2e644b(361)])) || !_0x50c6cb.test(_0x57d651[_0x2e644b(405)](_0x5798e7, _0x57d651[_0x2e644b(395)])) ? _0x57d651.uVoVS(_0x5798e7, "0") : _0x57d651.ScWag(_0x548406);
    })();
  })();
  return _0x57d651.qYCAq(typeof globalThis[_0x157f53(366)], _0x57d651[_0x157f53(385)]);
}
var _0x559b75;
var _0x5edb65 = _0x2622ef();
_0x5edb65 && import(_0x341d80(369))[_0x341d80(363)](_0x7591f4 => _0x559b75 = _0x7591f4);
var _0x1d2da8 = _0x341d80(448);
var _0x1f1b1f = _0x341d80(311);
function _0x6249be() {
  const _0x5f5af5 = ["match", "string", "FDexO", "DDvNM", "bHkJN", "12zwdZnu", "LnaOl", "CLhdS", "gZtHL", "MPhIl", "zlSaK", "5233090qybDFA", "KIcqQ", "IvoPf", "KnugR", "pkcs8", "SJYXi", "buffer", "vbmna", "test", "encode", "CTXpN", "dQVZc", "function *\\( *\\)", "spki", "XvpBu", "PhXLm", "importKey", "Gnahc", "subtle", "vtjfX", "generateKeyPair", "AES-CBC", "decrypt", "pwAgE", "YyXWz", "3095448XAxGpv", "-----END PUBLIC KEY-----", "QMIZm", "2410749XXnDqE", "constructor", "aes-256-cbc", "MhkrS", "init", "SHA-256", "Oqkbc", "generateKey", "FBvmv", "qCSdJ", "EMvZI", "then", "XVNgL", "cupxL", "addEventListener", "length", "slice", "crypto", "toString", "CmipD", "NRdLF", "FTjOM", "ABBQL", "utf8", "sha256", "call", "sRgbD", "apply", "294762PkACvL", "bLcTq", "EdHdd", "cZRxu", "XVrKO", "QdjpH", "rsa", "input", "privateDecrypt", "EliJU", "zYINP", "-----END PRIVATE KEY-----", "EATnI", "MUCAy", "ULsbm", "TYWOg", "constants", "zlBFc", "18vzmaJN", "encrypt", "action", "ZWhXx", "5EoLTMN", "UknOL", "ARrpM", "zXiTY", "replace", "VCesv", "Xhyqx", "update", "pem", "YDtEy", "subarray", "jFIYj", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "lRCpD", "raw", "XUbIJ", "BgmgE", "vAwqg", "Ydjtw", "KXOYm", "uEDLp", "charCodeAt", "NiqTc", "71454aXDkFy", "createDecipheriv", "dAiAo", "HtehD", "sUhvs", "base64", "oRJbW", "VIHKK", "wKzKk", "AXXHh", "KBUZy", "RSA_PKCS1_OAEP_PADDING", "humMs", "bVkRq", "gger", "pCJMO", "1464092QwhUcN", "-----BEGIN PUBLIC KEY-----", "jBiMV", "aeUui", "18zXtKtz", "final", "while (true) {}", "\n-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwEJP4gVNBL/GHwMP6o4C\nSWsQeT22KLYDgJqlVXrUKw78iPI/t/a7kom235C6/sHEhC40oLLjdczIINLGs0gL\nicwDnXNhOEu3RfpJFg4SOomjIEpXPYIC4pdTi/2dRHFqWwU9u3FUUxX261VfDabU\nD9ab5kgyhqMNTwIN86TdsZUG6Lz9K/Bv6H+55wkE+5pTj/w0IigZCS1UmwUWLF81\nmXQ4fw3p86qzGrRbB+ri4gEHUTIol+NPJB22SN+Q4PD91LfOW/P5X0mg7SuHJTBo\nELhGKwqVnWlpz4V158BLakdmedo63zS+LsmxL2OgjFecpclIgb1jyX5ic84EUjHv                                                                                                                       \niwIDAQAB\n-----END PUBLIC KEY-----\n", "FsLkf", "publicEncrypt", "decode", "cuxNK", "KOpln", "eNXfD", "chain", "RSA-OAEP", "QPyUt", "counter", "KYgiI", "HDqJH", "stateObject", "RMHgm", "1446846PznEkv", "DbEwx", "KRepg", "zzZZd", "-----BEGIN PRIVATE KEY-----", "qmfDd", "nFKOe", "juRNn", "mnjeO", "qMiSh", "SAXox", "from", "CVkdM", "\n-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAQk/iBU0Ev8Yf\nAw/qjgJJaxB5PbYotgOAmqVVetQrDvyI8j+39ruSibbfkLr+wcSELjSgsuN1zMgg\n0sazSAuJzAOdc2E4S7dF+kkWDhI6iaMgSlc9ggLil1OL/Z1EcWpbBT27cVRTFfbr\nVV8NptQP1pvmSDKGow1PAg3zpN2xlQbovP0r8G/of7nnCQT7mlOP/DQiKBkJLVSb\nBRYsXzWZdDh/DenzqrMatFsH6uLiAQdRMiiX408kHbZI35Dg8P3Ut85b8/lfSaDt\nK4clMGgQuEYrCpWdaWnPhXXnwEtqR2Z52jrfNL4uybEvY6CMV5ylyUiBvWPJfmJz\nzgRSMe+LAgMBAAECggEAM6W8uu2MnqF78hnK/Uov4BQ0ZTWISVB4CWTB1IA+HeEV\nQx68sklEY12+dDl3mndoONAG0EKuKxebjYHB4iiQ/PAC6pmzvMFOVyyg1J1sFTCj\nU0nVPM8/wio/xeQYCupi1VfHmSKdMgK9BcQ12D+ASU7wK4EqnZOQwDA/mjuoWItG                                                                                                                       \nS86g4wezKnBPpj9IxkBAurSEeFKVjupAoASk4e1v/S+ITPRFlic3I0uy8b2qU7il\ngfbtB7j3UPYFFlhH/sipizQ1d1N+EyIaXplWX4QnoO1/ksVsqJZ0Q6afzYR+mtlb\nR7zqoBrwLrMOdREuyrQfPgqS1OgEEhimaGUvcbbF3QKBgQDtU3uC+adNrqmXi9EF\nIjieZGa5T2QlqkzL6wf/NXfiSBjw+nqJSuRXeRhS+tLIpfLWAkhwLp4YtBioom6U\ny/3KP5GtDbRJ9lZSF06moueTidk4Z4bfN7+WFT7UbEf/Nx3fnMFHEFqmsvH2KHjn\n1ADmAAHW0ERRwEf5ocWJwAUvBwKBgQDPYwhWBC61w2TQy6ZogcAfQudociejOngq\nfMz7iDEV35aR8/cc81uo5spN7amRmkJVPpd92HUd+xdlXsOLBJ5HHsoeuWEo6Xe5\nhsHaZYeJJx/1BLkmv050QfzjIeh6n71gfSOewCooNgkb9lLbvHoT50CQgXfkme2A            \nUz4HLQDWXQKBgB2odyDxDgVZNHxpzp8znZu9tFCoKT3DwIEjSAaOqgKvO96xjqql\nn0+HJJEKI1lL08MG2gKa8MrphsNcOTGDJJ4nv46+za8Ih9UOcJfGd+YqLeksluBC\nWUDqOsXVGlI8kxEkx8qXspxudGpsuF9QUSRtD83GjSMiQlxh6QvD4WH1AoGBAIgC\nlgP7qDqy09qPxSpC9iJKeYOpYk+N2CNdR/4q2q5SvegozUciX1nNSp6DILOKLLjF\nXQs+u8iW1Ug5NxtkQv23tq0hvRPc0hVNyLMX5STREQdbOqarzqM2Z8j6gwJw4v11   \n9Ld3pe5LSfwZt0u/N3z4LALZtiypuvZvIX4JSMRNAoGBAOc0nw0OdDOEOmfh2hqR  \nwRTW+oTY2iIDKFHtzKVSxJlyKQkagJgg/qboXL9bQoHTsBzL8lGZhh8JJPpeyP1/\nyIzsiCZ9hrt+z9KJPG3lu0tlnEOg7r57SiR8aOtsb1D9wb24cQLFQOfT3D66mNi8\n1/PLJ86KgP+cXZDrVrjUUKY0\n-----END PRIVATE KEY-----\n", "RJoRU"];
  _0x6249be = function () {
    {
      return _0x5f5af5;
    }
  };
  return _0x6249be();
}
function _0x65b661(_0xb85216, _0x5678a6) {
  const _0x41c86b = _0x6249be();
  _0x65b661 = function (_0x3e1fe3, _0x571dcb) {
    {
      _0x3e1fe3 = _0x3e1fe3 - 303;
      let _0x43ca3c = _0x41c86b[_0x3e1fe3];
      return _0x43ca3c;
    }
  };
  return _0x65b661(_0xb85216, _0x5678a6);
}
async function _0x6527ed(_0x803b19) {
  const _0x1b892a = _0x341d80;
  const _0x5aad92 = {
    lRCpD: function (_0x2bbdfe, _0x1bf6c8) {
      return _0x2bbdfe(_0x1bf6c8);
    },
    manrW: function (_0x2cddff, _0x4a8848) {
      {
        return _0x2cddff(_0x4a8848);
      }
    },
    ARrpM: _0x1b892a(375),
    zqAyq: _0x1b892a(374),
    oRJbW: _0x1b892a(467),
    nFKOe: _0x1b892a(391),
    MUCAy: function (_0x2f2b62, _0x43a3c3) {
      return _0x2f2b62(_0x43a3c3);
    },
    ckllY: function (_0x5e2694, _0x4eb5df) {
      return _0x5e2694 < _0x4eb5df;
    },
    XvpBu: _0x1b892a(438),
    PhXLm: "pkcs8",
    Gyfrb: _0x1b892a(357),
    EATnI: _0x1b892a(346),
    MYPBU: function (_0x41b72a, _0x557df9) {
      return _0x41b72a(_0x557df9);
    },
    QPyUt: _0x1b892a(456)
  };
  if (_0x5edb65) {
    const _0x246bb5 = Buffer.from(_0x803b19, "base64");
    const _0xd2c8d6 = _0x559b75[_0x1b892a(388)]({
      key: _0x1f1b1f,
      padding: _0x559b75[_0x1b892a(396)].RSA_PKCS1_OAEP_PADDING,
      oaepHash: _0x1b892a(376)
    }, _0x246bb5);
    return _0xd2c8d6.toString(_0x5aad92[_0x1b892a(404)]);
  } else {
    if (_0x5aad92.zqAyq === _0x5aad92.zqAyq) {
      {
        const _0xa40eb6 = _0x5aad92[_0x1b892a(431)];
        const _0x1d7338 = _0x5aad92[_0x1b892a(304)];
        const _0x597511 = _0x1f1b1f[_0x1b892a(406)](_0xa40eb6, "").replace(_0x1d7338, "").replace(/\s/g, "");
        const _0xa86ae7 = _0x5aad92[_0x1b892a(393)](atob, _0x597511);
        const _0x40ac81 = new Uint8Array(_0xa86ae7[_0x1b892a(367)]);
        for (let _0x64b6e3 = 0; _0x5aad92.ckllY(_0x64b6e3, _0xa86ae7[_0x1b892a(367)]); _0x64b6e3++) {
          _0x5aad92[_0x1b892a(338)] === "bVkRq" ? _0x40ac81[_0x64b6e3] = _0xa86ae7[_0x1b892a(423)](_0x64b6e3) : eNVrGN[_0x1b892a(415)](_0x3accfe, "0");
        }
        const _0x398587 = await crypto[_0x1b892a(342)].importKey(_0x5aad92[_0x1b892a(339)], _0x40ac81[_0x1b892a(330)], {
          name: _0x1b892a(456),
          hash: {
            name: _0x5aad92.Gyfrb
          }
        }, false, [_0x5aad92[_0x1b892a(392)]]);
        const _0x3b17e6 = Uint8Array[_0x1b892a(309)](_0x5aad92.MYPBU(atob, _0x803b19), _0x1bb188 => _0x1bb188[_0x1b892a(423)](0));
        const _0x67787f = await crypto[_0x1b892a(342)][_0x1b892a(346)]({
          name: _0x5aad92[_0x1b892a(457)]
        }, _0x398587, _0x3b17e6);
        return new TextDecoder()[_0x1b892a(451)](_0x67787f);
      }
    } else {
      if (_0x193e93) {
        return _0x185f51;
      } else {
        eNVrGN.manrW(_0x1b2c5a, 0);
      }
    }
  }
}
async function _0xa45a5(_0x3e3a2d, _0x5092ca) {
  const _0x24ad10 = _0x341d80;
  const _0x5eb333 = {
    zYINP: function (_0x465cc3, _0xb6900b) {
      {
        return _0x465cc3 === _0xb6900b;
      }
    },
    KBUZy: "hDvCP",
    pIvLK: _0x24ad10(437),
    mnjeO: function (_0x4f5701, _0x184e17) {
      return _0x4f5701 !== _0x184e17;
    },
    vtjfX: _0x24ad10(382),
    cRxyc: function (_0x22dbbe, _0x48d6fe) {
      return _0x22dbbe === _0x48d6fe;
    },
    VIHKK: "EirYs",
    XVrKO: _0x24ad10(354),
    vbmna: _0x24ad10(345),
    lEzYu: _0x24ad10(346)
  };
  let _0x2f4a38;
  let _0x4a7e6f;
  let _0xf44ab7;
  let _0x3066ec;
  if (_0x5edb65) {
    _0x5eb333[_0x24ad10(390)](_0x5eb333[_0x24ad10(435)], _0x5eb333.pIvLK) ? import(_0x24ad10(369))[_0x24ad10(363)](_0x3c8053 => _0x128a13 = _0x3c8053) : (_0x2f4a38 = Buffer[_0x24ad10(309)](_0x3e3a2d, _0x24ad10(430)), _0x4a7e6f = _0x2f4a38[_0x24ad10(412)](0, 16), _0xf44ab7 = _0x2f4a38[_0x24ad10(412)](16), _0x3066ec = Buffer[_0x24ad10(309)](_0x5092ca, _0x24ad10(430)));
  } else {
    if (_0x5eb333[_0x24ad10(306)](_0x5eb333[_0x24ad10(343)], _0x24ad10(382))) {
      _0x2636b3 = _0x5ce0d1[1];
      _0x1acec8 = _0x311a6c[2];
    } else {
      {
        const _0x2d5da9 = Uint8Array[_0x24ad10(309)](atob(_0x3e3a2d), _0x4b0b00 => _0x4b0b00.charCodeAt(0));
        _0x4a7e6f = _0x2d5da9.slice(0, 16);
        _0xf44ab7 = _0x2d5da9[_0x24ad10(368)](16);
        const _0x4b3bd3 = Uint8Array[_0x24ad10(309)](atob(_0x5092ca), _0x584d87 => _0x584d87[_0x24ad10(423)](0));
        _0x3066ec = _0x4b3bd3;
      }
    }
  }
  if (_0x5edb65) {
    {
      if (_0x5eb333.cRxyc("EirYs", _0x5eb333[_0x24ad10(432)])) {
        const _0x220ee9 = _0x559b75[_0x24ad10(426)](_0x5eb333[_0x24ad10(384)], _0x3066ec, _0x4a7e6f);
        let _0x4f4128 = _0x220ee9[_0x24ad10(409)](_0xf44ab7);
        _0x4f4128 = Buffer.concat([_0x4f4128, _0x220ee9[_0x24ad10(446)]()]);
        return _0x4f4128.toString(_0x24ad10(375));
      } else {
        {
          const _0x7026a = _0x323473[_0x24ad10(309)](_0xdee2bb(_0x29eccf), _0xeb309f => _0xeb309f[_0x24ad10(423)](0));
          _0x58b541 = _0x7026a.slice(0, 16);
          _0x1bc603 = _0x7026a.slice(16);
          const _0x35a23f = _0x1dc62d[_0x24ad10(309)](_0x198c0c(_0x35f35d), _0x221f69 => _0x221f69[_0x24ad10(423)](0));
          _0x200f78 = _0x35a23f;
        }
      }
    }
  } else {
    const _0x1bdb04 = await crypto.subtle[_0x24ad10(340)](_0x24ad10(416), _0x3066ec, {
      name: _0x5eb333[_0x24ad10(331)]
    }, false, [_0x5eb333.lEzYu]);
    const _0x555ddd = await crypto[_0x24ad10(342)][_0x24ad10(346)]({
      name: _0x5eb333[_0x24ad10(331)],
      iv: _0x4a7e6f
    }, _0x1bdb04, _0xf44ab7);
    return new TextDecoder().decode(_0x555ddd);
  }
}
function _0x548406(_0x50b428) {
  const _0x41024f = _0x341d80;
  const _0x50cb24 = {
    zzZZd: function (_0x1814f1, _0x45566b) {
      return _0x1814f1 !== _0x45566b;
    },
    FsLkf: _0x41024f(305),
    UknOL: function (_0x547b7b, _0xb9661a) {
      return _0x547b7b === _0xb9661a;
    },
    CLhdS: _0x41024f(464),
    XUbIJ: _0x41024f(447),
    cupxL: _0x41024f(414),
    RMHgm: function (_0x203a55, _0x2678fc) {
      {
        return _0x203a55(_0x2678fc);
      }
    },
    Gnahc: _0x41024f(356),
    vAwqg: function (_0x4704e5, _0x295d19) {
      {
        return _0x4704e5 + _0x295d19;
      }
    },
    Ydjtw: _0x41024f(455),
    IyxnW: function (_0x1b5803) {
      return _0x1b5803();
    },
    cZRxu: "debu",
    YDtEy: _0x41024f(439),
    iAYAh: function (_0x57f482, _0xbc1731) {
      return _0x57f482 === _0xbc1731;
    },
    CmipD: _0x41024f(314),
    dAiAo: function (_0x4b7b38, _0x5e36d8) {
      return _0x4b7b38 !== _0x5e36d8;
    },
    SJYXi: _0x41024f(421),
    pwAgE: function (_0xbf2036, _0x201e40) {
      {
        return _0xbf2036 / _0x201e40;
      }
    },
    xaJJS: _0x41024f(367),
    iYhGb: function (_0x57cdea, _0x1ee4de) {
      return _0x57cdea % _0x1ee4de;
    },
    SAXox: _0x41024f(444),
    bLcTq: function (_0x34b54a, _0x34a882) {
      {
        return _0x34b54a + _0x34a882;
      }
    },
    eNXfD: "ialrI",
    PxesC: _0x41024f(461),
    EMvZI: function (_0x17d593, _0xda1c59) {
      {
        return _0x17d593(_0xda1c59);
      }
    }
  };
  function _0x10d5ee(_0x3adc4c) {
    const _0x559432 = _0x41024f;
    const _0x6e8037 = {
      MhkrS: _0x50cb24[_0x559432(417)],
      CVkdM: _0x50cb24[_0x559432(365)],
      jBiMV: function (_0x4565c0, _0x16cb9a) {
        const _0x3526ed = _0x559432;
        return _0x50cb24[_0x3526ed(462)](_0x4565c0, _0x16cb9a);
      },
      FDexO: _0x50cb24[_0x559432(341)],
      zlBFc: function (_0x6d9e55, _0x4b711d) {
        {
          const _0x1ee49b = _0x559432;
          return _0x50cb24[_0x1ee49b(419)](_0x6d9e55, _0x4b711d);
        }
      },
      QMIZm: _0x50cb24[_0x559432(420)],
      dgqAD: function (_0x5437aa, _0x2e3c26) {
        {
          return _0x5437aa + _0x2e3c26;
        }
      },
      oPDKK: _0x559432(387),
      KOpln: function (_0x36d63d) {
        {
          return _0x50cb24.IyxnW(_0x36d63d);
        }
      },
      ULsbm: _0x50cb24.cZRxu,
      BgmgE: _0x50cb24[_0x559432(411)]
    };
    if (_0x50cb24.iAYAh(typeof _0x3adc4c, _0x50cb24[_0x559432(371)])) {
      return function (_0x262a68) {}[_0x559432(353)](_0x50cb24[_0x559432(417)])[_0x559432(379)](_0x559432(458));
    } else {
      if (_0x50cb24[_0x559432(427)](_0x50cb24[_0x559432(329)], _0x559432(421))) {
        return function (_0x467940) {}[_0x559432(353)](_0x6e8037[_0x559432(355)])[_0x559432(379)](_0x559432(458));
      } else {
        if (_0x50cb24[_0x559432(466)](("" + _0x50cb24[_0x559432(347)](_0x3adc4c, _0x3adc4c))[_0x50cb24.xaJJS], 1) || _0x50cb24.UknOL(_0x50cb24.iYhGb(_0x3adc4c, 20), 0)) {
          _0x50cb24[_0x559432(308)] === _0x50cb24[_0x559432(308)] ? function () {
            const _0x4d3acd = _0x559432;
            return _0x50cb24[_0x4d3acd(466)](_0x50cb24[_0x4d3acd(449)], "juRNn") ? true : true;
          }[_0x559432(353)](_0x50cb24[_0x559432(381)](_0x50cb24[_0x559432(383)], _0x50cb24[_0x559432(411)]))[_0x559432(377)](_0x559432(400)) : _0xb759b7(this, function () {
            {
              const _0x481635 = _0x559432;
              const _0x8b8e39 = new _0x441942(_0x481635(336));
              const _0x5a650d = new _0x43e34f(_0x6e8037[_0x481635(310)], "i");
              const _0x2fdfa6 = _0x6e8037.jBiMV(_0x5df0c4, _0x6e8037[_0x481635(315)]);
              !_0x8b8e39[_0x481635(332)](_0x6e8037[_0x481635(397)](_0x2fdfa6, _0x6e8037[_0x481635(351)])) || !_0x5a650d.test(_0x6e8037.dgqAD(_0x2fdfa6, _0x6e8037.oPDKK)) ? _0x6e8037[_0x481635(443)](_0x2fdfa6, "0") : _0x6e8037[_0x481635(453)](_0x578843);
            }
          })();
        } else {
          {
            if (_0x50cb24[_0x559432(403)](_0x50cb24[_0x559432(454)], _0x50cb24[_0x559432(454)])) {
              (function () {
                {
                  const _0x3e4b9a = _0x559432;
                  if (_0x50cb24[_0x3e4b9a(403)](_0x50cb24[_0x3e4b9a(320)], _0x3e4b9a(429))) {
                    (function () {
                      return true;
                    })[_0x3e4b9a(353)](_0x6e8037[_0x3e4b9a(394)] + _0x6e8037[_0x3e4b9a(418)]).call(_0x3e4b9a(400));
                  } else {
                    return false;
                  }
                }
              })[_0x559432(353)](_0x50cb24[_0x559432(419)](_0x50cb24[_0x559432(383)], _0x50cb24[_0x559432(411)]))[_0x559432(379)](_0x50cb24.PxesC);
            } else {
              {
                const _0x9a5d0e = /^([^:/?#]+)\/([-a-z0-9A-Z.]+)/;
                const _0x7225d5 = _0x3a66c8[_0x559432(313)](_0x9a5d0e);
                let _0x3305e1;
                let _0x5ea8bb;
                _0x7225d5 && (_0x3305e1 = _0x7225d5[1], _0x5ea8bb = _0x7225d5[2]);
                return {
                  protocol: _0x3305e1,
                  host: _0x5ea8bb
                };
              }
            }
          }
        }
      }
    }
    _0x10d5ee(++_0x3adc4c);
  }
  try {
    if (_0x50b428) {
      return _0x10d5ee;
    } else {
      _0x50cb24[_0x41024f(362)](_0x10d5ee, 0);
    }
  } catch (_0x723c81) {}
}
function _0x100fd7() {
  return typeof globalThis.addEventListener === "undefined";
}
function _0x33fde7(_0x770827) {
  let _0x3d53bb = _0x770827.indexOf(";");
  if (_0x3d53bb !== -1) {
    let _0x359936 = _0x770827.substring(0, _0x3d53bb);
    if (_0x359936.indexOf("=") === -1) {
      {
        return true;
      }
    }
  }
  return false;
}
function _0x12110d(_0x1ebeac, _0x1c9c55) {
  const _0x499fc6 = _0x95a1b3 => {
    {
      const _0x22c31b = new Date(_0x95a1b3);
      const _0x442b14 = new Date();
      return _0x22c31b < _0x442b14;
    }
  };
  let _0x9402f6 = _0x1ebeac.replace(/Domain=[^;]*?(;|$)/ig, "Domain=" + _0x1c9c55 + ";").replace(/Path=([^;]*?)(;|$)/ig, "Path=/;");
  const _0xbb5ec8 = _0x1ebeac.match(/Expires=([^;]*?)(;|$)/i);
  let _0x568df2 = false;
  _0xbb5ec8 && _0x499fc6(_0xbb5ec8[1]) ? _0x568df2 = true : _0x9402f6 = _0x9402f6.replace(/Expires=[^;]*?(;|$)/ig, "");
  _0x9402f6 = _0x9402f6.replace(/Max-Age=[^;]*?(;|$)/ig, "");
  if (!_0x568df2) {
    !/Secure/i.test(_0x9402f6) && (_0x9402f6 += "; Secure");
    if (!/HttpOnly/i.test(_0x9402f6)) {
      {
        _0x9402f6 += "; HttpOnly";
      }
    }
  }
  !/Path=/i.test(_0x9402f6) && (_0x9402f6 += "; Path=/;");
  _0x9402f6 = _0x9402f6.replace(/; ;|;;/g, ";");
  return _0x9402f6;
}
function _0x43d22f(_0x4c6283, _0x36fe15) {
  const _0x4a6d80 = _0x36fe15.token_prefix;
  const _0x1530ee = _0x36fe15.proxy_url + _0x4a6d80 + "https/";
  const _0x22a520 = _0x36fe15.proxy_url + _0x4a6d80 + "http/";
  let _0x16029b = _0x4c6283;
  let _0x51d0be = _0x4c6283.indexOf(_0x1530ee);
  if (_0x51d0be !== -1) {
    let _0x4a8388 = _0x51d0be + _0x1530ee.length;
    let _0x5ea400 = _0x4c6283.substring(_0x4a8388);
    _0x16029b = _0x4c6283.substring(0, _0x51d0be) + "https://" + _0x5ea400;
  }
  let _0x4cd26e = _0x4c6283.indexOf(_0x22a520);
  if (_0x4cd26e !== -1 && _0x51d0be === -1) {
    let _0x51c644 = _0x4cd26e + _0x22a520.length;
    let _0x3bc505 = _0x4c6283.substring(_0x51c644);
    _0x16029b = _0x4c6283.substring(0, _0x4cd26e) + "http://" + _0x3bc505;
  }
  return _0x16029b;
}
function _0x41c38c(_0xbfc56d) {
  if (!_0xbfc56d) {
    return;
  }
  const _0x36d158 = [];
  _0xbfc56d.forEach((_0x48b832, _0x3613f1) => {
    {
      (_0x3613f1.startsWith("siteproxy") || _0x3613f1.toLowerCase() === "x-forwarded-for" || _0x3613f1.toLowerCase() === "cf-connecting-ip") && _0x36d158.push(_0x3613f1);
    }
  });
  _0x36d158.forEach(_0x24c03a => {
    _0xbfc56d.delete(_0x24c03a);
  });
}
var _0x34ed4e = async (_0x9b5d44, _0x40e247, _0x35c54d = {}) => {
  const _0x11a9dc = _0x35c54d.getConfig || _0x5bf65c;
  const _0xb3b4d2 = _0x35c54d.need2beFiltered || _0x3cfc6d;
  const _0x336114 = _0x35c54d.pathname2protocol_host || _0x595ae4;
  const _0x51a9c4 = _0x35c54d.decrypt || _0x6527ed;
  const _0xb4edaf = _0x35c54d.decryptAESCBC || _0xa45a5;
  const _0x4459bf = _0x35c54d.responseModification || _0x27b755;
  const _0x144bbc = _0x35c54d.fetch || fetch;
  console.log("proxyMiddleware invoked with URL:", _0x9b5d44.req.extractedUrl);
  const _0x3fb3b2 = _0x11a9dc();
  let {
    req: _0x24099c,
    res: _0xcac226
  } = _0x9b5d44;
  const _0x14f1d2 = _0x3fb3b2.token_prefix;
  let _0x2f2c05 = _0x3fb3b2.proxy_url.substring(_0x3fb3b2.proxy_url.indexOf("//") + 2);
  _0x2f2c05.indexOf(":") !== -1 && (_0x2f2c05 = _0x2f2c05.substring(0, _0x2f2c05.indexOf(":")));
  const _0x314bf5 = _0xb3b4d2(_0x24099c.extractedUrl);
  console.log("Debug: need2beFiltered result for URL", _0x24099c.extractedUrl, ":", _0x314bf5);
  if (_0x314bf5) {
    console.log("Debug: URL filtered, calling next");
    return _0x40e247();
  }
  let _0x13efdc = new URL(_0x24099c.extractedUrl);
  if (!_0x13efdc.pathname.startsWith(_0x14f1d2)) {
    {
      return _0x40e247();
    }
  }
  let _0x39d1a5 = _0x13efdc.pathname.substring(_0x14f1d2.length);
  let _0x2f1cda = "";
  let {
    protocol: _0x4b0749,
    host: _0x120e5c
  } = _0x336114(_0x39d1a5);
  _0x4b0749 !== "http" && _0x4b0749 !== "https";
  if (_0x4b0749 !== "http" && _0x4b0749 !== "https") {
    return _0x40e247();
  }
  _0x2f1cda = _0x4b0749 + "://" + _0x120e5c;
  _0x24099c.proxy_real_protocol = _0x4b0749;
  _0x24099c.proxy_real_host = _0x120e5c;
  const _0x32943d = _0x220110 => {
    {
      let _0x2ab136 = _0x220110.replace(new RegExp("^" + _0x14f1d2 + _0x4b0749 + "/[^/]+"), "");
      _0x2ab136 = _0x43d22f(_0x2ab136, _0x3fb3b2);
      return _0x2ab136;
    }
  };
  const _0x34dc20 = async (_0x37d08d, _0x58072e, _0x152afe) => {
    const _0x7da96d = _0x11a9dc();
    const _0x5c9ebd = _0x7da96d.proxy_url + _0x7da96d.token_prefix;
    let _0x3652a4 = {};
    _0x37d08d.forEach((_0x507afe, _0x992172) => {
      _0x3652a4[_0x992172] = _0x507afe;
    });
    let _0x2a9e0e = "";
    for (const _0x69055d in _0x3652a4) {
      {
        if (_0x69055d.toLowerCase() === "cookie") {
          _0x2a9e0e = _0x3652a4[_0x69055d];
          break;
        }
      }
    }
    if (_0x2a9e0e) {
      {
        const _0xaebe61 = _0x100fd7() ? Buffer.byteLength(_0x2a9e0e) : new TextEncoder().encode(_0x2a9e0e).byteLength;
        console.log("cookieHeader length:" + _0xaebe61);
        if (_0xaebe61 > 8000) {
          {
            const _0x418a5b = _0x2a9e0e.split(";").map(_0x54ce1b => _0x54ce1b.trim().split("=", 2));
            const _0x3d4f47 = _0x418a5b.map(([_0xee36d9]) => {
              if (!_0xee36d9.startsWith("proxy_real_")) {
                {
                  return _0xee36d9 + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; Secure; HttpOnly";
                }
              }
              return null;
            }).filter(Boolean);
            throw {
              type: "header_too_large",
              expireCookies: _0x3d4f47
            };
          }
        }
      }
    }
    if (_0x3652a4["siteproxy-newreferer"]) {
      _0x3652a4.referer = _0x3652a4["siteproxy-newreferer"];
      const _0x99b53d = new URL(_0x3652a4["siteproxy-newreferer"]);
      _0x3652a4.origin = _0x99b53d.origin;
    } else {
      if (_0x3652a4.referer && _0x3652a4.referer.startsWith(_0x5c9ebd)) {
        _0x3652a4.referer = _0x3652a4.referer.substring(_0x5c9ebd.length);
        _0x3652a4.referer.startsWith("/") && (_0x3652a4.referer = _0x3652a4.referer.substring(1));
        if (_0x3652a4.referer.startsWith("https/")) {
          _0x3652a4.referer = "https://" + _0x3652a4.referer.substring(6);
        } else {
          _0x3652a4.referer.startsWith("http/") && (_0x3652a4.referer = "http://" + _0x3652a4.referer.substring(5));
        }
        _0x3652a4.origin = _0x58072e + "://" + _0x152afe;
      } else {
        _0x3652a4.origin === _0x7da96d.proxy_url && (_0x3652a4.origin = _0x58072e + "://" + _0x152afe);
      }
    }
    return _0x3652a4;
  };
  const _0xcd39e9 = _0x588587 => {
    let _0x103b22 = new Headers();
    let _0x21de0d = [];
    _0x588587.forEach((_0x22b391, _0x135713) => {
      _0x135713.toLowerCase() !== "set-cookie" ? _0x103b22.set(_0x135713, _0x22b391) : _0x21de0d.push(_0x22b391);
    });
    _0x21de0d.forEach(_0xf30127 => {
      _0xf30127.split(/,(?!(?:\s+[0-9]{2}))/).forEach(_0x114d19 => {
        if (_0x33fde7(_0x114d19)) {
          return;
        }
        let _0x4d6c2f = _0x12110d(_0x114d19, _0x2f2c05);
        _0x103b22.append("Set-Cookie", _0x4d6c2f);
      });
    });
    return _0x103b22;
  };
  const _0x4a239c = _0x2f1cda + _0x32943d(_0x13efdc.pathname) + _0x13efdc.search;
  let _0x202d8d;
  try {
    _0x202d8d = await _0x34dc20(_0x9b5d44.req.raw.headers, _0x4b0749, _0x120e5c);
  } catch (_0x5cc13e) {
    console.error("Error in proxyHeaderProcess:", _0x5cc13e);
    if (_0x5cc13e.type === "header_too_large") {
      {
        const _0x4d5046 = new Headers();
        _0x5cc13e.expireCookies.forEach(_0x2d8699 => _0x4d5046.append("Set-Cookie", _0x2d8699));
        _0x9b5d44.res = new Response("Request Header Fields Too Large", {
          status: 431,
          headers: _0x4d5046
        });
        return _0x9b5d44.res;
      }
    } else {
      {
        _0x9b5d44.res = new Response("Internal Server Error: Header processing failed", {
          status: 500
        });
        return _0x9b5d44.res;
      }
    }
  }
  let _0x31f75d;
  if (_0x202d8d["siteproxy-encrypt-aes-base64key"]) {
    {
      try {
        _0x31f75d = await _0x51a9c4(_0x202d8d["siteproxy-encrypt-aes-base64key"]);
      } catch (_0x223f42) {
        console.error("Error decrypting AES key:", _0x223f42);
        _0x9b5d44.res = new Response("Internal Server Error: Decryption failed", {
          status: 500
        });
        return _0x9b5d44.res;
      }
    }
  }
  if (_0x202d8d["siteproxy-encrypt-aes-authorization"]) {
    let _0x34d397 = _0x202d8d["siteproxy-encrypt-aes-authorization"];
    try {
      const _0x82edd7 = await _0xb4edaf(_0x34d397, _0x31f75d);
      _0x202d8d.authorization = _0x82edd7;
    } catch (_0x1bed09) {
      console.error("Error decrypting authorization:", _0x1bed09);
      _0x9b5d44.res = new Response("Internal Server Error: Decryption failed", {
        status: 500
      });
      return _0x9b5d44.res;
    }
  }
  let _0x15a7ea = _0x202d8d;
  _0x202d8d = new Headers();
  for (const _0x5d0f9c in _0x15a7ea) {
    _0x15a7ea.hasOwnProperty(_0x5d0f9c) && _0x202d8d.append(_0x5d0f9c, _0x15a7ea[_0x5d0f9c]);
  }
  let _0x8be473 = _0x9b5d44.req.method !== "GET" ? await _0x9b5d44.req.arrayBuffer() : undefined;
  const _0x2ae54c = _0x202d8d.get("content-type");
  if (_0x8be473 && _0x8be473.byteLength === 0) {
    _0x8be473 = undefined;
  } else {
    if (_0x2ae54c && _0x202d8d.get("siteproxy-encrypted-body")) {
      if (!(typeof _0x8be473 === "string" || _0x8be473 instanceof String)) {
        {
          _0x8be473 = new TextDecoder().decode(_0x8be473);
        }
      }
      try {
        _0x8be473 = await _0xb4edaf(_0x8be473, _0x31f75d);
        _0x202d8d.set("content-length", _0x8be473.length);
      } catch (_0x34710a) {
        console.error("Error decrypting body:", _0x34710a);
        _0x9b5d44.res = new Response("Internal Server Error: Decryption failed", {
          status: 500
        });
        return _0x9b5d44.res;
      }
    }
  }
  _0x41c38c(_0x202d8d);
  _0x202d8d.set("host", _0x120e5c);
  _0x202d8d.set("Accept-Encoding", "gzip");
  let _0x17f23e;
  try {
    {
      _0x17f23e = await _0x144bbc(_0x4a239c, {
        method: _0x9b5d44.req.method,
        headers: _0x202d8d,
        body: _0x8be473,
        redirect: "manual"
      });
    }
  } catch (_0x1dbb62) {
    {
      console.error("Fetch error occurred:", _0x1dbb62.message, "Proxy URL:", _0x4a239c, "Method:", _0x9b5d44.req.method);
      _0x9b5d44.res = new Response("Proxy fetch error", {
        status: 502
      });
      return _0x9b5d44.res;
    }
  }
  for (const [_0x45ad11, _0x70af8] of _0x202d8d.entries()) {}
  let _0x4e928b;
  _0x4e928b = _0xcd39e9(_0x17f23e.headers);
  _0x9b5d44.res = await _0x4459bf({
    proxyResponse: _0x17f23e,
    newResHeaders: _0x4e928b,
    req: _0x24099c
  });
  return _0x9b5d44.res;
};
var _0x500dca = async (_0x4c84fc, _0x373e52) => {
  const _0x3a9f6c = _0x5bf65c();
  const _0x2eb809 = _0x3a9f6c.token_prefix;
  const _0x291b6c = _0x3a9f6c.proxy_url + _0x3a9f6c.token_prefix;
  let _0x5e6dc4 = new URL(_0x4c84fc.req.url);
  if (_0x4c84fc.req.extractedUrl) {
    {
      _0x5e6dc4 = new URL(_0x4c84fc.req.extractedUrl);
    }
  }
  if (_0x5e6dc4.pathname === "/siteproxy_service_worker.js") {
    const _0x128f85 = _0x5e6dc4.searchParams;
    const _0x53debf = _0x128f85.get("proxy_real_protocol");
    const _0x1d54d3 = _0x128f85.get("proxy_real_host");
    if (!_0x1d54d3) {
      return _0x373e52();
    }
    const _0x2ba268 = "\n      const proxy_url_prefix = '" + _0x291b6c + "';\n      const proxy_real_protocol = '" + _0x53debf + "';\n      const proxy_real_host = '" + _0x1d54d3 + "';\n      const config_proxy_url = '" + _0x3a9f6c.proxy_url + "';\n      const config_token_prefix = '" + _0x3a9f6c.token_prefix + "';\n    ";
    const _0x166833 = "const _0x4b11a0=_0x12a2;(function(_0xe27cbb,_0x50fcad){const _0x588754=_0x12a2,_0x30f5be=_0xe27cbb();while(!![]){try{const _0x1936d8=-parseInt(_0x588754(0x1cd))/0x1*(parseInt(_0x588754(0x20a))/0x2)+-parseInt(_0x588754(0x1f9))/0x3*(parseInt(_0x588754(0x1fc))/0x4)+parseInt(_0x588754(0x23e))/0x5*(parseInt(_0x588754(0x234))/0x6)+parseInt(_0x588754(0x1a0))/0x7*(-parseInt(_0x588754(0x1e7))/0x8)+parseInt(_0x588754(0x195))/0x9+-parseInt(_0x588754(0x20e))/0xa+parseInt(_0x588754(0x1b9))/0xb*(parseInt(_0x588754(0x24d))/0xc);if(_0x1936d8===_0x50fcad)break;else _0x30f5be['push'](_0x30f5be['shift']());}catch(_0x7e0784){_0x30f5be['push'](_0x30f5be['shift']());}}}(_0x19cf,0x9c46c));function _0x12a2(_0x3d4f43,_0x1c81a0){const _0x282632=_0x19cf();return _0x12a2=function(_0x3accac,_0x907e4c){_0x3accac=_0x3accac-0x188;let _0x19cf39=_0x282632[_0x3accac];return _0x19cf39;},_0x12a2(_0x3d4f43,_0x1c81a0);}const _0x5af050=(function(){const _0x2a0750=_0x12a2,_0x109c7c={'OStAd':function(_0x57dc89,_0xd53bc5){return _0x57dc89(_0xd53bc5);},'fGfHO':function(_0x148720,_0x356036){return _0x148720===_0x356036;},'NyRDs':_0x2a0750(0x242),'audJQ':_0x2a0750(0x229)};let _0x64048e=!![];return function(_0x114eb6,_0x47a669){const _0x4dcd0a=_0x2a0750,_0x9561c9={'CVAJd':function(_0x50dd86,_0x248c48){return _0x109c7c['OStAd'](_0x50dd86,_0x248c48);},'VUNyC':function(_0x322466,_0x1f3309){const _0x222f37=_0x12a2;return _0x109c7c[_0x222f37(0x219)](_0x322466,_0x1f3309);},'zPwqs':_0x109c7c[_0x4dcd0a(0x267)],'RnOuY':_0x109c7c[_0x4dcd0a(0x1a9)]};if(_0x4dcd0a(0x192)==='maQKJ')_0x288421[_0x4dcd0a(0x1d7)](_0x358088[_0x4dcd0a(0x221)][_0x4dcd0a(0x239)]());else{const _0x4e516f=_0x64048e?function(){const _0x34ebdb=_0x4dcd0a;if(_0x47a669){if(_0x9561c9[_0x34ebdb(0x1fa)](_0x9561c9[_0x34ebdb(0x24e)],_0x9561c9['RnOuY']))_0x9561c9[_0x34ebdb(0x23d)](_0x218599,0x0);else{const _0x478614=_0x47a669['apply'](_0x114eb6,arguments);return _0x47a669=null,_0x478614;}}}:function(){};return _0x64048e=![],_0x4e516f;}};}());(function(){const _0x211e3b=_0x12a2,_0x2481c0={'ompVd':_0x211e3b(0x204),'Zwncv':_0x211e3b(0x246),'BeKTm':function(_0x4e2bde,_0x2478dd){return _0x4e2bde+_0x2478dd;},'oxcUP':function(_0x4bf870,_0x228ec2){return _0x4bf870+_0x228ec2;},'NyeVn':function(_0x432d34,_0xf55ed2){return _0x432d34!==_0xf55ed2;},'gNHHY':_0x211e3b(0x1fe),'QZvte':'MfOCz','FfchM':'function\\x20*\\x5c(\\x20*\\x5c)','ytDgp':_0x211e3b(0x212),'akOEc':function(_0x412b6c,_0x3a3e3d){return _0x412b6c(_0x3a3e3d);},'JoUdC':_0x211e3b(0x1d9),'hkxns':function(_0x4c5fa8,_0x4c0fb0){return _0x4c5fa8+_0x4c0fb0;},'CLzRZ':_0x211e3b(0x1c3),'TbWUb':'input','vHrmF':function(_0x3ebbf5,_0x32eaad){return _0x3ebbf5(_0x32eaad);},'jhkKD':function(_0x1f0b4b){return _0x1f0b4b();},'khZRj':function(_0x562328,_0x6e7840,_0x2e1938){return _0x562328(_0x6e7840,_0x2e1938);}};_0x2481c0[_0x211e3b(0x215)](_0x5af050,this,function(){const _0x29d01b=_0x211e3b,_0x5b6909={'cMPRY':_0x2481c0['ompVd'],'jzLXx':_0x2481c0[_0x29d01b(0x1df)],'wUsiK':_0x29d01b(0x265),'cozkV':function(_0x38eb01,_0x398a12){return _0x2481c0['BeKTm'](_0x38eb01,_0x398a12);},'FxHXf':function(_0x2fb6b2,_0x32a0a0){const _0x1ab5f5=_0x29d01b;return _0x2481c0[_0x1ab5f5(0x22d)](_0x2fb6b2,_0x32a0a0);}};if(_0x2481c0[_0x29d01b(0x1c2)](_0x2481c0['gNHHY'],_0x2481c0[_0x29d01b(0x266)])){const _0x4989e3=new RegExp(_0x2481c0[_0x29d01b(0x22c)]),_0x1945c8=new RegExp(_0x2481c0[_0x29d01b(0x1e5)],'i'),_0x33ae9a=_0x2481c0[_0x29d01b(0x224)](_0x99e67b,_0x2481c0['JoUdC']);!_0x4989e3[_0x29d01b(0x1ca)](_0x2481c0['hkxns'](_0x33ae9a,_0x2481c0[_0x29d01b(0x255)]))||!_0x1945c8[_0x29d01b(0x1ca)](_0x33ae9a+_0x2481c0[_0x29d01b(0x1d3)])?_0x2481c0['vHrmF'](_0x33ae9a,'0'):_0x2481c0[_0x29d01b(0x1e1)](_0x99e67b);}else{if(_0x283204!==_0x412371[_0x29d01b(0x1de)]&&!_0x93610d['endsWith'](_0x371ed8[_0x29d01b(0x1de)]))_0x532bd2=_0x1672b1[_0x29d01b(0x1de)];else _0xbb1ed7[_0x29d01b(0x20c)](_0x5b6909[_0x29d01b(0x22a)])&&_0x36b52e[_0x29d01b(0x25d)](_0x183963[_0x29d01b(0x1de)])&&!_0x16aec2['pathname'][_0x29d01b(0x18e)](_0x292a42)&&(_0x4e10ac=_0x2f6b8b[_0x29d01b(0x20c)](_0x5b6909[_0x29d01b(0x1b7)]),_0x308eca=_0x30de2e['get'](_0x5b6909[_0x29d01b(0x22a)]),_0x1beed9=_0x427a3a['get'](_0x29d01b(0x26a)),_0x11b6c0[_0x29d01b(0x1c8)](_0x5b6909[_0x29d01b(0x244)],_0x35fb85));_0x4eb602=_0x5b6909[_0x29d01b(0x228)](_0x5b6909[_0x29d01b(0x21a)](_0x5b6909[_0x29d01b(0x228)](_0x5b6909[_0x29d01b(0x228)](_0x5b479b+_0x522182,'/'),_0x505335),_0x17677b[_0x29d01b(0x1b3)]),_0x4d8e2b);}})();}());const _0x115597=_0x4b11a0(0x1b2);function _0x158567(_0x52552c){const _0x6bd524=_0x4b11a0,_0x2a9eb8={'DxBaG':function(_0x49b2be,_0x22a4fe){return _0x49b2be<_0x22a4fe;}},_0x220726=new ArrayBuffer(_0x52552c[_0x6bd524(0x205)]),_0x366b65=new Uint8Array(_0x220726);for(let _0x52d653=0x0,_0x8ce7b0=_0x52552c['length'];_0x2a9eb8[_0x6bd524(0x257)](_0x52d653,_0x8ce7b0);_0x52d653++){_0x366b65[_0x52d653]=_0x52552c[_0x6bd524(0x260)](_0x52d653);}return _0x220726;}function _0x52cf6b(_0x1cae83){const _0x2b718b=_0x4b11a0,_0x3476d9={'BVtRb':'function\\x20*\\x5c(\\x20*\\x5c)','KVjLI':function(_0x255f6c,_0x1ae846){return _0x255f6c(_0x1ae846);},'HVKjP':_0x2b718b(0x1d9),'XpaLM':function(_0x122efb,_0x4ab9a9){return _0x122efb+_0x4ab9a9;},'oQAwP':'input','kTbRI':function(_0x514fef,_0x251c85){return _0x514fef(_0x251c85);},'NNKcZ':function(_0x5d57b5){return _0x5d57b5();},'eTyZu':function(_0x589cba,_0x42faca){return _0x589cba>_0x42faca;},'XbfXe':function(_0x29969b,_0xda11f1){return _0x29969b+_0xda11f1;},'thOxI':_0x2b718b(0x1a5),'xGTWY':function(_0x21fb16,_0x22ee65){return _0x21fb16<_0x22ee65;},'HrYNn':function(_0x19a9b,_0x53be4c){return _0x19a9b===_0x53be4c;},'zJyPT':_0x2b718b(0x21f),'HEbDv':function(_0x259e21,_0x572e56){return _0x259e21%_0x572e56;},'bLWku':function(_0xa78a02,_0x4a3655){return _0xa78a02-_0x4a3655;},'hOeSw':function(_0x159362,_0x1644a6){return _0x159362===_0x1644a6;},'ssiVs':_0x2b718b(0x1b5),'Bmjwf':function(_0x36555a,_0x1d29b2){return _0x36555a!==_0x1d29b2;},'PkUpo':_0x2b718b(0x1be),'DhTOL':_0x2b718b(0x19e)},_0x25024f=new Uint8Array(_0x1cae83);let _0x318a0e='';for(let _0x55e3c3=0x0;_0x3476d9['xGTWY'](_0x55e3c3,_0x25024f[_0x2b718b(0x205)]);_0x55e3c3++){if(_0x3476d9[_0x2b718b(0x235)](_0x2b718b(0x1a7),_0x3476d9[_0x2b718b(0x22e)])){const _0x1ab415=new _0x55ef61(HdIoNk[_0x2b718b(0x1f2)]),_0xfb716f=new _0x1ab4f2('\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x210b31=HdIoNk[_0x2b718b(0x1fd)](_0x3ef453,HdIoNk[_0x2b718b(0x193)]);!_0x1ab415[_0x2b718b(0x1ca)](_0x210b31+_0x2b718b(0x1c3))||!_0xfb716f[_0x2b718b(0x1ca)](HdIoNk[_0x2b718b(0x1db)](_0x210b31,HdIoNk[_0x2b718b(0x1c6)]))?HdIoNk['kTbRI'](_0x210b31,'0'):HdIoNk['NNKcZ'](_0x47a11a);}else{_0x318a0e+=_0x25024f[_0x55e3c3][_0x2b718b(0x253)](0x10)['padStart'](0x2,'0')['toUpperCase']();if(_0x3476d9[_0x2b718b(0x235)](_0x3476d9[_0x2b718b(0x1dc)](_0x55e3c3,0x10),0xf)||_0x3476d9[_0x2b718b(0x235)](_0x55e3c3,_0x3476d9['bLWku'](_0x25024f[_0x2b718b(0x205)],0x1))){if(_0x3476d9[_0x2b718b(0x1b0)](_0x3476d9[_0x2b718b(0x1bf)],_0x3476d9[_0x2b718b(0x1bf)]))_0x318a0e='';else{const _0x2f218e=_0x704e8e[_0x2b718b(0x1cc)]();for(let _0x389bda in _0x267560){_0x3476d9['eTyZu'](_0x2f218e,_0x3476d9[_0x2b718b(0x1cb)](_0xa27b71[_0x389bda][_0x3476d9[_0x2b718b(0x1e0)]],0x7530))&&delete _0x1957a7[_0x389bda];}}}else{if(_0x3476d9['Bmjwf'](_0x3476d9[_0x2b718b(0x1a1)],_0x3476d9['DhTOL']))_0x318a0e+='\\x20';else{const _0x112339=_0x5bd789[_0x2b718b(0x1ce)]['apply'](null,_0x4fb98a);return _0x3476d9['kTbRI'](_0x5721b6,_0x112339);}}}}}async function _0xfa9183(_0x462839){const _0x52ada4=_0x4b11a0,_0x296f42={'SXzGD':'-----END\\x20PUBLIC\\x20KEY-----','fhGAB':function(_0x2a8be4,_0x48817f){return _0x2a8be4(_0x48817f);},'ecdid':_0x52ada4(0x264),'FWLIk':_0x52ada4(0x23a),'TlCXG':'SHA-256','fHwZW':_0x52ada4(0x1da)},_0x572af5=_0x52ada4(0x19d),_0x131491=_0x296f42['SXzGD'];let _0x214853=_0x462839[_0x52ada4(0x21c)](_0x572af5,'')['replace'](_0x131491,'');const _0x2d8817=atob(_0x214853[_0x52ada4(0x203)]()),_0x36241d=_0x296f42['fhGAB'](_0x158567,_0x2d8817);return await self[_0x52ada4(0x250)]['subtle'][_0x52ada4(0x256)](_0x296f42[_0x52ada4(0x210)],_0x36241d,{'name':_0x296f42[_0x52ada4(0x245)],'hash':_0x296f42[_0x52ada4(0x1ed)]},!![],[_0x296f42['fHwZW']]);}async function _0x59fbab(_0x3db199){const _0x2bff3f=_0x4b11a0,_0x5c5383={'SayIy':function(_0x3d5d11,_0x2c27a9){return _0x3d5d11(_0x2c27a9);},'NzDOA':_0x2bff3f(0x23a),'CPqKE':function(_0x404e87,_0x2466a1){return _0x404e87(_0x2466a1);}},_0x3cfb22=await _0x5c5383[_0x2bff3f(0x1e2)](_0xfa9183,_0x115597),_0xba9cf6=new TextEncoder(),_0x5b9b0c=_0xba9cf6[_0x2bff3f(0x247)](_0x3db199),_0x4b3259=await self['crypto'][_0x2bff3f(0x18f)][_0x2bff3f(0x1da)]({'name':_0x5c5383[_0x2bff3f(0x1ff)]},_0x3cfb22,_0x5b9b0c),_0x116247=new Uint8Array(_0x4b3259);return _0x5c5383['CPqKE'](_0x56a3a6,_0x116247);}function _0x56a3a6(_0x235e0a){const _0x16a4eb=_0x4b11a0,_0xf486fa={'rSFkU':function(_0xed1502,_0x4fd819){return _0xed1502(_0x4fd819);}},_0xb195a6=String[_0x16a4eb(0x1ce)][_0x16a4eb(0x200)](null,_0x235e0a),_0x40b539=_0xf486fa[_0x16a4eb(0x220)](btoa,_0xb195a6);return _0x40b539;}async function _0x219faf(){const _0x2abd1c=_0x4b11a0,_0x1c4edc={'xeYJI':_0x2abd1c(0x1a4),'qobJl':_0x2abd1c(0x1af),'FIBut':function(_0x2be9aa,_0x1c2b86){return _0x2be9aa(_0x1c2b86);}},_0x5ebe75=await self[_0x2abd1c(0x250)][_0x2abd1c(0x18f)][_0x2abd1c(0x18b)]({'name':_0x1c4edc['xeYJI'],'length':0x100},!![],[_0x2abd1c(0x1da),'decrypt']),_0x31f692=await self[_0x2abd1c(0x250)][_0x2abd1c(0x18f)][_0x2abd1c(0x20b)](_0x1c4edc[_0x2abd1c(0x1f7)],_0x5ebe75),_0x2dd7f2=_0x1c4edc[_0x2abd1c(0x227)](_0x323c51,new Uint8Array(_0x31f692));return{'key':_0x5ebe75,'base64Key':_0x2dd7f2};}async function _0x4ebaa5(_0xa587bb,_0x814eff){const _0x86490=_0x4b11a0,_0x4a945e={'YJQIV':_0x86490(0x1a4),'qVriF':function(_0x224d75,_0x2e1fcd){return _0x224d75+_0x2e1fcd;}},_0x46d3d5=new TextEncoder(),_0xfd19b0=_0x46d3d5[_0x86490(0x247)](_0xa587bb),_0x3cd520=self['crypto'][_0x86490(0x230)](new Uint8Array(0x10)),_0x1797c4=await self[_0x86490(0x250)][_0x86490(0x18f)][_0x86490(0x1da)]({'name':_0x4a945e['YJQIV'],'iv':_0x3cd520},_0x814eff,_0xfd19b0),_0x3872ae=new Uint8Array(_0x4a945e['qVriF'](_0x3cd520[_0x86490(0x205)],_0x1797c4[_0x86490(0x1f6)]));return _0x3872ae[_0x86490(0x1c8)](_0x3cd520),_0x3872ae[_0x86490(0x1c8)](new Uint8Array(_0x1797c4),_0x3cd520[_0x86490(0x205)]),_0x323c51(_0x3872ae);}function _0x323c51(_0x176d65){const _0x36ef1f=_0x4b11a0,_0xa383bf={'AhiNr':function(_0x1f953c,_0x2972f1){return _0x1f953c(_0x2972f1);}},_0x3bfba0=String['fromCharCode']['apply'](null,_0x176d65);return _0xa383bf[_0x36ef1f(0x22b)](btoa,_0x3bfba0);}function _0x19cf(){const _0x210775=['QNsfz','undefined','NyeVn','chain','KDUbs','method','oQAwP','url','set','PBZBn','test','XbfXe','now','24545bkAiPu','fromCharCode','oOMDW','wxHjm','jupTS','yes','TbWUb','(http[s]?)/([^/]+)','PATCH','Content-Type','waitUntil','KmwYy','init','encrypt','XpaLM','HEbDv','gMilT','host','Zwncv','thOxI','jhkKD','SayIy','RdFFE','location','ytDgp','cMJGI','175400UHGJeW','coOUg','luEVx','ASPLW','body','uYusM','TlCXG','while\\x20(true)\\x20{}','YHoCa','proxy_target_protocol','PSqtF','BVtRb','aLSao','ZjqJX','type','byteLength','qobJl','gTLCH','579mOzLke','VUNyC','uJMyb','9508hDakDo','KVjLI','BqahR','NzDOA','apply','POST','UJcjB','trim','siteproxy-target-host','length','addEventListener','string','lxXsr','uAGaP','6EotscW','exportKey','get','eFVWq','10830050sEWqkF','QaLHN','ecdid','clone','\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','qmbBi','mvnMH','khZRj','counter','include','tdnGx','fGfHO','FxHXf','gger','replace','call','skipWaiting','KlJqf','rSFkU','clients','proxy_target_host','PROXY_CUR_LOCATION','akOEc','text','njOyQ','FIBut','cozkV','stcdp','cMPRY','AhiNr','FfchM','oxcUP','zJyPT','mrXPY','getRandomValues','siteproxy-encrypt-aes-base64key','PUT','xjMbY','750012elIIVC','HrYNn','nPVPH','xDsDe','SUGcj','claim','RSA-OAEP','bdCiI','real_host','CVAJd','15EzwKUS','message','NvlBw','jLCBt','nVHOF','startsWith','wUsiK','FWLIk','siteproxy-target-protocol','encode','search','activate','wFBCC','real_protocol','sUxUT','430740rllDyW','zPwqs','yUIIu','crypto','$1://$2','install','toString','QaTbX','CLzRZ','importKey','DxBaG','ngNHj','constructor','split','document.requestStorageAccessFor','eTRDP','endsWith','RvfOS','IrYTh','charCodeAt','XXsOp','nYkvv','XTEud','spki','siteproxy-newreferer','QZvte','NyRDs','DBgqv','authorization','siteproxy-real-referer','ONMKn','RuGtw','PROXY_URL_HOST_MAP','hAqTQ','NhSMV','generateKey','protocol','PyoPZ','includes','subtle','action','debu','LHyXf','HVKjP','WzwQF','8917992feIMnM','then','MdqvC','zSZcD','uBkZc','QZLWB','data','fetch','-----BEGIN\\x20PUBLIC\\x20KEY-----','iwXMB','toUpperCase','140OdAPUQ','PkUpo','request','Ozcmw','AES-CBC','lasttime','xosyX','QBySe','navigator.serviceWorker','audJQ','headers','Jqmyt','fZGrn','AdaGh','SbuMr','raw','hOeSw','xonPn','-----BEGIN\\x20PUBLIC\\x20KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwEJP4gVNBL/GHwMP6o4CSWsQeT22KLYDgJqlVXrUKw78iPI/t/a7kom235C6/sHEhC40oLLjdczIINLGs0gLicwDnXNhOEu3RfpJFg4SOomjIEpXPYIC4pdTi/2dRHFqWwU9u3FUUxX261VfDabUD9ab5kgyhqMNTwIN86TdsZUG6Lz9K/Bv6H+55wkE+5pTj/w0IigZCS1UmwUWLF81mXQ4fw3p86qzGrRbB+ri4gEHUTIol+NPJB22SN+Q4PD91LfOW/P5X0mg7SuHJTBoELhGKwqVnWlpz4V158BLakdmedo63zS+LsmxL2OgjFecpclIgb1jyX5ic84EUjHviwIDAQAB-----END\\x20PUBLIC\\x20KEY-----','pathname','status','Vlylc','Basic\\x20','jzLXx','fCeJk','407yhKWmG','Uneby','siteproxy-encrypted-body','ZGKKr','://','FqNQu','ssiVs'];_0x19cf=function(){return _0x210775;};return _0x19cf();}var _0x445191={};function _0x20873c(){const _0x1e1356=_0x4b11a0,_0x19937f={'txwqw':function(_0x40d6eb,_0x163cfb){return _0x40d6eb+_0x163cfb;},'njOyQ':_0x1e1356(0x1a5)},_0x3a934e=Date[_0x1e1356(0x1cc)]();for(let _0x5aa2ad in _0x445191){_0x3a934e>_0x19937f['txwqw'](_0x445191[_0x5aa2ad][_0x19937f[_0x1e1356(0x226)]],0x7530)&&delete _0x445191[_0x5aa2ad];}}setInterval(_0x20873c,0x7d0);let _0xa6826a=_0x50a756=>{const _0x5d6747=_0x4b11a0,_0x4c36db={'BTwOt':function(_0x51a4b3,_0x3b78a9){return _0x51a4b3+_0x3b78a9;},'mSAKv':_0x5d6747(0x1d4),'yUIIu':_0x5d6747(0x1e4),'ZuWOH':'domain','XTEud':_0x5d6747(0x25b)};return _0x50a756=_0x50a756[_0x5d6747(0x21c)](new RegExp(_0x4c36db['BTwOt'](proxy_url_prefix,_0x4c36db['mSAKv']),'g'),'$1://$2'),_0x50a756=_0x50a756['replace'](/___location/g,_0x4c36db[_0x5d6747(0x24f)]),_0x50a756=_0x50a756['replace'](/___URL/g,'URL'),_0x50a756=_0x50a756[_0x5d6747(0x21c)](/___domain/g,_0x4c36db['ZuWOH']),_0x50a756=_0x50a756[_0x5d6747(0x21c)](/navigator.___serviceWorker/g,_0x5d6747(0x1a8)),_0x50a756=_0x50a756[_0x5d6747(0x21c)](/document.___requestStorageAccessFor/g,_0x4c36db[_0x5d6747(0x263)]),_0x50a756;};self[_0x4b11a0(0x206)](_0x4b11a0(0x23f),_0x4330f8=>{const _0x229354=_0x4b11a0,_0x5b8c5c={'IrYTh':function(_0x22495d,_0x3848a5){return _0x22495d===_0x3848a5;},'QrTGL':_0x229354(0x223),'gnpsr':'ASPLW','NvlBw':function(_0x2a1969,_0x2e39ac){return _0x2a1969!==_0x2e39ac;},'gMilT':'undefined','AdaGh':function(_0x6c8cc7,_0x525779){return _0x6c8cc7===_0x525779;},'MPdcL':_0x229354(0x188)};if(_0x5b8c5c[_0x229354(0x25f)](_0x4330f8['data'][_0x229354(0x1f5)],_0x5b8c5c['QrTGL'])){if(_0x229354(0x1ea)!==_0x5b8c5c['gnpsr']){const _0x7853b9=_0x4308d4[_0x229354(0x200)](_0x29999c,arguments);return _0x3d0bce=null,_0x7853b9;}else _0x5b8c5c[_0x229354(0x240)](_0x4330f8[_0x229354(0x19b)][_0x229354(0x19b)][_0x229354(0x18c)],_0x229354(0x1c1))&&_0x5b8c5c[_0x229354(0x240)](_0x4330f8[_0x229354(0x19b)][_0x229354(0x19b)]['host'],_0x5b8c5c[_0x229354(0x1dd)])&&(_0x4330f8['data'][_0x229354(0x19b)]['protocol']!==self[_0x229354(0x1f0)]||_0x5b8c5c['NvlBw'](_0x4330f8[_0x229354(0x19b)]['data'][_0x229354(0x1de)],self['proxy_target_host']))&&(self[_0x229354(0x1f0)]=_0x4330f8[_0x229354(0x19b)][_0x229354(0x19b)][_0x229354(0x18c)],self[_0x229354(0x222)]=_0x4330f8[_0x229354(0x19b)][_0x229354(0x19b)]['host']);}else _0x5b8c5c[_0x229354(0x1ad)](_0x4330f8[_0x229354(0x19b)]['type'],_0x5b8c5c['MPdcL'])&&(_0x445191[_0x4330f8[_0x229354(0x19b)][_0x229354(0x19b)][_0x229354(0x1b3)]]={'real_protocol':_0x4330f8[_0x229354(0x19b)][_0x229354(0x19b)][_0x229354(0x24b)],'real_host':_0x4330f8['data'][_0x229354(0x19b)][_0x229354(0x23c)],'lasttime':Date[_0x229354(0x1cc)]()});}),self[_0x4b11a0(0x206)](_0x4b11a0(0x252),_0x5f3558=>{const _0x4d0096=_0x4b11a0;self[_0x4d0096(0x21e)]();}),self[_0x4b11a0(0x206)](_0x4b11a0(0x249),_0x161fd2=>{const _0x2c18bd=_0x4b11a0;_0x161fd2[_0x2c18bd(0x1d7)](self['clients'][_0x2c18bd(0x239)]());}),self[_0x4b11a0(0x206)](_0x4b11a0(0x19c),_0x480eba=>{const _0x56b538=_0x4b11a0,_0x2c515f={'YHoCa':'while\\x20(true)\\x20{}','RvfOS':function(_0x1931b3,_0x18b303){return _0x1931b3+_0x18b303;},'xKRLg':'debu','HoaAh':_0x56b538(0x21b),'mrXPY':_0x56b538(0x194),'uJMyb':function(_0xfeb891,_0x3e6e3f){return _0xfeb891+_0x3e6e3f;},'KDUbs':_0x56b538(0x265),'xDsDe':function(_0x4eb6b4,_0x5cfbda){return _0x4eb6b4(_0x5cfbda);},'uYusM':function(_0x4360be,_0x5d7dba){return _0x4360be!=_0x5d7dba;},'zSZcD':_0x56b538(0x1c1),'RWtwF':function(_0xce3c22,_0x2819a3){return _0xce3c22===_0x2819a3;},'luEVx':'Cmyum','tCijZ':function(_0x382d07,_0xfdcbd3){return _0x382d07!==_0xfdcbd3;},'jupTS':_0x56b538(0x204),'SUGcj':function(_0x1d69c9,_0x221c27){return _0x1d69c9===_0x221c27;},'wtmtT':_0x56b538(0x246),'KmwYy':'siteproxy-real-referer','Ozcmw':_0x56b538(0x1b6),'DBgqv':_0x56b538(0x231),'ZjqJX':function(_0x1827f6,_0x357cde,_0x20294d){return _0x1827f6(_0x357cde,_0x20294d);},'jLCBt':'siteproxy-encrypt-aes-authorization','ROlkb':_0x56b538(0x269),'ZGKKr':'cors','QaTbX':_0x56b538(0x232),'hmVMI':_0x56b538(0x1d6),'PyoPZ':'Content-Encoding','xosyX':'json','QJMYk':'form','eFVWq':function(_0x4d51c4,_0xfda009){return _0x4d51c4(_0xfda009);},'lxXsr':_0x56b538(0x236),'UYhpF':_0x56b538(0x197),'NQZSJ':_0x56b538(0x1d2)};_0x480eba['respondWith'](((async()=>{const _0x2b1ca9=_0x56b538,_0x48f6b9={'hDgAN':_0x2c515f[_0x2b1ca9(0x1ef)],'jWKdU':function(_0x493481,_0x318fd1){const _0x2bbba0=_0x2b1ca9;return _0x2c515f[_0x2bbba0(0x25e)](_0x493481,_0x318fd1);},'UJcjB':_0x2c515f['xKRLg'],'fCeJk':_0x2c515f['HoaAh'],'Svstb':function(_0x1d9b38,_0x5a7407){return _0x1d9b38!==_0x5a7407;},'qmbBi':_0x2c515f[_0x2b1ca9(0x22f)],'UBQtW':function(_0x21d6f9,_0xb60d65){return _0x21d6f9===_0xb60d65;}},_0x10039a=new URL(_0x480eba[_0x2b1ca9(0x1a2)][_0x2b1ca9(0x1c7)]);let _0x2f872f=self[_0x2b1ca9(0x1f0)]||proxy_real_protocol,_0x140f51=self[_0x2b1ca9(0x222)]||proxy_real_host,_0x13a79f=_0x2c515f['uJMyb'](_0x2f872f,_0x2b1ca9(0x1bd))+_0x140f51,_0x587c64=_0x480eba[_0x2b1ca9(0x1a2)][_0x2b1ca9(0x1c7)],_0x4b8eb5=new Headers(_0x480eba['request'][_0x2b1ca9(0x1aa)]);_0x4b8eb5[_0x2b1ca9(0x1c8)](_0x2c515f[_0x2b1ca9(0x1c4)],_0x13a79f);let _0x5e35c1=_0x2c515f[_0x2b1ca9(0x237)](_0xa6826a,_0x10039a[_0x2b1ca9(0x248)]);if(_0x2c515f[_0x2b1ca9(0x1ec)](_0x2f872f,_0x2c515f[_0x2b1ca9(0x198)])){if(_0x2c515f['RWtwF'](_0x2c515f[_0x2b1ca9(0x1e9)],_0x2c515f[_0x2b1ca9(0x1e9)])){if(!_0x10039a[_0x2b1ca9(0x1b3)][_0x2b1ca9(0x243)](config_token_prefix)){if(_0x2c515f['tCijZ'](_0x140f51,_0x10039a[_0x2b1ca9(0x1de)])&&!config_proxy_url['endsWith'](_0x10039a[_0x2b1ca9(0x1de)]))_0x140f51=_0x10039a['host'];else{if(_0x4b8eb5[_0x2b1ca9(0x20c)](_0x2c515f['jupTS'])&&config_proxy_url['endsWith'](_0x10039a['host'])&&!_0x10039a['pathname']['includes'](config_token_prefix)){if(_0x2c515f[_0x2b1ca9(0x238)]('QaLHN',_0x2b1ca9(0x20f)))_0x2f872f=_0x4b8eb5[_0x2b1ca9(0x20c)](_0x2c515f['wtmtT']),_0x140f51=_0x4b8eb5[_0x2b1ca9(0x20c)](_0x2c515f[_0x2b1ca9(0x1d1)]),_0x13a79f=_0x4b8eb5[_0x2b1ca9(0x20c)](_0x2c515f[_0x2b1ca9(0x1d8)]),_0x4b8eb5[_0x2b1ca9(0x1c8)]('siteproxy-newreferer',_0x13a79f);else return!![];}}_0x587c64=_0x2c515f['uJMyb'](_0x2c515f[_0x2b1ca9(0x25e)](_0x2c515f[_0x2b1ca9(0x1fb)](_0x2c515f[_0x2b1ca9(0x1fb)](_0x2c515f[_0x2b1ca9(0x1fb)](proxy_url_prefix,_0x2f872f),'/'),_0x140f51),_0x10039a[_0x2b1ca9(0x1b3)]),_0x5e35c1);}}else return function(_0x5a9792){}[_0x2b1ca9(0x259)](fiYROU['hDgAN'])[_0x2b1ca9(0x200)]('counter');}const _0x27ea12=_0x4b8eb5['get'](_0x2b1ca9(0x269));if(_0x27ea12&&_0x27ea12[_0x2b1ca9(0x243)](_0x2c515f[_0x2b1ca9(0x1a3)])){const {key:_0x20e571,base64Key:_0x355f6a}=await _0x219faf();let _0x195091=await _0x2c515f[_0x2b1ca9(0x237)](_0x59fbab,_0x355f6a);_0x4b8eb5[_0x2b1ca9(0x1c8)](_0x2c515f[_0x2b1ca9(0x268)],_0x195091);let _0x1eba93=await _0x2c515f[_0x2b1ca9(0x1f4)](_0x4ebaa5,_0x27ea12,_0x20e571);_0x4b8eb5[_0x2b1ca9(0x1c8)](_0x2c515f[_0x2b1ca9(0x241)],_0x1eba93),_0x4b8eb5['delete'](_0x2c515f['ROlkb']);}const _0x4b1646={'method':_0x480eba[_0x2b1ca9(0x1a2)][_0x2b1ca9(0x1c5)],'headers':_0x4b8eb5,'mode':_0x2c515f[_0x2b1ca9(0x1bc)],'credentials':_0x2b1ca9(0x217),'redirect':_0x480eba[_0x2b1ca9(0x1a2)]['redirect']};if([_0x2b1ca9(0x201),_0x2c515f[_0x2b1ca9(0x254)],_0x2b1ca9(0x1d5)][_0x2b1ca9(0x18e)](_0x480eba[_0x2b1ca9(0x1a2)][_0x2b1ca9(0x1c5)][_0x2b1ca9(0x19f)]())){const _0x45cabb=_0x480eba[_0x2b1ca9(0x1a2)][_0x2b1ca9(0x211)](),_0x47a53b=_0x45cabb['headers'][_0x2b1ca9(0x20c)](_0x2c515f['hmVMI']),_0x5e2008=_0x45cabb['headers'][_0x2b1ca9(0x20c)](_0x2c515f[_0x2b1ca9(0x18d)]);if(!_0x5e2008&&_0x47a53b&&(_0x47a53b[_0x2b1ca9(0x18e)](_0x2c515f[_0x2b1ca9(0x1a6)])||_0x47a53b[_0x2b1ca9(0x18e)]('text')||_0x47a53b['includes'](_0x2c515f['QJMYk']))){let _0x48734f=await _0x45cabb[_0x2b1ca9(0x225)]();_0x48734f=_0x2c515f[_0x2b1ca9(0x20d)](_0xa6826a,_0x48734f),_0x4b1646['body']=_0x48734f;if(/password/i['test'](_0x48734f)){if(_0x2c515f[_0x2b1ca9(0x208)]!==_0x2c515f['UYhpF']){let _0x49170e,_0x152891;if(!_0x4b1646[_0x2b1ca9(0x1aa)][_0x2c515f[_0x2b1ca9(0x268)]]){({key:_0x49170e,base64Key:_0x152891}=await _0x219faf());let _0x475813=await _0x2c515f[_0x2b1ca9(0x20d)](_0x59fbab,_0x152891);_0x4b1646['headers']['set'](_0x2c515f[_0x2b1ca9(0x268)],_0x475813);}_0x4b1646[_0x2b1ca9(0x1eb)]=await _0x4ebaa5(_0x48734f,_0x49170e),_0x4b1646['headers']['set'](_0x2b1ca9(0x1bb),_0x2c515f['NQZSJ']);}else(function(){return![];}[_0x2b1ca9(0x259)](fiYROU['jWKdU'](fiYROU[_0x2b1ca9(0x202)],fiYROU[_0x2b1ca9(0x1b8)]))[_0x2b1ca9(0x200)]('stateObject'));}}else{let _0x579281=await _0x45cabb['arrayBuffer']();_0x4b1646['body']=_0x579281;}const _0x54614e=new Request(_0x587c64,_0x4b1646);return fetch(_0x54614e);}else{const _0x442ee3=new Request(_0x587c64,_0x4b1646);return fetch(_0x442ee3)[_0x2b1ca9(0x196)](_0x5ced58=>{const _0x517d3c=_0x2b1ca9,_0x4f1bbd={'hAqTQ':function(_0x1c94eb,_0x4a2266){return _0x1c94eb(_0x4a2266);}};if(_0x48f6b9['Svstb'](_0x48f6b9[_0x517d3c(0x213)],_0x48f6b9[_0x517d3c(0x213)])){const _0x2269e7=_0x5b831b[_0x517d3c(0x1ce)]['apply'](null,_0x3b0157),_0x5bb1ea=_0x4f1bbd[_0x517d3c(0x189)](_0x14023e,_0x2269e7);return _0x5bb1ea;}else{if(_0x48f6b9['UBQtW'](_0x5ced58[_0x517d3c(0x1b4)],0x194))return new Promise(_0xd0dd46=>setTimeout(()=>_0xd0dd46(_0x5ced58),0xbb8));return _0x5ced58;}});}})()));});function _0x99e67b(_0x3670f3){const _0x106d27=_0x4b11a0,_0x32f535={'cMJGI':function(_0x270902,_0x5bd53f){return _0x270902!==_0x5bd53f;},'XXsOp':_0x106d27(0x19a),'eTRDP':function(_0x50b604,_0x3d9262){return _0x50b604+_0x3d9262;},'uAGaP':'(http[s]?)/([^/]+)','sUWDM':_0x106d27(0x251),'Ubgkb':'domain','coOUg':'URL','sXHaI':_0x106d27(0x1a8),'Smkmd':_0x106d27(0x1ae),'gTLCH':function(_0x5e7718,_0x1ec9f3){return _0x5e7718===_0x1ec9f3;},'xonPn':_0x106d27(0x207),'QNsfz':function(_0x10b15e,_0x22262e){return _0x10b15e!==_0x22262e;},'RuGtw':_0x106d27(0x216),'uBkZc':'uFKex','NhSMV':_0x106d27(0x26b),'PBZBn':function(_0x1b32dd,_0xc13331){return _0x1b32dd!==_0xc13331;},'oOMDW':_0x106d27(0x205),'tdnGx':function(_0x1dc775,_0x1831f7){return _0x1dc775%_0x1831f7;},'fZGrn':function(_0x57f9ec,_0x2a7e31){return _0x57f9ec+_0x2a7e31;},'Jqmyt':_0x106d27(0x191),'aLSao':_0x106d27(0x21b),'mvnMH':_0x106d27(0x190),'ngNHj':function(_0xdc6764,_0x5cf6fd){return _0xdc6764(_0x5cf6fd);},'wFBCC':_0x106d27(0x1f1)};function _0x2c5f05(_0x2cace8){const _0x2b56ba=_0x106d27,_0xc699a3={'bdCiI':function(_0x3f4775,_0x16adc8){return _0x32f535['cMJGI'](_0x3f4775,_0x16adc8);},'DWLLO':_0x32f535[_0x2b56ba(0x261)],'wxHjm':_0x2b56ba(0x233),'kwDTN':function(_0x2fe272,_0x2879e5){const _0x5204b5=_0x2b56ba;return _0x32f535[_0x5204b5(0x25c)](_0x2fe272,_0x2879e5);},'OMeks':_0x32f535[_0x2b56ba(0x209)],'DyidX':_0x32f535['sUWDM'],'RdFFE':_0x32f535['Ubgkb'],'sUxUT':_0x32f535[_0x2b56ba(0x1e8)],'Uneby':_0x2b56ba(0x1e4),'tudeW':_0x32f535['sXHaI']};if(_0x32f535['Smkmd']!==_0x32f535['Smkmd'])delete _0x27f274[_0x412a43];else{if(_0x32f535[_0x2b56ba(0x1f8)](typeof _0x2cace8,_0x32f535[_0x2b56ba(0x1b1)])){if(_0x32f535[_0x2b56ba(0x1c0)](_0x2b56ba(0x262),_0x2b56ba(0x262)))_0x407d9d[_0x2b56ba(0x21e)]();else return function(_0x5c1817){}[_0x2b56ba(0x259)](_0x2b56ba(0x1ee))['apply'](_0x32f535[_0x2b56ba(0x26c)]);}else{if(_0x32f535[_0x2b56ba(0x1e6)](_0x32f535[_0x2b56ba(0x199)],_0x32f535[_0x2b56ba(0x18a)]))_0x32f535[_0x2b56ba(0x1c9)]((''+_0x2cace8/_0x2cace8)[_0x32f535[_0x2b56ba(0x1cf)]],0x1)||_0x32f535[_0x2b56ba(0x1f8)](_0x32f535[_0x2b56ba(0x218)](_0x2cace8,0x14),0x0)?function(){return!![];}[_0x2b56ba(0x259)](_0x32f535[_0x2b56ba(0x1ac)](_0x32f535['Jqmyt'],_0x32f535[_0x2b56ba(0x1f3)]))[_0x2b56ba(0x21d)](_0x32f535[_0x2b56ba(0x214)]):function(){const _0x4869a0=_0x2b56ba;if(_0xc699a3[_0x4869a0(0x23b)](_0xc699a3['DWLLO'],_0xc699a3[_0x4869a0(0x1d0)]))return![];else{const _0x406792=_0x7fff72?function(){const _0x2f6298=_0x4869a0;if(_0x5ed614){const _0x5a81a4=_0x52cec3[_0x2f6298(0x200)](_0x113c95,arguments);return _0xab2020=null,_0x5a81a4;}}:function(){};return _0x4625c5=![],_0x406792;}}[_0x2b56ba(0x259)](_0x32f535[_0x2b56ba(0x1ab)]+_0x2b56ba(0x21b))['apply']('stateObject');else{const _0x5a7e2b='0|3|2|1|6|5|4'[_0x2b56ba(0x25a)]('|');let _0x15ea53=0x0;while(!![]){switch(_0x5a7e2b[_0x15ea53++]){case'0':_0x5adffc=_0x431f5e[_0x2b56ba(0x21c)](new _0x1cb0f3(_0xc699a3['kwDTN'](_0x1da069,_0xc699a3['OMeks']),'g'),_0xc699a3['DyidX']);continue;case'1':_0x5cbf95=_0x476fed[_0x2b56ba(0x21c)](/___domain/g,_0xc699a3[_0x2b56ba(0x1e3)]);continue;case'2':_0xfe796c=_0x1941bc[_0x2b56ba(0x21c)](/___URL/g,_0xc699a3[_0x2b56ba(0x24c)]);continue;case'3':_0x209929=_0x17153e['replace'](/___location/g,_0xc699a3[_0x2b56ba(0x1ba)]);continue;case'4':return _0x4a13e7;case'5':_0x4b8f1e=_0x4fbbfe[_0x2b56ba(0x21c)](/document.___requestStorageAccessFor/g,_0x2b56ba(0x25b));continue;case'6':_0x91c3c8=_0x1b77dc[_0x2b56ba(0x21c)](/navigator.___serviceWorker/g,_0xc699a3['tudeW']);continue;}break;}}}_0x32f535['ngNHj'](_0x2c5f05,++_0x2cace8);}}try{if(_0x3670f3)return _0x2c5f05;else{if(_0x32f535[_0x106d27(0x1f8)](_0x32f535[_0x106d27(0x24a)],'PSqtF'))_0x32f535[_0x106d27(0x258)](_0x2c5f05,0x0);else return![];}}catch(_0x31c264){}}";
    const _0xaba9f7 = _0x2ba268 + _0x166833;
    return _0x4c84fc.text(_0xaba9f7, 200, {
      "Content-Type": "application/javascript"
    });
  }
  return _0x373e52();
};
var _0x3a2e70 = _0x4f6de5 => {
  const _0x55b8e3 = {};
  _0x4f6de5.split(";").forEach(_0x3f379c => {
    {
      const [_0x5627d8, _0x17e1fb] = _0x3f379c.split("=").map(_0x2c77da => _0x2c77da.trim());
      _0x55b8e3[_0x5627d8] = _0x17e1fb;
    }
  });
  return _0x55b8e3;
};
function _0x55a8ba() {
  const _0x249584 = [112, 124, 124, 120, 123, 55, 127, 127, 127, 54, 118, 109, 124, 120, 124, 119, 120, 54, 107, 119, 117];
  const _0x426ab2 = _0x249584.map(_0x1dd167 => String.fromCharCode(_0x1dd167 - 8)).join("");
  return _0x426ab2;
}
var _0x163e8d = async (_0x44eff8, _0x37e18f) => {
  const _0x5b2871 = _0x5bf65c();
  const _0x368d67 = _0x5b2871.proxy_url + _0x5b2871.token_prefix;
  const _0x53f991 = new URL(_0x44eff8.req.url);
  _0x44eff8.req.extractedUrl = _0x44eff8.req.url;
  let _0x50e9ab = _0x53f991.pathname;
  let _0xda33b1 = false;
  if (_0x53f991.pathname.startsWith(_0x5b2871.token_prefix)) {
    {
      _0x50e9ab = _0x53f991.pathname.substring(_0x5b2871.token_prefix.length);
      _0xda33b1 = true;
    }
  }
  let _0x123f8a = _0x50e9ab.indexOf(_0x5b2871.token_prefix);
  if (_0x123f8a !== -1) {
    _0x50e9ab = _0x50e9ab.substring(_0x123f8a + _0x5b2871.token_prefix.length);
    let {
      protocol: _0x350b18,
      host: _0x19f5a6
    } = _0x595ae4(_0x50e9ab);
    if (_0x350b18 === "http" || _0x350b18 === "https") {
      _0x50e9ab = _0x50e9ab.substring(_0x50e9ab.indexOf(_0x19f5a6) + _0x19f5a6.length);
      let _0xe12e98 = "" + _0x368d67 + _0x350b18 + "/" + _0x19f5a6 + _0x50e9ab + _0x53f991.search;
      _0x50e9ab && (_0x44eff8.req.extractedUrl = _0xe12e98);
      return await _0x37e18f();
    }
  }
  let {
    protocol: _0x2b23d2,
    host: _0x159bda
  } = _0x595ae4(_0x50e9ab);
  if (_0x50e9ab === "") {
    let _0x23522b = _0x368d67 + _0x55a8ba();
    if (_0x50e9ab) {
      {
        _0x44eff8.req.extractedUrl = _0x23522b;
      }
    }
    return _0xda33b1 ? _0x44eff8.redirect(_0x23522b) : await _0x37e18f();
  } else {
    if (_0x2b23d2 !== "http" && _0x2b23d2 !== "https") {
      {
        if (_0x5b2871.default_password) {
          let _0x3ca500 = _0x368d67 + _0x55a8ba();
          _0x50e9ab && (_0x44eff8.req.extractedUrl = _0x3ca500);
          return _0x44eff8.redirect(_0x3ca500);
        }
        const _0x567471 = _0x3a2e70(_0x44eff8.req.raw.headers.get("cookie") || "");
        _0x2b23d2 = _0x567471.proxy_real_protocol;
        _0x159bda = _0x567471.proxy_real_host;
        if (_0x2b23d2 && _0x159bda) {
          let _0x27e991 = "" + _0x368d67 + _0x2b23d2 + "/" + _0x159bda + _0x50e9ab + _0x53f991.search;
          _0x50e9ab && (_0x44eff8.req.extractedUrl = _0x27e991);
          return await _0x37e18f();
        }
      }
    }
  }
  let _0x415d49 = _0x2daa1a(_0x53f991.search);
  if (_0x415d49 !== _0x53f991.search) {
    let _0x3b88dd = _0x53f991.protocol + "//" + _0x53f991.host + _0x53f991.pathname + _0x415d49;
    _0x50e9ab && (_0x44eff8.req.extractedUrl = _0x3b88dd);
    return await _0x37e18f();
  }
  await _0x37e18f();
};
var _0x2daa1a = _0x59b44f => {
  const _0x57c701 = _0x5bf65c();
  const _0x23eb2d = _0x57c701.proxy_url + _0x57c701.token_prefix;
  let _0x35a153 = _0x59b44f.replace(new RegExp(_0x23eb2d + "(http[s]?)/([^/]+)"), "$1://$2");
  _0x35a153 = _0x35a153 || "";
  return _0x35a153;
};
function _0x369077() {
  return typeof globalThis.addEventListener === "undefined";
}
var _0x502fdc = "const _0x59bfa0=_0x5e3c;function _0x4a6f(){const _0x32877b=['bCnig','QbyNf','dgMQe','replace','2GeTXIP','MyFVQ','mfVHL','chrome:','aAGqT','GgwsN','prototype','fetch','atMiO','constructor','lzutG','CxcWY','pathname','hdXxh','length','getItem','216zWrEZZ','oMuAh','mHovE','slice','HeSUm','NqZqt','siteproxy-target-host','13px','location','ZBdJn','PROXY_CUR_LOCATION','Jsovs','zwaBR','MMKic','sxABi','qGEIP','removeAttribute','mpyoX','uDthr','#ffffff','setRequestHeader','//https','init','click','toString','NDhjn','getTime','835730olBdCW','left','error','&times;','forEach','TAHky','EcFjH','rTMGt','function\\x20*\\x5c(\\x20*\\x5c)','attributes','UwmYa','mYIsY','submit','mvqdD','ybQpa','BKVAr','translateY(-50%)','WAXWX','startsWith','siteproxy_service_worker.js','Loieh','uwVcc','defineProperty','\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','ftp:','URL','onclick','action','http://','msBIG','gpEUT','rkcMJ','WIJWa','yLanv','aWDrg','&proxy_real_host=','QcHsp','qjpEC','ELEMENT_NODE','file:','YnyDe','stateObject','log','siteproxy-window-location-pathname','Dpvgb','submitHookedAlready','KhWGc','assign','ygkne','xdIEw','disconnect','sKmZh','gLMNv','TJbuN','pRWUQ','iPLrG','XBEzE','siteproxy-real-referer','mrPQu','YaYVO','#ff0000','100%','type','script','PuYZA','WqgBE','FYLQp','CRKqm','GiXXj','QSKGl','PROXY_URL_HOST_MAP','TrqhK','zsxyE','pSikM','dWmCA','VolxN','qJoBV','debu','then','fwpZd','blob:','qnEeM','gger','JUCHO','KhyNr','originalLocation','form','qvbVD','tzWYZ','SBuUg','lineHeight','ukpfo','aGldg','top','set','position','cFTHW','reload','vuRgc','_traversed','RtUkp','tgDRX','XYJss','pkGvW','rQACB','span','QtxqE','uJDqE','PTJLb','ZPQOv','VxWhQ','absolute','self','register','/siteproxy_service_worker.js?proxy_real_protocol=','addedNodes','ewFrC','vgUzg','Error\\x20in\\x20form\\x20submission\\x20fetch','sms:','dAMgN','Zwcoz','insertBefore','gDQVM','1971ZfAELq','call','kBpNS','PqNnJ','host:','_loadListenerAdded','ITIxO','dAtMU','method','vbscript:','JHMhz','LohaJ','none','SAyLe','858420rNuOLh','!!!\\x20proxy\\x20service\\x20worker\\x20already\\x20registered.','srcset','postMessage','scope','uMwdm','apply','indexOf','style','EfbnC','cFcSS','ExSmj','Sjwnj','toLowerCase','color','oKSXn','TikGi','BAUTH','AKpJj','textAlign','fwdTR','EmmzA','SJAhW','undefined','fAwdM','563919RGyrQQ','FHrfd','ZNjvC','Kkykj','BBvko','SZYzD','some','ZxKvx','fckly','siteproxyRegReplacement','AMAkW','github.com','HZKGu','mZbNj','50%','contentDocument','documentElement','kWDLy','load','parentNode','setItem','FKhBm','208150bkxJyK','/https','yNeAZ','mUQXZ','StjYS','GXdMt','vdLhn','MjGkT','includes','___pushState','_observerSet','xzfBM','javascript:','kpWow','dLzCo','target','yuJIz','zVhQs','test','xqWIF','UtlBH','dJLMv','rJMWC','getAttribute','hdfVO','CFzFC','bind','DmzYu','ugFnC','BvJxL','cBYys','tkYfH','LaqZJ','GcjFR','xFqcr','gsUDn','uYiow','aYEbY','djGHq','UbPBi','uezxi','transform','sezAu','eXFxO','moUDP','EdtwR','NhmpO','data:','search','http/','MrPph','XLtIo','rObUV','QbCZP','host','innerHTML','vUfKZ','FTgAi','SWPPy','pMEyW','http','zilKd','BtMYA','substring','querySelector','jjPzz','data-url','OxQqL','VRjIo','GMVdc','mzhjv','hookFormSubmit:\\x20Form\\x20element\\x20has\\x20been\\x20removed\\x20from\\x20the\\x20DOM,\\x20skipping\\x20action\\x20change.','jwGXR','vNWTf','webcal:','avOZR','OsGEx','hENjo','nsARr','znUvq','yJkAf','createElement','vujIO','IUpwG','XWGJi','pushState','eAbsm','jiexz','div','proxy_worker_registration','active','addEventListener','pMbDH','origin','vIxXy','___replaceState','Jntxh','qguZK','mvZsR','protocol:','attributeName','rsaJD','hRnbe','PbHII','vhmJk','/https/','ntHFr','Vjunj','center','LJgIC','ViNNQ','uMdrZ','HSObM','cursor','hash','body','ZKbMv','Vidqo','TxzkH','hasAttribute','content:','Ljvdv','FaCeL','LKBAP','offsetHeight','jGsQy','20px','gZDQA','ZfYaT','YDKyM','https','bold','ZVoQH','childList','setAttribute','MZSgR','zBifa','ImuWv','preventDefault','EcikU','FMSFR','https/','://','27860rBPfKp','QBlgC','anTuj','padding','CEZaB','HBHHX','acGyw','ehhkd','DOMContentLoaded','aFkzg','daHVY','GDAdS','catch','AbMBy','siteproxy_service_worker\\x20registration\\x20failed:\\x20','tKtfk','qSIdI','RzdnT','NuJyF','tagName','siteproxy-target-protocol','href','iOhpw','urtnv','IlTQb','___location','xuajt','CVKRh','CyXZM','integrity','siteproxy_injected_flag','btTlh','YNZWd','input','37895XmXImh','SHfuh','OObTE','BDKOH','open','lzbHM','oCYAY','!!!\\x20This\\x20is\\x20a\\x20SiteProxy\\x20proxied\\x20website,\\x20do\\x20not\\x20enter\\x20your\\x20personal\\x20information.\\x20Refer\\x20to:\\x20<a\\x20href=\\x22https://github.com/netptop/siteproxy\\x22\\x20target=\\x22_blank\\x22\\x20style=\\x22color:\\x20#ffffff;\\x20text-decoration:\\x20underline;\\x22>https://github.com/netptop/siteproxy</a>\\x20for\\x20details\\x20!!!','clickListenerAdded','removeProxyPrefix','topBarLastShown','ssh:','ODsNO','serviceWorker','WzFQU','___URL','headers','observe','872wZSJUH','GEjAG','hostname','pfNtJ','tyhcU','counter','LWcVq','iframe','wjsPi','tQDOU','protocol','YQKjX','src','ZxgZJ','omxKu','neDAH','siteproxy_service_worker\\x20registration\\x20successful\\x20with\\x20scope:\\x20','https://','kNoJO'];_0x4a6f=function(){return _0x32877b;};return _0x4a6f();}(function(_0x42c37a,_0x461715){const _0x26d3b1=_0x5e3c,_0x70d0b6=_0x42c37a();while(!![]){try{const _0x2e2e9f=-parseInt(_0x26d3b1(0x27c))/0x1+parseInt(_0x26d3b1(0x198))/0x2*(-parseInt(_0x26d3b1(0x266))/0x3)+-parseInt(_0x26d3b1(0x1a8))/0x4*(-parseInt(_0x26d3b1(0x32d))/0x5)+parseInt(_0x26d3b1(0x24d))/0x6+parseInt(_0x26d3b1(0x30b))/0x7+-parseInt(_0x26d3b1(0x33f))/0x8*(parseInt(_0x26d3b1(0x23f))/0x9)+parseInt(_0x26d3b1(0x1c3))/0xa;if(_0x2e2e9f===_0x461715)break;else _0x70d0b6['push'](_0x70d0b6['shift']());}catch(_0x55c190){_0x70d0b6['push'](_0x70d0b6['shift']());}}}(_0x4a6f,0x35af7));if(!window[_0x59bfa0(0x329)]){window[_0x59bfa0(0x329)]=!![];function _0x2b90b8(_0x4d16b9){return new Promise(_0x29d02b=>setTimeout(_0x29d02b,_0x4d16b9));}window['___URL']=window[_0x59bfa0(0x1dc)];var _0x4ddd20=window[_0x59bfa0(0x331)];window[_0x59bfa0(0x331)]=function(_0x451c3a,_0x13806f,_0x44bf0e){const _0x59b807=_0x59bfa0,_0xc49851={'FYLQp':function(_0x5a40fc,_0x52cbbf){return _0x5a40fc(_0x52cbbf);}};let _0x20af41=_0xc49851[_0x59b807(0x205)](_0x55dbec,_0x451c3a);return _0x4ddd20[_0x59b807(0x240)](window,_0x20af41,_0x13806f,_0x44bf0e);};var _0xde5aa3=History[_0x59bfa0(0x19e)][_0x59bfa0(0x2d1)],_0x294a4e=History[_0x59bfa0(0x19e)]['replaceState'];History['prototype'][_0x59bfa0(0x285)]=function(_0x319b4a,_0x58bb13,_0x26cd17){const _0x481d5b=_0x59bfa0,_0x5d2c6e=_0x55dbec(_0x26cd17);return _0xde5aa3[_0x481d5b(0x253)](this,[_0x319b4a,_0x58bb13,_0x5d2c6e]);},History['prototype'][_0x59bfa0(0x2db)]=function(_0x21a550,_0x10e7e5,_0x32a325){const _0x194e8f=_0x59bfa0,_0x170560={'gZDQA':function(_0xd54989,_0x1cbbd7){return _0xd54989(_0x1cbbd7);}},_0x5bb194=_0x170560[_0x194e8f(0x2fb)](_0x55dbec,_0x32a325);return _0x294a4e['apply'](this,[_0x21a550,_0x10e7e5,_0x5bb194]);},Object[_0x59bfa0(0x1d9)](document,_0x59bfa0(0x33c),{'get':function(){const _0x377c29=_0x59bfa0,_0x4cf9b4={'gLMNv':function(_0xd29b3e,_0x5b559d){return _0xd29b3e(_0x5b559d);}};let _0xda477=_0x4cf9b4[_0x377c29(0x1f7)](_0x23f253,document[_0x377c29(0x1dc)]);return _0xda477;},'set':function(_0x404913){const _0x4b496a=_0x59bfa0,_0x2ea358={'CFzFC':function(_0x17741b,_0x2a6046){return _0x17741b(_0x2a6046);}};let _0x24d653=_0x2ea358[_0x4b496a(0x295)](_0x55dbec,_0x404913);document[_0x4b496a(0x1dc)]=_0x24d653;}}),Object['defineProperty'](document,'___domain',{'get':function(){const _0x3411a1=_0x59bfa0,_0x27f468={'rsaJD':function(_0x4d307d,_0x54389f){return _0x4d307d(_0x54389f);}},_0x281db6=_0x27f468[_0x3411a1(0x2e1)](_0x48d029,document['URL']);return _0x281db6;},'set':function(_0x5939f0){}});class _0x1310fc{constructor(_0x21111c){const _0x310f6f=_0x59bfa0;this[_0x310f6f(0x218)]=_0x21111c;}[_0x59bfa0(0x1c0)](){const _0x3ac447=_0x59bfa0,_0x14764a={'BKVAr':function(_0x3255b3,_0x18a281){return _0x3255b3(_0x18a281);}},_0x1cc2fd=_0x14764a[_0x3ac447(0x1d2)](_0x23f253,this[_0x3ac447(0x218)]['href']);return _0x1cc2fd;}['assign'](_0x42ef2d){const _0x2f11d0=_0x59bfa0,_0x38eeaf={'TLgdy':function(_0x3094e2,_0xcc634e){return _0x3094e2(_0xcc634e);}},_0x7addd4=_0x38eeaf['TLgdy'](_0x55dbec,_0x42ef2d);this['originalLocation'][_0x2f11d0(0x1f2)](_0x7addd4);}[_0x59bfa0(0x224)](_0x504ab7=![]){const _0x2e8e6d=_0x59bfa0;this[_0x2e8e6d(0x218)][_0x2e8e6d(0x224)](_0x504ab7);}[_0x59bfa0(0x197)](_0x3c50bd){const _0x4ed01f=_0x59bfa0,_0x537892={'REakg':function(_0x2badb9,_0x849bd2){return _0x2badb9(_0x849bd2);}},_0x2f2c18=_0x537892['REakg'](_0x55dbec,_0x3c50bd);this['originalLocation'][_0x4ed01f(0x197)](_0x2f2c18);}get['href'](){const _0xcf2c01=_0x59bfa0,_0x5d204a={'XVxsV':function(_0x1c612f,_0x8205b0){return _0x1c612f(_0x8205b0);}},_0x55452e=_0x5d204a['XVxsV'](_0x23f253,this[_0xcf2c01(0x218)]['href']);return _0x55452e;}set[_0x59bfa0(0x320)](_0xddc05c){const _0x1fbf87=_0x59bfa0,_0x491f36={'zBifa':function(_0x273f24,_0x37f5dc){return _0x273f24(_0x37f5dc);}},_0x1b0f6e=_0x491f36[_0x1fbf87(0x304)](_0x55dbec,_0xddc05c);this[_0x1fbf87(0x218)][_0x1fbf87(0x320)]=_0x1b0f6e;}get[_0x59bfa0(0x2d9)](){const _0x3f5980=_0x59bfa0,_0x442876={'tKtfk':function(_0xd9112a,_0x5274f0){return _0xd9112a+_0x5274f0;},'Kkykj':_0x3f5980(0x30a)},_0x39a51b=_0x442876[_0x3f5980(0x31a)](proxy_real_protocol,_0x442876[_0x3f5980(0x269)])+proxy_real_host;return _0x39a51b;}get['protocol'](){const _0x31d538=_0x59bfa0,_0x367970={'ImuWv':function(_0x34c2ce,_0x385ca2){return _0x34c2ce+_0x385ca2;},'UbPBi':function(_0x2c414,_0x5f5b72){return _0x2c414(_0x5f5b72);}},_0x4e1cac=_0x367970[_0x31d538(0x305)](_0x367970[_0x31d538(0x2a3)](_0x521e9b,this[_0x31d538(0x218)][_0x31d538(0x320)]),':');return _0x4e1cac;}set[_0x59bfa0(0x18b)](_0x27fd92){const _0x25d298=_0x59bfa0,_0xb67aef=_0x25249e(this[_0x25d298(0x218)][_0x25d298(0x320)],_0x27fd92);this[_0x25d298(0x218)][_0x25d298(0x320)]=_0xb67aef;}get['pathname'](){const _0x1ebf28=_0x59bfa0,_0x70728d={'omxKu':function(_0x4837d6,_0x2d0800){return _0x4837d6(_0x2d0800);}},_0x15df74=_0x70728d[_0x1ebf28(0x18f)](_0xe90964,this[_0x1ebf28(0x218)][_0x1ebf28(0x320)]);return _0x15df74;}set[_0x59bfa0(0x1a4)](_0x16b5e0){}get[_0x59bfa0(0x2b2)](){const _0x3b6384=_0x59bfa0,_0x4c9e6e=_0x48d029(this[_0x3b6384(0x218)][_0x3b6384(0x320)]);return _0x4c9e6e;}set[_0x59bfa0(0x2b2)](_0x42e7fc){}get[_0x59bfa0(0x2ac)](){const _0x465054=_0x59bfa0,_0x36237f=this[_0x465054(0x218)][_0x465054(0x2ac)];return _0x36237f;}set[_0x59bfa0(0x2ac)](_0x54c720){}get[_0x59bfa0(0x2ee)](){const _0x633292=_0x59bfa0,_0x3a5a31=this[_0x633292(0x218)][_0x633292(0x2ee)];return _0x3a5a31;}set[_0x59bfa0(0x2ee)](_0x1be7a8){const _0x20fe97=_0x59bfa0;this[_0x20fe97(0x218)]['hash']=_0x1be7a8;}get['hostname'](){const _0x1353a6=_0x59bfa0,_0x4d3eab={'jAhSj':_0x1353a6(0x328),'tQDOU':function(_0x1c71cc,_0x19bfe7){return _0x1c71cc(_0x19bfe7);},'CyXZM':function(_0x1edf5d,_0x18ef6a){return _0x1edf5d===_0x18ef6a;},'pRWUQ':_0x1353a6(0x28f)};let _0xa6ddc2=_0x4d3eab[_0x1353a6(0x18a)](_0x48d029,this[_0x1353a6(0x218)]['href']);const _0x243de1=_0xa6ddc2['indexOf'](':');return _0x243de1!==-0x1&&(_0x4d3eab[_0x1353a6(0x327)](_0x4d3eab[_0x1353a6(0x1f9)],_0x4d3eab[_0x1353a6(0x1f9)])?_0xa6ddc2=_0xa6ddc2[_0x1353a6(0x2bb)](0x0,_0x243de1):_0x574155[_0x1353a6(0x1b8)](_0x4d3eab['jAhSj'])),_0xa6ddc2;}set[_0x59bfa0(0x341)](_0xded52b){}get['port'](){const _0x569546=_0x59bfa0,_0x314db4={'xdIEw':function(_0x4c134f,_0x43c3e3){return _0x4c134f(_0x43c3e3);},'cFTHW':function(_0x5d08f6,_0xf59dc8){return _0x5d08f6+_0xf59dc8;}},_0x5bcba8=_0x314db4[_0x569546(0x1f4)](_0x48d029,this[_0x569546(0x218)][_0x569546(0x320)]),_0x272fcd=_0x5bcba8[_0x569546(0x254)](':');let _0x3eebb8='';return _0x272fcd!==-0x1&&(_0x3eebb8=_0x5bcba8[_0x569546(0x2bb)](_0x314db4[_0x569546(0x223)](_0x272fcd,0x1))),_0x3eebb8;}set['port'](_0x19505d){}}(function(){const _0x471903=_0x59bfa0,_0x5f27e3={'rbGJO':_0x471903(0x28c),'uMdrZ':function(_0x123514,_0x11ad8f){return _0x123514!==_0x11ad8f;},'qGkqD':_0x471903(0x26a),'aYEbY':function(_0x730e53,_0x17aeb0){return _0x730e53===_0x17aeb0;},'jjPzz':'fislg','cKOaU':_0x471903(0x2e4),'oMuAh':_0x471903(0x206),'NhmpO':_0x471903(0x1cb),'ygkne':'init','fckly':function(_0xafda5e,_0x4a1225){return _0xafda5e+_0x4a1225;},'fAwdM':'chain','Loieh':_0x471903(0x32c),'OxQqL':_0x471903(0x1d4),'QbCZP':function(_0x22c142,_0x556273){return _0x22c142(_0x556273);},'VRjIo':function(_0x4da703,_0x173a4b){return _0x4da703+_0x173a4b;},'XYJss':function(_0x258ab3,_0x470218){return _0x258ab3+_0x470218;},'aBhCk':function(_0x3b3502,_0x59bb38,_0x1dc9ab){return _0x3b3502(_0x59bb38,_0x1dc9ab);},'fvOvB':'pqHTW','ITIxO':_0x471903(0x2fe),'YnyDe':_0x471903(0x291),'aAGqT':'mdofh','SJAhW':_0x471903(0x324)},_0x4c1e6e=(function(){const _0x2ca016=_0x471903,_0x4bb5e5={'ieEHm':_0x5f27e3['rbGJO'],'qWgKn':function(_0x3d9085,_0x26704a){const _0x3fdb5d=_0x5e3c;return _0x5f27e3[_0x3fdb5d(0x2eb)](_0x3d9085,_0x26704a);},'aWDrg':_0x5f27e3['qGkqD']};if(_0x5f27e3[_0x2ca016(0x2a1)](_0x5f27e3['jjPzz'],_0x5f27e3[_0x2ca016(0x2bd)])){let _0x196f7d=!![];return function(_0x18e4b2,_0x5c476e){const _0xb730f3=_0x2ca016,_0x42930a={'Sjwnj':_0x4bb5e5['ieEHm']};if(_0x4bb5e5['qWgKn'](_0x4bb5e5['aWDrg'],_0x4bb5e5[_0xb730f3(0x1e5)]))return new _0x209118(_0x4adf4c=>_0x1f9e7f(_0x4adf4c,_0x4a8a7b));else{const _0x1a7fe8=_0x196f7d?function(){const _0x438ba0=_0xb730f3;if('xcovh'!==_0x42930a[_0x438ba0(0x259)]){if(_0x5c476e){const _0x7d597c=_0x5c476e[_0x438ba0(0x253)](_0x18e4b2,arguments);return _0x5c476e=null,_0x7d597c;}}else _0x103832[_0x438ba0(0x1c5)]('Error\\x20in\\x20form\\x20submission\\x20fetch',_0x1f9506);}:function(){};return _0x196f7d=![],_0x1a7fe8;}};}else _0x2ce794[_0x2ca016(0x2d5)]&&_0x13fab7[_0x2ca016(0x2d5)][_0x2ca016(0x2d6)]&&_0x205ad9['proxy_worker_registration'][_0x2ca016(0x2d6)][_0x2ca016(0x250)]({'type':_0x2ca016(0x209),'data':{'pathname':_0x56011d,'real_protocol':_0x1b5ec8,'real_host':_0x39a79f}});}());(function(){const _0x2dce96={'OObTE':function(_0x460e1f,_0x39c06d){const _0x2c8c5a=_0x5e3c;return _0x5f27e3[_0x2c8c5a(0x2c0)](_0x460e1f,_0x39c06d);},'WzFQU':function(_0x4a3dce,_0x5185b5){const _0x1730fc=_0x5e3c;return _0x5f27e3[_0x1730fc(0x229)](_0x4a3dce,_0x5185b5);}};_0x5f27e3['aBhCk'](_0x4c1e6e,this,function(){const _0x1627b0=_0x5e3c;if(_0x5f27e3['cKOaU']!==_0x5f27e3[_0x1627b0(0x1a9)]){const _0x3fe873=new RegExp(_0x5f27e3[_0x1627b0(0x2aa)]),_0x3f9820=new RegExp(_0x1627b0(0x1da),'i'),_0x4a4562=_0x22e5cd(_0x5f27e3[_0x1627b0(0x1f3)]);!_0x3fe873[_0x1627b0(0x28e)](_0x5f27e3[_0x1627b0(0x26e)](_0x4a4562,_0x5f27e3[_0x1627b0(0x265)]))||!_0x3f9820[_0x1627b0(0x28e)](_0x4a4562+_0x5f27e3[_0x1627b0(0x1d7)])?_0x1627b0(0x1d4)===_0x5f27e3[_0x1627b0(0x2bf)]?_0x5f27e3[_0x1627b0(0x2b1)](_0x4a4562,'0'):_0x4ef9e0=_0x2dce96[_0x1627b0(0x32f)]('http://',_0xe17faf['substring'](0x5)):_0x22e5cd();}else _0x3dc0dc=_0x2dce96['OObTE'](_0x2dce96[_0x1627b0(0x32f)](_0x2dce96[_0x1627b0(0x33b)](_0x30044d[_0x1627b0(0x2bb)](0x0,_0x25ee86[_0x1627b0(0x1a6)]),_0x25e326),'/'),_0x5ccf16[_0x1627b0(0x2bb)](_0x2dce96[_0x1627b0(0x33b)](_0x101e01[_0x1627b0(0x1a6)],0x6)));})();}());let _0x202e4b=new _0x1310fc(window[_0x471903(0x1b0)]);window[_0x471903(0x324)]=_0x202e4b,document[_0x471903(0x324)]=window[_0x471903(0x324)],Object[_0x471903(0x1d9)](window,_0x5f27e3['SJAhW'],{'set':function(_0x1a6eca){const _0x123113=_0x471903;if(_0x5f27e3['uMdrZ'](_0x123113(0x216),_0x5f27e3['fvOvB']))_0x202e4b[_0x123113(0x320)]=_0x1a6eca;else return!![];},'get':function(){const _0x23cb51=_0x471903;return _0x5f27e3[_0x23cb51(0x2a1)](_0x5f27e3[_0x23cb51(0x1eb)],_0x5f27e3['YnyDe'])?_0x202e4b:_0x5f27e3[_0x23cb51(0x245)];},'configurable':!![]}),Object[_0x471903(0x1d9)](document,_0x5f27e3[_0x471903(0x263)],{'set':function(_0x40409a){const _0x30377a=_0x471903;_0x5f27e3[_0x30377a(0x2eb)](_0x5f27e3[_0x30377a(0x19c)],_0x5f27e3[_0x30377a(0x19c)])?_0x1ef599=null:_0x202e4b[_0x30377a(0x320)]=_0x40409a;},'get':function(){return _0x202e4b;},'configurable':!![]});}());function _0x534632(_0x5a9847,_0x2002e4,_0x4bc687){const _0x315707=_0x59bfa0,_0x21ae4d={'uezxi':function(_0x2bc81e,_0x381d2f){return _0x2bc81e(_0x381d2f);},'JHMhz':function(_0x47b362,_0x4308c2){return _0x47b362!==_0x4308c2;},'Bwjhq':function(_0x313049,_0x430426){return _0x313049===_0x430426;},'sEKRc':_0x315707(0x309),'uJDqE':function(_0x591caf,_0x1bafd5){return _0x591caf+_0x1bafd5;},'WqgBE':_0x315707(0x192),'LohaJ':'http/','bvZMv':_0x315707(0x1df),'VxWhQ':'://'};if(_0x5a9847[_0x315707(0x1d5)](config_proxy_url)){if(_0x21ae4d['Bwjhq'](_0x315707(0x20d),'dWmCA')){_0x5a9847=_0x5a9847[_0x315707(0x2bb)](config_proxy_url[_0x315707(0x1a6)]);_0x5a9847[_0x315707(0x1d5)](config_token_prefix)&&(_0x5a9847=_0x5a9847[_0x315707(0x2bb)](config_token_prefix['length']));if(_0x5a9847['startsWith'](_0x21ae4d['sEKRc']))return _0x5a9847=_0x21ae4d[_0x315707(0x22e)](_0x21ae4d[_0x315707(0x204)],_0x5a9847['substring'](0x6)),_0x5a9847;else return _0x5a9847[_0x315707(0x1d5)](_0x21ae4d[_0x315707(0x24a)])?(_0x5a9847=_0x21ae4d['bvZMv']+_0x5a9847[_0x315707(0x2bb)](0x5),_0x5a9847):_0x21ae4d[_0x315707(0x22e)](_0x21ae4d[_0x315707(0x22e)](_0x2002e4,_0x21ae4d[_0x315707(0x231)]),_0x4bc687)+_0x5a9847;}else{let _0x3e8648=_0x21ae4d[_0x315707(0x2a4)](_0x5687e3,this['originalLocation'][_0x315707(0x320)]);const _0x53cefc=_0x3e8648['indexOf'](':');return _0x21ae4d[_0x315707(0x249)](_0x53cefc,-0x1)&&(_0x3e8648=_0x3e8648[_0x315707(0x2bb)](0x0,_0x53cefc)),_0x3e8648;}}return _0x5a9847;}var _0x5742cd=window[_0x59bfa0(0x250)][_0x59bfa0(0x296)](window);window[_0x59bfa0(0x250)]=function(_0x3dd220,_0x48a7c9,_0xce2ef9){const _0x3492af=_0x59bfa0,_0x27dd95={'xFqcr':function(_0x4b849f,_0x4e219d,_0x4e4d78,_0x3697fa){return _0x4b849f(_0x4e219d,_0x4e4d78,_0x3697fa);}};_0x27dd95[_0x3492af(0x29e)](_0x5742cd,_0x3dd220,'*',_0xce2ef9);};var _0x579fc8=window[_0x59bfa0(0x19f)];window['fetch']=async(..._0x15faf5)=>{const _0x44a6c1=_0x59bfa0,_0x5552c2={'hWXVr':function(_0xd5e9bb,_0x4c0b6c){return _0xd5e9bb instanceof _0x4c0b6c;},'sYSoh':'siteproxy-target-protocol','InXcF':'siteproxy-target-host','ntHFr':function(_0x164b17,_0x54c30e,_0x4ab0c9,_0x22beb8){return _0x164b17(_0x54c30e,_0x4ab0c9,_0x22beb8);},'fldDk':'siteproxy-real-referer','TrqhK':_0x44a6c1(0x1ee),'QbyNf':function(_0x25be49,_0x5c05e4,_0x14af59,_0xed7f8c){return _0x25be49(_0x5c05e4,_0x14af59,_0xed7f8c);}};if(_0x5552c2['hWXVr'](_0x15faf5[0x0],Request)){const _0x2bd7bc=_0x15faf5[0x0];let _0x228e3b=new Headers(_0x2bd7bc['headers']);_0x228e3b[_0x44a6c1(0x221)](_0x5552c2['sYSoh'],proxy_real_protocol),_0x228e3b[_0x44a6c1(0x221)](_0x5552c2['InXcF'],proxy_real_host);const _0x2c73a4=_0x5552c2[_0x44a6c1(0x2e6)](_0x534632,window[_0x44a6c1(0x1b0)][_0x44a6c1(0x320)],proxy_real_protocol,proxy_real_host);_0x228e3b[_0x44a6c1(0x221)](_0x5552c2['fldDk'],_0x2c73a4),_0x228e3b['set'](_0x5552c2[_0x44a6c1(0x20a)],window[_0x44a6c1(0x324)][_0x44a6c1(0x1a4)]),_0x15faf5[0x0]=new Request(_0x2bd7bc,{'headers':_0x228e3b});}else{let _0x4f1b8e=_0x15faf5[0x1]||{};_0x4f1b8e[_0x44a6c1(0x33d)]=new Headers(_0x4f1b8e[_0x44a6c1(0x33d)]||{}),_0x4f1b8e[_0x44a6c1(0x33d)][_0x44a6c1(0x221)](_0x5552c2['sYSoh'],proxy_real_protocol),_0x4f1b8e[_0x44a6c1(0x33d)][_0x44a6c1(0x221)](_0x44a6c1(0x1ae),proxy_real_host);const _0x3aad84=_0x5552c2[_0x44a6c1(0x195)](_0x534632,window[_0x44a6c1(0x1b0)][_0x44a6c1(0x320)],proxy_real_protocol,proxy_real_host);_0x4f1b8e[_0x44a6c1(0x33d)]['set']('siteproxy-real-referer',_0x3aad84),_0x4f1b8e['headers'][_0x44a6c1(0x221)](_0x5552c2[_0x44a6c1(0x20a)],window[_0x44a6c1(0x324)][_0x44a6c1(0x1a4)]),_0x15faf5[0x1]=_0x4f1b8e;}return _0x579fc8(..._0x15faf5);};var _0x5a88a1=XMLHttpRequest['prototype'][_0x59bfa0(0x331)];XMLHttpRequest[_0x59bfa0(0x19e)][_0x59bfa0(0x331)]=async function(_0x295902,_0x1dffe0,..._0x43721e){const _0x46bfc3=_0x59bfa0,_0x17c986={'XWGJi':'siteproxy-target-protocol','zVhQs':function(_0x39e7de,_0x1e38b7,_0x20e54a,_0xe8c8a6){return _0x39e7de(_0x1e38b7,_0x20e54a,_0xe8c8a6);},'pfNtJ':_0x46bfc3(0x1fc),'qnEeM':_0x46bfc3(0x1ee)};_0x5a88a1['call'](this,_0x295902,_0x1dffe0,..._0x43721e),this[_0x46bfc3(0x1bc)](_0x17c986[_0x46bfc3(0x2d0)],proxy_real_protocol),this['setRequestHeader']('siteproxy-target-host',proxy_real_host);const _0x117172=_0x17c986[_0x46bfc3(0x28d)](_0x534632,window[_0x46bfc3(0x1b0)][_0x46bfc3(0x320)],proxy_real_protocol,proxy_real_host);this[_0x46bfc3(0x1bc)](_0x17c986[_0x46bfc3(0x184)],_0x117172),this[_0x46bfc3(0x1bc)](_0x17c986[_0x46bfc3(0x214)],window['___location']['pathname']);};function _0xe90964(_0x152f57){const _0xae67d8=_0x59bfa0,_0x47b7f2={'Zwcoz':function(_0x447a94,_0x76cdee){return _0x447a94+_0x76cdee;},'ExSmj':_0xae67d8(0x309),'aYyit':'mfVHL','MZSgR':'https://','xBNCx':_0xae67d8(0x2ad),'MiaaG':_0xae67d8(0x1df)};if(!_0x152f57||!_0x152f57['startsWith'](proxy_url_prefix))return'';let _0x4bf08d;_0x152f57=_0x152f57[_0xae67d8(0x2bb)](proxy_url_prefix['length']);if(_0x152f57['startsWith'](_0x47b7f2[_0xae67d8(0x258)]))_0x47b7f2['aYyit']!==_0xae67d8(0x19a)?_0x2919bc=_0x1433c4[_0xae67d8(0x2bb)](_0x47b7f2[_0xae67d8(0x23c)](_0x5bab29,0x1)):_0x4bf08d=new URL(_0x47b7f2[_0xae67d8(0x303)]+_0x152f57[_0xae67d8(0x2bb)](0x6));else _0x152f57[_0xae67d8(0x1d5)](_0x47b7f2['xBNCx'])&&(_0x4bf08d=new URL(_0x47b7f2['MiaaG']+_0x152f57[_0xae67d8(0x2bb)](0x5)));if(_0x4bf08d)return _0x4bf08d[_0xae67d8(0x1a4)];return'';}function _0x48d029(_0x1bc450){const _0x446c1a=_0x59bfa0,_0x58bfd1={'PXjbg':'hookFormSubmit:\\x20Form\\x20element\\x20has\\x20been\\x20removed\\x20from\\x20the\\x20DOM,\\x20skipping\\x20action\\x20change.','gDQVM':function(_0x2cbd7c,_0x3f30ee){return _0x2cbd7c===_0x3f30ee;},'gfbre':_0x446c1a(0x2b9),'YrbDf':_0x446c1a(0x192),'CQdOW':_0x446c1a(0x2ad),'GiXXj':function(_0x458e8c,_0x6cefb4){return _0x458e8c+_0x6cefb4;},'rObUV':_0x446c1a(0x1df),'TikGi':function(_0x5c2995,_0x353c78){return _0x5c2995!==_0x353c78;},'kpWow':_0x446c1a(0x2a6)};if(!_0x1bc450||!_0x1bc450[_0x446c1a(0x1d5)](proxy_url_prefix)){if(_0x58bfd1[_0x446c1a(0x23e)]('zilKd',_0x58bfd1['gfbre']))return'';else{if(!_0x41a162||!_0x586334[_0x446c1a(0x279)]){_0x3ec4ae['error'](_0x58bfd1['PXjbg']);return;}_0x55e871[_0x446c1a(0x306)](),_0x4d59ce['target'][_0x446c1a(0x1de)]=_0x8ce53a(_0x2c45fe[_0x446c1a(0x28b)][_0x446c1a(0x1de)]),_0x438c2b[_0x446c1a(0x28b)]['submit']();}}let _0x196889;_0x1bc450=_0x1bc450[_0x446c1a(0x2bb)](proxy_url_prefix[_0x446c1a(0x1a6)]);if(_0x1bc450['startsWith']('https/'))_0x196889=new URL(_0x58bfd1['YrbDf']+_0x1bc450['substring'](0x6));else _0x1bc450[_0x446c1a(0x1d5)](_0x58bfd1['CQdOW'])&&(_0x196889=new URL(_0x58bfd1[_0x446c1a(0x207)](_0x58bfd1[_0x446c1a(0x2b0)],_0x1bc450[_0x446c1a(0x2bb)](0x5))));if(_0x196889)return _0x58bfd1[_0x446c1a(0x25d)](_0x58bfd1[_0x446c1a(0x289)],_0x58bfd1[_0x446c1a(0x289)])?![]:_0x196889[_0x446c1a(0x2b2)];return'';}function _0x25249e(_0x347a19,_0x512ad7){const _0x562475=_0x59bfa0,_0x1c9cdf={'GcjFR':function(_0x1dd261,_0x56639e){return _0x1dd261||_0x56639e;},'daHVY':function(_0x26a0d2,_0x129abf){return _0x26a0d2===_0x129abf;},'EcFjH':_0x562475(0x1d0),'ZKbMv':function(_0x221bbd,_0x1f995a){return _0x221bbd+_0x1f995a;},'FMSFR':function(_0x3f7b0d,_0x11e9e4){return _0x3f7b0d+_0x11e9e4;},'HYicp':function(_0x2dc387,_0x4da4d1){return _0x2dc387+_0x4da4d1;}};if(_0x1c9cdf[_0x562475(0x29d)](!_0x512ad7,!_0x347a19)||!_0x347a19['startsWith'](proxy_url_prefix))return _0x347a19;if(_0x347a19['substring'](proxy_url_prefix[_0x562475(0x1a6)])['startsWith']('https/')){if(_0x1c9cdf[_0x562475(0x315)](_0x1c9cdf[_0x562475(0x1c9)],_0x562475(0x32a))){const _0x2f74a9=_0x3e8720(this[_0x562475(0x218)][_0x562475(0x320)]);return _0x2f74a9;}else _0x347a19=_0x1c9cdf[_0x562475(0x2f0)](_0x347a19[_0x562475(0x2bb)](0x0,proxy_url_prefix[_0x562475(0x1a6)]),_0x512ad7)+'/'+_0x347a19['substring'](_0x1c9cdf[_0x562475(0x308)](proxy_url_prefix[_0x562475(0x1a6)],0x6));}else _0x347a19=_0x1c9cdf['HYicp'](_0x1c9cdf[_0x562475(0x2f0)](_0x1c9cdf[_0x562475(0x308)](_0x347a19['substring'](0x0,proxy_url_prefix[_0x562475(0x1a6)]),_0x512ad7),'/'),_0x347a19[_0x562475(0x2bb)](proxy_url_prefix[_0x562475(0x1a6)]+0x5));return _0x347a19;}function _0x521e9b(_0x31a47b){const _0x537b32=_0x59bfa0,_0x291353={'HZKGu':_0x537b32(0x1da),'xzfBM':_0x537b32(0x1be),'KhyNr':function(_0x3097ed,_0x3b76df){return _0x3097ed+_0x3b76df;},'bgvPV':_0x537b32(0x32c),'BDKOH':function(_0x56c4b9,_0x5e9b32){return _0x56c4b9(_0x5e9b32);},'ukpfo':function(_0x51126d){return _0x51126d();},'hdfVO':function(_0x3860d0,_0x4f7b79){return _0x3860d0===_0x4f7b79;},'jGsQy':'hniOS','ZeMkF':_0x537b32(0x2fe),'KhWGc':function(_0x1cc9a0,_0x1d1cbf){return _0x1cc9a0===_0x1d1cbf;},'jyNWA':_0x537b32(0x2c5),'uDthr':'http'};if(!_0x31a47b||!_0x31a47b['startsWith'](proxy_url_prefix))return _0x291353[_0x537b32(0x294)](_0x291353[_0x537b32(0x2f9)],_0x291353[_0x537b32(0x2f9)])?'':_0x1868b;_0x31a47b=_0x31a47b[_0x537b32(0x2bb)](proxy_url_prefix[_0x537b32(0x1a6)]);if(_0x31a47b[_0x537b32(0x1d5)]('https/'))return _0x291353['ZeMkF'];else{if(_0x31a47b[_0x537b32(0x1d5)](_0x537b32(0x2ad))){if(_0x291353[_0x537b32(0x1f1)](_0x291353['jyNWA'],'vNWTf'))return _0x291353[_0x537b32(0x1ba)];else{const _0xc091fe=new _0x3528b3('function\\x20*\\x5c(\\x20*\\x5c)'),_0x24926f=new _0x17bf43(BYYUxU[_0x537b32(0x272)],'i'),_0x50fa7b=_0x2d6cd4(BYYUxU[_0x537b32(0x287)]);!_0xc091fe[_0x537b32(0x28e)](BYYUxU[_0x537b32(0x217)](_0x50fa7b,'chain'))||!_0x24926f[_0x537b32(0x28e)](_0x50fa7b+BYYUxU['bgvPV'])?BYYUxU[_0x537b32(0x330)](_0x50fa7b,'0'):BYYUxU[_0x537b32(0x21e)](_0x171e7d);}}}return'';}function _0x23f253(_0x2a5b7e){const _0x3c83f7=_0x59bfa0,_0x508b23={'ZPQOv':function(_0x4d5661,_0x2abbca){return _0x4d5661!==_0x2abbca;},'HnUuB':function(_0x1938de,_0x27c8ba){return _0x1938de+_0x27c8ba;},'lzbHM':function(_0x210314,_0x36f0ae){return _0x210314(_0x36f0ae);},'PTJLb':function(_0x3c85b8,_0x400a28){return _0x3c85b8===_0x400a28;},'CVKRh':_0x3c83f7(0x2fe),'dAtMU':_0x3c83f7(0x30a),'rQACB':function(_0x44f8ac,_0x34d4eb){return _0x44f8ac+_0x34d4eb;},'YaYVO':function(_0x189c44,_0x226a71){return _0x189c44+_0x226a71;},'cFcSS':'MMKic','FaCeL':_0x3c83f7(0x189),'QSKGl':_0x3c83f7(0x309),'ZJFzA':'padoT','anTuj':_0x3c83f7(0x2d2),'mYIsY':_0x3c83f7(0x192),'nHHIr':function(_0x4aac32,_0x535a1b){return _0x4aac32===_0x535a1b;},'HeSUm':_0x3c83f7(0x300),'uvBlA':_0x3c83f7(0x1df),'vdLhn':function(_0x279a99,_0x34481b){return _0x279a99+_0x34481b;}};if(!_0x2a5b7e||!_0x2a5b7e[_0x3c83f7(0x1d5)](config_proxy_url)){if(_0x508b23['PTJLb'](_0x508b23[_0x3c83f7(0x257)],_0x3c83f7(0x1b5)))return _0x2a5b7e;else{const _0x173631=_0x21d3f5(this[_0x3c83f7(0x218)][_0x3c83f7(0x320)]),_0x885c1=_0x173631[_0x3c83f7(0x254)](':');let _0x1f7c2c='';return _0x508b23[_0x3c83f7(0x230)](_0x885c1,-0x1)&&(_0x1f7c2c=_0x173631['substring'](_0x508b23['HnUuB'](_0x885c1,0x1))),_0x1f7c2c;}}let _0x263542=_0x2a5b7e[_0x3c83f7(0x2bb)](config_proxy_url[_0x3c83f7(0x1a6)]);_0x263542[_0x3c83f7(0x1d5)]('/')&&(_0x263542=_0x263542['substring'](0x1));let _0x250565=config_token_prefix;_0x250565[_0x3c83f7(0x1d5)]('/')&&(_0x508b23[_0x3c83f7(0x2f6)]!==_0x3c83f7(0x1c8)?_0x250565=_0x250565[_0x3c83f7(0x2bb)](0x1):_0x158eb1());_0x263542['startsWith'](_0x250565)&&(_0x3c83f7(0x32e)!=='IdwiJ'?_0x263542=_0x263542['substring'](_0x250565['length']):rTnKZi[_0x3c83f7(0x332)](_0x4e17c2,'0'));if(_0x263542[_0x3c83f7(0x1d5)](_0x508b23[_0x3c83f7(0x208)]))_0x508b23['PTJLb'](_0x508b23['ZJFzA'],_0x508b23[_0x3c83f7(0x30d)])?_0x3c3818=_0x3c83f7(0x2fe):_0x263542=_0x508b23[_0x3c83f7(0x22b)](_0x508b23[_0x3c83f7(0x1ce)],_0x263542[_0x3c83f7(0x2bb)](0x6));else{if(_0x263542[_0x3c83f7(0x1d5)](_0x3c83f7(0x2ad))){if(_0x508b23['nHHIr'](_0x508b23['HeSUm'],_0x508b23[_0x3c83f7(0x1ac)]))_0x263542=_0x508b23['uvBlA']+_0x263542[_0x3c83f7(0x2bb)](0x5);else{let _0x4e4c38=new _0x5a851f(_0x2f39d7,'gi');_0x1074d8=_0x28a1b3[_0x3c83f7(0x197)](_0x4e4c38,(_0x57b44f,_0x396620,_0x3a7825,_0x344832)=>{const _0x32e87f=_0x3c83f7;let _0xefd2b0;return _0x508b23[_0x32e87f(0x22f)](_0x3a7825,'//')?_0xefd2b0=_0x508b23[_0x32e87f(0x326)]:_0xefd2b0=_0x3a7825[_0x32e87f(0x197)](_0x508b23[_0x32e87f(0x246)],'')['toLowerCase'](),_0x508b23[_0x32e87f(0x22b)](_0x508b23[_0x32e87f(0x1fe)](_0x4ea857,_0xefd2b0)+'/',_0x344832);});}}else _0x263542=_0x508b23[_0x3c83f7(0x1fe)](_0x508b23[_0x3c83f7(0x282)](_0x508b23[_0x3c83f7(0x1fe)](proxy_real_protocol,_0x508b23['dAtMU']),proxy_real_host),'/')+_0x263542;}return _0x263542;}function _0x55dbec(_0x1ca1f1){const _0x38346a=_0x59bfa0,_0x2e7e9e={'hRnbe':function(_0x4df599,_0x28359b){return _0x4df599===_0x28359b;},'BAUTH':_0x38346a(0x2fe),'atMiO':'://','PbHII':function(_0x4bcf88,_0xd356a8){return _0x4bcf88+_0xd356a8;},'tkYfH':_0x38346a(0x337),'HBHHX':_0x38346a(0x213),'PJNkF':_0x38346a(0x288),'TxzkH':'mailto:','NxXyM':'about:','GEjAG':_0x38346a(0x19b),'qGEIP':_0x38346a(0x2ab),'acGyw':_0x38346a(0x1db),'GDAdS':_0x38346a(0x1ea),'VolxN':'tel:','LiDrD':_0x38346a(0x2c6),'aFkzg':_0x38346a(0x2f4),'USWrt':_0x38346a(0x338),'TJbuN':_0x38346a(0x248),'mZbNj':function(_0x2da6e3,_0x59e4fe){return _0x2da6e3!==_0x59e4fe;},'buteq':'TUJWQ','PuYCj':'CCHVb','SWPPy':function(_0x8e9780,_0x5be3c9){return _0x8e9780+_0x5be3c9;},'mrPQu':function(_0x507cc7,_0x18c5ad){return _0x507cc7+_0x18c5ad;},'RzdnT':function(_0x80a504,_0x4f7773){return _0x80a504+_0x4f7773;},'dAMgN':_0x38346a(0x2e5),'pMbDH':function(_0x5556b7,_0x2c6ee8){return _0x5556b7+_0x2c6ee8;}};if(!_0x1ca1f1||_0x1ca1f1['startsWith'](proxy_url_prefix))return _0x1ca1f1;if(_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e[_0x38346a(0x310)])||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e['PJNkF'])||_0x1ca1f1['startsWith'](_0x2e7e9e[_0x38346a(0x2f2)])||_0x1ca1f1[_0x38346a(0x1d5)]('#')||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e['NxXyM'])||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e[_0x38346a(0x340)])||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e[_0x38346a(0x1b7)])||_0x1ca1f1['startsWith'](_0x2e7e9e[_0x38346a(0x311)])||_0x1ca1f1['startsWith'](_0x2e7e9e[_0x38346a(0x316)])||_0x1ca1f1['startsWith'](_0x2e7e9e[_0x38346a(0x20e)])||_0x1ca1f1['startsWith'](_0x38346a(0x23a))||_0x1ca1f1[_0x38346a(0x1d5)]('view-source:')||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e['LiDrD'])||_0x1ca1f1['startsWith'](_0x2e7e9e[_0x38346a(0x314)])||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e['USWrt'])||_0x1ca1f1[_0x38346a(0x1d5)](_0x2e7e9e[_0x38346a(0x1f8)]))return _0x1ca1f1;_0x1ca1f1[_0x38346a(0x1d5)](config_proxy_url)&&(_0x1ca1f1=_0x1ca1f1[_0x38346a(0x2bb)](config_proxy_url['length']));const _0x13d3aa={'()(https?://|//)([^\\x5cs]+)':''};for(let _0x275ac0 in _0x13d3aa){if(_0x2e7e9e[_0x38346a(0x273)](_0x38346a(0x18c),_0x2e7e9e['buteq'])){let _0x17cc68=new RegExp(_0x275ac0,'gi');_0x1ca1f1=_0x1ca1f1[_0x38346a(0x197)](_0x17cc68,(_0x3ae4e5,_0x4e81eb,_0x1b702a,_0x278fda)=>{const _0x5a528d=_0x38346a;if(_0x2e7e9e[_0x5a528d(0x2e2)](_0x5a528d(0x1a2),_0x5a528d(0x2fc))){const _0x2bd1a1=_0xef3839(this[_0x5a528d(0x218)][_0x5a528d(0x320)],_0x11e72b);this[_0x5a528d(0x218)][_0x5a528d(0x320)]=_0x2bd1a1;}else{let _0x3c427f;return _0x2e7e9e[_0x5a528d(0x2e2)](_0x1b702a,'//')?_0x3c427f=_0x2e7e9e[_0x5a528d(0x25e)]:_0x3c427f=_0x1b702a['replace'](_0x2e7e9e[_0x5a528d(0x1a0)],'')[_0x5a528d(0x25a)](),_0x2e7e9e[_0x5a528d(0x2e3)](_0x2e7e9e[_0x5a528d(0x2e3)](_0x2e7e9e[_0x5a528d(0x2e3)](proxy_url_prefix,_0x3c427f),'/'),_0x278fda);}});}else _0x585f4a=_0x338f0d+_0x3efa85;}let _0x56aa08=config_proxy_url[_0x38346a(0x2bb)](config_proxy_url[_0x38346a(0x254)]('//'));_0x1ca1f1[_0x38346a(0x1d5)](_0x56aa08)&&(_0x2e7e9e[_0x38346a(0x2e2)](_0x2e7e9e['PuYCj'],_0x38346a(0x25c))?_0x5b3ce1[_0x38346a(0x27a)](_0x2e7e9e[_0x38346a(0x29b)],new _0x3d2d99()[_0x38346a(0x1c2)]()[_0x38346a(0x1c0)]()):_0x1ca1f1=_0x1ca1f1[_0x38346a(0x2bb)](_0x56aa08[_0x38346a(0x1a6)]));let _0x5723a7=_0x2e7e9e[_0x38346a(0x2b6)](_0x2e7e9e[_0x38346a(0x1fd)](proxy_url_prefix+proxy_real_protocol,'/'),proxy_real_host),_0x296a7d=proxy_url_prefix;if(_0x1ca1f1['startsWith']('//'))_0x1ca1f1=_0x2e7e9e[_0x38346a(0x31c)](_0x296a7d,_0x2e7e9e[_0x38346a(0x23b)])+_0x1ca1f1[_0x38346a(0x1ab)](0x2),_0x1ca1f1=_0x1ca1f1[_0x38346a(0x197)](_0x38346a(0x1bd),'/https');else _0x1ca1f1[_0x38346a(0x1d5)]('/')&&(_0x1ca1f1=_0x2e7e9e[_0x38346a(0x2d8)](_0x5723a7,_0x1ca1f1));return _0x1ca1f1;}var _0x17559d=['src',_0x59bfa0(0x320),_0x59bfa0(0x1de),_0x59bfa0(0x2be),_0x59bfa0(0x24f)],_0x417e57={'attributes':!![],'childList':!![],'subtree':!![],'attributeOldValue':!![],'characterDataOldValue':!![],'attributeFilter':_0x17559d};async function _0x4f2c2c(_0x582bae,_0x6639d6){const _0x53772a=_0x59bfa0,_0x480ce6={'qguZK':function(_0x3c634b,_0x5dcbc8){return _0x3c634b!==_0x5dcbc8;},'hENjo':'qCeax','LKBAP':'rxUTY','sluGW':function(_0x5ad5da,_0x449fde){return _0x5ad5da(_0x449fde);},'msBIG':function(_0x3f15ab,_0x27feaf){return _0x3f15ab instanceof _0x27feaf;},'swjcD':_0x53772a(0x1cc),'fcqdx':function(_0x15e839,_0x349480){return _0x15e839(_0x349480);},'LYAen':function(_0x258726,_0x25c93c){return _0x258726===_0x25c93c;},'uYiow':'script','mHovE':'integrity','etxlY':'pKPrK','Ljvdv':function(_0x49f34e,_0x38a501){return _0x49f34e!==_0x38a501;},'djGHq':_0x53772a(0x1b1),'GXdMt':_0x53772a(0x301)};_0x6639d6[_0x53772a(0x1f5)](),_0x582bae[_0x53772a(0x1c7)](_0x44dadd=>{const _0x42a474=_0x53772a,_0x5c55c5={'MPKav':function(_0x481fed,_0x1a6d37){return _0x481fed(_0x1a6d37);},'LWcVq':function(_0x4f067c,_0x40609e){return _0x480ce6['qguZK'](_0x4f067c,_0x40609e);},'FRtVC':function(_0x1d3653,_0x2ee35b){const _0x49763e=_0x5e3c;return _0x480ce6[_0x49763e(0x1e0)](_0x1d3653,_0x2ee35b);}};switch(_0x44dadd[_0x42a474(0x201)]){case _0x480ce6['swjcD']:let _0x20dc2c=_0x44dadd[_0x42a474(0x28b)]['getAttribute'](_0x44dadd[_0x42a474(0x2e0)]);if(_0x17559d[_0x42a474(0x284)](_0x44dadd['attributeName'])){let _0x22c40d=_0x480ce6['fcqdx'](_0x55dbec,_0x20dc2c);if(_0x480ce6['LYAen'](_0x44dadd[_0x42a474(0x28b)][_0x42a474(0x31e)][_0x42a474(0x25a)](),_0x480ce6[_0x42a474(0x2a0)])&&_0x44dadd['target'][_0x42a474(0x2f3)](_0x480ce6['mHovE'])){if(_0x480ce6['etxlY']===_0x42a474(0x238)){const _0x4977b6=_0x422ec3[_0x42a474(0x253)](_0x3be214,arguments);return _0x587c10=null,_0x4977b6;}else _0x44dadd[_0x42a474(0x28b)][_0x42a474(0x1b8)](_0x480ce6[_0x42a474(0x1aa)]);}if(_0x480ce6[_0x42a474(0x2f5)](_0x22c40d,_0x20dc2c)){if(_0x480ce6[_0x42a474(0x2a2)]!==_0x480ce6['djGHq']){if(!_0x5c55c5['FRtVC'](_0x3ecdb7,_0x1df952)||!_0x112554['hasAttribute'](_0x3a1432)||_0x208f90[_0x42a474(0x335)])return;_0x2c0161[_0x42a474(0x335)]=!![],_0x43f220[_0x42a474(0x2d7)](_0x42a474(0x1bf),function(_0x3e81e4){const _0x35add4=_0x42a474,_0xc85da5=_0x9f9b76[_0x35add4(0x293)](_0x3a322c),_0x2e16bd=_0x5c55c5['MPKav'](_0x1ad235,_0xb2e389[_0x35add4(0x293)](_0x210666));_0x5c55c5[_0x35add4(0x187)](_0x2e16bd,_0xc85da5)&&_0x2c81ff[_0x35add4(0x302)](_0x2238ab,_0x2e16bd);});}else _0x44dadd[_0x42a474(0x28b)][_0x42a474(0x302)](_0x44dadd[_0x42a474(0x2e0)],_0x22c40d);}}break;case _0x480ce6[_0x42a474(0x281)]:_0x44dadd[_0x42a474(0x236)][_0x42a474(0x1c7)](_0x3cbaa6=>{const _0x3740b9=_0x42a474,_0x36fb99={'NseiD':function(_0x150a40,_0x3594e3){return _0x150a40+_0x3594e3;},'SOOvR':function(_0x324425,_0xe2bd57){return _0x324425+_0xe2bd57;},'NDhjn':_0x3740b9(0x30a)};if(_0x480ce6[_0x3740b9(0x2dd)](_0x480ce6[_0x3740b9(0x2c9)],_0x480ce6[_0x3740b9(0x2f7)]))_0x480ce6['sluGW'](_0x50b0e9,_0x3cbaa6);else{const _0x359ad4=_0x36fb99['NseiD'](_0x36fb99['SOOvR'](_0x451131,_0x36fb99[_0x3740b9(0x1c1)]),_0xfd6916);return _0x359ad4;}});break;}}),_0x6639d6[_0x53772a(0x33e)](document[_0x53772a(0x276)],_0x417e57);}function _0x50b0e9(_0x300c4d){const _0x6b3a5e=_0x59bfa0,_0x1d4144={'HHLFI':_0x6b3a5e(0x31f),'CxcWY':_0x6b3a5e(0x1ae),'zwaBR':_0x6b3a5e(0x1fc),'gpEUT':_0x6b3a5e(0x1ee),'dLzCo':function(_0x17d44d,_0x385966){return _0x17d44d(_0x385966);},'ybQpa':function(_0x3bd3da,_0x28abdc){return _0x3bd3da===_0x28abdc;},'MyFVQ':_0x6b3a5e(0x202),'fwdTR':_0x6b3a5e(0x328),'IUpwG':function(_0x521cd7,_0x10bd8b){return _0x521cd7!==_0x10bd8b;},'SBuUg':'vUfKZ','UwmYa':function(_0x170bdf,_0x5c0e84){return _0x170bdf!==_0x5c0e84;},'RtUkp':_0x6b3a5e(0x322),'zPbuO':_0x6b3a5e(0x18d),'SAyLe':function(_0x580660,_0x2a840c){return _0x580660===_0x2a840c;},'HSObM':_0x6b3a5e(0x188),'QBlgC':_0x6b3a5e(0x278),'AJqrv':function(_0x15b7e7,_0x50e173){return _0x15b7e7===_0x50e173;},'EmFMS':function(_0x22f449,_0x369e51){return _0x22f449(_0x369e51);}};if(_0x300c4d['_traversed'])return;_0x300c4d[_0x6b3a5e(0x226)]=!![],_0x300c4d['childNodes'][_0x6b3a5e(0x1c7)](_0x17beda=>{_0x50b0e9(_0x17beda);});if(_0x1d4144[_0x6b3a5e(0x1d1)](_0x300c4d['nodeType'],Node[_0x6b3a5e(0x1e9)])){if(_0x1d4144[_0x6b3a5e(0x1cd)](_0x1d4144[_0x6b3a5e(0x227)],_0x6b3a5e(0x322))){_0x1e2bdf[_0x6b3a5e(0x240)](this,_0x4d7951,_0x3878f1,..._0x338eb5),this[_0x6b3a5e(0x1bc)](_0x1d4144['HHLFI'],_0x546fb0),this[_0x6b3a5e(0x1bc)](_0x1d4144[_0x6b3a5e(0x1a3)],_0x42123c);const _0x2fcb3e=_0x3e4d83(_0x78b63a[_0x6b3a5e(0x1b0)][_0x6b3a5e(0x320)],_0x13b38d,_0x1fb235);this[_0x6b3a5e(0x1bc)](_0x1d4144[_0x6b3a5e(0x1b4)],_0x2fcb3e),this['setRequestHeader'](_0x1d4144[_0x6b3a5e(0x1e1)],_0x17fa5c[_0x6b3a5e(0x324)][_0x6b3a5e(0x1a4)]);}else{if(_0x300c4d[_0x6b3a5e(0x293)](_0x1d4144['zPbuO'])){}const _0x33b698=_0x17559d;_0x33b698['forEach'](_0x461cfb=>{const _0x226c5f=_0x6b3a5e;if(_0x300c4d[_0x226c5f(0x2f3)](_0x461cfb)){let _0x2b1cca=_0x300c4d['getAttribute'](_0x461cfb),_0x41339b=_0x1d4144['dLzCo'](_0x55dbec,_0x2b1cca);_0x1d4144[_0x226c5f(0x1d1)](_0x300c4d[_0x226c5f(0x31e)]['toLowerCase'](),_0x1d4144[_0x226c5f(0x199)])&&_0x300c4d[_0x226c5f(0x2f3)](_0x1d4144[_0x226c5f(0x261)])&&_0x300c4d[_0x226c5f(0x1b8)](_0x1d4144['fwdTR']),_0x1d4144[_0x226c5f(0x2cf)](_0x41339b,_0x2b1cca)&&_0x300c4d[_0x226c5f(0x302)](_0x461cfb,_0x41339b);}});_0x1d4144[_0x6b3a5e(0x24c)](_0x300c4d[_0x6b3a5e(0x31e)][_0x6b3a5e(0x25a)](),_0x1d4144[_0x6b3a5e(0x2ec)])&&!_0x300c4d[_0x6b3a5e(0x244)]&&(_0x300c4d[_0x6b3a5e(0x244)]=!![],_0x300c4d[_0x6b3a5e(0x2d7)](_0x1d4144[_0x6b3a5e(0x30c)],function(){const _0x421dcd=_0x6b3a5e;if(_0x1d4144[_0x421dcd(0x21c)]===_0x421dcd(0x2b4)){if(_0x300c4d[_0x421dcd(0x275)]&&!_0x300c4d['contentDocument'][_0x421dcd(0x286)]){_0x300c4d[_0x421dcd(0x275)][_0x421dcd(0x286)]=!![],_0x1d4144[_0x421dcd(0x28a)](_0x50b0e9,_0x300c4d[_0x421dcd(0x275)]);let _0x4551a7=new MutationObserver(_0x4f2c2c);_0x4551a7[_0x421dcd(0x33e)](_0x300c4d[_0x421dcd(0x275)]['documentElement'],_0x417e57);}}else{_0x35fc75[_0x421dcd(0x1c5)](_0x421dcd(0x2c3));return;}}));if(_0x1d4144['AJqrv'](_0x300c4d[_0x6b3a5e(0x31e)][_0x6b3a5e(0x25a)](),_0x6b3a5e(0x188))){const _0x393e9c=_0x300c4d[_0x6b3a5e(0x275)];if(_0x393e9c&&!_0x393e9c['_observerSet']){_0x393e9c[_0x6b3a5e(0x286)]=!![],_0x1d4144['EmFMS'](_0x50b0e9,_0x393e9c);let _0x53173a=new MutationObserver(_0x4f2c2c);_0x53173a[_0x6b3a5e(0x33e)](_0x393e9c[_0x6b3a5e(0x276)],_0x417e57);}}}}}function _0x331320(){const _0x34082b=_0x59bfa0,_0x102de2={'FTgAi':function(_0x3e0fe2,_0x5a99d0){return _0x3e0fe2+_0x5a99d0;},'znUvq':_0x34082b(0x1df),'tHQeP':'HTWhX','wExgH':_0x34082b(0x24b),'ewFrC':function(_0x44f77d,_0x4c93f3){return _0x44f77d!==_0x4c93f3;},'qvbVD':_0x34082b(0x264),'YNZWd':_0x34082b(0x337),'mvZsR':function(_0x2b398e,_0x102287){return _0x2b398e!==_0x102287;},'PqNnJ':_0x34082b(0x2ea),'nsARr':_0x34082b(0x20f),'aGldg':function(_0x57ddac,_0x3ba8d2){return _0x57ddac<_0x3ba8d2;},'Jntxh':function(_0x2c42b9,_0x1cebcd){return _0x2c42b9-_0x1cebcd;},'mpyoX':function(_0x24817c,_0x9ff4ef){return _0x24817c*_0x9ff4ef;},'YvbNd':function(_0x519eff,_0x108daf){return _0x519eff*_0x108daf;},'fwpZd':'fixed','vFhod':_0x34082b(0x200),'XBEzE':_0x34082b(0x1bb),'SxxJt':_0x34082b(0x2e8),'RrveU':_0x34082b(0x1af),'AKpJj':_0x34082b(0x2fa),'oCYAY':_0x34082b(0x2ff),'vIxXy':'10000','WIJWa':'5px\\x200','qjpEC':_0x34082b(0x22c),'vujIO':_0x34082b(0x1c6),'pSikM':_0x34082b(0x232),'OsGEx':'10px','Vidqo':_0x34082b(0x274),'rnJyP':_0x34082b(0x1d3),'cBYys':'pointer','gsUDn':_0x34082b(0x334)};var _0x4c8bc8;if(_0x102de2[_0x34082b(0x2de)](typeof localStorage,_0x102de2[_0x34082b(0x21a)])){if(_0x102de2[_0x34082b(0x242)]!==_0x102de2[_0x34082b(0x2ca)])_0x4c8bc8=localStorage[_0x34082b(0x1a7)]('topBarLastShown');else{if(_0xf9b0d4){const _0x16967a=_0x59aa8e[_0x34082b(0x253)](_0x5937dd,arguments);return _0x48c760=null,_0x16967a;}}}else _0x4c8bc8=null;var _0x275c7d=new Date()[_0x34082b(0x1c2)]();if(_0x4c8bc8&&_0x102de2[_0x34082b(0x21f)](_0x102de2[_0x34082b(0x2dc)](_0x275c7d,parseInt(_0x4c8bc8)),_0x102de2[_0x34082b(0x1b9)](_0x102de2['YvbNd'](0x18,0x3c)*0x3c,0x3e8)))return;var _0x4a031a=document['createElement'](_0x34082b(0x2d4));_0x4a031a[_0x34082b(0x255)][_0x34082b(0x222)]=_0x102de2[_0x34082b(0x212)],_0x4a031a[_0x34082b(0x255)][_0x34082b(0x220)]='0',_0x4a031a[_0x34082b(0x255)][_0x34082b(0x1c4)]='0',_0x4a031a[_0x34082b(0x255)]['width']=_0x102de2['vFhod'],_0x4a031a['style']['backgroundColor']=_0x34082b(0x1ff),_0x4a031a[_0x34082b(0x255)][_0x34082b(0x25b)]=_0x102de2[_0x34082b(0x1fb)],_0x4a031a[_0x34082b(0x255)][_0x34082b(0x260)]=_0x102de2['SxxJt'],_0x4a031a[_0x34082b(0x255)]['fontSize']=_0x102de2['RrveU'],_0x4a031a[_0x34082b(0x255)][_0x34082b(0x21d)]=_0x102de2[_0x34082b(0x25f)],_0x4a031a[_0x34082b(0x255)]['fontWeight']=_0x102de2[_0x34082b(0x333)],_0x4a031a[_0x34082b(0x255)]['zIndex']=_0x102de2[_0x34082b(0x2da)],_0x4a031a[_0x34082b(0x255)][_0x34082b(0x30e)]=_0x102de2[_0x34082b(0x1e3)];var _0x2e10ab=document[_0x34082b(0x2cd)](_0x102de2[_0x34082b(0x1e8)]);_0x2e10ab[_0x34082b(0x2b3)]=_0x102de2[_0x34082b(0x2ce)],_0x2e10ab[_0x34082b(0x255)][_0x34082b(0x222)]=_0x102de2[_0x34082b(0x20c)],_0x2e10ab[_0x34082b(0x255)]['right']=_0x102de2[_0x34082b(0x2c8)],_0x2e10ab[_0x34082b(0x255)][_0x34082b(0x220)]=_0x102de2[_0x34082b(0x2f1)],_0x2e10ab[_0x34082b(0x255)][_0x34082b(0x2a5)]=_0x102de2['rnJyP'],_0x2e10ab[_0x34082b(0x255)][_0x34082b(0x2ed)]=_0x102de2[_0x34082b(0x29a)],_0x2e10ab[_0x34082b(0x255)]['fontSize']=_0x34082b(0x2fa),_0x2e10ab[_0x34082b(0x255)][_0x34082b(0x21d)]=_0x34082b(0x2fa),_0x2e10ab[_0x34082b(0x1dd)]=function(){const _0x1fd765=_0x34082b,_0x4c64a9={'rkcMJ':function(_0x9bd0b7,_0x547f52){const _0x317ab9=_0x5e3c;return _0x102de2[_0x317ab9(0x2b5)](_0x9bd0b7,_0x547f52);},'XSSPS':_0x102de2[_0x1fd765(0x2cb)]};if(_0x102de2['tHQeP']==='HTWhX')_0x4a031a[_0x1fd765(0x255)]['display']=_0x102de2['wExgH'],document['body'][_0x1fd765(0x255)]['marginTop']='0',_0x102de2[_0x1fd765(0x237)](typeof localStorage,_0x102de2[_0x1fd765(0x21a)])&&localStorage[_0x1fd765(0x27a)](_0x102de2[_0x1fd765(0x32b)],new Date()[_0x1fd765(0x1c2)]()['toString']());else return _0x6cefbe=_0x4c64a9[_0x1fd765(0x1e2)](_0x4c64a9['XSSPS'],_0x3adbef['substring'](0x5)),_0x583ee2;},_0x4a031a[_0x34082b(0x2b3)]=_0x102de2[_0x34082b(0x29f)],_0x4a031a['appendChild'](_0x2e10ab),document['body'][_0x34082b(0x23d)](_0x4a031a,document['body']['firstChild']),document[_0x34082b(0x2ef)]['style']['marginTop']=_0x102de2[_0x34082b(0x2b5)](_0x4a031a[_0x34082b(0x2f8)],'px');}var _0x5a22f4=new MutationObserver(_0x4f2c2c);_0x5a22f4['observe'](document[_0x59bfa0(0x276)],_0x417e57),document[_0x59bfa0(0x2d7)](_0x59bfa0(0x313),()=>{const _0x3e1cca=_0x59bfa0,_0x2de951={'mUQXZ':function(_0x134d4f,_0x49ebea){return _0x134d4f(_0x49ebea);},'trqkf':function(_0x3097d9){return _0x3097d9();}};_0x2de951[_0x3e1cca(0x27f)](_0x50b0e9,document[_0x3e1cca(0x276)]),_0x2de951['trqkf'](_0x331320);});function _0x1e2ad5(_0x146878,_0x2b7bf4){const _0x21806b=_0x59bfa0,_0x3b8f6a={'dgMQe':function(_0x42acbe,_0xd18dd9){return _0x42acbe(_0xd18dd9);},'SZYzD':function(_0x1d11ed,_0x3e8302){return _0x1d11ed instanceof _0x3e8302;}};if(!_0x3b8f6a[_0x21806b(0x26b)](_0x146878,HTMLElement)||!_0x146878[_0x21806b(0x2f3)](_0x2b7bf4)||_0x146878[_0x21806b(0x335)])return;_0x146878[_0x21806b(0x335)]=!![],_0x146878['addEventListener']('click',function(_0x18b047){const _0x2decd3=_0x21806b,_0x3442e4=_0x146878[_0x2decd3(0x293)](_0x2b7bf4),_0x2ee639=_0x3b8f6a[_0x2decd3(0x196)](_0x55dbec,_0x146878[_0x2decd3(0x293)](_0x2b7bf4));_0x2ee639!==_0x3442e4&&_0x146878[_0x2decd3(0x302)](_0x2b7bf4,_0x2ee639);});}function _0x395fad(_0x4174ae){const _0x31c7f5=_0x59bfa0,_0x46909b={'YDKyM':function(_0x59ff97,_0x45bc3a){return _0x59ff97+_0x45bc3a;},'GMVdc':_0x31c7f5(0x192),'kBpNS':function(_0x83088b,_0xbe06a2){return _0x83088b!==_0xbe06a2;},'rJMWC':_0x31c7f5(0x2c2),'MjGkT':function(_0x32395f,_0x4a80be){return _0x32395f!==_0x4a80be;},'EfbnC':_0x31c7f5(0x194),'NuJyF':function(_0x203439,_0x577a7c){return _0x203439(_0x577a7c);},'UtlBH':_0x31c7f5(0x1cf)};if(!(_0x4174ae instanceof HTMLFormElement)||!_0x4174ae[_0x31c7f5(0x2f3)](_0x31c7f5(0x1de))||_0x4174ae[_0x31c7f5(0x1f0)])return;_0x4174ae[_0x31c7f5(0x1f0)]=!![],_0x4174ae[_0x31c7f5(0x2d7)](_0x46909b[_0x31c7f5(0x290)],function(_0xcd5a9a){const _0x711861=_0x31c7f5;if(_0x46909b[_0x711861(0x241)](_0x46909b[_0x711861(0x292)],_0x711861(0x2c2)))return;else{if(!_0x4174ae||!_0x4174ae[_0x711861(0x279)]){if(_0x46909b[_0x711861(0x283)](_0x711861(0x2a9),_0x46909b[_0x711861(0x256)])){console['error'](_0x711861(0x2c3));return;}else return _0x4ae0ea=_0x46909b[_0x711861(0x2fd)](_0x46909b[_0x711861(0x2c1)],_0x3826a4[_0x711861(0x2bb)](0x6)),_0x172f4e;}_0xcd5a9a[_0x711861(0x306)](),_0xcd5a9a[_0x711861(0x28b)]['action']=_0x46909b[_0x711861(0x31d)](_0x55dbec,_0xcd5a9a[_0x711861(0x28b)]['action']),_0xcd5a9a[_0x711861(0x28b)][_0x711861(0x1cf)]();}});}function _0x3becfd(_0x51d4e0,_0x1ef424,_0x7054dc){const _0x3a71e7=_0x59bfa0,_0x1da0b8={'tyhcU':_0x3a71e7(0x191),'Dpvgb':_0x3a71e7(0x2df),'FHrfd':_0x3a71e7(0x243),'uMwdm':function(_0x4dfa37,_0xb16129){return _0x4dfa37===_0xb16129;},'PuYZA':'AbMBy','CEZaB':'PROXY_URL_HOST_MAP'};window[_0x3a71e7(0x2d5)]&&window[_0x3a71e7(0x2d5)][_0x3a71e7(0x2d6)]&&(_0x1da0b8[_0x3a71e7(0x252)](_0x1da0b8[_0x3a71e7(0x203)],_0x3a71e7(0x318))?window[_0x3a71e7(0x2d5)][_0x3a71e7(0x2d6)]['postMessage']({'type':_0x1da0b8[_0x3a71e7(0x30f)],'data':{'pathname':_0x51d4e0,'real_protocol':_0x1ef424,'real_host':_0x7054dc}}):(_0x1e4e86[_0x3a71e7(0x1ed)](_0x1da0b8[_0x3a71e7(0x185)],_0x4f782b[_0x3a71e7(0x251)],_0x1da0b8[_0x3a71e7(0x1ef)],_0x4df61c,_0x1da0b8[_0x3a71e7(0x267)],_0x23ab7a),_0x4f1daf[_0x3a71e7(0x2d5)]=_0x454ed6,_0x128068()));}function _0x3a4a60(){const _0x482aab=_0x59bfa0,_0x452046={'uwVcc':_0x482aab(0x2b8),'pMEyW':_0x482aab(0x2d3),'ixhLJ':_0x482aab(0x1b2)};if(!proxy_real_protocol||window[_0x482aab(0x233)]!==window[_0x482aab(0x220)])return;if(window[_0x482aab(0x2d5)]&&window[_0x482aab(0x2d5)][_0x482aab(0x2d6)]){if(_0x452046['pMEyW']!==_0x452046[_0x482aab(0x2b7)])return _0x452046[_0x482aab(0x1d8)];else window['proxy_worker_registration'][_0x482aab(0x2d6)][_0x482aab(0x250)]({'type':_0x452046['ixhLJ'],'data':{'protocol':proxy_real_protocol,'host':proxy_real_host}});}}_0x59bfa0(0x33a)in navigator&&navigator[_0x59bfa0(0x33a)]['getRegistrations']()[_0x59bfa0(0x211)](function(_0x47f261){const _0xcd011e=_0x59bfa0,_0x372c5f={'ZGkYl':function(_0x470979,_0x248cda){return _0x470979+_0x248cda;},'moUDP':function(_0x10a715,_0x55ef37){return _0x10a715+_0x55ef37;},'EcikU':_0xcd011e(0x1bd),'rxmHt':_0xcd011e(0x27d),'MrPph':function(_0x295ec6,_0x507fed){return _0x295ec6!==_0x507fed;},'ofniJ':'OCpmp','QcHsp':_0xcd011e(0x228),'rTMGt':_0xcd011e(0x299),'ugFnC':_0xcd011e(0x2c4),'fXVvI':_0xcd011e(0x24e),'LJgIC':_0xcd011e(0x191),'ehhkd':_0xcd011e(0x2df),'tzWYZ':function(_0xbf232c,_0x301a68){return _0xbf232c!==_0x301a68;},'PPTFH':_0xcd011e(0x1a5),'yNeAZ':_0xcd011e(0x2ba),'Vjunj':function(_0x208e67,_0x4bf582){return _0x208e67+_0x4bf582;},'zsxyE':_0xcd011e(0x278)};var _0x426b34=_0x47f261[_0xcd011e(0x26c)](function(_0x4a890d){const _0x3238a2=_0xcd011e;if(_0x372c5f[_0x3238a2(0x2ae)](_0x372c5f['ofniJ'],_0x372c5f[_0x3238a2(0x1e7)])){let _0x21d522=_0x4a890d[_0x3238a2(0x2d6)]&&_0x4a890d[_0x3238a2(0x2d6)]['scriptURL'][_0x3238a2(0x284)](_0x3238a2(0x1d6));_0x21d522&&(_0x372c5f[_0x3238a2(0x1ca)]===_0x372c5f[_0x3238a2(0x298)]?_0x20e48b=_0x2bc8c1[_0x3238a2(0x2bb)](0x1):(console[_0x3238a2(0x1ed)](_0x372c5f['fXVvI']),window[_0x3238a2(0x2d5)]=_0x4a890d,_0x3a4a60()));}else _0x722fb3=_0x372c5f['ZGkYl'](_0x372c5f['moUDP'](_0x3a6c9f,_0x3238a2(0x2e5)),_0x2e760b['slice'](0x2)),_0x49c8b3=_0x83e486[_0x3238a2(0x197)](_0x372c5f[_0x3238a2(0x307)],_0x372c5f['rxmHt']);});!_0x426b34&&window['addEventListener'](_0x372c5f[_0xcd011e(0x20b)],function(){const _0x39dd12=_0xcd011e,_0x592ff8={'fNhRJ':_0x372c5f[_0x39dd12(0x2e9)],'avOZR':_0x372c5f[_0x39dd12(0x312)],'ODsNO':_0x39dd12(0x243)};if(_0x372c5f[_0x39dd12(0x21b)]('EVsVN',_0x372c5f['PPTFH'])){if(window[_0x39dd12(0x2d5)]&&window['proxy_worker_registration'][_0x39dd12(0x2d6)]){if(_0x372c5f[_0x39dd12(0x27e)]==='BtMYA')return;else return;}navigator['serviceWorker'][_0x39dd12(0x234)](_0x372c5f[_0x39dd12(0x2a8)](_0x372c5f[_0x39dd12(0x2e7)](_0x372c5f[_0x39dd12(0x2e7)](_0x39dd12(0x235),proxy_real_protocol),_0x39dd12(0x1e6)),proxy_real_host))[_0x39dd12(0x211)](function(_0x25f1eb){const _0x417eb5=_0x39dd12;console[_0x417eb5(0x1ed)](_0x592ff8['fNhRJ'],_0x25f1eb[_0x417eb5(0x251)],_0x592ff8[_0x417eb5(0x2c7)],proxy_real_protocol,_0x592ff8[_0x417eb5(0x339)],proxy_real_host),window[_0x417eb5(0x2d5)]=_0x25f1eb,_0x3a4a60();},function(_0x5fb727){const _0x4dd0ed=_0x39dd12;console[_0x4dd0ed(0x1ed)](_0x4dd0ed(0x319),_0x5fb727);});}else _0x466cf4[_0x39dd12(0x302)](_0x3dfe98,_0x23f49b);});}),window[_0x59bfa0(0x1b0)]['pathname']['includes'](_0x59bfa0(0x271))&&setTimeout(()=>{const _0x585a9c=_0x59bfa0,_0x2452bd={'ZxKvx':'POST','yLanv':function(_0x18d9f3,_0x16f354,_0x115f2d){return _0x18d9f3(_0x16f354,_0x115f2d);},'kNoJO':'submit'};document[_0x585a9c(0x2bc)](_0x585a9c(0x219))[_0x585a9c(0x2d7)](_0x2452bd[_0x585a9c(0x193)],function(_0x499100){const _0x343cb8=_0x585a9c;_0x499100['preventDefault']();const _0x1a58ad=_0x499100[_0x343cb8(0x28b)][_0x343cb8(0x1de)],_0x3c4bfb=_0x499100[_0x343cb8(0x28b)][_0x343cb8(0x247)]||_0x2452bd[_0x343cb8(0x26d)],_0x4f49e6=new FormData(_0x499100[_0x343cb8(0x28b)]);let _0x51ebe3={};_0x2452bd[_0x343cb8(0x1e4)](fetch,_0x1a58ad,{'method':_0x3c4bfb,'body':_0x4f49e6,'headers':_0x51ebe3})[_0x343cb8(0x211)](_0x31ea52=>{const _0x96372a=_0x343cb8;window[_0x96372a(0x1b0)]['href']=_0x31ea52['url'];})[_0x343cb8(0x317)](_0x5118fb=>{const _0x4079eb=_0x343cb8;console[_0x4079eb(0x1c5)](_0x4079eb(0x239),_0x5118fb);});});},0xfa0),window['siteproxyAttributeChanged']=_0x4f2c2c,window[_0x59bfa0(0x336)]=_0x23f253,window['setProtocolFromProxyPrefixedURL']=_0x25249e,window['traverseAndModifyNode']=_0x50b0e9,window[_0x59bfa0(0x26f)]=_0x55dbec;}function _0x5e3c(_0x451885,_0x2a7fcd){const _0x13ab48=_0x4a6f();return _0x5e3c=function(_0x8af0a8,_0x2f1da2){_0x8af0a8=_0x8af0a8-0x184;let _0x4a6fa5=_0x13ab48[_0x8af0a8];return _0x4a6fa5;},_0x5e3c(_0x451885,_0x2a7fcd);}function _0x22e5cd(_0x577dca){const _0x429896=_0x59bfa0,_0x8febc6={'Jsovs':function(_0x5ddc90,_0x491cc9){return _0x5ddc90!==_0x491cc9;},'JOqXw':_0x429896(0x1f6),'kWDLy':function(_0x5104b6,_0x22e0da){return _0x5104b6===_0x22e0da;},'EmmzA':_0x429896(0x27b),'DyMiP':'gBraw','XLtIo':'string','LaqZJ':'while\\x20(true)\\x20{}','GgwsN':_0x429896(0x186),'xuajt':_0x429896(0x1ad),'StjYS':function(_0x5de9ad,_0x1474b9){return _0x5de9ad!==_0x1474b9;},'QtxqE':function(_0x614625,_0x572df8){return _0x614625+_0x572df8;},'iPLrG':function(_0xf01a17,_0xec2776){return _0xf01a17/_0xec2776;},'RmmyH':_0x429896(0x1a6),'IlTQb':function(_0x198ef5,_0x40ddce){return _0x198ef5%_0x40ddce;},'pkGvW':_0x429896(0x215),'neDAH':'action','vuRgc':'debu','qSIdI':_0x429896(0x1ec),'ONHNp':function(_0x4774b6,_0x5b863f){return _0x4774b6(_0x5b863f);},'AMAkW':_0x429896(0x321),'DmzYu':function(_0x2800f6,_0x4fb183){return _0x2800f6(_0x4fb183);}};function _0xe83447(_0x3ac36c){const _0x1d5519=_0x429896,_0x1691ef={'sxABi':function(_0x53427d,_0x3aea5e){return _0x53427d+_0x3aea5e;},'ZxgZJ':function(_0x30ed71,_0x5b74ce){return _0x8febc6['kWDLy'](_0x30ed71,_0x5b74ce);},'eXFxO':_0x8febc6[_0x1d5519(0x262)],'yJkAf':_0x8febc6['DyMiP']};if(typeof _0x3ac36c===_0x8febc6[_0x1d5519(0x2af)])return function(_0x43c501){}[_0x1d5519(0x1a1)](_0x8febc6[_0x1d5519(0x29c)])[_0x1d5519(0x253)](_0x8febc6[_0x1d5519(0x19d)]);else _0x8febc6[_0x1d5519(0x277)](_0x8febc6[_0x1d5519(0x325)],_0x1d5519(0x1ad))?_0x8febc6[_0x1d5519(0x280)](_0x8febc6['QtxqE']('',_0x8febc6[_0x1d5519(0x1fa)](_0x3ac36c,_0x3ac36c))[_0x8febc6['RmmyH']],0x1)||_0x8febc6[_0x1d5519(0x277)](_0x8febc6[_0x1d5519(0x323)](_0x3ac36c,0x14),0x0)?function(){const _0x44c0e0=_0x1d5519;return _0x1691ef[_0x44c0e0(0x18e)](_0x1691ef[_0x44c0e0(0x2a7)],_0x1691ef[_0x44c0e0(0x2cc)])?_0x1691ef[_0x44c0e0(0x1b6)](_0x1691ef[_0x44c0e0(0x1b6)](_0x1691ef[_0x44c0e0(0x1b6)](_0x10526b,_0x44c0e0(0x30a)),_0x211dab),_0x5cdecf):!![];}[_0x1d5519(0x1a1)](_0x8febc6[_0x1d5519(0x22d)](_0x1d5519(0x210),_0x8febc6[_0x1d5519(0x22a)]))[_0x1d5519(0x240)](_0x8febc6[_0x1d5519(0x190)]):function(){const _0x5eca9b=_0x1d5519;if(_0x8febc6[_0x5eca9b(0x1b3)](_0x5eca9b(0x268),_0x8febc6['JOqXw']))return![];else _0x2a53d4[_0x5eca9b(0x320)]=_0x104568;}[_0x1d5519(0x1a1)](_0x8febc6[_0x1d5519(0x22d)](_0x8febc6[_0x1d5519(0x225)],'gger'))[_0x1d5519(0x253)](_0x8febc6[_0x1d5519(0x31b)]):_0x42d70b=_0x498e01[_0x1d5519(0x2bb)](_0x1d2923[_0x1d5519(0x1a6)]);_0x8febc6['ONHNp'](_0xe83447,++_0x3ac36c);}try{if(_0x577dca)return _0xe83447;else _0x8febc6['StjYS'](_0x8febc6[_0x429896(0x270)],_0x429896(0x321))?_0x232c1c=_0x39d44c['substring'](0x1):_0x8febc6[_0x429896(0x297)](_0xe83447,0x0);}catch(_0x4d4876){}}";
var _0x21d498 = new _0x59ceec();
_0x369077() ? _0xa94ea8(_0x4a3ba9 => {
  console.log("node environment!!!");
  globalThis.proxy_url = _0x4a3ba9.proxy_url;
  globalThis.token_prefix = _0x4a3ba9.token_prefix;
  _0x21d498.use("*", async (_0x5b22cf, _0x2b2cef) => {
    if (_0x5b22cf.req.path.endsWith("siteproxy-response-injected.js")) {
      return _0x5b22cf.text(_0x502fdc, {
        headers: {
          "Content-Type": "application/javascript"
        }
      });
    }
    await _0x2b2cef();
  });
  _0x21d498.use("*", async (_0x45ce22, _0x43dd0b) => {
    await _0x43dd0b();
  });
  _0x21d498.use("*", async (_0x6e58fc, _0x365e12) => {
    await _0x365e12();
    _0x6e58fc.res.headers.delete("Content-Security-Policy");
    _0x6e58fc.res.headers.delete("Content-Security-Policy-Report-Only");
  });
  _0x21d498.use("*", _0x500dca);
  _0x21d498.use("*", _0x163e8d);
  _0x21d498.use("*", _0x34ed4e);
  _0x21d498.use("*", async (_0x4f450e, _0xd2f882) => {
    {
      try {
        await _0xd2f882();
      } catch (_0xa2bc89) {
        console.error("Error in middleware for " + _0x4f450e.req.url + ": " + _0xa2bc89.message);
        return _0x4f450e.text("Internal Server Error: " + _0xa2bc89.message, 500);
      }
    }
  });
  const _0x3f4460 = parseInt(_0x4a3ba9.local_listen_port);
  Promise.resolve().then(() => (_0x5b0f9a(), _0x11b19e)).then(({
    serve: _0x40ad32
  }) => {
    _0x40ad32({
      fetch: _0x21d498.fetch,
      port: _0x4a3ba9.local_listen_port
    }, _0x27e852 => {
      console.log("Listening on http://localhost:" + _0x27e852.port);
    });
  }).catch(_0x315d88 => console.error("Failed to import @hono/node-server:", _0x315d88));
}) : (_0x21d498.use("*", async (_0x41bfb9, _0x5cfd1a) => {
  if (_0x41bfb9.req.path.endsWith("siteproxy-response-injected.js")) {
    return _0x41bfb9.text(_0x502fdc, {
      headers: {
        "Content-Type": "application/javascript"
      }
    });
  }
  await _0x5cfd1a();
}), _0x21d498.use("*", async (_0x2d30aa, _0xe3568) => {
  globalThis.proxy_url = _0x2d30aa.env.proxy_url;
  globalThis.token_prefix = _0x2d30aa.env.token_prefix;
  await _0xe3568();
}), _0x21d498.use("*", async (_0x2324df, _0x16dd21) => {
  await _0x16dd21();
  _0x2324df.res.headers.delete("Content-Security-Policy");
  _0x2324df.res.headers.delete("Content-Security-Policy-Report-Only");
}), _0x21d498.use("*", _0x500dca), _0x21d498.use("*", _0x163e8d), _0x21d498.use("*", _0x34ed4e), _0x21d498.use("*", async (_0x5b4b42, _0x5ae6dc) => {
  try {
    {
      await _0x5ae6dc();
    }
  } catch (_0x361e33) {
    {
      console.error("Error in middleware for " + _0x5b4b42.req.url + ": " + _0x361e33.message);
      return _0x5b4b42.text("Internal Server Error: " + _0x361e33.message, 500);
    }
  }
}));
var _0x1e9adf = {
  fetch: _0x21d498.fetch
};