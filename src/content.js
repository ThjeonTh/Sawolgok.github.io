
var mpFileName="";
var midFileName="";
var fileUrl="docs.google.com/uc?export=download&id=%FileName%&confirm=t";
var fileType="";
function Load(){
    console.log(window.location.href);
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
	mpFileName=urlParams.get('FileName');
	midFileName=urlParams.get('midFileName');
	//console.log(mpFileName);
	//console.log(midFileName);
    	//console.log(fileUrl);
	var _url="https://drive.google.com/uc?id="+mpFileName;
	//document.getElementById("imageData").src=_url;
	if(midFileName=="%midFileName%"){
		console.log("m_midi hide");
		document.getElementById("m_midi").style.display = "none";
	}	
	window.open("https://drive.google.com/file/d/"+mpFileName+"/view");
}

function OnImageDownload(){
	var t_u="https://"+fileUrl.replace("%FileName%",mpFileName);
	location.href=t_u;
}
