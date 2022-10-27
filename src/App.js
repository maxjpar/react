import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Body from './components/Body';

export default function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"ATIMOV FRUTOS"}/>
      <Body />
      <Footer/>
      
    </>
  )}
