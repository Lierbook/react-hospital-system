import React from 'react'
import { Result, Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import './result.scss';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;


function MyResult(props) {
    

    return (
        <div className="myresult">
            <Result
                img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                title="无法完成操作"
                message="功能尚未完善，敬请期待"
            />
            <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />} onClick={() => { props.history.push("/")}} >返回首页</Button>
        </div>
    );
}

export default withRouter(MyResult);




