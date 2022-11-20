import { SendChatMessage } from "../../useCases/sendChatMessage"
import { GetShouldScheduledMessage } from "../../useCases/GetShouldScheduledMessage"
import { UpdateStatusSentScheduledMessage } from "../../useCases/UpdateStatusSentScheduledMessage"

export class SendScheduledMessage {
  constructor(
    private getShouldScheduledMessage: GetShouldScheduledMessage,
    private updateStatusSentScheduledMessage: UpdateStatusSentScheduledMessage,
    private sendChatMessage: SendChatMessage,
  ) { }

  public async execute() {
    const smsgs = await this.getShouldScheduledMessage.execute()
    for (const smsg of smsgs) {
      const msg = {
        body: smsg.body,
        senderId: smsg.senderId,
        chatRoomId: smsg.chatRoomId,
        sendAt: smsg.postScheduledAt,
      }
      await this.sendChatMessage.execute(msg)
      await this.updateStatusSentScheduledMessage.execute({
        scheduledMessageId: smsg.id.value
      })
    }
  }

}