export { panierRender }
const panierRender = `
<div class="panier-container">
    <div class="panier-left">
        <div class="panier-title">
            <span>PANIER</span>
        </div>
        <hr class="separator">
        <div class="panier-item">
            
        </div>
    </div>
    <div class="panier-right">
        <div class="sum-article cash-in">
            <span class="title cart-sum-article">Nb article</span>
            <span class="cash cart-sum-price"></span>
        </div>
        <hr class="separator">
        <div class="detail-cash">
            <div class="sum-hors-taxe cash-in">
                <span class="title">Total HT</span>
                <span class="cash">0 Ar</span>
            </div>
            <div class="tva cash-in">
                <span class="title">TVA</span>
                <span class="cash">0 Ar</span>
            </div>
            <div class="livraison cash-in">
                <span class="title">Livraison</span>
                <span class="cash">gratuit</span>
            </div>
            <div class="total-cash cash-in">
                <span class="title">Total TTC</span>
                <span class="cash">0 Ar</span>
            </div>
        </div>
        <hr class="separator">
        <div class="valid-command-btn">
            <button class="btn-command">Commander</button>
        </div>
    </div>
</div>
`