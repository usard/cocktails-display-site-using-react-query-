import React from 'react';
import { Form, redirect } from 'react-router-dom';
import {toast} from 'react-toastify';
import Wrapper from '../assets/wrappers/NewsLetter';
import axios from 'axios';

const newsLetterURL = 'https://www.course-api.com/cocktails-newsletter';
// export const action = async({request})=> {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const response = await axios.post(newsLetterURL,data);
//   console.log('request from action in newsletter :', response.data);
//   return redirect('/');
// }

export const action = async ({ request }) => {
    const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log('action in newsletter :', data);
  return ;

  // try {
  //   const response = await axios.post(newsLetterURL, data);
  //   toast.success(response.data.msg);
  //   return redirect('/');
  // } catch (error) {
  //   console.log(error);
  //   toast.error(error?.response?.data?.msg);
  //   return error;
  // }
};

const NewsLetter = () => {
  return (
    <Wrapper className='page'>
      {/* <Form method='POST' >
        <h3 style={{textAlign:'center', paddingBottom: '16px'}}>Our news letter</h3>
        <div className='form-row'>
          <label htmlFor="name">Name</label>
          <input name='name' type="text" />
        </div>
        <div className='form-row'>
          <label htmlFor="last name">Last Name</label>
          <input name='lastName' type="text" />
        </div>
        <div className='form-row'>
          <label htmlFor="Email">Email</label>
          <input name='email' type="email" />
        </div>
        <div style={{textAlign:'center', marginTop:'40px'}}>
          <button type='submit' >Submit</button>
        </div>
      </Form> */}

<Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          required
        />
      </div>
      {/* lastName */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          required
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
          required
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        // disabled={isSubmitting}
      >
        {/* {isSubmitting ? 'submitting' :  */}
        'submit'
        {/* // } */}
      </button>
    </Form>

    </Wrapper>
  )
}

export default NewsLetter