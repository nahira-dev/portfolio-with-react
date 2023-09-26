import shape01 from "../../../assets/shape-01.svg";
import shape02 from "../../../assets/shape-02.svg";
import shape03 from "../../../assets/shape-03.svg";
import shape04 from "../../../assets/shape-04.svg";
import hero from "../../../assets/hero.png";
import "../../../index.css";
export default function Main({ description, phone }) {
  return (
    <>
      <section className="gj do ir hj sp jr i pg">
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
          <img
            src={shape01}
            alt="shape"
            className="xc 2xl:ud-block h t -ud-left-[10%] ua"
          />
          <img src={shape02} alt="shape" className="xc 2xl:ud-block h u p va" />
          <img src={shape03} alt="shape" className="xc 2xl:ud-block h v w va" />
          <img src={shape04} alt="shape" className="h q r" />
          <img src={hero} alt="Woman" className="h q r ua" />
        </div>

        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
              <h1 className="fk vj zp or kk wm wb">
                We specialize in Fullstack Developer
              </h1>
              <p className="fq">{description}</p>

              <div className="tc tf yo zf mb">
                <span className="tc sf">
                  <a href="#" className="inline-block ek xj kk wm">
                    Call us {phone}
                  </a>
                  <span className="inline-block">
                    For any question or concern
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
