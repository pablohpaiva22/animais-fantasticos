// export default function doeBitcoin() {
//     const bitcoinShow = document.querySelector('.bitcoinValor')

//     async function bitcoinFetch(url) {
//         const bitcoin = await fetch(url)
//         const bitcoinJSON = await bitcoin.json()
//         bitcoinShow.innerText = (100 / bitcoinJSON.BRL.buy).toFixed(4)
//     }

//     bitcoinFetch('https://blockchain.info/ticker')
// }

export default class DoeBiton {
  constructor(bitcoinValor, url) {
    this.bitcoinValor = document.querySelector(bitcoinValor);
    this.url = url;
  }

  async bitcoinFetch(url) {
    const bitcoin = await fetch(url);
    const bitcoinJSON = await bitcoin.json();
    this.bitcoinValor.innerText = (100 / bitcoinJSON.BRL.buy).toFixed(4);
  }

  init() {
    this.bitcoinFetch(this.url);
  }
}
