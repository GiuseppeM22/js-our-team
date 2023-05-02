//creiamo un array di oggetti
    let membriTeam = [
    {nome: "Angela Caroll" , ruolo: "Chief Editor" , foto: "./img/angela.jpg" },
    {nome: "Barbara Ramos" , ruolo: "Graphic Designer" , foto: "./img/barbara.jpg" },
    {nome: "Angela Lopez" , ruolo: "Social Media Manager" , foto: "./img/lopez.jpg" },
    {nome: "Scott Estrada" , ruolo: "Developer" , foto: "./img/scott.jpg" },
    {nome: "Walter Gordon" , ruolo: "Office Manager" , foto: "./img/walter.jpg" },
    {nome: "Wayne Barnett" , ruolo: "Founder & CEO" , foto: "./img/wayne.jpg" }

]

// cicliamo sull'array per estrapolare il singolo oggetto
for (let i = 0; i < membriTeam.length; i++) {
    const membriEle = membriTeam[i];
    console.log( membriEle.nome)
    
    // per ogni oggetto andiamo a creare dei tag html che conterranno i nostri elemtni dell'array
  let contenitore = document.getElementById("container")
  let box = createElement ("div")
  box.classList.add("box")
  appendElement (contenitore, box)

  let nome = createElement ("h4")
  box.appendChild(nome)
  nome.innerHTML += membriEle.nome
  
  let ruolo = createElement ("p")
  appendElement (box, ruolo)
  ruolo.innerHTML += membriEle.ruolo

  let foto = createElement ("img")
  foto.src = membriEle.foto
  appendElement (box, foto)
  
}


/*********************** FUNZIONI ********************/

function createElement (element) {
   return document.createElement(element)
}

function appendElement (appendElement, element){
    return appendElement.appendChild(element)
}



