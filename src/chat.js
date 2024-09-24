import React from "react";
import "./chat.css";
import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  InfoButton,
  VideoCallButton,
  MessageSeparator,
  TypingIndicator,
  Search,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { set } from "mongoose";

export const Chat = () => {
  const sendMessage = (e) => {
    console.log(e);
    setMessages([...message, { message: e, sender: "user" }]);
  };

  const [message, setMessages] = useState([]);
  return (
    <div className="chatPage-div">
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search" />
          <ConversationList>
            <Conversation
              name="John"
              lastSenderName="Joy"
              info="hello"
              active={true}
              aria-atomic={true}
              style={{ textAlign: "left" }}
            >
              <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" status="available" />
            </Conversation>
            <Conversation
              name="Rabbi"
              lastSenderName="akash"
              info="hello"
              active={true}
              aria-atomic={true}
              style={{ textAlign: "left" }}
            >
              <Avatar src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg" name="John Doe" status="dnd" />
            </Conversation>
            <Conversation
              name="Rana"
              lastSenderName="Joy"
              info="hello"
              active={true}
              aria-atomic={true}
              style={{ textAlign: "left" }}
              unreadCnt={3}
            >
              {" "}
              <Avatar
                src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
                name="John Doe"
                status="away"
              />
            </Conversation>
            <Conversation
              name="Sayem"
              lastSenderName="Joy"
              info="hello"
              active={true}
              aria-atomic={true}
              style={{ textAlign: "left" }}
            >
              {" "}
              <Avatar
                src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
                name="John Doe"
                status="away"
              />
            </Conversation>
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" status="available" size="md" />
            <ConversationHeader.Content
              userName="John Doe"
              info="last active 10 min ago"
              style={{ textAlign: "left" }}
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList typingIndicator={<TypingIndicator content="Typing" />}>
            <MessageSeparator content="today" />
            {message.map((msg) => (
              <>
                <Message
                  model={{
                    message: msg.message,
                    sentTime: "2021-03-16T12:00:00Z",
                    sender: msg.sender,
                    direction: "outgoing",
                  }}
                  avatarSpacer={true}
                />

                <Message
                  model={{
                    message: msg.message,
                    sentTime: "2021-03-16T12:00:00Z",
                    sender: msg.sender,
                    direction: "incoming",
                  }}
                  avatarSpacer={true}
                />
                <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" />
              </>
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={sendMessage} style={{ textAlign: "left" }} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};
export default Chat;
