import { FaFacebook, FaFolderOpen, FaHome, FaLinkedinIn, FaTwitch, FaTwitter } from "react-icons/fa"
import { FaCalendarDays, FaUserGroup } from 'react-icons/fa6'
export const links = [
  {
    id: 1,
    icon: <FaHome />,
    text: 'home'
  },
  {
    id: 2,
    icon: <FaUserGroup />,
    text: 'team'
  },
  {
    id: 3,
    icon: <FaFolderOpen />,
    text: 'projects'
  },
  {
    id: 4,
    icon: <FaCalendarDays />,
    text: 'calendar'
  }
]
export const icons = [
  {
    id: 1,
    url: 'http://www.twitch.com',
    icon: <FaTwitch />
  },
  {
    id: 2,
    url: 'http://www.facebook.com',
    icon: <FaFacebook />
  },
  {
    id: 3,
    url: 'http://www.twitter.com',
    icon: <FaTwitter />
  },
  {
    id: 4,
    url: 'http://www.twitter.com',
    icon: <FaLinkedinIn />
  },
]