export default function Login({
  username,
  setUsername,
  password,
  setPassword,
  submit,
  setSubmit,
}) 
  const handleGetAccount = () => {
    const user = {
      username: username,
      password: password,
    };

    const userString = JSON.stringify(user);

    fetch("http://localhost:4005/sessions", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: userString,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  function handleGetAccount(){
  fetch("http://localhost:4005/sessions", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authrization:"Bearer" + myToken,
    },
  })

  return (
    <div>
      <h2>Login</h2>
      <label className="label">Username</label>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
          console.log(username);
        }}
        className="input"
        type="username"
      />

      <label className="label">Password</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
        className="input"
        type="password"
      />

      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
    </div>
  );
}
