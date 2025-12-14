import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="retro-container">
      {/* Header Navigation */}
      <header className="retro-header">
        <nav className="retro-nav">
          <a href="/" className="nav-link">Home</a>
          <span className="nav-separator">|</span>
          <a href="/videos" className="nav-link">My Videos</a>
          <span className="nav-separator">|</span>
          <a href="/favorites" className="nav-link">My Favorites</a>
          <span className="nav-separator">|</span>
          <a href="/messages" className="nav-link">My Messages</a>
          <span className="nav-separator">|</span>
          <a href="/profile" className="nav-link">My Profile</a>
        </nav>
        
        <div className="auth-links">
          <a href="/signup" className="auth-link">Sign Up</a>
          <span className="nav-separator">|</span>
          <a href="/login" className="auth-link">Log In</a>
          <span className="nav-separator">|</span>
          <a href="/help" className="auth-link">Help</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="retro-main">
        {/* Logo Section */}
        <div className="logo-section">
          <h1 className="youtube-logo">
            <span className="you-text">Mindful</span>
            <span className="tube-text">View</span>
          </h1>
          <p className="tagline">Your Digital Video Repository</p>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <input 
            type="text" 
            className="search-input" 
            placeholder=""
          />
          <button className="search-button">Search Videos</button>
        </div>

        {/* Upload Link */}
        <div className="upload-section">
          <a href="/upload" className="upload-link">Upload Your Videos</a>
        </div>

        {/* Tag Cloud */}
        <div className="tag-cloud">
          <a href="/tag/nansheng" className="tag">nansheng</a>
          <span className="tag-sep">·</span>
          <a href="/tag/azlan" className="tag">azlan</a>
          <span className="tag-sep">·</span>
          <a href="/tag/wereidband" className="tag">wereidband</a>
          <span className="tag-sep">·</span>
          <a href="/tag/ny" className="tag tag-large">ny</a>
          <span className="tag-sep">·</span>
          <a href="/tag/superbike" className="tag tag-large">superbike</a>
          <span className="tag-sep">·</span>
          <a href="/tag/japan" className="tag">japan</a>
          <span className="tag-sep">·</span>
          <a href="/tag/sinceretheory" className="tag">sinceretheory</a>
          <span className="tag-sep">·</span>
          <a href="/tag/jozef" className="tag tag-large">jozef</a>
          <span className="tag-sep">·</span>
          <a href="/tag/party" className="tag tag-large">party</a>
          <span className="tag-sep">·</span>
          <a href="/tag/amazon" className="tag">amazon</a>
          <span className="tag-sep">·</span>
          <a href="/tag/board" className="tag">board</a>
          <span className="tag-sep">·</span>
          <a href="/tag/skate" className="tag">skate</a>
          <span className="tag-sep">·</span>
          <a href="/tag/buckley" className="tag">buckley</a>
          <span className="tag-sep">·</span>
          <a href="/tag/shubs" className="tag">shubs</a>
          <span className="tag-sep">·</span>
          <a href="/tag/falls" className="tag">falls</a>
          <span className="tag-sep">·</span>
          <a href="/tag/de" className="tag">de</a>
          <span className="tag-sep">·</span>
          <a href="/tag/stockshot" className="tag">stockshot</a>
          <span className="tag-sep">·</span>
          <a href="/tag/cubbyhole" className="tag">cubbyhole</a>
          <span className="tag-sep">·</span>
          <a href="/tag/burnout" className="tag">burnout</a>
          <span className="tag-sep">·</span>
          <a href="/tag/satellite" className="tag">satellite</a>
          <span className="tag-sep">·</span>
          <a href="/tag/poughkeepsie" className="tag">poughkeepsie</a>
          <span className="tag-sep">·</span>
          <a href="/tag/cruise" className="tag">cruise</a>
          <span className="tag-sep">·</span>
          <a href="/tag/heritage" className="tag">heritage</a>
          <span className="tag-sep">·</span>
          <a href="/tag/orgel" className="tag tag-large">orgel</a>
          <span className="tag-sep">·</span>
          <a href="/tag/chin" className="tag">chin</a>
          <span className="tag-sep">·</span>
          <a href="/tag/themed" className="tag">themed</a>
          <span className="tag-sep">·</span>
          <a href="/tag/mill" className="tag">mill</a>
          <span className="tag-sep">·</span>
          <a href="/tag/music" className="tag">music</a>
          <span className="tag-sep">·</span>
          <a href="/tag/new" className="tag">new</a>
          <span className="tag-sep">·</span>
          <a href="/tag/live" className="tag">live</a>
          <span className="tag-sep">·</span>
          <a href="/tag/to" className="tag tag-large">to</a>
          <span className="tag-sep">·</span>
          <a href="/tag/farmer" className="tag">farmer</a>
          <span className="tag-sep">·</span>
          <a href="/tag/mtv" className="tag tag-large">mtv</a>
          <span className="tag-sep">·</span>
          <a href="/tag/puenbrouck" className="tag">puenbrouck</a>
          <span className="tag-sep">·</span>
          <a href="/tag/sicily" className="tag">sicily</a>
          <span className="tag-sep">·</span>
          <a href="/tag/fairfield" className="tag tag-large">fairfield</a>
          <span className="tag-sep">·</span>
          <a href="/tag/musical" className="tag tag-large">musical</a>
          <span className="tag-sep">·</span>
          <a href="/tag/coffeehouse" className="tag tag-large">coffeehouse</a>
          <span className="tag-sep">·</span>
          <a href="/tag/bud" className="tag tag-large">bud</a>
          <span className="tag-sep">·</span>
          <a href="/tag/2005" className="tag tag-xl">2005</a>
          <span className="tag-sep">·</span>
          <a href="/tag/trip" className="tag tag-xl">trip</a>
          <span className="tag-sep">·</span>
          <a href="/tag/jfk" className="tag">jfk</a>
          <span className="tag-sep">·</span>
          <a href="/tag/wordgles" className="tag">wordgles</a>
          <span className="tag-sep">·</span>
          <a href="/tag/death" className="tag">death</a>
          <span className="tag-sep">·</span>
          <a href="/tag/xianz" className="tag">xianz</a>
          <span className="tag-sep">·</span>
          <a href="/tag/skill" className="tag">skill</a>
          <span className="tag-sep">·</span>
          <a href="/tag/olie" className="tag">olie</a>
          <span className="tag-sep">·</span>
          <a href="/tag/nature" className="tag">nature</a>
          <span className="tag-sep">·</span>
          <a href="/tag/ads" className="tag">ads</a>
          <span className="tag-sep">·</span>
          <a href="/tag/dance" className="tag tag-xl">dance</a>
        </div>

        {/* See More Tags Link */}
        <div className="more-tags">
          <a href="/tags" className="more-tags-link">See More Tags</a>
        </div>

        {/* Featured Videos Section */}
        <section className="featured-section">
          <div className="featured-header">
            <h2 className="featured-title">Featured Videos</h2>
            <a href="/featured" className="watch-more-link">&gt;&gt;&gt; Watch More Videos</a>
          </div>

          <div className="video-grid">
            {/* Video 1 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <img 
                  src="https://via.placeholder.com/150x112/ff6b6b/ffffff?text=Video" 
                  alt="Video thumbnail"
                />
              </div>
              <div className="video-info">
                <a href="/video/1" className="video-title">Denny's</a>
                <p className="video-meta">Added: June 14, 2005</p>
                <p className="video-meta">by <a href="/user/joyley" className="username">joyley</a></p>
                <p className="video-stats">Views: 88 | Comments: 1</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <img 
                  src="https://via.placeholder.com/150x112/4ecdc4/ffffff?text=Video" 
                  alt="Video thumbnail"
                />
              </div>
              <div className="video-info">
                <a href="/video/2" className="video-title">On top of the world!</a>
                <p className="video-meta">Added: May 3, 2005</p>
                <p className="video-meta">by <a href="/user/jawed" className="username">jawed</a></p>
                <p className="video-stats">Views: 82 | Comments: 0</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <img 
                  src="https://via.placeholder.com/150x112/95e1d3/ffffff?text=Video" 
                  alt="Video thumbnail"
                />
              </div>
              <div className="video-info">
                <a href="/video/3" className="video-title">Father's Day Special</a>
                <p className="video-meta">Added: June 19, 2005</p>
                <p className="video-meta">by <a href="/user/ATrain" className="username">ATrain</a></p>
                <p className="video-stats">Views: 46 | Comments: 0</p>
              </div>
            </div>

            {/* Video 4 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <img 
                  src="https://via.placeholder.com/150x112/38ada9/ffffff?text=Video" 
                  alt="Video thumbnail"
                />
              </div>
              <div className="video-info">
                <a href="/video/4" className="video-title">Jingle en Joe</a>
                <p className="video-meta">Added: June 21, 2005</p>
                <p className="video-meta">by <a href="/user/Lena" className="username">Lena</a></p>
                <p className="video-stats">Views: 27 | Comments: 0</p>
              </div>
            </div>

            {/* Video 5 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <img 
                  src="https://via.placeholder.com/150x112/78c3fb/ffffff?text=Video" 
                  alt="Video thumbnail"
                />
              </div>
              <div className="video-info">
                <a href="/video/5" className="video-title">River Otter in Central Park Zoo</a>
                <p className="video-meta">Added: June 28, 2005</p>
                <p className="video-meta">by <a href="/user/TH" className="username">TH</a></p>
                <p className="video-stats">Views: 6 | Comments: 0</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="retro-footer">
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <span className="footer-sep">|</span>
          <a href="/contact" className="footer-link">Contact Us</a>
          <span className="footer-sep">|</span>
          <a href="/terms" className="footer-link">Terms of Use</a>
          <span className="footer-sep">|</span>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span className="footer-sep">|</span>
          <span className="copyright">Copyright © 2005 YouTube, LLC™</span>
          <span className="footer-sep">|</span>
          <a href="/rss" className="rss-link">RSS</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;