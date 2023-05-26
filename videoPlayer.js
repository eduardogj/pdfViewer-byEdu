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

        // Remove outro vídeo do container, caso um já tenha sido criado
        videoContainer.innerHTML = "";

        // Cria-se o elemento vídeo
        const videoElement = document.createElement("video");
        videoElement.id = "videoDisplay";
        videoElement.src = fileURL;
        videoElement.controls = true;

        const closeVideoBtn = document.createElement("button");
        closeVideoBtn.classList.add("closeVideoBtn");
        closeVideoBtn.innerHTML = "x";
        closeVideoBtn.addEventListener("click", closeVideo);

        document.getElementById("container").style.display = "none";
        document.getElementById("blank-page").style.display = "none";

        // Faz o append do video e do botão no container de video
        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(closeVideoBtn);
    } else {
        // Extensão não suportada, mensagem de erro.
        alert("Please select a valid video file.");
        fileInputVideo.value = ""; // Limpa o campo de file input.
    }
});

function closeVideo() {
    const videoElement = document.querySelector("video");
    const closeVideoBtn = document.querySelector(".closeVideoBtn");
    videoElement.remove();
    closeVideoBtn.remove();
    document.getElementById("container").style.display = "block";
    document.getElementById("blank-page").style.display = "block";
}
