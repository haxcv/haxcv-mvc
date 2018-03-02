/**
MIT License
Copyright (c) 2018 haxcv
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://haxcv.org

*/


(function(){ 

  var o = arguments[0]();

     if(o.status)
     {
       // check if everything  is ok 
           window.obj = new o.services();
            obj.__domReady();
            window.haxcv = obj;
            window.Vum = obj;
            window.Router = obj;     
     }else{
      // disable repeating for best performance 
      console.warn('haxcv is already running '); 
     }
  


})(function(){


    function App() {
    this.type = {};
    this.Event = {};
    this.Evt = [];
    this.Events = [];
    this.scM = [];
    this.scH = [];
    this.cache = [];
    this.loc = location.href;
    this.temp = [];
    this.tempURL = [];
    this.refrence = [];
    
    }

    App.prototype = {
    device: function () {
      var t,
      e = win.width();
      win.height();
      device = t = e > 1000 ? 'PC' : e > 800 ? 'TAB' : e > 600 ? 'TAB' : e > 400 ? 'MOB' : 'MIN';
      return device;
    },
    require: function (e) {
      try {
        return this.compile(_(e).html() || '');
      } catch (er)
      {
        return er;
      }
    },
    parseDef: function ()
    {
      function stop() {
        df = '';
      }
      var o = this;
      var jsH = {
        refrence: [],
        print: function () {
          df += arguments[0];
        },
        require: function (e) {
          return o.compile(_(e).html() || '');
        },
        createComponent: function (jsn) {
          var com = newElm(jsn.name);
          var i = 1;
          if (jsn.attr)
          {
            for (var k in jsn.attr)
            {
              com.setAttribute(k, jsn.attr[k]);
            }
          }
          var js = {
          };
          var ran = Math.random().toString().split('.') [1];
          var ref = (parseInt(ran) / 100000000).toString();
          js[jsn.name] = jsn.name;
          js.ref = ref.substring(ref.length - 5, ref.length);
          com.setAttribute('refrence', js.ref);
          com.innerHTML = jsn.html || '';
          this.parent = com.innerHTML;
          js.el = com;
          this.refrence.push(js);
          o.refrence.push(js);
          return com.outerHTML;
        }
      }
      var t,
      e,
      a,
      nd,
      reg;
      var DefData = (arguments[0] ? arguments[0] : '');
      DefData = DefData.replace(/\n/g, '/*f909*/');
      var defPattern = this.explode('def', DefData);
      if (defPattern == null) return DefData;
      for (var i = 0; i < defPattern.length; i++) {
        var df = '';
        t = defPattern[i];
        e = t.substring(2, t.length - 2);
        e = e.replace(/"/g, '"');
        e = e.replace(/'/g, '"');
        e = e.replace(/{{/g, 'df+=\'');
        e = e.replace(/}}/g, '\';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
        e = e.replace(/&lt;/g, '<');
        e = e.replace(/&gt;/g, '>');
        a;
        nd = '';
        try {
          a = eval(e);
        } catch (er) {
          var len = e.split('/*f909*/');
          var line = er.lineNumber;
          var lineN = Math.floor(Math.abs(er.columnNumber / len.length));
          lineN = lineN < 1 ? 1 : lineN;
          a = ' ' + er.message + ' on line ' + lineN;
        } finally {
        }
        a = a.replace(/;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/g, '');
        DefData = DefData.replace(t, a == undefined ? '' : a);
      }
      return DefData.replace(/df\+=/g, '');
    },
    parseObj: function ()
    {
      var t,
      e,
      a,
      nd,
      reg;
      var ObjData = arguments[0] ? arguments[0] : '';
      var strPattern = this.explode('str', ObjData);
      if (strPattern == null) return ObjData;
      var item = 0;
      for (var i = 0; i < strPattern.length; i++) {
        t = strPattern[i];
        e = t.substring(2, t.length - 2);
        a;
        nd = '';
        try {
          a = eval(e);
          var reg = new RegExp(t, 'ig');
          ObjData = ObjData.replace(t, a);
        } catch (er) {
          a = '';
          reg = new RegExp(t, 'ig');
          ObjData = ObjData.replace(reg, a);
        } finally {
        }
      }
      item = 0;
      return ObjData;
    },
    compile: function ()
    {
      var d1 = this.parseObj(arguments[0] ? arguments[0] : '').replace(/%}/g, ' {{}}; %}'),
      d2 = this.parseDef(d1);
      return d2.replace(/\/\*f909\*\//g, '\n');
    },
    explode: function ()
    {
      var Reg = {
        str: /{@(.*?)@}/g,
        def: /{%(.*?)%}/g,
        vim: /{{(.*?)}}/g,
      }
      try {
        return arguments[1].match(Reg[arguments[0]]);
      } catch (e) {
      } finally {
      }
    },
    __Void: function ()
    {
      return '';
    },
    module: function ()
    {
      var em,
      sc,
      cs,
      $scp;
      var ctrl = arguments[0] || '__Void',
      fun = arguments[1] || '__Void';
      if (!eval('typeof ' + ctrl + ' == "object"')) {
        eval('window["' + ctrl + '"] = {}');
      } else {
      }
      em = this.__ctrl(ctrl);
      if (em.length == 0) return;
      $scp = eval(ctrl);
      sc = em[0].querySelectorAll('*[v-scope]');
      for (var i = 0; i < sc.length; i++) {
        cs = this.isAttr(sc[i], 'v-scope');
        if (cs && !empty(cs))
        {
          $scp[cs] = '';
          //sc[i].setAttribute("v-scope" , (cs).replace(/ /g , '') )
        }
      }
      var scr = ctrl;
      var http = {
        source: ctrl,
        render: function (arg) {
          var el = document.querySelector(arg.source);
          var source = el.innerHTML;
          _('*[fn-module=' + this.source + ']').html(obj.compile(source));
          console.log($scp)
        },
        parse: function (url, inial, fun) {
          var data = '';
          Obj.Ajax({
            url: url,
            data: '',
            source: this.source,
            method: 'GET',
            info: function (data) {
              var scp = eval(ctrl + ' =  ' + arguments[0]);
              var el = document.querySelector(inial || 'fdskopl');
              var source = el.innerHTML;
              obj.__Entry('fn-module=' + this.source, source);
              if (function_exists(fun)) {
                fun(scp);
              }
            }
          });
          return this;
        }
      };
      fun(http);
      return this;
    },
    __Entry__: function (sel, data)
    {
      var elm = newElm('div');
      elm.innerHTML = data;
      this.__fnApp(elm.querySelectorAll('*[fn-init]'));
      setTimeout(function () {
        _(sel).html(elm.innerHTML);
      }, 1);
    },
    __Entry: function ()
    {
      var el = newElm('script');
      var bn = newElm('button');
      el.type = 'application/babel';
      el.innerHTML = arguments[1];
      el.setAttribute('fn-f9', '');
      bn.setAttribute('fn-copy', 'fn-f9');
      if (arguments[2] == 'append') {
        bn.setAttribute('fn-append', 'fn-f9');
      }
      bn.setAttribute('fn-click', arguments[0] || '');
      setTimeout(function () {
        document.body.appendChild(el);
        document.body.appendChild(bn);
        bn.click();
        document.body.removeChild(bn);
        document.body.removeChild(el);
      }, 30);
    },
    __ctrl: function ()
    {
      return _('*[fn-module=' + (arguments[0] || '0xf9') + ']').el;
    },
    __getVal: function (e) {
      var target = e.target.nodeType == 3 ? e.target.parentElement : e.target;
      var sc = (this.isAttr(target, 'fn-script'));
      var vl = (this.isAttr(target, 'fn-value'));
      var ht = (this.isAttr(target, 'fn-call'));
      var cp = (this.isAttr(target, 'fn-copy'));
      var em = target;
      var me = em;
      var before = em.previousElementSibling;
      var after = em.nextElementSibling;
      var par = em.parentElement;
      var vls = '';
      try {
        switch (typeof sc) {
          case 'string':
            if (!empty(sc)) {
              vls = _('script[' + sc + ']').html();
            }
            break;
          default:
            vls = e.type == 'selectstart' ? e.target.nodeValue : e.this[e.this.el.value != undefined ? 'value' : 'html']();
            if (ht) {
              try
              {
                vls = eval(ht);
              } catch (error) {
                vls = vls;
              }
            } else {
              vls = e.type == 'selectstart' ? e.target.nodeValue : e.this[e.this.el.value != undefined ? 'value' : 'html']();
            }
        }
        if (cp) {
          if (!empty(cp)) {
            var el = _('*[' + cp + ']').el;
            var d = '';
            for (var i = 0; i < el.length; i++) {
              var vem = el[i].value != undefined && el[i].nodeName != 'BUTTON' ? 'value' : 'innerHTML';
              d += el[i][vem];
            }
            vls = d;
          }
      }
    } catch (er) {
    } finally {
    }
    return vls;
    },
    __spa: function (e)
    {
    var url = e.target.href || '';
    var ta = e.target.getAttribute('href');
    var mn = tar;
    var an = document.activeElement;
    if (!an.href) return;
    var tar = an.getAttribute('fn-spa') || 'fs43fgf';
    try {
      history.pushState({
        href: an.href
      }, '', an.href);
    } catch (er) {
    }
    this.loc = an.href;
    var p = this;
    Obj.Ajax({
      url: document.activeElement.href,
      data: {
        spa: 'enabled'
      },
      method: 'GET',
      before: function () {
        var be = p.isAttr(_('*[' + tar + ']').el[0], 'fn-before');
        if (be) {
          var s = be + '()';
          eval(s);
        }
      },
      progress: function (a, b, c) {
        try {
          var fun = p.isAttr(_('*[' + tar + ']').el[0], 'fn-progress');
          if (fun) {
            var s = fun + '(' + a + ', ' + b + ' , "' + c + '")';
            eval(s);
          }
        } catch (er) {
        } finally {
        }
      },
      info: function (data) {
        var el = newElm('div');
        el.innerHTML = data;
        p.__fnApp(el.querySelectorAll('*[fn-init]'));
        _('*[' + tar + ']').html(el.innerHTML);
        var af = p.isAttr(_('*[' + tar + ']').el[0], 'fn-after');
        if (af) {
          var s = af + '()';
          eval(s);
        }
        p.__setSPA();
        p.__setEvents();

      }
    })
    },
    __EventHandler: function () {
    var em,
    ems,
    t,
    d2,
    d,
    type,
    evt;
    evt = this.Event[arguments[1] ? arguments[1] : ''];
    type = this.type[arguments[0] ? arguments[0] : ''];
    type = type ? type : '';
    if (evt == undefined) return;
    if (type == undefined) return;
    var s = 0;
    var p = this;
    document.querySelector('*').addEventListener(arguments[1], function (e) {
      var target = e.target.nodeType == 3 ? e.target.parentElement : e.target;
      var me = target;
      var before = target.previousElementSibling;
      var after = target.nextElementSibling;
      var par = target.parentElement;
      e.this = _(target);
      t = _(target).attr(type);
      t = typeof t == 'object' ? _(target).attr(type.substring(2, type.length - 1))  : t;
      if (typeof t != 'string') {
        return
      };
      d = p.__getVal(e);
      if (empty(t)) {
        p.__render(e, e.this, d2, d);
      } else {
        em = _('*[' + t + ']').el;
        if (em.length == 0) {
          p.__render(e, newElm('sc'), d2, d);
        }
        for (var ip = 0; ip < em.length; ip++) {
          p.__render(e, em[ip], d2, d);
        }
      }      

    });
    },
    __render: function (e, em, d2, d) {
    var ems,
    t,
    type,
    evt,
    me;
    var target = e.target.nodeType == 3 ? e.target.parentElement : e.target;
    ems = target.value ? 'value' : 'innerHTML';
    var vem = em.value ? 'value' : 'innerHTML';
    var vm = em[vem];
    if (ems == 'value') {
      d2 = target.hasAttribute('fn-jsh') ? this.compile(d)  : d;
    } else {
      d2 = target.hasAttribute('jsh-disabled') ? d : this.compile(d);
    }
    if (target.hasAttribute('fn-append'))
    {
      var spn = newElm('span');
      spn.innerHTML = d2;
      em['appendChild'](spn);
      em['value'] += d2;
    } else {
      em['value'] = d2;
      em['innerHTML'] = d2;
    }
    // me = em;

    var me = em;
    var before = em.previousElementSibling;
    var after = em.nextElementSibling;
    var par = em.parentElement;
    var store = this.isAttr(target, 'fn-store');
    var exec = this.isAttr(target, 'fn-exec');
    this.__Define([_(target).el]);
    try {
      var acp = this.isAttr(em, 'e-accept');
      if (acp) {
        eval(acp);
      }
      var acp = this.isAttr(em, 'e-newData');
      if (acp && d2 != vm) {
        eval(acp);
      }
    } catch (er) {
    }
    if (exec) {
      try {
        var me = target;
        var before = target.previousElementSibling;
        var after = target.nextElementSibling;
        var par = target.parentElement;
        eval(exec);
      } catch (er) {
      }
    }
    if (store)
    {
      try {
        define(store, d2);
        var tr = eval(store + ' = "' + d2 + '"');
      } catch (er) {
      } finally {
      }
    }
    this.__formAjax();
    },
    isAttr: function ()
    {
    var e;
    try {
      e = arguments[0].getAttribute(arguments[1]) || false;
    } catch (er) {
      e = false;
    }
    return e;
    },
    __formAjax: function () {
    _(Ajax).Form(_('form[fn-ajax]'), {
      before: function (e) {
        var bf = e.target.getElementsByTagName('ajax::before') [0];
        try {
          eval(_(bf).attr('fn-js')) (e);
        } catch (er) {
        }
      },
      after: function (e) {
        var bf = e.target.getElementsByTagName('ajax::after') [0];
        try {
          eval(_(bf).attr('fn-js')) (e);
        } catch (er) {
        }
      },
      Exception: function (e) {
        var bf = e.target.getElementsByTagName('ajax::Exception') [0];
        try {
          return eval(_(bf).attr('fn-js')) (e);
        } catch (er) {
          return true;
        }
      },
      info: function (data, e) {
        var bf = e.target.getElementsByTagName('ajax::success') [0];
        try {
          eval(_(bf).attr('fn-js')) (data, e);
        } catch (er) {
        }
      }
    });
    },
    __setEvents: function () {
    var el = _('*').el;
    var attr,
    t,
    p = [
    ],
    ev = {
    };
    for (var i = 0; i < el.length; i++) {
      attr = el[i].attributes;
      for (var I = 0; I < attr.length; I++) {
        t = attr[I].name;
        if (in_array(this.Events, t))
        {
          ev[t.split('-') [1]] = t;
        }
      }
    }
    for (var k in ev)
    {
      if (!in_array(this.Evt, k)) {
        this.__EventHandler(k, k);
        this.Evt.push(k);
      }
    }
    },
    __setSPA: function () {
    var p = this;
    document.body.addEventListener('click', function (e) {      
      if (document.activeElement.nodeName == 'A') {
        if (p.isAttr(document.activeElement, 'fn-spa')) {
          e.preventDefault();
          p.__spa(e);
        }
      }
    });
    },
    __proccess: function () {
    for (var k in window)
    {
      var n = k.substring(0, 2) == 'on' ? true : false;
      if (n) {
        var ns = k.substring(2, k.length);
        this.type[ns] = 'fn-' + ns;
        this.Event[ns] = ns;
        this.Events.push('fn-' + ns);
      }
    }
    this.__setEvents();
    this.__formAjax();
    },
    __setRegister: function ()
    {
    var sc = _('script').el;
    for (var iI = 0; iI < sc.length; iI++) {
      if (sc[iI].src == '') {
        this.cache.push(sc[iI]);
        this.cache.push(sc[iI].innerHTML);
      }
    }
    },
    __router: function ()
    {
    var el = _('a[fn-spa]').el;
    var p = this;
    window.addEventListener('popstate', function (e) {
      var data = e.state;
      for (var i = 0; i < el.length; i++) {
        var hr = p.isAttr(el[i], 'fn-spa');
        if (hr && el[i].href == location.href) {
          Obj.Ajax({
            url: location.href,
            data: {
              spa: 'enabled'
            },
            method: 'GET',
            info: function (ds) {
              var el = newElm('div');
              el.innerHTML = ds;
              p.__fnApp(el.querySelectorAll('*[fn-init]'));
              _('*[' + hr + ']').html(el.innerHTML);
              p.__setSPA();
            }
          });
          e.preventDefault();
          break;
        }
      }
    });
    },
    __initScript: function ()
    {
    this.__setRegister();
    },
    __syncScript: function ()
    {
    for (var iIa = 0; iIa < this.cache.length; iIa += 2) {
      if (true) {
        this.cache[iIa].innerHTML = this.cache[iIa + 1] || '';
      }
    }
    },
    __moduleInit: function ()
    {
    this.modules(arguments[0] || '98h', function ($scope) {
    });
    },
    __fnApp: function ()
    {
    var fn_init = arguments[0] ? arguments[0] : [
    ];
    for (var iI = 0; iI < fn_init.length; iI++) {
      var data = fn_init[iI].innerHTML;
      fn_init[iI].innerHTML = '';
      var d2 = this.compile(data);
      fn_init[iI].innerHTML = d2;
    }
    _('*[fn-init]').removeattr('hidden');
    },
    __fnFetch: function ()
    {
    var fn_init = arguments[0] ? arguments[0] : [
    ];
    for (var iI = 0; iI < fn_init.length; iI++) {
      var target = this.isAttr(e.target, 'v-boot');
      if (target) {
        var data = _('*[' + target + ']').html();
        var d2 = this.compile(data);
        fn_init[iI].innerHTML = d2;
        fn_init[iI].removeAttribute('hidden');
      }
    }
    },
    __storageRender: function ()
    {
    var iIs = true;
    var p = this;
    setInterval(function () {
      p.__storage('v-render');
      p.__storage('v-scope');
    }, 100);
    this.__router();
    },
    __storage: function (arg)
    {
    var e,
    el,
    ren,
    once,
    action,
    scope;
    e = _('*[' + arg + ']').el;
    for (var inc = 0; inc < e.length; inc++) {
      el = _(e[inc]);
      ren = this.isAttr(e[inc], 'v-render');
      scope = this.isAttr(e[inc], 'v-scope');
      once = this.isAttr(e[inc], 'v-auto');
      action = el.el.value != undefined ? 'value' : 'html';
      var me = el.el;
      var before = el.el.previousElementSibling;
      var after = el.el.nextElementSibling;
      var par = el.el.parentElement;
      if (ren)
      {
        try {
          if (eval(ren) != el[action]()) {
            var acp = this.isAttr(el.el, 'e-newData');
            if (acp) {
              eval(acp);
            }
            el['html'](eval(ren) == '' ? ' ' : eval(ren));
            el['value'](eval(ren) == '' ? ' ' : eval(ren));
          } else {
          }
        } catch (error)
        {
        }
      }
      if (scope)
      {
        try {
          if (eval(scope) != el[action]()) {
            var acp = this.isAttr(el.el, 'e-newData');
            if (acp) {
              eval(acp);
            }
            el['html'](eval(scope) == '' ? ' ' : eval(scope));
            el['value'](eval(scope) == '' ? ' ' : eval(scope));
          } else {
          }
        } catch (error)
        {
        }
      }
    }
    },
    __Define: function ()
    {
    var e,
    el,
    rn,
    sc,
    sm;
    try {
      e = arguments[0];
      for (var inc = 0; inc < e.length; inc++) {
        el = _(e[inc]);
        rn = this.isAttr(el.el, 'v-define');
        var me = el.el;
        var before = el.el.previousElementSibling;
        var after = el.el.nextElementSibling;
        var par = el.el.parentElement;
        if (rn && !empty(rn)) {
          rn = rn.replace(/\n/g, '');
          sc = rn.split(';');
          for (var i = 0; i < sc.length; i++) {
            var t = sc[i].split('=');
            if (t.length == 2) {
              var d = t[1].substring(0, 5);
              var exe = t[1].substring(5, t[1].length);
              window[t[0].match(/\w(.*)/gi, '') [0]] = d == 'js://' ? eval(exe)  : t[1];
            } else if (t.length == 1 && !empty(t[0])) {
              window[t[0].replace(/ /g, '')] = '';
              console.log(t)
            }
          }
        }
      }
    } catch (er)
    {
    }
    },
    __storageDefine: function ()
    {
    var e,
    el,
    rn,
    sc,
    sm;
    e = _('*[fn-store]').el;
    for (var inc = 0; inc < e.length; inc++) {
      el = _(e[inc]);
      rn = this.isAttr(el.el, 'fn-store');
      if (rn) {
        sc = rn.split('.');
        sm = rn.split('[');
        if (sc.length > 1) {
          window[sc[0]] = {
          };
        } else if (sm.length > 1) {
          window[sc[0]] = {
          };
        } else {
          window[rn] = '';
        }
      }
    }
    },
    execframework: function () {
    this.__initScript();
    this.__Define(_('*[v-define]').el);
    this.__storageDefine();
    this.__storageRender();
    this.__fnApp(_('*[fn-init]').el);
    var p = this;
    setTimeout(function () {
      p.__syncScript();
      p.__proccess();
      p.__setSPA();
    }, 1);
    },
    __domReady: function ()
    {
    var p = this;
    window.addEventListener('DOMContentLoaded', function () {
      p.execframework();
    });
    },
    createApp: function (jsn)
    {
    if (jsn.vectorName) {
      window[jsn.vectorName] = jsn;
    }
    var p = this;
    setTimeout(function () {
      p.__Entry(jsn.vector(), typeof jsn.source() == 'string' ? '' : jsn.source().innerHTML, jsn.action || false);
    }, 50)
    },
    rel: function () {
    var p = this;
    window.addEventListener('hashchange', function (e) {
      var hs = location.hash;
      var hr = p.isAttr(el[i], 'fn-target');
      if (hr && el[i].href == location.href) {
        Obj.Ajax({
          url: location.href,
          data: {
            spa: 'enabled'
          },
          method: 'GET',
          info: function (ds) {
            var el = newElm('div');
            var bns = newElm('div');
            el.innerHTML = ds;
            bns.appendChild(el);
            p.__fnApp(bns.querySelectorAll('*[fn-init]'));
            _('*[' + hr || 'fs09' + ']').html(bns.querySelector('div').innerHTML);
          }
        });
        e.preventDefault();
      }
    });
    },
    View: function (pg) {
    this.page = pg;
    return this;
    },
    createSPA: function (jsn)
    {
    var p = this;
    window.addEventListener('hashchange', function (e) {
      var hs = location.hash;
      for (var k in jsn) {
        var title = jsn[k].title;
        var when = jsn[k].when;
        var url = jsn[k].url;
        var comp = jsn[k].getComponent;
        if (when)
        {
          if (when == hs.replace(/#/g, '')) {
            if (url) {
              Obj.Ajax({
                url: url,
                data: {
                  spa: 'enabled'
                },
                method: 'GET',
                info: function (ds) {
                  var el = newElm('div');
                  var bns = newElm('div');
                  el.innerHTML = ds;
                  bns.appendChild(el);
                  p.__fnApp(bns.querySelectorAll('*[fn-init]'));
                  _('*[' + p.page || 'fs09' + ']').html(bns.querySelector('div').innerHTML);
                  //this.__Entry(this.page , ds);
                }
              });
            } else if (comp) {
              this.__Entry(this.page, _('*[' + comp + ']').el[0].innerHTML);
            }
            if (title) {
              _('title').html(title);
            }
          }
        }
      }
      return false;
    });
    },
    modules: function ()
    {
    return this.module(arguments[0], arguments[1]);
    },
    }

   
   // library 

   /*
      DOM , BOM 
   */

     window._ = function(sel) {

        if (this.window === window) { return new _(sel); }
        if (sel == '$') {
           this.AJAX = '$';
        } else if (typeof sel == 'string') {
          sel = sel.charAt(0) == '%' ? '#' + sel.substring(1, sel.length)  : sel;
          var el = document.querySelectorAll(sel);
          this.Class = 'class';
          this.Global = sel;
          this.el = el;
        } else {
          this.Id = 'id';
          this.Global = sel;
          this.el = sel;
        }
        return this;
      }
      window.Haxcv = {
        Fn: window,
        script: function (elm, sel, dest) {
          elm = elm.split(':');
          var srt,
          sr = newElm(elm[0]);
          _(elm[1]).Append(sr);
          if (dest && dest) {
            if (sel == 'id') {
              sr.setAttribute('id', dest);
              sr = _('%' + dest);
            } else if (sel == 'class') {
              sr.setAttribute('class', dest);
              sr = _('.' + dest);
            } else {
              sr.setAttribute(sel, dest);
              sr = _(elm[0]);
            }
          } else {
            sr = _(sr.nodeName);
          }
          return sr;    
        },
        __proto__: {          
        Browser: function (array) {
          for (i in array) {
            return navigator[array[i]];
          }
        }
      }
    }
      Haxcv.Fn.XhrResult = '';    
      Haxcv.Fn.Parent = {
        ContentType: 'Content-Type',
        xParseData: [
          [
          4,
          200,
          function (Ctype) {
            var Connection = {
              Form: 'application/form',
              Uploud: 'maltipart/form-data',
              XmlStatus: 100011
            };
            if (Ctype[0] == Connection.Form && Ctype[1] == Connection.XmlStatus) {
              return 'application/x-www-form-urlencoded';
            } else if (Ctype[0] == Connection.Uploud && Ctype[1] == Connection.XmlStatus) {
              return Connection.Uploud;
            }
          }
          ],
          [
            'multipart/form-data'
          ],
          [
            'application/octet-stream'
          ],
        ],
        tName: function (a, elm) {
          return a.getElementsByTagName(elm);
        }
      };
      _.prototype = {
            script: function (v) {
              if (v.substring(0, 7) == 'Inject:') {
                var st = v.split(':');
                if (st[0] == 'Inject') {
                  var scr = newElm('script');
                  scr.text = st[1];
                  if (this.Id) {
                    _(this.el).Append(scr);
                  } else {
                    _(this.el[this.el.length - 1]).Append(scr);
                  }
                }
              } else {
                Haxcv.prototype.Obj.script(this.Global, v);
              }
              return this;
            },
            style: function (k, v) {
              try {
                if (this.el != null) {
                  if (this.all) {
                    var st = [
                    ];
                    if (typeof (k) === 'object') {
                      for (var i = 0; i < this.el.length; i++) {
                        for (var key in k) {
                          if (isset(v)) {
                            document.all(this.use, i).style[key] = k[key];
                          } else {
                            st.push(getComputedStyle(document.all(this.use, i)) [key]);
                          }
                        }
                      }
                    } else {
                      for (var i = 0; i < this.el.length; i++) {
                        for (var key in k) {
                          if (isset(v)) {
                            document.all(this.use, i).style[k] = v;
                          } else {
                            st.push(getComputedStyle(document.all(this.use, i)) [key]);
                          }
                        }
                      }
                    }
                    if (!isset(v)) {
                      return st;
                    }
                  } 
                  else if (this.Id == 'id') {
                    if (typeof (k) === 'object') {
                      for (var key in k) {
                        this.el.style[key] = k[key];
                      }
                    } else {
                      this.el.style[k] = v;
                    }
                  } else {
                    if (typeof (k) === 'object') {
                      for (var key in k) {
                        for (var i = 0; i < this.el.length; i++) {
                          this.el[i].style[key] = k[key];
                        }
                      }
                    } else {
                      for (var i = 0; i < this.el.length; i++) {
                        this.el[i].style[k] = v;
                      }
                    }
                  }
                }
              } catch (e) {
              }
              return this;
            },
            ScrollTo: function (x, y) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el != null) {
                  console.log($_SERVER('BROWSER'))
                  if (($_SERVER('BROWSER') == 'Chrome') && !('scrollMaxY' in window)) {
                    this.el.scrollTop = y;
                    this.el.scrollLeft = x;
                  } else {
                    this.el.scrollTo(x, y);
                  }
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    if (($_SERVER('BROWSER') == 'Chrome') && !('scrollMaxY' in window)) {
                      this.el[i].scrollTop = y;
                      this.el[i].scrollLeft = x;
                    } else {
                      this.el[i].scrollTo(x, y);
                    }
                  }
                }
              }
              return this;
            },
            ScrollBy: function (x, y) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el != null) {
                  if ('scrollMaxY' in window) {
                    this.el.scrollTop = y;
                    this.el.scrollLeft = y;
                  } else {
                    this.el.scrollBy(x, y);
                  }
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    if ('scrollMaxY' in window) {
                      this.el[i].scrollTop = y;
                      this.el[i].scrollLeft = y;
                    } else {
                      this.el[i].scrollBy(x, y);
                    }
                  }
                }
              }
              return this;
            },
            Scroll: function (val) {
              if (in_array(['scrollY',
              'scrollX',
              'scrollMaxX',
              'scrollMaxY',
              'Height',
              'Width'], val)) {
                var type = '',
                webKit = !('scrollMaxY' in window);
                var def = {
                  win: {
                    scrollY: 'scrollY',
                    scrollX: 'scrollX',
                    scrollMaxY: webKit ? 'scrollY' : 'scrollMaxY',
                    scrollMaxX: webKit ? 'scrollX' : 'scrollMaxX',
                    Height: 'scrollX',
                    Width: 'scrollY'
                  },
                  hash: {
                    scrollY: 'scrollTop',
                    scrollX: 'scrollLeft',
                    scrollMaxY: webKit ? 'scrollHeight' : 'scrollTopMax',
                    scrollMaxX: webKit ? 'scrollWidth' : 'scrollLeftMax',
                    Height: 'scrollHeight',
                    Width: 'scrollWidth'
                  }
                }
                if (this.el != null) {
                  if (this.Id == 'id' && this.el != null) {
                    return this.el[this.el == window ? def.win[val] : def.hash[val]];
                  } else {
                    var ar = [
                    ]
                    for (var i = 0; i < this.el.length; i++) {
                      type = this.el == window ? def.win[type] : def.hash[type];
                      ar[i] = this.el[i][this.el[i] == window ? def.win[val] : def.hash[val]];
                    }
                    return ar;
                  }
                }
              }
              //return this;

            },
            replace: function (v, to) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el != null) {
                  var tx = this.el.innerHTML.replace(v, to);
                  this.el.innerHTML = tx;
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    var tx = this.el[i].innerHTML.replace(v, to);
                    this.el[i].innerHTML = tx;
                  }
                }
              }
              return this;
            },
            Text: function (v) {
              if (this.el != null) {
                var h = ' ';
                if (this.Id) {
                  if (v) {
                    this.el.innerText = v;
                  } else {
                    h = this.el.textContent;
                  }
                } else {
                  if (v) {
                    for (var i = 0; i < this.el.length; i++) {
                      this.el[i].textContent = v;
                    }
                  } else {
                    for (var i = 0; i < this.el.length; i++) {
                      h += this.el[i].textContent;
                    }
                  }
                }
              }
              return h;
            },
            html: function (v) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el != null) {
                  if (v) {
                    this.el.innerHTML = v;
                  } else {
                    return this.el.innerHTML;
                  }
                } else {
                  if (v) {
                    for (var i = 0; i < this.el.length; i++) {
                      this.el[i].innerHTML = v;
                    }
                  } else {
                    var h = '';
                    for (var i = 0; i < this.el.length; i++) {
                      this.per = h += this.el[i].innerHTML;
                    }
                    return this.per;
                  }
                }
              }
              return this;
            },
            Toggle: function () {
              if (this.Class) {
                this.el.forEach(function (elm) {
                  var nx = elm.nextElementSibling,
                  ex = !getComputedStyle(nx).display.match('none');
                  _(nx).style('display', ex ? 'none' : '');
                });
              } else {
                var nx = this.el.nextElementSibling,
                ex = !getComputedStyle(nx).display.match('none');
                _(nx).style('display', ex ? 'none' : '');
              }
              return this;
            },
            mark: function (v) {
              if (this.el != null) {
                if (this.Id == 'id') {
                  if (v == true) {
                    if (document.selection) {
                      var range = document.body.createTextRange();
                      range.moveToElementText(this.el);
                      range.select();
                    } else if (Haxcv.Fn.getSelection) {
                      var range = document.createRange();
                      range.selectNode(this.el);
                      Haxcv.Fn.getSelection().addRange(range);
                    }
                  } else if (v == false) {
                    // this.el.remove();
                  }
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    if (v == true) {
                      if (document.selection) {
                        var range = document.body.createTextRange();
                        range.moveToElementText(this.el[i]);
                        range.select();
                      } else if (Haxcv.Fn.getSelection) {
                        var range = document.createRange();
                        range.selectNode(this.el[i]);
                        Haxcv.Fn.getSelection().addRange(range);
                      }
                    } else if (v == false) {
                      //this.el[i].remove();
                    }
                  }
                }
              }
              return this;
            },
            Remove: function () {
              if (this.el != null) {
                if (this.Id == 'id') {
                  this.el.remove();
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    this.el[i].remove();
                  }
                }
              }
              return this;
            },
            AddHtml: function (v) {
              if (this.el != null) {
                if (this.Id == 'id') {
                  var main_val = this.el.innerHTML;
                  this.per = this.el.innerHTML += v;
                  return this.per;
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    var main_val = this.el[i].innerHTML;
                    this.per = this.el[i].innerHTML += v;
                  }
                  return this.per;
                }
              }
              return this;
            },
            append: function (v) {
              if (this.el != null) {
                if (this.Id == 'id') {
                  var main_val = this.el.innerHTML;
                  this.per = this.el.append(v);
                  return this.per;
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    var main_val = this.el[i].innerHTML;
                    this.per = this.el[i].append(v);
                  }
                  return this.per;
                }
              }
              return this;
            },
            Append: function (v) {
              if (this.el != null) {
                if (this.Id == 'id') {
                  this.per = this.el.appendChild(v);
                } else if (this.el == 'head') {
                  Jsn.tName(index.Default[1], 'head') [0].appendChild(v);
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    var main_val = this.el[i].appendChild(v);
                  }
                }
              }
              return this;
            },
            value: function (v) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el) {
                  if (v) {
                    this.el.value = v;
                  } else {
                    return this.el.value;
                  }
                  var par = '';
                } else {
                  if (v) {
                    for (var i = 0; i < this.el.length; i++) {
                      this.per += this.el[i].value = v;
                    }
                    return this.per;
                  } else {
                    var h = '';
                    for (var i = 0; i < this.el.length; i++) {
                      this.per = h += this.el[i].value;
                    }
                    return this.per;
                  }
                }
              }
              return this;
            },
            AddValue: function (v) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el) {
                  if (v) {
                    this.el.value += v;
                  } else {
                    return this.el.value;
                  }
                  var par = '';
                } else {
                  if (v) {
                    for (var i = 0; i < this.el.length; i++) {
                      this.per += this.el[i].value += v;
                    }
                    return this.per;
                  } else {
                    var h = '';
                    for (var i = 0; i < this.el.length; i++) {
                      this.per = h += this.el[i].value;
                    }
                    return this.per;
                  }
                }
              }
              return this;
            },
            Ajax: function (object, s) {
              if (this.AJAX == 'AJAX') {
                _('$').Request(object, s);
              }
              return this;
            },
            Request: function (json, info, dType) {
              if (this.AJAX) {
                var data = {
                  url: null,
                  method: null,
                  data: null,
                  serializeArray: null,
                  info: function (data) {
                  }
                }
                var ndata = '';
                json.method = json.method.toLocaleUpperCase() || 'GET';
                if (!json.data) {
                  json.data = null;
                }
                if (json.data == '[object FormData]') {
                  //"Content-type","multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2));
                  ndata = json.data;
                  console.log(ndata)
                } else {
                  if (json.data && typeof json.data == 'object') {
                    for (var key in json.data) {
                      Haxcv.Fn.DTS = json.data;
                      ndata += key + '=' + json.data[key] + '&';
                    }
                    ndata = ndata.substring(0, ndata.length - 1);
                  } 
                  else if (typeof json.data == 'string') {
                    ndata = encodeURIComponent(json.data);
                  }
                }
                var e,
                Method,
                Data,
                dataType,
                xhr,
                XmlStatus = 100011;
                if (Haxcv.Fn.ActiveXObject) {
                  xhr = new ActiveXObject('Microsoft.XMLHTTP');
                } else {
                  xhr = new XMLHttpRequest('Majin.HttpObject');
                }
                if (json.method == 'POST' || json.method == 'post') {
                  e = {
                    Decode: json.url || '',
                    DataRoll: ndata,
                    Method: 'POST'
                  };
                } 
                else if (json.method == 'GET' || json.method == 'get') {
                  e = {
                    Decode: (json.url || '') + '?' + ndata,
                    DataRoll: null,
                    Method: 'GET'
                  };
                } else {
                  if (json.data) {
                    e = {
                      Decode: (json.url || '') + '?' + ndata,
                      DataRoll: null,
                      Method: (json.method || 'GET')
                    };
                  } else {
                    e = {
                      Decode: (json.url || ''),
                      DataRoll: null,
                      Method: 'GET'
                    };
                  }
                }
                var exec = true;
                if (json.withCredentials) {
                  xhr.withCredentials = true;
                }
                if (json.header == '[object Object]' && typeof json.header == 'object') {
                  for (var key in json.header) {
                    xhr.setRequestHeader(key, json.header[key]);
                  }
                } else {
                }
                if (dType) {
                  dataType = dType;
                } else {
                  dataType = 'application/form';
                }
                var abort = false;
                if (XMLHttp.abort) {
                  abort = true;
                }
                if (XMLHttp.exception == e.Decode && XMLHttp.abort) {
                  abort = false;
                }
                if (abort) {
                  return;
                }
                xhr.open(e.Method, e.Decode, true);
                if (json.upload == true) {
                } else {
                  xhr.setRequestHeader('Content-Type', json.data == '[object FormData]' ? 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)  : Parent.xParseData[0][2]([dataType,
                  XmlStatus]));
                }
                xhr.setRequestHeader('X-REQUESTED-WITH', 'XMLHttpRequest');
                //alert(json.data);
                xhr[index.Event[3]] = function (e) {
                  var Request_info = {
                    response: e.target.response,
                    responseText: e.target.responseText,
                    responseType: e.target.responseType,
                    responseURL: e.target.responseURL,
                    responseXML: e.target.responseXML,
                    responseXML: e.target.responseXML,
                    status: e.target.status,
                    statusText: e.target.statusText,
                    timeout: e.target.timeout,
                    readyState: e.target.readyState,
                    Library: 'Haxcv V 1.0.1',
                    responseHeaders: e.target.getAllResponseHeaders()
                  };
                  Request_info.responseHeader = xhr.getResponseHeader(xhr.responseURL);
                  if (function_exists(json.RHeader)) {
                    var r = Request_info;
                    json.responseHeader([r.requestHeader,
                    r.responseHeader,
                    r.responseHeaders]);
                  }
                  if (in_array([200,
                  101,
                  302,
                  301], xhr.status) && xhr.readyState == 4) {
                    if (function_exists(info)) {
                      info(xhr.responseText, Request_info);
                    }
                    if (function_exists(json.info)) {
                      json.info(xhr.responseText, Request_info);
                    }
                  } 
                  else if (xhr.status != 200 && xhr.readyState != 4) {
                    if (function_exists(json.error)) {
                      json.error(xhr.responseText, Request_info);
                    }
                  }
                }
                if (json.upload == true) {
                  xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                      if (function_exists(json.progress)) {
                        var loaded = e.loaded,
                        totlal = e.totlal,
                        min = 0,
                        max = e.total,
                        percent = Math.floor((e.loaded / e.total) * 100) + '%';
                        json.progress(Math.floor(loaded), Math.floor(max), percent);
                      }
                    }
                  }
                  xhr.upload.onloadstart = function (e) {
                    if (function_exists(json.before)) {
                      json.before();
                    }
                  }
                  xhr.upload.onloadend = function (e) {
                    if (function_exists(json.after)) {
                      json.after();
                    }
                  }
                } else {
                  xhr.onprogress = function (e) {
                    if (function_exists(json.progress)) {
                      var loaded = e.loaded < 1 ? 1 : e.loaded,
                      total = e.total < 1 ? 1 : e.total,
                      min = 0,
                      max = total;
                      percent = Math.floor((loaded / total) * 100) + '%';
                      json.progress(Math.floor(loaded), Math.floor(max), percent);
                    }
                  }
                  xhr.onloadstart = function (e) {
                    if (function_exists(json.before)) {
                      json.before();
                    }
                  }
                }
                xhr.addEventListener('load', function (evt) {
                  XhrResult = 'finshed';
                  if (function_exists(json.after)) {
                    json.after();
                  }
                  e.DataRoll = '';
                  json.data = '';
                }
                );
                xhr.send(json.data == '[object FormData]' ? json.data : e.DataRoll);
                e.DataRoll = '';
                json.data = '';
                return this;
              }
            },
            Require: function (v, value) {
              if (typeof value == 'object' && value == '[object FormData]') {
                Obj.callback.ajax({
                  fst: this.el,
                  snd: _(this.Global)
                }, v, value, 'POST');
              } else {
                Obj.callback.ajax({
                  fst: this.el,
                  snd: _(this.Global)
                }, v);
              }
              return this;
            },
            Fullscreen: function (k) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el) {
                  var el = this.el,
                  requestMethod = el.RequestFullScreen || el.webkitRequestFullScreen
                  || el.mozRequestFullScreen || el.msRequestFullScreen;
                  if (requestMethod) {
                    requestMethod.call(el);
                  } else if (typeof Haxcv.Fn.ActiveXObject !== undefined) {
                    // Older IE.
                    var wscript = new ActiveXObject('WScript.Shell');
                    if (wscript !== null) {
                      wscript.SendKeys('{F11}');
                    }
                  }
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    var requestMethod = this.el[i].requestFullScreen || this.el[i].webkitRequestFullScreen
                    || this.el[i].mozRequestFullScreen || this.el[i].msRequestFullScreen;
                    if (requestMethod) {
                      requestMethod.call(this.el[i]);
                    } else if (typeof Haxcv.Fn.ActiveXObject !== undefined) {
                      // Older IE.
                      var wscript = new ActiveXObject('WScript.Shell');
                      if (wscript !== null) {
                        wscript.SendKeys('{F11}');
                      }
                    }
                  }
                }
              }
              return this;
            },
            canselFullscreen: function (k) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el) {
                  var el = this.el,
                  requestMethod = el.canselFullScreen || el.webkitCanselFullScreen
                  || el.mozCanselFullScreen || el.msCanselFullScreen;
                  if (requestMethod) {
                    requestMethod.call(el);
                  } else if (typeof Haxcv.Fn.ActiveXObject !== undefined) {
                    // Older IE.
                    var wscript = new ActiveXObject('WScript.Shell');
                    if (wscript !== null) {
                      wscript.SendKeys('{F11}');
                    }
                  }
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    var requestMethod = this.el[i].CanselFullScreen || this.el[i].webkitCanselFullScreen
                    || this.el[i].mozCanselFullScreen || this.el[i].msCanselFullScreen;
                    if (requestMethod) {
                      requestMethod.call(this.el[i]);
                    } else if (typeof Haxcv.Fn.ActiveXObject !== 'undefined') {
                      // Older IE.
                      var wscript = new ActiveXObject('WScript.Shell');
                      if (wscript !== null) {
                        wscript.SendKeys('{Esc}');
                      }
                    }
                  }
                }
              }
              return this;
            },
            attr: function (k, v) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el) {
                  if (arguments.length < 1) {
                    try {
                      return this.el.getAttributeNames();
                    } catch (er) {
                      return '';
                    }
                  } else {
                    if (v) {
                      try {
                        this.el.setAttribute(k, v);
                      } catch (er) {
                      }
                    } else {
                      try {
                        if (!in_array([null,
                        undefined], this.el.getAttribute(k))) {
                          return this.el.getAttribute(k);
                        }
                      } catch (er) {
                        return '';
                      }
                    }
                  }
                } else {
                  var at = [
                  ];
                  if (arguments.length < 1) {
                    try {
                      for (var i = 0; i < this.el.length; i++) {
                        at[i] = this.el[i].getAttributeNames();
                      }
                      return at;
                    } catch (er) {
                      return '';
                    }
                  } else {
                    if (v) {
                      for (var i = 0; i < this.el.length; i++) {
                        try {
                          if (!in_array([null,
                          undefined], this.el[i].getAttribute(k))) {
                            return this.el[i].getAttribute(k);
                          }
                        } catch (er) {
                          return '';
                        }
                      }
                    } else {
                      try {
                        for (var i = 0; i < this.el.length; i++) {
                          if (!in_array([null,
                          undefined], this.el[i].getAttribute(k))) {
                            at[i] = this.el[i].getAttribute(k);
                          }
                        }
                        return at;
                      } catch (er) {
                        return '';
                      }
                    }
                  }
                }
              }
              return this;
            },
            removeattr: function (k) {
              if (this.el != null) {
                if (this.Id == 'id' && this.el) {
                  return this.el.removeAttribute(k);
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    this.el[i].removeAttribute(k);
                  }
                }
              }
              return this;
            },
            Form: function (j, info, secure) {
              // gos
              if (j.el && j.el != null) {
                var mode = j;
                var dest = 'true',
                dest1 = 'true';
                var keep_Ajax = {
                },
                keep_going = false;
                if (typeof j == 'object' && typeof j.Global == 'string') {
                  var J = j;
                  j = j.Global;
                  Haxcv.Fn.doc = {
                    select: null,
                    loop: null,
                    Main: j.charAt(0),
                    type: j.substring(1, j.length)
                  };
                  var XHR,
                  sdf,
                  all,
                  data = '';
                  function customFun(e, fun) {
                    var ac = true;
                    if (info.Exception) {
                      switch (typeof info.Exception)
                        {
                        case 'function':
                          if (info.Exception(e) != true) {
                            ac = false;
                            return false;
                          }
                          break;
                        case 'object':
                          for (var i = 0; i < info.Exception.length; i++) {
                            if (info.Exception[i](e) != true) {
                              ac = false;
                              return false;
                            }
                            break;
                          }
                          break;
                      }
                    }
                    if (ac) {
                      fun();
                    }
                  }
                  if (J.Id) {
                    // console.log(J.el)
                    sdf = J.el;
                    J.el.onsubmit = function (e) {
                      data = ' ';
                      e.this = _(e.target);
                      var t = '';
                      var action = _(e.target).attr('action');
                      action = typeof action == 'string' ? action : '';
                      all = sdf.elements;
                      var mthOd = in_array([null,
                      undefined], sdf.method) ? 'GET' : sdf.method.toLocaleUpperCase();
                      for (var key = 0; key < all.length; key++) {
                        var types = all[key];
                        if (types.name != undefined || types.value != undefined) {
                          if (types.type == 'submit' && empty(types.value)) {
                            MessageBox('your Submit button is empty please give it value ');
                            types.value = 'login';
                          }
                          var val = all[key].value;
                          if (secure && mthOd == 'POST') {
                            if (secure[0] > 40) {
                              secure[0] = 40
                            }
                            if (secure[0] < 1) {
                              secure[0] = 1
                            }
                            for (var a = 0; a < secure[0]; a++) {
                              val = Base64.encode(val);
                            }
                            if (all[key].type != 'file') {
                              if (all[key].type == 'radio') {
                                if (all[key].checked) {
                                  keep_Ajax[all[key].name] = Url.encode(val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              } else {
                                if (all[key].type != 'reset') {
                                  keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              }
                            }
                          } else {
                            if (all[key].type != 'file') {
                              if (all[key].type == 'radio') {
                                if (all[key].checked) {
                                  keep_Ajax[all[key].name] = Url.encode(val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              } else {
                                if (all[key].type != 'reset') {
                                  keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              }
                            }
                          }
                        }
                      }
                      dataRoll = data.substring(1, data.length);
                      var fAccess = e.this.attr('enctype') == 'mutlipart/form-data' ? true : false;
                      var fData = fAccess == true ? new FormData()  : keep_Ajax;
                      if (fAccess) {
                        fData = new FormData();
                        for (var i = 0; i < e.this.el.length; i++) {
                          var elm = e.this.el[i];
                          if (elm.type == 'file' && !in_array(['true',
                          true,
                          '1',
                          1], _(elm).attr('data-skip'))) {
                            fData.append(elm.name.toString(), elm.files[0], elm.name);
                          }
                        }
                        for (var k in keep_Ajax) {
                          fData.append(k, Url.decode(keep_Ajax[k]));
                        }
                      }
                      console.log(fData)
                      function Ajax_exec() {
                        _(Ajax).Request({
                          url: action || '',
                          method: sdf.method == undefined ? 'GET' : sdf.method,
                          data: fData,
                          upload: fAccess,
                          before: function () {
                            if (function_exists(info.before)) {
                              info.before(e);
                            }
                          },
                          error: function (er) {
                            if (function_exists(info.error)) {
                              info.error(er);
                            }
                          },
                          progress: function (a, b, c) {
                            if (function_exists(info.progress)) {
                              info.progress(a, b, c);
                            }
                          },
                          info: function (data) {
                            if (function_exists(info.info)) {
                              info.info(data, e);
                            }
                            dataRoll = '';
                            data = ' ';
                            keep_Ajax = {
                            };
                          },
                          after: function () {
                            if (function_exists(info.after)) {
                              info.after(e);
                            }
                            dataRoll = '';
                            data = ' ';
                            keep_Ajax = {
                            };
                          }
                        }, function (response, result) {
                          if (info && typeof info == 'function') {
                            var all = sdf.elements;
                            info(response, _(e.target));
                            dataRoll = ' ';
                            data = ' ';
                            keep_Ajax = {
                            };
                          }
                          if (result == 100011) {
                            data = ' ';
                          }
                        }
                        );
                        data = ' ';
                      }
                      if (info.RequiredField) {
                        var inf = info.RequiredField;
                        FormEmpty(keep_Ajax, function () {
                          // body...
                          customFun(e, Ajax_exec);
                        }, function () {
                          if (function_exists(info.error)) {
                            var NAMES = '',
                            N = [
                            ];
                            for (var key in keep_Ajax) {
                              if (empty(keep_Ajax[key])) {
                                NAMES += key + '   ';
                                N.push(key);
                              }
                            }
                            info.error({
                              names: N,
                              message: 'All Fields are Required ! [ ' + NAMES + ' ]'
                            });
                            keep_Ajax = {
                            };
                          }
                        }, inf);
                        dataRoll = ' ';
                        data = ' ';
                      } else {
                        customFun(e, Ajax_exec);
                      }
                      return false;
                    }
                  } 
                  else {
                    for (var i = 0; i < J.el.length; i++) {
                      J.el[i].onsubmit = function (e) {
                        dataRoll = ' ';
                        data = ' '
                        e.this = _(e.target);
                        sdf = e.target;
                        var t = '';
                        var action = _(e.target).attr('action');
                        action = typeof action == 'string' ? action : '';
                        all = sdf.elements;
                        var mthOd = in_array([null,
                        undefined], sdf.method) ? 'GET' : sdf.method.toLocaleUpperCase();
                        var asdf = [
                        ];
                        for (var key = 0; key < all.length; key++) {
                          var types = all[key];
                          if (types.name != undefined && types.value != undefined) {
                            var val = all[key].value;
                            if (secure && mthOd == 'POST') {
                              if (secure[0] > 40) {
                                secure[0] = 40
                              }
                              if (secure[0] < 1) {
                                secure[0] = 1
                              }
                              for (var a = 0; a < secure[0]; a++) {
                                val = Base64.encode(val);
                              }
                              if (all[key].type == 'radio') {
                                if (all[key].checked) {
                                  keep_Ajax[all[key].name] = Url.encode(val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              } else {
                                if (all[key].type != 'reset') {
                                  keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              }
                            } else {
                              if (all[key].type == 'radio') {
                                if (all[key].checked) {
                                  keep_Ajax[all[key].name] = Url.encode(val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              } else {
                                if (all[key].type != 'reset') {
                                  keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                                  data += '&' + all[key].name + '=' + Url.encode(val);
                                  t += data.replace('=', ':');
                                }
                              }
                            }
                          }
                        }
                        dataRoll = data.substring(1, data.length);
                        var fAccess = e.this.attr('enctype') == 'mutlipart/form-data' ? true : false;
                        var fData = fAccess == true ? new FormData()  : keep_Ajax;
                        if (fAccess) {
                          for (var i = 0; i < e.this.el.length; i++) {
                            var elm = e.this.el[i];
                            if (elm.type == 'file' && !in_array(['true',
                            true,
                            '1',
                            1], _(elm).attr('data-skip'))) {
                              fData.append(elm.name, elm.files[0]);
                            }
                          }
                          for (var k in keep_Ajax) {
                            fData.append(k, Url.decode(keep_Ajax[k]));
                          }
                        }
                        function Ajax_exec() {
                          _(Ajax).Request({
                            url: action || '',
                            method: mthOd || 'GET',
                            data: fData,
                            upload: fAccess,
                            before: function () {
                              if (function_exists(info.before)) {
                                info.before(e);
                              }
                            },
                            error: function (er) {
                              if (function_exists(info.error)) {
                                info.error(er);
                              }
                            },
                            progress: function (a, b, c) {
                              if (function_exists(info.progress)) {
                                info.progress(a, b, c);
                              }
                            },
                            info: function (data) {
                              if (function_exists(info.info)) {
                                info.info(data, e);
                              }
                              dataRoll = '';
                              data = ' ';
                              keep_Ajax = {
                              };
                            },
                            after: function () {
                              if (function_exists(info.after)) {
                                info.after(e);
                              }
                              dataRoll = '';
                              data = ' ';
                              keep_Ajax = {
                              };
                            }
                          }, function (response, result) {
                            if (info && typeof info == 'function') {
                              var all = sdf.elements;
                              info(response, _(e.target));
                              dataRoll = '';
                              data = '';
                              keep_Ajax = {
                              };
                            }
                            if (result == 100011) {
                              data = '';
                            }
                          }
                          );
                          data = '';
                        }
                        if (info.RequiredField) {
                          var inf = info.RequiredField;
                          FormEmpty(keep_Ajax, function () {
                            // body...
                            customFun(e, Ajax_exec);
                            keep_Ajax = {
                            };
                          }, function (er) {
                            if (function_exists(info.error)) {
                              info.error(er);
                              keep_Ajax = {
                              };
                            }
                          }, inf)
                          dataRoll = ' ';
                          data = ' ';
                        } else {
                          customFun(e, Ajax_exec);
                        }
                        return false;
                      }
                    }
                  }
                }
              }
              return this;
            },
            Upload: function (j, url, object) {
              var state;
              j = j.Global;
              Haxcv.Fn.doc = {
                select: null,
                loop: null,
              };
              var XHR,
              sdf,
              all,
              uplaodSatus,
              Continue = 200,
              Abort = 403,
              data = '';
              sdf = document.querySelectorAll(j);
              var formdata = new FormData();
              if (this.tr == '^' && this.tr) {
                var array;
                for (var a = 0; a < sdf.length; a++) {
                  if (sdf[a].type == 'file') {
                    if (sdf.length == 1) {
                      array = '';
                    } else {
                      array = '[]';
                    }
                    if (sdf[a].value != '') {
                      if (sdf[a].id == '' && sdf[a].name == '') {
                        formdata.append(sdf[a].getAttribute('class') + array, sdf[a].files[0]);
                      } else {
                        for (var aB = 0; aB < sdf[a].files.length; aB++) {
                          formdata.append(sdf[a].name + array, sdf[a].files[aB]);
                        }
                      }
                    }
                    state = 200;
                  } else {
                    state = 403;
                  }
                }
              } else {
                if (sdf.type == 'file') {
                  var f;
                  if (sdf.name == '') {
                    f = sdf.id;
                  } else if (sdf.id == '' && sdf.name == '') {
                    f = sdf.getAttribute('class');
                  } else {
                    f = sdf.name;
                  }
                  for (var aB = 0; aB < sdf.files.length; aB++) {
                    formdata.append(f, sdf.files[aB]);
                  }
                  state = 200;
                } else {
                  state = 403;
                }
              }
              if (state == 200) {
                _(Ajax).Request({
                  url: url,
                  method: 'POST',
                  data: formdata,
                  upload: true,
                  progress: function (per, loaded, total) {
                    if (function_exists(object.progress)) {
                      object.progress(per, loaded, total);
                    }
                  },
                  before: function () {
                    if (function_exists(object.before)) {
                      object.before();
                    }
                  },
                  after: function (info) {
                    if (function_exists(object.after)) {
                      object.after(xhr);
                    }
                  },
                  error: function (info) {
                    if (function_exists(object.error)) {
                      object.error(xhr);
                    }
                  },
                  info: function (info) {
                    if (function_exists(object.info)) {
                      object.info(info);
                    }
                  }
                }, function (response, result) {
                  if (object.info && typeof object.before == 'function') {
                    object.info(response, '<img src=' + sdf.value + ' />');
                  }
                  if (response) {
                    if (this.tr == '^' && this.tr) {
                      var array;
                      for (var a = 0; a < sdf.length; a++) {
                        sdf[a].setAttribute('data_transfer', sdf[a].value + ' has been processed ');
                        console.log(' uploaded finshed');
                      }
                    } else {
                      console.log(' uploaded finshed');
                    }
                  }
                  if (result == 100011) {
                    data = '';
                  }
                }, 'multipart/form-data');
              }
              return this;
            },
            src: function (v) {
              if (this.el != null) {
                if (v) {
                  if (this.el.node == 'evt' && this.el.tar) {
                    slef(this.Global).attr('src', v);
                    return _(this.Global).attr('src');
                  } else {
                    _(this.Global).attr('src', v);
                    return _(this.Global).attr('src');
                  }
                }
              }
              return this;
            },
            class: function (v) {
              if (this.el != null) {
                if (v) {
                  if (this.el.node == 'evt' && this.el.tar) {
                    slef(this.Global).attr('class', v);
                    return _(this.Global).attr('class');
                  } else {
                    _(this.Global).attr('class', v);
                    return _(this.Global).attr('class');
                  }
                } else {
                  if (this.el.node == 'evt' && this.el.tar) {
                    return _(this.Global).attr('class');
                  } else {
                    return _(this.Global).attr('class');
                  }
                }
              }
              return this;
            },
            id: function (v) {
              if (this.el != null) {
                if (v) {
                  if (this.el.node == 'evt' && this.el.tar) {
                    slef(this.Global).attr('id', v);
                    return _(this.Global).attr('id');
                  } else {
                    _(this.Global).attr('id', v);
                    return _(this.Global).attr('id');
                  }
                } else {
                  if (this.el.node == 'evt' && this.el.tar) {
                    return _(this.Global).attr('id');
                  } else {
                    return _(this.Global).attr('id');
                  }
                }
              }
              return this;
            },
            toURL: function (v) {
              var text;
              if (this.el.node == 'evt' && this.el.tar) {
                text = _(this.Global).html();
                _(this.Global).html('<a href="' + v + '">' + text + '</a>');
              } else {
                text = _(this.Global).html();
                _(this.Global).html('<a href="' + v + '">' + text + '</a>');
              }
              return this;
            },
            size: function (v) {
              if (this.el != null) {
                if (this.el == window) {
                  if (v == width) {
                    return Haxcv.Fn.innerWidth;
                  } else if (v == height) {
                    return Haxcv.Fn.innerHeight;
                  } else if (v == total) {
                    return Haxcv.Fn.innerHeight + window.innerWidth;
                  }
                } else {
                  if (this.Id) {
                    Haxcv.Fn.tag_size = {
                      width: this.el.offsetWidth,
                      height: this.el.offsetHeight,
                      total: this.el.offsetWidth + this.el.offsetHeight
                    }
                    if (v == width) {
                      return tag_size.width;
                    } else if (v == height) {
                      return tag_size.height;
                    } 
                    else if (v == total) {
                      return tag_size.total;
                    }
                  } else {
                    var wi = [
                    ];
                    if (v == width) {
                      for (var i = 0; i < this.el.length; i++) {
                        wi[i] = this.el[i].offsetWidth;
                      }
                    } else if (v == height) {
                      for (var i = 0; i < this.el.length; i++) {
                        wi[i] = this.el[i].offsetHeight;
                      }
                    } 
                    else if (v == total) {
                      for (var i = 0; i < this.el.length; i++) {
                        wi[i] = this.el[i].offsetWidth + this.el[i].offsetHeight;
                      }
                    }
                    return wi;
                  }
                  //} //

                }
              }
              return this;
            },
            width: function () {
              if (this.el != null) {
                if (this.el.node == 'evt' && this.el.tar) {
                  return _(this.Global).size(width);
                } else {
                  return _(this.Global).size(width);
                }
              }
              return this;
            },
            height: function () {
              if (this.el != null) {
                if (this.el.node == 'evt' && this.el.tar) {
                  return _(this.Global).size(height);
                } else {
                  return _(this.Global).size(height);
                }
              }
              return this;
            },
            AddEvents: function AddEvent(k, clickfunction) {
              if (this.el != null) {
                if (typeof k == 'object') {
                  var s = this.Global;
                  var on = 'on';
                  if (this.el.obj) {
                    for (i = 0; i < k.length; i++) {
                      this.el.addEventListener(k[i], function (e, r) {
                        e['this'] = _({
                          node: 'evt',
                          tar: e.target
                        });
                        clickfunction(e, _({
                          node: 'evt',
                          tar: e.target
                        }));
                        ;
                      });
                    }
                  } else {
                    if (this.el == true) {
                      this.el = this.el;
                    }
                    if (this.Id == 'id') {
                      for (i = 0; i < k.length; i++) {
                        this.el.addEventListener(k[i], function (e, r) {
                          e['this'] = _({
                            node: 'evt',
                            tar: e.target
                          });
                          clickfunction(e, _({
                            node: 'evt',
                            tar: e.target
                          }));
                          ;
                        });
                      }
                    } else {
                      for (var a = 0; a < this.el.length; a++) {
                        for (i = 0; i < k.length; i++) {
                          this.el[a].addEventListener(k[i], function (e, r) {
                            e['this'] = _({
                              node: 'evt',
                              tar: e.target
                            });
                            clickfunction(e, _({
                              node: 'evt',
                              tar: e.target
                            }));
                            ;
                          });
                        }
                      }
                    }
                  }
                } else {
                  var s = this.Global;
                  var on = 'on' + k;
                  if (this.el.obj) {
                    this.el[on] = function (e, r) {
                      e['this'] = _({
                        node: 'evt',
                        tar: e.target
                      });
                      clickfunction(e, _({
                        node: 'evt',
                        tar: e.target
                      }));
                      ;
                    }
                  } else {
                    if (this.el == true) {
                      this.el = this.el;
                    }
                    if (this.Id == 'id') {
                      this.el[on] = function (e, r) {
                        e['this'] = _({
                          node: 'evt',
                          tar: e.target
                        });
                        clickfunction(e, _({
                          node: 'evt',
                          tar: e.target
                        }));
                        ;
                        return false;
                      }
                    } else {
                      for (var i = 0; i < this.el.length; i++) {
                        this.el[i][on] = function (e, r) {
                          e['this'] = _({
                            node: 'evt',
                            tar: e.target
                          });
                          clickfunction(e, _({
                            node: 'evt',
                            tar: e.target
                          }));
                          ;
                          return false;
                        }
                      }
                    }
                  }
                }
              }
              return this;
            },
            fileSize: function fileSize() {
              if (this.el != null) {
                if (this.Id == 'id') {
                  return this.el.files[0].size;
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    return this.el[i].files[0].size;
                  }
                }
              }
              return this;
            },
            fileType: function fileType() {
              if (this.el != null) {
                if (this.Id == 'id') {
                  return this.el.files[0].type;
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    return this.el[i].files[0].type;
                  }
                }
              }
              return this;
            },
            files: function files(a) {
              if (this.el != null) {
                if (this.Id == 'id') {
                  return this.el.files[a];
                } else {
                  for (var i = 0; i < this.el.length; i++) {
                    return this.el[i].files[a];
                  }
                }
              }
              return this;
            },
            Effect: function (type, time, where) {
              if (this.Class) {
                this.el.forEach(function (elm) {
                  ex = type == fadeOut ? 'none' : 'block';
                  _(elm).style('display', ex);
                });
              } else {
                ex = type == fadeOut ? 'none' : 'block';
                _(this.el).style('display', ex ? 'none' : '');
              }
              return this;
            }
          };      
      Haxcv.prototype = {
        win: 'win',
        dom: 'doc',
        Obj: {
          script: function (elm, v) {
            Haxcv.script('script:' + elm, 'src', v);
          },
          call: function (elm, fun, dest) {
            if (dest == null) {
              _('$').Form(elm, function (data) {
                fun(data);
              }
              );
            } 
            else {
              _('$').Upload(elm, dest, function (data) {
                fun(data);
              }
              );
            }
          }
        },
        ready: function (fun) {
          index.Default[0][index.Event[0]] = function (e) {
            fun(e, Haxcv.Fn);
            Haxcv.Fn.ajax = _(Ajax);
          }
        },
        Events: function () {
          func(e, s);
        },
        call: function (type, time, select, el, t) {
          Haxcv.each[type](select, time, el);
        }
      }

      Haxcv.Fn.domHaxcvReady = true;
      Haxcv.Fn.DomReady = true;
      Haxcv.Fn.Default = 'preventDefault';
      Haxcv.Fn.Obj = {
        document: 123,
        root: Haxcv.Fn,
        dom: document,    
        Form: function (elm, fun) {
          Haxcv.prototype.Obj.call(elm, fun, null);
        },
        Upload: function (elm, url, fun) {
          Haxcv.prototype.Obj.call(elm, fun, url);
        },
        Ajax: function (object, s) {
          var header = false;
          var hr = {
                    Url: object.url,
                    Method: object.method,
                    Data: object.data,
              };
          if (object.header && typeof object.header == 'object') {
            header = object.header;
          }
          _('$').Request({
            url: hr.Url,
            header: header,
            method: hr.Method,
            data: hr.Data,
            info: function (data, status) {
              if (object.info && typeof object.info == 'function') {
                object.info(data, status);
              }
            },
            progress: function (per, loaded, total) {
              if (object.progress && typeof object.progress == 'function') {
                object.progress(per, loaded, total);
              }
            },
            before: function () {
              if (object.before && typeof object.before == 'function') {
                object.before();
              }
            },
            after: function (info) {
              if (object.after && typeof object.after == 'function') {
                object.after(info);
              }
            },
            error: function (info) {
              if (object.error && typeof object.error == 'function') {
                object.error(info);
              }
            },
          }, s);
        },
        callback: {
          ajax: function (el, v, value) {
            var requestheader,
            requestdata,
            requestmethod,
            requesturl;
            if (el.fst != null) {
              if (typeof value == 'object' && value == '[object FormData]') {
                requestheader = true;
                requestdata = value;
                requestmethod = 'POST';
                requesturl = v;
              } else {
                requestheader = false;
                requestdata = v.split('?') [1];
                requestmethod = 'GET';
                requesturl = v.split('?') [0];
              }
              Obj.Ajax({
                url: requesturl,
                method: requestmethod,
                data: requestdata,
                upload: requestheader,
                info: function (data) {
                  el.snd.html(data)
                }
              })
            }
          }
        },
        range: function range(s, e, ic, f) {
          if (ic && typeof (e) == 'number' && typeof (s) == 'number' && typeof (ic) == 'number') {
            ic = ic;
          } else {
            ic = 1;
          }
          if (s) {
            s = s;
          } else {
            s = 0;
          }
          for (var i = s; i < e; i = i + ic) {
            f(i);
          }
          //return this;

        },
        InArray: function (array, fun) {
          this.func = function (a) {
            fun(a);
          }
          Haxcv.extend.call.loop(loop, ARray, this.func);
        },
        InArrayloop: function (array, fun) {
          this.func = function (a) {
            fun(a);
          }
          Haxcv.extend.call.loop(loop, ARray, this.func);
          //return this;
        },
        createElm: function (elm, sel, dest, status) {
          var rd;
          elm = elm.split(':');
          var srt,
          sr = document.createElement(elm[0]);
          if (!status) {
            _(elm[1]).Append(sr);
            if (dest && dest) {
              if (sel == 'id') {
                sr.setAttribute('id', dest);
                sr = _('%' + dest);
              } else if (sel == 'class') {
                sr.setAttribute('class', dest);
                sr = _('.' + dest);
              } else {
                sr.setAttribute(sel, dest);
                sr = _(elm[0]);
              }
            } else {
              sr = _(sr.nodeName);
            }
            rd = sr;
          } else {
            if (dest && dest) {
              if (sel == 'id') {
                sr.setAttribute('id', dest);
              } else if (sel == 'class') {
                sr.setAttribute('class', dest);
              } else {
                sr.setAttribute(sel, dest);
              }
            } else {
            }
            rd = sr;
          }
          return rd;
          // return this;
        },
      }
      Haxcv.Fn.Ajax = '$';
      Haxcv.Fn.loop = 'loop';
      Haxcv.Fn.array = 'array';
      Haxcv.Fn.ARray = 'Array';
      var us = _('$');
      Haxcv.Fn.isset = true;
      Haxcv.Fn.direct_socket = {
        cookie: 'cookie',
      };
      Haxcv.Fn.width = 'width';
      Haxcv.Fn.height = 'height';
      Haxcv.Fn.total = 'total';
      Haxcv.Fn.AsHtml = 'AsHtml';
      Haxcv.Fn.AsAttribute = 'AsAttribute';
      Haxcv.Fn.slideDown = 'slideDown';
      Haxcv.Fn.slideUp = 'slideUp';
      Haxcv.Fn.fadeIn = 'fadeIn';
      Haxcv.Fn.fadeOut = 'fadeOut';
      Haxcv.Fn.show = 'show';
      Haxcv.Fn.hide = 'hide';
      Haxcv.Fn.index = {
        Default: [
          Haxcv.Fn,
          document
        ],
        Event: [
          'onload',
          'onunload',
          'onabort',
          'onreadystatechange',
          'onprogress',
          'onclick',
          'onchange',
          'dblclick',
          'onmouseover',
          'onmouseleave',
          'onmouseup',
          'onmousedown',
          'onmouseenter',
          'onmousemove',
          'oncontextmenu'
        ],
      };
      Haxcv.Fn.Server = index.Default[1];
      Haxcv.Fn.Win = index.Default[0];
      Haxcv.Fn.Doc = index.Default[1];
      Haxcv.Fn.code = {
        el: {
          m: 'querySelectorAll',
          ById: 'getElementById',
        }
      };
      Haxcv.Fn.et = Object.create(code);
      Haxcv.Fn.Jsn = {
        m: function (a, elm) {
          return a[et.el['m']](elm);
        },
        ById: function (a, elm) {
          return a[et.el['ById']](elm);
        },
        arguments: [
          function (b) {
            return typeof b;
          }
        ]
      };


      Haxcv.Fn.$GET = {
      };
      Haxcv.Fn.$COOKIE = {
      };
      Haxcv.Fn.$SERVER = {
      };
      Haxcv.Fn.$REQUEST = {
      };
      Haxcv.Fn.$Form = {
      };
      var request = document.cookie;
      request = request.split('; ');
      for (i in request) {
        $COOKIE[request[i].split('=') [0]] = request[i].split('=') [1];
      }
      var get;
      var request = Haxcv.Fn.location.search;
      request = request.substring(1, request.length);
      request = request.split('&');
      for (i in request) {
        $GET[request[i].split('=') [0]] = request[i].split('=') [1];
      }
      $REQUEST = $GET;
      $Form = $GET;
      Haxcv.Fn.Request = {
        To: {
          SSL: function () {
            if ($_SERVER('PROTOCOL') == 'http:') {
              var url = Haxcv.Fn.location;
              s = new String(url);
              url.href = s.replace('http:', 'https:');
            }
          },
          url: function (url) {
            Haxcv.Fn.location.href = url;
          }
        },
        Read: function (file, fun) {
          if (fun) {
            _(Ajax).Request({
              url: file,
              method: 'get',
              data: null,
              info: function (data) {
                fun(data);
              }
            });
          }
        },
        GET: function (a) {
          return $_GET(a);
        },
        COOKIE: function (a) {
          return $_GET(a);
        },
      }
      Haxcv.Fn.$_GET = function (a, s) {
        if (s == isset) {
          var get;
          var request = Haxcv.Fn.location.search;
          request = request.substring(1, request.length);
          request = request.split('&');
          for (i in request) {
            if (request[i].split('=') [0] == a) {
              return true;
            }
          }
        } else if (s == 'hii') {
        } else {
          var get;
          var request = Haxcv.Fn.location.search;
          request = request.substring(1, request.length);
          request = request.split('&');
          for (i in request) {
            if (request[i].split('=') [0] == a) {
              return request[i].split('=') [1];
            }
          }
        }
      }
      Haxcv.Fn.Form = $_GET;
      Haxcv.Fn.$_REQUEST = function (a, s) {
        if (s == isset) {
          return $_GET(a, isset);
        } else {
          return $_GET(a);
        }
      }
      $_COOKIE = function (a, s) {
        if (s == isset) {
          var request = document.cookie;
          request = request.split('; ');
          for (i in request) {
            if (request[i].split('=') [0] == a) {
              return true;
            } else {
              return false;
            }
          }
        } else {
          var request = document.cookie;
          request = request.split('; ');
          for (i in request) {
            if (request[i].split('=') [0] == a) {
              return request[i].split('=') [1];
            }
          }
        }
      }
      ;
      Haxcv.Fn.win = _(Win);
      Haxcv.Fn.dom = _(Doc);
      Haxcv.Fn.outer = true;
      Haxcv.Fn.check = false;
      Haxcv.Fn.cts = false;
      Haxcv.Fn.server = [
        'URL',
        'BASE_URL',
        'CHARSET',
        'CHARACTER_SET',
        'COMPAT_MODE',
        'CONTENT_TYPE',
        'DEFAULT_CHARSET',
        'DESIGN_MODE',
        'DOCUMENT_URI',
        'DOMAIN',
        'INPUT_ENCODING',
        'LAST_MODIFIED',
        'REQUEST',
        'HTTP_URL',
      ];
      Haxcv.Fn.SERVER = [
        'URL',
        'baseURI',
        'charset',
        'characterSet',
        'compatMode',
        'contentType',
        'defaultCharset',
        'designMode',
        'documentURI',
        'domain',
        'inputEncoding',
        'lastModified',
        'search',
        'location'
      ];
      Haxcv.Fn.Br = Haxcv.Fn.location;
      window.$_SERVER = function (a) {
        if (a == 'HOST' || a == 'HOST_NAME') {
          return Br['host'];
        } else if (a == 'HREF') {
          return Haxcv.Fn.location['href'];
        } else if (a == 'URL') {
          return Br['origin'];
        } else if (a == 'HTTP_URL') {
          return Br;
        } else if (a == 'PATH_NAME' || a == 'JS_SELF' || a == 'SELF') {
          return Br['pathname'];
        } else if (a == 'PROTOCOL') {
          return Br['protocol'];
        } else if (a == 'REQUEST' || a == 'GET') {
          return Br['search'];
        } else if (a == 'USER_AGENT') {
          return navigator['userAgent'];
        } else if (a == 'NAVIGATOR') {
          return navigator;
        } else if (a == 'BROWSER') {
          var br = navigator['userAgent'];
          if (br.match('OPR')) {
            return 'Opera';
          } else if (br.match('YaBrowser')) {
            return 'YaBrowser';
          } else if (br.match('Firefox')) {
            return 'Firefox';
          } else if (br.match('Chrome')) {
            return 'Chrome';
          } else if (br.match('IE')) {
            return 'Internet Explorer';
          } else if (br.match('Safari')) {
            return 'Safari';
          } 
          else if (br.match('.NET')) {
            return 'Internet Explorer';
          }
        } else if (a == 'PLATFORM') {
          return navigator['platform'];
        } else if (a == 'OS') {
          return navigator['oscpu'];
        } else if (a == 'CHACHE') {
          return Haxcv.Fn['caches'];
        } else if (a == 'CHARSET' || 'CHARACTER_SET') {
          return document['characterSet'];
        } 
        else {
        }
      }
      if ($_SERVER('BROWSER') != 'Firfox') {
      }
      Haxcv.Fn.click = 'click';
      Haxcv.Fn.rightclick = 'rightClick';
      Haxcv.Fn.dblclick = 'dblclick';
      Haxcv.Fn.focus = 'focus';
      Haxcv.Fn.moseover = 'mouseover';
      Haxcv.Fn.mouseout = 'mouseout';
      Haxcv.Fn.mousemove = 'mousemove';
      Haxcv.Fn.mousedown = 'mousedown';
      Haxcv.Fn.mouseup = 'mouseup';
      Haxcv.Fn.keyup = 'keyup';
      Haxcv.Fn.keydown = 'keydown';
      Haxcv.Fn.keypress = 'keypress';
      Haxcv.Fn.load = 'load';
      Haxcv.Fn.html = 'html';
      Haxcv.Fn.css = 'style';
      Haxcv.Fn.style = 'style';
      Haxcv.Fn.Base64 = {
        encode: function (s) {
          try {
            var r;
            r = btoa(s);
            return r;
          } catch (er) {
            er = er.toLocaleString();
            er = er.replace(' ', '<br/>');
            return er;
          }
        },
        decode: function (s) {
          try {
            var r;
            r = atob(s);
            //throw "Inavlid Base64 Syntax";
            return r;
          } catch (er) {
            er = er.toLocaleString();
            er = er.replace(' ', '<br/>');
            return er;
          }
        }
      }
      Haxcv.Fn.arg = 'arguments';
      Haxcv.Fn.Url = {
        encode: function (s) {
          var r;
          r = encodeURIComponent(s);
          return r;
        },
        decode: function (s) {
          var r;
          r = decodeURIComponent(s);
          return r;
        },
        isValid: function (url) {
          function RegEx() {
            return /^(ftp|https|http|tcp|ws|wss?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(RegEx[arg][0]);
          }
          return RegEx(url)
        }
      }
      Haxcv.Fn.define = function (name, value) {
        Haxcv.Fn['$' + name] = value;
        Haxcv.Fn[name] = value;
      }
      function RGBtohex(r, g, b)
      {
        var R = IntToHex(r).replace('0x', ''),
        G = IntToHex(g).replace('0x', ''),
        B = IntToHex(b).replace('0x', '');
        if (R.length == 1) {
          R = R + R;
        }
        if (G.length == 1) {
          G = G + G;
        }
        if (B.length == 1) {
          B = B + B;
        }
        return '#' + R + G + B;
      }
      function hexToRGB(hex)
      {
        var long = parseInt(hex.replace(/^#/, ''), 16);
        return {
          R: (long >>> 16) & 255,
          G: (long >>> 8) & 255,
          B: long & 255
        };
      }
      function newElm(elm) {
        return index.Default[1][createElm](elm);
      }
      Haxcv.Fn.parentNode = 'parentNode';
      Haxcv.Fn.createElm = 'createElement';
      Haxcv.Fn.parentElm = 'parentElement';
      Haxcv.Fn.firstElm = 'firstElementChild';
      Haxcv.Fn.lastElm = 'lastElementChild';
      Haxcv.Fn.nextElm = 'nextElementSibling';
      Haxcv.Fn.next = 'nextSibling';
      Haxcv.Fn.first = 'firstChild';
      Haxcv.Fn.last = 'lastChild';
      Haxcv.Fn.count = 'childElementCount';
      Haxcv.Fn.nodes = 'chiledNodes';
      Haxcv.Fn.children = 'children';
      // node 
      Haxcv.Fn.name = 'nodeName';
      Haxcv.Fn.value = 'nodeValue';
      Haxcv.Fn.type = 'nodeType';
      Haxcv.Fn.LT = 'rotateX';
      Haxcv.Fn.RT = 'rotateY';
      Haxcv.secure = [
        1
      ];
      Haxcv.Fn.DataURL = 'readAsDataURL';
      Haxcv.Fn.TextData = 'readAsText';
      function File_Reader(files, type, fun) {
        var reader = new FileReader(),
        nf = 'readAsDataURL',
        tGET;
        if (type) {
          nf = type;
        }
        _(reader).AddEvents(['load'], function (evt) {
          if (fun && typeof fun == 'function') {
            fun(evt.target.result);
          }
        })
        reader[nf](files);
      }
      Haxcv.Fn['Email'] = {
        isValid: function (email) {
          var RegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          return RegEx.test(email);
        }
      }
      Haxcv.Fn['in_array'] = function (array, str, fun) {
        var res = false;
        for (var i = 0; i < array.length; i++) {
          if (array[i] == str) {
            res = true;
          }
        }
        if (res) {
          if (fun && typeof fun == 'function') {
            fun(str);
          }
        }
        return res;
      }


      function empty(str) {
      if (new RegExp(/^\s*$/).test(str)) {
        return true;
      } else {
        return false;
      }
      }


      function isset(val) {
      if (!in_array([undefined,
      null,
      false], val)) {
        return true;
      } else {
        return false;
      }
      }
      function function_exists(val) {
      if (!in_array([undefined,
      null], val) && typeof val == 'function') {
        return true;
      } else {
        return false;
      }
      }
      function FormEmpty(str, fun, error, Required) {
      var NAMES = '',
      N = [
      ];
      var last = true;
      if (Required == true) {
        for (var key in str) {
          // if(Required[keys] == key){
          if (empty(str[key])) {
            NAMES += key + ' ';
            N.push(key)
            last = false;
          }
        }
      } else if (typeof Required == 'object' && Required) {
        for (var keys in Required) {
          for (var key in str) {
            if (Required[keys] == key) {
              if (empty(str[key])) {
                NAMES += key + ' ';
                N.push(key)
                last = false;
              }
            }
          }
        }
      }
      if (function_exists(fun)) {
        if (last) {
          fun();
        } else {
          if (function_exists(error)) {
            var msg = N.length > 1 ? '  Fields are Required !' : 'Field is Required !';
            error({
              fields: N,
              message: NAMES + msg
            });
          }
        }
      }
      }
      Haxcv.Fn.XMLHttp = {
      abort: false,
      exception: null
      };
      Haxcv.Fn.DATA = 'dataTransfer';
      Haxcv.Fn.CSS = 'getComputedStyle';
      function include(src) {
      _('body').script(src);
      }
    
    var libs = true;
    //  test lib classes 
    var pef = 0;
    if(isset(_))
    {
      pef ++;
      // test DOM Selector 
      if(_("body").el && _(window).el ){
        pef++;
      }
      if(Haxcv.Fn == window){pef++;}      
    }
     
     try{
        libs =  pef == 3 && !isset(haxcv) ? true : false;
      }catch(error){        
        libs =  pef == 3  ? true : false;      
     }
  

 

  return {
    services:App,
    status:libs,
    state:"ok"
  };


});
