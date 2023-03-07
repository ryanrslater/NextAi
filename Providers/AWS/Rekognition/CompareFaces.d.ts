import { NextApiRequest, NextApiResponse } from "next";
import { RekognitionClient } from "@aws-sdk/client-rekognition";
declare const CompareFaces: (client: RekognitionClient, req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export default CompareFaces;
