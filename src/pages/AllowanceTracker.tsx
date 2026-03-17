const weeks = [
  { id: 1, week: 'Mar 10 – 16', allowance: 10, chores: 5, spent: 7.5 },
  { id: 2, week: 'Mar 3 – 9', allowance: 10, chores: 0, spent: 4 },
  { id: 3, week: 'Feb 24 – Mar 2', allowance: 10, chores: 2.5, spent: 12.5 },
];

export default function AllowanceTracker() {
  const current = weeks[0];
  const net = current.allowance + current.chores - current.spent;

  return (
    <div className="page">
      <h1 style={{ marginTop: 0 }}>Allowance Tracker</h1>

      <div className="cards-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <p className="card-label">This Week Earned</p>
          <p className="card-value">${(current.allowance + current.chores).toFixed(2)}</p>
        </div>
        <div className="card">
          <p className="card-label">This Week Spent</p>
          <p className="card-value" style={{ color: '#ef4444' }}>${current.spent.toFixed(2)}</p>
        </div>
        <div className="card">
          <p className="card-label">Net This Week</p>
          <p className="card-value" style={{ color: net >= 0 ? '#22c55e' : '#ef4444' }}>
            {net >= 0 ? '+' : ''}${net.toFixed(2)}
          </p>
        </div>
      </div>

      <h2>Weekly History</h2>
      <div className="list">
        {weeks.map((w) => (
          <div key={w.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <p className="list-title">{w.week}</p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <span className="card-label">Allowance: <strong>${w.allowance}</strong></span>
              <span className="card-label">Chores: <strong>${w.chores}</strong></span>
              <span className="card-label">Spent: <strong>${w.spent}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
