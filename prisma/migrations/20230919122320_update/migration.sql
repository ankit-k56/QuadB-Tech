-- AlterTable
CREATE SEQUENCE cryptos_id_seq;
ALTER TABLE "Cryptos" ALTER COLUMN "id" SET DEFAULT nextval('cryptos_id_seq');
ALTER SEQUENCE cryptos_id_seq OWNED BY "Cryptos"."id";
