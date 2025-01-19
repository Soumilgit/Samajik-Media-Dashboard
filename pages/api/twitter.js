export default async (req, res) => {
    const token = process.env.TWITTER_KEY;
  
    const response = await fetch(
      'https://api.twitter.com/2/users/by/username/your_twitter_username?user.fields=public_metrics',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await response.json();
  
    res.status(200).json({
      followers: data.data.public_metrics.followers_count,
      tweets: data.data.public_metrics.tweet_count,
      likes: Math.floor(Math.random() * 1000), // Mock data
    });
  };
  