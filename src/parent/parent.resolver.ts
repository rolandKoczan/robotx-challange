import { Resolver, Query, Args } from "@nestjs/graphql"
import { Parent } from "../graphql"
import { ParentService } from "./parent.service"

@Resolver()
export class ParentResolver {
    constructor(private readonly parentService: ParentService) {}

    @Query("parent")
    async findOneById(
        @Args("id")
        id: string
    ): Promise<Parent> {
        return this.parentService.findOneById(id)
    }
}
