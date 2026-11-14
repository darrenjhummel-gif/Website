/* Magic is an independent chapter within the existing hash-routed portfolio. */
let disposeMagic = () => {};
function renderMagic() {
  disposeMagic();
  const cfg = MAGIC_CONTENT;
  if (!cfg?.montage || !cfg.films?.length) {
    mainEl.innerHTML = '<div class="project-page"><h1>Magic</h1><p>The Magic collection is being updated. Please reload with the latest data.js.</p></div>';
    setActiveNav('Magic');
    return;
  }
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const films = cfg.films;
  const media = (f, hero = false) => `<video muted loop playsinline preload="none" poster="${escape(f.poster)}" data-loop="${escape(f.loop)}" aria-hidden="true"></video>`;
  const play = `<span class="magic-play"><b aria-hidden="true">▶</b><span>Play film · sound on</span></span>`;
  const filmCard = (f, i) => `<article class="magic-film magic-reveal"><span class="magic-film-number">${String(i+1).padStart(2,'0')}</span><button type="button" data-film="${i}" aria-label="Watch ${escape(f.title)}"><div class="magic-frame ${f.portrait ? 'portrait' : ''}">${media(f)}</div>${play}</button><h3>${escape(f.title)}</h3><p>${escape(f.description)}</p><div class="magic-card-meta"><span>${i===films.length-1?'Home-video archive':'A little shared wonder'}</span><span>${escape(f.length)} ↗</span></div></article>`;
  document.body.classList.add('magic-mode');
  mainEl.innerHTML = `<div class="magic-page"><header class="magic-nav"><a href="#/Magic" class="magic-wordmark" aria-label="It's Magic with Darren, top of page" data-jump="magic-top">IT'S MAGIC<small>WITH DARREN HUMMEL</small></a><nav class="magic-nav-links" aria-label="Magic page"><a href="#magic-performances" data-jump="magic-performances">The performances ↙</a><a href="#magic-origin" data-jump="magic-origin">The backstory ↙</a><a href="#magic-contact" data-jump="magic-contact">Let's make magic ↗</a></nav><a href="#/" class="magic-portfolio">Darren's portfolio ↗</a></header>
    <section class="magic-hero" id="magic-top"><div class="magic-eyebrow"><span>Sleight of hand. Slightly out of the ordinary.</span><span>For the delightfully curious ✳</span></div><h1 class="magic-title magic-display">IT'S MAGIC.</h1>
    <div class="magic-hero-sub"><p>Real people. Real reactions.<br>A few things you won't see coming.</p><span class="magic-with">with Darren.</span></div>
    <div class="magic-hero-wrap"><span class="magic-sticker" aria-hidden="true">See it.<br>Believe it?</span><button type="button" class="magic-hero-media" data-film="montage" aria-label="Watch the Magic montage">${media(cfg.montage,true)}${play}</button><button type="button" class="magic-loop-control" aria-pressed="false" aria-label="Pause all motion">Pause motion</button></div><div class="magic-hero-caption"><span>A collection of moments / ${escape(cfg.montage.length)}</span><span>Turn the sound on ↗</span></div></section>
    <div class="magic-ticker" aria-hidden="true"><div>${Array(4).fill('A LITTLE SLEIGHT OF HAND <span>✳</span> A LOT OF SHARED WONDER <span>✳</span> ').join('')}</div></div>
    <section class="magic-intro magic-reveal"><div><p class="magic-kicker">Hi, I'm Darren.<br>Let's suspend disbelief.</p><div class="magic-intro-mark" aria-hidden="true">✳</div></div><div><h2 class="magic-display">THE BEST PART?<br><em>Your reaction.</em></h2><p>${escape(cfg.intro)}</p></div></section>
    <section class="magic-chapter" id="magic-performances" aria-labelledby="magic-performances-heading"><div class="magic-chapter-label"><span>01 / A few good moments</span><a href="#magic-index" data-jump="magic-index">Skip to the film index ↗</a></div><h2 id="magic-performances-heading" class="magic-section-title magic-display">UP CLOSE. <em>Unreal.</em></h2><div class="magic-films">${films.slice(0,-1).map((f,i)=>filmCard(f,i)).join('')}</div></section>
    <section class="magic-chapter magic-archive" id="magic-origin" aria-labelledby="magic-origin-heading"><div class="magic-chapter-label"><span>02 / Please rewind</span><span>The home-video years</span></div><div class="magic-archive-layout"><div class="magic-reveal"><p class="magic-kicker">Before the cameras got better.</p><h2 id="magic-origin-heading" class="magic-heading magic-display">SMALL HANDS.<br>BIG IDEAS.</h2><p>${escape(cfg.archiveText)}</p></div>${filmCard(films[films.length-1],films.length-1)}</div>
    <div class="magic-stills"><figure class="magic-reveal"><img src="assets/magic/wedding.jpg" alt="Darren performing magic at a wedding reception in black and white" loading="lazy"><figcaption>A little wonder, shared with a room full of people. ↗</figcaption></figure><figure class="magic-reveal"><img src="assets/magic/promo.jpg" alt="Darren holding an unfolding cascade of playing cards" loading="lazy"><figcaption>Nothing up my sleeve. Probably.</figcaption></figure></div></section><div class="magic-checker" aria-hidden="true"></div>
    <section id="magic-index" class="magic-chapter magic-index" aria-labelledby="magic-index-heading"><div class="magic-chapter-label"><span>03 / Pick your moment</span><span>All films / Sound on</span></div><h2 id="magic-index-heading" class="magic-section-title magic-display">ROLL THE TAPE.</h2><button class="magic-index-row" data-film="montage" type="button"><span>↗</span><span>The Magic montage</span><span>${escape(cfg.montage.length)} &nbsp; ▶</span></button>${films.map((f,i)=>`<button class="magic-index-row" data-film="${i}" type="button"><span>${String(i+1).padStart(2,'0')}</span><span>${escape(f.title)}</span><span>${escape(f.length)} &nbsp; ▶</span></button>`).join('')}</section>
    <section class="magic-outro" id="magic-contact"><p class="magic-kicker">Your people. Your place. A little unexpected.</p><h2 class="magic-display">LET'S MAKE<br>SOME MAGIC.</h2><div class="magic-outro-row"><p>A gathering, a celebration, or something a little different. Tell me what you're dreaming up.</p><a class="magic-contact" href="mailto:${escape(INFO.email)}?subject=Magic%20with%20Darren">Get in touch ↗</a></div><footer class="magic-footer"><span>It's Magic with Darren James Hummel ✳</span><a href="#/">Back to the portfolio ↗</a></footer></section></div>
    <dialog class="magic-dialog" aria-labelledby="magic-player-title"><div class="magic-dialog-head"><span id="magic-player-title"></span><button type="button" data-close>Close ✕</button></div><video controls playsinline preload="none"></video><p class="magic-error" hidden>That video couldn't load. Please close it and try again.</p></dialog>`;
  document.title = "Magic — Darren James Hummel";
  setActiveNav('Magic');
  const root = mainEl.querySelector('.magic-page');
  const dialog = mainEl.querySelector('dialog');
  const player = dialog.querySelector('video');
  let disposed = false;
  let previousFocus, paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionBtn = root.querySelector('.magic-loop-control');
  const loops = [...root.querySelectorAll('video[data-loop]')];
  const visible = new Set();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function syncLoops() {
    if(disposed) return;
    document.body.classList.toggle('magic-paused',paused);
    motionBtn.textContent = paused ? 'Play motion' : 'Pause motion';
    motionBtn.setAttribute('aria-pressed', String(paused));
    motionBtn.setAttribute('aria-label',paused?'Play all motion':'Pause all motion');
    loops.forEach(v => {
      if (!paused && visible.has(v) && !document.hidden && !dialog.open) {
        if (!v.getAttribute('src')) v.src = v.dataset.loop;
        v.play().catch(()=>{});
      } else v.pause();
    });
  }
  const loopObserver = new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?visible.add(e.target):visible.delete(e.target));syncLoops();},{threshold:.2});
  loops.forEach(v=>loopObserver.observe(v));
  const revealObserver = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');revealObserver.unobserve(e.target);}}),{threshold:.08});
  if(!reduced.matches) root.classList.add('magic-animated');
  root.querySelectorAll('.magic-reveal').forEach(el=>revealObserver.observe(el));
  function closePlayer(){player.pause();player.removeAttribute('src');player.load();document.body.style.overflow='';syncLoops();if(previousFocus?.isConnected)previousFocus.focus();}
  root.querySelectorAll('[data-film]').forEach(btn=>btn.addEventListener('click',()=>{
    const f=btn.dataset.film==='montage'?cfg.montage:films[Number(btn.dataset.film)];previousFocus=btn;
    dialog.querySelector('#magic-player-title').textContent=f.title;
    dialog.querySelector('.magic-error').hidden=true;
    player.poster=f.poster;player.src=f.src;dialog.showModal();document.body.style.overflow='hidden';syncLoops();player.play().catch(()=>{});
  }));
  player.addEventListener('error',()=>{if(player.getAttribute('src'))dialog.querySelector('.magic-error').hidden=false;});
  dialog.querySelector('[data-close]').onclick=()=>dialog.close();
  dialog.addEventListener('close',closePlayer);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  motionBtn.onclick=()=>{paused=!paused;syncLoops();};
  root.querySelectorAll('[data-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();const target=root.querySelector('#'+a.dataset.jump);target.scrollIntoView({behavior:reduced.matches?'instant':'smooth'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});});
  const visibility=()=>syncLoops();document.addEventListener('visibilitychange',visibility);
  const motionChange=()=>{paused=reduced.matches;root.classList.toggle('magic-animated',!reduced.matches);syncLoops();};reduced.addEventListener('change',motionChange);
  syncLoops();
  disposeMagic=()=>{disposed=true;document.body.classList.remove('magic-mode','magic-paused');loopObserver.disconnect();revealObserver.disconnect();loops.forEach(v=>{v.pause();v.removeAttribute('src');v.load();});player.pause();if(dialog.open)dialog.close();document.body.style.overflow='';document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',motionChange);disposeMagic=()=>{};};
}
