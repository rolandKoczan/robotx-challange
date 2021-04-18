import { Logger } from "@nestjs/common"
import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql"
import { ChildService } from "src/child/child.service"
import { Parent as ParentObject } from "../graphql"
import { ParentService } from "./parent.service"

@Resolver("Parent")
export class ParentResolver {
    private readonly logger = new Logger(ParentResolver.name)
    constructor(
        private readonly parentService: ParentService,
        private readonly childService: ChildService
    ) {}

    @Query("parent")
    async findOneById(
        @Args("id")
        id: string
    ): Promise<ParentObject> {
        this.logger.debug("Query")
        return this.parentService.findOneById(id)
    }

    // Abstract 'Child' type needs to be resolved to either type 'A' or 'B'
    // I was unable to implement __resolveType() function here
    @ResolveField()
    async children(@Parent() parent) {
        const { _id } = parent
        this.logger.debug(_id)
        return this.childService.findAllByParentId(_id)
    }
}
