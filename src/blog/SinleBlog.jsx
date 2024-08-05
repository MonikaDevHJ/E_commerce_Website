import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" }
];

const SinleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  console.log(id);

  const result = blog.filter(b => b.id === Number(id));
  console.log(result);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog/Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map(item =>
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  className="w-100"
                                  alt=""
                                />
                              </div>

                              <div className="post-content">
                                <h3>
                                  {item.title}
                                </h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) =>
                                      <li key={i}>
                                        <i className={val.iconName} />
                                        {val.text}
                                      </li>
                                    )}
                                  </ul>
                                </div>
                                <p>
                                  A paragraph is a series of sentences that are
                                  organized and coherent, and are all related to
                                  a single topic. Almost every piece of writing
                                  you do that is longer than a few sentences
                                  should be organized into paragraphs.
                                </p>
                                <blockquote>
                                  <p>
                                    A paragraph is a series of sentences that
                                    are organized and coherent, and are all
                                    related to a single topic. Almost every
                                    piece of writing
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  A paragraph is a series of sentences that are
                                  organized and coherent, and are all related to
                                  a single topic. Almost every piece of writing
                                  you do that is longer than a few sentences
                                  should be organized into paragraphs.
                                  <img
                                    src="/src/assets/images/blog/single/01.jpg"
                                    alt=""
                                  />
                                </p>
                                <p>
                                  A paragraph is a series of sentences that are
                                  organized and coherent, and are all related to
                                  a single topic. Almost every piece of writing
                                  you do that is longer than a few sentences
                                  should be organized into paragraphs.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/PGuKjkdGrEI?si=l9Fsw5TUSEUrluKb"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play" />
                                  </a>
                                </div>
                                <p>
                                  A paragraph is a series of sentences that are
                                  organized and coherent, and are all related to
                                  a single topic. Almost every piece of writing
                                  you do that is longer than a few sentences
                                  should be organized into paragraphs.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>

                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) =>
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName} />
                                        </a>
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left">
                              Previous Blog
                            </i>
                          </a>
                          <a href="#" className="title">
                            Evisculate Parralel Process via Technica Sound
                            Models Authoritative
                          </a>
                        </div>

                        <div className="right">
                          <a href="#" className="prev">
                            <i className="ico font-double-right">
                              Previous Blog
                            </i>
                          </a>
                          <a href="#" className="title">
                            Evisculate Parralel Process via Technica Sound
                            Models Authoritative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            

            <div className="col-lg-4 col-12">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinleBlog;
