document.getElementById('phone-plus').addEventListener('click', function(){
    const newValue = inputField(true, 'phone-input');
    const inputPhoneMinusTotal = newValue * 1219;
    totalPrice(inputPhoneMinusTotal, 'phone-balance');
    const subtotalPhone = totalUpdate('phone-balance');
    const subtotalCase = totalUpdate('caseBalance');
    const subtotalBalance = subtotalPhone + subtotalCase;
    mainBalanceUpdate('subtotal', subtotalBalance);
    const subtotalBalanceNet = (subtotalBalance * 0.1).toFixed(2);
    mainBalanceUpdate('taxes', subtotalBalanceNet);
    const totalBalance = subtotalBalanceNet + subtotalBalance;
    mainBalanceUpdate('total', totalBalance);
});
document.getElementById('case-plus').addEventListener('click', function(){
    const newValue = inputField(true, 'case-input');
    const inputPhoneMinusTotal = newValue * 59;
    totalPrice(inputPhoneMinusTotal, 'caseBalance');
    const subtotalPhone = totalUpdate('phone-balance');
    const subtotalCase = totalUpdate('caseBalance');
    const subtotalBalance = subtotalPhone + subtotalCase;
    mainBalanceUpdate('subtotal', subtotalBalance);
    const subtotalBalanceNet = (subtotalBalance * 0.1).toFixed(2);
    mainBalanceUpdate('taxes', subtotalBalanceNet);
    const totalBalance = subtotalBalanceNet + subtotalBalance;
    mainBalanceUpdate('total', totalBalance);
});