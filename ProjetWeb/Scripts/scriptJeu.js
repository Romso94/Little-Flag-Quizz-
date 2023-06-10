
async function fetchCountries() {
    try {
      const reponse = await fetch('https://restcountries.com/v3.1/all');
      const data = await reponse.json();
      return data;
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la récupération des données des pays :', error);
      throw error;
    }
  }
  

  function genererAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 async function RecuplistPays() {
    const paysInfo= await fetchCountries();
    const listPays = [];
    const taillePaysAll = paysInfo.length;
  
    for (let i = 0; i < 20; i++) {
      const randomIndex = genererAleatoire(0, taillePaysAll - 1);
      const pays = paysInfo[randomIndex];
      const name = pays.name.common;
      const flag = pays.flags.svg;
      listPays.push({ name, flag });
    }
  
    return listPays;
  }
  
  
  RecuplistPays()
    .then(listpays =>{
        console.log(listpays);
    })
    .catch(error => {
        console.log(error);
      });
 