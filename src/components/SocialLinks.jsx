import { profile } from "../data.js";
import { CubeIcon, GitHubIcon, GitLabIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

const networks = [
  ["github", "GitHub", GitHubIcon],
  ["gitlab", "GitLab", GitLabIcon],
  ["linkedin", "LinkedIn", LinkedInIcon],
  ["hackthebox", "HackTheBox", CubeIcon],
];

const linkClass = "inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-accent";

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {networks
        .filter(([key]) => profile.links[key])
        .map(([key, label, Icon]) => (
          <li key={key}>
            <a href={profile.links[key]} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={linkClass}>
              <Icon />
            </a>
          </li>
        ))}
      <li>
        <a href={`mailto:${profile.email}`} aria-label={profile.email} title={profile.email} className={linkClass}>
          <MailIcon />
        </a>
      </li>
    </ul>
  );
}
