/**
 * countUp.ts — Contadores animados reutilizables
 * ============================================
 * Uso: <span data-count-to="900">0</span> + initCountUp()
 * - Anima de 0 → valor con easeOutCubic (1.8s)
 * - Se dispara una sola vez al entrar al viewport
 * - prefers-reduced-motion → muestra el valor directo
 */
export function initCountUp(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-count-to]');
  if (!els.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = (el: HTMLElement) => {
    const target = parseInt(el.dataset.countTo || '0', 10);

    if (reduce) {
      el.textContent = String(target);
      return;
    }

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  els.forEach((el) => io.observe(el));
}