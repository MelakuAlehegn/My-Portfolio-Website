const icon = document.querySelector('.fas')
console.log(icon)
// icon.addEventListener('click', switcher())
icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    }
    else {
        icon.classList.add('fa-sun')
    }
}
