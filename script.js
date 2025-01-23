const numbers=document.querySelectorAll("div.numbers >div");
const operators=document.querySelectorAll("div.operators >div");
const result=document.getElementById("result");
const input=document.getElementById("input");


numbers.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(input.innerHTML==="0"){
       input.innerHTML= e.currentTarget.innerHTML;  
        }
        else {
            input.insertAdjacentHTML("beforeend",e.currentTarget.innerHTML)
        }
    })
})