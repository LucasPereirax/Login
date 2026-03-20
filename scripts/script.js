


//pular conforme o usuário digita o código
const inputs_code = document.querySelectorAll('.code-input');

inputs_code.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (!isNaN(input.value) && input.value !== ' ') {
            if (input.value.length === 1 && index < inputs_code.length - 1) {
                inputs_code[index + 1].focus(); 
            }
        }else {
            input.value = ''; 
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs_code[index - 1].focus(); 
        }
    });
});