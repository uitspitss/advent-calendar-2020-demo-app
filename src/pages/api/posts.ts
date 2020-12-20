import { NextApiRequest, NextApiResponse } from 'next';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

type Post = {
  title: string;
  createdAt: string;
  url: string;
};

export const getData = async () => {
  const res = await fetch('https://qiita.com/api/v2/items');

  if (!res.ok) {
    throw new Error("can't fetch");
  }
  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = data.map((post: any) => {
    const dt = parseISO(post.created_at);
    const localDt = utcToZonedTime(dt, 'Asia/Tokyo');

    return {
      title: post.title,
      createdAt: format(localDt, 'yyyy/MM/dd hh:mm:ss'),
      url: post.url,
    };
  });

  return posts;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Post>) => {
  const posts = await getData();
  res.status(200).json(posts);
};

export default handler;
