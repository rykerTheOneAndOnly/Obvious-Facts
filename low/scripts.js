var factEl = document.getElementById("fact");
var controls = document.querySelectorAll("#controls button");

var lastFact = undefined;

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

	factEl.style.backgroundColor = colorList[randomColor];
}

function rollFact() {
    var randomFact = Math.floor(Math.random() * facts.length);

    while (randomFact == lastFact) {
        randomFact = Math.floor(Math.random() * facts.length);
    }

    lastFact = randomFact;

    factEl.innerHTML = facts[randomFact];
    
    var superRareFact = Math.floor(Math.random() * 50000);
    if(superRareFact == 1) {
        notecardTextEl.innerHTML = "Did you know that the fact you are currently reading has a 1 in 50,000 chance of appearing?!?!";
    }

    setColor();
}

rollFact();

for(var i = 0; i < controls.length; i++) {
    if (controls[i].id != "next") {
        controls[i].addEventListener("click", function() {
            for(var i = 0; i < controls.length; i++) {
                controls[i].disabled = true;
            }
            setTimeout(function() {
                for(var i = 0; i < controls.length; i++) {
                    controls[i].disabled = false;
                    rollFact();
                }
            }, 900);
        });
    }
    if(controls[i].id == "next") {
        controls[i].addEventListener("click", function() {
            for(var i = 0; i < controls.length; i++) {
                controls[i].disabled = true;
            }
            setTimeout(function() {
                for(var i = 0; i < controls.length; i++) {
                    controls[i].disabled = false;
                    rollFact();
                }
            }, 250);
        });
    }
}