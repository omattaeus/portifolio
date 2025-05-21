const fullElement = document.getElementById('full-text');
// const cursor = document.getElementById('typing-cursor'); // Comentado

const introText = 'Hello World! Meu nome é Mateus Gomes';
const headlineText = 'Desenvolvedor Fullstack';

let introIndex = 0;
let headlineIndex = 0;
let animationStep = 1;

const TYPING_SPEED = 50;
const DELETING_SPEED = 30;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_BETWEEN_STEPS = 500;

// Função de cursor comentada
// function updateCursorAfter() {
//   const range = document.createRange();
//   const selection = window.getSelection();
//   const textNode = fullElement.lastChild;
//   if (!textNode) return;
//   range.setStart(textNode, textNode.length);
//   range.collapse(true);
//   const rects = range.getClientRects();
//   if (rects.length > 0) {
//     const rect = rects[0];
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//     cursor.style.left = `${rect.right + scrollLeft}px`;
//     cursor.style.top = `${rect.top + scrollTop}px`;
//   }
// }

function runTypingAnimation() {
switch (animationStep) {
    case 1:
    if (introIndex < introText.length) {
        let current = introText.substring(0, introIndex + 1);
        const highlightStart = introText.indexOf("Mateus Gomes");

        if (introIndex + 1 > highlightStart) {
        const before = current.substring(0, highlightStart);
        const highlight = current.substring(highlightStart);
        current = `${before}<span class="text-red-300">${highlight}</span>`;
        }

        fullElement.innerHTML = current;
        // updateCursorAfter(); // Comentado
        introIndex++;
        setTimeout(runTypingAnimation, TYPING_SPEED);
    } else {
        animationStep = 2;
        setTimeout(runTypingAnimation, PAUSE_BETWEEN_STEPS);
    }
    break;

    case 2:
    if (headlineIndex < headlineText.length) {
        const introStyled = introText.replace(/(Mateus Gomes)/, '<span class="text-red-300">$1</span>');
        const headlineCurrent = headlineText.substring(0, headlineIndex + 1);
        const headlineStyled = `<span class="block text-[48px] md:text-[56px] font-asap font-bold leading-tight-67 text-gray-200 text-center">${headlineCurrent}</span>`;
        fullElement.innerHTML = introStyled + '<br>' + headlineStyled;
        // updateCursorAfter(); // Comentado
        headlineIndex++;
        setTimeout(runTypingAnimation, TYPING_SPEED);
    } else {
        animationStep = 3;
        setTimeout(runTypingAnimation, PAUSE_AFTER_TYPING);
    }
    break;

    case 3:
    if (headlineIndex > 0) {
        headlineIndex--;
        const introStyled = introText.replace(/(Mateus Gomes)/, '<span class="text-red-300">$1</span>');
        const headlineCurrent = headlineText.substring(0, headlineIndex);
        const headlineStyled = `<span class="block text-[48px] md:text-[56px] font-asap font-bold leading-tight-67 text-gray-200 text-center">${headlineCurrent}</span>`;
        fullElement.innerHTML = introStyled + '<br>' + headlineStyled;
        // updateCursorAfter(); // Comentado
        setTimeout(runTypingAnimation, DELETING_SPEED);
    } else {
        animationStep = 4;
        setTimeout(runTypingAnimation, PAUSE_BETWEEN_STEPS);
    }
    break;

    case 4:
    if (introIndex > 0) {
        introIndex--;
        let current = introText.substring(0, introIndex);
        const highlightStart = introText.indexOf("Mateus Gomes");

        if (introIndex > highlightStart) {
        const before = current.substring(0, highlightStart);
        const highlight = current.substring(highlightStart);
        current = `${before}<span class="text-red-300">${highlight}</span>`;
        }

        fullElement.innerHTML = current;
        // updateCursorAfter(); // Comentado
        setTimeout(runTypingAnimation, DELETING_SPEED);
    } else {
        animationStep = 1;
        setTimeout(runTypingAnimation, PAUSE_BETWEEN_STEPS);
    }
    break;
}
}

document.addEventListener('DOMContentLoaded', () => {
runTypingAnimation();
});

document.getElementById("scroll-trigger")?.addEventListener("click", function () {
document.getElementById("trabalho")?.scrollIntoView({ behavior: "smooth" });
});