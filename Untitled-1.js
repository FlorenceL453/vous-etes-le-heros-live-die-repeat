
 const chapitreObjet = {
    chapter1:{
    subtitle:"Lépave",
    text: "Vous arriver à un épave de bateau d'un chasseur de trésor. Est-ce que vous sauter à l'eau pour voler ces indices ou vous chercher par vous même tout vos indices?",
    img:"thumb_720_450_dreamstime_xxl_10604660-Custom.jpg",
     option:[
     {
    text:'Je veux tout chercher mes indices par moi même',
     action:'goToChapter(chapitre2)',
    },
   {
    text:'On pourrais bien bénéficier d'aide pour commence',
     action:'goToChapter',
    }
     ]
   },
   
const chapitre2 = {
    subtitle:"L'indice",
    text: "Une rumeur circule dans la ville qui raconte que le trésors serait en haute mer. Est-ce que vous voulez la suivre ou vous fier à votre indice",
    img:"5993790.jpg",
  option:[
     {
    text:'On suit la rumeur elle fait du sens',
     action:'goToChapter()',
    },
       {
    text:'Je suis mon indice, il faut pas ce faire distraire par une faisse rumeur',
     action:'goToChapter(chapitre3)',
    },
},
const chapitre3 = {
    subtitle:"Le fort",
    text: "Est-ce que vous décider de croire et de suivre les indication du veille homme pour trouver le trésor ou vous penser qu'il veux seulement vous en éloigne?",
    img:"Outerbanks show.jpg"
},
const chapitre4 = {
    subtitle:"L'emplacement du trésor",
    text: "Alors rendu à cette étape une carte de l'île est nécéssaire pour savoir ou est l'emplacement que vous avez trouver sur l'île alors l'avez-vous?",
    img:"parcel-map-final-1589481133.jpg"
},
   
function goToChapter(chapterName){
    let chapitre= chapterobjet[chapterName];
}
const options2 = ["",""]
const options3 = ["On ne suis pas ces conseilles il veux surement nous éloigner du trésor","On vas suivre ses conseille, il à l'air de connaitre mieu le trésor que nous et il existe des personne bien intentionné dans la vie"];
const options4 = ["Non je n'est pas la carte de l'île","Oui j'ai la carte de l'île"]
