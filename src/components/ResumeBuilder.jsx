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
          <div className="name">{generalInfo.name}</div>
          <div className="sub-info">
            <span>{generalInfo.email}</span>
            <span>{generalInfo.phone}</span>
            <span>{generalInfo.address}</span>
          </div>
        </div>
        <div className="education-info">
          <div className="education-title">Education</div>
          <div className="education-content">
            <div className="left">
              <div className="date">
                <span>{educationInfo.startDate}</span>
                <span>{educationInfo.endDate}</span>
              </div>
              <div className="location">{educationInfo.location}</div>
            </div>
            <div className="right">
              <div className="school">{educationInfo.school}</div>
              <div className="degree">{educationInfo.degree}</div>
            </div>
          </div>
        </div>
        <div className="experience-info">
          <div className="experience-title">Experience</div>
          <div className="experience-content">
            <div className="left">
              <div className="date">
                <span>{experienceInfo.startDate}</span>
                <span>{experienceInfo.endDate}</span>
              </div>
              <div className="location">{experienceInfo.location}</div>
            </div>
            <div className="right">
              <div className="company">{experienceInfo.company}</div>
              <div className="position">{experienceInfo.position}</div>
              <div className="description">{experienceInfo.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
