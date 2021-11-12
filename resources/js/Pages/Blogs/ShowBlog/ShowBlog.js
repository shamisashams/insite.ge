import React, {useState} from "react";
import Text35 from "../../../Components/Text35";
import SocialMedia from "../../../Components/SocialMedia";
import {Hr, Quote, PrevNext} from "../../News/ShowNews/SNCs";
import SlideBtns from "../../../Components/SlideBtns";
import Form from "../../../Components/Form/Form";
import "../Blogs.css";
import {DataImg} from "./DataImg";
import Layout from "../../../Layouts/Layout";
import Moment from 'react-moment';
import {Next} from "../../News/ShowNews/Next";
import {Previous} from "../../News/ShowNews/Previous";
import Meta from "../../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const ShowNews = ({data}) => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');
    const [currentImg, setCurrentImg] = useState(0);
    const imgLength = DataImg.length;

    const nextImg = () => {
        setCurrentImg(currentImg === imgLength - 1 ? 0 : currentImg + 1);
    };
    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? imgLength - 1 : currentImg - 1);
    };

    if (!Array.isArray(DataImg) || DataImg <= 0) {
        return null;
    }

    let blog = data.blog;
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="news_blog_show Blog wrapper">
                    <Text35 text={blog.title}/>
                    <p className="date op06">
                        <Moment format="YYYY/MM/DD">
                            {blog.created_at}
                        </Moment></p>
                    <div className="l_img img">
                        {
                            blog.main_file ?
                                <img src={"/" + blog.main_file.path + "/" + blog.main_file.title} alt=""/> : ""
                        }
                    </div>
                    <Hr hrClass="hr center"/>

                    <p dangerouslySetInnerHTML={{__html: blog.content}}>
                    </p>
                    {/*<div className="flex img_slider">*/}
                    {/*    <SlideBtns direction="prev" moveSlide={prevImg}/>*/}
                    {/*    <div className="img">*/}
                    {/*        {DataImg.map((img, index) => {*/}
                    {/*            return (*/}
                    {/*                <img*/}
                    {/*                    src={img.image}*/}
                    {/*                    alt=""*/}
                    {/*                    className={index === currentImg ? "slide on" : "slidea"}*/}
                    {/*                />*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*    <SlideBtns direction="next" moveSlide={nextImg}/>*/}
                    {/*</div>*/}
                    <Hr hrClass="hr"/>
                    <div className="flex" style={{marginTop: "20px"}}>

                        <SocialMedia/>
                    </div>
                    {
                        !data.previousBlog && data.nextBlog ?
                            <Next
                                imgNext={data.nextBlog.main_file}
                                titleNext={data.nextBlog.title}
                                idNext={data.nextBlog.id}
                                paraNext={data.nextBlog.description}
                                hrefNext={'/blog-details/' + data.nextBlog.id}
                            /> :
                            (data.previousBlog && data.nextBlog ?
                                    <PrevNext
                                        imgPrev={data.previousBlog.main_file}
                                        idPrev={data.previousBlog.id}
                                        titlePrev={data.previousBlog.title}
                                        paraPrev={data.previousBlog.description}
                                        imgNext={data.nextBlog.main_file}
                                        titleNext={data.nextBlog.title}
                                        idNext={data.nextBlog.id}
                                        paraNext={data.nextBlog.description}
                                        hrefNext={'/blog-details/' + data.nextBlog.id}
                                        hrefPrev={'/blog-details/' + data.previousBlog.id}
                                    /> : (data.previousBlog && !data.nextBlog ?
                                            <Previous
                                                imgPrev={data.previousBlog.main_file}
                                                idPrev={data.previousBlog.id}
                                                titlePrev={data.previousBlog.title}
                                                paraPrev={data.previousBlog.description}
                                                hrefPrev={'/blog-details/' + data.previousBlog.id}
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
