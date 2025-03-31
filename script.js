const questions = [
    "วันนี้อากาศดีมั้ย",
    "รู้สึกยังไงบ้างที่เดินเล่นด้วยกัน",
    "มีอะไรอยากบอกเค้ามั้ย",
    "พร้อมที่จะไปคำถามสุดท้ายรึป่าว",
    "ฮั่นแน่ ใจเย็นๆ55555+",
    "สวัสดีก๊าบบ ก่อนอื่นอยากบอกว่าตลอดเวลาที่เราคุยกันมาพี่รู้สึกดีและสบายใจที่มีหนูและอยากที่จะมีหนูอยู่ในทุกก้าวต่อจากนี้ วันนี้เป็นอีกวันที่พี่รู้สึกว่าเป็นวันที่ดีที่สุดเลยและวันนี้มีคำถามมาถามหนูในอีกหน้านึงนะ สุดท้ายนี้ยอมรับว่าตื่นเต้นสุดๆ แต่อยากบอกคำนึงมากๆคือ พี่ชอบหนูนะไอซ์"
];

let currentQuestion = 0;

function fadeOut(element, callback) {
    element.style.opacity = 1;
    let fade = setInterval(() => {
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.05;
        } else {
            clearInterval(fade);
            element.style.display = "none";
            if (callback) callback();
        }
    }, 30);
}

function fadeIn(element) {
    element.style.display = "block";
    element.style.opacity = 0;
    let fade = setInterval(() => {
        if (element.style.opacity < 1) {
            element.style.opacity = parseFloat(element.style.opacity) + 0.05;
        } else {
            clearInterval(fade);
        }
    }, 30);
}

function goToNextPage() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("กรุณากรอกชื่อ");
    } else {
        fadeOut(document.getElementById("first-page"), () => {
            fadeIn(document.getElementById("questionnaire"));
            showQuestion();
        });
    }
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");

    if (currentQuestion === 5) {
        questionContainer.innerHTML = `
            <p class="long-message">${questions[currentQuestion]}</p>
            <button onclick="nextQuestion()">ถัดไป</button>
        `;
    } else {
        questionContainer.innerHTML = `
            <p>${questions[currentQuestion]}</p>
            <input type="text" id="answer${currentQuestion}" placeholder="คำตอบของคุณ">
            <button onclick="nextQuestion()">ถัดไป</button>
        `;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        startCountdown();
    }
}

function startCountdown() {
    let countdown = 5;
    const countdownElement = document.getElementById("countdown");
    fadeIn(countdownElement);

    const interval = setInterval(() => {
        countdownElement.textContent = `เริ่มนับถอยหลัง: ${countdown} วินาที`;
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            window.location.href = "secret.html"; 
        }
    }, 1000);
}

// ทำให้ปุ่ม "ไม่" วิ่งหนี
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noButton");

    if (noButton) {
        noButton.addEventListener("mouseover", () => {
            noButton.style.position = "absolute";
            noButton.style.left = Math.random() * window.innerWidth + "px";
            noButton.style.top = Math.random() * window.innerHeight + "px";
        });
    } else {
        console.error("ไม่พบปุ่ม 'noButton'");
    }
});

setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw"; // สุ่มตำแหน่ง X
    heart.style.bottom = "0"; // เริ่มต้นจากด้านล่าง
    document.body.appendChild(heart);

    // ทำให้หัวใจลอยขึ้นและหายไปภายใน 3 วินาที
    setTimeout(() => heart.remove(), 3000);
}, 500);

