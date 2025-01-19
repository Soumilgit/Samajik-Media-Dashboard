import { useEffect, useState } from 'react';

export default function PinterestCardPins() {
  const [pins, setPins] = useState(null);

  useEffect(() => {
    const fetchPins = async () => {
      const response = await fetch('/api/pinterest');
      const data = await response.json();
      setPins(data.pins);
    };
    fetchPins();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Pinterest Pins</h5>
        <p className="card-text">{pins !== null ? pins : 'Loading...'}</p>
      </div>
    </div>
  );
}
