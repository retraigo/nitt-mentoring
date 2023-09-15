import { PrismaClient } from '@prisma/client'

// Any variable that needs to be passed to every
// route will go inside this class
export class Client {
    prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
}