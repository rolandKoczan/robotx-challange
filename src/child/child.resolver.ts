import { Resolver, Query, Args } from "@nestjs/graphql"
import { Child } from "src/graphql"
import { ChildService } from "./child.service"

@Resolver()
export class ChildResolver {
    constructor(private readonly childService: ChildService) {}

    @Query("child")
    async findOneById(
        @Args("id")
        id: string
    ): Promise<Child> {
        return this.childService.findOneById(id)
    }
}
