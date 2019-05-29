function getRandom() {
	return Math.random();
}

function callToOrder(){
	window.alert("This session of Parliament is now in order! ")
	show("roll-call");
	hide("call-to-order");
}

function rollCall() {
	setTimeout(function(){
		window.alert("The roll call will now begin");
	}, 3000);
	hide("roll-call")
	show("quorum-count")
}



/*Count total number of Senators in Country*/
var buttonTotalCount = document.getElementById("clickme"),
	totalCount = 0;
var quorum = document.getElementById("quorum");
buttonTotalCount.onclick = function countSenators() {
	totalCount += 1;
	buttonTotalCount.innerHTML = "Total Senators in Country: " + totalCount;
	quorum.innerHTML = "Required number of Senators for a Quorum: " + Math.round(totalCount/2);
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
quorumCount = 0;
function quorumCounting (quorumCountVar) {
	quorumCount++;
	window.alert("The total members of parliament present is " + "quorumCount");
}

// function quorumEstablished (totalCount) {
// if (quorumCount < totalCount/2) {
//  		}


function seconded() {
	let proposalSeconded = getRandom();
	console.log(proposalSeconded);
	if (proposalSeconded >= 0.5) {
		window.alert("passed");
		show("open-to-committee");
		hide("second");
	} else {
		window.alert("failed");
	}
}

function show(elementId) {
	//this portion insure to hide all elements
	document.getElementById("id1").style.display="none";
	document.getElementById("id2").style.display="none";
	document.getElementById("id3").style.display="none";
	document.getElementById(elementId).style.display="block";
}

function hide(elementId) {
	document.getElementById(elementId).style.display="none";
}