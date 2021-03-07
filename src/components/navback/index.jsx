import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter} from 'react-router-dom'

function NavBack(props) {

    return (<div>
        <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => { props.history.go(-1) }}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
        >{props.title}</NavBar>
    </div>
    )
}

export default withRouter(NavBack);