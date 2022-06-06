import React from 'react';
import '../../css/components/header.scss'

const HeaderInfo = () => {

    const money = '0$'
    return (
        <div className='headerbar'>
            <div className="left">
                <div className="left-items" onClick={()=>document.location="/"} id='logo'></div>
                <div className="left-items">Your money : {money}</div>
            </div>
            <div className="right">
                <div className="right-items" onClick={()=>document.location="/dashboard"} >Dashboard</div>
                <div className="right-items" onClick={()=>document.location="/price"}>Price</div>
            </div>
        </div>
    );
};

export default HeaderInfo;