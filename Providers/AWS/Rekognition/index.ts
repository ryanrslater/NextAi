import { NextApiRequest, NextApiResponse } from "next";
import { RekognitionClient } from "@aws-sdk/client-rekognition";
import { AWSConfig } from "..";
import CompareFaces from "./CompareFaces";

enum Paths {
    COMPARE_FACES = "compare-faces",
}



const RekognitionProvider = async (config: AWSConfig, req: NextApiRequest, res: NextApiResponse) => {
    if (config.region && config.accessKeyId && config.secretAccessKey) {
        const rekognition = new RekognitionClient({
            region: config.region,
            credentials: {
                accessKeyId: config.accessKeyId,
                secretAccessKey: config.secretAccessKey,
            },
        });

        if (Array.isArray(req.query.rekognition)) {
            if (req.query.rekognition[1] === Paths.COMPARE_FACES) {
                await CompareFaces(rekognition, req, res);
            }
        }

    } else {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export default RekognitionProvider;