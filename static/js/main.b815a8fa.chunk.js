(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),a=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(b.jsx)("div",{"data-cy":"time",children:this.state.time})}}]),n}(u.a.Component),j=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!1},t.clockVisible=function(){t.setState({isClockVisible:!0})},t.clockInvisible=function(){return t.setState({isClockVisible:!1})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsxs)("p",{children:["Current time:"," "]}),this.state.isClockVisible&&Object(b.jsx)(h,{}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.clockVisible,children:"Show Clock"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.clockInvisible,children:"Hide Clock"})]})}}]),n}(u.a.Component);i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b815a8fa.chunk.js.map