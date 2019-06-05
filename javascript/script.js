//return random number between 0 and 1 (non-inclusive)
function getRandom() {
	return Math.random();
}
//Cool alternative that seems to have issues
// let min = 0, max =1;
// function getRandom() {
// 	return Math.random() * (max - min) + min;
// }


function callToOrder(){
	window.alert("This session of Parliament is now in order! ")
	show("roll-call");
	hide("call-to-order");
	hide("introduction");
}

function rollCall() {
	setTimeout(function(){
		window.alert("The roll call will now begin.");
	}, 1000);
	hide("roll-call")
	show("quorum-count")
}



/*Count total number of Senators in Country*/
var buttonTotalCount = document.getElementById("senatorCount"),
	totalCount = 0;
var quorum = document.getElementById("quorum");
var buttonIncreaseCount = document.getElementById("increaseCount");
buttonIncreaseCount.onclick = function increaseSenators() {
	totalCount += 1;
	buttonTotalCount.innerHTML = totalCount + ".";
	quorum.innerHTML = "Required number of Senators for a Quorum: " + Math.round(totalCount/2)  + ".";
};
var buttonDecreaseCount = document.getElementById("decreaseCount");
buttonDecreaseCount.onclick = function increaseSenators() {
	if(totalCount === 0) {
		buttonTotalCount.innerHTML = totalCount + ".";
	} else {
		totalCount -= 1;
		buttonTotalCount.innerHTML = totalCount + ".";
		quorum.innerHTML = "Required number of Senators for a Quorum: " + Math.round(totalCount / 2) + ".";
	}
};

/*Mark a Senator as Present*/
function functionConfirm(msg, myYes, myNo) {
	var confirmBox = $("#confirm");
	confirmBox.find(".message").text(msg);
	confirmBox.find(".yes,.no").unbind().click(function() {
		confirmBox.hide();
	});
	confirmBox.find(".yes").click(myYes);
	confirmBox.find(".no").click(myNo);
	confirmBox.show();
}

/* Count whether a quorum has been established*/
let quorumCount = 0;
function quorumCounting () {
	quorumCount += 1;
	window.alert("The total members of parliament present is " + quorumCount  + ".");
	runningQuorum.innerHTML = "Senators Present: " + quorumCount  + ".";
}

function establishQuorum () {
if (totalCount === 0) {
	window.alert("No Senators in the Country, you're a dictator!")
} else {
	if(quorumCount < Math.round(totalCount / 2)) {
		window.alert("A quorum is not present. The sargent at arms will compel absent Senators to attend the parliament.");
		show("quorum-established");
		show("second-required");
		hide("quorum-count");
	} else {
		window.alert("A quorum is present. The consent agenda shall now be passed if there are no objections...");
		show("quorum-established");
		show("second-required");
		hide("quorum-count");
	}
}
}
/*
Sections after Quorum Established
***********************************************************************************************************************/
function seconded() {
	let proposalSeconded = getRandom();
	console.log(proposalSeconded);
	if (proposalSeconded >= 0.4) {
		window.alert("The motion is seconded.");
		show("proposal-seconded");
		hide("second-required");
	} else {
		window.alert("Having no second the motion has failed.");
		reset();
	}
}

function show(elementId) {
	//this portion insure to hide all elements
	document.getElementById("id1").style.display="none";
	document.getElementById("id2").style.display="none";
	document.getElementById("id3").style.display="none";
	document.getElementById("id4").style.display="none";
	document.getElementById("id5").style.display="none";
	//this portion turns on the proper element.
	document.getElementById(elementId).style.display="block";
}

function hide(elementId) {
	document.getElementById(elementId).style.display="none";
}

/*
* Amendment proposed */
function concerns() {
	let concernParameter = Math.random();
	show("amendmentFocus");
	// concernParameter = 0.05;
	console.log(concernParameter);
	if (concernParameter < 0.05) {
		let concernAmendment = "Science";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (0.05 <= concernParameter && concernParameter < 0.1) {
		let concernAmendment = "Culture";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (0.1 <=concernParameter && concernParameter < .15) {
		let concernAmendment = "Commerce";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.15 <=concernParameter && concernParameter < .2) {
		let concernAmendment = "Food";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.2 <=concernParameter && concernParameter < .25) {
		let concernAmendment = "Production";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.25 <=concernParameter && concernParameter < .3) {
		let concernAmendment = "Faith";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.3 <=concernParameter && concernParameter < .35) {
		let concernAmendment = "Military";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.35 <=concernParameter && concernParameter < .4) {
		let concernAmendment = "Housing";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.4 <=concernParameter && concernParameter < .45) {
		let concernAmendment = "Amenities";
		amendmentFocus.innerHTML = "Amendment passes, the amendment focused on " + concernAmendment + ".";
	} else if (.45 <=concernParameter && concernParameter < .5){
		let concernAmendment = "Amendment passes and it's proposals effectively kill the main motion.";
		amendmentFocus.innerHTML = concernAmendment;
		reset();
	} else {
		window.alert("The proposed Amendment has failed.")
	}
}

function amendment(){
	window.alert("There is a motion to add an amendment to the current motion, is there a second?");
	let amendmentConsiderationVariable = getRandom();
	console.log(amendmentConsiderationVariable);
	if (amendmentConsiderationVariable >= 0.5) {
		concerns();
		window.alert("The amendment has been seconded, the floor will be open for debate before voting on the amendment.");
		show("proposal-seconded");
		hide("second-required");
	} else {
		window.alert("Having no second, the amendment shall not be brought up for debate.");
	}
}

function debate() {
	window.alert("The floor is open for debate. Members are welcome to propose amendments to the main motion.")
	amendment();
}

function moveToPass() {
	window.alert("If there are no objections, the chair moves to pass the main motion.");
	let moveToPass = Math.random();
	show("amendmentFocus");
	// moveToPass = 0.09;
	console.log(moveToPass);
	if (moveToPass < 0.05) {
		amendment();
	} else if (0.05 <= moveToPass && moveToPass < 0.1) {
		table();
	} else if (0.1 <=moveToPass && moveToPass < 0.15) {
		debate();
	} else if (0.15 <=moveToPass && moveToPass < 0.2) {
		show('id1');
	} else if (0.2 <=moveToPass && moveToPass < 0.25) {
		show('id2');
	} else if (0.25 <=moveToPass && moveToPass < 0.3) {
		show('id3');
	} else if (0.35 <=moveToPass && moveToPass < 0.4) {
		show('id4');
	} else {
		show('id5');
		reset();
	}
}

function table() {
	window.alert("There is a motion to table the current motion. Do we have second to table the motion?");
	let tableConsiderationVariable = getRandom();
	// console.log(proposalSeconded);
	if (tableConsiderationVariable >= 0.5) {
		window.alert("The motion to table has passed. New business is on the agenda.");
		reset();
	} else {
		window.alert("Motion to table failed.");
	}
}

function reset(){
	let resetButton = document.getElementById("motion-input");
	if(resetButton){
		resetButton.value= "";
	}
}