function inputField(isIncrease, inputFieldValue){
    const inputFieldSelect = document.getElementById(inputFieldValue);
    const inputFieldValueField = inputFieldSelect.value;
    const inputFieldValueFieldInt = parseInt(inputFieldValueField);
    let inputFieldData;
    if(isIncrease){
        inputFieldData = inputFieldValueFieldInt + 1;
    }
    else{
        inputFieldData = inputFieldValueFieldInt - 1;
    }
    inputFieldSelect.value = inputFieldData;
    return inputFieldData;
};
function totalPrice(previous, newOne){
    const totalName = document.getElementById(newOne);
    totalName.innerText = previous;
}
function totalUpdate(elementId){
    const totalNameUpdate = document.getElementById(elementId);
    const totalNameUpdateString = totalNameUpdate.innerText;
    const totalNameUpdateInt = parseInt(totalNameUpdateString);
    return totalNameUpdateInt;
}
function mainBalanceUpdate(elementIdValue, elementId){
    const mainBalance = document.getElementById(elementIdValue);
    mainBalance.innerText = elementId;
}
function mainBalanceHard(){
    
}
