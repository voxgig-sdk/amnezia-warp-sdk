# GithubWebsite SDK configuration

module GithubWebsiteConfig
  def self.make_config
    {
      "main" => {
        "name" => "GithubWebsite",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://valokda-amnezia.vercel.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "configuration" => {},
        },
      },
      "entity" => {
        "configuration" => {
          "fields" => [
            {
              "active" => true,
              "name" => "config",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "path",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "status",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
          ],
          "name" => "configuration",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/warp",
                  "parts" => [
                    "api",
                    "warp",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.config`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GithubWebsiteFeatures.make_feature(name)
  end
end
