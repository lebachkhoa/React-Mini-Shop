import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.scss";

import cat1Image from "assets/users/images/slide/slide-1.png";
import cat2Image from "assets/users/images/slide/slide-2.png";
import cat3Image from "assets/users/images/slide/slide-3.png";
import cat4Image from "assets/users/images/slide/slide-4.png";
import cat5Image from "assets/users/images/slide/slide-5.png";

import feature1Image from "assets/users/images/feature/feature-1.png";
import feature2Image from "assets/users/images/feature/feature-2.png";
import feature3Image from "assets/users/images/feature/feature-3.png";
import feature4Image from "assets/users/images/feature/feature-4.png";
import feature5Image from "assets/users/images/feature/feature-5.png";
import feature6Image from "assets/users/images/feature/feature-6.png";
import feature7Image from "assets/users/images/feature/feature-7.png";
import feature8Image from "assets/users/images/feature/feature-8.png";

const HomePage = () => {
  const slideItem = [
    {
      bgImage: cat1Image,
      description: "Hoa quả khô",
    },
    {
      bgImage: cat2Image,
      description: "Rau củ quả tươi",
    },
    {
      bgImage: cat3Image,
      description: "Sữa",
    },
    {
      bgImage: cat4Image,
      description: "Hải sản",
    },
    {
      bgImage: cat5Image,
      description: "Thịt bò",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const featproducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: feature1Image,
          description: "Xoài",
          price: "200000",
        },
      ],
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: feature1Image,
          description: "Thịt bò nạc",
          price: "200000",
        },
      ],
    },
  };

  const renderFeatureProducts = (data) => {
    const tabList = [];
    const tabPanelList = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].products.forEach((item, itemIndex) => {
        tabPanel.push(<h1 key={itemIndex}>{item.description}</h1>);
      });
      tabPanelList.push(tabPanel);
      console.log(tabPanelList);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanelList.map((item, key) => {
          return (
            <TabPanel key={key}>
              <div className="row">{item}</div>
            </TabPanel>
          );
        })}
      </Tabs>
    );
  };

  return (
    <>
      <div className="container container__categories__slide">
        <Carousel responsive={responsive} className="categories__slide">
          {slideItem.map((item, key) => (
            <div
              className="categories__slide__item"
              style={{ backgroundImage: `url(${item.bgImage})` }}
              key={key}
            >
              <span>{item.description}</span>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container">
        <div className="featured">
          <div className="section__table">
            <h2>Sản phẩm nổi bật</h2>
            {renderFeatureProducts(featproducts)}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
