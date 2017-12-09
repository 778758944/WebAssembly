long fibonacci(int n){
	long long a;
	if(n > 2){
		return fibonacci(n-1) + fibonacci(n-2);
	} else {
		return 1;
	}
}