const form = document.getElementById('form')

const resultTemplate = (data) => {
    const result = document.getElementById('result')
    result.setAttribute('class', 'data-output-container')
    result.innerHTML = ""
    return result.insertAdjacentHTML('beforeend',`<div class="data-ouput data-output-item">
          <span>Precipitation: </span> ${data[0].toFixed(5)} mm/day
        </div>
        <div class="data-ouput data-output-item"><span>Surface Pressure: </span> ${data[1].toFixed(5)} 	&#13226;</div>
        <div class="data-ouput data-output-item"><span>Relative Humidity: </span> ${data[2].toFixed(5)} &#37;</div>
        <div class="data-ouput data-output-item"><span>Max Temperature: </span> ${data[3].toFixed(5)} &#8451;</div>
        <div class="data-ouput data-output-item"><span>Min Temperature: </span> ${data[4].toFixed(5)} &#8451;</div>
        <div class="data-ouput data-output-item"><span>Wind Speed: </span> ${data[5].toFixed(5)} m/s</div>
    `)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = []
    data.push(precipitation.value)
    data.push(surfacePressure.value)
    data.push(relativeHumidity.value)
    data.push(maxTemp.value)
    data.push(minTemp.value)
    data.push(windSpeed.value)
    NumberedData = data.map(e => Number(e))
    try {
        const getPredictions = async () => {
            const { data } = await axios.post('http://localhost:8000/weather/index',{values:NumberedData})
            console.log(data)
            resultTemplate(data[0])
        }
        getPredictions();
    } catch (e) {
        console.log(e)
    }
})