function TableList({Livres}){
  return (<div style={{textAlign:"center"}}>
<table style={{border:"2",backgroundColor:"grey",  justifyContent: "center",margin: "0 auto", width: "60%",height:"70%" }}>
  <thead>
  <tr style={{backgroundColor:"lightgrey"}}>
      <td>Titre</td>
      <td>Auteur</td>
      <td>Annee de publication</td>
       </tr>
       </thead>
       <tbody>
    {Livres.map((livre,index)=>(
       <tr key={index} style={{backgroundColor:"lightblue"}}>
      <td>{livre.title}</td><td>{livre.author}</td><td>{livre.publicationYear}</td>
       </tr>
       
    ))}
    </tbody>
 </table>
  </div>) 
}
export default TableList