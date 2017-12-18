function(){
	"use asm";

	
	function fibonacci(num) {
		num = num | 0;
	    if(num < 0)  return 0;
	    else if(num == 1 || num == 2) return 1;
	    var fn = 1 | 0,
		    fn1 = 1 | 0,
		    i = 4 | 0,
		    fn2 = (fn + fn1) | 0;
	    while(i <= num){
	        fn = fn1;
	        fn1 = fn2;
	        fn2 = fn + fn1;
	        i =  i + 1;
	    }   
	    return fn2 | 0;
	}

	return {
		fibonacci: fibonacci,
	};
}