var x = +prompt('x');
var n = +prompt('n');

function pow (a, b) {
	var result = 1;
	for (var i = 0; i < b; i++) {
    result *= a;
    }
  	return result;
}

var resultPow = pow(x,n);

console.log(resultPow);