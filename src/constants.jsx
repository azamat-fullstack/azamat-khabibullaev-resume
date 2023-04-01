export const links = [
  {
    key: 'home',
    label: 'Home',
    url: '/',
    icon: <i className="ri-home-4-line"></i>
  },
  {
    key: 'skills',
    label: 'Skills',
    url: '/skills',
    icon: <i className="ri-trophy-line"></i>
  },
  {
    key: 'qualification',
    label: 'Qualification',
    url: '/qualification',
    icon: <i className="ri-book-open-line"></i>
  },
  {
    key: 'services',
    label: 'Services',
    url: '/services',
    icon: <i className="ri-briefcase-line"></i>
  },
  {
    key: 'projects',
    label: 'Projects',
    url: '/projects',
    icon: <i className="ri-image-line"></i>
  },
  {
    key: 'contact',
    label: 'Contact',
    url: '/contact',
    icon: <i className="ri-chat-1-line"></i>
  }
]

export const biographies = [
  {
    id: 'biography',
    key: 'biography',
    title: 'Biography',
    description: (
      <p>
        Hi, I'm Azamat, Frontend Developer. Passionate about designing beautiful
        web interfaces. Based in Tashkent.
      </p>
    )
  },
  {
    id: 'contacts',
    key: 'contacts',
    title: 'Contacts',
    description: (
      <>
        <ul>
          <li>
            <a href="https://goo.gl/maps/GHR3EqwSebhxwZmL7" target="_blank">
              Uzbekistan, Tashkent
            </a>
          </li>
          <li>
            <a href="mailto:azamatkhabibullaevv@gmail.com">
              azamatkhabibullaevv@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:998950044048">+998 (95) 004-40-48</a>
          </li>
        </ul>
      </>
    )
  },
  {
    id: 'services',
    key: 'services',
    title: 'Services',
    description: (
      <>
        <p>Frontend Development</p>
        <p>Backend Development</p>
        <p>Mobile Development</p>
      </>
    )
  }
]

export const experiences = [
  {
    id: 'years',
    key: 'years',
    title: 'Years of experience',
    number: '01+'
  },
  {
    id: 'projects',
    key: 'projects',
    title: 'Completed projects',
    number: '02+'
  },
  {
    id: 'companies',
    key: 'companies',
    title: 'Companies worked',
    number: '02+'
  }
]

export const skills = [
  {
    key: 'front',
    title: 'Frontend Development',
    subtitle: 'More than 1 year',
    icon: <i className="ri-braces-line"></i>,
    techs: [
      {
        key: 'html5',
        title: 'HTML 5',
        subtitle: 'Intermediate',
        url: '/images/html-5.png',
        className: 'skills__image skills__image-html5'
      },
      {
        key: 'css3',
        title: 'CSS 3',
        subtitle: 'Advanced',
        url: '/images/css-3.png',
        className: 'skills__image skills__image-css3'
      },
      {
        key: 'bem',
        title: 'BEM',
        subtitle: 'Intermediate',
        url: '/images/bem.png',
        className: 'skills__image skills__image-bem'
      },
      {
        key: 'scss',
        title: 'SCSS',
        subtitle: 'Advanced',
        url: '/images/sass.png',
        className: 'skills__image skills__image-scss'
      },
      {
        key: 'tailwindcss',
        title: 'Tailwind CSS',
        subtitle: 'Advanced',
        url: '/images/tailwindcss.png',
        className: 'skills__image skills__image-tailwindcss'
      },
      {
        key: 'git',
        title: 'Git',
        subtitle: 'Intermediate',
        url: '/images/git.png',
        className: 'skills__image skills__image-git'
      },
      {
        key: 'github',
        title: 'GitHub',
        subtitle: 'Intermediate',
        url: '/images/github.png',
        className: 'skills__image skills__image-github'
      },
      {
        key: 'gitlab',
        title: 'GitLab',
        subtitle: 'Intermediate',
        url: '/images/gitlab.png',
        className: 'skills__image skills__image-gitlab'
      },
      {
        key: 'javascript',
        title: 'JavaScript ES6',
        subtitle: 'Intermediate',
        url: '/images/javascript.png',
        className: 'skills__image skills__image-javascript'
      },
      {
        key: 'reactjs',
        title: 'React.js',
        subtitle: 'Intermediate',
        url: '/images/reactjs.png',
        className: 'skills__image skills__image-reactjs'
      },
      {
        key: 'redux',
        title: 'Redux',
        subtitle: 'Intermediate',
        url: '/images/redux.png',
        className: 'skills__image skills__image-redux'
      },
      {
        key: 'reduxtoolkit',
        title: 'Redux Toolkit',
        subtitle: 'Intermediate',
        url: '/images/redux.png',
        className: 'skills__image skills__image-reduxtoolkit'
      },
      {
        key: 'typescript',
        title: 'Typescript',
        subtitle: 'Intermediate',
        url: '/images/typescript.png',
        className: 'skills__image skills__image-typescript'
      },
      {
        key: 'nextjs',
        title: 'Next.js',
        subtitle: 'Intermediate',
        url: '/images/nextjs.png',
        className: 'skills__image skills__image-nextjs'
      }
    ]
  },
  {
    key: 'back',
    title: 'Backend Development',
    subtitle: 'More than 1 year',
    icon: <i className="ri-server-line"></i>,
    techs: [
      {
        key: 'java',
        title: 'Java',
        subtitle: 'Beginner',
        url: '/images/java.png',
        className: 'skills__image skills__image-java'
      },
      {
        key: 'spring',
        title: 'Spring',
        subtitle: 'Beginner',
        url: '/images/spring.png',
        className: 'skills__image skills__image-spring'
      },
      {
        key: 'postgresql',
        title: 'PostgreSQL',
        subtitle: 'Beginner',
        url: '/images/postgresql.png',
        className: 'skills__image skills__image-postgresql'
      }
    ]
  }
]
