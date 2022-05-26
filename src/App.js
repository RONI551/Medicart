
import './App.css';

import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
//import ImgageSlider from './Components/Carousel/ImgageSlider';
//import { Sliderpicture } from './Components/Carousel/SliderData';





function App() {
  return (
    <div>
    <BrowserRouter>
    <Header></Header>
    
    <Switch>
    
    <Route exact path="/"><Home></Home></Route>
    <Route path="/"><Login></Login> </Route>
    </Switch>
    
    </BrowserRouter>
    
  
     
    </div>
  );
}

export default App;
