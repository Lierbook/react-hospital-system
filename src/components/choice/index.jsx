import React from 'react'
import { Tabs} from 'antd-mobile';
import NavBack from "../navback";
import "./choice.scss";


function ChoiseTab(props) {
    // let [title, setTitle] = useState("");
    // let [tabs, setTabs] = useState({});
    // let [introduce, setIntroduce] = useState([]);

    // function setInfo() {
    //     let { title, tabs, introduce } = props.list
    //     setTitle(title);
    //     setTabs(tabs);
    //     setIntroduce(introduce);
    // }

    // useEffect(() => {
    //     setInfo();
    // });

    //注意，传值是不能超过三层如（props.list.introduce[0]），否则页面会报错
    // console.log(props.jieshao[0])


    return (
        <div className="choiseTab" >
            <NavBack title={props.list.title}></NavBack>
            <Tabs tabs={props.list.tabs}
                initialPage={'t2'}
                tabBarPosition="left"
                tabDirection="vertical"
                className="tabs"
            >
                <div className="zhengwen"  >
                    {props.jieshao[0]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[1]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[2]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[3]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[4]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[5]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[6]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[7]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[8]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[9]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[10]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[11]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[12]}
                </div>
                <div className="zhengwen"  >
                    {props.jieshao[13]}
                </div>
            </Tabs>
        </div>
    )
};

export default ChoiseTab