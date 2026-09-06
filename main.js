// Rendering logic only — all editable text/data lives in content.js
(function () {
  const data = SITE_DATA;

  // ---------- About ----------
  document.getElementById("about-name").textContent = data.name;
  document.getElementById("about-tagline").textContent = data.tagline;

  const paragraphsEl = document.getElementById("about-paragraphs");
  data.about.paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    paragraphsEl.appendChild(p);
  });

  document.getElementById("about-hobbies").textContent = data.about.hobbies;

  const researchEl = document.getElementById("about-research");
  data.about.research.forEach((paper) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = paper.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = paper.title;
    li.appendChild(a);
    researchEl.appendChild(li);
  });

  // ---------- Resume ----------
  document.getElementById("resume-download").href = data.resume.downloadUrl;

  const experienceEl = document.getElementById("resume-experience");
  data.resume.experience.forEach((job) => {
    const wrap = document.createElement("div");
    wrap.className = "job";

    const title = document.createElement("div");
    title.className = "job__title";
    title.textContent = `${job.role}, ${job.company}`;
    wrap.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "job__meta";
    meta.textContent = `${job.location} · ${job.dates}`;
    wrap.appendChild(meta);

    const ul = document.createElement("ul");
    job.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });
    wrap.appendChild(ul);

    experienceEl.appendChild(wrap);
  });

  const fellowship = data.resume.researchFellowship;
  if (fellowship) {
    const fellowshipEl = document.getElementById("resume-fellowship");
    const wrap = document.createElement("div");
    wrap.className = "job";

    const title = document.createElement("div");
    title.className = "job__title";
    title.textContent = fellowship.organization;
    wrap.appendChild(title);

    const ul = document.createElement("ul");
    fellowship.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });
    wrap.appendChild(ul);

    fellowshipEl.appendChild(wrap);
  }

  const educationEl = document.getElementById("resume-education");
  data.resume.education.forEach((edu) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${edu.school}</strong> — ${edu.degree} (${edu.dates})`;
    educationEl.appendChild(p);
  });

  const skillsEl = document.getElementById("resume-skills");
  data.resume.skills.forEach((group) => {
    const wrap = document.createElement("div");
    wrap.className = "skills-group";

    const heading = document.createElement("h4");
    heading.textContent = group.category;
    wrap.appendChild(heading);

    const ul = document.createElement("ul");
    ul.className = "skills-list";
    group.items.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });
    wrap.appendChild(ul);

    skillsEl.appendChild(wrap);
  });

  // ---------- Blog ----------
  const blogEl = document.getElementById("blog-posts");
  if (blogEl) {
    data.blog.posts.forEach((post) => {
      const card = document.createElement("a");
      card.className = "blog-card";
      card.href = post.url;
      card.target = "_blank";
      card.rel = "noopener";

      const title = document.createElement("div");
      title.className = "blog-card__title";
      title.textContent = post.title;
      card.appendChild(title);

      const meta = document.createElement("div");
      meta.className = "blog-card__meta";
      meta.textContent = `${post.publication} · ${post.date}`;
      card.appendChild(meta);

      const excerpt = document.createElement("p");
      excerpt.className = "blog-card__excerpt";
      excerpt.textContent = post.excerpt;
      card.appendChild(excerpt);

      blogEl.appendChild(card);
    });
  }

  // ---------- Travel gallery + lightbox ----------
  const albumsEl = document.getElementById("travel-albums");
  const lightboxTrack = document.getElementById("lightbox-track");
  const allPhotos = []; // flat list, so the lightbox can scroll/navigate across every album
  const slideEls = [];

  data.travel.albums.forEach((album) => {
    const section = document.createElement("div");
    section.className = "album";

    const title = document.createElement("h3");
    title.className = "album__title";
    title.textContent = album.title;
    section.appendChild(title);

    if (album.intro) {
      const intro = document.createElement("p");
      intro.className = "album__intro";
      intro.textContent = album.intro;
      section.appendChild(intro);
    }

    const grid = document.createElement("div");
    grid.className = "album__grid";

    album.photos.forEach((photo) => {
      const index = allPhotos.length;
      allPhotos.push(photo);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", `Open photo: ${photo.caption}`);
      btn.addEventListener("click", () => openLightbox(index));

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = "lazy";
      btn.appendChild(img);

      grid.appendChild(btn);

      // Build the matching full-screen slide for the lightbox up front, so
      // opening a photo can jump straight to it and scrolling/swiping just
      // works — no need to rebuild slides on open.
      const slide = document.createElement("div");
      slide.className = "lightbox__slide";
      const slideImg = document.createElement("img");
      slideImg.className = "lightbox__image";
      slideImg.src = photo.src;
      slideImg.alt = photo.alt;
      slideImg.loading = "lazy";
      const caption = document.createElement("p");
      caption.className = "lightbox__caption";
      caption.textContent = photo.caption;
      slide.appendChild(slideImg);
      slide.appendChild(caption);
      lightboxTrack.appendChild(slide);
      slideEls.push(slide);
    });

    section.appendChild(grid);
    albumsEl.appendChild(section);
  });

  // ---------- LinkedIn links (nav, hero, connect, footer) ----------
  document.querySelectorAll("[data-linkedin-link]").forEach((el) => {
    el.href = data.linkedin;
  });

  // ---------- Connect ----------
  const connectEmail = document.getElementById("connect-email");
  if (connectEmail) {
    connectEmail.href = `mailto:${data.email}`;
    connectEmail.querySelector("[data-email-text]").textContent = data.email;
  }

  // ---------- Footer ----------
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // ---------- Lightbox behavior ----------
  // Full-screen, horizontally scrollable strip: scroll or swipe sideways to
  // move between photos (CSS scroll-snap keeps each photo centered), or use
  // the arrow buttons/keys, which just scroll to the next/previous slide.
  const lightbox = document.getElementById("lightbox");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    // Jump instantly to the chosen photo (no animation) when opening.
    slideEls[currentIndex].scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function goTo(index, behavior) {
    currentIndex = (index + allPhotos.length) % allPhotos.length;
    slideEls[currentIndex].scrollIntoView({ behavior: behavior || "smooth", inline: "center", block: "nearest" });
  }

  function showPrev() { goTo(currentIndex - 1); }
  function showNext() { goTo(currentIndex + 1); }

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", showPrev);
  document.getElementById("lightbox-next").addEventListener("click", showNext);

  // Clicking the empty space around a photo (not the photo/caption/buttons
  // themselves) closes the lightbox.
  lightboxTrack.addEventListener("click", (e) => {
    if (e.target === lightboxTrack || e.target.classList.contains("lightbox__slide")) {
      closeLightbox();
    }
  });

  // Keep currentIndex in sync while the user free-scrolls/swipes, so the
  // arrow buttons/keys continue from wherever they land.
  let scrollSyncTimer;
  lightboxTrack.addEventListener("scroll", () => {
    clearTimeout(scrollSyncTimer);
    scrollSyncTimer = setTimeout(() => {
      const trackRect = lightboxTrack.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;
      let closest = 0;
      let closestDistance = Infinity;
      slideEls.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs((rect.left + rect.width / 2) - centerX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      currentIndex = closest;
    }, 120);
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });
})();
