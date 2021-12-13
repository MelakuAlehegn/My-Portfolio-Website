const icon = document.querySelector('.fas')
const cv_btn = document.querySelector('.btn-cv')
// console.log(icon)
// icon.addEventListener('click', switcher())
console.log(document)
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
cv_btn.onclick = function () {
    window.open('images/MelakuAlehegnResume_4.pdf')
}