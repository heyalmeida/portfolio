(() => {
  // só roda se houver mouse (pointer fino)
  const hasMouse = window.matchMedia("(pointer: fine)").matches;
  if (!hasMouse) return;

  let cursor = document.getElementById('cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.id = 'cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;

  const lerp = (start, end, t) => start + (end - start) * t;
  const smooth = 0.18;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.remove('cursor--hidden');
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.add('cursor--hidden');
  });
  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('cursor--hidden');
  });

  const interactiveSelector =
    'a, button, input, textarea, [role="button"], .modern-link, .modern-button-primary, .modern-button-secondary, [data-hoverable]';

  const textSelector =
    'p, span, li, label, small, strong, em, blockquote';
  const titleSelector = 'h1, h2, h3, h4, h5, h6';

  document.addEventListener('mouseover', (ev) => {
    const t = ev.target;

    if (t.closest(interactiveSelector)) {
      cursor.classList.add('cursor--hover');
      cursor.classList.remove('cursor--text', 'cursor--title');
      return;
    }

    if (t.closest(titleSelector)) {
      cursor.classList.add('cursor--title');
      cursor.classList.remove('cursor--text', 'cursor--hover');
      return;
    }

    if (t.closest(textSelector)) {
      cursor.classList.add('cursor--text');
      cursor.classList.remove('cursor--title', 'cursor--hover');
      return;
    }

    cursor.classList.remove('cursor--hover', 'cursor--text', 'cursor--title');
  });

  document.addEventListener('mouseout', (ev) => {
    const to = ev.relatedTarget;
    if (!to) {
      cursor.classList.add('cursor--hidden');
      return;
    }

    if (
      !to.closest(interactiveSelector) &&
      !to.closest(textSelector) &&
      !to.closest(titleSelector)
    ) {
      cursor.classList.remove('cursor--hover', 'cursor--text', 'cursor--title');
    }
  });

  function render() {
    posX = lerp(posX, mouseX, smooth);
    posY = lerp(posY, mouseY, smooth);
    cursor.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  document.addEventListener('focusin', (ev) => {
    const t = ev.target;
    if (t.matches(interactiveSelector)) {
      cursor.classList.add('cursor--hover');
    }
    if (t.matches(textSelector)) {
      cursor.classList.add('cursor--text');
    }
  });

  document.addEventListener('focusout', () => {
    cursor.classList.remove('cursor--hover', 'cursor--text');
  });
})();
