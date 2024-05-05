const Exponent = ({ number, exponent }) => {
  let repeatedElm = [];

  for (let i = 0; i < exponent; i++) {
    if (i === exponent - 1) {
      repeatedElm.push(<span>{number}</span>);
      break;
    }
    repeatedElm.push(<span>{number} *</span>);
  }

  return (
    <div>
      <p>
        {" "}
        {repeatedElm} = {Math.pow(number, exponent)}
      </p>
    </div>
  );
};

export default Exponent;
