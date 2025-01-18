import React, { useState } from "react";
import "./HealthPassportMainComponent.css"; // Assuming your CSS file is named this
import newPassportButton from "../assets/create-passport.png";
import accessPreviousPassportButton from "../assets/previous-doc.png";
import HealthPassportForm from "../health-passport-form/healthPassportForm";

// const NewHealthPassportComponent = () => {
//   return <h2>Welcome to the New Health Passport Creation Page!</h2>;
// };

const HealthPassportMainComponent = () => {
  const [showNewPassport, setShowNewPassport] = useState(false);
  const [showPrevPassport, setShowPrevPassport] = useState(false);

  if (showNewPassport) {
    return <HealthPassportForm />;
  }
  if (showPrevPassport) {
    return <h2>Find Your Previous Health Passports</h2>;
  }

  return (
    <section className="health-passport-section">
      <h2>Health Passport</h2>
      <div className="button-container">
        <button
          className="neumorphic-button"
          onClick={() => setShowNewPassport(true)}
        >
          <img
            src={newPassportButton}
            alt="create new health passport button"
            width={40}
          />
          Create New Health Passport
        </button>
        <button
          className="neumorphic-button"
          onClick={()=> setShowPrevPassport(true)}
        >
          <img
            src={accessPreviousPassportButton}
            alt="access previous health passport button"
            width={40}
          />
          Access Previous Health Passport
        </button>
      </div>
    </section>
  );
};

export default HealthPassportMainComponent;
