import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
// import 'antd/lib/Layout/style/css';
// import 'antd/lib/Menu/style/css';
// import 'antd/lib/Icon/style/css';
// import 'antd/lib/Progress/style/css';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {                
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (   
      <Layout style={{ height: '100%' }}>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="0">
          <Link to="/">
              <Icon type="user" />
              <span className="nav-text">首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/ModalWithButton">
              <Icon type="user" />
              <span className="nav-text">右侧边栏</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/Alert">
              <Icon type="video-camera" />
              <span className="nav-text">弹出框</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/HighOrderComponent">
              <Icon type="upload" />
              <span className="nav-text">高阶组件练习</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/SvgTest">
              <Icon type="bar-chart" />
              <span className="nav-text">svg入个小门</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/SvgDemo">
              <Icon type="bar-chart" />
              <span className="nav-text">svg练习</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/MoreTable">
              <Icon type="bar-chart" />
              <span className="nav-text">表格下拉加载</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/Eventemitter">
              <Icon type="bar-chart" />
              <span className="nav-text">事件监听</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100%' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center', minHeight: '100%' }}>
          {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    );
  }
}

export default App;
