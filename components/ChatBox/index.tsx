import React from 'react';
import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox } from './styles';
import { IUser } from '@typings/db';

interface Props {
  // onSubmitForm: (e: any) => void;
  chat?: string;
  // onChangeChat: (e: any) => void;
  // placeholder: string;
  // data?: IUser[];
}

const ChatBox: React.FC<Props> = ({ chat }) => {
  const onSubmitForm = () => {};

  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea>
          <textarea />
        </MentionsTextarea>
        <Toolbox>
          <SendButton
            className={
              'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
              (chat?.trim() ? '' : ' c-texty_input__button--disabled')
            }
            data-qa="texty_send_button"
            aria-label="Send message"
            data-sk="tooltip_parent"
            type="submit"
            disabled={!chat?.trim()}
          >
            <i className="c-icon c-icon--paperplane-filled" aria-hidden="true" />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
