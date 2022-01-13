import "./styles.css";

const Button = ({ style, size, children }) => {
  const buttonStyle = ["primaryBtn", "secondaryBtn"];
  const buttonSize = ["smallBtn", "mediumBtn", "largeBtn"];
  const styleType = buttonStyle.includes(style) ? style : "defaultBtnStyle";
  const sizeType = buttonSize.includes(size) ? size : "defaultBtnSize";
  return <button className={`btn ${styleType} ${sizeType}`}>{children}</button>;
};

export default Button;

/*
.primary-class
<Button style={"secondaryBtn"}>Submit</Button>
black background , white font
 */
