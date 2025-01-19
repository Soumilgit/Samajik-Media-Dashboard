export default async (req, res) => {
    const token = process.env.SPOTIFY_KEY;
  
    const profileResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const profile = await profileResponse.json();
  
    const topTracksResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const topTracks = await topTracksResponse.json();
  
    res.status(200).json({
      followers: profile.followers.total,
      topTracks: topTracks.items.map((track) => track.name),
      playlists: ['Chill Beats', 'Workout', 'Focus Time'], // Mock data
    });
  };
  