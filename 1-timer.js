import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as s}from"./assets/vendor-BbbuE1sJ.js";const r=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let a,d=0;e.disabled=!0;const S=t=>{if(t-new Date<=0){e.disabled=!0,s.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"}),s.error({message:"Please choose a date in the future"});return}a=t,e.disabled=!1},M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){S(t[0])}};m(r,M);const o=t=>t.padStart(2,"0"),b=t=>{f.innerHTML=t.days,h.innerHTML=o(String(t.hours)),y.innerHTML=o(String(t.minutes)),p.innerHTML=o(String(t.seconds))},g=()=>{let t=a-new Date,n=I(t);t<=1e3&&(clearInterval(d),r.disabled=!1),b(n)},D=()=>{e.disabled=!0,r.disabled=!0,d=setInterval(g,1e3)};e.addEventListener("click",D);function I(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:l}}
//# sourceMappingURL=1-timer.js.map
