
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'GithubWebsite',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://valokda-amnezia.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      configuration: {
      },

    }
  }


  entity = {
    "configuration": {
      "fields": [
        {
          "name": "config",
          "type": "`$OBJECT`"
        },
        {
          "name": "path",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "type": "`$STRING`"
        }
      ],
      "name": "configuration",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/warp",
              "parts": [
                "api",
                "warp"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.config`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

