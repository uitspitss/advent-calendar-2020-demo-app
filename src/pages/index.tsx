import React, { FC } from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { styled } from 'twin.macro';

import { SimpleForm, FormValues } from 'components/organisms/SimpleForm';

type IndexPageProps = {
  children?: never;
  className?: string;
};

type Props = {
  onSubmit: ({ email, message }: FormValues) => void;
} & IndexPageProps;

const Component: FC<Props> = (props) => {
  const { className, onSubmit } = props;

  return (
    <div className={className}>
      <SimpleForm onSubmit={onSubmit} />
    </div>
  );
};

const StyledComponent = styled(Component)``;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  // FIXME: when use production
  // eslint-disable-next-line
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <>
      <NextSeo title="Index" />
      <StyledComponent {...props} onSubmit={onSubmit} />
    </>
  );
};

export default IndexPage;
