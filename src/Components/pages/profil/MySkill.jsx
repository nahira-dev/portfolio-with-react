import { useEffect, useState } from "react";
import "../../../index.css";
import CardSkill from "./CardSkill";
export default function MySkill() {
  const [skillData, setSkill] = useState();
  const icon09 = "../src/assets/shape-09.svg";
  const icon10 = "../src/assets/shape-10.svg";
  const icon11 = "../src/assets/shape-11.svg";
  useEffect(() => {
    fetch("https://65116bce829fa0248e400797.mockapi.io/skill")
      .then((res) => res.json())
      .then(setSkill);
  }, []);
  return (
    <>
      <section id="my-skill" className="i pg ji gp uq">
        <span className="rc h s r vd fd/5 fh rm"></span>
        <img src={icon09} alt="Shape" className="of h y z/2" />
        <img src={icon10} alt="Shape" className="h _ aa" />
        <img src={icon11} alt="Shape" className="of h m ba" />

        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b"></h2>
          </div>
        </div>
      </section>
      <div className="bb ze ki xn yq mb en">
        <div className="wc qf pn xo ng">
          {skillData ? (
            <>
              {skillData.map((skll) => (
                <CardSkill
                  imgSkill={skll.image}
                  titleSkill={skll.title}
                  contentSkill={skll.content}
                  key={skll.id}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
