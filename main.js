const icon = document.querySelector('.fas')
const cv_btn = document.querySelector('.btn-cv')
// console.log(icon)
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
cv_btn.onclick = function () {
    window.open('images/MelakuAlehegnResume_4.pdf')
}
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top')
            navbar_height = this.document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px'
        }
        else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0'

        }
    })
})