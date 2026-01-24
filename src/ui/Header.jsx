import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast React Pizaa Co.</Link>
      <SearchOrder />
      <p>Your favorite pizza delivery service</p>
    </div>
  );
}

export default Header;
