export default function Todos(props) {
  // untuk mengecek apakah value dalam props sudh ada atau belum
  console.log('pros', props)

  function deleteHandler(){
    // untuk mengecek apakah btn delete sudah sesuai dngan value props nya.
    console.log('klik deletes', props.text)
  }

  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
        <button className="btn">Edit</button>
          <button className="btn" onClick={deleteHandler} >Delete</button>
        </div>
      </div>
    </>
  );
}