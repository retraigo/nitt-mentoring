import { PrismaClient } from '@prisma/client'
import { DataManager } from './datamanager'

// Any variable that needs to be passed to every
// route will go inside this class
export class Client {
    prisma: PrismaClient
    manager: typeof DataManager
    constructor() {
        this.prisma = new PrismaClient()
        this.manager = DataManager
    }
}