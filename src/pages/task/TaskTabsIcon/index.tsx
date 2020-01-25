import React from "react";
import styles from "./index.less";
import {Tabs} from "antd";
import {AndroidOutlined, AppleOutlined} from "@ant-design/icons";

const {TabPane} = Tabs;

export default () => (
  <div className={styles.container}>
    <div id="components-tabs-demo-icon">
      <Tabs animated={false}>
        <TabPane
          tab={
            <span>
              <AppleOutlined/>
              Tab 1
            </span>
          }
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined/>
              Tab 2
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  </div>
);
