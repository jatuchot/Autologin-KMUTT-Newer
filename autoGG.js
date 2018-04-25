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

//Magic login to MYLE & LEB2
if(window.location.href.includes("/login.php")){
	document.getElementById('txtUsername').value=kusername;
	document.getElementById('password').value=kpassword;
	document.getElementById('btn_login').click();
}	

