typedef int (*fptr_type)(void);
extern void pass_fptr_to_js(fptr_type fptr);

static int callback_0(void){
	return 26;
}

static int callback_1(void){
	return 42;
}

void run_test(){
	pass_fptr_to_js(callback_0);
	pass_fptr_to_js(callback_1);
}