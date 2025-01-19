export default async (req, res) => {
    const token = process.env.PINTEREST_KEY;
  
    const profileResponse = await fetch('https://api.pinterest.com/v5/user_account', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const profile = await profileResponse.json();
  
    res.status(200).json({
      followers: profile.followers_count,
      pins: Math.floor(Math.random() * 500), // Mock data
      boards: Math.floor(Math.random() * 50), // Mock data
    });
  };
  