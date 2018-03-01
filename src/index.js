module.exports = function getZerosCount(number) {
	// your implementation
	let res = 0;
	while (number > 2) {
		number /= 5;
		res += Math.floor(number);
	}
	//console.log(res);
	return res;
};
//getZerosCount(15949280)//3987315