import React, { useEffect } from 'react';
import { WhiteSpace } from 'antd-mobile';
import { fetchget } from '../../utils/zgfetch';
import MyCarousel from '../../components/carousel';
import MyTabs from '../../components/tabs';
import Tabbottom from '../../components/tabbottom'

function Home(props) {

    useEffect(() => {
        getCarousel();
    }, []);

    const getCarousel = async () => {
        let { ...data } = await fetchget("/api/carousel")
    }

    return (
        <div>
            <MyCarousel></MyCarousel>
            <WhiteSpace />
            <MyTabs history={props.history}></MyTabs>
            <Tabbottom ></Tabbottom>
        </div>
    );
}

export default Home;