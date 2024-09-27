import nodemailer from "nodemailer";

export class EmailService {
  private transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bryan.solares@gmail.com",
      pass: "bryan.solares@gmail.com",
    },
  });

  async sendNotification(assignment: any): Promise<void> {
    const mailOptions = {
      from: "bryan.solares@gmail.com",
      to: "solares.josue@outlook.com",
      subject: "Parking assignment",
      text: `Parking assignment for ${assignment.personId} on ${assignment.parkingId} on ${assignment.assignmentDate}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
