const PRODUCTS = [
  // Jewelry Collection (8 items)
  {
    id: 'jwl-cartier-love',
    title: 'Cartier Love Bracelet',
    price: 6750.00,
    collection: 'jewelry',
    category: 'Bracelets',
    priceTier: 'Over $100',
    colors: ['gold'],
    artType: 'bangle-gold',
    favoriteOrder: 1
  },
  {
    id: 'jwl-tennis-bracelet',
    title: 'Tennis Bracelet',
    price: 4250.00,
    collection: 'jewelry',
    category: 'Bracelets',
    priceTier: 'Over $100',
    colors: ['silver', 'rose'],
    artType: 'tennis-bracelet'
  },
  {
    id: 'jwl-van-cleef-necklace',
    title: 'Van Cleef Necklace',
    price: 2350.00,
    collection: 'jewelry',
    category: 'Necklaces',
    priceTier: 'Over $100',
    colors: ['gold', 'cream'],
    artType: 'clover-necklace',
    favoriteOrder: 4
  },
  {
    id: 'jwl-diamond-hoops',
    title: 'Diamond Hoops',
    price: 1200.00,
    collection: 'jewelry',
    category: 'Earrings',
    priceTier: 'Over $100',
    colors: ['gold', 'cream'],
    artType: 'diamond-hoops'
  },
  {
    id: 'jwl-rolex-watch',
    title: 'Rolex Watch',
    price: 12500.00,
    collection: 'jewelry',
    category: 'Sets',
    priceTier: 'Over $100',
    colors: ['rose', 'gold'],
    artType: 'rolex-watch'
  },
  {
    id: 'jwl-lucky-clover-bracelet',
    title: 'Lucky Clover Bracelet',
    price: 1800.00,
    collection: 'jewelry',
    category: 'Bracelets',
    priceTier: 'Over $100',
    colors: ['gold', 'rose'],
    artType: 'clover-bracelet'
  },
  {
    id: 'jwl-cuban-link-necklace',
    title: 'Cuban Link Necklace',
    price: 1200.00,
    collection: 'jewelry',
    category: 'Necklaces',
    priceTier: 'Over $100',
    colors: ['gold'],
    artType: 'cuban-necklace'
  },
  {
    id: 'jwl-pearl-earrings',
    title: 'Pearl Earrings',
    price: 950.00,
    collection: 'jewelry',
    category: 'Earrings',
    priceTier: 'Over $100',
    colors: ['cream', 'gold'],
    artType: 'pearl-earrings'
  },

  // Fajas Collection (8 items + 1 favorite)
  {
    id: 'faj-seamless-bodysuit',
    title: 'Seamless Bodysuit',
    price: 34.99,
    collection: 'fajas',
    category: 'Bodysuits',
    priceTier: '$25 - $50',
    colors: ['sand'],
    artType: 'faja-bodysuit-sand'
  },
  {
    id: 'faj-waist-cincher',
    title: 'Waist Cincher',
    price: 29.99,
    collection: 'fajas',
    category: 'Waist Cinchers',
    priceTier: '$25 - $50',
    colors: ['black'],
    artType: 'faja-cincher-black'
  },
  {
    id: 'faj-shaping-shorts-sand',
    title: 'Shaping Shorts',
    price: 32.99,
    collection: 'fajas',
    category: 'Shorts',
    priceTier: '$25 - $50',
    colors: ['sand'],
    artType: 'faja-shorts-sand'
  },
  {
    id: 'faj-sculpting-bodysuit',
    title: 'Sculpting Bodysuit',
    price: 36.99,
    collection: 'fajas',
    category: 'Bodysuits',
    priceTier: '$25 - $50',
    colors: ['black'],
    artType: 'faja-bodysuit-black'
  },
  {
    id: 'faj-waist-trainer',
    title: 'Waist Trainer',
    price: 39.99,
    collection: 'fajas',
    category: 'Waist Cinchers',
    priceTier: '$25 - $50',
    colors: ['sand'],
    artType: 'faja-trainer-sand'
  },
  {
    id: 'faj-shaping-shorts-mocha',
    title: 'Shaping Shorts',
    price: 32.99,
    collection: 'fajas',
    category: 'Shorts',
    priceTier: '$25 - $50',
    colors: ['mocha'],
    artType: 'faja-shorts-mocha'
  },
  {
    id: 'faj-seamless-thong-bodysuit',
    title: 'Seamless Thong Bodysuit',
    price: 34.99,
    collection: 'fajas',
    category: 'Bodysuits',
    priceTier: '$25 - $50',
    colors: ['sand'],
    artType: 'faja-thong-sand'
  },
  {
    id: 'faj-full-body-shaper',
    title: 'Full Body Shaper',
    price: 44.99,
    collection: 'fajas',
    category: 'Full Body Shapers',
    priceTier: '$25 - $50',
    colors: ['black'],
    artType: 'faja-full-black'
  },
  {
    id: 'faj-colombiana-fav',
    title: 'Faja Colombiana',
    price: 69.99,
    collection: 'fajas',
    category: 'Full Body Shapers',
    priceTier: '$50 - $75',
    colors: ['sand'],
    artType: 'faja-colombiana',
    favoriteOrder: 3
  },

  // Perfume Collection (6 items + 1 favorite)
  {
    id: 'prf-chanel-no-5',
    title: 'Chanel No. 5',
    price: 99.99,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: '$75 - $100',
    colors: ['gold'],
    artType: 'perfume-chanel'
  },
  {
    id: 'prf-miss-dior',
    title: 'Miss Dior',
    price: 89.99,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: '$75 - $100',
    colors: ['rose'],
    artType: 'perfume-miss-dior'
  },
  {
    id: 'prf-ysl-libre',
    title: 'YSL Libre',
    price: 94.99,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: '$75 - $100',
    colors: ['gold', 'black'],
    artType: 'perfume-ysl'
  },
  {
    id: 'prf-daisy-marc-jacobs',
    title: 'Daisy Marc Jacobs',
    price: 79.99,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: '$75 - $100',
    colors: ['rose'],
    artType: 'perfume-daisy'
  },
  {
    id: 'prf-versace-bright-crystal',
    title: 'Versace Bright Crystal',
    price: 69.99,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: '$50 - $75',
    colors: ['rose'],
    artType: 'perfume-versace'
  },
  {
    id: 'prf-good-girl',
    title: 'Good Girl',
    price: 89.99,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: '$75 - $100',
    colors: ['black', 'gold'],
    artType: 'perfume-good-girl'
  },
  {
    id: 'prf-miss-dior-edp-fav',
    title: 'Miss Dior Eau de Parfum',
    price: 145.00,
    collection: 'perfume',
    category: "Women's Perfume",
    priceTier: 'Over $100',
    colors: ['rose'],
    artType: 'perfume-miss-dior',
    favoriteOrder: 2
  }
];

const COLLECTION_CONFIG = {
  jewelry: {
    categories: ['Necklaces', 'Bracelets', 'Earrings', 'Rings', 'Sets'],
    priceTiers: ['Under $25', '$25 - $50', '$50 - $100', 'Over $100'],
    colors: [
      { id: 'gold', hex: '#E0C088', label: 'Gold' },
      { id: 'rose', hex: '#D9A78E', label: 'Rose Gold' },
      { id: 'cream', hex: '#F3ECE2', label: 'Pearl Cream' },
      { id: 'silver', hex: '#D8D8D8', label: 'Silver' },
      { id: 'black', hex: '#1E1E1E', label: 'Obsidian' }
    ]
  },
  fajas: {
    categories: ['Waist Cinchers', 'Bodysuits', 'Full Body Shapers', 'Shorts'],
    priceTiers: ['Under $25', '$25 - $50', '$50 - $75', 'Over $75'],
    colors: [
      { id: 'sand', hex: '#E8C7AC', label: 'Sand' },
      { id: 'black', hex: '#1A1A1A', label: 'Black' },
      { id: 'rose', hex: '#F2C9BE', label: 'Blush' },
      { id: 'mocha', hex: '#7A5440', label: 'Mocha' }
    ]
  },
  perfume: {
    categories: ["Women's Perfume", "Men's Perfume", 'Unisex'],
    priceTiers: ['Under $50', '$50 - $75', '$75 - $100', 'Over $100'],
    colors: [
      { id: 'rose', hex: '#F3C8C6', label: 'Rose Blush' },
      { id: 'gold', hex: '#E3B462', label: 'Amber Gold' },
      { id: 'black', hex: '#1A1A1A', label: 'Noir' },
      { id: 'cream', hex: '#EFE5DA', label: 'Champagne' }
    ]
  }
};

const ANNOUNCEMENTS = [
  'Free shipping on orders over $75',
  'New arrivals in Sculpted Fajas & Fine Jewelry',
  'Complimentary gift wrapping on every order'
];

const state = {
  activeView: 'home',
  announcementIdx: 0,
  searchQuery: '',
  cart: [],
  filters: {
    jewelry: { categories: [], priceTiers: [], colors: [], sort: 'featured' },
    fajas: { categories: [], priceTiers: [], colors: [], sort: 'featured' },
    perfume: { categories: [], priceTiers: [], colors: [], sort: 'featured' }
  }
};

function formatMoney(num) {
  return '$' + Number(num).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function renderProductArtwork(artType) {
  switch (artType) {
    case 'bangle-gold':
      return `
        <svg width="130" height="105" viewBox="0 0 130 105" fill="none">
          <ellipse cx="65" cy="54" rx="46" ry="26" stroke="#E5B65C" stroke-width="10"/>
          <ellipse cx="65" cy="51" rx="46" ry="26" stroke="#FCE39C" stroke-width="2.5"/>
          <circle cx="42" cy="68" r="3" fill="#8C6223"/>
          <circle cx="65" cy="77" r="3.5" fill="#8C6223"/>
          <circle cx="88" cy="68" r="3" fill="#8C6223"/>
        </svg>`;
    case 'tennis-bracelet':
      return `
        <svg width="130" height="90" viewBox="0 0 130 90" fill="none">
          <ellipse cx="65" cy="46" rx="47" ry="20" stroke="#DDD6CE" stroke-width="7" stroke-dasharray="6 4"/>
          <ellipse cx="65" cy="46" rx="47" ry="20" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="2 8"/>
        </svg>`;
    case 'clover-necklace':
      return `
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M26 16C26 52 94 52 94 16" stroke="#D8AA58" stroke-width="1.6" fill="none"/>
          <g transform="translate(60, 66)">
            <circle cx="0" cy="-11" r="9" fill="#F8F4EE" stroke="#D8AA58" stroke-width="1.8"/>
            <circle cx="11" cy="0" r="9" fill="#F8F4EE" stroke="#D8AA58" stroke-width="1.8"/>
            <circle cx="0" cy="11" r="9" fill="#F8F4EE" stroke="#D8AA58" stroke-width="1.8"/>
            <circle cx="-11" cy="0" r="9" fill="#F8F4EE" stroke="#D8AA58" stroke-width="1.8"/>
            <circle cx="0" cy="0" r="8" fill="#F8F4EE"/>
          </g>
        </svg>`;
    case 'diamond-hoops':
      return `
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <ellipse cx="42" cy="52" rx="18" ry="28" stroke="#E5B65C" stroke-width="6"/>
          <ellipse cx="42" cy="52" rx="18" ry="28" stroke="#FFF8E3" stroke-width="2" stroke-dasharray="4 5"/>
          <ellipse cx="78" cy="52" rx="18" ry="28" stroke="#E5B65C" stroke-width="6"/>
          <ellipse cx="78" cy="52" rx="18" ry="28" stroke="#FFF8E3" stroke-width="2" stroke-dasharray="4 5"/>
        </svg>`;
    case 'rolex-watch':
      return `
        <svg width="110" height="125" viewBox="0 0 110 125" fill="none">
          <rect x="38" y="8" width="34" height="28" rx="3" fill="#DFB26A"/>
          <rect x="38" y="89" width="34" height="28" rx="3" fill="#DFB26A"/>
          <circle cx="55" cy="62" r="27" fill="#E8BE76" stroke="#B6873B" stroke-width="3"/>
          <circle cx="55" cy="62" r="21" fill="#FFFDF9"/>
          <line x1="55" y1="62" x2="55" y2="48" stroke="#2A221D" stroke-width="2"/>
          <line x1="55" y1="62" x2="66" y2="62" stroke="#2A221D" stroke-width="2"/>
        </svg>`;
    case 'clover-bracelet':
      return `
        <svg width="125" height="95" viewBox="0 0 125 95" fill="none">
          <ellipse cx="62" cy="48" rx="44" ry="22" stroke="#D8AA58" stroke-width="2" stroke-dasharray="5 5"/>
          <circle cx="32" cy="56" r="7" fill="#232323" stroke="#D8AA58" stroke-width="1.5"/>
          <circle cx="62" cy="69" r="8" fill="#232323" stroke="#D8AA58" stroke-width="1.5"/>
          <circle cx="92" cy="56" r="7" fill="#232323" stroke="#D8AA58" stroke-width="1.5"/>
        </svg>`;
    case 'cuban-necklace':
      return `
        <svg width="125" height="115" viewBox="0 0 125 115" fill="none">
          <path d="M24 22C24 88 101 88 101 22" stroke="#E2B259" stroke-width="8" stroke-linecap="round" stroke-dasharray="10 4"/>
          <path d="M24 22C24 88 101 88 101 22" stroke="#FFF2C6" stroke-width="2" stroke-dasharray="10 4"/>
        </svg>`;
    case 'pearl-earrings':
      return `
        <svg width="115" height="90" viewBox="0 0 115 90" fill="none">
          <circle cx="40" cy="46" r="14" fill="#F8F3EC" stroke="#DFD4C5" stroke-width="1.5"/>
          <circle cx="36" cy="41" r="4" fill="#FFFFFF" opacity="0.85"/>
          <circle cx="76" cy="46" r="14" fill="#F8F3EC" stroke="#DFD4C5" stroke-width="1.5"/>
          <circle cx="72" cy="41" r="4" fill="#FFFFFF" opacity="0.85"/>
        </svg>`;
    case 'faja-bodysuit-sand':
    case 'faja-thong-sand':
    case 'faja-colombiana':
      return `
        <svg width="105" height="130" viewBox="0 0 105 130" fill="none">
          <path d="M32 16C32 24 41 28 52.5 28C64 28 73 24 73 16L77 56C69 66 69 78 78 90L84 118H63L52.5 92L42 118H21L27 90C36 78 36 66 28 56L32 16Z" fill="#E8C7AC" stroke="#C59D7E" stroke-width="1.6"/>
        </svg>`;
    case 'faja-cincher-black':
    case 'faja-trainer-sand': {
      const fill = artType === 'faja-cincher-black' ? '#23201E' : '#E8C7AC';
      const stroke = artType === 'faja-cincher-black' ? '#0F0D0C' : '#C59D7E';
      return `
        <svg width="105" height="120" viewBox="0 0 105 120" fill="none">
          <path d="M27 24C44 34 61 34 78 24L72 60L79 96C61 86 44 86 26 96L33 60L27 24Z" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
          <line x1="52.5" y1="30" x2="52.5" y2="90" stroke="${artType === 'faja-cincher-black' ? '#4A433E' : '#C59D7E'}" stroke-width="1.5" stroke-dasharray="3 3"/>
        </svg>`;
    }
    case 'faja-shorts-sand':
    case 'faja-shorts-mocha': {
      const fill = artType === 'faja-shorts-mocha' ? '#7A5440' : '#E8C7AC';
      return `
        <svg width="105" height="115" viewBox="0 0 105 115" fill="none">
          <path d="M28 22H77L82 94H57L52.5 64L48 94H23L28 22Z" fill="${fill}" stroke="#5E4030" stroke-width="1.4"/>
        </svg>`;
    }
    case 'faja-bodysuit-black':
    case 'faja-full-black':
      return `
        <svg width="105" height="130" viewBox="0 0 105 130" fill="none">
          <path d="M33 16C33 25 42 29 52.5 29C63 29 72 25 72 16L76 56C68 67 68 79 77 92L82 119H62L52.5 92L43 119H23L28 92C37 79 37 67 29 56L33 16Z" fill="#211E1C" stroke="#12100F" stroke-width="1.6"/>
        </svg>`;
    case 'perfume-chanel':
      return `
        <svg width="95" height="120" viewBox="0 0 95 120" fill="none">
          <rect x="22" y="38" width="51" height="66" rx="5" fill="#F2C14E" stroke="#C89628" stroke-width="1.6"/>
          <rect x="28" y="54" width="39" height="24" fill="#FFFDF7"/>
          <rect x="38" y="24" width="19" height="14" rx="2" fill="#E8C574"/>
          <polygon points="34,24 61,24 55,14 40,14" fill="#F7E3AC"/>
        </svg>`;
    case 'perfume-miss-dior':
      return `
        <svg width="95" height="120" viewBox="0 0 95 120" fill="none">
          <rect x="20" y="42" width="55" height="62" rx="6" fill="#F7C7C5" stroke="#D89D9B" stroke-width="1.6"/>
          <rect x="27" y="60" width="41" height="22" fill="#FFF8F7"/>
          <rect x="40" y="28" width="15" height="14" fill="#E5C48B"/>
          <path d="M29 25C29 18 42 18 47.5 27C53 18 66 18 66 25C66 31 54 31 47.5 27C41 31 29 31 29 25Z" fill="#F0D09B"/>
        </svg>`;
    case 'perfume-ysl':
      return `
        <svg width="95" height="120" viewBox="0 0 95 120" fill="none">
          <rect x="25" y="38" width="45" height="66" rx="4" fill="#EBB456" stroke="#C79237" stroke-width="1.5"/>
          <rect x="33" y="14" width="29" height="24" rx="3" fill="#1C1A19"/>
          <path d="M22 64H73V82H22" stroke="#D9A441" stroke-width="3.5" fill="none"/>
        </svg>`;
    case 'perfume-daisy':
      return `
        <svg width="95" height="120" viewBox="0 0 95 120" fill="none">
          <rect x="24" y="48" width="47" height="56" rx="14" fill="#F6C4C8" stroke="#D6999E" stroke-width="1.5"/>
          <circle cx="34" cy="36" r="10" fill="#F9C6CE"/>
          <circle cx="48" cy="31" r="10" fill="#FAD2D8"/>
          <circle cx="62" cy="36" r="10" fill="#F9C6CE"/>
          <circle cx="48" cy="38" r="5" fill="#E8B243"/>
        </svg>`;
    case 'perfume-versace':
      return `
        <svg width="95" height="120" viewBox="0 0 95 120" fill="none">
          <rect x="22" y="48" width="51" height="56" rx="5" fill="#F7C9CE" stroke="#D9A1A8" stroke-width="1.5"/>
          <polygon points="24,48 71,48 61,20 34,20" fill="#FCE5E8" stroke="#D9A1A8" stroke-width="1.4"/>
        </svg>`;
    case 'perfume-good-girl':
    default:
      return `
        <svg width="105" height="120" viewBox="0 0 105 120" fill="none">
          <path d="M22 96C22 80 48 64 56 32L66 36C62 60 76 74 84 96H22Z" fill="#1E2028"/>
          <line x1="76" y1="68" x2="78" y2="96" stroke="#E5B65C" stroke-width="4"/>
        </svg>`;
  }
}

function createProductCardHTML(product) {
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-img-box">
        ${renderProductArtwork(product.artType)}
      </div>
      <h3 class="product-name">${product.title}</h3>
      <div class="product-price">${formatMoney(product.price)}</div>
      <button type="button" class="btn-add-cart" data-add-id="${product.id}">ADD TO CART</button>
    </article>`;
}

function renderFavorites() {
  const favorites = PRODUCTS
    .filter(p => typeof p.favoriteOrder === 'number')
    .sort((a, b) => a.favoriteOrder - b.favoriteOrder);
  document.getElementById('favoritesGrid').innerHTML = favorites.map(createProductCardHTML).join('');
}

function renderCollectionSidebar(viewName) {
  const config = COLLECTION_CONFIG[viewName];
  const viewFilters = state.filters[viewName];
  const sidebarEl = document.getElementById(`sidebar-${viewName}`);

  const hasAnyFilter =
    viewFilters.categories.length > 0 ||
    viewFilters.priceTiers.length > 0 ||
    viewFilters.colors.length > 0;

  sidebarEl.innerHTML = `
    <h2 class="filter-heading">Filter By</h2>

    <div class="filter-group" data-group="category">
      <button type="button" class="filter-group-toggle">
        <span>Category</span>
        <span>&#709;</span>
      </button>
      <div class="filter-group-body">
        ${config.categories.map(cat => {
          const checked = viewFilters.categories.includes(cat) ? 'checked' : '';
          return `
            <label class="filter-checkbox-label">
              <input type="checkbox" class="filter-cat-cb" data-view="${viewName}" value="${cat}" ${checked} />
              <span>${cat}</span>
            </label>`;
        }).join('')}
      </div>
    </div>

    <div class="filter-group" data-group="price">
      <button type="button" class="filter-group-toggle">
        <span>Price</span>
        <span>&#709;</span>
      </button>
      <div class="filter-group-body">
        ${config.priceTiers.map(tier => {
          const checked = viewFilters.priceTiers.includes(tier) ? 'checked' : '';
          return `
            <label class="filter-checkbox-label">
              <input type="checkbox" class="filter-price-cb" data-view="${viewName}" value="${tier}" ${checked} />
              <span>${tier}</span>
            </label>`;
        }).join('')}
      </div>
    </div>

    <div class="filter-group" data-group="color">
      <button type="button" class="filter-group-toggle">
        <span>Color</span>
      </button>
      <div class="filter-group-body">
        <div class="color-swatches-row">
          ${config.colors.map(sw => {
            const isSel = viewFilters.colors.includes(sw.id) ? 'selected' : '';
            return `
              <button
                type="button"
                class="color-swatch ${isSel}"
                data-view="${viewName}"
                data-color="${sw.id}"
                title="${sw.label}"
                aria-label="Filter by ${sw.label}"
                style="background-color: ${sw.hex};"
              ></button>`;
          }).join('')}
        </div>
      </div>
    </div>

    <button type="button" class="clear-filters-btn ${hasAnyFilter ? 'visible' : ''}" data-clear-view="${viewName}">
      Clear all filters
    </button>
  `;

  sidebarEl.querySelectorAll('.filter-group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('collapsed');
    });
  });

  sidebarEl.querySelectorAll('.filter-cat-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      const arr = state.filters[viewName].categories;
      if (cb.checked) {
        if (!arr.includes(val)) arr.push(val);
      } else {
        state.filters[viewName].categories = arr.filter(x => x !== val);
      }
      renderCollectionView(viewName);
    });
  });

  sidebarEl.querySelectorAll('.filter-price-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      const arr = state.filters[viewName].priceTiers;
      if (cb.checked) {
        if (!arr.includes(val)) arr.push(val);
      } else {
        state.filters[viewName].priceTiers = arr.filter(x => x !== val);
      }
      renderCollectionView(viewName);
    });
  });

  sidebarEl.querySelectorAll('.color-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      const col = sw.dataset.color;
      const arr = state.filters[viewName].colors;
      if (arr.includes(col)) {
        state.filters[viewName].colors = arr.filter(x => x !== col);
      } else {
        arr.push(col);
      }
      renderCollectionView(viewName);
    });
  });

  const clearBtn = sidebarEl.querySelector('.clear-filters-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.filters[viewName].categories = [];
      state.filters[viewName].priceTiers = [];
      state.filters[viewName].colors = [];
      renderCollectionView(viewName);
    });
  }
}

function getFilteredCollectionProducts(viewName) {
  const f = state.filters[viewName];
  const q = state.searchQuery.trim().toLowerCase();

  let list = PRODUCTS.filter(p => {
    if (p.collection !== viewName) return false;
    if (viewName === 'fajas' && p.id === 'faj-colombiana-fav') return false;
    if (viewName === 'perfume' && p.id === 'prf-miss-dior-edp-fav') return false;

    if (f.categories.length > 0 && !f.categories.includes(p.category)) return false;
    if (f.priceTiers.length > 0 && !f.priceTiers.includes(p.priceTier)) return false;
    if (f.colors.length > 0 && !p.colors.some(c => f.colors.includes(c))) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;

    return true;
  });

  if (f.sort === 'price-asc') {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (f.sort === 'price-desc') {
    list = [...list].sort((a, b) => b.price - a.price);
  }

  return list;
}

function renderCollectionView(viewName) {
  renderCollectionSidebar(viewName);
  const gridEl = document.getElementById(`grid-${viewName}`);
  const items = getFilteredCollectionProducts(viewName);

  if (items.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-catalog-state">
        <p>No pieces match your current selection.</p>
        <button type="button" class="btn-espresso" id="resetEmpty-${viewName}">RESET FILTERS</button>
      </div>`;
    const resetBtn = document.getElementById(`resetEmpty-${viewName}`);
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.filters[viewName].categories = [];
        state.filters[viewName].priceTiers = [];
        state.filters[viewName].colors = [];
        state.searchQuery = '';
        document.getElementById('globalSearchInput').value = '';
        document.getElementById('clearSearchBtn').classList.remove('visible');
        renderCollectionView(viewName);
      });
    }
    return;
  }

  gridEl.innerHTML = items.map(createProductCardHTML).join('');
  bindAddToCartButtons(gridEl);
}

function switchView(viewName) {
  state.activeView = viewName;

  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === viewName);
  });

  if (['jewelry', 'fajas', 'perfume'].includes(viewName)) {
    renderCollectionView(viewName);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(productId, triggerBtn) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.product.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ product, qty: 1 });
  }

  document.getElementById('checkoutConfirmBanner').classList.remove('show');
  updateCartUI(true);

  if (triggerBtn) {
    const prevText = triggerBtn.textContent;
    triggerBtn.textContent = 'ADDED ✓';
    triggerBtn.classList.add('added');
    setTimeout(() => {
      triggerBtn.textContent = prevText;
      triggerBtn.classList.remove('added');
    }, 850);
  }
}

function updateQty(productId, delta) {
  const idx = state.cart.findIndex(item => item.product.id === productId);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  updateCartUI(false);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.product.id !== productId);
  updateCartUI(false);
}

function updateCartUI(bumpBadge) {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  const badge = document.getElementById('bagCountBadge');
  badge.textContent = totalQty;
  if (bumpBadge) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }

  const threshold = 75;
  const remaining = Math.max(0, threshold - subtotal);
  const pct = Math.min(100, (subtotal / threshold) * 100);
  document.getElementById('shippingBarFill').style.width = pct + '%';

  const statusEl = document.getElementById('shippingStatusText');
  if (subtotal >= threshold) {
    statusEl.innerHTML = 'You unlocked <strong>Complimentary Free Shipping</strong>!';
  } else {
    statusEl.innerHTML = `Add <strong>${formatMoney(remaining)}</strong> more to unlock <strong>Free Shipping</strong>`;
  }

  document.getElementById('cartSubtotal').textContent = formatMoney(subtotal);

  const itemsContainer = document.getElementById('drawerItems');
  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="drawer-empty">
        <p>Your bag is currently empty.</p>
        <span>Explore Jewelry, Fajas, or Perfume to add your favorites.</span>
      </div>`;
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-card">
      <div class="cart-item-thumb">
        ${renderProductArtwork(item.product.artType)}
      </div>
      <div class="cart-item-info">
        <h4>${item.product.title}</h4>
        <div class="cart-item-price">${formatMoney(item.product.price)}</div>
        <div class="qty-stepper">
          <button type="button" class="qty-dec" data-id="${item.product.id}" aria-label="Decrease quantity">&minus;</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-inc" data-id="${item.product.id}" aria-label="Increase quantity">&plus;</button>
        </div>
      </div>
      <button type="button" class="remove-item-btn" data-remove="${item.product.id}">Remove</button>
    </div>`).join('');

  itemsContainer.querySelectorAll('.qty-dec').forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn.dataset.id, -1));
  });
  itemsContainer.querySelectorAll('.qty-inc').forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn.dataset.id, 1));
  });
  itemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
  });
}

function openBag() {
  document.getElementById('drawerBackdrop').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}

function closeBag() {
  document.getElementById('drawerBackdrop').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

function bindAddToCartButtons(root = document) {
  root.querySelectorAll('.btn-add-cart').forEach(btn => {
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => addToCart(btn.dataset.addId, btn));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFavorites();
  bindAddToCartButtons(document.getElementById('favoritesGrid'));
  updateCartUI(false);

  document.getElementById('prevAnnouncement').addEventListener('click', () => {
    state.announcementIdx = (state.announcementIdx - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;
    document.getElementById('announcementText').textContent = ANNOUNCEMENTS[state.announcementIdx];
  });
  document.getElementById('nextAnnouncement').addEventListener('click', () => {
    state.announcementIdx = (state.announcementIdx + 1) % ANNOUNCEMENTS.length;
    document.getElementById('announcementText').textContent = ANNOUNCEMENTS[state.announcementIdx];
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => switchView(link.dataset.view));
  });
  document.getElementById('logoHomeBtn').addEventListener('click', () => switchView('home'));
  document.querySelectorAll('.crumb-home').forEach(btn => {
    btn.addEventListener('click', () => switchView('home'));
  });

  document.querySelectorAll('.category-tile').forEach(tile => {
    tile.addEventListener('click', () => switchView(tile.dataset.jumpView));
  });

  document.getElementById('heroShopNowBtn').addEventListener('click', () => {
    document.getElementById('favoritesSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.scroll-to-catalog-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const toolbar = btn.closest('.page-view').querySelector('.catalog-toolbar');
      if (toolbar) toolbar.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const searchInput = document.getElementById('globalSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    clearSearchBtn.classList.toggle('visible', state.searchQuery.length > 0);

    const q = state.searchQuery.trim().toLowerCase();
    if (q && state.activeView === 'home') {
      const match = PRODUCTS.find(p =>
        p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
      if (match) {
        switchView(match.collection);
        return;
      }
    }

    if (['jewelry', 'fajas', 'perfume'].includes(state.activeView)) {
      renderCollectionView(state.activeView);
    }
  });

  clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    if (['jewelry', 'fajas', 'perfume'].includes(state.activeView)) {
      renderCollectionView(state.activeView);
    }
  });

  document.querySelectorAll('.sort-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const viewName = sel.dataset.viewSort;
      state.filters[viewName].sort = sel.value;
      renderCollectionView(viewName);
    });
  });

  document.getElementById('openBagBtn').addEventListener('click', openBag);
  document.getElementById('closeBagBtn').addEventListener('click', closeBag);
  document.getElementById('drawerBackdrop').addEventListener('click', closeBag);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) return;
    state.cart = [];
    updateCartUI(false);
    document.getElementById('checkoutConfirmBanner').classList.add('show');
  });

  const infoModal = document.getElementById('infoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  document.getElementById('accountBtn').addEventListener('click', () => {
    modalTitle.textContent = 'Boutique Account';
    modalBody.textContent = 'Sign in to Leticia\'s Boutique to save wishlists, view order history, and receive early access to drops.';
    infoModal.classList.add('open');
  });

  document.querySelectorAll('[data-info-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.infoModal;
      if (key === 'shipping') {
        modalTitle.textContent = 'Shipping & Returns';
        modalBody.textContent = 'Complimentary standard shipping on orders over $75. Easy 14-day returns on unworn items in original packaging.';
      } else if (key === 'authenticity') {
        modalTitle.textContent = 'Authenticity Guarantee';
        modalBody.textContent = 'Every piece at Leticia\'s Boutique is carefully inspected and guaranteed authentic.';
      } else {
        modalTitle.textContent = 'Boutique Concierge';
        modalBody.textContent = 'Need sizing advice on Fajas or styling help with Jewelry and Fragrances? Our team is here to assist.';
      }
      infoModal.classList.add('open');
    });
  });

  document.getElementById('closeModalBtn').addEventListener('click', () => {
    infoModal.classList.remove('open');
  });
  infoModal.addEventListener('click', e => {
    if (e.target === infoModal) infoModal.classList.remove('open');
  });
});
// Complete Order Popup Handler
function processOrder(event) {
    event.preventDefault();
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    switchView('home');
}

