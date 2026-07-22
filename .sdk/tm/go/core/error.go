package core

type GithubWebsiteError struct {
	IsGithubWebsiteError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGithubWebsiteError(code string, msg string, ctx *Context) *GithubWebsiteError {
	return &GithubWebsiteError{
		IsGithubWebsiteError: true,
		Sdk:              "GithubWebsite",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GithubWebsiteError) Error() string {
	return e.Msg
}
