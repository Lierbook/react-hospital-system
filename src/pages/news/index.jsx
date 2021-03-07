import React, { useState, useEffect } from 'react';
import { fetchget } from '../../utils/zgfetch';
import NewsList from '../../components/list';
import Tabbottom from '../../components/tabbottom';



function News() {
    let [newsList, setNewsList] = useState([]);
    let [pageIndex, setPageIndex] = useState(1);

    //每当pageIndex发生改变的时候会触发getNews方法的执行
    useEffect(() => {
        getNews();
        return () => {
            setNewsList = () => { };
            setPageIndex = () => { }
        }
    }, [pageIndex])

    const getNews = async () => {
        const { data: news } = await fetchget(`/api/news/${pageIndex}`);
        setNewsList([...newsList, ...news])
    }

    const changeIndex = () => {
        setPageIndex(++pageIndex)
    }
    return (
        <div>
            <NewsList list={newsList} changeIndex={changeIndex}></NewsList>
            <Tabbottom></Tabbottom>
        </div>
    );
}

export default News;