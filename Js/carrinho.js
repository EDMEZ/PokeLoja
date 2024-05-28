function carrinho(){
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