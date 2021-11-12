import React, {useRef} from "react";
import NewsItem from "../News/NewsItem/NewsItem";
import BlogSlider from "./BlogSlider/BlogSlider";
import Form from "../../Components/Form/Form";
import Paginations from "../../Components/Pagination";
import "./Blogs.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';


const Blogs = ({blogs}) => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');
    const mainWrapper = useRef(null);
    const executeScroll = () => {
        mainWrapper.current.scrollIntoView();
    };
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="blogs_page">
                    <BlogSlider blogs={blogs.blogs}/>
                    <div ref={mainWrapper} className="wrapper main">
                        <div onClick={() => executeScroll()} className="scroll">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32.69"
                                height="49.035"
                                viewBox="0 0 32.69 49.035"
                            >
                                <g
                                    id="noun_scroll_down_2047489"
                                    data-name="noun_scroll down_2047489"
                                    transform="translate(-20.3 -6.4)"
                                >
                                    <path
                                        id="Path_213"
                                        data-name="Path 213"
                                        d="M38.106,55.435H35.185A14.91,14.91,0,0,1,20.3,40.551V21.285A14.91,14.91,0,0,1,35.185,6.4h2.921A14.91,14.91,0,0,1,52.99,21.285V40.551A14.91,14.91,0,0,1,38.106,55.435ZM35.185,9.208A12.094,12.094,0,0,0,23.108,21.285V40.551A12.094,12.094,0,0,0,35.185,52.627h2.921A12.094,12.094,0,0,0,50.182,40.551V21.285A12.094,12.094,0,0,0,38.106,9.208H35.185Z"
                                    />
                                    <path
                                        id="Path_214"
                                        data-name="Path 214"
                                        d="M50.667,43.539h0a1.357,1.357,0,0,0-1.966,0l-3.595,3.932V33.2a1.4,1.4,0,1,0-2.808,0V47.527L38.7,43.6a1.357,1.357,0,0,0-1.966,0h0a1.367,1.367,0,0,0,0,1.8l5.954,6.572a1.357,1.357,0,0,0,1.966,0l6.01-6.572A1.442,1.442,0,0,0,50.667,43.539Z"
                                        transform="translate(-7.057 -11.133)"
                                    />
                                </g>
                            </svg>
                            <p>Scroll down for more</p>
                        </div>
                        {
                            blogs.data.data.map((item, index) => (
                                <NewsItem
                                    key={index}
                                    imgSrc={item.main_file ? "/" + item.main_file.path + "/" + item.main_file.title : ""}
                                    date={item.created_at}
                                    title={item.title}
                                    description={item.description}
                                    href={'/blog-details/' + item.id}
                                />
                            ))
                        }
                        {
                            blogs.data.data.length ?
                                <Paginations links={blogs.data.links}/> : ""
                        }
                        <Form/>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Blogs;
