import React, { VFC } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { format } from 'date-fns';

type DateDescriptionPageProps = {
  className?: string;
  nowDateString: string;
};

type Props = {
  dateString: string;
} & DateDescriptionPageProps;

const Component: VFC<Props> = (props) => {
  const { className, nowDateString, dateString } = props;

  return (
    <div className={className}>
      {dateString}
      <div className="updateTime">{nowDateString} 更新</div>
    </div>
  );
};

const StyledComponent = styled(Component)``;

/**
 * TODO: write an explanation of DateDescriptionPage
 */
const DateDescriptionPage: NextPage<DateDescriptionPageProps> = (props) => {
  const { query } = useRouter();
  const dateString = query.date as string;

  return <StyledComponent {...props} {...{ dateString }} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const nowDateString = format(new Date(), 'HH:mm:ss MM/dd/yyyy');

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
