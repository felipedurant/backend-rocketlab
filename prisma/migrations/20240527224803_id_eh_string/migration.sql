/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("codigo", "id", "nome", "valor") SELECT "codigo", "id", "nome", "valor" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");
PRAGMA foreign_key_check("Produto");
PRAGMA foreign_keys=ON;
