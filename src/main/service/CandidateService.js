import { connectToDatabase } from "../database/mongo";
import moment from "moment";

export async function getAllCandidates() {
  const { db } = await connectToDatabase();
  const result = await db.collection("candidates").find({}).limit(25).toArray();
  return result;
}

export async function addCandidate(candidate) {
  try {
    const { db } = await connectToDatabase();
    candidate.registeredDate = moment(new Date()).format("YYYY-MM-DD");
    candidate.lastModified = moment(new Date()).format("YYYY-MM-DD");
    await db.collection("candidates").insertOne(candidate);
    return { status: "success" };
  } catch (error) {
    console.error("Error in inserting candidate details into database" + error);
    return { status: "failure" };
  }
}
