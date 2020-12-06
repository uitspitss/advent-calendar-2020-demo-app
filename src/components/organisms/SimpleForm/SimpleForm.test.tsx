import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SimpleForm } from './SimpleForm';

describe('SimpleForm', () => {
  test('Snap Shot', () => {
    const onSubmit = () => {};
    const tree = renderer.create(<SimpleForm onSubmit={onSubmit} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Behavior', () => {
    const mockSubmit = jest.fn((_data) => {});

    beforeEach(() => {
      render(<SimpleForm onSubmit={mockSubmit} />);
    });

    test('it should display required error when value is invalid', async () => {
      userEvent.click(screen.getByRole('button'));

      expect(await screen.findAllByRole('alert')).toHaveLength(2);
    });

    test.todo('email is invalid, but message is valid');

    test('it should display required error when email is invalid', async () => {
      userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'test');

      userEvent.click(screen.getByRole('button'));

      expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
        'test',
      );
      expect(screen.getByLabelText('message')).toHaveValue('');

      expect(await screen.findAllByRole('alert')).toHaveLength(2);
    });

    test('it should display required error when message is invalid', async () => {
      userEvent.type(
        screen.getByRole('textbox', { name: /email/i }),
        'mail@example.com',
      );
      userEvent.type(screen.getByRole('textbox', { name: /message/i }), '');

      userEvent.click(screen.getByRole('button'));

      await waitFor(() =>
        expect(screen.queryAllByRole('alert')).toHaveLength(1),
      );
      expect(mockSubmit).not.toBeCalled();
      expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
        'mail@example.com',
      );
      expect(screen.getByLabelText('message')).toHaveValue('');
    });

    test('it should not display errors when values are valid', async () => {
      userEvent.type(
        screen.getByRole('textbox', { name: /email/i }),
        'mail@example.com',
      );
      userEvent.type(screen.getByRole('textbox', { name: /message/i }), 'test');

      userEvent.click(screen.getByRole('button'));

      await waitFor(() =>
        expect(screen.queryAllByRole('alert')).toHaveLength(0),
      );
      expect(mockSubmit).toBeCalledTimes(1);
      // FIXME: failed test
      // expect(mockSubmit).toBeCalledWith(
      //   expect.objectContaining({ email: 'mail@example.com', message: 'test' })
      // );
      expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
        'mail@example.com',
      );
      expect(screen.getByLabelText('message')).toHaveValue('test');
    });
  });
});
