import { H3Event } from 'h3';
import * as UserModel from '~~/server/models/user'

export const read = async () => {
    try {
        const result = await UserModel.read();

        return {
            data: result
        }
    } catch{
        throw createError({
            statusCode: 500,
            message: 'Il y a eu une erreur interne'
        })
    }
}

export const create = async (evt: H3Event) => {
    try {
        const body = await readBody(evt)
        const result = await UserModel.create({
            nom: body.nom,
            email: body.email,
            mot_de_passe: body.mot_de_passe
        });

        return {
            data: result
        }
    } catch{
        throw createError({
            statusCode: 500,
            message: 'Il y a eu une erreur interne'
        })
    }
}

export const detail = async (evt: H3Event) => {
    try {
        const body = await readBody(evt)
        const result = await UserModel.detail(evt.context.params?.id as string);

        return {
            data: result
        }
    } catch{
        throw createError({
            statusCode: 500,
            message: 'Il y a eu une erreur interne'
        })
    }
}

export const update = async (evt: H3Event) => {
    try {
        const body = await readBody(evt)
        const result = await UserModel.update(evt.context.params?.id as string, {
            nom: body.nom,
            email: body.email,
            mot_de_passe: body.mot_de_passe
        })

        return {
            data: result
        }
    } catch{
        throw createError({
            statusCode: 500,
            message: 'Il y a eu une erreur interne'
        })
    }
}

export const remove = async (evt: H3Event) => {
    try {
        const result = await UserModel.remove(evt.context.params?.id as string);

        return {
            data: result
        }
    } catch{
        throw createError({
            statusCode: 500,
            message: 'Il y a eu une erreur interne'
        })
    }
}