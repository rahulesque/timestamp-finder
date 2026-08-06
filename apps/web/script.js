// Simulate the extension's core interaction: clicking a transcript
// result "jumps" to that timestamp and updates the status line.
document.querySelectorAll('.ext-results').forEach((list) => {
  const jumpLine = list.parentElement.querySelector('.ext-jump');

  list.querySelectorAll('li').forEach((row) => {
    row.addEventListener('click', () => {
      list.querySelectorAll('li').forEach((r) => r.classList.remove('active'));
      row.classList.add('active');

      const time = row.querySelector('.t')?.textContent?.trim();
      if (jumpLine && time) {
        jumpLine.textContent = `▶ Jumped to ${time}`;
      }
    });
  });
});

// Fade in the "how it works" steps as they scroll into view.
const steps = document.querySelectorAll('.steps li');
if ('IntersectionObserver' in window && steps.length) {
  steps.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  steps.forEach((el) => observer.observe(el));
}