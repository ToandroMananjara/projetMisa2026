export { contactRender }
const contactRender = `
<div class="contact" >
<div class="contact-container">
    <h1>Contactez nous</h1>
        <form action="" method="post">
            <select name="" id="">
                <option value="devis">Devis</option>
                <option value="serviceClient">Service client</option>
            </select> 
            <br>
            <input type="email" placeholder="Adress E-mail *" required><br>
            <div class="file-upload">
                <span class="choise">Choisir un fichier</span>
                <input type="file" class="file" accept="jpeg/png"><br>
                <span class="cache"></span>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Votre message*" required></textarea><br>
            <button type="submit" class="send">Envoyer</a></button>
        </form>
</div>
</div>

`