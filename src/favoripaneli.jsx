

export default function FavoriPaneli({ favoriKitaplar }) {
  return (
    <div className="favark" style={{ border: "1px solid #ccc", padding: 10, borderRadius: 6, }}>
    <h4>⭐Favoriler <span className="favpanel">{favoriKitaplar.length}</span></h4>

      <ul>
        {favoriKitaplar.map(k => (
          <li key={k.id}>{k.baslik} — {k.yazar} ({k.kategori})</li>
        ))}
      </ul>
    </div>
  );
}