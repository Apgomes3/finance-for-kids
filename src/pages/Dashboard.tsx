import { useQuery } from '@tanstack/react-query';
import { fetchHello } from '../api/hello';

const recentActivity = [
  { id: 1, description: 'Weekly allowance', amount: 10, date: '2026-03-15' },
  { id: 2, description: 'Candy store', amount: -2.5, date: '2026-03-14' },
  { id: 3, description: 'Chores bonus', amount: 5, date: '2026-03-12' },
];

export default function Dashboard() {
  const { isLoading, isError } = useQuery({
    queryKey: ['hello'],
    queryFn: fetchHello,
  });

  return (
    <div className="page">
      <h1 style={{ marginTop: 0 }}>Hi, Alex!</h1>

      <div className="cards-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <p className="card-label">Total Balance</p>
          <p className="card-value">$127.50</p>
        </div>
        <div className="card">
          <p className="card-label">Weekly Allowance</p>
          <p className="card-value">$10.00</p>
        </div>
        <div className="card">
          <p className="card-label">Savings Progress</p>
          <p className="card-value" style={{ color: 'var(--accent)' }}>65%</p>
        </div>
      </div>

      <h2>Recent Activity</h2>
      <div className="list">
        {recentActivity.map((tx) => (
          <div key={tx.id} className="card list-row">
            <div>
              <p className="list-title">{tx.description}</p>
              <p className="list-sub">{tx.date}</p>
            </div>
            <span className={tx.amount > 0 ? 'amount-positive' : 'amount-negative'}>
              {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <p className="status-line">
        Backend:{' '}
        {isLoading ? 'Connecting...' : isError ? 'Offline' : 'Connected'}
      </p>
    </div>
  );
}
