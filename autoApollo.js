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
var i = 0;


if(window.location.href.includes("newassess-std/default.aspx")){
	document.getElementById('txtUsername').value = kusername;
	document.getElementById('txtPassword').value = kpassword;
	document.getElementById('btnLogin').click();	
}

if(window.location.href.includes("newassess-std/CheckPrevious.aspx")){
	document.getElementById('btnCheckPrevious').click();
}

if(window.location.href.includes("newassess-std/CheckStudy.aspx")){
	var x = document.getElementById("tblDetailCaption").rows.length - 1;
	console.log(x);
	for(i=0;i<x;i++){
		document.getElementById('ChkBoxStudy'+[i]).checked =true;
	}
	document.getElementById('btnConfirm').click();
}

if(window.location.href.includes("newassess-std/STDAssess.aspx")){
	var i = 0;
	var x = document.getElementsByTagName("A").length;
	console.log(x);
	var y = document.getElementsByTagName("A");
	for(var j=0;j<y.length;j++){
		var url = y[j].href;
		console.log(url.split('.').pop());
		window.location.replace("https://apollo.kmutt.ac.th/newassess-std/AssessSTD."+url.split('.').pop())
	}
	if(x == 0){
		alert("DONE");
	}
}

if(window.location.href.includes("newassess-std/AssessSTD.aspx")){
	var y = document.getElementById("tblDetailCaption").rows.length;
	var a = 0;
	var z = 0;
	while(1){
		a = document.getElementById("RBL"+[z]);
		if(a == null)
		{
			break;
		}
		z++;
	}
	for(i=0;i<z;i++){
		if(i % 3){
			document.getElementById('RBL'+[i]+'_1').checked = true;
		}
		else{
			document.getElementById('RBL'+[i]+'_2').checked = true;
		}
	}
	document.getElementById('COMMENT').value = "-";
	document.getElementById('SAVE').click();
}
