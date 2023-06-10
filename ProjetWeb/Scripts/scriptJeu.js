(async function() {
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
      const paysInfo = await fetchCountries();
      const listPays = [];
      const taillePaysAll = paysInfo.length;
  
      for (let i = 0; i < 20; i++) {
        const randomIndex = genererAleatoire(0, taillePaysAll - 1);
        const pays = paysInfo[randomIndex];
        const name = pays.translations.fra.common;
        const flag = pays.flags.svg;
        listPays.push({ name, flag });
      }
  
      return listPays;
    }
  
    var score = 0;
    var NumeroQuestion = 0;
  
    document.addEventListener("DOMContentLoaded", async function() {
      const listpays = await RecuplistPays();
      var nameFlag;
  
      var imgFlag = document.getElementById("Flag");
      var numQuestionElement = document.getElementById("num");
      
        numQuestionElement.textContent = NumeroQuestion ;

      
      
  
      imgFlag.src = listpays[NumeroQuestion].flag;
  
      nameFlag = listpays[NumeroQuestion].name;
  
      console.log(nameFlag);
  
      document.getElementById("submit-response").addEventListener("click", function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page
        
  
        if (NumeroQuestion == 18) {
          document.getElementById("submit-response").textContent = 'Valider';
        }
        if(NumeroQuestion==19){
            document.getElementById("submit-response").disabled = true;
            document.getElementById("score").textContent = "Votre score est de "+ score;
        }
  
        var reponse = document.getElementById('user-response').value;
        var tableauReponse = document.querySelector('.tableauReponse table');

        if (reponse === nameFlag && NumeroQuestion < 20) {
          score += 1;
        }

        var newRow = document.createElement('tr');
      var drapeau = document.createElement('td');
      var imgDrapeau = document.createElement('img');
      imgDrapeau.src = listpays[NumeroQuestion].flag;
      imgDrapeau.setAttribute('height', '30px');
      drapeau.appendChild(imgDrapeau);

      
      var reponseSubmit = document.createElement('td');
      reponseSubmit.textContent = reponse;
      var reponse = document.createElement('td');
      reponse.textContent = nameFlag;

      newRow.appendChild(drapeau);
      newRow.appendChild(reponseSubmit);
      newRow.appendChild(reponse);
      tableauReponse.appendChild(newRow);
  
        NumeroQuestion += 1;
        numQuestionElement.textContent = NumeroQuestion ;
  
        if (NumeroQuestion < 20) {
          imgFlag.src = listpays[NumeroQuestion].flag;
          nameFlag = listpays[NumeroQuestion].name;
        }

        document.getElementById("user-response").value = "";
  
        // console.log(nameFlag);
      });
    });
  })();
  