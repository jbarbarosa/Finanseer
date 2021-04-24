import createNewAccountService from "./services/createNewAccountService.js";

export const createNewAccount = async (req, res) => {
  console.log(req.body);
  try {
    const { email, bankName, number } = req.body;
    if (!email || !bankName || !number) return res
      .status(400).send(`Erro: dados incompletos.`)
    const result = await createNewAccountService(email, bankName, number);
    if (result != 400) return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send(`Erro ao registrar conta: ${ err }`);
  }
}