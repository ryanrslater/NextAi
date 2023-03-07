
import { NextApiRequest, NextApiResponse } from "next";
import { RekognitionClient, CompareFacesCommand } from "@aws-sdk/client-rekognition";

const CompareFaces = async (client: RekognitionClient, req: NextApiRequest, res: NextApiResponse) => {
    const params = {
        SourceImage: {
            S3Object: {
                Bucket: req.body.sourceBucket,
                Name: req.body.sourceName,
            },
        },
        TargetImage: {
            S3Object: {
                Bucket: req.body.targetBucket,
                Name: req.body.targetName,
            },
        },
        SimilarityThreshold: req.body.similarityThreshold ? req.body.similarityThreshold : 80,
    };
    const command = new CompareFacesCommand(params);
    const data = await client.send(command);
    res.status(201).json({ message: data.FaceMatches });
}

export default CompareFaces;