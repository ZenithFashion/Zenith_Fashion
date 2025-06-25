const kategori = ['topi', 'baju', 'jaket', 'celana', 'sepatu', 'aksesoris'];
const tabs = document.getElementById('kategoriTabs');
const container = document.getElementById('produkContainer');

const produkData = {
  topi: [
    { nama: 'Topi Urban', harga: 120000, gambar: 'produk/topiurban.jpg' },
    { nama: 'Topi Casual', harga: 180000, gambar: 'produk/baseballcap.jpg' },
  ],
  baju: [
    { nama: 'Baju Polos Putih', harga: 150000, gambar: 'produk/shirt1.jpg' },
    { nama: 'Baju Polos Kuning', harga: 150000, gambar: 'produk/shirt2.jpg' },
	{ nama: 'Baju Polos Hijau', harga: 150000, gambar: 'produk/shirt3.jpg' },
  ],
  jaket: [
    { nama: 'hoodie biru muda', harga: 210000, gambar: 'produk/jaket1.jpg' },
	{ nama: 'hoodie hijau ', harga: 230000, gambar: 'produk/jaket2.jpg' },
	{ nama: 'hoodie kuning', harga: 250000, gambar: 'produk/jaket3.jpg' },
	{ nama: 'hoodie hitam', harga: 275000, gambar: 'produk/jaket4.jpg' },
  ],
  celana: [
    { nama: 'Trousers', harga: 225000, gambar: 'produk/trousers.jpg' },
	{ nama: 'baggy jeans', harga: 285000, gambar: 'produk/baggyjeans.jpg' },
  ],
  sepatu: [
    { nama: 'Sepatu Kets', harga: 550000, gambar: 'produk/kets.jpg' },
	{ nama: 'Sneakers', harga: 800000, gambar: 'produk/sneakers.jpg' }
  ],
  aksesoris: [
    { nama: 'cincin', harga: 120000, gambar: 'produk/cincin.jpg' },
	{ nama: 'gelang', harga: 80000, gambar: 'produk/gelang.jpg' },
	{ nama: 'kalung', harga: 200000, gambar: 'produk/kalung.jpg' },
  ]
};

function renderProduk(kat) {
  const items = produkData[kat] || [];
  container.innerHTML = `<div class="produk-grid">
    ${items.map(item => `
      <div class="card">
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>Rp${item.harga.toLocaleString('id-ID')}</p>
        <button class="btn">Beli</button>
      </div>`).join('')}
  </div>`;
}


kategori.forEach(kat => {
  const btn = document.createElement('button');
  btn.textContent = kat.charAt(0).toUpperCase() + kat.slice(1);
  btn.onclick = () => renderProduk(kat);
  tabs.appendChild(btn);
});

renderProduk('topi');
