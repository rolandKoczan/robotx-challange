import { Logger } from "@nestjs/common";
import { Resolver, Query, Args, ResolveField } from "@nestjs/graphql"
import { Child } from "src/graphql"
import { ChildService } from "./child.service"

@Resolver('Child')
export class ChildResolver {
    private readonly logger = new Logger(ChildResolver.name);
    constructor(private readonly childService: ChildService) {}

    @Query("child")
    async findOneById(
        @Args("id")
        id: string
    ): Promise<Child> {
        return this.childService.findOneById(id)
    }
}
