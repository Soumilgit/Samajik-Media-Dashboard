import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import YouTubeCardSubs from '../components/youtube/YouTubeCardSubs';
import YouTubeCardViews from '../components/youtube/YouTubeCardViews';
import YouTubeCardVids from '../components/youtube/YouTubeCardVids';
import GitHubCardFollowers from '../components/github/GitHubCardFollowers';
import GitHubCardProjects from '../components/github/GitHubCardProjects';
import GitHubCardForks from '../components/github/GitHubCardForks';
import LinkedInCardConnections from '../components/linkedin/LinkedInCardConnections';
import LinkedInCardPosts from '../components/linkedin/LinkedInCardPosts';
import LinkedInCardComments from '../components/linkedin/LinkedInCardComments';
import InstagramCardFollowers from '../components/instagram/InstagramCardFollowers';
import InstagramCardPosts from '../components/instagram/InstagramCardPosts';
import InstagramCardLikes from '../components/instagram/InstagramCardLikes';
import PinterestCardFollowers from '../components/pinterest/PinterestCardFollowers';
import PinterestCardPins from '../components/pinterest/PinterestCardPins';
import PinterestCardBoards from '../components/pinterest/PinterestCardBoards';
import SpotifyCardTopTracks from '../components/spotify/SpotifyCardTopTracks';
import SpotifyCardPlaylists from '../components/spotify/SpotifyCardPlaylists';
import SpotifyCardFollowers from '../components/spotify/SpotifyCardFollowers';
import TwitterCardFollowers from '../components/twitter/TwitterCardFollowers';
import TwitterCardTweets from '../components/twitter/TwitterCardTweets';
import TwitterCardLikes from '../components/twitter/TwitterCardLikes';
import CodeChefCardRating from '../components/codechef/CodeChefCardRating';
import CodeChefCardProblems from '../components/codechef/CodeChefCardProblems';
import CodeChefCardContests from '../components/codechef/CodeChefCardContests';
import LeetCodeCardSolved from '../components/leetcode/LeetCodeCardSolved';
import LeetCodeCardRanking from '../components/leetcode/LeetCodeCardRanking';
import LeetCodeCardContests from '../components/leetcode/LeetCodeCardContests';

export default function Home() {
  const [platformInputs, setPlatformInputs] = useState({
    youtube: '',
    github: '',
    linkedin: '',
    instagram: '',
    pinterest: '',
    spotify: '',
    twitter: '',
    codechef: '',
    leetcode: ''
  });

  const [statsVisible, setStatsVisible] = useState({
    youtube: false,
    github: false,
    linkedin: false,
    instagram: false,
    pinterest: false,
    spotify: false,
    twitter: false,
    codechef: false,
    leetcode: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlatformInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleFormSubmit = (platform) => {
    setStatsVisible((prevStats) => ({
      ...prevStats,
      [platform]: true
    }));
  };

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container">
        <h1 style={{ padding: '100px 0 10px 0' }} className="text-center">Social Media Dashboard</h1>

        {/* Input Form */}
        <div className="text-center mb-5">
          <h3>Enter Your Profile Details</h3>
          <form>
            <div className="mb-3">
              <input 
                type="text" 
                name="youtube" 
                value={platformInputs.youtube} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="YouTube Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('youtube')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="github" 
                value={platformInputs.github} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="GitHub Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('github')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="linkedin" 
                value={platformInputs.linkedin} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="LinkedIn Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('linkedin')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="instagram" 
                value={platformInputs.instagram} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="Instagram Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('instagram')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="pinterest" 
                value={platformInputs.pinterest} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="Pinterest Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('pinterest')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="spotify" 
                value={platformInputs.spotify} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="Spotify Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('spotify')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="twitter" 
                value={platformInputs.twitter} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="Twitter Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('twitter')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="codechef" 
                value={platformInputs.codechef} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="CodeChef Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('codechef')}>Submit</button>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="leetcode" 
                value={platformInputs.leetcode} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="LeetCode Username" 
              />
              <button type="button" className="btn btn-primary mt-2" onClick={() => handleFormSubmit('leetcode')}>Submit</button>
            </div>
          </form>
        </div>

        {/* Display Stats One by One */}
        {statsVisible.youtube && (
          <Row>
            <Col md>
              <YouTubeCardSubs username={platformInputs.youtube} />
              <br />
            </Col>
            <Col md>
              <YouTubeCardViews username={platformInputs.youtube} />
              <br />
            </Col>
            <Col md>
              <YouTubeCardVids username={platformInputs.youtube} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.github && (
          <Row>
            <Col md>
              <GitHubCardForks username={platformInputs.github} />
              <br />
            </Col>
            <Col md>
              <GitHubCardProjects username={platformInputs.github} />
              <br />
            </Col>
            <Col md>
              <GitHubCardFollowers username={platformInputs.github} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.linkedin && (
          <Row>
            <Col md>
              <LinkedInCardConnections username={platformInputs.linkedin} />
              <br />
            </Col>
            <Col md>
              <LinkedInCardPosts username={platformInputs.linkedin} />
              <br />
            </Col>
            <Col md>
              <LinkedInCardComments username={platformInputs.linkedin} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.instagram && (
          <Row>
            <Col md>
              <InstagramCardFollowers username={platformInputs.instagram} />
              <br />
            </Col>
            <Col md>
              <InstagramCardPosts username={platformInputs.instagram} />
              <br />
            </Col>
            <Col md>
              <InstagramCardLikes username={platformInputs.instagram} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.pinterest && (
          <Row>
            <Col md>
              <PinterestCardFollowers username={platformInputs.pinterest} />
              <br />
            </Col>
            <Col md>
              <PinterestCardPins username={platformInputs.pinterest} />
              <br />
            </Col>
            <Col md>
              <PinterestCardBoards username={platformInputs.pinterest} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.spotify && (
          <Row>
            <Col md>
              <SpotifyCardTopTracks username={platformInputs.spotify} />
              <br />
            </Col>
            <Col md>
              <SpotifyCardPlaylists username={platformInputs.spotify} />
              <br />
            </Col>
            <Col md>
              <SpotifyCardFollowers username={platformInputs.spotify} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.twitter && (
          <Row>
            <Col md>
              <TwitterCardFollowers username={platformInputs.twitter} />
              <br />
            </Col>
            <Col md>
              <TwitterCardTweets username={platformInputs.twitter} />
              <br />
            </Col>
            <Col md>
              <TwitterCardLikes username={platformInputs.twitter} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.codechef && (
          <Row>
            <Col md>
              <CodeChefCardRating username={platformInputs.codechef} />
              <br />
            </Col>
            <Col md>
              <CodeChefCardProblems username={platformInputs.codechef} />
              <br />
            </Col>
            <Col md>
              <CodeChefCardContests username={platformInputs.codechef} />
              <br />
            </Col>
          </Row>
        )}

        {statsVisible.leetcode && (
          <Row>
            <Col md>
              <LeetCodeCardSolved username={platformInputs.leetcode} />
              <br />
            </Col>
            <Col md>
              <LeetCodeCardRanking username={platformInputs.leetcode} />
              <br />
            </Col>
            <Col md>
              <LeetCodeCardContests username={platformInputs.leetcode} />
              <br />
            </Col>
          </Row>
        )}

        <p className="text-center">This dashboard uses secure API keys. Add your usernames and API keys in the <code>.env</code> file to fetch data dynamically.</p>
      </div>
    </div>
  );
}
