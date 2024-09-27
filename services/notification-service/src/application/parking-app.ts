const express = require("express");
import { EmailService } from "../infrastructure/email-service";
import { RabbitMQListener } from "../infrastructure/rabbitmq-listener";
const app = express();
const port = 3001;

app.use(express.json());
const mailService = new EmailService();
new RabbitMQListener(mailService).listen();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
