# logwatcher-demo

A simple express app that outputs a random log from a list of errors.
Trigger this output by executing a request to `GET /log`.

## Usage
```
balena push <local-ip>
curl http://<local-ip>/log
```