function TableList({ livres }){
      return (<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#62a8eeff' }}>
            <th style={{ padding: '0.75rem', border: '1px solid #cdd5dcff' }}>Titre</th>
            <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Auteur</th>
            <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Année</th>
            <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Genre</th>
            <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Note</th>
          </tr>
        </thead>
        <tbody>
          {livres.map(livre => (
            <tr key={livre.title}>
              <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{livre.title}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{livre.author}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{livre.publicationYear}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{livre.genre}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{livre.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>)
}
export default TableList