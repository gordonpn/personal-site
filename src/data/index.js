import {
  faAward,
  faBuilding,
  faCode,
  faHandHoldingHeart,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    name: "Hot Red Flag Deals",
    description:
      "Software as a service scraping the crowdsourced Hot Deals forums and delivering newsletter emails on trending deals.",
    link: "https://github.com/gordonpn/hot-flag-deals",
    url: "https://deals.gordon-pn.com",
    screenshot:
      "https://github.com/gordonpn/hot-flag-deals/blob/master/docs/website.png?raw=true",
    tags: [
      "Go",
      "PostgreSQL",
      "Next.js",
      "React.js",
      "Docker Swarm",
      "Redis",
      "mjml",
      "Material-UI",
      "Nginx",
    ],
  },
  {
    name: "Internet Speed Tests Visualized",
    description:
      "Collects data on home internet speed tests and visualize them on a frontend. ",
    link: "https://github.com/gordonpn/internet-speedtests-visualized",
    url: "https://speed.gordon-pn.com",
    screenshot:
      "https://github.com/gordonpn/internet-speedtests-visualized/blob/master/docs/screenshot.png?raw=true",
    tags: [
      "JavaScript",
      "Python",
      "Node.js",
      "React.js",
      "Docker Swarm",
      "MongoDB",
      "Redis",
    ],
  },
  {
    name: "GitHub Stats",
    description:
      "Grabs information about my commits and languages from my GitHub Profile",
    link: "https://github.com/gordonpn/github-stats",
    url: "https://stats.gordon-pn.com/",
    screenshot:
      "https://github.com/gordonpn/github-stats/blob/master/docs/screenshot.png?raw=true",
    tags: [
      "Flask",
      "Python",
      "MongoDB",
      "TypeScript",
      "Next.js",
      "React.js",
      "Emotion.js",
      "Docker Swarm",
      "Nginx",
      "Chakra UI",
    ],
  },
  {
    name: "Canadian University Software Engineering Conference Landing Page",
    description:
      "Landing page for CUSEC 2021, worked in a team of 2 developers.",
    link: "https://github.com/cusec/2021",
    url: "http://2021.cusec.net/",
    screenshot:
      "https://github.com/gordonpn/personal-site/blob/master/docs/cusec_screenshot.png?raw=true",
    tags: ["Next.js", "Firebase", "TypeScript"],
  },
  {
    name: "Reddit Slack Bot",
    description:
      "I believe Reddit has a lot of good content, but it requires manual sifting through, with this bot I " +
      "can get notification when a post reaches the 'hot' state directly into my private Slack workspace!",
    link: "https://github.com/gordonpn/reddit-slack-bot",
    url: "",
    screenshot:
      "https://github.com/gordonpn/reddit-slack-bot/blob/master/docs/screenshot.png?raw=true",
    tags: ["Python", "Docker", "MongoDB"],
  },
  {
    name: "Moodle Scraper",
    description:
      "Automatically scrape and convert files from Concordia Moodle, saves time from manually browsing and downloading!",
    link: "https://github.com/gordonpn/moodle-scraper",
    url: "",
    screenshot:
      "https://github.com/gordonpn/moodle-scraper/blob/master/docs/screenshot.png?raw=true",
    tags: ["Python", "Docker"],
  },
  {
    name: "Music Video Generator",
    description:
      "Automagically generate a music video based a user input (song title and artist). " +
      "We leveraged OctaveGroup's TouchTunes API for song information and ShutterStock's API for visual content. " +
      "Then, Natural Language Processing (NLP) was used on the lyrics to process meaning and fetch relevant media. " +
      "Team effort of four. This project won top 5 projects at ConUHacks 2020! 😲",
    link: "https://github.com/tiffzeng/conu-hacks-2020",
    url: "https://devpost.com/software/picture-video-music-generator",
    screenshot:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/920/419/datas/original.png",
    tags: ["JavaScript", "Node.js", "React.js"],
  },
  {
    name: "Home Server Configurations and Scripts",
    description:
      "Configuration files for services running on my home server, as well as some utility scripts I've written to automate certain tasks.",
    link: "https://github.com/gordonpn/server-services-configs",
    url: "",
    screenshot: "",
    tags: ["Ubuntu", "Raspberry Pi", "Docker Swarm", "Bash"],
  },
  {
    name: "dotfiles",
    description: "My personal dotfiles, includes .zshrc, .vimrc, etc.",
    link: "https://github.com/gordonpn/dotfiles",
    url: "",
    screenshot:
      "https://github.com/gordonpn/dotfiles/blob/master/docs/dotfiles.png?raw=true",
    tags: ["MacOS", "Ruby", "Bash"],
  },
  {
    name: "Meta Search for Developers",
    description:
      "Search a curated subset of the web, tailored for learning developers.",
    link: "https://github.com/gordonpn/dev-meta-search",
    url: "https://search.gordon-pn.com/",
    screenshot:
      "https://github.com/gordonpn/dev-meta-search/blob/master/docs/screenshot.png?raw=true",
    tags: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Emotion.js",
      "Docker Swarm",
      "Nginx",
      "Chakra UI",
    ],
  },
  {
    name: "Conventions Documentation",
    description:
      "Some documentation never hurt anybody! I wrote a bit about some project and Git conventions I personally like. " +
      "I do my best to practice and follow.",
    link: "https://github.com/gordonpn/conventions-guide",
    url: "https://conventions.gordon-pn.com/",
    screenshot:
      "https://github.com/gordonpn/conventions-guide/blob/master/docs/screenshot.png?raw=true",
    tags: ["Gatsby.js", "Docker Swarm", "Nginx"],
  },
  {
    name: "Personal Site",
    description: "This React.js site to to show my profile.",
    link: "https://github.com/gordonpn/personal-site",
    url: "http://gordon-pn.com/",
    screenshot:
      "https://github.com/gordonpn/personal-site/blob/master/docs/screenshot.png?raw=true",
    tags: ["JavaScript", "React.js", "Docker Swarm", "Semantic UI"],
  },
  {
    name: "JavaScript Boilerplate CLI Tool",
    description:
      "JavaScript projects have so much tooling! This is a command line tool that generates a Node.js or React.js project with some important tools. " +
      "Such as, ESLint, Prettier, Stylelint, etc. Can be installed through Ruby Gems and currently has 400+ total downloads. 😲",
    link: "https://github.com/gordonpn/create-boilerplate-cli",
    url: "",
    screenshot:
      "https://github.com/gordonpn/create-boilerplate-cli/blob/master/docs/screenshot.png?raw=true",
    tags: ["Ruby"],
  },
  {
    name: "YouTube Downloader",
    description:
      "Cross-platform YouTube downloader app, that downloads concurrently. Format in video or audio in MP3.",
    link: "https://github.com/gordonpn/youtube-downloader-electron",
    url: "",
    screenshot:
      "https://github.com/gordonpn/youtube-downloader-electron/blob/master/doc/recording.gif?raw=true",
    tags: ["JavaScript", "Node.js", "Electron.js", "Desktop"],
  },
];

export const resume = [
  {
    header: "Introduction",
    icon: faUser,
    content: [
      "I describe myself as a resourceful, detail-oriented self-starter with a great open-mind, a team player with a positive attitude. I love to collaborate, share ideas and knowledge. I am enthusiastic about automation and optimization. I am always looking forward to learning new skills and improve existing ones. I live for challenging problems. I feel the most satisfaction when I have the opportunity to learn and develop. I feel self-fulfillment when meeting the organization’s goals and customer expectations.",
      "When I am not working on software, I enjoy climbing hills on my road bike and rock climbing (bouldering). I enjoy reading as well, mostly non-fiction.",
    ],
  },
  {
    header: "Work Experience",
    icon: faBuilding,
    content: [
      {
        company: "Intact Financial Corporation",
        title: "Software Developer Intern",
        date: "2019-05-21 - 2019-12-31",
        location: "Montreal, Canada",
        description: [
          "Contributed to a Software Composition Analysis application to generate reports for executives and developers.",
          "Integrated Jira Cloud into the Information Security department workflow for managing pen testing vulnerabilities, " +
            "which were previously managed on Excel sheets, improving efficiency.",
          "Improved aggregated report design, improving readability for executives.",
          "Wrote unit and integration tests for application components developed.",
          "Major refactoring of codebase to improve maintainability and reusability of components of the software.",
          "Developed various internal automation features and tools.",
        ],
        tags: [
          "Java",
          "Maven",
          "Jenkins",
          "JUnit",
          "Thymeleaf",
          "Eclipse BIRT",
        ],
      },
      {
        company: "Dental Office St-Charles",
        title: "System Administrator",
        date: "2014-04-01 - 2016-11-01",
        location: "Longueuil, Canada",
        description: [
          "Verifying the integrity and availability of all hardware, server resources, systems and key processes, reviewing system and application logs.",
          "Verifying completion of scheduled jobs such as backups.",
          "Perform regular system monitoring, configure and add new services as necessary.",
        ],
        tags: ["Windows"],
      },
    ],
  },
  {
    header: "Volunteering",
    icon: faHandHoldingHeart,
    content: [
      {
        organization: "Canadian University Software Engineering Conference",
        title: "Software Developer",
        date: "2020-05-01",
        description:
          "In a team of two, in charge of the landing page, as well as the web apps for CUSEC 2021.",
      },
      {
        organization: "Code In The Dark Event by Osedea",
        title: "Volunteer",
        date: "2019-11-01",
        description:
          "Help out before and during the event with various tasks. " +
          "Code In The Dark is a frontend development competition, without preview.",
      },
      {
        organization: "Concordia Rock Climbers Association",
        title: "Founder and President",
        date: "2016-04-01 – 2018-04-01",
        description:
          "We organized indoor and outdoor trips to initiate students to rock climbing and bouldering.",
      },
    ],
  },
  {
    header: "Technologies",
    icon: faCode,
    content: {
      "Languages, Frameworks & Libraries": [
        {
          name: "Java",
          icon: "java",
        },
        {
          name: "JavaScript",
          icon: "javascript",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "Golang",
          icon: "go",
        },
        {
          name: "Ruby",
          icon: "ruby",
        },
        {
          name: "CSS",
          icon: "css3",
        },
        {
          name: "Electron.js",
          icon: "electron",
        },
        {
          name: "HTML5",
          icon: "html5",
        },
        {
          name: "Node.js",
          icon: "node-dot-js",
        },
        {
          name: "React.js",
          icon: "react",
        },
        {
          name: "Next.js",
          icon: "next-dot-js",
        },
        {
          name: "PHP",
          icon: "php",
        },
      ],
      Databases: [
        {
          name: "MongoDB",
          icon: "mongodb",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "Redis",
          icon: "redis",
        },
      ],
      "CI/CD": [
        {
          name: "Drone CI",
          icon: "drone",
        },
        {
          name: "Jenkins",
          icon: "jenkins",
        },
        {
          name: "GitHub Actions",
          icon: "githubactions",
        },
        {
          name: "Travis CI",
          icon: "travisci",
        },
      ],
      Platforms: [
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Docker Swarm",
          icon: "swarm",
        },
        {
          name: "Linux",
          icon: "linux",
        },
        {
          name: "Ubuntu",
          icon: "ubuntu",
        },
        {
          name: "Raspberry Pi",
          icon: "raspberrypi",
        },
      ],
      Tools: [
        {
          name: "Maven",
          icon: "apachemaven",
        },
        {
          name: "Cloudflare",
          icon: "cloudflare",
        },
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "Gulp.js",
          icon: "gulp",
        },
        {
          name: "JetBrains",
          icon: "jetbrains",
        },
        {
          name: "Nginx",
          icon: "nginx",
        },
        {
          name: "npm",
          icon: "npm",
        },
        {
          name: "Vim",
          icon: "vim",
        },
        {
          name: "Visual Studio Code",
          icon: "visualstudiocode",
        },
      ],
    },
  },
  {
    header: "Education",
    icon: faUniversity,
    content: [
      {
        degree: "Bachelor's of Software Engineering",
        institution: "Concordia University, Montreal, Canada",
        date: "2018-2022",
        description: "Co-op Program",
      },
    ],
  },
  {
    header: "Award",
    icon: faAward,
    content: [
      {
        title: "Top Five Finalist",
        date: "2020-01-26",
        description:
          "Our team made it to be one of the top five projects of the ConUHacks 2020 hackathon",
      },
    ],
  },
];
