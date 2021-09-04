let bankBalance = 0;

function bankAction(action, sum) {

    if (action == 'add') {
        bankBalance += sum
    }

    if (action == 'pull') {
        bankBalance -= sum
    }
    return bankBalance
}
//alert('colosur-1')