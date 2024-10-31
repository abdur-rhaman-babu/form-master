import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    useEffect(()=>{
        nameRef.current.focus()
    },[])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef}  type="text" name="name" />
        <br />
        <input ref={emailRef} defaultValue={'siyam@gmail.com'} type="email" name="email" />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefForm;
