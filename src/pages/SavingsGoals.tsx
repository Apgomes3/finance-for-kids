const goals = [
  { id: 1, name: 'New Bicycle', target: 150, current: 97.5 },
  { id: 2, name: 'Video Game', target: 60, current: 30 },
  { id: 3, name: 'Birthday Gift for Mom', target: 25, current: 25 },
];

export default function SavingsGoals() {
  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Savings Goals</h1>
        <button className="btn-primary">+ New Goal</button>
      </div>

      <div className="list">
        {goals.map((goal) => {
          const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const done = goal.current >= goal.target;
          return (
            <div key={goal.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <p className="list-title">{goal.name}{done ? ' ✓' : ''}</p>
                <span className="card-label">
                  ${goal.current.toFixed(2)} / ${goal.target.toFixed(2)}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${pct}%`, background: done ? '#22c55e' : 'var(--accent)' }}
                />
              </div>
              <p className="list-sub" style={{ marginTop: 6 }}>{pct}% complete</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
