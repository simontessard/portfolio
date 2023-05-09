import './githublogo.css'
import { AiFillGithub } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function GithubLogo({ link }) {
  return (
    <NavLink target={'_blank'} to={link}>
      <AiFillGithub className="github-logo" />
    </NavLink>
  )
}
