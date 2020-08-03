
exports.seed = function (knex) {
	return knex('videos')
		.then(function () {
			return knex('videos').insert(
				[{
					"owner_id": 4,
					"title": "vulputate",
					"description": "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
					"created_at": "2019-04-05 06:20:43",
					"updated_at": "2019-12-20 03:24:05",
					"video_url": "https://www.youtube.com/embed/ssR-RguvjHo",
					"prompt_id": 24,
					"thumbnail": "http://i3.ytimg.com/vi/ssR-RguvjHo/hqdefault.jpg"
				},{
					"owner_id": 1,
					"title": "suspendisse potenti",
					"description": "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
					"created_at": "2019-09-27 07:53:14",
					"updated_at": "2019-10-02 04:31:10",
					"video_url": "https://www.youtube.com/embed/6Gw5dK48MtI",
					"prompt_id": 22,
					"thumbnail": "http://i3.ytimg.com/vi/6Gw5dK48MtI/hqdefault.jpg"
				},{
					"owner_id": 1,
					"title": "primis",
					"description": "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis",
					"created_at": "2019-05-31 09:24:43",
					"updated_at": "2019-10-28 01:15:43",
					"video_url": "https://www.youtube.com/embed/LQMLFryA_7k",
					"prompt_id": 10,
					"thumbnail": "http://i3.ytimg.com/vi/LQMLFryA_7k/hqdefault.jpg"
				},{
					"owner_id": 5,
					"title": "turpis enim blandit mi",
					"description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate",
					"created_at": "2019-06-30 18:27:46",
					"updated_at": "2019-10-09 04:36:42",
					"video_url": "https://www.youtube.com/embed/13zN4-MVM9g",
					"prompt_id": 25,
					"thumbnail": "http://i3.ytimg.com/vi/13zN4-MVM9g/hqdefault.jpg"
				},{
					"owner_id": 4,
					"title": "fringilla rhoncus mauris",
					"description": "vel augue vestibulum ante ipsum primis in faucibus orci luctus",
					"created_at": "2020-01-12 11:49:47",
					"updated_at": "2019-12-21 05:26:54",
					"video_url": "https://www.youtube.com/embed/LQMLFryA_7k",
					"prompt_id": 15,
					"thumbnail": "http://i3.ytimg.com/vi/LQMLFryA_7k/hqdefault.jpg"
				},]);
		});
};
