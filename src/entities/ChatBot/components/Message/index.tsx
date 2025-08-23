import { Card, Typography, Space } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import { EAuthorType } from '../../Enums.ts';
import type { IMessage } from '../../Models.ts';

export function Message({ author, text, error }: IMessage) {
    const isUserMessage = author === EAuthorType.USER;
    const Icon = isUserMessage ? UserOutlined : RobotOutlined;
    const iconColor = isUserMessage ? '#1890ff' : '#52c41a';

    return (
        <div style={{
            marginBottom: 12,
            display: 'flex',
            justifyContent: isUserMessage ? 'flex-end' : 'flex-start'
        }}>
            <Card
                size="small"
                style={{
                    maxWidth: '70%',
                    backgroundColor: isUserMessage ? '#e6f7ff' : '#f6ffed',
                    borderColor: isUserMessage ? '#91d5ff' : '#b7eb8f'
                }}
            >
                <Space
                    direction="horizontal"
                    size={4}
                    style={{
                        marginBottom: 4,
                        justifyContent: isUserMessage ? 'flex-end' : 'flex-start',
                        width: '100%'
                    }}
                >
                    <Icon style={{ color: iconColor }} />
                    <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                        {isUserMessage ? 'Вы' : 'Бот'}
                    </Typography.Text>
                </Space>

                <Typography.Text style={{
                    textAlign: isUserMessage ? 'right' : 'left',
                    wordWrap: 'break-word',
                    display: 'block'
                }}>
                    {text}
                </Typography.Text>

                {error && (
                    <Typography.Text
                        type="danger"
                        style={{
                            fontSize: 11,
                            marginTop: 4,
                            display: 'block',
                            textAlign: 'right'
                        }}
                    >
                        {error}
                    </Typography.Text>
                )}
            </Card>
        </div>
    );
}