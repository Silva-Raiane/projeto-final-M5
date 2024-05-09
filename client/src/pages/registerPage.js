import "../App.css"
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function register(ev) {
        ev.preventDefault();
    
        try {
          const response = await axios.post('https://projeto-final-m5-15w5.onrender.com/register-user', {
            username,
            email,
            password
          }, {
            headers: {
              'Content-Type': '	application/json'
            }
          });
          if (response.status === 201) {
            const { token } = response.data;
            alert('Registration successful');
            localStorage.setItem("token", token);
          } else {
            alert('Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error.response ? error.response.data : error);
          alert('Error during registration');
        }
      }
      return(

        <div className="page">
            <form method="POST" className="formRegister" onSubmit={register}>
                <h1>Register</h1>
                <p>Enter your access details in the field below.</p>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username" autoFocus={true} value={username} onChange={(ev) => setUsername(ev.target.value)} autoComplete="username" />
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="Enter your email" autoFocus={true} value={email} onChange={(ev) => setEmail(ev.target.value)} autoComplete="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(ev) => setPassword(ev.target.value)} autoComplete="new-password" />
                <input type="submit" value="Register" className="btn" />
            </form>
        </div>
    );
}
// return(
    
//     <div class="page">
//         <form method="POST" class="formRegister">
//             <h1>Register</h1>
//             <p>Enter your access details in the field below.</p>
//             <label for="username">User Name</label>
//             <input type="text" placeholder="Digite seu e-mail" autofocus="true" />
//             <label for="email">E-mail</label>
//             <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
//             <label for="password">Password</label>
//             <input type="password" placeholder="Digite seu e-mail" />
            
//             <input type="submit" value="Register" class="btn" />
//         </form>
//     </div>
// );
// }