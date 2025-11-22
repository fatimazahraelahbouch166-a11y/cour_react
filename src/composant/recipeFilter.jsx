function RecipeFilter({setSearch,setCategorie,setShowForm}){
   return ( 
    <div>
     <input type='text' placeholder='Rechercher....' onChange={(e)=>setSearch(e.target.value)} style={{height:"30px",width:"200px",margin:"7px"}}/>
    <select onChange={(e)=>setCategorie(e.target.value)} style={{height:"30px",margin:"7px"}}>
       <option value='all'>Toutes les categories</option>
        <option value="Entrée">entrée</option>
         <option value="Plat">plat</option>
          <option value="Dessert">dessert</option>
           <option value="Boisson">boisson</option>
    </select>
       <button style={{width:"200px",height:"30px",borderRadius:"5px",color:"white",backgroundColor:"blue",padding:"5px"}} onClick={() => setShowForm(true)}> + Creer une nouvelle recette</button>
    </div>)
}
export default RecipeFilter