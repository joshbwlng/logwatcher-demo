import express from 'express';

const app = express();
const port = 3000;

const errors = [
	'2022-05-04T13:59:06.147Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-27v2v-49.3.16]: Unhandled Server Error {"message":"Schema query timeout: {"type":"object","additionalProperties":true}"}',
	'2022-05-04T12:52:17.173Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-9wdk7-49.3.16]: Unhandled Server Error {"length":171,"name":"error","severity":"ERROR","code":"42703","hint":"Perhaps you meant to reference the column "cards.links".","position":"7856","file":"parse_relation.c","line":"3514","routine":"errorMissingColumn"}',
];

app.get('/log', (_req: any, res: any) => {
	console.log(errors[Math.floor(Math.random() * errors.length)]);
	res.send('OK');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
