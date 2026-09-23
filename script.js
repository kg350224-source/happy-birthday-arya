function startBirthday() {
    document.getElementById("coding").scrollIntoView({
        behavior: "smooth"
    });

    createConfetti(40);
}

function showBirthday() {
    document.getElementById("birthday").scrollIntoView({
        behavior: "smooth"
    });

    createConfetti(80);
}

function openGift() {

    const gift = document.getElementById("giftMessage");

    gift.style.display = "block";

    createConfetti(120);

    setTimeout(function () {
        gift.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 300);
}

function createConfetti(amount) {

    const container =
        document.getElementById("confetti-container");

    const symbols = [
        "❤️",
        "💖",
        "🎉",
        "🎊",
        "✨",
        "⭐",
        "🌸"
    ];

    for (let i = 0; i < amount; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (10 + Math.random() * 15) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        container.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, 6000);
    }
}