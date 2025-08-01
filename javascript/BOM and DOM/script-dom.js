// alert("connected") — optional for debugging
console.log("welcome");

// ✅ Get first matching paragraph with class (but you're not using the result here)
document.querySelector(".myParagraph");

// ✅ Get all paragraph elements (again, you're not storing or using it here)
document.querySelectorAll("p");

// ✅ Get element by ID and log it
let hold = document.getElementById("changeTextButton");
console.log(hold);

// ✅ Event listener for button click — logs the button itself
document.getElementById("changeTextButton").addEventListener("click", function () {
    console.log(this); // 'this' refers to the button element
});

// ✅ Highlight all city list items when "highlightFirstCity" button is clicked
document.getElementById("highlightFirstCity").addEventListener("click", () => {
    let cities = document.querySelectorAll("li");
    cities.forEach(element => {
        element.classList.add("highlight");
        console.log(element);
        element.classList.remove("highlight");

    });
});
