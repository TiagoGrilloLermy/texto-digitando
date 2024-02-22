const changingText = document.getElementById('changing-text');
const texts = ["com Desenvolvimento Web", "Resolvendo Problemas com Tecnologia", "Encontrando Soluções Eficientes"];
let currentIndex = 0;

function typeText() {
    const text = texts[currentIndex];
    let currentText = "";
    let textIndex = 0;

    const typingInterval = setInterval(function () {
        currentText += text[textIndex];
        changingText.textContent = currentText;

        textIndex++;

        if (textIndex >= text.length) {
            clearInterval(typingInterval);
            setTimeout(eraseText, 1000);
        }
    }, 100);
}

function eraseText() {
    let currentText = changingText.textContent;
    let textIndex = currentText.length;

    const erasingInterval = setInterval(function () {
        currentText = currentText.slice(0, -1);
        changingText.textContent = currentText;

        textIndex--;

        if (textIndex === 0) {
            clearInterval(erasingInterval);
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(typeText, 500);
        }
    }, 50);
}

typeText();


