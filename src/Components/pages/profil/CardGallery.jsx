import "../../../index.css";
export default function CardGallery({
  imgGallery,
  imgIcon1,
  imgIcon2,
  nameGallery,
  dateGallery,
  contentGallery,
}) {
  return (
    <>
      <div className="animate_top sg vk rm xm">
        <div className="c rc i z-1 pg">
          <img className="w-full" src={imgGallery} alt="Blog" />

          <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
            <a className="vc ek rg lk gh sl ml il gi hi">Read More</a>
          </div>
        </div>

        <div className="yh">
          <div className="tc uf wf ag jq">
            <div className="tc wf ag">
              <img src={imgIcon1} alt="User" />
              <p>{nameGallery}</p>
            </div>
            <div className="tc wf ag">
              <img src={imgIcon2} alt="Calender" />
              <p>{dateGallery}</p>
            </div>
          </div>
          <h4 className="ek tj ml il kk wm xl eq lb">
            <a>{contentGallery}</a>
          </h4>
        </div>
      </div>
    </>
  );
}
