import { findUserById, patchUser } from '../../../components/node/services/users';
import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import authOptions from '../../../components/node/session/auth-options';

async function get(req: NextApiRequest, res: NextApiResponse, id: string) {
    try {
        const user = await findUserById(id);
        res.status(user ? 200 : 400).json(user);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
}

async function put(req: NextApiRequest, res: NextApiResponse, id: string) {
    try {
        const writeUser = JSON.parse(req.body);
        await patchUser(id, writeUser);
        res.status(200).json(writeUser);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    const id = session?.user?.id;

    if (id) {
        switch (req.method) {
            case "GET":
                await get(req, res, id);
                break;
            case "PUT":
                await put(req, res, id);
                break;
        }

        return;
    }

    res.status(401);
}
