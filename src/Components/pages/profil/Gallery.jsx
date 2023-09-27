import { useEffect, useState } from "react";
import "../../../index.css";
import CardGallery from "./CardGallery";
export default function Gallery() {
  const iconMan = "./icon-man.svg";
  const iconCalendar = "./icon-calender.svg";
  const [galleryData, setGallery] = useState();
  useEffect(() => {
    fetch("https://65116bce829fa0248e400797.mockapi.io/gallery")
      .then((res) => res.json())
      .then(setGallery);
  }, []);
  return (
    <>
      <section id="gallery" className="ji gp uq">
        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b"></h2>
            <p className="bb on/5 wo/5 hq"></p>
          </div>
        </div>

        <div className="bb ye ki xn vq jb jo">
          <div className="wc qf pn xo zf iq">
            {galleryData ? (
              <>
                {galleryData.map((gld) => (
                  <CardGallery
                    key={gld.id}
                    imgGallery={gld.image}
                    imgIcon1={iconMan}
                    imgIcon2={iconCalendar}
                    nameGallery={gld.name}
                    dateGallery={gld.date}
                    contentGallery={gld.content}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
