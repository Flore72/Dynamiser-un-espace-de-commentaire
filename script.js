const errorMessage = document.getElementById('error-message');
const form = document.querySelector('form');

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let message = document.getElementById('message');

// Ecouter la soumission du formulaire
form.addEventListener("submit", (event) => {

  // Empecher la soumission du formulaire
  event.preventDefault();

  // Récupération des 3 valeurs du champs de formulaire
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let message = document.getElementById('message');

  // Condition si les valeurs sont nulles

  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    alert("Tous les champs doivent être remplis");
    errorMessage.style.display = "block";
  } else {
    
     // Création des éléments correspondants au formulaire
    function addComment() {
      const commentList = document.getElementsById("comment-list")[0, 1];
      let newDiv = document.createElement("div");
      newDiv.id = "newComment";
      newDiv.body.appendChild(commentList);

      let titre = document.createElement("h3");
      titre.body.appendChild(commentList);

      let prenom = document.getElementById("first-name");
      prenom = document.querySelector("input");
      let newContent = document.createTextNode(input.value);
      newValue.innerHTML = "";
      newValue.appendChild(newContent);
      prenom.body.appendChild(titre);

      let nom = document.getElementById("last-name");
      nom = document.querySelector("input");
      let newContent0 = document.createTextNode(input.value);
      newValue.innerHTML = "";
      newValue.appendChild(newContent0);
      nom.body.appendChild(titre);

      let texte = document.createElement("p");
      p = document.document.getElementById("message");
      let newContent1 = document.createTextNode(input.value);
      newValue.innerHTML = "";
      newValue.appendChild(newContent1);
      texte.body.appendChild(commentList);
      errorMessage.style.display = "none";
    }
     form.reset();
  }
 
})
