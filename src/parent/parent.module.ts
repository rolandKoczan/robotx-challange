import { Module } from "@nestjs/common"
import { ChildModule } from "src/child/child.module";
import { ParentResolver } from "./parent.resolver";
import { ParentService } from "./parent.service";

@Module({
    imports: [ChildModule],
    providers: [ParentService, ParentResolver],
    exports: [ParentService],
})
export class ParentModule {}
