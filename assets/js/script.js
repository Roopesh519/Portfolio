document.addEventListener('DOMContentLoaded', function() {
    const lines = [
        'Currently an SDET at 7EDGE.',
        'web developer, designer',
        'android app developer',
        'designer'
    ];

    const typingTextElement = document.getElementById('typing-text');
    let lineIndex = 0;
    let isTyping = true;

    function typeLine(line, callback) {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < line.length) {
                typingTextElement.textContent += line[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 2000); // Pause before removing
            }
        }, 100);
    }

    function removeLine(callback) {
        const removingInterval = setInterval(() => {
            if (typingTextElement.textContent.length > 0) {
                typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
            } else {
                clearInterval(removingInterval);
                setTimeout(callback, 500); // Pause before typing next line
            }
        }, 50);
    }

    function startTypingEffect() {
        typeLine(lines[lineIndex], () => {
            removeLine(() => {
                lineIndex = (lineIndex + 1) % lines.length;
                startTypingEffect();
            });
        });
    }

    startTypingEffect();
});
