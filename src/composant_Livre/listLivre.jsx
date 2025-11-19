import LivreImg from './LivreImg'; 
import Price from './LivrePrice'; 
import Title from './LivreTitle'; 
import imageLivre from './fleurs_plantes_roses.jpg';
import { useState } from 'react';

function ListLivre({Livres}){
    const [genre, setGenre] = useState('all')
    const [title, setTitle] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const nbLivrePage = 4
    let Filtered = Livres.filter(livre =>
        genre === 'all' ? true : livre.genre === genre
    )
    if (sort === "RatingAsc"){
        Filtered.sort((a,b) => a.rating - b.rating)
    }
    if (sort === "RatingDesc"){
        Filtered.sort((a,b) => b.rating - a.rating)
    }
    if (sort === "DateAsc"){
        Filtered.sort((a,b) => a.publicationYear - b.publicationYear)
    }
    if (sort === "DateDesc"){
        Filtered.sort((a,b) => b.publicationYear - a.publicationYear)
    }
    const debut = (page - 1) * nbLivrePage
    const fin = debut + nbLivrePage
    const livrePage = Filtered.slice(debut, fin)
    const totalPages = Math.ceil(Filtered.length / nbLivrePage)
    const [showForm,setShowform]=useState(false)
    return (
        <div>
            <div style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                padding: "20px",
                flexWrap: "wrap",
                alignItems: "center",
                backgroundColor: "#f5f5f5"
            }}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Search books..."
                    style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <select 
                    value={genre} 
                    onChange={e => setGenre(e.target.value)}
                    style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                >
                    <option value="all">All books</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Classic">Classic</option>
                    <option value="Romance">Romance</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Philosophical Fiction">Philosophical Fiction</option>
                    <option value="Adventure">Adventure</option>
                </select>
                <select 
                    value={sort} 
                    onChange={(e) => setSort(e.target.value)}
                    style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                >
                    <option value="">No sorting</option>
                    <option value="RatingAsc">Rating croissant</option>
                    <option value="RatingDesc">Rating decroissant</option>
                    <option value="DateAsc">Annee croissant</option>
                    <option value="DateDesc">Annee decroissant</option>
                </select>
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
                Page {page} sur {totalPages} - {Filtered.length} livres
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                padding: "20px",
                justifyContent: "center"
            }}>
                {livrePage.map((livre, index) => (
                    <div key={index} style={{ 
                        width: 200, 
                        padding: 15, 
                        background: 'white', 
                        borderRadius: 12, 
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
                        textAlign: 'center' 
                    }}>
                        <LivreImg img={imageLivre} />
                        <Title title={livre.title} />
                        <Price price='100'/>
                        <button style={{
                            marginTop: "10px",
                            padding: "8px 15px",
                            border: "none",
                            background: "#4c6ef5",
                            color: "white",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}>
                            Read more
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "10px", 
                padding: "20px" 
            }}>
                <button 
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1}
                    style={{ 
                        padding: "8px 16px", 
                        background: "#4c6ef5",
                        color: "white", 
                        border: "none", 
                        borderRadius: "4px",
                      
                    }}
                >
                    Précédent
                </button>
                
                <button 
                    onClick={() => setPage(page + 1)} 
                    disabled={page === totalPages}
                    style={{ 
                        padding: "8px 16px", 
                        background:"#4c6ef5",
                        color: "white", 
                        border: "none", 
                        borderRadius: "4px",
                    }}
                >
                    Suivant
                </button>
                <button onClick={()=>setShowform(!showForm)} >{ showForm ? "Ajouter livre":"Cacher le formulaire"}</button>
            </div>
        </div>
    )
}

export default ListLivre