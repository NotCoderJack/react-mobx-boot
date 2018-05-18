import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types'
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
import cookie from '../../../shared/cookie';
import env from '../../../shared/env';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    state={
    }
    logout = () => {
        fetch(env.host + '/logout.do?', {
            method: 'GET',
            credentials: "include",
            header: {
                'Cache-Control': 'no-cache'
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((rs) => {
            if (rs.status == 0 ) {
                cookie.clearAll(); //貌似有时不好用呢
                sessionStorage.clear();
                browserHistory.push('/');
            } else {
                message.error(rs.message, 3);
            }
        });
    }
    handleSelect = ({key}) => {
        if (key === 'setting') {
            browserHistory.push('/settings/userinfo');
        }
        if (key === 'logout') {
            this.logout();
        }
    }
    render() {
        const userName = cookie.get().QLY_DATA_STAT_USERNAME
        const menu = (
          <Menu onClick={this.handleSelect}>
            {/* <Menu.Item key="setting">
              <span>账号设置</span>
            </Menu.Item> */}
            <Menu.Item key="logout">
              <span>退出</span>
            </Menu.Item>
          </Menu>
        );
        return (
            <div className="Header">
                <span className="logo">
                    <img src={logo} />千里眼数据统计
                </span>
                {userName &&
                    <Dropdown overlay={menu}>
                        <div className="user-avatar">
                            <img src={avatar} alt="用户头像"/>
                            <span>{userName}</span>
                            <Icon type="caret-down" style={{ marginLeft: 10 }}/>
                        </div>
                    </Dropdown>
                }
            </div>
        )
    }
}
