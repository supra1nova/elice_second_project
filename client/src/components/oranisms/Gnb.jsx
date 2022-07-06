import { Link } from "react-router-dom";

export const Gnb = () => {
    return (
        <>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/myPage">Mypage</Link>
            </button>
        </>
    );
};
