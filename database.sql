CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(1000) NOT NULL,
"dueDate" DATE,
"priority" VARCHAR(50),
"completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("task", "dueDate")
VALUES ('Grocery shop', '2023-10-21');