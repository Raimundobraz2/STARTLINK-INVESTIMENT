//Código para adicionar imagem para publicar

const fileInput = document.getElementById('fileInput');
  const imagePreview = document.getElementById('imagePreview');

  fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        imagePreview.querySelector('img').setAttribute('src', event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.querySelector('img').setAttribute('src', '#');
    }
  });

