import React from "react";
import Image from "next/image";
import Link from "next/link";
const OfferSection = ({ indexData }) => {

  return (
    <section>
      <div className="offer_row conatainer02">
        <div className="offer_box1 resp-img-box">
          {
            indexData.img &&         
            <Image
            loading="lazy"
            src={indexData.img}
            fill={true}
            sizes="100vw"
            className="resp-img"
            alt="flash_sale"
          />
        }
        </div>
        <div className="offer_box2">
          {/* <h3>FLAT {indexData.offerone}% OFF</h3> */}
          {/* <h3>US CMA at India's lowest prices - Enjoy up to 40% off!</h3> */}
          <h3> Enjoy up to 40% OFF on US CMA</h3>

        </div>
        <div className="offer_box3 desktop">
          {/* <h3 style={{ width: "28rem" }}>{indexData.discount}</h3> */}
        </div>
        {/* <div className='offer_box4'>
                    <h3>Promo Code : SALE {indexData.promoCode}</h3>
                </div> */}
        <Link href="/courseDetail/Certified-Management-Accountant" style={{marginTop: "5px"}} className="offer_box5 avail-btn">
          <h3>{indexData.availbtn}</h3>
        </Link>
        <div className="offer_box3 mobile">
          {/* <h3 style={{ width: "28rem" }}>{indexData.discount}</h3> */}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
