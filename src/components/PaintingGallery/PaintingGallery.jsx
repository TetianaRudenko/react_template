import PropTypes from "prop-types";
import Painting from "components/Painting/Painting";

// в проп приходить всі картки  , дані - деструктурую ({items})
// items.map()
const PaintingGallery = ({ items }) => {
  return (
    <ul>
    {items.map(item => (
      <li key={item.id}>
       
        <Painting
          
          imageUrl={item.url}
          title={item.title}
          profileUrl={item.author.url}
          authorName={item.author.tag}
          price={item.price}
          quantity={item.quantity}
        />
      </li>
    ))}
  </ul>
  )
  
}

PaintingGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }))
}

export default PaintingGallery;