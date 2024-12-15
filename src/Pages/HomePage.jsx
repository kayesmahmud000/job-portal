import React from 'react';
import Banner from '../Components/Banner';
import LeatestJob from '../Components/LeatestJob';

const HomePage = () => {
    return (
        <div >
          <Banner></Banner>

          <section className='container mx-auto my-10'>
            <LeatestJob></LeatestJob>
          </section>
        </div>
    );
};

export default HomePage;