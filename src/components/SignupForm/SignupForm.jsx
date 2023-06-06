import { Form, Label } from "./SignupForm.styled";
import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleEmailChange = e => {
  //   setEmail(e.target.value)
  // }
  // const handlePasswordChange = e => {
  //   setPassword(e.target.value)
  // }
  
  //або через switch зробити одну ф-цію handleChange
  // const { name , value } = e.target => атрибут name з інпута => передаємо в switch

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log(email, password);
  }
  
  return (
     <Form autoComplete="off" onSubmit={handleSubmit}>
         <Label>
           <span>Почта</span>
           <input
             type="email"
             name="email"
             //onChange={handleEmailChange}
             onChange={handleChange}
             value={email}
           />
         </Label>
        <Label>
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            //onChange={handlePasswordChange}
            onChange={handleChange}
            value={password}
          />
        </Label>

        <button type="submit">Зарегистрироваться</button>
       </Form>
  )
}


export { SignupForm }


// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }