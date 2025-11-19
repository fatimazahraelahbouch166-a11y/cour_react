function MoodHistory({humeurs=[]}){
    return <div>
        <h3>Historique des humeurs</h3>
        {humeurs.map((humeur,index)=>{
            return <button key={index}>{humeur} </button> 
        })}
    </div>
}
export default MoodHistory