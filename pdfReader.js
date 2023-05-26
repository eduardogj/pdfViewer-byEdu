// 3º Aqui carregamos o arquivo PDF que vai ser embedded na página.
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

function togglePDF() {
    let whiteboard = document.getElementById("blank-page")
    if (whiteboard.style.display === "none") {
      whiteboard.style.display = "block"
    } else {
      whiteboard.style.display = "none"
    }
  }
