var counters = document.querySelectorAll(".count");

var randomDelay = Math.floor(Math.random() * 1200) + 500;

for (var i = 0; i < counters.length; i++) {
    counters[i].counterValue = Math.floor(Math.random() * 10000) + 5000;
}

counters[5].counterValue += Math.floor(Math.random() * 7500) + 5000; // The rocket

function countersUpdate() {
    for (var i = 0; i < counters.length; i++) {
        if (Math.floor(Math.random() * 4) == 0) {
            counters[i].counterValue += Math.floor(Math.random() * 15) + 4;
        }
        counters[i].innerHTML = counters[i].counterValue;
    }
    randomDelay = Math.floor(Math.random() * 1200) + 500;
}

setInterval(countersUpdate, randomDelay);