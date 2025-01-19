import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Card from 'react-bootstrap/Card';

const GitHubCardProjects = ({ username }) => {
  const { data, error } = useSWR(
    username ? `/api/github?username=${username}` : null,
    fetcher
  );

  const numProjects = data?.numProjects ?? 'Loading...';

  return (
    <div>
      <Card style={{ padding: '5px' }} className="shadow-border">
        <Card.Title>GitHub Repos</Card.Title>
        <Card.Text style={{ fontSize: '30px' }}>{numProjects}</Card.Text>
      </Card>
    </div>
  );
};

export default GitHubCardProjects;
