## Documentasi 
    - Aplikasi ini sebagai latihan pribadi dalam mengupgrade skill react.
    - Selain itu, saya juga membuat sebuah repository mengenai belajar next js. 
    - Documentasi saya coba tulis step by step

### Log Documentasi
1. Setup new project
2. Dalam aplikasi ini kita akan membuat aplikasi yang lebih kompleks, namun jika dilihat dari segi skala masih dalam tahap fundamental. Insya allah, materi project ini cukup bagus untuk memperkuat fundamental react

##### Add Route
2. Sekarang kita memasuki pembahasan yang lebih dalam lagi, yang akan kita bahas bagaimana cara membuat route dalam react. Nah, utk hal itu, kita perlu install package <strong>react-router-dom</strong>. Klik yarn add nama_package
3. Kemudian kita buat folder pages didalam src dengan terdapat 3 file <em>AllMeetup.js, Favorites.js, NewMeetup.js </em>
  - AllMeetup.js
  ```js
  import React from 'react'
  export default function AllMeetup() {
      return (
          <div>
              <p>All Meetups page</p>
          </div>
      )
  }
  ```
  - Favorites.js
  ```js
  import React from 'react'
  export default function Favorites() {
      return (
          <div>
              <p>Favorites Meetups page</p>
          </div>
      )
  }
  ```
  - NewMeetup.js
  ```js
  import React from 'react'
  export default function NewMeetup() {
      return (
          <div>
              <p>new Meetups page</p>
          </div>
      )
  }
  ```
4. Selanjutnya, akan kita implemantasikan routernya, kali ini di dalam index.js