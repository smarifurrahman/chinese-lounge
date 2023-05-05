import React from 'react';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import Popular from '../Popular/Popular';
import Subscribe from '../Subscribe/Subscribe';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Popular></Popular>
            <Featured></Featured>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;