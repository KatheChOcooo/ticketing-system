import{m as a,j as e,L as n}from"./app-YCDRC7l4.js";import{T as m}from"./text-link-C4AnUEn5.js";import{B as l}from"./app-logo-icon-CStKbqXh.js";import{A as c,L as d}from"./auth-layout-DjdpjTYY.js";function h({status:i}){const{post:s,processing:t}=a({}),o=r=>{r.preventDefault(),s(route("verification.send"))};return e.jsxs(c,{title:"Verify email",description:"Please verify your email address by clicking on the link we just emailed to you.",children:[e.jsx(n,{title:"Email verification"}),i==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-center text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsxs("form",{onSubmit:o,className:"space-y-6 text-center",children:[e.jsxs(l,{disabled:t,variant:"secondary",children:[t&&e.jsx(d,{className:"h-4 w-4 animate-spin"}),"Resend verification email"]}),e.jsx(m,{href:route("logout"),method:"post",className:"mx-auto block text-sm",children:"Log out"})]})]})}export{h as default};
