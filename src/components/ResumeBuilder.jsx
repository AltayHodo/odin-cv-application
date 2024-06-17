import General from './General';
import { useState } from 'react';

function ResumeBuilder() {
  const [generalInfo, setGeneralInfo] = useState({});

  const handleGeneralSave = (info) => {
    setGeneralInfo(info)
  }

  return (
    <div className="resume-builder">
      <div className="forms">
        <General onSave={handleGeneralSave} />
      </div>
      <div className="resume-preview">
        <div className="general-info">
          <div className="name">
            {generalInfo.name}
          </div>
          <div className="sub-info">
            <span>{generalInfo.email}</span>
            <span>{generalInfo.phone}</span>
            <span>{generalInfo.address}</span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
