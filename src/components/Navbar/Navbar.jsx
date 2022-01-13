import styles from "./Navbar.module.css";
import Button from "../Buttons/Buttons";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <span>Blog Website</span>
      </div>
      <div>
        {NavbarList.map(({ name, path }, idx) => (
          <Button size="largeBtn" key={idx}>
            {name}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
