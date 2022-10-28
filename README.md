#### Website : [https://learning-platform-client-c722d.web.app/](https://learning-platform-client-c722d.web.app/)

#### Libraries & packages used in this project :
- vite (for production build)
- react
- react-dom
- react-hook-form
- react-icons
- react-loader-spinner
- react-router-dom
- react-to-pdf
- react-toastify
- firebase
- tailwindcss
- daisyui
- postcss
- autoprefixer

#### Features :
- Responsive NavBar with scrolling effect
- Implemented toggle dark/light theme
- Login/Register form built with react-hook-form. Implemented password visibility toggle, email regex & 'forgot password' button.
- Firebase Authentication & Hosting. Necessary images & videos are also hosted in firebase. (e.g. I hosted a photo named 1.jpg in public/img folder. So, the image file can be found with https://learning-platform-client-c722d.web.app/img/1.jpg . So, I don't need to host image/video on other hosting sites)
- Used different layout for Course section. Card of all courses, detailed card of courses, and video contents are replaced with each other according to the URL path. But SideBar is not re-rendered. SideBar is added directly in layout (after <Outlet/>). Content URL links are represented in better structured way. Details Cards/Contents are rendered according to user interactions.
- Used react-toastify to inform user in details. Created 3 types of toasts > infoToast, errorToast and successToast.
- Added toggled question-answer Blog & FAQ.
- Added custom ErrorPage in the parent layout element of route paths.
