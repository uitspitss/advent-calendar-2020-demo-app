import { NextApiRequest, NextApiResponse } from 'next';

import { User } from 'types/user';

export async function getData() {
  const data = {
    users: [
      { id: 1, name: 'john' },
      { id: 2, name: 'lisa' },
    ],
  };

  return data;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{ users: User[] }>,
) => {
  const data = await getData();
  res.status(200).json(data);
};
