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
        name: "lsj",
      },
    },
    {
      params: {
        id: "2",
        name: "kim",
      },
    },
    {
      params: {
        id: "3",
        name: "park",
      },
    },
  ];

  return { paths, fallback: false };
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
