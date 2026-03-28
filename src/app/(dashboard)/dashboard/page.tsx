export default function Dashboard() {
  const docs = [
    { name: "Contract A", status: "Pending", createdAt: "2026-01-01", updatedAt: "2026-01-02" },
    { name: "Contract B", status: "Pending", createdAt: "2026-01-01", updatedAt: "2026-01-02" },
    { name: "Contract C", status: "Expired", createdAt: "2026-01-01", updatedAt: "2026-01-02" },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {/* A few metrics like "Pending signs", "Completed signs", "Expired signs" */}
      </div>
      <div>
        {/* Logs table */}
        <table>
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc, i) => (
              <tr key={i}>
                <td>{doc.name}</td>
                <td>{doc.status}</td>
                <td>{doc.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}