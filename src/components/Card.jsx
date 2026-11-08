export default function Card({ children, styleNames }) {
  return (
    <>
      <div className={`card ${styleNames}`}>
        { children }
      </div>
    </>
  );
}
