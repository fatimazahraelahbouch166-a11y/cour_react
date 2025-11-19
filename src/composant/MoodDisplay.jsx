function MoodDisplay({humeur}){
    return (
 <div style={{backgroundColor:humeur==="Heureux"?"#ffeb3b":humeur==="Fatigué"?"#81d4fa":humeur==="Stressé"?"#ef9a9a":humeur==="Motivé"?"#a5d6a7":"lightgrey",padding:"20px"}}>
<p>Aujourd'hui je me sens <b>{
                humeur==="Heureux"? "Heureux!":
                humeur==="Fatigué"?"Fatigué!":
                humeur==="Stressé"?"Stressé!":
                humeur==="Motivé"?"Motivé!":
                "Aucun Humeur !"
            }</b></p>
 </div>

    )
}
export default MoodDisplay