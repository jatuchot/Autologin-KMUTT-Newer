/* NewAcis autologin
*
*
*	Developed By : BOSS,CHANG CPE30
*
*   This script can use for auto login @ newacis,stdmobile 
*
*
*/
var kusername = "STUDENTID";
var kpassword = "XXXXXXXXX";



if(window.name !== 'mainPopupWindow') {
    window.name = 'mainPopupWindow'
    window.location.replace("https://sinfo.kmutt.ac.th/NewAcis/login.jsf");   
}


if(window.location.href.includes("/NewAcis/login.jsf")){
	document.getElementById('j_username').value = kusername;
	document.getElementById('j_password').value = kpassword;
	document.getElementById('logsubmit').click();	
}	
else if(window.location.href.includes("stdmobile")){
	document.getElementById('loginForm:j_username').value=kusername;
	document.getElementById('loginForm:j_password').value=kpassword;
	document.getElementById('loginForm:signInButton').click();	
}

//Magic login to MYLE & LEB2
else if(window.location.href.includes("/")){
	document.getElementById('username').value=kusername;
	document.getElementById('password').value=kpassword;
	document.forms[0].submit();
}	

