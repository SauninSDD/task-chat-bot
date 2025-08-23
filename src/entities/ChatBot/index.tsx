import { Card, Typography } from 'antd';
import { useSendMessages } from './Hooks.ts';
import { MessagesList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';

const { Title } = Typography;

export function ChatBot() {
    const { isBotTyping, messages, sendMessage } = useSendMessages();

    return (
        <Card>
            <Title level={4} style={{ textAlign: 'center', marginBottom: 16 }}>
                Чат-бот
            </Title>

            <MessagesList messages={messages} isBotTyping={isBotTyping} />

            <MessageInput onSend={sendMessage} />
        </Card>
    );
}