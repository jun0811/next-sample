import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>ISR </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 ISR를 통해 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 getStaticProps가 실행되었습니다.`;
  console.log(message);
  return {
    props: { message, revalidate: 10 },
  };
};

export default ISR;
