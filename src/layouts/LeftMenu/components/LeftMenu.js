import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import Menu from 'antd/lib/menu'
const SubMenu = Menu.SubMenu
import env from '../../../shared/env';
import fetch from '../../../shared/apis';
export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
    }
    state={
        collapsed: false,
        openKeys: ['/' + window.location.pathname.split('/')[1]],
        menuList: localMenuList,
    }
    componentDidMount(){
    }
    menuSelect = (e) =>{
        console.log(e);
        if(e.key === window.location.pathname){
            console.log(e);
            return
        }
        browserHistory.push(e.key)
    }
    handleMenuOpen = (openKeys) => {
        console.log(openKeys);
        this.setState({ openKeys: openKeys.splice(length-1, 1) });
    }
    imageIcon = (item) =>{
        return (
            <span>
                {item.icon && <span className={item.icon}></span>}
                <span>{item.value}</span>
            </span>
        )
    }
    inlineCollapsed = () =>{
        if (this.state.collapsed) {
            document.querySelector(".Main-content").classList.remove('Main-content-small');
        } else {
            document.querySelector(".Main-content").classList.add('Main-content-small');
        }
        this.setState({collapsed:!this.state.collapsed})

    }
    render() {
        console.log('render left menu');
        console.log(window.location.pathname);
        const { openKeys } = this.state;
        const loop = (data,superKey) => data.map((item) => {
            if (item.list) {
                return <SubMenu title={this.imageIcon(item)} key={item.key} >{loop(item.list,item.key)}</SubMenu>;
            }
            return <Menu.Item key={superKey+item.key} >{this.imageIcon(item)}</Menu.Item>
        });
        return (
            <div className={this.state.collapsed ? 'LeftMenu_wrap small' : 'LeftMenu_wrap'}>
                <Menu
                    selectedKeys={[window.location.pathname]}
                    defaultOpenKeys={['/' + window.location.pathname.split('/')[1]]}
                    openKeys={openKeys}
                    inlineCollapsed={this.state.collapsed}
                    mode="inline"
                    onOpenChange={this.handleMenuOpen}
                    onSelect={this.menuSelect}
                >
                    {loop(this.state.menuList,'')}
                </Menu>
                <div className="LeftMenu_bottom" onClick={this.inlineCollapsed}>
                    <span className={this.state.collapsed ? 'iconfont icon-fangdadeerzi-copy':'iconfont icon-fangdadeerzi'}></span>
                    {!this.state.collapsed && <span>收起菜单</span>}
                </div>
            </div>
        )
    }
}
