// /* eslint-disable linebreak-style */
// import FavoriteRestoIdb from "../../data/favoriteresto-idb";
// import { createRestoItemTemplate } from "../templates/template-creator";

// const Like = {
//   async render() {
//     return `
//     <section class="content">
//         <div class="latest">
//             <h1>Your Favorite Restaurants</h1>
//             <div class="list" id="resto"></div>
//         </div>
//     </section>
//     `;
//   },

//   async afterRender() {
//     const restaurant = await FavoriteRestoIdb.getAllResto();
//     const restoContainer = document.querySelector("#resto");
//     restoContainer.innerHTML = "";
//     restaurant.forEach((restos) => {
//       restoContainer.innerHTML += createRestoItemTemplate(restos);
//     });
//   },
// };
