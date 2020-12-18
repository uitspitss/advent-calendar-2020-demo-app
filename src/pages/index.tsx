import React, { VFC } from 'react';
import { NextPage } from 'next';
import { styled } from 'twin.macro';
import { format } from 'date-fns';

type IndexPageProps = {
  className?: string;
  nowDateString: string;
};

type Props = IndexPageProps;

const Component: VFC<Props> = (props) => {
  const { className, nowDateString } = props;

  return <div className={className}>{nowDateString}</div>;
};

const StyledComponent = styled(Component)``;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return <StyledComponent {...props} />;
};

export const getStaticProps = async () => {
  const nowDateString = format(new Date(), 'HH:mm:ss MM/dd/yyyy');

  return {
    props: { nowDateString },
    revalidate: 100,
  };
};

export default IndexPage;
