import React from 'react';
import './App.scss';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import imageFile from './static/chrisubick.jpg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/styles';
import { Job } from './model/job';
import jobsFile from './data/jobs.json';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
    },
    grow: {
        flexGrow: 100,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
        border: '#8d5511 solid 2px'
    },
    root: {
        flexGrow: 1,
        backgroundColor: '#fff',
        color: '#8d5511'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#8d5511'
    },
    currentTitle: {
        fontStyle: 'italic',
        color: '#8d5511'
    },
    contactInfo: {
        float: 'right',
        flexGrow: 1,
        marginRight: 12,
        color: '#8d5511'
    },
    contactInfoItem: {
        textAlign: 'right',
    },
    summary: {
        margin: '8px 32px',
        border: '1px #41463b solid',
        borderRadius: '5px',
    },
    summaryContent: {
        padding: '8px',
    },
    experience: {
        margin: '8px 32px',
        border: '1px #41463b solid',
        borderRadius: '5px',
    },
    experienceContent: {
        padding: '8px',
    },
    education: {
        margin: '8px 32px',
        border: '1px #41463b solid',
        borderRadius: '5px',
    },
    educationContent: {
        padding: '8px',
    },
    volunteer: {
        margin: '8px 32px',
        border: '1px #41463b solid',
        borderRadius: '5px',
    },
    volunteerContent: {
        padding: '8px',
    },
    skills: {
        margin: '8px 32px',
        border: '1px #41463b solid',
        borderRadius: '5px',
    },
    skillsContent: {
        padding: '8px',
    },
    cvSection: {
        margin: '8px 32px',
        border: '2px #8d5511 solid',
        borderRadius: '3px',
        padding: '12px'
    },
    sectionHeader: {
        fontSize: '1.2em',
        padding: '8px 8px 0 8px',
        color: '#8d5511',
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: {main: '#fff', light: '#000'}, // Purple and green play nicely together.
        secondary: {main: '#90cdf4', light: '#000'}, // This is just green.A700 as hex.
    },
});

function App() {
    const classes = useStyles();
    const avatarImage = {
        src: imageFile,
        alt: 'my image',
    };
    const skillsList: string[] = ['Java', 'Node.js', 'React', 'Angular', 'Redux', 'SQL', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'Typescript', 'Material Design', 'Bootstrap', 'Concourse', 'Terraform', 'Spring Boot', 'AWS ECS', 'Kafka', 'Gradle', 'Maven', 'JUnit', 'TestCafe', 'React Testing Library', 'Jasmine', 'Protractor', 'Git', 'Linux', 'Scrum', 'Agile', 'Jira', 'TFS', 'SharePoint']
    const jobs: Array<Job> = JSON.parse(JSON.stringify(jobsFile));
    return (
        <ThemeProvider theme={theme}>
            <div className={`${classes.root} resume_background`}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Avatar alt="Remy Sharp" src={avatarImage.src} className={classes.bigAvatar}/>
                        <div>
                            <Typography variant="h6" className={classes.title}>
                                Chris Ubick
                            </Typography>
                            <Typography variant="subtitle1" className={classes.currentTitle}>
                            Senior Software Engineer, Technical Lead
                            </Typography>
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.contactInfo}>
                            <Typography variant="subtitle2" className={classes.contactInfoItem}>
                                chrisubick@gmail.com
                            </Typography>
                            <Typography variant="subtitle2" className={classes.contactInfoItem}>
                                503-810-6593
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={`${classes.cvSection} section_background`}>
                    <Typography variant="body1" className={classes.summaryContent}>
                    Senior software engineer and technical lead for web and mobile application projects with a passion for learning new technologies, mentoring developers, building best practices and delivering well tested outstanding software
                    </Typography>
                </div>
                <div className={`${classes.cvSection} section_background`}>
                    <Typography variant="subtitle2" className={classes.sectionHeader}>
                        Skills
                    </Typography>
                    <Typography variant="body1" className={classes.skillsContent}>
                        {skillsList.map(skill => <Chip className={'cmu_chip'} label={skill} color="secondary"/>)}
                    </Typography>
                </div>
                <div className={`${classes.cvSection} section_background`}>
                    <Typography variant="subtitle2" className={classes.sectionHeader}>
                        Experience
                    </Typography>
                    {
                        <div>
                            {jobs.map((job,index) =>
                                <div className="job_section" key={`${job.companyName}-${index}`}>
                                    <div className="job_company_info">
                                        <span className="job_title">{job.title}</span> at <span className="job_company_name">{job.companyName}</span>
                                        <div className="job_dates">
                                            <span className="job_start_date">{job.start}</span> to <span className="job_end_date">{job.end !== '' ? job.end : 'Present'}</span>
                                        </div>
                                    </div>
                                    <div className="job_description" dangerouslySetInnerHTML={{__html: job.description}} />
                                    <div className="job_skills">
                                        Skills: {job.skills.join(', ')}
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>
                <div className={`${classes.cvSection} section_background`}>
                    <Typography variant="subtitle2" className={classes.sectionHeader}>
                        Education
                    </Typography>
                    <Typography variant="subtitle1" className={classes.educationContent}>
                        Oregon Institute of Technology
                    </Typography>
                    <Typography variant="subtitle2" className={classes.educationContent}>
                        Software Engineering Technology Program
                    </Typography>
                    <Typography variant="subtitle1" className={classes.educationContent}>
                        Portland Community College
                    </Typography>
                    <Typography variant="subtitle2" className={classes.educationContent}>
                        Associate of Science Degree, June 2012 <br/>
                        Renewable Energy Systems: Electrical Engineering Career Pathway Certificate, June 2011 <br/>
                        STEM Scholarship: Tuition and Expenses, 2010 – 2012
                    </Typography>
                </div>
                <div className={`${classes.cvSection} section_background`}>
                    <Typography variant="subtitle2" className={classes.sectionHeader}>
                        Volunteering
                    </Typography>
                    <Typography variant="subtitle1" className={classes.volunteerContent}>
                        Family Dogs New Life Shelter
                    </Typography>
                    <Typography variant="subtitle2" className={classes.volunteerContent}>
                        Member Board of Directors
                    </Typography>

                    <Typography variant="body1" className={classes.volunteerContent}>
                        Adopt a dog from Portland's no kill dog shelter. Find love. Give life.
                    </Typography>
                </div>
                <div className={'spacer'}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
