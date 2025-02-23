import React, { useState } from 'react';

const ProbabilityCalculator = () => {
  // 完全なデータセット
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

  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [probability, setProbability] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // 0: route1, 1: route2, 2: route3

  const handleNumberClick = (number) => {
    if (currentIndex < 3) {
      const newRoutes = [...selectedRoutes, number];
      setSelectedRoutes(newRoutes);
      setCurrentIndex(currentIndex + 1);

      if (newRoutes.length === 3) {
        const match = probabilityData.find(item => 
          item.route1 === newRoutes[0] && 
          item.route2 === newRoutes[1] && 
          item.route3 === newRoutes[2]
        );
        setProbability(match ? match.probability : null);
      }
    }
  };

  const resetSelection = () => {
    setSelectedRoutes([]);
    setCurrentIndex(0);
    setProbability(null);
  };

  // 2から12までのボタンを生成
  const numberButtons = Array.from({ length: 11 }, (_, i) => i + 2);

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-md mx-auto">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-center mb-4">Can't Stop バースト確率計算機</h2>
        
        {/* 選択されたルートの表示 */}
        <div className="mb-6 text-center">
          <div className="text-sm text-gray-600 mb-2">選択中のルート</div>
          <div className="flex justify-center gap-4">
            {[0, 1, 2].map(index => (
              <div 
                key={index}
                className={`w-16 h-16 rounded-lg flex items-center justify-center text-xl 
                  ${index < selectedRoutes.length 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-400'}`}
              >
                {index < selectedRoutes.length ? selectedRoutes[index] : '?'}
              </div>
            ))}
          </div>
        </div>

        {/* 数字ボタン */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {numberButtons.map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              disabled={currentIndex >= 3}
              className={`p-4 text-lg font-semibold rounded-lg
                ${currentIndex >= 3 
                  ? 'bg-gray-100 text-gray-400' 
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-800 active:bg-blue-300'}`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* リセットボタン */}
        <button
          onClick={resetSelection}
          className="w-full mb-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700"
        >
          リセット
        </button>
        
        {/* 確率表示 */}
        <div className="text-center">
          <div className="text-lg font-medium text-gray-700">バースト確率</div>
          <div className="text-3xl font-bold mt-2 text-blue-600">
            {probability !== null ? `${probability.toFixed(2)}%` : '---'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityCalculator;