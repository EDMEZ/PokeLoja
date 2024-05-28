class Pokemon{
    constructor(options){
        this.name = options.name;
        this.types = options.types.map(type => type.type.name);
        this.ability = options.abilities.map(ability => ability.ability.name);
    }
}  

function getQueryparameters(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    return params
}


async function getPokemonsData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}    
const maincontent = document.querySelector('.pokemon');
window.onload = async function(){
    const {id} = getQueryparameters();
    try{
        const data = await getPokemonsData(id);
    
        const pokemon = new Pokemon(data);
        console.log(pokemon);
       
       const maincontent = document.querySelector('.pokemon');
    }catch(error){
        maincontent.innerHTML = `<div class="error">Não encontrado</div>`;
    }
    
}