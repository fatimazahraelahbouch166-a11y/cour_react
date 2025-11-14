import header from './header';
function Content(param){
    const p={code:1,product_name:"champo",prix:100}
    function somme(a,b){
        return a+b
    }
     function multiplication(a,b){
         return a*b
    }
    
    return(
        <div>
            <header/>
        <h1>Lorem ipsum dolor sit.</h1>
        <b>la somme est {somme(9,8)} </b><br />
        <b>la multiplication : {multiplication(9,8)} </b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, autem obcaecati nihil, nostrum distinctio at laborum culpa molestias delectus in libero.</p>
        <ul>
            <li>code : {p.code} </li>
            <li>Name product : {p.product_name}  </li>
            <li>Prix : {p.prix}  </li>
        </ul>
        </div>
    );
}
export default Content