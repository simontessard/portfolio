import './githublogo.css'
import { AiFillGithub } from 'react-icons/ai'

export default function GithubLogo({ link }) {
  const handleClick = () => {
    window.location.href = link
  }
  return <AiFillGithub className="github-logo" onClick={handleClick} />
}
