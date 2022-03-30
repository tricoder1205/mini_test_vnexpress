import "./topstory.scss";
import pic1 from "assets/images/pic1.jpg";
import pic2 from "assets/images/pic2.png";
import pic3 from "assets/images/pic3.jpg";
import pic4 from "assets/images/pic4.jpg";
import pic5 from "assets/images/pic5.jpg";
import pic7 from "assets/images/pic7.png";
import pic6 from "assets/images/pic6.jpg";
import pic8 from "assets/images/pic8.jpg";
import pic9 from "assets/images/pic9.jpg";
import pic10 from "assets/images/pic10.jpg";
import pic11 from "assets/images/pic11.jpg";

import bus1 from "assets/images/bus1.jpg";
import bus2 from "assets/images/bus2.png";
import bus3 from "assets/images/bus3.jpg";
import bus4 from "assets/images/bus4.png";
import mini_ban1 from "assets/images/mini_ban1.jpg";

import qc1 from "assets/images/qc1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import datacovid from "assets/data/datacovid";

function TopStory() {
  return (
    <>
    <div className="topstory">
      <div className="container">
        <div className="col-left-top">
          <div className="art-top">
            <div className="thumb-art">
              < img src={pic1} alt="" />
            </div>
            <div className="content-art">
              <h3>
                <Link to="/">
                  Chủ tịch FLC Trịnh Văn Quyết bị bắt
                </Link>
              </h3>
              <p>
                HÀ NỘI -- Chủ tịch tập đoàn FLC Trịnh Văn Quyết bị khởi tố, 
                bắt với cáo buộc "thao túng" và "che giấu thông tin chứng khoán", ngày 29/3.
              </p>
              <p>
                Ông Quyết bị Cơ quan Cảnh sát điều tra Bộ Công an (C01) 
                truy cứu trách nhiệm hình sự về tội Thao túng thị trường ...
              </p>
              <p className="comt">
                <FontAwesomeIcon className="ic" icon={faMessage} />
                144
              </p>
            </div>
          </div>
          <div className="news-top">
            <ul className="list-news-top">
              <li>
                <h3 className="title-news">
                  <Link to="/">  
                    Việt Nam hoà Nhật Bản ở vòng loại World Cup
                    
                  </Link>
                </h3>
                <p className="des">
                  <Link to="/">
                    NHẬT BẢN -- Hài lòng khi hoà Nhật Bản 1-1 ngày 29/3, nhưng HLV Park Hang-seo muốn bóng đá Việt Nam tận dụng mốc lịch sử ở vòng loại World Cup 2022 làm sức bật cho tương lai.
                  </Link>
                  <span className="comt">
                    <FontAwesomeIcon className="ic" icon={faMessage} />
                    385 
                  </span>
                </p>
              </li>
              <li>
                <h3 className="title-news">
                  <Link to="/"> 
                    HLV Park: 'Việt Nam phải tiến xa hơn sau khi hoà Nhật Bản'
                  </Link>
                </h3>
                <p className="des">
                    <Link to="/">
                      NHẬT BẢN -- Việt Nam lần đầu hoà Nhật Bản, với tỷ số 1-1 tại lượt cuối vòng loại thứ ba World Cup 2022 khu vực châu Á tối 29/3.
                    </Link>
                    <span className="comt">
                      <FontAwesomeIcon className="ic" icon={faMessage} />
                      18 
                  </span>
                </p>
              </li>
              <li className="gocnhin">
                <Link  to="/" className="title">
                  Góc nhìn 
                </Link>
                <h3 className="title-news">
                  <Link to="/" className="">
                    Cái tát của Will Smith
                  </Link>
                </h3>
                <p className="des">
                  <Link to="/">
                    Giễu nhại lành mạnh hay lấy người khác ra tiêu khiển có ranh giới rất rõ ràng.
                  </Link>
                </p>
                <div className="infor-aut">
                  <div className="meta-news">
                    <Link to="/" >
                      Cẩm Hà
                    </Link>
                    <span className="comt">
                      <FontAwesomeIcon className="ic" icon={faMessage} />
                      133 
                    </span>
                  </div>
                  <img src={pic2} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-right-top">
          <img src={qc1} alt="" />
        </div>
      </div>
    </div>

    <div className="stream-now">
      <div className="container has-border">
        <div className="col-left">
            <div className="item-news">
              <h3 className="title-news">
                <Link to="/">
                  HLV Nhật Bản: 'Cả trận Việt Nam chỉ một lần dứt điểm'
                </Link>
              </h3>
              <div className="thumbart">
                <img src={pic3} alt="" />
              </div>
              <p className="desc">
                NHẬT BẢN -- Theo HLV Hajime Moriyasu, việc Việt Nam dồn toàn lực phòng thủ khiến Nhật Bản không thể giành chiến thắng ở trận cuối vòng loại World Cup 2022 ngày 29/3.
                <span className="comt">
                  <FontAwesomeIcon className="ic" icon={faMessage} />
                  18 
                </span>
              </p>
            </div>
            <div className="item-news">
              <h3 className="title-news">
                <Link to="/">
                  Trung Quốc thế chỗ phương Tây đón nhận dầu khí Nga
                </Link>
              </h3>
              <div className="thumbart">
                <img src={pic4} alt="" />
              </div>
              <p className="desc">
                Trung Quốc tăng cường tìm kiếm các thỏa thuận dầu khí mới với Nga, khi châu Âu tìm cách quay lưng với nguồn năng lượng của Moskva.
              </p>
            </div>

            <div className="item-news">
                <Link to="/">
                  <img src={mini_ban1} alt="" />
                </Link>
            </div>

            <div className="item-news">
              <h3 className="title-news">
                <Link to="/">
                  Việt Nam hoà Nhật Bản ở vòng loại World Cup
                </Link>
              </h3>
              <div className="thumbart">
              <img src={pic5} alt="" />
              </div>
              <p className="desc">
                NHẬT BẢN -- Việt Nam lần đầu hoà Nhật Bản, với tỷ số 1-1 tại lượt cuối vòng loại thứ ba World Cup 2022 khu vực châu Á tối 29/3.
                <span className="comt">
                  <FontAwesomeIcon className="ic" icon={faMessage} />
                  583 
                </span>
              </p>
            </div>
            <div className="item-news">
              <h3 className="title-news">
                <Link to="/">
                  Chuyên gia châu Á: 'Việt Nam đã thành công ở vòng loại World Cup'
                </Link>
              </h3>
              <div className="thumbart">
              <img src={pic6} alt="" />
              </div>
              <p className="desc">
                Chuyên gia Fox Sports Rhysh Rai cho rằng thua nhiều nhưng Việt Nam đã có những trải nghiệm quý giá ở vòng loại thứ ba World Cup 2022 - khu vực châu Á.
                <span className="comt">
                  <FontAwesomeIcon className="ic" icon={faMessage} />
                  90
                </span>
              </p>
            </div>
            <div className="item-news">
              <h3 className="title-news">
                <Link to="/">
                  Ngày thứ 34 chiến sự Ukraine: Đàm phán đạt bước tiến
                </Link>
              </h3>
              <div className="thumbart">
              <img src={pic7} alt="" />
              </div>
              <p className="desc">
                Cuộc đàm phán tại Thổ Nhĩ Kỳ đã thắp hy vọng về khả năng thoát xung đột, khi Nga nhất trí giảm giao tranh ở miền bắc Ukraine. 
              </p>
            </div>
            <div className="item-news">
              <h3 className="title-news">
                <Link to="/">
                  Mâu thuẫn mặt bằng kinh doanh spa tại trung tâm Sài Gòn
                </Link>
              </h3>
              <div className="thumbart">
              <img src={pic8} alt="" />
              </div>
              <p className="desc">
                Công ty Duy Tân yêu cầu chủ spa trả lại mặt bằng 1.600 m2 ở quận 3, TP HCM, do hết thời hạn hợp tác nhưng đối tác không thực hiện nên mâu thuẫn ngày càng gay gắt. 
              </p>
            </div>
        </div>

        <div className="col-right">
          <div className="nav-content">
              <div className="item-content active">
                <Link to="/">
                  Chăm sóc F0
                </Link>
              </div>
              <div className="item-content">
                <Link to="/">
                  Bác sĩ tư vấn
                </Link>
              </div>
              <div className="item-content">
                <Link to="/">
                  Tự chăm sóc
                </Link>
              </div>
              <div className="item-content">
                <Link to="/">
                  Thuốc điều trị
                </Link>
              </div>
              <div className="item-content">
                <Link to="/">
                  Diễn đàn
                </Link>
              </div>
              <div className="item-content">
                <Link to="/">
                  Triệu chứng
                </Link>
              </div>
              <div className="item-content">
                <Link to="/">
                  Test nhanh
                </Link>
              </div>
              
              <div className="btn-next">
                <i className="fa-solid fa-angle-right"></i>
              </div>
          </div>

          <div className="box-category">
            <div className="inner-box">
              <div className="title-cate">
                Covid-19 tại Việt Nam
              </div>
              <div className="head-cv">
                <div class="head-th">
                  <span class="txt-label">&nbsp;</span>
                  <span class="count-today">Công bố hôm qua</span>
                  <span class="count-all">Thay đổi trong 7 ngày</span>
                </div>
                <div class="head-nhiem">
                  <span class="txt-label">Nhiễm</span>
                  <span class="count-today">111.638</span>
                  <span class="count-all">-41%</span>
                </div>
                <div class="head-nang">
                  <span class="txt-label">Nặng</span>
                  <span class="count-today">3.639</span>
                  <span class="count-all">-12%</span>
                </div>
                <div class="head-tuvong">
                  <span class="txt-label">Tử vong</span>
                  <span class="count-today">55</span>
                  <span class="count-all">-15%</span>
                </div>
              </div>

              <div className="head-cv-right">
                <div class="head-th">
                  <span class="txt-label">Tỉnh</span>
                  <span class="count-today">Nhiễm hôm qua</span>
                  <span class="count-all">Tử vong hôm qua</span>
                </div>
                <div className="ss-content">
                  <table className="tbl-cv tbl-sort" cellspacing="0" cellpadding="0">
                      {
                        datacovid.map((item, index) => (
                          <tr key={index} data-score={item.id}>
                            <td className="col-prov">
                                <Link to="/">{item.TP}</Link></td>
                            <td className="col-today  "><strong >{item.num_nhiem}</strong></td>
                            <td className="col-all"><span>{item.tuvong}</span></td>
                          </tr>
                        ))
                      }
                      </table>                
                </div>

              </div>

              
            </div>
          </div>

          <div className="box-category">
            <div className="title-cate2">
                <h2>
                  <Link to="/">
                      Kinh doanh
                  </Link>
                </h2>
                <span className="sub-cate">
                  <Link to="/">
                    Quốc tế
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Doanh nghiệp
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Chứng khoán
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Bất động sản
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Bảo hiểm
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    E-Commerce 4.0
                  </Link>
                </span>
            </div>

            <div className="inner-box">
              <div className="thumbart">
                <div className="art-img">
                  <Link to="/">
                    <img src={pic9} alt="" />
                  </Link>
                </div>
                <div className="thumb-content">
                  <div className="cont-title">
                      <Link to="/">
                        Đầu ra nào cho dầu Nga giữa bão cấm vận?
                      </Link>
                  </div>
                  <div className="cont-des">
                    Trung Quốc và Ấn Độ có thể ra tay cứu dầu Nga, nhưng họ vẫn chưa tích cực mua vì muốn giá hời hơn nữa.  
                    <span className="comt">
                      <FontAwesomeIcon className="ic" icon={faMessage} />
                      17
                    </span>
                  </div>
                </div>
              </div>
              <div className="thumb-right">
                  <div className="cont-title">
                      <Link to="/">
                        Kiến nghị gỡ khó pháp lý cho 64 dự án địa ốc
                      </Link>
                  </div>
                  <div className="cont-des">
                    TP HCM -- HoREA vừa đề nghị thành phố gỡ khó pháp lý cho 64 dự án nhà ở bị ách tắc hồ sơ 5-10 năm, ảnh hưởng tiêu cực đến thị trường ... 
                  </div>
              </div>

              <div className="sub-news-cate">
                      <div className="item-news-cate">
                        <h3>
                          <Link to="/">
                            Louis Capital kỳ vọng tăng trưởng mạnh năm nay
                          </Link>
                        </h3>
                      </div>
                      <div className="item-news-cate">
                        <h3>
                          <Link to="/">
                            Công ty mẹ G Kitchen mua hãng gà Pháp
                          </Link>
                        </h3>
                      </div>
                      <div className="item-news-cate">
                        <h3>
                          <Link to="/">
                            Ông Trịnh Văn Quyết đang sở hữu bao nhiêu cổ phiếu
                          </Link>
                        </h3>
                      </div>
              </div>
            </div>
          </div>

          <div className="box-category">
            <div className="title-cate2">
                <h2>
                  <Link to="/">
                      Thể thao
                  </Link>
                </h2>
                <span className="sub-cate">
                  <Link to="/">
                    Bóng đá
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Lịch thi đấu
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Tennis
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    VM 2022
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    V-Race
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    World cup 2022
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    V-League
                  </Link>
                </span>
            </div>

            <div className="inner-box">
              <div className="thumbart">
                <div className="art-img">
                  <Link to="/">
                    <img src={pic10} alt="" />
                  </Link>
                </div>
                <div className="thumb-content">
                  <div className="cont-title">
                      <Link to="/">
                        Mane khiến Salah lỡ hẹn World Cup 2022
                      </Link>
                  </div>
                  <div className="cont-des">
                  Sadio Mane đá thành công quả penalty quyết định ở loạt sút luân lưu, giúp Senegal thắng Ai Cập ở trận play-off tranh vé dự World Cup 2022.  
                    <span className="comt">
                      <FontAwesomeIcon className="ic" icon={faMessage} />
                      72
                    </span>
                  </div>
                </div>
              </div>
              <div className="thumb-right">
                  <div className="cont-title">
                      <Link to="/">
                        Nhật Bản mất vị trí số một châu Á
                      </Link>
                  </div>
                  <div className="cont-des">
                    NHẬT BẢN -- Trận hoà Việt Nam ở lượt cuối vòng loại World Cup khiến Nhật Bản xuống thứ hai, để Iran vươn lên đầu châu Á trên bảng ...  63
                    <span className="comt">
                      <FontAwesomeIcon className="ic" icon={faMessage} />
                      83
                    </span>
                  </div>
              </div>

              <div className="sub-news-cate">
                      <div className="item-news-cate">
                        <h3>
                          <Link to="/">
                            Nguyên Mạnh nhận lỗi trong bàn thua Nhật Bản
                          </Link>
                        </h3>
                        <span className="comt">
                          <FontAwesomeIcon className="ic" icon={faMessage} />
                          86
                        </span>
                      </div>
                      <div className="item-news-cate">
                        <h3>
                          <Link to="/">
                            Ronaldo: 'Bồ Đào Nha đang ở đúng vị thế'
                          </Link>
                        </h3>
                        <span className="comt">
                          <FontAwesomeIcon className="ic" icon={faMessage} />
                          83
                        </span>
                      </div>
                      <div className="item-news-cate">
                        <h3>
                          <Link to="/">
                            Kyrgios đập vợt ở vòng 4 Miami Open
                          </Link>
                        </h3>
                        <span className="comt">
                          <FontAwesomeIcon className="ic" icon={faMessage} />
                          15
                        </span>
                      </div>
              </div>
            </div>
          </div>
          
          <div className="box-category">
            <div className="title-cate2">
                <h2>
                  <Link to="/">
                      Giải trí
                  </Link>
                </h2>
                <span className="sub-cate">
                  <Link to="/">
                    Giới sao
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Phim
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Nhạc 
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Thời trang
                  </Link>
                </span>
                <span className="sub-cate">
                  <Link to="/">
                    Sách
                  </Link>
                </span>
            </div>

            <div className="inner-box">
              <div className="thumbart">
                <div className="art-img">
                  <Link to="/">
                    <img src={pic11} alt="" />
                  </Link>
                </div>
                <div className="thumb-content">
                  <div className="cont-title">
                      <Link to="/">
                        Jim Carrey chỉ trích những người tán thưởng Will Smith
                      </Link>
                  </div>
                  <div className="cont-des">
                    Tài tử Jim Carrey nói khách dự Oscar 2022 "nhu nhược" khi vỗ tay chúc mừng Will Smith nhận giải sau khi anh tát ... 
                  </div>
                </div>
              </div>
              <div className="thumb-right">
                  <div className="cont-title">
                      <Link to="/">
                        Công trình Sài Gòn hơn 100 năm trước qua ống kính người Pháp
                      </Link>
                  </div>
                  <div className="cont-des">
                    Cảng Sài Gòn, chợ Gò Vấp, lăng Cha Cả... cuối thế kỷ 19 hiện lên cổ kính trong bộ sưu tập ảnh của bác ... 
                  </div>
              </div>

              <div className="sub-news-cate">
                <div className="item-news-cate">
                  <h3>
                    <Link to="/">
                      Sắc vóc 'Nữ chính xuất sắc' Oscar 2022
                    </Link>
                  </h3>
                </div>
                <div className="item-news-cate">
                  <h3>
                    <Link to="/">
                      'Belfast' - hồi ức tươi đẹp
                    </Link>
                  </h3>
                </div>
                <div className="item-news-cate">
                  <h3>
                    <Link to="/">
                      Giới trẻ Đài Loan chuộng 'phong cách luộm thuộm'
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-bt">
        <div className="inner-box-business">
            <div className="box-title">
              <h2>Thông tin doanh nghiệp</h2>
              <div className="right ">
                <i className="fa-solid fa-angle-left"></i>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div className="list-business">
                <div className="swiper-container">
                  <div className="swiper-item">
                    <img src={bus1} alt="" />
                    <Link to="/">Siberian Wellness đặt mục tiêu phủ xanh 100ha rừng tại Việt Nam</Link >
                  </div>
                  <div className="swiper-item">
                    <img src={bus2} alt="" />
                    <Link to="/">MC Academy - học viện đào tạo kỹ năng nói</Link >
                  </div>
                  <div className="swiper-item">
                    <img src={bus3} alt="" />
                    <Link to="/">Tiềm năng đầu tư shophouse ở miền Tây</Link >
                  </div>
                  <div className="swiper-item">
                    <img src={bus4} alt="" />
                    <Link to="/">Bigo Live kỷ niệm 6 năm tại Việt Nam</Link >
                  </div>
                </div>
            </div>     
        </div>   
    </div>
    </>
  );
}

export default TopStory;
