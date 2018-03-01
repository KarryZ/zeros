//module.exports = 
	function getZerosCount(number) {
	// your implementation
	let l = 1;
	let r = number;
  let res; 
	function ProdTree(l, r) {
		if (l > r) return 1;
		if (l == r) return l;
		if (r - l == 1) return l * r;
		let m = Math.round( (l + r) / 2 );
		
		return  res = ProdTree(l, m) * ProdTree(m + 1, r) ;
		
		 
	}
		
//console.log(res);
	function FactTree(n) {
		if (n < 0) return 0;
		if (n == 0) return 1;
		if (n == 1 || n == 2) return n;
		return ProdTree(2, n);
	};
	FactTree(r);
		
  

 
	
	let factorialNum = res + "";
	//document.write(factorialNum.match(/0+$/ig)[0].length);
	console.log(+factorialNum.match(/0+$/ig)[0].length);
};

getZerosCount()