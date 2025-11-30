function checkAnswer () {
    const correctAnswer = "4";
    const  selectedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;
    if (selectedRadio) {
    userAnswer = selectedRadio.value; // value of the chosen option
    }

    const feedbackE1 = document.getElementById("feedback"); // 3. get feedback element

    // 4. compare answers and update feedback
    if (userAnswer === correctAnswer){
        feedbackE1.textContent = "Correct! Well done .";
        
    } else {
        feedbackE1.textContent  = "That's incorrect. Try again!";

    }
}

 const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);