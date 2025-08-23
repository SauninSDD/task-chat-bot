import { type KeyboardEvent, useCallback, useState } from 'react';
import { Input, Button, Space } from 'antd';

const { TextArea } = Input;

interface IProps {
    onSend: (newText: string) => void;
}

export function MessageInput({ onSend }: IProps) {
    const [text, setText] = useState('');

    const handleSendMessage = useCallback(() => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    }, [onSend, text]);

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <Space.Compact style={{ width: '100%', alignItems: 'flex-end' }}>
            <TextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Введите сообщение..."
                autoSize={{ minRows: 1, maxRows: 4 }}
                style={{ resize: 'none' }}
            />
            <Button
                type="primary"
                onClick={handleSendMessage}
                disabled={!text.trim()}
                style={{ height: 'auto', alignSelf: 'stretch' }}
            >
                Отправить
            </Button>
        </Space.Compact>
    );
}