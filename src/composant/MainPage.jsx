import React, { useState } from 'react';
// import './App.css';
import RecipForm from "./RecipForm"
import ListRecipes from "./RecipList"
import Aide from "./Aide"
import RecipeFilter from "./recipeFilter"
import  Pagination from "./Pagination"
function Main() {
    const recettesDepart = [
  {
    id: 1,
    nom: "Salade Méditerranéenne",
    categorie: "Entrée",
    ingredients: ["Tomates", "Concombres", "Olives", "Feta", "Huile d'olive"],
    description: "Une salade fraîche et légère aux saveurs méditerranéennes.",
    difficulte: 5,
    image: "/imagecopy3.png"
  },
  {
    id: 2,
    nom: "Poulet au Citron",
    categorie: "Plat",
    ingredients: ["Poulet", "Citron", "Ail", "Herbes de Provence"],
    description: "Un plat simple mais parfumé, parfait pour un déjeuner rapide.",
    difficulte: 9,
    image: "/imagecopy2.png"
  },
  {
    id: 3,
    nom: "Crêpes Sucrées",
    categorie: "Dessert",
    ingredients: ["Farine", "Lait", "Œufs", "Sucre", "Beurre"],
    description: "Des crêpes légères et gourmandes pour le goûter.",
    difficulte: 1,
    image: "/imagecopy.png"
  },
  {
    id: 4,
    nom: "Smoothie Fraise Banane",
    categorie: "Boisson",
    ingredients: ["Fraises", "Banane", "Yaourt", "Miel"],
    description: "Un smoothie onctueux et vitaminé.",
    difficulte: 3,
    image: "/image.png"
  }
]; 

//// state pour list des recettes
  const [recettes,setRecettes]=useState(recettesDepart)
  const [recetteAModifier, setRecetteAModifier] = useState(null);
 const  [search,setSearch]=useState('')
  const  [categorie,setCategorie]=useState('all')
 const [showForm, setShowForm] = useState(false);
    // ki   Afficher gher les recettes selon categorie li selectionnet
    let filtered=recettes.filter(recette=>{
        return categorie==='all'?true:recette.categorie===categorie})
        // affiche gher les livres li nom dialom saisi f l'input
    filtered=filtered.filter(recette=>recette.nom.toLowerCase().includes(search.toLowerCase()))
   ////Pour ajouter une recette qui vient des donnes saisie en formulaire
   const ajouterRecette=(nom, cat, ingrediants, difficulte, description, file)=>{
     const RecetteAjoute = {
      id: recettes.length + 1,
      nom,
      categorie: cat,
      ingredients: ingrediants,
      difficulte,
      description,
      image: file ? URL.createObjectURL(file) : "/image.png"
    };
    setRecettes([...recettes,RecetteAjoute])
     setShowForm(false)
     //pour fermer form apres l'ajout
   } 
   const supprimerRecette=(index)=>{
    const tableFiltered=[...recettes]
    tableFiltered.splice(index,1)
    setRecettes(tableFiltered)
   }
   //pour dupliquer une recette
   const dupliquerRecette = (recette) => {
  const autreRecette = {
    ...recette,
    id: recettes.length + 1, 
    nom: recette.nom + " (copie)"
  };
  //ajout de la recette copie dans la list des recettes
  setRecettes([...recettes, autreRecette]);
};
//traitement de Pagination  
const [page,setPage]=useState(1)
const nbRecette = 2; 
const totalPages = Math.ceil(filtered.length / nbRecette);
const debut = (page - 1) * nbRecette;
const fin = debut + nbRecette;
const recettesPage = filtered.slice(debut, fin);


 return ( 
    <div>
         <div style={{display:"flex"}}>
    <h1 style={{marginLeft:"30px"}}> Creative Recipe  </h1>
    <div style={{marginLeft:"450px",marginTop:"20px"}}>
    {/* composant N4 qui contient les 2 filtres par search/categorie et aussi button ajouter recette */}
   <RecipeFilter setCategorie={setCategorie} setSearch={setSearch} setShowForm={setShowForm} />
    {showForm && <RecipForm onclose={()=> setShowForm(false)} onsave={ajouterRecette} />}
{recetteAModifier && (
  <RecipForm 
    onclose={() => setRecetteAModifier(null)}
    onsave={(nom, cat, ingrediants, difficulte, description, file) => {
      const updated = recettes.map(recette =>
        recette.id === recetteAModifier.id
          ? {
              ...recette,
              nom,
              categorie: cat,
              ingredients: ingrediants,
              difficulte,
              description,
              image: file ? URL.createObjectURL(file) : recette.image,
            }
          : recette
      );
      setRecettes(updated);
      setRecetteAModifier(null);
    }}
    recette={recetteAModifier}
  />
)}
<Aide/>
    </div></div>
   <ListRecipes recettes={recettesPage} supprimerRecette={supprimerRecette} setRecetteAModifier={setRecetteAModifier}
    dupliquerRecette={dupliquerRecette}/>
    < Pagination page={page}  setPage={setPage} totalPges={totalPages} filtered={filtered} />
   </div>
 )
}

export default Main;