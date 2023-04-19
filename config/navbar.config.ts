import fs from 'fs'
import path from 'path'
const getMostRecentJournalLink = () => {
  const today = new Date()
  today.setDate(today.getDate() + 2)
  while (true) {
    const file = today.toISOString().split('T')[0]
    const filePath = path.join(__dirname, '..', 'Research', 'journals', file + '.md')
    if (fs.existsSync(filePath)) {
      return `/r/${file}`
    }
    today.setDate(today.getDate() - 1)
  }
}

const navbar = {
  title: 'Sunghyun Cho',
  logo: {
    alt: 'Sunghyun Cho Logo',
    src: '/img/favicon.svg',
  },
  items: [
    {
      type: 'dropdown',
      label: 'Research',
      position: 'left',
      items: [
        {
          to: getMostRecentJournalLink(),
          label: 'Today',
        },
        {
          to: '/random',
          label: 'Random',
        },
        {
          to: '/3d',
          label: 'Graph',
        },
      ],
    },
    {
      to: '/w/archive',
      label: 'Articles',
      position: 'left',
    },
    {
      href: 'https://github.com/anaclumos',
      position: 'right',
      className: 'navbar-github-link',
      'aria-label': 'GitHub repository',
    },
    {
      href: 'https://linkedin.com/in/anaclumos',
      position: 'right',
      className: 'navbar-linkedin-link',
      'aria-label': 'LinkedIn Account',
    },
    {
      href: 'https://twitter.com/anaclumos',
      position: 'right',
      className: 'navbar-twitter-link',
      'aria-label': 'Twitter Account',
    },
    {
      type: 'localeDropdown',
      position: 'right',
    },
  ],
}

export default navbar
