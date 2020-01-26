import {PageHeaderWrapper} from '@ant-design/pro-layout';
// import React, { useState, useEffect } from 'react';
// import { Spin } from 'antd';
import styles from './index.less';
import React from 'react';

export default () => {
  /* const [loading, setLoading] = useState<boolean>(true);
   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, []);*/
  return (
    <PageHeaderWrapper content="在这里可以下载待猜测口令字典" className={styles.main}>
      {/*      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large"></Spin>
      </div>*/}
    </PageHeaderWrapper>
  );
};
