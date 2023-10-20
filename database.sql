CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(1000) NOT NULL,
"due" DATE,
"priority" VARCHAR(50),
"completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("task", "due")
VALUES ('Grocery shop', '2023-10-21');