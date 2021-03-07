import React from 'react'
import { Tabs, Badge, Grid } from 'antd-mobile';
import './tabs.scss';

const tabs = [
    { title: <Badge >门诊</Badge> },
    { title: <Badge >住院</Badge> },
    { title: <Badge >其他</Badge> },
];
const icon1 = [{
    text: "预约挂号",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/yuyueguahao@2x.png",
    url: "/order",
}, {
    text: "自助核酸检测",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/hesuanjiance@2x.png",
    url: "/order",
}, {
    text: "预约记录",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/yuyuejilu@2x.png",
    url: "/orderform",
}, {
    text: "报告查询",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/baogaochaxun@2x.png",
    url: "/result",
}, {
    text: "门诊缴费",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/menzhenjiaofei@2x.png",
    url: "/result",
}, {
    text: "候诊排队",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/houzhenpaidui@2x.png",
    url: "/result",
}, {
    text: "智能导诊",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/zhinengdaozhen@2x.png",
    url: "/result",
}, {
    text: "处方流转",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/icon_cflz@2x.png",
    url: "/result",
}];
const icon2 = [{
    text: "手术查询",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/shoushuchaxun@2x.png",
    url: "/result",
}, {
    text: "住院管理",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/zhuyuanguanli@2x.png",
    url: "/result",
}, {
    text: "病历复印",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/blfy.png",
    url: "/result",
}, {}, {}];

const icon3 = [{
    text: "健康百科",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/jiankangbaike@2x.png",
    url: "/result",
}, {
    text: "帮助与反馈",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/bangzhufankui@2x.png",
    url: "/result",
}, {
    text: "院内导航",
    icon: "http://sjoss.daxiang91.com/sj_mini/images/home/yndh@2x.png",
    url: "/result",
}, {}, {}]
const MyTabs = (props) => (
    <div>
        <Tabs tabs={tabs}
            initialPage={0}
        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
                <Grid data={icon1} hasLine={true} onClick={_el => { props.history.replace(_el.url) }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
                <Grid data={icon2} hasLine={true} onClick={_el => { props.history.replace(_el.url) }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
                <Grid data={icon3} hasLine={true} onClick={_el => { props.history.replace(_el.url) }} />
            </div>
        </Tabs>
    </div>
);

export default MyTabs;