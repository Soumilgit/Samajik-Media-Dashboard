import { useEffect, useState } from 'react';

export default function LinkedInCardConnections() {
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    const fetchConnections = async () => {
      const response = await fetch('/api/linkedin');
      const data = await response.json();
      setConnections(data.connections);
    };
    fetchConnections();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">LinkedIn Connections</h5>
        <p className="card-text">{connections !== null ? connections : 'Loading...'}</p>
      </div>
    </div>
  );
}
