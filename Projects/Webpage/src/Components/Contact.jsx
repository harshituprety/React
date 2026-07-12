import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="m-3">
        <div>
          <label htmlFor="">Enter your name:</label>
          <input
            type="text"
            placeholder="John Doe"
            onChange={handleInput}
            className="border-2 p-1 rounded-sm ml-3"
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Enter your age:</label>
          <input
            type="number"
            placeholder="123456789"
            onChange={handleAge}
            className="border-2 p-1 rounded-sm ml-3"
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Enter your email:</label>
          <input
            type="e-mail"
            placeholder="user@email.com"
            onChange={handleEmail}
            className="border-2 p-1 rounded-md ml-3"
          />
          <br />
        </div>
        <input
          type="submit"
          className="bg-green-100 w-18 sticky rounded-md h-9 cursor-pointer  border-gray-200 m-4 hover:scale-110 hover:bg-amber-100 transition delay-150 duration-300 ease-in-out hover:translate-y-1"
        />
      </form>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </>
  );
};

export default Contact;
