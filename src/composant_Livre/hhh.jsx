import { useState } from "react";
import LivreImg from './LivreImg'; 
import Price from './LivrePrice'; 
import Title from './LivreTitle'; 
import imageLivre from './fleurs_plantes_roses.jpg';

function ListLivre({ Livres }) {

  // --- STATES ---
  const [genre, setGenre] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // yearAsc, yearDesc, rateAsc, rateDesc
  const [page, setPage] = useState(1);
  const booksPerPage = 5;

  // --- FILTRAGE PAR GENRE ---
  let filtered = Livres.filter(livre => 
    genre === "all" ? true : livre.genre === genre
  );

  // --- RECHERCHE PAR TITRE ---
  filtered = filtered.filter(livre =>
    livre.title.toLowerCase().includes(search.toLowerCase())
  );

  // --- TRI ---
  if (sort === "yearAsc") {
    filtered.sort((a, b) => a.publicationYear - b.publicationYear);
  }
  if (sort === "yearDesc") {
    filtered.sort((a, b) => b.publicationYear - a.publicationYear);
  }
  if (sort === "rateAsc") {
    filtered.sort((a, b) => a.rating - b.rating);
  }
  if (sort === "rateDesc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // --- PAGINATION ---
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  const paginatedBooks = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / booksPerPage);

  return (
    <div style={{ padding: "20px" }}>

      {/* --- BARRE DE CONTROLES --- */}
      <div style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px",
        flexWrap: "wrap"
      }}>
        {/* Filtre par genre */}
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all">Tous les genres</option>
          <option value="Classic">Classic</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Romance">Romance</option>
          <option value="Adventure">Adventure</option>
          <option value="Historical Fiction">Historical Fiction</option>
        </select>

        {/* Recherche */}
        <input 
          type="text" 
          placeholder="Rechercher un livre..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tri */}
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Trier par...</option>
          <option value="yearAsc">Année ↑</option>
          <option value="yearDesc">Année ↓</option>
          <option value="rateAsc">Note ↑</option>
          <option value="rateDesc">Note ↓</option>
        </select>
      </div>

      {/* --- AFFICHAGE DES LIVRES --- */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      }}>
        {paginatedBooks.map((livre, index) => (
          <div 
            key={index}
            style={{
              width: "200px",
              padding: "15px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            <LivreImg img={imageLivre} />
            <Title title={livre.title} />
            <Price price="100" />
            <p>📖 {livre.genre}</p>
            <p>⭐ {livre.rating}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>

      {/* --- PAGINATION --- */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        gap: "10px"
      }}>
        <button 
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          ⬅️ Précédent
        </button>

        <span>Page {page} / {totalPages}</span>

        <button 
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Suivant ➡️
        </button>
      </div>
    </div>
  );
}

export default ListLivre;
// __________________________________________________________________________________________________________________________

import { useState } from 'react';
import LivreImg from './LivreImg';
import Price from './LivrePrice';
import Title from './LivreTitle';
// import imageLivre from './fleurs_plantes_roses.jpg';

function ListLivre({ Livres }) {
  const [genre, setGenre] = useState('all');
  const [sort, setSort] = useState('');

  // filtre + tri
  let filtered = [...Livres];
  if (genre !== 'all') filtered = filtered.filter(l => l.genre === genre);

  if (sort === 'RatingAsc')  filtered.sort((a, b) => a.rating - b.rating);
  if (sort === 'RatingDesc') filtered.sort((a, b) => b.rating - a.rating);
  if (sort === 'DateAsc')    filtered.sort((a, b) => a.year - b.year);
  if (sort === 'DateDesc')   filtered.sort((a, b) => b.year - a.year);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 20, justifyContent: 'center' }}>
      <select value={genre} onChange={e => setGenre(e.target.value)}>
        <option value="all">Tous</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Classic">Classic</option>
        <option value="Romance">Romance</option>
        <option value="Historical Fiction">Historical Fiction</option>
        <option value="Philosophical Fiction">Philosophical Fiction</option>
        <option value="Adventure">Adventure</option>
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Tri par…</option>
        <option value="RatingAsc">Rating ↑</option>
        <option value="RatingDesc">Rating ↓</option>
        <option value="DateAsc">Année ↑</option>
        <option value="DateDesc">Année ↓</option>
      </select>

      {filtered.map(livre => (
        <div key={livre.id} style={{ width: 200, padding: 15, background: 'white', borderRadius: 12, boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          {/* <LivreImg img={imageLivre} /> */}
          <Title title={livre.title} />
          <Price price={livre.price || 100} />
          <button style={{ marginTop: 10, padding: '8px 15px', border: 'none', background: '#4c6ef5', color: 'white', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>
            Read more
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListLivre;
