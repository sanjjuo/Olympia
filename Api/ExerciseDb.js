import { apiKey } from "../Data";

const baseUrl = "https://exercisedb.p.rapidapi.com";

export const bodyPartEndpoint = (bodyPart) => `${baseUrl}/exercises/bodyPart/${bodyPart}`;