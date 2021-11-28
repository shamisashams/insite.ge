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
                                    Г. Москва, Пресненская наб., <br /> 6, стр. 2 ЦАО
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/2.svg" alt="" />
                                <p>+79684683745</p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/3.svg" alt="" />
                                <p>hello@insite.dev</p>
                            </div>
                        </div>
                        <div>
                            <div className="map">
                                <Map />
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/1.svg" alt="" />
                                <p>
                                    ჟიული შარტავას ქ. 40, <br /> თბილისი
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/2.svg" alt="" />
                                <p>(+995 32) 2-11-10-19</p>
                            </div>
                            <div className="flex">
                                <img src="/images/icons/footer/3.svg" alt="" />
                                <p>hello@insite.international</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex links">
                        <div className="column">
                            <Link href="/">
                                <div className="title">მთავარი</div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link href="/">
                                <div className="title">კომპანია</div>
                            </Link>
                            <InLink href="/company/about-us" text="ჩვენს შესახებ" />
                            <InLink href="/company/projects" text="პორტფოლიო" />
                            <InLink href="/company/faq" text="FAQ" />
                        </div>
                        <div className="column" style={{ margin: 0 }}>
                            <Link href="/">
                                <div className="title">სერვისები</div>
                            </Link>
                            <InLink
                                href="/services/planning"
                                text="დაგეგმარება"
                            />
                            <InLink
                                href="/services/web-development"
                                text="ვებ დეველოპმენტი"
                            />
                            <InLink
                                href="/services/design"
                                text="UI/UX დეველოპმენტი"
                            />
                            <InLink
                                href="/services/virtualization"
                                text="ვირტუალიზაცია"
                            />
                            <InLink
                                href="/services/remote-work"
                                text="დისტანციური მუშაობა"
                            />
                            <InLink
                                href="/services/security"
                                text="ქსელური უსაფრთხოება"
                            />
                        </div>
                        <div className="column">
                            <Link href="/">
                                <div className="title">ჩვენი კომპანია</div>
                            </Link>
                            <InLink href="/vacancies" text="ვაკანსიები" />
                            <InLink href="/news" text="სიახლეები" />
                        </div>
                        <div className="column">
                            <Link href="/blogs">
                                <div className="title">ბლოგი</div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link href="/contact">
                                <div className="title">კონტაქტი</div>
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
