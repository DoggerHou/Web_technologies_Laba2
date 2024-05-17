document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector('.contacts-form button[type="submit"]');
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        
        var firstName = document.querySelector('.contacts-form input[name="firstName"]').value;
        var lastName = document.querySelector('.contacts-form input[name="lastName"]').value;
        
        // Ваш код для отображения alert с введенными данными
        alert(firstName + " " + lastName + ", " + "ваш заказ принят!");
    });
});
