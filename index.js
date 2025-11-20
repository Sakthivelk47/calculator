let input = document.querySelector("input")
function addvalue(elementval){
    input.value += elementval
}
function clearval(){
    input.value=""
}

function deleteval(){
    input.value = input.value.slice(0,-1)
}

function elementval(){
    input.value= eval(input.value)
}