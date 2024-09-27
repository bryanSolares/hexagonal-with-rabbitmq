import { Assignment } from "../entities/assignment";

export interface ParkingRepository {
  saveAssignment(assignment: Assignment): Promise<void>;
}
