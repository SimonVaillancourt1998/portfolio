import Header from './components/Header';
import AboutMe from './components/AboutMePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const handleAboutMeClick = () => {
    console.log('About me clicked!');
    // Add your logic here for the "About me" button click.
  };

  const handleLinksClick = () => {
    console.log('Links clicked!');
    // Add your logic here for the "Links" button click.
  };

  return (
    <div className="App">
      <Header onAboutMeClick={handleAboutMeClick} onLinksClick={handleLinksClick}/>
      <AboutMe/>
    </div>
  );
}

export default App;
