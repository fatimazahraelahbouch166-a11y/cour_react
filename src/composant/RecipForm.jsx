import { useState } from "react";

function RecipForm({onclose,onsave}) {
  const Form = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "600px",
  maxHeight: "90vh",
  overflowY: "auto",          
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  backgroundColor: "#f9f9f9",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  fontFamily: "Arial, sans-serif",
  zIndex: 1000,
};

  const label = {
    display:"block",
    fontWeight: "bold",
    marginBottom: "5px"
  };
  const input = {
    margin:"20px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  };
  const button = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "#007bff",
    cursor: "pointer",
    fontWeight: "bold"
  };
  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  };
  // apres click ela enregistrer les donnes dial formulaire il vont stoker f had l var
  const MorSubmit=(e)=>{
    e.preventDefault()
   onsave(nom, cat, ingrediants, difficulte, description, file);
  }
  
    const [nom,SetNom]=useState('')
    const [cat,SetCat]=useState('')
    const [ingrediants,Setingrediants]=useState([''])
    const [difficulte,Setdifficulte]=useState(0)
     const [description,Setdescription]=useState('')
    const [file,Setfile]=useState('')
    const AjouterInput=()=>{
      Setingrediants([...ingrediants,""])
    }
     const UpdateIngrediant=(id,Nouveauvalue)=>{
      const ing=[...ingrediants];
      ing[id]=Nouveauvalue
      Setingrediants(ing)
    }
    const RemoveIngredient=(id)=>{
      const filtredIng=[...ingrediants];
      filtredIng.splice(id,1)
      Setingrediants(filtredIng)
    }   
     // const [nb,setNb]=useState(1)  
    return (
    <form style={Form} onSubmit={MorSubmit}>
      <div style={header}>
        <h2 style={{fontFamily:"cursive",color:"darkblue"}}>Nouvelle recette</h2>
        <button type="button" style={button} onClick={onclose}>Fermer</button>
      </div>

      <div>
        <label style={label}>Nom</label>
        <input type="text" placeholder="Ex: Pancakes maison..." style={input} onChange={(e)=>SetNom(e.target.value)} />
      </div>

      <div>
        <label style={label} >Catégorie</label>
        <select style={input} onChange={(e)=>SetCat(e.target.value)}>
          <option value="entrée">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
          <option value="boisson">Boisson</option>
        </select>
      </div>

      <div>
  <label style={label}>Ingrédients</label>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "5px" }}>
    {ingrediants.map((ing, index) => (
      <div key={index} style={{ display: "flex", gap: "5px", flex: "1 1 calc(50% - 10px)" }}>
        <input
          type="text"
          placeholder={`Ingrédient ${index + 1}`}
          value={ing}
          style={{input, flex: 1 }}
          onChange={(e) => UpdateIngrediant(index, e.target.value)}
        />
        <button
          type="button"
          style={{ button, backgroundColor: "red", width: "80px" }}
           onClick={() => RemoveIngredient(index)}
        >
          Remove
        </button>
      </div>
    ))}
    <div style={{ display: "flex", gap: "5px", flex: "1 1 calc(50% - 10px)" }}>
      <button
        type="button"
        style={{ ...button, width: "100%" }}
        onClick={AjouterInput}
      >
        + Ajouter ingrédient
      </button>
    </div>
  </div>
</div>
      <div>
        <label style={label}>Difficulté (0-10)</label>
        <input type="number" min={0} max={10} style={input} onChange={(e)=>Setdifficulte(e.target.value)}/>
      </div>
      <div>
        <label style={label}>Description</label>
        <textarea style={{minHeight:"90px",minWidth:"300px"}} onChange={(e)=>Setdescription(e.target.value)}/>
      </div>
       <input type="file" name="" id="" style={button} onChange={(e)=>Setfile(e.target.files[0])}/>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button type="submit" style={button}>Enregistrer</button>
        <button type="reset" style={{button, backgroundColor: "white" }} onClick={onclose}>Annuler</button>
      </div>
    </form>
  );
}

export default RecipForm;
