export default async (req, res) => {
    const token = process.env.INSTAGRAM_KEY;
    const response = await fetch(
      `https://graph.instagram.com/me?fields=followers_count,media_count&access_token=${token}`
    );
    const data = await response.json();
  
    res.status(200).json({
      followers: data.followers_count,
      posts: data.media_count,
      likes: Math.floor(Math.random() * 1000), // Mock data
    });
  };
  