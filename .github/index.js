const contact=document.getElementsById("contenaire-texte-contact-id");
const enregistreContact=document.getElementsById("Enregistrer-by");
const flecher=document.getElementsById("fleche");
const enregistrementcontact= document.getElementsById(Id-premiereEng);
const tableau='';
boutnContact.addEventister("click",function(){
Contact.style.display="none";
enregistreContact.style.display="block"
})
enregistrer.addEventListener("click",function(){
    const identPrenom =document.getElementById("Prénom");
    const identNom =document.getElementById("Nom");
    const NomEntreprise =document.getElementById("Entreprise");
    const Fonction =document.getElementById("Fonction");
    const adressEmail =document.getElementById("Email");
    const ajout =document.getElementById("Ajouter");
    const mesconrespondant = document.getElementById("mes-conrespondant")
    let exaucee=String(nom.value)
    tableau+=<div class="new__enregistrercontact">
      <div> ${exaucee}</div>
     <div> E-mail</div>
     <div> Numéro de téléphone</div>
     <div> Fonction et entreprise</div>
     <div class="icone">
         <div style="opacity: 0;">
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7H6V3h12zm0 5.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M16 19v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v6h-4z"/></svg></a>
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg></a>
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 5.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m0 4a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M6.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0"/></svg></a>
    
    
      mesconrespondant.innerHTML = tableau ;
     contact.style.display = "block";
     enregistrerConctact.style.display = "none"
 })
   fleche.addEventListener("click",function(){
   contact.style.display = "block";
   enregistrerConctact.style.display = "none"
 }













