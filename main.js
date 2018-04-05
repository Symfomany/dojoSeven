/**
 * Take a sentence to return a Verlan language
 * @param {String} phrase
 */
function verlan(phrase) {
  // you code here
  const regexConsonne = RegExp("[^aeuyio]{2,}", "i"); // regex qui selectionne seulement consonne
  let mots = phrase.split(" "); // Separe les mot
  console.log(mots);

  let verlan = [],
    newSentence = phrase;

  for (const mot of mots) {
    // boucle pour parcourir mes mots
    if (mot.length >= 6 && regexConsonne.test(mot)) {
      // Prend mes mot sup a 6 et app la regex
      const moitierUn = mot.slice(0, Math.floor(mot.length / 2)); // recupere la moitie
      const moitierDeux = mot.slice(Math.floor(mot.length / 2));

      //   console.log(verlan);
      const verlanDeux = `${moitierDeux}${moitierUn}`;
      newSentence = newSentence.replace(mot, verlanDeux);
    }
  }

  return newSentence;
}

let resultat = verlan("Les maisons près de la fontaine dans le quartier");
console.log(resultat);
