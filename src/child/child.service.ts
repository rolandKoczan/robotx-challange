import { Injectable, Logger } from "@nestjs/common"
import { A, B, Child } from "../graphql"

@Injectable()
export class ChildService {
    private readonly logger = new Logger(ChildService.name)
    private readonly children: Array<any> = [
        { _id: "1", name: "Child 1", parentId: "1", foo: "foo" },
        { _id: "2", name: "Child 2", parentId: "1", bar: "bar" },
        { _id: "3", name: "Child 3", parentId: "2", foo: "foo" },
        { _id: "4", name: "Child 4", parentId: "3", foo: "foo" },
        { _id: "5", name: "Child 5", parentId: "3", foo: "foo" },
        { _id: "6", name: "Child 6", parentId: "3", bar: "foo" },
    ]

    findAll(){
        return this.children
    }

    findAllByParentId(_id: number): Array<any> {
        const result = this.children.filter(
            (child) => child.parentId === _id.toString()
        )
        result.forEach((i) => this.logger.debug(i))
        return result
    }

    findOneById(id: string): Child {
        return this.children.find((parent) => parent._id === id)
    }
}
