import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSearch, faUser, faBars, faClose, faHome, } from '@fortawesome/free-solid-svg-icons'

import logo from "assets/logo/logo.svg";
import enva from "assets/logo/app_evne.png";
import "./Header.scss";
import moment from "moment";
import allMenu from "assets/data/allmenu.js"


function Header() {
    const [content, setContent] = useState(allMenu);
    const [allMenutab, setAllMenuTab] = useState(false);
    const [btnBars, setBtnBars] = useState(true);
    const [btnClose, setBtnClose] = useState(false);

    return(
        <>
            <div className="header">
                <div className="container">
                    <Link to="/" className="all-menu">
                       {btnBars &&  <FontAwesomeIcon onClick={()=>{setBtnClose(true);setBtnBars(false); setAllMenuTab(true)}} className="ic ic-bars" icon={faBars} />}

                       {btnClose &&  <FontAwesomeIcon onClick={()=>{setBtnBars(true); setBtnClose(false); setAllMenuTab(false)}} className="ic ic-close" icon={faClose} />}
                    </Link>
               
                    <Link 
                        to="/"
                        className="logo"
                        title="VnExpress - Báo tiếng Việt nhiều người xem nhất"
                    >
                        <img src={logo} alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                    </Link>
                
                    <span className="time-now">{moment().format('dddd, DD/MM/yyyy')}</span>
                <div className="right">
                        <Link to="/" className="btn24hqua">
                            <FontAwesomeIcon className="ic" icon={faClock} />
                            Mới nhất
                        </Link>
                        
                        <Link to="/" className="evne">  
                            <img className="enve" src={enva} alt="" />
                        <span>International</span>
                        </Link>
                        <form action="" className="search">
                            <input type="text" placeholder="Tìm kiếm" />
                            <button type="submit" id="btn-search" className="btn-search">
                                <FontAwesomeIcon className="ic" icon={faSearch} />
                            </button>
                        </form>

                        <Link to="/"className="login">
                            <FontAwesomeIcon className="ic" icon={faUser} />
                            Đăng nhập
                        </Link>
                </div>
                </div>
            </div>
            <div id="wrap-menu" className="wrap-menu">
                <nav className="main-nav">
                    <ul className="parent">
                        <li className="home">
                            <Link to="/">
                                <FontAwesomeIcon  className="ic ic-home" icon={faHome}/>
                                <img className="ic ic-even" src={enva} alt="" />
                            </Link>
                        </li>
                        <li className="newlist">
                            <Link to="/">
                                Mới nhất
                            </Link>
                        </li>
                        {
                           allMenu.map((item, index) => (
                                <li key={index} className={item.title}>
                                    <Link to={"/" + item.title}>
                                        {item.title}
                                    </Link>
                                    <ul className="sub">
                                        {item.list.map((item, index) =>(
                                            <li key={index} className="">
                                                <Link to="/">
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                            ))
                        }
                        <li className="allmenu-nav">
                           <Link to="/" onClick={()=>{setBtnClose(true);setBtnBars(false);setAllMenuTab(true)}}>
                               Tất cả <span><FontAwesomeIcon  className="ic" icon={faBars}/></span>
                           </Link> 
                        </li>
                    </ul>
                </nav>

               { 
                allMenutab && 
                <div className="wrap-all-menu">
                    <div className="container">
                        <div className="header-menu">
                            <span className="name-menu">Tất cả chuyên mục</span>
                            <span className="close-menu" onClick={() =>setAllMenuTab(false)}>
                                Đóng 
                                <FontAwesomeIcon className="ic" icon={faClose} /> 
                            </span>
                        </div>
                        <div className="content-left">
                            <div className="container">
                                <div className="wrapper">
                                    {
                                        content.map((item, index) => (
                                            <ul key={index} className="cat-menu">
                                                <h3 className="title">{item.title}</h3>
                                                {item.list.slice(0,item.limit).map((item,index) => (
                                                    <li key={index}>
                                                        <Link to={"/"+item}>
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                                {
                                                    item.list.length <= item.limit || item.list.length === item.limit?  ""  
                                                     : <li 
                                                        className="more" 
                                                        onClick={() => setContent(prev => 
                                                            { let newList = [...prev] ; 
                                                                newList[index].limit = prev[index].list.length; 
                                                                return newList;
                                                            }
                                                        )}
                                                        
                                                    > Xem thêm</li>
                                                }
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               }         

            </div>
        </>
    );
}

export default Header;
