//Magic Redirect for MYLE & LEB2
if(window.location.hostname === "www.myle.kmutt.ac.th")
{
	window.location.replace("https://libmod3.lib.kmutt.ac.th/cas/login?service=http%3A%2F%2Fapp.myle.kmutt.ac.th%2Fhome%2F"); 
}

else if((window.location.hostname === "leb2.kmutt.ac.th")||(window.location.hostname === "www.leb2.kmutt.ac.th"))
{
	window.location.replace("https://sso.c4ed.kmutt.ac.th:50104/login?app_id=1&redirect_uri=https%3A%2F%2Fapp.leb2.kmutt.ac.th%2Flogin");
}
