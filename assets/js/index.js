import { PanierList } from "./component/panier.js";
import { SalesList } from "./component/saleList.js";
import { panierRender } from "./renderPanier.js";
const lessProducts = document.querySelectorAll('.less-product')
const container = document.querySelector('.product-container')
const main = document.querySelector('main')
const panier = []
export {panier}
lessProducts.forEach(lessProduct =>{
    lessProduct.addEventListener('click', ()=>{
        console.log('button click');
        // console.log(this.querySelector('.product-number'));
        console.log(this);
    })
})
const image = document.querySelector('.image')
console.log(image);


fetch('../assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log('data', data);
        const datas = data.produits 
        // console.log(datas.photos);
        console.log(datas);
        // image.src = `${datas.photos[0]}`

        // afficher les produits
        datas.forEach((data, index) => {
            container.append(new SalesList(data, panier))
        });
        
    })

// array panier = [] 
/* 
    {
        produits : {},
        productNumber : number
    }
    on pousse vers array panier
*/

const clearContainer = (container)=>{
    container.innerHTML = ''
}
const appendElement = (container, element)=>{
    container.innerHTML = element
}
const panierBtn = document.querySelector('.panier')
panierBtn.addEventListener('click', ()=>{
    

    console.log('vers mon panier');
    console.log(container);
    clearContainer(main)
    appendElement(main, panierRender)
    console.log(container);
    const containerPanier = document.querySelector('.panier-item')
    console.log(containerPanier);
    console.log(panier[0].data);
    panier.forEach((element, index) => {
        containerPanier.append(new PanierList(element.data, element.productNumber))
    });
})

const articleCount = (panier)=>{
    const product = panier.map(arr =>{
        return arr.productNumber
    })
    console.log('product number', product);
    let sum = product.reduce((acc, valC)=>{
       return acc + valC
    },0)
    return sum
}
const productBtn = document.querySelector('#product-link')
productBtn.addEventListener('click', ()=>{
    console.log('vers mon panier');
    clearContainer(main)
    main.append(container)
    console.log('mon panier', panier);
    
    console.log(articleCount(panier)); 
})

/*---------------------------------------------------------*/