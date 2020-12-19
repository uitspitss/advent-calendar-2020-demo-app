import React, { VFC } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { format } from 'date-fns-tz';
import { useForm, UseFormMethods, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getData } from 'pages/api/posts';
import * as z from 'zod';

type IndexPageProps = {
  className?: string;
  nowDateTimeString: string;
  posts: { title: string; createdAt: string; url: string }[];
};

type Props = {
  register: UseFormMethods['register'];
  handleSubmit: UseFormMethods['handleSubmit'];
  errors: UseFormMethods['errors'];
  onValid: SubmitHandler<FormValues>;
} & IndexPageProps;

const Component: VFC<Props> = (props) => {
  const {
    className,
    register,
    handleSubmit,
    errors,
    onValid,
    nowDateTimeString,
    posts,
  } = props;

  return (
    <div className={className}>
      <div className="qiita">
        <div className="title">
          Qiita Posts
          <div className="updatedTime">{nowDateTimeString} 更新</div>
        </div>
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.createdAt}>
              <div className="createdAt">{post.createdAt}</div>
              <div className="postTitle">
                <a href={post.url}>{post.title}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="calendar">
        <form className="form" onSubmit={handleSubmit(onValid)}>
          <input type="date" name="date" ref={register} />
          {errors.date && (
            <div className="errorMessage">{errors.date.message}</div>
          )}
          <button className="submitButton" type="submit">
            検索
          </button>
        </form>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > .qiita {
    ${tw`mb-20`}

    & > .title {
      ${tw`flex items-center justify-center font-bold`}

      & > .updatedTime {
        ${tw`ml-2`}
      }
    }

    & > .posts {
      & > li {
        ${tw`list-none mb-2 flex`}

        & > .createdAt {
          ${tw`mr-4`}
        }
      }
    }
  }

  & > .calendar {
    & > .form {
      ${tw`flex flex-col items-center`}

      .errorMessage {
        ${tw`text-red-500`}
      }

      & > .submitButton {
        ${tw`mt-6 mb-10`}
      }
    }
  }
`;

const schema = z.object({
  date: z.string().length(10, { message: 'Should choose a date' }),
});

type FormValues = z.infer<typeof schema>;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { push } = useRouter();

  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onValid = async (data: FormValues) => {
    const { date } = data;
    // console.log(data);
    push(`/date/${date}`);
  };

  return (
    <StyledComponent
      {...props}
      {...{ register, handleSubmit, errors, onValid }}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const nowDateTimeString = format(new Date(), 'yyyy/MM/dd HH:mm:ss', {
    timeZone: 'Asia/Tokyo',
  });

  const posts = await getData();

  return {
    props: { nowDateTimeString, posts },
    revalidate: 100,
  };
};

export default IndexPage;
