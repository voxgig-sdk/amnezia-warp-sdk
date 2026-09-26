package core

type AmneziaWarpError struct {
	IsAmneziaWarpError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAmneziaWarpError(code string, msg string, ctx *Context) *AmneziaWarpError {
	return &AmneziaWarpError{
		IsAmneziaWarpError: true,
		Sdk:              "AmneziaWarp",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AmneziaWarpError) Error() string {
	return e.Msg
}
