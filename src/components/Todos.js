import React, {useState} from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

export default function Todos(props) {
  const [modalOpen, setModalOpen] = useState(false)
  console.log('modalOpen', modalOpen)
  console.log('setModalOpen', setModalOpen)

  // untuk mengecek apakah value dalam props sudh ada atau belum
  console.log('pros', props)

  function deleteHandler(){
    setModalOpen(true)
  }

  function cancelModal(){
    setModalOpen(false)
  }

  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
        <button className="btn">Edit</button>
          <button className="btn" onClick={deleteHandler} >Delete</button>
        </div>
        {modalOpen && <Modal onCancel={cancelModal} onConfrim={cancelModal} />}
        {modalOpen && <Backdrop onCancel={cancelModal} />}
      </div>
    </>
  );
}