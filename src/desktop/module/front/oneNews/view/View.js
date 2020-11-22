import React from "react";
import Header from "components/header/Header";
import Footer from "desktop/layouts/front/footer/Footer";
import Aside from "./aside/Aside";
import SingleNews from "./singleNews/SingleNews";
import CreateComment from "./createComment/CreateComment";
import Link from "components/link/Link";

const View = (props) => {
    const {oneNews} = props;
    const {comments} = oneNews
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Aside/>
                    </div>
                    <div className="col-10">
                        <Link to="/england/news/" className="btn btn_green">Go to news</Link>
                        <SingleNews oneNews={oneNews}/>
                        <CreateComment comments={comments}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default View;
