import{p as H,I as E,m as $,a3 as fe,x as he,aL as ye,am as q,l as Y,at as Z,i as K,y as ee,ax as me,a6 as ge,A as ke,aM as pe,u as ae,e as n,aK as Ae,f as I,O as F,aA as Se,aN as we,aO as be,B as Ee,aP as Re,aQ as Ce,W as G,j as p,aR as ne,aS as _e,aT as se,J as Te,aU as ie,aV as Be,aB as Ge,aC as Fe,G as L,Q as Ve,E as oe,aq as Oe,ar as Me,aW as We,as as De,au as Le,n as He,aw as $e,ay as qe,r as Ke,aX as Ne,av as Qe,k as ce,aa as Ue,N as je,v as Xe,P as ue}from"./index-1608f067.js";const Je=H({start:Boolean,end:Boolean,icon:E,image:String,text:String,...$(),...fe(),...he(),...ye(),...q(),...Y(),...Z({variant:"flat"})},"VAvatar"),re=K()({name:"VAvatar",props:Je(),setup(e,s){let{slots:t}=s;const{themeClasses:u}=ee(e),{colorClasses:i,colorStyles:h,variantClasses:c}=me(e),{densityClasses:y}=ge(e),{roundedClasses:d}=ke(e),{sizeClasses:k,sizeStyles:b}=pe(e);return ae(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},u.value,i.value,y.value,d.value,k.value,c.value,e.class],style:[h.value,b.value,e.style]},{default:()=>[t.default?n(F,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?n(Ae,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(I,{key:"icon",icon:e.icon},null):e.text,Se(!1,"v-avatar")]})),{}}});function Ye(e){let{selectedElement:s,containerElement:t,isRtl:u,isHorizontal:i}=e;const h=O(i,t),c=xe(i,u,t),y=O(i,s),d=Ie(i,s),k=y*.4;return c>d?d-k:c+h<d+y?d-h+y+k:c}function Ze(e){let{selectedElement:s,containerElement:t,isHorizontal:u}=e;const i=O(u,t),h=Ie(u,s),c=O(u,s);return h-i/2+c/2}function de(e,s){const t=e?"scrollWidth":"scrollHeight";return(s==null?void 0:s[t])||0}function ea(e,s){const t=e?"clientWidth":"clientHeight";return(s==null?void 0:s[t])||0}function xe(e,s,t){if(!t)return 0;const{scrollLeft:u,offsetWidth:i,scrollWidth:h}=t;return e?s?h-i+u:u:t.scrollTop}function O(e,s){const t=e?"offsetWidth":"offsetHeight";return(s==null?void 0:s[t])||0}function Ie(e,s){const t=e?"offsetLeft":"offsetTop";return(s==null?void 0:s[t])||0}const aa=Symbol.for("vuetify:v-slide-group"),Pe=H({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:aa},nextIcon:{type:E,default:"$next"},prevIcon:{type:E,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...$(),...we(),...q(),...be({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ve=K()({name:"VSlideGroup",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isRtl:u}=Ee(),{displayClasses:i,mobile:h}=Re(e),c=Ce(e,e.symbol),y=G(!1),d=G(0),k=G(0),b=G(0),v=p(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:R}=ne(),{resizeRef:m,contentRect:P}=ne(),o=_e(),S=p(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),N=p(()=>c.selected.value.length?c.items.value.findIndex(a=>a.id===c.selected.value[0]):-1),C=p(()=>c.selected.value.length?c.items.value.findIndex(a=>a.id===c.selected.value[c.selected.value.length-1]):-1);if(se){let a=-1;Te(()=>[c.selected.value,R.value,P.value,v.value],()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{if(R.value&&P.value){const l=v.value?"width":"height";k.value=R.value[l],b.value=P.value[l],y.value=k.value+1<b.value}if(N.value>=0&&m.el){const l=m.el.children[C.value];_(l,e.centerActive)}})})}const z=G(!1);function _(a,l){let r=0;l?r=Ze({containerElement:f.el,isHorizontal:v.value,selectedElement:a}):r=Ye({containerElement:f.el,isHorizontal:v.value,isRtl:u.value,selectedElement:a}),M(r)}function M(a){if(!se||!f.el)return;const l=O(v.value,f.el),r=xe(v.value,u.value,f.el);if(!(de(v.value,f.el)<=l||Math.abs(a-r)<16)){if(v.value&&u.value&&f.el){const{scrollWidth:D,offsetWidth:J}=f.el;a=D-J-a}v.value?o.horizontal(a,S.value):o(a,S.value)}}function g(a){const{scrollTop:l,scrollLeft:r}=a.target;d.value=v.value?r:l}function x(a){if(z.value=!0,!(!y.value||!m.el)){for(const l of a.composedPath())for(const r of m.el.children)if(r===l){_(r);return}}}function Q(a){z.value=!1}let T=!1;function W(a){var l;!T&&!z.value&&!(a.relatedTarget&&((l=m.el)!=null&&l.contains(a.relatedTarget)))&&V(),T=!1}function B(){T=!0}function U(a){if(!m.el)return;function l(r){a.preventDefault(),V(r)}v.value?a.key==="ArrowRight"?l(u.value?"prev":"next"):a.key==="ArrowLeft"&&l(u.value?"next":"prev"):a.key==="ArrowDown"?l("next"):a.key==="ArrowUp"&&l("prev"),a.key==="Home"?l("first"):a.key==="End"&&l("last")}function V(a){var r,w;if(!m.el)return;let l;if(!a)l=Be(m.el)[0];else if(a==="next"){if(l=(r=m.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!l)return V("first")}else if(a==="prev"){if(l=(w=m.el.querySelector(":focus"))==null?void 0:w.previousElementSibling,!l)return V("last")}else a==="first"?l=m.el.firstElementChild:a==="last"&&(l=m.el.lastElementChild);l&&l.focus({preventScroll:!0})}function A(a){const l=v.value&&u.value?-1:1,r=(a==="prev"?-l:l)*k.value;let w=d.value+r;if(v.value&&u.value&&f.el){const{scrollWidth:D,offsetWidth:J}=f.el;w+=D-J}M(w)}const j=p(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),X=p(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!h.value;case!0:return y.value||Math.abs(d.value)>0;case"mobile":return h.value||y.value||Math.abs(d.value)>0;default:return!h.value&&(y.value||Math.abs(d.value)>0)}}),le=p(()=>Math.abs(d.value)>1),te=p(()=>{if(!f.value)return!1;const a=de(v.value,f.el),l=ea(v.value,f.el);return a-l-Math.abs(d.value)>1});return ae(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":X.value,"v-slide-group--is-overflowing":y.value},i.value,e.class],style:e.style,tabindex:z.value||c.selected.value.length?-1:0,onFocus:W},{default:()=>{var a,l,r;return[X.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!le.value}],onMousedown:B,onClick:()=>le.value&&A("prev")},[((a=t.prev)==null?void 0:a.call(t,j.value))??n(ie,null,{default:()=>[n(I,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:g},[n("div",{ref:m,class:"v-slide-group__content",onFocusin:x,onFocusout:Q,onKeydown:U},[(l=t.default)==null?void 0:l.call(t,j.value)])]),X.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!te.value}],onMousedown:B,onClick:()=>te.value&&A("next")},[((r=t.next)==null?void 0:r.call(t,j.value))??n(ie,null,{default:()=>[n(I,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:A,scrollOffset:d,focus:V}}}),ze=Symbol.for("vuetify:v-chip-group"),la=H({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ge},...Pe(),...$(),...be({selectedClass:"v-chip--selected"}),...q(),...Y(),...Z({variant:"tonal"})},"VChipGroup");K()({name:"VChipGroup",props:la(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{themeClasses:u}=ee(e),{isSelected:i,select:h,next:c,prev:y,selected:d}=Ce(e,ze);return Fe({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),ae(()=>{const k=ve.filterProps(e);return n(ve,Ve(k,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,{isSelected:i,select:h,next:c,prev:y,selected:d.value})]}})}),{}}});const ta=H({activeClass:String,appendAvatar:String,appendIcon:E,closable:Boolean,closeIcon:{type:E,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:E,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:oe(),onClickOnce:oe(),...Oe(),...$(),...fe(),...Me(),...We(),...he(),...De(),...ye(),...q({tag:"span"}),...Y(),...Z({variant:"tonal"})},"VChip"),sa=K()({name:"VChip",directives:{Ripple:Le},props:ta(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,s){let{attrs:t,emit:u,slots:i}=s;const{t:h}=He(),{borderClasses:c}=$e(e),{colorClasses:y,colorStyles:d,variantClasses:k}=me(e),{densityClasses:b}=ge(e),{elevationClasses:v}=qe(e),{roundedClasses:f}=ke(e),{sizeClasses:R}=pe(e),{themeClasses:m}=ee(e),P=Ke(e,"modelValue"),o=Ne(e,ze,!1),S=Qe(e,t),N=p(()=>e.link!==!1&&S.isLink.value),C=p(()=>!e.disabled&&e.link!==!1&&(!!o||e.link||S.isClickable.value)),z=p(()=>({"aria-label":h(e.closeLabel),onClick(g){g.preventDefault(),g.stopPropagation(),P.value=!1,u("click:close",g)}}));function _(g){var x;u("click",g),C.value&&((x=S.navigate)==null||x.call(S,g),o==null||o.toggle())}function M(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),_(g))}return()=>{const g=S.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),Q=!!(x||i.append),T=!!(i.close||e.closable),W=!!(i.filter||e.filter)&&o,B=!!(e.prependIcon||e.prependAvatar),U=!!(B||i.prepend),V=!o||o.isSelected.value;return P.value&&ce(n(g,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":C.value,"v-chip--filter":W,"v-chip--pill":e.pill},m.value,c.value,V?y.value:void 0,b.value,v.value,f.value,R.value,k.value,o==null?void 0:o.selectedClass.value,e.class],style:[V?d.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:S.href.value,tabindex:C.value?0:void 0,onClick:_,onKeydown:C.value&&!N.value&&M},{default:()=>{var A;return[Se(C.value,"v-chip"),W&&n(je,{key:"filter"},{default:()=>[ce(n("div",{class:"v-chip__filter"},[i.filter?n(F,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},i.filter):n(I,{key:"filter-icon",icon:e.filterIcon},null)]),[[Xe,o.isSelected.value]])]}),U&&n("div",{key:"prepend",class:"v-chip__prepend"},[i.prepend?n(F,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},i.prepend):n(ue,null,[e.prependIcon&&n(I,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&n(re,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n("div",{class:"v-chip__content","data-no-activator":""},[((A=i.default)==null?void 0:A.call(i,{isSelected:o==null?void 0:o.isSelected.value,selectedClass:o==null?void 0:o.selectedClass.value,select:o==null?void 0:o.select,toggle:o==null?void 0:o.toggle,value:o==null?void 0:o.value.value,disabled:e.disabled}))??e.text]),Q&&n("div",{key:"append",class:"v-chip__append"},[i.append?n(F,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},i.append):n(ue,null,[e.appendIcon&&n(I,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&n(re,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),T&&n("button",Ve({key:"close",class:"v-chip__close",type:"button"},z.value),[i.close?n(F,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},i.close):n(I,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ue("ripple"),C.value&&e.ripple,null]])}}});export{sa as V,re as a};
