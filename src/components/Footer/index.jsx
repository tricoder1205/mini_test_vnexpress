import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.scss";
import menufooter from "assets/data/menufooter.js";
import pic2 from "assets/logo/app_evne.png";
import logoVlight from "assets/logo/logo_vlight.svg"

import logo from "assets/logo/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFacebook} from '@fortawesome/free-solid-svg-icons'


export default function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="inner-footer">
                    <ul className="list-menu-footer">
                        <li className="item-menu">
                            <Link to="/">
                                Trang chủ
                            </Link>
                        </li>
                        <li className="item-menu">
                            <Link to="/">
                                Video
                            </Link>
                        </li>
                        <li className="item-menu">
                            <Link to="/">
                                Podcasts
                            </Link>
                        </li>
                        <li className="item-menu">
                            <Link to="/">
                                Ảnh
                            </Link>
                        </li>
                        <li className="item-menu">
                            <Link to="/">
                                Infographics
                            </Link>
                        </li>
                        <li className="item-menu border-top">
                            <Link to="/">
                                Mới nhất
                            </Link>
                        </li>
                        <li className="item-menu">
                            <Link to="/">
                                Xem nhiều
                            </Link>
                        </li>
                        <li className="item-menu">
                            <Link to="/">
                                Tin nóng
                            </Link>
                        </li>
                    </ul>

                    {
                        menufooter.map((item,index) => (
                            <ul key={index} className="list-menu-footer">
                                {item.list.map((item,index) =>(
                                    <li key={index} className="item-menu">
                                        <Link to="/">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))
                    }

                    <div className="wrap-contact">
                        <div className="contact-download">
                            <p>Tải ứng dụng</p>
                            <Link to="/">
                                <img src={pic2} alt="" />
                                VnExpress
                            </Link>
                            <Link to="/">
                                <img src={pic2} alt="" />
                                International
                            </Link>
                        </div>
                        <div className="contact">
                            <p>Liên hệ</p>
                            <Link to="/" className="mail">
                                <FontAwesomeIcon className="ic" icon={faEnvelope}/>
                                Tòa soạn
                            </Link>

                            <Link to="/" className="ads">
                                Quảng cáo
                            </Link>

                            <Link to="/" className="vlight">
                                <img src={logoVlight} className="" alt="" />
                                Hợp tác bản quyền
                            </Link>
                        </div>
                        <div className="hotline">
                            <p>Đường dây nóng</p>
                            <div class="left">
                                <strong>083.888.0123</strong>
                                <p>(Hà Nội)</p>
                            </div>
                            <div class="right">
                                <strong>082.233.3555</strong>
                                <p>(TP. Hồ Chí Minh)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>
                        <Link to="/" className="logo_ft">
                            <img src={logo} alt="" />
                        </Link>
                    </p>

                    <div className="right flexbox">
                        <Link to="/">
                            RSS
                        </Link>
                        <span class="txt-follow">Theo dõi VnExpress trên</span>

                        <Link to="/" className='social face'>
                            <i className="ic fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className='social twitter'>
                            <i className="ic fa-brands fa-twitter"></i>
                        </Link>
                        <Link to="/" className='social youtube'>
                            <i className="ic fa-brands fa-youtube"></i>
                        </Link>
                    </div>

                    <div className="copy-right-footer">
                        <p>
                            <b>Báo tiếng Việt nhiều người xem nhất</b>
                            <br/>Thuộc Bộ Khoa học Công nghệ
                            <br/>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
                        </p>
                        <p>
                            Phó Tổng Biên tập phụ trách: Phạm Hiếu
                            <br/>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
                            <br/>Điện thoại: 024 7300 8899 - máy lẻ 4500
                        </p>
                        <p style={{textAlign: 'right'}}>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
