const testInput = document.querySelector(".input2");
const eyeIcon = document.querySelector(".icon1");

eyeIcon.addEventListener("click", () => {
  if (testInput.type === "password") {
    testInput.type = "text";
  } else {
    testInput.type = "password";
  }
});



const emailInput = document.querySelector('.input1');     
const passwordInput = document.querySelector('.input2');   
const signInButton = document.querySelector('.input4');    

signInButton.addEventListener('click', () => {
    
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("Məlumat daxil edin!");
    }
});