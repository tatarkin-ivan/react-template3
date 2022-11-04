import React from "react";
import s from "./Navigate.module.css";

function Navigate(){
    return(
        <div>
            <div className={s.AllComponent}>
                <div className={s.Logo}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>React</div>
                <div className={s.Ava}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
            </div>
        </div>
    );
};

export default Navigate;