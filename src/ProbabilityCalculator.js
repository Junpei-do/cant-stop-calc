import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const ProbabilityCalculator = () => {
  const [data, setData] = useState([]);
  const [route1, setRoute1] = useState('');
  const [route2, setRoute2] = useState('');
  const [route3, setRoute3] = useState('');
  const [probability, setProbability] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await window.fs.readFile('test.csv', { encoding: 'utf8' });
        const result = Papa.parse(response, {
          header: true,
          skipEmptyLines: true
        });

        const transformedData = [];
        result.data.forEach(row => {
          const keys = Object.keys(row);
          for (let i = 0; i < keys.length; i += 2) {
            if (keys[i]) {
              const routes = keys[i].split('-');
              const probability = keys[i + 1] ? row[keys[i + 1]].replace('%', '') : '';
              
              if (routes.length === 3 && probability) {
                transformedData.push({
                  route1: parseInt(routes[0]),
                  route2: parseInt(routes[1]),
                  route3: parseInt(routes[2]),
                  probability: parseFloat(probability)
                });
              }
            }
          }
        });
        setData(transformedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (route1 && route2 && route3) {
      const match = data.find(item => 
        item.route1 === parseInt(route1) &&
        item.route2 === parseInt(route2) &&
        item.route3 === parseInt(route3)
      );
      setProbability(match ? match.probability : null);
    } else {
      setProbability(null);
    }
  }, [route1, route2, route3, data]);

  const handleInputChange = (value, setter) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 2 && numValue <= 12) {
      setter(value);
    } else if (value === '') {
      setter('');
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