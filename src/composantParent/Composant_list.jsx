function Resultat({ liste }) {
  return (
    <div>
      <h3>Resultat : </h3>
      {liste.length === 0 && <p>Aucun produit trouve.</p>}
      <ul>
        {liste.map((prod, index) => (
          <li key={index}>
            {prod.nom} — <b>{prod.type}</b>
          </li>
        ))}
      </ul>

    </div>
  );
}
export default Resultat;
