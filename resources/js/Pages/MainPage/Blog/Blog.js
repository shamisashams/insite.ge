import React from "react";
import Button2 from "../../../Components/Button2/Button2";
import Text35 from "../../../Components/Text35";
import { Link } from '@inertiajs/inertia-react'
import "./Blog.css";
import Moment from 'react-moment';
import {usePage} from "@inertiajs/inertia-react";
import {locale_route} from "../../Helpers/locale_route";

const Blog = (props) => {
    const {locale} = usePage().props;

    return (
    <div className="blog_item">
      <div className="img">
        <img src={props.img} alt="" />
        <div className="date">
            <Moment format="MMMM DD,YYYY">
                {props.date}
            </Moment></div>
      </div>
      <Text35 text={props.title} />
      <p>{props.para}</p>
      <Link href={'/blog-details/'+props.id}>
        <Button2 href={'/blog-details/'+props.id} text="Узнайте Больше" />
      </Link>
    </div>
  );
};

export default Blog;
