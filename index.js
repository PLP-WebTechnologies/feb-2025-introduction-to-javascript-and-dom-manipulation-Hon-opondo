 // Get the button element by its ID.
        const myButton = document.getElementById("myButton");

        // Define the function to change the button's text.
        function changeButtonText() {
            if (myButton.textContent === "Click Me") {
                myButton.textContent = "You Clicked Me!";
            } else {
                myButton.textContent = "Click Me"; // change it back
            }
        }

        // Add an event listener to the button.
        myButton.addEventListener("click", changeButtonText);