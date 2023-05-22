import { useState } from "react"
import'./AddUser.css'
import axios from "axios";

const AddUser: React.FC<{
       getAllUserAxios: () => void
}> = (
    {
        getAllUserAxios

    }
) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const AddNewUser = () => {
        const newUser = {
            email,
            password,
            id: Math.random(),
            date: new Date()
        }
        console.table(
            newUser
        )
        axios({
            method: 'post',
            url: 'http://localhost:3001/add',
            data: newUser
          }).then(
            res => {
                console.log(' add res' , res)
                getAllUserAxios()

            }
          ) .catch(err => {
            console.log('add err' , err)
          });
                  
        setEmail('');
        setEmail('')
     }

    return (
        <div>
            <div className="form-group">
                <h1>Add new User</h1>
                <label htmlFor="email">Email</label>

                <input
                    type="text"
                    id="email"
                    value={email} onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="password">password</label>
                  <input
                  id="password"
                    type="password"
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <button className="bt-add" onClick={AddNewUser}>Add</button>
            </div>

        </div>
    )
}
export default AddUser;