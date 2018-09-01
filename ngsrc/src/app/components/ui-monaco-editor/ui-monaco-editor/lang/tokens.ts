/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

"use strict";

// import ILanguage = ;

export const language = <monaco.languages.IMonarchLanguage>{
    defaultToken: "",
    tokenPostfix: ".cql",
    ignoreCase: true,

    brackets: [
        { open: "[", close: "]", token: "delimiter.square" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" },
        { open: "{", close: "}", token: "delimiter.curly" },
    ],
    keywords: [
        "ADD",
        "AGGREGATE",
        "ALL",
        "ALLOW",
        "ALTER",
        "AND",
        "ANY",
        "APPLY",
        "AS",
        "ASC",
        "ASCII",
        "AUTHORIZE",
        "BATCH",
        "BEGIN",
        "BIGINT",
        "BLOB",
        "BOOLEAN",
        "BY",
        "CLUSTERING",
        "COLUMNFAMILY",
        "COMPACT",
        "CONSISTENCY",
        "COUNT",
        "COUNTER",
        "CREATE",
        "CUSTOM",
        "DECIMAL",
        "DELETE",
        "DESC",
        "DISTINCT",
        "DOUBLE",
        "DROP",
        "EACH_QUORUM",
        "ENTRIES",
        "EXISTS",
        "FILTERING",
        "FLOAT",
        "FROM",
        "FROZEN",
        "FULL",
        "GRANT",
        "IF",
        "IN",
        "INDEX",
        "INET",
        "INFINITY",
        "INSERT",
        "INT",
        "INTO",
        "KEY",
        "KEYSPACE",
        "KEYSPACES",
        "LEVEL",
        "LIMIT",
        "LIST",
        "LOCAL_ONE",
        "LOCAL_QUORUM",
        "MAP",
        "MATERIALIZED",
        "MODIFY",
        "NAN",
        "NORECURSIVE",
        "NOSUPERUSER",
        "NOT",
        "OF",
        "ON",
        "ONE",
        "ORDER",
        "PARTITION",
        "PASSWORD",
        "PER",
        "PERMISSION",
        "PERMISSIONS",
        "PRIMARY",
        "QUORUM",
        "RENAME",
        "REVOKE",
        "SCHEMA",
        "SELECT",
        "SET",
        "STATIC",
        "STORAGE",
        "SUPERUSER",
        "TABLE",
        "TEXT",
        "TIME",
        "TIMESTAMP",
        "TIMEUUID",
        "THREE",
        "TO",
        "TOKEN",
        "TRUNCATE",
        "TTL",
        "TUPLE",
        "TWO",
        "TYPE",
        "UNLOGGED",
        "UPDATE",
        "USE",
        "USER",
        "USERS",
        "USING",
        "UUID",
        "VALUES",
        "VARCHAR",
        "VARINT",
        "VIEW",
        "WHERE",
        "WITH",
        "WRITETIME",
    ],
    operators: [
        // Logical
        "ALL", "AND", "ANY", "BETWEEN", "EXISTS", "IN", "LIKE", "NOT", "OR", "SOME",
        // Set
        "EXCEPT", "INTERSECT", "UNION",
        // Join
        "APPLY", "CROSS", "FULL", "INNER", "JOIN", "LEFT", "OUTER", "RIGHT",
        // Predicates
        "CONTAINS", "FREETEXT", "IS", "NULL",
        // Pivoting
        "PIVOT", "UNPIVOT",
        // Merging
        "MATCHED",
    ],
    builtinFunctions: [
        // Aggregate
        "AVG", "CHECKSUM_AGG", "COUNT", "COUNT_BIG", "GROUPING", "GROUPING_ID", "MAX", "MIN", "SUM", "STDEV", "STDEVP", "VAR", "VARP",
        // Analytic
        "CUME_DIST", "FIRST_VALUE", "LAG", "LAST_VALUE", "LEAD", "PERCENTILE_CONT", "PERCENTILE_DISC", "PERCENT_RANK",
        // Collation
        "COLLATE", "COLLATIONPROPERTY", "TERTIARY_WEIGHTS",
        // Azure
        "FEDERATION_FILTERING_VALUE",
        // Conversion
        "CAST", "CONVERT", "PARSE", "TRY_CAST", "TRY_CONVERT", "TRY_PARSE",
        // Cryptographic
        "ASYMKEY_ID", "ASYMKEYPROPERTY", "CERTPROPERTY", "CERT_ID", "CRYPT_GEN_RANDOM",
        "DECRYPTBYASYMKEY", "DECRYPTBYCERT", "DECRYPTBYKEY", "DECRYPTBYKEYAUTOASYMKEY", "DECRYPTBYKEYAUTOCERT", "DECRYPTBYPASSPHRASE",
        "ENCRYPTBYASYMKEY", "ENCRYPTBYCERT", "ENCRYPTBYKEY", "ENCRYPTBYPASSPHRASE", "HASHBYTES", "IS_OBJECTSIGNED",
        "KEY_GUID", "KEY_ID", "KEY_NAME", "SIGNBYASYMKEY", "SIGNBYCERT", "SYMKEYPROPERTY", "VERIFYSIGNEDBYCERT", "VERIFYSIGNEDBYASYMKEY",
        // Cursor
        "CURSOR_STATUS",
        // Datatype
        "DATALENGTH", "IDENT_CURRENT", "IDENT_INCR", "IDENT_SEED", "IDENTITY", "SQL_VARIANT_PROPERTY",
        // Datetime
        "CURRENT_TIMESTAMP", "DATEADD", "DATEDIFF", "DATEFROMPARTS", "DATENAME", "DATEPART", "DATETIME2FROMPARTS", "DATETIMEFROMPARTS",
        "DATETIMEOFFSETFROMPARTS", "DAY", "EOMONTH", "GETDATE", "GETUTCDATE", "ISDATE", "MONTH", "SMALLDATETIMEFROMPARTS", "SWITCHOFFSET",
        "SYSDATETIME", "SYSDATETIMEOFFSET", "SYSUTCDATETIME", "TIMEFROMPARTS", "TODATETIMEOFFSET", "YEAR",
        // Logical
        "CHOOSE", "COALESCE", "IIF", "NULLIF",
        // Mathematical
        "ABS", "ACOS", "ASIN", "ATAN", "ATN2", "CEILING", "COS", "COT", "DEGREES", "EXP", "FLOOR", "LOG", "LOG10",
        "PI", "POWER", "RADIANS", "RAND", "ROUND", "SIGN", "SIN", "SQRT", "SQUARE", "TAN",
        // Metadata
        "APP_NAME", "APPLOCK_MODE", "APPLOCK_TEST", "ASSEMBLYPROPERTY", "COL_LENGTH", "COL_NAME", "COLUMNPROPERTY",
        "DATABASE_PRINCIPAL_ID", "DATABASEPROPERTYEX", "DB_ID", "DB_NAME", "FILE_ID", "FILE_IDEX", "FILE_NAME", "FILEGROUP_ID",
        "FILEGROUP_NAME", "FILEGROUPPROPERTY", "FILEPROPERTY", "FULLTEXTCATALOGPROPERTY", "FULLTEXTSERVICEPROPERTY",
        "INDEX_COL", "INDEXKEY_PROPERTY", "INDEXPROPERTY", "OBJECT_DEFINITION", "OBJECT_ID",
        "OBJECT_NAME", "OBJECT_SCHEMA_NAME", "OBJECTPROPERTY", "OBJECTPROPERTYEX", "ORIGINAL_DB_NAME", "PARSENAME",
        "SCHEMA_ID", "SCHEMA_NAME", "SCOPE_IDENTITY", "SERVERPROPERTY", "STATS_DATE", "TYPE_ID", "TYPE_NAME", "TYPEPROPERTY",
        // Ranking
        "DENSE_RANK", "NTILE", "RANK", "ROW_NUMBER",
        // Replication
        "PUBLISHINGSERVERNAME",
        // Rowset
        "OPENDATASOURCE", "OPENQUERY", "OPENROWSET", "OPENXML",
        // Security
        "CERTENCODED", "CERTPRIVATEKEY", "CURRENT_USER",
        "HAS_DBACCESS", "HAS_PERMS_BY_NAME", "IS_MEMBER", "IS_ROLEMEMBER", "IS_SRVROLEMEMBER",
        "LOGINPROPERTY", "ORIGINAL_LOGIN", "PERMISSIONS",
        "PWDENCRYPT", "PWDCOMPARE", "SESSION_USER", "SESSIONPROPERTY", "SUSER_ID", "SUSER_NAME",
        "SUSER_SID", "SUSER_SNAME", "SYSTEM_USER", "USER", "USER_ID", "USER_NAME",
        // String
        "ASCII", "CHAR", "CHARINDEX", "CONCAT", "DIFFERENCE", "FORMAT", "LEFT", "LEN", "LOWER", "LTRIM", "NCHAR", "PATINDEX",
        "QUOTENAME", "REPLACE", "REPLICATE", "REVERSE", "RIGHT",
        "RTRIM", "SOUNDEX", "SPACE", "STR", "STUFF", "SUBSTRING", "UNICODE", "UPPER",
        // System
        "BINARY_CHECKSUM", "CHECKSUM", "CONNECTIONPROPERTY",
        "CONTEXT_INFO", "CURRENT_REQUEST_ID", "ERROR_LINE", "ERROR_NUMBER", "ERROR_MESSAGE",
        "ERROR_PROCEDURE", "ERROR_SEVERITY", "ERROR_STATE", "FORMATMESSAGE", "GETANSINULL", "GET_FILESTREAM_TRANSACTION_CONTEXT", "HOST_ID",
        "HOST_NAME", "ISNULL", "ISNUMERIC", "MIN_ACTIVE_ROWVERSION", "NEWID", "NEWSEQUENTIALID", "ROWCOUNT_BIG", "XACT_STATE",
        // TextImage
        "TEXTPTR", "TEXTVALID",
        // Trigger
        "COLUMNS_UPDATED", "EVENTDATA", "TRIGGER_NESTLEVEL", "UPDATE",
        // ChangeTracking
        "CHANGETABLE", "CHANGE_TRACKING_CONTEXT", "CHANGE_TRACKING_CURRENT_VERSION",
        "CHANGE_TRACKING_IS_COLUMN_IN_MASK", "CHANGE_TRACKING_MIN_VALID_VERSION",
        // FullTextSearch
        "CONTAINSTABLE", "FREETEXTTABLE",
        // SemanticTextSearch
        "SEMANTICKEYPHRASETABLE", "SEMANTICSIMILARITYDETAILSTABLE", "SEMANTICSIMILARITYTABLE",
        // FileStream
        "FILETABLEROOTPATH", "GETFILENAMESPACEPATH", "GETPATHLOCATOR", "PATHNAME",
        // ServiceBroker
        "GET_TRANSMISSION_STATUS",
    ],
    builtinVariables: [
        // Configuration
        "@@DATEFIRST", "@@DBTS", "@@LANGID", "@@LANGUAGE", "@@LOCK_TIMEOUT", "@@MAX_CONNECTIONS", "@@MAX_PRECISION", "@@NESTLEVEL",
        "@@OPTIONS", "@@REMSERVER", "@@SERVERNAME", "@@SERVICENAME", "@@SPID", "@@TEXTSIZE", "@@VERSION",
        // Cursor
        "@@CURSOR_ROWS", "@@FETCH_STATUS",
        // Datetime
        "@@DATEFIRST",
        // Metadata
        "@@PROCID",
        // System
        "@@ERROR", "@@IDENTITY", "@@ROWCOUNT", "@@TRANCOUNT",
        // Stats
        "@@CONNECTIONS", "@@CPU_BUSY", "@@IDLE", "@@IO_BUSY", "@@PACKET_ERRORS", "@@PACK_RECEIVED", "@@PACK_SENT",
        "@@TIMETICKS", "@@TOTAL_ERRORS", "@@TOTAL_READ", "@@TOTAL_WRITE",
    ],
    pseudoColumns: [
        "$ACTION", "$IDENTITY", "$ROWGUID", "$PARTITION",
    ],
    tokenizer: {
        root: [
            { include: "@comments" },
            { include: "@whitespace" },
            { include: "@pseudoColumns" },
            { include: "@numbers" },
            { include: "@strings" },
            { include: "@complexIdentifiers" },
            { include: "@scopes" },
            [/[;,.]/, "delimiter"],
            [/[()]/, "@brackets"],
            [/[\w@#$]+/, {
                cases: {
                    "@keywords": "keyword",
                    "@operators": "operator",
                    "@builtinVariables": "predefined",
                    "@builtinFunctions": "predefined",
                    "@default": "identifier",
                },
            }],
            [/[<>=!%&+\-*/|~^]/, "operator"],
        ],
        whitespace: [
            [/\s+/, "white"],
        ],
        comments: [
            [/--+.*/, "comment"],
            [/\/\*/, { token: "comment.quote", next: "@comment" }],
        ],
        comment: [
            [/[^*/]+/, "comment"],
            // Not supporting nested comments, as nested comments seem to not be standard?
            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
            // [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
            [/\*\//, { token: "comment.quote", next: "@pop" }],
            [/./, "comment"],
        ],
        pseudoColumns: [
            [/[$][A-Za-z_][\w@#$]*/, {
                cases: {
                    "@pseudoColumns": "predefined",
                    "@default": "identifier",
                },
            }],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*/, "number"],
            [/[$][+-]*\d*(\.\d*)?/, "number"],
            [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"],
        ],
        strings: [
            [/N'/, { token: "string", next: "@string" }],
            [/'/, { token: "string", next: "@string" }],
        ],
        string: [
            [/[^']+/, "string"],
            [/''/, "string"],
            [/'/, { token: "string", next: "@pop" }],
        ],
        complexIdentifiers: [
            [/\[/, { token: "identifier.quote", next: "@bracketedIdentifier" }],
            [/"/, { token: "identifier.quote", next: "@quotedIdentifier" }],
        ],
        bracketedIdentifier: [
            [/[^\]]+/, "identifier"],
            [/]]/, "identifier"],
            [/]/, { token: "identifier.quote", next: "@pop" }],
        ],
        quotedIdentifier: [
            [/[^"]+/, "identifier"],
            [/""/, "identifier"],
            [/"/, { token: "identifier.quote", next: "@pop" }],
        ],
        scopes: [
            [/BEGIN\s+(DISTRIBUTED\s+)?TRAN(SACTION)?\b/i, "keyword"],
            [/BEGIN\s+TRY\b/i, { token: "keyword.try" }],
            [/END\s+TRY\b/i, { token: "keyword.try" }],
            [/BEGIN\s+CATCH\b/i, { token: "keyword.catch" }],
            [/END\s+CATCH\b/i, { token: "keyword.catch" }],
            [/(BEGIN|CASE)\b/i, { token: "keyword.block" }],
            [/END\b/i, { token: "keyword.block" }],
            [/WHEN\b/i, { token: "keyword.choice" }],
            [/THEN\b/i, { token: "keyword.choice" }],
        ],
    },
};
