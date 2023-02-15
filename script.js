const generateBtn = document.getElementById('generate-colors-btn');
const paletteItems = document.querySelectorAll('.color-palette-item');
const saveBtns = document.querySelectorAll('.save-color');
const copyBtns = document.querySelectorAll('.copy-color');
const copyAllBtn = document.querySelector('.copy-all-colors-btn');
const copyStatus = document.querySelector('.copy-colors-status');
const refreshBtn = document.querySelector('.refresh-btn');

// on document load, start generateColors function and create color palette
document.addEventListener("DOMContentLoaded", ()=> {
    generateColors();
});

// Generate New Colors Button
generateBtn.addEventListener('click', ()=> {
    generateColors();
});

// generateColors function
function generateColors(item) {
    paletteItems.forEach(item => {
        if(!item.querySelector('.save-color').classList.contains('saved')) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const hexColorCode = `#${randomColor}`;
            item.style.backgroundColor = hexColorCode;
            item.querySelector('.color-code').textContent = hexColorCode;
        }
    })
}

// Save Color Button
saveBtns.forEach(btn => btn.addEventListener('click', ()=> {
    btn.classList.toggle('saved');
}));

// Copy Button
copyBtns.forEach(btn => btn.addEventListener('click', ()=> {
    const colorCode = btn.previousElementSibling.textContent;
    navigator.clipboard.writeText(colorCode);
    btn.textContent = 'Copied';
    setTimeout(() => {
        btn.textContent = 'Copy';
      }, 2000)
}));

// Copy All Colors Button
copyAllBtn.addEventListener('click', ()=>{
    const colorCodes = document.querySelectorAll('.color-code');
    let colors = [];
    colorCodes.forEach(code => colors.push(code.textContent));
    navigator.clipboard.writeText(colors.join(', '));
    copyStatus.style.opacity = '1';
    setTimeout(() => {
        copyStatus.style.opacity = '0';
      }, 3000)
});

// Refresh Page
refreshBtn.addEventListener('click', ()=>{
    window.location.reload();
})