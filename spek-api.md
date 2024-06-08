GET
/api/profile/[member-name]
/api/profile/liz

Response

```json
["message": "Success",
  "status": 200,
  "slug": "Liz",
  "data": {
    "id": "clt2cx7go000575xezndd85nt",
    "name": "Liz 🐱",
    "age": 19,
    "images": [
      "https://i.pinimg.com/564x/f7/13/14/f713141717b2f874dc6be0eee9e47da6.jpg",
      "https://i.pinimg.com/564x/e9/64/8d/e9648debaf6cc9ea43c1d30e3f156413.jpg",
      "https://i.pinimg.com/564x/f1/2e/eb/f12eeb7b26c38ba607a28c63a3ad7664.jpg"
    ],
    "stageName": "Liz",
    "birthName": "Kim Ji Won (김지원)",
    "birthday": "21 November 2004",
    "positions": [
      "Vocalist"
    ],
    "nation": "Korea Selatan",
    "height": 172,
    "funFacts": [
      "She has a shy personality but becomes very active when it comes to food. ",
      "Karakter MINIVE -nya adalah anak kucing bernama CHEEZ .",
      "Liz appeared in Taeyeon's \"This Christmas\" MV in 2017"
    ]
  }
]
```

url dicocokan berdasarkan nickname member, contoh, /liz, /yujin, /rei, dll
