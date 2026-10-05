(function(){
  // 1. Chaves de rastreamento do Google Ads e UTMs
  var K = 'gads_tracking';
  var P = [
    'gclid', 'gbraid', 'wbraid', 'gad_source', 'gad_campaignid',
    'utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term',
    'keyword', 'device', 'network'
  ];

  var q = new URLSearchParams(window.location.search);
  var s = {};

  try {
    s = JSON.parse(localStorage.getItem(K) || '{}');
  } catch(e) {}

  var f = {};
  P.forEach(function(k){
    var v = q.get(k);
    if(v) f[k] = v;
  });

  if(Object.keys(f).length > 0){
    f._ts = new Date().toISOString();
    Object.assign(s, f);
    try {
      localStorage.setItem(K, JSON.stringify(s));
    } catch(e) {}
  }

  // 2. Utilitário global GadsTracking
  window.GadsTracking = {
    data: s,
    get: function(k){ return s[k] || ''; },
    appendTo: function(u){
      try {
        var x = new URL(u, window.location.href);
        P.forEach(function(k){
          if(s[k] && !x.searchParams.has(k)) {
            x.searchParams.set(k, s[k]);
          }
        });
        return x.toString();
      } catch(e) {
        return u;
      }
    },
    trackConversion: function(val, label) {
      try {
        if(typeof window.gtag === 'function') {
          var payload = {
            'value': Number(val || 0),
            'currency': 'BRL'
          };
          if(label) {
            payload['send_to'] = label;
          }
          window.gtag('event', 'conversion', payload);
          window.gtag('event', 'purchase', payload);
        }
      } catch(e) {
        console.warn('Gads conversion error:', e);
      }
    }
  };

  // 3. Atualiza automaticamente links e formulários na página
  function decorateElements() {
    try {
      var links = document.querySelectorAll('a[href]');
      links.forEach(function(a){
        var href = a.getAttribute('href');
        if(href && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
          a.setAttribute('href', window.GadsTracking.appendTo(href));
        }
      });
    } catch(e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decorateElements);
  } else {
    decorateElements();
  }
})();
