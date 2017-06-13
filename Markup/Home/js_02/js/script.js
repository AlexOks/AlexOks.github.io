var arr = [];
for (var i = 0; i < 5; i++) {
	//var name = prompt ('введите имя', '');
	//arr.push(name);
	//arr[i] = name;
	arr[i] = prompt ('введите имя', '');
}
var userName = prompt ('введите имя пользователя', ''),
arrLength = arr.length,
flag = false;
for (var i = 0; i < arrLength; i++) {
	if (arr[i]===userName) {
		flag=true;
		break;
	}
	console.log(i);
}
if (flag) {
	alert(userName +', вы успешно вошли');
}else{
	debugger;
	alert('Ошибка, введите корректное имя пользователя');
}
