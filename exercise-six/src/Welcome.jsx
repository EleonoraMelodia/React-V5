export function Welcome({ name = " unknow person " }) {
  return <p> Welcome, {name}! </p>;
}

/* It happens that the name is not rendered. If I set a default value this will be rendered, in case the name is missing in the parent file.  */
