document.getElementById('phone-minus').addEventListener('click', function(){
    const inputPhoneMinus = inputField(false, 'phone-input');
    const inputPhoneMinusTotal = inputPhoneMinus * 1219;
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
document.getElementById('case-minus').addEventListener('click', function(){
    const inputPhoneMinus = inputField(false, 'case-input');
    const inputPhoneMinusTotal = inputPhoneMinus * 59;
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