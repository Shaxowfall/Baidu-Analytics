/*
Baidu Analytics
Deobfuscated By: Shaxowfall
*/
(function () {
  var x = function (i, q) {
    i = i - 0;
    var u = b[i];
    if (x.THpaIa === undefined) {
      (function () {
        var y;
        try {
          var z = Function("return (function() {}.constructor(\"return this\")( ));");
          y = z();
        } catch (aa) {
          y = window;
        }
        if (!y.atob) {
          y.atob = function (ac) {
            var ad = String(ac).replace(/=+$/, "");
            var ae = "";
            var af = 0;
            var ag;
            var ah;
            for (var ai = 0; ah = ad.charAt(ai++); ~ah && (ag = af % 4 ? ag * 64 + ah : ah, af++ % 4) ? ae += String.fromCharCode(255 & ag >> (-2 * af & 6)) : 0) {
              ah = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(ah);
            }
            return ae;
          };
        }
      })();
      x.aNlMIa = function (aj) {
        var ak = atob(aj);
        var al = [];
        var am = 0;
        for (var an = ak.length; am < an; am++) {
          al += "%" + ("00" + ak.charCodeAt(am).toString(16)).slice(-2);
        }
        return decodeURIComponent(al);
      };
      x.PrVuvS = {};
      x.THpaIa = true;
    }
    var v = x.PrVuvS[i];
    if (v === undefined) {
      u = x.aNlMIa(u);
      x.PrVuvS[i] = u;
    } else {
      u = v;
    }
    return u;
  };
  var ao = {
    "define": function (aq) {
      this[aq.name] = aq;
    },
    "using": function (ar) {
      return this[ar];
    }
  };
  var as = {
    "name": "docReady",
    "ready": function (at) {
      var bd = function () {
        document.removeEventListener("DOMContentLoaded", bd);
        window.removeEventListener("load", bd);
        at();
      };
      if (document.readyState && document.readyState !== "loading") {
        setTimeout(at, 0);
      } else {
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", bd);
        }
        if (window.addEventListener) {
          window.addEventListener("load", bd);
        }
      }
    },
    onload: function (be) {
      var bo = function () {
        window.removeEventListener("load", bo);
        be();
      };
      if (document.readyState && document.readyState === "complete") {
        setTimeout(be, 0);
      } else if (window.addEventListener) {
        window.addEventListener("load", bo);
      }
    }
  };
  ao.define(as);
  var bp = {
    "name": "global",
    product: "pcSearchResult",
    smallTraffic: "0"
  };
  ao.define(bp);
  ao.define({
    "name": "util",
    "logUrl": "https://hector.baidu.com/static/h.gif",
    "send": function (bq, br) {
      var cw = this;
      var cy = new Date() / 1;
      var cs = new Image();
      window[cy] = cs;
      var co = [];
      for (var cp in bq) {
        if (bq.hasOwnProperty(cp)) {
          co.push(cp + "=" + encodeURIComponent(bq[cp]));
        }
      }
      var cn = co.join("&");
      if (cn === "") {
        return;
      }
      cn += "&t=" + cy;
      var cx = this.logUrl + "?" + cn;
      if (!br) {
        cs.onerror = function () {
          var cu = {
            "type": "imgError",
            dataLength: cn.length
          };
          cw.send(cu, true);
        };
      }
      cs.src = cx;
    },
    "arrayMap": function (cz, da, db) {
      var dg = [];
      for (var dh = 0; dh < cz.length; dh++) {
        dg.push(da.call(db, cz[dh], dh));
      }
      return dg;
    },
    "countTruthy": function (di) {
      var dn = 0;
      for (var dp = 0; dp < di.length; dp++) {
        if (di[dp]) {
          dn++;
        }
      }
      return dn;
    },
    "isArray": function (dq) {
      return Object.prototype.toString.call(dq) === "[object Array]";
    },
    "getStorage": function (dv) {
      try {
        return window.localStorage.getItem("ba_hector_" + dv);
      } catch (ea) {
        return;
      }
    },
    "setStorage": function (eb, ec) {
      try {
        window.localStorage.setItem("ba_hector_" + eb, ec);
      } catch (eh) {}
    },
    "isLuSmallTraffic": function () {
      var en = this.global;
      return en && en.product === "lu" && en.smallTraffic === "1";
    },
    "bind": function (ep, eq) {
      return function () {
        ep.apply(eq, arguments);
      };
    },
    "debounce": function (es, et) {
      var fc = null;
      return function () {
        var fd = this;
        if (fc) {
          clearTimeout(fc);
          fc = null;
        }
        fc = setTimeout(function () {
          es.apply(fd, arguments);
        }, et);
      };
    },
    "isSearchResultSmallTraffic": function () {
      var fj = this.global;
      return fj && fj.product === "searchResult" && fj.smallTraffic === "1";
    },
    "isPcSearchResultSmallTraffic": function () {
      var fr = this.global;
      return fr && fr.product === "pcSearchResult" && fr.smallTraffic === "1";
    },
    "isBaiduBox": function () {
      return navigator.userAgent.indexOf("baiduboxapp") > -1;
    },
    "isSjh": function () {
      var ga = this.global;
      return ga && ga.product === "sjh";
    }
  });
  var gb = {
    "name": "cookie",
    setItem: function (gc, gd, gf, gg) {
      var gu = "";
      if (gf) {
        var gt = new Date();
        gt.setTime(gt.getTime() + gf);
        gu = "; expires=" + gt.toGMTString();
      }
      var gv = "";
      if (gg) {
        gv = "; domain=" + gg;
      }
      document.cookie = gc + "=" + gd + gu + gv + "; path=/";
    },
    getItem: function (gw) {
      var hh = document.cookie ? document.cookie.split("; ") : [];
      var hi = {};
      for (var hj = 0; hj < hh.length; hj++) {
        var hk = hh[hj].split("=");
        var hl = hk.slice(1).join("=");
        if (hl[0] === "\"") {
          hl = hl.slice(1, -1);
        }
        var hm = decodeURIComponent(hk[0]);
        hi[hm] = decodeURIComponent(hl);
        if (gw === hm) {
          break;
        }
      }
      return gw ? hi[gw] : hi;
    }
  };
  ao.define(gb);
  var ke = {
    "name": "chromeVersion",
    "res": null,
    fnList: [
	{
    version: 41,
    "fnStr": "\"A quick fox\".includes(\"fox\")"
  },
	{
    version: 42,
    "fnStr": "var _x_axa = 41; var _x_oxo = { _x_axa }"
  },
	{
    version: 43,
    "fnStr": "return navigator.permissions !== undefined;",
    useReturn: true
  },
	{
    version: 44,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 45,
    "fnStr": "t_in => ({foo: bar})"
  },
	{
    version: 46,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 47,
    "fnStr": "[NaN].includes(NaN);requestIdleCallback(function(){});"
  },
	{
    version: 48,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 49,
    "fnStr": "var t_in = new Proxy({}, {})"
  },
	{
    version: 50,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 51,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 52,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 53,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 54,
    "fnStr": "Object.values({})"
  },
	{
    version: 55,
    "fnStr": "(async function(){});var tAuxButton = document.createElement(\"button\");return tAuxButton.onauxclick !== undefined;",
    useReturn: true
  },
	{
    version: 56,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 57,
    "fnStr": "\"abc\".padStart(0)"
  },
	{
    version: 58,
    "fnStr": "IntersectionObserver"
  },
	{
    version: 59,
    "fnStr": "createImageBitmap"
  },
	{
    version: 60,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 61,
    "fnStr": "var t_in = document.createElement(\"t_in\");t_in.scrollTo(0, 0)"
  },
	{
    version: 62,
    "fnStr": "\"A quick fox\".match(/(?<=quick)\\w+/)"
  },
	{
    version: 63,
    "fnStr": "onbeforeprint"
  },
	{
    version: 64,
    "fnStr": "ResizeObserver"
  },
	{
    version: 65,
    "fnStr": "PerformanceServerTiming"
  },
	{
    version: 66,
    "fnStr": "AbortController"
  },
	{
    version: 67,
    "fnStr": "BigInt(0)"
  },
	{
    version: 68,
    "fnStr": "var t_in1 = new Path2D();var t_in2 = new Path2D();t_in1.addPath(t_in2)"
  },
	{
    version: 69,
    "fnStr": "[].flat()"
  },
	{
    version: 70,
    "fnStr": "var t = new Date(Date.UTC(2019));var o = {year: \"numeric\"};var r = t.toLocaleDateString(\"zh-CN\", o);return r !== \"Invalid Date\"",
    useReturn: true
  },
	{
    version: 71,
    "fnStr": "globalThis === window"
  },
	{
    version: 72,
    "fnStr": "return Intl.ListFormat !== undefined;",
    useReturn: true
  },
	{
    version: 73,
    "fnStr": "return String.prototype.matchAll !== undefined;",
    useReturn: true
  },
	{
    version: 74,
    "fnStr": "return Intl.Locale !== undefined;",
    useReturn: true
  },
	{
    version: 75,
    "fnStr": "var _num_sep_ = 1_000"
  },
	{
    version: 76,
    "fnStr": "return Promise.allSettled !== undefined;",
    useReturn: true
  },
	{
    version: 77,
    "fnStr": "var _i_n_u_ = (1).toLocaleString(\"en-US\", {style: \"unit\", unit: \"meter-per-second\", unitDisplay: \"short\"})"
  },
	{
    version: 78,
    "fnStr": "return navigator.bluetooth.getAvailability !== undefined;",
    useReturn: true
  },
	{
    version: 79,
    "fnStr": "return XRFrame !== undefined;",
    useReturn: true
  },
	{
    version: 80,
    "fnStr": "var _o_c_v_ = {e:1}; var _o_c_ = _o_c_v_?.e;"
  },
	{
    version: 81,
    "fnStr": "return Intl.DisplayNames !== undefined;",
    useReturn: true
  },
	{
    version: 82,
    "fnStr": "return 1;",
    useReturn: true
  },
	{
    version: 83,
    "fnStr": "return \"requestVideoFrameCallback\" in HTMLVideoElement.prototype;",
    useReturn: true
  },
	{
    version: 84,
    "fnStr": "return !!WeakRef;",
    useReturn: true
  },
	{
    version: 85,
    "fnStr": "var _x_lao_a = 1; _x_lao_a ??= 0;"
  },
	{
    version: 86,
    "fnStr": "return !!document.fragmentDirective;",
    useReturn: true
  },
	{
    version: 87,
    "fnStr": "return !!Intl.Segmenter;",
    useReturn: true
  },
	{
    version: 88,
    "fnStr": "return \"shadowRoot\" in ElementInternals.prototype;",
    useReturn: true
  },
	{
    version: 89,
    "fnStr": "return !!self.ReadableByteStreamController;",
    useReturn: true
  },
	{
    version: 90,
    "fnStr": "return !!RegExp(\"x*\", \"d\").exec(\"x\").indices;",
    useReturn: true
  },
	{
    version: 91,
    "fnStr": "class U_in { #x = 0; a(o) { return #x in o; }}"
  },
	{
    version: 92,
    "fnStr": "return typeof [].at === \"function\";",
    useReturn: true
  };,
	{
    version: 93,
    "fnStr": "return !!AbortSignal.abort;",
    useReturn: true
  },
	{
    version: 94,
    "fnStr": "return !!scheduler.postTask;",
    useReturn: true
  },
	{
    version: 95,
    "fnStr": "return !!self.reportError;",
    useReturn: true
  },
	{
    version: 96,
    "fnStr": "return window.matchMedia(\"(prefers-contrast: less)\").media !== \"not all\";",
    useReturn: true
  },
	{
    version: 97,
    "fnStr": "return !!(new Array()).findLast;",
    useReturn: true
  },
	{
    version: 98,
    "fnStr": "return !!self.structuredClone;",
    useReturn: true
  },
	{
    version: 99,
    "fnStr": "return !!Intl.supportedValuesOf;",
    useReturn: true
  },
	{
    version: 100,
    "fnStr": "return !!AbortSignal.prototype.throwIfAborted;",
    useReturn: true
  },
	{
    version: 101,
    "fnStr": "return !!navigator.mediaCapabilities.encodingInfo;",
    useReturn: true
  },
	{
    version: 102,
    "fnStr": "return document.getElementsByTagName(\"body\")[0].inert !== undefined;",
    useReturn: true
  },
	{
    version: 103,
    "fnStr": "return !!AbortSignal.timeout;",
    useReturn: true
  },
  {
    version: 104,
    "fnStr": "return !!window.CropTarget;",
    useReturn: true
  }
  ],
    "test": function (kf, kg) {
      try {
        if (kg) {
          return new Function(kf)();
        }
        new Function(kf)();
        return true;
      } catch (kh) {
        return false;
      }
    },
    getData: function () {
      if (this.res) {
        return this.res;
      }
      var ks = this.fnList.length;
      var kt = [];
      for (var kv = 0; kv < ks; kv++) {
        var kx = this.fnList[kv];
        var ky = this.test(kx.fnStr, kx.useReturn);
        if (ky === true) {
          kt.push(1);
        } else if (ky === false) {
          kt.push(0);
        } else if (ky === 1) {
          kt.push(2);
        }
      }
      var ku = {
        chromeVersion: kt.join("")
      };
      this.res = ku;
      return this.res;
    }
  };
  ao.define(ke);
  ao.define({
    "name": "api",
    "product": "pcSearchResult",
    "logUrl": "https://hector.baidu.com/static/h.gif",
    "collectDataJs": "//hectorstatic.baidu.com/38671186615f1ba6.js",
    "bcpCollectDataJs": "//hectorstatic.baidu.com/f841097853e81e0f.js",
    "pcSearchResultCollectDataJs": "//hectorstatic.baidu.com/96c9c06653ba892e.js",
    "version": 30,
    "featureSegmentNum": 5,
    "numPerSegment": 30,
    "key2Prop": {
    "1": "f1",
    "2": "f2",
    "3": "f3",
    "4": "f4",
    "5": "f5",
    "6": "f6",
    "7": "f7",
    "8": "f8",
    "9": "f9",
    "10": "f10",
    "11": "f11",
    "12": "f12",
    "13": "f13",
    "14": "f14",
    "15": "f15",
    "16": "f16",
    "17": "f17",
    "18": "f18",
    "19": "f19",
    "20": "f20",
    "21": "f21",
    "22": "f22",
    "23": "f23",
    "24": "f24",
    "25": "f25",
    "26": "f26",
    "27": "f27",
    "28": "f28",
    "29": "f29",
    "30": "f30",
    "31": "f31",
    "32": "f32",
    "33": "f33",
    "34": "f34",
    "35": "f35",
    "36": "f36",
    "37": "f37",
    "38": "f38",
    "39": "f39",
    "40": "f40",
    "41": "f41",
    "42": "f42",
    "43": "f43",
    "44": "f44",
    "45": "f45",
    "46": "f46",
    "47": "f47",
    "48": "f48",
    "49": "f49",
    "50": "f50",
    "51": "f51",
    "52": "f52",
    "53": "f53",
    "54": "f54",
    "55": "f55",
    "56": "f56",
    "57": "f57",
    "58": "f58",
    "59": "f59",
    "60": "f60"
  },
    "isMobile": function () {
      return navigator.userAgent.indexOf("Mobile") !== -1 || navigator.userAgent.indexOf("Android") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1;
    },
    "isIPhone": function () {
      return navigator.userAgent.indexOf("iPhone;") > -1 && navigator.platform === "iPhone";
    },
    "isWin32": function () {
      return navigator.platform === "Win32";
    },
    "getFeaSegment": function () {
      var mj = this.featureSegmentNum * this.numPerSegment;
      var mk = [];
      for (var ml = 0; ml < mj; ml++) {
        if (ml % 2 === 0) {
          var mm = (ml + 2) / 2;
          if (this.key2Prop.hasOwnProperty(mm)) {
            mk.push(this[this.key2Prop[mm]]() ? 1 : 0);
          } else {
            mk.push(Math.floor(Math.random() * 2));
          }
        } else {
          mk.push(Math.floor(Math.random() * 2));
        }
      }
      return mk;
    },
    "getTimeSegment": function () {
      var nd = Math.round(+new Date() / 1000);
      var nc = parseInt("" + nd, 10).toString(2);
      var ne = nc.length;
      while (ne < 35) {
        nc = "0" + nc;
        ne++;
      }
      return nc.split("");
    },
    "getVersionSegment": function () {
      var np = parseInt("" + this.version, 10).toString(2);
      var nq = np.length;
      while (nq < 9) {
        np = "0" + np;
        nq++;
      }
      return np.split("");
    },
    "getParitySegment": function (nr) {
      var od = 0;
      var oe = nr.length;
      for (var og = 0; og < oe; og++) {
        od += parseInt(nr[og], 10);
      }
      return [od % 2];
    },
    "getEncodedBaHector": function (oh) {
      var pc = oh.join("");
      var pb = pc.length;
      var pe = "";
      var pf = "";
      for (var pd = 1; pd <= pb; pd++) {
        pe += pc[pd - 1];
        if (pd % 5 === 0) {
          pf += parseInt(pe, 2).toString(32);
          pe = "";
        }
      }
      return pf;
    },
    "getData": function () {
      if (typeof window.propertyIsEnumerable !== "function") {
        return false;
      }
      var pm = [];
      pm = pm.concat(this.getFeaSegment());
      pm = pm.concat(this.getTimeSegment());
      pm = pm.concat(this.getVersionSegment());
      pm = pm.concat(this.getParitySegment(pm));
      return this.getEncodedBaHector(pm);
    },
    "isSearchResultNeedCollectData": function () {
      var py = document.getElementsByClassName("ad-info");
      if (py.length === 0) {
        return false;
      }
      try {
        var pz = JSON.parse(py[0].innerHTML);
        if (typeof pz.adId === "undefined") {
          return false;
        }
      } catch (qa) {
        return false;
      }
      return Math.random() * 100 <= 10;
    },
    "loadCollectDataJs": function () {
      var qh = document.createElement("script");
      qh.defer = true;
      var qi = this.util;
      if (qi.isSearchResultSmallTraffic()) {
        qh.src = this.collectDataJs + "?v=1";
      } else {
        qh.src = this.collectDataJs;
      }
      document.body.appendChild(qh);
    },
    "loadBcpCollectDataJs": function () {
      var ql = document.createElement("script");
      ql.defer = true;
      ql.src = this.bcpCollectDataJs;
      document.body.appendChild(ql);
    },
    "loadPcSearchResultCollectDataJs": function () {
      var qt = document.createElement("script");
      qt.defer = true;
      var qs = this.util;
      if (qs.isPcSearchResultSmallTraffic()) {
        qt.src = this.pcSearchResultCollectDataJs + "?v=1";
      } else {
        qt.src = this.pcSearchResultCollectDataJs;
      }
      document.body.appendChild(qt);
    },
    "collectData": function () {
      var qy = this.window;
      var qz = this.navigator;
      var rb = this.extraDataNew;
      var ra = this.aes;
      var rj = this.util;
      var rf = this;
      rb.getData(function (rc) {
        var rd = {
          window: qy.getData(),
          navigator: qz.getData(),
          "extra": rc,
          "type": "access",
          product: rf.product
        };
        var rh = ra.encrypt(JSON.stringify(rd));
        var ri = {
          "d": rh
        };
        rj.send(ri);
      });
    },
    "collectE": function () {
      var rp = document.createElement("script");
      rp.src = "https://hector.baidu.com/a.js";
      rp.defer = true;
      document.body.appendChild(rp);
    },
    "f1": function () {
      return window.propertyIsEnumerable("outputMsg");
    },
    "f2": function () {
      return window.propertyIsEnumerable("exeSearchAndClick") || window.propertyIsEnumerable("OutSdk") && window.propertyIsEnumerable("WebSdk") || window.propertyIsEnumerable("StateManager");
    },
    "f3": function () {
      return window.propertyIsEnumerable("CefSharp");
    },
    "f4": function () {
      if (window.navigator && window.navigator.webdriver) {
        return true;
      }
      return false;
    },
    "f5": function () {
      if (this.isMobile()) {
        try {
          document.createEvent("TouchEvent");
          return false;
        } catch (sc) {}
        return true;
      }
      return false;
    },
    "f6": function () {
      return false;
    },
    "f7": function () {
      if (this.isMobile()) {
        try {
          if (window.msIsStaticHTML !== undefined) {
            return true;
          }
        } catch (sh) {}
      }
      return false;
    },
    "f8": function () {
      if (this.isMobile()) {
        try {
          if (window.msIsStaticHTML !== undefined || window.msWriteProfilerMark !== undefined) {
            return true;
          }
        } catch (sm) {}
      }
      return false;
    },
    "f9": function () {
      return window.propertyIsEnumerable("_phantom") || window.propertyIsEnumerable("callPhantom");
    },
    "f10": function () {
      return window.propertyIsEnumerable("jshost") && window.propertyIsEnumerable("doc_obj");
    },
    "f11": function () {
      for (var tf in window) {
        if (tf === "webkitStorageInfo") {
          continue;
        }
        try {
          if (typeof window[tf].get === "function" && window[tf].get.toString().indexOf("[native code]") > -1 && !isNaN(parseInt(window[tf].get("clickCount", ""))) && !isNaN(parseInt(window[tf].get("logicType", "")))) {
            return true;
          }
        } catch (tg) {}
      }
      return false;
    },
    "f12": function () {
      if (this.isMobile()) {
        try {
          new Function("new SharedArrayBuffer(8);")();
          if (navigator.permissions !== undefined) {
            return true;
          }
        } catch (tl) {}
      }
    },
    "f13": function () {
      return window.propertyIsEnumerable("__nightmare");
    },
    "f14": function () {
      return window.propertyIsEnumerable("_selenium") || window.propertyIsEnumerable("callSelenium") || window.propertyIsEnumerable("_Selenium_IDE_Recorder") || window.propertyIsEnumerable("__selenium_evaluate") || window.propertyIsEnumerable("__selenium_unwrapped");
    },
    "f15": function () {
      return window.propertyIsEnumerable("onWkeResize");
    },
    "f16": function () {
      return window.propertyIsEnumerable("clickTarget");
    },
    "f17": function () {
      return window.propertyIsEnumerable("__fnrthen_dd_") || window.propertyIsEnumerable("____rtc_onicecandidate");
    },
    "f18": function () {
      return window.propertyIsEnumerable("WebView");
    },
    "f19": function () {
      return navigator.hardwareConcurrency === 1;
    },
    "f20": function () {
      return (navigator.hardwareConcurrency < 0 || navigator.hardwareConcurrency > 12 && navigator.platform !== "Win32") && navigator.userAgent.indexOf("Baiduspider-render") === -1;
    },
    "f21": function () {
      if (this.isWin32()) {
        return navigator.userAgent.indexOf("Mobile") > -1;
      }
      return false;
    },
    "f22": function () {
      if (this.isWin32()) {
        return navigator.userAgent.indexOf("Windows") === -1;
      }
      return false;
    },
    "f23": function () {
      if (this.isWin32()) {
        return document.referrer.indexOf("://m.baidu.com") > -1;
      }
      return false;
    },
    "f24": function () {
      if (this.isWin32()) {
        return window.screen.width < 400 || window.screen.height < 400;
      }
      return false;
    },
    "f25": function () {
      if (this.isWin32()) {
        try {
          document.createEvent("TouchEvent");
          var vn = -1;
          if (typeof navigator.maxTouchPoints !== "undefined") {
            vn = navigator.maxTouchPoints;
          } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
            vn = navigator.msMaxTouchPoints;
          }
          if (vn !== 10) {
            return true;
          }
        } catch (vo) {}
      }
      return false;
    },
    "f26": function () {
      return navigator.platform === "iPhone" && navigator.userAgent.indexOf("iPhone") === -1;
    },
    "f27": function () {
      return navigator.platform.indexOf("Linux") === 0 && navigator.userAgent.indexOf("Linux") === -1 && navigator.userAgent.indexOf("Android") === -1;
    },
    "f28": function () {
      return navigator.oscpu !== undefined && navigator.userAgent.indexOf("Firefox") === -1;
    },
    "f29": function () {
      return navigator.userAgent.indexOf("Android") > -1 && navigator.platform.indexOf("Linux arm") === -1 && navigator.platform.indexOf("Linux aarch") === -1 && navigator.platform.indexOf("GNU/Linux arm") === -1 && navigator.platform.indexOf("GNU/Linux aarch") === -1 && navigator.platform.indexOf("iPhone") === -1 && navigator.userAgent.indexOf("sp9853i_1h10_vmm") === -1 && navigator.userAgent.indexOf("MI PAD 2") === -1 && navigator.userAgent.indexOf("N1 Build/A5CNB19") === -1;
    },
    "f30": function () {
      return window.propertyIsEnumerable("wb_js_object");
    },
    "f31": function () {
      try {
        if (navigator.__lookupGetter__("platform").toString().indexOf("[native code]") === -1) {
          return true;
        }
      } catch (ww) {}
      return false;
    },
    "f32": function () {
      try {
        if (navigator.__lookupGetter__("userAgent").toString().indexOf("[native code]") === -1) {
          return true;
        }
      } catch (xb) {}
      return false;
    },
    "f33": function () {
      return window.propertyIsEnumerable("agentWeb") && navigator.userAgent.indexOf("AgentWeb") === -1;
    },
    "f34": function () {
      return window.propertyIsEnumerable("JSBehavior");
    },
    "f35": function () {
      try {
        return window.navigator.platform === "Android" && window.navigator.maxTouchPoints === 1 && window.navigator.hardwareConcurrency === 32;
      } catch (xq) {}
      return false;
    },
    "f36": function () {
      if (typeof window.navigator.__proto__ === "undefined") {
        return false;
      }
      return !window.navigator.__proto__.propertyIsEnumerable("platform") && !window.navigator.__proto__.propertyIsEnumerable("hardwareConcurrency") && !window.navigator.__proto__.propertyIsEnumerable("maxTouchPoints") && window.navigator.platform === "Linux armv8" && window.navigator.hardwareConcurrency === 8 && window.navigator.maxTouchPoints === 5;
    },
    "f37": function () {
      return window.propertyIsEnumerable("_selenium") || window.propertyIsEnumerable("callSelenium") || window.propertyIsEnumerable("_Selenium_IDE_Recorder") || window.propertyIsEnumerable("__selenium_evaluate") || window.propertyIsEnumerable("__selenium_unwrapped") || window.propertyIsEnumerable("cdc_adoQpoasnfa76pfcZLmcfl_Array") || window.propertyIsEnumerable("cdc_adoQpoasnfa76pfcZLmcfl_Promise") || window.propertyIsEnumerable("cdc_adoQpoasnfa76pfcZLmcfl_Symbol");
    },
    "f38": function () {
      try {
        return window.chrome !== undefined && navigator.__lookupGetter__("platform").indexOf("() =>") === 0 && navigator.__lookupGetter__("userAgent").indexOf("() =>") === 0 && Intl.ListFormat !== undefined && String.prototype.matchAll === undefined;
      } catch (yn) {
        return false;
      }
    },
    "f39": function () {
      return window.propertyIsEnumerable("ydsq");
    },
    "f40": function () {
      return window.propertyIsEnumerable("windows");
    },
    "f41": function () {
      var zd = screen.width || 0;
      var zc = screen.height || 0;
      var ze = screen.availWidth || 0;
      var zf = screen.availHeight || 0;
      return zd === 0 && zc === 0 && ze === 0 && zf === 0;
    },
    "f42": function () {
      return window.devicePixelRatio === -1;
    },
    "f43": function () {
      var zs = false;
      if (navigator.userAgent.indexOf("Mobile") !== -1 || navigator.userAgent.indexOf("Android") !== -1 || navigator.userAgent.indexOf("Pad") !== -1) {
        try {
          document.createEvent("TouchEvent");
        } catch (zt) {
          if (!("ontouchstart" in window)) {
            zs = true;
          }
        }
      }
      return zs;
    },
    "f44": function () {
      return navigator.platform === "SunOS";
    },
    "f45": function () {
      return window.propertyIsEnumerable("QCefWidget");
    },
    "f46": function () {
      return window.propertyIsEnumerable("FHJS");
    },
    "f47": function () {
      return window.propertyIsEnumerable("myVideo");
    },
    "f48": function () {
      return window.propertyIsEnumerable("xjsObj");
    },
    "f49": function () {
      return window.propertyIsEnumerable("browserplugsR");
    },
    "f50": function () {
      return window.propertyIsEnumerable("mx_browser_obj");
    },
    "f51": function () {
      return window.propertyIsEnumerable("via_gm");
    },
    "bbDetectFuncEnabled": false,
    "bbSpam": false,
    "f52": function () {
      if (this.product !== "pcSearchResult") {
        return this.bbSpam;
      }
      if (this.bbDetectFuncEnabled) {
        return this.bbSpam;
      }
      this.bbDetectFuncEnabled = true;
      var aay = document.getElementById("kw");
      if (!aay) {
        return this.bbSpam;
      }
      if (typeof aay.addEventListener !== "function") {
        return this.bbSpam;
      }
      var abg = this;
      var aaz = function () {
        try {
          if (aay.style.backgroundColor === "red" && window.ele) {
            abg.bbSpam = true;
            var abh = abg.getData();
            var abi = this.cookie;
            abi.setItem("BA_HECTOR", abh, 86400000, ".baidu.com");
          }
        } catch (abj) {}
      };
      aay.addEventListener("focusout", aaz);
      return this.bbSpam;
    },
    "f53": function () {
      return window.propertyIsEnumerable("fbrowser");
    },
    "f54": function () {
      return window.propertyIsEnumerable("yujianobj");
    },
    "f55": function () {
      return window.propertyIsEnumerable("ChromePlus") && (window.propertyIsEnumerable("aesde") || window.propertyIsEnumerable("aesen") || window.propertyIsEnumerable("smd5"));
    },
    "f56": function () {
      return window.propertyIsEnumerable("globalObserver") && window.propertyIsEnumerable("onpointerrawupdate");
    },
    "f57": function () {
      if (this.isMobile() && !this.isIPhone()) {
        try {
          if (typeof String.prototype.includes === "function" && navigator.plugins !== undefined && navigator.plugins.length > 0) {
            return true;
          }
        } catch (aca) {}
      }
      return false;
    },
    "shouldBeExclude": function () {
      if (window.propertyIsEnumerable("HwDevice")) {
        return true;
      }
      try {
        var acf = navigator.userAgent.match(/SamsungBrowser\/([^.]*)/);
        if (acf) {
          return acf[1] >= 14;
        }
      } catch (acg) {
        return true;
      }
      return false;
    },
    "f58": function () {
      try {
        var acn = this.chromeVersion;
        var aco = acn.getData().chromeVersion;
        return this.isIPhone() && !this.shouldBeExclude() && aco.length >= 30 && aco.slice(0, 30).indexOf("0") < 0;
      } catch (acp) {}
      return false;
    },
    "f59": function () {
      return window.propertyIsEnumerable("runCustomCmdByResult");
    },
    "f60": function () {
      try {
        return this.isWin32() && navigator.userAgent.indexOf("Mobile") > -1 && navigator.__lookupGetter__("vendor").toString().indexOf("[native code]") === -1 && navigator.__lookupGetter__("plugins").toString().indexOf("[native code]") === -1 && navigator.__lookupGetter__("mimeTypes").toString().indexOf("[native code]") === -1 && navigator.__lookupGetter__("languages").toString().indexOf("[native code]") === -1;
      } catch (ada) {}
      return false;
    }
  });
  try {
    var docReady = this.docReady;
    var util = this.util;
    var api = this.api;
    var cookie = this.cookie;
    if (api.product === "searchResult" || api.product === "pcSearchResult") {
      var oldHectorCookie = cookie.getItem("BA_HECTOR");
      if (!oldHectorCookie) {
        var newHectorCookie = api.getData();
        cookie.setItem("BA_HECTOR", newHectorCookie, 86400000, ".baidu.com");
        if (api.collectE) {
          api.collectE();
        }
        if (docReady) {
          docReady.onload(function () {
            if (api.product === "pcSearchResult") {
              if (api.loadPcSearchResultCollectDataJs) {
                api.loadPcSearchResultCollectDataJs();
              }
            } else if (api.loadCollectDataJs) {
              api.loadCollectDataJs();
            }
          });
        }
      }
    } else {
      var newHectorCookie = api.getData();
      cookie.setItem("BA_HECTOR", newHectorCookie, 3600000, ".baidu.com");
      if (api.product === "lu" || api.product === "bcp" || api.product === "tieba") {
        api.collectE();
      }
      if (api.product === "lu" || api.product === "tieba") {
        docReady.onload(function () {
          api.collectData();
        });
      } else if (api.product === "bcp") {
        docReady.onload(function () {
          api.loadBcpCollectDataJs();
        });
      }
    }
  } catch (adf) {
    if (typeof util.send === "function") {
      var adg = {
        "type": "jsError",
        product: api.product,
        "stack": adf.stack || "",
        errMsg: adf.message || "",
        version: api.version
      };
      util.send(adg);
    }
  }
})();
