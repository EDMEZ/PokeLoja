
class carrinho {
    btnCarrinho = document.querySelector('#Botaocarrinho');
    btnfechacarrinho = document.querySelector('.fechaCarrinho');
    itens = [];
    total = 0;
    totalpreco = 0;
    constructor(){
        this.btnCarrinho.addEventListener('click',this.abrircarrinho);        
        this.btnfechacarrinho.addEventListener('click',this.fecharcarrinho);
        document.body.addEventListener('keydown',this.fecharcarrinho2);
        
    };
    
    abrircarrinho(event){
        event.preventDefault();
        const opencartclass = 'carrinho-aberto';
            
        if(document.body.className.includes(opencartclass)){
            document.body.className = '' 
        }else{
            document.body.className = opencartclass;
        };
    }
    fecharcarrinho(event){
        event.preventDefault();
        const closecartclass = '';
        document.body.className = closecartclass; 
    } 
    multi(n1,n2){
        return n1 * n2;
    }
    soma(n1,n2){
        return n1+n2;
    }
    adicionar(pokemon){
        this.itens.push(pokemon);
    }
    
}
document.body.addEventListener('keydown',(e) => {
    const opencartclass = 'carrinho-aberto';
    
    if(e.key === 'Escape'){
        if(document.body.className.includes(opencartclass)){
            document.body.className = '' ;
        }
    }
});

window.addEventListener('load',async() =>{
    window.carrinho = new carrinho();
});
