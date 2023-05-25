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
  } else {
    // Extensão não suportada, mensagem de erro.
    alert("Please select a valid audio file.");
    fileInput.value = ""; // Limpa o campo de file input.
  }
});


// 3º Aqui, seguindo a mesma lógica do áudio, mas carregando o arquivo PDF que vai ser embedded na página.
const fileInputPDF = document.getElementById('pdf-file');
const pdfObject = document.getElementById('pdf-object');
let pdfCounter = 1; // Contador para gerar ID's unicos
let dropdownListCreated = false; // Checagem para saber se a lista dropdown está vazia.

// Usa-se um mesmo eventListener com uma callback function, criando uma URL para o arquivo PDF
fileInputPDF.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    // Como o site abre com um document.pdf de tela branca, ao carregar o arquivo, o display dessa página some. Então o ícone de whiteboard aparece e pode ser clicado para a função "togglePDF"
    document.getElementById("blank-page").style.display = "none";
    document.querySelector(".whiteboard").style.visibility = "visible";

    // Com o arquivo carregado, o JavaScript cria um elemento "embed" no qual o SRC vai ser o arquivo PDF. Por fim, fazemos um append desse embed ao div com classe ".container"
    const embedPDF = document.createElement("embed");
    const embedId = "pdf-embed-" + pdfCounter; // Aqui um ID unico é gerado
    embedPDF.setAttribute("id", embedId);
    embedPDF.setAttribute("src", fileURL);
    document.querySelector(".container").appendChild(embedPDF);

    if (!dropdownListCreated) {
        // Caso a lista dropdown não exista, ela é criada
        const dropdownList = document.createElement("select");
        dropdownList.setAttribute("id", "pdf-dropdown");
        dropdownList.addEventListener("change", function(event) {
            const selectedPDF = event.target.value;
            const embedElements = document.querySelectorAll(".container embed");
            for (let i = 0; i < embedElements.length; i++) {
                if (embedElements[i].id === selectedPDF) {
                    // Mostra o PDF selecionado
                    embedElements[i].style.display = "block";
                } else {
                    // Esconde os outros PDF
                    embedElements[i].style.display = "none";
                }
            }
        });

        // Append da dropdownlist no div pdf-holder
        document.getElementById("pdf-holder").appendChild(dropdownList);

        // Troca o status da dropdownlist criada para true
        dropdownListCreated = true;
    }

    // Nessa parte, o código basicamente adiciona uma nova opção para a lista dropdown para cada pdf que for carregado.

    // Seleciona a lista dropdown
    const dropdownList = document.getElementById('pdf-dropdown');
    // Cria um novo elemento <option>
    const option = document.createElement("option");
    // Coloca o ID na nova opção adicionada
    option.setAttribute("value", embedId);
    // Aqui, o nome do PDF será o nome da <option>
    option.textContent = file.name;
    // Adiciona a nova <option> dentro da dropdownlist
    dropdownList.appendChild(option);

    pdfCounter++; // aumenta a contagem para o próximo id unico
});

// 1º Aqui é selecionado os elementos de carregamento de vídeo e o container onde o vídeo será embedado.
const fileInputVideo = document.getElementById("videoFileInput");
const videoContainer = document.getElementById("videoContainer");

// 2º Nessa parte, adicionamos um "eventListener" aguardando por um evento de "change" (mudança). Quando o evento acontece, no caso, quando o arquivo de vídeo é selecionado, a callback function é executada.
fileInputVideo.addEventListener("change", (event) => {
  // Ao carregar o arquivo escolhido, ele fica salvo na constante "file"
  const file = event.target.files[0];

  // Aqui está definido um array de extensões de arquivo permitidas, que irá mostrar um erro caso a extensão não seja suportada.
  const acceptedTypes = ["video/mp4", "video/webm", "video/ogg"];

  // Essa conditional verifica 1-SE UM ARQUIVO FOI SELECIONADO e 2-SE A EXTENSÃO DO ARQUIVO É SUPORTADA.
  if (file && acceptedTypes.includes(file.type)) {
    // Se o tipo do arquivo for aceito, é criada uma URL do arquivo.
    const fileURL = URL.createObjectURL(file);

    // Remove any previously embedded video elements from the container
    videoContainer.innerHTML = "";

    // Create the video element
    const videoElement = document.createElement("video");
    videoElement.src = fileURL;
    videoElement.controls = true;

    // Append the video element to the video container
    videoContainer.appendChild(videoElement);
  } else {
    // Extensão não suportada, mensagem de erro.
    alert("Please select a valid video file.");
    fileInputVideo.value = ""; // Limpa o campo de file input.
  }
});

function togglePDF() {
  let whiteboard = document.getElementById("blank-page")
  if (whiteboard.style.display === "none") {
    whiteboard.style.display = "block"
  } else {
    whiteboard.style.display = "none"
  }
}
