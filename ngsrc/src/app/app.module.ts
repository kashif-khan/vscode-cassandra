import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule, MatSnackBarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { MessageService } from "./services/message/message.service";
import { ThemeService } from "./services/theme/theme.service";

import { UiContentHorizontalModule } from "./components/ui-content-horizontal";

import { UiQueryModule } from "./components/ui-query";
import { QueryBuilderComponent } from "./query-builder/query-builder.component";
import { routerConfig } from "./router";
import { ClusterService } from "./services/cluster/cluster.service";

export const rootRoutes = [

    { name: "query-builder", url: "/query-builder", component: QueryBuilderComponent },
    // { name: "bootstate.**", url: "/bs", loadChildren: "./bootstate/bootstate.module#BootstateModule" },
    // { name: "logout.**", url: "/logout", loadChildren: "./logout/logout.module#LogoutModule" },
    // { name: "system.**", url: "/system", loadChildren: "./system/system.module#SystemModule" },

];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatSnackBarModule,
        UiContentHorizontalModule,
        UiQueryModule,
        UIRouterModule.forRoot({ states: rootRoutes, useHash: true, otherwise: { state: "query-builder" }, config: routerConfig }),

    ],
    declarations: [
        QueryBuilderComponent,

    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    ],
    bootstrap: [UIView],
})
export class AppModule {

    constructor(private theme: ThemeService, private messages: MessageService, cluster: ClusterService) {

    }

}
