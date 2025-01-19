export default async (req, res) => {
    const token = process.env.LINKEDIN_KEY;
  
    const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const profile = await profileResponse.json();
  
    const connectionsResponse = await fetch(
      `https://api.linkedin.com/v2/networkSizes/urn:li:person:${profile.id}?edgeType=CompanyFollowedByMember`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const connections = await connectionsResponse.json();
  
    res.status(200).json({
      connections: connections.firstDegreeSize,
      posts: Math.floor(Math.random() * 100), // Mock data for posts
      comments: Math.floor(Math.random() * 500), // Mock data for comments
    });
  };
  