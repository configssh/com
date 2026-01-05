const App = (() => {
  const SECTIONS = {
    football: { id: "football", label: "كرة القدم" },
    configs: { id: "configs", label: "الكونفيجبات" },
    anime: { id: "anime", label: "الأنيـمي" },
    payload: { id: "payload", label: "Payload" },
    favorite: { id: "favorite", label: "المفضلة" },
  };

  const FILTERS = {
    football: [
      { id: "scores", label: "scores" },
      { id: "live", label: "live" },
      { id: "all", label: "الكل" },
      { id: "news", label: "news" },
      { id: "official", label: "official" },
    ],
    configs: [
      { id: "websocket", label: "websocket" },
      { id: "ssh", label: "ssh" },
      { id: "all", label: "الكل" },
      { id: "tunnel", label: "tunnel" },
      { id: "vpn", label: "vpn" },
    ],
    anime: [
      { id: "free", label: "free" },
      { id: "premium", label: "premium" },
      { id: "info", label: "info" },
      { id: "all", label: "الكل" },
    ],
    payload: [
      { id: "inwi", label: "INWI" },
      { id: "iam", label: "IAM" },
      { id: "all", label: "الكل" },
      { id: "mixed", label: "مختلط" },
      { id: "orange", label: "ORANGE" },
    ],
    favorite: [
      { id: "websocket", label: "websocket" },
      { id: "ssh", label: "ssh" },
      { id: "all", label: "الكل" },
      { id: "tunnel", label: "tunnel" },
      { id: "vpn", label: "vpn" },
    ],
  };

  const BADGE_CLASS = {
    LIVE: "live",
    NEWS: "news",
    PREMIUM: "premium",
    FREE: "free",
    INFO: "info",
    "أنمي": "anime",
    "كرة قدم": "football",
    PAYLOAD: "payload",
    PROXY: "proxy",
    SSH: "ssh",
    WEBSOCKET: "websocket",
    TUNNEL: "tunnel",
    VPN: "vpn",
  };

  const DATA = [
    {
      id: "ft-1",
      category: "football",
      subCategory: "official",
      title: "Kooora",
      url: "https://www.kooora.com",
      badgeType: "OFFICIAL",
      badgeLabel: "كرة قدم",
      description: "موقع عربي رسمي للأخبار والنتائج وجدول المباريات.",
      logo: "",
    },
    {
      id: "ft-2",
      category: "football",
      subCategory: "news",
      title: "ESPN Football",
      url: "https://www.espn.com/soccer/",
      badgeType: "NEWS",
      badgeLabel: "NEWS",
      description: "أخبار كرة القدم العالمية وتحليلات وروابط مباشرة.",
      logo: "",
    },
    {
      id: "ft-3",
      category: "football",
      subCategory: "scores",
      title: "SofaScore",
      url: "https://www.sofascore.com",
      badgeType: "SCORES",
      badgeLabel: "كرة قدم",
      description: "نتائج مباشرة وإحصائيات تفصيلية لكل مباراة.",
      logo: "",
    },
    {
      id: "ft-4",
      category: "football",
      subCategory: "live",
      title: "Footybite",
      url: "https://www.footybite.to",
      badgeType: "LIVE",
      badgeLabel: "LIVE",
      description: "أشهر موقع لبث المباريات مباشرة بجودات مختلفة.",
      logo: "",
    },

    {
      id: "an-1",
      category: "anime",
      subCategory: "premium",
      title: "Crunchyroll",
      url: "https://www.crunchyroll.com",
      badgeType: "PREMIUM",
      badgeLabel: "PREMIUM",
      description: "أفضل منصة رسمية لمشاهدة الأنمي بجودة عالية.",
      logo: "",
    },
    {
      id: "an-2",
      category: "anime",
      subCategory: "free",
      title: "9anime",
      url: "https://9anime.to",
      badgeType: "FREE",
      badgeLabel: "أنمي",
      description: "موقع أنمي مجاني بمكتبة ضخمة وتحديثات سريعة.",
      logo: "",
    },
    {
      id: "an-3",
      category: "anime",
      subCategory: "info",
      title: "MyAnimeList",
      url: "https://myanimelist.net",
      badgeType: "INFO",
      badgeLabel: "INFO",
      description: "معلومات وتقييمات وقوائم تتبع لكل أعمال الأنمي.",
      logo: "",
    },
    {
      id: "an-4",
      category: "anime",
      subCategory: "free",
      title: "Gogoanime",
      url: "https://gogoanime3.co",
      badgeType: "FREE",
      badgeLabel: "أنمي",
      description: "مشاهدة وتحميل أنمي مترجم بسرعة وخيارات متعددة.",
      logo: "",
    },

    {
      id: "pl-1",
      category: "payload",
      subCategory: "iam",
      title: "Payload IAM ⭐ 6",
      url: "",
      badgeType: "PAYLOAD",
      badgeLabel: "IAM",
      description: "بايلود IAM شغال (نموذجي) للاختبار.",
      logo: "",
      operator: "IAM",
      isMixed: false,
      carrierLabel: "اتصالات المغرب",
      payloadContent:
        "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: click.snapchat.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf]User-Agent: [ua][crlf]Upgrade: websocket;www.twitter.com[crlf][crlf]",
    },
    {
      id: "pl-2",
      category: "payload",
      subCategory: "inwi",
      title: "INWI Payload ⭐ 6",
      url: "",
      badgeType: "PAYLOAD",
      badgeLabel: "INWI",
      description: "بايلود INWI (نموذجي) مع [host] و[crlf].",
      logo: "",
      operator: "INWI",
      isMixed: false,
      carrierLabel: "إنوي المغرب",
      payloadContent:
        "CONNECT [host] HTTP/1.1[crlf]Host: api.inwi.ma[crlf]Proxy-Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]",
    },
    {
      id: "pl-3",
      category: "payload",
      subCategory: "orange",
      title: "ORANGE Payload ⭐ 6",
      url: "",
      badgeType: "PAYLOAD",
      badgeLabel: "ORANGE",
      description: "بايلود أورانج (نموذجي) للاستخدام في نفق/ويب سوكيت.",
      logo: "",
      operator: "ORANGE",
      isMixed: false,
      carrierLabel: "أورانج المغرب",
      payloadContent:
        "GET wss://[host]/ HTTP/1.1[crlf]Host: orange.ma[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf]User-Agent: [ua][crlf][crlf]",
    },
    {
      id: "pl-4",
      category: "payload",
      subCategory: "mixed",
      title: "Mixed Payload ⭐ 6",
      url: "",
      badgeType: "PAYLOAD",
      badgeLabel: "مختلط",
      description: "بايلود مختلط قد يشتغل مع أكثر من مشغل (نموذجي).",
      logo: "",
      operator: "MIXED",
      isMixed: true,
      carrierLabel: "مختلط (INWI+IAM)",
      payloadContent:
        "GET / HTTP/1.1[crlf]Host: m.facebook.com[crlf]Connection: keep-alive[crlf]User-Agent: [ua][crlf][crlf]",
    },

    {
      id: "px-iam-1",
      category: "payload",
      subCategory: "iam",
      title: "Proxy IAM ⭐ 6",
      url: "",
      badgeType: "PROXY",
      badgeLabel: "IAM",
      description: "بروكسي IAM (نموذجي) للاستخدام في التطبيقات.",
      logo: "",
      operator: "IAM",
      isMixed: false,
      carrierLabel: "اتصالات المغرب",
      payloadContent: "iam-proxy.example.com:8080",
    },
    {
      id: "px-inwi-1",
      category: "payload",
      subCategory: "inwi",
      title: "Proxy INWI ⭐ 6",
      url: "",
      badgeType: "PROXY",
      badgeLabel: "INWI",
      description: "بروكسي INWI (نموذجي) سريع ومستقر.",
      logo: "",
      operator: "INWI",
      isMixed: false,
      carrierLabel: "إنوي المغرب",
      payloadContent: "inwi-proxy.example.com:8080",
    },
    {
      id: "px-orange-1",
      category: "payload",
      subCategory: "orange",
      title: "Proxy ORANGE ⭐ 6",
      url: "",
      badgeType: "PROXY",
      badgeLabel: "ORANGE",
      description: "بروكسي أورانج (نموذجي) للاختبار.",
      logo: "",
      operator: "ORANGE",
      isMixed: false,
      carrierLabel: "أورانج المغرب",
      payloadContent: "orange-proxy.example.com:8080",
    },
    {
      id: "px-mix-1",
      category: "payload",
      subCategory: "mixed",
      title: "MIX Proxy IAM+INWI ⭐ 6",
      url: "",
      badgeType: "PROXY",
      badgeLabel: "مختلط (IAM+INWI)",
      description: "بروكسي مختلط (نموذجي) قد يشتغل مع أكثر من مشغل.",
      logo: "",
      operator: "MIXED",
      isMixed: true,
      carrierLabel: "مختلط (IAM+INWI)",
      payloadContent: "mix-proxy.com:8080",
    },

    {
      id: "fv-1",
      category: "configs",
      subCategory: "ssh",
      title: "ssh",
      url: "https://sshs8.com/",
      badgeType: "SSH",
      badgeLabel: "SSH",
      description: "أفضل موقع لخدمات SSH مع واجهة مستخدم رائعة.",
      logo: "",
    },
    {
      id: "fv-2",
      category: "configs",
      subCategory: "ssh",
      title: "SSH Store",
      url: "https://sshstores.net",
      badgeType: "SSH",
      badgeLabel: "SSH",
      description: "حسابات SSH وتجديد سريع ولوحات تحكم.",
      logo: "",
    },
    {
      id: "fv-3",
      category: "configs",
      subCategory: "vpn",
      title: "VPN Stunnel",
      url: "https://www.vpnstunnel.com",
      badgeType: "VPN",
      badgeLabel: "VPN موقع",
      description: "خدمات VPN/SSL Tunnel للاستخدام على عدة منصات.",
      logo: "",
    },
    {
      id: "fv-4",
      category: "configs",
      subCategory: "tunnel",
      title: "My Tunneling",
      url: "https://example.com",
      badgeType: "TUNNEL",
      badgeLabel: "TUNNEL موقع",
      description: "مجموعة أدوات للأنفاق: stunnel / websocket / ssl.",
      logo: "",
    },
    {
      id: "fv-5",
      category: "configs",
      subCategory: "websocket",
      title: "Green SSH",
      url: "https://example.com/green-ssh",
      badgeType: "WEBSOCKET",
      badgeLabel: "WEBSOCKET موقع",
      description: "ويب سوكيت + SSH مع إعدادات جاهزة.",
      logo: "",
    },
    {
      id: "fv-6",
      category: "configs",
      subCategory: "ssh",
      title: "SSH Ocean",
      url: "https://sshocean.com",
      badgeType: "SSH",
      badgeLabel: "SSH",
      description: "أفضل موقع لخدمات SSH مع واجهة مستخدم رائعة.",
      logo: "",
    }
  ];

  const itemById = new Map(DATA.map((item) => [String(item.id), item]));

  const STORAGE_KEYS = {
    theme: "theme",
    favorites: "confighub.favorites",
  };

  function readSavedTheme() {
    try {
      let saved = localStorage.getItem(STORAGE_KEYS.theme);
      if (!saved) {
        const legacy = localStorage.getItem("confighub.theme");
        if (legacy) {
          saved = legacy;
          localStorage.setItem(STORAGE_KEYS.theme, legacy);
        }
      }
      return saved;
    } catch {
      return null;
    }
  }

  const EXPORT_FILENAME = "confighub-favorites.json";

  const SEARCH_RENDER_DEBOUNCE_MS = 80;

  const state = {
    section: "configs",
    filter: "all",
    query: "",
    favorites: new Set(),
  };

  const els = {};

  const searchIndex = new Map();

  function $(sel) {
    return document.querySelector(sel);
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeForSearch(s) {
    return String(s)
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function buildSearchIndex() {
    searchIndex.clear();
    for (const item of DATA) {
      const hay = normalizeForSearch(
        [
          item.title,
          item.url,
          item.description,
          item.badgeLabel,
          item.operator,
          item.payloadContent,
        ]
          .filter(Boolean)
          .join(" ")
      );
      searchIndex.set(String(item.id), hay);
    }
  }

  function toDisplayUrl(url) {
    if (!url) return "";
    const u = String(url).trim();
    const cleaned = u.replace(/^\/+/, "");
    return `/${cleaned}`;
  }

  function toOpenUrl(url) {
    if (!url) return "";
    const u = String(url).trim();
    if (/^https?:\/\//i.test(u)) return u;
    if (u.startsWith("//")) return `https:${u}`;
    return `https://${u}`;
  }

  function domainForFavicon(url) {
    if (!url) return "";
    try {
      const u = new URL(toOpenUrl(url));
      return u.hostname;
    } catch {
      const cleaned = String(url)
        .trim()
        .replace(/^https?:\/\//i, "")
        .replace(/^\/\//, "")
        .split("/")[0]
        .split("?")[0]
        .split("#")[0];
      return cleaned;
    }
  }

  function logoSvgDataUrl(seedText) {
    const txt = String(seedText || "").trim();
    const letter = (txt.match(/[A-Za-z0-9\u0600-\u06FF]/) || ["?"])[0];

    let hash = 0;
    for (let i = 0; i < txt.length; i++) {
      hash = (hash * 31 + txt.charCodeAt(i)) >>> 0;
    }

    const hue = hash % 360;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="hsl(${hue} 85% 60%)"/>
            <stop offset="1" stop-color="hsl(${(hue + 40) % 360} 85% 55%)"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="128" height="128" rx="28" fill="url(#g)"/>
        <text x="64" y="74" text-anchor="middle" font-size="56" font-weight="800" fill="rgb(11,18,32)" font-family="Cairo, Inter, Arial, sans-serif">${escapeHtml(
          letter
        )}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
  }

  function getFavoriteIds() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.favorites);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(String);
    } catch {
      return [];
    }
  }

  function setFavoriteIds(ids) {
    try {
      localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(ids));
    } catch {
      // ignore
    }
  }

  function downloadTextFile(filename, text) {
    const blob = new Blob([text], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function exportFavorites() {
    const ids = Array.from(state.favorites);
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      favorites: ids,
    };

    downloadTextFile(EXPORT_FILENAME, JSON.stringify(payload, null, 2));
    toast("تم تصدير المفضلة");
  }

  function normalizeImportedFavorites(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(String);

    if (typeof value === "object") {
      const list = value.favorites;
      if (Array.isArray(list)) return list.map(String);
    }

    return [];
  }

  function importFavoritesFromJsonText(text) {
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      toast("ملف غير صالح (JSON)");
      return;
    }

    const ids = normalizeImportedFavorites(parsed);
    if (ids.length === 0) {
      toast("لا توجد مفضلة داخل الملف");
      return;
    }

    // Keep only ids that exist in data
    const filtered = ids.filter((id) => itemById.has(String(id)));
    state.favorites = new Set(filtered);
    setFavoriteIds(filtered);

    toast("تم استيراد المفضلة");
    renderContent();
  }

  function loadTheme() {
    const saved = readSavedTheme();
    if (saved === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function toggleTheme() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(STORAGE_KEYS.theme, "dark");
      toast("تم تفعيل الوضع الداكن");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(STORAGE_KEYS.theme, "light");
      toast("تم تفعيل الوضع الفاتح");
    }
  }

  function toast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(els.toast._t);
    els.toast._t = setTimeout(() => {
      els.toast.classList.remove("show");
    }, 2000);
  }

  function scrollToTopSmooth() {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }

  function showSkeleton(count = 4) {
    const cards = Array.from({ length: count }).map(() => {
      return `
        <article class="card skeleton">
          <div class="signal">${Array.from({ length: 10 })
            .map(() => "<span class=\"sig-inwi\"></span>")
            .join("")}</div>
          <div class="card-top">
            <div class="logo"><span class="logo-fallback">—</span></div>
          </div>
          <h3 class="title">—</h3>
          <p class="url">—</p>
          <div class="badges">
            <span class="badge soft">—</span>
            <span class="badge soft">—</span>
          </div>
          <p class="desc">—</p>
          <div class="card-actions">
            <button class="action-btn btn-copy" type="button">—</button>
            <button class="action-btn btn-visit" type="button">—</button>
          </div>
        </article>
      `;
    });
    els.grid.innerHTML = cards.join("");
  }

  function withSkeletonRender(fn) {
    showSkeleton(state.section === "payload" ? 2 : 4);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fn();
      });
    });
  }

  async function copyToClipboard(text) {
    const value = String(text ?? "");
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "0";
        ta.style.pointerEvents = "none";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch {
        return false;
      }
    }
  }

  function sectionLabel(id) {
    return SECTIONS[id]?.label || id;
  }

  function getSignalSegments(item) {
    const out = [];
    const push = (cls) => out.push(`<span class="${cls}"></span>`);

    const operator = String(item.operator || "").toUpperCase();
    if (item.category === "payload") {
      if (item.isMixed) {
        push("sig-inwi");
        push("sig-iam");
        push("sig-orange");
        push("sig-inwi");
        push("sig-iam");
        push("sig-orange");
      } else if (operator === "INWI") {
        for (let i = 0; i < 6; i++) push("sig-inwi");
        for (let i = 0; i < 4; i++) push("sig-iam");
      } else if (operator === "IAM") {
        for (let i = 0; i < 6; i++) push("sig-iam");
        for (let i = 0; i < 4; i++) push("sig-orange");
      } else if (operator === "ORANGE") {
        for (let i = 0; i < 6; i++) push("sig-orange");
        for (let i = 0; i < 4; i++) push("sig-inwi");
      } else {
        for (let i = 0; i < 10; i++) push("sig-inwi");
      }
    } else {
      // non-payload cards: show soft mixed signal
      for (let i = 0; i < 4; i++) push("sig-inwi");
      for (let i = 0; i < 3; i++) push("sig-iam");
      for (let i = 0; i < 3; i++) push("sig-orange");
    }

    return out.slice(0, 5).join("");
  }

  function badgeClassFrom(item) {
    const key = String(item.badgeType || item.badgeLabel || "").toUpperCase();
    if (BADGE_CLASS[key]) return BADGE_CLASS[key];

    const label = String(item.badgeLabel || "");
    if (BADGE_CLASS[label]) return BADGE_CLASS[label];

    return "soft";
  }

  function isInActiveSection(item) {
    if (state.section === "favorite") {
      return state.favorites.has(item.id);
    }
    return item.category === state.section;
  }

  function filterBySidebar(item) {
    if (state.filter === "all") return true;

    if (state.section === "payload") {
      if (state.filter === "mixed") return !!item.isMixed;
      if (state.filter === "inwi") return String(item.operator).toUpperCase() === "INWI";
      if (state.filter === "iam") return String(item.operator).toUpperCase() === "IAM";
      if (state.filter === "orange") return String(item.operator).toUpperCase() === "ORANGE";
      return true;
    }

    return item.subCategory === state.filter;
  }

  function filterBySearch(item) {
    const q = normalizeForSearch(state.query);
    if (!q) return true;

    const hay = searchIndex.get(String(item.id)) || "";
    return hay.includes(q);
  }

  function getVisibleItems() {
    return DATA.filter((item) => isInActiveSection(item) && filterBySidebar(item) && filterBySearch(item));
  }

  function renderSidebar() {
    const filters = FILTERS[state.section] || [{ id: "all", label: "الكل" }];
    els.filters.innerHTML = filters
      .map(
        (f) =>
          `<button class="filter-btn ${f.id === state.filter ? "active" : ""}" data-filter="${f.id}">${escapeHtml(
            f.label
          )}</button>`
      )
      .join("");

    els.sidebarTitle.textContent = `فلاتر: ${sectionLabel(state.section)}`;
  }

  function renderNav() {
    const navButtons = document.querySelectorAll("[data-section]");
    navButtons.forEach((btn) => {
      const id = btn.getAttribute("data-section");
      btn.classList.toggle("active", id === state.section);
    });
  }

  function renderContent() {
    const items = getVisibleItems();
    els.resultCount.textContent = `${items.length} نتيجة`;
    els.contentTitle.textContent = sectionLabel(state.section);

    if (items.length === 0) {
      els.grid.innerHTML =
        state.section === "favorite"
          ? `<div class="empty">لا توجد عناصر في المفضلة بعد. اضغط ❤ على أي بطاقة لإضافتها.</div>`
          : `<div class="empty">لا توجد نتائج مطابقة. جرّب تغيير الفلتر أو البحث.</div>`;
      return;
    }

    els.grid.innerHTML = items.map((item) => renderCard(item)).join("");
  }

  function renderCard(item) {
    const isFav = state.favorites.has(item.id);
    const badgeCls = badgeClassFrom(item);

    if (item.category === "payload") {
      const operator = String(item.operator || "").toUpperCase();
      const opClass = operator === "INWI" ? "op-inwi" : operator === "IAM" ? "op-iam" : operator === "ORANGE" ? "op-orange" : "op-mixed";
      const operatorText = escapeHtml(item.badgeLabel || operator || "");
      const typeText = escapeHtml(String(item.badgeType || "PAYLOAD").toUpperCase());
      const typeClass = String(item.badgeType || "").toUpperCase() === "PROXY" ? "proxy" : "payload";

      const copyValue = item.payloadContent || "";
      const copyLabel = "نسخ Payload";

      const logoSrc = logoSvgDataUrl(item.title || item.badgeLabel || item.operator || item.logo);
      const logoBlock = `<div class="logo" aria-hidden="true">
          <img src="${escapeHtml(logoSrc)}" alt="" loading="lazy" decoding="async" />
          <span class="logo-fallback">${escapeHtml(item.logo || "")}</span>
        </div>`;

      const carrier = item.carrierLabel ? `<span class="badge soft">${escapeHtml(item.carrierLabel)}</span>` : "";

      return `
        <article class="card card--split" data-id="${escapeHtml(item.id)}">
          <div class="signal">${getSignalSegments(item)}</div>

          <button class="fav-btn ${isFav ? "active" : ""}" title="مفضلة" data-fav="${escapeHtml(item.id)}">${
        isFav ? "❤" : "♡"
      }</button>

          <div class="card-split">
            <div class="card-like"></div>
            <div class="card-main">
              <div class="card-top">
                ${logoBlock}
              </div>

              <h3 class="title">${escapeHtml(item.title)}</h3>
              <p class="url">Payload</p>

              <div class="badges">
                <span class="badge operator ${opClass}">${operatorText}</span>
                ${carrier}
                <span class="badge ${typeClass}">${typeText}</span>
              </div>

              <div class="payload-box">
                <p class="payload-label">المحتوى:</p>
                <pre class="payload-content" data-payload-id="${escapeHtml(item.id)}">${escapeHtml(copyValue)}</pre>
              </div>

              <div class="card-actions payload-actions">
                <button class="action-btn btn-copy payload-copy" data-copy="${escapeHtml(
                  item.id
                )}" data-copy-value="${escapeHtml(copyValue)}">${copyLabel}</button>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    const showUrl = item.url ? toDisplayUrl(item.url) : "";

    const badgeRight =
      item.category === "payload"
        ? `<span class="badge ${badgeCls}">${escapeHtml(item.badgeLabel || "PAYLOAD")}</span>`
        : `<span class="badge ${badgeCls}">${escapeHtml(item.badgeLabel || "")}</span>`;

    const badgeLeft =
      item.category === "payload"
        ? `<span class="badge soft">Payload</span>`
        : `<span class="badge soft">موقع</span>`;

    const payloadBlock =
      item.category === "payload"
        ? `<div class="payload-box">
            <p class="payload-label">المحتوى:</p>
            <pre class="payload-content" data-payload-id="${escapeHtml(item.id)}">${escapeHtml(
              item.payloadContent || ""
            )}</pre>
          </div>`
        : "";

    const copyLabel = item.category === "payload" ? "نسخ Payload" : "نسخ الرابط";
    const visitLabel = item.category === "payload" ? "زيارة الموقع" : "زيارة الموقع";

    const copyValue = item.category === "payload" ? item.payloadContent || "" : item.url || "";

    const canVisit = !!item.url;

    const fallbackLogoSrc = logoSvgDataUrl(item.url || item.title || item.logo);
    const domain = domainForFavicon(item.url);
    const faviconUrl = item.url
      ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`
      : fallbackLogoSrc;

    const logoBlock = `<div class="logo" aria-hidden="true">
          <img src="${escapeHtml(faviconUrl)}" alt="" loading="lazy" decoding="async" onerror="this.src='${escapeHtml(
      fallbackLogoSrc
    )}';" />
          <span class="logo-fallback">${escapeHtml(item.logo || "")}</span>
        </div>`;

    return `
      <article class="card card--split" data-id="${escapeHtml(item.id)}">
        <div class="signal">${getSignalSegments(item)}</div>

        <button class="fav-btn ${isFav ? "active" : ""}" title="مفضلة" data-fav="${escapeHtml(item.id)}">${
      isFav ? "❤" : "♡"
    }</button>

        <div class="card-split">
          <div class="card-like"></div>
          <div class="card-main">
            <div class="card-top">
              ${logoBlock}
            </div>

            <h3 class="title">${escapeHtml(item.title)}</h3>
            ${item.url ? `<p class="url">${escapeHtml(showUrl)}</p>` : `<p class="url">—</p>`}

            <div class="badges">
              ${badgeLeft}
              ${badgeRight}
            </div>

            <p class="desc">${escapeHtml(item.description || "")}</p>
            ${payloadBlock}

            <div class="card-actions">
              <button class="action-btn btn-copy" data-copy="${escapeHtml(
                item.id
              )}" data-copy-value="${escapeHtml(copyValue)}">${copyLabel}</button>
              <button class="action-btn btn-visit" data-visit="${escapeHtml(item.id)}" ${
      canVisit ? "" : "disabled"
    }>${visitLabel}</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function setSection(nextSection) {
    if (!SECTIONS[nextSection]) return;

    state.section = nextSection;
    state.filter = "all";
    state.query = els.searchInput?.value?.trim() || "";

    scrollToTopSmooth();
    withSkeletonRender(() => {
      renderNav();
      renderSidebar();
      renderContent();
    });
  }

  function setFilter(filterId) {
    state.filter = filterId;
    scrollToTopSmooth();
    withSkeletonRender(() => {
      renderSidebar();
      renderContent();
    });
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      toast("تمت الإزالة من المفضلة");
    } else {
      state.favorites.add(id);
      toast("تمت الإضافة إلى المفضلة");
    }

    setFavoriteIds(Array.from(state.favorites));
    if (state.section === "favorite") {
      renderContent();
      return;
    }

    // update button state without full rerender
    const btn = document.querySelector(`[data-fav="${CSS.escape(id)}"]`);
    if (btn) {
      btn.classList.toggle("active", state.favorites.has(id));
      btn.textContent = state.favorites.has(id) ? "❤" : "♡";
    }
  }

  function openUrlForItem(id) {
    const item = itemById.get(String(id));
    if (!item || !item.url) return;
    window.open(toOpenUrl(item.url), "_blank", "noopener,noreferrer");
  }

  async function copyForItem(id) {
    const item = itemById.get(String(id));
    if (!item) return;

    const text = item.category === "payload" ? item.payloadContent || "" : item.url || "";
    if (!text) {
      toast("لا يوجد محتوى للنسخ");
      return;
    }

    const ok = await copyToClipboard(text);
    toast(ok ? "تم النسخ بنجاح ✅" : "تعذر النسخ");
  }

  function closeMobileMenu() {}
  function toggleMobileMenu() {}

  function bindEvents() {
    let searchRenderTimer = 0;

    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;

      const sectionBtn = t.closest("[data-section]");
      if (sectionBtn) {
        const id = sectionBtn.getAttribute("data-section");
        if (id) setSection(id);
        return;
      }

      const filterBtn = t.closest("[data-filter]");
      if (filterBtn) {
        const id = filterBtn.getAttribute("data-filter");
        if (id) setFilter(id);
        return;
      }

      const favBtn = t.closest("[data-fav]");
      if (favBtn) {
        const id = favBtn.getAttribute("data-fav");
        if (id) toggleFavorite(id);
        return;
      }

      const copyBtn = t.closest("[data-copy]");
      if (copyBtn) {
        const id = copyBtn.getAttribute("data-copy");
        if (id) copyForItem(id);
        return;
      }

      const visitBtn = t.closest("[data-visit]");
      if (visitBtn) {
        const id = visitBtn.getAttribute("data-visit");
        if (id) openUrlForItem(id);
        return;
      }

      if (t.matches("#themeToggle")) {
        toggleTheme();
        return;
      }

      if (t.matches("#exportFavorites")) {
        exportFavorites();
        return;
      }

      if (t.matches("#importFavorites")) {
        els.favoritesFile?.click();
        return;
      }
    });

    els.searchInput.addEventListener("input", () => {
      state.query = els.searchInput.value;
      window.clearTimeout(searchRenderTimer);
      searchRenderTimer = window.setTimeout(() => {
        renderContent();
      }, SEARCH_RENDER_DEBOUNCE_MS);
    });

    els.favoritesFile?.addEventListener("change", async () => {
      const file = els.favoritesFile.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        importFavoritesFromJsonText(text);
      } finally {
        // allow re-importing same file
        els.favoritesFile.value = "";
      }
    });

    els.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        window.clearTimeout(searchRenderTimer);
        els.searchInput.value = "";
        state.query = "";
        renderContent();
      }
    });
  }

  function initDomRefs() {
    els.filters = $("#filters");
    els.sidebarTitle = $("#sidebarTitle");
    els.grid = $("#grid");
    els.searchInput = $("#searchInput");
    els.resultCount = $("#resultCount");
    els.contentTitle = $("#contentTitle");
    els.toast = $("#toast");
    els.navLinks = $("#navLinks");
    els.hamburger = null;
    els.overlay = null;
    els.favoritesFile = $("#favoritesFile");
  }

  function loadFavorites() {
    state.favorites = new Set(getFavoriteIds());
  }

  function init() {
    initDomRefs();
    loadTheme();
    loadFavorites();
    buildSearchIndex();
    bindEvents();

    showSkeleton(state.section === "payload" ? 2 : 4);
    requestAnimationFrame(() => {
      renderNav();
      renderSidebar();
      renderContent();
    });
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
