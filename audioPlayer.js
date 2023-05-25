// const fileInput = document.getElementById("audioFileInput");
// const audioPlayer = document.getElementById("audioPlayer");

// fileInput.addEventListener("change", (event) => {
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     const fileURL = URL.createObjectURL(file);
//     audioPlayer.src = fileURL;
//     document.querySelector("audio").style.visibility = "visible"
//   }
// });

const fileInput = document.getElementById("audioFileInput");
const audioPlayer = document.getElementById("audioPlayer");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  // Array of accepted file types
  const acceptedTypes = ["audio/mpeg", "audio/wav", "audio/ogg"];

  if (file && acceptedTypes.includes(file.type)) {
    const fileURL = URL.createObjectURL(file);
    audioPlayer.src = fileURL;
    document.querySelector("audio").style.visibility = "visible"
  } else {
    // File type is not accepted
    alert("Please select a valid audio file.");
    fileInput.value = ""; // Clear the file input field
  }
});


const fileInputPDF = document.getElementById('pdf-file');
const pdfObject = document.getElementById('pdf-object');

fileInputPDF.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);

    const embedPDF = document.createElement("embed");
    embedPDF.setAttribute("src", fileURL);

    document.querySelector(".container").appendChild(embedPDF);
});
