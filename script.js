
async function pucharAPI1() {
    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        const dados = await response.json()
        if (!response.ok) {
            alert("um erro no json")
            return
        }
        const inputDolar = document.querySelector(`#inputDolar`).value = dados.USDBRL.low

    }
    catch (error) {
        console.error(error)
    }
    pucharAPI2()
}
async function pucharAPI2() {
    const inputpais = document.querySelector(`#inputpais`).value
    const bandeira = document.querySelector('#bandeira')
    if(inputpais == ""){
        alert("preencha o país")
        return
    }
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${inputpais}`)
        const dados = await response.json()

        if (!response.ok) {
            alert(`Erro HTTP: ${response.status} - ${response.statusText}`)
            return
        }
        bandeira.src = dados[0].flags.png
        const inputcapital = document.querySelector(`#inputcapital`).value = dados[0].capital
        const inputpopulacao = document.querySelector(`#inputpopulacao`).value = dados[0].population
        // dados[0] para entrar no arrey 

    } catch (error) {
        console.error(error)
    }

}
const imgDog = document.querySelector(`#imgDog`)
async function pucharAPI3() {

    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        const dados = await response.json()

        if (!response.ok) {
            alert(`erro http: ${response.status} - ${response.statusText}`)
        }

        imgDog.src = dados.message
        // alert(dados.message)
    }
    catch (error) {
        console.error(error)
    }
}
function apagarImg() {
    imgDog.src = ""
}
async function pucharAPI4() {
    const inputKey = document.querySelector('#inputKey').value
    const inputCidade = document.querySelector('#inputCidade').value
    const imgClima = document.querySelector('#imgClima')
    
    // const temp

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${inputKey}&units=metric&lang=pt_br`)
        const dados = await response.json()
        if (!response.ok) {
            alert(`Erro: ${response.status} - ${response.statusText}`)
            return
        }
        const inputClima = document.querySelector('#inputClima').value = dados.weather[0].description
        // weather[0] acessar o arrey
        imgClima.src = `https://openweathermap.org/payload/api/media/file/${dados.weather[0].icon}.png`
    
        const tempMax = document.querySelector('#tempMax').value =  `${dados.main.temp_max} °C`
        const tempMim = document.querySelector('#tempMim').value =  `${dados.main.temp_min} °C`
        const speedVento = document.querySelector('#speedVento').value =  `${dados.wind.speed} Km/h`
        // erro no link que estava no site
        // no site:  https://openweathermap.org/payload/api/media/file/10d%402x.png
        // cocertado: https://openweathermap.org/payload/api/media/file/10d.png


    }
    catch (error) {
        console.error(error)
    }
}
pucharAPI3()
