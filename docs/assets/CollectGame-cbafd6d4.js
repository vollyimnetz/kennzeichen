import{U as ue,W as Y,aj as oe,ak as F,T as je,D as G,p as I,r as se,j as f,$ as He,X as St,G as C,C as kt,al as Ct,I as O,m as x,am as j,i as _,an as Vt,u as M,e as r,O as R,M as It,ao as pt,k as pe,v as At,ap as Ae,E as Ne,aq as _e,a3 as te,a5 as de,ar as ve,x as me,as as Ee,l as ae,at as ye,au as Re,av as Ke,J as _t,y as ne,aw as we,ax as Pe,a6 as fe,a7 as ge,ay as he,A as be,az as wt,aa as Ue,aA as Le,P as Z,f as K,H as xe,K as De,Q as Ce,aB as Pt,F as Lt,aC as We,aD as xt,aE as Q,aF as Bt,_ as Be,o as N,d as X,w as V,a as J,t as q,b as D,V as re,aG as qe,aH as Je,aI as Xe,aJ as Qe,n as Tt,s as Gt,z as Ot,aK as Ft,L as Mt,ah as $t,ad as Ye,c as ie,ai as Nt,ae as Dt}from"./index-bda48834.js";import{d as Ze}from"./date.helper-8b7b65f2.js";import{k as et}from"./kennzeichen-5beb0ec6.js";import{a as ce,V as zt}from"./VChip-0d392e4a.js";const Ve=Symbol.for("vuetify:list");function tt(){const e=ue(Ve,{hasPrepend:Y(!1),updateHasPrepend:()=>null}),i={hasPrepend:Y(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return oe(Ve,i),e}function at(){return ue(Ve,null)}const Te=e=>{const i={activate:a=>{let{id:t,value:l,activated:n}=a;return t=F(t),e&&!l&&n.size===1&&n.has(t)||(l?n.add(t):n.delete(t)),n},in:(a,t,l)=>{let n=new Set;if(a!=null)for(const s of je(a))n=i.activate({id:s,value:!0,activated:new Set(n),children:t,parents:l});return n},out:a=>Array.from(a)};return i},nt=e=>{const i=Te(e);return{activate:t=>{let{activated:l,id:n,...s}=t;n=F(n);const c=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:c})},in:(t,l,n)=>{let s=new Set;if(t!=null){const c=je(t);c.length&&(s=i.in(c.slice(0,1),l,n))}return s},out:(t,l,n)=>i.out(t,l,n)}},jt=e=>{const i=Te(e);return{activate:t=>{let{id:l,activated:n,children:s,...c}=t;return l=F(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...c})},in:i.in,out:i.out}},Ht=e=>{const i=nt(e);return{activate:t=>{let{id:l,activated:n,children:s,...c}=t;return l=F(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...c})},in:i.in,out:i.out}},Et={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return t.delete(i),t},select:()=>null},lt={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){let n=l.get(i);for(t.add(i);n!=null&&n!==i;)t.add(n),n=l.get(n);return t}else t.delete(i);return t},select:()=>null},Rt={open:lt.open,select:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(!a)return t;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},Ge=e=>{const i={select:a=>{let{id:t,value:l,selected:n}=a;if(t=F(t),e&&!l){const s=Array.from(n.entries()).reduce((c,g)=>{let[m,y]=g;return y==="on"&&c.push(m),c},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,l?"on":"off"),n},in:(a,t,l)=>{let n=new Map;for(const s of a||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:l});return n},out:a=>{const t=[];for(const[l,n]of a.entries())n==="on"&&t.push(l);return t}};return i},it=e=>{const i=Ge(e);return{select:t=>{let{selected:l,id:n,...s}=t;n=F(n);const c=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:c})},in:(t,l,n)=>{let s=new Map;return t!=null&&t.length&&(s=i.in(t.slice(0,1),l,n)),s},out:(t,l,n)=>i.out(t,l,n)}},Kt=e=>{const i=Ge(e);return{select:t=>{let{id:l,selected:n,children:s,...c}=t;return l=F(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...c})},in:i.in,out:i.out}},Ut=e=>{const i=it(e);return{select:t=>{let{id:l,selected:n,children:s,...c}=t;return l=F(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...c})},in:i.in,out:i.out}},Wt=e=>{const i={select:a=>{let{id:t,value:l,selected:n,children:s,parents:c}=a;t=F(t);const g=new Map(n),m=[t];for(;m.length;){const h=m.shift();n.set(h,l?"on":"off"),s.has(h)&&m.push(...s.get(h))}let y=c.get(t);for(;y;){const h=s.get(y),b=h.every(o=>n.get(o)==="on"),u=h.every(o=>!n.has(o)||n.get(o)==="off");n.set(y,b?"on":u?"off":"indeterminate"),y=c.get(y)}return e&&!l&&Array.from(n.entries()).reduce((b,u)=>{let[o,d]=u;return d==="on"&&b.push(o),b},[]).length===0?g:n},in:(a,t,l)=>{let n=new Map;for(const s of a||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:l});return n},out:(a,t)=>{const l=[];for(const[n,s]of a.entries())s==="on"&&!t.has(n)&&l.push(n);return l}};return i},ee=Symbol.for("vuetify:nested"),st={id:Y(),root:{register:()=>null,unregister:()=>null,parents:G(new Map),children:G(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:G(!1),selectable:G(!1),opened:G(new Set),activated:G(new Set),selected:G(new Map),selectedValues:G([])}},qt=I({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Jt=e=>{let i=!1;const a=G(new Map),t=G(new Map),l=se(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),n=f(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return jt(e.mandatory);case"single-leaf":return Ht(e.mandatory);case"independent":return Te(e.mandatory);case"single-independent":default:return nt(e.mandatory)}}),s=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ut(e.mandatory);case"leaf":return Kt(e.mandatory);case"independent":return Ge(e.mandatory);case"single-independent":return it(e.mandatory);case"classic":default:return Wt(e.mandatory)}}),c=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Rt;case"single":return Et;case"multiple":default:return lt}}),g=se(e,"activated",e.activated,u=>n.value.in(u,a.value,t.value),u=>n.value.out(u,a.value,t.value)),m=se(e,"selected",e.selected,u=>s.value.in(u,a.value,t.value),u=>s.value.out(u,a.value,t.value));He(()=>{i=!0});function y(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=t.value.get(d);return o}const h=St("nested"),b={id:Y(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:g,selected:m,selectedValues:f(()=>{const u=[];for(const[o,d]of m.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&t.value.set(u,o),d&&a.value.set(u,[]),o!=null&&a.value.set(o,[...a.value.get(o)||[],u])},unregister:u=>{if(i)return;a.value.delete(u);const o=t.value.get(u);if(o){const d=a.value.get(o)??[];a.value.set(o,d.filter(v=>v!==u))}t.value.delete(u),l.value.delete(u)},open:(u,o,d)=>{h.emit("click:open",{id:u,value:o,path:y(u),event:d});const v=c.value.open({id:u,value:o,opened:new Set(l.value),children:a.value,parents:t.value,event:d});v&&(l.value=v)},openOnSelect:(u,o,d)=>{const v=c.value.select({id:u,value:o,selected:new Map(m.value),opened:new Set(l.value),children:a.value,parents:t.value,event:d});v&&(l.value=v)},select:(u,o,d)=>{h.emit("click:select",{id:u,value:o,path:y(u),event:d});const v=s.value.select({id:u,value:o,selected:new Map(m.value),children:a.value,parents:t.value,event:d});v&&(m.value=v),b.root.openOnSelect(u,o,d)},activate:(u,o,d)=>{if(!e.activatable)return b.root.select(u,!0,d);h.emit("click:activate",{id:u,value:o,path:y(u),event:d});const v=n.value.activate({id:u,value:o,activated:new Set(g.value),children:a.value,parents:t.value,event:d});v&&(g.value=v)},children:a,parents:t}};return oe(ee,b),b.root},rt=(e,i)=>{const a=ue(ee,st),t=Symbol(kt()),l=f(()=>e.value!==void 0?e.value:t),n={...a,id:l,open:(s,c)=>a.root.open(l.value,s,c),openOnSelect:(s,c)=>a.root.openOnSelect(l.value,s,c),isOpen:f(()=>a.root.opened.value.has(l.value)),parent:f(()=>a.root.parents.value.get(l.value)),activate:(s,c)=>a.root.activate(l.value,s,c),isActivated:f(()=>a.root.activated.value.has(F(l.value))),select:(s,c)=>a.root.select(l.value,s,c),isSelected:f(()=>a.root.selected.value.get(F(l.value))==="on"),isIndeterminate:f(()=>a.root.selected.value.get(l.value)==="indeterminate"),isLeaf:f(()=>!a.root.children.value.get(l.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(l.value,a.id.value,i),He(()=>{!a.isGroupActivator&&a.root.unregister(l.value)}),i&&oe(ee,n),n},Xt=()=>{const e=ue(ee,st);oe(ee,{...e,isGroupActivator:!0})},Qt=Ct({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Xt(),()=>{var t;return(t=a.default)==null?void 0:t.call(a)}}}),Yt=I({activeColor:String,baseColor:String,color:String,collapseIcon:{type:O,default:"$collapse"},expandIcon:{type:O,default:"$expand"},prependIcon:O,appendIcon:O,fluid:Boolean,subgroup:Boolean,title:String,value:null,...x(),...j()},"VListGroup"),ze=_()({name:"VListGroup",props:Yt(),setup(e,i){let{slots:a}=i;const{isOpen:t,open:l,id:n}=rt(C(e,"value"),!0),s=f(()=>`v-list-group--id-${String(n.value)}`),c=at(),{isBooted:g}=Vt();function m(u){l(!t.value,u)}const y=f(()=>({onClick:m,class:"v-list-group__header",id:s.value})),h=f(()=>t.value?e.collapseIcon:e.expandIcon),b=f(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return M(()=>r(e.tag,{class:["v-list-group",{"v-list-group--prepend":c==null?void 0:c.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[a.activator&&r(R,{defaults:b.value},{default:()=>[r(Qt,null,{default:()=>[a.activator({props:y.value,isOpen:t.value})]})]}),r(It,{transition:{component:pt},disabled:!g.value},{default:()=>{var u;return[pe(r("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=a.default)==null?void 0:u.call(a)]),[[At,t.value]])]}})]})),{isOpen:t}}});const Zt=I({opacity:[Number,String],...x(),...j()},"VListItemSubtitle"),ct=_()({name:"VListItemSubtitle",props:Zt(),setup(e,i){let{slots:a}=i;return M(()=>r(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),ut=Ae("v-list-item-title"),ea=I({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Ne(),onClickOnce:Ne(),..._e(),...x(),...te(),...de(),...ve(),...me(),...Ee(),...j(),...ae(),...ye({variant:"text"})},"VListItem"),Ie=_()({name:"VListItem",directives:{Ripple:Re},props:ea(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:t,emit:l}=i;const n=Ke(e,a),s=f(()=>e.value===void 0?n.href.value:e.value),{activate:c,isActivated:g,select:m,isSelected:y,isIndeterminate:h,isGroupActivator:b,root:u,parent:o,openOnSelect:d}=rt(s,!1),v=at(),w=f(()=>{var S;return e.active!==!1&&(e.active||((S=n.isActive)==null?void 0:S.value)||(u.activatable.value?g.value:y.value))}),P=f(()=>e.link!==!1&&n.isLink.value),p=f(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!v&&(u.selectable.value||u.activatable.value||e.value!=null))),L=f(()=>e.rounded||e.nav),A=f(()=>e.color??e.activeColor),U=f(()=>({color:w.value?A.value??e.baseColor:e.baseColor,variant:e.variant}));_t(()=>{var S;return(S=n.isActive)==null?void 0:S.value},S=>{S&&o.value!=null&&u.open(o.value,!0),S&&d(S)},{immediate:!0});const{themeClasses:W}=ne(e),{borderClasses:H}=we(e),{colorClasses:E,colorStyles:B,variantClasses:$}=Pe(U),{densityClasses:k}=fe(e),{dimensionStyles:z}=ge(e),{elevationClasses:mt}=he(e),{roundedClasses:yt}=be(L),ft=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Se=f(()=>({isActive:w.value,select:m,isSelected:y.value,isIndeterminate:h.value}));function Oe(S){var le;l("click",S),p.value&&((le=n.navigate)==null||le.call(n,S),!b&&(u.activatable.value?c(!g.value,S):(u.selectable.value||e.value!=null)&&m(!y.value,S)))}function gt(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),Oe(S))}return M(()=>{const S=P.value?"a":e.tag,le=t.title||e.title!=null,ht=t.subtitle||e.subtitle!=null,Fe=!!(e.appendAvatar||e.appendIcon),bt=!!(Fe||t.append),Me=!!(e.prependAvatar||e.prependIcon),ke=!!(Me||t.prepend);return v==null||v.updateHasPrepend(ke),e.activeColor&&wt("active-color",["color","base-color"]),pe(r(S,{class:["v-list-item",{"v-list-item--active":w.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ke&&(v==null?void 0:v.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&w.value},W.value,H.value,E.value,k.value,mt.value,ft.value,yt.value,$.value,e.class],style:[B.value,z.value,e.style],href:n.href.value,tabindex:p.value?v?-2:0:void 0,onClick:Oe,onKeydown:p.value&&!P.value&&gt},{default:()=>{var $e;return[Le(p.value||w.value,"v-list-item"),ke&&r("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?r(R,{key:"prepend-defaults",disabled:!Me,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var T;return[(T=t.prepend)==null?void 0:T.call(t,Se.value)]}}):r(Z,null,[e.prependAvatar&&r(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(K,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),r("div",{class:"v-list-item__spacer"},null)]),r("div",{class:"v-list-item__content","data-no-activator":""},[le&&r(ut,{key:"title"},{default:()=>{var T;return[((T=t.title)==null?void 0:T.call(t,{title:e.title}))??e.title]}}),ht&&r(ct,{key:"subtitle"},{default:()=>{var T;return[((T=t.subtitle)==null?void 0:T.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),($e=t.default)==null?void 0:$e.call(t,Se.value)]),bt&&r("div",{key:"append",class:"v-list-item__append"},[t.append?r(R,{key:"append-defaults",disabled:!Fe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var T;return[(T=t.append)==null?void 0:T.call(t,Se.value)]}}):r(Z,null,[e.appendIcon&&r(K,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),r("div",{class:"v-list-item__spacer"},null)])]}}),[[Ue("ripple"),p.value&&e.ripple]])}),{isGroupActivator:b,isSelected:y,list:v,select:m}}}),ta=I({color:String,inset:Boolean,sticky:Boolean,title:String,...x(),...j()},"VListSubheader"),aa=_()({name:"VListSubheader",props:ta(),setup(e,i){let{slots:a}=i;const{textColorClasses:t,textColorStyles:l}=xe(C(e,"color"));return M(()=>{const n=!!(a.default||e.title);return r(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&r("div",{class:"v-list-subheader__text"},[((s=a.default)==null?void 0:s.call(a))??e.title])]}})}),{}}});const na=I({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...x(),...ae()},"VDivider"),la=_()({name:"VDivider",props:na(),setup(e,i){let{attrs:a,slots:t}=i;const{themeClasses:l}=ne(e),{textColorClasses:n,textColorStyles:s}=xe(C(e,"color")),c=f(()=>{const g={};return e.length&&(g[e.vertical?"maxHeight":"maxWidth"]=De(e.length)),e.thickness&&(g[e.vertical?"borderRightWidth":"borderTopWidth"]=De(e.thickness)),g});return M(()=>{const g=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[c.value,s.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return t.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[g,r("div",{class:"v-divider__content"},[t.default()]),g]):g}),{}}}),ia=I({items:Array,returnObject:Boolean},"VListChildren"),ot=_()({name:"VListChildren",props:ia(),setup(e,i){let{slots:a}=i;return tt(),()=>{var t,l;return((t=a.default)==null?void 0:t.call(a))??((l=e.items)==null?void 0:l.map(n=>{var b,u;let{children:s,props:c,type:g,raw:m}=n;if(g==="divider")return((b=a.divider)==null?void 0:b.call(a,{props:c}))??r(la,c,null);if(g==="subheader")return((u=a.subheader)==null?void 0:u.call(a,{props:c}))??r(aa,c,null);const y={subtitle:a.subtitle?o=>{var d;return(d=a.subtitle)==null?void 0:d.call(a,{...o,item:m})}:void 0,prepend:a.prepend?o=>{var d;return(d=a.prepend)==null?void 0:d.call(a,{...o,item:m})}:void 0,append:a.append?o=>{var d;return(d=a.append)==null?void 0:d.call(a,{...o,item:m})}:void 0,title:a.title?o=>{var d;return(d=a.title)==null?void 0:d.call(a,{...o,item:m})}:void 0},h=ze.filterProps(c);return s?r(ze,Ce({value:c==null?void 0:c.value},h),{activator:o=>{let{props:d}=o;const v={...c,...d,value:e.returnObject?m:c.value};return a.header?a.header({props:v}):r(Ie,v,y)},default:()=>r(ot,{items:s},a)}):a.item?a.item({props:c}):r(Ie,Ce(c,{value:e.returnObject?m:c.value}),y)}))}}}),sa=I({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Pt}},"list-items");function ra(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ca(e,i){const a=Q(i,e.itemType,"item"),t=ra(i)?i:Q(i,e.itemTitle),l=Q(i,e.itemValue,void 0),n=Q(i,e.itemChildren),s=e.itemProps===!0?Bt(i,["children"]):Q(i,e.itemProps),c={title:t,value:l,...s};return{type:a,title:c.title,value:c.value,props:c,children:a==="item"&&n?dt(e,n):void 0,raw:i}}function dt(e,i){const a=[];for(const t of i)a.push(ca(e,t));return a}function ua(e){return{items:f(()=>dt(e,e.items))}}const oa=I({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...qt({selectStrategy:"single-leaf",openStrategy:"list"}),..._e(),...x(),...te(),...de(),...ve(),itemType:{type:String,default:"type"},...sa(),...me(),...j(),...ae(),...ye({variant:"text"})},"VList"),da=_()({name:"VList",props:oa(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:t}=ua(e),{themeClasses:l}=ne(e),{backgroundColorClasses:n,backgroundColorStyles:s}=Lt(C(e,"bgColor")),{borderClasses:c}=we(e),{densityClasses:g}=fe(e),{dimensionStyles:m}=ge(e),{elevationClasses:y}=he(e),{roundedClasses:h}=be(e),{children:b,open:u,parents:o,select:d}=Jt(e),v=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=C(e,"activeColor"),P=C(e,"baseColor"),p=C(e,"color");tt(),We({VListGroup:{activeColor:w,baseColor:P,color:p,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:w,baseColor:P,color:p,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const L=Y(!1),A=G();function U(k){L.value=!0}function W(k){L.value=!1}function H(k){var z;!L.value&&!(k.relatedTarget&&((z=A.value)!=null&&z.contains(k.relatedTarget)))&&$()}function E(k){const z=k.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(z.tagName))){if(k.key==="ArrowDown")$("next");else if(k.key==="ArrowUp")$("prev");else if(k.key==="Home")$("first");else if(k.key==="End")$("last");else return;k.preventDefault()}}function B(k){L.value=!0}function $(k){if(A.value)return xt(A.value,k)}return M(()=>r(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,c.value,g.value,y.value,v.value,h.value,e.class],style:[s.value,m.value,e.style],tabindex:e.disabled||L.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:U,onFocusout:W,onFocus:H,onKeydown:E,onMousedown:B},{default:()=>[r(ot,{items:t.value,returnObject:e.returnObject},a)]})),{open:u,select:d,focus:$,children:b,parents:o}}}),va={props:{item:{type:Object,required:!0}},data:()=>({dateHelper:Ze}),computed:{kennzeichen(){return et.find(e=>e.id===this.item.kennzeichen)},dateOutput(){return this.dateHelper.format(this.item.foundAt,"HH:mm 'Uhr, am' dd.MM.yyyy")}},methods:{async removeItem(){await window.confirm("Eintrag wirklich entfernen?")&&this.$store.dispatch("collectGame/remove",this.item.kennzeichen)}}},ma=["innerHTML"];function ya(e,i,a,t,l,n){return N(),X(Ie,null,{default:V(()=>[J("h2",null,q(n.kennzeichen.id),1),r(ut,null,{default:V(()=>[J("span",{innerHTML:n.kennzeichen.locationHtml},null,8,ma),D(", "+q(n.kennzeichen.state),1)]),_:1}),r(ct,null,{default:V(()=>[J("i",null,q(n.dateOutput),1)]),_:1}),r(re,{class:"mt-2",onClick:n.removeItem,color:"secondary",size:"small"},{default:V(()=>[r(K,{start:""},{default:V(()=>[D("mdi-close")]),_:1}),D(" aus Liste entfernen")]),_:1},8,["onClick"])]),_:1})}const fa=Be(va,[["render",ya]]);const ga=Ae("v-alert-title"),ha=["success","info","warning","error"],ba=I({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:O,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ha.includes(e)},...x(),...te(),...de(),...ve(),...qe(),...Je(),...me(),...j(),...ae(),...ye({variant:"flat"})},"VAlert"),Sa=_()({name:"VAlert",props:ba(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{emit:a,slots:t}=i;const l=se(e,"modelValue"),n=f(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=f(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:c}=ne(e),{colorClasses:g,colorStyles:m,variantClasses:y}=Pe(s),{densityClasses:h}=fe(e),{dimensionStyles:b}=ge(e),{elevationClasses:u}=he(e),{locationStyles:o}=Xe(e),{positionClasses:d}=Qe(e),{roundedClasses:v}=be(e),{textColorClasses:w,textColorStyles:P}=xe(C(e,"borderColor")),{t:p}=Tt(),L=f(()=>({"aria-label":p(e.closeLabel),onClick(A){l.value=!1,a("click:close",A)}}));return()=>{const A=!!(t.prepend||n.value),U=!!(t.title||e.title),W=!!(t.close||e.closable);return l.value&&r(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},c.value,g.value,h.value,u.value,d.value,v.value,y.value,e.class],style:[m.value,b.value,o.value,e.style],role:"alert"},{default:()=>{var H,E;return[Le(!1,"v-alert"),e.border&&r("div",{key:"border",class:["v-alert__border",w.value],style:P.value},null),A&&r("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?r(R,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):r(K,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),r("div",{class:"v-alert__content"},[U&&r(ga,{key:"title"},{default:()=>{var B;return[((B=t.title)==null?void 0:B.call(t))??e.title]}}),((H=t.text)==null?void 0:H.call(t))??e.text,(E=t.default)==null?void 0:E.call(t)]),t.append&&r("div",{key:"append",class:"v-alert__append"},[t.append()]),W&&r("div",{key:"close",class:"v-alert__close"},[t.close?r(R,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var B;return[(B=t.close)==null?void 0:B.call(t,{props:L.value})]}}):r(re,Ce({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},L.value),null)])]}})}}});const ka=_()({name:"VCardActions",props:x(),setup(e,i){let{slots:a}=i;return We({VBtn:{slim:!0,variant:"text"}}),M(()=>{var t;return r("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Ca=I({opacity:[Number,String],...x(),...j()},"VCardSubtitle"),Va=_()({name:"VCardSubtitle",props:Ca(),setup(e,i){let{slots:a}=i;return M(()=>r(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Ia=Ae("v-card-title"),pa=I({appendAvatar:String,appendIcon:O,prependAvatar:String,prependIcon:O,subtitle:[String,Number],title:[String,Number],...x(),...te()},"VCardItem"),Aa=_()({name:"VCardItem",props:pa(),setup(e,i){let{slots:a}=i;return M(()=>{var m;const t=!!(e.prependAvatar||e.prependIcon),l=!!(t||a.prepend),n=!!(e.appendAvatar||e.appendIcon),s=!!(n||a.append),c=!!(e.title!=null||a.title),g=!!(e.subtitle!=null||a.subtitle);return r("div",{class:["v-card-item",e.class],style:e.style},[l&&r("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?r(R,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):r(Z,null,[e.prependAvatar&&r(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(K,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),r("div",{class:"v-card-item__content"},[c&&r(Ia,{key:"title"},{default:()=>{var y;return[((y=a.title)==null?void 0:y.call(a))??e.title]}}),g&&r(Va,{key:"subtitle"},{default:()=>{var y;return[((y=a.subtitle)==null?void 0:y.call(a))??e.subtitle]}}),(m=a.default)==null?void 0:m.call(a)]),s&&r("div",{key:"append",class:"v-card-item__append"},[a.append?r(R,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):r(Z,null,[e.appendIcon&&r(K,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),_a=I({opacity:[Number,String],...x(),...j()},"VCardText"),vt=_()({name:"VCardText",props:_a(),setup(e,i){let{slots:a}=i;return M(()=>r(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),wa=I({appendAvatar:String,appendIcon:O,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],..._e(),...x(),...te(),...de(),...ve(),...Gt(),...qe(),...Je(),...me(),...Ee(),...j(),...ae(),...ye({variant:"elevated"})},"VCard"),Pa=_()({name:"VCard",directives:{Ripple:Re},props:wa(),setup(e,i){let{attrs:a,slots:t}=i;const{themeClasses:l}=ne(e),{borderClasses:n}=we(e),{colorClasses:s,colorStyles:c,variantClasses:g}=Pe(e),{densityClasses:m}=fe(e),{dimensionStyles:y}=ge(e),{elevationClasses:h}=he(e),{loaderClasses:b}=Ot(e),{locationStyles:u}=Xe(e),{positionClasses:o}=Qe(e),{roundedClasses:d}=be(e),v=Ke(e,a),w=f(()=>e.link!==!1&&v.isLink.value),P=f(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return M(()=>{const p=w.value?"a":e.tag,L=!!(t.title||e.title!=null),A=!!(t.subtitle||e.subtitle!=null),U=L||A,W=!!(t.append||e.appendAvatar||e.appendIcon),H=!!(t.prepend||e.prependAvatar||e.prependIcon),E=!!(t.image||e.image),B=U||H||W,$=!!(t.text||e.text!=null);return pe(r(p,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},l.value,n.value,s.value,m.value,h.value,b.value,o.value,d.value,g.value,e.class],style:[c.value,y.value,u.value,e.style],href:v.href.value,onClick:P.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var k;return[E&&r("div",{key:"image",class:"v-card__image"},[t.image?r(R,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r(Ft,{key:"image-img",cover:!0,src:e.image},null)]),r(Mt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),B&&r(Aa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),$&&r(vt,{key:"text"},{default:()=>{var z;return[((z=t.text)==null?void 0:z.call(t))??e.text]}}),(k=t.default)==null?void 0:k.call(t),t.actions&&r(ka,null,{default:t.actions}),Le(P.value,"v-card")]}}),[[Ue("ripple"),P.value&&e.ripple]])}),{}}}),La={components:{GameCollectItem:fa},data:()=>({dateHelper:Ze,kennzeichen:et}),computed:{...$t({alreadyFound:"collectGame/alreadyFound",startedAt:"collectGame/startedAt"}),alreadyFoundDesc(){return this.alreadyFound.slice().reverse()},percentage(){return Math.round(this.alreadyFound.length/this.kennzeichen.length*1e3)/10}},methods:{startGame(){this.$store.dispatch("collectGame/startGame")},restart(){window.confirm("Neues Spiel starten?")&&this.$store.dispatch("collectGame/startGame")}}},xa=J("h1",null,"Gesammelte Kennzeichen",-1),Ba=J("p",{class:"mb-10"},"Sammele alle Kennzeichen.",-1),Ta={key:0},Ga={key:1};function Oa(e,i,a,t,l,n){const s=Ye("GameCollectItem");return N(),ie("div",null,[xa,Ba,e.startedAt?(N(),ie("div",Ga,[r(Pa,{variant:"outlined",color:"info",class:"mb-3"},{default:V(()=>[r(vt,null,{default:V(()=>[J("h5",null,"gestartet am "+q(e.dateHelper.format(e.startedAt)),1),J("h5",null,[D(q(e.alreadyFound.length)+" von "+q(e.kennzeichen.length)+" ",1),n.percentage>.1?(N(),X(zt,{key:0,color:"primary"},{default:V(()=>[r(K,{start:""},{default:V(()=>[D("mdi-arrow-right-bold-circle")]),_:1}),D(" "+q(n.percentage)+" %",1)]),_:1})):Nt("",!0)])]),_:1})]),_:1}),e.alreadyFound.length===0?(N(),X(Sa,{key:0,color:"info"},{default:V(()=>[D("noch keine Kennzeichen gefunden")]),_:1})):(N(),X(da,{key:1},{default:V(()=>[(N(!0),ie(Z,null,Dt(n.alreadyFoundDesc,c=>(N(),X(s,{class:"my-5",key:c.id,item:c},null,8,["item"]))),128))]),_:1})),r(re,{onClick:n.restart,class:"mt-10",color:"secondary",size:"small"},{default:V(()=>[r(K,{start:""},{default:V(()=>[D("mdi-refresh")]),_:1}),D("Spiel neu starten")]),_:1},8,["onClick"])])):(N(),ie("div",Ta,[r(re,{onClick:n.startGame,color:"primary"},{default:V(()=>[D("Spiel starten")]),_:1},8,["onClick"])]))])}const Fa=Be(La,[["render",Oa]]),Ma={components:{CollectGame:Fa}};function $a(e,i,a,t,l,n){const s=Ye("CollectGame",!0);return N(),X(s)}const Ha=Be(Ma,[["render",$a]]);export{Ha as default};