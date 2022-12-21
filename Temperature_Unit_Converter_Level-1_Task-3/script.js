const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const fahrToCel = () => {
    let fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value} °C to ${fahrenheit} °F`
    converter.value = ''
}

const celToFahr = () => {
    let celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value} °F to ${celsius.toFixed(1)} °C`
    converter.value = ''
}

const conversion = () => {
    if (converter.value !== '') {
        one.textContent === '°C' ? fahrToCel() : celToFahr()
    } else {
        result.textContent = 'You need to insert a value...'
    }
}

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ''
    }
}

const reset = () => {
    converter.textContent = ''
    result.textContent = ''
}

convBtn.addEventListener('click', conversion)
changeBtn.addEventListener('click', swap)
resetBtn.addEventListener('click', reset)