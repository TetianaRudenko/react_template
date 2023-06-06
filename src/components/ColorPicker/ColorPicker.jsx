import { useState } from "react";
import { Container, Heading, Option, ActiveOption } from "./ColorPicker.styled";


const ColorPicker = ({options}) => {

  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  

  const makeOptionClassName = index => {
     return index === activeOptionIdx
       ? ActiveOption
       : Option;
  };
  
  const { label } = options[activeOptionIdx];

  return (
    <Container>
      <Heading>Color Picker</Heading>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            //className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </Container>
  );
}

export { ColorPicker };
  
  
// class OldColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     return index === this.state.activeOptionIdx
//       ? styles.activeOption
//       : styles.option;
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               aria-label={label}
//               className={this.makeOptionClassName(index)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }