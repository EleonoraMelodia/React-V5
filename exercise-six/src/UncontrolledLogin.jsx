export function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.password.value;
    const password = event.target.elements.namedItem("password").value;
    const checkbox = event.target.remember.checked;
    const data = {
      username,
      password,
      checkbox,
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
//Yes, there exists other API's to access the values of my form, such as using the costructor method on the FormData API, 
//so creating a new object and accessing its values.
//there are also some shortcuts of the standard API, but not all browsers supports them.
