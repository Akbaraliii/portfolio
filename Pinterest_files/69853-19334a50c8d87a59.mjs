(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[69853,34363],{276602:(e,t,n)=>{n.d(t,{EV:()=>s,Sb:()=>o,gD:()=>r});var i=n(425288);const{Consumer:r,Provider:o,useMaybeHook:s}=(0,i.Z)("pwtSurfaceContext")},226464:(e,t,n)=>{n.d(t,{KJ:()=>c,Rp:()=>u});const i={id:14,name:"own_profile"},r={id:15,name:"other_profile"},o={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"},sterling_recommendations:{id:223,name:"sterling_recommendations_pageload"},product_details:{id:120,name:"product_details_interactive"}}},client_route_push:{unauth:{},auth:{bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},search_tab:{id:25,name:"search_tab_render"},pin_closeup:{id:13,name:"pin_closeup_details"},product_details:{id:37,name:"product_details_render"},your_shop:{id:36,name:"your_shop_feed_render"},own_profile:i,other_profile:r}},client_route_replace:{unauth:{},auth:{own_profile:i,other_profile:r,product_details:{id:37,name:"product_details_render"}}}},s={client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"}}}}},a={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},l=e=>{var t,n;const{navigationType:i,isAuthenticated:r,segment:a,surface:l}=e,u=r?"auth":"unauth",c=null===(t=s[i])||void 0===t||null===(n=t[u])||void 0===n?void 0:n[l];return a&&c&&c[a]||o[i][u][l]},u=e=>{if("stopwatch"===e.type)return a[e.name]||null;const t=l(e);return t?t.id:null},c=e=>{if("stopwatch"===e.type)return e.name;const{navigationType:t,isAuthenticated:n,segment:i,surface:r}=e,o=n?"auth":"unauth",s=l(e);return s?s.name:`${t}_${o}_${r}${i?"_"+i:""}`}},383434:(e,t,n)=>{n.d(t,{X:()=>o,v:()=>r});var i=n(7789);const r=(e,t)=>{i.DQ&&(e.style.outline=`10px solid ${t}`,e.style.outlineOffset="-30px")},o=e=>(t,...n)=>{i.DQ&&console.log("string"==typeof t?`[PWT:${e}] ${t}`:t,...n)}},317672:(e,t,n)=>{n.d(t,{F9:()=>c,LM:()=>l,VZ:()=>o,cQ:()=>d,rZ:()=>s});var i=n(790348),r=n(91885);const o=()=>"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&!!document.querySelector&&!!document.querySelectorAll,s=e=>e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null,a=e=>{if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;const t=((e.style||{}).backgroundImage||"").match(/^url\(["'](.*)["']\)$/);return t&&t[1]||null},l=()=>document.querySelector?document.querySelectorAll(r.wc).length:((0,i.H)("missing_document_query_selector"),0),u=(e,t)=>{const n=s(e);if(!n)return(0,i.H)("missing_client_rect"),!1;if(n.width<100&&n.height<100){if(e instanceof HTMLImageElement)return!1;const t=a(e);if(null!=t&&t.endsWith("svg"))return!1}return(({top:e,height:t},{foldY:n,pageYOffset:i})=>{const r=e+i;if(r>=n)return!1;const o=Math.min(t,n-r);return o>.5*t||o>.2*n})(n,t)},c=()=>{const e=(()=>{if(!document.querySelector)return(0,i.H)("missing_document_query_selector"),null;const e=document.querySelectorAll(r.wc);return e[e.length-1]||null})();if(!e)return!1;const t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},d=(e,t)=>{if(!document.querySelector)return(0,i.H)("missing_document_query_selector"),[];const n={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},o=[r.Wf,...e?[r.fF]:[],...t?[r.$N]:[]].join(",");return[...document.querySelectorAll(o)].reduce(((e,i)=>{if((i instanceof HTMLImageElement||i instanceof HTMLDivElement||i instanceof HTMLVideoElement&&t)&&u(i,n)){const t=a(i);if(t){const n=(t||"").replace(/.*\//,"");return e.concat([{element:i,fileName:n}])}}return e}),[])}},91885:(e,t,n)=>{n.d(t,{$N:()=>l,Kb:()=>i,Wf:()=>s,fF:()=>a,wc:()=>o});const i="pwt-grid-item",r=['div[data-grid-item="true"]',"div.Masonry div.Collection-Item","div.Grid__Item",`div[data-test-id="${i}"]`],o=r.join(","),s=r.map((e=>`${e} img`)).join(","),a=r.map((e=>`${e} div[style*=background-image]`)).join(","),l=r.map((e=>`${e} video`)).join(",")},969853:(e,t,n)=>{n.d(t,{Z:()=>g,v:()=>p});var i=n(667294),r=n(543059),o=n(35954),s=n(226464),a=n(22773),l=n(790348),u=n(276602),c=n(317672),d=n(383434);const m=(0,d.X)("GridProfiler"),p=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,c.VZ)();function g({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:n,includeVideos:p=!1}){const g=(0,u.EV)(),f=null==g?void 0:g.id,_=null==g?void 0:g.setVisuallyCompleteResult,[v,w]=(0,i.useState)({status:"DISABLED"});(0,i.useEffect)((()=>{w(_?{status:"LAYOUT",failedCount:0,numOfItemsChecked:0}:{status:"DISABLED"})}),[f,_]),(0,i.useEffect)((()=>{if("DISABLED"!==v.status&&(0,r.ZP)(`GridVisuallyCompleteProfiler_${v.status}`),m("new status",v),"LAYOUT"===v.status){const e=((e,t)=>{const n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)})("scroll",(()=>{(0,r.ZP)("scrollDuringLayout")}));return()=>{e()}}return()=>{}}),[v.status]),(0,o.Z)((()=>{if(!g||!_)return;const{abort:i,metricId:r}=g;switch(v.status){case"LAYOUT":{const t=((e,t)=>{if(!t){const t=(0,c.LM)();if(t===e)return m("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,c.F9)())return m("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}})(v.numOfItemsChecked,e);t.complete?w({status:"TIMING",failedCount:0,pinElements:(0,c.cQ)(n,p)}):500*v.failedCount>6e4?((0,l.A9)(`images.${(0,s.KJ)(r)}.visuallyComplete.maxLayoutAttempt`),i("visuallyComplete_layoutTimeout"),w({status:"DISABLED"})):w({...v,failedCount:v.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{const e=(0,a.Cg)(),n=v.pinElements.length,o=[];let u=0,c=0,p=0;if(v.pinElements.forEach((({element:t,fileName:n})=>{const i=e.find((e=>e.name.endsWith(n)));i?i.responseEnd?(o.push(i),(0,d.v)(t,"green")):(p+=1,(0,d.v)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(c+=1,(0,d.v)(t,"red")):(u+=1,(0,d.v)(t,"greenyellow"))})),u||p)100*v.failedCount>6e4?((0,l.A9)(`images.${(0,s.KJ)(r)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:n,incompleteCount:u,noTimingCount:c,noTimingResponseEndCount:p}}),i("visuallyComplete_timingTimeout"),w({status:"DISABLED"})):w({...v,failedCount:v.failedCount+1});else{if(m(`All ${o.length} images are fetched`),t&&t.length){const e=((e,t)=>{let n=0,i=0,r=0,o=0,s=0;return e=e.filter((e=>"pin"===e.type)),t.forEach(((t,a)=>{var l,u,c,d,m,p;const g=t.fileName.split(".")[0];let f;f=e[a],g!==(null===(l=f)||void 0===l?void 0:l.image_signature)&&(f=e.find((e=>g===(null==e?void 0:e.image_signature)))),void 0===f?s+=1:f.is_promoted||"PROMOTED_PIN"===(null===(u=f.recommendation_reason)||void 0===u?void 0:u.reason)||null!==(c=f)&&void 0!==c&&null!==(d=c.promoter)&&void 0!==d&&d.length?r+=1:null!==f.story_pin_data_id&&void 0!==f.story_pin_data_id?n+=1:null!==(m=f)&&void 0!==m&&null!==(p=m.videos)&&void 0!==p&&p.video_list?i+=1:o+=1})),{storyPinCount:n,videoCount:i,adCount:r,imageCount:o,unknownCount:s}})(t,v.pinElements);Object.entries(e).forEach((([e,t])=>{g.addBinaryAnnotation(e,t,"I16")})),(0,l.A9)(`${(0,s.KJ)(r)}.pinTypes`,{tags:e})}_({imageTimings:o}),w({status:"DISABLED"}),(0,l.A9)(`images.${(0,s.KJ)(r)}.visuallyComplete.complete`,{tags:{totalImageCount:n,noTimingCount:c}})}break}}}),(e=>("LAYOUT"===e.status?500:"TIMING"===e.status&&100)||null)(v))}},790348:(e,t,n)=>{n.d(t,{A9:()=>m,DG:()=>c,H:()=>p,S$:()=>g,iF:()=>d});var i=n(172071),r=n(383434),o=n(50286),s=n(7789);const a=(0,r.X)("logPwtStats");let l=null,u=!0;function c(e){l={browserName:e.userAgent.browserName,browserVersion:e.userAgent.browserVersion,deviceType:(0,o.Mm)(e),isAuthenticated:e.isAuthenticated,isBot:e.isBot,isSocialBot:e.isSocialBot}}const d=e=>{l&&(l.historyAction=e)},m=(e,t={sampleRate:1},n=!0)=>{const r=s.DQ?1:t.sampleRate;if(!l)return a("pwt.metrics_quality.no_context"),void i.Z.increment("pwt.metrics_quality.no_context",r,{eventName:e});const{browserName:o,browserVersion:u,deviceType:c,isBot:d,isSocialBot:m}=l,p=`pwt.${(m?"socialBot":d&&"bot")||"nonbot"}.metrics_quality.${c}.${e}`,g={...t.tags||{},browserName:o,browserVersion:(null==u?void 0:u.split(".")[0])||"0"},f=t.count;n&&(a(`${p}: ${"number"==typeof f?f:1}`),t.tags&&a(Object.entries(t.tags))),s.is||i.Z.count(p,"number"==typeof f?f:1,r,g)},p=(e,t)=>m(`ERROR.${null!=t&&t.action?t.action+".":""}${e}`,{tags:t}),g=({appLoadName:e,clientNavName:t},n)=>{if(l){const i="APP_VOLUME.";u?(m(i.concat(e),{tags:{browserSupportsPwtProfiler:!!n}}),u=!1):"PUSH"===l.historyAction&&m(i.concat(t),{tags:{browserSupportsPwtProfiler:!!n}})}else i.Z.increment("pwt.metrics_quality.no_context",1,{eventName:e.concat(`.${t}`)})}},543059:(e,t,n)=>{n.d(t,{Ao:()=>l,BA:()=>u,L8:()=>d,ZP:()=>m,at:()=>r,gQ:()=>a,tl:()=>c});var i=n(985271);const r="masonryPagination";let o={};const s=e=>`📌 ${e}`,a=()=>{const e={};return Object.keys(o).forEach((t=>{(o[t]||[]).slice(0,3).forEach(((n,i)=>{e[i?`${t}_${i+1}`:t]=n}))})),e},l=(e,t)=>(o[e]||[]).filter((e=>e<t)).length,u=(e,t)=>l(e,t)>0,c=()=>{i.Z&&Object.keys(o).forEach((e=>((e,t)=>{const n=s(t);e.clearMarks(n),e.clearMeasures(n)})(i.Z,e))),o={}},d=e=>{i.Z&&(o[e]=(o[e]||[]).concat([i.Z.now()]),((e,t,n,i)=>{const r=s(t);e.measure(r,n,i)})(i.Z,e))},m=e=>{i.Z&&(o[e]=(o[e]||[]).concat([i.Z.now()]),((e,t)=>{const n=s(t);e.mark(n)})(i.Z,e))}},453821:(e,t,n)=>{n.d(t,{i:()=>i,p:()=>s});const i=({name:e,initiatorType:t})=>{switch(t){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:{const t=e.split("."),n=(t.length>1&&t.pop()||"").toLowerCase();return["js","mjs"].includes(n)?"script":"css"===n?"css":["mp4","m4v","mov","ts","m3u8"].includes(n)?"video":["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(n)?"image":"other"}}},r=e=>{const t=e.replace(new RegExp(`^${window.location.origin||""}`),""),n=document&&document.querySelector(`head > script[src='${t}']`);return!!n&&n.hasAttribute("defer")},o=e=>["pinimg","pinterest","pinterdev"].every((t=>!e.includes(`${t}`))),s=(e,t)=>{const n=i(e),{name:s}=e;return{category:n,isDeferred:"script"===n&&r(s),isExternal:o(s),isVisuallyCompleteRequired:"image"===n&&t.includes(s),timing:e}}},581341:(e,t,n)=>{n.d(t,{Z:()=>i});const i=e=>{let t=null;return{get:()=>t||e(),save:()=>{t=e()}}}},169213:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(e,t,n)=>{if(!window.PerformanceObserver)return null;try{const i=new window.PerformanceObserver(t);return i.observe(e),window.addEventListener("beforeunload",(()=>{i.disconnect()})),n&&window.addEventListener("popstate",(()=>{n()})),i}catch(i){return null}}},22773:(e,t,n)=>{n.d(t,{Cg:()=>f,Eg:()=>v,Hv:()=>h,LH:()=>w,MM:()=>y,X_:()=>m,y0:()=>_});var i=n(581341),r=n(169213),o=n(543059),s=n(602738),a=n(7789),l=n(453821),u=n(790348);let c;function d(){window.performance&&window.performance.clearResourceTimings&&((0,o.ZP)("resourceBufferCleared"),a.DQ&&console.info("Warning: Clearing resource timings in default buffer."),(0,u.A9)("resourceBufferSize",{count:(0,s.Z)("resource").length}),window.performance.clearResourceTimings())}const m=({size:e})=>{if(window.performance){window.PerformanceObserver?(c=(0,s.Z)("resource"),(0,r.Z)({entryTypes:["resource"]},(t=>{c=(c||[]).concat(t.getEntries()),c.length>e&&(c=c.slice(-e))}))):(window.addEventListener("popstate",(()=>{(0,s.Z)("resource").length>e&&d()})),window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(e));try{window.performance.onresourcetimingbufferfull=()=>{c||d()}}catch(t){}}},p=()=>c||(0,s.Z)("resource"),g=(0,i.Z)(p),f=p,_=()=>g.get(),v=e=>{e&&g.save(),c&&((0,u.A9)("customBufferSize",{count:c.length}),c=[]),d()},w=()=>({customBufferSize:c?c.length:0,defaultBufferSize:(0,s.Z)("resource").length}),h=(e,t=!0)=>{let n=0,i=0;const r=(o=e.filter((e=>t?!("image"!==(0,l.i)(e)||(e.responseEnd||(n+=1),e.transferSize||(i+=1),!e.responseEnd||!e.transferSize)):!!e.responseEnd&&!!e.transferSize)).map((e=>8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3))).length?o.reduce(((e,t)=>e+t),0)/o.length:null;var o;return t&&(n>0&&(0,u.A9)("images.downloadSpeed.noResponseEnd",{tags:{count:n}},!1),i>0&&(0,u.A9)("images.downloadSpeed.transferSize",{tags:{count:i}},!1)),r},y=e=>{if(!e)return"unknown";const t=Math.floor(e/1e3);return t<1?"0-1":t<5?"1-5":t<10?"5-10":t<20?"10-20":t<40?"20-40":t<80?"40-80":"80_or_above"}},602738:(e,t,n)=>{function i(e){var t,n;return(null===(t=window)||void 0===t||null===(n=t.performance)||void 0===n?void 0:n.getEntriesByType)&&window.performance.getEntriesByType(e)||[]}n.d(t,{Z:()=>i})},985271:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(r=window.performance)&&r.clearMarks&&r.clearMeasures&&r.clearResourceTimings&&r.getEntries&&r.getEntriesByName&&r.getEntriesByType&&r.mark&&r.measure&&r.now&&r.setResourceTimingBufferSize?r:null;var r},35954:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(667294);const r=(e,t)=>{const n=(0,i.useRef)((()=>{}));(0,i.useEffect)((()=>{n.current=e}),[e]),(0,i.useEffect)((()=>{if(null===t)return()=>{};const e=setInterval((()=>n.current()),t);return()=>clearInterval(e)}),[t])}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/69853-19334a50c8d87a59.mjs.map