import React from 'react';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Popular></Popular>
        </div>
    );
};

export default Home;