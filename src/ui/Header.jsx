import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizaa Co.</Link>
      <SearchOrder />
      <p>Your favorite pizza delivery service</p>
    </header>
  );
}

export default Header;
