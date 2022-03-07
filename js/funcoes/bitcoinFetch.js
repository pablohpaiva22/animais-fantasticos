export default function doeBitcoin() {
    const bitcoinShow = document.querySelector('.bitcoinValor')

    async function bitcoinFetch(url) {
        const bitcoin = await fetch(url)
        const bitcoinJSON = await bitcoin.json()
        bitcoinShow.innerText = (100 / bitcoinJSON.BRL.buy).toFixed(4)
    }

    bitcoinFetch('https://blockchain.info/ticker')
}