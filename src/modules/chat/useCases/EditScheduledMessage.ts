import { UseCase } from "../../../shared/core/UseCase";
import { ChatRoomId } from "../domain/ChatRoom";
import { MessageBody } from "../domain/MessageBody";
import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo";

type Request = {
  scheduledMessageId: string;
  body: MessageBody;
  chatRoomId: ChatRoomId;
  sendScheduledAt: Date;
};

type Response = boolean;

export class EditScheduledMessage
  implements UseCase<Request, Promise<Response>>
{
  constructor(
    private chatRoomRepo: IChatRoomRepo,
    private scheduledChatMessageRepo: IScheduledChatMessageRepo
  ) {}

  public async execute(request: Request): Promise<Response> {
    const msg = await this.scheduledChatMessageRepo.findById(
      request.scheduledMessageId
    );
    if (!msg) {
      throw new Error(
        `scheduledMessageId=${request.scheduledMessageId}) not found.`
      );
    }
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    if (!chatRoom) {
      throw new Error(`chatRoomId=${request.chatRoomId}) not found.`);
    }
    if (!chatRoom.isMember(msg.chatRoomMemberId)) {
      throw new Error("member not include in chatroom");
    }

    const updateMsg = msg
      .changeBody(request.body)
      .changeChatRoomId(request.chatRoomId)
      .changePostScheduledAt(request.sendScheduledAt);

    const res = await this.scheduledChatMessageRepo.update(updateMsg);
    return res;
  }
}
