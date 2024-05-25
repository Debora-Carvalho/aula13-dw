//tipos de variaveis
var num =1;
var txt = 'Olá'
var logico_v = true;
var logico_f = false;
var lista_mesmo_tipo = ['Arroz', 'Feijao', 'Batata']
var lista_tipo_mesclado = ['Nota', 10, 'Nota', 5]
var objeto = {
    "nome": "Francisco",
    "idade":31,
    "altura":1.78,
    "situacao":true,
    "linguage_fav": ['Java', 'JS', 'PHP']
} //instanciar um objeto sem ter uma classe 

var vazio = null;
var indefinido = undefined;

//exibindo o conteudo das variaveis
console.log(num,txt,logico_v,
    logico_f,lista_mesmo_tipo,lista_tipo_mesclado,objeto,vazio, indefinido)

//re-atribuicao de valores
txt='Texto substituído'

//re-atribuicao de dados
logico_v='valores'

console.log(txt,logico_v)

//objeto por dentro do objeto ou objeto alinhado ou contido
var aluno = {
    "nome": "João",
    "dt_nascimento": "25/05/2002",
    "endereco": 
        {"rua":"abc,123",
        "cidade": "São Paulo",
        "uf": "SP"
    }
}

//escopo das variaveis
//variaveis locais e globais

var global="Eu sou global"
console.log(global) //todo arquivo javascript irá enxergar esta variavel 

//criando uma função
function minha_funcao(){
    //entre parenteses, colocamos os parâmetros de entrada da função
    //esta variável está por dentro de um escopo
    var local = "Eu sou local";
    console.log(local)
}


//chamada de funcao - utilizada para executar a mesma na raiz
minha_funcao()

console.log(local,global)
//nao é possível chamar uma variavel fora do escopo


//var, let e const 
function teste_var(){
    var x = 10
    if (x){
        var x = 5;
        console.log(x)
    }
    console.log(x)
}
teste_var()

function teste_let(){
    let x = 10
    if (x){
        let x = 5;
        console.log(x)
    }
    //variaveis do tipo constante nao permite re-atribuicao ed valor
    //x = 11
    console.log(x)
}  //utilizar let como variavel é uma boa prática, var nao é mais utilizado

teste_let()

function teste_const(){
    const x = 10
    if (x){
        const x = 5;
        console.log(x)
    }
    console.log(x)
} 
teste_const()

