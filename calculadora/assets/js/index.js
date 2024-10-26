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
                    this.num.push(el.innerText)
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
                
                if(el.classList.contains('btn-dir') && el.innerText === '+' || el.innerText === '-' || el.innerText === '*' || el.innerText === '/'){
                    this.operador = el.innerText
                    this.btnParaVisor(el.innerText)   
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
        },

        operacao(){
            let numeros = this.num.map(Number)
            switch (this.operador){
                case '+': 
                    resultado = numeros.reduce((acc, num) => acc + num, 0)
                    break
                case '-':
                    resultado = numeros.reduce((acc, num) => acc - num, 0)
                    break
                case '*':
                    resultado = numeros.reduce((acc, num) => acc * num, 0)
                    break  
                case '/':
                    resultado = numeros.reduce((acc, num) => acc / num, 0)
                    break
            }
            this.visor.innerHTML = resultado  
            this.num =[]
            this.operador = ''
        },
    }
}

const calc = calculadora()
calc.inicia()