import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as r}from"./assets/vendor-BbbuE1sJ.js";const s=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let a,i=0;e.disabled=!0;const S=t=>{if(t-new Date<=0){e.disabled=!0,r.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"}),r.error({message:"Please choose a date in the future"});return}a=t,e.disabled=!1},M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){S(t[0])}};m(s,M);const o=t=>t.padStart(2,"0"),g=t=>{f.innerHTML=t.days,h.innerHTML=o(String(t.hours)),y.innerHTML=o(String(t.minutes)),p.innerHTML=o(String(t.seconds))},b=()=>{let t=a-new Date,n=I(t);g(n),t==0&&clearInterval(i)},D=()=>{e.disabled=!0,s.disabled=!0,i=setInterval(b,1e3)};e.addEventListener("click",D);function I(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:u,seconds:l}}
//# sourceMappingURL=1-timer.js.map
