(this.webpackJsonpglacialadventures=this.webpackJsonpglacialadventures||[]).push([[63],{643:function(e,t,a){"use strict";a.r(t);var n=a(5),o=a(176),r=a.n(o),c=a(6),l=a(7),i=a(9),s=a(8),h=a(10),d=a(0),u=a.n(d),m=a(44),f=a(715),y=a(122),g=a(67),p=a(264),S=a(265),v=a(177),E=a.n(v),w=a(89),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).fetch=function(){a.setState({loading:!0}),w.a.get("/api/hotel",{}).then((function(e){a.setState({loading:!1,hotel:e.data})}))},a.onSelectChange=function(e){console.log("selectedRowKeys changed: ",e),a.setState({selectedRowKeys:e})},a.showModal=function(){a.setState({visible:!0})},a.handleToggleStatus=function(e,t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a.setState({loading:!0}),n.next=3,r.a.awrap(w.a.patch("/api/hotel/".concat(e),{hotel_status:!t,type:"json"}).then((function(e){a.setState({}),a.fetch()})));case 3:case"end":return n.stop()}}))},a.getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,o=t.selectedKeys,r=t.confirm,c=t.clearFilters;return u.a.createElement("div",{style:{padding:8}},u.a.createElement(f.a,{ref:function(e){a.searchInput=e},placeholder:"Search ".concat(e),value:o[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return a.handleSearch(o,r)},style:{width:188,marginBottom:8,display:"block"}}),u.a.createElement(y.a,{type:"primary",onClick:function(){return a.handleSearch(o,r)},icon:"search",size:"small",style:{width:90,marginRight:8}},"Search"),u.a.createElement(y.a,{onClick:function(){return a.handleReset(c)},size:"small",style:{width:90}},"Reset"))},filterIcon:function(e){return u.a.createElement(g.a,{type:"search",style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e].toString().toLowerCase().includes(t.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return a.searchInput.select()}))},render:function(e){return u.a.createElement(E.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[a.state.searchText],autoEscape:!0,textToHighlight:e.toString()})}}},a.handleSearch=function(e,t,n){t(),a.setState({searchText:e[0],searchedColumn:n})},a.handleReset=function(e){e(),a.setState({searchText:""})},a.state={selectedRowKeys:[],loading:!1,hotel:[],searchedColumn:"",hoteldetail:{},city:[],propertytype:[],isEditProduct:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=[{dataIndex:"id",title:"Hotel Id",key:"Id",defaultSortOrder:"ascend",sorter:function(e,t){return e.id-t.id}},Object(n.a)({dataIndex:"hotel_name",title:"Hotel Name",key:"hotel_name"},this.getColumnSearchProps("hotel_name")),{dataIndex:"hotel_email",title:"Hotel Email",key:"hotel_email"},{dataIndex:"city.city_name",title:"City",key:"city_name"},{dataIndex:"hotel_contact",title:"Hotel Contact",key:"hotel_contact"},{dataIndex:"hotel_status",title:"Status",key:"status",render:function(e){return e?"Active":"Inactive"}},{title:"Action",key:"action",render:function(e){return u.a.createElement("span",null,u.a.createElement(p.a,{type:"vertical"}),u.a.createElement(m.a,{to:"/hotel/hotelform/".concat(e.id)},"Edit"),u.a.createElement(p.a,{type:"vertical"}),u.a.createElement(m.a,{to:"/hotel/hotelimg/".concat(e.id)},"Upload Image"))}}],t=this.state,a=t.loading,o=t.selectedRowKeys,r={selectedRowKeys:o,onChange:this.onSelectChange},c=o.length>0;return u.a.createElement("div",null,u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement(y.a,{type:"primary",disabled:!c,loading:a},"Delete"),u.a.createElement(y.a,{href:"/hotel/hotelform/",type:"primary",style:{float:"right"}},"Create"),u.a.createElement("span",{style:{marginLeft:8}},c?"Selected ".concat(o.length," items"):"")),u.a.createElement(S.a,{bordered:!0,rowSelection:r,columns:e,dataSource:this.state.hotel,scroll:{x:"max-content"}}))}}]),t}(u.a.Component);t.default=C},89:function(e,t,a){"use strict";var n=a(238),o=a.n(n);t.a=o.a.create({baseURL:"http://34.93.135.63/",headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}})}}]);
//# sourceMappingURL=63.2b0bf2df.chunk.js.map