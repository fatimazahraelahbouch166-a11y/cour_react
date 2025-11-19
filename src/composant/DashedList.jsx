function DashedList({Livres}){
return (
<div >
<ul>
    {Livres.map((livre,index)=>(
        <li key={index} style={{listStyle:"none"}}>-{livre.title}({livre.author}--{livre.publicationYear})</li>
    ))}
</ul>
</div>
)

}

export default DashedList;
                                                                                                      