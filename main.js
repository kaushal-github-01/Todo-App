(()=>{"use strict";document.querySelector("nav button").addEventListener("click",(()=>{const e=document.getElementById("formDiv");e.children[0].reset(),e.style.display="flex"})),(()=>{const e=document.querySelector("main"),t=formDiv.querySelector("button[type='submit']"),o=formDiv.querySelector("button[type='cancel']");t.addEventListener("click",(e=>{e.preventDefault();let t={name:formDiv.querySelector("input[type='text']").value,description:formDiv.querySelector("textarea").value,date:formDiv.querySelector("input[type='date']").value,time:formDiv.querySelector("input[type='time']").value,category:formDiv.querySelector("select").value};l.push(t);let o=JSON.stringify(l);localStorage.setItem("tasks",o),formDiv.style.display="none",window.location.reload()}));let l=JSON.parse(localStorage.getItem("tasks"))||[];l.forEach((t=>{e.innerHTML+=`\n    <div id="task">\n      <div>\n        <input type='checkbox'>\n        <h2>${t.name}</h2>\n      </div>\n      <div>\n        <button type='view'>View</button>\n        <button type='edit'>Edit</button>\n        <button type='delete'>Delete</button>\n      </div>\n    </div>\n    `})),(e=>{const t=document.getElementById("formDiv"),o=document.querySelector("main");o.querySelectorAll("input").forEach(((e,t)=>{const o=e.nextElementSibling,l=`task_${t}`;"Yes"===localStorage.getItem(l)?(o.style.textDecoration="line-through",e.checked=!0):(o.style.textDecoration="none",e.checked=!1),e.addEventListener("click",(()=>{"line-through"==o.style.textDecoration?(o.style.textDecoration="none",localStorage.setItem(l,"No")):(o.style.textDecoration="line-through",localStorage.setItem(l,"Yes"))}))})),o.querySelectorAll("button[type='view']").forEach(((o,l)=>{o.addEventListener("click",(()=>{console.log(o,l,e[l].name,e[l].category),t.children[0].reset(),t.style.display="flex";const n=t.querySelector("input[type='text']"),r=t.querySelector("textarea"),i=t.querySelector("input[type='date']"),a=t.querySelector("input[type='time']"),c=t.querySelector("select");n.value=e[l].name,r.value=e[l].description,i.value=e[l].date,a.value=e[l].time,c.value=e[l].category,n.disabled=!0,r.disabled=!0,i.disabled=!0,a.disabled=!0,c.disabled=!0,t.querySelector("button[type='submit']").style.display="none"}))})),o.querySelectorAll("button[type='delete']").forEach(((t,o)=>{t.addEventListener("click",(()=>{console.log(t,o,e[o].name,typeof e[o],typeof e,e),e.splice(o,1);let l=JSON.stringify(e);localStorage.setItem("tasks",l),window.location.reload()}))}))})(l),o.addEventListener("click",(e=>{e.preventDefault(),formDiv.style.display="none"}))})()})();