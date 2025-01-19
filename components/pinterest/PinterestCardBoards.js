import { useEffect, useState } from 'react';

export default function PinterestCardBoards() {
  const [boards, setBoards] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await fetch('/api/pinterest');
      const data = await response.json();
      setBoards(data.boards);
    };
    fetchBoards();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Pinterest Boards</h5>
        <p className="card-text">{boards !== null ? boards : 'Loading...'}</p>
      </div>
    </div>
  );
}
