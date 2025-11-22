function Pagination({ page, setPage, totalPges}) {
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const nbPageStyle = {
    fontWeight: "bold",
    color: "#333",
  };

  const buttonNormal = {
    padding: "6px 12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const buttonDisabled = {
    ...buttonNormal,
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  };

  return (
    <div style={container}>
      <div style={nbPageStyle}>
        Page {page} sur {totalPges} 
      </div>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        style={page === 1 ? buttonDisabled : buttonNormal}
      >
        Précédent
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPges}
        style={page === totalPges ? buttonDisabled : buttonNormal}
      >
        Suivant
      </button>
    </div>
  );
}

export default Pagination;
