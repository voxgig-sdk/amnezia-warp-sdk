# GithubWebsite SDK configuration


def make_config():
    return {
        "main": {
            "name": "GithubWebsite",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://valokda-amnezia.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "configuration": {},
            },
        },
        "entity": {
      "configuration": {
        "fields": [
          {
            "active": True,
            "name": "config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "path",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "configuration",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/warp",
                "parts": [
                  "api",
                  "warp",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.config`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
