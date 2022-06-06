import '../../css/pages/App.scss'
import '../../css/index.scss'

function Logout() {
    sessionStorage.clear();
    window.location.href = "/";
    return (
        <div/>
    )
}

export default Logout;
