import { Request, Response } from "express";
import { ParkingService } from "../../../domain/service/parking-service";
import { Assignment } from "../../../domain/entities/assignment";

export class ParkingController {
  constructor(private parkingService: ParkingService) {}

  async assignParking(req: Request, res: Response): Promise<void> {
    const { personId, parkingId, assignmentDate } = req.body;
    const assignment = new Assignment("1", personId, parkingId, assignmentDate);
    await this.parkingService.assignParking(assignment);
    res.status(201).json({ message: "Parking assignment created successfully" });
  }
}
