import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return  <div className={sideDrawerClass.join("")}>SideDrawer</div>;
};

export default SideDrawer;