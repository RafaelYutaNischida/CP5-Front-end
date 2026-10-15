(() => {
  // 1) Text reveal: separa cada linha em letras (mantendo palavras inteiras sem quebra)
  const title = document.getElementById('title');
  let i = 0;
  title.querySelectorAll('[data-line]').forEach(line => {
    const text = line.textContent;
    line.textContent = '';
    line.setAttribute('aria-hidden', 'true');
    text.split(' ').forEach((word, wi, arr) => {
      const w = document.createElement('span');
      w.style.whiteSpace = 'nowrap';
      w.style.display = 'inline-block';
      [...word].forEach(ch => {
        const s = document.createElement('span');
        s.className = 'char';
        s.style.setProperty('--i', i++);
        s.textContent = ch;
        w.appendChild(s);
      });
      line.appendChild(w);
      if (wi < arr.length - 1) line.appendChild(document.createTextNode('\u00A0'));
    });
  });

  // 2) Imagem do atleta: se houver src, troca a silhueta pela foto
  const img = document.getElementById('athlete');
  const fb = document.getElementById('athlete-fallback');
  if (img.getAttribute('src')) {
    img.addEventListener('load', () => { img.classList.remove('hidden'); fb.classList.add('hidden'); });
  }

  // 3) Parallax suave com o mouse (profundidades diferentes por camada)
  const stage = document.getElementById('stage');
  const layers = stage.querySelectorAll('[data-depth]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && matchMedia('(hover: hover)').matches) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', e => {
      tx = (e.clientX / innerWidth - .5) * 2;
      ty = (e.clientY / innerHeight - .5) * 2;
    });
    (function loop() {
      cx += (tx - cx) * .06; cy += (ty - cy) * .06;
      layers.forEach(l => {
        const d = +l.dataset.depth;
        l.style.transform = `translate3d(${cx * d}px, ${cy * d}px, 0)`;
      });
      requestAnimationFrame(loop);
    })();
  }
})();
