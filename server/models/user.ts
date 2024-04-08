import {sql} from '~~/server/db';

export type UserModel = {
    id: number;
    nom: string;
    email: string;
    mot_de_passe: string;
    date_inscription: string;
}

export const read = async () => {
    const result = await sql({
        query: 'SELECT id, nom, email, date_inscription FROM users'
    });

    return result;
}

export const create = async (data: Pick<UserModel, 'nom' | 'email' | 'mot_de_passe'>) => {
    const result = await sql({
        query: `
        INSERT INTO users (
            nom,
            email,
            mot_de_passe
        ) VALUES (
            ?,
            ?,
            ?
        ) RETURNING *
        `,
        values: [data.nom, data.email, data.mot_de_passe]
    }) as any;

    return result.length === 1 ? (result[0] as UserModel) : null ;
}

export const detail = async (id:string) => {
    const result = (await sql({
        query: 'SELECT id, nom, email, mot_de_passe FROM users WHERE id = ?',
        values: [id]
    })) as any

    return result.length === 1 ? (result[0] as UserModel) : null ;
}

export const update = async (id: string, data: Pick<UserModel, 'nom' | 'email' | 'mot_de_passe'>) => {
    (await sql({
        query: `
        UPDATE users (
            SET
            nom = ?,
            email = ?,
            mot_de_passe = ?
        WHERE id = ?
        `,
        values: [data.nom, data.email, data.mot_de_passe]
    }))

    return await detail(id)
}

export const remove = async (id: string) => {
    (await sql({
        query: 'DELETE FROM users WHERE id = ?',
        values: [id]
    }))

    return true;
}