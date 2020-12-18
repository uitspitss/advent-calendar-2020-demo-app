import React, { VFC } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { useForm, UseFormMethods, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

type IndexPageProps = {
  className?: string;
};

type Props = {
  register: UseFormMethods['register'];
  handleSubmit: UseFormMethods['handleSubmit'];
  errors: UseFormMethods['errors'];
  onValid: SubmitHandler<FormValues>;
} & IndexPageProps;

const Component: VFC<Props> = (props) => {
  const { className, register, handleSubmit, errors, onValid } = props;

  return (
    <div className={className}>
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
  );
};

const StyledComponent = styled(Component)`
  ${tw`grid place-items-center py-10`}

  & > .form {
    ${tw`flex flex-col items-center`}

    .errorMessage {
      ${tw`text-red-500`}
    }

    & > .submitButton {
      ${tw`mt-6 mb-10`}
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

export default IndexPage;
