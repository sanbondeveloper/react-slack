import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Redirect } from 'react-router';
import fetcher from '@utils/fetcher';

// VFC -> children을 안 쓰는 컴포넌트
const Workspace: React.FC = ({ children }) => {
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher, {});

  const onLogout = () => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  };

  // 로그아웃 후 캐시에 유저 정보가 없으면
  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
