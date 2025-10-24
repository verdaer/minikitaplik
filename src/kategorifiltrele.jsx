

export default function KategoriFiltre({ kategori, onKategoriDegisti, tumKategoriler }) {
  return (
    <div className="filtrepan">
      <select value={kategori} onChange={(e) => onKategoriDegisti(e.target.value)}
        className="select-filtre">
        <option value="">Hepsi</option>
        {tumKategoriler.map((k) => (
          <option key={k} value={k}>{k}</option>
        ))}
      </select>
    </div>
  );
}