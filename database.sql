CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(1000) NOT NULL,
"dueDate" DATE,
"priority" VARCHAR(50) DEFAULT NULL,
"priorityOrder" INTEGER DEFAULT 0,
"completed" BOOLEAN DEFAULT 'False'
);

INSERT INTO "todo" ("task", "dueDate", "priority")
VALUES ('Buy milk', '10/21/2023', 'Medium');