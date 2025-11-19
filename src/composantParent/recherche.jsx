function RechercheInput({ setChamp, rechercher }) {
  return (
    <div>
      <input
        type="text" placeholder="Chercher un produit..." onChange={(e) => setChamp(e.target.value)}
      />
      <button onClick={rechercher}>Rechercher</button>
    </div>
  );
}
export default RechercheInput;
