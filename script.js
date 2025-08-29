
//heart button

let heartCount = 0;
const heartButtons = document.querySelectorAll(".heart-btn");
const heartEl = document.getElementById("heart-number");
heartButtons.forEach(function(btn) {
  btn.addEventListener("click", function () {
    heartCount++;
    heartEl.innerText = heartCount;
  });
});


//copy button

let copyCount = 0;
const copyNumber = document.getElementById("copy-number");
document.querySelectorAll(".copy-btn").forEach(function(btn) {
    btn.addEventListener("click", function(){
        const number = btn.getAttribute("data-number");

        navigator.clipboard.writeText(number).then(function() {
            alert("Number " + number + " copied to clipboard!");
            copyCount++;
            copyNumber.innerText = copyCount;
        });
    });
});



//call history

let coinCount = 100;
const callHistory = document.getElementById("call-history");
const coinNumber = document.getElementById("coin-number");
document.querySelectorAll(".call-btn").forEach(function(btn) {
  btn.addEventListener("click", function(){
    const serviceName = btn.getAttribute("data-name");
    const serviceNumber = btn.getAttribute("data-number");

    if (coinCount < 20) {
      alert("Not enough coins! You need at least 20 to make a call.");
      return;
    }
    coinCount -= 20;
    coinNumber.innerText = coinCount;

    alert("Calling " + serviceName + " at " + serviceNumber + "...");

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "items-center", "p-2", "bg-gray-100", "rounded", "shadow");

    const leftDiv = document.createElement("span");
    leftDiv.innerText = serviceName + " (" + serviceNumber + ")";
    const rightDiv = document.createElement("span");
    rightDiv.classList.add("text-gray-500", "text-sm");
    rightDiv.innerText = timeString;
    li.appendChild(leftDiv);
    li.appendChild(rightDiv);
    callHistory.appendChild(li);

    li.classList.add("bg-grey-200");
        setTimeout(function() {
            li.classList.remove("bg-grey-200");
            li.classList.add("bg-gray-100");  
        }, 800); 

    });
});


//clear call history

const clearHistoryBtn = document.getElementById("clear-history");
clearHistoryBtn.addEventListener("click", function() {
  callHistory.innerHTML = "";
});
