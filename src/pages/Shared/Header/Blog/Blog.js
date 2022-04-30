import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='container mt-6  mb-5 '>
  <div className='row mt-5 gy-6 '>
      <h3 className='mt-5 mb-5 clr'>AskMe Anything?</h3>
    <div className='col shadow p-3 mb-5 bg-body border border-5 rounded  '>
      <p className='h6'>Q1) Difference between javascript and nodejs? </p>
      <p className='txt'>Ans:JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
    </div>
    <div className='col shadow p-3 mb-5 bg-body border border-5 rounded  '>
      <p className='h6'>Q2) Differences between sql and nosql databases?</p>
      <p className='txt'>Ans:SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
    </div>
    <div className='col shadow p-3 mb-5 bg-body border border-5 rounded '>
      <p className='h6'>Q3)What is the purpose of jwt and how does it work?</p>
      <p className='txt'>Ans:JWT, or JSON Web Token, is an open standard used to share security information between two parties a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;