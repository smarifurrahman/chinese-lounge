import React from 'react';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import Popular from '../Popular/Popular';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Popular></Popular>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;