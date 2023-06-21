const container = document.querySelector('.container')

const n = 699
for (let i = 0; i <= n; i++){
    const square = document.createElement('div')
    container.append(square)
    square.setAttribute('class', 'square')
    square.addEventListener('mouseover', () => {
        square.style.background = `${randomColor()}`
        square.style.transform = 'scale(1,1'

    })

    square.addEventListener('mouseleave', () => {
        square.style.background = ''
        square.style.transform = ''

    })
}

function randomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10 )

    }
return color
}
randomColor()




//
// let val = 10
// console.log(Math.random() * val )
