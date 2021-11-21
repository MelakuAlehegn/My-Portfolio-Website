const icon = document.querySelector('.icon')
// icon.addEventListener('click', switcher())
icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        icon.innerHTML = 'W'
    }
    else {
        icon.innerHTML = ''
    }
}
