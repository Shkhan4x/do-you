const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love you too!';
});
noBtn.addEventListener('click', () => {
    question.innerHTML = 'PLEASE CLICK YES 🥺';
});
noBtn.addEventListener('mouseover' ,() => { const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;
noBtn.style.let = i + 'px';
noBtn.style.top = j + 'px';
});