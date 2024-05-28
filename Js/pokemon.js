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
        <a href="index2.html?id=${this.id}">
            <img src="${this.imagem}" alt="${this.nome}" class="pokemons-image">
            <h2>${this.nome}</h2>
            <p class="PriceFrom"><s>R$ ${this.preco}</s></p>
            <p class="PriceTo">R$ ${(this.preco * 0.8).toFixed(2)}</p>
            
            <div class="CardButton">
                <img src="IMG/pokebola.png" alt="LogoPokemon"></img>
                <a href="index2.html?id=${this.id}" class="linkbotaocomprar">Comprar</a>
            </div>
        </a>`;
        
        return pokeDiv;
    }
    
}