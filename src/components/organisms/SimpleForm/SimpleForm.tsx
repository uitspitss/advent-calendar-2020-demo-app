import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { useForm, UseFormMethods } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { TextInput } from 'components/atoms/TextInput';
import { Button } from 'components/atoms/Button';

export type SimpleFormProps = {
  children?: never;
  className?: string;
  onSubmit: (data: FormValues) => void;
};

type Props = {
  register: UseFormMethods['register'];
  handleSubmit: UseFormMethods['handleSubmit'];
  errors: UseFormMethods['errors'];
  onSubmit: (data: FormValues) => void;
} & SimpleFormProps;

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
});

export type FormValues = z.infer<typeof schema>;

const Component: FC<Props> = (props) => {
  const { className, register, handleSubmit, errors, onSubmit } = props;

  return (
    <div className={className}>
      <div className="headerText">
        <h1>コンタクトフォーム</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputFields">
          <div>
            <div className="email">
              <TextInput
                placeholder="Email"
                type="email"
                name="email"
                register={register}
                error={errors.email}
              />
            </div>
            <div className="message">
              <TextInput
                textarea
                placeholder="Message"
                name="message"
                register={register}
                error={errors.message}
              />
            </div>
            <div className="submitButton">
              <Button type="submit" label="送信" primary size="large" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const StyledComponent = styled(Component)`
  .headerText {
    ${tw`flex flex-col text-center mb-4`}
    & > h1 {
      ${tw`sm:text-3xl text-2xl font-medium mb-4 text-primary-500`}
    }

    & > p {
      ${tw`lg:w-2/3 mx-auto leading-relaxed text-base`}
    }
  }

  .inputFields {
    ${tw`lg:w-1/2 md:w-2/3 mx-auto`}
    & > div {
      ${tw`flex flex-col justify-center`}
      & > div {
        ${tw`p-2`}
        &.submitButton {
          ${tw`mx-auto`}
        }
      }
    }
  }

  .error-text {
    ${tw`text-secondary-500`}
  }
`;

/**
 * シンプルなフォーム
 */
export const SimpleForm: FC<SimpleFormProps> = (props) => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledComponent
      {...props}
      {...{
        register,
        handleSubmit,
        errors,
      }}
    />
  );
};
