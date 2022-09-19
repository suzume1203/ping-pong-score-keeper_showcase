const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Dispay = document.querySelector("#p1Display");
const p2Dispay = document.querySelector("#p2Display");
const resetBtn = document.querySelector("#resetBtn");
const playTo = document.querySelector("select");

let p1Score = 0;
let p2Score = 0;
let winP = 3;
let isGameOver = false;

playTo.addEventListener('change', function () {
    winP = parseInt(this.value);
    reset();
})

p1Btn.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winP) {
            p1Dispay.classList.add('has-text-success');
            p2Dispay.classList.add('has-text-danger');
            isGameOver = true;
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Dispay.textContent = p1Score;
    }

})

p2Btn.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winP) {
            p2Dispay.classList.add('has-text-success');
            p1Dispay.classList.add('has-text-danger');
            isGameOver = true;
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p2Dispay.textContent = p2Score;
    }
})
resetBtn.addEventListener('click', reset)
function reset() {
    p1Score = 0;
    p1Dispay.textContent = 0;
    p1Dispay.classList.remove('has-text-success', 'has-text-danger');
    p2Score = 0;
    p2Dispay.textContent = 0;
    p2Dispay.classList.remove('has-text-success', 'has-text-danger');
    isGameOver = false;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}
