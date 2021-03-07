import React, { useState, useEffect } from 'react'
import { List, PullToRefresh } from 'antd-mobile';
import './list.scss'


const Item = List.Item;
const Brief = Item.Brief;


const NewsList = (props) => {

    let [refreshing, setRefreshing] = useState(false)
    let [down, setDown] = useState(false)
    let [height, setHeight] = useState(document.documentElement.clientHeight)

    //只要父组件给当前组件传递了新的props.list，那么就把当前PullToRefresh的状态变为false
    useEffect(() => {
        setRefreshing(false)
        // console.log(props.list, "xxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    }, [props.list])

    return <div>
        <PullToRefresh
            //拉动多少回触发刷新
            distanceToRefresh={3}
            //指定样式
            style={{
                height: height - 100,
                overflow: 'auto',
            }}
            //指定提示文字
            indicator={down ? {} : { deactivate: '上拉可以刷新' }}
            //指定拉动方向
            direction={down ? 'down' : 'up'}
            //PullToRefresh是否正在刷新
            refreshing={refreshing}
            //刷新之后回调函数
            onRefresh={() => {
                console.log("正在刷新")
                setRefreshing(true)
                // setTimeout(() => {
                //     setRefreshing(false)
                // }, 1000);
                props.changeIndex && props.changeIndex();
            }}
            getScrollContainer={() => (undefined)}
        >
            <List renderHeader={() => <div className="guess">健康资讯</div>} className="my-list">
                {
                    props.list.map(item => {
                        return <a href={item.newsUrl}>
                            <Item key={item.newId} align="top" thumb={item.newsImgeUrl} multipleLine onClick={() => { console.log('click', item.newsUrl) }}>
                                {item.title}
                                <Brief>
                                    <p>{item.newsTypeName}</p>
                                    <p className="data">日期{item.publishDate} </p>
                                    <p className="readed">阅读:{item.readAmount}</p>
                                </Brief>
                            </Item>
                        </a>
                    })
                }
            </List>
        </PullToRefresh>
    </div>
}

export default NewsList