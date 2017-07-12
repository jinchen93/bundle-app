export const redirectTo = (path, props) => {
  if (props.location.pathname !== path) {
    props.history.push(path);
  }
};
