import "./src/index.css"

export function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      checkbox: formData.get("remember") === "on" ? true : false,
    };
    console.log(data);
  }

  return (
    <div className="bg-red">
      <form action="#" onSubmit={handleFormSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="remember" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
