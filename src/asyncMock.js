const products = [
    
    { id: '1', name: 'Palo brabo 80% carbono', category: 'palos', img: './img/palo.brabo.jpg', price: '300.500', stock: '10' },
    { id: '2', name: 'Palo grays 80% carbono', category: 'palos', img: './img/palo.grays.azul.jpg', price: '410.300', stock:'5'  },
    { id: '3', name: 'Palo grays 90% carbono', category:'palos', img: './img/palo.grays.jpg', price: '460.600', stock:'12'  },
    { id: '4', name: 'Botines adidas divox', category:'calzado', img: './img/botines.adidas.jpg', price: '195.000', stock:'2'  },
    { id: '5', name: 'Botines adias', category:'calzado', img: './img/botines.negros.jpg', price: '105.900', stock:'8'  },
    { id: '6', name: 'Botines vlack-aqua', category:'calzado', img: './img/botines.vlack.jpg', price: '105.900', stock:'1'  },
    { id: '7', name: 'Casco obo robo', category:'protecciones', img: './img/casco.obo.jpg', price: '145.000', stock:'3'  },
    { id: '8', name: 'Kickers obo hi-rebound', category:'protecciones', img: './img/kickers.obo.jpg', price: '100.000', stock:'2'  },
    { id: '9', name: 'Legguards obo', category:'protecciones', img: './img/legguards.obo.jpg', price: '250.000', stock:'5'  },
    { id: '10', name: 'Bolso mochila obo', category:'accesorios', img: './img/bolso.obo.jpg', price: '270.000', stock: '20' },
    { id: '11', name: 'Funda osaka xl', category:'accesorios', img: './img/bolso.osaka.jpg', price: '240.000', stock:'10'  },
    { id: '12', name: 'Canilleras vlack', category:'protecciones', img: './img/canilleras.vlack.jpg', price: '300.500', stock:'25'  }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}

console.log (products);