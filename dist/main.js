(()=>{"use strict";document.querySelector("nav button").addEventListener("click",(()=>{const e=document.getElementById("formDiv");e.children[0].reset(),e.style.display="flex";const t=e.querySelector("input[type='text']"),l=e.querySelector("textarea"),r=e.querySelector("input[type='date']"),n=e.querySelector("input[type='time']"),o=e.querySelector("select");t.disabled=!1,l.disabled=!1,r.disabled=!1,n.disabled=!1,o.disabled=!1,e.querySelector("button[type='submit']").style.display="inline-block"})),(()=>{const e=document.querySelector("main"),t=formDiv.querySelector("button[type='submit']"),l=formDiv.querySelector("button[type='cancel']");t.addEventListener("click",(t=>{t.preventDefault();let l={name:formDiv.querySelector("input[type='text']").value,description:formDiv.querySelector("textarea").value,date:formDiv.querySelector("input[type='date']").value,time:formDiv.querySelector("input[type='time']").value,category:formDiv.querySelector("select").value},n=e.querySelectorAll("h2")||[],o=!0;if(0!=n.length&&n.forEach((e=>{e.textContent==l.name&&(o=!1)})),1==o){r.push(l);let e=JSON.stringify(r);localStorage.setItem("tasks",e),formDiv.style.display="none",window.location.reload()}else alert("Task already present")}));let r=JSON.parse(localStorage.getItem("tasks"))||[];r.forEach((t=>{e.innerHTML+=`\n    <div id="task">\n      <div>\n        <input type='checkbox'>\n        <h2>${t.name}</h2>\n      </div>\n      <div>\n        <button type='view'>View</button>\n        <button type='edit'>Edit</button>\n        <button type='delete'>Delete</button>\n      </div>\n    </div>\n    `})),(e=>{const t=document.getElementById("formDiv"),l=document.querySelector("main");l.querySelectorAll("input").forEach(((t,l)=>{const r=t.nextElementSibling,n=e[l].name;"Yes"===localStorage.getItem(n)?(r.style.textDecoration="line-through",t.checked=!0):(r.style.textDecoration="none",t.checked=!1),t.addEventListener("click",(()=>{"line-through"==r.style.textDecoration?(r.style.textDecoration="none",localStorage.setItem(n,"No")):(r.style.textDecoration="line-through",localStorage.setItem(n,"Yes"))}))})),l.querySelectorAll("button[type='view']").forEach(((l,r)=>{l.addEventListener("click",(()=>{t.children[0].reset(),t.style.display="flex";const l=t.querySelector("input[type='text']"),n=t.querySelector("textarea"),o=t.querySelector("input[type='date']"),a=t.querySelector("input[type='time']"),i=t.querySelector("select");l.value=e[r].name,n.value=e[r].description,o.value=e[r].date,a.value=e[r].time,i.value=e[r].category,l.disabled=!0,n.disabled=!0,o.disabled=!0,a.disabled=!0,i.disabled=!0,t.querySelector("button[type='submit']").style.display="none"}))})),l.querySelectorAll("button[type='edit']").forEach(((l,r)=>{l.addEventListener("click",(()=>{t.children[0].reset(),t.style.display="flex";const l=t.querySelector("input[type='text']"),n=t.querySelector("textarea"),o=t.querySelector("input[type='date']"),a=t.querySelector("input[type='time']"),i=t.querySelector("select");l.value=e[r].name,n.value=e[r].description,o.value=e[r].date,a.value=e[r].time,i.value=e[r].category,l.disabled=!1,n.disabled=!1,o.disabled=!1,a.disabled=!1,i.disabled=!1,t.querySelector("button[type='submit']").style.display="none";const c=t.querySelector("button[type='update']");c.style.display="inline-block",c.addEventListener("click",(r=>{r.preventDefault();let n=e.findIndex((e=>e.name==l.value));e.splice(n,1);let o={name:t.querySelector("input[type='text']").value,description:t.querySelector("textarea").value,date:t.querySelector("input[type='date']").value,time:t.querySelector("input[type='time']").value,category:t.querySelector("select").value};e.push(o);let a=JSON.stringify(e);localStorage.setItem("tasks",a),t.style.display="none",window.location.reload()}))}))})),l.querySelectorAll("button[type='delete']").forEach(((t,l)=>{t.addEventListener("click",(()=>{e.splice(l,1);let t=JSON.stringify(e);localStorage.setItem("tasks",t),window.location.reload()}))}))})(r),(e=>{const t=document.querySelector("nav select"),l=document.querySelector("main");t.addEventListener("change",(()=>{localStorage.setItem("currentCategory",`${t.value}`);let r=t.value,n=[];e.forEach((e=>{e.category==r&&n.push(e.name)}));for(let t=0;t<e.length;t++)if(0==n.length)l.children[t].style.display="flex";else{l.children[t].style.display="none";let e=l.children[t].querySelector("h2").textContent;n.forEach((r=>{r==e&&(l.children[t].style.display="flex")}))}})),t.value=localStorage.getItem("currentCategory");let r=localStorage.getItem("currentCategory"),n=[];e.forEach((e=>{e.category==r&&n.push(e.name)}));for(let t=0;t<e.length;t++)if(0==n.length)l.children[t].style.display="flex";else{l.children[t].style.display="none";let e=l.children[t].querySelector("h2").textContent;n.forEach((r=>{r==e&&(l.children[t].style.display="flex")}))}})(r),l.addEventListener("click",(e=>{e.preventDefault(),formDiv.style.display="none"}))})()})();