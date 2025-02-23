import React, { useState } from 'react';
import { probabilityData } from './data/probabilityData'; 

const ProbabilityCalculator = () => {
  
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [probability, setProbability] = useState(null);
  const [usedNumbers, setUsedNumbers] = useState(new Set());

  const findProbability = (routes) => {
    // 入力された3つの数字を昇順にソート
    const sortedInput = [...routes].sort((a, b) => a - b);
    
    // データセットから一致するものを探す（順序は関係なく）
    return probabilityData.find(item => {
      const sortedData = [item.route1, item.route2, item.route3].sort((a, b) => a - b);
      return sortedInput[0] === sortedData[0] && 
             sortedInput[1] === sortedData[1] && 
             sortedInput[2] === sortedData[2];
    });
  };

  const handleNumberClick = (number) => {
    if (selectedRoutes.length < 3 && !usedNumbers.has(number)) {
      const newRoutes = [...selectedRoutes, number];
      setSelectedRoutes(newRoutes);
      setUsedNumbers(new Set([...usedNumbers, number]));

      if (newRoutes.length === 3) {
        const match = findProbability(newRoutes);
        setProbability(match ? match.probability : null);
      }
    }
  };

  const resetSelection = () => {
    setSelectedRoutes([]);
    setUsedNumbers(new Set());
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
              disabled={usedNumbers.has(num) || selectedRoutes.length >= 3}
              className={`p-4 text-lg font-semibold rounded-lg
                ${usedNumbers.has(num)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : selectedRoutes.length >= 3
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
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