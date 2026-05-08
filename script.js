
async function pucharAPI1() {
    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        const dados = await response.json()
        if(!response.ok){
            alert("um erro no json")
        }
        const inputDolar = document.querySelector(`#inputDolar`).value = dados.USDBRL.high

    }
    catch (error) {
        console.error(error)
    }
    pucharAPI2()
}
async function pucharAPI2(){
    try{
        const response = await fetch(`http://ipwho.is/`)
        const dados = await response.json()

        const inputpais = document.querySelector(`#inputpais`).value = dados.country
    } catch (error){
        console.error(error)
    }
}
