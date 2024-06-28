function encriptar() {
    let textElement = document.getElementById("textConvert");
    let text = textElement.value;
    
    // Reemplazos para encriptar
    let encriptado = text.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");

    // Actualiza el texto en el div de salida
    document.querySelector('.output_result_text').innerText = encriptado;

    // Muestra el div de resultado y oculta el div de mensaje inicial
    document.querySelector('.output_clear').classList.add('hidden');
    document.querySelector('.output_result').classList.remove('hidden');
    document.querySelector('.output_result').classList.add('show');
}

function desencriptar() {
    let textElement = document.getElementById("textConvert");
    let text = textElement.value;

    // Reemplazos para desencriptar
    let desencriptado = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    // Actualiza el texto en el div de salida
    document.querySelector('.output_result_text').innerText = desencriptado;

    // Muestra el div de resultado y oculta el div de mensaje inicial
    document.querySelector('.output_clear').classList.add('hidden');
    document.querySelector('.output_result').classList.remove('hidden');
    document.querySelector('.output_result').classList.add('show');
}

function copiarTexto() {
    const texto = document.querySelector('.output_result_text').innerText;
    navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
}

// Ajustar el tamaño del textarea automáticamente
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

// Agregar el evento input para ajustar el tamaño del textarea automáticamente
document.getElementById('textConvert').addEventListener('input', function() {
    autoResize(this);
});