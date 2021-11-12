import React from "react";
import Button1 from "../Button1/Button1";
import Map from "../Map";
import InLink from "../InLink";
import SocialMedia from "../SocialMedia";
import { Link } from "@inertiajs/inertia-react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <Link href="/" className="logo">
                    <img src="/images/logo/main.svg" alt="" />
                </Link>
                <div className="flex footer_content">
                    <div className="flex locations">
                        <div>
                            <div className="map">
                                <Map />
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/1.svg" alt="" />
                                <p>
                                    1604 Virginia Street. <br /> Moscow, Russia
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/2.svg" alt="" />
                                <p>0322 2 13 22 33</p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/3.svg" alt="" />
                                <p>hello@insite.com</p>
                            </div>
                        </div>
                        <div>
                            <div className="map">
                                <Map />
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/1.svg" alt="" />
                                <p>
                                    1604 Virginia Street. <br /> Tbilisi,
                                    Georgia
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/2.svg" alt="" />
                                <p>0322 2 13 22 33</p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/3.svg" alt="" />
                                <p>hello@insite.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex links">
                        <div className="column">
                            <Link href="/">
                                <div className="title">Главная</div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link href="/">
                                <div className="title">Kомпания</div>
                            </Link>
                            <InLink href="/company/about-us" text="о нас" />
                            <InLink href="/company/projects" text="Портфолио" />
                            <InLink href="/company/faq" text="FAQ" />
                        </div>
                        <div className="column" style={{ margin: 0 }}>
                            <Link href="/">
                                <div className="title">Сервисы</div>
                            </Link>
                            <InLink
                                href="/services/planning"
                                text="Планировка"
                            />
                            <InLink
                                href="/services/web-development"
                                text="Веб Разработки"
                            />
                            <InLink
                                href="/services/design"
                                text="UI/UX Дизайн"
                            />
                            <InLink
                                href="/services/virtualization"
                                text="Виртуализация"
                            />
                            <InLink
                                href="/services/remote-work"
                                text="Удалённая Работа"
                            />
                            <InLink
                                href="/services/security"
                                text="Сетевая Безопасность"
                            />
                        </div>
                        <div className="column">
                            <Link href="/">
                                <div className="title">Работайте с Нами</div>
                            </Link>
                            <InLink href="/vacancies" text="Вакансии" />
                            <InLink href="/news" text="Новости и События" />
                        </div>
                        <div className="column">
                            <Link href="/blogs">
                                <div className="title">Блог</div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link href="/contact">
                                <div className="title">Контакт</div>
                            </Link>
                        </div>
                        <Button1 />
                    </div>
                </div>
                <div className="footer_bottom flex">
                    <SocialMedia />
                    <div id="language_switcher">
                        <div className="main lang flex">
                            <span>Georgian</span>
                            <img src="/images/flags/ge.png" alt="" />
                        </div>
                        <div className="dropup">
                            <a href="#">
                                <div className=" lang flex">
                                    <span>English</span>
                                    <img src="/images/flags/en.png" alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div className="lang flex">
                                    <span>Russian</span>
                                    <img src="/images/flags/ru.png" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
