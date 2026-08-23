/*
// public/js/pizza.js

Este script é responsável por mostrar o botão de "Gostou? Me pague uma pizza!" com uma animação suave.
Ele deve ser chamado quando o usuário completar uma ação (ex: gerar um QR Code, calcular algo, etc).
A função pedir_pizza() remove as classes que escondem o botão e as classes de animação inicial, permitindo que a transição ocorra.
Certifique-se de que o elemento com id "donation-wrapper" esteja presente no HTML e tenha as classes iniciais de animação (ex: opacity-0, translate-y-4, scale-95).
Você pode chamar pedir_pizza() manualmente ou automaticamente após certas ações, dependendo da sua preferência.

Autor: Renato Monteiro Batista https://github.com/renatomb
Site: https://dinheiro.tech
Data: 2026-03-03

*/


function pedir_pizza() {
  // Pega TODOS os elementos com a classe donation-wrapper
  const wrappers = document.querySelectorAll('.donation-wrapper');

  wrappers.forEach(wrapper => {
    // Remove hidden primeiro (torna visível, mas ainda opacity 0)
    wrapper.classList.remove('hidden');

    // Força reflow para transição disparar
    wrapper.offsetHeight;

    // Remove as classes de animação inicial
    wrapper.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
  });
}

// Opcional: auto-chamar quando a página carregar (se quiser)
// window.addEventListener('load', pedir_pizza);

// Ou export para usar manualmente se preferir
// export { pedir_pizza };