import { LuPopcorn } from "react-icons/lu";

const DetailBar = () => {
    return (
            <div className="detail-bar">
                <LuPopcorn className="detail-icon" />
                <div className="detail-txt">
                    <p>7,000원이면 만날 수 있는 넷플릭스.<br />
                        가장 경제적인 광고형 멤버십을 이용해 보세요.</p>
                    <button>자세히 알아보기</button>
                </div>
            </div>
    );
};

export default DetailBar;