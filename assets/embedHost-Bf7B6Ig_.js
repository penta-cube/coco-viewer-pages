import{o as e}from"./embedBridge-BfOCGFJg.js";import{t}from"./hostClient-B4E5C1gP.js";var n=document.getElementById(`viewer`),r=document.getElementById(`status`),i=document.getElementById(`cadence-cache-control`),a=document.getElementById(`cadence-cache-input`);if(!n||!r||!i||!a)throw Error(`Harness DOM is incomplete`);var o=[],s=null,c=0,l=`embed-harness-r1`,u=new URLSearchParams(location.search),d=u.get(`source`)===`cadence-cache`,f=u.get(`net`)?.trim()||`PCIE_00_RX_DP`,p=e=>`${e}-${++c}`;i.hidden=!d;function m(t){return{protocol:e,version:1,requestId:t}}function h(e,t,n,r){e.set(new TextEncoder().encode(r).subarray(0,n),t)}function g(e,t){let n=new TextEncoder().encode(t),r=Math.ceil(n.length/512),i=new Uint8Array(512+r*512);h(i,0,100,e),h(i,100,8,`0000644\0`),h(i,108,8,`0000000\0`),h(i,116,8,`0000000\0`),h(i,124,12,`${n.length.toString(8).padStart(11,`0`)}\0`),h(i,136,12,`00000000000\0`),i.fill(32,148,156),i[156]=48,h(i,257,6,`ustar\0`);let a=0;for(let e of i.subarray(0,512))a+=e;return h(i,148,8,`${a.toString(8).padStart(6,`0`)}\0 `),i.set(n,512),i}async function _(){let e=[g(`misc/info`,`JOB_NAME=scene_contract_board
`),g(`matrix/matrix`,`STEP {
COL=1
NAME=pcb
}
LAYER {
ROW=1
CONTEXT=BOARD
TYPE=SIGNAL
NAME=top
POLARITY=POSITIVE
COLOR=608585
}
`),g(`steps/pcb/stephdr`,`UNITS=MM
`),g(`steps/pcb/layers/top/features`,`UNITS=MM
#
#Layer features
#
S P 0
OB 0 0 I
OS 10 0
OS 10 8
OS 0 8
OE
SE
`),g(`steps/pcb/eda/data`,`HDR Coco deterministic fixture
UNITS=MM
LYR top

NET GND
SNT TRC
FID C 0 0

PKG CHIP 1 -0.5 -0.5 0.5 0.5
RC -0.5 -0.5 1 1
PIN 1 S 0 0 0 E S
RC -0.1 -0.1 0.2 0.2
`),g(`steps/pcb/layers/comp_+_top/components`,`UNITS=MM
CMP 0 5 4 0 N U1 CHIP
TOP 0 5 4 0 N 0 0 1
`)],t=e.reduce((e,t)=>e+t.length,1024),n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;let i=new CompressionStream(`gzip`),a=new Blob([n]).stream().pipeThrough(i);return new Blob([await new Response(a).arrayBuffer()],{type:`application/gzip`})}async function v(){let e=await _(),t=URL.createObjectURL(e);o.push(t);let n={protocol:`coco-viewer-source-capability`,version:1,source:{kind:`odb-tgz`,url:t,fileName:`embed-harness-board.tgz`,mediaType:`application/gzip`,byteLength:e.size}},r=URL.createObjectURL(new Blob([JSON.stringify(n)],{type:`application/json`}));o.push(r),s?.send({...m(p(`open`)),type:`open-source`,payload:{sourceRevision:l,source:{kind:`odb-tgz`,manifestUrl:r}}})}function y(e){let t=URL.createObjectURL(e);o.push(t);let n={protocol:`coco-viewer-source-capability`,version:1,source:{kind:`cadence-cache`,url:t,fileName:e.name,mediaType:`application/gzip`,byteLength:e.size}},r=URL.createObjectURL(new Blob([JSON.stringify(n)],{type:`application/json`}));o.push(r),s?.send({...m(p(`open-cadence`)),type:`open-source`,payload:{sourceRevision:l,source:{kind:`cadence-cache`,manifestUrl:r}}})}a.addEventListener(`change`,()=>{let e=a.files?.[0];e&&(r.textContent=`opening ${e.name}`,y(e))});function b(e){if(r.textContent=`${e.type} (${e.requestId})`,e.type===`error`)r.textContent=`error · ${e.payload.code} · ${e.payload.message}`;else if(e.type===`ready`)d?r.textContent=`ready · choose cadence-cache · target ${f}`:v();else if(e.type===`load-state`&&e.payload.state===`loaded`)s?.send({...m(p(`apply-scene`)),type:`apply-scene`,payload:{sourceRevision:l,scene:{kind:`plan`,input:{net:d?f:`GND`,...!d&&{component:`U1`},autoLayerSelect:!0,autoFit:!0}}}});else if(e.type===`scene-state`&&e.payload.reason===`applied`)s?.send({...m(p(`capture-scene`)),type:`get-scene-state`,payload:{sourceRevision:l}});else if(e.type===`scene-state`&&e.payload.reason===`capture`){if(d){r.dataset.sceneState=JSON.stringify(e.payload.state),r.textContent=`scene captured · ${e.payload.state.highlight.join(`, `)}`;return}let t={...m(p(`dispose`)),type:`dispose`,payload:{}};s?.send(t)}}n.addEventListener(`load`,()=>{if(!n.contentWindow)throw Error(`Viewer window is unavailable`);s=new t({hostWindow:window,viewerWindow:n.contentWindow,viewerOrigin:location.origin,onMessage:b,onRejected:e=>{r.textContent=`rejected: ${e}`}}),s.start(),s.send({...m(p(`init`)),type:`initialize`,payload:{host:{name:`Coco Viewer host harness`,version:`1`}}})},{once:!0}),n.src=`./embed.html?parentOrigin=${encodeURIComponent(location.origin)}`,window.addEventListener(`pagehide`,()=>{s?.stop();for(let e of o)URL.revokeObjectURL(e)},{once:!0});