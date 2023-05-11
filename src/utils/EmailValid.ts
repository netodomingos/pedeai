const handleValidEmail = (val: string) => {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

	if(val.length === 0) {
		return true
	}else if(reg.test(val) === false) {
		return true
	}else {
		return false
	}
};

export {
  handleValidEmail
}