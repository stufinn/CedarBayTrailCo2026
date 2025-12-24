import { Hammer, Wrench, Shield, Users } from 'lucide-react';

interface BudgetItem {
  label: string;
  percentage: number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const budgetItems: BudgetItem[] = [
  {
    label: 'Trail Maintenance',
    percentage: 45,
    description: 'Grooming, repairs, and upkeep of trail systems',
    icon: <Hammer className="w-8 h-8" />,
    color: 'bg-blue-500'
  },
  {
    label: 'Equipment & Tools',
    percentage: 25,
    description: 'Snowmobiles, grooming equipment, and maintenance tools',
    icon: <Wrench className="w-8 h-8" />,
    color: 'bg-teal-500'
  },
  {
    label: 'Insurance & Safety',
    percentage: 15,
    description: 'Liability insurance and safety equipment',
    icon: <Shield className="w-8 h-8" />,
    color: 'bg-green-500'
  },
  {
    label: 'Administration',
    percentage: 15,
    description: 'Operations, permits, and community engagement',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-amber-500'
  }
];

export default function BudgetBreakdown() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Where Your Money Goes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparency matters. Here's a breakdown of how membership fees support our trail network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {budgetItems.map((item) => (
              <div key={item.label} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-3">
                  <div className={`${item.color} text-white p-3 rounded-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900">{item.label}</h3>
                      <span className="text-lg font-bold text-gray-900">{item.percentage}%</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget Summary</h3>
            <div className="space-y-4">
              {budgetItems.map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-bold">{item.percentage}%</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Our Commitment:</span> Every dollar supports trail maintenance and community access. We're 100% dedicated to keeping your trails in top condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
