# Calendar Drawer

## Usage

<br>

1. Run node server

```
node server.js
```

2. Call API to server

```json
{
  "width": "500px",
  "height": "300px",
  "defaultDate": "2022-04",
  "events": [
    {
      "start": "2022-03-30",
      "end": "2022-04-04",
      "label": "생리일",
      "bgColor": "#ef856d",
      "color": "#fff"
    },
    {
      "start": "2022-04-13",
      "end": "2022-04-19",
      "label": "가임기",
      "bgColor": "#dceada"
    },
    {
      "start": "2022-04-15",
      "end": "2022-04-15",
      "label": "배란일",
      "bgColor": "#9dc6b3",
      "color": "#fff"
    },
    {
      "start": "2022-04-29",
      "end": "2022-04-30",
      "label": "생리 예상 기간",
      "bgColor": "#fee0cf"
    }
  ]
}
```

```
curl -d '{"width":"500px","height":"300px","defaultDate":"2022-04","events":[{"start":"2022-03-30","end":"2022-04-04","label":"생리일","bgColor":"#ef856d","color":"#fff"},{"start":"2022-04-13","end":"2022-04-19","label":"가임기","bgColor":"#dceada"},{"start":"2022-04-15","end":"2022-04-15","label":"배란일","bgColor":"#9dc6b3","color":"#fff"},{"start":"2022-04-29","end":"2022-04-30","label":"생리 예상 기간","bgColor":"#fee0cf"}]}' \
-H "Content-Type: application/json" \
-X POST http://localhost:8080
```

3. Saved calendar image

> ./images/calendar-1648392983550.png

![calendar-1650818840886](https://user-images.githubusercontent.com/33617083/164987484-eb0ad5ff-7da3-44b3-a4a7-319c79306493.png)

<br>

## Calendar View Site

> https://calendar-drawer.vercel.app
