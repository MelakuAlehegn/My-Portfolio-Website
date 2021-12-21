const icon = document.querySelector('.fas')
const cv_btn = document.querySelector('.btn')
const nav = document.querySelector('#navbar-example2')
const li = document.querySelectorAll('.nav-link')

icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    }
    else {
        nav.classList.add('bg-dark')
        nav.classList.add('navbar-dark')
        icon.classList.add('fa-sun')

    }
}
cv_btn.onclick = function () {
    window.open('images/MelakuAlehegnResume_4.pdf')
}
