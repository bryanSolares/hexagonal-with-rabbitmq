import { Assignment } from "../../../domain/entities/assignment";
import { ParkingRepository } from "../../../domain/ports/iparking-repository";

export class ParkingRepositoryImpl implements ParkingRepository {
  saveAssignment(assignment: Assignment): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
