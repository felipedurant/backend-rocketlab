/*
  Warnings:

  - You are about to drop the column `descricao` on the `Produto` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("codigo", "id", "nome", "valor") SELECT "codigo", "id", "nome", "valor" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_codigo_key" ON "Produto"("codigo");
PRAGMA foreign_key_check("Produto");
PRAGMA foreign_keys=ON;
