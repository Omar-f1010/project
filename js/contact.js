function verify() {
    if (isEmpty(document.forms['form']['name'].value)) {
        alert("Lütfen Adı alanı duldurun");
        return false;
    }

    if (isEmpty(document.forms['form']['subject'].value)) {
        alert("Lütfen iletişim nedeni alanı duldurun");
        return false;
    }

    if (isEmpty(document.forms['form']['message'].value)) {
        alert("Lütfen Detaylay alanı duldurun");
        return false;
    }

    if (isEmpty(document.forms['form']['email'].value)) {
        alert("Lütfen E-posta alanı duldurun");
        return false;
    }

    if (!isValidEmail(document.forms['form']['email'].value)) {
        alert("Lütfen geçerli bir E-posta girin");
        return false;
    }
    return true;
}


function isValidEmail(email) {

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }
    return (false)

}

function isEmpty(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function deleteFrom() {
    document.forms['form']['name'].value = "";
    document.forms['form']['email'].value = "";
    document.forms['form']['subject'].value = "";
    document.forms['form']['message'].value = "";
}