import { PageContainer } from '@ant-design/pro-components';
import SideLeftBar from './module/SideLeftBar';
import SideRightBar from './module/SideRightBar';
import Container from './module/Container';
import React from 'react';
import { Layout } from 'antd';

const { Content, Sider } = Layout;

const siderLeftStyle: React.CSSProperties = {
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const siderRightStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const AppletDesign: React.FC = () => {
  return (
    <PageContainer>
      <Layout>
        <Sider style={siderLeftStyle} width={360}>
          <SideLeftBar />
        </Sider>
        <Content>
          <Container />
        </Content>
        <Sider style={siderRightStyle} width={'20%'}>
          <SideRightBar />
        </Sider>
      </Layout>
    </PageContainer>
  );
};

export default AppletDesign;
