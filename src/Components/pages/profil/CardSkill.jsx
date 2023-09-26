import "../../../index.css";
export default function CardSkill({ imgSkill, titleSkill, contentSkill }) {
  return (
    <>
      <div className="animate_top sg oi pi zq ml il am cn _m">
        <img src={imgSkill} alt="Icon" />
        <h4 className="ek zj kk wm nb _b">{titleSkill}</h4>
        <p>{contentSkill}</p>
      </div>
    </>
  );
}
