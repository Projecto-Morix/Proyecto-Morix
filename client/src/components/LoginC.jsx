import {Axios} from '../backend';
import React ,{useState, useEffect} from 'react';
import { useNavigate , Link, } from 'react-router-dom';
import { useUserContext } from '../components/UserContext';
function LoginC() {
    const navigate = useNavigate();
    const [Guide, SetGuide] = useState(() => { return { status: false, msg: 'Ingrese con su E-Mail y contraseña', style: { color: 'black' } } });
    const [User, SetUser] = useUserContext();
useEffect(() => {
    if (document.cookie.includes('token'))  {
        SetUser({token: document.cookie.replace('token=',''), auth: true, UserData:{ Nombre: 'Juan'}});
            navigate('/');
        }else console.log(document.cookie);
});
   
    const LogIn= async()=>{
    const Email = User.UserData.Email, password = User.UserData.password;
    try{

        const res = await Axios.post('/login', { Email, password })
        if (res.status===200) {
            SetUser(res.data);
            document.cookie = `token=${res.data.token} ; max-age=${60 * 60}; path=/; samesite=strict`;
            navigate('/');
        }else{
            SetGuide({status: true, msg: res.data.err, style: { color: 'red' }});
        }
    }catch (err){
        SetGuide({status: true, msg: err.response.data.err, style: { color: 'red' }});
    }
    }
    
return (<form action="">
    <label htmlFor="email">E-Mail</label>
    <input type="email" id="email" onChange={(e)=>{SetUser({...User, UserData:{...User.UserData, Email: e.target.value}})}} placeholder='your@email.com'/>
    <label htmlFor="password">Contraseña</label>
    <input type="password" id='password' onChange={(e)=>{SetUser({...User, UserData:{...User.UserData, password: e.target.value}})}} />
    
    <input type="submit" value="Iniciar Sesion" onClick={
        (e) => {
            e.preventDefault();
           LogIn();
        }
    }/>
    <p style={Guide.style}>{Guide.msg}</p>
    <Link to='/forgot'>Olvide mi contraseña</Link>
    <Link to='/signin'>Registrarme</Link>
</form>)
}
export default LoginC;
/*const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  if (!EmailRegex.test(Email)) {
    SetGuide({ status: false,msg:'Please enter a valid email', style: {color: 'red'}});
    return;
  }
  const PaswRegex = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm;
  if (!PaswRegex.test(Pass)) {
    SetGuide({ status: false,msg:'Please enter a valid password! It should contain 1 upper, 1 lower case letter and 1 number.', style: {color: 'red'}});
    return;
  }/ */