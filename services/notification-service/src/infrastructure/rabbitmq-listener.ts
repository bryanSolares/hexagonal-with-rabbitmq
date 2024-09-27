import amqp from "amqplib";
import { EmailService } from "./email-service";
export class RabbitMQListener {
  constructor(private emailService: EmailService) {}

  async listen(): Promise<void> {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertExchange("parking", "topic", { durable: true });
    const q = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(q.queue, "parking", "parkingAssigned");
    channel.consume(q.queue, (msg) => {
      if (msg !== null) {
        const assignment = JSON.parse(msg.content.toString());
        //this.emailService.sendNotification(assignment);
        console.log(assignment);
        channel.ack(msg);
      }
    });
  }
}
