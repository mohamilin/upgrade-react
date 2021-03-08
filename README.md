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
import React from 'react'
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
