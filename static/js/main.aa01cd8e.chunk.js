(this["webpackJsonpemployee-record"]=this["webpackJsonpemployee-record"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),r=a.n(s),l=(a(10),a(2)),o=(a(11),a(17)),i=a(0);function m(){return Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"First Name"}),Object(i.jsx)("th",{scope:"col",children:"Last Name"}),Object(i.jsx)("th",{scope:"col",children:"Department"}),Object(i.jsx)("th",{scope:"col",children:"Hire Date"}),Object(i.jsx)("th",{scope:"col"})]})})}function j(e){var t=e.tableEmployees.map((function(t,a){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:a+1}),Object(i.jsx)("td",{children:t.firstname}),Object(i.jsx)("td",{children:t.lastname}),Object(i.jsx)("td",{children:t.department}),Object(i.jsx)("td",{children:t.hiredate}),Object(i.jsx)("td",{children:Object(i.jsxs)("button",{onClick:e.tableOnDelete,value:t.id,className:"btn btn-primary ",children:[" Delete ",Object(i.jsx)(o.a,{})," "]})})]},a)}));return Object(i.jsx)("tbody",{children:t})}var d=function(e){return Object(i.jsx)("div",{className:"container my-5",children:Object(i.jsxs)("table",{className:"table table-striped",children:[Object(i.jsx)(m,{}),Object(i.jsx)(j,{tableEmployees:e.employees,tableOnDelete:e.onDelete})]})})};var b=function(e){return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsxs)("form",{onSubmit:e.onAddEmployee,children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"firstname",className:"form-label",children:"First Name"}),Object(i.jsx)("input",{type:"text",name:"firstname",className:"form-control",id:"firstname",value:e.firstName,onChange:e.onFirstNameInputChange})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"lastname",className:"form-label",children:"Last Name"}),Object(i.jsx)("input",{type:"text",name:"lastname",className:"form-control",id:"lastname",value:e.lastName,onChange:e.onLastNameInputChange})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"department",className:"form-label",children:"Department"}),Object(i.jsx)("input",{type:"text",name:"department",className:"form-control",id:"department",value:e.department,onChange:e.onDepartmentInputChange})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"date",className:"form-label",children:"Hire Date"}),Object(i.jsx)("input",{type:"date",name:"hiredate",className:"form-control",id:"date",value:e.hireDate,onChange:e.onHireDateInputChange})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Record"})]})})})},h=localStorage.getItem("employeesdata")?JSON.parse(localStorage.getItem("employeesdata")):[];var p=function(){var e=Object(n.useState)(h),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),o=r[0],m=r[1],j=Object(n.useState)(""),p=Object(l.a)(j,2),u=p[0],O=p[1],x=Object(n.useState)(""),f=Object(l.a)(x,2),N=f[0],v=f[1],y=Object(n.useState)(""),g=Object(l.a)(y,2),D=g[0],C=g[1];return Object(n.useEffect)((function(){localStorage.setItem("employeesdata",JSON.stringify(a))}),[a]),Object(i.jsxs)("div",{className:"container my-5",children:[Object(i.jsx)("h1",{className:"text-center my-3",children:"Employee Records"}),Object(i.jsx)("p",{className:"text-center",children:" Add an employee data to the employee record table"}),Object(i.jsx)(d,{employees:a,onDelete:function(e){var t=parseInt(e.target.value,10),n=a.find((function(e){return e.id===t}));if(void 0!==n&&window.confirm("Delete employee ".concat(n.firstname," ").concat(n.lastname," record ?"))){var s=a.filter((function(e){return e.id!==t}));c(s)}}}),Object(i.jsx)("h3",{children:"Add New Employee"}),Object(i.jsx)(b,{firstName:o,lastName:u,department:N,hireDate:D,onFirstNameInputChange:function(e){m(e.target.value)},onLastNameInputChange:function(e){O(e.target.value)},onDepartmentInputChange:function(e){v(e.target.value)},onHireDateInputChange:function(e){C(e.target.value)},onAddEmployee:function(e){e.preventDefault();var t={id:a.length+1,firstname:o,lastname:u,department:N,hiredate:D};c(a.concat(t)),m(""),O(""),v(""),C("")}})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.aa01cd8e.chunk.js.map