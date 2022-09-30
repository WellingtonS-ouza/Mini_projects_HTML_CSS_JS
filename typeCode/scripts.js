const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    document.body.style.backgroundColor = getRandomColor();
    insert.innerHTML = ` <div class = "key">
        ${e.key === ' ' ? 'space' : e.key}
        <small>event.key</small>
    </div>
    <div class = "key">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>
<div class = "key">
        ${e.code}
        <small>event.code</small>
    </div>`
})

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]

    }
    return color
}