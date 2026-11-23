const { chromium } = require('playwright');

const VIEWPORTS = [
    { width: 1920, height: 1080, name: '1920px desktop' },
    { width: 1600, height: 1000, name: '1600px desktop' },
    { width: 1366, height: 768, name: '1366px laptop' },
    { width: 768, height: 1024, name: '768px tablet' },
    { width: 390, height: 844, name: '390px mobile' }
];

const SELECTORS = {
    header: '.site-header',
    sidebar: '.sidebar',
    mainContent: '.site-main',
    hero: '.hero-compact',
    heroInner: '.hero-compact-inner',
    featured: '.featured-article',
    featuredCard: '.featured-card',
    articleGrid: '.articles-grid',
    layout: '.layout'
};

async function auditLayout() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://127.0.0.1:8082', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Wait for animations
    
    const results = [];
    
    for (const vp of VIEWPORTS) {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.waitForTimeout(500);
        
        // Wait for layout to stabilize
        await page.evaluate(() => new Promise(r => requestAnimationFrame(r)));
        
        const measurements = await page.evaluate((selectors) => {
            const getRect = (sel) => {
                const el = document.querySelector(sel);
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return { x: r.x, y: r.y, width: r.width, height: r.height, top: r.top, left: r.left, right: r.right, bottom: r.bottom };
            };
            
            const getComputed = (sel, props) => {
                const el = document.querySelector(sel);
                if (!el) return null;
                const cs = getComputedStyle(el);
                const out = {};
                for (const p of props) out[p] = cs.getPropertyValue(p);
                return out;
            };
            
            const viewport = { width: window.innerWidth, height: window.innerHeight };
            
            return {
                viewport,
                header: getRect(selectors.header),
                sidebar: getRect(selectors.sidebar),
                mainContent: getRect(selectors.mainContent),
                hero: getRect(selectors.hero),
                heroInner: getRect(selectors.heroInner),
                featured: getRect(selectors.featured),
                featuredCard: getRect(selectors.featuredCard),
                articleGrid: getRect(selectors.articleGrid),
                layout: getRect(selectors.layout),
                computed: {
                    header: getComputed(selectors.header, ['padding-left', 'padding-right', 'width', 'max-width', 'display', 'justify-content', 'align-items', 'position', 'left', 'right']),
                    sidebar: getComputed(selectors.sidebar, ['width', 'height', 'position', 'top', 'left', 'overflow-y']),
                    mainContent: getComputed(selectors.mainContent, ['padding', 'width', 'max-width', 'display', 'grid-template-columns', 'min-width']),
                    hero: getComputed(selectors.hero, ['padding', 'width', 'max-width', 'overflow']),
                    heroInner: getComputed(selectors.heroInner, ['max-width', 'margin', 'width']),
                    featured: getComputed(selectors.featured, ['padding', 'width', 'max-width', 'overflow']),
                    featuredCard: getComputed(selectors.featuredCard, ['width', 'max-width']),
                    articleGrid: getComputed(selectors.articleGrid, ['display', 'grid-template-columns', 'gap', 'width']),
                    layout: getComputed(selectors.layout, ['display', 'grid-template-columns', 'grid-template-rows', 'min-height']),
                    siteMain: getComputed('.site-main', ['padding', 'width', 'max-width', 'min-width']),
                    container: getComputed('.site-main .container', ['padding', 'max-width', 'margin', 'width'])
                }
            };
        }, SELECTORS);
        
        results.push({ viewport: vp, ...measurements });
        console.log(`\n=== ${vp.name} (${vp.width}x${vp.height}) ===`);
        console.log('Viewport:', measurements.viewport);
        console.log('Header:', measurements.header);
        console.log('Sidebar:', measurements.sidebar);
        console.log('MainContent:', measurements.mainContent);
        console.log('Hero:', measurements.hero);
        console.log('HeroInner:', measurements.heroInner);
        console.log('Featured:', measurements.featured);
        console.log('FeaturedCard:', measurements.featuredCard);
        console.log('ArticleGrid:', measurements.articleGrid);
        console.log('Layout:', measurements.layout);
        console.log('Computed:', JSON.stringify(measurements.computed, null, 2));
    }
    
    await browser.close();
    return results;
}

auditLayout().then(r => {
    console.log('\n\n=== SUMMARY ===');
    console.log(JSON.stringify(r, null, 2));
}).catch(e => {
    console.error('Error:', e);
    process.exit(1);
});