let currentQuestion = 1;
const totalQuestions = 10;

function nextQuestion(questionNumber) {
    const currentDiv = document.getElementById(`question${questionNumber}`);
    const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
    
    if (selectedOption) {
        currentDiv.style.display = 'none';
        
        if (questionNumber < totalQuestions) {
            const nextDiv = document.getElementById(`question${questionNumber + 1}`);
            nextDiv.style.display = 'block';
        } else {
            calculateNTRP();
        }
    } else {
        alert('답변을 선택해 주세요.');
    }
}

function calculateNTRP() {
    let totalScore = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
        }
    }

    let ntrp = '';
    if (totalScore >= 10 && totalScore <= 13) {
        ntrp = '1.0';
    } else if (totalScore >= 14 && totalScore <= 17) {
        ntrp = '1.5';
    } else if (totalScore >= 18 && totalScore <= 20) {
        ntrp = '2.0';
    } else if (totalScore >= 21 && totalScore <= 26) {
        ntrp = '2.5';
    } else if (totalScore >= 27 && totalScore <= 30) {
        ntrp = '3.0';
    } else if (totalScore >= 31 && totalScore <= 34) {
        ntrp = '3.5';
    } else if (totalScore >= 35 && totalScore <= 36) {
        ntrp = '4.0';
    } else if (totalScore >= 37 && totalScore <= 38) {
        ntrp = '4.5';
    } else if (totalScore === 39) {
        ntrp = '5.0';
    } else if (totalScore === 40) {
        ntrp = '5.5';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `당신의 테니스 전투력은 NTRP ${ntrp} 입니다.`;
    resultDiv.style.display = 'block';
}