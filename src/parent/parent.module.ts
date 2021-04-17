import { Module } from "@nestjs/common"
import { ParentResolver } from "./parent.resolver";
import { ParentService } from "./parent.service";

@Module({
    providers: [ParentService, ParentResolver],
    exports: [ParentService],
})
export class ParentModule {}
