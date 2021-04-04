export default function Todos(props) {
  // console.log untuk mengecek apakah value dalam props sudh ada atau belum
  console.log('pros', props)
  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
        <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
      </div>
    </>
  );
}