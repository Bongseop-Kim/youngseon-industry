import { Link } from "react-router-dom";
import logo from "../image/BlackLOGO.png";

export default function Gnb() {
  // const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex justify-between px-28 pt-7 pb-2.5 items-center">
      <Link to="/" className="flex items-center">
        <div className="pr-2.5">
          <img src={logo} alt="logo" />
        </div>
        <span className="text-lg font-semibold">영 선 산 업</span>
      </Link>
      <div className="flex">
        <Link to="/design" className="px-5">
          <span>디자인</span>
        </Link>
        <Link to="/map" className="px-5">
          <span>오시는 길</span>
        </Link>
        <Link to="/equipment" className="px-5">
          <span>포트폴리오</span>
        </Link>
        <Link to="/contact" className="px-5">
          <span>견적 문의</span>
        </Link>
      </div>
    </div>
  );
}
