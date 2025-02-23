import React, { useState } from 'react';

const ProbabilityCalculator = () => {
  // 確率データを直接定義
  const probabilityData = [
    {route1: 2, route2: 3, route3: 4, probability: 47.84},
    {route1: 2, route2: 3, route3: 9, probability: 28.78},
    {route1: 2, route2: 4, route3: 6, probability: 24.15},
    {route1: 2, route2: 4, route3: 11, probability: 36.57},
    {route1: 2, route2: 5, route3: 9, probability: 24},
    {route1: 2, route2: 6, route3: 8, probability: 11.65},
    {route1: 2, route2: 7, route3: 8, probability: 10.96},
    {route1: 2, route2: 8, route3: 9, probability: 17.75},
    {route1: 2, route2: 9, route3: 11, probability: 36.34},
    {route1: 3, route2: 4, route3: 5, probability: 33.1},
    {route1: 3, route2: 4, route3: 10, probability: 24.38},
    {route1: 3, route2: 5, route3: 8, probability: 19.21},
    {route1: 3, route2: 6, route3: 7, probability: 13.5},
    {route1: 3, route2: 6, route3: 12, probability: 26.39},
    {route1: 3, route2: 7, route3: 12, probability: 22.15},
    {route1: 3, route2: 9, route3: 10, probability: 22.15},
    {route1: 3, route2: 11, route3: 12, probability: 47.45},
    {route1: 4, route2: 5, route3: 10, probability: 17.75},
    {route1: 4, route2: 6, route3: 9, probability: 13.58},
    {route1: 4, route2: 7, route3: 9, probability: 10.73},
    {route1: 4, route2: 8, route3: 10, probability: 11.65},
    {route1: 4, route2: 9, route3: 12, probability: 24.38},
    {route1: 5, route2: 6, route3: 8, probability: 10.49},
    {route1: 5, route2: 7, route3: 8, probability: 8.56},
    {route1: 5, route2: 8, route3: 9, probability: 13.35},
    {route1: 5, route2: 9, route3: 11, probability: 22.38},
    {route1: 6, route2: 7, route3: 8, probability: 8.02},
    {route1: 6, route2: 8, route3: 9, probability: 10.49},
    {route1: 6, route2: 9, route3: 11, probability: 19.21},
    {route1: 7, route2: 8, route3: 9, probability: 11.34},
    {route1: 7, route2: 9, route3: 11, probability: 21.3},
    {route1: 8, route2: 9, route3: 10, probability: 20.37},
    {route1: 8, route2: 11, route3: 12, probability: 31.64},
    {route1: 2, route2: 3, route3: 5, probability: 41.59},
    {route1: 2, route2: 3, route3: 10, probability: 36.57},
    {route1: 2, route2: 4, route3: 7, probability: 19.29},
    {route1: 2, route2: 4, route3: 12, probability: 44.83},
    {route1: 2, route2: 5, route3: 10, probability: 24.38},
    {route1: 2, route2: 6, route3: 9, probability: 16.67},
    {route1: 2, route2: 7, route3: 9, probability: 16.44},
    {route1: 2, route2: 8, route3: 10, probability: 18.44},
    {route1: 2, route2: 9, route3: 12, probability: 36.57},
    {route1: 3, route2: 4, route3: 6, probability: 25.77},
    {route1: 3, route2: 4, route3: 11, probability: 34.34},
    {route1: 3, route2: 5, route3: 9, probability: 22.38},
    {route1: 3, route2: 6, route3: 8, probability: 14.66},
    {route1: 3, route2: 7, route3: 8, probability: 10.73},
    {route1: 3, route2: 8, route3: 9, probability: 16.44},
    {route1: 3, route2: 9, route3: 11, probability: 29.01},
    {route1: 4, route2: 5, route3: 6, probability: 20.37},
    {route1: 4, route2: 5, route3: 11, probability: 22.15},
    {route1: 4, route2: 6, route3: 10, probability: 11.65},
    {route1: 4, route2: 7, route3: 10, probability: 12.35},
    {route1: 4, route2: 8, route3: 11, probability: 17.75},
    {route1: 4, route2: 10, route3: 11, probability: 24.38},
    {route1: 5, route2: 6, route3: 9, probability: 13.35},
    {route1: 5, route2: 7, route3: 9, probability: 14.66},
    {route1: 5, route2: 8, route3: 10, probability: 13.58},
    {route1: 5, route2: 9, route3: 12, probability: 24},
    {route1: 6, route2: 7, route3: 9, probability: 8.56},
    {route1: 6, route2: 8, route3: 10, probability: 8.87},
    {route1: 6, route2: 9, route3: 12, probability: 17.13},
    {route1: 7, route2: 8, route3: 10, probability: 11.42},
    {route1: 7, route2: 9, route3: 12, probability: 19.06},
    {route1: 8, route2: 9, route3: 11, probability: 22.92},
    {route1: 9, route2: 10, route3: 11, probability: 33.19},
    {route1: 2, route2: 3, route3: 6, probability: 31.64},
    {route1: 2, route2: 3, route3: 11, probability: 47.45},
    {route1: 2, route2: 4, route3: 8, probability: 18.44},
    {route1: 2, route2: 5, route3: 6, probability: 22.99},
    {route1: 2, route2: 5, route3: 11, probability: 28.78},
    {route1: 2, route2: 6, route3: 10, probability: 18.9},
    {route1: 2, route2: 7, route3: 10, probability: 16.67},
    {route1: 2, route2: 8, route3: 11, probability: 26.39},
    {route1: 2, route2: 10, route3: 11, probability: 42.13},
    {route1: 3, route2: 4, route3: 7, probability: 20.91},
    {route1: 3, route2: 4, route3: 12, probability: 42.13},
    {route1: 3, route2: 5, route3: 10, probability: 24.15},
    {route1: 3, route2: 6, route3: 9, probability: 17.36},
    {route1: 3, route2: 7, route3: 9, probability: 15.74},
    {route1: 3, route2: 8, route3: 10, probability: 16.67},
    {route1: 3, route2: 9, route3: 12, probability: 28.78},
    {route1: 4, route2: 5, route3: 7, probability: 15.2},
    {route1: 4, route2: 5, route3: 12, probability: 29.01},
    {route1: 4, route2: 6, route3: 11, probability: 16.67},
    {route1: 4, route2: 7, route3: 11, probability: 16.44},
    {route1: 4, route2: 8, route3: 12, probability: 18.9},
    {route1: 4, route2: 10, route3: 12, probability: 26.16},
    {route1: 5, route2: 6, route3: 10, probability: 13.73},
    {route1: 5, route2: 7, route3: 10, probability: 10.73},
    {route1: 5, route2: 8, route3: 11, probability: 17.36},
    {route1: 5, route2: 10, route3: 11, probability: 22.15},
    {route1: 6, route2: 7, route3: 10, probability: 9.72},
    {route1: 6, route2: 8, route3: 11, probability: 14.66},
    {route1: 6, route2: 10, route3: 11, probability: 20.37},
    {route1: 7, route2: 8, route3: 11, probability: 13.5},
    {route1: 7, route2: 10, route3: 11, probability: 20.91},
    {route1: 8, route2: 9, route3: 12, probability: 22.99},
    {route1: 9, route2: 10, route3: 12, probability: 34.26},
    {route1: 2, route2: 3, route3: 7, probability: 24.77},
    {route1: 2, route2: 3, route3: 12, probability: 56.17},
    {route1: 2, route2: 4, route3: 9, probability: 24.38},
    {route1: 2, route2: 5, route3: 7, probability: 19.06},
    {route1: 2, route2: 5, route3: 12, probability: 36.57},
    {route1: 2, route2: 6, route3: 11, probability: 24.38},
    {route1: 2, route2: 7, route3: 11, probability: 22.15},
    {route1: 2, route2: 8, route3: 12, probability: 26.16},
    {route1: 2, route2: 10, route3: 12, probability: 44.83},
    {route1: 3, route2: 4, route3: 8, probability: 20.37},
    {route1: 3, route2: 5, route3: 6, probability: 22.92},
    {route1: 3, route2: 5, route3: 11, probability: 29.01},
    {route1: 3, route2: 6, route3: 10, probability: 17.75},
    {route1: 3, route2: 7, route3: 10, probability: 16.44},
    {route1: 3, route2: 8, route3: 11, probability: 24.15},
    {route1: 3, route2: 10, route3: 11, probability: 34.34},
    {route1: 4, route2: 5, route3: 8, probability: 15.43},
    {route1: 4, route2: 6, route3: 7, probability: 11.42},
    {route1: 4, route2: 6, route3: 12, probability: 18.44},
    {route1: 4, route2: 7, route3: 12, probability: 16.67},
    {route1: 4, route2: 9, route3: 10, probability: 17.75},
    {route1: 4, route2: 11, route3: 12, probability: 36.57},
    {route1: 5, route2: 6, route3: 11, probability: 16.44},
    {route1: 5, route2: 7, route3: 11, probability: 15.74},
    {route1: 5, route2: 8, route3: 12, probability: 16.67},
    {route1: 5, route2: 10, route3: 12, probability: 24.38},
    {route1: 6, route2: 7, route3: 11, probability: 10.73},
    {route1: 6, route2: 8, route3: 12, probability: 11.65},
    {route1: 6, route2: 10, route3: 12, probability: 18.44},
    {route1: 7, route2: 8, route3: 12, probability: 13.58},
    {route1: 7, route2: 10, route3: 12, probability: 19.29},
    {route1: 8, route2: 10, route3: 11, probability: 25.77},
    {route1: 9, route2: 11, route3: 12, probability: 41.59},
    {route1: 2, route2: 3, route3: 8, probability: 24.38},
    {route1: 2, route2: 4, route3: 5, probability: 34.26},
    {route1: 2, route2: 4, route3: 10, probability: 26.16},
    {route1: 2, route2: 5, route3: 8, probability: 17.13},
    {route1: 2, route2: 6, route3: 7, probability: 13.58},
    {route1: 2, route2: 6, route3: 12, probability: 26.16},
    {route1: 2, route2: 7, route3: 12, probability: 21.91},
    {route1: 2, route2: 9, route3: 10, probability: 29.01},
    {route1: 2, route2: 11, route3: 12, probability: 56.17},
    {route1: 3, route2: 4, route3: 9, probability: 22.15},
    {route1: 3, route2: 5, route3: 7, probability: 21.3},
    {route1: 3, route2: 5, route3: 12, probability: 36.34},
    {route1: 3, route2: 6, route3: 11, probability: 24.15},
    {route1: 3, route2: 7, route3: 11, probability: 22.38},
    {route1: 3, route2: 8, route3: 12, probability: 24.38},
    {route1: 3, route2: 10, route3: 12, probability: 36.57},
    {route1: 4, route2: 5, route3: 9, probability: 20.14},
    {route1: 4, route2: 6, route3: 8, probability: 8.87},
    {route1: 4, route2: 7, route3: 8, probability: 9.72},
    {route1: 4, route2: 8, route3: 9, probability: 13.73},
    {route1: 4, route2: 9, route3: 11, probability: 24.15},
    {route1: 5, route2: 6, route3: 7, probability: 11.34},
    {route1: 5, route2: 6, route3: 12, probability: 17.75},
    {route1: 5, route2: 7, route3: 12, probability: 16.44},
    {route1: 5, route2: 9, route3: 10, probability: 20.14},
    {route1: 5, route2: 11, route3: 12, probability: 28.78},
    {route1: 6, route2: 7, route3: 12, probability: 10.96},
    {route1: 6, route2: 9, route3: 10, probability: 15.43},
    {route1: 6, route2: 11, route3: 12, probability: 24.38},
    {route1: 7, route2: 9, route3: 10, probability: 15.2},
    {route1: 7, route2: 11, route3: 12, probability: 24.77},
    {route1: 8, route2: 10, route3: 12, probability: 24.15},
    {route1: 10, route2: 11, route3: 12, probability: 47.84}
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