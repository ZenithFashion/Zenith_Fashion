const kategori = ['topi', 'baju', 'jaket', 'celana', 'sepatu', 'aksesoris'];
const tabs = document.getElementById('kategoriTabs');
const container = document.getElementById('produkContainer');

const produkData = {
  topi: [
    { nama: 'Topi Urban', harga: 120000, gambar: 'topiurban.jpg' },
    { nama: 'Topi Casual', harga: 180000, gambar: 'baseballcap.jpg' },
  ],
  baju: [
    { nama: 'Baju Polos Putih', harga: 150000, gambar: 'shirt1.jpg' },
    { nama: 'Baju Polos Kuning', harga: 150000, gambar: 'shirt2.jpg' },
	{ nama: 'Baju Polos Hijau', harga: 150000, gambar: 'shirt3.jpg' },
  ],
  jaket: [
    { nama: 'hoodie biru muda', harga: 210000, gambar: 'jaket1.jpg' },
	{ nama: 'hoodie hijau ', harga: 230000, gambar: 'jaket2.jpg' },
	{ nama: 'hoodie kuning', harga: 250000, gambar: 'jaket3.jpg' },
	{ nama: 'hoodie hitam', harga: 275000, gambar: 'jaket4.jpg' },
  ],
  celana: [
    { nama: 'Trousers', harga: 225000, gambar: 'trousers.jpg' },
	{ nama: 'baggy jeans', harga: 285000, gambar: 'baggyjeans.jpg' },
  ],
  sepatu: [
    { nama: 'Sepatu Kets', harga: 550000, gambar: 'kets.jpg' },
	{ nama: 'Sneakers', harga: 800000, gambar: 'sneakers.jpg' }
  ],
  aksesoris: [
    { nama: 'cincin', harga: 120000, gambar: 'cincin.jpg' },
	{ nama: 'gelang', harga: 80000, gambar: 'gelang.jpg' },
	{ nama: 'kalung', harga: 200000, gambar: 'kalung.jpg' },
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
