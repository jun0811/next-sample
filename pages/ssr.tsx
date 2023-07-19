import React from "react";

import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>SSR </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 SSR를 통해 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행되었습니다.`;
  console.log(message);
  return {
    props: { message },
  };
};

export default SSR;
