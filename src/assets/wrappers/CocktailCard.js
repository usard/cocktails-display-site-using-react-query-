import styled from 'styled-components';

const Wrapper = styled.article`
 padding: 1rem;
 background-color: white;
 .img-container {
  //  text-align: center;
 }
 img {
  width: 270px;
  height: 200px;
  border-radius: 3px;
  margin-bottom: 20px;
 }
 h4 {
  margin-bottom: 10px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
 }
 h5 {
  margin-bottom: 20px;
 }

 

 
 

`
























// const Wrapper = styled.article`
//   background: var(--white);
//   box-shadow: var(--shadow-2);
//   transition: var(--transition);
//   display: grid;
//   grid-template-rows: auto 1fr;
//   border-radius: var(--borderRadius);
//   :hover {
//     box-shadow: var(--shadow-4);
//   }
//   img {
//     height: 15rem;
//     border-top-left-radius: var(--borderRadius);
//     border-top-right-radius: var(--borderRadius);
//   }
//   .footer {
//     padding: 1.5rem;
//     h4,
//     h5 {
//       margin-bottom: 0.5rem;
//     }
//     h4 {
//       font-weight: 700;
//     }
//     p {
//       margin-bottom: 1rem;
//       color: var(--grey-500);
//     }
//   }
// `;

export default Wrapper;
