import{t as o,v as _,w as p,j as r,c as d}from"./index-1321193e.js";function i(s=o){const t=s===o?_:p(s);return function(){const{store:n}=t();return n}}const m=i();function x(s=o){const t=s===o?m:i(s);return function(){return t().dispatch}}const b=x(),q=b,k="_title_1wqgk_1",y="_text_1wqgk_6",g="_bold_1wqgk_10",c={title:k,text:y,bold:g};function H({role:s,content:t,isBold:e,className:n}){return r.jsxs(r.Fragment,{children:[s==="title"&&r.jsx("h2",{className:d(c.title,n,{[c.bold]:e===!0}),children:t}),s==="text"&&r.jsx("p",{className:d(c.text,n,{[c.bold]:e===!0}),children:t})]})}const h="_btn_1g6ck_1",f="_primary_1g6ck_6",j="_secondary_1g6ck_16",R="_transparent_1g6ck_21",w="_disabled_1g6ck_26",C="_small_1g6ck_31",D="_middle_1g6ck_35",a={btn:h,primary:f,secondary:j,transparent:R,disabled:w,small:C,middle:D};function $({children:s,color:t,size:e,className:n,disabled:l=!1,...u}){return r.jsx("button",{className:d(a.btn,n,{[a.primary]:t==="primary",[a.secondary]:t==="secondary",[a.transparent]:t==="transparent",[a.disabled]:t==="disabled",[a.small]:e==="s",[a.middle]:e==="m"}),disabled:l,...u,children:s})}export{$ as B,H as T,b as a,q as u};