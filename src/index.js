import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import './index.css';
//import ReactDOM from "react-dom";
//import paintings from "../src/paintings.json";


//всередині index.js ми рендеримо тільки APP, а в середині App - все решту
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );




//=========================================================
// React - це прошарок між кодом-JS  і DOM
//  містить методи для створення елементів і алгоритми, що переводить
// js код в елементи віртуального DOM (копія, в пам'яті)




// 2!! ===================     концепція React-компонентів
//         function Painting(props) {
//           console.log(props)
//           const { url, title, profileUrl, authorName, price } = props; // деструктуризація перед ретьорном або в сигнатурі (арг props F)
//           return (
//             <div>
//               <img src={url} alt={title} width="480" />
//               <h2>{ title}</h2>
//               <p>
//                 Автор: <a href={profileUrl}>{ authorName}</a>
//               </p>
//               <p>Ціна: { price } кредитів </p>
//               <p>Доступність: закінчується або в наявності</p>
//               <button type="button">Додати до кошику</button>
//             </div>
//           );
//         }
//      
//        const painting = paintings[2]
//      
//      
//      // Рендер КОМПОНЕНТА <з великої літери />
//      // з великої літери = ім'я змінної! бо все що з малої jsx сприймає як <тег/>
//      ReactDOM.render(<Painting
//        url={painting.url}
//        title={painting.title}
//        authorName={painting.author.tag}
//        profileUrl={painting.author.url}
//        price={painting.price}
//      />,
//      document.querySelector('#root'));

// =======================================================
//перевикористувується неможливо отр динамічно === потрібні компоненти!!
//компоненти - це функціональні або класові елементи
//тобто або функція  або клас

//  const data = paintings[0];
//  const data2 = paintings[1];

//jsx = одинарні теги мають закриватись слешем  />
//    якщо записати src="" - запише рядок як є
//    якщо записати src={} - запише вираз
//
//
//    const painting1 = (
//      <div>
//      <img src={data.url} alt={data.title} width="480" />
//        <h2>{data.title}</h2>
//        <p>
//          Автор: <a href={data.author.url}> {data.author.tag} </a>
//        </p>
//        <p>Ціна: { data.price} кредитів</p>
//      <p>Доступність: закінчується або є в наявності</p>
//      <button type="button">Добавить в корзину</button>
//    </div>
//    )
//    const painting2 = (
//      <div>
//      <img src={data2.url} alt={data2.title} width="480" />
//        <h2>{data2.title}</h2>
//        <p>
//          Автор: <a href={data2.author.url}> {data2.author.tag} </a>
//        </p>
//        <p>Ціна: { data2.price} кредитів</p>
//      <p>Доступність: закінчується або є в наявності</p>
//      <button type="button">Добавить в корзину</button>
//    </div>
//    )
//  
//  const els = (
//    <div>
//      {painting1}
//      {painting2}
//    </div>
//  )
//   ReactDOM.render(els, document.querySelector('#root'));






//====================================================
/* import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */







//==========================================================
/* import React from "react";
import ReactDOM  from "react-dom";


// 1 =============      концепція React-елементів
//  писати кожен елемент через createElement-(метод на Reactі)  незручно => тому придумали
// jsx -розширення (надстройка над js) XML - подібний синтаксис, що дозволяє
// писати декларативні шаблони
//як і в Яві є можл створити елемент так і реакті є
const element = React.createElement(
  'div',// ел = об'єкт
  {
    a: 2,
    b: 10,  //другим арг обєкт передали - що піде в пропси
    children: ["Привіт", ' ', "світ"],
  } //третій арг  піде в пропс в children
); 
console.log(element);//object важливі: keys\props\refs\type
ReactDOM.render(element, document.querySelector('#root'));//  render() */


//1.
/* key: null
props: {}  настройки нашого елемента 
ref: null
type: "div" */

//2
/* 
key: null
props: {a: 2, b: 10}//
ref: null
type: "div"
 */

//3
/* props:
{ a: 2, b: 10, 
  children: 'Привіт' } */
  

  //4 незручно все створювати руками, тому придумали синтаксис JSX ==xml подібний синтаксис
/* import React from "react";
import ReactDOM  from "react-dom";

//make new el
const elem1 = React.createElement('span', { children: "Hello" });
const elem2 = React.createElement('span', { children: 'world' });

const element = React.createElement(
  'div',
  {
    a: 2,
    b: 10,  
    children: [elem1, ' ', elem2],
  } 
); 
console.log(element);//object важливі: keys\props\refs\type
ReactDOM.render(element, document.querySelector('#root'));//  render() */

//5 JSx
//import React from "react";  // непотрібен для jsx
//import ReactDOM  from "react-dom";


//переписую на jsx
//const elem1 = React.createElement('span', { children: "Hello" });
//const jsxEl1 = <span> Привіт </span>;

//const elem2 = React.createElement('span', { children: 'world' });
//const jsxEl2 = <span> світ </span>

//  const element = React.createElement(
//    'div',
//    {
//      a: 2,
//      b: 10,  
//      children: 'Привіт світ',
//    } 
//  ); 

//jsx
// const jsxEl = (<div> 
//   {jsxEl1}   
//   {jsxEl2}
// </div>);
// console.log(jsxEl);//object важливі: keys\props\refs\type
//ReactDOM.render(element, document.querySelector('#root'))