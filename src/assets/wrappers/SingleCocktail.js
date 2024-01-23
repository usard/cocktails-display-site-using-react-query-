import styled from "styled-components";

 const Wrapper = styled.div`
  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 30px;
  }
  .data-row {
    display: grid;
    grid-template-columns:  auto 1fr;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;

  }
  .img-container {
    height: 470px;
  }
  img {
    height: 100%;
    border-radius: 5px;
  }

  .attribute {
    display: inline-block;
    padding: 7px;
    border-radius: 3px;
    background: var(--primary-300);
    color: var(--primary-700);
    font-weight: 700;
  }
`
export default Wrapper;