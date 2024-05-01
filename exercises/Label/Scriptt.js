document.getElementById('generateBtn').addEventListener('click', function() {
    var text = document.getElementById('textInput').value;
    var textColor = document.getElementById('textColorPicker').value;
    var bgColor = document.getElementById('bgColorPicker').value;
    var alignment = document.getElementById('alignment').value;
    var fontSize = document.getElementById('fontSize').value;

    if (!text) {
        alert('Please enter some text!');
        return;
    }

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 400;

    // Background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text color
    ctx.fillStyle = textColor;

    // Text alignment
    ctx.textAlign = alignment;

    // Font size
    ctx.font = fontSize + 'px Arial';

    // Text
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Convert canvas to data URL
    var dataURL = canvas.toDataURL();

    // Display image
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '<img src="' + dataURL + '" alt="Generated Image">';

    // Create download link
    var downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'generated_image.png';
    downloadLink.textContent = 'Download Image';
    downloadLink.style.display = 'block';
    downloadLink.style.marginTop = '20px';
    imageContainer.appendChild(downloadLink);
});
