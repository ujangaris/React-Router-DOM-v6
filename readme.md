# React Router DOM V6

## Install React Vite

    Todo:
        1.  npm create vite@latest
            - nama project: react-router-dom-v6
            - javascript
            - react

## Install React Router DOM V6

    Todo:
        1.  npm install react-router-dom-v6

## Configurasi Route

    Todo:
        1.  App.jsx
            - pasang BrowserRouter as Router
            - pasang Routes
            - pasang Route dan definisikan path untuk halaman dan file mana yang mau kita render
        2.  pages/Home.jsx
            - buat functional component Home
        3.  pages/Login.jsx
            - buat functional component Login
        4.  pages/Detail.jsx
            - buat functional component Detail
        5.  pengujian pada browser:
            - Home => http://localhost:5173/
            - Detail => http://localhost:5173/<id>
                pada <id> bisa isi dengan angka 1-100 dsb...
            - Login => http://localhost:5173/login

## Navigation

    Todo:
        1.  App.jsx
            - pasang Link untuk halaman Home & Detail
            - definisikan path apa  yang kita tuju bisa menggunakan props to
            - hapus import dari App.css
        2.  Home.jsx
            - deklarasikan hoook users untuk data fake apinya
            - data fake api diambil dari jsonplaceholder :https://jsonplaceholder.typicode.com/users
            - pasang useNavigate dari react-router-dom
            - gunakan useEffect untuk menampilkan data users
            - pasang handleGoToDetail untuk menangkap nilai dari id,
              agar bisa kehalaman detail sesuai id dari user
            - gunakan map untuk mencetak nilai dari users
        3.  main.jsx
            - hapus import dari index.css
        4.  pengujian pada browser:
            - Home => http://localhost:5173/
                - klik  button go to detail

## Reading URL Params

    Todo:
        1.  Detail.jsx
            - pasang useparams dari react router dom
            - pasang hooks user
            - get data user berdasarkan id
            - cetak data jsonnya kedalam browser

## Nested Route

    Todo:
        1.  App.jsx
            - membuat children dari component Details
            - noted: jangan diberikan slice karna kalau children tidak perlu
        2.  components/Post.jsx
            - buat functional component Post
        3.  components/Product.jsx
            - buat functional component Product
        4.  pages/Detail.jsx
            - Pasang Outlet dari react router dom
            - buat navigasi untuk children Detail
        5.  pengujian pada browser:
            - Home => http://localhost:5173/
                - klik  button go to detail
                - kemudian klik menu post / product
