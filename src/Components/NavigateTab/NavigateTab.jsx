import React from "react";
import s from "./NavigateTab.module.css";

function NavigateTab(){
    return(
        <div className={s.ComponentNavigateTab}>
            <div className={s.Links}>
                <a href="#">Моя страница</a>
                <a href="#">Новости</a>
                <a href="#">Друзья</a>
                <a href="#">Сообщения</a>
                <a href="#">Сообщества</a>
            </div>
        </div>
    );
};

export default NavigateTab;