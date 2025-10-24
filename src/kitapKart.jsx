
export default function KitapKart({ id, baslik, yazar, kategori, favorideMi, onToggleFavori }) {
  return (
    <div className={`kitap-kart ${favorideMi ? "favori" : ""}`} 
    style={{ border: "1px solid #ddd", padding: 8, margin: 8, borderRadius: 6 }}>
      <h3>{baslik}</h3>
      <p><strong>Yazar:</strong> {yazar}</p>
      <p><strong>Kategori:</strong> {kategori}</p>
       <button className="fav-btn" onClick={() => onToggleFavori(id)}>
    {favorideMi ? "Favoriden Çıkar" : "Favoriye Ekle"}
      </button>
    </div>
  );
}