import { Module } from "@nestjs/common"
import { ChildResolver } from "./child.resolver"
import { ChildService } from "./child.service"

@Module({
    providers: [ChildService, ChildResolver],
    exports: [ChildService],
})
export class ChildModule {}
