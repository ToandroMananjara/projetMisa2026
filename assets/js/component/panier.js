export class PanierList extends HTMLElement{
    constructor(panier, count){
        super()
        // this.root = this.attachShadow({mode : 'open'})
        // this.data = data
        this.panier = panier
        this.count = count
        // this.numberOfArticle = this.articleCount(this.panier)
        this.render()

        // this.addEventListener('click', ()=>{
        //     this.container = document.querySelector('.container-click')
        //     this.clickItem()
        //     this.container.querySelector('.closed').addEventListener('click',()=> this.closed())
        // })
    }
    
    render() {
        this.innerHTML = `
            <style>
            *{
                font-size: 20px;
            }
            .panier-product-img{
                display: flex;
                justify-content: center;
                align-items: center;
                border: #011936 1px solid;
                padding: 20px 5px;
            }
            .panier-product-img img{
                width:110px;
                
            }
            .panier-product-number {
                display: flex;
            }
            .panier-product-number span{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #011936;
                width: 30px;
                height: 40px;
            }
            .panier-product-number .product-number{
                width: 30px;
                height: 40px;
                text-align: center;   
            }
            .panier-left, .panier-right{
                background: #fff;
                padding: 20px;
            }
            .panier-left{
                width: 60%;
            }
            .panier-right{
                width: 35%;
            }
            .cash-in{
                position: relative;
                height: 35px;
            }
            .title{
                position: absolute;
                left: 10px;
            }
            .cash{
                position: absolute;
                right: 10px;
            }
            .valid-command-btn{
                display: flex;
                justify-content: center;
            }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <div class="panier-product-img">
                <img src="${this.panier.photos[0]}" alt="">
            </div>
            <div class="panier-product-description">
                <div class="product-title">
                    <span>${this.panier.description}</span>
                </div>
                <div class="product-price">
                    <span class="price"> ${this.panier.prix}</span>
                </div>
            </div>
            <div class="panier-product-number">
                <span class="less-product"><i class="fa-solid fa-chevron-left"></i></span><input class="product-number"  value = ${this.count} ><span class="more-product"><i class="fa-solid fa-chevron-right"></i></span>
            </div>
            <div class="panier-sum-price-item">
                <span class="panier-sum-price" >${this.count * this.panier.prix}</span>
            </div>
            <div class="panier-delete">
                <span><i class="fa-solid fa-trash"></i></span>
            </div>
            
        `;
    }
    articleCount(panier){
        const product = panier.map(arr =>{
            return arr.productNumber
        })
        console.log('product number', product);
        let sum = product.reduce((acc, valC)=>{
           return acc + valC
        },0)
        return sum
    }


}
customElements.define('panier-list', PanierList)