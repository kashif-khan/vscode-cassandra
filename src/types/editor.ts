
export interface WorkbenchCqlStatement {
    id: string;
    body: string; // cql statements
    resultset: any[];
    filename: string;
    keyspace?: string;
    clusterName?: string;
    table?: string;
}
export interface WorkbenchEditor {
    statement: WorkbenchCqlStatement;
    resultset: any[];
    errors?: any[];
    executed: boolean;
    response: any;
}