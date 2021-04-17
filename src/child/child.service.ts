import { Injectable } from "@nestjs/common"
import { Child } from "../graphql"

@Injectable()
export class ChildService {
    private readonly children: Array<Child> = []

    findAll(): Child[] {
        return this.children
    }

    findOneById(id: string): Child {
        return this.children.find((parent) => parent._id === id)
    }
}
