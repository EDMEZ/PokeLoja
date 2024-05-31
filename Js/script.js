let page = 0;
let currentpage = 0;
let pokemonsData = [];
async function getPokemons(page = 0){
    const pokelist = document.querySelector('.maincontent');
    pokelist.innerHTML = '<div>Carregando Pokemons...</div>';

    const limit = 20;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);

    const json = await response.json();

    const pages = Math.ceil(json.count / limit);
    
    window.scrollTo({top:0,behavior:'smooth'});
    
    return json;
}

async function temAnterior (page){
    const btnant = document.querySelector('.btn-ant');

    if(page === 0){
        btnant.style.visibility = 'hidden';
    }
    
};

function btnProx(){
    const btnProx = document.querySelector('.btn-prox');
    const btnant = document.querySelector('.btn-ant');

    btnProx.onclick =  async function paginaProx(){
        setTimeout(async() => {
        const response = await getPokemons(page += 1);
        listaPokemons(response.results);
        btnant.style.visibility = 'visible';
        
        return currentpage += 1;

        }, 500);
        
    }
};
function btnAnt(){
    const btnant = document.querySelector('.btn-ant');

    btnant.onclick = async function paginaAnt(){
        setTimeout(async()=>{
            const response = await getPokemons(page -= 1);
            listaPokemons(response.results);
        },500)
        return currentpage -= 1;
    }

}


function listaPokemons(pokemonsApi){
    const pokelist = document.querySelector('.maincontent');
    pokelist.innerHTML = '';
    const pokemons = pokemonsApi.map((pokemon) => new Pokemon(pokemon.name,pokemon.url));
    
    this.pokemonsData = pokemons;

    pokemons.forEach((pokemon) => {
        const html = pokemon.html();
        pokelist.appendChild(html);
    })
    const buybutton = document.querySelectorAll('.CardButton');
    
    buybutton.forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            event.preventDefault();
            const id = event.target.getAttribute('data-id');
            
            const pokemon = this.pokemonsData.find((pokemon)=>pokemon.id == id );
            
            window.carrinho.adicionar(pokemon);
            const total = window.carrinho.itens.length;
            window.carrinho.total = total;
            
        })
    });
};


//tudo sera executado apos a pagina carregar;
window.onload = async () => {
    setTimeout(async()=>{
        const response = await getPokemons(page);

        listaPokemons(response.results);
        btnProx();
        btnAnt();
        temAnterior(page);
    },1)
}

