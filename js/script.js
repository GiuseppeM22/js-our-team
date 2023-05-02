
let membriTeam = [
    {nome: "giuseppe" , ruolo: "cuoco" , foto: "./foto1" },
    {nome: "marco" , ruolo: "cuoco" , foto: "./foto1" },
    {nome: "samuel" , ruolo: "cuoco" , foto: "./foto1" },
    {nome: "carlo" , ruolo: "cuoco" , foto: "./foto1" }
]

for (const key in membriTeam) {
        const element = membriTeam[key];
        console.log(element)
     
        document.getElementById("team").innerText = membriTeam[key]
}
//document.getElementById("team").innerText = membriTeam
//console.log(membriTeam)

