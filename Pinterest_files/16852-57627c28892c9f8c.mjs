(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16852],{823493:(e,o,t)=>{var i=t(23279),r=t(513218);e.exports=function(e,o,t){var s=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(t)&&(s="leading"in t?!!t.leading:s,n="trailing"in t?!!t.trailing:n),i(e,o,{leading:s,maxWait:o,trailing:n})}},328369:(e,o,t)=>{t.d(o,{j:()=>s});const i={"á":"a","à":"a","â":"a","ä":"a","ã":"a","å":"a","æ":"a","ç":"c","é":"e","è":"e","ê":"e","ë":"e","í":"i","ì":"i","î":"i","ï":"i","ñ":"n","ó":"o","ò":"o","ô":"o","ö":"o","õ":"o","ø":"o","œ":"o","ß":"s","ú":"u","ù":"u","û":"u","ü":"u"},r=e=>{if(!e)return"";let o="";for(let t=0;t<e.length;t+=1)o+=i[e.charAt(t)]||e.charAt(t);return o},s=(e,o,t="name")=>{const i=o.toLowerCase();return e.filter((e=>((e,o)=>{const t=o.split(" "),i=e.split(" ");let s=0;for(let n=0;n<i.length;n+=1)(r(i[n]).includes(t[s])||i[n].includes(t[s]))&&(s+=1);return s===t.length})(e[t].toLowerCase(),i)))}},463490:(e,o,t)=>{t.d(o,{Z:()=>c});var i=t(537336),r=t(89061),s=t(883119),n=t(785893);const a=({collaborator_count:e,useLegoLayout:o,type:t})=>o?(0,n.jsx)(s.xu,{marginEnd:e?2:0,children:(0,n.jsx)(i.Z,{type:t})}):(0,n.jsx)(i.Z,{type:t}),c=({board:e,showCollaborativeIcon:o,showPrivateIcon:t,showProtectedIcon:c,showSectionsIcon:d,useLegoLayout:l})=>{var u;const _=(null==e||null===(u=e.collaborating_users)||void 0===u?void 0:u.length)||0;return o||t||c||d?(0,n.jsxs)(s.xu,{display:"flex",direction:"row",marginEnd:l?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[t&&(0,n.jsx)(a,{collaborator_count:_,useLegoLayout:l,type:"secret"}),c&&(0,n.jsx)(a,{collaborator_count:_,useLegoLayout:l,type:"protected"}),o&&(l?(0,n.jsx)(r.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,n.jsx)(i.Z,{type:"group"})),d&&(0,n.jsx)(i.Z,{type:"sections"})]}):null}},421816:(e,o,t)=>{t.d(o,{Z:()=>s});var i=t(883119),r=t(785893);const s=({image_url:e,naturalHeight:o,naturalWidth:t})=>(0,r.jsx)(i.xu,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:(0,r.jsx)(i.zd,{wash:!0,width:48,height:48,rounding:2,children:(0,r.jsx)(i.Ee,{src:e,alt:"",naturalHeight:o,naturalWidth:t})})})},756777:(e,o,t)=>{t.d(o,{Z:()=>a});var i=t(883119),r=t(785893);const s={__style:{margin:"0 10px",borderRight:"3px solid transparent",borderTop:"3px solid #fff",animation:"spin .8s linear infinite"}};function n(){return(0,r.jsx)(i.xu,{alignItems:"center",color:"primary",display:"flex",height:"100%",justifyContent:"center",position:"absolute",width:"100%",rounding:8,children:(0,r.jsx)(i.xu,{dangerouslySetInlineStyle:s,display:"inlineBlock",height:18,position:"relative",rounding:"circle",width:18})})}function a({disabled:e,name:o,onClick:t,size:s,submitting:a,text:c}){return(0,r.jsxs)(i.xu,{display:"flex",position:"relative",children:[a&&(0,r.jsx)(n,{}),(0,r.jsx)(i.zx,{color:"red",disabled:e||a,name:o,onClick:t,size:s,type:"submit",text:c})]})}},89061:(e,o,t)=>{t.d(o,{Z:()=>u});var i=t(189734),r=t.n(i),s=t(898781),n=t(19121),a=t(883119),c=t(349700),d=t(785893);function l(e){var o,t,i,r;const s=null!==(o=null!==(t=null==e?void 0:e.imageMediumUrl)&&void 0!==t?t:null==e?void 0:e.image_medium_url)&&void 0!==o?o:"";return{name:null!==(i=null!==(r=null==e?void 0:e.fullName)&&void 0!==r?r:null==e?void 0:e.full_name)&&void 0!==i?i:"",src:"https://s.pinimg.com/images/user/default_75.png"===s?void 0:s}}function u({board:e,forceViewer:o,isCompact:t,ownerOnly:i}){var u,_,b,p,I;const h=(0,s.ZP)(),f=(0,n.Z)(),m=i?[l(null==e?void 0:e.owner)]:function(e,o,t){const{collaborated_by_me:i,collaborating_users:s,owner:n}=null!=e?e:{},a=null!=s?s:[],c=[n];if(i||t){const e=a.findIndex((e=>o.isAuth&&e.id===o.id));if(-1!==e){const o=a.splice(e,1)[0];c.push(o)}else c.push(o)}const d=r()(a,"full_name");return[...c,...d]}(e,f,o).map(l),y=m.slice(0,3).map((e=>e.name));let g="";switch(m.length){case 3:g=(0,c.Wc)(`${h._('{{ first }}, {{ second }}, and {{ last }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars', 'List of three usernames')}`,{first:`${null!==(u=y[0])&&void 0!==u?u:""}`,second:`${null!==(_=y[1])&&void 0!==_?_:""}`,last:`${null!==(b=y[2])&&void 0!==b?b:""}`});break;case 2:g=(0,c.Wc)(`${h._('{{ first }} and {{ second }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars', 'List of two usernames.')}`,{first:`${null!==(p=y[0])&&void 0!==p?p:""}`,second:`${null!==(I=y[1])&&void 0!==I?I:""}`});break;default:g=y.join(", ")}const v=m.length>3?(0,c.Wc)(`, ${h.ngettext('Collaborators: {{ userNames }} and {{ leftCount }} more.', 'Collaborators: {{ userNames }} and {{ leftCount }} more.', m.length - 3, 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree', 'Accessibility label that lists the names of collaborators and a final count of non-displayed avatars')}`,{userNames:g,leftCount:""+(m.length-3)}):(0,c.Wc)(`, ${h._('Collaborators: {{ userNames }}.', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree', 'Accessibility label that lists the names of collaborators')}`,{userNames:g});return(0,d.jsx)(a.HE,{accessibilityLabel:v,collaborators:m,size:t?"xs":"sm"})}},537336:(e,o,t)=>{t.d(o,{Z:()=>n});var i=t(898781),r=t(883119),s=t(785893);const n=function({type:e}){const o=(0,i.ZP)(),t={group:{accessibilityLabel:o._('group board', 'Board picker group board icon', 'Board picker group board icon'),icon:"people"},protected:{accessibilityLabel:o._('protected board', 'Board picker protected board icon', 'Board picker protected board icon'),icon:"protect"},secret:{accessibilityLabel:o._('secret board', 'Board picker secret board icon', 'Board picker secret board icon'),icon:"lock"},sections:{accessibilityLabel:o._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:o._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-down"}}[e];return(0,s.jsx)(r.xu,{marginStart:1,children:(0,s.jsx)(r.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,s.jsx)(r.JO,{accessibilityLabel:t.accessibilityLabel,icon:t.icon,size:"12",color:"default"}):(0,s.jsx)(r.JO,{accessibilityLabel:t.accessibilityLabel,icon:t.icon,size:16,color:"default"})})})}},677324:(e,o,t)=>{t.d(o,{$n:()=>h,CE:()=>u,F$:()=>I,d9:()=>f,e1:()=>l,vB:()=>b});var i=t(647316),r=t(6637),s=t(935409),n=t(778821),a=t(379725),c=t(414327),d=t(875495);function l(e){return o=>{const{boardId:t,sectionIdBefore:i,sectionIdAfter:s,sourceSectionId:a,targetSectionId:c}=e;o((0,d._f)({feedType:n.DV.BOARD_SECTIONS,feedId:t,itemType:"board_section",sourceItemId:a,targetItemId:c}));const l={section_id:a,section_before:i||void 0,section_after:s||void 0};return r.ZP.create("BoardSectionsReorderResource",l).callUpdate({showError:!1})}}function u(e,o){return t=>t((0,a.U2)("BoardSectionResource",{options:{field_set_key:o||"board_page",section_id:e}}))}function _(e,o){return{type:"SECTION_ADDED",payload:{boardId:e,section:o}}}function b({boardId:e,name:o,nameSource:t,pinImport:a,initialPinIds:l=[]},u,b){let p=0;"RECOMMENDATION"===t?p=1:"EDITED_RECOMMENDATION"===t&&(p=2);const I={board_id:e,initial_pins:a&&!a.all?a.pinIds:l,name:o,name_source:p,...b?{orbac_subject_id:b}:Object.freeze({})};return o=>r.ZP.create("BoardSectionResource",I).callCreate({showError:!1}).then((({resource_response:{data:t}})=>{o(_(e,t)),o((0,d.vX)({feedId:e,feedType:n.DV.BOARD_SECTIONS,itemIds:[t.id],itemType:"board_section"})),o((0,s.Tq)(e,"pin_count")),o((0,c.jB)("BoardSectionsRepinResource",{board_id:e}));const{all:r,pinIds:l}=a||{all:!1,pinIds:[]};return r?new Promise(((r,s)=>o((0,i.Z)({inverseSelection:!0,selectedPinIds:l,source:{boardId:e,sectionId:null},target:{boardId:e,sectionId:t.id}},u)).then((()=>r(t))).catch(s))):(l.length>0&&o((0,d.N8)(n.DV.BOARD_PINS,e)),t)}))}function p(e,o){return{type:"SECTION_DELETED",payload:{boardId:e,sectionId:o}}}function I(e,o,t){return i=>r.ZP.create("BoardSectionEditResource",{section_id:o,...t?{orbac_subject_id:t}:Object.freeze({})}).callDelete({showError:!1}).then((()=>Promise.all([i(p(e,o)),i((0,d.EX)({feedId:e,feedType:n.DV.BOARD_SECTIONS,itemIds:[o],itemType:"board_section"})),i((0,s.Tq)(e,"pin_count")),i((0,c.jB)("BoardSectionsRepinResource",{board_id:e}))])))}function h(e,o,t,i){return a=>r.ZP.create("BoardSectionEditResource",{section_id:o,title:t,...i?{orbac_subject_id:i}:Object.freeze({})}).callCreate({showError:!1}).then((o=>{const t=o.resource_response.data;return a(function(e,o){return t=>{const i=o.board;var r,a,c,l,u;i&&i.id!==e?(t(p(e,null!==(r=o.id)&&void 0!==r?r:"")),t((0,d.EX)({feedId:e,feedType:n.DV.BOARD_SECTIONS,itemIds:[null!==(a=o.id)&&void 0!==a?a:""],itemType:"board_section"})),t((0,s.Tq)(e,"pin_count")),t(_(null!==(c=i.id)&&void 0!==c?c:"",o)),t((0,d.vX)({feedId:null!==(l=i.id)&&void 0!==l?l:"",feedType:n.DV.BOARD_SECTIONS,itemIds:[null!==(u=o.id)&&void 0!==u?u:""],itemType:"board_section"})),t((0,s.Tq)(e,"pin_count"))):t({type:"SECTION_UPDATED",payload:{boardId:e,section:o}})}}(e,t)),a((0,c.jB)("BoardSectionsRepinResource",{board_id:e})),t}))}function f(e,o,t){return i=>r.ZP.create("BoardSectionsMergeResource",{source_section_id:o,target_section_id:t}).callUpdate({showError:!1}).then((r=>Promise.all([i(p(e,o)),i((0,c.jB)("BoardSectionsRepinResource",{board_id:e})),i(u(t)),i((0,d.N8)(n.DV.SECTION_PINS,t))]).then((()=>r))))}},647316:(e,o,t)=>{t.d(o,{Z:()=>b,S:()=>_});var i=t(6637),r=t(935409),s=t(778821),n=t(677324),a=t(124237);const c=e=>o=>{a.Z.showError(function(e,o){switch(e.api_error_code){case 2171:case 2172:case 2173:return o._('Please wait until the previous board action finishes.', ' - ', ' -- ');default:return e.message}}(o,e))};var d=t(875495);const l=e=>(0,d.N8)(e.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,e.sectionId||e.boardId);function u(e,o){const{source:t,target:i}=e;i.boardId!==t.boardId?(o((0,r.Tq)(t.boardId,"pin_count")),o((0,r.Tq)(i.boardId,"pin_count"))):t.sectionId&&i.sectionId||o((0,r.Tq)(i.boardId,"pin_count")),t.sectionId&&o((0,n.CE)(t.sectionId)),i.sectionId&&o((0,n.CE)(i.sectionId))}function _(e){return o=>{const{selectedPinIds:t,source:i,target:r}=e;o((0,d.EX)({feedId:i.sectionId||i.boardId,feedType:i.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:t,itemType:"pin"})),o((0,d.vX)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:t,itemType:"pin"})),u(e,o)}}function b(e,o){return t=>function(e,o,t){const{inverseSelection:r,selectedPinIds:n,source:a,target:u,orbacSubjectId:_}=e;if(a.boardId===u.boardId&&(a.sectionId||null)===(u.sectionId||null))return Promise.reject();if(r){const e={board_id:a.boardId,new_board_id:u.boardId,old_section_id:a.sectionId||void 0,new_section_id:u.sectionId||void 0,pin_ids:n,orbac_subject_id:_};return i.ZP.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then((()=>Promise.all([o(l(a)),o(l(u))]))).catch(c(t))}{const e=(e,t)=>{o((0,d.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:n,itemType:"pin"})),o((0,d.vX)({feedId:t.sectionId||t.boardId,feedType:t.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:n,itemType:"pin"}))};e(a,u);const r=()=>e(u,a);if(u.boardId===a.boardId){if(u.sectionId){const e={section_id:u.sectionId,pins:n,orbac_subject_id:_};return i.ZP.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch((e=>{r(),c(t)(e)}))}{const e={section_id:a.sectionId,pins:n,orbac_subject_id:_};return i.ZP.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch((e=>{r(),c(t)(e)}))}}{const e={board_id:u.boardId,section_id:u.sectionId||void 0,pin_ids:n,orbac_subject_id:_};return i.ZP.create("BulkEditResource",e).callUpdate({showError:!1}).catch((e=>{r(),c(t)(e)}))}}}(e,t,o).then((()=>u(e,t)))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16852-57627c28892c9f8c.mjs.map