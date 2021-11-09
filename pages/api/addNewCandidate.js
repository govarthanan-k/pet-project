import { addCandidate } from "../../src/main/service/CandidateService";

export default async function handler(req, res) {
  const resp = await addCandidate(req.body);
  res.status(200).json(resp);
}
