import General from './General';
import Education from './Education';
import Experience from './Experience';
import { useState } from 'react';

function ResumeBuilder() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});

  const handleGeneralSave = (info) => {
    setGeneralInfo(info);
  };

  const handleEducationSave = (info) => {
    setEducationInfo(info);
  };

  const handleExperienceSave = (info) => {
    setExperienceInfo(info);
  };

  return (
    <div className="resume-builder">
      <div className="forms">
        <General onSave={handleGeneralSave} />
        <Education onSave={handleEducationSave} />
        <Experience onSave={handleExperienceSave} />
      </div>
      <div className="resume-preview">
        <div className="general-info">
          <div className="name">{generalInfo.name}Altay Hodoglugil</div>
          <div className="sub-info">
            <span>{generalInfo.email}randomemail@gmail.com</span>
            <span>{generalInfo.phone}555-555-5555</span>
            <span>{generalInfo.address}Berkeley, CA</span>
          </div>
        </div>
        <div className="resume-main-content">
          <div className="education-info">
            <div className="education-title">Education</div>
            <div className="education-content">
              <div className="left">
                <div className="date">
                  <span>{educationInfo.startDate}06/06/2024</span>
                  <span>{educationInfo.endDate}08/08/2025</span>
                </div>
                <div className="location">{educationInfo.location} Berkeley, CA</div>
              </div>
              <div className="right">
                <div className="school">{educationInfo.school}UC Berkeley</div>
                <div className="degree">{educationInfo.degree}Computer Science, BA</div>
              </div>
            </div>
          </div>
          <div className="experience-info">
            <div className="experience-title">Experience</div>
            <div className="experience-content">
              <div className="left">
                <div className="date">
                  <span>{experienceInfo.startDate}06/06/2024</span>
                  <span>{experienceInfo.endDate}08/08/2025</span>
                </div>
                <div className="location">{experienceInfo.location}Seattle, CA</div>
              </div>
              <div className="right">
                <div className="company">{experienceInfo.company}Vought Inc</div>
                <div className="position">{experienceInfo.position}Software Engineer</div>
                <div className="description">{experienceInfo.description}Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
