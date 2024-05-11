import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import formater from "utils/formater";
import { useState } from "react";
import ROUTERS from "utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
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
    </>
  );
};

export default Header;
