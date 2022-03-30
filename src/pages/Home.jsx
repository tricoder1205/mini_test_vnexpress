import React from 'react';
import { 
  BrowserRouter as Router,
} from "react-router-dom";

import Header from "components/Header";
import TopStory from 'components/Topstory';
import Footer from 'components/Footer';

export default function Home () {

    return(
        <div className="home">
            <Router>
                <Header />
                <TopStory />
                <Footer />
            </Router>
        </div>
    );

}