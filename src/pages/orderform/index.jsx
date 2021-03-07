import React, { useState, useEffect } from 'react'
import { List} from 'antd-mobile';
import { fetchget } from '../../utils/zgfetch';
import moment from 'moment';
import './orderform.scss'
import NavBack from "../../components/navback";


const Item = List.Item;
const Brief = Item.Brief;

const OrderForm = (props) => {

    let [orderform, setOrderForm] = useState([])

    useEffect(() => {
        getOrderForm();
    }, []);

    const getOrderForm = async () => {
        let orderform = await fetchget("/api/orderform")
        console.log(orderform, typeof orderform, "111111111111111111111")
        setOrderForm(orderform)
    }


    //由于服务器把数组包装成对象发回来，所以需要将对象转化为数组
    return orderform.length && <div>
        <NavBack title="预约记录"></NavBack>
        <List renderHeader={() => <div className="guess">订单查询</div>} className="orderList">
            {
                orderform.map(item => {
                    return <Item key={item.index} align="top" thumb={item.newsImgeUrl} multipleLine>
                        {item.keshi}
                        <Brief>
                            <p>{item.type}</p>
                            <p className="doctor">医生:{item.doctor}</p>
                            <p className="data">日期{moment(item.date).format('YYYY-MM-DD')}</p>                           
                            <p className="time">时间:{moment(item.time).format('HH:MM')}</p>                            
                        </Brief>
                    </Item>
                })
            }
        </List>
    </div>
}

export default OrderForm