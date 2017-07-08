export const redirectToRoot = props => {
  if (props.location.pathname !== "/") {
    props.history.push("/");
  }
};
