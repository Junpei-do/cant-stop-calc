import React, { useState } from 'react';

const ProbabilityCalculator = () => {
  // 確率データを直接定義
  const probabilityData = [
    {route1: 2, route2: 3, route3: 4, probability: 47.84},
    {route1: 2, route2: 3, route3: 5, probability: 41.59},
    {route1: 2, route2: 3, route3: 6, probability: 31.64},
    {route1: 2, route2: 3, route3: 7, probability: 24.77},
    {route1: 2, route2: 3, route3: 8, probability: 24.38}
  ];

  const [route1, setRoute1] = useState('');
  const [route2, setRoute2] = useState('');
  const [route3, setRoute3] = useState('');
  const [probability, setProbability] = useState(null);

  const handleInputChange = (value, setter) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 2 && numValue <= 12) {
      setter(value);
      calculateProbability(numValue, setter === setRoute1 ? 'route1' : setter === setRoute2 ? 'route2' : 'route3');
    } else if (value === '') {
      setter('');
      setProbability(null);
    }
  };

  const calculateProbability = (newValue, route) => {
    let r1 = route === 'route1' ? newValue : parseInt(route1);
    let r2 = route === 'route2' ? newValue : parseInt(route2);
    let r3 = route === 'route3' ? newValue : parseInt(route3);

    if (r1 && r2 && r3) {
      const match = probabilityData.find(item => 
        item.route1 === r1 && 
        item.route2 === r2 && 
        item.route3 === r3
      );
      setProbability(match ? match.probability : null);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-md mx-auto">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-center mb-4">Can't Stop バースト確率計算機</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ルート1</label>
              <input
                type="number"
                value={route1}
                onChange={(e) => handleInputChange(e.target.value, setRoute1)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                min="2"
                max="12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ルート2</label>
              <input
                type="number"
                value={route2}
                onChange={(e) => handleInputChange(e.target.value, setRoute2)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                min="2"
                max="12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ルート3</label>
              <input
                type="number"
                value={route3}
                onChange={(e) => handleInputChange(e.target.value, setRoute3)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                min="2"
                max="12"
              />
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="text-lg font-medium text-gray-700">バースト確率</div>
            <div className="text-3xl font-bold mt-2 text-blue-600">
              {probability !== null ? `${probability.toFixed(2)}%` : '---'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityCalculator;