import {fromUint8Array} from "js-base64";
import * as diff from "lib0/diff";
import * as Y from "yjs";

export const getSchemaAsUpdate = (schema?: string | null) => {
  const ydoc = new Y.Doc();
  const _schema = ydoc.getText("schema");
  _schema.insert(
    0,
    const ydoc = new Y.Doc();
    const _schema = ydoc.getText("schema");
    _schema.insert(
        0,
        schema || '')
    return fromUint8Array(Y.encodeStateAsUpdate(ydoc));
};

export const getCustomSchemaAsUpdate = (schema?: string | null) => {
    const tmpYdoc = new Y.Doc();
    const _schema = tmpYdoc.getText("schema");
    console.log(_schema, '_schema')
    _schema.insert(
        0,
        schema || '');
    const encoded = fromUint8Array(Y.encodeStateAsUpdate(tmpYdoc));
    const _final_schema = tmpYdoc.getText("schema");
    return {encoded, _final_schema}
};


//
// datasource db {
//     provider = "postgresql"
//     url      = env("DATABASE_URL")
// }
//
// generator client {
//     provider = "prisma-client-js"
// }
//
// model User {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now())
//     email     String   @unique
//     name      String?
//         role      Role     @default(USER)
//     posts     Post[]
// }
//
// model Post {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     published Boolean  @default(false)
//     title     String   @db.VarChar(255)
//     author    User?    @relation(fields: [authorId], references: [id])
//     authorId  Int?
// }
//
// enum Role {
//     USER
// ADMIN
// }

export const replaceTextDocContent = (textDoc: Y.Text, content: string) => {
    const d = diff.simpleDiffString(textDoc.toString(), content);
    textDoc.delete(d.index, d.remove);
    textDoc.insert(d.index, d.insert);
};