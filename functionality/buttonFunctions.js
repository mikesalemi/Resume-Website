function showContact() {
    var div = document.getElementById("section_2")
    div.style.display = "flex";
    div.style.transition = "0.5s ease-in-out"
    div.style.transform = "scale(1)";
}

function closeContact() {
    var div = document.getElementById("section_2");
    div.style.transform = "scale(0)";
    window.scrollTo(0,0);
    setTimeout(function () {
        div.style.display = "none"
    }, 500);
    document.getElementById("contactForm").reset();
}

function showScrollForMore() {
    var text = document.getElementById("scrollForMore");
    text.style.opacity = "1";
}
function hideScrollForMore() {
    var text = document.getElementById("scrollForMore");
    text.style.opacity = "0";
}

function radioOptions() {
    var rateDiv = document.getElementById("rateContainer");
    var rateInput = document.getElementById("hourlyRate");
    if (document.getElementById("hiring").checked) {
        rateDiv.style.visibility = "visible";
        rateInput.required = true;
    } else if (document.getElementById("question").checked){
        rateDiv.style.visibility = "hidden";
        rateInput.required = false;
    } else if (document.getElementById("comment").checked) {
        rateDiv.style.visibility = "hidden";
        rateInput.required = false;
    }
}