import { Card, Typography } from 'antd';
import type { IMessage } from '../../Models.ts';
import {Message} from "../Message";

interface IProps {
    messages: IMessage[];
    isBotTyping: boolean;
}

export function MessagesList({ messages, isBotTyping }: IProps) {
    return (
        <Card
        >
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}

            {isBotTyping && (
                <Typography.Text type="secondary" style={{ marginTop: 8, display: 'block' }}>
                    Ботяра печатает...
                </Typography.Text>
            )}
        </Card>
    );
}