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
          const response = await axios.post('http://localhost:8001/api/register-user', {
            username,
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          if (response.status === 200) {
            alert('Registration successful');
          } else {
            alert('Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
          alert('Error during registration');
        }
      }
    return(
    
        <div class="page">
            <form method="POST" class="formRegister" onSubmit={register}>
                <h1>Register</h1>
                <p>Enter your access details in the field below.</p>
                <label for="username">User Name</label>
                <input type="text" placeholder="Digite seu e-mail" autofocus="true" value={username} onChange={(ev) => setUsername(ev.target.value)} />
                <label for="email">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" autofocus="true" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                <label for="password">Password</label>
                <input type="password" placeholder="Digite seu e-mail" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                
                <input type="submit" value="Register" class="btn" />
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