
import KitapKart from "./kitapKart";

export default function KitapListe({ kitaplar, favoriIds, onToggleFavori }) {
  if (!kitaplar.length) return <p>Hiç kitap bulunamadı.</p>;
  return (
   <div className="kitap-listesi">
      {kitaplar.map((k) => (
        <KitapKart
          key={k.id}
          {...k}
          favorideMi={favoriIds.includes(k.id)}
          onToggleFavori={onToggleFavori}
        />
      ))}
    </div>
  );
}
