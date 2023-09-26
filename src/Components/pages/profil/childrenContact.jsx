export default function ChildrenContact({ label, content }) {
  return (
    <>
      <div className="fb">
        <h4 className="wj kk wm cc">{label}</h4>
        <p>
          <a href="#">{content}</a>
        </p>
      </div>
    </>
  );
}
