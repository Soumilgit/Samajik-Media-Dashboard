export default async (req, res) => {
    const username = req.query.username;
  
    const response = await fetch(`https://www.codechef.com/users/${username}`);
    const html = await response.text();
  
    const rating = html.match(/<div class="rating-number">(\d+)<\/div>/)?.[1];
    const problems = Math.floor(Math.random() * 1000); // Mock data
    const contests = Math.floor(Math.random() * 50); // Mock data
  
    res.status(200).json({
      rating: rating || 'Not available',
      problems,
      contests,
    });
  };
  