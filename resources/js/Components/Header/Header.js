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
                            <Link href='/'>მთავარი</Link>
                        </div>
                        <div className="nav_item">
                            კომპანია
                            <div className="dropdown">
                                <InLink text="ჩვენს შესახებ" href='/company/about-us'/>
                                <InLink text="პორტფოლიო" href='/company/projects'/>
                                <InLink text="FAQ" href='/company/faq'/>
                            </div>
                        </div>
                        <div className="nav_item">
                            სერვისები
                            <div className="dropdown">
                                <InLink text="დაგეგმარება" href='/services/planning'/>
                                <InLink text="ვებ დეველოპმენტი" href='/services/web-development'/>
                                <InLink text="UI/UX დეველოპმენტი" href='/services/design'/>
                                <InLink text="ვირტუალიზაცია" href='/services/virtualization'/>
                                <InLink text="დისტანციური მუშაობა" href='/services/remote-work'/>
                                <InLink text="ქსელური უსაფრთხოება" href='/services/security'/>
                                <InLink text="კალკულატორი" href='/services/calculator'/>
                            </div>
                        </div>
                        <div className="nav_item">
                            <Link href="/cdn">CDN</Link>
                        </div>
                        <div className="nav_item">
                            ჩვენი კომპანია
                            <div className="dropdown">
                                <InLink text="ვაკანსიები" href="/vacancies"/>
                                <InLink text="სიახლეები" href="/news"/>
                            </div>
                        </div>
                        <div className="nav_item">
                            <Link href="/blogs">ბლოგი</Link>
                        </div>
                        <div className="nav_item">
                            <Link href="/contact">კონტაქტი</Link>
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
