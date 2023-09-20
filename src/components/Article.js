// import React from "react";
// import Img from "./imgArt.jpeg";
// const Article = () => {
//   return (
//     <>
//       <div className="py-5">
//         <div className="container container-inner d-flex p-3 justify-content-around">
//           <div className="align-self-center w-50 me-5">
//             <h1 className="text-capitalize ">
//               We have many year experience in consultent business
//             </h1>
//             <p className="text-justify">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//               distinctio maxime illum corporis laboriosam eos doloribus expedita
//               aliquam. Vero nam voluptate necessitatibus libero sint recusandae
//               non hic? Dicta, aspernatur at?
//             </p>
//             <a href="#" className="btn btn-primary px-4 py-2 fs-6 fw-bold mt-4">
//               Start Now
//             </a>
//           </div>
//           <div className="article-img-box">
//             <div className="d-flex justify-content-end align-content-center">
//               <p className="btn-play d-flex justify-content-center align-items-center">
//                 <i class="fa-solid fa-play"></i>
//               </p>
//               <img
//                 src={Img}
//                 alt="hero-image"
//                 className="img-fluid img-sm img-md-6"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Article;

import React from "react";
import Img from "./imgArt.jpeg";

const Article = () => {
  return (
    <>
      <div className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="text-capitalize">
                We have many years of experience in consultant business
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, distinctio maxime illum corporis laboriosam eos
                doloribus expedita aliquam. Vero nam voluptate necessitatibus
                libero sint recusandae non hic? Dicta, aspernatur at?
              </p>
              <a
                href="#"
                className="btn btn-primary px-4 py-2 fs-6 fw-bold mt-4"
              >
                Start Now
              </a>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end align-items-center">
                <p className="btn-play d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-play"></i>
                </p>
                <img src={Img} alt="hero-image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
