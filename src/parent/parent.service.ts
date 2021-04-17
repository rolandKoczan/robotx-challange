import { Injectable } from "@nestjs/common"
import { Parent } from "../graphql"

@Injectable()
export class ParentService {
    private readonly parents: Array<Parent> = []

    findOneById(id: string): Parent {
        return this.parents.find((parent) => parent._id === id)
    }
}