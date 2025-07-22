document.addEventListener('DOMContentLoaded', function (){
    initFormValidation();
});
function initFormValidation (){
    const form =document.getElementById('signupForm');
    form.addEventListener('submit' , function (event){
        if(!form.checkValidity()){
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert('Form submitted successfully!')
            form.reset();
        }
        form.classList.add('was-validated');
    });
}