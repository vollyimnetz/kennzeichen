import{U as ue,W as Y,aj as oe,ak as $,T as Ee,D as T,p as I,r as se,j as y,$ as He,X as St,G as C,C as kt,al as Ct,I as O,m as x,am as E,i as _,an as Vt,u as F,e as r,O as K,M as It,ao as pt,k as Ae,v as At,ap as _e,E as ze,aq as we,a3 as te,a5 as de,ar as ve,x as me,as as Re,l as ae,at as fe,au as Ke,av as Ue,J as _t,y as ne,aw as Pe,ax as Le,a6 as ye,a7 as ge,ay as he,A as be,az as wt,aa as We,aA as xe,P as Z,f as U,H as Be,K as De,Q as Ce,aB as Pt,F as Lt,aC as qe,aD as xt,aE as Q,aF as Bt,_ as Ge,o as N,b as J,w as V,a as X,t as j,d as z,V as re,aG as Je,aH as Xe,aI as Qe,aJ as Ye,n as Gt,s as Tt,z as Ot,aK as $t,L as Ft,ah as Mt,ad as Ze,c as ie,ai as Nt,ae as zt}from"./index-1608f067.js";import{d as et}from"./date.helper-8b7b65f2.js";import{k as tt}from"./kennzeichen-0378dd8e.js";import{a as ce,V as Dt}from"./VChip-01f07171.js";const Ve=Symbol.for("vuetify:list");function at(){const e=ue(Ve,{hasPrepend:Y(!1),updateHasPrepend:()=>null}),i={hasPrepend:Y(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return oe(Ve,i),e}function nt(){return ue(Ve,null)}const Te=e=>{const i={activate:a=>{let{id:t,value:l,activated:n}=a;return t=$(t),e&&!l&&n.size===1&&n.has(t)||(l?n.add(t):n.delete(t)),n},in:(a,t,l)=>{let n=new Set;if(a!=null)for(const s of Ee(a))n=i.activate({id:s,value:!0,activated:new Set(n),children:t,parents:l});return n},out:a=>Array.from(a)};return i},lt=e=>{const i=Te(e);return{activate:t=>{let{activated:l,id:n,...s}=t;n=$(n);const c=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:c})},in:(t,l,n)=>{let s=new Set;if(t!=null){const c=Ee(t);c.length&&(s=i.in(c.slice(0,1),l,n))}return s},out:(t,l,n)=>i.out(t,l,n)}},jt=e=>{const i=Te(e);return{activate:t=>{let{id:l,activated:n,children:s,...c}=t;return l=$(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...c})},in:i.in,out:i.out}},Et=e=>{const i=lt(e);return{activate:t=>{let{id:l,activated:n,children:s,...c}=t;return l=$(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...c})},in:i.in,out:i.out}},Ht={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return t.delete(i),t},select:()=>null},it={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){let n=l.get(i);for(t.add(i);n!=null&&n!==i;)t.add(n),n=l.get(n);return t}else t.delete(i);return t},select:()=>null},Rt={open:it.open,select:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(!a)return t;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},Oe=e=>{const i={select:a=>{let{id:t,value:l,selected:n}=a;if(t=$(t),e&&!l){const s=Array.from(n.entries()).reduce((c,g)=>{let[m,f]=g;return f==="on"&&c.push(m),c},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,l?"on":"off"),n},in:(a,t,l)=>{let n=new Map;for(const s of a||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:l});return n},out:a=>{const t=[];for(const[l,n]of a.entries())n==="on"&&t.push(l);return t}};return i},st=e=>{const i=Oe(e);return{select:t=>{let{selected:l,id:n,...s}=t;n=$(n);const c=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:c})},in:(t,l,n)=>{let s=new Map;return t!=null&&t.length&&(s=i.in(t.slice(0,1),l,n)),s},out:(t,l,n)=>i.out(t,l,n)}},Kt=e=>{const i=Oe(e);return{select:t=>{let{id:l,selected:n,children:s,...c}=t;return l=$(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...c})},in:i.in,out:i.out}},Ut=e=>{const i=st(e);return{select:t=>{let{id:l,selected:n,children:s,...c}=t;return l=$(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...c})},in:i.in,out:i.out}},Wt=e=>{const i={select:a=>{let{id:t,value:l,selected:n,children:s,parents:c}=a;t=$(t);const g=new Map(n),m=[t];for(;m.length;){const h=m.shift();n.set(h,l?"on":"off"),s.has(h)&&m.push(...s.get(h))}let f=c.get(t);for(;f;){const h=s.get(f),b=h.every(o=>n.get(o)==="on"),u=h.every(o=>!n.has(o)||n.get(o)==="off");n.set(f,b?"on":u?"off":"indeterminate"),f=c.get(f)}return e&&!l&&Array.from(n.entries()).reduce((b,u)=>{let[o,d]=u;return d==="on"&&b.push(o),b},[]).length===0?g:n},in:(a,t,l)=>{let n=new Map;for(const s of a||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:l});return n},out:(a,t)=>{const l=[];for(const[n,s]of a.entries())s==="on"&&!t.has(n)&&l.push(n);return l}};return i},ee=Symbol.for("vuetify:nested"),rt={id:Y(),root:{register:()=>null,unregister:()=>null,parents:T(new Map),children:T(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:T(!1),selectable:T(!1),opened:T(new Set),activated:T(new Set),selected:T(new Map),selectedValues:T([])}},qt=I({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Jt=e=>{let i=!1;const a=T(new Map),t=T(new Map),l=se(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),n=y(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return jt(e.mandatory);case"single-leaf":return Et(e.mandatory);case"independent":return Te(e.mandatory);case"single-independent":default:return lt(e.mandatory)}}),s=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ut(e.mandatory);case"leaf":return Kt(e.mandatory);case"independent":return Oe(e.mandatory);case"single-independent":return st(e.mandatory);case"classic":default:return Wt(e.mandatory)}}),c=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Rt;case"single":return Ht;case"multiple":default:return it}}),g=se(e,"activated",e.activated,u=>n.value.in(u,a.value,t.value),u=>n.value.out(u,a.value,t.value)),m=se(e,"selected",e.selected,u=>s.value.in(u,a.value,t.value),u=>s.value.out(u,a.value,t.value));He(()=>{i=!0});function f(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=t.value.get(d);return o}const h=St("nested"),b={id:Y(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:g,selected:m,selectedValues:y(()=>{const u=[];for(const[o,d]of m.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&t.value.set(u,o),d&&a.value.set(u,[]),o!=null&&a.value.set(o,[...a.value.get(o)||[],u])},unregister:u=>{if(i)return;a.value.delete(u);const o=t.value.get(u);if(o){const d=a.value.get(o)??[];a.value.set(o,d.filter(v=>v!==u))}t.value.delete(u),l.value.delete(u)},open:(u,o,d)=>{h.emit("click:open",{id:u,value:o,path:f(u),event:d});const v=c.value.open({id:u,value:o,opened:new Set(l.value),children:a.value,parents:t.value,event:d});v&&(l.value=v)},openOnSelect:(u,o,d)=>{const v=c.value.select({id:u,value:o,selected:new Map(m.value),opened:new Set(l.value),children:a.value,parents:t.value,event:d});v&&(l.value=v)},select:(u,o,d)=>{h.emit("click:select",{id:u,value:o,path:f(u),event:d});const v=s.value.select({id:u,value:o,selected:new Map(m.value),children:a.value,parents:t.value,event:d});v&&(m.value=v),b.root.openOnSelect(u,o,d)},activate:(u,o,d)=>{if(!e.activatable)return b.root.select(u,!0,d);h.emit("click:activate",{id:u,value:o,path:f(u),event:d});const v=n.value.activate({id:u,value:o,activated:new Set(g.value),children:a.value,parents:t.value,event:d});v&&(g.value=v)},children:a,parents:t}};return oe(ee,b),b.root},ct=(e,i)=>{const a=ue(ee,rt),t=Symbol(kt()),l=y(()=>e.value!==void 0?e.value:t),n={...a,id:l,open:(s,c)=>a.root.open(l.value,s,c),openOnSelect:(s,c)=>a.root.openOnSelect(l.value,s,c),isOpen:y(()=>a.root.opened.value.has(l.value)),parent:y(()=>a.root.parents.value.get(l.value)),activate:(s,c)=>a.root.activate(l.value,s,c),isActivated:y(()=>a.root.activated.value.has($(l.value))),select:(s,c)=>a.root.select(l.value,s,c),isSelected:y(()=>a.root.selected.value.get($(l.value))==="on"),isIndeterminate:y(()=>a.root.selected.value.get(l.value)==="indeterminate"),isLeaf:y(()=>!a.root.children.value.get(l.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(l.value,a.id.value,i),He(()=>{!a.isGroupActivator&&a.root.unregister(l.value)}),i&&oe(ee,n),n},Xt=()=>{const e=ue(ee,rt);oe(ee,{...e,isGroupActivator:!0})},Qt=Ct({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Xt(),()=>{var t;return(t=a.default)==null?void 0:t.call(a)}}}),Yt=I({activeColor:String,baseColor:String,color:String,collapseIcon:{type:O,default:"$collapse"},expandIcon:{type:O,default:"$expand"},prependIcon:O,appendIcon:O,fluid:Boolean,subgroup:Boolean,title:String,value:null,...x(),...E()},"VListGroup"),je=_()({name:"VListGroup",props:Yt(),setup(e,i){let{slots:a}=i;const{isOpen:t,open:l,id:n}=ct(C(e,"value"),!0),s=y(()=>`v-list-group--id-${String(n.value)}`),c=nt(),{isBooted:g}=Vt();function m(u){l(!t.value,u)}const f=y(()=>({onClick:m,class:"v-list-group__header",id:s.value})),h=y(()=>t.value?e.collapseIcon:e.expandIcon),b=y(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return F(()=>r(e.tag,{class:["v-list-group",{"v-list-group--prepend":c==null?void 0:c.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[a.activator&&r(K,{defaults:b.value},{default:()=>[r(Qt,null,{default:()=>[a.activator({props:f.value,isOpen:t.value})]})]}),r(It,{transition:{component:pt},disabled:!g.value},{default:()=>{var u;return[Ae(r("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=a.default)==null?void 0:u.call(a)]),[[At,t.value]])]}})]})),{isOpen:t}}});const Zt=I({opacity:[Number,String],...x(),...E()},"VListItemSubtitle"),Ie=_()({name:"VListItemSubtitle",props:Zt(),setup(e,i){let{slots:a}=i;return F(()=>r(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),ut=_e("v-list-item-title"),ea=I({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ze(),onClickOnce:ze(),...we(),...x(),...te(),...de(),...ve(),...me(),...Re(),...E(),...ae(),...fe({variant:"text"})},"VListItem"),pe=_()({name:"VListItem",directives:{Ripple:Ke},props:ea(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:t,emit:l}=i;const n=Ue(e,a),s=y(()=>e.value===void 0?n.href.value:e.value),{activate:c,isActivated:g,select:m,isSelected:f,isIndeterminate:h,isGroupActivator:b,root:u,parent:o,openOnSelect:d}=ct(s,!1),v=nt(),w=y(()=>{var S;return e.active!==!1&&(e.active||((S=n.isActive)==null?void 0:S.value)||(u.activatable.value?g.value:f.value))}),P=y(()=>e.link!==!1&&n.isLink.value),p=y(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!v&&(u.selectable.value||u.activatable.value||e.value!=null))),L=y(()=>e.rounded||e.nav),A=y(()=>e.color??e.activeColor),W=y(()=>({color:w.value?A.value??e.baseColor:e.baseColor,variant:e.variant}));_t(()=>{var S;return(S=n.isActive)==null?void 0:S.value},S=>{S&&o.value!=null&&u.open(o.value,!0),S&&d(S)},{immediate:!0});const{themeClasses:q}=ne(e),{borderClasses:H}=Pe(e),{colorClasses:R,colorStyles:B,variantClasses:M}=Le(W),{densityClasses:k}=ye(e),{dimensionStyles:D}=ge(e),{elevationClasses:mt}=he(e),{roundedClasses:ft}=be(L),yt=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Se=y(()=>({isActive:w.value,select:m,isSelected:f.value,isIndeterminate:h.value}));function $e(S){var le;l("click",S),p.value&&((le=n.navigate)==null||le.call(n,S),!b&&(u.activatable.value?c(!g.value,S):(u.selectable.value||e.value!=null)&&m(!f.value,S)))}function gt(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),$e(S))}return F(()=>{const S=P.value?"a":e.tag,le=t.title||e.title!=null,ht=t.subtitle||e.subtitle!=null,Fe=!!(e.appendAvatar||e.appendIcon),bt=!!(Fe||t.append),Me=!!(e.prependAvatar||e.prependIcon),ke=!!(Me||t.prepend);return v==null||v.updateHasPrepend(ke),e.activeColor&&wt("active-color",["color","base-color"]),Ae(r(S,{class:["v-list-item",{"v-list-item--active":w.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ke&&(v==null?void 0:v.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&w.value},q.value,H.value,R.value,k.value,mt.value,yt.value,ft.value,M.value,e.class],style:[B.value,D.value,e.style],href:n.href.value,tabindex:p.value?v?-2:0:void 0,onClick:$e,onKeydown:p.value&&!P.value&&gt},{default:()=>{var Ne;return[xe(p.value||w.value,"v-list-item"),ke&&r("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?r(K,{key:"prepend-defaults",disabled:!Me,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var G;return[(G=t.prepend)==null?void 0:G.call(t,Se.value)]}}):r(Z,null,[e.prependAvatar&&r(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),r("div",{class:"v-list-item__spacer"},null)]),r("div",{class:"v-list-item__content","data-no-activator":""},[le&&r(ut,{key:"title"},{default:()=>{var G;return[((G=t.title)==null?void 0:G.call(t,{title:e.title}))??e.title]}}),ht&&r(Ie,{key:"subtitle"},{default:()=>{var G;return[((G=t.subtitle)==null?void 0:G.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(Ne=t.default)==null?void 0:Ne.call(t,Se.value)]),bt&&r("div",{key:"append",class:"v-list-item__append"},[t.append?r(K,{key:"append-defaults",disabled:!Fe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var G;return[(G=t.append)==null?void 0:G.call(t,Se.value)]}}):r(Z,null,[e.appendIcon&&r(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),r("div",{class:"v-list-item__spacer"},null)])]}}),[[We("ripple"),p.value&&e.ripple]])}),{isGroupActivator:b,isSelected:f,list:v,select:m}}}),ta=I({color:String,inset:Boolean,sticky:Boolean,title:String,...x(),...E()},"VListSubheader"),aa=_()({name:"VListSubheader",props:ta(),setup(e,i){let{slots:a}=i;const{textColorClasses:t,textColorStyles:l}=Be(C(e,"color"));return F(()=>{const n=!!(a.default||e.title);return r(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&r("div",{class:"v-list-subheader__text"},[((s=a.default)==null?void 0:s.call(a))??e.title])]}})}),{}}});const na=I({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...x(),...ae()},"VDivider"),la=_()({name:"VDivider",props:na(),setup(e,i){let{attrs:a,slots:t}=i;const{themeClasses:l}=ne(e),{textColorClasses:n,textColorStyles:s}=Be(C(e,"color")),c=y(()=>{const g={};return e.length&&(g[e.vertical?"maxHeight":"maxWidth"]=De(e.length)),e.thickness&&(g[e.vertical?"borderRightWidth":"borderTopWidth"]=De(e.thickness)),g});return F(()=>{const g=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[c.value,s.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return t.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[g,r("div",{class:"v-divider__content"},[t.default()]),g]):g}),{}}}),ia=I({items:Array,returnObject:Boolean},"VListChildren"),ot=_()({name:"VListChildren",props:ia(),setup(e,i){let{slots:a}=i;return at(),()=>{var t,l;return((t=a.default)==null?void 0:t.call(a))??((l=e.items)==null?void 0:l.map(n=>{var b,u;let{children:s,props:c,type:g,raw:m}=n;if(g==="divider")return((b=a.divider)==null?void 0:b.call(a,{props:c}))??r(la,c,null);if(g==="subheader")return((u=a.subheader)==null?void 0:u.call(a,{props:c}))??r(aa,c,null);const f={subtitle:a.subtitle?o=>{var d;return(d=a.subtitle)==null?void 0:d.call(a,{...o,item:m})}:void 0,prepend:a.prepend?o=>{var d;return(d=a.prepend)==null?void 0:d.call(a,{...o,item:m})}:void 0,append:a.append?o=>{var d;return(d=a.append)==null?void 0:d.call(a,{...o,item:m})}:void 0,title:a.title?o=>{var d;return(d=a.title)==null?void 0:d.call(a,{...o,item:m})}:void 0},h=je.filterProps(c);return s?r(je,Ce({value:c==null?void 0:c.value},h),{activator:o=>{let{props:d}=o;const v={...c,...d,value:e.returnObject?m:c.value};return a.header?a.header({props:v}):r(pe,v,f)},default:()=>r(ot,{items:s},a)}):a.item?a.item({props:c}):r(pe,Ce(c,{value:e.returnObject?m:c.value}),f)}))}}}),sa=I({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Pt}},"list-items");function ra(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ca(e,i){const a=Q(i,e.itemType,"item"),t=ra(i)?i:Q(i,e.itemTitle),l=Q(i,e.itemValue,void 0),n=Q(i,e.itemChildren),s=e.itemProps===!0?Bt(i,["children"]):Q(i,e.itemProps),c={title:t,value:l,...s};return{type:a,title:c.title,value:c.value,props:c,children:a==="item"&&n?dt(e,n):void 0,raw:i}}function dt(e,i){const a=[];for(const t of i)a.push(ca(e,t));return a}function ua(e){return{items:y(()=>dt(e,e.items))}}const oa=I({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...qt({selectStrategy:"single-leaf",openStrategy:"list"}),...we(),...x(),...te(),...de(),...ve(),itemType:{type:String,default:"type"},...sa(),...me(),...E(),...ae(),...fe({variant:"text"})},"VList"),da=_()({name:"VList",props:oa(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:t}=ua(e),{themeClasses:l}=ne(e),{backgroundColorClasses:n,backgroundColorStyles:s}=Lt(C(e,"bgColor")),{borderClasses:c}=Pe(e),{densityClasses:g}=ye(e),{dimensionStyles:m}=ge(e),{elevationClasses:f}=he(e),{roundedClasses:h}=be(e),{children:b,open:u,parents:o,select:d}=Jt(e),v=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=C(e,"activeColor"),P=C(e,"baseColor"),p=C(e,"color");at(),qe({VListGroup:{activeColor:w,baseColor:P,color:p,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:w,baseColor:P,color:p,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const L=Y(!1),A=T();function W(k){L.value=!0}function q(k){L.value=!1}function H(k){var D;!L.value&&!(k.relatedTarget&&((D=A.value)!=null&&D.contains(k.relatedTarget)))&&M()}function R(k){const D=k.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(D.tagName))){if(k.key==="ArrowDown")M("next");else if(k.key==="ArrowUp")M("prev");else if(k.key==="Home")M("first");else if(k.key==="End")M("last");else return;k.preventDefault()}}function B(k){L.value=!0}function M(k){if(A.value)return xt(A.value,k)}return F(()=>r(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,c.value,g.value,f.value,v.value,h.value,e.class],style:[s.value,m.value,e.style],tabindex:e.disabled||L.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:W,onFocusout:q,onFocus:H,onKeydown:R,onMousedown:B},{default:()=>[r(ot,{items:t.value,returnObject:e.returnObject},a)]})),{open:u,select:d,focus:M,children:b,parents:o}}}),va={props:{item:{type:Object,required:!0}},data:()=>({dateHelper:et}),computed:{kennzeichen(){return tt.find(e=>e.id===this.item.kennzeichen)},dateOutput(){return this.dateHelper.format(this.item.foundAt,"HH:mm 'Uhr, am' dd.MM.yyyy")}},methods:{async removeItem(){await window.confirm("Eintrag wirklich entfernen?")&&this.$store.dispatch("collectGame/remove",this.item.kennzeichen)}}};function ma(e,i,a,t,l,n){return N(),J(pe,null,{default:V(()=>[r(ut,null,{default:V(()=>[X("strong",null,j(n.kennzeichen.id),1)]),_:1}),r(Ie,null,{default:V(()=>[z(j(n.kennzeichen.location)+", "+j(n.kennzeichen.state)+", "+j(n.kennzeichen.district),1)]),_:1}),r(Ie,null,{default:V(()=>[X("i",null,j(n.dateOutput),1)]),_:1}),r(re,{class:"mt-2",onClick:n.removeItem,color:"secondary",size:"small"},{default:V(()=>[r(U,{start:""},{default:V(()=>[z("mdi-close")]),_:1}),z(" aus Liste entfernen")]),_:1},8,["onClick"])]),_:1})}const fa=Ge(va,[["render",ma]]);const ya=_e("v-alert-title"),ga=["success","info","warning","error"],ha=I({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:O,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ga.includes(e)},...x(),...te(),...de(),...ve(),...Je(),...Xe(),...me(),...E(),...ae(),...fe({variant:"flat"})},"VAlert"),ba=_()({name:"VAlert",props:ha(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{emit:a,slots:t}=i;const l=se(e,"modelValue"),n=y(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=y(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:c}=ne(e),{colorClasses:g,colorStyles:m,variantClasses:f}=Le(s),{densityClasses:h}=ye(e),{dimensionStyles:b}=ge(e),{elevationClasses:u}=he(e),{locationStyles:o}=Qe(e),{positionClasses:d}=Ye(e),{roundedClasses:v}=be(e),{textColorClasses:w,textColorStyles:P}=Be(C(e,"borderColor")),{t:p}=Gt(),L=y(()=>({"aria-label":p(e.closeLabel),onClick(A){l.value=!1,a("click:close",A)}}));return()=>{const A=!!(t.prepend||n.value),W=!!(t.title||e.title),q=!!(t.close||e.closable);return l.value&&r(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},c.value,g.value,h.value,u.value,d.value,v.value,f.value,e.class],style:[m.value,b.value,o.value,e.style],role:"alert"},{default:()=>{var H,R;return[xe(!1,"v-alert"),e.border&&r("div",{key:"border",class:["v-alert__border",w.value],style:P.value},null),A&&r("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?r(K,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):r(U,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),r("div",{class:"v-alert__content"},[W&&r(ya,{key:"title"},{default:()=>{var B;return[((B=t.title)==null?void 0:B.call(t))??e.title]}}),((H=t.text)==null?void 0:H.call(t))??e.text,(R=t.default)==null?void 0:R.call(t)]),t.append&&r("div",{key:"append",class:"v-alert__append"},[t.append()]),q&&r("div",{key:"close",class:"v-alert__close"},[t.close?r(K,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var B;return[(B=t.close)==null?void 0:B.call(t,{props:L.value})]}}):r(re,Ce({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},L.value),null)])]}})}}});const Sa=_()({name:"VCardActions",props:x(),setup(e,i){let{slots:a}=i;return qe({VBtn:{slim:!0,variant:"text"}}),F(()=>{var t;return r("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),ka=I({opacity:[Number,String],...x(),...E()},"VCardSubtitle"),Ca=_()({name:"VCardSubtitle",props:ka(),setup(e,i){let{slots:a}=i;return F(()=>r(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Va=_e("v-card-title"),Ia=I({appendAvatar:String,appendIcon:O,prependAvatar:String,prependIcon:O,subtitle:[String,Number],title:[String,Number],...x(),...te()},"VCardItem"),pa=_()({name:"VCardItem",props:Ia(),setup(e,i){let{slots:a}=i;return F(()=>{var m;const t=!!(e.prependAvatar||e.prependIcon),l=!!(t||a.prepend),n=!!(e.appendAvatar||e.appendIcon),s=!!(n||a.append),c=!!(e.title!=null||a.title),g=!!(e.subtitle!=null||a.subtitle);return r("div",{class:["v-card-item",e.class],style:e.style},[l&&r("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?r(K,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):r(Z,null,[e.prependAvatar&&r(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),r("div",{class:"v-card-item__content"},[c&&r(Va,{key:"title"},{default:()=>{var f;return[((f=a.title)==null?void 0:f.call(a))??e.title]}}),g&&r(Ca,{key:"subtitle"},{default:()=>{var f;return[((f=a.subtitle)==null?void 0:f.call(a))??e.subtitle]}}),(m=a.default)==null?void 0:m.call(a)]),s&&r("div",{key:"append",class:"v-card-item__append"},[a.append?r(K,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):r(Z,null,[e.appendIcon&&r(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Aa=I({opacity:[Number,String],...x(),...E()},"VCardText"),vt=_()({name:"VCardText",props:Aa(),setup(e,i){let{slots:a}=i;return F(()=>r(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),_a=I({appendAvatar:String,appendIcon:O,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...we(),...x(),...te(),...de(),...ve(),...Tt(),...Je(),...Xe(),...me(),...Re(),...E(),...ae(),...fe({variant:"elevated"})},"VCard"),wa=_()({name:"VCard",directives:{Ripple:Ke},props:_a(),setup(e,i){let{attrs:a,slots:t}=i;const{themeClasses:l}=ne(e),{borderClasses:n}=Pe(e),{colorClasses:s,colorStyles:c,variantClasses:g}=Le(e),{densityClasses:m}=ye(e),{dimensionStyles:f}=ge(e),{elevationClasses:h}=he(e),{loaderClasses:b}=Ot(e),{locationStyles:u}=Qe(e),{positionClasses:o}=Ye(e),{roundedClasses:d}=be(e),v=Ue(e,a),w=y(()=>e.link!==!1&&v.isLink.value),P=y(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return F(()=>{const p=w.value?"a":e.tag,L=!!(t.title||e.title!=null),A=!!(t.subtitle||e.subtitle!=null),W=L||A,q=!!(t.append||e.appendAvatar||e.appendIcon),H=!!(t.prepend||e.prependAvatar||e.prependIcon),R=!!(t.image||e.image),B=W||H||q,M=!!(t.text||e.text!=null);return Ae(r(p,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},l.value,n.value,s.value,m.value,h.value,b.value,o.value,d.value,g.value,e.class],style:[c.value,f.value,u.value,e.style],href:v.href.value,onClick:P.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var k;return[R&&r("div",{key:"image",class:"v-card__image"},[t.image?r(K,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r($t,{key:"image-img",cover:!0,src:e.image},null)]),r(Ft,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),B&&r(pa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),M&&r(vt,{key:"text"},{default:()=>{var D;return[((D=t.text)==null?void 0:D.call(t))??e.text]}}),(k=t.default)==null?void 0:k.call(t),t.actions&&r(Sa,null,{default:t.actions}),xe(P.value,"v-card")]}}),[[We("ripple"),P.value&&e.ripple]])}),{}}}),Pa={components:{GameCollectItem:fa},data:()=>({dateHelper:et,kennzeichen:tt}),computed:{...Mt({alreadyFound:"collectGame/alreadyFound",startedAt:"collectGame/startedAt"}),percentage(){return Math.round(this.alreadyFound.length/this.kennzeichen.length*1e3)/10}},methods:{startGame(){this.$store.dispatch("collectGame/startGame")},restart(){window.confirm("Neues Spiel starten?")&&this.$store.dispatch("collectGame/startGame")}}},La=X("h1",null,"Gesammelte Kennzeichen",-1),xa=X("p",{class:"mb-10"},"Sammele alle Kennzeichen.",-1),Ba={key:0},Ga={key:1};function Ta(e,i,a,t,l,n){const s=Ze("GameCollectItem");return N(),ie("div",null,[La,xa,e.startedAt?(N(),ie("div",Ga,[r(wa,{variant:"outlined",color:"info",class:"mb-3"},{default:V(()=>[r(vt,null,{default:V(()=>[X("h5",null,"gestartet am "+j(e.dateHelper.format(e.startedAt)),1),X("h5",null,[z(j(e.alreadyFound.length)+" von "+j(e.kennzeichen.length)+" ",1),n.percentage>.1?(N(),J(Dt,{key:0,color:"primary"},{default:V(()=>[r(U,{start:""},{default:V(()=>[z("mdi-arrow-right-bold-circle")]),_:1}),z(" "+j(n.percentage)+" %",1)]),_:1})):Nt("",!0)])]),_:1})]),_:1}),e.alreadyFound.length===0?(N(),J(ba,{key:0,color:"info"},{default:V(()=>[z("noch keine Kennzeichen gefunden")]),_:1})):(N(),J(da,{key:1},{default:V(()=>[(N(!0),ie(Z,null,zt(e.alreadyFound,c=>(N(),J(s,{class:"my-5",key:c.id,item:c},null,8,["item"]))),128))]),_:1})),r(re,{onClick:n.restart,class:"mt-10",color:"secondary",size:"small"},{default:V(()=>[r(U,{start:""},{default:V(()=>[z("mdi-refresh")]),_:1}),z("Spiel neu starten")]),_:1},8,["onClick"])])):(N(),ie("div",Ba,[r(re,{onClick:n.startGame,color:"primary"},{default:V(()=>[z("Spiel starten")]),_:1},8,["onClick"])]))])}const Oa=Ge(Pa,[["render",Ta]]),$a={components:{CollectGame:Oa}};function Fa(e,i,a,t,l,n){const s=Ze("CollectGame",!0);return N(),J(s)}const ja=Ge($a,[["render",Fa]]);export{ja as default};
