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
    <form action="#" onSubmit={handleFormSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button>Login</button>
      <button>Reset</button>
    </form>
  );
}
// The advantage is that it summarizes the syntax.
// The disadvantage is that in the case of the checkbox the outcome is null in case of deselection,
// rather than false, so the ternary operator must be used to give the desired outcome
