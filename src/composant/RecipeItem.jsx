function RecipeItem(props){
return (
    <div   style={{
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      fontFamily: "sans-serif",
      padding: "12px",
      boxSizing: "border-box"
    }}><div style={{backgroundColor:"#e9ebf1ff",textAlign:"center"}}>
        <img src={props.props.image}  style={{
          width: "40%",
          height: "200px",
          objectFit: "cover",
        }}/></div>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            alignItems: "center",
          }}><b style={{ margin: 0, fontSize: "20px" }}>{props.props.nom}</b>
        <span style={{
              background: "#eef2ff",
              color: "#4f46e5",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
            }}>{props.props.categorie}</span></div>
             <p style={{ margin: "0 0 12px", color: "#555" }}>{props.props.description}</p>
        <p>{props.props.ingredients.map((ingredient,index)=>{
         return (
            <span key={index} style={{width:"20%",color:"grey",backgroundColor:"lightgray",padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",margin:"5px"}}>
        {ingredient}</span>
        )
        } ) } </p>
        <b>Difficulte:{props.props.difficulte>=0 && props.props.difficulte<4?"🔥":props.props.difficulte>=4 && props.props.difficulte<7?"🔥🔥🔥":props.props.difficulte>=7 && props.props.difficulte<=10?"🔥🔥🔥":""}</b>
        <div><button  style={{
            backgroundColor: "lightgrey",
            borderRadius: "6px",
            width: "140px",
            height: "30px",
            margin:"5px"
          }} onClick={props.onUpdate}>Modifier</button><button style={{
            backgroundColor: "lightpink",
            borderRadius: "6px",
            width: "100px",
            height: "30px",
              margin:"5px"
          }} onClick={props.onDuplique}>Dupliquer</button><button  style={{
    backgroundColor: "red",
    borderRadius: "6px",
    width: "100px",
    height: "30px",
    color: "white",
    margin:"5px"
}} onClick={props.onDelete}>Supprimer</button>
</div>
    </div>
)
}
export default RecipeItem