class Pokemon{
    constructor(nome,url){
        this.nome = nome;
        this.url = url; //https://pokeapi.co/api/v2/pokemon
        this.id = this.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');  
        this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;

        this.preco = Math.floor(Math.random() * 100);
    }
    html(){
        const pokeDiv = document.createElement('div');
        pokeDiv.className = 'cards';
        pokeDiv.innerHTML = `
        <img src="${this.imagem}" alt="${this.nome}">
        <h2>${this.nome}</h2>
        <p class="PriceFrom"><s>R$ ${this.preco}</s></p>
        <p class="PriceTo">R$ ${(this.preco * 0.8).toFixed(2)}</p>
        
        <div class="CardButton">
            <img src="IMG/pokebola.png" alt="LogoPokemon"></img>
            <a href="#">Comprar</a>
        </div>`;
        return pokeDiv;
    }
    
}

async function GetPokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=32');

    const json = await response.json();
    return json;
}




//tudo sera executado apos a pagina carregar;
window.onload = async () => {
  const pokelist = document.querySelector('.maincontent');

  const response = await GetPokemons();
  
  const pokemons = response.results.map ((pokemon) => new Pokemon(pokemon.name,pokemon.url));

       

  pokemons.forEach((pokemon)=>{
    const html = pokemon.html();
    pokelist.appendChild(html)
  })
}

