import React from "react";
import AramaCubugu from "./aramacubug";
import KategoriFiltre from "./kategorifiltrele";
import KitapListe from "./kitaplistele";
import FavoriPaneli from "./favoripaneli";
import './App.css';

function App() {
  const kitaplar = [
    {
      "id": 1,
      "baslik": "Masumiyet Müzesi",
      "yazar": "Orhan Pamuk",
      "kategori":"Roman",
    },

  {
     "id": 2,
      "baslik": "Madam Bovary",
      "yazar": "Gustave Flaubert",
      "kategori":"Roman",
    },

    {"id": 3,
      "baslik": "Aşk ve Gurur",
      "yazar": "jane austen",
      "kategori":"Roman",
    },

    {"id": 4,
      "baslik": "Üç Şiir",
      "yazar": "Nazım Hikmet",
      "kategori":"Şiir",
    },

     {"id": 5,
      "baslik": "Çile",
      "yazar": "Necip Fazıl Kısakürek",
      "kategori":"Şiir",
    },
     {"id": 6,
      "baslik": "Dokuza Kadar On",
      "yazar": "Özdemir Asaf",
      "kategori":"Şiir",
    },

     {"id": 7,
      "baslik": "Yeteneksiz",
      "yazar": "Gordon Korman",
      "kategori":"Çocuk Edebiyatı",
    },

     {"id": 8,
      "baslik": "Tembel Teneke",
      "yazar": "Gordon Korman",
      "kategori":"Çocuk Edebiyatı",
    },

     {"id": 9,
      "baslik": "Gökyüzü Özlemi",
      "yazar": "S.E.Durrant",
      "kategori":"Çocuk Edebiyatı",
    },
  ];


  const aramakey = "kitaplik_aranan";
  const favkey = "kitaplik_favoriler";
  const kategkey = "kitaplik_kategori";


  const [aramaMetni, setAramaMetni] = React.useState(() => localStorage.getItem(aramakey) || "");
  const [kategori, setKategori] = React.useState(() => localStorage.getItem(kategkey) || "");
 
  const [favoriler, setFavoriler] = React.useState(() => {
    const raw = localStorage.getItem(favkey);
    return raw ? JSON.parse(raw) : [];
  });

  const tumKategoriler = React.useMemo(() => {
    return Array.from(new Set(kitaplar.map(k => k.kategori)));
  }, [kitaplar]);

  
  const filtered = React.useMemo(() => {
    const ar = aramaMetni.trim().toLowerCase();
    return kitaplar.filter(k => {
      const baslikOk = k.baslik.toLowerCase().includes(ar);
      const kategoriOk = kategori ? k.kategori === kategori : true;
      return baslikOk && kategoriOk;
    });
  }, [kitaplar, aramaMetni, kategori]);

  
  function toggleFavori(id) {
    setFavoriler(prev => {
      let yeni;
      if (prev.includes(id)) {
        yeni = prev.filter(x => x !== id);
      } else {
        yeni = [...prev, id];
      }
      return yeni;
    });
  }

  React.useEffect(() => {
    localStorage.setItem(aramakey, aramaMetni);
  }, [aramaMetni]);

  React.useEffect(() => {
    localStorage.setItem(kategkey, kategori);
  }, [kategori]);

  React.useEffect(() => {
    localStorage.setItem(favkey, JSON.stringify(favoriler));
  }, [favoriler]);


  const favoriKitaplar = React.useMemo(() => {
    return kitaplar.filter(k => favoriler.includes(k.id));
  }, [kitaplar, favoriler]);

  return (
    <div className="App" 
     style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <header className="app-header"> 
        <h1>Mini kitaplık &#128522; </h1> </header> 

      <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
        <AramaCubugu aramaMetni={aramaMetni} onAramaDegisti={setAramaMetni} />
        <KategoriFiltre kategori={kategori} onKategoriDegisti={setKategori} tumKategoriler={tumKategoriler} />
        <div style={{ marginLeft: "auto" }}>
          <FavoriPaneli favoriKitaplar={favoriKitaplar} />
        </div>
      </div>
     
<hr />

      <KitapListe kitaplar={filtered} favoriIds={favoriler} onToggleFavori={toggleFavori} />

    </div>

  );

}

export default App;