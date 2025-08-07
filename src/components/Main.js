import { Link } from "react-router-dom";
import Membership from "./Membership";
import DetailBar from "./DetailBar";
import MovieList from "./MovieList";
import WhyJoin from "./WhyJoin";
import Faq from "./Faq";
const Main = () => {
    return (
        <main id="main">
            <div className="banner">
                <h1>영화, 시리즈 등을 무제한으로</h1>
                <p>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</p>
                <Membership />
            </div>
            <div className="curve-wrap">
                <div className="curve-circle"></div>
                <div className="gradient-line"></div>
            </div>
            <section>
                <DetailBar />
                <MovieList />
                <WhyJoin />
                <Faq />
            </section>
        </main>
    );
};

export default Main;