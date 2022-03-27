# Calendar Drawer

## Usage

<br>

1. Run node server

```
node server.js
```

2. Call API to server

```
curl -d '{"defaultDate":"2022-02","events":[{"start":"2022-02-01","end":"2022-02-08"},{"start":"2022-02-03","end":"2022-02-10"}]}' \
-H "Content-Type: application/json" \
-X POST http://localhost:3000
```

3. Saved calendar image

> ./images/calendar-1648392983550.png

![calendar-1648392983550](https://user-images.githubusercontent.com/33617083/160288012-c57b798a-7eae-446f-baed-4f2abf967709.png)

<br>
<hr>
<br>

## Calendar View Site

```
https://calendar-drawer.vercel.app
```
