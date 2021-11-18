// note de prof (Tu n’as pas été pénalisé, mais tu peux appeler ton premier chapitre à la fin du code JavaScript afin de démarrer ton jeu dès le chargement de la page.)

//localStorage.setItem("chapitreAJ");

const chapterObjet = {
  chapterReveille: {
    subtitle: "Le Début De La Journée",
    text: "Votre personnage Jonh B. commence sa journée",
    img: "assets/img/johnb.jpg",
    video:'assets/vid/giphy2.mp4',
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Je commence ma journée",
        action: "goToChapter('chapter1')",
      },
    ],
  },
  chapter1: {
    subtitle: "Lépave",
    text: "Vous arriver à un épave de bateau d'un chasseur de trésor. Est-ce que vous sauter à l'eau pour voler ces indices ou vous chercher par vous même tout vos indices?",
    img: "assets/img/thumb_720_450_dreamstime_xxl_10604660-Custom.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Je veux tout chercher mes indices par moi même",
        action: "goToChapter('chapter1MC')",
      },
      {
        text: "On pourrais bien bénéficier d'aide pour commence",
        action: "goToChapter('chapter2')",
      },
    ],
    
  },
  chapter1MC: {
    subtitle: "Vous manquer un indice",
    text: "En cherchant par vous même vous manquer un indice important dons vous devez recommencer votre journée pour avoir une chance de la trouver.",
    img: "assets/img/outerbanks_boat.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Je veux tout chercher mes indices par moi même",
        action: "goToChapter('chapterReveille')",
      },
    ],
  },
  chapter2: {
    subtitle: "La Bousole",
    text: "Vous trouver une bousole avec un indice écrit à l'arrière. ",
    img: "assets/img/bousole.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Je lis l'indice",
        action: "goToChapter('chapter3')",
      },
    ],
  },
  chapter3: {
    subtitle: "L'indice",
    text: "Une rumeur circule dans la ville qui raconte que le trésors serait en haute mer. Est-ce que vous voulez la suivre ou vous voulez vous fier à votre indice",
    img: "assets/img/5993790.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "On suit la rumeur elle fait du sens",
        action: "foundedmap()",
      },
      {
        text: "Je suis mon indice, il faut pas ce faire distraire par une faisse rumeur",
        action: "goToChapter('chapter4')",
      },
    ],
  },
  chapter3MC: {
    subtitle: "La rumeur",
    text: "En se préparant pour aller en haute mer vous trouver une carte de l'île dans le bureau de votre père. Mais vous ne trouver pas de trésor en haute mers.",
    img: "assets/img/rumeur.png",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Je veux tout chercher mes indices par moi même",
        action: "goToChapter('chapter6')",
      },
    ],
  },
  chapter4: {
    subtitle: "Le Chasseur de Trésor",
    text: "En suivant l'indice cela vous mène à un ancien chasseur de trésor qui vous dit que le trésor n'est pas dans un épave de bateau mais bien sur l'île",
    img: "assets/img/mauvaise_desicion.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Quoi faire ?",
        action: "goToChapter('chapter5')",
      },
    ],
  },
  chapter5: {
    subtitle: "Le fort",
    text: "Est-ce que vous décider de croire et de suivre les indication du veille homme pour trouver le trésor ou vous penser qu'il veux seulement vous en éloigne?",
    img: "assets/img/Outerbanks show.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "On ne suis pas ces conseilles il veux surement nous éloigner du trésor",
        action: "goToChapter('chapter5MC')",
      },
      {
        text: "On vas suivre ses conseille, il à l'air de connaitre mieu le trésor que nous et il existe des personne bien intentionné dans la vie",
        action: "goToChapter('chapter6')",
      },
    ],
  },
  chapter5MC: {
    subtitle: "Une mauvaise désicion",
    text: "En ne suivant pas ses conseilles vous rater une piste très importante a votre quête donc vous devez recommencer votre journée pour avoir une chance de trouver le trésor",
    img: "assets/img/chasseur.jpg",
    video: "assets/vid/giphy1.mp4",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Ok je vais recommencer",
        action: "goToChapter('chapterReveille')",
      },
    ],
  },
  chapter6: {
    subtitle: "Vous comprener ou est cacher le trésor sur l'île.",
    text: "En suivant la piste du chasseur de trésor vous trouver l'emplacement du trésor ",
    img: "assets/img/chapter6.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Yey!!! Un indice de plus",
        action: "map()",
      },
    ],
  },

  chapter7: {
    subtitle: "L'emplacement du trésor",
    text: "Alors rendu à cette étape une carte de l'île est nécéssaire pour savoir ou est l'emplacement que vous avez trouver sur l'île alors l'avez-vous?",
    img: "assets/img/parcel-map-final-1589481133.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "Non je n'est pas la carte de l'île",
        action: "goToChapter('chapterReveille')",
      },
      {
        text: "Oui j'ai la carte de l'île",
        action: "goToChapter('chapter7')",
      },
    ],
  },
  chapter7MC: {
    subtitle: "La carte de l'île",
    text: "Parce que vous avez pas la carte de l'île vous dever recommencer pour la trouver.",
    img: "assets/img/pas_carte.jpg",
    son:'assets/son/son_page.mp3',
    option: [
      {
        text: "D'accord",
        action: "goToChapter('chapterReveille')",
      },
    ],
  },
  chapter8: {
    subtitle: "Le trésor",
    text: "Alors avec votre carte vous arrivez  à l'emplacement du trésor. Vous trouver le trésor intact sous le sol. Donc vous prenez toute l'or qu'il s'y trouve et vous la vendez pour récolter l'argent et vous devenez vraiment riche!!!",
    img: "assets/img/parcel-map-final-1589481133.jpg",
    son:'assets/son/son_page.mp3',
    option: [],
  },
};
function goToChapter(chapterName) {
  // foundedmap("chapter3MC");
  let chapter = chapterObjet[chapterName];

  const ti = document.querySelector(".titre");
  ti.innerText = chapter.subtitle;
  console.log(ti.innerText);

  const sT = document.querySelector(".sousTitre");
  sT.innerText = chapter.text;
  console.log(sT.innerText);

  const barreOptions = document.querySelector(".barreoption");
  let buttons = "";
  for (let index = 0; index < chapter.option.length; index++) {
    buttons += `<button class="bouton1" onclick="${chapter.option[index].action}"/>${chapter.option[index].text}</button>`;
  }
  barreOptions.innerHTML = buttons;
  console.log(chapter.video);

///vid
 if (chapter.video != undefined) {
  const video= document.querySelector(".vid");
  video.innerHTML= `<video src="${chapter.video}" loop muted autoplay ></video>`;
 }
  if(chapter.video == undefined){
    const video= document.querySelector(".vid");
   video.innerHTML= `<img src="${chapter.img}"></img>`;
  }

  //Son a chaque chapitre

  //if(chapter.son != undefined){
    const son =  document.querySelector(".audio");
   son.innerHTML = `<audio src="${chapter.son}" autoplay></audio>`;
  //}

  //LocalStorage

  if( chapter.action != undefined){
    localStorage.setItem("chapitreAJ", chapterName);
  }
 // localStorage.getItem("chapitreAJ");
 // localStorage.setItem("chapitreAJ", chapterName);
}

let mapFounded = false;
localStorage.setItem("chapitreAJ", mapFounded);
// localStorage.getItem("chapitreAJ");

function foundedmap() {
  mapFounded = true;
  goToChapter("chapter3MC");
 localStorage.setItem("chapitreAJ", mapFounded);
}
//localStorage.getItem("chapitreAJ");

function map() {
  if (mapFounded == true) {
    goToChapter("chapter8");
  }
  if (mapFounded == false) {
    goToChapter("chapter7MC");
  }
}

goToChapter("chapterReveille");
