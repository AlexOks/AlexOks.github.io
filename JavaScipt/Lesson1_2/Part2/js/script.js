var arr = [];

for (i = 0; i < 5; i++){
    arr[i] = prompt('Введите имя');
}

var userName = prompt('Введите имя пользователя');

for (i = 0; i<arr.length; i++) {
    if ( arr[i] == userName){
        var adminName = userName;       
}
}

if (adminName){
    alert( adminName + ', вы удачно вошли'); 
    } else {
        alert('Error');
    }

