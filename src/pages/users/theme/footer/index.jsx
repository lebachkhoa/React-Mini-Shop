import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__about">
              <h1 className="footer__about__logo">Mini Shop</h1>
              <ul>
                <li>Địa chỉ: Điêu Lương, Cẩm Khê, Phú Thọ</li>
                <li>Phone: 0912-345-678</li>
                <li>Email: hello@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
                <li>
                  <a href="#">Thông tin về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Sản phẩm kinh doanh</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Thông tin tài khoản</a>
                </li>
                <li>
                  <a href="#">Giỏ hàng</a>
                </li>
                <li>
                  <a href="#">Danh sách ưa thích</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer__widget">
              <h6>Thông tin khuyến mãi</h6>
              <p>Đăng kí nhận thông tin tại đây</p>
              <form action="#">
                <div>
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="button-submit">
                    Đăng kí
                  </button>
                </div>
                <div className="footer__widget__social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
