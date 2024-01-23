import styled from 'styled-components';

const Wrapper = styled.div`
margin-top: 3rem;
form {
  background: var(--white);
  padding: 2rem;
  width: 700px;
  max-width: 70%;
  min-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  }
  input {
    height: 2rem;
    // border: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button {
    cursor: pointer;
    padding: 0 1rem;
    background: var(--primary-500);
    color: var(--white);
    border: transparent;
    font-size: 1.2rem;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
  }
  
`

// const Wrapper = styled.div`
//   margin-bottom: 6rem;
//   .form {
//     display: grid;
//     grid-template-columns: 1fr auto;
//   }
//   .form-input {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .btn {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
// `;

export default Wrapper;
