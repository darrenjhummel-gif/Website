/* Additional supplied performances and photographs. Kept separate from the archive edit. */
function renderMagicExtras() {
  const youtube = [
    ['y7wtZL20tOs','A little too greedy','Money magic · 0:31'],
    ['ITo4ergkufU','Something sweet','Bar magic · 0:30'],
    ['H6qQ7D3vcIc','Sleight of lip','Card to mouth · 0:24']
  ];
  const social = [
    ['https://www.instagram.com/reel/DDcv-vtu3kd/','A room caught up in it','On stage, in black and white.'],
    ['https://www.instagram.com/reel/DFVnDKaSxpi/','Mondays melting away','A little close-up impossibility.'],
    ['https://www.instagram.com/itsmagicwithdarren/p/DQPvU2MieWB/','No spills','An unexpected moment at the party.'],
    ['https://www.instagram.com/reel/DBwq-i1CGWX/','Late-night conjuring','Supernatural mischief.'],
    ['https://www.instagram.com/darrenmovie/reel/C4kOMM9ukKv/','The show before the show','From the 2024 Nico’s Wines shows.'],
    ['https://www.instagram.com/itsmagicwithdarren/reel/DDXY0qhvKnO/','A little holiday magic','A look back at Nico’s Wines, December 2024.']
  ];
  const photos = [
    ['flash-paper','Darren performing with a bright flame in his white jacket','A flash of possibility.'],
    ['cards-among-guests','Darren performing card magic surrounded by guests','The best seats are up close.'],
    ['card-to-mouth','Darren with a playing card in his mouth beside a reacting guest','That look says it all.'],
    ['under-the-lights','Darren and a crowd gathered under outdoor evening lights','One shared moment.'],
    ['shared-wonder','Darren performing with two spectators in his white jacket','Right there in their hands.'],
    ['after-the-show','Darren smiling in a black patterned shirt','A little after-hours wonder.']
  ];
  return `<section class="magic-chapter magic-extra" id="magic-more" aria-labelledby="magic-more-heading"><div class="magic-chapter-label"><span>More moments of wonder</span><span>From the camera roll</span></div><h2 id="magic-more-heading" class="magic-section-title magic-display">THERE’S MORE<br><em>where that came from.</em></h2>
  <div class="magic-extra-local">${[['chain-and-ring','A chain reaction','0:21'],['balloon-and-cards','A little suspense','0:31']].map(([name,title,length])=>`<article><video controls playsinline preload="none" poster="assets/magic/${name}.jpg" aria-label="${title}" src="assets/magic/${name}.mp4"></video><h3>${title}</h3><p>Sound on / ${length}</p></article>`).join('')}</div>
  <div class="magic-photo-wall">${photos.map(([name,alt,caption])=>`<figure><img src="assets/magic/${name}.jpg" alt="${alt}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div>
  <div class="magic-extra-label"><h3>A few short impossibilities.</h3><span>Watch here, or open on YouTube ↗</span></div><div class="magic-youtube-grid">${youtube.map(([id,title,detail])=>`<article><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe><h3>${title}</h3><p>${detail}</p><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></article>`).join('')}</div>
  <div class="magic-extra-label"><h3>Out in the wild.</h3><span>Watch on Instagram ↗</span></div><div class="magic-social-grid">${social.map(([url,title,detail],i)=>`<a href="${url}" target="_blank" rel="noopener noreferrer"><img class="magic-social-thumb" src="assets/magic/instagram-${url.split('/').filter(Boolean).pop()}.jpg" alt="Video preview: ${title}" loading="lazy"><span class="magic-social-number">0${i+1} ↗</span><h3>${title}</h3><p>${detail}</p><span class="magic-social-action">Watch on Instagram ↗</span></a>`).join('')}</div>
  <aside class="magic-related-film"><a class="magic-related-preview" href="https://www.youtube.com/watch?v=2dfSYW8f2tc" target="_blank" rel="noopener noreferrer" aria-label="Watch Lost and Found, the short film"><img class="magic-related-thumb" src="assets/magic/lost-found-film.jpg" alt="A scene from Lost and Found, Darren’s magic short film" loading="lazy"><span>Watch the film ↗</span></a><div><p class="magic-kicker">A different kind of magic</p><h3>Lost &amp; Found</h3><p>A film from the portfolio.</p></div><a href="#/Short-Films">Explore Short Films ↗</a><a href="https://www.instagram.com/darrenmovie/reel/C85chFMSA1W/" target="_blank" rel="noopener noreferrer">Watch the film announcement on Instagram ↗</a></aside></section>`;
}
