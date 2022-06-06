import router from 'next/router'

const number = '5522999675884'
const uriBase = `https://api.whatsapp.com/send?phone=${number}`

const sendWhatsapp = (products, deliveryFee, purchaseFee) => {
    const productsToString = products.map(item => 
        [item.qty + 'x', item.title, 'R$ ' + item.totalPriceByItem].join(' ')).join('\n')
    const closeOrder = `Sushi House\n\n Pedido nº: x\n\n ${productsToString}\n\n Taxa de Entrega: R$ ${deliveryFee}\n\n Total: R$ ${purchaseFee}`
    const encodedText = encodeURI(closeOrder)
    const uriWithText = `${uriBase}&text=${encodedText}`

    router.push(uriWithText)
}

export default sendWhatsapp