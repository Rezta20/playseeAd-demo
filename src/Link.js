function Link(props) {
  return (
    <a
      className="App-link"
      href={props.website}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </a>
  );
}

export default Link;
