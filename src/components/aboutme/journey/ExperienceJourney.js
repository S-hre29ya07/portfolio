import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1 className="text-white">Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Feb2024 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title text-black">
            Pod Invest
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-">
            Software Developer Engineer
          </h6>
          <p>• I have been serving as a Software Developer at POD since February 2024, specializing in API development utilizing 
          the Nest framework. My expertise extends to managing MongoDB and MySQL databases.</p>
          <p>• Working on integrating seamless API's to NextsJS based frontend.</p>
          <p>• Working on developing and revamping Fundraising platforms for startup's and an investment platform for investors.</p>
          <p>• Made several API's on both the startup and enterprise side to help startups apply in pipeline, 
            utilized NestJS Schema, routing and controller to filter and show the pipelines based on user application i.e,
            saved, applied or archived. 
          </p>
          <p>• Technology used – NextJS, NestJS, MongoDB, ChartJS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Jul2023-Sep2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title text-black">
            Jamecho
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            MERN Stack developer
          </h6>
          <p>• Worked on development of JTAT software based on MERNstack.</p>
          <p>• Made extensible frontend pagesfor testi.e, Aptitude,Psychometric andPreassessmenttest.Worked on pie-charts and graphsstructure.</p>
          <p>• For Backend I worked on NodeJS,expressJSand for database I used MongoDB.Created severalusersbased on role, worked on password
hashing using bcrypt and createdSchema,routes and controllersforspecific functionalities.</p>
          <p>• Technology used - ReactJS,ExpressJS,MongoDB, NodeJS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Dec2022-Apr2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title text-black">
            Toplearnr
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Frontend developer intern
          </h6>
          <p>• Worked on high-scale and high availability developmentof E-Learning Website,for tutors aswell asstudents</p>
          <p>• Worked on frontend tools for easy scalability of the website. The Frameworks includes VUEJS and for backend is PHP.</p>
          <p>• Worked on integration of Vue3 with PHP based backend forhigh performance and flexibility.</p>
          <p>• Technology used – VueJS,NuxtJS,Tailwind CSS, Docker,Linux,Git</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Dec2021-June2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title text-black">
            Solar Indutries India Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Developer Intern
          </h6>
          <p>• Designed and developed solar EELMIS frontend infrastructure.</p>
          <p>• Worked on several angular components including PrimeNG, PrimeFaces</p>
          <p>• Worked on developing high-availability enterprise services and web application 
          on production server with a specialization in Javascript and
          AngularJS using Typescript</p>
          <p>• Collaborated with Backend Developer and Integrated RESTful API’s and 
            Generated the User Manual for the sub-module I have worked on.</p>
          <p>• Technology used - AngularJS, PrimeNG, TypeScript</p>
        </VerticalTimelineElement>
       
       

       
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
