(this["webpackJsonpgw2-calculator"]=this["webpackJsonpgw2-calculator"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},48:function(e,t,a){e.exports=a(88)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(24),c=a.n(s),i=(a(53),a(31)),o=a.n(i),l=(a(54),a(55),a(2)),u=a.n(l),m=a(5),p=a(3),h=a(4),d=a(11),f=a(7),v=a(6),x=a(15),g=a(19),b=a(10),y=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.price,a=e.priceColor,r=t<0,s=Math.abs(t),c=Math.floor(s/1e4),i=Math.floor(s%1e4/100),o=Math.floor(s%1e4%100);return n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("div",{id:"gold",className:"mr-1 flex flex-row items-center"},n.a.createElement(b.a,{icon:"minus",className:"".concat(r?"":"hidden"," ").concat(a," mr-1"),style:{fontSize:"0.5rem"}}),n.a.createElement("img",{src:"https://wiki.guildwars2.com/images/d/d1/Gold_coin.png",alt:"Gold Coin",className:"mr-1 w-4 h-4"}),n.a.createElement("span",{className:"text-sm ".concat(a)},c)),n.a.createElement("div",{id:"silver",className:"mr-1 flex flex-row items-center"},n.a.createElement("img",{src:"https://wiki.guildwars2.com/images/3/3c/Silver_coin.png",alt:"Silver Coin",className:"mr-1 w-4 h-4"}),n.a.createElement("span",{className:"text-sm ".concat(a)},i)),n.a.createElement("div",{id:"copper",className:"mr-1 flex flex-row items-center"},n.a.createElement("img",{src:"https://wiki.guildwars2.com/images/e/eb/Copper_coin.png",alt:"Copper Coin",className:"mr-1 w-4 h-4"}),n.a.createElement("span",{className:"text-sm ".concat(a)},o)))}}]),a}(n.a.Component);y.defaultProps={price:0,priceColor:"text-gray-200"};var E,N,w=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={amount:1},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item,a=this.state.amount;console.log(t);var r=Math.round(t.SellPrice*a),s=Math.round(t.BuyPrice*a),c=Math.round(.15*t.SellPrice)*a,i=r-s-c;return n.a.createElement("div",{className:"flex flex-row px-4 py-2 bg-gray-700"},n.a.createElement("div",{className:"flex flex-row w-2/8 items-center mr-6"},n.a.createElement("img",{src:t.Icon,alt:t.Name,className:"mr-4 w-12 h-12"}),n.a.createElement("span",{className:"italic text-gray-200"},t.Name)),n.a.createElement("div",{className:"flex flex-col xl:flex-row w-4/8 items-center"},n.a.createElement("div",{className:"flex flex-row xl:mr-4"},n.a.createElement("div",{className:"flex flex-col items-center mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 text-gray-500"},"Amount"),n.a.createElement("input",{type:"number",className:"w-16 px-1 text-sm bg-gray-600 text-gray-200",defaultValue:1,onChange:function(t){var a=parseInt(t.target.value);console.log(a),null==a||isNaN(a)||e.setState({amount:a})}})),n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Net Profit"),n.a.createElement(y,{price:i,priceColor:"".concat(i<0?"text-red-500":"text-green-500")}))),n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("div",{className:"flex flex-col items-center mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 text-gray-500"},"Buys"),n.a.createElement(y,{price:s})),n.a.createElement("div",{className:"flex flex-col items-center mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 text-gray-500"},"Sells"),n.a.createElement(y,{price:r})),n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 text-gray-500"},"Fees"),n.a.createElement(y,{price:c})))),n.a.createElement("div",{className:"w-2/8"},n.a.createElement("div",{className:"flex flex-col xl:flex-row justify-evenly w-full h-full"},n.a.createElement("div",{className:"flex flex-row xl:flex-col items-center xl:mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mr-4 xl:mr-0 xl:mb-1 font-bold text-gray-500"},"Relative Appeal"),n.a.createElement("span",{className:"text-gray-200"},t.Appeal.toFixed(2))),n.a.createElement("div",{className:"flex flex-row xl:flex-col items-center xl:mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mr-4 xl:mr-0 xl:mb-1 text-gray-500"},"Margin"),n.a.createElement("span",{className:t.Margin<15?"text-red-500":"text-green-500"},t.Margin.toFixed(2),"%")),n.a.createElement("div",{className:"flex flex-row xl:flex-col items-center xl:mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mr-4 xl:mr-0 xl:mb-1 text-gray-500"},"Sold"),n.a.createElement("span",{className:"text-gray-200"},t.Sold.toFixed(2))),n.a.createElement("div",{className:"flex flex-row xl:flex-col items-center xl:mr-4"},n.a.createElement("label",{htmlFor:"",className:"text-sm mr-4 xl:mr-0 xl:mb-1 text-gray-500"},"Bought"),n.a.createElement("span",{className:"text-gray-200"},t.Bought.toFixed(2))))))}}]),a}(n.a.Component);!function(e){e[e.Name=0]="Name",e[e.Buys=1]="Buys",e[e.Sells=2]="Sells",e[e.Appeal=3]="Appeal",e[e.Margin=4]="Margin",e[e.Sold=5]="Sold",e[e.Bought=6]="Bought"}(E||(E={})),function(e){e[e.Ascending=0]="Ascending",e[e.Descending=1]="Descending"}(N||(N={}));var k,S=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={sortBy:E.Appeal,sortDirection:N.Descending,searchStr:""},r.onSort=r.onSort.bind(Object(d.a)(r)),r.onSortDirection=r.onSortDirection.bind(Object(d.a)(r)),r}return Object(h.a)(a,[{key:"onSort",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target.value),console.log(t.target.value),a=parseInt(t.target.value),this.setState({sortBy:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onSortDirection",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.sortDirection,a=t===N.Ascending?N.Descending:N.Ascending,this.setState({sortDirection:a});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.name,r=t.items,s=t.children,c=this.state,i=c.sortBy,o=c.sortDirection,l=c.searchStr,u=o===N.Ascending,m=r.sort((function(e,t){return i===E.Name?u?e.Name.toLowerCase().localeCompare(t.Name.toLowerCase()):t.Name.toLowerCase().localeCompare(e.Name.toLowerCase()):i===E.Appeal?u?e.Appeal-t.Appeal:t.Appeal-e.Appeal:i===E.Margin?u?e.Margin-t.Margin:t.Margin-e.Margin:i===E.Sold?u?e.Sold-t.Sold:t.Sold-e.Sold:i===E.Bought?u?e.Bought-t.Bought:t.Bought-e.Bought:i===E.Buys?u?e.BuyPrice-t.BuyPrice:t.BuyPrice-e.BuyPrice:i===E.Sells?u?e.SellPrice-t.SellPrice:t.SellPrice-e.SellPrice:0}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex flex-row justify-between items-center px-4 py-2 mb-4 bg-gray-900 text-gray-500"},n.a.createElement("span",{className:""},a),n.a.createElement("div",{className:"flex items-center"},n.a.createElement("form",{className:"flex flex-row mr-4",onSubmit:function(e){return e.preventDefault()}},n.a.createElement("input",{type:"text",className:"pl-2 rounded-l bg-gray-600 text-gray-200",value:l,onChange:function(t){return e.setState({searchStr:t.target.value})}}),n.a.createElement("button",{className:"flex items-center px-2 rounded-r bg-gray-700 text-gray-300"},n.a.createElement(b.a,{icon:"search",className:"mr-1 text-xs"}),n.a.createElement("span",{className:"text-xs"},"Search"))),n.a.createElement("label",{htmlFor:"",className:"mr-2 text-sm"},"Sort By"),n.a.createElement("select",{name:"",id:"",className:"pl-2 rounded-l h-6 text-sm bg-gray-700 text-gray-300",value:i,onChange:this.onSort},n.a.createElement("option",{value:E.Name,className:""},E[E.Name]),n.a.createElement("option",{value:E.Buys,className:""},E[E.Buys]),n.a.createElement("option",{value:E.Sells,className:""},E[E.Sells]),n.a.createElement("option",{value:E.Appeal,className:""},E[E.Appeal]),n.a.createElement("option",{value:E.Margin,className:""},E[E.Margin]),n.a.createElement("option",{value:E.Sold,className:""},E[E.Sold]),n.a.createElement("option",{value:E.Bought,className:""},E[E.Bought])),n.a.createElement("button",{className:"px-2 mr-4 rounded-r border-l border-gray-800 bg-gray-700 text-gray-300",onClick:this.onSortDirection},u&&i!==E.Name&&n.a.createElement(b.a,{icon:"sort-numeric-up"})||!u&&i!==E.Name&&n.a.createElement(b.a,{icon:"sort-numeric-down-alt"})||u&&i===E.Name&&n.a.createElement(b.a,{icon:"sort-alpha-up"})||!u&&i===E.Name&&n.a.createElement(b.a,{icon:"sort-alpha-down-alt"})),n.a.createElement("button",{className:"flex items-center rounded bg-gray-700 text-gray-300",style:{padding:"0.20rem 0.5rem"}},n.a.createElement(b.a,{icon:"filter",className:"mr-1 text-xs"}),n.a.createElement("span",{className:"text-xs"},"Filter")))),null!=s?s(m):null)}}]),a}(n.a.Component),O=function(){function e(t,a){Object(p.a)(this,e),this.id=void 0,this.newest=void 0,this.id=t,this.newest=null!==a&&void 0!==a?a:0}return Object(h.a)(e,[{key:"toObject",value:function(){return{id:this.id.toString(),newest:this.newest.toString()}}}]),e}(),j=function e(t,a){Object(p.a)(this,e),this.Id=void 0,this.History=void 0,this.Id=t,this.History=a},I=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,null,[{key:"ToHistoryItem",value:function(e){try{return{Id:e.id,ChatLink:e.chatLink,Name:e.name,Icon:e.icon,Description:e.description,Type:parseInt(e.type),Rarity:parseInt(e.rarity),Level:e.level,History:e.history}}catch(t){return console.log(t),null}}},{key:"ToHistoryItems",value:function(t){var a=[];return t.forEach((function(t){var r=e.ToHistoryItem(t);null!=r&&a.push(r)})),a}}]),e}(),B=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,null,[{key:"ToPricedItem",value:function(e){try{return{Id:e.id,ChatLink:e.chatLink,Name:e.name,Icon:e.icon,Description:e.description,Type:parseInt(e.type),Rarity:parseInt(e.rarity),Level:e.level,BuyPrice:e.buyPrice,SellPrice:e.sellPrice,Appeal:parseFloat(parseFloat(e.appeal).toFixed(2)),Margin:parseFloat(parseFloat(e.margin).toFixed(2)),Sold:parseFloat(parseFloat(e.recentSold).toFixed(2)),Bought:parseFloat(parseFloat(e.recentBought).toFixed(2))}}catch(t){return console.log(t),null}}},{key:"ToPricedItems",value:function(t){var a=[];return t.forEach((function(t){var r=e.ToPricedItem(t);null!=r&&a.push(r)})),a}}]),e}(),P={urls:{authority:"https://auth.devwulfcodes.com",host:"https://gw2.devwulfcodes.com",gw2calculator:"https://gw2.devwulfcodes.com/api"}},C=new(function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,[{key:"GetItems",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a,r){var n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=P.urls.gw2calculator+"/item/pricedItems?"+new URLSearchParams(a.toObject())+"&pageNumber=".concat(r),e.next=3,fetch(n,{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return s=e.sent,e.next=6,s.json();case 6:if(c=e.sent,!s.ok){e.next=9;break}return e.abrupt("return",B.ToPricedItems(c));case 9:return console.log(c),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"GetItemsWithIds",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a,r){var n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=P.urls.gw2calculator+"/item/pricedItems",e.next=3,fetch(n,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({ids:a,pageNumber:r})});case 3:return s=e.sent,e.next=6,s.json();case 6:if(c=e.sent,!s.ok){e.next=9;break}return e.abrupt("return",B.ToPricedItems(c));case 9:return console.log(c),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"GetHistoryItems",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.urls.gw2calculator+"/item/historyItems",e.next=3,fetch(r,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,n.json();case 6:if(s=e.sent,!n.ok){e.next=9;break}return e.abrupt("return",I.ToHistoryItems(s));case 9:return console.log(s),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"GetItemLists",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r,n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P.urls.gw2calculator+"/list/getLists",e.next=3,fetch(a,{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,e.next=6,r.json();case 6:if(n=e.sent,!r.ok){e.next=12;break}return s=n.itemLists,c=[],s.forEach((function(e){var t={id:e.id,name:e.name};c.push(t)})),e.abrupt("return",c);case 12:return console.log(n),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"GetItemList",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r,n,s,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.urls.gw2calculator+"/list/getList/"+a,e.next=3,fetch(r,{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(s=e.sent,!n.ok){e.next=12;break}return c=s.itemIds,i=[],c.forEach((function(e){var t=parseInt(e);i.push(t)})),e.abrupt("return",i);case 12:return console.log(s),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),D=a(47),A=a(44);!function(e){e[e.OneHour=0]="OneHour",e[e.SixHours=1]="SixHours",e[e.TwelveHours=2]="TwelveHours",e[e.OneDay=3]="OneDay",e[e.ThreeDays=4]="ThreeDays",e[e.OneWeek=5]="OneWeek"}(k||(k={}));var L,T,F=new(function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this,"GW2History")).historyItemPrices=void 0,e.version(1).stores({historyItemPrices:"Id"}),e.open().catch((function(t){console.error("Opening the db '".concat(e.name,"' failed: ").concat(t))})),e.historyItemPrices=e.table("historyItemPrices"),e.historyItemPrices.mapToClass(j),e}return Object(h.a)(a,[{key:"getHistoryItemPrices",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r,n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.historyItemPrices.get(t);case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:if(a!==k.OneWeek){e.next=7;break}return e.abrupt("return",r.History);case 7:n=[],s=new Date,e.t0=a,e.next=e.t0===k.OneHour?12:e.t0===k.SixHours?14:e.t0===k.TwelveHours?16:e.t0===k.OneDay?18:e.t0===k.ThreeDays?20:22;break;case 12:return c=s.setDate(s.getTime()-36e5),e.abrupt("break",24);case 14:return c=s.setDate(s.getTime()-216e5),e.abrupt("break",24);case 16:return c=s.setDate(s.getTime()-432e5),e.abrupt("break",24);case 18:return c=s.setDate(s.getDate()-1),e.abrupt("break",24);case 20:return c=s.setDate(s.getDate()-3),e.abrupt("break",24);case 22:return c=s.setDate(s.getDate()-7),e.abrupt("break",24);case 24:return r.History.forEach((function(e){e.time>=c&&n.push(e)})),e.abrupt("return",n);case 26:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getNewestTime",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getHistoryItemPrices(t,k.OneWeek);case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",0);case 5:return e.abrupt("return",a[0].time);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setHistoryItemPrices",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.historyItemPrices.get(t);case 2:if(n=e.sent){e.next=8;break}return s=new j(t,a),e.next=7,this.historyItemPrices.add(s,s.Id);case 7:return e.abrupt("return");case 8:return(r=n.History).unshift.apply(r,Object(D.a)(a)),e.next=11,this.historyItemPrices.update(t,{History:n.History});case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteOldPrices",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.historyItemPrices.get(t);case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return");case 5:return r=[],n=new Date,s=n.setDate(n.getDate()-7),a.History.forEach((function(e){e.time>=s&&r.push(e)})),e.next=11,this.historyItemPrices.update(t,{History:r});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),a}(A.a)),M=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={id:"",user:void 0,items:[],timespan:k.OneWeek},r.getItems=r.getItems.bind(Object(d.a)(r)),r.setTimespan=r.setTimespan.bind(Object(d.a)(r)),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setTimespan(this.state.timespan)}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props.listId,a=this.state,r=a.id,n=a.timespan;r!==t&&this.setState({id:t},(function(){e.setTimespan(n)}))}},{key:"setTimespan",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getItems(t);case 2:a=e.sent,this.setState({items:a,timespan:t});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getItems",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r,n,s,c,i,o,l,m,p,h,d,f,v,x,g,b,y,E,N,w,k,S;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,r=a.user,n=a.id,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,C.GetItemList(r.access_token,n);case 5:if(s=e.sent){e.next=8;break}return e.abrupt("return",[]);case 8:c=[],i=0;case 10:if(!(i<s.length)){e.next=19;break}return o=s[i],e.next=14,F.getNewestTime(o);case 14:l=e.sent,c.push(new O(o,l));case 16:i++,e.next=10;break;case 19:return e.next=21,C.GetHistoryItems(r.access_token,c);case 21:if(m=e.sent){e.next=24;break}return e.abrupt("return",[]);case 24:p=[],i=0;case 26:if(!(i<m.length)){e.next=56;break}return h=m[i],e.next=30,F.deleteOldPrices(h.Id);case 30:return e.next=32,F.setHistoryItemPrices(h.Id,h.History);case 32:return e.next=34,F.getHistoryItemPrices(h.Id,t);case 34:if((d=e.sent)&&!(d.length<=0)){e.next=39;break}return f={Id:h.Id,ChatLink:h.ChatLink,Name:h.Name,Icon:h.Icon,Description:h.Description,Type:h.Type,Rarity:h.Rarity,Level:h.Level,BuyPrice:0,SellPrice:0,Appeal:0,Margin:0,Sold:0,Bought:0},p.push(f),e.abrupt("continue",53);case 39:v=d[0],console.log(v),console.log(v.buyPrice),x=v.buyPrice,g=v.sellPrice,b=(g-x)/g*100,y=0,E=0,d.forEach((function(e){y+=e.sold,E+=e.bought})),N=y/d.length,w=E/d.length,k=b>15?b*N*w:0,S={Id:h.Id,ChatLink:h.ChatLink,Name:h.Name,Icon:h.Icon,Description:h.Description,Type:h.Type,Rarity:h.Rarity,Level:h.Level,BuyPrice:x,SellPrice:g,Appeal:k,Margin:b,Sold:N,Bought:w},p.push(S);case 53:i++,e.next=26;break;case 56:return e.abrupt("return",p);case 57:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.items;t.timespan;return n.a.createElement("div",{className:"main w-full px-4 py-4 bg-gray-800"},n.a.createElement(x.AuthenticationContext.Consumer,null,(function(t){return null==t.oidcUser||e.state.user||e.setState({user:t.oidcUser}),n.a.createElement(n.a.Fragment,null)})),n.a.createElement(S,{items:a,name:"Tracked Items"},(function(e){return n.a.createElement(g.a,{noScrollX:!0,style:{height:"calc(100vh - 11rem)"}},e.map((function(e,t){return n.a.createElement("div",{key:t,className:"mb-2"},n.a.createElement(w,{item:e}))})))})))}}]),a}(n.a.Component),H=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"w-full bg-gray-800 text-gray-200"})}}]),a}(n.a.Component),G=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.item;return n.a.createElement("div",{className:"flex flex-row px-4 py-2 bg-gray-700"},n.a.createElement("div",{className:"flex flex-row w-2/8 items-center mr-6"},n.a.createElement("img",{src:e.Icon,alt:e.Name,className:"mr-4 w-12 h-12"}),n.a.createElement("span",{className:"italic text-gray-200"},e.Name)),n.a.createElement("div",{className:"flex flex-col w-2/12 items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Buys"),n.a.createElement(y,{price:e.BuyPrice})),n.a.createElement("div",{className:"flex flex-col w-2/12 items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Sells"),n.a.createElement(y,{price:e.SellPrice})),n.a.createElement("div",{className:"flex flex-col w-1/12 items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Margin"),n.a.createElement("span",{className:"".concat(e.Margin>15?"text-green-500":"text-red-500")},e.Margin,"%")),n.a.createElement("div",{className:"flex flex-col w-1/12 items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Recent Sold"),n.a.createElement("span",{className:""},e.Sold)),n.a.createElement("div",{className:"flex flex-col w-1/12 items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Recent Bought"),n.a.createElement("span",{className:""},e.Bought)),n.a.createElement("div",{className:"flex flex-col w-2/12 items-center"},n.a.createElement("label",{htmlFor:"",className:"text-sm mb-1 font-bold text-gray-500"},"Appeal Score"),n.a.createElement("span",{className:""},e.Appeal)))}}]),a}(n.a.Component);!function(e){e[e.None=0]="None",e[e.Junk=1]="Junk",e[e.Basic=2]="Basic",e[e.Fine=4]="Fine",e[e.Masterwork=8]="Masterwork",e[e.Rare=16]="Rare",e[e.Exotic=32]="Exotic",e[e.Ascended=64]="Ascended",e[e.Legendary=128]="Legendary",e[e.All=255]="All"}(L||(L={})),function(e){e[e.None=0]="None",e[e.Armor=1]="Armor",e[e.Back=2]="Back",e[e.Bag=4]="Bag",e[e.Consumable=8]="Consumable",e[e.Container=16]="Container",e[e.CraftingMaterial=32]="CraftingMaterial",e[e.Gathering=64]="Gathering",e[e.Gizmo=128]="Gizmo",e[e.Key=256]="Key",e[e.MiniPet=512]="MiniPet",e[e.Tool=1024]="Tool",e[e.Trait=2048]="Trait",e[e.Trinket=4096]="Trinket",e[e.Trophy=8192]="Trophy",e[e.UpgradeComponent=16384]="UpgradeComponent",e[e.Weapon=32768]="Weapon",e[e.All=65535]="All"}(T||(T={}));var _=function(){function e(t){var a,r,n,s,c,i,o,l,u,m,h;Object(p.a)(this,e),this.name=void 0,this.type=void 0,this.rarity=void 0,this.minLevel=void 0,this.maxLevel=void 0,this.minBuyPrice=void 0,this.maxBuyPrice=void 0,this.minSellPrice=void 0,this.maxSellPrice=void 0,this.sortBy=void 0,this.sortDirection=void 0,this.name=null!==(a=null===t||void 0===t?void 0:t.name)&&void 0!==a?a:"",this.type=null!==(r=null===t||void 0===t?void 0:t.type)&&void 0!==r?r:T.All,this.rarity=null!==(n=null===t||void 0===t?void 0:t.rarity)&&void 0!==n?n:L.All,this.minLevel=null!==(s=null===t||void 0===t?void 0:t.minLevel)&&void 0!==s?s:0,this.maxLevel=null!==(c=null===t||void 0===t?void 0:t.maxLevel)&&void 0!==c?c:80,this.minBuyPrice=null!==(i=null===t||void 0===t?void 0:t.minBuyPrice)&&void 0!==i?i:0,this.maxBuyPrice=null!==(o=null===t||void 0===t?void 0:t.maxBuyPrice)&&void 0!==o?o:1e8,this.minSellPrice=null!==(l=null===t||void 0===t?void 0:t.minSellPrice)&&void 0!==l?l:1e4,this.maxSellPrice=null!==(u=null===t||void 0===t?void 0:t.maxSellPrice)&&void 0!==u?u:1e8,this.sortBy=null!==(m=null===t||void 0===t?void 0:t.sortBy)&&void 0!==m?m:E.Appeal,this.sortDirection=null!==(h=null===t||void 0===t?void 0:t.sortDirection)&&void 0!==h?h:N.Descending}return Object(h.a)(e,[{key:"toObject",value:function(){return{name:this.name,type:this.type.valueOf().toString(),rarity:this.rarity.valueOf().toString(),minLevel:this.minLevel.toString(),maxLevel:this.maxLevel.toString(),minBuyPrice:this.minBuyPrice.toString(),maxBuyPrice:this.maxBuyPrice.toString(),minSellPrice:this.minSellPrice.toString(),maxSellPrice:this.maxSellPrice.toString(),sortBy:this.sortBy.valueOf().toString(),sortDirection:this.sortDirection.valueOf().toString()}}}]),e}(),R=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={user:void 0,items:[],sortBy:E.Appeal,sortDirection:N.Descending,searchStr:""},r.onSearch=r.onSearch.bind(Object(d.a)(r)),r.onSort=r.onSort.bind(Object(d.a)(r)),r.onSortDirection=r.onSortDirection.bind(Object(d.a)(r)),r.getItems=r.getItems.bind(Object(d.a)(r)),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getItems();case 2:if(null!=(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:this.setState({items:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSearch",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.searchStr,e.next=4,this.getItems({name:a});case 4:if(null!=(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:this.setState({items:r});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onSort",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.value),console.log(t.target.value),a=parseInt(t.target.value),e.next=5,this.getItems({sortBy:a});case 5:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return");case 8:this.setState({sortBy:a,items:r});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onSortDirection",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.sortDirection,a=t===N.Ascending?N.Descending:N.Ascending,e.next=4,this.getItems({sortDirection:a});case 4:if(null!=(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:this.setState({sortDirection:a,items:r});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItems",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r,n,s,c,i,o,l,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.state,c=s.user,i=s.searchStr,o=s.sortBy,l=s.sortDirection,m={name:null!==(a=null===t||void 0===t?void 0:t.name)&&void 0!==a?a:i,sortBy:null!==(r=null===t||void 0===t?void 0:t.sortBy)&&void 0!==r?r:o,sortDirection:null!==(n=null===t||void 0===t?void 0:t.sortDirection)&&void 0!==n?n:l},c){e.next=4;break}return e.abrupt("return",null);case 4:return e.next=6,C.GetItems(c.access_token,new _(m),1);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.name,r=t.children,s=this.state,c=s.items,i=s.sortBy,o=s.sortDirection,l=s.searchStr,u=o===N.Ascending;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex flex-row justify-between items-center px-4 py-2 mb-4 bg-gray-900 text-gray-500"},n.a.createElement(x.AuthenticationContext.Consumer,null,(function(t){return null==t.oidcUser||e.state.user||e.setState({user:t.oidcUser}),n.a.createElement(n.a.Fragment,null)})),n.a.createElement("span",{className:""},a),n.a.createElement("div",{className:"flex items-center"},n.a.createElement("form",{className:"flex flex-row mr-4",onSubmit:this.onSearch},n.a.createElement("input",{type:"text",className:"pl-2 rounded-l bg-gray-600 text-gray-200",value:l,onChange:function(t){return e.setState({searchStr:t.target.value})}}),n.a.createElement("button",{className:"flex items-center px-2 rounded-r bg-gray-700 text-gray-300"},n.a.createElement(b.a,{icon:"search",className:"mr-1 text-xs"}),n.a.createElement("span",{className:"text-xs"},"Search"))),n.a.createElement("label",{htmlFor:"",className:"mr-2 text-sm"},"Sort By"),n.a.createElement("select",{name:"",id:"",className:"pl-2 rounded-l h-6 text-sm bg-gray-700 text-gray-300",value:i,onChange:this.onSort},n.a.createElement("option",{value:E.Name,className:""},E[E.Name]),n.a.createElement("option",{value:E.Buys,className:""},E[E.Buys]),n.a.createElement("option",{value:E.Sells,className:""},E[E.Sells]),n.a.createElement("option",{value:E.Appeal,className:""},E[E.Appeal]),n.a.createElement("option",{value:E.Margin,className:""},E[E.Margin]),n.a.createElement("option",{value:E.Sold,className:""},E[E.Sold]),n.a.createElement("option",{value:E.Bought,className:""},E[E.Bought])),n.a.createElement("button",{className:"px-2 mr-4 rounded-r border-l border-gray-800 bg-gray-700 text-gray-300",onClick:this.onSortDirection},u&&i!==E.Name&&n.a.createElement(b.a,{icon:"sort-numeric-up"})||!u&&i!==E.Name&&n.a.createElement(b.a,{icon:"sort-numeric-down-alt"})||u&&i===E.Name&&n.a.createElement(b.a,{icon:"sort-alpha-up"})||!u&&i===E.Name&&n.a.createElement(b.a,{icon:"sort-alpha-down-alt"})),n.a.createElement("button",{className:"flex items-center rounded bg-gray-700 text-gray-300",style:{padding:"0.20rem 0.5rem"}},n.a.createElement(b.a,{icon:"filter",className:"mr-1 text-xs"}),n.a.createElement("span",{className:"text-xs"},"Filter")))),null!=r?r(c):null)}}]),a}(n.a.Component),U=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"main w-full px-4 py-4 bg-gray-800 text-gray-200"},n.a.createElement(R,{name:"Results"},(function(e){return n.a.createElement(g.a,{noScrollX:!0,style:{height:"calc(100vh - 11rem)"}},e.map((function(e,t){return n.a.createElement("div",{key:t,className:"mb-2"},n.a.createElement(G,{item:e}))})))})))}}]),a}(n.a.Component),W=a(16),z=a(8),J={client_id:"gw2_calculator_app",response_type:"id_token token",scope:"openid email roles profile gw2calculator",automaticSilentRenew:!0,loadUserInfo:!0,authority:P.urls.authority,redirect_uri:"".concat(P.urls.host,"/authentication/callback"),post_logout_redirect_uri:"".concat(P.urls.host,"/"),silent_redirect_uri:"".concat(P.urls.host,"/authentication/silent_callback")},X=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"",style:{boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.2)",zIndex:100}},n.a.createElement(x.AuthenticationContext.Consumer,null,(function(e){return n.a.createElement("div",{className:"flex justify-between items-center px-4 bg-indigo-700 text-indigo-200"},n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement(W.b,{className:"transition duration-150 ease-in-out mr-6 text-lg font-bold hover:text-indigo-100",to:"/"},"GW2 Calculator"),n.a.createElement(W.b,{className:"transition duration-150 ease-in-out mr-3 py-5 px-2 hover:bg-indigo-600 hover:text-indigo-100",to:"/"},"Dashboard"),n.a.createElement(W.b,{className:"transition duration-150 ease-in-out mr-3 py-5 px-2 hover:bg-indigo-600 hover:text-indigo-100",to:"/search"},"Search"),n.a.createElement(W.b,{className:"transition duration-150 ease-in-out mr-3 py-5 px-2 hover:bg-indigo-600 hover:text-indigo-100",to:"/list"},"My List")),e.oidcUser&&n.a.createElement("div",{className:""},n.a.createElement("span",{className:"mr-4"},"Hello, ",e.oidcUser.profile.name,"!"),n.a.createElement("button",{className:"transition duration-150 ease-in-out px-4 py-1 bg-indigo-800 hover:shadow-lg hover:bg-indigo-900 hover:text-indigo-100",onClick:function(){return e.logout()}},"Logout"))||!e.oidcUser&&n.a.createElement("div",{className:""},n.a.createElement("button",{className:"transition duration-150 ease-in-out px-4 py-1 bg-indigo-800 hover:shadow-lg hover:bg-indigo-900 hover:text-indigo-100",onClick:function(){return e.login()}},"Login")))})))}}]),a}(n.a.Component),K=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.itemList;return n.a.createElement(W.b,{className:"transition duration-150 ease-in-out block px-5 py-3 bg-opacity-25 bg-indigo-700 text-indigo-300 hover:bg-opacity-100 hover:text-indigo-200 cursor-pointer",to:"list/".concat(e.id)},n.a.createElement("span",{className:""},e.name))}}]),a}(n.a.Component),V=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={user:void 0,itemLists:[]},r.refreshItemLists=r.refreshItemLists.bind(Object(d.a)(r)),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshItemLists();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refreshItemLists",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.user){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,C.GetItemLists(t.access_token);case 5:if(a=e.sent){e.next=8;break}return e.abrupt("return");case 8:this.setState({itemLists:a});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.itemLists;return n.a.createElement("div",{className:"sidebar hidden py-4 xl:flex xl:w-1/4 bg-gray-900",style:{width:"16rem"}},n.a.createElement(x.AuthenticationContext.Consumer,null,(function(a){return null==a.oidcUser||e.state.user||e.setState({user:a.oidcUser}),n.a.createElement(g.a,{noScrollX:!0},t.map((function(e,t){return n.a.createElement("div",{key:t,className:"mb-2"},n.a.createElement(K,{itemList:e}))})))})))}}]),a}(n.a.Component),$=a(21),q=a(46);function Q(){var e=Object(z.g)().id;return n.a.createElement(M,{listId:e})}$.b.add(q.a);var Y=function(){return n.a.createElement("div",{className:"flex flex-col"},n.a.createElement(W.a,null,n.a.createElement(x.AuthenticationProvider,{configuration:J,callbackComponentOverride:function(){return n.a.createElement("div",{className:"flex justify-center items-center w-screen h-screen bg-gray-700 text-gray-100"},n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("img",{src:o.a,alt:"logo",className:"App-logo w-12"}),n.a.createElement("span",{className:""},"Logging in...")))},authenticating:function(){return n.a.createElement("div",{className:"flex justify-center items-center w-screen h-screen bg-gray-700 text-gray-100"},n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("img",{src:o.a,alt:"logo",className:"App-logo w-12"}),n.a.createElement("span",{className:""},"Logging out...")))}},n.a.createElement(X,null),n.a.createElement(z.a,{path:"/authentication/callback",to:"/"}),n.a.createElement("div",{className:"flex flex-row",style:{height:"calc(100vh - 4rem)"}},n.a.createElement(z.d,null,n.a.createElement(z.b,{exact:!0,path:"/",component:H}),n.a.createElement(z.b,{path:"/search",component:U}),n.a.createElement(z.b,{path:"/list/:id",component:Q})),n.a.createElement(V,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.fcbef36a.chunk.js.map