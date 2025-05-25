import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    position: 'Oracle HCM Senior Consultant – Advanced Modules',
    currentCompany: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    relocate: 'No',
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to an API
    console.log(formData);
    alert('Application Submitted!');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Apply For Job</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="font-semibold">Full Name*</label>
          <input 
            type="text" 
            name="fullName" 
            id="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">Email*</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mobile" className="font-semibold">Mobile*</label>
          <input 
            type="tel" 
            name="mobile" 
            id="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="position" className="font-semibold">Position Applied*</label>
          <select 
            name="position" 
            id="position" 
            value={formData.position} 
            onChange={handleChange} 
            className="border p-2 rounded mt-1"
          >
            <option>Oracle HCM Senior Consultant – Advanced Modules</option>
            {/* You can add more options if needed */}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="currentCompany" className="font-semibold">Current Company*</label>
          <input 
            type="text" 
            name="currentCompany" 
            id="currentCompany" 
            value={formData.currentCompany} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="currentCTC" className="font-semibold">Current Annual CTC (in lacs)*</label>
          <input 
            type="text" 
            name="currentCTC" 
            id="currentCTC" 
            value={formData.currentCTC} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="expectedCTC" className="font-semibold">Expected Annual CTC (in lacs)*</label>
          <input 
            type="text" 
            name="expectedCTC" 
            id="expectedCTC" 
            value={formData.expectedCTC} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="noticePeriod" className="font-semibold">Notice Period*</label>
          <select 
            name="noticePeriod" 
            id="noticePeriod" 
            value={formData.noticePeriod} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          >
            <option value="">Select</option>
            <option>Immediate</option>
            <option>15 Days</option>
            <option>1 Month</option>
            <option>More than 1 Month</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="relocate" className="font-semibold">Are you willing to relocate?*</label>
          <select 
            name="relocate" 
            id="relocate" 
            value={formData.relocate} 
            onChange={handleChange} 
            required 
            className="border p-2 rounded mt-1"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="resume" className="font-semibold">Attach Resume*</label>
          <input 
            type="file" 
            name="resume" 
            id="resume" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange} 
            required 
            className="border p-2 rounded mt-1"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Apply;
