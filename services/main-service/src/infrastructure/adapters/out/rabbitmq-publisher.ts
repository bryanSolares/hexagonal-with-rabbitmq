import amqp from "amqplib";
import { EventPublisher } from "../../../domain/ports/ievent-publisher";

export class RabbitMQPublisher implements EventPublisher {
  async publish(event: string, data: any): Promise<void> {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertExchange("parking", "topic", { durable: true });
    channel.publish("parking", event, Buffer.from(JSON.stringify(data)));
    await channel.close();
    await connection.close();
  }
}
