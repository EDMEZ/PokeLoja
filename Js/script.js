let page = 0;

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

    btnProx.onclick =  async() =>{
        setTimeout(async() => {
        const response = await getPokemons(page += 1);
        listaPokemons(response.results);
        btnant.style.visibility = 'visible';
            
        }, 500);
    }
};
function btnAnt(){
    const btnant = document.querySelector('.btn-ant');

    btnant.onclick = async() =>{
        setTimeout(async()=>{
            const response = await getPokemons(page -= 1);
            listaPokemons(response.results);
        },500)
    }
}

function listaPokemons(pokemonsApi){
    const pokelist = document.querySelector('.maincontent');
    pokelist.innerHTML = '';
    const pokemons = pokemonsApi.map((pokemon) => new Pokemon(pokemon.name,pokemon.url));
    
    pokemons.forEach((pokemon) => {
        const html = pokemon.html();
        pokelist.appendChild(html);
    })
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
    document.body.addEventListener('keydown',(e)=>{
        if(e.key === 'Escape'){
            if(document.body.className.includes(opencartclass)){
                document.body.className = '' 
            }
        }
    })
    

    const btnCarrinho = document.querySelector('#Botaocarrinho');
    btnCarrinho.addEventListener('click',(event)=>{
        event.preventDefault();
        
        if(document.body.className.includes(opencartclass)){
            document.body.className = '' 
        }else{
            document.body.className = opencartclass;
        };
        
    });
    const btnfechacarrinho = document.querySelector('.fechaCarrinho');
    btnfechacarrinho.addEventListener('click',(event)=>{
        event.preventDefault();
        const closecartclass = '';
        document.body.className = closecartclass;
    });
    
    const opencartclass = 'carrinho-aberto';
    
    const carrinho = document.querySelector('.carrinho');
    carrinho.addEventListener('mouseover',(event)=>{
        console.log('teste')
    })
    
}

