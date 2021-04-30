window.addEventListener('DOMContentLoaded', () => {
    var body = document.querySelector('div')
    var span = document.createElement('span')

    body.appendChild(span)
    span.textContent = '♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥'
    y_pos = 0;
    x_pos = 0;
    function moving_heart() {
        y_pos += 20;
        span.style.top = y_pos + 'px';
        if (parseInt(span.style.top) >= window.innerHeight ){
            y_pos = 0;
            console.log(y_pos)
        }
    }
    setInterval(moving_heart, 100)
})