import React from "react";
import "./App.scss";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import imageFile from "./static/chrisubick.jpg";
import { Job } from "./model/job";
import jobsFile from "./data/jobs.json";

const useStyles = makeStyles((theme: import("@mui/material/styles").Theme) => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    border: "2px solid #fff", // White border around avatar
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  title: {
    flexGrow: 1,
    color: "#fff", // White text for header
  },
  currentTitle: {
    fontStyle: "italic",
    color: "#fff", // White text for header subtitle
  },
  contactInfo: {
    float: "right",
    flexGrow: 1,
    marginRight: 12,
    color: theme.palette.secondary.main,
  },
  contactInfoItem: {
    textAlign: "right",
    color: "#fff", // White text for contact info in AppBar
  },
  grow: {
    flexGrow: 1,
  },
  summary: {
    margin: "8px 32px",
    border: `1px solid ${theme.palette.primary.main}`, // Use primary blue
    borderRadius: "5px",
  },
  summaryContent: {
    padding: "8px",
    color: theme.palette.text.primary,
  },
  skillsContent: {
    padding: "8px",
    color: theme.palette.text.primary,
  },
  educationContent: {
    padding: "4px 8px",
    color: theme.palette.text.primary,
  },
  volunteerContent: {
    padding: "4px 8px",
    color: theme.palette.text.primary,
  },
  cvSection: {
    margin: "8px 32px",
    border: `2px solid #60a5fa`, // Use primary blue
    borderRadius: "3px",
    padding: "12px",
    background: theme.palette.background.paper,
  },
  sectionHeader: {
    fontSize: "1.2em",
    padding: "8px 8px 0 8px",
    color: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();
  const avatarImage = {
    src: imageFile,
    alt: "my image",
  };
  const skillsList: string[] = [
    // Frontend & Architecture
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "styled-components",
    "Vite",
    "Redux Architecture",
    "Performance Optimization",
    "Modern Frontend Tooling",
    // UX & Performance
    "Web Performance Optimization",
    "Cross-Browser Compatibility",
    "Responsive Design",
    "Accessibility",
    "Core Web Vitals",
    "Performance Monitoring",
    // API & Integration
    "GraphQL",
    "RESTful APIs",
    "Node.js",
    "Microservices Architecture",
    "Real-time Data Processing",
    "Third-party Integrations",
    // Testing & Quality
    "Jest",
    "Mocha",
    "Cypress",
    "Test-Driven Development",
    "A/B Testing",
    "Automated Testing Frameworks",
    "Component Testing",
    // Leadership & Process
    "Technical Leadership",
    "Engineering Management",
    "Team Scaling",
    "Code Review Processes",
    "Mentoring",
    "Cross-functional Collaboration",
    // DevOps & Infrastructure
    "AWS",
    "CI/CD Pipelines",
    "Serverless Architectures",
    "Infrastructure as Code",
    "Build Optimization",
    "Development Tooling",
  ];
  const jobs: Array<Job> = JSON.parse(JSON.stringify(jobsFile));
  return (
    <div className={`${classes.root} resume_background`}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Avatar
            alt="Remy Sharp"
            src={avatarImage.src}
            className={classes.bigAvatar}
          />
          <div>
            <Typography variant="h6" className={classes.title}>
              Chris Ubick
            </Typography>
            <Typography variant="subtitle1" className={classes.currentTitle}>
              Full-Stack Developer | Technical Lead | Agile Champion | Building
              High-Performance Engineering Solutions at Nike
            </Typography>
          </div>
          <div className={classes.grow} />
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
          Innovative Staff Software Engineer with over 13 years of experience
          building scalable, high-performance frontend applications and leading
          engineering teams at fast-paced startups and enterprise companies.
          Expert in JavaScript/TypeScript, React, and modern frontend
          architecture with proven track record of technical leadership, team
          management, and shipping customer-facing products at scale. Passionate
          about exceptional UX, web performance optimization, and building the
          right abstractions to empower engineering teams. Deep experience in
          fintech and commerce platforms with focus on continuous improvement
          and engineering excellence.
        </Typography>
      </div>
      <div className={`${classes.cvSection} section_background`}>
        <Typography variant="subtitle2" className={classes.sectionHeader}>
          Skills
        </Typography>
        <Typography variant="body1" className={classes.skillsContent}>
          {skillsList.map((skill) => (
            <Chip className={"cmu_chip"} label={skill} color="primary" />
          ))}
        </Typography>
      </div>
      <div className={`${classes.cvSection} section_background`}>
        <Typography variant="subtitle2" className={classes.sectionHeader}>
          Experience
        </Typography>
        {
          <div>
            {jobs.map((job, index) => (
              <div className="job_section" key={`${job.companyName}-${index}`}>
                <div className="job_company_info">
                  <span className="job_title">{job.title}</span> at{" "}
                  <span className="job_company_name">{job.companyName}</span>
                  <div className="job_dates">
                    <span className="job_start_date">{job.start}</span> to{" "}
                    <span className="job_end_date">
                      {job.end !== "" ? job.end : "Present"}
                    </span>
                  </div>
                </div>
                <div
                  className="job_description"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
                <div className="job_skills">
                  Skills: {job.skills.join(", ")}
                </div>
              </div>
            ))}
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
          Associate of Science Degree, June 2012 <br />
          Renewable Energy Systems: Electrical Engineering Career Pathway
          Certificate, June 2011 <br />
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
      <div className={"spacer"} />
    </div>
  );
}

export default App;
