import { useState } from "react";

const Membership = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div className="membership">
            <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
            <div>
                <label className="email">
                    <input
                        type="email"
                        onFocus={() => { setFocus(true) }}
                        onBlur={(e) => {
                            if (e.target.value === '') setFocus(false)
                        }} />
                    <span className={focus ? 'focused' : ''}
                    >이메일 주소</span>
                </label>
                <button>시작하기 ＞</button>
            </div>
        </div>
    );
};

export default Membership;