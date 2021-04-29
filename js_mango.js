window.addEventListener('DOMContentLoaded', () => {
    var body = document.querySelector('div')
    var span = document.createElement('span')

    body.appendChild(span)
    span.textContent = '♥'



    function moving_heart() {
        span.style.left = Math.round(Math.random()*window.innerWidth) + 'px';
        span.style.top = Math.round(Math.random()*window.innerHeight) + 'px';
    }

    moving_heart()
})