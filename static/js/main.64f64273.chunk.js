(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{11:function(t,e,a){t.exports=a(18)},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),s=(a(16),a(2)),l=a.n(s),c=a(10),u=a(3),h=a(4),d=a(6),m=a(5),p=a(1),b=a(7),f=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(d.a)(this,Object(m.a)(e).call(this,t))).state={items:localStorage.getItem("test")?JSON.parse(localStorage.getItem("test")):[],text:"",status:""},a.myStorage=localStorage,a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.updateState=a.updateState.bind(Object(p.a)(a)),a.handleClear=a.handleClear.bind(Object(p.a)(a)),a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"TODO"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"new-todo"},"What needs to be done?"),i.a.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),i.a.createElement("button",null,"Add #",this.state.items.length+1)),i.a.createElement(g,{items:this.state.items,updateState:this.updateState}))}},{key:"componentDidUpdate",value:function(){this.myStorage.setItem("test",JSON.stringify(this.state.items))}},{key:"handleChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){if(t.preventDefault(),0!==this.state.text.length){var e={text:this.state.text,status:"in progress",id:Date.now()};this.setState((function(t){return{items:t.items.concat(e),text:""}}))}}},{key:"updateState",value:function(){var t=Object(c.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.persist(),console.log(this.state.items),t.next=4,this.setState((function(t){return{items:t.items.map((function(t){return t.id==e.target.id&&(t.status="done"),t}))}}));case 4:console.log(this.state.items);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleClear",value:function(){localStorage.clear()}}]),e}(i.a.Component),g=function(t){function e(t){return Object(u.a)(this,e),Object(d.a)(this,Object(m.a)(e).call(this,t))}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("ul",null,this.props.items.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("input",{type:"checkbox",name:e.id,id:e.id,onClick:t.props.updateState}),i.a.createElement("label",{htmlFor:e.id},e.text))})))}}]),e}(i.a.Component),S=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.64f64273.chunk.js.map