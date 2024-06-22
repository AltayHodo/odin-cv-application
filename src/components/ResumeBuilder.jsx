import General from './General';
import Education from './Education';
import Experience from './Experience';
import { useState } from 'react';

function ResumeBuilder() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

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
              {educationInfo.map((edu, index) => (
                <div key={index} className="education-entry">
                  <div className="left">
                    <div className="date">
                      <span>{edu.startDate}</span>
                      <span>{edu.endDate}</span>
                    </div>
                    <div className="location">{edu.location}</div>
                  </div>
                  <div className="right">
                    <div className="school">{edu.school}</div>
                    <div className="degree">{edu.degree}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="experience-info">
            <div className="experience-title">Experience</div>
            {experienceInfo.map((exp, index) => (
              <div key={index} className="experience-entry">
                <div className="experience-content">
                  <div className="left">
                    <div className="date">
                      <span>{exp.startDate}</span>
                      <span>{exp.endDate}</span>
                    </div>
                    <div className="location">{exp.location}</div>
                  </div>
                  <div className="right">
                    <div className="company">{exp.company}</div>
                    <div className="position">{exp.position}</div>
                    <div className="description">{exp.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
