import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;

  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return (
    <div>
      <div>Post</div>
      <p>{`posts/${id}에 대응하는 페이지입니다. `}</p>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];

  return { paths, fallback: false }; // fallback이 true이면 데이터 맞춰서 동적 라우팅이 들어간다.
};

interface PostParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context
) => {
  return {
    props: {
      id: context.params!["id"],
    },
  };
};

export default Post;
