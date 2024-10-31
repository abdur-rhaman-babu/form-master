import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("siyam al hasan");
  const [email, setEmail] = useState("siyam@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6){
        setError('password must be above of 6 chracter')
    }else{
        setError('')
        console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" />
        <br />
        <input value={email} onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input value={password} onChange={handlePasswordChange} type="number" name="phone" />
        {
            error && <h3>{error}</h3>
        }
        <br />
        <input onChange={handlePasswordChange} type="submit" value="submit" />
      </form>
      
    </div>
  );
};

export default StateFullForm;
