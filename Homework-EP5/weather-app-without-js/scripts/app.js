//include HTML Elementss
const iconElement = document.querySelector('.weather-icon')
const temperatureElement = document.querySelector('.temperature-value p')
const descriptionElement = document.querySelector('.temperature-description p')
const locationElement = document.querySelector('.location p')
const notificationElement = document.querySelector('.notification')

const weather = {
  city: '-',
  country: '-',
  iconId: 'Unknown',
  description: '',
  temperature: {
    unit: 'Celsius',
    value: 0
  }
}

const KELVIN = 273
const key = '82005d27a116c2880c8f0fcb866998a0'

const displayWeather = () => {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png">`
  temperatureElement.innerHTML = `${weather.temperature.value}°<span>C</span>`
  descriptionElement.innerHTML = weather.description
  locationElement.innerHTML = `${weather.city}, ${weather.country}`
}

const getWeather = async (latitude, longitude) => {
  const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
  const data = await (await fetch(api)).json()

  console.log({data})
  weather.temperature.value = Math.floor(data.main.temp - KELVIN)
  weather.description = data.weather[0].description
  weather.iconId = data.weather[0].icon
  weather.city = data.name
  weather.country = data.sys.country

  displayWeather()
}

const setPosition = (position) => {
  const { latitude, longitude } = position.coords

  getWeather(latitude, longitude)
}

const showError = (error) => {
  notificationElement.getElementsByClassName.display = 'block'
  notificationElement.innerHTML = `<p>${error.message}</p>`
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition, showError)
} else {
  notificationElement.getElementsByClassName.display = 'block'
  notificationElement.innerHTML = '<p>Error to access geolocation</p>'
}

const celsiusToFahrenheit = (celsius) => Math.floor((celsius * 9) / 5 + 32)

temperatureElement.addEventListener('click', () => {
  if (!weather.temperature.value) return

  if (weather.temperature.unit === 'celsius') {
    const fahrenheit = celsiusToFahrenheit(weather.temperature.value)
    temperatureElement.innerHTML = `${fahrenheit}°<span>F</span>`
    weather.temperature.unit = 'fahrenheit'
  }else {
    temperatureElement.innerHTML = `${weather.temperature.value}°<span>C</span>`
    weather.temperature.unit = 'celsius'
  }
})
