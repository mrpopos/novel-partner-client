import{_ as i,d as u,C as d,o as c,c as n,D as v,f as _}from"./index.13b91343.js";const f={mounted(o,e){e.value?e.value:e.value={},h(e.value.text,o,e.value.font,e.value.textColor)}};function h(o,e,r,s){var t=document.createElement("canvas");e.appendChild(t),t.width=200,t.height=150,t.style.display="none";var a=t.getContext("2d");a.rotate(-20*Math.PI/180),a.font=r||"16px Microsoft JhengHei",a.fillStyle=s||"rgba(180, 180, 180, 0.3)",a.textAlign="left",a.textBaseline="middle",a.fillText(o||"vue-admin-box",t.width/10,t.height/2),e.style.backgroundImage="url("+t.toDataURL("image/png")+")"}const p=u({directives:{WaterMarker:f},setup(){}}),x={class:"layout-container"},m={class:"layout-container-table"},k=_(" \u6211\u662F\u4E00\u4E2A\u6C34\u5370\u9875\u9762 "),M=[k];function w(o,e,r,s,t,a){const l=d("waterMarker");return c(),n("div",x,[v((c(),n("div",m,M)),[[l]])])}var C=i(p,[["render",w]]);export{C as default};
