import { NextApiRequest, NextApiResponse } from "next";
import { AWSConfig } from "..";
declare const RekognitionProvider: (config: AWSConfig, req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export default RekognitionProvider;
