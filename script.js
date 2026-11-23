/* =========================================================
   ACADEMIC BLOG — EDITORIAL INTERACTION LAYER
   Works with the structured content exported by data.js.
   ========================================================= */

(() => {
    'use strict';

    const ARTICLE_HASH = '#article/';
    const THEME_KEY = 'theme';
    const WORDS_PER_MINUTE = 220;

    const dom = {
        topbar: document.getElementById('topbar'),
        homeView: document.getElementById('homeView'),
        readerView: document.getElementById('readerView'),
        heroStats: document.getElementById('heroStats'),
        featuredCard: document.querySelector('.feature-card'),
        featuredLink: document.getElementById('featuredLink'),
        featuredCategory: document.getElementById('featuredCategory'),
        featuredReadTime: document.getElementById('featuredReadTime'),
        featuredTitle: document.getElementById('featuredTitle'),
        featuredExcerpt: document.getElementById('featuredExcerpt'),
        searchInput: document.getElementById('searchInput'),
        searchClear: document.getElementById('searchClear'),
        filterList: document.getElementById('filterList'),
        articleGrid: document.getElementById('articleGrid'),
        resultCount: document.getElementById('resultCount'),
        emptyState: document.getElementById('emptyState'),
        clearFilters: document.getElementById('clearFilters'),
        contributorList: document.getElementById('contributorList'),
        readerFolio: document.getElementById('readerFolio'),
        readerCategory: document.getElementById('readerCategory'),
        readerTitle: document.getElementById('readerTitle'),
        readerExcerpt: document.getElementById('readerExcerpt'),
        readerReadTime: document.getElementById('readerReadTime'),
        readerTopic: document.getElementById('readerTopic'),
        readerToc: document.getElementById('readerToc'),
        readerBody: document.getElementById('readerBody'),
        readerPager: document.getElementById('readerPager'),
        copyLink: document.getElementById('copyLink'),
        themeToggle: document.getElementById('themeToggle'),
        menuToggle: document.getElementById('menuToggle'),
        mobileNav: document.getElementById('mobileNav'),
        readingProgressBar: document.getElementById('readingProgressBar'),
        toast: document.getElementById('toast')
    };

    const state = {
        query: '',
        category: 'all',
        activeArticle: null
    };

    const categoryLabels = categories.reduce((map, category) => {
        map[category.id] = category.label;
        return map;
    }, {});

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Utilities ---------- */

    const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));

    const formatText = value => escapeHtml(value).replace(/\r?\n/g, '<br>');

    function blockText(block) {
        if (block === null || block === undefined) return '';
        if (typeof block !== 'object') return String(block);

        const parts = [];
        if (block.text) parts.push(block.text);
        if (block.label) parts.push(block.label);
        if (Array.isArray(block.items)) parts.push(...block.items.map(blockText));
        if (Array.isArray(block.blocks)) parts.push(...block.blocks.map(blockText));
        if (Array.isArray(block.headers)) parts.push(...block.headers);
        if (Array.isArray(block.rows)) {
            block.rows.forEach(row => row.forEach(cell => parts.push(blockText(cell))));
        }
        return parts.join(' ');
    }

    function articleText(article) {
        return [
            article.title,
            categoryLabels[article.category] || article.category,
            article.excerpt,
            ...article.sections.flatMap(section => [
                section.heading,
                ...section.blocks.map(blockText)
            ])
        ].join(' ');
    }

    const searchIndex = new Map(articles.map(article => [
        article.id,
        articleText(article).toLowerCase()
    ]));

    function readingTime(article) {
        const words = articleText(article).trim().split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
    }

    const padded = value => String(value).padStart(2, '0');

    /* ---------- Reveal animations ---------- */

    const revealObserver = 'IntersectionObserver' in window
        ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 })
        : null;

    function observeReveals(root = document) {
        root.querySelectorAll('.reveal:not(.is-visible)').forEach(element => {
            if (revealObserver) revealObserver.observe(element);
            else element.classList.add('is-visible');
        });
    }

    /* ---------- Static content rendering ---------- */

    function renderHeroStats() {
        dom.heroStats.innerHTML = [
            ['Articles', articles.length],
            ['Topics', categories.length - 1],
            ['Contributors', contributors.length]
        ].map(([label, value]) => `
            <div class="hero__stat">
                <dt>${escapeHtml(label)}</dt>
                <dd>${padded(value)}</dd>
            </div>
        `).join('');
    }

    function renderFeatured() {
        const article = articles[0];
        if (!article) return;

        const href = ARTICLE_HASH + article.id;
        dom.featuredLink.href = href;
        dom.featuredLink.querySelector('.feature-card__number').textContent = article.number;
        dom.featuredLink.querySelector('.feature-card__cover-title').textContent = article.title.split(' in ')[0];
        dom.featuredCard.querySelector('.text-link').href = href;
        dom.featuredCard.querySelector('.card-meta span:last-child').textContent = `Article ${article.number}`;
        dom.featuredCategory.textContent = categoryLabels[article.category] || article.category;
        dom.featuredReadTime.textContent = `${readingTime(article)} min read`;
        dom.featuredTitle.textContent = article.title;
        dom.featuredExcerpt.textContent = article.excerpt;
    }

    function renderContributors() {
        dom.contributorList.innerHTML = contributors
            .map(name => `<span class="contributor">${escapeHtml(name)}</span>`)
            .join('');
    }

    function renderFilters() {
        dom.filterList.innerHTML = categories.map(category => {
            const count = category.id === 'all'
                ? articles.length
                : articles.filter(article => article.category === category.id).length;
            const active = category.id === state.category;
            return `
                <button class="filter-chip${active ? ' is-active' : ''}" type="button"
                        data-category="${escapeHtml(category.id)}" aria-pressed="${active}">
                    ${escapeHtml(category.label)}
                    <span class="filter-chip__count">${count}</span>
                </button>
            `;
        }).join('');
    }

    /* ---------- Article listing ---------- */

    const CARD_LAYOUTS = {
        1: ['full'],
        2: ['wide', 'narrow'],
        3: ['regular', 'regular', 'regular'],
        4: ['half', 'half', 'half', 'half'],
        5: ['wide', 'narrow', 'regular', 'regular', 'regular'],
        6: ['regular', 'regular', 'regular', 'regular', 'regular', 'regular'],
        7: ['wide', 'narrow', 'regular', 'regular', 'regular', 'wide', 'narrow']
    };

    function cardMarkup(article, layout) {
        return `
            <a class="article-card article-card--${layout} reveal"
               href="${ARTICLE_HASH}${escapeHtml(article.id)}"
               data-article="${escapeHtml(article.id)}"
               aria-label="Read ${escapeHtml(article.title)}">
                <span class="article-card__number" aria-hidden="true">${escapeHtml(article.number)}</span>
                <span class="article-card__top">
                    <span>${escapeHtml(categoryLabels[article.category] || article.category)}</span>
                    <span>${readingTime(article)} min read</span>
                </span>
                <h3>${escapeHtml(article.title)}</h3>
                <p>${escapeHtml(article.excerpt)}</p>
                <span class="article-card__cta">Read article <span aria-hidden="true">→</span></span>
            </a>
        `;
    }

    function renderArticles() {
        const tokens = state.query.toLowerCase().split(/\s+/).filter(Boolean);
        const visible = articles.filter(article => {
            const matchesCategory = state.category === 'all' || article.category === state.category;
            const haystack = searchIndex.get(article.id) || '';
            const matchesQuery = tokens.every(token => haystack.includes(token));
            return matchesCategory && matchesQuery;
        });

        const layouts = CARD_LAYOUTS[visible.length]
            || Array.from({ length: visible.length }, (_, index) => index % 3 === 0 ? 'wide' : 'regular');

        dom.articleGrid.innerHTML = visible
            .map((article, index) => cardMarkup(article, layouts[index]))
            .join('');
        dom.articleGrid.hidden = visible.length === 0;
        dom.emptyState.hidden = visible.length !== 0;
        dom.resultCount.textContent = `Showing ${visible.length} of ${articles.length} articles`;
        dom.searchClear.hidden = state.query.length === 0;
        observeReveals(dom.articleGrid);
    }

    /* ---------- Article reader ---------- */

    function renderBlock(block) {
        switch (block.type) {
            case 'p':
                return `<p>${formatText(block.text)}</p>`;
            case 'h3':
                return `<h3>${escapeHtml(block.text)}</h3>`;
            case 'ul':
                return `<ul>${block.items.map(item => `<li>${formatText(item)}</li>`).join('')}</ul>`;
            case 'ol':
                return `<ol>${block.items.map(item => `<li>${formatText(item)}</li>`).join('')}</ol>`;
            case 'quote':
                return `<blockquote>${formatText(block.text)}</blockquote>`;
            case 'tags':
                return `<ul class="tag-list">${block.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
            case 'table':
                return `
                    <div class="lesson-table-wrap">
                        <table>
                            <thead><tr>${block.headers.map(header => `<th>${escapeHtml(header)}</th>`).join('')}</tr></thead>
                            <tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${formatText(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
                        </table>
                    </div>
                `;
            case 'prompt':
                return `
                    <div class="lesson-prompt">
                        <span class="lesson-prompt__label">${escapeHtml(block.label)}</span>
                        ${block.blocks.map(renderBlock).join('')}
                    </div>
                `;
            case 'sep':
                return '<span class="reader__section-separator" aria-hidden="true">✿ ✿ ✿</span>';
            default:
                return block.text ? `<p>${formatText(block.text)}</p>` : '';
        }
    }

    function pagerMarkup(article, direction) {
        const index = articles.findIndex(item => item.id === article.id);
        const neighbour = direction === 'previous' ? articles[index - 1] : articles[index + 1];
        const isPrevious = direction === 'previous';
        const label = `${isPrevious ? '←' : ''} ${isPrevious ? 'Previous' : 'Next'} article${isPrevious ? '' : ' →'}`;
        const variant = isPrevious ? 'prev' : 'next';

        if (!neighbour) {
            return `
                <span class="pager-card pager-card--${variant} is-empty">
                    <span class="pager-card__label">${label}</span>
                    <span class="pager-card__title">${isPrevious ? 'Beginning of the archive' : 'End of the archive'}</span>
                </span>
            `;
        }

        return `
            <a class="pager-card pager-card--${variant}" href="${ARTICLE_HASH}${escapeHtml(neighbour.id)}">
                <span class="pager-card__label">${label}</span>
                <span class="pager-card__title">${escapeHtml(neighbour.title)}</span>
            </a>
        `;
    }

    function renderReader(article) {
        dom.readerFolio.textContent = `Article ${article.number} / ${padded(articles.length)}`;
        dom.readerCategory.textContent = categoryLabels[article.category] || article.category;
        dom.readerTitle.textContent = article.title;
        dom.readerExcerpt.textContent = article.excerpt;
        dom.readerReadTime.textContent = `${readingTime(article)} min read`;
        dom.readerTopic.textContent = `Article ${article.number}`;

        dom.readerToc.innerHTML = article.sections.map((section, index) => `
            <a href="#section-${index}" data-index="${index}">${escapeHtml(section.heading)}</a>
        `).join('');

        dom.readerBody.innerHTML = article.sections.map((section, index) => `
            <h2 id="section-${index}" tabindex="-1">${escapeHtml(section.heading)}</h2>
            ${section.blocks.map(renderBlock).join('')}
        `).join('');

        dom.readerPager.innerHTML = pagerMarkup(article, 'previous') + pagerMarkup(article, 'next');
        observeReveals(dom.readerView);
    }

    /* ---------- Hash routing ---------- */

    function articleIdFromHash() {
        const hash = decodeURIComponent(window.location.hash || '');
        if (!hash.startsWith(ARTICLE_HASH)) return null;
        return hash.slice(ARTICLE_HASH.length).split(/[?#]/)[0] || null;
    }

    function syncView() {
        const id = articleIdFromHash();
        const article = id ? articles.find(item => item.id === id) : null;

        if (article) {
            const isNewArticle = state.activeArticle !== article.id;
            dom.homeView.hidden = true;
            dom.readerView.hidden = false;
            if (isNewArticle) {
                renderReader(article);
                state.activeArticle = article.id;
                window.scrollTo({ top: 0, behavior: 'auto' });
                dom.readerView.focus({ preventScroll: true });
            }
            updateScrollUI();
            return;
        }

        state.activeArticle = null;
        dom.readerView.hidden = true;
        dom.homeView.hidden = false;

        const targetId = decodeURIComponent((window.location.hash || '').slice(1));
        if (targetId) {
            requestAnimationFrame(() => {
                const target = document.getElementById(targetId);
                if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
                updateScrollUI();
            });
        }
        updateScrollUI();
    }

    /* ---------- Theme ---------- */

    function applyTheme(theme, persist) {
        const resolved = theme === 'light' ? 'light' : 'dark';
        const isDark = resolved === 'dark';
        document.documentElement.dataset.theme = resolved;
        dom.themeToggle.setAttribute('aria-pressed', String(isDark));
        dom.themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', isDark ? '#21151D' : '#FFF9F6');
        if (persist) {
            try { localStorage.setItem(THEME_KEY, resolved); } catch (_) { /* storage disabled */ }
        }
    }

    function initialTheme() {
        let stored = null;
        try { stored = localStorage.getItem(THEME_KEY); } catch (_) { /* storage disabled */ }
        applyTheme(stored || 'dark', false);
    }

    /* ---------- Navigation ---------- */

    function setMenuOpen(open) {
        dom.mobileNav.hidden = !open;
        dom.menuToggle.setAttribute('aria-expanded', String(open));
        dom.menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    function setActiveNav(name) {
        document.querySelectorAll('[data-nav]').forEach(link => {
            link.classList.toggle('is-active', link.dataset.nav === name);
        });
    }

    /* ---------- Scroll-driven UI ---------- */

    function updateScrollUI() {
        if (!dom.readerView.hidden) {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;
            dom.readingProgressBar.style.width = `${progress}%`;

            const tocLinks = [...dom.readerToc.querySelectorAll('a[data-index]')];
            let current = 0;
            dom.readerBody.querySelectorAll('h2[id^="section-"]').forEach((heading, index) => {
                if (heading.getBoundingClientRect().top <= 170) current = index;
            });
            tocLinks.forEach(link => {
                link.classList.toggle('is-current', Number(link.dataset.index) === current);
            });
            setActiveNav('');
            return;
        }

        dom.readingProgressBar.style.width = '0%';
        const threshold = (dom.topbar ? dom.topbar.offsetHeight : 76) + 56;
        let active = 'home';
        ['home', 'topics', 'articles', 'contributors'].forEach(id => {
            const section = document.getElementById(id);
            if (section && section.getBoundingClientRect().top <= threshold) active = id;
        });
        setActiveNav(active);
    }

    /* ---------- Toast ---------- */

    let toastTimer;
    function showToast(message) {
        dom.toast.textContent = message;
        dom.toast.hidden = false;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { dom.toast.hidden = true; }, 2600);
    }

    async function copyArticleLink() {
        const url = window.location.href;
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                const input = document.createElement('textarea');
                input.value = url;
                input.setAttribute('readonly', '');
                input.style.position = 'fixed';
                input.style.opacity = '0';
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                input.remove();
            }
            showToast('Article link copied');
        } catch (_) {
            showToast('Could not copy the article link');
        }
    }

    /* ---------- Event wiring ---------- */

    function bindEvents() {
        dom.themeToggle.addEventListener('click', () => {
            const current = document.documentElement.dataset.theme;
            applyTheme(current === 'dark' ? 'light' : 'dark', true);
        });

        dom.menuToggle.addEventListener('click', () => {
            setMenuOpen(dom.mobileNav.hidden);
        });

        dom.mobileNav.addEventListener('click', event => {
            if (event.target.closest('a')) setMenuOpen(false);
        });

        document.addEventListener('click', event => {
            if (dom.mobileNav.hidden) return;
            if (!event.target.closest('.topbar')) setMenuOpen(false);
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') setMenuOpen(false);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) setMenuOpen(false);
        });

        dom.searchInput.addEventListener('input', () => {
            state.query = dom.searchInput.value.trim();
            renderArticles();
        });

        dom.filterList.addEventListener('click', event => {
            const chip = event.target.closest('.filter-chip');
            if (!chip) return;
            state.category = chip.dataset.category;
            renderFilters();
            renderArticles();
        });

        dom.clearFilters.addEventListener('click', () => {
            state.query = '';
            state.category = 'all';
            dom.searchInput.value = '';
            renderFilters();
            renderArticles();
            dom.searchInput.focus();
        });

        dom.searchClear.addEventListener('click', () => {
            dom.searchInput.value = '';
            state.query = '';
            renderArticles();
            dom.searchInput.focus();
        });

        dom.readerToc.addEventListener('click', event => {
            const link = event.target.closest('a[data-index]');
            if (!link) return;
            event.preventDefault();
            const heading = document.getElementById(`section-${link.dataset.index}`);
            if (!heading) return;
            heading.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
            dom.readerToc.querySelectorAll('a').forEach(item => item.classList.toggle('is-current', item === link));
        });

        dom.copyLink.addEventListener('click', copyArticleLink);
        window.addEventListener('hashchange', syncView);

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateScrollUI();
                ticking = false;
            });
        }, { passive: true });

        window.addEventListener('load', updateScrollUI);
    }

    /* ---------- Boot ---------- */

    initialTheme();
    renderHeroStats();
    renderFeatured();
    renderContributors();
    renderFilters();
    renderArticles();
    observeReveals();
    bindEvents();
    syncView();
    updateScrollUI();
})();
