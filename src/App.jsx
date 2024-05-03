import { BrowserRouter } from 'react-router-dom';
// Import the Contact component from its file
//import ContactMe  from 'ContactMe.jsx';

// Export the Contact component as ContactMe
//export const ContactMe = ContactMe;
// import { ContactMe } from './components'; // Adjust the path as needed



import {
  About,
  // Contact,
  ContactMe,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Journal_Papers
 
  
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />
        <Journal_Papers />
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        
        <div className="relative z-0">
          <ContactMe />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
