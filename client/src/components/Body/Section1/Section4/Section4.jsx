import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AUTHOR_1 } from "../../../images";

const Section4 = () => {
  const [testimony, setTestimony] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:5000/api/testimonies");
      setTestimony(res.data.data.testimony);
    };
    fetch();
  }, [testimony]);
  return (
    <section id="testimonial" className="testimonial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Testimonial</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row testimonial-active">
              {testimony.map((item) => {
                return (
                  <>
                    <div className="col-lg-4" key={item.id}>
                      <div className="single-testimonial mt-30 mb-30 text-center">
                        <div className="testimonial-image">
                          <img src={AUTHOR_1} alt="Author" />
                        </div>
                        <div className="testimonial-content">
                          <p className="text">{item.description}</p>
                          <h6 className="author-name">{item.name}</h6>
                          <span className="sub-title">{item.post}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
