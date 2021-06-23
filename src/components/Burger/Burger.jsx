import "./Burger.css";
const Burger = ({ status }) => {
  return (
    <div className="burger">
      <div className={`${status ? "line1act" : ""}`}></div>
      <div className={`${status ? "line2act" : ""}`}></div>
      <div className={`${status ? "line3act" : ""}`}></div>
    </div>
  );
};

export default Burger;
