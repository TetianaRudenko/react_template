//import {  Route } from 'react-router-dom';
//import AppBar from './components/AppBar/AppBar';
//import { Counter } from "../components/Counter/Counter";
//import { SignupForm } from "../components/SignupForm/SignupForm";
//import { ColorPicker } from "../components/ColorPicker/ColorPicker";

//import Painting from "../components/Painting/Painting";
import paintings from "paintings.json";
import PaintingGallery from "../components/PaintingGallery/PaintingGallery";
import Section from "./Section";


/* const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
]; */

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

const App = () =>  {
  return (
    <div style={containerStyles}>

      {/* //  === 4 === Section */}
      <Section title="Top"> 

      {/* // === 3 === коли створили окремий компонент PaintingGallery ш рендеримо його в Арр*/}
      <PaintingGallery items={paintings} />
      </Section>

      <Section />
      {/* // === 2 === створюємо колекцію */}
      {/* {paintings.map(painting => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          profileUrl={painting.author.url}
          authorName={painting.author.tag}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */}

      {/*  // === 1 === до створення колекції  */}
      {/* //// 4 зарендирити в Арр - подивитись */}
      {/* <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        profileUrl={paintings[0].author.url}
        authorName={paintings[0].author.tag}
        price={paintings[0].price}
        quantity= {paintings[0].quantity}
      />
      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        profileUrl={paintings[1].author.url}
        authorName={paintings[1].author.tag}
        price={paintings[1].price}
        quantity= {paintings[1].quantity}
      />
      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        profileUrl={paintings[2].author.url}
        authorName={paintings[2].author.tag}
        price={paintings[2].price}
        quantity= {paintings[2].quantity}
      /> */}
      {/* <AppBar /> */}

   {/*    <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route> */}

       {/*  <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions} />
        </Route> */}

      
    {/*   <ColorPicker options={ colorPickerOptions } /> */}
       {/* <SignupForm /> */}
        {/* <Counter />  */}
       {/*  <Route path="/counter">
          <Counter />
        </Route> */}

      {/*   <Route path="/clock">
          <Clock />
        </Route>

        <Route path="/pokemon">
          <PokemonView />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;