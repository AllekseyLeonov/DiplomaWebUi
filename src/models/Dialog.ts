import {User} from "./User";

export interface Dialog {
  id: string,
  moderator: User;
  user: User;
  messages: Message[];
}

export interface Message{
  text: string,
  sender: User,
  dialogId: string,
  dateTime: Date,
}

export interface AddMessageRequest{
  text: string,
  senderId: string,
  dialogId: string,
}

export interface AddMessageFromPracticeRequest{
  userId: string,
  moderatorId: string,
  messageText: string,
}
