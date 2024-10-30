function calculadora(){
    return{
        visor: document.querySelector('p#visor'),
        operador: '',
        num: [''],
        resultado: 0,
        
        inicia(){   
            this.clique()
        },

        clique(){
            document.addEventListener('click', function(e){
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaVisor(el.innerText)
                    this.num += el.innerText
                } 
                
                if(el.classList.contains('btn-cima')){
                    if(el.innerText === '(' || el.innerText === ')'){
                        this.btnParaVisor(el.innerText)
                    }
                    if(el.innerText === 'AC'){
                    this.limpaVisor()
                    this.resultado = 0
                    } 
                } 

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                
                if(el.classList.contains('btn-dir') && el.innerText === '+' || el.innerText === '-' || el.innerText === '*' || el.innerText === '/'){
                    let ultimoDigito = this.visor.innerText.slice(-1)
                    if(['+', '-', '*', '/'].includes(ultimoDigito)){
                        return
                    } else{ 
                        this.resultado = parseFloat(this.num)
                    this.operador = el.innerText
                    this.num = ''
                    this.btnParaVisor(el.innerText)
                    }
                       
                }

                if(el.classList.contains('btn-dir') && el.innerText === '='){
                    this.operacao()
                }
                
            }.bind(this))
        },

        btnParaVisor(valor){
            this.visor.innerHTML += valor
        },

        limpaVisor(){
            this.visor.innerHTML = ''
            this.num = []   
            this.operador = ''
        },

        apagaUm(){
            this.num = this.num.slice(0, -1);
            this.visor.innerHTML = this.visor.innerHTML.slice(0, -1);
        },

        operacao(){
            let numeroAtual = parseFloat(this.num)
            switch (this.operador){
                case '+': 
                resultado = this.resultado += numeroAtual;
                break;
            case '-':
                resultado = this.resultado -= numeroAtual;
                break;
            case '*':
                resultado = this.resultado *= numeroAtual;
                break;  
            case '/':
                resultado = this.resultado /= numeroAtual;
                break;
            }
            this.visor.innerHTML = resultado  
            this.num =[]
            this.operador = ''
        },
    }
}

const calc = calculadora()
calc.inicia()