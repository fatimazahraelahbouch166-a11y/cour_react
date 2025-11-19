import React from 'react';
import './App.css';
import { useState } from "react";
// import RechercheInput from "./composantParent/recherche"
// import RechercheSelect from "./composantParent/rechercheSelect"
// import Resultat from "./composantParent/Composant_list"
import Header from './composant/header'; 
import DashedList from './composant/DashedList';
import TableList from './composant/tableList'; 
import Footer from './composant/footer';  
import ListLivre from './composant_Livre/listLivre';  
const livresData = [
  {"title": "1984", "author": "George Orwell", "publicationYear": 1949, "genre": "Dystopian", "rating": 4.8},
  {"title": "To Kill a Mockingbird", "author": "Harper Lee", "publicationYear": 1960, "genre": "Classic", "rating": 4.9},
  {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publicationYear": 1925, "genre": "Classic", "rating": 4.4},
  {"title": "Pride and Prejudice", "author": "Jane Austen", "publicationYear": 1813, "genre": "Romance", "rating": 4.7},
  {"title": "Moby-Dick", "author": "Herman Melville", "publicationYear": 1851, "genre": "Adventure", "rating": 4.1},
  {"title": "War and Peace", "author": "Leo Tolstoy", "publicationYear": 1869, "genre": "Historical Fiction", "rating": 4.5},
  {"title": "The Alchemist", "author": "Paulo Coelho", "publicationYear": 1988, "genre": "Philosophical Fiction", "rating": 4.7}
];
// const listFruits=[ {nom:"banane",type:"fruit"}, {nom:"orange",type:"fruit"}, {nom:"pomme",type:"fruit"}, {nom:"raisins",type:"fruit"}, {nom:"kiwi",type:"fruit"}, {nom:"tomate",type:"legume"}, {nom:"carotte",type:"legume"}, {nom:"pomme de terre",type:"legume"}, {nom:"navet",type:"legume"}, {nom:"poivron",type:"legume"} ]
function App() {
  // _______________partie1___________________
  return ( <div style={{textAlign:"center"}}>
<Header/>
<h2>List des livres</h2>
<DashedList Livres={livresData}/>
<h2>Tableau des livres</h2>
<TableList Livres={livresData}/>
 <br></br><br></br><br></br>
 {/* __________________________partie2______________________ */}
 <div>
  
<ListLivre Livres={livresData}/>
</div>
{/* ______________________________partie3________________________________ */}

<Footer/>
</div>
)
}







export default App;