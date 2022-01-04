var notecardTextEl = document.getElementById("notecardText");
var notecardTopEl = document.getElementById("notecardTop");
var notecardMainEl = document.getElementById("notecardMain");
var emojiQuery = document.querySelectorAll(".emoji");
var moreEl = document.getElementById("more");
var optionsEl = document.getElementById("options");
var lowEl = document.getElementById("low");
var counterEl = document.getElementById("counter");

setTimeout(function() {
	optionsEl.style.opacity = "256";
}, 500);

counterEl.innerHTML = facts.length;

var lastFact = undefined;

var randomColor = undefined;

var colorList = [
	"lightskyblue",
	"aquamarine",
	"lightgreen",
	"lightseagreen",
	"lightpink",
	"plum",
	"thistle",
	"teal",
	"springgreen",
	"slateblue",
	"salmon",
	"fuchsia",
	"paleturquoise"
];

function setColor() {
	var randomColor = Math.floor(Math.random() * colorList.length);

	document.body.style.backgroundColor = colorList[randomColor];
	notecardTopEl.style.backgroundColor = colorList[randomColor];

	var style = document.createElement("style");

	style.appendChild(document.createTextNode(".emoji:hover { background-color:" + colorList[randomColor] +"; }"));

	document.getElementsByTagName("head")[0].appendChild(style);
}

function rollFact() {
	notecardMainEl.style.transition = "0.4s opacity";
	notecardMainEl.style.opacity = "0";

	setTimeout(function() {
		notecardMainEl.style.transform = "translate(-35%, -35%)";
	}, 400);

	setTimeout(function() {
		notecardMainEl.style.transition = "0.4s all";
		notecardMainEl.style.opacity = "256";
		notecardMainEl.style.transform = "translate(-50%, -50%)";

		var randomFact = Math.floor(Math.random() * facts.length);

		while (randomFact == lastFact) {
			randomFact = Math.floor(Math.random() * facts.length);
		}

		lastFact = randomFact;

		notecardTextEl.innerHTML = facts[randomFact];
		
		var superRareFact = Math.floor(Math.random() * 50000);
		if(superRareFact == 1) {
			notecardTextEl.innerHTML = "Did you know that the fact you are currently reading has a 1 in 50,000 chance of appearing?!?!";
		}
	
		for(var i = 0; i < emojiQuery.length; i++) {
			emojiQuery[i].disabled = false;
			emojiQuery[i].style.pointerEvents = "auto";
			emojiQuery[i].className = "emoji";
		}

		setColor();
	}, 500);
}

function reactionClicked(target) {
	for(var i = 0; i < emojiQuery.length; i++) {
		emojiQuery[i].disabled = true;
		emojiQuery[i].style.pointerEvents = "none";
	}
	target.disabled = false;

	target.className = "emojiClicked";

	setTimeout(rollFact, 1000);
}

function nextClicked(target) {
	target.className = "clicked";
	target.disabled = true;

	rollFact();
}


var titleToggled = false;
function titleClicked() {
	titleToggled = !titleToggled;

	if (titleToggled) {
		moreEl.style.display = "revert";
		moreEl.style.opacity = "256";
		optionsEl.classList = "open";
		
	} else {
		moreEl.style.display = "none";
		moreEl.style.opacity = "0";
		optionsEl.classList = "";
	}
}

rollFact();