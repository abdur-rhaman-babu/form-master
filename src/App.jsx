import './App.css'
const App = () => {
  const handleSubmitForm = e =>{
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.phone.value)
  }
  return (
    <div className="form-container">
          <form onSubmit={handleSubmitForm}>
              <input type="text" name="name" /><br />
              <input type="email" name="email" /><br />
              <input type="number" name="phone" /><br />
              <input type="submit" value="submit" />
          </form>
    </div>
  );
};

export default App;