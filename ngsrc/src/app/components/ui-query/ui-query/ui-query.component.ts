import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import * as Split from "split.js";
import { WorkbenchEditor } from "../../../../../../src/types/editor";
import { CassandraCluster } from "../../../../../../src/types/index";
import { ViewDestroyable } from "../../../base/view-destroyable/index";
import { ClusterService } from "../../../services/cluster/cluster.service";
import { ThemeService } from "../../../services/theme/theme.service";

@Component({
    selector: "ui-query",
    templateUrl: "./ui-query.component.html",
    styleUrls: ["./ui-query.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQueryComponent extends ViewDestroyable implements OnInit, OnDestroy {
    @ViewChild("top") public top: ElementRef<HTMLDivElement>;
    @ViewChild("bottom") public bottom: ElementRef<HTMLDivElement>;

    public clusterList: CassandraCluster[] = [];
    public editorCurrent: WorkbenchEditor = null;

    public code: string = "select aaaa,bbbb,cccc \n from tableName where ddd='21' and ccc=22;\n";
    public fontSize: number = 15;
    public lineHeight: number = 23;

    private stateReady = new ReplaySubject<void>();

    constructor(
        public change: ChangeDetectorRef,
        public cluster: ClusterService,

        public theme: ThemeService,
    ) {
        super(change);

        this.clusterList = this.cluster.list;
        this.fontSize = Math.round(theme.getEditorFontSize() * 1.2);
        this.lineHeight = Math.round(this.fontSize * 1.5);

    }
    @Input() public set editor(e: WorkbenchEditor) {
        this.stateReady.pipe(
            take(1),
        ).subscribe(() => {

            console.log("set EDITOR");
            console.log(JSON.stringify(e));
            this.editorCurrent = e;
            this.detectChanges();
        });
    }
    ngOnInit() {

        Split([this.top.nativeElement, this.bottom.nativeElement], {
            direction: "vertical",
            gutterSize: 12,
        });

        this.cluster.eventChange.pipe()
            .subscribe(() => {
                this.clusterList = this.cluster.list;
                this.detectChanges();
            });

        this.stateReady.next();

    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    public updateEditor(editor: WorkbenchEditor) {

    }

}
