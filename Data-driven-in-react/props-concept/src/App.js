import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import whiskerson from './images/mr-whiskerson.jpeg';
import pumkin from './images/Pumpkin.jpeg';
import fluffykins from './images/Fluffykins.jpeg';
import felix from './images/Felix.jpeg';
function App() {
  return (
    <>
    <div className="contacts">
      <Contact img={whiskerson} name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow" />
      <Contact img={fluffykins} name="Fluffykins" phone="(212) 555-2345" email="fluff@me.com" />
      <Contact img={felix} name="Felix" phone="(555) 010-1010" email="felix@cats.example" />
      <Contact img={pumkin} name="Pumpkin" phone="(0800) CAT KING" email="pumpkin@scrimba.com" />
    </div>
</>
  );
}

export default App;
