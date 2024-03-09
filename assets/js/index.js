import { contactRender } from "./component/contact.js";
import { PanierList } from "./component/panier.js";
import { SalesList } from "./component/saleList.js";
import { panierRender } from "./renderPanier.js";

const footer = document.querySelector('footer')
const lessProducts = document.querySelectorAll('.less-product')

let containerProduct = document.createElement('div')
containerProduct.setAttribute('class', 'product-container')
const main = document.querySelector('main')

const panierArray = []
const sumCash = []
const sumArticle = []
export {panierArray,sumArticle, sumCash  }

lessProducts.forEach(lessProduct =>{
    lessProduct.addEventListener('click', ()=>{
        console.log('button click');
        console.log(this);
    })
})



const sumCalcul = (arrayCash)=>{
    let sum = arrayCash.reduce((acc, valC)=>{
        return acc + valC
     },0)
     return sum
}

fetch('../assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log('data', data);
        const datas = data.produits 
        // console.log(datas.photos);
        console.log(datas);

const clearContainer = (container)=>{
    container.innerHTML = ''
}
const appendElement = (container, element)=>{
    container.innerHTML = element
}
console.log(footer);
const panierBtn = document.querySelector('.panier')
panierBtn.addEventListener('click', ()=>{
    clearContainer(main)
    appendElement(main, panierRender)

    const containerPanier = document.querySelector('.panier-item')
    console.log(containerPanier);
    panierArray.forEach((element, index) => {
        containerPanier.append(new PanierList(element.data, element.productNumber, element))
    });

    const sumCashContainer = document.querySelector('#sum-cash')
    sumCashContainer.textContent = sumCalcul(sumCash) + ' ' + 'Ar'

    const sumArticleContainer = document.querySelector('.cart-sum-price')
    sumArticleContainer.textContent = parseInt(sumCalcul(sumArticle))
})


const productBtns = document.querySelectorAll('.product-link')
productBtns.forEach(productBtn =>{
    productBtn.addEventListener('click', ()=>{
        console.log('vers mon panier');
        clearContainer(containerProduct)
        clearContainer(main)
        main.append(containerProduct)
        datas.forEach((data, index) => {
            containerProduct.append(new SalesList(data, panierArray))
        });
        
    })

})

const homeBtns = document.querySelectorAll('.home-link')
const homeContainer = document.querySelector('.home-container')
homeBtns.forEach(homeBtn =>{
    homeBtn.addEventListener('click', ()=>{
        console.log(homeContainer);
        clearContainer(main)
        main.append(homeContainer)        
    })

})
const contactBtns = document.querySelectorAll('.contact-link')
contactBtns.forEach(contactBtn =>{
    contactBtn.addEventListener('click', ()=>{
        // console.log(homeContainer);
        const test = contactRender
        console.log(test);
        clearContainer(main)
        appendElement(main, contactRender)
    })

})
})
/*---------------------------------------------------------*/