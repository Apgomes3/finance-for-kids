import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import SavingsGoals from './pages/SavingsGoals';
import AllowanceTracker from './pages/AllowanceTracker';
import Learn from './pages/Learn';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/savings" element={<SavingsGoals />} />
          <Route path="/allowance" element={<AllowanceTracker />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
