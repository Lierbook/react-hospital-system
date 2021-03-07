import React, { useState } from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import './tabbottom.scss';



const Tabbottom = (props) => {
    let [hidden, setHidden] = useState(false)
    let [selectedTab, setSelectedTab] = useState("")

    return <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={hidden}
    >
        <TabBar.Item
            title="首页"
            key="home"
            icon={<div
                style={{
                    fontFamily: "icomoon",
                    fontSize: "18px",
                    width: "22px",
                    height: "22px",
                }}
                className="iconfont icon-shouye"
            />
            }
            selectedIcon={<div
                style={{
                    fontFamily: "icomoon",
                    fontSize: "18px",
                    width: "22px",
                    height: "22px",
                }}
                className="iconfont icon-shouye"
            />
            }
            selected={selectedTab === 'home'}
            onPress={() => {
                setSelectedTab("home")
                props.history.push("/")
            }}
            data-seed="logId"
        >
        </TabBar.Item>
        <TabBar.Item
            title="医院信息"
            key="info"
            selected={selectedTab === 'info'}
            onPress={() => {
                setSelectedTab("info")
                props.history.push("/info")
            }}
            icon={
                <div
                    style={{
                        fontFamily: "icomoon",
                        fontSize: "18px",
                        width: "22px",
                        height: "22px",
                    }}
                    className="iconfont icon-yiyuanxinxi"
                />
            }
            selectedIcon={
                <div
                    style={{
                        fontFamily: "icomoon",
                        fontSize: "18px",
                        width: "22px",
                        height: "22px",
                    }}
                    className="iconfont icon-yiyuanxinxi"
                />
            }
            data-seed="logId1"
        >
        </TabBar.Item>
        <TabBar.Item
            title="健康资讯"
            key="news"
            selected={selectedTab === 'news'}
            onPress={() => {
                setSelectedTab("news")
                props.history.push("/news")
            }}
            icon={
                <div
                    style={{
                        fontFamily: "icomoon",
                        fontSize: "18px",
                        width: "22px",
                        height: "22px",
                    }}
                    className="iconfont icon-jiankangzixun"
                />
            }
            selectedIcon={
                <div
                    style={{
                        fontFamily: "icomoon",
                        fontSize: "18px",
                        width: "22px",
                        height: "22px",
                    }}
                    className="iconfont icon-jiankangzixun"
                />
            }
            data-seed="logId2"
        >
        </TabBar.Item>
        <TabBar.Item
            title="我的"
            key="user"
            selected={selectedTab === 'user'}
            onPress={() => {
                setSelectedTab("user")
                props.history.push("/user")
            }}
            icon={
                <div
                    style={{
                        fontFamily: "icomoon",
                        fontSize: "18px",
                        width: "22px",
                        height: "22px",
                    }}
                    className="iconfont icon-wode"
                />
            }
            selectedIcon={
                <div
                    style={{
                        fontFamily: "icomoon",
                        fontSize: "18px",
                        width: "22px",
                        height: "22px",
                    }}
                    className="iconfont icon-wode"
                />
            }
        >
        </TabBar.Item>
    </TabBar>
}

export default withRouter(Tabbottom);