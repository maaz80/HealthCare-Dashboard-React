import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userFile, setUserFile] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedUserAge = localStorage.getItem('userAge');
    const storedUserFile = localStorage.getItem('uploadedFile');

    if (storedUserName) setUserName(storedUserName);
    if (storedUserAge) setUserAge(storedUserAge);
    if (storedUserFile) setUserFile(storedUserFile);
  }, []);

  // menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-700 text-white shadow-lg py-2 mb-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        {/* User Name */}
        <div className="text-3xl font-semibold tracking-wide text-white flex items-center gap-3">
        <img src={userFile} alt="" className='w-10 h-10 rounded-full border-emerald-900 object-cover object-top'/>
          <div>{userName || 'User'} </div>
        </div>

        {/*  Navigation */}
        <ul className="hidden lg:flex space-x-10">
          <li className="hover:bg-emerald-800 p-3 rounded-md transition duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-emerald-800 p-3 rounded-md transition duration-300">
            <a href="/">Age: {userAge}</a>
          </li>
          <li className="hover:bg-emerald-800 p-3 rounded-md transition duration-300">
            <a href="https://latestport.netlify.app">Portfolio</a>
          </li>
        </ul>

        {/*  Menu Button mobile */}
        <div className="lg:hidden flex items-center">
      <button onClick={handleMenuToggle} className="text-white p-3">
        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>
    </div>
      </div>

      {/*  Navigation MOBile*/}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-emerald-600 p-6`}>
        <ul className="space-y-6">
          <li>
            <a href="/" className="block p-4 text-white hover:bg-emerald-700 rounded-md transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="block p-4 text-white hover:bg-emerald-700 rounded-md transition duration-300">
              Age: {userAge}
            </a>
          </li>
          <li>
            <a href="https://latestport.netlify.app" className="block p-4 text-white hover:bg-emerald-700 rounded-md transition duration-300">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
