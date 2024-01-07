import Image from "next/image";
import Slider from "react-slick";
import { Tab } from "@headlessui/react";
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import { memo, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function partnerSection({ indexData }) {
  var partnerSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [{ id: 0, title: "Our Corporate Tie-Ups" }, { id: 1, title: "Our Loan Partners" }, { id: 2, title: "Media Recognitions" }];

  const [isActive, setActive] = useState(false);

  const showTab = () => {
    setActive(!isActive);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setActive(!isActive);
  };

  let corporateTitle = _.get(indexData, "corporateTitle", []);
  let corporateLogo = _.get(indexData, "corporateLogo", []);

  return (
    <section className="section partner-section pt-0">
      <Tab.Group>
        <div className="container">
          <div className="tab-head-row">
            <p className="tab-button-mobile tab-btn" onClick={showTab}>
              {selectedItem
                ? corporateTitle.find((item) => item.id == selectedItem).title
                : "Our Corporate Tie-Ups"}
              <span
                className={"tab-head-box " + " " + (isActive ? "active" : "")}
              >
                <RiArrowDropDownLine />
              </span>
            </p>

            <Tab.List
              className={
                "tab-header tab-head-box " + " " + (isActive ? "active" : "")
              }
            >
              {corporateTitle.map((item, index) => (
                <Tab
                  className="tab-btn"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                  key={index}
                >
                  {item.title}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <div className="tab-container">
            <div className="tab-box">
              <Tab.Panels>
                {corporateLogo.map((lists, index) => {
                  // console.log(lists.pagepath)
                  return (
                    <Tab.Panel key={index}>
                      <div className="partner-slider">
                        <Slider {...partnerSlider}>
                          {lists.list1.map((logos, index) => {
                            let image = urlConstant.S3_buckets + logos.img
                            return (
                              <a href={logos.path} target={logos.target} key={index}>
                                <div className="logo-box resp-img-box">
                                  <Image priority 
                                    src={image}                                    
                                    fill={true} 
                                    sizes='100vw' 
                                    className="resp-img"
                                    alt={logos.corAlt}
                                  />
                                </div>
                              </a>
                            );
                          })}
                        </Slider>
                      </div>
                    </Tab.Panel>
                  );
                })}
              </Tab.Panels>
            </div>
          </div>
        </div>
      </Tab.Group>
    </section>
  );
}
export default memo(partnerSection)
