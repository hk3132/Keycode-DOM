
document.addEventListener('keypress', keyCode);

function keyCode(e){
    key.textContent = `${e.key}`;
    code.textContent = `${e.code}`;
    which.textContent = `${e.which}`;
    }


