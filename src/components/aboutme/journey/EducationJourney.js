import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <Flip top cascade>
          <h1 className="text-white">Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            BACHELOR OF TECHNOLOGY
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            IET, Lucknow
          </h4>
          <p>
            Studied Engineering in Electronics from IET Lucknow
            gained CGPA 8.85 CGPA.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2007 - 2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            DIVINE SAINIK SCHOOL
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Laharatara, Varanasi
          </h4>
          <p>
            Studied here from Class 1 to 12th as a part of secondary school
            Certificate and gained second rank in class 12th with 91.6% and in
            class 10th I secured 9.6 CGPA.
          </p>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
