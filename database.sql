CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(1000) NOT NULL,
"dueDate" DATE,
"priority" VARCHAR(50),
"completed" BOOLEAN DEFAULT 'False'
);

INSERT INTO "todo" ("task", "dueDate")
VALUES ('Testing', '10/21/2023');