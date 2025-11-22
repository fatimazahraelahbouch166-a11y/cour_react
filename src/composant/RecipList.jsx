import RecipeItem from "./RecipeItem"
function ListRecipes({ recettes=[], supprimerRecette ,setRecetteAModifier, dupliquerRecette}) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      width: "95%",       
      margin: "auto",
      alignItems: "flex-start"
    }}>
      {recettes.map((recette,index) => (
        <div style={{ width:"35%", height: "450px", margin:"10px", position:"relative", bottom:"160px" }} key={recette.id}>
          <RecipeItem props={recette}  onDelete={() => supprimerRecette(index)}
  onUpdate={() => setRecetteAModifier(recette)}
  onDuplique={() => dupliquerRecette(recette)}  />
        </div>
      ))}
    </div>
  )
}


export default ListRecipes 