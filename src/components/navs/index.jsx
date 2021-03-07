import React from 'react'
import './navs.scss'
import { NavBar} from 'antd-mobile';

const Nav= () => {
    return <NavBar
        mode="dark"
        leftContent={<div>
            盛京互联网医院
        </div>}
        rightContent={[
            <span key="1" style={{ fontFamily: "icomoon" }} className="icon-user"></span>
        ]}
    >
        </NavBar>
}

export default Nav;