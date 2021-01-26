onload = () => {
  document.querySelector('#bt-0').onclick = () => digito(0);
  document.querySelector('#bt-1').onclick = () => digito(1);
  document.querySelector('#bt-2').onclick = () => digito(2);
  document.querySelector('#bt-3').onclick = () => digito(3);
  document.querySelector('#bt-4').onclick = () => digito(4);
  document.querySelector('#bt-5').onclick = () => digito(5);
  document.querySelector('#bt-6').onclick = () => digito(6);
  document.querySelector('#bt-7').onclick = () => digito(7);
  document.querySelector('#bt-8').onclick = () => digito(8);
  document.querySelector('#bt-9').onclick = () => digito(9);
  document.querySelector('#bt-comma').onclick = virgula;
  document.querySelector('#bt-00').onclick = zeroZero;
  document.querySelector('#bt-ac').onclick = limpa;
  document.querySelector('#bt-divide').onclick = () => operador("/");
  document.querySelector('#bt-times').onclick = () => operador("*");
  document.querySelector('#bt-minus').onclick = () => operador("-");
  document.querySelector('#bt-plus').onclick = () => operador("+");
  document.querySelector('#bt-equals').onclick = () => calcula();
  
};

let sValor = "0"; /* valor que sera apresentado no display */
let ehNovoNumero = true; /* Indica se o próximo digito sera um novo número */
let valorAnterior = null; /* Valor acumulado para o calculo */
let operacaoPendente = null; /* operação acumulada */
let ValorX = null;

/* atualização do visor */
const atualizaVisor = () => {
  /* let parte = sValor.split(',');
    console.log(parte[0]);
    console.log(parte[1]); */
  /* desistruturação de vetor */
  let [parteInteira, parteDecimal] = sValor.split(",");
  let v = "";
  c = 0;
  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (++c > 3) {
      v = "." + v;
      c = 1;
    }
    v = parteInteira[i] + v;
  }
  v = v + (parteDecimal ? "," + parteDecimal : "");
  document.querySelector("#display").innerText = v;
};

/* tratamento do clique no botao digito ok*/
const digito = (n) => {
  /*  console.log(n); */
  if (ehNovoNumero) {
    sValor = "" + n;
    ehNovoNumero = false;
  } else sValor += n;
  atualizaVisor();
};

/* tratamento do clique no botão da virgula (ponto decimal) ok*/
const virgula = () => {
  if (ehNovoNumero) {
    sValor = "0,";
    ehNovoNumero = false;
  } else if (sValor.indexOf(",") == -1) sValor += ",";
  atualizaVisor();
};

/* tratamento para botão duplo zero. */
const zeroZero = () => {
  if (ehNovoNumero == false) {
    sValor = sValor + "00";

    ehNovoNumero = false;
    atualizaVisor();
  } else atualizaVisor();
};

/* tratamento do clique no botão AC (All clear) ok */
const limpa = () => {
  ehNovoNumero = true;
  valorAnterior = 0;
  sValor = '0';
  operacaoPendente = null;
  atualizaVisor();
};

/* Funções em construção */

/* Converte a string do valor para um número real */
const valorAtual = () => parseFloat(sValor.replace(',', '.'));

/* tratamento do clique nos botões operadores */
const operador = (op) => {
  calcula();
  valorAnterior = valorAtual();
  operacaoPendente = op;
  ehNovoNumero = true; /* proxio representa novo número */
  
};

const calcula = () => {
    if(operacaoPendente != null){
        let resultado;
        switch(operacaoPendente){
            case '+' : resultado = valorAnterior + valorAtual(); break;
            case '-' : resultado = valorAnterior - valorAtual(); break;
            case '*' : resultado = valorAnterior * valorAtual(); break;
            case '/' : resultado = valorAnterior / valorAtual(); break;
            
        }
        sValor = resultado.toString().replace('.', ',');

    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
}
