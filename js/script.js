var AddButton = document.getElementById("AddButton");
var MinButton = document.getElementById("MinButton");
var Counter = 0;


AddButton.addEventListener("click", function() {
    Counter += 1;
    if (Counter >= 999) {
        alert("This is the max, please reset the button.");
        AddButton.innerHTML = 0;
        Counter = 0;
    } else {
        AddButton.innerHTML = Counter;
    }
});

MinButton.addEventListener("click", function() {
    Counter -= 1;
    if (Counter < 0) {
        Counter = 0;
    } else {
        AddButton.innerHTML = Counter;
    }
});
