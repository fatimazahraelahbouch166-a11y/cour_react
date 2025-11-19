function RechercheSelect({ setCategorie, rechercher }) {
  return (
    <div>
      <select onChange={(e) => setCategorie(e.target.value)}>
        <option value="all">Tous</option>
        <option value="fruit">Fruits</option>
        <option value="legume">Légumes</option>
      </select>
      <button onClick={rechercher}>Filtrer</button>
    </div>
  );
}

export default RechercheSelect;
