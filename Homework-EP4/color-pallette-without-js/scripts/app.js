//include html elements
const display = document.getElementById('color')
const colorCodes = document.getElementById('code')


//16777215 raw hex values

randomColor = () => {
    const random = Math.floor(Math.random() * 16777215).toString(16)
    display.style.backgroundColor = `#${random}`
    colorCodes.innerText = `#${random}`
}









