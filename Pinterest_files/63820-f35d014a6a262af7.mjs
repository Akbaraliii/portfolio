(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[63820],{570469:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(683402),r=n(896625),s=n(704115),a=n(115535),i=n(927955),c=n(966113),u=n(743413),l=n(867820),_=n(665219),d=n(330102),p=n(297507),g=n(3223);const m=(e,t)=>n=>{const{facebook_token:m,invite_code:h,locale:w,country:f,country_from_hostname:y,country_from_ip:b,origin:v,referrer:k,region_from_ip:E,unauth_id:S,user_agent_platform:M}=r.Z.instance,Z={logContextEventType:e=>{t({event_type:e})},sendActiveUserPing:a.Z,registerUserContext:{facebookToken:m,inviteCode:h,locale:w,referrer:k,unauthId:S},onCorsHandshakeHost:c.Z.settings.CORS_HANDSHAKE_DOMAINS.includes(v),successWithoutTokenErrorMessage:e._('We were able to create your account, but there was a problem logging you in. Try refreshing the page to continue.', ' - ', ' -- '),trackRegisterSuccess:()=>{(0,l.My)(`signup_referrer_module.${String((0,s.Z)().referrer||function(){const e=i.Z.instance.getState().ui.mainComponent.initial;return e?(0,o.Z)(e):null}())}`),"ios"===M?(0,l.My)("signup_mweb.iphone_web"):"ipad"===M?(0,l.My)("signup_mweb.ipad_web"):"android"===M&&(0,l.My)("signup_mweb.android_web")}};return(0,g.c_)({country:f,countryFromHostName:y,countryFromIp:b})&&(0,p.yP)({id:u.Y7,eventCategory:"NewUsers",eventName:"Desktop"}),(0,g.$r)({country:f,countryFromHostName:y,countryFromIp:b,regionFromIp:E})&&(0,p.jw)({id:"flashtalking-d-reg",eventCategory:"NewUsers",eventName:"Desktop"}),(0,g.NR)(f,E)&&(0,p.EN)({pixelId:d.NS,eventCategory:"NewUsers",eventName:"Desktop"}),(0,g.Fc)({country:f,countryFromHostName:y,countryFromIp:b})&&(0,p.Be)({pixelId:d.Ks,eventCategory:"NewUsers",eventName:"Desktop"}),(0,_.Z)(n,Z)}},366284:(e,t,n)=>{n.d(t,{G6:()=>s,i7:()=>a,oi:()=>o,u$:()=>r,un:()=>c,vU:()=>i});const o=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>{switch(!0){case e.includes("Chrome"):return o.CHROME;case e.includes("Safari"):return o.SAFARI;case e.includes("Firefox"):return o.FIREFOX;case e.includes("Opera"):return o.OPERA;case e.includes("IE"):return o.IE;case e.includes("Edge"):return o.EDGE;default:return o.OTHER}};function s(e){return r(e)===o.SAFARI}function a(e){return r(e)===o.CHROME}function i(e){return r(e)===o.FIREFOX}function c(e){return r(e)===o.EDGE}},56641:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(567831),r=n(867820);function s(e,t){if(t&&!(()=>{try{return window.localStorage.test=2,!1}catch(e){return!0}})()){const t=window.open(e,"_blank");return t&&(t.opener=null),t}{const t=(0,o.Z)(e);return setTimeout((()=>{(0,r.My)("setting_new_window_location")}),0),window.location.href=t,window}}},665219:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(231486),r=n(376432),s=n(6637),a=n(704177),i=n(45169),c=n(81759),u=n(826067),l=n(957161),_=n(487116),d=n(584595),p=n(995146),g=n(867820),m=n(226198);let h=0;const w=(e,t)=>{var n,f,y;const b={...e},{onCorsHandshakeHost:v,registerUserContext:k,sendActiveUserPing:E,successWithoutTokenErrorMessage:S}=t,M=(0,c.t_)(),Z=null!==(n=null===(f=window)||void 0===f||null===(y=f.location)||void 0===y?void 0:y.search)&&void 0!==n?n:null,A=(0,u.mB)(Z).utm_campaign;M&&(b.visited_pages=M),A&&(b.utm_campaign=A);const C=a.ZP.localStorage.getItem("visitedPinLandingPagesBeforeLogin");if(M)b.visited_pages=M;else if(C){const e=[];for(const t of C)t.is_shared_pin&&e.push({ts:t.ts,path:t.path,first_pin_image_signature:t.image_signature,is_shared:!0});e&&(b.visited_pages=JSON.stringify(e.concat(M||[])))}b.user_behavior_data=(()=>{const e={};return["signupTriedSkipInputName","signupTriedSkipGender","unauthTopicsFollowed"].forEach((t=>{const n=a.ZP.localStorage.getItem(t);n&&(e[t]=n)})),JSON.stringify(e)})();const I=e=>((0,_.D)("signup"),o.zN(m.Mq.name),o.zN(m.x2.name),E(),o.t8(m.Xh,"1"),(0,l.L_)("_lastVisitedPages"),((e,{logContextEventType:t,trackRegisterSuccess:n})=>{let o;switch(e.container){case"home_page":o=1750,(0,g.My)("signup_home_page");break;case"mweb_homepage":o=1750,(0,g.My)("signup_mweb_home_page");break;case"plain_signup_modal":o=1751,(0,g.My)("signup_plain_modal");break;case"closeup_signup_modal":o=1752,(0,g.My)("signup_closeup_modal");break;case"widescreen_signup_modal":o=1753,(0,g.My)("signup_widescreen_modal");break;case"pinit_button_landing":o=1755,(0,g.My)("signup_pinit_button_landing");break;case"inspired_banner":(0,g.My)("signup_inspired_banner");break;case"category_jump_banner":(0,g.My)("signup_category_jump_banner");break;case"send_pin_banner":o=1756,(0,g.My)("send_pin_banner");break;default:o=1754,(0,g.My)("signup_unknown_placement")}const r=e.container||"container_unknown";(0,g.My)(`signup.container.${r}`);const s=e.signupSource||"signupSource_unknown";(0,g.My)(`signup.source.${s}`),o&&t(o);const a=document.referrer;let c;c=a?a.indexOf("/t.co/")>-1?"twitter":a.indexOf("google.")>-1?"google":a.indexOf("bing.")>-1?"bing":a.indexOf("facebook.")>-1?"facebook":"other":"direct",n(),(0,g.De)({action:"signup",event:"success",referrer:c,type:(0,i.sR)(e)})})(b,t),e),O=e=>{e=(0,r.Z)(e);const{apiErrorCode:n}=e;n===d.tz&&((0,g.My)("multi_step_set_age_restrict_cookie"),o.t8(m.It,"1",(0,o.kZ)(m.It)));if((!n||[d.dO,d.cZ].includes(n))&&h<3)return(0,g.My)(`unauth_web.signup_retry_error.${String(n)}.${String(b.container)}`),h+=1,w(b,t);throw(0,g.De)({action:"signup",event:"fail",type:(0,i.sR)(b)}),e};if(!b.facebook_id&&!b.gplus_code&&!b.gplus_id_token&&!b.google_open_id_token&&!b.line_id_token&&Boolean(b.email)&&v){(0,g.My)("unauth_cross_domain_register_debugging_counter");const e=e=>{(0,g.My)(`web_cross_domain_register.${e}.${(0,i.sR)(b)}`)};return e("attempt"),(0,p.a$)(b,k).then((t=>{I(t);const n=t.data||"";if(n)return e("success_with_token"),(0,p.kv)(n,!0).then((t=>{e("success_token_exchanged")}),(t=>{throw e("success_token_not_exchanged"),t}));throw e("success_without_token"),new Error(S)}),(t=>{e("failure"),O(t)}))}return s.ZP.create("UserRegisterResource",b).callCreate().then((e=>I(e)),(e=>O(e)))},f=w},233211:(e,t,n)=>{n.d(t,{B$:()=>u,Cw:()=>a,I7:()=>c,c4:()=>i});var o=n(667294),r=n(425288);const s=(0,o.createContext)(null),a=()=>(0,o.useContext)(s),i=s.Provider,{Provider:c,useHook:u}=(0,r.Z)("DesktopCoreLogin")},713930:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(172071);function r(e,t){return new Promise(((n,r)=>{if(document.querySelector(`script[src="${e}"]`)){let e=0;if("FACEBOOK"===t)if(window.FB)n();else{const t=setInterval((()=>{window.FB||20===e?(clearInterval(t),n()):(e+=1,o.Z.increment(`mweb.loadScript.facebook.tries_${e}`,.01))}),100)}else if("GSI"===t)if(window.google)n();else{const t=setInterval((()=>{window.google||20===e?(clearInterval(t),n()):(e+=1,o.Z.increment(`mweb.loadScript.gsi.tries_${e}`,.01))}),100)}else n()}else{const t=document.createElement("script");t.src=e,t.async=!0,t.addEventListener("load",(()=>n())),t.addEventListener("error",r),document.getElementsByTagName("head")[0].appendChild(t)}}))}},524172:(e,t,n)=>{n.d(t,{M:()=>g,Z:()=>m});var o=n(667294),r=n(914772),s=n(366284),a=n(217468),i=n(50286),c=n(780280),u=n(425288),l=n(304930),_=n(83969),d=n(785893);const{Provider:p,useMaybeHook:g}=(0,u.Z)("GoogleSignInApi");function m({children:e,inDuplo:t}){const n=(()=>{const e=(0,i.HG)(),t=(0,l.Z)(),n=(0,a.t)(e?"web_google_disabled":"mweb_google_disabled");return!t||n().anyEnabled})(),u=(()=>{const{userAgent:e}=(0,c.B)(),{browserName:t,platform:n}=e,o=null!=t?t:"";return(0,s.G6)(o)||"ios"===n})(),g=(0,l.j)(),m=(0,o.useRef)("enabled_allow_duplicated_handlers"===g),h=(0,o.useRef)(null),w=(0,o.useRef)(new Set),f=(0,o.useRef)(new Set),y=(0,o.useRef)(null);(0,o.useEffect)((()=>{if(n)w.current.clear(),f.current.clear();else{const e=e=>(0,r.Z)(e,{inDuplo:t,shouldLogAutologin:!0});window.onGoogleLibraryLoad=()=>{e({type:"loadScript",status:"success"});const t=(0,_.Fm)();e({type:"apiClient",valid:!!t}),t&&(y.current=t,f.current.forEach((e=>e(t))),f.current.clear(),(0,_.OY)({autoSelect:!0,itpSupport:u},(t=>{if(e({type:"response",valid:!!t}),!t)return;var n;if(m.current)return null===(n=h.current)||void 0===n||n.call(h,t),void w.current.forEach((e=>e(t)));if("SIGN_IN_WITH_GOOGLE_BUTTON"===(0,_.PL)(t.select_by)){const e=Array.from(w.current),n=e[e.length-1];n&&n(t)}else{var o;null===(o=h.current)||void 0===o||o.call(h,t)}})))};(async()=>{e({type:"loadScript",status:"start"});try{await(0,_.Px)({unsafe:!0})}catch(t){}})()}}),[n,t,u]);const b=(0,o.useRef)({ensureInit:(e,t)=>("button"===e?w.current.add(t):h.current=t,new Promise((e=>{y.current?e(y.current):f.current.add(e)}))),removeCallback:e=>{w.current.delete(e)}});return(0,d.jsx)(p,{value:b.current,children:e})}},83969:(e,t,n)=>{n.d(t,{Fm:()=>a,OY:()=>c,PL:()=>l,Px:()=>i,ru:()=>u});var o=n(713930),r=n(966113),s=n(867820);const a=()=>{var e,t,n;return null===(e=window)||void 0===e||null===(t=e.google)||void 0===t||null===(n=t.accounts)||void 0===n?void 0:n.id},i=e=>(0,o.Z)("https://accounts.google.com/gsi/client",null!=e&&e.unsafe?null:"GSI"),c=({autoSelect:e,itpSupport:t},n)=>{var o;null===(o=a())||void 0===o||o.initialize({auto_select:null!=e&&e,client_id:r.Z.settings.GPLUS_CLIENT_ID,callback:n,cancel_on_tap_outside:!1,context:"use",itp_support:t})},u=({buttonRef:e,isDesktop:t})=>{const n=a();if(n&&e.current){const t=e.current.offsetWidth;n.renderButton(e.current,{size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px"})}else(0,s.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},l=e=>"auto"===e?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT"},914772:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(701563),r=n(867820);const s=(e,{inDuplo:t,shouldLogAutologin:n})=>{const s=e=>n&&(0,r.dy)({event:e,provider:"google"}),a=e=>n&&(0,o.RP)("google_autologin",e),i=e=>n&&(0,o.M3)("google_autologin",e),c=t?"mweb_google_one_tap":"unauth.google_one_tap";switch(e.type){case"loadScript":if("start"===e.status){const e=t?"mweb_unauth":"web_unauth";(0,r.My)(`${e}.gsi_script.start_dynamic_loading`),(0,r.My)(`${c}.load_script.attempt`),s("start"),s("load_script_start"),i("autoLoginGoogleStart")}else"success"===e.status?((0,r.My)(`${c}.load_script.success`),s("load_script_success")):((0,r.My)(`${c}.load_script.fail`),s("load_script_failure"));break;case"apiClient":e.valid?((0,r.My)(`${c}.sdk_exists`),s("initialize_library"),(0,r.My)(`${c}.initialize`),i("autoLoginGoogleInitEnd")):(a("noAccountFound"),s("global_object_not_found"));break;case"response":e.valid?s("receive_credential_response_from_provider"):a("noResponse");break;case"autologin":"start"===e.status?(s("pinterest_login_start"),(0,r.NC)("press_google_one_tap_other"),(0,r.My)(`${c}.select_by.auto`),(0,r.My)(`${c}.retrieve_credential.success`),(0,o.M3)("google_autologin","autoLoginGoogleEnd"),(0,o.PA)("google_autologin")):"success"===e.status?(s("pinterest_login_success"),s("end")):(s("pinterest_login_failure"),s("end"));break;case"oneTapPromptLoginAttempt":(0,r.NC)("press_google_one_tap"),(0,r.My)(`${c}.select_by.${e.selectBy}`),(0,r.My)(`${c}.retrieve_credential.success`),(0,o.PA)("google_autologin");break;case"promptNotification":const{type:n,reason:u}=(e=>{const t=e.getMomentType();switch(t){case"display":return{type:t,reason:e.isDisplayed()?"displayed":`not_displayed.${e.getNotDisplayedReason()}`};case"skipped":return{type:t,reason:e.getSkippedReason()};default:return{type:t,reason:e.getDismissedReason()}}})(e.notification);(0,r.My)(`${c}.${n}_moment.${u}`)}}},304930:(e,t,n)=>{n.d(t,{Z:()=>c,j:()=>i});var o=n(466225),r=n(19121),s=n(217468),a=n(50286);const i=()=>{const e=(0,a.HG)(),{isAuth:t}=(0,r.Z)();return(0,s.a)((({isAuth:e,isDesktop:t})=>e?t?"auth_dweb_auth_google_sign_in_safe_mode":"auth_mweb_auth_google_sign_in_safe_mode":t?"unauth_dweb_auth_google_sign_in_safe_mode":"unauth_mweb_auth_google_sign_in_safe_mode")({isAuth:t,isDesktop:e})).group},c=()=>(0,o.Z)(i())},701563:(e,t,n)=>{n.d(t,{M3:()=>m,PA:()=>h,RP:()=>g,gq:()=>d});var o=n(729524),r=n(991067),s=n(543059),a=n(358864),i=n(558775),c=n(985271),u=n(638089),l=n(790348);const _={},d=(e,t)=>{t.forEach((t=>{_[t]=(({name:e,pwtStaticContext:t})=>{if(!c.Z||!(0,r.Z)())return null;const n={type:"stopwatch",name:e},s=[];let l=!0;return{abort:e=>{l&&(l=!1,(0,i.Z)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{l&&s.push({label:e,timestamp:c.Z.now()})},stop:()=>{if(!l)return;l=!1;const e={type:"COMPLETE",traceId:(0,a.Z)(),startTime:0,endTime:c.Z.now(),spans:[],annotationMap:(0,o.Z)(s),binaryAnnotationMap:(0,u.ng)({metricId:n,pwtStaticContext:t})};(0,i.Z)({metricId:n,pwtStaticContext:t,result:e})}}})({name:t,pwtStaticContext:e})}))},p=e=>_[e],g=(e,t)=>{const n=p(e);if(n)try{n.abort(t)}catch(o){(0,l.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},m=(e,t)=>{const n=p(e);n&&(n.annotate(t),(0,s.ZP)(`stopwatch_${e}_${t}`))},h=e=>{const t=p(e);if(t)try{t.stop()}catch(n){(0,l.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},729524:(e,t,n)=>{n.d(t,{Z:()=>o});const o=e=>{let t={};e.forEach((({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}}));let n=Object.freeze({});return Object.keys(t).forEach((e=>{(t[e]||[]).forEach(((t,o)=>{const r=o?`${e}_${o+1}`:e;n={...n,[r]:t}}))})),n}},874103:(e,t,n)=>{n.d(t,{OA:()=>l,f$:()=>g,rY:()=>c,sk:()=>m,wQ:()=>_,xW:()=>d,yc:()=>u,ys:()=>p});var o=n(172071);const r="onloadRecaptchaJsCallback",s="6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r",a="recaptcha-enterprise-src",i=(e,t,n)=>{o.Z.increment("recaptcha_v3.request_token.attempt",.1,{action:n}),void 0===window.grecaptcha||void 0===window.grecaptcha.enterprise?(t(new Error("Error loading reCAPTCHA Enterprise")),o.Z.increment("recaptcha_v3.request_token.js_loading_error",.1,{action:n})):window.grecaptcha.enterprise.ready((()=>{try{window.grecaptcha.enterprise.execute(s,{action:n}).then(e).catch(t)}catch(r){o.Z.increment("recaptcha_v3.request_token.exec_error",.1,{action:n}),t(r)}}))},c=(e,t,n)=>{if(window[r]=function(){return i(e,t,n)},document.getElementById(a))i(e,t,n);else{const e=document.createElement("script");e.id=a,e.src=`https://www.recaptcha.net/recaptcha/enterprise.js?onload=${r}&render=${s}`;const t=document.getElementsByTagName("script")[0];t.parentNode&&t.parentNode.insertBefore(e,t)}},u=105e3,l=8e3,_="mweb_auth",d="mweb_login",p="mweb_signup",g="web_auth",m="web_unauth"},497997:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(667294);const r=(0,o.createContext)();var s=n(785893);function a({children:e,fallback:t,dangerouslyServerRenderForGraphQL:n=!1}){const a=t||null;(0,o.useContext)(r);return(0,s.jsx)(o.Suspense,{fallback:a,children:e})}},683402:(e,t,n)=>{function o(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}n.d(t,{Z:()=>o})},50286:(e,t,n)=>{n.d(t,{HG:()=>c,Mm:()=>r,Wb:()=>i,ZP:()=>u,ml:()=>a});var o=n(780280);function r(e){const{isMobile:t,isTablet:n}=e.userAgent;return n?"tablet":t?"phone":"desktop"}const s=()=>r((0,o.B)()),a=()=>"phone"===s(),i=()=>"tablet"===s(),c=()=>"desktop"===s(),u=s},154391:(e,t,n)=>{n.d(t,{H:()=>s,o:()=>r});var o=n(425288);const{Provider:r,useHook:s}=(0,o.Z)("LimitedLogin")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/63820-f35d014a6a262af7.mjs.map