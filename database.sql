CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"item" VARCHAR(1000) NOT NULL,
"assigned" DATE NOT NULL,
"due" DATE,
"completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("item", "assigned", "due")
VALUES ('Grocery shop', '2023-10-20', '2023-10-21');