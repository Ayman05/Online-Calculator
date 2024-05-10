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
            scrn.value += button.value;
        });
    });

    equals.addEventListener('click', () => {
        try {
            const result = eval(scrn.value.replace(/[^0-9+/*-.]/g, ""));
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Invalid input');
            }
            scrn.value = result;
        } catch (error) {
            // Display error message
            scrn.value = 'Error';
            console.error(error.message);
        }
    });
});
