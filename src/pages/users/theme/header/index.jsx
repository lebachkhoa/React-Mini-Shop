import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import formater from "utils/formater";
import { useState } from "react";
import ROUTERS from "utils/router";

const Header = () => {
  const [isShowCategories, setIsShowCategories] = useState(false);

  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: "",
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top__left">
              <ul>
                <li>
                  <MdOutlineEmail />
                  <span>hello@gmail.com</span>
                </li>
                <li>
                  <span>Miễn phí ship đơn từ {formater(200000)}</span>
                </li>
              </ul>
            </div>
            <div className="col-6 header__top__right">
              <ul>
                <li>
                  <a href={"/facebook"}>
                    <AiOutlineFacebook />
                  </a>
                </li>
                <li>
                  <a href={"/insta"}>
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a href="/login">
                    <AiOutlineUser />
                    <span>Đăng nhập</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>Mini Shop</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <a href={menu.path}>{menu.name}</a>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((child, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <a href={child.path}>{child.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{formater(1000000)}</span>
              </div>
              <ul>
                <li>
                  <a href={"/#"}>
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row__categories">
          <div className="col-xl-3 row__categories__productlist">
            <div
              className="row__categories__all"
              onClick={() => setIsShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              <span>Danh sách sản phẩm</span>
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                <li>
                  <a href="#">Thịt tươi</a>
                </li>
                <li>
                  <a href="#">Rau củ</a>
                </li>
                <li>
                  <a href="#">Nước trái cây</a>
                </li>
                <li>
                  <a href="#">Hải sản</a>
                </li>
              </ul>
            )}
          </div>
          <div className="col-xl-9 row__search">
            <div className="row__search__product">
              <div className="row__search__product__form">
                <form action="#">
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button type="submit" className="site-button">
                    Tìm kiếm
                  </button>
                </form>
                <div className="row__search__product__phone">
                  <div className="row__search__product__phone__icon">
                    <AiOutlinePhone />
                  </div>
                  <div className="row__search__product__phone__text">
                    <p>0912-345-678</p>
                    <span>Hỗ trợ 24/7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row__item">
              <div className="row__item__text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả
                  <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <a href="#" className="primary-button">
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
