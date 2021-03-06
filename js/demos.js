/*
Sticky Notes
*/

function saveNote(){
	var local = window.localStorage ;
	var note_heading = document.getElementById('note_heading').innerHTML;
	var note_content = document.getElementById('note_content').innerHTML;
	local.setItem("note_heading", note_heading);
	local.setItem("note_content", note_content);
	//alert(local["note_heading"] + local["note_content"]);
}

function loadNote(){
	var local = window.localStorage ;
	//alert(local["note_heading"] + local["note_content"]);
	document.getElementById('note_heading').innerHTML = local["note_heading"];
	document.getElementById('note_content').innerHTML = local["note_content"];
}

function clearNote(){
	var local = window.localStorage ;
	local.setItem("note_heading","");
	local.setItem("note_content","");
	document.getElementById('note_heading').innerHTML = local["note_heading"];
	document.getElementById('note_content').innerHTML = local["note_content"];
}
/* End Sticky Notes */

/*
Simple File Upload
*/

function fileToBackground(files){
	var backImg = files[0];

	var reader = new FileReader();

	reader.onload = handleFileLoad ;

	reader.readAsDataURL(backImg);

}


function handleFileLoad(evt){
	var file_holder = document.getElementById('input_file') ;
	file_holder.parentNode.style.backgroundImage = "url("+ evt.target.result + ")";
	/*
	var popUp = document.getElementById('light') ;
	popUp.style.backgroundImage = "url("+ evt.target.result + ")";
	*/
}


/* End Simple File Upload */


/*
MacOS X Dock
*/

function setBackground(){
	var popUp = document.getElementById('light') ;
	popUp.style.backgroundImage = "url("+ "img/Dock/MacOSXBack.jpg" +")";
}

/* End Dock */


/*

All Drag n Drop scripts in index header

*/
