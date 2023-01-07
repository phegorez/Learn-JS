const display = document.getElementById('calculator-display')
const clearBtn = document.getElementById('clear')


//ฟังชั่นการ input ค่าในแต่ละปุ่มลงใน input tag
const input = (character) => {

    const operatorRegex = /^[+-/*]/ //ตัวแปรนี้เก็บสัญญาลักษณ์ทางคณิตสาตร์

    //นำตัวแปรด้านบนมาเช็ค if/else หาก user ใส่สัญญาลักษ์ก่อนตัวเลข browser จะ alert
    if (operatorRegex.test(display.value)) {
        alert("The first character cannot be an operator");
    } else {
        display.value = display.value + character //แสดงค่าใน input tag
    }
}

//ฟังชั่นคำนวนค่าใน input
const compute = () => {
    display.value = eval(display.value)
}

//ฟังชั่นลบค่าที่ละตัวใน input
const deletelastchar = () => {
    display.value = display.value.slice(0, -1)
}

//ฟั่งชั่น clear input
clearBtn.addEventListener('click', () => {
    display.value = ''
})