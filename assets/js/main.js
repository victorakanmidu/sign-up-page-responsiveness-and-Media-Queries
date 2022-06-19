inputBox = document.getElementsByClassName("the-box");
errorMsg = document.getElementsByClassName("errorMsg");

console.log(inputBox);

function addErrorState(){ 
    for(i=0;i<=inputBox.length;i++){
        if(inputBox[i].value == ""){
            inputBox[i].classList.add('error-state');
            errorMsg[i].classList.add('error-msg');
        } 
    }
};