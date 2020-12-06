import React, { FC, ComponentPropsWithRef } from 'react';
import tw, { styled } from 'twin.macro';
import { UseFormMethods, FieldError } from 'react-hook-form';

export type TextInputProps = {
  children?: never;
  className?: string;
  /**
   * プレースホルダ
   */
  placeholder?: string;
  /**
   * テキストエリアにするかどうか
   */
  textarea?: boolean;
  /**
   * RHF の register
   */
  register?: UseFormMethods['register'];
  /**
   * RHF の error message
   */
  error?: FieldError;
} & ComponentPropsWithRef<'input'> &
  ComponentPropsWithRef<'textarea'>;

type Props = TextInputProps;

const Component: FC<Props> = (props) => {
  const {
    className,
    placeholder,
    type,
    textarea,
    name,
    register,
    error,
  } = props;

  return (
    <div className={className}>
      <label htmlFor={name}>{name}</label>
      {textarea ? (
        <textarea
          {...{ className, name }}
          id={name}
          placeholder={placeholder || ''}
          aria-invalid={error ? 'true' : 'false'}
          ref={register}
        />
      ) : (
        <input
          {...{ className, name }}
          id={name}
          type={type || 'text'}
          placeholder={placeholder || ''}
          aria-invalid={error ? 'true' : 'false'}
          ref={register}
        />
      )}
      {error && (
        <span className="error" role="alert">
          {error.message}
        </span>
      )}
    </div>
  );
};

const StyledComponent = styled(Component)<Pick<Props, 'textarea'>>`
  & > {
    input,
    textarea {
      ${tw`w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500`}
      ${({ textarea }) => textarea && tw`h-48 resize-none block`}
    }

    .error {
      ${tw`text-red-500`}
    }
  }
`;

/**
 * 汎用的なテキストインプット
 */
export const TextInput: FC<TextInputProps> = (props) => (
  <StyledComponent {...props} />
);
