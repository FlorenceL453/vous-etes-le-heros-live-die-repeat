const chapterObjet = {
  chapterRéveille: {},
  chapter1: {
    subtitle: "Lépave",
    text: "Vous arriver à un épave de bateau d'un chasseur de trésor. Est-ce que vous sauter à l'eau pour voler ces indices ou vous chercher par vous même tout vos indices?",
    img: "../assets/img/thumb_720_450_dreamstime_xxl_10604660-Custom.jpg",
    option: [
      {
        text: "Je veux tout chercher mes indices par moi même",
        action: "goToChapter(chapitre2)",
      },
      {
        text: "On pourrais bien bénéficier d'aide pour commence",
        action: "goToChapter",
      },
    ],
  },
  chapter2: {},
  chapter3: {
    subtitle: "L'indice",
    text: "Une rumeur circule dans la ville qui raconte que le trésors serait en haute mer. Est-ce que vous voulez la suivre ou vous fier à votre indice",
    img: "../assets/img/5993790.jpg",
    option: [
      {
        text: "On suit la rumeur elle fait du sens",
        action: "goToChapter()",
      },
      {
        text: "Je suis mon indice, il faut pas ce faire distraire par une faisse rumeur",
        action: "goToChapter(chapter4)",
      },
    ],
  },
  chapter4: {},
  chapter5: {
    subtitle: "Le fort",
    text: "Est-ce que vous décider de croire et de suivre les indication du veille homme pour trouver le trésor ou vous penser qu'il veux seulement vous en éloigne?",
    img: "../assets/img/Outerbanks show.jpg",
    option: [
      {
        text: "On ne suis pas ces conseilles il veux surement nous éloigner du trésor",
        action: "goToChapter()",
      },
      {
        text: "On vas suivre ses conseille, il à l'air de connaitre mieu le trésor que nous et il existe des personne bien intentionné dans la vie",
        action: "goToChapter(chapter6)",
      },
    ],
  },
  chapter6: {},
  chapter7: {
    subtitle: "L'emplacement du trésor",
    text: "Alors rendu à cette étape une carte de l'île est nécéssaire pour savoir ou est l'emplacement que vous avez trouver sur l'île alors l'avez-vous?",
    img: "../assets/img/parcel-map-final-1589481133.jpg",
    option: [
      {
        text: "Non je n'est pas la carte de l'île",
        action: "goToChapter()",
      },
      {
        text: "Oui j'ai la carte de l'île",
        action: "goToChapter(chapter8)",
      },
    ],
  },
  chapter8: {},
};
function goToChapter(chapterName) {
  let chapter = chapterObjet[chapterName];
  // console.log(chapter.subtitle);
  //  console.log(chapter.text);
  const ti = document.querySelector(".titre");
  ti.innerText = chapter.subtitle;
  console.log(ti.innerText);

  const sT = document.querySelector(".sousTitre");
  sT.innerText = chapter.text;
  console.log(sT.innerText);

  const image = document.querySelector(".image1");
  image.src = chapter.img;
  console.log(image.innerHTML);

  for (let index = 0; index < 1; index++) {
    console.log(chapter.option.text);

    const tab1 = document.querySelector(".bouton1");
    tab1.innerHTML = chapter.option[index].text;
    console.log(tab1.innerHTML);
  }

  for (let index = 0; index < 2; index++) {
    console.log(chapter.option.text);

    const tab2 = document.querySelector(".bouton3");
    tab2.innerHTML = chapter.option[index].text;
    console.log(tab2.innerHTML);
  }
}
//const remove = document.querySelector(".bouton2");

//remove.innerHTML =
