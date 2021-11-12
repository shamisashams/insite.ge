import React from "react";
import Showcase1 from "../../Components/Showcase1/Showcase1";
import Form from "../../Components/Form/Form";
import NewsItem from "./NewsItem/NewsItem";
import "./News.css";
import Text35 from "../../Components/Text35";
import RecentEvents from "./RecentEvents/RecentEvents";
import Pagination from "../../Components/Pagination";
import Layout from "../../Layouts/Layout";
import {usePage} from "@inertiajs/inertia-react";

const News = ({news}) => {
    const {locale} = usePage().props;

    return (
        <Layout>
            <div className="news_page">
                <Showcase1
                    bgSrc="url(/images/sc-bgs/news-bg.png)"
                    color="#fff"
                    fontFamily="bold"
                    head="Новости И События"
                    para="Have A Project? Feel Free To Call, Send Us An Email Or Complete The Enquiry Form."
                    imgSrc="/images/news/sc.png"
                />
                <div className="wrapper flex news_page_content">
                    <div className="main_column">
                        {news.data.data.map((item, index) => (
                            <NewsItem
                                key={index}
                                imgSrc={item.main_file ? "/" + item.main_file.path + "/" + item.main_file.title : ""}
                                date={item.created_at}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                hrefBtn={'/news-details/' + item.id}
                            />
                        ))
                        }
                        {
                            news.data.data.length?
                            <Pagination links={news.data.links}/>:""
                        }
                        <Form title="Оставьте нам записку"/>
                    </div>
                    <div className="recents">
                        <Text35 text="Recent News & Events"/>
                        {
                            news.blogs.map((item, index) => (
                                <RecentEvents
                                    key={index}
                                    href={'/blog-details/' + item.id}
                                    img={item.main_file ? "/" + item.main_file.path + "/" + item.main_file.title : ""}
                                    date={item.created_at}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default News;
