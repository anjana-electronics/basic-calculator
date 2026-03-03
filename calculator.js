
const btn=document.querySelectorAll("button");
const inputFieldE1=document.getElementById("result");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
        const btnval=btn[i].textContent;
        if(btnval==="C"){
            clearResult()
        }else if(btnval==="="){
            calculateResult();
        }else{
            appendValue(btnval);
        }

        

        
    });
}



function clearResult(){
    inputFieldE1.value=""
}

function calculateResult() {
 inputFieldE1.value=eval(inputFieldE1.value);

}

function appendValue(btnval){
    inputFieldE1.value+=btnval;
}