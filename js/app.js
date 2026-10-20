// ===== 1. DỮ LIỆU & BIẾN TOÀN CỤC =====
const CAT_NAMES = {
    'van-hoc': 'Văn Học',
    'kinh-te': 'Kinh Tế & Quản Lý',
    'kyna-song': 'Kỹ Năng Sống',
    'khoa-hoc': 'Khoa Học & Công Nghệ',
    'tuduy-kynang': 'Tư Duy - Kỹ Năng'
};
const STATUS_LIST = ['Chờ xử lý', 'Đang giao', 'Hoàn thành', 'Đã hủy'];
const PAGE_SIZE = 10;
const DATA_VERSION = '9'; // Cập nhật version để làm mới cấu trúc dữ liệu kèm tính năng mới

const RAW_BOOKS = [
    [101, 'Đắc Nhân Tâm', 'Dale Carnegie', 'tuduy-kynang', 86000, 45, 20, 320, 'dac-nhan-tam'],
    [102, 'Quẳng Gánh Lo Đi Và Vui Sống', 'Dale Carnegie', 'tuduy-kynang', 75000, 30, 0, 180, 'quang-ganh-lo-di'],
    [103, 'Tuổi Trẻ Đáng Giá Bao Nhiêu', 'Rosie Nguyễn', 'tuduy-kynang', 79000, 20, 10, 240, 'tuoi-tre-dang-gia'],
    [104, 'Atomic Habits', 'James Clear', 'tuduy-kynang', 139000, 35, 15, 410, 'atomic-habits'],
    [105, 'Dám Bị Ghét', 'Kishimi Ichiro', 'tuduy-kynang', 92000, 24, 0, 150, 'dam-bi-ghet'],
    [201, 'Người Giàu Có Nhất Thành Babylon', 'George S. Clason', 'kinh-te', 65000, 50, 0, 280, 'nguoi-giau-co-nhat-babylon'],
    [202, 'Cha Giàu Cha Nghèo (Tập 1)', 'Robert T. Kiyosaki', 'kinh-te', 95000, 25, 20, 350, 'cha-giau-cha-ngheo'],
    [203, 'Tư Duy Nhanh Và Chậm', 'Daniel Kahneman', 'kinh-te', 180000, 10, 0, 85, 'tu-duy-nhanh-va-cham'],
    [204, 'Nghĩ Giàu Làm Giàu', 'Napoleon Hill', 'kinh-te', 95000, 22, 10, 260, 'nghi-giau-lam-giau'],
    [205, 'Từ Tốt Đến Vĩ Đại', 'Jim Collins', 'kinh-te', 150000, 12, 25, 90, 'tu-tot-den-vi-dai'],
    [301, 'Mắt Biếc', 'Nguyễn Nhật Ánh', 'van-hoc', 115000, 40, 0, 450, 'mat-biec'],
    [302, 'Cho Tôi Xin Một Vé Đi Tuổi Thơ', 'Nguyễn Nhật Ánh', 'van-hoc', 90000, 35, 15, 330, 'cho-toi-xin-mot-ve'],
    [303, 'Số Đỏ', 'Vũ Trọng Phụng', 'van-hoc', 75000, 18, 0, 120, 'so-do'],
    [304, 'Dế Mèn Phiêu Lưu Ký', 'Tô Hoài', 'van-hoc', 65000, 25, 0, 300, 'de-men'],
    [305, 'Nhà Giả Kim', 'Paulo Coelho', 'van-hoc', 79000, 30, 20, 520, 'nha-gia-kim'],
    [401, 'Lược Sử Thời Gian', 'Stephen Hawking', 'khoa-hoc', 185000, 12, 0, 95, 'luoc-su-thoi-gian'],
    [402, 'Sapiens: Lược Sử Loài Người', 'Yuval Noah Harari', 'khoa-hoc', 195000, 15, 10, 200, 'sapiens'],
    [403, 'Clean Code', 'Robert C. Martin', 'khoa-hoc', 320000, 8, 30, 45, 'clean-code'],
    [404, 'Giải Thuật Và Lập Trình', 'Lê Minh Hoàng', 'khoa-hoc', 98000, 11, 0, 70, 'giai-thuat'],
    [501, '7 Thói Quen Hiệu Quả', 'Stephen Covey', 'kyna-song', 125000, 20, 10, 210, '7-thoi-quen'],
    [502, 'Trên Đường Băng', 'Tony Buổi Sáng', 'kyna-song', 80000, 3, 0, 190, 'tren-duong-bang'],
    [503, 'Hành Trình Về Phương Đông', 'Nguyên Phong', 'kyna-song', 120000, 14, 15, 175, 'phuong-dong'],
    [504, 'Lâu Đài Bay Của Pháp Sư Howl', 'diana wynne jones', 'van-hoc', 120000, 18, 0, 160, 'lau-dai-bay-cua-phap-su-howl-tai-ban'],
    [505, 'Mộ Đom Đóm', 'Akiyuki Nosaka', 'van-hoc', 125000, 18, 0, 160, 'mo-dom-dom'],
    [506, 'Đại Nam Dị Truyện', 'Phan Cuồng', 'van-hoc', 120000, 20, 0, 160, 'dai-nam'],
    [507, 'Lý Triều Dị Truyện', 'Phan Cuồng', 'van-hoc', 120000, 25, 0, 160, 'ly-trieu'],
    [508, 'Điều kỳ diệu của tiệm tạp hóa Namiya', 'Higashino Keigo', 'van-hoc', 120000, 25, 0, 160, 'tap-hoa'],
    [509, 'Tam Quốc Chí', 'Trần Thọ', 'van-hoc', 1500000, 25, 0, 160, 'tam-quoc'],
    [510, 'Nhật Ký ghi Chép Phap Y (Tập 1)', 'Đới Tây', 'van-hoc', 130000, 20, 0, 160, 'phap-y-1'],
    [511, 'Nhật Ký ghi Chép Phap Y (Tập 2)', 'Đới Tây', 'van-hoc', 130000, 25, 0, 160, 'phap-y-2'],
    [512, 'Nhật Ký ghi Chép Phap Y (Tập 3)', 'Đới Tây', 'van-hoc', 130000, 22, 0, 160, 'phap-y-3'],
    [513, 'Nhật Ký ghi Chép Phap Y (Full)', 'Đới Tây', 'van-hoc', 315000, 30, 0, 160, 'phap-y']
];

const DEFAULT_USERS = [
    { id: 1, email: 'admin@thb.com', password: 'admin123', name: 'Quản Trị Viên 1', phone: '0900000000', role: 'admin', debt: 0 },
    { id: 2, email: 'admin@congtuanth.com', password: 'admincongtuan', name: 'Quản Trị Viên 2', phone: '0990000000', role: 'admin', debt: 0 },
    { id: 3, email: 'an.nv@gmail.com', password: '123456', name: 'Nguyễn Văn An', phone: '0909123456', role: 'customer', debt: 25000 },
    { id: 4, email: 'binh.tp@gmail.com', password: '123456', name: 'Trần Thị Bình', phone: '0918234567', role: 'customer', debt: 0 }
];

function makeBooks() {
    return RAW_BOOKS.map(function (r) {
        return { id: r[0], title: r[1], author: r[2], category: r[3], price: r[4], stock: r[5],
                 discount: r[6], sold: r[7], image: 'images/' + r[8] + '.jpg',
                 desc: 'Tựa sách "' + r[1] + '" của tác giả ' + r[2] + '.' };
    });
}

if (localStorage.getItem('THBook_ver') !== DATA_VERSION) {
    localStorage.removeItem('THBook_books');
    localStorage.removeItem('THBook_cart');
    localStorage.removeItem('THBook_users');
    localStorage.setItem('THBook_ver', DATA_VERSION);
}

let books = JSON.parse(localStorage.getItem('THBook_books')) || makeBooks();
let orders = JSON.parse(localStorage.getItem('THBook_orders')) || [];
let cart = JSON.parse(localStorage.getItem('THBook_cart')) || [];
let users = JSON.parse(localStorage.getItem('THBook_users')) || DEFAULT_USERS;
let currentUser = JSON.parse(localStorage.getItem('THBook_current_user')) || null;

let receipts = JSON.parse(localStorage.getItem('THBook_receipts')) || [];
let importSlips = JSON.parse(localStorage.getItem('THBook_imports')) || [];

// BỔ SUNG: Dữ liệu Đánh giá sách (Reviews)
let reviews = JSON.parse(localStorage.getItem('THBook_reviews')) || [
    { id: 1, bookId: 101, userName: 'Nguyễn Văn An', rating: 5, comment: 'Sách rất hay và ý nghĩa, cực kỳ đáng đọc!', date: '20/09/2026' },
    { id: 2, bookId: 305, userName: 'Trần Thị Bình', rating: 4, comment: 'Cốt truyện lôi cuốn, giao hàng nhanh chóng.', date: '22/09/2026' }
];

let activeCat = 'all';
let sortType = 'default';
let keyword = '';
let visibleCount = PAGE_SIZE;
let modalQty = 1;

// Biến bộ lọc nâng cao
let priceFilterVal = 'all';
let discountFilterVal = 'all';

// ===== 2. HÀM TIỆN ÍCH =====
function $(id) { return document.getElementById(id); }
function formatMoney(n) { return Number(n).toLocaleString('vi-VN') + ' đ'; }
function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function getSalePrice(book) { return Math.round(book.price * (100 - (book.discount || 0)) / 100); }
function findBook(id) { return books.find(function (b) { return b.id === id; }); }

function imgError(img) {
    img.onerror = null;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400"><rect width="300" height="400" fill="#006838"/>' +
        '<text x="150" y="190" font-size="60" text-anchor="middle">📖</text>' +
        '<text x="150" y="250" font-size="17" fill="white" text-anchor="middle">' + esc((img.alt || '').substring(0, 24)) + '</text></svg>';
    img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function showToast(msg) {
    var t = $('toast');
    if (!t) return;
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 2300);
}

function openModal(html, style) {
    $('modalBox').className = 'box ' + (style === 'wide' ? 'wide' : '');
    $('modal').className = 'modal open ' + (style === 'right' ? 'right' : '');
    $('modalBox').innerHTML = '<button class="x" onclick="closeModal()">✕</button>' + html;
}
function closeModal() { $('modal').className = 'modal'; }

function saveState() {
    localStorage.setItem('THBook_books', JSON.stringify(books));
    localStorage.setItem('THBook_orders', JSON.stringify(orders));
    localStorage.setItem('THBook_cart', JSON.stringify(cart));
    localStorage.setItem('THBook_users', JSON.stringify(users));
    localStorage.setItem('THBook_current_user', JSON.stringify(currentUser));
    localStorage.setItem('THBook_receipts', JSON.stringify(receipts));
    localStorage.setItem('THBook_imports', JSON.stringify(importSlips));
    localStorage.setItem('THBook_reviews', JSON.stringify(reviews));
    updateCartCounter();
    updateAccountUI();
}

// ===== 3. CHUYỂN ĐỔI GIAO DIỆN SÁNG / TỐI (DARK MODE) =====
function initTheme() {
    const savedTheme = localStorage.getItem('THBook_theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateThemeUI(true);
    } else {
        document.body.classList.remove('dark');
        updateThemeUI(false);
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('THBook_theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
    showToast(isDark ? 'Đã bật giao diện Tối 🌙' : 'Đã bật giao diện Sáng ☀️');
}

function updateThemeUI(isDark) {
    const icon = $('themeIcon');
    const text = $('themeText');
    if (icon && text) {
        icon.innerText = isDark ? '☀️' : '🌙';
        text.innerText = isDark ? 'Sáng' : 'Tối';
    }
}

// ===== 4. CỬA HÀNG, BỘ LỌC NÂNG CAO & TRA CỨU (BM3) =====
function renderNav() {
    var catNav = $('catNav');
    if (!catNav) return;
    var html = '<button data-cat="all" onclick="filterCategory(\'all\')">Tất Cả Sách</button>';
    for (var key in CAT_NAMES) {
        html += '<button data-cat="' + key + '" onclick="filterCategory(\'' + key + '\')">' + CAT_NAMES[key] + '</button>';
    }
    catNav.innerHTML = html;
    markActiveNav();
}

function markActiveNav() {
    document.querySelectorAll('#catNav button').forEach(function (b) {
        b.classList.toggle('active', b.dataset.cat === activeCat);
    });
}

function filterCategory(cat) {
    activeCat = cat;
    visibleCount = PAGE_SIZE;
    markActiveNav();
    switchView('store');
}

function handleSearch() { keyword = $('searchInput').value.trim().toLowerCase(); visibleCount = PAGE_SIZE; renderCatalog(); }
function handleSort() { sortType = $('sortSelect').value; visibleCount = PAGE_SIZE; renderCatalog(); }
function handleAdvancedFilter() {
    priceFilterVal = $('priceFilter').value;
    discountFilterVal = $('discountFilter').value;
    visibleCount = PAGE_SIZE;
    renderCatalog();
}

function setSort(type) { sortType = type; if($('sortSelect')) $('sortSelect').value = type; visibleCount = PAGE_SIZE; renderCatalog(); if($('catalog')) $('catalog').scrollIntoView(); }
function loadMore() { visibleCount += PAGE_SIZE; renderCatalog(); }

function getFilteredBooks() {
    var list = books.filter(function (b) {
        var okCat = activeCat === 'all' || b.category === activeCat;
        var text = (b.title + ' ' + b.author + ' ' + (CAT_NAMES[b.category] || '')).toLowerCase();
        var matchesText = text.indexOf(keyword) !== -1;

        // Bộ lọc nâng cao theo khoảng giá
        var saleP = getSalePrice(b);
        var okPrice = true;
        if (priceFilterVal === 'under100') okPrice = saleP < 100000;
        else if (priceFilterVal === '100to200') okPrice = saleP >= 100000 && saleP <= 200000;
        else if (priceFilterVal === 'over200') okPrice = saleP > 200000;

        // Bộ lọc nâng cao theo khuyến mãi
        var okDisc = true;
        if (discountFilterVal === 'discounted') okDisc = (b.discount || 0) > 0;

        return okCat && matchesText && okPrice && okDisc;
    });

    if (sortType === 'price-asc') list.sort(function (a, b) { return getSalePrice(a) - getSalePrice(b); });
    if (sortType === 'price-desc') list.sort(function (a, b) { return getSalePrice(b) - getSalePrice(a); });
    if (sortType === 'bestseller') list.sort(function (a, b) { return (b.sold || 0) - (a.sold || 0); });
    if (sortType === 'discount') list.sort(function (a, b) { return (b.discount || 0) - (a.discount || 0); });
    return list;
}

function renderCatalog() {
    var grid = $('productGrid');
    if (!grid) return;
    var list = getFilteredBooks();
    var shown = list.slice(0, visibleCount);

    grid.innerHTML = shown.map(function (b) {
        var out = b.stock <= 0;
        var stockHtml = out ? '<span class="out">HẾT HÀNG</span>'
            : b.stock <= 5 ? '<span class="warn">Chỉ còn ' + b.stock + ' cuốn</span>'
            : '<span class="ok">Tồn kho: ' + b.stock + '</span>';
        return '<div class="card">' +
            '<div class="cover" onclick="showBook(' + b.id + ')">' +
                (b.discount > 0 ? '<span class="sale">-' + b.discount + '%</span>' : '') +
                '<img src="' + esc(b.image) + '" alt="' + esc(b.title) + '" onerror="imgError(this)"></div>' +
            '<h3 onclick="showBook(' + b.id + ')">' + esc(b.title) + '</h3>' +
            '<div class="mu">' + esc(b.author) + '</div>' +
            '<div><span class="price">' + formatMoney(getSalePrice(b)) + '</span>' +
                (b.discount > 0 ? '<span class="old">' + formatMoney(b.price) + '</span>' : '') + '</div>' +
            '<div class="meta">' + stockHtml + '<span class="mu">Đã bán ' + (b.sold || 0) + '</span></div>' +
            (out ? '<button disabled>HẾT HÀNG</button>' : '<button onclick="addToCart(' + b.id + ',1)">🛒 Thêm giỏ hàng</button>') +
            '</div>';
    }).join('');

    if (list.length === 0) grid.innerHTML = '<p class="mu">Không tìm thấy sách phù hợp.</p>';
    if ($('resultInfo')) $('resultInfo').innerText = 'Hiển thị ' + shown.length + ' / ' + list.length + ' tựa';
    if ($('btnLoadMore')) $('btnLoadMore').classList.toggle('hidden', visibleCount >= list.length);
}

// BỔ SUNG: Hiển thị Đánh giá & Bình luận trong Chi tiết sách
function showBook(id) {
    var b = findBook(id);
    modalQty = 1;

    var bookReviews = reviews.filter(function(r) { return r.bookId === id; });
    var reviewsHtml = '<h4 style="margin:16px 0 8px; color:var(--g);">💬 Đánh giá & Bình luận sách (' + bookReviews.length + ')</h4>';
    
    if (bookReviews.length === 0) {
        reviewsHtml += '<p class="mu" style="font-size:13px;">Chưa có đánh giá nào cho tựa sách này.</p>';
    } else {
        bookReviews.forEach(function(r) {
            reviewsHtml += '<div style="border-bottom:1px solid var(--bd); padding:8px 0; font-size:13px;">' +
                '<b>' + esc(r.userName) + '</b> <span style="color:#f59e0b;">' + '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating) + '</span> <small class="mu">(' + r.date + ')</small>' +
                '<p style="margin-top:4px;">' + esc(r.comment) + '</p>' +
            '</div>';
        });
    }

    if (currentUser) {
        reviewsHtml += '<form onsubmit="event.preventDefault(); submitReview(' + id + ')" style="margin-top:14px;">' +
            '<label style="font-size:12px;">Chấm điểm sao:</label>' +
            '<select id="revRating" style="margin-bottom:6px; font-size:13px;">' +
                '<option value="5">★★★★★ (Tuyệt vời - 5/5)</option>' +
                '<option value="4">★★★★☆ (Hài lòng - 4/5)</option>' +
                '<option value="3">★★★☆☆ (Bình thường - 3/5)</option>' +
                '<option value="2">★★☆☆☆ (Tệ - 2/5)</option>' +
                '<option value="1">★☆☆☆☆ (Rất tệ - 1/5)</option>' +
            '</select>' +
            '<textarea id="revComment" placeholder="Viết cảm nhận của bạn về sách..." required rows="2" style="font-size:13px;"></textarea>' +
            '<button class="sm" style="margin-top:8px; width:100%;">Gửi đánh giá</button>' +
        '</form>';
    } else {
        reviewsHtml += '<p class="mu" style="font-size:13px; margin-top:10px;">Vui lòng <a href="#" onclick="openAuth(\'login\'); return false;" style="color:var(--g);">đăng nhập</a> để viết đánh giá.</p>';
    }

    openModal('<div class="detail"><div class="cover">' +
        (b.discount > 0 ? '<span class="sale">-' + b.discount + '%</span>' : '') +
        '<img src="' + esc(b.image) + '" alt="' + esc(b.title) + '" onerror="imgError(this)"></div><div style="flex:1;">' +
        '<span class="tag">' + CAT_NAMES[b.category] + '</span><h3 style="margin-top:8px">' + esc(b.title) + '</h3>' +
        '<p class="mu">Tác giả: ' + esc(b.author) + '</p>' +
        '<p><span class="price" style="font-size:24px">' + formatMoney(getSalePrice(b)) + '</span>' +
        (b.discount > 0 ? '<span class="old">' + formatMoney(b.price) + '</span>' : '') + '</p>' +
        '<p class="mu" style="margin:8px 0">Còn ' + b.stock + ' cuốn · Đã bán ' + (b.sold || 0) + '</p>' +
        '<p>' + esc(b.desc || 'Chưa có mô tả.') + '</p>' +
        (b.stock > 0 ? '<div class="qty" style="margin:12px 0">Số lượng: <button class="sec" onclick="changeModalQty(' + id + ',-1)">-</button><b id="mq">1</b>' +
            '<button class="sec" onclick="changeModalQty(' + id + ',1)">+</button></div>' +
            '<button style="width:100%" onclick="addToCart(' + id + ',modalQty);closeModal()">🛒 Thêm vào giỏ hàng</button>'
            : '<p class="out">HẾT HÀNG</p>') +
        reviewsHtml +
        '</div></div>', 'wide');
}

function submitReview(bookId) {
    if (!currentUser) return;
    var rating = parseInt($('revRating').value);
    var comment = $('revComment').value.trim();
    if (!comment) return;

    var newReview = {
        id: Date.now(),
        bookId: bookId,
        userName: currentUser.name,
        rating: rating,
        comment: comment,
        date: new Date().toLocaleDateString('vi-VN')
    };

    reviews.unshift(newReview);
    saveState();
    showToast('Đã gửi đánh giá thành công!');
    showBook(bookId);
}

function changeModalQty(id, d) {
    modalQty = Math.max(1, Math.min(findBook(id).stock, modalQty + d));
    if ($('mq')) $('mq').innerText = modalQty;
}

// ===== 5. GIỎ HÀNG & THANH TOÁN (BM2 & QĐ2) =====
function addToCart(id, qty) {
    var b = findBook(id);
    var item = cart.find(function (c) { return c.id === id; });
    var have = item ? item.qty : 0;
    if (have + qty > b.stock) { showToast('Chỉ còn ' + b.stock + ' cuốn trong kho!'); return; }
    if (item) item.qty += qty; else cart.push({ id: id, qty: qty });
    saveState();
    showToast('Đã thêm "' + b.title + '" vào giỏ hàng!');
}

function changeCartQty(id, d) {
    var item = cart.find(function (c) { return c.id === id; });
    if (d > 0 && item.qty + d > findBook(id).stock) { showToast('Vượt quá số lượng trong kho!'); return; }
    item.qty += d;
    if (item.qty <= 0) cart = cart.filter(function (c) { return c.id !== id; });
    saveState();
    openCart();
}

function removeFromCart(id) { cart = cart.filter(function (c) { return c.id !== id; }); saveState(); openCart(); }

function getCartTotal() {
    var total = 0;
    cart.forEach(function (c) { total += getSalePrice(findBook(c.id)) * c.qty; });
    return total;
}

function updateCartCounter() {
    var n = 0;
    cart.forEach(function (c) { n += c.qty; });
    if ($('cartCounter')) $('cartCounter').innerText = n;
}

function openCart() {
    cart = cart.filter(function (c) { return findBook(c.id); });
    var html = '<h3>🛍️ Giỏ hàng của bạn</h3>';
    if (cart.length === 0) {
        html += '<p class="mu">Giỏ hàng đang trống.</p>';
    } else {
        cart.forEach(function (c) {
            var b = findBook(c.id);
            html += '<div class="row"><img src="' + esc(b.image) + '" alt="' + esc(b.title) + '" onerror="imgError(this)">' +
                '<div style="flex:1"><b>' + esc(b.title) + '</b><br><span class="price" style="font-size:14px">' + formatMoney(getSalePrice(b)) + '</span></div>' +
                '<div class="qty"><button class="sec sm" onclick="changeCartQty(' + b.id + ',-1)">-</button>' + c.qty +
                '<button class="sec sm" onclick="changeCartQty(' + b.id + ',1)">+</button></div>' +
                '<button class="danger sm" onclick="removeFromCart(' + b.id + ')">🗑</button></div>';
        });
        html += '<div class="total"><span>Tổng cộng</span><span>' + formatMoney(getCartTotal()) + '</span></div>' +
            '<button style="width:100%" onclick="openCheckout()">Tiến hành thanh toán</button>';
    }
    openModal(html, 'right');
}

function openCheckout() {
    if (!currentUser) {
        alert('Vui lòng đăng nhập tài khoản trước khi đặt hàng!');
        openAuth('login');
        return;
    }
    var u = currentUser;
    var debt = u.debt || 0;
    var isOverDebt = debt > 20000;

    openModal('<h3>🚚 Thông tin giao hàng & Thanh toán</h3><form onsubmit="event.preventDefault();processCheckout()">' +
        '<label>Họ tên người nhận *<input id="custName" required value="' + esc(u.name) + '"></label>' +
        '<label>Số điện thoại *<input id="custPhone" required value="' + esc(u.phone) + '" placeholder="0901234567"></label>' +
        '<label>Địa chỉ giao hàng *<textarea id="custAddress" required rows="2"></textarea></label>' +
        
        '<div style="background:var(--bg-input); border:1px solid var(--bd); padding:10px; border-radius:8px; margin-top:10px; font-size:13px;">' +
            '<b>Tình trạng tài khoản:</b><br>' +
            'Số tiền nợ hiện tại: <b style="color:' + (isOverDebt ? '#dc2626' : '#059669') + '">' + formatMoney(debt) + '</b> ' +
            (isOverDebt ? '<br><small style="color:#dc2626">⚠️ Tài khoản nợ vượt quá 20.000 đ (QĐ2). Không thể đặt sách!</small>' : '') +
        '</div>' +

        '<div class="total"><span>Thanh toán (COD)</span><span>' + formatMoney(getCartTotal()) + '</span></div>' +
        '<button style="width:100%" ' + (isOverDebt ? 'disabled style="background:#cbd5e1;cursor:not-allowed;"' : '') + '>Xác nhận đặt hàng</button>' +
    '</form>');
}

function processCheckout() {
    if (!currentUser) { alert('Vui lòng đăng nhập!'); return; }
    var phone = $('custPhone').value.trim();
    if (!/^0\d{9}$/.test(phone)) { alert('Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0!'); return; }

    let customerDebt = currentUser.debt || 0;
    if (customerDebt > 20000) {
        openModal(`
            <div style="text-align:center; padding:10px;">
                <h3 style="color:#dc2626;">🚫 TÀI KHOẢN BỊ KHÓA ĐẶT HÀNG</h3>
                <p style="margin:12px 0; font-size:14px; line-height:1.5;">
                    Hệ thống nhận định tài khoản của bạn đang có số nợ là <b style="color:#dc2626;">${formatMoney(customerDebt)}</b>, vượt quá mức quy định cho phép (<b>20.000 đ</b>) theo QĐ2[cite: 11].
                </p>
                <div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:10px; text-align:left; font-size:13px; color:#92400e; margin-bottom:14px;">
                    📌 <b>Hướng dẫn thắc mắc & Xử lý:</b> Vui lòng liên hệ Quản trị viên (Admin) qua Hotline <b>1900 xxxx</b> để kiểm tra và nộp tiền thanh toán nợ.
                </div>
                <button onclick="closeModal()" style="width:100%;">Đã hiểu</button>
            </div>
        `);
        return;
    }

    for (var i = 0; i < cart.length; i++) {
        var b = findBook(cart[i].id);
        if (b.stock < cart[i].qty) { alert('"' + b.title + '" không còn đủ hàng!'); return; }
        
        if ((b.stock - cart[i].qty) < 20) {
            alert('Vi phạm quy định QĐ2: Đầu sách "' + b.title + '" sau khi bán phải giữ lại tồn kho ít nhất là 20 cuốn (Hiện kho chỉ còn ' + b.stock + ')[cite: 11]!');
            return;
        }
    }

    var order = {
        orderId: 'ORD-' + String(orders.length + 1).padStart(5, '0'),
        userId: currentUser.id,
        name: $('custName').value.trim(), phone: phone, address:$('custAddress').value.trim(),
        total: getCartTotal(), date: new Date().toLocaleString('vi-VN'), status: STATUS_LIST[0],
        items: cart.map(function (c) {
            var bk = findBook(c.id);
            return { id: bk.id, title: bk.title, price: getSalePrice(bk), qty: c.qty };
        })
    };

    cart.forEach(function (c) {
        var bk = findBook(c.id);
        bk.stock -= c.qty;
        bk.sold = (bk.sold || 0) + c.qty;
    });

    orders.unshift(order);
    cart = [];
    saveState();
    renderCatalog();
    showInvoice(order.orderId);
}

function showInvoice(orderId) {
    var o = orders.find(function (x) { return x.orderId === orderId; });
    var html = '<div class="center"><h3>THBOOK STORE</h3><p class="mu">HÓA ĐƠN XÁC NHẬN ĐƠN HÀNG (BM2)[cite: 11]</p><b>#' + o.orderId + '</b></div>' +
        '<p style="margin:10px 0"><b>Khách hàng:</b> ' + esc(o.name) + '<br><b>SĐT:</b> ' + esc(o.phone) +
        '<br><b>Địa chỉ:</b> ' + esc(o.address) + '<br><b>Ngày đặt:</b> ' + o.date + ' · <span class="tag">' + o.status + '</span></p>';
    o.items.forEach(function (i) {
        html += '<div class="row"><span>' + esc(i.title) + ' (x' + i.qty + ')</span><b>' + formatMoney(i.price * i.qty) + '</b></div>';
    });
    html += '<div class="total"><span>Tổng tiền</span><span>' + formatMoney(o.total) + '</span></div>' +
        '<div class="noprint" style="display:flex;gap:8px"><button class="sec" style="flex:1" onclick="window.print()">🖨️ In hóa đơn</button>' +
        '<button style="flex:1" onclick="closeModal()">Hoàn tất</button></div>';
    openModal(html, 'wide');
}

// ===== 6. TÀI KHOẢN & QUẢN LÝ NÂNG CAO (ĐỔI MẬT KHẨU, HỦY ĐƠN HOÀN KHO) =====
function updateAccountUI() {
    if (!$('accountArea')) return;
    var html = '<button class="icon-btn" onclick="openAccount()">👤<span>' +
        (currentUser ? esc(currentUser.name.split(' ').pop()) : 'Tài khoản') + '</span></button>';
    $('accountArea').innerHTML = html;
    if ($('adminBar'))$('adminBar').classList.toggle('hidden', !(currentUser && currentUser.role === 'admin'));
}

function openAccount() {
    if (!currentUser) { openAuth('login'); return; }
    var mine = orders.filter(function (o) { return o.userId === currentUser.id; });
    var debt = currentUser.debt || 0;

    var html = '<h3>👤 ' + esc(currentUser.name) + '</h3>' +
        '<p class="mu">' + esc(currentUser.email) + ' · SĐT: ' + esc(currentUser.phone) + '</p>' +
        '<p style="margin-top:6px; font-size:13px;">Số tiền nợ hiện tại: <b style="color:' + (debt > 20000 ? '#dc2626' : '#059669') + '">' + formatMoney(debt) + '</b></p>' +
        
        '<div style="display:flex; gap:8px; margin: 12px 0;">' +
            '<button class="sec sm" onclick="changePassword()">🔑 Đổi mật khẩu</button>' +
        '</div>' +

        '<h4 style="margin:14px 0 6px">Đơn hàng của tôi</h4>';

    mine.forEach(function (o) {
        var canCancel = o.status === 'Chờ xử lý';
        html += '<div class="row"><div><b>#' + o.orderId + '</b><br><small class="mu">' + o.date + '</small></div>' +
            '<div><span class="tag">' + o.status + '</span> ' +
            '<button class="sm sec" onclick="showInvoice(\'' + o.orderId + '\')">Xem</button> ' +
            (canCancel ? '<button class="sm danger" onclick="cancelOrderByCustomer(\'' + o.orderId + '\')">Hủy</button>' : '') +
            '</div></div>';
    });
    if (mine.length === 0) html += '<p class="mu">Chưa có đơn hàng nào.</p>';
    
    html += '<button class="danger" style="width:100%;margin-top:16px" onclick="handleLogout()">Đăng xuất</button>';
    openModal(html);
}

function changePassword() {
    var oldPass = prompt('Nhập mật khẩu hiện tại:');
    if (!oldPass) return;
    if (oldPass !== currentUser.password) {
        alert('Mật khẩu hiện tại không chính xác!');
        return;
    }
    var newPass = prompt('Nhập mật khẩu mới (tối thiểu 6 ký tự):');
    if (!newPass || newPass.length < 6) {
        alert('Mật khẩu mới phải có ít nhất 6 ký tự!');
        return;
    }
    currentUser.password = newPass;
    var u = users.find(function(x) { return x.id === currentUser.id; });
    if (u) u.password = newPass;
    saveState();
    showToast('Đổi mật khẩu thành công!');
}

function cancelOrderByCustomer(orderId) {
    var o = orders.find(function(x) { return x.orderId === orderId; });
    if (!o) return;
    if (o.status !== 'Chờ xử lý') {
        alert('Chỉ có thể hủy đơn hàng khi đang ở trạng thái "Chờ xử lý"!');
        return;
    }
    if (!confirm('Bạn có chắc chắn muốn hủy đơn hàng #' + o.orderId + '?')) return;

    o.items.forEach(function(i) {
        var b = findBook(i.id);
        if (b) {
            b.stock += i.qty;
            b.sold = Math.max(0, (b.sold || 0) - i.qty);
        }
    });

    o.status = 'Đã hủy';
    saveState();
    renderCatalog();
    openAccount();
    showToast('Đã hủy đơn hàng #' + o.orderId + ' và hoàn trả tồn kho!');
}

function openAuth(tab) {
    var isLogin = tab === 'login';
    openModal('<div style="display:flex;gap:8px;margin:16px 0 4px"><button class="' + (isLogin ? '' : 'sec') + '" style="flex:1" onclick="openAuth(\'login\')">ĐĂNG NHẬP</button>' +
        '<button class="' + (isLogin ? 'sec' : '') + '" style="flex:1" onclick="openAuth(\'register\')">ĐĂNG KÝ</button></div>' +
        '<form onsubmit="event.preventDefault();' + (isLogin ? 'handleLogin()' : 'handleRegister()') + '">' +
        (isLogin ? '' : '<label>Họ và tên *<input id="regName" required placeholder="Nhập họ và tên"></label><label>Số điện thoại *<input id="regPhone" required placeholder="Nhập số điện thoại"></label>') +
        '<label>Email *<input id="authEmail" type="email" required placeholder="example@gmail.com"></label>' +
        '<label>Mật khẩu *<input id="authPass" type="password" required minlength="6" placeholder="Nhập mật khẩu(Tối thiểu 8 ký tự, bao gồm chữ & số)"></label>' +
        '<button style="width:100%;margin-top:14px">' + (isLogin ? 'Đăng nhập' : 'Đăng ký') + '</button></form>');
}

function handleRegister() {
    var email = $('authEmail').value.trim().toLowerCase();
    if (users.some(function (u) { return u.email === email; })) { alert('Email này đã được đăng ký!'); return; }
    var phone = $('regPhone').value.trim();
    if (!/^0\d{9}$/.test(phone)) { alert('Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0!'); return; }
    
    var newUser = { id: Date.now(), email: email, password: $('authPass').value, name:$('regName').value.trim(), phone: phone, role: 'customer', debt: 0 };
    users.push(newUser);
    currentUser = newUser;
    saveState();
    closeModal();
    showToast('Đăng ký thành công! Chào ' + newUser.name);
}

function handleLogin() {
    var email = $('authEmail').value.trim().toLowerCase();
    var pass = $('authPass').value;
    var user = users.find(function (u) { return u.email === email && u.password === pass; });
    if (!user) { alert('Email hoặc mật khẩu không chính xác!'); return; }
    currentUser = user;
    saveState();
    closeModal();
    if (user.role === 'admin') { showToast('Đăng nhập thành công với quyền Admin!'); switchView('admin'); }
    else showToast('Xin chào, ' + user.name + '!');
}

function handleLogout() {
    currentUser = null;
    saveState();
    closeModal();
    switchView('store');
    showToast('Đã đăng xuất!');
}

// ===== 7. QUẢN TRỊ & NGHIỆP VỤ (BM1, BM4) =====
function switchView(view) {
    if (view === 'admin' && !(currentUser && currentUser.role === 'admin')) { alert('Không có quyền truy cập!'); view = 'store'; }
    if ($('storeView'))$('storeView').classList.toggle('hidden', view !== 'store');
    if ($('storeHeader'))$('storeHeader').classList.toggle('hidden', view !== 'store');
    if ($('adminView'))$('adminView').classList.toggle('hidden', view !== 'admin');
    if ($('btnStore'))$('btnStore').className = view === 'store' ? 'on' : '';
    if ($('btnAdmin'))$('btnAdmin').className = view === 'admin' ? 'on' : '';
    if (view === 'admin') renderAdmin(); else renderCatalog();
}

function switchTab(tab) {
    ['inventory', 'orders', 'receipts'].forEach(function (t) {
        if ($('tab_' + t))$('tab_' + t).classList.toggle('hidden', t !== tab);
        if ($('tabBtn_' + t))$('tabBtn_' + t).className = t === tab ? 'on' : '';
    });
}

function renderAdmin() {
    var revenue = 0;
    orders.forEach(function (o) { if (o.status === 'Hoàn thành') revenue += o.total; });
    if ($('statRevenue'))$('statRevenue').innerText = formatMoney(revenue);
    if ($('statOrders'))$('statOrders').innerText = orders.length + ' đơn';
    if ($('statBooks'))$('statBooks').innerText = books.length + ' tựa';
    if ($('statLow'))$('statLow').innerText = books.filter(function (b) { return b.stock <= 3; }).length + ' tựa';

    if ($('inventoryBody')) {$('inventoryBody').innerHTML = books.map(function (b) {
            return '<tr><td>#' + b.id + '</td><td><img src="' + esc(b.image) + '" alt="" onerror="imgError(this)">' + esc(b.title) + '</td>' +
                '<td>' + esc(b.author) + '</td><td>' + (CAT_NAMES[b.category] || b.category) + '</td><td>' + formatMoney(b.price) + '</td><td>' + (b.discount || 0) + '%</td>' +
                '<td class="' + (b.stock <= 3 ? 'low' : '') + '">' + b.stock + '</td>' +
                '<td><button class="sm" onclick="adjustStock(' + b.id + ',5)">+5</button> <button class="sm sec" onclick="adjustStock(' + b.id + ',-1)">-1</button> ' +
                '<button class="sm danger" onclick="setZeroStock(' + b.id + ')">=0</button></td>' +
                '<td><button class="sm sec" onclick="openBookForm(' + b.id + ')">Sửa</button> <button class="sm danger" onclick="deleteBook(' + b.id + ')">Xóa</button></td></tr>';
        }).join('');
    }

    if ($('ordersBody')) {$('ordersBody').innerHTML = orders.map(function (o) {
            var opts = STATUS_LIST.map(function (s) { return '<option' + (s === o.status ? ' selected' : '') + '>' + s + '</option>'; }).join('');
            return '<tr><td><b>#' + o.orderId + '</b></td><td>' + esc(o.name) + '</td><td>' + esc(o.phone) + '</td><td>' + formatMoney(o.total) + '</td><td>' + o.date + '</td>' +
                '<td><select onchange="changeOrderStatus(\'' + o.orderId + '\',this.value)">' + opts + '</select></td>' +
                '<td><button class="sm sec" onclick="showInvoice(\'' + o.orderId + '\')">Xem</button></td></tr>';
        }).join('') || '<tr><td colspan="7" class="mu">Chưa có đơn hàng.</td></tr>';
    }

    renderImportSlipsTable();
    renderReceiptsTable();
    renderCustomersTable();
}

function openImportModal() {
    let eligibleBooks = books.filter(b => b.stock < 300);
    if (eligibleBooks.length === 0) {
        alert('Không có đầu sách nào đủ điều kiện tồn kho < 300 để lập phiếu nhập[cite: 11]!');
        return;
    }
    let options = eligibleBooks.map(b => `<option value="${b.id}">${b.title} (Tồn hiện tại: ${b.stock})</option>`).join('');
    
    openModal(`
        <h3>📦 Lập Phiếu Nhập Sách (BM1)[cite: 11]</h3>
        <p class="mu" style="margin: 8px 0;">QĐ1: Số lượng nhập ít nhất là 150. Chỉ nhập đầu sách tồn kho < 300[cite: 11].</p>
        <form onsubmit="event.preventDefault(); processImportBook()">
            <label>Ngày nhập<input type="date" id="impDate" required value="${new Date().toISOString().split('T')[0]}"></label>
            <label>Chọn đầu sách<select id="impBookId">${options}</select></label>
            <label>Số lượng nhập (Tối thiểu 150)<input type="number" id="impQty" min="150" value="150" required></label>
            <button style="width:100%; margin-top: 14px;">Xác Nhận Lập Phiếu Nhập</button>
        </form>
    `);
}

function processImportBook() {
    let bookId = parseInt($('impBookId').value);
    let qty = parseInt($('impQty').value);
    let importDate = $('impDate').value;
    
    if (qty < 150) { alert('Quy định QĐ1: Số lượng nhập ít nhất phải là 150[cite: 11]!'); return; }
    let book = findBook(bookId);
    if (book.stock >= 300) { alert('Quy định QĐ1: Chỉ được nhập đầu sách tồn kho ít hơn 300[cite: 11]!'); return; }
    
    book.stock += qty;
    let slip = {
        id: 'PN-' + String(importSlips.length + 1).padStart(4, '0'),
        date: importDate,
        bookTitle: book.title,
        category: CAT_NAMES[book.category] || book.category,
        author: book.author,
        qty: qty
    };
    importSlips.unshift(slip);

    saveState();
    closeModal();
    renderAdmin();
    renderCatalog();
    showToast('Lập phiếu nhập sách (BM1) thành công[cite: 11]!');
}

function renderImportSlipsTable() {
    let tbody = $('importSlipsBody');
    if (!tbody) return;
    tbody.innerHTML = importSlips.map(s => `
        <tr>
            <td><b>#${s.id}</b></td>
            <td>${s.date}</td>
            <td><b>${esc(s.bookTitle)}</b></td>
            <td>${esc(s.category)}</td>
            <td>${esc(s.author)}</td>
            <td style="color: var(--g); font-weight: bold;">+${s.qty}</td>
        </tr>
    `).join('') || '<tr><td colspan="6" class="mu">Chưa có phiếu nhập sách nào.</td></tr>';
}

function openReceiptModal() {
    let custOptions = users.filter(u => u.role !== 'admin').map(u => `<option value="${u.id}">${u.name} (SĐT: ${u.phone}) - Nợ hiện tại: ${formatMoney(u.debt || 0)}</option>`).join('');

    openModal(`
        <h3>💵 Lập Phiếu Thu Tiền (BM4)[cite: 11]</h3>
        <p class="mu" style="margin: 8px 0;">QĐ4: Chọn khách hàng để lập phiếu thu tiền và tự động giảm trừ số nợ hệ thống[cite: 11].</p>
        <form onsubmit="event.preventDefault(); processReceiptCreate()">
            <label>Chọn Khách Hàng *<select id="rcUserId" onchange="autoFillCustomerInfo()">${custOptions}</select></label>
            <label>Họ tên khách hàng<input type="text" id="rcName" required></label>
            <label>Địa chỉ<input type="text" id="rcAddr" placeholder="Tây Ninh"></label>
            <label>Điện thoại<input type="text" id="rcPhone" required></label>
            <label>Ngày thu tiền<input type="date" id="rcDate" required value="${new Date().toISOString().split('T')[0]}"></label>
            <label>Số tiền thu (đ)<input type="number" id="rcAmount" min="1000" required value="10000"></label>
            <button style="width:100%; margin-top: 14px;">Xác Nhận Lập Phiếu Thu</button>
        </form>
    `);
    autoFillCustomerInfo();
}

function autoFillCustomerInfo() {
    let userId = parseInt($('rcUserId').value);
    let u = users.find(x => x.id === userId);
    if (u) {
        $('rcName').value = u.name;
        $('rcPhone').value = u.phone;
        $('rcAmount').value = u.debt || 10000;
    }
}

function processReceiptCreate() {
    let userId = parseInt($('rcUserId').value);
    let amount = parseInt($('rcAmount').value);
    let u = users.find(x => x.id === userId);

    if (u) {
        u.debt = Math.max(0, (u.debt || 0) - amount);
    }

    let receipt = {
        id: 'PT-' + String(receipts.length + 1).padStart(4, '0'),
        customer: $('rcName').value.trim(),
        address: $('rcAddr').value.trim(),
        phone: $('rcPhone').value.trim(),
        amount: amount,
        date: $('rcDate').value
    };

    receipts.unshift(receipt);
    saveState();
    closeModal();
    renderAdmin();
    showToast('Lập phiếu thu tiền (BM4) thành công & Đã giảm nợ[cite: 11]!');
}

function renderReceiptsTable() {
    let tbody = $('receiptsBody');
    if (!tbody) return;
    tbody.innerHTML = receipts.map(r => `
        <tr>
            <td><b>#${r.id}</b></td>
            <td>${esc(r.customer)}</td>
            <td>${esc(r.address)}</td>
            <td>${esc(r.phone)}</td>
            <td class="price">${formatMoney(r.amount)}</td>
            <td>${r.date}</td>
        </tr>
    `).join('') || '<tr><td colspan="6" class="mu">Chưa có phiếu thu tiền nào.</td></tr>';
}

function renderCustomersTable() {
    let tbody = $('tblCustomers');
    if (!tbody) return;
    tbody.innerHTML = users.filter(u => u.role !== 'admin').map(u => `
        <tr>
            <td class="p-3 font-mono">KH-${u.id}</td>
            <td class="p-3 font-bold">${esc(u.name)}</td>
            <td class="p-3">${esc(u.email)}</td>
            <td class="p-3">${esc(u.phone)}</td>
            <td class="p-3 font-bold ${u.debt > 20000 ? 'text-red-600' : 'text-emerald-700'}">${formatMoney(u.debt || 0)}</td>
            <td class="p-3 text-right space-x-2">
                <button onclick="editUserDebt(${u.id})" class="text-blue-600 font-bold hover:underline">Sửa nợ</button>
            </td>
        </tr>
    `).join('') || '<tr><td colspan="6" class="p-3 text-slate-400">Chưa có khách hàng.</td></tr>';
}

function editUserDebt(userId) {
    let u = users.find(x => x.id === userId);
    if (!u) return;
    let newDebt = prompt(`Nhập số tiền nợ mới cho khách hàng "${u.name}" (đ):`, u.debt || 0);
    if (newDebt !== null && !isNaN(newDebt)) {
        u.debt = Math.max(0, parseInt(newDebt));
        saveState();
        renderAdmin();
        showToast(`Đã cập nhật số nợ của ${u.name} thành ${formatMoney(u.debt)}`);
    }
}

function changeOrderStatus(orderId, status) {
    var o = orders.find(function (x) { return x.orderId === orderId; });
    if (o.status === 'Đã hủy') { showToast('Đơn đã hủy, không thể đổi trạng thái!'); renderAdmin(); return; }
    if (status === 'Đã hủy') {
        o.items.forEach(function (i) {
            var b = findBook(i.id);
            if (b) { b.stock += i.qty; b.sold = Math.max(0, (b.sold || 0) - i.qty); }
        });
    }
    o.status = status;
    saveState();
    renderAdmin();
}

function adjustStock(id, delta) {
    var b = findBook(id);
    b.stock = Math.max(0, b.stock + delta);
    saveState();
    renderAdmin();
    showToast('Tồn kho "' + b.title + '" = ' + b.stock);
}

function setZeroStock(id) { findBook(id).stock = 0; saveState(); renderAdmin(); showToast('Đã đưa sách về HẾT HÀNG'); }

function openBookForm(id) {
    var b = id ? findBook(id) : { title: '', author: '', category: 'van-hoc', price: '', discount: 0, stock: 15, desc: '', image: '' };
    var cats = '';
    for (var key in CAT_NAMES) cats += '<option value="' + key + '"' + (b.category === key ? ' selected' : '') + '>' + CAT_NAMES[key] + '</option>';
    openModal('<h3>' + (id ? 'Chỉnh sửa sách' : 'Thêm tựa sách mới') + '</h3><form onsubmit="event.preventDefault();saveBook(' + (id || 0) + ')">' +
        '<label>Tên sách *<input id="fTitle" required value="' + esc(b.title) + '"></label>' +
        '<label>Tác giả *<input id="fAuthor" required value="' + esc(b.author) + '"></label>' +
        '<label>Thể loại<select id="fCat">' + cats + '</select></label>' +
        '<label>Giá bán (đ) *<input id="fPrice" type="number" min="0" required value="' + b.price + '"></label>' +
        '<label>Giảm giá (%)<input id="fDiscount" type="number" min="0" max="90" value="' + (b.discount || 0) + '"></label>' +
        '<label>Tồn kho *<input id="fStock" type="number" min="0" required value="' + b.stock + '"></label>' +
        '<label>Đường dẫn ảnh (vd: images/ten-sach.jpg)<input id="fImage" value="' + esc(b.image) + '"></label>' +
        '<label>Mô tả<textarea id="fDesc" rows="2">' + esc(b.desc) + '</textarea></label>' +
        '<button style="width:100%;margin-top:14px">Lưu thông tin</button></form>');
}

function saveBook(id) {
    var data = {
        title: $('fTitle').value.trim(), author: $('fAuthor').value.trim(), category:$('fCat').value,
        price: parseInt($('fPrice').value) || 0, stock: parseInt($('fStock').value) || 0,
        discount: Math.min(90, Math.max(0, parseInt($('fDiscount').value) || 0)),
        image: $('fImage').value.trim(), desc:$('fDesc').value.trim()
    };
    if (id) {
        Object.assign(findBook(id), data);
    } else {
        data.id = Date.now();
        data.sold = 0;
        books.unshift(data);
    }
    saveState();
    closeModal();
    renderAdmin();
    showToast('Đã lưu thông tin tựa sách!');
}

function deleteBook(id) {
    if (!confirm('Xóa tựa sách này khỏi kho?')) return;
    books = books.filter(function (b) { return b.id !== id; });
    cart = cart.filter(function (c) { return c.id !== id; });
    saveState();
    renderAdmin();
    showToast('Đã xóa sách!');
}

function resetData() {
    if (!confirm('Khôi phục dữ liệu mẫu và xóa toàn bộ dữ liệu?')) return;
    ['THBook_books', 'THBook_orders', 'THBook_cart', 'THBook_users', 'THBook_current_user', 'THBook_receipts', 'THBook_imports', 'THBook_reviews'].forEach(function (k) { localStorage.removeItem(k); });
    location.reload();
}

// ===== 8. KHỞI CHẠY HỆ THỐNG =====
document.addEventListener('DOMContentLoaded', function () {
    initTheme(); // Khởi tạo Dark / Light Mode
    renderNav();
    saveState();
    switchView('store');
});