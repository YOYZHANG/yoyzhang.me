import { Link } from "react-router-dom"
import '../styles/navBar.css'
export default function Nav() {
  return (
    <>
      <header >
        <button className="w-10 h-10 right-3 bottom-3 rounded-full fixed bg-gray-1">
          <div className="i-ri-arrow-up-line m-auto"></div>
        </button>
        <nav className='nav'>
          <Link to={``}>
            <span>Blog</span>
          </Link>
          <Link to={``}>
            <span>Projects</span>
          </Link>
          <Link to="/chat">
            <div className="i-ri-chat-1-line" />
          </Link>
          <a href="https://twitter.com" target="_blank" title="Twitter">
              <div className="i-ri-twitter-x-fill" />
          </a>
          <a href="https://github.com" target="_blank" title="GitHub">
            <div className="i-uil-github-alt" />
          </a>
          <a href="/feed.xml" target="_blank" title="RSS">
            <div className="i-la-rss-square" />
          </a>
        </nav>
      </header>
    </>
  )
}
