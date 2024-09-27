import { ParkingService } from "../domain/service/parking-service";
import { ParkingController } from "../infrastructure/adapters/in/parking-controller";
import { ParkingRepositoryImpl } from "../infrastructure/adapters/out/parking-repository";
import { RabbitMQPublisher } from "../infrastructure/adapters/out/rabbitmq-publisher";

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const parkingController = new ParkingController(
  new ParkingService(new ParkingRepositoryImpl(), new RabbitMQPublisher())
);
app.post("/parking", parkingController.assignParking.bind(parkingController));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
