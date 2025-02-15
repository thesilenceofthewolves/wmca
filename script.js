//Task 1
function setDarkMode() {
    const heading = document.getElementById('heading');
    heading.style.backgroundColor = 'black';
    heading.style.color = 'white';
    heading.style.fontWeight = 'bold';
    heading.style.transition = 'all 2s';
}

function setLightMode() {
    const heading = document.getElementById('heading');
    heading.style.backgroundColor = '';
    heading.style.color = '';
    heading.style.fontWeight = '';
    heading.style.transition = 'all 2s';
}

// task 2
function showMessage(event) {
    event.preventDefault(); // Prevent page refresh

    const inputField = document.getElementById('login');
    const inputValue = inputField.value;
    console.log('User Input:', inputValue); // Log input to console

    const submitButton = document.getElementById('submit-btn');
    submitButton.style.backgroundColor = 'green'; // Change button color

    // Save input value to local storage
    localStorage.setItem('userInput', inputValue);
}


//task 3
function showMore(){
  const answer = document.getElementById('answer')
  answer.innerHTML = ` <p>"JavaScript is a scripting or programming language that allows you to implement complex features on web pages" </p>
`
};

//Task 4
function showAnswer(event) {
    event.preventDefault(); // Prevent page refresh

    const inputField = document.getElementById("pounds-amount");
    const inputValue = inputField.value;
    console.log('User Input:', inputValue); // Log input to console

    // Correct conversion rate
    let poundToEuro = inputValue * 1.15;

    let convert = document.getElementById("result");
    convert.innerHTML = `<p> £${inputValue} is €${poundToEuro.toFixed(2)}</p>`
    console.log(convert.innerText);
}

//task 4
function move() {
  const element = document.getElementById('blue-box');
    // Set individual style properties
    element.style.left = "400px";
    element.style.top = "100px";
   // element.style.position = 'relative';
  console.log('left postion:', element.style.left, 'top postion:', element.style.top);
}

//task 5
// This function will be called when the "Close" button is clicked
        function clearPageAndShowMessage() {
            // Clear the entire HTML content of the body
            document.body.innerHTML = '';

            // Create a new paragraph element
            var thankYouMessage = document.createElement('p');

            // Set the text content of the paragraph
            thankYouMessage.textContent = 'Thank you Marko';
            
            // log message in console
            console.log('Cleared the entire HTML content of the body and sent the following message:', thankYouMessage.textContent);

            // Append the paragraph to the body
            document.body.appendChild(thankYouMessage);
        } */
