import React, { VFC } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { format, utcToZonedTime } from 'date-fns-tz';

type DateDescriptionPageProps = {
  className?: string;
  nowDateString: string;
};

type Props = {
  dateString: string;
  handleGoBack: () => void;
} & DateDescriptionPageProps;

const Component: VFC<Props> = (props) => {
  const { className, nowDateString, dateString, handleGoBack } = props;

  return (
    <div className={className}>
      {dateString}
      <div className="updateTime">{nowDateString} 更新</div>
      <button className="goBackButton" type="button" onClick={handleGoBack}>
        戻る
      </button>
    </div>
  );
};

const StyledComponent = styled(Component)`
  ${tw`flex flex-col items-center`}

  & > .updateTime {
    ${tw`mb-10`}
  }
`;

/**
 * TODO: write an explanation of DateDescriptionPage
 */
const DateDescriptionPage: NextPage<DateDescriptionPageProps> = (props) => {
  const { query, push } = useRouter();
  const dateString = query.date as string;

  const handleGoBack = () => push('/');

  return <StyledComponent {...props} {...{ dateString, handleGoBack }} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const now = utcToZonedTime(new Date(), 'Asia/Tokyo');
  const nowDateString = format(now, 'yyyy/MM/dd HH:mm:ss', {
    timeZone: 'Asia/Tokyo',
  });

  return {
    props: { nowDateString },
    revalidate: 100,
  };
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export default DateDescriptionPage;
