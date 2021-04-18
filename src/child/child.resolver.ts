import { Logger } from "@nestjs/common"
import { Resolver, Query, Args, ResolveField } from "@nestjs/graphql"
import { Child } from "src/graphql"
import { ChildService } from "./child.service"

@Resolver("Child")
export class ChildResolver {
    private readonly logger = new Logger(ChildResolver.name)
    constructor(private readonly childService: ChildService) {}

    @ResolveField()
    __resolveType(obj) {
        this.logger.debug(obj)
        if(obj.foo) return "A"
        if(obj.bar) return "B"
        return null
    }

    @Query("child")
    async findOneById(
        @Args("id")
        id: string
    ): Promise<Child> {
        return this.childService.findOneById(id)
    }

    @Query("children")
    async findAll() {
        return this.childService.findAll()
    }
}
