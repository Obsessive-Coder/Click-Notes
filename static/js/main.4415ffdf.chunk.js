(this["webpackJsonpclick-notes"]=this["webpackJsonpclick-notes"]||[]).push([[0],{60:function(e,t,a){},61:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var i=a(3),s=a(1),n=a.n(s),r=a(25),c=a.n(r),o=(a(60),a(53)),l=a(11),d=(a(61),a(99)),x=a(16),h=a(17),u=a(7),b=a(20),j=a(19),p=a(107),m=a(108),f=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.children;return Object(i.jsx)("header",{className:"mb-lg-3 bg-primary shadow app-header",children:e})}}]),a}(s.Component),v=a(94),g=a(95),O=a(96),N=a(97),k=a(98),y=a(110),w=a(111),C=a(112),D=a(91),B=a(92),z=a(93);function R(e){var t=e.navItems,a=e.makeReport;return Object(i.jsx)(n.a.Fragment,{children:t.map((function(e){return e.hasOwnProperty("items")?Object(i.jsxs)(y.a,{nav:!0,inNavbar:!0,children:[Object(i.jsx)(w.a,{nav:!0,caret:!0,className:"font-italic text-uppercase font-small",children:"More"}),Object(i.jsx)(C.a,{right:!0,className:"bg-primary shadow",children:Object(i.jsx)("div",{className:"d-flex justify-content-around",children:e.items.map((function(e){return"report"===e.text?Object(i.jsx)(ee,{makeReport:a},e.id):Object(i.jsx)(D.a,{disabled:!0,tag:"a",href:e.location,target:"_blank",className:"flex-fill text-center text-uppercase text-white-50 font-italic nav-sub-item",children:e.text},e.id)}))})})]},e.id):Object(i.jsx)(B.a,{children:Object(i.jsx)(z.a,{disabled:!0,href:e.location,className:"py-1 font-italic text-uppercase",target:"_blank",children:e.text})},e.id)}))})}var T=[{id:0,text:"calendar",location:"#"},{id:1,text:"script",location:"#"},{id:2,text:"follow-up",location:"#"},{id:3,text:"more",items:[{id:4,text:"sop",location:"#"},{id:5,text:"checklist",location:"#"},{id:6,text:"reschedule",location:"#"},{id:7,text:"report",location:"#"}]}],F=[{id:0,text:"personable",isDone:!1},{id:1,text:"passionate",isDone:!1},{id:2,text:"prepared",isDone:!1},{id:3,text:"professional",isDone:!1},{id:4,text:"knowledgeable",isDone:!1},{id:5,text:"engaged",isDone:!1},{id:6,text:"coachable",isDone:!1},{id:7,text:"comprehensible",isDone:!1}],S=[{id:9,text:"empathized",count:0},{id:10,text:"encouraged",count:0},{id:11,text:"validated",count:0},{id:0,text:"asked goal",count:0},{id:1,text:"opened console",count:0},{id:2,text:"used search",count:0},{id:8,text:"leading question",count:0},{id:15,text:"explain it back",count:0},{id:14,text:"offered follow-up",count:0},{id:3,text:"checked understanding",count:0},{id:4,text:"student read error",count:0},{id:5,text:"student explained error",count:0},{id:6,text:"quality explanation",count:0},{id:7,text:"explained resource",count:0},{id:12,text:"compared own code",count:0},{id:13,text:"compared online code",count:0},{id:16,text:"tips, tricks, & wisdom",count:0},{id:17,text:"mentioned formatting",count:0},{id:20,text:"adapted",count:0}],E=[{id:14,text:"apathetic",count:0},{id:0,text:"discouraging",count:0},{id:15,text:"disinterested",count:0},{id:12,text:"profanity",count:0},{id:4,text:"fumble",count:0},{id:7,text:"false info",count:0},{id:17,text:"minor silence",count:0},{id:1,text:"too complex",count:0},{id:3,text:"rabbit hole",count:0},{id:9,text:"read error",count:0},{id:11,text:"explained error",count:0},{id:10,text:"error location",count:0},{id:13,text:"not using console",count:0},{id:5,text:"wrong change",count:0},{id:6,text:"extra formatting",count:0},{id:8,text:"confusion ignored",count:0},{id:16,text:"self-doubt ignored",count:0},{id:2,text:"i'm confused",count:0}],P=[{id:0,text:"CDN",count:0},{id:1,text:"silences",count:0},{id:3,text:"answers",count:0},{id:2,text:"responses",count:0},{id:4,text:"changes",count:0},{id:5,text:"other",count:0}],A=[{id:0,text:"jquery CDN",isDone:!1},{id:1,text:"CDN order",isDone:!1},{id:2,text:"alert syntax",isDone:!1},{id:3,text:"bling - doc.ready()",isDone:!1},{id:4,text:"bling - button.on()",isDone:!1},{id:5,text:"event delegation",isDone:!1},{id:6,text:"poor formatting",isDone:!1},{id:7,text:"missing semicolons",isDone:!1}],I=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(x.a)(this,a),(i=t.call(this,e)).toggleNavbar=i.toggleNavbar.bind(Object(u.a)(i)),i.state={collapsed:!0},i}return Object(h.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.props.makeReport;return Object(i.jsxs)(v.a,{dark:!0,className:"navbar-expand-md align-items-baseline mb-3 py-0 py-md-2 shadow-sm",children:[Object(i.jsx)(g.a,{href:"/",className:"mr-auto",children:"CLICK NOTES"}),Object(i.jsx)(O.a,{onClick:this.toggleNavbar,className:"mr-2 rounded-circle"}),Object(i.jsx)(N.a,{navbar:!0,isOpen:!this.state.collapsed,children:Object(i.jsx)(k.a,{navbar:!0,className:"flex-row flex-wrap justify-content-around ml-auto text-left",children:Object(i.jsx)(R,{navItems:T,makeReport:e})})})]})}}]),a}(s.Component),q=a(50),L=a(100),M=a(37),J=a(27);function _(e){var t=e.candidate;return t||(t={name:"candidate name",interviewType:"type",university:"name of university"}),Object(i.jsxs)("div",{className:"d-flex justify-content-around flex-wrap flex-md-nowrap",children:[Object(i.jsx)("h3",{className:"flex-grow-1 flex-md-grow-0 w-50 px-md-5 mb-0 text-capitalize text-truncate text-left",children:t.name}),Object(i.jsx)("span",{className:"mx-4 text-uppercase",children:t.interviewType}),Object(i.jsx)("span",{className:"flex-grow-1 text-capitalize text-truncate",children:t.university})]})}function K(e){var t=e.traits,a=e.handleTraitClick,s=t.map((function(e){return Object(i.jsxs)(q.a,{outline:!e.isDone,size:"sm",color:!0===e.isDone?"success":"light","data-category":"traits","data-name":e.text,onClick:a,className:"position-relative w-25 px-3 rounded-0 text-truncate text-capitalize trait-button",children:[e.isDone&&Object(i.jsx)(J.a,{icon:!0===e.isDone?M.a:M.b,fixedWidth:!0,size:"lg",style:{left:0,top:0},className:"position-absolute no-pointer-events"}),Object(i.jsx)("span",{className:"d-inline-block no-pointer-events",children:e.text})]},e.id)}));return Object(i.jsxs)(d.a,{fluid:!0,className:"d-flex flex-column",children:[Object(i.jsx)(_,{candidate:void 0}),Object(i.jsxs)("div",{className:"d-flex justify-content-center flex-wrap flex-md-nowrap py-4",children:[Object(i.jsx)("div",{className:"d-flex flex-wrap flex-grow-1 shadow",children:s}),Object(i.jsxs)("div",{className:"d-flex flex-fill justify-content-around w-25 px-5 px-md-3 pt-3 py-md-0",children:[Object(i.jsx)(q.a,{disabled:!0,color:"dark",className:"mr-1 rounded-circle text-capitalize shadow-lg round-button",children:"round 1"}),Object(i.jsx)(q.a,{disabled:!0,color:"dark",className:"ml-1 rounded-circle text-capitalize-lg shadow round-button",children:"round 2"})]}),Object(i.jsxs)(L.a,{vertical:!0,className:"flex-fill w-25 px-0 pl-sm-3 pt-3 py-md-0 border-left border-light outcome-button-group",children:[Object(i.jsx)(q.a,{disabled:!0,size:"lg",color:"success",className:"text-uppercase font-weight-bolder pass-button",children:"pass"}),Object(i.jsxs)(L.a,{size:"sm",children:[Object(i.jsx)(q.a,{disabled:!0,color:"warning",className:"text-capitalize substitute-button",children:"substitute"}),Object(i.jsx)(q.a,{disabled:!0,color:"danger",className:"text-capitalize fail-button",children:"fail"})]})]})]})]})}var W=a(101);function G(e){var t=e.behaviors,a=e.color,s=e.subcategory,n=e.handleClick,r=e.handleRightClick;return Object(i.jsx)(d.a,{className:"d-flex flex-wrap justify-content-center p-0",children:t.map((function(e){return Object(i.jsxs)(q.a,{outline:!0,size:"sm",color:a,"data-category":"behaviors","data-sub-category":s,"data-name":e.text,onClick:n,onContextMenu:r,className:"position-relative w-25 m-1 text-capitalize text-wrap text-truncate rounded-lg shadow behavior-button",children:[e.text,Object(i.jsx)(W.a,{color:"transparent",style:{right:1},className:"position-absolute p-0 font-large text-muted",children:e.count})]},e.id)}))})}var H=a(102),Q=a(103),U=a(28);function V(e){var t=e.errors,a=e.handleClick;return Object(i.jsx)(H.a,{flush:!0,className:"text-justify mx-3 mx-md-1",children:t.map((function(e){return Object(i.jsxs)(Q.a,{action:!0,tag:"button",color:e.isDone?"success":"warning","data-category":"errors","data-name":e.text,onClick:a,className:"py-0 px-2 text-capitalize error-button",children:[Object(i.jsx)(J.a,{size:"lg",icon:e.isDone?U.a:U.c,className:"mr-2"}),e.text]},e.id)}))})}var X=a(109),Y=a(104),Z=a(105),$=a(106),ee=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(x.a)(this,a),(i=t.call(this,e)).state={modal:!1,report:{observedTraits:[],observedBehaviors:[],fixedErrors:[]}},i.toggle=i.toggle.bind(Object(u.a)(i)),i.handleOpen=i.handleOpen.bind(Object(u.a)(i)),i}return Object(h.a)(a,[{key:"toggle",value:function(){this.setState((function(e){return{modal:!e.modal}}))}},{key:"handleOpen",value:function(){var e=(0,this.props.makeReport)();this.setState((function(){return{report:e}}))}},{key:"render",value:function(){var e=this.state.report,t=e.observedTraits,a=e.observedBehaviors,s=e.fixedErrors;return Object(i.jsxs)("div",{children:[Object(i.jsx)(q.a,{color:"link",onClick:this.toggle,className:"flex-fill text-center text-uppercase text-white-50 font-italic dropdown-item nav-sub-item",children:"report"}),Object(i.jsxs)(X.a,{size:"lg",isOpen:this.state.modal,toggle:this.toggle,onOpened:this.handleOpen,className:"mw-100 mx-5 report-modal",children:[Object(i.jsx)(Y.a,{tag:"h4",toggle:this.toggle,className:"bg-primary text-capitalize text-white-50 shadow",children:"interview report"}),Object(i.jsxs)(Z.a,{className:"pb-0 shadow-sm text-center",children:[Object(i.jsxs)("div",{className:"mx-auto w-50",children:[Object(i.jsx)("h5",{className:"text-capitalize",children:"observed traits"}),Object(i.jsxs)("div",{className:"d-flex justify-content-center flex-wrap text-capitalize",children:[0===t.length&&Object(i.jsx)("p",{children:"no data"}),t.map((function(e){return Object(i.jsx)("span",{className:"w-25 text-capitalize font-weight-bold",children:e.text},e.index)}))]})]}),Object(i.jsxs)("div",{className:"my-4 pb-3",children:[Object(i.jsx)("h5",{className:"text-capitalize",children:"observed behaviors"}),Object(i.jsxs)("div",{className:"d-flex flex-wrap justify-content-around text-capitalize text-center",children:[Object(i.jsxs)("div",{className:"flex-fill border-right border-dark report-section",children:[Object(i.jsx)("p",{className:"mb-0 font-weight-bold report-sub-heading",children:"positive"}),a.positiveBehaviors&&0===a.positiveBehaviors.length&&Object(i.jsx)("p",{children:"no data"}),Object(i.jsx)(H.a,{flush:!0,className:"flex-wrap mx-3 mh-100",children:a.positiveBehaviors&&a.positiveBehaviors.map((function(e){return Object(i.jsxs)(Q.a,{className:"p-0 text-left",children:[Object(i.jsx)(W.a,{color:"transparent",className:"font-large text-muted",children:e.count}),Object(i.jsx)("span",{className:"d-inline-block",children:e.text})]},e.id)}))})]}),Object(i.jsxs)("div",{className:"flex-fill report-section",children:[Object(i.jsx)("p",{className:"mb-0 font-weight-bold report-sub-heading",children:"negative"}),a.negativeBehaviors&&0===a.negativeBehaviors.length&&Object(i.jsx)("p",{children:"no data"}),Object(i.jsx)(H.a,{flush:!0,className:"flex-wrap mx-3 mh-100",children:a.negativeBehaviors&&a.negativeBehaviors.map((function(e){return Object(i.jsxs)(Q.a,{className:"p-0 text-capitalize text-left",children:[Object(i.jsx)(W.a,{color:"transparent",className:"font-large text-muted",children:e.count}),Object(i.jsx)("span",{className:"d-inline-block",children:e.text})]},e.id)}))})]})]})]}),Object(i.jsx)("div",{className:"my-3 pb-3",children:Object(i.jsxs)("div",{className:"d-flex flex-wrap justify-content-around text-capitalize text-center",children:[Object(i.jsxs)("div",{className:"flex-fill pb-3 border-right border-dark report-section-bottom",children:[Object(i.jsx)("p",{className:"mb-0 font-weight-bold report-sub-heading",children:"red flags"}),a.redFlags&&0===a.redFlags.length&&Object(i.jsx)("p",{children:"no data"}),Object(i.jsx)(H.a,{flush:!0,className:"flex-wrap mx-3 mh-100",children:a.redFlags&&a.redFlags.map((function(e){return Object(i.jsxs)(Q.a,{className:"p-0 text-capitalize text-left",children:[Object(i.jsx)(W.a,{color:"transparent",className:"font-large text-muted",children:e.count}),Object(i.jsx)("span",{className:"d-inline-block",children:e.text})]},e.id)}))})]}),Object(i.jsxs)("div",{className:"flex-fill pb-3 report-section-bottom",children:[Object(i.jsx)("p",{className:"mb-0 font-weight-bold report-sub-heading",children:"errors"}),0===s.length&&Object(i.jsx)("p",{children:"no data"}),Object(i.jsx)(H.a,{flush:!0,className:"flex-wrap mx-3 mh-100",children:s.map((function(e){return Object(i.jsx)(Q.a,{className:"p-0 text-left",children:Object(i.jsx)("span",{className:"d-inline-block",children:e.text})},e.id)}))})]})]})})]}),Object(i.jsxs)($.a,{className:"align-items-end py-1",children:[Object(i.jsx)(q.a,{disabled:!0,color:"primary",onClick:this.toggle,className:"shadow",children:Object(i.jsx)(J.a,{size:"lg",icon:U.b})}),Object(i.jsx)(q.a,{color:"link",onClick:this.toggle,className:"text-capitalize",children:"close"})]})]})]})}}]),a}(s.Component),te=(a(86),function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(x.a)(this,a),(i=t.call(this,e)).state={behaviors:{positiveBehaviors:S,negativeBehaviors:E,redFlags:P},traits:F,errors:A},i.handleTraitClick=i.handleTraitClick.bind(Object(u.a)(i)),i.handleBehaviorClick=i.handleBehaviorClick.bind(Object(u.a)(i)),i.handleBehaviorRightClick=i.handleBehaviorRightClick.bind(Object(u.a)(i)),i.handleErrorClick=i.handleErrorClick.bind(Object(u.a)(i)),i.makeReport=i.makeReport.bind(Object(u.a)(i)),i}return Object(h.a)(a,[{key:"handleTraitClick",value:function(e){var t=this.state.traits,a=e.target.getAttribute("data-name");if(a){var i=t.map((function(e){return e.text===a&&(e.isDone=!e.isDone),e}));this.setState((function(){return{traits:i}}))}}},{key:"handleBehaviorClick",value:function(e){var t=this.state.behaviors,a=e.target,i=a.getAttribute("data-sub-category"),s=a.getAttribute("data-name");if(i){var n=t[i].map((function(e){return e.text===s&&(e.count+=1),e}));t[i]=n,this.setState((function(){return{behaviors:t}}))}}},{key:"handleBehaviorRightClick",value:function(e){e.preventDefault();var t=this.state.behaviors,a=e.target,i=a.getAttribute("data-sub-category"),s=a.getAttribute("data-name");if(i){var n=t[i].map((function(e){return e.text===s&&(e.count-=1,e.count<0&&(e.count=0)),e}));t[i]=n,this.setState((function(){return{behaviors:t}}))}}},{key:"handleErrorClick",value:function(e){var t=this.state.errors,a=e.target.getAttribute("data-name");if(a){var i=t.map((function(e){return e.text===a&&(e.isDone=!e.isDone),e}));this.setState((function(){return{errors:i}}))}}},{key:"makeReport",value:function(){var e,t,a=this.state,i=a.behaviors,s=a.errors,n=a.traits,r=[];for(var c in n)n.hasOwnProperty(c)&&(e=n[c]).isDone&&r.push(e);var o,l=[];for(var d in s)s.hasOwnProperty(d)&&(t=s[d]).isDone&&l.push(t);var x=[];for(var h in i)if(i.hasOwnProperty(h)){o=i[h],x[h]=[];var u=void 0;for(var b in o)o.hasOwnProperty(b)&&(u=o[b]).count>=1&&x[h].push(u)}return{observedTraits:r,observedBehaviors:x,fixedErrors:l}}},{key:"render",value:function(){var e=this.state,t=e.behaviors,a=e.traits,s=e.errors,n=t.positiveBehaviors,r=t.negativeBehaviors,c=t.redFlags;return Object(i.jsxs)(d.a,{fluid:!0,className:"p-0 app",children:[Object(i.jsxs)(f,{children:[Object(i.jsx)(I,{makeReport:this.makeReport}),Object(i.jsx)(K,{traits:a,handleTraitClick:this.handleTraitClick})]}),Object(i.jsx)(d.a,{fluid:!0,children:Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(m.a,{xs:"12",sm:"6",md:"5",className:"px-0 py-3",children:[Object(i.jsx)("h4",{className:"text-uppercase",children:"positive points"}),Object(i.jsx)(G,{color:"success",subcategory:"positiveBehaviors",behaviors:n,handleClick:this.handleBehaviorClick,handleRightClick:this.handleBehaviorRightClick})]}),Object(i.jsxs)(m.a,{xs:"12",sm:"6",md:"4",className:"px-0 py-3",children:[Object(i.jsx)("h5",{className:"text-uppercase",children:"negative points"}),Object(i.jsx)(G,{color:"warning",subcategory:"negativeBehaviors",behaviors:r,handleClick:this.handleBehaviorClick,handleRightClick:this.handleBehaviorRightClick})]}),Object(i.jsx)(m.a,{xs:"12",sm:"12",md:"3",className:"px-0 py-3",children:Object(i.jsxs)("div",{className:"d-flex flex-md-column flex-wrap flex-sm-nowrap",children:[Object(i.jsxs)("div",{className:"flex-fill pb-4 pt-sm-0 flags-section",children:[Object(i.jsx)("h6",{className:"text-uppercase",children:"red flags"}),Object(i.jsx)(G,{color:"danger",subcategory:"redFlags",behaviors:c,handleClick:this.handleBehaviorClick,handleRightClick:this.handleBehaviorRightClick})]}),Object(i.jsxs)("div",{className:"flex-fill errors-section",children:[Object(i.jsx)("h6",{className:"text-uppercase",children:"error summary"}),Object(i.jsx)(V,{errors:s,handleClick:this.handleErrorClick})]})]})})]})})]})}}]),a}(s.Component));var ae=function(){return Object(i.jsx)(o.a,{basename:"https://obsessive-coder.github.io/click-notes/",children:Object(i.jsx)(d.a,{fluid:!0,id:"display",className:"p-0",children:Object(i.jsx)(l.c,{children:Object(i.jsx)(l.a,{exact:!0,path:"/",component:te})})})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),n(e),r(e)}))};a(89);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(ae,{})}),document.getElementById("root")),ie()}},[[90,1,2]]]);
//# sourceMappingURL=main.4415ffdf.chunk.js.map