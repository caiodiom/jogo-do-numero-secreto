let jogoIniciado = false;
let numeroSecreto;
let tentativas = 0;

document.getElementById('mensagem').textContent = (`Digite um número para ser o seu limite!`);

function iniciarJogo() {
  if (jogoIniciado) {
    return;
  }

  
  

  jogoIniciado = true;
  let numeroMaximo = document.getElementById('numeroMaximo').value;
  

  // Validação do número máximo
  if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
    alert("Por favor, insira um número válido maior que zero.");
    return;
  }

  numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
  tentativas = 0;
  document.getElementById('mensagem').textContent = (`Adivinhe o número entre 1 e ${numeroMaximo}!`);

  document.getElementById('botaoVerificar').disabled = false;
  document.getElementById('botaoIniciar').disabled = true;
  document.getElementById('botaoReiniciar').disabled = false; // Habilita o botão Reiniciar
  
  

}

function verificarChute() {
  let chute = parseInt(document.getElementById('chute').value);

  // Validação do chute
  if (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
    const numeroMaximoInput = document.getElementById("numeroMaximo");
    const numeroMaximo = numeroMaximoInput.value;
    
    alert(`Por favor, insira um número entre 1 e ${numeroMaximo}.`);
    return;

  }

  tentativas++;

  if (chute === numeroSecreto) {
    document.getElementById('mensagem2').textContent = '🏆';
    if (tentativas === 1) {
      document.getElementById('mensagem').textContent = `Parabéns! Você acertou em ${tentativas} tentativa!`;
    } else {
      document.getElementById('mensagem').textContent = `Parabéns! Você acertou em ${tentativas} tentativas.`;
    }
    
    document.getElementById('botaoVerificar').disabled = true;
    document.getElementById('botaoIniciar').disabled = false;
    
  } else if (chute < numeroSecreto) {
    document.getElementById('mensagem').textContent = `🚨 O número secreto é ⬆️ maior ⬆️ que ${chute}`;
   
  } else {
    document.getElementById('mensagem').textContent = `🚨 O número secreto é ⬇️ menor ⬇️ que ${chute}`;
    
  }
  

  // Limpa o campo de entrada após o chute
  document.getElementById('chute').value = '';
  document.getElementById('chute').value = '';
  document.getElementById('chute').focus();
}

function reiniciarJogo() {
  jogoIniciado = false;
  numeroSecreto = undefined;
  tentativas = 0;
  document.getElementById('numeroMaximo').value = '';
  document.getElementById('chute').value = '';
  document.getElementById('mensagem').textContent = '';
  document.getElementById('mensagem2').textContent = '';
  
  document.getElementById('botaoVerificar').disabled = true;
  document.getElementById('botaoIniciar').disabled = false;
  document.getElementById('botaoReiniciar').disabled = true; // Desabilita o botão Reiniciar
}


// Função para ocultar o teclado
function ocultarTeclado() {
  const inputChute = document.getElementById('chute');
  inputChute.blur();
}

document.getElementById('botaoVerificar').addEventListener('click', () => {
  // Verifica se a largura da tela é menor que um determinado valor (ajuste conforme necessário)
  if (window.innerWidth <= 825) {
    ocultarTeclado();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('botaoVerificar').click();
  }
});