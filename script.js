const numbers=document.querySelectorAll("div.numbers >div");
const operators=document.querySelectorAll("div.operators >div");
const result=document.getElementById("result");
const input=document.getElementById("input");
let first_nmb=0;
let second_nmb=0;
let char ="";


numbers.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(input.innerHTML==="0" || first_nmb===0){
       input.innerHTML= e.currentTarget.innerHTML;  
       first_nmb=parseInt(e.currentTarget.innerHTML);   
  
        }
        else {
            input.insertAdjacentHTML("beforeend",e.currentTarget.innerHTML);
            second_nmb=parseInt(e.currentTarget.innerHTML);
            
        }
    });
});

operators.forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
      char=e.currentTarget.innerHTML;
      input.insertAdjacentHTML("beforeend",e.currentTarget.innerHTML)
        
});
});

result.addEventListener('click',(e)=>{

    calcule();
 
});


function  calcule() {
    console.log(char);
    
    switch (char) {
        case "+":
        
            input.innerHTML=parseInt(first_nmb+second_nmb);
            first_nmb=parseInt(first_nmb+second_nmb);
            break;

            case "-":
            break;
            case "*":
            
            break;
            case "/":
            
            break;
       
        default:
            break;
       }
    }
