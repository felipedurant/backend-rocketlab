/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codigodebarra` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `disponibilidade` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `imagem` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `Produto` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - Added the required column `codigo` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "descricao" TEXT,
    "codigo" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("id") SELECT "id" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_codigo_key" ON "Produto"("codigo");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id") SELECT "email", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_senha_key" ON "User"("senha");
PRAGMA foreign_key_check("Produto");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
