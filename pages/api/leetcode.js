export default async (req, res) => {
    const username = req.query.username;
  
    const response = await fetch(`https://leetcode.com/${username}/`);
    const html = await response.text();
  
    const problemsSolved = html.match(/"totalSolved":(\d+)/)?.[1];
    const ranking = html.match(/"ranking":(\d+)/)?.[1];
    const contests = Math.floor(Math.random() * 50); // Mock data
  
    res.status(200).json({
      problemsSolved: problemsSolved || 'Not available',
      ranking: ranking || 'Not available',
      contests,
    });
  };
  