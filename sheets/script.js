document.addEventListener('DOMContentLoaded', () => {
    initializeHeroSlideshow();
    initializeSchedule();
    initializeMenu();
    initializeNavigation();
});

function initializeHeroSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-background');
    const dots = document.querySelectorAll('.hero-dot');

    const showSlide = index => {
        slides[currentSlide]?.classList.remove('active');
        dots[currentSlide]?.classList.remove('active');
        slides[index]?.classList.add('active');
        dots[index]?.classList.add('active');
        currentSlide = index;
    };

    dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
    setInterval(() => showSlide((currentSlide + 1) % slides.length), 5000);
}

function initializeSchedule() {
    ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'].forEach(day => {
        const el = document.getElementById(day);
        if (el && typeof window[day] !== 'undefined') el.textContent = window[day];
    });
}

function initializeMenu() {
    const els = {
        tabs: document.getElementById('menuTabs'),
        content: document.getElementById('menuContent'),
        search: document.getElementById('menuSearch'),
        subTop: document.getElementById('subTabsContainer'),
        subBottom: document.getElementById('subTabsContainerBottom'),
        descriptions: document.getElementById('sectionDescriptions')
    };
    let state = { category: null, section: null };

    const toggle = (selector, condition, cls = 'active') =>
        document.querySelectorAll(selector).forEach(el => el.classList.toggle(cls, condition(el)));

    const hide = selector => document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
    const show = id => { const el = document.getElementById(id); if (el) el.style.display = 'block'; };

    const switchTo = (categoryId, sectionId = null) => {
        if (!categoryId) return;
        [state.category, state.section] = [categoryId, sectionId];

        els.search.value = '';
        document.getElementById('searchResults')?.remove();

        toggle('.tab-btn', el => el.dataset.category === categoryId);
        toggle('.sub-tabs', el => el.id.includes(categoryId));
        toggle('.menu-content', el => el.id === (sectionId || categoryId));
        toggle('.sub-tab-btn', el => el.dataset.section === sectionId);

        hide('.section-description');
        if (sectionId) show(`desc-${sectionId}`);
    };

    const createPricing = (pricing, fallback) => {
        const prices = pricing?.type === 'multiple'
            ? pricing.options.map(o => `${o.size} | €${o.price.toFixed(2)}`)
            : pricing?.type === 'single' && pricing.size
                ? [`${pricing.size} | €${pricing.price.toFixed(2)}`]
                : [`€ ${(pricing?.price || fallback || 0).toFixed(2)}`];
        return `<div class="pricing-container">${prices.map(p => `<span class="price-tag">${p}</span>`).join('')}</div>`;
    };

    const renderItems = items => items.map(item =>
        `<div class="menu-item">
                    <h3>${item.name}</h3>
                    <div class="menu-item-description">${item.description}</div>
                    ${createPricing(item.pricing, item.price)}
                </div>`).join('');

    try {
        if (!menuData?.categories) throw new Error('menuData not found');
        const { categories } = menuData;
        const first = categories[0];

        els.tabs.innerHTML = categories.map((cat, i) =>
            `<button class="btn tab-btn ${!i ? 'active' : ''}" data-category="${cat.id}">${cat.name}</button>`).join('');

        const createSubTabs = (cat, suffix = '') => cat.sections ?
            `<div class="sub-tabs ${cat.id === first.id ? 'active' : ''}" id="${cat.id}-subtabs${suffix}">
                        ${cat.sections.map((section, i) => {
                const sectionId = `${cat.id}-section-${i}`;
                return `<button class="sub-tab-btn ${!i ? 'active' : ''}" data-section="${sectionId}" data-category="${cat.id}">${section.name}</button>`;
            }).join('')}
                    </div>` : '';

        els.subTop.innerHTML = categories.map(cat => createSubTabs(cat)).join('');
        els.subBottom.innerHTML = categories.map(cat => createSubTabs(cat, '-bottom')).join('');

        els.descriptions.innerHTML = categories.flatMap(cat =>
            cat.sections?.map((section, i) => {
                const sectionId = `${cat.id}-section-${i}`;
                const isFirst = cat.id === first.id && !i;
                return section.description ?
                    `<div class="section-description" id="desc-${sectionId}" style="display:${isFirst ? 'block' : 'none'}"><p>${section.description}</p></div>` : '';
            }) || []
        ).join('');

        els.content.innerHTML = categories.flatMap(cat =>
            cat.sections ?
                cat.sections.map((section, i) => {
                    const sectionId = `${cat.id}-section-${i}`;
                    return `<div class="menu-content ${cat.id === first.id && !i ? 'active' : ''}" id="${sectionId}">${renderItems(section.items)}</div>`;
                }) :
                [`<div class="menu-content ${cat.id === first.id ? 'active' : ''}" id="${cat.id}">${renderItems(cat.items)}</div>`]
        ).join('');

        [state.category, state.section] = [first.id, first.sections ? `${first.id}-section-0` : null];

        document.addEventListener('click', e => {
            if (e.target.matches('.tab-btn')) {
                const cat = categories.find(c => c.id === e.target.dataset.category);
                switchTo(cat.id, cat.sections ? `${cat.id}-section-0` : null);
            }
            if (e.target.matches('.sub-tab-btn')) {
                switchTo(state.category, e.target.dataset.section);
            }
        });

        els.search.addEventListener('input', e => {
            const term = e.target.value.toLowerCase().trim();
            if (!term) return switchTo(state.category, state.section);

            toggle('.menu-content, .sub-tabs, .tab-btn', () => false);
            hide('.section-description');

            let results = document.getElementById('searchResults');
            if (!results) {
                results = Object.assign(document.createElement('div'), { id: 'searchResults', className: 'menu-content' });
                els.content.appendChild(results);
            }

            const found = categories.flatMap(c => (c.sections || [c]).flatMap(s => s.items || [])).filter(item =>
                [item.name, item.description].some(str => str.toLowerCase().includes(term))
            );

            results.innerHTML = found.length ? renderItems(found) :
                `<div class="menu-item"><h3>Nessun risultato trovato</h3><div class="menu-item-description">Prova con un termine di ricerca diverso</div><div class="pricing-container"></div></div>`;
            results.classList.add('active');
        });
    } catch (error) {
        console.error('Error initializing menu:', error);
        els.tabs.innerHTML = '<div class="error">Errore nel caricamento del menu</div>';
        els.content.innerHTML = '<div class="error">Errore nel caricamento delle pietanze</div>';
    }
}

function initializeNavigation() {
    document.addEventListener('click', e => {
        if (e.target.matches('a[href^="#"]')) {
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}
