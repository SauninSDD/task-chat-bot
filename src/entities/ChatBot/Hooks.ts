import {useCallback, useRef, useState} from "react";
import type {IMessage} from "./Models.ts";
import {EAuthorType} from "./Enums.ts";

const delayMock = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
export const useSendMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const idMessageRef = useRef(1);

  return {
    isBotTyping,
    messages,
    sendMessage: useCallback(async (newText: string) => {
      const text = newText.trim();

      if (text) {
        const userMessage: IMessage = {
          id: idMessageRef.current++,
          text,
          author: EAuthorType.USER,
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsBotTyping(true);

        await delayMock(1500);

        const botMessage: IMessage = {
          id: idMessageRef.current++,
          text: userMessage.text,
          author: EAuthorType.BOT,
        }

        setMessages((prev) => [...prev, botMessage]);
        setIsBotTyping(false);
      }
    }, [])
  };
};
