document.getElementById('botao-toggle').addEventListener('click', function() {
    var elemento = document.getElementById('elemento');
    // Verifica se o elemento está oculto
    if (elemento.classList.contains('d-none')) {
      // Se estiver oculto, mostra o elemento removendo a classe 'd-none'
      elemento.classList.remove('d-none');
      // Muda o texto do botão para refletir a funcionalidade atual
      this.textContent = 'Ocultar Elemento';
    } else {
      // Se estiver visível, oculta o elemento adicionando a classe 'd-none'
      elemento.classList.add('d-none');
      // Muda o texto do botão para refletir a funcionalidade atual
      this.textContent = 'Mostrar Elemento';
    }
  });