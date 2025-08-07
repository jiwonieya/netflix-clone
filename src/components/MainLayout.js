import logo from "../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
    const location = useLocation();
    const isLogin = location.pathname !== '/login';
    return (
        <div className="main-wrap main-font">
            <header>
                <Link to="/">
                    <img className="logo-img" src={logo} alt="Netflix Logo Image" />
                </Link>
                {isLogin && (
                    <div className="lang">
                        <select defaultValue="ko" name="lang-select">
                            <option value="ko">한국어</option>
                            <option value="en">English</option>
                        </select>
                        <Link to="login">
                            <button>로그인</button>
                        </Link>
                    </div>
                )
                }
            </header>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;