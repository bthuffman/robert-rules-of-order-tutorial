function CustomAlert(){
	//render method
	this.render = function(){
		//window width and height variables to help position it in the direct center of screen.
		let winW = window.innerWidth;
		let winH = window.innerHeight;

		let dialogoverlay = document.getElementById('dialogoverlay');
		let dialogbox = document.getElementById('dialogbox');
	//	make the overlay seen.
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * 0.5) + "px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
		document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
	}
	//ok method
	this.ok = function(){

	}
}

let Alert = new CustomAlert();