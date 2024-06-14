CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`email` varchar(256),
	`password` varchar(256),
	`role` json,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
