import {Link} from "react-router-dom";
import App from "../../App.tsx";

function SampleMenu() {
    return (
        <>
            <App></App>
            <div className="flex m-3 text-3xl content-center justify-center bg-green-600 gap-3">
                <div>
                    <Link to={'/'}>MAIN</Link>
                </div>
                <div>
                    <Link to={'/about'}>ABOUT</Link>
                </div>
                <div>
                    <Link to={'/member/login'}>LOGIN</Link>
                </div>
            </div>
        </>
    );
}

export default SampleMenu;