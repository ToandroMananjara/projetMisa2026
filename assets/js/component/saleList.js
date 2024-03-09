import { sumCash, sumArticle } from "../index.js"

export class SalesList extends HTMLElement{
    constructor(data, panier){
        super()
        // this.root = this.attachShadow({mode : 'open'})
        this.data = data
        this.panier = panier
        this.render()
        this.command = this.querySelector('.btn-command')
        this.command.addEventListener('click', ()=>{
            console.log(this);
            this.commander()
            console.log('mon panier', this.panier);
        })
        // this.addEventListener('click', ()=>{
        //     this.container = document.querySelector('.container-click')
        //     this.clickItem()
        //     this.container.querySelector('.closed').addEventListener('click',()=> this.closed())
        // })
    }
    
    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <style>
            sale-list * {
                font-size:1.3rem;
               }
                .product-image img{
                    width: 8rem;
                }
                .product-title{
                    font-size: 10px; 
                    height: 70px;
                    margin-bottom: 0.5rem;
                }
                .product-price{
                    display: flex;
                    justify-content: center;
                    color: #011936;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }
                .product-price span {
                    font-size: xx-large;
                }
                .command-container {
                    display: flex;
                    justify-content: center;
                    gap: 2px;
                    color: #011936;
                    font-weight: bold;
                    
                }
                .command-container .command-number input{
                    width: 40px;
                    height: 32px;
                    padding: 0 3px ;
                    text-align: center;
                    border: #011936 5px solid;
                }
                .btn-command{
                    font-size: 1.2rem;
                    background: #011936;
                    color: #d9af23;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    border-radius: 10px;
                }
            </style>
            <div class="product-image">
                <img src="${this.data.photos[0]}" alt="" class="image">
            </div>
            <div class="product-description">
                <div class="product-title">
                    <span>${this.data.description}</span>
                </div>
                <div class="product-price">
                    <span class="price"> ${this.data.prix} <span> Ar</span></span>
                </div>
            </div>
            <div class="command-container">
                <div class="btn-command-item">
                    <button class="btn-command"><i class="fa-solid fa-cart-shopping"></i> Commander</button>
                </div>
                <div class="command-number">
                    <input type="number" class="input-command-number" name="" id="" min=1 value = "1" >
                </div>
            </div>
        
        `;
    }
    commander() {
        let number = this.querySelector('.input-command-number').value
        console.log('nombre de produit', number);
        this.panier.push({data:this.data, productNumber : parseInt(number)})
        // console.log(this.panier);
        this.calculSum(sumCash, parseInt(number))
        console.log('sumCash:',sumCash );
        this.calculSumArticle(sumArticle, number)
        console.log('sumArticle : ', sumArticle);
    }
    calculSum(arraySum, number){
        arraySum.push((this.data.prix * number))
    }
    calculSumArticle(arraySum, number){
        arraySum.push(parseInt(number))
    }
    

}
customElements.define('sale-list', SalesList)