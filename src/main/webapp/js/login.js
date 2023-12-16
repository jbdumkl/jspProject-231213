/**
 * 
 */

 function checkLogin() {
	 if(dovment.loginForm.adminid.value == "") {
		 alert("아이디를 입력해 주세요.");
		 return false;
	 }
	 if(dovment.loginForm.adminpw.value == "") {
		 alert(" 비밀번호를 입력해 주세요.");
		 return false;
	 }
 }