import { useState } from "react";
import MoodDisplay from "./MoodDisplay"
import MoodHistory from "./MoodHistory";
function MoodSelector(){
    const [moods] = useState([ { label: "😊 Heureux", value: "Heureux", color: "#ffeb3b" }
        , { label: "😴 Fatigué", value: "Fatigué", color: "#81d4fa" },
         { label: "😡 Stressé", value: "Stressé", color: "#ef9a9a" },
          { label: "😎 Motivé", value: "Motivé", color: "#a5d6a7" } ]);
    const [selectedMood,SetselectedMood]=useState(null)
    const [history,SetHistory]=useState([])
return (
    <div style={{textAlign:"center",marginTop:"40px"}}>
         <MoodDisplay humeur={selectedMood}/>
{moods.map((mood,index)=>
(
 <button key={index}  style={{
            backgroundColor: mood.color,
            border: "none",
            padding: "10px 20px",
            margin: "5px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }} onClick={()=>{SetselectedMood(mood.value);SetHistory([...history,mood.value])}}>{mood.label}</button>      
)
)}
<MoodHistory humeurs={history} />
<button onClick={ ()=> SetHistory([])}>Vider historique</button>
<button onClick={ ()=> SetselectedMood(null)}>Initialiser</button>

</div>
)
}
export default MoodSelector