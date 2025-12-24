import Hero from '../components/Hero';
import TrailInfo from '../components/TrailInfo';
import BudgetBreakdown from '../components/BudgetBreakdown';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrailInfo />
      <BudgetBreakdown />
    </div>
  );
}
