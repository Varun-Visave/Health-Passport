import React, { useState } from "react";
import "./HealthPassportForm.css";
const HealthPassportForm = () => {
  const [formData, setFormData] = useState({
    // Demographic Information
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    insuranceInfo: "",
    race: "",
    otherIdNumber: "",

    // Healthcare Providers
    primaryCarePhysician: "",
    primaryCarePhone: "",
    primaryCareAddress: "",
    psychiatrist: "",
    psychiatristPhone: "",
    psychiatristAddress: "",
    dentist: "",
    dentistPhone: "",
    dentistAddress: "",
    preferredHospital: "",
    preferredHospitalPhone: "",
    preferredHospitalAddress: "",

    // Emergency and Family Contacts
    familyContactName: "",
    familyContactPhone: "",
    familyContactAddress: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactAddress: "",

    // Clinical Information
    diagnoses: "",
    medications: "",
    medicationAllergies: "",
    foodAllergies: "",
    painBehavior: "",
    mobility: "",
    diet: "",
    eatingAssistance: "",
    drinkingAssistance: "",
    weight: "",
    weightSixMonths: "",
    medicationsForm: "",
    toiletUsage: "",
    bowelPattern: "",

    // Communication Details
    bestCommunication: "",
    hearing: "",
    vision: "",

    // Social and Emotional Information
    likes: "",
    dislikes: "",
    favoriteActivities: "",
    sleepPattern: "",
    friendInteractions: "",
    strangerInteractions: "",
    angerResponse: "",
    calmingStrategies: "",
    sensitivities: "",
    passingTimeActivities: "",

    // Health Risk Screening
    healthRiskLevel: "",
    healthRiskDate: "",
    individualScores: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Logic for PDF generation or submission will go here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Health Passport Form</h1>

      {/* Demographic Information */}
      <section>
        <h2>
          <div className="circle"></div>
          Demographic Information
        </h2>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          name="zip"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={handleChange}
        />
        <input
          name="dob"
          placeholder="Date of Birth"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* <option value="Other">Other</option> */}
        </select>
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Other">Other</option>
        </select>
        <input
          name="insuranceInfo"
          placeholder="Insurance Information"
          value={formData.insuranceInfo}
          onChange={handleChange}
        />
        <input
          name="race"
          placeholder="Race"
          value={formData.race}
          onChange={handleChange}
        />
        <input
          name="otherIdNumber"
          placeholder="Other ID Number"
          value={formData.otherIdNumber}
          onChange={handleChange}
        />
      </section>

      {/* Healthcare Providers */}
      <section>
        <h2>
          <div className="circle"></div>
          Healthcare Providers
        </h2>
        <input
          name="primaryCarePhysician"
          placeholder="Primary Care Physician"
          value={formData.primaryCarePhysician}
          onChange={handleChange}
        />
        <input
          name="primaryCarePhone"
          placeholder="Primary Care Phone"
          value={formData.primaryCarePhone}
          onChange={handleChange}
        />
        <input
          name="primaryCareAddress"
          placeholder="Primary Care Address"
          value={formData.primaryCareAddress}
          onChange={handleChange}
        />
        <input
          name="psychiatrist"
          placeholder="Psychiatrist"
          value={formData.psychiatrist}
          onChange={handleChange}
        />
        <input
          name="psychiatristPhone"
          placeholder="Psychiatrist Phone"
          value={formData.psychiatristPhone}
          onChange={handleChange}
        />
        <input
          name="psychiatristAddress"
          placeholder="Psychiatrist Address"
          value={formData.psychiatristAddress}
          onChange={handleChange}
        />
        <input
          name="dentist"
          placeholder="Dentist"
          value={formData.dentist}
          onChange={handleChange}
        />
        <input
          name="dentistPhone"
          placeholder="Dentist Phone"
          value={formData.dentistPhone}
          onChange={handleChange}
        />
        <input
          name="dentistAddress"
          placeholder="Dentist Address"
          value={formData.dentistAddress}
          onChange={handleChange}
        />
        <input
          name="preferredHospital"
          placeholder="Preferred Hospital"
          value={formData.preferredHospital}
          onChange={handleChange}
        />
        <input
          name="preferredHospitalPhone"
          placeholder="Preferred Hospital Phone"
          value={formData.preferredHospitalPhone}
          onChange={handleChange}
        />
        <input
          name="preferredHospitalAddress"
          placeholder="Preferred Hospital Address"
          value={formData.preferredHospitalAddress}
          onChange={handleChange}
        />
      </section>

      {/* Emergency and Family Contacts */}
      <section>
        <h2>
          <div className="circle"></div>
          Emergency and Family Contacts
        </h2>
        <input
          name="familyContactName"
          placeholder="Family Contact Name"
          value={formData.familyContactName}
          onChange={handleChange}
        />
        <input
          name="familyContactPhone"
          placeholder="Family Contact Phone"
          value={formData.familyContactPhone}
          onChange={handleChange}
        />
        <input
          name="familyContactAddress"
          placeholder="Family Contact Address"
          value={formData.familyContactAddress}
          onChange={handleChange}
        />
        <input
          name="emergencyContactName"
          placeholder="Emergency Contact Name"
          value={formData.emergencyContactName}
          onChange={handleChange}
        />
        <input
          name="emergencyContactPhone"
          placeholder="Emergency Contact Phone"
          value={formData.emergencyContactPhone}
          onChange={handleChange}
        />
        <input
          name="emergencyContactAddress"
          placeholder="Emergency Contact Address"
          value={formData.emergencyContactAddress}
          onChange={handleChange}
        />
      </section>

      {/* Clinical Information */}
      <section>
        <h2>
          <div className="circle"></div>
          Clinical Information
        </h2>
        <textarea
          name="diagnoses"
          placeholder="Diagnoses"
          value={formData.diagnoses}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="medications"
          placeholder="Medications and Dosages"
          value={formData.medications}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="medicationAllergies"
          placeholder="Medication Allergies and Reactions"
          value={formData.medicationAllergies}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="foodAllergies"
          placeholder="Food Allergies and Reactions"
          value={formData.foodAllergies}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="painBehavior"
          placeholder="Pain Behavior"
          value={formData.painBehavior}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="mobility"
          placeholder="Mobility Details"
          value={formData.mobility}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="diet"
          placeholder="Diet Details"
          value={formData.diet}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="eatingAssistance"
          placeholder="Eating Assistance"
          value={formData.eatingAssistance}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="drinkingAssistance"
          placeholder="Drinking Assistance"
          value={formData.drinkingAssistance}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="weight"
          placeholder="Most Recent Weight"
          value={formData.weight}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="weightSixMonths"
          placeholder="Weight Over Past 6 Months"
          value={formData.weightSixMonths}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="medicationsForm"
          placeholder="Best Form of Medications"
          value={formData.medicationsForm}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="toiletUsage"
          placeholder="Toilet Usage Details"
          value={formData.toiletUsage}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="bowelPattern"
          placeholder="Bowel Movement Patterns"
          value={formData.bowelPattern}
          onChange={handleChange}
        ></textarea>
      </section>

      {/* Communication Details */}
      <section>
        <h2>
          <div className="circle"></div>
          Communication Details
        </h2>
        <textarea
          name="bestCommunication"
          placeholder="Best Communication Method"
          value={formData.bestCommunication}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="hearing"
          placeholder="Hearing Ability"
          value={formData.hearing}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="vision"
          placeholder="Vision Ability"
          value={formData.vision}
          onChange={handleChange}
        ></textarea>
      </section>

      {/* Social and Emotional Information */}
      <section>
        <h2>
          <div className="circle"></div>
          Social and Emotional Information
        </h2>
        <textarea
          name="likes"
          placeholder="Likes"
          value={formData.likes}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="dislikes"
          placeholder="Dislikes"
          value={formData.dislikes}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="favoriteActivities"
          placeholder="Favorite Activities"
          value={formData.favoriteActivities}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="sleepPattern"
          placeholder="Usual Sleep Pattern"
          value={formData.sleepPattern}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="friendInteractions"
          placeholder="Interactions with Friends"
          value={formData.friendInteractions}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="strangerInteractions"
          placeholder="Interactions with Strangers"
          value={formData.strangerInteractions}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="angerResponse"
          placeholder="Response to Anger"
          value={formData.angerResponse}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="calmingStrategies"
          placeholder="Strategies to Calm Down"
          value={formData.calmingStrategies}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="sensitivities"
          placeholder="Sensitivities"
          value={formData.sensitivities}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="passingTimeActivities"
          placeholder="Activities to Pass Time"
          value={formData.passingTimeActivities}
          onChange={handleChange}
        ></textarea>
      </section>

      {/* Health Risk Screening */}
      <section>
        <h2>
          <div className="circle"></div>
          Health Risk Screening
        </h2>
        <input
          name="healthRiskLevel"
          placeholder="Health Risk Level"
          value={formData.healthRiskLevel}
          onChange={handleChange}
        />
        <input
          name="healthRiskDate"
          placeholder="Date of Health Risk Screening"
          type="date"
          value={formData.healthRiskDate}
          onChange={handleChange}
        />
        <textarea
          name="individualScores"
          placeholder="Individual Scores"
          value={formData.individualScores}
          onChange={handleChange}
        ></textarea>
      </section>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HealthPassportForm;
