import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatButtonModule, MatDialogModule,
    MatDividerModule, MatIconModule, MatMenuModule, MatSnackBarModule,
    MatTooltipModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { MessageService } from "./services/message/message.service";
import { ThemeService } from "./services/theme/theme.service";

import { UiContentHorizontalModule } from "./components/ui-content-horizontal";

import { UiHistoryModule } from "./components/ui-history/ui-history.module";
import { UiOverlayCloseConfirmationModule } from "./components/ui-overlay-close-confirmation/index";
import { UiQueryModule } from "./components/ui-query";
import { UiDialogModule } from "./dialogs";
import { QueryBuilderComponent } from "./query-builder/query-builder.component";
import { routerConfig } from "./router";
import { ClusterService } from "./services/cluster/cluster.service";

export const rootRoutes = [
    { name: "query-builder", url: "/query-builder", component: QueryBuilderComponent },
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
        MatTooltipModule,
        MatDialogModule,
        UiHistoryModule,
        UiContentHorizontalModule,
        UiOverlayCloseConfirmationModule,
        UiQueryModule,
        UiDialogModule,
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
