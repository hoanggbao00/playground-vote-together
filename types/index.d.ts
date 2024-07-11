type RoomData = {
	roomId: string;
	roomName: string;
	users: string[];
	posts: Post[];
	dateVotes?: DateVote[];
	dateEstimate?: DateTime;
	isPrivate: boolean;
	password?: string;
	isArchived: boolean;
	isExpired: boolean;
	createdBy?: string;
	createdAt: DateTime;
	expiredAt?: DateTime;
};

type Post = {
	id: string;
	creator: string;
	createdAt: DateTime;
	title: string;
	description?: string;
	attachments: string[];
	votes: string[];
	note?: string;
};

type DateVote = {
	date: DateTime;
	votes?: string[];
	creator: string;
};


type RoomLocal = {
	roomId: string;
	password: string;
	users: string[];
	selected?: string;
	expires: number;
};