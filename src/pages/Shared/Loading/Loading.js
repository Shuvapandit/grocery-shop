import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
           
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="success" size="md"/>
            <Spinner animation="grow" variant="success" size="sm"/>
            <Spinner animation="grow" variant="success" size="sm" />
            <Spinner animation="grow" variant="success" size="sm"/>
        </div>
    );
};

export default Loading;