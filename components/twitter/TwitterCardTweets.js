import { useEffect, useState } from 'react';

export default function TwitterCardTweets() {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await fetch('/api/twitter');
      const data = await response.json();
      setTweets(data.tweets);
    };
    fetchTweets();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Total Tweets</h5>
        <p className="card-text">{tweets !== null ? tweets : 'Loading...'}</p>
      </div>
    </div>
  );
}
