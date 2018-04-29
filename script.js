function clicked(){
    var mail = document.getElementById('email');
    var pass = document.getElementById('password');

    var exMail = 'test';
    var exPass = '123';

    if(mail.value === exMail){
        if(pass.value === exPass){
            window.alert('You are login as ' + mail.value);
        }
        else{
            window.alert('Incorrect username or password')
        }
    }
    else{
        window.alert('Incorrect username or password')
    }
}