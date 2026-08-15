/**
 * scrollReveal.ts — Animaciones al entrar en viewport (reutilizable)
 * ============================================
 * Uso en cualquier componente Astro:
 *   import { initScrollReveal } from '../../utils/scrollReveal';
 *   document.addEventListener('DOMContentLoaded', () => initScrollReveal());
 *
 * En el HTML, marca los elementos con:
 *   <div data-animate data-delay="150">...</div>
 *
 * - data-animate: elemento que se anima al entrar
 * - data-delay (opcional): milisegundos de retraso (para efecto escalonado)
 * ============================================
 */

export function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-animate]');

  // Si el navegador no soporta IntersectionObserver, mostrar todo directo
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = Number(target.getAttribute('data-delay')) || 0;

          setTimeout(() => {
            target.classList.add('is-visible');
          }, delay);

          // Dejar de observar una vez animado (solo anima 1 vez)
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.15 } // Se activa cuando el 15% del elemento es visible
  );

    elements.forEach((el) => {
    if (el.hasAttribute('data-reveal-init')) return; // Ya observado: saltar
    el.setAttribute('data-reveal-init', 'true');
    observer.observe(el);
  });
}




