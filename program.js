function allnumeric(inputtxt) {
    var numbers = /^[5-20]+$/;
    if (inputtxt.value.match(numbers)) {
        alert('Your number has accepted....');
        document.form1.text1.focus();
        return true;
    }
    else {
        alert('the valid input is a number between 5 and 20, please refresh your page to start again');
        document.form1.text1.focus();
        return false;
    }
} 
