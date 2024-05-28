-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,
    "categoria" TEXT,
    "carrinho" TEXT DEFAULT 'n'
);
INSERT INTO "new_Produto" ("carrinho", "categoria", "codigo", "id", "nome", "valor") SELECT "carrinho", "categoria", "codigo", "id", "nome", "valor" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check("Produto");
PRAGMA foreign_keys=ON;
