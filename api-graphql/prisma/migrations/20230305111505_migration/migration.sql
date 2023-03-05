-- CreateTable
CREATE TABLE "Personne" (
    "id" SERIAL NOT NULL,
    "prenom_nom" TEXT NOT NULL,
    "date_naissance" TIMESTAMP(3) NOT NULL,
    "adresseId" INTEGER,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Personne_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adresse" (
    "id" SERIAL NOT NULL,
    "numero_rue" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "pays" TEXT NOT NULL,
    "code_postal" INTEGER NOT NULL,

    CONSTRAINT "Adresse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Personne" ADD CONSTRAINT "Personne_adresseId_fkey" FOREIGN KEY ("adresseId") REFERENCES "Adresse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
