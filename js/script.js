//Código para adicionar imagem para publicar

document.getElementById('uploadForm').addEventListener('submit', function(event) {
event.preventDefault(); // Evita o envio padrão do formulário

  // Obtém o input do tipo file
  var fileInput = document.getElementById('foto');
  // Obtém a primeira foto selecionada (supondo que não há seleção múltipla)
  var file = fileInput.files[0];

  if (file) {
    // Cria um objeto FileReader para ler o conteúdo do arquivo
    var reader = new FileReader();

    // Define a função de callback para quando a leitura for concluída
    reader.onload = function(e) {
      // Obtém o elemento de visualização da imagem
      var previewImage = document.getElementById('previewImage');
      // Atualiza o atributo src da imagem para exibir a foto carregada
      previewImage.src = e.target.result;
      // Exibe o contêiner de visualização da foto
      document.getElementById('previewContainer').style.display = 'block';
    };

    // Lê o conteúdo do arquivo como uma URL de dados
    reader.readAsDataURL(file);
  }
});

