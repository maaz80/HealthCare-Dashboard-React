import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  // Fetching FRom Local
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedAge = localStorage.getItem('userAge');
    const savedFile = localStorage.getItem('uploadedFile');

    if (savedName) setUserName(savedName);
    if (savedAge) setUserAge(savedAge);
    if (savedFile) setUploadedFile(savedFile);
  }, []);

  // Form Submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Saving Data
    localStorage.setItem('userName', userName);
    localStorage.setItem('userAge', userAge);

    if (uploadedFile) {
      localStorage.setItem('uploadedFile', uploadedFile); 
    }
    alert('Form successfully submitted!');
    window.location.reload()
  };

  // FIle Upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const base64String = reader.result;
        setUploadedFile(base64String);
        localStorage.setItem('uploadedFile', base64String); // Store the Base64 string
      };
      
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="min-w-[97%] md:min-w-[440px]  max-w-[98%] md:max-w-[800px] mx-auto p-6 bg-gray-100 rounded-xl shadow-xl space-y-6 flex items-center justify-center flex-col md:flex-row">
      <div className=''>
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-8">User Information</h1>
      <form onSubmit={handleFormSubmit} className="space-y-5 w-[100%]">
        
        {/* Name  */}
        <div className="flex flex-col">
          <label htmlFor="userName" className="text-gray-800 font-medium">Your Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 border-gray-300 px-2 md:px-3 py-3 md:py-3 p-0 md:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age  */}
        <div className="flex flex-col">
          <label htmlFor="userAge" className="text-gray-800 font-medium">Select Age</label>
          <select
            id="userAge"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            className="border-2 border-gray-300 px-2 md:px-3 py-3 md:py-3 p-0 md:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Choose your age</option>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>

        {/* File Upload */}
        <div className="flex flex-col">
          <label htmlFor="uploadedFile" className="text-gray-800 font-medium">Upload a Document</label>
          <input
            type="file"
            id="uploadedFile"
            accept="image/*"
            onChange={handleFileUpload} 
            className="border-2 border-gray-300 px-2 md:px-3 py-3 md:py-3 p-0 md:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-emerald-600 text-white w-full py-2 px-8 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Submit Form
          </button>
        </div>
      </form>
      </div>
      
       {uploadedFile && (
          <div className="mt-4 w-96 p-4">
            <img src={uploadedFile} alt="Uploaded" className="object-cover object-top w-full rounded-md h-[400px] shadow-md shadow-gray-400" />
          </div>
        )}
    </div>
  );
};

export default UserForm;
