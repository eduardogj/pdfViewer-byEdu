// 1º Aqui é selecionado os elementos de carregamento de áudio e o player de audio built-in no navegador.
const fileInput = document.getElementById("audioFileInput");
const audioPlayer = document.getElementById("audioPlayer");

// 2º Nessa parte, adicionamos um "eventListener" aguardando por um evento de "change" (mudança). Quando o evento acontece, no caso, quando o arquivo de áudio é selecionado, a callback function é executada.
fileInput.addEventListener("change", (event) => {
  // Ao carregar o arquivo escolhido, ele fica salvo na constante "file"
  const file = event.target.files[0];

  // Aqui está definido um array de extensões de arquivo permitidas, que irá mostrar um erro caso a extensão não seja suportada.
  const acceptedTypes = ["audio/mpeg", "audio/wav", "audio/ogg"];

  // Essa conditional verifica 1-SE UM ARQUIVO FOI SELECIONADO e 2-SE A EXTENSÃO DO ARQUIVO É SUPORTADA.
  if (file && acceptedTypes.includes(file.type)) {
    // Se o tipo do arquivo for aceito, é criado uma URL do arquivo.
    const fileURL = URL.createObjectURL(file);
    // Aqui, a URL do arquivo é injetada no player de audio HTML.
    audioPlayer.src = fileURL;

    // Por fim, as três linhas abaixo fazem alterações na interface.
    // 1- O player de audio, que está configurado como visibility=hidden, volta a aparecer
    // 2 e 3- O ícone de "PLAY", usado para abrir a caixa de seleção de arquivo, desaparece, fazendo com que o ícone de "trocar de áudio" apareça.
    document.querySelector("audio").style.visibility = "visible"
  } else {
    // Extensão não suportada, mensagem de erro.
    alert("Please select a valid audio file.");
    fileInput.value = ""; // Limpa o campo de file input.
  }
});
