let button = document.getElementById("submit-rating");
button.addEventListener("click", () => submitRating());

function submitRating(){
    let rating = document.querySelector('input[name="rating"]:checked').value;
    document.querySelector(".rate-support-container").style.display = "none";
    document.querySelector(".thank-you-container").style.display = "flex";

    let message = document.querySelector("#number");
    message.innerHTML = rating;
}