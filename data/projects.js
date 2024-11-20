export const projects = [
    {
        id: 1,
        title: 'Duplify',
        description:
            'Web app that allows duplicating another Spotify user’s playlist contents to a user’s personal playlist',
        technologies: ['React', 'Node', 'Spotify API', 'AWS S3'],
        github: 'https://github.com/haydenfd/duplify-app',
        url: 'http://duplify.s3-website-us-west-1.amazonaws.com/'
    },
    {
        id: 2,
        title: 'Seatcheck',
        description:
            'Web app that scrapes UCLA enrollment website and notifies students (via email) when a class spot opens up',
        technologies: ['AWS (Lambda, S3, CloudFront, SAM)', 'Python', 'React', 'BeautifulSoup', 'Selenium'],
        github: 'https://github.com/haydenfd/seatcheck',
        url: 'http://seatcheck.s3-website-us-west-1.amazonaws.com/'
    },
    {
        id: 3,
        title: 'NBA Rank 6',
        technologies: ['React', 'TypeScript', 'MongoDB'],
        description:
            'Web app game where users rank five random NBA players in descending order based on an arbitrary statistic',
        github: 'https://github.com/haydenfd/nba-rank-five'
    },
    {
        id: 4,
        title: 'Dog Breed Identifier',
        technologies: ['Python', 'Streamlit', 'Tensorflow', 'Conda'],
        description: 'Streamlit app that recognizes over 150 different dog breeds by image',
        github: 'https://github.com/haydenfd/dog-breed-identification'
    },
    {
        id: 5,
        title: 'AirBnBruin',
        technologies: ['React', 'Node', 'Express', 'TypeScript', 'MongoDB'],
        description: 'Streamlit app that recognizes over 150 different dog breeds by image',
        github: 'https://github.com/haydenfd/35L_Project'
    }
];
