(this["webpackJsonpdaily-traker-app"]=this["webpackJsonpdaily-traker-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),i=(a(16),a(10)),o=a(2),d=a(3),s=a(5),h=a(4),u=a(6),m=(a(17),a(18),a(1)),f=a.n(m);a(20),a(21);function k(e){var t=e.n,a=e.i;return e.checkDates.includes(t)?c.a.createElement("div",{className:"date checked-date",key:"".concat(t,"-").concat(a)},0===t?"":t):c.a.createElement("div",{className:"date",key:"".concat(t,"-").concat(a)},0===t?"":t)}var p=function(e){for(var t=e.checkDates,a=[],n=f()().startOf("month").get("day"),r=f()().daysInMonth(),l=0;l<n;l++)a.push(0);for(var i=0;i<r;i++)a.push(i+1);for(var o=[],d=0;d<a.length/7;d++)o.push(c.a.createElement("div",{className:"calendar-row",key:d},a.slice(7*d,7*d+7).map((function(e,a){return c.a.createElement(k,{key:"".concat(e,"_").concat(a),n:e,i:a,checkDates:t})}))));return o};function v(){return c.a.createElement("div",{className:"days"},["S","M","T","W","T","F","S"].map((function(e,t){return c.a.createElement("div",{className:"day",key:t},e)})))}var E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.checkDates;return c.a.createElement("div",{className:"calendar-root"},c.a.createElement(v,null),c.a.createElement(p,{checkDates:e}))}}]),t}(n.Component);function b(e){var t=e.id,a=e.checkDates,n=e.handleCheck,r=f()().date();return a.includes(r)?null:c.a.createElement("button",{className:"item-check-button",onClick:function(){return n(t)}},c.a.createElement("span",{role:"img","aria-label":"check"},"\u2714\ufe0f"))}function O(e){var t=e.id,a=e.title,n=e.checkDates,r=e.handleCheck;return c.a.createElement("div",null,c.a.createElement("div",{className:"item-header"},c.a.createElement("h2",null,a),c.a.createElement(b,{id:t,checkDates:n,handleCheck:r})),c.a.createElement("div",{className:"item-calendar"},c.a.createElement(E,{checkDates:n})))}function D(e){var t=e.id,a=e.handleEdit,n=e.handleDelete,r=e.handleSettingOpen;return c.a.createElement("div",{className:"setting"},c.a.createElement("button",{onClick:function(){a(t),r()}},"edit title \u270f\ufe0f"),c.a.createElement("button",{onClick:function(){n(t),r()}},"delete \ud83d\uddd1\ufe0f"))}var y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleSettingOpen=function(){var e=a.state.settingOpen;a.setState({settingOpen:!e})},a.state={settingOpen:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.checkDates,r=e.handleCheck,l=e.handleEdit,i=e.handleDelete,o=this.state.settingOpen;return c.a.createElement("div",{className:"tracker-box",onDoubleClick:this.handleSettingOpen},o?c.a.createElement(D,{id:t,handleEdit:l,handleSettingOpen:this.handleSettingOpen,handleDelete:i}):c.a.createElement(O,{id:t,title:a,checkDates:n,handleCheck:r}))}}]),t}(n.Component),j=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.handleCheck,n=e.handleEdit,r=e.handleDelete;return c.a.createElement("div",{className:"tracker-list"},t.map((function(e){return c.a.createElement(y,{key:e.id,title:e.title,id:e.id,checkDates:e.checkDates,checkToday:e.checkToday,handleCheck:a,handleEdit:n,handleDelete:r})})))}}]),t}(n.Component)),g=(a(23),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.month,a=e.handleMonth;return c.a.createElement("div",{className:"month"},c.a.createElement("button",{onClick:function(){return a("-")}},c.a.createElement("h2",null,"<")),c.a.createElement("h2",null,t),t!==f()().format("YYYY . M")&&c.a.createElement("button",{onClick:function(){return a("+")}},c.a.createElement("h2",null,">")))}}]),t}(n.Component)),S=function(e){function t(){var e;Object(o.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).handleLoadData=function(e){return localStorage.getItem(e)},e.handleSaveData=function(t){localStorage.setItem(e.state.month,JSON.stringify(t))},e.handleAddItem=function(){var t=prompt("Add new habit to traking \ud83d\ude0a"),n=a(24);if(""!==t&&null!==t){var c=e.state.data;e.setState({data:c.concat({id:n.generate(),title:t,checkDates:[]})},(function(){e.handleSaveData(e.state.data)}))}},e.handleCheck=function(t){var a=f()().date(),n=e.state.data;e.setState({data:n.map((function(e){return e.id===t?{id:e.id,title:e.title,checkDates:e.checkDates.concat(a)}:e}))},(function(){e.handleSaveData(e.state.data)}))},e.handleMonth=function(t){var a=e.state.month,n=parseInt(a.split(".")[0]),c=parseInt(a.split(".")[1]),r="";r="+"===t?12===c?"".concat(n+1," . 01"):"".concat(n," . ").concat(c+1):1===c?"".concat(n-1," . 12"):"".concat(n," . ").concat(c-1);var l=e.handleLoadData(r),i=JSON.parse(l);i=null===i?[]:i,e.setState({month:r,data:e.state.data.slice(0,0).concat(i)})},e.handleEdit=function(t){var a=prompt("Write your new title. \ud83d\ude00"),n=e.state.data;""!==a&&null!==a&&e.setState({data:n.map((function(e){return e.id===t?Object(i.a)({},e,{title:a}):e}))},(function(){e.handleSaveData(e.state.data)}))},e.handleDelete=function(t){var a=e.state.data;window.confirm("Do you really want to delete this habit?\ud83d\ude02")&&e.setState({data:a.filter((function(e){return e.id!==t}))},(function(){e.handleSaveData(e.state.data)}))};var n=f()().format("YYYY . M"),c=e.handleLoadData(n),r=JSON.parse(c);return e.state={month:n,data:null===r?[]:r},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"app-title"},"Daily tracker"),this.state.month===f()().format("YYYY . M")&&c.a.createElement("button",{className:"add-item-button",onClick:this.handleAddItem},"\u2714 Add item")),c.a.createElement(g,{month:this.state.month,handleMonth:this.handleMonth}),c.a.createElement("div",{className:"tracker"},c.a.createElement(j,{data:this.state.data,handleCheck:this.handleCheck,handleEdit:this.handleEdit,handleDelete:this.handleDelete})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.71026a5b.chunk.js.map