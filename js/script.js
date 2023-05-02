
let membriTeam = [
    {nome: "giuseppe" , ruolo: "cuoco" , foto: "./foto1" },
    {nome: "marco" , ruolo: "cuoco" , foto: "./foto1" },
    {nome: "samuel" , ruolo: "cuoco" , foto: "./foto1" },
    {nome: "carlo" , ruolo: "cuoco" , foto: "./foto1" }
]


for (let i = 0; i < membriTeam.length; i++) {
    const membriEle = membriTeam[i];
    console.log( membriEle.nome)
    
    document.getElementById("name").innerText = membriEle.nome
}




