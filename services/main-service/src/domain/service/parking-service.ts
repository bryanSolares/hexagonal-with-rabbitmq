import { Assignment } from "../entities/assignment";
import { EventPublisher } from "../ports/ievent-publisher";
import { ParkingRepository } from "../ports/iparking-repository";

export class ParkingService {
  constructor(private parkingRepository: ParkingRepository, private eventPublisher: EventPublisher) {}

  async assignParking(assignment: Assignment): Promise<void> {
    //await this.parkingRepository.saveAssignment(assignment);
    await this.eventPublisher.publish("parkingAssigned", assignment);
  }
}
