function calculadora(){
    return{
        visor: document.querySelector('p#visor'),


        inicia(){   
            this.clique()
        },

        clique(){
            document.addEventListener('click', function(e){
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaVisor(el.innerText)
                } 
                
                if(el.classList.contains('btn-cima') && el.innerText === 'AC'){
                    this.limpaVisor()
                } 
                if(el.classList.contains('btn-dir')){
                    switch (el.innerText){
                    case '+': 
                        this.btnParaVisor(el.innerText)
                        break
                }   
                }
                
            }.bind(this))
        },

        btnParaVisor(valor){
            this.visor.innerHTML += valor
        },

        limpaVisor(){
            this.visor.innerHTML = ''
        }

    }
}

const calc = calculadora()
calc.inicia()