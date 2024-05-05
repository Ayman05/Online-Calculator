const scrn = document.getElementById('screen');
const numbr = document.querySelectorAll(".number");
const opertr = document.querySelectorAll(".operator");
const equals = document.getElementById("equal");




document.addEventListener('DOMContentLoaded', function() {
    numbr.forEach(button => {
        button.addEventListener('click', () => {
            scrn.value += button.textContent;
        });
    });


 opertr.forEach(button => {
        button.addEventListener('click', () => {
            scrn.value += button.textContent;

        });
    });

    equals.addEventListener('click', () => {
        const result = eval(scrn.value.replace(/[^0-9+/*-.]/g, ""));
        scrn.value = eval(result);
    });
});