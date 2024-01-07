import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCaretForward } from "react-icons/io5";

const BlogNav = () => {
  const [isShow2, setIsShow2] = useState(false);
  const showDwnPopup2 = () => {
    setIsShow2(!isShow2);
  };
  
return(
  <section className="backgroud blog-navbar">
					<div className="hf-container">
						<div className="program_bar">
						<div
                className={"nav-title1" + " " + (isShow2 ? "active" : "")}
                onClick={showDwnPopup2}
              >
								Blogs
								<span>
									<i>
										<IoCaretForward />
									</i>
								</span>
							</div>
							<div
                className={"program-scroll" + " " + (isShow2 ? "active" : "")}
              >
								<div className="programs">
									<Link className=' nav-title' href="/blogs/category/cpa">US CPA</Link>
									<Link className=' nav-title' href="/blogs/category/cma">US CMA</Link>
									<Link className=' nav-title' href="/blogs/category/acca">ACCA</Link>
									<Link className=' nav-title' href="/blogs/category/ea">EA</Link>
									<Link className=' nav-title' href="/blogs/category/cia">CIA</Link>
									<Link className=' nav-title' href="/blogs/category/ifrs">IFRS</Link>
									<Link className=' nav-title' href="/blogs/category/student-corner">Student Corner</Link>
								</div>
							</div>
						</div>
					</div>
				</section>


);
}

export default BlogNav