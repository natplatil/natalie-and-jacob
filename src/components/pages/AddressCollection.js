import React, { useState } from 'react';
import '../../App.css';
import './AddressCollection.css';

export default function AddressCollection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    additionalNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQo6qjKUgjluqoV1EmJag0ytoigP1df7c9pjAbOkef_5MB5A/formResponse';
    
    const formDataToSubmit = new FormData();
    
    // Map form fields to Google Form entry IDs
    formDataToSubmit.append('entry.1396617618', formData.firstName);        // First Name field
    formDataToSubmit.append('entry.1192898728', formData.lastName);         // Last Name field  
    formDataToSubmit.append('entry.1709508864', formData.address);          // Street Address field
    formDataToSubmit.append('entry.1406307681', formData.city);             // City field
    formDataToSubmit.append('entry.1257460182', formData.state);            // State field
    formDataToSubmit.append('entry.256336875', formData.zipCode);           // ZIP Code field
    formDataToSubmit.append('entry.199402186', formData.country);           // Country field
    formDataToSubmit.append('entry.33687274', formData.additionalNotes);    // Additional Notes field

    fetch(googleFormURL, {
      method: 'POST',
      body: formDataToSubmit,
      mode: 'no-cors'
    }).then(() => {
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
          additionalNotes: ''
        });
      }, 3000);
    }).catch(() => {
      alert('There was an error. Please try again.');
    });
  };

  if (isSubmitted) {
    return (
      <div className='address-collection'>
        <div className='address-container'>
          <div className='success-message'>
            <h1>Thank You!</h1>
            <p>Your address has been submitted successfully. We'll send your physical invitation soon!</p>
            <div className='success-icon'>💌</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='address-collection'>
      <div className='address-container'>
        <div className='address-header'>
          <h1>Provide Mailing Address Here to Receive Paper Invite!</h1>
          <p className='note'>💝 We're sending out physical invitations! Please provide your mailing address so we can send yours to you.</p>
        </div>

        <form onSubmit={handleSubmit} className='address-form'>
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
                placeholder='Enter your first name'
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
                placeholder='Enter your last name'
              />
            </div>
          </div>

          <div className='form-group full-width'>
            <label htmlFor='address'>Street Address *</label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder='123 Main Street, Apt 4B'
            />
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='city'>City *</label>
              <input
                type='text'
                id='city'
                name='city'
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder='Your city'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='state'>State/Province *</label>
              <input
                type='text'
                id='state'
                name='state'
                value={formData.state}
                onChange={handleInputChange}
                required
                placeholder='State or Province'
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='zipCode'>ZIP/Postal Code *</label>
              <input
                type='text'
                id='zipCode'
                name='zipCode'
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                placeholder='12345'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='country'>Country *</label>
              <input
                type='text'
                id='country'
                name='country'
                value={formData.country}
                onChange={handleInputChange}
                required
                placeholder='United States'
              />
            </div>
          </div>

          <div className='form-group full-width'>
            <label htmlFor='additionalNotes'>Additional Notes</label>
            <textarea
              id='additionalNotes'
              name='additionalNotes'
              value={formData.additionalNotes}
              onChange={handleInputChange}
              rows='3'
              placeholder='Any special delivery instructions or additional information...'
            />
          </div>

          <button type='submit' className='submit-btn'>
            Submit Address Information
          </button>
        </form>
      </div>
    </div>
  );
}