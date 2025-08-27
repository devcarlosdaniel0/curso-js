let time;

function startCounting() {
    time = setInterval(() => {
        let i = document.getElementById("text").innerHTML;
        let sum = parseInt(i) - 1;

        if (sum <= 0) {
            document.getElementById("text").innerHTML = "0";
            stopCounting();
        } else {
            document.getElementById("text").innerHTML = sum;
        }    

    }, 1000);
}

function stopCounting() {
    clearInterval(time);
}