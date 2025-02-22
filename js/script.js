// Seleciona os elementos
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
const clickableImage = document.getElementById('clickableImage');

// Função para abrir o popup após 5 segundos
setTimeout(() => {
    popup.style.display = 'flex';
}, 3000); // 5000 milissegundos = 5 segundos


// Função para fechar o popup
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fechar o popup clicando fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Evento de clique na imagem
clickableImage.addEventListener('click', () => {
    // alert('Imagem clicada! Realizando uma ação...');
    // Aqui você pode executar a ação desejada, como redirecionamento:
    window.location.href = "https://www.instagram.com/otreinadoraugusto/";
});
