// 业务组件 src/components/AuthButton/index.tsx

import React, { FC, useEffect, useState } from "react";
import { Button, ButtonProps, message } from "antd";
import classnames from "classnames";
import styles from "./styles.module.less";
import { UserRoleType, getUserRole } from "apis/user";

type Props = ButtonProps;

// 身份文案
const mapper: Record<UserRoleType, string> = {
  user: "普通用户",
  admin: "管理员",
};

// 组件
const AuthButton: FC<Props> = (props) => {
  const { children, className, ...restProps } = props;
  const [userType, setUserType] = useState<UserRoleType>();

  // 获取用户身份并设置
  const getLoginState = async () => {
    const res = await getUserRole();
    setUserType(res.data.userType);
  };

  useEffect(() => {
    getLoginState().catch((e) => message.error(e.message));
  }, []);

  return (
    <Button {...restProps} className={classnames(className, styles.authButton)}>
      {mapper[userType!] || ""}
      {children}
    </Button>
  );
};

export default AuthButton;
