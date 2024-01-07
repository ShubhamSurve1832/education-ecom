import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import BlogNav from "./blogNav";
import Aside from "../../components/AsideBox";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import secureLocalStorage from "react-secure-storage";
import Spinner from "../../components/comman/Spinner";
import { S3_buckets, urlConstants } from "../../constants/urlConstants";
import { usePathname } from "next/navigation";

export default function page() {
//TABLE RESPONSIVE DYNAMIC
useEffect(()=>{
  document.querySelectorAll('[style]:not([class^=overlay])').forEach(el => el.removeAttribute('style'));
  
  var el = document.getElementsByTagName('table');
  for (let i = 0; i < el.length; i++) { 
     var wrapper = document.createElement('div');
     wrapper.className = "custom-scrollbar";
     el[i].parentNode.insertBefore(wrapper, el[i]);
     wrapper.appendChild(el[i]);
  }
})

  // Spinner
  const [show, setShow] = useState(false);

  let router = useRouter();

  let Token = secureLocalStorage.getItem("TK");

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.query.category, router.isReady]);

  const [blogdata, setblogdata] = useState({});
  // console.log("blogs data",blogdata)
  const fetchData = async () => {
    try {
      let res = await axios.post(
       "https://devapi.simandhareducation.com/posts/getBlogs",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${Token}`,
          },
        }
      );

      setblogdata(() => {
        return res.data.filter((data, ind) => {
          if (data.title[data.title.length - 1] == "?") {
            return (
              data.title.toUpperCase().slice(0, data.title.length - 1) ==
              router.query.BlogDetail.split("-").join(" ").toUpperCase()
            );
          } else {
            return (
              data.title.split(" ").join("").split("–").join("").split("?").join("").split(":").join("").split("-").join("").split("|").join("").split("’").join("").split(",").join("").split(".").join("").split("&").join("").split("$").join("").toUpperCase() ==
              router.query.BlogDetail.split("-").join("").split("?").join("").split("’").join("").split("|").join("").split("–").join("").split(":").join("").split(",").join("").split("&").join("").split("$").join("").toUpperCase()
            );
          }
        })[0];
      });

      setShow(true);
      //  console.log(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  // if(blogdata===undefined){
  //   setTimeout(() => {
  //       router.replace('/blogs')
  //   }, 2000);
  // }

  // console.log(blogdata);
 const coninical = usePathname()
// console.log(coninical)

  return (
    <>
      {blogdata ? (
        <>
          <Head>
            {/* <title>{blogdata.title && blogdata.title}</title> */}
          <link rel="canonical" href={coninical} />
          </Head>

          <div className="blog-header">
            <Header />
            <BlogNav />
          </div>

          <section className="blog-detail-section">
            <div className="container-l blogContainer">
              <div className="leftBox">
                {show ? (
                  <>
                    <Link
                      href={`../blogs/category/student-corner/${blogdata.category}`}
                      className="page"
                    >
                      {blogdata.category && blogdata.category}
                    </Link>
                    <h1>{blogdata.title && blogdata.title}</h1>
                    <p className="date">
                      {blogdata.createdAt &&
                        new Date(blogdata.createdAt)
                          .toString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                    </p>
                    <p>
                      <img
                        src={`${S3_buckets}${
                          blogdata.image && blogdata.image[0] !== "/"
                            ? `/${blogdata.image}`
                            : blogdata.image
                        }`}
                        alt=""
                        className="resp-img"
                      />
                    </p>

                    {blogdata.content && parse(blogdata.content)}
                  </>
                ) : (
                  <Spinner />
                )}
              </div>

              <div className="rightBox">
                <Aside />
              </div>
              <div className="clear"></div>
            </div>
          </section>

          <Footer />
        </>
      ) : (
        <h1 className="text-center m-4">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt="Loader"
          />
        </h1>
      )}

      {/* {parse(content)} */}
    </>
  );
}
