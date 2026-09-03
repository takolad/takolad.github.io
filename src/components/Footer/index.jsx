import "./style.css";

function Footer() {
  return (
    <footer className="fixed-bottom footer">
      &copy; Copyright {new Date().getFullYear()} John Hinojosa
    </footer>
  );
}

export default Footer;
