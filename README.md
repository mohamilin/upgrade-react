## Documentasi 
    - Aplikasi ini sebagai latihan pribadi dalam mengupgrade skill react.
    - Selain itu, saya juga membuat sebuah repository mengenai belajar next js. 
    - Documentasi saya coba tulis step by step

### Log Documentasi
##### 
1. Hapus file App.test.js, App.css, dan logo
2. Perubahan kode css dalam index.css : line 20 - 92
3. Perubahan kode App.js
```js
    function App() {
        return (
            <div>
            <h1>My Todos</h1>
            <div className="card">
                <h2>Title</h2>
                <div className="actions">
                    <button className="btn">Delete</button>
                </div>
            </div>
            </div>
        );
    }
    export default App;
```
##### Re-using components
4. Membuat file Todos.js dalam src > components agar code yang dibuat reusable, dalam case ini saya akan memindahkan beberapa code dalam App.js ke Todos.js dan mengimport Todos.js ke dalam App.js, hal ini dilakukan agar code dalam Todos.js dapat reusable.
    Sehingga code dalam Todos.js dan App.js sebagai berikut :
- Code in Todos.js
```js
export default function Todos() {
  return (
    <>
      <div className="card">
        <h2>Title</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </>
  );
}
```
- Code in App.js
```js
import Todos from "./components/Todos";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todos/>
    </div>
  );
}
export default App;
```     
##### Passing Data with props and dynamic
5. Menggunakan props agar data lebih dinamis, dalam file App.js kita perlu menambahkan atribute <strong> text </strong> dalam component <Todos/> dengan value sebagaimana yang kita inginkan. contohnya : <Todos text="Learn React"/>, kemudian kita berikan paramater obj berupa props dalam src > components > Todos.js
Sehingga :
  - App.js
  ```js
  return (
      <div>
      <h1>My Todos</h1>
      <Todos text="Learn React" />
      <Todos text="Learn NodeJs" />
      <Todos text="TodosAPP" />

    </div>
  );
  ```
  - Todos.js

  ```js
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

  ```
##### Handling events
6. Dalam Todos.js terdapat button edit dan delete, kini saatnya kita akan menjadikan button tersebut berfungsi biasa disebut dengan <strong>handling events </strong>. Kita akan menggunakan fungsi onClick agar ketika kita klik buttonnya berfungsi. Kita berikan value dalam onClick berupa <strong>dynamic expression </strong> yang berupa <strong> arrow function " () => {} " </strong> atau dengan membuat function diluar return
  - Todos.js
  ```js
  export default function Todos(props) {
    ...
  function deleteHandler(){
    // untuk mengecek apakah btn delete sudah sesuai dngan value props nya.
    console.log('klik deletes', props.text)
  }
    return (
      <>
        <div className="card">
          .....
            <button className="btn" onClick={deleteHandler} >Delete</button>
          </div>
        </div>
      </>
    );
  }
  ```
##### Adding More Components
7. Pada point no 6, kita telah membuat button delete, kini kita akan mencoba membuat modal sebagai konfirmasi. Buat dalam folder component dengan nama <strong>Modal.js</strong> dan <strong>Backdrop.js</strong>
  - Modal.js
  ```js
  import React from 'react'
  export default function Modal() {
      return (
          <div className="modal">
              <p>Apakah anda yakin ?</p>
              <button className="btn btn--alt">Cancel</button>
              <button className="btn">Ya, saya yakin</button>
          </div>
      )
  }
  ```
  - Backdrop.js
  ```js
  import React from 'react'
  export default function Backdrop() {
      return (
          <div className="backdrop"/>
      )
  }
  ```

8. Selanjutnya, kita import <strong>Modal.js</strong> dan <strong>Backdrop.js</strong> ke dalam <strong>App.js</strong>. Yeah... kita sudah meletakkan <strong>Modal.js</strong> dan <strong>Backdrop.js</strong> dalam <strong>App.js</strong>. Tentunya untuk modal belum berfungsi sepenuhnya. baru tampilannya saja
  - App.js
  ```js
  import Backdrop from "./components/Backdrop";
  import Modal from "./components/Modal";
  import Todos from "./components/Todos";
  function App() {
    return (
      <div>
        <h1>My Todos</h1>
        <Todos text="Learn React" />
        <Todos text="Learn NodeJs" />
        <Todos text="TodosAPP" />
        <Modal />
        <Backdrop/>
      </div>
    );
  }

  export default App;
  ```
##### State
10. Nah, kita berkenalan dengan state terlebih dahulu ya.. konsep [state](https://reactjs.org/docs/state-and-lifecycle.html), 
11. Kita gunakan library dari react yang bernama <strong>useState</strong> untk bikin main2x dengan state hehehe. Selanjutnya, kita buat state baru dalam Todos.js dengan menggunakan useState, contoh dari bikin state :
```js
const [modalOpen, setModalOpen] = useState(
  // isi dengan kondisi, 
  // dalam kasus ini akan kita isi dengan false
  )
```
12. sehingga code yang kita dapat
  - Todos.js
  ```js
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
  ```

  - Modal.js
  ```js
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
  ```

  - Backdrop.js
  ```js
  import React from 'react'
  export default function Backdrop(props) {
      console.log('klik cancel', props.onCancel)
      return (
          <div onClick={props.onCancel} className="backdrop"/>
      )
  }
  ```
