window.addEventListener("DOMContentLoaded", async () => {    
    const imgDiv = document.getElementById('evo-img');
    const local = await JSON.parse(window.localStorage.getItem('estados'));
    let estadosList = [];

    if (local == null) { window.localStorage.setItem('estados', JSON.stringify([])) }

    let urls = [];
    let counter = 0;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(async (res) => {
            const response = await res.json();        
            for(var i = 0; i <= 26; i++) {                
                estadosList.push(response[i].nome)
            }
            window.localStorage.setItem('tasks', JSON.stringify(estadosList));
            render(estadosList)            
        })
        .catch((error) => {
            console.error(error);
        })

    function render(array) {
        const container = document.getElementById('container-estados');
        container.innerHTML = ""

        array.forEach((el) => {
            const p = document.createElement('p');
            p.textContent = el;
            container.appendChild(p)
        })
    }
})