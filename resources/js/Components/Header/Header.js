import React, {useState} from "react";
import Button1 from "../Button1/Button1";
import InLink from "../InLink";
import "./Header.css";
import {useLocation} from "react-router-dom";
import {locale_route} from "../../Pages/Helpers/locale_route";
import {usePage} from '@inertiajs/inertia-react'
import {Link} from '@inertiajs/inertia-react'


const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const {url, component} = usePage()

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const {pathname} = useLocation();

    let white = false;
    if (
        pathname ===  "/services/virtualization" ||
        pathname ===  "/contact" ||
        pathname === "/services/security"
    ) {
        white = true;
    }
    return (
        <>
            <div className={white ? "header light" : "header"}>
                <div className="flex wrapper">
                    <Link href='/'>
                        <img
                            src={
                                white ? "/images/logo/main-light.svg" : "/images/logo/main.svg"
                            }
                            alt=""
                        />
                    </Link>
                    <div className={showNavbar ? "navbar flex show" : "navbar flex"}>
                        <div className="nav_item">
                            <Link href='/'>Главная</Link>
                        </div>
                        <div className="nav_item">
                            Kомпания
                            <div className="dropdown">
                                <InLink text="о нас" href='/company/about-us'/>
                                <InLink text="Портфолио" href='/company/projects'/>
                                <InLink text="FAQ" href='/company/faq'/>
                            </div>
                        </div>
                        <div className="nav_item">
                            Сервисы
                            <div className="dropdown">
                                <InLink text="Планировка" href='/services/planning'/>
                                <InLink text="Веб Разработки" href='/services/web-development'/>
                                <InLink text="UI/UX Дизайн" href='/services/design'/>
                                <InLink text="Виртуализация" href='/services/virtualization'/>
                                <InLink text="Удалённая Работа" href='/services/remote-work'/>
                                <InLink text="Сетевая Безопасность" href='/services/security'/>
                                <InLink text="Calculator" href='/services/calculator'/>
                            </div>
                        </div>
                        <div className="nav_item">
                            <Link href="/cdn">CDN</Link>
                        </div>
                        <div className="nav_item">
                            Работайте с Нами
                            <div className="dropdown">
                                <InLink text="Вакансии" href="/vacancies"/>
                                <InLink text="Новости и События" href="/news"/>
                            </div>
                        </div>
                        <div className="nav_item">
                            <Link href="/blogs">Блог</Link>
                        </div>
                        <div className="nav_item">
                            <Link href="/contact">Контакт</Link>
                        </div>
                        <Button1/>
                    </div>
                    <button
                        onClick={() => toggleNavbar()}
                        className={showNavbar ? "nav_menu clicked" : "nav_menu"}
                    ></button>
                </div>
            </div>
            <div
                onClick={() => toggleNavbar()}
                className={showNavbar ? "background shown" : "background"}
            ></div>
        </>
    );
};

export default Header;
