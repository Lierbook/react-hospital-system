import React from 'react';
import './carousel.scss';
import { Carousel, WingBlank } from 'antd-mobile';

class MyCarousel extends React.Component {

    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    <div className="Carousel-div">
                        <a href="http://www.sj-hospital.org/">
                            <img className="Carousel-img" src="http://sjres.daxiang91.com/elho/M00/00/00/rBzrtV1o9pOAEnGbAAXbUDexMFg374.png" alt="" />
                        </a>
                    </div>
                    <div className="Carousel-div">
                        <a href="http://www.sj-hospital.org/">
                            <img className="Carousel-img" src="http://sjres.daxiang91.com/elho/M00/00/00/rBzrtV1o9x6AaMeNAASN0Wmsvzg607.png" alt="" />
                        </a>
                    </div>
                    <div className="Carousel-div">
                        <a href="http://www.sj-hospital.org/">
                            <img className="Carousel-img" src="http://www.sj-hospital.org/upload/20170726/201707261523431418688449.jpg" alt="" />
                        </a>
                    </div>
                </Carousel>
                <div>
                    <i className="iconfont icon-gaokaobei"></i>
                    <Carousel
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite
                        className="Carousel2"
                    >
                        <div className="v-item">医院党委召开2020年度处级党员领导干部民主生活会</div>
                        <div className="v-item">医院召开2020年度党总支书记述职评议会</div>
                        <div className="v-item">医院召开2021年医疗新技术立项答辩会</div>
                        <div className="v-item">冈比亚总统点赞中国辽宁抗疫医疗队！</div>
                        <div className="v-item">干诊科病房的这一幕温暖百岁老人</div>
                    </Carousel>
                </div>
            </WingBlank>
        );
    }
}

export default MyCarousel;