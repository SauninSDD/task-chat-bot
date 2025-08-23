import type {EAuthorType} from "./Enums.ts";

export interface IMessage {
    id: number;
    author: EAuthorType;
    text: string;
    error?: string;
}