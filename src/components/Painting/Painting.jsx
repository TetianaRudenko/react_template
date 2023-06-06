
import PropTypes from "prop-types";
import defaultImg from './default-image.jpg'


// 1 створити 1 компонент з розміткою
// 2 прописати пропси 
// 2,1 продумати дефолтні значення і їх вказати = це задача компонента вказати свої деф.значення якщо не передадуть
// 3 прописати проп-типи
// 4 зарендирити в Арр - подивитись

export default function Painting(props) {
      console.log(props)
      const {
        imageUrl = defaultImg,
        title,
        profileUrl,
        authorName = 'Anonimous',
        price, 
        quantity
      } = props; // деструктуризація перед ретьорном або в сигнатурі (арг props F)
        return (
          <div>
            {/* <img src={imageUrl ?? defaultImg} alt={title} width="320 " /> */}
            <img src={imageUrl} alt={title} width="320 " />
            <h2>{ title}</h2>
            <p>
              Автор: <a href={profileUrl}>{ authorName}</a>
            </p>
            <p>Ціна: { price } кредитів </p>
            <p>Доступність: {quantity < 8 ? 'закінчується' : 'в наявності'}</p>
            <button type="button">Додати до кошику</button>
          </div>
        );
}
      
Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}