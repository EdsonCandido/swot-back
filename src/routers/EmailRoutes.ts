import { Router } from "express";
import MailController from "../controllers/EmailController";
import { StudentController } from "../controllers/StudentController";

const _studentController = new StudentController();

const router = Router();

router.post("/", async (request, response, next) => {
  const message = Object.assign({}, request.body);

  MailController.to = message.to;
  MailController.message = message.message;
  MailController.subject = message.subject;

  let result = MailController.sendMail();
  response.status(200).json({ result });
});
router.post("/new", async (request, response, next) => {
  const message = Object.assign({}, request.body);
  const student = await _studentController.searchCpf(message.student);
  message.subject = "Bem-vindo ao SWOT";
  message.message = `
  <center><h1> Hey ${student.name} </h1></center>
  <center><h2> Bem-vindo ao sistema de auxilio na escolha de temas e na busca por orientadores </h2></center>
  <center><p> Acesse o <a href="http://localhost:4200/login/access/${student.cpf}">link</a> abaixo para poder acessar o sistema </p></center>
  `;

  MailController.to = message.to;
  MailController.message = message.message;
  MailController.subject = message.subject;

  let result = MailController.sendMail();
  response.status(204).json({ result });
});

export default router;
