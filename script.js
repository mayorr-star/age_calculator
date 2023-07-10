//Getting  our output elements
const yearOutput = document.querySelector('.year-output');
const monthOutput = document.querySelector('.month-output');
const dayOutput = document.querySelector('.day-output');
const solveBtn = document.getElementById('solve');

//Inputs elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year'); 

let isValid = false;  //Input value is wrong

//Error messages
const dayError = document.getElementById('error-day');
const monthError = document.getElementById('error-month');
const yearError = document.getElementById('error-year');

dayInput.addEventListener('input', (event) => {
    if (dayInput.value < 1 || dayInput.value > 31){
        dayError.textContent = 'Must be valid date';
        isValid = false;
    }else{
        isValid = true;  //When the input value is correct
        dayError.textContent = '';
    }
    if (dayInput.value.length === 0){
        dayError.textContent = 'This field is required';
        isValid = false;
    }
})

monthInput.addEventListener('input', (event) => {
    if (month.value < 1 || month.value > 12){
        monthError.textContent = 'Must be valid date';
        isValid = false;
    }else{
        isValid = true;   //When the input value is correct
        monthError.textContent = '';
    }
    if (month.value.length === 0){
        monthError.textContent = 'This field is required';
        isValid = false;
    }
})


const currentYear = new Date().getFullYear();  //Getting the current year
yearInput.addEventListener('input', (event) => {
    if (yearInput.value > currentYear){
        yearError.textContent = 'Must be valid date';
        isValid = false;
    }else{
        isValid = true;  //When the input value is correct
        yearError.textContent = '';
    }
    if (yearInput.value.length === 0){
        yearError.textContent = 'This field is required';
        isValid = false;
    }
})

solveBtn.addEventListener('click', calculateAge);

function calculateAge() {
    if (isValid){
        const birthday = `${monthInput.value } / ${dayInput.value}  / ${yearInput.value}`;
        const dateOfBirth = new Date(birthday);
        const currentDate = Date.now();
        const ageDiff = currentDate - dateOfBirth;
        const ageDiffDate = new Date(ageDiff);
        const ageYear = ageDiffDate.getFullYear() - 1970;
        const ageMonth = ageDiffDate.getMonth();
        const ageDay = ageDiffDate.getDay();
        yearOutput.textContent = ageYear;
        monthOutput.textContent = ageMonth;
        dayOutput.textContent = ageDay;
    }
    else{
        alert('Incorrect');
    }
}

