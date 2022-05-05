import express from 'express';

const app = express();
const port = 3000;

const errors = [
	'2022-05-04T13:59:06.147Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-27v2v-49.3.16]: Unhandled Server Error {"message":"Schema query timeout: {"type":"object","additionalProperties":true}"}',
	'2022-05-04T12:52:17.173Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-9wdk7-49.3.16]: Unhandled Server Error {"length":171,"name":"error","severity":"ERROR","code":"42703","hint":"Perhaps you meant to reference the column "cards.links".","position":"7856","file":"parse_relation.c","line":"3514","routine":"errorMissingColumn"}',
	'2022-05-05 06:49:54,141 DEBUG [com.ramirogm.processor.QueueProcessor] (Camel (camel-1) thread #0 - JmsConsumer[BROADCAST]) TransactionId: 005c1248-3ef8-40c7-bc33-65655f9d614c',
	'info: {\"msg\":\"winston info logging here\"} {\"service\":\"user-service\"}',
	'[Wed May 04 19:49:22 2022] [eveniet:debug] [pid 8854:tid 6233] [client 254.130.101.151:22531] Try to program the SMTP circuit, maybe it will bypass the wireless matrix!',
	'<30>1 2022-05-04T20:05:22.039Z internationalschemas.name est 7729 ID625 - Try to compress the PNG matrix, maybe it will compress the solid state transmitter!\r',
	'attention: disk space low.',
	'2022-05-05 01:42:54.587  WARN 1 --- [   scheduling-1] i.p.c.WebhookEventSender    : Response: 410 when sending {"eventId":"445bf2ed-f1f2-4383-8093-435f9023cee4"} to https://webhooks-for-free.io/2234234234234',
	'2022-04-26 01:41:52.348 UTC [26295] ERROR:  relation "cards" does not exist at character 267',
	'1:M 26 Apr 2022 01:51:37.037 * DB saved on disk',
	'2022-05-02 15:59:24.516 UTC [42135] ERROR:  duplicate key value violates unique constraint "cards_slug_version_key"',
	'2022-05-02 15:59:24.516 UTC [42135] DETAIL:  Key (slug, version_major, version_minor, version_patch, version_prerelease, version_build)=(5aa9c978-6ad1-44d7-a6d9-1d82e87086f7, 1, 0, 0, , ) already exists.',
];

app.get('/log', (_req: any, res: any) => {
	console.log(errors[Math.floor(Math.random() * errors.length)]);
	res.send('OK');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
