import{U as ae,W as J,aJ as ne,aK as I,T as Me,D as w,p as L,r as ee,j as f,$ as Fe,X as ot,G as k,C as ct,aL as ut,I as M,m as F,ak as H,i as $,aM as dt,u as R,e as c,O as Q,M as vt,aN as ft,k as De,v as mt,aO as ze,E as Oe,aw as Ne,a3 as me,a5 as ye,ax as ge,x as he,az as yt,l as le,au as Se,aB as gt,aH as ht,J as St,y as ie,aC as je,aD as Ee,a6 as be,a7 as ke,aE as Ce,A as pe,aP as bt,aa as kt,aI as He,P as ce,f as te,H as _e,K as Ge,Q as ue,at as Ct,F as pt,av as _t,aQ as Vt,aR as W,aS as wt,_ as Ve,o as x,b as q,w as O,d as E,t as j,a as se,V as we,aT as It,aU as At,aV as Pt,aW as Lt,n as Bt,ah as xt,ad as Re,c as Z,ae as Ot}from"./index-dc33e591.js";import{d as Ke}from"./date.helper-8b7b65f2.js";import{k as Gt}from"./kennzeichen-0378dd8e.js";import{V as $e}from"./VAvatar-b9c3ca50.js";const de=Symbol.for("vuetify:list");function Ue(){const e=ae(de,{hasPrepend:J(!1),updateHasPrepend:()=>null}),i={hasPrepend:J(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return ne(de,i),e}function We(){return ae(de,null)}const Ie=e=>{const i={activate:a=>{let{id:t,value:l,activated:n}=a;return t=I(t),e&&!l&&n.size===1&&n.has(t)||(l?n.add(t):n.delete(t)),n},in:(a,t,l)=>{let n=new Set;if(a!=null)for(const s of Me(a))n=i.activate({id:s,value:!0,activated:new Set(n),children:t,parents:l});return n},out:a=>Array.from(a)};return i},qe=e=>{const i=Ie(e);return{activate:t=>{let{activated:l,id:n,...s}=t;n=I(n);const o=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:o})},in:(t,l,n)=>{let s=new Set;if(t!=null){const o=Me(t);o.length&&(s=i.in(o.slice(0,1),l,n))}return s},out:(t,l,n)=>i.out(t,l,n)}},$t=e=>{const i=Ie(e);return{activate:t=>{let{id:l,activated:n,children:s,...o}=t;return l=I(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...o})},in:i.in,out:i.out}},Tt=e=>{const i=qe(e);return{activate:t=>{let{id:l,activated:n,children:s,...o}=t;return l=I(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...o})},in:i.in,out:i.out}},Mt={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return t.delete(i),t},select:()=>null},Je={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){let n=l.get(i);for(t.add(i);n!=null&&n!==i;)t.add(n),n=l.get(n);return t}else t.delete(i);return t},select:()=>null},Ft={open:Je.open,select:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(!a)return t;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},Ae=e=>{const i={select:a=>{let{id:t,value:l,selected:n}=a;if(t=I(t),e&&!l){const s=Array.from(n.entries()).reduce((o,y)=>{let[m,g]=y;return g==="on"&&o.push(m),o},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,l?"on":"off"),n},in:(a,t,l)=>{let n=new Map;for(const s of a||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:l});return n},out:a=>{const t=[];for(const[l,n]of a.entries())n==="on"&&t.push(l);return t}};return i},Qe=e=>{const i=Ae(e);return{select:t=>{let{selected:l,id:n,...s}=t;n=I(n);const o=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:o})},in:(t,l,n)=>{let s=new Map;return t!=null&&t.length&&(s=i.in(t.slice(0,1),l,n)),s},out:(t,l,n)=>i.out(t,l,n)}},Dt=e=>{const i=Ae(e);return{select:t=>{let{id:l,selected:n,children:s,...o}=t;return l=I(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...o})},in:i.in,out:i.out}},zt=e=>{const i=Qe(e);return{select:t=>{let{id:l,selected:n,children:s,...o}=t;return l=I(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...o})},in:i.in,out:i.out}},Nt=e=>{const i={select:a=>{let{id:t,value:l,selected:n,children:s,parents:o}=a;t=I(t);const y=new Map(n),m=[t];for(;m.length;){const h=m.shift();n.set(h,l?"on":"off"),s.has(h)&&m.push(...s.get(h))}let g=o.get(t);for(;g;){const h=s.get(g),b=h.every(u=>n.get(u)==="on"),r=h.every(u=>!n.has(u)||n.get(u)==="off");n.set(g,b?"on":r?"off":"indeterminate"),g=o.get(g)}return e&&!l&&Array.from(n.entries()).reduce((b,r)=>{let[u,d]=r;return d==="on"&&b.push(u),b},[]).length===0?y:n},in:(a,t,l)=>{let n=new Map;for(const s of a||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:l});return n},out:(a,t)=>{const l=[];for(const[n,s]of a.entries())s==="on"&&!t.has(n)&&l.push(n);return l}};return i},X=Symbol.for("vuetify:nested"),Xe={id:J(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:w(!1),selectable:w(!1),opened:w(new Set),activated:w(new Set),selected:w(new Map),selectedValues:w([])}},jt=L({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Et=e=>{let i=!1;const a=w(new Map),t=w(new Map),l=ee(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=f(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return $t(e.mandatory);case"single-leaf":return Tt(e.mandatory);case"independent":return Ie(e.mandatory);case"single-independent":default:return qe(e.mandatory)}}),s=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return zt(e.mandatory);case"leaf":return Dt(e.mandatory);case"independent":return Ae(e.mandatory);case"single-independent":return Qe(e.mandatory);case"classic":default:return Nt(e.mandatory)}}),o=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ft;case"single":return Mt;case"multiple":default:return Je}}),y=ee(e,"activated",e.activated,r=>n.value.in(r,a.value,t.value),r=>n.value.out(r,a.value,t.value)),m=ee(e,"selected",e.selected,r=>s.value.in(r,a.value,t.value),r=>s.value.out(r,a.value,t.value));Fe(()=>{i=!0});function g(r){const u=[];let d=r;for(;d!=null;)u.unshift(d),d=t.value.get(d);return u}const h=ot("nested"),b={id:J(),root:{opened:l,activatable:k(e,"activatable"),selectable:k(e,"selectable"),activated:y,selected:m,selectedValues:f(()=>{const r=[];for(const[u,d]of m.value.entries())d==="on"&&r.push(u);return r}),register:(r,u,d)=>{u&&r!==u&&t.value.set(r,u),d&&a.value.set(r,[]),u!=null&&a.value.set(u,[...a.value.get(u)||[],r])},unregister:r=>{if(i)return;a.value.delete(r);const u=t.value.get(r);if(u){const d=a.value.get(u)??[];a.value.set(u,d.filter(v=>v!==r))}t.value.delete(r),l.value.delete(r)},open:(r,u,d)=>{h.emit("click:open",{id:r,value:u,path:g(r),event:d});const v=o.value.open({id:r,value:u,opened:new Set(l.value),children:a.value,parents:t.value,event:d});v&&(l.value=v)},openOnSelect:(r,u,d)=>{const v=o.value.select({id:r,value:u,selected:new Map(m.value),opened:new Set(l.value),children:a.value,parents:t.value,event:d});v&&(l.value=v)},select:(r,u,d)=>{h.emit("click:select",{id:r,value:u,path:g(r),event:d});const v=s.value.select({id:r,value:u,selected:new Map(m.value),children:a.value,parents:t.value,event:d});v&&(m.value=v),b.root.openOnSelect(r,u,d)},activate:(r,u,d)=>{if(!e.activatable)return b.root.select(r,!0,d);h.emit("click:activate",{id:r,value:u,path:g(r),event:d});const v=n.value.activate({id:r,value:u,activated:new Set(y.value),children:a.value,parents:t.value,event:d});v&&(y.value=v)},children:a,parents:t}};return ne(X,b),b.root},Ye=(e,i)=>{const a=ae(X,Xe),t=Symbol(ct()),l=f(()=>e.value!==void 0?e.value:t),n={...a,id:l,open:(s,o)=>a.root.open(l.value,s,o),openOnSelect:(s,o)=>a.root.openOnSelect(l.value,s,o),isOpen:f(()=>a.root.opened.value.has(l.value)),parent:f(()=>a.root.parents.value.get(l.value)),activate:(s,o)=>a.root.activate(l.value,s,o),isActivated:f(()=>a.root.activated.value.has(I(l.value))),select:(s,o)=>a.root.select(l.value,s,o),isSelected:f(()=>a.root.selected.value.get(I(l.value))==="on"),isIndeterminate:f(()=>a.root.selected.value.get(l.value)==="indeterminate"),isLeaf:f(()=>!a.root.children.value.get(l.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(l.value,a.id.value,i),Fe(()=>{!a.isGroupActivator&&a.root.unregister(l.value)}),i&&ne(X,n),n},Ht=()=>{const e=ae(X,Xe);ne(X,{...e,isGroupActivator:!0})},Rt=ut({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Ht(),()=>{var t;return(t=a.default)==null?void 0:t.call(a)}}}),Kt=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...F(),...H()},"VListGroup"),Te=$()({name:"VListGroup",props:Kt(),setup(e,i){let{slots:a}=i;const{isOpen:t,open:l,id:n}=Ye(k(e,"value"),!0),s=f(()=>`v-list-group--id-${String(n.value)}`),o=We(),{isBooted:y}=dt();function m(r){l(!t.value,r)}const g=f(()=>({onClick:m,class:"v-list-group__header",id:s.value})),h=f(()=>t.value?e.collapseIcon:e.expandIcon),b=f(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return R(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[a.activator&&c(Q,{defaults:b.value},{default:()=>[c(Rt,null,{default:()=>[a.activator({props:g.value,isOpen:t.value})]})]}),c(vt,{transition:{component:ft},disabled:!y.value},{default:()=>{var r;return[De(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=a.default)==null?void 0:r.call(a)]),[[mt,t.value]])]}})]})),{isOpen:t}}});const Ut=L({opacity:[Number,String],...F(),...H()},"VListItemSubtitle"),ve=$()({name:"VListItemSubtitle",props:Ut(),setup(e,i){let{slots:a}=i;return R(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Ze=ze("v-list-item-title"),Wt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Oe(),onClickOnce:Oe(),...Ne(),...F(),...me(),...ye(),...ge(),...he(),...yt(),...H(),...le(),...Se({variant:"text"})},"VListItem"),fe=$()({name:"VListItem",directives:{Ripple:gt},props:Wt(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:t,emit:l}=i;const n=ht(e,a),s=f(()=>e.value===void 0?n.href.value:e.value),{activate:o,isActivated:y,select:m,isSelected:g,isIndeterminate:h,isGroupActivator:b,root:r,parent:u,openOnSelect:d}=Ye(s,!1),v=We(),A=f(()=>{var S;return e.active!==!1&&(e.active||((S=n.isActive)==null?void 0:S.value)||(r.activatable.value?y.value:g.value))}),T=f(()=>e.link!==!1&&n.isLink.value),p=f(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!v&&(r.selectable.value||r.activatable.value||e.value!=null))),P=f(()=>e.rounded||e.nav),_=f(()=>e.color??e.activeColor),K=f(()=>({color:A.value?_.value??e.baseColor:e.baseColor,variant:e.variant}));St(()=>{var S;return(S=n.isActive)==null?void 0:S.value},S=>{S&&u.value!=null&&r.open(u.value,!0),S&&d(S)},{immediate:!0});const{themeClasses:U}=ie(e),{borderClasses:D}=je(e),{colorClasses:z,colorStyles:B,variantClasses:G}=Ee(K),{densityClasses:C}=be(e),{dimensionStyles:N}=ke(e),{elevationClasses:at}=Ce(e),{roundedClasses:nt}=pe(P),lt=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),re=f(()=>({isActive:A.value,select:m,isSelected:g.value,isIndeterminate:h.value}));function Pe(S){var Y;l("click",S),p.value&&((Y=n.navigate)==null||Y.call(n,S),!b&&(r.activatable.value?o(!y.value,S):(r.selectable.value||e.value!=null)&&m(!g.value,S)))}function it(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),Pe(S))}return R(()=>{const S=T.value?"a":e.tag,Y=t.title||e.title!=null,st=t.subtitle||e.subtitle!=null,Le=!!(e.appendAvatar||e.appendIcon),rt=!!(Le||t.append),Be=!!(e.prependAvatar||e.prependIcon),oe=!!(Be||t.prepend);return v==null||v.updateHasPrepend(oe),e.activeColor&&bt("active-color",["color","base-color"]),De(c(S,{class:["v-list-item",{"v-list-item--active":A.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!oe&&(v==null?void 0:v.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&A.value},U.value,D.value,z.value,C.value,at.value,lt.value,nt.value,G.value,e.class],style:[B.value,N.value,e.style],href:n.href.value,tabindex:p.value?v?-2:0:void 0,onClick:Pe,onKeydown:p.value&&!T.value&&it},{default:()=>{var xe;return[He(p.value||A.value,"v-list-item"),oe&&c("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?c(Q,{key:"prepend-defaults",disabled:!Be,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=t.prepend)==null?void 0:V.call(t,re.value)]}}):c(ce,null,[e.prependAvatar&&c($e,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(te,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[Y&&c(Ze,{key:"title"},{default:()=>{var V;return[((V=t.title)==null?void 0:V.call(t,{title:e.title}))??e.title]}}),st&&c(ve,{key:"subtitle"},{default:()=>{var V;return[((V=t.subtitle)==null?void 0:V.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(xe=t.default)==null?void 0:xe.call(t,re.value)]),rt&&c("div",{key:"append",class:"v-list-item__append"},[t.append?c(Q,{key:"append-defaults",disabled:!Le,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=t.append)==null?void 0:V.call(t,re.value)]}}):c(ce,null,[e.appendIcon&&c(te,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c($e,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[kt("ripple"),p.value&&e.ripple]])}),{isGroupActivator:b,isSelected:g,list:v,select:m}}}),qt=L({color:String,inset:Boolean,sticky:Boolean,title:String,...F(),...H()},"VListSubheader"),Jt=$()({name:"VListSubheader",props:qt(),setup(e,i){let{slots:a}=i;const{textColorClasses:t,textColorStyles:l}=_e(k(e,"color"));return R(()=>{const n=!!(a.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&c("div",{class:"v-list-subheader__text"},[((s=a.default)==null?void 0:s.call(a))??e.title])]}})}),{}}});const Qt=L({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...F(),...le()},"VDivider"),Xt=$()({name:"VDivider",props:Qt(),setup(e,i){let{attrs:a,slots:t}=i;const{themeClasses:l}=ie(e),{textColorClasses:n,textColorStyles:s}=_e(k(e,"color")),o=f(()=>{const y={};return e.length&&(y[e.vertical?"maxHeight":"maxWidth"]=Ge(e.length)),e.thickness&&(y[e.vertical?"borderRightWidth":"borderTopWidth"]=Ge(e.thickness)),y});return R(()=>{const y=c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[o.value,s.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return t.default?c("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[y,c("div",{class:"v-divider__content"},[t.default()]),y]):y}),{}}}),Yt=L({items:Array,returnObject:Boolean},"VListChildren"),et=$()({name:"VListChildren",props:Yt(),setup(e,i){let{slots:a}=i;return Ue(),()=>{var t,l;return((t=a.default)==null?void 0:t.call(a))??((l=e.items)==null?void 0:l.map(n=>{var b,r;let{children:s,props:o,type:y,raw:m}=n;if(y==="divider")return((b=a.divider)==null?void 0:b.call(a,{props:o}))??c(Xt,o,null);if(y==="subheader")return((r=a.subheader)==null?void 0:r.call(a,{props:o}))??c(Jt,o,null);const g={subtitle:a.subtitle?u=>{var d;return(d=a.subtitle)==null?void 0:d.call(a,{...u,item:m})}:void 0,prepend:a.prepend?u=>{var d;return(d=a.prepend)==null?void 0:d.call(a,{...u,item:m})}:void 0,append:a.append?u=>{var d;return(d=a.append)==null?void 0:d.call(a,{...u,item:m})}:void 0,title:a.title?u=>{var d;return(d=a.title)==null?void 0:d.call(a,{...u,item:m})}:void 0},h=Te.filterProps(o);return s?c(Te,ue({value:o==null?void 0:o.value},h),{activator:u=>{let{props:d}=u;const v={...o,...d,value:e.returnObject?m:o.value};return a.header?a.header({props:v}):c(fe,v,g)},default:()=>c(et,{items:s},a)}):a.item?a.item({props:o}):c(fe,ue(o,{value:e.returnObject?m:o.value}),g)}))}}}),Zt=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Ct}},"list-items");function ea(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ta(e,i){const a=W(i,e.itemType,"item"),t=ea(i)?i:W(i,e.itemTitle),l=W(i,e.itemValue,void 0),n=W(i,e.itemChildren),s=e.itemProps===!0?wt(i,["children"]):W(i,e.itemProps),o={title:t,value:l,...s};return{type:a,title:o.title,value:o.value,props:o,children:a==="item"&&n?tt(e,n):void 0,raw:i}}function tt(e,i){const a=[];for(const t of i)a.push(ta(e,t));return a}function aa(e){return{items:f(()=>tt(e,e.items))}}const na=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...jt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ne(),...F(),...me(),...ye(),...ge(),itemType:{type:String,default:"type"},...Zt(),...he(),...H(),...le(),...Se({variant:"text"})},"VList"),la=$()({name:"VList",props:na(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:t}=aa(e),{themeClasses:l}=ie(e),{backgroundColorClasses:n,backgroundColorStyles:s}=pt(k(e,"bgColor")),{borderClasses:o}=je(e),{densityClasses:y}=be(e),{dimensionStyles:m}=ke(e),{elevationClasses:g}=Ce(e),{roundedClasses:h}=pe(e),{children:b,open:r,parents:u,select:d}=Et(e),v=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),A=k(e,"activeColor"),T=k(e,"baseColor"),p=k(e,"color");Ue(),_t({VListGroup:{activeColor:A,baseColor:T,color:p,expandIcon:k(e,"expandIcon"),collapseIcon:k(e,"collapseIcon")},VListItem:{activeClass:k(e,"activeClass"),activeColor:A,baseColor:T,color:p,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),slim:k(e,"slim"),variant:k(e,"variant")}});const P=J(!1),_=w();function K(C){P.value=!0}function U(C){P.value=!1}function D(C){var N;!P.value&&!(C.relatedTarget&&((N=_.value)!=null&&N.contains(C.relatedTarget)))&&G()}function z(C){const N=C.target;if(!(!_.value||["INPUT","TEXTAREA"].includes(N.tagName))){if(C.key==="ArrowDown")G("next");else if(C.key==="ArrowUp")G("prev");else if(C.key==="Home")G("first");else if(C.key==="End")G("last");else return;C.preventDefault()}}function B(C){P.value=!0}function G(C){if(_.value)return Vt(_.value,C)}return R(()=>c(e.tag,{ref:_,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,o.value,y.value,g.value,v.value,h.value,e.class],style:[s.value,m.value,e.style],tabindex:e.disabled||P.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:K,onFocusout:U,onFocus:D,onKeydown:z,onMousedown:B},{default:()=>[c(et,{items:t.value,returnObject:e.returnObject},a)]})),{open:r,select:d,focus:G,children:b,parents:u}}}),ia={props:{item:{type:Object,required:!0}},data:()=>({dateHelper:Ke}),computed:{kennzeichen(){return Gt.find(e=>e.id===this.item.kennzeichen)},dateOutput(){return this.dateHelper.format(this.item.foundAt,"HH:mm 'Uhr, am' dd.MM.yyyy")}},methods:{removeItem(){this.$store.dispatch("collectGame/remove",this.item.kennzeichen)}}};function sa(e,i,a,t,l,n){return x(),q(fe,null,{default:O(()=>[c(Ze,null,{default:O(()=>[E(j(n.kennzeichen.id),1)]),_:1}),c(ve,null,{default:O(()=>[E(j(n.kennzeichen.location)+", "+j(n.kennzeichen.state)+", "+j(n.kennzeichen.district),1)]),_:1}),c(ve,null,{default:O(()=>[se("i",null,j(n.dateOutput),1)]),_:1}),c(we,{class:"mt-5",onClick:n.removeItem,color:"secondary",size:"small"},{default:O(()=>[c(te,{start:""},{default:O(()=>[E("mdi-close")]),_:1}),E(" aus Liste entfernen")]),_:1},8,["onClick"])]),_:1})}const ra=Ve(ia,[["render",sa]]);const oa=ze("v-alert-title"),ca=["success","info","warning","error"],ua=L({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:M,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ca.includes(e)},...F(),...me(),...ye(),...ge(),...It(),...At(),...he(),...H(),...le(),...Se({variant:"flat"})},"VAlert"),da=$()({name:"VAlert",props:ua(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{emit:a,slots:t}=i;const l=ee(e,"modelValue"),n=f(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=f(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:o}=ie(e),{colorClasses:y,colorStyles:m,variantClasses:g}=Ee(s),{densityClasses:h}=be(e),{dimensionStyles:b}=ke(e),{elevationClasses:r}=Ce(e),{locationStyles:u}=Pt(e),{positionClasses:d}=Lt(e),{roundedClasses:v}=pe(e),{textColorClasses:A,textColorStyles:T}=_e(k(e,"borderColor")),{t:p}=Bt(),P=f(()=>({"aria-label":p(e.closeLabel),onClick(_){l.value=!1,a("click:close",_)}}));return()=>{const _=!!(t.prepend||n.value),K=!!(t.title||e.title),U=!!(t.close||e.closable);return l.value&&c(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},o.value,y.value,h.value,r.value,d.value,v.value,g.value,e.class],style:[m.value,b.value,u.value,e.style],role:"alert"},{default:()=>{var D,z;return[He(!1,"v-alert"),e.border&&c("div",{key:"border",class:["v-alert__border",A.value],style:T.value},null),_&&c("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?c(Q,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):c(te,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),c("div",{class:"v-alert__content"},[K&&c(oa,{key:"title"},{default:()=>{var B;return[((B=t.title)==null?void 0:B.call(t))??e.title]}}),((D=t.text)==null?void 0:D.call(t))??e.text,(z=t.default)==null?void 0:z.call(t)]),t.append&&c("div",{key:"append",class:"v-alert__append"},[t.append()]),U&&c("div",{key:"close",class:"v-alert__close"},[t.close?c(Q,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var B;return[(B=t.close)==null?void 0:B.call(t,{props:P.value})]}}):c(we,ue({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}}),va={components:{GameCollectItem:ra},data:()=>({dateHelper:Ke}),computed:{...xt({alreadyFound:"collectGame/alreadyFound",startedAt:"collectGame/startedAt"})},methods:{startGame(){this.$store.dispatch("collectGame/startGame")}}},fa=se("h1",null,"Gesammelte Kennzeichen",-1),ma=se("p",{class:"mb-10"},"Sammele alle Kennzeichen.",-1),ya={key:0},ga={key:1};function ha(e,i,a,t,l,n){const s=Re("GameCollectItem");return x(),Z("div",null,[fa,ma,e.startedAt?(x(),Z("div",ga,[se("h5",null,"gestartet am "+j(e.dateHelper.format(e.startedAt)),1),e.alreadyFound.length===0?(x(),q(da,{key:0,color:"info"},{default:O(()=>[E("noch keine Kennzeichen gefunden")]),_:1})):(x(),q(la,{key:1},{default:O(()=>[(x(!0),Z(ce,null,Ot(e.alreadyFound,o=>(x(),q(s,{key:o.id,item:o},null,8,["item"]))),128))]),_:1}))])):(x(),Z("div",ya,[c(we,{onClick:n.startGame,color:"primary"},{default:O(()=>[E("Spiel starten")]),_:1},8,["onClick"])]))])}const Sa=Ve(va,[["render",ha]]),ba={components:{CollectGame:Sa}};function ka(e,i,a,t,l,n){const s=Re("CollectGame",!0);return x(),q(s)}const wa=Ve(ba,[["render",ka]]);export{wa as default};