import React from "react";
import Text35 from "../../../Components/Text35";
import SocialMedia from "../../../Components/SocialMedia";
import {Hr, Quote, PrevNext} from "./SNCs";
import {Next} from "./Next";
import {Previous} from "./Previous";
import Layout from "../../../Layouts/Layout";
import Moment from "react-moment";
import Meta from "../../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const ShowNews = ({data}) => {
    const meta = Meta(data.news.meta_title, data.news.meta_keyword, data.news.meta_description);

    let news = data.news;
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="news_blog_show news wrapper">
                    <Text35 text={news.title}/>
                    <p className="date op06">
                        <Moment format="YYYY/MM/DD">
                            {news.created_at}
                        </Moment>
                    </p>
                    <div className="l_img img">
                        {
                            news.main_file ?
                                <img src={"/" + news.main_file.path + "/" + news.main_file.title} alt=""/> : ""
                        }
                    </div>
                    <Hr hrClass="hr center"/>
                    <p dangerouslySetInnerHTML={{__html: news.content}}>
                    </p>
                    <Hr hrClass="hr"/>
                    {/*<SocialMedia/>*/}
                    {
                        !data.previousNews && data.nextNews ?
                            <Next
                                imgNext={data.nextNews.main_file}
                                titleNext={data.nextNews.title}
                                idNext={data.nextNews.id}
                                paraNext={data.nextNews.description}
                                hrefNext={'/news-details/' + data.nextNews.id}
                            /> :
                            (data.previousNews && data.nextNews ?
                                    <PrevNext
                                        imgPrev={data.previousNews.main_file}
                                        idPrev={data.previousNews.id}
                                        titlePrev={data.previousNews.title}
                                        paraPrev={data.previousNews.description}
                                        imgNext={data.nextNews.main_file}
                                        titleNext={data.nextNews.title}
                                        idNext={data.nextNews.id}
                                        paraNext={data.nextNews.description}
                                        hrefNext={'/news-details/' + data.nextNews.id}
                                        hrefPrev={'/news-details/' + data.previousNews.id}

                                    /> : (data.previousNews && !data.nextNews ?
                                            <Previous
                                                imgPrev={data.previousNews.main_file}
                                                idPrev={data.previousNews.id}
                                                titlePrev={data.previousNews.title}
                                                paraPrev={data.previousNews.description}
                                                hrefPrev={'/news-details/' + data.previousNews.id}
                                            /> : ""
                                    )
                            )
                    }
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default ShowNews;
