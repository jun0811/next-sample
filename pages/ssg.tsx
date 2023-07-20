import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  const router = useRouter();
  console.log(router.query.keyword);

  return (
    <div>
      <Head>
        <title>SSG </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 SSG를 통해 생성된 페이지입니다.</p>
        <p>{message}</p>
        <h2>{router.query.keyword}</h2>
        <Link href="/ssr">SSR</Link>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 getStaticProps가 실행되었습니다.`;
  console.log(message);
  return {
    props: { message },
  };
};

export default SSG;
