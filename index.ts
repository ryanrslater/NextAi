import { NextApiRequest, NextApiResponse } from "next";

type AiOptions = {
}

const NextAiHandler = async (req: NextApiRequest, res: NextApiResponse, args:  AiOptions) => {
    
}


const NextAi = async (...args:  [AiOptions]) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        await NextAiHandler(req, res, args[0]);
    }
}

export default NextAi;