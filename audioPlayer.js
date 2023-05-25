// A aplicação web "pdfViewer-byEdu" funciona da seguinte forma:

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
    document.querySelector(".fa-play").style.display = "none"
    document.getElementById("change-audio-icon").style.display = "block"
  } else {
    // Extensão não suportada, mensagem de erro.
    alert("Please select a valid audio file.");
    fileInput.value = ""; // Limpa o campo de file input.
  }
});

// 3º Aqui, seguindo a mesma lógica do áudio, mas carregando o arquivo PDF que vai ser embedded na página.
const fileInputPDF = document.getElementById('pdf-file');
const pdfObject = document.getElementById('pdf-object');

// Usa-se um mesmo eventListener com uma callback function, criando uma URL para o arquivo PDF
fileInputPDF.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    // Como o site abre com um document.pdf de tela branca, ao carregar o arquivo, o display dessa página some. Então o ícone de whiteboard aparece e pode ser clicado para a função "togglePDF"
    document.getElementById("blank-page").style.display = "none"
    document.querySelector(".whiteboard").style.visibility = "visible"

    // Com o arquivo carregado, o JavaScript cria um elemento "embed" no qual o SRC vai ser o arquivo PDF. Por fim, fazemos um append desse embed ao div com classe ".container"
    const embedPDF = document.createElement("embed");
    embedPDF.setAttribute("src", fileURL);
    document.querySelector(".container").appendChild(embedPDF);
});


function togglePDF() {
  let whiteboard = document.getElementById("blank-page")
  if (whiteboard.style.display === "none") {
    whiteboard.style.display = "block"
  } else {
    whiteboard.style.display = "none"
  }
}