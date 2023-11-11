import{i as B,r as m,k as M,c as I,j as t,l as w,m as A,n as z,o as D,u as b,p as E,s as F,q as k}from"./index-1321193e.js";import{T as x,u as S,B as $}from"./Button-5ae48dfe.js";const H=e=>e.movieInfo.status,L=e=>e.movieInfo.error,J="_movieInner_68jfe_1",G="_movieHeader_68jfe_7",K="_movieWrapper_68jfe_13",q="_movieTitle_68jfe_22",U="_movieDescription_68jfe_30",V="_movieRatings_68jfe_30",Y="_userRating_68jfe_30",Q="_moviePoster_68jfe_46",X="_ratingsBox_68jfe_51",Z="_ratingsWrapper_68jfe_58",ee="_ratingItem_68jfe_66",te="_ratingTitle_68jfe_85",se="_movieReviews_68jfe_94",re="_arrowIcon_68jfe_99",ne="_imdb_68jfe_103",ae="_tomatoes_68jfe_107",oe="_metacritic_68jfe_112",i={movieInner:J,movieHeader:G,movieWrapper:K,movieTitle:q,movieDescription:U,movieRatings:V,userRating:Y,moviePoster:Q,ratingsBox:X,ratingsWrapper:Z,ratingItem:ee,ratingTitle:te,movieReviews:se,arrowIcon:re,imdb:ne,tomatoes:ae,metacritic:oe},ie=e=>e.movieInfo.movieInfo,ce=B(ie,e=>e),le=m.forwardRef(({bsPrefix:e,className:n,striped:s,bordered:a,borderless:o,hover:d,size:p,variant:v,responsive:l,...h},_)=>{const u=M(e,"table"),c=I(n,u,v&&`${u}-${v}`,p&&`${u}-${p}`,s&&`${u}-${typeof s=="string"?`striped-${s}`:"striped"}`,a&&`${u}-bordered`,o&&`${u}-borderless`,d&&`${u}-hover`),f=t.jsx("table",{...h,className:c,ref:_});if(l){let r=`${u}-responsive`;return typeof l=="string"&&(r=`${r}-${l}`),t.jsx("div",{className:r,children:f})}return f}),me=le;var C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=w.createContext&&w.createContext(C),j=globalThis&&globalThis.__assign||function(){return j=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)},de=globalThis&&globalThis.__rest||function(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]]);return s};function P(e){return e&&e.map(function(n,s){return w.createElement(n.tag,j({key:s},n.attr),P(n.child))})}function W(e){return function(n){return w.createElement(ue,j({attr:j({},e.attr)},n),P(e.child))}}function ue(e){var n=function(s){var a=e.attr,o=e.size,d=e.title,p=de(e,["attr","size","title"]),v=o||s.size||"1em",l;return s.className&&(l=s.className),e.className&&(l=(l?l+" ":"")+e.className),w.createElement("svg",j({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,p,{className:l,style:j(j({color:e.color||s.color},s.style),e.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&w.createElement("title",null,d),e.children)};return y!==void 0?w.createElement(y.Consumer,null,function(s){return n(s)}):n(C)}function ve(e){return W({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function fe(e){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"}}]})(e)}const ge="_star_5p1gm_1",pe="_filled_5p1gm_7",_e="_editable_5p1gm_11",N={star:ge,filled:pe,editable:_e},xe=m.memo(({isEditable:e=!1,rating:n,setRating:s,id:a,...o})=>{const[d,p]=m.useState(new Array(5).fill(t.jsx(t.Fragment,{}))),v=(c,f)=>{const r=localStorage.getItem("ratings");let g={};r&&(g=JSON.parse(r)),g[c]=f,localStorage.setItem("ratings",JSON.stringify(g))},l=c=>{!e||!s||(s(c),v(a,c))},h=(c,f)=>{f.code!=="Space"||!s||(s(c),v(a,c))},_=m.useCallback(c=>{const f=d.map((r,g)=>t.jsx(fe,{className:I(N.star,{[N.filled]:g<c,[N.editable]:e}),onMouseEnter:()=>u(g+1),onClick:()=>l(g+1),tabIndex:e?0:-1,onKeyDown:R=>e&&h(g+1,R)}));p(f)},[e,d,l,h]),u=m.useCallback(c=>{e&&_(c)},[e,_]);return m.useEffect(()=>{_(n)},[n]),t.jsx("div",{...o,onMouseLeave:()=>u(n),children:d.map((c,f)=>t.jsx("span",{children:c},f))})}),je="_reviewWrapper_kmfc2_1",he={reviewWrapper:je},we=m.memo(({content:e})=>t.jsx("div",{className:he.reviewWrapper,children:t.jsx(x,{role:"title",content:e})})),be="_reviewFormWrapper_frk8l_1",Re="_textarea_frk8l_8",T={reviewFormWrapper:be,textarea:Re},Ne=m.memo(({movieId:e})=>{const[n,s]=m.useState(""),a=S(),o=m.useCallback(p=>{var v;s((v=p.target)==null?void 0:v.value)},[]),d=m.useCallback(()=>{n.trim()!==""&&e&&(a(A.addReview({id:z(),body:n,movieId:e})),s(""))},[n,e,a]);return t.jsxs("div",{className:T.reviewFormWrapper,children:[t.jsx("textarea",{value:n,onChange:o,className:T.textarea}),t.jsx($,{color:"secondary",size:"m",onClick:d,disabled:n.trim()==="",children:"Add Review"})]})});function Te(){var u,c,f;const{id:e}=D(),n=S(),s=b(ce),a=b(H),o=b(L),d=[],p=E(),[v,l]=m.useState(0),h=b(F);Object.keys(s).map(r=>{!r.includes("Poster")&&!r.includes("Ratings")&&!r.includes("Response")&&!r.includes("Plot")&&!r.includes("Title")&&!r.includes("Metascore")&&!r.includes("imdb")&&!r.includes("imdb")&&d.push(r)}),m.useEffect(()=>{const r=localStorage.getItem("ratings"),g=JSON.parse(r);g&&Object.entries(g).find(([R,O])=>{R===e&&l(Number(O))})},[e]),m.useEffect(()=>{e&&n(k({id:e}))},[e,n]);const _=m.useMemo(()=>h.filter(r=>r.movieId===e),[h,e]);return a=="loading"?t.jsx("h2",{children:"Loading..."}):o!==void 0?t.jsx("h2",{children:o}):(d.pop(),t.jsxs("div",{className:i.movieInner,children:[t.jsxs("div",{className:i.movieHeader,children:[t.jsx($,{color:"transparent",size:"m",onClick:()=>p(-1),children:t.jsx(ve,{className:i.arrowIcon})}),t.jsx(x,{role:"title",content:s.Title,isBold:!0,className:i.movieTitle})]}),t.jsxs("div",{className:i.movieWrapper,children:[s!==null?t.jsx("img",{src:s.Poster!=="N/A"?s.Poster:"https://via.placeholder.com/350x450?text=${movieInfo.Title}",alt:s.Title,className:i.moviePoster}):"Movie Info not Found",t.jsx("div",{className:i.movieInfo,children:t.jsxs(me,{bordered:!0,children:[t.jsx("thead",{}),t.jsx("tbody",{children:d.map((r,g)=>t.jsxs("tr",{children:[t.jsx("td",{children:r}),t.jsx("td",{children:s[r]})]},g))})]})})]}),t.jsx(x,{role:"text",content:s.Plot,className:i.movieDescription}),t.jsxs("div",{className:i.ratingsBox,children:[t.jsxs("div",{className:i.movieRatings,children:[t.jsx(x,{role:"title",content:"Ratings",className:i.ratingTitle}),t.jsx("div",{className:i.ratingsWrapper,children:(u=s.Ratings)!=null&&u.length&&((c=s.Ratings)==null?void 0:c.length)>0?(f=s.Ratings)==null?void 0:f.map(r=>t.jsxs("div",{className:I(i.ratingItem,{[i.imdb]:r.Source==="Internet Movie Database",[i.tomatoes]:r.Source==="Rotten Tomatoes",[i.metacritic]:r.Source==="Metacritic"}),children:[t.jsx("span",{children:r.Source}),t.jsx("span",{children:r.Value})]},r.Source)):t.jsx(x,{role:"title",content:"Ratings not Found"})})]}),t.jsxs("div",{className:i.userRating,children:[t.jsx(x,{role:"title",content:`Your ${s.Type} rating`,className:i.ratingTitle}),t.jsx(xe,{rating:v,setRating:l,isEditable:!0,id:e})]})]}),t.jsxs("div",{className:i.movieReviewsWrapper,children:[t.jsx(x,{role:"title",content:"Reviews",isBold:!0,className:i.movieReviews}),_.length>0?_.map(r=>t.jsx(we,{content:r.body},r.id)):t.jsx(x,{role:"title",content:"Reviews not Found"}),t.jsx(Ne,{movieId:e||""})]})]}))}export{Te as default};
