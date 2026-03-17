const topics = [
  {
    id: 1,
    title: 'What is Money?',
    description: 'Learn where money comes from and how it works in everyday life.',
    duration: '3 min read',
  },
  {
    id: 2,
    title: 'Saving vs Spending',
    description: 'Understand when to save and when it is OK to spend your money.',
    duration: '4 min read',
  },
  {
    id: 3,
    title: 'Setting Savings Goals',
    description: 'How to set a goal and work towards it one step at a time.',
    duration: '5 min read',
  },
  {
    id: 4,
    title: 'Needs vs Wants',
    description: 'The difference between things we need and things we just want.',
    duration: '3 min read',
  },
];

export default function Learn() {
  return (
    <div className="page">
      <h1 style={{ marginTop: 0 }}>Learn</h1>
      <div className="cards-grid">
        {topics.map((topic) => (
          <div key={topic.id} className="card card-clickable">
            <p className="list-title" style={{ marginBottom: 8 }}>{topic.title}</p>
            <p className="card-label" style={{ marginBottom: 16 }}>{topic.description}</p>
            <span className="badge">{topic.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
