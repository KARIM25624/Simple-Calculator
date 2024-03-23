function chmode() {
    mode.className == 'fa-solid fa-sun' ?
        mode.className = 'fa-solid fa-moon' :
        mode.className = 'fa-solid fa-sun';
    let body = document.querySelector('body');
    mode.classList.contains('fa-sun') ?
        body.setAttribute('data-theme', 'dark') :
        body.setAttribute('data-theme', 'light');
}
function cal() {
    let replaced = res.value;
    if (res.value.includes('/') || res.value.includes('*')){
        // replaced = res.value.replaceAll('&#247','/').replaceAll('&#215','*');
        res.value = eval(replaced)
    }
    res.value = eval(replaced)
}