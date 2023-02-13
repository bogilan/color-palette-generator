const generateBtn = document.getElementById('generate');
const colorCards = document.querySelectorAll('.color-card');
const saveBtns = document.querySelectorAll('.save-color');
const copyBtns = document.querySelectorAll('.copy-color');
const copyAllBtn = document.querySelector('.copy-all-colors');
const copyStatus = document.querySelector('.copy-status');
const refreshBtn = document.querySelector('.refresh-btn');

// on document load, start generateColors function and create color palette
document.addEventListener("DOMContentLoaded", ()=> {
    colorCards.forEach(color => generateColors(color));
});

// Save Color Button
saveBtns.forEach(btn => btn.addEventListener('click', ()=> {
    btn.classList.toggle('saved');
}));

// Generate New Colors Button
generateBtn.addEventListener('click', ()=> {
    colorCards.forEach(colorCard => generateColors(colorCard))
});

// generateColors function
function generateColors(colorCard) {
    let colorSaved = colorCard.querySelector('.save-color');
    if(!colorSaved.classList.contains('saved')) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let hexColorCode = '#' + randomColor;
        colorCard.style.backgroundColor = hexColorCode;
        colorCard.querySelector('.color-code').textContent = hexColorCode;
    }
}

// Copy Button
copyBtns.forEach(btn => btn.addEventListener('click', ()=> {
    let colorCode = btn.previousElementSibling.textContent;
    navigator.clipboard.writeText(colorCode);
    btn.textContent = 'Copied';
    setTimeout(() => {
        btn.textContent = 'Copy';
      }, '2000')
}));

// Copy All Colors Button
copyAllBtn.addEventListener('click', ()=>{
    let colorCodes = document.querySelectorAll('.color-code');
    let colors = [];
    colorCodes.forEach(code => colors.push(code.textContent));
    navigator.clipboard.writeText(colors.join(', '));
    copyStatus.style.opacity = '1';
    setTimeout(() => {
        copyStatus.style.opacity = '0';
      }, '3000')
});

// Refresh Page
refreshBtn.addEventListener('click', ()=>{
    window.location.reload();
})