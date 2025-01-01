const keys = document.querySelectorAll('.key');
const display = document.getElementById('display');

const fontFamilies = [
    'Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 
    'Tahoma', 'Trebuchet MS', 'Lucida Console', 'Comic Sans MS'
];
const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
document.body.style.fontFamily = randomFont;

alert(`Font family used in this session: ${randomFont}`);

keys.forEach(key => {
    key.addEventListener('click', function() {
        let keyValue = this.textContent;
        if (key.classList.contains('space')) {
            display.value += ' ';
        } else if (key.classList.contains('backspace')) {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += keyValue;
        }
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1); 
    } else if (key === ' ') {
        display.value += ' '; 
    } else if (/^[a-zA-Z0-9.,!?;:'"@#$%^&*()_+-=<>/\\]$/.test(key)) {
        display.value += key; 
    }
});
