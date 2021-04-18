import { Injectable, Logger } from "@nestjs/common"
import { Parent } from "../graphql"

@Injectable()
export class ParentService {
    private readonly logger = new Logger(ParentService.name)
    private readonly parents: Array<any> = [
        { _id: "1", name: "Parent 1" },
        { _id: "2", name: "Parent 2" },
        { _id: "3", name: "Parent 3" },
    ]

    findAll() {
        return this.parents
    }

    findOneById(id: string): Parent {
        this.logger.debug("Find all")
        return this.parents.find((parent) => parent._id === id)
    }
}
