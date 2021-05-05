(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=(n(16),n(11)),i=n(4),l=n(5),u=n(7),d=n(6),b=n(10),m=n(3),h=n.n(m),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.submitted(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{className:h.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{children:["Phone",Object(j.jsx)("input",{className:h.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:h.a.btnAdd,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),p=n(2),C=n.n(p),O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{className:C.a.contact,children:[a,": ",c]}),Object(j.jsx)("button",{className:C.a.delete,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},x=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:["Filter contacts by name",Object(j.jsx)("input",{className:C.a.search,type:"text",value:e,onChange:n})]})},v=n(20),_=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert(e.name+"is already in contacts"):(e.id=Object(v.a)(),t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}})))},t.filterInput=function(e){t.setState({filter:e.currentTarget.value})},t.filteredContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(f,{submitted:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(x,{value:this.state.filter,onChange:this.filterInput}),this.state.filter?Object(j.jsx)(O,{contacts:this.filteredContacts(),onDeleteContact:this.deleteContact}):Object(j.jsx)(O,{contacts:this.state.contacts,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={contact:"Contacts_contact__3_TQl",search:"Contacts_search__3rC8e",delete:"Contacts_delete__16OwR"}},3:function(t,e,n){t.exports={inputForm:"ContactForm_inputForm__2de9Q",btnAdd:"ContactForm_btnAdd__2M8yM",form:"ContactForm_form__2IF4m"}}},[[18,1,2]]]);
//# sourceMappingURL=main.4d341874.chunk.js.map