export default function Modal(props) {
    function confirmHandle() {
        props.onConfrim()

    }

    function cancelHandle() {
        props.onCancel()
    }
    return (
        <div className="modal">
            <p>Apakah anda yakin ?</p>
            <button onClick={cancelHandle} className="btn btn--alt">Cancel</button>
            <button onClick={confirmHandle} className="btn">Ya, saya yakin</button>
        </div>
    )
}
