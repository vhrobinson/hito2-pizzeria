import React, { useState } from 'react';
function Register() {
  
    const [password, setPassword] = useState('');
    const [rPassword, setrPassword] = useState('');
    
  
    const validarPassword = () => {
      if (password.length >= 6 & rPassword === password) {
        alert("Contraseña aceptada.");
      } else {
        alert("La contraseña debe tener al menos 6 caracteres y deben ser iguales.");
      }
    };
  
    return (
  
        <form  className="max-w-sm mx-auto">
          <h1 className="text-3xl">Login </h1>
            <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
                 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black
                ">Password</label>
          <input type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
                 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label for="rpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black
                ">Repeat Password</label>
          <input type="password" id="rpassword" value={rPassword}
            onChange={(e) => setrPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
                 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            
         
            <button onClick={validarPassword} type="submit" className="text-black
             bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            
        </form>
  
    );
  };
    
    export default Register