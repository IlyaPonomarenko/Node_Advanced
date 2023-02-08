
(function(){
document.addEventListener("DOMContentLoaded",init);

async function init(){
    try {
        const data = await fetch("http://localhost:4000/api/computer",{mode:"cors"})
        const computers = await data.json()
        const resultset=document.getElementById("resultset");
        for (const computer of computers) {
            const tr= document.createElement("tr");
            tr.appendChild(createCell(computer.id))
            tr.appendChild(createCell(computer.name))
            tr.appendChild(createCell(computer.type))
            tr.appendChild(createCell(computer.processor))
            resultset.appendChild(tr)
        }
    } catch (error) {
        document.getElementById("messagearea").innerHTML=`<p class="error">${error.message}</p>`
    }
}
function createCell(data){
    const td = document.createElement("td");
    td.textContent=data;
    return td
}
})();