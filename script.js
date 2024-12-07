let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const itemsVisible = 1;  // Apenas 1 item será visível
const dotsContainer = document.querySelector('.dots');
const advancePercentage = 50;  // Reduzindo o avanço para 50% da largura do item

// Função para mover o slide
function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const maxIndex = totalItems - itemsVisible;

    currentIndex = (currentIndex + direction + maxIndex + 1) % (maxIndex + 1);
    carousel.style.transform = `translateX(-${currentIndex * advancePercentage}%)`;  // Avançando 50% da largura do item

    updateDots();
}

// Função para atualizar os dots
function updateDots() {
    const dots = document.querySelectorAll('.dots span');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Criando os dots dinamicamente
function createDots() {
    // Ajustando a quantidade de dots para o total de itens
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('span');
        dotsContainer.appendChild(dot);
    }
    updateDots();  // Inicializa os dots com o estado correto
}

// Iniciar o carrossel e os dots
createDots();
moveSlide(0);
