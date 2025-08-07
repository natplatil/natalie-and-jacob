import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attendance: '',
    plusOne: '',
    plusOneName: '',
    dietaryRestrictions: '',
    kidsMenu: '',
    songRequest: '',
    additionalNotes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your Google Form submission URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeRhY6-fhn50gIpN-K0s5SjSiiLg6OESMRJWbo-Rm8s78HI1w/formResponse';
    
    const formDataToSubmit = new FormData();
    
    // Replace entry.XXXXX with the actual entry IDs from your Google Form
    formDataToSubmit.append('entry.1068915438', formData.firstName);        // First Name field
    formDataToSubmit.append('entry.339251355', formData.lastName);         // Last Name field  
    formDataToSubmit.append('entry.128297496', formData.email);            // Email Address field
    formDataToSubmit.append('entry.1349741900', formData.phone);            // Phone Number field
    formDataToSubmit.append('entry.286845684', formData.attendance);       // Will you be attending field
    formDataToSubmit.append('entry.1468416405', formData.plusOne);          // Plus one field
    formDataToSubmit.append('entry.1072845414', formData.plusOneName);      // Plus One Name field
    formDataToSubmit.append('entry.1769955084', formData.dietaryRestrictions); // Dietary Restrictions field
    formDataToSubmit.append('entry.360423130', formData.kidsMenu);         // Kids menu field
    formDataToSubmit.append('entry.1724081640', formData.songRequest);      // Song Request field
    formDataToSubmit.append('entry.2145572933', formData.additionalNotes);  // Additional Notes field

    fetch(googleFormURL, {
      method: 'POST',
      body: formDataToSubmit,
      mode: 'no-cors'
    }).then(() => {
      alert('Thank you for your RSVP! We have received your response.');
      // Reset the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        attendance: '',
        plusOne: '',
        plusOneName: '',
        dietaryRestrictions: '',
        kidsMenu: '',
        songRequest: '',
        additionalNotes: ''
      });
    }).catch(() => {
      alert('There was an error. Please try again.');
    });
  };

  return (
    <div>
      {/* Hero section with background image */}
      <div className='sign-up'>
        <h1>RSVP</h1>
      </div>
      
      {/* RSVP Form section */}
      <div className='rsvp-container'>
        <div className='rsvp-section'>
          <h2>Please Respond by [insert date], 2026</h2>
          <p className='rsvp-intro'>
            We're so excited to celebrate with you! Please let us know if you'll be joining us 
            for our special day in beautiful Lerici, Italy.
          </p>
          
          <form className='rsvp-form' onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className='form-section'>
              <h3>Your Information</h3>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='firstName'>First Name *</label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='lastName'>Last Name *</label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='email'>Email Address *</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Phone Number</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Attendance */}
            <div className='form-section'>
              <h3>Attendance</h3>
              <div className='form-group'>
                <label>Will you be attending our wedding? *</label>
                <div className='radio-group'>
                  <label className='radio-label'>
                    <input
                      type='radio'
                      name='attendance'
                      value='Yes'
                      checked={formData.attendance === 'Yes'}
                      onChange={handleInputChange}
                      required
                    />
                    Yes, I'll be there!
                  </label>
                  <label className='radio-label'>
                    <input
                      type='radio'
                      name='attendance'
                      value='No'
                      checked={formData.attendance === 'No'}
                      onChange={handleInputChange}
                      required
                    />
                    Sorry, I can't make it
                  </label>
                </div>
              </div>

              {formData.attendance === 'Yes' && (
                <>
                  <div className='form-group'>
                    <label>Will you be bringing a plus one?</label>
                    <div className='radio-group'>
                      <label className='radio-label'>
                        <input
                          type='radio'
                          name='plusOne'
                          value='Yes'
                          checked={formData.plusOne === 'Yes'}
                          onChange={handleInputChange}
                        />
                        Yes
                      </label>
                      <label className='radio-label'>
                        <input
                          type='radio'
                          name='plusOne'
                          value='No'
                          checked={formData.plusOne === 'No'}
                          onChange={handleInputChange}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  {formData.plusOne === 'Yes' && (
                    <div className='form-group'>
                      <label htmlFor='plusOneName'>Plus One Name</label>
                      <input
                        type='text'
                        id='plusOneName'
                        name='plusOneName'
                        value={formData.plusOneName}
                        onChange={handleInputChange}
                        placeholder="Your guest's full name"
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Meal Preferences */}
            {formData.attendance === 'Yes' && (
              <div className='form-section'>
                <h3>Meal Preferences</h3>
                <div className='form-group'>
                  <label htmlFor='dietaryRestrictions'>Dietary Restrictions or Allergies</label>
                  <textarea
                    id='dietaryRestrictions'
                    name='dietaryRestrictions'
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    placeholder='Please let us know about any dietary restrictions, allergies, or special meal requirements...'
                    rows='3'
                  ></textarea>
                </div>

                <div className='form-group'>
                  <label>Do you need a kids menu?</label>
                  <div className='radio-group'>
                    <label className='radio-label'>
                      <input
                        type='radio'
                        name='kidsMenu'
                        value='Yes'
                        checked={formData.kidsMenu === 'Yes'}
                        onChange={handleInputChange}
                      />
                      Yes
                    </label>
                    <label className='radio-label'>
                      <input
                        type='radio'
                        name='kidsMenu'
                        value='No'
                        checked={formData.kidsMenu === 'No'}
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            {formData.attendance === 'Yes' && (
              <div className='form-section'>
                <h3>Make Our Day Special</h3>
                <div className='form-group'>
                  <label htmlFor='songRequest'>Song Request</label>
                  <input
                    type='text'
                    id='songRequest'
                    name='songRequest'
                    value={formData.songRequest}
                    onChange={handleInputChange}
                    placeholder='Any song you would love to hear at our wedding?'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='additionalNotes'>Additional Notes</label>
                  <textarea
                    id='additionalNotes'
                    name='additionalNotes'
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder='Any additional information or special requests...'
                    rows='4'
                  ></textarea>
                </div>
              </div>
            )}

            <div className='form-submit'>
              <button type='submit' className='rsvp-submit-btn'>
                Submit RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
