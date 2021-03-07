import React, { useEffect, useState } from 'react';
import { fetchget } from '../../utils/zgfetch';
import ChoiseTab from '../../components/choice';

function LinChuang() {
    let [introduction, setIntroduction] = useState({});
    let [jieshao, setJieshao] = useState([]);

    //发请求获取轮播数据
    useEffect(() => {
        getIntroduction();
        //清除函数
        return () => {
            setIntroduction = () => { }
            setJieshao = () => { }
        }
    }, [])

    const getIntroduction = async () => {
        let data = await fetchget("/api/linchuang");
        let jieshao = data.introduce
        setIntroduction(data);
        setJieshao(jieshao);
    }

    // console.log(introduction)
    return (
        <div>
            <ChoiseTab list={introduction} jieshao={jieshao}></ChoiseTab>
        </div>
    );
}

export default LinChuang;