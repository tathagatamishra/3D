// Get the form and submit button elements
const form = document.querySelector("#myForm");
const submitBtn = document.querySelector("#button");

let text 

// Add an event listener to the submit button
submitBtn.addEventListener("click", (event) => {

    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the value of the input field
    const userData = form.elements.gg.value;

    // Log the value to the console
    console.log("userData = ", userData);
    
    text = userData
    
    returnUserData()
})


// to access the data in another function...

export let returnUserData = () => {

    console.log("x = ", text)
    
    return text
}