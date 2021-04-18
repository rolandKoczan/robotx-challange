import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { join } from "path"
import { ParentModule } from "./parent/parent.module"
import { ChildModule } from "./child/child.module"

@Module({
    imports: [
        ParentModule,
        ChildModule,
        GraphQLModule.forRoot({
            typePaths: ["./**/*.graphql"],
            definitions: {
                path: join(process.cwd(), "src/graphql.ts"),
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
