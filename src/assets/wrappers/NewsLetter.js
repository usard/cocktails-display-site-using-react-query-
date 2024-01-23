import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
form {
    background: var(--white);
    padding: 1rem;
    position: relative;
    width: 500px;
    max-width: 600px;
}
button {
    display: inline-block;
    background: var(--primary-500);
    width: 97%;
    padding: 0.3rem;
    border:transparent;
    border-radius: 5px;
    color: var(--white);
    font-size: 19px;

}
.form-row {
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.5rem 0 0.5rem;
    label {
        padding-bottom: 0.5rem;
    }
    input {
        height: 1.5rem;
        border: 1px solid var(--grey-200);
        border-radius: 5px;
        background: var(--backgroundColor);
    }
}


`

export default Wrapper;