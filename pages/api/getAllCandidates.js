import { getAllCandidates } from "../../src/main/service/CandidateService";

export default async function handler(req, res) {
  const resp = await getAllCandidates();
  res.status(200).json(resp);
}
