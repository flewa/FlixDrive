import React, { useEffect } from 'react';
import '../../css/components/header.scss'
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import { gapi } from 'gapi-script';

const HeaderInfo = () => {

    const money = '0$'
    const GoogleClientID = "275499235587-5pehrk2ogbodc6fbs16hbmmvkk8soi3d.apps.googleusercontent.com"

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: GoogleClientID,
            scope: 'email',
            cookiepolicy: "single_host_origin",
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);

    const onSuccess = googleUser => {
        console.log('SUCCESS', googleUser);
        var profile = googleUser.getBasicProfile();
        sessionStorage.setItem('GoogleUser',JSON.stringify(profile));
        window.location.reload(false);
    };

    const onFailure = response => {
        console.log('FAILED', response);
    };

    const checkIfLoggedIn = () =>{
        return (sessionStorage.getItem('GoogleUser') != null)
    }

    return (
        <div className='headerbar'>
            <div className="left">
                <div className="left-items" onClick={()=>document.location="/"} id='logo'></div>
                <div className="left-items">Your money : {money}</div>
            </div>
            <div className="right">
                <div className="right-items" onClick={()=>document.location="/dashboard"} >⛩ Dashboard</div>
                <div className="right-items" onClick={()=>document.location="/price"} >💰 Price</div>
                {checkIfLoggedIn() ? 
                    (<div className="right-items" title='Logout' onClick={()=>document.location="/logout"} >{JSON.parse(sessionStorage.getItem('GoogleUser')).rV}</div>) 
                    :
                    (<GoogleLogin
                        id="LoginButton"
                        render={renderProps => (<div className="right-items" onClick={renderProps.onClick} >🦄 Login</div>)}                      
                        clientId={GoogleClientID}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                    />)
                }

            </div>
        </div>
    );
};

export default HeaderInfo;
